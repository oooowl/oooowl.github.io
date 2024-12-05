import{ar as ke,h as c,p as s,q as $e,v as xe,Y as we,o as i,c as n,b as E,e as k,aj as be,w as j,r as $,ak as H,al as J,k as f,n as z,G as Ce,j as _e,F as _,C as P,N as x,t as Pe}from"./framework.BaNfDZ-f.js";import{o as Oe,L as Ie,G as Ae,R as Fe,e as Z,a as Ee,X as je,K as ee,q as ze,Q as Be}from"../chart.md.hi_nZSnT.js";import{O as Le,M as Me}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as Ne}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as Se,i as Ge}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import Ve from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import{c as le}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as qe}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as Re}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";const Te=["id"],Ye=["xmlns","viewBox"],Xe=["cx","cy","r","stroke","stroke-width"],Ue={key:0},We=["stroke","d","stroke-width"],De={key:1},Ke=["stroke","x1","x2","y1","y2"],Qe=["text-anchor","transform","x","y","onClick","font-weight","font-size","fill"],He=["cx","cy","fill","onClick","r"],Je={key:3,class:"vue-data-ui-watermark"},Ze={__name:"vue-ui-relation-circle",props:{dataset:{type:Array,default(){return[]}},config:{type:Object,default(){return{}}}},setup(te,{expose:ae}){const v=te;ke(e=>({db99e4e4:ne.value,"1847af26":se.value,"36a818e2":ue.value}));const{vue_ui_relation_circle:ie}=Oe(),O=c(()=>!!v.dataset&&Object.keys(v.dataset).length),m=s(Ie()),B=s(0),w=s(null),L=s(null),M=s(0),t=c({get:()=>N(),set:e=>e});function N(){const e=le({userConfig:v.config,defaultConfig:ie});return e.theme?{...le({userConfig:Ae.vue_ui_relation_circle[e.theme]||v.config,defaultConfig:e}),customPalette:Fe[e.theme]||Z}:e}$e(()=>v.config,e=>{t.value=N(),T(),M.value+=1},{deep:!0});const{isPrinting:S,isImaging:G,generatePdf:V,generateImage:q}=Se({elementId:`relation_circle_${m.value}`,fileName:t.value.style.title.text||"vue-ui-relation-circle"}),R=c(()=>Ee(t.value.customPalette)),g=s([]),h=s([]),o=s({}),d=s([]),oe=s(0),I=c(()=>v.dataset.slice(0,t.value.style.limit)),A=s(t.value.style.size),r=s({height:t.value.style.size,width:t.value.style.size}),y=c({get(){return A.value*t.value.style.circle.radiusProportion},set(e){return e}}),re=c(()=>t.value.style.links.curved),se=c(()=>`${t.value.style.animation.speedMs}ms`),ne=c(()=>y.value*2),ue=c(()=>y.value*4),b=s(null);xe(()=>{T(),document.getElementById(`relation_circle_${m.value}`).addEventListener("click",Y)});function T(){if(je(v.dataset)?ee({componentName:"VueUiRelationCircle",type:"dataset"}):v.dataset.forEach((e,a)=>{ze({datasetObject:e,requiredAttributes:["id","label","relations","weights"]}).forEach(l=>{ee({componentName:"VueUiRelationCircle",type:"datasetSerieAttribute",property:l,index:a})})}),t.value.responsive){const e=Le(()=>{const{width:a,height:l}=Me({chart:w.value,title:t.value.style.title.text?L.value:null});A.value=Math.min(a,l),r.value.width=a,r.value.height=l,y.value=A.value*t.value.style.circle.radiusProportion,g.value=[],h.value=[],X(),U()});b.value=new ResizeObserver(e),b.value.observe(w.value.parentNode)}else g.value=[],h.value=[],X(),U()}we(()=>{document.getElementById(`relation_circle_${m.value}`).removeEventListener("click",Y),b.value&&b.value.disconnect()});function Y(e){const a=e.target;a&&Array.from(a.classList).includes("vue-ui-user-options")||a&&Array.from(a.classList).includes("vue-ui-user-options-summary")||a&&Array.from(a.classList).includes("vue-data-ui-button")||a&&Array.from(a.classList).includes("vue-ui-relation-circle-legend")||(o.value={},d.value=[])}function X(){const e=6.28319/I.value.length,a=360/I.value.length;let l=0,u=0;I.value.forEach((p,F)=>{const me=y.value*Math.cos(l)+r.value.width/2,pe=y.value*Math.sin(l)+r.value.height/2+t.value.style.circle.offsetY;g.value.push({x:me,y:pe,...p,color:p.color?p.color:R.value[F]?R.value[F]:Z[F],regAngle:u}),l+=e,u+=a})}function U(){g.value.forEach(e=>{g.value.filter(a=>a.relations.includes(e.id)).forEach((a,l)=>{h.value.push({weight:e.weights&&e.weights[l]?e.weights[l]:1,relationId:`${e.id}_${a.id}`,x1:e.x,y1:e.y,x2:a.x,y2:a.y,colorSource:e.color,colorTarget:a.color,...e})})})}const ce=c(()=>Math.max(...h.value.map(e=>e.weight)));function ve(e){return Object.hasOwn(o.value,"x")?d.value.includes(e.id)?"opacity:1":"opacity:0.1":"opacity:1"}function W(e){return Object.hasOwn(o.value,"x")?e.colorTarget:e.colorSource}function D(e){return Object.hasOwn(o.value,"x")?d.value.includes(e.id)&&e.relationId===`${e.id}_${o.value.id}`||e.relationId===`${o.value.id}_${e.id}`?`opacity:1;stroke-width:${Q(e)}`:"opacity: 0":"opacity: 1"}function de(e){return e.regAngle>90&&e.regAngle<270?"end":"start"}function ge(e){return e.regAngle>90&&e.regAngle<270?e.x-5:e.x+5}function ye(e){return Object.hasOwn(o.value,"x")?o.value.id===e.id||d.value.includes(e.id)?"opacity:1":"opacity:0.2":"opacity:1"}function fe(e){return e.regAngle>90&&e.regAngle<270?`rotate(${e.regAngle+180},${e.x},${e.y})`:`rotate(${e.regAngle},${e.x},${e.y})`}function K(e){oe.value=360-e.regAngle,o.value.id&&e.id===o.value.id?(o.value={},d.value=[]):(o.value=e,d.value=[...e.relations])}function Q(e){return e.weight/ce.value*t.value.style.links.maxWidth}const C=s(!1);function he(e){C.value=e,B.value+=1}return ae({generatePdf:V,generateImage:q}),(e,a)=>(i(),n("div",{ref_key:"relationCircleChart",ref:w,class:"vue-ui-relation-circle",style:x(`width:100%;background:${t.value.style.backgroundColor};text-align:center;${t.value.responsive?"height: 100%":""}`),id:`relation_circle_${m.value}`},[t.value.style.title.text?(i(),n("div",{key:0,ref_key:"chartTitle",ref:L,style:"width:100%;background:transparent"},[(i(),E(Ne,{key:`title_${M.value}`,config:{title:{cy:"relation-div-title",...t.value.style.title},subtitle:{cy:"relation-div-subtitle",...t.value.style.title.subtitle}}},null,8,["config"]))],512)):k("",!0),t.value.userOptions.show&&O.value?(i(),E(Ge,{ref:"details",key:`user_options_${B.value}`,backgroundColor:t.value.style.backgroundColor,color:t.value.style.color,isPrinting:f(S),isImaging:f(G),uid:m.value,hasPdf:t.value.userOptions.buttons.pdf,hasImg:t.value.userOptions.buttons.img,hasFullscreen:t.value.userOptions.buttons.img,hasXls:!1,isFullscreen:C.value,titles:{...t.value.userOptions.buttonTitles},chartElement:w.value,position:t.value.userOptions.position,onToggleFullscreen:he,onGeneratePdf:f(V),onGenerateImage:f(q)},be({_:2},[e.$slots.optionPdf?{name:"optionPdf",fn:j(()=>[$(e.$slots,"optionPdf",{},void 0,!0)]),key:"0"}:void 0,e.$slots.optionImg?{name:"optionImg",fn:j(()=>[$(e.$slots,"optionImg",{},void 0,!0)]),key:"1"}:void 0,e.$slots.optionFullscreen?{name:"optionFullscreen",fn:j(({toggleFullscreen:l,isFullscreen:u})=>[$(e.$slots,"optionFullscreen",H(J({toggleFullscreen:l,isFullscreen:u})),void 0,!0)]),key:"2"}:void 0]),1032,["backgroundColor","color","isPrinting","isImaging","uid","hasPdf","hasImg","hasFullscreen","isFullscreen","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):k("",!0),O.value?(i(),n("svg",{key:2,xmlns:f(Be),class:z([{"vue-data-ui-fullscreen--on":C.value,"vue-data-ui-fulscreen--off":!C.value},"relation-circle"]),viewBox:`0 0 ${r.value.width<=0?10:r.value.width} ${r.value.height<=0?10:r.value.height}`,width:"100%",style:"user-select:none; background:transparent"},[Ce(qe),_e("circle",{cx:(r.value.width<=0?1e-4:r.value.width)/2,cy:(r.value.height<=0?1e-4:r.value.height)/2+t.value.style.circle.offsetY,r:y.value<=0?1e-4:y.value,stroke:t.value.style.circle.stroke,"stroke-width":t.value.style.circle.strokeWidth,fill:"transparent",class:"main-circle"},null,8,Xe),re.value?(i(),n("g",Ue,[(i(!0),n(_,null,P(h.value,(l,u)=>(i(),n("path",{key:`relation_${u}`,style:x(D(l)),stroke:W(l),class:z(["relation",{"vue-ui-relation-circle-selected":o.value.hasOwnProperty("id")&&d.value.includes(l.id)}]),d:`M${l.x1},${l.y1} C${l.x1},${l.y1} ${r.value.width/2},${r.value.height/2+t.value.style.circle.offsetY} ${l.x2},${l.y2}`,fill:"none","stroke-width":Q(l),"stroke-linecap":"round"},null,14,We))),128))])):(i(),n("g",De,[(i(!0),n(_,null,P(h.value,(l,u)=>(i(),n("line",{key:`relation_${u}`,stroke:W(l),style:x(D(l)),x1:l.x1,x2:l.x2,y1:l.y1,y2:l.y2,class:z({"vue-ui-relation-circle-selected":o.value.hasOwnProperty("id")&&d.value.includes(l.id)}),"stroke-linecap":"round"},null,14,Ke))),128))])),(i(!0),n(_,null,P(g.value,(l,u)=>(i(),n("text",{key:`plot_text_${u}`,"text-anchor":de(l),transform:fe(l),x:ge(l),y:l.y+5,onClick:p=>K(l),class:"vue-ui-relation-circle-legend","transform-origin":"start","font-weight":o.value.id===l.id?"900":"400",style:x(`font-family:${t.value.style.fontFamily};${ye(l)}`),"font-size":t.value.style.labels.fontSize,fill:t.value.style.labels.color},Pe(l.label),13,Qe))),128)),(i(!0),n(_,null,P(g.value,(l,u)=>(i(),n("circle",{cx:l.x,cy:l.y,key:`plot_${u}`,style:x(ve(l)),class:"vue-ui-relation-circle-plot",fill:t.value.style.plot.color,onClick:p=>K(l),r:t.value.style.plot.radius},null,12,He))),128)),$(e.$slots,"svg",{svg:r.value},void 0,!0)],10,Ye)):k("",!0),e.$slots.watermark?(i(),n("div",Je,[$(e.$slots,"watermark",H(J({isPrinting:f(S)||f(G)})),void 0,!0)])):k("",!0),O.value?k("",!0):(i(),E(Ve,{key:4,config:{type:"relationCircle",style:{backgroundColor:t.value.style.backgroundColor,relationCircle:{color:"#CCCCCC"}}}},null,8,["config"]))],12,Te))}},ul=Re(Ze,[["__scopeId","data-v-0d6438fc"]]);export{ul as default};