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
  Mt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Vt,
  Xt,
  et,
  j,
  k,
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-strip-plot-CIb2LSV8.js
var vt = ["id"];
var ct = ["xmlns", "viewBox"];
var ht = { key: 0 };
var dt = { key: 0 };
var pt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var yt = { key: 1 };
var ft = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var bt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var mt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var gt = ["x", "y", "fill", "font-size"];
var xt = ["x", "y", "font-size", "fill"];
var kt = ["fill", "font-size", "transform"];
var Ct = ["fill", "font-size", "x", "y"];
var _t = ["x1", "x2", "y1", "y2", "stroke"];
var wt = ["cx", "cy", "fill"];
var $t2 = ["cx", "cy", "fill"];
var Tt = ["id"];
var Lt2 = ["stop-color"];
var St = ["stop-color"];
var Pt = ["stop-color"];
var zt = { key: 0 };
var Nt2 = ["x", "y", "font-size", "fill"];
var At = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Ot2 = ["innerHTML"];
var Ft = {
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
  setup(Ce, { expose: _e, emit: we }) {
    const y = Ce, { vue_ui_strip_plot: $e } = oe(), _ = computed({
      get() {
        return !!y.dataset && y.dataset.length;
      },
      set(t) {
        return t;
      }
    }), B = ref(Lt()), ee = ref(0), X = ref(false), j2 = ref(""), z = ref(null), te = ref(null), le = ref(false), ae = ref(0), oe2 = ref(0), e = computed({
      get: () => se2(),
      set: (t) => t
    });
    function se2() {
      const t = c({
        userConfig: y.config,
        defaultConfig: $e
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_strip_plot[t.theme] || y.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => y.config, (t) => {
      e.value = se2(), re(), ae.value += 1, oe2.value += 1;
    }, { deep: true });
    const W2 = ref(null);
    onMounted(() => {
      re();
    });
    function re() {
      if (Xt(y.dataset) ? Kt({
        componentName: "VueUiStripPlot",
        type: "dataset"
      }) : y.dataset.forEach((t, o) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "plots"]
        }).forEach((l) => {
          _.value = false, Kt({
            componentName: "VueUiStripPlot",
            type: "datasetSerieAttribute",
            property: l,
            index: o
          });
        }), t.plots && t.plots.forEach((l, r) => {
          qt({
            datasetObject: l,
            requiredAttributes: ["name", "value"]
          }).forEach((u) => {
            _.value = false, Kt({
              componentName: "VueUiStripPlot",
              type: "datasetSerieAttribute",
              property: u,
              index: `${o},${r}`
            });
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: o, height: l } = M({
            chart: z.value,
            title: e.value.style.chart.title.text ? te.value : null
          });
          I.value = l, S.value.width = o, S.value.height = l, A.value = (o - f.value.left - f.value.right) / y.dataset.length, M2.value = lr({
            relator: Math.min(l, o),
            adjuster: 600,
            source: e.value.style.chart.plots.radius,
            threshold: 6,
            fallback: 6
          });
        });
        W2.value = new ResizeObserver(t), W2.value.observe(z.value.parentNode);
      }
      le.value = true, setTimeout(() => {
        N.value = false;
      }, Te.value * 50);
    }
    onBeforeUnmount(() => {
      W2.value && W2.value.disconnect();
    });
    const { isPrinting: ue, isImaging: ie2, generatePdf: ne, generateImage: ve } = se({
      elementId: `strip-plot_${B.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-strip-plot"
    }), ce = computed(() => or(e.value.customPalette)), N = ref(e.value.useCssAnimation), d = ref({
      showTable: e.value.table.show,
      dataLabels: {
        show: e.value.style.chart.labels.bestPlotLabel.show
      },
      showTooltip: e.value.style.chart.tooltip.show
    }), f = ref({
      top: e.value.style.chart.padding.top,
      bottom: e.value.style.chart.padding.bottom,
      left: e.value.style.chart.padding.left,
      right: e.value.style.chart.padding.right
    }), A = ref(e.value.style.chart.stripWidth), I = ref(e.value.style.chart.height), M2 = ref(e.value.style.chart.plots.radius), S = ref({
      width: A.value * y.dataset.length + f.value.left + f.value.right,
      height: e.value.style.chart.height
    }), a = computed(() => {
      const t = A.value * y.dataset.length + f.value.left + f.value.right;
      return {
        left: f.value.left,
        right: t - f.value.right,
        top: f.value.top,
        bottom: I.value - f.value.bottom,
        width: A.value * y.dataset.length,
        height: I.value - f.value.top - f.value.bottom,
        stripWidth: A.value,
        absoluteHeight: I.value,
        absoluteWidth: t
      };
    }), D = computed(() => _.value ? y.dataset.map((t, o) => {
      const l = Lt();
      return {
        ...t,
        id: l,
        color: t.color ? j(t.color) : ce.value[o] || et[o] || et[o % et.length],
        plots: t.plots.map((r) => ({
          ...r,
          value: k(r.value),
          parentId: l,
          color: t.color ? j(t.color) : ce.value[o] || et[o] || et[o % et.length],
          id: Lt()
        })).sort((r, u) => r.value - u.value)
      };
    }) : null), k2 = computed(() => (D.value || []).map((t, o) => ({
      ...t,
      plots: t.plots.map((l) => ({
        ...l,
        x: a.value.left + (o + 1) * a.value.stripWidth - a.value.stripWidth / 2
      }))
    }))), Te = computed(() => Math.max(...k2.value.map((t) => t.plots.length))), Y = computed(() => {
      const t = k2.value.flatMap((o) => o.plots.map((l) => l.value));
      return {
        max: Math.max(...t),
        min: Math.min(...t)
      };
    }), w = computed(() => It(Y.value.min < 0 ? Y.value.min : 0, Y.value.max, e.value.style.chart.grid.scaleSteps)), Le = computed(() => (k2.value || []).map((t, o) => ({
      ...t,
      plots: t.plots.map((l) => ({
        ...l,
        y: a.value.bottom - (l.value + Math.abs(w.value.min)) / (w.value.max + Math.abs(w.value.min)) * a.value.height
      }))
    }))), he = computed(() => w.value.ticks.map((t) => ({
      y: a.value.bottom - a.value.height * ((t + Math.abs(w.value.min)) / (w.value.max + Math.abs(w.value.min))),
      x1: a.value.left,
      x2: a.value.right,
      value: t
    }))), J = ref(null), v = ref(null);
    function Se({ datapoint: t, seriesIndex: o }) {
      J.value = { datapoint: t, seriesIndex: o, config: e.value, series: D.value }, X.value = true, v.value = t;
      const l = e.value.style.chart.tooltip.customFormat;
      if (Ht(l) && $t(() => l({
        seriesIndex: o,
        datapoint: t,
        series: D.value,
        config: e.value
      })))
        j2.value = l({
          seriesIndex: o,
          datapoint: t,
          series: D.value,
          config: e.value
        });
      else {
        let r = "";
        r += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${e.value.style.chart.plots.gradient.show ? `url(#${t.parentId})` : t.color}"/></svg>${t.name}</div>`, r += `<div>${nr(
          e.value.style.chart.labels.formatter,
          t.value,
          Gt({
            p: e.value.style.chart.labels.prefix,
            v: t.value,
            s: e.value.style.chart.labels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: t, seriesIndex: o }
        )}</div>`, j2.value = `<div>${r}</div>`;
      }
    }
    const G = computed(() => {
      const t = k2.value.flatMap((l) => JSON.parse(JSON.stringify(l.plots)).sort((r, u) => u.value - r.value).map((r) => ({
        name: `${l.name} - ${r.name}`,
        color: r.color
      }))), o = k2.value.flatMap((l) => JSON.parse(JSON.stringify(l.plots)).sort((r, u) => u.value - r.value).map((r) => r.value));
      return { head: t, body: o };
    });
    function de() {
      nextTick(() => {
        const t = G.value.head.map((r, u) => [[
          r.name
        ], [G.value.body[u]]]), o = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[e.value.table.columnNames.series], [e.value.table.columnNames.value]]].concat(t), l = Nt(o);
        Ot({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-strip-plot" });
      });
    }
    const E2 = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value
      ], o = G.value.head.map((u, $2) => {
        const V = Gt({
          p: e.value.style.chart.labels.prefix,
          v: G.value.body[$2],
          s: e.value.style.chart.labels.suffix,
          r: e.value.table.td.roundingValue
        });
        return [
          {
            color: u.color,
            name: u.name
          },
          V
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
        body: o,
        config: l
      };
    }), O2 = ref(false);
    function Pe(t) {
      O2.value = t, ee.value += 1;
    }
    function ze() {
      return k2.value;
    }
    function pe() {
      d.value.showTable = !d.value.showTable;
    }
    function ye() {
      d.value.dataLabels.show = !d.value.dataLabels.show;
    }
    function fe() {
      d.value.showTooltip = !d.value.showTooltip;
    }
    return _e({
      getData: ze,
      generatePdf: ne,
      generateCsv: de,
      generateImage: ve,
      toggleTable: pe,
      toggleLabels: ye,
      toggleTooltip: fe
    }), (t, o) => (openBlock(), createElementBlock("div", {
      ref_key: "stripPlotChart",
      ref: z,
      class: normalizeClass(`vue-ui-strip-plot ${O2.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`),
      id: `strip-plot_${B.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: te,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ae.value}`,
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
      e.value.userOptions.show && _.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${ee.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ue),
        isImaging: unref(ie2),
        uid: B.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: d.value.showTooltip,
        isFullscreen: O2.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: z.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Pe,
        onGeneratePdf: unref(ne),
        onGenerateCsv: de,
        onGenerateImage: unref(ve),
        onToggleTable: pe,
        onToggleLabels: ye,
        onToggleTooltip: fe
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      _.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": O2.value, "vue-data-ui-fulscreen--off": !O2.value }),
        viewBox: `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color};`)
      }, [
        createVNode(p),
        e.value.style.chart.grid.show ? (openBlock(), createElementBlock("g", ht, [
          e.value.style.chart.grid.horizontalGrid.show ? (openBlock(), createElementBlock("g", dt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(he.value, (l) => (openBlock(), createElementBlock("line", {
              x1: l.x1,
              x2: l.x2,
              y1: l.y,
              y2: l.y,
              stroke: e.value.style.chart.grid.horizontalGrid.stroke,
              "stroke-width": e.value.style.chart.grid.horizontalGrid.strokeWidth,
              "stroke-dasharray": e.value.style.chart.grid.horizontalGrid.strokeDasharray,
              "stroke-linecap": "round"
            }, null, 8, pt))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.chart.grid.verticalGrid.show ? (openBlock(), createElementBlock("g", yt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(k2.value, (l, r) => (openBlock(), createElementBlock("line", {
              x1: a.value.left + (r + 1) * a.value.stripWidth,
              x2: a.value.left + (r + 1) * a.value.stripWidth,
              y1: a.value.top,
              y2: a.value.bottom,
              stroke: e.value.style.chart.grid.verticalGrid.stroke,
              "stroke-width": e.value.style.chart.grid.verticalGrid.strokeWidth,
              "stroke-dasharray": e.value.style.chart.grid.verticalGrid.strokeDasharray,
              "stroke-linecap": "round"
            }, null, 8, ft))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.left,
            y1: a.value.top,
            y2: a.value.bottom,
            stroke: e.value.style.chart.grid.stroke,
            "stroke-width": e.value.style.chart.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, bt),
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.right,
            y1: a.value.bottom,
            y2: a.value.bottom,
            stroke: e.value.style.chart.grid.stroke,
            "stroke-width": e.value.style.chart.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, mt)
        ])) : createCommentVNode("", true),
        e.value.style.chart.labels.yAxisLabels.show ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(he.value, (l, r) => (openBlock(), createElementBlock("text", {
          x: l.x1 - e.value.style.chart.labels.yAxisLabels.fontSize / 2 + e.value.style.chart.labels.yAxisLabels.offsetX,
          y: l.y + e.value.style.chart.labels.yAxisLabels.fontSize / 3,
          fill: e.value.style.chart.labels.yAxisLabels.color,
          "font-size": e.value.style.chart.labels.yAxisLabels.fontSize,
          "text-anchor": "end"
        }, toDisplayString(unref(nr)(
          e.value.style.chart.labels.formatter,
          l.value,
          unref(Gt)({
            p: e.value.style.chart.labels.prefix,
            v: l.value,
            s: e.value.style.chart.labels.suffix,
            r: e.value.style.chart.labels.yAxisLabels.rounding
          }),
          { datapoint: l, seriesIndex: r }
        )), 9, gt))), 256)) : createCommentVNode("", true),
        e.value.style.chart.labels.xAxisLabels.show ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(k2.value, (l, r) => (openBlock(), createElementBlock("text", {
          x: a.value.left + (r + 1) * a.value.stripWidth - a.value.stripWidth / 2,
          y: a.value.bottom + e.value.style.chart.labels.xAxisLabels.fontSize * 2 + e.value.style.chart.labels.xAxisLabels.offsetY,
          "font-size": e.value.style.chart.labels.xAxisLabels.fontSize,
          fill: e.value.style.chart.labels.xAxisLabels.color,
          "text-anchor": "middle"
        }, toDisplayString(l.name), 9, xt))), 256)) : createCommentVNode("", true),
        e.value.style.chart.labels.axis.yLabel ? (openBlock(), createElementBlock("text", {
          key: 3,
          fill: e.value.style.chart.labels.axis.color,
          "font-size": e.value.style.chart.labels.axis.fontSize,
          transform: `translate(${e.value.style.chart.labels.axis.fontSize + e.value.style.chart.labels.axis.yLabelOffsetX}, ${a.value.top + a.value.height / 2}) rotate(-90)`,
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.labels.axis.yLabel), 9, kt)) : createCommentVNode("", true),
        e.value.style.chart.labels.axis.xLabel ? (openBlock(), createElementBlock("text", {
          key: 4,
          fill: e.value.style.chart.labels.axis.color,
          "font-size": e.value.style.chart.labels.axis.fontSize,
          x: a.value.left + a.value.width / 2,
          y: a.value.absoluteHeight,
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.labels.axis.xLabel), 9, Ct)) : createCommentVNode("", true),
        v.value ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          createBaseVNode("line", {
            x1: a.value.left,
            x2: a.value.right,
            y1: v.value.y,
            y2: v.value.y,
            stroke: v.value.color,
            "stroke-width": 1,
            class: normalizeClass({ "select-circle": e.value.useCssAnimation })
          }, null, 10, _t),
          createBaseVNode("circle", {
            cx: a.value.left,
            cy: v.value.y,
            r: 3,
            fill: v.value.color,
            class: normalizeClass({ "select-circle": e.value.useCssAnimation })
          }, null, 10, wt),
          createBaseVNode("circle", {
            cx: a.value.right,
            cy: v.value.y,
            r: 3,
            fill: v.value.color,
            class: normalizeClass({ "select-circle": e.value.useCssAnimation })
          }, null, 10, $t2)
        ], 64)) : createCommentVNode("", true),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(k2.value, (l) => (openBlock(), createElementBlock("radialGradient", {
            id: l.id,
            fy: "30%"
          }, [
            createBaseVNode("stop", {
              offset: "10%",
              "stop-color": unref(Mt)(l.color, e.value.style.chart.plots.gradient.intensity / 100)
            }, null, 8, Lt2),
            createBaseVNode("stop", {
              offset: "90%",
              "stop-color": unref(Vt)(l.color, 0.1)
            }, null, 8, St),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, Pt)
          ], 8, Tt))), 256))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Le.value, (l, r) => (openBlock(), createElementBlock(Fragment, null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(l.plots, (u, $2) => (openBlock(), createBlock($, mergeProps({
            plot: { x: u.x, y: le.value ? u.y : a.value.top },
            radius: v.value && v.value.id === u.id ? M2.value * 1.5 : M2.value,
            shape: e.value.style.chart.plots.shape,
            stroke: e.value.style.chart.plots.stroke,
            strokeWidth: e.value.style.chart.plots.strokeWidth,
            color: e.value.style.chart.plots.gradient.show ? `url(#${l.id})` : l.color,
            onMouseenter: (V) => Se({ datapoint: u, seriesIndex: $2 }),
            onMouseleave: o[0] || (o[0] = (V) => {
              X.value = false, v.value = null;
            }),
            onClick: (V) => we("selectDatapoint", u),
            style: `transition: all 0.2s ease-in-out; opacity:${v.value ? v.value.id === u.id ? 1 : 0.2 : e.value.style.chart.plots.opacity};${N.value ? `transition-delay:${$2 * 50}ms` : ""}`,
            class: { "vue-ui-strip-plot-animated": e.value.useCssAnimation && N.value, "vue-ui-strip-plot-select-circle": e.value.useCssAnimation && !N.value }
          }, t.$attrs), null, 16, ["plot", "radius", "shape", "stroke", "strokeWidth", "color", "onMouseenter", "onClick", "style", "class"]))), 256)),
          d.value.dataLabels.show ? (openBlock(), createElementBlock("g", zt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(l.plots, (u, $2) => (openBlock(), createElementBlock(Fragment, null, [
              $2 === l.plots.length - 1 || v.value && v.value.id === u.id && !d.value.showTooltip ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: u.x,
                y: u.y + e.value.style.chart.labels.bestPlotLabel.offsetY - M2.value * (v.value && v.value.id === u.id && !d.value.showTooltip ? 2 : 1.5),
                "font-size": e.value.style.chart.labels.bestPlotLabel.fontSize,
                fill: e.value.style.chart.labels.bestPlotLabel.color,
                "text-anchor": "middle",
                style: normalizeStyle(`opacity:${e.value.useCssAnimation && N.value ? 0 : 1};transition:opacity 0.2s ease-in;`)
              }, toDisplayString(u.name) + " " + toDisplayString(e.value.style.chart.labels.bestPlotLabel.showValue ? unref(nr)(
                e.value.style.chart.labels.formatter,
                u.value,
                unref(Gt)({
                  p: `(${e.value.style.chart.labels.prefix}`,
                  v: u.value,
                  s: `${e.value.style.chart.labels.suffix})`,
                  r: e.value.style.chart.labels.bestPlotLabel.rounding
                }),
                { datapoint: u, seriesIndex: $2 }
              ) : ""), 13, Nt2)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true)
        ], 64))), 256)),
        renderSlot(t.$slots, "svg", { svg: a.value }, void 0, true)
      ], 14, ct)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", At, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ue) || unref(ie2) })), void 0, true)
      ])) : createCommentVNode("", true),
      _.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
      createVNode(E, {
        show: d.value.showTooltip && X.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: z.value,
        content: j2.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...J.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...J.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      _.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: d.value.showTable,
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
            colNames: E2.value.colNames,
            head: E2.value.head,
            body: E2.value.body,
            config: E2.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[1] || (o[1] = (l) => d.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Ot2)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, vt));
  }
};
var Yt = s(Ft, [["__scopeId", "data-v-85774736"]]);
export {
  Yt as default
};
//# sourceMappingURL=vue-ui-strip-plot-CIb2LSV8-GELCPKOZ.js.map
