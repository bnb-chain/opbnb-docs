"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[568],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32690:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Differences between opBNB and Layer1 networks",icon:"code",index:"yes",dir:{order:2}},o=void 0,i={unversionedId:"core-concepts/difference",id:"core-concepts/difference",title:"Differences between opBNB and Layer1 networks",description:"This is a living document and is susceptible to changes.",source:"@site/docs/core-concepts/difference.md",sourceDirName:"core-concepts",slug:"/core-concepts/difference",permalink:"/opbnb-docs/docs/core-concepts/difference",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/core-concepts/difference.md",tags:[],version:"current",frontMatter:{title:"Differences between opBNB and Layer1 networks",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"opBNB Architecture",permalink:"/opbnb-docs/docs/core-concepts/architecture"},next:{title:"Economics",permalink:"/opbnb-docs/docs/economics/rollup-economis-explained"}},c={},p=[],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("h1",{id:"differences-between-bsc-and-opbnb-and-ethereum"},"Differences between BSC and opBNB and Ethereum"),(0,r.kt)("p",null,"Before I compare opBNB, BSC and Ethereum, let me give you some basic facts about each chain, so you can understand their features and differences."),(0,r.kt)("p",null,"opBNB is a layer 2 solution that is based on OP Stack, a framework for building scalable blockchains. opBNB has optimized the mining process and the cache data access to achieve a capacity of 100M gas per second, which is much higher than BSC. Our goal is to provide a solution for network congestion problems for highly active applications on the BSC, such as DeFi, NFTs and gaming."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"opBNB")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"BSC")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Ethereum")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Gas Token")),(0,r.kt)("td",{parentName:"tr",align:null},"BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"VM")),(0,r.kt)("td",{parentName:"tr",align:null},"EVM"),(0,r.kt)("td",{parentName:"tr",align:null},"EVM"),(0,r.kt)("td",{parentName:"tr",align:null},"EVM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Gas Price Model")),(0,r.kt)("td",{parentName:"tr",align:null},"EIP-1559"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/gastracker"},"Gas Price Auction")),(0,r.kt)("td",{parentName:"tr",align:null},"EIP-1559")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block Gas Limit")),(0,r.kt)("td",{parentName:"tr",align:null},"100M"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.bscscan.com/chart/gaslimit"},"140M")),(0,r.kt)("td",{parentName:"tr",align:null},"30M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block time")),(0,r.kt)("td",{parentName:"tr",align:null},"1s"),(0,r.kt)("td",{parentName:"tr",align:null},"3s"),(0,r.kt)("td",{parentName:"tr",align:null},"12s")))),(0,r.kt)("p",null,"Parameter differneces:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"opBNB value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Optimism value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Ethereum value (for reference)")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block gas limit"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000,000 gas"),(0,r.kt)("td",{parentName:"tr",align:null},"30,000,000 gas"),(0,r.kt)("td",{parentName:"tr",align:null},"30,000,000 gas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block gas target"),(0,r.kt)("td",{parentName:"tr",align:null},"50,000,000"),(0,r.kt)("td",{parentName:"tr",align:null},"5,000,000 gas"),(0,r.kt)("td",{parentName:"tr",align:null},"15,000,000 gas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EIP-1559 elasticity multiplier"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EIP-1559 denominator"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum base fee increase (per block)"),(0,r.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,r.kt)("td",{parentName:"tr",align:null},"10%"),(0,r.kt)("td",{parentName:"tr",align:null},"12.5%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum base fee decrease (per block)"),(0,r.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,r.kt)("td",{parentName:"tr",align:null},"2%"),(0,r.kt)("td",{parentName:"tr",align:null},"12.5%")))),(0,r.kt)("p",null,"OP Stack has some minor differences, so does opBNB. I just listed the differences here for your reference, for details you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://stack.optimism.io/docs/releases/bedrock/differences/#opcode-differences"},"OP Stack documents"),"."))}d.isMDXComponent=!0}}]);