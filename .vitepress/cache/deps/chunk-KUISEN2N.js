import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Fragment,
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/usePrinter-8ofTb2MJ.js
var p = {
  beforeMount(e, f) {
    e.clickOutsideEvent = function(a) {
      e === a.target || e.contains(a.target) || f.value(a);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
};
var _ = ["title", "onClick", "onKeypress"];
var ee = ["data-open"];
var te = {
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
    }
  },
  emits: ["generatePdf", "generateCsv", "generateImage", "toggleTable", "toggleLabels", "toggleSort", "toggleFullscreen", "toggleStack", "toggleTooltip", "toggleAnimation"],
  setup(e, { emit: f }) {
    const a = e;
    function h() {
      f("generatePdf");
    }
    function C() {
      f("generateCsv");
    }
    function S() {
      f("generateImage");
    }
    const T = ref(false);
    function I() {
      T.value = !T.value, f("toggleTable");
    }
    const v = ref(false), N = ref(true);
    function L() {
      c.value = window.innerWidth > 600, v.value = !v.value, v.value && (N.value = false);
    }
    function U() {
      a.isPrinting || a.isImaging || (v.value = false);
    }
    function x() {
      v.value && U();
    }
    const E = ref(a.isLabelActive);
    function K() {
      E.value = !E.value, f("toggleLabels");
    }
    const M = ref(a.isAnimation);
    function w() {
      M.value = !M.value, f("toggleAnimation");
    }
    function V() {
      f("toggleSort");
    }
    const F = ref(a.isStacked);
    function j() {
      F.value = !F.value, f("toggleStack");
    }
    const O = ref(a.isTooltip);
    function W() {
      O.value = !O.value, f("toggleTooltip");
    }
    const k = ref(false);
    function A(l) {
      a.chartElement && (l === "in" ? (k.value = true, a.chartElement.requestFullscreen(), f("toggleFullscreen", true)) : (k.value = false, document && document.exitFullscreen(), f("toggleFullscreen", false)));
    }
    function P(l) {
      document.fullscreenElement ? k.value = true : k.value = false;
    }
    onMounted(() => {
      document.addEventListener("fullscreenchange", P);
    }), onBeforeUnmount(() => {
      document.removeEventListener("fullscreenchange", P);
    });
    const c = ref(window.innerWidth > 600), n = ref({
      tooltip: false,
      pdf: false,
      csv: false,
      img: false,
      table: false,
      labels: false,
      sort: false,
      stack: false,
      fullscreen: false,
      animation: false
    });
    return (l, o) => withDirectives((openBlock(), createElementBlock("div", {
      "data-html2canvas-ignore": "",
      class: "vue-ui-user-options",
      style: normalizeStyle(`z-index: ${e.zIndex}; height: 34px; position: ${k.value ? "fixed" : "absolute"}; top: 0; ${e.position === "right" ? `right:${k.value ? "12px" : "0"}` : `left:${k.value ? "12px" : "0"}`}; padding: 4px; background:transparent;`)
    }, [
      createBaseVNode("div", {
        tabindex: "0",
        title: v.value ? e.titles.close || "" : e.titles.open || "",
        style: normalizeStyle(`width:32px; position: absolute; top: 0;${e.position === "right" ? `right: ${e.offsetX ? e.offsetX : e.noOffset ? 0 : 4}px` : `left: ${e.noOffset ? 0 : 4}px`}; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px;  cursor:pointer; background:transparent`),
        onClick: withModifiers(L, ["stop"]),
        onKeypress: withKeys(L, ["enter"])
      }, [
        createVNode(u, {
          name: v.value ? "close" : "menu",
          stroke: e.color,
          "stroke-width": 2
        }, null, 8, ["name", "stroke"])
      ], 44, _),
      createBaseVNode("div", {
        "data-open": v.value,
        class: normalizeClass({ "vue-ui-user-options-drawer": true }),
        style: normalizeStyle(`background:${e.backgroundColor}; ${e.position === "right" ? `right: ${e.offsetX ? e.offsetX : e.noOffset ? 0 : 4}px` : `left: ${e.noOffset ? 0 : 4}px`}`)
      }, [
        e.hasTooltip ? (openBlock(), createElementBlock("button", {
          key: 0,
          tabindex: "0",
          class: "vue-ui-user-options-button",
          onClick: W,
          onMouseenter: o[0] || (o[0] = (u2) => n.value.tooltip = true),
          onMouseout: o[1] || (o[1] = (u2) => n.value.tooltip = false)
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
          c.value && e.titles.tooltip && !l.$slots.optionTooltip ? (openBlock(), createElementBlock("div", {
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
          onClick: h,
          onMouseenter: o[2] || (o[2] = (u2) => n.value.pdf = true),
          onMouseout: o[3] || (o[3] = (u2) => n.value.pdf = false)
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
          c.value && e.titles.pdf && !l.$slots.optionPdf ? (openBlock(), createElementBlock("div", {
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
          onClick: C,
          onMouseenter: o[4] || (o[4] = (u2) => n.value.csv = true),
          onMouseout: o[5] || (o[5] = (u2) => n.value.csv = false)
        }, [
          l.$slots.optionCsv ? renderSlot(l.$slots, "optionCsv", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: "excel",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["stroke"])),
          c.value && e.titles.csv && !l.$slots.optionCsv ? (openBlock(), createElementBlock("div", {
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
          onClick: S,
          onMouseenter: o[6] || (o[6] = (u2) => n.value.img = true),
          onMouseout: o[7] || (o[7] = (u2) => n.value.img = false)
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
          c.value && e.titles.img && !l.$slots.optionImg ? (openBlock(), createElementBlock("div", {
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
          onMouseenter: o[8] || (o[8] = (u2) => n.value.table = true),
          onMouseout: o[9] || (o[9] = (u2) => n.value.table = false)
        }, [
          l.$slots.optionTable ? renderSlot(l.$slots, "optionTable", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: T.value ? "tableClose" : "tableOpen",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["name", "stroke"])),
          c.value && e.titles.table && !l.$slots.optionTable ? (openBlock(), createElementBlock("div", {
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
          onClick: K,
          onMouseenter: o[10] || (o[10] = (u2) => n.value.labels = true),
          onMouseout: o[11] || (o[11] = (u2) => n.value.labels = false)
        }, [
          l.$slots.optionLabels ? renderSlot(l.$slots, "optionLabels", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: E.value ? "labelClose" : "labelOpen",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["name", "stroke"])),
          c.value && e.titles.labels && !l.$slots.optionLabels ? (openBlock(), createElementBlock("div", {
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
          onClick: V,
          onMouseenter: o[12] || (o[12] = (u2) => n.value.sort = true),
          onMouseout: o[13] || (o[13] = (u2) => n.value.sort = false)
        }, [
          l.$slots.optionSort ? renderSlot(l.$slots, "optionSort", { key: 0 }, void 0, true) : (openBlock(), createBlock(u, {
            key: 1,
            name: "sort",
            stroke: e.color,
            style: { "pointer-events": "none" }
          }, null, 8, ["stroke"])),
          c.value && e.titles.sort && !l.$slots.optionSort ? (openBlock(), createElementBlock("div", {
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
          onClick: j,
          onMouseenter: o[14] || (o[14] = (u2) => n.value.stack = true),
          onMouseout: o[15] || (o[15] = (u2) => n.value.stack = false)
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
          c.value && e.titles.stack && !l.$slots.optionStack ? (openBlock(), createElementBlock("div", {
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
          onMouseenter: o[16] || (o[16] = (u2) => n.value.fullscreen = true),
          onMouseout: o[17] || (o[17] = (u2) => n.value.fullscreen = false),
          onClick: o[18] || (o[18] = (u2) => A(k.value ? "out" : "in"))
        }, [
          l.$slots.optionFullscreen ? renderSlot(l.$slots, "optionFullscreen", normalizeProps(mergeProps({ key: 0 }, { toggleFullscreen: A, isFullscreen: k.value })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            k.value ? (openBlock(), createBlock(u, {
              key: 0,
              name: "exitFullscreen",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            k.value ? createCommentVNode("", true) : (openBlock(), createBlock(u, {
              key: 1,
              name: "fullscreen",
              stroke: e.color,
              style: { "pointer-events": "none" }
            }, null, 8, ["stroke"]))
          ], 64)),
          c.value && e.titles.fullscreen && !l.$slots.optionFullscreen ? (openBlock(), createElementBlock("div", {
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
          onMouseenter: o[19] || (o[19] = (u2) => n.value.animation = true),
          onMouseout: o[20] || (o[20] = (u2) => n.value.animation = false),
          onClick: w
        }, [
          l.$slots.optionAnimation ? renderSlot(l.$slots, "optionAnimation", normalizeProps(mergeProps({ key: 0 }, { toggleAnimation: w, isAnimated: M.value })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
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
          c.value && e.titles.fullscreen && !l.$slots.optionAnimation ? (openBlock(), createElementBlock("div", {
            key: 2,
            dir: "auto",
            class: normalizeClass({ "button-info-left": e.position === "left", "button-info-right": e.position === "right", "button-info-right-visible": e.position === "right" && n.value.animation, "button-info-left-visible": e.position === "left" && n.value.animation }),
            style: normalizeStyle({ background: e.backgroundColor, color: e.color })
          }, toDisplayString(e.titles.animation), 7)) : createCommentVNode("", true)
        ], 32)) : createCommentVNode("", true)
      ], 12, ee)
    ], 4)), [
      [unref(p), x]
    ]);
  }
};
var ie = s(te, [["__scopeId", "data-v-88cd630d"]]);
function se({
  elementId: e,
  fileName: f,
  canPrint: a = true
}) {
  const h = ref(false), C = ref(false), S = ref(null);
  async function T() {
    !a || h.value || (h.value = true, clearTimeout(S.value), S.value = setTimeout(async () => {
      if (a)
        try {
          const { default: v } = await import("./pdf-B7oVat64-W35DZM3E.js");
          await v({
            domElement: document.getElementById(e),
            fileName: f
          });
        } catch (v) {
          console.error("Error generating PDF:", v);
        } finally {
          h.value = false;
        }
    }, 100));
  }
  async function I() {
    !a || C.value || (C.value = true, clearTimeout(S.value), S.value = setTimeout(async () => {
      if (a)
        try {
          const { default: v } = await import("./img-DGzWcJ4Y-J5AGXZ6C.js");
          await v({
            domElement: document.getElementById(e),
            fileName: f,
            format: "png"
          });
        } catch (v) {
          console.error("Error generating image:", v);
        } finally {
          C.value = false;
        }
    }, 100));
  }
  return {
    generatePdf: T,
    generateImage: I,
    isPrinting: h,
    isImaging: C
  };
}

export {
  ie,
  se
};
//# sourceMappingURL=chunk-KUISEN2N.js.map
