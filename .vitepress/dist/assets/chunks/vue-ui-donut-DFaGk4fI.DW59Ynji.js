import{o as Ue,X as Ke,K as Xe,q as Qe,L as Je,a as Ze,j as Ne,e as D,g as el,u as ll,b as _,Q as tl,c as J,p as al,B as ol,D as F,n as T,z as p,P as Z,G as ul,R as sl,H as il,N as rl,O as nl}from"../chart.md.hi_nZSnT.js";import{O as vl,M as cl}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as dl}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as hl,i as yl}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import{W as fl}from"./DataTable-DL2agEJ3.DwhyhpBD.js";import{E as pl}from"./Tooltip-CICAYyQj.DC7pN5Ho.js";import{C as gl}from"./Legend-DXLiSLHd.5wpQgPWV.js";import bl from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import ml from"./vue-ui-accordion-D_1fE5EF.ggAyum2g.js";import{c as Oe}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as wl}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as xl}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as w,p as d,v as kl,Y as $l,q as Be,o,c as i,r as x,b as W,e as v,aj as Cl,w as L,ak as ee,al as le,k as s,n as re,N as Y,G as Ge,j as h,F as g,C as N,t as k,a as Ae,P as Pl,am as _l,an as Fl}from"./framework.BaNfDZ-f.js";import"./Shape-CO_Ak9Zm.UkrUmJI7.js";const Ll=H=>(_l("data-v-159f668e"),H=H(),Fl(),H),zl=["id"],Sl=["xmlns","viewBox"],Tl={key:0},Yl=["id"],Il=["stop-color"],Xl=["offset","stop-color"],Nl=["offset","stop-color"],Ol=["stop-color"],Bl={key:1},Gl=["id","cx","cy"],Al=["stop-color","stop-opacity"],Ml=["stop-color"],Vl=["id"],Dl=["id"],jl=Ll(()=>h("feColorMatrix",{type:"saturate",values:"0"},null,-1)),Wl=["id"],Hl=["flood-color"],Rl=["id"],ql=["flood-color"],El=["d","stroke","filter"],Ul=["x1","y1","x2","y2","stroke","filter"],Kl=["cx","cy","r","fill","filter"],Ql=["stroke","d"],Jl=["d","fill","stroke","stroke-width","filter"],Zl={key:0},et=["stroke","d"],lt={key:0},tt=["d","stroke","stroke-width","filter"],at=["d","fill","stroke","stroke-width","filter"],ot={key:1},ut=["cx","cy","r","fill","stroke","stroke-width"],st=["cx","cy","r","stroke"],it=["cx","cy","r","fill"],rt={key:0},nt=["d","fill","onMouseenter","onClick"],vt={key:1},ct=["cx","cy","r","fill"],dt=["x","y","fill","font-size"],ht=["x","y","fill","font-size"],yt=["x","y","fill","font-size"],ft=["x","y","fill","font-size"],pt=["filter"],gt={key:0},bt=["x","y"],mt={key:1},wt=["cx","cy","fill","stroke","filter","onClick"],xt=["cx","cy","fill","stroke","filter","onClick"],kt=["text-anchor","x","y","fill","font-size","onClick"],$t=["text-anchor","x","y","fill","font-size","onClick"],Ct=["text-anchor","x","y","fill","font-size","onClick"],Pt=["text-anchor","x","y","fill","font-size","onClick"],_t={key:2},Ft=["x","y","width"],Lt=["x","y","width"],zt={key:3,class:"vue-data-ui-watermark"},St=["onClick"],Tt={key:0,style:{"font-variant-numeric":"tabular-nums"}},Yt={key:1},It=["innerHTML"],Xt={__name:"vue-ui-donut",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}}},emits:["selectLegend","selectDatapoint"],setup(H,{expose:Me,emit:ne}){const I=H,{vue_ui_donut:Ve}=Ue(),R=w({get(){return!!I.dataset&&I.dataset.length},set(t){return t}}),q=d(null),ve=d(null),ce=d(null),te=d(null),de=d(0),he=d(0),ye=d(0);kl(()=>{fe()}),$l(()=>{te.value&&te.value.disconnect()});function fe(){if(Ke(I.dataset)?Xe({componentName:"VueUiDonut",type:"dataset"}):I.dataset.forEach((t,r)=>{Qe({datasetObject:t,requiredAttributes:["name","values"]}).forEach(l=>{R.value=!1,Xe({componentName:"VueUiDonut",type:"datasetSerieAttribute",property:l,index:r})})}),e.value.responsive){const t=vl(()=>{const{width:r,height:l}=cl({chart:q.value,title:e.value.style.chart.title.text?ve.value:null,legend:e.value.style.chart.legend.show?ce.value:null});u.value.width=r,u.value.height=l});te.value=new ResizeObserver(t),te.value.observe(q.value.parentNode)}}const b=d(Je()),De=d(null),ae=d(!1),ue=d(""),P=d(null),pe=d(0);function ge(){const t=Oe({userConfig:I.config,defaultConfig:Ve});return t.theme?{...Oe({userConfig:ul.vue_ui_donut[t.theme]||I.config,defaultConfig:t}),customPalette:sl[t.theme]||D}:t}const e=w({get:()=>ge(),set:t=>t});Be(()=>I.config,t=>{e.value=ge(),fe(),de.value+=1,he.value+=1,ye.value+=1},{deep:!0});const{isPrinting:be,isImaging:me,generatePdf:we,generateImage:xe}=hl({elementId:`donut__${b.value}`,fileName:e.value.style.chart.title.text||"vue-ui-donut"}),ke=w(()=>Ze(e.value.customPalette)),y=d({dataLabels:{show:e.value.style.chart.layout.labels.dataLabels.show},showTable:e.value.table.show,showTooltip:e.value.style.chart.tooltip.show}),u=d({height:360,width:512}),E=w(()=>{const t=e.value.style.chart.layout.donut.strokeWidth/512,r=u.value.width*t,l=r>$.value?$.value:r;return l<24?24:l}),M=w(()=>I.dataset.map((t,r)=>({name:t.name,color:Ne(t.color)||ke.value[r]||D[r]||D[r%D.length],value:t.values.reduce((l,a)=>l+a,0),absoluteValues:t.values,comment:t.comment||""}))),z=d(M.value);Be(()=>M.value,t=>z.value=t);function je(){return M.value.map(t=>({name:t.name,color:t.color,value:t.value}))}const X=d([]),$e=d(null),Ce=d(null),V=d(!1);function Pe(t){const r=M.value.find((a,n)=>n===t);let l=z.value.find((a,n)=>n===t).value;if(X.value.includes(t)){let a=function(){l>n?(cancelAnimationFrame($e.value),z.value=z.value.map((m,O)=>t===O?{...m,value:n}:m),V.value=!1):(V.value=!0,l+=n*.025,z.value=z.value.map((m,O)=>t===O?{...m,value:l}:m),$e.value=requestAnimationFrame(a))};X.value=X.value.filter(m=>m!==t);const n=r.value;a()}else if(X.value.length<M.value.length-1){let a=function(){l<.1?(cancelAnimationFrame(Ce.value),X.value.push(t),z.value=z.value.map((n,m)=>t===m?{...n,value:0}:n),V.value=!1):(V.value=!0,l/=1.1,z.value=z.value.map((n,m)=>t===m?{...n,value:l}:n),Ce.value=requestAnimationFrame(a))};a()}ne("selectLegend",B.value.map(a=>({name:a.name,color:a.color,value:a.value})))}const B=w(()=>(z.value.forEach((t,r)=>{if([null,void 0].includes(t.values))return{...t,values:[]}}),z.value.map((t,r)=>({...t,seriesIndex:r})).filter((t,r)=>!X.value.includes(r)))),_e=w(()=>I.dataset.map((t,r)=>({name:t.name,color:Ne(t.color)||ke.value[r]||D[r]||D[r%D.length],value:(t.values||[]).reduce((l,a)=>l+a,0),shape:"circle"})).map((t,r)=>({...t,proportion:t.value/I.dataset.map(l=>(l.values||[]).reduce((a,n)=>a+n,0)).reduce((l,a)=>l+a,0),opacity:X.value.includes(r)?.5:1,segregate:()=>Pe(r),isSegregated:X.value.includes(r)}))),We=w(()=>({cy:"donut-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),$=w(()=>{const t=Math.min(u.value.width/3,u.value.height/3);return t<55?55:t}),f=w(()=>el({series:B.value},u.value.width/2,u.value.height/2,$.value,$.value,1.99999,2,1,360,105.25,E.value)),c=w(()=>{const t=Math.max(...B.value.map(l=>l.value)),r=B.value.map(l=>l.value/t);return ll({series:r,center:{x:u.value.width/2,y:u.value.height/2},maxRadius:Math.min(u.value.width,u.value.height)/3})});function j(t){return t.x>u.value.width/2+6?"start":t.x<u.value.width/2-6?"end":"middle"}function He(t){return t.middlePoint.y>u.value.height/2?F({initX:t.middlePoint.x,initY:t.middlePoint.y,offset:100,centerX:u.value.width/2,centerY:u.value.height/2}).y:F({initX:t.middlePoint.x,initY:t.middlePoint.y,offset:0,centerX:u.value.width/2,centerY:u.value.height/2}).y-100}function S(t){return t.proportion*100>e.value.style.chart.layout.labels.dataLabels.hideUnderValue}function se(t,r){const l=t.value/Re(r);return isNaN(l)?0:T(e.value.style.chart.layout.labels.percentage.formatter,l*100,_({v:l*100,s:"%",r:e.value.style.chart.layout.labels.percentage.rounding}),{datapoint:t})}function Re(t){return[...t].map(r=>r.value).reduce((r,l)=>r+l,0)}const C=w(()=>B.value.map(t=>t.value).reduce((t,r)=>t+r,0)),Fe=w(()=>C.value/B.value.length),ie=d(null),U=d(!1);function Le({datapoint:t,relativeIndex:r,seriesIndex:l,show:a=!1}){ie.value={datapoint:t,seriesIndex:l,config:e.value,series:M.value},ae.value=a,P.value=r;let n="";const m=e.value.style.chart.tooltip.customFormat;if(U.value=!1,il(m))try{const O=m({seriesIndex:l,datapoint:t,series:M.value,config:e.value});typeof O=="string"&&(ue.value=O,U.value=!0)}catch{console.warn("Custom format cannot be applied."),U.value=!1}if(!U.value){if(n+=`<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`,n+=`<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`,e.value.style.chart.tooltip.showValue&&(n+=`<b>${T(e.value.style.chart.layout.labels.value.formatter,t.value,_({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:t.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.tooltip.roundingValue}),{datapoint:t,relativeIndex:r,seriesIndex:l})}</b>`),e.value.style.chart.tooltip.showPercentage){const O=T(e.value.style.chart.layout.labels.percentage.formatter,t.proportion*100,_({v:t.proportion*100,s:"%",r:e.value.style.chart.tooltip.roundingPercentage}),{datapoint:t,relativeIndex:r,seriesIndex:l});e.value.style.chart.tooltip.showValue?n+=`<span>(${O})</span></div>`:n+=`<b>${O}</b></div>`}e.value.style.chart.comments.showInTooltip&&t.comment&&(n+=`<div class="vue-data-ui-tooltip-comment" style="background:${t.color}20; padding: 6px; margin-bottom: 6px; margin-top:6px; border-left: 1px solid ${t.color}">${t.comment}</div>`),ue.value=`<div>${n}</div>`}}function K(t){return e.value.useBlurOnHover&&![null,void 0].includes(P.value)&&P.value!==t?`url(#blur_${b.value})`:""}const G=w(()=>{const t=B.value.map(l=>({name:l.name,color:l.color})),r=B.value.map(l=>l.value);return{head:t,body:r}});function ze(){Pl(()=>{const t=G.value.head.map((a,n)=>[[a.name],[G.value.body[n]],[isNaN(G.value.body[n]/C.value)?"-":G.value.body[n]/C.value*100]]),r=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[[""],["val"],["%"]]].concat(t),l=rl(r);nl({csvContent:l,title:e.value.style.chart.title.text||"vue-ui-donut"})})}const oe=w(()=>{const t=[' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',_({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:C.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.table.td.roundingValue}),"100%"],r=G.value.head.map((a,n)=>{const m=_({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:G.value.body[n],s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.table.td.roundingValue});return[{color:a.color,name:a.name},m,isNaN(G.value.body[n]/C.value)?"-":(G.value.body[n]/C.value*100).toFixed(e.value.table.td.roundingPercentage)+"%"]}),l={th:{backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline},td:{backgroundColor:e.value.table.td.backgroundColor,color:e.value.table.td.color,outline:e.value.table.td.outline},breakpoint:e.value.table.responsiveBreakpoint};return{colNames:[e.value.table.columnNames.series,e.value.table.columnNames.value,e.value.table.columnNames.percentage],head:t,body:r,config:l}}),Q=d(!1);function qe(t){Q.value=t,pe.value+=1}const Se=w(()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent));function Ee(t){return t.toFixed(e.value.style.chart.legend.roundingPercentage).split("").map(r=>"-").join("")}function A(t,r){ne("selectDatapoint",{datapoint:t,index:r})}function Te(){y.value.showTable=!y.value.showTable}function Ye(){y.value.dataLabels.show=!y.value.dataLabels.show}function Ie(){y.value.showTooltip=!y.value.showTooltip}return Me({getData:je,generatePdf:we,generateCsv:ze,generateImage:xe,toggleTable:Te,toggleLabels:Ye,toggleTooltip:Ie}),(t,r)=>(o(),i("div",{ref_key:"donutChart",ref:q,class:re(`vue-ui-donut ${Q.value?"vue-data-ui-wrapper-fullscreen":""} ${e.value.useCssAnimation?"":"vue-ui-dna"}`),style:Y(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive?"height:100%;":""} text-align:center;${e.value.style.chart.title.text?"":"padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),id:`donut__${b.value}`},[x(t.$slots,"userConfig",{},void 0,!0),e.value.style.chart.title.text?(o(),i("div",{key:0,ref_key:"chartTitle",ref:ve,style:"width:100%;background:transparent;padding-bottom:24px"},[(o(),W(dl,{key:`title_${de.value}`,config:{title:{cy:"donut-div-title",...e.value.style.chart.title},subtitle:{cy:"donut-div-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):v("",!0),e.value.userOptions.show&&R.value?(o(),W(yl,{ref_key:"details",ref:De,key:`user_option_${pe.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isPrinting:s(be),isImaging:s(me),uid:b.value,hasTooltip:e.value.style.chart.tooltip.show&&e.value.userOptions.buttons.tooltip,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasXls:e.value.userOptions.buttons.csv,hasTable:e.value.userOptions.buttons.table,hasLabel:e.value.userOptions.buttons.labels,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:Q.value,chartElement:q.value,position:e.value.userOptions.position,isTooltip:y.value.showTooltip,titles:{...e.value.userOptions.buttonTitles},onToggleFullscreen:qe,onGeneratePdf:s(we),onGenerateCsv:ze,onGenerateImage:s(xe),onToggleTable:Te,onToggleLabels:Ye,onToggleTooltip:Ie},Cl({_:2},[t.$slots.optionTooltip?{name:"optionTooltip",fn:L(()=>[x(t.$slots,"optionTooltip",{},void 0,!0)]),key:"0"}:void 0,t.$slots.optionPdf?{name:"optionPdf",fn:L(()=>[x(t.$slots,"optionPdf",{},void 0,!0)]),key:"1"}:void 0,t.$slots.optionCsv?{name:"optionCsv",fn:L(()=>[x(t.$slots,"optionCsv",{},void 0,!0)]),key:"2"}:void 0,t.$slots.optionImg?{name:"optionImg",fn:L(()=>[x(t.$slots,"optionImg",{},void 0,!0)]),key:"3"}:void 0,t.$slots.optionTable?{name:"optionTable",fn:L(()=>[x(t.$slots,"optionTable",{},void 0,!0)]),key:"4"}:void 0,t.$slots.optionLabels?{name:"optionLabels",fn:L(()=>[x(t.$slots,"optionLabels",{},void 0,!0)]),key:"5"}:void 0,t.$slots.optionFullscreen?{name:"optionFullscreen",fn:L(({toggleFullscreen:l,isFullscreen:a})=>[x(t.$slots,"optionFullscreen",ee(le({toggleFullscreen:l,isFullscreen:a})),void 0,!0)]),key:"6"}:void 0]),1032,["backgroundColor","color","isPrinting","isImaging","uid","hasTooltip","hasPdf","hasImg","hasXls","hasTable","hasLabel","hasFullscreen","isFullscreen","chartElement","position","isTooltip","titles","onGeneratePdf","onGenerateImage"])):v("",!0),R.value?(o(),i("svg",{key:2,xmlns:s(tl),class:re({"vue-data-ui-fullscreen--on":Q.value,"vue-data-ui-fulscreen--off":!Q.value}),viewBox:`0 0 ${u.value.width<=0?10:u.value.width} ${u.value.height<=0?10:u.value.height}`,style:Y(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)},[Ge(wl),e.value.type==="classic"?(o(),i("defs",Tl,[e.value.style.chart.useGradient?(o(),i("radialGradient",{key:0,id:`gradient_${b.value}`},[h("stop",{offset:"0%","stop-color":s(J)(e.value.style.chart.backgroundColor,0),"stop-opacity":"0"},null,8,Il),h("stop",{offset:`${(1-E.value/$.value)*100}%`,"stop-color":s(J)("#FFFFFF",0),"stop-opacity":"0"},null,8,Xl),h("stop",{offset:`${(1-E.value/$.value/2)*100}%`,"stop-color":s(J)("#FFFFFF",e.value.style.chart.gradientIntensity)},null,8,Nl),h("stop",{offset:"100%","stop-color":s(J)(e.value.style.chart.backgroundColor,0),"stop-opacity":"0"},null,8,Ol)],8,Yl)):v("",!0)])):v("",!0),e.value.type==="polar"?(o(),i("defs",Bl,[(o(!0),i(g,null,N(c.value,(l,a)=>(o(),i("radialGradient",{id:`polar_gradient_${a}_${b.value}`,cx:l.middlePoint.x/u.value.width*100+"%",cy:l.middlePoint.y/u.value.height*100+"%",r:"62%"},[h("stop",{offset:"0%","stop-color":s(al)(f.value[a].color,.05),"stop-opacity":e.value.style.chart.gradientIntensity/100},null,8,Al),h("stop",{offset:"100%","stop-color":f.value[a].color},null,8,Ml)],8,Gl))),256))])):v("",!0),h("defs",null,[h("filter",{id:`blur_${b.value}`,x:"-50%",y:"-50%",width:"200%",height:"200%"},[h("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2,id:`blur_std_${b.value}`},null,8,Dl),jl],8,Vl),h("filter",{id:`shadow_${b.value}`,"color-interpolation-filters":"sRGB"},[h("feDropShadow",{dx:"0",dy:"0",stdDeviation:"10","flood-opacity":"0.5","flood-color":e.value.style.chart.layout.donut.shadowColor},null,8,Hl)],8,Wl),h("filter",{id:`drop_shadow_${b.value}`,"color-interpolation-filters":"sRGB",x:"-50%",y:"-50%",width:"200%",height:"200%"},[h("feDropShadow",{dx:"0",dy:"0",stdDeviation:"3","flood-opacity":"1","flood-color":e.value.style.chart.layout.donut.shadowColor},null,8,ql)],8,Rl)]),e.value.type==="classic"?(o(!0),i(g,{key:2},N(f.value,(l,a)=>(o(),i("g",null,[S(l)&&y.value.dataLabels.show?(o(),i("path",{key:0,d:s(ol)(l,{x:u.value.width/2,y:u.value.height/2},16,16,!1,!1,E.value),stroke:l.color,"stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",fill:"none",filter:K(a)},null,8,El)):v("",!0)]))),256)):v("",!0),e.value.type==="polar"?(o(!0),i(g,{key:3},N(f.value,(l,a)=>(o(),i("g",null,[S(l)&&y.value.dataLabels.show?(o(),i("line",{key:0,x1:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:u.value.width/2,centerY:u.value.height/2}).x,y1:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:u.value.width/2,centerY:u.value.height/2}).y,x2:c.value[a].middlePoint.x,y2:c.value[a].middlePoint.y,stroke:l.color,"stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",fill:"none",filter:K(a)},null,8,Ul)):v("",!0)]))),256)):v("",!0),e.value.type==="classic"?(o(),i("circle",{key:4,cx:u.value.width/2,cy:u.value.height/2,r:$.value<=0?10:$.value,fill:e.value.style.chart.backgroundColor,filter:e.value.style.chart.layout.donut.useShadow?`url(#shadow_${b.value})`:""},null,8,Kl)):v("",!0),C.value&&e.value.type==="classic"?(o(),i(g,{key:5},[(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("path",{stroke:e.value.style.chart.backgroundColor,d:l.arcSlice,fill:"#FFFFFF"},null,8,Ql))),256)),(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("path",{class:"vue-ui-donut-arc-path",d:l.arcSlice,fill:s(J)(l.color,80),stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth,filter:K(a)},null,8,Jl))),256))],64)):v("",!0),C.value&&e.value.type==="polar"?(o(),i(g,{key:6},[f.value.length>1?(o(),i("g",Zl,[(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("path",{stroke:e.value.style.chart.backgroundColor,d:c.value[a].path,fill:"#FFFFFF"},null,8,et))),256)),e.value.style.chart.layout.donut.useShadow?(o(),i("g",lt,[(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("path",{class:"vue-ui-donut-arc-path",d:c.value[a].path,fill:"transparent",stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth,filter:`url(#drop_shadow_${b.value})`},null,8,tt))),256))])):v("",!0),(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("path",{class:"vue-ui-donut-arc-path",d:c.value[a].path,fill:e.value.style.chart.useGradient?`url(#polar_gradient_${a}_${b.value})`:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth,filter:K(a)},null,8,at))),256))])):(o(),i("g",ot,[h("circle",{cx:u.value.width/2,cy:u.value.height/2,r:$.value,fill:e.value.style.chart.useGradient?`url(#polar_gradient_0_${b.value})`:f.value[0].color,stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth},null,8,ut)]))],64)):(o(),i("circle",{key:7,cx:u.value.width/2,cy:u.value.height/2,r:$.value<=0?10:$.value,fill:"transparent",stroke:e.value.style.chart.backgroundColor},null,8,st)),e.value.style.chart.useGradient&&e.value.type==="classic"?(o(),i("circle",{key:8,cx:u.value.width/2,cy:u.value.height/2,r:$.value<=0?10:$.value,fill:`url(#gradient_${b.value})`},null,8,it)):v("",!0),C.value?(o(),i(g,{key:9},[f.value.length>1||e.value.type==="classic"?(o(),i("g",rt,[(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("path",{"data-cy-donut-trap":"",d:e.value.type==="classic"?l.arcSlice:c.value[a].path,fill:P.value===a?"rgba(0,0,0,0.1)":"transparent",onMouseenter:n=>Le({datapoint:l,relativeIndex:a,seriesIndex:l.seriesIndex,show:!0}),onMouseleave:r[0]||(r[0]=n=>{ae.value=!1,P.value=null}),onClick:n=>A(l,a)},null,40,nt))),256))])):(o(),i("g",vt,[h("circle",{cx:u.value.width/2,cy:u.value.height/2,r:$.value,fill:P.value===t.i?"rgba(0,0,0,0.1)":"transparent","data-cy-donut-trap":"",onMouseenter:r[1]||(r[1]=l=>Le({datapoint:f.value[0],relativeIndex:0,seriesIndex:f.value[0].seriesIndex,show:!0})),onMouseleave:r[2]||(r[2]=l=>{ae.value=!1,P.value=null}),onClick:r[3]||(r[3]=l=>A(f.value[0],t.i))},null,40,ct)]))],64)):v("",!0),e.value.type==="classic"?(o(),i(g,{key:10},[e.value.style.chart.layout.labels.hollow.total.show?(o(),i("text",{key:0,"text-anchor":"middle",x:u.value.width/2,y:u.value.height/2-(e.value.style.chart.layout.labels.hollow.average.show?e.value.style.chart.layout.labels.hollow.total.fontSize:0)+e.value.style.chart.layout.labels.hollow.total.offsetY,fill:e.value.style.chart.layout.labels.hollow.total.color,"font-size":e.value.style.chart.layout.labels.hollow.total.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.hollow.total.bold?"bold":""}`)},k(e.value.style.chart.layout.labels.hollow.total.text),13,dt)):v("",!0),e.value.style.chart.layout.labels.hollow.total.show?(o(),i("text",{key:1,"text-anchor":"middle",x:u.value.width/2,y:u.value.height/2+e.value.style.chart.layout.labels.hollow.total.fontSize-(e.value.style.chart.layout.labels.hollow.average.show?e.value.style.chart.layout.labels.hollow.total.fontSize:0)+e.value.style.chart.layout.labels.hollow.total.value.offsetY,fill:e.value.style.chart.layout.labels.hollow.total.value.color,"font-size":e.value.style.chart.layout.labels.hollow.total.value.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.hollow.total.value.bold?"bold":""}`)},k(s(T)(e.value.style.chart.layout.labels.hollow.total.value.formatter,C.value,s(_)({p:e.value.style.chart.layout.labels.hollow.total.value.prefix,v:C.value,s:e.value.style.chart.layout.labels.hollow.total.value.suffix}))),13,ht)):v("",!0),e.value.style.chart.layout.labels.hollow.average.show?(o(),i("text",{key:2,"text-anchor":"middle",x:u.value.width/2,y:u.value.height/2+(e.value.style.chart.layout.labels.hollow.total.show?e.value.style.chart.layout.labels.hollow.average.fontSize:0)+e.value.style.chart.layout.labels.hollow.average.offsetY,fill:e.value.style.chart.layout.labels.hollow.average.color,"font-size":e.value.style.chart.layout.labels.hollow.average.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.hollow.average.bold?"bold":""}`)},k(e.value.style.chart.layout.labels.hollow.average.text),13,yt)):v("",!0),e.value.style.chart.layout.labels.hollow.average.show?(o(),i("text",{key:3,"text-anchor":"middle",x:u.value.width/2,y:u.value.height/2+(e.value.style.chart.layout.labels.hollow.total.show?e.value.style.chart.layout.labels.hollow.average.fontSize:0)+e.value.style.chart.layout.labels.hollow.average.fontSize+e.value.style.chart.layout.labels.hollow.average.value.offsetY,fill:e.value.style.chart.layout.labels.hollow.average.value.color,"font-size":e.value.style.chart.layout.labels.hollow.average.value.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.hollow.average.value.bold?"bold":""}`)},k(V.value?"--":s(T)(e.value.style.chart.layout.labels.hollow.average.value.formatter,Fe.value,s(_)({p:e.value.style.chart.layout.labels.hollow.average.value.prefix,v:Fe.value,s:e.value.style.chart.layout.labels.hollow.average.value.suffix,r:e.value.style.chart.layout.labels.hollow.average.value.rounding}))),13,ft)):v("",!0)],64)):v("",!0),(o(!0),i(g,null,N(f.value,(l,a)=>(o(),i("g",{filter:K(a),class:re({animated:e.value.useCssAnimation})},[e.value.style.chart.layout.labels.dataLabels.useLabelSlots?(o(),i("g",gt,[(o(),i("foreignObject",{x:s(p)(l,!0).anchor==="end"?s(p)(l).x-120:s(p)(l,!0).anchor==="middle"?s(p)(l).x-60:s(p)(l).x,y:s(Z)(l)-(Se.value?20:0),width:"120",height:"60",style:{overflow:"visible"}},[h("div",null,[x(t.$slots,"dataLabel",ee(le({datapoint:l,isBlur:!e.value.useBlurOnHover||[null,void 0].includes(P.value)||P.value===a,isSafari:Se.value,isVisible:S(l)&&y.value.dataLabels.show,textAlign:s(p)(l,!0,16,!0).anchor,flexAlign:s(p)(l,!0,16).anchor,percentage:se(l,f.value)})),void 0,!0)])],8,bt))])):(o(),i("g",mt,[e.value.type==="classic"?(o(),i(g,{key:0},[S(l)&&y.value.dataLabels.show?(o(),i("circle",{key:0,cx:s(p)(l).x,cy:s(Z)(l)-3.5,fill:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-width":1,r:3,filter:!e.value.useBlurOnHover||[null,void 0].includes(P.value)||P.value===a?"":`url(#blur_${b.value})`,onClick:n=>A(l,a)},null,8,wt)):v("",!0)],64)):v("",!0),e.value.type==="polar"?(o(),i(g,{key:1},[S(l)&&y.value.dataLabels.show?(o(),i("circle",{key:0,cx:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:u.value.width/2,centerY:u.value.height/2}).x,cy:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:u.value.width/2,centerY:u.value.height/2}).y,fill:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-width":1,r:3,filter:!e.value.useBlurOnHover||[null,void 0].includes(P.value)||P.value===a?"":`url(#blur_${b.value})`,onClick:n=>A(l,a)},null,8,xt)):v("",!0)],64)):v("",!0),e.value.type==="classic"?(o(),i(g,{key:2},[S(l)&&y.value.dataLabels.show?(o(),i("text",{key:0,"text-anchor":s(p)(l,!0,12).anchor,x:s(p)(l,!0,12).x,y:s(Z)(l),fill:e.value.style.chart.layout.labels.percentage.color,"font-size":e.value.style.chart.layout.labels.percentage.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.percentage.bold?"bold":""}`),onClick:n=>A(l,a)},k(se(l,f.value))+" "+k(e.value.style.chart.layout.labels.value.show?`(${s(T)(e.value.style.chart.layout.labels.value.formatter,l.value,s(_)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.value.rounding}),{datapoint:l})})`:""),13,kt)):v("",!0),S(l)&&y.value.dataLabels.show?(o(),i("text",{key:1,"text-anchor":s(p)(l).anchor,x:s(p)(l,!0,12).x,y:s(Z)(l)+e.value.style.chart.layout.labels.percentage.fontSize,fill:e.value.style.chart.layout.labels.name.color,"font-size":e.value.style.chart.layout.labels.name.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.name.bold?"bold":""}`),onClick:n=>A(l,a)},k(l.name),13,$t)):v("",!0)],64)):v("",!0),e.value.type==="polar"?(o(),i(g,{key:3},[S(l)&&y.value.dataLabels.show?(o(),i("text",{key:0,"text-anchor":j(c.value[a].middlePoint),x:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).x,y:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).y,fill:e.value.style.chart.layout.labels.percentage.color,"font-size":e.value.style.chart.layout.labels.percentage.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.percentage.bold?"bold":""}`),onClick:n=>A(l,a)},k(se(l,f.value))+" "+k(e.value.style.chart.layout.labels.value.show?`(${s(T)(e.value.style.chart.layout.labels.value.formatter,l.value,s(_)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.value.rounding}),{datapoint:l})})`:""),13,Ct)):v("",!0),S(l)&&y.value.dataLabels.show?(o(),i("text",{key:1,"text-anchor":j(c.value[a].middlePoint),x:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).x,y:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).y+e.value.style.chart.layout.labels.percentage.fontSize,fill:e.value.style.chart.layout.labels.name.color,"font-size":e.value.style.chart.layout.labels.name.fontSize,style:Y(`font-weight:${e.value.style.chart.layout.labels.name.bold?"bold":""}`),onClick:n=>A(l,a)},k(l.name),13,Pt)):v("",!0)],64)):v("",!0)])),y.value.dataLabels.show&&e.value.style.chart.comments.show&&l.comment?(o(),i("g",_t,[S(l)&&e.value.type==="classic"?(o(),i("foreignObject",{key:0,x:e.value.style.chart.comments.offsetX+(s(p)(l,!0).anchor==="end"?s(p)(l).x-e.value.style.chart.comments.width:s(p)(l,!0).anchor==="middle"?s(p)(l).x-e.value.style.chart.comments.width/2:s(p)(l).x),y:s(Z)(l)+24+e.value.style.chart.comments.offsetY,width:e.value.style.chart.comments.width,height:"200",style:{overflow:"visible","pointer-events":"none"}},[h("div",null,[x(t.$slots,"plot-comment",{plot:{...l,textAlign:s(p)(l,!0,16,!0).anchor,flexAlign:s(p)(l,!0,16).anchor}},void 0,!0)])],8,Ft)):v("",!0),S(l)&&e.value.type==="polar"?(o(),i("foreignObject",{key:1,x:e.value.style.chart.comments.offsetX+(j(c.value[a].middlePoint)==="end"?s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).x-e.value.style.chart.comments.width:j(c.value[a].middlePoint)==="middle"?s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).x-e.value.style.chart.comments.width/2:s(F)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:u.value.width/2,centerY:u.value.height/2}).x),y:He(c.value[a])+e.value.style.chart.comments.offsetY,width:e.value.style.chart.comments.width,height:"200",style:{overflow:"visible","pointer-events":"none"}},[h("div",null,[x(t.$slots,"plot-comment",{plot:{...l,textAlign:j(c.value[a].middlePoint),flexAlign:j(c.value[a].middlePoint)}},void 0,!0)])],8,Lt)):v("",!0)])):v("",!0)],10,pt))),256)),x(t.$slots,"svg",{svg:u.value},void 0,!0)],14,Sl)):v("",!0),t.$slots.watermark?(o(),i("div",zt,[x(t.$slots,"watermark",ee(le({isPrinting:s(be)||s(me)})),void 0,!0)])):v("",!0),R.value?v("",!0):(o(),W(bl,{key:4,config:{type:"donut",style:{backgroundColor:e.value.style.chart.backgroundColor,donut:{color:"#CCCCCC",strokeWidth:E.value*.8}}}},null,8,["config"])),h("div",{ref_key:"chartLegend",ref:ce},[e.value.style.chart.legend.show?(o(),W(gl,{key:`legend_${ye.value}`,legendSet:_e.value,config:We.value,onClickMarker:r[4]||(r[4]=({i:l})=>Pe(l))},{item:L(({legend:l,index:a})=>[h("div",{onClick:n=>l.segregate(),style:Y(`opacity:${X.value.includes(a)?.5:1}`)},[Ae(k(l.name)+": "+k(s(T)(e.value.style.chart.layout.labels.value.formatter,l.value,s(_)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.legend.roundingValue}),{datapoint:l,index:a}))+" ",1),X.value.includes(a)?(o(),i("span",Yt," ( "+k(Ee(l.proportion*100))+" % ) ",1)):(o(),i("span",Tt," ("+k(isNaN(l.value/C.value)?"-":s(T)(e.value.style.chart.layout.labels.percentage.formatter,V.value?l.proportion*100:l.value/C.value*100,s(_)({v:V.value?l.proportion*100:l.value/C.value*100,s:"%",r:e.value.style.chart.legend.roundingPercentage})))+") ",1))],12,St)]),_:1},8,["legendSet","config"])):v("",!0),x(t.$slots,"legend",{legend:_e.value},void 0,!0)],512),Ge(pl,{show:y.value.showTooltip&&ae.value,backgroundColor:e.value.style.chart.tooltip.backgroundColor,color:e.value.style.chart.tooltip.color,fontSize:e.value.style.chart.tooltip.fontSize,borderRadius:e.value.style.chart.tooltip.borderRadius,borderColor:e.value.style.chart.tooltip.borderColor,borderWidth:e.value.style.chart.tooltip.borderWidth,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity,position:e.value.style.chart.tooltip.position,offsetY:e.value.style.chart.tooltip.offsetY,parent:q.value,content:ue.value,isCustom:U.value},{"tooltip-before":L(()=>[x(t.$slots,"tooltip-before",ee(le({...ie.value})),void 0,!0)]),"tooltip-after":L(()=>[x(t.$slots,"tooltip-after",ee(le({...ie.value})),void 0,!0)]),_:3},8,["show","backgroundColor","color","fontSize","borderRadius","borderColor","borderWidth","backgroundOpacity","position","offsetY","parent","content","isCustom"]),R.value?(o(),W(ml,{key:5,hideDetails:"",config:{open:y.value.showTable,maxHeight:1e4,body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:L(()=>[(o(),W(fl,{key:`table_${he.value}`,colNames:oe.value.colNames,head:oe.value.head,body:oe.value.body,config:oe.value.config,title:`${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text?` : ${e.value.style.chart.title.subtitle.text}`:""}`,onClose:r[5]||(r[5]=l=>y.value.showTable=!1)},{th:L(({th:l})=>[h("div",{innerHTML:l,style:{display:"flex","align-items":"center"}},null,8,It)]),td:L(({td:l})=>[Ae(k(l.name?l.name:isNaN(Number(l))?l.includes("%")?l:s(T)(e.value.style.chart.layout.labels.percentage.formatter,l,s(_)({v:l,s:"%",r:e.value.style.chart.layout.labels.percentage.rounding})):s(T)(e.value.style.chart.layout.labels.value.formatter,l,s(_)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.value.rounding}))),1)]),_:1},8,["colNames","head","body","config","title"]))]),_:1},8,["config"])):v("",!0)],14,zl))}},Ut=xl(Xt,[["__scopeId","data-v-159f668e"]]);export{Ut as default};