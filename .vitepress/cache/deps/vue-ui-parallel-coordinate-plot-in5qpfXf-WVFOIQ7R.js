import {
  C
} from "./chunk-ZYATGC4V.js";
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
  Jt,
  Kt,
  Lt,
  Nt,
  Q,
  R as R2,
  St,
  Ut,
  Vt,
  Xt,
  Zt,
  ar,
  ir,
  jt,
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

// node_modules/vue-data-ui/dist/vue-ui-parallel-coordinate-plot-in5qpfXf.js
var Ct = ["id"];
var wt = ["xmlns", "viewBox"];
var $t = { style: { "pointer-events": "none" } };
var At = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var _t = ["x", "y", "fill", "font-size", "font-weight"];
var Tt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Mt = ["x", "y", "fill", "font-size", "font-weight"];
var zt = { key: 0 };
var It = ["x", "y", "font-size", "fill"];
var Pt = ["width", "x", "y"];
var Ft = { style: { width: "100%" } };
var Nt2 = ["x", "y", "fill", "font-weight", "font-size", "onMouseenter"];
var Lt2 = ["d", "stroke", "stroke-width", "onMouseenter"];
var St2 = ["d", "onMouseenter"];
var Ot = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Dt2 = ["onClick"];
var Wt = ["innerHTML"];
var Et = {
  __name: "vue-ui-parallel-coordinate-plot",
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
  emits: ["selectLegend", "selectDatapoint"],
  setup(Ie, { expose: Pe, emit: ee }) {
    const A = Ie, { vue_ui_parallel_coordinate_plot: Fe } = te(), F = computed({
      get() {
        return !!A.dataset && A.dataset.length;
      },
      set(t) {
        return t;
      }
    }), te2 = ref(0), N = ref(null), ae2 = ref(null), le = ref(null), oe = ref(null), se = ref(null), ne = ref(0), ue = ref(0), re2 = ref(0), X = ref(Dt()), D = ref(false);
    function Ne(t) {
      D.value = t, te2.value += 1;
    }
    const e = computed({
      get: () => ie(),
      set: (t) => t
    });
    function ie() {
      const t = c({
        userConfig: A.config,
        defaultConfig: Fe
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_parallel_coordinate_plot[t.theme] || A.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => A.config, (t) => {
      e.value = ie(), ce(), ne.value += 1, re2.value += 1, ue.value += 1;
    }, { deep: true });
    const R3 = ref(null);
    onMounted(() => {
      ce();
    });
    function ce() {
      if (jt(A.dataset) ? qt({
        componentName: "VueUiParallelCoordinatePlot",
        type: "dataset"
      }) : A.dataset.forEach((t, l) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "series"]
        }).forEach((a) => {
          F.value = false, qt({
            componentName: "VueUiParallelCoordinatePlot",
            type: "datasetSerieAttribute",
            property: a,
            index: l
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: l, height: a } = k({
            chart: N.value,
            title: e.value.style.chart.title.text ? ae2.value : null,
            legend: e.value.style.chart.legend.show ? le.value : null,
            source: oe.value,
            noTitle: se.value
          });
          v.value.width = l, v.value.height = a, v.value.plotSize = nr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.plots.radius,
            threshold: 2,
            fallback: 2
          }), v.value.ticksFontSize = nr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.yAxis.labels.ticks.fontSize,
            threshold: 10,
            fallback: 10
          }), v.value.datapointFontSize = nr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.yAxis.labels.datapoints.fontSize,
            threshold: 10,
            fallback: 10
          }), v.value.axisNameFontSize = nr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.yAxis.labels.axisNamesFontSize,
            threshold: 12,
            fallback: 12
          });
        });
        R3.value = new ResizeObserver(t), R3.value.observe(N.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      R3.value && R3.value.disconnect();
    });
    const { isPrinting: ve, isImaging: de, generatePdf: he, generateImage: pe } = re({
      elementId: `pcp_${X.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-parallel-coordinate-plot"
    }), Le = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), v = ref({
      height: e.value.style.chart.height,
      width: e.value.style.chart.width,
      plotSize: e.value.style.chart.plots.radius,
      // ratio 100
      ticksFontSize: e.value.style.chart.yAxis.labels.ticks.fontSize,
      // ratio 42.85
      datapointFontSize: e.value.style.chart.yAxis.labels.datapoints.fontSize,
      axisNameFontSize: e.value.style.chart.yAxis.labels.axisNamesFontSize
    }), d = computed(() => {
      const { top: t, right: l, bottom: a, left: o } = e.value.style.chart.padding, n = v.value.height, s2 = v.value.width;
      return {
        chartHeight: n,
        chartWidth: s2,
        height: n - t - a,
        width: s2 - o - l,
        top: t,
        left: o,
        right: s2 - l,
        bottom: n - a
      };
    }), Se2 = computed(() => tr(e.value.customPalette)), y = ref({
      dataLabels: {
        show: e.value.style.chart.yAxis.labels.datapoints.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), w = ref([]);
    function me(t) {
      w.value.includes(t) ? w.value = w.value.filter((l) => l !== t) : w.value.push(t);
    }
    const _ = computed(() => A.dataset.map((t, l) => {
      const a = Q(t.color) || Se2.value[l] || rt[l] || rt[l % rt.length];
      return {
        ...t,
        series: t.series.map((o) => ({
          ...o,
          id: Dt(),
          color: a
        })),
        seriesIndex: l,
        color: a,
        id: Dt(),
        shape: t.shape || "circle"
      };
    })), Oe = computed(() => _.value.map((t) => ({
      ...t,
      opacity: w.value.includes(t.id) ? 0.5 : 1,
      segregate: () => me(t.id),
      isSegregated: w.value.includes(t.id)
    }))), De = computed(() => ({
      cy: "pcp-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), ye = computed(() => Math.max(
      ..._.value.filter((t) => !w.value.includes(t.id)).map((t) => Math.max(...t.series.flatMap((l) => l.values.length)))
    )), k2 = computed(() => d.value.width / ye.value), Y = computed(() => _.value.filter((t) => !w.value.includes(t.id))), f = computed(() => {
      let t = [];
      for (let l = 0; l < ye.value; l += 1) {
        const a = Math.min(...Y.value.flatMap((h) => h.series.map((V) => V.values[l] || 0) || 0)), o = Math.max(...Y.value.flatMap((h) => h.series.map((V) => V.values[l] || 0) || 0)), n = o === a ? a / 4 : a, s2 = o === a ? o * 2 : o, i = Ut(n, s2, e.value.style.chart.yAxis.scaleTicks), $2 = i.ticks.map((h, V) => {
          const Be = i.min < 0 ? h + Math.abs(i.min) : h - Math.abs(i.min), Re = i.min < 0 ? i.max + Math.abs(i.min) : i.max - Math.abs(i.min);
          return {
            y: d.value.bottom - d.value.height * (Be / Re),
            x: d.value.left + k2.value * l + k2.value / 2,
            value: h
          };
        });
        t.push({
          scale: i,
          ticks: $2,
          name: e.value.style.chart.yAxis.labels.axisNames[l] || `Y-${l + 1}`
        });
      }
      return t;
    }), q = computed(() => Y.value.map((t, l) => ({
      ...t,
      series: t.series.map((a, o) => ({
        ...a,
        datapoints: a.values.map((n, s2) => {
          const i = f.value[s2].scale.min < 0 ? (n || 0) + Math.abs(f.value[s2].scale.min) : (n || 0) - Math.abs(f.value[s2].scale.min), $2 = f.value[s2].scale.min < 0 ? f.value[s2].scale.max + Math.abs(f.value[s2].scale.min) : f.value[s2].scale.max - Math.abs(f.value[s2].scale.min);
          return {
            name: a.name,
            seriesName: t.name,
            axisIndex: s2,
            datapointIndex: o,
            seriesIndex: l,
            value: n || 0,
            x: d.value.left + k2.value * s2 + k2.value / 2,
            y: d.value.bottom - d.value.height * (i / $2),
            comment: a.comments && a.comments[s2] || ""
          };
        })
      }))
    })).map((t) => ({
      ...t,
      series: t.series.map((l) => {
        const a = St(l.datapoints), o = Lt(l.datapoints), n = ar(e.value.style.chart.lines.smooth ? `M ${o}` : `M ${a}`);
        return {
          ...l,
          smoothPath: o,
          straightPath: a,
          pathLength: n
        };
      })
    })));
    function fe({ value: t, index: l, datapoint: a }) {
      return ir(
        e.value.style.chart.yAxis.labels.formatters[l] || null,
        t,
        Ht({
          p: e.value.style.chart.yAxis.labels.prefixes[l] || "",
          v: t,
          s: e.value.style.chart.yAxis.labels.suffixes[l] || "",
          r: e.value.style.chart.yAxis.labels.roundings[l] || 0
        }),
        { datapoint: a, seriesIndex: l }
      );
    }
    const p2 = ref(null), Q2 = ref(null), L = ref(false), J = ref("");
    function j({ shape: t, serieName: l, serie: a, relativeIndex: o, seriesIndex: n }) {
      Q2.value = { serie: a, relativeIndex: o, seriesIndex: n, series: _.value, scales: f.value }, L.value = true, p2.value = a.id;
      let s2 = "";
      const i = e.value.style.chart.tooltip.customFormat;
      Xt(i) && Kt(() => i({
        serie: a,
        seriesIndex: a.seriesIndex,
        series: _.value,
        config: e.value,
        scales: f.value
      })) ? J.value = i({
        serie: a,
        seriesIndex: a.seriesIndex,
        series: _.value,
        config: e.value,
        scales: f.value
      }) : (s2 += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${l ? l + " - " : ""}${a.name}</div>`, f.value.map(($2) => $2.name).forEach(($2, h) => {
        s2 += `
                <div class="vue-ui-tooltip-item" style="text-align:left">
                    <span>${$2}: </span>
                    <span>
                        ${ir(
          e.value.style.chart.yAxis.labels.formatters[h] || null,
          a.datapoints[h].value,
          Ht({
            p: e.value.style.chart.yAxis.labels.prefixes[h] || "",
            v: a.datapoints[h].value,
            s: e.value.style.chart.yAxis.labels.suffixes[h] || "",
            r: e.value.style.chart.yAxis.labels.roundings[h] || ""
          }),
          { datapoint: a.datapoints[h], seriesIndex: h }
        )}    
                    </span>
                </div>
            `, e.value.style.chart.comments.showInTooltip && a.datapoints[h].comment && (s2 += `<div class="vue-data-ui-tooltip-comment" style="background:${a.color}20; padding: 6px; margin-bottom: 6px; border-left: 1px solid ${a.color}">${a.datapoints[h].comment}</div>`);
      }), J.value = `<div>${s2}</div>`);
    }
    function We() {
      return _.value;
    }
    const S = computed(() => {
      const t = [e.value.table.columnNames.series].concat([e.value.table.columnNames.item]).concat(f.value.map((n) => n.name)), l = q.value.flatMap((n, s2) => n.series.map((i) => [n.name].concat([i.name]).concat(i.values))), a = {
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
      }, o = [e.value.table.columnNames.series].concat([e.value.table.columnNames.item]).concat(f.value.map((n) => n.name));
      return {
        body: l,
        head: t,
        config: a,
        colNames: o
      };
    }), ge = computed(() => q.value.length === 0 ? { head: [], body: [], config: {}, columnNames: [] } : {
      head: S.value.head,
      body: S.value.body
    });
    function be() {
      const t = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], l = ge.value.head, a = ge.value.body, o = t.concat([l]).concat(a), n = Vt(o);
      Nt({ csvContent: n, title: e.value.style.chart.title.text || "vue-ui-parallel-coordinate-plot" });
    }
    function Ee(t) {
      ee("selectDatapoint", t);
    }
    function xe(t) {
      ee("selectLegend", {
        ...t,
        isSegregated: !t.isSegregated,
        opacity: t.isSegregated ? 1 : 0.5
      });
    }
    function ke() {
      y.value.showTable = !y.value.showTable;
    }
    function Ce() {
      y.value.dataLabels.show = !y.value.dataLabels.show;
    }
    function we() {
      y.value.showTooltip = !y.value.showTooltip;
    }
    const U = ref(false);
    function K() {
      U.value = !U.value;
    }
    return Pe({
      getData: We,
      generateCsv: be,
      generatePdf: he,
      generateImage: pe,
      toggleTable: ke,
      toggleLabels: Ce,
      toggleTooltip: we,
      toggleAnnotator: K
    }), (t, l) => (openBlock(), createElementBlock("div", {
      ref_key: "pcpChart",
      ref: N,
      class: normalizeClass(`vue-ui-pcp ${D.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`),
      id: `pcp_${X.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: N.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: U.value,
        onClose: K
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Le.value ? (openBlock(), createElementBlock("div", {
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
          key: `title_${ne.value}`,
          config: {
            title: {
              cy: "pcp-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "pcp-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && F.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_options_${te2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ve),
        isImaging: unref(de),
        uid: X.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: D.value,
        isTooltip: y.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: N.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: U.value,
        onToggleFullscreen: Ne,
        onGeneratePdf: unref(he),
        onGenerateCsv: be,
        onGenerateImage: unref(pe),
        onToggleTable: ke,
        onToggleLabels: Ce,
        onToggleTooltip: we,
        onToggleAnnotator: K
      }, createSlots({ _: 2 }, [
        t.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        t.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        t.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        t.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: o }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: o })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      F.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": D.value, "vue-data-ui-fulscreen--off": !D.value }),
        viewBox: `0 0 ${d.value.chartWidth <= 0 ? 10 : d.value.chartWidth} ${d.value.chartHeight <= 0 ? 10 : d.value.chartHeight}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (a, o) => (openBlock(), createElementBlock("g", $t, [
          createBaseVNode("line", {
            x1: d.value.left + k2.value * o + k2.value / 2,
            x2: d.value.left + k2.value * o + k2.value / 2,
            y1: d.value.top,
            y2: d.value.bottom,
            stroke: e.value.style.chart.yAxis.stroke,
            "stroke-width": e.value.style.chart.yAxis.strokeWidth
          }, null, 8, At),
          createBaseVNode("text", {
            x: d.value.left + k2.value * o + k2.value / 2,
            y: d.value.top - 24,
            fill: e.value.style.chart.yAxis.labels.axisNamesColor,
            "font-size": v.value.axisNameFontSize,
            "font-weight": e.value.style.chart.yAxis.labels.axisNamesBold ? "bold" : "",
            "text-anchor": "middle"
          }, toDisplayString(a.name), 9, _t),
          e.value.style.chart.yAxis.labels.ticks.show ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.ticks, (n) => (openBlock(), createElementBlock("line", {
              x1: n.x,
              x2: n.x - 10,
              y1: n.y,
              y2: n.y,
              stroke: e.value.style.chart.yAxis.stroke,
              "stroke-width": e.value.style.chart.yAxis.strokeWidth,
              style: normalizeStyle(`opacity:${p2.value && !y.value.showTooltip ? 0.2 : 1}`)
            }, null, 12, Tt))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.ticks, (n) => (openBlock(), createElementBlock("text", {
              x: n.x - 12 + e.value.style.chart.yAxis.labels.ticks.offsetX,
              y: n.y + e.value.style.chart.yAxis.labels.ticks.offsetY + v.value.ticksFontSize / 3,
              fill: e.value.style.chart.yAxis.labels.ticks.color,
              "text-anchor": "end",
              "font-size": v.value.ticksFontSize,
              "font-weight": e.value.style.chart.yAxis.labels.ticks.bold ? "bold" : "normal",
              style: normalizeStyle(`opacity:${p2.value && !y.value.showTooltip ? 0.2 : 1}`)
            }, toDisplayString(fe({ value: n.value, index: o, datapoint: n })), 13, Mt))), 256))
          ], 64)) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (o, n) => (openBlock(), createElementBlock("g", null, [
            e.value.style.chart.plots.show ? (openBlock(), createElementBlock("g", zt, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(o.datapoints, (s2) => (openBlock(), createBlock($, {
                plot: { x: s2.x, y: s2.y },
                color: a.color,
                shape: a.shape,
                radius: a.shape === "triangle" ? v.value.plotSize * 1.2 : v.value.plotSize,
                stroke: e.value.style.chart.backgroundColor,
                strokeWidth: 0.5,
                onMouseenter: (i) => j({
                  shape: a.shape,
                  serieName: a.name,
                  serie: o,
                  relativeIndex: n,
                  seriesIndex: o.seriesIndex
                }),
                onMouseleave: l[0] || (l[0] = (i) => {
                  p2.value = null, L.value = false;
                }),
                style: normalizeStyle(`opacity:${p2.value ? p2.value === o.id ? e.value.style.chart.plots.opacity : 0.2 : e.value.style.chart.plots.opacity}`),
                onClick: () => Ee(s2)
              }, null, 8, ["plot", "color", "shape", "radius", "stroke", "onMouseenter", "style", "onClick"]))), 256)),
              y.value.showTooltip ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                p2.value && p2.value === o.id && o.datapoints.length ? (openBlock(), createElementBlock("text", {
                  key: 0,
                  x: o.datapoints[0].x - v.value.ticksFontSize,
                  y: o.datapoints[0].y + v.value.ticksFontSize / 3,
                  "text-anchor": "end",
                  "font-size": v.value.ticksFontSize,
                  fill: a.color,
                  "font-weight": "bold"
                }, toDisplayString(o.name), 9, It)) : createCommentVNode("", true)
              ], 64)),
              e.value.style.chart.comments.show ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(o.datapoints, (s2) => (openBlock(), createElementBlock("g", null, [
                s2.comment ? (openBlock(), createElementBlock("foreignObject", {
                  key: 0,
                  style: { overflow: "visible" },
                  height: "12",
                  width: e.value.style.chart.comments.width,
                  x: s2.x - e.value.style.chart.comments.width / 2 + e.value.style.chart.comments.offsetX,
                  y: s2.y + e.value.style.chart.comments.offsetY + 6
                }, [
                  createBaseVNode("div", Ft, [
                    renderSlot(t.$slots, "plot-comment", {
                      plot: { ...s2, color: a.color }
                    }, void 0, true)
                  ])
                ], 8, Pt)) : createCommentVNode("", true)
              ]))), 256)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            y.value.dataLabels.show || p2.value && p2.value === o.id ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(o.datapoints, (s2, i) => (openBlock(), createElementBlock("text", {
              x: s2.x + 12 + e.value.style.chart.yAxis.labels.datapoints.offsetX,
              y: s2.y + e.value.style.chart.yAxis.labels.datapoints.offsetY + v.value.datapointFontSize / 3,
              fill: e.value.style.chart.yAxis.labels.datapoints.useSerieColor ? a.color : e.value.style.chart.yAxis.labels.datapoints.color,
              "text-anchor": "start",
              "font-weight": e.value.style.chart.yAxis.labels.datapoints.bold ? "bold" : "normal",
              class: normalizeClass({ "vue-ui-pcp-animated": false, "vue-ui-pcp-transition": true }),
              "font-size": v.value.datapointFontSize,
              onMouseenter: ($2) => j({
                shape: a.shape,
                serieName: a.name,
                serie: o,
                relativeIndex: n,
                seriesIndex: o.seriesIndex
              }),
              onMouseleave: l[1] || (l[1] = ($2) => {
                p2.value = null, L.value = false;
              }),
              style: normalizeStyle(`opacity:${p2.value ? p2.value === o.id ? 1 : 0.2 : 1}`)
            }, toDisplayString(fe({ value: s2.value, index: i, datapoint: s2 })), 45, Nt2))), 256)) : createCommentVNode("", true),
            createBaseVNode("path", {
              d: `M${e.value.style.chart.lines.smooth ? o.smoothPath : o.straightPath}`,
              stroke: a.color,
              "stroke-width": e.value.style.chart.lines.strokeWidth,
              fill: "none",
              class: normalizeClass({ "vue-ui-pcp-animated vue-data-ui-line-animated": e.value.useCssAnimation, "vue-ui-pcp-transition": true }),
              onMouseenter: (s2) => j({
                shape: a.shape,
                serieName: a.name,
                serie: o,
                relativeIndex: n,
                seriesIndex: o.seriesIndex
              }),
              onMouseleave: l[2] || (l[2] = (s2) => {
                p2.value = null, L.value = false;
              }),
              style: normalizeStyle(`opacity:${p2.value ? p2.value === o.id ? e.value.style.chart.lines.opacity : 0.2 : e.value.style.chart.lines.opacity}; stroke-dasharray:${o.pathLength}; stroke-dashoffset: ${e.value.useCssAnimation ? o.pathLength : 0}`)
            }, null, 46, Lt2),
            y.value.showTooltip ? (openBlock(), createElementBlock("path", {
              key: 2,
              d: `M${e.value.style.chart.lines.smooth ? o.smoothPath : o.straightPath}`,
              stroke: "transparent",
              "stroke-width": 12,
              fill: "none",
              class: normalizeClass({ "vue-ui-pcp-animated vue-data-ui-line-animated": e.value.useCssAnimation, "vue-ui-pcp-transition": true }),
              onMouseenter: (s2) => j({
                shape: a.shape,
                serieName: a.name,
                serie: o,
                relativeIndex: n,
                seriesIndex: o.seriesIndex
              }),
              onMouseleave: l[3] || (l[3] = (s2) => {
                p2.value = null, L.value = false;
              }),
              style: { opacity: "0" }
            }, null, 42, St2)) : createCommentVNode("", true)
          ]))), 256))
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: d.value }, void 0, true)
      ], 14, wt)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ot, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ve) || unref(de) })), void 0, true)
      ])) : createCommentVNode("", true),
      F.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "parallelCoordinatePlot",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: le
      }, [
        e.value.style.chart.legend.show && F.value ? (openBlock(), createBlock(C, {
          key: `legend_${ue.value}`,
          legendSet: Oe.value,
          config: De.value,
          onClickMarker: l[4] || (l[4] = ({ legend: a }) => {
            me(a.id), xe(a);
          })
        }, {
          item: withCtx(({ legend: a, index: o }) => [
            createBaseVNode("div", {
              onClick: (n) => {
                a.segregate(), xe(a);
              },
              style: normalizeStyle(`opacity:${w.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name), 13, Dt2)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: _.value
        }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: oe,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: y.value.showTooltip && L.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: N.value,
        content: J.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...Q2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...Q2.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      F.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: y.value.showTable,
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
            key: `table_${re2.value}`,
            colNames: S.value.colNames,
            head: S.value.head,
            body: S.value.body,
            config: S.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: l[5] || (l[5] = (a) => y.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", { innerHTML: a }, null, 8, Wt)
            ]),
            td: withCtx(({ td: a }) => [
              createTextVNode(toDisplayString(a), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Ct));
  }
};
var ta = s(Et, [["__scopeId", "data-v-0d19b552"]]);
export {
  ta as default
};
//# sourceMappingURL=vue-ui-parallel-coordinate-plot-in5qpfXf-WVFOIQ7R.js.map
