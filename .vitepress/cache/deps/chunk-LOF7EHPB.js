import {
  u
} from "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/usePrinter-y3d31M4g.js
var te = {
  beforeMount(e, v) {
    e.clickOutsideEvent = function(r) {
      e === r.target || e.contains(r.target) || v.value(r);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
};
var oe = ["title", "onClick", "onKeypress"];
var ne = ["data-open"];
var le = {
  __name: "UserOptions",
  props: {
    hasPdf: {
      type: Boolean,
      default: true
    },
    hasXls: {
      type: Boolean,
      default: true
    },
    hasImg: {
      type: Boolean,
      default: false
    },
    hasLabel: {
      type: Boolean,
      default: false
    },
    isLabelActive: {
      type: Boolean,
      default: false
    },
    hasTable: {
      type: Boolean,
      default: false
    },
    hasSort: {
      type: Boolean,
      default: false
    },
    hasStack: {
      type: Boolean,
      default: false
    },
    hasTooltip: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    isPrinting: {
      type: Boolean,
      default: false
    },
    isImaging: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    uid: {
      type: String
    },
    hasFullscreen: {
      type: Boolean,
      default: false
    },
    chartElement: {
      type: HTMLElement,
      default: null
    },
    isFullscreen: {
      type: Boolean,
      default: false
    },
    isStacked: {
      type: Boolean,
      default: false
    },
    isTooltip: {
      type: Boolean,
      default: false
    },
    hasAnimation: {
      type: Boolean,
      default: false
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    titles: {
      type: Object,
      default() {
        return {};
      }
    },
    showTooltips: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    noOffset: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "right"
    },
    offsetX: {
      type: Number,
      default: 0
    },
    hasAnnotator: {
      type: Boolean,
      default: false
    },
    isAnnotation: {
      type: Boolean,
      default: false
    }
  },
  emits: ["generatePdf", "generateCsv", "generateImage", "toggleTable", "toggleLabels", "toggleSort", "toggleFullscreen", "toggleStack", "toggleTooltip", "toggleAnimation", "toggleAnnotator"],
  setup(e, { emit: v }) {
    const r = e;
    function C() {
      v("generatePdf");
    }
    function S() {
      v("generateCsv");
    }
    function A() {
      v("generateImage");
    }
    const B = ref(false);
    function I() {
      B.value = !B.value, v("toggleTable");
    }
    const g = ref(false), K = ref(true);
    function P() {
      k.value = window.innerWidth > 600, g.value = !g.value, g.value && (K.value = false);
    }
    function V() {
      r.isPrinting || r.isImaging || (g.value = false);
    }
    function j() {
      g.value && V();
    }
    const E = ref(r.isLabelActive);
    function W() {
      E.value = !E.value, v("toggleLabels");
    }
    const M = ref(r.isAnimation);
    function X() {
      M.value = !M.value, v("toggleAnimation");
    }
    const T = computed({
      get: () => r.isAnnotation,
      set: (l) => l
    });
    function z() {
      T.value = !T.value, v("toggleAnnotator");
    }
    function q() {
      v("toggleSort");
    }
    const F = ref(r.isStacked);
    function x() {
      F.value = !F.value, v("toggleStack");
    }
    const O = ref(r.isTooltip);
    function H() {
      O.value = !O.value, v("toggleTooltip");
    }
    const y = ref(false);
    function D(l) {
      r.chartElement && (l === "in" ? (y.value = true, r.chartElement.requestFullscreen(), v("toggleFullscreen", true)) : (y.value = false, document && document.exitFullscreen(), v("toggleFullscreen", false)));
    }
    function N(l) {
      document.fullscreenElement ? y.value = true : y.value = false;
    }
    onMounted(() => {
      document.addEventListener("fullscreenchange", N);
    }), onBeforeUnmount(() => {
      document.removeEventListener("fullscreenchange", N);
    });
    const k = ref(window.innerWidth > 600), n = ref({
      tooltip: false,
      pdf: false,
      csv: false,
      img: false,
      table: false,
      labels: false,
      sort: false,
      stack: false,
      fullscreen: false,
      animation: false,
      annotator: false
    });
    return (l, o) => withDirectives((openBlock(), createElementBlock("div", {
      "data-html2canvas-ignore": "",
      class: "vue-ui-user-options",
      style: normalizeStyle(`z-index: ${e.zIndex}; height: 34px; position: ${y.value ? "fixed" : "absolute"}; top: 0; ${e.position === "right" ? `right:${y.value ? "12px" : "0"}` : `left:${y.value ? "12px" : "0"}`}; padding: 4px; background:transparent;`)
    }, [
      createBaseVNode("div", {
        tabindex: "0",
        title: g.value ? e.titles.close || "" : e.titles.open || "",
        style: normalizeStyle(`width:32px; position: absolute; top: 0;${e.position === "right" ? `right: ${e.offsetX ? e.offsetX : e.noOffset ? 0 : 4}px` : `left: ${e.noOffset ? 0 : 4}px`}; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px;  cursor:pointer; background:transparent`),
        onClick: withModifiers(P, ["stop"]),
        onKeypress: withKeys(P, ["enter"])
      }, [
        createVNode(u, {
          name: g.value ? "close" : "menu",
          stroke: e.color,
          "stroke-width": 2
        }, null, 8, ["name", "stroke"])
      ], 44, oe),
      createBaseVNode("div", {
        "data-open": g.value,
        class: normalizeClass({ "vue-ui-user-options-drawer": true }),
        style: normalizeStyle(`background:${e.backgroundColor}; ${e.position === "right" ? `right: ${e.offsetX ? e.offsetX : e.noOffset ? 0 : 4}px` : `left: ${e.noOffset ? 0 : 4}px`}`)
      }, [
        e.hasTooltip ? (openBlock(), createElementBlock("button", {
          key: 0,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: H,
          onMouseenter: o[0] || (o[0] = (s2) => n.value.tooltip = true),
          onMouseout: o[1] || (o[1] = (s2) => n.value.tooltip = false)
        }, [
          l.$slots.optionTooltip ? renderSlot(l.$slots, "optionTooltip", { key: 0 }, void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            O.value ? (openBlock(), createBlock(u, {
              key: 0,
              name: "tooltip",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : (openBlock(), createBlock(u, {
              key: 1,
              name: "tooltipDisabled",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.tooltip && !l.$slots.optionTooltip ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-left-visible": e.position === "left" && n.value.tooltip, "button-info-right-visible": e.position === "right" && n.value.tooltip }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.tooltip), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasPdf ? (openBlock(), createElementBlock("button", {
          key: 1,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: C,
          onMouseenter: o[2] || (o[2] = (s2) => n.value.pdf = true),
          onMouseout: o[3] || (o[3] = (s2) => n.value.pdf = false)
        }, [
          l.$slots.optionPdf ? renderSlot(l.$slots, "optionPdf", { key: 0 }, void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            e.isPrinting ? (openBlock(), createBlock(u, {
              key: 0,
              name: "spin",
              isSpin: "",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : (openBlock(), createBlock(u, {
              key: 1,
              name: "pdf",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.pdf && !l.$slots.optionPdf ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.pdf, "button-info-left-visible": e.position === "left" && n.value.pdf }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.pdf), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasXls ? (openBlock(), createElementBlock("button", {
          key: 2,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: S,
          onMouseenter: o[4] || (o[4] = (s2) => n.value.csv = true),
          onMouseout: o[5] || (o[5] = (s2) => n.value.csv = false)
        }, [
          l.$slots.optionCsv ? renderSlot(l.$slots, "optionCsv", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: "excel",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["stroke"])),
          k.value && e.titles.csv && !l.$slots.optionCsv ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.csv, "button-info-left-visible": e.position === "left" && n.value.csv }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.csv), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasImg ? (openBlock(), createElementBlock("button", {
          key: 3,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: A,
          onMouseenter: o[6] || (o[6] = (s2) => n.value.img = true),
          onMouseout: o[7] || (o[7] = (s2) => n.value.img = false)
        }, [
          l.$slots.optionImg ? renderSlot(l.$slots, "optionImg", { key: 0 }, void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            e.isImaging ? (openBlock(), createBlock(u, {
              key: 0,
              name: "spin",
              isSpin: "",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : (openBlock(), createBlock(u, {
              key: 1,
              name: "image",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.img && !l.$slots.optionImg ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.img, "button-info-left-visible": e.position === "left" && n.value.img }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.img), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasTable ? (openBlock(), createElementBlock("button", {
          key: 4,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: I,
          onMouseenter: o[8] || (o[8] = (s2) => n.value.table = true),
          onMouseout: o[9] || (o[9] = (s2) => n.value.table = false)
        }, [
          l.$slots.optionTable ? renderSlot(l.$slots, "optionTable", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: B.value ? "tableClose" : "tableOpen",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["name", "stroke"])),
          k.value && e.titles.table && !l.$slots.optionTable ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.table, "button-info-left-visible": e.position === "left" && n.value.table }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.table), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasLabel ? (openBlock(), createElementBlock("button", {
          key: 5,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: W,
          onMouseenter: o[10] || (o[10] = (s2) => n.value.labels = true),
          onMouseout: o[11] || (o[11] = (s2) => n.value.labels = false)
        }, [
          l.$slots.optionLabels ? renderSlot(l.$slots, "optionLabels", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: E.value ? "labelClose" : "labelOpen",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["name", "stroke"])),
          k.value && e.titles.labels && !l.$slots.optionLabels ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.labels, "button-info-left-visible": e.position === "left" && n.value.labels }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.labels), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasSort ? (openBlock(), createElementBlock("button", {
          key: 6,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: q,
          onMouseenter: o[12] || (o[12] = (s2) => n.value.sort = true),
          onMouseout: o[13] || (o[13] = (s2) => n.value.sort = false)
        }, [
          l.$slots.optionSort ? renderSlot(l.$slots, "optionSort", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: "sort",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["stroke"])),
          k.value && e.titles.sort && !l.$slots.optionSort ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.sort, "button-info-left-visible": e.position === "left" && n.value.sort }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.sort), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasStack ? (openBlock(), createElementBlock("button", {
          key: 7,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: x,
          onMouseenter: o[14] || (o[14] = (s2) => n.value.stack = true),
          onMouseout: o[15] || (o[15] = (s2) => n.value.stack = false)
        }, [
          l.$slots.optionStack ? renderSlot(l.$slots, "optionStack", { key: 0 }, void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            F.value ? (openBlock(), createBlock(u, {
              key: 0,
              name: "unstack",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : (openBlock(), createBlock(u, {
              key: 1,
              name: "stack",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.stack && !l.$slots.optionStack ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.stack, "button-info-left-visible": e.position === "left" && n.value.stack }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.stack), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasFullscreen ? (openBlock(), createElementBlock("button", {
          key: 8,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onMouseenter: o[16] || (o[16] = (s2) => n.value.fullscreen = true),
          onMouseout: o[17] || (o[17] = (s2) => n.value.fullscreen = false),
          onClick: o[18] || (o[18] = (s2) => D(y.value ? "out" : "in"))
        }, [
          l.$slots.optionFullscreen ? renderSlot(l.$slots, "optionFullscreen", normalizeProps(mergeProps({ key: 0 }, { toggleFullscreen: D, isFullscreen: y.value })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            y.value ? (openBlock(), createBlock(u, {
              key: 0,
              name: "exitFullscreen",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            y.value ? createCommentVNode("", true) : (openBlock(), createBlock(u, {
              key: 1,
              name: "fullscreen",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.fullscreen && !l.$slots.optionFullscreen ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.fullscreen, "button-info-left-visible": e.position === "left" && n.value.fullscreen }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.fullscreen), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasAnimation ? (openBlock(), createElementBlock("button", {
          key: 9,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onMouseenter: o[19] || (o[19] = (s2) => n.value.animation = true),
          onMouseout: o[20] || (o[20] = (s2) => n.value.animation = false),
          onClick: X
        }, [
          l.$slots.optionAnimation ? renderSlot(l.$slots, "optionAnimation", normalizeProps(mergeProps({ key: 0 }, { toggleAnimation: X, isAnimated: M.value })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            M.value ? (openBlock(), createBlock(u, {
              key: 0,
              name: "play",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            M.value ? createCommentVNode("", true) : (openBlock(), createBlock(u, {
              key: 1,
              name: "pause",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.fullscreen && !l.$slots.optionAnimation ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.animation, "button-info-left-visible": e.position === "left" && n.value.animation }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.animation), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true),
        e.hasAnnotator ? (openBlock(), createElementBlock("button", {
          key: 10,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onMouseenter: o[21] || (o[21] = (s2) => n.value.annotator = true),
          onMouseout: o[22] || (o[22] = (s2) => n.value.annotator = false),
          onClick: z
        }, [
          l.$slots.optionAnnotator ? renderSlot(l.$slots, "optionAnnotator", normalizeProps(mergeProps({ key: 0 }, { toggleAnnotator: z, isAnnotator: T.value })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            T.value ? (openBlock(), createBlock(u, {
              key: 0,
              name: "annotatorDisabled",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            T.value ? createCommentVNode("", true) : (openBlock(), createBlock(u, {
              key: 1,
              name: "annotator",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          k.value && e.titles.annotator && !l.$slots.optionAnnotator ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.annotator, "button-info-left-visible": e.position === "left" && n.value.annotator }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.annotator), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true)
      ], 12, ne)
    ], 4)), [
      [unref(te), j]
    ]);
  }
};
var ae = s(le, [["__scopeId", "data-v-5b704ad2"]]);
function re({
  elementId: e,
  fileName: v,
  canPrint: r = true
}) {
  const C = ref(false), S = ref(false), A = ref(null);
  async function B() {
    !r || C.value || (C.value = true, clearTimeout(A.value), A.value = setTimeout(async () => {
      if (r)
        try {
          const { default: g } = await import("./pdf-B7oVat64-XW44TS2W.js");
          await g({
            domElement: document.getElementById(e),
            fileName: v
          });
        } catch (g) {
          console.error("Error generating PDF:", g);
        } finally {
          C.value = false;
        }
    }, 100));
  }
  async function I() {
    !r || S.value || (S.value = true, clearTimeout(A.value), A.value = setTimeout(async () => {
      if (r)
        try {
          const { default: g } = await import("./img-DGzWcJ4Y-VGPVEA2Q.js");
          await g({
            domElement: document.getElementById(e),
            fileName: v,
            format: "png"
          });
        } catch (g) {
          console.error("Error generating image:", g);
        } finally {
          S.value = false;
        }
    }, 100));
  }
  return {
    generatePdf: B,
    generateImage: I,
    isPrinting: C,
    isImaging: S
  };
}

export {
  te,
  ae,
  re
};
//# sourceMappingURL=chunk-LOF7EHPB.js.map
