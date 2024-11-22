import {
  C
} from "./chunk-KAESDEK5.js";
import {
  E
} from "./chunk-57X6EWGW.js";
import {
  M,
  O
} from "./chunk-NF5J7GNE.js";
import {
  W
} from "./chunk-AG6S3GFO.js";
import {
  $
} from "./chunk-7VCRGXFE.js";
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
  $t,
  Ge,
  Gt,
  Ht,
  It,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  et,
  j,
  lr,
  nr,
  oe,
  or,
  qt,
  rr,
  vt,
  wt
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-parallel-coordinate-plot-BcYrYXhG.js
var yt = ["id"];
var ft = ["xmlns", "viewBox"];
var gt = { style: { "pointer-events": "none" } };
var bt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var xt = ["x", "y", "fill", "font-size", "font-weight"];
var kt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ct = ["x", "y", "fill", "font-size", "font-weight"];
var wt2 = { key: 0 };
var $t2 = ["x", "y", "font-size", "fill"];
var _t = ["width", "x", "y"];
var Tt = { style: { width: "100%" } };
var zt = ["x", "y", "fill", "font-weight", "font-size", "onMouseenter"];
var At = ["d", "stroke", "stroke-width", "onMouseenter"];
var Mt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var It2 = ["onClick"];
var Ft = ["innerHTML"];
var Pt = {
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
  setup(Te, { expose: ze, emit: K }) {
    const _ = Te, { vue_ui_parallel_coordinate_plot: Ae } = oe(), P = computed({
      get() {
        return !!_.dataset && _.dataset.length;
      },
      set(t) {
        return t;
      }
    }), Z = ref(0), L = ref(null), ee = ref(null), te = ref(null), ae = ref(0), le = ref(0), oe2 = ref(0), G = ref(Lt()), O2 = ref(false);
    function Me(t) {
      O2.value = t, Z.value += 1;
    }
    const e = computed({
      get: () => se2(),
      set: (t) => t
    });
    function se2() {
      const t = c({
        userConfig: _.config,
        defaultConfig: Ae
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_parallel_coordinate_plot[t.theme] || _.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => _.config, (t) => {
      e.value = se2(), ne(), ae.value += 1, oe2.value += 1, le.value += 1;
    }, { deep: true });
    const W2 = ref(null);
    onMounted(() => {
      ne();
    });
    function ne() {
      if (Xt(_.dataset) ? Kt({
        componentName: "VueUiParallelCoordinatePlot",
        type: "dataset"
      }) : _.dataset.forEach((t, l) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "series"]
        }).forEach((a) => {
          P.value = false, Kt({
            componentName: "VueUiParallelCoordinatePlot",
            type: "datasetSerieAttribute",
            property: a,
            index: l
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: l, height: a } = M({
            chart: L.value,
            title: e.value.style.chart.title.text ? ee.value : null,
            legend: e.value.style.chart.legend.show ? te.value : null
          });
          c2.value.width = l, c2.value.height = a, c2.value.plotSize = lr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.plots.radius,
            threshold: 2,
            fallback: 2
          }), c2.value.ticksFontSize = lr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.yAxis.labels.ticks.fontSize,
            threshold: 10,
            fallback: 10
          }), c2.value.datapointFontSize = lr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.yAxis.labels.datapoints.fontSize,
            threshold: 10,
            fallback: 10
          }), c2.value.axisNameFontSize = lr({
            relator: Math.min(l, a),
            adjuster: 600,
            source: e.value.style.chart.yAxis.labels.axisNamesFontSize,
            threshold: 12,
            fallback: 12
          });
        });
        W2.value = new ResizeObserver(t), W2.value.observe(L.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      W2.value && W2.value.disconnect();
    });
    const { isPrinting: ie2, isImaging: ue, generatePdf: re, generateImage: ce } = se({
      elementId: `pcp_${G.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-parallel-coordinate-plot"
    }), c2 = ref({
      height: e.value.style.chart.height,
      width: e.value.style.chart.width,
      plotSize: e.value.style.chart.plots.radius,
      // ratio 100
      ticksFontSize: e.value.style.chart.yAxis.labels.ticks.fontSize,
      // ratio 42.85
      datapointFontSize: e.value.style.chart.yAxis.labels.datapoints.fontSize,
      axisNameFontSize: e.value.style.chart.yAxis.labels.axisNamesFontSize
    }), v = computed(() => {
      const { top: t, right: l, bottom: a, left: o } = e.value.style.chart.padding, n = c2.value.height, s2 = c2.value.width;
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
    }), Ie = computed(() => or(e.value.customPalette)), y = ref({
      dataLabels: {
        show: e.value.style.chart.yAxis.labels.datapoints.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), w = ref([]);
    function ve(t) {
      w.value.includes(t) ? w.value = w.value.filter((l) => l !== t) : w.value.push(t);
    }
    const T = computed(() => _.dataset.map((t, l) => {
      const a = j(t.color) || Ie.value[l] || et[l] || et[l % et.length];
      return {
        ...t,
        series: t.series.map((o) => ({
          ...o,
          id: Lt(),
          color: a
        })),
        seriesIndex: l,
        color: a,
        id: Lt(),
        shape: t.shape || "circle"
      };
    })), Fe = computed(() => T.value.map((t) => ({
      ...t,
      opacity: w.value.includes(t.id) ? 0.5 : 1,
      segregate: () => ve(t.id),
      isSegregated: w.value.includes(t.id)
    }))), Pe = computed(() => ({
      cy: "pcp-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), de = computed(() => Math.max(
      ...T.value.filter((t) => !w.value.includes(t.id)).map((t) => Math.max(...t.series.flatMap((l) => l.values.length)))
    )), k = computed(() => v.value.width / de.value), H = computed(() => T.value.filter((t) => !w.value.includes(t.id))), m = computed(() => {
      let t = [];
      for (let l = 0; l < de.value; l += 1) {
        const a = Math.min(...H.value.flatMap((d) => d.series.map((E2) => E2.values[l] || 0) || 0)), o = Math.max(...H.value.flatMap((d) => d.series.map((E2) => E2.values[l] || 0) || 0)), n = o === a ? a / 4 : a, s2 = o === a ? o * 2 : o, r = It(n, s2, e.value.style.chart.yAxis.scaleTicks), $2 = r.ticks.map((d, E2) => {
          const Le = r.min < 0 ? d + Math.abs(r.min) : d - Math.abs(r.min), Oe = r.min < 0 ? r.max + Math.abs(r.min) : r.max - Math.abs(r.min);
          return {
            y: v.value.bottom - v.value.height * (Le / Oe),
            x: v.value.left + k.value * l + k.value / 2,
            value: d
          };
        });
        t.push({
          scale: r,
          ticks: $2,
          name: e.value.style.chart.yAxis.labels.axisNames[l] || `Y-${l + 1}`
        });
      }
      return t;
    }), X = computed(() => H.value.map((t, l) => ({
      ...t,
      series: t.series.map((a, o) => ({
        ...a,
        datapoints: a.values.map((n, s2) => {
          const r = m.value[s2].scale.min < 0 ? (n || 0) + Math.abs(m.value[s2].scale.min) : (n || 0) - Math.abs(m.value[s2].scale.min), $2 = m.value[s2].scale.min < 0 ? m.value[s2].scale.max + Math.abs(m.value[s2].scale.min) : m.value[s2].scale.max - Math.abs(m.value[s2].scale.min);
          return {
            name: a.name,
            seriesName: t.name,
            axisIndex: s2,
            datapointIndex: o,
            seriesIndex: l,
            value: n || 0,
            x: v.value.left + k.value * s2 + k.value / 2,
            y: v.value.bottom - v.value.height * (r / $2),
            comment: a.comments && a.comments[s2] || ""
          };
        })
      }))
    })).map((t) => ({
      ...t,
      series: t.series.map((l) => {
        const a = wt(l.datapoints), o = vt(l.datapoints), n = rr(e.value.style.chart.lines.smooth ? `M ${o}` : `M ${a}`);
        return {
          ...l,
          smoothPath: o,
          straightPath: a,
          pathLength: n
        };
      })
    })));
    function he({ value: t, index: l, datapoint: a }) {
      return nr(
        e.value.style.chart.yAxis.labels.formatters[l] || null,
        t,
        Gt({
          p: e.value.style.chart.yAxis.labels.prefixes[l] || "",
          v: t,
          s: e.value.style.chart.yAxis.labels.suffixes[l] || "",
          r: e.value.style.chart.yAxis.labels.roundings[l] || 0
        }),
        { datapoint: a, seriesIndex: l }
      );
    }
    const p2 = ref(null), Y = ref(null), D = ref(false), q = ref("");
    function Q({ shape: t, serieName: l, serie: a, relativeIndex: o, seriesIndex: n }) {
      Y.value = { serie: a, relativeIndex: o, seriesIndex: n, series: T.value, scales: m.value }, D.value = true, p2.value = a.id;
      let s2 = "";
      const r = e.value.style.chart.tooltip.customFormat;
      Ht(r) && $t(() => r({
        serie: a,
        seriesIndex: a.seriesIndex,
        series: T.value,
        config: e.value,
        scales: m.value
      })) ? q.value = r({
        serie: a,
        seriesIndex: a.seriesIndex,
        series: T.value,
        config: e.value,
        scales: m.value
      }) : (s2 += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${l ? l + " - " : ""}${a.name}</div>`, m.value.map(($2) => $2.name).forEach(($2, d) => {
        s2 += `
                <div class="vue-ui-tooltip-item" style="text-align:left">
                    <span>${$2}: </span>
                    <span>
                        ${nr(
          e.value.style.chart.yAxis.labels.formatters[d] || null,
          a.datapoints[d].value,
          Gt({
            p: e.value.style.chart.yAxis.labels.prefixes[d] || "",
            v: a.datapoints[d].value,
            s: e.value.style.chart.yAxis.labels.suffixes[d] || "",
            r: e.value.style.chart.yAxis.labels.roundings[d] || ""
          }),
          { datapoint: a.datapoints[d], seriesIndex: d }
        )}    
                    </span>
                </div>
            `, e.value.style.chart.comments.showInTooltip && a.datapoints[d].comment && (s2 += `<div class="vue-data-ui-tooltip-comment" style="background:${a.color}20; padding: 6px; margin-bottom: 6px; border-left: 1px solid ${a.color}">${a.datapoints[d].comment}</div>`);
      }), q.value = `<div>${s2}</div>`);
    }
    function Ne() {
      return T.value;
    }
    const N = computed(() => {
      const t = [e.value.table.columnNames.series].concat([e.value.table.columnNames.item]).concat(m.value.map((n) => n.name)), l = X.value.flatMap((n, s2) => n.series.map((r) => [n.name].concat([r.name]).concat(r.values))), a = {
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
      }, o = [e.value.table.columnNames.series].concat([e.value.table.columnNames.item]).concat(m.value.map((n) => n.name));
      return {
        body: l,
        head: t,
        config: a,
        colNames: o
      };
    }), pe = computed(() => X.value.length === 0 ? { head: [], body: [], config: {}, columnNames: [] } : {
      head: N.value.head,
      body: N.value.body
    });
    function me() {
      const t = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], l = pe.value.head, a = pe.value.body, o = t.concat([l]).concat(a), n = Nt(o);
      Ot({ csvContent: n, title: e.value.style.chart.title.text || "vue-ui-parallel-coordinate-plot" });
    }
    function Se(t) {
      K("selectDatapoint", t);
    }
    function ye(t) {
      K("selectLegend", {
        ...t,
        isSegregated: !t.isSegregated,
        opacity: t.isSegregated ? 1 : 0.5
      });
    }
    function fe() {
      y.value.showTable = !y.value.showTable;
    }
    function ge() {
      y.value.dataLabels.show = !y.value.dataLabels.show;
    }
    function be() {
      y.value.showTooltip = !y.value.showTooltip;
    }
    return ze({
      getData: Ne,
      generateCsv: me,
      generatePdf: re,
      generateImage: ce,
      toggleTable: fe,
      toggleLabels: ge,
      toggleTooltip: be
    }), (t, l) => (openBlock(), createElementBlock("div", {
      ref_key: "pcpChart",
      ref: L,
      class: normalizeClass(`vue-ui-pcp ${O2.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`),
      id: `pcp_${G.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: ee,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ae.value}`,
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
      e.value.userOptions.show && P.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_options_${Z.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ie2),
        isImaging: unref(ue),
        uid: G.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: O2.value,
        isTooltip: y.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: L.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Me,
        onGeneratePdf: unref(re),
        onGenerateCsv: me,
        onGenerateImage: unref(ce),
        onToggleTable: fe,
        onToggleLabels: ge,
        onToggleTooltip: be
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      P.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": O2.value, "vue-data-ui-fulscreen--off": !O2.value }),
        viewBox: `0 0 ${v.value.chartWidth <= 0 ? 10 : v.value.chartWidth} ${v.value.chartHeight <= 0 ? 10 : v.value.chartHeight}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (a, o) => (openBlock(), createElementBlock("g", gt, [
          createBaseVNode("line", {
            x1: v.value.left + k.value * o + k.value / 2,
            x2: v.value.left + k.value * o + k.value / 2,
            y1: v.value.top,
            y2: v.value.bottom,
            stroke: e.value.style.chart.yAxis.stroke,
            "stroke-width": e.value.style.chart.yAxis.strokeWidth
          }, null, 8, bt),
          createBaseVNode("text", {
            x: v.value.left + k.value * o + k.value / 2,
            y: v.value.top - 24,
            fill: e.value.style.chart.yAxis.labels.axisNamesColor,
            "font-size": c2.value.axisNameFontSize,
            "font-weight": e.value.style.chart.yAxis.labels.axisNamesBold ? "bold" : "",
            "text-anchor": "middle"
          }, toDisplayString(a.name), 9, xt),
          e.value.style.chart.yAxis.labels.ticks.show ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.ticks, (n) => (openBlock(), createElementBlock("line", {
              x1: n.x,
              x2: n.x - 10,
              y1: n.y,
              y2: n.y,
              stroke: e.value.style.chart.yAxis.stroke,
              "stroke-width": e.value.style.chart.yAxis.strokeWidth,
              style: normalizeStyle(`opacity:${p2.value && !y.value.showTooltip ? 0.2 : 1}`)
            }, null, 12, kt))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.ticks, (n) => (openBlock(), createElementBlock("text", {
              x: n.x - 12 + e.value.style.chart.yAxis.labels.ticks.offsetX,
              y: n.y + e.value.style.chart.yAxis.labels.ticks.offsetY + c2.value.ticksFontSize / 3,
              fill: e.value.style.chart.yAxis.labels.ticks.color,
              "text-anchor": "end",
              "font-size": c2.value.ticksFontSize,
              "font-weight": e.value.style.chart.yAxis.labels.ticks.bold ? "bold" : "normal",
              style: normalizeStyle(`opacity:${p2.value && !y.value.showTooltip ? 0.2 : 1}`)
            }, toDisplayString(he({ value: n.value, index: o, datapoint: n })), 13, Ct))), 256))
          ], 64)) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(X.value, (a) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (o, n) => (openBlock(), createElementBlock("g", null, [
            e.value.style.chart.plots.show ? (openBlock(), createElementBlock("g", wt2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(o.datapoints, (s2) => (openBlock(), createBlock($, {
                plot: { x: s2.x, y: s2.y },
                color: a.color,
                shape: a.shape,
                radius: a.shape === "triangle" ? c2.value.plotSize * 1.2 : c2.value.plotSize,
                stroke: e.value.style.chart.backgroundColor,
                strokeWidth: 0.5,
                onMouseenter: (r) => Q({
                  shape: a.shape,
                  serieName: a.name,
                  serie: o,
                  relativeIndex: n,
                  seriesIndex: o.seriesIndex
                }),
                onMouseleave: l[0] || (l[0] = (r) => {
                  p2.value = null, D.value = false;
                }),
                style: normalizeStyle(`opacity:${p2.value ? p2.value === o.id ? e.value.style.chart.plots.opacity : 0.2 : e.value.style.chart.plots.opacity}`),
                onClick: () => Se(s2)
              }, null, 8, ["plot", "color", "shape", "radius", "stroke", "onMouseenter", "style", "onClick"]))), 256)),
              y.value.showTooltip ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                p2.value && p2.value === o.id && o.datapoints.length ? (openBlock(), createElementBlock("text", {
                  key: 0,
                  x: o.datapoints[0].x - c2.value.ticksFontSize,
                  y: o.datapoints[0].y + c2.value.ticksFontSize / 3,
                  "text-anchor": "end",
                  "font-size": c2.value.ticksFontSize,
                  fill: a.color,
                  "font-weight": "bold"
                }, toDisplayString(o.name), 9, $t2)) : createCommentVNode("", true)
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
                  createBaseVNode("div", Tt, [
                    renderSlot(t.$slots, "plot-comment", {
                      plot: { ...s2, color: a.color }
                    }, void 0, true)
                  ])
                ], 8, _t)) : createCommentVNode("", true)
              ]))), 256)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            y.value.dataLabels.show || p2.value && p2.value === o.id ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(o.datapoints, (s2, r) => (openBlock(), createElementBlock("text", {
              x: s2.x + 12 + e.value.style.chart.yAxis.labels.datapoints.offsetX,
              y: s2.y + e.value.style.chart.yAxis.labels.datapoints.offsetY + c2.value.datapointFontSize / 3,
              fill: e.value.style.chart.yAxis.labels.datapoints.useSerieColor ? a.color : e.value.style.chart.yAxis.labels.datapoints.color,
              "text-anchor": "start",
              "font-weight": e.value.style.chart.yAxis.labels.datapoints.bold ? "bold" : "normal",
              class: normalizeClass({ "vue-ui-pcp-animated": false, "vue-ui-pcp-transition": true }),
              "font-size": c2.value.datapointFontSize,
              onMouseenter: ($2) => Q({
                shape: a.shape,
                serieName: a.name,
                serie: o,
                relativeIndex: n,
                seriesIndex: o.seriesIndex
              }),
              onMouseleave: l[1] || (l[1] = ($2) => {
                p2.value = null, D.value = false;
              }),
              style: normalizeStyle(`opacity:${p2.value ? p2.value === o.id ? 1 : 0.2 : 1}`)
            }, toDisplayString(he({ value: s2.value, index: r, datapoint: s2 })), 45, zt))), 256)) : createCommentVNode("", true),
            createBaseVNode("path", {
              d: `M${e.value.style.chart.lines.smooth ? o.smoothPath : o.straightPath}`,
              stroke: a.color,
              "stroke-width": e.value.style.chart.lines.strokeWidth,
              fill: "none",
              class: normalizeClass({ "vue-ui-pcp-animated vue-data-ui-line-animated": e.value.useCssAnimation, "vue-ui-pcp-transition": true }),
              onMouseenter: (s2) => Q({
                shape: a.shape,
                serieName: a.name,
                serie: o,
                relativeIndex: n,
                seriesIndex: o.seriesIndex
              }),
              onMouseleave: l[2] || (l[2] = (s2) => {
                p2.value = null, D.value = false;
              }),
              style: normalizeStyle(`opacity:${p2.value ? p2.value === o.id ? e.value.style.chart.lines.opacity : 0.2 : e.value.style.chart.lines.opacity}; stroke-dasharray:${o.pathLength}; stroke-dashoffset: ${e.value.useCssAnimation ? o.pathLength : 0}`)
            }, null, 46, At)
          ]))), 256))
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: v.value }, void 0, true)
      ], 14, ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Mt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ie2) || unref(ue) })), void 0, true)
      ])) : createCommentVNode("", true),
      P.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "parallelCoordinatePlot",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: te
      }, [
        e.value.style.chart.legend.show && P.value ? (openBlock(), createBlock(C, {
          key: `legend_${le.value}`,
          legendSet: Fe.value,
          config: Pe.value,
          onClickMarker: l[3] || (l[3] = ({ legend: a }) => {
            ve(a.id), ye(a);
          })
        }, {
          item: withCtx(({ legend: a, index: o }) => [
            createBaseVNode("div", {
              onClick: (n) => {
                a.segregate(), ye(a);
              },
              style: normalizeStyle(`opacity:${w.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name), 13, It2)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: T.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: y.value.showTooltip && D.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: L.value,
        content: q.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...Y.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...Y.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      P.value ? (openBlock(), createBlock(R, {
        key: 5,
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
            key: `table_${oe2.value}`,
            colNames: N.value.colNames,
            head: N.value.head,
            body: N.value.body,
            config: N.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: l[4] || (l[4] = (a) => y.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", { innerHTML: a }, null, 8, Ft)
            ]),
            td: withCtx(({ td: a }) => [
              createTextVNode(toDisplayString(a), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, yt));
  }
};
var Xt2 = s(Pt, [["__scopeId", "data-v-88d09f11"]]);
export {
  Xt2 as default
};
//# sourceMappingURL=vue-ui-parallel-coordinate-plot-BcYrYXhG-OSKPVC4C.js.map
