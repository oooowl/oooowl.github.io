import {
  M,
  O
} from "./chunk-NF5J7GNE.js";
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Lt,
  Qt,
  vt,
  wt
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeStyle,
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/Slicer-BZfUZr1J.js
var O2 = (l) => (pushScopeId("data-v-54291cff"), l = l(), popScopeId(), l);
var me = {
  "data-html2canvas-ignore": "",
  style: { padding: "0 24px" }
};
var ce = {
  class: "vue-data-ui-slicer-labels",
  style: { position: "relative", "z-index": "1", "pointer-events": "none" }
};
var ve = {
  key: 0,
  style: { width: "100%", position: "relative" }
};
var he = {
  key: 0,
  class: "minimap",
  style: { width: "100%" }
};
var pe = ["xmlns", "viewBox"];
var fe = ["id"];
var ye = ["stop-color"];
var ge = O2(() => createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "transparent"
}, null, -1));
var xe = ["d", "stroke"];
var be = ["x", "width", "height", "fill", "rx"];
var Se = ["d", "fill"];
var ke = ["x", "width", "height", "fill"];
var Ce = ["x", "width", "height", "fill"];
var we = ["d", "fill"];
var Ne = ["d", "stroke"];
var $e = ["cx", "cy", "stroke", "fill"];
var Le = ["cx", "cy", "stroke", "fill"];
var Me = ["x1", "x2", "y2", "stroke"];
var Ie = ["x", "height", "width", "onMouseenter"];
var Fe = O2(() => createBaseVNode("div", { class: "slider-track" }, null, -1));
var ze = ["min", "max"];
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
  setup(l, { emit: y }) {
    const e = l;
    useCssVars((t) => ({
      e0176a96: D.value,
      "27e9d329": x.value,
      "22b19dda": U.value,
      "081f1459": l.selectColor,
      "12e0ab32": T.value
    }));
    const u2 = ref(e.min), r = ref(e.max), g = computed(() => !!e.minimap.length), C = ref(Lt()), _ = computed(() => {
      const t = e.max - e.min, n = (u2.value - e.min) / t * 100, o = (r.value - e.min) / t * 100;
      return {
        left: `${n}%`,
        width: `${o - n}%`,
        background: e.selectColor
      };
    }), D = computed(() => e.inputColor), T = computed(() => e.background), U = computed(() => `${e.selectColor}33`), x = computed(() => e.borderColor), M2 = computed(() => {
      let t = [];
      for (let n = 0; n < e.minimap.length; n += 1)
        t.push(n);
      return t;
    });
    function I() {
      y("reset");
    }
    function W() {
      Number(u2.value) > Number(r.value) - 1 && (u2.value = Number(r.value) - 1), y("update:start", Number(u2.value));
    }
    function X() {
      Number(r.value) < Number(u2.value) + 1 && (r.value = Number(u2.value) + 1), y("update:end", Number(r.value));
    }
    watch(
      () => e.min,
      (t) => {
        Number(u2.value) < Number(t) && (u2.value = Number(t)), Number(r.value) < Number(t) && (r.value = Number(t));
      }
    ), watch(
      () => e.max,
      (t) => {
        Number(u2.value) > Number(t) && (u2.value = Number(t)), Number(r.value) > Number(t) && (r.value = Number(t));
      }
    );
    const w = ref(null), a = ref({
      width: 1,
      height: 1
    }), F = ref(null);
    onMounted(() => {
      if (g.value) {
        const t = O(() => {
          const { width: n, height: o } = M({
            chart: w.value
          });
          a.value.width = n, a.value.height = o - 47;
        });
        F.value = new ResizeObserver(t), F.value.observe(w.value);
      }
    });
    const s2 = computed(() => e.minimap.length ? a.value.width / e.minimap.length : 0), m = computed(() => {
      if (!e.minimap.length) return [];
      const t = Math.max(...e.minimap), n = Math.min(...e.minimap) - 10, o = t - (n > 0 ? 0 : n), c = e.minimap.map((Q, H) => {
        const J = Q - n;
        return {
          x: a.value.width / e.minimap.length * H + s2.value / 2,
          y: a.value.height - J / o * (a.value.height * 0.9)
        };
      }), N = e.smoothMinimap ? vt(c) : wt(c), $ = [...c].slice(e.valueStart, e.valueEnd), G = e.smoothMinimap ? vt($) : wt($);
      return {
        fullSet: N,
        selectionSet: G,
        sliced: $,
        firstPlot: c[e.valueStart],
        lastPlot: c[e.valueEnd - 1]
      };
    }), p = computed(() => ({
      x: s2.value * u2.value + s2.value / 2,
      width: a.value.width * ((r.value - u2.value) / e.max) - s2.value
    })), j = computed(() => ({
      left: 0,
      color: e.textColor,
      fontSize: `${e.fontSize}px`,
      top: g.value ? "28px" : "-28px",
      pointerEvents: "none"
    })), Z = computed(() => ({
      right: 0,
      color: e.textColor,
      fontSize: `${e.fontSize}px`,
      top: g.value ? "28px" : "-28px",
      direction: "rtl",
      pointerEvents: "none"
    })), b = ref(e.minimapSelectedIndex);
    watch(() => e.minimapSelectedIndex, (t) => {
      b.value = t + e.valueStart;
    }, { immediate: true });
    function q(t) {
      b.value = t, t >= e.valueStart && t < e.valueEnd && y("trapMouse", t - e.valueStart);
    }
    return (t, n) => (openBlock(), createElementBlock("div", me, [
      createBaseVNode("div", ce, [
        l.valueStart > 0 || l.valueEnd < l.max ? (openBlock(), createElementBlock("div", ve, [
          l.useResetSlot ? renderSlot(t.$slots, "reset-action", {
            key: 1,
            reset: I
          }, void 0, true) : (openBlock(), createElementBlock("button", {
            key: 0,
            "data-cy-reset": "",
            tabindex: "0",
            role: "button",
            class: "vue-data-ui-refresh-button",
            style: normalizeStyle({
              top: g.value ? "36px" : "-16px",
              pointerEvents: "all !important"
            }),
            onClick: I
          }, [
            createVNode(u, {
              name: "refresh",
              stroke: l.textColor
            }, null, 8, ["stroke"])
          ], 4))
        ])) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", {
        class: "double-range-slider",
        ref_key: "minimapWrapper",
        ref: w,
        style: { "z-index": "0" }
      }, [
        g.value ? (openBlock(), createElementBlock("div", he, [
          (openBlock(), createElementBlock("svg", {
            xmlns: unref(Qt),
            viewBox: `0 0 ${a.value.width < 0 ? 0 : a.value.width} ${a.value.height < 0 ? 0 : a.value.height}`
          }, [
            createBaseVNode("defs", null, [
              createBaseVNode("linearGradient", {
                id: C.value,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%"
              }, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": `${l.minimapLineColor}50`
                }, null, 8, ye),
                ge
              ], 8, fe)
            ]),
            createBaseVNode("path", {
              d: `M${m.value.fullSet}`,
              stroke: `${l.minimapLineColor}`,
              fill: "none",
              "stroke-width": "1",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              style: { opacity: "1" }
            }, null, 8, xe),
            createBaseVNode("rect", {
              x: p.value.x,
              width: p.value.width < 0 ? 0 : p.value.width,
              height: a.value.height,
              y: 0,
              fill: x.value,
              rx: l.minimapSelectionRadius,
              stroke: "none"
            }, null, 8, be),
            createBaseVNode("path", {
              d: `M${s2.value / 2},${a.value.height} ${m.value.fullSet} L${a.value.width - s2.value / 2},${a.value.height}Z`,
              fill: `url(#${C.value})`,
              stroke: "none",
              style: { opacity: "1" }
            }, null, 8, Se),
            createBaseVNode("rect", {
              x: p.value.x,
              width: p.value.width < 0 ? 0 : p.value.width,
              height: a.value.height,
              y: 0,
              fill: x.value
            }, null, 8, ke),
            createBaseVNode("rect", {
              x: p.value.x,
              width: p.value.width < 0 ? 0 : p.value.width,
              height: a.value.height,
              y: 0,
              fill: l.minimapSelectedColor,
              style: normalizeStyle({
                opacity: l.minimapSelectedColorOpacity
              })
            }, null, 12, Ce),
            createBaseVNode("path", {
              d: `M${m.value.sliced[0].x},${a.value.height} ${m.value.selectionSet} L${m.value.sliced.at(-1).x},${a.value.height}Z`,
              fill: `url(#${C.value})`,
              stroke: "none",
              style: { opacity: "1" }
            }, null, 8, we),
            createBaseVNode("path", {
              d: `M ${m.value.selectionSet}`,
              stroke: `${l.minimapLineColor}`,
              fill: "transparent",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, Ne),
            createBaseVNode("circle", {
              cx: m.value.firstPlot.x,
              cy: m.value.firstPlot.y,
              "stroke-width": "0.5",
              stroke: x.value,
              r: "3",
              fill: l.minimapLineColor
            }, null, 8, $e),
            createBaseVNode("circle", {
              cx: m.value.lastPlot.x,
              cy: m.value.lastPlot.y,
              "stroke-width": "0.5",
              stroke: x.value,
              r: "3",
              fill: l.minimapLineColor
            }, null, 8, Le),
            b.value !== null ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(M2.value, (o, c) => (openBlock(), createElementBlock("g", null, [
              b.value === o && o >= l.valueStart && o < l.valueEnd ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: s2.value * c + s2.value / 2,
                x2: s2.value * c + s2.value / 2,
                y1: 0,
                y2: a.value.height,
                stroke: l.minimapIndicatorColor,
                "stroke-linecap": "round",
                "stroke-dasharray": "2",
                "stroke-width": "1"
              }, null, 8, Me)) : createCommentVNode("", true)
            ]))), 256)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(M2.value, (o, c) => (openBlock(), createElementBlock("rect", {
              x: s2.value * c,
              y: 0,
              height: a.value.height,
              width: s2.value,
              fill: "transparent",
              style: { "pointer-events": "all !important" },
              onMouseenter: (N) => q(o),
              onMouseleave: n[0] || (n[0] = (N) => {
                b.value = null, y("trapMouse", null);
              })
            }, null, 40, Ie))), 256))
          ], 8, pe))
        ])) : createCommentVNode("", true),
        Fe,
        createBaseVNode("div", {
          class: "range-highlight",
          style: normalizeStyle(_.value)
        }, null, 4),
        withDirectives(createBaseVNode("input", {
          type: "range",
          class: "range-left",
          min: l.min,
          max: l.max,
          "onUpdate:modelValue": n[1] || (n[1] = (o) => u2.value = o),
          onInput: W
        }, null, 40, ze), [
          [vModelText, u2.value]
        ]),
        createBaseVNode("div", {
          class: "thumb-label thumb-label-left",
          style: normalizeStyle(j.value)
        }, toDisplayString(l.labelLeft), 5),
        withDirectives(createBaseVNode("input", {
          type: "range",
          class: "range-right",
          min: l.min,
          max: l.max,
          "onUpdate:modelValue": n[2] || (n[2] = (o) => r.value = o),
          onInput: X
        }, null, 40, Ee), [
          [vModelText, r.value]
        ]),
        createBaseVNode("div", {
          class: "thumb-label thumb-label-right",
          style: normalizeStyle(Z.value)
        }, toDisplayString(l.labelRight), 5)
      ], 512)
    ]));
  }
};
var _e = s(Pe, [["__scopeId", "data-v-54291cff"]]);

export {
  _e
};
//# sourceMappingURL=chunk-2OITSM6Y.js.map
