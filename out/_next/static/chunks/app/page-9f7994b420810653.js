(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9185:function(e,t,r){Promise.resolve().then(r.bind(r,7010)),Promise.resolve().then(r.t.bind(r,8482,23))},4212:function(e,t,r){var n=r(7741).Symbol;e.exports=n},5789:function(e){e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},9677:function(e,t,r){var n=r(5789),o=r(962);e.exports=function e(t,r,a,s,i){var c=-1,l=t.length;for(a||(a=o),i||(i=[]);++c<l;){var d=t[c];r>0&&a(d)?r>1?e(d,r-1,a,s,i):n(i,d):s||(i[i.length]=d)}return i}},7976:function(e,t,r){var n=r(4212),o=r(9829),a=r(8611),s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):a(e)}},3686:function(e,t,r){var n=r(7976),o=r(9340);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},8584:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9829:function(e,t,r){var n=r(4212),o=Object.prototype,a=o.hasOwnProperty,s=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch(e){}var o=s.call(e);return n&&(t?e[i]=r:delete e[i]),o}},962:function(e,t,r){var n=r(4212),o=r(9782),a=r(5059),s=n?n.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(s&&e&&e[s])}},8611:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},7741:function(e,t,r){var n=r(8584),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},8007:function(e,t,r){var n=r(9677);e.exports=function(e){return(null==e?0:e.length)?n(e,1):[]}},9782:function(e,t,r){var n=r(3686),o=r(9340),a=Object.prototype,s=a.hasOwnProperty,i=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(e){return o(e)&&s.call(e,"callee")&&!i.call(e,"callee")};e.exports=c},5059:function(e){var t=Array.isArray;e.exports=t},9340:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},7010:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(7437),o=r(2265),a=r(986),s=r.n(a),i=r(2697),c=r.n(i);let l="material-icons-outlined",d={primary:c().primary,secondary:c().secondary,tertiary:c().tertiary,branded:c().branded,surface:c().surface},u={small:c().small,default:c().default,large:c().large};function f(e){let{icon:t,lowered:r=!1,type:o="primary",size:a="default",onClick:s}=e,i="".concat(c().root," ").concat(d[o]," ").concat(u[a]);return r&&(i+=" ".concat(c().lowered)),(0,n.jsx)("button",{className:i,onClick:s,children:(0,n.jsx)("div",{className:l,children:t})})}var p=r(5913),_=r.n(p);let m={standard:_().standard,filled:_().filled,outlined:_().outlined,tonal:_().tonal};function v(e){let{disabled:t,icon:r,type:o="standard",onClick:a}=e,s="".concat(_().root," ").concat(m[o]);return(0,n.jsx)("button",{className:s,disabled:t,onClick:a,children:(0,n.jsx)("div",{className:l,children:r})})}var h=r(181),b=r.n(h);function y(e){let{progress:t,stop:r}=e;return(0,n.jsxs)("div",{className:b().root,style:{gridTemplateColumns:"".concat(t,"%  1fr")},children:[(0,n.jsx)("div",{className:b().active}),(0,n.jsx)("div",{className:b().track})]})}var g=r(6436),x=r.n(g);function j(e){let{right:t,title:r}=e;return(0,n.jsxs)("div",{className:x().root,children:[(0,n.jsx)("div",{className:x().headline,children:r}),(0,n.jsx)("div",{className:x().right,children:t})]})}var N=r(8007),k=r.n(N);let w=(e,t)=>e.map((e,r)=>r!==t?e:{...e,isHidden:!e.isHidden}),H=e=>{let t=e.findIndex(e=>e.isHidden);return w(e,t)},O=(e,t)=>{let r=e.findLastIndex(e=>t(e.raw)&&!e.isHidden);return w(e,r)},B=(e,t)=>{let r=e.filter(e=>t(e.raw));return 0===r.length?100:Math.ceil(r.filter(e=>!e.isHidden).length/r.length*100)};var F=r(6480),S=r.n(F);let P=function(e){let{lettersToShow:t}=e;return{canBeHidden:e=>e.length>t+1,obfuscate(e){let r=e.map(e=>e.split(/\s+/).map(e=>({raw:e,isHidden:this.canBeHidden(e),hiddenForm:[{show:!0,letters:e.slice(0,t)},{show:!1,letters:e.substring(t)}]})));return k()(r)}}}({lettersToShow:1}),I=P.obfuscate(["Portanto, visto que temos um grande sumo sacerdote que adentrou os c\xe9us, Jesus, o Filho de Deus, apeguemo-nos com toda a firmeza \xe0 f\xe9 que professamos,","pois n\xe3o temos um sumo sacerdote que n\xe3o possa compadecer-se das nossas fraquezas, mas sim algu\xe9m que, como n\xf3s, passou por todo tipo de tenta\xe7\xe3o, por\xe9m, sem pecado.","Assim sendo, aproximemo-nos do trono da gra\xe7a com toda a confian\xe7a, a fim de recebermos miseric\xf3rdia e encontrarmos gra\xe7a que nos ajude no momento da necessidade."]);function C(e){let{spec:t,isPeeking:r}=e,o=e=>S()({[s().hidden]:!r&&t.isHidden&&!e.show});return(0,n.jsx)("span",{className:"word",children:t.hiddenForm.map(e=>(0,n.jsx)("span",{className:o(e),children:e.letters},e.letters))})}function T(){let[e,t]=(0,o.useState)(I),[r,a]=(0,o.useState)(!1),i=(0,o.useMemo)(()=>B(e,P.canBeHidden),[e]);return(0,n.jsxs)("main",{className:s().root,children:[(0,n.jsx)(j,{title:"Hebreus 4:14-16",right:(0,n.jsx)(v,{type:"tonal",icon:"book"})}),(0,n.jsxs)("div",{className:s().body,children:[(0,n.jsx)("article",{children:e.map(e=>(0,n.jsx)(C,{isPeeking:r,spec:e},e.raw))}),(0,n.jsx)("div",{className:s().progress,children:(0,n.jsx)(y,{progress:i})}),(0,n.jsxs)("div",{className:s().controls,children:[(0,n.jsx)(v,{icon:"skip_previous",onClick:()=>{r||t(e=>O(e,P.canBeHidden))}}),100!==i?(0,n.jsx)(f,{type:"surface",size:"default",icon:"play_arrow",onClick:()=>{r||t(e=>H(e))}}):(0,n.jsx)(f,{type:"surface",size:"default",icon:"repeat",onClick:()=>t(I)}),(0,n.jsx)(v,{icon:"remove_red_eye",onClick:()=>a(e=>!e)})]})]})]})}},986:function(e){e.exports={body:"style_body__HXpPy",hidden:"style_hidden__I75Bn",controls:"style_controls__pGG84",progress:"style_progress__oamKN"}},8482:function(e){e.exports={root:"style_root__1HTXT"}},2697:function(e){e.exports={root:"Fab_root__NjVHj",small:"Fab_small__ab5n6",default:"Fab_default___Duni",large:"Fab_large__4DN2i",lowered:"Fab_lowered__ovaPR",primary:"Fab_primary__Hjd8v",secondary:"Fab_secondary__U8kkv",tertiary:"Fab_tertiary__1qyBc",branded:"Fab_branded___Xxkb",surface:"Fab_surface__H3e2O"}},5913:function(e){e.exports={root:"IconButton_root__3Byq8",standard:"IconButton_standard__lt6Cs",filled:"IconButton_filled__8jr8v",tonal:"IconButton_tonal__0RPWd",outlined:"IconButton_outlined__9f3pW"}},181:function(e){e.exports={root:"ProgressIndicator_root__6gQbT",track:"ProgressIndicator_track__a8Oz9",active:"ProgressIndicator_active__lMQZv"}},6436:function(e){e.exports={root:"TopBar_root__381gM",headline:"TopBar_headline__a5XV9",right:"TopBar_right__81yLG"}},6480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}(r)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[971,69,744],function(){return e(e.s=9185)}),_N_E=e.O()}]);