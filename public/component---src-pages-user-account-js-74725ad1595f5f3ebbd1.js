"use strict";(self.webpackChunknft=self.webpackChunknft||[]).push([[669],{112:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/d0275/character-ex.png","srcSet":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/ccc41/character-ex.png 512w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/b5658/character-ex.png 1024w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/d0275/character-ex.png 2048w","sizes":"(min-width: 2048px) 2048px, 100vw"},"sources":[{"srcSet":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/d689f/character-ex.webp 512w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/67ded/character-ex.webp 1024w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/24224/character-ex.webp 2048w","type":"image/webp","sizes":"(min-width: 2048px) 2048px, 100vw"}]},"width":2048,"height":2048}')},8177:function(e,n,t){t.d(n,{n:function(){return E}});var a=t(8481),r=t(8308),i=t(7),o=t(7294),c=t(6610);function s(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function l(e,n,t){var a=e+1;return t&&a>=n&&(a=0),a}function u(e,n,t){var a=e-1;return t&&a<0&&(a=n),a}var d="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function e(){var n=this;(0,c.Z)(this,e);var t=this;b(this,"descendants",new Map),b(this,"register",(function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}})),b(this,"unregister",(function(e){n.descendants.delete(e);var t=s(Array.from(n.descendants.keys()));n.assignIndex(t)})),b(this,"destroy",(function(){n.descendants.clear()})),b(this,"assignIndex",(function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),b(this,"count",(function(){return n.descendants.size})),b(this,"enabledCount",(function(){return n.enabledValues().length})),b(this,"values",(function(){return Array.from(n.descendants.values()).sort((function(e,n){return e.index-n.index}))})),b(this,"enabledValues",(function(){return n.values().filter((function(e){return!e.disabled}))})),b(this,"item",(function(e){if(0!==n.count())return n.values()[e]})),b(this,"enabledItem",(function(e){if(0!==n.enabledCount())return n.enabledValues()[e]})),b(this,"first",(function(){return n.item(0)})),b(this,"firstEnabled",(function(){return n.enabledItem(0)})),b(this,"last",(function(){return n.item(n.descendants.size-1)})),b(this,"lastEnabled",(function(){var e=n.enabledValues().length-1;return n.enabledItem(e)})),b(this,"indexOf",(function(e){var t,a;return e&&null!=(t=null==(a=n.descendants.get(e))?void 0:a.index)?t:-1})),b(this,"enabledIndexOf",(function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))})),b(this,"next",(function(e,n){void 0===n&&(n=!0);var a=l(e,t.count(),n);return t.item(a)})),b(this,"nextEnabled",(function(e,n){void 0===n&&(n=!0);var a=t.item(e);if(a){var r=l(t.enabledIndexOf(a.node),t.enabledCount(),n);return t.enabledItem(r)}})),b(this,"prev",(function(e,n){void 0===n&&(n=!0);var a=u(e,t.count()-1,n);return t.item(a)})),b(this,"prevEnabled",(function(e,n){void 0===n&&(n=!0);var a=t.item(e);if(a){var r=u(t.enabledIndexOf(a.node),t.enabledCount()-1,n);return t.enabledItem(r)}})),b(this,"registerNode",(function(e,t){if(e&&!n.descendants.has(e)){var a=s(Array.from(n.descendants.keys()).concat(e));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=f({node:e,index:-1},t);n.descendants.set(e,r),n.assignIndex(a)}}))};var v=(0,r.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),h=(0,a.Z)(v,2),p=h[0],y=h[1];function E(){return[p,function(){return y()},function(){return e=(0,o.useState)((function(){return new m})),n=(0,a.Z)(e,1)[0],d((function(){return function(){return n.destroy()}})),n;var e,n},function(e){return function(e){var n=y(),t=(0,o.useState)(-1),r=(0,a.Z)(t,2),c=r[0],s=r[1],l=(0,o.useRef)(null);d((function(){return function(){l.current&&n.unregister(l.current)}}),[]),d((function(){if(l.current){var e=Number(l.current.dataset.index);c==e||Number.isNaN(e)||s(e)}}));var u=e?n.register(e):n.register;return{descendants:n,index:c,enabledIndex:n.enabledIndexOf(l.current),register:(0,i.l)(u,l)}}(e)}]}},3534:function(e,n,t){var a=t(7294),r=t(5444),i=t(2407);n.Z=function(e){for(var n=e.data,o=[],c=0,s=n.length;c<s;c++)o.push(a.createElement("div",{className:"char-card",key:c},a.createElement("div",{className:"char-body"},a.createElement("figure",{className:"front"},a.createElement(r.Link,{to:"/character/?id="+n[c].id,state:{name:n[c].name||"",id:n[c].id||"",filters:n[c].filters||"",src:n[c].src||""},className:"char-link"},a.createElement(i.S,{className:"char-img",id:"char-"+n[c].id,src:"../images/character-ex.png",alt:"Character number"+n[c],__imageData:t(112)}),a.createElement("span",{className:"char-id",id:"label-char-"+n[c].id},n[c].name))))));return a.createElement(a.Fragment,null,o)}},33:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var a=t(7294),r=t(2543),i=t(3888),o=t(7487),c=t(9735),s=t(6511),l=t(4526),u=t(5587),d=t(4667),f=t(6156),b=t(8481),m=t(7);function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function h(e){var n=e.target,t=n.tagName,a=n.isContentEditable;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==a}function p(e){void 0===e&&(e={});var n=e,t=n.ref,r=n.isDisabled,i=n.isFocusable,o=n.clickOnEnter,c=void 0===o||o,s=n.clickOnSpace,l=void 0===s||s,d=n.onMouseDown,f=n.onMouseUp,p=n.onClick,y=n.onKeyDown,E=n.onKeyUp,g=n.tabIndex,x=n.onMouseOver,N=n.onMouseLeave,w=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"]),O=a.useState(!0),k=(0,b.Z)(O,2),C=k[0],T=k[1],I=a.useState(!1),P=(0,b.Z)(I,2),D=P[0],S=P[1],_=function(){var e=a.useRef(new Map),n=e.current,t=a.useCallback((function(n,t,a,r){e.current.set(a,{type:t,el:n,options:r}),n.addEventListener(t,a,r)}),[]),r=a.useCallback((function(n,t,a,r){n.removeEventListener(t,a,r),e.current.delete(a)}),[]);return a.useEffect((function(){return function(){n.forEach((function(e,n){r(e.el,e.type,n,e.options)}))}}),[r,n]),{add:t,remove:r}}(),M=C?g:g||0,F=r&&!i,A=a.useCallback((function(e){if(r)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==p||p(e)}),[r,p]),Z=a.useCallback((function(e){D&&h(e)&&(e.preventDefault(),e.stopPropagation(),S(!1),_.remove(document,"keyup",Z,!1))}),[D,_]),z=a.useCallback((function(e){if(null==y||y(e),!(r||e.defaultPrevented||e.metaKey)&&h(e.nativeEvent)&&!C){var n=c&&"Enter"===e.key;if(l&&" "===e.key&&(e.preventDefault(),S(!0)),n)e.preventDefault(),e.currentTarget.click();_.add(document,"keyup",Z,!1)}}),[r,C,y,c,l,_,Z]),L=a.useCallback((function(e){(null==E||E(e),r||e.defaultPrevented||e.metaKey)||h(e.nativeEvent)&&!C&&l&&" "===e.key&&(e.preventDefault(),S(!1),e.currentTarget.click())}),[l,C,r,E]),U=a.useCallback((function(e){0===e.button&&(S(!1),_.remove(document,"mouseup",U,!1))}),[_]),j=a.useCallback((function(e){if(!(0,u.dO)(e)){if(r)return e.stopPropagation(),void e.preventDefault();C||S(!0),e.currentTarget.focus({preventScroll:!0}),_.add(document,"mouseup",U,!1),null==d||d(e)}}),[r,C,d,_,U]),K=a.useCallback((function(e){(0,u.dO)(e)||(C||S(!1),null==f||f(e))}),[f,C]),B=a.useCallback((function(e){r?e.preventDefault():null==x||x(e)}),[r,x]),G=a.useCallback((function(e){D&&(e.preventDefault(),S(!1)),null==N||N(e)}),[D,N]),R=(0,m.l)(t,(function(e){e&&"BUTTON"!==e.tagName&&T(!1)}));return v({},w,C?{ref:R,type:"button","aria-disabled":F?void 0:r,disabled:F,onClick:A,onMouseDown:d,onMouseUp:f,onKeyUp:E,onKeyDown:y,onMouseOver:x,onMouseLeave:N}:{ref:R,role:"button","data-active":(0,u.PB)(D),"aria-disabled":r?"true":void 0,tabIndex:F?void 0:M,onClick:A,onMouseDown:j,onMouseUp:K,onKeyUp:L,onKeyDown:z,onMouseOver:B,onMouseLeave:G})}var y=t(8177),E=t(2402),g=t(4207),x=t(4059),N=t(8308);var w=t(2156),O=t(4238);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function C(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var T=(0,y.n)(),I=(0,b.Z)(T,4),P=I[0],D=I[1],S=I[2],_=I[3];var M=(0,N.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),F=(0,b.Z)(M,2),A=F[0],Z=F[1];function z(e){var n=Z(),t=n.id,r=n.selectedIndex;return k({},e,{children:function(e){return a.Children.toArray(e).filter((function(e){return a.isValidElement(e)}))}(e.children).map((function(e,n){return a.cloneElement(e,{isSelected:n===r,id:U(t,n),"aria-labelledby":L(t,n)})}))})}function L(e,n){return e+"--tab-"+n}function U(e,n){return e+"--tabpanel-"+n}function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function K(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var B=(0,r.G)((function(e,n){var t=(0,i.j)("Tabs",e),r=(0,o.Lr)(e),d=r.children,f=r.className,m=function(e){var n=e.defaultIndex,t=e.onChange,r=e.index,i=e.isManual,o=e.isLazy,c=e.lazyBehavior,s=void 0===c?"unmount":c,l=e.orientation,u=void 0===l?"horizontal":l,d=e.direction,f=void 0===d?"ltr":d,m=C(e,["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"]),v=a.useState(null!=n?n:0),h=(0,b.Z)(v,2),p=h[0],y=h[1],x=(0,E.T)({defaultValue:null!=n?n:0,value:r,onChange:t}),N=(0,b.Z)(x,2),w=N[0],O=N[1];a.useEffect((function(){null!=r&&y(r)}),[r]);var k=S();return{id:(0,g.Me)(e.id,"tabs"),selectedIndex:w,focusedIndex:p,setSelectedIndex:O,setFocusedIndex:y,isManual:i,isLazy:o,lazyBehavior:s,orientation:u,descendants:k,direction:f,htmlProps:m}}(K(r,["children","className"])),v=m.htmlProps,h=m.descendants,p=K(m,["htmlProps","descendants"]),y=a.useMemo((function(){return p}),[p]),x=(0,l.CE)(v,["isFitted"]);return a.createElement(P,{value:h},a.createElement(A,{value:y},a.createElement(c.Fo,{value:t},a.createElement(s.m$.div,j({className:(0,u.cx)("chakra-tabs",f),ref:n},x,{__css:t.root}),d))))}));d.Ts&&(B.displayName="Tabs");var G=(0,r.G)((function(e,n){var t=(0,c.yK)(),r=function(e){var n=e.isDisabled,t=e.isFocusable,a=C(e,["isDisabled","isFocusable"]),r=Z(),i=r.setSelectedIndex,o=r.isManual,c=r.id,s=r.setFocusedIndex,l=r.selectedIndex,u=_({disabled:n&&!t}),d=u.index,f=u.register,b=d===l,v=p(k({},a,{ref:(0,m.l)(f,e.ref),isDisabled:n,isFocusable:t,onClick:(0,O.v0)(e.onClick,(function(){i(d)}))}));return k({},v,{id:L(c,d),role:"tab",tabIndex:b?0:-1,type:"button","aria-selected":b,"aria-controls":U(c,d),onFocus:n?void 0:(0,O.v0)(e.onFocus,(function(){s(d),!o&&(!n||!t)&&i(d)}))})}(j({},e,{ref:n})),i=j({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},t.tab);return a.createElement(s.m$.button,j({},r,{className:(0,u.cx)("chakra-tabs__tab",e.className),__css:i}))}));d.Ts&&(G.displayName="Tab");var R=(0,r.G)((function(e,n){var t=function(e){var n=Z(),t=n.focusedIndex,r=n.orientation,i=n.direction,o=D(),c=a.useCallback((function(e){var n,a=function(){var e=o.nextEnabled(t);e&&(0,w.T)(e.node)},c=function(){var e=o.prevEnabled(t);e&&(0,w.T)(e.node)},s="horizontal"===r,l="vertical"===r,d=(0,u.uh)(e),b="ltr"===i?"ArrowLeft":"ArrowRight",m="ltr"===i?"ArrowRight":"ArrowLeft",v=(n={},(0,f.Z)(n,b,(function(){return s&&c()})),(0,f.Z)(n,m,(function(){return s&&a()})),(0,f.Z)(n,"ArrowDown",(function(){return l&&a()})),(0,f.Z)(n,"ArrowUp",(function(){return l&&c()})),(0,f.Z)(n,"Home",(function(){var e=o.firstEnabled();e&&(0,w.T)(e.node)})),(0,f.Z)(n,"End",(function(){var e=o.lastEnabled();e&&(0,w.T)(e.node)})),n)[d];v&&(e.preventDefault(),v(e))}),[o,t,r,i]);return k({},e,{role:"tablist","aria-orientation":r,onKeyDown:(0,O.v0)(e.onKeyDown,c)})}(j({},e,{ref:n})),r=j({display:"flex"},(0,c.yK)().tablist);return a.createElement(s.m$.div,j({},t,{className:(0,u.cx)("chakra-tabs__tablist",e.className),__css:r}))}));d.Ts&&(R.displayName="TabList");var V=(0,r.G)((function(e,n){var t=function(e){var n=e.isSelected,t=e.id,r=e.children,i=C(e,["isSelected","id","children"]),o=Z(),c=o.isLazy,s=o.lazyBehavior,l=a.useRef(!1);return n&&(l.current=!0),k({tabIndex:0},i,{children:function(e){var n=e.hasBeenSelected,t=e.isLazy,a=e.isSelected,r=e.lazyBehavior;return!t||!!a||!("keepMounted"!==(void 0===r?"unmount":r)||!n)}({hasBeenSelected:l.current,isSelected:n,isLazy:c,lazyBehavior:s})?r:null,role:"tabpanel",hidden:!n,id:t})}(j({},e,{ref:n})),r=(0,c.yK)();return a.createElement(s.m$.div,j({outline:"0"},t,{className:(0,u.cx)("chakra-tabs__tab-panel",e.className),__css:r.tabpanel}))}));d.Ts&&(V.displayName="TabPanel");var W=(0,r.G)((function(e,n){var t=z(e),r=(0,c.yK)();return a.createElement(s.m$.div,j({},t,{width:"100%",ref:n,className:(0,u.cx)("chakra-tabs__tab-panels",e.className),__css:r.tabpanels}))}));d.Ts&&(W.displayName="TabPanels");var $=(0,r.G)((function(e,n){var t=function(){var e=Z(),n=D(),t=e.selectedIndex,r=e.orientation,i="horizontal"===r,o="vertical"===r,c=a.useState((function(){return i?{left:0,width:0}:o?{top:0,height:0}:void 0})),s=(0,b.Z)(c,2),l=s[0],u=s[1],f=a.useState(!1),m=(0,b.Z)(f,2),v=m[0],h=m[1];return(0,x.G)((function(){if(!(0,d.o8)(t)){var e=n.item(t);if(!(0,d.o8)(e)){i&&u({left:e.node.offsetLeft,width:e.node.offsetWidth}),o&&u({top:e.node.offsetTop,height:e.node.offsetHeight});var a=requestAnimationFrame((function(){h(!0)}));return function(){a&&cancelAnimationFrame(a)}}}}),[t,i,o,n]),k({position:"absolute",transitionProperty:"left, right, top, bottom",transitionDuration:v?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},l)}(),r=j({},e.style,t),i=(0,c.yK)();return a.createElement(s.m$.div,j({ref:n},e,{className:(0,u.cx)("chakra-tabs__tab-indicator",e.className),style:r,__css:i.indicator}))}));d.Ts&&($.displayName="TabIndicator");var H=t(3962),J=t(6570),Y=t(3090),q=t(3751),X=t(3534),Q=t(5611),ee=function(){var e="undefined"!=typeof window,n=(0,a.useState)(e&&window.innerWidth),t=(n[0],n[1]);e&&window.addEventListener("resize",(function(){t(e&&window.innerWidth)}));for(var r=(0,a.useState)(2),i=r[0],o=(r[1],(0,a.useState)(!1)),c=o[0],s=(o[1],[]),l=0;l<1;l++)s.push({name:"Character "+(l+1),id:l+1,src:Q.Z,filters:{bday:new Intl.DateTimeFormat("en-US").format(new Date)}});var u=(0,a.useState)(s),d=u[0];u[1];var f=(0,H.q)(),b=f.isOpen,m=f.onOpen,v=f.onClose;return a.createElement(Y.Z,null,a.createElement(q.Z,{title:"Account"}),a.createElement("div",{className:"gen-wrap user-acc"},a.createElement("h1",null,"The #FAPP Community"),a.createElement("h2",null,"An exclusive member-only area where you can buy #FAPP merch and view your NFTs"),!0===c?a.createElement(a.Fragment,null,0!==i?a.createElement(a.Fragment,null,a.createElement(B,{className:"tab-container"},a.createElement(R,{className:"buttons-container"},a.createElement(G,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #ed55b3"},className:"phalluses-button"},"Your Phalluses"),a.createElement(G,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #34bdbd"},className:"merch-store-button"},"FAPP Merch Store")),a.createElement(W,null,a.createElement(V,null,a.createElement("div",{className:"bought"},a.createElement(X.Z,{data:d}))),a.createElement(V,{className:"market-container"},a.createElement("p",null,"FAPP Merch store will be available ASAP.",a.createElement("br",null),"We are working on this project!",a.createElement("br",null),"Join our discord server or check our twitter for updates!"))))):a.createElement(a.Fragment,null,a.createElement("p",{className:"zero-token-msg"},"No #FAPP Phalluses are found in this wallet 🙁",a.createElement("br",null),"You need at least one Phallus to view this page!"))):a.createElement(a.Fragment,null,a.createElement("button",{onClick:m,className:"user-account cnct-wallet"},"Connect your wallet"),a.createElement(J.u_,{isCentered:!0,isOpen:b,onClose:v},a.createElement(J.ZA,null),a.createElement(J.hz,{style:{display:"flex",fontFamily:'"Amatic SC", cursive',color:"white",backgroundColor:"rgba(19, 24, 38, 1)"}},a.createElement(J.xB,null,"#FAPP page is unavailable",a.createElement(J.ol,{style:{transform:"scale(.5)",opacity:".7",display:"inline-block",position:"initial",float:"right"}})),a.createElement(J.fe,null,a.createElement("p",null,"This page will be available after the first minted #FAPP NFT."),a.createElement("p",null,"Join our ",a.createElement("a",{style:{color:"rgb(59, 130, 246)"},className:"link-discord",href:"https://discord.gg/zFjWr4wUwH"},a.createElement("span",null,"Discord"))," server and ",a.createElement("a",{style:{color:"rgb(59, 130, 246)"},className:"link-discord",href:"https://twitter.com/FAP_Planet"},a.createElement("span",null,"Twitter"))," to get the latest news!")))))))}},5611:function(e,n,t){n.Z=t.p+"static/character-ex-fdbdce051b5ee6c7490e99badad11870.png"}}]);
//# sourceMappingURL=component---src-pages-user-account-js-74725ad1595f5f3ebbd1.js.map