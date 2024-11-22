import {
  fs
} from "./chunk-XKFV7VRH.js";
import {
  p
} from "./chunk-VCFIOMKF.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Gt,
  Kt,
  Lt,
  Qt,
  Xt,
  Zt,
  cr,
  k,
  nr,
  oe,
  vt
} from "./chunk-TG4LWCJY.js";
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
  toDisplayString,
  unref,
  watch
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-spark-trend-CHKQGMLs.js
var re = ["id"];
var ie = ["xmlns", "viewBox"];
var de = ["id"];
var ve = ["stop-color"];
var ce = ["stop-color"];
var ye = { key: 0 };
var he = ["d", "fill"];
var fe = ["d", "fill"];
var pe = ["d", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"];
var me = ["d", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"];
var ge = ["height", "width", "x"];
var ke = { style: { width: "100%" } };
var _e = ["x", "y", "fill", "font-size", "font-weight"];
var be = ["stroke", "cx", "cy", "fill"];
var xe = ["x", "y", "font-size", "fill", "font-weight"];
var we = {
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
  setup(O) {
    const n = O, { vue_ui_spark_trend: U } = oe(), W = computed(() => !!n.dataset && n.dataset.length), _ = ref(Lt()), e = computed({
      get: () => S(),
      set: (t) => t
    });
    function S() {
      const t = c({
        userConfig: n.config,
        defaultConfig: U
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_spark_trend[t.theme] || n.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => n.config, (t) => {
      e.value = S(), I();
    }, { deep: true }), watch(() => n.dataset, (t) => {
      p2.value = n.dataset.map((l) => [void 0, 1 / 0, -1 / 0, null, NaN].includes(l) ? null : l);
    }, { deep: true });
    function L(t) {
      return t.map((l) => k(l));
    }
    const p2 = ref(n.dataset.map((t) => e.value.style.animation.show || [void 0, 1 / 0, -1 / 0, null, NaN].includes(t) ? null : t)), m = ref(false), N = ref(null);
    onMounted(() => {
      I();
      let l = 1e3 / e.value.style.animation.animationFrames, d = performance.now();
      if (e.value.style.animation.show && e.value.style.animation.animationFrames && n.dataset.length > 1) {
        let T = function() {
          m.value = true;
          let j = performance.now(), A = j - d;
          A > l ? (d = j - A % l, f < n.dataset.length ? (p2.value.push(n.dataset[f]), f += 1, N.value = requestAnimationFrame(T)) : (cancelAnimationFrame(N.value), p2.value = L(n.dataset), m.value = false)) : N.value = requestAnimationFrame(T);
        };
        p2.value = [];
        let f = 0;
        T();
      }
    });
    function I() {
      Xt(n.dataset) && Kt({
        componentName: "VueUiSparkTrend",
        type: "dataset"
      });
    }
    const o = ref({
      height: 80,
      width: 300
    }), h = computed(() => ({
      top: e.value.style.padding.top,
      left: e.value.style.padding.left,
      right: o.value.width - e.value.style.padding.right,
      bottom: o.value.height - e.value.style.padding.bottom,
      height: o.value.height - (e.value.style.padding.top + e.value.style.padding.bottom) - (e.value.style.dataLabel.show ? e.value.style.dataLabel.fontSize : 0),
      width: o.value.width - (e.value.style.padding.left + e.value.style.padding.right)
    })), $ = computed(() => {
      const t = L(n.dataset);
      return {
        max: Math.max(...t.map((l) => k(l))),
        min: Math.min(...t.map((l) => k(l)))
      };
    }), b = computed(() => {
      const t = $.value.min >= 0 ? 0 : $.value.min;
      return Math.abs(t);
    }), q = computed(() => $.value.max + b.value);
    function F(t) {
      return t / q.value;
    }
    const P = computed(() => n.dataset.length), a = computed(() => p2.value.map((t, l) => {
      const d = isNaN(t) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t) ? 0 : t || 0;
      return {
        value: k(t),
        absoluteValue: k(d),
        plotValue: k(d + b.value),
        toMax: F(d + b.value),
        x: h.value.left + k(l * (h.value.width / (P.value - 1))) - e.value.style.padding.right,
        y: h.value.bottom - k(h.value.height * F(d + b.value))
      };
    })), x = computed(() => {
      const t = L(n.dataset);
      return e.value.style.trendLabel.trendType === "global" ? Zt(t) : e.value.style.trendLabel.trendType === "n-1" && t.length > 1 ? (t.at(-1) / t.at(-2) - 1) * 100 : e.value.style.trendLabel.trendType === "lastToFirst" ? (t.at(-1) / t[0] - 1) * 100 : 0;
    }), w = computed(() => m.value || x.value === 0 ? "neutral" : x.value > 0 ? "positive" : "negative"), r = computed(() => e.value.style.arrow.colors[w.value]), R = computed(() => {
      const t = { x: a.value[0].x, y: o.value.height - 6 }, l = { x: a.value[a.value.length - 1].x, y: o.value.height - 6 }, d = [];
      return a.value.forEach((f) => {
        d.push(`${f.x},${f.y} `);
      }), [t.x, t.y, ...d, l.x, l.y].toString();
    }), X = computed(() => {
      let t = [];
      return a.value.forEach((l) => {
        t.push(`${l.x},${l.y} `);
      }), `M ${t.toString()}`;
    });
    return (t, l) => (openBlock(), createElementBlock("div", {
      class: "vue-ui-spark-trend",
      id: _.value,
      style: normalizeStyle(`width:100%;font-family:${e.value.style.fontFamily};background:${e.value.style.backgroundColor}`)
    }, [
      W.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Qt),
        viewBox: `0 0 ${o.value.width} ${o.value.height}`,
        style: "width:100%;background:transparent;overflow:visible"
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            id: `pill_gradient_${_.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(e.value.style.line.useColorTrend ? r.value : e.value.style.line.stroke, e.value.style.area.opacity)
            }, null, 8, ve),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.backgroundColor
            }, null, 8, ce)
          ], 8, de)
        ]),
        e.value.style.area.show && a.value[0] ? (openBlock(), createElementBlock("g", ye, [
          e.value.style.line.smooth ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: `M ${a.value[0].x},${h.value.bottom} ${unref(vt)(a.value)} L ${a.value.at(-1).x},${h.value.bottom} Z`,
            fill: e.value.style.area.useGradient ? `url(#pill_gradient_${_.value})` : unref(cr)(e.value.style.line.useColorTrend ? r.value : e.value.style.line.stroke, e.value.style.area.opacity),
            stroke: "none"
          }, null, 8, he)) : (openBlock(), createElementBlock("path", {
            key: 1,
            d: `M${R.value}Z`,
            fill: e.value.style.area.useGradient ? `url(#pill_gradient_${_.value})` : unref(cr)(e.value.style.line.useColorTrend ? r.value : e.value.style.line.stroke, e.value.style.area.opacity),
            stroke: "none"
          }, null, 8, fe))
        ])) : createCommentVNode("", true),
        e.value.style.line.smooth && a.value.length ? (openBlock(), createElementBlock("path", {
          key: 1,
          d: `M ${unref(vt)(a.value)}`,
          stroke: e.value.style.line.useColorTrend ? r.value : e.value.style.line.stroke,
          fill: "none",
          "stroke-width": e.value.style.line.strokeWidth,
          "stroke-linecap": e.value.style.line.strokeLinecap,
          "stroke-linejoin": e.value.style.line.strokeLinejoin
        }, null, 8, pe)) : createCommentVNode("", true),
        !e.value.style.line.smooth && a.value.length ? (openBlock(), createElementBlock("path", {
          key: 2,
          d: X.value,
          stroke: e.value.style.line.useColorTrend ? r.value : e.value.style.line.stroke,
          fill: "none",
          "stroke-width": e.value.style.line.strokeWidth,
          "stroke-linecap": e.value.style.line.strokeLinecap,
          "stroke-linejoin": e.value.style.line.strokeLinejoin
        }, null, 8, me)) : createCommentVNode("", true),
        m.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("foreignObject", {
          key: 3,
          height: o.value.height / 2,
          width: o.value.height / 2,
          x: o.value.height / 5,
          y: 8
        }, [
          createBaseVNode("div", ke, [
            w.value === "positive" ? (openBlock(), createBlock(u, {
              key: 0,
              stroke: r.value,
              name: "arrowTop",
              size: o.value.height / 2
            }, null, 8, ["stroke", "size"])) : createCommentVNode("", true),
            w.value === "negative" ? (openBlock(), createBlock(u, {
              key: 1,
              stroke: r.value,
              name: "arrowBottom",
              size: o.value.height / 2
            }, null, 8, ["stroke", "size"])) : createCommentVNode("", true),
            w.value === "neutral" ? (openBlock(), createBlock(u, {
              key: 2,
              stroke: r.value,
              name: "arrowRight",
              size: o.value.height / 2
            }, null, 8, ["stroke", "size"])) : createCommentVNode("", true)
          ])
        ], 8, ge)),
        m.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("text", {
          key: 4,
          x: o.value.height / 2 - o.value.height / 20,
          y: h.value.bottom,
          "text-anchor": "middle",
          fill: e.value.style.trendLabel.useColorTrend ? r.value : e.value.style.trendLabel.color,
          "font-size": e.value.style.trendLabel.fontSize,
          "font-weight": e.value.style.trendLabel.bold ? "bold" : "normal"
        }, toDisplayString(unref(Gt)({
          p: x.value > 0 ? "+" : "",
          v: x.value,
          s: "%",
          r: e.value.style.trendLabel.rounding
        })), 9, _e)),
        a.value.length && a.value.at(-1).x !== void 0 ? (openBlock(), createElementBlock("circle", {
          key: 5,
          stroke: e.value.style.backgroundColor,
          "stroke-width": 2,
          cx: a.value.at(-1).x,
          cy: a.value.at(-1).y,
          r: 4,
          fill: r.value
        }, null, 8, be)) : createCommentVNode("", true),
        a.value.length && a.value.at(-1).x !== void 0 && e.value.style.dataLabel.show ? (openBlock(), createElementBlock("text", {
          key: 6,
          "text-anchor": "middle",
          x: a.value.at(-1).x,
          y: a.value.at(-1).y - e.value.style.dataLabel.fontSize / 1.5,
          "font-size": e.value.style.dataLabel.fontSize,
          fill: e.value.style.dataLabel.useColorTrend ? r.value : e.value.style.dataLabel.color,
          "font-weight": e.value.style.dataLabel.bold ? "bold" : "normal"
        }, toDisplayString(unref(nr)(
          e.value.style.dataLabel.formatter,
          a.value.at(-1).value,
          unref(Gt)({
            p: e.value.style.dataLabel.prefix,
            v: a.value.at(-1).value,
            s: e.value.style.dataLabel.suffix,
            r: e.value.style.dataLabel.rounding
          }),
          { datapoint: a.value.at(-1) }
        )), 9, xe)) : createCommentVNode("", true)
      ], 8, ie)) : (openBlock(), createBlock(fs, {
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
      }, null, 8, ["config"]))
    ], 12, re));
  }
};
var Se = s(we, [["__scopeId", "data-v-541bb7c5"]]);
export {
  Se as default
};
//# sourceMappingURL=vue-ui-spark-trend-CHKQGMLs-TKKZ7SY2.js.map
