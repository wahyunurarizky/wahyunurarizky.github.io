(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{18:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(9),r=s.n(a),n=s(5),l=(s(18),s(46)),o=s(47),j=s(0),d=function(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"Arzky."}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"+ 62 895 3202 98734"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"wahyunurarizky18@gmail.com"})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})},m=(s(24),s(11)),h=function(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(m.a)(e.current,{showCursor:!0,backDelay:1500,strings:["Backend Engineer","Web Developer","Node JS Programmer","PHP Programmer"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/man3.png",alt:""})})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi There, I'm"}),Object(j.jsx)("h1",{children:"Wahyu Nur Arizky"}),Object(j.jsx)("h3",{children:Object(j.jsx)("span",{ref:e})})]}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"assets/down.png",alt:""})})]})]})},b=(s(25),function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("h2",{children:"Contact."}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0)},children:[Object(j.jsx)("input",{type:"email",placeholder:"Email",name:"",id:""}),Object(j.jsx)("textarea",{name:"",id:"",placeholder:"Message"}),Object(j.jsx)("button",{type:"submit",children:"Send"}),s&&Object(j.jsx)("span",{children:"Thanks I'll reply ASAP :)"})]})]})]})}),u=(s(26),function(){return Object(j.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(j.jsx)("h1",{children:"Testimonials"}),Object(j.jsx)("div",{className:"container",children:[{id:1,name:"Tom Durden",title:"Senior Developer",img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/twitter.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."},{id:2,name:"Alex Kalinski",title:"Co-Founder of DELKA",img:"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/youtube.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",featured:!0},{id:3,name:"Martin Harold",title:"CEO of ALBI",img:"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/linkedin.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem"}].map((function(e){return Object(j.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("img",{src:"assets/right-arrow.png",alt:"",className:"left"}),Object(j.jsx)("img",{src:e.img,alt:"",className:"user"}),Object(j.jsx)("img",{src:e.icon,alt:"",className:"right"})]}),Object(j.jsx)("div",{className:"center",children:e.desc}),Object(j.jsxs)("div",{className:"bottom",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("h4",{children:e.title})]})]})}))})]})}),p=(s(27),s(28),function(e){var t=e.title,s=e.active,i=e.setSelected,c=e.id;return Object(j.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return i(c)},children:t})}),g=s(12),O=s.n(g),x=s(48),f=s(49),y=[{id:2,title:"E-commerce with Codeigniter",img:"assets/port1.jpg",urlGithub:"https://github.com/wahyunurarizky/RPLv3",url:"https://wahyunurarizky.000webhostapp.com"},{id:3,title:"MGPL Web App with Express",img:"assets/port8.png",urlGithub:"https://github.com/wahyunurarizky/mgpl-s3",url:"https://mgpl.herokuapp.com"},{id:4,title:"Natours: Tour Web App with Express",img:"assets/port3.png",urlGithub:"#",url:"https://www.natours.dev"},{id:7,title:"Simple Box office with React",img:"assets/port11.jpg",urlGithub:"https://github.com/wahyunurarizky/box-office",url:"https://wahyunuaraizky.github.io/box-office"},{id:6,title:"Simple Chat App Aplication with React",img:"assets/port10.jpg",urlGithub:"https://github.com/wahyunurarizky/chat-app",url:"https://chat-web-arzky.web.app"},{id:6,title:"Simple Portfolio With Bootstrap",img:"assets/port9.png",urlGithub:"https://github.com/wahyunurarizky/portfolio2",url:"https://wahyunuaraizky.github.io/portfolio2"},{id:5,title:"Simple Project Cart Shop with React",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",urlGithub:"#",url:"#"}],w=[{id:1,title:"Puslitpen Web App with Laravel as Backend",img:"assets/port5.png",urlGithub:"#",url:"http://puslitpen.herokuapp.com"},{id:2,title:"Samter Web & Android App with Express as Backend",img:"assets/port62.jpg",urlGithub:"#",url:"https://samter.mandiritunasmuda.co.id"},{id:3,title:"Puskarier UIN JKT Web App using react and laravel",img:"assets/port12.png",urlGithub:"#",url:"https://puskarier.vercel.app"}],k=[{id:1,title:"NodeJS, Express, MongoDB by Jonas Schmedtmann",img:"assets/serti1.png"},{id:2,title:"Belajar Dasar Pemograman Web by Dicoding",img:"assets/serti2.png"},{id:3,title:"Architecting on AWS by Dicoding",img:"assets/serti-cloud-aws.jpg"},{id:4,title:"Belajar Membuat Aplikasi Back-End untuk Pemula by Dicoding",img:"assets/sert-be.jpg"},{id:5,title:"Belajar Dasar Pemrograman JavaScript by Dicoding",img:"assets/serti-js.jpg"},{id:6,title:"Cloud Practitioner Essentials by Dicoding",img:"assets/serti-cloud.jpg"},{id:7,title:"Database Design & Programming with SQL - Oracle Academy",img:"assets/serti-oracle.jpg"}],v=[{id:1,title:"Tech Team - Intern YLABS.ID",img:"assets/serti-ylabs.jpg"}],N=function(){var e=Object(i.useState)("myproject"),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),r=Object(n.a)(a,2),l=r[0],o=r[1];return Object(i.useEffect)((function(){switch(s){case"myproject":o(y);break;case"teamproject":o(w);break;case"cetification":o(k);break;case"other":o(v);break;default:o(y)}}),[s]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("ul",{children:[{id:"myproject",title:"My Projects"},{id:"teamproject",title:"Team Projects"},{id:"cetification",title:"Certification"},{id:"other",title:"Others"}].map((function(e){return Object(j.jsx)(p,{title:e.title,id:e.id,active:s===e.id,setSelected:c})}))}),Object(j.jsx)(O.a,{className:"container",children:l.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsxs)("h3",{children:[e.title,Object(j.jsxs)("div",{className:"source",children:[Object(j.jsx)("a",{target:"blank",href:e.urlGithub,children:Object(j.jsx)(x.a,{})}),Object(j.jsx)("a",{target:"blank",href:e.url,children:Object(j.jsx)(f.a,{})})]})]})]})}))})]})},S=(s(30),function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),s=t[0],c=t[1],a=[{id:"1",icon:"./assets/mobile.png",title:"Web Developer",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"},{id:"2",icon:"./assets/globe.png",title:"Backend Engineer",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"},{id:"3",icon:"./assets/writing.png",title:"NodeJS Programmer",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"}],r=function(e){c("left"===e?s>0?s-1:a.length-1:s<a.length-1?s+1:0)};return Object(j.jsxs)("div",{className:"works",id:"works",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:a.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftContainer",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:e.icon,alt:""})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc}),Object(j.jsx)("span",{children:"Projects"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return r()}})]})}),C=(s(31),s(50)),P=s(51),z=s(52),A=s(53),D=s(54),E=s(55),L=s(56),B=s(57),W=function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("a",{href:"https://www.instagram.com/wahyunurarizky",target:"blank",children:[Object(j.jsx)(C.a,{}),Object(j.jsx)("span",{children:"@wahyunurarizky"})]}),Object(j.jsxs)("a",{href:"mailto:wahyunurarizky18@gmail.com",target:"blank",children:[Object(j.jsx)(o.a,{})," ",Object(j.jsx)("span",{children:"wahyunurarizky18@gmail.com"})]}),Object(j.jsxs)("a",{href:"https://wa.me/62895320298734",target:"blank",children:[Object(j.jsx)(P.a,{})," ",Object(j.jsx)("span",{children:"+62 895 320298734"})]}),Object(j.jsxs)("a",{href:"https://telegram.me/wahyunurarizky",target:"blank",children:[Object(j.jsx)(z.a,{})," ",Object(j.jsx)("span",{children:"wahyunurarizky"})]}),Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/wahyu-nur-arizky-a47275168/",target:"blank",children:[Object(j.jsx)(A.a,{})," ",Object(j.jsx)("span",{children:"Wahyu Nur Arizky"})]}),Object(j.jsxs)("a",{href:"https://www.github.com/wahyunurarizky",target:"blank",children:[Object(j.jsx)(x.a,{})," ",Object(j.jsx)("span",{children:"Wahyu Nur Arizky"})]})]}),Object(j.jsxs)("h3",{children:["Here is my CV",Object(j.jsxs)("a",{href:"assets/summary.pdf",children:[Object(j.jsx)(D.a,{className:"ta"}),Object(j.jsx)(E.a,{})]})]}),Object(j.jsxs)("p",{children:["create by",Object(j.jsx)(L.a,{className:"love"})," with reactjs",Object(j.jsx)(B.a,{className:"cp"})," 2021"]})]})},G=(s(32),function(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#works",children:"Works"})}),Object(j.jsx)("li",{onClick:function(){s(!1)},children:Object(j.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})});s(33);var M=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{menuOpen:s,setMenuOpen:c}),Object(j.jsx)(G,{menuOpen:s,setMenuOpen:c}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(h,{}),Object(j.jsx)(N,{}),Object(j.jsx)(S,{}),Object(j.jsx)(u,{}),Object(j.jsx)(b,{}),Object(j.jsx)(W,{})]})]})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d6aaa9e1.chunk.js.map