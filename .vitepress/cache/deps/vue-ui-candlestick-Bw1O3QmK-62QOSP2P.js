import {
  Ue
} from "./chunk-VDRRPMYI.js";
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
  Jt,
  Kt,
  Nt,
  Pt,
  Ut,
  Vt,
  Xt,
  dr,
  jt,
  k as k2,
  nr,
  qt,
  te,
  yt
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

// node_modules/vue-data-ui/dist/vue-ui-candlestick-Bw1O3QmK.js
var gt = ["id"];
var bt = ["xmlns", "viewBox"];
var mt = { key: 0 };
var xt = ["id"];
var kt = ["stop-color"];
var wt = ["stop-color"];
var $t = ["stop-color"];
var Ct = ["id"];
var _t = ["stop-color"];
var Nt2 = ["stop-color"];
var St = ["stop-color"];
var At = { key: 0 };
var Tt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var zt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ft = { key: 1 };
var Lt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Rt = ["x", "y", "font-size", "fill", "font-weight"];
var Ot = { key: 2 };
var Vt2 = ["transform", "text-anchor", "font-size", "fill", "font-weight"];
var It = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Pt2 = { key: 0 };
var Bt = ["cx", "cy", "r", "fill"];
var Mt = ["cx", "cy", "r", "fill"];
var Ut2 = { key: 1 };
var Et = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Dt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Wt = ["x", "y", "height", "width", "fill", "rx"];
var Gt = ["x", "y", "height", "width", "fill", "rx", "stroke", "stroke-width"];
var Xt2 = ["x", "y", "height", "width", "fill", "onMouseover"];
var jt2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Ht = ["innerHTML"];
var Yt = {
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
  setup($, { expose: Ne }) {
    const k3 = $, { vue_ui_candlestick: Se2 } = te(), L = computed(() => !!k3.dataset && k3.dataset.length), x2 = ref(Dt()), Ae = ref(null), G = ref(false), X = ref(""), j = ref(void 0), K = ref(0), S = ref(null), Q = ref(null), Z = ref(null), ee = ref(null), te2 = ref(null), le = ref(null), I = ref(0), oe = ref(0), ae2 = ref(0), e = computed({
      get: () => se(),
      set: (t) => t
    });
    function se() {
      const t = c({
        userConfig: k3.config,
        defaultConfig: Se2
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_candlestick[t.theme] || k3.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => k3.config, (t) => {
      e.value = se(), ue(), I.value += 1, ae2.value += 1, oe.value += 1;
    }, { deep: true }), watch(() => k3.dataset, (t) => {
      y.value.start = 0, y.value.end = t.length, I.value += 1;
    }, { deep: true });
    const c2 = ref({
      height: e.value.style.height,
      width: e.value.style.width,
      xAxisFontSize: e.value.style.layout.grid.xAxis.dataLabels.fontSize,
      yAxisFontSize: e.value.style.layout.grid.yAxis.dataLabels.fontSize
    }), P = ref(null);
    onMounted(() => {
      ue();
    });
    function ue() {
      if (jt(k3.dataset) && qt({
        componentName: "VueUiCandlestick",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: a, height: l } = k({
            chart: S.value,
            title: e.value.style.title.text ? Q.value : null,
            slicer: ee.value,
            legend: Z.value,
            source: te2.value,
            noTitle: le.value
          });
          c2.value.width = a, c2.value.height = l, c2.value.xAxisFontSize = nr({
            relator: Math.min(a, l),
            adjuster: e.value.style.width,
            source: e.value.style.layout.grid.xAxis.dataLabels.fontSize,
            threshold: 6,
            fallback: 6
          }), c2.value.yAxisFontSize = nr({
            relator: Math.min(a, l),
            adjuster: e.value.style.width,
            source: e.value.style.layout.grid.yAxis.dataLabels.fontSize,
            threshold: 6,
            fallback: 6
          });
        });
        P.value = new ResizeObserver(t), P.value.observe(S.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      P.value && P.value.disconnect();
    });
    const { isPrinting: ie, isImaging: ne, generatePdf: re2, generateImage: ve } = re({
      elementId: `vue-ui-candlestick_${x2.value}`,
      fileName: e.value.style.title.text || "vue-ui-candlestick"
    }), Te = computed(() => e.value.userOptions.show && !e.value.style.title.text), w = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), i = computed(() => {
      const { top: t, right: a, bottom: l, left: o } = e.value.style.layout.padding;
      return {
        top: t,
        right: c2.value.width - a,
        left: o,
        bottom: c2.value.height - l,
        width: c2.value.width - o - a,
        height: c2.value.height - t - l
      };
    }), H = computed(() => k3.dataset.length), y = ref({
      start: 0,
      end: H.value
    }), de = computed(() => k3.dataset.slice(y.value.start, y.value.end)), Y = computed(() => (k3.dataset.forEach((t, a) => {
      [null, void 0].includes(t[0]) && qt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "period (index 0)",
        index: a
      }), [null, void 0].includes(t[1]) && qt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "open (index 1)",
        index: a
      }), [null, void 0].includes(t[2]) && qt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "high (index 2)",
        index: a
      }), [null, void 0].includes(t[3]) && qt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "low (index 3)",
        index: a
      }), [null, void 0].includes(t[4]) && qt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "last (index 4)",
        index: a
      }), [null, void 0].includes(t[5]) && qt({
        componentName: "VueUiCandlestick",
        type: "datasetAttribute",
        property: "volume (index 5)",
        index: a
      });
    }), de.value.map((t) => ({
      period: t[0],
      open: t[1],
      high: t[2],
      low: t[3],
      last: t[4],
      volume: t[5]
    })))), v = computed(() => i.value.width / de.value.length), ce = computed(() => ({
      max: Math.max(...Y.value.map((t) => t.high)),
      min: 0
    })), C = computed(() => Ut(ce.value.min, ce.value.max, e.value.style.layout.grid.yAxis.dataLabels.steps));
    function B(t, a) {
      return {
        ...t,
        x: k2(i.value.left + a * v.value + v.value / 2),
        y: k2(i.value.top + (1 - t / C.value.max) * i.value.height),
        value: k2(t)
      };
    }
    const b = computed(() => Y.value.map((t, a) => {
      const l = B(t.open, a), o = B(t.high, a), m = B(t.low, a), E2 = B(t.last, a), D = t.last > t.open;
      return {
        period: t.period,
        open: l,
        high: o,
        low: m,
        last: E2,
        volume: t.volume,
        isBullish: D
      };
    }));
    function ze(t) {
      return k2(t / C.value.max);
    }
    const Fe = computed(() => C.value.ticks.map((t) => ({
      y: i.value.bottom - i.value.height * ze(t),
      value: k2(t)
    }))), Le = computed(() => Y.value.map((t) => t.period)), q = ref(null);
    function Re(t, a) {
      j.value = t, q.value = {
        datapoint: a,
        seriesIndex: t,
        series: b.value,
        config: e.value
      };
      const l = e.value.style.tooltip.customFormat;
      if (Xt(l) && Kt(() => l({
        seriesIndex: t,
        datapoint: a,
        series: b.value,
        config: e.value
      })))
        X.value = l({
          seriesIndex: t,
          datapoint: a,
          series: b.value,
          config: e.value
        });
      else if (e.value.style.tooltip.show) {
        let o = "";
        const { period: m, open: E2, high: D, low: fe, last: ge, volume: be, isBullish: me } = b.value[t], { period: qt2, open: Ie, high: Pe, low: Be, last: Me, volume: Ue2 } = e.value.translations;
        o += `<div><svg style="margin-right:6px" viewBox="0 0 12 12" height="12" width="12"><rect x="0" y="0" height="12" width="12" rx="${e.value.style.layout.candle.borderRadius * 3}" stroke="${e.value.style.layout.candle.stroke}" stroke-width="${e.value.style.layout.candle.strokeWidth}" 
                fill="${e.value.style.layout.candle.gradient.show ? me ? `url(#bullish_gradient_${x2.value})` : `url(#bearish_gradient_${x2.value})` : me ? e.value.style.layout.candle.colors.bullish : e.value.style.layout.candle.colors.bearish}"/></svg>${m}</div>`, o += `${Ue2} : <b>${isNaN(be) ? "-" : Number(be.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()}</b>`, o += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}">`, o += `<div>${Ie}: <b>${e.value.style.tooltip.prefix} ${isNaN(E2.value) ? "-" : Number(E2.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += `<div>${Pe}: <b>${e.value.style.tooltip.prefix} ${isNaN(D.value) ? "-" : Number(D.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += `<div>${Be}: <b>${e.value.style.tooltip.prefix} ${isNaN(fe.value) ? "-" : Number(fe.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += `<div>${Me}: <b>${e.value.style.tooltip.prefix} ${isNaN(ge.value) ? "-" : Number(ge.value.toFixed(e.value.style.tooltip.roundingValue)).toLocaleString()} ${e.value.style.tooltip.suffix}</b></div>`, o += "</div>", X.value = `<div style="text-align:right">${o}</div>`;
      }
      G.value = true;
    }
    function Oe() {
      y.value = {
        start: 0,
        end: H.value
      }, I.value += 1;
    }
    function ye() {
      nextTick(() => {
        const t = [e.value.translations.period, e.value.translations.open, e.value.translations.high, e.value.translations.low, e.value.translations.last, e.value.translations.volume], a = b.value.map((m) => [
          m.period,
          m.open.value,
          m.high.value,
          m.low.value,
          m.last.value,
          m.volume
        ]), l = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([t]).concat(a), o = Vt(l);
        Nt({ csvContent: o, title: e.value.style.title.text || "vue-ui-candlestick" });
      });
    }
    const M = computed(() => {
      const t = b.value.map((o) => [
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
    }), R2 = ref(false);
    function Ve(t) {
      R2.value = t, K.value += 1;
    }
    function he() {
      w.value.showTable = !w.value.showTable;
    }
    function pe() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    const U = ref(false);
    function J() {
      U.value = !U.value;
    }
    return Ne({
      generatePdf: re2,
      generateCsv: ye,
      generateImage: ve,
      toggleTable: he,
      toggleTooltip: pe,
      toggleAnnotator: J
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "candlestickChart",
      ref: S,
      class: normalizeClass(`vue-ui-candlestick ${R2.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`position:relative;font-family:${e.value.style.fontFamily}; text-align:center;background:${e.value.style.backgroundColor}; ${e.value.responsive ? "height: 100%" : ""}`),
      id: `vue-ui-candlestick_${x2.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: S.value,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        active: U.value,
        onClose: J
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Te.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: le,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: Q,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ae2.value}`,
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
      e.value.userOptions.show && L.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Ae,
        key: `user_options_${K.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(ne),
        isPrinting: unref(ie),
        uid: x2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: R2.value,
        isTooltip: w.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: S.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: U.value,
        onToggleFullscreen: Ve,
        onGeneratePdf: unref(re2),
        onGenerateCsv: ye,
        onGenerateImage: unref(ve),
        onToggleTable: he,
        onToggleTooltip: pe,
        onToggleAnnotator: J
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
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: l, isAnnotator: o }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: l, isAnnotator: o })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      L.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": R2.value, "vue-data-ui-fulscreen--off": !R2.value }),
        viewBox: `0 0 ${c2.value.width <= 0 ? 10 : c2.value.width} ${c2.value.height <= 0 ? 10 : c2.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        b.value.length > 0 ? (openBlock(), createElementBlock("g", mt, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `bearish_gradient_${x2.value}`,
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.candle.colors.bearish
              }, null, 8, kt),
              createBaseVNode("stop", {
                offset: "50%",
                "stop-color": `${unref(yt)(e.value.style.layout.candle.colors.bearish, 0.02)}DE`
              }, null, 8, wt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": `${unref(yt)(e.value.style.layout.candle.colors.bearish, 0.05)}66`
              }, null, 8, $t)
            ], 8, xt),
            createBaseVNode("linearGradient", {
              id: `bullish_gradient_${x2.value}`,
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.candle.colors.bullish
              }, null, 8, _t),
              createBaseVNode("stop", {
                offset: "50%",
                "stop-color": `${unref(yt)(e.value.style.layout.candle.colors.bullish, 0.02)}DE`
              }, null, 8, Nt2),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": `${unref(yt)(e.value.style.layout.candle.colors.bullish, 0.05)}66`
              }, null, 8, St)
            ], 8, Ct)
          ]),
          e.value.style.layout.grid.show ? (openBlock(), createElementBlock("g", At, [
            createBaseVNode("line", {
              x1: i.value.left,
              x2: i.value.left,
              y1: i.value.top,
              y2: i.value.bottom,
              stroke: e.value.style.layout.grid.stroke,
              "stroke-width": e.value.style.layout.grid.strokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Tt),
            createBaseVNode("line", {
              x1: i.value.left,
              x2: i.value.right,
              y1: i.value.bottom,
              y2: i.value.bottom,
              stroke: e.value.style.layout.grid.stroke,
              "stroke-width": e.value.style.layout.grid.strokeWidth,
              "stroke-linecap": "round"
            }, null, 8, zt)
          ])) : createCommentVNode("", true),
          e.value.style.layout.grid.yAxis.dataLabels.show ? (openBlock(), createElementBlock("g", Ft, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Fe.value, (l, o) => (openBlock(), createElementBlock("g", null, [
              l.value >= C.value.min && l.value <= C.value.max ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: i.value.left,
                x2: i.value.left - 5,
                y1: l.y,
                y2: l.y,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, Lt)) : createCommentVNode("", true),
              l.value >= C.value.min && l.value <= C.value.max ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: i.value.left - 8 + e.value.style.layout.grid.yAxis.dataLabels.offsetX,
                y: l.y + c2.value.yAxisFontSize / 3,
                "font-size": c2.value.yAxisFontSize,
                "text-anchor": "end",
                fill: e.value.style.layout.grid.yAxis.dataLabels.color,
                "font-weight": e.value.style.layout.grid.yAxis.dataLabels.bold ? "bold" : "normal"
              }, toDisplayString(e.value.style.layout.grid.yAxis.dataLabels.prefix) + " " + toDisplayString(unref(Pt)(l.value) ? l.value.toFixed(e.value.style.layout.grid.yAxis.dataLabels.roundingValue) : "") + " " + toDisplayString(e.value.style.layout.grid.yAxis.dataLabels.suffix), 9, Rt)) : createCommentVNode("", true)
            ]))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.layout.grid.xAxis.dataLabels.show ? (openBlock(), createElementBlock("g", Ot, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Le.value, (l, o) => (openBlock(), createElementBlock("g", null, [
              createBaseVNode("text", {
                transform: `translate(${i.value.left + v.value * o + v.value / 2}, ${i.value.bottom + c2.value.xAxisFontSize * 2 + e.value.style.layout.grid.xAxis.dataLabels.offsetY}), rotate(${e.value.style.layout.grid.xAxis.dataLabels.rotation})`,
                "text-anchor": e.value.style.layout.grid.xAxis.dataLabels.rotation > 0 ? "start" : e.value.style.layout.grid.xAxis.dataLabels.rotation < 0 ? "end" : "middle",
                "font-size": c2.value.xAxisFontSize,
                fill: e.value.style.layout.grid.xAxis.dataLabels.color,
                "font-weight": e.value.style.layout.grid.xAxis.dataLabels.bold ? "bold" : "normal"
              }, toDisplayString(l), 9, Vt2)
            ]))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (l, o) => (openBlock(), createElementBlock("g", null, [
              createBaseVNode("line", {
                x1: l.open.x,
                x2: l.open.x,
                y1: l.high.y,
                y2: l.low.y,
                stroke: e.value.style.layout.wick.stroke,
                "stroke-width": e.value.style.layout.wick.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, It),
              e.value.style.layout.wick.extremity.shape === "circle" ? (openBlock(), createElementBlock("g", Pt2, [
                createBaseVNode("circle", {
                  cx: l.high.x,
                  cy: l.high.y,
                  r: e.value.style.layout.wick.extremity.size === "auto" ? v.value / 20 : e.value.style.layout.wick.extremity.size,
                  fill: e.value.style.layout.wick.extremity.color
                }, null, 8, Bt),
                createBaseVNode("circle", {
                  cx: l.low.x,
                  cy: l.low.y,
                  r: e.value.style.layout.wick.extremity.size === "auto" ? v.value / 20 : e.value.style.layout.wick.extremity.size,
                  fill: e.value.style.layout.wick.extremity.color
                }, null, 8, Mt)
              ])) : createCommentVNode("", true),
              e.value.style.layout.wick.extremity.shape === "line" ? (openBlock(), createElementBlock("g", Ut2, [
                createBaseVNode("line", {
                  x1: l.high.x - (e.value.style.layout.wick.extremity.size === "auto" ? v.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  x2: l.high.x + (e.value.style.layout.wick.extremity.size === "auto" ? v.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  y1: l.high.y,
                  y2: l.high.y,
                  stroke: e.value.style.layout.wick.extremity.color,
                  "stroke-width": e.value.style.layout.wick.strokeWidth,
                  "stroke-linecap": "round"
                }, null, 8, Et),
                createBaseVNode("line", {
                  x1: l.low.x - (e.value.style.layout.wick.extremity.size === "auto" ? v.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  x2: l.low.x + (e.value.style.layout.wick.extremity.size === "auto" ? v.value * e.value.style.layout.candle.widthRatio : e.value.style.layout.wick.extremity.size) / 2,
                  y1: l.low.y,
                  y2: l.low.y,
                  stroke: e.value.style.layout.wick.extremity.color,
                  "stroke-width": e.value.style.layout.wick.strokeWidth,
                  "stroke-linecap": "round"
                }, null, 8, Dt2)
              ])) : createCommentVNode("", true)
            ]))), 256))
          ]),
          createBaseVNode("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (l, o) => (openBlock(), createElementBlock("rect", {
              x: l.open.x - v.value / 2 + v.value * (1 - e.value.style.layout.candle.widthRatio) / 2,
              y: l.isBullish ? l.last.y : l.open.y,
              height: Math.abs(l.last.y - l.open.y) <= 0 ? 1e-4 : Math.abs(l.last.y - l.open.y),
              width: v.value * e.value.style.layout.candle.widthRatio <= 0 ? 1e-4 : v.value * e.value.style.layout.candle.widthRatio,
              fill: e.value.style.layout.candle.gradient.underlayer,
              rx: e.value.style.layout.candle.borderRadius,
              stroke: "none"
            }, null, 8, Wt))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (l, o) => (openBlock(), createElementBlock("rect", {
              x: l.open.x - v.value / 2 + v.value * (1 - e.value.style.layout.candle.widthRatio) / 2,
              y: l.isBullish ? l.last.y : l.open.y,
              height: Math.abs(l.last.y - l.open.y) <= 0 ? 1e-4 : Math.abs(l.last.y - l.open.y),
              width: v.value * e.value.style.layout.candle.widthRatio <= 0 ? 1e-4 : v.value * e.value.style.layout.candle.widthRatio,
              fill: l.isBullish ? e.value.style.layout.candle.gradient.show ? `url(#bullish_gradient_${x2.value})` : e.value.style.layout.candle.colors.bullish : e.value.style.layout.candle.gradient.show ? `url(#bearish_gradient_${x2.value})` : e.value.style.layout.candle.colors.bearish,
              rx: e.value.style.layout.candle.borderRadius,
              stroke: e.value.style.layout.candle.stroke,
              "stroke-width": e.value.style.layout.candle.strokeWidth,
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, Gt))), 256))
          ]),
          createBaseVNode("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (l, o) => (openBlock(), createElementBlock("rect", {
              x: i.value.left + o * v.value,
              y: i.value.top,
              height: i.value.height <= 0 ? 1e-4 : i.value.height,
              width: v.value <= 0 ? 1e-4 : v.value,
              fill: j.value === o ? unref(dr)(e.value.style.layout.selector.color, e.value.style.layout.selector.opacity) : "transparent",
              onMouseover: (m) => Re(o, l),
              onMouseleave: a[0] || (a[0] = (m) => {
                j.value = void 0, G.value = false;
              })
            }, null, 40, Xt2))), 256))
          ])
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: c2.value }, void 0, true)
      ], 14, bt)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", jt2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ie) || unref(ne) })), void 0, true)
      ])) : createCommentVNode("", true),
      L.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
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
      e.value.style.zoom.show && L.value ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "chartSlicer",
        ref: ee
      }, [
        (openBlock(), createBlock(Ue, {
          key: `slicer_${I.value}`,
          background: e.value.style.zoom.color,
          borderColor: e.value.style.backgroundColor,
          fontSize: e.value.style.zoom.fontSize,
          useResetSlot: e.value.style.zoom.useResetSlot,
          labelLeft: $.dataset[y.value.start] ? $.dataset[y.value.start][0] : $.dataset[0][0],
          labelRight: $.dataset[y.value.end - 1] ? $.dataset[y.value.end - 1][0] : $.dataset.at(-1)[0],
          textColor: e.value.style.color,
          inputColor: e.value.style.zoom.color,
          selectColor: e.value.style.zoom.highlightColor,
          max: H.value,
          min: 0,
          valueStart: y.value.start,
          valueEnd: y.value.end,
          start: y.value.start,
          "onUpdate:start": a[1] || (a[1] = (l) => y.value.start = l),
          end: y.value.end,
          "onUpdate:end": a[2] || (a[2] = (l) => y.value.end = l),
          onReset: Oe
        }, {
          "reset-action": withCtx(({ reset: l }) => [
            renderSlot(t.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: l })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"]))
      ], 512)) : createCommentVNode("", true),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: Z
      }, [
        renderSlot(t.$slots, "legend", { legend: b.value }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 8,
        ref_key: "source",
        ref: te2,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: w.value.showTooltip && G.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: S.value,
        content: X.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...q.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...q.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      L.value ? (openBlock(), createBlock(R, {
        key: 9,
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
            key: `table_${oe.value}`,
            colNames: M.value.colNames,
            head: M.value.head,
            body: M.value.body,
            config: M.value.config,
            title: `${e.value.style.title.text}${e.value.style.title.subtitle.text ? ` : ${e.value.style.title.subtitle.text}` : ""}`,
            onClose: a[3] || (a[3] = (l) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createTextVNode(toDisplayString(l), 1)
            ]),
            td: withCtx(({ td: l }) => [
              createBaseVNode("div", { innerHTML: l }, null, 8, Ht)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, gt));
  }
};
var vl = s(Yt, [["__scopeId", "data-v-bec260db"]]);
export {
  vl as default
};
//# sourceMappingURL=vue-ui-candlestick-Bw1O3QmK-62QOSP2P.js.map
