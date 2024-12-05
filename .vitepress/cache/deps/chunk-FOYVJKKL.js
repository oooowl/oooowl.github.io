import {
  Ht
} from "./chunk-C4CXLYL5.js";
import {
  xQ
} from "./chunk-VFW4PQWD.js";

// node_modules/vue-data-ui/dist/pdf-B7oVat64.js
function H({ domElement: f, fileName: l }) {
  if (f) {
    const t = {
      height: 851.89,
      width: 595.28
    }, e = new Ht("", "pt", "a4");
    let h, g, d, a, o;
    return xQ(f).then((n) => {
      h = n.width, g = n.height;
      let i = g;
      const p = h / t.width * t.height;
      let m = 0;
      if (d = t.width, a = 582.28 / h * g, o = n.toDataURL("image/png", 1), i < p)
        e.addImage(
          o,
          "PNG",
          33,
          24,
          d * 0.9,
          a * 0.9,
          "",
          "FAST"
        );
      else
        for (; i > 0; )
          e.addImage(
            o,
            "PNG",
            33,
            m,
            d * 0.9,
            a * 0.9,
            "",
            "FAST"
          ), i -= p, m -= t.height - 24, i > 0 && e.addPage();
      e.save(`${l}.pdf`);
    });
  }
}

export {
  H
};
//# sourceMappingURL=chunk-FOYVJKKL.js.map
