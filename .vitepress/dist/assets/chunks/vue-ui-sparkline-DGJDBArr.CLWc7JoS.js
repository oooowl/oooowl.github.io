import{o as ue,L as oe,G as se,X as ie,K as D,q as re,p as N,_ as ve,E as ne,Q as de,c as C,w as q,n as O,b as K}from"../chart.md.hi_nZSnT.js";import{c as P}from"./useNestedProp-S1UXxUgm.CErBICdk.js";import ye from"./vue-ui-skeleton-B2sRnIXX.C3JvNOY7.js";import{O as he,M as ce}from"./useResponsive-NZB-WLRF.DbXjWqi_.js";import{p as pe}from"./PackageVersion-DtnhR89q.DeJ10Meb.js";import{s as fe}from"./vue-data-ui-Cp7bO_tj.DKBrIOIj.js";import{h as d,p as x,q as R,v as ge,o as i,c as v,r as X,ak as ke,al as xe,N as I,j as p,t as Q,e as c,k as y,G as me,F as G,C as M,b as be}from"./framework.BaNfDZ-f.js";const we=["id"],_e=["xmlns","viewBox"],$e=["id"],Le=["stop-color"],Ne=["stop-color"],Ce=["id"],Ie=["stop-color"],Ve=["stop-color"],ze=["id"],We=["stop-color"],Se=["stop-color"],Ge={key:0},Me=["d","fill"],Ae=["d","fill"],Be=["d","stroke","stroke-width"],Ee=["x1","x2","y1","y2","stroke","stroke-width"],Fe=["x","y","width","height","fill","rx"],Te=["x1","x2","y1","y2","stroke","stroke-width","stroke-dasharray"],je=["x1","x2","y1","y2","stroke","stroke-dasharray","stroke-width"],De=["cx","cy","r","fill","stroke","stroke-width"],qe=["x","y","font-size","font-weight","fill"],Oe=["x","y","height","width","onMouseenter","onClick"],Ke={__name:"vue-ui-sparkline",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}},showInfo:{type:Boolean,default:!0},selectedIndex:{type:Number,default:void 0}},emits:["hoverIndex","selectDatapoint"],setup(b,{emit:V}){const r=b,{vue_ui_sparkline:U}=ue(),$=d(()=>!!r.dataset&&r.dataset.length),f=x(oe()),z=x(null),A=x(null),e=d({get:()=>B(),set:l=>l});function B(){const l=P({userConfig:r.config,defaultConfig:U});return l.theme?{...P({userConfig:se.vue_ui_sparkline[l.theme]||r.config,defaultConfig:l})}:l}R(()=>r.config,l=>{e.value=B(),F(),t.value.chartWidth=e.value.style.chartWidth},{deep:!0}),R(()=>r.dataset,l=>{m.value=r.dataset.map(u=>({...u,value:[void 0].includes(u.value)?null:u.value}))},{deep:!0});const m=x(Y());function Y(){return r.dataset.map(l=>e.value.style.animation.show?{...l,value:null}:{...l,value:[void 0].includes(l.value)?null:l.value})}const E=x(null);ge(()=>{if(F(),e.value.style.animation.show&&r.dataset.length>1){let l=function(){a<r.dataset.length?(m.value.push(r.dataset[a]),setTimeout(()=>{requestAnimationFrame(l)},u)):m.value=r.dataset,a+=1};m.value=[];const u=e.value.style.animation.animationFrames/r.dataset.length;let a=0;l()}});function F(){if(ie(r.dataset)?D({componentName:"VueUiSparkline",type:"dataset"}):r.dataset.forEach((l,u)=>{re({datasetObject:l,requiredAttributes:["period","value"]}).forEach(a=>{D({componentName:"VueUiSparkline",type:"datasetSerieAttribute",property:a,index:u})})}),e.value.responsive){const l=he(()=>{const{width:u,height:a}=ce({chart:z.value,title:e.value.style.title.show&&r.showInfo?A.value:null});t.value.width=u,t.value.height=a,t.value.chartWidth=e.value.style.chartWidth/500*u,t.value.padding=.06*u});E.value=new ResizeObserver(l),E.value.observe(z.value.parentNode)}}const t=x({height:80,width:500,chartWidth:e.value.style.chartWidth,padding:30}),Z=x(6),o=d(()=>({top:12,left:0,right:t.value.width,bottom:t.value.height-3,start:r.showInfo&&e.value.style.dataLabel.show&&e.value.style.dataLabel.position==="left"?t.value.width-t.value.chartWidth:t.value.padding,width:r.showInfo&&e.value.style.dataLabel.show?t.value.chartWidth:t.value.width-t.value.padding,height:t.value.height-12})),W=d(()=>Math.min(...m.value.map(l=>isNaN(l.value)||[void 0,null,"NaN",NaN,1/0,-1/0].includes(l.value)?0:l.value||0))),H=d(()=>Math.max(...m.value.map(l=>isNaN(l.value)||[void 0,null,"NaN",NaN,1/0,-1/0].includes(l.value)?0:l.value||0))),w=d(()=>{const l=W.value>=0?0:W.value;return Math.abs(l)}),J=d(()=>H.value+w.value+Z.value),L=d(()=>o.value.bottom-o.value.height*S(w.value));function S(l){return l/J.value}const g=d(()=>r.dataset.length-1),s=d(()=>m.value.map((l,u)=>{const a=isNaN(l.value)||[void 0,null,"NaN",NaN,1/0,-1/0].includes(l.value)?0:l.value||0;return{absoluteValue:a,period:l.period,plotValue:a+w.value,toMax:S(a+w.value),x:o.value.start+u*(o.value.width/(g.value+1)>t.padding?t.padding:o.value.width/(g.value+1)),y:o.value.bottom-o.value.height*S(a+w.value),id:`plot_${f.value}_${u}`,color:_.value?e.value.style.bar.color:e.value.style.area.useGradient?N(e.value.style.line.color,.05*(1-u/g.value)):e.value.style.line.color,width:o.value.width/(g.value+1)>t.padding?t.padding:o.value.width/(g.value+1)}})),ee=d(()=>{const l={x:s.value[0].x,y:t.value.height-6},u={x:s.value[s.value.length-1].x,y:t.value.height-6},a=[];return s.value.forEach(n=>{a.push(`${n.x},${n.y} `)}),[l.x,l.y,...a,u.x,u.y].toString()}),h=x(void 0);function le(l,u){h.value=l,V("hoverIndex",{index:u})}function ae(){h.value=void 0,V("hoverIndex",{index:void 0})}const k=d(()=>{if($.value){const l=s.value.map(a=>a.absoluteValue),u=l.reduce((a,n)=>a+n,0);return{latest:s.value[s.value.length-1].absoluteValue,sum:u,average:u/s.value.length,median:ve(l),trend:ne(s.value.map(({x:a,y:n,absoluteValue:j})=>({x:a,y:n,value:j}))).trend}}else return{latest:null,sum:null,average:null,median:null,trend:null}}),T=d(()=>$.value?e.value.style.dataLabel.valueType==="latest"?k.value.latest:e.value.style.dataLabel.valueType==="sum"?k.value.sum:e.value.style.dataLabel.valueType==="average"?k.value.average:0:0),_=d(()=>e.value.type&&e.value.type==="bar");function te(l,u){V("selectDatapoint",{datapoint:l,index:u})}return(l,u)=>(i(),v("div",{ref_key:"sparklineChart",ref:z,class:"vue-ui-sparkline",id:f.value,style:I(`width:100%;font-family:${e.value.style.fontFamily}`)},[X(l.$slots,"before",ke(xe({selected:h.value,latest:k.value.latest,sum:k.value.sum,average:k.value.average,median:k.value.median,trend:k.value.trend})),void 0,!0),e.value.style.title.show&&b.showInfo?(i(),v("div",{key:0,ref_key:"chartTitle",ref:A,class:"vue-ui-sparkline-title",style:I(`display:flex;align-items:center;width:100%;color:${e.value.style.title.color};background:${e.value.style.backgroundColor};justify-content:${e.value.style.title.textAlign==="left"?"flex-start":e.value.style.title.textAlign==="right"?"flex-end":"center"};height:${e.value.style.title.fontSize*2}px;font-size:${e.value.style.title.fontSize}px;font-weight:${e.value.style.title.bold?"bold":"normal"};`)},[p("span",{style:I(`padding:${e.value.style.title.textAlign==="left"?"0 0 0 12px":e.value.style.title.textAlign==="right"?"0 12px 0 0":"0"}`)},Q(h.value?h.value.period:e.value.style.title.text),5)],4)):c("",!0),$.value?(i(),v("svg",{key:1,xmlns:y(de),viewBox:`0 0 ${t.value.width} ${t.value.height}`,style:I(`background:${e.value.style.backgroundColor};overflow:visible`)},[me(pe),p("defs",null,[p("linearGradient",{x1:"0%",y1:"0%",x2:"100%",y2:"0%",id:`sparkline_gradient_${f.value}`},[p("stop",{offset:"0%","stop-color":y(C)(y(N)(e.value.style.area.color,.05),e.value.style.area.opacity)},null,8,Le),p("stop",{offset:"100%","stop-color":y(C)(e.value.style.area.color,e.value.style.area.opacity)},null,8,Ne)],8,$e),p("linearGradient",{x2:"0%",y2:"100%",id:`sparkline_bar_gradient_pos_${f.value}`},[p("stop",{offset:"0%","stop-color":e.value.style.bar.color},null,8,Ie),p("stop",{offset:"100%","stop-color":y(N)(e.value.style.bar.color,.05)},null,8,Ve)],8,Ce),p("linearGradient",{x2:"0%",y2:"100%",id:`sparkline_bar_gradient_neg_${f.value}`},[p("stop",{offset:"0%","stop-color":y(N)(e.value.style.bar.color,.05)},null,8,We),p("stop",{offset:"100%","stop-color":e.value.style.bar.color},null,8,Se)],8,ze)]),e.value.style.area.show&&!_.value&&s.value[0]?(i(),v("g",Ge,[e.value.style.line.smooth?(i(),v("path",{key:0,d:`M ${s.value[0].x},${o.value.bottom} ${y(q)(s.value)} L ${s.value.at(-1).x},${o.value.bottom} Z`,fill:e.value.style.area.useGradient?`url(#sparkline_gradient_${f.value})`:y(C)(e.value.style.area.color,e.value.style.area.opacity)},null,8,Me)):(i(),v("path",{key:1,d:`M${ee.value}Z`,fill:e.value.style.area.useGradient?`url(#sparkline_gradient_${f.value})`:y(C)(e.value.style.area.color,e.value.style.area.opacity)},null,8,Ae))])):c("",!0),e.value.style.line.smooth&&!_.value?(i(),v("path",{key:1,d:`M ${y(q)(s.value)}`,stroke:e.value.style.line.color,fill:"none","stroke-width":e.value.style.line.strokeWidth,"stroke-linecap":"round"},null,8,Be)):c("",!0),(i(!0),v(G,null,M(s.value,(a,n)=>(i(),v("g",null,[n<s.value.length-1&&!e.value.style.line.smooth&&!_.value?(i(),v("line",{key:0,x1:a.x,x2:s.value[n+1].x,y1:a.y,y2:s.value[n+1].y,stroke:a.color,"stroke-width":e.value.style.line.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round","shape-rendering":"geometricPrecision"},null,8,Ee)):c("",!0),_.value?(i(),v("rect",{key:1,x:a.x-a.width/2,y:a.absoluteValue>0?a.y:L.value,width:a.width,height:Math.abs(a.y-L.value),fill:a.absoluteValue>0?`url(#sparkline_bar_gradient_pos_${f.value})`:`url(#sparkline_bar_gradient_neg_${f.value})`,rx:e.value.style.bar.borderRadius},null,8,Fe)):c("",!0),e.value.style.verticalIndicator.show&&(h.value&&a.id===h.value.id||b.selectedIndex===n)?(i(),v("line",{key:2,x1:a.x,x2:a.x,y1:o.value.top-6,y2:o.value.bottom,stroke:e.value.style.verticalIndicator.color||a.color,"stroke-width":e.value.style.verticalIndicator.strokeWidth,"stroke-linecap":"round","stroke-dasharray":e.value.style.verticalIndicator.strokeDasharray||0},null,8,Te)):c("",!0)]))),256)),W.value<0?(i(),v("line",{key:2,x1:o.value.start,x2:o.value.start+o.value.width-16,y1:L.value,y2:L.value,stroke:e.value.style.zeroLine.color,"stroke-dasharray":e.value.style.zeroLine.strokeWidth*2,"stroke-width":e.value.style.zeroLine.strokeWidth,"stroke-linecap":"round"},null,8,je)):c("",!0),e.value.style.plot.show?(i(!0),v(G,{key:3},M(s.value,(a,n)=>(i(),v("g",null,[h.value&&a.id===h.value.id||b.selectedIndex===n?(i(),v("circle",{key:0,cx:a.x,cy:a.y,r:e.value.style.plot.radius,fill:a.color,stroke:e.value.style.plot.stroke,"stroke-width":e.value.style.plot.strokeWidth},null,8,De)):c("",!0)]))),256)):c("",!0),b.showInfo&&e.value.style.dataLabel.show?(i(),v("text",{key:4,x:e.value.style.dataLabel.position==="left"?12+e.value.style.dataLabel.offsetX:o.value.width+12+e.value.style.dataLabel.offsetX,y:t.value.height/2+e.value.style.dataLabel.fontSize/2.5+e.value.style.dataLabel.offsetY,"font-size":e.value.style.dataLabel.fontSize,"font-weight":e.value.style.dataLabel.bold?"bold":"normal",fill:e.value.style.dataLabel.color},Q(h.value?y(O)(e.value.style.dataLabel.formatter,h.value.absoluteValue,y(K)({p:e.value.style.dataLabel.prefix,v:h.value.absoluteValue,s:e.value.style.dataLabel.suffix,r:e.value.style.dataLabel.roundingValue}),{datapoint:h.value}):y(O)(e.value.style.dataLabel.formatter,T.value,y(K)({p:e.value.style.dataLabel.prefix,v:T.value,s:e.value.style.dataLabel.suffix,r:e.value.style.dataLabel.roundingValue}))),9,qe)):c("",!0),(i(!0),v(G,null,M(s.value,(a,n)=>(i(),v("rect",{x:a.x-(o.value.width/(g.value+1)>t.value.padding?t.value.padding:o.value.width/(g.value+1))/2,y:o.value.top-6,height:o.value.height+6,width:o.value.width/(g.value+1)>t.value.padding?t.value.padding:o.value.width/(g.value+1),fill:"transparent",onMouseenter:j=>le(a,n),onMouseleave:ae,onClick:()=>te(a,n)},null,40,Oe))),256)),X(l.$slots,"svg",{svg:t.value},void 0,!0)],12,_e)):c("",!0),$.value?c("",!0):(i(),be(ye,{key:2,config:{type:"sparkline",style:{backgroundColor:e.value.style.backgroundColor,sparkline:{color:"#CCCCCC"}}}},null,8,["config"]))],12,we))}},He=fe(Ke,[["__scopeId","data-v-9481e22a"]]);export{He as default};
