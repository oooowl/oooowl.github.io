import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
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
  k as k2,
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

// node_modules/vue-data-ui/dist/vue-ui-wheel-CCje_ZSc.js
var Pe = ["id"];
var Fe = ["xmlns", "viewBox"];
var Oe = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-linecap"];
var ze = ["cx", "cy", "r", "stroke", "stroke-width"];
var Se2 = ["x", "y", "font-size", "fill", "font-weight"];
var Ne = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Me = {
  __name: "vue-ui-wheel",
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
  setup(W, { expose: q }) {
    const h = W, { vue_ui_wheel: J } = te(), C = computed(() => !!h.dataset && Object.keys(h.dataset).length), _ = ref(Dt()), K = ref(null), P = ref(0), y = ref(null), F = ref(null), O2 = ref(null), z = ref(null), S = ref(0), e = computed({
      get: () => N(),
      set: (t) => t
    });
    function N() {
      const t = c({
        userConfig: h.config,
        defaultConfig: J
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_wheel[t.theme] || h.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => h.config, (t) => {
      e.value = N(), B(), S.value += 1;
    }, { deep: true });
    const { isPrinting: M, isImaging: T, generatePdf: L, generateImage: U } = re({
      elementId: _.value,
      fileName: e.value.style.chart.title.text || "vue-ui-wheel"
    }), Q = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), l = ref({
      size: 360,
      height: 360,
      width: 360
    }), $ = ref(e.value.style.chart.layout.percentage.fontSize), i = computed(() => ({
      radius: Math.min(l.value.width, l.value.height) * 0.9 / 2,
      centerX: l.value.width / 2,
      centerY: l.value.height / 2
    }));
    function X(t, d = 1) {
      return {
        x: i.value.centerX + i.value.radius * Math.cos(29.85 + t * Math.PI / 180) * d,
        y: i.value.centerY + i.value.radius * Math.sin(29.85 + t * Math.PI / 180) * d
      };
    }
    const o = ref(e.value.style.chart.animation.use ? 0 : h.dataset.percentage || 0);
    watch(() => h.dataset, (t) => {
      e.value.style.chart.animation.use ? G(t.percentage) : o.value = t.percentage || 0;
    }, { deep: true });
    const g = ref(null);
    onMounted(() => {
      B();
    });
    function B() {
      if (jt(h.dataset) && qt({
        componentName: "VueUiWheel",
        type: "dataset"
      }), G(h.dataset.percentage || 0), e.value.responsive) {
        const t = O(() => {
          const { width: d, height: a } = k({
            chart: y.value,
            title: e.value.style.chart.title.text ? F.value : null,
            source: O2.value,
            noTitle: z.value
          });
          l.value.width = d, l.value.height = a, $.value = e.value.style.chart.layout.percentage.fontSize / 360 * Math.min(d, a);
        });
        g.value = new ResizeObserver(t), g.value.observe(y.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      g.value && g.value.disconnect();
    });
    function G(t) {
      let d = e.value.style.chart.animation.speed;
      const a = Math.abs(t - o.value) / (d * 120);
      function u() {
        o.value < t ? o.value = Math.min(o.value + a, t) : o.value > t && (o.value = Math.max(o.value - a, t)), o.value !== t && requestAnimationFrame(u);
      }
      u();
    }
    const Z = computed(() => {
      const t = [];
      for (let a = 0; a < 100; a += 1) {
        const u = o.value > a ? e.value.style.chart.layout.wheel.ticks.activeColor : e.value.style.chart.layout.wheel.ticks.inactiveColor, { x: ee, y: te2 } = X(l.value.size / 100 * a), { x: ae2, y: le } = X(l.value.size / 100 * a, e.value.style.chart.layout.wheel.ticks.sizeRatio);
        t.push({
          x1: ee,
          y1: te2,
          x2: ae2,
          y2: le,
          color: e.value.style.chart.layout.wheel.ticks.gradient.show ? yt(u, a / 100 * (e.value.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity / 100)) : u
        });
      }
      return t;
    }), m = ref(false);
    function V(t) {
      m.value = t, P.value += 1;
    }
    const k3 = ref(false);
    function x2() {
      k3.value = !k3.value;
    }
    return q({
      generatePdf: L,
      generateImage: U,
      toggleAnnotator: x2
    }), (t, d) => (openBlock(), createElementBlock("div", {
      class: "vue-ui-wheel",
      ref_key: "wheelChart",
      ref: y,
      id: _.value,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: y.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: k3.value,
        onClose: x2
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Q.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: z,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: F,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${S.value}`,
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
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && C.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: K,
        key: `user_options_${P.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(M),
        isImaging: unref(T),
        uid: _.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        hasXls: false,
        isFullscreen: m.value,
        position: e.value.userOptions.position,
        titles: { ...e.value.userOptions.buttonTitles },
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: k3.value,
        chartElement: y.value,
        onToggleFullscreen: V,
        onGeneratePdf: unref(L),
        onGenerateImage: unref(U),
        onToggleAnnotator: x2
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
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: u }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: u })), void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: u }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: u })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "position", "titles", "hasAnnotator", "isAnnotation", "chartElement", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      C.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": m.value, "vue-data-ui-fulscreen--off": !m.value }),
        viewBox: `0 0 ${l.value.width <= 0 ? 10 : l.value.width} ${l.value.height <= 0 ? 10 : l.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Z.value, (a, u) => (openBlock(), createElementBlock("line", {
          x1: a.x1,
          x2: a.x2,
          y1: a.y1,
          y2: a.y2,
          stroke: a.color,
          "stroke-width": 5 / 360 * Math.min(l.value.width, l.value.height),
          "stroke-linecap": e.value.style.chart.layout.wheel.ticks.rounded ? "round" : "butt",
          class: normalizeClass({ "vue-ui-tick-animated": e.value.style.chart.animation.use && u <= o.value })
        }, null, 10, Oe))), 256)),
        e.value.style.chart.layout.innerCircle.show ? (openBlock(), createElementBlock("circle", {
          key: 0,
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: i.value.radius * 0.8 <= 0 ? 1e-4 : i.value.radius * 0.8,
          stroke: e.value.style.chart.layout.innerCircle.stroke,
          "stroke-width": e.value.style.chart.layout.innerCircle.strokeWidth,
          fill: "none"
        }, null, 8, ze)) : createCommentVNode("", true),
        e.value.style.chart.layout.percentage.show ? (openBlock(), createElementBlock("text", {
          key: 1,
          x: i.value.centerX,
          y: i.value.centerY + $.value / 3,
          "font-size": $.value,
          fill: e.value.style.chart.layout.wheel.ticks.gradient.show ? unref(yt)(e.value.style.chart.layout.wheel.ticks.activeColor, o.value / 100 * (e.value.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity / 100)) : e.value.style.chart.layout.wheel.ticks.activeColor,
          "text-anchor": "middle",
          "font-weight": e.value.style.chart.layout.percentage.bold ? "bold" : "normal",
          style: { "font-variant-numeric": "tabluar-nums" }
        }, toDisplayString(unref(ir)(
          e.value.style.chart.layout.percentage.formatter,
          unref(k2)(o.value),
          unref(Ht)({
            v: unref(k2)(o.value),
            s: "%",
            r: e.value.style.chart.layout.percentage.rounding
          })
        )), 9, Se2)) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 14, Fe)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ne, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(M) || unref(T) })), void 0, true)
      ])) : createCommentVNode("", true),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 6,
        ref_key: "source",
        ref: O2,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      C.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
        config: {
          type: "wheel",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            wheel: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"]))
    ], 12, Pe));
  }
};
var Ye = s(Me, [["__scopeId", "data-v-bc4a7284"]]);
export {
  Ye as default
};
//# sourceMappingURL=vue-ui-wheel-CCje_ZSc-25L2R2LZ.js.map
