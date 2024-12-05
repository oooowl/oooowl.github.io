import {
  M,
  O
} from "./chunk-NF5J7GNE.js";
import {
  x
} from "./chunk-NVSFRQ42.js";
import {
  ie,
  se
} from "./chunk-KUISEN2N.js";
import {
  fs
} from "./chunk-XKFV7VRH.js";
import {
  p
} from "./chunk-VCFIOMKF.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-57NPTS3S.js";
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
  k,
  nr,
  oe,
  pt
} from "./chunk-TG4LWCJY.js";
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-wheel-B8mbO6ht.js
var Ce = ["id"];
var _e = ["xmlns", "viewBox"];
var xe = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-linecap"];
var Ie = ["cx", "cy", "r", "stroke", "stroke-width"];
var $e = ["x", "y", "font-size", "fill", "font-weight"];
var Fe = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Pe = {
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
  setup(j, { expose: D }) {
    const i = j, { vue_ui_wheel: Y } = oe(), k2 = computed(() => !!i.dataset && Object.keys(i.dataset).length), w = ref(Lt()), H = ref(null), x2 = ref(0), y = ref(null), I = ref(null), $ = ref(0), e = computed({
      get: () => F(),
      set: (t) => t
    });
    function F() {
      const t = c({
        userConfig: i.config,
        defaultConfig: Y
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_wheel[t.theme] || i.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => i.config, (t) => {
      e.value = F(), N(), $.value += 1;
    }, { deep: true });
    const { isPrinting: P, isImaging: z, generatePdf: O2, generateImage: S } = se({
      elementId: w.value,
      fileName: e.value.style.chart.title.text || "vue-ui-wheel"
    }), l = ref({
      size: 360,
      height: 360,
      width: 360
    }), b = ref(e.value.style.chart.layout.percentage.fontSize), u = computed(() => ({
      radius: Math.min(l.value.width, l.value.height) * 0.9 / 2,
      centerX: l.value.width / 2,
      centerY: l.value.height / 2
    }));
    function M2(t, c2 = 1) {
      return {
        x: u.value.centerX + u.value.radius * Math.cos(29.85 + t * Math.PI / 180) * c2,
        y: u.value.centerY + u.value.radius * Math.sin(29.85 + t * Math.PI / 180) * c2
      };
    }
    const s2 = ref(e.value.style.chart.animation.use ? 0 : i.dataset.percentage || 0);
    watch(() => i.dataset, (t) => {
      e.value.style.chart.animation.use ? A(t.percentage) : s2.value = t.percentage || 0;
    }, { deep: true });
    const m = ref(null);
    onMounted(() => {
      N();
    });
    function N() {
      if (Xt(i.dataset) && Kt({
        componentName: "VueUiWheel",
        type: "dataset"
      }), A(i.dataset.percentage || 0), e.value.responsive) {
        const t = O(() => {
          const { width: c2, height: a } = M({
            chart: y.value,
            title: e.value.style.chart.title.text ? I.value : null
          });
          l.value.width = c2, l.value.height = a, b.value = e.value.style.chart.layout.percentage.fontSize / 360 * Math.min(c2, a);
        });
        m.value = new ResizeObserver(t), m.value.observe(y.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      m.value && m.value.disconnect();
    });
    function A(t) {
      let c2 = e.value.style.chart.animation.speed;
      const a = Math.abs(t - s2.value) / (c2 * 120);
      function h() {
        s2.value < t ? s2.value = Math.min(s2.value + a, t) : s2.value > t && (s2.value = Math.max(s2.value - a, t)), s2.value !== t && requestAnimationFrame(h);
      }
      h();
    }
    const W = computed(() => {
      const t = [];
      for (let a = 0; a < 100; a += 1) {
        const h = s2.value > a ? e.value.style.chart.layout.wheel.ticks.activeColor : e.value.style.chart.layout.wheel.ticks.inactiveColor, { x: J, y: K } = M2(l.value.size / 100 * a), { x: Q, y: Z } = M2(l.value.size / 100 * a, e.value.style.chart.layout.wheel.ticks.sizeRatio);
        t.push({
          x1: J,
          y1: K,
          x2: Q,
          y2: Z,
          color: e.value.style.chart.layout.wheel.ticks.gradient.show ? pt(h, a / 100 * (e.value.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity / 100)) : h
        });
      }
      return t;
    }), g = ref(false);
    function q(t) {
      g.value = t, x2.value += 1;
    }
    return D({
      generatePdf: O2,
      generateImage: S
    }), (t, c2) => (openBlock(), createElementBlock("div", {
      class: "vue-ui-wheel",
      ref_key: "wheelChart",
      ref: y,
      id: w.value,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: I,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${$.value}`,
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
      e.value.userOptions.show && k2.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: H,
        key: `user_options_${x2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(P),
        isImaging: unref(z),
        uid: w.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        hasXls: false,
        isFullscreen: g.value,
        position: e.value.userOptions.position,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: y.value,
        onToggleFullscreen: q,
        onGeneratePdf: unref(O2),
        onGenerateImage: unref(S)
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
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: h }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: h })), void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "position", "titles", "chartElement", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      k2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": g.value, "vue-data-ui-fulscreen--off": !g.value }),
        viewBox: `0 0 ${l.value.width <= 0 ? 10 : l.value.width} ${l.value.height <= 0 ? 10 : l.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(W.value, (a, h) => (openBlock(), createElementBlock("line", {
          x1: a.x1,
          x2: a.x2,
          y1: a.y1,
          y2: a.y2,
          stroke: a.color,
          "stroke-width": 5 / 360 * Math.min(l.value.width, l.value.height),
          "stroke-linecap": e.value.style.chart.layout.wheel.ticks.rounded ? "round" : "butt",
          class: normalizeClass({ "vue-ui-tick-animated": e.value.style.chart.animation.use && h <= s2.value })
        }, null, 10, xe))), 256)),
        e.value.style.chart.layout.innerCircle.show ? (openBlock(), createElementBlock("circle", {
          key: 0,
          cx: u.value.centerX,
          cy: u.value.centerY,
          r: u.value.radius * 0.8 <= 0 ? 1e-4 : u.value.radius * 0.8,
          stroke: e.value.style.chart.layout.innerCircle.stroke,
          "stroke-width": e.value.style.chart.layout.innerCircle.strokeWidth,
          fill: "none"
        }, null, 8, Ie)) : createCommentVNode("", true),
        e.value.style.chart.layout.percentage.show ? (openBlock(), createElementBlock("text", {
          key: 1,
          x: u.value.centerX,
          y: u.value.centerY + b.value / 3,
          "font-size": b.value,
          fill: e.value.style.chart.layout.wheel.ticks.gradient.show ? unref(pt)(e.value.style.chart.layout.wheel.ticks.activeColor, s2.value / 100 * (e.value.style.chart.layout.wheel.ticks.gradient.shiftHueIntensity / 100)) : e.value.style.chart.layout.wheel.ticks.activeColor,
          "text-anchor": "middle",
          "font-weight": e.value.style.chart.layout.percentage.bold ? "bold" : "normal",
          style: { "font-variant-numeric": "tabluar-nums" }
        }, toDisplayString(unref(nr)(
          e.value.style.chart.layout.percentage.formatter,
          unref(k)(s2.value),
          unref(Gt)({
            v: unref(k)(s2.value),
            s: "%",
            r: e.value.style.chart.layout.percentage.rounding
          })
        )), 9, $e)) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 14, _e)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Fe, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(P) || unref(z) })), void 0, true)
      ])) : createCommentVNode("", true),
      k2.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
    ], 12, Ce));
  }
};
var Be = s(Pe, [["__scopeId", "data-v-b8e98e43"]]);
export {
  Be as default
};
//# sourceMappingURL=vue-ui-wheel-B8mbO6ht-YODLGBWE.js.map
