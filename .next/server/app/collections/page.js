(()=>{var e={};e.id=116,e.ids=[116],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},79646:e=>{"use strict";e.exports=require("child_process")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},41204:e=>{"use strict";e.exports=require("string_decoder")},34631:e=>{"use strict";e.exports=require("tls")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},77598:e=>{"use strict";e.exports=require("node:crypto")},39727:()=>{},47990:()=>{},4516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,pages:()=>u,routeModule:()=>p,tree:()=>c});var s=r(70260),o=r(28203),n=r(25155),i=r.n(n),a=r(67292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["collections",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,74515)),"/home/humayou/Desktop/openSeaWeb3Auth/src/app/collections/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"/home/humayou/Desktop/openSeaWeb3Auth/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/humayou/Desktop/openSeaWeb3Auth/src/app/collections/page.tsx"],d={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/collections/page",pathname:"/collections",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},22694:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},92430:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},16319:(e,t,r)=>{Promise.resolve().then(r.bind(r,74515))},53271:(e,t,r)=>{Promise.resolve().then(r.bind(r,17991))},28288:(e,t,r)=>{Promise.resolve().then(r.bind(r,71354))},15136:(e,t,r)=>{Promise.resolve().then(r.bind(r,39246))},14779:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var s=r(45512);r(58009),r(31738);let o=()=>(0,s.jsxs)("div",{className:"loader-container",children:[(0,s.jsxs)("div",{className:"loader",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]}),(0,s.jsx)("p",{children:"Loading..."})]})},17991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(45512),o=r(58009),n=r(85668),i=r(28531),a=r.n(i),l=r(14779);r(31587);let c=()=>{let[e,t]=(0,o.useState)([]),[r,i]=(0,o.useState)(!0),[c,u]=(0,o.useState)(null);if((0,o.useEffect)(()=>{(async()=>{i(!0);try{let e=await n.A.get("https://testnets-api.opensea.io/api/v2/collections?chain=sepolia&creator_username=spheraworld&limit=10",{headers:{accept:"application/json","x-api-key":"6772ed3ee6c743c78b14305eedc0e9c9"}});t(e.data.collections||[]),i(!1)}catch(e){console.error("Error fetching data:",e),u("Failed to fetch data"),i(!1)}})()},[]),r)return(0,s.jsx)(l.A,{});if(c)return(0,s.jsx)("div",{className:"error",children:c});let d=(e,t)=>{t.forEach(t=>{localStorage.setItem(e,JSON.stringify(t))}),localStorage.setItem("collection",e)};return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{className:"title",children:"Available NFT Collections"}),(0,s.jsx)("div",{className:"nft-list",children:e.map((e,t)=>(0,s.jsx)(a(),{href:"/nft",children:(0,s.jsxs)("div",{className:"nft-item",onClick:()=>d(e.collection,e.contracts),children:[(0,s.jsx)("img",{src:e.image_url,alt:e.name,className:"nft-image"}),(0,s.jsx)("h3",{className:"nft-name",children:e.name}),(0,s.jsx)("p",{className:"nft-description",children:e.description})]})},t))})]})}},39246:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(45512);r(58009);var o=r(95259);function n({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("title",{children:"OpenSea Implementation"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("body",{children:(0,s.jsx)(o.V,{children:(0,s.jsx)("main",{style:{paddingTop:"60px"},children:e})})})]})}r(44263)},95259:(e,t,r)=>{"use strict";r.d(t,{V:()=>g,f:()=>y});var s=r(45512),o=r(58009),n=r(63598),i=r(63403),a=r(52528),l=r(23105),c=r(2293),u=r(98227);let d={chainNamespace:i.l.EIP155,chainId:"0xaa36a7",rpcTarget:"https://rpc.ankr.com/eth_sepolia",displayName:"Ethereum Sepolia Testnet",blockExplorerUrl:"https://sepolia.etherscan.io",ticker:"ETH",tickerName:"Ethereum",logo:"https://cryptologos.cc/logos/ethereum-eth-logo.png"},p=new l.B({config:{chainConfig:d}}),h=new c.G({clientId:"BKruFzwW1MziuExIa-F9UF1EknlpTqjqyqujvHJYsJtP2yC_JedFmP-Nm7NnGfSJ5Y-f77jKybowksGhydMP_aU",web3AuthNetwork:a.Lr.SAPPHIRE_DEVNET,privateKeyProvider:p}),m=new u.M;h.configureAdapter(m);var x=r(45218);r(33291);let f={getAccounts:async e=>{try{let t=new x.k(e),r=(await t.getSigner()).getAddress();return await r}catch(e){return e}}};var v=r(25998);let b=(0,o.createContext)(null);function g({children:e}){let[t,r]=(0,o.useState)(null),[i,a]=(0,o.useState)(!1),[l,c]=(0,o.useState)(null),u=async e=>{try{let t=await h.connectTo(n.Db.AUTH,{loginProvider:e});r(t),h.connected&&(a(!0),await d());let s=await p();console.log(s,"this is useinfo")}catch(e){console.error("Login failed:",e)}},d=async()=>{try{let e=await x();c(e)}catch(e){console.error("Error fetching account:",e)}},p=async()=>{try{return await h.getUserInfo()}catch(e){throw console.error("Error getting user info:",e),e}},m=async()=>{try{await h.logout(),r(null),a(!1),c(null),v.A.remove("token"),localStorage.setItem("walletAddress",""),window.location.reload()}catch(e){console.error("Logout failed:",e)}},x=async()=>{if(!t)return console.warn("Provider not initialized yet"),null;try{let e=await f.getAccounts(t);return localStorage.setItem("walletAddress",e),e}catch(e){return console.error("Error getting accounts:",e),null}};return(0,s.jsx)(b.Provider,{value:{web3Provider:t,loggedIn:i,login:u,logout:m,getUserInfo:p,getAccounts:x},children:e})}function y(){let e=(0,o.useContext)(b);if(!e)throw Error("useWeb3Auth must be used within a Web3AuthProvider");return e}},74515:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/humayou/Desktop/openSeaWeb3Auth/src/app/collections/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/humayou/Desktop/openSeaWeb3Auth/src/app/collections/page.tsx","default")},71354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/humayou/Desktop/openSeaWeb3Auth/src/app/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/humayou/Desktop/openSeaWeb3Auth/src/app/layout.tsx","default")},70440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(88077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},31738:()=>{},31587:()=>{},44263:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,131,77,902],()=>r(4516));module.exports=s})();