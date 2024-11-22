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
  Dt,
  Ge,
  Gt,
  Kt,
  Lt,
  Qt,
  R,
  Xt,
  cr,
  et,
  gt,
  j,
  lr,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-gauge-BXiy515T.js
var je = ["id"];
var De = { key: 0 };
var Ue = ["xmlns", "viewBox"];
var Be = ["id"];
var Le = ["stop-color"];
var We = ["stop-color"];
var Te = ["stop-color"];
var Ve = ["id"];
var qe = ["stdDeviation"];
var He = ["d", "fill", "stroke"];
var Ze = ["d", "filter"];
var Je = ["x", "y", "text-anchor", "font-size", "font-weight", "fill"];
var Ke = ["x", "y", "font-size", "font-weight", "fill"];
var Qe = { key: 1 };
var et2 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var tt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var at = ["x1", "y1", "x2", "y2", "stroke-width", "filter"];
var lt = { key: 2 };
var st = ["d", "fill", "stroke", "stroke-width"];
var rt = ["cx", "cy", "fill", "r", "stroke-width", "stroke"];
var ot = ["x", "y", "font-size", "fill"];
var ut = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var nt = {
  __name: "vue-ui-gauge",
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
  setup(N, { expose: ie2 }) {
    const r = N, { vue_ui_gauge: ce } = oe(), z = computed(() => !!r.dataset && Object.keys(r.dataset).length > 0 && r.dataset.series && r.dataset.series.length), m = ref(Lt()), ve = ref(null), j2 = ref(0), C = ref(null), D = ref(null), U = ref(null), B = ref(0), e = computed({
      get: () => L(),
      set: (a) => a
    });
    watch(() => r.config, (a) => {
      e.value = L(), Z(), B.value += 1;
    }, { deep: true });
    function L() {
      const a = c({
        userConfig: r.config,
        defaultConfig: ce
      });
      return a.theme ? {
        ...c({
          userConfig: Ge.vue_ui_gauge[a.theme] || r.config,
          defaultConfig: a
        }),
        customPalette: R[a.theme] || et
      } : a;
    }
    const { isPrinting: W, isImaging: T, generatePdf: V, generateImage: q } = se({
      elementId: `vue-ui-gauge_${m.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-gauge"
    }), de = computed(() => or(e.value.customPalette)), b = computed(() => {
      if (!z.value || Xt(r.dataset.series || {}))
        return {
          value: 0,
          series: [
            {
              from: 0,
              to: 0
            }
          ]
        };
      const a = [];
      (r.dataset.series || []).forEach((l) => {
        a.push(l.from || 0), a.push(l.to || 0);
      });
      const s2 = Math.max(...a);
      return {
        ...r.dataset,
        series: (r.dataset.series || []).map((l, n) => ({
          ...l,
          color: j(l.color) || de.value[n] || et[n],
          value: ((l.to || 0) - (l.from || 0)) / s2 * 100
        }))
      };
    }), y = ref(512), t = ref({
      height: 358.4,
      width: y.value,
      top: 0,
      bottom: 358.4,
      centerX: 179.2,
      centerY: y.value / 2,
      labelFontSize: 18,
      legendFontSize: e.value.style.chart.legend.fontSize,
      pointerRadius: e.value.style.chart.layout.pointer.circle.radius,
      trackSize: e.value.style.chart.layout.track.size,
      pointerSize: e.value.style.chart.layout.pointer.size,
      pointerStrokeWidth: e.value.style.chart.layout.pointer.strokeWidth,
      markerOffset: e.value.style.chart.layout.markers.offsetY + 3
    }), $ = ref(0), w = ref(0), v = ref(e.value.style.chart.animation.use ? 0 : r.dataset.value);
    watch(() => r.dataset.value, () => {
      J(r.dataset.value);
    });
    const d = computed(() => {
      const a = t.value.width / 2, s2 = u.value.base, l = Math.PI * ((v.value + 0 - w.value) / ($.value - w.value)) + Math.PI;
      return {
        x1: a,
        y1: s2,
        x2: a + u.value.pointerSize * t.value.pointerSize * 0.9 * Math.cos(l),
        y2: s2 + u.value.pointerSize * t.value.pointerSize * 0.9 * Math.sin(l)
      };
    }), H = computed(() => {
      const a = t.value.width / 2, s2 = u.value.base, l = Math.PI * ((v.value + 0 - w.value) / ($.value - w.value)) + Math.PI, n = a + u.value.pointerSize * t.value.pointerSize * 0.9 * Math.cos(l), P = s2 + u.value.pointerSize * t.value.pointerSize * 0.9 * Math.sin(l), k = t.value.pointerRadius, ye = a + k * Math.cos(l + Math.PI / 2), pe = s2 + k * Math.sin(l + Math.PI / 2), ge = a + k * Math.cos(l - Math.PI / 2), me = s2 + k * Math.sin(l - Math.PI / 2);
      return isNaN(n) ? null : `M ${n},${P} ${ye},${pe} ${ge},${me} Z`;
    }), Y = computed(() => {
      for (let a = 0; a < b.value.series.length; a += 1) {
        const { color: s2, from: l, to: n } = b.value.series[a];
        if (v.value >= l && v.value <= n)
          return s2;
      }
      return "#2D353C";
    }), M2 = ref(null);
    function Z() {
      if (Xt(r.dataset) ? Kt({
        componentName: "VueUiGauge",
        type: "dataset"
      }) : (qt({
        datasetObject: r.dataset,
        requiredAttributes: ["value", "series"]
      }).forEach((a) => {
        Kt({
          componentName: "VueUiGauge",
          type: "datasetAttribute",
          property: a
        });
      }), Object.hasOwn(r.dataset, "series") && (r.dataset.series.length ? r.dataset.series.forEach((a, s2) => {
        qt({
          datasetObject: a,
          requiredAttributes: ["from", "to"]
        }).forEach((l) => {
          Kt({
            componentName: "VueUiGauge",
            type: "datasetSerieAttribute",
            property: l,
            index: s2
          });
        });
      }) : Kt({
        componentName: "VueUiGauge",
        type: "datasetAttributeEmpty",
        property: "series"
      }))), J(r.dataset.value || 0), e.value.responsive) {
        const a = O(() => {
          const { width: s2, height: l } = M({
            chart: C.value,
            title: e.value.style.chart.title.text ? D.value : null,
            legend: U.value
          });
          t.value.width = s2, t.value.height = l, t.value.centerX = s2 / 2, t.value.centerY = y.value / 2 / 358.4 * l, t.value.bottom = l, t.value.labelFontSize = 18 / y.value * Math.min(l, s2) < 10 ? 10 : 18 / y.value * Math.min(l, s2), t.value.legendFontSize = e.value.style.chart.legend.fontSize / y.value * Math.min(l, s2) < 14 ? 14 : e.value.style.chart.legend.fontSize / y.value * Math.min(l, s2), t.value.pointerRadius = e.value.style.chart.layout.pointer.circle.radius / y.value * Math.min(l, s2), t.value.trackSize = e.value.style.chart.layout.track.size / y.value * Math.min(l, s2), t.value.pointerStrokeWidth = lr({
            relator: Math.min(s2, l),
            adjuster: y.value,
            source: e.value.style.chart.layout.pointer.strokeWidth,
            threshold: 2,
            fallback: 2
          }), t.value.markerOffset = lr({
            relator: Math.max(s2, l),
            adjuster: y.value,
            source: e.value.style.chart.layout.markers.offsetY + 3,
            threshold: 2,
            fallback: 2
          });
        });
        M2.value = new ResizeObserver(a), M2.value.observe(C.value.parentNode);
      }
    }
    onMounted(() => {
      Z();
    }), onBeforeUnmount(() => {
      M2.value && M2.value.disconnect();
    });
    function J(a) {
      const s2 = [];
      (b.value.series || []).forEach((k) => {
        s2.push(k.from || 0), s2.push(k.to || 0);
      }), $.value = Math.max(...s2), w.value = Math.min(...s2);
      let l = e.value.style.chart.animation.speed;
      const n = Math.abs(a - v.value) / (l * 60);
      function P() {
        v.value < a ? v.value = Math.min(v.value + n, a) : v.value > a && (v.value = Math.max(v.value - n, a)), v.value !== a && requestAnimationFrame(P);
      }
      P();
    }
    const u = computed(() => {
      const a = e.value.responsive ? Math.min(t.value.width, t.value.height) : t.value.width;
      return {
        arcs: a / 2.5,
        gradients: a / 2.75,
        base: e.value.responsive ? t.value.height / 2 : t.value.height * 0.7,
        ratingBase: e.value.responsive ? t.value.height / 2 + t.value.height / 4 : t.value.height * 0.9,
        pointerSize: e.value.responsive ? Math.min(t.value.width, t.value.height) / 3 : t.value.width / 3.2
      };
    }), _ = computed(() => gt(
      { series: b.value.series },
      t.value.width / 2,
      u.value.base,
      u.value.arcs,
      u.value.arcs,
      1,
      1,
      1,
      180,
      109.9495,
      40 * t.value.trackSize
    )), he = computed(() => gt(
      { series: b.value.series },
      t.value.width / 2,
      u.value.base,
      u.value.gradients,
      u.value.gradients,
      0.95,
      1,
      1,
      180,
      110.02,
      2 * t.value.trackSize
    )), F = ref(false);
    function fe(a) {
      F.value = a, j2.value += 1;
    }
    return ie2({
      generatePdf: V,
      generateImage: q
    }), (a, s2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-gauge ${F.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      ref_key: "gaugeChart",
      ref: C,
      id: `vue-ui-gauge_${m.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: D,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${B.value}`,
          config: {
            title: {
              cy: "gauge-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "gauge-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, {
          default: withCtx(() => [
            e.value.translations.base && N.dataset.base ? (openBlock(), createElementBlock("span", De, toDisplayString(e.value.translations.base) + ": " + toDisplayString(N.dataset.base), 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && z.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: ve,
        key: `user_options_${j2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(T),
        isPrinting: unref(W),
        uid: m.value,
        hasXls: false,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: F.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: C.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: fe,
        onGeneratePdf: unref(V),
        onGenerateImage: unref(q)
      }, createSlots({ _: 2 }, [
        a.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        a.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        a.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: n }) => [
            renderSlot(a.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: n })), void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      z.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": F.value, "vue-data-ui-fulscreen--off": !F.value }),
        viewBox: `0 0 ${t.value.width <= 0 ? 10 : t.value.width} ${t.value.height <= 0 ? 10 : t.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:hidden !important;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            id: `gradient_${m.value}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)("#FFFFFF", 1)
            }, null, 8, Le),
            createBaseVNode("stop", {
              offset: "80%",
              "stop-color": unref(cr)("#FFFFFF", e.value.style.chart.layout.track.gradientIntensity)
            }, null, 8, We),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)("#FFFFFF", 1)
            }, null, 8, Te)
          ], 8, Be)
        ]),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${m.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 100 / e.value.style.chart.layout.track.gradientIntensity
            }, null, 8, qe)
          ], 8, Ve)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_.value, (l, n) => (openBlock(), createElementBlock("path", {
          key: `arc_${n}`,
          d: l.arcSlice,
          fill: l.color,
          stroke: e.value.style.chart.backgroundColor,
          "stroke-linecap": "round"
        }, null, 8, He))), 128)),
        e.value.style.chart.layout.track.useGradient ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(he.value, (l, n) => (openBlock(), createElementBlock("path", {
          key: `arc_${n}`,
          d: l.arcSlice,
          fill: "#FFFFFF",
          stroke: "none",
          "stroke-linecap": "round",
          filter: `url(#blur_${m.value})`
        }, null, 8, Ze))), 128)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_.value, (l, n) => (openBlock(), createElementBlock("text", {
          x: unref(Dt)({
            centerX: t.value.width / 2,
            centerY: u.value.base,
            initX: l.center.startX,
            initY: l.center.startY,
            offset: t.value.markerOffset
          }).x,
          y: unref(Dt)({
            centerX: t.value.width / 2,
            centerY: u.value.base,
            initX: l.center.startX,
            initY: l.center.startY,
            offset: t.value.markerOffset
          }).y,
          "text-anchor": l.center.startX < t.value.width / 2 - 5 ? "end" : l.center.startX > t.value.width / 2 + 5 ? "start" : "middle",
          "font-size": t.value.labelFontSize * e.value.style.chart.layout.markers.fontSizeRatio,
          "font-weight": `${e.value.style.chart.layout.markers.bold ? "bold" : "normal"}`,
          fill: e.value.style.chart.layout.markers.color
        }, toDisplayString(l.from.toFixed(e.value.style.chart.layout.markers.roundingValue)), 9, Je))), 256)),
        createBaseVNode("text", {
          x: unref(Dt)({
            centerX: t.value.width / 2,
            centerY: u.value.base,
            initX: _.value.at(-1).endX,
            initY: _.value.at(-1).endY,
            offset: t.value.markerOffset
          }).x,
          y: unref(Dt)({
            centerX: t.value.width / 2,
            centerY: u.value.base,
            initX: _.value.at(-1).endX,
            initY: _.value.at(-1).endY,
            offset: t.value.markerOffset
          }).y,
          "text-anchor": "start",
          "font-size": t.value.labelFontSize * e.value.style.chart.layout.markers.fontSizeRatio,
          "font-weight": `${e.value.style.chart.layout.markers.bold ? "bold" : "normal"}`,
          fill: e.value.style.chart.layout.markers.color
        }, toDisplayString($.value.toFixed(e.value.style.chart.layout.markers.roundingValue)), 9, Ke),
        e.value.style.chart.layout.pointer.type === "rounded" ? (openBlock(), createElementBlock("g", Qe, [
          isNaN(d.value.x2) ? createCommentVNode("", true) : (openBlock(), createElementBlock("line", {
            key: 0,
            x1: d.value.x1,
            y1: d.value.y1,
            x2: d.value.x2,
            y2: d.value.y2,
            stroke: e.value.style.chart.layout.pointer.stroke,
            "stroke-width": t.value.pointerStrokeWidth,
            "stroke-linecap": "round"
          }, null, 8, et2)),
          isNaN(d.value.x2) ? createCommentVNode("", true) : (openBlock(), createElementBlock("line", {
            key: 1,
            x1: d.value.x1,
            y1: d.value.y1,
            x2: d.value.x2,
            y2: d.value.y2,
            stroke: e.value.style.chart.layout.pointer.useRatingColor ? Y.value : e.value.style.chart.layout.pointer.color,
            "stroke-linecap": "round",
            "stroke-width": t.value.pointerStrokeWidth * 0.7
          }, null, 8, tt)),
          !isNaN(d.value.x2) && e.value.style.chart.layout.track.useGradient ? (openBlock(), createElementBlock("line", {
            key: 2,
            x1: d.value.x1,
            y1: d.value.y1,
            x2: d.value.x2,
            y2: d.value.y2,
            stroke: "white",
            "stroke-linecap": "round",
            "stroke-width": t.value.pointerStrokeWidth * 0.3,
            filter: `url(#blur_${m.value})`
          }, null, 8, at)) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("g", lt, [
          H.value ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: H.value,
            fill: e.value.style.chart.layout.pointer.useRatingColor ? Y.value : e.value.style.chart.layout.pointer.color,
            stroke: e.value.style.chart.layout.pointer.stroke,
            "stroke-width": e.value.style.chart.layout.pointer.circle.strokeWidth,
            "stroke-linejoin": "round"
          }, null, 8, st)) : createCommentVNode("", true)
        ])),
        createBaseVNode("circle", {
          cx: t.value.width / 2,
          cy: u.value.base,
          fill: e.value.style.chart.layout.pointer.circle.color,
          r: t.value.pointerRadius <= 0 ? 1e-4 : t.value.pointerRadius,
          "stroke-width": e.value.style.chart.layout.pointer.circle.strokeWidth,
          stroke: e.value.style.chart.layout.pointer.circle.stroke
        }, null, 8, rt),
        createBaseVNode("text", {
          x: t.value.width / 2,
          y: u.value.ratingBase,
          "text-anchor": "middle",
          "font-size": t.value.legendFontSize,
          "font-weight": "bold",
          fill: e.value.style.chart.legend.useRatingColor ? Y.value : e.value.style.chart.legend.color
        }, toDisplayString(unref(nr)(
          e.value.style.chart.legend.formatter,
          v.value,
          unref(Gt)({
            p: e.value.style.chart.legend.prefix + (e.value.style.chart.legend.showPlusSymbol && v.value > 0 ? "+" : ""),
            v: v.value,
            s: e.value.style.chart.legend.suffix,
            r: e.value.style.chart.legend.roundingValue
          })
        )), 9, ot),
        renderSlot(a.$slots, "svg", { svg: t.value }, void 0, true)
      ], 14, Ue)) : createCommentVNode("", true),
      a.$slots.watermark ? (openBlock(), createElementBlock("div", ut, [
        renderSlot(a.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(W) || unref(T) })), void 0, true)
      ])) : createCommentVNode("", true),
      z.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "gauge",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            gauge: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: U
      }, [
        renderSlot(a.$slots, "legend", { legend: b.value }, void 0, true)
      ], 512)
    ], 14, je));
  }
};
var mt = s(nt, [["__scopeId", "data-v-2575317d"]]);
export {
  mt as default
};
//# sourceMappingURL=vue-ui-gauge-BXiy515T-GLJ6QPVI.js.map
