(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[19],{495:function(e,t,a){"use strict";var c=a(1),n=function(){return(n=Object.assign||function(e){for(var t,a=1,c=arguments.length;a<c;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var r=function(e){var t=e.animate,a=e.backgroundColor,r=e.backgroundOpacity,s=e.baseUrl,l=e.children,i=e.foregroundColor,o=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,j=e.interval,b=e.rtl,O=e.speed,v=e.style,m=e.title,x=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),h=d||Math.random().toString(36).substring(6),f=h+"-diff",p=h+"-animated-diff",g=h+"-aria",y=b?{transform:"scaleX(-1)"}:null,N="0; "+j+"; 1",w=O+"s";return Object(c.createElement)("svg",n({"aria-labelledby":g,role:"img",style:n(n({},v),y)},x),m?Object(c.createElement)("title",{id:g},m):null,Object(c.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+f+")",style:{fill:"url("+s+"#"+p+")"}}),Object(c.createElement)("defs",null,Object(c.createElement)("clipPath",{id:f},l),Object(c.createElement)("linearGradient",{id:p},Object(c.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:r},t&&Object(c.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:N,dur:w,repeatCount:"indefinite"})),Object(c.createElement)("stop",{offset:"50%",stopColor:i,stopOpacity:o},t&&Object(c.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:N,dur:w,repeatCount:"indefinite"})),Object(c.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:r},t&&Object(c.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:N,dur:w,repeatCount:"indefinite"})))))};r.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var s=function(e){return e.children?Object(c.createElement)(r,n({},e)):Object(c.createElement)(l,n({},e))},l=function(e){return Object(c.createElement)(s,n({viewBox:"0 0 476 124"},e),Object(c.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(c.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=s},834:function(e,t,a){},835:function(e,t,a){},897:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(34),r=a.n(n),s=a(55),l=a(70),i=a(1),o=a(13),u=a(46),d=a(493),j=a(494),b=a(480),O=a.p+"static/media/user-banner.ed8fe8ee.jpg",v=(a(834),function(e){var t,a,n,r,s,l,i,o,d,j,v,m,x,h,f,p=e.userDetail,g=Object(u.d)((function(e){return e.user.data})).user;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("article",{className:"user-hero-section",style:{backgroundImage:'url("'.concat(!(null===p||void 0===p||null===(t=p.users[0])||void 0===t?void 0:t.private)&&(null===p||void 0===p||null===(a=p.users[0])||void 0===a?void 0:a.banner_url)?null===p||void 0===p||null===(n=p.users[0])||void 0===n?void 0:n.banner_url:(null===g||void 0===g?void 0:g.slug)===(null===p||void 0===p||null===(r=p.users[0])||void 0===r?void 0:r.slug)&&(null===p||void 0===p||null===(s=p.users[0])||void 0===s?void 0:s.banner_url)?null===p||void 0===p||null===(l=p.users[0])||void 0===l?void 0:l.banner_url:O,'")')}}),p&&Object(c.jsxs)("article",{className:"user-info-box",children:[Object(c.jsx)("img",{className:"user-info-image",src:!(null===p||void 0===p||null===(i=p.users[0])||void 0===i?void 0:i.private)&&(null===p||void 0===p||null===(o=p.users[0])||void 0===o?void 0:o.avatar_url)?null===p||void 0===p||null===(d=p.users[0])||void 0===d?void 0:d.avatar_url:(null===g||void 0===g?void 0:g.slug)===(null===p||void 0===p||null===(j=p.users[0])||void 0===j?void 0:j.slug)&&(null===p||void 0===p||null===(v=p.users[0])||void 0===v?void 0:v.avatar_url)?null===p||void 0===p||null===(m=p.users[0])||void 0===m?void 0:m.avatar_url:b.a}),Object(c.jsx)("div",{children:(null===p||void 0===p||null===(x=p.users[0])||void 0===x?void 0:x.slug)&&Object(c.jsx)("h6",{className:"user-info-subname",children:(null===g||void 0===g?void 0:g.slug)===(null===p||void 0===p||null===(h=p.users[0])||void 0===h?void 0:h.slug)?"@".concat(null===g||void 0===g?void 0:g.first_name).concat(null===g||void 0===g?void 0:g.last_name):null===p||void 0===p||null===(f=p.users[0])||void 0===f?void 0:f.user_name})})]})]})}),m=a(15),x=a(487),h=a(495),f=a(483),p=a(571),g=(a(835),function(e){return Object(c.jsxs)(h.a,Object(m.a)(Object(m.a)({viewBox:"0 0 900 300",width:"100%",height:"100%",backgroundColor:"#f5f5f5",foregroundColor:"#dbdbdb",className:"mt-1"},e),{},{children:[Object(c.jsx)("rect",{x:"0",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(c.jsx)("rect",{x:"228",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(c.jsx)("rect",{x:"456",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(c.jsx)("rect",{x:"684",y:"5",rx:"2",ry:"2",width:"218",height:"280"})]}))}),y=function(e){e.userDetail;var t=Object(o.i)().slug,a=Object(i.useState)("onsale"),n=Object(l.a)(a,2),d=n[0],j=n[1],b=Object(i.useState)(1),O=Object(l.a)(b,2),v=O[0],m=O[1],h=Object(i.useState)(1),y=Object(l.a)(h,2),N=y[0],w=y[1],k=Object(i.useState)(1),E=Object(l.a)(k,2),S=E[0],C=E[1],_=Object(i.useState)(!1),F=Object(l.a)(_,2),L=F[0],P=F[1],T=Object(i.useState)(!1),D=Object(l.a)(T,2),M=D[0],B=D[1],I=Object(i.useState)(!1),R=Object(l.a)(I,2),U=R[0],Y=R[1],q=Object(i.useState)(!1),J=Object(l.a)(q,2),K=J[0],A=J[1],G=Object(i.useState)(!1),X=Object(l.a)(G,2),z=X[0],H=X[1],Q=Object(i.useState)(!1),V=Object(l.a)(Q,2),W=V[0],Z=V[1],$=Object(i.useState)([]),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],ce=Object(i.useState)([]),ne=Object(l.a)(ce,2),re=ne[0],se=ne[1],le=Object(i.useState)([]),ie=Object(l.a)(le,2),oe=ie[0],ue=ie[1],de=Object(i.useState)(0),je=Object(l.a)(de,2),be=je[0],Oe=je[1],ve=Object(i.useState)(0),me=Object(l.a)(ve,2),xe=me[0],he=me[1],fe=Object(i.useState)(0),pe=Object(l.a)(fe,2),ge=pe[0],ye=pe[1],Ne=Object(i.useState)(!1),we=Object(l.a)(Ne,2),ke=we[0],Ee=we[1],Se=Object(i.useState)(!1),Ce=Object(l.a)(Se,2),_e=Ce[0],Fe=Ce[1],Le=Object(i.useState)(!1),Pe=Object(l.a)(Le,2),Te=Pe[0],De=Pe[1],Me=(Object(u.d)((function(e){return e.user.data})).user,function(){var e=Object(s.a)(r.a.mark((function e(a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1===a&&P(!0),A(!0),e.next=5,Object(f.w)({slug:t,page:a});case 5:c=e.sent,ae([].concat(Object(x.a)(te),Object(x.a)(c.data.data.nfts))),he(c.data.data.total_count),Ee(c.data.data.next_page),1===a&&P(!1),A(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),P(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()),Be=function(){var e=Object(s.a)(r.a.mark((function e(a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1===a&&Y(!0),H(!0),e.next=5,Object(f.v)({slug:t,page:a});case 5:c=e.sent,se([].concat(Object(x.a)(re),Object(x.a)(c.data.data.nfts))),Oe(c.data.data.total_count),Fe(c.data.data.next_page),1===a&&Y(!1),H(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),Y(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(s.a)(r.a.mark((function e(a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1===a&&B(!0),Z(!0),e.next=5,Object(f.A)({slug:t,page:a});case 5:c=e.sent,ue([].concat(Object(x.a)(oe),Object(x.a)(c.data.data.nfts))),ye(c.data.data.total_count),De(c.data.data.next_page),1===a&&B(!1),Z(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),B(!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){Ie(S),Me(v),Be(N)}),[]);var Re=function(){ke&&(Me(v+1),m(v+1))},Ue=function(){_e&&(Be(N+1),w(N+1))},Ye=function(){Te&&(Ie(S+1),C(S+1))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"user-details-block",children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-sm-12",children:Object(c.jsx)("div",{className:"user-flexblock",children:Object(c.jsxs)("div",{className:"user-collection-box",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-sm-12",children:Object(c.jsxs)("ul",{className:"nav user-block-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("span",{className:"nav-link ".concat("onsale"===d?"active":""),"aria-current":"page",role:"button",onClick:function(){return j("onsale")},children:["Onsale (",ge||0,")"]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("span",{className:"nav-link ".concat("owned"===d?"active":""),"aria-current":"page",role:"button",onClick:function(){return j("owned")},children:["Owned (",xe||0,")"]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("span",{className:"nav-link ".concat("liked"===d?"active":""),"aria-current":"page",role:"button",onClick:function(){return j("liked")},children:["Favorites (",be||0,")"]})})]})})}),Object(c.jsx)("div",{className:"row",children:"owned"===d?L?Object(c.jsx)(g,{}):te.length>0?Object(c.jsxs)(c.Fragment,{children:[te.map((function(e,t){return Object(c.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-6",children:Object(c.jsx)(p.a,{nft:e,ownedCard:!0},"owned-".concat(t))})})),!L&&K&&Object(c.jsx)(g,{}),ke&&Object(c.jsx)("div",{className:"row mb-5",children:Object(c.jsx)("div",{className:"col-md-12 text-center",children:Object(c.jsx)("button",{className:"load_more",disabled:K,onClick:Re,children:K?"Loading...":"Load More"})})})]}):Object(c.jsx)("div",{className:"col-12 text-center",children:Object(c.jsx)("h3",{className:"my-3",children:"No Owned NFTs Yet!"})}):"liked"===d?U?Object(c.jsx)(g,{}):re.length>0?Object(c.jsxs)(c.Fragment,{children:[re.map((function(e,t){return Object(c.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-6",children:Object(c.jsx)(p.a,{nft:e},"liked-".concat(t))})})),!U&&z&&Object(c.jsx)(g,{}),_e&&Object(c.jsx)("div",{className:"row mb-5",children:Object(c.jsx)("div",{className:"col-md-12 text-center",children:Object(c.jsx)("button",{className:"load_more",disabled:z,onClick:Ue,children:z?"Loading...":"Load More"})})})]}):Object(c.jsx)("div",{className:"col-12 text-center",children:Object(c.jsx)("h3",{className:"my-3",children:"No Favorites Yet!"})}):"onsale"===d?M?Object(c.jsx)(g,{}):oe.length>0?Object(c.jsxs)(c.Fragment,{children:[oe.map((function(e,t){return Object(c.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-6",children:Object(c.jsx)(p.a,{nft:e,onsale:!0},"onsale-".concat(t))})})),!M&&W&&Object(c.jsx)(g,{}),Te&&Object(c.jsx)("div",{className:"row mb-5",children:Object(c.jsx)("div",{className:"col-md-12 text-center",children:Object(c.jsx)("button",{className:"load_more",disabled:W,onClick:Ye,children:W?"Loading...":"Load More"})})})]}):Object(c.jsx)("div",{className:"col-12 text-center",children:Object(c.jsx)("h3",{className:"my-3",children:"No Orders Yet!"})}):void 0})]})})})})})})})};t.default=function(){var e=Object(o.i)().slug,t=Object(i.useState)(!1),a=Object(l.a)(t,2),n=(a[0],a[1]),b=Object(i.useState)({users:[]}),O=Object(l.a)(b,2),m=O[0],x=O[1];Object(u.d)((function(e){return e.user.data})).user;Object(i.useEffect)((function(){document.body.scrollTop=document.documentElement.scrollTop=0,h()}),[]);var h=function(){var t=Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(!0),t.next=4,Object(f.B)({slug:e});case 4:a=t.sent,x(a.data.data),n(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),n(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{bgImage:!0}),Object(c.jsxs)("main",{children:[Object(c.jsx)(v,{userDetail:m}),Object(c.jsx)(y,{userDetail:m})]}),Object(c.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=19.ef83615e.chunk.js.map