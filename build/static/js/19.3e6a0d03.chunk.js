(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[19],{474:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));c(3);var s=c(87),i=c.n(s),a=c(34),n=c(88),r=c(60),o=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(a.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(a.a)()||n.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(a.b)(),Promise.reject(e)}));var l=o,d=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(a.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(a.a)()||n.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(a.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var j=function(e){var t=e.page,c=e.parent_slug;return l.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},488:function(e,t,c){"use strict";t.a=c.p+"static/media/customer.07059049.jpg"},489:function(e,t,c){"use strict";t.a=c.p+"static/media/store.27de7930.jpg"},650:function(e,t,c){},679:function(e,t,c){"use strict";c.r(t);c(18),c(482),c(40);var s=c(86),i=c(5),a=c(1),n=c(484),r=c.n(n),o=c(47),l=c(13),d=c(34),j=c(60),u=(c(474),c(143)),b=c(477),h=(c(475),c(109)),p=(c(488),c(489),c(494)),O=(c(650),c(490)),m=function(){var e,t=Object(o.c)(),c=Object(o.d)((function(e){return e})),s=(c.user,c.cart);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{className:"checkout customer-section",children:[Object(i.jsx)("div",{className:"step-by pr-4 pl-4",children:Object(i.jsx)("h3",{className:"title title-simple title-step active",children:Object(i.jsx)("a",{href:"#",children:"Checkout"})})}),Object(i.jsx)("div",{className:"container mt-7 mb-2",children:Object(i.jsxs)("div",{className:"row align-items-center",children:[Object(i.jsxs)("div",{className:"col-lg-8 col-md-8 pr-lg-4",children:[(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.length)>0?Object(i.jsxs)("table",{className:"shop-table cart-table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsx)("span",{children:"Product"})}),Object(i.jsx)("th",{children:"Description"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{children:"Price"})}),Object(i.jsx)("th",{children:"Remove"})]})}),Object(i.jsx)("tbody",{children:null===s||void 0===s?void 0:s.data.map((function(e,c){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"product-thumbnail",children:Object(i.jsx)("figure",{children:Object(i.jsx)("a",{href:"product-simple.html",children:Object(i.jsx)("img",{src:"http://54.177.7.240"+(null===e||void 0===e?void 0:e.photos),width:"100",height:"100",alt:"product"})})})}),Object(i.jsx)("td",{className:"product-name",children:Object(i.jsx)("div",{className:"product-name-section",children:Object(i.jsx)("a",{href:"product-simple.html",children:null===e||void 0===e?void 0:e.name})})}),Object(i.jsx)("td",{className:"product-subtotal",children:Object(i.jsx)("span",{className:"amount",children:Object(O.b)(null===e||void 0===e?void 0:e.saleAmount,"INR")})}),Object(i.jsx)("td",{className:"product-close",children:Object(i.jsx)("a",{className:"product-remove",title:"Remove this product",onClick:function(){return t(Object(p.c)(null===e||void 0===e?void 0:e._id))},children:Object(i.jsx)("i",{className:"fas fa-times"})})})]},c)}))})]}):"No Items Found",Object(i.jsx)("div",{className:"cart-actions-right mb-6 pt-4",children:function(){var e;return(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.length)>0?Object(i.jsxs)("a",{className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:["Continue Shopping ",Object(i.jsx)("i",{className:"d-icon-arrow-right"})]}):Object(i.jsx)(h.b,{to:"/",className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:"Back"})}()})]}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"panel panel-danger pull-up",children:[Object(i.jsx)("div",{className:"panel-heading",children:Object(i.jsx)("h5",{className:"text-left",children:"YOUR ORDER"})}),Object(i.jsx)("h5",{children:"Product"}),Object(i.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(i.jsxs)("li",{className:"list-group-item",children:["Fashionable Overnight Bag \xd7 1"," ",Object(i.jsx)("span",{className:"plan_right_section",children:"$110.00"})]}),Object(i.jsxs)("li",{className:"list-group-item",children:["Fashionable Overnight Bag \xd7 1"," ",Object(i.jsx)("span",{className:"plan_right_section",children:"$110.00"})]}),Object(i.jsxs)("li",{className:"list-group-item",children:["Discount"," ",Object(i.jsx)("span",{className:"plan_right_section dicount_span",children:"-$10"})]}),Object(i.jsxs)("li",{className:"list-group-item",children:["Delivery Charges"," ",Object(i.jsx)("span",{className:"plan_right_section dicount_span",children:"Free"})]})]}),Object(i.jsx)("div",{className:"panel-footer",children:Object(i.jsx)("ul",{className:"list-group list-group-flush",children:Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsxs)("h5",{children:["Total Amount",Object(i.jsx)("span",{className:"plan_right_section",children:"$118.00"})]})})})})]})})]})})]})})},_=c(478);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(o.c)(),n=Object(u.a)(),h=n.get("fsz"),p=n.get("token"),O=n.get("_ga"),g=Object(a.useState)([]),v=Object(s.a)(g,2);v[0],v[1];return Object(a.useEffect)((function(){h&&(sessionStorage.setItem("fsz",h),Object(d.d)("source",h)),p&&(Object(d.c)(p),t.replace(e),c(Object(j.a)(p))),O&&t.replace(e)}),[]),Object(a.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_MARKETING_SCRIPT&&(r.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_META_PIXEL_ID),r.a.pageView())}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(i.jsx)("main",{className:"main single-product",children:Object(i.jsx)("div",{className:"page-content",children:Object(i.jsxs)("div",{className:"container-fluid p-0",children:[Object(i.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(i.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Checkout"})}),Object(i.jsx)("div",{class:"page-content pb-10 pt-10",children:Object(i.jsx)(m,{})})]})})}),Object(i.jsx)(_.a,{})]})}}}]);
//# sourceMappingURL=19.3e6a0d03.chunk.js.map