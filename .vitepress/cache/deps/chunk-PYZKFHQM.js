import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
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
  s
} from "./chunk-3LFGMZCN.js";
import {
  Cr,
  Dt,
  He,
  Ht,
  Jt,
  Lt,
  Zt,
  dr,
  ir,
  jt,
  qt,
  te,
  vt,
  wt,
  yt
} from "./chunk-4SKEOFB2.js";
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-sparkline-DYHUFUOp.js
var $e = ["id"];
var Ne = ["xmlns", "viewBox"];
var Ce = ["id"];
var Ie = ["stop-color"];
var Me = ["stop-color"];
var Ve = ["id"];
var ze = ["stop-color"];
var Se = ["stop-color"];
var We = ["id"];
var Ae = ["stop-color"];
var Pe = ["stop-color"];
var De = { key: 0 };
var Te = ["d", "fill"];
var Be = ["d", "fill"];
var Fe = ["d", "stroke", "stroke-width"];
var Ge = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Oe = ["x", "y", "width", "height", "fill", "rx"];
var Ee = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var je = ["x1", "x2", "y1", "y2", "stroke", "stroke-dasharray", "stroke-width"];
var Re = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var Ue = ["x", "y", "font-size", "font-weight", "fill"];
var Xe = ["x", "y", "height", "width", "onMouseenter", "onClick"];
var Ze = {
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
  setup(_, { emit: V }) {
    const i = _, { vue_ui_sparkline: K } = te(), L = computed(() => !!i.dataset && i.dataset.length), p2 = ref(Dt()), z = ref(null), B = ref(null), F = ref(null), e = computed({
      get: () => G(),
      set: (t) => t
    });
    function G() {
      const t = c({
        userConfig: i.config,
        defaultConfig: K
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_sparkline[t.theme] || i.config,
          defaultConfig: t
        })
      } : t;
    }
    const $ = computed(() => Cr({
      data: i.dataset,
      threshold: e.value.downsample.threshold
    }));
    watch(() => i.config, (t) => {
      e.value = G(), E(), l.value.chartWidth = e.value.style.chartWidth;
    }, { deep: true }), watch(() => i.dataset, (t) => {
      b.value = Cr({
        data: i.dataset.map((u) => ({
          ...u,
          value: [void 0].includes(u.value) ? null : u.value
        })),
        threshold: e.value.downsample.threshold
      });
    }, { deep: true });
    const b = ref(Q());
    function Q() {
      return Cr({
        data: i.dataset.map((t) => e.value.style.animation.show ? {
          ...t,
          value: null
        } : {
          ...t,
          value: [void 0].includes(t.value) ? null : t.value
        }),
        threshold: e.value.downsample.threshold
      });
    }
    const O2 = ref(null);
    onMounted(() => {
      if (E(), e.value.style.animation.show && i.dataset.length > 1) {
        let a = function() {
          u < $.value.length ? (b.value.push($.value[u]), setTimeout(() => {
            requestAnimationFrame(a);
          }, t)) : b.value = $.value, u += 1;
        };
        b.value = [];
        const t = e.value.style.animation.animationFrames / i.dataset.length;
        let u = 0;
        a();
      }
    });
    function E() {
      if (jt(i.dataset) ? qt({
        componentName: "VueUiSparkline",
        type: "dataset"
      }) : i.dataset.forEach((t, u) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["period", "value"]
        }).forEach((a) => {
          qt({
            componentName: "VueUiSparkline",
            type: "datasetSerieAttribute",
            property: a,
            index: u
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: u, height: a } = k({
            chart: z.value,
            title: e.value.style.title.show && i.showInfo ? B.value : null,
            source: F.value
          });
          l.value.width = u, l.value.height = a, l.value.chartWidth = e.value.style.chartWidth / 500 * u, l.value.padding = 0.06 * u;
        });
        O2.value = new ResizeObserver(t), O2.value.observe(z.value.parentNode);
      }
    }
    const l = ref({
      height: 80,
      width: 500,
      chartWidth: e.value.style.chartWidth,
      padding: 30
    }), ee = ref(6), s2 = computed(() => ({
      top: 12,
      left: 0,
      right: l.value.width,
      bottom: l.value.height - 3,
      start: i.showInfo && e.value.style.dataLabel.show && e.value.style.dataLabel.position === "left" ? l.value.width - l.value.chartWidth : l.value.padding,
      width: i.showInfo && e.value.style.dataLabel.show ? l.value.chartWidth : l.value.width - l.value.padding,
      height: l.value.height - 12
    })), S = computed(() => Math.min(...b.value.map((t) => isNaN(t.value) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t.value) ? 0 : t.value || 0))), te2 = computed(() => Math.max(...b.value.map((t) => isNaN(t.value) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t.value) ? 0 : t.value || 0))), x = computed(() => {
      const t = S.value >= 0 ? 0 : S.value;
      return Math.abs(t);
    }), ae = computed(() => te2.value + x.value + ee.value), N = computed(() => s2.value.bottom - s2.value.height * W(x.value));
    function W(t) {
      return t / ae.value;
    }
    const g = computed(() => $.value.length - 1), r = computed(() => b.value.map((t, u) => {
      const a = isNaN(t.value) || [void 0, null, "NaN", NaN, 1 / 0, -1 / 0].includes(t.value) ? 0 : t.value || 0;
      return {
        absoluteValue: a,
        period: t.period,
        plotValue: a + x.value,
        toMax: W(a + x.value),
        x: s2.value.start + u * (s2.value.width / (g.value + 1) > l.padding ? l.padding : s2.value.width / (g.value + 1)),
        y: s2.value.bottom - s2.value.height * W(a + x.value),
        id: `plot_${p2.value}_${u}`,
        color: w.value ? e.value.style.bar.color : e.value.style.area.useGradient ? yt(e.value.style.line.color, 0.05 * (1 - u / g.value)) : e.value.style.line.color,
        width: s2.value.width / (g.value + 1) > l.padding ? l.padding : s2.value.width / (g.value + 1)
      };
    })), le = computed(() => {
      const t = { x: r.value[0].x, y: l.value.height - 6 }, u = { x: r.value[r.value.length - 1].x, y: l.value.height - 6 }, a = [];
      return r.value.forEach((d) => {
        a.push(`${d.x},${d.y} `);
      }), [t.x, t.y, ...a, u.x, u.y].toString();
    }), h = ref(void 0);
    function ue(t, u) {
      h.value = t, V("hoverIndex", { index: u });
    }
    function se() {
      h.value = void 0, V("hoverIndex", { index: void 0 });
    }
    const k2 = computed(() => {
      if (L.value) {
        const t = r.value.map((a) => a.absoluteValue), u = t.reduce((a, d) => a + d, 0);
        return {
          latest: r.value[r.value.length - 1].absoluteValue,
          sum: u,
          average: u / r.value.length,
          median: vt(t),
          trend: wt(r.value.map(({ x: a, y: d, absoluteValue: R }) => ({
            x: a,
            y: d,
            value: R
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
    }), j = computed(() => L.value ? e.value.style.dataLabel.valueType === "latest" ? k2.value.latest : e.value.style.dataLabel.valueType === "sum" ? k2.value.sum : e.value.style.dataLabel.valueType === "average" ? k2.value.average : 0 : 0), w = computed(() => e.value.type && e.value.type === "bar");
    function oe(t, u) {
      V("selectDatapoint", { datapoint: t, index: u });
    }
    return (t, u) => (openBlock(), createElementBlock("div", {
      ref_key: "sparklineChart",
      ref: z,
      class: "vue-ui-sparkline",
      id: p2.value,
      style: normalizeStyle(`width:100%;font-family:${e.value.style.fontFamily}`)
    }, [
      renderSlot(t.$slots, "before", normalizeProps(guardReactiveProps({
        selected: h.value,
        latest: k2.value.latest,
        sum: k2.value.sum,
        average: k2.value.average,
        median: k2.value.median,
        trend: k2.value.trend
      })), void 0, true),
      e.value.style.title.show && _.showInfo ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: B,
        class: "vue-ui-sparkline-title",
        style: normalizeStyle(`display:flex;align-items:center;width:100%;color:${e.value.style.title.color};background:${e.value.style.backgroundColor};justify-content:${e.value.style.title.textAlign === "left" ? "flex-start" : e.value.style.title.textAlign === "right" ? "flex-end" : "center"};height:${e.value.style.title.fontSize * 2}px;font-size:${e.value.style.title.fontSize}px;font-weight:${e.value.style.title.bold ? "bold" : "normal"};`)
      }, [
        createBaseVNode("span", {
          style: normalizeStyle(`padding:${e.value.style.title.textAlign === "left" ? "0 0 0 12px" : e.value.style.title.textAlign === "right" ? "0 12px 0 0" : "0"}`)
        }, toDisplayString(h.value ? h.value.period : e.value.style.title.text), 5)
      ], 4)) : createCommentVNode("", true),
      L.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Jt),
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
              "stop-color": unref(dr)(unref(yt)(e.value.style.area.color, 0.05), e.value.style.area.opacity)
            }, null, 8, Ie),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(e.value.style.area.color, e.value.style.area.opacity)
            }, null, 8, Me)
          ], 8, Ce),
          createBaseVNode("linearGradient", {
            x2: "0%",
            y2: "100%",
            id: `sparkline_bar_gradient_pos_${p2.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": e.value.style.bar.color
            }, null, 8, ze),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(yt)(e.value.style.bar.color, 0.05)
            }, null, 8, Se)
          ], 8, Ve),
          createBaseVNode("linearGradient", {
            x2: "0%",
            y2: "100%",
            id: `sparkline_bar_gradient_neg_${p2.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(yt)(e.value.style.bar.color, 0.05)
            }, null, 8, Ae),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.bar.color
            }, null, 8, Pe)
          ], 8, We)
        ]),
        e.value.style.area.show && !w.value && r.value[0] ? (openBlock(), createElementBlock("g", De, [
          e.value.style.line.smooth ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: `M ${r.value[0].x},${s2.value.bottom} ${unref(Lt)(r.value)} L ${r.value.at(-1).x},${s2.value.bottom} Z`,
            fill: e.value.style.area.useGradient ? `url(#sparkline_gradient_${p2.value})` : unref(dr)(e.value.style.area.color, e.value.style.area.opacity)
          }, null, 8, Te)) : (openBlock(), createElementBlock("path", {
            key: 1,
            d: `M${le.value}Z`,
            fill: e.value.style.area.useGradient ? `url(#sparkline_gradient_${p2.value})` : unref(dr)(e.value.style.area.color, e.value.style.area.opacity)
          }, null, 8, Be))
        ])) : createCommentVNode("", true),
        e.value.style.line.smooth && !w.value ? (openBlock(), createElementBlock("path", {
          key: 1,
          d: `M ${unref(Lt)(r.value)}`,
          stroke: e.value.style.line.color,
          fill: "none",
          "stroke-width": e.value.style.line.strokeWidth,
          "stroke-linecap": "round"
        }, null, 8, Fe)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (a, d) => (openBlock(), createElementBlock("g", null, [
          d < r.value.length - 1 && !e.value.style.line.smooth && !w.value ? (openBlock(), createElementBlock("line", {
            key: 0,
            x1: a.x,
            x2: r.value[d + 1].x,
            y1: a.y,
            y2: r.value[d + 1].y,
            stroke: a.color,
            "stroke-width": e.value.style.line.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "shape-rendering": "geometricPrecision"
          }, null, 8, Ge)) : createCommentVNode("", true),
          w.value ? (openBlock(), createElementBlock("rect", {
            key: 1,
            x: a.x - a.width / 2,
            y: a.absoluteValue > 0 ? a.y : N.value,
            width: a.width,
            height: Math.abs(a.y - N.value),
            fill: a.absoluteValue > 0 ? `url(#sparkline_bar_gradient_pos_${p2.value})` : `url(#sparkline_bar_gradient_neg_${p2.value})`,
            rx: e.value.style.bar.borderRadius
          }, null, 8, Oe)) : createCommentVNode("", true),
          e.value.style.verticalIndicator.show && (h.value && a.id === h.value.id || _.selectedIndex === d) ? (openBlock(), createElementBlock("line", {
            key: 2,
            x1: a.x,
            x2: a.x,
            y1: s2.value.top - 6,
            y2: s2.value.bottom,
            stroke: e.value.style.verticalIndicator.color || a.color,
            "stroke-width": e.value.style.verticalIndicator.strokeWidth,
            "stroke-linecap": "round",
            "stroke-dasharray": e.value.style.verticalIndicator.strokeDasharray || 0
          }, null, 8, Ee)) : createCommentVNode("", true)
        ]))), 256)),
        S.value < 0 ? (openBlock(), createElementBlock("line", {
          key: 2,
          x1: s2.value.start,
          x2: s2.value.start + s2.value.width - 16,
          y1: N.value,
          y2: N.value,
          stroke: e.value.style.zeroLine.color,
          "stroke-dasharray": e.value.style.zeroLine.strokeWidth * 2,
          "stroke-width": e.value.style.zeroLine.strokeWidth,
          "stroke-linecap": "round"
        }, null, 8, je)) : createCommentVNode("", true),
        e.value.style.plot.show ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(r.value, (a, d) => (openBlock(), createElementBlock("g", null, [
          h.value && a.id === h.value.id || _.selectedIndex === d ? (openBlock(), createElementBlock("circle", {
            key: 0,
            cx: a.x,
            cy: a.y,
            r: e.value.style.plot.radius,
            fill: a.color,
            stroke: e.value.style.plot.stroke,
            "stroke-width": e.value.style.plot.strokeWidth
          }, null, 8, Re)) : createCommentVNode("", true)
        ]))), 256)) : createCommentVNode("", true),
        _.showInfo && e.value.style.dataLabel.show ? (openBlock(), createElementBlock("text", {
          key: 4,
          x: e.value.style.dataLabel.position === "left" ? 12 + e.value.style.dataLabel.offsetX : s2.value.width + 12 + e.value.style.dataLabel.offsetX,
          y: l.value.height / 2 + e.value.style.dataLabel.fontSize / 2.5 + e.value.style.dataLabel.offsetY,
          "font-size": e.value.style.dataLabel.fontSize,
          "font-weight": e.value.style.dataLabel.bold ? "bold" : "normal",
          fill: e.value.style.dataLabel.color
        }, toDisplayString(h.value ? unref(ir)(
          e.value.style.dataLabel.formatter,
          h.value.absoluteValue,
          unref(Ht)({ p: e.value.style.dataLabel.prefix, v: h.value.absoluteValue, s: e.value.style.dataLabel.suffix, r: e.value.style.dataLabel.roundingValue }),
          { datapoint: h.value }
        ) : unref(ir)(
          e.value.style.dataLabel.formatter,
          j.value,
          unref(Ht)({ p: e.value.style.dataLabel.prefix, v: j.value, s: e.value.style.dataLabel.suffix, r: e.value.style.dataLabel.roundingValue })
        )), 9, Ue)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (a, d) => (openBlock(), createElementBlock("rect", {
          x: a.x - (s2.value.width / (g.value + 1) > l.value.padding ? l.value.padding : s2.value.width / (g.value + 1)) / 2,
          y: s2.value.top - 6,
          height: s2.value.height + 6,
          width: s2.value.width / (g.value + 1) > l.value.padding ? l.value.padding : s2.value.width / (g.value + 1),
          fill: "transparent",
          onMouseenter: (R) => ue(a, d),
          onMouseleave: se,
          onClick: () => oe(a, d)
        }, null, 40, Xe))), 256)),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 12, Ne)) : createCommentVNode("", true),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "source",
        ref: F,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      L.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 3,
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
    ], 12, $e));
  }
};
var tt = s(Ze, [["__scopeId", "data-v-9467697c"]]);

export {
  tt
};
//# sourceMappingURL=chunk-PYZKFHQM.js.map
