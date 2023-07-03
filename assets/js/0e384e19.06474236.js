"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"What is opBNB",icon:"code",index:"yes",dir:{order:1}},a=void 0,s={unversionedId:"intro",id:"intro",title:"What is opBNB",description:"This is a living document and is susceptible to changes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/opbnb-docs/docs/intro",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/intro.md",tags:[],version:"current",frontMatter:{title:"What is opBNB",icon:"code",index:"yes",dir:{order:1}},sidebar:"guideSidebar",next:{title:"Why do we need opBNB",permalink:"/opbnb-docs/docs/core-concepts/why-opbnb"}},c={},p=[],l={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,o.kt)("h1",{id:"opbnb---high-performance-layer-2-solution"},"opBNB - High-performance layer 2 solution"),(0,o.kt)("p",null,"The opBNB network is the Layer 2 scaling solution for the BNB Smart Chain powered by ",(0,o.kt)("a",{parentName:"p",href:"https://community.optimism.io/docs/developers/bedrock/"},"bedrock version")," of Optimism OP Stack. It works by offloading transaction processing and resource usage from the BNB Smart Chain, while still posting data to the underlying mainnet. Users interact with the opBNB network by depositing funds from BSC and using applications and contracts on opBNB. Sequencers then aggregate transactions, compute state transitions and submit them to the rollup contract on BSC. Provers generate cryptographic proofs that prove the validity of these state transitions, and Verifiers check the proofs to verify the opBNB state is correct. At its core, opBNB allows users to deposit and withdraw funds, use smart contracts, and view network data with high throughput and low fees. By leveraging Layer 2, opBNB is able to scale beyond the constraints of the BNB Smart Chain and provide an improved experience for users."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230621190244472",src:r(83492).Z,width:"3085",height:"1296"})),(0,o.kt)("p",null,"Besides the ",(0,o.kt)("a",{parentName:"p",href:"https://community.optimism.io/docs/developers/bedrock/differences/"},"differentiators of bedrock"),", opBNB is the solution that we aim to provide the best optimisitic solution on the BSC. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Capacity can reach to > 100m gas per second, which is mucher higher than other layer 2 solutions on the Ethereum."),(0,o.kt)("li",{parentName:"ul"},"Gas fee of transfer can reach as low as $0.005 on average."),(0,o.kt)("li",{parentName:"ul"},"block time is 1 second.")))}d.isMDXComponent=!0},83492:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/opBNB-intro-b0dede4ca1eca3a6abc0d350b9376ada.png"}}]);