import {
  C
} from "./chunk-ZYATGC4V.js";
import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
import {
  W
} from "./chunk-ROOSILH6.js";
import "./chunk-H2UGMUIX.js";
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
  R
} from "./chunk-MBHJSANR.js";
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
  It,
  Jt,
  Nt,
  Ut,
  Vt,
  Wt,
  Zt,
  ir,
  jt,
  k as k2,
  qt,
  te
} from "./chunk-4SKEOFB2.js";
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-dumbbell-BacTx3zB.js
var et = ["id"];
var tt = ["xmlns", "viewBox"];
var lt = { key: 0 };
var at = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var st = { key: 1 };
var ot = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var rt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var nt = { key: 2 };
var ut = ["x", "y", "font-size", "fill", "font-weight"];
var it = ["x", "y", "font-size", "fill"];
var ct = { key: 3 };
var dt = ["x", "y", "font-size", "fill", "font-weight"];
var vt = ["id"];
var ht = ["stop-color"];
var yt = ["stop-color"];
var ft = ["stop-color"];
var bt = ["id"];
var gt = ["stop-color"];
var pt = ["stop-color"];
var mt = ["stop-color"];
var _t = ["id"];
var kt = ["stop-color"];
var xt = ["stop-color"];
var Ct = ["id"];
var wt = ["stop-color"];
var $t = ["stop-color"];
var Lt = { key: 0 };
var At = ["d", "fill"];
var zt = { key: 1 };
var Xt = ["x", "y", "height", "width", "fill"];
var St = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var Nt2 = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var Tt = { key: 2 };
var Pt = ["x", "y", "fill", "font-size"];
var Gt = { key: 3 };
var Dt2 = ["x", "y", "fill", "font-size"];
var It2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Mt = ["xmlns", "height", "width"];
var Ot = ["fill"];
var Ft = ["innerHTML"];
var Vt2 = {
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
  setup(xe, { expose: Ce, emit: Et }) {
    const p2 = xe, { vue_ui_dumbbell: we } = te(), X = computed({
      get() {
        return !!p2.dataset && p2.dataset.length;
      },
      set(l) {
        return l;
      }
    }), f = ref(Dt()), U = ref(0), S = ref(null), j = ref(null), q = ref(null), Y = ref(null), Z = ref(null), J = ref(0), K = ref(0), Q = ref(0), e = computed({
      get: () => ee(),
      set: (l) => l
    });
    function ee() {
      const l = c({
        userConfig: p2.config,
        defaultConfig: we
      });
      return l.theme ? {
        ...c({
          userConfig: He.vue_ui_dumbbell[l.theme] || p2.config,
          defaultConfig: l
        })
      } : l;
    }
    watch(() => p2.config, (l) => {
      e.value = ee(), te2(), J.value += 1, K.value += 1, Q.value += 1, h.value = e.value.style.chart.rowHeight, N.value = e.value.style.chart.width;
    }, { deep: true }), watch(() => p2.dataset, (l) => {
      ne();
    }, { deep: true });
    const P = ref(null);
    onMounted(() => {
      te2();
    });
    function te2() {
      if (jt(p2.dataset) ? qt({
        componentName: "VueUiDumbbell",
        type: "dataset"
      }) : p2.dataset.forEach((l, u) => {
        Zt({
          datasetObject: l,
          requiredAttributes: ["name", "start", "end"]
        }).forEach((t) => {
          X.value = false, qt({
            componentName: "VueUiDumbbell",
            type: "datasetSerieAttribute",
            property: t,
            index: u
          });
        });
      }), e.value.responsive) {
        const l = O(() => {
          const { width: u, height: t } = k({
            chart: S.value,
            title: e.value.style.chart.title.text ? j.value : null,
            legend: e.value.style.chart.legend.show ? q.value : null,
            source: Y.value,
            noTitle: Z.value
          });
          N.value = u, h.value = t / p2.dataset.length, b.value = D();
        });
        P.value = new ResizeObserver(l), P.value.observe(S.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      P.value && P.value.disconnect();
    });
    const { isPrinting: le, isImaging: ae2, generatePdf: se, generateImage: oe } = re({
      elementId: `dumbbell_${f.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-dumbbell"
    }), $e = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), G = ref({
      showTable: e.value.table.show
    }), x2 = computed(() => p2.dataset.map((l, u) => ({
      ...l,
      start: k2(l.start),
      end: k2(l.end),
      id: Dt()
    }))), F = computed(() => ({
      max: Math.max(...x2.value.flatMap((l) => [l.start, l.end])),
      min: Math.min(...x2.value.flatMap((l) => [l.start, l.end]))
    })), c2 = computed(() => Ut(F.value.min < 0 ? F.value.min : 0, F.value.max, e.value.style.chart.grid.scaleSteps)), h = ref(e.value.style.chart.rowHeight), N = ref(e.value.style.chart.width), s2 = computed(() => {
      const l = h.value, u = e.value.style.chart.padding.left + e.value.style.chart.padding.right + N.value, t = e.value.style.chart.padding.top + e.value.style.chart.padding.bottom + l * p2.dataset.length, a = c2.value.ticks.length * (N.value / c2.value.ticks.length);
      return {
        left: e.value.style.chart.padding.left,
        right: u - e.value.style.chart.padding.right,
        top: e.value.style.chart.padding.top,
        bottom: t - e.value.style.chart.padding.bottom,
        width: N.value,
        height: l * p2.dataset.length,
        rowHeight: l,
        absoluteHeight: t,
        absoluteWidth: u,
        widthPlotReference: a
      };
    });
    function D() {
      return x2.value.map((l, u) => {
        const t = s2.value.left + (l.start + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * s2.value.widthPlotReference, a = s2.value.left + (l.end + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * s2.value.widthPlotReference, i = t + (a - t) / 2;
        return {
          ...l,
          startX: t,
          endX: a,
          centerX: i,
          y: s2.value.top + u * h.value + h.value / 2,
          endVal: l.start
        };
      });
    }
    const b = ref([]), re2 = ref(null), Le = computed(() => x2.value.map((l) => l.end).reduce((l, u) => l + u, 0));
    onMounted(() => {
      ne();
    });
    function ne() {
      b.value = D();
      let l = b.value.map((t) => t.start).reduce((t, a) => t + a, 0);
      function u() {
        const t = x2.value.map((a) => a.end - a.start);
        l >= Le.value ? (cancelAnimationFrame(re2.value), b.value = D()) : (b.value = b.value.map((a, i) => {
          a.endVal += t[i] * (e.value.animationSpeed / 100);
          const g = s2.value.left + (a.start + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * s2.value.widthPlotReference, O2 = s2.value.left + (a.endVal + Math.abs(c2.value.min)) / (c2.value.max + Math.abs(c2.value.min)) * s2.value.widthPlotReference, E = g + (O2 - g) / 2;
          return {
            ...a,
            startX: g,
            endX: O2,
            centerX: E,
            y: s2.value.top + i * h.value + h.value / 2,
            endVal: a.endVal
          };
        }), l = b.value.map((a) => a.endVal).reduce((a, i) => a + i, 0), re2.value = requestAnimationFrame(u));
      }
      e.value.useAnimation ? u() : b.value = D();
    }
    const ue = computed(() => [
      { name: e.value.style.chart.legend.labelStart, color: e.value.style.chart.plots.gradient.show ? `url(#start_grad_${f.value})` : e.value.style.chart.plots.startColor },
      { name: e.value.style.chart.legend.labelEnd, color: e.value.style.chart.plots.gradient.show ? `url(#end_grad_${f.value})` : e.value.style.chart.plots.endColor }
    ]), Ae = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      paddingTop: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), C2 = computed(() => {
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
      ], u = C2.value.head.map((i, g) => {
        const O2 = Ht({
          p: e.value.style.chart.labels.prefix,
          v: C2.value.body[g].start,
          s: e.value.style.chart.labels.suffix,
          r: e.value.table.td.roundingValue
        }), E = Ht({
          p: e.value.style.chart.labels.prefix,
          v: C2.value.body[g].end,
          s: e.value.style.chart.labels.suffix,
          r: e.value.table.td.roundingValue
        }), Se2 = Ht({
          v: 100 * (C2.value.body[g].end / C2.value.body[g].start - 1),
          s: "%",
          r: e.value.table.td.roundingPercentage
        });
        return [
          { name: i.name },
          O2,
          E,
          Se2
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
    function ie() {
      nextTick(() => {
        const l = C2.value.head.map((a, i) => [[
          a.name
        ], [C2.value.body[i].start], [C2.value.body[i].end]]), u = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[e.value.table.columnNames.series], [e.value.table.columnNames.start], [e.value.table.columnNames.end]]].concat(l), t = Vt(u);
        Nt({ csvContent: t, title: e.value.style.chart.title.text || "vue-ui-dumbbell" });
      });
    }
    const T = ref(false);
    function ze(l) {
      T.value = l, U.value += 1;
    }
    function Xe() {
      return b.value;
    }
    function ce() {
      G.value.showTable = !G.value.showTable;
    }
    const M = ref(false);
    function V() {
      M.value = !M.value;
    }
    return Ce({
      getData: Xe,
      generatePdf: se,
      generateCsv: ie,
      generateImage: oe,
      toggleTable: ce,
      toggleAnnotator: V
    }), (l, u) => (openBlock(), createElementBlock("div", {
      ref_key: "dumbbellChart",
      ref: S,
      class: normalizeClass(`vue-ui-dumbbell ${T.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`),
      id: `dumbbell_${f.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: S.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: M.value,
        onClose: V
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      $e.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: Z,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: j,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${J.value}`,
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
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${U.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(le),
        isImaging: unref(ae2),
        uid: f.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: T.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: S.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: M.value,
        onToggleFullscreen: ze,
        onGeneratePdf: unref(se),
        onGenerateCsv: ie,
        onGenerateImage: unref(oe),
        onToggleTable: ce,
        onToggleAnnotator: V
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
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: a }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: a })), void 0, true)
          ]),
          key: "4"
        } : void 0,
        l.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: a }) => [
            renderSlot(l.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: a })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": T.value, "vue-data-ui-fulscreen--off": !T.value }),
        viewBox: `0 0 ${s2.value.absoluteWidth <= 0 ? 10 : s2.value.absoluteWidth} ${s2.value.absoluteHeight <= 0 ? 10 : s2.value.absoluteHeight}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.style.chart.grid.verticalGrid.show ? (openBlock(), createElementBlock("g", lt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.ticks, (t, a) => (openBlock(), createElementBlock("line", {
            x1: s2.value.left + a * s2.value.width / (c2.value.ticks.length - 1),
            x2: s2.value.left + a * s2.value.width / (c2.value.ticks.length - 1),
            y1: s2.value.top,
            y2: s2.value.bottom,
            stroke: e.value.style.chart.grid.verticalGrid.stroke,
            "stroke-width": e.value.style.chart.grid.verticalGrid.strokeWidth,
            "stroke-dasharray": e.value.style.chart.grid.verticalGrid.strokeDasharray
          }, null, 8, at))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.grid.horizontalGrid.show ? (openBlock(), createElementBlock("g", st, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (t, a) => (openBlock(), createElementBlock("line", {
            x1: s2.value.left,
            x2: s2.value.right,
            y1: s2.value.top + a * h.value,
            y2: s2.value.top + a * h.value,
            stroke: e.value.style.chart.grid.horizontalGrid.stroke,
            "stroke-width": e.value.style.chart.grid.horizontalGrid.strokeWidth,
            "stroke-dasharray": e.value.style.chart.grid.horizontalGrid.strokeDasharray
          }, null, 8, ot))), 256)),
          createBaseVNode("line", {
            x1: s2.value.left,
            x2: s2.value.right,
            y1: s2.value.bottom,
            y2: s2.value.bottom,
            stroke: e.value.style.chart.grid.horizontalGrid.stroke,
            "stroke-width": e.value.style.chart.grid.horizontalGrid.strokeWidth,
            "stroke-dasharray": e.value.style.chart.grid.horizontalGrid.strokeDasharray
          }, null, 8, rt)
        ])) : createCommentVNode("", true),
        e.value.style.chart.labels.yAxisLabels.show ? (openBlock(), createElementBlock("g", nt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (t, a) => (openBlock(), createElementBlock("text", {
            x: s2.value.left - 6 + e.value.style.chart.labels.yAxisLabels.offsetX,
            y: s2.value.top + a * h.value + (e.value.style.chart.labels.yAxisLabels.showProgression ? h.value / 3 : h.value / 2) + e.value.style.chart.labels.yAxisLabels.fontSize / 3,
            "font-size": e.value.style.chart.labels.yAxisLabels.fontSize,
            fill: e.value.style.chart.labels.yAxisLabels.color,
            "font-weight": e.value.style.chart.labels.yAxisLabels.bold ? "bold" : "normal",
            "text-anchor": "end"
          }, toDisplayString(t.name), 9, ut))), 256)),
          e.value.style.chart.labels.yAxisLabels.showProgression ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(x2.value, (t, a) => (openBlock(), createElementBlock("text", {
            x: s2.value.left - 6 + e.value.style.chart.labels.yAxisLabels.offsetX,
            y: s2.value.top + a * h.value + h.value / 1.3 + e.value.style.chart.labels.yAxisLabels.fontSize / 3,
            "font-size": e.value.style.chart.labels.yAxisLabels.fontSize,
            fill: e.value.style.chart.labels.yAxisLabels.color,
            "text-anchor": "end"
          }, toDisplayString(unref(Ht)({
            v: 100 * (t.end / t.start - 1),
            s: "%",
            r: e.value.style.chart.labels.yAxisLabels.rounding
          })), 9, it))), 256)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.chart.labels.xAxisLabels.show ? (openBlock(), createElementBlock("g", ct, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value.ticks, (t, a) => (openBlock(), createElementBlock("text", {
            x: s2.value.left + a * (s2.value.width / (c2.value.ticks.length - 1)),
            y: s2.value.bottom + e.value.style.chart.labels.xAxisLabels.fontSize + e.value.style.chart.labels.xAxisLabels.offsetY,
            "font-size": e.value.style.chart.labels.xAxisLabels.fontSize,
            fill: e.value.style.chart.labels.xAxisLabels.color,
            "font-weight": e.value.style.chart.labels.xAxisLabels.bold ? "bold" : "normal",
            "text-anchor": "middle"
          }, toDisplayString(unref(ir)(
            e.value.style.chart.labels.formatter,
            t,
            unref(Ht)({
              p: e.value.style.chart.labels.prefix,
              v: t,
              s: e.value.style.chart.labels.suffix,
              r: e.value.style.chart.labels.xAxisLabels.rounding
            }),
            { datapoint: t, seriesIndex: a }
          )), 9, dt))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            id: `start_grad_${f.value}`,
            fy: "30%"
          }, [
            createBaseVNode("stop", {
              offset: "10%",
              "stop-color": unref(It)(e.value.style.chart.plots.startColor, e.value.style.chart.plots.gradient.intensity / 100)
            }, null, 8, ht),
            createBaseVNode("stop", {
              offset: "90%",
              "stop-color": unref(Wt)(e.value.style.chart.plots.startColor, 0.1)
            }, null, 8, yt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.chart.plots.startColor
            }, null, 8, ft)
          ], 8, vt),
          createBaseVNode("radialGradient", {
            id: `end_grad_${f.value}`,
            fy: "30%"
          }, [
            createBaseVNode("stop", {
              offset: "10%",
              "stop-color": unref(It)(e.value.style.chart.plots.endColor, e.value.style.chart.plots.gradient.intensity / 100)
            }, null, 8, gt),
            createBaseVNode("stop", {
              offset: "90%",
              "stop-color": unref(Wt)(e.value.style.chart.plots.endColor, 0.1)
            }, null, 8, pt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.chart.plots.endColor
            }, null, 8, mt)
          ], 8, bt)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (t, a) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `grad_positive_${f.value}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.chart.plots.startColor
              }, null, 8, kt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.chart.plots.endColor
              }, null, 8, xt)
            ], 8, _t),
            createBaseVNode("linearGradient", {
              id: `grad_negative_${f.value}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.chart.plots.endColor
              }, null, 8, wt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.chart.plots.startColor
              }, null, 8, $t)
            ], 8, Ct)
          ]),
          e.value.style.chart.plots.link.type === "curved" ? (openBlock(), createElementBlock("g", Lt, [
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
              fill: t.endX > t.startX ? `url(#grad_positive_${f.value})` : `url(#grad_negative_${f.value})`
            }, null, 8, At)
          ])) : (openBlock(), createElementBlock("g", zt, [
            createBaseVNode("rect", {
              x: t.endX > t.startX ? t.startX : t.endX,
              y: t.y - e.value.style.chart.plots.link.strokeWidth / 2,
              height: e.value.style.chart.plots.link.strokeWidth,
              width: Math.abs(t.endX - t.startX),
              fill: t.endX > t.startX ? `url(#grad_positive_${f.value})` : `url(#grad_negative_${f.value})`
            }, null, 8, Xt)
          ])),
          createBaseVNode("circle", {
            cx: t.startX,
            cy: t.y,
            r: e.value.style.chart.plots.radius,
            fill: e.value.style.chart.plots.gradient.show ? `url(#start_grad_${f.value})` : e.value.style.chart.plots.startColor,
            stroke: e.value.style.chart.plots.stroke,
            "stroke-width": e.value.style.chart.plots.strokeWidth
          }, null, 8, St),
          createBaseVNode("circle", {
            cx: t.endX,
            cy: t.y,
            r: e.value.style.chart.plots.radius,
            fill: e.value.style.chart.plots.gradient.show ? `url(#end_grad_${f.value})` : e.value.style.chart.plots.endColor,
            stroke: e.value.style.chart.plots.stroke,
            "stroke-width": e.value.style.chart.plots.strokeWidth
          }, null, 8, Nt2),
          e.value.style.chart.labels.startLabels.show ? (openBlock(), createElementBlock("g", Tt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (i, g) => (openBlock(), createElementBlock("text", {
              x: i.startX,
              y: s2.value.top + (g + 1) * h.value - e.value.style.chart.labels.startLabels.fontSize / 3 + e.value.style.chart.labels.startLabels.offsetY,
              fill: e.value.style.chart.labels.startLabels.useStartColor ? e.value.style.chart.plots.startColor : e.value.style.chart.labels.startLabels.color,
              "font-size": e.value.style.chart.labels.startLabels.fontSize,
              "text-anchor": "middle"
            }, toDisplayString(unref(ir)(
              e.value.style.chart.labels.formatter,
              i.start,
              unref(Ht)({
                p: e.value.style.chart.labels.prefix,
                v: i.start,
                s: e.value.style.chart.labels.suffix,
                r: e.value.style.chart.labels.startLabels.rounding
              }),
              { datapoint: i, seriesIndex: g }
            )), 9, Pt))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.chart.labels.endLabels.show ? (openBlock(), createElementBlock("g", Gt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (i, g) => (openBlock(), createElementBlock("text", {
              x: i.endX,
              y: s2.value.top + g * h.value + e.value.style.chart.labels.endLabels.fontSize + e.value.style.chart.labels.endLabels.offsetY,
              fill: e.value.style.chart.labels.endLabels.useEndColor ? e.value.style.chart.plots.endColor : e.value.style.chart.labels.endLabels.color,
              "font-size": e.value.style.chart.labels.endLabels.fontSize,
              "text-anchor": "middle"
            }, toDisplayString(unref(ir)(
              e.value.style.chart.labels.formatter,
              i.end,
              unref(Ht)({
                p: e.value.style.chart.labels.prefix,
                v: i.end,
                s: e.value.style.chart.labels.suffix,
                r: e.value.style.chart.labels.endLabels.rounding
              }),
              { datapoint: i, seriesIndex: g }
            )), 9, Dt2))), 256))
          ])) : createCommentVNode("", true)
        ]))), 256)),
        renderSlot(l.$slots, "svg", { svg: s2.value }, void 0, true)
      ], 14, tt)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", It2, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(le) || unref(ae2) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
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
        ref: q
      }, [
        e.value.style.chart.legend.show && X.value ? (openBlock(), createBlock(C, {
          key: `legend_${Q.value}`,
          legendSet: ue.value,
          config: Ae.value
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              style: normalizeStyle(`display:flex;align-items:center;gap:4px;font-size:${e.value.style.chart.legend.fontSize}px`)
            }, [
              (openBlock(), createElementBlock("svg", {
                xmlns: unref(Jt),
                viewBox: "0 0 20 20",
                height: e.value.style.chart.legend.fontSize,
                width: e.value.style.chart.legend.fontSize
              }, [
                createBaseVNode("circle", {
                  cx: 10,
                  cy: 10,
                  r: 9,
                  fill: t.color
                }, null, 8, Ot)
              ], 8, Mt)),
              createTextVNode(" " + toDisplayString(t.name), 1)
            ], 4)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(l.$slots, "legend", {
          key: 1,
          legend: ue.value
        }, void 0, true)
      ], 512),
      l.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: Y,
        dir: "auto"
      }, [
        renderSlot(l.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      X.value ? (openBlock(), createBlock(R, {
        key: 8,
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
            key: `table_${K.value}`,
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
              }, null, 8, Ft)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(t.name || t), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, et));
  }
};
var tl = s(Vt2, [["__scopeId", "data-v-d151e2f0"]]);
export {
  tl as default
};
//# sourceMappingURL=vue-ui-dumbbell-BacTx3zB-M4LXWP4M.js.map
