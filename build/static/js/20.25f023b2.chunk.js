(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[20],{476:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));c(3);var i=c(88),n=c.n(i),s=c(36),a=c(89),r=c(60),o=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(e)}));var l=o,d=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||a.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var j=function(e){var t=e.page,c=e.parent_slug;return l.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},491:function(e,t,c){"use strict";t.a=c.p+"static/media/customer.07059049.jpg"},492:function(e,t,c){"use strict";t.a=c.p+"static/media/store.27de7930.jpg"},673:function(e,t,c){},702:function(e,t,c){"use strict";c.r(t);c(9),c(488),c(20);var i=c(87),n=c(5),s=c(1),a=c(228),r=c.n(a),o=c(48),l=c(15),d=c(36),j=c(60),u=(c(476),c(145)),m=c(479),p=(c(485),c(110)),h=(c(491),c(492),c(147)),b=(c(673),c(481)),O=function(){var e,t=Object(o.c)(),c=Object(o.d)((function(e){return e})),i=(c.user,c.cart),a={key:"rzp_test_2hFYTVjM8i6zhe",currency:"INR",amount:100,name:"Learning To Code Online",description:"Test Wallet Transaction",image:"http://localhost:1337/logo.png",handler:function(e){console.log(e,"response"),alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature)},prefill:{name:"Anirudh Jwala",email:"anirudh@gmail.com",contact:"9999999999"}};return Object(s.useEffect)((function(){var e;e="https://checkout.razorpay.com/v1/checkout.js",new Promise((function(t){var c=document.createElement("script");c.src=e,c.onload=function(){t(!0)},c.onerror=function(){t(!1)},document.body.appendChild(c)}))})),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("section",{className:"checkout customer-section",children:[Object(n.jsx)("div",{className:"step-by pr-4 pl-4",children:Object(n.jsx)("h3",{className:"title title-simple title-step active",children:Object(n.jsx)("a",{href:"#",children:"Checkout"})})}),Object(n.jsx)("div",{className:"container mt-7 mb-2",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsxs)("div",{className:"col-lg-8 col-md-8 pr-lg-4",children:[(null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.length)>0?Object(n.jsxs)("table",{className:"shop-table cart-table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:Object(n.jsx)("span",{children:"Product"})}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:Object(n.jsx)("span",{children:"Price"})}),Object(n.jsx)("th",{children:"Remove"})]})}),Object(n.jsx)("tbody",{children:null===i||void 0===i?void 0:i.data.map((function(e,c){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"product-thumbnail",children:Object(n.jsx)("figure",{children:Object(n.jsx)("a",{href:"product-simple.html",children:Object(n.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.photos),width:"100",height:"100",alt:"product"})})})}),Object(n.jsx)("td",{className:"product-name",children:Object(n.jsx)("div",{className:"product-name-section",children:Object(n.jsx)("a",{href:"product-simple.html",children:null===e||void 0===e?void 0:e.name})})}),Object(n.jsx)("td",{className:"product-subtotal",children:Object(n.jsx)("span",{className:"amount",children:Object(b.b)(null===e||void 0===e?void 0:e.saleAmount,"INR")})}),Object(n.jsx)("td",{className:"product-close",children:Object(n.jsx)("a",{className:"product-remove",title:"Remove this product",onClick:function(){return t(Object(h.d)(null===e||void 0===e?void 0:e._id))},children:Object(n.jsx)("i",{className:"fas fa-times"})})})]},c)}))})]}):"No Items Found",Object(n.jsx)("div",{className:"cart-actions-right mb-6 pt-4",children:function(){var e;return(null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.length)>0?Object(n.jsxs)(p.b,{onClick:function(){new window.Razorpay(a).open()},className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:["Continue Shopping ",Object(n.jsx)("i",{className:"d-icon-arrow-right"})]}):Object(n.jsx)(p.b,{to:"/",className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:"Back"})}()})]}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"panel panel-danger pull-up",children:[Object(n.jsx)("div",{className:"panel-heading",children:Object(n.jsx)("h5",{className:"text-left",children:"YOUR ORDER"})}),Object(n.jsx)("h5",{children:"Product"}),Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Fashionable Overnight Bag \xd7 1"," ",Object(n.jsx)("span",{className:"plan_right_section",children:"$110.00"})]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Fashionable Overnight Bag \xd7 1"," ",Object(n.jsx)("span",{className:"plan_right_section",children:"$110.00"})]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Discount"," ",Object(n.jsx)("span",{className:"plan_right_section dicount_span",children:"-$10"})]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Delivery Charges"," ",Object(n.jsx)("span",{className:"plan_right_section dicount_span",children:"Free"})]})]}),Object(n.jsx)("div",{className:"panel-footer",children:Object(n.jsx)("ul",{className:"list-group list-group-flush",children:Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsxs)("h5",{children:["Total Amount",Object(n.jsx)("span",{className:"plan_right_section",children:"$118.00"})]})})})})]})})]})})]})})},_=c(480);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(o.c)(),a=Object(u.a)(),p=a.get("fsz"),h=a.get("token"),b=a.get("_ga"),v=Object(s.useState)([]),E=Object(i.a)(v,2);E[0],E[1];return Object(s.useEffect)((function(){p&&(sessionStorage.setItem("fsz",p),Object(d.d)("source",p)),h&&(Object(d.c)(h),t.replace(e),c(Object(j.a)(h))),b&&t.replace(e)}),[]),Object(s.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(r.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),r.a.pageView())}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(n.jsx)("main",{className:"main single-product",children:Object(n.jsx)("div",{className:"page-content",children:Object(n.jsxs)("div",{className:"container-fluid p-0",children:[Object(n.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(n.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Checkout"})}),Object(n.jsx)("div",{class:"page-content pb-10 pt-10",children:Object(n.jsx)(O,{})})]})})}),Object(n.jsx)(_.a,{})]})}}}]);
//# sourceMappingURL=20.25f023b2.chunk.js.map