import {
  c
} from "./chunk-B52AVJZK.js";
import {
  Qt,
  oe
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  normalizeStyle,
  openBlock,
  ref,
  renderList,
  unref
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-digits-IKt4qT2-.js
var w = { key: 0 };
var B = ["d", "fill"];
var F = ["d", "fill"];
var X = ["d", "fill"];
var E = ["d", "fill"];
var I = ["d", "fill"];
var O = ["d", "fill"];
var A = ["d", "fill"];
var D = { key: 1 };
var G = ["cx", "cy", "fill"];
var V = {
  __name: "Digit",
  props: {
    quanta: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: "#e1e5e8"
    },
    color: {
      type: String,
      default: "#000000"
    },
    // coordinates from top left of a
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    const u = e, c2 = ref({
      /**
       * clockwise from top (last: g)
       *     a
       *    ----
       * f |    | b
       *    ----
       * e | g  | c
       *    ----
       *     d
      */
      0: "1111110",
      1: "0110000",
      2: "1101101",
      3: "1111001",
      4: "0110011",
      5: "1011011",
      6: "1011111",
      7: "1110000",
      8: "1111111",
      9: "1111011",
      "-": "0000001",
      X: "0000000"
    }), t = computed(() => [void 0, null].includes(u.quanta) ? c2.value.X : c2.value[u.quanta]);
    return (y, g) => (openBlock(), createElementBlock(Fragment, null, [
      [void 0, null, "."].includes(e.quanta) ? createCommentVNode("", true) : (openBlock(), createElementBlock("g", w, [
        createBaseVNode("path", {
          d: `M ${e.x} ${e.y} L ${e.x + 2} ${e.y - 2} L ${e.x + 24} ${e.y - 2} L ${e.x + 26} ${e.y} L ${e.x + 24} ${e.y + 2} L ${e.x + 2} ${e.y + 2}Z`,
          fill: t.value[0] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, B),
        createBaseVNode("path", {
          d: `M ${e.x + 26} ${e.y + 26} L ${e.x + 26} ${e.y + 4} L ${e.x + 28} ${e.y + 2} L ${e.x + 30} ${e.y + 4} L ${e.x + 30} ${e.y + 26} L ${e.x + 28} ${e.y + 28} L ${e.x + 26} ${e.y + 26}`,
          fill: t.value[1] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, F),
        createBaseVNode("path", {
          d: `M ${e.x + 26} ${e.y + 56} L ${e.x + 26} ${e.y + 34} L ${e.x + 28} ${e.y + 32} L ${e.x + 30} ${e.y + 34} L ${e.x + 30} ${e.y + 56} L ${e.x + 28} ${e.y + 58} L ${e.x + 26} ${e.y + 56}`,
          fill: t.value[2] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, X),
        createBaseVNode("path", {
          d: `M ${e.x + 2} ${e.y + 58} L ${e.x} ${e.y + 60} L ${e.x + 2} ${e.y + 62} L ${e.x + 24} ${e.y + 62} L ${e.x + 26} ${e.y + 60} L ${e.x + 24} ${e.y + 58} L ${e.x + 2} ${e.y + 58}`,
          fill: t.value[3] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, E),
        createBaseVNode("path", {
          d: `M ${e.x} ${e.y + 34} L ${e.x - 2} ${e.y + 32} L ${e.x - 4} ${e.y + 34} L ${e.x - 4} ${e.y + 56} L ${e.x - 2} ${e.y + 58} L ${e.x} ${e.y + 56} L ${e.x} ${e.y + 34}`,
          fill: t.value[4] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, I),
        createBaseVNode("path", {
          d: `M ${e.x - 2} ${e.y + 2} L ${e.x} ${e.y + 4} L ${e.x} ${e.y + 26} L ${e.x - 2} ${e.y + 28} L ${e.x - 4} ${e.y + 26} L ${e.x - 4} ${e.y + 4} L ${e.x - 2} ${e.y + 2}`,
          fill: t.value[5] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, O),
        createBaseVNode("path", {
          d: `M ${e.x + 2} ${e.y + 28} L ${e.x} ${e.y + 30} L ${e.x + 2} ${e.y + 32} L ${e.x + 24} ${e.y + 32} L ${e.x + 26} ${e.y + 30} L ${e.x + 24} ${e.y + 28} L ${e.x + 2} ${e.y + 28}`,
          fill: t.value[6] == 1 ? e.color : e.backgroundColor,
          stroke: "none"
        }, null, 8, A)
      ])),
      e.quanta == "." ? (openBlock(), createElementBlock("g", D, [
        createBaseVNode("circle", {
          cx: e.x - 8,
          cy: e.y + 60,
          r: 3,
          fill: e.color
        }, null, 8, G)
      ])) : createCommentVNode("", true)
    ], 64));
  }
};
var j = ["xmlns", "viewBox"];
var U = {
  __name: "vue-ui-digits",
  props: {
    dataset: {
      type: Number,
      default: 0
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const u = e, { vue_ui_digits: c2 } = oe(), t = computed(() => c({
      userConfig: u.config,
      defaultConfig: c2
    })), y = computed(() => {
      const a = (u.dataset || 0).toString().split(""), x = [], n = {
        x: 10,
        y: 10
      };
      let L = 0;
      for (let f = 0; f < a.length; f += 1) {
        const h = a[f];
        x.push({
          x: n.x + L,
          y: n.y,
          quanta: h
        }), h == "." ? L += 2 : L += 44;
      }
      return x;
    }), g = computed(() => Math.max(...y.value.map((a) => a.x)) + 36);
    return (a, x) => (openBlock(), createElementBlock("svg", {
      xmlns: unref(Qt),
      viewBox: `0 0 ${g.value} 80`,
      style: normalizeStyle(`background:${t.value.backgroundColor};${t.value.height ? `height:${t.value.height};` : ""}${t.value.width ? `width:${t.value.width}` : ""}`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (n) => (openBlock(), createBlock(V, {
        x: n.x,
        y: n.y,
        quanta: n.quanta,
        color: t.value.digits.color,
        backgroundColor: t.value.digits.skeletonColor
      }, null, 8, ["x", "y", "quanta", "color", "backgroundColor"]))), 256))
    ], 12, j));
  }
};

export {
  U
};
//# sourceMappingURL=chunk-KXX3QMVO.js.map
