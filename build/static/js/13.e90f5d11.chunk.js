(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[13],{476:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(3);var a=n(88),c=n.n(a),r=n(36),o=n(89),i=n(60),s=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});s.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(r.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),s.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(r.a)()||o.a.dispatch(Object(i.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(r.b)(),Promise.reject(e)}));var l=s,u=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});u.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(r.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),u.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(r.a)()||o.a.dispatch(Object(i.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(r.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var d=function(e){var t=e.page,n=e.parent_slug;return l.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:n}})}},491:function(e,t,n){"use strict";t.a=n.p+"static/media/customer.07059049.jpg"},492:function(e,t,n){"use strict";t.a=n.p+"static/media/store.27de7930.jpg"},514:function(e,t,n){"use strict";var a=n(9),c=n.n(a),r=n(20),o=n(5),i=n(1),s=n(491),l=n(492),u=n(29);n(515);t.a=function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(t);case 2:n=e.sent,console.log(n,"Abouts");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){e("about")}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"customer-section pb-10",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsx)("div",{className:"col-md-6 mb-4 abt-img",children:Object(o.jsx)("figure",{children:Object(o.jsx)("img",{src:s.a,alt:"Happy Customer",className:"banner-radius abt-img"})})}),Object(o.jsxs)("div",{className:"col-md-6 mb-4",children:[Object(o.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:"About Us"}),Object(o.jsxs)("p",{className:"section-desc text-grey",children:["Already millions of people are very satisfied by thi.",Object(o.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(o.jsx)("br",{}),"developing, requirements are increasing. Riode has brought. Already millions of people are very satisfied by thi.",Object(o.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(o.jsx)("br",{}),"developing, requirements are increasing. Riode has brought."]})]})]})})}),Object(o.jsx)("section",{className:"store-section pb-10 ",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsxs)("div",{className:"col-md-6 order-md-first mb-4",children:[Object(o.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:"Our Vission & Our Mission"}),Object(o.jsxs)("p",{className:"section-desc text-grey",children:["Already millions of people are very satisfied by thi.",Object(o.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(o.jsx)("br",{}),"developing, requirements are increasing. Riode has brought. Already millions of people are very satisfied by thi.",Object(o.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(o.jsx)("br",{}),"developing, requirements are increasing. Riode has brought."]})]}),Object(o.jsx)("div",{className:"col-md-6 mb-4 text-center",children:Object(o.jsx)("figure",{children:Object(o.jsx)("img",{src:l.a,alt:"Our Store",className:"banner-radius abt-img"})})})]})})})]})}},515:function(e,t,n){},516:function(e,t,n){"use strict";var a=n(5),c=(n(1),n(577)),r=n.n(c);n(578),n(517);t.a=function(e){var t=e.defaultCountry,n=void 0===t?"in":t,c=e.onChange,o=void 0===c?function(){}:c,i=e.value,s=e.required,l=void 0!==s&&s,u=e.className,d=void 0===u?"":u,b=e.onEnterKeyPress,j=void 0===b?function(){}:b,p=e.title,O="";return O+=d,O+=l?" border-danger":"",Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"input-title",children:p})," ",l&&Object(a.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),Object(a.jsx)(r.a,{onEnterKeyPress:j,country:n,value:i,onChange:o,inputClass:O})]})}},517:function(e,t,n){},518:function(e,t,n){"use strict";var a=n(3),c=n(143),r=n(5),o=(n(1),n(675)),i=n(695),s=n(481);n(519);t.a=function(e){var t=e.tooltip,n=e.title,l=e.name,u=void 0===l?"":l,d=e.type,b=void 0===d?"text":d,j=e.className,p=void 0===j?"":j,O=e.required,m=void 0!==O&&O,h=e.boxRequired,f=void 0!==h&&h,v=e.requiredBottom,g=void 0!==v&&v,x=e.restrictChar,_=void 0!==x&&x,y=e.scrollIncrese,N=void 0!==y&&y,C=e.placeholder,P=void 0===C?" ":C,E=e.onChange,S=void 0===E?function(){}:E,A=e.value,R=e.isPop,T=void 0!==R&&R,w=e.lengthValue,I=void 0===w?100:w,k=e.popText,L=Object(c.a)(e,["tooltip","title","name","type","className","required","boxRequired","requiredBottom","restrictChar","scrollIncrese","placeholder","onChange","value","isPop","lengthValue","popText"]),D=Math.floor(100*Math.random()+1),F=Object(r.jsx)(o.a,{children:Object(r.jsx)(o.a.Body,{children:Object(r.jsx)("p",{className:"password-terms",children:k})})});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{htmlFor:"floatingInput".concat(D),className:"input-title",children:[n," ",t&&t]})," ",!g&&m&&Object(r.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),T?Object(r.jsx)(i.a,{trigger:"focus",placement:"top",overlay:F,children:Object(r.jsx)("input",Object(a.a)(Object(a.a)({},L),{},{id:"floatingInput".concat(D),type:b,name:u,className:"form-control ".concat(m&&"border-danger"," ").concat(p," "),placeholder:P,onChange:S,value:A,autoComplete:"off"}))}):Object(r.jsx)("input",Object(a.a)(Object(a.a)({},L),{},{id:"floatingInput".concat(D),type:b,name:u,className:"form-control ".concat((m||f)&&"border-danger","\n            ").concat(p),placeholder:P,onChange:S,value:A,maxLength:I,onKeyDown:_&&s.a,autoComplete:"off",onWheel:N&&function(e){return e.currentTarget.blur()}})),g&&Object(r.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]})}},519:function(e,t,n){},668:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=c?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),c=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var c=m(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=function(e){return"object"===f(e)},g=function(e){d(n,e);var t=j(n);function n(e){var c;return s(this,n),h(O(c=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!v(e)&&!1!==e})).join(" ")})),h(O(c),"getType",(function(){var e=c.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),c.input=a.default.createRef(),c}return u(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,a=this.input.current;a&&t&&n&&a.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,r=e.isLastChild,s=e.inputStyle,l=e.focus,u=e.isDisabled,d=e.hasErrored,b=e.errorStyle,j=e.focusStyle,p=e.disabledStyle,O=(e.shouldAutoFocus,e.isInputNum),m=e.index,h=e.value,f=e.className,g=(e.isInputSecure,i(e,c));return a.default.createElement("div",{className:f,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",o({"aria-label":"".concat(0===m?"Please enter verification code. ":"").concat(O?"Digit":"Character"," ").concat(m+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},v(s)&&s,l&&v(j)&&j,u&&v(p)&&p,d&&v(b)&&b),placeholder:t,className:this.getClasses(s,l&&j,u&&p,d&&b),type:this.getType(),maxLength:"1",ref:this.input,disabled:u,value:h||""},g)),!r&&n)}}]),n}(a.PureComponent),x=function(e){d(n,e);var t=j(n);function n(){var e;s(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return h(O(e=t.call.apply(t,[this].concat(r))),"state",{activeInput:0}),h(O(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),h(O(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,a=t.numInputs;if("string"===typeof n){if(n.length===a)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),h(O(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),h(O(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),h(O(e),"focusInput",(function(t){var n=e.props.numInputs,a=Math.max(Math.min(n-1,t),0);e.setState({activeInput:a})})),h(O(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),h(O(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),h(O(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,a=e.getOtpValue();a[n]=t[0],e.handleOtpChange(a)})),h(O(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,a=e.props,c=a.numInputs;if(!a.isDisabled){for(var r=e.getOtpValue(),o=n,i=t.clipboardData.getData("text/plain").slice(0,c-n).split(""),s=0;s<c;++s)s>=n&&i.length>0&&(r[s]=i.shift(),o++);e.setState({activeInput:o},(function(){e.focusInput(o),e.handleOtpChange(r)}))}})),h(O(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),h(O(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),h(O(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),h(O(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,c=n.numInputs,r=n.inputStyle,o=n.focusStyle,i=n.separator,s=n.isDisabled,l=n.disabledStyle,u=n.hasErrored,d=n.errorStyle,b=n.shouldAutoFocus,j=n.isInputNum,p=n.isInputSecure,O=n.className,m=[],h=e.getOtpValue(),f=e.getPlaceholderValue(),v=e.props["data-cy"],x=e.props["data-testid"],_=function(n){m.push(a.default.createElement(g,{placeholder:f&&f[n],key:n,index:n,focus:t===n,value:h&&h[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:i,inputStyle:r,focusStyle:o,isLastChild:n===c-1,isDisabled:s,disabledStyle:l,hasErrored:u,errorStyle:d,shouldAutoFocus:b,isInputNum:j,isInputSecure:p,className:O,"data-cy":v&&"".concat(v,"-").concat(n),"data-testid":x&&"".concat(x,"-").concat(n)}))},y=0;y<c;y++)_(y);return m})),e}return u(n,[{key:"render",value:function(){var e=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},v(e)&&e),className:v(e)?"":e},this.renderInputs())}}]),n}(a.Component);h(x,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var _=x;t.default=_},669:function(e,t,n){},692:function(e,t,n){"use strict";n.r(t);var a,c=n(87),r=n(5),o=n(1),i=n(228),s=n.n(i),l=n(48),u=n(15),d=n(36),b=n(60),j=(n(476),n(145)),p=n(479),O=(n(514),n(480)),m=n(9),h=n.n(m),f=n(20),v=n(146),g=n(3),x=n(516),_=n(518),y=n(668),N=n.n(y),C=function(e){var t=e.numInputs,n=void 0===t?6:t,a=e.value,c=void 0===a?"":a,o=e.title,i=e.onChange,s=e.hideLabel,l=void 0!==s&&s,u=e.disabled,d=void 0!==u&&u;return Object(r.jsxs)("div",{className:"otp-input",children:[!l&&Object(r.jsx)("label",{children:o}),Object(r.jsx)(N.a,{value:c,onChange:i,numInputs:n,isInputNum:!0,separator:"-",isDisabled:d})]})},P=n(493),E=n(498),S=n(143),A=n(474),R=n.n(A),T=n(608),w=n(581),I=n(528),k=(a={},Object(v.a)(a,w.b,"showing"),Object(v.a)(a,w.c,"showing show"),a),L=o.forwardRef((function(e,t){return Object(r.jsx)(I.a,Object(g.a)(Object(g.a)({},e),{},{ref:t,transitionClasses:k}))}));L.displayName="ToastFade";var D=L,F=n(490),U=n(475),B=n(90),V=n.n(B),M={"aria-label":V.a.string,onClick:V.a.func,variant:V.a.oneOf(["white"])},K=o.forwardRef((function(e,t){var n=e.className,a=e.variant,c=Object(S.a)(e,["className","variant"]);return Object(r.jsx)("button",Object(g.a)({ref:t,type:"button",className:R()("btn-close",a&&"btn-close-".concat(a),n)},c))}));K.displayName="CloseButton",K.propTypes=M,K.defaultProps={"aria-label":"Close"};var q=K,W=o.createContext({onClose:function(){}}),H=o.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,c=e.closeVariant,i=e.closeButton,s=e.className,l=e.children,u=Object(S.a)(e,["bsPrefix","closeLabel","closeVariant","closeButton","className","children"]);n=Object(U.c)(n,"toast-header");var d=Object(o.useContext)(W),b=Object(F.a)((function(e){null==d||null==d.onClose||d.onClose(e)}));return Object(r.jsxs)("div",Object(g.a)(Object(g.a)({ref:t},u),{},{className:R()(n,s),children:[l,i&&Object(r.jsx)(q,{"aria-label":a,variant:c,onClick:b,"data-dismiss":"toast"})]}))}));H.displayName="ToastHeader",H.defaultProps={closeLabel:"Close",closeButton:!0};var z=H,J=n(496),G=Object(J.a)("toast-body"),Y=o.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.transition,i=void 0===c?D:c,s=e.show,l=void 0===s||s,u=e.animation,d=void 0===u||u,b=e.delay,j=void 0===b?5e3:b,p=e.autohide,O=void 0!==p&&p,m=e.onClose,h=e.bg,f=Object(S.a)(e,["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"]);n=Object(U.c)(n,"toast");var v=Object(o.useRef)(j),x=Object(o.useRef)(m);Object(o.useEffect)((function(){v.current=j,x.current=m}),[j,m]);var _=Object(T.a)(),y=!(!O||!l),N=Object(o.useCallback)((function(){y&&(null==x.current||x.current())}),[y]);Object(o.useEffect)((function(){_.set(N,v.current)}),[_,N]);var C=Object(o.useMemo)((function(){return{onClose:m}}),[m]),P=!(!i||!d),E=Object(r.jsx)("div",Object(g.a)(Object(g.a)({},f),{},{ref:t,className:R()(n,a,h&&"bg-".concat(h),!P&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return Object(r.jsx)(W.Provider,{value:C,children:P&&i?Object(r.jsx)(i,{in:l,unmountOnExit:!0,children:E}):E})}));Y.displayName="Toast";var X=Object.assign(Y,{Body:G,Header:z}),Q=n(481),Z=n(29),$=(n(669),function(){var e,t,n=Object(o.useState)(!1),a=Object(c.a)(n,2),i=a[0],s=a[1],j=Object(o.useState)(""),p=Object(c.a)(j,2),O=p[0],m=p[1],y=Object(l.d)((function(e){return e})).user,N=Object(u.g)(),S=Object(u.h)(),A=(t=S.search,new URLSearchParams(t)).get("redirect"),R=Object(l.c)(),T=Object(o.useState)(!1),w=Object(c.a)(T,2),I=w[0],k=w[1],L=Object(o.useState)(!1),D=Object(c.a)(L,2),F=D[0],U=D[1],B=Object(o.useState)("login"),V=Object(c.a)(B,2),M=V[0],K=V[1],q=Object(o.useState)(),W=Object(c.a)(q,2),H=W[0],z=W[1],J=Object(o.useState)(!1),G=Object(c.a)(J,2),Y=G[0],$=G[1],ee=Object(o.useState)(""),te=Object(c.a)(ee,2),ne=te[0],ae=te[1],ce=Object(o.useState)(""),re=Object(c.a)(ce,2),oe=re[0],ie=re[1],se=Object(o.useState)(""),le=Object(c.a)(se,2),ue=(le[0],le[1],Object(o.useState)(!1)),de=Object(c.a)(ue,2),be=de[0],je=de[1],pe=Object(o.useState)({name:"",email:"",accepted_terms_and_condition:""}),Oe=Object(c.a)(pe,2),me=Oe[0],he=Oe[1],fe=Object(o.useState)({}),ve=Object(c.a)(fe,2),ge=ve[0],xe=ve[1],_e=Object(o.useState)(!1),ye=Object(c.a)(_e,2),Ne=(ye[0],ye[1],Object(o.useState)({name:!1,valid_name:!1,email:!1,valid_email:!1,phone_no:!1,valid_phone_no:!1,accepted_terms_and_condition:!1})),Ce=Object(c.a)(Ne,2),Pe=Ce[0],Ee=Ce[1],Se=Object(o.useState)({phone_no:!1,valid_phone_no:!1}),Ae=Object(c.a)(Se,2),Re=Ae[0],Te=Ae[1],we=function(e){"Enter"===e.key&&De()};Object(o.useEffect)((function(){(null===y||void 0===y?void 0:y.login)&&Object(d.a)()&&(A?window.open(A,"_self"):N.push("/"))}),[y,N,null===(e=S.state)||void 0===e?void 0:e.from,A]);var Ie=function(e){e.target.value?"name"===e.target.name?Object(Q.e)(e.target.value)&&(he(Object(g.a)(Object(g.a)({},me),{},Object(v.a)({},e.target.name,Object(Q.f)(e.target.value)))),Ee(Object(g.a)(Object(g.a)({},Pe),{},Object(v.a)({},e.target.name,!1)))):"email"===e.target.name?(he(Object(g.a)(Object(g.a)({},me),{},Object(v.a)({},e.target.name,e.target.value.trim()))),Ee(Object(g.a)(Object(g.a)({},Pe),{},Object(v.a)({},e.target.name,!1)))):(he(Object(g.a)(Object(g.a)({},me),{},Object(v.a)({},e.target.name,e.target.value))),Ee(Object(g.a)(Object(g.a)({},Pe),{},Object(v.a)({},e.target.name,!1)))):(he(Object(g.a)(Object(g.a)({},me),{},Object(v.a)({},e.target.name,e.target.value))),Ee(Object(g.a)(Object(g.a)({},Pe),{},Object(v.a)({},e.target.name,!0))))},ke=function(){var e=Object(g.a)({},Pe);return e=me.name?Object(Q.e)(me.name)?Object(g.a)(Object(g.a)({},e),{},{valid_name:!1}):Object(g.a)(Object(g.a)({},e),{},{valid_name:!0}):Object(g.a)(Object(g.a)({},e),{},{name:!0}),e=me.email?Object(Q.d)(me.email)?Object(g.a)(Object(g.a)({},e),{},{valid_email:!1}):Object(g.a)(Object(g.a)({},e),{},{valid_email:!0}):Object(g.a)(Object(g.a)({},e),{},{email:!0}),e=me.mobile?Object(Q.c)(me.mobile,me.phone_code)?Object(g.a)(Object(g.a)({},e),{},{valid_phone_no:!1}):Object(g.a)(Object(g.a)({},e),{},{valid_phone_no:!0}):Object(g.a)(Object(g.a)({},e),{},{phone_no:!0}),me.accepted_terms_and_condition||(e=Object(g.a)(Object(g.a)({},e),{},{accepted_terms_and_condition:!0})),Ee(e),!(e.name||e.valid_name||e.email||e.phone_no||e.valid_email||e.valid_phone_no||e.accepted_terms_and_condition)},Le=function(){var e=Object(g.a)({},Re);return e=ge.mobile?Object(Q.c)(ge.mobile,ge.phone_code)?Object(g.a)(Object(g.a)({},e),{},{valid_phone_no:!1}):Object(g.a)(Object(g.a)({},e),{},{valid_phone_no:!0}):Object(g.a)(Object(g.a)({},e),{},{phone_no:!0}),Te(e),!e.phone_no&&!e.valid_phone_no},De=function(){var e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ke())try{U(!0),z(""),R(Object(b.c)(me,z,$,ae,U)),console.log(Y,"otp"),console.log(ne,"id")}catch(a){U(!1),console.log(a),422===(null===a||void 0===a?void 0:a.status)?(z(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message),null===a||void 0===a||null===(n=a.data)||void 0===n||n.error_code):console.log("\ud83d\ude80 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(f.a)(h.a.mark((function e(){var t,n,a,c,r,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z(null),6!==oe.length){e.next=21;break}return e.prev=2,z(""),je(!0),e.next=7,Object(Z.d)({id:ne,otp:oe});case 7:i=e.sent,Object(d.c)(null===i||void 0===i||null===(t=i.data)||void 0===t||null===(n=t.responseData)||void 0===n||null===(a=n.user)||void 0===a?void 0:a.token),je(!1),k(!0),R(Object(b.a)(null===i||void 0===i||null===(c=i.data)||void 0===c||null===(r=c.responseData)||void 0===r||null===(o=r.user)||void 0===o?void 0:o.token)),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),je(!1),z("It seems you have entered the wrong OTP. Please check the number(s) you have entered."),console.log("\ud83d\ude80 ~ file: index.js ~ line 172 ~ handleVerifyOTP ~ error",e.t0);case 19:e.next=22;break;case 21:z("Please enter the full OTP received through your email.");case 22:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(Object(b.b)(ge,z,$,ae,s,m));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Le())try{U(!0),z(""),R(Object(b.b)(ge,z,$,ae,s,m)),console.log(Y,"otp"),console.log(ne,"id"),U(!1)}catch(a){U(!1),console.log(a),422===(null===a||void 0===a?void 0:a.status)?(z(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message),null===a||void 0===a||null===(n=a.data)||void 0===n||n.error_code):console.log("\ud83d\ude80 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"login-popup",children:Object(r.jsx)("div",{className:"form-box",children:Object(r.jsxs)("div",{className:"tab tab-nav-simple tab-nav-boxed form-tab",children:[Object(r.jsxs)("ul",{className:"nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5",role:"tablist",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat("login"==M?"active":""," border-no lh-1 ls-normal"),href:"#signin",onClick:function(){K("login"),$(""),z(""),k(""),je(""),U(!1)},children:"Login"})}),Object(r.jsx)("li",{className:"delimiter",children:"or"}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link ".concat("register"==M?"active":""," border-no lh-1 ls-normal"),onClick:function(){K("register"),$(""),z(""),k(""),je(""),U(!1)},children:"Register"})})]}),Object(r.jsxs)("div",{className:"tab-content",children:[Object(r.jsx)("div",{className:"tab-pane ".concat("login"==M?"active":""),id:"signin",children:Y?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)(E.a,{className:"otp_flex",children:[Object(r.jsxs)(P.a,{children:[Object(r.jsx)("h3",{children:"Enter the OTP"})," "]}),Object(r.jsx)(P.a,{className:"text-right",children:Object(r.jsx)("div",{className:"cursor_pointer",onClick:function(){return $(!1)},children:Object(r.jsx)("h4",{children:"Change"})})})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(C,{onChange:function(e){return ie(e)},value:oe})}),Object(r.jsx)("button",{type:"button",className:"btn btn-dark btn-block btn-rounded",onClick:Fe,disabled:be||I,children:I?"Verified Successfully, please wait...":Object(r.jsx)(r.Fragment,{children:be?"Verifying...":"Continue"})}),H&&Object(r.jsx)("p",{className:"error_text text-center",children:H})]}),Object(r.jsxs)("div",{className:"form-footer py-3",children:[Object(r.jsxs)("div",{className:"form-checkbox",children:[Object(r.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),Object(r.jsx)("label",{className:"form-control-label",for:"signin-remember",children:"Remember me"})]}),Object(r.jsx)("a",{href:"#",className:"lost-link",onClick:function(){return Ue()},children:"Resend code"})]})]}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)(x.a,{title:"Mobile",defaultCountry:"in",value:ge.mobile,required:Re.phone_no,onChange:function(e,t){var n;xe(Object(g.a)(Object(g.a)({},ge),{},{mobile:e,phone_code:null===t||void 0===t||null===(n=t.countryCode)||void 0===n?void 0:n.toUpperCase()})),Ee(e?Object(g.a)(Object(g.a)({},Re),{},{phone_no:!1}):Object(g.a)(Object(g.a)({},Re),{},{phone_no:!0}))}}),Re.valid_phone_no&&Object(r.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"})]}),Object(r.jsx)("button",{className:"btn btn-dark btn-block btn-rounded",type:"submit",onClick:Be,disabled:F,children:F?"Loading":"Request OTP"}),"confirm-email"===H?"":"login-locked"===H?Object(r.jsxs)("p",{className:"error_text text-center",children:["Your login has been disabled because we detected a suspicions activity on your account."," ",Object(r.jsx)("a",{href:"https://help.jump.trade/en/support/solutions/articles/84000345960-why-is-my-login-disabled-",children:"Learn more"})]}):Object(r.jsx)("p",{className:"error_text text-center",children:H})]})}),Object(r.jsx)("div",{className:"tab-pane ".concat("register"==M?"active":""),id:"register",children:Y?Object(r.jsxs)("div",{children:[Object(r.jsxs)(E.a,{className:"otp_flex",children:[Object(r.jsxs)(P.a,{children:[Object(r.jsx)("h3",{children:"Enter the OTP"})," "]}),Object(r.jsx)(P.a,{className:"text-right",children:Object(r.jsx)("div",{className:"cursor_pointer",onClick:function(){return $(!1)},children:Object(r.jsx)("h4",{children:"Change"})})})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(C,{onChange:function(e){return ie(e)},value:oe})}),Object(r.jsx)("button",{type:"button",className:"btn btn-dark btn-block btn-rounded",onClick:Fe,disabled:be||I,children:I?"Verified Successfully, please wait...":Object(r.jsx)(r.Fragment,{children:be?"Verifying...":"Continue"})}),H&&Object(r.jsx)("p",{className:"error_text text-center",children:H})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)(_.a,{title:"Name",name:"name",placeholder:"Enter Name",value:me.name,required:Pe.name,onKeyPress:we,onChange:Ie}),Pe.valid_name&&Object(r.jsx)("p",{className:"error_text",children:"Please enter a valid name"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)(_.a,{title:"Email",name:"email",placeholder:"Enter Email",required:Pe.email,value:me.email,onKeyPress:we,onChange:Ie}),Pe.valid_email&&Object(r.jsx)("p",{className:"error_text",children:"Please enter a valid email address"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)(x.a,{title:"Mobile",defaultCountry:"in",value:me.mobile,required:Pe.phone_no,onEnterKeyPress:De,onChange:function(e,t){var n;he(Object(g.a)(Object(g.a)({},me),{},{mobile:e,phone_code:null===t||void 0===t||null===(n=t.countryCode)||void 0===n?void 0:n.toUpperCase()})),Ee(e?Object(g.a)(Object(g.a)({},Pe),{},{phone_no:!1}):Object(g.a)(Object(g.a)({},Pe),{},{phone_no:!0}))}}),Pe.valid_phone_no&&Object(r.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"})]}),Object(r.jsx)("div",{className:"form-footer",children:Object(r.jsxs)("div",{className:"form-checkbox",children:[Object(r.jsx)("input",{type:"checkbox",className:"custom-checkbox",onChange:Ie,name:"accepted_terms_and_condition",id:"register-agree"}),Object(r.jsx)("label",{className:"form-control-label",for:"register-agree",children:"I agree to the privacy policy"}),Pe.accepted_terms_and_condition&&Object(r.jsx)("p",{className:"error_text",children:"Please check the Terms and Condition"})]})}),Object(r.jsx)("button",{className:"btn btn-dark btn-block btn-rounded",disabled:F,type:"button",onClick:De,children:F?"Loading...":"Register"}),"confirm-email"===H?"":"login-locked"===H?Object(r.jsxs)("p",{className:"error_text text-center",children:["Your login has been disabled because we detected a suspicions activity on your account."," ",Object(r.jsx)("a",{href:"https://help.jump.trade/en/support/solutions/articles/84000345960-why-is-my-login-disabled-",children:"Learn more"})]}):Object(r.jsx)("p",{className:"error_text text-center",children:H})]}),Object(r.jsx)("div",{className:"form-choice text-center",children:Object(r.jsx)("label",{className:"ls-m",children:"or Register With"})})]})})]}),Object(r.jsx)(P.a,{sm:4,children:Object(r.jsx)(E.a,{children:Object(r.jsx)(P.a,{xs:6,children:Object(r.jsx)(X,{onClose:function(){return s(!1)},show:i,delay:3e3,autohide:!0,children:Object(r.jsx)(X.Body,{children:Object(r.jsx)("p",{children:O})})})})})})]})})})})});t.default=function(){var e,t=Object(u.h)(),n=Object(u.i)().url,a=Object(u.g)(),i=Object(l.c)(),m=Object(j.a)(),h=m.get("fsz"),f=m.get("token"),v=(m.get("_ga"),m.get("redirect")),g=Object(l.d)((function(e){return e.user.data})).user,x=Object(o.useState)([]),_=Object(c.a)(x,2);_[0],_[1];return Object(o.useEffect)((function(){h&&(sessionStorage.setItem("fsz",h),Object(d.d)("source",h)),f&&(Object(d.c)(f),a.replace(n),i(Object(b.a)(f)))}),[]),Object(o.useEffect)((function(){(null===g||void 0===g?void 0:g.login)&&Object(d.a)()&&(v?window.open(v,"_self"):a.push("/"))}),[g,a,null===(e=t.state)||void 0===e?void 0:e.from,v]),Object(o.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(s.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),s.a.pageView())}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)("nav",{className:"breadcrumb-nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("ul",{className:"breadcrumb",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("i",{className:"d-icon-home"})})}),Object(r.jsx)("li",{children:"My Account"})]})})}),Object(r.jsx)("div",{className:"page-content mt-6 pb-2 mb-10",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)($,{})})})]}),Object(r.jsx)(O.a,{})]})}}}]);
//# sourceMappingURL=13.e90f5d11.chunk.js.map