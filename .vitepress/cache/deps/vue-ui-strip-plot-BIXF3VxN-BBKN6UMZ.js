import {
  E
} from "./chunk-K5CEUZ2P.js";
import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
import {
  W
} from "./chunk-ROOSILH6.js";
import {
  $
} from "./chunk-H2UGMUIX.js";
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
  Kt,
  Nt,
  Q,
  R as R2,
  Ut,
  Vt,
  Wt,
  Xt,
  Zt,
  ir,
  jt,
  k as k2,
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
  createTextVNode,
  createVNode,
  guardReactiveProps,
  mergeProps,
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

// node_modules/vue-data-ui/dist/vue-ui-strip-plot-BIXF3VxN.js
var yt = ["id"];
var bt = ["xmlns", "viewBox"];
var mt = { key: 0 };
var gt = { key: 0 };
var kt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var xt = { key: 1 };
var Ct = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var wt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var _t = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var $t = ["x", "y", "fill", "font-size"];
var Tt = ["x", "y", "font-size", "fill"];
var Lt = ["fill", "font-size", "transform"];
var At = ["fill", "font-size", "x", "y"];
var Pt = ["x1", "x2", "y1", "y2", "stroke"];
var St = ["cx", "cy", "fill"];
var zt = ["cx", "cy", "fill"];
var Nt2 = ["id"];
var Ot = ["stop-color"];
var Ft = ["stop-color"];
var Wt2 = ["stop-color"];
var It2 = { key: 0 };
var Mt = ["x", "y", "font-size", "fill"];
var Dt2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Gt = ["innerHTML"];
var Et = {
  __name: "vue-ui-strip-plot",
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
  setup(Te, { expose: Le, emit: Ae }) {
    const b = Te, { vue_ui_strip_plot: Pe } = te(), w = computed({
      get() {
        return !!b.dataset && b.dataset.length;
      },
      set(t) {
        return t;
      }
    }), X = ref(Dt()), le = ref(0), j = ref(false), Y = ref(""), P = ref(null), ae2 = ref(null), oe = ref(null), se = ref(null), re2 = ref(false), ue = ref(0), ne = ref(0), e = computed({
      get: () => ie(),
      set: (t) => t
    });
    function ie() {
      const t = c({
        userConfig: b.config,
        defaultConfig: Pe
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_strip_plot[t.theme] || b.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => b.config, (t) => {
      e.value = ie(), ve(), ue.value += 1, ne.value += 1;
    }, { deep: true });
    const M = ref(null);
    onMounted(() => {
      ve();
    });
    function ve() {
      if (jt(b.dataset) ? qt({
        componentName: "VueUiStripPlot",
        type: "dataset"
      }) : b.dataset.forEach((t, s2) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "plots"]
        }).forEach((l) => {
          w.value = false, qt({
            componentName: "VueUiStripPlot",
            type: "datasetSerieAttribute",
            property: l,
            index: s2
          });
        }), t.plots && t.plots.forEach((l, r) => {
          Zt({
            datasetObject: l,
            requiredAttributes: ["name", "value"]
          }).forEach((n) => {
            w.value = false, qt({
              componentName: "VueUiStripPlot",
              type: "datasetSerieAttribute",
              property: n,
              index: `${s2},${r}`
            });
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: s2, height: l } = k({
            chart: P.value,
            title: e.value.style.chart.title.text ? ae2.value : null,
            source: oe.value,
            noTitle: se.value
          });
          D.value = l, S.value.width = s2, S.value.height = l, N.value = (s2 - m.value.left - m.value.right) / b.dataset.length, G.value = nr({
            relator: Math.min(l, s2),
            adjuster: 600,
            source: e.value.style.chart.plots.radius,
            threshold: 6,
            fallback: 6
          });
        });
        M.value = new ResizeObserver(t), M.value.observe(P.value.parentNode);
      }
      re2.value = true, setTimeout(() => {
        z.value = false;
      }, ze.value * 50);
    }
    onBeforeUnmount(() => {
      M.value && M.value.disconnect();
    });
    const { isPrinting: ce, isImaging: he, generatePdf: de, generateImage: pe } = re({
      elementId: `strip-plot_${X.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-strip-plot"
    }), Se2 = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), fe = computed(() => tr(e.value.customPalette)), z = ref(e.value.useCssAnimation), p2 = ref({
      showTable: e.value.table.show,
      dataLabels: {
        show: e.value.style.chart.labels.bestPlotLabel.show
      },
      showTooltip: e.value.style.chart.tooltip.show
    }), m = ref({
      top: e.value.style.chart.padding.top,
      bottom: e.value.style.chart.padding.bottom,
      left: e.value.style.chart.padding.left,
      right: e.value.style.chart.padding.right
    }), N = ref(e.value.style.chart.stripWidth), D = ref(e.value.style.chart.height), G = ref(e.value.style.chart.plots.radius), S = ref({
      width: N.value * b.dataset.length + m.value.left + m.value.right,
      height: e.value.style.chart.height
    }), a = computed(() => {
      const t = N.value * b.dataset.length + m.value.left + m.value.right;
      return {
        left: m.value.left,
        right: t - m.value.right,
        top: m.value.top,
        bottom: D.value - m.value.bottom,
        width: N.value * b.dataset.length,
        height: D.value - m.value.top - m.value.bottom,
        stripWidth: N.value,
        absoluteHeight: D.value,
        absoluteWidth: t
      };
    }), E2 = computed(() => w.value ? b.dataset.map((t, s2) => {
      const l = Dt();
      return {
        ...t,
        id: l,
        color: t.color ? Q(t.color) : fe.value[s2] || rt[s2] || rt[s2 % rt.length],
        plots: t.plots.map((r) => ({
          ...r,
          value: k2(r.value),
          parentId: l,
          color: t.color ? Q(t.color) : fe.value[s2] || rt[s2] || rt[s2 % rt.length],
          id: Dt()
        })).sort((r, n) => r.value - n.value)
      };
    }) : null), x2 = computed(() => (E2.value || []).map((t, s2) => ({
      ...t,
      plots: t.plots.map((l) => ({
        ...l,
        x: a.value.left + (s2 + 1) * a.value.stripWidth - a.value.stripWidth / 2
      }))
    }))), ze = computed(() => Math.max(...x2.value.map((t) => t.plots.length))), J = computed(() => {
      const t = x2.value.flatMap((s2) => s2.plots.map((l) => l.value));
      return {
        max: Math.max(...t),
        min: Math.min(...t)
      };
    }), _ = computed(() => Ut(J.value.min < 0 ? J.value.min : 0, J.value.max, e.value.style.chart.grid.scaleSteps)), Ne = computed(() => (x2.value || []).map((t, s2) => ({
      ...t,
      plots: t.plots.map((l) => ({
        ...l,
        y: a.value.bottom - (l.value + Math.abs(_.value.min)) / (_.value.max + Math.abs(_.value.min)) * a.value.height
      }))
    }))), ye = computed(() => _.value.ticks.map((t) => ({
      y: a.value.bottom - a.value.height * ((t + Math.abs(_.value.min)) / (_.value.max + Math.abs(_.value.min))),
      x1: a.value.left,
      x2: a.value.right,
      value: t
    }))), q = ref(null), c2 = ref(null);
    function Oe({ datapoint: t, seriesIndex: s2 }) {
      q.value = { datapoint: t, seriesIndex: s2, config: e.value, series: E2.value }, j.value = true, c2.value = t;
      const l = e.value.style.chart.tooltip.customFormat;
      if (Xt(l) && Kt(() => l({
        seriesIndex: s2,
        datapoint: t,
        series: E2.value,
        config: e.value
      })))
        Y.value = l({
          seriesIndex: s2,
          datapoint: t,
          series: E2.value,
          config: e.value
        });
      else {
        let r = "";
        r += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${e.value.style.chart.plots.gradient.show ? `url(#${t.parentId})` : t.color}"/></svg>${t.name}</div>`, r += `<div>${ir(
          e.value.style.chart.labels.formatter,
          t.value,
          Ht({
            p: e.value.style.chart.labels.prefix,
            v: t.value,
            s: e.value.style.chart.labels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: t, seriesIndex: s2 }
        )}</div>`, Y.value = `<div>${r}</div>`;
      }
    }
    const V = computed(() => {
      const t = x2.value.flatMap((l) => JSON.parse(JSON.stringify(l.plots)).sort((r, n) => n.value - r.value).map((r) => ({
        name: `${l.name} - ${r.name}`,
        color: r.color
      }))), s2 = x2.value.flatMap((l) => JSON.parse(JSON.stringify(l.plots)).sort((r, n) => n.value - r.value).map((r) => r.value));
      return { head: t, body: s2 };
    });
    function be() {
      nextTick(() => {
        const t = V.value.head.map((r, n) => [[
          r.name
        ], [V.value.body[n]]]), s2 = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[e.value.table.columnNames.series], [e.value.table.columnNames.value]]].concat(t), l = Vt(s2);
        Nt({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-strip-plot" });
      });
    }
    const H = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value
      ], s2 = V.value.head.map((n, $2) => {
        const U = Ht({
          p: e.value.style.chart.labels.prefix,
          v: V.value.body[$2],
          s: e.value.style.chart.labels.suffix,
          r: e.value.table.td.roundingValue
        });
        return [
          {
            color: n.color,
            name: n.name
          },
          U
        ];
      }), l = {
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
          e.value.table.columnNames.value
        ],
        head: t,
        body: s2,
        config: l
      };
    }), O2 = ref(false);
    function Fe(t) {
      O2.value = t, le.value += 1;
    }
    function We() {
      return x2.value;
    }
    function me() {
      p2.value.showTable = !p2.value.showTable;
    }
    function ge() {
      p2.value.dataLabels.show = !p2.value.dataLabels.show;
    }
    function ke() {
      p2.value.showTooltip = !p2.value.showTooltip;
    }
    const R3 = ref(false);
    function K() {
      R3.value = !R3.value;
    }
    return Le({
      getData: We,
      generatePdf: de,
      generateCsv: be,
      generateImage: pe,
      toggleTable: me,
      toggleLabels: ge,
      toggleTooltip: ke,
      toggleAnnotator: K
    }), (t, s2) => (openBlock(), createElementBlock("div", {
      ref_key: "stripPlotChart",
      ref: P,
      class: normalizeClass(`vue-ui-strip-plot ${O2.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`),
      id: `strip-plot_${X.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: P.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: R3.value,
        onClose: K
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Se2.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: se,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: ae2,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ue.value}`,
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
      e.value.userOptions.show && w.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${le.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ce),
        isImaging: unref(he),
        uid: X.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: p2.value.showTooltip,
        isFullscreen: O2.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: P.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: R3.value,
        onToggleFullscreen: Fe,
        onGeneratePdf: unref(de),
        onGenerateCsv: be,
        onGenerateImage: unref(pe),
        onToggleTable: me,
        onToggleLabels: ge,
        onToggleTooltip: ke,
        onToggleAnnotator: K
      }, createSlots({ _: 2 }, [
        t.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        t.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        t.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        t.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        t.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: r }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: r })), void 0, true)
          ]),
          key: "6"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: l, isAnnotator: r }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: l, isAnnotator: r })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      w.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": O2.value, "vue-data-ui-fulscreen--off": !O2.value }),
        viewBox: `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color};`)
      }, [
        createVNode(p),
        e.value.style.chart.grid.show ? (openBlock(), createElementBlock("g", mt, [
          e.value.style.chart.grid.horizontalGrid.show ? (openBlock(), createElementBlock("g", gt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(ye.value, (l) => (openBlock(), createElementBlock("line", {
              x1: l.x1,
              x2: l.x2,
              y1: l.y,
              y2: l.y,
              stroke: e.value.style.chart.grid.horizontalGrid.stroke,
              "stroke-width": e.value.style.chart.grid.horizontalGrid.strokeWidth,
              "stroke-dasharray": e.value.style.chart.grid.horizontalGrid.strokeDasharray,
              "stroke-linecap": "round"
            }, null, 8, kt))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.chart.grid.verticalGrid.show ? (openBlock(), createElementBlock("g", xt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (l, r) => (openBlock(), createElementBlock("line", {
              x1: a.value.left + (r + 1) * a.value.stripWidth,
              x2: a.value.left + (r + 1) * a.value.stripWidth,
              y1: a.value.top,
              y2: a.value.bottom,
              stroke: e.value.style.chart.grid.verticalGrid.stroke,
              "stroke-width": e.value.style.chart.grid.verticalGrid.strokeWidth,
              "stroke-dasharray": e.value.style.chart.grid.verticalGrid.strokeDasharray,
              "stroke-linecap": "round"
            }, null, 8, Ct))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.left,
            y1: a.value.top,
            y2: a.value.bottom,
            stroke: e.value.style.chart.grid.stroke,
            "stroke-width": e.value.style.chart.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, wt),
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.right,
            y1: a.value.bottom,
            y2: a.value.bottom,
            stroke: e.value.style.chart.grid.stroke,
            "stroke-width": e.value.style.chart.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, _t)
        ])) : createCommentVNode("", true),
        e.value.style.chart.labels.yAxisLabels.show ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(ye.value, (l, r) => (openBlock(), createElementBlock("text", {
          x: l.x1 - e.value.style.chart.labels.yAxisLabels.fontSize / 2 + e.value.style.chart.labels.yAxisLabels.offsetX,
          y: l.y + e.value.style.chart.labels.yAxisLabels.fontSize / 3,
          fill: e.value.style.chart.labels.yAxisLabels.color,
          "font-size": e.value.style.chart.labels.yAxisLabels.fontSize,
          "text-anchor": "end"
        }, toDisplayString(unref(ir)(
          e.value.style.chart.labels.formatter,
          l.value,
          unref(Ht)({
            p: e.value.style.chart.labels.prefix,
            v: l.value,
            s: e.value.style.chart.labels.suffix,
            r: e.value.style.chart.labels.yAxisLabels.rounding
          }),
          { datapoint: l, seriesIndex: r }
        )), 9, $t))), 256)) : createCommentVNode("", true),
        e.value.style.chart.labels.xAxisLabels.show ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(x2.value, (l, r) => (openBlock(), createElementBlock("text", {
          x: a.value.left + (r + 1) * a.value.stripWidth - a.value.stripWidth / 2,
          y: a.value.bottom + e.value.style.chart.labels.xAxisLabels.fontSize * 2 + e.value.style.chart.labels.xAxisLabels.offsetY,
          "font-size": e.value.style.chart.labels.xAxisLabels.fontSize,
          fill: e.value.style.chart.labels.xAxisLabels.color,
          "text-anchor": "middle"
        }, toDisplayString(l.name), 9, Tt))), 256)) : createCommentVNode("", true),
        e.value.style.chart.labels.axis.yLabel ? (openBlock(), createElementBlock("text", {
          key: 3,
          fill: e.value.style.chart.labels.axis.color,
          "font-size": e.value.style.chart.labels.axis.fontSize,
          transform: `translate(${e.value.style.chart.labels.axis.fontSize + e.value.style.chart.labels.axis.yLabelOffsetX}, ${a.value.top + a.value.height / 2}) rotate(-90)`,
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.labels.axis.yLabel), 9, Lt)) : createCommentVNode("", true),
        e.value.style.chart.labels.axis.xLabel ? (openBlock(), createElementBlock("text", {
          key: 4,
          fill: e.value.style.chart.labels.axis.color,
          "font-size": e.value.style.chart.labels.axis.fontSize,
          x: a.value.left + a.value.width / 2,
          y: a.value.absoluteHeight,
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.labels.axis.xLabel), 9, At)) : createCommentVNode("", true),
        c2.value ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.right,
            y1: c2.value.y,
            y2: c2.value.y,
            stroke: c2.value.color,
            "stroke-width": 1,
            class: normalizeClass({ "select-circle": e.value.useCssAnimation })
          }, null, 10, Pt),
          createBaseVNode("circle", {
            cx: a.value.left,
            cy: c2.value.y,
            r: 3,
            fill: c2.value.color,
            class: normalizeClass({ "select-circle": e.value.useCssAnimation })
          }, null, 10, St),
          createBaseVNode("circle", {
            cx: a.value.right,
            cy: c2.value.y,
            r: 3,
            fill: c2.value.color,
            class: normalizeClass({ "select-circle": e.value.useCssAnimation })
          }, null, 10, zt)
        ], 64)) : createCommentVNode("", true),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(x2.value, (l) => (openBlock(), createElementBlock("radialGradient", {
            id: l.id,
            fy: "30%"
          }, [
            createBaseVNode("stop", {
              offset: "10%",
              "stop-color": unref(It)(l.color, e.value.style.chart.plots.gradient.intensity / 100)
            }, null, 8, Ot),
            createBaseVNode("stop", {
              offset: "90%",
              "stop-color": unref(Wt)(l.color, 0.1)
            }, null, 8, Ft),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, Wt2)
          ], 8, Nt2))), 256))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Ne.value, (l, r) => (openBlock(), createElementBlock(Fragment, null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(l.plots, (n, $2) => (openBlock(), createBlock($, mergeProps({
            plot: { x: n.x, y: re2.value ? n.y : a.value.top },
            radius: c2.value && c2.value.id === n.id ? G.value * 1.5 : G.value,
            shape: e.value.style.chart.plots.shape,
            stroke: e.value.style.chart.plots.stroke,
            strokeWidth: e.value.style.chart.plots.strokeWidth,
            color: e.value.style.chart.plots.gradient.show ? `url(#${l.id})` : l.color,
            onMouseenter: (U) => Oe({ datapoint: n, seriesIndex: $2 }),
            onMouseleave: s2[0] || (s2[0] = (U) => {
              j.value = false, c2.value = null;
            }),
            onClick: (U) => Ae("selectDatapoint", n),
            style: `transition: all 0.2s ease-in-out; opacity:${c2.value ? c2.value.id === n.id ? 1 : 0.2 : e.value.style.chart.plots.opacity};${z.value ? `transition-delay:${$2 * 50}ms` : ""}`,
            class: { "vue-ui-strip-plot-animated": e.value.useCssAnimation && z.value, "vue-ui-strip-plot-select-circle": e.value.useCssAnimation && !z.value }
          }, t.$attrs), null, 16, ["plot", "radius", "shape", "stroke", "strokeWidth", "color", "onMouseenter", "onClick", "style", "class"]))), 256)),
          p2.value.dataLabels.show ? (openBlock(), createElementBlock("g", It2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(l.plots, (n, $2) => (openBlock(), createElementBlock(Fragment, null, [
              $2 === l.plots.length - 1 || c2.value && c2.value.id === n.id && !p2.value.showTooltip ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: n.x,
                y: n.y + e.value.style.chart.labels.bestPlotLabel.offsetY - G.value * (c2.value && c2.value.id === n.id && !p2.value.showTooltip ? 2 : 1.5),
                "font-size": e.value.style.chart.labels.bestPlotLabel.fontSize,
                fill: e.value.style.chart.labels.bestPlotLabel.color,
                "text-anchor": "middle",
                style: normalizeStyle(`opacity:${e.value.useCssAnimation && z.value ? 0 : 1};transition:opacity 0.2s ease-in;`)
              }, toDisplayString(n.name) + " " + toDisplayString(e.value.style.chart.labels.bestPlotLabel.showValue ? unref(ir)(
                e.value.style.chart.labels.formatter,
                n.value,
                unref(Ht)({
                  p: `(${e.value.style.chart.labels.prefix}`,
                  v: n.value,
                  s: `${e.value.style.chart.labels.suffix})`,
                  r: e.value.style.chart.labels.bestPlotLabel.rounding
                }),
                { datapoint: n, seriesIndex: $2 }
              ) : ""), 13, Mt)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true)
        ], 64))), 256)),
        renderSlot(t.$slots, "svg", { svg: a.value }, void 0, true)
      ], 14, bt)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Dt2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ce) || unref(he) })), void 0, true)
      ])) : createCommentVNode("", true),
      w.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "stripPlot",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            stripPlot: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: oe,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: p2.value.showTooltip && j.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: P.value,
        content: Y.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...q.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...q.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      w.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: p2.value.showTable,
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
            key: `table_${ne.value}`,
            colNames: H.value.colNames,
            head: H.value.head,
            body: H.value.body,
            config: H.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: s2[1] || (s2[1] = (l) => p2.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Gt)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, yt));
  }
};
var tl = s(Et, [["__scopeId", "data-v-1a3e0788"]]);
export {
  tl as default
};
//# sourceMappingURL=vue-ui-strip-plot-BIXF3VxN-BBKN6UMZ.js.map
