import{c as x}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{o as S,n as z,b as N}from"../chart.md.hi_nZSnT.js";import B from"./vue-ui-digits-IKt4qT2-.DyOqrHqe.js";import{h as D,q as p,p as $,v as V,o as n,c as i,j as y,r as u,a as k,t as C,n as v,N as s,G as w,F as A,k as b}from"./framework.BaNfDZ-f.js";const G={__name:"vue-ui-kpi",props:{config:{type:Object,default(){return{}}},dataset:{type:Number,default:0}},setup(o){const l=o,{vue_ui_kpi:h}=S(),e=D({get:()=>r(),set:a=>a});function r(){return x({userConfig:l.config,defaultConfig:h})}p(()=>l.config,a=>{e.value=r(),c()},{deep:!0});const F=$((l.dataset,l.dataset)),t=$(e.value.useAnimation?e.value.animationValueStart:F.value),m=a=>{const d=e.value.animationFrames,f=Math.abs(a-t.value)/d;function g(){t.value<a?t.value=Math.min(t.value+f,a):t.value>a&&(t.value=Math.max(t.value-f,a)),t.value!==a&&requestAnimationFrame(g)}g()};V(()=>{c()});function c(){e.value.useAnimation?(t.value=e.value.animationValueStart,m(l.dataset)):t.value=l.dataset}return p(()=>l.dataset,a=>{e.value.useAnimation?m(a):t.value=a}),(a,d)=>(n(),i("div",{class:v(`vue-ui-kpi ${e.value.layoutClass}`),style:s(`background:${e.value.backgroundColor}; ${e.value.layoutCss}`)},[y("div",{class:v(`vue-ui-kpi-title ${e.value.titleClass}`),style:s(`font-family: ${e.value.fontFamily}; font-size:${e.value.titleFontSize}px; color:${e.value.titleColor}; font-weight:${e.value.titleBold?"bold":"normal"}; ${e.value.titleCss}`)},[u(a.$slots,"title",{comment:o.dataset}),k(" "+C(e.value.title),1)],6),u(a.$slots,"comment-before",{comment:o.dataset}),y("div",{class:v(`vue-ui-kpi-value ${e.value.valueClass}`),style:s(`font-family: ${e.value.fontFamily}; font-size:${e.value.valueFontSize}px; color:${e.value.valueColor}; font-weight:${e.value.valueBold?"bold":"normal"}; ${e.value.valueCss}`)},[u(a.$slots,"value",{comment:o.dataset}),e.value.analogDigits.show?(n(),i("div",{key:0,style:s({height:e.value.analogDigits.height+"px"})},[w(B,{dataset:Number(t.value.toFixed(e.value.valueRounding)),config:{backgroundColor:e.value.backgroundColor,digits:{color:e.value.analogDigits.color,skeletonColor:e.value.analogDigits.skeletonColor}}},null,8,["dataset","config"])],4)):(n(),i(A,{key:1},[k(C(b(z)(e.value.formatter,t.value,b(N)({p:e.value.prefix,v:t.value,s:e.value.suffix,r:e.value.valueRounding}))),1)],64))],6),u(a.$slots,"comment-after",{comment:o.dataset})],6))}};export{G as default};