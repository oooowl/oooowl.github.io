import {
  M,
  O
} from "./chunk-NF5J7GNE.js";
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
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Et,
  Ge,
  Gt,
  Kt,
  Lt,
  Qt,
  Xt,
  _t,
  cr,
  nr,
  oe,
  pt,
  qt,
  vt
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  guardReactiveProps,
  normalizeProps,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-sparkline-DGJDBArr.js
var xe = ["id"];
var we = ["xmlns", "viewBox"];
var Le = ["id"];
var $e = ["stop-color"];
var Ne = ["stop-color"];
var Ce = ["id"];
var Ie = ["stop-color"];
var Me = ["stop-color"];
var Ve = ["id"];
var ze = ["stop-color"];
var Se = ["stop-color"];
var We = { key: 0 };
var Pe = ["d", "fill"];
var Ae = ["d", "fill"];
var De = ["d", "stroke", "stroke-width"];
var Fe = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ge2 = ["x", "y", "width", "height", "fill", "rx"];
var Te = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var Be = ["x1", "x2", "y1", "y2", "stroke", "stroke-dasharray", "stroke-width"];
var Ee = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var Oe = ["x", "y", "font-size", "font-weight", "fill"];
var Re = ["x", "y", "height", "width", "onMouseenter", "onClick"];
var je = {
  __name: "vue-ui-sparkline",
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
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    selectedIndex: {
      type: Number,
      default: void 0
    }
  },
  emits: ["hoverIndex", "selectDatapoint"],
  setup(b, { emit: M2 }) {
    const r = b, { vue_ui_sparkline: Y } = oe(), L = computed(() => !!r.dataset && r.dataset.length), p2 = ref(Lt()), V = ref(null), A = ref(null), e = computed({
      get: () => D(),
      set: (t) => t
    });
    function D() {
      const t = c({
        userConfig: r.config,
        defaultConfig: Y
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_sparkline[t.theme] || r.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => r.config, (t) => {
      e.value = D(), G(), l.value.chartWidth = e.value.style.chartWidth;
    }, { deep: true }), watch(() => r.dataset, (t) => {
      _.value = r.dataset.map((u) => ({
        ...u,
        value: [void 0].includes(u.value) ? null : u.value
      }));
    }, { deep: true });
    const _ = ref(H());
    function H() {
      return r.dataset.map((t) => e.value.style.animation.show ? {
        ...t,
        value: null
      } : {
        ...t,
        value: [void 0].includes(t.value) ? null : t.value
      });
    }
    const F = ref(null);
    onMounted(() => {
      if (G(), e.value.style.animation.show && r.dataset.length > 1) {
        let a = function() {
          u < r.dataset.length ? (_.value.push(r.dataset[u]), setTimeout(() => {
            requestAnimationFrame(a);
          }, t)) : _.value = r.dataset, u += 1;
        };
        _.value = [];
        const t = e.value.style.animation.animationFrames / r.dataset.length;
        let u = 0;
        a();
      }
    });
    function G() {
      if (Xt(r.dataset) ? Kt({
        componentName: "VueUiSparkline",
        type: "dataset"
      }) : r.dataset.forEach((t, u) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["period", "value"]
        }).forEach((a) => {
          Kt({
            componentName: "VueUiSparkline",
            type: "datasetSerieAttribute",
            property: a,
            index: u
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: u, height: a } = M({
            chart: V.value,
            title: e.value.style.title.show && r.showInfo ? A.value : null
          });
          l.value.width = u, l.value.height = a, l.value.chartWidth = e.value.style.chartWidth / 500 * u, l.value.padding = 0.06 * u;
        });
        F.value = new ResizeObserver(t), F.value.observe(V.value.parentNode);
      }
    }
    const l = ref({
      height: 80,
      width: 500,
      chartWidth: e.value.style.chartWidth,
      padding: 30
    }), J = ref(6), s2 = computed(() => ({
      top: 12,
      left: 0,
      right: l.value.width,
      bottom: l.value.height - 3,
      start: r.showInfo && e.value.style.dataLabel.show && e.value.style.dataLabel.position === "left" ? l.value.width - l.value.chartWidth : l.value.padding,
      width: r.showInfo && e.value.style.dataLabel.show ? l.value.chartWidth : l.value.width - l.value.padding,
      height: l.value.height - 12
    })), z = computed(() => Math.min(..._.value.map((t) => isNaN(t.value) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t.value) ? 0 : t.value || 0))), K = computed(() => Math.max(..._.value.map((t) => isNaN(t.value) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t.value) ? 0 : t.value || 0))), x = computed(() => {
      const t = z.value >= 0 ? 0 : z.value;
      return Math.abs(t);
    }), Q = computed(() => K.value + x.value + J.value), $ = computed(() => s2.value.bottom - s2.value.height * S(x.value));
    function S(t) {
      return t / Q.value;
    }
    const g = computed(() => r.dataset.length - 1), o = computed(() => _.value.map((t, u) => {
      const a = isNaN(t.value) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t.value) ? 0 : t.value || 0;
      return {
        absoluteValue: a,
        period: t.period,
        plotValue: a + x.value,
        toMax: S(a + x.value),
        x: s2.value.start + u * (s2.value.width / (g.value + 1) > l.padding ? l.padding : s2.value.width / (g.value + 1)),
        y: s2.value.bottom - s2.value.height * S(a + x.value),
        id: `plot_${p2.value}_${u}`,
        color: w.value ? e.value.style.bar.color : e.value.style.area.useGradient ? pt(e.value.style.line.color, 0.05 * (1 - u / g.value)) : e.value.style.line.color,
        width: s2.value.width / (g.value + 1) > l.padding ? l.padding : s2.value.width / (g.value + 1)
      };
    })), ee = computed(() => {
      const t = { x: o.value[0].x, y: l.value.height - 6 }, u = { x: o.value[o.value.length - 1].x, y: l.value.height - 6 }, a = [];
      return o.value.forEach((d) => {
        a.push(`${d.x},${d.y} `);
      }), [t.x, t.y, ...a, u.x, u.y].toString();
    }), h = ref(void 0);
    function te(t, u) {
      h.value = t, M2("hoverIndex", { index: u });
    }
    function ae() {
      h.value = void 0, M2("hoverIndex", { index: void 0 });
    }
    const m = computed(() => {
      if (L.value) {
        const t = o.value.map((a) => a.absoluteValue), u = t.reduce((a, d) => a + d, 0);
        return {
          latest: o.value[o.value.length - 1].absoluteValue,
          sum: u,
          average: u / o.value.length,
          median: _t(t),
          trend: Et(o.value.map(({ x: a, y: d, absoluteValue: B }) => ({
            x: a,
            y: d,
            value: B
          }))).trend
        };
      } else
        return {
          latest: null,
          sum: null,
          average: null,
          median: null,
          trend: null
        };
    }), T = computed(() => L.value ? e.value.style.dataLabel.valueType === "latest" ? m.value.latest : e.value.style.dataLabel.valueType === "sum" ? m.value.sum : e.value.style.dataLabel.valueType === "average" ? m.value.average : 0 : 0), w = computed(() => e.value.type && e.value.type === "bar");
    function le(t, u) {
      M2("selectDatapoint", { datapoint: t, index: u });
    }
    return (t, u) => (openBlock(), createElementBlock("div", {
      ref_key: "sparklineChart",
      ref: V,
      class: "vue-ui-sparkline",
      id: p2.value,
      style: normalizeStyle(`width:100%;font-family:${e.value.style.fontFamily}`)
    }, [
      renderSlot(t.$slots, "before", normalizeProps(guardReactiveProps({
        selected: h.value,
        latest: m.value.latest,
        sum: m.value.sum,
        average: m.value.average,
        median: m.value.median,
        trend: m.value.trend
      })), void 0, true),
      e.value.style.title.show && b.showInfo ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: A,
        class: "vue-ui-sparkline-title",
        style: normalizeStyle(`display:flex;align-items:center;width:100%;color:${e.value.style.title.color};background:${e.value.style.backgroundColor};justify-content:${e.value.style.title.textAlign === "left" ? "flex-start" : e.value.style.title.textAlign === "right" ? "flex-end" : "center"};height:${e.value.style.title.fontSize * 2}px;font-size:${e.value.style.title.fontSize}px;font-weight:${e.value.style.title.bold ? "bold" : "normal"};`)
      }, [
        createBaseVNode("span", {
          style: normalizeStyle(`padding:${e.value.style.title.textAlign === "left" ? "0 0 0 12px" : e.value.style.title.textAlign === "right" ? "0 12px 0 0" : "0"}`)
        }, toDisplayString(h.value ? h.value.period : e.value.style.title.text), 5)
      ], 4)) : createCommentVNode("", true),
      L.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Qt),
        viewBox: `0 0 ${l.value.width} ${l.value.height}`,
        style: normalizeStyle(`background:${e.value.style.backgroundColor};overflow:visible`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%",
            id: `sparkline_gradient_${p2.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(pt)(e.value.style.area.color, 0.05), e.value.style.area.opacity)
            }, null, 8, $e),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(e.value.style.area.color, e.value.style.area.opacity)
            }, null, 8, Ne)
          ], 8, Le),
          createBaseVNode("linearGradient", {
            x2: "0%",
            y2: "100%",
            id: `sparkline_bar_gradient_pos_${p2.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": e.value.style.bar.color
            }, null, 8, Ie),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(pt)(e.value.style.bar.color, 0.05)
            }, null, 8, Me)
          ], 8, Ce),
          createBaseVNode("linearGradient", {
            x2: "0%",
            y2: "100%",
            id: `sparkline_bar_gradient_neg_${p2.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(pt)(e.value.style.bar.color, 0.05)
            }, null, 8, ze),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.bar.color
            }, null, 8, Se)
          ], 8, Ve)
        ]),
        e.value.style.area.show && !w.value && o.value[0] ? (openBlock(), createElementBlock("g", We, [
          e.value.style.line.smooth ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: `M ${o.value[0].x},${s2.value.bottom} ${unref(vt)(o.value)} L ${o.value.at(-1).x},${s2.value.bottom} Z`,
            fill: e.value.style.area.useGradient ? `url(#sparkline_gradient_${p2.value})` : unref(cr)(e.value.style.area.color, e.value.style.area.opacity)
          }, null, 8, Pe)) : (openBlock(), createElementBlock("path", {
            key: 1,
            d: `M${ee.value}Z`,
            fill: e.value.style.area.useGradient ? `url(#sparkline_gradient_${p2.value})` : unref(cr)(e.value.style.area.color, e.value.style.area.opacity)
          }, null, 8, Ae))
        ])) : createCommentVNode("", true),
        e.value.style.line.smooth && !w.value ? (openBlock(), createElementBlock("path", {
          key: 1,
          d: `M ${unref(vt)(o.value)}`,
          stroke: e.value.style.line.color,
          fill: "none",
          "stroke-width": e.value.style.line.strokeWidth,
          "stroke-linecap": "round"
        }, null, 8, De)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (a, d) => (openBlock(), createElementBlock("g", null, [
          d < o.value.length - 1 && !e.value.style.line.smooth && !w.value ? (openBlock(), createElementBlock("line", {
            key: 0,
            x1: a.x,
            x2: o.value[d + 1].x,
            y1: a.y,
            y2: o.value[d + 1].y,
            stroke: a.color,
            "stroke-width": e.value.style.line.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "shape-rendering": "geometricPrecision"
          }, null, 8, Fe)) : createCommentVNode("", true),
          w.value ? (openBlock(), createElementBlock("rect", {
            key: 1,
            x: a.x - a.width / 2,
            y: a.absoluteValue > 0 ? a.y : $.value,
            width: a.width,
            height: Math.abs(a.y - $.value),
            fill: a.absoluteValue > 0 ? `url(#sparkline_bar_gradient_pos_${p2.value})` : `url(#sparkline_bar_gradient_neg_${p2.value})`,
            rx: e.value.style.bar.borderRadius
          }, null, 8, Ge2)) : createCommentVNode("", true),
          e.value.style.verticalIndicator.show && (h.value && a.id === h.value.id || b.selectedIndex === d) ? (openBlock(), createElementBlock("line", {
            key: 2,
            x1: a.x,
            x2: a.x,
            y1: s2.value.top - 6,
            y2: s2.value.bottom,
            stroke: e.value.style.verticalIndicator.color || a.color,
            "stroke-width": e.value.style.verticalIndicator.strokeWidth,
            "stroke-linecap": "round",
            "stroke-dasharray": e.value.style.verticalIndicator.strokeDasharray || 0
          }, null, 8, Te)) : createCommentVNode("", true)
        ]))), 256)),
        z.value < 0 ? (openBlock(), createElementBlock("line", {
          key: 2,
          x1: s2.value.start,
          x2: s2.value.start + s2.value.width - 16,
          y1: $.value,
          y2: $.value,
          stroke: e.value.style.zeroLine.color,
          "stroke-dasharray": e.value.style.zeroLine.strokeWidth * 2,
          "stroke-width": e.value.style.zeroLine.strokeWidth,
          "stroke-linecap": "round"
        }, null, 8, Be)) : createCommentVNode("", true),
        e.value.style.plot.show ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(o.value, (a, d) => (openBlock(), createElementBlock("g", null, [
          h.value && a.id === h.value.id || b.selectedIndex === d ? (openBlock(), createElementBlock("circle", {
            key: 0,
            cx: a.x,
            cy: a.y,
            r: e.value.style.plot.radius,
            fill: a.color,
            stroke: e.value.style.plot.stroke,
            "stroke-width": e.value.style.plot.strokeWidth
          }, null, 8, Ee)) : createCommentVNode("", true)
        ]))), 256)) : createCommentVNode("", true),
        b.showInfo && e.value.style.dataLabel.show ? (openBlock(), createElementBlock("text", {
          key: 4,
          x: e.value.style.dataLabel.position === "left" ? 12 + e.value.style.dataLabel.offsetX : s2.value.width + 12 + e.value.style.dataLabel.offsetX,
          y: l.value.height / 2 + e.value.style.dataLabel.fontSize / 2.5 + e.value.style.dataLabel.offsetY,
          "font-size": e.value.style.dataLabel.fontSize,
          "font-weight": e.value.style.dataLabel.bold ? "bold" : "normal",
          fill: e.value.style.dataLabel.color
        }, toDisplayString(h.value ? unref(nr)(
          e.value.style.dataLabel.formatter,
          h.value.absoluteValue,
          unref(Gt)({ p: e.value.style.dataLabel.prefix, v: h.value.absoluteValue, s: e.value.style.dataLabel.suffix, r: e.value.style.dataLabel.roundingValue }),
          { datapoint: h.value }
        ) : unref(nr)(
          e.value.style.dataLabel.formatter,
          T.value,
          unref(Gt)({ p: e.value.style.dataLabel.prefix, v: T.value, s: e.value.style.dataLabel.suffix, r: e.value.style.dataLabel.roundingValue })
        )), 9, Oe)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (a, d) => (openBlock(), createElementBlock("rect", {
          x: a.x - (s2.value.width / (g.value + 1) > l.value.padding ? l.value.padding : s2.value.width / (g.value + 1)) / 2,
          y: s2.value.top - 6,
          height: s2.value.height + 6,
          width: s2.value.width / (g.value + 1) > l.value.padding ? l.value.padding : s2.value.width / (g.value + 1),
          fill: "transparent",
          onMouseenter: (B) => te(a, d),
          onMouseleave: ae,
          onClick: () => le(a, d)
        }, null, 40, Re))), 256)),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 12, we)) : createCommentVNode("", true),
      L.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 2,
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
    ], 12, xe));
  }
};
var Ke = s(je, [["__scopeId", "data-v-9481e22a"]]);

export {
  Ke
};
//# sourceMappingURL=chunk-LKTBRWPS.js.map
