import c from"./html2canvas.esm-d2sM-0Wm.tnAx6l3B.js";function l({domElement:o,fileName:a,format:t="png"}){if(o)return new Promise((n,m)=>{const e=document.createElement("a");c(o,{scale:2}).then(r=>{e.href=r.toDataURL(`image/${t}`),e.download=`${a}.${t}`,e.click(),e&&e.remove(),n()}).catch(r=>{console.error("Error generating image:",r),m(r)})})}export{l as default};
