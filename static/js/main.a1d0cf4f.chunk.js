(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,t,a){e.exports=a(83)},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),i=a(6),c=a(7),s=a(9),m=a(8),u=a(13),d=a(10),p=a(14),h=a(17),g=a(21),f=a(25),b=a(40),y=a(15);var v=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button",style:{borderColor:"transparent"},"data-toggle":"collapse",onClick:function(){return e.toggleMenu()},"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:e.isHamburgerOpen?"collapse navbar-collapse show":"collapse navbar-collapse collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-link m-2 menu-item nav-active",onClick:function(){return e.toggleMenu()}},r.a.createElement(p.b,{to:"/",className:"nav-link"}," Home ")),r.a.createElement("li",{className:"nav-link m-2 menu-item nav-active",onClick:function(){return e.toggleMenu()}},r.a.createElement(p.b,{to:"/contactMe",className:"nav-link"},"Contact Me")))))},E=a(18);var w=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container pt-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"Contacts"),r.a.createElement("a",{href:"https://www.linkedin.com/in/davidbgomes",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{className:"fa-2x",icon:["fab","linkedin"]})),r.a.createElement("a",{href:"https://github.com/davidbgomes",target:"_blank",rel:"noopener noreferrer",style:{marginLeft:"40px"}},r.a.createElement(E.a,{className:"fa-2x",icon:["fab","github-square"]})),r.a.createElement(p.b,{to:"/contactMe",style:{marginLeft:"40px"}},r.a.createElement(E.a,{className:"fa-2x",icon:["far","envelope"]})))),r.a.createElement("p",{style:{paddingTop:"20px",fontSize:"1.7vh"}},"Designed by David Gomes with React.js ")))},O=a(26),j=a(33),k=a(22),N=a(16),x=a(31),C=a(5);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M={position:"relative",width:"100%",height:"100%"},D={position:"relative",width:"100%",overflow:"hidden",minHeight:"100%"},P={position:"absolute",willChange:"transform, width, height, opacity, display"},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={width:0,height:0,open:void 0,lastOpen:void 0},a.scrollOut=function(e){a.props.lockScroll||(a.state.open&&a.toggle(void 0),a.clicked=!1)},a.toggle=function(e){return a.setState((function(t){return{lastOpen:t.open,open:t.open===e?void 0:e}}),(function(){return a.clicked=!0}))},a.resize=function(e,t,n){var r;return a.setState((r={},Object(N.a)(r,e,n.client.width),Object(N.a)(r,t,n.client.height),r))},a.resizeOuter=function(e){return a.resize("widthOuter","heightOuter",e)},a.resizeInner=function(e){return a.resize("width","height",e)},a.update=function(e){var t=e.key,n=e.x,r=e.y,l=e.width,o=e.height,i=a.state.open===t;return{opacity:a.state.open&&!i?0:1,display:a.state.open&&!i?"none":"flex",x:i?a.outerRef.scrollLeft:n,y:i?a.outerRef.scrollTop:r,width:i?a.state.width:l,height:i?a.state.heightOuter:o}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.clicked=!1}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.columns,l=t.margin,o=t.occupySpace,i=t.impl,c=t.config,s=t.data,m=t.keys,u=t.heights,d=t.closeDelay,p=t.lockScroll,h=Object(k.a)(t,["children","columns","margin","occupySpace","impl","config","data","keys","heights","closeDelay","lockScroll"]),g=this.state,f=g.lastOpen,b=g.open,y=g.width,v=0,E=new Array(n).fill(0),w=s.map((function(e,t){var a=o?E.indexOf(Math.min.apply(Math,Object(j.a)(E))):v++%n,r=y/n-l/(1-1/(n+1)),i=r*a,c=(a+1)*l,s=E[a]+l,d="function"===typeof u?u(e):u;return E[a]+=d+l,{x:l?i+c:i,y:s,width:r,height:d,key:m(e),object:e}})),O=p&&b?"hidden":"auto",N=Math.max.apply(Math,Object(j.a)(E))+l;return r.a.createElement(x.a,{client:!0,innerRef:function(t){return e.outerRef=t},onResize:this.resizeOuter},(function(t){var n=t.measureRef;return r.a.createElement("div",Object.assign({ref:n,style:I({},M,{},e.props.style,{overflow:O})},h,{onScroll:e.scrollOut,onWheel:e.scrollOut,onTouchMove:e.scrollOut}),r.a.createElement(x.a,{client:!0,innerRef:function(t){return e.innerRef=t},onResize:e.resizeInner},(function(t){var n=t.measureRef;return r.a.createElement("div",{ref:n,style:I({},D,{height:N})},r.a.createElement(C.Transition,{native:!0,items:w,keys:function(e){return e.key},from:{opacity:0,display:"none"},leave:{opacity:0,display:"none"},enter:e.update,update:e.update,impl:i,config:I({},c,{delay:e.clicked&&!b?d:0})},(function(t,n){return function(l){var o=l.opacity,i=l.x,c=l.y,s=l.width,m=l.height,u=l.display;return r.a.createElement(C.animated.div,{style:I({},P,{opacity:o,width:s,height:m,display:u,zIndex:f===t.key||b===t.key?1e3:n,transform:Object(C.interpolate)([i,c],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px, 0)")}))}),children:a(t.object,b===t.key,(function(){return e.toggle(t.key)}))})}})))})))}))}}]),t}(r.a.Component);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}A.defaultProps={occupySpace:!0,columns:3,margin:0,heights:400,lockScroll:!1,closeDelay:0};var F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.from,n=void 0===a?{opacity:0,transform:"translate3d(0,40px,0)"}:a,l=e.to,o=void 0===l?{opacity:1,transform:"translate3d(0,0px,0)"}:l,i=Object(k.a)(e,["children","from","to"]),c=r.a.Children.map(t,(function(e){return function(t){var a=C.animated[e.type]||Object(C.animated)(e.type),n=R({},e.props,{style:R({willChange:"opacity, transform, display"},e.props.style,{},t)});return r.a.createElement(a,n)}}));return r.a.createElement(C.Trail,Object.assign({native:!0},i,{items:c,keys:c.map((function(e,t){return t})),from:n,to:o,children:function(e){return e}}))}}]),t}(r.a.PureComponent),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.show,n=e.from,l=void 0===n?{opacity:0,display:"none"}:n,o=e.enter,i=void 0===o?{opacity:1,display:"flex"}:o,c=e.leave,s=void 0===c?{opacity:0,display:"none"}:c,m=Object(k.a)(e,["children","show","from","enter","leave"]),u=t.type,d=t.props,p=C.animated[u]||Object(C.animated)(u),h=function(e){var t=R({},d,{style:R({willChange:"opacity, transform, display"},d.style,{},e)});return r.a.createElement(p,t)};return r.a.createElement(C.Transition,Object.assign({native:!0,items:a},m,{from:l,enter:i,leave:s,children:function(e){return e&&h}}))}}]),t}(r.a.PureComponent),q=[{name:"Projects",description:"In recent years I've been working and messing around python, mostly doing programs that I could use myself, such as a youtube to mp3 converter, basic bots for games and follow bots on instagram (using sellenium), basically something that I found interesting and python allowed me to do so very well and rapidly. \n I've always been thinking of a way to make money ",css:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",height:900},{name:"Technologies",description:"#e0c3fc \u2192 #8ec5fc",css:"linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",height:200},{name:"Job Experience",description:"#f093fb \u2192 #f5576c",css:"linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",height:200},{name:"About Me",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",css:"linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",height:300}],z=a(32),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggle,a=e.name,n=e.css,l=e.active,o=r.a.createElement("a",{target:"_blank",className:"textLink",rel:"noopener noreferrer",href:"https://github.com/davidbgomes/ContactList"},"Contact List"),i=r.a.createElement("a",{target:"_blank",className:"textLink",rel:"noopener noreferrer",href:"https://oxyllus.pt"},"Oxyllus"),c=r.a.createElement("a",{target:"_blank",className:"textLink",rel:"noopener noreferrer",href:"https://github.com/davidbgomes/ContactList"},"Atlas");return r.a.createElement("div",{className:"cell",style:{backgroundImage:n,cursor:l?"auto":"pointer"},onClick:l?void 0:t},r.a.createElement(L,{show:l,delay:l?500:0},r.a.createElement("div",{className:"details"},r.a.createElement(F,{delay:600},r.a.createElement("div",{className:"circle",style:{background:n}}),r.a.createElement("div",{className:"close"},r.a.createElement(E.a,{type:"close",style:{cursor:"pointer"},onClick:t,icon:y.f})),r.a.createElement("h1",null,a),"About Me"===a?r.a.createElement("div",{className:"mb-auto ".concat(z.isMobile&&" gridContentDiv")},r.a.createElement("p",null,"Born and raised in Lisbon, I've a Bachelor's Degree in Computer Sciences in Universidade Nova de Lisboa."),r.a.createElement("p",null,"Ever since my Dad bought his first PC and showed me MS-DOS and early videogames, I was fascinated by that world, which led me to pursue a carreer as a software engineer."),r.a.createElement("p",null,"When I'm not developing, my biggest hobby is playing guitar. I also go to gym, chill out at home reading, watching movies or playing videogames, or go to a bar with friends on the weekends in the B.C. era."),r.a.createElement("p",null,"My current goal is to join a company that allows me to work and travel, since that has been my long time dream since I started working, and I've been developing my skills and working hard to make that happen.")):"Projects"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-auto gridContentDiv"},r.a.createElement("p",{className:"mt-3"},"Over the years working on other technologies, I taught myself Javascript (Vanilla, React.js and Node.js). As I went on to learn how to do basic to-do lists and calculators, I started working on more complex websites worthy of showing in a portfolio. The most important ones are:"),r.a.createElement("ul",null,r.a.createElement("p",null,r.a.createElement("li",null,o," - Built with minimalistic design with filters, sign-in page, dashboard page, contact details and node.js backend."))),r.a.createElement("ul",null,r.a.createElement("p",null,r.a.createElement("li",null,c," - Configurable World Map with Population and GDP stats. Built with React.js, React Simple Maps and Ant Design for the UI."))),r.a.createElement("ul",null,r.a.createElement("p",null,r.a.createElement("li",null,i," - My first e-commerce website, which allowed me to grow immensely as a developer, entrepreneur, and jack of all trades!",r.a.createElement("br",null),r.a.createElement("br",null),"The website was done with React.js and CSS for the front-end, and Node.js for the back-end. I used Firebase for the Database (Firestore), Authentication, Cloud Functions (serverless functions with Node), File Storage and Hosting. I've also used Google Analytics on the site. For the payment gateway I integrated two API's, for Credit Card purchases I used Stripe, and for portuguese Multibanco and MB-Way, that are used immensely here for online payments, I used EasyPay's API.",r.a.createElement("br",null),r.a.createElement("br",null),"So far it's only available in Portugal. I sell one product at a time and for each sale made, a tree will be planted."))),r.a.createElement("p",null,"Apart from that, I'm into doing small Python projects as well, like youtube to mp3 converter, instagram follow bot, basic game bots, basically something that I can use and enjoy."))):"Technologies"===a?r.a.createElement("div",{className:"mb-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("ul",null,r.a.createElement("p",null,r.a.createElement("li",{className:"mt-3"},"HTML"),r.a.createElement("li",{className:"mt-3"},"CSS"),r.a.createElement("li",{className:"mt-3"},"Javascript"),r.a.createElement("li",{className:"mt-3"},"React.js"),r.a.createElement("li",{className:"mt-3"},"Node.js"),r.a.createElement("li",{className:"mt-3"},"Firebase")))),r.a.createElement("div",{className:"col"},r.a.createElement("ul",null,r.a.createElement("p",null,r.a.createElement("li",{className:"mt-3"},"Outsystems"),r.a.createElement("li",{className:"mt-3"},"SQL Server"),r.a.createElement("li",{className:"mt-3"},"Python"),r.a.createElement("li",{className:"mt-3"},"Selenium"),r.a.createElement("li",{className:"mt-3"},"Java")))))):"Job Experience"===a?r.a.createElement("div",{className:"mb-auto ".concat(z.isMobile&&" gridContentDiv")},r.a.createElement("ul",null,r.a.createElement("p",null,r.a.createElement("li",{className:"mt-3"},"Inocrowd - After college, I interned at a start-up and worked as a Web Developer, mainly with HTML, CSS and Wordpress."),r.a.createElement("li",{className:"mt-3"},"TimeStamp - Following that experience, I worked on Document Management, which mostly deals with Java, SQL Server, HTML, Javascript and IdocScript."),r.a.createElement("li",{className:"mt-3"},"Truewind - As I wanted to work abroad, I enlisted in an international intership, which took place in Recife, Brazil and there I started working with Outsystems, which is a low code platform for developing web-apps, and after that 6 months in Brazil, I continued working for them in Portugal.")))):null))),!l&&r.a.createElement(E.a,{icon:"About Me"===a?y.g:"Projects"===a?y.e:"Technologies"===a?f.a:"Job Experience"===a?y.a:null,className:"fa-5x"}),r.a.createElement(L,{show:!l,from:{opacity:0,transform:"translate3d(0,140px,0)"},enter:{opacity:1,transform:"translate3d(0,0px,0)"},leave:{opacity:0,transform:"translate3d(0,-50px,0)"},delay:l?0:400},r.a.createElement("div",{className:"default"},r.a.createElement("div",{style:{zIndex:1}},r.a.createElement("span",{className:"gridTitle"},a)))))}}]),t}(r.a.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:q},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:{paddingBottom:"200px"}},r.a.createElement(O.a,null,r.a.createElement("title",null,"David Gomes - Portfolio"),r.a.createElement("meta",{name:"description",content:"David Gomes portfolio with contact info."})),r.a.createElement("h1",null,"Portfolio"),r.a.createElement("p",{className:"text-center"},"Hello! My name is David Gomes and I'm a portuguese software developer."),r.a.createElement("p",{className:"text-center"},"Check out more about me, my professional journey and my personal projects."),r.a.createElement(A,{className:"grid",data:this.state.data,keys:function(e){return e.name},heights:180,columns:2,margin:20,lockScroll:!0,closeDelay:500,config:C.config.slow},(function(e,t,a){return r.a.createElement(H,Object.assign({},e,{active:t,toggle:a}))})),r.a.createElement("p",{className:"text-center mt-4 mr-auto ml-auto",style:{maxWidth:"700px"}},"Since my goal of building an E-Commerce site is completed, right now I'm looking for a ",r.a.createElement("u",null,"remote job as a Fullstack developer or React developer"),"."),r.a.createElement("p",{className:"text-center mt-4"},r.a.createElement("b",null,"For any job offers or any questions, get in touch with me in the 'Contact Me' page.")))}}]),t}(r.a.Component),B=a(85),W=a(46),_=a.n(W),G=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={name:"",email:"",message:"",showAlert:!1},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e.handleNameChange=e.handleNameChange.bind(Object(u.a)(e)),e.handleEmailChange=e.handleEmailChange.bind(Object(u.a)(e)),e.handleTextChange=e.handleTextChange.bind(Object(u.a)(e)),e.toggleAlert=e.toggleAlert.bind(Object(u.a)(e)),e.resetForm=e.resetForm.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this;this.toggleAlert(),e.preventDefault();var a={message:this.state.message,from_name:this.state.name,reply_to:this.state.email};_.a.send("service_x2do2bd","template_ibq4pq9",a,"user_jRsWYNJ8D5fEIyDRJxvwf").then((function(e){console.log("SUCCESS!",e.status,e.text),t.resetForm()}),(function(e){console.log("FAILED...",e)}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleTextChange",value:function(e){this.setState({message:e.target.value})}},{key:"toggleAlert",value:function(){this.setState((function(e){return{showAlert:!e.showAlert}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:{paddingBottom:"200px"}},r.a.createElement(O.a,null,r.a.createElement("title",null,"David Gomes - Contact Me"),r.a.createElement("meta",{name:"description",content:"Contact me through this form for job offers or questions."})),r.a.createElement(B.a,{className:"alert-success",color:"primary",isOpen:this.state.showAlert,toggle:this.toggleAlert}," Email sent successfully! "),r.a.createElement("h1",null,"Contact Me"),r.a.createElement("p",null,"Feel free to contact me about possible job opportunities or questions you may have."),r.a.createElement("p",{className:"pb-3"},"I'll get back to you as soon as possible."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nameInput"},"Name/Company:"),r.a.createElement("input",{style:{maxWidth:"500px"},type:"text",value:this.state.name,className:"form-control",onChange:this.handleNameChange,id:"nameInput",placeholder:"Enter your name or the company name",required:!0})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"emailInput"},"Email:"),r.a.createElement("input",{style:{maxWidth:"500px"},type:"email",value:this.state.email,className:"form-control",onChange:this.handleEmailChange,id:"emailInput",placeholder:"Enter your email address",required:!0})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{className:"form-control",value:this.state.message,onChange:this.handleTextChange,placeholder:"Message goes here",rows:"10",id:"message",required:!0})),r.a.createElement("button",{className:"btn btn-primary"},"Submit")))}}]),t}(r.a.Component);a(81);g.b.add(f.b,b.a,y.d,y.b,y.c);var U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={isHamburgerOpen:!1},e.toggleMenu=e.toggleMenu.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleMenu",value:function(){this.setState((function(e){return{isHamburgerOpen:!e.isHamburgerOpen}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"appDiv"},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(v,{isHamburgerOpen:this.state.isHamburgerOpen,toggleMenu:this.toggleMenu}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:J}),r.a.createElement(h.a,{exact:!0,path:"/contactMe",component:G})),r.a.createElement(w,null))))}}]),t}(r.a.Component);a(82);o.a.render(r.a.createElement(p.a,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a1d0cf4f.chunk.js.map