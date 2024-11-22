import {
  C
} from "./chunk-KAESDEK5.js";
import {
  M,
  O
} from "./chunk-NF5J7GNE.js";
import {
  W
} from "./chunk-AG6S3GFO.js";
import "./chunk-7VCRGXFE.js";
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
  R
} from "./chunk-SRQVUCUV.js";
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
  It,
  Kt,
  Lt,
  Mt,
  Nt,
  Ot,
  Qt,
  Vt,
  Xt,
  k,
  nr,
  oe,
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
  createTextVNode,
  createVNode,
  guardReactiveProps,
  nextTick,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-dumbbell-B7j1_JoQ.js
var qe = ["id"];
var Ye = ["xmlns", "viewBox"];
var Ze = { key: 0 };
var Je = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var Ke = { key: 1 };
var Qe = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var et = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var tt = { key: 2 };
var lt = ["x", "y", "font-size", "fill", "font-weight"];
var at = ["x", "y", "font-size", "fill"];
var st = { key: 3 };
var ot = ["x", "y", "font-size", "fill", "font-weight"];
var rt = ["id"];
var nt = ["stop-color"];
var ut = ["stop-color"];
var it = ["stop-color"];
var ct = ["id"];
var dt = ["stop-color"];
var vt = ["stop-color"];
var ht = ["stop-color"];
var yt = ["id"];
var bt = ["stop-color"];
var ft = ["stop-color"];
var gt = ["id"];
var mt = ["stop-color"];
var pt = ["stop-color"];
var _t = { key: 0 };
var xt = ["d", "fill"];
var kt = { key: 1 };
var Ct = ["x", "y", "height", "width", "fill"];
var wt = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var $t = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var Lt2 = { key: 2 };
var zt = ["x", "y", "fill", "font-size"];
var Xt2 = { key: 3 };
var St = ["x", "y", "fill", "font-size"];
var Nt2 = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var At = ["xmlns", "height", "width"];
var Tt = ["fill"];
var Pt = ["innerHTML"];
var Gt2 = {
  __name: "vue-ui-dumbbell",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["selectDatapoint"],
  setup(me, { expose: pe, emit: Dt }) {
    const m = me, { vue_ui_dumbbell: _e } = oe(), X = computed({
      get() {
        return !!m.dataset && m.dataset.length;
      },
      set(l) {
        return l;
      }
    }), h = ref(Lt()), H = ref(0), T = ref(null), W2 = ref(null), R2 = ref(null), B = ref(0), U = ref(0), j = ref(0), e = computed({
      get: () => q(),
      set: (l) => l
    });
    function q() {
      const l = c({
        userConfig: m.config,
        defaultConfig: _e
      });
      return l.theme ? {
        ...c({
          userConfig: Ge.vue_ui_dumbbell[l.theme] || m.config,
          defaultConfig: l
        })
      } : l;
    }
    watch(() => m.config, (l) => {
      e.value = q(), Y(), B.value += 1, U.value += 1, j.value += 1, v.value = e.value.style.chart.rowHeight, N.value = e.value.style.chart.width;
    }, { deep: true }), watch(() => m.dataset, (l) => {
      te();
    }, { deep: true });
    const P = ref(null);
    onMounted(() => {
      Y();
    });
    function Y() {
      if (Xt(m.dataset) ? Kt({
        componentName: "VueUiDumbbell",
        type: "dataset"
      }) : m.dataset.forEach((l, u) => {
        qt({
          datasetObject: l,
          requiredAttributes: ["name", "start", "end"]
        }).forEach((t) => {
          X.value = false, Kt({
            componentName: "VueUiDumbbell",
            type: "datasetSerieAttribute",
            property: t,
            index: u
          });
        });
      }), e.value.responsive) {
        const l = O(() => {
          const { width: u, height: t } = M({
            chart: T.value,
            title: e.value.style.chart.title.text ? W2.value : null,
            legend: e.value.style.chart.legend.show ? R2.value : null
          });
          N.value = u, v.value = t / m.dataset.length, b.value = D();
        });
        P.value = new ResizeObserver(l), P.value.observe(T.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      P.value && P.value.disconnect();
    });
    const { isPrinting: Z, isImaging: J, generatePdf: K, generateImage: Q } = se({
      elementId: `dumbbell_${h.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-dumbbell"
    }), G = ref({
      showTable: e.value.table.show
    }), x2 = computed(() => m.dataset.map((l, u) => ({
      ...l,
      start: k(l.start),
      end: k(l.end),
      id: Lt()
    }))), F = computed(() => ({
      max: Math.max(...x2.value.flatMap((l) => [l.start, l.end])),
      min: Math.min(...x2.value.flatMap((l) => [l.start, l.end]))
    })), c2 = computed(() => It(F.value.min < 0 ? F.value.min : 0, F.value.max, e.value.style.chart.grid.scaleSteps)), v = ref(e.value.style.chart.rowHeight), N = ref(e.value.style.chart.width), a = computed(() => {
      const l = v.value, u = e.value.style.chart.padding.left + e.value.style.chart.padding.right + N.value, t = e.value.style.chart.padding.top + e.value.style.chart.padding.bottom + l * m.dataset.length, s2 = c2.value.ticks.length * (N.value / c2.value.ticks.length);
      return {
        left: e.value.style.chart.padding.left,
        right: u - e.value.style.chart.padding.right,
        top: e.value.style.chart.padding.top,
        bottom: t - e.value.style.chart.padding.bottom,
        width: N.value,
        height: l * m.dataset.length,
        rowHeight: l,
        absoluteHeight: t,
        absoluteWidth: u,
        widthPlotReference: s2
      };
    });
    function D() {
      return x2.value.map((l, u) => {
        const t = a.value.left + (l.start + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * a.value.widthPlotReference, s2 = a.value.left + (l.end + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * a.value.widthPlotReference, i = t + (s2 - t) / 2;
        return {
          ...l,
          startX: t,
          endX: s2,
          centerX: i,
          y: a.value.top + u * v.value + v.value / 2,
          endVal: l.start
        };
      });
    }
    const b = ref([]), ee = ref(null), xe = computed(() => x2.value.map((l) => l.end).reduce((l, u) => l + u, 0));
    onMounted(() => {
      te();
    });
    function te() {
      b.value = D();
      let l = b.value.map((t) => t.start).reduce((t, s2) => t + s2, 0);
      function u() {
        const t = x2.value.map((s2) => s2.end - s2.start);
        l >= xe.value ? (cancelAnimationFrame(ee.value), b.value = D()) : (b.value = b.value.map((s2, i) => {
          s2.endVal += t[i] * (e.value.animationSpeed / 100);
          const f = a.value.left + (s2.start + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * a.value.widthPlotReference, M2 = a.value.left + (s2.endVal + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * a.value.widthPlotReference, O2 = f + (M2 - f) / 2;
          return {
            ...s2,
            startX: f,
            endX: M2,
            centerX: O2,
            y: a.value.top + i * v.value + v.value / 2,
            endVal: s2.endVal
          };
        }), l = b.value.map((s2) => s2.endVal).reduce((s2, i) => s2 + i, 0), ee.value = requestAnimationFrame(u));
      }
      e.value.useAnimation ? u() : b.value = D();
    }
    const le = computed(() => [
      { name: e.value.style.chart.legend.labelStart, color: e.value.style.chart.plots.gradient.show ? `url(#start_grad_${h.value})` : e.value.style.chart.plots.startColor },
      { name: e.value.style.chart.legend.labelEnd, color: e.value.style.chart.plots.gradient.show ? `url(#end_grad_${h.value})` : e.value.style.chart.plots.endColor }
    ]), ke = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      paddingTop: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), k2 = computed(() => {
      const l = b.value.map((t) => ({
        name: t.name
      })), u = b.value.map((t) => ({
        start: t.start,
        end: t.end
      }));
      return { head: l, body: u };
    }), I = computed(() => {
      const l = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.start,
        e.value.table.columnNames.end,
        e.value.table.columnNames.progression
      ], u = k2.value.head.map((i, f) => {
        const M2 = Gt({
          p: e.value.style.chart.labels.prefix,
          v: k2.value.body[f].start,
          s: e.value.style.chart.labels.suffix,
          r: e.value.table.td.roundingValue
        }), O2 = Gt({
          p: e.value.style.chart.labels.prefix,
          v: k2.value.body[f].end,
          s: e.value.style.chart.labels.suffix,
          r: e.value.table.td.roundingValue
        }), $e = Gt({
          v: 100 * (k2.value.body[f].end / k2.value.body[f].start - 1),
          s: "%",
          r: e.value.table.td.roundingPercentage
        });
        return [
          { name: i.name },
          M2,
          O2,
          $e
        ];
      }), t = {
        th: {
          backgroundColor: e.value.table.th.backgroundColor,
          color: e.value.table.th.color,
          outline: e.value.table.th.outline
        },
        td: {
          backgroundColor: e.value.table.td.backgroundColor,
          color: e.value.table.td.color,
          outline: e.value.table.td.outline
        },
        breakpoint: e.value.table.responsiveBreakpoint
      };
      return {
        colNames: [
          e.value.table.columnNames.series,
          e.value.table.columnNames.start,
          e.value.table.columnNames.end,
          e.value.table.columnNames.progression
        ],
        head: l,
        body: u,
        config: t
      };
    });
    function ae() {
      nextTick(() => {
        const l = k2.value.head.map((s2, i) => [[
          s2.name
        ], [k2.value.body[i].start], [k2.value.body[i].end]]), u = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[e.value.table.columnNames.series], [e.value.table.columnNames.start], [e.value.table.columnNames.end]]].concat(l), t = Nt(u);
        Ot({ csvContent: t, title: e.value.style.chart.title.text || "vue-ui-dumbbell" });
      });
    }
    const A = ref(false);
    function Ce(l) {
      A.value = l, H.value += 1;
    }
    function we() {
      return b.value;
    }
    function se2() {
      G.value.showTable = !G.value.showTable;
    }
    return pe({
      getData: we,
      generatePdf: K,
      generateCsv: ae,
      generateImage: Q,
      toggleTable: se2
    }), (l, u) => (openBlock(), createElementBlock("div", {
      ref_key: "dumbbellChart",
      ref: T,
      class: normalizeClass(`vue-ui-dumbbell ${A.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`),
      id: `dumbbell_${h.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: W2,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${B.value}`,
          config: {
            title: {
              cy: "donut-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "donut-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${H.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(Z),
        isImaging: unref(J),
        uid: h.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: A.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: T.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Ce,
        onGeneratePdf: unref(K),
        onGenerateCsv: ae,
        onGenerateImage: unref(Q),
        onToggleTable: se2
      }, createSlots({ _: 2 }, [
        l.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        l.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        l.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        l.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        l.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: s2 }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: s2 })), void 0, true)
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": A.value, "vue-data-ui-fulscreen--off": !A.value }),
        viewBox: `0 0 ${a.value.absoluteWidth <= 0 ? 10 : a.value.absoluteWidth} ${a.value.absoluteHeight <= 0 ? 10 : a.value.absoluteHeight}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.style.chart.grid.verticalGrid.show ? (openBlock(), createElementBlock("g", Ze, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.ticks, (t, s2) => (openBlock(), createElementBlock("line", {
            x1: a.value.left + s2 * a.value.width / (c2.value.ticks.length - 1),
            x2: a.value.left + s2 * a.value.width / (c2.value.ticks.length - 1),
            y1: a.value.top,
            y2: a.value.bottom,
            stroke: e.value.style.chart.grid.verticalGrid.stroke,
            "stroke-width": e.value.style.chart.grid.verticalGrid.strokeWidth,
            "stroke-dasharray": e.value.style.chart.grid.verticalGrid.strokeDasharray
          }, null, 8, Je))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.grid.horizontalGrid.show ? (openBlock(), createElementBlock("g", Ke, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (t, s2) => (openBlock(), createElementBlock("line", {
            x1: a.value.left,
            x2: a.value.right,
            y1: a.value.top + s2 * v.value,
            y2: a.value.top + s2 * v.value,
            stroke: e.value.style.chart.grid.horizontalGrid.stroke,
            "stroke-width": e.value.style.chart.grid.horizontalGrid.strokeWidth,
            "stroke-dasharray": e.value.style.chart.grid.horizontalGrid.strokeDasharray
          }, null, 8, Qe))), 256)),
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.right,
            y1: a.value.bottom,
            y2: a.value.bottom,
            stroke: e.value.style.chart.grid.horizontalGrid.stroke,
            "stroke-width": e.value.style.chart.grid.horizontalGrid.strokeWidth,
            "stroke-dasharray": e.value.style.chart.grid.horizontalGrid.strokeDasharray
          }, null, 8, et)
        ])) : createCommentVNode("", true),
        e.value.style.chart.labels.yAxisLabels.show ? (openBlock(), createElementBlock("g", tt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (t, s2) => (openBlock(), createElementBlock("text", {
            x: a.value.left - 6 + e.value.style.chart.labels.yAxisLabels.offsetX,
            y: a.value.top + s2 * v.value + (e.value.style.chart.labels.yAxisLabels.showProgression ? v.value / 3 : v.value / 2) + e.value.style.chart.labels.yAxisLabels.fontSize / 3,
            "font-size": e.value.style.chart.labels.yAxisLabels.fontSize,
            fill: e.value.style.chart.labels.yAxisLabels.color,
            "font-weight": e.value.style.chart.labels.yAxisLabels.bold ? "bold" : "normal",
            "text-anchor": "end"
          }, toDisplayString(t.name), 9, lt))), 256)),
          e.value.style.chart.labels.yAxisLabels.showProgression ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(x2.value, (t, s2) => (openBlock(), createElementBlock("text", {
            x: a.value.left - 6 + e.value.style.chart.labels.yAxisLabels.offsetX,
            y: a.value.top + s2 * v.value + v.value / 1.3 + e.value.style.chart.labels.yAxisLabels.fontSize / 3,
            "font-size": e.value.style.chart.labels.yAxisLabels.fontSize,
            fill: e.value.style.chart.labels.yAxisLabels.color,
            "text-anchor": "end"
          }, toDisplayString(unref(Gt)({
            v: 100 * (t.end / t.start - 1),
            s: "%",
            r: e.value.style.chart.labels.yAxisLabels.rounding
          })), 9, at))), 256)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.chart.labels.xAxisLabels.show ? (openBlock(), createElementBlock("g", st, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.ticks, (t, s2) => (openBlock(), createElementBlock("text", {
            x: a.value.left + s2 * (a.value.width / (c2.value.ticks.length - 1)),
            y: a.value.bottom + e.value.style.chart.labels.xAxisLabels.fontSize + e.value.style.chart.labels.xAxisLabels.offsetY,
            "font-size": e.value.style.chart.labels.xAxisLabels.fontSize,
            fill: e.value.style.chart.labels.xAxisLabels.color,
            "font-weight": e.value.style.chart.labels.xAxisLabels.bold ? "bold" : "normal",
            "text-anchor": "middle"
          }, toDisplayString(unref(nr)(
            e.value.style.chart.labels.formatter,
            t,
            unref(Gt)({
              p: e.value.style.chart.labels.prefix,
              v: t,
              s: e.value.style.chart.labels.suffix,
              r: e.value.style.chart.labels.xAxisLabels.rounding
            }),
            { datapoint: t, seriesIndex: s2 }
          )), 9, ot))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            id: `start_grad_${h.value}`,
            fy: "30%"
          }, [
            createBaseVNode("stop", {
              offset: "10%",
              "stop-color": unref(Mt)(e.value.style.chart.plots.startColor, e.value.style.chart.plots.gradient.intensity / 100)
            }, null, 8, nt),
            createBaseVNode("stop", {
              offset: "90%",
              "stop-color": unref(Vt)(e.value.style.chart.plots.startColor, 0.1)
            }, null, 8, ut),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.chart.plots.startColor
            }, null, 8, it)
          ], 8, rt),
          createBaseVNode("radialGradient", {
            id: `end_grad_${h.value}`,
            fy: "30%"
          }, [
            createBaseVNode("stop", {
              offset: "10%",
              "stop-color": unref(Mt)(e.value.style.chart.plots.endColor, e.value.style.chart.plots.gradient.intensity / 100)
            }, null, 8, dt),
            createBaseVNode("stop", {
              offset: "90%",
              "stop-color": unref(Vt)(e.value.style.chart.plots.endColor, 0.1)
            }, null, 8, vt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.chart.plots.endColor
            }, null, 8, ht)
          ], 8, ct)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `grad_positive_${h.value}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.chart.plots.startColor
              }, null, 8, bt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.chart.plots.endColor
              }, null, 8, ft)
            ], 8, yt),
            createBaseVNode("linearGradient", {
              id: `grad_negative_${h.value}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.chart.plots.endColor
              }, null, 8, mt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.chart.plots.startColor
              }, null, 8, pt)
            ], 8, gt)
          ]),
          e.value.style.chart.plots.link.type === "curved" ? (openBlock(), createElementBlock("g", _t, [
            createBaseVNode("path", {
              d: `M 
                            ${t.startX},${t.y + e.value.style.chart.plots.radius / 2} 
                            C ${t.centerX},${t.y} ${t.centerX},${t.y} 
                            ${t.endX},${t.y + e.value.style.chart.plots.radius / 2}
                            L ${t.endX},${t.y - e.value.style.chart.plots.radius / 2}
                            C ${t.centerX},${t.y} ${t.centerX},${t.y}
                            ${t.startX},${t.y - e.value.style.chart.plots.radius / 2}
                            Z
                        `,
              fill: t.endX > t.startX ? `url(#grad_positive_${h.value})` : `url(#grad_negative_${h.value})`
            }, null, 8, xt)
          ])) : (openBlock(), createElementBlock("g", kt, [
            createBaseVNode("rect", {
              x: t.endX > t.startX ? t.startX : t.endX,
              y: t.y - e.value.style.chart.plots.link.strokeWidth / 2,
              height: e.value.style.chart.plots.link.strokeWidth,
              width: Math.abs(t.endX - t.startX),
              fill: t.endX > t.startX ? `url(#grad_positive_${h.value})` : `url(#grad_negative_${h.value})`
            }, null, 8, Ct)
          ])),
          createBaseVNode("circle", {
            cx: t.startX,
            cy: t.y,
            r: e.value.style.chart.plots.radius,
            fill: e.value.style.chart.plots.gradient.show ? `url(#start_grad_${h.value})` : e.value.style.chart.plots.startColor,
            stroke: e.value.style.chart.plots.stroke,
            "stroke-width": e.value.style.chart.plots.strokeWidth
          }, null, 8, wt),
          createBaseVNode("circle", {
            cx: t.endX,
            cy: t.y,
            r: e.value.style.chart.plots.radius,
            fill: e.value.style.chart.plots.gradient.show ? `url(#end_grad_${h.value})` : e.value.style.chart.plots.endColor,
            stroke: e.value.style.chart.plots.stroke,
            "stroke-width": e.value.style.chart.plots.strokeWidth
          }, null, 8, $t),
          e.value.style.chart.labels.startLabels.show ? (openBlock(), createElementBlock("g", Lt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (i, f) => (openBlock(), createElementBlock("text", {
              x: i.startX,
              y: a.value.top + (f + 1) * v.value - e.value.style.chart.labels.startLabels.fontSize / 3 + e.value.style.chart.labels.startLabels.offsetY,
              fill: e.value.style.chart.labels.startLabels.useStartColor ? e.value.style.chart.plots.startColor : e.value.style.chart.labels.startLabels.color,
              "font-size": e.value.style.chart.labels.startLabels.fontSize,
              "text-anchor": "middle"
            }, toDisplayString(unref(nr)(
              e.value.style.chart.labels.formatter,
              i.start,
              unref(Gt)({
                p: e.value.style.chart.labels.prefix,
                v: i.start,
                s: e.value.style.chart.labels.suffix,
                r: e.value.style.chart.labels.startLabels.rounding
              }),
              { datapoint: i, seriesIndex: f }
            )), 9, zt))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.chart.labels.endLabels.show ? (openBlock(), createElementBlock("g", Xt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (i, f) => (openBlock(), createElementBlock("text", {
              x: i.endX,
              y: a.value.top + f * v.value + e.value.style.chart.labels.endLabels.fontSize + e.value.style.chart.labels.endLabels.offsetY,
              fill: e.value.style.chart.labels.endLabels.useEndColor ? e.value.style.chart.plots.endColor : e.value.style.chart.labels.endLabels.color,
              "font-size": e.value.style.chart.labels.endLabels.fontSize,
              "text-anchor": "middle"
            }, toDisplayString(unref(nr)(
              e.value.style.chart.labels.formatter,
              i.end,
              unref(Gt)({
                p: e.value.style.chart.labels.prefix,
                v: i.end,
                s: e.value.style.chart.labels.suffix,
                r: e.value.style.chart.labels.endLabels.rounding
              }),
              { datapoint: i, seriesIndex: f }
            )), 9, St))), 256))
          ])) : createCommentVNode("", true)
        ]))), 256)),
        renderSlot(l.$slots, "svg", { svg: a.value }, void 0, true)
      ], 14, Ye)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", Nt2, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(Z) || unref(J) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "dumbbell",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            dumbbell: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: R2
      }, [
        e.value.style.chart.legend.show && X.value ? (openBlock(), createBlock(C, {
          key: `legend_${j.value}`,
          legendSet: le.value,
          config: ke.value
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              style: normalizeStyle(`display:flex;align-items:center;gap:4px;font-size:${e.value.style.chart.legend.fontSize}px`)
            }, [
              (openBlock(), createElementBlock("svg", {
                xmlns: unref(Qt),
                viewBox: "0 0 20 20",
                height: e.value.style.chart.legend.fontSize,
                width: e.value.style.chart.legend.fontSize
              }, [
                createBaseVNode("circle", {
                  cx: 10,
                  cy: 10,
                  r: 9,
                  fill: t.color
                }, null, 8, Tt)
              ], 8, At)),
              createTextVNode(" " + toDisplayString(t.name), 1)
            ], 4)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(l.$slots, "legend", {
          key: 1,
          legend: le.value
        }, void 0, true)
      ], 512),
      X.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: G.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: e.value.style.chart.backgroundColor,
            color: e.value.style.chart.color
          },
          head: {
            backgroundColor: e.value.style.chart.backgroundColor,
            color: e.value.style.chart.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${U.value}`,
            colNames: I.value.colNames,
            head: I.value.head,
            body: I.value.body,
            config: I.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: u[0] || (u[0] = (t) => G.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createBaseVNode("div", {
                innerHTML: t,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Pt)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(t.name || t), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, qe));
  }
};
var qt2 = s(Gt2, [["__scopeId", "data-v-2df541ce"]]);
export {
  qt2 as default
};
//# sourceMappingURL=vue-ui-dumbbell-B7j1_JoQ-TTED6IGR.js.map
