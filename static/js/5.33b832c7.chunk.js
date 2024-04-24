(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[5],{1041:function(e,t,n){"use strict";var o=n(4),r=n(9),i=n(10),a=n(1),s=n(216),f=n(171),c=n(139);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){return e instanceof p(e).Element||e instanceof Element}function u(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var m=Math.max,h=Math.min,v=Math.round;function b(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function y(){return!/^((?!chrome|android).)*safari/i.test(b())}function g(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&u(e)&&(r=e.offsetWidth>0&&v(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&v(o.height)/e.offsetHeight||1);var a=(l(e)?p(e):window).visualViewport,s=!y()&&n,f=(o.left+(s&&a?a.offsetLeft:0))/r,c=(o.top+(s&&a?a.offsetTop:0))/i,d=o.width/r,m=o.height/i;return{width:d,height:m,top:c,right:f+d,bottom:c+m,left:f,x:f,y:c}}function O(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function j(e){return g(w(e)).left+O(e).scrollLeft}function P(e){return p(e).getComputedStyle(e)}function E(e){var t=P(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function D(e,t,n){void 0===n&&(n=!1);var o=u(t),r=u(t)&&function(e){var t=e.getBoundingClientRect(),n=v(t.width)/e.offsetWidth||1,o=v(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),i=w(t),a=g(e,r,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(o||!o&&!n)&&(("body"!==x(t)||E(i))&&(s=function(e){return e!==p(e)&&u(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:O(e);var t}(t)),u(t)?((f=g(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=j(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function R(e){var t=g(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function k(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||w(e)}function A(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:u(e)&&E(e)?e:A(k(e))}function M(e,t){var n;void 0===t&&(t=[]);var o=A(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=p(o),a=r?[i].concat(i.visualViewport||[],E(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(M(k(a)))}function L(e){return["table","td","th"].indexOf(x(e))>=0}function T(e){return u(e)&&"fixed"!==P(e).position?e.offsetParent:null}function W(e){for(var t=p(e),n=T(e);n&&L(n)&&"static"===P(n).position;)n=T(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===P(n).position)?t:n||function(e){var t=/firefox/i.test(b());if(/Trident/i.test(b())&&u(e)&&"fixed"===P(e).position)return null;var n=k(e);for(d(n)&&(n=n.host);u(n)&&["html","body"].indexOf(x(n))<0;){var o=P(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var B="top",H="bottom",S="right",C="left",V="auto",q=[B,H,S,C],N="start",I="end",U="viewport",F="popper",z=q.reduce((function(e,t){return e.concat([t+"-"+N,t+"-"+I])}),[]),_=[].concat(q,[V]).reduce((function(e,t){return e.concat([t,t+"-"+N,t+"-"+I])}),[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function X(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function Y(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Q(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?G:r;return function(e,t,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:r,setOptions:function(n){var s="function"===typeof n?n(r.options):n;c(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:l(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var p=function(e){var t=X(e);return J.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=p.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:f,options:o}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(K(t,n)){r.rects={reference:D(t,W(n),"fixed"===r.options.strategy),popper:R(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],a=i.fn,c=i.options,p=void 0===c?{}:c,l=i.name;"function"===typeof a&&(r=a({state:r,options:p,name:l,instance:f})||r)}else r.reset=!1,o=-1}}},update:Y((function(){return new Promise((function(e){f.forceUpdate(),e(r)}))})),destroy:function(){c(),s=!0}};if(!K(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Z={passive:!0};function $(e){return e.split("-")[0]}function ee(e){return e.split("-")[1]}function te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ne(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?$(r):null,a=r?ee(r):null,s=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2;switch(i){case B:t={x:s,y:n.y-o.height};break;case H:t={x:s,y:n.y+n.height};break;case S:t={x:n.x+n.width,y:f};break;case C:t={x:n.x-o.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?te(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case N:t[c]=t[c]-(n[p]/2-o[p]/2);break;case I:t[c]=t[c]+(n[p]/2-o[p]/2)}}return t}var oe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,u=e.isFixed,d=a.x,m=void 0===d?0:d,h=a.y,b=void 0===h?0:h,y="function"===typeof l?l({x:m,y:b}):{x:m,y:b};m=y.x,b=y.y;var g=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),x=C,j=B,E=window;if(c){var D=W(n),R="clientHeight",k="clientWidth";if(D===p(n)&&"static"!==P(D=w(n)).position&&"absolute"===s&&(R="scrollHeight",k="scrollWidth"),r===B||(r===C||r===S)&&i===I)j=H,b-=(u&&D===E&&E.visualViewport?E.visualViewport.height:D[R])-o.height,b*=f?1:-1;if(r===C||(r===B||r===H)&&i===I)x=S,m-=(u&&D===E&&E.visualViewport?E.visualViewport.width:D[k])-o.width,m*=f?1:-1}var A,M=Object.assign({position:s},c&&oe),L=!0===l?function(e,t){var n=e.x,o=e.y,r=t.devicePixelRatio||1;return{x:v(n*r)/r||0,y:v(o*r)/r||0}}({x:m,y:b},p(n)):{x:m,y:b};return m=L.x,b=L.y,f?Object.assign({},M,((A={})[j]=O?"0":"",A[x]=g?"0":"",A.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",A)):Object.assign({},M,((t={})[j]=O?b+"px":"",t[x]=g?m+"px":"",t.transform="",t))}var ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function le(e,t,n){return t===U?pe(function(e,t){var n=p(e),o=w(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,f=0;if(r){i=r.width,a=r.height;var c=y();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:i,height:a,x:s+j(e),y:f}}(e,n)):l(t)?function(e,t){var n=g(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):pe(function(e){var t,n=w(e),o=O(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=m(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=m(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+j(e),f=-o.scrollTop;return"rtl"===P(r||n).direction&&(s+=m(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(w(e)))}function ue(e,t,n,o){var r="clippingParents"===t?function(e){var t=M(k(e)),n=["absolute","fixed"].indexOf(P(e).position)>=0&&u(e)?W(e):e;return l(n)?t.filter((function(e){return l(e)&&ce(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),a=i[0],s=i.reduce((function(t,n){var r=le(e,n,o);return t.top=m(r.top,t.top),t.right=h(r.right,t.right),t.bottom=h(r.bottom,t.bottom),t.left=m(r.left,t.left),t}),le(e,a,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function de(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function me(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function he(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,p=void 0===c?U:c,u=n.elementContext,d=void 0===u?F:u,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,b=void 0===v?0:v,y=de("number"!==typeof b?b:me(b,q)),O=d===F?"reference":F,x=e.rects.popper,j=e.elements[h?O:d],P=ue(l(j)?j:j.contextElement||w(e.elements.popper),f,p,a),E=g(e.elements.reference),D=ne({reference:E,element:x,strategy:"absolute",placement:r}),R=pe(Object.assign({},x,D)),k=d===F?R:E,A={top:P.top-k.top+y.top,bottom:k.bottom-P.bottom+y.bottom,left:P.left-k.left+y.left,right:k.right-P.right+y.right},M=e.modifiersData.offset;if(d===F&&M){var L=M[r];Object.keys(A).forEach((function(e){var t=[S,H].indexOf(e)>=0?1:-1,n=[B,H].indexOf(e)>=0?"y":"x";A[e]+=L[n]*t}))}return A}function ve(e,t,n){return m(e,h(t,n))}function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[B,S,H,C].some((function(t){return e[t]>=0}))}var ge=Q({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,f=p(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,Z)})),s&&f.addEventListener("resize",n.update,Z),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Z)})),s&&f.removeEventListener("resize",n.update,Z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:$(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];u(r)&&x(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(o)&&x(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=_.reduce((function(e,n){return e[n]=function(e,t,n){var o=$(e),r=[C,B].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[C,S].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,b=$(v),y=f||(b===v||!m?[ae(v)]:function(e){if($(e)===V)return[];var t=ae(e);return[fe(e),t,fe(t)]}(v)),g=[v].concat(y).reduce((function(e,n){return e.concat($(n)===V?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?_:f,p=ee(o),l=p?s?z:z.filter((function(e){return ee(e)===p})):q,u=l.filter((function(e){return c.indexOf(e)>=0}));0===u.length&&(u=l);var d=u.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[$(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,x=t.rects.popper,w=new Map,j=!0,P=g[0],E=0;E<g.length;E++){var D=g[E],R=$(D),k=ee(D)===N,A=[B,H].indexOf(R)>=0,M=A?"width":"height",L=he(t,{placement:D,boundary:p,rootBoundary:l,altBoundary:u,padding:c}),T=A?k?S:C:k?H:B;O[M]>x[M]&&(T=ae(T));var W=ae(T),I=[];if(i&&I.push(L[R]<=0),s&&I.push(L[T]<=0,L[W]<=0),I.every((function(e){return e}))){P=D,j=!1;break}w.set(D,I)}if(j)for(var U=function(e){var t=g.find((function(t){var n=w.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},F=m?3:1;F>0;F--){if("break"===U(F))break}t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,l=n.padding,u=n.tether,d=void 0===u||u,v=n.tetherOffset,b=void 0===v?0:v,y=he(t,{boundary:f,rootBoundary:c,padding:l,altBoundary:p}),g=$(t.placement),O=ee(t.placement),x=!O,w=te(g),j="x"===w?"y":"x",P=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,k="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,A="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(P){if(i){var T,V="y"===w?B:C,q="y"===w?H:S,I="y"===w?"height":"width",U=P[w],F=U+y[V],z=U-y[q],_=d?-D[I]/2:0,J=O===N?E[I]:D[I],X=O===N?-D[I]:-E[I],Y=t.elements.arrow,G=d&&Y?R(Y):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[V],Z=K[q],ne=ve(0,E[I],G[I]),oe=x?E[I]/2-_-ne-Q-A.mainAxis:J-ne-Q-A.mainAxis,re=x?-E[I]/2+_+ne+Z+A.mainAxis:X+ne+Z+A.mainAxis,ie=t.elements.arrow&&W(t.elements.arrow),ae=ie?"y"===w?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(T=null==M?void 0:M[w])?T:0,fe=U+re-se,ce=ve(d?h(F,U+oe-se-ae):F,U,d?m(z,fe):z);P[w]=ce,L[w]=ce-U}if(s){var pe,le="x"===w?B:C,ue="x"===w?H:S,de=P[j],me="y"===j?"height":"width",be=de+y[le],ye=de-y[ue],ge=-1!==[B,C].indexOf(g),Oe=null!=(pe=null==M?void 0:M[j])?pe:0,xe=ge?be:de-E[me]-D[me]-Oe+A.altAxis,we=ge?de+E[me]+D[me]-Oe-A.altAxis:ye,je=d&&ge?function(e,t,n){var o=ve(e,t,n);return o>n?n:o}(xe,de,we):ve(d?xe:be,de,d?we:ye);P[j]=je,L[j]=je-de}t.modifiersData[o]=L}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=$(n.placement),f=te(s),c=[C,S].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return de("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:me(e,q))}(r.padding,n),l=R(i),u="y"===f?B:C,d="y"===f?H:S,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=W(i),b=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,g=p[u],O=b-l[c]-p[d],x=b/2-l[c]/2+y,w=ve(g,x,O),j=f;n.modifiersData[o]=((t={})[j]=w,t.centerOffset=w-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o)))&&ce(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),f=be(a,o),c=be(s,r,i),p=ye(f),l=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),Oe=n(119),xe=n(611),we=n(80),je=n(90);function Pe(e){return Object(we.a)("MuiPopper",e)}Object(je.a)("MuiPopper",["root"]);var Ee=n(619),De=n(2),Re={disableDefaultClasses:!1},ke=a.createContext(Re);var Ae=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Me=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Le(e){return"function"===typeof e?e():e}function Te(e){return void 0!==e.nodeType}var We=function(){return Object(Oe.a)({root:["root"]},function(e){var t=a.useContext(ke).disableDefaultClasses;return function(n){return t?"":e(n)}}(Pe))},Be={},He=a.forwardRef((function(e,t){var n,c=e.anchorEl,p=e.children,l=e.direction,u=e.disablePortal,d=e.modifiers,m=e.open,h=e.placement,v=e.popperOptions,b=e.popperRef,y=e.slotProps,g=void 0===y?{}:y,O=e.slots,x=void 0===O?{}:O,w=e.TransitionProps,j=Object(r.a)(e,Ae),P=a.useRef(null),E=Object(s.a)(P,t),D=a.useRef(null),R=Object(s.a)(D,b),k=a.useRef(R);Object(f.a)((function(){k.current=R}),[R]),a.useImperativeHandle(b,(function(){return D.current}),[]);var A=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(h,l),M=a.useState(A),L=Object(i.a)(M,2),T=L[0],W=L[1],B=a.useState(Le(c)),H=Object(i.a)(B,2),S=H[0],C=H[1];a.useEffect((function(){D.current&&D.current.forceUpdate()})),a.useEffect((function(){c&&C(Le(c))}),[c]),Object(f.a)((function(){if(S&&m){var e=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;W(t.placement)}}];null!=d&&(e=e.concat(d)),v&&null!=v.modifiers&&(e=e.concat(v.modifiers));var t=ge(S,P.current,Object(o.a)({placement:A},v,{modifiers:e}));return k.current(t),function(){t.destroy(),k.current(null)}}}),[S,u,d,m,v,A]);var V={placement:T};null!==w&&(V.TransitionProps=w);var q=We(),N=null!=(n=x.root)?n:"div",I=Object(Ee.a)({elementType:N,externalSlotProps:g.root,externalForwardedProps:j,additionalProps:{role:"tooltip",ref:E},ownerState:e,className:q.root});return Object(De.jsx)(N,Object(o.a)({},I,{children:"function"===typeof p?p(V):p}))})),Se=a.forwardRef((function(e,t){var n,s=e.anchorEl,f=e.children,p=e.container,l=e.direction,u=void 0===l?"ltr":l,d=e.disablePortal,m=void 0!==d&&d,h=e.keepMounted,v=void 0!==h&&h,b=e.modifiers,y=e.open,g=e.placement,O=void 0===g?"bottom":g,x=e.popperOptions,w=void 0===x?Be:x,j=e.popperRef,P=e.style,E=e.transition,D=void 0!==E&&E,R=e.slotProps,k=void 0===R?{}:R,A=e.slots,M=void 0===A?{}:A,L=Object(r.a)(e,Me),T=a.useState(!0),W=Object(i.a)(T,2),B=W[0],H=W[1];if(!v&&!y&&(!D||B))return null;if(p)n=p;else if(s){var S=Le(s);n=S&&Te(S)?Object(c.a)(S).body:Object(c.a)(null).body}var C=y||!v||D&&!B?void 0:"none",V=D?{in:y,onEnter:function(){H(!1)},onExited:function(){H(!0)}}:void 0;return Object(De.jsx)(xe.a,{disablePortal:m,container:n,children:Object(De.jsx)(He,Object(o.a)({anchorEl:s,direction:u,disablePortal:m,modifiers:b,ref:t,open:D?!B:y,placement:O,popperOptions:w,popperRef:j,slotProps:k,slots:M},L,{style:Object(o.a)({position:"fixed",top:0,left:0,display:C},P),TransitionProps:V,children:f}))})})),Ce=n(137),Ve=n(7),qe=n(16),Ne=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Ie=Object(Ve.a)(Se,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Ue=a.forwardRef((function(e,t){var n,i=Object(Ce.a)(),a=Object(qe.a)({props:e,name:"MuiPopper"}),s=a.anchorEl,f=a.component,c=a.components,p=a.componentsProps,l=a.container,u=a.disablePortal,d=a.keepMounted,m=a.modifiers,h=a.open,v=a.placement,b=a.popperOptions,y=a.popperRef,g=a.transition,O=a.slots,x=a.slotProps,w=Object(r.a)(a,Ne),j=null!=(n=null==O?void 0:O.root)?n:null==c?void 0:c.Root,P=Object(o.a)({anchorEl:s,container:l,disablePortal:u,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:b,popperRef:y,transition:g},w);return Object(De.jsx)(Ie,Object(o.a)({as:f,direction:null==i?void 0:i.direction,slots:{root:j},slotProps:null!=x?x:p},P,{ref:t}))}));t.a=Ue}}]);