(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{BXUK:function(e,i,n){e.exports=n.p+"static/faculty-dfecff8cb2d644e4e35fd4f8d6149191.svg"},O9oC:function(e,i,n){"use strict";var c=n("dI71"),t=n("nKUr"),s=n("q1tI"),a=n.n(s),l=(n("f7EQ"),n("aNqK"),n("Wbzz")),r=function(e){function i(i){return e.call(this,i)||this}return Object(c.a)(i,e),i.prototype.render=function(){var e=[];return null!=this.props.research&&(e=this.props.research.split(",")),Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"facultycard",children:[Object(t.jsxs)("div",{className:"faculty1",children:[0!=this.props.extn?Object(t.jsxs)("p",{className:"extn",children:["Extn:",this.props.extn]}):null,Object(t.jsxs)("div",{className:"row fimg",children:[Object(t.jsx)("div",{className:"facimg",children:Object(t.jsx)("img",{src:this.props.image,alt:""})}),Object(t.jsx)("h2",{children:this.props.name}),Object(t.jsx)("h3",{children:this.props.desg}),Object(t.jsx)("p",{children:this.props.email})]})]}),Object(t.jsxs)("div",{className:"faculty2",children:[Object(t.jsx)("p",{children:"Research Interests:-"}),e.map((function(e){return Object(t.jsx)("p",{children:e})})),Object(t.jsx)("p",{children:Object(t.jsx)(l.Link,{to:"../facultyprofile",state:{url:"http://beta.nitp.ac.in:3000/api/faculty/profile?id="+this.props.id},children:"View Full Profile"})})]})]})})},i}(a.a.Component);i.a=r},"Vsg/":function(e,i,n){},aNqK:function(e,i,n){},f7EQ:function(e,i,n){e.exports=n.p+"static/image 2-f7e5b07eb234114d36a05417bd2d1035.png"},i6iS:function(e,i,n){"use strict";n.r(i);var c=n("nKUr"),t=n("q1tI"),s=n.n(t),a=n("xVFz"),l=n("vrFN"),r=n("dI71"),d=n("vDqi"),o=n.n(d),j=(n("Vsg/"),n("O9oC")),m=n("BXUK"),h=n.n(m),b=function(e){function i(i){var n;return(n=e.call(this,i)||this).state={faculties:[]},n}Object(r.a)(i,e);var n=i.prototype;return n.componentDidMount=function(){var e=this;o.a.get("http://beta.nitp.ac.in:3000/api/faculty/maths").then((function(i){var n=i.data.faculties;e.setState({faculties:n}),console.log(e.state.faculties)})).catch((function(e){console.log(e)}))},n.render=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{style:{marginTop:"10vh",marginBottom:"15vh"},children:[Object(c.jsxs)("div",{className:"dmainrow dmainrowmain",children:[Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("div",{className:"row rowmarl3",children:Object(c.jsx)("h1",{"data-aos":"zoom-in-right",children:"Faculties"})}),Object(c.jsx)("div",{className:"row rowmarl3",children:Object(c.jsx)("h1",{"data-aos":"zoom-in-right",children:"-Mathematics"})})]}),Object(c.jsx)("div",{className:"col-6 imgcolstyle",children:Object(c.jsx)("img",{"data-aos":"zoom-in",src:h.a,className:"img-fluid",style:{maxHeight:"50vh"},loading:"lazy"})})]}),Object(c.jsx)("div",{className:"row facultyrow",children:this.state.faculties.map((function(e){return Object(c.jsx)(j.a,{name:e.name,email:e.email,extn:e.ext_no,id:e.id,research:e.research_interest,image:"http://beta.nitp.ac.in:3000/"+e.imgUrl,desg:e.designation})}))})]})})},i}(s.a.Component);i.default=function(){return Object(c.jsxs)(a.a,{children:[Object(c.jsx)(l.a,{title:"Mathematics|Faculty"}),Object(c.jsx)(b,{})]})}},xVFz:function(e,i,n){"use strict";var c=n("dI71"),t=n("nKUr"),s=n("vOnD"),a=n("q1tI"),l=n.n(a),r=n("Wbzz"),d=(n("azF3"),n("15WX"),n("TGQk")),o=n.n(d),j=n("pdtC"),m=n.n(j),h=n("19JU"),b={csehome:"Computer Science and Engineering",ecehome:"Electronics and Communication Engineering",chemhome:"Chemistry",archhome:"Architecture",cehome:"Civil Engineering",hsshome:"Humanities and Social Sciences",physicshome:"Physics",mathhome:"Mathematics",eehome:"Electrical Engineering",mehome:"Mechanical Engineering"},v=n("F3F1"),p=n.n(v),u=n("qoy9"),x=n.n(u),O=n("4v6j"),g=n.n(O),y=n("dVg7"),k=n.n(y),N=n("f3yp"),f=n.n(N),S=n("MprI"),w=n.n(S),q=n("3MN4"),L=n.n(q),C=n("6ZZ/"),E=n.n(C),T=function(){var e=h.a.location.pathname.split("/")[1];return h.a.onscroll=function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?(document.querySelector(".nav-col>h2").style.lineHeight="0.2rem",document.querySelector(".nav-col>h4").style.lineHeight="0.2rem",document.querySelector(".nav-link-row").style.backgroundColor="black",document.querySelector(".nav-link-row").style.marginTop="4vw",document.querySelector(".dep-nav-row").style.marginTop="6.3vw",document.querySelector(".logobadge>h4").style.display="none",document.querySelector(".logobadge>div>img").style.maxHeight="5vw",document.querySelector(".logobadge>div>img").style.borderWidth="0px",document.querySelector(".logobadge").style.backgroundColor="transparent",document.querySelector(".logobadge>div>img").style.marginTop="1.5vw",document.querySelector(".logobadge").style.paddingLeft="0",document.querySelector(".mobilelogo>img").style.maxHeight="5vh",document.querySelector(".logobadge").style.transition="1s",document.querySelector(".logobadge>h4").style.transition="1s",document.querySelector(".logobadge>div>img").style.transition="1s",document.querySelector(".mobilelogo>img").style.transition="1s",document.querySelector(".nav-link-row").style.opacity="1",document.querySelector(".nav-col").style.paddingTop="0.2vw"):(document.querySelector(".nav-col>h2").style.lineHeight="0.3rem",document.querySelector(".nav-col>h4").style.lineHeight="0.3rem",document.querySelector(".nav-link-row").style.backgroundColor="black",document.querySelector(".nav-link-row").style.marginTop="4.7vw",document.querySelector(".dep-nav-row").style.marginTop="7vw",document.querySelector(".logobadge>h4").style.display="flex",document.querySelector(".logobadge>div>img").style.maxHeight="8vw",document.querySelector(".logobadge>div>img").style.borderWidth="0.5vw",document.querySelector(".logobadge").style.backgroundColor="#E47F40",document.querySelector(".logobadge>div>img").style.marginTop="0px",document.querySelector(".logobadge").style.paddingLeft="0",document.querySelector(".mobilelogo>img").style.maxHeight="7vh",document.querySelector(".logobadge").style.transition="1s",document.querySelector(".logobadge>h4").style.transition="1s",document.querySelector(".logobadge>div>img").style.transition="1s",document.querySelector(".mobilelogo>img").style.transition="1s",document.querySelector(".nav-link-row").style.opacity="0.8",document.querySelector(".nav-col").style.paddingTop="0.5vw")},Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"nav-row",children:[Object(t.jsx)(r.Link,{className:"mobilelogo","data-aos":"zoom-in",to:"/",children:Object(t.jsx)("img",{src:o.a,alt:"NIT PATNA"})}),Object(t.jsxs)("div",{className:"nav-col",children:[Object(t.jsx)("h2",{children:"NATIONAL INSTITUTE OF TECHNOLOGY PATNA"}),Object(t.jsx)("h4",{children:"राष्ट्रीय प्रौद्योगिकी संस्थान, पटना"})]}),Object(t.jsxs)("div",{className:"nav-link-row",children:[Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/",children:Object(t.jsx)("span",{children:"Home"})}),Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/about",children:Object(t.jsx)("span",{children:"About Us"})}),Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/administration",children:Object(t.jsx)("span",{children:"Administration"})}),Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/academics",children:Object(t.jsx)("span",{children:"Academics"})}),Object(t.jsx)("div",{id:"navblank"}),Object(t.jsxs)("div",{className:"dropdown nav-link-div",children:[Object(t.jsx)("button",{className:"dropbtn nav-link-div nav-link-item",children:"Departments"}),Object(t.jsxs)("div",{className:"dropdown-content",children:[Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/csehome",children:Object(t.jsx)("span",{children:"Computer Science and Engineering"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/ecehome",children:Object(t.jsx)("span",{children:"Electronics and Communication Engineering"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/eehome",children:Object(t.jsx)("span",{children:"Electrical Engineering"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/mehome",children:Object(t.jsx)("span",{children:"Mechanical Engineering"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/cehome",children:Object(t.jsx)("span",{children:"Civil Engineering"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/hsshome",children:Object(t.jsx)("span",{children:"Humanities & Social Sciences"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/archhome",children:Object(t.jsx)("span",{children:"Architecture"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/physicshome",children:Object(t.jsx)("span",{children:"Physics"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/chemhome",children:Object(t.jsx)("span",{children:"Chemistry"})}),Object(t.jsx)(r.Link,{className:"nav-link-item",to:"/mathhome",children:Object(t.jsx)("span",{children:"Mathematics"})})]})]}),Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/facilities",children:Object(t.jsx)("span",{children:"Facilities"})}),Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/student/",children:Object(t.jsx)("span",{children:"Students"})}),Object(t.jsx)(r.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/placements",children:Object(t.jsx)("span",{children:"Placements"})})]}),Object(t.jsxs)("div",{className:"dep-nav-row",children:[Object(t.jsx)(r.Link,{className:"dep-nav-col dep-link-item",to:"/"+e,children:b[e]}),Object(t.jsx)("div",{style:{width:"30%"}}),Object(t.jsx)("div",{className:"dep-nav-col-2",children:Object(t.jsx)(r.Link,{to:"/"+e+"/syllabus",className:"dep-link-item",children:"Syllabus"})}),Object(t.jsx)("div",{className:"dep-nav-col",children:Object(t.jsx)(r.Link,{to:"/"+e+"/faculty",className:"dep-link-item",children:"Faculty"})})]}),Object(t.jsx)(r.Link,{id:"logowr1",to:"/",children:Object(t.jsxs)("div",{className:"logobadge","data-aos":"fade-down",children:[Object(t.jsx)("h4",{children:"श्रमोऽनवरत चेष्टाय"}),Object(t.jsx)("div",{id:"logowr2",children:Object(t.jsx)("img",{src:o.a,alt:"NIT PATNA"})})]})}),Object(t.jsx)("span",{className:"nav-toggle",onClick:function(){var e=document.querySelector(".nav-sidebar");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:Object(t.jsx)("img",{"data-aos":"zoom-in",src:m.a,alt:"menu"})}),Object(t.jsxs)("div",{className:"nav-sidebar",children:[Object(t.jsx)("div",{className:"navsidetop",children:Object(t.jsxs)(r.Link,{className:"navsidetop",to:"/"+e,children:[Object(t.jsx)("img",{src:o.a,alt:"logo"}),Object(t.jsx)("p",{children:b[e]})]})}),Object(t.jsx)("div",{className:"nav-sidebar-div",onClick:function(){var e=document.querySelector("#maindropwrap");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:Object(t.jsx)("p",{className:"navsidedepart",children:Object(t.jsx)("span",{className:"nav-side-link",children:"Main Menu"})})}),Object(t.jsxs)("div",{id:"maindropwrap",className:"mainsidedrop",children:[Object(t.jsxs)(r.Link,{className:"nav-sidebar-div",to:"/",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:f.a,alt:""})}),Object(t.jsx)("p",{children:"Home"})]}),Object(t.jsxs)(r.Link,{className:"nav-sidebar-div",to:"/about",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:g.a,alt:""})}),Object(t.jsx)("p",{children:"About Us"})]}),Object(t.jsxs)(r.Link,{className:"nav-sidebar-div",to:"/administration",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:x.a,alt:""})}),Object(t.jsx)("p",{children:"Administration"})]}),Object(t.jsxs)(r.Link,{className:"nav-sidebar-div",to:"/academics",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:p.a,alt:""})}),Object(t.jsx)("p",{children:"Academics"})]}),Object(t.jsxs)("div",{className:"nav-sidebar-div",onClick:function(){var e=document.querySelector("#departdropicon"),i=document.querySelector(".departsidedrop"),n=document.querySelector("#departsidedropwrap");"none"===i.style.display?(i.style.display="block",n.style.display="flex",e.style.transform="rotate(180deg)"):(i.style.display="none",n.style.display="none",e.style.transform="rotate(0deg)")},children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:E.a,id:"departdropicon",alt:""})}),Object(t.jsx)("p",{className:"navsidedepart",children:Object(t.jsx)("span",{children:"Departments"})})]}),Object(t.jsx)("div",{id:"departsidedropwrap",children:Object(t.jsxs)("div",{className:"departsidedrop",children:[Object(t.jsx)(r.Link,{to:"/csehome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Computer Science and Engineering"})})}),Object(t.jsx)(r.Link,{to:"/ecehome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Electronics and Communication Engineering"})})}),Object(t.jsx)(r.Link,{to:"/eehome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Electrical Engineering"})})}),Object(t.jsx)(r.Link,{to:"/mehome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Mechanical Engineering"})})}),Object(t.jsx)(r.Link,{to:"/cehome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Civil Engineering"})})}),Object(t.jsx)(r.Link,{to:"/hsshome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Humanities & Social Sciences"})})}),Object(t.jsx)(r.Link,{to:"/archhome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Architecture"})})}),Object(t.jsx)(r.Link,{to:"/physicshome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Physics"})})}),Object(t.jsx)(r.Link,{to:"/chemhome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Chemistry"})})}),Object(t.jsx)(r.Link,{to:"/mathhome",className:"nav-sidebar-div",children:Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"Mathematics"})})})]})}),Object(t.jsxs)(r.Link,{to:"/facilities",className:"nav-sidebar-div",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:k.a,alt:""})}),Object(t.jsx)("p",{children:"Facilities"})]}),Object(t.jsxs)(r.Link,{to:"/student",className:"nav-sidebar-div",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:w.a,alt:""})}),Object(t.jsx)("p",{children:"Students"})]}),Object(t.jsxs)(r.Link,{to:"/placements",className:"nav-sidebar-div",children:[Object(t.jsx)("div",{className:"navsideicondiv",children:Object(t.jsx)("img",{src:L.a,alt:""})}),Object(t.jsx)("p",{children:"Placements"})]})]}),Object(t.jsx)(r.Link,{className:"nav-side-link nav-sidebar-div",to:"/"+e+"/syllabus",children:Object(t.jsx)("p",{children:"Syllabus"})}),Object(t.jsx)(r.Link,{className:"nav-side-link nav-sidebar-div",to:"/"+e+"/faculty",children:Object(t.jsx)("p",{children:"Faculty"})})]})]})})},F=n("W/9C"),A=(n("8ypT"),n("6Cl6"),Object(s.a)("div").withConfig({displayName:"deplayout___StyledDiv",componentId:"sc-1s351mu-0"})(["padding-top:4.8vw;"])),H=function(e){function i(){var i;(i=e.call(this)||this,"undefined"!=typeof window)&&n("9a8T").init();return i}Object(c.a)(i,e);var s=i.prototype;return s.ComponentDidMount=function(){"undefined"!=typeof window&&n("9a8T").init()},s.componentDidUpdate=function(){"undefined"!=typeof window&&n("9a8T").refresh()},s.render=function(){var e=this.props.children;return Object(t.jsx)(r.StaticQuery,{query:"220797600",render:function(i){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(T,{}),Object(t.jsxs)(A,{children:[Object(t.jsx)("main",{children:e}),Object(t.jsx)(F.a,{})]})]})}})},i}(l.a.Component);i.a=H}}]);
//# sourceMappingURL=component---src-pages-mathhome-faculty-js-cdfe64dd4634a4f415f9.js.map