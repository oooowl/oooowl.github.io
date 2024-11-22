import {
  xQ
} from "./chunk-GYVK32RL.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/img-DGzWcJ4Y.js
function l({ domElement: n, fileName: t, format: o = "png" }) {
  if (n)
    return new Promise((r, c) => {
      const e = document.createElement("a");
      xQ(n, { scale: 2 }).then((a) => {
        e.href = a.toDataURL(`image/${o}`), e.download = `${t}.${o}`, e.click(), e && e.remove(), r();
      }).catch((a) => {
        console.error("Error generating image:", a), c(a);
      });
    });
}
export {
  l as default
};
//# sourceMappingURL=img-DGzWcJ4Y-J5AGXZ6C.js.map
