(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[20],{457:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));c(3);var a=c(87),s=c.n(a),i=c(32),r=c(88),n=c(57),o=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||r.a.dispatch(Object(n.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(e)}));var l=o,d=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||r.a.dispatch(Object(n.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var b=function(e){var t=e.page,c=e.parent_slug;return l.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},469:function(e,t,c){e.exports=c(492)()},481:function(e,t,c){"use strict";t.a=c.p+"static/media/customer.07059049.jpg"},482:function(e,t,c){"use strict";t.a=c.p+"static/media/store.27de7930.jpg"},492:function(e,t,c){"use strict";var a=c(493);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,c,s,i,r){if(r!==a){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var c={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return c.PropTypes=c,c}},493:function(e,t,c){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},532:function(e,t,c){"use strict";var a=c(3),s=c(141),i=c(453),r=c.n(i),n=c(469),o=c.n(n),l=c(1),d=c(4),b=["as","className","type","tooltip"],j={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},m=l.forwardRef((function(e,t){var c=e.as,i=void 0===c?"div":c,n=e.className,o=e.type,l=void 0===o?"valid":o,j=e.tooltip,m=void 0!==j&&j,O=Object(s.a)(e,b);return Object(d.jsx)(i,Object(a.a)(Object(a.a)({},O),{},{ref:t,className:r()(n,"".concat(l,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=j;var O=m,p=l.createContext({}),u=c(454),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=l.forwardRef((function(e,t){var c=e.id,i=e.bsPrefix,n=e.className,o=e.type,b=void 0===o?"checkbox":o,j=e.isValid,m=void 0!==j&&j,O=e.isInvalid,v=void 0!==O&&O,h=e.as,x=void 0===h?"input":h,_=Object(s.a)(e,f),N=Object(l.useContext)(p).controlId;return i=Object(u.c)(i,"form-check-input"),Object(d.jsx)(x,Object(a.a)(Object(a.a)({},_),{},{ref:t,type:b,id:c||N,className:r()(n,i,m&&"is-valid",v&&"is-invalid")}))}));v.displayName="FormCheckInput";var h=v,x=["bsPrefix","className","htmlFor"],_=l.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,n=e.htmlFor,o=Object(s.a)(e,x),b=Object(l.useContext)(p).controlId;return c=Object(u.c)(c,"form-check-label"),Object(d.jsx)("label",Object(a.a)(Object(a.a)({},o),{},{ref:t,htmlFor:n||b,className:r()(i,c)}))}));_.displayName="FormCheckLabel";var N=_;var P=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],E=l.forwardRef((function(e,t){var c=e.id,i=e.bsPrefix,n=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,j=e.reverse,m=void 0!==j&&j,f=e.disabled,v=void 0!==f&&f,x=e.isValid,_=void 0!==x&&x,E=e.isInvalid,T=void 0!==E&&E,R=e.feedbackTooltip,y=void 0!==R&&R,A=e.feedback,C=e.feedbackType,g=e.className,S=e.style,I=e.title,w=void 0===I?"":I,L=e.type,F=void 0===L?"checkbox":L,k=e.label,U=e.children,D=e.as,V=void 0===D?"input":D,B=Object(s.a)(e,P);i=Object(u.c)(i,"form-check"),n=Object(u.c)(n,"form-switch");var M=Object(l.useContext)(p).controlId,z=Object(l.useMemo)((function(){return{controlId:c||M}}),[M,c]),H=!U&&null!=k&&!1!==k||function(e,t){return l.Children.toArray(e).some((function(e){return l.isValidElement(e)&&e.type===t}))}(U,N),K=Object(d.jsx)(h,Object(a.a)(Object(a.a)({},B),{},{type:"switch"===F?"checkbox":F,ref:t,isValid:_,isInvalid:T,disabled:v,as:V}));return Object(d.jsx)(p.Provider,{value:z,children:Object(d.jsx)("div",{style:S,className:r()(g,H&&i,b&&"".concat(i,"-inline"),m&&"".concat(i,"-reverse"),"switch"===F&&n),children:U||Object(d.jsxs)(d.Fragment,{children:[K,H&&Object(d.jsx)(N,{title:w,children:k}),A&&Object(d.jsx)(O,{type:C,tooltip:y,children:A})]})})})}));E.displayName="FormCheck";var T=Object.assign(E,{Input:h,Label:N}),R=c(143),y=(c(478),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),A=l.forwardRef((function(e,t){var c,i,n=e.bsPrefix,o=e.type,b=e.size,j=e.htmlSize,m=e.id,O=e.className,f=e.isValid,v=void 0!==f&&f,h=e.isInvalid,x=void 0!==h&&h,_=e.plaintext,N=e.readOnly,P=e.as,E=void 0===P?"input":P,T=Object(s.a)(e,y),A=Object(l.useContext)(p).controlId;(n=Object(u.c)(n,"form-control"),_)?c=Object(R.a)({},"".concat(n,"-plaintext"),!0):(i={},Object(R.a)(i,n,!0),Object(R.a)(i,"".concat(n,"-").concat(b),b),c=i);return Object(d.jsx)(E,Object(a.a)(Object(a.a)({},T),{},{type:o,size:j,ref:t,readOnly:N,id:m||A,className:r()(O,c,v&&"is-valid",x&&"is-invalid","color"===o&&"".concat(n,"-color"))}))}));A.displayName="FormControl";var C=Object.assign(A,{Feedback:O}),g=c(471),S=Object(g.a)("form-floating"),I=["controlId","as"],w=l.forwardRef((function(e,t){var c=e.controlId,i=e.as,r=void 0===i?"div":i,n=Object(s.a)(e,I),o=Object(l.useMemo)((function(){return{controlId:c}}),[c]);return Object(d.jsx)(p.Provider,{value:o,children:Object(d.jsx)(r,Object(a.a)(Object(a.a)({},n),{},{ref:t}))})}));w.displayName="FormGroup";var L=w,F=c(467),k=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],U=l.forwardRef((function(e,t){var c=e.as,i=void 0===c?"label":c,n=e.bsPrefix,o=e.column,b=e.visuallyHidden,j=e.className,m=e.htmlFor,O=Object(s.a)(e,k),f=Object(l.useContext)(p).controlId;n=Object(u.c)(n,"form-label");var v="col-form-label";"string"===typeof o&&(v="".concat(v," ").concat(v,"-").concat(o));var h=r()(j,n,b&&"visually-hidden",o&&v);return m=m||f,o?Object(d.jsx)(F.a,Object(a.a)({ref:t,as:"label",className:h,htmlFor:m},O)):Object(d.jsx)(i,Object(a.a)({ref:t,className:h,htmlFor:m},O))}));U.displayName="FormLabel",U.defaultProps={column:!1,visuallyHidden:!1};var D=U,V=["bsPrefix","className","id"],B=l.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,n=e.id,o=Object(s.a)(e,V),b=Object(l.useContext)(p).controlId;return c=Object(u.c)(c,"form-range"),Object(d.jsx)("input",Object(a.a)(Object(a.a)({},o),{},{type:"range",ref:t,className:r()(i,c),id:n||b}))}));B.displayName="FormRange";var M=B,z=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],H=l.forwardRef((function(e,t){var c=e.bsPrefix,i=e.size,n=e.htmlSize,o=e.className,b=e.isValid,j=void 0!==b&&b,m=e.isInvalid,O=void 0!==m&&m,f=e.id,v=Object(s.a)(e,z),h=Object(l.useContext)(p).controlId;return c=Object(u.c)(c,"form-select"),Object(d.jsx)("select",Object(a.a)(Object(a.a)({},v),{},{size:n,ref:t,className:r()(o,c,i&&"".concat(c,"-").concat(i),j&&"is-valid",O&&"is-invalid"),id:f||h}))}));H.displayName="FormSelect";var K=H,W=["bsPrefix","className","as","muted"],G=l.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,n=e.as,o=void 0===n?"small":n,l=e.muted,b=Object(s.a)(e,W);return c=Object(u.c)(c,"form-text"),Object(d.jsx)(o,Object(a.a)(Object(a.a)({},b),{},{ref:t,className:r()(i,c,l&&"text-muted")}))}));G.displayName="FormText";var q=G,J=l.forwardRef((function(e,t){return Object(d.jsx)(T,Object(a.a)(Object(a.a)({},e),{},{ref:t,type:"switch"}))}));J.displayName="Switch";var Y=Object.assign(J,{Input:T.Input,Label:T.Label}),X=["bsPrefix","className","children","controlId","label"],Q=l.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,n=e.children,o=e.controlId,l=e.label,b=Object(s.a)(e,X);return c=Object(u.c)(c,"form-floating"),Object(d.jsxs)(L,Object(a.a)(Object(a.a)({ref:t,className:r()(i,c),controlId:o},b),{},{children:[n,Object(d.jsx)("label",{htmlFor:o,children:l})]}))}));Q.displayName="FloatingLabel";var Z=Q,$=["className","validated","as"],ee={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},te=l.forwardRef((function(e,t){var c=e.className,i=e.validated,n=e.as,o=void 0===n?"form":n,l=Object(s.a)(e,$);return Object(d.jsx)(o,Object(a.a)(Object(a.a)({},l),{},{ref:t,className:r()(c,i&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:L,Control:C,Floating:S,Check:T,Switch:Y,Label:D,Text:q,Range:M,Select:K,FloatingLabel:Z})},615:function(e,t,c){"use strict";var a=c(3),s=c(141),i=c(453),r=c.n(i),n=c(1),o=c(454),l=c(4),d=["bsPrefix","fluid","as","className"],b=n.forwardRef((function(e,t){var c=e.bsPrefix,i=e.fluid,n=e.as,b=void 0===n?"div":n,j=e.className,m=Object(s.a)(e,d),O=Object(o.c)(c,"container"),p="string"===typeof i?"-".concat(i):"-fluid";return Object(l.jsx)(b,Object(a.a)(Object(a.a)({ref:t},m),{},{className:r()(j,i?"".concat(O).concat(p):O)}))}));b.displayName="Container",b.defaultProps={fluid:!1},t.a=b},674:function(e,t,c){},718:function(e,t,c){"use strict";c.r(t);c(7),c(473),c(20);var a=c(86),s=c(1),i=c(229),r=c.n(i),n=c(45),o=c(14),l=c(32),d=c(57),b=(c(457),c(145)),j=c(459),m=(c(464),c(532)),O=c(467),p=c(615),u=c(480),f=c(110),v=(c(481),c(482),c(674),c(4)),h=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"contact-section",children:Object(v.jsx)(p.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 ls-m mb-4",children:Object(v.jsx)("div",{className:"grey-section d-flex align-items-center h-100",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{className:"mb-2 text-capitalize",children:"Headquarters"}),Object(v.jsxs)("p",{children:["1600 Amphitheatre Parkway",Object(v.jsx)("br",{}),"New York WC1 1BA"]}),Object(v.jsx)("h4",{className:"mb-2 text-capitalize",children:"Phone Number"}),Object(v.jsxs)("p",{children:[Object(v.jsx)(f.b,{to:"",slassName:"btn btn-link",children:"1.800.458.56"}),Object(v.jsx)("br",{}),Object(v.jsx)(f.b,{to:"",className:"btn btn-link",children:"1.800.458.56"})]}),Object(v.jsx)("h4",{className:"mb-2 text-capitalize",children:"Support"}),Object(v.jsxs)("p",{className:"mb-4",children:[Object(v.jsx)(f.b,{to:"",className:"btn btn-link",children:"support@your-domain.com"}),Object(v.jsx)("br",{}),Object(v.jsx)(f.b,{to:"",className:"btn btn-link",children:"help@your-domain.com"})]})]})})}),Object(v.jsx)("div",{className:"col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4",children:Object(v.jsxs)("div",{className:"w-100 offset-sm-1",children:[Object(v.jsx)(u.a,{children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)("h2",{className:"ls-m font-weight-bold",children:"Let\u2019s Connect"}),Object(v.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"})]})}),Object(v.jsxs)("div",{class:"change_pass",children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)(O.a,{sm:3,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(v.jsx)(m.a.Label,{children:"Name"}),Object(v.jsx)(m.a.Control,{type:"text",placeholder:"name"})]})})}),Object(v.jsx)(O.a,{sm:3,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(v.jsx)(m.a.Label,{children:"Mobile Number"}),Object(v.jsx)(m.a.Control,{type:"tel",placeholder:"Mobile Number"})]})})}),Object(v.jsx)(O.a,{sm:3,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(v.jsx)(m.a.Label,{children:"Email Address"}),Object(v.jsx)(m.a.Control,{type:"text",placeholder:"Email Address"})]})})})]}),Object(v.jsx)(u.a,{children:Object(v.jsx)(O.a,{sm:9,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(v.jsx)(m.a.Label,{children:"Comments"}),Object(v.jsx)(m.a.Control,{as:"textarea",rows:3})]})})})}),Object(v.jsx)(u.a,{children:Object(v.jsx)(O.a,{md:{span:6,offset:3},children:Object(v.jsx)("button",{type:"submit",class:"btn-product btn-cart wid_200",children:"Contact Us"})})})]})]})})]})})})})},x=c(460);t.default=function(){var e=Object(o.i)().url,t=Object(o.g)(),c=Object(n.c)(),i=Object(b.a)(),m=i.get("fsz"),O=i.get("token"),p=i.get("_ga"),u=Object(s.useState)([]),f=Object(a.a)(u,2);f[0],f[1];return Object(s.useEffect)((function(){m&&(sessionStorage.setItem("fsz",m),Object(l.d)("source",m)),O&&(Object(l.c)(O),t.replace(e),c(Object(d.c)(O))),p&&t.replace(e)}),[]),Object(s.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(r.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),r.a.pageView())}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(v.jsx)("main",{className:"main single-product",children:Object(v.jsx)("div",{className:"page-content",children:Object(v.jsxs)("div",{className:"container-fluid p-0",children:[Object(v.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(v.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Contact Us"})}),Object(v.jsx)("div",{class:"page-content pb-10 pt-10",children:Object(v.jsx)(h,{})})]})})}),Object(v.jsx)(x.a,{})]})}}}]);
//# sourceMappingURL=20.cf8d7b0d.chunk.js.map