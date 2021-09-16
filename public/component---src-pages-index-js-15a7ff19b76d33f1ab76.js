"use strict";(self.webpackChunknft=self.webpackChunknft||[]).push([[678],{80014:function(e,t,n){function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function l(e,t){var n=t.distance,a=t.left,l=t.right,i=t.up,r=t.down,o=t.top,c=t.bottom,u=t.big,m=t.mirror,h=t.opposite,p=(n?n.toString():0)+((a?1:0)|(l?2:0)|(o||r?4:0)|(c||i?8:0)|(m?16:0)|(h?32:0)|(e?64:0)|(u?128:0));if(d.hasOwnProperty(p))return d[p];var f=a||l||i||r||o||c,E=void 0,v=void 0;if(f){if(!m!=!(e&&h)){var b=[l,a,c,o,r,i];a=b[0],l=b[1],o=b[2],c=b[3],i=b[4],r=b[5]}var w=n||(u?"2000px":"100%");E=a?"-"+w:l?w:"0",v=r||o?"-"+w:i||c?w:"0"}return d[p]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+E+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),d[p]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,i=(e.out,e.forever),r=e.timeout,o=e.duration,c=void 0===o?s.defaults.duration:o,m=e.delay,d=void 0===m?s.defaults.delay:m,h=e.count,p=void 0===h?s.defaults.count:h,f=a(e,["children","out","forever","timeout","duration","delay","count"]),E={make:l,duration:void 0===r?c:r,delay:d,forever:i,count:p,style:{animationFillMode:"both"},reverse:f.left};return t?(0,u.default)(f,E,E,n):E}Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(45697),s=n(75321),c=n(71719),u=(r=c)&&r.__esModule?r:{default:r},m={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},d={};i.propTypes=m,t.default=i,e.exports=t.default},53853:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,l=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(l)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(67294),c=(a=s)&&a.__esModule?a:{default:a},u=n(45697),m=n(75321),d=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),h={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:d.isRequired,outEffect:(0,u.oneOfType)([d,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},p={transitionGroup:u.object},f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.isOn=void 0===e.when||!!e.when,a.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:a.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},a.savedChild=!1,a.isShown=!1,m.observerMode?a.handleObserve=a.handleObserve.bind(a):(a.revealHandler=a.makeHandler(a.reveal),a.resizeHandler=a.makeHandler(a.resize)),a.saveRef=a.saveRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!m.observerMode&&this.props.collapse&&window.document.dispatchEvent(m.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var a=this,l=n.forever,i=n.count,r=n.delay,o=n.duration;if(!l){this.animationEndTimeout=window.setTimeout((function(){a&&a.el&&(a.animationEndTimeout=void 0,e.call(a))}),r+(o+(t?o:0)*i))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var a=n.duration+(t.cascade?n.duration:0),l=this.isOn?this.getDimensionValue():0,i=void 0,r=void 0;if(t.collapseOnly)i=n.duration/3,r=n.delay;else{var o=a>>2,s=o>>1;i=o,r=n.delay+(this.isOn?0:a-o-s),e.style.animationDuration=a-o+(this.isOn?s:-s)+"ms",e.style.animationDelay=n.delay+(this.isOn?o-s:0)+"ms"}return e.collapse={height:l,transition:"height "+i+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],a="style"in n&&n.style.animationName||void 0,l=void 0;e.collapseOnly?l={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(a=n.make),l={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:a}),className:n.className}),this.setState(e.collapse?this.collapse(l,e,n):l),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),m.ssr&&(0,m.disableSsr)()}},{key:"handleObserve",value:function(e,t){i(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&m.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.globalHide||(0,m.hideAll)(),this&&this.el&&(e||(e=this.props),m.ssr&&(0,m.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):m.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,a=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!a||m.ssr&&!m.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):m.ssr&&(m.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var a=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],i=a.duration,o=a.reverse,s=n.length,u=2*i;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),i=u/2);var d=o?s:0;return n.map((function(e){return"object"===(void 0===e?"undefined":l(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,m.cascade)(o?d--:d++,0,s,i,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===l(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,a=t.props,l=a.style,i=a.className,o=a.children,s=this.props.disabled?i:(this.props.outEffect?m.namespace:"")+(this.state.className?" "+this.state.className:"")+(i?" "+i:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&o&&this.state.style.animationName?(n=this.cascade(o),u=r({},l,{opacity:1})):u=this.props.disabled?l:r({},l,this.state.style);var d=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:s,style:u},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,d,e?n||o:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,m.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,a=window.pageYOffset-t.getTop(this.el),l=Math.min(n,window.innerHeight)*(m.globalHide?e.fraction:0);return a>l-window.innerHeight&&a<n-l}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){m.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!m.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);f.propTypes=h,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=p,f.displayName="RevealBase",t.default=f,e.exports=t.default},75321:function(e,t,n){var a=n(40122);function l(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){a.warn("react-reveal - animation failed")}}function i(){m||(t.globalHide=m=!0,window.removeEventListener("scroll",i,!0),l("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=l,t.cascade=function(e,t,n,a,l){var i=Math.log(a),r=(Math.log(l)-i)/(n-t);return Math.exp(i+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(E+h)+"{"+e+"}",n=p[e];return n?""+E+n:(f.insertRule(t,f.cssRules.length),p[e]=h,""+E+h++)},t.hideAll=i,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var r=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,c=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=o=!1},m=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,E=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||c,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(u,1500),s||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},71719:function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e,t,n,a){return"in"in e&&(e.when=e.in),i.default.Children.count(a)<2?i.default.createElement(r.default,l({},e,{inEffect:t,outEffect:n,children:a})):(a=i.default.Children.map(a,(function(a){return i.default.createElement(r.default,l({},e,{inEffect:t,outEffect:n,children:a}))})),"Fragment"in i.default?i.default.createElement(i.default.Fragment,null,a):i.default.createElement("span",null,a))};var i=a(n(67294)),r=a(n(53853));e.exports=t.default},66019:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(67294),l=n(25444),i=n(80014),r=n.n(i),o=n(57690),s=n(21322),c=n(97219),u=n(93751),m=function(e){for(var t=e.data,n=[],l=0,i=t.length;l<i;l++)n.push(a.createElement("div",{className:"slide",key:l},a.createElement("img",{src:t[l].avatarSRC,alt:""+t[l].name})));for(var r=0,o=t.length;r<o;r++)n.push(a.createElement("div",{className:"slide",key:r+"-d"},a.createElement("img",{src:t[r].avatarSRC,alt:""+t[r].name})));return a.createElement("div",{className:"slider"},a.createElement("div",{className:"slide-track"},n))},d=n.p+"static/1-58964ddffc8257b4250767fa900e32f0.png",h=n.p+"static/2-30e06e7f641567c57241f08fc72a3ad2.png",p=n.p+"static/3-c337b40ac81b22b9d7ae174643bd1440.png",f=n.p+"static/4-c3f91889adafdb994eac96ae78705416.png",E=n.p+"static/5-638afdec0de77f9a8147c8b5e80fc138.png",v=n.p+"static/6-72c9f49fc8d495380e071a9956ebb459.png",b=n.p+"static/7-6752a04f5210bf23c83c24a92027c132.png",w=n.p+"static/8-8efeb63f4cb07c74ab4a23e3cca95f7a.png",y=n.p+"static/9-1677af40d8dac99750416d779cd274b0.png",g=n.p+"static/10-b27983a2b83ddc90178286b486113d4f.png",P=n.p+"static/11-8cc0a7dec575511e0050ea21dcd158be.png",O=n.p+"static/12-6fa1cd860225eacece5cad4c430071ba.png",N=n.p+"static/13-eff32c7ac2a15ce95e9bcd4393d3d356.png",A=n.p+"static/14-c15639c03cbd696e7bc7a1207be55701.png",T=n.p+"static/15-dacf6a03153961d718a2cba3ed3cbb76.png",k=n.p+"static/16-d92c93c30c4322a02fe1d2e333758286.png",F=n.p+"static/storyline-59aa40dbe2fd5607c1f4d209f8322870.jpeg",R=n.p+"static/roadmap1-4d16575979a97d7db86e74c7cf4cb84e.jpeg",S=n.p+"static/roadmap2-96ab2a3dd4e857dcb23e6308dcc1b353.jpg",L=n.p+"static/roadmap3-84026a2f81262a29918761c64d914036.jpeg",C=n.p+"static/roadmap4-716a4f44697de75aa7ec6ee167e254e3.jpg",H=n.p+"static/roadmap5-5d79702ac56fadbfd6525df43dd7ca25.jpg",x=n.p+"static/roadmap6-8adea8381c9d42f784f6c33b5858c17b.jpg",M=n.p+"static/rasta-705cf1e6afeada389596a347ac4575ba.png",W=n.p+"static/Superhero-b50d074d8ab2319b94551b943a8077e0.png",I=n.p+"static/cyber-b278b326c79cfb45971c288308c2c0da.png",j=n.p+"static/afterlife-964900167a8e4b50939c5903b065318f.png",D=n.p+"static/basic-386892413ea3254016c827858b75a0ee.png",U=n.p+"static/wild-d0c3c410f14aa2ddf086dd14bf0f46b8.png",_=n.p+"static/protection-d7aa43daff4b7d2160b93edabef9cd9b.png",Y=n.p+"static/precious-ac246e784269e87e12ac31fa611bd178.png",q=n(14655),z=n(36396),B=n(57413),G=n(74821),V=n(20176),Z=function(){var e="undefined"!=typeof window,t=(0,a.useState)(null),n=t[0],i=t[1],Z=(0,a.useRef)(null),Q=(0,a.useRef)(null);(0,a.useEffect)((function(){if(e){i(window.innerWidth),window.addEventListener("resize",(function(){i(window.innerWidth)})),window.addEventListener("scroll",(function(){if(Z.current&&Q.current){var e,t,n=(null===(e=Z.current)||void 0===e?void 0:e.getBoundingClientRect().top)-window.screen.height/2,a=!1;(null===(t=Z.current)||void 0===t?void 0:t.getBoundingClientRect().bottom)-window.screen.height/2<0&&(Q.current.style.bottom="20px",a=!0),n<0&&!a&&(Q.current.classList.add("visible"),Q.current.style.top="20px",Q.current.style.height=Math.floor(window.scrollY+window.screen.height/2-(window.scrollY+Q.current.getBoundingClientRect().top))+"px"),n>-150&&(Q.current.style.height="50px",Q.current.classList.remove("visible"))}}));var t=window.location.search,n=new URLSearchParams(t).get("id");if(n){var a=document.getElementById(n).getBoundingClientRect().y;window.scrollTo({top:a-50,behavior:"smooth"})}}}),[]);var J=(0,a.useRef)(null);for(var K=[],X=[d,h,p,f,E,v,b,w,y,g,P,O,N,A,T,k],$=0;$<16;$++)K.push({name:"chracter"+$,avatarSRC:X[$]});var ee=(0,a.useState)(K),te=ee[0];ee[1];function ne(e){var t=e.children,n=e.className;return a.createElement(o.xu,{className:n,as:"button",border:"none",color:"white",bgColor:"#363636"},t)}function ae(e){var t=e.children,n=e.className;return a.createElement(o.xu,{className:n,as:"button",border:"none",color:"white",bgColor:"#363636"},t)}function le(e){var t=e.className,n=e.children,l=e.title;return a.createElement(s.Qd,{border:"none",bg:"#555555",outline:"none",mb:4,className:t},a.createElement("h2",null,a.createElement(s.KF,{_focus:{border:"none",outline:"none",boxShadow:"none"}},a.createElement(o.xu,{flex:"1",textAlign:"left"},l),a.createElement(s.XE,null))),a.createElement(s.Hk,{p:0,m:0},a.createElement(o.xu,{padding:"0 0 5px 0",m:0},a.createElement(o.xu,{padding:"10px 10px",m:2,bg:"#464646"},n))))}return a.createElement(c.Z,null,a.createElement(u.Z,{title:"Home"}),a.createElement("div",{className:"welcome-wrap"},a.createElement("div",{className:"video-wrap"}),a.createElement("div",{className:"content"},a.createElement("div",{className:"welcome"},a.createElement("h1",null,"FAMILY PHALLUS PLANET",a.createElement("br",null),"FAPP"),a.createElement("p",null,"The NFT planet where every Phallus is unique and free!")),a.createElement("button",{onClick:function(){var e=J.current.getBoundingClientRect().y;window.scrollTo({top:e-20,behavior:"smooth"})},className:"nav-btn"},a.createElement("span",null,"MORE")),a.createElement("div",{className:"links"},a.createElement("a",{href:"https://www.youtube.com/channel/UCch3zZDZ9ubRlhSFbknDUog"},a.createElement("img",{src:q.Z,alt:"youtube"})),a.createElement("a",{href:"https://opensea.io/collection/fapp"},a.createElement("img",{src:V.Z,alt:"opensea"})),a.createElement("a",{href:"https://instagram.com/familyphallusplanet"},a.createElement("img",{src:B.Z,alt:"instagram"})),a.createElement("a",{href:"https://twitter.com/FAP_Planet"},a.createElement("img",{src:G.Z,alt:"twitter"})),a.createElement("a",{href:"https://discord.gg/zFjWr4wUwH"},a.createElement("img",{src:z.Z,alt:"discord"}))))),a.createElement("div",{className:"index-wrap-content"},a.createElement("div",{className:"carousel-wrap",ref:J},a.createElement(m,{data:te,className:"carousel"}),a.createElement(l.rU,{className:"toGallery",to:"/gallery"},a.createElement(ne,{className:"_btn"},a.createElement("span",null,"Gallery")))),a.createElement("div",{className:"gen-wrap index"},a.createElement("div",{id:"content-block-storyline",className:"content-block storyline"},a.createElement(r(),{left:!0},a.createElement("div",{className:"text-wrap"},a.createElement("div",{className:"text"},a.createElement("h2",null,"Storyline"),a.createElement("p",null,"We are a team of artists, developers and financial analysts that discovered Family Phallus Planet - FAPP."),a.createElement("br",null),a.createElement("p",null,'Whether you are a male or a female, gay or lesbian, feminist or masculist, transsexual or pansexual - we don\'t care who you are! We want to show the whole world that Phalluses are not "disgusting", it’s also something that can be cute and beautiful! Our mission is to help fight AIDS, stop body shaming and prove that art should be provocative.'),a.createElement("br",null),a.createElement("p",null,'Family Phallus Planet - FAPP is an Ethereum Blockchain planet with 8888 generative 2.5 inch NFT Phalluses. FAPP is not boring, every Phallus here knows how to deal with boredom! Look at Phalluses! They know that they\'re small, but they DGAF about it. They support each other and think about their strengths while humans pay too much attention to their "problems". Mint your Phallus and join the community where everyone can find friends and forget about stupid stereotypes!')),a.createElement(ae,{className:"toMint"},a.createElement(l.rU,{to:"/mint"},a.createElement("span",null,"MINT"))))),a.createElement(r(),{right:!0},a.createElement("img",{src:F,alt:"storyline image"}))),a.createElement("div",{id:"content-block-nft",className:"content-block nft"},a.createElement(r(),{right:!0},a.createElement("div",{className:"info"},a.createElement("h2",null,"NFT"),a.createElement("div",{className:"about"},a.createElement("h3",null,"8888 generative NFTs."),a.createElement("h3",null,"175 Traits"),a.createElement("h3",null,"7 kinds of attributes"),a.createElement("h3",null,"3 groups")),a.createElement("p",null,"Every Phallus has unique combination of background color, skin type, eyes, mouth, head and accessory"))),a.createElement(r(),{left:!0,cascade:!0},a.createElement("div",{className:"levels"},a.createElement("div",{className:"dope level"},a.createElement("h3",null,a.createElement("span",null,"5%")," Dope group"),a.createElement("div",{className:"icons"},a.createElement("figure",null,a.createElement("img",{src:Y,alt:"Precious attribute image"}),a.createElement("figcaption",null,"Precious attributes")))),a.createElement("div",{className:"wild level"},a.createElement("h3",null,a.createElement("span",null,"40%")," Wild group"),a.createElement("div",{className:"icons"},a.createElement("figure",null,a.createElement("img",{src:j,alt:"Halloween attribute image"}),a.createElement("figcaption",null,"Halloween attributes")),a.createElement("figure",null,a.createElement("img",{src:I,alt:"Cyber attribute image"}),a.createElement("figcaption",null,"Cyber attributes")),a.createElement("figure",null,a.createElement("img",{src:U,alt:"Animal attribute image"}),a.createElement("figcaption",null,"Animal attributes")))),a.createElement("div",{className:"basic level"},a.createElement("h3",null,a.createElement("span",null,"55%")," Basic group"),a.createElement("div",{className:"icons"},a.createElement("figure",null,a.createElement("img",{src:D,alt:"Common attribute image"}),a.createElement("figcaption",null,"Common attributes")),a.createElement("figure",null,a.createElement("img",{src:W,alt:"Superhero attribute image"}),a.createElement("figcaption",null,"Superhero attributes")),a.createElement("figure",null,a.createElement("img",{src:_,alt:"Protection attribute image"}),a.createElement("figcaption",null,"Protection attributes")),a.createElement("figure",null,a.createElement("img",{src:M,alt:"Stoned attribute image"}),a.createElement("figcaption",null,"Stoned attributes"))))))),a.createElement("div",{id:"content-block-roadmap",className:"content-block roadmap"},a.createElement(r(),{left:!0},a.createElement("h2",null,"ROADMAP"),a.createElement("h4",null,"Short-term")),a.createElement("div",{className:"points",ref:n>1300?Z:null},n>1300&&a.createElement(a.Fragment,null,a.createElement("div",{className:"line-wrap"},a.createElement("div",{className:"line",ref:Q})),a.createElement(r(),{left:!0},a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"20%")," FAPP is everywhere!"),a.createElement("img",{src:R,alt:"roadmap first image"}),a.createElement("p",null,"We will invest our funds in marketing. Everybody should know that we are great!"))),a.createElement(r(),{right:!0},a.createElement("div",{className:"point right"},a.createElement("h3",null,a.createElement("span",null,"40%")," Charity time!"),a.createElement("img",{src:S,alt:"roadmap second image"}),a.createElement("p",null,"FAPP will make a donation to the AIDS Foundation."))),a.createElement(r(),{left:!0},a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"60%")," How rare is your Phallus?"),a.createElement("img",{src:L,alt:"roadmap third image"}),a.createElement("p",null,"FAPP will be added to «",a.createElement("a",{href:"https://rarity.tools/"},"rarity.tools"),"»."))),a.createElement(r(),{right:!0},a.createElement("div",{className:"point right"},a.createElement("h3",null,a.createElement("span",null,"80%")," #FAPP merch store!"),a.createElement("img",{src:C,alt:"roadmap fourth image"}),a.createElement("p",null,"Our official FAPP nft merch store will be unlocked for collectors."))),a.createElement(r(),{left:!0},a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"90%")," Phalluses need friends!"),a.createElement("img",{src:H,alt:"roadmap fifth image"}),a.createElement("p",null,"We will drop new NFT collectible."),a.createElement("p",null,"Every collector will be able to mint one free companion for a Phallus. Just pay GAS fee."))),a.createElement(r(),{right:!0},a.createElement("div",{className:"point right"},a.createElement("h3",null,a.createElement("span",null,"100%")," Elections on FAPP"),a.createElement("img",{src:x,alt:"roadmap sixth image"}),a.createElement("p",null,"Video game? Web series? Or maybe something new and crazy? All phalluses will vote for the future of FAPP!")))),n<=1300&&a.createElement(a.Fragment,null,a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"20%")," FAPP is everywhere!"),a.createElement("img",{src:R,alt:"roadmap first image"}),a.createElement("p",null,"We will invest our funds in marketing. Everybody should know that we are great!")),a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"40%")," Charity time!"),a.createElement("img",{src:S,alt:"roadmap second image"}),a.createElement("p",null,"FAPP will make a donation to the AIDS Foundation.")),a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"60%")," How rare is your Phallus?"),a.createElement("img",{src:L,alt:"roadmap third image"}),a.createElement("p",null,"FAPP will be added to «",a.createElement("a",{href:"https://rarity.tools/"},"rarity.tools"),"».")),a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"80%")," #FAPP merch store!"),a.createElement("img",{src:C,alt:"roadmap fourth image"}),a.createElement("p",null,"Our official FAPP nft merch store will be unlocked for collectors.")),a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"90%")," Phalluses need friends!"),a.createElement("img",{src:H,alt:"roadmap fifth image"}),a.createElement("p",null,"We will drop new NFT collectible."),a.createElement("p",null,"Every collector will be able to mint one free companion for a Phallus. Just pay GAS fee.")),a.createElement("div",{className:"point"},a.createElement("h3",null,a.createElement("span",null,"100%")," Elections on FAPP"),a.createElement("img",{src:x,alt:"roadmap sixth image"}),a.createElement("p",null,"Video game? Web series? Or maybe something new and crazy? All phalluses will vote for the future of FAPP!")))),a.createElement("div",null,a.createElement("h4",null,"Long-term"),a.createElement("p",null,"We don’t think that anybody can predict the future of FAPP. Family Phallus Planet is a democratic planet where every Phallus can vote and decide what FAPP should do to become the most interesting NFT project.",a.createElement("br",null),"We want to create a community where everyone can be useful. Together we are strong!"))),a.createElement("div",{id:"content-block-faq",className:"content-block faq"},a.createElement(r(),{bottom:!0},a.createElement("h2",null,"FAQ"),a.createElement(s.UQ,{className:"accordion",allowMultiple:!0,allowToggle:!0},a.createElement(le,{title:"WHO ARE YOU?"},"We are a team of artists, developers and financial analysts that discovered Family Phallus Planet - FAPP."),a.createElement(le,{title:"WHAT IS FAPP?"},"Family Phallus Planet - FAPP is an Ethereum Blockchain planet with 8888 generative 2.5 inch NFT Phalluses."),a.createElement(le,{title:"TELL ME MORE ABOUT YOUR NFT COLLECTION!"},"#FAPP nft collection has 175 hand-drawn traits.",a.createElement("br",null),a.createElement("br",null),"Every Phallus has different combination of",a.createElement("ul",null,a.createElement("li",null,"Background color"),a.createElement("li",null,"Skin Type"),a.createElement("li",null,"Eyes"),a.createElement("li",null,"Mouth"),a.createElement("li",null,"Head"),a.createElement("li",null,"Accessories")),a.createElement("br",null),"Every traits have different attributes:",a.createElement("ul",null,a.createElement("li",null,"Common attributes"),a.createElement("li",null,"Protection attributes"),a.createElement("li",null,"Superhero attributes"),a.createElement("li",null,"Stoned attributes"),a.createElement("li",null,"Animal attributes"),a.createElement("li",null,"Cyber attributes"),a.createElement("li",null,"Halloween attributes"),a.createElement("li",null,"Precious attributes")),a.createElement("br",null),"Every attribute belongs to its own group:",a.createElement("ul",null,a.createElement("li",null,"Basic group",a.createElement("ul",{className:"faq-list-with-padding"},a.createElement("li",null,"Common attributes"),a.createElement("li",null,"Protection attributes"),a.createElement("li",null,"Superhero attributes"),a.createElement("li",null,"Stoned attributes"))),a.createElement("br",null),a.createElement("li",null,"Wild group",a.createElement("ul",{className:"faq-list-with-padding"},a.createElement("li",null,"Animal attributes"),a.createElement("li",null,"Cyber attributes"),a.createElement("li",null,"Halloween attributes"))),a.createElement("br",null),a.createElement("li",null,"Dope group",a.createElement("ul",{className:"faq-list-with-padding"},a.createElement("li",null,"Precious attributes"))))),a.createElement(le,{title:"WHAT ARE YOU PLANNING TO DO?"},a.createElement("ul",null,a.createElement("li",null,"We want to help fight AIDS.",a.createElement("p",null,a.createElement("em",null,"We will donate money to charities that will be chosen by Phalluses in our #FAPP community."))),a.createElement("br",null),a.createElement("li",null,"We want to stop body shaming.",a.createElement("p",null,a.createElement("em",null,"Look at Phalluses! They know that they're small, but they DGAF about it. They support each other and think about their strengths while humans pay too much attention to their \"problems\". Let's create a community where everyone can find friends and forget about stupid stereotypes! "))),a.createElement("br",null),a.createElement("li",null,"Our team will provide giveaways and prizes.",a.createElement("p",null,a.createElement("em",null,"ETH coins, free NFTs and more cool stuff!"))),a.createElement("br",null),a.createElement("li",null,"We want to create a big universe with different characters.",a.createElement("p",null,a.createElement("em",null,"We will create new NFT collectibles. Our collectors will be able to mint new NFTs for free!"))))),a.createElement(le,{title:"WHAT ADVANTAGES DO YOU HAVE?"},a.createElement("ul",null,a.createElement("li",null,"Fair distribution"),a.createElement("li",null,"Good arts"),a.createElement("li",null,"Fresh and provocative idea"),a.createElement("li",null,"Great roadmap"),a.createElement("li",null,"Long-term ambitions"),a.createElement("li",null,"175 traits"),a.createElement("li",null,"Voting rights"),a.createElement("li",null,"We are unique"),a.createElement("li",null,"We give ownership and commercial usage rights to the collectors over their NFTs"))),a.createElement(le,{title:"HOW CAN I GET A PHALLUS?"},"Click ",a.createElement("a",{href:"https://nft-cockiz.com/mint"},"here"),", connect your MetaMask wallet and mint (buy) your NFT Phallus.",a.createElement("br",null),"1 Phallus costs 0.08 ETH + GAS."),a.createElement(le,{title:"CAN I SEE WHAT PHALLUS I WILL GET?"},"No, you can buy tradable loot boxes. They will be replaced by Phalluses after the sold-out."),a.createElement(le,{title:"TELL ME ABOUT ROYALTY FEES AND LIQUIDITY POOL!"},"We will take 7% from every resold Phallus. FAPP will send up to 10% to Family Phallus Planet’s liquidity pool. Our collectors will vote how this liquidity pool should be used."),a.createElement(le,{title:"WHERE DO YOU STORE YOUR NFTs?"},"We use ",a.createElement("a",{href:"http://ifps.io/"},"ifps.io"),"! It’s the best way to store our NFT collectible. IPFS is a decentralised file hosting system. It means that your NFTs won’t disappear and you will be able to see them anytime you want!"),a.createElement(le,{title:"WILL YOU MAKE MORE PHALLUSES?"},"No we won't. We have only 8888 Phalluses."),a.createElement(le,{title:"DO YOU HAVE YOUR OWN SMART CONTRACT?"},"Yes, we developed our own Smart Contract smartcontract-."),a.createElement(le,{title:"CAN I RESELL MY PHALLUS NFT?"},"You can resell it on ",a.createElement("a",{href:"https://opensea.io/"},"https://opensea.io/")),a.createElement(le,{title:"WHERE CAN I FIND YOU?"},a.createElement("a",{href:"https://twitter.com/FAP_Planet"},"Twitter"),a.createElement("br",null),a.createElement("a",{href:"https://instagram.com/familyphallusplanet"},"Instagram"),a.createElement("br",null),a.createElement("a",{href:"https://opensea.io/collection/fapp"},"OpenSea"),a.createElement("br",null),a.createElement("a",{href:"https://familyphallusplanet.com/"},"Website"),a.createElement("br",null),a.createElement("a",{href:"https://bubbleron.com/familyphallusplanet"},"Bubbleron"),a.createElement("br",null),a.createElement("a",{href:"https://www.youtube.com/channel/UCch3zZDZ9ubRlhSFbknDUog"},"Youtube"),a.createElement("br",null),a.createElement("a",{href:"https://discord.gg/zFjWr4wUwH"},"Discord"),a.createElement("br",null))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-15a7ff19b76d33f1ab76.js.map