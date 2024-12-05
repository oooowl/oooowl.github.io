import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
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
  Rt,
  Zt,
  dr,
  ir,
  jt,
  kt,
  nr,
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-gauge-DNJXnyLw.js
var We = ["id"];
var Ve = { key: 0 };
var qe = ["xmlns", "viewBox"];
var He2 = ["id"];
var Ze = ["stop-color"];
var Je = ["stop-color"];
var Ke = ["stop-color"];
var Qe = ["id"];
var et = ["stdDeviation"];
var tt = ["d", "fill", "stroke"];
var at = ["d", "filter"];
var lt = ["x", "y", "text-anchor", "font-size", "font-weight", "fill"];
var ot = ["x", "y", "font-size", "font-weight", "fill"];
var st = { key: 1 };
var rt2 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var nt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var ut = ["x1", "y1", "x2", "y2", "stroke-width", "filter"];
var it = { key: 2 };
var ct = ["d", "fill", "stroke", "stroke-width"];
var vt = ["cx", "cy", "fill", "r", "stroke-width", "stroke"];
var dt = ["x", "y", "font-size", "fill"];
var ht = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var ft = {
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
  setup(Y, { expose: he }) {
    const r = Y, { vue_ui_gauge: fe } = te(), $ = computed(() => !!r.dataset && Object.keys(r.dataset).length > 0 && r.dataset.series && r.dataset.series.length), k2 = ref(Dt()), ye = ref(null), B = ref(0), w = ref(null), L = ref(null), W = ref(null), V = ref(null), q = ref(null), H = ref(0), e = computed({
      get: () => Z(),
      set: (a) => a
    });
    watch(() => r.config, (a) => {
      e.value = Z(), ae2(), H.value += 1;
    }, { deep: true });
    function Z() {
      const a = c({
        userConfig: r.config,
        defaultConfig: fe
      });
      return a.theme ? {
        ...c({
          userConfig: He.vue_ui_gauge[a.theme] || r.config,
          defaultConfig: a
        }),
        customPalette: R[a.theme] || rt
      } : a;
    }
    const { isPrinting: J, isImaging: K, generatePdf: Q2, generateImage: ee } = re({
      elementId: `vue-ui-gauge_${k2.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-gauge"
    }), pe = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), ge = computed(() => tr(e.value.customPalette)), _ = computed(() => {
      if (!$.value || jt(r.dataset.series || {}))
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
      const o = Math.max(...a);
      return {
        ...r.dataset,
        series: (r.dataset.series || []).map((l, n) => ({
          ...l,
          color: Q(l.color) || ge.value[n] || rt[n],
          value: ((l.to || 0) - (l.from || 0)) / o * 100
        }))
      };
    }), p2 = ref(512), t = ref({
      height: 358.4,
      width: p2.value,
      top: 0,
      bottom: 358.4,
      centerX: 179.2,
      centerY: p2.value / 2,
      labelFontSize: 18,
      legendFontSize: e.value.style.chart.legend.fontSize,
      pointerRadius: e.value.style.chart.layout.pointer.circle.radius,
      trackSize: e.value.style.chart.layout.track.size,
      pointerSize: e.value.style.chart.layout.pointer.size,
      pointerStrokeWidth: e.value.style.chart.layout.pointer.strokeWidth,
      markerOffset: e.value.style.chart.layout.markers.offsetY + 3
    }), M = ref(0), F = ref(0), d = ref(e.value.style.chart.animation.use ? 0 : r.dataset.value);
    watch(() => r.dataset.value, () => {
      le(r.dataset.value);
    });
    const h = computed(() => {
      const a = t.value.width / 2, o = i.value.base, l = Math.PI * ((d.value + 0 - F.value) / (M.value - F.value)) + Math.PI;
      return {
        x1: a,
        y1: o,
        x2: a + i.value.pointerSize * t.value.pointerSize * 0.9 * Math.cos(l),
        y2: o + i.value.pointerSize * t.value.pointerSize * 0.9 * Math.sin(l)
      };
    }), te2 = computed(() => {
      const a = t.value.width / 2, o = i.value.base, l = Math.PI * ((d.value + 0 - F.value) / (M.value - F.value)) + Math.PI, n = a + i.value.pointerSize * t.value.pointerSize * 0.9 * Math.cos(l), I = o + i.value.pointerSize * t.value.pointerSize * 0.9 * Math.sin(l), b = t.value.pointerRadius, be = a + b * Math.cos(l + Math.PI / 2), _e = o + b * Math.sin(l + Math.PI / 2), xe = a + b * Math.cos(l - Math.PI / 2), we = o + b * Math.sin(l - Math.PI / 2);
      return isNaN(n) ? null : `M ${n},${I} ${be},${_e} ${xe},${we} Z`;
    }), G = computed(() => {
      for (let a = 0; a < _.value.series.length; a += 1) {
        const { color: o, from: l, to: n } = _.value.series[a];
        if (d.value >= l && d.value <= n)
          return o;
      }
      return "#2D353C";
    }), P = ref(null);
    function ae2() {
      if (jt(r.dataset) ? qt({
        componentName: "VueUiGauge",
        type: "dataset"
      }) : (Zt({
        datasetObject: r.dataset,
        requiredAttributes: ["value", "series"]
      }).forEach((a) => {
        qt({
          componentName: "VueUiGauge",
          type: "datasetAttribute",
          property: a
        });
      }), Object.hasOwn(r.dataset, "series") && (r.dataset.series.length ? r.dataset.series.forEach((a, o) => {
        Zt({
          datasetObject: a,
          requiredAttributes: ["from", "to"]
        }).forEach((l) => {
          qt({
            componentName: "VueUiGauge",
            type: "datasetSerieAttribute",
            property: l,
            index: o
          });
        });
      }) : qt({
        componentName: "VueUiGauge",
        type: "datasetAttributeEmpty",
        property: "series"
      }))), le(r.dataset.value || 0), e.value.responsive) {
        const a = O(() => {
          const { width: o, height: l } = k({
            chart: w.value,
            title: e.value.style.chart.title.text ? L.value : null,
            legend: W.value,
            source: V.value,
            noTitle: q.value
          });
          t.value.width = o, t.value.height = l, t.value.centerX = o / 2, t.value.centerY = p2.value / 2 / 358.4 * l, t.value.bottom = l, t.value.labelFontSize = 18 / p2.value * Math.min(l, o) < 10 ? 10 : 18 / p2.value * Math.min(l, o), t.value.legendFontSize = e.value.style.chart.legend.fontSize / p2.value * Math.min(l, o) < 14 ? 14 : e.value.style.chart.legend.fontSize / p2.value * Math.min(l, o), t.value.pointerRadius = e.value.style.chart.layout.pointer.circle.radius / p2.value * Math.min(l, o), t.value.trackSize = e.value.style.chart.layout.track.size / p2.value * Math.min(l, o), t.value.pointerStrokeWidth = nr({
            relator: Math.min(o, l),
            adjuster: p2.value,
            source: e.value.style.chart.layout.pointer.strokeWidth,
            threshold: 2,
            fallback: 2
          }), t.value.markerOffset = nr({
            relator: Math.max(o, l),
            adjuster: p2.value,
            source: e.value.style.chart.layout.markers.offsetY + 3,
            threshold: 2,
            fallback: 2
          });
        });
        P.value = new ResizeObserver(a), P.value.observe(w.value.parentNode);
      }
    }
    onMounted(() => {
      ae2();
    }), onBeforeUnmount(() => {
      P.value && P.value.disconnect();
    });
    function le(a) {
      const o = [];
      (_.value.series || []).forEach((b) => {
        o.push(b.from || 0), o.push(b.to || 0);
      }), M.value = Math.max(...o), F.value = Math.min(...o);
      let l = e.value.style.chart.animation.speed;
      const n = Math.abs(a - d.value) / (l * 60);
      function I() {
        d.value < a ? d.value = Math.min(d.value + n, a) : d.value > a && (d.value = Math.max(d.value - n, a)), d.value !== a && requestAnimationFrame(I);
      }
      I();
    }
    const i = computed(() => {
      const a = e.value.responsive ? Math.min(t.value.width, t.value.height) : t.value.width;
      return {
        arcs: a / 2.5,
        gradients: a / 2.75,
        base: e.value.responsive ? t.value.height / 2 : t.value.height * 0.7,
        ratingBase: e.value.responsive ? t.value.height / 2 + t.value.height / 4 : t.value.height * 0.9,
        pointerSize: e.value.responsive ? Math.min(t.value.width, t.value.height) / 3 : t.value.width / 3.2
      };
    }), x2 = computed(() => kt(
      { series: _.value.series },
      t.value.width / 2,
      i.value.base,
      i.value.arcs,
      i.value.arcs,
      1,
      1,
      1,
      180,
      109.9495,
      40 * t.value.trackSize
    )), me = computed(() => kt(
      { series: _.value.series },
      t.value.width / 2,
      i.value.base,
      i.value.gradients,
      i.value.gradients,
      0.95,
      1,
      1,
      180,
      110.02,
      2 * t.value.trackSize
    )), S = ref(false);
    function ke(a) {
      S.value = a, B.value += 1;
    }
    const O2 = ref(false);
    function R2() {
      O2.value = !O2.value;
    }
    return he({
      generatePdf: Q2,
      generateImage: ee,
      toggleAnnotator: R2
    }), (a, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-gauge ${S.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      ref_key: "gaugeChart",
      ref: w,
      id: `vue-ui-gauge_${k2.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: w.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: O2.value,
        onClose: R2
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      pe.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: q,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: L,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${H.value}`,
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
            e.value.translations.base && Y.dataset.base ? (openBlock(), createElementBlock("span", Ve, toDisplayString(e.value.translations.base) + ": " + toDisplayString(Y.dataset.base), 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && $.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: ye,
        key: `user_options_${B.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(K),
        isPrinting: unref(J),
        uid: k2.value,
        hasXls: false,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: S.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: w.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: O2.value,
        onToggleFullscreen: ke,
        onGeneratePdf: unref(Q2),
        onGenerateImage: unref(ee),
        onToggleAnnotator: R2
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
        } : void 0,
        a.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: l, isAnnotator: n }) => [
            renderSlot(a.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: l, isAnnotator: n })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      $.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": S.value, "vue-data-ui-fulscreen--off": !S.value }),
        viewBox: `0 0 ${t.value.width <= 0 ? 10 : t.value.width} ${t.value.height <= 0 ? 10 : t.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:hidden !important;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            id: `gradient_${k2.value}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)("#FFFFFF", 1)
            }, null, 8, Ze),
            createBaseVNode("stop", {
              offset: "80%",
              "stop-color": unref(dr)("#FFFFFF", e.value.style.chart.layout.track.gradientIntensity)
            }, null, 8, Je),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)("#FFFFFF", 1)
            }, null, 8, Ke)
          ], 8, He2)
        ]),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${k2.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 100 / e.value.style.chart.layout.track.gradientIntensity
            }, null, 8, et)
          ], 8, Qe)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (l, n) => (openBlock(), createElementBlock("path", {
          key: `arc_${n}`,
          d: l.arcSlice,
          fill: l.color,
          stroke: e.value.style.chart.backgroundColor,
          "stroke-linecap": "round"
        }, null, 8, tt))), 128)),
        e.value.style.chart.layout.track.useGradient ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(me.value, (l, n) => (openBlock(), createElementBlock("path", {
          key: `arc_${n}`,
          d: l.arcSlice,
          fill: "#FFFFFF",
          stroke: "none",
          "stroke-linecap": "round",
          filter: `url(#blur_${k2.value})`
        }, null, 8, at))), 128)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (l, n) => (openBlock(), createElementBlock("text", {
          x: unref(Rt)({
            centerX: t.value.width / 2,
            centerY: i.value.base,
            initX: l.center.startX,
            initY: l.center.startY,
            offset: t.value.markerOffset
          }).x,
          y: unref(Rt)({
            centerX: t.value.width / 2,
            centerY: i.value.base,
            initX: l.center.startX,
            initY: l.center.startY,
            offset: t.value.markerOffset
          }).y,
          "text-anchor": l.center.startX < t.value.width / 2 - 5 ? "end" : l.center.startX > t.value.width / 2 + 5 ? "start" : "middle",
          "font-size": t.value.labelFontSize * e.value.style.chart.layout.markers.fontSizeRatio,
          "font-weight": `${e.value.style.chart.layout.markers.bold ? "bold" : "normal"}`,
          fill: e.value.style.chart.layout.markers.color
        }, toDisplayString(l.from.toFixed(e.value.style.chart.layout.markers.roundingValue)), 9, lt))), 256)),
        createBaseVNode("text", {
          x: unref(Rt)({
            centerX: t.value.width / 2,
            centerY: i.value.base,
            initX: x2.value.at(-1).endX,
            initY: x2.value.at(-1).endY,
            offset: t.value.markerOffset
          }).x,
          y: unref(Rt)({
            centerX: t.value.width / 2,
            centerY: i.value.base,
            initX: x2.value.at(-1).endX,
            initY: x2.value.at(-1).endY,
            offset: t.value.markerOffset
          }).y,
          "text-anchor": "start",
          "font-size": t.value.labelFontSize * e.value.style.chart.layout.markers.fontSizeRatio,
          "font-weight": `${e.value.style.chart.layout.markers.bold ? "bold" : "normal"}`,
          fill: e.value.style.chart.layout.markers.color
        }, toDisplayString(M.value.toFixed(e.value.style.chart.layout.markers.roundingValue)), 9, ot),
        e.value.style.chart.layout.pointer.type === "rounded" ? (openBlock(), createElementBlock("g", st, [
          isNaN(h.value.x2) ? createCommentVNode("", true) : (openBlock(), createElementBlock("line", {
            key: 0,
            x1: h.value.x1,
            y1: h.value.y1,
            x2: h.value.x2,
            y2: h.value.y2,
            stroke: e.value.style.chart.layout.pointer.stroke,
            "stroke-width": t.value.pointerStrokeWidth,
            "stroke-linecap": "round"
          }, null, 8, rt2)),
          isNaN(h.value.x2) ? createCommentVNode("", true) : (openBlock(), createElementBlock("line", {
            key: 1,
            x1: h.value.x1,
            y1: h.value.y1,
            x2: h.value.x2,
            y2: h.value.y2,
            stroke: e.value.style.chart.layout.pointer.useRatingColor ? G.value : e.value.style.chart.layout.pointer.color,
            "stroke-linecap": "round",
            "stroke-width": t.value.pointerStrokeWidth * 0.7
          }, null, 8, nt)),
          !isNaN(h.value.x2) && e.value.style.chart.layout.track.useGradient ? (openBlock(), createElementBlock("line", {
            key: 2,
            x1: h.value.x1,
            y1: h.value.y1,
            x2: h.value.x2,
            y2: h.value.y2,
            stroke: "white",
            "stroke-linecap": "round",
            "stroke-width": t.value.pointerStrokeWidth * 0.3,
            filter: `url(#blur_${k2.value})`
          }, null, 8, ut)) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("g", it, [
          te2.value ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: te2.value,
            fill: e.value.style.chart.layout.pointer.useRatingColor ? G.value : e.value.style.chart.layout.pointer.color,
            stroke: e.value.style.chart.layout.pointer.stroke,
            "stroke-width": e.value.style.chart.layout.pointer.circle.strokeWidth,
            "stroke-linejoin": "round"
          }, null, 8, ct)) : createCommentVNode("", true)
        ])),
        createBaseVNode("circle", {
          cx: t.value.width / 2,
          cy: i.value.base,
          fill: e.value.style.chart.layout.pointer.circle.color,
          r: t.value.pointerRadius <= 0 ? 1e-4 : t.value.pointerRadius,
          "stroke-width": e.value.style.chart.layout.pointer.circle.strokeWidth,
          stroke: e.value.style.chart.layout.pointer.circle.stroke
        }, null, 8, vt),
        createBaseVNode("text", {
          x: t.value.width / 2,
          y: i.value.ratingBase,
          "text-anchor": "middle",
          "font-size": t.value.legendFontSize,
          "font-weight": "bold",
          fill: e.value.style.chart.legend.useRatingColor ? G.value : e.value.style.chart.legend.color
        }, toDisplayString(unref(ir)(
          e.value.style.chart.legend.formatter,
          d.value,
          unref(Ht)({
            p: e.value.style.chart.legend.prefix + (e.value.style.chart.legend.showPlusSymbol && d.value > 0 ? "+" : ""),
            v: d.value,
            s: e.value.style.chart.legend.suffix,
            r: e.value.style.chart.legend.roundingValue
          })
        )), 9, dt),
        renderSlot(a.$slots, "svg", { svg: t.value }, void 0, true)
      ], 14, qe)) : createCommentVNode("", true),
      a.$slots.watermark ? (openBlock(), createElementBlock("div", ht, [
        renderSlot(a.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(J) || unref(K) })), void 0, true)
      ])) : createCommentVNode("", true),
      $.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
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
        ref: W
      }, [
        renderSlot(a.$slots, "legend", { legend: _.value }, void 0, true)
      ], 512),
      a.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: V,
        dir: "auto"
      }, [
        renderSlot(a.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 14, We));
  }
};
var St = s(ft, [["__scopeId", "data-v-1082d899"]]);
export {
  St as default
};
//# sourceMappingURL=vue-ui-gauge-DNJXnyLw-JCU6C4YT.js.map
