import{o as Ve,L as Ge,G as We,R as je,e as C,X as Ee,K as N,a as Be,q as be,j as ke,v as xe,k as Xe,n as $e,b as L,Q as Ye,c as Q,p as Ue,T as Ce,H as qe,$ as De,N as Ke,O as Qe}from"../chart.md.hi_nZSnT.js";import{O as He,M as Je}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as Ze}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as et,i as tt}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import{E as at}from"./Tooltip-CICAYyQj.DC7pN5Ho.js";import lt from"./vue-ui-sparkbar-Bb1fq2GR.DHdsNw45.js";import{C as ot}from"./Legend-DXLiSLHd.5wpQgPWV.js";import{W as rt}from"./DataTable-DL2agEJ3.DwhyhpBD.js";import st from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import ut from"./vue-ui-accordion-D_1fE5EF.ggAyum2g.js";import{c as we}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as it}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as nt}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as p,p as n,q as vt,v as ct,Y as dt,o as s,c as u,b as F,e as y,aj as pt,w as m,r as f,ak as j,al as E,k as g,n as M,N as H,G as J,j as w,F as T,C as _,t as R,a as Te,P as gt}from"./framework.BaNfDZ-f.js";import"./Shape-CO_Ak9Zm.UkrUmJI7.js";const ht=["id"],yt=["xmlns","viewBox"],mt=["id"],ft=["stop-color"],bt=["stop-color"],kt={key:0},xt=["x1","y1","x2","y2","stroke","stroke-width"],$t={key:0},Ct=["d","stroke","stroke-width"],wt=["d","stroke","stroke-width"],Tt={key:1},_t=["x","y","text-anchor","font-size","fill","onMouseenter"],Pt=["points","stroke","stroke-width"],Ot=["points","stroke","stroke-width","fill"],Nt={key:2},Ft=["cx","cy","fill","r","stroke"],It={key:3,class:"vue-data-ui-watermark"},At=["onClick"],St={key:0,style:{"max-width":"200px",margin:"0 auto"}},zt={__name:"vue-ui-radar",props:{config:{type:Object,default(){return{}}},dataset:{type:Object,default(){return{}}}},emits:["selectLegend"],setup(_e,{expose:Pe,emit:Oe}){const d=_e,{vue_ui_radar:Ne}=Ve(),I=p(()=>!!d.dataset&&Object.keys(d.dataset).length),$=n(Ge()),Fe=n(null),B=n(!1),X=n(""),Z=n(0),A=n(null),ee=n(null),te=n(null),ae=n(0),le=n(0),oe=n(0),e=p({get:()=>re(),set:t=>t});function re(){const t=we({userConfig:d.config,defaultConfig:Ne});return t.theme?{...we({userConfig:We.vue_ui_radar[t.theme]||d.config,defaultConfig:t}),customPalette:je[t.theme]||C}:t}vt(()=>d.config,t=>{e.value=re(),se(),ae.value+=1,le.value+=1,oe.value+=1},{deep:!0});const V=n(null);function se(){if(Ee(d.dataset)&&N({componentName:"VueUiRadar",type:"dataset"}),e.value.responsive){const t=He(()=>{const{width:a,height:l}=Je({chart:A.value,title:e.value.style.chart.title.text?ee.value:null,legend:e.value.style.chart.legend.show?te.value:null});i.value.width=a,i.value.height=l});V.value=new ResizeObserver(t),V.value.observe(A.value.parentNode)}}ct(()=>{se()}),dt(()=>{V.value&&V.value.disconnect()});const{isPrinting:ue,isImaging:ie,generatePdf:ne,generateImage:ve}=et({elementId:`vue-ui-radar_${$.value}`,fileName:e.value.style.chart.title.text||"vue-ui-radar"}),ce=p(()=>Be(e.value.customPalette)),k=n({dataLabels:{show:e.value.style.chart.layout.labels.dataLabels.show},showTable:e.value.table.show,showTooltip:e.value.style.chart.tooltip.show}),Ie=p(()=>({style:{backgroundColor:e.value.style.chart.tooltip.backgroundColor,animation:{show:e.value.style.chart.tooltip.animation.show,animationFrames:e.value.style.chart.tooltip.animation.animationFrames},labels:{fontSize:e.value.style.chart.tooltip.fontSize,name:{color:e.value.style.chart.tooltip.color}},gutter:{backgroundColor:"#CCCCCC",opacity:30}}})),i=n({height:312,width:512}),v=n([]),S=n(null),P=n(!1);function de(t){P.value=!0,v.value.includes(t)?(S.value=t,v.value=v.value.filter(a=>a!==t),setTimeout(()=>{P.value=!1,S.value=null},500)):(v.value.push(t),setTimeout(()=>{P.value=!1},500)),Oe("selectLegend",O.value.filter((a,l)=>!v.value.includes(l)).map(a=>({name:a.name,color:a.color,proportion:a.totalProportion})))}function Ae(){return O.value.map(t=>({name:t.name,color:t.color,proportion:t.totalProportion}))}const h=p(()=>[null,void 0].includes(d.dataset.categories)?(N({componentName:"VueUiRadar",type:"datasetAttribute",property:"categories ({ name: string; prefix?: string; suffix?: string}[])"}),[]):(d.dataset.categories.length===0?N({componentName:"VueUiRadar",type:"datasetAttributeEmpty",property:"categories"}):d.dataset.categories.forEach((t,a)=>{be({datasetObject:t,requiredAttributes:["name"]}).forEach(l=>{N({componentName:"VueUiRadar",type:"datasetAttribute",property:`category.${l} at index ${a}`,index:a})})}),[null,void 0].includes(d.dataset.series)?N({componentName:"VueUiRadar",type:"datasetAttribute",property:"series ({ name: string; values: number[]; color?: string; target: number}[])"}):d.dataset.series.forEach((t,a)=>{be({datasetObject:t,requiredAttributes:["name","values","target"]}).forEach(l=>{N({componentName:"VueUiRadar",type:"datasetSerieAttribute",key:"series",property:l,index:a})})}),d.dataset.categories.map((t,a)=>({name:t.name,categoryId:`radar_category_${$.value}_${a}`,color:ke(t.color)||ce.value[a]||C[a]||C[a%C.length],prefix:t.prefix??"",suffix:t.suffix??""})))),b=p(()=>I.value?d.dataset.series.map((t,a)=>({...t,color:ke(t.color)||ce.value[a]||C[a]||C[a%C.length],serieId:`radar_serie_${$.value}_${a}`,formatter:t.formatter||null})):[]),pe=p(()=>Math.max(...b.value.flatMap(t=>t.values))),ge=p(()=>b.value.length),Y=p(()=>Math.min(i.value.width,i.value.height)/3),he=p(()=>xe({plot:{x:i.value.width/2,y:i.value.height/2},radius:Y.value,sides:ge.value,rotation:0})),Se=p(()=>{const t=[];for(let a=0;a<Y.value;a+=Y.value/e.value.style.chart.layout.grid.graduations)t.push(a);return t}),x=p(()=>he.value.coordinates.map((t,a)=>{const l=b.value[a].values.map(o=>ze({centerX:i.value.width/2,centerY:i.value.height/2,apexX:t.x,apexY:t.y,proportion:o/(b.value[a].target||pe.value)}));return{...t,...b.value[a],plots:l}}));function U({x:t,y:a}){let l="middle";return t=Math.round(t),a=Math.round(a),t>i.value.width/2&&(t+=12,l="start"),t<i.value.width/2&&(t-=12,l="end"),a>i.value.height/2&&(a+=20),a<i.value.height/2&&(a-=12),a===i.value.height/2&&(a+=4),{x:t,y:a,anchor:l}}function ze({centerX:t,centerY:a,apexX:l,apexY:o,proportion:r}){return{x:t+(l-t)*r,y:a+(o-a)*r}}const O=p(()=>{const t=b.value.map((a,l)=>a.values.map(o=>o/(a.target||pe.value)));return h.value.map((a,l)=>({...a,totalProportion:Xe(t.map(o=>o[l]).reduce((o,r)=>o+r,0)/b.value.length),shape:"circle",opacity:v.value.includes(l)?.5:1,segregate:()=>de(l),isSegregated:v.value.includes(l)}))}),Le=p(()=>({cy:"radar-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),G=p(()=>{const t=[{name:e.value.translations.datapoint,color:""},{name:e.value.translations.target,color:""},...O.value],a=d.dataset.series.map(o=>[o.name,$e(o.formatter,o.target,L({p:o.prefix,v:o.target,s:o.suffix,r:e.value.table.td.roundingValue})),...o.values.map((r,c)=>`${$e(o.formatter,r,L({p:h.value[c].prefix,v:r,s:h.value[c].suffix,r:e.value.table.td.roundingValue}))} (${isNaN(r/o.target)?"":L({v:r/o.target*100,s:"%",r:e.value.table.td.roundingPercentage})})`)]),l={th:{backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline},td:{backgroundColor:e.value.table.td.backgroundColor,color:e.value.table.td.color,outline:e.value.table.td.outline},breakpoint:e.value.table.responsiveBreakpoint};return{head:t,body:a,config:l,colNames:t}}),W=n(null),q=n([]),D=n(null);function Me(t,a){q.value=[],W.value=a,B.value=!0;let l="";D.value={datapoint:t,seriesIndex:a,series:{categories:h.value,datapoints:b.value,radar:x.value},config:e.value};const o=e.value.style.chart.tooltip.customFormat;if(qe(o)&&De(()=>o({seriesIndex:a,datapoint:t,series:{categories:h.value,datapoints:b.value,radar:x.value},config:e.value})))X.value=o({seriesIndex:a,datapoint:t,series:{categories:h.value,datapoints:b.value,radar:x.value},config:e.value});else{l+=`<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`;for(let r=0;r<t.values.length;r+=1)v.value.includes(r)||q.value.push({name:h.value[r].name,value:t.values[r]/t.target*100,color:h.value[r].color,suffix:"%)",prefix:`${L({p:h.value[r].prefix??"",v:t.values[r],s:h.value[r].suffix??"",r:e.value.style.chart.tooltip.roundingValue})} (`,rounding:e.value.style.chart.tooltip.roundingPercentage,formatter:t.formatter});X.value=l}}function ye(){gt(()=>{const t=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[""]],a=[[""],[e.value.translations.target],...O.value.flatMap(c=>[[c.name],["%"]])],l=d.dataset.series.map((c,Lt)=>[c.name,c.target,...c.values.flatMap(K=>[K,isNaN(K/c.target)?"":K/c.target*100])]),o=t.concat([a]).concat(l),r=Ke(o);Qe({csvContent:r,title:e.value.style.chart.title.text||"vue-ui-radar"})})}const z=n(!1);function Re(t){z.value=t,Z.value+=1}function me(){k.value.showTable=!k.value.showTable}function fe(){k.value.showTooltip=!k.value.showTooltip}return Pe({getData:Ae,generatePdf:ne,generateCsv:ye,generateImage:ve,toggleTable:me,toggleTooltip:fe}),(t,a)=>(s(),u("div",{class:M(`vue-ui-radar ${z.value?"vue-data-ui-wrapper-fullscreen":""} ${e.value.useCssAnimation?"":"vue-ui-dna"}`),ref_key:"radarChart",ref:A,id:`vue-ui-radar_${$.value}`,style:H(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive?"height: 100%;":""} text-align:center;${e.value.style.chart.title.text?"":"padding-top:36px"};background:${e.value.style.chart.backgroundColor}`)},[e.value.style.chart.title.text?(s(),u("div",{key:0,ref_key:"chartTitle",ref:ee,style:"width:100%;background:transparent;padding-bottom:12px"},[(s(),F(Ze,{key:`title_${ae.value}`,config:{title:{cy:"radar-div-title",...e.value.style.chart.title},subtitle:{cy:"radar-div-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):y("",!0),e.value.userOptions.show&&I.value?(s(),F(tt,{ref_key:"details",ref:Fe,key:`user_options_${Z.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isImaging:g(ie),isPrinting:g(ue),uid:$.value,hasTooltip:e.value.userOptions.buttons.tooltip&&e.value.style.chart.tooltip.show,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasXls:e.value.userOptions.buttons.csv,hasTable:e.value.userOptions.buttons.table,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:z.value,isTooltip:k.value.showTooltip,titles:{...e.value.userOptions.buttonTitles},chartElement:A.value,position:e.value.userOptions.position,onToggleFullscreen:Re,onGeneratePdf:g(ne),onGenerateCsv:ye,onGenerateImage:g(ve),onToggleTable:me,onToggleTooltip:fe},pt({_:2},[t.$slots.optionTooltip?{name:"optionTooltip",fn:m(()=>[f(t.$slots,"optionTooltip",{},void 0,!0)]),key:"0"}:void 0,t.$slots.optionPdf?{name:"optionPdf",fn:m(()=>[f(t.$slots,"optionPdf",{},void 0,!0)]),key:"1"}:void 0,t.$slots.optionCsv?{name:"optionCsv",fn:m(()=>[f(t.$slots,"optionCsv",{},void 0,!0)]),key:"2"}:void 0,t.$slots.optionImg?{name:"optionImg",fn:m(()=>[f(t.$slots,"optionImg",{},void 0,!0)]),key:"3"}:void 0,t.$slots.optionTable?{name:"optionTable",fn:m(()=>[f(t.$slots,"optionTable",{},void 0,!0)]),key:"4"}:void 0,t.$slots.optionFullscreen?{name:"optionFullscreen",fn:m(({toggleFullscreen:l,isFullscreen:o})=>[f(t.$slots,"optionFullscreen",j(E({toggleFullscreen:l,isFullscreen:o})),void 0,!0)]),key:"5"}:void 0]),1032,["backgroundColor","color","isImaging","isPrinting","uid","hasTooltip","hasPdf","hasImg","hasXls","hasTable","hasFullscreen","isFullscreen","isTooltip","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):y("",!0),I.value?(s(),u("svg",{key:2,xmlns:g(Ye),class:M({"vue-data-ui-fullscreen--on":z.value,"vue-data-ui-fulscreen--off":!z.value}),viewBox:`0 0 ${i.value.width<=0?10:i.value.width} ${i.value.height<=0?10:i.value.height}`,style:H(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)},[J(it),w("defs",null,[(s(!0),u(T,null,_(h.value,(l,o)=>(s(),u("radialGradient",{cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%",id:`radar_gradient_${$.value}_${o}`},[w("stop",{offset:"0%","stop-color":g(Q)(g(Ue)(l.color,.05),e.value.style.chart.layout.dataPolygon.opacity)},null,8,ft),w("stop",{offset:"100%","stop-color":g(Q)(l.color,e.value.style.chart.layout.dataPolygon.opacity)},null,8,bt)],8,mt))),256))]),e.value.style.chart.layout.grid.show?(s(),u("g",kt,[(s(!0),u(T,null,_(x.value,l=>(s(),u("line",{x1:i.value.width/2,y1:i.value.height/2,x2:l.x,y2:l.y,stroke:e.value.style.chart.layout.grid.stroke,"stroke-width":e.value.style.chart.layout.grid.strokeWidth},null,8,xt))),256)),e.value.style.chart.layout.grid.graduations>0?(s(),u("g",$t,[(s(!0),u(T,null,_(Se.value,l=>(s(),u("path",{d:g(xe)({plot:{x:i.value.width/2,y:i.value.height/2},radius:l,sides:ge.value,rotation:0}).path,fill:"none",stroke:e.value.style.chart.layout.grid.stroke,"stroke-width":e.value.style.chart.layout.grid.strokeWidth},null,8,Ct))),256))])):y("",!0)])):y("",!0),w("path",{d:he.value.path,fill:"none",stroke:e.value.style.chart.layout.outerPolygon.stroke,"stroke-width":e.value.style.chart.layout.outerPolygon.strokeWidth,"stroke-linejoin":"round","stroke-linecap":"round"},null,8,wt),e.value.style.chart.layout.labels.dataLabels.show?(s(),u("g",Tt,[(s(!0),u(T,null,_(x.value,(l,o)=>(s(),u("text",{x:U(l).x,y:U(l).y,"text-anchor":U(l).anchor,"font-size":e.value.style.chart.layout.labels.dataLabels.fontSize,fill:e.value.style.chart.layout.labels.dataLabels.color,onMouseenter:r=>Me(l,o),onMouseleave:a[0]||(a[0]=r=>{B.value=!1,W.value=null})},R(l.name),41,_t))),256))])):y("",!0),(s(!0),u(T,null,_(h.value,(l,o)=>(s(),u("g",null,[w("g",null,[e.value.useCssAnimation||!e.value.useCssAnimation&&!v.value.includes(o)?(s(),u("polygon",{key:0,"data-cy-radar-path":"",points:g(Ce)(x.value.map(r=>r.plots[o]),!1,!0),stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.dataPolygon.strokeWidth+1,fill:"none",class:M({"animated-out":v.value.includes(o)&&e.value.useCssAnimation,"animated-in":P.value&&S.value===o&&e.value.useCssAnimation})},null,10,Pt)):y("",!0),e.value.useCssAnimation||!e.value.useCssAnimation&&!v.value.includes(o)?(s(),u("polygon",{key:1,"data-cy-radar-path":"",points:g(Ce)(x.value.map(r=>r.plots[o]),!1,!0),stroke:l.color,"stroke-width":e.value.style.chart.layout.dataPolygon.strokeWidth,fill:e.value.style.chart.layout.dataPolygon.transparent?"transparent":e.value.style.chart.layout.dataPolygon.useGradient?`url(#radar_gradient_${$.value}_${o})`:g(Q)(l.color,e.value.style.chart.layout.dataPolygon.opacity),class:M({"animated-out":v.value.includes(o)&&e.value.useCssAnimation,"animated-in":P.value&&S.value===o&&e.value.useCssAnimation})},null,10,Ot)):y("",!0)])]))),256)),e.value.style.chart.layout.plots.show?(s(),u("g",Nt,[(s(!0),u(T,null,_(x.value,(l,o)=>(s(),u("g",null,[(s(!0),u(T,null,_(l.plots,(r,c)=>(s(),u("circle",{cx:r.x,cy:r.y,fill:v.value.includes(c)?"transparent":h.value[c].color,r:W.value!==null&&W.value===o?e.value.style.chart.layout.plots.radius*1.6:e.value.style.chart.layout.plots.radius,stroke:v.value.includes(c)?"transparent":e.value.style.chart.backgroundColor,"stroke-width":.5,class:M({"animated-out":v.value.includes(c)&&e.value.useCssAnimation,"animated-in":P.value&&S.value===c&&e.value.useCssAnimation})},null,10,Ft))),256))]))),256))])):y("",!0),f(t.$slots,"svg",{svg:i.value},void 0,!0)],14,yt)):y("",!0),t.$slots.watermark?(s(),u("div",It,[f(t.$slots,"watermark",j(E({isPrinting:g(ue)||g(ie)})),void 0,!0)])):y("",!0),I.value?y("",!0):(s(),F(st,{key:4,config:{type:"radar",style:{backgroundColor:e.value.style.chart.backgroundColor,radar:{grid:{color:e.value.style.chart.layout.outerPolygon.stroke},shapes:{color:e.value.style.chart.layout.outerPolygon.stroke}}}}},null,8,["config"])),w("div",{ref_key:"chartLegend",ref:te},[e.value.style.chart.legend.show?(s(),F(ot,{key:`legend_${oe.value}`,legendSet:O.value,config:Le.value,onClickMarker:a[1]||(a[1]=({i:l})=>de(l))},{item:m(({legend:l,index:o})=>[w("div",{"data-cy-legend-item":"",onClick:r=>l.segregate(),style:H(`opacity:${v.value.includes(o)?.5:1}`)},R(l.name)+": "+R(g(L)({v:l.totalProportion*100,s:"%",r:e.value.style.chart.legend.roundingPercentage})),13,At)]),_:1},8,["legendSet","config"])):f(t.$slots,"legend",{key:1,legend:O.value},void 0,!0)],512),J(at,{show:k.value.showTooltip&&B.value,backgroundColor:e.value.style.chart.tooltip.backgroundColor,color:e.value.style.chart.tooltip.color,borderRadius:e.value.style.chart.tooltip.borderRadius,borderColor:e.value.style.chart.tooltip.borderColor,borderWidth:e.value.style.chart.tooltip.borderWidth,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity,fontSize:e.value.style.chart.tooltip.fontSize,position:e.value.style.chart.tooltip.position,offsetY:e.value.style.chart.tooltip.offsetY,parent:A.value,content:X.value,isCustom:e.value.style.chart.tooltip.customFormat&&typeof e.value.style.chart.tooltip.customFormat=="function"},{"tooltip-before":m(()=>[f(t.$slots,"tooltip-before",j(E({...D.value})),void 0,!0)]),"tooltip-after":m(()=>[["function"].includes(typeof e.value.style.chart.tooltip.customFormat)?y("",!0):(s(),u("div",St,[J(lt,{dataset:q.value,config:Ie.value,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity},null,8,["dataset","config","backgroundOpacity"])])),f(t.$slots,"tooltip-after",j(E({...D.value})),void 0,!0)]),_:3},8,["show","backgroundColor","color","borderRadius","borderColor","borderWidth","backgroundOpacity","fontSize","position","offsetY","parent","content","isCustom"]),I.value?(s(),F(ut,{key:5,hideDetails:"",config:{open:k.value.showTable,maxHeight:1e4,body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:m(()=>[(s(),F(rt,{key:`table_${le.value}`,colNames:G.value.colNames,head:G.value.head,body:G.value.body,config:G.value.config,title:`${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text?` : ${e.value.style.chart.title.subtitle.text}`:""}`,onClose:a[2]||(a[2]=l=>k.value.showTable=!1)},{th:m(({th:l})=>[Te(R(l.name),1)]),td:m(({td:l})=>[Te(R(l),1)]),_:1},8,["colNames","head","body","config","title"]))]),_:1},8,["config"])):y("",!0)],14,ht))}},Ht=nt(zt,[["__scopeId","data-v-ed1fdeb2"]]);export{Ht as default};
