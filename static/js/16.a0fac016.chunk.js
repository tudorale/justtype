(this.webpackJsonpjusttype=this.webpackJsonpjusttype||[]).push([[16],{239:function(e,t,n){"use strict";n.r(t);var c=n(31),r=n(0),a=(n(17),n(13)),s=n(29),i=n(30),o=n(1);t.default=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(r.useState)(""),d=Object(c.a)(l,2),b=d[0],p=d[1];return Object(o.jsxs)("div",{className:"recover",children:[Object(o.jsx)(i.a,{title:"JustType - Recover password"}),Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"Forgot password?"})}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("#btn");t.setAttribute("disabled",""),""!==n?s.b.auth().sendPasswordResetEmail(n).then((function(){p("You recieved an email, please follow the instructions to reset your password.")})).catch((function(e){t.removeAttribute("disabled"),p(e.message)})):(p("That input can not be blank."),t.removeAttribute("disabled"))},children:[Object(o.jsx)("p",{className:"instructions",children:'Please enter your account email and click the "Send" button, you should recieve an email from us, follow the instructions to reset your account password.'}),Object(o.jsxs)("div",{className:"emailWrapperRecover",children:[Object(o.jsx)("label",{htmlFor:"email",className:"emailLabel",children:"Account email"}),Object(o.jsx)("input",{type:"email",id:"email",className:"emailInput",required:!0,onChange:function(e){return u(e.target.value)},onFocus:function(){return function(e,t){var n=document.querySelector("".concat(e));n&&(n.style.top="".concat(t),n.style.fontSize="1rem")}(".emailLabel","5px")},onBlur:function(){return function(e,t,n){var c=document.querySelector("".concat(t)),r=document.querySelector("".concat(e));if(c){if(""!==r.value)return;c.style.top="".concat(n),c.style.fontSize="1.1rem"}}(".emailInput",".emailLabel","30px")}})]}),Object(o.jsx)("p",{className:"recoverError",children:b}),Object(o.jsx)("button",{id:"btn",children:"Send"})]}),Object(o.jsx)(a.b,{to:"/sign-in",children:"Sign In"})]})}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(39),r=(n(37),n(38),c.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),a=c.a.firestore();t.b=r},30:function(e,t,n){"use strict";var c=n(34),r=n(1);t.a=function(e){return Object(r.jsxs)(c.b,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("style",{children:"\n                 body {\n                    background-color: #0e0b11;       \n                  }\n                "})]})}}}]);
//# sourceMappingURL=16.a0fac016.chunk.js.map