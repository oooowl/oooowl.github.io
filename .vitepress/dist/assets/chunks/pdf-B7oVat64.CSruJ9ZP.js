import n from"./html2canvas.esm-d2sM-0Wm.tnAx6l3B.js";import{H as s}from"./jspdf.es.min-C660YX78.C_kotyfX.js";import"./framework.BaNfDZ-f.js";function H({domElement:r,fileName:l}){if(r){const t={height:851.89,width:595.28},e=new s("","pt","a4");let a,d,h,o,m;return n(r).then(g=>{a=g.width,d=g.height;let i=d;const f=a/t.width*t.height;let p=0;if(h=t.width,o=582.28/a*d,m=g.toDataURL("image/png",1),i<f)e.addImage(m,"PNG",33,24,h*.9,o*.9,"","FAST");else for(;i>0;)e.addImage(m,"PNG",33,p,h*.9,o*.9,"","FAST"),i-=f,p-=t.height-24,i>0&&e.addPage();e.save(`${l}.pdf`)})}}export{H as default};