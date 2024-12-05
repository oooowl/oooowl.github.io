import {
  p
} from "./chunk-VCFIOMKF.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import {
  Gt,
  Kt,
  Lt,
  nr,
  oe
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  toDisplayString,
  unref,
  watch
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-gizmo-CKQcbe_7.js
var P = ["viewBox", "width"];
var V = { key: 0 };
var D = ["id"];
var I = ["stop-color"];
var M = ["stop-color"];
var U = ["stroke"];
var E = ["stroke"];
var O = ["width", "fill"];
var S = ["fill"];
var A = { key: 0 };
var j = ["id"];
var T = createBaseVNode("feGaussianBlur", {
  in: "SourceGraphic",
  stdDeviation: 1
}, null, -1);
var q = [
  T
];
var H = ["stroke"];
var J = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
var K = ["filter"];
var Q = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
var R = ["fill"];
var ee = {
  __name: "vue-ui-gizmo",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Number,
      default: 0
    }
  },
  setup(f) {
    const o = f, { vue_ui_gizmo: k } = oe(), l = ref(Lt());
    onMounted(() => {
      h();
    });
    function h() {
      !o.dataset && o.dataset !== 0 && Kt({
        componentName: "VueUiGizmo",
        type: "dataset"
      }), o.dataset < 0 && console.warn("VueUiGizmo: dataset cannot be negative.");
    }
    const e = computed({
      get: () => _(),
      set: (i) => i
    });
    function _() {
      return c({
        userConfig: o.config,
        defaultConfig: k
      });
    }
    watch(() => o.config, (i) => {
      e.value = _(), h();
    }, { deep: true });
    const v = computed(() => ({
      battery: { width: e.value.showPercentage ? 140 : 80, height: 50 },
      gauge: { width: 80, height: 80 }
    })[e.value.type]), u = computed(() => {
      const n = 2 * Math.PI * 35, w = n - o.dataset / 100 * n;
      return {
        dasharray: `${n} ${n}`,
        dashoffset: w
      };
    });
    return (i, n) => (openBlock(), createElementBlock("svg", {
      class: "vue-ui-gizmo",
      viewBox: `0 0 ${v.value.width} ${v.value.height}`,
      width: e.value.size,
      style: normalizeStyle({
        background: "transparent",
        fontFamily: e.value.fontFamily
      })
    }, [
      createVNode(p),
      e.value.useGradient ? (openBlock(), createElementBlock("defs", V, [
        createBaseVNode("linearGradient", {
          id: `gizmo_gradient_${l.value}`,
          x1: "0%",
          x2: "100%",
          y1: "0%",
          y2: "0%"
        }, [
          createBaseVNode("stop", {
            offset: "0%",
            "stop-color": e.value.gradientColor
          }, null, 8, I),
          createBaseVNode("stop", {
            offset: "100%",
            "stop-color": e.value.color
          }, null, 8, M)
        ], 8, D)
      ])) : createCommentVNode("", true),
      e.value.type === "battery" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("path", {
          d: "M 5 10 L 5 40 C 5 43 7 45 9 45 L 65 45 C 68 45 70 43 70 40 L 70 38 C 73 38 75 38 75 33 L 75 17 C 75 12 73 12 70 12 L 70 10 C 70 7 68 5 65 5 L 10 5 C 7 5 5 7 5 10",
          stroke: e.value.stroke,
          "stroke-width": 2,
          fill: "none"
        }, null, 8, U),
        createBaseVNode("path", {
          d: "M 70 16 L 70 34",
          stroke: e.value.stroke,
          "stroke-width": 2,
          fill: "none",
          style: { opacity: "0.5" }
        }, null, 8, E),
        createBaseVNode("rect", {
          x: 10,
          y: 10,
          height: 30,
          width: 55 * (f.dataset / 100),
          fill: e.value.useGradient ? `url(#gizmo_gradient_${l.value})` : e.value.color,
          rx: 2
        }, null, 8, O),
        e.value.showPercentage ? (openBlock(), createElementBlock("text", {
          key: 0,
          x: 85,
          y: 32,
          "text-anchor": "start",
          "font-size": "20",
          fill: e.value.textColor
        }, toDisplayString(unref(nr)(
          e.value.formatter,
          o.dataset,
          unref(Gt)({
            v: o.dataset,
            s: "%"
          })
        )), 9, S)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      e.value.type === "gauge" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        e.value.useGradient ? (openBlock(), createElementBlock("defs", A, [
          createBaseVNode("filter", {
            id: `blur_${l.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, q, 8, j)
        ])) : createCommentVNode("", true),
        createBaseVNode("circle", {
          cx: 40,
          cy: 40,
          r: 35,
          stroke: e.value.stroke,
          "stroke-width": 2 * 4,
          fill: "none"
        }, null, 8, H),
        createBaseVNode("circle", {
          cx: 40,
          cy: 40,
          r: 35,
          stroke: e.value.color,
          "stroke-width": 2 * 4,
          "stroke-dasharray": u.value.dasharray,
          "stroke-dashoffset": u.value.dashoffset,
          "stroke-linecap": "round",
          fill: "none",
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
        }, null, 8, J),
        e.value.useGradient ? (openBlock(), createElementBlock("g", {
          key: 1,
          filter: `url(#blur_${l.value})`
        }, [
          createBaseVNode("circle", {
            cx: 40,
            cy: 40,
            r: 35,
            stroke: e.value.gradientColor,
            "stroke-width": 1,
            fill: "none",
            "stroke-dasharray": u.value.dasharray,
            "stroke-dashoffset": u.value.dashoffset,
            style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
          }, null, 8, Q)
        ], 8, K)) : createCommentVNode("", true),
        e.value.showPercentage ? (openBlock(), createElementBlock("text", {
          key: 2,
          x: 40,
          y: 47,
          "text-anchor": "middle",
          "font-size": "20",
          fill: e.value.textColor
        }, toDisplayString(unref(nr)(
          e.value.formatter,
          o.dataset,
          unref(Gt)({
            v: o.dataset,
            s: "%"
          })
        )), 9, R)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ], 12, P));
  }
};
export {
  ee as default
};
//# sourceMappingURL=vue-ui-gizmo-CKQcbe_7-IPSRSDIY.js.map
