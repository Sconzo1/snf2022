(this.webpackJsonpsanofi_genzyme=this.webpackJsonpsanofi_genzyme||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(38),r=n.n(o),c=n(19),s=n(5),l=n(104),d=n(166),b=n(154),j=n(163),h=n(167),g=n(162),u=n(161),f=n(168),m=n(169),x=n(157),O=n(21),p=n(78),v=(n(93),n.p+"static/media/logo.424430cb.png"),y=n.p+"static/media/city-min.a9ac2107.png",w=n.p+"static/media/sky.0d71127e.png",k=n.p+"static/media/sun.7222b24c.png",S=n.p+"static/media/clouds.386974d2.png",I=n(81),z=n.n(I),R=n(100),C=n(105),T=n(158),W=n(151),F=n(2),L=["children"],M=i.forwardRef((function(e,t){var n=e.children,i=Object(R.a)(e,L);return Object(F.jsxs)("svg",Object(c.a)(Object(c.a)({width:"300",height:"50"},i),{},{ref:t,children:[Object(F.jsx)("polygon",{points:"0,50 0,0 300,0 300,50",className:"bg"}),Object(F.jsx)("polygon",{points:"0,52 0,0 302,0 302,52",className:"borderEffect"}),Object(F.jsx)("foreignObject",{x:"0",y:"0",width:"300",height:"50",children:Object(F.jsx)("div",{className:"content",children:n})})]}))})),q="#ff4edd",E="#C50099",_=Object(W.a)(M)((function(e){e.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat(E,";\n  --hover-color: ").concat(E,";\n  --active-color: ").concat(E,";\n\n  & polygon {\n    fill: #C50099;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: transparent;\n    stroke-width: 3;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: #C50099;\n  }\n\n  & .borderEffect {\n    stroke: ").concat(q,";\n    stroke-width: 3;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n    -webkit-filter: blur(6px);\n    -moz-filter: blur(6px);\n    -o-filter: blur(6px);\n    -ms-filter: blur(6px);\n    filter: blur(6px);\n  }\n\n  &:hover,\n  &.").concat(C.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(C.a.focusVisible," {\n    outline: 0px solid ").concat(q,";\n    outline-offset: 0px;\n  }\n\n  &.").concat(C.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-size: 1.375rem;\n      font-family: Montserrat, sans-serif;\n      font-weight: 400;\n      line-height: 1.3;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      -moz-user-select: -moz-none;\n      -o-user-select: none;\n      -khtml-user-select: none;\n      -webkit-user-select: none;\n       user-select: none;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),N=i.forwardRef((function(e,t){return Object(F.jsx)(T.a,Object(c.a)(Object(c.a)({},e),{},{component:_,ref:t}))}));function P(e){var t=e.text,n=e.onClick;return Object(F.jsx)(N,{onClick:n,children:t})}var A=Object(l.a)({});A=Object(d.a)(A);var B=function(e){var t=e.date,n=e.activity,i=Object(b.a)(A.breakpoints.down("md"));return Object(F.jsxs)(j.a,{container:!0,direction:"row",justifyContent:"space-between",mt:1,alignItems:"center",children:[Object(F.jsxs)(j.a,{item:!0,xs:3,md:3,lg:2,children:[Object(F.jsxs)(h.a,{display:"inline",variant:i?"h2":"h1",sx:{fontFamily:"digital-clock-font",color:"#fff"},children:[t," /"]}),Object(F.jsx)(h.a,{display:"inline",variant:i?"h4":"h3",sx:{fontFamily:"digital-clock-font",color:"#fff"},children:"01"})]}),Object(F.jsx)(j.a,{item:!0,xs:8,md:9,children:Object(F.jsx)(h.a,{variant:i?"body1":"h5",sx:{color:"white",fontFamily:"'Montserrat', sans-serif",fontWeight:300},children:n})})]})},V=function(){var e=Object(b.a)(A.breakpoints.down("md")),t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(O.useSpring)({from:{height:e?"auto":"50vh"},to:{height:e?"auto":"20vh"},delay:2e3,config:{duration:1500}}),l=Object(O.useSpring)({from:{opacity:0},to:{opacity:1},delay:e?0:1e3,config:{duration:e?1500:1e3}}),d=Object(O.useSpring)({from:{top:e?100:-50},to:{top:e?120:20},config:{duration:2e3}}),j=Object(O.useSpring)({from:{backgroundPosition:"100vw top"},to:{backgroundPosition:"-100vw top"},loop:!0,config:{duration:6e4}}),h=Object(O.useSpring)({from:{opacity:0},to:{opacity:2},delay:e?1500:3500,config:{duration:250}});return Object(F.jsx)(g.a,{theme:A,children:Object(F.jsxs)("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},onClick:function(){a&&o(!1)},children:[Object(F.jsx)("div",{style:{backgroundImage:"url(".concat(y,")"),backgroundPosition:"center top",backgroundRepeat:"repeat-x",position:"absolute",width:"100%",height:"100%",zIndex:4,left:0,right:0,marginRight:"auto",marginLeft:"auto"}}),Object(F.jsx)(O.animated.img,{src:k,style:Object(c.a)({position:"absolute",zIndex:2,overflow:"hidden",width:e?"100vw":"auto",left:0,right:0,marginRight:"auto",marginLeft:"auto"},d)}),Object(F.jsx)("div",{style:{backgroundImage:"url(".concat(w,")"),backgroundPosition:"center top",backgroundRepeat:"repeat-x",position:"absolute",left:0,right:0,width:"100%",height:"100%",zIndex:1}}),Object(F.jsx)(O.animated.div,{style:Object(c.a)({backgroundImage:"url(".concat(S,")"),backgroundRepeat:"no-repeat",position:"absolute",left:0,right:0,width:"100%",height:"100%",zIndex:3},j)}),Object(F.jsxs)("div",{style:{position:"absolute",width:"100%",height:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto",zIndex:5,textAlign:"center"},children:[Object(F.jsx)(O.animated.img,{src:v,alt:"logo_1",style:Object(c.a)(Object(c.a)({overflow:"hidden",width:e?"80vw":"auto"},r),l)}),Object(F.jsx)(O.animated.div,{style:Object(c.a)({height:e?"51vw":"55vh",width:e?"90vw":"97vh",marginTop:e?"15vh":24,marginRight:"auto",marginLeft:"auto",background:"#2c2c2c",padding:8,borderWidth:"8px",borderStyle:"solid",borderImage:"linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)",borderImageSlice:1,visibility:a?"hidden":"visible"},h),children:Object(F.jsx)("iframe",{id:"gyq73m",onLoad:"fc_load_iframe(this)",width:"976",height:"549",style:{border:"none"},allow:"autoplay; fullscreen",allowFullScreen:!0})}),Object(F.jsx)("div",{style:{height:24}}),Object(F.jsx)("div",{style:{visibility:a?"hidden":"visible"},children:Object(F.jsx)(P,{text:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443",onClick:function(){return o(!0)}})})]}),Object(F.jsx)(u.a,{in:a,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:Object(F.jsxs)("div",{style:{width:"100%",height:"75%",background:"linear-gradient(90deg, rgba(49,29,107,0.8) 0%, rgba(49,29,107,1) 50%, rgba(49,29,107,0.8) 100%)",position:"absolute",bottom:0,zIndex:10,opacity:.9,display:"flex",alignItems:"start",overflowY:"scroll"},className:"schedule",children:[Object(F.jsx)(f.a,{onClick:function(){return o(!1)},sx:{position:"absolute",top:"2%",right:"4%",color:"white",height:e?32:64,width:e?32:64},children:Object(F.jsx)(z.a,{sx:{height:e?32:64,width:e?32:64}})}),Object(F.jsxs)(m.a,{maxWidth:"lg",children:[Object(F.jsx)("div",{style:{height:e?48:0}}),Object(F.jsxs)(x.a,{alignItems:"center",children:[Object(F.jsx)(B,{date:"24",activity:"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0446\u0438\u043a\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0432\u0435\u0449\u0430\u043d\u0438\u044f (2-3 \u0447\u0430\u0441\u0430 \u044d\u0444\u0438\u0440\u0430), \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e"}),Object(F.jsx)(B,{date:"25",activity:"\u0421\u0435\u0441\u0441\u0438\u0438 \u0443 \u0444\u0440\u0430\u043d\u0447\u0430\u0439\u0437\u043e\u0432 \u0441 9:00 \u0434\u043e 14:00 \u0432 \u0437\u0443\u043c\u0435"}),Object(F.jsx)(B,{date:"26",activity:"\u0421\u0435\u0441\u0441\u0438\u0438 \u0443 \u0444\u0440\u0430\u043d\u0447\u0430\u0439\u0437\u043e\u0432 \u0441 9:00 \u0434\u043e 14:00 \u0432 \u0437\u0443\u043c\u0435"}),Object(F.jsx)(B,{date:"27",activity:"\u0421\u0435\u0441\u0441\u0438\u0438 \u0443 \u0444\u0440\u0430\u043d\u0447\u0430\u0439\u0437\u043e\u0432 \u0441 9:00 \u0434\u043e 14:00 \u0432 \u0437\u0443\u043c\u0435"}),Object(F.jsx)(B,{date:"28",activity:"\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0446\u0438\u043a\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0432\u0435\u0449\u0430\u043d\u0438\u044f \u0441 \u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u0438 \u0438\u0433\u0440\u043e\u0439 (1-2 \u0447\u0430\u0441\u0430 \u044d\u0444\u0438\u0440\u0430)"})]})]})]})})]})})},D=n(160),H=n(170),J=n(164),G=n(165),X=n.p+"static/media/bg_questions.2f51ac52.jpg",Y=n(9),K=n(171),Q=Object(W.a)((function(e){return Object(F.jsx)(D.a,Object(c.a)({size:"small"},e))}))((function(){return{"& > span":{color:"rgba(152,152,182,0.7)"},"&.Mui-checked > span":{color:"rgba(255,0,200,0.7)"}}})),U=Object(W.a)((function(e){return Object(F.jsx)(H.a,Object(c.a)(Object(c.a)({},e),{},{control:Object(F.jsx)(Q,{})}))}))((function(e){var t=e.theme;return{paddingRight:t.spacing(1),paddingLeft:t.spacing(1),paddingTop:t.spacing(.5),paddingBottom:t.spacing(.5),background:"rgba(29,29,47,0.7)",borderWidth:1,borderRadius:t.shape.borderRadius,borderStyle:"solid",borderColor:"rgb(62,59,86)","&> span":{fontWeight:500,fontSize:14,color:"white"}}})),Z=Object(W.a)(U)((function(){return{background:"rgba(47,47,77,0.7)","&.MuiButton-outlined":{borderColor:"rgb(110,104,153)"}}})),$=Object(W.a)(J.a)((function(e){var t=e.theme;return{paddingRight:t.spacing(5),paddingLeft:t.spacing(5),textTransform:"initial",background:"#C50099","&:hover":{background:"#a60080"},"&:active":{background:"#860068"}}})),ee=[{num:1,question:"\u0413\u0434\u0435 \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e?",answers:["\u041d\u0430 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438","\u0412 \u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 \u0437\u043d\u0430\u043d\u0438\u0439 \u0432\u0441\u0435\u0433\u043e \u043c\u0438\u0440\u0430 \u0421\u0430\u043d\u043e\u0444\u0438","\u041f\u0440\u043e\u0441\u0442\u043e \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0443 \u0421\u0438 \u0414\u0436\u0435\u044f"]},{num:2,question:"\u041d\u0430 \u0447\u0435\u043c \u0432\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u0441\u044c?",answers:["\u0421\u0432\u0435\u0440\u0445\u0437\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0435\u0442\u0430 \u0441\u043a\u043e\u0440\u043e\u0439 \u043f\u043e\u043c\u043e\u0449\u0438. \u041f\u0440\u043e\u0442\u0438\u0432\u043e\u0437\u0430\u043a\u043e\u043d\u043d\u043e, \u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e","\u0412\u0410\u0417 2111. \u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c, \u043d\u043e \u0441\u043e\u043c\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e","\u041f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438 \u043a\u0430\u0440\u044b"]},{num:3,question:"\u041a\u0430\u043a\u043e\u0439 \u0441\u0432\u0435\u0440\u0445\u0440\u0435\u0436\u0438\u043c \u0432\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0435?",answers:["\u0420\u0435\u0436\u0438\u043c \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u041d\u0438\u043a\u0442\u043e \u043d\u0430\u0441 \u043d\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u0442, \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u0441\u0430\u043c\u0438\u043c \u043d\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u0442\u044c\u0441\u044f","\u0420\u0435\u0436\u0438\u043c \u0431\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f","\u0420\u0435\u0436\u0438\u043c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0440\u0430\u043e\u043a\u0435"]},{num:4,question:"\u0412\u044b \u043f\u0440\u0438\u0437\u0435\u043c\u043b\u0438\u043b\u0438\u0441\u044c \u043d\u0430 \u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u043e\u0439 \u043f\u043b\u0430\u043d\u0435\u0442\u0435. \u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c?",answers:["\u0411\u0435\u0437 \u0440\u0430\u0437\u0434\u0443\u043c\u0438\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u043e\u0438\u0441\u043a\u0438 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430","\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u043e\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u0440\u0430\u0437\u0432\u0435\u0434\u0430\u0442\u044c \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0438 \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u0443\u0442\u044c \u043d\u043e\u0447\u044c\u044e","\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0438 \u0431\u0435\u0437 \u0440\u0430\u0437\u0432\u0435\u0434\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0434\u043d\u0451\u043c \u043d\u0430 \u043f\u043e\u0438\u0441\u043a\u0438"]},{num:5,question:"\u041a\u0442\u043e \u0432\u043e\u0437\u0433\u043b\u0430\u0432\u0438\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e?",answers:["\u041b\u0443\u043d\u0442\u0438\u043a","\u0415\u043b\u0435\u043d\u0430 \u041c\u0430\u043b\u044b\u0448\u0435\u0432\u0430","\u0414\u044d\u0432\u0438\u0434 \u0425\u0443\u0433\u0430\u0437\u044f\u043d"]}],te=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(i.useState)(!1),c=Object(s.a)(r,2),l=c[0],d=c[1],g=parseInt(e.num),u=Object(Y.f)(),f=Object(b.a)((function(e){return e.breakpoints.down("md")}));return Object(F.jsxs)(m.a,{maxWidth:"md",sx:{mt:1},children:[Object(F.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(F.jsx)(j.a,{item:!0,xs:2,children:Object(F.jsxs)(h.a,{variant:"h3",fontWeight:500,children:[g,"/",5]})}),Object(F.jsx)(j.a,{item:!0,xs:10,children:Object(F.jsx)(h.a,{variant:f?"h6":"h4",align:"center",children:e.question})})]}),Object(F.jsxs)(x.a,{mt:2,justifyContent:"space-between",alignItems:"stretch",children:[Object(F.jsx)("img",{src:y,alt:"Comics",style:{height:"auto",boxSizing:"border-box",width:"100%",borderWidth:8,borderStyle:"solid",borderImage:"linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)",borderImageSlice:1}}),Object(F.jsx)(G.a,{defaultValue:"",onChange:function(e,t){d(!1),o(t)},children:Object(F.jsxs)(x.a,{mt:1,spacing:1,children:[Object(F.jsx)("div",{}),e.answers.map((function(e,t){return e===a?Object(F.jsx)(Z,{value:e,label:e},t):Object(F.jsx)(U,{value:e,label:e},t)}))]})}),Object(F.jsxs)(K.a,{mt:1,children:[Object(F.jsx)(h.a,{color:"error",align:"center",hidden:!l,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0430"}),Object(F.jsx)($,{variant:"contained",size:"large",fullWidth:!0,sx:{mt:1},onClick:function(){var e;0!==a.length?(e=a,console.log("Send >>> [".concat(e,"]")),o(""),5===g?console.log("FINISH"):(console.log("NEXT"),u("/test/".concat(g+1),{replace:!0}))):d(!0)},children:5===g?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"})]})]})]})},ne=function(){var e=Object(l.a)({typography:{fontFamily:"'Raleway', sans-serif"},components:{MuiTypography:{styleOverrides:{root:{color:"white",fontWeight:400}}}}});e=Object(d.a)(e);var t=Object(Y.g)().num,n=Object(O.useSpring)({from:{opacity:0},to:{opacity:1},delay:0,config:{duration:1500}});return Object(F.jsx)(g.a,{theme:e,children:Object(F.jsxs)(K.a,{pb:4,style:{minHeight:"100vh",backgroundImage:"url(".concat(X,")"),backgroundPosition:"center top",backgroundRepeat:"repeat-x"},children:[Object(F.jsx)(K.a,{textAlign:"center",children:Object(F.jsx)(O.animated.img,{src:v,alt:"logo",style:Object(c.a)({zIndex:1,width:"auto",height:"20vh"},n)})}),Object(F.jsx)(te,{num:t,question:ee[t-1].question,answers:ee[t-1].answers})]})})},ie=n.p+"static/media/bg_countdown.818aab30.jpg",ae=n(103),oe=n.n(ae),re=Object(l.a)({});re=Object(d.a)(re);var ce=function(e){var t=e.number,n=e.name,i=Object(b.a)(re.breakpoints.down("md"));return Object(F.jsxs)("div",{style:{width:130,marginLeft:6,marginRight:6},children:[Object(F.jsx)(h.a,{variant:i?"h2":"h1",sx:{fontFamily:"digital-clock-font",color:"#fff"},children:t<10?"0"+t:t}),Object(F.jsx)(h.a,{variant:i?"h5":"h4",sx:{color:"white",textTransform:"uppercase",fontFamily:"'Montserrat', sans-serif;",fontWeight:300},children:n})]})},se=function(){var e=Object(b.a)(re.breakpoints.down("md")),t=Object(i.useState)(0),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(i.useState)(0),c=Object(s.a)(r,2),l=c[0],d=c[1],j=Object(i.useState)(0),g=Object(s.a)(j,2),u=g[0],f=g[1],m=Object(i.useState)(0),O=Object(s.a)(m,2),v=O[0],y=O[1],w=new Date(2022,0,24,11,0,0),k=oe()(w).tz("Europe/Moscow",!0).local();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(x.a,{direction:"row",justifyContent:"center",style:{marginTop:8,marginBottom:8},children:[Object(F.jsx)(ce,{number:a,name:"day"}),Object(F.jsx)(ce,{number:l,name:"hour"}),Object(F.jsx)(h.a,{variant:e?"h2":"h1",sx:{color:"#fff"},children:":"}),Object(F.jsx)(ce,{number:u,name:"min"}),Object(F.jsx)(h.a,{variant:e?"h2":"h1",sx:{color:"#fff"},children:":"}),Object(F.jsx)(ce,{number:v,name:"sec"})]}),Object(F.jsx)(p.a,{date:k.toDate(),renderer:function(e){var t=e.days,n=e.hours,i=e.minutes,a=e.seconds;e.completed;return o(t),d(n),f(i),y(a),null},style:{display:"none"}})]})},le=function(){var e=Object(b.a)(re.breakpoints.down("md")),t=Object(Y.f)(),n=Object(O.useSpring)({from:{height:e?"auto":"50vh"},to:{height:e?"auto":"25vh"},delay:2e3,config:{duration:1500}}),i=Object(O.useSpring)({from:{opacity:0},to:{opacity:1},delay:e?0:1e3,config:{duration:e?1500:1e3}}),a=Object(O.useSpring)({from:{opacity:0},to:{opacity:2},delay:e?1500:3500,config:{duration:250}}),o=Object(O.useSpring)({from:{marginLeft:-1e3},to:{marginLeft:0},delay:e?1500:3500,config:{duration:750}});return Object(F.jsx)(g.a,{theme:re,children:Object(F.jsxs)("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Object(F.jsx)("div",{style:{backgroundImage:"url(".concat(ie,")"),backgroundPosition:e?"80% top":"center top",backgroundRepeat:"repeat-x",position:"absolute",width:"100%",height:"100%",zIndex:1,left:0,right:0,marginRight:"auto",marginLeft:"auto"}}),Object(F.jsxs)("div",{style:{position:"absolute",width:"100%",height:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto",zIndex:5,textAlign:"center"},children:[Object(F.jsx)(O.animated.img,{src:v,alt:"logo_1",style:Object(c.a)(Object(c.a)({overflow:"hidden",width:e?"80vw":"auto",marginTop:e?"6vh":0},n),i)}),Object(F.jsxs)(O.animated.div,{style:Object(c.a)({height:"auto",width:e?"90vw":"70vw",marginTop:e?"5vh":24,marginRight:"auto",marginLeft:"auto",padding:8},a),children:[Object(F.jsx)(h.a,{display:"inline",variant:"h5",sx:{color:"white",fontFamily:"'Montserrat', sans-serif",fontWeight:400,textTransform:"uppercase"},children:"\u0417\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432\u0430\u0448\u0430 \u043c\u0438\u0441\u0441\u0438\u044f "}),Object(F.jsx)(h.a,{display:"inline",variant:e?"h5":"h4",sx:{color:"white",fontFamily:"'Montserrat', sans-serif",fontWeight:500,textTransform:"uppercase"},children:"\xab\u0417\u0430 \u0433\u0440\u0430\u043d\u044c\u044e \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e\xbb"}),Object(F.jsx)(O.animated.div,{className:"underline",style:Object(c.a)({position:"relative",height:"4px",width:"100%",borderRadius:12,opacity:.9,marginTop:16,background:"linear-gradient(to right, rgba(244,64,148,1) 0%, rgba(0,120,240,1) 100%)",boxShadow:"0 0 1px linear-gradient(to right, rgba(244,64,148,1) 0%, rgba(0,120,240,1) 100%),"},o)}),Object(F.jsx)(h.a,{variant:"h5",sx:{color:"white",fontFamily:"'Montserrat', sans-serif",fontWeight:400,marginTop:2},children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043f\u0433\u0440\u0435\u0439\u0434 Sanofi Genzyme \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437:"}),Object(F.jsx)(h.a,{variant:"h5",sx:{color:"white",fontFamily:"'Montserrat', sans-serif",fontWeight:200,marginTop:0},children:"The broadcast will start in:"}),Object(F.jsx)(se,{}),Object(F.jsx)("div",{style:{height:16}}),Object(F.jsx)(P,{text:"\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u044e",onClick:function(){return t("/stream")}}),Object(F.jsx)(h.a,{variant:"body2",sx:{color:"#fff",fontFamily:"'Montserrat', sans-serif",fontWeight:200,marginTop:0,textAlign:"center"},children:"*go to the broadcast"})]})]})]})})},de=n(64),be=function(){return Object(F.jsx)(de.a,{basemname:"/".concat(""),children:Object(F.jsxs)(Y.c,{children:[Object(F.jsx)(Y.a,{exact:!0,path:"",element:Object(F.jsx)(le,{})}),Object(F.jsx)(Y.a,{path:"/stream",element:Object(F.jsx)(V,{})}),Object(F.jsx)(Y.a,{path:"/test/:num",element:Object(F.jsx)(ne,{})})]})})};r.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(be,{})}),document.getElementById("root"))},93:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.25bc469a.chunk.js.map