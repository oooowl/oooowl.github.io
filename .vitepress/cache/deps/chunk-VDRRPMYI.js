import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
import {
  u
} from "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  Jt,
  Lt,
  St
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  vModelText,
  watch,
  withDirectives
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/Slicer-DV1kBscZ.js
var O2 = (t) => (pushScopeId("data-v-ed77abe8"), t = t(), popScopeId(), t);
var ce = {
  "data-html2canvas-ignore": "",
  style: { padding: "0 24px" },
  class: "vue-data-ui-zoom"
};
var ve = {
  class: "vue-data-ui-slicer-labels",
  style: { position: "relative", "z-index": "1", "pointer-events": "none" }
};
var he = {
  key: 0,
  style: { width: "100%", position: "relative" }
};
var pe = {
  key: 0,
  class: "minimap",
  style: { width: "100%" }
};
var fe = ["xmlns", "viewBox"];
var xe = ["id"];
var ye = ["stop-color"];
var ge = O2(() => createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "transparent"
}, null, -1));
var be = ["d", "stroke"];
var Se = ["x", "width", "height", "fill", "rx"];
var ke = ["d", "fill"];
var Ce = ["x", "width", "height", "rx", "fill"];
var we = ["x", "width", "height", "fill", "rx"];
var Ne = ["d", "fill"];
var $e = ["d", "stroke"];
var Me = ["cx", "cy", "stroke", "fill"];
var Le = ["cx", "cy", "stroke", "fill"];
var Ie = ["x1", "x2", "y2", "stroke"];
var ze = ["x", "height", "width", "onMouseenter"];
var Fe = O2(() => createBaseVNode("div", { class: "slider-track" }, null, -1));
var Re = ["min", "max"];
var Ee = ["min", "max"];
var Pe = {
  __name: "Slicer",
  props: {
    background: {
      type: String,
      default: "#FFFFFF"
    },
    borderColor: {
      type: String,
      default: "#FFFFFF"
    },
    fontSize: {
      type: Number,
      default: 14
    },
    labelLeft: {
      type: String,
      default: ""
    },
    labelRight: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: "#1A1A1A"
    },
    inputColor: {
      type: String,
      default: "#1A1A1A"
    },
    max: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    selectColor: {
      type: String,
      default: "#4A4A4A"
    },
    useResetSlot: {
      type: Boolean,
      default: false
    },
    valueStart: {
      type: [Number, String],
      default: 0
    },
    valueEnd: {
      type: [Number, String],
      default: 0
    },
    minimap: {
      type: Array,
      default: []
    },
    smoothMinimap: {
      type: Boolean,
      default: false
    },
    minimapSelectedColor: {
      type: String,
      default: "#1f77b4"
    },
    minimapSelectionRadius: {
      type: Number,
      default: 12
    },
    minimapLineColor: {
      type: String,
      default: "#2D353C"
    },
    minimapSelectedColorOpacity: {
      type: Number,
      default: 0.2
    },
    minimapSelectedIndex: {
      type: Number,
      default: null
    },
    minimapIndicatorColor: {
      type: String,
      default: "#2D353C"
    }
  },
  emits: ["update:start", "update:end", "reset", "trapMouse"],
  setup(t, { emit: x }) {
    const e = t;
    useCssVars((l) => ({
      "724603fa": U.value,
      "0a3b8c6e": g.value,
      "31bae142": W.value,
      "2b1e64c4": t.selectColor,
      "7b29392c": T.value
    }));
    const u2 = ref(e.min), r = ref(e.max), y = computed(() => !!e.minimap.length), w = ref(Dt()), D = computed(() => {
      const l = e.max - e.min, n = (u2.value - e.min) / l * 100, o = (r.value - e.min) / l * 100;
      return {
        left: `${n}%`,
        width: `${o - n}%`,
        background: e.selectColor
      };
    }), U = computed(() => e.inputColor), T = computed(() => e.background), W = computed(() => `${e.selectColor}33`), g = computed(() => e.borderColor), I = computed(() => {
      let l = [];
      for (let n = 0; n < e.minimap.length; n += 1)
        l.push(n);
      return l;
    });
    function z() {
      x("reset");
    }
    function X() {
      Number(u2.value) > Number(r.value) - 1 && (u2.value = Number(r.value) - 1), x("update:start", Number(u2.value));
    }
    function j() {
      Number(r.value) < Number(u2.value) + 1 && (r.value = Number(u2.value) + 1), x("update:end", Number(r.value));
    }
    watch(
      () => e.min,
      (l) => {
        Number(u2.value) < Number(l) && (u2.value = Number(l)), Number(r.value) < Number(l) && (r.value = Number(l));
      }
    ), watch(
      () => e.max,
      (l) => {
        Number(u2.value) > Number(l) && (u2.value = Number(l)), Number(r.value) > Number(l) && (r.value = Number(l));
      }
    );
    const N = ref(null), a = ref({
      width: 1,
      height: 1
    }), k2 = ref(null);
    onMounted(() => {
      if (y.value) {
        const l = O(() => {
          const { width: n, height: o } = k({
            chart: N.value
          });
          a.value.width = n, a.value.height = o - 47;
        });
        k2.value = new ResizeObserver(l), k2.value.observe(N.value);
      }
    }), onBeforeUnmount(() => {
      k2.value && k2.value.disconnect();
    });
    const s2 = computed(() => e.minimap.length ? a.value.width / e.minimap.length : 0), m = computed(() => {
      if (!e.minimap.length) return [];
      const l = Math.max(...e.minimap), n = Math.min(...e.minimap) - 10, o = l - (n > 0 ? 0 : n), c = e.minimap.map((_, H) => {
        const J = _ - n;
        return {
          x: a.value.width / e.minimap.length * H + s2.value / 2,
          y: a.value.height - J / o * (a.value.height * 0.9)
        };
      }), $ = e.smoothMinimap ? Lt(c) : St(c), M = [...c].slice(e.valueStart, e.valueEnd), Q = e.smoothMinimap ? Lt(M) : St(M);
      return {
        fullSet: $,
        selectionSet: Q,
        sliced: M,
        firstPlot: c[e.valueStart],
        lastPlot: c[e.valueEnd - 1]
      };
    }), p = computed(() => ({
      x: s2.value * u2.value + s2.value / 2,
      width: a.value.width * ((r.value - u2.value) / e.max) - s2.value
    })), Z = computed(() => ({
      left: 0,
      color: e.textColor,
      fontSize: `${e.fontSize}px`,
      top: y.value ? "28px" : "-28px",
      pointerEvents: "none"
    })), q = computed(() => ({
      right: 0,
      color: e.textColor,
      fontSize: `${e.fontSize}px`,
      top: y.value ? "28px" : "-28px",
      direction: "rtl",
      pointerEvents: "none"
    })), b = ref(e.minimapSelectedIndex);
    watch(() => e.minimapSelectedIndex, (l) => {
      b.value = l + e.valueStart;
    }, { immediate: true });
    function G(l) {
      b.value = l, l >= e.valueStart && l < e.valueEnd && x("trapMouse", l - e.valueStart);
    }
    return (l, n) => (openBlock(), createElementBlock("div", ce, [
      createBaseVNode("div", ve, [
        t.valueStart > 0 || t.valueEnd < t.max ? (openBlock(), createElementBlock("div", he, [
          t.useResetSlot ? renderSlot(l.$slots, "reset-action", {
            key: 1,
            reset: z
          }, void 0, true) : (openBlock(), createElementBlock("button", {
            key: 0,
            "data-cy-reset": "",
            tabindex: "0",
            role: "button",
            class: "vue-data-ui-refresh-button",
            style: normalizeStyle({
              top: y.value ? "36px" : "-16px",
              pointerEvents: "all !important"
            }),
            onClick: z
          }, [
            createVNode(u, {
              name: "refresh",
              stroke: t.textColor
            }, null, 8, ["stroke"])
          ], 4))
        ])) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", {
        class: "double-range-slider",
        ref_key: "minimapWrapper",
        ref: N,
        style: { "z-index": "0" }
      }, [
        y.value ? (openBlock(), createElementBlock("div", pe, [
          (openBlock(), createElementBlock("svg", {
            xmlns: unref(Jt),
            viewBox: `0 0 ${a.value.width < 0 ? 0 : a.value.width} ${a.value.height < 0 ? 0 : a.value.height}`
          }, [
            createBaseVNode("defs", null, [
              createBaseVNode("linearGradient", {
                id: w.value,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%"
              }, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": `${t.minimapLineColor}50`
                }, null, 8, ye),
                ge
              ], 8, xe)
            ]),
            createBaseVNode("path", {
              d: `M${m.value.fullSet}`,
              stroke: `${t.minimapLineColor}`,
              fill: "none",
              "stroke-width": "1",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              style: { opacity: "1" }
            }, null, 8, be),
            createBaseVNode("rect", {
              x: p.value.x,
              width: p.value.width < 0 ? 0 : p.value.width,
              height: Math.max(a.value.height, 0),
              y: 0,
              fill: g.value,
              rx: t.minimapSelectionRadius,
              stroke: "none"
            }, null, 8, Se),
            createBaseVNode("path", {
              d: `M${s2.value / 2},${Math.max(a.value.height, 0)} ${m.value.fullSet} L${a.value.width - s2.value / 2},${Math.max(a.value.height, 0)}Z`,
              fill: `url(#${w.value})`,
              stroke: "none",
              style: { opacity: "1" }
            }, null, 8, ke),
            createBaseVNode("rect", {
              x: p.value.x,
              width: p.value.width < 0 ? 0 : p.value.width,
              height: Math.max(a.value.height, 0),
              y: 0,
              rx: t.minimapSelectionRadius,
              fill: g.value
            }, null, 8, Ce),
            createBaseVNode("rect", {
              x: p.value.x,
              width: p.value.width < 0 ? 0 : p.value.width,
              height: Math.max(a.value.height, 0),
              y: 0,
              fill: t.minimapSelectedColor,
              rx: t.minimapSelectionRadius,
              style: normalizeStyle({
                opacity: t.minimapSelectedColorOpacity
              })
            }, null, 12, we),
            createBaseVNode("path", {
              d: `M${m.value.sliced[0].x},${Math.max(a.value.height, 0)} ${m.value.selectionSet} L${m.value.sliced.at(-1).x},${Math.max(a.value.height, 0)}Z`,
              fill: `url(#${w.value})`,
              stroke: "none",
              style: { opacity: "1" }
            }, null, 8, Ne),
            createBaseVNode("path", {
              d: `M ${m.value.selectionSet}`,
              stroke: `${t.minimapLineColor}`,
              fill: "transparent",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, $e),
            createBaseVNode("circle", {
              cx: m.value.firstPlot.x,
              cy: m.value.firstPlot.y,
              "stroke-width": "0.5",
              stroke: g.value,
              r: "3",
              fill: t.minimapLineColor
            }, null, 8, Me),
            createBaseVNode("circle", {
              cx: m.value.lastPlot.x,
              cy: m.value.lastPlot.y,
              "stroke-width": "0.5",
              stroke: g.value,
              r: "3",
              fill: t.minimapLineColor
            }, null, 8, Le),
            b.value !== null ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(I.value, (o, c) => (openBlock(), createElementBlock("g", null, [
              b.value === o && o >= t.valueStart && o < t.valueEnd ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: s2.value * c + s2.value / 2,
                x2: s2.value * c + s2.value / 2,
                y1: 0,
                y2: Math.max(a.value.height, 0),
                stroke: t.minimapIndicatorColor,
                "stroke-linecap": "round",
                "stroke-dasharray": "2",
                "stroke-width": "1"
              }, null, 8, Ie)) : createCommentVNode("", true)
            ]))), 256)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(I.value, (o, c) => (openBlock(), createElementBlock("rect", {
              x: s2.value * c,
              y: 0,
              height: Math.max(a.value.height, 0),
              width: s2.value < 0 ? 0 : s2.value,
              fill: "transparent",
              style: { "pointer-events": "all !important" },
              onMouseenter: ($) => G(o),
              onMouseleave: n[0] || (n[0] = ($) => {
                b.value = null, x("trapMouse", null);
              })
            }, null, 40, ze))), 256))
          ], 8, fe))
        ])) : createCommentVNode("", true),
        Fe,
        createBaseVNode("div", {
          class: "range-highlight",
          style: normalizeStyle(D.value)
        }, null, 4),
        withDirectives(createBaseVNode("input", {
          type: "range",
          class: "range-left",
          min: t.min,
          max: t.max,
          "onUpdate:modelValue": n[1] || (n[1] = (o) => u2.value = o),
          onInput: X
        }, null, 40, Re), [
          [vModelText, u2.value]
        ]),
        createBaseVNode("div", {
          class: "thumb-label thumb-label-left",
          style: normalizeStyle(Z.value)
        }, toDisplayString(t.labelLeft), 5),
        withDirectives(createBaseVNode("input", {
          type: "range",
          class: "range-right",
          min: t.min,
          max: t.max,
          "onUpdate:modelValue": n[2] || (n[2] = (o) => r.value = o),
          onInput: j
        }, null, 40, Ee), [
          [vModelText, r.value]
        ]),
        createBaseVNode("div", {
          class: "thumb-label thumb-label-right",
          style: normalizeStyle(q.value)
        }, toDisplayString(t.labelRight), 5)
      ], 512)
    ]));
  }
};
var Ue = s(Pe, [["__scopeId", "data-v-ed77abe8"]]);

export {
  Ue
};
//# sourceMappingURL=chunk-VDRRPMYI.js.map
