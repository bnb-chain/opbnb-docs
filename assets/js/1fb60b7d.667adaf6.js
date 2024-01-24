"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[2594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Developer Cheat Sheet",index:"yes"},i="Hardware Requirements",l={unversionedId:"build-on-opbnb/developer-cheat-sheet",id:"build-on-opbnb/developer-cheat-sheet",title:"Developer Cheat Sheet",description:"Setting up a node in the BNB Chain ecosystem requires understanding hardware requirements. The Minimum Hardware Requirement ensures efficient management of average transaction volumes, while the Recommended Hardware Requirement caters to high performance, capable of processing up to 100 million gas per second and handling 1k QPS (Query Per Second), ideal for heavy transaction loads or peak efficiency.",source:"@site/docs/build-on-opbnb/developer-cheat-sheet.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/developer-cheat-sheet",permalink:"/opbnb-docs/docs/build-on-opbnb/developer-cheat-sheet",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/developer-cheat-sheet.md",tags:[],version:"current",frontMatter:{title:"Developer Cheat Sheet",index:"yes"},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/opbnb-docs/docs/build-on-opbnb/getting-started"},next:{title:"Wallet Configuration",permalink:"/opbnb-docs/docs/build-on-opbnb/wallet-configuration"}},p={},s=[{value:"Processor",id:"processor",level:2},{value:"Memory",id:"memory",level:2},{value:"Storage",id:"storage",level:2},{value:"Network",id:"network",level:2},{value:"Import JSON Model",id:"import-json-model",level:2},{value:"Important Metrics",id:"important-metrics",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("p",null,"Setting up a node in the BNB Chain ecosystem requires understanding hardware requirements. The Minimum Hardware Requirement ensures efficient management of average transaction volumes, while the Recommended Hardware Requirement caters to high performance, capable of processing up to 100 million gas per second and handling 1k QPS (Query Per Second), ideal for heavy transaction loads or peak efficiency."),(0,o.kt)("h2",{id:"processor"},"Processor"),(0,o.kt)("p",null,"CPU Type: Intel Xeon Scalable processors (Ice Lake) or newer "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"op-node:"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum: 4 cores"),(0,o.kt)("li",{parentName:"ul"},"Recommended: 8 cores or more")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"op-geth:")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum: 12 cores"),(0,o.kt)("li",{parentName:"ul"},"Recommended: 16 cores or more")),(0,o.kt)("h2",{id:"memory"},"Memory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"op-node:"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum: 4 GB"),(0,o.kt)("li",{parentName:"ul"},"Recommended: 16 GB")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"op-geth:")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum: 10 GB"),(0,o.kt)("li",{parentName:"ul"},"Recommended: 32 GB")),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"op-node:"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No additional permanent storage required")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"op-geth:")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires 3000 IOPS or above"),(0,o.kt)("li",{parentName:"ul"},"1TB or more for extended transaction history")),(0,o.kt)("h2",{id:"network"},"Network"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stable network with 125MB/s or higher bandwidth")),(0,o.kt)("h1",{id:"running-your-own-opbnb-node"},"Running Your Own opBNB Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Local development node setup: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/opbnb-docs/docs/tutorials/running-a-local-development-environment"},"Running a Local Development Environment")),(0,o.kt)("li",{parentName:"ul"},"Mainnet/testnet node setup: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/opbnb-docs/docs/tutorials/running-a-local-node"},"Running a Local Node")),(0,o.kt)("li",{parentName:"ul"},"Smart Contract Verification: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/opbnb-docs/docs/tutorials/opbnbscan-verify-hardhat-truffle"},"opBNBScan Verify with Hardhat & Truffle"))),(0,o.kt)("h1",{id:"performance-stability-optimization"},"Performance Stability Optimization"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"L1 RPC Configuration:")),(0,o.kt)("p",null,"Configure multiple L1 RPC endpoints for op-node setups on L2 solutions like opBNB to ensure synchronization with the L1 chain, security, data integrity, and reduced risk of single point of failure."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  export L1_RPC1=https://bsc-dataseed.bnbchain.org\n  export L1_RPC2=https://bsc.nodereal.io\n  --l1=rpc1,rpc2\u2026\n")),(0,o.kt)("p",null,"Optimize L1 receipt retrieval performance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"op-node:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"--l1.rpckind=bsc_fullnode"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"L2 Sync Mode Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"op-geth:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"--gcmode=archive")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"op-node:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"--l2.engine-sync=true"))),(0,o.kt)("h1",{id:"node-health-monitoring"},"Node Health Monitoring"),(0,o.kt)("h2",{id:"import-json-model"},"Import JSON Model"),(0,o.kt)("p",null,"Monitor your node's health by importing the ",(0,o.kt)("a",{target:"_blank",href:n(47259).Z},"rpc_nodes.json")," model."),(0,o.kt)("h2",{id:"important-metrics"},"Important Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chain_head_header:")," Indicates the current unsafe block number of the node. A non-increasing number suggests syncing issues; a decreasing number indicates reorgs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_duration_all:")," Histogram of RPC server request durations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_requests:")," Total requests to the RPC server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"p2p_peers:")," Number of peers connected to op-geth. Essential for syncing through the engine. If zero, the op-geth cannot sync."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"op_node_default_peer_count:")," Number of peers connected to op-node. Without peers, the op-node cannot sync unsafe blocks, leading to lag behind the sequencer due to reliance on L1 syncing.")),(0,o.kt)("hr",null))}c.isMDXComponent=!0},47259:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/rpc_nodes-8678c8e149b6a573e4e41f2c67e7bc64.json"}}]);