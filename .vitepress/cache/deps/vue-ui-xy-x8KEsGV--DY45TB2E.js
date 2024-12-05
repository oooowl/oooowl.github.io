import {
  Ze
} from "./chunk-N5EA7RNE.js";
import "./chunk-LKTBRWPS.js";
import {
  _e
} from "./chunk-2OITSM6Y.js";
import {
  E,
  N
} from "./chunk-57X6EWGW.js";
import "./chunk-NF5J7GNE.js";
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
  ie
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
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  $t,
  Et,
  Ge,
  Gt,
  Ht,
  Jt,
  K,
  Kt,
  Lt,
  Nt,
  Ot,
  Qe,
  R as R2,
  Rt,
  Wt,
  Xt,
  Yt,
  at,
  cr,
  et,
  ht,
  j,
  k,
  lr,
  mt,
  nr,
  oe,
  or,
  pt,
  sr,
  tr,
  vt,
  xt,
  yt
} from "./chunk-TG4LWCJY.js";
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-xy-x8KEsGV-.js
var Be = Lt();
var Ye = {
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
    UserOptions: ie,
    BaseIcon: u,
    TableSparkline: Ze,
    Skeleton: fs,
    Slicer: _e,
    Accordion: R,
    PackageVersion: p
  },
  data() {
    this.dataset.forEach((c2, N2) => {
      [null, void 0].includes(c2.series) && this.error({
        componentName: "VueUiXy",
        type: "datasetSerieAttribute",
        property: "series (number[])",
        index: N2
      });
    });
    const t = Math.max(...this.dataset.map((c2) => c2.series.length)), s2 = {
      start: 0,
      end: t
    };
    return {
      themePalettes: R2,
      themes: Ge,
      slicerStep: 0,
      selectedScale: null,
      CTX: null,
      CANVAS: null,
      opacity: K,
      useSafeValues: true,
      palette: et,
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
      uniqueId: Lt(),
      step: 0,
      tableStep: 0,
      titleStep: 0,
      slicer: s2,
      __to__: null,
      maxX: t,
      showSparklineTable: true,
      segregateStep: 0,
      sliderId: Be,
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
      handler(t, s2) {
        this.maxX = Math.max(...this.dataset.map((c2) => c2.series.length)), this.slicer = {
          start: 0,
          end: this.maxX
        }, this.slicerStep += 1, this.segregateStep += 1;
      },
      deep: true
    },
    config: {
      handler(t, s2) {
        this.FINAL_CONFIG = this.prepareConfig(), this.prepareChart(), this.titleStep += 1, this.tableStep += 1;
      },
      deep: true
    }
  },
  computed: {
    minimap() {
      if (!this.FINAL_CONFIG.chart.zoom.minimap.show) return [];
      const t = this.datasetWithIds.filter((i) => !this.segregatedSeries.includes(i.id)), s2 = Math.max(...t.map((i) => i.series.length)), c2 = [];
      for (let i = 0; i < s2; i += 1)
        c2.push(t.map((e) => e.series[i] || 0).reduce((e, x2) => (e || 0) + (x2 || 0), 0));
      const N2 = Math.min(...c2);
      return c2.map((i) => i + (N2 < 0 ? Math.abs(N2) : 0));
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
      const t = this.lineSet.map((i) => ({
        name: i.name,
        color: i.color,
        scale: i.individualScale,
        scaleYLabels: i.scaleYLabels,
        zero: i.zeroPosition,
        max: i.individualMax,
        scaleLabel: i.scaleLabel || "",
        id: i.id,
        yOffset: i.yOffset || 0,
        individualHeight: i.individualHeight || this.drawingArea.height,
        autoScaleYLabels: i.autoScaleYLabels
      })), s2 = this.barSet.map((i) => ({
        name: i.name,
        color: i.color,
        scale: i.individualScale,
        scaleYLabels: i.scaleYLabels,
        zero: i.zeroPosition,
        max: i.individualMax,
        scaleLabel: i.scaleLabel || "",
        id: i.id,
        yOffset: i.yOffset || 0,
        individualHeight: i.individualHeight || this.drawingArea.height
      })), c2 = this.plotSet.map((i) => ({
        name: i.name,
        color: i.color,
        scale: i.individualScale,
        scaleYLabels: i.scaleYLabels,
        // FIX
        zero: i.zeroPosition,
        max: i.individualMax,
        scaleLabel: i.scaleLabel || "",
        id: i.id,
        yOffset: i.yOffset || 0,
        individualHeight: i.individualHeight || this.drawingArea.height
      })), N2 = [...t, ...s2, ...c2].flatMap((i) => i).length;
      return [...t, ...s2, ...c2].flatMap((i, e) => ({
        id: i.id,
        scaleLabel: i.scaleLabel,
        name: i.name,
        color: i.color,
        scale: i.scale,
        yOffset: i.yOffset,
        individualHeight: i.individualHeight,
        x: this.mutableConfig.isStacked ? this.drawingArea.left : this.drawingArea.left / N2 * (e + 1),
        yLabels: i.scaleYLabels || i.scale.ticks.map((x2) => ({
          y: x2 >= 0 ? i.zero - i.individualHeight * (x2 / i.max) : i.zero + i.individualHeight * Math.abs(x2) / i.max,
          value: x2
        }))
      }));
    },
    isDataset() {
      return !!this.dataset && this.dataset.length;
    },
    chartFont() {
      const t = document.getElementById(`vue-ui-xy_${this.uniqueId}`);
      return window.getComputedStyle(t, null).getPropertyValue("font-family");
    },
    FINAL_CONFIG: {
      get: function() {
        return this.prepareConfig();
      },
      set: function(t) {
        return t;
      }
    },
    hasHighlightArea() {
      return Array.isArray(this.FINAL_CONFIG.chart.highlightArea) ? this.FINAL_CONFIG.chart.highlightArea.some((t) => t.show) : this.FINAL_CONFIG.chart.highlightArea && this.FINAL_CONFIG.chart.highlightArea.show;
    },
    highlightAreas() {
      if (Array.isArray(this.FINAL_CONFIG.chart.highlightArea))
        return this.FINAL_CONFIG.chart.highlightArea.map((s2) => ({
          ...s2,
          span: s2.from === s2.to ? 1 : s2.to < s2.from ? 0 : s2.to - s2.from + 1
        }));
      const t = this.FINAL_CONFIG.chart.highlightArea;
      return [{ ...t, span: t.from === t.to ? 1 : t.to < t.from ? 0 : t.to - t.from + 1 }];
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
      return this.useSafeValues ? this.dataset.map((t, s2) => ({
        ...t,
        id: `uniqueId_${s2}`
      })) : this.dataset;
    },
    safeDataset() {
      return this.useSafeValues ? this.dataset.map((t, s2) => ({
        ...t,
        series: t.series.map((c2) => this.isSafeValue(c2) ? c2 : null).slice(this.slicer.start, this.slicer.end),
        color: this.convertColorToHex(t.color ? t.color : this.customPalette[s2] ? this.customPalette[s2] : this.palette[s2]),
        id: `uniqueId_${s2}`
      })) : this.dataset;
    },
    relativeDataset() {
      return this.safeDataset.map((t, s2) => ({
        ...t,
        series: t.series.map((c2) => c2 + this.relativeZero),
        absoluteValues: t.series
      })).filter((t) => !this.segregatedSeries.includes(t.id));
    },
    tableSparklineDataset() {
      return this.relativeDataset.map((t) => {
        const s2 = t.absoluteValues.map((c2) => [void 0, null].includes(c2) ? 0 : c2);
        return {
          id: t.id,
          name: t.name,
          color: t.color,
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
      return this.safeDataset.map((t, s2) => ({
        absoluteIndex: s2,
        ...t,
        series: t.series.map((c2) => c2 + this.relativeZero),
        absoluteValues: t.series,
        segregate: () => this.segregate(t),
        isSegregated: this.segregatedSeries.includes(t.id)
      }));
    },
    barSet() {
      return this.activeSeriesWithStackRatios.filter((t) => t.type === "bar").map((t, s2) => {
        this.checkAutoScaleError(t);
        const c2 = Math.min(...t.absoluteValues.filter((d) => ![null, void 0].includes(d))), N2 = Math.max(...t.absoluteValues.filter((d) => ![null, void 0].includes(d))), e = {
          ratios: t.absoluteValues.filter((d) => ![null, void 0].includes(d)).map((d) => (d - c2) / (N2 - c2)),
          valueMin: c2,
          valueMax: N2 < 0 ? 0 : N2
        }, x2 = {
          max: t.scaleMax || Math.max(...t.absoluteValues) || 1,
          min: t.scaleMin || Math.min(...t.absoluteValues.filter((d) => ![void 0, null].includes(d))) > 0 ? 0 : Math.min(...t.absoluteValues.filter((d) => ![null, void 0].includes(d)))
        }, _ = t.scaleSteps || this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps, k2 = 1.0000001, f = this.calculateNiceScaleWithExactExtremes(x2.min, x2.max === x2.min ? x2.max * k2 : x2.max, _), L = this.calculateNiceScaleWithExactExtremes(e.valueMin, e.valueMax === e.valueMin ? e.valueMax * k2 : e.valueMax, _), M = f.min >= 0 ? 0 : Math.abs(f.min), w = 0, p2 = f.max + M, v = L.max + Math.abs(w), F = this.mutableConfig.isStacked ? this.drawingArea.height * (1 - t.cumulatedStackRatio) : 0, C = this.mutableConfig.isStacked ? this.drawingArea.height * t.stackRatio - this.FINAL_CONFIG.chart.grid.labels.yAxis.gap : this.drawingArea.height, a = this.drawingArea.bottom - F - C * M / p2, o = this.drawingArea.bottom - F - C * w / v, n = this.absoluteDataset.filter((d) => d.type === "bar").filter((d) => !this.segregatedSeries.includes(d.id)).length, u2 = t.series.map((d, b) => {
          const H = this.mutableConfig.useIndividualScale ? (t.absoluteValues[b] + M) / p2 : this.ratioToMax(d), E2 = this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? this.drawingArea.left + this.drawingArea.width / this.maxSeries * b : this.drawingArea.left + this.slot.bar * s2 + this.slot.bar * b * n - this.barSlot / 2 - s2 * this.barPeriodGap;
          return {
            yOffset: this.checkNaN(F),
            individualHeight: this.checkNaN(C),
            x: this.checkNaN(E2),
            y: this.drawingArea.bottom - F - C * H,
            value: t.absoluteValues[b],
            zeroPosition: this.checkNaN(a),
            individualMax: this.checkNaN(p2),
            comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[b] || ""
          };
        }), W2 = t.absoluteValues.map((d) => L.min >= 0 ? (d - Math.abs(L.min)) / (L.max - Math.abs(L.min)) : (d + Math.abs(L.min)) / (L.max + Math.abs(L.min))), D = t.series.map((d, b) => {
          const H = this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? this.drawingArea.left + this.drawingArea.width / this.maxSeries * b : this.drawingArea.left - this.slot.bar / 2 + this.slot.bar * s2 + this.slot.bar * b * this.absoluteDataset.filter((E2) => E2.type === "bar").filter((E2) => !this.segregatedSeries.includes(E2.id)).length;
          return {
            yOffset: this.checkNaN(F),
            individualHeight: this.checkNaN(C),
            x: this.checkNaN(H),
            y: this.checkNaN(this.drawingArea.bottom - this.checkNaN(F) - (this.checkNaN(C) * W2[b] || 0)),
            value: t.absoluteValues[b],
            zeroPosition: this.checkNaN(a),
            individualMax: this.checkNaN(p2),
            comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[b] || ""
          };
        }), y = f.ticks.map((d) => ({
          y: d >= 0 ? a - C * (d / p2) : a + C * Math.abs(d) / p2,
          value: d,
          prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
          suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix,
          datapoint: t
        })), O = L.ticks.map((d) => {
          const b = (d - L.min) / (L.max - L.min);
          return {
            y: d >= 0 ? o - C * b : o + C * b,
            value: d,
            prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
            suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix,
            datapoint: t
          };
        });
        return {
          ...t,
          yOffset: F,
          autoScaleYLabels: O,
          individualHeight: C,
          scaleYLabels: t.autoScaling ? O : y,
          individualScale: t.autoScaling ? L : f,
          individualMax: t.autoScaling ? v : p2,
          zeroPosition: t.autoScaling ? o : a,
          plots: t.autoScaling ? D : u2
        };
      });
    },
    activeSeriesLength() {
      return this.absoluteDataset.length;
    },
    activeSeriesWithStackRatios() {
      return this.assignStackRatios(this.absoluteDataset.filter((t) => !this.segregatedSeries.includes(t.id)));
    },
    lineSet() {
      return this.activeSeriesWithStackRatios.filter((t) => t.type === "line").map((t) => {
        this.checkAutoScaleError(t);
        const s2 = Math.min(...t.absoluteValues.filter((d) => ![void 0, null].includes(d))), c2 = Math.max(...t.absoluteValues.filter((d) => ![void 0, null].includes(d))) || 1, i = {
          ratios: t.absoluteValues.filter((d) => ![null, void 0].includes(d)).map((d) => (d - s2) / (c2 - s2)),
          valueMin: s2,
          valueMax: c2
        }, e = {
          max: t.scaleMax || Math.max(...t.absoluteValues) || 1,
          min: t.scaleMin || (Math.min(...t.absoluteValues) > 0 ? 0 : Math.min(...t.absoluteValues))
        }, x2 = t.scaleSteps || this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps, _ = 1.0000001, k2 = this.calculateNiceScaleWithExactExtremes(e.min, e.max === e.min ? e.max * _ : e.max, x2), f = this.calculateNiceScaleWithExactExtremes(i.valueMin, i.valueMax === i.valueMin ? i.valueMax * _ : i.valueMax, x2), L = k2.min >= 0 ? 0 : Math.abs(k2.min), M = 0, w = k2.max + Math.abs(L), p2 = f.max + Math.abs(M), v = this.mutableConfig.isStacked ? this.drawingArea.height * (1 - t.cumulatedStackRatio) : 0, F = this.mutableConfig.isStacked ? this.drawingArea.height * t.stackRatio - this.FINAL_CONFIG.chart.grid.labels.yAxis.gap : this.drawingArea.height, C = this.drawingArea.bottom - v - F * L / w, a = this.drawingArea.bottom - v - F * M / p2, o = t.series.map((d, b) => {
          const H = this.mutableConfig.useIndividualScale ? (t.absoluteValues[b] + Math.abs(L)) / w : this.ratioToMax(d);
          return {
            x: this.checkNaN(this.drawingArea.left + this.slot.line / 2 + this.slot.line * b),
            y: this.checkNaN(this.drawingArea.bottom - v - F * H),
            value: t.absoluteValues[b],
            comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[b] || ""
          };
        }), n = t.absoluteValues.map((d) => f.min >= 0 ? (d - Math.abs(f.min)) / (f.max - Math.abs(f.min)) : (d + Math.abs(f.min)) / (f.max + Math.abs(f.min))), u2 = t.series.map((d, b) => [void 0, null].includes(t.absoluteValues[b]) ? {
          x: this.checkNaN(this.drawingArea.left + this.slot.line / 2 + this.slot.line * b),
          y: C,
          value: t.absoluteValues[b],
          comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[b] || ""
        } : {
          x: this.checkNaN(this.drawingArea.left + this.slot.line / 2 + this.slot.line * b),
          y: this.checkNaN(this.drawingArea.bottom - v - (F * n[b] || 0)),
          value: t.absoluteValues[b],
          comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[b] || ""
        }), W2 = this.createSmoothPath(o), D = this.createSmoothPath(u2), y = k2.ticks.map((d) => ({
          y: d >= 0 ? C - F * (d / w) : C + F * Math.abs(d) / w,
          value: d,
          prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
          suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix,
          datapoint: t
        })), O = f.ticks.map((d) => {
          const b = (d - f.min) / (f.max - f.min);
          return {
            y: d >= 0 ? a - F * b : a + F * b,
            value: d,
            prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
            suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix,
            datapoint: t
          };
        });
        return {
          ...t,
          yOffset: v,
          autoScaleYLabels: O,
          individualHeight: F,
          scaleYLabels: t.autoScaling ? O : y,
          individualScale: t.autoScaling ? f : k2,
          individualMax: t.autoScaling ? p2 : w,
          zeroPosition: t.autoScaling ? a : C,
          curve: t.autoScaling ? D : W2,
          plots: t.autoScaling ? u2 : o,
          area: t.useArea ? this.mutableConfig.useIndividualScale ? this.createIndividualArea(t.autoScaling ? u2 : o, t.autoScaling ? a : C) : this.createArea(o) : ""
        };
      });
    },
    plotSet() {
      return this.activeSeriesWithStackRatios.filter((t) => t.type === "plot").map((t) => {
        this.checkAutoScaleError(t);
        const s2 = Math.min(...t.absoluteValues.filter((y) => ![null, void 0].includes(y))), c2 = Math.max(...t.absoluteValues.filter((y) => ![null, void 0].includes(y))) || 1, i = {
          ratios: t.absoluteValues.filter((y) => ![null, void 0].includes(y)).map((y) => (y - s2) / (c2 - s2)),
          valueMin: s2,
          valueMax: c2
        }, e = {
          max: t.scaleMax || Math.max(...t.absoluteValues) || 1,
          min: t.scaleMin || Math.min(...t.absoluteValues) > 0 ? 0 : Math.min(...t.absoluteValues)
        }, x2 = t.scaleSteps || this.FINAL_CONFIG.chart.grid.labels.yAxis.commonScaleSteps, _ = 1.0000001, k2 = this.calculateNiceScaleWithExactExtremes(e.min, e.max === e.min ? e.max * _ : e.max, x2), f = this.calculateNiceScaleWithExactExtremes(i.valueMin, i.valueMax === i.valueMin ? i.valueMax * _ : i.valueMax, x2), L = k2.min >= 0 ? 0 : Math.abs(k2.min), M = 0, w = k2.max + L, p2 = f.max + Math.abs(M), v = this.mutableConfig.isStacked ? this.drawingArea.height * (1 - t.cumulatedStackRatio) : 0, F = this.mutableConfig.isStacked ? this.drawingArea.height * t.stackRatio - this.FINAL_CONFIG.chart.grid.labels.yAxis.gap : this.drawingArea.height, C = this.drawingArea.bottom - v - F * L / w, a = this.drawingArea.bottom - v - F * M / p2, o = t.series.map((y, O) => {
          const d = this.mutableConfig.useIndividualScale ? (t.absoluteValues[O] + Math.abs(L)) / w : this.ratioToMax(y);
          return {
            x: this.checkNaN(this.drawingArea.left + this.slot.plot / 2 + this.slot.plot * O),
            y: this.checkNaN(this.drawingArea.bottom - v - F * d),
            value: t.absoluteValues[O],
            comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[O] || ""
          };
        }), n = t.absoluteValues.map((y) => f.min >= 0 ? (y - Math.abs(f.min)) / (f.max - Math.abs(f.min)) : (y + Math.abs(f.min)) / (f.max + Math.abs(f.min))), u2 = t.series.map((y, O) => ({
          x: this.checkNaN(this.drawingArea.left + this.slot.plot / 2 + this.slot.plot * O),
          y: this.checkNaN(this.drawingArea.bottom - v - (F * n[O] || 0)),
          value: t.absoluteValues[O],
          comment: t.comments && t.comments.slice(this.slicer.start, this.slicer.end)[O] || ""
        })), W2 = k2.ticks.map((y) => ({
          y: y >= 0 ? C - F * (y / w) : C + F * Math.abs(y) / w,
          value: y,
          prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
          suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix,
          datapoint: t
        })), D = f.ticks.map((y) => {
          const O = (y - f.min) / (f.max - f.min);
          return {
            y: y >= 0 ? a - F * O : a + F * O,
            value: y,
            prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
            suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix,
            datapoint: t
          };
        });
        return {
          ...t,
          yOffset: v,
          autoScaleYLabels: D,
          individualHeight: F,
          scaleYLabels: t.autoScaling ? D : W2,
          individualScale: t.autoScaling ? f : k2,
          individualMax: t.autoScaling ? p2 : w,
          zeroPosition: t.autoScaling ? a : C,
          plots: t.autoScaling ? u2 : o
        };
      });
    },
    drawingArea() {
      const t = this.mutableConfig.useIndividualScale && this.FINAL_CONFIG.chart.grid.labels.show ? this.absoluteDataset.filter((s2) => !this.segregatedSeries.includes(s2.id)).length * (this.mutableConfig.isStacked ? 0 : this.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth) : 0;
      return {
        top: this.FINAL_CONFIG.chart.padding.top,
        right: this.width - this.FINAL_CONFIG.chart.padding.right,
        bottom: this.height - this.FINAL_CONFIG.chart.padding.bottom,
        left: this.FINAL_CONFIG.chart.padding.left + t,
        height: this.height - (this.FINAL_CONFIG.chart.padding.top + this.FINAL_CONFIG.chart.padding.bottom),
        width: this.width - (this.FINAL_CONFIG.chart.padding.right + this.FINAL_CONFIG.chart.padding.left + t)
      };
    },
    max() {
      return this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMax ? this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMax : Math.max(...this.safeDataset.filter((t) => !this.segregatedSeries.includes(t.id)).map((t) => Math.max(...t.series)));
    },
    min() {
      if (this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMin !== null)
        return this.FINAL_CONFIG.chart.grid.labels.yAxis.scaleMin;
      const t = Math.min(...this.safeDataset.filter((s2) => !this.segregatedSeries.includes(s2.id)).map((s2) => Math.min(...s2.series)));
      return t > 0 ? 0 : t;
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
        bar: this.drawingArea.width / this.maxSeries / this.safeDataset.filter((t) => t.type === "bar").filter((t) => !this.segregatedSeries.includes(t.id)).length,
        plot: this.drawingArea.width / this.maxSeries,
        line: this.drawingArea.width / this.maxSeries
      };
    },
    barSlot() {
      const t = this.safeDataset.filter((s2) => s2.type === "bar").filter((s2) => !this.segregatedSeries.includes(s2.id)).length;
      return this.drawingArea.width / this.maxSeries / t - this.barPeriodGap * t;
    },
    barPeriodGap() {
      return this.slot.line * this.FINAL_CONFIG.bar.periodGap;
    },
    maxSlot() {
      return Math.max(...Object.values(this.slot).filter((t) => t !== 1 / 0));
    },
    table() {
      if (this.safeDataset.length === 0) return { head: [], body: [], config: {}, columnNames: [] };
      const t = this.relativeDataset.map((c2) => ({
        label: c2.name,
        color: c2.color,
        type: c2.type
      })), s2 = [];
      return this.timeLabels.forEach((c2, N2) => {
        const i = [c2];
        this.relativeDataset.forEach((e) => {
          i.push(this.canShowValue(e.absoluteValues[N2]) ? Number(e.absoluteValues[N2].toFixed(this.FINAL_CONFIG.table.rounding)) : "");
        }), s2.push(i);
      }), { head: t, body: s2 };
    },
    dataTable() {
      const t = this.FINAL_CONFIG.table.showSum;
      let s2 = [""].concat(this.relativeDataset.map((e) => e.name));
      t && (s2 = s2.concat(' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>'));
      let c2 = [];
      for (let e = 0; e < this.maxSeries; e += 1) {
        const x2 = this.relativeDataset.map((_) => _.absoluteValues[e] ?? 0).reduce((_, k2) => _ + k2, 0);
        c2.push(
          [
            this.timeLabels[e] ?? "-"
          ].concat(this.relativeDataset.map(
            (_) => this.applyDataLabel(
              _.type === "line" ? this.FINAL_CONFIG.line.labels.formatter : _.type === "bar" ? this.FINAL_CONFIG.bar.labels.formatter : this.FINAL_CONFIG.plot.labels.formatter,
              _.absoluteValues[e] ?? 0,
              this.dataLabel({
                p: _.prefix || this.FINAL_CONFIG.chart.labels.prefix,
                v: _.absoluteValues[e] ?? 0,
                s: _.suffix || this.FINAL_CONFIG.chart.labels.suffix,
                r: this.FINAL_CONFIG.table.rounding
              })
            )
          )).concat(t ? (x2 ?? 0).toFixed(this.FINAL_CONFIG.table.rounding) : [])
        );
      }
      const N2 = {
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
      }, i = [this.FINAL_CONFIG.table.columnNames.period].concat(this.relativeDataset.map((e) => e.name)).concat(this.FINAL_CONFIG.table.columnNames.total);
      return { head: s2, body: c2, config: N2, colNames: i };
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
      return this.relativeDataset.map((t) => ({
        shape: t.shape || null,
        name: t.name,
        color: t.color,
        type: t.type,
        value: t.absoluteValues.find((s2, c2) => c2 === this.selectedSerieIndex),
        comments: t.comments || [],
        prefix: t.prefix || this.FINAL_CONFIG.chart.labels.prefix,
        suffix: t.suffix || this.FINAL_CONFIG.chart.labels.suffix
      }));
    },
    tooltipContent() {
      let t = "", s2 = this.selectedSeries.map((i) => i.value).filter((i) => this.isSafeValue(i) && i !== null).reduce((i, e) => Math.abs(i) + Math.abs(e), 0);
      const c2 = this.timeLabels[this.selectedSerieIndex], N2 = this.FINAL_CONFIG.chart.tooltip.customFormat;
      return this.isFunction(N2) && this.functionReturnsString(() => N2({
        seriesIndex: this.selectedSerieIndex,
        datapoint: this.selectedSeries,
        series: this.absoluteDataset,
        bars: this.barSet,
        lines: this.lineSet,
        plots: this.plotSet,
        config: this.FINAL_CONFIG
      })) ? N2({
        seriesIndex: this.selectedSerieIndex,
        datapoint: this.selectedSeries,
        series: this.absoluteDataset,
        bars: this.barSet,
        lines: this.lineSet,
        plots: this.plotSet,
        config: this.FINAL_CONFIG
      }) : (c2 && (t += `<div style="padding-bottom: 6px; margin-bottom: 4px; border-bottom: 1px solid ${this.FINAL_CONFIG.chart.tooltip.borderColor}; width:100%">${c2}</div>`), this.selectedSeries.forEach((i) => {
        if (this.isSafeValue(i.value)) {
          let e = "", x2 = "";
          switch (this.icons[i.type]) {
            case "bar":
              e = `<svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" rx="1" stroke="none" height="12" width="12" fill="${i.color}" /></svg>`;
              break;
            case "line":
              !i.shape || !["star", "triangle", "square", "diamond", "pentagon", "hexagon"].includes(i.shape) ? x2 = `<circle cx="10" cy="8" r="4" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${i.color}" />` : i.shape === "triangle" ? x2 = `<path d="${mt({ plot: { x: 10, y: 8 }, radius: 4, sides: 3, rotation: 0.52 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : i.shape === "square" ? x2 = `<path d="${mt({ plot: { x: 10, y: 8 }, radius: 4, sides: 4, rotation: 0.8 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : i.shape === "diamond" ? x2 = `<path d="${mt({ plot: { x: 10, y: 8 }, radius: 4, sides: 4, rotation: 0 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : i.shape === "pentagon" ? x2 = `<path d="${mt({ plot: { x: 10, y: 8 }, radius: 4, sides: 5, rotation: 0.95 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : i.shape === "hexagon" ? x2 = `<path d="${mt({ plot: { x: 10, y: 8 }, radius: 4, sides: 6, rotation: 0 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" />` : i.shape === "star" && (x2 = `<polygon stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${i.color}" points="${yt({ plot: { x: 10, y: 8 }, radius: 4 })}" />`), e = `<svg viewBox="0 0 20 12" height="14" width="20"><rect rx="3" x="0" y="6" stroke="none" height="4" width="20" fill="${i.color}" />${x2}</svg>`;
              break;
            case "plot":
              if (!i.shape || !["star", "triangle", "square", "diamond", "pentagon", "hexagon"].includes(i.shape)) {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${i.color}" /></svg>`;
                break;
              }
              if (i.shape === "star") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><polygon stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" fill="${i.color}" points="${yt({ plot: { x: 6, y: 6 }, radius: 5 })}" /></svg>`;
                break;
              }
              if (i.shape === "triangle") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${mt({ plot: { x: 6, y: 6 }, radius: 6, sides: 3, rotation: 0.52 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (i.shape === "square") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${mt({ plot: { x: 6, y: 6 }, radius: 6, sides: 4, rotation: 0.8 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (i.shape === "diamond") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${mt({ plot: { x: 6, y: 6 }, radius: 5, sides: 4, rotation: 0 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (i.shape === "pentagon") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${mt({ plot: { x: 6, y: 6 }, radius: 5, sides: 5, rotation: 0.95 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
              if (i.shape === "hexagon") {
                e = `<svg viewBox="0 0 12 12" height="14" width="14"><path d="${mt({ plot: { x: 6, y: 6 }, radius: 5, sides: 6, rotation: 0 }).path}" fill="${i.color}" stroke="${this.FINAL_CONFIG.chart.tooltip.backgroundColor}" stroke-width="1" /></svg>`;
                break;
              }
          }
          t += `<div style="display:flex;flex-direction:row; align-items:center;gap:3px;"><div style="width:20px">${e}</div> ${i.name}: <b>${this.FINAL_CONFIG.chart.tooltip.showValue ? this.applyDataLabel(
            i.type === "line" ? this.FINAL_CONFIG.line.labels.formatter : i.type === "bar" ? this.FINAL_CONFIG.bar.labels.formatter : this.FINAL_CONFIG.plot.labels.formatter,
            i.value,
            this.dataLabel({
              p: i.prefix,
              v: i.value,
              s: i.suffix,
              r: this.FINAL_CONFIG.chart.tooltip.roundingValue
            }),
            { datapoint: i }
          ) : ""}</b> ${this.FINAL_CONFIG.chart.tooltip.showPercentage ? `(${Gt({
            v: this.checkNaN(Math.abs(i.value) / s2 * 100),
            s: "%",
            r: this.FINAL_CONFIG.chart.tooltip.roundingPercentage
          })})` : ""}</div>`, this.FINAL_CONFIG.chart.comments.showInTooltip && i.comments.length && i.comments.slice(this.slicer.start, this.slicer.end)[this.selectedSerieIndex] && (t += `<div class="vue-data-ui-tooltip-comment" style="background:${i.color}20; padding: 6px; margin-bottom: 6px; border-left: 1px solid ${i.color}">${i.comments.slice(this.slicer.start, this.slicer.end)[this.selectedSerieIndex]}</div>`);
        }
      }), `<div style="border-radius:4px;padding:12px;font-variant-numeric: tabular-nums;color:${this.FINAL_CONFIG.chart.tooltip.color}">${t}</div>`);
    },
    svg() {
      return {
        height: this.height,
        width: this.width
      };
    },
    yLabels() {
      return this.niceScale.ticks.map((t) => ({
        y: t >= 0 ? this.zero - this.drawingArea.height * this.ratioToMax(t) : this.zero + this.drawingArea.height * this.ratioToMax(Math.abs(t)),
        value: t,
        prefix: this.FINAL_CONFIG.chart.labels.prefix,
        suffix: this.FINAL_CONFIG.chart.labels.suffix
      }));
    },
    zero() {
      return this.drawingArea.bottom - this.drawingArea.height * this.ratioToMax(this.relativeZero);
    }
  },
  mounted() {
    this.prepareChart(), document.addEventListener("mousemove", (t) => {
      this.clientPosition = {
        x: t.clientX,
        y: t.clientY
      };
    });
  },
  methods: {
    abbreviate: Yt,
    adaptColorToBackground: xt,
    applyDataLabel: nr,
    assignStackRatios: tr,
    calcLinearProgression: Et,
    calculateNiceScaleWithExactExtremes: Wt,
    checkNaN: k,
    closestDecimal: Rt,
    convertColorToHex: j,
    convertConfigColors: at,
    convertCustomPalette: or,
    createCsvContent: Nt,
    createSmoothPath: vt,
    createTSpans: Jt,
    dataLabel: Gt,
    downloadCsv: Ot,
    error: Kt,
    functionReturnsString: $t,
    hasDeepProperty: sr,
    isFunction: Ht,
    isSafeValue: ht,
    objectIsEmpty: Xt,
    setOpacity: cr,
    shiftHue: pt,
    translateSize: lr,
    treeShake: Qe,
    useMouse: N,
    useNestedProp: c,
    getHighlightAreaPosition(t) {
      const s2 = this.drawingArea.left + this.drawingArea.width / this.maxSeries * (t.from - this.slicer.start), c2 = this.drawingArea.width / (this.slicer.end - this.slicer.start) * t.span < 0 ? 1e-5 : this.drawingArea.width / (this.slicer.end - this.slicer.start) * t.span;
      return {
        x: s2 < this.drawingArea.left ? this.drawingArea.left : s2,
        width: c2
      };
    },
    prepareConfig() {
      const t = oe().vue_ui_xy;
      if (!Object.keys(this.config || {}).length)
        return t;
      const s2 = this.useNestedProp({
        userConfig: this.config,
        defaultConfig: t
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
      }) : this.dataset.forEach((t, s2) => {
        [null, void 0].includes(t.name) && this.error({
          componentName: "VueUiXy",
          type: "datasetSerieAttribute",
          property: "name (string)",
          index: s2
        });
      }), this.FINAL_CONFIG.showWarnings && this.dataset.forEach((t) => {
        t.series.forEach((s2, c2) => {
          this.isSafeValue(s2) || console.warn(`VueUiXy has detected an unsafe value in your dataset:
-----> The serie '${t.name}' contains the value '${s2}' at index ${c2}.
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
        const s2 = this.$refs.chart.parentNode, { height: c2, width: N2 } = s2.getBoundingClientRect();
        let i = null, e = 0;
        this.FINAL_CONFIG.chart.title.show && (i = this.$refs.chartTitle, e = i.getBoundingClientRect().height);
        let x2 = null, _ = 0;
        this.FINAL_CONFIG.chart.zoom.show && this.maxX > 6 && this.isDataset && (x2 = this.$refs.chartSlicer.$el, _ = x2.getBoundingClientRect().height);
        let k2 = null, f = 0;
        this.FINAL_CONFIG.chart.legend.show && (k2 = this.$refs.chartLegend, f = k2.getBoundingClientRect().height), this.height = c2 - e - f - _, this.width = N2, this.viewBox = `0 0 ${this.width < 0 ? 10 : this.width} ${this.height < 0 ? 10 : this.height}`, this.convertSizes(), new ResizeObserver((M) => {
          for (const w of M)
            this.$refs.chartTitle && (e = this.$refs.chartTitle.getBoundingClientRect().height), this.$refs.chartSlicer && this.$refs.chartSlicer.$el && (_ = this.$refs.chartSlicer.$el.getBoundingClientRect().height), this.$refs.chartLegend && (f = this.$refs.chartLegend.getBoundingClientRect().height), this.height = w.contentBoxSize[0].blockSize - e - f - _ - 24, this.width = w.contentBoxSize[0].inlineSize, this.viewBox = `0 0 ${this.width < 0 ? 10 : this.width} ${this.height < 0 ? 10 : this.height}`, this.convertSizes();
        }).observe(s2);
      } else
        this.height = this.FINAL_CONFIG.chart.height, this.width = this.FINAL_CONFIG.chart.width, this.viewBox = `0 0 ${this.width} ${this.height}`, this.fontSizes.dataLabels = this.FINAL_CONFIG.chart.grid.labels.fontSize, this.fontSizes.yAxis = this.FINAL_CONFIG.chart.grid.labels.axis.fontSize, this.fontSizes.xAxis = this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.fontSize, this.fontSizes.plotLabels = this.FINAL_CONFIG.chart.labels.fontSize, this.plotRadii.plot = this.FINAL_CONFIG.plot.radius, this.plotRadii.line = this.FINAL_CONFIG.line.radius;
    },
    selectMinimapIndex(t) {
      this.selectedMinimapIndex = t;
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
    checkAutoScaleError(t) {
      t.autoScaling && (this.FINAL_CONFIG.chart.grid.labels.yAxis.useIndividualScale || console.warn(`VueUiXy (datapoint: ${t.name}) : autoScaling only works when config.chart.grid.labels.yAxis.useIndividualScale is set to true`), this.FINAL_CONFIG.chart.grid.labels.yAxis.stacked || console.warn(`VueUiXy (datapoint: ${t.name}) : autoScaling only works when config.chart.grid.labels.yAxis.stacked is set to true`));
    },
    createArea(t) {
      if (!t[0]) return [-10, -10, "", -10, -10];
      const s2 = { x: t[0].x, y: this.zero }, c2 = { x: t.at(-1).x, y: this.zero }, N2 = [];
      return t.forEach((i) => {
        N2.push(`${i.x},${i.y} `);
      }), [s2.x, s2.y, ...N2, c2.x, c2.y].toString();
    },
    createIndividualArea(t, s2) {
      if (!t[0]) return [-10, -10, "", -10, -10];
      const c2 = { x: t[0] ? t[0].x : Math.min(...t.filter((e) => !!e).map((e) => e.x)), y: s2 }, N2 = { x: t.at(-1) ? t.at(-1).x : Math.min(...t.filter((e) => !!e).map((e) => e.x)), y: s2 }, i = [];
      return t.filter((e) => !!e).forEach((e) => {
        i.push(`${e.x},${e.y} `);
      }), [c2.x, c2.y, ...i, N2.x, N2.y].toString();
    },
    createStar: yt,
    createPolygonPath: mt,
    fillArray(t, s2) {
      let c2 = Array(t).fill(0);
      for (let N2 = 0; N2 < s2.length && N2 < t; N2 += 1)
        c2[N2] = s2[N2];
      return c2;
    },
    refreshSlicer() {
      this.slicer = {
        start: 0,
        end: Math.max(...this.dataset.map((t) => t.series.length))
      }, this.slicerStep += 1;
    },
    calcRectHeight(t) {
      return t.value >= 0 ? this.checkNaN(this.zero - t.y <= 0 ? 1e-5 : this.zero - t.y) : this.checkNaN(t.y - this.zero <= 0 ? 1e-5 : t.y - this.zero);
    },
    calcIndividualHeight(t) {
      return t.value >= 0 ? this.checkNaN(t.zeroPosition - t.y <= 0 ? 1e-5 : t.zeroPosition - t.y) : this.checkNaN(t.y - t.zeroPosition <= 0 ? 1e-5 : t.zeroPosition - t.y);
    },
    calcRectWidth() {
      return this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? this.slot.line - this.drawingArea.width / this.maxSeries * 0.1 : this.slot.bar;
    },
    calcRectX(t) {
      return this.mutableConfig.useIndividualScale && this.mutableConfig.isStacked ? t.x + this.drawingArea.width / this.maxSeries * 0.05 : t.x + this.slot.bar / 2;
    },
    calcRectY(t) {
      return t.value >= 0 ? t.y : this.zero;
    },
    calcIndividualRectY(t) {
      return t.value >= 0 ? t.y : [null, void 0, NaN, 1 / 0, -1 / 0].includes(t.zeroPosition) ? 0 : t.zeroPosition;
    },
    canShowValue(t) {
      return ![null, void 0, NaN, 1 / 0, -1 / 0].includes(t);
    },
    findClosestValue(t, s2) {
      let c2 = s2[0], N2 = Math.abs(t - s2[0]);
      for (let i = 1; i < s2.length; i += 1) {
        const e = Math.abs(t - s2[i]);
        e < N2 && s2[i] < t && (c2 = s2[i], N2 = e);
      }
      return c2;
    },
    ratioToMax(t) {
      return t / (this.canShowValue(this.absoluteMax) ? this.absoluteMax : 1);
    },
    selectX(t) {
      this.$emit(
        "selectX",
        {
          dataset: this.relativeDataset.map((s2) => ({
            name: s2.name,
            value: [null, void 0, NaN].includes(s2.absoluteValues[t]) ? null : s2.absoluteValues[t],
            color: s2.color,
            type: s2.type
          })),
          index: t,
          indexLabel: this.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values[t]
        }
      );
    },
    getData() {
      return this.absoluteDataset.map((t) => ({
        values: t.absoluteValues,
        color: t.color,
        name: t.name,
        type: t.type
      }));
    },
    segregate(t) {
      if (this.segregatedSeries.includes(t.id))
        this.segregatedSeries = this.segregatedSeries.filter((s2) => s2 !== t.id);
      else {
        if (this.segregatedSeries.length + 1 === this.safeDataset.length) return;
        this.segregatedSeries.push(t.id);
      }
      this.$emit("selectLegend", this.relativeDataset.map((s2) => ({
        name: s2.name,
        values: s2.absoluteValues,
        color: s2.color,
        type: s2.type
      }))), this.segregateStep += 1;
    },
    toggleTooltipVisibility(t, s2 = null) {
      this.isTooltip = t, t ? this.selectedSerieIndex = s2 : this.selectedSerieIndex = null;
    },
    toggleFullscreen(t) {
      this.isFullscreen = t, this.step += 1;
    },
    showSpinnerPdf() {
      this.isPrinting = true;
    },
    async generatePdf() {
      this.showSpinnerPdf(), clearTimeout(this.__to__), this.isPrinting = true, this.__to__ = setTimeout(async () => {
        try {
          const { default: t } = await import("./pdf-B7oVat64-W35DZM3E.js");
          await t({
            domElement: document.getElementById(`vue-ui-xy_${this.uniqueId}`),
            fileName: this.FINAL_CONFIG.chart.title.text || "vue-ui-xy"
          });
        } catch (t) {
          console.error("Error generating PDF:", t);
        } finally {
          this.isPrinting = false;
        }
      }, 100);
    },
    generateCsv() {
      const t = [[this.FINAL_CONFIG.chart.title.text], [this.FINAL_CONFIG.chart.title.subtitle.text], [""]], s2 = ["", ...this.table.head.map((e) => e.label)], c2 = this.table.body, N2 = t.concat([s2]).concat(c2), i = this.createCsvContent(N2);
      this.downloadCsv({ csvContent: i, title: this.FINAL_CONFIG.chart.title.text || "vue-ui-xy" });
    },
    showSpinnerImage() {
      this.isImaging = true;
    },
    async generateImage() {
      this.showSpinnerImage(), clearTimeout(this.__to__), this.isImaging = true, this.__to__ = setTimeout(async () => {
        try {
          const { default: t } = await import("./img-DGzWcJ4Y-J5AGXZ6C.js");
          await t({
            domElement: document.getElementById(`vue-ui-xy_${this.uniqueId}`),
            fileName: this.FINAL_CONFIG.chart.title.text || "vue-ui-xy",
            format: "png"
          });
        } catch (t) {
          console.error("Error generating image:", t);
        } finally {
          this.isImaging = false;
        }
      }, 100);
    }
  }
};
var Xe = ["id"];
var qe = ["viewBox"];
var Ue = { key: 0 };
var Ze2 = { class: "vue-ui-xy-grid" };
var Je = ["stroke", "x1", "x2", "y1", "y2"];
var Ke = ["stroke", "x1", "x2", "y1", "y2"];
var Qe2 = { key: 1 };
var je = ["x1", "x2", "y1", "y2", "stroke"];
var $e = ["x1", "x2", "y1", "y2", "stroke"];
var et2 = ["x1", "x2", "y1", "y2", "stroke"];
var tt = { key: 3 };
var at2 = ["x1", "x2", "y1", "y2", "stroke"];
var it = ["id"];
var rt = ["stop-color"];
var lt = ["stop-color"];
var st = ["stop-color"];
var nt = ["id"];
var ot = ["stop-color"];
var ct = ["stop-color"];
var ht2 = ["stop-color"];
var dt = ["id"];
var ut = ["stop-color"];
var gt = ["stop-color"];
var ft = ["id"];
var Nt2 = ["stop-color"];
var mt2 = ["stop-color"];
var It = ["id"];
var xt2 = ["stop-color"];
var bt = ["stop-color"];
var Ft = ["x", "y", "height", "width", "fill"];
var _t = ["x", "y", "width"];
var yt2 = ["x", "y", "height", "width", "fill"];
var At = ["x", "y", "height", "width", "rx", "fill", "stroke", "stroke-width"];
var Lt2 = ["width", "x", "y"];
var Ct = { key: 0 };
var St = ["id"];
var kt = ["fill"];
var wt = ["x1", "x2", "y1", "y2", "stroke", "marker-end"];
var Ot2 = ["x", "y", "font-size", "fill"];
var Gt2 = ["stroke", "x1", "x2", "y1", "y2"];
var vt2 = { key: 2 };
var pt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var zt = ["x", "y", "width", "height", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-dasharray"];
var Mt = { key: 4 };
var Pt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Tt = ["fill", "font-size", "transform"];
var Vt = ["x1", "x2", "y1", "y2", "stroke"];
var Rt2 = ["x", "y", "font-size", "fill"];
var Dt = ["x1", "x2", "y1", "y2", "stroke"];
var Wt2 = ["x", "y", "font-size", "fill"];
var Ht2 = ["width", "x", "y"];
var Et2 = { style: { width: "100%" } };
var Bt = { key: 0 };
var Yt2 = ["id"];
var Xt2 = ["fill"];
var qt = ["x1", "x2", "y1", "y2", "stroke", "marker-end"];
var Ut = ["x", "y", "font-size", "fill"];
var Zt = ["d", "stroke", "stroke-width", "stroke-dasharray"];
var Jt2 = { key: 1 };
var Kt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var Qt = { key: 0 };
var jt = ["d", "fill"];
var $t2 = ["d", "fill"];
var ea = ["d", "stroke", "stroke-width", "stroke-dasharray"];
var ta = { key: 2 };
var aa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var ia = ["width", "x", "y"];
var ra = { style: { width: "100%" } };
var la = { key: 3 };
var sa = ["id"];
var na = ["fill"];
var oa = ["x1", "x2", "y1", "y2", "stroke", "marker-end"];
var ca = ["x", "y", "font-size", "fill"];
var ha = { key: 5 };
var da = ["x", "y", "font-size", "fill"];
var ua = ["x", "y", "font-size", "fill", "font-weight"];
var ga = { key: 6 };
var fa = ["x", "y", "font-size", "fill"];
var Na = ["x", "y"];
var ma = ["x", "y"];
var Ia = { key: 7 };
var xa = ["x", "y", "font-size", "fill"];
var ba = ["x", "y"];
var Fa = ["x", "y"];
var _a = ["x", "y", "font-size", "fill", "innerHTML"];
var ya = ["x", "y", "font-size", "fill", "innerHTML"];
var Aa = ["x", "y", "font-size", "fill", "innerHTML"];
var La = ["x", "y", "font-size", "fill", "innerHTML"];
var Ca = ["x", "y", "width", "height", "fill", "onMouseenter"];
var Sa = ["font-size", "fill", "transform"];
var ka = ["x", "y", "font-size", "fill"];
var wa = { key: 9 };
var Oa = ["text-anchor", "font-size", "fill", "transform"];
var Ga = ["x", "y", "height", "width", "onMouseenter", "onClick"];
var va = { key: 10 };
var pa = ["x", "y"];
var za = ["cx", "cy", "r", "fill"];
var Ma = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Pa = ["onClick"];
var Ta = {
  key: 0,
  viewBox: "0 0 20 12",
  height: "14",
  width: "20"
};
var Va = ["fill"];
var Ra = {
  key: 1,
  viewBox: "0 0 12 12",
  height: "14",
  width: "14"
};
var Da = ["fill"];
var Wa = {
  key: 7,
  ref: "chartLegend"
};
var Ha = {
  style: { display: "flex", "flex-direction": "row", gap: "6px", "align-items": "center", "padding-left": "6px" },
  "data-html2canvas-ignore": ""
};
var Ea = ["innerHTML"];
function Ba(t, s2, c2, N2, i, e) {
  const x2 = resolveComponent("Title"), _ = resolveComponent("UserOptions"), k2 = resolveComponent("PackageVersion"), f = resolveComponent("Shape"), L = resolveComponent("Skeleton"), M = resolveComponent("Slicer"), w = resolveComponent("Tooltip"), p2 = resolveComponent("BaseIcon"), v = resolveComponent("TableSparkline"), F = resolveComponent("DataTable"), C = resolveComponent("Accordion");
  return openBlock(), createElementBlock("div", {
    id: `vue-ui-xy_${i.uniqueId}`,
    class: normalizeClass(`vue-ui-xy ${i.isFullscreen ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.FINAL_CONFIG.useCssAnimation ? "" : "vue-ui-dna"}`),
    ref: "chart",
    style: normalizeStyle(`background:${e.FINAL_CONFIG.chart.backgroundColor}; color:${e.FINAL_CONFIG.chart.color};width:100%;${e.FINAL_CONFIG.chart.title.text ? "" : "padding-top:36px"};font-family:${e.FINAL_CONFIG.chart.fontFamily};${e.FINAL_CONFIG.responsive ? "height: 100%" : ""}`)
  }, [
    e.FINAL_CONFIG.chart.title.show ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref: "chartTitle",
      class: "vue-ui-xy-title",
      style: normalizeStyle(`font-family:${e.FINAL_CONFIG.chart.fontFamily}`)
    }, [
      (openBlock(), createBlock(x2, {
        key: `title_${i.titleStep}`,
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
    e.FINAL_CONFIG.chart.userOptions.show && e.isDataset ? (openBlock(), createBlock(_, {
      ref: "defails",
      key: `user_options_${i.step}`,
      backgroundColor: e.FINAL_CONFIG.chart.backgroundColor,
      color: e.FINAL_CONFIG.chart.color,
      isPrinting: i.isPrinting,
      isImaging: i.isImaging,
      uid: i.uniqueId,
      hasTooltip: e.FINAL_CONFIG.chart.userOptions.buttons.tooltip && e.FINAL_CONFIG.chart.tooltip.show,
      hasPdf: e.FINAL_CONFIG.chart.userOptions.buttons.pdf,
      hasXls: e.FINAL_CONFIG.chart.userOptions.buttons.csv,
      hasImg: e.FINAL_CONFIG.chart.userOptions.buttons.img,
      hasLabel: e.FINAL_CONFIG.chart.userOptions.buttons.labels,
      hasTable: e.FINAL_CONFIG.chart.userOptions.buttons.table,
      hasStack: c2.dataset.length > 1 && e.FINAL_CONFIG.chart.userOptions.buttons.stack,
      hasFullscreen: e.FINAL_CONFIG.chart.userOptions.buttons.fullscreen,
      isStacked: i.mutableConfig.isStacked,
      isFullscreen: i.isFullscreen,
      chartElement: t.$refs.chart,
      position: e.FINAL_CONFIG.chart.userOptions.position,
      isTooltip: i.mutableConfig.showTooltip,
      titles: { ...e.FINAL_CONFIG.chart.userOptions.buttonTitles },
      onToggleFullscreen: e.toggleFullscreen,
      onGeneratePdf: e.generatePdf,
      onGenerateCsv: e.generateCsv,
      onGenerateImage: e.generateImage,
      onToggleTable: e.toggleTable,
      onToggleLabels: e.toggleLabels,
      onToggleStack: e.toggleStack,
      onToggleTooltip: e.toggleTooltip
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
      t.$slots.optionStack ? {
        name: "optionStack",
        fn: withCtx(() => [
          renderSlot(t.$slots, "optionStack", {}, void 0, true)
        ]),
        key: "6"
      } : void 0,
      t.$slots.optionFullscreen ? {
        name: "optionFullscreen",
        fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
          renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
        ]),
        key: "7"
      } : void 0
    ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasLabel", "hasTable", "hasStack", "hasFullscreen", "isStacked", "isFullscreen", "chartElement", "position", "isTooltip", "titles", "onToggleFullscreen", "onGeneratePdf", "onGenerateCsv", "onGenerateImage", "onToggleTable", "onToggleLabels", "onToggleStack", "onToggleTooltip"])) : createCommentVNode("", true),
    e.isDataset ? (openBlock(), createElementBlock("svg", {
      key: 2,
      xmlns: "http://www.w3.org/2000/svg",
      class: normalizeClass([{ "vue-data-ui-fullscreen--on": i.isFullscreen, "vue-data-ui-fulscreen--off": !i.isFullscreen }, "vue-ui-xy-svg"]),
      width: "100%",
      viewBox: i.viewBox,
      style: normalizeStyle(`background: transparent; color:${e.FINAL_CONFIG.chart.color}; font-family:${e.FINAL_CONFIG.chart.fontFamily}`)
    }, [
      createVNode(k2),
      e.maxSeries > 0 ? (openBlock(), createElementBlock("g", Ue, [
        createBaseVNode("g", Ze2, [
          e.FINAL_CONFIG.chart.grid.labels.xAxis.showBaseline ? (openBlock(), createElementBlock("line", {
            key: 0,
            stroke: e.FINAL_CONFIG.chart.grid.stroke,
            "stroke-width": "1",
            x1: e.drawingArea.left + e.xPadding,
            x2: e.drawingArea.right - e.xPadding,
            y1: e.drawingArea.bottom,
            y2: e.drawingArea.bottom,
            "stroke-linecap": "round"
          }, null, 8, Je)) : createCommentVNode("", true),
          i.mutableConfig.useIndividualScale ? e.FINAL_CONFIG.chart.grid.showHorizontalLines ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(e.allScales, (a) => (openBlock(), createElementBlock("g", null, [
            a.id === i.selectedScale && a.yLabels.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(a.yLabels, (o) => (openBlock(), createElementBlock("line", {
              x1: e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.right - e.xPadding,
              y1: e.checkNaN(o.y),
              y2: e.checkNaN(o.y),
              stroke: a.color,
              "stroke-width": 0.5,
              "stroke-linecap": "round"
            }, null, 8, $e))), 256)) : a.yLabels.length ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(a.yLabels, (o) => (openBlock(), createElementBlock("line", {
              x1: e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.right - e.xPadding,
              y1: e.checkNaN(o.y),
              y2: e.checkNaN(o.y),
              stroke: e.FINAL_CONFIG.chart.grid.stroke,
              "stroke-width": 0.5,
              "stroke-linecap": "round"
            }, null, 8, et2))), 256)) : createCommentVNode("", true)
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
            }, null, 8, Ke)) : createCommentVNode("", true),
            e.FINAL_CONFIG.chart.grid.showHorizontalLines ? (openBlock(), createElementBlock("g", Qe2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.yLabels, (a) => (openBlock(), createElementBlock("line", {
                x1: e.drawingArea.left + e.xPadding,
                x2: e.drawingArea.right - e.xPadding,
                y1: e.checkNaN(a.y),
                y2: e.checkNaN(a.y),
                stroke: e.FINAL_CONFIG.chart.grid.stroke,
                "stroke-width": 0.5,
                "stroke-linecap": "round"
              }, null, 8, je))), 256))
            ])) : createCommentVNode("", true)
          ], 64)),
          e.FINAL_CONFIG.chart.grid.showVerticalLines ? (openBlock(), createElementBlock("g", tt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.maxSeries + (e.FINAL_CONFIG.chart.grid.position === "middle" ? 1 : 0), (a, o) => (openBlock(), createElementBlock("line", {
              key: `grid_vertical_line_${o}`,
              x1: e.drawingArea.width / e.maxSeries * o + e.drawingArea.left + e.xPadding,
              x2: e.drawingArea.width / e.maxSeries * o + e.drawingArea.left + e.xPadding,
              y1: e.drawingArea.top,
              y2: e.drawingArea.bottom,
              "stroke-width": "0.5",
              stroke: e.FINAL_CONFIG.chart.grid.stroke
            }, null, 8, at2))), 128))
          ])) : createCommentVNode("", true)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.barSet, (a, o) => (openBlock(), createElementBlock("defs", {
          key: `def_rect_${o}`
        }, [
          createBaseVNode("linearGradient", {
            id: `rectGradient_pos_${o}_${i.uniqueId}`,
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": a.color
            }, null, 8, rt),
            createBaseVNode("stop", {
              offset: "62%",
              "stop-color": `${e.shiftHue(a.color, 0.02)}`
            }, null, 8, lt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, st)
          ], 8, it),
          createBaseVNode("linearGradient", {
            id: `rectGradient_neg_${o}_${i.uniqueId}`,
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, ot),
            createBaseVNode("stop", {
              offset: "38%",
              "stop-color": `${e.shiftHue(a.color, 0.02)}`
            }, null, 8, ct),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": a.color
            }, null, 8, ht2)
          ], 8, nt)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("defs", {
          key: `def_plot_${o}`
        }, [
          createBaseVNode("radialGradient", {
            id: `plotGradient_${o}_${i.uniqueId}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.shiftHue(a.color, 0.05)}`
            }, null, 8, ut),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": a.color
            }, null, 8, gt)
          ], 8, dt)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("defs", {
          key: `def_line_${o}`
        }, [
          createBaseVNode("radialGradient", {
            id: `lineGradient_${o}_${i.uniqueId}`,
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
            }, null, 8, mt2)
          ], 8, ft),
          createBaseVNode("linearGradient", {
            id: `areaGradient_${o}_${i.uniqueId}`,
            x1: "0%",
            x2: "100%",
            y1: "0%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": `${e.setOpacity(e.shiftHue(a.color, 0.03), e.FINAL_CONFIG.line.area.opacity)}`
            }, null, 8, xt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": `${e.setOpacity(a.color, e.FINAL_CONFIG.line.area.opacity)}`
            }, null, 8, bt)
          ], 8, It)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.highlightAreas, (a) => (openBlock(), createElementBlock("g", null, [
          a.show ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(a.span, (o, n) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("rect", {
              style: normalizeStyle({
                transition: "none",
                opacity: a.from + n >= i.slicer.start && a.from + n <= i.slicer.end - 1 ? 1 : 0
              }),
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * (a.from + n - i.slicer.start),
              y: e.drawingArea.top,
              height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
              width: e.drawingArea.width / e.maxSeries < 0 ? 1e-5 : e.drawingArea.width / e.maxSeries,
              fill: e.setOpacity(a.color, a.opacity)
            }, null, 12, Ft),
            a.caption.text && n === 0 ? (openBlock(), createElementBlock("foreignObject", {
              key: 0,
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * (a.from + n - i.slicer.start) - (a.caption.width === "auto" ? 0 : a.caption.width / 2 - e.drawingArea.width / e.maxSeries * a.span / 2),
              y: e.drawingArea.top + a.caption.offsetY,
              style: normalizeStyle({
                overflow: "visible",
                opacity: a.to >= i.slicer.start && a.from < i.slicer.end ? 1 : 0
              }),
              height: "1",
              width: a.caption.width === "auto" ? e.drawingArea.width / e.maxSeries * a.span : a.caption.width
            }, [
              createBaseVNode("div", {
                style: normalizeStyle(`padding:${a.caption.padding}px;text-align:${a.caption.textAlign};font-size:${a.caption.fontSize}px;color:${a.caption.color};font-weight:${a.caption.bold ? "bold" : "normal"}`)
              }, toDisplayString(a.caption.text), 5)
            ], 12, _t)) : createCommentVNode("", true)
          ]))), 256)) : createCommentVNode("", true)
        ]))), 256)),
        createBaseVNode("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.maxSeries, (a, o) => (openBlock(), createElementBlock("g", {
            key: `tooltip_trap_${o}`
          }, [
            createBaseVNode("rect", {
              x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * o,
              y: e.drawingArea.top,
              height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
              width: e.drawingArea.width / e.maxSeries < 0 ? 1e-5 : e.drawingArea.width / e.maxSeries,
              fill: [i.selectedMinimapIndex, i.selectedSerieIndex, i.selectedRowIndex].includes(o) ? e.setOpacity(e.FINAL_CONFIG.chart.highlighter.color, e.FINAL_CONFIG.chart.highlighter.opacity) : "transparent"
            }, null, 8, yt2)
          ]))), 128))
        ]),
        e.barSet.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.barSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_bar_${o}`,
          class: normalizeClass(`serie_bar_${o}`),
          style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
            key: `bar_plot_${o}_${u2}`
          }, [
            e.canShowValue(n.value) ? (openBlock(), createElementBlock("rect", {
              key: 0,
              x: e.calcRectX(n),
              y: i.mutableConfig.useIndividualScale ? e.calcIndividualRectY(n) : e.calcRectY(n),
              height: i.mutableConfig.useIndividualScale ? Math.abs(e.calcIndividualHeight(n)) : Math.abs(e.calcRectHeight(n)),
              width: e.calcRectWidth() - (i.mutableConfig.useIndividualScale && i.mutableConfig.isStacked ? 0 : e.barPeriodGap) < 0 ? 1e-5 : e.calcRectWidth() - (i.mutableConfig.useIndividualScale && i.mutableConfig.isStacked ? 0 : e.barPeriodGap),
              rx: e.FINAL_CONFIG.bar.borderRadius,
              fill: e.FINAL_CONFIG.bar.useGradient ? n.value >= 0 ? `url(#rectGradient_pos_${o}_${i.uniqueId})` : `url(#rectGradient_neg_${o}_${i.uniqueId})` : a.color,
              stroke: e.FINAL_CONFIG.bar.border.useSerieColor ? a.color : e.FINAL_CONFIG.bar.border.stroke,
              "stroke-width": e.FINAL_CONFIG.bar.border.strokeWidth
            }, null, 8, At)) : createCommentVNode("", true),
            n.comment && e.FINAL_CONFIG.chart.comments.show ? (openBlock(), createElementBlock("foreignObject", {
              key: 1,
              style: { overflow: "visible" },
              height: "12",
              width: (e.calcRectWidth() - (i.mutableConfig.useIndividualScale && i.mutableConfig.isStacked ? 0 : e.barPeriodGap) < 0 ? 1e-5 : e.calcRectWidth() - (i.mutableConfig.useIndividualScale && i.mutableConfig.isStacked ? 0 : e.barPeriodGap) / 2) + e.FINAL_CONFIG.chart.comments.width,
              x: e.calcRectX(n) - e.FINAL_CONFIG.chart.comments.width / 2 + e.FINAL_CONFIG.chart.comments.offsetX,
              y: e.checkNaN(n.y) + e.FINAL_CONFIG.chart.comments.offsetY + 6
            }, [
              renderSlot(t.$slots, "plot-comment", {
                plot: { ...n, color: a.color, seriesIndex: o, datapointIndex: u2 }
              }, void 0, true)
            ], 8, Lt2)) : createCommentVNode("", true)
          ]))), 128)),
          Object.hasOwn(a, "useProgression") && a.useProgression === true && !isNaN(e.calcLinearProgression(a.plots).trend) ? (openBlock(), createElementBlock("g", Ct, [
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
                }, null, 8, kt)
              ], 8, St)
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
            }, null, 8, wt)) : createCommentVNode("", true),
            a.plots.length > 1 ? (openBlock(), createElementBlock("text", {
              key: 1,
              "text-anchor": "middle",
              x: e.calcLinearProgression(a.plots).x2,
              y: e.calcLinearProgression(a.plots).y2 - 6,
              "font-size": i.fontSizes.plotLabels,
              fill: a.color
            }, toDisplayString(e.dataLabel({
              v: e.calcLinearProgression(a.plots).trend * 100,
              s: "%",
              r: 2
            })), 9, Ot2)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6))), 128)) : createCommentVNode("", true),
        !i.mutableConfig.useIndividualScale && e.FINAL_CONFIG.chart.grid.labels.zeroLine.show ? (openBlock(), createElementBlock("line", {
          key: 1,
          stroke: e.FINAL_CONFIG.chart.grid.stroke,
          "stroke-width": "1",
          x1: e.drawingArea.left + e.xPadding,
          x2: e.drawingArea.right - e.xPadding,
          y1: e.checkNaN(e.zero),
          y2: e.checkNaN(e.zero),
          "stroke-linecap": "round"
        }, null, 8, Gt2)) : createCommentVNode("", true),
        e.FINAL_CONFIG.chart.highlighter.useLine && (![null, void 0].includes(i.selectedSerieIndex) || i.selectedMinimapIndex !== null) ? (openBlock(), createElementBlock("g", vt2, [
          createBaseVNode("line", {
            x1: e.drawingArea.left + e.drawingArea.width / e.maxSeries * (i.selectedSerieIndex || i.selectedMinimapIndex) + e.drawingArea.width / e.maxSeries / 2,
            x2: e.drawingArea.left + e.drawingArea.width / e.maxSeries * (i.selectedSerieIndex || i.selectedMinimapIndex) + e.drawingArea.width / e.maxSeries / 2,
            y1: e.drawingArea.top,
            y2: e.drawingArea.bottom,
            stroke: e.FINAL_CONFIG.chart.highlighter.color,
            "stroke-width": e.FINAL_CONFIG.chart.highlighter.lineWidth,
            "stroke-dasharray": e.FINAL_CONFIG.chart.highlighter.lineDasharray,
            "stroke-linecap": "round",
            style: { transition: "none !important", animation: "none !important", "pointer-events": "none" }
          }, null, 8, pt2)
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
        }, null, 8, zt)) : createCommentVNode("", true),
        e.FINAL_CONFIG.chart.grid.labels.show ? (openBlock(), createElementBlock("g", Mt, [
          i.mutableConfig.useIndividualScale ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.allScales, (a) => (openBlock(), createElementBlock("g", null, [
              createBaseVNode("line", {
                x1: a.x + e.xPadding,
                x2: a.x + e.xPadding,
                y1: i.mutableConfig.isStacked ? e.checkNaN(e.drawingArea.bottom - a.yOffset - a.individualHeight) : e.checkNaN(e.drawingArea.top),
                y2: i.mutableConfig.isStacked ? e.checkNaN(e.drawingArea.bottom - a.yOffset) : e.checkNaN(e.drawingArea.bottom),
                stroke: a.color,
                "stroke-width": e.FINAL_CONFIG.chart.grid.stroke,
                "stroke-linecap": "round",
                style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.3 : 1};transition:opacity 0.2s ease-in-out`)
              }, null, 12, Pt)
            ]))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.allScales, (a) => (openBlock(), createElementBlock("g", {
              style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.3 : 1};transition:opacity 0.2s ease-in-out`)
            }, [
              createBaseVNode("text", {
                fill: a.color,
                "font-size": i.fontSizes.dataLabels,
                "text-anchor": "middle",
                transform: `translate(${a.x - e.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth + 5}, ${i.mutableConfig.isStacked ? e.drawingArea.bottom - a.yOffset - a.individualHeight / 2 : e.drawingArea.top + e.drawingArea.height / 2}) rotate(-90)`
              }, toDisplayString(a.name) + " " + toDisplayString(a.scaleLabel ? `- ${a.scaleLabel}` : ""), 9, Tt),
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.yLabels, (o, n) => (openBlock(), createElementBlock("line", {
                x1: a.x - 3 + e.xPadding,
                x2: a.x + e.xPadding,
                y1: e.checkNaN(o.y),
                y2: e.checkNaN(o.y),
                stroke: a.color,
                "stroke-width": 1,
                "stroke-linecap": "round"
              }, null, 8, Vt))), 256)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.yLabels, (o, n) => (openBlock(), createElementBlock("text", {
                x: a.x - 5 + e.xPadding,
                y: e.checkNaN(o.y) + i.fontSizes.dataLabels / 3,
                "font-size": i.fontSizes.dataLabels,
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
              )), 9, Rt2))), 256))
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
            }, null, 8, Dt)) : createCommentVNode("", true),
            a.value >= e.niceScale.min && a.value <= e.niceScale.max ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: e.drawingArea.left - 7 + e.xPadding,
              y: e.checkNaN(a.y + i.fontSizes.dataLabels / 3),
              "font-size": i.fontSizes.dataLabels,
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
            ) : ""), 9, Wt2)) : createCommentVNode("", true)
          ]))), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_plot_${o}`,
          class: normalizeClass(`serie_plot_${o}`),
          style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
            key: `circle_plot_${o}_${u2}`
          }, [
            n && e.canShowValue(n.value) ? (openBlock(), createBlock(f, {
              key: 0,
              shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle",
              color: e.FINAL_CONFIG.plot.useGradient ? `url(#plotGradient_${o}_${i.uniqueId})` : e.FINAL_CONFIG.plot.dot.useSerieColor ? a.color : e.FINAL_CONFIG.plot.dot.fill,
              plot: { x: e.checkNaN(n.x), y: e.checkNaN(n.y) },
              radius: i.selectedSerieIndex !== null && i.selectedSerieIndex === u2 || i.selectedMinimapIndex !== null && i.selectedMinimapIndex === u2 ? (i.plotRadii.plot || 6) * 1.5 : i.plotRadii.plot || 6,
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
              createBaseVNode("div", Et2, [
                renderSlot(t.$slots, "plot-comment", {
                  plot: { ...n, color: a.color, seriesIndex: o, datapointIndex: u2 }
                }, void 0, true)
              ])
            ], 8, Ht2)) : createCommentVNode("", true)
          ]))), 128)),
          Object.hasOwn(a, "useProgression") && a.useProgression === true && !isNaN(e.calcLinearProgression(a.plots).trend) ? (openBlock(), createElementBlock("g", Bt, [
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
                }, null, 8, Xt2)
              ], 8, Yt2)
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
            }, null, 8, qt)) : createCommentVNode("", true),
            a.plots.length > 1 ? (openBlock(), createElementBlock("text", {
              key: 1,
              "text-anchor": "middle",
              x: e.calcLinearProgression(a.plots).x2,
              y: e.calcLinearProgression(a.plots).y2 - 6,
              "font-size": i.fontSizes.plotLabels,
              fill: a.color
            }, toDisplayString(e.dataLabel({
              v: e.calcLinearProgression(a.plots).trend * 100,
              s: "%",
              r: 2
            })), 9, Ut)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_line_${o}`,
          class: normalizeClass(`serie_line_${o}`),
          style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          a.smooth && a.plots.length > 1 ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: `M${a.curve}`,
            stroke: e.FINAL_CONFIG.chart.backgroundColor,
            "stroke-width": e.FINAL_CONFIG.line.strokeWidth + 1,
            "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
            fill: "none"
          }, null, 8, Zt)) : a.plots.length > 1 ? (openBlock(), createElementBlock("g", Jt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
              key: `line_${o}_${u2}`
            }, [
              n && u2 < a.plots.length - 1 && a.plots[u2 + 1] && e.canShowValue(n.value) && e.canShowValue(a.plots[u2 + 1].value) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: n.x,
                x2: a.plots[u2 + 1].x,
                y1: n.y,
                y2: a.plots[u2 + 1].y,
                stroke: e.FINAL_CONFIG.chart.backgroundColor,
                "stroke-width": e.FINAL_CONFIG.line.strokeWidth + 1,
                "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
              }, null, 8, Kt2)) : createCommentVNode("", true)
            ]))), 128))
          ])) : createCommentVNode("", true)
        ], 6))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `serie_line_${o}`,
          class: normalizeClass(`serie_line_${o}`),
          style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          a.useArea && a.plots.length > 1 ? (openBlock(), createElementBlock("g", Qt, [
            a.smooth ? (openBlock(), createElementBlock("path", {
              key: 0,
              d: `M ${a.plots[0] ? a.plots[0].x : Math.min(...a.plots.filter((n) => !!n).map((n) => n.x))},${i.mutableConfig.isStacked ? e.drawingArea.bottom - a.yOffset : e.drawingArea.bottom} ${a.curve} L ${a.plots.at(-1) ? a.plots.at(-1).x : e.drawingArea.left + e.slot.line * o + e.slot.line / 2},${i.mutableConfig.isStacked ? e.drawingArea.bottom - a.yOffset : e.drawingArea.bottom} Z`,
              fill: e.FINAL_CONFIG.line.area.useGradient ? `url(#areaGradient_${o}_${i.uniqueId})` : e.setOpacity(a.color, e.FINAL_CONFIG.line.area.opacity)
            }, null, 8, jt)) : (openBlock(), createElementBlock("path", {
              key: 1,
              d: `M${a.area}Z`,
              fill: e.FINAL_CONFIG.line.area.useGradient ? `url(#areaGradient_${o}_${i.uniqueId})` : e.setOpacity(a.color, e.FINAL_CONFIG.line.area.opacity)
            }, null, 8, $t2))
          ])) : createCommentVNode("", true),
          a.smooth && a.plots.length > 1 ? (openBlock(), createElementBlock("path", {
            key: 1,
            d: `M${a.curve}`,
            stroke: a.color,
            "stroke-width": e.FINAL_CONFIG.line.strokeWidth,
            "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
            fill: "none"
          }, null, 8, ea)) : a.plots.length > 1 ? (openBlock(), createElementBlock("g", ta, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
              key: `line_${o}_${u2}`
            }, [
              n && u2 < a.plots.length - 1 && a.plots[u2 + 1] && e.canShowValue(n.value) && e.canShowValue(a.plots[u2 + 1].value) ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: n.x,
                x2: a.plots[u2 + 1].x,
                y1: n.y,
                y2: a.plots[u2 + 1].y,
                stroke: a.color,
                "stroke-width": e.FINAL_CONFIG.line.strokeWidth,
                "stroke-dasharray": a.dashed ? e.FINAL_CONFIG.line.strokeWidth * 2 : 0,
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
              }, null, 8, aa)) : createCommentVNode("", true)
            ]))), 128))
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
            key: `circle_line_${o}_${u2}`
          }, [
            n && e.canShowValue(n.value) ? (openBlock(), createBlock(f, {
              key: 0,
              shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle",
              color: e.FINAL_CONFIG.line.useGradient ? `url(#lineGradient_${o}_${i.uniqueId})` : e.FINAL_CONFIG.line.dot.useSerieColor ? a.color : e.FINAL_CONFIG.line.dot.fill,
              plot: { x: e.checkNaN(n.x), y: e.checkNaN(n.y) },
              radius: i.selectedSerieIndex !== null && i.selectedSerieIndex === u2 || i.selectedMinimapIndex !== null && i.selectedMinimapIndex === u2 ? (i.plotRadii.line || 6) * 1.5 : i.plotRadii.line || 6,
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
              createBaseVNode("div", ra, [
                renderSlot(t.$slots, "plot-comment", {
                  plot: { ...n, color: a.color, seriesIndex: o, datapointIndex: u2 }
                }, void 0, true)
              ])
            ], 8, ia)) : createCommentVNode("", true)
          ]))), 128)),
          Object.hasOwn(a, "useProgression") && a.useProgression === true && !isNaN(e.calcLinearProgression(a.plots).trend) ? (openBlock(), createElementBlock("g", la, [
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
                }, null, 8, na)
              ], 8, sa)
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
            }, null, 8, oa)) : createCommentVNode("", true),
            a.plots.length > 1 ? (openBlock(), createElementBlock("text", {
              key: 1,
              "text-anchor": "middle",
              x: e.calcLinearProgression(a.plots).x2,
              y: e.calcLinearProgression(a.plots).y2 - 6,
              "font-size": i.fontSizes.plotLabels,
              fill: a.color
            }, toDisplayString(e.dataLabel({
              v: e.calcLinearProgression(a.plots).trend * 100,
              s: "%",
              r: 2
            })), 9, ca)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6))), 128)),
        (e.FINAL_CONFIG.bar.labels.show || e.FINAL_CONFIG.bar.serieName.show) && i.mutableConfig.dataLabels.show ? (openBlock(), createElementBlock("g", ha, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.barSet, (a, o) => (openBlock(), createElementBlock("g", {
            key: `xLabel_bar_${o}`,
            class: normalizeClass(`xLabel_bar_${o}`),
            style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
              key: `xLabel_bar_${o}_${u2}`
            }, [
              n && (!Object.hasOwn(a, "dataLabels") || a.dataLabels === true) && e.FINAL_CONFIG.bar.labels.show ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: i.mutableConfig.useIndividualScale && i.mutableConfig.isStacked ? n.x + e.slot.line / 2 : e.calcRectX(n) + e.calcRectWidth() / 2 - e.barPeriodGap / 2,
                y: e.checkNaN(n.y) + (n.value > 0 ? e.FINAL_CONFIG.bar.labels.offsetY : -e.FINAL_CONFIG.bar.labels.offsetY * 3),
                "text-anchor": "middle",
                "font-size": i.fontSizes.plotLabels,
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
              ) : ""), 9, da)) : createCommentVNode("", true),
              n && e.FINAL_CONFIG.bar.serieName.show ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: i.mutableConfig.useIndividualScale && i.mutableConfig.isStacked ? n.x + e.slot.line / 2 : n.x + e.calcRectWidth() * 1.1,
                y: n.y + (n.value > 0 ? e.FINAL_CONFIG.bar.serieName.offsetY : -e.FINAL_CONFIG.bar.serieName.offsetY * 3),
                "text-anchor": "middle",
                "font-size": i.fontSizes.plotLabels,
                fill: e.FINAL_CONFIG.bar.serieName.useSerieColor ? a.color : e.FINAL_CONFIG.bar.serieName.color,
                "font-weight": e.FINAL_CONFIG.bar.serieName.bold ? "bold" : "normal"
              }, toDisplayString(e.FINAL_CONFIG.bar.serieName.useAbbreviation ? e.abbreviate({ source: a.name, length: e.FINAL_CONFIG.bar.serieName.abbreviationSize }) : a.name), 9, ua)) : createCommentVNode("", true)
            ]))), 128))
          ], 6))), 128))
        ])) : createCommentVNode("", true),
        e.FINAL_CONFIG.plot.labels.show && i.mutableConfig.dataLabels.show ? (openBlock(), createElementBlock("g", ga, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("g", {
            key: `xLabel_plot_${o}`,
            class: normalizeClass(`xLabel_plot_${o}`),
            style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
              key: `xLabel_plot_${o}_${u2}`
            }, [
              n && !Object.hasOwn(a, "dataLabels") || a.dataLabels === true ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: n.x,
                y: n.y + e.FINAL_CONFIG.plot.labels.offsetY,
                "text-anchor": "middle",
                "font-size": i.fontSizes.plotLabels,
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
              ) : ""), 9, fa)) : createCommentVNode("", true),
              n && u2 === 0 && a.useTag && a.useTag === "start" ? (openBlock(), createElementBlock("foreignObject", {
                key: 1,
                x: n.x,
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${i.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, Na)) : createCommentVNode("", true),
              n && u2 === a.plots.length - 1 && a.useTag && a.useTag === "end" ? (openBlock(), createElementBlock("foreignObject", {
                key: 2,
                x: n.x - a.name.length * (i.fontSizes.plotLabels / 2),
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${i.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, ma)) : createCommentVNode("", true)
            ]))), 128))
          ], 6))), 128))
        ])) : createCommentVNode("", true),
        e.FINAL_CONFIG.line.labels.show && i.mutableConfig.dataLabels.show ? (openBlock(), createElementBlock("g", Ia, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
            key: `xLabel_line_${o}`,
            class: normalizeClass(`xLabel_line_${o}`),
            style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
              key: `xLabel_line_${o}_${u2}`
            }, [
              n && !Object.hasOwn(a, "dataLabels") || a.dataLabels === true ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: n.x,
                y: n.y + (n.value > 0 ? e.FINAL_CONFIG.line.labels.offsetY : -e.FINAL_CONFIG.line.labels.offsetY * 3),
                "text-anchor": "middle",
                "font-size": i.fontSizes.plotLabels,
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
              ) : ""), 9, xa)) : createCommentVNode("", true),
              n && u2 === 0 && a.useTag && a.useTag === "start" ? (openBlock(), createElementBlock("foreignObject", {
                key: 1,
                x: n.x,
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${i.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, ba)) : createCommentVNode("", true),
              n && u2 === a.plots.length - 1 && a.useTag && a.useTag === "end" ? (openBlock(), createElementBlock("foreignObject", {
                key: 2,
                x: n.x - a.name.length * (i.fontSizes.plotLabels / 2),
                y: n.y - 20,
                height: 24,
                width: "150",
                style: { overflow: "visible" }
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`padding: 3px; background:${e.setOpacity(a.color, 80)};color:${e.adaptColorToBackground(a.color)};width:fit-content;font-size:${i.fontSizes.plotLabels}px;border-radius: 2px;`)
                }, toDisplayString(a.name), 5)
              ], 8, Fa)) : createCommentVNode("", true)
            ]))), 128))
          ], 6))), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.lineSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `xLabel_line_${o}`,
          class: normalizeClass(`xLabel_line_${o}`),
          style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
            key: `xLabel_line_${o}_${u2}`
          }, [
            n && u2 === 0 && a.showSerieName && a.showSerieName === "start" ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: n.x - i.fontSizes.plotLabels,
              y: n.y,
              "font-size": i.fontSizes.plotLabels,
              "text-anchor": "end",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: i.fontSizes.plotLabels,
                fill: a.color,
                x: n.x - i.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, _a)) : createCommentVNode("", true),
            n && u2 === a.plots.length - 1 && a.showSerieName && a.showSerieName === "end" ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: n.x + i.fontSizes.plotLabels,
              y: n.y,
              "font-size": i.fontSizes.plotLabels,
              "text-anchor": "start",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: i.fontSizes.plotLabels,
                fill: a.color,
                x: n.x + i.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, ya)) : createCommentVNode("", true)
          ]))), 128))
        ], 6))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.plotSet, (a, o) => (openBlock(), createElementBlock("g", {
          key: `xLabel_plot_${o}`,
          class: normalizeClass(`xLabel_plot_${o}`),
          style: normalizeStyle(`opacity:${i.selectedScale ? i.selectedScale === a.id ? 1 : 0.2 : 1};transition:opacity 0.2s ease-in-out`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.plots, (n, u2) => (openBlock(), createElementBlock("g", {
            key: `xLabel_plot_${o}_${u2}`
          }, [
            n && u2 === 0 && a.showSerieName && a.showSerieName === "start" ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: n.x - i.fontSizes.plotLabels,
              y: n.y,
              "font-size": i.fontSizes.plotLabels,
              "text-anchor": "end",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: i.fontSizes.plotLabels,
                fill: a.color,
                x: n.x - i.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, Aa)) : createCommentVNode("", true),
            n && u2 === a.plots.length - 1 && a.showSerieName && a.showSerieName === "end" ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: n.x + i.fontSizes.plotLabels,
              y: n.y,
              "font-size": i.fontSizes.plotLabels,
              "text-anchor": "start",
              fill: a.color,
              innerHTML: e.createTSpans({
                content: a.name,
                fontSize: i.fontSizes.plotLabels,
                fill: a.color,
                x: n.x + i.fontSizes.plotLabels,
                y: n.y,
                maxWords: 2
              })
            }, null, 8, La)) : createCommentVNode("", true)
          ]))), 128))
        ], 6))), 128)),
        i.mutableConfig.useIndividualScale && !i.mutableConfig.isStacked ? (openBlock(true), createElementBlock(Fragment, { key: 8 }, renderList(e.allScales, (a) => (openBlock(), createElementBlock("rect", {
          x: a.x - e.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth,
          y: e.drawingArea.top,
          width: e.FINAL_CONFIG.chart.grid.labels.yAxis.labelWidth,
          height: e.drawingArea.height < 0 ? 10 : e.drawingArea.height,
          fill: i.selectedScale === a.id ? e.setOpacity(a.color, 20) : "transparent",
          onMouseenter: (o) => i.selectedScale = a.id,
          onMouseleave: s2[0] || (s2[0] = (o) => i.selectedScale = null)
        }, null, 40, Ca))), 256)) : createCommentVNode("", true),
        createBaseVNode("g", null, [
          e.FINAL_CONFIG.chart.grid.labels.axis.yLabel && !i.mutableConfig.useIndividualScale ? (openBlock(), createElementBlock("text", {
            key: 0,
            "font-size": i.fontSizes.yAxis,
            fill: e.FINAL_CONFIG.chart.grid.labels.color,
            transform: `translate(${i.fontSizes.yAxis + e.FINAL_CONFIG.chart.grid.labels.axis.yLabelOffsetX}, ${e.drawingArea.top + e.drawingArea.height / 2}) rotate(-90)`,
            "text-anchor": "middle",
            style: { transition: "none" }
          }, toDisplayString(e.FINAL_CONFIG.chart.grid.labels.axis.yLabel), 9, Sa)) : createCommentVNode("", true),
          e.FINAL_CONFIG.chart.grid.labels.axis.xLabel ? (openBlock(), createElementBlock("text", {
            key: 1,
            "text-anchor": "middle",
            x: i.width / 2,
            y: e.drawingArea.bottom + i.fontSizes.yAxis + i.fontSizes.xAxis * 1.3 + e.FINAL_CONFIG.chart.grid.labels.axis.xLabelOffsetY,
            "font-size": i.fontSizes.yAxis,
            fill: e.FINAL_CONFIG.chart.grid.labels.color
          }, toDisplayString(e.FINAL_CONFIG.chart.grid.labels.axis.xLabel), 9, ka)) : createCommentVNode("", true)
        ]),
        e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.show ? (openBlock(), createElementBlock("g", wa, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.timeLabels, (a, o) => (openBlock(), createElementBlock("g", {
            key: `time_label_${o}`
          }, [
            a && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo || a && e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && (o === 0 || o === e.timeLabels.length - 1) && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo || a && e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && i.selectedSerieIndex === o && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo || a && !e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyFirstAndLast && e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.showOnlyAtModulo && o % Math.floor((this.slicer.end - this.slicer.start) / e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.modulo) === 0 ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.rotation > 0 ? "start" : e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.rotation < 0 ? "end" : "middle",
              "font-size": i.fontSizes.xAxis,
              fill: e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.color,
              transform: `translate(${e.drawingArea.left + e.drawingArea.width / e.maxSeries * o + e.drawingArea.width / e.maxSeries / 2}, ${e.drawingArea.bottom + i.fontSizes.xAxis * 1.3 + e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.yOffset}), rotate(${e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.rotation})`
            }, toDisplayString(a || ""), 9, Oa)) : createCommentVNode("", true)
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
            }, null, 40, Ga)
          ]))), 128))
        ]),
        e.FINAL_CONFIG.chart.timeTag.show && ![null, void 0].includes(i.selectedSerieIndex) ? (openBlock(), createElementBlock("g", va, [
          (openBlock(), createElementBlock("foreignObject", {
            x: e.drawingArea.left + e.drawingArea.width / e.maxSeries * i.selectedSerieIndex - 100 + e.drawingArea.width / e.maxSeries / 2,
            y: e.drawingArea.bottom,
            width: "200",
            height: "40",
            style: { overflow: "visible !important" }
          }, [
            createBaseVNode("div", {
              class: "vue-ui-xy-time-tag",
              style: normalizeStyle(`width: fit-content;margin: 0 auto;text-align:center;padding:3px 12px;background:${e.FINAL_CONFIG.chart.timeTag.backgroundColor};color:${e.FINAL_CONFIG.chart.timeTag.color};font-size:${e.FINAL_CONFIG.chart.timeTag.fontSize}px`)
            }, toDisplayString(e.timeLabels[i.selectedSerieIndex] || i.selectedSerieIndex), 5)
          ], 8, pa)),
          createBaseVNode("circle", {
            cx: e.drawingArea.left + e.drawingArea.width / e.maxSeries * i.selectedSerieIndex + e.drawingArea.width / e.maxSeries / 2,
            cy: e.drawingArea.bottom,
            r: e.FINAL_CONFIG.chart.timeTag.circleMarker.radius,
            fill: e.FINAL_CONFIG.chart.timeTag.circleMarker.color
          }, null, 8, za)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      renderSlot(t.$slots, "svg", { svg: e.svg }, void 0, true)
    ], 14, qe)) : createCommentVNode("", true),
    t.$slots.watermark ? (openBlock(), createElementBlock("div", Ma, [
      renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: i.isPrinting || i.isImaging })), void 0, true)
    ])) : createCommentVNode("", true),
    e.isDataset ? createCommentVNode("", true) : (openBlock(), createBlock(L, {
      key: 4,
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
    e.FINAL_CONFIG.chart.zoom.show && i.maxX > 6 && e.isDataset ? (openBlock(), createBlock(M, {
      ref: "chartSlicer",
      key: `slicer_${i.slicerStep}`,
      background: e.FINAL_CONFIG.chart.zoom.color,
      fontSize: e.FINAL_CONFIG.chart.zoom.fontSize,
      useResetSlot: e.FINAL_CONFIG.chart.zoom.useResetSlot,
      labelLeft: e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values[i.slicer.start],
      labelRight: e.FINAL_CONFIG.chart.grid.labels.xAxisLabels.values[i.slicer.end - 1],
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
      minimapSelectedIndex: i.selectedSerieIndex,
      minimapIndicatorColor: e.FINAL_CONFIG.chart.zoom.minimap.indicatorColor,
      max: i.maxX,
      min: 0,
      valueStart: i.slicer.start,
      valueEnd: i.slicer.end,
      start: i.slicer.start,
      "onUpdate:start": s2[2] || (s2[2] = (a) => i.slicer.start = a),
      end: i.slicer.end,
      "onUpdate:end": s2[3] || (s2[3] = (a) => i.slicer.end = a),
      onReset: e.refreshSlicer,
      onTrapMouse: e.selectMinimapIndex
    }, {
      "reset-action": withCtx(({ reset: a }) => [
        renderSlot(t.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: a })), void 0, true)
      ]),
      _: 3
    }, 8, ["background", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "borderColor", "minimap", "smoothMinimap", "minimapSelectedColor", "minimapSelectionRadius", "minimapLineColor", "minimapSelectedColorOpacity", "minimapSelectedIndex", "minimapIndicatorColor", "max", "valueStart", "valueEnd", "start", "end", "onReset", "onTrapMouse"])) : createCommentVNode("", true),
    e.FINAL_CONFIG.chart.legend.show ? (openBlock(), createElementBlock("div", {
      key: 6,
      ref: "chartLegend",
      class: "vue-ui-xy-legend",
      style: normalizeStyle(`font-size:${e.FINAL_CONFIG.chart.legend.fontSize}px`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e.absoluteDataset, (a, o) => (openBlock(), createElementBlock("div", {
        key: `div_legend_item_${o}`,
        onClick: (n) => e.segregate(a),
        class: normalizeClass({ "vue-ui-xy-legend-item": true, "vue-ui-xy-legend-item-segregated": i.segregatedSeries.includes(a.id) })
      }, [
        i.icons[a.type] === "line" ? (openBlock(), createElementBlock("svg", Ta, [
          createBaseVNode("rect", {
            x: "0",
            y: "7",
            rx: "3",
            stroke: "none",
            height: "4",
            width: "20",
            fill: a.color
          }, null, 8, Va),
          createVNode(f, {
            plot: { x: 10, y: 9 },
            radius: 4,
            color: a.color,
            shape: ["triangle", "square", "diamond", "pentagon", "hexagon", "star"].includes(a.shape) ? a.shape : "circle",
            stroke: e.FINAL_CONFIG.chart.backgroundColor,
            strokeWidth: 1
          }, null, 8, ["color", "shape", "stroke"])
        ])) : (openBlock(), createElementBlock("svg", Ra, [
          i.icons[a.type] === "bar" ? (openBlock(), createElementBlock("rect", {
            key: 0,
            x: "0",
            y: "0",
            rx: "1",
            height: "12",
            width: "12",
            stroke: "none",
            fill: a.color
          }, null, 8, Da)) : (openBlock(), createBlock(f, {
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
      ], 10, Pa))), 128))
    ], 4)) : (openBlock(), createElementBlock("div", Wa, [
      renderSlot(t.$slots, "legend", { legend: e.absoluteDataset }, void 0, true)
    ], 512)),
    createVNode(w, {
      show: i.mutableConfig.showTooltip && i.isTooltip,
      backgroundColor: e.FINAL_CONFIG.chart.tooltip.backgroundColor,
      color: e.FINAL_CONFIG.chart.tooltip.color,
      fontSize: e.FINAL_CONFIG.chart.tooltip.fontSize,
      borderRadius: e.FINAL_CONFIG.chart.tooltip.borderRadius,
      borderColor: e.FINAL_CONFIG.chart.tooltip.borderColor,
      borderWidth: e.FINAL_CONFIG.chart.tooltip.borderWidth,
      backgroundOpacity: e.FINAL_CONFIG.chart.tooltip.backgroundOpacity,
      position: e.FINAL_CONFIG.chart.tooltip.position,
      offsetY: e.FINAL_CONFIG.chart.tooltip.offsetY,
      parent: t.$refs.chart,
      content: e.tooltipContent,
      isCustom: e.FINAL_CONFIG.chart.tooltip.customFormat && typeof e.FINAL_CONFIG.chart.tooltip.customFormat == "function"
    }, {
      "tooltip-before": withCtx(() => [
        renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...e.dataTooltipSlot })), void 0, true)
      ]),
      "tooltip-after": withCtx(() => [
        renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...e.dataTooltipSlot })), void 0, true)
      ]),
      _: 3
    }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
    e.isDataset ? (openBlock(), createBlock(C, {
      key: 8,
      hideDetails: "",
      config: {
        open: i.mutableConfig.showTable,
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
          style: normalizeStyle(`${i.isPrinting ? "" : "max-height:400px"};overflow:auto;width:100%;margin-top:48px`)
        }, [
          createBaseVNode("div", Ha, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              "onUpdate:modelValue": s2[4] || (s2[4] = (a) => i.showSparklineTable = a)
            }, null, 512), [
              [vModelCheckbox, i.showSparklineTable]
            ]),
            createBaseVNode("div", {
              onClick: s2[5] || (s2[5] = (a) => i.showSparklineTable = !i.showSparklineTable),
              style: { cursor: "pointer" }
            }, [
              createVNode(p2, {
                name: "chartLine",
                size: 20,
                stroke: e.FINAL_CONFIG.chart.color
              }, null, 8, ["stroke"])
            ])
          ]),
          i.showSparklineTable ? (openBlock(), createBlock(v, {
            key: `sparkline_${i.segregateStep}`,
            dataset: e.tableSparklineDataset,
            config: e.tableSparklineConfig
          }, null, 8, ["dataset", "config"])) : (openBlock(), createBlock(F, {
            key: `table_${i.tableStep}`,
            colNames: e.dataTable.colNames,
            head: e.dataTable.head,
            body: e.dataTable.body,
            config: e.dataTable.config,
            title: `${e.FINAL_CONFIG.chart.title.text}${e.FINAL_CONFIG.chart.title.subtitle.text ? ` : ${e.FINAL_CONFIG.chart.title.subtitle.text}` : ""}`,
            onClose: s2[6] || (s2[6] = (a) => i.mutableConfig.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", { innerHTML: a }, null, 8, Ea)
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
  ], 14, Xe);
}
var li = s(Ye, [["render", Ba], ["__scopeId", "data-v-fe7409df"]]);
export {
  li as default
};
//# sourceMappingURL=vue-ui-xy-x8KEsGV--DY45TB2E.js.map
