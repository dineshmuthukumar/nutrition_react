(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[16],{478:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var i=c(88),n=c.n(i),s=c(36),a=c(89),o=c(60),l=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(o.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(e)}));var d=l,r=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});r.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),r.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(o.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return d.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},508:function(e,t,c){"use strict";var i=c(87),n=c(5),s=c(1),a=c(110),o=(c(29),c(147)),l=c(48);t.a=function(e){var t=e.ProductDetails,c=(e.key,Object(l.c)()),d=Object(l.d)((function(e){return e})),r=d.user,u=d.cart,j=(null===u||void 0===u?void 0:u.data)?null===u||void 0===u?void 0:u.data:null,b=Object(s.useState)(!1),v=Object(i.a)(b,2),m=(v[0],v[1],Object(s.useState)(!1)),h=Object(i.a)(m,2),O=h[0],p=h[1];return Object(s.useEffect)((function(){if(r){var e,c=null===j||void 0===j||null===(e=j.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));p(!!c)}}),[j]),Object(n.jsxs)("div",{class:"product text-center product-with-qty",children:[Object(n.jsxs)("figure",{class:"product-media",children:[(null===t||void 0===t?void 0:t.isFree)?Object(n.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),children:Object(n.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}):Object(n.jsx)(a.b,{to:"/product/".concat(null===t||void 0===t?void 0:t._id),children:Object(n.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}),Object(n.jsx)("div",{class:"product-label-group",children:Object(n.jsx)("label",{class:"product-label label-sale",children:"25% Off"})})]}),Object(n.jsxs)("div",{class:"product-details",children:[Object(n.jsx)("h3",{class:"product-name",children:Object(n.jsx)("a",{href:"#",children:null===t||void 0===t?void 0:t.name})}),Object(n.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(n.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(n.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(n.jsx)("div",{class:"ratings-container",children:Object(n.jsxs)("div",{class:"ratings-full",children:[Object(n.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(n.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(n.jsx)("div",{class:"product-action",children:(null===r||void 0===r?void 0:r.login)?(null===t||void 0===t?void 0:t.isFree)?Object(n.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(n.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){var e;O||c(Object(o.a)(t._id,"BASIC",null===t||void 0===t||null===(e=t.productType[0])||void 0===e?void 0:e.saleAmount))},children:[Object(n.jsx)("i",{class:"d-icon-bag"}),Object(n.jsx)("span",{children:"Add to cart"})]}):(null===t||void 0===t?void 0:t.isFree)?Object(n.jsx)(a.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(n.jsxs)(a.b,{to:"/Login",class:"btn-product btn-cart ls-l",children:[" ","Cart"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},528:function(e,t,c){"use strict";c.p},529:function(e,t,c){"use strict";c.p},530:function(e,t,c){"use strict";c.p},531:function(e,t,c){"use strict";c.p},532:function(e,t,c){"use strict";var i=c(87),n=c(5),s=c(1);c(533);t.a=function(e){var t=e.content,c=Object(s.useState)(!1),a=Object(i.a)(c,2),o=a[0],l=a[1];return Object(n.jsxs)("li",{className:"accordion-item",children:[Object(n.jsxs)("div",{className:"accordion-toggle",onClick:function(){return l(!o)},children:[Object(n.jsx)("h3",{children:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("span",{children:o?"-":"+"})]}),o&&Object(n.jsx)("div",{className:"accordion-content",children:null===t||void 0===t?void 0:t.description})]})}},533:function(e,t,c){},660:function(e,t,c){},706:function(e,t,c){"use strict";c.r(t);var i=c(9),n=c.n(i),s=c(20),a=c(87),o=c(5),l=c(1),d=c(48),r=c(15),u=c(36),j=c(60),b=(c(478),c(146)),v=c(481),m=c(488),h=c.n(m),O=(c(660),c.p,c.p,c.p,c.p,c(528),c(529),c(530),c(531),c(532)),p=c(508),x=function(e){var t=e.categoryDetails,c=e.categoryProdDetails;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"customer-section pb-10",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(o.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:null===t||void 0===t?void 0:t.subCategoryName}),Object(o.jsx)("div",{className:"section-desc text-grey",children:Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.categoryDescription}})})]})})})}),Object(o.jsx)("section",{className:"overlay_product",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"code-template",children:Object(o.jsx)("div",{className:"row cols-sm-2 cols-lg-4 code-content",children:function(){var e,c;if((null===t||void 0===t||null===(e=t.description)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.description)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("div",{className:"image-box image-overlay",children:Object(o.jsxs)("figure",{className:"banner-radius",children:[Object(o.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),alt:"image-overlay",width:"280",height:"280"}),Object(o.jsx)("h4",{className:"overlay-visible",children:null===e||void 0===e?void 0:e.title}),Object(o.jsx)("div",{className:"overlay overlay-transparent",children:Object(o.jsx)("p",{className:"",children:null===e||void 0===e?void 0:e.description})})]})})}))})}()})})})}),Object(o.jsx)("section",{className:"pt-3 mt-2 mb-2 pb-10 need_sec",id:"product_category_page_section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title-echo mb-1",children:Object(o.jsx)("span",{children:"Available Products"})}),Object(o.jsx)("p",{children:null===t||void 0===t?void 0:t.productDescription}),(null===c||void 0===c?void 0:c.length)>0&&Object(o.jsx)(h.a,{className:"owl-carousel owl-loaded owl-drag",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",mouseDrag:!0,responsive:{0:{items:2},768:{items:3},800:{items:4}},autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===c||void 0===c?void 0:c.length)>0)return Object(o.jsx)(o.Fragment,{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(o.jsx)(p.a,{ProductDetails:e},t)}))})}()},"carousel_1")]})}),Object(o.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",id:"distinct_table",children:Object(o.jsxs)("div",{className:"container p-0",children:[Object(o.jsx)("h2",{className:"title-echo mb-1",children:Object(o.jsx)("span",{children:"Why we are Distinct from other?"})}),Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("div",{className:"table-responsive table-bordered",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{className:"base-bg",children:Object(o.jsx)("tr",{children:Object(o.jsx)("th",{children:"Be Bodywise Advantage"})})}),Object(o.jsx)("tbody",{children:function(){var e,c;if((null===t||void 0===t||null===(e=t.advantage)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.advantage)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{children:[Object(o.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})]})})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("div",{className:"table-responsive table-bordered",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{className:"red-bg",children:Object(o.jsx)("tr",{children:Object(o.jsx)("th",{children:"Ordinary Products"})})}),Object(o.jsx)("tbody",{children:function(){var e,c;if((null===t||void 0===t||null===(e=t.ordinaryProducts)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.ordinaryProducts)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{children:[Object(o.jsx)("i",{className:"fas fa-certificate"}),null===e||void 0===e?void 0:e.title]})})}))})}()})]})})})]})]})}),Object(o.jsx)("section",{className:"new_our_idea pt-2 pt-md-7 pt-10 pb-8",children:Object(o.jsxs)("div",{className:"container p-0",children:[Object(o.jsx)("h2",{className:"title-echo mb-1",children:Object(o.jsx)("span",{children:"Frequently Asked Question?"})}),Object(o.jsx)("p",{className:"new_our_idea_des",children:null===t||void 0===t?void 0:t.questionDescription}),Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-sm-9 offset-sm-1",children:Object(o.jsx)("div",{className:"code-template",children:Object(o.jsx)("div",{className:"accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content",children:function(){var e,c;if((null===t||void 0===t||null===(e=t.questions)||void 0===e?void 0:e.length)>0)return Object(o.jsx)(o.Fragment,{children:null===t||void 0===t||null===(c=t.questions)||void 0===c?void 0:c.map((function(e){return Object(o.jsx)(O.a,{content:e})}))})}()})})})})]})})]})},g=c(29),f=c(482);t.default=function(){var e=Object(r.i)().url,t=Object(r.g)(),c=Object(d.c)(),i=Object(b.a)(),m=i.get("fsz"),h=i.get("token"),O=Object(r.i)().params.categoryid,p=Object(l.useState)({}),_=Object(a.a)(p,2),N=_[0],y=_[1],A=Object(l.useState)({}),P=Object(a.a)(A,2),E=P[0],T=P[1];Object(l.useEffect)((function(){m&&(sessionStorage.setItem("fsz",m),Object(u.d)("source",m)),h&&(Object(u.c)(h),t.replace(e),c(Object(j.a)(h)))}),[]),Object(l.useEffect)((function(){w()}),[]),Object(l.useEffect)((function(){w()}),[O]);var w=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,i,s,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.s)(O);case 2:a=e.sent,y(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.subCategories),T(null===a||void 0===a||null===(i=a.data)||void 0===i||null===(s=i.responseData)||void 0===s?void 0:s.Products),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(o.jsx)("main",{className:"main single-product",children:Object(o.jsx)("div",{className:"page-content",children:Object(o.jsxs)("div",{className:"container-fluid p-0",children:[Object(o.jsx)("div",{className:"page-header pl-4 pr-4",style:{backgroundImage:"url(".concat("https://admin.livenscience.com").concat(null===N||void 0===N?void 0:N.bannerImage,")")},children:Object(o.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:null===N||void 0===N?void 0:N.subCategoryName})}),Object(o.jsx)("div",{className:"page-content mt-10 pt-10",children:Object(o.jsx)(x,{categoryDetails:N,categoryProdDetails:E})})]})})}),Object(o.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=16.073ff5e7.chunk.js.map