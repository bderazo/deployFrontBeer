(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[46],{1045:function(e,n,t){"use strict";t.r(n);var c=t(6),a=t(7),i=t(335),s=t(696),r=t(62),o=t(8),j=t(10),l=t(218),b=t.n(l),d=t(624),O=t(549),u=t(990),h=t(177),x=t(1),m=t.n(x),g=t(2),p=Object(h.a)(d.a)((function(e){return{padding:e.theme.spacing(.5)}})),k=function(){var e=Object(x.useState)([]),n=Object(j.a)(e,2),t=n[0],c=n[1],a=Object(x.useState)(!1),s=Object(j.a)(a,2),r=s[0],l=s[1],d=Object(x.useState)({}),h=Object(j.a)(d,2),m=h[0],k=h[1],v=function(e){return function(){c((function(n){return[].concat(Object(o.a)(n),[{message:e,key:(new Date).getTime()}])})),r?l(!1):f()}},f=function(){t.length>0&&(k(t.shift()),l(!0))},C=function(e,n){"clickaway"!==n&&l(!1)};return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(O.a,{onClick:v("Message A"),children:"Show message A"}),Object(g.jsx)(O.a,{onClick:v("Message B"),children:"Show message B"}),Object(g.jsx)(u.a,{open:r,onClose:C,autoHideDuration:6e3,onExited:function(){return f()},ContentProps:{"aria-describedby":"message-id"},anchorOrigin:{vertical:"bottom",horizontal:"left"},message:Object(g.jsx)("span",{id:"message-id",children:m.message}),action:[Object(g.jsx)(O.a,{color:"secondary",size:"small",onClick:C,children:"UNDO"},"undo"),Object(g.jsx)(p,{color:"inherit","aria-label":"Close",onClick:C,children:Object(g.jsx)(b.a,{})},"close")]},m.key)]})},v=t(988),f=t(100),C=t(1029),y=Object(h.a)("div")((function(e){var n=e.theme;return{"& .icon":{fontSize:20},"& .success":{backgroundColor:f.a[600]},"& .warning":{backgroundColor:C.a[700]},"& .error":{backgroundColor:n.palette.error.main},"& .info":{backgroundColor:n.palette.primary.main},"& .iconVariant":{opacity:.9,marginRight:n.spacing(1)},"& .message":{display:"flex",alignItems:"center"},"& .margin":{margin:n.spacing(1)}}}));function w(){var e=m.a.useState(!1),n=Object(j.a)(e,2),t=n[0],c=n[1];function a(e,n){"clickaway"!==n&&c(!1)}return Object(g.jsxs)(y,{children:[Object(g.jsx)(O.a,{variant:"outlined",className:"margin",onClick:function(){c(!0)},children:"Open success snackbar"}),Object(g.jsx)(u.a,{open:t,autoHideDuration:6e3,onClose:a,children:Object(g.jsx)(v.a,{onClose:a,severity:"success",sx:{width:"100%"},variant:"filled",children:"This is a success message!"})}),Object(g.jsx)(v.a,{onClose:a,sx:{m:1},severity:"error",variant:"filled",children:"This is an error message!"}),Object(g.jsx)(v.a,{onClose:a,sx:{m:1},severity:"warning",variant:"filled",children:"This is a warning message!"}),Object(g.jsx)(v.a,{onClose:a,sx:{m:1},severity:"info",variant:"filled",children:"This is an information message!"}),Object(g.jsx)(v.a,{onClose:a,sx:{m:1},severity:"success",variant:"filled",children:"This is a success message!"})]})}var S=t(5),I=t(545);function T(e){return Object(g.jsx)(I.a,Object(S.a)(Object(S.a)({},e),{},{direction:"left"}))}function z(e){return Object(g.jsx)(I.a,Object(S.a)(Object(S.a)({},e),{},{direction:"up"}))}function N(e){return Object(g.jsx)(I.a,Object(S.a)(Object(S.a)({},e),{},{direction:"right"}))}function B(e){return Object(g.jsx)(I.a,Object(S.a)(Object(S.a)({},e),{},{direction:"down"}))}var D=function(){var e=Object(x.useState)(!1),n=Object(j.a)(e,2),t=n[0],c=n[1],a=Object(x.useState)(void 0),s=Object(j.a)(a,2),r=s[0],o=s[1],l=function(e){return function(){c(!0),o((function(){return e}))}};return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(O.a,{onClick:l(T),children:"Right"}),Object(g.jsx)(O.a,{onClick:l(z),children:"Up"}),Object(g.jsx)(O.a,{onClick:l(N),children:"Left"}),Object(g.jsx)(O.a,{onClick:l(B),children:"Down"}),Object(g.jsx)(u.a,{open:t,onClose:function(){return c(!1)},TransitionComponent:r,ContentProps:{"aria-describedby":"message-id"},message:Object(g.jsx)("span",{id:"message-id",children:"I love snacks"})})]})},P=t(994),R=Object(g.jsx)(O.a,{color:"secondary",size:"small",children:"lorem ipsum dolorem"}),H=Object(a.a)("div")((function(e){return{maxWidth:600,"& .snackbar":{margin:e.theme.spacing(1)}}}));function L(){return Object(g.jsxs)(H,{children:[Object(g.jsx)(P.a,{className:"snackbar",message:"I love snacks.",action:R}),Object(g.jsx)(P.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),Object(g.jsx)(P.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.",action:R}),Object(g.jsx)(P.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:R})]})}function M(){var e=m.a.useState({open:!1,vertical:"top",horizontal:"center"}),n=Object(j.a)(e,2),t=n[0],c=n[1],a=t.vertical,s=t.horizontal,r=t.open,o=function(e){return function(){c(Object(S.a)({open:!0},e))}};return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(O.a,{onClick:o({vertical:"top",horizontal:"center"}),children:"Top-Center"}),Object(g.jsx)(O.a,{onClick:o({vertical:"top",horizontal:"right"}),children:"Top-Right"}),Object(g.jsx)(O.a,{onClick:o({vertical:"bottom",horizontal:"right"}),children:"Bottom-Right"}),Object(g.jsx)(O.a,{onClick:o({vertical:"bottom",horizontal:"center"}),children:"Bottom-Center"}),Object(g.jsx)(O.a,{onClick:o({vertical:"bottom",horizontal:"left"}),children:"Bottom-Left"}),Object(g.jsx)(O.a,{onClick:o({vertical:"top",horizontal:"left"}),children:"Top-Left"}),Object(g.jsx)(u.a,{open:r,onClose:function(){c(Object(S.a)(Object(S.a)({},t),{},{open:!1}))},anchorOrigin:{vertical:a,horizontal:s},ContentProps:{"aria-describedby":"message-id"},message:Object(g.jsx)("span",{id:"message-id",children:"I love snacks"})},"".concat(a,",").concat(s))]})}var U=t(34);function A(){var e=Object(U.a)(),n=Object(x.useState)(!1),t=Object(j.a)(n,2),c=t[0],a=t[1];function s(e,n){"clickaway"!==n&&a(!1)}return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(O.a,{onClick:function(){a(!0)},children:"Open simple snackbar"}),Object(g.jsx)(u.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:6e3,onClose:s,ContentProps:{"aria-describedby":"message-id"},message:Object(g.jsx)("span",{id:"message-id",children:"Note archived"}),action:[Object(g.jsx)(O.a,{color:"secondary",size:"small",onClick:s,children:"UNDO"},"undo"),Object(g.jsx)(d.a,{"aria-label":"Close",color:"inherit",onClick:s,sx:{padding:e.spacing(.5)},children:Object(g.jsx)(b.a,{})},"close")]})]})}var F=t(209);function J(){var e,n=Object(F.b)().enqueueSnackbar;return Object(g.jsxs)(m.a.Fragment,{children:[Object(g.jsx)(O.a,{onClick:function(){return n("I love snacks.")},children:"Show snackbar"}),Object(g.jsx)(O.a,{onClick:(e="warning",function(){n("This is a warning message!",{variant:e})}),children:"Show warning snackbar"})]})}function q(){return Object(g.jsx)(F.a,{maxSnack:3,children:Object(g.jsx)(J,{})})}var E=t(612),G=t(609);function V(e){return Object(g.jsx)(I.a,Object(S.a)(Object(S.a)({},e),{},{direction:"up"}))}function W(e){return Object(g.jsx)(E.a,Object(S.a)({},e))}function K(){var e=m.a.useState({open:!1,Transition:G.a}),n=Object(j.a)(e,2),t=n[0],c=n[1],a=function(e){return function(){c({open:!0,Transition:e})}};return Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{onClick:a(W),children:"Grow Transition"}),Object(g.jsx)(O.a,{onClick:a(G.a),children:"Fade Transition"}),Object(g.jsx)(O.a,{onClick:a(V),children:"Slide Transition"}),Object(g.jsx)(u.a,{open:t.open,onClose:function(){c(Object(S.a)(Object(S.a)({},t),{},{open:!1}))},TransitionComponent:t.Transition,ContentProps:{"aria-describedby":"message-id"},message:Object(g.jsx)("span",{id:"message-id",children:"I love snacks"})})]})}var Q=Object(a.a)("div")((function(e){var n,t=e.theme;return n={margin:"30px"},Object(c.a)(n,t.breakpoints.down("sm"),{margin:"16px"}),Object(c.a)(n,"& .breadcrumb",Object(c.a)({marginBottom:"30px"},t.breakpoints.down("sm"),{marginBottom:"16px"})),n}));n.default=function(){return Object(g.jsxs)(Q,{children:[Object(g.jsx)(i.a,{className:"breadcrumb",children:Object(g.jsx)(r.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Snackbar"}]})}),Object(g.jsxs)(s.a,{spacing:3,children:[Object(g.jsx)(r.i,{title:"simple snackbar",children:Object(g.jsx)(A,{})}),Object(g.jsx)(r.i,{title:"customized snackbar",children:Object(g.jsx)(w,{})}),Object(g.jsx)(r.i,{title:"positioned snackbar",children:Object(g.jsx)(M,{})}),Object(g.jsx)(r.i,{title:"message length",children:Object(g.jsx)(L,{})}),Object(g.jsx)(r.i,{title:"transition",children:Object(g.jsx)(K,{})}),Object(g.jsx)(r.i,{title:"consecutive snackbar",children:Object(g.jsx)(k,{})}),Object(g.jsx)(r.i,{title:"Control Slide direction",children:Object(g.jsx)(D,{})}),Object(g.jsx)(r.i,{title:"complementary project",children:Object(g.jsx)(q,{})})]})]})}}}]);