import {
  je
} from "./chunk-BWJKPU2G.js";
import "./chunk-PYZKFHQM.js";
import {
  Ue
} from "./chunk-VDRRPMYI.js";
import {
  E,
  Y
} from "./chunk-K5CEUZ2P.js";
import "./chunk-GUAP4JK5.js";
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
  ae
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
import {
  u
} from "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  $t,
  Dt,
  Ft,
  Gt,
  He,
  Ht,
  Je,
  Kt,
  Lt,
  Nt,
  Q,
  R as R2,
  Tt,
  Vt,
  Xt,
  _t,
  br,
  cr,
  dr,
  er,
  ir,
  jt,
  k,
  lr,
  nr,
  pt,
  q,
  qt,
  rt,
  st,
  te,
  tr,
  wt,
  xt,
  yt
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
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
  openBlock,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  vModelCheckbox,
  withCtx,
  withDirectives
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-xy-Drm1aAb-.js
var Xe = Dt();
var qe = {
  name: "vue-ui-xy",
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
  components: {
    DataTable: W,
    Shape: $,
    Title: x,
    Tooltip: E,
    UserOptions: ae,
    BaseIcon: u,
    TableSparkline: je,
    Skeleton: Cs,
    Slicer: Ue,
    Accordion: R,
    PackageVersion: p,
    PenAndPaper: Se
  },
  data() {
    this.dataset.forEach((f, t) => {
      [null, void 0].includes(f.series) && this.error({
        componentName: "VueUiXy",
        type: "datasetSerieAttribute",
        property: "series (number[])",
        index: t
      });
    });
    const i = this.config.downsample && this.config.downsample.threshold ? this.config.downsample.threshold : 500, s2 = Math.max(...this.dataset.map((f) => this.largestTriangleThreeBucketsArray({ data: f.series, threshold: i }).length)), h = {
      start: 0,
      end: s2
    };
    return {
      themePalettes: R2,
      themes: He,
      slicerStep: 0,
      selectedScale: null,
      CTX: null,
      CANVAS: null,
      opacity: q,
      useSafeValues: true,
      palette: rt,
      height: 600,
      width: 1e3,
      viewBox: "0 0 1000 600",
      clientPosition: {
        x: 0,
        y: 0
      },
      canvasClientPosition: {
        x: 0,
        y: 0
      },
      icons: {
        line: "line",
        bar: "bar",
        plot: "plot"
      },
      isAnnotator: false,
      isFullscreen: false,
      isPrinting: false,
      isImaging: false,
      isTooltip: false,
      mutableConfig: {
        dataLabels: {
          show: true
        },
        showTooltip: true,
        showTable: false,
        isStacked: false,
        useIndividualScale: false
      },
      selectedSerieIndex: null,
      selectedRowIndex: null,
      segregatedSeries: [],
      uniqueId: Dt(),
      step: 0,
      tableStep: 0,
      titleStep: 0,
      slicer: h,
      __to__: null,
      maxX: s2,
      showSparklineTable: true,
      segregateStep: 0,
      sliderId: Xe,
      fontSizes: {
        xAxis: 18,
        yAxis: 12,
        dataLabels: 20,
        plotLabels: 10
      },
      plotRadii: {
        plot: 3,
        line: 3
      },
      selectedMinimapIndex: null
    };
  },
  watch: {
    dataset: {
      handler(i, s2) {
        this.maxX = Math.max(...this.dataset.map((h) => this.largestTriangleThreeBucketsArray({
          data: h.series,
          threshold: this.FINAL_CONFIG.downsample.threshold
        }).length)), this.slicer = {
          start: 0,
          end: this.maxX
        }, this.slicerStep += 1, this.segregateStep += 1;
      },
      deep: true
    },
    config: {
      handler(i, s2) {
        this.FINAL_CONFIG = this.prepareConfig(), this.prepareChart(), this.titleStep += 1, this.tableStep += 1;
      },
      deep: true
    }
  },
  computed: {
    hasOptionsNoTitle() {
      return this.FINAL_CONFIG.chart.userOptions.show && (!this.FINAL_CONFIG.chart.title.show || !this.FINAL_CONFIG.chart.title.text);
    },
    minimap() {
      if (!this.FINAL_CONFIG.chart.zoom.minimap.show) return [];
      const i = this.datasetWithIds.filter((t) => !this.segregatedSeries.includes(t.id)), s2 = Math.max(...i.map((t) => t.series.length)), h = [];
      for (let t = 0; t < s2; t += 1)
        h.push(i.map((e) => e.series[t] || 0).reduce((e, x2) => (e || 0) + (x2 || 0), 0));
      const f = Math.min(...h);
      return h.map((t) => t + (f < 0 ? Math.abs(f) : 0));
    },
    customPalette() {
      return this.convertCustomPalette(this.FINAL_CONFIG.customPalette);
    },
    backgroundColor() {
      return this.FINAL_CONFIG.chart.backgroundColor;
    },
    slicerColor() {
      return this.FINAL_CONFIG.chart.zoom.color;
    },
    allScales() {
      const i = this.lineSet.map((t) => ({
        name: t.name,
        color: t.color,
        scale: t.individualScale,
        scaleYLabels: t.scaleYLabels,
        zero: t.zeroPosition,
        max: t.individualMax,
        scaleLabel: t.scaleLabel || "",
        id: t.id,
        yOffset: t.yOffset || 0,
        individualHeight: t.individualHeight || this.drawingArea.height,
        autoScaleYLabels: t.autoScaleYLabels
      })), s2 = this.barSet.map((t) => ({
        name: t.name,
        color: t.color,
        scale: t.individualScale,
        scaleYLabels: t.scaleYLabels,
        zero: t.zeroPosition,
        max: t.individualMax,
        scaleLabel: t.scaleLabel || "",
        id: t.id,
        yOffset: t.yOffset || 0,
        individualHeight: t.individualHeight || this.drawingArea.height
      })), h = this.plotSet.map((t) => ({
        name: t.name,
        color: t.color,
        scale: t.individualScale,
        scaleYLabels: t.scaleYLabels,
        // FIX
        zero: t.zeroPosition,
        max: t.individualMax,
        scaleLabel: t.scaleLabel || "",
        id: t.id,
        yOffset: t.yOffset || 0,
        individualHeight: t.individualHeight || this.drawingArea.height
      })), f = [...i, ...s2, ...h].flatMap((t) => t).length;
      return [...i, ...s2, ...h].flatMap((t, e) => ({
        id: t.id,
        scaleLabel: t.scaleLabel,
        name: t.name,
        color: t.color,
        scale: t.scale,
        yOffset: t.yOffset,
        individualHeight: t.individualHeight,
        x: this.mutableConfig.isStacked ? this.drawingArea.left : this.drawingArea.left / f * (e + 1),
        yLabels: t.scaleYLabels || t.scale.ticks.map((x2) => ({
          y: x2 >= 0 ? t.zero - t.individualHeight * (x2 / t.max) : t.zero + t.individualHeight * Math.abs(x2) / t.max,
          value: x2
        }))
      }));
    },
    isDataset() {
      return !!this.dataset && this.dataset.length;
    },
    chartFont() {
      const i = document.getElementById(`vue-ui-xy_${this.uniqueId}`);
      return window.getComputedStyle(i, null).getPropertyValue("font-family");
    },
    FINAL_CONFIG: {
      get: function() {
        return this.prepareConfig();
      },
      set: function(i) {
        return i;
      }
    },
    hasHighlightArea() {
      return Array.isArray(this.FINAL_CONFIG.chart.highlightArea) ? this.FINAL_CONFIG.chart.highlightArea.some((i) => i.show) : this.FINAL_CONFIG.chart.highlightArea && this.FINAL_CONFIG.chart.highlightArea.show;
    },
    highlightAreas() {
      if (Array.isArray(this.FINAL_CONFIG.chart.highlightArea))
        return this.FINAL_CONFIG.chart.highlightArea.map((s2) => ({
          ...s2,
          span: s2.from === s2.to ? 1 : s2.to < s2.from ? 0 : s2.to - s2.from + 1
        }));
      const i = this.FINAL_CONFIG.chart.highlightArea;
      return [{ ...i, span: i.from === i.to ? 1 : i.to < i.from ? 0 : i.to - i.from + 1 }];
    },
    xPadding() {
      return this.FINAL_CONFIG.chart.grid.position === "middle" ? 0 : this.drawingArea.width / this.maxSeries / 2;
    },
    relativeZero() {
      return this.niceScale.min >= 0 ? 0 : Math.abs(this.niceScale.min);
    },
    absoluteMax() {
      return this.niceScale.max + this.relativeZero;
    },
    datasetWithIds() {
      return this.useSafeValues ? this.dataset.map((i, s2) => ({
        ...i,
        series: this.largestTriangleThreeBucketsArray({
          data: i.series,
          threshold: this.FINAL_CONFIG.downsample.threshold
        }),
        id: `uniqueId_${s2}`
      })) : this.dataset;
    },
    safeDataset() {
      return this.useSafeValues ? this.dataset.map((i, s2) => {
        const h = this.largestTriangleThreeBucketsArray({
          data: i.series,
          threshold: this.FINAL_CONFIG.downsample.threshold
        });
        return {
          ...i,
          series: h.map((f) => this.isSafeValue(f) ? f : null).slice(this.slicer.start, this.slicer.end),
          color: this.convertColorToHex(i.color ? i.color : this.customPalette[s2] ? this.customPalette[s2] : this.palette[s2]),
          id: `uniqueId_${s2}`
        };
      }) : this.dataset;
    },
    relativeDataset() {
      return this.safeDataset.map((i, s2) => ({
        ...i,
        series: i.series.map((h) => h + this.relativeZero),
        absoluteValues: i.series
      })).filter((i) => !this.segregatedSeries.includes(i.id));
    },
    tableSparklineDataset() {
      return this.relativeDataset.map((i) => {
        const s2 = i.absoluteValues.map((h) => [void 0, null].includes(h) ? 0 : h);
        return {
          id: i.id,
          name: i.name,
          color: i.color,
          values: this.fillArray(this.maxSeries, s2)
        };
      });
    },
    tableSparklineConfig() {
      return {
        responsiveBreakpoint: this.FINAL_CONFIG.table.responsiveBreakpoint,
        roundingValues: this.FINAL_CONFIG.table.rounding,
        showAverage: false,
        showMedian: false,
        showTotal: false,
        fontFamily: this.FINAL_CONFIG.chart.fontFamily,
        prefix: this.FINAL_CONFIG.chart.labels.prefix,
        suffix: this.FINAL_CONFIG.chart.labels.suffix,
        colNames: JSON.parse(JSON.stringify(this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values)),
        thead: {
          backgroundColor: this.FINAL_CONFIG.table.th.backgroundColor,
          color: this.FINAL_CONFIG.table.th.color,
          outline: this.FINAL_CONFIG.table.th.outline
        },
        tbody: {
          backgroundColor: this.FINAL_CONFIG.table.td.backgroundColor,
          color: this.FINAL_CONFIG.table.td.color,
          outline: this.FINAL_CONFIG.table.td.outline
        },
        userOptions: {
          show: false
        }
      };
    },
    absoluteDataset() {
      return this.safeDataset.map((i, s2) => ({
        absoluteIndex: s2,
        ...i,
        series: i.series.map((h) => h + this.relativeZero),
        absoluteValues: i.series,
        segregate: () => this.segregate(i),
        isSegregated: this.segregatedSeries.includes(i.id)
      }));
    },
    barSet() {
      return this.activeSeriesWithStackRatios.filter((i) => i.type === "bar").map((i, s2) => {
        this.checkAutoScaleError(i);
        const h = Math.min(...i.absoluteValues.filter((u2) => ![null, void 0].includes(u2))), f = Math.max(...i.absoluteValues.filter((u2) => ![null, void 0].includes(u2))), e = {
          ratios: i.absoluteValues.filter((u2) => ![null, void 0].includes(u2)).map((u2) => (u2 - h) / (f - h)),
          valueMin: h,
          valueMax: f < 0 ? 0 : f
        }, x2 = {
          max: i.scaleMax || Math.max(...i.absoluteValues) || 1,
          min: i.scaleMin || Math.min(...i.absoluteValues.filter((u2) => ![void 0, null].includes(u2))) > 0 ? 0 : Math.min(...i.absoluteValues.filter((u2) => ![null, void 0].includes(u2)))
        }, y = i.scaleSteps || this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps, k2 = 1.0000001, m = this.calculateNiceScaleWithExactExtremes(x2.min, x2.max === x2.min ? x2.max * k2 : x2.max, y), b = this.calculateNiceScaleWithExactExtremes(e.valueMin, e.valueMax === e.valueMin ? e.valueMax * k2 : e.valueMax, y), T = m.min >= 0 ? 0 : Math.abs(m.min), v = 0, p2 = m.max + T, w = b.max + Math.abs(v), _ = this.mutableConfig.isStacked ? this.drawingArea.height * (1 - i.cumulatedStackRatio) : 0, L = this.mutableConfig.isStacked ? this.drawingArea.height * i.stackRatio - this.FINAL_CONFIG.chart.grid.labels.yAxis.gap : this.drawingArea.height, M = this.drawingArea.bottom - _ - L * T / p2, a = this.drawingArea.bottom - _ - L * v / w, o = this.absoluteDataset.filter((u2) => u2.type === "bar").filter((u2) => !this.segregatedSeries.includes(u2.id)).length, n = i.series.map((u2, F) => {
          const E2 = this.mutableConfig.useIndividualScale ? (i.absoluteValues[F] + T) / p2 : this.ratioToMax(u2), Y2 = this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? this.drawingArea.left + this.drawingArea.width / this.maxSeries * F : this.drawingArea.left + this.slot.bar * s2 + this.slot.bar * F * o - this.barSlot / 2 - s2 * this.barPeriodGap;
          return {
            yOffset: this.checkNaN(_),
            individualHeight: this.checkNaN(L),
            x: this.checkNaN(Y2),
            y: this.drawingArea.bottom - _ - L * E2,
            value: i.absoluteValues[F],
            zeroPosition: this.checkNaN(M),
            individualMax: this.checkNaN(p2),
            comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[F] || ""
          };
        }), d = i.absoluteValues.map((u2) => b.min >= 0 ? (u2 - Math.abs(b.min)) / (b.max - Math.abs(b.min)) : (u2 + Math.abs(b.min)) / (b.max + Math.abs(b.min))), B = i.series.map((u2, F) => {
          const E2 = this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? this.drawingArea.left + this.drawingArea.width / this.maxSeries * F : this.drawingArea.left - this.slot.bar / 2 + this.slot.bar * s2 + this.slot.bar * F * this.absoluteDataset.filter((Y2) => Y2.type === "bar").filter((Y2) => !this.segregatedSeries.includes(Y2.id)).length;
          return {
            yOffset: this.checkNaN(_),
            individualHeight: this.checkNaN(L),
            x: this.checkNaN(E2),
            y: this.checkNaN(this.drawingArea.bottom - this.checkNaN(_) - (this.checkNaN(L) * d[F] || 0)),
            value: i.absoluteValues[F],
            zeroPosition: this.checkNaN(M),
            individualMax: this.checkNaN(p2),
            comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[F] || ""
          };
        }), A = m.ticks.map((u2) => ({
          y: u2 >= 0 ? M - L * (u2 / p2) : M + L * Math.abs(u2) / p2,
          value: u2,
          prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
          suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix,
          datapoint: i
        })), G = b.ticks.map((u2) => {
          const F = (u2 - b.min) / (b.max - b.min);
          return {
            y: u2 >= 0 ? a - L * F : a + L * F,
            value: u2,
            prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
            suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix,
            datapoint: i
          };
        });
        return {
          ...i,
          yOffset: _,
          autoScaleYLabels: G,
          individualHeight: L,
          scaleYLabels: i.autoScaling ? G : A,
          individualScale: i.autoScaling ? b : m,
          individualMax: i.autoScaling ? w : p2,
          zeroPosition: i.autoScaling ? a : M,
          plots: i.autoScaling ? B : n
        };
      });
    },
    activeSeriesLength() {
      return this.absoluteDataset.length;
    },
    activeSeriesWithStackRatios() {
      return this.assignStackRatios(this.absoluteDataset.filter((i) => !this.segregatedSeries.includes(i.id)));
    },
    lineSet() {
      return this.activeSeriesWithStackRatios.filter((i) => i.type === "line").map((i) => {
        this.checkAutoScaleError(i);
        const s2 = Math.min(...i.absoluteValues.filter((u2) => ![void 0, null].includes(u2))), h = Math.max(...i.absoluteValues.filter((u2) => ![void 0, null].includes(u2))) || 1, t = {
          ratios: i.absoluteValues.filter((u2) => ![null, void 0].includes(u2)).map((u2) => (u2 - s2) / (h - s2)),
          valueMin: s2,
          valueMax: h
        }, e = {
          max: i.scaleMax || Math.max(...i.absoluteValues) || 1,
          min: i.scaleMin || (Math.min(...i.absoluteValues) > 0 ? 0 : Math.min(...i.absoluteValues))
        }, x2 = i.scaleSteps || this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps, y = 1.0000001, k2 = this.calculateNiceScaleWithExactExtremes(e.min, e.max === e.min ? e.max * y : e.max, x2), m = this.calculateNiceScaleWithExactExtremes(t.valueMin, t.valueMax === t.valueMin ? t.valueMax * y : t.valueMax, x2), b = k2.min >= 0 ? 0 : Math.abs(k2.min), T = 0, v = k2.max + Math.abs(b), p2 = m.max + Math.abs(T), w = this.mutableConfig.isStacked ? this.drawingArea.height * (1 - i.cumulatedStackRatio) : 0, _ = this.mutableConfig.isStacked ? this.drawingArea.height * i.stackRatio - this.FINAL_CONFIG.chart.grid.labels.yAxis.gap : this.drawingArea.height, L = this.drawingArea.bottom - w - _ * b / v, M = this.drawingArea.bottom - w - _ * T / p2, a = i.series.map((u2, F) => {
          const E2 = this.mutableConfig.useIndividualScale ? (i.absoluteValues[F] + Math.abs(b)) / v : this.ratioToMax(u2);
          return {
            x: this.checkNaN(this.drawingArea.left + this.slot.line / 2 + this.slot.line * F),
            y: this.checkNaN(this.drawingArea.bottom - w - _ * E2),
            value: i.absoluteValues[F],
            comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[F] || ""
          };
        }), o = i.absoluteValues.map((u2) => m.min >= 0 ? (u2 - Math.abs(m.min)) / (m.max - Math.abs(m.min)) : (u2 + Math.abs(m.min)) / (m.max + Math.abs(m.min))), n = i.series.map((u2, F) => [void 0, null].includes(i.absoluteValues[F]) ? {
          x: this.checkNaN(this.drawingArea.left + this.slot.line / 2 + this.slot.line * F),
          y: L,
          value: i.absoluteValues[F],
          comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[F] || ""
        } : {
          x: this.checkNaN(this.drawingArea.left + this.slot.line / 2 + this.slot.line * F),
          y: this.checkNaN(this.drawingArea.bottom - w - (_ * o[F] || 0)),
          value: i.absoluteValues[F],
          comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[F] || ""
        }), d = this.createSmoothPath(a), B = this.createSmoothPath(n), A = k2.ticks.map((u2) => ({
          y: u2 >= 0 ? L - _ * (u2 / v) : L + _ * Math.abs(u2) / v,
          value: u2,
          prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
          suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix,
          datapoint: i
        })), G = m.ticks.map((u2) => {
          const F = (u2 - m.min) / (m.max - m.min);
          return {
            y: u2 >= 0 ? M - _ * F : M + _ * F,
            value: u2,
            prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
            suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix,
            datapoint: i
          };
        });
        return {
          ...i,
          yOffset: w,
          autoScaleYLabels: G,
          individualHeight: _,
          scaleYLabels: i.autoScaling ? G : A,
          individualScale: i.autoScaling ? m : k2,
          individualMax: i.autoScaling ? p2 : v,
          zeroPosition: i.autoScaling ? M : L,
          curve: i.autoScaling ? B : d,
          plots: i.autoScaling ? n : a,
          area: i.useArea ? this.mutableConfig.useIndividualScale ? this.createIndividualArea(i.autoScaling ? n : a, i.autoScaling ? M : L) : this.createArea(a) : ""
        };
      });
    },
    plotSet() {
      return this.activeSeriesWithStackRatios.filter((i) => i.type === "plot").map((i) => {
        this.checkAutoScaleError(i);
        const s2 = Math.min(...i.absoluteValues.filter((A) => ![null, void 0].includes(A))), h = Math.max(...i.absoluteValues.filter((A) => ![null, void 0].includes(A))) || 1, t = {
          ratios: i.absoluteValues.filter((A) => ![null, void 0].includes(A)).map((A) => (A - s2) / (h - s2)),
          valueMin: s2,
          valueMax: h
        }, e = {
          max: i.scaleMax || Math.max(...i.absoluteValues) || 1,
          min: i.scaleMin || Math.min(...i.absoluteValues) > 0 ? 0 : Math.min(...i.absoluteValues)
        }, x2 = i.scaleSteps || this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps, y = 1.0000001, k2 = this.calculateNiceScaleWithExactExtremes(e.min, e.max === e.min ? e.max * y : e.max, x2), m = this.calculateNiceScaleWithExactExtremes(t.valueMin, t.valueMax === t.valueMin ? t.valueMax * y : t.valueMax, x2), b = k2.min >= 0 ? 0 : Math.abs(k2.min), T = 0, v = k2.max + b, p2 = m.max + Math.abs(T), w = this.mutableConfig.isStacked ? this.drawingArea.height * (1 - i.cumulatedStackRatio) : 0, _ = this.mutableConfig.isStacked ? this.drawingArea.height * i.stackRatio - this.FINAL_CONFIG.chart.grid.labels.yAxis.gap : this.drawingArea.height, L = this.drawingArea.bottom - w - _ * b / v, M = this.drawingArea.bottom - w - _ * T / p2, a = i.series.map((A, G) => {
          const u2 = this.mutableConfig.useIndividualScale ? (i.absoluteValues[G] + Math.abs(b)) / v : this.ratioToMax(A);
          return {
            x: this.checkNaN(this.drawingArea.left + this.slot.plot / 2 + this.slot.plot * G),
            y: this.checkNaN(this.drawingArea.bottom - w - _ * u2),
            value: i.absoluteValues[G],
            comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[G] || ""
          };
        }), o = i.absoluteValues.map((A) => m.min >= 0 ? (A - Math.abs(m.min)) / (m.max - Math.abs(m.min)) : (A + Math.abs(m.min)) / (m.max + Math.abs(m.min))), n = i.series.map((A, G) => ({
          x: this.checkNaN(this.drawingArea.left + this.slot.plot / 2 + this.slot.plot * G),
          y: this.checkNaN(this.drawingArea.bottom - w - (_ * o[G] || 0)),
          value: i.absoluteValues[G],
          comment: i.comments && i.comments.slice(this.slicer.start, this.slicer.end)[G] || ""
        })), d = k2.ticks.map((A) => ({
          y: A >= 0 ? L - _ * (A / v) : L + _ * Math.abs(A) / v,
          value: A,
          prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
          suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix,
          datapoint: i
        })), B = m.ticks.map((A) => {
          const G = (A - m.min) / (m.max - m.min);
          return {
            y: A >= 0 ? M - _ * G : M + _ * G,
            value: A,
            prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
            suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix,
            datapoint: i
          };
        });
        return {
          ...i,
          yOffset: w,
          autoScaleYLabels: B,
          individualHeight: _,
          scaleYLabels: i.autoScaling ? B : d,
          individualScale: i.autoScaling ? m : k2,
          individualMax: i.autoScaling ? p2 : v,
          zeroPosition: i.autoScaling ? M : L,
          plots: i.autoScaling ? n : a
        };
      });
    },
    drawingArea() {
      const i = this.mutableConfig.useIndividualScale && this.FINAL_CONFIG.chart.grid.labels.show ? this.absoluteDataset.filter((s2) => !this.segregatedSeries.includes(s2.id)).length * (this.mutableConfig.isStacked ? 0 : this.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth) : 0;
      return {
        top: this.FINAL_CONFIG.chart.padding.top,
        right: this.width - this.FINAL_CONFIG.chart.padding.right,
        bottom: this.height - this.FINAL_CONFIG.chart.padding.bottom,
        left: this.FINAL_CONFIG.chart.padding.left + i,
        height: this.height - (this.FINAL_CONFIG.chart.padding.top + this.FINAL_CONFIG.chart.padding.bottom),
        width: this.width - (this.FINAL_CONFIG.chart.padding.right + this.FINAL_CONFIG.chart.padding.left + i)
      };
    },
    max() {
      return this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMax ? this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMax : Math.max(...this.safeDataset.filter((i) => !this.segregatedSeries.includes(i.id)).map((i) => Math.max(...i.series)));
    },
    min() {
      if (this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMin !== null)
        return this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMin;
      const i = Math.min(...this.safeDataset.filter((s2) => !this.segregatedSeries.includes(s2.id)).map((s2) => Math.min(...s2.series)));
      return i > 0 ? 0 : i;
    },
    niceScale() {
      return this.calculateNiceScaleWithExactExtremes(this.min, this.max < 0 ? 0 : this.max, this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps);
    },
    maxSeries() {
      return this.slicer.end - this.slicer.start;
    },
    timeLabels() {
      return this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values.slice(this.slicer.start, this.slicer.end);
    },
    slot() {
      return {
        bar: this.drawingArea.width / this.maxSeries / this.safeDataset.filter((i) => i.type === "bar").filter((i) => !this.segregatedSeries.includes(i.id)).length,
        plot: this.drawingArea.width / this.maxSeries,
        line: this.drawingArea.width / this.maxSeries
      };
    },
    barSlot() {
      const i = this.safeDataset.filter((s2) => s2.type === "bar").filter((s2) => !this.segregatedSeries.includes(s2.id)).length;
      return this.drawingArea.width / this.maxSeries / i - this.barPeriodGap * i;
    },
    barPeriodGap() {
      return this.slot.line * this.FINAL_CONFIG.bar.periodGap;
    },
    maxSlot() {
      return Math.max(...Object.values(this.slot).filter((i) => i !== 1 / 0));
    },
    table() {
      if (this.safeDataset.length === 0) return { head: [], body: [], config: {}, columnNames: [] };
      const i = this.relativeDataset.map((h) => ({
        label: h.name,
        color: h.color,
        type: h.type
      })), s2 = [];
      return this.timeLabels.forEach((h, f) => {
        const t = [h];
        this.relativeDataset.forEach((e) => {
          t.push(this.canShowValue(e.absoluteValues[f]) ? Number(e.absoluteValues[f].toFixed(this.FINAL_CONFIG.table.rounding)) : "");
        }), s2.push(t);
      }), { head: i, body: s2 };
    },
    dataTable() {
      const i = this.FINAL_CONFIG.table.showSum;
      let s2 = [""].concat(this.relativeDataset.map((e) => e.name));
      i && (s2 = s2.concat(' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>'));
      let h = [];
      for (let e = 0; e < this.maxSeries; e += 1) {
        const x2 = this.relativeDataset.map((y) => y.absoluteValues[e] ?? 0).reduce((y, k2) => y + k2, 0);
        h.push(
          [
            this.timeLabels[e] ?? "-"
          ].concat(this.relativeDataset.map(
            (y) => this.applyDataLabel(
              y.type === "line" ? this.FINAL_CONFIG.line.labels.formatter : y.type === "bar" ? this.FINAL_CONFIG.bar.labels.formatter : this.FINAL_CONFIG.plot.labels.formatter,
              y.absoluteValues[e] ?? 0,
              this.dataLabel({
                p: y.prefix || this.FINAL_CONFIG.chart.labels.prefix,
                v: y.absoluteValues[e] ?? 0,
                s: y.suffix || this.FINAL_CONFIG.chart.labels.suffix,
                r: this.FINAL_CONFIG.table.rounding
              })
            )
          )).concat(i ? (x2 ?? 0).toFixed(this.FINAL_CONFIG.table.rounding) : [])
        );
      }
      const f = {
        th: {
          backgroundColor: this.FINAL_CONFIG.table.th.backgroundColor,
          color: this.FINAL_CONFIG.table.th.color,
          outline: this.FINAL_CONFIG.table.th.outline
        },
        td: {
          backgroundColor: this.FINAL_CONFIG.table.td.backgroundColor,
          color: this.FINAL_CONFIG.table.td.color,
          outline: this.FINAL_CONFIG.table.td.outline
        },
        breakpoint: this.FINAL_CONFIG.table.responsiveBreakpoint
      }, t = [this.FINAL_CONFIG.table.columnNames.period].concat(this.relativeDataset.map((e) => e.name)).concat(this.FINAL_CONFIG.table.columnNames.total);
      return { head: s2, body: h, config: f, colNames: t };
    },
    dataTooltipSlot() {
      return {
        datapoint: this.selectedSeries,
        seriesIndex: this.selectedSerieIndex,
        series: this.absoluteDataset,
        bars: this.barSet,
        lines: this.lineSet,
        plots: this.plotSet,
        config: this.FINAL_CONFIG
      };
    },
    selectedSeries() {
      return this.relativeDataset.map((i) => ({
        shape: i.shape || null,
        name: i.name,
        color: i.color,
        type: i.type,
        value: i.absoluteValues.find((s2, h) => h === this.selectedSerieIndex),
        comments: i.comments || [],
        prefix: i.prefix || this.FINAL_CONFIG.chart.labels.prefix,
        suffix: i.suffix || this.FINAL_CONFIG.chart.labels.suffix
      }));
    },
    tooltipContent() {
      let i = "", s2 = this.selectedSeries.map((t) => t.value).filter((t) => this.isSafeValue(t) && t !== null).reduce((t, e) => Math.abs(t) + Math.abs(e), 0);
      const h = this.timeLabels[this.selectedSerieIndex], f = this.FINAL_CONFIG.chart.tooltip.customFormat;
      return this.isFunction(f) && this.functionReturnsString(() => f({
        seriesIndex: this.selectedSerieIndex,
        datapoint: this.selectedSeries,
        series: this.absoluteDataset,
        bars: this.barSet,
        lines: this.lineSet,
        plots: this.plotSet,
        config: this.FINAL_CONFIG
      })) ? f({
        seriesIndex: this.selectedSerieIndex,
        datapoint: this.selectedSeries,
        series: this.absoluteDataset,
        bars: this.barSet,
        lines: this.lineSet,
        plots: this.plotSet,
        config: this.FINAL_CONFIG
      }) : (h && (i += `<div style="padding-bottom: 6px; margin-bottom: 4px; border-bottom: 1px solid ${this.FINAL_CONFIG.chart.tooltip.borderColor}; width:100%">${h}</div>`), this.selectedSeries.forEach((t) => {
        if (this.isSafeValue(t.value)) {
          let e = "", x2 = "";
          switch (this.icons[t.type]) {
            case "bar":
              e = `<svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" rx="1" stroke="none" height="12" width="12" fill="${t.color}" /></svg>`;
              break;
            case "line":
              !t.shape || !["star", "triangle", "square", "diamond", "pentagon", "hexagon"].includes(t.shape) ? x2 = `<circle cx="10" cy="8" r="4" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${t.color}" />` : t.shape === "triangle" ? x2 = `<path d="${Ft({ plot: { x: 10, y: 8 }, radius: 4, sides: 3, rotation: 0.52 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : t.shape === "square" ? x2 = `<path d="${Ft({ plot: { x: 10, y: 8 }, radius: 4, sides: 4, rotation: 0.8 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : t.shape === "diamond" ? x2 = `<path d="${Ft({ plot: { x: 10, y: 8 }, radius: 4, sides: 4, rotation: 0 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : t.shape === "pentagon" ? x2 = `<path d="${Ft({ plot: { x: 10, y: 8 }, radius: 4, sides: 5, rotation: 0.95 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : t.shape === "hexagon" ? x2 = `<path d="${Ft({ plot: { x: 10, y: 8 }, radius: 4, sides: 6, rotation: 0 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : t.shape === "star" && (x2 = `<polygon stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${t.color}" points="${xt({ plot: { x: 10, y: 8 }, radius: 4 })}" />`), e = `<svg viewBox="0 0 20 12" height="14" width="20"><rect rx="3" x="0" y="6" stroke="none" height="4" width="20" fill="${t.color}" />${x2}</svg>`;
              break;
            case "plot":
              if (!t.shape || !["star", "triangle", "square", "diamond", "pentagon", "hexagon"].includes(t.shape)) {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${t.color}" /></svg>`;
                break;
              }
              if (t.shape === "star") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><polygon stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${t.color}" points="${xt({ plot: { x: 6, y: 6 }, radius: 5 })}" /></svg>`;
                break;
              }
              if (t.shape === "triangle") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${Ft({ plot: { x: 6, y: 6 }, radius: 6, sides: 3, rotation: 0.52 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (t.shape === "square") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${Ft({ plot: { x: 6, y: 6 }, radius: 6, sides: 4, rotation: 0.8 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (t.shape === "diamond") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${Ft({ plot: { x: 6, y: 6 }, radius: 5, sides: 4, rotation: 0 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (t.shape === "pentagon") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${Ft({ plot: { x: 6, y: 6 }, radius: 5, sides: 5, rotation: 0.95 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (t.shape === "hexagon") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${Ft({ plot: { x: 6, y: 6 }, radius: 5, sides: 6, rotation: 0 }).path}" fill="${t.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
          }
          i += `<div style="display:flex;flex-direction:row; align-items:center;gap:3px;"><div style="width:20px">${e}</div> ${t.name}: <b>${this.FINAL_CONFIG.chart.tooltip.showValue ? this.applyDataLabel(
            t.type === "line" ? this.FINAL_CONFIG.line.labels.formatter : t.type === "bar" ? this.FINAL_CONFIG.bar.labels.formatter : this.FINAL_CONFIG.plot.labels.formatter,
            t.value,
            this.dataLabel({
              p: t.prefix,
              v: t.value,
              s: t.suffix,
              r: this.FINAL_CONFIG.chart.tooltip.roundingValue
            }),
            { datapoint: t }
          ) : ""}</b> ${this.FINAL_CONFIG.chart.tooltip.showPercentage ? `(${Ht({
            v: this.checkNaN(Math.abs(t.value) / s2 * 100),
            s: "%",
            r: this.FINAL_CONFIG.chart.tooltip.roundingPercentage
          })})` : ""}</div>`, this.FINAL_CONFIG.chart.comments.showInTooltip && t.comments.length && t.comments.slice(this.slicer.start, this.slicer.end)[this.selectedSerieIndex] && (i += `<div class="vue-data-ui-tooltip-comment" style="background:${t.color}20; padding: 6px; margin-bottom: 6px; border-left: 1px solid ${t.color}">${t.comments.slice(this.slicer.start, this.slicer.end)[this.selectedSerieIndex]}</div>`);
        }
      }), `<div style="border-radius:4px;padding:12px;font-variant-numeric: tabular-nums;color:${this.FINAL_CONFIG.chart.tooltip.color}">${i}</div>`);
    },
    svg() {
      return {
        height: this.height,
        width: this.width
      };
    },
    yLabels() {
      return this.niceScale.ticks.map((i) => ({
        y: i >= 0 ? this.zero - this.drawingArea.height * this.ratioToMax(i) : this.zero + this.drawingArea.height * this.ratioToMax(Math.abs(i)),
        value: i,
        prefix: this.FINAL_CONFIG.chart.labels.prefix,
        suffix: this.FINAL_CONFIG.chart.labels.suffix
      }));
    },
    zero() {
      return this.drawingArea.bottom - this.drawingArea.height * this.ratioToMax(this.relativeZero);
    }
  },
  mounted() {
    this.prepareChart(), document.addEventListener("mousemove", (i) => {
      this.clientPosition = {
        x: i.clientX,
        y: i.clientY
      };
    });
  },
  methods: {
    abbreviate: $t,
    adaptColorToBackground: _t,
    applyDataLabel: ir,
    assignStackRatios: lr,
    calcLinearProgression: wt,
    calculateNiceScaleWithExactExtremes: Gt,
    checkNaN: k,
    closestDecimal: Tt,
    convertColorToHex: Q,
    convertConfigColors: st,
    convertCustomPalette: tr,
    createCsvContent: Vt,
    createSmoothPath: Lt,
    createTSpans: er,
    dataLabel: Ht,
    downloadCsv: Nt,
    error: qt,
    functionReturnsString: Kt,
    hasDeepProperty: cr,
    isFunction: Xt,
    isSafeValue: pt,
    largestTriangleThreeBucketsArray: br,
    objectIsEmpty: jt,
    setOpacity: dr,
    shiftHue: yt,
    translateSize: nr,
    treeShake: Je,
    useMouse: Y,
    useNestedProp: c,
    toggleAnnotator() {
      this.isAnnotator = !this.isAnnotator;
    },
    getHighlightAreaPosition(i) {
      const s2 = this.drawingArea.left + this.drawingArea.width / this.maxSeries * (i.from - this.slicer.start), h = this.drawingArea.width / (this.slicer.end - this.slicer.start) * i.span < 0 ? 1e-5 : this.drawingArea.width / (this.slicer.end - this.slicer.start) * i.span;
      return {
        x: s2 < this.drawingArea.left ? this.drawingArea.left : s2,
        width: h
      };
    },
    prepareConfig() {
      const i = te().vue_ui_xy;
      if (!Object.keys(this.config || {}).length)
        return i;
      const s2 = this.useNestedProp({
        userConfig: this.config,
        defaultConfig: i
      });
      return this.config && this.hasDeepProperty(this.config, "chart.highlightArea") && (Array.isArray(this.config.chart.highlightArea) ? s2.chart.highlightArea = this.config.chart.highlightArea : s2.chart.highlightArea = [this.config.chart.highlightArea]), this.config && this.hasDeepProperty(this.config, "chart.grid.labels.yAxis.scaleMin") ? s2.chart.grid.labels.yAxis.scaleMin = this.config.chart.grid.labels.yAxis.scaleMin : s2.chart.grid.labels.yAxis.scaleMin = null, this.config && this.hasDeepProperty(this.config, "chart.grid.labels.yAxis.scaleMax") ? s2.chart.grid.labels.yAxis.scaleMax = this.config.chart.grid.labels.yAxis.scaleMax : s2.chart.grid.labels.yAxis.scaleMax = null, s2.theme ? {
        ...c({
          userConfig: this.themes.vue_ui_xy[s2.theme] || this.config,
          defaultConfig: s2
        }),
        customPalette: this.themePalettes[s2.theme] || this.palette
      } : s2;
    },
    prepareChart() {
      if (this.objectIsEmpty(this.dataset) ? this.error({
        componentName: "VueUiXy",
        type: "dataset"
      }) : this.dataset.forEach((i, s2) => {
        [null, void 0].includes(i.name) && this.error({
          componentName: "VueUiXy",
          type: "datasetSerieAttribute",
          property: "name (string)",
          index: s2
        });
      }), this.FINAL_CONFIG.showWarnings && this.dataset.forEach((i) => {
        i.series.forEach((s2, h) => {
          this.isSafeValue(s2) || console.warn(`VueUiXy has detected an unsafe value in your dataset:
-----> The serie '${i.name}' contains the value '${s2}' at index ${h}.
'${s2}' was converted to null to allow the chart to display.`);
        });
      }), this.mutableConfig = {
        dataLabels: {
          show: true
        },
        showTooltip: this.FINAL_CONFIG.chart.tooltip.show === true,
        showTable: this.FINAL_CONFIG.showTable === true,
        isStacked: this.FINAL_CONFIG.chart.grid.labels.yAxis.stacked,
        useIndividualScale: this.FINAL_CONFIG.chart.grid.labels.yAxis.useIndividualScale
      }, this.FINAL_CONFIG.responsive) {
        const s2 = this.$refs.chart.parentNode, { height: h, width: f } = s2.getBoundingClientRect();
        let t = null, e = 0;
        this.FINAL_CONFIG.chart.title.show && (t = this.$refs.chartTitle, e = t.getBoundingClientRect().height);
        let x2 = null, y = 0;
        this.FINAL_CONFIG.chart.zoom.show && this.maxX > 6 && this.isDataset && (x2 = this.$refs.chartSlicer.$el, y = x2.getBoundingClientRect().height);
        let k2 = null, m = 0;
        this.FINAL_CONFIG.chart.legend.show && (k2 = this.$refs.chartLegend, m = k2.getBoundingClientRect().height);
        let b = 0;
        this.$refs.source && (b = this.$refs.source.getBoundingClientRect().height);
        let T = 0;
        this.$refs.noTitle && (T = this.$refs.source.getBoundingClientRect().height), this.height = h - e - m - y - b - T, this.width = f, this.viewBox = `0 0 ${this.width < 0 ? 10 : this.width} ${this.height < 0 ? 10 : this.height}`, this.convertSizes(), new ResizeObserver((p2) => {
          for (const w of p2)
            this.$refs.chartTitle && (e = this.$refs.chartTitle.getBoundingClientRect().height), this.$refs.chartSlicer && this.$refs.chartSlicer.$el && (y = this.$refs.chartSlicer.$el.getBoundingClientRect().height), this.$refs.chartLegend && (m = this.$refs.chartLegend.getBoundingClientRect().height), this.$refs.source && (b = this.$refs.source.getBoundingClientRect().height), this.height = w.contentBoxSize[0].blockSize - e - m - y - b - 24, this.width = w.contentBoxSize[0].inlineSize, this.viewBox = `0 0 ${this.width < 0 ? 10 : this.width} ${this.height < 0 ? 10 : this.height}`, this.convertSizes();
        }).observe(s2);
      } else
        this.height = this.FINAL_CONFIG.chart.height, this.width = this.FINAL_CONFIG.chart.width, this.viewBox = `0 0 ${this.width} ${this.height}`, this.fontSizes.dataLabels = this.FINAL_CONFIG.chart.grid.labels.fontSize, this.fontSizes.yAxis = this.FINAL_CONFIG.chart.grid.labels.axis.fontSize, this.fontSizes.xAxis = this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.fontSize, this.fontSizes.plotLabels = this.FINAL_CONFIG.chart.labels.fontSize, this.plotRadii.plot = this.FINAL_CONFIG.plot.radius, this.plotRadii.line = this.FINAL_CONFIG.line.radius;
    },
    selectMinimapIndex(i) {
      this.selectedMinimapIndex = i;
    },
    convertSizes() {
      this.fontSizes.dataLabels = this.translateSize({
        relator: this.height,
        adjuster: 400,
        source: this.FINAL_CONFIG.chart.grid.labels.fontSize,
        threshold: 10,
        fallback: 10
      }), this.fontSizes.yAxis = this.translateSize({
        relator: this.width,
        adjuster: 1e3,
        source: this.FINAL_CONFIG.chart.grid.labels.axis.fontSize,
        threshold: 10,
        fallback: 10
      }), this.fontSizes.xAxis = this.translateSize({
        relator: this.width,
        adjuster: 1e3,
        source: this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.fontSize,
        threshold: 10,
        fallback: 10
      }), this.fontSizes.plotLabels = this.translateSize({
        relator: this.width,
        adjuster: 800,
        source: this.FINAL_CONFIG.chart.labels.fontSize,
        threshold: 10,
        fallback: 10
      }), this.plotRadii.plot = this.translateSize({
        relator: this.width,
        adjuster: 800,
        source: this.FINAL_CONFIG.plot.radius,
        threshold: 1,
        fallback: 1
      }), this.plotRadii.line = this.translateSize({
        relator: this.width,
        adjuster: 800,
        source: this.FINAL_CONFIG.line.radius,
        threshold: 1,
        fallback: 1
      });
    },
    toggleStack() {
      this.mutableConfig.isStacked = !this.mutableConfig.isStacked, this.mutableConfig.isStacked ? this.mutableConfig.useIndividualScale = true : this.mutableConfig.useIndividualScale = this.FINAL_CONFIG.chart.grid.labels.yAxis.useIndividualScale;
    },
    toggleTable() {
      this.mutableConfig.showTable = !this.mutableConfig.showTable;
    },
    toggleLabels() {
      this.mutableConfig.dataLabels.show = !this.mutableConfig.dataLabels.show;
    },
    toggleTooltip() {
      this.mutableConfig.showTooltip = !this.mutableConfig.showTooltip;
    },
    checkAutoScaleError(i) {
      i.autoScaling && (this.FINAL_CONFIG.chart.grid.labels.yAxis.useIndividualScale || console.warn(`VueUiXy (datapoint: ${i.name}) : autoScaling only works when config.chart.grid.labels.yAxis.useIndividualScale is set to true`), this.FINAL_CONFIG.chart.grid.labels.yAxis.stacked || console.warn(`VueUiXy (datapoint: ${i.name}) : autoScaling only works when config.chart.grid.labels.yAxis.stacked is set to true`));
    },
    createArea(i) {
      if (!i[0]) return [-10, -10, "", -10, -10];
      const s2 = { x: i[0].x, y: this.zero }, h = { x: i.at(-1).x, y: this.zero }, f = [];
      return i.forEach((t) => {
        f.push(`${t.x},${t.y} `);
      }), [s2.x, s2.y, ...f, h.x, h.y].toString();
    },
    createIndividualArea(i, s2) {
      if (!i[0]) return [-10, -10, "", -10, -10];
      const h = { x: i[0] ? i[0].x : Math.min(...i.filter((e) => !!e).map((e) => e.x)), y: s2 }, f = { x: i.at(-1) ? i.at(-1).x : Math.min(...i.filter((e) => !!e).map((e) => e.x)), y: s2 }, t = [];
      return i.filter((e) => !!e).forEach((e) => {
        t.push(`${e.x},${e.y} `);
      }), [h.x, h.y, ...t, f.x, f.y].toString();
    },
    createStar: xt,
    createPolygonPath: Ft,
    fillArray(i, s2) {
      let h = Array(i).fill(0);
      for (let f = 0; f < s2.length && f < i; f += 1)
        h[f] = s2[f];
      return h;
    },
    refreshSlicer() {
      this.slicer = {
        start: 0,
        end: Math.max(...this.dataset.map((i) => this.largestTriangleThreeBucketsArray({ data: i.series, threshold: this.FINAL_CONFIG.downsample.threshold }).length))
      }, this.slicerStep += 1;
    },
    calcRectHeight(i) {
      return i.value >= 0 ? this.checkNaN(this.zero - i.y <= 0 ? 1e-5 : this.zero - i.y) : this.checkNaN(i.y - this.zero <= 0 ? 1e-5 : i.y - this.zero);
    },
    calcIndividualHeight(i) {
      return i.value >= 0 ? this.checkNaN(i.zeroPosition - i.y <= 0 ? 1e-5 : i.zeroPosition - i.y) : this.checkNaN(i.y - i.zeroPosition <= 0 ? 1e-5 : i.zeroPosition - i.y);
    },
    calcRectWidth() {
      return this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? this.slot.line - this.drawingArea.width / this.maxSeries * 0.1 : this.slot.bar;
    },
    calcRectX(i) {
      return this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? i.x + this.drawingArea.width / this.maxSeries * 0.05 : i.x + this.slot.bar / 2;
    },
    calcRectY(i) {
      return i.value >= 0 ? i.y : this.zero;
    },
    calcIndividualRectY(i) {
      return i.value >= 0 ? i.y : [null, void 0, NaN, 1 / 0, -1 / 0].includes(i.zeroPosition) ? 0 : i.zeroPosition;
    },
    canShowValue(i) {
      return ![null, void 0, NaN, 1 / 0, -1 / 0].includes(i);
    },
    findClosestValue(i, s2) {
      let h = s2[0], f = Math.abs(i - s2[0]);
      for (let t = 1; t < s2.length; t += 1) {
        const e = Math.abs(i - s2[t]);
        e < f && s2[t] < i && (h = s2[t], f = e);
      }
      return h;
    },
    ratioToMax(i) {
      return i / (this.canShowValue(this.absoluteMax) ? this.absoluteMax : 1);
    },
    selectX(i) {
      this.$emit(
        "selectX",
        {
          dataset: this.relativeDataset.map((s2) => ({
            name: s2.name,
            value: [null, void 0, NaN].includes(s2.absoluteValues[i]) ? null : s2.absoluteValues[i],
            color: s2.color,
            type: s2.type
          })),
          index: i,
          indexLabel: this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values[i]
        }
      );
    },
    getData() {
      return this.absoluteDataset.map((i) => ({
        values: i.absoluteValues,
        color: i.color,
        name: i.name,
        type: i.type
      }));
    },
    segregate(i) {
      if (this.segregatedSeries.includes(i.id))
        this.segregatedSeries = this.segregatedSeries.filter((s2) => s2 !== i.id);
      else {
        if (this.segregatedSeries.length + 1 === this.safeDataset.length) return;
        this.segregatedSeries.push(i.id);
      }
      this.$emit("selectLegend", this.relativeDataset.map((s2) => ({
        name: s2.name,
        values: s2.absoluteValues,
        color: s2.color,
        type: s2.type
      }))), this.segregateStep += 1;
    },
    toggleTooltipVisibility(i, s2 = null) {
      this.isTooltip = i, i ? this.selectedSerieIndex = s2 : this.selectedSerieIndex = null;
    },
    toggleFullscreen(i) {
      this.isFullscreen = i, this.step += 1;
    },
    showSpinnerPdf() {
      this.isPrinting = true;
    },
    async generatePdf() {
      this.showSpinnerPdf(), clearTimeout(this.__to__), this.isPrinting = true, this.__to__ = setTimeout(async () => {
        try {
          const { default: i } = await import("./pdf-B7oVat64-XW44TS2W.js");
          await i({
            domElement: document.getElementById(`vue-ui-xy_${this.uniqueId}`),
            fileName: this.FINAL_CONFIG.chart.title.text || "vue-ui-xy"
          });
        } catch (i) {
          console.error("Error generating PDF:", i);
        } finally {
          this.isPrinting = false;
        }
      }, 100);
    },
    generateCsv() {
      const i = [[this.FINAL_CONFIG.chart.title.text], [this.FINAL_CONFIG.chart.title.subtitle.text], [""]], s2 = ["", ...this.table.head.map((e) => e.label)], h = this.table.body, f = i.concat([s2]).concat(h), t = this.createCsvContent(f);
      this.downloadCsv({ csvContent: t, title: this.FINAL_CONFIG.chart.title.text || "vue-ui-xy" });
    },
    showSpinnerImage() {
      this.isImaging = true;
    },
    async generateImage() {
      this.showSpinnerImage(), clearTimeout(this.__to__), this.isImaging = true, this.__to__ = setTimeout(async () => {
        try {
          const { default: i } = await import("./img-DGzWcJ4Y-VGPVEA2Q.js");
          await i({
            domElement: document.getElementById(`vue-ui-xy_${this.uniqueId}`),
            fileName: this.FINAL_CONFIG.chart.title.text || "vue-ui-xy",
            format: "png"
          });
        } catch (i) {
          console.error("Error generating image:", i);
        } finally {
          this.isImaging = false;
        }
      }, 100);
    }
  }
};
var Ue2 = ["id"];
var Ze = {
  key: 1,
  ref: "noTitle",
  class: "vue-data-ui-no-title-space",
  style: "height:36px; width: 100%; background:transparent"
};
var Je2 = ["viewBox"];
var Ke = { key: 0 };
var Qe = { class: "vue-ui-xy-grid" };
var je2 = ["stroke", "x1", "x2", "y1", "y2"];
var $e = ["stroke", "x1", "x2", "y1", "y2"];
var et = { key: 1 };
var tt = ["x1", "x2", "y1", "y2", "stroke"];
var it = ["x1", "x2", "y1", "y2", "stroke"];
var at = ["x1", "x2", "y1", "y2", "stroke"];
var rt2 = { key: 3 };
var lt = ["x1", "x2", "y1", "y2", "stroke"];
var st2 = ["id"];
var nt = ["stop-color"];
var ot = ["stop-color"];
var ct = ["stop-color"];
var ht = ["id"];
var dt = ["stop-color"];
var ut = ["stop-color"];
var gt = ["stop-color"];
var ft = ["id"];
var Nt2 = ["stop-color"];
var mt = ["stop-color"];
var It = ["id"];
var xt2 = ["stop-color"];
var bt = ["stop-color"];
var Ft2 = ["id"];
var _t2 = ["stop-color"];
var yt2 = ["stop-color"];
var At = ["x", "y", "height", "width", "fill"];
var Ct = ["x", "y", "width"];
var Lt2 = ["x", "y", "height", "width", "fill"];
var St = ["x", "y", "height", "width", "rx", "fill", "stroke", "stroke-width"];
var kt = ["width", "x", "y"];
var wt2 = { key: 0 };
var Ot = ["id"];
var Gt2 = ["fill"];
var vt = ["x1", "x2", "y1", "y2", "stroke", "marker-end"];
var pt2 = ["x", "y", "font-size", "fill"];
var Mt = ["stroke", "x1", "x2", "y1", "y2"];
var zt = { key: 2 };
var Tt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var Pt = ["x", "y", "width", "height", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-dasharray"];
var Vt2 = { key: 4 };
var Rt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Dt2 = ["fill", "font-size", "transform"];
var Bt = ["x1", "x2", "y1", "y2", "stroke"];
var Ht2 = ["x", "y", "font-size", "fill"];
var Wt = ["x1", "x2", "y1", "y2", "stroke"];
var Et = ["x", "y", "font-size", "fill"];
var Yt = ["width", "x", "y"];
var Xt2 = { style: { width: "100%" } };
var qt2 = { key: 0 };
var Ut = ["id"];
var Zt = ["fill"];
var Jt = ["x1", "x2", "y1", "y2", "stroke", "marker-end"];
var Kt2 = ["x", "y", "font-size", "fill"];
var Qt = ["d", "stroke", "stroke-width", "stroke-dasharray"];
var jt2 = { key: 1 };
var $t2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var ei = { key: 0 };
var ti = ["d", "fill"];
var ii = ["d", "fill"];
var ai = ["d", "stroke", "stroke-width", "stroke-dasharray"];
var ri = { key: 2 };
var li = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var si = ["width", "x", "y"];
var ni = { style: { width: "100%" } };
var oi = { key: 3 };
var ci = ["id"];
var hi = ["fill"];
var di = ["x1", "x2", "y1", "y2", "stroke", "marker-end"];
var ui = ["x", "y", "font-size", "fill"];
var gi = { key: 5 };
var fi = ["x", "y", "font-size", "fill"];
var Ni = ["x", "y", "font-size", "fill", "font-weight"];
var mi = { key: 6 };
var Ii = ["x", "y", "font-size", "fill"];
var xi = ["x", "y"];
var bi = ["x", "y"];
var Fi = { key: 7 };
var _i = ["x", "y", "font-size", "fill"];
var yi = ["x", "y"];
var Ai = ["x", "y"];
var Ci = ["x", "y", "font-size", "fill", "innerHTML"];
var Li = ["x", "y", "font-size", "fill", "innerHTML"];
var Si = ["x", "y", "font-size", "fill", "innerHTML"];
var ki = ["x", "y", "font-size", "fill", "innerHTML"];
var wi = ["x", "y", "width", "height", "fill", "onMouseenter"];
var Oi = ["font-size", "fill", "transform"];
var Gi = ["x", "y", "font-size", "fill"];
var vi = { key: 9 };
var pi = ["text-anchor", "font-size", "fill", "transform"];
var Mi = ["x", "y", "height", "width", "onMouseenter", "onClick"];
var zi = { key: 10 };
var Ti = ["x", "y"];
var Pi = ["cx", "cy", "r", "fill"];
var Vi = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Ri = ["onClick"];
var Di = {
  key: 0,
  viewBox: "0 0 20 12",
  height: "14",
  width: "20"
};
var Bi = ["fill"];
var Hi = {
  key: 1,
  viewBox: "0 0 12 12",
  height: "14",
  width: "14"
};
var Wi = ["fill"];
var Ei = {
  key: 9,
  ref: "chartLegend"
};
var Yi = {
  key: 10,
  ref: "source",
  dir: "auto"
};
var Xi = {
  style: { display: "flex", "flex-direction": "row", gap: "6px", "align-items": "center", "padding-left": "6px" },
  "data-html2canvas-ignore": ""
};
var qi = ["innerHTML"];
function Ui(i, s2, h, f, t, e) {
  const x2 = resolveComponent("PenAndPaper"), y = resolveComponent("Title"), k2 = resolveComponent("UserOptions"), m = resolveComponent("PackageVersion"), b = resolveComponent("Shape"), T = resolveComponent("Skeleton"), v = resolveComponent("Slicer"), p2 = resolveComponent("Tooltip"), w = resolveComponent("BaseIcon"), _ = resolveComponent("TableSparkline"), L = resolveComponent("DataTable"), M = resolveComponent("Accordion");
  return openBlock(), createElementBlock("div", {
    id: `vue-ui-xy_${t.uniqueId}`,
    class: normalizeClass(`vue-ui-xy ${t.isFullscreen ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.FINAL_CONFIG.useCssAnimation ? "" : "vue-ui-dna"}`),
    ref: "chart",
    style: normalizeStyle(`background:${e.FINAL_CONFIG.chart.backgroundColor}; color:${e.FINAL_CONFIG.chart.color};width:100%;font-family:${e.FINAL_CONFIG.chart.fontFamily};${e.FINAL_CONFIG.responsive ? "height: 100%" : ""}`)
  }, [
    e.FINAL_CONFIG.chart.userOptions.buttons.annotator ? (openBlock(), createBlock(x2, {
      key: 0,
      parent: i.$refs.chart,
      backgroundColor: e.FINAL_CONFIG.chart.backgroundColor,
      color: e.FINAL_CONFIG.chart.color,
      active: t.isAnnotator,
      onClose: e.toggleAnnotator
    }, null, 8, ["parent", "backgroundColor", "color", "active", "onClose"])) : createCommentVNode("", true),
    e.hasOptionsNoTitle ? (openBlock(), createElementBlock("div", Ze, null, 512)) : createCommentVNode("", true),
    e.FINAL_CONFIG.chart.title.show ? (openBlock(), createElementBlock("div", {
      key: 2,
      ref: "chartTitle",
      class: "vue-ui-xy-title",
      style: normalizeStyle(`font-family:${e.FINAL_CONFIG.chart.fontFamily}`)
    }, [
      (openBlock(), createBlock(y, {
        key: `title_${t.titleStep}`,
        config: {
          title: {
            cy: "xy-div-title",
            ...e.FINAL_CONFIG.chart.title
          },
          subtitle: {
            cy: "xy-div-subtitle",
            ...e.FINAL_CONFIG.chart.title.subtitle
          }
        }
      }, null, 8, ["config"]))
    ], 4)) : createCommentVNode("", true),
    e.FINAL_CONFIG.chart.userOptions.show && e.isDataset ? (openBlock(), createBlock(k2, {
      ref: "defails",
      key: `user_options_${t.step}`,
      backgroundColor: e.FINAL_CONFIG.chart.backgroundColor,
      color: e.FINAL_CONFIG.chart.color,
      isPrinting: t.isPrinting,
      isImaging: t.isImaging,
      uid: t.uniqueId,
      hasTooltip: e.FINAL_CONFIG.chart.userOptions.buttons.tooltip && e.FINAL_CONFIG.chart.tooltip.show,
      hasPdf: e.FINAL_CONFIG.chart.userOptions.buttons.pdf,
      hasXls: e.FINAL_CONFIG.chart.userOptions.buttons.csv,
      hasImg: e.FINAL_CONFIG.chart.userOptions.buttons.img,
      hasLabel: e.FINAL_CONFIG.chart.userOptions.buttons.labels,
      hasTable: e.FINAL_CONFIG.chart.userOptions.buttons.table,
      hasStack: h.dataset.length > 1 && e.FINAL_CONFIG.chart.userOptions.buttons.stack,
      hasFullscreen: e.FINAL_CONFIG.chart.userOptions.buttons.fullscreen,
      isStacked: t.mutableConfig.isStacked,
      isFullscreen: t.isFullscreen,
      chartElement: i.$refs.chart,
      position: e.FINAL_CONFIG.chart.userOptions.position,
      isTooltip: t.mutableConfig.showTooltip,
      titles: { ...e.FINAL_CONFIG.chart.userOptions.buttonTitles },
      hasAnnotator: e.FINAL_CONFIG.chart.userOptions.buttons.annotator,
      isAnnotation: t.isAnnotator,
      onToggleFullscreen: e.toggleFullscreen,
      onGeneratePdf: e.generatePdf,
      onGenerateCsv: e.generateCsv,
      onGenerateImage: e.generateImage,
      onToggleTable: e.toggleTable,
      onToggleLabels: e.toggleLabels,
      onToggleStack: e.toggleStack,
      onToggleTooltip: e.toggleTooltip,
      onToggleAnnotator: e.toggleAnnotator
    }, createSlots({ _: 2 }, [
      i.$slots.optionTooltip ? {
        name: "optionTooltip",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionTooltip", {}, void 0, true)
        ]),
        key: "0"
      } : void 0,
      i.$slots.optionPdf ? {
        name: "optionPdf",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionPdf", {}, void 0, true)
        ]),
        key: "1"
      } : void 0,
      i.$slots.optionCsv ? {
        name: "optionCsv",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionCsv", {}, void 0, true)
        ]),
        key: "2"
      } : void 0,
      i.$slots.optionImg ? {
        name: "optionImg",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionImg", {}, void 0, true)
        ]),
        key: "3"
      } : void 0,
      i.$slots.optionTable ? {
        name: "optionTable",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionTable", {}, void 0, true)
        ]),
        key: "4"
      } : void 0,
      i.$slots.optionLabels ? {
        name: "optionLabels",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionLabels", {}, void 0, true)
        ]),
        key: "5"
      } : void 0,
      i.$slots.optionStack ? {
        name: "optionStack",
        fn: withCtx(() => [
          renderSlot(i.$slots, "optionStack", {}, void 0, true)
        ]),
        key: "6"
      } : void 0,
      i.$slots.optionFullscreen ? {
        name: "optionFullscreen",
        fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
          renderSlot(i.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
        ]),
        key: "7"
      } : void 0,
      i.$slots.optionAnnotator ? {
        name: "optionAnnotator",
        fn: withCtx(({ toggleAnnotator: a, isAnnotator: o }) => [
          renderSlot(i.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: o })), void 0, true)
        ]),
        key: "8"
      } : void 0
    ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasLabel", "hasTable", "hasStack", "hasFullscreen", "isStacked", "isFullscreen", "chartElement", "position", "isTooltip", "titles", "hasAnnotator", "isAnnotation", "onToggleFullscreen", "onGeneratePdf", "onGenerateCsv", "onGenerateImage", "onToggleTable", "onToggleLabels", "onToggleStack", "onToggleTooltip", "onToggleAnnotator"])) : createCommentVNode("", true),
    e.isDataset ? (openBlock(), createElementBlock("svg", {
      key: 4,
      xmlns: "http://www.w3.org/2000/svg",
      class: normalizeClass([{ "vue-data-ui-fullscreen--on": t.isFullscreen, "vue-data-ui-fulscreen--off": !t.isFullscreen }, "vue-ui-xy-svg"]),
      width: "100%",
      viewBox: t.viewBox,
      style: normalizeStyle(`background: transparent; color:${e.FINAL_CONFIG.chart.color}; font-family:${e.FINAL_CONFIG.chart.fontFamily}`)
    }, [
      createVNode(m),
      e.maxSeries > 0 ? (openBlock(), createElementBlock("g", Ke, [
        createBaseVNode("g", Qe, [
          e.FINAL_CONFIG.chart.grid.labels.xAxis.showBaseline ? (openBlock(), createElementBlock("line", {
            key: 0,
            stroke: e.FINAL_CONFIG.chart.grid.stroke,
            "stroke-width": "1",
            x1: e.drawingArea.left + e.xPadding,
            x2: e.drawingArea.right - e.xPadding,
            y1: e.drawingArea.bottom,
            y2: e.drawingArea.bottom,
            "stroke-linecap": "round"
          }, null, 8, je2)) : createCommentVNode("", true),
          t.mutableConfig.useIndividualScale ? e.FINAL_CONFIG.chart.grid.showHorizontalLines ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(e.allScales, (a) => (openBlock(), createElementBlock("g", null, [
            a.id === t.selectedScale && a.yLabels.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(a.yLabels, (o) => (openBlock(), createElementBlock("line", {
              x1: e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.right - e.xPadding,
              y1: e.checkNaN(o.y),
              y2: e.checkNaN(o.y),
              stroke: a.color,
              "stroke-width": 0.5,
              "stroke-linecap": "round"
            }, null, 8, it))), 256)) : a.yLabels.length ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(a.yLabels, (o) => (openBlock(), createElementBlock("line", {
              x1: e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.right - e.xPadding,
              y1: e.checkNaN(o.y),
              y2: e.checkNaN(o.y),
              stroke: e.FINAL_CONFIG.chart.grid.stroke,
              "stroke-width": 0.5,
              "stroke-linecap": "round"
            }, null, 8, at))), 256)) : createCommentVNode("", true)
          ]))), 256)) : createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            e.FINAL_CONFIG.chart.grid.labels.yAxis.showBaseline ? (openBlock(), createElementBlock("line", {
              key: 0,
              stroke: e.FINAL_CONFIG.chart.grid.stroke,
              "stroke-width": "1",
              x1: e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.left + e.xPadding,
              y1: e.drawingArea.top,
              y2: e.drawingArea.bottom,
              "stroke-linecap": "round"
            }, null, 8, $e)) : createCommentVNode("", true),
            e.FINAL_CONFIG.chart.grid.showHorizontalLines ? (openBlock(), createElementBlock("g", et, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.yLabels, (a) => (openBlock(), createElementBlock("line", {
                x1: e.drawingArea.left + e.xPadding,
                x2: e.drawingArea.right - e.xPadding,
                y1: e.checkNaN(a.y),
                y2: e.checkNaN(a.y),
                stroke: e.FINAL_CONFIG.chart.grid.stroke,
                "stroke-width": 0.5,
                "stroke-linecap": "round"
              }, null, 8, tt))), 256))
            ])) : createCommentVNode("", true)
          ], 64)),
          e.FINAL_CONFIG.chart.grid.showVerticalLines ? (openBlock(), createElementBlock("g", rt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.maxSeries + (e.FINAL_CONFIG.chart.grid.position === "middle" ? 1 : 0), (a, o) => (openBlock(), createElementBlock("line", {
              key: `grid_vertical_line_${o}`,
              x1: e.drawingArea.width / e.maxSeries * o + e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.width / e.maxSeries * o + e.drawingArea.left + e.xPadding,
              y1: e.drawingArea.top,
              y2: e.drawingArea.bottom,
              "stroke-width": "0.5",
              stroke: e.FINAL_CONFIG.chart.grid.stroke
            }, null, 8, lt))), 128))
          ])) : createCommentVNode("", true)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.barSet, (a, o) => (openBlock(), createElementBlock("defs", {
          key: `def_rect_${o}`
        }, [
          createBaseVNode("linearGradient", {
            id: `rectGradient_pos_${o}_${t.uniqueId}`,
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": a.color
            }, null, 8, nt),
            createBaseVNode("stop", {
              offset: "62%",
              "stop-color": `${e.shiftHue(a.color, 0.02)}`
            }, null, 8, ot),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, ct)
          ], 8, st2),
          createBaseVNode("linearGradient", {
            id: `rectGradient_neg_${o}_${t.uniqueId}`,
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, dt),
            createBaseVNode("stop", {
              offset: "38%",
              "stop-color": `${e.shiftHue(a.color, 0.02)}`
            }, null, 8, ut),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": a.color
            }, null, 8, gt)
          ], 8, ht)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("defs", {
          key: `def_plot_${o}`
        }, [
          createBaseVNode("radialGradient", {
            id: `plotGradient_${o}_${t.uniqueId}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, Nt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": a.color
            }, null, 8, mt)
          ], 8, ft)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("defs", {
          key: `def_line_${o}`
        }, [
          createBaseVNode("radialGradient", {
            id: `lineGradient_${o}_${t.uniqueId}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, xt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": a.color
            }, null, 8, bt)
          ], 8, It),
          createBaseVNode("linearGradient", {
            id: `areaGradient_${o}_${t.uniqueId}`,
            x1: "0%",
            x2: "100%",
            y1: "0%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.setOpacity(e.shiftHue(a.color, 0.03), e.FINAL_CONFIG.line.area.opacity)}`
            }, null, 8, _t2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": `${e.setOpacity(a.color, e.FINAL_CONFIG.line.area.opacity)}`
            }, null, 8, yt2)
          ], 8, Ft2)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.highlightAreas, (a) => (openBlock(), createElementBlock("g", null, [
          a.show ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(a.span, (o, n) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("rect", {
              style: normalizeStyle({
                transition: "none",
                opacity: a.from + n >= t.slicer.start && a.from + n <= t.slicer.end - 1 ? 1 : 0
              }),
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * (a.from + n - t.slicer.start),
              y: e.drawingArea.top,
              height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
              width: e.drawingArea.width / e.maxSeries < 0 ? 1e-5 : e.drawingArea.width / e.maxSeries,
              fill: e.setOpacity(a.color, a.opacity)
            }, null, 12, At),
            a.caption.text && n === 0 ? (openBlock(), createElementBlock("foreignObject", {
              key: 0,
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * (a.from + n - t.slicer.start) - (a.caption.width === "auto" ? 0 : a.caption.width / 2 - e.drawingArea.width / e.maxSeries * a.span / 2),
              y: e.drawingArea.top + a.caption.offsetY,
              style: normalizeStyle({
                overflow: "visible",
                opacity: a.to >= t.slicer.start && a.from < t.slicer.end ? 1 : 0
              }),
              height: "1",
              width: a.caption.width === "auto" ? e.drawingArea.width / e.maxSeries * a.span : a.caption.width
            }, [
              createBaseVNode("div", {
                style: normalizeStyle(`padding:${a.caption.padding}px;text-align:${a.caption.textAlign};font-size:${a.caption.fontSize}px;color:${a.caption.color};font-weight:${a.caption.bold ? "bold" : "normal"}`)
              }, toDisplayString(a.caption.text), 5)
            ], 12, Ct)) : createCommentVNode("", true)
          ]))), 256)) : createCommentVNode("", true)
        ]))), 256)),
        createBaseVNode("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.maxSeries, (a, o) => (openBlock(), createElementBlock("g", {
            key: `tooltip_trap_highlighter_${o}`
          }, [
            createBaseVNode("rect", {
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * o,
              y: e.drawingArea.top,
              height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
              width: e.drawingArea.width / e.maxSeries < 0 ? 1e-5 : e.drawingArea.width / e.maxSeries,
              fill: [t.selectedMinimapIndex, t.selectedSerieIndex, t.selectedRowIndex].includes(o) ? e.setOpacity(e.FINAL_CONFIG.chart.highlighter.color, e.FINAL_CONFIG.chart.highlighter.opacity) : "transparent"
            }, null, 8, Lt2)
          ]))), 128))
        ]),
        e.barSet.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.barSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_bar_${o}`,
          class: normalizeClass(`serie_bar_${o}`),
          style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
            key: `bar_plot_${o}_${d}`
          }, [
            e.canShowValue(n.value) ? (openBlock(), createElementBlock("rect", {
              key: 0,
              x: e.calcRectX(n),
              y: t.mutableConfig.useIndividualScale ? e.calcIndividualRectY(n) : e.calcRectY(n),
              height: t.mutableConfig.useIndividualScale ? Math.abs(e.calcIndividualHeight(n)) : Math.abs(e.calcRectHeight(n)),
              width: e.calcRectWidth() - (t.mutableConfig.useIndividualScale && t.mutableConfig.isStacked ? 0 : e.barPeriodGap) < 0 ? 1e-5 : e.calcRectWidth() - (t.mutableConfig.useIndividualScale && t.mutableConfig.isStacked ? 0 : e.barPeriodGap),
              rx: e.FINAL_CONFIG.bar.borderRadius,
              fill: e.FINAL_CONFIG.bar.useGradient ? n.value >= 0 ? `url(#rectGradient_pos_${o}_${t.uniqueId})` : `url(#rectGradient_neg_${o}_${t.uniqueId})` : a.color,
              stroke: e.FINAL_CONFIG.bar.border.useSerieColor ? a.color : e.FINAL_CONFIG.bar.border.stroke,
              "stroke-width": e.FINAL_CONFIG.bar.border.strokeWidth
            }, null, 8, St)) : createCommentVNode("", true),
            n.comment && e.FINAL_CONFIG.chart.comments.show ? (openBlock(), createElementBlock("foreignObject", {
              key: 1,
              style: { overflow: "visible" },
              height: "12",
              width: (e.calcRectWidth() - (t.mutableConfig.useIndividualScale && t.mutableConfig.isStacked ? 0 : e.barPeriodGap) < 0 ? 1e-5 : e.calcRectWidth() - (t.mutableConfig.useIndividualScale && t.mutableConfig.isStacked ? 0 : e.barPeriodGap) / 2) + e.FINAL_CONFIG.chart.comments.width,
              x: e.calcRectX(n) - e.FINAL_CONFIG.chart.comments.width / 2 + e.FINAL_CONFIG.chart.comments.offsetX,
              y: e.checkNaN(n.y) + e.FINAL_CONFIG.chart.comments.offsetY + 6
            }, [
              renderSlot(i.$slots, "plot-comment", {
                plot: { ...n, color: a.color, seriesIndex: o, datapointIndex: d }
              }, void 0, true)
            ], 8, kt)) : createCommentVNode("", true)
          ]))), 128)),
          Object.hasOwn(a, "useProgression") && a.useProgression === true && !isNaN(e.calcLinearProgression(a.plots).trend) ? (openBlock(), createElementBlock("g", wt2, [
            createBaseVNode("defs", null, [
              createBaseVNode("marker", {
                id: `bar_arrow_${o}`,
                markerWidth: 7,
                markerHeight: 7,
                refX: "0",
                refY: 7 / 2,
                orient: "auto"
              }, [
                createBaseVNode("polygon", {
                  points: `0 0, 7 ${7 / 2}, 0 7`,
                  fill: a.color
                }, null, 8, Gt2)
              ], 8, Ot)
            ]),
            a.plots.length > 1 ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: e.calcLinearProgression(a.plots).x1,
              x2: e.calcLinearProgression(a.plots).x2,
              y1: e.calcLinearProgression(a.plots).y1,
              y2: e.calcLinearProgression(a.plots).y2,
              "stroke-width": 1,
              stroke: a.color,
              "stroke-dasharray": 2,
              "marker-end": `url(#bar_arrow_${o})`
            }, null, 8, vt)) : createCommentVNode("", true),
            a.plots.length > 1 ? (openBlock(), createElementBlock("text", {
              key: 1,
              "text-anchor": "middle",
              x: e.calcLinearProgression(a.plots).x2,
              y: e.calcLinearProgression(a.plots).y2 - 6,
              "font-size": t.fontSizes.plotLabels,
              fill: a.color
            }, toDisplayString(e.dataLabel({
              v: e.calcLinearProgression(a.plots).trend * 100,
              s: "%",
              r: 2
            })), 9, pt2)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6))), 128)) : createCommentVNode("", true),
        !t.mutableConfig.useIndividualScale && e.FINAL_CONFIG.chart.grid.labels.zeroLine.show ? (openBlock(), createElementBlock("line", {
          key: 1,
          stroke: e.FINAL_CONFIG.chart.grid.stroke,
          "stroke-width": "1",
          x1: e.drawingArea.left + e.xPadding,
          x2: e.drawingArea.right - e.xPadding,
          y1: e.checkNaN(e.zero),
          y2: e.checkNaN(e.zero),
          "stroke-linecap": "round"
        }, null, 8, Mt)) : createCommentVNode("", true),
        e.FINAL_CONFIG.chart.highlighter.useLine && (![null, void 0].includes(t.selectedSerieIndex) || ![null, void 0].includes(t.selectedMinimapIndex)) ? (openBlock(), createElementBlock("g", zt, [
          createBaseVNode("line", {
            x1: e.drawingArea.left + e.drawingArea.width / e.maxSeries * ((t.selectedSerieIndex !== null ? t.selectedSerieIndex : 0) || (t.selectedMinimapIndex !== null ? t.selectedMinimapIndex : 0)) + e.drawingArea.width / e.maxSeries / 2,
            x2: e.drawingArea.left + e.drawingArea.width / e.maxSeries * ((t.selectedSerieIndex !== null ? t.selectedSerieIndex : 0) || (t.selectedMinimapIndex !== null ? t.selectedMinimapIndex : 0)) + e.drawingArea.width / e.maxSeries / 2,
            y1: e.drawingArea.top,
            y2: e.drawingArea.bottom,
            stroke: e.FINAL_CONFIG.chart.highlighter.color,
            "stroke-width": e.FINAL_CONFIG.chart.highlighter.lineWidth,
            "stroke-dasharray": e.FINAL_CONFIG.chart.highlighter.lineDasharray,
            "stroke-linecap": "round",
            style: { transition: "none !important", animation: "none !important", "pointer-events": "none" }
          }, null, 8, Tt2)
        ])) : createCommentVNode("", true),
        e.FINAL_CONFIG.chart.grid.frame.show ? (openBlock(), createElementBlock("rect", {
          key: 3,
          style: { pointerEvents: "none", transition: "none" },
          x: e.drawingArea.left + e.xPadding < 0 ? 0 : e.drawingArea.left + e.xPadding,
          y: e.drawingArea.top,
          width: e.drawingArea.width - (e.FINAL_CONFIG.chart.grid.position === "middle" ? 0 : e.drawingArea.width / e.maxSeries) < 0 ? 0 : e.drawingArea.width - (e.FINAL_CONFIG.chart.grid.position === "middle" ? 0 : e.drawingArea.width / e.maxSeries),
          height: e.drawingArea.height < 0 ? 0 : e.drawingArea.height,
          fill: "transparent",
          stroke: e.FINAL_CONFIG.chart.grid.frame.stroke,
          "stroke-width": e.FINAL_CONFIG.chart.grid.frame.strokeWidth,
          "stroke-linecap": e.FINAL_CONFIG.chart.grid.frame.strokeLinecap,
          "stroke-linejoin": e.FINAL_CONFIG.chart.grid.frame.strokeLinejoin,
          "stroke-dasharray": e.FINAL_CONFIG.chart.grid.frame.strokeDasharray
        }, null, 8, Pt)) : createCommentVNode("", true),
        e.FINAL_CONFIG.chart.grid.labels.show ? (openBlock(), createElementBlock("g", Vt2, [
          t.mutableConfig.useIndividualScale ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.allScales, (a) => (openBlock(), createElementBlock("g", null, [
              createBaseVNode("line", {
                x1: a.x + e.xPadding,
                x2: a.x + e.xPadding,
                y1: t.mutableConfig.isStacked ? e.checkNaN(e.drawingArea.bottom - a.yOffset - a.individualHeight) : e.checkNaN(e.drawingArea.top),
                y2: t.mutableConfig.isStacked ? e.checkNaN(e.drawingArea.bottom - a.yOffset) : e.checkNaN(e.drawingArea.bottom),
                stroke: a.color,
                "stroke-width": e.FINAL_CONFIG.chart.grid.stroke,
                "stroke-linecap": "round",
                style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.3 : 1};transition:opacity 0.2s ease-in-out`)
              }, null, 12, Rt)
            ]))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.allScales, (a) => (openBlock(), createElementBlock("g", {
              style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.3 : 1};transition:opacity 0.2s ease-in-out`)
            }, [
              createBaseVNode("text", {
                fill: a.color,
                "font-size": t.fontSizes.dataLabels,
                "text-anchor": "middle",
                transform: `translate(${a.x - e.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth + 5}, ${t.mutableConfig.isStacked ? e.drawingArea.bottom - a.yOffset - a.individualHeight / 2 : e.drawingArea.top + e.drawingArea.height / 2}) rotate(-90)`
              }, toDisplayString(a.name) + " " + toDisplayString(a.scaleLabel ? `- ${a.scaleLabel}` : ""), 9, Dt2),
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.yLabels, (o, n) => (openBlock(), createElementBlock("line", {
                x1: a.x - 3 + e.xPadding,
                x2: a.x + e.xPadding,
                y1: e.checkNaN(o.y),
                y2: e.checkNaN(o.y),
                stroke: a.color,
                "stroke-width": 1,
                "stroke-linecap": "round"
              }, null, 8, Bt))), 256)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.yLabels, (o, n) => (openBlock(), createElementBlock("text", {
                x: a.x - 5 + e.xPadding,
                y: e.checkNaN(o.y) + t.fontSizes.dataLabels / 3,
                "font-size": t.fontSizes.dataLabels,
                "text-anchor": "end",
                fill: a.color
              }, toDisplayString(e.applyDataLabel(
                e.FINAL_CONFIG.chart.grid.labels.yAxis.formatter,
                o.value,
                e.dataLabel({
                  p: o.prefix,
                  v: o.value,
                  s: o.suffix,
                  r: 1
                }),
                { datapoint: o.datapoint, seriesIndex: n }
              )), 9, Ht2))), 256))
            ], 4))), 256))
          ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(e.yLabels, (a, o) => (openBlock(), createElementBlock("g", {
            key: `yLabel_${o}`
          }, [
            e.canShowValue(a) && a.value >= e.niceScale.min && a.value <= e.niceScale.max ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.left - 5 + e.xPadding,
              y1: e.checkNaN(a.y),
              y2: e.checkNaN(a.y),
              stroke: e.FINAL_CONFIG.chart.grid.stroke,
              "stroke-width": "1",
              "stroke-linecap": "round"
            }, null, 8, Wt)) : createCommentVNode("", true),
            a.value >= e.niceScale.min && a.value <= e.niceScale.max ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: e.drawingArea.left - 7 + e.xPadding,
              y: e.checkNaN(a.y + t.fontSizes.dataLabels / 3),
              "font-size": t.fontSizes.dataLabels,
              "text-anchor": "end",
              fill: e.FINAL_CONFIG.chart.grid.labels.color
            }, toDisplayString(e.canShowValue(a.value) ? e.applyDataLabel(
              e.FINAL_CONFIG.chart.grid.labels.yAxis.formatter,
              a.value,
              e.dataLabel({
                p: a.prefix,
                v: a.value,
                s: a.suffix,
                r: 1
              })
            ) : ""), 9, Et)) : createCommentVNode("", true)
          ]))), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_plot_${o}`,
          class: normalizeClass(`serie_plot_${o}`),
          style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
            key: `circle_plot_${o}_${d}`
          }, [
            n && e.canShowValue(n.value) ? (openBlock(), createBlock(b, {
              key: 0,
              shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle",
              color: e.FINAL_CONFIG.plot.useGradient ? `url(#plotGradient_${o}_${t.uniqueId})` : e.FINAL_CONFIG.plot.dot.useSerieColor ? a.color : e.FINAL_CONFIG.plot.dot.fill,
              plot: { x: e.checkNaN(n.x), y: e.checkNaN(n.y) },
              radius: t.selectedSerieIndex !== null && t.selectedSerieIndex === d || t.selectedMinimapIndex !== null && t.selectedMinimapIndex === d ? (t.plotRadii.plot || 6) * 1.5 : t.plotRadii.plot || 6,
              stroke: e.FINAL_CONFIG.plot.dot.useSerieColor ? e.FINAL_CONFIG.chart.backgroundColor : a.color,
              strokeWidth: e.FINAL_CONFIG.plot.dot.strokeWidth
            }, null, 8, ["shape", "color", "plot", "radius", "stroke", "strokeWidth"])) : createCommentVNode("", true),
            n.comment && e.FINAL_CONFIG.chart.comments.show ? (openBlock(), createElementBlock("foreignObject", {
              key: 1,
              style: { overflow: "visible" },
              height: "12",
              width: e.FINAL_CONFIG.chart.comments.width,
              x: n.x - e.FINAL_CONFIG.chart.comments.width / 2 + e.FINAL_CONFIG.chart.comments.offsetX,
              y: n.y + e.FINAL_CONFIG.chart.comments.offsetY + 6
            }, [
              createBaseVNode("div", Xt2, [
                renderSlot(i.$slots, "plot-comment", {
                  plot: { ...n, color: a.color, seriesIndex: o, datapointIndex: d }
                }, void 0, true)
              ])
            ], 8, Yt)) : createCommentVNode("", true)
          ]))), 128)),
          Object.hasOwn(a, "useProgression") && a.useProgression === true && !isNaN(e.calcLinearProgression(a.plots).trend) ? (openBlock(), createElementBlock("g", qt2, [
            createBaseVNode("defs", null, [
              createBaseVNode("marker", {
                id: `plot_arrow_${o}`,
                markerWidth: 7,
                markerHeight: 7,
                refX: "0",
                refY: 7 / 2,
                orient: "auto"
              }, [
                createBaseVNode("polygon", {
                  points: `0 0, 7 ${7 / 2}, 0 7`,
                  fill: a.color
                }, null, 8, Zt)
              ], 8, Ut)
            ]),
            a.plots.length > 1 ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: e.calcLinearProgression(a.plots).x1,
              x2: e.calcLinearProgression(a.plots).x2,
              y1: e.calcLinearProgression(a.plots).y1,
              y2: e.calcLinearProgression(a.plots).y2,
              "stroke-width": 1,
              stroke: a.color,
              "stroke-dasharray": 2,
              "marker-end": `url(#plot_arrow_${o})`
            }, null, 8, Jt)) : createCommentVNode("", true),
            a.plots.length > 1 ? (openBlock(), createElementBlock("text", {
              key: 1,
              "text-anchor": "middle",
              x: e.calcLinearProgression(a.plots).x2,
              y: e.calcLinearProgression(a.plots).y2 - 6,
              "font-size": t.fontSizes.plotLabels,
              fill: a.color
            }, toDisplayString(e.dataLabel({
              v: e.calcLinearProgression(a.plots).trend * 100,
              s: "%",
              r: 2
            })), 9, Kt2)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_line_${o}`,
          class: normalizeClass(`serie_line_${o}`),
          style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          a.smooth && a.plots.length > 1 ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: `M${a.curve}`,
            stroke: e.FINAL_CONFIG.chart.backgroundColor,
            "stroke-width": e.FINAL_CONFIG.line.strokeWidth + 1,
            "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
            fill: "none"
          }, null, 8, Qt)) : a.plots.length > 1 ? (openBlock(), createElementBlock("g", jt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
              key: `line_${o}_${d}`
            }, [
              n && d < a.plots.length - 1 && a.plots[d + 1] && e.canShowValue(n.value) && e.canShowValue(a.plots[d + 1].value) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: n.x,
                x2: a.plots[d + 1].x,
                y1: n.y,
                y2: a.plots[d + 1].y,
                stroke: e.FINAL_CONFIG.chart.backgroundColor,
                "stroke-width": e.FINAL_CONFIG.line.strokeWidth + 1,
                "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
              }, null, 8, $t2)) : createCommentVNode("", true)
            ]))), 128))
          ])) : createCommentVNode("", true)
        ], 6))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_line_${o}`,
          class: normalizeClass(`serie_line_${o}`),
          style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          a.useArea && a.plots.length > 1 ? (openBlock(), createElementBlock("g", ei, [
            a.smooth ? (openBlock(), createElementBlock("path", {
              key: 0,
              d: `M ${a.plots[0] ? a.plots[0].x : Math.min(...a.plots.filter((n) => !!n).map((n) => n.x))},${t.mutableConfig.isStacked ? e.drawingArea.bottom - a.yOffset : e.drawingArea.bottom} ${a.curve} L ${a.plots.at(-1) ? a.plots.at(-1).x : e.drawingArea.left + e.slot.line * o + e.slot.line / 2},${t.mutableConfig.isStacked ? e.drawingArea.bottom - a.yOffset : e.drawingArea.bottom} Z`,
              fill: e.FINAL_CONFIG.line.area.useGradient ? `url(#areaGradient_${o}_${t.uniqueId})` : e.setOpacity(a.color, e.FINAL_CONFIG.line.area.opacity)
            }, null, 8, ti)) : (openBlock(), createElementBlock("path", {
              key: 1,
              d: `M${a.area}Z`,
              fill: e.FINAL_CONFIG.line.area.useGradient ? `url(#areaGradient_${o}_${t.uniqueId})` : e.setOpacity(a.color, e.FINAL_CONFIG.line.area.opacity)
            }, null, 8, ii))
          ])) : createCommentVNode("", true),
          a.smooth && a.plots.length > 1 ? (openBlock(), createElementBlock("path", {
            key: 1,
            d: `M${a.curve}`,
            stroke: a.color,
            "stroke-width": e.FINAL_CONFIG.line.strokeWidth,
            "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
            fill: "none"
          }, null, 8, ai)) : a.plots.length > 1 ? (openBlock(), createElementBlock("g", ri, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
              key: `line_${o}_${d}`
            }, [
              n && d < a.plots.length - 1 && a.plots[d + 1] && e.canShowValue(n.value) && e.canShowValue(a.plots[d + 1].value) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: n.x,
                x2: a.plots[d + 1].x,
                y1: n.y,
                y2: a.plots[d + 1].y,
                stroke: a.color,
                "stroke-width": e.FINAL_CONFIG.line.strokeWidth,
                "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
              }, null, 8, li)) : createCommentVNode("", true)
            ]))), 128))
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
            key: `circle_line_${o}_${d}`
          }, [
            n && e.canShowValue(n.value) ? (openBlock(), createBlock(b, {
              key: 0,
              shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle",
              color: e.FINAL_CONFIG.line.useGradient ? `url(#lineGradient_${o}_${t.uniqueId})` : e.FINAL_CONFIG.line.dot.useSerieColor ? a.color : e.FINAL_CONFIG.line.dot.fill,
              plot: { x: e.checkNaN(n.x), y: e.checkNaN(n.y) },
              radius: t.selectedSerieIndex !== null && t.selectedSerieIndex === d || t.selectedMinimapIndex !== null && t.selectedMinimapIndex === d ? (t.plotRadii.line || 6) * 1.5 : t.plotRadii.line || 6,
              stroke: e.FINAL_CONFIG.line.dot.useSerieColor ? e.FINAL_CONFIG.chart.backgroundColor : a.color,
              strokeWidth: e.FINAL_CONFIG.line.dot.strokeWidth
            }, null, 8, ["shape", "color", "plot", "radius", "stroke", "strokeWidth"])) : createCommentVNode("", true),
            n.comment && e.FINAL_CONFIG.chart.comments.show ? (openBlock(), createElementBlock("foreignObject", {
              key: 1,
              style: { overflow: "visible" },
              height: "12",
              width: e.FINAL_CONFIG.chart.comments.width,
              x: n.x - e.FINAL_CONFIG.chart.comments.width / 2 + e.FINAL_CONFIG.chart.comments.offsetX,
              y: n.y + e.FINAL_CONFIG.chart.comments.offsetY + 6
            }, [
              createBaseVNode("div", ni, [
                renderSlot(i.$slots, "plot-comment", {
                  plot: { ...n, color: a.color, seriesIndex: o, datapointIndex: d }
                }, void 0, true)
              ])
            ], 8, si)) : createCommentVNode("", true)
          ]))), 128)),
          Object.hasOwn(a, "useProgression") && a.useProgression === true && !isNaN(e.calcLinearProgression(a.plots).trend) ? (openBlock(), createElementBlock("g", oi, [
            createBaseVNode("defs", null, [
              createBaseVNode("marker", {
                id: `line_arrow_${o}`,
                markerWidth: 7,
                markerHeight: 7,
                refX: "0",
                refY: 7 / 2,
                orient: "auto"
              }, [
                createBaseVNode("polygon", {
                  points: `0 0, 7 ${7 / 2}, 0 7`,
                  fill: a.color
                }, null, 8, hi)
              ], 8, ci)
            ]),
            a.plots.length > 1 ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: e.calcLinearProgression(a.plots).x1,
              x2: e.calcLinearProgression(a.plots).x2,
              y1: e.calcLinearProgression(a.plots).y1,
              y2: e.calcLinearProgression(a.plots).y2,
              "stroke-width": 1,
              stroke: a.color,
              "stroke-dasharray": 2,
              "marker-end": `url(#line_arrow_${o})`
            }, null, 8, di)) : createCommentVNode("", true),
            a.plots.length > 1 ? (openBlock(), createElementBlock("text", {
              key: 1,
              "text-anchor": "middle",
              x: e.calcLinearProgression(a.plots).x2,
              y: e.calcLinearProgression(a.plots).y2 - 6,
              "font-size": t.fontSizes.plotLabels,
              fill: a.color
            }, toDisplayString(e.dataLabel({
              v: e.calcLinearProgression(a.plots).trend * 100,
              s: "%",
              r: 2
            })), 9, ui)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6))), 128)),
        (e.FINAL_CONFIG.bar.labels.show || e.FINAL_CONFIG.bar.serieName.show) && t.mutableConfig.dataLabels.show ? (openBlock(), createElementBlock("g", gi, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.barSet, (a, o) => (openBlock(), createElementBlock("g", {
            key: `xLabel_bar_${o}`,
            class: normalizeClass(`xLabel_bar_${o}`),
            style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
              key: `xLabel_bar_${o}_${d}`
            }, [
              n && (!Object.hasOwn(a, "dataLabels") || a.dataLabels === true || t.selectedSerieIndex !== null && t.selectedSerieIndex === d || t.selectedMinimapIndex !== null && t.selectedMinimapIndex === d) && e.FINAL_CONFIG.bar.labels.show ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: t.mutableConfig.useIndividualScale && t.mutableConfig.isStacked ? n.x + e.slot.line / 2 : e.calcRectX(n) + e.calcRectWidth() / 2 - e.barPeriodGap / 2,
                y: e.checkNaN(n.y) + (n.value >= 0 ? e.FINAL_CONFIG.bar.labels.offsetY : -e.FINAL_CONFIG.bar.labels.offsetY * 3),
                "text-anchor": "middle",
                "font-size": t.fontSizes.plotLabels,
                fill: e.FINAL_CONFIG.bar.labels.color
              }, toDisplayString(e.canShowValue(n.value) ? e.applyDataLabel(
                e.FINAL_CONFIG.bar.labels.formatter,
                n.value,
                e.dataLabel({
                  p: a.prefix || e.FINAL_CONFIG.chart.labels.prefix,
                  v: n.value,
                  s: a.suffix || e.FINAL_CONFIG.chart.labels.suffix,
                  r: e.FINAL_CONFIG.bar.labels.rounding
                }),
                {
                  datapoint: n,
                  serie: a
                }
              ) : ""), 9, fi)) : createCommentVNode("", true),
              n && e.FINAL_CONFIG.bar.serieName.show ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: t.mutableConfig.useIndividualScale && t.mutableConfig.isStacked ? n.x + e.slot.line / 2 : n.x + e.calcRectWidth() * 1.1,
                y: n.y + (n.value > 0 ? e.FINAL_CONFIG.bar.serieName.offsetY : -e.FINAL_CONFIG.bar.serieName.offsetY * 3),
                "text-anchor": "middle",
                "font-size": t.fontSizes.plotLabels,
                fill: e.FINAL_CONFIG.bar.serieName.useSerieColor ? a.color : e.FINAL_CONFIG.bar.serieName.color,
                "font-weight": e.FINAL_CONFIG.bar.serieName.bold ? "bold" : "normal"
              }, toDisplayString(e.FINAL_CONFIG.bar.serieName.useAbbreviation ? e.abbreviate({ source: a.name, length: e.FINAL_CONFIG.bar.serieName.abbreviationSize }) : a.name), 9, Ni)) : createCommentVNode("", true)
            ]))), 128))
          ], 6))), 128))
        ])) : createCommentVNode("", true),
        e.FINAL_CONFIG.plot.labels.show && t.mutableConfig.dataLabels.show ? (openBlock(), createElementBlock("g", mi, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("g", {
            key: `xLabel_plot_${o}`,
            class: normalizeClass(`xLabel_plot_${o}`),
            style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
              key: `xLabel_plot_${o}_${d}`
            }, [
              n && !Object.hasOwn(a, "dataLabels") || a.dataLabels === true || t.selectedSerieIndex !== null && t.selectedSerieIndex === d || t.selectedMinimapIndex !== null && t.selectedMinimapIndex === d ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: n.x,
                y: n.y + e.FINAL_CONFIG.plot.labels.offsetY,
                "text-anchor": "middle",
                "font-size": t.fontSizes.plotLabels,
                fill: e.FINAL_CONFIG.plot.labels.color
              }, toDisplayString(e.canShowValue(n.value) ? e.applyDataLabel(
                e.FINAL_CONFIG.plot.labels.formatter,
                n.value,
                e.dataLabel({
                  p: a.prefix || e.FINAL_CONFIG.chart.labels.prefix,
                  v: n.value,
                  s: a.suffix || e.FINAL_CONFIG.chart.labels.suffix,
                  r: e.FINAL_CONFIG.plot.labels.rounding
                }),
                {
                  datapoint: n,
                  serie: a
                }
              ) : ""), 9, Ii)) : createCommentVNode("", true),
              n && d === 0 && a.useTag && a.useTag === "start" ? (openBlock(), createElementBlock("foreignObject", {
                key: 1,
                x: n.x,
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${t.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, xi)) : createCommentVNode("", true),
              n && d === a.plots.length - 1 && a.useTag && a.useTag === "end" ? (openBlock(), createElementBlock("foreignObject", {
                key: 2,
                x: n.x - a.name.length * (t.fontSizes.plotLabels / 2),
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${t.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, bi)) : createCommentVNode("", true)
            ]))), 128))
          ], 6))), 128))
        ])) : createCommentVNode("", true),
        e.FINAL_CONFIG.line.labels.show && t.mutableConfig.dataLabels.show ? (openBlock(), createElementBlock("g", Fi, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
            key: `xLabel_line_${o}`,
            class: normalizeClass(`xLabel_line_${o}`),
            style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
              key: `xLabel_line_${o}_${d}`
            }, [
              n && !Object.hasOwn(a, "dataLabels") || a.dataLabels === true || t.selectedSerieIndex !== null && t.selectedSerieIndex === d || t.selectedMinimapIndex !== null && t.selectedMinimapIndex === d ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: n.x,
                y: n.y + (n.value >= 0 ? e.FINAL_CONFIG.line.labels.offsetY : -e.FINAL_CONFIG.line.labels.offsetY * 3),
                "text-anchor": "middle",
                "font-size": t.fontSizes.plotLabels,
                fill: e.FINAL_CONFIG.line.labels.color
              }, toDisplayString(e.canShowValue(n.value) ? e.applyDataLabel(
                e.FINAL_CONFIG.line.labels.formatter,
                n.value,
                e.dataLabel({
                  p: a.prefix || e.FINAL_CONFIG.chart.labels.prefix,
                  v: n.value,
                  s: a.suffix || e.FINAL_CONFIG.chart.labels.suffix,
                  r: e.FINAL_CONFIG.line.labels.rounding
                }),
                {
                  datapoint: n,
                  serie: a
                }
              ) : ""), 9, _i)) : createCommentVNode("", true),
              n && d === 0 && a.useTag && a.useTag === "start" ? (openBlock(), createElementBlock("foreignObject", {
                key: 1,
                x: n.x,
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${t.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, yi)) : createCommentVNode("", true),
              n && d === a.plots.length - 1 && a.useTag && a.useTag === "end" ? (openBlock(), createElementBlock("foreignObject", {
                key: 2,
                x: n.x - a.name.length * (t.fontSizes.plotLabels / 2),
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${t.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, Ai)) : createCommentVNode("", true)
            ]))), 128))
          ], 6))), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `xLabel_line_${o}`,
          class: normalizeClass(`xLabel_line_${o}`),
          style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
            key: `xLabel_line_${o}_${d}`
          }, [
            n && d === 0 && a.showSerieName && a.showSerieName === "start" ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: n.x - t.fontSizes.plotLabels,
              y: n.y,
              "font-size": t.fontSizes.plotLabels,
              "text-anchor": "end",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: t.fontSizes.plotLabels,
                fill: a.color,
                x: n.x - t.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, Ci)) : createCommentVNode("", true),
            n && d === a.plots.length - 1 && a.showSerieName && a.showSerieName === "end" ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: n.x + t.fontSizes.plotLabels,
              y: n.y,
              "font-size": t.fontSizes.plotLabels,
              "text-anchor": "start",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: t.fontSizes.plotLabels,
                fill: a.color,
                x: n.x + t.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, Li)) : createCommentVNode("", true)
          ]))), 128))
        ], 6))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `xLabel_plot_${o}`,
          class: normalizeClass(`xLabel_plot_${o}`),
          style: normalizeStyle(`opacity:${t.selectedScale ? t.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, d) => (openBlock(), createElementBlock("g", {
            key: `xLabel_plot_${o}_${d}`
          }, [
            n && d === 0 && a.showSerieName && a.showSerieName === "start" ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: n.x - t.fontSizes.plotLabels,
              y: n.y,
              "font-size": t.fontSizes.plotLabels,
              "text-anchor": "end",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: t.fontSizes.plotLabels,
                fill: a.color,
                x: n.x - t.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, Si)) : createCommentVNode("", true),
            n && d === a.plots.length - 1 && a.showSerieName && a.showSerieName === "end" ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: n.x + t.fontSizes.plotLabels,
              y: n.y,
              "font-size": t.fontSizes.plotLabels,
              "text-anchor": "start",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: t.fontSizes.plotLabels,
                fill: a.color,
                x: n.x + t.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, ki)) : createCommentVNode("", true)
          ]))), 128))
        ], 6))), 128)),
        t.mutableConfig.useIndividualScale && !t.mutableConfig.isStacked ? (openBlock(true), createElementBlock(Fragment, { key: 8 }, renderList(e.allScales, (a) => (openBlock(), createElementBlock("rect", {
          x: a.x - e.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth,
          y: e.drawingArea.top,
          width: e.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth,
          height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
          fill: t.selectedScale === a.id ? e.setOpacity(a.color, 20) : "transparent",
          onMouseenter: (o) => t.selectedScale = a.id,
          onMouseleave: s2[0] || (s2[0] = (o) => t.selectedScale = null)
        }, null, 40, wi))), 256)) : createCommentVNode("", true),
        createBaseVNode("g", null, [
          e.FINAL_CONFIG.chart.grid.labels.axis.yLabel && !t.mutableConfig.useIndividualScale ? (openBlock(), createElementBlock("text", {
            key: 0,
            "font-size": t.fontSizes.yAxis,
            fill: e.FINAL_CONFIG.chart.grid.labels.color,
            transform: `translate(${t.fontSizes.yAxis + e.FINAL_CONFIG.chart.grid.labels.axis.yLabelOffsetX}, ${e.drawingArea.top + e.drawingArea.height / 2}) rotate(-90)`,
            "text-anchor": "middle",
            style: { transition: "none" }
          }, toDisplayString(e.FINAL_CONFIG.chart.grid.labels.axis.yLabel), 9, Oi)) : createCommentVNode("", true),
          e.FINAL_CONFIG.chart.grid.labels.axis.xLabel ? (openBlock(), createElementBlock("text", {
            key: 1,
            "text-anchor": "middle",
            x: t.width / 2,
            y: e.drawingArea.bottom + t.fontSizes.yAxis + t.fontSizes.xAxis * 1.3 + e.FINAL_CONFIG.chart.grid.labels.axis.xLabelOffsetY,
            "font-size": t.fontSizes.yAxis,
            fill: e.FINAL_CONFIG.chart.grid.labels.color
          }, toDisplayString(e.FINAL_CONFIG.chart.grid.labels.axis.xLabel), 9, Gi)) : createCommentVNode("", true)
        ]),
        e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.show ? (openBlock(), createElementBlock("g", vi, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.timeLabels, (a, o) => (openBlock(), createElementBlock("g", {
            key: `time_label_${o}`
          }, [
            a && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo || a && e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && (o === 0 || o === e.timeLabels.length - 1) && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo || a && e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && t.selectedSerieIndex === o && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo || a && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo && o % Math.floor((this.slicer.end - this.slicer.start) / e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.modulo) === 0 ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.rotation > 0 ? "start" : e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.rotation < 0 ? "end" : "middle",
              "font-size": t.fontSizes.xAxis,
              fill: e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.color,
              transform: `translate(${e.drawingArea.left + e.drawingArea.width / e.maxSeries * o + e.drawingArea.width / e.maxSeries / 2}, ${e.drawingArea.bottom + t.fontSizes.xAxis * 1.3 + e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.yOffset}), rotate(${e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.rotation})`
            }, toDisplayString(a || ""), 9, pi)) : createCommentVNode("", true)
          ]))), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.maxSeries, (a, o) => (openBlock(), createElementBlock("g", {
            key: `tooltip_trap_${o}`
          }, [
            createBaseVNode("rect", {
              "data-cy-trap": "",
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * o,
              y: e.drawingArea.top,
              height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
              width: e.drawingArea.width / e.maxSeries < 0 ? 1e-5 : e.drawingArea.width / e.maxSeries,
              fill: "transparent",
              onMouseenter: (n) => e.toggleTooltipVisibility(true, o),
              onMouseleave: s2[1] || (s2[1] = (n) => e.toggleTooltipVisibility(false)),
              onClick: (n) => e.selectX(o)
            }, null, 40, Mi)
          ]))), 128))
        ]),
        e.FINAL_CONFIG.chart.timeTag.show && (![null, void 0].includes(t.selectedSerieIndex) || ![null, void 0].includes(t.selectedMinimapIndex)) ? (openBlock(), createElementBlock("g", zi, [
          (openBlock(), createElementBlock("foreignObject", {
            x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * ((t.selectedSerieIndex !== null ? t.selectedSerieIndex : 0) || (t.selectedMinimapIndex !== null ? t.selectedMinimapIndex : 0)) - 100 + e.drawingArea.width / e.maxSeries / 2,
            y: e.drawingArea.bottom,
            width: "200",
            height: "40",
            style: { overflow: "visible !important" }
          }, [
            createBaseVNode("div", {
              class: "vue-ui-xy-time-tag",
              style: normalizeStyle(`width: fit-content;margin: 0 auto;text-align:center;padding:3px 12px;background:${e.FINAL_CONFIG.chart.timeTag.backgroundColor};color:${e.FINAL_CONFIG.chart.timeTag.color};font-size:${e.FINAL_CONFIG.chart.timeTag.fontSize}px`)
            }, toDisplayString(e.timeLabels[(t.selectedSerieIndex !== null ? t.selectedSerieIndex : 0) || (t.selectedMinimapIndex !== null ? t.selectedMinimapIndex : 0)] || (t.selectedSerieIndex !== null ? t.selectedSerieIndex : 0) || (t.selectedMinimapIndex !== null ? t.selectedMinimapIndex : 0)), 5)
          ], 8, Ti)),
          createBaseVNode("circle", {
            cx: e.drawingArea.left + e.drawingArea.width / e.maxSeries * ((t.selectedSerieIndex !== null ? t.selectedSerieIndex : 0) || (t.selectedMinimapIndex !== null ? t.selectedMinimapIndex : 0)) + e.drawingArea.width / e.maxSeries / 2,
            cy: e.drawingArea.bottom,
            r: e.FINAL_CONFIG.chart.timeTag.circleMarker.radius,
            fill: e.FINAL_CONFIG.chart.timeTag.circleMarker.color
          }, null, 8, Pi)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      renderSlot(i.$slots, "svg", { svg: e.svg }, void 0, true)
    ], 14, Je2)) : createCommentVNode("", true),
    i.$slots.watermark ? (openBlock(), createElementBlock("div", Vi, [
      renderSlot(i.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: t.isPrinting || t.isImaging })), void 0, true)
    ])) : createCommentVNode("", true),
    e.isDataset ? createCommentVNode("", true) : (openBlock(), createBlock(T, {
      key: 6,
      config: {
        type: "line",
        style: {
          backgroundColor: e.FINAL_CONFIG.chart.backgroundColor,
          line: {
            axis: {
              color: e.FINAL_CONFIG.chart.grid.stroke
            },
            path: {
              color: e.FINAL_CONFIG.chart.grid.stroke,
              strokeWidth: 0.5
            }
          }
        }
      }
    }, null, 8, ["config"])),
    e.FINAL_CONFIG.chart.zoom.show && t.maxX > 6 && e.isDataset ? (openBlock(), createBlock(v, {
      ref: "chartSlicer",
      key: `slicer_${t.slicerStep}`,
      background: e.FINAL_CONFIG.chart.zoom.color,
      fontSize: e.FINAL_CONFIG.chart.zoom.fontSize,
      useResetSlot: e.FINAL_CONFIG.chart.zoom.useResetSlot,
      labelLeft: e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values[t.slicer.start],
      labelRight: e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values[t.slicer.end - 1],
      textColor: e.FINAL_CONFIG.chart.color,
      inputColor: e.FINAL_CONFIG.chart.zoom.color,
      selectColor: e.FINAL_CONFIG.chart.zoom.highlightColor,
      borderColor: e.FINAL_CONFIG.chart.backgroundColor,
      minimap: e.minimap,
      smoothMinimap: e.FINAL_CONFIG.chart.zoom.minimap.smooth,
      minimapSelectedColor: e.FINAL_CONFIG.chart.zoom.minimap.selectedColor,
      minimapSelectionRadius: e.FINAL_CONFIG.chart.zoom.minimap.selectionRadius,
      minimapLineColor: e.FINAL_CONFIG.chart.zoom.minimap.lineColor,
      minimapSelectedColorOpacity: e.FINAL_CONFIG.chart.zoom.minimap.selectedColorOpacity,
      minimapSelectedIndex: t.selectedSerieIndex,
      minimapIndicatorColor: e.FINAL_CONFIG.chart.zoom.minimap.indicatorColor,
      max: t.maxX,
      min: 0,
      valueStart: t.slicer.start,
      valueEnd: t.slicer.end,
      start: t.slicer.start,
      "onUpdate:start": s2[2] || (s2[2] = (a) => t.slicer.start = a),
      end: t.slicer.end,
      "onUpdate:end": s2[3] || (s2[3] = (a) => t.slicer.end = a),
      onReset: e.refreshSlicer,
      onTrapMouse: e.selectMinimapIndex
    }, {
      "reset-action": withCtx(({ reset: a }) => [
        renderSlot(i.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: a })), void 0, true)
      ]),
      _: 3
    }, 8, ["background", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "borderColor", "minimap", "smoothMinimap", "minimapSelectedColor", "minimapSelectionRadius", "minimapLineColor", "minimapSelectedColorOpacity", "minimapSelectedIndex", "minimapIndicatorColor", "max", "valueStart", "valueEnd", "start", "end", "onReset", "onTrapMouse"])) : createCommentVNode("", true),
    e.FINAL_CONFIG.chart.legend.show ? (openBlock(), createElementBlock("div", {
      key: 8,
      ref: "chartLegend",
      class: "vue-ui-xy-legend",
      style: normalizeStyle(`font-size:${e.FINAL_CONFIG.chart.legend.fontSize}px`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e.absoluteDataset, (a, o) => (openBlock(), createElementBlock("div", {
        key: `div_legend_item_${o}`,
        onClick: (n) => e.segregate(a),
        class: normalizeClass({ "vue-ui-xy-legend-item": true, "vue-ui-xy-legend-item-segregated": t.segregatedSeries.includes(a.id) })
      }, [
        t.icons[a.type] === "line" ? (openBlock(), createElementBlock("svg", Di, [
          createBaseVNode("rect", {
            x: "0",
            y: "7",
            rx: "3",
            stroke: "none",
            height: "4",
            width: "20",
            fill: a.color
          }, null, 8, Bi),
          createVNode(b, {
            plot: { x: 10, y: 9 },
            radius: 4,
            color: a.color,
            shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle",
            stroke: e.FINAL_CONFIG.chart.backgroundColor,
            strokeWidth: 1
          }, null, 8, ["color", "shape", "stroke"])
        ])) : (openBlock(), createElementBlock("svg", Hi, [
          t.icons[a.type] === "bar" ? (openBlock(), createElementBlock("rect", {
            key: 0,
            x: "0",
            y: "0",
            rx: "1",
            height: "12",
            width: "12",
            stroke: "none",
            fill: a.color
          }, null, 8, Wi)) : (openBlock(), createBlock(b, {
            key: 1,
            plot: { x: 6, y: 6 },
            radius: 5,
            color: a.color,
            shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle"
          }, null, 8, ["color", "shape"]))
        ])),
        createBaseVNode("span", {
          style: normalizeStyle(`color:${e.FINAL_CONFIG.chart.legend.color}`)
        }, toDisplayString(a.name), 5)
      ], 10, Ri))), 128))
    ], 4)) : (openBlock(), createElementBlock("div", Ei, [
      renderSlot(i.$slots, "legend", { legend: e.absoluteDataset }, void 0, true)
    ], 512)),
    i.$slots.source ? (openBlock(), createElementBlock("div", Yi, [
      renderSlot(i.$slots, "source", {}, void 0, true)
    ], 512)) : createCommentVNode("", true),
    createVNode(p2, {
      show: t.mutableConfig.showTooltip && t.isTooltip,
      backgroundColor: e.FINAL_CONFIG.chart.tooltip.backgroundColor,
      color: e.FINAL_CONFIG.chart.tooltip.color,
      fontSize: e.FINAL_CONFIG.chart.tooltip.fontSize,
      borderRadius: e.FINAL_CONFIG.chart.tooltip.borderRadius,
      borderColor: e.FINAL_CONFIG.chart.tooltip.borderColor,
      borderWidth: e.FINAL_CONFIG.chart.tooltip.borderWidth,
      backgroundOpacity: e.FINAL_CONFIG.chart.tooltip.backgroundOpacity,
      position: e.FINAL_CONFIG.chart.tooltip.position,
      offsetY: e.FINAL_CONFIG.chart.tooltip.offsetY,
      parent: i.$refs.chart,
      content: e.tooltipContent,
      isCustom: e.FINAL_CONFIG.chart.tooltip.customFormat && typeof e.FINAL_CONFIG.chart.tooltip.customFormat == "function"
    }, {
      "tooltip-before": withCtx(() => [
        renderSlot(i.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...e.dataTooltipSlot })), void 0, true)
      ]),
      "tooltip-after": withCtx(() => [
        renderSlot(i.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...e.dataTooltipSlot })), void 0, true)
      ]),
      _: 3
    }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
    e.isDataset ? (openBlock(), createBlock(M, {
      key: 11,
      hideDetails: "",
      config: {
        open: t.mutableConfig.showTable,
        maxHeight: 1e4,
        body: {
          backgroundColor: e.FINAL_CONFIG.chart.backgroundColor,
          color: e.FINAL_CONFIG.chart.color
        },
        head: {
          backgroundColor: e.FINAL_CONFIG.chart.backgroundColor,
          color: e.FINAL_CONFIG.chart.color
        }
      }
    }, {
      content: withCtx(() => [
        createBaseVNode("div", {
          style: normalizeStyle(`${t.isPrinting ? "" : "max-height:400px"};overflow:auto;width:100%;margin-top:48px`)
        }, [
          createBaseVNode("div", Xi, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              "onUpdate:modelValue": s2[4] || (s2[4] = (a) => t.showSparklineTable = a)
            }, null, 512), [
              [vModelCheckbox, t.showSparklineTable]
            ]),
            createBaseVNode("div", {
              onClick: s2[5] || (s2[5] = (a) => t.showSparklineTable = !t.showSparklineTable),
              style: { cursor: "pointer" }
            }, [
              createVNode(w, {
                name: "chartLine",
                size: 20,
                stroke: e.FINAL_CONFIG.chart.color
              }, null, 8, ["stroke"])
            ])
          ]),
          t.showSparklineTable ? (openBlock(), createBlock(_, {
            key: `sparkline_${t.segregateStep}`,
            dataset: e.tableSparklineDataset,
            config: e.tableSparklineConfig
          }, null, 8, ["dataset", "config"])) : (openBlock(), createBlock(L, {
            key: `table_${t.tableStep}`,
            colNames: e.dataTable.colNames,
            head: e.dataTable.head,
            body: e.dataTable.body,
            config: e.dataTable.config,
            title: `${e.FINAL_CONFIG.chart.title.text}${e.FINAL_CONFIG.chart.title.subtitle.text ? ` : ${e.FINAL_CONFIG.chart.title.subtitle.text}` : ""}`,
            onClose: s2[6] || (s2[6] = (a) => t.mutableConfig.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", { innerHTML: a }, null, 8, qi)
            ]),
            td: withCtx(({ td: a }) => [
              createTextVNode(toDisplayString(isNaN(Number(a)) ? a : e.dataLabel({
                p: e.FINAL_CONFIG.chart.labels.prefix,
                v: a,
                s: e.FINAL_CONFIG.chart.labels.suffix,
                r: e.FINAL_CONFIG.table.rounding
              })), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ], 4)
      ]),
      _: 1
    }, 8, ["config"])) : createCommentVNode("", true)
  ], 14, Ue2);
}
var ha = s(qe, [["render", Ui], ["__scopeId", "data-v-3b05da9c"]]);
export {
  ha as default
};
//# sourceMappingURL=vue-ui-xy-Drm1aAb--H3UUAC6J.js.map
