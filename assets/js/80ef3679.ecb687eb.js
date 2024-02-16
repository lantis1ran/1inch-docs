"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[2051],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>b});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(b,i(i({ref:e},h),{},{components:a})):n.createElement(b,i({ref:e},h))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37237:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1},i="Summary",s={unversionedId:"rabbithole/summary",id:"rabbithole/summary",title:"Summary",description:"The RabbitHole is an innovative feature that aims to solve the issue of sandwich attacks for those wallets which don't support the Flashbots option.",source:"@site/docs/rabbithole/summary.mdx",sourceDirName:"rabbithole",slug:"/rabbithole/summary",permalink:"/docs/rabbithole/summary",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/rabbithole/summary.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Spot Price Aggregator",permalink:"/docs/spot-price-aggregator/introduction"},next:{title:"Flow",permalink:"/docs/rabbithole/flow"}},l={},c=[],h={toc:c},u="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The RabbitHole is an innovative feature that aims to solve the issue of sandwich attacks for those wallets which don't support the Flashbots option."),(0,r.kt)("p",null,"As of 17.10.22, the feature will be implemented only for MetaMask wallets on the Mainnet.\nWhile some wallets support Flashbots, MetaMask doesn't and, therefore, after creating a transaction and signing it with the private key, it is always sent to the memory pool rather than directly to the validators. In the memory pool, transactions are vulnerable to sandwich attacks.\nSo, the 1inch RabbitHole acts as a proxy server and intermediary between MetaMask and Flashbots. This proxy server switches MetaMask from the Mainnet to the ad hoc network RabbitHole, which substitutes the Mainnet as it has the same ID - \u201c1\u201d."),(0,r.kt)("p",null,"So, MetaMask signs the transaction and sends it to the blockchain, recognizing the network as the Mainnet. But the transaction is sent via the RabbitHole, which directs it to our node. The node checks the transaction destination and, if it is the 1inch Router, the transaction is sent to Flashbots. If there is another destination, it is sent to the Mainnet"),(0,r.kt)("p",null,"In the current version of the RabbitHole, the user can\u2019t change the network to the RabbitHole in the dApp and has to do that in MetaMask. There are two reasons for that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When calling MetaMask to change the network, the chain ID is used as the function argument. The Ethereum Mainnet and the RabbitHole have the same chain ID = 1. RPC URL is not specified as an argument, so the app cannot change the grid through this call."),(0,r.kt)("li",{parentName:"ol"},"If we create any other chain ID for the RabbitHole, it won\u2019t work. E.g., we will create chain ID 666. The chain ID, along with all callData, is hashed in a cryptographic signature. So, this transaction signed in a MetaMask wallet connected to the network with ID = 666 will be available for execution only in the network with ID = 666. If we try to send this transaction to a validator on the Mainnet, it won\u2019t work. We cannot change this parameter on the go, as it is built into the signature to protect transaction data against manipulations.\nThe network change call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers });\n")),(0,r.kt)("p",null,"We will be able to implement the connection of the RabbitHole network from the dApp if MetaMask enables programmatically setting a custom network with the same chain ID but a different RPC URL. Alternatively, if MetaMask can sign the transaction but not broadcast it, there will be no need for the RabbitHole, as it will be possible to implement the Flashbots option."))}p.isMDXComponent=!0}}]);