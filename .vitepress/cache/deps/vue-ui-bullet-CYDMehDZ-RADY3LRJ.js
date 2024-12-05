import {
  C
} from "./chunk-ZYATGC4V.js";
import "./chunk-H2UGMUIX.js";
import {
  x
} from "./chunk-AIHOZQHZ.js";
import {
  Se
} from "./chunk-BZKUIZ5F.js";
import {
  ae,
  re
} from "./chunk-LOF7EHPB.js";
import {
  Cs
} from "./chunk-QGOFMHVO.js";
import {
  p
} from "./chunk-FSTZFDG3.js";
import {
  c
} from "./chunk-OBQGP7GO.js";
import "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  He,
  Ht,
  It,
  Jt,
  Q,
  Ut,
  Zt,
  ir,
  jt,
  qt,
  te
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createVNode,
  guardReactiveProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-bullet-CYDMehDZ.js
var Se2 = ["id"];
var Ie = {
  key: 1,
  ref: "noTitle",
  class: "vue-data-ui-no-title-space",
  style: "height:36px; width: 100%;background:transparent"
};
var Oe = ["xmlns", "viewBox"];
var He2 = { key: 0 };
var Te = ["x", "y", "height", "width", "fill", "stroke"];
var Ne = ["x", "y", "height", "width", "rx", "fill", "stroke", "stroke-width"];
var ze = ["x", "y", "height", "width", "fill", "stroke", "stroke-width"];
var Me = ["x", "y", "font-size", "font-weight", "fill"];
var Ue = ["x", "y", "height", "width", "rx", "fill", "stroke", "stroke-width"];
var We = { key: 3 };
var Ee = ["x", "y", "fill", "font-size", "font-weight"];
var Re = { key: 4 };
var De = ["x1", "x2", "y1", "y2", "stroke"];
var Ge = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var je = {
  class: "vue-ui-bullet-legend-item",
  dir: "auto"
};
var Ve = { style: { "margin-right": "2px" } };
var qe = {
  key: 7,
  ref: "source",
  dir: "auto"
};
var Xe = {
  __name: "vue-ui-bullet",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(K, { expose: Q2 }) {
    const o = K, { vue_ui_bullet: Z } = te(), A = ref(null), ee = ref(null), N = ref(0), te2 = ref(null), ae2 = ref(0), f = computed({
      get: () => o.dataset.hasOwnProperty("value"),
      set: (t) => t
    }), p2 = computed(() => o.dataset.segments ? Array.isArray(o.dataset.segments) ? o.dataset.segments.length ? true : (console.warn(`VueUiBullet: dataset segments is empty. Provide segments with this datastructure:

segments: [
    {
        name: string;
        from: number;
        to: number;
        color?: string;
    },
    {...}
]
        `), f.value = false, false) : (console.warn(`VueUiBullet: dataset segments must be an array of objects with this datastructure:

segments: [
    {
        name: string;
        from: number;
        to: number;
        color?: string;
    },
    {...}
] 
        `), f.value = false, false) : (console.warn(`VueUiBullet: dataset segments is empty. Provide segments with this datastructure:

segments: [
    {
        name: string;
        from: number;
        to: number;
        color?: string;
    },
    {...}
]
        `), f.value = false, false));
    onMounted(z);
    function z() {
      jt(o.dataset) ? qt({
        componentName: "VueUiBullet",
        type: "dataset"
      }) : p2.value ? o.dataset.segments.forEach((t, s2) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "from", "to"]
        }).forEach((a) => {
          f.value = false, qt({
            componentName: "VueUiBullet segment",
            type: "datasetSerieAttribute",
            property: a,
            index: s2
          });
        });
      }) : f.value = false, e.value.style.chart.animation.show && W(o.dataset.value || 0);
    }
    const P = ref(Dt());
    function M() {
      const t = c({
        userConfig: o.config,
        defaultConfig: Z
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_bullet[t.theme] || o.config,
          defaultConfig: t
        })
      } : t;
    }
    const e = computed({
      get: () => M(),
      set: (t) => t
    });
    watch(() => o.config, (t) => {
      e.value = M(), z(), N.value += 1;
    }, { deep: true });
    const l = computed(() => {
      const t = e.value.style.chart.height, s2 = e.value.style.chart.width, a = e.value.style.chart.padding.left, m = s2 - e.value.style.chart.padding.right, C2 = e.value.style.chart.padding.top, h = t - e.value.style.chart.padding.bottom;
      return {
        height: t,
        width: s2,
        left: a,
        right: m,
        top: C2,
        bottom: h,
        chartWidth: m - a,
        chartHeight: h - C2
      };
    }), le = computed(() => {
      if (!p2.value) return [];
      const t = [];
      for (let s2 = 0; s2 < o.dataset.segments.length; s2 += 1)
        t.push(It(e.value.style.chart.segments.baseColor, s2 / o.dataset.segments.length));
      return t;
    }), F = computed(() => p2.value ? {
      min: Math.min(...o.dataset.segments.map((t) => t.from)),
      max: Math.max(...o.dataset.segments.map((t) => t.to))
    } : { min: 0, max: 1 }), i = ref(se());
    watch(() => o.dataset, (t) => {
      e.value.style.chart.animation.show ? W(t.value || 0) : i.value = t.value || 0;
    }, { deep: true });
    function se() {
      return e.value.style.chart.animation.show ? F.value.min : o.dataset.value || 0;
    }
    const U = ref(null);
    function W(t) {
      const s2 = Math.abs(t - i.value) / e.value.style.chart.animation.animationFrames;
      function a() {
        i.value < t ? i.value = Math.min(i.value + s2, t) : i.value > t && (i.value = Math.max(i.value - s2, t)), i.value !== t && (U.value = requestAnimationFrame(a));
      }
      a();
    }
    onBeforeUnmount(() => {
      cancelAnimationFrame(U.value);
    });
    const c2 = computed(() => {
      if (!p2.value)
        return [];
      const t = Ut(F.value.min, F.value.max, e.value.style.chart.segments.ticks.divisions), s2 = t.min >= 0 ? 0 : Math.abs(t.min), a = {
        x: l.value.left + (o.dataset.target + s2) / (t.max + s2) * l.value.chartWidth - e.value.style.chart.target.width / 2
      }, m = {
        width: (i.value + s2) / (t.max + s2) * l.value.chartWidth
      }, C2 = t.ticks.map((h) => ({
        value: h,
        y: l.value.bottom + e.value.style.chart.segments.dataLabels.fontSize + 3 + e.value.style.chart.segments.dataLabels.offsetY,
        x: l.value.left + (h + s2) / (t.max + s2) * l.value.chartWidth
      }));
      return {
        scale: t,
        target: a,
        value: m,
        ticks: C2,
        chunks: o.dataset.segments.map((h, ie) => ({
          ...h,
          color: h.color ? Q(h.color) : le.value[ie],
          x: l.value.left + l.value.chartWidth * ((h.from + s2) / (t.max + s2)),
          y: l.value.top,
          height: l.value.chartHeight,
          width: l.value.chartWidth * (Math.abs(h.to - h.from) / (t.max + s2))
        }))
      };
    }), E = computed(() => !c2.value || !c2.value.chunks || !c2.value.chunks.length ? [] : c2.value.chunks.map((t) => {
      const s2 = ir(
        e.value.style.chart.segments.dataLabels.formatter,
        t.from,
        Ht({
          p: e.value.style.chart.segments.dataLabels.prefix,
          v: t.from,
          s: e.value.style.chart.segments.dataLabels.suffix,
          r: e.value.style.chart.segments.dataLabels.rounding
        })
      ), a = ir(
        e.value.style.chart.segments.dataLabels.formatter,
        t.to,
        Ht({
          p: e.value.style.chart.segments.dataLabels.prefix,
          v: t.to,
          s: e.value.style.chart.segments.dataLabels.suffix,
          r: e.value.style.chart.segments.dataLabels.rounding
        })
      );
      return {
        ...t,
        shape: "square",
        value: `${s2} - ${a}`
      };
    })), re2 = computed(() => ({
      cy: "bullet-div-legend",
      backgroundColor: "transparent",
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 6,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), { isPrinting: R, isImaging: D, generatePdf: G, generateImage: j } = re({
      elementId: `bullet_${P.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-bullet"
    }), oe = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), b = ref(false);
    function ne(t) {
      b.value = t, ae2.value += 1;
    }
    function ue() {
      return c2.value;
    }
    const _ = ref(false);
    function S() {
      _.value = !_.value;
    }
    return Q2({
      getData: ue,
      generatePdf: G,
      generateImage: j,
      toggleAnnotator: S
    }), (t, s2) => (openBlock(), createElementBlock("div", {
      ref_key: "bulletChart",
      ref: A,
      class: normalizeClass(`vue-ui-bullet ${b.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%;background:${e.value.style.chart.backgroundColor}`),
      id: `bullet_${P.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: A.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: _.value,
        onClose: S
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      oe.value ? (openBlock(), createElementBlock("div", Ie, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: ee,
        style: "width:100%;background:transparent;"
      }, [
        (openBlock(), createBlock(x, {
          lineHeight: "1.3rem",
          key: `title_${N.value}`,
          config: {
            title: {
              cy: "bullet-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "bullet-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && f.value ? (openBlock(), createBlock(ae, {
        key: 3,
        ref: "details",
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(R),
        isImaging: unref(D),
        uid: P.value,
        hasTooltip: false,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: false,
        hasTable: false,
        hasLabel: false,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: b.value,
        chartElement: A.value,
        position: e.value.userOptions.position,
        titles: { ...e.value.userOptions.buttonTitles },
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: _.value,
        onToggleFullscreen: ne,
        onGeneratePdf: unref(G),
        onGenerateImage: unref(j),
        onToggleAnnotator: S
      }, createSlots({ _: 2 }, [
        t.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        t.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: m }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: m })), void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: m }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: m })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "chartElement", "position", "titles", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      f.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": b.value, "vue-data-ui-fulscreen--off": !b.value, "vue-ui-bullet-svg": true }),
        viewBox: `0 0 ${l.value.width} ${l.value.height}`,
        style: normalizeStyle(`width: 100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        p2.value ? (openBlock(), createElementBlock("g", He2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.chunks, (a) => (openBlock(), createElementBlock("rect", {
            x: a.x,
            y: a.y,
            height: a.height,
            width: a.width,
            fill: a.color,
            "stroke-width": 1,
            stroke: e.value.style.chart.backgroundColor
          }, null, 8, Te))), 256)),
          e.value.style.chart.target.onTop ? createCommentVNode("", true) : (openBlock(), createElementBlock("rect", {
            key: 0,
            x: c2.value.target.x,
            y: l.value.top + (l.value.chartHeight - l.value.chartHeight * e.value.style.chart.target.heightRatio) / 2,
            height: l.value.chartHeight * e.value.style.chart.target.heightRatio,
            width: e.value.style.chart.target.width,
            rx: e.value.style.chart.target.rounded ? e.value.style.chart.target.width / 2 : 0,
            fill: e.value.style.chart.target.color,
            stroke: e.value.style.chart.target.stroke,
            "stroke-width": e.value.style.chart.target.strokeWidth
          }, null, 8, Ne)),
          createBaseVNode("rect", {
            x: l.value.left,
            y: l.value.top + (l.value.chartHeight - l.value.chartHeight * e.value.style.chart.valueBar.heightRatio) / 2,
            height: l.value.chartHeight * e.value.style.chart.valueBar.heightRatio,
            width: c2.value.value.width,
            fill: e.value.style.chart.valueBar.color,
            stroke: e.value.style.chart.valueBar.stroke,
            "stroke-width": e.value.style.chart.valueBar.strokeWidth
          }, null, 8, ze),
          e.value.style.chart.valueBar.label.show ? (openBlock(), createElementBlock("text", {
            key: 1,
            x: l.value.left + c2.value.value.width,
            y: l.value.top - 6 + e.value.style.chart.valueBar.label.offsetY,
            "font-size": e.value.style.chart.valueBar.label.fontSize,
            "font-weight": e.value.style.chart.valueBar.label.bold ? "bold" : "normal",
            fill: e.value.style.chart.valueBar.label.color,
            "text-anchor": "middle"
          }, toDisplayString(unref(ir)(
            e.value.style.chart.segments.dataLabels.formatter,
            i.value,
            unref(Ht)({
              p: e.value.style.chart.segments.dataLabels.prefix,
              v: i.value,
              s: e.value.style.chart.segments.dataLabels.suffix,
              r: e.value.style.chart.segments.dataLabels.rounding
            })
          )), 9, Me)) : createCommentVNode("", true),
          e.value.style.chart.target.onTop ? (openBlock(), createElementBlock("rect", {
            key: 2,
            x: c2.value.target.x,
            y: l.value.top + (l.value.chartHeight - l.value.chartHeight * e.value.style.chart.target.heightRatio) / 2,
            height: l.value.chartHeight * e.value.style.chart.target.heightRatio,
            width: e.value.style.chart.target.width,
            rx: e.value.style.chart.target.rounded ? e.value.style.chart.target.width / 2 : 0,
            fill: e.value.style.chart.target.color,
            stroke: e.value.style.chart.target.stroke,
            "stroke-width": e.value.style.chart.target.strokeWidth
          }, null, 8, Ue)) : createCommentVNode("", true),
          e.value.style.chart.segments.dataLabels.show ? (openBlock(), createElementBlock("g", We, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.ticks, (a) => (openBlock(), createElementBlock("text", {
              x: a.x,
              y: a.y,
              "text-anchor": "middle",
              fill: e.value.style.chart.segments.dataLabels.color,
              "font-size": e.value.style.chart.segments.dataLabels.fontSize + "px",
              "font-weight": e.value.style.chart.segments.dataLabels.bold ? "bold" : "normal"
            }, toDisplayString(unref(ir)(
              e.value.style.chart.segments.dataLabels.formatter,
              a.value,
              unref(Ht)({
                p: e.value.style.chart.segments.dataLabels.prefix,
                v: a.value,
                s: e.value.style.chart.segments.dataLabels.suffix,
                r: e.value.style.chart.segments.dataLabels.rounding
              })
            )), 9, Ee))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.chart.segments.dataLabels.show && e.value.style.chart.segments.ticks.show ? (openBlock(), createElementBlock("g", Re, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.ticks, (a) => (openBlock(), createElementBlock("line", {
              x1: a.x,
              x2: a.x,
              y1: l.value.bottom,
              y2: l.value.bottom + 3,
              stroke: e.value.style.chart.segments.ticks.stroke,
              "stroke-width": 1,
              "stroke-linecap": "round"
            }, null, 8, De))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 14, Oe)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ge, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(R) || unref(D) })), void 0, true)
      ])) : createCommentVNode("", true),
      f.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "bullet",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            bullet: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: te2
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: 0,
          clickable: false,
          legendSet: E.value,
          config: re2.value
        }, {
          item: withCtx(({ legend: a }) => [
            createBaseVNode("div", je, [
              createBaseVNode("span", Ve, toDisplayString(a.name) + ":", 1),
              createBaseVNode("span", null, toDisplayString(a.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
        renderSlot(t.$slots, "legend", { legend: E.value }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", qe, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 14, Se2));
  }
};
var rt = s(Xe, [["__scopeId", "data-v-cfe188c3"]]);
export {
  rt as default
};
//# sourceMappingURL=vue-ui-bullet-CYDMehDZ-RADY3LRJ.js.map
