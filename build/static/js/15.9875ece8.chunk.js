(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[15,23],{458:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var n=c(86),i=c.n(n),s=c(25),a=c(87),o=c(58),l=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(o.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.e)(),Promise.reject(e)}));var r=l,d=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(o.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.e)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return r.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},470:function(e,t,c){"use strict";var n=c(108),i=c(1),s=c(14),a=c(109),o=(c(28),c(144),c(46)),l=c(58),r=c(4);t.a=function(e){var t=e.ProductDetails,c=(e.key,Object(s.g)()),d=Object(o.c)(),u=Object(o.d)((function(e){return e})),j=u.user,b=u.cart,v=null!==b&&void 0!==b&&b.data?null===b||void 0===b?void 0:b.data:null,O=Object(i.useState)(!1),m=Object(n.a)(O,2),h=m[0],p=(m[1],Object(i.useState)(!1)),g=Object(n.a)(p,2),x=(g[0],g[1]),f=Object(i.useState)(!1),N=Object(n.a)(f,2),_=N[0];N[1];Object(i.useEffect)((function(){if(j){var e,c=null===v||void 0===v||null===(e=v.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));x(!!c)}}),[v]),Object(i.useEffect)((function(){null!==j&&void 0!==j&&j.login&&_&&d(Object(l.b)())}),[_]);return Object(r.jsxs)("div",{class:"product text-center product-with-qty cursor-pointer",style:{cursor:"pointer"},onClick:function(){null!==t&&void 0!==t&&t.isFree?c.push("/product/free/".concat(null===t||void 0===t?void 0:t.slug)):c.push("/product/".concat(null===t||void 0===t?void 0:t.slug))},children:[Object(r.jsxs)("figure",{class:"product-media",children:[null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t.slug),children:Object(r.jsx)("img",{src:"".concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}):Object(r.jsx)(a.b,{to:"/product/".concat(null===t||void 0===t?void 0:t.slug),children:Object(r.jsx)("img",{src:"".concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}),(null===h||void 0===h?void 0:h.discount)>0&&Object(r.jsx)("div",{class:"product-label-group",children:Object(r.jsxs)("label",{class:"product-label label-sale",children:[null===h||void 0===h?void 0:h.discount,"% Off"]})})]}),Object(r.jsxs)("div",{class:"product-details",children:[Object(r.jsx)("h3",{class:"product-name",children:null===t||void 0===t?void 0:t.name}),Object(r.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(r.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(r.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(r.jsx)("div",{class:"ratings-container",children:Object(r.jsxs)("div",{class:"ratings-full",children:[Object(r.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(r.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(r.jsx)("div",{class:"product-action",children:null!==j&&void 0!==j&&j.login?null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(a.b,{to:"/product/free/details/".concat(null===t||void 0===t?void 0:t.slug),class:"btn-product btn-cart ls-l",children:"Add to Bag"}):Object(r.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){c.push("/product/free/details/".concat(null===t||void 0===t?void 0:t.slug))},children:[Object(r.jsx)("i",{class:"d-icon-bag"}),Object(r.jsx)("span",{children:"Add to Bag"})]}):null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(a.b,{to:"/product/free/details/".concat(null===t||void 0===t?void 0:t.slug),class:"btn-product btn-cart ls-l",children:"Add to Bag"}):Object(r.jsxs)(a.b,{to:"/login?redirect=".concat("https://demo.livenscience.com","/product/details/").concat(null===t||void 0===t?void 0:t.slug),class:"btn-product btn-cart ls-l",children:[" ","Add to Bag"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},510:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_1.e9982c06.jpg"},511:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_2.1f3d3bc0.jpg"},512:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_3.8f7cbdb9.jpg"},513:function(e,t,c){"use strict";c.p},514:function(e,t,c){"use strict";var n=c(108),i=c(1),s=(c(515),c(4));t.a=function(e){var t=e.content,c=Object(i.useState)(!1),a=Object(n.a)(c,2),o=a[0],l=a[1];return Object(s.jsxs)("li",{className:"accordion-item",children:[Object(s.jsxs)("div",{className:"accordion-toggle",onClick:function(){return l(!o)},children:[Object(s.jsx)("h3",{children:null===t||void 0===t?void 0:t.title}),Object(s.jsx)("span",{children:o?"-":"+"})]}),o&&Object(s.jsx)("div",{className:"accordion-content",children:null===t||void 0===t?void 0:t.description})]})}},515:function(e,t,c){},548:function(e,t,c){},549:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=function(e){return new URLSearchParams(e)}},557:function(e,t,c){"use strict";var n=c(142),i=c(1),s=c(453),a=c.n(s),o=c(484),l="...",r=function(e,t){var c=t-e+1;return Array.from({length:c},(function(t,c){return c+e}))},d=(c(548),c(4));t.a=function(e){var t=e.onPageChange,c=e.totalCount,s=e.siblingCount,u=void 0===s?1:s,j=e.currentPage,b=e.pageSize,v=e.className,O=function(e){var t=e.totalCount,c=e.pageSize,n=e.siblingCount,s=void 0===n?1:n,a=e.currentPage;return Object(i.useMemo)((function(){var e=Math.ceil(t/c);if(s+5>=e)return r(1,e);var n=Math.max(a-s,1),i=Math.min(a+s,e),d=n>2,u=i<e-2,j=1,b=e;if(!d&&u){var v=r(1,3+2*s);return[].concat(Object(o.a)(v),[l,e])}if(d&&!u){var O=r(e-(3+2*s)+1,e);return[j,l].concat(Object(o.a)(O))}if(d&&u){var m=r(n,i);return[j,l].concat(Object(o.a)(m),[l,b])}}),[t,c,s,a])}({currentPage:j,totalCount:c,siblingCount:u,pageSize:b});if(0===j||O.length<2)return null;var m=O[O.length-1];return Object(d.jsxs)("div",{className:a()("pagination-container",Object(n.a)({},v,v)),children:[Object(d.jsx)("div",{className:a()("pagination-item",{disabled:1===j}),onClick:function(){t(j-1)},children:Object(d.jsx)("div",{className:"arrow left"})}),O.map((function(e){return e===l?Object(d.jsx)("div",{className:"pagination-item dots",children:"\u2026"}):Object(d.jsx)("div",{className:a()("pagination-item",{selected:e===j}),onClick:function(){return t(e)},children:e},e)})),Object(d.jsx)("div",{className:a()("pagination-item",{disabled:j===m}),onClick:function(){t(j+1)},children:Object(d.jsx)("div",{className:"arrow right"})})]})}},622:function(e,t,c){"use strict";c.p},623:function(e,t,c){"use strict";c.p},624:function(e,t,c){"use strict";c.p},625:function(e,t,c){"use strict";c.p},626:function(e,t,c){"use strict";c.p},627:function(e,t,c){"use strict";c.p},675:function(e,t,c){"use strict";c.r(t);var n=c(7),i=c(20),s=c(108),a=c(1),o=c(46),l=c(14),r=c(25),d=c(58),u=(c(458),c(145)),j=c(457),b=c(463),v=c.n(b),O=(c(667),c.p,c.p,c.p,c.p,c(510),c(511),c(512),c(513),c(514)),m=c(470),h=(c(668),c(4)),p=function(e){var t,c=e.categoryDetails,n=e.categoryProdDetails,i=null===c||void 0===c||null===(t=c.description)||void 0===t?void 0:t.reduce((function(e,t,c){var n=Math.floor(c/2);return e[n]||(e[n]=[]),e[n].push(t),e}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{className:"customer-section pb-10",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row align-items-center",children:Object(h.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(h.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:null===c||void 0===c?void 0:c.subCategoryName}),Object(h.jsx)("div",{className:"section-desc text-grey",children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.categoryDescription}})})]})})})}),Object(h.jsx)("section",{className:"overlay_product",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"code-template",children:i&&Object.keys(i).map((function(e){var t;return Object(h.jsx)("div",{className:"row justify-content-center",children:null===(t=i[e])||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("div",{className:"col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last ",children:Object(h.jsxs)("div",{className:"banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible",children:[Object(h.jsx)("figure",{children:Object(h.jsx)("img",{src:"".concat(null===e||void 0===e?void 0:e.image),alt:"banner",width:"350",height:"177",style:{backgroundColor:"#1e1e1e",height:"35vh",borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"}})}),Object(h.jsx)("div",{className:"banner-content d-flex align-items-center w-100 text-left",style:{padding:"20px"},children:Object(h.jsxs)("div",{className:"mr-auto mb-4 mb-md-0",children:[Object(h.jsxs)("h4",{className:"banner-subtitle text-white",children:[" ",null===e||void 0===e?void 0:e.title]}),Object(h.jsx)("p",{className:"text-white",children:null===e||void 0===e?void 0:e.description})]})})]})})}))})}))})})}),Object(h.jsx)("section",{className:"pt-3 mt-2 mb-2 pb-10 need_sec cat_new_carosal",id:"product_category_page_section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"title-echo mb-1",children:Object(h.jsx)("span",{children:"Available Products"})}),Object(h.jsx)("p",{children:null===c||void 0===c?void 0:c.productDescription}),(null===n||void 0===n?void 0:n.length)>0?Object(h.jsx)(v.a,{className:"owl-carousel owl-loaded owl-drag",margin:10,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",mouseDrag:!0,stagePadding:0,responsive:{0:{items:1},768:{items:3},800:{items:4}},autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===n||void 0===n?void 0:n.length)>0)return Object(h.jsx)(h.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)(m.a,{ProductDetails:e},t)}))})}()},"carousel_1"):Object(h.jsx)("div",{className:"no-product d-flex justify-content-center my-7",children:Object(h.jsx)("h3",{className:"font-weight-bold",children:"No Product Found!"})})]})}),Object(h.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",id:"distinct_table",children:Object(h.jsxs)("div",{className:"container p-0",children:[Object(h.jsx)("h2",{className:"title-echo mb-1",children:Object(h.jsx)("span",{children:"Why we are Distinct from other?"})}),Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("div",{className:"table-responsive table-bordered",children:Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:function(){var e,t;if((null===c||void 0===c||null===(e=c.advantage)||void 0===e?void 0:e.length)>0)return Object(h.jsx)(h.Fragment,{children:null===c||void 0===c||null===(t=c.advantage)||void 0===t?void 0:t.map((function(e,t){return Object(h.jsx)("tr",{className:"".concat(0==t?"base-bg":""),children:Object(h.jsxs)("td",{children:[Object(h.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})})})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("div",{className:"table-responsive table-bordered",children:Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:function(){var e,t;if((null===c||void 0===c||null===(e=c.ordinaryProducts)||void 0===e?void 0:e.length)>0)return Object(h.jsx)(h.Fragment,{children:null===c||void 0===c||null===(t=c.ordinaryProducts)||void 0===t?void 0:t.map((function(e,t){return Object(h.jsx)("tr",{className:"".concat(0==t?"red-bg":""),children:Object(h.jsxs)("td",{children:[Object(h.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})})})})]})]})}),Object(h.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",children:Object(h.jsxs)("div",{className:"container p-0",children:[Object(h.jsx)("h2",{className:"title-echo mb-1",children:Object(h.jsx)("span",{children:"Frequently Asked Question?"})}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-sm-9 offset-sm-1",children:Object(h.jsx)("div",{className:"code-template",children:Object(h.jsx)("div",{className:"accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content",children:function(){var e,t;if((null===c||void 0===c||null===(e=c.questions)||void 0===e?void 0:e.length)>0)return Object(h.jsx)(h.Fragment,{children:null===c||void 0===c||null===(t=c.questions)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(O.a,{content:e})}))})}()})})})})]})})]})},g=c(28),x=c(459);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(o.c)(),b=Object(u.a)(),v=b.get("fsz"),O=b.get("token"),m=Object(l.i)().params.categoryid,f=Object(a.useState)({}),N=Object(s.a)(f,2),_=N[0],P=N[1],y=Object(a.useState)({}),w=Object(s.a)(y,2),S=w[0],A=w[1];Object(a.useEffect)((function(){v&&(sessionStorage.setItem("fsz",v),Object(r.h)("source",v)),O&&(Object(r.g)(O),t.replace(e),c(Object(d.c)(O)))}),[]),Object(a.useEffect)((function(){C()}),[]),Object(a.useEffect)((function(){C()}),[m]);var C=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c,i,s,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.C)(m);case 2:a=e.sent,P(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.subCategories),A(null===a||void 0===a||null===(i=a.data)||void 0===i||null===(s=i.responseData)||void 0===s?void 0:s.Products),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{title:"liven Science",description:"Natural Medicine. Sign up now!"}),Object(h.jsx)("main",{className:"main single-product",children:Object(h.jsx)("div",{className:"page-content",children:Object(h.jsxs)("div",{className:"container-fluid p-0",children:[Object(h.jsx)("div",{className:"page-header pl-4 pr-4",style:{backgroundImage:"url(".concat(null===_||void 0===_?void 0:_.bannerImage,")")},children:Object(h.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize"})}),Object(h.jsx)("div",{className:"page-content mt-10 pt-10",children:Object(h.jsx)(p,{categoryDetails:_,categoryProdDetails:S})})]})})}),Object(h.jsx)(x.a,{})]})}},725:function(e,t,c){},779:function(e,t,c){"use strict";c.r(t);var n=c(7),i=c(20),s=c(108),a=c(1),o=c(457),l=c(459),r=(c(463),c(14)),d=c(570),u=(c(622),c(623),c(624),c(625),c(626),c(627),c(109)),j=c(28),b=c(557),v=(c(725),c(485)),O=c.n(v),m=(c(675),c(549)),h=c(4),p=function(){var e=Object(r.g)(),t=(Object(m.a)(),Object(a.useState)([])),c=Object(s.a)(t,2),o=c[0],l=c[1],v=Object(a.useState)(0),p=Object(s.a)(v,2),g=p[0],x=p[1],f=Object(a.useState)(10),N=Object(s.a)(f,2),_=N[0],P=N[1],y=Object(a.useState)(1),w=Object(s.a)(y,2),S=w[0],A=w[1],C=Object(a.useState)(!1),E=Object(s.a)(C,2),R=(E[0],E[1]),D=Object(a.useState)(1),L=Object(s.a)(D,2),T=(L[0],L[1]),k=Object(a.useState)([]),M=Object(s.a)(k,2),B=M[0],I=M[1],F=Object(a.useState)([]),U=Object(s.a)(F,2),z=U[0],H=U[1],K=window.location.search.substring(1).split("=")[1],Y=Object(a.useState)(!1),W=Object(s.a)(Y,2),q=W[0],V=W[1];Object(a.useEffect)(Object(i.a)(Object(n.a)().mark((function e(){var t,c,i,s,a,o,r,d,u,b,v,O,m,h,p,g,f,N,_,y,w,S,C,E;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,Object(j.l)(1);case 3:C=e.sent,E=null===C||void 0===C||null===(t=C.data)||void 0===t||null===(c=t.responseData)||void 0===c||null===(i=c.blogs)||void 0===i?void 0:i.docs,K&&(E=E.filter((function(e){return(null===e||void 0===e?void 0:e.categoryId)==K}))),l(E),x(null===C||void 0===C||null===(s=C.data)||void 0===s||null===(a=s.responseData)||void 0===a||null===(o=a.blogs)||void 0===o?void 0:o.totalDocs),P(null===C||void 0===C||null===(r=C.data)||void 0===r||null===(d=r.responseData)||void 0===d||null===(u=d.blogs)||void 0===u?void 0:u.limit),A(null===C||void 0===C||null===(b=C.data)||void 0===b||null===(v=b.responseData)||void 0===v||null===(O=v.blogs)||void 0===O?void 0:O.page),R(null===C||void 0===C||null===(m=C.data)||void 0===m||null===(h=m.responseData)||void 0===h||null===(p=h.blogs)||void 0===p?void 0:p.hasNextPage),T(null===C||void 0===C||null===(g=C.data)||void 0===g||null===(f=g.responseData)||void 0===f||null===(N=f.blogs)||void 0===N?void 0:N.totalPages),I(null===C||void 0===C||null===(_=C.data)||void 0===_||null===(y=_.responseData)||void 0===y?void 0:y.categoryBlogs),H(null===C||void 0===C||null===(w=C.data)||void 0===w||null===(S=w.responseData)||void 0===S?void 0:S.recentBlogs),V(!1);case 15:case"end":return e.stop()}}),e)}))),[K]);var G=function(){var e=Object(i.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.l)(S);case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"page-content pb-10 mb-10",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("ul",{className:"nav-filters filter-underline blog-filters justify-content-center","data-target":".posts"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm-9",children:[Object(h.jsx)("div",{className:"posts grid post-grid row","data-grid-options":"{ 'layoutMode': 'fitRows' }",children:q?"Loading....":(null===o||void 0===o?void 0:o.length)>0?(null===o||void 0===o?void 0:o.length)>0&&(null===o||void 0===o?void 0:o.map((function(e,t){return Object(h.jsxs)(u.b,{to:"/blogs/".concat(null===e||void 0===e?void 0:e.slug),className:"grid-item col-sm-6 col-lg-4 lifestyle shopping winter-sale",children:[" ",Object(h.jsx)("div",{children:Object(h.jsxs)("article",{className:"post",children:[Object(h.jsx)("figure",{className:"post-media",children:Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("img",{src:"".concat(null===e||void 0===e?void 0:e.image),width:"380",height:"280",alt:"post"})})}),Object(h.jsxs)("div",{className:"post-details",children:[Object(h.jsxs)("div",{className:"post-meta",children:["on"," ",Object(h.jsx)("a",{href:"blog-grid-3col.html#",className:"post-date",children:O()(null===e||void 0===e?void 0:e.createdAt).format("MMM DD,YYYY")}),"|"," "]}),Object(h.jsx)("h4",{className:"post-title",children:Object(h.jsx)("a",{href:"#",children:null===e||void 0===e?void 0:e.title})}),Object(h.jsxs)("p",{className:"post-content",children:[" ",Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.content}})]}),Object(h.jsxs)(u.b,{to:"/blogs/".concat(null===e||void 0===e?void 0:e.slug),className:"btn btn-link btn-underline btn-primary",children:["Read more",Object(h.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})})," "]})}))):"No Found Blog"}),(null===o||void 0===o?void 0:o.length)>0?Object(h.jsx)("div",{className:"user-profile-table-pagination",children:Object(h.jsx)(b.a,{className:"pagination-bar",currentPage:S,totalCount:g,pageSize:_,onPageChange:function(e){return G(e)}})}):""]}),Object(h.jsx)("div",{className:"col-sm-3",children:Object(h.jsxs)("div",{className:"blog-category-section",children:[Object(h.jsxs)("div",{className:"inner-blog-one",children:[Object(h.jsx)("div",{className:"blog-block",children:Object(h.jsx)("div",{className:"blog-sub-heading",children:Object(h.jsx)("h2",{children:"Recent Post"})})}),Object(h.jsx)("div",{className:"search-section",children:q?"Loading....":null===z||void 0===z?void 0:z.map((function(e){return Object(h.jsx)(u.b,{to:"/blogs/".concat(null===e||void 0===e?void 0:e.slug),children:Object(h.jsxs)("div",{className:"search-block",children:[Object(h.jsx)("div",{className:"search-img",children:Object(h.jsx)("img",{src:"".concat(null===e||void 0===e?void 0:e.image),alt:""})}),Object(h.jsxs)("div",{className:"search-para",children:[Object(h.jsx)("a",{children:null===e||void 0===e?void 0:e.title}),Object(h.jsxs)("span",{className:"",children:[" ",O()(null===e||void 0===e?void 0:e.createdAt).format("MMM DD,YYYY")]})]})]})})}))})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"inner-blog-one",children:[Object(h.jsx)("div",{className:"blog-block",children:Object(h.jsx)("div",{className:"blog-sub-heading",children:Object(h.jsx)("h2",{children:"Blog Categories"})})}),Object(h.jsx)("div",{className:"search-section-blog",children:Object(h.jsx)(d.a,{defaultActiveKey:"/home",as:"ul",children:q?"Loading...":null===B||void 0===B?void 0:B.map((function(t){return Object(h.jsx)(d.a.Item,{as:"li",children:Object(h.jsxs)(d.a.Link,{onClick:function(){return e.push("?id=".concat(null===t||void 0===t?void 0:t._id))},children:[null===t||void 0===t?void 0:t.name," ",(null===t||void 0===t?void 0:t.count)>0?"(".concat(null===t||void 0===t?void 0:t.count,")"):""]})})}))})})]}),Object(h.jsx)("br",{})]})})]})]})})})};t.default=function(){var e,t=Object(a.useState)({}),c=Object(s.a)(t,2),r=c[0],d=c[1];Object(a.useEffect)(Object(i.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u();case 1:case"end":return e.stop()}}),e)}))),[]);var u=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.P)();case 3:c=e.sent,d(null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.responseData),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{title:"liven Science",description:"Natural Medicine. Sign up now!"}),Object(h.jsx)("main",{className:"main single-product",children:Object(h.jsx)("div",{className:"page-content",children:Object(h.jsxs)("div",{className:"container-fluid p-0",children:[Object(h.jsx)("div",{className:"page-header pl-4 pr-4 blog-title-banner",style:{backgroundImage:"url(".concat(null===r||void 0===r||null===(e=r.site)||void 0===e?void 0:e.blogImage,")")},children:Object(h.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Blog"})}),Object(h.jsx)(p,{})]})})}),Object(h.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=15.9875ece8.chunk.js.map