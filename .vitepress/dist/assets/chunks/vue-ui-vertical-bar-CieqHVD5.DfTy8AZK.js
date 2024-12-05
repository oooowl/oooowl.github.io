import{ar as Ye,h as f,p as v,q as Ve,v as Ke,Y as qe,o as r,c as d,b as j,e as m,aj as Qe,w as $,r as k,ak as q,al as Q,k as h,j as u,N as n,t as s,n as G,G as re,F as A,C as D,W as Je,a as Ze}from"./framework.BaNfDZ-f.js";import{o as et,L as tt,G as at,R as lt,e as F,a as ot,X as Se,K as J,k as V,j as ie,n as Z,b as I,Q as ut,c as se,p as rt,H as it,$ as st,N as nt,O as vt}from"../chart.md.hi_nZSnT.js";import{O as dt,M as ct}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as ht}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as pt,i as gt}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import{E as yt}from"./Tooltip-CICAYyQj.DC7pN5Ho.js";import{C as ze}from"./Legend-DXLiSLHd.5wpQgPWV.js";import bt from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import{s as ft,u as mt}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import xt from"./vue-ui-accordion-D_1fE5EF.ggAyum2g.js";import{c as Me}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as $t}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import"./Shape-CO_Ak9Zm.UkrUmJI7.js";const kt=["id"],wt=["onClick"],Ct=["xmlns","viewBox"],_t=["id"],Tt=["stop-color"],Lt=["stop-color"],Pt=["x","y","width","height","fill","rx"],Nt=["x","y","width","height","fill","rx","stroke","stroke-width"],Vt=["x2","y1","y2","stroke","stroke-width"],St=["x1","x2","y1","y2","stroke","stroke-width"],zt=["x","y","text-anchor","font-size","fill","font-weight"],Mt=["x","y","font-size","fill","font-weight"],Ft=["x","y","font-size","fill","font-weight"],It=["x","y","font-size","fill","font-weight"],Ot=["y","width","height","fill","onMouseenter"],Bt={key:4,class:"vue-data-ui-watermark"},jt=["onClick"],Gt={style:"width:100%;padding-top: 36px;position:relative"},Rt={class:"vue-ui-data-table"},Xt={key:0},Et={style:{width:"100%"}},Wt=["data-cell"],At={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},Dt=["data-cell"],Ht={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},Ut=["data-cell"],Yt={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},Kt=["data-cell"],qt={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},Qt=["data-cell"],Jt={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},Zt=["data-cell"],ea={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},ta=["data-cell"],aa={style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},la={__name:"vue-ui-vertical-bar",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}}},emits:["selectLegend"],setup(Fe,{expose:Ie,emit:Oe}){const C=Fe;Ye(a=>({"3d035ab4":a.tdo}));const{vue_ui_vertical_bar:Be}=et(),H=f(()=>!!C.dataset&&C.dataset.length),S=v(tt()),je=v(null),ee=v(!1),te=v(""),U=v(0),Ge=v(null),ne=v(0),R=v(null),ve=v(null),ae=v(null),de=v(0),le=v(0),e=f({get:()=>ce(),set:a=>a});function ce(){const a=Me({userConfig:C.config,defaultConfig:Be});return a.theme?{...Me({userConfig:at.vue_ui_vertical_bar[a.theme]||C.config,defaultConfig:a}),customPalette:lt[a.theme]||F}:a}Ve(()=>C.config,a=>{e.value=ce(),xe(),de.value+=1,le.value+=1,c.value=e.value.style.chart.layout.bars.height,g.value=e.value.style.chart.layout.bars.gap},{deep:!0}),Ve(()=>C.dataset,K,{deep:!0});const{isPrinting:he,isImaging:pe,generatePdf:ge,generateImage:ye}=pt({elementId:`vue-ui-vertical-bar_${S.value}`,fileName:e.value.style.chart.title.text||"vue-ui-vertical-bar"}),be=f(()=>ot(e.value.customPalette)),fe=v(null),me=v(!1),Re=f(()=>e.value.table.responsiveBreakpoint),Y=v(null);Ke(()=>{xe()});function xe(){if(Se(C.dataset)&&J({componentName:"VueUiVerticalBar",type:"dataset"}),U.value=C.dataset.flatMap(a=>a.children&&a.children.length>0?a.children.length:1).reduce((a,l)=>a+l,0),Xe(),e.value.responsive){const a=dt(()=>{const{width:l,height:t}=ct({chart:R.value,title:e.value.style.chart.title.text?ve.value:null,legend:e.value.style.chart.legend.show?ae.value:null});we.value=l,c.value=t/U.value-g.value*2});Y.value=new ResizeObserver(a),Y.value.observe(R.value.parentNode)}}qe(()=>{Y.value&&Y.value.disconnect()});function Xe(){new ResizeObserver(a=>{a.forEach(l=>{me.value=l.contentRect.width<Re.value})}).observe(fe.value)}const w=v({showTable:e.value.table.show,sortDesc:e.value.style.chart.layout.bars.sort==="desc",showTooltip:e.value.style.chart.tooltip.show}),$e=f(()=>w.value.sortDesc),z=f(()=>(C.dataset.forEach((a,l)=>{!a.value&&!a.children&&J({componentName:"VueUiVerticalBar",type:"datasetAttributeEmpty",property:`value (index ${l})`}),a.children&&(Se(a.children)?J({componentName:"VueUiVerticalBar",type:"datasetAttributeEmpty",property:`children (index ${l})`}):a.children.forEach((t,o)=>{[null,void 0].includes(t.name)&&J({componentName:"VueUiVerticalBar",type:"datasetSerieAttribute",property:"name",key:"children",index:o})}))}),C.dataset.map((a,l)=>{const t=`vertical_parent_${l}_${S.value}`,o=a.children&&a.children.length>0,b=V(a.value?a.value:o?a.children.map(x=>x.value||0).reduce((x,P)=>x+P,0):0),p=b>=0?1:-1;return{...a,id:t,shape:"square",opacity:T.value.includes(t)?.5:1,value:Math.abs(b),sign:p,hasChildren:o,isChild:!1,segregate:()=>X(t),isSegregated:T.value.includes(t),color:ie(a.color)||be.value[l]||F[l]||F[l%F.length],children:!a.children||!a.children.length?[]:a.children.toSorted((x,P)=>$e.value?P.value-x.value:x.value-P.value).map((x,P)=>({...x,value:V(Math.abs(x.value)),sign:x.value>=0?1:-1,isChild:!0,parentId:t,parentName:a.name,parentValue:b,parentSign:p,id:`vertical_child_${l}_${P}_${S.value}`,childIndex:P,color:ie(x.color)||ie(a.color)||be.value[l]||F[l]||F[l%F.length]})).map((x,P)=>({...x,isFirstChild:P===0,isLastChild:P===a.children.length-1}))}}).toSorted((a,l)=>$e.value?l.value-a.value:a.value-l.value))),ke=f(()=>({cy:"vertical-bar-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),c=v(e.value.style.chart.layout.bars.height),g=v(e.value.style.chart.layout.bars.gap),Ee=f(()=>(c.value+g.value)*U.value),we=v(512),y=f(()=>({width:we.value,height:Ee.value,padding:{top:12,left:128+e.value.style.chart.layout.bars.offsetX,right:64+e.value.style.chart.layout.bars.paddingRight,bottom:12}})),i=f(()=>({fullHeight:y.value.padding.top+y.value.padding.bottom+y.value.height,top:y.value.padding.top,left:y.value.padding.left,right:y.value.width-y.value.padding.right,bottom:y.value.padding.top+y.value.height,width:y.value.width-(y.value.padding.left+y.value.padding.right)}));function K(){U.value=M.value.flatMap(a=>a.children&&a.children.length>0?a.children.length:1).reduce((a,l)=>a+l,0)}const T=v([]);function X(a){T.value.includes(a)?T.value=T.value.filter(l=>l!==a):T.value.push(a),K(),Oe("selectLegend",M.value)}const M=f(()=>z.value.filter(a=>!T.value.includes(a.id))),L=f(()=>M.value.map(a=>Math.abs(a.value)).reduce((a,l)=>a+l,0));function Ce(a,l=!1,t=0){return l?I({v:V(Math.abs(a)/L.value*100),s:"%",r:t}):Math.abs(a)/L.value}const O=f(()=>M.value.flatMap(a=>a.hasChildren?a.children:a)),B=f(()=>O.value.map(a=>a.sign).includes(-1)),We=f(()=>Math.max(...M.value.flatMap(a=>a.children&&a.children.length?Math.max(...a.children.map(l=>l.value)):a.value)));function N(a){const l=a/We.value;return i.value.width/(B.value?2:1)*l}function Ae(a){return N(a)+i.value.left}function E(a,l){const t=M.value.find(p=>p.id===a.parentId),o=i.value.top+(g.value+c.value)*l,b=t.children.length*(g.value+c.value);return{y:o+b/2-e.value.style.chart.layout.bars.parentLabels.fontSize,name:t.name,value:[void 0,NaN,null].includes(t.value)?"":t.sign===1?t.value:-t.value,percentageToTotal:isNaN(t.value/L.value)?"":Ce(t.value,!0,e.value.style.chart.layout.bars.dataLabels.percentage.roundingPercentage),sign:t.sign}}function De(){return M.value}const oe=v(null),ue=v(null);function He(a,l){ue.value={datapoint:a,seriesIndex:l,series:z.value,config:e.value},ee.value=!0,oe.value=a.id;let t="";const o=a.isChild?a.parentName:a.name,b=a.isChild?a.name:"",p=e.value.style.chart.tooltip.customFormat;it(p)&&st(()=>p({datapoint:a,series:z.value,config:e.value,seriesIndex:l}))?te.value=p({datapoint:a,series:z.value,config:e.value,seriesIndex:l}):(t+=`<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;text-align:left;">
                <div style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" rx="2" stroke="none" fill="${a.color}"/></svg> ${o}</div>
                ${b?`<div>${b}</div>`:""}
            </div>`,e.value.style.chart.tooltip.showValue&&(t+=`<div>${e.value.translations.value}: <b>${Z(e.value.style.chart.layout.bars.dataLabels.value.formatter,a.sign===1?a.value:-a.value,I({p:e.value.style.chart.tooltip.prefix,v:a.sign===1?a.value:-a.value,s:e.value.style.chart.tooltip.suffix,r:e.value.style.chart.tooltip.roundingValue}),{datapoint:a,seriesIndex:l})}</b></div>`),e.value.style.chart.tooltip.showPercentage&&(t+=`<div>${e.value.translations.percentageToTotal} : <b>${I({v:Math.abs(a.value)/L.value*100,s:"%",r:e.value.style.chart.tooltip.roundingPercentage})}</b></div>`,a.isChild&&(t+=`<div>${e.value.translations.percentageToSerie}: <b>${I({v:Math.abs(a.value)/Math.abs(a.parentValue)*100,s:"%",r:e.value.style.chart.tooltip.roundingPercentage})}</b></div>`)),te.value=`<div style="text-align:left">${t}</div>`)}function _e(a,l,t,o){if(!e.value.style.chart.layout.bars.dataLabels.value.show)return"";const b=Z(e.value.style.chart.layout.bars.dataLabels.value.formatter,V(o===-1&&a>=0?-a:a),I({p:e.value.style.chart.layout.bars.dataLabels.value.prefix,v:V(o===-1&&a>=0?-a:a),s:e.value.style.chart.layout.bars.dataLabels.value.suffix,r:e.value.style.chart.layout.bars.dataLabels.value.roundingValue}),{datapoint:l,seriesIndex:t}),p=`(${Ce(a,!0,e.value.style.chart.layout.bars.dataLabels.percentage.roundingPercentage)})`;return`${b}${e.value.style.chart.layout.bars.dataLabels.percentage.show?` ${p}`:""}`}const _=f(()=>{const a=[e.value.translations.parentName,e.value.translations.value,e.value.translations.percentageToTotal,e.value.translations.childName,e.value.translations.value,e.value.translations.percentageToSerie,e.value.translations.percentageToTotal],l=O.value.map(t=>t.isChild?t.isFirstChild?{color:t.color,parentName:t.parentName,parentValue:t.parentValue,percentageToTotal:t.parentValue/L.value,childName:t.name,childValue:t.sign===1?t.value:-t.value,childPercentageToParent:Math.abs(t.value)/Math.abs(t.parentValue),childPercentageToTotal:Math.abs(t.value)/L.value}:{color:"",parentName:"",parentValue:"",percentageToTotal:"",childName:t.name,childValue:t.sign===1?t.value:-t.value,childPercentageToParent:Math.abs(t.value)/Math.abs(t.parentValue),childPercentageToTotal:Math.abs(t.value)/L.value}:{color:t.color,parentName:t.name,parentValue:t.sign===1?t.value:-t.value,percentageToTotal:Math.abs(t.value)/L.value,childName:"",childValue:"",childPercentageToParent:"",childPercentageToTotal:""});return{head:a,body:l}});function Te(){const a=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[""]],l=_.value.head,t=_.value.body.map(p=>[p.parentName,p.parentValue,p.percentageToTotal,p.childName,p.childValue,p.childPercentageToParent,p.childPercentageToTotal]),o=a.concat([l]).concat(t),b=nt(o);vt({csvContent:b,title:e.value.style.chart.title.text||"vue-ui-vertical-bar"})}const W=v(!1);function Ue(a){W.value=a,ne.value+=1}function Le(){w.value.showTable=!w.value.showTable}function Pe(){w.value.sortDesc=!w.value.sortDesc,K()}function Ne(){w.value.showTooltip=!w.value.showTooltip}return Ie({getData:De,recalculateHeight:K,generatePdf:ge,generateCsv:Te,generateImage:ye,toggleTable:Le,toggleSort:Pe,toggleTooltip:Ne}),(a,l)=>(r(),d("div",{class:G(`vue-ui-vertical-bar ${W.value?"vue-data-ui-wrapper-fullscreen":""} ${e.value.useCssAnimation?"":"vue-ui-dna"}`),ref_key:"verticalBarChart",ref:R,id:`vue-ui-vertical-bar_${S.value}`,style:n(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text?"":"padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive?"height: 100%":""}`)},[e.value.style.chart.title.text?(r(),d("div",{key:0,ref_key:"chartTitle",ref:ve,style:"width:100%;background:transparent;padding-bottom:12px"},[(r(),j(ht,{key:`title_${de.value}`,config:{title:{cy:"vertical-bar-div-title",...e.value.style.chart.title},subtitle:{cy:"vertical-bar-div-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):m("",!0),e.value.userOptions.show&&H.value?(r(),j(gt,{ref_key:"details",ref:je,key:`user_options_${ne.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isImaging:h(pe),isPrinting:h(he),uid:S.value,hasTooltip:e.value.userOptions.buttons.tooltip&&e.value.style.chart.tooltip.show,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasXls:e.value.userOptions.buttons.csv,hasTable:e.value.userOptions.buttons.table,hasSort:e.value.userOptions.buttons.sort,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:W.value,isTooltip:w.value.showTooltip,titles:{...e.value.userOptions.buttonTitles},chartElement:R.value,position:e.value.userOptions.position,onToggleFullscreen:Ue,onGeneratePdf:h(ge),onGenerateCsv:Te,onGenerateImage:h(ye),onToggleTable:Le,onToggleSort:Pe,onToggleTooltip:Ne},Qe({_:2},[a.$slots.optionTooltip?{name:"optionTooltip",fn:$(()=>[k(a.$slots,"optionTooltip",{},void 0,!0)]),key:"0"}:void 0,a.$slots.optionPdf?{name:"optionPdf",fn:$(()=>[k(a.$slots,"optionPdf",{},void 0,!0)]),key:"1"}:void 0,a.$slots.optionCsv?{name:"optionCsv",fn:$(()=>[k(a.$slots,"optionCsv",{},void 0,!0)]),key:"2"}:void 0,a.$slots.optionImg?{name:"optionImg",fn:$(()=>[k(a.$slots,"optionImg",{},void 0,!0)]),key:"3"}:void 0,a.$slots.optionTable?{name:"optionTable",fn:$(()=>[k(a.$slots,"optionTable",{},void 0,!0)]),key:"4"}:void 0,a.$slots.optionLabels?{name:"optionLabels",fn:$(()=>[k(a.$slots,"optionLabels",{},void 0,!0)]),key:"5"}:void 0,a.$slots.optionSort?{name:"optionSort",fn:$(()=>[k(a.$slots,"optionSort",{},void 0,!0)]),key:"6"}:void 0,a.$slots.optionFullscreen?{name:"optionFullscreen",fn:$(({toggleFullscreen:t,isFullscreen:o})=>[k(a.$slots,"optionFullscreen",q(Q({toggleFullscreen:t,isFullscreen:o})),void 0,!0)]),key:"7"}:void 0]),1032,["backgroundColor","color","isImaging","isPrinting","uid","hasTooltip","hasPdf","hasImg","hasXls","hasTable","hasSort","hasFullscreen","isFullscreen","isTooltip","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):m("",!0),e.value.style.chart.legend.show&&e.value.style.chart.legend.position==="top"?(r(),d("div",{key:2,ref_key:"chartLegend",ref:ae},[(r(),j(ze,{key:`legend_top_${le.value}`,legendSet:z.value,config:ke.value,onClickMarker:l[0]||(l[0]=({legend:t})=>X(t.id))},{item:$(({legend:t,index:o})=>[u("div",{"data-cy-legend-item":"",onClick:b=>X(t.id),style:n(`opacity:${T.value.includes(t.id)?.5:1}`)},s(t.name)+": "+s(h(Z)(e.value.style.chart.layout.bars.dataLabels.value.formatter,t.value,h(I)({p:e.value.style.chart.legend.prefix,v:t.value,s:e.value.style.chart.legend.suffix,r:e.value.style.chart.legend.roundingValue}),{datapoint:t,seriesIndex:o})),13,wt)]),_:1},8,["legendSet","config"]))],512)):m("",!0),H.value?(r(),d("svg",{key:3,xmlns:h(ut),class:G({"vue-data-ui-fullscreen--on":W.value,"vue-data-ui-fulscreen--off":!W.value}),viewBox:`0 0 ${y.value.width<=0?10:y.value.width} ${i.value.fullHeight<=0?10:i.value.fullHeight}`,style:n(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)},[re($t),(r(!0),d(A,null,D(O.value,(t,o)=>(r(),d("linearGradient",{x1:"0%",y1:"0%",x2:"100%",y2:"0%",id:`vertical_bar_gradient_${S.value}_${o}`},[u("stop",{offset:"0%","stop-color":t.color},null,8,Tt),u("stop",{offset:"100%","stop-color":h(se)(h(rt)(t.color,.03),100-e.value.style.chart.layout.bars.gradientIntensity)},null,8,Lt)],8,_t))),256)),(r(!0),d(A,null,D(O.value,(t,o)=>(r(),d("g",null,[u("rect",{x:h(V)(B.value?i.value.left+i.value.width/2-(t.sign===1?0:N(t.value)<=0?1e-4:N(t.value)):i.value.left),y:i.value.top+(g.value+c.value)*o,width:h(V)(N(t.value)<=0?1e-4:N(t.value)),height:c.value<=0?1e-4:c.value,fill:e.value.style.chart.layout.bars.underlayerColor,rx:e.value.style.chart.layout.bars.borderRadius,class:G({animated:e.value.useCssAnimation})},null,10,Pt)]))),256)),(r(!0),d(A,null,D(O.value,(t,o)=>(r(),d("g",null,[u("rect",{x:h(V)(B.value?i.value.left+i.value.width/2-(t.sign===1?0:N(t.value)<=0?1e-4:N(t.value)):i.value.left),y:i.value.top+(g.value+c.value)*o,width:h(V)(N(t.value)<=0?1e-4:N(t.value)),height:c.value<=0?1e-4:c.value,fill:e.value.style.chart.layout.bars.useGradient?`url(#vertical_bar_gradient_${S.value}_${o})`:h(se)(t.color,e.value.style.chart.layout.bars.fillOpacity),rx:e.value.style.chart.layout.bars.borderRadius,stroke:e.value.style.chart.layout.bars.useStroke?t.color:"none","stroke-width":e.value.style.chart.layout.bars.useStroke?e.value.style.chart.layout.bars.strokeWidth:0,class:G({animated:e.value.useCssAnimation})},null,10,Nt),(!t.isChild||t.isLastChild)&&e.value.style.chart.layout.separators.show&&o!==O.value.length-1?(r(),d("line",{key:0,x1:0,x2:i.value.left,y1:c.value+g.value/2+i.value.top+(g.value+c.value)*o,y2:c.value+g.value/2+i.value.top+(g.value+c.value)*o,stroke:e.value.style.chart.layout.separators.color,"stroke-width":e.value.style.chart.layout.separators.strokeWidth,"stroke-linecap":"round"},null,8,Vt)):m("",!0),B.value&&e.value.style.chart.layout.separators.show?(r(),d("line",{key:1,x1:i.value.left+i.value.width/2,x2:i.value.left+i.value.width/2,y1:i.value.top,y2:i.value.bottom,stroke:e.value.style.chart.layout.separators.color,"stroke-width":e.value.style.chart.layout.separators.strokeWidth,"stroke-linecap":"round"},null,8,St)):m("",!0),u("text",{x:B.value?i.value.left+i.value.width/2+(t.sign===1?-12:12)+(t.sign===1?-e.value.style.chart.layout.bars.dataLabels.offsetX:e.value.style.chart.layout.bars.dataLabels.offsetX):Ae(t.value)+3+e.value.style.chart.layout.bars.dataLabels.offsetX,y:i.value.top+(g.value+c.value)*o+c.value/2+e.value.style.chart.layout.bars.dataLabels.fontSize/2,"text-anchor":!B.value||t.sign===-1?"start":"end","font-size":e.value.style.chart.layout.bars.dataLabels.fontSize,fill:e.value.style.chart.layout.bars.dataLabels.color,"font-weight":e.value.style.chart.layout.bars.dataLabels.bold?"bold":"normal"},s(_e(t.value,t,o,t.sign)),9,zt),(t.isChild||!t.hasChildren)&&e.value.style.chart.layout.bars.nameLabels.show?(r(),d("text",{key:2,"text-anchor":"end",x:i.value.left-3+e.value.style.chart.layout.bars.nameLabels.offsetX,y:i.value.top+(g.value+c.value)*o+c.value/2+e.value.style.chart.layout.bars.nameLabels.fontSize/2,"font-size":e.value.style.chart.layout.bars.nameLabels.fontSize,fill:e.value.style.chart.layout.bars.nameLabels.color,"font-weight":e.value.style.chart.layout.bars.nameLabels.bold?"bold":"normal"},s(t.name),9,Mt)):m("",!0),t.isChild&&t.childIndex===0&&e.value.style.chart.layout.bars.parentLabels.show?(r(),d("text",{key:3,x:3+e.value.style.chart.layout.bars.parentLabels.offsetX,y:E(t,o).y,"font-size":e.value.style.chart.layout.bars.parentLabels.fontSize,fill:e.value.style.chart.layout.bars.parentLabels.color,"font-weight":e.value.style.chart.layout.bars.parentLabels.bold?"bold":"normal","text-anchor":"start"},s(E(t,o).name),9,Ft)):m("",!0),t.isChild&&t.childIndex===0&&e.value.style.chart.layout.bars.parentLabels.show?(r(),d("text",{key:4,x:3+e.value.style.chart.layout.bars.parentLabels.offsetX,y:E(t,o).y+e.value.style.chart.layout.bars.parentLabels.fontSize+6,"font-size":e.value.style.chart.layout.bars.parentLabels.fontSize,fill:e.value.style.chart.layout.bars.parentLabels.color,"font-weight":e.value.style.chart.layout.bars.dataLabels.bold?"bold":"normal","text-anchor":"start"},s(_e(E(t,o).value),E(t,o),o,t.parentSign||t.sign),9,It)):m("",!0),u("rect",{"data-cy-trap":"",x:0,y:i.value.top+(g.value+c.value)*o-g.value/2,width:y.value.width<=0?1e-4:y.value.width,height:c.value+g.value<=0?1e-4:c.value+g.value,fill:oe.value===t.id?h(se)(e.value.style.chart.layout.highlighter.color,e.value.style.chart.layout.highlighter.opacity):"transparent",onMouseenter:b=>He(t,o),onMouseleave:l[1]||(l[1]=b=>{Ge.value=null,ee.value=!1,oe.value=null})},null,40,Ot)]))),256)),k(a.$slots,"svg",{svg:y.value},void 0,!0)],14,Ct)):m("",!0),a.$slots.watermark?(r(),d("div",Bt,[k(a.$slots,"watermark",q(Q({isPrinting:h(he)||h(pe)})),void 0,!0)])):m("",!0),H.value?m("",!0):(r(),j(bt,{key:5,config:{type:"verticalBar",style:{backgroundColor:e.value.style.chart.backgroundColor,verticalBar:{axis:{color:"#CCCCCC"},color:"#CCCCCC"}}}},null,8,["config"])),e.value.style.chart.legend.show&&e.value.style.chart.legend.position==="bottom"?(r(),d("div",{key:6,ref_key:"chartLegend",ref:ae},[(r(),j(ze,{key:`legend_bottom_${le.value}`,legendSet:z.value,config:ke.value,onClickMarker:l[2]||(l[2]=({legend:t})=>X(t.id))},{item:$(({legend:t,index:o})=>[u("div",{onClick:b=>X(t.id),style:n(`opacity:${T.value.includes(t.id)?.5:1}`)},s(t.name)+": "+s(h(Z)(e.value.style.chart.layout.bars.dataLabels.value.formatter,t.value,h(I)({p:e.value.style.chart.legend.prefix,v:t.value,s:e.value.style.chart.legend.suffix,r:e.value.style.chart.legend.roundingValue}),{datapoint:t,seriesIndex:o})),13,jt)]),_:1},8,["legendSet","config"]))],512)):m("",!0),k(a.$slots,"legend",{legend:z.value},void 0,!0),re(yt,{show:w.value.showTooltip&&ee.value&&T.value.length<C.dataset.length,backgroundColor:e.value.style.chart.tooltip.backgroundColor,color:e.value.style.chart.tooltip.color,borderRadius:e.value.style.chart.tooltip.borderRadius,borderColor:e.value.style.chart.tooltip.borderColor,borderWidth:e.value.style.chart.tooltip.borderWidth,fontSize:e.value.style.chart.tooltip.fontSize,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity,position:e.value.style.chart.tooltip.position,offsetY:e.value.style.chart.tooltip.offsetY,parent:R.value,content:te.value,isCustom:e.value.style.chart.tooltip.customFormat&&typeof e.value.style.chart.tooltip.customFormat=="function"},{"tooltip-before":$(()=>[k(a.$slots,"tooltip-before",q(Q({...ue.value})),void 0,!0)]),"tooltip-after":$(()=>[k(a.$slots,"tooltip-after",q(Q({...ue.value})),void 0,!0)]),_:3},8,["show","backgroundColor","color","borderRadius","borderColor","borderWidth","fontSize","backgroundOpacity","position","offsetY","parent","content","isCustom"]),H.value?(r(),j(xt,{key:7,hideDetails:"",config:{open:w.value.showTable,maxHeight:1e4,body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:$(()=>[u("div",{ref_key:"tableContainer",ref:fe,class:"vue-ui-vertical-bar-table"},[u("div",Gt,[u("div",{role:"button",tabindex:"0",style:n(`width:32px; position: absolute; top: 0; right:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${e.value.table.th.backgroundColor};`),onClick:l[3]||(l[3]=t=>w.value.showTable=!1),onKeypress:l[4]||(l[4]=Je(t=>w.value.showTable=!1,["enter"]))},[re(mt,{name:"close",stroke:e.value.table.th.color,"stroke-width":2},null,8,["stroke"])],36),u("div",{style:{width:"100%","container-type":"inline-size"},class:G({"vue-ui-responsive":me.value})},[u("table",Rt,[u("caption",{style:n({backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline}),class:"vue-ui-data-table__caption"},[Ze(s(e.value.style.chart.title.text)+" ",1),e.value.style.chart.title.subtitle.text?(r(),d("span",Xt,s(e.value.style.chart.title.subtitle.text),1)):m("",!0)],4),u("thead",null,[u("tr",{role:"row",style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color}`)},[(r(!0),d(A,null,D(_.value.head,t=>(r(),d("th",{style:n(`outline:${e.value.table.th.outline}`)},[u("div",Et,s(t),1)],4))),256))],4),u("tr",null,[u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)},null,4),u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline};text-align:right;padding-right:5px;font-weight:bold`)},"∑ "+s(e.value.table.td.prefix)+s(isNaN(L.value)?"":L.value.toFixed(e.value.table.td.roundingValue))+s(e.value.table.td.suffix),5),u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline};text-align:right;padding-right:5px;font-weight:bold`)},"100%",4),u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)},null,4),u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)},null,4),u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)},null,4),u("th",{style:n(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)},null,4)])]),u("tbody",null,[(r(!0),d(A,null,D(_.value.body,(t,o)=>(r(),d("tr",{class:G({"vue-ui-data-table__tbody__row":!0,"vue-ui-data-table__tbody__row-even":o%2===0,"vue-ui-data-table__tbody__row-odd":o%2!==0}),style:n(`background:${e.value.table.td.backgroundColor};color:${e.value.table.td.color}`)},[u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline};font-variant-numeric: tabular-nums;`),"data-cell":_.value.head[0]??""},[u("div",At,[t.color?(r(),d("span",{key:0,style:n(`color:${t.color};margin-right:3px`)},"⬤",4)):m("",!0),u("span",null,s(t.parentName),1)])],12,Wt),u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline}`),"data-cell":_.value.head[1]??""},[u("div",Ht,s(e.value.table.td.prefix)+s(["",NaN,void 0].includes(t.parentValue)?"":t.parentValue.toFixed(e.value.table.td.roundingValue))+s(e.value.table.td.suffix),1)],12,Dt),u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline}`),"data-cell":_.value.head[2]??""},[u("div",Yt,s(["",NaN,void 0].includes(t.percentageToTotal)?"":`${(t.percentageToTotal*100).toFixed(e.value.table.td.roundingPercentage)}%`),1)],12,Ut),u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline}`),"data-cell":_.value.head[3]??""},[u("div",qt,s(t.childName),1)],12,Kt),u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline}`),"data-cell":_.value.head[4]??""},[u("div",Jt,s(e.value.table.td.prefix)+s(["",NaN,void 0].includes(t.childValue)?"":t.childValue.toFixed(e.value.table.td.roundingValue))+s(e.value.table.td.suffix),1)],12,Qt),u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline}`),"data-cell":_.value.head[5]??""},[u("div",ea,s(["",NaN,void 0].includes(t.childPercentageToParent)?"":`${(t.childPercentageToParent*100).toFixed(e.value.table.td.roundingPercentage)}%`),1)],12,Zt),u("td",{class:"vue-ui-data-table__tbody__td",style:n(`outline:${e.value.table.td.outline}`),"data-cell":_.value.head[6]??""},[u("div",aa,s(["",NaN,void 0].includes(t.childPercentageToTotal)?"":`${(t.childPercentageToTotal*100).toFixed(e.value.table.td.roundingPercentage)}%`),1)],12,ta)],6))),256))])])],2)])],512)]),_:1},8,["config"])):m("",!0)],14,kt))}},ba=ft(la,[["__scopeId","data-v-008d2191"]]);export{ba as default};
