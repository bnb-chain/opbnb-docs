"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[4726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Gas and Fees",description:"Learn about the Gas and Fees structure of opBNB",icon:"code",index:"yes",dir:{order:2}},i=void 0,s={unversionedId:"core-concepts/gas-and-fees",id:"core-concepts/gas-and-fees",title:"Gas and Fees",description:"Learn about the Gas and Fees structure of opBNB",source:"@site/docs/core-concepts/gas-and-fees.md",sourceDirName:"core-concepts",slug:"/core-concepts/gas-and-fees",permalink:"/opbnb-docs/docs/core-concepts/gas-and-fees",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/core-concepts/gas-and-fees.md",tags:[],version:"current",frontMatter:{title:"Gas and Fees",description:"Learn about the Gas and Fees structure of opBNB",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"opBNB Protocol addresses",permalink:"/opbnb-docs/docs/core-concepts/cross-chain"},next:{title:"Account Abstraction on opBNB - Adoption of AA on L2 of BSC with cost efficiency",permalink:"/opbnb-docs/docs/core-concepts/account-abstraction-on-opbnb"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Current configuration",id:"current-configuration",level:2},{value:"What does this means",id:"what-does-this-means",level:2},{value:"How opBNB keep reducing the cost of L2 transactions",id:"how-opbnb-keep-reducing-the-cost-of-l2-transactions",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"OpBNB is a Layer 2 scaling solution that aims to achieve higher throughput and lower cost for transactions on the BNB Smart Chain. The cost of opBNB transactions consists of two components: the Layer 2 gas fee and the Layer 1 gas fee. The Layer 2 gas fee reflects the computational complexity of the transaction. The Layer 1 gas fee covers the expense of submitting batches of transactions to the BSC for verification and finality."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gas price = base price + priority price")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layer 2 transaction cost = Layer 2 gas price x Layer 2 gas consumed + Layer 1 gas price x Layer 1 gas consumed.")),(0,r.kt)("h2",{id:"current-configuration"},"Current configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Floor Base Price"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum Priority Price"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opBNB Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"8 wei (dynamic)"),(0,r.kt)("td",{parentName:"tr",align:null},"1001 wei")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opBNB Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"8 wei (dynamic)"),(0,r.kt)("td",{parentName:"tr",align:null},"1001 wei")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BSC Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BSC Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("h2",{id:"what-does-this-means"},"What does this means"),(0,r.kt)("p",null,"Please note the floor base price is the minimum base price opBNB can set, and according to the usage, the base price can fluctuate. For example, according to the current configuration, if the usage of a block reaches 50% of 100M gas, the base price will increase by 12.5%."),(0,r.kt)("p",null,"The minimum priority price is preconfigured, and users can give any priority price that is higher than this number. Usually users will get the estimate gas price by calling the API of \u201cestimate gas price\u201d. It is a recommended gas price according to the current average gas price of history blocks."),(0,r.kt)("p",null,"BNB Chain aims to reduce the transaction cost to the level that enable the mass adoption, for opBNB, the target of the transfer transaction is lower than $0.001."),(0,r.kt)("h2",{id:"how-opbnb-keep-reducing-the-cost-of-l2-transactions"},"How opBNB keep reducing the cost of L2 transactions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enhanced Data Compression"),": Implementing more advanced data compression algorithms to reduce the size of L2 transaction data before submitting it to L1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Efficient Transaction Batching"),": Optimizing how transactions are batched together to maximize space efficiency and reduce costs per transaction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Availability Solutions"),": Utilizing solutions like those in BNB Greenfield for offloading some data storage from the main chain, thereby reducing data costs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zero-Knowledge Proofs"),": Employing zero-knowledge proofs to validate transactions without disclosing full transaction data, thus minimizing L1 data load.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Protocol-Level Optimizations"),": Making improvements at the protocol level to reduce overhead in transaction processing on L2."))))}d.isMDXComponent=!0}}]);