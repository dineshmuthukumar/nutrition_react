(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[5],{460:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var i=c(86),n=c.n(i),s=c(25),o=c(87),a=c(58),l=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||o.a.dispatch(Object(a.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.e)(),Promise.reject(e)}));var d=l,r=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});r.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),r.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||o.a.dispatch(Object(a.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.e)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return d.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},473:function(e,t,c){"use strict";var i=c(108),n=c(1),s=c(14),o=c(109),a=(c(28),c(144)),l=c(46),d=c(58),r=c(4);t.a=function(e){var t=e.ProductDetails,c=(e.key,Object(s.g)()),u=Object(l.c)(),j=Object(l.d)((function(e){return e})),b=j.user,v=j.cart,p=null!==v&&void 0!==v&&v.data?null===v||void 0===v?void 0:v.data:null,m=Object(n.useState)(!1),O=Object(i.a)(m,2),h=O[0],x=(O[1],Object(n.useState)(!1)),g=Object(i.a)(x,2),f=g[0],_=g[1],N=Object(n.useState)(!1),A=Object(i.a)(N,2),P=A[0],E=A[1];Object(n.useEffect)((function(){if(b){var e,c=null===p||void 0===p||null===(e=p.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));_(!!c)}}),[p]),Object(n.useEffect)((function(){console.log(P,"status"),null!==b&&void 0!==b&&b.login&&P&&u(Object(d.b)())}),[P]);return Object(r.jsxs)("div",{class:"product text-center product-with-qty cursor-pointer",style:{cursor:"pointer"},onClick:function(){null!==t&&void 0!==t&&t.isFree?c.push("/product/free/details/".concat(null===t||void 0===t?void 0:t.slug)):c.push("/product/details/".concat(null===t||void 0===t?void 0:t.slug))},children:[Object(r.jsxs)("figure",{class:"product-media",children:[null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(o.b,{to:"/product/free/details/".concat(null===t||void 0===t?void 0:t.slug),children:Object(r.jsx)("img",{src:"".concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}):Object(r.jsx)(o.b,{to:"/product/details/".concat(null===t||void 0===t?void 0:t.slug),children:Object(r.jsx)("img",{src:"".concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}),(null===h||void 0===h?void 0:h.discount)>0&&Object(r.jsx)("div",{class:"product-label-group",children:Object(r.jsxs)("label",{class:"product-label label-sale",children:[null===h||void 0===h?void 0:h.discount,"% Off"]})})]}),Object(r.jsxs)("div",{class:"product-details",children:[Object(r.jsx)("h3",{class:"product-name",children:null===t||void 0===t?void 0:t.name}),Object(r.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(r.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(r.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(r.jsx)("div",{class:"ratings-container",children:Object(r.jsxs)("div",{class:"ratings-full",children:[Object(r.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(r.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(r.jsx)("div",{class:"product-action",children:null!==b&&void 0!==b&&b.login?null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(o.b,{to:"/product/free/details/".concat(null===t||void 0===t?void 0:t.slug),class:"btn-product btn-cart ls-l",children:"Add to Bag"}):Object(r.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){var e;f||u(Object(a.a)(t._id,"BASIC",null===t||void 0===t||null===(e=t.productType[0])||void 0===e?void 0:e.saleAmount,E))},children:[Object(r.jsx)("i",{class:"d-icon-bag"}),Object(r.jsx)("span",{children:"Add to Bag"})]}):null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(o.b,{to:"/product/free/details/".concat(null===t||void 0===t?void 0:t.slug),class:"btn-product btn-cart ls-l",children:"Add to Bag"}):Object(r.jsxs)(o.b,{to:"/login?redirect=".concat("https://demo.livenscience.com","/product/details/").concat(null===t||void 0===t?void 0:t.slug),class:"btn-product btn-cart ls-l",children:[" ","Add to Bag"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},542:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_1.e9982c06.jpg"},543:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_2.1f3d3bc0.jpg"},544:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_3.8f7cbdb9.jpg"},545:function(e,t,c){"use strict";c.p},546:function(e,t,c){"use strict";var i=c(108),n=c(1),s=(c(547),c(4));t.a=function(e){var t=e.content,c=Object(n.useState)(!1),o=Object(i.a)(c,2),a=o[0],l=o[1];return Object(s.jsxs)("li",{className:"accordion-item",children:[Object(s.jsxs)("div",{className:"accordion-toggle",onClick:function(){return l(!a)},children:[Object(s.jsx)("h3",{children:null===t||void 0===t?void 0:t.title}),Object(s.jsx)("span",{children:a?"-":"+"})]}),a&&Object(s.jsx)("div",{className:"accordion-content",children:null===t||void 0===t?void 0:t.description})]})}},547:function(e,t,c){},719:function(e,t,c){},741:function(e,t,c){"use strict";c.r(t);var i=c(7),n=c(20),s=c(108),o=c(1),a=c(46),l=c(14),d=c(25),r=c(58),u=(c(460),c(146)),j=c(458),b=c(465),v=c.n(b),p=(c(719),c.p,c.p,c.p,c.p,c(542),c(543),c(544),c(545),c(546)),m=c(473),O=c(4),h=function(e){var t,c=e.categoryDetails,i=e.categoryProdDetails,n=null===c||void 0===c||null===(t=c.description)||void 0===t?void 0:t.reduce((function(e,t,c){var i=Math.floor(c/2);return e[i]||(e[i]=[]),e[i].push(t),e}),[]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("section",{className:"customer-section pb-10",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row align-items-center",children:Object(O.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(O.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:null===c||void 0===c?void 0:c.subCategoryName}),Object(O.jsx)("div",{className:"section-desc text-grey",children:Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.categoryDescription}})})]})})})}),Object(O.jsx)("section",{className:"overlay_product",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"code-template",children:n&&Object.keys(n).map((function(e){var t;return Object(O.jsx)("div",{className:"row justify-content-center",children:null===(t=n[e])||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("div",{className:"col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last ",children:Object(O.jsxs)("div",{className:"banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:"".concat(null===e||void 0===e?void 0:e.image),alt:"banner",width:"350",height:"177",style:{backgroundColor:"#1e1e1e",height:"35vh"}})}),Object(O.jsx)("div",{className:"banner-content d-flex align-items-center w-100 text-left",style:{padding:"20px"},children:Object(O.jsxs)("div",{className:"mr-auto mb-4 mb-md-0",children:[Object(O.jsxs)("h4",{className:"banner-subtitle text-white",children:[" ",null===e||void 0===e?void 0:e.title]}),Object(O.jsx)("p",{className:"text-white",children:null===e||void 0===e?void 0:e.description})]})})]})})}))})}))})})}),Object(O.jsx)("section",{className:"pt-3 mt-2 mb-2 pb-10 need_sec cat_new_carosal",id:"product_category_page_section",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{className:"title-echo mb-1",children:Object(O.jsx)("span",{children:"Available Products"})}),Object(O.jsx)("p",{children:null===c||void 0===c?void 0:c.productDescription}),(null===i||void 0===i?void 0:i.length)>0?Object(O.jsx)(v.a,{className:"owl-carousel owl-loaded owl-drag",margin:10,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",mouseDrag:!0,stagePadding:0,responsive:{0:{items:1},768:{items:3},800:{items:4}},autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===i||void 0===i?void 0:i.length)>0)return Object(O.jsx)(O.Fragment,{children:null===i||void 0===i?void 0:i.map((function(e,t){return Object(O.jsx)(m.a,{ProductDetails:e},t)}))})}()},"carousel_1"):Object(O.jsx)("div",{className:"no-product d-flex justify-content-center my-7",children:Object(O.jsx)("h3",{className:"font-weight-bold",children:"No Product Found!"})})]})}),Object(O.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",id:"distinct_table",children:Object(O.jsxs)("div",{className:"container p-0",children:[Object(O.jsx)("h2",{className:"title-echo mb-1",children:Object(O.jsx)("span",{children:"Why we are Distinct from other?"})}),Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsx)("div",{className:"col-sm-6",children:Object(O.jsx)("div",{className:"table-responsive table-bordered",children:Object(O.jsx)("table",{className:"table",children:Object(O.jsx)("tbody",{children:function(){var e,t;if((null===c||void 0===c||null===(e=c.advantage)||void 0===e?void 0:e.length)>0)return Object(O.jsx)(O.Fragment,{children:null===c||void 0===c||null===(t=c.advantage)||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)("tr",{className:"".concat(0==t?"base-bg":""),children:Object(O.jsxs)("td",{children:[Object(O.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})})})}),Object(O.jsx)("div",{className:"col-sm-6",children:Object(O.jsx)("div",{className:"table-responsive table-bordered",children:Object(O.jsx)("table",{className:"table",children:Object(O.jsx)("tbody",{children:function(){var e,t;if((null===c||void 0===c||null===(e=c.ordinaryProducts)||void 0===e?void 0:e.length)>0)return Object(O.jsx)(O.Fragment,{children:null===c||void 0===c||null===(t=c.ordinaryProducts)||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)("tr",{className:"".concat(0==t?"red-bg":""),children:Object(O.jsxs)("td",{children:[Object(O.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})})})})]})]})}),Object(O.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",children:Object(O.jsxs)("div",{className:"container p-0",children:[Object(O.jsx)("h2",{className:"title-echo mb-1",children:Object(O.jsx)("span",{children:"Frequently Asked Question?"})}),Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-sm-9 offset-sm-1",children:Object(O.jsx)("div",{className:"code-template",children:Object(O.jsx)("div",{className:"accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content",children:function(){var e,t;if((null===c||void 0===c||null===(e=c.questions)||void 0===e?void 0:e.length)>0)return Object(O.jsx)(O.Fragment,{children:null===c||void 0===c||null===(t=c.questions)||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(p.a,{content:e})}))})}()})})})})]})})]})},x=c(28),g=c(459);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(a.c)(),b=Object(u.a)(),v=b.get("fsz"),p=b.get("token"),m=Object(l.i)().params.categoryid,f=Object(o.useState)({}),_=Object(s.a)(f,2),N=_[0],A=_[1],P=Object(o.useState)({}),E=Object(s.a)(P,2),y=E[0],R=E[1];Object(o.useEffect)((function(){v&&(sessionStorage.setItem("fsz",v),Object(d.h)("source",v)),p&&(Object(d.g)(p),t.replace(e),c(Object(r.c)(p)))}),[]),Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){S()}),[m]);var S=function(){var e=Object(n.a)(Object(i.a)().mark((function e(){var t,c,n,s,o;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.C)(m);case 2:o=e.sent,A(null===o||void 0===o||null===(t=o.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.subCategories),R(null===o||void 0===o||null===(n=o.data)||void 0===n||null===(s=n.responseData)||void 0===s?void 0:s.Products),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{title:"liven Science",description:"Natural Medicine. Sign up now!"}),Object(O.jsx)("main",{className:"main single-product",children:Object(O.jsx)("div",{className:"page-content",children:Object(O.jsxs)("div",{className:"container-fluid p-0",children:[Object(O.jsx)("div",{className:"page-header pl-4 pr-4",style:{backgroundImage:"url(".concat(null===N||void 0===N?void 0:N.bannerImage,")")},children:Object(O.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize"})}),Object(O.jsx)("div",{className:"page-content mt-10 pt-10",children:Object(O.jsx)(h,{categoryDetails:N,categoryProdDetails:y})})]})})}),Object(O.jsx)(g.a,{})]})}}}]);
//# sourceMappingURL=5.8c52b341.chunk.js.map