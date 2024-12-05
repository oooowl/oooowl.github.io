import {
  c
} from "./chunk-OBQGP7GO.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  Jt,
  dr,
  te
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  toDisplayString,
  unref
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-cursor-DbfjKtpf.js
var g = (i) => (pushScopeId("data-v-6a1383ea"), i = i(), popScopeId(), i);
var $ = ["xmlns", "height", "width"];
var W = {
  id: "follower",
  fy: "30%",
  fx: "30%"
};
var G = ["stop-color", "stop-opacity"];
var A = g(() => createBaseVNode("stop", {
  offset: "95%",
  "stop-color": "transparent"
}, null, -1));
var U = ["r", "fill", "stroke", "stroke-width", "stroke-dasharray"];
var V = ["r", "fill"];
var M = {
  key: 2,
  class: "wave"
};
var P = ["id"];
var X = ["id"];
var j = g(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Y = ["filter", "stroke"];
var q = {
  key: 3,
  class: "crosshair"
};
var H = ["x1", "stroke", "stroke-width", "stroke-dasharray"];
var J = ["x1", "stroke", "stroke-width", "stroke-dasharray"];
var K = ["y1", "stroke", "stroke-width", "stroke-dasharray"];
var Q = ["y1", "stroke", "stroke-width", "stroke-dasharray"];
var Z = ["cy", "r", "fill"];
var ee = ["cy", "r", "fill"];
var te2 = ["cx", "r", "fill"];
var re = ["cx", "r", "fill"];
var se = {
  key: 5,
  class: "coordinates"
};
var oe = ["x", "y", "font-size", "fill"];
var le = ["transform"];
var ae = ["font-size", "fill"];
var ie = {
  __name: "vue-ui-cursor",
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  setup(i) {
    const w = i, { vue_ui_cursor: S } = te(), d = ref(Dt()), e = computed(() => c({
      userConfig: w.config,
      defaultConfig: S
    })), s2 = ref({
      x: -100,
      y: -100
    });
    function h({ clientX: t, clientY: k, ...ce }) {
      s2.value.x = t - e.value.centerCircleRadius, s2.value.y = k - e.value.centerCircleRadius;
    }
    function f(t) {
      s2.value.x = t.targetTouches[0].clientX - e.value.centerCircleRadius, s2.value.y = t.targetTouches[0].clientY - e.value.centerCircleRadius;
    }
    const y = ref(true);
    function u(t) {
      y.value = t;
    }
    const c2 = ref(false), v = ref(null);
    function _() {
      c2.value = false, v.value && clearTimeout(v.value), nextTick(() => {
        c2.value = true, v.value = setTimeout(() => {
          c2.value = false;
        }, 1e3);
      });
    }
    return onMounted(() => {
      const t = e.value.parentId ? document.getElementById(e.value.parentId) : document.getElementsByTagName("div")[0];
      t.addEventListener("mousemove", h), t.addEventListener("touchmove", f), t.addEventListener("mouseleave", () => u(false)), t.addEventListener("mouseenter", () => u(true)), t.addEventListener("click", _);
    }), onBeforeUnmount(() => {
      const t = e.value.parentId ? document.getElementById(e.value.parentId) : document.getElementsByTagName("div")[0];
      t.removeEventListener("mousemove", h), t.removeEventListener("touchmove", f), t.removeEventListener("mouseleave", () => u(false)), t.removeEventListener("mouseenter", () => u(true)), t.removeEventListener("click", _);
    }), computed(() => e.value.centerCircleRadius / 2.5), (t, k) => y.value ? (openBlock(), createElementBlock("svg", {
      key: 0,
      "data-html2canvas-ignore": "",
      xmlns: unref(Jt),
      style: normalizeStyle(`z-index: 2147483647; overflow: visible; pointer-events: none;background: transparent; position:fixed; top:${s2.value.y}px; left:${s2.value.x}px;`),
      viewBox: "0 0 100 100",
      height: e.value.centerCircleRadius * 2,
      width: e.value.centerCircleRadius * 2
    }, [
      createBaseVNode("defs", null, [
        createBaseVNode("radialGradient", W, [
          createBaseVNode("stop", {
            offset: "10%",
            "stop-color": e.value.bubbleEffectColor,
            "stop-opacity": e.value.bubbleEffectOpacity
          }, null, 8, G),
          A
        ])
      ]),
      e.value.showCenterCircle ? (openBlock(), createElementBlock("circle", {
        key: 0,
        cx: 50,
        cy: 50,
        r: e.value.centerCircleRadius,
        fill: unref(dr)(e.value.centerCircleColor, e.value.centerCircleOpacity * 100),
        stroke: e.value.centerCircleStroke,
        "stroke-width": e.value.centerCircleStrokeWidth,
        "stroke-dasharray": e.value.centerCircleDasharray
      }, null, 8, U)) : createCommentVNode("", true),
      e.value.bubbleEffect ? (openBlock(), createElementBlock("circle", {
        key: 1,
        cx: 50,
        cy: 50,
        r: e.value.centerCircleRadius,
        fill: "url(#follower)",
        stroke: "none"
      }, null, 8, V)) : createCommentVNode("", true),
      e.value.useWaveOnClick ? (openBlock(), createElementBlock("g", M, [
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${d.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 4,
              id: `blur_std_${d.value}`
            }, null, 8, X),
            j
          ], 8, P)
        ]),
        c2.value ? (openBlock(), createElementBlock("circle", {
          key: 0,
          class: normalizeClass({ "circle-wave": c2.value }),
          cx: 50,
          cy: 50,
          r: 50,
          filter: `url(#blur_${d.value})`,
          stroke: e.value.centerCircleStroke,
          fill: "none",
          "stroke-width": "3"
        }, null, 10, Y)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      e.value.showCrosshair ? (openBlock(), createElementBlock("g", q, [
        createBaseVNode("line", {
          x1: -e.value.centerCircleRadius + 50,
          x2: -5e3,
          y1: 50,
          y2: 50,
          stroke: e.value.crosshairStroke,
          "stroke-width": e.value.crosshairStrokeWidth,
          "stroke-dasharray": e.value.crosshairDasharray,
          "stroke-linecap": "round"
        }, null, 8, H),
        createBaseVNode("line", {
          x1: 50 + e.value.centerCircleRadius,
          x2: 5e3,
          y1: 50,
          y2: 50,
          stroke: e.value.crosshairStroke,
          "stroke-width": e.value.crosshairStrokeWidth,
          "stroke-dasharray": e.value.crosshairDasharray,
          "stroke-linecap": "round"
        }, null, 8, J),
        createBaseVNode("line", {
          x1: 50,
          x2: 50,
          y1: -e.value.centerCircleRadius + 50,
          y2: -5e3,
          stroke: e.value.crosshairStroke,
          "stroke-width": e.value.crosshairStrokeWidth,
          "stroke-dasharray": e.value.crosshairDasharray,
          "stroke-linecap": "round"
        }, null, 8, K),
        createBaseVNode("line", {
          x1: 50,
          x2: 50,
          y1: e.value.centerCircleRadius + 50,
          y2: 5e3,
          stroke: e.value.crosshairStroke,
          "stroke-width": e.value.crosshairStrokeWidth,
          "stroke-dasharray": e.value.crosshairDasharray,
          "stroke-linecap": "round"
        }, null, 8, Q)
      ])) : createCommentVNode("", true),
      e.value.showIntersectCircles ? (openBlock(), createElementBlock("g", {
        key: 4,
        class: normalizeClass({ "rotating-circles": e.value.isLoading })
      }, [
        createBaseVNode("circle", {
          cx: 50,
          cy: e.value.centerCircleRadius + 50,
          r: e.value.intersectCirclesRadius,
          fill: e.value.intersectCirclesFill
        }, null, 8, Z),
        createBaseVNode("circle", {
          cx: 50,
          cy: -e.value.centerCircleRadius + 50,
          r: e.value.intersectCirclesRadius,
          fill: e.value.intersectCirclesFill
        }, null, 8, ee),
        createBaseVNode("circle", {
          cx: -e.value.centerCircleRadius + 50,
          cy: 50,
          r: e.value.intersectCirclesRadius,
          fill: e.value.intersectCirclesFill
        }, null, 8, te2),
        createBaseVNode("circle", {
          cx: e.value.centerCircleRadius + 50,
          cy: 50,
          r: e.value.intersectCirclesRadius,
          fill: e.value.intersectCirclesFill
        }, null, 8, re)
      ], 2)) : createCommentVNode("", true),
      e.value.showCoordinates ? (openBlock(), createElementBlock("g", se, [
        createBaseVNode("text", {
          "text-anchor": "end",
          x: -e.value.centerCircleRadius + 50 - e.value.coordinatesFontSize / 2 + e.value.coordinatesOffset,
          y: 50 - e.value.coordinatesFontSize / 2 + e.value.coordinatesOffset,
          "font-size": e.value.coordinatesFontSize,
          fill: e.value.coordinatesColor,
          style: { "font-variant-numeric": "tabular-nums" },
          "font-family": "Arial"
        }, toDisplayString(s2.value.x.toFixed(0)), 9, oe),
        createBaseVNode("g", {
          transform: `translate(${50 - e.value.coordinatesFontSize / 2 + e.value.coordinatesOffset}, ${-e.value.centerCircleRadius + 50 - e.value.coordinatesFontSize / 2 + e.value.coordinatesOffset})`
        }, [
          createBaseVNode("text", {
            "text-anchor": "start",
            "font-size": e.value.coordinatesFontSize,
            fill: e.value.coordinatesColor,
            style: { "font-variant-numeric": "tabular-nums" },
            transform: "rotate(-90)",
            "font-family": "Arial"
          }, toDisplayString(s2.value.y.toFixed(0)), 9, ae)
        ], 8, le)
      ])) : createCommentVNode("", true)
    ], 12, $)) : createCommentVNode("", true);
  }
};
var he = s(ie, [["__scopeId", "data-v-6a1383ea"]]);
export {
  he as default
};
//# sourceMappingURL=vue-ui-cursor-DbfjKtpf-JVX4LTXY.js.map
