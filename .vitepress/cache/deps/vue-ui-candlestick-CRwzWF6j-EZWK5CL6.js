import {
  _e
} from "./chunk-2OITSM6Y.js";
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
  $t,
  Ge,
  Ht,
  It,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  Xt,
  cr,
  k,
  lr,
  oe,
  pt,
  zt
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-candlestick-CRwzWF6j.js
var dt = ["id"];
var yt = ["xmlns", "viewBox"];
var ct = { key: 0 };
var ht = ["id"];
var pt2 = ["stop-color"];
var ft = ["stop-color"];
var gt = ["stop-color"];
var bt = ["id"];
var mt = ["stop-color"];
var xt = ["stop-color"];
var kt = ["stop-color"];
var wt = { key: 0 };
var $t2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var _t = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ct = { key: 1 };
var Nt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var St = ["x", "y", "font-size", "fill", "font-weight"];
var zt2 = { key: 2 };
var Tt = ["transform", "text-anchor", "font-size", "fill", "font-weight"];
var At = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ft = { key: 0 };
var Lt2 = ["cx", "cy", "r", "fill"];
var Rt = ["cx", "cy", "r", "fill"];
var Vt = { key: 1 };
var It2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ot2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Bt = ["x", "y", "height", "width", "fill", "rx"];
var Pt = ["x", "y", "height", "width", "fill", "rx", "stroke", "stroke-width"];
var Mt = ["x", "y", "height", "width", "fill", "onMouseover"];
var Ut = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Et = ["innerHTML"];
var Dt = {
  __name: "vue-ui-candlestick",
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
  setup($, { expose: we }) {
    const k2 = $, { vue_ui_candlestick: $e } = oe(), T = computed(() => !!k2.dataset && k2.dataset.length), x2 = ref(Lt()), _e2 = ref(null), W2 = ref(false), G = ref(""), X = ref(void 0), q = ref(0), A = ref(null), J = ref(null), K = ref(null), Q = ref(null), O2 = ref(0), Z = ref(0), ee = ref(0), e = computed({
      get: () => te(),
      set: (t) => t
    });
    function te() {
      const t = c({
        userConfig: k2.config,
        defaultConfig: $e
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_candlestick[t.theme] || k2.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => k2.config, (t) => {
      e.value = te(), le(), O2.value += 1, ee.value += 1, Z.value += 1;
    }, { deep: true }), watch(() => k2.dataset, (t) => {
      y.value.start = 0, y.value.end = t.length, O2.value += 1;
    }, { deep: true });
    const d = ref({
      height: e.value.style.height,
      width: e.value.style.width,
      xAxisFontSize: e.value.style.layout.grid.xAxis.dataLabels.fontSize,
      yAxisFontSize: e.value.style.layout.grid.yAxis.dataLabels.fontSize
    }), B = ref(null);
    onMounted(() => {
      le();
    });
    function le() {
      if (Xt(k2.dataset) && Kt({
        componentName: "VueUiCandlestick",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: a, height: l } = M({
            chart: A.value,
            title: e.value.style.title.text ? J.value : null,
            slicer: Q.value,
            legend: K.value
          });
          d.value.width = a, d.value.height = l, d.value.xAxisFontSize = lr({
            relator: Math.min(a, l),
            adjuster: e.value.style.width,
            source: e.value.style.layout.grid.xAxis.dataLabels.fontSize,
            threshold: 6,
            fallback: 6
          }), d.value.yAxisFontSize = lr({
            relator: Math.min(a, l),
            adjuster: e.value.style.width,
            source: e.value.style.layout.grid.yAxis.dataLabels.fontSize,
            threshold: 6,
            fallback: 6
          });
        });
        B.value = new ResizeObserver(t), B.value.observe(A.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      B.value && B.value.disconnect();
    });
    const { isPrinting: oe2, isImaging: ae, generatePdf: se2, generateImage: ue } = se({
      elementId: `vue-ui-candlestick_${x2.value}`,
      fileName: e.value.style.title.text || "vue-ui-candlestick"
    }), w = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), i = computed(() => {
      const { top: t, right: a, bottom: l, left: o } = e.value.style.layout.padding;
      return {
        top: t,
        right: d.value.width - a,
        left: o,
        bottom: d.value.height - l,
        width: d.value.width - o - a,
        height: d.value.height - t - l
      };
    }), j = computed(() => k2.dataset.length), y = ref({
      start: 0,
      end: j.value
    }), ie2 = computed(() => k2.dataset.slice(y.value.start, y.value.end)), H = computed(() => (k2.dataset.forEach((t, a) => {
      [null, void 0].includes(t[0]) && Kt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "period (index 0)",
        index: a
      }), [null, void 0].includes(t[1]) && Kt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "open (index 1)",
        index: a
      }), [null, void 0].includes(t[2]) && Kt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "high (index 2)",
        index: a
      }), [null, void 0].includes(t[3]) && Kt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "low (index 3)",
        index: a
      }), [null, void 0].includes(t[4]) && Kt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "last (index 4)",
        index: a
      }), [null, void 0].includes(t[5]) && Kt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "volume (index 5)",
        index: a
      });
    }), ie2.value.map((t) => ({
      period: t[0],
      open: t[1],
      high: t[2],
      low: t[3],
      last: t[4],
      volume: t[5]
    })))), r = computed(() => i.value.width / ie2.value.length), ne = computed(() => ({
      max: Math.max(...H.value.map((t) => t.high)),
      min: 0
    })), _ = computed(() => It(ne.value.min, ne.value.max, e.value.style.layout.grid.yAxis.dataLabels.steps));
    function P(t, a) {
      return {
        ...t,
        x: k(i.value.left + a * r.value + r.value / 2),
        y: k(i.value.top + (1 - t / _.value.max) * i.value.height),
        value: k(t)
      };
    }
    const f = computed(() => H.value.map((t, a) => {
      const l = P(t.open, a), o = P(t.high, a), g = P(t.low, a), U = P(t.last, a), E2 = t.last > t.open;
      return {
        period: t.period,
        open: l,
        high: o,
        low: g,
        last: U,
        volume: t.volume,
        isBullish: E2
      };
    }));
    function Ce(t) {
      return k(t / _.value.max);
    }
    const Ne = computed(() => _.value.ticks.map((t) => ({
      y: i.value.bottom - i.value.height * Ce(t),
      value: k(t)
    }))), Se = computed(() => H.value.map((t) => t.period)), Y = ref(null);
    function ze(t, a) {
      X.value = t, Y.value = {
        datapoint: a,
        seriesIndex: t,
        series: f.value,
        config: e.value
      };
      const l = e.value.style.tooltip.customFormat;
      if (Ht(l) && $t(() => l({
        seriesIndex: t,
        datapoint: a,
        series: f.value,
        config: e.value
      })))
        G.value = l({
          seriesIndex: t,
          datapoint: a,
          series: f.value,
          config: e.value
        });
      else if (e.value.style.tooltip.show) {
        let o = "";
        const { period: g, open: U, high: E2, low: ye, last: ce, volume: he, isBullish: pe } = f.value[t], { period: Wt, open: Fe, high: Le, low: Re, last: Ve, volume: Ie } = e.value.translations;
        o += `<div><svg style="margin-right:6px" viewBox="0 0 12 12" height="12" width="12"><rect x="0" y="0" height="12" width="12" rx="${e.value.style.layout.candle.borderRadius * 3}" stroke="${e.value.style.layout.candle.stroke}" stroke-width="${e.value.style.layout.candle.strokeWidth}" 
                fill="${e.value.style.layout.candle.gradient.show ? pe ? `url(#bullish_gradient_${x2.value})` : `url(#bearish_gradient_${x2.value})` : pe ? e.value.style.layout.candle.colors.bullish : e.value.style.layout.candle.colors.bearish}"/></svg>${g}</div>`, o += `${Ie} : <b>${isNaN(he) ? "-" : Number(he.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()}</b>`, o += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}">`, o += `<div>${Fe}: <b>${e.value.style.tooltip.prefix} ${isNaN(U.value) ? "-" : Number(U.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += `<div>${Le}: <b>${e.value.style.tooltip.prefix} ${isNaN(E2.value) ? "-" : Number(E2.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += `<div>${Re}: <b>${e.value.style.tooltip.prefix} ${isNaN(ye.value) ? "-" : Number(ye.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += `<div>${Ve}: <b>${e.value.style.tooltip.prefix} ${isNaN(ce.value) ? "-" : Number(ce.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += "</div>", G.value = `<div style="text-align:right">${o}</div>`;
      }
      W2.value = true;
    }
    function Te() {
      y.value = {
        start: 0,
        end: j.value
      }, O2.value += 1;
    }
    function re() {
      nextTick(() => {
        const t = [e.value.translations.period, e.value.translations.open, e.value.translations.high, e.value.translations.low, e.value.translations.last, e.value.translations.volume], a = f.value.map((g) => [
          g.period,
          g.open.value,
          g.high.value,
          g.low.value,
          g.last.value,
          g.volume
        ]), l = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([t]).concat(a), o = Nt(l);
        Ot({ csvContent: o, title: e.value.style.title.text || "vue-ui-candlestick" });
      });
    }
    const M2 = computed(() => {
      const t = f.value.map((o) => [
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" height="12" width="12" style="margin-right: 6px"><rect x="0" y="0" height="12" width="12" :rx="${e.value.style.layout.candle.borderRadius * 3}" fill="${e.value.style.layout.candle.gradient.show ? o.isBullish ? `url(#bullish_gradient_${x2.value}` : `url(#bearish_gradient_${x2.value})` : o.isBullish ? e.value.style.layout.candle.colors.bullish : e.value.style.layout.candle.colors.bearish}"/></svg> ${o.period}`,
        `${e.value.table.td.prefix} ${isNaN(o.open.value) ? "-" : Number(o.open.value.toFixed(e.value.table.td.roundingValue)).toLocaleString()} ${e.value.table.td.suffix}`,
        `${e.value.table.td.prefix} ${isNaN(o.high.value) ? "-" : Number(o.high.value.toFixed(e.value.table.td.roundingValue)).toLocaleString()} ${e.value.table.td.suffix}`,
        `${e.value.table.td.prefix} ${isNaN(o.low.value) ? "-" : Number(o.low.value.toFixed(e.value.table.td.roundingValue)).toLocaleString()} ${e.value.table.td.suffix}`,
        `${e.value.table.td.prefix} ${isNaN(o.last.value) ? "-" : Number(o.last.value.toFixed(e.value.table.td.roundingValue)).toLocaleString()} ${e.value.table.td.suffix}`,
        `${isNaN(o.volume) ? "-" : o.volume.toLocaleString()}`
      ]), a = {
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
      }, l = [
        e.value.translations.period,
        e.value.translations.open,
        e.value.translations.high,
        e.value.translations.low,
        e.value.translations.last,
        e.value.translations.volume
      ];
      return { head: l, body: t, config: a, colNames: l };
    }), F = ref(false);
    function Ae(t) {
      F.value = t, q.value += 1;
    }
    function ve() {
      w.value.showTable = !w.value.showTable;
    }
    function de() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    return we({
      generatePdf: se2,
      generateCsv: re,
      generateImage: ue,
      toggleTable: ve,
      toggleTooltip: de
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "candlestickChart",
      ref: A,
      class: normalizeClass(`vue-ui-candlestick ${F.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`position:relative;font-family:${e.value.style.fontFamily}; text-align:center;${e.value.style.title.text ? "" : "padding-top:36px"};background:${e.value.style.backgroundColor}; ${e.value.responsive ? "height: 100%" : ""}`),
      id: `vue-ui-candlestick_${x2.value}`
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: J,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ee.value}`,
          config: {
            title: {
              cy: "candlestick-div-title",
              ...e.value.style.title
            },
            subtitle: {
              cy: "candlestick-div-subtitle",
              ...e.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && T.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: _e2,
        key: `user_options_${q.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(ae),
        isPrinting: unref(oe2),
        uid: x2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: F.value,
        isTooltip: w.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: A.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Ae,
        onGeneratePdf: unref(se2),
        onGenerateCsv: re,
        onGenerateImage: unref(ue),
        onToggleTable: ve,
        onToggleTooltip: de
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
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: o })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      T.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": F.value, "vue-data-ui-fulscreen--off": !F.value }),
        viewBox: `0 0 ${d.value.width <= 0 ? 10 : d.value.width} ${d.value.height <= 0 ? 10 : d.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        f.value.length > 0 ? (openBlock(), createElementBlock("g", ct, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `bearish_gradient_${x2.value}`,
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.candle.colors.bearish
              }, null, 8, pt2),
              createBaseVNode("stop", {
                offset: "50%",
                "stop-color": `${unref(pt)(e.value.style.layout.candle.colors.bearish, 0.02)}DE`
              }, null, 8, ft),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": `${unref(pt)(e.value.style.layout.candle.colors.bearish, 0.05)}66`
              }, null, 8, gt)
            ], 8, ht),
            createBaseVNode("linearGradient", {
              id: `bullish_gradient_${x2.value}`,
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.candle.colors.bullish
              }, null, 8, mt),
              createBaseVNode("stop", {
                offset: "50%",
                "stop-color": `${unref(pt)(e.value.style.layout.candle.colors.bullish, 0.02)}DE`
              }, null, 8, xt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": `${unref(pt)(e.value.style.layout.candle.colors.bullish, 0.05)}66`
              }, null, 8, kt)
            ], 8, bt)
          ]),
          e.value.style.layout.grid.show ? (openBlock(), createElementBlock("g", wt, [
            createBaseVNode("line", {
              x1: i.value.left,
              x2: i.value.left,
              y1: i.value.top,
              y2: i.value.bottom,
              stroke: e.value.style.layout.grid.stroke,
              "stroke-width": e.value.style.layout.grid.strokeWidth,
              "stroke-linecap": "round"
            }, null, 8, $t2),
            createBaseVNode("line", {
              x1: i.value.left,
              x2: i.value.right,
              y1: i.value.bottom,
              y2: i.value.bottom,
              stroke: e.value.style.layout.grid.stroke,
              "stroke-width": e.value.style.layout.grid.strokeWidth,
              "stroke-linecap": "round"
            }, null, 8, _t)
          ])) : createCommentVNode("", true),
          e.value.style.layout.grid.yAxis.dataLabels.show ? (openBlock(), createElementBlock("g", Ct, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Ne.value, (l, o) => (openBlock(), createElementBlock("g", null, [
              l.value >= _.value.min && l.value <= _.value.max ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: i.value.left,
                x2: i.value.left - 5,
                y1: l.y,
                y2: l.y,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, Nt2)) : createCommentVNode("", true),
              l.value >= _.value.min && l.value <= _.value.max ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: i.value.left - 8 + e.value.style.layout.grid.yAxis.dataLabels.offsetX,
                y: l.y + d.value.yAxisFontSize / 3,
                "font-size": d.value.yAxisFontSize,
                "text-anchor": "end",
                fill: e.value.style.layout.grid.yAxis.dataLabels.color,
                "font-weight": e.value.style.layout.grid.yAxis.dataLabels.bold ? "bold" : "normal"
              }, toDisplayString(e.value.style.layout.grid.yAxis.dataLabels.prefix) + " " + toDisplayString(unref(zt)(l.value) ? l.value.toFixed(e.value.style.layout.grid.yAxis.dataLabels.roundingValue) : "") + " " + toDisplayString(e.value.style.layout.grid.yAxis.dataLabels.suffix), 9, St)) : createCommentVNode("", true)
            ]))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.layout.grid.xAxis.dataLabels.show ? (openBlock(), createElementBlock("g", zt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Se.value, (l, o) => (openBlock(), createElementBlock("g", null, [
              createBaseVNode("text", {
                transform: `translate(${i.value.left + r.value * o + r.value / 2}, ${i.value.bottom + d.value.xAxisFontSize * 2 + e.value.style.layout.grid.xAxis.dataLabels.offsetY}), rotate(${e.value.style.layout.grid.xAxis.dataLabels.rotation})`,
                "text-anchor": e.value.style.layout.grid.xAxis.dataLabels.rotation > 0 ? "start" : e.value.style.layout.grid.xAxis.dataLabels.rotation < 0 ? "end" : "middle",
                "font-size": d.value.xAxisFontSize,
                fill: e.value.style.layout.grid.xAxis.dataLabels.color,
                "font-weight": e.value.style.layout.grid.xAxis.dataLabels.bold ? "bold" : "normal"
              }, toDisplayString(l), 9, Tt)
            ]))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (l, o) => (openBlock(), createElementBlock("g", null, [
              createBaseVNode("line", {
                x1: l.open.x,
                x2: l.open.x,
                y1: l.high.y,
                y2: l.low.y,
                stroke: e.value.style.layout.wick.stroke,
                "stroke-width": e.value.style.layout.wick.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, At),
              e.value.style.layout.wick.extremity.shape === "circle" ? (openBlock(), createElementBlock("g", Ft, [
                createBaseVNode("circle", {
                  cx: l.high.x,
                  cy: l.high.y,
                  r: e.value.style.layout.wick.extremity.size === "auto" ? r.value / 20 : e.value.style.layout.wick.extremity.size,
                  fill: e.value.style.layout.wick.extremity.color
                }, null, 8, Lt2),
                createBaseVNode("circle", {
                  cx: l.low.x,
                  cy: l.low.y,
                  r: e.value.style.layout.wick.extremity.size === "auto" ? r.value / 20 : e.value.style.layout.wick.extremity.size,
                  fill: e.value.style.layout.wick.extremity.color
                }, null, 8, Rt)
              ])) : createCommentVNode("", true),
              e.value.style.layout.wick.extremity.shape === "line" ? (openBlock(), createElementBlock("g", Vt, [
                createBaseVNode("line", {
                  x1: l.high.x - (e.value.style.layout.wick.extremity.size === "auto" ? r.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  x2: l.high.x + (e.value.style.layout.wick.extremity.size === "auto" ? r.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  y1: l.high.y,
                  y2: l.high.y,
                  stroke: e.value.style.layout.wick.extremity.color,
                  "stroke-width": e.value.style.layout.wick.strokeWidth,
                  "stroke-linecap": "round"
                }, null, 8, It2),
                createBaseVNode("line", {
                  x1: l.low.x - (e.value.style.layout.wick.extremity.size === "auto" ? r.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  x2: l.low.x + (e.value.style.layout.wick.extremity.size === "auto" ? r.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  y1: l.low.y,
                  y2: l.low.y,
                  stroke: e.value.style.layout.wick.extremity.color,
                  "stroke-width": e.value.style.layout.wick.strokeWidth,
                  "stroke-linecap": "round"
                }, null, 8, Ot2)
              ])) : createCommentVNode("", true)
            ]))), 256))
          ]),
          createBaseVNode("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (l, o) => (openBlock(), createElementBlock("rect", {
              x: l.open.x - r.value / 2 + r.value * (1 - e.value.style.layout.candle.widthRatio) / 2,
              y: l.isBullish ? l.last.y : l.open.y,
              height: Math.abs(l.last.y - l.open.y) <= 0 ? 1e-4 : Math.abs(l.last.y - l.open.y),
              width: r.value * e.value.style.layout.candle.widthRatio <= 0 ? 1e-4 : r.value * e.value.style.layout.candle.widthRatio,
              fill: e.value.style.layout.candle.gradient.underlayer,
              rx: e.value.style.layout.candle.borderRadius,
              stroke: "none"
            }, null, 8, Bt))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (l, o) => (openBlock(), createElementBlock("rect", {
              x: l.open.x - r.value / 2 + r.value * (1 - e.value.style.layout.candle.widthRatio) / 2,
              y: l.isBullish ? l.last.y : l.open.y,
              height: Math.abs(l.last.y - l.open.y) <= 0 ? 1e-4 : Math.abs(l.last.y - l.open.y),
              width: r.value * e.value.style.layout.candle.widthRatio <= 0 ? 1e-4 : r.value * e.value.style.layout.candle.widthRatio,
              fill: l.isBullish ? e.value.style.layout.candle.gradient.show ? `url(#bullish_gradient_${x2.value})` : e.value.style.layout.candle.colors.bullish : e.value.style.layout.candle.gradient.show ? `url(#bearish_gradient_${x2.value})` : e.value.style.layout.candle.colors.bearish,
              rx: e.value.style.layout.candle.borderRadius,
              stroke: e.value.style.layout.candle.stroke,
              "stroke-width": e.value.style.layout.candle.strokeWidth,
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, Pt))), 256))
          ]),
          createBaseVNode("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (l, o) => (openBlock(), createElementBlock("rect", {
              x: i.value.left + o * r.value,
              y: i.value.top,
              height: i.value.height <= 0 ? 1e-4 : i.value.height,
              width: r.value <= 0 ? 1e-4 : r.value,
              fill: X.value === o ? unref(cr)(e.value.style.layout.selector.color, e.value.style.layout.selector.opacity) : "transparent",
              onMouseover: (g) => ze(o, l),
              onMouseleave: a[0] || (a[0] = (g) => {
                X.value = void 0, W2.value = false;
              })
            }, null, 40, Mt))), 256))
          ])
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: d.value }, void 0, true)
      ], 14, yt)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ut, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(oe2) || unref(ae) })), void 0, true)
      ])) : createCommentVNode("", true),
      T.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "candlesticks",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            candlesticks: {
              axis: {
                color: "#CCCCCC"
              },
              candle: {
                color: "#CCCCCC"
              }
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.zoom.show && T.value ? (openBlock(), createElementBlock("div", {
        key: 5,
        ref_key: "chartSlicer",
        ref: Q
      }, [
        (openBlock(), createBlock(_e, {
          key: `slicer_${O2.value}`,
          background: e.value.style.zoom.color,
          borderColor: e.value.style.backgroundColor,
          fontSize: e.value.style.zoom.fontSize,
          useResetSlot: e.value.style.zoom.useResetSlot,
          labelLeft: $.dataset[y.value.start] ? $.dataset[y.value.start][0] : $.dataset[0][0],
          labelRight: $.dataset[y.value.end - 1] ? $.dataset[y.value.end - 1][0] : $.dataset.at(-1)[0],
          textColor: e.value.style.color,
          inputColor: e.value.style.zoom.color,
          selectColor: e.value.style.zoom.highlightColor,
          max: j.value,
          min: 0,
          valueStart: y.value.start,
          valueEnd: y.value.end,
          start: y.value.start,
          "onUpdate:start": a[1] || (a[1] = (l) => y.value.start = l),
          end: y.value.end,
          "onUpdate:end": a[2] || (a[2] = (l) => y.value.end = l),
          onReset: Te
        }, {
          "reset-action": withCtx(({ reset: l }) => [
            renderSlot(t.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: l })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"]))
      ], 512)) : createCommentVNode("", true),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: K
      }, [
        renderSlot(t.$slots, "legend", { legend: f.value }, void 0, true)
      ], 512),
      createVNode(E, {
        show: w.value.showTooltip && W2.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: A.value,
        content: G.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...Y.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...Y.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      T.value ? (openBlock(), createBlock(R, {
        key: 6,
        hideDetails: "",
        config: {
          open: w.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: e.value.style.backgroundColor,
            color: e.value.style.color
          },
          head: {
            backgroundColor: e.value.style.backgroundColor,
            color: e.value.style.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${Z.value}`,
            colNames: M2.value.colNames,
            head: M2.value.head,
            body: M2.value.body,
            config: M2.value.config,
            title: `${e.value.style.title.text}${e.value.style.title.subtitle.text ? ` : ${e.value.style.title.subtitle.text}` : ""}`,
            onClose: a[3] || (a[3] = (l) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createTextVNode(toDisplayString(l), 1)
            ]),
            td: withCtx(({ td: l }) => [
              createBaseVNode("div", { innerHTML: l }, null, 8, Et)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, dt));
  }
};
var ol = s(Dt, [["__scopeId", "data-v-51dc0cb1"]]);
export {
  ol as default
};
//# sourceMappingURL=vue-ui-candlestick-CRwzWF6j-EZWK5CL6.js.map
