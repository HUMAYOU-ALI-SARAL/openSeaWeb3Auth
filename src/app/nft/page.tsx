// NFTDetails.tsx
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Chain, OpenSeaSDK, OrderSide } from "opensea-js";
import { ethers } from "ethers";
import { useWeb3Auth } from "@/contexts/web3AuthContext";
import Loader from "@/Component/Loader";
import "./NFTDetails.css";
import Popup from "@/Component/Popup";
import ListingPopup from "@/Component/UpdateNft";

// Define NFT interface
interface NFT {
  identifier: string;
  name: string;
  description: string;
  image_url: string;
  contract: string;
}

const NFTDetails = () => {
  const { web3Provider, getAccounts } = useWeb3Auth();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [collectionName, setCollectionName] = useState<string | null>(null);
  const [prices, setPrices] = useState<Record<string, string | number>>({});
  const [sdk, setSdk] = useState<OpenSeaSDK | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [popData, setPopupData] = useState({
    isOpen: false,
    name: "",
    tokenId: "",
    address: "",
    price: "",
    selectedNft: null as NFT | null
  });

  const [listingPopupData, setListingPopupData] = useState({
    isOpen: false,
    name: "",
    tokenId: "",
    address: "",
    selectedNft: null as NFT | null
  });
  const listPopupHandler = (nft: NFT) => {
    setListingPopupData({
      isOpen: true,
      name: nft.name,
      tokenId: nft.identifier,
      address: nft.contract,
      selectedNft: nft
    });
  };
  const handleListingConfirm = async (price: string) => {
    if (listingPopupData.selectedNft && accountAddress) {
      try {
        await listNFT(
          listingPopupData.selectedNft.contract,
          listingPopupData.selectedNft.identifier,
          price,
          accountAddress
        );
        setListingPopupData(prev => ({ ...prev, isOpen: false }));
        // Optionally refresh NFT data or show success message
        alert("NFT listed successfully!");
      } catch (error) {
        console.error('Error listing NFT:', error);
        throw error;
      }
    }
  };  
  // Fetch account info and set provider once Web3Auth is initialized
  useEffect(() => {
    const fetchAccountAddress = async () => {
      try {
        const account = await getAccounts();
        if (account) {
          setAccountAddress(account);
        }
      } catch (error) {
        console.error("Error fetching account address:", error);
        setError("Failed to fetch account address");
      }
    };

    if (web3Provider) {
      initializeProvider();
      fetchAccountAddress();
    }
  }, [web3Provider, getAccounts]);

  useEffect(() => {
    const fetchNFTDetails = async () => {
      const collectionSlug = localStorage.getItem("collection");
      setCollectionName(collectionSlug);
      setLoading(true);
      setError(null);

      const options = {
        headers: {
          accept: "application/json",
          "x-api-key": "6772ed3ee6c743c78b14305eedc0e9c9",
        },
      };

      try {
        const res = await axios.get(
          `https://testnets-api.opensea.io/api/v2/collection/${collectionSlug}/nfts?limit=30&include_orders=true`,
          options
        );
        setNfts(res.data.nfts || []);
      } catch (err) {
        console.error("Error fetching NFTs:", err);
        setError("Failed to fetch NFTs");
      } finally {
        setLoading(false);
      }
    };

    fetchNFTDetails();
  }, []);

  const initializeProvider = async () => {
    try {
      if (!web3Provider) {
        throw new Error("No Web3Auth provider found!");
      }

      const newProvider = new ethers.BrowserProvider(web3Provider as any);
      setProvider(newProvider);

      const openseaSDK = new OpenSeaSDK(newProvider as any, {
        chain: Chain.Sepolia,
        apiKey: "6772ed3ee6c743c78b14305eedc0e9c9",
      });
      setSdk(openseaSDK);
    } catch (error) {
      console.error("Failed to initialize provider:", error);
      setError("Failed to initialize provider");
    }
  };

  const fetchPrice = async (nftIdentifier: string) => {
    const options = {
      headers: {
        accept: "application/json",
        "x-api-key": "6772ed3ee6c743c78b14305eedc0e9c9",
      },
    };

    try {
      const res = await axios.get(
        `https://testnets-api.opensea.io/api/v2/listings/collection/${collectionName}/nfts/${nftIdentifier}/best`,
        options
      );

      const rawPrice = res.data?.price?.current?.value;
      const price = rawPrice ? rawPrice / 1e18 +"ETH" : "Not Listed!";

      setPrices((prevPrices) => ({
        ...prevPrices,
        [nftIdentifier]: price,
      }));
    } catch (err) {
      console.error("Error fetching price for NFT", nftIdentifier, ":", err);
      setPrices((prevPrices) => ({
        ...prevPrices,
        [nftIdentifier]: "Error",
      }));
    }
  };

  const listNFT = async (
    tokenAddress: string,
    tokenId: string,
    startAmount: string,
    accountAddress: string,
    listingTime = Math.round(Date.now() / 1000)
  ) => {
    try {
      if (!sdk) {
        throw new Error("OpenSea SDK not initialized");
      }

      const order = await sdk.createListing({
        asset: {
          tokenAddress,
          tokenId,
        },
        accountAddress,
        startAmount,
        listingTime,
      });

      console.log('NFT Listed Successfully:', order);
      return order;
    } catch (error) {
      console.error('Error listing NFT:', error);
      setError("Failed to list NFT");
      throw error;
    }
  };

  const buyPopupHandler = async(nft: NFT) => {
    console.log(nft)
    console.log(prices[nft.identifier])
    await fetchPrice(nft.identifier)
    setPopupData({
      isOpen: true,
      name: nft.name,
      tokenId: nft.identifier,
      address: nft.contract,
      price: prices[nft.identifier]?.toString() || "N/A",
      selectedNft: nft
    });
  };

  const handleConfirm = async () => {
    if (popData.selectedNft) {
      try {
        await buyHandler(popData.selectedNft);
        setPopupData(prev => ({ ...prev, isOpen: false }));
      } catch (error) {
        console.error('Error during purchase:', error);
        setError("Failed to complete purchase");
      }
    }
  };

  const buyHandler = async (nft: NFT) => {
    try {
      if (!sdk || !provider || !accountAddress) {
        throw new Error("SDK, provider, or accountAddress is missing.");
      }

      const order = await sdk.api.getOrder({
        side: OrderSide.LISTING,
        assetContractAddress: nft.contract,
        tokenId: nft.identifier,
      });

      if (!order) {
        throw new Error("No active listing found for this NFT");
      }

      const transaction = await sdk.fulfillOrder({
        order,
        accountAddress,
      });

      console.log('Purchase transaction:', transaction);
      alert("NFT purchase successful!");
      window.location.reload();
    } catch (error) {
      console.error('Purchase error:', error);
      throw new Error("Failed to complete the purchase");
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <div style={{ padding: "30px" }}>
        {error && <div className="error-message">{error}</div>}
        {accountAddress && <h2>Connected Account: {accountAddress}</h2>}
        {popData.isOpen && (
          <Popup
            address={popData.address}
            name={popData.name}
            tokenId={popData.tokenId}
            price={popData.price?popData.price:"Not Listed"}
            onConfirm={handleConfirm}
            onCancel={() => setPopupData(prev => ({ ...prev, isOpen: false }))}
          />
        )}
          {listingPopupData.isOpen && (
        <ListingPopup
          address={listingPopupData.address}
          name={listingPopupData.name}
          tokenId={listingPopupData.tokenId}
          onConfirm={handleListingConfirm}
          onCancel={() => setListingPopupData(prev => ({ ...prev, isOpen: false }))}
        />
      )}
      </div>
      <div className="nft-container">
        {nfts.map((nft) => (
          <div className="nft-item" key={nft.identifier}>
            <h2>{nft.name}</h2>
            <img src={nft.image_url} alt={nft.name} className="nft-image" />
            <p>{nft.description}</p>
            <div className="nft-actions">
              <button onClick={() => buyPopupHandler(nft)}>Buy on OpenSea</button>
              <button onClick={() => listPopupHandler(nft)}>
                List on OpenSea
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NFTDetails;