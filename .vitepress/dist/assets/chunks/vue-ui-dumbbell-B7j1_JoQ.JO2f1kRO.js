import{o as _e,L as oe,G as Le,X as ze,K as re,q as Xe,k as ue,I as Ae,b as L,Q as ne,n as W,M as ie,V as ve,N as Ne,O as Se}from"../chart.md.hi_nZSnT.js";import{O as Ge,M as Pe}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{x as Te}from"./Title-DYNLqCCT.D6xZGHSM.js";import{s as Me,i as Ie}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import{W as Fe}from"./DataTable-DL2agEJ3.DwhyhpBD.js";import Oe from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import{C as Ve}from"./Legend-DXLiSLHd.5wpQgPWV.js";import We from"./vue-ui-accordion-D_1fE5EF.ggAyum2g.js";import{c as de}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as Be}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as De}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as m,p as y,q as ce,v as he,Y as He,o,c as r,b as A,e as p,aj as Re,w as x,r as w,ak as ye,al as be,k as d,n as pe,N as B,G as qe,F as C,C as _,j as u,t as z,a as fe,P as Ee}from"./framework.BaNfDZ-f.js";import"./Shape-CO_Ak9Zm.UkrUmJI7.js";const Ye=["id"],je=["xmlns","viewBox"],Ke={key:0},Qe=["x1","x2","y1","y2","stroke","stroke-width","stroke-dasharray"],Ue={key:1},Ze=["x1","x2","y1","y2","stroke","stroke-width","stroke-dasharray"],Je=["x1","x2","y1","y2","stroke","stroke-width","stroke-dasharray"],et={key:2},tt=["x","y","font-size","fill","font-weight"],lt=["x","y","font-size","fill"],at={key:3},st=["x","y","font-size","fill","font-weight"],ot=["id"],rt=["stop-color"],ut=["stop-color"],nt=["stop-color"],it=["id"],vt=["stop-color"],dt=["stop-color"],ct=["stop-color"],ht=["id"],yt=["stop-color"],bt=["stop-color"],pt=["id"],ft=["stop-color"],gt=["stop-color"],mt={key:0},xt=["d","fill"],kt={key:1},$t=["x","y","height","width","fill"],wt=["cx","cy","r","fill","stroke","stroke-width"],Ct=["cx","cy","r","fill","stroke","stroke-width"],_t={key:2},Lt=["x","y","fill","font-size"],zt={key:3},Xt=["x","y","fill","font-size"],At={key:3,class:"vue-data-ui-watermark"},Nt=["xmlns","height","width"],St=["fill"],Gt=["innerHTML"],Pt={__name:"vue-ui-dumbbell",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}}},emits:["selectDatapoint"],setup(ge,{expose:me,emit:Tt}){const f=ge,{vue_ui_dumbbell:xe}=_e(),X=m({get(){return!!f.dataset&&f.dataset.length},set(l){return l}}),h=y(oe()),D=y(0),G=y(null),H=y(null),R=y(null),q=y(0),E=y(0),Y=y(0),e=m({get:()=>j(),set:l=>l});function j(){const l=de({userConfig:f.config,defaultConfig:xe});return l.theme?{...de({userConfig:Le.vue_ui_dumbbell[l.theme]||f.config,defaultConfig:l})}:l}ce(()=>f.config,l=>{e.value=j(),K(),q.value+=1,E.value+=1,Y.value+=1,c.value=e.value.style.chart.rowHeight,N.value=e.value.style.chart.width},{deep:!0}),ce(()=>f.dataset,l=>{te()},{deep:!0});const P=y(null);he(()=>{K()});function K(){if(ze(f.dataset)?re({componentName:"VueUiDumbbell",type:"dataset"}):f.dataset.forEach((l,i)=>{Xe({datasetObject:l,requiredAttributes:["name","start","end"]}).forEach(t=>{X.value=!1,re({componentName:"VueUiDumbbell",type:"datasetSerieAttribute",property:t,index:i})})}),e.value.responsive){const l=Ge(()=>{const{width:i,height:t}=Pe({chart:G.value,title:e.value.style.chart.title.text?H.value:null,legend:e.value.style.chart.legend.show?R.value:null});N.value=i,c.value=t/f.dataset.length,b.value=M()});P.value=new ResizeObserver(l),P.value.observe(G.value.parentNode)}}He(()=>{P.value&&P.value.disconnect()});const{isPrinting:Q,isImaging:U,generatePdf:Z,generateImage:J}=Me({elementId:`dumbbell_${h.value}`,fileName:e.value.style.chart.title.text||"vue-ui-dumbbell"}),T=y({showTable:e.value.table.show}),k=m(()=>f.dataset.map((l,i)=>({...l,start:ue(l.start),end:ue(l.end),id:oe()}))),O=m(()=>({max:Math.max(...k.value.flatMap(l=>[l.start,l.end])),min:Math.min(...k.value.flatMap(l=>[l.start,l.end]))})),v=m(()=>Ae(O.value.min<0?O.value.min:0,O.value.max,e.value.style.chart.grid.scaleSteps)),c=y(e.value.style.chart.rowHeight),N=y(e.value.style.chart.width),s=m(()=>{const l=c.value,i=e.value.style.chart.padding.left+e.value.style.chart.padding.right+N.value,t=e.value.style.chart.padding.top+e.value.style.chart.padding.bottom+l*f.dataset.length,a=v.value.ticks.length*(N.value/v.value.ticks.length);return{left:e.value.style.chart.padding.left,right:i-e.value.style.chart.padding.right,top:e.value.style.chart.padding.top,bottom:t-e.value.style.chart.padding.bottom,width:N.value,height:l*f.dataset.length,rowHeight:l,absoluteHeight:t,absoluteWidth:i,widthPlotReference:a}});function M(){return k.value.map((l,i)=>{const t=s.value.left+(l.start+Math.abs(v.value.min))/(v.value.max+Math.abs(v.value.min))*s.value.widthPlotReference,a=s.value.left+(l.end+Math.abs(v.value.min))/(v.value.max+Math.abs(v.value.min))*s.value.widthPlotReference,n=t+(a-t)/2;return{...l,startX:t,endX:a,centerX:n,y:s.value.top+i*c.value+c.value/2,endVal:l.start}})}const b=y([]),ee=y(null),ke=m(()=>k.value.map(l=>l.end).reduce((l,i)=>l+i,0));he(()=>{te()});function te(){b.value=M();let l=b.value.map(t=>t.start).reduce((t,a)=>t+a,0);function i(){const t=k.value.map(a=>a.end-a.start);l>=ke.value?(cancelAnimationFrame(ee.value),b.value=M()):(b.value=b.value.map((a,n)=>{a.endVal+=t[n]*(e.value.animationSpeed/100);const g=s.value.left+(a.start+Math.abs(v.value.min))/(v.value.max+Math.abs(v.value.min))*s.value.widthPlotReference,F=s.value.left+(a.endVal+Math.abs(v.value.min))/(v.value.max+Math.abs(v.value.min))*s.value.widthPlotReference,V=g+(F-g)/2;return{...a,startX:g,endX:F,centerX:V,y:s.value.top+n*c.value+c.value/2,endVal:a.endVal}}),l=b.value.map(a=>a.endVal).reduce((a,n)=>a+n,0),ee.value=requestAnimationFrame(i))}e.value.useAnimation?i():b.value=M()}const le=m(()=>[{name:e.value.style.chart.legend.labelStart,color:e.value.style.chart.plots.gradient.show?`url(#start_grad_${h.value})`:e.value.style.chart.plots.startColor},{name:e.value.style.chart.legend.labelEnd,color:e.value.style.chart.plots.gradient.show?`url(#end_grad_${h.value})`:e.value.style.chart.plots.endColor}]),$e=m(()=>({cy:"donut-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,paddingTop:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),$=m(()=>{const l=b.value.map(t=>({name:t.name})),i=b.value.map(t=>({start:t.start,end:t.end}));return{head:l,body:i}}),I=m(()=>{const l=[e.value.table.columnNames.series,e.value.table.columnNames.start,e.value.table.columnNames.end,e.value.table.columnNames.progression],i=$.value.head.map((a,n)=>{const g=L({p:e.value.style.chart.labels.prefix,v:$.value.body[n].start,s:e.value.style.chart.labels.suffix,r:e.value.table.td.roundingValue}),F=L({p:e.value.style.chart.labels.prefix,v:$.value.body[n].end,s:e.value.style.chart.labels.suffix,r:e.value.table.td.roundingValue}),V=L({v:100*($.value.body[n].end/$.value.body[n].start-1),s:"%",r:e.value.table.td.roundingPercentage});return[{name:a.name},g,F,V]}),t={th:{backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline},td:{backgroundColor:e.value.table.td.backgroundColor,color:e.value.table.td.color,outline:e.value.table.td.outline},breakpoint:e.value.table.responsiveBreakpoint};return{colNames:[e.value.table.columnNames.series,e.value.table.columnNames.start,e.value.table.columnNames.end,e.value.table.columnNames.progression],head:l,body:i,config:t}});function ae(){Ee(()=>{const l=$.value.head.map((a,n)=>[[a.name],[$.value.body[n].start],[$.value.body[n].end]]),i=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[[e.value.table.columnNames.series],[e.value.table.columnNames.start],[e.value.table.columnNames.end]]].concat(l),t=Ne(i);Se({csvContent:t,title:e.value.style.chart.title.text||"vue-ui-dumbbell"})})}const S=y(!1);function we(l){S.value=l,D.value+=1}function Ce(){return b.value}function se(){T.value.showTable=!T.value.showTable}return me({getData:Ce,generatePdf:Z,generateCsv:ae,generateImage:J,toggleTable:se}),(l,i)=>(o(),r("div",{ref_key:"dumbbellChart",ref:G,class:pe(`vue-ui-dumbbell ${S.value?"vue-data-ui-wrapper-fullscreen":""}`),style:B(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text?"":"padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive?"height:100%":""}`),id:`dumbbell_${h.value}`},[e.value.style.chart.title.text?(o(),r("div",{key:0,ref_key:"chartTitle",ref:H,style:"width:100%;background:transparent;padding-bottom:24px"},[(o(),A(Te,{key:`title_${q.value}`,config:{title:{cy:"donut-div-title",...e.value.style.chart.title},subtitle:{cy:"donut-div-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):p("",!0),e.value.userOptions.show&&X.value?(o(),A(Ie,{ref:"details",key:`user_option_${D.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isPrinting:d(Q),isImaging:d(U),uid:h.value,hasPdf:e.value.userOptions.buttons.pdf,hasXls:e.value.userOptions.buttons.csv,hasImg:e.value.userOptions.buttons.img,hasTable:e.value.userOptions.buttons.table,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:S.value,titles:{...e.value.userOptions.buttonTitles},chartElement:G.value,position:e.value.userOptions.position,onToggleFullscreen:we,onGeneratePdf:d(Z),onGenerateCsv:ae,onGenerateImage:d(J),onToggleTable:se},Re({_:2},[l.$slots.optionPdf?{name:"optionPdf",fn:x(()=>[w(l.$slots,"optionPdf",{},void 0,!0)]),key:"0"}:void 0,l.$slots.optionCsv?{name:"optionCsv",fn:x(()=>[w(l.$slots,"optionCsv",{},void 0,!0)]),key:"1"}:void 0,l.$slots.optionImg?{name:"optionImg",fn:x(()=>[w(l.$slots,"optionImg",{},void 0,!0)]),key:"2"}:void 0,l.$slots.optionTable?{name:"optionTable",fn:x(()=>[w(l.$slots,"optionTable",{},void 0,!0)]),key:"3"}:void 0,l.$slots.optionFullscreen?{name:"optionFullscreen",fn:x(({toggleFullscreen:t,isFullscreen:a})=>[w(l.$slots,"optionFullscreen",ye(be({toggleFullscreen:t,isFullscreen:a})),void 0,!0)]),key:"4"}:void 0]),1032,["backgroundColor","color","isPrinting","isImaging","uid","hasPdf","hasXls","hasImg","hasTable","hasFullscreen","isFullscreen","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):p("",!0),X.value?(o(),r("svg",{key:2,xmlns:d(ne),class:pe({"vue-data-ui-fullscreen--on":S.value,"vue-data-ui-fulscreen--off":!S.value}),viewBox:`0 0 ${s.value.absoluteWidth<=0?10:s.value.absoluteWidth} ${s.value.absoluteHeight<=0?10:s.value.absoluteHeight}`,style:B(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)},[qe(Be),e.value.style.chart.grid.verticalGrid.show?(o(),r("g",Ke,[(o(!0),r(C,null,_(v.value.ticks,(t,a)=>(o(),r("line",{x1:s.value.left+a*s.value.width/(v.value.ticks.length-1),x2:s.value.left+a*s.value.width/(v.value.ticks.length-1),y1:s.value.top,y2:s.value.bottom,stroke:e.value.style.chart.grid.verticalGrid.stroke,"stroke-width":e.value.style.chart.grid.verticalGrid.strokeWidth,"stroke-dasharray":e.value.style.chart.grid.verticalGrid.strokeDasharray},null,8,Qe))),256))])):p("",!0),e.value.style.chart.grid.horizontalGrid.show?(o(),r("g",Ue,[(o(!0),r(C,null,_(k.value,(t,a)=>(o(),r("line",{x1:s.value.left,x2:s.value.right,y1:s.value.top+a*c.value,y2:s.value.top+a*c.value,stroke:e.value.style.chart.grid.horizontalGrid.stroke,"stroke-width":e.value.style.chart.grid.horizontalGrid.strokeWidth,"stroke-dasharray":e.value.style.chart.grid.horizontalGrid.strokeDasharray},null,8,Ze))),256)),u("line",{x1:s.value.left,x2:s.value.right,y1:s.value.bottom,y2:s.value.bottom,stroke:e.value.style.chart.grid.horizontalGrid.stroke,"stroke-width":e.value.style.chart.grid.horizontalGrid.strokeWidth,"stroke-dasharray":e.value.style.chart.grid.horizontalGrid.strokeDasharray},null,8,Je)])):p("",!0),e.value.style.chart.labels.yAxisLabels.show?(o(),r("g",et,[(o(!0),r(C,null,_(k.value,(t,a)=>(o(),r("text",{x:s.value.left-6+e.value.style.chart.labels.yAxisLabels.offsetX,y:s.value.top+a*c.value+(e.value.style.chart.labels.yAxisLabels.showProgression?c.value/3:c.value/2)+e.value.style.chart.labels.yAxisLabels.fontSize/3,"font-size":e.value.style.chart.labels.yAxisLabels.fontSize,fill:e.value.style.chart.labels.yAxisLabels.color,"font-weight":e.value.style.chart.labels.yAxisLabels.bold?"bold":"normal","text-anchor":"end"},z(t.name),9,tt))),256)),e.value.style.chart.labels.yAxisLabels.showProgression?(o(!0),r(C,{key:0},_(k.value,(t,a)=>(o(),r("text",{x:s.value.left-6+e.value.style.chart.labels.yAxisLabels.offsetX,y:s.value.top+a*c.value+c.value/1.3+e.value.style.chart.labels.yAxisLabels.fontSize/3,"font-size":e.value.style.chart.labels.yAxisLabels.fontSize,fill:e.value.style.chart.labels.yAxisLabels.color,"text-anchor":"end"},z(d(L)({v:100*(t.end/t.start-1),s:"%",r:e.value.style.chart.labels.yAxisLabels.rounding})),9,lt))),256)):p("",!0)])):p("",!0),e.value.style.chart.labels.xAxisLabels.show?(o(),r("g",at,[(o(!0),r(C,null,_(v.value.ticks,(t,a)=>(o(),r("text",{x:s.value.left+a*(s.value.width/(v.value.ticks.length-1)),y:s.value.bottom+e.value.style.chart.labels.xAxisLabels.fontSize+e.value.style.chart.labels.xAxisLabels.offsetY,"font-size":e.value.style.chart.labels.xAxisLabels.fontSize,fill:e.value.style.chart.labels.xAxisLabels.color,"font-weight":e.value.style.chart.labels.xAxisLabels.bold?"bold":"normal","text-anchor":"middle"},z(d(W)(e.value.style.chart.labels.formatter,t,d(L)({p:e.value.style.chart.labels.prefix,v:t,s:e.value.style.chart.labels.suffix,r:e.value.style.chart.labels.xAxisLabels.rounding}),{datapoint:t,seriesIndex:a})),9,st))),256))])):p("",!0),u("defs",null,[u("radialGradient",{id:`start_grad_${h.value}`,fy:"30%"},[u("stop",{offset:"10%","stop-color":d(ie)(e.value.style.chart.plots.startColor,e.value.style.chart.plots.gradient.intensity/100)},null,8,rt),u("stop",{offset:"90%","stop-color":d(ve)(e.value.style.chart.plots.startColor,.1)},null,8,ut),u("stop",{offset:"100%","stop-color":e.value.style.chart.plots.startColor},null,8,nt)],8,ot),u("radialGradient",{id:`end_grad_${h.value}`,fy:"30%"},[u("stop",{offset:"10%","stop-color":d(ie)(e.value.style.chart.plots.endColor,e.value.style.chart.plots.gradient.intensity/100)},null,8,vt),u("stop",{offset:"90%","stop-color":d(ve)(e.value.style.chart.plots.endColor,.1)},null,8,dt),u("stop",{offset:"100%","stop-color":e.value.style.chart.plots.endColor},null,8,ct)],8,it)]),(o(!0),r(C,null,_(b.value,(t,a)=>(o(),r("g",null,[u("defs",null,[u("linearGradient",{id:`grad_positive_${h.value}`,x1:"0%",x2:"100%",y1:"0%",y2:"0%"},[u("stop",{offset:"0%","stop-color":e.value.style.chart.plots.startColor},null,8,yt),u("stop",{offset:"100%","stop-color":e.value.style.chart.plots.endColor},null,8,bt)],8,ht),u("linearGradient",{id:`grad_negative_${h.value}`,x1:"0%",x2:"100%",y1:"0%",y2:"0%"},[u("stop",{offset:"0%","stop-color":e.value.style.chart.plots.endColor},null,8,ft),u("stop",{offset:"100%","stop-color":e.value.style.chart.plots.startColor},null,8,gt)],8,pt)]),e.value.style.chart.plots.link.type==="curved"?(o(),r("g",mt,[u("path",{d:`M 
                            ${t.startX},${t.y+e.value.style.chart.plots.radius/2} 
                            C ${t.centerX},${t.y} ${t.centerX},${t.y} 
                            ${t.endX},${t.y+e.value.style.chart.plots.radius/2}
                            L ${t.endX},${t.y-e.value.style.chart.plots.radius/2}
                            C ${t.centerX},${t.y} ${t.centerX},${t.y}
                            ${t.startX},${t.y-e.value.style.chart.plots.radius/2}
                            Z
                        `,fill:t.endX>t.startX?`url(#grad_positive_${h.value})`:`url(#grad_negative_${h.value})`},null,8,xt)])):(o(),r("g",kt,[u("rect",{x:t.endX>t.startX?t.startX:t.endX,y:t.y-e.value.style.chart.plots.link.strokeWidth/2,height:e.value.style.chart.plots.link.strokeWidth,width:Math.abs(t.endX-t.startX),fill:t.endX>t.startX?`url(#grad_positive_${h.value})`:`url(#grad_negative_${h.value})`},null,8,$t)])),u("circle",{cx:t.startX,cy:t.y,r:e.value.style.chart.plots.radius,fill:e.value.style.chart.plots.gradient.show?`url(#start_grad_${h.value})`:e.value.style.chart.plots.startColor,stroke:e.value.style.chart.plots.stroke,"stroke-width":e.value.style.chart.plots.strokeWidth},null,8,wt),u("circle",{cx:t.endX,cy:t.y,r:e.value.style.chart.plots.radius,fill:e.value.style.chart.plots.gradient.show?`url(#end_grad_${h.value})`:e.value.style.chart.plots.endColor,stroke:e.value.style.chart.plots.stroke,"stroke-width":e.value.style.chart.plots.strokeWidth},null,8,Ct),e.value.style.chart.labels.startLabels.show?(o(),r("g",_t,[(o(!0),r(C,null,_(b.value,(n,g)=>(o(),r("text",{x:n.startX,y:s.value.top+(g+1)*c.value-e.value.style.chart.labels.startLabels.fontSize/3+e.value.style.chart.labels.startLabels.offsetY,fill:e.value.style.chart.labels.startLabels.useStartColor?e.value.style.chart.plots.startColor:e.value.style.chart.labels.startLabels.color,"font-size":e.value.style.chart.labels.startLabels.fontSize,"text-anchor":"middle"},z(d(W)(e.value.style.chart.labels.formatter,n.start,d(L)({p:e.value.style.chart.labels.prefix,v:n.start,s:e.value.style.chart.labels.suffix,r:e.value.style.chart.labels.startLabels.rounding}),{datapoint:n,seriesIndex:g})),9,Lt))),256))])):p("",!0),e.value.style.chart.labels.endLabels.show?(o(),r("g",zt,[(o(!0),r(C,null,_(b.value,(n,g)=>(o(),r("text",{x:n.endX,y:s.value.top+g*c.value+e.value.style.chart.labels.endLabels.fontSize+e.value.style.chart.labels.endLabels.offsetY,fill:e.value.style.chart.labels.endLabels.useEndColor?e.value.style.chart.plots.endColor:e.value.style.chart.labels.endLabels.color,"font-size":e.value.style.chart.labels.endLabels.fontSize,"text-anchor":"middle"},z(d(W)(e.value.style.chart.labels.formatter,n.end,d(L)({p:e.value.style.chart.labels.prefix,v:n.end,s:e.value.style.chart.labels.suffix,r:e.value.style.chart.labels.endLabels.rounding}),{datapoint:n,seriesIndex:g})),9,Xt))),256))])):p("",!0)]))),256)),w(l.$slots,"svg",{svg:s.value},void 0,!0)],14,je)):p("",!0),l.$slots.watermark?(o(),r("div",At,[w(l.$slots,"watermark",ye(be({isPrinting:d(Q)||d(U)})),void 0,!0)])):p("",!0),X.value?p("",!0):(o(),A(Oe,{key:4,config:{type:"dumbbell",style:{backgroundColor:e.value.style.chart.backgroundColor,dumbbell:{color:"#CCCCCC"}}}},null,8,["config"])),u("div",{ref_key:"chartLegend",ref:R},[e.value.style.chart.legend.show&&X.value?(o(),A(Ve,{key:`legend_${Y.value}`,legendSet:le.value,config:$e.value},{item:x(({legend:t})=>[u("div",{style:B(`display:flex;align-items:center;gap:4px;font-size:${e.value.style.chart.legend.fontSize}px`)},[(o(),r("svg",{xmlns:d(ne),viewBox:"0 0 20 20",height:e.value.style.chart.legend.fontSize,width:e.value.style.chart.legend.fontSize},[u("circle",{cx:10,cy:10,r:9,fill:t.color},null,8,St)],8,Nt)),fe(" "+z(t.name),1)],4)]),_:1},8,["legendSet","config"])):w(l.$slots,"legend",{key:1,legend:le.value},void 0,!0)],512),X.value?(o(),A(We,{key:5,hideDetails:"",config:{open:T.value.showTable,maxHeight:1e4,body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:x(()=>[(o(),A(Fe,{key:`table_${E.value}`,colNames:I.value.colNames,head:I.value.head,body:I.value.body,config:I.value.config,title:`${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text?` : ${e.value.style.chart.title.subtitle.text}`:""}`,onClose:i[0]||(i[0]=t=>T.value.showTable=!1)},{th:x(({th:t})=>[u("div",{innerHTML:t,style:{display:"flex","align-items":"center"}},null,8,Gt)]),td:x(({td:t})=>[fe(z(t.name||t),1)]),_:1},8,["colNames","head","body","config","title"]))]),_:1},8,["config"])):p("",!0)],14,Ye))}},jt=De(Pt,[["__scopeId","data-v-2df541ce"]]);export{jt as default};
