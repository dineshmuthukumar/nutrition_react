(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[12],{476:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));c(3);var a=c(88),s=c.n(a),n=c(36),r=c(89),i=c(60),l=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_SERVER_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(n.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(n.a)()||r.a.dispatch(Object(i.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(n.b)(),Promise.reject(e)}));var o=l,d=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(n.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(n.a)()||r.a.dispatch(Object(i.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(n.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var j=function(e){var t=e.page,c=e.parent_slug;return o.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},489:function(e,t,c){"use strict";t.a=c.p+"static/media/customer.07059049.jpg"},490:function(e,t,c){"use strict";t.a=c.p+"static/media/store.27de7930.jpg"},507:function(e,t,c){"use strict";var a=c(9),s=c.n(a),n=c(20),r=c(5),i=c(1),l=c(489),o=c(490),d=c(29);c(508);t.a=function(){var e=function(){var e=Object(n.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(t);case 2:c=e.sent,console.log(c,"Abouts");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){e("about")}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:"customer-section pb-10",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsx)("div",{className:"col-md-6 mb-4 abt-img",children:Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:l.a,alt:"Happy Customer",className:"banner-radius abt-img"})})}),Object(r.jsxs)("div",{className:"col-md-6 mb-4",children:[Object(r.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:"About Us"}),Object(r.jsxs)("p",{className:"section-desc text-grey",children:["Already millions of people are very satisfied by thi.",Object(r.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(r.jsx)("br",{}),"developing, requirements are increasing. Riode has brought. Already millions of people are very satisfied by thi.",Object(r.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(r.jsx)("br",{}),"developing, requirements are increasing. Riode has brought."]})]})]})})}),Object(r.jsx)("section",{className:"store-section pb-10 ",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsxs)("div",{className:"col-md-6 order-md-first mb-4",children:[Object(r.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:"Our Vission & Our Mission"}),Object(r.jsxs)("p",{className:"section-desc text-grey",children:["Already millions of people are very satisfied by thi.",Object(r.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(r.jsx)("br",{}),"developing, requirements are increasing. Riode has brought. Already millions of people are very satisfied by thi.",Object(r.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(r.jsx)("br",{}),"developing, requirements are increasing. Riode has brought."]})]}),Object(r.jsx)("div",{className:"col-md-6 mb-4 text-center",children:Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:o.a,alt:"Our Store",className:"banner-radius abt-img"})})})]})})})]})}},508:function(e,t,c){},564:function(e,t,c){"use strict";var a=c(5),s=(c(1),c(589)),n=c.n(s);c(590),c(565);t.a=function(e){var t=e.defaultCountry,c=void 0===t?"in":t,s=e.onChange,r=void 0===s?function(){}:s,i=e.value,l=e.required,o=void 0!==l&&l,d=e.className,j=void 0===d?"":d,b=e.onEnterKeyPress,O=void 0===b?function(){}:b,h=e.title,u="";return u+=j,u+=o?" border-danger":"",Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"input-title",children:h})," ",o&&Object(a.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),Object(a.jsx)(n.a,{onEnterKeyPress:O,country:c,value:i,onChange:r,inputClass:u})]})}},565:function(e,t,c){},566:function(e,t,c){"use strict";var a=c(3),s=c(143),n=c(5),r=(c(1),c(654)),i=c(675),l=c(491);c(567);t.a=function(e){var t=e.tooltip,c=e.title,o=e.name,d=void 0===o?"":o,j=e.type,b=void 0===j?"text":j,O=e.className,h=void 0===O?"":O,u=e.required,m=void 0!==u&&u,x=e.boxRequired,v=void 0!==x&&x,p=e.requiredBottom,g=void 0!==p&&p,f=e.restrictChar,_=void 0!==f&&f,N=e.scrollIncrese,C=void 0!==N&&N,y=e.placeholder,E=void 0===y?" ":y,T=e.onChange,P=void 0===T?function(){}:T,S=e.value,A=e.isPop,R=void 0!==A&&A,w=e.lengthValue,D=void 0===w?100:w,L=e.popText,I=Object(s.a)(e,["tooltip","title","name","type","className","required","boxRequired","requiredBottom","restrictChar","scrollIncrese","placeholder","onChange","value","isPop","lengthValue","popText"]),k=Math.floor(100*Math.random()+1),K=Object(n.jsx)(r.a,{children:Object(n.jsx)(r.a.Body,{children:Object(n.jsx)("p",{className:"password-terms",children:L})})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{htmlFor:"floatingInput".concat(k),className:"input-title",children:[c," ",t&&t]})," ",!g&&m&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),R?Object(n.jsx)(i.a,{trigger:"focus",placement:"top",overlay:K,children:Object(n.jsx)("input",Object(a.a)(Object(a.a)({},I),{},{id:"floatingInput".concat(k),type:b,name:d,className:"form-control ".concat(m&&"border-danger"," ").concat(h," "),placeholder:E,onChange:P,value:S,autoComplete:"off"}))}):Object(n.jsx)("input",Object(a.a)(Object(a.a)({},I),{},{id:"floatingInput".concat(k),type:b,name:d,className:"form-control ".concat((m||v)&&"border-danger","\n            ").concat(h),placeholder:E,onChange:P,value:S,maxLength:D,onKeyDown:_&&l.a,autoComplete:"off",onWheel:C&&function(e){return e.currentTarget.blur()}})),g&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]})}},567:function(e,t,c){},650:function(e,t,c){},677:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=(c(487),c(20)),r=c(87),i=c(5),l=c(1),o=c(228),d=c.n(o),j=c(48),b=c(15),O=c(36),h=c(60),u=(c(476),c(144)),m=c(478),x=(c(507),c(479)),v=c(146),p=c(3),g=c(496),f=c(656),_=c(506),N=c(655),C=c(592),y=(c(649),c(564)),E=(c(650),c.p+"static/media/banner-img.de786f0c.png"),T=c(491),P=c(566),S=c(510),A=c.n(S),R=c(29),w=function(){var e,t,c,a,o=Object(j.d)((function(e){return null===e||void 0===e?void 0:e.user}));console.log(null===o||void 0===o?void 0:o.data,"user");var d=Object(l.useState)(new Date),b=Object(r.a)(d,2),O=(b[0],b[1],Object(l.useState)(!1)),h=Object(r.a)(O,2),u=h[0],m=(h[1],Object(l.useState)({})),x=Object(r.a)(m,2),S=x[0],w=x[1],D=Object(l.useState)({}),L=Object(r.a)(D,2),I=L[0],k=L[1],K=Object(l.useState)({name:null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.name,email:null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.email,dob:null===o||void 0===o||null===(c=o.data)||void 0===c?void 0:c.dob,gender:""}),F=Object(r.a)(K,2),U=F[0],q=F[1],M=Object(l.useState)({name:!1,valid_name:!1,email:!1,valid_email:!1,dob:!1,valid_dob:!1}),V=Object(r.a)(M,2),B=V[0],H=V[1],W=Object(l.useState)({address:"",city:"",state:"",pincode:""}),Y=Object(r.a)(W,2),G=Y[0],$=Y[1],z=Object(l.useState)({address:!1,valid_address:!1,city:!1,valid_city:!1,state:!1,valid_state:!1,pincode:!1,valid_pincode:!1}),J=Object(r.a)(z,2),X=J[0],Q=J[1];Object(l.useEffect)((function(){Z()}),[]);var Z=function(){var e=Object(n.a)(s.a.mark((function e(){var t,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.p)();case 2:a=e.sent,w(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.states);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){e.target.value?"name"===e.target.name?Object(T.e)(e.target.value)&&(q(Object(p.a)(Object(p.a)({},U),{},Object(v.a)({},e.target.name,Object(T.f)(e.target.value)))),H(Object(p.a)(Object(p.a)({},B),{},Object(v.a)({},e.target.name,!1)))):"email"===e.target.name?(q(Object(p.a)(Object(p.a)({},U),{},Object(v.a)({},e.target.name,e.target.value.trim()))),H(Object(p.a)(Object(p.a)({},B),{},Object(v.a)({},e.target.name,!1)))):(q(Object(p.a)(Object(p.a)({},U),{},Object(v.a)({},e.target.name,e.target.value))),H(Object(p.a)(Object(p.a)({},B),{},Object(v.a)({},e.target.name,!1)))):(q(Object(p.a)(Object(p.a)({},U),{},Object(v.a)({},e.target.name,e.target.value))),H(Object(p.a)(Object(p.a)({},B),{},Object(v.a)({},e.target.name,!0)))),console.log(U,"Profile"),console.log(B,"profileValidation")},te=function(){var e=Object(p.a)({},B);return e=U.name?Object(T.e)(U.name)?Object(p.a)(Object(p.a)({},e),{},{valid_name:!1}):Object(p.a)(Object(p.a)({},e),{},{valid_name:!0}):Object(p.a)(Object(p.a)({},e),{},{name:!0}),e=U.email?Object(T.d)(U.email)?Object(p.a)(Object(p.a)({},e),{},{valid_email:!1}):Object(p.a)(Object(p.a)({},e),{},{valid_email:!0}):Object(p.a)(Object(p.a)({},e),{},{email:!0}),e=U.dob?Object(p.a)(Object(p.a)({},e),{},{valid_dob:!1}):Object(p.a)(Object(p.a)({},e),{},{dob:!0}),e=U.gender?Object(p.a)(Object(p.a)({},e),{},{valid_gender:!1}):Object(p.a)(Object(p.a)({},e),{},{gender:!0}),H(e),!(e.name||e.valid_name||e.email||e.valid_email||e.dob||e.valid_dob||e.gender||e.valid_gender)},ce=function(e){e.key},ae=function(){var e=Object(n.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!te()){e.next=14;break}return(c=Object(p.a)({},U))._id=null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t._id,c.dob=A()(c.dob).format("DD-MM-YYYY"),console.log(c),e.prev=5,e.next=8,Object(R.d)(c);case 8:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),se=function(e){e.target.value?"name"===e.target.name?Object(T.e)(e.target.value)&&($(Object(p.a)(Object(p.a)({},G),{},Object(v.a)({},e.target.name,Object(T.f)(e.target.value)))),Q(Object(p.a)(Object(p.a)({},X),{},Object(v.a)({},e.target.name,!1)))):"email"===e.target.name?($(Object(p.a)(Object(p.a)({},G),{},Object(v.a)({},e.target.name,e.target.value.trim()))),Q(Object(p.a)(Object(p.a)({},X),{},Object(v.a)({},e.target.name,!1)))):($(Object(p.a)(Object(p.a)({},G),{},Object(v.a)({},e.target.name,e.target.value))),Q(Object(p.a)(Object(p.a)({},X),{},Object(v.a)({},e.target.name,!1)))):($(Object(p.a)(Object(p.a)({},G),{},Object(v.a)({},e.target.name,e.target.value))),Q(Object(p.a)(Object(p.a)({},X),{},Object(v.a)({},e.target.name,!0))))},ne=function(){var e=Object(p.a)({},X);return e=G.address?Object(p.a)(Object(p.a)({},e),{},{address:!1}):Object(p.a)(Object(p.a)({},e),{},{address:!0}),e=G.state?Object(p.a)(Object(p.a)({},e),{},{state:!1}):Object(p.a)(Object(p.a)({},e),{},{state:!0}),e=G.city?Object(p.a)(Object(p.a)({},e),{},{city:!1}):Object(p.a)(Object(p.a)({},e),{},{city:!0}),e=G.pincode?Object(p.a)(Object(p.a)({},e),{},{pincode:!1}):Object(p.a)(Object(p.a)({},e),{},{pincode:!0}),Q(e),!(e.address||e.valid_address||e.state||e.valid_state||e.city||e.valid_city||e.pincode||e.valid_pincode)},re=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(X,"addressValidation"),!ne()){e.next=4;break}return console.log(U,"profile"),e.abrupt("return",!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(n.a)(s.a.mark((function e(t){var c,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t||null===(c=t.target)||void 0===c?void 0:c.value)){e.next=9;break}return e.next=3,Object(R.l)(t.target.value);case 3:r=e.sent,k(null===r||void 0===r||null===(a=r.data)||void 0===a||null===(n=a.responseData)||void 0===n?void 0:n.cities),$(Object(p.a)(Object(p.a)({},G),{},{state:t.target.value})),Q(Object(p.a)(Object(p.a)({},B),{},{state:!1})),e.next=11;break;case 9:$(Object(p.a)(Object(p.a)({},G),{},{state:""})),Q(Object(p.a)(Object(p.a)({},B),{},{state:!0}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"profile_page",children:Object(i.jsx)(N.a.Container,{id:"left-tabs-example",defaultActiveKey:"second",children:Object(i.jsxs)(_.a,{children:[Object(i.jsx)(g.a,{sm:3,className:"account_form_box",children:Object(i.jsxs)(f.a,{variant:"pills",className:"flex-column",children:[Object(i.jsx)(f.a.Item,{children:Object(i.jsx)(f.a.Link,{eventKey:"second",children:"My Account"})}),Object(i.jsx)(f.a.Item,{children:Object(i.jsx)(f.a.Link,{eventKey:"first",children:"My Orders"})})]})}),Object(i.jsx)(g.a,{sm:9,className:"account_form_box",children:Object(i.jsxs)(N.a.Content,{children:[Object(i.jsxs)(N.a.Pane,{eventKey:"first",children:[Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:E,alt:"logo",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle green_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]}),Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:E,alt:"logo",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle red_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]}),Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:E,alt:"logo",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle green_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]}),Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:E,alt:"logo",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle red_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]})]}),Object(i.jsxs)(N.a.Pane,{eventKey:"second",children:[Object(i.jsx)(_.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsx)("h2",{className:"profile_heading",children:"Profile"})})}),Object(i.jsxs)("div",{class:"change_pass",children:[Object(i.jsxs)(_.a,{children:[Object(i.jsx)(g.a,{sm:4,children:Object(i.jsx)(C.a,{children:Object(i.jsxs)(C.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(i.jsx)(P.a,{title:"Name",name:"name",placeholder:"Enter Name",value:U.name,required:B.name,onKeyPress:ce,onChange:ee}),B.valid_name&&Object(i.jsx)("p",{className:"error_text",children:"Please enter a valid name"})]})})}),Object(i.jsx)(g.a,{sm:4,children:Object(i.jsx)(C.a,{children:Object(i.jsxs)(C.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(i.jsx)(P.a,{title:"Email",name:"email",placeholder:"Enter Email",value:U.email,required:B.email,onKeyPress:ce,onChange:ee}),B.valid_email&&Object(i.jsx)("p",{className:"error_text",children:"Please enter a valid email address"})]})})}),Object(i.jsx)(g.a,{sm:4,children:Object(i.jsx)(C.a,{children:Object(i.jsx)(C.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:Object(i.jsx)(y.a,{title:"Mobile",defaultCountry:"+91",value:null===o||void 0===o||null===(a=o.data)||void 0===a?void 0:a.mobile})})})})]}),Object(i.jsxs)(_.a,{children:[Object(i.jsx)(g.a,{sm:4,children:Object(i.jsxs)(C.a,{children:[Object(i.jsx)(P.a,{title:"DOB",type:"date",name:"dob",placeholder:"Enter DOB",value:U.dob,required:B.dob,onKeyPress:ce,onChange:ee}),B.valid_dob&&Object(i.jsx)("p",{className:"error_text",children:"Please select DOB"})]})}),Object(i.jsx)(g.a,{sm:4,children:Object(i.jsxs)(C.a,{className:"gender_list",children:[Object(i.jsx)(C.a.Label,{children:"Gender"}),["radio"].map((function(e){return Object(i.jsxs)("div",{className:"mt-3",children:[Object(i.jsx)(C.a.Check,{inline:!0,label:"Male",name:"gender",value:"male",type:e,id:"inline-".concat(e,"-1"),onKeyPress:ce,onChange:ee}),Object(i.jsx)(C.a.Check,{inline:!0,label:"Female",name:"gender",value:"female",type:e,id:"inline-".concat(e,"-2"),onKeyPress:ce,onChange:ee})]},"inline-".concat(e))})),!U.gender&&Object(i.jsx)("p",{className:"error_text",children:"Please select Gender"})]})})]}),Object(i.jsx)(_.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsx)("button",{class:"btn-product btn-cart wid_200",onClick:ae,disabled:u,children:"SAVE"})})})]}),Object(i.jsx)(_.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsx)("h2",{className:"profile_heading",children:"Add New Address"})})}),Object(i.jsxs)("div",{class:"change_pass",children:[Object(i.jsx)(_.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsx)(C.a,{children:Object(i.jsxs)(C.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(i.jsx)(C.a.Label,{children:"Address"}),Object(i.jsx)(C.a.Control,{as:"textarea",name:"address",rows:3,onChange:se}),X.address&&Object(i.jsx)("p",{className:"error_text",children:"Please Enter Address"})]})})})}),Object(i.jsxs)(_.a,{children:[Object(i.jsxs)(g.a,{children:[" ",Object(i.jsx)("label",{className:"mb-3 font-weight-bold",children:"State *"}),Object(i.jsxs)(C.a.Select,{"aria-label":"Default select example",name:"state",onChange:ie,children:[Object(i.jsx)("option",{children:"State"}),(null===S||void 0===S?void 0:S.length)>0&&(null===S||void 0===S?void 0:S.map((function(e){return Object(i.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name})})))]}),X.state&&Object(i.jsx)("p",{className:"error_text",children:"Please select state"})]}),Object(i.jsxs)(g.a,{children:[" ",Object(i.jsx)("label",{className:"mb-3 font-weight-bold",children:"City *"}),Object(i.jsxs)(C.a.Select,{"aria-label":"Default select example",name:"city",onChange:se,children:[Object(i.jsx)("option",{children:"City"}),(null===I||void 0===I?void 0:I.length)>0&&(null===I||void 0===I?void 0:I.map((function(e){return Object(i.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name})})))]}),X.city&&Object(i.jsx)("p",{className:"error_text",children:"Please select City"})]}),Object(i.jsx)(g.a,{children:Object(i.jsx)(C.a,{children:Object(i.jsx)(C.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:Object(i.jsx)(P.a,{title:"Pincode",type:"number",name:"pincode",placeholder:"Enter Pin code",value:G.pincode,required:X.pincode,onKeyPress:function(e){e.key},onChange:se})})})})]}),Object(i.jsx)(_.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsx)("button",{class:"btn-product btn-cart wid_200",onClick:function(){return re()},children:"SAVE"})})})]})]}),Object(i.jsxs)(N.a.Pane,{eventKey:"first",children:[Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:"http://localhost:4002/static/media/home_one.d0bce35b.jpg",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle green_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]}),Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:"http://localhost:4002/static/media/home_one.d0bce35b.jpg",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle red_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]}),Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:"http://localhost:4002/static/media/home_one.d0bce35b.jpg",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle green_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]}),Object(i.jsxs)("div",{class:"row product_banner_2 text-left",children:[Object(i.jsx)("div",{class:"col-sm-2",children:Object(i.jsx)("img",{src:"http://localhost:4002/static/media/home_one.d0bce35b.jpg",width:"100",height:"100"})}),Object(i.jsx)("div",{class:"col-sm-4",children:Object(i.jsx)("p",{children:"Converse Training Shoes"})}),Object(i.jsx)("div",{class:"col-sm-3",children:Object(i.jsx)("p",{children:"$129.99"})}),Object(i.jsxs)("div",{class:"col-sm-3",children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("i",{class:"fa fa-circle red_color_fa","aria-hidden":"true"})," ","Delivered on Oct 25"]}),Object(i.jsx)("p",{children:"Your item has been delivered"})]})]})]})]})})]})})})})};t.default=function(){var e=Object(b.i)().url,t=Object(b.g)(),c=Object(j.c)(),a=Object(u.a)(),s=a.get("fsz"),n=a.get("token"),o=a.get("_ga"),v=Object(l.useState)([]),p=Object(r.a)(v,2);p[0],p[1];return Object(l.useEffect)((function(){s&&(sessionStorage.setItem("fsz",s),Object(O.d)("source",s)),n&&(Object(O.c)(n),t.replace(e),c(Object(h.a)(n))),o&&t.replace(e)}),[]),Object(l.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_MARKETING_SCRIPT&&(d.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_META_PIXEL_ID),d.a.pageView())}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)("nav",{className:"breadcrumb-nav",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("ul",{className:"breadcrumb",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)("i",{className:"d-icon-home"})})}),Object(i.jsx)("li",{children:"My Account"})]})})}),Object(i.jsx)("div",{className:"page-content mt-6 pb-2 mb-10",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{class:"title title-center mb-10",children:"My Account"}),Object(i.jsx)(w,{})]})})]}),Object(i.jsx)(x.a,{})]})}}}]);
//# sourceMappingURL=12.4001bffd.chunk.js.map