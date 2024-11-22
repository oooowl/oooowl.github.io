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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-tiremarks-d6TmSHY7.js
var Ce = ["id"];
var $e = {
  key: 0,
  style: "width:100%;background:transparent;padding-bottom:12px"
};
var we = ["xmlns", "viewBox"];
var xe = { key: 0 };
var Pe = ["d", "stroke-width", "stroke"];
var Ie = { key: 1 };
var Fe = ["x1", "y1", "x2", "y2", "stroke-width", "stroke"];
var ze = ["x", "y", "font-size", "fill", "font-weight", "text-anchor"];
var Oe = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Se = {
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
  setup(W, { expose: Z }) {
    const v = W, { vue_ui_tiremarks: ee } = oe(), F = computed(() => !!v.dataset && Object.keys(v.dataset).length), z = ref(Lt()), N = ref(null), G = ref(0), L = ref(0), e = computed({
      get: () => M(),
      set: (t) => t
    });
    function M() {
      const t = c({
        userConfig: v.config,
        defaultConfig: ee
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_tiremarks[t.theme] || v.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => v.config, (t) => {
      e.value = M(), X(), L.value += 1;
    }, { deep: true });
    const { isPrinting: U, isImaging: j, generatePdf: B, generateImage: E } = se({
      elementId: z.value,
      fileName: e.value.style.chart.title.text || "vue-ui-tiremarks"
    }), r = ref(e.value.style.chart.animation.use ? 0 : k(v.dataset.percentage));
    watch(() => v.dataset, (t) => {
      e.value.style.chart.animation.use ? T(t.percentage) : r.value = t.percentage || 0;
    }, { deep: true }), onMounted(() => {
      X();
    });
    function T(t) {
      let u = e.value.style.chart.animation.speed;
      const a = Math.abs(t - r.value) / (u * 120);
      function o() {
        r.value < t ? r.value = Math.min(r.value + a, t) : r.value > t && (r.value = Math.max(r.value - a, t)), r.value !== t && requestAnimationFrame(o);
      }
      o();
    }
    function X() {
      Xt(v.dataset) && Kt({
        componentName: "VueUiTiremarks",
        type: "dataset"
      }), T(v.dataset.percentage || 0);
    }
    const k2 = computed(() => e.value.style.chart.layout.display === "vertical"), s2 = computed(() => {
      const t = {
        top: 48,
        left: 64,
        right: 64,
        bottom: 48
      };
      return k2.value ? {
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
    }), P = computed(() => Object.values(s2.value).reduce((t, u) => t + u, 0)), l = computed(() => ({
      height: k2.value ? 312 : 56,
      width: k2.value ? 56 : 312
    })), te = ref(100);
    computed(() => v.dataset.percentage / te.value);
    const i = computed(() => k2.value ? {
      mark: (l.value.height - P.value) / 100 * 0.5,
      space: (l.value.height - P.value) / 100 * 0.5
    } : {
      mark: (l.value.width - P.value) / 100 * 0.5,
      space: (l.value.width - P.value) / 100 * 0.5
    }), D = computed(() => {
      const t = [];
      for (let a = 0; a < 100; a += 1) {
        const o = e.value.style.chart.layout.ticks.gradient.show ? pt(e.value.style.chart.layout.activeColor, a / 100 * (e.value.style.chart.layout.ticks.gradient.shiftHueIntensity / 100)) : e.value.style.chart.layout.activeColor;
        if (k2.value) {
          const C = e.value.style.chart.layout.crescendo ? (100 - a) * (l.value.width - s2.value.left - s2.value.right) / 100 / 3 : 0, m = s2.value.left + 4 + C, f = l.value.width - s2.value.right - 4 - C, g = l.value.height - s2.value.bottom - a * i.value.mark - a * i.value.space - i.value.mark, y = l.value.height - s2.value.bottom - a * i.value.mark - a * i.value.space - i.value.mark, $ = (f - m) / e.value.style.chart.layout.curveAngleX, w = e.value.style.chart.layout.curveAngleY * ((1 + a) / 100);
          t.push({
            x1: m,
            x2: f,
            y1: g,
            y2: y,
            curve: `M ${m} ${g} C ${m + $} ${g - w}, ${f - $} ${y - w}, ${f} ${y}`,
            color: o
          });
        } else {
          const C = e.value.style.chart.layout.crescendo ? (100 - a) * (l.value.height - s2.value.top - s2.value.bottom) / 100 / 3 : 0, m = s2.value.left + a * i.value.mark + a * i.value.space - i.value.mark, f = m, g = s2.value.top + 4 + C, y = l.value.height - s2.value.bottom - 4 - C, $ = e.value.style.chart.layout.curveAngleY * ((1 + a) / 100), w = (y - g) / e.value.style.chart.layout.curveAngleX;
          t.push({
            x1: m,
            x2: f,
            y1: g,
            y2: y,
            curve: `M ${m} ${g} C ${m + $} ${g + w}, ${f + $} ${y - w}, ${f} ${y}`,
            color: o
          });
        }
      }
      return t;
    }), b = computed(() => {
      let t, u, a;
      const o = e.value.style.chart.percentage.fontSize / 3;
      return k2.value ? e.value.style.chart.percentage.verticalPosition === "top" ? (t = l.value.width / 2, u = s2.value.top / 2, a = "middle") : e.value.style.chart.percentage.verticalPosition === "bottom" && (t = l.value.width / 2, u = l.value.height - s2.value.bottom / 2 + o, a = "middle") : e.value.style.chart.percentage.horizontalPosition === "left" ? (t = 4, u = l.value.height / 2 + o, a = "start") : e.value.style.chart.percentage.horizontalPosition === "right" && (t = l.value.width - s2.value.right + 8, u = l.value.height / 2 + o, a = "start"), {
        x: t,
        y: u,
        textAnchor: a,
        bold: e.value.style.chart.percentage.bold,
        fontSize: e.value.style.chart.percentage.fontSize,
        fill: e.value.style.chart.percentage.color
      };
    }), I = ref(false);
    function ae(t) {
      I.value = t, G.value += 1;
    }
    return Z({
      generatePdf: B,
      generateImage: E
    }), (t, u) => (openBlock(), createElementBlock("div", {
      ref_key: "tiremarksChart",
      ref: N,
      class: normalizeClass(`vue-ui-tiremarks ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: z.value
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", $e, [
        (openBlock(), createBlock(x, {
          key: `title_${L.value}`,
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
      e.value.userOptions.show && F.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_options_${G.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(U),
        isImaging: unref(j),
        uid: z.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        hasXls: false,
        isFullscreen: I.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: N.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: ae,
        onGeneratePdf: unref(B),
        onGenerateImage: unref(E)
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      F.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": I.value, "vue-data-ui-fulscreen--off": !I.value }),
        viewBox: `0 0 ${l.value.width} ${l.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.style.chart.layout.curved ? (openBlock(), createElementBlock("g", xe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (a, o) => (openBlock(), createElementBlock("path", {
            d: a.curve,
            "stroke-width": i.value.mark,
            stroke: r.value >= o ? a.color : e.value.style.chart.layout.inactiveColor,
            "stroke-linecap": "round",
            fill: "none",
            class: normalizeClass({ "vue-ui-tick-animated": e.value.style.chart.animation.use && o <= r.value })
          }, null, 10, Pe))), 256))
        ])) : (openBlock(), createElementBlock("g", Ie, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (a, o) => (openBlock(), createElementBlock("line", {
            x1: a.x1,
            y1: a.y1,
            x2: a.x2,
            y2: a.y2,
            "stroke-width": i.value.mark,
            stroke: r.value >= o ? a.color : e.value.style.chart.layout.inactiveColor,
            "stroke-linecap": "round"
          }, null, 8, Fe))), 256))
        ])),
        e.value.style.chart.percentage.show ? (openBlock(), createElementBlock("text", {
          key: 2,
          x: b.value.x,
          y: b.value.y,
          "font-size": b.value.fontSize,
          fill: e.value.style.chart.layout.ticks.gradient.show && e.value.style.chart.percentage.useGradientColor ? unref(pt)(e.value.style.chart.layout.activeColor, r.value / 100 * (e.value.style.chart.layout.ticks.gradient.shiftHueIntensity / 100)) : e.value.style.chart.percentage.color,
          "font-weight": b.value.bold ? "bold" : "normal",
          "text-anchor": b.value.textAnchor
        }, toDisplayString(unref(nr)(
          e.value.style.chart.percentage.formatter,
          r.value,
          unref(Gt)({
            v: r.value,
            s: "%",
            r: e.value.style.chart.percentage.rounding
          })
        )), 9, ze)) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: l.value }, void 0, true)
      ], 14, we)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Oe, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(U) || unref(j) })), void 0, true)
      ])) : createCommentVNode("", true),
      F.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
    ], 14, Ce));
  }
};
var Ee = s(Se, [["__scopeId", "data-v-9130298e"]]);
export {
  Ee as default
};
//# sourceMappingURL=vue-ui-tiremarks-d6TmSHY7-J7ZSHAE2.js.map
