(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[19],{455:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));c(3);var n=c(87),i=c.n(n),a=c(32),o=c(88),s=c(57),l=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(a.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(a.a)()||o.a.dispatch(Object(s.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(a.b)(),Promise.reject(e)}));var d=l,r=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});r.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(a.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),r.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(a.a)()||o.a.dispatch(Object(s.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(a.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,c=e.parent_slug;return d.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},480:function(e,t,c){"use strict";var n=c(86),i=c(1),a=c(14),o=c(110),s=(c(27),c(144)),l=c(45),d=c(57),r=c(5);t.a=function(e){var t=e.ProductDetails;e.key;console.log(t,"ProductDetails");Object(a.g)();var c=Object(l.c)(),u=Object(l.d)((function(e){return e})),j=u.user,b=u.cart,v=null!==b&&void 0!==b&&b.data?null===b||void 0===b?void 0:b.data:null,O=Object(i.useState)(!1),p=Object(n.a)(O,2),h=p[0],m=(p[1],Object(i.useState)(!1)),x=Object(n.a)(m,2),f=x[0],g=x[1],_=Object(i.useState)(!1),N=Object(n.a)(_,2),A=N[0],P=N[1];return Object(i.useEffect)((function(){if(j){var e,c=null===v||void 0===v||null===(e=v.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));g(!!c)}}),[v]),Object(i.useEffect)((function(){console.log(A,"status"),null!==j&&void 0!==j&&j.login&&A&&c(Object(d.b)())}),[A]),Object(r.jsxs)("div",{class:"product text-center product-with-qty",children:[Object(r.jsxs)("figure",{class:"product-media",children:[null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(o.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),children:Object(r.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}):Object(r.jsx)(o.b,{to:"/product/".concat(null===t||void 0===t?void 0:t._id),children:Object(r.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===t||void 0===t?void 0:t.photos[0]),alt:"product",class:"img-fluid",width:"280",height:"315"})}),(null===h||void 0===h?void 0:h.discount)>0&&Object(r.jsx)("div",{class:"product-label-group",children:Object(r.jsxs)("label",{class:"product-label label-sale",children:[null===h||void 0===h?void 0:h.discount,"% Off"]})})]}),Object(r.jsxs)("div",{class:"product-details",children:[Object(r.jsx)("h3",{class:"product-name",children:Object(r.jsx)("a",{href:"#",children:null===t||void 0===t?void 0:t.name})}),Object(r.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(r.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(r.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(r.jsx)("div",{class:"ratings-container",children:Object(r.jsxs)("div",{class:"ratings-full",children:[Object(r.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(r.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(r.jsx)("div",{class:"product-action",children:null!==j&&void 0!==j&&j.login?null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(o.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(r.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){var e;f||c(Object(s.a)(t._id,"BASIC",null===t||void 0===t||null===(e=t.productType[0])||void 0===e?void 0:e.saleAmount,P))},children:[Object(r.jsx)("i",{class:"d-icon-bag"}),Object(r.jsx)("span",{children:"Add to Bag"})]}):null!==t&&void 0!==t&&t.isFree?Object(r.jsx)(o.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),class:"btn-product btn-cart ls-l",children:"Free"}):Object(r.jsxs)(o.b,{to:"/Login",class:"btn-product btn-cart ls-l",children:[" ","Cart"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},484:function(e,t,c){"use strict";var n=c(3),i=c(141),a=(c(1),c(679)),o=c(703),s=c(453),l=(c(485),c(5)),d=["tooltip","title","name","type","className","required","boxRequired","requiredBottom","restrictChar","scrollIncrese","placeholder","onChange","value","isPop","lengthValue","popText"];t.a=function(e){var t=e.tooltip,c=e.title,r=e.name,u=void 0===r?"":r,j=e.type,b=void 0===j?"text":j,v=e.className,O=void 0===v?"":v,p=e.required,h=void 0!==p&&p,m=e.boxRequired,x=void 0!==m&&m,f=e.requiredBottom,g=void 0!==f&&f,_=e.restrictChar,N=void 0!==_&&_,A=e.scrollIncrese,P=void 0!==A&&A,E=e.placeholder,R=void 0===E?" ":E,C=e.onChange,S=void 0===C?function(){}:C,y=e.value,T=e.isPop,w=void 0!==T&&T,L=e.lengthValue,k=void 0===L?100:L,F=e.popText,I=Object(i.a)(e,d),D=Math.floor(100*Math.random()+1),q=Object(l.jsx)(a.a,{children:Object(l.jsx)(a.a.Body,{children:Object(l.jsx)("p",{className:"password-terms",children:F})})});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("label",{htmlFor:"floatingInput".concat(D),className:"input-title",children:[c," ",t&&t]})," ",!g&&h&&Object(l.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),w?Object(l.jsx)(o.a,{trigger:"focus",placement:"top",overlay:q,children:Object(l.jsx)("input",Object(n.a)(Object(n.a)({},I),{},{id:"floatingInput".concat(D),type:b,name:u,className:"form-control ".concat(h&&"border-danger"," ").concat(O," "),placeholder:R,onChange:S,value:y,autoComplete:"off"}))}):Object(l.jsx)("input",Object(n.a)(Object(n.a)({},I),{},{id:"floatingInput".concat(D),type:b,name:u,className:"form-control ".concat((h||x)&&"border-danger","\n            ").concat(O),placeholder:R,onChange:S,value:y,maxLength:k,onKeyDown:N&&s.a,autoComplete:"off",onWheel:P&&function(e){return e.currentTarget.blur()}})),g&&Object(l.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]})}},485:function(e,t,c){},486:function(e,t,c){"use strict";c(1);var n=c(511),i=c.n(n),a=(c(512),c(487),c(5));t.a=function(e){var t=e.defaultCountry,c=void 0===t?"in":t,n=e.onChange,o=void 0===n?function(){}:n,s=e.value,l=e.required,d=void 0!==l&&l,r=e.className,u=void 0===r?"":r,j=e.onEnterKeyPress,b=void 0===j?function(){}:j,v=e.title,O="";return O+=u,O+=d?" border-danger":"",Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"input-title",children:v})," ",d&&Object(a.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),Object(a.jsx)(i.a,{onEnterKeyPress:b,country:c,value:s,onChange:o,inputClass:O})]})}},487:function(e,t,c){},649:function(e,t,c){},704:function(e,t,c){"use strict";c.r(t);var n=c(7),i=(c(472),c(20)),a=c(86),o=c(1),s=(c(227),c(45)),l=c(14),d=c(32),r=c(57),u=(c(455),c(145)),j=c(457),b=(c(143),c(3)),v=(c(464),c(110)),O=(c(649),c(87),c(453)),p=c(144),h=(c(480),c(484),c(486),c(478),c(27)),m=(c(46),c(5)),x=function(){var e,t,c,l,d,r,u,j,x,f,g,_,N=Object(s.c)(),A=Object(o.useState)(!1),P=Object(a.a)(A,2),E=(P[0],P[1],Object(s.d)((function(e){return e}))),R=E.user,C=E.cart,S=Object(o.useState)({}),y=Object(a.a)(S,2),T=(y[0],y[1]),w=Object(o.useState)({}),L=Object(a.a)(w,2),k=(L[0],L[1]),F=Object(o.useState)({}),I=Object(a.a)(F,2),D=(I[0],I[1]),q=Object(o.useState)({name:null===R||void 0===R||null===(e=R.data)||void 0===e?void 0:e.name,email:null===R||void 0===R||null===(t=R.data)||void 0===t?void 0:t.email}),U=Object(a.a)(q,2),B=(U[0],U[1],Object(o.useState)({name:!1,valid_name:!1,email:!1,valid_email:!1})),K=Object(a.a)(B,2),M=(K[0],K[1],Object(o.useState)({address:null===R||void 0===R||null===(c=R.data)||void 0===c?void 0:c.address,city:null===R||void 0===R||null===(l=R.data)||void 0===l||null===(d=l.city)||void 0===d?void 0:d._id,state:null===R||void 0===R||null===(r=R.data)||void 0===r||null===(u=r.state)||void 0===u?void 0:u._id,pincode:null===R||void 0===R||null===(j=R.data)||void 0===j?void 0:j.pincode})),H=Object(a.a)(M,2),V=H[0],W=H[1],z=Object(o.useState)({address:!1,valid_address:!1,city:!1,valid_city:!1,state:!1,valid_state:!1,pincode:!0,valid_pincode:!1}),J=Object(a.a)(z,2);J[0],J[1];Object(o.useEffect)((function(){var e,t;Q(),X(),W(Object(b.a)(Object(b.a)({},V),{},{state:null===R||void 0===R||null===(e=R.data)||void 0===e||null===(t=e.state)||void 0===t?void 0:t._id})),G()}),[]);var G=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c,i,a,o,s,l,d,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===R||void 0===R||null===(t=R.data)||void 0===t||null===(c=t.state)||void 0===c||!c._id){e.next=6;break}return e.next=3,Object(h.q)(null===R||void 0===R||null===(i=R.data)||void 0===i||null===(a=i.state)||void 0===a?void 0:a._id);case 3:r=e.sent,k(null===r||void 0===r||null===(o=r.data)||void 0===o||null===(s=o.responseData)||void 0===s?void 0:s.cities),W(Object(b.a)(Object(b.a)({},V),{},{city:null===R||void 0===R||null===(l=R.data)||void 0===l||null===(d=l.city)||void 0===d?void 0:d._id}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.v)();case 2:i=e.sent,T(null===i||void 0===i||null===(t=i.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.states);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t,c,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.m)();case 3:i=e.sent,D(null===i||void 0===i||null===(t=i.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.product),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("section",{className:"customer-section",children:[Object(m.jsx)("div",{className:"step-by pr-4 pl-4",children:Object(m.jsx)("h3",{className:"title title-simple title-step active",children:Object(m.jsx)("a",{href:"#",children:"Shopping Cart"})})}),Object(m.jsx)("div",{className:"container mt-7 mb-2",children:Object(m.jsx)("div",{className:"row align-items-center",children:Object(m.jsxs)("div",{className:"col-lg-12 col-md-12 pr-lg-4",children:[(null===C||void 0===C||null===(x=C.data)||void 0===x||null===(f=x.cartProductDetails)||void 0===f?void 0:f.length)>0?Object(m.jsxs)("table",{className:"shop-table cart-table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsx)("span",{children:"Product"})}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:Object(m.jsx)("span",{children:"Quantity"})}),Object(m.jsx)("th",{children:Object(m.jsx)("span",{children:"Price"})}),Object(m.jsx)("th",{children:"Subtotal"}),Object(m.jsx)("th",{children:"Remove"})]})}),Object(m.jsx)("tbody",{children:null===C||void 0===C||null===(g=C.data)||void 0===g||null===(_=g.cartProductDetails)||void 0===_?void 0:_.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"product-thumbnail",children:Object(m.jsx)("figure",{children:Object(m.jsx)("a",{href:"product-simple.html",children:Object(m.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.photos[0]),width:"100",height:"100",alt:"product"})})})}),Object(m.jsx)("td",{className:"product-name",children:Object(m.jsx)("div",{className:"product-name-section",children:Object(m.jsx)("a",{href:"product-simple.html",children:null===e||void 0===e?void 0:e.name})})}),Object(m.jsx)("td",{className:"product-quantity",children:null===e||void 0===e?void 0:e.qty}),Object(m.jsx)("td",{className:"product-subtotal",children:Object(m.jsx)("span",{className:"amount",children:Object(O.b)(null===e||void 0===e?void 0:e.saleAmount,"INR")})}),Object(m.jsx)("td",{className:"product-subtotal",children:Object(m.jsx)("span",{className:"amount",children:Object(O.b)((null===e||void 0===e?void 0:e.qty)*(null===e||void 0===e?void 0:e.saleAmount),"INR")})}),Object(m.jsx)("td",{className:"product-close",children:Object(m.jsx)("a",{className:"product-remove",title:"Remove this product",onClick:function(){return N(Object(p.d)(null===e||void 0===e?void 0:e._id))},children:Object(m.jsx)("i",{className:"fas fa-times"})})})]},t)}))})]}):"No Items Found",Object(m.jsx)("div",{className:"cart-actions-right mb-6 pt-4",children:function(){var e,t;if((null===C||void 0===C||null===(e=C.data)||void 0===e||null===(t=e.cart)||void 0===t?void 0:t.length)>0)return Object(m.jsxs)(v.b,{to:"/checkout",className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:["Continue Shopping ",Object(m.jsx)("i",{className:"d-icon-arrow-right"})]})}()})]})})})]})})},f=c(458);t.default=function(){var e=Object(l.i)().url,t=Object(l.g)(),c=Object(s.c)(),n=Object(u.a)(),i=n.get("fsz"),b=n.get("token"),v=(n.get("_ga"),Object(o.useState)([])),O=Object(a.a)(v,2);O[0],O[1];return Object(o.useEffect)((function(){i&&(sessionStorage.setItem("fsz",i),Object(d.d)("source",i)),b&&(Object(d.c)(b),t.replace(e),c(Object(r.c)(b)))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(m.jsx)("main",{className:"main single-product",children:Object(m.jsx)("div",{className:"page-content",children:Object(m.jsxs)("div",{className:"container-fluid p-0",children:[Object(m.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(m.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"SHOPPING CART"})}),Object(m.jsx)("div",{class:"page-content mt-10 pt-10",children:Object(m.jsx)(x,{})})]})})}),Object(m.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=19.f77e7402.chunk.js.map