(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[12],{476:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var i=c(88),n=c.n(i),s=c(36),o=c(89),a=c(60),l=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||o.a.dispatch(Object(a.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(e)}));var r=l,d=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||o.a.dispatch(Object(a.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return r.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},501:function(e,t,c){"use strict";var i=c(87),n=c(5),s=c(1),o=c(110),a=(c(29),c(147)),l=c(48);t.a=function(e){var t=e.ProductDetails,c=(e.key,Object(l.c)()),r=Object(l.d)((function(e){return e})),d=r.user,u=r.cart,j=(null===u||void 0===u?void 0:u.data)?null===u||void 0===u?void 0:u.data:null,v=Object(s.useState)(!1),m=Object(i.a)(v,2),b=(m[0],m[1],Object(s.useState)(!1)),h=Object(i.a)(b,2),p=h[0],O=h[1];return Object(s.useEffect)((function(){if(d){var e,c=null===j||void 0===j||null===(e=j.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));O(!!c)}}),[j]),Object(n.jsxs)("div",{class:"product text-center product-with-qty",children:[Object(n.jsxs)("figure",{class:"product-media",children:[(null===t||void 0===t?void 0:t.isFree)?Object(n.jsx)(o.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),children:Object(n.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}):Object(n.jsx)(o.b,{to:"/product/".concat(null===t||void 0===t?void 0:t._id),children:Object(n.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}),Object(n.jsx)("div",{class:"product-label-group",children:Object(n.jsx)("label",{class:"product-label label-sale",children:"25% Off"})})]}),Object(n.jsxs)("div",{class:"product-details",children:[Object(n.jsx)("h3",{class:"product-name",children:Object(n.jsx)("a",{href:"#",children:null===t||void 0===t?void 0:t.name})}),Object(n.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(n.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(n.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(n.jsx)("div",{class:"ratings-container",children:Object(n.jsxs)("div",{class:"ratings-full",children:[Object(n.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(n.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(n.jsx)("div",{class:"product-action",children:(null===d||void 0===d?void 0:d.login)?(null===t||void 0===t?void 0:t.isFree)?Object(n.jsx)(o.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(n.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){p||c(Object(a.a)(t._id))},children:[Object(n.jsx)("i",{class:"d-icon-bag"}),Object(n.jsx)("span",{children:"Add to cart"})]}):Object(n.jsxs)(o.b,{to:"/Login",class:"btn-product btn-cart ls-l",children:[" ","Cart"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},506:function(e,t,c){"use strict";t.a=c.p+"static/media/banner_1.995230f9.jpg"},507:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_1.e9982c06.jpg"},508:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_2.1f3d3bc0.jpg"},509:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_3.8f7cbdb9.jpg"},510:function(e,t,c){"use strict";t.a=c.p+"static/media/pro_product_4.22dea4a6.jpg"},526:function(e,t,c){"use strict";t.a=c.p+"static/media/price_tag.98a14534.png"},543:function(e,t,c){},582:function(e,t,c){"use strict";var i=c(5),n=(c(1),c(485)),s=c.n(n);c(506),c.p,c(543),t.a=function(e){var t=e.bannerContent;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{className:"intro-section",children:(null===t||void 0===t?void 0:t.length)>0&&Object(i.jsx)(s.a,{className:"owl-carousel owl-nav-inside owl-theme row owl-nav-fade intr o-slider animation-slider cols-1 gutter-no owl-nav-arrow",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",navText:["<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png  />","<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png />"],responsive:{0:{items:1},768:{items:1},800:{items:1}},autoplay:!0,loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===t||void 0===t?void 0:t.length)>0)return Object(i.jsx)(i.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(i.jsx)("div",{className:"intro-slide".concat(t," banner banner-fixed"),children:Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),alt:"intro-banner",width:"1903",height:"540","intro-section":!0})})})}))})}()})})})}},618:function(e,t,c){},619:function(e,t,c){},641:function(e,t,c){},688:function(e,t,c){"use strict";c.r(t);var i=c(9),n=c.n(i),s=c(20),o=c(87),a=c(5),l=c(1),r=c(228),d=c.n(r),u=c(48),j=c(15),v=c(36),m=c(60),b=(c(476),c(29)),h=c(145),p=c(479),O=c(582),x=c(485),_=c.n(x),g=(c.p,c.p,c.p,c.p,c(500),c(526),c(501)),f=(c(618),function(e){var t=e.featureProductsContent;Object(j.g)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container-fluid base-color-bg",children:Object(a.jsxs)("section",{className:"category-section mb-4 mb-lg-6 pb-7",children:[Object(a.jsx)("h2",{className:"title-echo mb-2",children:Object(a.jsx)("span",{children:"Featured product"})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(_.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-2",margin:20,nav:!0,items:1,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:3}},autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===t||void 0===t?void 0:t.length)>0)return Object(a.jsx)(a.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)(g.a,{ProductDetails:e},t)}))})}()})})]})})})}),N=(c(147),c(507),c(508),c(509),c(510),c(619),function(e){e.homeContent;var t=e.categorylist,c=Object(l.useRef)(null),i=(Object(u.c)(),Object(u.d)((function(e){return e}))),r=i.user,d=i.cart,j=Object(l.useState)(!1),v=Object(o.a)(j,2),m=(v[0],v[1],r.data&&r.data,Object(l.useState)({})),h=Object(o.a)(m,2),p=h[0],O=h[1],x=Object(l.useState)(!0),f=Object(o.a)(x,2),N=(f[0],f[1]),E=Object(l.useState)(0),C=Object(o.a)(E,2),A=C[0],P=C[1],T=Object(l.useState)(!0),R=Object(o.a)(T,2),w=R[0],S=R[1],y=((null===d||void 0===d?void 0:d.data)&&(null===d||void 0===d||d.data),function(){var e=Object(s.a)(n.a.mark((function e(t,c){var i,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.q)(t);case 2:o=e.sent,O(null===o||void 0===o||null===(i=o.data)||void 0===i||null===(s=i.responseData)||void 0===s?void 0:s.Products),N(!0),S(!0),P(c);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}());return Object(l.useEffect)((function(){var e;y(null===(e=t[0])||void 0===e?void 0:e._id,0)}),[]),Object(l.useEffect)((function(){var e;(null===t||void 0===t?void 0:t.length)>0&&y(null===(e=t[0])||void 0===e?void 0:e._id,0)}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"arrivals-section need_sec",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"title-echo mb-1",children:Object(a.jsx)("span",{children:"What you need? Meet the most Here!"})}),Object(a.jsxs)("p",{children:["From skin to muscles, sleep to energy and fitness to cognition \u2013 Liven nurtures ",Object(a.jsx)("br",{})," the health with essentials naturally sourced."]}),Object(a.jsxs)("div",{className:"tab tab-nav-center",children:[Object(a.jsx)("ul",{className:"nav nav-tabs",children:function(){if((null===t||void 0===t?void 0:t.length)>0){return Object(a.jsx)(a.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)("li",{className:"nav-item ml-1 mr-1 pt-2 pb-2",ref:c,onClick:function(){return y(e._id,t)},children:Object(a.jsx)("a",{className:"nav-link nav-link-with-img border-rounded ".concat(A==t?"active":""),children:Object(a.jsxs)("h3",{className:"img-cat-title mb-0",children:[Object(a.jsx)("i",{className:"fa fa-home","aria-hidden":"true"})," ",null===e||void 0===e?void 0:e.subCategoryName]})})})}))})}}()}),Object(a.jsx)("div",{className:"tab-content",children:Object(a.jsxs)("div",{className:"tab-pane pt-4 ".concat(w?"active":""),id:"fruits",children:[(null===p||void 0===p?void 0:p.length)>0&&Object(a.jsx)(_.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:3}},autoplay:!0,children:Object(a.jsx)(a.Fragment,{children:(null===p||void 0===p?void 0:p.length)>0&&(null===p||void 0===p?void 0:p.map((function(e,t){return Object(a.jsx)(g.a,{ProductDetails:e},t)})))})}),(null===p||void 0===p?void 0:p.length)>0?"":"No found Product"]})})]})]})})})}),E=(c.p,function(e){var t,c,i,n,s,o,l,r,d,u,j,v,m,b,h,p=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"product_banner_section_2 mb-10",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("h2",{className:"title-echo mb-1",children:Object(a.jsx)("span",{children:null===p||void 0===p||null===(t=p.section)||void 0===t||null===(c=t.first)||void 0===c?void 0:c.title})})})}),Object(a.jsxs)("div",{className:"row product_banner_2",children:[Object(a.jsxs)("div",{className:"col-sm-6",children:[Object(a.jsx)("h1",{children:null===p||void 0===p||null===(i=p.section)||void 0===i||null===(n=i.first)||void 0===n?void 0:n.header}),Object(a.jsx)("p",{children:null===p||void 0===p||null===(s=p.section)||void 0===s||null===(o=s.first)||void 0===o?void 0:o.description}),Object(a.jsx)("div",{className:"row",children:(null===p||void 0===p||null===(l=p.section)||void 0===l||null===(r=l.first)||void 0===r?void 0:r.list)&&(null===p||void 0===p||null===(d=p.section)||void 0===d||null===(u=d.first)||void 0===u||null===(j=u.list)||void 0===j?void 0:j.map((function(e){return Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsxs)("div",{className:"icon-box icon-box-side",children:[Object(a.jsx)("i",{className:"icon-box-icon d-icon-truck"}),Object(a.jsx)("div",{className:"icon-box-content",children:Object(a.jsx)("h4",{className:"icon-box-title text-capitalize ls-normal",children:e})})]})})})))})]}),Object(a.jsx)("div",{className:"col-sm-6 text-center",children:(null===p||void 0===p||null===(v=p.section)||void 0===v||null===(m=v.first)||void 0===m?void 0:m.image)&&Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===p||void 0===p||null===(b=p.section)||void 0===b||null===(h=b.first)||void 0===h?void 0:h.image),alt:"First Banner",className:"nurtures_images"})})]})]})})})}),C=(c.p,c.p+"static/media/nutri_leaf.b99de212.png"),A=function(e){var t,c,i,n,s,o,l,r,d,u,j,v,m=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"",id:"weak_strongest",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("h2",{className:"title-echo mb-1",children:Object(a.jsx)("span",{children:null===m||void 0===m||null===(t=m.section)||void 0===t||null===(c=t.second)||void 0===c?void 0:c.title})})})}),Object(a.jsxs)("div",{className:"product_banner_3",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("h1",{className:"mb-10",children:null===m||void 0===m||null===(i=m.section)||void 0===i||null===(n=i.second)||void 0===n?void 0:n.header})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-8",children:(null===m||void 0===m||null===(s=m.section)||void 0===s||null===(o=s.second)||void 0===o?void 0:o.list)&&(null===m||void 0===m||null===(l=m.section)||void 0===l||null===(r=l.second)||void 0===r||null===(d=r.list)||void 0===d?void 0:d.map((function(e){return Object(a.jsx)("p",{children:e})})))}),Object(a.jsx)("div",{className:"col-sm-4",children:(null===m||void 0===m||null===(u=m.section)||void 0===u?void 0:u.second)&&Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===m||void 0===m||null===(j=m.section)||void 0===j||null===(v=j.second)||void 0===v?void 0:v.image),className:"weak_strongest_img_absolute",alt:"First Banner"})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-4 text-center",children:Object(a.jsx)("img",{src:C,className:"weak_strongest_img"})}),Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Authentic standards"}),Object(a.jsx)("li",{children:"Ensure Viability"}),Object(a.jsx)("li",{children:"Intact Ingredient properties"})]}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{children:"We clear the path of GOAL to offer delicate doses, Hope, Research-based nutrients and veracious inputs that can put you on the right track of leading healthier and pleasurable life."})]})]})]})]})})})},P=(c.p,c.p,c.p,c.p,c.p,function(e){var t,c,i,n,s,o,l,r=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"new_our_idea pt-10 pb-10",children:Object(a.jsxs)("div",{className:"container p-0",children:[Object(a.jsx)("h2",{className:"title-echo mb-1",children:Object(a.jsx)("span",{children:null===r||void 0===r||null===(t=r.section)||void 0===t||null===(c=t.third)||void 0===c?void 0:c.title})}),Object(a.jsx)("div",{className:"row p-20",children:(null===r||void 0===r||null===(i=r.section)||void 0===i||null===(n=i.third)||void 0===n?void 0:n.imageList)&&(null===r||void 0===r||null===(s=r.section)||void 0===s||null===(o=s.third)||void 0===o||null===(l=o.imageList)||void 0===l?void 0:l.map((function(e){return Object(a.jsxs)("div",{className:"col-xl-3 col-sm-6 col-12 category",children:[Object(a.jsx)("a",{href:"product.html",children:Object(a.jsx)("figure",{className:"category-media",children:(null===e||void 0===e?void 0:e.image)&&Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),alt:"category",className:"category_media_image"})})}),Object(a.jsx)("div",{className:"category-content",children:Object(a.jsx)("h4",{className:"category-name mb-1 mt-5",children:Object(a.jsx)("a",{href:"#",children:null===e||void 0===e?void 0:e.text})})}),Object(a.jsx)("div",{className:"pro_before_img"})]})})))})]})})})}),T=(c.p,function(e){var t,c,i,n,s,o,l,r,d,u,j,v,m,b=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"product_banner_section_2 pb-6",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row product_banner_2",children:[Object(a.jsx)("div",{className:"col-sm-6 text-center",children:(null===b||void 0===b||null===(t=b.section)||void 0===t||null===(c=t.fourth)||void 0===c?void 0:c.image)&&Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===b||void 0===b||null===(i=b.section)||void 0===i||null===(n=i.fourth)||void 0===n?void 0:n.image),className:"best_img"})}),Object(a.jsxs)("div",{className:"col-sm-6",children:[Object(a.jsx)("h1",{children:null===b||void 0===b||null===(s=b.section)||void 0===s||null===(o=s.fourth)||void 0===o?void 0:o.header}),Object(a.jsx)("h3",{className:"py-2",children:null===b||void 0===b||null===(l=b.section)||void 0===l||null===(r=l.fourth)||void 0===r?void 0:r.description}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:(null===b||void 0===b||null===(d=b.section)||void 0===d||null===(u=d.fourth)||void 0===u?void 0:u.list)&&(null===b||void 0===b||null===(j=b.section)||void 0===j||null===(v=j.fourth)||void 0===v||null===(m=v.list)||void 0===m?void 0:m.map((function(e){return Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsxs)("div",{className:"icon-box icon-box-side",children:[Object(a.jsx)("i",{className:"icon-box-icon d-icon-truck"}),Object(a.jsx)("div",{className:"icon-box-content",children:Object(a.jsx)("h4",{className:"icon-box-title text-capitalize ls-normal",children:e})})]})})})))})]})]})})})})}),R=(c.p,c.p,c.p,c.p,c.p,function(e){var t,c,i,n,s,o,l,r,d,u=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"instagram-section pt-2 pt-md-7 pt-10 pb-8","data-animation-options":"{'delay': '.2s', 'duration': '.5s' }",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"title-echo mb-1",children:Object(a.jsx)("span",{children:null===u||void 0===u||null===(t=u.section)||void 0===t||null===(c=t.fifth)||void 0===c?void 0:c.title})}),Object(a.jsx)("p",{children:null===u||void 0===u||null===(i=u.section)||void 0===i||null===(n=i.fifth)||void 0===n?void 0:n.description}),Object(a.jsx)(_.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:5}},autoplay:!0,loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,children:(null===u||void 0===u||null===(s=u.section)||void 0===s||null===(o=s.fifth)||void 0===o?void 0:o.imageList)&&(null===u||void 0===u||null===(l=u.section)||void 0===l||null===(r=l.fifth)||void 0===r||null===(d=r.imageList)||void 0===d?void 0:d.map((function(e){return Object(a.jsx)("figure",{className:"instagram",children:Object(a.jsxs)("a",{href:"product.html",children:[Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(e.image),alt:"Instagram",width:"220",height:"220"}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"categories_title_name",children:Object(a.jsx)("h5",{children:e.text})})]})})})))})]})})})}),w=function(e){var t,c,i,n,s=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"team_sec pb-5 pt-5","data-animation-options":"{'name': 'fadeInUpShorter','duration': '1.2s', 'delay': '.2s' }",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"title-echo",children:Object(a.jsx)("span",{children:null===s||void 0===s||null===(t=s.section)||void 0===t||null===(c=t.sixth)||void 0===c?void 0:c.title})}),Object(a.jsx)("p",{children:null===s||void 0===s||null===(i=s.section)||void 0===i||null===(n=i.sixth)||void 0===n?void 0:n.description})]})})})},S=(c.p,c.p,c(620),c(641),function(e){var t,c,i,n,s,o=e.homeContent;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"banner-section row gutter-no",children:(null===o||void 0===o||null===(t=o.section)||void 0===t||null===(c=t.sixth)||void 0===c?void 0:c.imageList)&&(null===o||void 0===o||null===(i=o.section)||void 0===i||null===(n=i.sixth)||void 0===n||null===(s=n.imageList)||void 0===s?void 0:s.map((function(e){return Object(a.jsx)("div",{className:"col-xl-2 col-sm-6 col-12",children:Object(a.jsxs)("div",{className:"banner1 banner banner-fixed overlay-zoom",children:[Object(a.jsx)("figure",{children:Object(a.jsx)("video",{className:"card_video__1z3he",width:"auto",height:"auto",autoPlay:!0,muted:!0,loop:!0,style:{width:"100%"},children:Object(a.jsx)("source",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),type:"video/mp4"})})}),Object(a.jsxs)("div",{className:"category-content y-50 x-50 w-100 pl-2 pr-2 pb-1 p-absolute appear-animate",children:[Object(a.jsx)("h4",{className:"banner-subtitle mb-0 font-weight-bold text-white text-uppercase",children:null===e||void 0===e?void 0:e.text}),Object(a.jsx)("a",{href:"#",className:"btn btn-md-ellipse btn-ellipse btn-solid btn-primary icon-arrow-right",children:Object(a.jsx)("i",{className:"fa fa-play","aria-hidden":"true"})})]})]})})})))})})}),y=c(480);t.default=function(){var e=Object(j.i)().url,t=Object(j.g)(),c=Object(u.c)(),i=Object(h.a)(),r=i.get("fsz"),x=i.get("token"),_=i.get("_ga"),g=Object(l.useState)({}),C=Object(o.a)(g,2),L=C[0],F=C[1],k=Object(l.useState)([]),I=Object(o.a)(k,2),U=I[0],D=I[1],B=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.s)();case 3:c=e.sent,F(null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.responseData),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.r)();case 3:i=e.sent,D(null===i||void 0===i||null===(t=i.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.subCategories),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){r&&(sessionStorage.setItem("fsz",r),Object(v.d)("source",r)),x&&(Object(v.c)(x),t.replace(e),c(Object(m.a)(x))),B(),M(),_&&t.replace(e)}),[]),Object(l.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(d.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),d.a.pageView())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(a.jsx)("main",{className:"main home",children:Object(a.jsxs)("div",{className:"page-content",children:[Object(a.jsx)(O.a,{bannerContent:null===L||void 0===L?void 0:L.banner}),Object(a.jsx)(f,{featureProductsContent:null===L||void 0===L?void 0:L.featureProducts}),Object(a.jsx)(N,{homeContent:L,categorylist:U}),Object(a.jsx)(E,{homeContent:L}),Object(a.jsx)(A,{homeContent:L}),Object(a.jsx)(P,{homeContent:L}),Object(a.jsx)(T,{homeContent:L}),Object(a.jsx)(R,{homeContent:L}),Object(a.jsx)(w,{homeContent:L}),Object(a.jsx)(S,{homeContent:L}),Object(a.jsx)(y.a,{})]})})]})}}}]);
//# sourceMappingURL=12.9179bbf3.chunk.js.map