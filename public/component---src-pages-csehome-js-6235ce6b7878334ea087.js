(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"M6/l":function(e,a,t){"use strict";t.r(a);var i=t("nKUr"),s=t("q1tI"),c=t.n(s),o=t("xVFz"),n=t("vrFN"),r=t("dI71"),l=t("VOqC"),d=t.n(l),m=t("yWb0"),j=t.n(m),h=t("Ed9y"),b=t.n(h),g=t("fA/B"),u=t.n(g),x=t("fuX5"),O=t.n(x),p=(t("vhkn"),t("s9OA")),w=t("PFAz"),f=t("vDqi"),v=t.n(f),N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={notices:[]},t}Object(r.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;v.a.get("http://beta.nitp.ac.in:3000/api/notice").then((function(a){var t=a.data;e.setState({notices:t})})).catch((function(e){console.log(e)}))},t.render=function(){return Object(i.jsxs)("div",{className:"depsection",children:[Object(i.jsx)(p.a,{}),Object(i.jsxs)("div",{className:"dmainrow dmainrowmain",id:"home",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsx)("h1",{"data-aos":"zoom-in-right",children:"Computer Science & Engineering"})}),Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsx)("h2",{"data-aos":"zoom-in-right",children:"“The computer was born to solve problems that did not exist before.”"})}),Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsx)("h2",{"data-aos":"zoom-in-right",id:"aut",children:"— Bill Gates"})})]}),Object(i.jsx)("div",{className:"col-6 imgcolstyle",children:Object(i.jsx)("img",{"data-aos":"zoom-in",src:d.a,className:"img-fluid",loading:"lazy"})})]}),Object(i.jsx)("div",{className:"dmainrow",id:"about",children:Object(i.jsxs)("div",{className:"depabout",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("h1",{"data-aos":"zoom-in",children:"About"})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("p",{"data-aos":"zoom-in",children:["Computer Science and Engineering branch of NIT Patna offers courses leading to Bachelor of Technology in Computer Science and Engineering. The department has a very good infrastructure and faculty to provide excellent education.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"The curriculum is updated regularly to keep up with the growing demands and the changing trends of the software industry and research laboratories.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"The department provides a wide range of courses. The prominent among them includes Data Structures, Design and Analysis of Algorithms, System Programming, Computer Networks, Data Mining and Warehousing, Distributed and Parallel Computing, Mobile and Wireless Computing, Real-time Systems, Cryptography, Genetic Algorithm and Artificial Intelligence. Apart from these, students are also offered a wide variety of electives."]})})]})}),Object(i.jsxs)("div",{className:"dmainrow",id:"happening",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsx)("h1",{"data-aos":"zoom-in-right",children:"Happenings"})}),Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsx)("div",{id:"depnoticewrap",children:this.state.notices.map((function(e){var a=(new Date).getTime(),t=Math.round((a-e.timestamp)/36e5);if(t>24?t=Math.round(t/24)+" days ago":t<1?t="Just now":t+=t<2?" hour ago":" hours ago",""!=e.title)return Object(i.jsx)(w.a,{detail:e.title,time:t,attachments:e.attachments})}))})})]}),Object(i.jsx)("div",{className:"col-6 imgcolstyle",children:Object(i.jsx)("img",{"data-aos":"zoom-in",src:j.a,className:"img-fluid",loading:"lazy"})})]}),Object(i.jsxs)("div",{className:"dmainrow dmainrow1",id:"mission",children:[Object(i.jsx)("div",{className:"col-6 imgcolstyle",children:Object(i.jsx)("img",{"data-aos":"zoom-in",src:b.a,className:"img-fluid",loading:"lazy"})}),Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("div",{className:"row rowmarr3",children:Object(i.jsx)("h1",{"data-aos":"zoom-in-left",children:"Mission"})}),Object(i.jsx)("div",{className:"row rowmarr3",children:Object(i.jsx)("p",{"data-aos":"zoom-in-left",children:"To formulate up-to-date and flexible technical programs which will allow our graduates to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a centre of excellence."})})]})]}),Object(i.jsxs)("div",{className:"dmainrow",id:"vision",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsx)("h1",{"data-aos":"zoom-in-right",children:"Vision"})}),Object(i.jsx)("div",{className:"row rowmarl3",children:Object(i.jsxs)("p",{"data-aos":"zoom-in-right",children:["To impart high quality of Under-graduate and Post-graduate education in all Computer related fields to increase the employability.",Object(i.jsx)("br",{}),"To develop world class professionals to meet the growing manpower demands and needs of the industry for economic development of the state and the country.",Object(i.jsx)("br",{}),"To conduct high standard technical research for betterment of the society."]})})]}),Object(i.jsx)("div",{className:"col-6 imgcolstyle",children:Object(i.jsx)("img",{"data-aos":"zoom-in",src:O.a,className:"img-fluid",loading:"lazy"})})]}),Object(i.jsxs)("div",{className:"dmainrow dmainrow1",id:"contact",children:[Object(i.jsx)("div",{className:"col-6 imgcolstyle",children:Object(i.jsx)("img",{"data-aos":"zoom-in",src:u.a,className:"img-fluid",loading:"lazy"})}),Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("div",{className:"row rowmarr3",children:Object(i.jsx)("h1",{"data-aos":"zoom-in-left",children:"Contact"})}),Object(i.jsx)("div",{className:"row rowmarr3",children:Object(i.jsxs)("p",{"data-aos":"zoom-in-left",children:["Department of Computer Science & Engg.,",Object(i.jsx)("br",{}),"National Institute Of Technology Patna,",Object(i.jsx)("br",{}),"Ashok Rajpath, Patna - 800005.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Email: head.cs@nitp.ac.in",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Extn: +91-612-(2371715/2715/2371929/",Object(i.jsx)("br",{}),"2370419/2370843/2371930) 201"]})})]})]})]})},a}(c.a.Component);a.default=function(){return Object(i.jsxs)(o.a,{children:[Object(i.jsx)(n.a,{title:"CSE"}),Object(i.jsx)(N,{})]})}}}]);
//# sourceMappingURL=component---src-pages-csehome-js-6235ce6b7878334ea087.js.map