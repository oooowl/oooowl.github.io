import {
  $
} from "./chunk-H2UGMUIX.js";
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
  Dt,
  He,
  Ht,
  Jt,
  Zt,
  dr,
  ir,
  jt,
  qt,
  te,
  yt
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-sparkhistogram-BKcr2mFc.js
var ce = { key: 0 };
var ye = { key: 1 };
var he = ["xmlns", "viewBox"];
var fe = ["id"];
var pe = ["stop-color"];
var ge = ["stop-color"];
var me = ["id"];
var be = ["stop-color"];
var _e = ["stop-color"];
var xe = ["id"];
var ke = ["stop-color"];
var we = ["stop-color"];
var $e = { key: 0 };
var Ce = ["x", "y", "height", "width", "fill", "stroke", "stroke-width", "rx"];
var Le = { key: 1 };
var ze = ["x", "y", "font-size", "font-weight", "fill"];
var Se = ["x", "y", "font-size", "fill"];
var Me = ["x", "y", "font-size", "fill"];
var Ae = ["height", "width", "x", "onMouseover", "stroke", "stroke-width", "rx", "stroke-dasharray", "onClick"];
var Ne = {
  key: 2,
  ref: "source",
  dir: "auto"
};
var De = {
  __name: "vue-ui-sparkhistogram",
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
  emits: ["selectDatapoint"],
  setup(W, { emit: B }) {
    const v = W;
    useCssVars((l) => ({
      "3d57fabd": G.value
    }));
    const { vue_ui_sparkhistogram: O } = te(), S = computed(() => !!v.dataset && v.dataset.length);
    onMounted(() => {
      M();
    });
    function M() {
      jt(v.dataset) ? qt({
        componentName: "VueUiSparkHistogram",
        type: "dataset"
      }) : v.dataset.forEach((l, r) => {
        Zt({
          datasetObject: l,
          requiredAttributes: ["value"]
        }).forEach((t) => {
          qt({
            componentName: "VueUiSparkHistogram",
            type: "datasetSerieAttribute",
            property: t,
            index: r
          });
        });
      });
    }
    const b = ref(Dt()), e = computed({
      get: () => A(),
      set: (l) => l
    });
    function A() {
      const l = c({
        userConfig: v.config,
        defaultConfig: O
      });
      return l.theme ? {
        ...c({
          userConfig: He.vue_ui_sparkhistogram[l.theme] || v.config,
          defaultConfig: l
        })
      } : l;
    }
    watch(() => v.config, (l) => {
      e.value = A(), M();
    }, { deep: true });
    const d = computed(() => {
      const l = e.value.style.layout.height, r = e.value.style.layout.width, t = e.value.style.layout.padding.top, o = l - e.value.style.layout.padding.bottom, c2 = e.value.style.layout.padding.left, x = r - e.value.style.layout.padding.right, k = t + (l - t - e.value.style.layout.padding.bottom) / 2, C = l - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom, w = r - e.value.style.layout.padding.left - e.value.style.layout.padding.right;
      return {
        bottom: o,
        centerY: k,
        drawingHeight: C,
        drawingWidth: w,
        height: l,
        left: c2,
        right: x,
        top: t,
        width: r
      };
    }), U = computed(() => Math.max(...v.dataset.map((l) => Math.abs(l.value || 0))));
    function X(l) {
      return Math.abs(l) / U.value;
    }
    const i = computed(() => v.dataset.map((l, r) => {
      const t = X(l.value || 0), o = d.value.drawingHeight * t, c2 = d.value.drawingWidth / v.dataset.length, x = c2 * (e.value.style.bars.gap / 100), k = c2 - x, C = d.value.centerY - o / 2, w = d.value.left + (x / 2 + r * c2), Y = d.value.left + r * c2, L = typeof l.intensity > "u" ? 100 : Math.round(l.intensity * 100), q = l.color ? l.color : l.value >= 0 ? dr(e.value.style.bars.colors.positive, L) : dr(e.value.style.bars.colors.negative, L), R = l.color ? l.color : l.value >= 0 ? e.value.style.bars.colors.positive : e.value.style.bars.colors.negative, T = l.color ? `url(#gradient_datapoint_${r}_${b.value})` : l.value >= 0 ? `url(#gradient_positive_${r}_${b.value})` : `url(#gradient_negative_${r}_${b.value})`, P = w + k / 2;
      return {
        ...l,
        color: q,
        gradient: T,
        height: o,
        intensity: L,
        proportion: t,
        stroke: R,
        textAnchor: P,
        trapX: Y,
        unitWidth: c2,
        width: k,
        x: w,
        y: C
      };
    })), u = ref(null);
    function j(l, r) {
      B("selectDatapoint", { datapoint: l, index: r });
    }
    const G = computed(() => `${e.value.style.animation.speedMs}ms`);
    return (l, r) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`width:100%;background:${e.value.style.backgroundColor};font-family:${e.value.style.fontFamily}`),
      onMouseleave: r[1] || (r[1] = (t) => u.value = null)
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(`width:calc(100% - 12px);background:transparent;margin:0 auto;margin:${e.value.style.title.margin};padding: 0 6px;text-align:${e.value.style.title.textAlign}`)
      }, [
        createBaseVNode("div", {
          style: normalizeStyle(`font-size:${e.value.style.title.fontSize}px;color:${e.value.style.title.color};font-weight:${e.value.style.title.bold ? "bold" : "normal"}`)
        }, [
          createTextVNode(toDisplayString(e.value.style.title.text) + " ", 1),
          u.value !== null ? (openBlock(), createElementBlock("span", ce, "- " + toDisplayString(i.value[u.value].timeLabel || "") + " " + toDisplayString(unref(ir)(
            e.value.style.labels.value.formatter,
            i.value[u.value].value,
            unref(Ht)({
              p: e.value.style.labels.value.prefix,
              v: i.value[u.value].value,
              s: e.value.style.labels.value.suffix,
              r: e.value.style.labels.value.rounding
            }),
            { datapoint: i.value[u.value], seriesIndex: u.value }
          )), 1)) : createCommentVNode("", true),
          ![void 0, null].includes(u.value) && ![null, void 0].includes(i.value[u.value].valueLabel) ? (openBlock(), createElementBlock("span", ye, "(" + toDisplayString(i.value[u.value].valueLabel || 0) + ")", 1)) : createCommentVNode("", true)
        ], 4),
        e.value.style.title.subtitle.text ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`font-size:${e.value.style.title.subtitle.fontSize}px;color:${e.value.style.title.subtitle.color};font-weight:${e.value.style.title.subtitle.bold ? "bold" : "normal"}`)
        }, toDisplayString(e.value.style.title.subtitle.text), 5)) : createCommentVNode("", true)
      ], 4)) : createCommentVNode("", true),
      S.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Jt),
        viewBox: `0 0 ${d.value.width} ${d.value.height}`,
        style: { overflow: "visible" }
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("radialGradient", {
            id: `gradient_positive_${o}_${b.value}`,
            cy: "50%",
            cx: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(e.value.style.bars.colors.positive, 0.05), t.intensity)
            }, null, 8, pe),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(e.value.style.bars.colors.positive, t.intensity)
            }, null, 8, ge)
          ], 8, fe))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("radialGradient", {
            id: `gradient_negative_${o}_${b.value}`,
            cy: "50%",
            cx: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(e.value.style.bars.colors.negative, 0.05), t.intensity)
            }, null, 8, be),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(e.value.style.bars.colors.negative, t.intensity)
            }, null, 8, _e)
          ], 8, me))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("radialGradient", {
            id: `gradient_datapoint_${o}_${b.value}`,
            cy: "50%",
            cx: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(t.color, 0.05), t.intensity)
            }, null, 8, ke),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(t.color, t.intensity)
            }, null, 8, we)
          ], 8, xe))), 256))
        ]),
        !e.value.style.bars.shape || e.value.style.bars.shape === "square" ? (openBlock(), createElementBlock("g", $e, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("rect", {
            x: t.x,
            y: t.y,
            height: t.height,
            width: t.width,
            fill: e.value.style.bars.colors.gradient.show ? t.gradient : t.color,
            stroke: t.stroke,
            "stroke-width": e.value.style.bars.strokeWidth,
            rx: `${e.value.style.bars.borderRadius * t.proportion / 12}%`,
            class: normalizeClass({ "vue-ui-sparkhistogram-shape": e.value.style.animation.show })
          }, null, 10, Ce))), 256))
        ])) : (openBlock(), createElementBlock("g", Le, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createBlock($, {
            plot: { x: t.x + t.width / 2, y: t.y + t.height / 2 },
            color: e.value.style.bars.colors.gradient.show ? t.gradient : t.color,
            shape: e.value.style.bars.shape,
            radius: t.height * 0.4,
            class: normalizeClass({ "vue-ui-sparkhistogram-shape": e.value.style.animation.show })
          }, null, 8, ["plot", "color", "shape", "radius", "class"]))), 256))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("text", {
          "text-anchor": "middle",
          x: t.textAnchor,
          y: t.y - e.value.style.labels.value.fontSize / 3 + e.value.style.labels.value.offsetY,
          "font-size": e.value.style.labels.value.fontSize,
          "font-weight": e.value.style.labels.value.bold ? "bold" : "normal",
          fill: e.value.style.labels.value.color
        }, toDisplayString(unref(ir)(
          e.value.style.labels.value.formatter,
          t.value,
          unref(Ht)({
            p: e.value.style.labels.value.prefix,
            v: t.value,
            s: e.value.style.labels.value.suffix,
            r: e.value.style.labels.value.rounding
          }),
          { datapoint: i.value[u.value], seriesIndex: u.value }
        )), 9, ze))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("g", null, [
          t.valueLabel ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: t.textAnchor,
            y: t.y + t.height + e.value.style.labels.valueLabel.fontSize,
            "font-size": e.value.style.labels.valueLabel.fontSize,
            "text-anchor": "middle",
            fill: e.value.style.labels.valueLabel.color
          }, toDisplayString(t.valueLabel), 9, Se)) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("g", null, [
          t.timeLabel ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: t.textAnchor,
            y: d.value.height - e.value.style.labels.timeLabel.fontSize / 2,
            "font-size": e.value.style.labels.timeLabel.fontSize,
            fill: e.value.style.labels.timeLabel.color,
            "text-anchor": "middle"
          }, toDisplayString(t.timeLabel), 9, Me)) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (t, o) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            height: d.value.height,
            width: t.unitWidth,
            fill: "transparent",
            x: t.trapX,
            y: 0,
            onMouseover: (c2) => u.value = o,
            onMouseleave: r[0] || (r[0] = (c2) => u.value = null),
            stroke: u.value !== null && u.value === o ? e.value.style.selector.stroke : "",
            "stroke-width": u.value !== null && u.value === o ? e.value.style.selector.strokeWidth : 0,
            rx: e.value.style.selector.borderRadius,
            "stroke-dasharray": e.value.style.selector.strokeDasharray,
            onClick: () => j(t, o)
          }, null, 40, Ae)
        ]))), 256))
      ], 8, he)) : createCommentVNode("", true),
      l.$slots.source ? (openBlock(), createElementBlock("div", Ne, [
        renderSlot(l.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      S.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 3,
        config: {
          type: "sparkHistogram",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            sparkHistogram: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"]))
    ], 36));
  }
};
var Oe = s(De, [["__scopeId", "data-v-4e962555"]]);
export {
  Oe as default
};
//# sourceMappingURL=vue-ui-sparkhistogram-BKcr2mFc-V3R5GAER.js.map
