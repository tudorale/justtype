(this.webpackJsonptypinghub=this.webpackJsonptypinghub||[]).push([[12],{103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var s=n(104);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var o=n(105),r=null,a="https://api.emailjs.com";function i(e,t,n){return void 0===n&&(n={}),new Promise((function(o,r){var a=new XMLHttpRequest;for(var i in a.addEventListener("load",(function(e){var t=new s.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?o(t):r(t)})),a.addEventListener("error",(function(e){r(new s.EmailJSResponseStatus(e.target))})),a.open("POST",e,!0),n)a.setRequestHeader(i,n[i]);a.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e,t){r=e,a=t||"https://api.emailjs.com"}function d(e,t,n,s){var o={lib_version:"2.6.4",user_id:s||r,service_id:e,template_id:t,template_params:c(n)};return i(a+"/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})}function h(e,t,n,s){var c;if("string"===typeof n&&(n=document.querySelector("#"!==(c=n)[0]&&"."!==c[0]?"#"+c:c)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";o.UI.progressState(n);var l=new FormData(n);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s||r),i(a+"/api/v1.0/email/send-form",l).then((function(e){return o.UI.successState(n),e}),(function(e){return o.UI.errorState(n),Promise.reject(e)}))}t.init=l,t.send=d,t.sendForm=h,t.default={init:l,send:d,sendForm:h}},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var s=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=s},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var s=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=s},263:function(e,t,n){"use strict";n.r(t);var s=n(9),o=n(0),r=n.n(o),a=(n(21),n(103)),i=n.n(a),c=n(15),l=n(36),d=n(1);var h=function(){var e=!1;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"effect",onClick:function(){e=!1;var t=document.querySelector(".mobileNav"),n=document.querySelector(".effect");t.style.display="none",n.style.opacity="0",n.style.zIndex="-2"}}),Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("h1",{className:"logoNav",children:Object(d.jsxs)(l.a,{to:"/#",children:["TypingHu",Object(d.jsx)("span",{})]})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.a,{smooth:!0,to:"#what",children:"What?"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.a,{smooth:!0,to:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.a,{smooth:!0,to:"#contact",children:"Contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.a,{smooth:!0,to:"/play",children:"Speed Test"})})]}),Object(d.jsx)(c.b,{to:"/sign-in",children:Object(d.jsxs)("button",{className:"navButton",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(d.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(d.jsx)("p",{children:"Sign In"})]})}),Object(d.jsxs)("div",{className:"hamburger",onClick:function(){e=!e;var t=document.querySelector(".mobileNav"),n=document.querySelector(".effect");e?(t.style.display="block",n.style.opacity="0.5",n.style.zIndex="999"):(t.style.display="none",n.style.opacity="0",n.style.zIndex="-2")},children:[Object(d.jsx)("div",{className:"line line1",children:" "}),Object(d.jsx)("div",{className:"line line2",children:" "}),Object(d.jsx)("div",{className:"line line3",children:" "})]})]}),Object(d.jsxs)("div",{className:"mobileNav",children:[Object(d.jsx)("h1",{className:"logoNavMobile",children:Object(d.jsxs)(l.a,{to:"/",children:["TypingHu",Object(d.jsx)("span",{})]})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)(l.a,{smooth:!0,to:"#what",children:Object(d.jsx)("li",{children:"What?"})}),Object(d.jsx)(l.a,{smooth:!0,to:"#about",children:Object(d.jsx)("li",{children:"About"})}),Object(d.jsx)(l.a,{smooth:!0,to:"#contact",children:Object(d.jsx)("li",{children:"Contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.a,{smooth:!0,to:"/play",children:"Speed Test"})})]}),Object(d.jsx)(c.b,{to:"/sign-in",children:Object(d.jsxs)("button",{className:"navButtonMobile",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(d.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(d.jsx)("p",{children:"Sign In"})]})})]})]})},j=n.p+"static/media/progress.6056889a.jpg";t.default=function(){var e=n(33),t=Object(o.useState)(""),a=Object(s.a)(t,2),u=a[0],b=a[1],m=Object(o.useState)(0),p=Object(s.a)(m,2),x=p[0],O=p[1],v=r.a.useRef();Object(o.useEffect)((function(){var e=document.querySelector(".emailRestriction");0===x&&(e.style.display="none",clearInterval(v.current))}),[x]);var f=function(e,t){var n=document.querySelector("".concat(e));n&&(n.style.marginTop="".concat(t),n.style.fontSize="1rem")},g=function(e,t,n){var s=document.querySelector("".concat(t)),o=document.querySelector("".concat(e)).value;if(s){if(""!==o)return;s.style.marginTop="".concat(n),s.style.fontSize="1.1rem"}};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("div",{className:"hero",children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("span",{children:"Join"})," into the next biggest"," ",Object(d.jsx)("span",{children:"competitive platform"})," for typists and be the number one."]}),Object(d.jsxs)("div",{className:"hero_buttons",children:[Object(d.jsx)(c.b,{to:"/sign-in",children:Object(d.jsxs)("button",{className:"heroButton sign",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"signinIcon",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(d.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(d.jsx)("p",{children:"Sign In"})]})}),Object(d.jsx)(c.b,{to:"/sign-up",children:Object(d.jsxs)("button",{className:"heroButton join",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(d.jsx)("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),Object(d.jsx)("path",{d:"M16 11h6m-3 -3v6"})]}),Object(d.jsx)("p",{children:"Join"})]})})]}),Object(d.jsxs)("div",{className:"arrows",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"arrow",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(180 12 12)"})]}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"arrow",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(180 12 12)"})]}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"arrow",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(180 12 12)"})]})]})]}),Object(d.jsx)("h1",{className:"watermark",children:"FREE"}),Object(d.jsxs)("div",{className:"subHero_content",children:[Object(d.jsxs)("div",{className:"what",id:"what",children:[Object(d.jsx)("h1",{children:"What you will find?"}),Object(d.jsxs)("div",{className:"cards",children:[Object(d.jsxs)("div",{className:"card card-1",children:[Object(d.jsx)("h1",{children:"Ranking system"}),Object(d.jsx)("p",{children:"The ranking will be based on your number of points, for start you will have 0 points, you gain points by taking tests, depends in what category are you typing and what score you are getting, with the help from these points you can get in the leaderboard and get a rank (beginner, intermediate, advanced)."})]}),Object(d.jsxs)("div",{className:"card card-2",children:[Object(d.jsx)("h1",{children:"Leaderboard"}),Object(d.jsxs)("p",{children:["A top 10 leaderboard on the main page, in the leaderboard you will find the players and their points and how many tests have they taken also the users can go on your profile if they want, the leaderboard will be based on the points that you get from tests. At the end of the month the user with the most points will get PRO membership for a month ",Object(d.jsx)("span",{children:"*"}),".",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"*"})," - if the winner already has a membership he will get +200 points."]})]}),Object(d.jsxs)("div",{className:"card card-3",children:[Object(d.jsx)("h1",{children:"Tests"}),Object(d.jsx)("p",{children:'You have three categories where you can play, random, quotes and custom, on each category you will find a different system of typing, for example on "random" category you will have only lowercase random words. You have to make a minimum number of WPM to get the normal amount of points and an accuracy that is above 70% - non-abusing system.'})]})]})]}),Object(d.jsxs)("h1",{className:"addon",id:"about",children:["Improve your typing ",Object(d.jsx)("span",{children:"speed"})," with us by taking tests on different categories, and keep track of your progress."]}),Object(d.jsx)("img",{src:j,alt:"",id:"progress"}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h1",{children:"About"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:e.name})," is a ",Object(d.jsx)("span",{children:"free to use platform"})," where you can improve your typing speed by taking tests in three categories, random, quotes, and custom, by playing you are getting points and you can get into the leaderboard!.",Object(d.jsxs)("span",{children:[" ",e.name]})," was started on 1 May 2021 by",Object(d.jsx)("span",{children:" Tudor Alexandru"})," and it will be the next biggest competitive platform for people like me who love to type at the computer. You can play for free and if you want to support me you can buy the ",Object(d.jsx)("span",{children:"PRO"})," membership."]})]}),Object(d.jsxs)("div",{className:"pro",children:[Object(d.jsxs)("h1",{children:["Support the creator with a ",Object(d.jsx)("span",{children:"PRO Membership"})," for your account!"]}),Object(d.jsx)("div",{className:"pro_content",children:Object(d.jsxs)("p",{children:["- Global chat access",Object(d.jsx)("br",{}),"- PRO badge next to your name",Object(d.jsx)("br",{}),"- Fast responses from us",Object(d.jsx)("br",{}),"- Permanent membership",Object(d.jsx)("br",{}),"- No cashback",Object(d.jsx)("br",{}),"- Change your username multiple times",Object(d.jsx)("br",{}),"- Paymant via PayPal",Object(d.jsx)("br",{}),"- Customize your profile - Coming soon",Object(d.jsx)("br",{})]})}),Object(d.jsx)(l.a,{to:"/pro",children:Object(d.jsx)("button",{id:"contact",children:"Buy now! $4.99"})})]}),Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("h1",{children:"Contact"}),Object(d.jsx)("p",{children:"Fill the form below if you want to send an email to us, we will respond as soon as we can!"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector(".nameLabel"),n=document.querySelector(".emailLabel"),s=document.querySelector(".messageLabel"),o=document.querySelector(".loading");o&&(o.style.opacity="1");var r=document.querySelector(".emailRestriction");b(""),0===x?i.a.sendForm("service_srvaoe4","template_4p6r7zt",e.target,"user_Nhfa1wRoTgxUK7tXg0nDn").then((function(){e.target.reset(),O(120),v.current=setInterval((function(){O((function(e){return e-1}))}),1e3),b("Your email has been sent, as soon as we can we will respond. Thank you!"),o.style.opacity="0",t.style.marginTop="13px",n.style.marginTop="13x",s.style.marginTop="13px",t.style.fontSize="1.1rem",n.style.fontSize="1.1rem",s.style.fontSize="1.1rem"}),(function(){o.style.opacity="0",b("Something went wrong, try again or check the inputs.")})):(o&&(o.style.opacity="0"),r.style.display="block")},children:[Object(d.jsxs)("div",{className:"nameWrapper",children:[Object(d.jsx)("label",{htmlFor:"name",className:"nameLabel label",children:"Your name"}),Object(d.jsx)("input",{type:"text",required:!0,onBlur:function(){return g(".name",".nameLabel","13px")},onFocus:function(){return f(".nameLabel","-11px")},className:"name",id:"name",name:"name"})]}),Object(d.jsxs)("div",{className:"emailWrapper",children:[Object(d.jsx)("label",{htmlFor:"email",className:"emailLabel label",children:"Your email"}),Object(d.jsx)("input",{type:"email",required:!0,onBlur:function(){return g(".email",".emailLabel","13px")},onFocus:function(){return f(".emailLabel","-11px")},className:"email",id:"email",name:"email"})]}),Object(d.jsxs)("div",{className:"messageWrapper",children:[Object(d.jsx)("label",{htmlFor:"message",className:"messageLabel label",children:"Your message"}),Object(d.jsx)("textarea",{className:"message",required:!0,onBlur:function(){return g(".message",".messageLabel","10px")},onFocus:function(){return f(".messageLabel","-11px")},id:"message",name:"message"})]}),Object(d.jsx)("button",{className:"btn",children:"Send"})]}),Object(d.jsx)("div",{className:"loading"}),Object(d.jsx)("p",{className:"emailstatus",children:u}),Object(d.jsxs)("p",{className:"emailRestriction",children:["You have to wait ",x," seconds to send another message."]})]})]}),Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("h1",{className:"logo",children:Object(d.jsxs)(l.a,{to:"/#top",children:["TypingHu",Object(d.jsx)("span",{})]})}),Object(d.jsxs)("p",{className:"rights",children:["\xa9 ",e.name," 2021, All rights reserved"]}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)(c.b,{to:"/terms-and-conditions",children:"Terms and Conditions"}),Object(d.jsx)(c.b,{to:"/privacy-policy",children:"Privacy Policy"})]}),Object(d.jsxs)("div",{className:"footer_buttons",children:[Object(d.jsx)(c.b,{to:"/sign-in",children:Object(d.jsxs)("button",{className:"footerButton sign",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"signinIcon",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(d.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(d.jsx)("p",{children:"Sign In"})]})}),Object(d.jsx)(c.b,{to:"/sign-up",children:Object(d.jsxs)("button",{className:"footerButton join",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(d.jsx)("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),Object(d.jsx)("path",{d:"M16 11h6m-3 -3v6"})]}),Object(d.jsx)("p",{children:"Join"})]})})]})]})]})})}},33:function(e){e.exports=JSON.parse('{"name":"TypingHub"}')},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var s=n(0),o=n.n(s),r=(n(8),n(15)),a=function(){return(a=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var i="",c=null,l=null,d=null;function h(){i="",null!==c&&c.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function j(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function u(){var e=null;if("#"===i)e=document.body;else{var t=i.replace("#","");null===(e=document.getElementById(t))&&"#top"===i&&(e=document.body)}if(null!==e){d(e);var n=e.getAttribute("tabindex");return null!==n||j(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||j(e)||(e.blur(),e.removeAttribute("tabindex")),h(),!0}return!1}function b(e){return o.a.forwardRef((function(t,n){var s="";"string"===typeof t.to&&t.to.includes("#")?s="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(s=t.to.hash);var j={};e===r.c&&(j.isActive=function(e,t){return e&&e.isExact&&t.hash===s});var b=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n}(t,["scroll","smooth","timeout","elementId"]);return o.a.createElement(e,a({},j,b,{onClick:function(e){var n;h(),i=t.elementId?"#"+t.elementId:s,t.onClick&&t.onClick(e),""!==i&&(d=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===u()&&(null===c&&(c=new MutationObserver(u)),c.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){h()}),n||1e4))}),0))},ref:n}),t.children)}))}var m=b(r.b);b(r.c)}}]);
//# sourceMappingURL=12.d3aaa035.chunk.js.map