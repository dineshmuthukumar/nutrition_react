(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[15],{476:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var i=c(88),s=c.n(i),n=c(36),a=c(89),o=c(60),d=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://18.144.69.183/",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(n.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(n.a)()||a.a.dispatch(Object(o.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(n.b)(),Promise.reject(e)}));var r=d,l=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://18.144.69.183/",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(n.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(n.a)()||a.a.dispatch(Object(o.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(n.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return r.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},501:function(e,t,c){"use strict";var i=c(87),s=c(5),n=c(1),a=c(110),o=(c(29),c(147)),d=c(48);t.a=function(e){var t=e.ProductDetails,c=(e.key,Object(d.c)()),r=Object(d.d)((function(e){return e})),l=r.user,u=r.cart,j=(null===u||void 0===u?void 0:u.data)?null===u||void 0===u?void 0:u.data:null,b=Object(n.useState)(!1),v=Object(i.a)(b,2),p=(v[0],v[1],Object(n.useState)(!1)),m=Object(i.a)(p,2),h=m[0],O=m[1];return Object(n.useEffect)((function(){if(l){var e,c=null===j||void 0===j||null===(e=j.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));O(!!c)}}),[j]),Object(s.jsxs)("div",{class:"product text-center product-with-qty",children:[Object(s.jsxs)("figure",{class:"product-media",children:[(null===t||void 0===t?void 0:t.isFree)?Object(s.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),children:Object(s.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}):Object(s.jsx)(a.b,{to:"/product/".concat(null===t||void 0===t?void 0:t._id),children:Object(s.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}),Object(s.jsx)("div",{class:"product-label-group",children:Object(s.jsx)("label",{class:"product-label label-sale",children:"25% Off"})})]}),Object(s.jsxs)("div",{class:"product-details",children:[Object(s.jsx)("h3",{class:"product-name",children:Object(s.jsx)("a",{href:"#",children:null===t||void 0===t?void 0:t.name})}),Object(s.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(s.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(s.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(s.jsx)("div",{class:"ratings-container",children:Object(s.jsxs)("div",{class:"ratings-full",children:[Object(s.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(s.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(s.jsx)("div",{class:"product-action",children:(null===l||void 0===l?void 0:l.login)?(null===t||void 0===t?void 0:t.isFree)?Object(s.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(s.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){h||c(Object(o.a)(t._id))},children:[Object(s.jsx)("i",{class:"d-icon-bag"}),Object(s.jsx)("span",{children:"Add to cart"})]}):Object(s.jsxs)(a.b,{to:"/Login",class:"btn-product btn-cart ls-l",children:[" ","Cart"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},507:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_1.e9982c06.jpg"},508:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_2.1f3d3bc0.jpg"},509:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_3.8f7cbdb9.jpg"},510:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_4.22dea4a6.jpg"},512:function(e,t,c){"use strict";var i=c(87),s=c(5),n=c(1);c(513);t.a=function(e){var t=e.content,c=Object(n.useState)(!1),a=Object(i.a)(c,2),o=a[0],d=a[1];return Object(s.jsxs)("li",{className:"accordion-item",children:[Object(s.jsxs)("div",{className:"accordion-toggle",onClick:function(){return d(!o)},children:[Object(s.jsx)("h3",{children:null===t||void 0===t?void 0:t.title}),Object(s.jsx)("span",{children:o?"-":"+"})]}),o&&Object(s.jsx)("div",{className:"accordion-content",children:null===t||void 0===t?void 0:t.description})]})}},513:function(e,t,c){},642:function(e,t,c){},693:function(e,t,c){"use strict";c.r(t);var i=c(9),s=c.n(i),n=c(20),a=c(87),o=c(5),d=c(1),r=c(48),l=c(15),u=c(36),j=c(60),b=(c(476),c(145)),v=c(479),p=c(485),m=c.n(p),h=(c(642),c.p,c.p,c.p,c.p,c(507),c(508),c(509),c(510),c(512)),O=c(501),x=function(e){var t=e.categoryDetails,c=e.categoryProdDetails;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"customer-section pb-10",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(o.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:null===t||void 0===t?void 0:t.subCategoryName}),Object(o.jsx)("div",{className:"section-desc text-grey",children:Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.categoryDescription}})})]})})})}),Object(o.jsx)("section",{className:"overlay_product",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"code-template",children:Object(o.jsx)("div",{className:"row cols-sm-2 cols-lg-4 code-content",children:function(){var e,c;if((null===t||void 0===t||null===(e=t.description)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.description)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("div",{className:"image-box image-overlay",children:Object(o.jsxs)("figure",{className:"banner-radius",children:[Object(o.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),alt:"image-overlay",width:"280",height:"280"}),Object(o.jsx)("h4",{className:"overlay-visible",children:null===e||void 0===e?void 0:e.title}),Object(o.jsx)("div",{className:"overlay overlay-transparent",children:Object(o.jsx)("p",{className:"",children:null===e||void 0===e?void 0:e.description})})]})})}))})}()})})})}),Object(o.jsx)("section",{className:"pt-3 mt-2 mb-2 pb-10 need_sec",id:"product_category_page_section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title-echo mb-1",children:Object(o.jsx)("span",{children:"Available Products"})}),Object(o.jsx)("p",{children:null===t||void 0===t?void 0:t.productDescription}),(null===c||void 0===c?void 0:c.length)>0&&Object(o.jsx)(m.a,{className:"owl-carousel owl-loaded owl-drag",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",mouseDrag:!0,responsive:{0:{items:2},768:{items:3},800:{items:4}},autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===c||void 0===c?void 0:c.length)>0)return Object(o.jsx)(o.Fragment,{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(o.jsx)(O.a,{ProductDetails:e},t)}))})}()},"carousel_1")]})}),Object(o.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",id:"distinct_table",children:Object(o.jsxs)("div",{className:"container p-0",children:[Object(o.jsx)("h2",{className:"title-echo mb-1",children:Object(o.jsx)("span",{children:"Why we are Distinct from other?"})}),Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("div",{className:"table-responsive table-bordered",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{className:"base-bg",children:Object(o.jsx)("tr",{children:Object(o.jsx)("th",{children:"Be Bodywise Advantage"})})}),Object(o.jsx)("tbody",{children:function(){var e,c;if((null===t||void 0===t||null===(e=t.advantage)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.advantage)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{children:[Object(o.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})]})})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("div",{className:"table-responsive table-bordered",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{className:"red-bg",children:Object(o.jsx)("tr",{children:Object(o.jsx)("th",{children:"Ordinary Products"})})}),Object(o.jsx)("tbody",{children:function(){var e,c;if((null===t||void 0===t||null===(e=t.ordinaryProducts)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.ordinaryProducts)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{children:[Object(o.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})]})})})]})]})}),Object(o.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",children:Object(o.jsxs)("div",{className:"container p-0",children:[Object(o.jsx)("h2",{className:"title-echo mb-1",children:Object(o.jsx)("span",{children:"Frequently Asked Question?"})}),Object(o.jsx)("p",{className:"new_our_idea_des",children:null===t||void 0===t?void 0:t.questionDescription}),Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-sm-9 offset-sm-1",children:Object(o.jsx)("div",{className:"code-template",children:Object(o.jsx)("div",{className:"accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content",children:function(){var e,c;if((null===t||void 0===t||null===(e=t.questions)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.questions)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)(h.a,{content:e})}))})}()})})})})]})})]})},g=c(29),_=c(480);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(r.c)(),i=Object(b.a)(),p=i.get("fsz"),m=i.get("token"),h=Object(l.i)().params.categoryid,O=Object(d.useState)({}),f=Object(a.a)(O,2),N=f[0],y=f[1],A=Object(d.useState)({}),P=Object(a.a)(A,2),E=P[0],T=P[1];Object(d.useEffect)((function(){p&&(sessionStorage.setItem("fsz",p),Object(u.d)("source",p)),m&&(Object(u.c)(m),t.replace(e),c(Object(j.a)(m)))}),[]),Object(d.useEffect)((function(){R()}),[]),Object(d.useEffect)((function(){R()}),[h]);var R=function(){var e=Object(n.a)(s.a.mark((function e(){var t,c,i,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.q)(h);case 2:a=e.sent,y(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.subCategories),T(null===a||void 0===a||null===(i=a.data)||void 0===i||null===(n=i.responseData)||void 0===n?void 0:n.Products),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(o.jsx)("main",{className:"main single-product",children:Object(o.jsx)("div",{className:"page-content",children:Object(o.jsxs)("div",{className:"container-fluid p-0",children:[Object(o.jsx)("div",{className:"page-header pl-4 pr-4",style:{backgroundImage:"url(".concat(null===N||void 0===N?void 0:N.bannerImage,")")},children:Object(o.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:null===N||void 0===N?void 0:N.subCategoryName})}),Object(o.jsx)("div",{className:"page-content mt-10 pt-10",children:Object(o.jsx)(x,{categoryDetails:N,categoryProdDetails:E})})]})})}),Object(o.jsx)(_.a,{})]})}}}]);
//# sourceMappingURL=15.e415c8d6.chunk.js.map