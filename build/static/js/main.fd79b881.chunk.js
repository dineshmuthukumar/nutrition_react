(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[3],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(54),a=n(3),c=n(34),o={data:{},login:!1,loading:!1,error:!1,errorData:{},marketLive:!1},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;return r===c.d&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!0})),r===c.e&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,login:!0,data:n})),r===c.c&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,error:!0,errorData:n})),r===c.f&&(e=Object(a.a)(Object(a.a)({},e),{},{data:{},login:!1,loading:!1,error:!1,errorData:{}})),r===c.g&&(e=Object(a.a)(Object(a.a)({},e),{},{data:{user:Object(a.a)(Object(a.a)({},e.data.user),{},{balance:n.balance,locked:n.locked})}})),r===c.a&&(e=Object(a.a)(Object(a.a)({},e),{},{marketLive:!0})),r===c.b&&(e=Object(a.a)(Object(a.a)({},e),{},{marketLive:!1})),e},u=n(109),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1?arguments[1]:void 0;return t.type===u.a&&(e=t.payload),e},s=n(22),l={data:{},checkout:!1,loading:!1,error:!1,errorData:{}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;return r===s.b&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!0})),r===s.c&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,data:Object(a.a)(Object(a.a)({},e.data),{},{total_count:n.count})})),r===s.a&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,error:!0,errorData:n})),r===s.m&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!0})),r===s.n&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,data:Object(a.a)(Object(a.a)({},e.data),{},{total_count:n.count})})),r===s.l&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,error:!0,errorData:n})),r===s.g&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!0})),r===s.h&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,data:n})),r===s.f&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,error:!0,errorData:n})),r===s.j&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!0})),r===s.k&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,data:n})),r===s.i&&(e=Object(a.a)(Object(a.a)({},e),{},{loading:!1,error:!0,errorData:n})),r===s.e&&(e=Object(a.a)(Object(a.a)({},e),{},{data:{},loading:!1,error:!1,errorData:{}})),r===s.d&&(e=Object(a.a)(Object(a.a)({},e),{},{checkout:n})),e},b=Object(r.combineReducers)({lang:d,user:i,cart:f}),p=n(110),j=n(222),O=n(223),m=Object(r.createStore)(b,Object(p.load)(),Object(j.composeWithDevTools)(Object(r.applyMiddleware)(O.a,Object(p.save)())))},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="CHANGE_LANG",a=function(e){return function(t){t({type:r,payload:e})}}},142:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(14);t.a=function(){var e=Object(c.h)().search;return a.a.useMemo((function(){return new URLSearchParams(e)}),[e])}},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"m",(function(){return o})),n.d(t,"n",(function(){return i})),n.d(t,"l",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return b})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return v})),n.d(t,"o",(function(){return g})),n.d(t,"z",(function(){return h})),n.d(t,"A",(function(){return y})),n.d(t,"y",(function(){return E})),n.d(t,"t",(function(){return _})),n.d(t,"u",(function(){return x})),n.d(t,"s",(function(){return S})),n.d(t,"w",(function(){return w})),n.d(t,"x",(function(){return T})),n.d(t,"v",(function(){return C})),n.d(t,"r",(function(){return R}));var r="ADD_TO_CART_REQUEST",a="ADD_TO_CART_SUCCESS",c="ADD_TO_CART_FAILURE",o="REMOVE_FROM_CART_REQUEST",i="REMOVE_FROM_CART_SUCCESS",u="REMOVE_FROM_CART_FAILURE",d="GET_CART_LIST_REQUEST",s="GET_CART_LIST_SUCCESS",l="GET_CART_LIST_FAILURE",f="PROCEED_CHECKOUT_REQUEST",b="PROCEED_CHECKOUT_SUCCESS",p="PROCEED_CHECKOUT_FAILURE",j="CLEAR_CART",O="CHECKOUT_EVENT",m=function(){return{type:r}},v=function(e){return{type:a,payload:e}},g=function(e){return{type:c,payload:e}},h=function(){return{type:o}},y=function(e){return{type:i,payload:e}},E=function(e){return{type:u,payload:e}},_=function(){return{type:d}},x=function(e){return{type:s,payload:e}},S=function(e){return{type:l,payload:e}},w=function(){return{type:f}},T=function(e){return{type:b,payload:e}},C=function(e){return{type:p,payload:e}},R=function(e){return{type:O,payload:e}}},225:function(e){e.exports=JSON.parse('{"abnft":"AB NFT","signin":"Sign In","signup":"Sign Up","signout":"Sign Out","register":"Register","accountsettings":"Account Settings","profileinformation":"Profile Information","verify":"Verify","copytoclipboard":"Copy to Clipboard","mobilenumber":"Mobile Number","copied":"Copied","balance":"Balance","dashboard":"Dashboard","removecard":"Remove Card","editprofile":"Edit Profile","paymentmethod":"Payment Method","sellersettings":"Seller Settings","notifications":"Notifications","security":"Security","otp":"OTP","name":"Name","bio":"Bio","username":"Username","validate":"Validate","emailaddress":"Email Address","updateprofile":"Update Profile","confirmpassword":"Confirm Password","validateyourprofile":"Validate your profile","mobile":"Mobile","validatedesc":" Validate your unique identity by linking your phone number with your account. Once your profile is validated, you will be approved to participate in all drops that require profile validation to purchase.","password":"Password","sendemail":"Send Email","dontreceivecode":"Don\'t receive code?","resend":"Click here to resend OTP","sociallink":"Social Link","logintitle":"Login And Explore In My World","forgotpassword":"Forgot Password","donthaveaccount":"Don\'t have an account?","haveaccount":"Already have an account?","displayname":"Display Name","logindesc":"Explore the world around you with us with comfortable and quality services, let\'s join immediately and get the benefits","firstname":"First Name","lastname":"Last Name"}')},226:function(e){e.exports=JSON.parse('{"abnft":"AB NFT","signin":"\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902","signup":"\u0938\u093e\u0907\u0928 \u0905\u092a \u0915\u0930\u0947\u0902","signout":"\u0938\u093e\u0907\u0928 \u0906\u0909\u091f","verify":"\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902","otp":"OTP","name":"\u0928\u093e\u092e","bio":"\u091c\u0948\u0935","username":"\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0928\u093e\u092e","copytoclipboard":"\u0915\u094d\u0932\u093f\u092a\u092c\u094b\u0930\u094d\u0921 \u092a\u0930 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902","removecard":"\u0915\u093e\u0930\u094d\u0921 \u0928\u093f\u0915\u093e\u0932\u0947\u0902","mobilenumber":"\u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930","copied":"\u0915\u0949\u092a\u0940 \u0915\u093f\u092f\u093e \u0917\u092f\u093e","validate":"\u092e\u093e\u0928\u094d\u092f","emailaddress":"\u0908\u092e\u0947\u0932 \u092a\u0924\u093e","updateprofile":"\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0915\u094b \u0928\u0935\u0940\u0928\u0924\u092e \u092c\u0928\u093e\u0913","confirmpassword":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0940\u091c\u093f\u092f\u0947","validateyourprofile":"\u0905\u092a\u0928\u0940 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902","mobile":"\u092e\u094b\u092c\u093e\u0907\u0932","validatedesc":"\u0905\u092a\u0928\u0947 \u092b\u093c\u094b\u0928 \u0928\u0902\u092c\u0930 \u0915\u094b \u0905\u092a\u0928\u0947 \u0916\u093e\u0924\u0947 \u0938\u0947 \u091c\u094b\u0921\u093c\u0915\u0930 \u0905\u092a\u0928\u0940 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u092a\u0939\u091a\u093e\u0928 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902\u0964 \u090f\u0915 \u092c\u093e\u0930 \u0906\u092a\u0915\u0940 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u092e\u093e\u0928\u094d\u092f \u0939\u094b \u091c\u093e\u0928\u0947 \u0915\u0947 \u092c\u093e\u0926, \u0906\u092a\u0915\u094b \u0909\u0928 \u0938\u092d\u0940 \u0921\u094d\u0930\u0949\u092a\u094d\u0938 \u092e\u0947\u0902 \u092d\u093e\u0917 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0935\u0940\u0915\u0943\u0924 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e, \u091c\u093f\u0928\u094d\u0939\u0947\u0902 \u0916\u0930\u0940\u0926\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0939\u094b\u0924\u0940 \u0939\u0948\u0964","password":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921","sendemail":"\u0908\u092e\u0947\u0932 \u092d\u0947\u091c\u0947\u0902","dontreceivecode":"\u0915\u094b\u0921 \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e?","resend":"\u092b\u093f\u0930 \u0938\u0947 \u092d\u0947\u091c\u0947\u0902?","balance":"\u0938\u0902\u0924\u0941\u0932\u0928","sociallink":"\u0938\u093e\u092e\u093e\u091c\u093f\u0915 \u0932\u093f\u0902\u0915","logintitle":"\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902 \u0914\u0930 \u092e\u0947\u0930\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u092e\u0947\u0902 \u090f\u0915\u094d\u0938\u092a\u094d\u0932\u094b\u0930 \u0915\u0930\u0947\u0902","forgotpassword":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u092d\u0942\u0932 \u0917\u090f","donthaveaccount":"\u0916\u093e\u0924\u093e \u0928\u0939\u0940\u0902 \u0939\u0948?","haveaccount":"\u0915\u094d\u092f\u093e \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u092a\u0939\u0932\u0947 \u0938\u0947 \u090f\u0915 \u0916\u093e\u0924\u093e \u092e\u094c\u091c\u0942\u0926 \u0939\u0948?","displayname":"\u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u093e \u0928\u093e\u092e","dashboard":"\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921","editprofile":"\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0938\u0902\u092a\u093e\u0926\u093f\u0924 \u0915\u0930\u0947\u0902","paymentmethod":"\u092d\u0941\u0917\u0924\u093e\u0928 \u0935\u093f\u0927\u093f","sellersettings":"\u0935\u093f\u0915\u094d\u0930\u0947\u0924\u093e \u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938","notifications":"\u0938\u0942\u091a\u0928\u093e\u090f\u0902","security":"\u0938\u0941\u0930\u0915\u094d\u0937\u093e","logindesc":"\u0906\u0930\u093e\u092e\u0926\u093e\u092f\u0915 \u0914\u0930 \u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e\u092a\u0942\u0930\u094d\u0923 \u0938\u0947\u0935\u093e\u0913\u0902 \u0915\u0947 \u0938\u093e\u0925 \u0939\u092e\u093e\u0930\u0947 \u0938\u093e\u0925 \u0905\u092a\u0928\u0947 \u0906\u0938-\u092a\u093e\u0938 \u0915\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u0915\u093e \u0905\u0928\u094d\u0935\u0947\u0937\u0923 \u0915\u0930\u0947\u0902, \u0906\u0907\u090f \u0924\u0941\u0930\u0902\u0924 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902 \u0914\u0930 \u0932\u093e\u092d \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902"}')},27:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(70),a=n.n(r),c="bl_base_user_token",o=function(e,t){var n=new Date;n.setDate(Date.now()+12096e5);a.a.save(e,t,{path:"/",expires:n,maxAge:31536e3,domain:".jump.trade",secure:!0})},i=function(e){var t=new Date;t.setDate(Date.now()+12096e5);a.a.save(c,e,{path:"/",expires:t,maxAge:31536e3,domain:".jump.trade",secure:!0})},u=function(){return a.a.load(c)},d=function(){a.a.remove(c,{path:"/",domain:".jump.trade"})}},34:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return f})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return p}));var r="USER_LOGIN_REQUEST",a="USER_LOGIN_SUCCESS",c="USER_LOGIN_FAILURE",o="USER_WALLET_UPDATE",i="USER_LOGOUT",u="MARKET_LIVE",d="MARKET_LIVE_OFF",s=function(e){return{type:a,payload:e}},l=function(){return{type:i}},f=function(e){return{type:o,payload:e}},b=function(){return{type:u}},p=function(){return{type:d}}},466:function(e,t,n){},467:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){},47:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(36),a=n.n(r),c=n(55),o=n(68),i=n(27),u=n(34),d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Object(i.a)()){e.next=5;break}return e.next=5,Object(o.d)();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: user_thunk.js ~ line 58 ~ return ~ err",e.t0);case 10:Object(i.b)(),t(Object(u.k)());case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},s=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o.f)(e);case 3:r=t.sent,n(Object(u.j)(r.data.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\ud83d\ude80 ~ file: user_thunk.js ~ line 58 ~ return ~ err",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(u.h)());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(u.i)());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},470:function(e,t,n){},472:function(e,t,n){"use strict";n.r(t);var r=n(6),a=(n(229),n(239),n(1)),c=n(69),o=n.n(c),i=n(144),u=n(56),d=n(221),s=n(36),l=n.n(s),f=n(55),b=n(88),p=n(111),j=n(14),O=n(143),m=n(109),v=n(108),g=n(27),h=n(68),y=n(47),E=n(142),_=n(224),x=n.n(_),S=n.p+"static/media/load.0fc016af.gif",w=(n(466),n(467),n(468),n(469),Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8),n.e(1),n.e(9)]).then(n.bind(null,584))}))),T=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(10)]).then(n.bind(null,587))})),C=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(6)]).then(n.bind(null,585))})),R=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(11)]).then(n.bind(null,589))})),L=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(12)]).then(n.bind(null,588))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(7)]).then(n.bind(null,586))})),A=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(13)]).then(n.bind(null,590))})),D=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(14)]).then(n.bind(null,591))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,581))}));var P=function(){var e=Object(j.g)(),t=Object(j.h)().pathname,n=Object(u.c)(),c=Object(E.a)(),o=c.get("fsz"),i=c.get("token"),s=c.get("aid");return Object(a.useEffect)((function(){if(o&&(sessionStorage.setItem("fsz",o),Object(g.d)("source",o)),i&&(Object(g.c)(i),e.replace(t),n(Object(y.c)(i))),s){var r,a=Object(d.a)(c.entries());try{for(a.s();!(r=a.n()).done;){var u=Object(b.a)(r.value,2),l=u[0],f=u[1];Object(g.d)(l,f)}}catch(p){a.e(p)}finally{a.f()}}}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",component:w}),Object(r.jsx)(j.b,{exact:!0,path:"/category",component:T}),Object(r.jsx)(j.b,{exact:!0,path:"/product",component:C}),Object(r.jsx)(j.b,{exact:!0,path:"/about",component:R}),Object(r.jsx)(j.b,{exact:!0,path:"/blogpost",component:L}),Object(r.jsx)(j.b,{exact:!0,path:"/freetrial",component:k}),Object(r.jsx)(j.b,{exact:!0,path:"/contact",component:A}),Object(r.jsx)(j.b,{exact:!0,path:"/privacy",component:D}),Object(r.jsx)(j.b,{exact:!0,path:"/terms",component:U}),Object(r.jsx)(j.b,{exact:!0,component:function(){return Object(r.jsx)(j.a,{to:"/newhome"})}})]})})},I=Object(u.b)(null,(function(e){return{change_lang:function(t){e(Object(m.b)(t))}}}))((function(e){var t="Jul 13, 2022 11:30:00",n=Object(a.useState)(),c=Object(b.a)(n,2),o=(c[0],c[1]),i=Object(u.c)(),d=Object(a.useState)(!0),s=Object(b.a)(d,2),m=s[0],E=s[1],_=Object(u.d)((function(e){return e})),w=_.lang,T=_.user,C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(new Date).getTimezoneOffset(),r=new Date(t);r.setMinutes(r.getMinutes()-n);var a=new Date;e&&a.setSeconds(a.getSeconds()+2),new Date(r)<a?i(Object(y.b)()):(o(r),i(Object(y.a)()))};Object(a.useEffect)((function(){C(!1)}),[]),Object(a.useEffect)((function(){e.change_lang(w),Object(v.setLanguage)(w),x.a.init("fb37da042db19dafef9b171500d64106",{debug:!0})}),[e,w]);var R=function(e){var t=(new Date).getTimezoneOffset(),n=new Date;n.setMinutes(n.getMinutes()- -1*t),n.toString()},L=function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.b)();case 3:t=e.sent,R(t.data.data.time),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: App.js ~ line 48 ~ getServerTime ~ error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return window.setFiredeskdetails=function(){setTimeout((function(){var e;if(null===(e=T.data)||void 0===e?void 0:e.user){var t,n,r,a;if(document.getElementById("chat-fc-name"))document.getElementById("chat-fc-name").value=(null===(t=T.data)||void 0===t?void 0:t.user.first_name)+" "+(null===(n=T.data)||void 0===n?void 0:n.user.last_name),document.getElementById("chat-fc-name").disabled=!0;if(document.getElementById("chat-fc-email"))document.getElementById("chat-fc-email").value=null===(r=T.data)||void 0===r?void 0:r.user.email,document.getElementById("chat-fc-email").disabled=!0;if(document.getElementById("chat-fc-phone"))document.getElementById("chat-fc-phone").value=null===(a=T.data)||void 0===a?void 0:a.user.phone_no,document.getElementById("chat-fc-phone").disabled=!0}}),1e3)},Object(a.useEffect)((function(){var e,t=Object(g.a)();t&&i(Object(y.c)(t)),(null===(e=T.data)||void 0===e?void 0:e.user)&&!t&&i(Object(y.d)())}),[]),Object(a.useEffect)((function(){window.addEventListener("online",(function(e){E(navigator.onLine)})),window.addEventListener("offline",(function(e){E(navigator.onLine)})),L()}),[]),Object(r.jsxs)(r.Fragment,{children:[!m&&Object(r.jsxs)("div",{className:"offline-ribbon",children:[Object(r.jsx)("div",{className:"first",children:"You are offline, please check you internet connection"}),Object(r.jsx)("div",{children:Object(r.jsx)(O.a,{onClick:function(){return E(!0)},role:"button"})})]}),Object(r.jsx)("div",{className:"top-loader"}),Object(r.jsx)("div",{className:"riode-rounded-skin",children:Object(r.jsx)(p.a,{basename:"/",children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{className:"d-flex gif-loader",children:Object(r.jsx)("img",{src:S,alt:"loader"})}),children:Object(r.jsx)(j.d,{children:Object(r.jsx)(j.b,{exact:!0,component:P})})})})})]})})),F=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,582)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},N=n(225),M=n(226),z=n(106);n(470),n(471);Object(v.setTranslations)({en:N,hi:M}),o.a.render(Object(r.jsxs)(u.a,{store:z.a,children:[Object(r.jsx)(I,{}),Object(r.jsx)(i.a,{position:"top-right",autoClose:15e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}),document.getElementById("root")),F()},68:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return j}));n(3);var r=n(105),a=n.n(r),c=n(27),o=n(106),i=n(47),u=a.a.create({baseURL:"https://baseapi.jump.trade/api/v1"});u.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(c.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),u.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(c.a)()||o.a.dispatch(Object(i.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(c.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var d=u,s=function(){return d.delete("/logout")},l=function(e){return d.get("/users/me",{headers:{Authorization:e}})},f=function(e){return d.get("/users/notifications?page=".concat(e))},b=function(){return d.post("/users/notification_read")},p=function(){return a.a.get("".concat("https://baseapi.jump.trade/api/v1".replace("api/v1",""),"/time"))},j=function(e,t){return d.post("/subscribe_emails",{subscribe_emails:{email:e,source:t}})}}},[[472,4,5]]]);
//# sourceMappingURL=main.fd79b881.chunk.js.map