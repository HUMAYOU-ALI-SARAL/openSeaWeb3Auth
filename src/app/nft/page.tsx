/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Chain, OpenSeaSDK, OrderSide } from "opensea-js";
import { ethers } from "ethers";
import { useWeb3Auth } from "@/contexts/web3AuthContext";
import Loader from "@/Component/Loader"; // Assuming you already have a Loader component
import "./NFTDetails.css";

// Define NFT interface
interface NFT {
  identifier: string;
  name: string;
  description: string;
  image_url: string;
  contract: string;
}

const NFTDetails = () => {
  const { web3Provider,getAccounts } = useWeb3Auth();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [collectionName, setCollectionName] = useState<string | null>(null);
  const [prices, setPrices] = useState<Record<string, string | number>>({});
  const [sdk, setSdk] = useState<OpenSeaSDK | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

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
      }
    };

    if (web3Provider) {
      initializeProvider();
      fetchAccountAddress();
    }
  }, [web3Provider]);

  useEffect(() => {
    const fetchNFTDetails = async () => {
      const collectionSlug = localStorage.getItem("collection");
      setCollectionName(collectionSlug);
      setLoading(true);

      const options = {
        headers: {
          accept: "application/json",
          "x-api-key": "6772ed3ee6c743c78b14305eedc0e9c9",
        },
      };

      try {
        const res = await axios.get(
          `https://testnets-api.opensea.io/api/v2/collection/${collectionSlug}/nfts?limit=30`,
          options
        );
        setNfts(res.data.nfts || []);
      } catch (err) {
        console.error("Error fetching NFTs:", err);
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

      const newProvider =new ethers.BrowserProvider(web3Provider as any);
      setProvider(newProvider as any);

      const openseaSDK = new OpenSeaSDK(newProvider as any, {
        chain: Chain.Sepolia,
        apiKey: "6772ed3ee6c743c78b14305eedc0e9c9",
      });
      setSdk(openseaSDK);
    } catch (error) {
      console.error("Failed to initialize provider:", error);
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
      const price = rawPrice ? rawPrice / 1e18 : "Not Available";

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

  const buyHandler = async (nft: NFT) => {
    try {
      if (!sdk || !provider || !accountAddress) {
        throw new Error("SDK, provider, or accountAddress is missing.");
      }
      console.log(accountAddress, "this is the account address");
  
      const order = await sdk?.api?.getOrder({
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
  
      console.log(transaction);
      alert("NFT purchase successful!");
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error(error || "Failed to complete the purchase.");
      alert("Failed to purchase the NFT. Please try again.");
    }
  };
  

  if (loading) return <Loader />;

  return (
    <div className="nft-container">
      {nfts.map((nft) => (
        <div className="nft-item" key={nft.identifier}>
          <h2>{nft.name}</h2>
          <img src={nft.image_url} alt={nft.name} className="nft-image" />
          <p>{nft.description}</p>
          <div className="nft-actions">
            <button onClick={() => fetchPrice(nft.identifier)}>
              {prices[nft.identifier] !== undefined
                ? `${prices[nft.identifier]} ETH`
                : "See Price"}
            </button>
            <button onClick={() => buyHandler(nft)}>Buy on OpenSea</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTDetails;
