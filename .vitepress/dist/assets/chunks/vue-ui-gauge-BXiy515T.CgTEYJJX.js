import{o as ke,L as be,G as xe,R as we,e as H,a as Fe,X as J,j as ze,K as I,q as ee,g as te,Q as Se,c as N,D as O,n as $e,b as Me,l as ae}from"../chart.md.hi_nZSnT.js";import{O as Pe,M as Ce}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{s as _e,i as Ie}from"./usePrinter-8ofTb2MJ.pt_J2AaR.js";import Oe from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import{x as Xe}from"./Title-DYNLqCCT.D6xZGHSM.js";import{c as le}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import{p as Ye}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as Ge}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as p,p as h,q as re,v as Ne,Y as je,o as u,c as n,b as j,w as X,t as S,e as g,aj as Re,r as w,ak as se,al as ue,k as v,n as oe,N as ie,G as Be,j as y,F as R,C as B}from"./framework.BaNfDZ-f.js";const Ve=["id"],We={key:0},Ee=["xmlns","viewBox"],qe=["id"],De=["stop-color"],Ue=["stop-color"],Ae=["stop-color"],Le=["id"],Te=["stdDeviation"],Ke=["d","fill","stroke"],Qe=["d","filter"],Ze=["x","y","text-anchor","font-size","font-weight","fill"],He=["x","y","font-size","font-weight","fill"],Je={key:1},et=["x1","y1","x2","y2","stroke","stroke-width"],tt=["x1","y1","x2","y2","stroke","stroke-width"],at=["x1","y1","x2","y2","stroke-width","filter"],lt={key:2},rt=["d","fill","stroke","stroke-width"],st=["cx","cy","fill","r","stroke-width","stroke"],ut=["x","y","font-size","fill"],ot={key:3,class:"vue-data-ui-watermark"},it={__name:"vue-ui-gauge",props:{config:{type:Object,default(){return{}}},dataset:{type:Object,default(){return{}}}},setup(Y,{expose:ne}){const s=Y,{vue_ui_gauge:ve}=ke(),$=p(()=>!!s.dataset&&Object.keys(s.dataset).length>0&&s.dataset.series&&s.dataset.series.length),m=h(be()),ce=h(null),V=h(0),M=h(null),W=h(null),E=h(null),q=h(0),e=p({get:()=>D(),set:a=>a});re(()=>s.config,a=>{e.value=D(),Q(),q.value+=1},{deep:!0});function D(){const a=le({userConfig:s.config,defaultConfig:ve});return a.theme?{...le({userConfig:xe.vue_ui_gauge[a.theme]||s.config,defaultConfig:a}),customPalette:we[a.theme]||H}:a}const{isPrinting:U,isImaging:A,generatePdf:L,generateImage:T}=_e({elementId:`vue-ui-gauge_${m.value}`,fileName:e.value.style.chart.title.text||"vue-ui-gauge"}),de=p(()=>Fe(e.value.customPalette)),b=p(()=>{if(!$.value||J(s.dataset.series||{}))return{value:0,series:[{from:0,to:0}]};const a=[];(s.dataset.series||[]).forEach(l=>{a.push(l.from||0),a.push(l.to||0)});const r=Math.max(...a);return{...s.dataset,series:(s.dataset.series||[]).map((l,i)=>({...l,color:ze(l.color)||de.value[i]||H[i],value:((l.to||0)-(l.from||0))/r*100}))}}),f=h(512),t=h({height:358.4,width:f.value,top:0,bottom:358.4,centerX:179.2,centerY:f.value/2,labelFontSize:18,legendFontSize:e.value.style.chart.legend.fontSize,pointerRadius:e.value.style.chart.layout.pointer.circle.radius,trackSize:e.value.style.chart.layout.track.size,pointerSize:e.value.style.chart.layout.pointer.size,pointerStrokeWidth:e.value.style.chart.layout.pointer.strokeWidth,markerOffset:e.value.style.chart.layout.markers.offsetY+3}),P=h(0),F=h(0),c=h(e.value.style.chart.animation.use?0:s.dataset.value);re(()=>s.dataset.value,()=>{Z(s.dataset.value)});const d=p(()=>{const a=t.value.width/2,r=o.value.base,l=Math.PI*((c.value+0-F.value)/(P.value-F.value))+Math.PI;return{x1:a,y1:r,x2:a+o.value.pointerSize*t.value.pointerSize*.9*Math.cos(l),y2:r+o.value.pointerSize*t.value.pointerSize*.9*Math.sin(l)}}),K=p(()=>{const a=t.value.width/2,r=o.value.base,l=Math.PI*((c.value+0-F.value)/(P.value-F.value))+Math.PI,i=a+o.value.pointerSize*t.value.pointerSize*.9*Math.cos(l),_=r+o.value.pointerSize*t.value.pointerSize*.9*Math.sin(l),k=t.value.pointerRadius,fe=a+k*Math.cos(l+Math.PI/2),ge=r+k*Math.sin(l+Math.PI/2),pe=a+k*Math.cos(l-Math.PI/2),me=r+k*Math.sin(l-Math.PI/2);return isNaN(i)?null:`M ${i},${_} ${fe},${ge} ${pe},${me} Z`}),G=p(()=>{for(let a=0;a<b.value.series.length;a+=1){const{color:r,from:l,to:i}=b.value.series[a];if(c.value>=l&&c.value<=i)return r}return"#2D353C"}),C=h(null);function Q(){if(J(s.dataset)?I({componentName:"VueUiGauge",type:"dataset"}):(ee({datasetObject:s.dataset,requiredAttributes:["value","series"]}).forEach(a=>{I({componentName:"VueUiGauge",type:"datasetAttribute",property:a})}),Object.hasOwn(s.dataset,"series")&&(s.dataset.series.length?s.dataset.series.forEach((a,r)=>{ee({datasetObject:a,requiredAttributes:["from","to"]}).forEach(l=>{I({componentName:"VueUiGauge",type:"datasetSerieAttribute",property:l,index:r})})}):I({componentName:"VueUiGauge",type:"datasetAttributeEmpty",property:"series"}))),Z(s.dataset.value||0),e.value.responsive){const a=Pe(()=>{const{width:r,height:l}=Ce({chart:M.value,title:e.value.style.chart.title.text?W.value:null,legend:E.value});t.value.width=r,t.value.height=l,t.value.centerX=r/2,t.value.centerY=f.value/2/358.4*l,t.value.bottom=l,t.value.labelFontSize=18/f.value*Math.min(l,r)<10?10:18/f.value*Math.min(l,r),t.value.legendFontSize=e.value.style.chart.legend.fontSize/f.value*Math.min(l,r)<14?14:e.value.style.chart.legend.fontSize/f.value*Math.min(l,r),t.value.pointerRadius=e.value.style.chart.layout.pointer.circle.radius/f.value*Math.min(l,r),t.value.trackSize=e.value.style.chart.layout.track.size/f.value*Math.min(l,r),t.value.pointerStrokeWidth=ae({relator:Math.min(r,l),adjuster:f.value,source:e.value.style.chart.layout.pointer.strokeWidth,threshold:2,fallback:2}),t.value.markerOffset=ae({relator:Math.max(r,l),adjuster:f.value,source:e.value.style.chart.layout.markers.offsetY+3,threshold:2,fallback:2})});C.value=new ResizeObserver(a),C.value.observe(M.value.parentNode)}}Ne(()=>{Q()}),je(()=>{C.value&&C.value.disconnect()});function Z(a){const r=[];(b.value.series||[]).forEach(k=>{r.push(k.from||0),r.push(k.to||0)}),P.value=Math.max(...r),F.value=Math.min(...r);let l=e.value.style.chart.animation.speed;const i=Math.abs(a-c.value)/(l*60);function _(){c.value<a?c.value=Math.min(c.value+i,a):c.value>a&&(c.value=Math.max(c.value-i,a)),c.value!==a&&requestAnimationFrame(_)}_()}const o=p(()=>{const a=e.value.responsive?Math.min(t.value.width,t.value.height):t.value.width;return{arcs:a/2.5,gradients:a/2.75,base:e.value.responsive?t.value.height/2:t.value.height*.7,ratingBase:e.value.responsive?t.value.height/2+t.value.height/4:t.value.height*.9,pointerSize:e.value.responsive?Math.min(t.value.width,t.value.height)/3:t.value.width/3.2}}),x=p(()=>te({series:b.value.series},t.value.width/2,o.value.base,o.value.arcs,o.value.arcs,1,1,1,180,109.9495,40*t.value.trackSize)),he=p(()=>te({series:b.value.series},t.value.width/2,o.value.base,o.value.gradients,o.value.gradients,.95,1,1,180,110.02,2*t.value.trackSize)),z=h(!1);function ye(a){z.value=a,V.value+=1}return ne({generatePdf:L,generateImage:T}),(a,r)=>(u(),n("div",{class:oe(`vue-ui-gauge ${z.value?"vue-data-ui-wrapper-fullscreen":""}`),ref_key:"gaugeChart",ref:M,id:`vue-ui-gauge_${m.value}`,style:ie(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive?"height: 100%":""}`)},[e.value.style.chart.title.text?(u(),n("div",{key:0,ref_key:"chartTitle",ref:W,style:"width:100%;background:transparent;padding-bottom:12px"},[(u(),j(Xe,{key:`title_${q.value}`,config:{title:{cy:"gauge-div-title",...e.value.style.chart.title},subtitle:{cy:"gauge-div-subtitle",...e.value.style.chart.title.subtitle}}},{default:X(()=>[e.value.translations.base&&Y.dataset.base?(u(),n("span",We,S(e.value.translations.base)+": "+S(Y.dataset.base),1)):g("",!0)]),_:1},8,["config"]))],512)):g("",!0),e.value.userOptions.show&&$.value?(u(),j(Ie,{ref_key:"details",ref:ce,key:`user_options_${V.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isImaging:v(A),isPrinting:v(U),uid:m.value,hasXls:!1,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:z.value,titles:{...e.value.userOptions.buttonTitles},chartElement:M.value,position:e.value.userOptions.position,onToggleFullscreen:ye,onGeneratePdf:v(L),onGenerateImage:v(T)},Re({_:2},[a.$slots.optionPdf?{name:"optionPdf",fn:X(()=>[w(a.$slots,"optionPdf",{},void 0,!0)]),key:"0"}:void 0,a.$slots.optionImg?{name:"optionImg",fn:X(()=>[w(a.$slots,"optionImg",{},void 0,!0)]),key:"1"}:void 0,a.$slots.optionFullscreen?{name:"optionFullscreen",fn:X(({toggleFullscreen:l,isFullscreen:i})=>[w(a.$slots,"optionFullscreen",se(ue({toggleFullscreen:l,isFullscreen:i})),void 0,!0)]),key:"2"}:void 0]),1032,["backgroundColor","color","isImaging","isPrinting","uid","hasPdf","hasImg","hasFullscreen","isFullscreen","titles","chartElement","position","onGeneratePdf","onGenerateImage"])):g("",!0),$.value?(u(),n("svg",{key:2,xmlns:v(Se),class:oe({"vue-data-ui-fullscreen--on":z.value,"vue-data-ui-fulscreen--off":!z.value}),viewBox:`0 0 ${t.value.width<=0?10:t.value.width} ${t.value.height<=0?10:t.value.height}`,style:ie(`max-width:100%;overflow:hidden !important;background:transparent;color:${e.value.style.chart.color}`)},[Be(Ye),y("defs",null,[y("radialGradient",{id:`gradient_${m.value}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},[y("stop",{offset:"0%","stop-color":v(N)("#FFFFFF",1)},null,8,De),y("stop",{offset:"80%","stop-color":v(N)("#FFFFFF",e.value.style.chart.layout.track.gradientIntensity)},null,8,Ue),y("stop",{offset:"100%","stop-color":v(N)("#FFFFFF",1)},null,8,Ae)],8,qe)]),y("defs",null,[y("filter",{id:`blur_${m.value}`,x:"-50%",y:"-50%",width:"200%",height:"200%"},[y("feGaussianBlur",{in:"SourceGraphic",stdDeviation:100/e.value.style.chart.layout.track.gradientIntensity},null,8,Te)],8,Le)]),(u(!0),n(R,null,B(x.value,(l,i)=>(u(),n("path",{key:`arc_${i}`,d:l.arcSlice,fill:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-linecap":"round"},null,8,Ke))),128)),e.value.style.chart.layout.track.useGradient?(u(!0),n(R,{key:0},B(he.value,(l,i)=>(u(),n("path",{key:`arc_${i}`,d:l.arcSlice,fill:"#FFFFFF",stroke:"none","stroke-linecap":"round",filter:`url(#blur_${m.value})`},null,8,Qe))),128)):g("",!0),(u(!0),n(R,null,B(x.value,(l,i)=>(u(),n("text",{x:v(O)({centerX:t.value.width/2,centerY:o.value.base,initX:l.center.startX,initY:l.center.startY,offset:t.value.markerOffset}).x,y:v(O)({centerX:t.value.width/2,centerY:o.value.base,initX:l.center.startX,initY:l.center.startY,offset:t.value.markerOffset}).y,"text-anchor":l.center.startX<t.value.width/2-5?"end":l.center.startX>t.value.width/2+5?"start":"middle","font-size":t.value.labelFontSize*e.value.style.chart.layout.markers.fontSizeRatio,"font-weight":`${e.value.style.chart.layout.markers.bold?"bold":"normal"}`,fill:e.value.style.chart.layout.markers.color},S(l.from.toFixed(e.value.style.chart.layout.markers.roundingValue)),9,Ze))),256)),y("text",{x:v(O)({centerX:t.value.width/2,centerY:o.value.base,initX:x.value.at(-1).endX,initY:x.value.at(-1).endY,offset:t.value.markerOffset}).x,y:v(O)({centerX:t.value.width/2,centerY:o.value.base,initX:x.value.at(-1).endX,initY:x.value.at(-1).endY,offset:t.value.markerOffset}).y,"text-anchor":"start","font-size":t.value.labelFontSize*e.value.style.chart.layout.markers.fontSizeRatio,"font-weight":`${e.value.style.chart.layout.markers.bold?"bold":"normal"}`,fill:e.value.style.chart.layout.markers.color},S(P.value.toFixed(e.value.style.chart.layout.markers.roundingValue)),9,He),e.value.style.chart.layout.pointer.type==="rounded"?(u(),n("g",Je,[isNaN(d.value.x2)?g("",!0):(u(),n("line",{key:0,x1:d.value.x1,y1:d.value.y1,x2:d.value.x2,y2:d.value.y2,stroke:e.value.style.chart.layout.pointer.stroke,"stroke-width":t.value.pointerStrokeWidth,"stroke-linecap":"round"},null,8,et)),isNaN(d.value.x2)?g("",!0):(u(),n("line",{key:1,x1:d.value.x1,y1:d.value.y1,x2:d.value.x2,y2:d.value.y2,stroke:e.value.style.chart.layout.pointer.useRatingColor?G.value:e.value.style.chart.layout.pointer.color,"stroke-linecap":"round","stroke-width":t.value.pointerStrokeWidth*.7},null,8,tt)),!isNaN(d.value.x2)&&e.value.style.chart.layout.track.useGradient?(u(),n("line",{key:2,x1:d.value.x1,y1:d.value.y1,x2:d.value.x2,y2:d.value.y2,stroke:"white","stroke-linecap":"round","stroke-width":t.value.pointerStrokeWidth*.3,filter:`url(#blur_${m.value})`},null,8,at)):g("",!0)])):(u(),n("g",lt,[K.value?(u(),n("path",{key:0,d:K.value,fill:e.value.style.chart.layout.pointer.useRatingColor?G.value:e.value.style.chart.layout.pointer.color,stroke:e.value.style.chart.layout.pointer.stroke,"stroke-width":e.value.style.chart.layout.pointer.circle.strokeWidth,"stroke-linejoin":"round"},null,8,rt)):g("",!0)])),y("circle",{cx:t.value.width/2,cy:o.value.base,fill:e.value.style.chart.layout.pointer.circle.color,r:t.value.pointerRadius<=0?1e-4:t.value.pointerRadius,"stroke-width":e.value.style.chart.layout.pointer.circle.strokeWidth,stroke:e.value.style.chart.layout.pointer.circle.stroke},null,8,st),y("text",{x:t.value.width/2,y:o.value.ratingBase,"text-anchor":"middle","font-size":t.value.legendFontSize,"font-weight":"bold",fill:e.value.style.chart.legend.useRatingColor?G.value:e.value.style.chart.legend.color},S(v($e)(e.value.style.chart.legend.formatter,c.value,v(Me)({p:e.value.style.chart.legend.prefix+(e.value.style.chart.legend.showPlusSymbol&&c.value>0?"+":""),v:c.value,s:e.value.style.chart.legend.suffix,r:e.value.style.chart.legend.roundingValue}))),9,ut),w(a.$slots,"svg",{svg:t.value},void 0,!0)],14,Ee)):g("",!0),a.$slots.watermark?(u(),n("div",ot,[w(a.$slots,"watermark",se(ue({isPrinting:v(U)||v(A)})),void 0,!0)])):g("",!0),$.value?g("",!0):(u(),j(Oe,{key:4,config:{type:"gauge",style:{backgroundColor:e.value.style.chart.backgroundColor,gauge:{color:"#CCCCCC"}}}},null,8,["config"])),y("div",{ref_key:"chartLegend",ref:E},[w(a.$slots,"legend",{legend:b.value},void 0,!0)],512)],14,Ve))}},mt=Ge(it,[["__scopeId","data-v-2575317d"]]);export{mt as default};
