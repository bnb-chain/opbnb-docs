"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,u=d["".concat(c,".").concat(b)]||d[b]||h[b]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},31910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"FAQ",icon:"ask",sidebar_collapsed:!0,dir:{order:8}},i=void 0,s={unversionedId:"faq/opbnb-faq",id:"faq/opbnb-faq",title:"FAQ",description:"This is a living document and is susceptible to changes.",source:"@site/docs/faq/opbnb-faq.md",sourceDirName:"faq",slug:"/faq/opbnb-faq",permalink:"/opbnb-docs/docs/faq/opbnb-faq",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/faq/opbnb-faq.md",tags:[],version:"current",frontMatter:{title:"FAQ",icon:"ask",sidebar_collapsed:!0,dir:{order:8}},sidebar:"guideSidebar",previous:{title:"Gas and Fees",permalink:"/opbnb-docs/docs/rollup-economics/gas-and-fees"}},c={},l=[{value:"How do you expect the TPS of the opBNB?",id:"how-do-you-expect-the-tps-of-the-opbnb",level:3},{value:"How much does transfer transaction cost on opBNB, and why do you think opBNB has the capacity to enable the mass adoption of daily small amount transactions?",id:"how-much-does-transfer-transaction-cost-on-opbnb-and-why-do-you-think-opbnb-has-the-capacity-to-enable-the-mass-adoption-of-daily-small-amount-transactions",level:3},{value:"What impact of opBNB can bring to web3 games?",id:"what-impact-of-opbnb-can-bring-to-web3-games",level:3},{value:"What is the difference between opBNB and other optimism based layer 2 solution, like base?",id:"what-is-the-difference-between-opbnb-and-other-optimism-based-layer-2-solution-like-base",level:3},{value:"We already have the zkBNB as a scaling solution, why opBNB is needed?",id:"we-already-have-the-zkbnb-as-a-scaling-solution-why-opbnb-is-needed",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-do-you-expect-the-tps-of-the-opbnb"},"How do you expect the TPS of the opBNB?"),(0,o.kt)("p",null,"The TPS of opBNB can be estimated to be around 4,761 transactions per second based on the calculations. This is significantly higher than Ethereum's current TPS and can enable more frequent daily transactions."),(0,o.kt)("h3",{id:"how-much-does-transfer-transaction-cost-on-opbnb-and-why-do-you-think-opbnb-has-the-capacity-to-enable-the-mass-adoption-of-daily-small-amount-transactions"},"How much does transfer transaction cost on opBNB, and why do you think opBNB has the capacity to enable the mass adoption of daily small amount transactions?"),(0,o.kt)("p",null,"opBNB can make small daily transactions possible because the transaction fees are very low, around $0.005 per transaction. This is much lower than traditional payment methods like credit cards which charge around 1-3% per transaction. The low fees on opBNB make it economical for small purchases and daily transactions."),(0,o.kt)("h3",{id:"what-impact-of-opbnb-can-bring-to-web3-games"},"What impact of opBNB can bring to web3 games?"),(0,o.kt)("p",null,"Performance is important for games because gamers expect a highly responsive experience. Any lag, delay or choppiness can hamper enjoyment and immersion in the game. For blockchain games, fast transaction speeds and throughput are crucial to enable a seamless user experience. Gamers expect in-game assets and currencies to be transferred instantly, so the underlying blockchain network must be high performance"),(0,o.kt)("h3",{id:"what-is-the-difference-between-opbnb-and-other-optimism-based-layer-2-solution-like-base"},"What is the difference between opBNB and other optimism based layer 2 solution, like base?"),(0,o.kt)("p",null,"opBNB is the first layer 2 optimistic rollup on BSC, and BSC layer 1 cost is much lower than ETH, so the cost of layer 2 on BSC will give application developers a more affordable solution. Another difference is the opBNB will include the performance optimization techniques that has been used in BSC to have a much better performance."),(0,o.kt)("h3",{id:"we-already-have-the-zkbnb-as-a-scaling-solution-why-opbnb-is-needed"},"We already have the zkBNB as a scaling solution, why opBNB is needed?"),(0,o.kt)("p",null,"zkBNB is not EVM-comptatible, which means it is more suitable for NFT and token transactions, not for generic dApps. opBNB`s programability is to support applications that need more flexibility."))}d.isMDXComponent=!0}}]);