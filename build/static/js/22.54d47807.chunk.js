(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[22],{506:function(e,a,t){"use strict";a.a=t.p+"static/media/customer.07059049.jpg"},507:function(e,a,t){"use strict";a.a=t.p+"static/media/store.27de7930.jpg"},512:function(e,a,t){"use strict";var c=t(3),n=t(142),i=t(4),s=(t(1),t(769)),l=t(791),r=t(480);t(513);a.a=function(e){var a=e.tooltip,t=e.title,o=e.name,d=void 0===o?"":o,b=e.type,j=void 0===b?"text":b,m=e.className,O=void 0===m?"":m,u=e.required,v=void 0!==u&&u,p=e.boxRequired,f=void 0!==p&&p,h=e.requiredBottom,x=void 0!==h&&h,_=e.restrictChar,g=void 0!==_&&_,N=e.scrollIncrese,y=void 0!==N&&N,C=e.placeholder,P=void 0===C?" ":C,I=e.onChange,R=void 0===I?function(){}:I,E=e.value,T=e.isPop,S=void 0!==T&&T,A=e.lengthValue,w=void 0===A?100:A,F=e.popText,k=Object(n.a)(e,["tooltip","title","name","type","className","required","boxRequired","requiredBottom","restrictChar","scrollIncrese","placeholder","onChange","value","isPop","lengthValue","popText"]),L=Math.floor(100*Math.random()+1),M=Object(i.jsx)(s.a,{children:Object(i.jsx)(s.a.Body,{children:Object(i.jsx)("p",{className:"password-terms",children:F})})});return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("label",{htmlFor:"floatingInput".concat(L),className:"input-title",children:[t," ",a&&a]})," ",!x&&v&&Object(i.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),S?Object(i.jsx)(l.a,{trigger:"focus",placement:"top",overlay:M,children:Object(i.jsx)("input",Object(c.a)(Object(c.a)({},k),{},{id:"floatingInput".concat(L),type:j,name:d,className:"form-control ".concat(v&&"border-danger"," ").concat(O," "),placeholder:P,onChange:R,value:E,autoComplete:"off"}))}):Object(i.jsx)("input",Object(c.a)(Object(c.a)({},k),{},{id:"floatingInput".concat(L),type:j,name:d,className:"form-control ".concat((v||f)&&"border-danger","\n            ").concat(O),placeholder:P,onChange:R,value:E,maxLength:w,onKeyDown:g&&r.a,autoComplete:"off",onWheel:y&&function(e){return e.currentTarget.blur()}})),x&&Object(i.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]})}},513:function(e,a,t){},514:function(e,a,t){"use strict";var c=t(4),n=(t(1),t(555)),i=t.n(n);t(556),t(515);a.a=function(e){var a=e.defaultCountry,t=void 0===a?"in":a,n=e.onChange,s=void 0===n?function(){}:n,l=e.value,r=e.required,o=void 0!==r&&r,d=e.className,b=void 0===d?"":d,j=e.disabled,m=void 0!==j&&j,O=e.onEnterKeyPress,u=void 0===O?function(){}:O,v=e.title,p="";return p+=b,p+=o?" border-danger":"",Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{className:"input-title",children:v})," ",o&&Object(c.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),Object(c.jsx)(i.a,{onEnterKeyPress:u,country:t,value:l,onChange:s,inputClass:p,disabled:m})]})}},515:function(e,a,t){},599:function(e,a,t){"use strict";var c=t(3),n=t(142),i=t(475),s=t.n(i),l=t(90),r=t.n(l),o=t(1),d=t(4),b={type:r.a.string,tooltip:r.a.bool,as:r.a.elementType},j=o.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,l=e.className,r=e.type,o=void 0===r?"valid":r,b=e.tooltip,j=void 0!==b&&b,m=Object(n.a)(e,["as","className","type","tooltip"]);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},m),{},{ref:a,className:s()(l,"".concat(o,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=b;var m=j,O=o.createContext({}),u=t(476),v=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,l=e.className,r=e.type,b=void 0===r?"checkbox":r,j=e.isValid,m=void 0!==j&&j,v=e.isInvalid,p=void 0!==v&&v,f=e.as,h=void 0===f?"input":f,x=Object(n.a)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),_=Object(o.useContext)(O).controlId;return i=Object(u.c)(i,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},x),{},{ref:a,type:b,id:t||_,className:s()(l,i,m&&"is-valid",p&&"is-invalid")}))}));v.displayName="FormCheckInput";var p=v,f=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.htmlFor,r=Object(n.a)(e,["bsPrefix","className","htmlFor"]),b=Object(o.useContext)(O).controlId;return t=Object(u.c)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},r),{},{ref:a,htmlFor:l||b,className:s()(i,t)}))}));f.displayName="FormCheckLabel";var h=f;var x=o.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,l=e.bsSwitchPrefix,r=e.inline,b=void 0!==r&&r,j=e.reverse,v=void 0!==j&&j,f=e.disabled,x=void 0!==f&&f,_=e.isValid,g=void 0!==_&&_,N=e.isInvalid,y=void 0!==N&&N,C=e.feedbackTooltip,P=void 0!==C&&C,I=e.feedback,R=e.feedbackType,E=e.className,T=e.style,S=e.title,A=void 0===S?"":S,w=e.type,F=void 0===w?"checkbox":w,k=e.label,L=e.children,M=e.as,V=void 0===M?"input":M,q=Object(n.a)(e,["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"]);i=Object(u.c)(i,"form-check"),l=Object(u.c)(l,"form-switch");var D=Object(o.useContext)(O).controlId,z=Object(o.useMemo)((function(){return{controlId:t||D}}),[D,t]),U=!L&&null!=k&&!1!==k||function(e,a){return o.Children.toArray(e).some((function(e){return o.isValidElement(e)&&e.type===a}))}(L,h),K=Object(d.jsx)(p,Object(c.a)(Object(c.a)({},q),{},{type:"switch"===F?"checkbox":F,ref:a,isValid:g,isInvalid:y,disabled:x,as:V}));return Object(d.jsx)(O.Provider,{value:z,children:Object(d.jsx)("div",{style:T,className:s()(E,U&&i,b&&"".concat(i,"-inline"),v&&"".concat(i,"-reverse"),"switch"===F&&l),children:L||Object(d.jsxs)(d.Fragment,{children:[K,U&&Object(d.jsx)(h,{title:A,children:k}),I&&Object(d.jsx)(m,{type:R,tooltip:P,children:I})]})})})}));x.displayName="FormCheck";var _=Object.assign(x,{Input:p,Label:h}),g=t(143),N=(t(505),o.forwardRef((function(e,a){var t,i,l=e.bsPrefix,r=e.type,b=e.size,j=e.htmlSize,m=e.id,v=e.className,p=e.isValid,f=void 0!==p&&p,h=e.isInvalid,x=void 0!==h&&h,_=e.plaintext,N=e.readOnly,y=e.as,C=void 0===y?"input":y,P=Object(n.a)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=Object(o.useContext)(O).controlId;(l=Object(u.c)(l,"form-control"),_)?t=Object(g.a)({},"".concat(l,"-plaintext"),!0):(i={},Object(g.a)(i,l,!0),Object(g.a)(i,"".concat(l,"-").concat(b),b),t=i);return Object(d.jsx)(C,Object(c.a)(Object(c.a)({},P),{},{type:r,size:j,ref:a,readOnly:N,id:m||I,className:s()(v,t,f&&"is-valid",x&&"is-invalid","color"===r&&"".concat(l,"-color"))}))})));N.displayName="FormControl";var y=Object.assign(N,{Feedback:m}),C=t(500),P=Object(C.a)("form-floating"),I=o.forwardRef((function(e,a){var t=e.controlId,i=e.as,s=void 0===i?"div":i,l=Object(n.a)(e,["controlId","as"]),r=Object(o.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(O.Provider,{value:r,children:Object(d.jsx)(s,Object(c.a)(Object(c.a)({},l),{},{ref:a}))})}));I.displayName="FormGroup";var R=I,E=t(499),T=o.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,l=e.bsPrefix,r=e.column,b=void 0!==r&&r,j=e.visuallyHidden,m=void 0!==j&&j,v=e.className,p=e.htmlFor,f=Object(n.a)(e,["as","bsPrefix","column","visuallyHidden","className","htmlFor"]),h=Object(o.useContext)(O).controlId;l=Object(u.c)(l,"form-label");var x="col-form-label";"string"===typeof b&&(x="".concat(x," ").concat(x,"-").concat(b));var _=s()(v,l,m&&"visually-hidden",b&&x);return p=p||h,b?Object(d.jsx)(E.a,Object(c.a)({ref:a,as:"label",className:_,htmlFor:p},f)):Object(d.jsx)(i,Object(c.a)({ref:a,className:_,htmlFor:p},f))}));T.displayName="FormLabel";var S=T,A=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.id,r=Object(n.a)(e,["bsPrefix","className","id"]),b=Object(o.useContext)(O).controlId;return t=Object(u.c)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},r),{},{type:"range",ref:a,className:s()(i,t),id:l||b}))}));A.displayName="FormRange";var w=A,F=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,l=e.htmlSize,r=e.className,b=e.isValid,j=void 0!==b&&b,m=e.isInvalid,v=void 0!==m&&m,p=e.id,f=Object(n.a)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"]),h=Object(o.useContext)(O).controlId;return t=Object(u.c)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},f),{},{size:l,ref:a,className:s()(r,t,i&&"".concat(t,"-").concat(i),j&&"is-valid",v&&"is-invalid"),id:p||h}))}));F.displayName="FormSelect";var k=F,L=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.as,r=void 0===l?"small":l,o=e.muted,b=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.c)(t,"form-text"),Object(d.jsx)(r,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:s()(i,t,o&&"text-muted")}))}));L.displayName="FormText";var M=L,V=o.forwardRef((function(e,a){return Object(d.jsx)(_,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));V.displayName="Switch";var q=Object.assign(V,{Input:_.Input,Label:_.Label}),D=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.children,r=e.controlId,o=e.label,b=Object(n.a)(e,["bsPrefix","className","children","controlId","label"]);return t=Object(u.c)(t,"form-floating"),Object(d.jsxs)(R,Object(c.a)(Object(c.a)({ref:a,className:s()(i,t),controlId:r},b),{},{children:[l,Object(d.jsx)("label",{htmlFor:r,children:o})]}))}));D.displayName="FloatingLabel";var z=D,U={_ref:r.a.any,validated:r.a.bool,as:r.a.elementType},K=o.forwardRef((function(e,a){var t=e.className,i=e.validated,l=e.as,r=void 0===l?"form":l,o=Object(n.a)(e,["className","validated","as"]);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},o),{},{ref:a,className:s()(t,i&&"was-validated")}))}));K.displayName="Form",K.propTypes=U;a.a=Object.assign(K,{Group:R,Control:y,Floating:P,Check:_,Switch:q,Label:S,Text:M,Range:w,Select:k,FloatingLabel:z})},708:function(e,a,t){"use strict";var c=t(3),n=t(142),i=t(475),s=t.n(i),l=t(1),r=t(476),o=t(4),d=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,l=void 0!==i&&i,d=e.as,b=void 0===d?"div":d,j=e.className,m=Object(n.a)(e,["bsPrefix","fluid","as","className"]),O=Object(r.c)(t,"container"),u="string"===typeof l?"-".concat(l):"-fluid";return Object(o.jsx)(b,Object(c.a)(Object(c.a)({ref:a},m),{},{className:s()(j,l?"".concat(O).concat(u):O)}))}));d.displayName="Container",a.a=d},751:function(e,a,t){},796:function(e,a,t){"use strict";t.r(a);var c=t(7),n=t.n(c),i=t(21),s=t(109),l=t(4),r=t(1),o=t(229),d=t.n(o),b=t(50),j=t(16),m=t(26),O=t(63),u=t(145),v=t(485),p=t(143),f=t(3),h=(t(491),t(599)),x=t(499),_=t(708),g=t(521),N=(t(506),t(507),t(751),t(512)),y=t(480),C=t(514),P=t(32),I=t(51),R=function(e){var a,t,c,o=e.setting,d=Object(r.useState)(!1),b=Object(s.a)(d,2),j=b[0],m=b[1],O=Object(r.useState)({name:!1,valid_name:!1,email:!1,valid_email:!1,phone_no:!1,valid_phone_no:!1,address:!1,valid_address:!1}),u=Object(s.a)(O,2),v=u[0],R=u[1],E=Object(r.useState)({name:"",email:"",phone_no:"",address:""}),T=Object(s.a)(E,2),S=T[0],A=T[1],w=function(){var e=Object(f.a)({},v);return e=S.name?Object(y.g)(S.first_name)?Object(f.a)(Object(f.a)({},e),{},{valid_name:!1}):Object(f.a)(Object(f.a)({},e),{},{valid_name:!0}):Object(f.a)(Object(f.a)({},e),{},{name:!0}),e=S.email?Object(y.f)(S.email)?Object(f.a)(Object(f.a)({},e),{},{valid_email:!1}):Object(f.a)(Object(f.a)({},e),{},{valid_email:!0}):Object(f.a)(Object(f.a)({},e),{},{email:!0}),e=S.mobile?Object(y.e)(S.mobile,S.phone_code)?Object(f.a)(Object(f.a)({},e),{},{valid_phone_no:!1}):Object(f.a)(Object(f.a)({},e),{},{valid_phone_no:!0}):Object(f.a)(Object(f.a)({},e),{},{phone_no:!0}),e=S.address?Object(f.a)(Object(f.a)({},e),{},{address:!1}):Object(f.a)(Object(f.a)({},e),{},{address:!0}),R(e),!(e.name||e.valid_name||e.phone_no||e.valid_phone_no||e.valid_email||e.email||e.address)},F=function(e){e.target.value?"name"===e.target.name?Object(y.g)(e.target.value)&&(A(Object(f.a)(Object(f.a)({},S),{},Object(p.a)({},e.target.name,Object(y.h)(e.target.value)))),R(Object(f.a)(Object(f.a)({},v),{},Object(p.a)({},e.target.name,!1)))):"email"===e.target.name?(A(Object(f.a)(Object(f.a)({},S),{},Object(p.a)({},e.target.name,e.target.value.trim()))),R(Object(f.a)(Object(f.a)({},v),{},Object(p.a)({},e.target.name,!1)))):(A(Object(f.a)(Object(f.a)({},S),{},Object(p.a)({},e.target.name,e.target.value))),R(Object(f.a)(Object(f.a)({},v),{},Object(p.a)({},e.target.name,!1)))):(A(Object(f.a)(Object(f.a)({},S),{},Object(p.a)({},e.target.name,e.target.value))),R(Object(f.a)(Object(f.a)({},v),{},Object(p.a)({},e.target.name,!0))))},k=function(){var e=Object(i.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w()){e.next=14;break}return e.prev=1,a={name:null===S||void 0===S?void 0:S.name,email:null===S||void 0===S?void 0:S.email,mobile:null===S||void 0===S?void 0:S.mobile,message:null===S||void 0===S?void 0:S.address},m(!0),e.next=6,Object(P.c)(a);case 6:200===e.sent.data.statusCode&&(m(!1),I.b.success("Message sent"),R({name:!1,valid_name:!1,email:!1,valid_email:!1,phone_no:!1,valid_phone_no:!1,address:!1,valid_address:!1}),A({name:"",email:"",phone_no:"",address:""})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),m(!1),I.b.error(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t?void 0:t.message);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"contact-section",children:Object(l.jsx)(_.a,{children:Object(l.jsxs)(g.a,{children:[Object(l.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 ls-m mb-4",children:Object(l.jsx)("div",{className:"grey-section d-flex align-items-center h-100",children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:null===o||void 0===o||null===(a=o.site)||void 0===a?void 0:a.contactDetails}})})})}),Object(l.jsx)("div",{className:"col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4",children:Object(l.jsx)("div",{className:"w-100 offset-sm-1",children:Object(l.jsx)(_.a,{children:Object(l.jsxs)("div",{className:"inner-quote-section",children:[Object(l.jsx)(g.a,{children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("h2",{children:null===o||void 0===o||null===(t=o.site)||void 0===t?void 0:t.contactTitle}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:null===o||void 0===o||null===(c=o.site)||void 0===c?void 0:c.contactDescription}})]})}),Object(l.jsx)("div",{className:"quote-form",children:Object(l.jsxs)(g.a,{children:[Object(l.jsx)(x.a,{children:Object(l.jsx)(g.a,{children:Object(l.jsxs)(x.a,{children:[Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(l.jsx)(N.a,{name:"name",placeholder:"Enter name",value:null===S||void 0===S?void 0:S.name,required:v.name,onChange:F}),v.valid_name&&Object(l.jsx)("p",{className:"error_text",children:"Please enter a valid Name"})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(l.jsx)(N.a,{name:"email",placeholder:"Enter Email",value:null===S||void 0===S?void 0:S.email,required:v.email,onChange:F}),v.valid_email&&Object(l.jsx)("p",{className:"error_text",children:"Please enter a valid email address"})]}),Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(l.jsx)(C.a,{defaultCountry:"in",value:S.mobile,required:v.phone_no,onChange:function(e,a){var t;A(Object(f.a)(Object(f.a)({},S),{},{mobile:e,phone_code:null===a||void 0===a||null===(t=a.countryCode)||void 0===t?void 0:t.toUpperCase()})),R(e?Object(f.a)(Object(f.a)({},v),{},{phone_no:!1}):Object(f.a)(Object(f.a)({},v),{},{phone_no:!0}))}}),v.valid_phone_no&&Object(l.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"})]})]})})}),Object(l.jsx)(x.a,{children:Object(l.jsx)(g.a,{children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)(h.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(l.jsxs)(h.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(l.jsx)(N.a,{name:"address",placeholder:"Enter Message",value:null===S||void 0===S?void 0:S.address,required:v.address,onChange:F,style:{height:"8rem"}}),v.valid_address&&Object(l.jsx)("p",{className:"error_text",children:"Please enter a valid Message"})]})}),Object(l.jsx)("button",{class:"btn-product btn-cart wid_200",onClick:function(){return k()},disabled:j,children:j?"Loading...":"Send Message"})]})})})]})})]})})})})]})})})})},E=t(486);a.default=function(){var e,a=Object(j.i)().url,t=Object(j.g)(),c=Object(b.c)(),o=Object(u.a)(),p=o.get("fsz"),f=o.get("token"),h=o.get("_ga"),x=Object(r.useState)([]),_=Object(s.a)(x,2),g=(_[0],_[1],Object(r.useState)({})),N=Object(s.a)(g,2),y=N[0],C=N[1],I=function(){var e=Object(i.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(P.Q)();case 3:t=e.sent,C(null===t||void 0===t?void 0:t.data.responseData),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p&&(sessionStorage.setItem("fsz",p),Object(m.h)("source",p)),f&&(Object(m.g)(f),t.replace(a),c(Object(O.c)(f))),I(1),h&&t.replace(a)}),[]),Object(r.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(d.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),d.a.pageView())}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v.a,{title:"liven Science",description:"Contact us"}),Object(l.jsx)("main",{className:"main single-product",children:Object(l.jsx)("div",{className:"page-content",children:Object(l.jsxs)("div",{className:"container-fluid p-0",children:[Object(l.jsx)("div",{className:"page-header pl-4 pr-4",style:{backgroundImage:"url(".concat(null===y||void 0===y||null===(e=y.site)||void 0===e?void 0:e.contact_image,")")},children:Object(l.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize"})}),Object(l.jsx)("div",{class:"page-content pb-10 pt-10",children:Object(l.jsx)(R,{setting:y})})]})})}),Object(l.jsx)(E.a,{})]})}}}]);
//# sourceMappingURL=22.54d47807.chunk.js.map