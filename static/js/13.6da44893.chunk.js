(this.webpackJsonpjusttype=this.webpackJsonpjusttype||[]).push([[13],{245:function(e,t,s){"use strict";s.r(t);var c=s(72),n=s(31),a=s(0),o=s.n(a),r=s(42),i=(s(17),s(41)),l=s(29),d=s(13),u=s(30),j=s(1),b=o.a.memo((function(e){var t,b=s(217),h=s(218),p=e.match.params.category;t="random"===p?"Random":"quotes"===p?"Quotes":"custom"===p?"Custom":p;var O=Object(a.useState)(""),m=Object(n.a)(O,2),x=m[0],f=m[1],y=Object(a.useState)(""),g=Object(n.a)(y,2),v=g[0],w=g[1],M=Object(a.useState)(5),N=Object(n.a)(M,2),S=N[0],k=N[1],L=Object(a.useState)(60),q=Object(n.a)(L,2),T=q[0],W=q[1],I=Object(a.useState)(""),P=Object(n.a)(I,2),C=P[0],A=P[1],H=Object(a.useState)(0),z=Object(n.a)(H,2),E=z[0],R=z[1],B=Object(a.useState)(0),Y=Object(n.a)(B,2),D=Y[0],J=Y[1],F=Object(a.useState)(0),G=Object(n.a)(F,2),U=G[0],Z=G[1],$=Object(a.useState)(1),K=Object(n.a)($,2),Q=K[0],V=K[1],_=Object(a.useState)(!1),X=Object(n.a)(_,2),ee=X[0],te=X[1],se=Object(a.useState)(!1),ce=Object(n.a)(se,2),ne=ce[0],ae=ce[1],oe=Object(a.useState)(0),re=Object(n.a)(oe,2),ie=re[0],le=re[1],de=Object(a.useState)(0),ue=Object(n.a)(de,2),je=ue[0],be=ue[1],he=Object(a.useState)(0),pe=Object(n.a)(he,2),Oe=pe[0],me=pe[1],xe=Object(a.useState)("Race finished, below you have your statistics."),fe=Object(n.a)(xe,2),ye=fe[0],ge=fe[1],ve=Object(a.useState)(""),we=Object(n.a)(ve,2),Me=we[0],Ne=we[1],Se=Object(a.useState)("Loading..."),ke=Object(n.a)(Se,2),Le=ke[0],qe=ke[1],Te=["You can use CTRL + Backspace (Win) to delete a whole word.","Try to type without looking at the keyboard, look at your screen, you will type faster!","Use your all 10 fingers when you type, you will type faster.","Is better to type correctly and a bit slower than wrong and faster.","If you have to type an uppercase letter use SHIFT + key instead of CapsLock.","Maintain a good and a comfortable position of your body.","Place your hands on the home row of the keyboard, hand placement is important.","Stretch your hands, shoulders, your neck and don't be tired, you will type easier.","Scan the text in advance with one or two words."],We=Object(a.useState)({}),Ie=Object(n.a)(We,2),Pe=Ie[0],Ce=Ie[1],Ae=Object(a.useState)(""),He=Object(n.a)(Ae,2),ze=He[0],Ee=He[1],Re=Object(a.useState)(""),Be=Object(n.a)(Re,2),Ye=Be[0],De=Be[1];function Je(e,t){return Math.floor(Math.random()*(t-e+1))+e}Object(a.useEffect)((function(){Ne(Te[Math.floor(9*Math.random())]),l.b.auth().onAuthStateChanged((function(e){var t=document.querySelector(".battleSpinner"),s=document.querySelector(".notLoggedIn");if(e){if(f(e),l.a.collection("users").doc(e.uid).onSnapshot({includeMetadataChanges:!0},(function(e){w(e.data())})),"random"===p&&qe(b({exactly:Je(20,25),join:" "})),"quotes"===p&&h.get("https://api.quotable.io/random").then((function(e){qe(e.data.content),Ce(e.data)})).catch((function(e){console.log("An error has occured: ",e)})),!ee)if("custom"===p&&"Loading..."===Le)qe("Waiting for text"),document.querySelector(".countdown").style.display="none",k(5);else Fe.current=setInterval((function(){k((function(e){return e-1}))}),1e3);t&&(t.style.display="none")}else t&&s&&(t.style.display="none",s.style.display="block")}))}),[]);var Fe=o.a.useRef(),Ge=o.a.useRef(),Ue=o.a.useRef();Object(a.useEffect)((function(){0===S&&function(){if(clearInterval(Fe.current),"Loading..."!==Le){var e=document.querySelector(".testWrapper"),t=document.querySelector("#text"),s=document.querySelector(".countdown");e&&(e.style.opacity="1",e.style.filter="blur(0px)"),t&&(t.removeAttribute("disabled"),t.focus()),s&&(s.style.display="none"),Ge.current=setInterval((function(){W((function(e){return e-1}))}),1e3)}}()}),[S]),Object(a.useEffect)((function(){0===T&&(tt(),ge("Time's up, below you have your statistics"))}),[T]),Object(a.useEffect)((function(){ee&&(Ue.current=setInterval((function(){V((function(e){return e+1}))}),1e3))}),[ee]);var Ze=0,$e=new Date,Ke=$e.getHours(),Qe=$e.getMinutes(),Ve=$e.getSeconds(),_e=$e.getFullYear(),Xe=$e.getMonth()+1,et=$e.getDate(),tt=function(){ae(!0),clearInterval(Ue.current),clearInterval(Ge.current);var e=document.querySelector(".result"),t=document.querySelector(".neededWrapper"),s=document.querySelector("#text");if(!s)return null;s.blur(),s.setAttribute("disabled",""),s.setAttribute("readonly",""),s.setAttribute("maxlength","0"),e&&t&&(e.style.display="block",t.style.opacity="0.5",t.style.filter="blur(2px)");var c=document.querySelector(".testOver");c&&(c.style.display="block")};Object(a.useEffect)((function(){var e;R(function(e){var t=Le;return e.split("").filter((function(e,s){return e===t[s]})).length}(C)),le(Math.round(E/5/(Q/60))),be(Math.round(E/Q*60)),J(function(e){var t=Le;return e.split("").filter((function(e,s){return e!==t[s]})).length}(C)),e=C,ne||e.length===Le.length&&tt()}),[C]),Object(a.useEffect)((function(){ne&&("random"===p?(Ze=ie<=30?5:Je(20,40),me(Ze),l.a.collection("users").doc(x.uid).update({points:v.points+Ze,randomTests:Math.round(E/U*100)>=70?v.randomTests+1:v.randomTests,races:Math.round(E/U*100)>=70?v.races+1:v.races,lastWPM:Math.round(E/U*100)>=70?ie:v.lastWPM,bestWPM:Math.round(E/U*100)>=70&&ie>v.bestWPM?ie:v.bestWPM,randomHistory:Math.round(E/U*100)>=70?[].concat(Object(c.a)(v.randomHistory),[{wpm:ie,time:"".concat(Ke,":").concat(Qe,":").concat(Ve," ").concat(et,"/").concat(Xe,"/").concat(_e)}]):v.randomHistory})):"quotes"===p?(Ze=ie<=50?5:Je(50,80),me(Ze),l.a.collection("users").doc(x.uid).update({points:v.points+Ze,quotesTests:Math.round(E/U*100)>=70?v.quotesTests+1:v.quotesTests,races:Math.round(E/U*100)>=70?v.races+1:v.races,lastWPM:Math.round(E/U*100)>=70?ie:v.lastWPM,bestWPM:Math.round(E/U*100)>=70&&ie>v.bestWPM?ie:v.bestWPM,quotesHistory:Math.round(E/U*100)>=70?[].concat(Object(c.a)(v.quotesHistory),[{wpm:ie,time:"".concat(Ke,":").concat(Qe,":").concat(Ve," ").concat(et,"/").concat(Xe,"/").concat(_e)}]):v.quotesHistory})):"custom"===p&&(Ze=ie<=30?5:Je(20,40),me(Ze),l.a.collection("users").doc(x.uid).update({points:v.points+Ze,customTests:Math.round(E/U*100)>=70?v.customTests+1:v.customTests,races:Math.round(E/U*100)>=70?v.races+1:v.races,lastWPM:Math.round(E/U*100)>=70?ie:v.lastWPM,bestWPM:Math.round(E/U*100)>=70&&ie>v.bestWPM?ie:v.bestWPM,customHistory:Math.round(E/U*100)>=70?[].concat(Object(c.a)(v.customHistory),[{wpm:ie,time:"".concat(Ke,":").concat(Qe,":").concat(Ve," ").concat(et,"/").concat(Xe,"/").concat(_e)}]):v.customHistory})))}),[ie,ne]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{title:"JustType - Test your speed"}),"random"===p||"quotes"===p||"custom"===p?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"battleSpinner"}),x?Object(j.jsxs)("div",{className:"battleExtraWrapper",children:[Object(j.jsx)(i.a,{path:"/play",name:"Main"}),Object(j.jsxs)("div",{className:"battleWrapper",children:["custom"===p?Object(j.jsxs)("div",{className:"customText",children:[Object(j.jsx)("p",{children:"Enter your text below, make sure you follow the rules of characters; min = 100, max = 250."}),Object(j.jsx)("textarea",{onChange:function(e){Ee(e.target.value),De("")},maxLength:250,minLength:150,id:"custom"}),Object(j.jsx)("button",{id:"btn",onClick:function(){var e=document.querySelector(".customText"),t=document.querySelector("#custom"),s=document.querySelector("#btn"),c=document.querySelector(".countdown");ze.length>=100&&ze.length<=250?/^[a-zA-Z0-9\.\,\;\?\'\"\(\)\!\$\-\& \s]*$/.test(ze)?(qe(ze),s.setAttribute("disabled",""),t.setAttribute("readonly",""),c.style.display="block",e.style.display="none",setTimeout((function(){Fe.current=setInterval((function(){k((function(e){return e-1}))}),1e3)}),500)):De("You can only use lowercase, uppercase letters, numbers, punctuation and some symbols such as: () ? ! - $ & "):De("The text length must be at least 100 characters and max 250 characters.")},children:"Go"}),Object(j.jsxs)("p",{className:"lengthText",children:[ze.length,"/250"]}),Object(j.jsx)("p",{children:Ye})]}):"",Object(j.jsx)("h1",{className:"countdown",children:S}),Object(j.jsxs)("div",{className:"testWrapper",children:[Object(j.jsxs)("div",{className:"neededWrapper",children:[Object(j.jsx)("div",{className:"quote",children:Le.split("").map((function(e,t){var s;return t<C.length&&(s=e===C[t]?"#7e41da":"red"," "===e&&C[t]!==e&&(e=C[t])),t===C.length?Object(j.jsx)("span",{className:"word",style:{color:s,fontWeight:700,textDecoration:"underline"},children:" "===e?"\xa0":e},t):Object(j.jsx)("span",{className:"word",style:{color:s},children:" "===e?"\xa0":e},t)}))}),Object(j.jsx)("input",{onPaste:function(e){return e.preventDefault()},onCopy:function(e){return e.preventDefault()},id:"text",maxLength:Le.length,onChange:function(e){ne||(A(e.target.value),Z((function(e){return e+1})),te(!0))},disabled:!0,type:"text",autoComplete:"off",placeholder:"Start typing the text above"}),Object(j.jsxs)("div",{className:"leftInfo",children:[Object(j.jsxs)("p",{className:"category",children:["Category: ",t]}),Object(j.jsxs)("p",{className:"features",children:["random"==p&&"Random words","quotes"==p&&"Lowercase, uppercase words, punctuation","custom"==p&&"Allowed lowercase, uppercase words, punctuation, symbols"]}),Object(j.jsxs)("p",{className:"account",children:["Account: ",x?x.displayName:"Loading...",","," ",v?v.points:"Loading"," Points,"," ",v?v.rank:"Loading..."]})]}),Object(j.jsxs)("div",{className:"rightInfo",children:[Object(j.jsx)("p",{className:"timeleft",children:T}),Object(j.jsx)("p",{className:"abandon",children:Object(j.jsx)(d.b,{to:"/play",children:"Abandon"})})]})]}),Object(j.jsxs)("p",{className:"randomTip",children:["Random Tip: ",Me]}),Object(j.jsxs)("div",{className:"testOver",children:[Object(j.jsx)("p",{children:"This test is over."}),Object(j.jsxs)("div",{className:"testOverButtons",children:[Object(j.jsx)("a",{href:"/#/speed/".concat(p),children:Object(j.jsxs)("button",{children:["New test on ",t]})}),Object(j.jsx)(d.b,{to:"/play",children:Object(j.jsx)("button",{children:"Go home"})})]})]}),Object(j.jsxs)("div",{className:"result",children:[Object(j.jsx)("h1",{children:ye}),Object(j.jsxs)("p",{className:"givenPoints",children:[Object(j.jsxs)("span",{children:["+",Oe]})," points. Total points:"," ",Object(j.jsx)("span",{children:v?v.points:"Calculating.."})]}),Object(j.jsx)("p",{className:"infoResult",children:5===Oe?"You have to get over \n                                                            ".concat("random"===p?"30":"","\n                                                            ").concat("quotes"===p?"50":"","\n                                                            ").concat("custom"===p?"30":"","\n                                                            WPM for this category to get the normal amount of points."):null}),Object(j.jsx)("p",{className:"notAllowed",children:Math.round(E/U*100)<=70?"You have an accuracy that is less than 70%, your score will not be saved.":""}),Object(j.jsxs)("p",{children:["Category of the test: ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("p",{children:["WPM (Words Per Minute): ",Object(j.jsx)("span",{children:ie||"0"})]}),Object(j.jsxs)("p",{children:["CPM (Characters Per Minute):"," ",Object(j.jsx)("span",{children:je||"0"})]}),Object(j.jsxs)("p",{children:["Text typed in: ",Object(j.jsxs)("span",{children:[Q," seconds"]})]}),Object(j.jsxs)("p",{children:["Time left: ",Object(j.jsxs)("span",{children:[T," seconds"]})]}),Object(j.jsxs)("p",{children:["Correct symbols: ",Object(j.jsx)("span",{children:E})]}),Object(j.jsxs)("p",{children:["Wrong symbols on text: ",Object(j.jsx)("span",{children:D})]}),Object(j.jsxs)("p",{children:["Accuracy:"," ",Object(j.jsxs)("span",{children:[Math.round(E/U*100)?Math.round(E/U*100):"0","%"]})]}),Object(j.jsxs)("p",{children:["Total keystrokes: ",Object(j.jsx)("span",{children:U})]}),Object(j.jsxs)("p",{children:["Text length: ",Object(j.jsx)("span",{children:Le.length})," characters (including spaces)"]}),Object(j.jsxs)("p",{children:["Unnecessary keystrokes:"," ",Object(j.jsx)("span",{children:U>Le.length?U-Le.length:"0"})]}),"quotes"===p?Object(j.jsxs)("p",{children:["A quote from: ",Object(j.jsx)("span",{children:Pe.author})]}):"",Object(j.jsx)("p",{style:{marginTop:"20px"},children:Object(j.jsx)(d.b,{to:"/info",children:"How we do it & Good to know"})})]})]})]})]}):Object(j.jsx)(r.a,{})]}):Object(j.jsxs)("p",{className:"categoryNotExist",children:["This category (",p,") does not exist, sorry!"," ",Object(j.jsx)("a",{href:"/play",children:"Play"})]})]})}));t.default=b},29:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var c=s(39),n=(s(37),s(38),c.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),a=c.a.firestore();t.b=n},30:function(e,t,s){"use strict";var c=s(34),n=s(1);t.a=function(e){return Object(n.jsxs)(c.b,{children:[Object(n.jsx)("title",{children:e.title}),Object(n.jsx)("style",{children:"\n                 body {\n                    background-color: #0e0b11;       \n                  }\n                "})]})}},41:function(e,t,s){"use strict";var c=s(31),n=s(0),a=(s(17),s(2)),o=s(13),r=s(29),i=s(1);t.a=function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),l=s[0],d=s[1],u=Object(n.useState)(""),j=Object(c.a)(u,2),b=j[0],h=j[1];Object(n.useEffect)((function(){var e=!0;return r.b.auth().onAuthStateChanged((function(t){t&&e&&d(t)})),function(){e=!1}}),[]),Object(n.useEffect)((function(){var e=!0;return l&&r.a.collection("users").doc(null===l||void 0===l?void 0:l.uid).onSnapshot({includeMetadataChanges:!0},(function(t){e&&h(t.data().notifications)})),function(){e=!1}}),[l]);var p=Object(a.f)(),O=!1,m=function(){r.b.auth().signOut(),p.push("/sign-in")},x=!1;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"effectLogged",onClick:function(){O=!1;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");e.style.display="none",t.style.opacity="0",t.style.zIndex="-2"}}),Object(i.jsxs)("div",{className:"navbarLogged",children:[Object(i.jsx)("h1",{className:"logoNavLogged",children:Object(i.jsxs)("a",{href:"/",children:["JustTyp",Object(i.jsx)("span",{})]})}),Object(i.jsxs)("div",{className:"navContent",children:[Object(i.jsx)("ul",{children:Object(i.jsx)(o.b,{to:e.path,children:Object(i.jsx)("li",{children:e.name})})}),Object(i.jsx)(o.b,{to:"/profile",children:Object(i.jsx)("img",{src:l?l.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile"})}),Object(i.jsxs)("div",{className:"notifications",children:[Object(i.jsx)("div",{className:"notificationBox",onClick:function(){x=!x;var e=document.querySelector(".notificationsWrapper");x?(e.style.zIndex="900",e.style.opacity="1"):(e.style.zIndex="-100",e.style.opacity="0")},children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(i.jsx)("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),Object(i.jsx)("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"})]})}),Object(i.jsxs)("div",{className:"notificationsWrapper",children:[Object(i.jsx)("h1",{children:"Notifications"}),b?b.map((function(e){return Object(i.jsxs)("div",{className:"notification",children:[Object(i.jsxs)("p",{className:"sender",children:[Object(i.jsx)("span",{children:"from"})," ",e.sender]}),Object(i.jsxs)("p",{className:"notificationMessage",children:[e.message," ",Object(i.jsxs)("span",{children:[" - ",e.time]})]})]},e.id)})):Object(i.jsx)("div",{className:"notificationSpinner"})]})]}),Object(i.jsxs)("button",{className:"navButtonLogged",onClick:m,children:[Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(i.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(i.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(i.jsx)("p",{children:"Sign Out"})]}),Object(i.jsxs)("div",{className:"hamburgerLogged",onClick:function(){O=!O;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");O?(e.style.display="block",t.style.opacity="0.5",t.style.zIndex="999"):(e.style.display="none",t.style.opacity="0",t.style.zIndex="-2")},children:[Object(i.jsx)("div",{className:"lineLogged  line1",children:" "}),Object(i.jsx)("div",{className:"lineLogged line2",children:" "}),Object(i.jsx)("div",{className:"lineLogged  line3",children:" "})]})]})]}),Object(i.jsxs)("div",{className:"mobileNavLogged",children:[Object(i.jsx)("h1",{className:"logoNavMobileLogged",children:Object(i.jsxs)("a",{href:"/",children:["JustTyp",Object(i.jsx)("span",{})]})}),Object(i.jsxs)("div",{className:"navContentMobile",children:[Object(i.jsx)("ul",{children:e.play?Object(i.jsx)("a",{href:e.path,children:e.name}):Object(i.jsx)(o.b,{to:e.path,children:Object(i.jsx)("li",{children:e.name})})}),Object(i.jsx)(o.b,{to:"/profile",children:Object(i.jsx)("img",{src:l?l.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile"})}),Object(i.jsxs)("button",{className:"navButtonMobileLogged",onClick:m,children:[Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(i.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(i.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(i.jsx)("p",{children:"Sign Out"})]})]})]})]})}},42:function(e,t,s){"use strict";s(0),s(17);var c=s(13),n=s(1);t.a=function(){return Object(n.jsxs)("div",{className:"notLoggedIn",children:[Object(n.jsx)("p",{children:"You must be logged in to view this page"}),Object(n.jsx)(c.b,{to:"/sign-in",children:Object(n.jsx)("button",{children:"Sign In"})})]})}}}]);
//# sourceMappingURL=13.6da44893.chunk.js.map