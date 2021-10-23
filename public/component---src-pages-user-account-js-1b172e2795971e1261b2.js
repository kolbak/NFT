"use strict";(self.webpackChunknft=self.webpackChunknft||[]).push([[669],{112:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/d0275/character-ex.png","srcSet":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/ccc41/character-ex.png 512w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/b5658/character-ex.png 1024w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/d0275/character-ex.png 2048w","sizes":"(min-width: 2048px) 2048px, 100vw"},"sources":[{"srcSet":"/static/b8a4dbf0cd2a36acb6de15255cdca7af/d689f/character-ex.webp 512w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/67ded/character-ex.webp 1024w,\\n/static/b8a4dbf0cd2a36acb6de15255cdca7af/24224/character-ex.webp 2048w","type":"image/webp","sizes":"(min-width: 2048px) 2048px, 100vw"}]},"width":2048,"height":2048}')},8177:function(e,n,t){t.d(n,{n:function(){return g}});var a=t(8481),r=t(8308),i=t(7),l=t(7294),o=t(6610);function s(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function c(e,n,t){var a=e+1;return t&&a>=n&&(a=0),a}function u(e,n,t){var a=e-1;return t&&a<0&&(a=n),a}var d="undefined"!=typeof window?l.useLayoutEffect:l.useEffect;function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function e(){var n=this;(0,o.Z)(this,e);var t=this;v(this,"descendants",new Map),v(this,"register",(function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}})),v(this,"unregister",(function(e){n.descendants.delete(e);var t=s(Array.from(n.descendants.keys()));n.assignIndex(t)})),v(this,"destroy",(function(){n.descendants.clear()})),v(this,"assignIndex",(function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),v(this,"count",(function(){return n.descendants.size})),v(this,"enabledCount",(function(){return n.enabledValues().length})),v(this,"values",(function(){return Array.from(n.descendants.values()).sort((function(e,n){return e.index-n.index}))})),v(this,"enabledValues",(function(){return n.values().filter((function(e){return!e.disabled}))})),v(this,"item",(function(e){if(0!==n.count())return n.values()[e]})),v(this,"enabledItem",(function(e){if(0!==n.enabledCount())return n.enabledValues()[e]})),v(this,"first",(function(){return n.item(0)})),v(this,"firstEnabled",(function(){return n.enabledItem(0)})),v(this,"last",(function(){return n.item(n.descendants.size-1)})),v(this,"lastEnabled",(function(){var e=n.enabledValues().length-1;return n.enabledItem(e)})),v(this,"indexOf",(function(e){var t,a;return e&&null!=(t=null==(a=n.descendants.get(e))?void 0:a.index)?t:-1})),v(this,"enabledIndexOf",(function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))})),v(this,"next",(function(e,n){void 0===n&&(n=!0);var a=c(e,t.count(),n);return t.item(a)})),v(this,"nextEnabled",(function(e,n){void 0===n&&(n=!0);var a=t.item(e);if(a){var r=c(t.enabledIndexOf(a.node),t.enabledCount(),n);return t.enabledItem(r)}})),v(this,"prev",(function(e,n){void 0===n&&(n=!0);var a=u(e,t.count()-1,n);return t.item(a)})),v(this,"prevEnabled",(function(e,n){void 0===n&&(n=!0);var a=t.item(e);if(a){var r=u(t.enabledIndexOf(a.node),t.enabledCount()-1,n);return t.enabledItem(r)}})),v(this,"registerNode",(function(e,t){if(e&&!n.descendants.has(e)){var a=s(Array.from(n.descendants.keys()).concat(e));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=f({node:e,index:-1},t);n.descendants.set(e,r),n.assignIndex(a)}}))};var m=(0,r.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),p=(0,a.Z)(m,2),h=p[0],y=p[1];function g(){return[h,function(){return y()},function(){return e=(0,l.useState)((function(){return new b})),n=(0,a.Z)(e,1)[0],d((function(){return function(){return n.destroy()}})),n;var e,n},function(e){return function(e){var n=y(),t=(0,l.useState)(-1),r=(0,a.Z)(t,2),o=r[0],s=r[1],c=(0,l.useRef)(null);d((function(){return function(){c.current&&n.unregister(c.current)}}),[]),d((function(){if(c.current){var e=Number(c.current.dataset.index);o==e||Number.isNaN(e)||s(e)}}));var u=e?n.register(e):n.register;return{descendants:n,index:o,enabledIndex:n.enabledIndexOf(c.current),register:(0,i.l)(u,c)}}(e)}]}},3534:function(e,n,t){var a=t(7294),r=t(5444),i=t(2407);n.Z=function(e){for(var n=e.data,l=[],o=0,s=n.length;o<s;o++)l.push(a.createElement("div",{className:"char-card",key:o},a.createElement("div",{className:"char-body"},a.createElement("figure",{className:"front"},a.createElement(r.Link,{to:"/character/?id="+n[o].id,state:{name:n[o].name||"",id:n[o].id||"",filters:n[o].filters||"",src:n[o].src||""},className:"char-link"},a.createElement(i.S,{className:"char-img",id:"char-"+n[o].id,src:"../images/character-ex.png",alt:"Character number"+n[o],__imageData:t(112)}),a.createElement("span",{className:"char-id",id:"label-char-"+n[o].id},n[o].name))))));return a.createElement(a.Fragment,null,l)}},6249:function(e,n,t){t.r(n),t.d(n,{default:function(){return be}});var a=t(7294),r=t(8481),i=t(4207);var l=t(2543),o=t(3888),s=t(7487),c=t(9735),u=t(6511),d=t(5587),f=t(4238),v=t(4667),b=t(8308),m=t(7);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var y=(0,b.k)({strict:!1,name:"FormControlContext"}),g=(0,r.Z)(y,2),E=g[0],x=g[1];function N(e){var n=e.id,t=e.isRequired,l=e.isInvalid,o=e.isDisabled,s=e.isReadOnly,c=h(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),u=(0,i.Me)(),v=n||"field-"+u,b=v+"-label",y=v+"-feedback",g=v+"-helptext",E=a.useState(!1),x=(0,r.Z)(E,2),N=x[0],O=x[1],w=a.useState(!1),k=(0,r.Z)(w,2),I=k[0],T=k[1],C=function(e){void 0===e&&(e=!1);var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],l=t[1];return[i,{on:(0,a.useCallback)((function(){l(!0)}),[]),off:(0,a.useCallback)((function(){l(!1)}),[]),toggle:(0,a.useCallback)((function(){l((function(e){return!e}))}),[])}]}(),P=(0,r.Z)(C,2),D=P[0],_=P[1],F=a.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({id:g},e,{ref:(0,m.l)(n,(function(e){e&&T(!0)}))})}),[g]),S=a.useCallback((function(e,n){var t,a;return void 0===e&&(e={}),void 0===n&&(n=null),p({},e,{ref:n,"data-focus":(0,d.PB)(D),"data-disabled":(0,d.PB)(o),"data-invalid":(0,d.PB)(l),"data-readonly":(0,d.PB)(s),id:null!=(t=e.id)?t:b,htmlFor:null!=(a=e.htmlFor)?a:v})}),[v,o,D,l,s,b]),M=a.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({id:y},e,{ref:(0,m.l)(n,(function(e){e&&O(!0)})),"aria-live":"polite"})}),[y]),A=a.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({},e,c,{ref:n,role:"group"})}),[c]),Z=a.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),R=a.useCallback((function(){(0,f.A4)(_.on)}),[_]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!o,isFocused:!!D,onFocus:R,onBlur:_.off,hasFeedbackText:N,setHasFeedbackText:O,hasHelpText:I,setHasHelpText:T,id:v,labelId:b,feedbackId:y,helpTextId:g,htmlProps:c,getHelpTextProps:F,getErrorMessageProps:M,getRootProps:A,getLabelProps:S,getRequiredIndicatorProps:Z}}var O=(0,l.G)((function(e,n){var t=(0,o.j)("Form",e),r=N((0,s.Lr)(e)),i=r.getRootProps,l=h(r,["getRootProps","htmlProps"]),f=(0,d.cx)("chakra-form-control",e.className),v=a.useMemo((function(){return l}),[l]);return a.createElement(E,{value:v},a.createElement(c.Fo,{value:t},a.createElement(u.m$.div,p({},i({},n),{className:f,__css:{width:"100%",position:"relative"}}))))}));v.Ts&&(O.displayName="FormControl");var w=(0,l.G)((function(e,n){var t=x(),r=(0,c.yK)(),i=(0,d.cx)("chakra-form__helper-text",e.className);return a.createElement(u.m$.div,p({},null==t?void 0:t.getHelpTextProps(e,n),{__css:r.helperText,className:i}))}));function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function I(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function T(e){var n=function(e){var n,t,a,r=x(),i=e.id,l=e.disabled,o=e.readOnly,s=e.required,c=e.isRequired,u=e.isInvalid,d=e.isReadOnly,v=e.isDisabled,b=e.onFocus,m=e.onBlur,p=I(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),h=[];null!=r&&r.hasFeedbackText&&null!=r&&r.isInvalid&&h.push(r.feedbackId);null!=r&&r.hasHelpText&&h.push(r.helpTextId);return k({},p,{"aria-describedby":h.join(" ")||void 0,id:null!=i?i:null==r?void 0:r.id,isDisabled:null!=(n=null!=l?l:v)?n:null==r?void 0:r.isDisabled,isReadOnly:null!=(t=null!=o?o:d)?t:null==r?void 0:r.isReadOnly,isRequired:null!=(a=null!=s?s:c)?a:null==r?void 0:r.isRequired,isInvalid:null!=u?u:null==r?void 0:r.isInvalid,onFocus:(0,f.v0)(null==r?void 0:r.onFocus,b),onBlur:(0,f.v0)(null==r?void 0:r.onBlur,m)})}(e),t=n.isDisabled,a=n.isInvalid,r=n.isReadOnly,i=n.isRequired;return k({},I(n,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:t,readOnly:r,required:i,"aria-invalid":(0,d.Qm)(a),"aria-required":(0,d.Qm)(i),"aria-readonly":(0,d.Qm)(r)})}function C(){return(C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}v.Ts&&(w.displayName="FormHelperText");var P=(0,l.G)((function(e,n){var t=(0,o.j)("Input",e),r=T((0,s.Lr)(e)),i=(0,d.cx)("chakra-input",e.className);return a.createElement(u.m$.input,C({},r,{__css:t.field,ref:n,className:i}))}));v.Ts&&(P.displayName="Input"),P.id="Input";var D=t(4526),_=t(6156);function F(){return(F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function S(e){var n=e.target,t=n.tagName,a=n.isContentEditable;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==a}function M(e){void 0===e&&(e={});var n=e,t=n.ref,i=n.isDisabled,l=n.isFocusable,o=n.clickOnEnter,s=void 0===o||o,c=n.clickOnSpace,u=void 0===c||c,f=n.onMouseDown,v=n.onMouseUp,b=n.onClick,p=n.onKeyDown,h=n.onKeyUp,y=n.tabIndex,g=n.onMouseOver,E=n.onMouseLeave,x=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"]),N=a.useState(!0),O=(0,r.Z)(N,2),w=O[0],k=O[1],I=a.useState(!1),T=(0,r.Z)(I,2),C=T[0],P=T[1],D=function(){var e=a.useRef(new Map),n=e.current,t=a.useCallback((function(n,t,a,r){e.current.set(a,{type:t,el:n,options:r}),n.addEventListener(t,a,r)}),[]),r=a.useCallback((function(n,t,a,r){n.removeEventListener(t,a,r),e.current.delete(a)}),[]);return a.useEffect((function(){return function(){n.forEach((function(e,n){r(e.el,e.type,n,e.options)}))}}),[r,n]),{add:t,remove:r}}(),_=w?y:y||0,M=i&&!l,A=a.useCallback((function(e){if(i)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==b||b(e)}),[i,b]),Z=a.useCallback((function(e){C&&S(e)&&(e.preventDefault(),e.stopPropagation(),P(!1),D.remove(document,"keyup",Z,!1))}),[C,D]),R=a.useCallback((function(e){if(null==p||p(e),!(i||e.defaultPrevented||e.metaKey)&&S(e.nativeEvent)&&!w){var n=s&&"Enter"===e.key;if(u&&" "===e.key&&(e.preventDefault(),P(!0)),n)e.preventDefault(),e.currentTarget.click();D.add(document,"keyup",Z,!1)}}),[i,w,p,s,u,D,Z]),j=a.useCallback((function(e){(null==h||h(e),i||e.defaultPrevented||e.metaKey)||S(e.nativeEvent)&&!w&&u&&" "===e.key&&(e.preventDefault(),P(!1),e.currentTarget.click())}),[u,w,i,h]),L=a.useCallback((function(e){0===e.button&&(P(!1),D.remove(document,"mouseup",L,!1))}),[D]),z=a.useCallback((function(e){if(!(0,d.dO)(e)){if(i)return e.stopPropagation(),void e.preventDefault();w||P(!0),e.currentTarget.focus({preventScroll:!0}),D.add(document,"mouseup",L,!1),null==f||f(e)}}),[i,w,f,D,L]),B=a.useCallback((function(e){(0,d.dO)(e)||(w||P(!1),null==v||v(e))}),[v,w]),U=a.useCallback((function(e){i?e.preventDefault():null==g||g(e)}),[i,g]),K=a.useCallback((function(e){C&&(e.preventDefault(),P(!1)),null==E||E(e)}),[C,E]),q=(0,m.l)(t,(function(e){e&&"BUTTON"!==e.tagName&&k(!1)}));return F({},x,w?{ref:q,type:"button","aria-disabled":M?void 0:i,disabled:M,onClick:A,onMouseDown:f,onMouseUp:v,onKeyUp:h,onKeyDown:p,onMouseOver:g,onMouseLeave:E}:{ref:q,role:"button","data-active":(0,d.PB)(C),"aria-disabled":i?"true":void 0,tabIndex:M?void 0:_,onClick:A,onMouseDown:z,onMouseUp:B,onKeyUp:j,onKeyDown:R,onMouseOver:U,onMouseLeave:K})}var A=t(8177),Z=t(2402),R=t(4059);var j=t(2156);function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var B=(0,A.n)(),U=(0,r.Z)(B,4),K=U[0],q=U[1],G=U[2],H=U[3];var $=(0,b.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),V=(0,r.Z)($,2),W=V[0],Y=V[1];function J(e){var n=Y(),t=n.id,r=n.selectedIndex;return L({},e,{children:function(e){return a.Children.toArray(e).filter((function(e){return a.isValidElement(e)}))}(e.children).map((function(e,n){return a.cloneElement(e,{isSelected:n===r,id:X(t,n),"aria-labelledby":Q(t,n)})}))})}function Q(e,n){return e+"--tab-"+n}function X(e,n){return e+"--tabpanel-"+n}function ee(){return(ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function ne(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var te=(0,l.G)((function(e,n){var t=(0,o.j)("Tabs",e),l=(0,s.Lr)(e),f=l.children,v=l.className,b=function(e){var n=e.defaultIndex,t=e.onChange,l=e.index,o=e.isManual,s=e.isLazy,c=e.lazyBehavior,u=void 0===c?"unmount":c,d=e.orientation,f=void 0===d?"horizontal":d,v=e.direction,b=void 0===v?"ltr":v,m=z(e,["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"]),p=a.useState(null!=n?n:0),h=(0,r.Z)(p,2),y=h[0],g=h[1],E=(0,Z.T)({defaultValue:null!=n?n:0,value:l,onChange:t}),x=(0,r.Z)(E,2),N=x[0],O=x[1];a.useEffect((function(){null!=l&&g(l)}),[l]);var w=G();return{id:(0,i.Me)(e.id,"tabs"),selectedIndex:N,focusedIndex:y,setSelectedIndex:O,setFocusedIndex:g,isManual:o,isLazy:s,lazyBehavior:u,orientation:f,descendants:w,direction:b,htmlProps:m}}(ne(l,["children","className"])),m=b.htmlProps,p=b.descendants,h=ne(b,["htmlProps","descendants"]),y=a.useMemo((function(){return h}),[h]),g=(0,D.CE)(m,["isFitted"]);return a.createElement(K,{value:p},a.createElement(W,{value:y},a.createElement(c.Fo,{value:t},a.createElement(u.m$.div,ee({className:(0,d.cx)("chakra-tabs",v),ref:n},g,{__css:t.root}),f))))}));v.Ts&&(te.displayName="Tabs");var ae=(0,l.G)((function(e,n){var t=(0,c.yK)(),r=function(e){var n=e.isDisabled,t=e.isFocusable,a=z(e,["isDisabled","isFocusable"]),r=Y(),i=r.setSelectedIndex,l=r.isManual,o=r.id,s=r.setFocusedIndex,c=r.selectedIndex,u=H({disabled:n&&!t}),d=u.index,v=u.register,b=d===c,p=M(L({},a,{ref:(0,m.l)(v,e.ref),isDisabled:n,isFocusable:t,onClick:(0,f.v0)(e.onClick,(function(){i(d)}))}));return L({},p,{id:Q(o,d),role:"tab",tabIndex:b?0:-1,type:"button","aria-selected":b,"aria-controls":X(o,d),onFocus:n?void 0:(0,f.v0)(e.onFocus,(function(){s(d),!l&&(!n||!t)&&i(d)}))})}(ee({},e,{ref:n})),i=ee({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},t.tab);return a.createElement(u.m$.button,ee({},r,{className:(0,d.cx)("chakra-tabs__tab",e.className),__css:i}))}));v.Ts&&(ae.displayName="Tab");var re=(0,l.G)((function(e,n){var t=function(e){var n=Y(),t=n.focusedIndex,r=n.orientation,i=n.direction,l=q(),o=a.useCallback((function(e){var n,a=function(){var e=l.nextEnabled(t);e&&(0,j.T)(e.node)},o=function(){var e=l.prevEnabled(t);e&&(0,j.T)(e.node)},s="horizontal"===r,c="vertical"===r,u=(0,d.uh)(e),f="ltr"===i?"ArrowLeft":"ArrowRight",v="ltr"===i?"ArrowRight":"ArrowLeft",b=(n={},(0,_.Z)(n,f,(function(){return s&&o()})),(0,_.Z)(n,v,(function(){return s&&a()})),(0,_.Z)(n,"ArrowDown",(function(){return c&&a()})),(0,_.Z)(n,"ArrowUp",(function(){return c&&o()})),(0,_.Z)(n,"Home",(function(){var e=l.firstEnabled();e&&(0,j.T)(e.node)})),(0,_.Z)(n,"End",(function(){var e=l.lastEnabled();e&&(0,j.T)(e.node)})),n)[u];b&&(e.preventDefault(),b(e))}),[l,t,r,i]);return L({},e,{role:"tablist","aria-orientation":r,onKeyDown:(0,f.v0)(e.onKeyDown,o)})}(ee({},e,{ref:n})),r=ee({display:"flex"},(0,c.yK)().tablist);return a.createElement(u.m$.div,ee({},t,{className:(0,d.cx)("chakra-tabs__tablist",e.className),__css:r}))}));v.Ts&&(re.displayName="TabList");var ie=(0,l.G)((function(e,n){var t=function(e){var n=e.isSelected,t=e.id,r=e.children,i=z(e,["isSelected","id","children"]),l=Y(),o=l.isLazy,s=l.lazyBehavior,c=a.useRef(!1);return n&&(c.current=!0),L({tabIndex:0},i,{children:function(e){var n=e.hasBeenSelected,t=e.isLazy,a=e.isSelected,r=e.lazyBehavior;return!t||!!a||!("keepMounted"!==(void 0===r?"unmount":r)||!n)}({hasBeenSelected:c.current,isSelected:n,isLazy:o,lazyBehavior:s})?r:null,role:"tabpanel",hidden:!n,id:t})}(ee({},e,{ref:n})),r=(0,c.yK)();return a.createElement(u.m$.div,ee({outline:"0"},t,{className:(0,d.cx)("chakra-tabs__tab-panel",e.className),__css:r.tabpanel}))}));v.Ts&&(ie.displayName="TabPanel");var le=(0,l.G)((function(e,n){var t=J(e),r=(0,c.yK)();return a.createElement(u.m$.div,ee({},t,{width:"100%",ref:n,className:(0,d.cx)("chakra-tabs__tab-panels",e.className),__css:r.tabpanels}))}));v.Ts&&(le.displayName="TabPanels");var oe=(0,l.G)((function(e,n){var t=function(){var e=Y(),n=q(),t=e.selectedIndex,i=e.orientation,l="horizontal"===i,o="vertical"===i,s=a.useState((function(){return l?{left:0,width:0}:o?{top:0,height:0}:void 0})),c=(0,r.Z)(s,2),u=c[0],d=c[1],f=a.useState(!1),b=(0,r.Z)(f,2),m=b[0],p=b[1];return(0,R.G)((function(){if(!(0,v.o8)(t)){var e=n.item(t);if(!(0,v.o8)(e)){l&&d({left:e.node.offsetLeft,width:e.node.offsetWidth}),o&&d({top:e.node.offsetTop,height:e.node.offsetHeight});var a=requestAnimationFrame((function(){p(!0)}));return function(){a&&cancelAnimationFrame(a)}}}}),[t,l,o,n]),L({position:"absolute",transitionProperty:"left, right, top, bottom",transitionDuration:m?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},u)}(),i=ee({},e.style,t),l=(0,c.yK)();return a.createElement(u.m$.div,ee({ref:n},e,{className:(0,d.cx)("chakra-tabs__tab-indicator",e.className),style:i,__css:l.indicator}))}));v.Ts&&(oe.displayName="TabIndicator");var se=t(3962),ce=t(6570),ue=t(3090),de=t(3751),fe=t(3534),ve=t(5611),be=function(){var e="undefined"!=typeof window,n=(0,a.useState)(e&&window.innerWidth),t=(n[0],n[1]);e&&window.addEventListener("resize",(function(){t(e&&window.innerWidth)}));for(var r=(0,a.useState)(2),i=r[0],l=(r[1],(0,a.useState)(!1)),o=l[0],s=(l[1],[]),c=0;c<1;c++)s.push({name:"Character "+(c+1),id:c+1,src:ve.Z,filters:{bday:new Intl.DateTimeFormat("en-US").format(new Date)}});var u=(0,a.useState)(s),d=u[0];u[1];var f=(0,se.q)(),v=f.isOpen,b=f.onOpen,m=f.onClose;return a.createElement(ue.Z,null,a.createElement(de.Z,{title:"Account"}),a.createElement("div",{className:"gen-wrap user-acc"},a.createElement("h1",null,"The #FAPP Community"),a.createElement("h2",null,"An exclusive member-only area where you can buy #FAPP merch and view your NFTs"),a.createElement("form",null,a.createElement(O,null,a.createElement(P,{placeholder:"Your wallet here"})),!0===o?a.createElement(a.Fragment,null,0!==i?a.createElement(a.Fragment,null,a.createElement(te,{className:"tab-container"},a.createElement(re,{className:"buttons-container"},a.createElement(ae,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #ed55b3"},className:"phalluses-button"},"Your Phalluses"),a.createElement(ae,{_selected:{color:"white",boxShadow:"0px 0px 0px 2px #34bdbd"},className:"merch-store-button"},"FAPP Merch Store")),a.createElement(le,null,a.createElement(ie,null,a.createElement("div",{className:"bought"},a.createElement(fe.Z,{data:d}))),a.createElement(ie,{className:"market-container"},a.createElement("p",null,"FAPP Merch store will be available ASAP.",a.createElement("br",null),"We are working on this project!",a.createElement("br",null),"Join our discord server or check our twitter for updates!"))))):a.createElement(a.Fragment,null,a.createElement("p",{className:"zero-token-msg"},"No #FAPP Phalluses are found in this wallet 🙁",a.createElement("br",null),"You need at least one Phallus to view this page!"))):a.createElement(a.Fragment,null,a.createElement("button",{onClick:function(){var e;b(),console.log(e)},className:"user-account cnct-wallet"},"Connect your wallet"),a.createElement(ce.u_,{isCentered:!0,isOpen:v,onClose:m},a.createElement(ce.ZA,null),a.createElement(ce.hz,{style:{display:"flex",fontFamily:'"Amatic SC", cursive',color:"white",backgroundColor:"rgba(19, 24, 38, 1)"}},a.createElement(ce.xB,null,"#FAPP page is unavailable",a.createElement(ce.ol,{style:{transform:"scale(.5)",opacity:".7",display:"inline-block",position:"initial",float:"right"}})),a.createElement(ce.fe,null,a.createElement("p",null,"This page will be available after the first minted #FAPP NFT."),a.createElement("p",null,"Join our ",a.createElement("a",{style:{color:"rgb(59, 130, 246)"},className:"link-discord",href:"https://discord.gg/zFjWr4wUwH"},a.createElement("span",null,"Discord"))," server and ",a.createElement("a",{style:{color:"rgb(59, 130, 246)"},className:"link-discord",href:"https://twitter.com/FAP_Planet"},a.createElement("span",null,"Twitter"))," to get the latest news!"))))))))}},5611:function(e,n,t){n.Z=t.p+"static/character-ex-fdbdce051b5ee6c7490e99badad11870.png"}}]);
//# sourceMappingURL=component---src-pages-user-account-js-1b172e2795971e1261b2.js.map