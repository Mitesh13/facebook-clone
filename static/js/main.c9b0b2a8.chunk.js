(this.webpackJsonpfacebook=this.webpackJsonpfacebook||[]).push([[0],{56:function(e,t,c){},63:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),j=c(23),i=c.n(j),a=(c(56),c(14)),r=c(32),l=c.n(r),o=c(2),O=function(){return Object(o.jsxs)("div",{className:"searchbar",children:[Object(o.jsx)(l.a,{style:{fontSize:50}}),Object(o.jsx)("input",{type:"text",placeholder:"Search Facebook"})]})},b=c(34),d=c.n(b),u=c(25),x=c.n(u),h=c(26),p=c.n(h),m=c(27),f=c.n(m),g=c(35),N=c.n(g),v=function(){return Object(o.jsxs)("ul",{className:"menubar",children:[Object(o.jsx)("li",{className:"active",children:Object(o.jsx)(d.a,{style:{fontSize:30}})}),Object(o.jsx)("li",{children:Object(o.jsx)(x.a,{style:{fontSize:30}})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.a,{style:{fontSize:30}})}),Object(o.jsx)("li",{children:Object(o.jsx)(f.a,{style:{fontSize:30}})}),Object(o.jsx)("li",{children:Object(o.jsx)(N.a,{style:{fontSize:30}})})]})},C=c(36),U=c.n(C),S=c(37),y=c.n(S),G=c(38),z=c.n(G),D=c(39),k=c.n(D),R=function(e){var t=e.user;return Object(o.jsxs)("ul",{className:"options",children:[Object(o.jsxs)("li",{style:{display:"flex",alignItems:"center"},children:[Object(o.jsx)("img",{src:t.photoURL,alt:"post",height:"30",className:"user-img"}),Object(o.jsx)("span",{children:t.displayName.split(" ")[0]})]}),Object(o.jsx)("li",{children:Object(o.jsx)(U.a,{style:{fontSize:20}})}),Object(o.jsx)("li",{children:Object(o.jsx)(y.a,{style:{fontSize:20}})}),Object(o.jsx)("li",{children:Object(o.jsx)(z.a,{style:{fontSize:20}})}),Object(o.jsx)("li",{children:Object(o.jsx)(k.a,{style:{fontSize:20}})})]})},F=(c(63),function(e){var t=e.user;return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(O,{}),Object(o.jsx)(v,{}),Object(o.jsx)(R,{user:t})]})}),B=c(41),L=c.n(B),I=c(19),E=c.n(I),X=c(42),M=c.n(X),J=c(43),K=c.n(J),P=c(40),T=c.n(P),q=function(){return Object(o.jsxs)("div",{className:"shortcuts",children:[Object(o.jsx)("h3",{children:"Your Shortcuts"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)(T.a,{}),Object(o.jsx)("span",{children:"My Page"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(E.a,{}),Object(o.jsx)("span",{children:"My Following page"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(E.a,{}),Object(o.jsx)("span",{children:"My Following page"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(E.a,{}),Object(o.jsx)("span",{children:"My Following page"})]})]})]})},W=function(e){var t=e.user;return Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:t.photoURL,alt:"User",height:"30",className:"user-img"}),Object(o.jsx)("span",{children:t.displayName})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(L.a,{}),Object(o.jsx)("span",{children:"Covid-19 Information Center"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(E.a,{}),Object(o.jsx)("span",{children:"Friends"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(f.a,{}),Object(o.jsx)("span",{children:"Groups"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(p.a,{}),Object(o.jsx)("span",{children:"Marketplace"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(x.a,{}),Object(o.jsx)("span",{children:"Watch"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(M.a,{}),Object(o.jsx)("span",{children:"Events"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(K.a,{}),Object(o.jsx)("span",{children:"Memory"})]})]})},A=function(e){var t=e.user;return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)(W,{user:t}),Object(o.jsx)("hr",{}),Object(o.jsx)(q,{})]})},w=c(50),V=c(20),Z=c(13),Q=c.n(Z),H=c(45),Y=c.n(H),$=c(46),_=c.n($),ee=c(18),te=c.n(ee),ce=c(21);c(67);ce.a.initializeApp({apiKey:"AIzaSyAL0gNRlnQYNaELQk6BRf5w4KjGS5noIGo",authDomain:"facebook-clone-13.firebaseapp.com",projectId:"facebook-clone-13",storageBucket:"facebook-clone-13.appspot.com",messagingSenderId:"213377868275",appId:"1:213377868275:web:45d0142da1a626e3c9b286",measurementId:"G-STR5K5KVXE"});var se=ce.a.auth(),ne=new ce.a.auth.GoogleAuthProvider,je=ce.a,ie=function(e){var t=e.post,c=e.time;return Object(o.jsxs)("div",{className:"post-header",children:[t.picture?Object(o.jsx)("img",{src:t.picture,alt:"photo",height:"30",className:"user-img"}):Object(o.jsx)(Q.a,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:t.username}),Object(o.jsx)("span",{children:null===c||void 0===c?void 0:c.toDate().toString().split("G")[0]})]})]})},ae=function(e){var t=e.body,c=0;if(t.reactions)for(var s in t.reactions)c+=t.reactions[""+s];return Object(o.jsxs)("div",{className:"post-body-wrapper",children:[Object(o.jsxs)("div",{className:"post-body",children:[Object(o.jsx)("p",{children:t.text}),t.media&&Object(o.jsx)("img",{src:t.media,alt:t.media})]}),Object(o.jsx)("div",{className:"topReactionsContainer",children:t.top3reactions&&Object(o.jsxs)("div",{children:[t.top3reactions.map((function(e){return Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/").concat(Object.keys(e)[0],"-128x128.png"),name:e,height:"20",width:"20",alt:e})})),Object(o.jsx)("span",{className:"numberOfReactions",children:t.reactions&&c})]})})]})},re=function(e){var t=e.post,c=e.user,n=Object(s.useState)(),j=Object(a.a)(n,2),i=j[0],r=j[1],l=Object(s.useState)(!1),O=Object(a.a)(l,2),b=O[0],d=O[1],u=Object(s.useState)(""),x=Object(a.a)(u,2),h=x[0],p=x[1];Object(s.useEffect)((function(){r("")}),[]);return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"reactions",children:[Object(o.jsx)("div",{className:"topReactions",children:void 0}),Object(o.jsxs)("div",{className:"like-reaction",children:[i?Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/")+i+"-128x128.png",name:"like",height:"25",alt:"like"}):Object(o.jsx)(Y.a,{}),Object(o.jsx)("span",{children:i||"Like"}),Object(o.jsxs)("div",{className:"reaction-tray",onClick:function(e){var c=je.firestore.FieldValue.increment(1);je.firestore().collection("posts").doc(""+t.timestamp.toDate()).update(Object(V.a)({},"reactions.".concat(e.target.name),c),{merge:!0}),je.firestore().collection("posts").doc(""+t.timestamp.toDate()).get().then((function(t){r((function(){var c=[],s=t.data();if(s.top3reactions){var n=(c=Object(w.a)(s.top3reactions)).findIndex((function(t){return Object.keys(t)[0]===e.target.name}));if(n>-1)c[n]["".concat(e.target.name)]+=1;else if(c.length<3)c.push(Object(V.a)({},"".concat(e.target.name),s.reactions[e.target.name]));else{for(var j=c.findIndex((function(t){return Object.values(t)[0]<s.reactions[e.target.name]})),i=c.length-2;i>=j&&j>-1;i--)c[i+1]=c[i];c[j]=Object(V.a)({},"".concat(e.target.name),s.reactions[e.target.name])}}else c[0]=Object(V.a)({},"".concat(e.target.name),1);return c=c.sort((function(e,t){return Object.values(t)[0]-Object.values(e)[0]})),je.firestore().collection("posts").doc(""+s.timestamp.toDate()).update({top3reactions:c},{merge:!0}),e.target.name}))}))},children:[Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/like-128x128.png"),name:"like",height:"40",alt:"like"}),Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/love-128x128.png"),name:"love",height:"40",alt:"love"}),Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/care-128x128.png"),name:"care",height:"40",alt:"care"}),Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/haha-128x128.png"),name:"haha",height:"40",alt:"haha"}),Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/wow-128x128.png"),name:"wow",height:"40",alt:"wow"}),Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/sad-128x128.png"),name:"sad",height:"40",alt:"sad"}),Object(o.jsx)("img",{src:"".concat("/facebook-clone","/Images/angry-128x128.png"),name:"angry",height:"40",alt:"angry"})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(_.a,{}),Object(o.jsx)("span",{onClick:function(){return d((function(e){return!e}))},children:"Comment"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(te.a,{}),Object(o.jsx)("span",{children:"Share"})]})]}),b&&Object(o.jsxs)("div",{className:"commentBoxWrapper",children:[Object(o.jsx)(le,{post:t}),Object(o.jsxs)("div",{className:"commentBox",children:[Object(o.jsx)("input",{value:h,onInput:function(e){return p(e.target.value)},type:"text",name:"comment",id:"comment",placeholder:"Add your comment..."}),Object(o.jsx)(te.a,{onClick:function(){je.firestore().collection("posts").doc(""+t.timestamp.toDate()).update({comments:je.firestore.FieldValue.arrayUnion({username:c.displayName,userImg:c.photoURL,comment:h})},{merge:!0}),p("")}})]})]})]})},le=function(e){var t,c=e.post;return Object(o.jsx)("div",{className:"commetsWrapper",children:null===(t=c.comments)||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("div",{className:"commentWrapper",children:[Object(o.jsx)("img",{src:e.userImg,class:"user-img",height:30,alt:"user"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"comment",children:[Object(o.jsx)("p",{children:e.username}),Object(o.jsx)("p",{children:e.comment})]}),Object(o.jsx)("button",{className:"replyBtn",children:"Reply"})]})]})}))})},oe=function(e){var t=e.post,c=e.user;return Object(o.jsxs)("div",{className:"post",children:[Object(o.jsx)(ie,{post:t,time:t.timestamp}),Object(o.jsx)(ae,{body:t}),Object(o.jsx)(re,{post:t,user:c})]})},Oe=c.p+"static/media/1.48a85cf5.jpg",be=c.p+"static/media/2.b436362e.jpg",de=c.p+"static/media/3.17b1093b.jpg",ue=c.p+"static/media/4.41b7f7d3.jpg",xe=c.p+"static/media/5.368550ac.jpg",he=c(47),pe=c.n(he),me=c(48),fe=c.n(me),ge=c(49),Ne=c.n(ge),ve=(c(68),function(){return Object(o.jsx)("div",{className:"loading"})}),Ce=function(){return Object(o.jsxs)("div",{className:"stories",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:Oe,alt:"Story"}),Object(o.jsx)("span",{children:"Yagnesh Patil"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:be,alt:""}),Object(o.jsx)("span",{children:"Shivam Shukla"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:de,alt:""}),Object(o.jsx)("span",{children:"Aditya chaudhari"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:ue,alt:""}),Object(o.jsx)("span",{children:"Mehul Prajapati"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:xe,alt:""}),Object(o.jsx)("span",{children:"Keyur Patel"})]})]})},Ue=function(e){var t=e.user,c=Object(s.useRef)(""),n=Object(s.useRef)("");return Object(o.jsxs)("div",{className:"upload",children:[Object(o.jsxs)("div",{className:"upload-form",children:[Object(o.jsx)("img",{src:t.photoURL,alt:"photo",height:"30",className:"user-img"}),Object(o.jsx)("input",{ref:c,type:"text",placeholder:"Whats on your mind?"}),Object(o.jsx)("input",{ref:n,type:"text",placeholder:"Image/GIF URL"}),Object(o.jsx)(te.a,{onClick:function(){je.firestore().collection("posts").doc(""+new Date).set({media:n.current.value,text:c.current.value,username:t.displayName,picture:t.photoURL,timestamp:je.firestore.Timestamp.fromDate(new Date)},{merge:!0}),n.current.value="",c.current.value=""}})]}),Object(o.jsx)("hr",{style:{margin:"0 auto"}}),Object(o.jsxs)("div",{className:"upload-other",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(pe.a,{style:{color:"red"}}),Object(o.jsx)("span",{children:"Live Video"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(fe.a,{style:{color:"green"}}),Object(o.jsx)("span",{children:"Photo/Video"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Ne.a,{style:{color:"yellow"}}),Object(o.jsx)("span",{children:"Feeling/Activity"})]})]})]})},Se=function(e){var t=e.posts,c=e.user,s=e.isLoadingMore;return Object(o.jsxs)("div",{className:"posts",children:[t.map((function(e){return Object(o.jsx)(oe,{user:c,post:e.data()},e.id)})),s&&Object(o.jsx)(ve,{})]})},ye=function(e){var t=e.user,c=Object(s.useState)([]),n=Object(a.a)(c,2),j=n[0],i=n[1],r=Object(s.useState)(!0),l=Object(a.a)(r,2),O=l[0],b=l[1],d=Object(s.useState)(!1),u=Object(a.a)(d,2),x=u[0],h=u[1],p=Object(s.useState)(2),m=Object(a.a)(p,2),f=m[0],g=m[1],N=0;Object(s.useEffect)((function(){console.log("called effect"),je.firestore().collection("posts").get().then((function(e){N=e.docs.length,console.log(N)}))}),[]),Object(s.useEffect)((function(){je.firestore().collection("posts").orderBy("timestamp","desc").limit(f).onSnapshot((function(e){i((function(){return e.docs})),b(!1),h((function(){return!1}))}))}),[f]);return Object(o.jsxs)("div",{className:"feed",onScroll:function(e){console.log("called",e.target.scrollTop+e.target.clientHeight,e.target.scrollHeight),e.target.scrollTop+e.target.clientHeight>=e.target.scrollHeight&&(console.log(N,j.length),N!==j.length&&(g((function(e){return e+5})),h((function(){return!0}))))},children:[Object(o.jsx)(Ce,{}),Object(o.jsx)(Ue,{user:t}),O?Object(o.jsx)(ve,{}):Object(o.jsx)(Se,{posts:j,user:t,isLoadingMore:x})]})},Ge=function(){return Object(o.jsx)("div",{className:"contacts",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Mitesh Chaudhari"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Covid-19 Information Center"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Friends"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Groups"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Marketplace"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Watch"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Events"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Memory"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Watch"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Events"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Memory"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Watch"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Events"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(Q.a,{}),Object(o.jsx)("span",{children:"Memory"})]})]})})},ze=(c(69),function(e){var t=e.user;return Object(o.jsxs)("div",{className:"body-container",children:[Object(o.jsx)(A,{user:t}),Object(o.jsx)(ye,{user:t}),Object(o.jsx)(Ge,{})]})}),De=(c(70),function(e){var t=e.setUser;return Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsxs)("section",{className:"section-left",children:[Object(o.jsx)("h1",{children:"facebook clone"}),Object(o.jsx)("p",{children:"Facebook clone helps you connect and share with the people in your life."})]}),Object(o.jsx)("section",{className:"section-right",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"image-wrapper",onClick:function(){console.log("called"),se.signInWithPopup(ne).then((function(e){console.log(e),t(e.user)})).catch((function(e){return console.log(e)}))},children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"Google",height:"50"}),Object(o.jsx)("span",{children:"Sign in with Google"})]})})})]})});c(71);var ke=function(){var e=Object(s.useState)(),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(o.jsx)("div",{className:"App",children:c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F,{user:c}),Object(o.jsx)(ze,{user:c})]}):Object(o.jsx)(De,{setUser:function(e){return n((function(t){return e}))}})})},Re=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,j=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),j(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(ke,{})}),document.getElementById("root")),Re()}},[[73,1,2]]]);
//# sourceMappingURL=main.c9b0b2a8.chunk.js.map