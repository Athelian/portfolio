(this["webpackJsonpportfolio-site2"]=this["webpackJsonpportfolio-site2"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},115:function(e,t,n){},117:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a,s=n(1),r=n.n(s),c=n(28),i=n.n(c),A=(n(97),n(20)),o=n.p+"static/media/github.bcd9bda4.png",l=n.p+"static/media/linkedin.69f2aa5b.png",d=n.p+"static/media/resume.af9c260f.png",j=n.p+"static/media/medium-black.d4869399.png",m=n.p+"static/media/Resume, Eliot Austin-Forbes.43f1744d.pdf",h=(n(98),n(0)),u=function(){return Object(h.jsx)("footer",{className:"Links",children:[[o,"https://www.github.com/athelian"],[l,"https://www.linkedin.com/in/eaustinforbes/"],[j,"https://medium.com/@ejaustinforbes"],[d,m,!0]].map((function(e){return Object(h.jsx)("a",{download:"Eliot Austin-Forbes Resume",href:e[1],rel:"noopener noreferrer",target:"_blank",children:Object(h.jsx)("img",{className:"hvr-bob",src:e[0]})})}))})},b=n(47),g=(n(100),function(e){return Object(h.jsx)("div",{className:"Planet "+e.planetClassname,children:Object(h.jsx)("div",Object(b.a)(Object(b.a)({className:"Sphere"},e.sphereProps),{},{children:Object(h.jsx)("div",Object(b.a)(Object(b.a)({className:"Hemisphere"},e.hemisphereProps),{},{children:e.children}))}))})}),p=n(8),f=n.n(p),x=(a=f.a,Object.keys(a).reduce((function(e,t){if(!t.startsWith("planet"))return e;var n=a[t],s=t.split("-"),r=s[1],c=s[2],i=s[3],A=s[4];return e[r]||(e[r]={}),e[r][c]||(e[r][c]={}),e[r][c][i]||(e[r][c][i]={}),e[r][c][i][A]=n,e}),{}));function O(){var e=window,t=e.innerWidth,n=e.innerHeight;return{vmin:Math.min(t,n)}}var v=function(e){var t=e.min,n=e.max;return Math.floor(Math.random()*(n-t+1))+t},C=(n(101),Array(v({min:10,max:20})).fill("").map((function(){var e=v({min:-50,max:50}),t=10*v({min:0,max:36}),n=Object.values(x.earth.clouds).map((function(e){return e.label}));return{randomZ:e,randomY:t,randomCloud:n[v({min:0,max:n.length-1})],randomScale:v({min:21,max:30})}}))),E=function(){var e=function(){var e=Object(s.useState)(O()),t=Object(A.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){a(O())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.vmin,n=Object(s.useState)(100),a=Object(A.a)(n,2),r=a[0],c=a[1],i=720-t,o=Math.floor((i-i%10)/20);return o>20&&(o=20),o<0&&(o=0),Object(s.useEffect)((function(){var e=function(){var e=Math.round(100*window.devicePixelRatio);c(e)};return window.addEventListener("resize",(function(){return e()})),function(){return window.removeEventListener("resize",e)}}),[]),Object(h.jsx)("div",{className:"Earth__Clouds",style:r>175?{display:"none"}:{},children:C.map((function(e){return Object(h.jsx)(g,{planetClassname:"Planet--Clouds Planet--Clouds--y-rotation--".concat(e.randomY),hemisphereProps:{style:{transform:"rotateY(".concat(e.randomY,"deg) rotateZ(").concat(e.randomZ,"deg)")}},children:Object(h.jsx)("div",{className:"Island Cloud Cloud--".concat(e.randomCloud," Cloud--scale-").concat(e.randomScale-o),children:Array(parseInt(f.a["cloud-layers"])+1).fill("").map((function(e,t){return Object(h.jsx)("div",{},t)}))})})}))})},I=parseInt(f.a["number-of-projects"]),w=parseInt(f.a["number-of-slides"]),y=parseInt(f.a["starting-rotation"]),N=parseFloat(f.a["slide-rotation-interval"]),P=parseInt(f.a["total-rotations"]),Q=parseFloat(f.a["total-rotation-interval-percentage"]),Z=2*Q,S=Z+I*Q,k=S-Z,L=function(e){var t=e.scrollYPercentage,n=t/100*360,a="slides"===e.slidesOrPlanet;return t<Z?y-n*(a?1:w)*(P/w):t>Z&&t<S?y-(a?2*N:720):t>S?y-(n*(a?1:w)-k*(a?1:w)/100*360)*(P/w):void 0},X=(n(102),function(){return getComputedStyle(document.documentElement).getPropertyValue("--title")}),B=function(e){return document.documentElement.style.setProperty("--title",'"'.concat(e,'"'))},R=function(e){var t=e.scrollYPercentage,n=Object(s.useRef)(),a=L({scrollYPercentage:t,slidesOrPlanet:"planet"})+10;return a>0?"About"!==X()&&B("About"):a>-360?"Languages"!==X()&&B("Languages"):a>-720?"Projects"!==X()&&B("Projects"):a>-1080&&"Contact"!==X()&&B("Contact"),Object(h.jsx)("div",{className:"Earth__Extra-Terrestrials",children:Object(h.jsx)(g,{planetClassname:"Planet--Extra-Terrestrials"+(Math.abs(Math.floor(a/180))%2===1?" Planet--Extra-Terrestrials--Dropped":""),sphereProps:{style:{transform:"rotateY(".concat(a,"deg)")}},children:Object(h.jsx)("div",{className:"Island Island--Rocket",children:Array(parseInt(f.a["rocket-layers"])).fill("").map((function(e,t){var a=t===Math.ceil(parseInt(f.a["rocket-layers"])/2);return Object(h.jsx)("div",{className:"Rocket",children:Object(h.jsxs)("div",{className:"Rocket__Inner",ref:n,children:[Object(h.jsx)("div",{className:"Rocket__Body",children:a&&Object(h.jsx)("div",{className:"Rocket__Sail"})}),Object(h.jsx)("div",{className:"Rocket__Fin Rocket__Fin--Left",children:a&&Object(h.jsx)("div",{className:"Rocket__Fin__Sail"})}),Object(h.jsx)("div",{className:"Rocket__Fin Rocket__Fin--Right",children:a&&Object(h.jsx)("div",{className:"Rocket__Fin__Sail"})}),Object(h.jsx)("div",{className:"Rocket__Window Rocket__Window--Major"}),Object(h.jsx)("div",{className:"Rocket__Window Rocket__Window--Minor"}),a&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"Rocket__Exhaust-Flame"}),Object(h.jsx)("div",{className:"Rocket__3D-Sail"})]})]})})}))})})})},T=(n(103),["UK","JP"]),Y=function(){return Object(h.jsx)("div",{className:"Earth__Flags",children:T.map((function(e){return Object(h.jsx)(g,{planetClassname:"Planet--Flag Planet--Flag--"+e,children:Object(h.jsx)("div",{className:"Island landmark",children:Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"Flag__Container",children:[Object(h.jsx)("div",{className:"Flag__Pole"}),Object(h.jsx)("div",{className:"Flag"})]})})})})}))})},F=(n(104),function(e){var t=e.scrollYPercentage;return Object(h.jsxs)("div",{className:"Earth",children:[Object(h.jsx)("div",{className:"Earth__Earth-Container",children:Object(h.jsx)(g,{planetClassname:"Planet--Earth",children:Object.keys(x.earth.continents).map((function(e){return Object(h.jsx)("div",{className:"Island"+" Island--".concat(e),children:Array(parseInt(x.earth.continents[e].layers)-1).fill("").map((function(t,n){var a;return Object(h.jsx)("div",{className:"Plate",children:Object(h.jsx)("div",{className:"surface",children:Array(parseInt((null===(a=x.earth.continents[e])||void 0===a?void 0:a.components)||1)).fill("").map((function(e,t){return Object(h.jsx)("div",{className:"Land"},t)}))})},n)}))},e)}))})}),Object(h.jsx)(Y,{}),Object(h.jsx)(E,{}),Object(h.jsx)(R,{scrollYPercentage:t})]})}),z=(n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(105),function(e){var t=e.description,n=e.title;e.technologies;return Object(h.jsxs)("div",{className:"Carousel__Project",children:[Object(h.jsx)("h2",{children:n}),Object(h.jsx)("p",{children:t})]})}),J=n.p+"static/media/computer.47df44d0.png",M=n.p+"static/media/logo__project__fruity.55b85e6e.png",q=n.p+"static/media/logo__project__liberty.a947ed7d.png",H=n.p+"static/media/logo__project__portfolio-site.775287c5.png",G=n.p+"static/media/logo__project__zenport.3d9974e1.png",U=n.p+"static/media/mail.52b1590f.png",V=n(66),W=n(139),_=n(140),K=(n(115),parseInt(f.a["number-of-projects"])),D=parseInt(f.a["number-of-slides"]),$=parseFloat(f.a["total-rotation-interval-percentage"]),ee=2*$,te=ee+K*$,ne=function(e){var t=e.scrollYPercentage,n=L({scrollYPercentage:t,slidesOrPlanet:"slides"}),a=Object(s.useState)(0),r=Object(A.a)(a,2),c=r[0],i=r[1],o=Object(s.useState)(!1),l=Object(A.a)(o,2),d=l[0],j=l[1];if(Object(s.useEffect)((function(){d&&setTimeout((function(){return j(!1)}),600)}),[d]),t>ee&&t<te)for(var m=K;m;){var u=K-m;if(t<ee+(u+1)*$){c!==u&&(i(u),j(!0));break}m--}return Object(h.jsx)("div",{className:"Slides",style:{transform:"rotate(".concat(n,"deg)")},children:Array(D).fill("").map((function(e,t){return Object(h.jsx)("div",{className:"Slide",children:0===t?Object(h.jsx)("div",{className:"Slide__Inner Slide__Inner--About",children:Object(h.jsxs)("h4",{children:["Hi, I'm Eliot.",Object(h.jsx)("span",{children:"I'm a fullstack engineer with a focus on JavaScript and the latest trends in tech."}),Object(h.jsx)("span",{children:"You can read about my work on Medium, or check out my most recent projects on Github."})]})}):2===t?Object(h.jsxs)("div",{className:"Slide__Inner Slide__Inner--Projects",children:[Object(h.jsxs)(V.Carousel,{className:"carousel-root--projects carousel-root--projects--blurb",selectedItem:c,showThumbs:!1,showArrows:!1,showStatus:!1,showIndicators:!1,transitionTime:600,children:[Object(h.jsx)(z,{description:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"A SAAS web application serving industry leaders bespoke supply chain management solutions."}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://zenport.io/",target:"_blank",children:"zenport.io"})]}),technologies:["typescript","flowtype","apollo","graphql","react"],title:"Zenport"}),Object(h.jsx)(z,{description:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"A website serving as a portal to a business-facing online 3D exhibition MMO game."}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://www.liberty-hjc.com/",target:"_blank",children:"liberty-hjc.com"})]}),technologies:["mongo","node","express","react"],title:"Liberty"}),Object(h.jsx)(z,{description:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"An intelligent assistant for managing your social media presence."}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://snai.site/",target:"_blank",children:"snai.site"})]}),technologies:["t3"],title:"Snai"}),Object(h.jsx)(z,{description:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"A mobile based full-stack application with an inhouse booking system alongside real time video and text chat for fitness."}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://github.com/skilltrain/skilltrain-app",target:"_blank",children:"github.com/skilltrain/skilltrain-app"})]}),technologies:["aws","mongo","dart","flutter","react"],title:"SkillTrain"}),Object(h.jsx)(z,{description:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"A browser based application where users can group up and import a large crate of exotic food to split with other locals who want a piece of the action."}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://github.com/Athelian/fruity",target:"_blank",children:"github.com/athelian/fruity"})]}),technologies:["node","express","react"],title:"Fruity"}),Object(h.jsx)(z,{description:"The website you are looking at, created with 3d CSS and powered by SASS",technologies:["react","sass"],title:"This Site"})]}),Object(h.jsx)("img",{className:"computer",src:J}),Object(h.jsxs)("div",{className:"computer__projects",children:[Object(h.jsxs)("div",{className:"noise",children:[Object(h.jsx)("div",{className:"noisy",style:d?{}:{visibility:"hidden"}}),Object(h.jsx)("svg",{children:Object(h.jsxs)("filter",{id:"noise",children:[Object(h.jsx)("feTurbulence",{id:"turbulence",children:Object(h.jsx)("animate",{attributeName:"baseFrequency",dur:"50s",values:"0.9 0.9;0.8 0.8; 0.9 0.9",repeatCount:"indefinite"})}),Object(h.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"60"})]})})]}),Object(h.jsx)("div",{className:"items",style:d?{display:"none"}:{},children:Object(h.jsxs)(V.Carousel,{className:"carousel-root--projects carousel-root--projects--logo",selectedItem:c,showThumbs:!1,showArrows:!1,showStatus:!1,showIndicators:!1,transitionTime:600,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"computer__project",src:G})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"computer__project",src:q})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"computer__project",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQEAIAAABfTX3YAAAcEElEQVR4nOzde5SU5YHg/6eq+sJFERQEhFFBQUQwThiVGFDUMT9yEo0ouTjjUZPDL+7ksma9ZFwmms7ouElUNqw52R3HkwjHhDGSaEyyceIlYgjCJG0MEKSJglzD/S7Sl6raAy/RRrqb6u6nuqubz+cPTp/qp6uebqvly/s+7/OW/eIXDz20YUMAACCSdGdPAACguxFYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIivr7AnQXuPGTZ1aWdnZswAgpurquXNrazt7FrSdI1gAAJEJLACAyAQWAEBkAgsAIDKL3Ls5yyQBSpNLlLo3R7AAACITWAAAkQksAIDIBBYAQGQCCwAgMoEFABCZ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+Z9MI0e50XLL9vzNli25S6qr586tPfTe7rN7YH16Q8X+4+5K7S5rtKFDE+/nh+tX5Z8tZLb1H3t7Vn58eDS0cIp6bXj1soaG9Mqyhalm75JZO29feX5oWN3Sd1S8n1sh7/m9r289MTc1jG3tc0NxpX7xi4ce2rChs6dB240bN3VqZWVzn03+J96xMwLg6Pzfu3tzihAAIDKBBQAQmcACAIhMYAEARCawAAAiE1gAAJEJLACAyAQWAEBkAgsAIDKBBQAQmcACAIhMYAEARCawAAAiE1gAAJEJLACAyAQWAEBkAgsAILKyzp4AxTVu3NSplZWdPQsAOLY4ggUAEJnAAgCITGABAEQmsAAAIrPIvcurrp47t7a2s2cBALzLESwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMj+XwAAAP//SjmtYPU8i2MAAAAASUVORK5CYII="})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"computer__project",src:M})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"computer__project",src:H})})]})})]})]}):1==t?Object(h.jsx)("div",{className:"Slide__Inner Slide__Inner--Skills",children:Object(h.jsxs)(W.a,{columns:2,children:[Object(h.jsxs)(W.a.Row,{children:[Object(h.jsx)(W.a.Column,{children:"TypeScript"}),Object(h.jsx)(W.a.Column,{children:Object(h.jsx)(_.a,{disabled:!0,defaultRating:5,maxRating:5,icon:"star"})})]}),Object(h.jsxs)(W.a.Row,{children:[Object(h.jsx)(W.a.Column,{children:"Golang"}),Object(h.jsx)(W.a.Column,{children:Object(h.jsx)(_.a,{disabled:!0,defaultRating:3,maxRating:5,icon:"star"})})]}),Object(h.jsxs)(W.a.Row,{children:[Object(h.jsx)(W.a.Column,{children:"PHP"}),Object(h.jsx)(W.a.Column,{children:Object(h.jsx)(_.a,{disabled:!0,defaultRating:3,maxRating:5,icon:"star"})})]}),Object(h.jsxs)(W.a.Row,{children:[Object(h.jsx)(W.a.Column,{children:"Scala"}),Object(h.jsx)(W.a.Column,{children:Object(h.jsx)(_.a,{disabled:!0,defaultRating:2,maxRating:5,icon:"star"})})]})]})}):Object(h.jsxs)("div",{className:"Slide__Inner Slide__Inner--Contact",children:[Object(h.jsx)("img",{src:U}),Object(h.jsx)("a",{href:"mailto:ejaustinforbes@gmail.com",children:"ejaustinforbes@gmail.com"})]})})}))})},ae=(n(117),function(){return Object(h.jsx)("div",{className:"Stars",children:Array(parseInt(f.a["number-of-stars"])).fill("").map((function(){return Object(h.jsxs)("div",{className:"Star",children:[Object(h.jsx)("div",{className:"Star-Top"}),Object(h.jsx)("div",{className:"Star-Bottom"})]})}))})}),se=(n(118),n(119),n(120),n.p+"static/media/bitmoji.0f436a9e.png"),re=n(138),ce=(n(121),function(e){var t=e.visible;return Object(h.jsxs)("header",{className:t?"":"Header--Hidden",children:[Object(h.jsx)("div",{className:"Header__Name",children:Object(h.jsxs)("h1",{children:[Object(h.jsxs)("h1",{children:["Eliot",Object(h.jsx)(re.a,{alt:"bitmoji",circular:!0,src:se})]}),"Austin-Forbes"]})}),Object(h.jsx)("h3",{className:"Header__Introduction",children:"Fullstack Engineer"})]})});n(125);var ie=function(){var e=Object(s.useState)(0),t=Object(A.a)(e,2),n=t[0],a=t[1];return window.onscroll=function(){var e=document.documentElement,t=document.body,n="scrollTop",s="scrollHeight",r=(e[n]||t[n])/((e[s]||t[s])-e.clientHeight)*100;a(r)},Object(h.jsxs)("div",{className:"Portfolio-Site",children:[Object(h.jsx)(ae,{}),Object(h.jsxs)("div",{className:"Portfolio-Site__Layout",children:[Object(h.jsx)(ce,{visible:!0}),Object(h.jsx)("div",{className:"Portfolio-Site__Left",children:Object(h.jsx)(F,{scrollYPercentage:n})}),Object(h.jsx)("div",{className:"Portfolio-Site__Right",children:Object(h.jsx)(ne,{scrollYPercentage:n})}),Object(h.jsx)(u,{})]})]})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(ie,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={"planet-earth-continents-Africa-layers":"10","planet-earth-continents-Africa-diameter":"24.7619047619","planet-earth-continents-Africa-rotation":"-8","planet-earth-continents-Africa-z-rotation":"14","planet-earth-continents-Africa-position":"10","planet-earth-continents-Europe-layers":"10","planet-earth-continents-Europe-diameter":"20","planet-earth-continents-Europe-rotation":"0","planet-earth-continents-Europe-z-rotation":"10","planet-earth-continents-Europe-position":"520","planet-earth-continents-Europe-components":"8","planet-earth-continents-Europe-landmark":"true","planet-earth-continents-Asia-layers":"10","planet-earth-continents-Asia-diameter":"36.1904761905","planet-earth-continents-Asia-rotation":"-4","planet-earth-continents-Asia-z-rotation":"-45","planet-earth-continents-Asia-position":"1919","planet-earth-continents-Asia-components":"7","planet-earth-continents-America-layers":"10","planet-earth-continents-America-diameter":"39.0476190476","planet-earth-continents-America-rotation":"20","planet-earth-continents-America-z-rotation":"140","planet-earth-continents-America-position":"560","planet-earth-continents-America-components":"4","planet-earth-continents-Australasia-layers":"10","planet-earth-continents-Australasia-diameter":"22.8571428571","planet-earth-continents-Australasia-rotation":"-10","planet-earth-continents-Australasia-z-rotation":"-89","planet-earth-continents-Australasia-position":"1","planet-earth-continents-Australasia-components":"24","planet-earth-clouds-a-center-to-apex":"-95","planet-earth-clouds-a-label":"a","planet-earth-clouds-a-width":"632.15px","planet-earth-clouds-a-height":"271.38px","planet-earth-clouds-b-center-to-apex":"0","planet-earth-clouds-b-label":"b","planet-earth-clouds-b-width":"762.01px","planet-earth-clouds-b-height":"301.12px","planet-earth-clouds-c-center-to-apex":"0","planet-earth-clouds-c-label":"c","planet-earth-clouds-c-width":"737.64px","planet-earth-clouds-c-height":"409.58px","planet-earth-clouds-d-center-to-apex":"0","planet-earth-clouds-d-label":"d","planet-earth-clouds-d-width":"778.11px","planet-earth-clouds-d-height":"406.46px","planet-earth-clouds-e-center-to-apex":"130","planet-earth-clouds-e-label":"e","planet-earth-clouds-e-width":"750.41px","planet-earth-clouds-e-height":"391.78px","cloud-layers":"3","rocket-layers":"8","number-of-projects":"5","number-of-stars":"64","number-of-slides":"4","total-rotations":"8","slide-rotation-interval":"90deg","slide-rotation-interval-percentage":"25","total-rotation-interval":"45deg","total-rotation-interval-percentage":"12.5","starting-rotation":"90deg"}},97:function(e,t,n){},98:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.173ffe17.chunk.js.map