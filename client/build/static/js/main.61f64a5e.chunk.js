(this.webpackJsonpregisteration=this.webpackJsonpregisteration||[]).push([[0],{28:function(e,t,s){},35:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var r=s(1),c=s.n(r),n=s(21),a=s.n(n),o=s(13),i=s(17),l=s(11),d=s(8),m=s.n(d),j=s(14),h=s(2),b=(s(28),s(0));var p=function(e){var t=e.gmail,s=e.setRegister,r=e.group,c=e.firstMember,n=e.secondMember,a=e.thirdMember,o=e.password,i=e.onChange,l=e.showAlert,d=Object(h.f)(),p=function(){var e=Object(j.a)(m.a.mark((function e(i){var j,h,b,p,u,x,O,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),j=r.trim().toLowerCase(),h=t.trim(),b=c.trim().toLowerCase(),p=n.trim().toLowerCase(),u=a.trim().toLowerCase(),x=o.trim(),e.next=9,fetch("/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({group:j,gmail:h,firstMember:b,secondMember:p,thirdMember:u,password:x}),credentials:"include"});case 9:return O=e.sent,e.next=12,O.json();case 12:if(f=e.sent,l(f),"#E52B50:white:This TeamName has already been taken, please enter new TeamName"!==f){e.next=16;break}return e.abrupt("return",s({group:"",gmail:"",firstMember:"",secondMember:"",thirdMember:"",password:""}));case 16:d.push("/"),s({group:"",gmail:"",firstMember:"",secondMember:"",thirdMember:"",password:""});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"fill-window",style:{overflowY:"scroll"},children:[Object(b.jsxs)("button",{className:"btn text-light text-center",style:{position:"absolute",top:"2vh",left:"2vw",zIndex:"1"},onClick:function(){d.push("/")},children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",style:{zIndex:"100"},children:Object(b.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})})," "]}),Object(b.jsxs)("div",{className:"container-fluid  d-flex align-items-center justify-content-center mt-5 ",children:[Object(b.jsxs)("div",{id:"card",className:"container col-md-12 col-sm-12 col-12 mt-3 mb-3 p-5",style:{maxWidth:"580px"},children:[Object(b.jsxs)("p",{className:"text-light text-center form-banner pt-1",children:["CTF Registeration Form"," "]})," ",Object(b.jsxs)("form",{id:"registeredForm",onSubmit:p,children:[Object(b.jsx)("div",{className:"form-group mt-4 ",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"group",value:r,onChange:i,required:!0,placeholder:"Group name"})})," ",Object(b.jsx)("div",{className:"form-group mt-4",children:Object(b.jsx)("input",{type:"email",className:"form-control",name:"gmail",value:t,onChange:i,required:!0,placeholder:" Email id"})})," ",Object(b.jsx)("div",{className:"form-group mt-4 ",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"firstMember",value:c,onChange:i,required:!0,placeholder:"Name of first member"})})," ",Object(b.jsx)("div",{className:"form-group mt-4",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"secondMember",value:n,onChange:i,placeholder:"Name of second member"})})," ",Object(b.jsx)("div",{className:"form-group mt-4",children:Object(b.jsx)("input",{type:"text",className:"form-control",name:"thirdMember",value:a,onChange:i,placeholder:"Name of third member"})})," ",Object(b.jsx)("div",{className:"form-group mt-4",children:Object(b.jsx)("input",{type:"password",className:"form-control",name:"password",value:o,onChange:i,placeholder:"Password"})})," ",Object(b.jsxs)("div",{className:"form-group text-center mt-3",children:[Object(b.jsxs)("button",{type:"submit",className:"close buttons",children:["SUBMIT"," "]})," "]})," "]})," "]})," "]})," "]})},u=s(10);s(35);var x=function(){return Object(b.jsxs)("div",{className:"fill-window",children:[Object(b.jsxs)("div",{className:"home-container",children:[Object(b.jsx)("a",{href:"https://csidmce.tech/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{id:"csi-logo",src:"csi-logo.png",alt:"CSI Logo",className:"logo mx-4"})})," "]})," ",Object(b.jsxs)("div",{className:"container  text-div text-light",children:[Object(b.jsxs)("p",{className:"title",children:[Object(b.jsx)("span",{className:"headers",children:" Welcome to "})," "]})," ",Object(b.jsxs)("div",{className:"container  col-md-12 col-sm-12 col-12",children:[Object(b.jsxs)("div",{className:"patterns ",children:[Object(b.jsxs)("svg",{width:"100%",height:"100%",children:[Object(b.jsxs)("text",{x:"50%",y:"70%",className:"glow-text",textAnchor:"middle",children:["CTF PORTAL"," "]})," "]})," "]})," "]})," ",Object(b.jsxs)("p",{className:" text-center description ",children:["Do you love hacking and challenges ? Then you can definitely wants to compete in this CTF..."," "]})," ",Object(b.jsxs)("div",{className:"container text-center",children:[Object(b.jsxs)(u.b,{role:"button",to:"/register",children:[Object(b.jsx)("button",{className:"pulse buttons",children:" APPLY NOW "})," "]})," "]})," "]})," "]})};var O=function(e){var t=e.message,s=e.color,r=e.text,c=e.display;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"alert position-absolute start-50 translate-middle d-".concat(c),role:"alert",style:{width:"fit-content",zIndex:"5000",top:"8vh",fontFamily:"cairo, sans-serif",backgroundColor:"".concat(s),color:"".concat(r)},children:[t," "]})," "]})},f=s(12),g=s.n(f);s(37);var v=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1];Object(r.useEffect)((function(){n()}),[]);var n=function(){var e=Object(j.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/site-admin",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,c(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{style:{height:"100vh",backgroundColor:"#212529"},children:Object(b.jsxs)("table",{className:" p-0 table table-hover-primary text-light",children:[Object(b.jsx)("thead",{className:"text-danger",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:" # "}),Object(b.jsx)("th",{scope:"col",children:" Name "}),Object(b.jsx)("th",{scope:"col",children:" Login "}),Object(b.jsx)("th",{scope:"col",children:" Solved "}),Object(b.jsx)("th",{scope:"col",children:" Logout "}),Object(b.jsx)("th",{scope:"col",children:" Time Taken "})]})}),Object(b.jsx)("tbody",{children:s.map((function(e,t){var s=[g()("".concat(e.createdAt)).format("h:mm:ss"),g()("".concat(e.updatedAt)).format("h:mm:ss")].map((function(e){var t=e.split(":");return 3600*t[0]+60*t[1]+ +t[2]})),r=Math.abs(parseInt((s[1]-s[0])/60));return Object(b.jsxs)("tr",{className:"admin",children:[Object(b.jsxs)("th",{scope:"row",children:[" ",t+1," "]}),Object(b.jsxs)("td",{children:[" ",e.group," "]}),Object(b.jsxs)("td",{children:[" ",g()("".concat(e.createdAt)).format("LTS")," "]}),Object(b.jsxs)("td",{children:[" ",e.solution.length," "]}),Object(b.jsxs)("td",{children:[" ",g()("".concat(e.updatedAt)).format("LTS")," "]}),Object(b.jsxs)("td",{children:[" ",r,"mins"]})]},t)}))})]})})};var N=function(){var e=Object(r.useState)({group:"",gmail:"",firstMember:"",secondMember:"",thirdMember:"",password:""}),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(r.useState)({color:null,text:null,message:null,display:"none"}),a=Object(l.a)(n,2),d=a[0],m=a[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)(u.a,{children:[Object(b.jsx)(O,{color:d.color,text:d.text,message:d.message,display:d.display})," ",Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/CTF-admin",component:v})," ",Object(b.jsxs)(h.a,{exact:!0,path:"/register",children:[Object(b.jsx)(p,{setRegister:c,onChange:function(e){var t=e.target,r=t.value,n=t.name;c((function(){return Object(i.a)(Object(i.a)({},s),{},Object(o.a)({},n,r))}))},group:s.group,firstMember:s.firstMember,secondMember:s.secondMember,thirdMember:s.thirdMember,password:s.password,gmail:s.gmail,showAlert:function(e){var t=e.split(":");m({color:t[0],text:t[1],message:t[2],display:"block"}),setTimeout((function(){m({color:null,text:null,message:null,display:"none"})}),5e3)}})," "]})," ",Object(b.jsx)(h.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})})," "]})," "]})," "]})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.61f64a5e.chunk.js.map