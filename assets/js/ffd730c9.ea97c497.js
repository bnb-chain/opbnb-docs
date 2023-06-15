"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Wallet Configuration",icon:"code",index:"yes",dir:{order:4}},i=void 0,l={unversionedId:"for-developers/wallet-configuration",id:"for-developers/wallet-configuration",title:"Wallet Configuration",description:"This is a living document and is susceptible to changes.",source:"@site/docs/for-developers/wallet-configuration.md",sourceDirName:"for-developers",slug:"/for-developers/wallet-configuration",permalink:"/opbnb-docs/docs/for-developers/wallet-configuration",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/for-developers/wallet-configuration.md",tags:[],version:"current",frontMatter:{title:"Wallet Configuration",icon:"code",index:"yes",dir:{order:4}},sidebar:"guideSidebar",previous:{title:"Deposit Tokens to opBNB",permalink:"/opbnb-docs/docs/for-developers/deposit-to-opbnb"},next:{title:"Running a testnet node",permalink:"/opbnb-docs/docs/for-developers/running-a-testnet-node"}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,o.kt)("h1",{id:"wallet-configuration"},"Wallet configuration"),(0,o.kt)("p",null,"To configure your Metamask wallet to work with opBNB, you will need to add both the BNB Smart Chain testnet and the opBNB network. Follow these steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the BNB Smart Chain testnet to your Metamask wallet. This is the Layer 1 blockchain that opBNB is built on top of."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Network Name: BSC Testnet"),(0,o.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,o.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s3.binance.org:8545/"},"https://data-seed-prebsc-1-s1.binance.org:8545")),(0,o.kt)("li",{parentName:"ul"},"ChainID: 97"),(0,o.kt)("li",{parentName:"ul"},"Symbol: tBNB"),(0,o.kt)("li",{parentName:"ul"},"Explorer: ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"image-20230615151355713",src:n(72431).Z,width:"752",height:"900"})))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the opBNB network to your Metamask wallet. This is the actual Layer 2 network you will interact with.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Network Name: opBNB Testnet"),(0,o.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,o.kt)("a",{parentName:"li",href:"https://opbnb-testnet-rpc.bnbchain.org"},"https://opbnb-testnet-rpc.bnbchain.org")),(0,o.kt)("li",{parentName:"ul"},"ChainID: 5611"),(0,o.kt)("li",{parentName:"ul"},"Symbol: tBNB"),(0,o.kt)("li",{parentName:"ul"},"Explorer: ",(0,o.kt)("a",{parentName:"li",href:"http://opbnbscan.com/"},"http://opbnbscan.com/"))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230615151623365",src:n(71212).Z,width:"752",height:"1072"})))}u.isMDXComponent=!0},72431:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bsc-testnet-config-9d193c027066cd8560916e28c467f146.png"},71212:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/opBNB-testnet-config-859b9d0f61915bce3b8b89200459faa0.png"}}]);