(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[21],{493:function(e,t,r){"use strict";var c=r(1),a=function(){return(a=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,r=e.backgroundColor,n=e.backgroundOpacity,i=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,b=e.uniqueKey,j=e.interval,u=e.rtl,O=e.speed,f=e.style,h=e.title,m=function(e,t){var r={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(r[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(r[c[a]]=e[c[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=b||Math.random().toString(36).substring(6),x=p+"-diff",g=p+"-animated-diff",y=p+"-aria",v=u?{transform:"scaleX(-1)"}:null,w="0; "+j+"; 1",E=O+"s";return Object(c.createElement)("svg",a({"aria-labelledby":y,role:"img",style:a(a({},f),v)},m),h?Object(c.createElement)("title",{id:y},h):null,Object(c.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+x+")",style:{fill:"url("+i+"#"+g+")"}}),Object(c.createElement)("defs",null,Object(c.createElement)("clipPath",{id:x},l),Object(c.createElement)("linearGradient",{id:g},Object(c.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:n},t&&Object(c.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(c.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(c.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(c.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:n},t&&Object(c.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:w,dur:E,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?Object(c.createElement)(n,a({},e)):Object(c.createElement)(l,a({},e))},l=function(e){return Object(c.createElement)(i,a({viewBox:"0 0 476 124"},e),Object(c.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(c.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=i},866:function(e,t,r){},897:function(e,t,r){"use strict";r.r(t);var c=r(3),a=r(1),n=r(495),i=r(496),l=r(15),o=r(34),s=r.n(o),d=r(487),b=r(55),j=r(70),u=r(493),O=r(483),f=r(572),h=r(489),m=(r(866),function(e){return Object(c.jsxs)(u.a,Object(l.a)(Object(l.a)({viewBox:"0 50 900 300",width:"100%",height:"100%",backgroundColor:"#f5f5f5",foregroundColor:"#dbdbdb",className:"mt-1"},e),{},{children:[Object(c.jsx)("rect",{x:"0",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(c.jsx)("rect",{x:"228",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(c.jsx)("rect",{x:"456",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(c.jsx)("rect",{x:"684",y:"5",rx:"2",ry:"2",width:"218",height:"280"})]}))}),p=function(){var e=Object(a.useState)(1),t=Object(j.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)([]),l=Object(j.a)(i,2),o=l[0],u=l[1],p=Object(a.useState)(!1),x=Object(j.a)(p,2),g=x[0],y=x[1],v=Object(a.useState)(!1),w=Object(j.a)(v,2),E=w[0],N=w[1],k=Object(a.useState)(!1),C=Object(j.a)(k,2),S=C[0],P=C[1];Object(a.useEffect)((function(){F(1)}),[]);var F=function(){var e=Object(b.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1===t&&y(!0),P(!0),e.next=5,Object(O.z)(t);case 5:r=e.sent,console.log(r,"response"),u([].concat(Object(d.a)(o),Object(d.a)(r.data.data.orders))),N(r.data.data.next_page),1===t&&y(!1),P(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"explore-nft-section",children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-sm-12",children:[Object(c.jsx)("div",{className:"sec-heading d-flex align-items-center mb-5 explore-heading",children:Object(c.jsx)("div",{className:"flex-heading",children:Object(c.jsx)("span",{className:"title full-width-title",children:"\u2764\ufe0f My Favorites On Sale"})})}),g?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{className:"row",children:[o.length>0?o.map((function(e,t){return Object(c.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6",children:Object(c.jsx)(f.a,{nft:e,image:h.a,favouriteNFTs:!0},t)},"list-nft-".concat(t))})):Object(c.jsx)("div",{className:"col-12 text-center mb-5",children:Object(c.jsx)("h3",{className:"my-3",children:"No Records Found!"})}),!g&&S&&Object(c.jsx)(m,{}),E&&Object(c.jsx)("div",{className:"row mb-5",children:Object(c.jsx)("div",{className:"col-md-12 text-center",children:Object(c.jsx)("button",{className:"load_more",disabled:S,onClick:function(){E&&(n(r+1),F(r+1),n(r+1))},children:S?"Loading...":"Load More"})})})]})]})})})})})};t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n.a,{}),Object(c.jsx)(p,{}),Object(c.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=21.e35be9cf.chunk.js.map