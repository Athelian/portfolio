(this["webpackJsonpportfolio-site2"]=this["webpackJsonpportfolio-site2"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},13:function(e,t,n){e.exports={"planet-earth-continents-Africa-layers":"15","planet-earth-continents-Africa-diameter":"24.7619047619","planet-earth-continents-Africa-rotation":"-8","planet-earth-continents-Africa-z-rotation":"14","planet-earth-continents-Africa-position":"10","planet-earth-continents-Europe-layers":"10","planet-earth-continents-Europe-diameter":"20","planet-earth-continents-Europe-rotation":"0","planet-earth-continents-Europe-z-rotation":"10","planet-earth-continents-Europe-position":"520","planet-earth-continents-Europe-components":"8","planet-earth-continents-Europe-landmark":"true","planet-earth-continents-Asia-layers":"15","planet-earth-continents-Asia-diameter":"36.1904761905","planet-earth-continents-Asia-rotation":"-4","planet-earth-continents-Asia-z-rotation":"-45","planet-earth-continents-Asia-position":"1919","planet-earth-continents-Asia-components":"7","planet-earth-continents-America-layers":"15","planet-earth-continents-America-diameter":"39.0476190476","planet-earth-continents-America-rotation":"20","planet-earth-continents-America-z-rotation":"140","planet-earth-continents-America-position":"560","planet-earth-continents-America-components":"4","planet-earth-continents-Australasia-layers":"15","planet-earth-continents-Australasia-diameter":"22.8571428571","planet-earth-continents-Australasia-rotation":"-10","planet-earth-continents-Australasia-z-rotation":"-89","planet-earth-continents-Australasia-position":"1","planet-earth-continents-Australasia-components":"24","planet-earth-clouds-a-center-to-apex":"-95","planet-earth-clouds-a-label":"a","planet-earth-clouds-a-width":"632.15px","planet-earth-clouds-a-height":"271.38px","planet-earth-clouds-b-center-to-apex":"0","planet-earth-clouds-b-label":"b","planet-earth-clouds-b-width":"762.01px","planet-earth-clouds-b-height":"301.12px","planet-earth-clouds-c-center-to-apex":"0","planet-earth-clouds-c-label":"c","planet-earth-clouds-c-width":"737.64px","planet-earth-clouds-c-height":"409.58px","planet-earth-clouds-d-center-to-apex":"0","planet-earth-clouds-d-label":"d","planet-earth-clouds-d-width":"778.11px","planet-earth-clouds-d-height":"406.46px","planet-earth-clouds-e-center-to-apex":"130","planet-earth-clouds-e-label":"e","planet-earth-clouds-e-width":"750.41px","planet-earth-clouds-e-height":"391.78px","cloud-layers":"3","rocket-layers":"7","number-of-projects":"4","number-of-stars":"64","number-of-slides":"4","slide-rotation-interval":"90deg","starting-rotation":"90deg"}},131:function(e,t,n){},136:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a,s=n(1),c=n.n(s),r=n(35),i=n.n(r),A=(n(113),n(23)),o=n.p+"static/media/github.bcd9bda4.png",l=n.p+"static/media/linkedin.69f2aa5b.png",d=n.p+"static/media/resume.af9c260f.png",j=n.p+"static/media/medium-black.d4869399.png",m=n.p+"static/media/Resume.019d79e5.pdf",u=(n(114),n(0)),h=function(){return Object(u.jsx)("footer",{className:"Links",children:[[o,"https://www.github.com/athelian"],[l,"https://www.linkedin.com/in/eaustinforbes/"],[j,"https://medium.com/@ejaustinforbes"],[d,m,!0]].map((function(e){return Object(u.jsx)("a",{download:"Eliot Austin-Forbes Resume",href:e[1],rel:"noopener noreferrer",target:"_blank",children:Object(u.jsx)("img",{className:"hvr-bob",src:e[0]})})}))})},b=n(53),g=(n(116),function(e){return Object(u.jsx)("div",{className:"Planet "+e.planetClassname,children:Object(u.jsx)("div",Object(b.a)(Object(b.a)({className:"Sphere"},e.sphereProps),{},{children:Object(u.jsx)("div",Object(b.a)(Object(b.a)({className:"Hemisphere"},e.hemisphereProps),{},{children:e.children}))}))})}),p=n(13),f=n.n(p),x=(a=f.a,Object.keys(a).reduce((function(e,t){if(!t.startsWith("planet"))return e;var n=a[t],s=t.split("-"),c=s[1],r=s[2],i=s[3],A=s[4];return e[c]||(e[c]={}),e[c][r]||(e[c][r]={}),e[c][r][i]||(e[c][r][i]={}),e[c][r][i][A]=n,e}),{}));function O(){var e=window,t=e.innerWidth,n=e.innerHeight;return{vmin:Math.min(t,n)}}var v=function(e){var t=e.min,n=e.max;return Math.floor(Math.random()*(n-t+1))+t},C=(n(117),Array(v({min:10,max:20})).fill("").map((function(){var e=v({min:-50,max:50}),t=10*v({min:0,max:36}),n=Object.values(x.earth.clouds).map((function(e){return e.label}));return{randomZ:e,randomY:t,randomCloud:n[v({min:0,max:n.length-1})],randomScale:v({min:21,max:30})}}))),E=function(){var e=function(){var e=Object(s.useState)(O()),t=Object(A.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){a(O())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.vmin,n=Object(s.useState)(100),a=Object(A.a)(n,2),c=a[0],r=a[1],i=720-t,o=Math.floor((i-i%10)/20);return o>20&&(o=20),o<0&&(o=0),Object(s.useEffect)((function(){var e=function(){var e=Math.round(100*window.devicePixelRatio);r(e)};return window.addEventListener("resize",(function(){return e()})),function(){return window.removeEventListener("resize",e)}}),[]),Object(u.jsx)("div",{className:"Earth__Clouds",style:c>175?{display:"none"}:{},children:C.map((function(e){return Object(u.jsx)(g,{planetClassname:"Planet--Clouds Planet--Clouds--y-rotation--".concat(e.randomY),hemisphereProps:{style:{transform:"rotateY(".concat(e.randomY,"deg) rotateZ(").concat(e.randomZ,"deg)")}},children:Object(u.jsx)("div",{className:"Island Cloud Cloud--".concat(e.randomCloud," Cloud--scale-").concat(e.randomScale-o),children:Array(parseInt(f.a["cloud-layers"])+1).fill("").map((function(e,t){return Object(u.jsx)("div",{},t)}))})})}))})},w="16",y=parseInt(f.a["number-of-projects"]),I=parseInt(f.a["number-of-slides"]),N=parseInt(f.a["starting-rotation"]),Q=parseInt(f.a["slide-rotation-interval"]),S=w*Q,k=S+y*Q*8,Z=k-S,P=function(e){var t=e.scrollY,n="slides"===e.slidesOrPlanet;return t<S?N-t/(w/(n?1:I)):t>S&&t<k?N-(n?Q:360):t>k?N-(t-Z)/(w/(n?1:I)):void 0},R=(n(118),function(){return getComputedStyle(document.documentElement).getPropertyValue("--title")}),L=function(e){return document.documentElement.style.setProperty("--title",'"'.concat(e,'"'))},X=function(e){var t=e.scrollY,n=Object(s.useRef)(),a=P({scrollY:t,slidesOrPlanet:"planet"})+10;return a>0?"About"!==R()&&L("About"):a>-360?"Projects"!==R()&&L("Projects"):a>-720?"Skills"!==R()&&L("Skills"):a>-1080&&"Contact"!==R()&&L("Contact"),Object(u.jsx)("div",{className:"Earth__Extra-Terrestrials",children:Object(u.jsx)(g,{planetClassname:"Planet--Extra-Terrestrials"+(Math.abs(Math.floor(a/180))%2===1?" Planet--Extra-Terrestrials--Dropped":""),sphereProps:{style:{transform:"rotateY(".concat(a,"deg)")}},children:Object(u.jsx)("div",{className:"Island Island--Rocket",children:Array(parseInt(f.a["rocket-layers"])).fill("").map((function(e,t){var a=t===Math.ceil(parseInt(f.a["rocket-layers"])/2);return Object(u.jsx)("div",{className:"Rocket",children:Object(u.jsxs)("div",{className:"Rocket__Inner",ref:n,children:[Object(u.jsx)("div",{className:"Rocket__Body",children:a&&Object(u.jsx)("div",{className:"Rocket__Sail"})}),Object(u.jsx)("div",{className:"Rocket__Fin Rocket__Fin--Left",children:a&&Object(u.jsx)("div",{className:"Rocket__Fin__Sail"})}),Object(u.jsx)("div",{className:"Rocket__Fin Rocket__Fin--Right",children:a&&Object(u.jsx)("div",{className:"Rocket__Fin__Sail"})}),Object(u.jsx)("div",{className:"Rocket__Window Rocket__Window--Major"}),Object(u.jsx)("div",{className:"Rocket__Window Rocket__Window--Minor"}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"Rocket__Exhaust-Flame"}),Object(u.jsx)("div",{className:"Rocket__3D-Sail"})]})]})})}))})})})},B=(n(119),["UK","JP"]),Y=function(){return Object(u.jsx)("div",{className:"Earth__Flags",children:B.map((function(e){return Object(u.jsx)(g,{planetClassname:"Planet--Flag Planet--Flag--"+e,children:Object(u.jsx)("div",{className:"Island landmark",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"Flag__Container",children:[Object(u.jsx)("div",{className:"Flag__Pole"}),Object(u.jsx)("div",{className:"Flag"})]})})})})}))})},T=(n(120),function(e){var t=e.scrollY;return Object(u.jsxs)("div",{className:"Earth",children:[Object(u.jsx)("div",{className:"Earth__Earth-Container",children:Object(u.jsx)(g,{planetClassname:"Planet--Earth",children:Object.keys(x.earth.continents).map((function(e){return Object(u.jsx)("div",{className:"Island"+" Island--".concat(e),children:Array(parseInt(x.earth.continents[e].layers)-1).fill("").map((function(t,n){var a;return Object(u.jsx)("div",{className:"Plate",children:Object(u.jsx)("div",{className:"surface",children:Array(parseInt((null===(a=x.earth.continents[e])||void 0===a?void 0:a.components)||1)).fill("").map((function(e,t){return Object(u.jsx)("div",{className:"Land"},t)}))})},n)}))},e)}))})}),Object(u.jsx)(Y,{}),Object(u.jsx)(E,{}),Object(u.jsx)(X,{scrollY:t})]})}),F=n.p+"static/media/logo__technology__aws.03e5ca21.png",z=n.p+"static/media/logo__technology__dart.f00251a3.png",M=n.p+"static/media/logo__technology__express.910adc86.png",_=n.p+"static/media/logo__technology__flutter.9478f9e3.png",J=n.p+"static/media/logo__technology__mongo.31728036.png",q=n.p+"static/media/logo__technology__node.654603e9.png",H=n.p+"static/media/logo__technology__react.f64a6ebf.png",G=n.p+"static/media/logo__technology__sass.6251c408.png",U=n.p+"static/media/logo__technology__ubuntu.6756ad2d.png",V=(n(121),function(e){switch(e){case"aws":return F;case"dart":return z;case"express":return M;case"flutter":return _;case"mongo":return J;case"node":return q;case"react":return H;case"sass":return G;case"ubuntu":return U}}),W=function(e){var t=e.description,n=e.title,a=e.technologies;return Object(u.jsxs)("div",{className:"Carousel__Project",children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("div",{className:"Carousel__Project__Technologies",children:a.map((function(e){return Object(u.jsx)("img",{src:V(e)})}))}),Object(u.jsx)("p",{children:t})]})},K=n.p+"static/media/computer.47df44d0.png",D=n.p+"static/media/mail.52b1590f.png",$=n.p+"static/media/logo__project__fruity.55b85e6e.png",ee=n.p+"static/media/logo__project__liberty.a947ed7d.png",te=n.p+"static/media/logo__project__portfolio-site.775287c5.png",ne=n(79),ae=n(157),se=n(160),ce=n(161),re=(n(131),parseInt(f.a["slide-rotation-interval"])),ie=parseInt(f.a["number-of-projects"]),Ae=parseInt(f.a["number-of-slides"]),oe="16"*re,le=oe+"16"*(ie*re),de=function(e){var t=e.scrollY,n=P({scrollY:t,slidesOrPlanet:"slides"}),a=Object(s.useState)(0),c=Object(A.a)(a,2),r=c[0],i=c[1],o=Object(s.useState)(!1),l=Object(A.a)(o,2),d=l[0],j=l[1];if(Object(s.useEffect)((function(){d&&setTimeout((function(){return j(!1)}),600)}),[d]),t>oe&&t<le)for(var m=ie;m;){var h=ie-m;if(t<oe+(h+1)*re*8){r!==h&&(i(h),j(!0));break}m--}return Object(u.jsx)("div",{className:"Slides",style:{transform:"rotate(".concat(n,"deg)")},children:Array(Ae).fill("").map((function(e,t){return Object(u.jsx)("div",{className:"Slide",children:0===t?Object(u.jsx)("div",{className:"Slide__Inner Slide__Inner--About",children:Object(u.jsxs)("h4",{children:["Hi, I'm Eliot.",Object(u.jsxs)("span",{children:["I'm a fullstack engineer with a focus on"," ",Object(u.jsx)(ae.a,{basic:!0,content:Object(u.jsx)("h4",{children:"(M)ongo (E)xpress (R)eact (N)ode"}),inverted:!0,on:"click",style:{backgroundColor:"rgba(0,0,0,0.2)"},trigger:Object(u.jsx)("span",{className:"MERN",children:"MERN"}),position:"bottom right",offset:[600,-10]})," ","stacks and the latest trends in tech."]}),Object(u.jsx)("span",{children:"You can read about my work on Medium, or check out my most recent projects on Github."})]})}):1===t?Object(u.jsxs)("div",{className:"Slide__Inner",style:{overflowY:"scroll"},children:[Object(u.jsxs)(ne.Carousel,{className:"carousel-root--projects carousel-root--projects--blurb",selectedItem:r,showThumbs:!1,showArrows:!1,showStatus:!1,showIndicators:!1,transitionTime:600,children:[Object(u.jsx)(W,{description:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"A website serving as a portal to a business-facing online 3D exhibition MMO game, complete with various social media capabilities, customer service integration, game file editor, and more. Sole responsibility for the entire site/stack. Javascript, react, node, html, css, jest, joi, linux (ubuntu dist), ssh (key management), mongo, ssl, git, npm. Highlights include: A chat system with email notifications and file embedding. A dynamic svg editor for game admins to manipulate an in-game map in real-time. A news feed with a WYSIWYG text editor including locale support etc."}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"https://www.liberty-hjc.com/",target:"_blank",children:"liberty-hjc.com"})]}),technologies:["ubuntu","mongo","node","express","react"],title:"Liberty"}),Object(u.jsx)(W,{description:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"A mobile based full-stack application with an inhouse booking system alongside real time video and text chat for fitness. In-depth authentication system in Dart with connection to AWS Cognito via Amplify. Completed integration of a payment API (Stripe) with full signups, payments, and payouts deployed to AWS. Payments through Android native pay, iOS native pay, or an in-app window."}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"https://github.com/skilltrain/skilltrain-app",target:"_blank",children:"github.com/skilltrain/skilltrain-app"})]}),technologies:["aws","mongo","dart","flutter","react"],title:"SkillTrain"}),Object(u.jsx)(W,{description:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"A browser based application where users can group up and import a large crate of exotic food to split with other locals who want a piece of the action."}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"https://github.com/Athelian/fruity",target:"_blank",children:"github.com/athelian/fruity"})]}),technologies:["node","express","react"],title:"Fruity"}),Object(u.jsx)(W,{description:"The website you are looking at, created with 3d CSS and powered by SASS",technologies:["react","sass"],title:"This Site"})]}),Object(u.jsx)("img",{className:"computer",src:K}),Object(u.jsxs)("div",{className:"computer__projects",children:[Object(u.jsxs)("div",{className:"noise",children:[Object(u.jsx)("div",{className:"noisy",style:d?{}:{visibility:"hidden"}}),Object(u.jsx)("svg",{children:Object(u.jsxs)("filter",{id:"noise",children:[Object(u.jsx)("feTurbulence",{id:"turbulence",children:Object(u.jsx)("animate",{attributeName:"baseFrequency",dur:"50s",values:"0.9 0.9;0.8 0.8; 0.9 0.9",repeatCount:"indefinite"})}),Object(u.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"60"})]})})]}),Object(u.jsx)("div",{className:"items",style:d?{display:"none"}:{},children:Object(u.jsxs)(ne.Carousel,{className:"carousel-root--projects carousel-root--projects--logo",selectedItem:r,showThumbs:!1,showArrows:!1,showStatus:!1,showIndicators:!1,transitionTime:600,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"computer__project",src:ee})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"computer__project",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQEAIAAABfTX3YAAAcEElEQVR4nOzde5SU5YHg/6eq+sJFERQEhFFBQUQwThiVGFDUMT9yEo0ouTjjUZPDL+7ksma9ZFwmms7ouElUNqw52R3HkwjHhDGSaEyyceIlYgjCJG0MEKSJglzD/S7Sl6raAy/RRrqb6u6nuqubz+cPTp/qp6uebqvly/s+7/OW/eIXDz20YUMAACCSdGdPAACguxFYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIivr7AnQXuPGTZ1aWdnZswAgpurquXNrazt7FrSdI1gAAJEJLACAyAQWAEBkAgsAIDKL3Ls5yyQBSpNLlLo3R7AAACITWAAAkQksAIDIBBYAQGQCCwAgMoEFABCZ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+Z9MI0e50XLL9vzNli25S6qr586tPfTe7rN7YH16Q8X+4+5K7S5rtKFDE+/nh+tX5Z8tZLb1H3t7Vn58eDS0cIp6bXj1soaG9Mqyhalm75JZO29feX5oWN3Sd1S8n1sh7/m9r289MTc1jG3tc0NxpX7xi4ce2rChs6dB240bN3VqZWVzn03+J96xMwLg6Pzfu3tzihAAIDKBBQAQmcACAIhMYAEARCawAAAiE1gAAJEJLACAyAQWAEBkAgsAIDKBBQAQmcACAIhMYAEARCawAAAiE1gAAJEJLACAyAQWAEBkAgsAILKyzp4AxTVu3NSplZWdPQsAOLY4ggUAEJnAAgCITGABAEQmsAAAIrPIvcurrp47t7a2s2cBALzLESwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMgEFgBAZAILACAygQUAEJnAAgCITGABAEQmsAAAIhNYAACRCSwAgMj+XwAAAP//SjmtYPU8i2MAAAAASUVORK5CYII="})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"computer__project",src:$})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"computer__project",src:te})})]})})]})]}):2==t?Object(u.jsx)("div",{className:"Slide__Inner Slide__Inner--Skills",children:Object(u.jsxs)(se.a,{columns:2,children:[Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"HTML"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:5,maxRating:5,icon:"star"})})]}),Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"CSS"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:5,maxRating:5,icon:"star"})})]}),Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"SASS"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:3,maxRating:5,icon:"star"})})]}),Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"JavaScript"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:5,maxRating:5,icon:"star"})})]}),Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"React"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:4,maxRating:5,icon:"star"})})]}),Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"Linux"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:3,maxRating:5,icon:"star"})})]}),Object(u.jsxs)(se.a.Row,{children:[Object(u.jsx)(se.a.Column,{children:"Mongo"}),Object(u.jsx)(se.a.Column,{children:Object(u.jsx)(ce.a,{disabled:!0,defaultRating:3,maxRating:5,icon:"star"})})]})]})}):Object(u.jsxs)("div",{className:"Slide__Inner Slide__Inner--Contact",children:[Object(u.jsx)("img",{src:D}),Object(u.jsx)("a",{href:"mailto:ejaustinforbes@gmail.com",children:"ejaustinforbes@gmail.com"})]})})}))})},je=(n(136),function(){return Object(u.jsx)("div",{className:"Stars",children:Array(parseInt(f.a["number-of-stars"])).fill("").map((function(){return Object(u.jsxs)("div",{className:"Star",children:[Object(u.jsx)("div",{className:"Star-Top"}),Object(u.jsx)("div",{className:"Star-Bottom"})]})}))})}),me=(n(137),n(138),n(139),n.p+"static/media/bitmoji.0f436a9e.png"),ue=n(158),he=(n(140),function(e){var t=e.visible;return Object(u.jsxs)("header",{className:t?"":"Header--Hidden",children:[Object(u.jsx)("div",{className:"Header__Name",children:Object(u.jsxs)("h1",{children:[Object(u.jsxs)("h1",{children:["Eliot",Object(u.jsx)(ue.a,{alt:"bitmoji",circular:!0,src:me})]}),"Austin-Forbes"]})}),Object(u.jsx)("h3",{className:"Header__Introduction",children:"Fullstack Engineer"})]})});n(141);var be=function(){var e=Object(s.useState)(0),t=Object(A.a)(e,2),n=t[0],a=t[1];return window.onscroll=function(){return a(window.scrollY)},Object(u.jsxs)("div",{className:"Portfolio-Site",children:[Object(u.jsx)(je,{}),Object(u.jsxs)("div",{className:"Portfolio-Site__Layout",children:[Object(u.jsx)(he,{visible:!0}),Object(u.jsx)("div",{className:"Portfolio-Site__Left",children:Object(u.jsx)(T,{scrollY:n})}),Object(u.jsx)("div",{className:"Portfolio-Site__Right",children:Object(u.jsx)(de,{scrollY:n})}),Object(u.jsx)(h,{})]})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(be,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.bf1107b8.chunk.js.map