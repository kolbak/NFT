"use strict";(self.webpackChunknft=self.webpackChunknft||[]).push([[669],{8177:function(e,n,t){t.d(n,{n:function(){return y}});var r=t(9439),a=t(8308),o=t(7),i=t(7294),u=t(5671);function l(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function s(e,n,t){var r=e+1;return t&&r>=n&&(r=0),r}function c(e,n,t){var r=e-1;return t&&r<0&&(r=n),r}var d="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function e(){var n=this;(0,u.Z)(this,e);var t=this;v(this,"descendants",new Map),v(this,"register",(function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}})),v(this,"unregister",(function(e){n.descendants.delete(e);var t=l(Array.from(n.descendants.keys()));n.assignIndex(t)})),v(this,"destroy",(function(){n.descendants.clear()})),v(this,"assignIndex",(function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),v(this,"count",(function(){return n.descendants.size})),v(this,"enabledCount",(function(){return n.enabledValues().length})),v(this,"values",(function(){return Array.from(n.descendants.values()).sort((function(e,n){return e.index-n.index}))})),v(this,"enabledValues",(function(){return n.values().filter((function(e){return!e.disabled}))})),v(this,"item",(function(e){if(0!==n.count())return n.values()[e]})),v(this,"enabledItem",(function(e){if(0!==n.enabledCount())return n.enabledValues()[e]})),v(this,"first",(function(){return n.item(0)})),v(this,"firstEnabled",(function(){return n.enabledItem(0)})),v(this,"last",(function(){return n.item(n.descendants.size-1)})),v(this,"lastEnabled",(function(){var e=n.enabledValues().length-1;return n.enabledItem(e)})),v(this,"indexOf",(function(e){var t,r;return e&&null!=(t=null==(r=n.descendants.get(e))?void 0:r.index)?t:-1})),v(this,"enabledIndexOf",(function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))})),v(this,"next",(function(e,n){void 0===n&&(n=!0);var r=s(e,t.count(),n);return t.item(r)})),v(this,"nextEnabled",(function(e,n){void 0===n&&(n=!0);var r=t.item(e);if(r){var a=s(t.enabledIndexOf(r.node),t.enabledCount(),n);return t.enabledItem(a)}})),v(this,"prev",(function(e,n){void 0===n&&(n=!0);var r=c(e,t.count()-1,n);return t.item(r)})),v(this,"prevEnabled",(function(e,n){void 0===n&&(n=!0);var r=t.item(e);if(r){var a=c(t.enabledIndexOf(r.node),t.enabledCount()-1,n);return t.enabledItem(a)}})),v(this,"registerNode",(function(e,t){if(e&&!n.descendants.has(e)){var r=l(Array.from(n.descendants.keys()).concat(e));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var a=f({node:e,index:-1},t);n.descendants.set(e,a),n.assignIndex(r)}}))};var b=(0,a.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),p=(0,r.Z)(b,2),h=p[0],E=p[1];function y(){return[h,function(){return E()},function(){return e=(0,i.useState)((function(){return new m})),n=(0,r.Z)(e,1)[0],d((function(){return function(){return n.destroy()}})),n;var e,n},function(e){return function(e){var n=E(),t=(0,i.useState)(-1),a=(0,r.Z)(t,2),u=a[0],l=a[1],s=(0,i.useRef)(null);d((function(){return function(){s.current&&n.unregister(s.current)}}),[]),d((function(){if(s.current){var e=Number(s.current.dataset.index);u==e||Number.isNaN(e)||l(e)}}));var c=e?n.register(e):n.register;return{descendants:n,index:u,enabledIndex:n.enabledIndexOf(s.current),register:(0,o.l)(c,s)}}(e)}]}},3534:function(e,n,t){var r=t(7294),a=t(5444);n.Z=function(e){var n=e.data,t=[];console.groupCollapsed();for(var o=0,i=n.length;o<i;o++)console.log("object :>> ",o,n[o].image),t.push(r.createElement("div",{className:"char-card",key:o},r.createElement("div",{className:"char-body"},r.createElement("figure",{className:"front"},r.createElement(a.Link,{to:"/character/?id="+n[o].id,state:{name:n[o].name||"",id:n[o].id||"",attributes:n[o].attributes||"",image:n[o].image||""},className:"char-link"},r.createElement("img",{className:"char-img",id:"char-"+n[o].id,src:n[o].image,alt:"Character number"+n[o].id}),r.createElement("span",{className:"char-id",id:"label-char-"+n[o].id},n[o].name))))));return console.groupEnd(),r.createElement(r.Fragment,null,t)}},1221:function(e,n,t){t.r(n),t.d(n,{default:function(){return te}});var r=t(7294),a=t(9439),o=t(4238),i=t(7875),u=t(4207);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var s=t(8936),c=t(2543),d=t(3888),f=t(7487),v=t(9265),m=t(5587),b=t(4667);function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}var h=(0,c.G)((function(e,n){var t=(0,d.j)("Input",e),a=(0,f.Lr)(e),o=(0,s.Y)(a),i=(0,m.cx)("chakra-input",e.className);return r.createElement(v.m$.input,p({},o,{__css:t.field,ref:n,className:i}))}));b.Ts&&(h.displayName="Input"),h.id="Input";var E=t(9735),y=t(4526),g=t(4942),N=t(7);function O(){return O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function x(e){var n=e.target,t=n.tagName,r=n.isContentEditable;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==r}function k(e){void 0===e&&(e={});var n=e,t=n.ref,o=n.isDisabled,i=n.isFocusable,u=n.clickOnEnter,l=void 0===u||u,s=n.clickOnSpace,c=void 0===s||s,d=n.onMouseDown,f=n.onMouseUp,v=n.onClick,b=n.onKeyDown,p=n.onKeyUp,h=n.tabIndex,E=n.onMouseOver,y=n.onMouseLeave,g=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"]),k=r.useState(!0),C=(0,a.Z)(k,2),w=C[0],I=C[1],T=r.useState(!1),P=(0,a.Z)(T,2),D=P[0],_=P[1],S=function(){var e=r.useRef(new Map),n=e.current,t=r.useCallback((function(n,t,r,a){e.current.set(r,{type:t,el:n,options:a}),n.addEventListener(t,r,a)}),[]),a=r.useCallback((function(n,t,r,a){n.removeEventListener(t,r,a),e.current.delete(r)}),[]);return r.useEffect((function(){return function(){n.forEach((function(e,n){a(e.el,e.type,n,e.options)}))}}),[a,n]),{add:t,remove:a}}(),M=w?h:h||0,F=o&&!i,A=r.useCallback((function(e){if(o)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==v||v(e)}),[o,v]),Z=r.useCallback((function(e){D&&x(e)&&(e.preventDefault(),e.stopPropagation(),_(!1),S.remove(document,"keyup",Z,!1))}),[D,S]),L=r.useCallback((function(e){if(null==b||b(e),!(o||e.defaultPrevented||e.metaKey)&&x(e.nativeEvent)&&!w){var n=l&&"Enter"===e.key;if(c&&" "===e.key&&(e.preventDefault(),_(!0)),n)e.preventDefault(),e.currentTarget.click();S.add(document,"keyup",Z,!1)}}),[o,w,b,l,c,S,Z]),j=r.useCallback((function(e){(null==p||p(e),o||e.defaultPrevented||e.metaKey)||x(e.nativeEvent)&&!w&&c&&" "===e.key&&(e.preventDefault(),_(!1),e.currentTarget.click())}),[c,w,o,p]),z=r.useCallback((function(e){0===e.button&&(_(!1),S.remove(document,"mouseup",z,!1))}),[S]),K=r.useCallback((function(e){if(!(0,m.dO)(e)){if(o)return e.stopPropagation(),void e.preventDefault();w||_(!0),e.currentTarget.focus({preventScroll:!0}),S.add(document,"mouseup",z,!1),null==d||d(e)}}),[o,w,d,S,z]),U=r.useCallback((function(e){(0,m.dO)(e)||(w||_(!1),null==f||f(e))}),[f,w]),B=r.useCallback((function(e){o?e.preventDefault():null==E||E(e)}),[o,E]),G=r.useCallback((function(e){D&&(e.preventDefault(),_(!1)),null==y||y(e)}),[D,y]),R=(0,N.l)(t,(function(e){e&&"BUTTON"!==e.tagName&&I(!1)}));return O({},g,w?{ref:R,type:"button","aria-disabled":F?void 0:o,disabled:F,onClick:A,onMouseDown:d,onMouseUp:f,onKeyUp:p,onKeyDown:b,onMouseOver:E,onMouseLeave:y}:{ref:R,role:"button","data-active":(0,m.PB)(D),"aria-disabled":o?"true":void 0,tabIndex:F?void 0:M,onClick:A,onMouseDown:K,onMouseUp:U,onKeyUp:j,onKeyDown:L,onMouseOver:B,onMouseLeave:G})}var C=t(8177),w=t(4059),I=t(8308);var T=t(8385);function P(){return P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},P.apply(this,arguments)}function D(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var _=(0,C.n)(),S=(0,a.Z)(_,4),M=S[0],F=S[1],A=S[2],Z=S[3];var L=(0,I.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),j=(0,a.Z)(L,2),z=j[0],K=j[1];function U(e){var n=K(),t=n.id,a=n.selectedIndex,o=function(e){return r.Children.toArray(e).filter((function(e){return r.isValidElement(e)}))}(e.children);return P({},e,{children:o.map((function(e,n){return r.cloneElement(e,{isSelected:n===a,id:G(t,n),"aria-labelledby":B(t,n)})}))})}function B(e,n){return e+"--tab-"+n}function G(e,n){return e+"--tabpanel-"+n}function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}function V(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var $=(0,c.G)((function(e,n){var t=(0,d.j)("Tabs",e),o=(0,f.Lr)(e),l=o.children,s=o.className,c=function(e){var n=e.defaultIndex,t=e.onChange,o=e.index,l=e.isManual,s=e.isLazy,c=e.lazyBehavior,d=void 0===c?"unmount":c,f=e.orientation,v=void 0===f?"horizontal":f,m=e.direction,b=void 0===m?"ltr":m,p=D(e,["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"]),h=r.useState(null!=n?n:0),E=(0,a.Z)(h,2),y=E[0],g=E[1],N=(0,i.T)({defaultValue:null!=n?n:0,value:o,onChange:t}),O=(0,a.Z)(N,2),x=O[0],k=O[1];r.useEffect((function(){null!=o&&g(o)}),[o]);var C=A();return{id:(0,u.Me)(e.id,"tabs"),selectedIndex:x,focusedIndex:y,setSelectedIndex:k,setFocusedIndex:g,isManual:l,isLazy:s,lazyBehavior:d,orientation:v,descendants:C,direction:b,htmlProps:p}}(V(o,["children","className"])),b=c.htmlProps,p=c.descendants,h=V(c,["htmlProps","descendants"]),g=r.useMemo((function(){return h}),[h]),N=(0,y.CE)(b,["isFitted"]);return r.createElement(M,{value:p},r.createElement(z,{value:g},r.createElement(E.Fo,{value:t},r.createElement(v.m$.div,R({className:(0,m.cx)("chakra-tabs",s),ref:n},N,{__css:t.root}),l))))}));b.Ts&&($.displayName="Tabs");var W=(0,c.G)((function(e,n){var t=(0,E.yK)(),a=function(e){var n=e.isDisabled,t=e.isFocusable,r=D(e,["isDisabled","isFocusable"]),a=K(),i=a.setSelectedIndex,u=a.isManual,l=a.id,s=a.setFocusedIndex,c=a.selectedIndex,d=Z({disabled:n&&!t}),f=d.index,v=d.register,m=f===c,b=k(P({},r,{ref:(0,N.l)(v,e.ref),isDisabled:n,isFocusable:t,onClick:(0,o.v0)(e.onClick,(function(){i(f)}))}));return P({},b,{id:B(l,f),role:"tab",tabIndex:m?0:-1,type:"button","aria-selected":m,"aria-controls":G(l,f),onFocus:n?void 0:(0,o.v0)(e.onFocus,(function(){s(f),!u&&(!n||!t)&&i(f)}))})}(R({},e,{ref:n})),i=R({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},t.tab);return r.createElement(v.m$.button,R({},a,{className:(0,m.cx)("chakra-tabs__tab",e.className),__css:i}))}));b.Ts&&(W.displayName="Tab");var Y=(0,c.G)((function(e,n){var t=function(e){var n=K(),t=n.focusedIndex,a=n.orientation,i=n.direction,u=F(),l=r.useCallback((function(e){var n,r=function(){var e=u.nextEnabled(t);e&&(0,T.T)(e.node)},o=function(){var e=u.prevEnabled(t);e&&(0,T.T)(e.node)},l="horizontal"===a,s="vertical"===a,c=(0,m.uh)(e),d="ltr"===i?"ArrowLeft":"ArrowRight",f="ltr"===i?"ArrowRight":"ArrowLeft",v=(n={},(0,g.Z)(n,d,(function(){return l&&o()})),(0,g.Z)(n,f,(function(){return l&&r()})),(0,g.Z)(n,"ArrowDown",(function(){return s&&r()})),(0,g.Z)(n,"ArrowUp",(function(){return s&&o()})),(0,g.Z)(n,"Home",(function(){var e=u.firstEnabled();e&&(0,T.T)(e.node)})),(0,g.Z)(n,"End",(function(){var e=u.lastEnabled();e&&(0,T.T)(e.node)})),n)[c];v&&(e.preventDefault(),v(e))}),[u,t,a,i]);return P({},e,{role:"tablist","aria-orientation":a,onKeyDown:(0,o.v0)(e.onKeyDown,l)})}(R({},e,{ref:n})),a=R({display:"flex"},(0,E.yK)().tablist);return r.createElement(v.m$.div,R({},t,{className:(0,m.cx)("chakra-tabs__tablist",e.className),__css:a}))}));b.Ts&&(Y.displayName="TabList");var q=(0,c.G)((function(e,n){var t=function(e){var n=e.isSelected,t=e.id,a=e.children,o=D(e,["isSelected","id","children"]),i=K(),u=i.isLazy,l=i.lazyBehavior,s=r.useRef(!1);n&&(s.current=!0);var c=function(e){var n=e.hasBeenSelected,t=e.isLazy,r=e.isSelected,a=e.lazyBehavior;return!t||!!r||!("keepMounted"!==(void 0===a?"unmount":a)||!n)}({hasBeenSelected:s.current,isSelected:n,isLazy:u,lazyBehavior:l});return P({tabIndex:0},o,{children:c?a:null,role:"tabpanel",hidden:!n,id:t})}(R({},e,{ref:n})),a=(0,E.yK)();return r.createElement(v.m$.div,R({outline:"0"},t,{className:(0,m.cx)("chakra-tabs__tab-panel",e.className),__css:a.tabpanel}))}));b.Ts&&(q.displayName="TabPanel");var H=(0,c.G)((function(e,n){var t=U(e),a=(0,E.yK)();return r.createElement(v.m$.div,R({},t,{width:"100%",ref:n,className:(0,m.cx)("chakra-tabs__tab-panels",e.className),__css:a.tabpanels}))}));b.Ts&&(H.displayName="TabPanels");var J=(0,c.G)((function(e,n){var t=function(){var e=K(),n=F(),t=e.selectedIndex,o=e.orientation,i="horizontal"===o,u="vertical"===o,l=r.useState((function(){return i?{left:0,width:0}:u?{top:0,height:0}:void 0})),s=(0,a.Z)(l,2),c=s[0],d=s[1],f=r.useState(!1),v=(0,a.Z)(f,2),m=v[0],p=v[1];return(0,w.G)((function(){if(!(0,b.o8)(t)){var e=n.item(t);if(!(0,b.o8)(e)){i&&d({left:e.node.offsetLeft,width:e.node.offsetWidth}),u&&d({top:e.node.offsetTop,height:e.node.offsetHeight});var r=requestAnimationFrame((function(){p(!0)}));return function(){r&&cancelAnimationFrame(r)}}}}),[t,i,u,n]),P({position:"absolute",transitionProperty:"left, right, top, bottom",transitionDuration:m?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},c)}(),o=R({},e.style,t),i=(0,E.yK)();return r.createElement(v.m$.div,R({ref:n},e,{className:(0,m.cx)("chakra-tabs__tab-indicator",e.className),style:o,__css:i.indicator}))}));b.Ts&&(J.displayName="TabIndicator");var X=t(5483),Q=t(1451),ee=t(3751),ne=t(3534),te=(t(5611),function(){var e="undefined"!=typeof window,n=(0,r.useState)(e&&window.innerWidth),t=(n[0],n[1]);e&&window.addEventListener("resize",(function(){t(e&&window.innerWidth)}));var s=(0,r.useState)(2),c=s[0],d=s[1],f=(0,r.useState)(!1),v=f[0];f[1];var m=function(e){void 0===e&&(e={});var n=e,t=n.onClose,s=n.onOpen,c=n.isOpen,d=n.id,f=r.useState(e.defaultIsOpen||!1),v=(0,a.Z)(f,2),m=v[0],b=v[1],p=(0,i.p)(c,m),h=(0,a.Z)(p,2),E=h[0],y=h[1],g=(0,u.Me)(d,"disclosure"),N=r.useCallback((function(){E||b(!1),null==t||t()}),[E,t]),O=r.useCallback((function(){E||b(!0),null==s||s()}),[E,s]),x=r.useCallback((function(){(y?N:O)()}),[y,O,N]);return{isOpen:!!y,onOpen:O,onClose:N,onToggle:x,isControlled:E,getButtonProps:function(e){return void 0===e&&(e={}),l({},e,{"aria-expanded":"true","aria-controls":g,onClick:(0,o.v0)(e.onClick,x)})},getDisclosureProps:function(e){return void 0===e&&(e={}),l({},e,{hidden:!y,id:g})}}}(),b=(m.isOpen,m.onOpen,m.onClose,(0,r.useRef)(null)),p=(0,r.useState)(null),E=p[0],y=p[1];return r.createElement(Q.Z,null,r.createElement(ee.Z,{title:"FAPP"}),r.createElement("div",{className:"gen-wrap user-acc"},r.createElement("h1",null,"The #FAPP Community"),r.createElement("h2",null,"An exclusive member-only area where you can buy #FAPP merch and view your NFTs"),r.createElement("form",null,r.createElement(X.NI,null,r.createElement(h,{ref:b,placeholder:"Your wallet here"})),!0===v?r.createElement(r.Fragment,null,0!==c?r.createElement(r.Fragment,null,r.createElement($,{className:"tab-container"},r.createElement(Y,{className:"buttons-container"},r.createElement(W,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #ed55b3"},className:"phalluses-button"},"Your Phalluses"),r.createElement(W,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #34bdbd"},className:"merch-store-button"},"FAPP Merch Store")),r.createElement(H,null,r.createElement(q,null,r.createElement("div",{className:"bought"},r.createElement(ne.Z,{data:E}))),r.createElement(q,{className:"market-container"},r.createElement("p",null,"FAPP Merch store will be available ASAP.",r.createElement("br",null),"We are working on this project!",r.createElement("br",null),"Join our discord server or check our twitter for updates!"))))):r.createElement(r.Fragment,null,r.createElement("p",{className:"zero-token-msg"},"No #FAPP Phalluses are found in this wallet 🙁",r.createElement("br",null),"You need at least one Phallus to view this page!"))):r.createElement(r.Fragment,null,r.createElement("button",{onClick:function(e){e.preventDefault(),console.group(),fetch("https://cockiz-test.ru/api/tokens/"+b.current.value,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("res :>> ",e),d(e.length),y(e)})).catch((function(e){console.log("ERORR in request > ",e)})),console.groupEnd()},className:"user-account cnct-wallet"},"Check my tokens balance"),E&&r.createElement("div",{className:"grid-wrap"},r.createElement("div",{className:"grid"},r.createElement(ne.Z,{data:E})))))))})},5611:function(e,n,t){n.Z=t.p+"static/character-ex-fdbdce051b5ee6c7490e99badad11870.png"}}]);
//# sourceMappingURL=component---src-pages-user-account-js-37da7f79d71e1bfee2e3.js.map