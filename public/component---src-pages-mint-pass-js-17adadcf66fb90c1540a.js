(self.webpackChunknft=self.webpackChunknft||[]).push([[93],{7757:function(e,t,n){e.exports=n(5666)},4230:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(p){return void n(p)}s.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function s(e){r(o,a,i,s,u,"next",e)}function u(e){r(o,a,i,s,u,"throw",e)}s(void 0)}))}}n.r(t),n.d(t,{default:function(){return O}});var i,o,s=n(7757),u=n.n(s),p=n(7294),l=n(5444),c=n(3090),y=n(3751),d=n.p+"static/presale-6b0f6c024f98c2dd66132031d6048262.jpg";if("undefined"!=typeof window){var m,f,h=function(){var e=a(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=window.ethereum).request({method:"eth_requestAccounts"}).then((function(e){provider=new ethers.providers.Web3Provider(t),A=provider.getSigner(),F===x&&i()})).catch((function(e){4001===e.code?console.log("Please connect to MetaMask."):(console.error(e),alert("Пожалуйста, обновите страницу"))})),e.next=4,b();case 4:return(F=t.networkVersion)===x?g():L&&(L=!1),console.log("current_network",F),e.next=9,t.request({method:"eth_accounts"}).catch(v());case 9:n=e.sent,m=n[0],console.log("wallet",m);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=a(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=a(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ethereum,e.prev=1,e.next=4,t.request({method:"wallet_switchEthereumChain",params:[{chainId:x}]}).then((function(e){})).catch();case 4:e.next=19;break;case 6:if(e.prev=6,e.t0=e.catch(1),A=void 0,L=!1,T(),4902!==e.t0.code){e.next=19;break}return e.prev=12,e.next=15,w();case 15:e.next=19;break;case 17:e.prev=17,e.t1=e.catch(12);case 19:case"end":return e.stop()}}),e,null,[[1,6],[12,17]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=a(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ethereum,n=[{chainId:x,chainName:M,nativeCurrency:{name:"ETHEREUM",symbol:"ETH",decimals:18},rpcUrls:[k],blockExplorerUrls:[E]}],e.next=4,t.request({method:"wallet_addEthereumChain",params:n}).catch();case 4:r=e.sent,F=t.networkVersion,r&&console.log("tx = ",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){f=new ethers.Contract(P,I,A),console.log("initControllers ..."),L=!0,T()},T=function(){console.log("isConnect = ",L),console.log("signer = ",A),L?($("#connectButton").hide(),$("#mintButton").show()):($("#connectButton").show(),$("#mintButton").hide())},x="0x4",k="https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",E="https://etherscan.io",M="ETH Rinkeby(ETH)",P="0x8ada57fa0f805ea447ac479194b7594efa28932f",I='[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"}],"name":"SetNewPercent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"string","name":"_tokenURIPrefix","type":"string"}],"name":"_setTokenURIPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"enableClaimFoundingMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"founders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBirthday","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIpfsHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIpfsTokenUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAvailableForClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSaleActive","outputs":[{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSaleActive","outputs":[{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPresaleMember","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintedPresaleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"ipfsHashs","type":"string[]"},{"internalType":"uint256[]","name":"idTokens","type":"uint256[]"}],"name":"setIpfsHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercent","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"setPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]',L=!1,A=void 0,F=void 0,C=ethers.utils.parseUnits("0.008",18);i=function(){!1===L&&(h(),L=!0),g()},o=function(){f.connect(A).mintPresaleMember({value:C}).then((function(e,t){})).catch((function(e){alert(e.message)}))}}var O=function(){var e="undefined"!=typeof window,t=(0,p.useState)(e&&window.innerWidth),n=t[0],r=t[1];return e&&window.addEventListener("resize",(function(){r(e&&window.innerWidth)})),p.createElement(c.Z,null,p.createElement(y.Z,{title:"Mint-pass"}),p.createElement("div",{className:"gen-wrap presale-wrap"},p.createElement("h1",null,"#FAPP MINT-PASS"),p.createElement("div",{className:"content"},n>1300&&p.createElement(p.Fragment,null,p.createElement("div",{className:"text"},p.createElement("p",null,"#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books."),p.createElement("p",null,"FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees)."),p.createElement("div",{className:"btns"},p.createElement("button",{onClick:i,className:"cnct-wallet"},"Connect your wallet"),p.createElement("button",{onClick:o,className:"mint"},"Mint")),p.createElement("p",{className:"agreement"},"By minting a FAPP-CB you agree to our ",p.createElement(l.Link,{to:"/terms"},"Terms of Service."))),p.createElement("img",{src:d,alt:"presale image"})),n<=1300&&p.createElement(p.Fragment,null,p.createElement("p",null,"#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books."),p.createElement("p",null,"FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees)."),p.createElement("img",{src:d,alt:"presale image"}),p.createElement("button",{onClick:i,className:"cnct-wallet"},"Connect your wallet"),p.createElement("button",{onClick:o,className:"mint"},"Mint"),p.createElement("p",{className:"agreement"},"By minting a FAPP-CB you agree to our ",p.createElement(l.Link,{to:"/terms"},"Terms of Service."))))),p.createElement("script",{charset:"utf-8",src:"https://cdn.ethers.io/lib/ethers-5.1.umd.min.js",type:"text/javascript"}))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(C){u=function(e,t,n){return e[t]=n}}function p(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new L(r||[]);return i._invoke=function(e,t,n){var r=c;return function(a,i){if(r===d)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw i;return F()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=M(o,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===c)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?m:y,u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=m,n.method="throw",n.arg=u.arg)}}}(e,n,o),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=p;var c="suspendedStart",y="suspendedYield",d="executing",m="completed",f={};function h(){}function v(){}function b(){}var w={};u(w,i,(function(){return this}));var g=Object.getPrototypeOf,T=g&&g(g(A([])));T&&T!==n&&r.call(T,i)&&(w=T);var x=b.prototype=h.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(a,i,o,s){var u=l(e[a],e,i);if("throw"!==u.type){var p=u.arg,c=p.value;return c&&"object"==typeof c&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(c).then((function(e){p.value=e,o(p)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function M(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,M(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=l(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,f;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function A(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:F}}function F(){return{value:t,done:!0}}return v.prototype=b,u(x,"constructor",b),u(b,"constructor",v),v.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new E(p(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(x),u(x,s,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),p=r.call(o,"finallyLoc");if(u&&p){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-pages-mint-pass-js-17adadcf66fb90c1540a.js.map