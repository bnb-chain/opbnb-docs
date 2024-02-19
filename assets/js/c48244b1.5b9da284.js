"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[1266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Why do we need opBNB",description:"Learn why opBNB is needed",icon:"code",index:"yes",dir:{order:2}},r=void 0,s={unversionedId:"intro/why-opbnb",id:"intro/why-opbnb",title:"Why do we need opBNB",description:"Learn why opBNB is needed",source:"@site/docs/intro/why-opbnb.md",sourceDirName:"intro",slug:"/intro/why-opbnb",permalink:"/opbnb-docs/docs/intro/why-opbnb",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/intro/why-opbnb.md",tags:[],version:"current",frontMatter:{title:"Why do we need opBNB",description:"Learn why opBNB is needed",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"What is opBNB",permalink:"/opbnb-docs/docs/intro"},next:{title:"Why opBNB as a New Layer2 Solution",permalink:"/opbnb-docs/docs/core-concepts/need-for-opbnb"}},l={},c=[{value:"Why do we need opBNB",id:"why-do-we-need-opbnb",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-do-we-need-opbnb"},"Why do we need opBNB"),(0,o.kt)("p",null,"Large-scale Web3 applications like games, social networks, the metaverse, and high-frequency trading face significant challenges when built directly on Layer 1 chains. Networks like BNB Smart Chain, Ethereum, and Polygon were not designed to handle the high transaction volumes and intensive daily active users of these applications. For example, a game like Crypto Blades on BSC with 300K daily active users and 18 million transactions per day can overload the BNB Smart Chain, leading to unacceptable gas fees and network responsiveness.\nThe gas fees of these Layer 1 chains are still too expensive for most games and applications, which usually prefer low or no fees. A single game with 1 million daily active users could spend thousands of BNB on gas fees during peak periods. Layer 2 scaling solutions built on top of Layer 1 chains offer a solution. They can provide high throughput beyond Layer 1 constraints. The opBNB network is built on OP Stack and designed for over 4,000 TPS and gas fees under $0.001 on average for transfer transactions.\nBy offloading transaction processing and resource usage to Layer 2 while still securely posting data to the underlying BNB Smart Chain, applications gain major throughput benefits without sacrificing decentralisation or composability. Layer 2 solutions are suitable for applications where scale and user experience are crucial, such as games, social networks, the metaverse, and high-frequency trading. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High Performance:")," opBNB is designed to achieve an impressive capacity of 100 million gas per second. This significant increase compared to existing Layer 1 solutions facilitates fast and efficient transaction processing, a crucial requirement for large-scale Web3 applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalability:")," Leveraging the OP Stack framework, opBNB delivers scalability far beyond the constraints of Layer 1 chains. It's designed for over 4,000 Transactions Per Second (TPS), a significant improvement over Layer 1 chains' capabilities, thus accommodating high-volume applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cost Efficiency:")," One of opBNB's significant selling points is reduced transaction cost. It is designed to maintain gas fees under $0.001 on average for transfer transactions, a significant reduction from standard Layer 1 gas fees, making it affordable for a wider user base."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compatibility:")," opBNB aligns its parameters with the BNB Smart Chain. For instance, the block time has been set to match BNB Chain's block time of 1 second, enabling faster transaction processing compared to other Layer 2 solutions like Optimism on Ethereum with a block time of 2 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security:")," opBNB employs sequencers, provers, and verifiers to ensure secure state transitions and transactions. Its rollup is secured by its settlement chain, benefiting from the consensus and data availability solutions of the BNB Smart Chain, ensuring robust security."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexibility:")," The OP Stack foundation provides a modular and replaceable execution design, making opBNB not only dependent on a single client implementation but able to interact with the blockchain network in various ways, enhancing platform decentralization and flexibility."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interoperability:")," opBNB's foundation on OP Stack means it can interoperate with other Layer 2 platforms like Optimism that support EVM and Solidity, thus fostering an open and collaborative ecosystem, driving network effects, security, and innovation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Availability:")," opBNB addresses data accessibility by separating the Data Availability (DA) layer from the execution layer, allowing the selection of various DA options and enabling seamless switching between different DA schemes based on security and performance needs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Community Engagement:")," The launch of the opBNB testnet and mainnet will directly involve the community in testing and providing feedback. This open feedback loop fosters strong community engagement and contributes to the evolution and development of opBNB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Leverage Active BNB User base:")," One of our main advantages is that we can leverage the large user base of the BNB ecosystem, which consists of millions of loyal customers who trust our brand and services. This gives us a competitive edge over other platforms that lack such a network effect and have to spend more on marketing and customer acquisition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integration with BNB Ecosystem:")," opBNB integrates with the BNB ecosystem to leverage the benefits of the BNB Greenfield. This allows us to offer secure, scalable and cost-effective solutions for our clients. By using the BNB token as a payment method, we also enable faster and cheaper transactions across the network.")))}d.isMDXComponent=!0}}]);