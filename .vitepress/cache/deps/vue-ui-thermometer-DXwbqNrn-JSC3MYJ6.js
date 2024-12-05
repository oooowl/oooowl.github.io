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
  Q,
  R,
  Zt,
  dr,
  ir,
  jt,
  k,
  qt,
  rt,
  te,
  tr
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-thermometer-DXwbqNrn.js
var Ge = ["id"];
var Ve = {
  key: 1,
  ref: "noTitle",
  class: "vue-data-ui-no-title-space",
  style: "height:36px; width: 100%;background:transparent"
};
var We = {
  key: 2,
  style: "width:100%"
};
var Ee = ["xmlns", "viewBox"];
var ze = {
  id: "vueUiPill",
  clipPathUnits: "objectBoundingBox"
};
var Be = ["fill"];
var je = ["id"];
var De = ["stop-color"];
var He2 = ["stop-color"];
var Xe = ["stop-color"];
var Re = { "clip-path": "url(#vueUiPill)" };
var Je = ["x", "y", "height", "width"];
var Ke = ["x", "y", "height", "width", "fill"];
var Qe = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var Ze = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var et = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var tt = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var st = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var ot = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var at = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var lt = ["x1", "x2", "y1", "y2", "stroke-width", "stroke"];
var rt2 = ["x", "y", "height", "width"];
var ut = ["y", "x", "fill", "font-size", "font-weight"];
var nt = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var it = {
  key: 6,
  ref: "source",
  dir: "auto"
};
var ct = {
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
  setup(x2, { expose: ee }) {
    const a = x2;
    useCssVars((s2) => ({
      "000db494": ue.value,
      "2865ccd0": re2.value,
      10843485: le.value
    }));
    const { vue_ui_thermometer: te2 } = te(), Y = computed(() => !!a.dataset && Object.keys(a.dataset).length);
    onMounted(() => {
      W();
    });
    function W() {
      jt(a.dataset) ? qt({
        componentName: "VueUiThermometer",
        type: "dataset"
      }) : Zt({
        datasetObject: a.dataset,
        requiredAttributes: ["value", "from", "to"]
      }).forEach((s2) => {
        qt({
          componentName: "VueUiThermometer",
          type: "datasetAttribute",
          property: s2
        });
      });
    }
    const p2 = ref(Dt()), N = ref(null), E = ref(0), z = ref(0), e = computed({
      get: () => B(),
      set: (s2) => s2
    });
    function B() {
      const s2 = c({
        userConfig: a.config,
        defaultConfig: te2
      });
      return s2.theme ? {
        ...c({
          userConfig: He.vue_ui_thermometer[s2.theme] || a.config,
          defaultConfig: s2
        }),
        customPalette: R[s2.theme] || rt
      } : s2;
    }
    watch(() => a.config, (s2) => {
      e.value = B(), W(), z.value += 1;
    }, { deep: true });
    const { isPrinting: j, isImaging: D, generatePdf: H, generateImage: X } = re({
      elementId: `thermometer__${p2.value}`,
      fileName: e.value.style.title.text || "vue-ui-thermometer"
    }), se = computed(() => e.value.userOptions.show && !e.value.style.title.text), w = computed(() => tr(e.value.customPalette)), oe = computed(() => e.value.style.chart.thermometer.width), y = computed(() => a.dataset.steps || 10), c2 = ref({
      top: e.value.style.chart.padding.top,
      left: e.value.style.chart.padding.left,
      right: e.value.style.chart.padding.right,
      bottom: e.value.style.chart.padding.bottom
    });
    function C(s2, n, t) {
      const r = [], q = R2(s2), L = R2(n);
      for (let b = 0; b < t; b++) {
        const ce = M(q.red, L.red, b, t), he = M(q.green, L.green, b, t), de = M(q.blue, L.blue, b, t), ve = `#${T(ce)}${T(he)}${T(de)}`;
        r.push(ve);
      }
      return r;
    }
    function R2(s2) {
      const n = s2.slice(1);
      return {
        red: parseInt(n.slice(0, 2), 16),
        green: parseInt(n.slice(2, 4), 16),
        blue: parseInt(n.slice(4, 6), 16)
      };
    }
    function M(s2, n, t, r) {
      return Math.round(s2 + (n - s2) * t / r);
    }
    function T(s2) {
      return s2.toString(16).padStart(2, "0");
    }
    const o = computed(() => {
      const s2 = oe.value + c2.value.left + c2.value.right, n = e.value.style.chart.height;
      return {
        width: s2,
        left: c2.value.left,
        right: s2 - c2.value.right,
        top: c2.value.top,
        bottom: n - c2.value.bottom,
        height: n
      };
    }), ae2 = computed(() => o.value), S = computed(() => {
      const s2 = k(a.dataset.from) < 0 ? Math.abs(k(a.dataset.from)) : k(a.dataset.from), n = k(a.dataset.to) < 0 ? Math.abs(k(a.dataset.to)) : k(a.dataset.to);
      let t = 0;
      return k(a.dataset.to) > 0 ? t = s2 + n : s2 > n ? t = s2 - n : t = n - s2, (1 - (Math.abs(k(a.dataset.from)) + k(a.dataset.value)) / t) * (o.value.height - c2.value.top - c2.value.bottom);
    }), le = computed(() => `${S.value}px`), re2 = computed(() => `${o.value.height - e.value.style.chart.padding.bottom - c2.value.top}px`), ue = computed(() => `${e.value.style.chart.animation.speedMs}ms`), ne = computed(() => {
      if (a.dataset.colors) {
        if (!a.dataset.colors.from)
          return C(w.value[0] || rt[0], Q(a.dataset.colors.to), y.value || 10);
        if (!a.dataset.colors.to)
          return C(Q(a.dataset.colors.from), w.value[1] || rt[1], y.value || 10);
      } else
        return C(w.value[1] || rt[1], w.value[0] || rt[0], y.value || 10);
      return C(Q(a.dataset.colors.from), Q(a.dataset.colors.to), y.value || 10);
    }), J = computed(() => {
      const s2 = [];
      let n = 0;
      const t = o.value.height - c2.value.top - c2.value.bottom;
      for (let r = 0; r < t - 1; r += t / y.value)
        s2.push({
          x: o.value.left,
          y: o.value.top + r,
          qYLess: o.value.top + r + t / y.value / 4,
          halfY: o.value.top + r + t / y.value / 2,
          qYMore: o.value.top + r + t / y.value / 4 * 3,
          color: ne.value[n],
          height: t / y.value
        }), n += 1;
      return s2;
    }), k2 = ref(false);
    function ie(s2) {
      k2.value = s2, E.value += 1;
    }
    const $ = ref(false);
    function U() {
      $.value = !$.value;
    }
    return ee({
      generatePdf: H,
      generateImage: X,
      toggleAnnotator: U
    }), (s2, n) => (openBlock(), createElementBlock("div", {
      ref_key: "thermoChart",
      ref: N,
      class: normalizeClass(`vue-ui-thermometer ${k2.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`width:100%;background:${e.value.style.chart.backgroundColor};color:${e.value.style.chart.color};font-family:${e.value.style.fontFamily}`),
      id: `thermometer__${p2.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: N.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: $.value,
        onClose: U
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      se.value ? (openBlock(), createElementBlock("div", Ve, null, 512)) : createCommentVNode("", true),
      e.value.style.title.text ? (openBlock(), createElementBlock("div", We, [
        (openBlock(), createBlock(x, {
          key: `title_${z.value}`,
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
      e.value.userOptions.show && Y.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_options_${E.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(D),
        isPrinting: unref(j),
        uid: p2.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        hasXls: false,
        isFullscreen: k2.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: N.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: $.value,
        onToggleFullscreen: ie,
        onGeneratePdf: unref(H),
        onGenerateImage: unref(X),
        onToggleAnnotator: U
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
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: r }) => [
            renderSlot(s2.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: r })), void 0, true)
          ]),
          key: "2"
        } : void 0,
        s2.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: r }) => [
            renderSlot(s2.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: r })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      Y.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": k2.value, "vue-data-ui-fulscreen--off": !k2.value }),
        width: "100%",
        viewBox: `0 0 ${o.value.width} ${o.value.height}`,
        style: "background:transparent"
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("clipPath", ze, [
            createBaseVNode("rect", {
              x: "0",
              y: "0",
              width: "1",
              height: "1",
              rx: "0.5",
              ry: "0.07",
              fill: e.value.style.chart.backgroundColor
            }, null, 8, Be)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(J.value, (t, r) => (openBlock(), createElementBlock("linearGradient", {
            id: `vueUiThermometerGradient_${r}_${p2.value}`,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": t.color
            }, null, 8, De),
            createBaseVNode("stop", {
              offset: "50%",
              "stop-color": unref(dr)(t.color, 100 - e.value.style.chart.graduations.gradient.intensity)
            }, null, 8, He2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": t.color
            }, null, 8, Xe)
          ], 8, je))), 256))
        ]),
        createBaseVNode("g", Re, [
          createBaseVNode("rect", {
            x: o.value.left,
            y: o.value.top,
            height: o.value.height - c2.value.top - c2.value.bottom,
            width: o.value.width - c2.value.left - c2.value.right,
            fill: "#FFFFFF"
          }, null, 8, Je),
          (openBlock(true), createElementBlock(Fragment, null, renderList(J.value, (t, r) => (openBlock(), createElementBlock("g", {
            key: `graduation_${r}`
          }, [
            createBaseVNode("rect", {
              x: t.x,
              y: t.y,
              height: t.height,
              width: o.value.width - e.value.style.chart.padding.left - e.value.style.chart.padding.right,
              fill: e.value.style.chart.graduations.gradient.show ? `url(#vueUiThermometerGradient_${r}_${p2.value})` : t.color,
              "shape-rendering": "crispEdges"
            }, null, 8, Ke),
            e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: t.x,
              x2: t.x + 10,
              y1: t.y,
              y2: t.y,
              "stroke-width": e.value.style.chart.graduations.strokeWidth,
              stroke: e.value.style.chart.graduations.stroke,
              "stroke-linecap": "round"
            }, null, 8, Qe)) : createCommentVNode("", true),
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
              }, null, 8, Ze)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 1,
                x1: t.x,
                x2: t.x + 2.5,
                y1: t.qYLess,
                y2: t.qYLess,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, et)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "left"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 2,
                x1: t.x,
                x2: t.x + 2.5,
                y1: t.qYMore,
                y2: t.qYMore,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, tt)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
              key: 2,
              x1: o.value.right,
              x2: o.value.right - 10,
              y1: t.y,
              y2: t.y,
              "stroke-width": e.value.style.chart.graduations.strokeWidth,
              stroke: e.value.style.chart.graduations.stroke,
              "stroke-linecap": "round"
            }, null, 8, st)) : createCommentVNode("", true),
            e.value.style.chart.graduations.showIntermediate ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: o.value.right,
                x2: o.value.right - 5,
                y1: t.halfY,
                y2: t.halfY,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, ot)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 1,
                x1: o.value.right,
                x2: o.value.right - 2.5,
                y1: t.qYLess,
                y2: t.qYLess,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, at)) : createCommentVNode("", true),
              e.value.style.chart.graduations.show && ["both", "right"].includes(e.value.style.chart.graduations.sides) ? (openBlock(), createElementBlock("line", {
                key: 2,
                x1: o.value.right,
                x2: o.value.right - 2.5,
                y1: t.qYMore,
                y2: t.qYMore,
                "stroke-width": e.value.style.chart.graduations.strokeWidth / 2,
                stroke: e.value.style.chart.graduations.stroke,
                "stroke-linecap": "round"
              }, null, 8, lt)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ]))), 128)),
          createBaseVNode("rect", {
            class: normalizeClass({ "vue-ui-thermometer-temperature": e.value.style.chart.animation.use }),
            x: o.value.left,
            y: o.value.top,
            height: S.value,
            width: o.value.width - e.value.style.chart.padding.left - e.value.style.chart.padding.right,
            fill: "#FFFFFF66"
          }, null, 10, rt2)
        ]),
        createBaseVNode("text", {
          class: normalizeClass({ "vue-ui-thermometer-temperature-value": e.value.style.chart.animation.use }),
          y: S.value + o.value.top + e.value.style.chart.label.fontSize / 3,
          x: o.value.left - 10,
          "text-anchor": "end",
          fill: e.value.style.chart.label.color,
          "font-size": e.value.style.chart.label.fontSize,
          "font-weight": e.value.style.chart.label.bold ? "bold" : "normal"
        }, toDisplayString(unref(ir)(
          e.value.style.chart.label.formatter,
          x2.dataset.value,
          unref(Ht)({
            p: e.value.style.chart.label.prefix,
            v: x2.dataset.value,
            s: e.value.style.chart.label.suffix,
            r: e.value.style.chart.label.rounding
          }),
          { datapoint: x2.dataset }
        )), 11, ut),
        renderSlot(s2.$slots, "svg", { svg: ae2.value }, void 0, true)
      ], 10, Ee)) : createCommentVNode("", true),
      s2.$slots.watermark ? (openBlock(), createElementBlock("div", nt, [
        renderSlot(s2.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(j) || unref(D) })), void 0, true)
      ])) : createCommentVNode("", true),
      s2.$slots.source ? (openBlock(), createElementBlock("div", it, [
        renderSlot(s2.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      Y.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
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
    ], 14, Ge));
  }
};
var bt = s(ct, [["__scopeId", "data-v-8a73571f"]]);
export {
  bt as default
};
//# sourceMappingURL=vue-ui-thermometer-DXwbqNrn-JSC3MYJ6.js.map
