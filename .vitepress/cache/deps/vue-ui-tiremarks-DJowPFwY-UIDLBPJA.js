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
  Jt,
  ir,
  jt,
  k,
  qt,
  te,
  yt
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createVNode,
  guardReactiveProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
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

// node_modules/vue-data-ui/dist/vue-ui-tiremarks-DJowPFwY.js
var Ae = ["id"];
var Ie = {
  key: 2,
  style: "width:100%;background:transparent;padding-bottom:12px"
};
var Oe = ["xmlns", "viewBox"];
var Fe = { key: 0 };
var ze = ["d", "stroke-width", "stroke"];
var Se2 = { key: 1 };
var Ne = ["x1", "y1", "x2", "y2", "stroke-width", "stroke"];
var Te = ["x", "y", "font-size", "fill", "font-weight", "text-anchor"];
var Ge = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Le = {
  key: 6,
  ref: "source",
  dir: "auto"
};
var Me = {
  __name: "vue-ui-tiremarks",
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
  setup(ee, { expose: te2 }) {
    const h = ee, { vue_ui_tiremarks: ae2 } = te(), z = computed(() => !!h.dataset && Object.keys(h.dataset).length), S = ref(Dt()), N = ref(null), le = ref(null), U = ref(0), j = ref(0), e = computed({
      get: () => B(),
      set: (t) => t
    });
    function B() {
      const t = c({
        userConfig: h.config,
        defaultConfig: ae2
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_tiremarks[t.theme] || h.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => h.config, (t) => {
      e.value = B(), Y(), j.value += 1;
    }, { deep: true });
    const { isPrinting: E, isImaging: X, generatePdf: D, generateImage: H } = re({
      elementId: S.value,
      fileName: e.value.style.chart.title.text || "vue-ui-tiremarks"
    }), oe = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), s2 = ref(e.value.style.chart.animation.use ? 0 : k(h.dataset.percentage));
    watch(() => h.dataset, (t) => {
      e.value.style.chart.animation.use ? R(t.percentage) : s2.value = t.percentage || 0;
    }, { deep: true }), onMounted(() => {
      Y();
    });
    function R(t) {
      let i = e.value.style.chart.animation.speed;
      const a = Math.abs(t - s2.value) / (i * 120);
      function o() {
        s2.value < t ? s2.value = Math.min(s2.value + a, t) : s2.value > t && (s2.value = Math.max(s2.value - a, t)), s2.value !== t && requestAnimationFrame(o);
      }
      o();
    }
    function Y() {
      jt(h.dataset) && qt({
        componentName: "VueUiTiremarks",
        type: "dataset"
      }), R(h.dataset.percentage || 0);
    }
    const b = computed(() => e.value.style.chart.layout.display === "vertical"), n = computed(() => {
      const t = {
        top: 48,
        left: 64,
        right: 64,
        bottom: 48
      };
      return b.value ? {
        top: e.value.style.chart.percentage.verticalPosition === "top" ? t.top : 3,
        left: 3,
        right: 3,
        bottom: e.value.style.chart.percentage.verticalPosition === "bottom" ? t.bottom : 3
      } : {
        top: 0,
        bottom: 0,
        left: e.value.style.chart.percentage.horizontalPosition === "left" ? t.left : 3,
        right: e.value.style.chart.percentage.horizontalPosition === "right" ? t.right : 10
      };
    }), P = computed(() => Object.values(n.value).reduce((t, i) => t + i, 0)), l = computed(() => ({
      height: b.value ? 312 : 56,
      width: b.value ? 56 : 312
    })), re2 = ref(100);
    computed(() => h.dataset.percentage / re2.value);
    const c2 = computed(() => b.value ? {
      mark: (l.value.height - P.value) / 100 * 0.5,
      space: (l.value.height - P.value) / 100 * 0.5
    } : {
      mark: (l.value.width - P.value) / 100 * 0.5,
      space: (l.value.width - P.value) / 100 * 0.5
    }), q = computed(() => {
      const t = [];
      for (let a = 0; a < 100; a += 1) {
        const o = e.value.style.chart.layout.ticks.gradient.show ? yt(e.value.style.chart.layout.activeColor, a / 100 * (e.value.style.chart.layout.ticks.gradient.shiftHueIntensity / 100)) : e.value.style.chart.layout.activeColor;
        if (b.value) {
          const $ = e.value.style.chart.layout.crescendo ? (100 - a) * (l.value.width - n.value.left - n.value.right) / 100 / 3 : 0, f = n.value.left + 4 + $, m = l.value.width - n.value.right - 4 - $, y = l.value.height - n.value.bottom - a * c2.value.mark - a * c2.value.space - c2.value.mark, k2 = l.value.height - n.value.bottom - a * c2.value.mark - a * c2.value.space - c2.value.mark, w = (m - f) / e.value.style.chart.layout.curveAngleX, x2 = e.value.style.chart.layout.curveAngleY * ((1 + a) / 100);
          t.push({
            x1: f,
            x2: m,
            y1: y,
            y2: k2,
            curve: `M ${f} ${y} C ${f + w} ${y - x2}, ${m - w} ${k2 - x2}, ${m} ${k2}`,
            color: o
          });
        } else {
          const $ = e.value.style.chart.layout.crescendo ? (100 - a) * (l.value.height - n.value.top - n.value.bottom) / 100 / 3 : 0, f = n.value.left + a * c2.value.mark + a * c2.value.space - c2.value.mark, m = f, y = n.value.top + 4 + $, k2 = l.value.height - n.value.bottom - 4 - $, w = e.value.style.chart.layout.curveAngleY * ((1 + a) / 100), x2 = (k2 - y) / e.value.style.chart.layout.curveAngleX;
          t.push({
            x1: f,
            x2: m,
            y1: y,
            y2: k2,
            curve: `M ${f} ${y} C ${f + w} ${y + x2}, ${m + w} ${k2 - x2}, ${m} ${k2}`,
            color: o
          });
        }
      }
      return t;
    }), C = computed(() => {
      let t, i, a;
      const o = e.value.style.chart.percentage.fontSize / 3;
      return b.value ? e.value.style.chart.percentage.verticalPosition === "top" ? (t = l.value.width / 2, i = n.value.top / 2, a = "middle") : e.value.style.chart.percentage.verticalPosition === "bottom" && (t = l.value.width / 2, i = l.value.height - n.value.bottom / 2 + o, a = "middle") : e.value.style.chart.percentage.horizontalPosition === "left" ? (t = 4, i = l.value.height / 2 + o, a = "start") : e.value.style.chart.percentage.horizontalPosition === "right" && (t = l.value.width - n.value.right + 8, i = l.value.height / 2 + o, a = "start"), {
        x: t,
        y: i,
        textAnchor: a,
        bold: e.value.style.chart.percentage.bold,
        fontSize: e.value.style.chart.percentage.fontSize,
        fill: e.value.style.chart.percentage.color
      };
    }), A = ref(false);
    function se(t) {
      A.value = t, U.value += 1;
    }
    const I = ref(false);
    function T() {
      I.value = !I.value;
    }
    return te2({
      generatePdf: D,
      generateImage: H,
      toggleAnnotator: T
    }), (t, i) => (openBlock(), createElementBlock("div", {
      ref_key: "tiremarksChart",
      ref: N,
      class: normalizeClass(`vue-ui-tiremarks ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor}`),
      id: S.value
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: N.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: I.value,
        onClose: T
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      oe.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: le,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", Ie, [
        (openBlock(), createBlock(x, {
          key: `title_${j.value}`,
          config: {
            title: {
              cy: "wheel-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "wheel-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && z.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_options_${U.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(E),
        isImaging: unref(X),
        uid: S.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        hasXls: false,
        isFullscreen: A.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: N.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: I.value,
        onToggleFullscreen: se,
        onGeneratePdf: unref(D),
        onGenerateImage: unref(H),
        onToggleAnnotator: T
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
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: o }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: o })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      z.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": A.value, "vue-data-ui-fulscreen--off": !A.value }),
        viewBox: `0 0 ${l.value.width} ${l.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.style.chart.layout.curved ? (openBlock(), createElementBlock("g", Fe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a, o) => (openBlock(), createElementBlock("path", {
            d: a.curve,
            "stroke-width": c2.value.mark,
            stroke: s2.value >= o ? a.color : e.value.style.chart.layout.inactiveColor,
            "stroke-linecap": "round",
            fill: "none",
            class: normalizeClass({ "vue-ui-tick-animated": e.value.style.chart.animation.use && o <= s2.value })
          }, null, 10, ze))), 256))
        ])) : (openBlock(), createElementBlock("g", Se2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a, o) => (openBlock(), createElementBlock("line", {
            x1: a.x1,
            y1: a.y1,
            x2: a.x2,
            y2: a.y2,
            "stroke-width": c2.value.mark,
            stroke: s2.value >= o ? a.color : e.value.style.chart.layout.inactiveColor,
            "stroke-linecap": "round"
          }, null, 8, Ne))), 256))
        ])),
        e.value.style.chart.percentage.show ? (openBlock(), createElementBlock("text", {
          key: 2,
          x: C.value.x,
          y: C.value.y,
          "font-size": C.value.fontSize,
          fill: e.value.style.chart.layout.ticks.gradient.show && e.value.style.chart.percentage.useGradientColor ? unref(yt)(e.value.style.chart.layout.activeColor, s2.value / 100 * (e.value.style.chart.layout.ticks.gradient.shiftHueIntensity / 100)) : e.value.style.chart.percentage.color,
          "font-weight": C.value.bold ? "bold" : "normal",
          "text-anchor": C.value.textAnchor
        }, toDisplayString(unref(ir)(
          e.value.style.chart.percentage.formatter,
          s2.value,
          unref(Ht)({
            v: s2.value,
            s: "%",
            r: e.value.style.chart.percentage.rounding
          })
        )), 9, Te)) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 14, Oe)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ge, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(E) || unref(X) })), void 0, true)
      ])) : createCommentVNode("", true),
      t.$slots.source ? (openBlock(), createElementBlock("div", Le, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      z.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
        config: {
          type: "tiremarks",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            tiremarks: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"]))
    ], 14, Ae));
  }
};
var qe = s(Me, [["__scopeId", "data-v-93332410"]]);
export {
  qe as default
};
//# sourceMappingURL=vue-ui-tiremarks-DJowPFwY-UIDLBPJA.js.map
