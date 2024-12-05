import{o as Ye,L as He,G as Ue,R as Xe,e as B,X as De,K as oe,q as Ke,a as Qe,n as M,b as x,Q as Je,c as Ze,p as el,Y as ll,x as al,j as tl,H as ol,$ as ul,N as sl,O as rl}from"../chart.md.hi_nZSnT.js";import{O as il,M as nl}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as vl}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as cl,i as dl}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import{E as hl}from"./Tooltip-CICAYyQj.DC7pN5Ho.js";import{W as yl}from"./DataTable-DL2agEJ3.DwhyhpBD.js";import{C as pl}from"./Legend-DXLiSLHd.5wpQgPWV.js";import gl from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import fl from"./vue-ui-accordion-D_1fE5EF.ggAyum2g.js";import{c as _e}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as bl}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as ml}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as d,p as v,q as ze,v as wl,Y as xl,o as s,c as i,b as A,e as p,aj as kl,w as f,r as b,ak as H,al as U,k as h,n as Le,N as J,G as Ne,j as m,F as _,C as j,t as z,a as Fe,P as $l,am as Cl,an as Il}from"./framework.BaNfDZ-f.js";import"./Shape-CO_Ak9Zm.UkrUmJI7.js";const Pe=G=>(Cl("data-v-a0574c0d"),G=G(),Il(),G),Tl=["id"],_l=["xmlns","viewBox"],zl=["id"],Ll=["stop-color"],Nl=["stop-color"],Fl=["id"],Pl=Pe(()=>m("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2},null,-1)),Ol=Pe(()=>m("feColorMatrix",{type:"saturate",values:"0"},null,-1)),Bl=[Pl,Ol],Sl=["x","y","height","width"],Vl=["height","width"],Ml=["rx","x","y","height","width","stroke","stroke-width","filter"],Al=["rx","x","y","height","width","fill","stroke","stroke-width","filter"],jl=["x","y","height","width","filter"],Gl={key:0},Wl={key:1},El={key:2},Rl={key:3},ql=["onMouseover","x","y","height","width"],Yl={key:3,class:"vue-data-ui-watermark"},Hl=["onClick"],Ul={key:0},Xl={key:1},Dl=["innerHTML"],Kl={__name:"vue-ui-waffle",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}}},emits:["selectLegend"],setup(G,{expose:Oe,emit:Be}){const g=G,{vue_ui_waffle:Se}=Ye(),X=d(()=>!!g.dataset&&g.dataset.length),L=v(He()),Ve=v(null),Z=v(!1),ee=v(""),S=v(null),ue=v(0),W=v(null),se=v(null),re=v(null),ie=v(0),ne=v(0),ve=v(0),e=d({get:()=>ce(),set:l=>l});function ce(){const l=_e({userConfig:g.config,defaultConfig:Se});return l.theme?{..._e({userConfig:Ue.vue_ui_waffle[l.theme]||g.config,defaultConfig:l}),customPalette:Xe[l.theme]||B}:l}ze(()=>g.config,l=>{e.value=ce(),de(),ie.value+=1,ne.value+=1,ve.value+=1},{deep:!0});const D=v(null);function de(){if(De(g.dataset)?oe({componentName:"VueUiWaffle",type:"dataset"}):g.dataset.forEach((l,o)=>{Ke({datasetObject:l,requiredAttributes:["name","values"]}).forEach(a=>{oe({componentName:"VueUiWaffle",type:"datasetSerieAttribute",property:a,index:o})})}),e.value.responsive){const l=il(()=>{const{width:o,height:a}=nl({chart:W.value,title:e.value.style.chart.title.text?se.value:null,legend:e.value.style.chart.legend.show?re.value:null});N.value.width=o,N.value.height=a,k.value.width=o,k.value.height=a});D.value=new ResizeObserver(l),D.value.observe(W.value.parentNode)}}wl(()=>{de()}),xl(()=>{D.value&&D.value.disconnect()});const{isPrinting:he,isImaging:ye,generatePdf:pe,generateImage:ge}=cl({elementId:`vue-ui-waffle_${L.value}`,fileName:e.value.style.chart.title.text||"vue-ui-waffle"}),fe=d(()=>Qe(e.value.customPalette)),I=v({showTable:e.value.table.show,showTooltip:e.value.style.chart.tooltip.show}),N=v({height:512,width:512}),k=v({top:0,left:0,height:512,width:512}),F=d(()=>(k.value.width-e.value.style.chart.layout.grid.size*e.value.style.chart.layout.grid.spaceBetween)/e.value.style.chart.layout.grid.size),P=d(()=>(k.value.height-e.value.style.chart.layout.grid.size*e.value.style.chart.layout.grid.spaceBetween)/e.value.style.chart.layout.grid.size),E=d(()=>k.value.width/e.value.style.chart.layout.grid.size),K=d(()=>k.value.height/e.value.style.chart.layout.grid.size);function be(l){const o=e.value.style.chart.layout.grid.size*e.value.style.chart.layout.grid.size,a=l.reduce((w,te)=>w+te,0),t=l.map(w=>w/a*o),u=t.map(Math.floor),n=t.map(w=>w%1);let T=o-u.reduce((w,te)=>w+te,0);for(;T>0;){let w=n.indexOf(Math.max(...n));u[w]+=1,n[w]=0,T-=1}return u}function me(){return g.dataset.map((l,o)=>({...l,color:tl(l.color)||fe.value[o]||B[o]||B[o%B.length],uid:`serie_${o}`,absoluteIndex:o}))}const we=d(()=>me()),c=v(we.value);ze(()=>g.dataset,l=>{c.value=me()},{deep:!0});const Me=d(()=>{const l=c.value.filter((o,a)=>!y.value.includes(o.uid)).map((o,a)=>(o.values||[]).reduce((t,u)=>t+u,0));return be(l)}),Ae=d(()=>{const l=c.value.map((o,a)=>(o.values||[]).reduce((t,u)=>t+u));return be(l)}),R=d(()=>(g.dataset.forEach((l,o)=>{[null,void 0].includes(l.values)&&oe({componentName:"VueUiWaffle",type:"datasetSerieAttribute",property:"values (number[])",index:o})}),c.value.filter((l,o)=>!y.value.includes(l.uid)).map((l,o)=>({absoluteIndex:l.absoluteIndex,uid:l.uid,name:l.name,color:l.color,value:(l.values||[]).reduce((a,t)=>a+t,0),absoluteValues:l.values||[],proportion:Me.value[o]})))),je=d(()=>c.value.map((l,o)=>({absoluteIndex:l.absoluteIndex,uid:l.uid,name:l.name,color:l.color,value:(l.values||[]).reduce((a,t)=>a+t,0),absoluteValues:l.values||[],proportion:Ae.value[o]})));function Ge(){return je.value.map(l=>({name:l.name,color:l.color,value:l.value,proportion:l.proportion}))}const We=d(()=>{let l=0;return R.value.map((o,a)=>{const t=l,u=t+o.proportion,n=[];for(let T=Math.floor(t);T<Math.floor(u);T+=1)n.push(T);return l=u,{...o,start:t,rects:n}})}),r=d(()=>We.value.flatMap((l,o)=>l.rects.map((a,t)=>({isFirst:t===0,isLongEnough:a.length>2,name:l.name,color:l.color,value:l.value,serieIndex:o,absoluteStartIndex:t<3,serieId:l.uid,...l}))).map((l,o)=>({...l,isAbsoluteFirst:o%e.value.style.chart.layout.grid.size===0}))),q=d(()=>{const l=[];for(let o=0;o<e.value.style.chart.layout.grid.size;o+=1)for(let a=0;a<e.value.style.chart.layout.grid.size;a+=1)l.push({isStartOfLine:a===0,position:e.value.style.chart.layout.grid.vertical?o:a,x:(e.value.style.chart.layout.grid.vertical?o:a)*(F.value+e.value.style.chart.layout.grid.spaceBetween),y:(e.value.style.chart.layout.grid.vertical?a:o)*(P.value+e.value.style.chart.layout.grid.spaceBetween)+k.value.top});return l}),y=v([]),O=v(!1),xe=v(null),ke=v(null);function $e(l){if(!e.value.useAnimation){y.value.includes(l)?y.value=y.value.filter(t=>t!==l):y.value.length<V.value.length-1&&V.value.length>1&&y.value.push(l);return}const o=we.value.find(t=>t.uid===l).values.reduce((t,u)=>t+u,0);let a=c.value.find(t=>t.uid===l).values.reduce((t,u)=>t+u,0);if(y.value.includes(l)){let t=function(){a>u?(cancelAnimationFrame(xe.value),c.value=c.value.map((n,T)=>n.uid===l?{...n,values:[u]}:n),O.value=!1):(O.value=!0,a+=u*.025,c.value=c.value.map((n,T)=>n.uid===l?{...n,values:[a]}:n),xe.value=requestAnimationFrame(t))};y.value=y.value.filter(n=>n!==l);const u=o;t()}else if(y.value.length<V.value.length-1&&V.value.length>1){let t=function(){a<.1?(cancelAnimationFrame(ke.value),y.value.push(l),c.value=c.value.map((u,n)=>u.uid===l?{...u,values:[0]}:u),O.value=!1):(O.value=!0,a/=1.5,c.value=c.value.map((u,n)=>u.uid===l?{...u,values:[a]}:u),ke.value=requestAnimationFrame(t))};t()}Be("selectLegend",R.value.map(t=>({name:t.name,color:t.color,value:t.value,proportion:t.proportion/Math.pow(e.value.style.chart.layout.grid.size,2)})))}const V=d(()=>c.value.map((l,o)=>({name:l.name,color:l.color||fe[o]||B[o]||B[o%B.length],value:(l.values||[]).reduce((a,t)=>a+t,0),uid:l.uid,shape:"square"})).map((l,o)=>({...l,proportion:l.value/c.value.map(a=>(a.values||[]).reduce((t,u)=>t+u,0)).reduce((a,t)=>a+t,0),opacity:y.value.includes(l.uid)?.5:1,segregate:()=>$e(l.uid),isSegregated:y.value.includes(l.uid)}))),Ee=d(()=>({cy:"waffle-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),$=d(()=>R.value.map(l=>l.value).reduce((l,o)=>l+o,0)),le=v(null);function Re(l){if(y.value.length===g.dataset.length)return;const o=r.value[l];le.value={datapoint:o,seriesIndex:o.absoluteIndex,series:c.value,config:e.value},Z.value=!0,S.value=r.value[l].serieIndex;const a=e.value.style.chart.tooltip.customFormat;if(ol(a)&&ul(()=>a({seriesIndex:r.value[l].absoluteIndex,datapoint:o,series:c.value,config:e.value})))ee.value=a({seriesIndex:r.value[l].absoluteIndex,datapoint:o,series:c.value,config:e.value});else{let t="";if(t+=`<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${o.name}</div>`,t+=`<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" stroke="none" rx="1" fill="${o.color}" /></svg>`,e.value.style.chart.tooltip.showValue&&(t+=`<b>${M(e.value.style.chart.layout.labels.dataLabels.formatter,o.value,x({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:o.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.tooltip.roundingValue}),{datapoint:o,seriesIndex:r.value[l].absoluteIndex,series:c.value})}</b>`),e.value.style.chart.tooltip.showPercentage){const u=x({v:o.value/$.value*100,s:"%",r:e.value.style.chart.tooltip.roundingPercentage});e.value.style.chart.tooltip.showValue?t+=`<span>(${u})</span></div>`:t+=`<b>${u}%</b></div>`}ee.value=t}}const C=d(()=>{const l=R.value.map(a=>({name:a.name,color:a.color})),o=R.value.map(a=>a.value);return{head:l,body:o}});function ae(l){return e.value.useBlurOnHover&&![null,void 0].includes(S.value)&&S.value!==l?`url(#blur_${L.value})`:""}function Ce(){$l(()=>{const l=C.value.head.map((t,u)=>[[t.name],[C.value.body[u]],[isNaN(C.value.body[u]/$.value)?"-":C.value.body[u]/$.value*100]]),o=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[[""],["val"],["%"]]].concat(l),a=sl(o);rl({csvContent:a,title:e.value.style.chart.title.text||"vue-ui-waffle"})})}const Q=d(()=>{const l=[' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',M(e.value.style.chart.layout.labels.dataLabels.formatter,$.value,x({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:$.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.table.td.roundingValue})),"100%"],o=C.value.head.map((u,n)=>[{color:u.color,name:u.name},M(e.value.style.chart.layout.labels.dataLabels.formatter,C.value.body[n],x({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:C.value.body[n],s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.table.td.roundingValue})),isNaN(C.value.body[n]/$.value)?"-":x({v:C.value.body[n]/$.value*100,s:"%",r:e.value.table.td.roundingPercentage})]),a={th:{backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline},td:{backgroundColor:e.value.table.td.backgroundColor,color:e.value.table.td.color,outline:e.value.table.td.outline},shape:"square",breakpoint:e.value.table.responsiveBreakpoint},t=[e.value.table.columnNames.series,e.value.table.columnNames.value,e.value.table.columnNames.percentage];return{head:l,body:o,config:a,colNames:t}}),Y=v(!1);function qe(l){Y.value=l,ue.value+=1}function Ie(){I.value.showTable=!I.value.showTable}function Te(){I.value.showTooltip=!I.value.showTooltip}return Oe({getData:Ge,generatePdf:pe,generateCsv:Ce,generateImage:ge,toggleTable:Ie,toggleTooltip:Te}),(l,o)=>(s(),i("div",{class:Le(`vue-ui-waffle ${Y.value?"vue-data-ui-wrapper-fullscreen":""}`),ref_key:"waffleChart",ref:W,id:`vue-ui-waffle_${L.value}`,style:J(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text?"":"padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive?"height: 100%":""}`)},[e.value.style.chart.title.text?(s(),i("div",{key:0,ref_key:"chartTitle",ref:se,style:"width:100%;background:transparent;padding-bottom:12px"},[(s(),A(vl,{key:`title_${ie.value}`,config:{title:{cy:"waffle-title",...e.value.style.chart.title},subtitle:{cy:"waffle-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):p("",!0),e.value.userOptions.show&&X.value?(s(),A(dl,{ref_key:"details",ref:Ve,key:`user_options_${ue.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isPrinting:h(he),isImaging:h(ye),uid:L.value,hasTooltip:e.value.userOptions.buttons.tooltip&&e.value.style.chart.tooltip.show,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasXls:e.value.userOptions.buttons.csv,hasTable:e.value.userOptions.buttons.table,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:Y.value,isTooltip:I.value.showTooltip,titles:{...e.value.userOptions.buttonTitles},chartElement:W.value,position:e.value.userOptions.position,onToggleFullscreen:qe,onGeneratePdf:h(pe),onGenerateCsv:Ce,onGenerateImage:h(ge),onToggleTable:Ie,onToggleTooltip:Te},kl({_:2},[l.$slots.optionTooltip?{name:"optionTooltip",fn:f(()=>[b(l.$slots,"optionTooltip",{},void 0,!0)]),key:"0"}:void 0,l.$slots.optionPdf?{name:"optionPdf",fn:f(()=>[b(l.$slots,"optionPdf",{},void 0,!0)]),key:"1"}:void 0,l.$slots.optionCsv?{name:"optionCsv",fn:f(()=>[b(l.$slots,"optionCsv",{},void 0,!0)]),key:"2"}:void 0,l.$slots.optionImg?{name:"optionImg",fn:f(()=>[b(l.$slots,"optionImg",{},void 0,!0)]),key:"3"}:void 0,l.$slots.optionTable?{name:"optionTable",fn:f(()=>[b(l.$slots,"optionTable",{},void 0,!0)]),key:"4"}:void 0,l.$slots.optionFullscreen?{name:"optionFullscreen",fn:f(({toggleFullscreen:a,isFullscreen:t})=>[b(l.$slots,"optionFullscreen",H(U({toggleFullscreen:a,isFullscreen:t})),void 0,!0)]),key:"5"}:void 0]),1032,["backgroundColor","color","isPrinting","isImaging","uid","hasTooltip","hasPdf","hasImg","hasXls","hasTable","hasFullscreen","isFullscreen","isTooltip","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):p("",!0),X.value?(s(),i("svg",{key:2,xmlns:h(Je),class:Le({"vue-data-ui-fullscreen--on":Y.value,"vue-data-ui-fulscreen--off":!Y.value}),viewBox:`0 0 ${N.value.width<=0?10:N.value.width} ${N.value.height<=0?10:N.value.height}`,style:J(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)},[Ne(bl),m("defs",null,[(s(!0),i(_,null,j(r.value,(a,t)=>(s(),i("radialGradient",{cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%",id:`gradient_${L.value}_${t}`},[m("stop",{offset:"0%","stop-color":h(Ze)(h(el)(a.color,.05),100-e.value.style.chart.layout.rect.gradientIntensity)},null,8,Ll),m("stop",{offset:"100%","stop-color":a.color},null,8,Nl)],8,zl))),256))]),m("defs",null,[m("filter",{id:`blur_${L.value}`,x:"-50%",y:"-50%",width:"200%",height:"200%"},Bl,8,Fl)]),e.value.useCustomCells&&r.value.length?(s(!0),i(_,{key:0},j(q.value,(a,t)=>(s(),i("foreignObject",{x:a.x,y:a.y,height:P.value<=0?1e-4:P.value,width:F.value<=0?1e-4:F.value,class:"vue-ui-waffle-custom-cell-foreignObject"},[b(l.$slots,"cell",H(U({cell:{...a,color:r.value[t].color,...r.value[t]},isSelected:[null,void 0].includes(S.value)?!0:r.value[t].serieIndex===S.value})),void 0,!0)],8,Sl))),256)):p("",!0),!r.value.length&&!e.value.useCustomCells?(s(),i("rect",{key:1,x:12,y:12,height:k.value.height-24,width:k.value.width-24,rx:3,fill:"none",stroke:"black"},null,8,Vl)):r.value.length&&!e.value.useCustomCells?(s(),i(_,{key:2},[(s(!0),i(_,null,j(q.value,(a,t)=>(s(),i("rect",{rx:e.value.style.chart.layout.rect.rounded?e.value.style.chart.layout.rect.rounding:0,x:a.x+e.value.style.chart.layout.grid.spaceBetween/2,y:a.y+e.value.style.chart.layout.grid.spaceBetween/2,height:P.value<=0?1e-4:P.value,width:F.value<=0?1e-4:F.value,fill:"white",stroke:e.value.style.chart.layout.rect.stroke,"stroke-width":e.value.style.chart.layout.rect.strokeWidth,filter:ae(r.value[t].serieIndex)},null,8,Ml))),256)),(s(!0),i(_,null,j(q.value,(a,t)=>(s(),i("rect",{rx:e.value.style.chart.layout.rect.rounded?e.value.style.chart.layout.rect.rounding:0,x:a.x+e.value.style.chart.layout.grid.spaceBetween/2,y:a.y+e.value.style.chart.layout.grid.spaceBetween/2,height:P.value<=0?1e-4:P.value,width:F.value<=0?1e-4:F.value,fill:e.value.style.chart.layout.rect.useGradient&&e.value.style.chart.layout.rect.gradientIntensity>0?`url(#gradient_${L.value}_${t})`:r.value[t].color,stroke:e.value.style.chart.layout.rect.stroke,"stroke-width":e.value.style.chart.layout.rect.strokeWidth,filter:ae(r.value[t].serieIndex)},null,8,Al))),256))],64)):p("",!0),(s(!0),i(_,null,j(q.value,(a,t)=>(s(),i(_,null,[r.value.length&&!O.value&&!e.value.style.chart.layout.grid.vertical&&e.value.style.chart.layout.labels.captions.show&&(r.value[t].isFirst&&a.position<e.value.style.chart.layout.grid.size-2||r.value[t].isAbsoluteFirst&&t%e.value.style.chart.layout.grid.size===0&&r.value[t].absoluteStartIndex)?(s(),i("foreignObject",{key:0,x:a.x+e.value.style.chart.layout.labels.captions.offsetX+e.value.style.chart.layout.grid.spaceBetween/2,y:a.y+e.value.style.chart.layout.labels.captions.offsetY+e.value.style.chart.layout.grid.spaceBetween/2,height:K.value<=0?1e-4:K.value,width:E.value*e.value.style.chart.layout.grid.size<=0?1e-4:E.value*e.value.style.chart.layout.grid.size,filter:ae(r.value[t].serieIndex)},[m("div",{class:"vue-ui-waffle-caption",style:J(`height: 100%; width: 100%; font-size:${e.value.style.chart.layout.labels.captions.fontSize}px;display:flex;align-items:center;justify-content:flex-start;padding: 0 ${E.value/12}px;color:${h(al)(r.value[t].color)};gap:2px`)},[e.value.style.chart.layout.labels.captions.showSerieName?(s(),i("span",Gl,z(e.value.style.chart.layout.labels.captions.serieNameAbbreviation?h(ll)({source:r.value[t].name,length:e.value.style.chart.layout.labels.captions.serieNameMaxAbbreviationSize}):r.value[t].name)+": ",1)):p("",!0),e.value.style.chart.layout.labels.captions.showPercentage?(s(),i("span",Wl,z(h(x)({v:r.value[t].proportion,s:"%",r:e.value.style.chart.layout.labels.captions.roundingPercentage})),1)):p("",!0),e.value.style.chart.layout.labels.captions.showPercentage&&e.value.style.chart.layout.labels.captions.showValue?(s(),i("span",El," ("+z(h(M)(e.value.style.chart.layout.labels.dataLabels.formatter,r.value[t].value,h(x)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:r.value[t].value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.captions.roundingValue}),{datapoint:r.value[t],position:a}))+") ",1)):p("",!0),!e.value.style.chart.layout.labels.captions.showPercentage&&e.value.style.chart.layout.labels.captions.showValue?(s(),i("span",Rl,z(h(M)(e.value.style.chart.layout.labels.dataLabels.formatter,r.value[t].value,h(x)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:r.value[t].value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.captions.roundingValue}),{datapoint:r.value[t],position:a})),1)):p("",!0)],4)],8,jl)):p("",!0)],64))),256)),(s(!0),i(_,null,j(q.value,(a,t)=>(s(),i("rect",{onMouseover:u=>Re(t),onMouseleave:o[0]||(o[0]=u=>{Z.value=!1,S.value=null}),x:a.x+e.value.style.chart.layout.grid.spaceBetween/2,y:a.y+e.value.style.chart.layout.grid.spaceBetween/2,height:K.value<=0?1e-4:K.value,width:E.value<=0?1e-4:E.value,fill:"transparent",stroke:"none"},null,40,ql))),256)),b(l.$slots,"svg",{svg:N.value},void 0,!0)],14,_l)):p("",!0),l.$slots.watermark?(s(),i("div",Yl,[b(l.$slots,"watermark",H(U({isPrinting:h(he)||h(ye)})),void 0,!0)])):p("",!0),X.value?p("",!0):(s(),A(gl,{key:4,config:{type:"waffle",style:{backgroundColor:e.value.style.chart.backgroundColor,waffle:{color:"#CCCCCC"}}}},null,8,["config"])),m("div",{ref_key:"chartLegend",ref:re},[e.value.style.chart.legend.show?(s(),A(pl,{key:`legend_${ve.value}`,legendSet:V.value,config:Ee.value,onClickMarker:o[1]||(o[1]=({legend:a})=>$e(a.uid))},{item:f(({legend:a})=>[m("div",{onClick:t=>a.segregate(),style:J(`opacity:${y.value.includes(a.uid)?.5:1}`)},[Fe(z(a.name)+": "+z(h(M)(e.value.style.chart.layout.labels.dataLabels.formatter,a.value,h(x)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:a.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.legend.roundingValue,isAnimating:O.value}),{datapoint:a}))+" ",1),y.value.includes(a.uid)?(s(),i("span",Xl," ( - % ) ")):(s(),i("span",Ul," ("+z(isNaN(a.value/$.value)?"-":h(x)({v:a.value/$.value*100,s:"%",r:e.value.style.chart.legend.roundingPercentage,isAnimating:O.value}))+") ",1))],12,Hl)]),_:1},8,["legendSet","config"])):b(l.$slots,"legend",{key:1,legend:V.value},void 0,!0)],512),Ne(hl,{show:I.value.showTooltip&&Z.value&&y.value.length<g.dataset.length,backgroundColor:e.value.style.chart.tooltip.backgroundColor,color:e.value.style.chart.tooltip.color,borderRadius:e.value.style.chart.tooltip.borderRadius,borderColor:e.value.style.chart.tooltip.borderColor,borderWidth:e.value.style.chart.tooltip.borderWidth,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity,position:e.value.style.chart.tooltip.position,offsetY:e.value.style.chart.tooltip.offsetY,parent:W.value,content:ee.value,isCustom:e.value.style.chart.tooltip.customFormat&&typeof e.value.style.chart.tooltip.customFormat=="function",fontSize:e.value.style.chart.tooltip.fontSize},{"tooltip-before":f(()=>[b(l.$slots,"tooltip-before",H(U({...le.value})),void 0,!0)]),"tooltip-after":f(()=>[b(l.$slots,"tooltip-after",H(U({...le.value})),void 0,!0)]),_:3},8,["show","backgroundColor","color","borderRadius","borderColor","borderWidth","backgroundOpacity","position","offsetY","parent","content","isCustom","fontSize"]),X.value?(s(),A(fl,{key:5,hideDetails:"",config:{open:I.value.showTable,maxHeight:1e4,body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:f(()=>[(s(),A(yl,{key:`table_${ne.value}`,colNames:Q.value.colNames,head:Q.value.head,body:Q.value.body,config:Q.value.config,title:`${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text?` : ${e.value.style.chart.title.subtitle.text}`:""}`,onClose:o[2]||(o[2]=a=>I.value.showTable=!1)},{th:f(({th:a})=>[m("div",{innerHTML:a,style:{display:"flex","align-items":"center"}},null,8,Dl)]),td:f(({td:a})=>[Fe(z(a.name||a),1)]),_:1},8,["colNames","head","body","config","title"]))]),_:1},8,["config"])):p("",!0)],14,Tl))}},ca=ml(Kl,[["__scopeId","data-v-a0574c0d"]]);export{ca as default};