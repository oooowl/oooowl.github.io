import{o as Ne,L as Ae,G as Ye,R as Be,e as he,a as Re,X as Ge,K as W,j as Ve,Q as Xe,b as F,n as j,H as ge,N as ze,O as De,$ as Le}from"../chart.md.hi_nZSnT.js";import{O as He,M as Ee}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as Ue}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as We,i as je}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import{C as Ke}from"./Legend-DXLiSLHd.5wpQgPWV.js";import{W as Qe}from"./DataTable-DL2agEJ3.DwhyhpBD.js";import{E as qe}from"./Tooltip-CICAYyQj.DC7pN5Ho.js";import Je from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import Ze from"./vue-ui-accordion-D_1fE5EF.ggAyum2g.js";import{c as pe}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as et}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as tt}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as c,p as n,q as fe,v as at,Y as lt,o as s,c as u,b as C,e as b,aj as ot,w as h,r as p,ak as G,al as V,k as d,n as X,N as K,G as ye,F as S,C as N,j as T,t as O,a as rt,P as st}from"./framework.BaNfDZ-f.js";import"./Shape-CO_Ak9Zm.UkrUmJI7.js";const nt=["id"],ut=["xmlns","viewBox"],it=["cx","cy","r","stroke","stroke-width","stroke-dasharray","stroke-dashoffset"],vt=["cx","cy","r","stroke","stroke-width","stroke-dasharray","stroke-dashoffset"],ct=["id"],dt=["stdDeviation"],ht=["filter"],gt=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset"],pt=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset","onMouseenter"],ft={key:1},yt=["onMouseenter"],mt=["x","y","font-size","fill","font-weight"],bt={key:3,class:"vue-data-ui-watermark"},kt=["onClick"],$t=["innerHTML"],xt={__name:"vue-ui-onion",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}}},emits:["selectLegend"],setup(me,{expose:be,emit:ke}){const k=me,{vue_ui_onion:$e}=Ne(),A=c(()=>!!k.dataset&&k.dataset.length),w=n(Ae()),xe=n(null),Q=n(0),Y=n(!1),z=n(""),f=n([]),I=n(null),q=n(null),J=n(null),Z=n(0),ee=n(0),te=n(0),e=c({get:()=>ae(),set:a=>a});function ae(){const a=pe({userConfig:k.config,defaultConfig:$e});return a.theme?{...pe({userConfig:Ye.vue_ui_onion[a.theme]||k.config,defaultConfig:a}),customPalette:Be[a.theme]||he}:a}fe(()=>k.config,a=>{e.value=ae(),ne(),Z.value+=1,ee.value+=1,te.value+=1},{deep:!0});const{isPrinting:le,isImaging:oe,generatePdf:re,generateImage:se}=We({elementId:`vue-ui-onion_${w.value}`,fileName:e.value.style.chart.title.text||"vue-ui-onion"}),we=c(()=>Re(e.value.customPalette)),$=n({showTable:e.value.table.show,showTooltip:e.value.style.chart.tooltip.show}),r=n({height:512,width:512,padding:{top:64,left:64,right:64,bottom:64},minRadius:64}),B=n(null);at(()=>{ne()});function ne(){if(Ge(k.dataset)&&W({componentName:"VueUiOnion",type:"dataset"}),e.value.responsive){const a=He(()=>{const{width:l,height:t}=Ee({chart:I.value,title:e.value.style.chart.title.text?q.value:null,legend:e.value.style.chart.legend.show?J.value:null});r.value.width=l,r.value.height=t,r.value.padding.top=Math.max(l,t)*.125,r.value.padding.right=Math.max(l,t)*.125,r.value.padding.bottom=Math.max(l,t)*.125,r.value.padding.left=Math.max(l,t)*.125,r.value.minRadius=Math.min(l,t)*.125});B.value=new ResizeObserver(a),B.value.observe(I.value.parentNode)}}lt(()=>{B.value&&B.value.disconnect()});const i=c(()=>({top:r.value.padding.top,left:r.value.padding.left,right:r.value.width-r.value.padding.right,bottom:r.value.height-r.value.padding.bottom,centerX:r.value.width/2,centerY:r.value.height/2,width:r.value.width-r.value.padding.right-r.value.padding.left,height:r.value.height-r.value.padding.bottom-r.value.padding.top,minRadius:r.value.minRadius,maxRadius:Math.min(r.value.width,r.value.height)-r.value.padding.top*2})),v=c(()=>(k.dataset.forEach((a,l)=>{[null,void 0].includes(a.name)&&W({componentName:"VueUiOnion",type:"datasetSerieAttribute",property:"name",index:l}),[void 0].includes(a.percentage)&&W({componentName:"VueUiOnion",type:"datasetSerieAttribute",property:"percentage",index:l})}),k.dataset.map((a,l)=>{const t=`onion_serie_${l}_${w.value}`;return{...a,percentage:a.percentage||0,targetPercentage:a.percentage||0,color:Ve(a.color)||we.value[l]||he[l],id:t,shape:"circle",opacity:f.value.includes(t)?.5:1,absoluteIndex:l,segregate:()=>ue(t),isSegregated:f.value.includes(t)}}))),P=n(v.value),Ce=c(()=>e.value.useStartAnimation),Te=n(null),Oe=c(()=>Math.max(...v.value.map(a=>a.percentage))),D=n(!1);fe(()=>v.value,Ie,{immediate:!0});function Ie(){if(Ce.value&&!D.value){let a=function(){l>=Oe.value?(cancelAnimationFrame(Te.value),P.value=v.value,D.value=!0):(P.value=v.value.map(t=>({...t,percentage:l<t.targetPercentage?l:t.targetPercentage})),l+=1,requestAnimationFrame(a),D.value=!0)};P.value=v.value.map(t=>({...t,percentage:0}));let l=0;a()}else P.value=v.value}const Pe=c(()=>({cy:"onion-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),_e=c(()=>v.value.filter(a=>!f.value.includes(a.id)).length),x=c(()=>{const a=Math.min(i.value.width,i.value.height)/2/v.value.length;return{gutter:(a>e.value.style.chart.layout.maxThickness?e.value.style.chart.layout.maxThickness:a)*e.value.style.chart.layout.gutter.width,track:(a>e.value.style.chart.layout.maxThickness?e.value.style.chart.layout.maxThickness:a)*e.value.style.chart.layout.track.width}}),y=c(()=>P.value.filter(a=>!f.value.includes(a.id)).map((a,l)=>{const t=(i.value.maxRadius-x.value.track)/_e.value/2*(1+l),o=i.value.centerY-t;return{percentage:a.percentage||0,...a,labelY:o,radius:t,path:Me(t,a.percentage||0)}}));function Me(a,l){const t=2*Math.PI*a,o=t*.75,g=`${o} ${t}`,M=o*(1-l/100);return{bgDashArray:`${o} ${t}`,bgDashOffset:0,dashArray:g,dashOffset:M,fullOffset:0,active:`
            M ${i.value.centerX},${i.value.centerY-a} 
            A ${a},${a} 0 1 1 
            ${i.value.centerX+a*Math.cos(Math.PI*3/4)},${i.value.centerY+a*Math.sin(Math.PI*3/4)}
        `.trim()}}function ue(a){f.value.includes(a)?f.value=f.value.filter(l=>l!==a):f.value.push(a),ke("selectLegend",y.value)}function Fe(){return y.value}const L=c(()=>{const a=[e.value.table.translations.serie,e.value.table.translations.percentage,e.value.table.translations.value],l=y.value.map(t=>[t.name,t.percentage,t.value]);return{head:a,body:l}}),R=c(()=>{const a=L.value.head,l=y.value.map(o=>[`<span style="color:${o.color}">⬤</span> ${o.name}`,`${Number(o.percentage??0).toFixed(e.value.table.td.roundingPercentage).toLocaleString()}%`,`${o.prefix||""}${[null,void 0,NaN,"NaN"].includes(o.value)?"-":o.value.toFixed(e.value.table.td.roundingValue).toLocaleString()}${o.suffix||""}`]),t={th:{backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline},td:{backgroundColor:e.value.table.td.backgroundColor,color:e.value.table.td.color,outline:e.value.table.td.outline},breakpoint:e.value.table.responsiveBreakpoint};return{head:a,body:l,config:t,colNames:a}});function ie(){st(()=>{const a=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[""]],l=L.value.head,t=L.value.body,o=a.concat([l]).concat(t),g=ze(o);De({csvContent:g,title:e.value.style.chart.title.text||"vue-ui-onion"})})}const m=n(void 0),_=n(!1);function Se(a){_.value=a,Q.value+=1}const H=n(null);function ve({datapoint:a,seriesIndex:l,show:t=!0}){const o=a.absoluteIndex;m.value=l,H.value={datapoint:a,seriesIndex:o,series:v.value,config:e.value},Y.value=t;let g="";const M=e.value.style.chart.tooltip.customFormat;if(ge(M)&&Le(()=>M({seriesIndex:o,datapoint:a,series:v.value,config:e.value})))z.value=M({seriesIndex:o,datapoint:a,series:v.value,config:e.value});else{const E=e.value.style.chart.tooltip.showPercentage,U=e.value.style.chart.tooltip.showValue;g+=`<div style="width: 100%; border-bottom: 1px solid ${e.value.style.chart.tooltip.borderColor}; padding-bottom: 6px;margin-bottom:3px;display:flex;flex-direction:row;gap:3px;align-items:center"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${a.color}"/></svg><span></span>${a.name}</span></div>`,g+=`<div style="width:100%;text-align:left;"><b>${E?F({p:"",v:a.percentage,s:"%",r:e.value.style.chart.tooltip.roundingPercentage}):""}</b> ${E&&U?"(":""}${U?j(e.value.style.chart.layout.labels.value.formatter,a.value,F({p:a.prefix||"",v:a.value,s:a.suffix||"",r:e.value.style.chart.tooltip.roundingValue}),{datapoint:a,seriesIndex:l}):""}${E&&U?")":""}</div>`,z.value=`<div>${g}</div>`}}function ce(){$.value.showTable=!$.value.showTable}function de(){$.value.showTooltip=!$.value.showTooltip}return be({getData:Fe,generatePdf:re,generateCsv:ie,generateImage:se,toggleTable:ce,toggleTooltip:de}),(a,l)=>(s(),u("div",{class:X(`vue-ui-onion ${_.value?"vue-data-ui-wrapper-fullscreen":""} ${e.value.useCssAnimation?"":"vue-ui-dna"}`),ref_key:"onionChart",ref:I,id:`vue-ui-onion_${w.value}`,style:K(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive?"height: 100%;":""} text-align:center;background:${e.value.style.chart.backgroundColor}`)},[e.value.style.chart.title.text?(s(),u("div",{key:0,ref_key:"chartTitle",ref:q,style:"width:100%;background:transparent"},[(s(),C(Ue,{key:`title_${Z.value}`,config:{title:{cy:"onion-div-title",...e.value.style.chart.title},subtitle:{cy:"onion-div-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):b("",!0),e.value.userOptions.show&&A.value?(s(),C(je,{ref_key:"details",ref:xe,key:`user_options${Q.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isImaging:d(oe),isPrinting:d(le),uid:w.value,hasTooltip:e.value.userOptions.buttons.tooltip&&e.value.style.chart.tooltip.show,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasXls:e.value.userOptions.buttons.csv,hasTable:e.value.userOptions.buttons.table,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:_.value,isTooltip:$.value.showTooltip,titles:{...e.value.userOptions.buttonTitles},chartElement:I.value,position:e.value.userOptions.position,onToggleFullscreen:Se,onGeneratePdf:d(re),onGenerateCsv:ie,onGenerateImage:d(se),onToggleTable:ce,onToggleTooltip:de},ot({_:2},[a.$slots.optionTooltip?{name:"optionTooltip",fn:h(()=>[p(a.$slots,"optionTooltip",{},void 0,!0)]),key:"0"}:void 0,a.$slots.optionPdf?{name:"optionPdf",fn:h(()=>[p(a.$slots,"optionPdf",{},void 0,!0)]),key:"1"}:void 0,a.$slots.optionCsv?{name:"optionCsv",fn:h(()=>[p(a.$slots,"optionCsv",{},void 0,!0)]),key:"2"}:void 0,a.$slots.optionImg?{name:"optionImg",fn:h(()=>[p(a.$slots,"optionImg",{},void 0,!0)]),key:"3"}:void 0,a.$slots.optionTable?{name:"optionTable",fn:h(()=>[p(a.$slots,"optionTable",{},void 0,!0)]),key:"4"}:void 0,a.$slots.optionFullscreen?{name:"optionFullscreen",fn:h(({toggleFullscreen:t,isFullscreen:o})=>[p(a.$slots,"optionFullscreen",G(V({toggleFullscreen:t,isFullscreen:o})),void 0,!0)]),key:"5"}:void 0]),1032,["backgroundColor","color","isImaging","isPrinting","uid","hasTooltip","hasPdf","hasImg","hasXls","hasTable","hasFullscreen","isFullscreen","isTooltip","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):b("",!0),A.value?(s(),u("svg",{key:2,xmlns:d(Xe),class:X({"vue-data-ui-fullscreen--on":_.value,"vue-data-ui-fulscreen--off":!_.value}),viewBox:`0 0 ${r.value.width<=0?1e-4:r.value.width} ${r.value.height<=0?1e-4:r.value.height}`,style:K(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)},[ye(et),(s(!0),u(S,null,N(y.value,(t,o)=>(s(),u("circle",{cx:i.value.centerX,cy:i.value.centerY,r:t.radius<=0?1e-4:t.radius,stroke:e.value.style.chart.layout.gutter.color,"stroke-width":x.value.gutter,fill:"none","stroke-dasharray":t.path.bgDashArray,"stroke-dashoffset":t.path.fullOffset,"stroke-linecap":"round",class:X({"vue-ui-onion-path":!0,"vue-ui-onion-blur":e.value.useBlurOnHover&&![null,void 0].includes(m.value)&&m.value!==o}),style:{transform:"rotate(-90deg)","transform-origin":"50% 50%"}},null,10,it))),256)),(s(!0),u(S,null,N(y.value,(t,o)=>(s(),u("circle",{cx:i.value.centerX,cy:i.value.centerY,r:t.radius<0?1e-4:t.radius,stroke:`${t.color}`,"stroke-width":x.value.track,fill:"none","stroke-dasharray":t.path.dashArray,"stroke-dashoffset":t.path.dashOffset,class:X({"vue-ui-onion-path":!0,"vue-ui-onion-blur":e.value.useBlurOnHover&&![null,void 0].includes(m.value)&&m.value!==o}),"stroke-linecap":"round",style:{transform:"rotate(-90deg)","transform-origin":"50% 50%"}},null,10,vt))),256)),T("defs",null,[T("filter",{id:`blur_${w.value}`,x:"-50%",y:"-50%",width:"200%",height:"200%"},[T("feGaussianBlur",{in:"SourceGraphic",stdDeviation:100/e.value.style.chart.gradientIntensity},null,8,dt)],8,ct)]),e.value.style.chart.useGradient?(s(),u("g",{key:0,filter:`url(#blur_${w.value})`},[(s(!0),u(S,null,N(y.value,(t,o)=>(s(),u("circle",{cx:i.value.centerX,cy:i.value.centerY,r:t.radius<=0?1e-4:t.radius,stroke:"white","stroke-width":x.value.track/3,fill:"none","stroke-linecap":"round","stroke-dasharray":t.path.dashArray,"stroke-dashoffset":t.path.dashOffset,style:{transform:"rotate(-90deg)","transform-origin":"50% 50%"}},null,8,gt))),256))],8,ht)):b("",!0),(s(!0),u(S,null,N(y.value,(t,o)=>(s(),u("circle",{"data-cy-trap":"",cx:i.value.centerX,cy:i.value.centerY,r:t.radius<=0?1e-4:t.radius,stroke:"transparent","stroke-width":Math.max(x.value.track,x.value.gutter),fill:"none","stroke-dasharray":t.path.bgDashArray,"stroke-dashoffset":t.path.fullOffset,"stroke-linecap":"round",class:"vue-ui-onion-path",style:{transform:"rotate(-90deg)","transform-origin":"50% 50%"},onMouseenter:g=>ve({datapoint:t,show:!0,seriesIndex:o}),onMouseleave:l[0]||(l[0]=g=>{m.value=void 0,Y.value=!1})},null,40,pt))),256)),e.value.style.chart.layout.labels.show?(s(),u("g",ft,[(s(!0),u(S,null,N(y.value,(t,o)=>(s(),u("g",{onMouseenter:g=>ve({datapoint:t,show:!0,seriesIndex:o}),onMouseleave:l[1]||(l[1]=g=>{m.value=void 0,Y.value=!1})},[f.value.includes(t.id)?b("",!0):(s(),u("text",{key:0,x:r.value.width/2-x.value.gutter*.8+e.value.style.chart.layout.labels.offsetX,y:t.labelY+e.value.style.chart.layout.labels.offsetY,"text-anchor":"end","font-size":e.value.style.chart.layout.labels.fontSize,fill:e.value.useBlurOnHover&&![null,void 0].includes(m.value)&&m.value===o?t.color:e.value.style.chart.layout.labels.color,"font-weight":e.value.style.chart.layout.labels.bold?"bold":"normal"},O(t.name?t.name+": ":"")+" "+O(e.value.style.chart.layout.labels.percentage.show?d(F)({v:t.percentage,s:"%",r:e.value.style.chart.layout.labels.roundingPercentage}):"")+" "+O(!e.value.style.chart.layout.labels.percentage.show&&e.value.style.chart.layout.labels.value.show?`: ${d(j)(e.value.style.chart.layout.labels.value.formatter,t.value,d(F)({p:t.prefix||"",v:t.value||0,s:t.suffix||"",r:e.value.style.chart.layout.labels.roundingValue}),{datapoint:t,seriesIndex:o})}`:`${e.value.style.chart.layout.labels.value.show&&t.value?`(${d(j)(e.value.style.chart.layout.labels.value.formatter,t.value,d(F)({p:t.prefix||"",v:t.value||0,s:t.suffix||"",r:e.value.style.chart.layout.labels.roundingValue}),{datapoint:t,seriesIndex:o})})`:""}`),9,mt))],40,yt))),256))])):b("",!0),p(a.$slots,"svg",{svg:r.value},void 0,!0)],14,ut)):b("",!0),a.$slots.watermark?(s(),u("div",bt,[p(a.$slots,"watermark",G(V({isPrinting:d(le)||d(oe)})),void 0,!0)])):b("",!0),A.value?b("",!0):(s(),C(Je,{key:4,config:{type:"onion",style:{backgroundColor:e.value.style.chart.backgroundColor,onion:{color:e.value.style.chart.layout.gutter.color}}}},null,8,["config"])),T("div",{ref_key:"chartLegend",ref:J},[e.value.style.chart.legend.show?(s(),C(Ke,{key:`legend_${te.value}`,legendSet:v.value,config:Pe.value,onClickMarker:l[2]||(l[2]=({legend:t})=>ue(t.id))},{item:h(({legend:t})=>[T("div",{"data-cy-legend-item":"",onClick:o=>t.segregate(),style:K(`opacity:${f.value.includes(t.id)?.5:1}`)},O(t.name?t.name+": ":"")+" "+O((t.percentage||0).toFixed(e.value.style.chart.legend.roundingPercentage))+"% ",13,kt)]),_:1},8,["legendSet","config"])):p(a.$slots,"legend",{key:1,legend:v.value},void 0,!0)],512),ye(qe,{show:$.value.showTooltip&&Y.value,backgroundColor:e.value.style.chart.tooltip.backgroundColor,color:e.value.style.chart.tooltip.color,borderRadius:e.value.style.chart.tooltip.borderRadius,borderColor:e.value.style.chart.tooltip.borderColor,borderWidth:e.value.style.chart.tooltip.borderWidth,fontSize:e.value.style.chart.tooltip.fontSize,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity,position:e.value.style.chart.tooltip.position,offsetY:e.value.style.chart.tooltip.offsetY,parent:I.value,content:z.value,isCustom:d(ge)(e.value.style.chart.tooltip.customFormat)},{"tooltip-before":h(()=>[p(a.$slots,"tooltip-before",G(V({...H.value})),void 0,!0)]),"tooltip-after":h(()=>[p(a.$slots,"tooltip-after",G(V({...H.value})),void 0,!0)]),_:3},8,["show","backgroundColor","color","borderRadius","borderColor","borderWidth","fontSize","backgroundOpacity","position","offsetY","parent","content","isCustom"]),A.value?(s(),C(Ze,{key:5,hideDetails:"",config:{open:$.value.showTable,maxHeight:1e4,head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:h(()=>[(s(),C(Qe,{key:`table_${ee.value}`,colNames:R.value.colNames,head:R.value.head,body:R.value.body,config:R.value.config,title:`${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text?` : ${e.value.style.chart.title.subtitle.text}`:""}`,onClose:l[3]||(l[3]=t=>$.value.showTable=!1)},{th:h(({th:t})=>[rt(O(t),1)]),td:h(({td:t})=>[T("div",{innerHTML:t},null,8,$t)]),_:1},8,["colNames","head","body","config","title"]))]),_:1},8,["config"])):b("",!0)],14,nt))}},Rt=tt(xt,[["__scopeId","data-v-3e9f72db"]]);export{Rt as default};