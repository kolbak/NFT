"use strict";(self.webpackChunknft=self.webpackChunknft||[]).push([[825],{260:function(e,t,a){a.r(t);var n=a(5861),r=a(7757),s=a.n(r),c=a(7294),l=a(1451),m=a(3751),i=a(5480),u=a(3590);t.default=function(e){var t=e.location,a=(0,c.useState)({attributes:[]}),r=a[0],p=a[1];return(0,c.useEffect)((0,n.Z)(s().mark((function e(){var a,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new URL(t.href).searchParams.get("id"),e.next=4,fetch("https://cockiz-test.ru/api/nft/"+a,{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).opensea="https://testnets.opensea.io/assets/"+u.U+"/"+a,p(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[]),c.createElement(l.Z,null,c.createElement(m.Z,{title:"FAPP"}),c.createElement("div",{className:"gen-wrap char"},c.createElement("h1",{className:"name"},r.name),r.id?c.createElement(c.Fragment,null,c.createElement("img",{className:"avatar",alt:"character image",src:r.image}),c.createElement("a",{href:r.opensea,target:"_blank",className:"OpenSea-link"},"View on OpenSea")):c.createElement(i.Z,{scale:"0.4"}),c.createElement("h2",{className:"detail-header"},"Details"),c.createElement("div",{className:"text"},c.createElement("ul",null,r.id?r.attributes.map((function(e){return c.createElement("li",{className:"detail"},e.trait_type,c.createElement("span",{className:"points"}),c.createElement("span",{className:"value"},e.value))})):c.createElement(i.Z,{scale:"0.4"})))))}}}]);
//# sourceMappingURL=component---src-pages-character-js-ff186252ec4c70892530.js.map