(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[31],{1065:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(7),c=a(335),r=a(62),i=a(10),s=a(1067),l=a(1068),b=a(1069),u=a(1021),j=a(1070),d=a(624),p=a(338),g=a(989),m=a(1),h=a(2),O=Object(o.a)(s.a)((function(){return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),x=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}],v=function(){var e=Object(m.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(m.useState)(5),r=Object(i.a)(o,2),s=r[0],v=r[1];return Object(h.jsxs)(c.a,{width:"100%",overflow:"auto",children:[Object(h.jsxs)(O,{children:[Object(h.jsx)(l.a,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{align:"left",children:"Name"}),Object(h.jsx)(u.a,{align:"center",children:"Company"}),Object(h.jsx)(u.a,{align:"center",children:"Start Date"}),Object(h.jsx)(u.a,{align:"center",children:"Status"}),Object(h.jsx)(u.a,{align:"center",children:"Amount"}),Object(h.jsx)(u.a,{align:"right",children:"Action"})]})}),Object(h.jsx)(j.a,{children:x.slice(a*s,a*s+s).map((function(e,t){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{align:"left",children:e.name}),Object(h.jsx)(u.a,{align:"center",children:e.company}),Object(h.jsx)(u.a,{align:"center",children:e.date}),Object(h.jsx)(u.a,{align:"center",children:e.status}),Object(h.jsxs)(u.a,{align:"center",children:["$",e.amount]}),Object(h.jsx)(u.a,{align:"right",children:Object(h.jsx)(d.a,{children:Object(h.jsx)(p.a,{color:"error",children:"close"})})})]},t)}))})]}),Object(h.jsx)(g.a,{sx:{px:2},page:a,component:"div",rowsPerPage:s,count:x.length,onPageChange:function(e,t){n(t)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:function(e){v(+e.target.value),n(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})},f=(Object(o.a)(s.a)((function(e){e.theme;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),Object(o.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(n.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(t,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t})));t.default=function(){return Object(h.jsxs)(f,{children:[Object(h.jsx)(c.a,{className:"breadcrumb",children:Object(h.jsx)(r.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Table"}]})}),Object(h.jsx)(r.i,{title:"Pagination Table",children:Object(h.jsx)(v,{})})]})}},669:function(e,t,a){"use strict";a(1);var n=a(81),o=a(2);t.a=Object(n.a)(Object(o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},670:function(e,t,a){"use strict";a(1);var n=a(81),o=a(2);t.a=Object(n.a)(Object(o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},747:function(e,t,a){"use strict";var n=a(6),o=a(9),c=a(4),r=a(1),i=a(12),s=a(119),l=a(16),b=a(7),u=a(90),j=a(80);function d(e){return Object(j.a)("MuiToolbar",e)}Object(u.a)("MuiToolbar",["root","gutters","regular","dense"]);var p=a(2),g=["className","component","disableGutters","variant"],m=Object(b.a)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableGutters&&t.gutters,t[a.variant]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({position:"relative",display:"flex",alignItems:"center"},!a.disableGutters&&Object(n.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===a.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),h=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiToolbar"}),n=a.className,r=a.component,b=void 0===r?"div":r,u=a.disableGutters,j=void 0!==u&&u,h=a.variant,O=void 0===h?"regular":h,x=Object(o.a)(a,g),v=Object(c.a)({},a,{component:b,disableGutters:j,variant:O}),f=function(e){var t=e.classes,a={root:["root",!e.disableGutters&&"gutters",e.variant]};return Object(s.a)(a,d,t)}(v);return Object(p.jsx)(m,Object(c.a)({as:b,className:Object(i.a)(f.root,n),ref:t,ownerState:v},x))}));t.a=h},989:function(e,t,a){"use strict";var n,o,c,r,i,s,l,b,u=a(6),j=a(9),d=a(4),p=a(1),g=a(12),m=a(119),h=a(321),O=a(7),x=a(16),v=a(41),f=a(798),P=a(548),w=a(1021),y=a(747),L=a(670),R=a(669),I=a(34),B=a(624),T=a(81),M=a(2),S=Object(T.a)(Object(M.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),k=Object(T.a)(Object(M.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),C=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],A=p.forwardRef((function(e,t){var a=e.backIconButtonProps,u=e.count,p=e.getItemAriaLabel,g=e.nextIconButtonProps,m=e.onPageChange,h=e.page,O=e.rowsPerPage,x=e.showFirstButton,v=e.showLastButton,f=Object(j.a)(e,C),P=Object(I.a)();return Object(M.jsxs)("div",Object(d.a)({ref:t},f,{children:[x&&Object(M.jsx)(B.a,{onClick:function(e){m(e,0)},disabled:0===h,"aria-label":p("first",h),title:p("first",h),children:"rtl"===P.direction?n||(n=Object(M.jsx)(S,{})):o||(o=Object(M.jsx)(k,{}))}),Object(M.jsx)(B.a,Object(d.a)({onClick:function(e){m(e,h-1)},disabled:0===h,color:"inherit","aria-label":p("previous",h),title:p("previous",h)},a,{children:"rtl"===P.direction?c||(c=Object(M.jsx)(R.a,{})):r||(r=Object(M.jsx)(L.a,{}))})),Object(M.jsx)(B.a,Object(d.a)({onClick:function(e){m(e,h+1)},disabled:-1!==u&&h>=Math.ceil(u/O)-1,color:"inherit","aria-label":p("next",h),title:p("next",h)},g,{children:"rtl"===P.direction?i||(i=Object(M.jsx)(L.a,{})):s||(s=Object(M.jsx)(R.a,{}))})),v&&Object(M.jsx)(B.a,{onClick:function(e){m(e,Math.max(0,Math.ceil(u/O)-1))},disabled:h>=Math.ceil(u/O)-1,"aria-label":p("last",h),title:p("last",h),children:"rtl"===P.direction?l||(l=Object(M.jsx)(k,{})):b||(b=Object(M.jsx)(S,{}))})]}))})),N=a(222),F=a(90),D=a(80);function z(e){return Object(D.a)("MuiTablePagination",e)}var G,H=Object(F.a)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),J=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],K=Object(O.a)(w.a,{name:"MuiTablePagination",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),E=Object(O.a)(y.a,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:function(e,t){return Object(d.a)(Object(u.a)({},"& .".concat(H.actions),t.actions),t.toolbar)}})((function(e){var t,a=e.theme;return t={minHeight:52,paddingRight:2},Object(u.a)(t,"".concat(a.breakpoints.up("xs")," and (orientation: landscape)"),{minHeight:52}),Object(u.a)(t,a.breakpoints.up("sm"),{minHeight:52,paddingRight:2}),Object(u.a)(t,"& .".concat(H.actions),{flexShrink:0,marginLeft:20}),t})),$=Object(O.a)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:function(e,t){return t.spacer}})({flex:"1 1 100%"}),q=Object(O.a)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:function(e,t){return t.selectLabel}})((function(e){var t=e.theme;return Object(d.a)({},t.typography.body2,{flexShrink:0})})),Q=Object(O.a)(P.a,{name:"MuiTablePagination",slot:"Select",overridesResolver:function(e,t){var a;return Object(d.a)((a={},Object(u.a)(a,"& .".concat(H.selectIcon),t.selectIcon),Object(u.a)(a,"& .".concat(H.select),t.select),a),t.input,t.selectRoot)}})(Object(u.a)({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8},"& .".concat(H.select),{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"})),U=Object(O.a)(f.a,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:function(e,t){return t.menuItem}})({}),V=Object(O.a)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:function(e,t){return t.displayedRows}})((function(e){var t=e.theme;return Object(d.a)({},t.typography.body2,{flexShrink:0})}));function W(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"\u2013").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))}function X(e){return"Go to ".concat(e," page")}var Y=p.forwardRef((function(e,t){var a,n=Object(x.a)({props:e,name:"MuiTablePagination"}),o=n.ActionsComponent,c=void 0===o?A:o,r=n.backIconButtonProps,i=n.className,s=n.colSpan,l=n.component,b=void 0===l?w.a:l,u=n.count,O=n.getItemAriaLabel,f=void 0===O?X:O,P=n.labelDisplayedRows,y=void 0===P?W:P,L=n.labelRowsPerPage,R=void 0===L?"Rows per page:":L,I=n.nextIconButtonProps,B=n.onPageChange,T=n.onRowsPerPageChange,S=n.page,k=n.rowsPerPage,C=n.rowsPerPageOptions,F=void 0===C?[10,25,50,100]:C,D=n.SelectProps,H=void 0===D?{}:D,Y=n.showFirstButton,Z=void 0!==Y&&Y,_=n.showLastButton,ee=void 0!==_&&_,te=Object(j.a)(n,J),ae=n,ne=function(e){var t=e.classes;return Object(m.a)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},z,t)}(ae),oe=H.native?"option":U;b!==w.a&&"td"!==b||(a=s||1e3);var ce=Object(N.a)(H.id),re=Object(N.a)(H.labelId);return Object(M.jsx)(K,Object(d.a)({colSpan:a,ref:t,as:b,ownerState:ae,className:Object(g.a)(ne.root,i)},te,{children:Object(M.jsxs)(E,{className:ne.toolbar,children:[Object(M.jsx)($,{className:ne.spacer}),F.length>1&&Object(M.jsx)(q,{className:ne.selectLabel,id:re,children:R}),F.length>1&&Object(M.jsx)(Q,Object(d.a)({variant:"standard"},!H.variant&&{input:G||(G=Object(M.jsx)(v.c,{}))},{value:k,onChange:T,id:ce,labelId:re},H,{classes:Object(d.a)({},H.classes,{root:Object(g.a)(ne.input,ne.selectRoot,(H.classes||{}).root),select:Object(g.a)(ne.select,(H.classes||{}).select),icon:Object(g.a)(ne.selectIcon,(H.classes||{}).icon)}),children:F.map((function(e){return Object(p.createElement)(oe,Object(d.a)({},!Object(h.a)(oe)&&{ownerState:ae},{className:ne.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)}))})),Object(M.jsx)(V,{className:ne.displayedRows,children:y({from:0===u?0:S*k+1,to:-1===u?(S+1)*k:-1===k?u:Math.min(u,(S+1)*k),count:-1===u?-1:u,page:S})}),Object(M.jsx)(c,{className:ne.actions,backIconButtonProps:r,count:u,nextIconButtonProps:I,onPageChange:B,page:S,rowsPerPage:k,showFirstButton:Z,showLastButton:ee,getItemAriaLabel:f})]})}))}));t.a=Y}}]);