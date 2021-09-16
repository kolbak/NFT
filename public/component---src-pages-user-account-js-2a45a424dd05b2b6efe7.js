"use strict";(self.webpackChunknft=self.webpackChunknft||[]).push([[669],{112:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/d0275/character-ex.png","srcSet":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/ccc41/character-ex.png 512w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/b5658/character-ex.png 1024w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/d0275/character-ex.png 2048w","sizes":"(min-width: 2048px) 2048px, 100vw"},"sources":[{"srcSet":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/d689f/character-ex.webp 512w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/67ded/character-ex.webp 1024w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/24224/character-ex.webp 2048w","type":"image/webp","sizes":"(min-width: 2048px) 2048px, 100vw"}]},"width":2048,"height":2048}')},52299:function(e,t,n){n.d(t,{W:function(){return r}});var a=n(67294);function r(e){return a.Children.toArray(e).filter((function(e){return a.isValidElement(e)}))}},83534:function(e,t,n){var a=n(67294),r=n(25444),c=n(82407);t.Z=function(e){for(var t=e.data,o=[],i=0,l=t.length;i<l;i++)o.push(a.createElement("div",{className:"char-card",key:i},a.createElement("div",{className:"char-body"},a.createElement("figure",{className:"front"},a.createElement(r.rU,{to:"/character/?id="+t[i].id,state:{name:t[i].name,id:t[i].id,filters:t[i].filters,src:t[i].src},className:"char-link"},a.createElement(c.S,{className:"char-img",id:"char-"+t[i].id,src:"../images/character-ex.png",alt:"Character number"+t[i],__imageData:n(112)}),a.createElement("span",{className:"char-id",id:"label-char-"+t[i].id},t[i].name))))));return a.createElement(a.Fragment,null,o)}},17371:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var a=n(67294),r=n(12543),c=n(83888),o=n(87487),i=n(79735),l=n(26511),s=n(24526),u=n(35587),d=n(74667),f=n(96156),b=n(28481),m=n(7);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){var t=e.target,n=t.tagName,a=t.isContentEditable;return"INPUT"!==n&&"TEXTAREA"!==n&&!0!==a}function h(e){void 0===e&&(e={});var t=e,n=t.ref,r=t.isDisabled,c=t.isFocusable,o=t.clickOnEnter,i=void 0===o||o,l=t.clickOnSpace,s=void 0===l||l,d=t.onMouseDown,f=t.onMouseUp,h=t.onClick,y=t.onKeyDown,x=t.onKeyUp,E=t.tabIndex,w=t.onMouseOver,g=t.onMouseLeave,k=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"]),N=a.useState(!0),T=(0,b.Z)(N,2),C=T[0],D=T[1],S=a.useState(!1),M=(0,b.Z)(S,2),O=M[0],P=M[1],_=function(){var e=a.useRef(new Map),t=e.current,n=a.useCallback((function(t,n,a,r){e.current.set(a,{type:n,el:t,options:r}),t.addEventListener(n,a,r)}),[]),r=a.useCallback((function(t,n,a,r){t.removeEventListener(n,a,r),e.current.delete(a)}),[]);return a.useEffect((function(){return function(){t.forEach((function(e,t){r(e.el,e.type,t,e.options)}))}}),[r,t]),{add:n,remove:r}}(),F=C?E:E||0,I=r&&!c,Z=a.useCallback((function(e){if(r)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==h||h(e)}),[r,h]),A=a.useCallback((function(e){O&&p(e)&&(e.preventDefault(),e.stopPropagation(),P(!1),_.remove(document,"keyup",A,!1))}),[O,_]),z=a.useCallback((function(e){if(null==y||y(e),!(r||e.defaultPrevented||e.metaKey)&&p(e.nativeEvent)&&!C){var t=i&&"Enter"===e.key;if(s&&" "===e.key&&(e.preventDefault(),P(!0)),t)e.preventDefault(),e.currentTarget.click();_.add(document,"keyup",A,!1)}}),[r,C,y,i,s,_,A]),K=a.useCallback((function(e){(null==x||x(e),r||e.defaultPrevented||e.metaKey)||p(e.nativeEvent)&&!C&&s&&" "===e.key&&(e.preventDefault(),P(!1),e.currentTarget.click())}),[s,C,r,x]),L=a.useCallback((function(e){0===e.button&&(P(!1),_.remove(document,"mouseup",L,!1))}),[_]),U=a.useCallback((function(e){if(!(0,u.dO)(e)){if(r)return e.stopPropagation(),void e.preventDefault();C||P(!0),e.currentTarget.focus({preventScroll:!0}),_.add(document,"mouseup",L,!1),null==d||d(e)}}),[r,C,d,_,L]),j=a.useCallback((function(e){(0,u.dO)(e)||(C||P(!1),null==f||f(e))}),[f,C]),B=a.useCallback((function(e){r?e.preventDefault():null==w||w(e)}),[r,w]),G=a.useCallback((function(e){O&&(e.preventDefault(),P(!1)),null==g||g(e)}),[O,g]),$=(0,m.l)(n,(function(e){e&&"BUTTON"!==e.tagName&&D(!1)}));return v({},k,C?{ref:$,type:"button","aria-disabled":I?void 0:r,disabled:I,onClick:Z,onMouseDown:d,onMouseUp:f,onKeyUp:x,onKeyDown:y,onMouseOver:w,onMouseLeave:g}:{ref:$,role:"button","data-active":(0,u.PB)(O),"aria-disabled":r?"true":void 0,tabIndex:I?void 0:F,onClick:Z,onMouseDown:U,onMouseUp:j,onKeyUp:K,onKeyDown:z,onMouseOver:B,onMouseLeave:G})}var y=n(38177),x=n(97875),E=n(4207),w=n(94059),g=n(58308),k=n(52299),N=n(28385),T=n(94238);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var S=(0,y.n)(),M=(0,b.Z)(S,4),O=M[0],P=M[1],_=M[2],F=M[3];var I=(0,g.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),Z=(0,b.Z)(I,2),A=Z[0],z=Z[1];function K(e,t){return e+"--tab-"+t}function L(e,t){return e+"--tabpanel-"+t}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var B=(0,r.G)((function(e,t){var n=(0,c.j)("Tabs",e),r=(0,o.Lr)(e),d=r.children,f=r.className,m=function(e){var t=e.defaultIndex,n=e.onChange,r=e.index,c=e.isManual,o=e.isLazy,i=e.lazyBehavior,l=void 0===i?"unmount":i,s=e.orientation,u=void 0===s?"horizontal":s,d=e.direction,f=void 0===d?"ltr":d,m=D(e,["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"]),v=a.useState(null!=t?t:0),p=(0,b.Z)(v,2),h=p[0],y=p[1],w=(0,x.T)({defaultValue:null!=t?t:0,value:r,onChange:n}),g=(0,b.Z)(w,2),k=g[0],N=g[1];a.useEffect((function(){null!=r&&y(r)}),[r]);var T=_();return{id:(0,E.Me)(e.id,"tabs"),selectedIndex:k,focusedIndex:h,setSelectedIndex:N,setFocusedIndex:y,isManual:c,isLazy:o,lazyBehavior:l,orientation:u,descendants:T,direction:f,htmlProps:m}}(j(r,["children","className"])),v=m.htmlProps,p=m.descendants,h=j(m,["htmlProps","descendants"]),y=a.useMemo((function(){return h}),[h]),w=(0,s.CE)(v,["isFitted"]);return a.createElement(O,{value:p},a.createElement(A,{value:y},a.createElement(i.Fo,{value:n},a.createElement(l.m$.div,U({className:(0,u.cx)("chakra-tabs",f),ref:t},w,{__css:n.root}),d))))}));d.Ts&&(B.displayName="Tabs");var G=(0,r.G)((function(e,t){var n=(0,i.yK)(),r=function(e){var t=e.isDisabled,n=e.isFocusable,a=D(e,["isDisabled","isFocusable"]),r=z(),c=r.setSelectedIndex,o=r.isManual,i=r.id,l=r.setFocusedIndex,s=r.selectedIndex,u=F({disabled:t&&!n}),d=u.index,f=u.register,b=d===s,v=h(C({},a,{ref:(0,m.l)(f,e.ref),isDisabled:t,isFocusable:n,onClick:(0,T.v0)(e.onClick,(function(){c(d)}))}));return C({},v,{id:K(i,d),role:"tab",tabIndex:b?0:-1,type:"button","aria-selected":b,"aria-controls":L(i,d),onFocus:t?void 0:(0,T.v0)(e.onFocus,(function(){l(d),!o&&(!t||!n)&&c(d)}))})}(U({},e,{ref:t})),c=U({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},n.tab);return a.createElement(l.m$.button,U({},r,{className:(0,u.cx)("chakra-tabs__tab",e.className),__css:c}))}));d.Ts&&(G.displayName="Tab");var $=(0,r.G)((function(e,t){var n=function(e){var t=z(),n=t.focusedIndex,r=t.orientation,c=t.direction,o=P(),i=a.useCallback((function(e){var t,a=function(){var e=o.nextEnabled(n);e&&(0,N.T)(e.node)},i=function(){var e=o.prevEnabled(n);e&&(0,N.T)(e.node)},l="horizontal"===r,s="vertical"===r,d=(0,u.uh)(e),b="ltr"===c?"ArrowLeft":"ArrowRight",m="ltr"===c?"ArrowRight":"ArrowLeft",v=(t={},(0,f.Z)(t,b,(function(){return l&&i()})),(0,f.Z)(t,m,(function(){return l&&a()})),(0,f.Z)(t,"ArrowDown",(function(){return s&&a()})),(0,f.Z)(t,"ArrowUp",(function(){return s&&i()})),(0,f.Z)(t,"Home",(function(){var e=o.firstEnabled();e&&(0,N.T)(e.node)})),(0,f.Z)(t,"End",(function(){var e=o.lastEnabled();e&&(0,N.T)(e.node)})),t)[d];v&&(e.preventDefault(),v(e))}),[o,n,r,c]);return C({},e,{role:"tablist","aria-orientation":r,onKeyDown:(0,T.v0)(e.onKeyDown,i)})}(U({},e,{ref:t})),r=U({display:"flex"},(0,i.yK)().tablist);return a.createElement(l.m$.div,U({},n,{className:(0,u.cx)("chakra-tabs__tablist",e.className),__css:r}))}));d.Ts&&($.displayName="TabList");var R=(0,r.G)((function(e,t){var n=function(e){var t=e.isSelected,n=e.id,r=e.children,c=D(e,["isSelected","id","children"]),o=z(),i=o.isLazy,l=o.lazyBehavior,s=a.useRef(!1);return t&&(s.current=!0),C({tabIndex:0},c,{children:function(e){var t=e.hasBeenSelected,n=e.isLazy,a=e.isSelected,r=e.lazyBehavior;return!n||!!a||!("keepMounted"!==(void 0===r?"unmount":r)||!t)}({hasBeenSelected:s.current,isSelected:t,isLazy:i,lazyBehavior:l})?r:null,role:"tabpanel",hidden:!t,id:n})}(U({},e,{ref:t})),r=(0,i.yK)();return a.createElement(l.m$.div,U({outline:"0"},n,{className:(0,u.cx)("chakra-tabs__tab-panel",e.className),__css:r.tabpanel}))}));d.Ts&&(R.displayName="TabPanel");var W=(0,r.G)((function(e,t){var n=function(e){var t=z(),n=t.id,r=t.selectedIndex;return C({},e,{children:(0,k.W)(e.children).map((function(e,t){return a.cloneElement(e,{isSelected:t===r,id:L(n,t),"aria-labelledby":K(n,t)})}))})}(e),r=(0,i.yK)();return a.createElement(l.m$.div,U({},n,{width:"100%",ref:t,className:(0,u.cx)("chakra-tabs__tab-panels",e.className),__css:r.tabpanels}))}));d.Ts&&(W.displayName="TabPanels");var H=(0,r.G)((function(e,t){var n=function(){var e=z(),t=P(),n=e.selectedIndex,r=e.orientation,c="horizontal"===r,o="vertical"===r,i=a.useState((function(){return c?{left:0,width:0}:o?{top:0,height:0}:void 0})),l=(0,b.Z)(i,2),s=l[0],u=l[1],f=a.useState(!1),m=(0,b.Z)(f,2),v=m[0],p=m[1];return(0,w.G)((function(){if(!(0,d.o8)(n)){var e=t.item(n);if(!(0,d.o8)(e)){c&&u({left:e.node.offsetLeft,width:e.node.offsetWidth}),o&&u({top:e.node.offsetTop,height:e.node.offsetHeight});var a=requestAnimationFrame((function(){p(!0)}));return function(){a&&cancelAnimationFrame(a)}}}}),[n,c,o,t]),C({position:"absolute",transitionProperty:"left, right, top, bottom",transitionDuration:v?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},s)}(),r=U({},e.style,n),c=(0,i.yK)();return a.createElement(l.m$.div,U({ref:t},e,{className:(0,u.cx)("chakra-tabs__tab-indicator",e.className),style:r,__css:c.indicator}))}));d.Ts&&(H.displayName="TabIndicator");var J=n(97219),V=n(93751),q=n(83534),X=n(5611),Y=function(){for(var e=[],t=0;t<4;t++)e.push({name:"Character "+(t+1),id:t+1,src:X.Z,filters:{bday:new Intl.DateTimeFormat("en-US").format(new Date)}});var n=(0,a.useState)(e),r=n[0];n[1];return a.createElement(J.Z,null,a.createElement(V.Z,{title:"Account"}),a.createElement("div",{className:"gen-wrap user-acc"},a.createElement("h1",null,"The #FAPP Community"),a.createElement("h2",null,"An exclusive member-only area where you can buy #FAPP merch and view your NFTs"),a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement(B,{className:"tab-container"},a.createElement($,{className:"buttons-container"},a.createElement(G,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #ed55b3"},className:"phalluses-button"},"Your Phalluses"),a.createElement(G,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #34bdbd"},className:"merch-store-button"},"FAPP Merch Store")),a.createElement(W,null,a.createElement(R,null,a.createElement("div",{className:"bought"},a.createElement(q.Z,{data:r}))),a.createElement(R,{className:"market-container"},a.createElement("p",null,"FAPP Merch store will be available ASAP.",a.createElement("br",null),"We are working on this project!",a.createElement("br",null),"Join our discord server or check our twitter for updates!"))))))))}},5611:function(e,t,n){t.Z=n.p+"static/character-ex-fdbdce051b5ee6c7490e99badad11870.png"}}]);
//# sourceMappingURL=component---src-pages-user-account-js-2a45a424dd05b2b6efe7.js.map