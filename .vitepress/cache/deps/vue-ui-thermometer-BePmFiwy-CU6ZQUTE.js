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
  R,
  Xt,
  cr,
  et,
  j,
  k,
  nr,
  oe,
  or,
  qt
} from "./chunk-TG4LWCJY.js";
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
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-thermometer-BePmFiwy.js
var qe = ["id"];
var Le = {
  key: 0,
  style: "width:100%"
};
var Te = ["xmlns", "viewBox"];
var Ge2 = {
  id: "vueUiPill",
  clipPathUnits: "objectBoundingBox"
};
var Ve = ["fill"];
var We = ["id"];
var Ee = ["stop-color"];
var ze = ["stop-color"];
var Be = ["stop-color"];
var je = { "clip-path": "url(#vueUiPill)" };
var Ae = ["x", "y", "height", "width"];
var De = ["x", "y", "height", "width", "fill"];
var He = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Xe = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Re = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Je = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Ke = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Qe = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Ze = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var et2 = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var tt = ["x", "y", "height", "width"];
var st = ["y", "x", "fill", "font-size", "font-weight"];
var lt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var at = {
  __name: "vue-ui-thermometer",
  props: {
    dataset: {
      type: Object,
      default() {
        return {};
      }
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(b, { expose: Q }) {
    const a = b;
    useCssVars((s2) => ({
      ff9f54a6: ae.value,
      "727be881": le.value,
      "673ba9ae": se2.value
    }));
    const { vue_ui_thermometer: Z } = oe(), I = computed(() => !!a.dataset && Object.keys(a.dataset).length);
    onMounted(() => {
      L();
    });
    function L() {
      Xt(a.dataset) ? Kt({
        componentName: "VueUiThermometer",
        type: "dataset"
      }) : qt({
        datasetObject: a.dataset,
        requiredAttributes: ["value", "from", "to"]
      }).forEach((s2) => {
        Kt({
          componentName: "VueUiThermometer",
          type: "datasetAttribute",
          property: s2
        });
      });
    }
    const g = ref(Lt()), T = ref(null), G = ref(0), V = ref(0), e = computed({
      get: () => W(),
      set: (s2) => s2
    });
    function W() {
      const s2 = c({
        userConfig: a.config,
        defaultConfig: Z
      });
      return s2.theme ? {
        ...c({
          userConfig: Ge.vue_ui_thermometer[s2.theme] || a.config,
          defaultConfig: s2
        }),
        customPalette: R[s2.theme] || et
      } : s2;
    }
    watch(() => a.config, (s2) => {
      e.value = W(), L(), V.value += 1;
    }, { deep: true });
    const { isPrinting: E, isImaging: z, generatePdf: B, generateImage: j2 } = se({
      elementId: `thermometer__${g.value}`,
      fileName: e.value.style.title.text || "vue-ui-thermometer"
    }), w = computed(() => or(e.value.customPalette)), ee = computed(() => e.value.style.chart.thermometer.width), y = computed(() => a.dataset.steps || 10), i = ref({
      top: e.value.style.chart.padding.top,
      left: e.value.style.chart.padding.left,
      right: e.value.style.chart.padding.right,
      bottom: e.value.style.chart.padding.bottom
    });
    function C(s2, r, t) {
      const u = [], N = A(s2), S = A(r);
      for (let k2 = 0; k2 < t; k2++) {
        const ue = Y(N.red, S.red, k2, t), ne = Y(N.green, S.green, k2, t), ie2 = Y(N.blue, S.blue, k2, t), ce = `#${O(ue)}${O(ne)}${O(ie2)}`;
        u.push(ce);
      }
      return u;
    }
    function A(s2) {
      const r = s2.slice(1);
      return {
        red: parseInt(r.slice(0, 2), 16),
        green: parseInt(r.slice(2, 4), 16),
        blue: parseInt(r.slice(4, 6), 16)
      };
    }
    function Y(s2, r, t, u) {
      return Math.round(s2 + (r - s2) * t / u);
    }
    function O(s2) {
      return s2.toString(16).padStart(2, "0");
    }
    const l = computed(() => {
      const s2 = ee.value + i.value.left + i.value.right, r = e.value.style.chart.height;
      return {
        width: s2,
        left: i.value.left,
        right: s2 - i.value.right,
        top: i.value.top,
        bottom: r - i.value.bottom,
        height: r
      };
    }), te = computed(() => l.value), M = computed(() => {
      const s2 = k(a.dataset.from) < 0 ? Math.abs(k(a.dataset.from)) : k(a.dataset.from), r = k(a.dataset.to) < 0 ? Math.abs(k(a.dataset.to)) : k(a.dataset.to);
      let t = 0;
      return k(a.dataset.to) > 0 ? t = s2 + r : s2 > r ? t = s2 - r : t = r - s2, (1 - (Math.abs(k(a.dataset.from)) + k(a.dataset.value)) / t) * (l.value.height - i.value.top - i.value.bottom);
    }), se2 = computed(() => `${M.value}px`), le = computed(() => `${l.value.height - e.value.style.chart.padding.bottom - i.value.top}px`), ae = computed(() => `${e.value.style.chart.animation.speedMs}ms`), oe2 = computed(() => {
      if (a.dataset.colors) {
        if (!a.dataset.colors.from)
          return C(w.value[0] || et[0], j(a.dataset.colors.to), y.value || 10);
        if (!a.dataset.colors.to)
          return C(j(a.dataset.colors.from), w.value[1] || et[1], y.value || 10);
      } else
        return C(w.value[1] || et[1], w.value[0] || et[0], y.value || 10);
      return C(j(a.dataset.colors.from), j(a.dataset.colors.to), y.value || 10);
    }), D = computed(() => {
      const s2 = [];
      let r = 0;
      const t = l.value.height - i.value.top - i.value.bottom;
      for (let u = 0; u < t - 1; u += t / y.value)
        s2.push({
          x: l.value.left,
          y: l.value.top + u,
          qYLess: l.value.top + u + t / y.value / 4,
          halfY: l.value.top + u + t / y.value / 2,
          qYMore: l.value.top + u + t / y.value / 4 * 3,
          color: oe2.value[r],
          height: t / y.value
        }), r += 1;
      return s2;
    }), p2 = ref(false);
    function re(s2) {
      p2.value = s2, G.value += 1;
    }
    return Q({
      generatePdf: B,
      generateImage: j2
    }), (s2, r) => (openBlock(), createElementBlock("div", {
      ref_key: "thermoChart",
      ref: T,
      class: normalizeClass(`vue-ui-thermometer ${p2.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`width:100%;background:${e.value.style.chart.backgroundColor};color:${e.value.style.chart.color};font-family:${e.value.style.fontFamily}`),
      id: `thermometer__${g.value}`
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", Le, [
        (openBlock(), createBlock(x, {
          key: `title_${V.value}`,
          config: {
            title: {
              cy: "thermometer-div-title",
              ...e.value.style.title
            },
            subtitle: {
              cy: "thermometer-div-subtitle",
              ...e.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && I.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_options_${G.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(z),
        isPrinting: unref(E),
        uid: g.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        hasXls: false,
        isFullscreen: p2.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: T.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: re,
        onGeneratePdf: unref(B),
        onGenerateImage: unref(j2)
      }, createSlots({ _: 2 }, [
        s2.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(s2.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        s2.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(s2.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        s2.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: u }) => [
            renderSlot(s2.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: u })), void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      I.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": p2.value, "vue-data-ui-fulscreen--off": !p2.value }),
        width: "100%",
        viewBox: `0 0 ${l.value.width} ${l.value.height}`,
        style: "background:transparent"
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("clipPath", Ge2, [
            createBaseVNode("rect", {
              x: "0",
              y: "0",
              width: "1",
              height: "1",
              rx: "0.5",
              ry: "0.07",
              fill: e.value.style.chart.backgroundColor
            }, null, 8, Ve)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (t, u) => (openBlock(), createElementBlock("linearGradient", {
            id: `vueUiThermometerGradient_${u}_${g.value}`,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": t.color
            }, null, 8, Ee),
            createBaseVNode("stop", {
              offset: "50%",
              "stop-color": unref(cr)(t.color, 100 - e.value.style.chart.graduations.gradient.intensity)
            }, null, 8, ze),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": t.color
            }, null, 8, Be)
          ], 8, We))), 256))
        ]),
        createBaseVNode("g", je, [
          createBaseVNode("rect", {
            x: l.value.left,
            y: l.value.top,
            height: l.value.height - i.value.top - i.value.bottom,
            width: l.value.width - i.value.left - i.value.right,
            fill: "#FFFFFF"
          }, null, 8, Ae),
          (openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (t, u) => (openBlock(), createElementBlock("g", {
            key: `graduation_${u}`
          }, [
            createBaseVNode("rect", {
              x: t.x,
              y: t.y,
              height: t.height,
              width: l.value.width - e.value.style.chart.padding.left - e.value.style.chart.padding.right,
              fill: e.value.style.chart.graduations.gradient.show ? `url(#vueUiThermometerGradient_${u}_${g.value})` : t.color,
              "shape-rendering": "crispEdges"
            }, null, 8, De),
            e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: t.x,
              x2: t.x + 10,
              y1: t.y,
              y2: t.y,
              "stroke-width": e.value.style.chart.graduations.strokeWidth,
              stroke: e.value.style.chart.graduations.stroke,
              "stroke-linecap": "round"
            }, null, 8, He)) : createCommentVNode("", true),
            e.value.style.chart.graduations.showIntermediate ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: t.x,
                x2: t.x + 5,
                y1: t.halfY,
                y2: t.halfY,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, Xe)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 1,
                x1: t.x,
                x2: t.x + 2.5,
                y1: t.qYLess,
                y2: t.qYLess,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, Re)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 2,
                x1: t.x,
                x2: t.x + 2.5,
                y1: t.qYMore,
                y2: t.qYMore,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, Je)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
              key: 2,
              x1: l.value.right,
              x2: l.value.right - 10,
              y1: t.y,
              y2: t.y,
              "stroke-width": e.value.style.chart.graduations.strokeWidth,
              stroke: e.value.style.chart.graduations.stroke,
              "stroke-linecap": "round"
            }, null, 8, Ke)) : createCommentVNode("", true),
            e.value.style.chart.graduations.showIntermediate ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: l.value.right,
                x2: l.value.right - 5,
                y1: t.halfY,
                y2: t.halfY,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, Qe)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 1,
                x1: l.value.right,
                x2: l.value.right - 2.5,
                y1: t.qYLess,
                y2: t.qYLess,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, Ze)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 2,
                x1: l.value.right,
                x2: l.value.right - 2.5,
                y1: t.qYMore,
                y2: t.qYMore,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, et2)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ]))), 128)),
          createBaseVNode("rect", {
            class: normalizeClass({ "vue-ui-thermometer-temperature": e.value.style.chart.animation.use }),
            x: l.value.left,
            y: l.value.top,
            height: M.value,
            width: l.value.width - e.value.style.chart.padding.left - e.value.style.chart.padding.right,
            fill: "#FFFFFF66"
          }, null, 10, tt)
        ]),
        createBaseVNode("text", {
          class: normalizeClass({ "vue-ui-thermometer-temperature-value": e.value.style.chart.animation.use }),
          y: M.value + l.value.top + e.value.style.chart.label.fontSize / 3,
          x: l.value.left - 10,
          "text-anchor": "end",
          fill: e.value.style.chart.label.color,
          "font-size": e.value.style.chart.label.fontSize,
          "font-weight": e.value.style.chart.label.bold ? "bold" : "normal"
        }, toDisplayString(unref(nr)(
          e.value.style.chart.label.formatter,
          b.dataset.value,
          unref(Gt)({
            p: e.value.style.chart.label.prefix,
            v: b.dataset.value,
            s: e.value.style.chart.label.suffix,
            r: e.value.style.chart.label.rounding
          }),
          { datapoint: b.dataset }
        )), 11, st),
        renderSlot(s2.$slots, "svg", { svg: te.value }, void 0, true)
      ], 10, Te)) : createCommentVNode("", true),
      s2.$slots.watermark ? (openBlock(), createElementBlock("div", lt, [
        renderSlot(s2.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(E) || unref(z) })), void 0, true)
      ])) : createCommentVNode("", true),
      I.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "thermometer",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            thermometer: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"]))
    ], 14, qe));
  }
};
var vt = s(at, [["__scopeId", "data-v-cef2c8d4"]]);
export {
  vt as default
};
//# sourceMappingURL=vue-ui-thermometer-BePmFiwy-CU6ZQUTE.js.map
