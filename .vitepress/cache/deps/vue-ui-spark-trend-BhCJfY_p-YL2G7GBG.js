import {
  Cs
} from "./chunk-QGOFMHVO.js";
import {
  p
} from "./chunk-FSTZFDG3.js";
import {
  c
} from "./chunk-OBQGP7GO.js";
import {
  u
} from "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  He,
  Ht,
  Jt,
  Lt,
  br,
  dr,
  ir,
  jt,
  k,
  or,
  qt,
  te
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-spark-trend-BhCJfY_p.js
var ve = ["id"];
var he = ["xmlns", "viewBox"];
var ce = ["id"];
var ye = ["stop-color"];
var fe = ["stop-color"];
var pe = { key: 0 };
var me = ["d", "fill"];
var ge = ["d", "fill"];
var ke = ["d", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"];
var _e = ["d", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"];
var be = ["height", "width", "x"];
var xe = { style: { width: "100%" } };
var we = ["x", "y", "fill", "font-size", "font-weight"];
var Ce = ["stroke", "cx", "cy", "fill"];
var Le = ["x", "y", "font-size", "fill", "font-weight"];
var $e = {
  key: 2,
  ref: "source",
  dir: "auto"
};
var Ne = {
  __name: "vue-ui-spark-trend",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(Z) {
    const r = Z, { vue_ui_spark_trend: q } = te(), P = computed(() => !!r.dataset && r.dataset.length), b = ref(Dt()), e = computed({
      get: () => F(),
      set: (t) => t
    });
    function F() {
      const t = c({
        userConfig: r.config,
        defaultConfig: q
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_spark_trend[t.theme] || r.config,
          defaultConfig: t
        })
      } : t;
    }
    const f = computed(() => br({
      data: r.dataset,
      threshold: e.value.downsample.threshold
    }));
    watch(() => r.config, (t) => {
      e.value = F(), j();
    }, { deep: true }), watch(() => r.dataset, (t) => {
      m.value = br({
        data: r.dataset,
        threshold: e.value.downsample.threshold
      }).map((l) => [void 0, 1 / 0, -1 / 0, null, NaN].includes(l) ? null : l);
    }, { deep: true });
    function $(t) {
      return t.map((l) => k(l));
    }
    const m = ref(br({
      data: r.dataset,
      threshold: e.value.downsample.threshold
    }).map((t) => e.value.style.animation.show || [void 0, 1 / 0, -1 / 0, null, NaN].includes(t) ? null : t)), g = ref(false), N = ref(null);
    onMounted(() => {
      j();
      let l = 1e3 / e.value.style.animation.animationFrames, v = performance.now();
      if (e.value.style.animation.show && e.value.style.animation.animationFrames && r.dataset.length > 1) {
        let z = function() {
          g.value = true;
          let B = performance.now(), V = B - v;
          V > l ? (v = B - V % l, p2 < f.value.length ? (m.value.push(f.value[p2]), p2 += 1, N.value = requestAnimationFrame(z)) : (cancelAnimationFrame(N.value), m.value = $(f.value), g.value = false)) : N.value = requestAnimationFrame(z);
        };
        m.value = [];
        let p2 = 0;
        z();
      }
    });
    function j() {
      jt(r.dataset) && qt({
        componentName: "VueUiSparkTrend",
        type: "dataset"
      });
    }
    const n = ref({
      height: 80,
      width: 300
    }), y = computed(() => ({
      top: e.value.style.padding.top,
      left: e.value.style.padding.left,
      right: n.value.width - e.value.style.padding.right,
      bottom: n.value.height - e.value.style.padding.bottom,
      height: n.value.height - (e.value.style.padding.top + e.value.style.padding.bottom) - (e.value.style.dataLabel.show ? e.value.style.dataLabel.fontSize : 0),
      width: n.value.width - (e.value.style.padding.left + e.value.style.padding.right)
    })), T = computed(() => {
      const t = $(f.value);
      return {
        max: Math.max(...t.map((l) => k(l))),
        min: Math.min(...t.map((l) => k(l)))
      };
    }), x = computed(() => {
      const t = T.value.min >= 0 ? 0 : T.value.min;
      return Math.abs(t);
    }), R = computed(() => T.value.max + x.value);
    function A(t) {
      return t / R.value;
    }
    const W = computed(() => f.value.length), a = computed(() => m.value.map((t, l) => {
      const v = isNaN(t) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t) ? 0 : t || 0;
      return {
        value: k(t),
        absoluteValue: k(v),
        plotValue: k(v + x.value),
        toMax: A(v + x.value),
        x: y.value.left + k(l * (y.value.width / (W.value - 1))) - e.value.style.padding.right,
        y: y.value.bottom - k(y.value.height * A(v + x.value))
      };
    })), w = computed(() => {
      const t = $(f.value);
      return e.value.style.trendLabel.trendType === "global" ? or(t) : e.value.style.trendLabel.trendType === "n-1" && t.length > 1 ? (t.at(-1) / t.at(-2) - 1) * 100 : e.value.style.trendLabel.trendType === "lastToFirst" ? (t.at(-1) / t[0] - 1) * 100 : 0;
    }), C = computed(() => g.value || w.value === 0 ? "neutral" : w.value > 0 ? "positive" : "negative"), i = computed(() => e.value.style.arrow.colors[C.value]), X = computed(() => {
      const t = { x: a.value[0].x, y: n.value.height - 6 }, l = { x: a.value[a.value.length - 1].x, y: n.value.height - 6 }, v = [];
      return a.value.forEach((p2) => {
        v.push(`${p2.x},${p2.y} `);
      }), [t.x, t.y, ...v, l.x, l.y].toString();
    }), Y = computed(() => {
      let t = [];
      return a.value.forEach((l) => {
        t.push(`${l.x},${l.y} `);
      }), `M ${t.toString()}`;
    });
    return (t, l) => (openBlock(), createElementBlock("div", {
      class: "vue-ui-spark-trend",
      id: b.value,
      style: normalizeStyle(`width:100%;font-family:${e.value.style.fontFamily};background:${e.value.style.backgroundColor}`)
    }, [
      P.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Jt),
        viewBox: `0 0 ${n.value.width} ${n.value.height}`,
        style: "width:100%;background:transparent;overflow:visible"
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            id: `pill_gradient_${b.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(e.value.style.line.useColorTrend ? i.value : e.value.style.line.stroke, e.value.style.area.opacity)
            }, null, 8, ye),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.backgroundColor
            }, null, 8, fe)
          ], 8, ce)
        ]),
        e.value.style.area.show && a.value[0] ? (openBlock(), createElementBlock("g", pe, [
          e.value.style.line.smooth ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: `M ${a.value[0].x},${y.value.bottom} ${unref(Lt)(a.value)} L ${a.value.at(-1).x},${y.value.bottom} Z`,
            fill: e.value.style.area.useGradient ? `url(#pill_gradient_${b.value})` : unref(dr)(e.value.style.line.useColorTrend ? i.value : e.value.style.line.stroke, e.value.style.area.opacity),
            stroke: "none"
          }, null, 8, me)) : (openBlock(), createElementBlock("path", {
            key: 1,
            d: `M${X.value}Z`,
            fill: e.value.style.area.useGradient ? `url(#pill_gradient_${b.value})` : unref(dr)(e.value.style.line.useColorTrend ? i.value : e.value.style.line.stroke, e.value.style.area.opacity),
            stroke: "none"
          }, null, 8, ge))
        ])) : createCommentVNode("", true),
        e.value.style.line.smooth && a.value.length ? (openBlock(), createElementBlock("path", {
          key: 1,
          d: `M ${unref(Lt)(a.value)}`,
          stroke: e.value.style.line.useColorTrend ? i.value : e.value.style.line.stroke,
          fill: "none",
          "stroke-width": e.value.style.line.strokeWidth,
          "stroke-linecap": e.value.style.line.strokeLinecap,
          "stroke-linejoin": e.value.style.line.strokeLinejoin
        }, null, 8, ke)) : createCommentVNode("", true),
        !e.value.style.line.smooth && a.value.length ? (openBlock(), createElementBlock("path", {
          key: 2,
          d: Y.value,
          stroke: e.value.style.line.useColorTrend ? i.value : e.value.style.line.stroke,
          fill: "none",
          "stroke-width": e.value.style.line.strokeWidth,
          "stroke-linecap": e.value.style.line.strokeLinecap,
          "stroke-linejoin": e.value.style.line.strokeLinejoin
        }, null, 8, _e)) : createCommentVNode("", true),
        g.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("foreignObject", {
          key: 3,
          height: n.value.height / 2,
          width: n.value.height / 2,
          x: n.value.height / 5,
          y: 8
        }, [
          createBaseVNode("div", xe, [
            C.value === "positive" ? (openBlock(), createBlock(u, {
              key: 0,
              stroke: i.value,
              name: "arrowTop",
              size: n.value.height / 2
            }, null, 8, ["stroke", "size"])) : createCommentVNode("", true),
            C.value === "negative" ? (openBlock(), createBlock(u, {
              key: 1,
              stroke: i.value,
              name: "arrowBottom",
              size: n.value.height / 2
            }, null, 8, ["stroke", "size"])) : createCommentVNode("", true),
            C.value === "neutral" ? (openBlock(), createBlock(u, {
              key: 2,
              stroke: i.value,
              name: "arrowRight",
              size: n.value.height / 2
            }, null, 8, ["stroke", "size"])) : createCommentVNode("", true)
          ])
        ], 8, be)),
        g.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("text", {
          key: 4,
          x: n.value.height / 2 - n.value.height / 20,
          y: y.value.bottom,
          "text-anchor": "middle",
          fill: e.value.style.trendLabel.useColorTrend ? i.value : e.value.style.trendLabel.color,
          "font-size": e.value.style.trendLabel.fontSize,
          "font-weight": e.value.style.trendLabel.bold ? "bold" : "normal"
        }, toDisplayString(unref(Ht)({
          p: w.value > 0 ? "+" : "",
          v: w.value,
          s: "%",
          r: e.value.style.trendLabel.rounding
        })), 9, we)),
        a.value.length && a.value.at(-1).x !== void 0 ? (openBlock(), createElementBlock("circle", {
          key: 5,
          stroke: e.value.style.backgroundColor,
          "stroke-width": 2,
          cx: a.value.at(-1).x,
          cy: a.value.at(-1).y,
          r: 4,
          fill: i.value
        }, null, 8, Ce)) : createCommentVNode("", true),
        a.value.length && a.value.at(-1).x !== void 0 && e.value.style.dataLabel.show ? (openBlock(), createElementBlock("text", {
          key: 6,
          "text-anchor": "middle",
          x: a.value.at(-1).x,
          y: a.value.at(-1).y - e.value.style.dataLabel.fontSize / 1.5,
          "font-size": e.value.style.dataLabel.fontSize,
          fill: e.value.style.dataLabel.useColorTrend ? i.value : e.value.style.dataLabel.color,
          "font-weight": e.value.style.dataLabel.bold ? "bold" : "normal"
        }, toDisplayString(unref(ir)(
          e.value.style.dataLabel.formatter,
          a.value.at(-1).value,
          unref(Ht)({
            p: e.value.style.dataLabel.prefix,
            v: a.value.at(-1).value,
            s: e.value.style.dataLabel.suffix,
            r: e.value.style.dataLabel.rounding
          }),
          { datapoint: a.value.at(-1) }
        )), 9, Le)) : createCommentVNode("", true)
      ], 8, he)) : (openBlock(), createBlock(Cs, {
        key: 0,
        config: {
          type: "sparkline",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            sparkline: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      t.$slots.source ? (openBlock(), createElementBlock("div", $e, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 12, ve));
  }
};
var Ae = s(Ne, [["__scopeId", "data-v-30936343"]]);
export {
  Ae as default
};
//# sourceMappingURL=vue-ui-spark-trend-BhCJfY_p-YL2G7GBG.js.map
