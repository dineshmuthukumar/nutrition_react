(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[17],{455:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var i=c(87),n=c.n(i),s=c(32),a=c(88),o=c(57),l=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(o.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(e)}));var r=l,d=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(o.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return r.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},481:function(e,t,c){"use strict";var i=c(86),n=c(1),s=c(14),a=c(110),o=(c(27),c(144)),l=c(45),r=c(57),d=c(5);t.a=function(e){var t=e.ProductDetails;e.key;console.log(t,"ProductDetails");Object(s.g)();var c=Object(l.c)(),u=Object(l.d)((function(e){return e})),j=u.user,b=u.cart,v=null!==b&&void 0!==b&&b.data?null===b||void 0===b?void 0:b.data:null,m=Object(n.useState)(!1),p=Object(i.a)(m,2),O=p[0],h=(p[1],Object(n.useState)(!1)),x=Object(i.a)(h,2),f=x[0],g=x[1],_=Object(n.useState)(!1),N=Object(i.a)(_,2),A=N[0],P=N[1];return Object(n.useEffect)((function(){if(j){var e,c=null===v||void 0===v||null===(e=v.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));g(!!c)}}),[v]),Object(n.useEffect)((function(){console.log(A,"status"),null!==j&&void 0!==j&&j.login&&A&&c(Object(r.b)())}),[A]),Object(d.jsxs)("div",{class:"product text-center product-with-qty",children:[Object(d.jsxs)("figure",{class:"product-media",children:[null!==t&&void 0!==t&&t.isFree?Object(d.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),children:Object(d.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}):Object(d.jsx)(a.b,{to:"/product/".concat(null===t||void 0===t?void 0:t._id),children:Object(d.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}),(null===O||void 0===O?void 0:O.discount)>0&&Object(d.jsx)("div",{class:"product-label-group",children:Object(d.jsxs)("label",{class:"product-label label-sale",children:[null===O||void 0===O?void 0:O.discount,"% Off"]})})]}),Object(d.jsxs)("div",{class:"product-details",children:[Object(d.jsx)("h3",{class:"product-name",children:Object(d.jsx)("a",{href:"#",children:null===t||void 0===t?void 0:t.name})}),Object(d.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(d.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(d.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(d.jsx)("div",{class:"ratings-container",children:Object(d.jsxs)("div",{class:"ratings-full",children:[Object(d.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(d.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(d.jsx)("div",{class:"product-action",children:null!==j&&void 0!==j&&j.login?null!==t&&void 0!==t&&t.isFree?Object(d.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(d.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){var e;f||c(Object(o.a)(t._id,"BASIC",null===t||void 0===t||null===(e=t.productType[0])||void 0===e?void 0:e.saleAmount,P))},children:[Object(d.jsx)("i",{class:"d-icon-bag"}),Object(d.jsx)("span",{children:"Add to Bag"})]}):null!==t&&void 0!==t&&t.isFree?Object(d.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(d.jsxs)(a.b,{to:"/Login",class:"btn-product btn-cart ls-l",children:[" ","Cart"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},505:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_1.e9982c06.jpg"},506:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_2.1f3d3bc0.jpg"},507:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_3.8f7cbdb9.jpg"},508:function(e,t,c){"use strict";c.p},510:function(e,t,c){"use strict";var i=c(86),n=c(1),s=(c(511),c(5));t.a=function(e){var t=e.content,c=Object(n.useState)(!1),a=Object(i.a)(c,2),o=a[0],l=a[1];return Object(s.jsxs)("li",{className:"accordion-item",children:[Object(s.jsxs)("div",{className:"accordion-toggle",onClick:function(){return l(!o)},children:[Object(s.jsx)("h3",{children:null===t||void 0===t?void 0:t.title}),Object(s.jsx)("span",{children:o?"-":"+"})]}),o&&Object(s.jsx)("div",{className:"accordion-content",children:null===t||void 0===t?void 0:t.description})]})}},511:function(e,t,c){},648:function(e,t,c){},702:function(e,t,c){"use strict";c.r(t);var i=c(7),n=c(20),s=c(86),a=c(1),o=c(45),l=c(14),r=c(32),d=c(57),u=(c(455),c(145)),j=c(457),b=c(463),v=c.n(b),m=(c(648),c.p,c.p,c.p,c.p,c(505),c(506),c(507),c(508),c(510)),p=c(481),O=c(5),h=function(e){var t,c=e.categoryDetails,i=e.categoryProdDetails,n=null===c||void 0===c||null===(t=c.description)||void 0===t?void 0:t.reduce((function(e,t,c){var i=Math.floor(c/2);return e[i]||(e[i]=[]),e[i].push(t),e}),[]);return console.log(n,"result"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("section",{className:"customer-section pb-10",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row align-items-center",children:Object(O.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(O.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:null===c||void 0===c?void 0:c.subCategoryName}),Object(O.jsx)("div",{className:"section-desc text-grey",children:Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.categoryDescription}})})]})})})}),Object(O.jsx)("section",{className:"overlay_product",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"code-template",children:n&&Object.keys(n).map((function(e){var t;return Object(O.jsx)("div",{className:"row justify-content-center",children:null===(t=n[e])||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("div",{className:"col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last ",children:Object(O.jsxs)("div",{className:"banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),alt:"banner",width:"350",height:"177",style:{backgroundColor:"#1e1e1e",height:"50vh"}})}),Object(O.jsx)("div",{className:"banner-content d-flex align-items-center w-100 text-left",style:{padding:"20px"},children:Object(O.jsxs)("div",{className:"mr-auto mb-4 mb-md-0",children:[Object(O.jsxs)("h4",{className:"banner-subtitle text-white",children:[" ",null===e||void 0===e?void 0:e.title]}),Object(O.jsx)("p",{className:"text-white",children:null===e||void 0===e?void 0:e.description})]})})]})})}))})}))})})}),Object(O.jsx)("section",{className:"pt-3 mt-2 mb-2 pb-10 need_sec cat_new_carosal",id:"product_category_page_section",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{className:"title-echo mb-1",children:Object(O.jsx)("span",{children:"Available Products"})}),Object(O.jsx)("p",{children:null===c||void 0===c?void 0:c.productDescription}),(null===i||void 0===i?void 0:i.length)>0?Object(O.jsx)(v.a,{className:"owl-carousel owl-loaded owl-drag",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",mouseDrag:!0,responsive:{0:{items:1},768:{items:3},800:{items:4}},autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===i||void 0===i?void 0:i.length)>0)return Object(O.jsx)(O.Fragment,{children:null===i||void 0===i?void 0:i.map((function(e,t){return Object(O.jsx)(p.a,{ProductDetails:e},t)}))})}()},"carousel_1"):Object(O.jsx)("div",{className:"no-product d-flex justify-content-center my-7",children:"No Product Found"})]})}),Object(O.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",id:"distinct_table",children:Object(O.jsxs)("div",{className:"container p-0",children:[Object(O.jsx)("h2",{className:"title-echo mb-1",children:Object(O.jsx)("span",{children:"Why we are Distinct from other?"})}),Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsx)("div",{className:"col-sm-6",children:Object(O.jsx)("div",{className:"table-responsive table-bordered",children:Object(O.jsx)("table",{className:"table",children:Object(O.jsx)("tbody",{children:function(){var e,t;if((null===c||void 0===c||null===(e=c.advantage)||void 0===e?void 0:e.length)>0)return Object(O.jsx)(O.Fragment,{children:null===c||void 0===c||null===(t=c.advantage)||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)("tr",{className:"".concat(0==t?"base-bg":""),children:Object(O.jsxs)("td",{children:[Object(O.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})})})}),Object(O.jsx)("div",{className:"col-sm-6",children:Object(O.jsx)("div",{className:"table-responsive table-bordered",children:Object(O.jsx)("table",{className:"table",children:Object(O.jsx)("tbody",{children:function(){var e,t;if((null===c||void 0===c||null===(e=c.ordinaryProducts)||void 0===e?void 0:e.length)>0)return Object(O.jsx)(O.Fragment,{children:null===c||void 0===c||null===(t=c.ordinaryProducts)||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)("tr",{className:"".concat(0==t?"red-bg":""),children:Object(O.jsxs)("td",{children:[Object(O.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})})})})]})]})}),Object(O.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",children:Object(O.jsxs)("div",{className:"container p-0",children:[Object(O.jsx)("h2",{className:"title-echo mb-1",children:Object(O.jsx)("span",{children:"Frequently Asked Question?"})}),Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-sm-9 offset-sm-1",children:Object(O.jsx)("div",{className:"code-template",children:Object(O.jsx)("div",{className:"accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content",children:function(){var e,t;if((null===c||void 0===c||null===(e=c.questions)||void 0===e?void 0:e.length)>0)return Object(O.jsx)(O.Fragment,{children:null===c||void 0===c||null===(t=c.questions)||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(m.a,{content:e})}))})}()})})})})]})})]})},x=c(27),f=c(458);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(o.c)(),b=Object(u.a)(),v=b.get("fsz"),m=b.get("token"),p=Object(l.i)().params.categoryid,g=Object(a.useState)({}),_=Object(s.a)(g,2),N=_[0],A=_[1],P=Object(a.useState)({}),y=Object(s.a)(P,2),E=y[0],T=y[1];Object(a.useEffect)((function(){v&&(sessionStorage.setItem("fsz",v),Object(r.d)("source",v)),m&&(Object(r.c)(m),t.replace(e),c(Object(d.c)(m)))}),[]),Object(a.useEffect)((function(){w()}),[]),Object(a.useEffect)((function(){w()}),[p]);var w=function(){var e=Object(n.a)(Object(i.a)().mark((function e(){var t,c,n,s,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.w)(p);case 2:a=e.sent,A(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.subCategories),T(null===a||void 0===a||null===(n=a.data)||void 0===n||null===(s=n.responseData)||void 0===s?void 0:s.Products),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(O.jsx)("main",{className:"main single-product",children:Object(O.jsx)("div",{className:"page-content",children:Object(O.jsxs)("div",{className:"container-fluid p-0",children:[Object(O.jsx)("div",{className:"page-header pl-4 pr-4",style:{backgroundImage:"url(".concat("https://admin.livenscience.com").concat(null===N||void 0===N?void 0:N.bannerImage,")")},children:Object(O.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize"})}),Object(O.jsx)("div",{className:"page-content mt-10 pt-10",children:Object(O.jsx)(h,{categoryDetails:N,categoryProdDetails:E})})]})})}),Object(O.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=17.05e3f281.chunk.js.map