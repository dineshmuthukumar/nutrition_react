(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[11],{468:function(e,t,a){"use strict";t.a=a.p+"static/media/customer.07059049.jpg"},469:function(e,t,a){"use strict";t.a=a.p+"static/media/store.27de7930.jpg"},470:function(e,t,a){e.exports=a(530)()},530:function(e,t,a){"use strict";var c=a(531);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,a,s,i,r){if(r!==c){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return a.PropTypes=a,a}},531:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},557:function(e,t,a){"use strict";var c=a(3),s=a(140),i=a(448),r=a.n(i),l=a(470),n=a.n(l),o=a(1),d=a(5),b=["as","className","type","tooltip"],j={type:n.a.string,tooltip:n.a.bool,as:n.a.elementType},m=o.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,l=e.className,n=e.type,o=void 0===n?"valid":n,j=e.tooltip,m=void 0!==j&&j,O=Object(s.a)(e,b);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},O),{},{ref:t,className:r()(l,"".concat(o,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=j;var O=m,p=o.createContext({}),f=a(449),u=["id","bsPrefix","className","type","isValid","isInvalid","as"],x=o.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,l=e.className,n=e.type,b=void 0===n?"checkbox":n,j=e.isValid,m=void 0!==j&&j,O=e.isInvalid,x=void 0!==O&&O,h=e.as,v=void 0===h?"input":h,N=Object(s.a)(e,u),y=Object(o.useContext)(p).controlId;return i=Object(f.c)(i,"form-check-input"),Object(d.jsx)(v,Object(c.a)(Object(c.a)({},N),{},{ref:t,type:b,id:a||y,className:r()(l,i,m&&"is-valid",x&&"is-invalid")}))}));x.displayName="FormCheckInput";var h=x,v=["bsPrefix","className","htmlFor"],N=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.htmlFor,n=Object(s.a)(e,v),b=Object(o.useContext)(p).controlId;return a=Object(f.c)(a,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},n),{},{ref:t,htmlFor:l||b,className:r()(i,a)}))}));N.displayName="FormCheckLabel";var y=N;var P=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],g=o.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,l=e.bsSwitchPrefix,n=e.inline,b=void 0!==n&&n,j=e.reverse,m=void 0!==j&&j,u=e.disabled,x=void 0!==u&&u,v=e.isValid,N=void 0!==v&&v,g=e.isInvalid,T=void 0!==g&&g,C=e.feedbackTooltip,_=void 0!==C&&C,I=e.feedback,R=e.feedbackType,k=e.className,w=e.style,E=e.title,F=void 0===E?"":E,S=e.type,A=void 0===S?"checkbox":S,L=e.label,z=e.children,V=e.as,D=void 0===V?"input":V,U=Object(s.a)(e,P);i=Object(f.c)(i,"form-check"),l=Object(f.c)(l,"form-switch");var H=Object(o.useContext)(p).controlId,M=Object(o.useMemo)((function(){return{controlId:a||H}}),[H,a]),W=!z&&null!=L&&!1!==L||function(e,t){return o.Children.toArray(e).some((function(e){return o.isValidElement(e)&&e.type===t}))}(z,y),G=Object(d.jsx)(h,Object(c.a)(Object(c.a)({},U),{},{type:"switch"===A?"checkbox":A,ref:t,isValid:N,isInvalid:T,disabled:x,as:D}));return Object(d.jsx)(p.Provider,{value:M,children:Object(d.jsx)("div",{style:w,className:r()(k,W&&i,b&&"".concat(i,"-inline"),m&&"".concat(i,"-reverse"),"switch"===A&&l),children:z||Object(d.jsxs)(d.Fragment,{children:[G,W&&Object(d.jsx)(y,{title:F,children:L}),I&&Object(d.jsx)(O,{type:R,tooltip:_,children:I})]})})})}));g.displayName="FormCheck";var T=Object.assign(g,{Input:h,Label:y}),C=a(143),_=(a(467),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=o.forwardRef((function(e,t){var a,i,l=e.bsPrefix,n=e.type,b=e.size,j=e.htmlSize,m=e.id,O=e.className,u=e.isValid,x=void 0!==u&&u,h=e.isInvalid,v=void 0!==h&&h,N=e.plaintext,y=e.readOnly,P=e.as,g=void 0===P?"input":P,T=Object(s.a)(e,_),I=Object(o.useContext)(p).controlId;(l=Object(f.c)(l,"form-control"),N)?a=Object(C.a)({},"".concat(l,"-plaintext"),!0):(i={},Object(C.a)(i,l,!0),Object(C.a)(i,"".concat(l,"-").concat(b),b),a=i);return Object(d.jsx)(g,Object(c.a)(Object(c.a)({},T),{},{type:n,size:j,ref:t,readOnly:y,id:m||I,className:r()(O,a,x&&"is-valid",v&&"is-invalid","color"===n&&"".concat(l,"-color"))}))}));I.displayName="FormControl";var R=Object.assign(I,{Feedback:O}),k=a(466),w=Object(k.a)("form-floating"),E=["controlId","as"],F=o.forwardRef((function(e,t){var a=e.controlId,i=e.as,r=void 0===i?"div":i,l=Object(s.a)(e,E),n=Object(o.useMemo)((function(){return{controlId:a}}),[a]);return Object(d.jsx)(p.Provider,{value:n,children:Object(d.jsx)(r,Object(c.a)(Object(c.a)({},l),{},{ref:t}))})}));F.displayName="FormGroup";var S=F,A=a(471),L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],z=o.forwardRef((function(e,t){var a=e.as,i=void 0===a?"label":a,l=e.bsPrefix,n=e.column,b=e.visuallyHidden,j=e.className,m=e.htmlFor,O=Object(s.a)(e,L),u=Object(o.useContext)(p).controlId;l=Object(f.c)(l,"form-label");var x="col-form-label";"string"===typeof n&&(x="".concat(x," ").concat(x,"-").concat(n));var h=r()(j,l,b&&"visually-hidden",n&&x);return m=m||u,n?Object(d.jsx)(A.a,Object(c.a)({ref:t,as:"label",className:h,htmlFor:m},O)):Object(d.jsx)(i,Object(c.a)({ref:t,className:h,htmlFor:m},O))}));z.displayName="FormLabel",z.defaultProps={column:!1,visuallyHidden:!1};var V=z,D=["bsPrefix","className","id"],U=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.id,n=Object(s.a)(e,D),b=Object(o.useContext)(p).controlId;return a=Object(f.c)(a,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},n),{},{type:"range",ref:t,className:r()(i,a),id:l||b}))}));U.displayName="FormRange";var H=U,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],W=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,l=e.htmlSize,n=e.className,b=e.isValid,j=void 0!==b&&b,m=e.isInvalid,O=void 0!==m&&m,u=e.id,x=Object(s.a)(e,M),h=Object(o.useContext)(p).controlId;return a=Object(f.c)(a,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},x),{},{size:l,ref:t,className:r()(n,a,i&&"".concat(a,"-").concat(i),j&&"is-valid",O&&"is-invalid"),id:u||h}))}));W.displayName="FormSelect";var G=W,K=["bsPrefix","className","as","muted"],B=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.as,n=void 0===l?"small":l,o=e.muted,b=Object(s.a)(e,K);return a=Object(f.c)(a,"form-text"),Object(d.jsx)(n,Object(c.a)(Object(c.a)({},b),{},{ref:t,className:r()(i,a,o&&"text-muted")}))}));B.displayName="FormText";var q=B,J=o.forwardRef((function(e,t){return Object(d.jsx)(T,Object(c.a)(Object(c.a)({},e),{},{ref:t,type:"switch"}))}));J.displayName="Switch";var Y=Object.assign(J,{Input:T.Input,Label:T.Label}),X=["bsPrefix","className","children","controlId","label"],Q=o.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.children,n=e.controlId,o=e.label,b=Object(s.a)(e,X);return a=Object(f.c)(a,"form-floating"),Object(d.jsxs)(S,Object(c.a)(Object(c.a)({ref:t,className:r()(i,a),controlId:n},b),{},{children:[l,Object(d.jsx)("label",{htmlFor:n,children:o})]}))}));Q.displayName="FloatingLabel";var Z=Q,$=["className","validated","as"],ee={_ref:n.a.any,validated:n.a.bool,as:n.a.elementType},te=o.forwardRef((function(e,t){var a=e.className,i=e.validated,l=e.as,n=void 0===l?"form":l,o=Object(s.a)(e,$);return Object(d.jsx)(n,Object(c.a)(Object(c.a)({},o),{},{ref:t,className:r()(a,i&&"was-validated")}))}));te.displayName="Form",te.propTypes=ee;t.a=Object.assign(te,{Group:S,Control:R,Floating:w,Check:T,Switch:Y,Label:V,Text:q,Range:H,Select:G,FloatingLabel:Z})},603:function(e,t,a){},637:function(e,t,a){"use strict";a.r(t);a(18),a(457),a(37);var c=a(85),s=a(1),i=a(456),r=a.n(i),l=a(44),n=a(12),o=a(30),d=a(56),b=(a(458),a(141)),j=a(453),m=(a(450),a(557)),O=a(471),p=a(3),f=a(140),u=a(448),x=a.n(u),h=a(449),v=a(5),N=["bsPrefix","fluid","as","className"],y=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.fluid,s=e.as,i=void 0===s?"div":s,r=e.className,l=Object(f.a)(e,N),n=Object(h.c)(a,"container"),o="string"===typeof c?"-".concat(c):"-fluid";return Object(v.jsx)(i,Object(p.a)(Object(p.a)({ref:t},l),{},{className:x()(r,c?"".concat(n).concat(o):n)}))}));y.displayName="Container",y.defaultProps={fluid:!1};var P=y,g=a(480),T=a(109),C=(a(468),a(469),a(603),function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"contact-section",children:Object(v.jsx)(P,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 ls-m mb-4",children:Object(v.jsx)("div",{className:"grey-section d-flex align-items-center h-100",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{className:"mb-2 text-capitalize",children:"Headquarters"}),Object(v.jsxs)("p",{children:["1600 Amphitheatre Parkway",Object(v.jsx)("br",{}),"New York WC1 1BA"]}),Object(v.jsx)("h4",{className:"mb-2 text-capitalize",children:"Phone Number"}),Object(v.jsxs)("p",{children:[Object(v.jsx)(T.b,{to:"",ClassName:"btn btn-link",children:"1.800.458.56"}),Object(v.jsx)("br",{}),Object(v.jsx)(T.b,{to:"",ClassName:"btn btn-link",children:"1.800.458.56"})]}),Object(v.jsx)("h4",{className:"mb-2 text-capitalize",children:"Support"}),Object(v.jsxs)("p",{className:"mb-4",children:[Object(v.jsx)(T.b,{to:"",ClassName:"btn btn-link",children:"support@your-domain.com"}),Object(v.jsx)("br",{}),Object(v.jsx)(T.b,{to:"",ClassName:"btn btn-link",children:"help@your-domain.com"})]})]})})}),Object(v.jsx)("div",{className:"col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4",children:Object(v.jsxs)("div",{className:"w-100 offset-sm-1",children:[Object(v.jsx)(g.a,{children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)("h2",{className:"ls-m font-weight-bold",children:"Let\u2019s Connect"}),Object(v.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"})]})}),Object(v.jsxs)("div",{class:"change_pass",children:[Object(v.jsxs)(g.a,{children:[Object(v.jsx)(O.a,{sm:3,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(v.jsx)(m.a.Label,{children:"Name"}),Object(v.jsx)(m.a.Control,{type:"text",placeholder:"name"})]})})}),Object(v.jsx)(O.a,{sm:3,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(v.jsx)(m.a.Label,{children:"Mobile Number"}),Object(v.jsx)(m.a.Control,{type:"tel",placeholder:"Mobile Number"})]})})}),Object(v.jsx)(O.a,{sm:3,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(v.jsx)(m.a.Label,{children:"Email Address"}),Object(v.jsx)(m.a.Control,{type:"text",placeholder:"Email Address"})]})})})]}),Object(v.jsx)(g.a,{children:Object(v.jsx)(O.a,{sm:9,children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(m.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(v.jsx)(m.a.Label,{children:"Comments"}),Object(v.jsx)(m.a.Control,{as:"textarea",rows:3})]})})})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(O.a,{md:{span:6,offset:3},children:Object(v.jsx)("button",{type:"submit",class:"btn-product btn-cart wid_200",children:"Contact Us"})})})]})]})})]})})})})}),_=a(454);t.default=function(){var e=Object(n.i)().url,t=Object(n.g)(),a=Object(l.c)(),i=Object(b.a)(),m=i.get("fsz"),O=i.get("token"),p=i.get("_ga"),f=Object(s.useState)([]),u=Object(c.a)(f,2);u[0],u[1];return Object(s.useEffect)((function(){m&&(sessionStorage.setItem("fsz",m),Object(o.d)("source",m)),O&&(Object(o.c)(O),t.replace(e),a(Object(d.a)(O))),p&&t.replace(e)}),[]),Object(s.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_MARKETING_SCRIPT&&(r.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_META_PIXEL_ID),r.a.pageView())}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(v.jsx)("main",{className:"main single-product",children:Object(v.jsx)("div",{className:"page-content",children:Object(v.jsxs)("div",{className:"container-fluid p-0",children:[Object(v.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(v.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Contact Us"})}),Object(v.jsx)("div",{class:"page-content pb-10 pt-10",children:Object(v.jsx)(C,{})})]})})}),Object(v.jsx)(_.a,{})]})}}}]);
//# sourceMappingURL=11.35ad95d0.chunk.js.map