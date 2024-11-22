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
  Bt,
  Ge,
  Gt,
  Ht,
  It,
  Kt,
  Lt,
  P,
  Qt,
  R,
  et,
  gt,
  ir,
  j,
  k,
  nr,
  oe,
  or,
  vt,
  z
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createVNode,
  guardReactiveProps,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-quick-chart-CiiSUexi.js
var A = {
  LINE: "LINE",
  BAR: "BAR",
  DONUT: "DONUT"
};
var It2 = ["SERIE", "SERIES", "DATA", "VALUE", "VALUES", "NUM"];
function Et({ dataset: s2, barLineSwitch: $ = 6 }) {
  let g = null, R2 = null, q = 0;
  if ((typeof s2 == "number" || typeof s2 == "string") && console.warn(`The provided dataset (${s2}) is not sufficient to build a chart`), xe(s2) && (Z(s2) && (s2.length < $ ? g = A.BAR : g = A.LINE, R2 = s2, q = s2.length), ze(s2))) {
    if (!Nt(s2))
      return console.warn("The objects in the dataset array have a different data structure. Either keys or value types are different."), false;
    const oe2 = Object.keys(s2[0]), se2 = Object.values(s2[0]);
    if (!oe2.some((P2) => Ot(P2)))
      return console.warn("The data type of the dataset objects in the array must contain one of the following keys: DATA, SERIES, VALUE, VALUES, NUM. Casing is not important."), false;
    Ye(se2, (P2) => typeof P2 == "number") && (g = A.DONUT, R2 = s2), Ye(se2, (P2) => Array.isArray(P2) && Z(P2)) && (Je(s2) > $ ? g = A.LINE : g = A.BAR, q = Je(s2), R2 = s2.map((P2) => ({
      ...P2,
      data: Ft(P2, (G) => Z(G))
    }))), s2 = s2.map((P2) => Qe(P2)), R2 = R2.map((P2) => Qe(P2));
  }
  return xe(s2) && [...new Set(s2.flatMap((oe2) => Array.isArray(oe2)))][0], {
    dataset: s2,
    type: g,
    usableDataset: R2,
    maxSeriesLength: q
  };
}
function Ke(s2) {
  return !s2 || xe(s2) && !s2.length;
}
function xe(s2) {
  return Array.isArray(s2);
}
function Z(s2) {
  if (!xe(s2) || Ke(s2)) return false;
  const $ = s2.map((g) => Number(g));
  return ![...new Set($.flatMap((g) => typeof g == "number" && !isNaN(g)))].includes(false);
}
function ze(s2) {
  return !xe(s2) || Ke(s2) || !![...new Set(s2.flatMap((g) => typeof g == "object" && !Array.isArray(g)))].includes(false) ? false : !s2.map((g) => Object.keys(g).length > 0).includes(false);
}
function Rt(s2, $) {
  const g = Object.keys(s2).sort(), R2 = Object.keys($).sort();
  if (g.length !== R2.length)
    return false;
  for (let q = 0; q < g.length; q += 1) {
    const j2 = g[q], le = R2[q];
    if (j2 !== le || typeof s2[j2] != typeof $[le])
      return false;
  }
  return true;
}
function Nt(s2) {
  if (s2.length <= 1) return true;
  for (let $ = 0; $ < s2.length; $ += 1)
    for (let g = $ + 1; g < s2.length; g += 1)
      if (!Rt(s2[$], s2[g]))
        return false;
  return true;
}
function Ot(s2) {
  return It2.includes(s2.toUpperCase());
}
function Ye(s2, $) {
  let g = [];
  for (let R2 = 0; R2 < s2.length; R2 += 1)
    g.push($(s2[R2]));
  return g.includes(true);
}
function Je(s2) {
  return Math.max(...[...s2].flatMap(($) => Object.values($).filter((g) => Z(g)).map((g) => g.length)));
}
function Ft(s2, $) {
  return Object.values(s2).filter((g) => $(g))[0];
}
function Qe(s2) {
  const $ = {};
  for (let g in s2)
    s2.hasOwnProperty(g) && ($[g.toUpperCase()] = s2[g]);
  return $;
}
var et2 = (s2) => (pushScopeId("data-v-b839026c"), s2 = s2(), popScopeId(), s2);
var Mt = ["id"];
var Bt2 = ["xmlns", "viewBox"];
var Ut = ["id"];
var Dt = ["id"];
var Vt = et2(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var qt = ["id"];
var Wt = ["flood-color"];
var jt = {
  key: 0,
  class: "donut-label-connectors"
};
var Gt2 = ["d", "stroke", "stroke-width", "filter"];
var Ht2 = ["cx", "cy", "r", "fill", "filter"];
var Xt = { class: "donut" };
var Zt = ["d", "fill", "stroke", "stroke-width", "filter"];
var Yt = ["d", "onMouseenter", "onClick"];
var Jt = {
  key: 1,
  class: "donut-labels quick-animation"
};
var Qt2 = ["cx", "cy", "fill", "stroke", "filter"];
var Kt2 = ["text-anchor", "x", "y", "fill", "font-size", "filter"];
var ea = ["text-anchor", "x", "y", "fill", "font-size", "filter"];
var ta = {
  key: 2,
  class: "donut-hollow quick-animation"
};
var aa = ["x", "y", "font-size", "fill"];
var la = ["x", "y", "font-size", "fill"];
var oa = {
  key: 0,
  class: "line-grid"
};
var ia = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ua = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var na = {
  key: 1,
  class: "line-axis"
};
var ra = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var sa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var va = {
  key: 2,
  class: "yLabels"
};
var da = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ca = ["x", "y", "font-size", "fill"];
var ha = {
  key: 3,
  class: "periodLabels"
};
var fa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ga = ["font-size", "text-anchor", "fill", "transform"];
var ma = { class: "plots" };
var pa = { class: "line-plot-series" };
var xa = ["d", "stroke", "stroke-width"];
var ya = ["d", "stroke", "stroke-width"];
var ka = ["d", "stroke", "stroke-width"];
var ba = ["d", "stroke", "stroke-width"];
var Sa = ["cx", "cy", "fill", "stroke"];
var wa = {
  key: 4,
  class: "dataLabels"
};
var _a = ["font-size", "fill", "x", "y"];
var Aa = { class: "tooltip-traps" };
var La = ["x", "y", "height", "width", "fill", "onMouseenter", "onClick"];
var za = {
  key: 0,
  class: "line-grid"
};
var $a = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ca = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Pa = {
  key: 1,
  class: "line-axis"
};
var Ta = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ia = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ea = {
  key: 2,
  class: "yLabels"
};
var Ra = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Na = ["x", "y", "font-size", "fill"];
var Oa = {
  key: 3,
  class: "periodLabels"
};
var Fa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ma = ["font-size", "text-anchor", "transform", "fill"];
var Ba = { class: "plots" };
var Ua = ["x", "width", "height", "y", "fill", "stroke", "stroke-width"];
var Da = ["to"];
var Va = ["from", "to"];
var qa = {
  key: 4,
  class: "dataLabels"
};
var Wa = ["x", "y", "font-size", "fill"];
var ja = { class: "tooltip-traps" };
var Ga = ["x", "y", "height", "width", "fill", "onMouseenter", "onClick"];
var Ha = {
  key: 3,
  class: "axis-labels"
};
var Xa = { key: 0 };
var Za = ["font-size", "fill", "x", "y"];
var Ya = { key: 1 };
var Ja = ["font-size", "fill", "x", "y"];
var Qa = { key: 2 };
var Ka = ["font-size", "fill", "transform"];
var el = { key: 3 };
var tl = ["font-size", "fill", "transform"];
var al = {
  key: 4,
  class: "vue-data-ui-watermark"
};
var ll = ["onClick"];
var ol = ["onClick"];
var il = ["onClick"];
var ul = {
  key: 1,
  class: "vue-ui-quick-chart-not-processable"
};
var nl = et2(() => createBaseVNode("span", null, "Dataset is not processable", -1));
var rl = {
  __name: "vue-ui-quick-chart",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: [Array, Object, String, Number],
      default() {
        return null;
      }
    }
  },
  emits: ["selectDatapoint", "selectLegend"],
  setup(s2, { expose: $, emit: g }) {
    const R2 = s2, { vue_ui_quick_chart: q } = oe(), j2 = ref(null), le = ref(null), oe2 = ref(null), se2 = ref(null), P2 = ref(Lt()), G = ref(false), ve = ref(null), Q = ref(""), W = ref(null), w = ref([]), Oe = ref(0), ye = ref(0), e = computed({
      get: () => Fe(),
      set: (u2) => u2
    });
    function Fe() {
      const u2 = c({
        userConfig: R2.config,
        defaultConfig: q
      });
      return u2.theme ? {
        ...c({
          userConfig: Ge.vue_ui_quick_chart[u2.theme] || R2.config,
          defaultConfig: u2
        }),
        customPalette: R[u2.theme] || et
      } : u2;
    }
    watch(() => R2.config, (u2) => {
      e.value = Fe(), S.value.width = e.value.width, S.value.height = e.value.height, Ue();
    }, { deep: true }), watch(() => R2.dataset, (u2) => {
      y.value = ce.value, k2.value.start = 0, k2.value.end = y.value.maxSeriesLength, ye.value += 1;
    }, { deep: true });
    const de = computed(() => or(e.value.customPalette)), ce = computed(() => {
      const u2 = Et({ dataset: ir(R2.dataset, [
        "serie",
        "series",
        "data",
        "value",
        "values",
        "num"
      ]), barLineSwitch: e.value.chartIsBarUnderDatasetLength });
      return u2 || console.error("VueUiQuickChart : Dataset is not processable"), u2;
    }), y = ref(ce.value), tt = computed(() => !!y.value), z2 = computed(() => y.value ? y.value.type : null);
    watch(() => z2.value, (u2) => {
      u2 || Kt({
        componentName: "VueUiQuickChart",
        type: "dataset"
      });
    }, { immediate: true });
    const { isPrinting: ke, isImaging: be, generatePdf: Me, generateImage: Be } = se({
      elementId: `${z2.value}_${P2.value}`,
      fileName: e.value.title || z2.value
    }), S = ref({
      width: e.value.width,
      height: e.value.height
    }), Se = ref({
      showTooltip: e.value.showTooltip
    }), we = ref(null);
    onMounted(() => {
      Ue();
    });
    function Ue() {
      if (e.value.responsive) {
        const u2 = O(() => {
          const { width: c2, height: t } = M({
            chart: j2.value,
            title: e.value.title ? le.value : null,
            legend: e.value.showLegend ? oe2.value : null,
            slicer: [A.BAR, A.LINE].includes(z2.value) && e.value.zoomXy && y.value.maxSeriesLength > 1 ? se2.value : null
          });
          S.value.width = c2, S.value.height = t;
        });
        we.value = new ResizeObserver(u2), we.value.observe(j2.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      we.value && we.value.disconnect();
    });
    const at = computed(() => {
      switch (z2.value) {
        case A.LINE:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
        case A.BAR:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
        case A.DONUT:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
        default:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
      }
    });
    function De(u2) {
      return [...u2].map((c2) => c2.value).reduce((c2, t) => c2 + t, 0);
    }
    function he(u2) {
      return e.value.blurOnHover && ![null, void 0].includes(W.value) && W.value !== u2 ? `url(#blur_${P2.value})` : "";
    }
    function Ve(u2, c2) {
      w.value.includes(u2) ? w.value = w.value.filter((t) => t !== u2) : w.value.length < c2 && w.value.push(u2);
    }
    const qe = ref(null), We = ref(null), _e2 = ref(false);
    function lt(u2, c2) {
      _e2.value = true;
      let t = u2.value;
      if (w.value.includes(u2.id)) {
        let r = function() {
          t > n ? (_e2.value = false, cancelAnimationFrame(We.value), y.value = {
            ...y.value,
            dataset: y.value.dataset.map((h, N) => u2.id === `donut_${N}` ? {
              ...h,
              value: n,
              VALUE: n
            } : h)
          }) : (t += n * 0.025, y.value = {
            ...y.value,
            dataset: y.value.dataset.map((h, N) => u2.id === `donut_${N}` ? {
              ...h,
              value: t,
              VALUE: t
            } : h)
          }, We.value = requestAnimationFrame(r));
        };
        w.value = w.value.filter((h) => h !== u2.id);
        const n = ce.value.dataset.find((h, N) => u2.id === `donut_${N}`).VALUE;
        r();
      } else if (c2.length > 1) {
        let n = function() {
          t < 0.1 ? (_e2.value = false, cancelAnimationFrame(qe.value), w.value.push(u2.id), y.value = {
            ...y.value,
            dataset: y.value.dataset.map((r, h) => u2.id === `donut_${h}` ? {
              ...r,
              value: 0,
              VALUE: 0
            } : r)
          }) : (t /= 1.1, y.value = {
            ...y.value,
            dataset: y.value.dataset.map((r, h) => u2.id === `donut_${h}` ? {
              ...r,
              value: t,
              VALUE: t
            } : r)
          }, qe.value = requestAnimationFrame(n));
        };
        n();
      }
    }
    const Y = ref(null);
    function ot(u2) {
      Y.value = u2;
    }
    const je = computed(() => e.value.donutThicknessRatio < 0.15 ? 0.15 : e.value.donutThicknessRatio > 0.4 ? 0.4 : e.value.donutThicknessRatio), C = computed(() => {
      if (z2.value !== A.DONUT) return null;
      const u2 = y.value.dataset.map((o, i) => ({
        ...o,
        value: o.VALUE || o.DATA || o.SERIE || o.VALUES || o.NUM || 0,
        name: o.NAME || o.DESCRIPTION || o.TITLE || o.LABEL || `Serie ${i}`,
        id: `donut_${i}`
      })).map((o, i) => ({
        ...o,
        color: o.COLOR ? j(o.COLOR) : de.value[i + e.value.paletteStartIndex] || et[i + e.value.paletteStartIndex] || et[(i + e.value.paletteStartIndex) % et.length],
        immutableValue: o.value
      }));
      function c2(o, i) {
        return Gt({
          v: isNaN(o.value / De(i)) ? 0 : o.value / De(i) * 100,
          s: "%",
          r: e.value.dataLabelRoundingPercentage
        });
      }
      function t(o) {
        return o.proportion * 100 > e.value.donutHideLabelUnderPercentage;
      }
      function n(o, i) {
        const b = ce.value.dataset.find((T, F) => `donut_${F}` === o).VALUE;
        return Math.abs(String(Number(b.toFixed(0))).length - String(Number(i.toFixed(0))).length);
      }
      function r({ datapoint: o, seriesIndex: i }) {
        ve.value = { datapoint: o, seriesIndex: i, config: e.value, dataset: u2 }, W.value = o.id;
        const b = e.value.tooltipCustomFormat;
        if (Ht(b) && $t(() => b({
          datapoint: o,
          seriesIndex: i,
          series: u2,
          config: e.value
        })))
          Q.value = b({
            datapoint: o,
            seriesIndex: i,
            series: u2,
            config: e.value
          });
        else {
          let x = "";
          x += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.tooltipBorderColor};padding-bottom:6px;margin-bottom:3px;">${o.name}</div>`, x += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${o.color}"/></svg>`, x += `<b>${nr(
            e.value.formatter,
            o.value,
            Gt({
              p: e.value.valuePrefix,
              v: o.value,
              s: e.value.valueSuffix,
              r: e.value.dataLabelRoundingValue
            }),
            { datapoint: o, seriesIndex: i }
          )}</b>`, x += `<span>(${Gt({ v: o.proportion * 100, s: "%", r: e.value.dataLabelRoundingPercentage })})</span></div>`, Q.value = `<div>${x}</div>`;
        }
        G.value = true;
      }
      function h() {
        G.value = false, W.value = null, Y.value = null;
      }
      const N = {
        centerX: S.value.width / 2,
        centerY: S.value.height / 2
      }, B = u2.filter((o) => !w.value.includes(o.id)).map((o) => o.value || 0).reduce((o, i) => o + i, 0), ie2 = u2.map((o, i) => ({
        ...o,
        proportion: (o.value || 0) / B,
        value: o.value || 0,
        absoluteValue: ce.value.dataset.find((b, x) => `donut_${x}` === o.id).VALUE
      })), K = S.value.width / 2, ue = S.value.height / 2, ee = S.value.height * e.value.donutRadiusRatio;
      return {
        dataset: ie2.filter((o) => !w.value.includes(o.id)),
        legend: ie2,
        drawingArea: N,
        displayArcPercentage: c2,
        isArcBigEnough: t,
        useTooltip: r,
        killTooltip: h,
        getSpaces: n,
        total: B,
        cx: K,
        cy: ue,
        radius: ee,
        chart: gt(
          { series: u2.filter((o) => !w.value.includes(o.id)) },
          K,
          ue,
          ee,
          ee,
          1.99999,
          2,
          1,
          360,
          105.25,
          S.value.height * je.value
        )
      };
    }), k2 = ref({
      start: 0,
      end: y.value.maxSeriesLength
    });
    function it() {
      k2.value = {
        start: 0,
        end: y.value.maxSeriesLength
      }, ye.value += 1;
    }
    const ut = computed(() => {
      if (!e.value.zoomMinimap.show || z2.value === A.DONUT) return [];
      let u2 = [];
      Z(y.value.dataset) && (u2 = y.value.dataset), ze(y.value.dataset) && (u2 = y.value.dataset.map((r, h) => ({
        values: r.VALUE || r.DATA || r.SERIE || r.SERIES || r.VALUES || r.NUM || 0,
        id: z2.value === A.LINE ? `line_${h}` : `bar_${h}`
      })).filter((r) => !w.value.includes(r.id)));
      const c2 = Z(u2) ? u2.length : Math.max(...u2.map((r) => r.values.length));
      let t = [];
      if (Z(u2))
        t = u2;
      else
        for (let r = 0; r < c2; r += 1)
          t.push(u2.map((h) => h.values[r] || 0).reduce((h, N) => (h || 0) + (N || 0), 0));
      const n = Math.min(...t);
      return t.map((r) => r + (n < 0 ? Math.abs(n) : 0));
    }), d = computed(() => {
      if (z2.value !== A.LINE) return null;
      const u2 = {
        height: S.value.height,
        width: S.value.width
      }, c2 = {
        left: e.value.xyPaddingLeft,
        top: e.value.xyPaddingTop,
        right: u2.width - e.value.xyPaddingRight,
        bottom: u2.height - e.value.xyPaddingBottom,
        width: u2.width - e.value.xyPaddingLeft - e.value.xyPaddingRight,
        height: u2.height - e.value.xyPaddingTop - e.value.xyPaddingBottom
      };
      let t = [];
      Z(y.value.dataset) && (t = [
        {
          values: y.value.dataset.slice(k2.value.start, k2.value.end),
          absoluteIndices: y.value.dataset.map((o, i) => i).slice(k2.value.start, k2.value.end),
          name: e.value.title,
          color: de.value[e.value.paletteStartIndex] || et[e.value.paletteStartIndex],
          id: "line_0"
        }
      ]), ze(y.value.dataset) && (t = y.value.dataset.map((o, i) => ({
        ...o,
        values: o.VALUE || o.DATA || o.SERIE || o.SERIES || o.VALUES || o.NUM || 0,
        name: o.NAME || o.DESCRIPTION || o.TITLE || o.LABEL || `Serie ${i}`,
        id: `line_${i}`
      })).map((o, i) => ({
        ...o,
        color: o.COLOR ? j(o.COLOR) : de.value[i + e.value.paletteStartIndex] || et[i + e.value.paletteStartIndex] || et[(i + e.value.paletteStartIndex) % et.length],
        values: o.values.slice(k2.value.start, k2.value.end),
        absoluteIndices: o.values.map((b, x) => x).slice(k2.value.start, k2.value.end)
      })));
      const n = {
        max: Math.max(...t.filter((o) => !w.value.includes(o.id)).flatMap((o) => o.values)),
        min: Math.min(...t.filter((o) => !w.value.includes(o.id)).flatMap((o) => o.values)),
        maxSeries: Math.max(...t.map((o) => o.values.length))
      }, r = It(n.min < 0 ? n.min : 0, n.max < 0 ? 0 : n.max, e.value.xyScaleSegments), h = n.min < 0 ? Math.abs(n.min) : 0, N = n.max < 0 ? c2.top : c2.bottom - h / (r.max + h) * c2.height, B = c2.width / n.maxSeries, ie2 = r.ticks.map((o) => ({
        y: c2.bottom - c2.height * ((o + h) / (r.max + h)),
        x: c2.left - 8,
        value: o
      })), K = t.map((o, i) => ({
        ...o,
        coordinates: o.values.map((b, x) => ({
          x: c2.left + B * (x + 1) - B / 2,
          y: c2.bottom - (b + h) / (r.max + h) * c2.height,
          value: b
        }))
      })).map((o) => {
        let i = [];
        return o.coordinates.forEach((b) => {
          i.push(`${b.x},${b.y} `);
        }), {
          ...o,
          linePath: i.join(" ")
        };
      });
      function ue(o) {
        W.value = o, Y.value = o;
        const i = t.map((x) => ({
          ...x,
          value: x.values[o],
          absoluteIndex: x.absoluteIndices[o]
        })).filter((x) => !w.value.includes(x.id));
        ve.value = { datapoint: i, seriesIndex: o, config: e.value, dataset: t };
        const b = e.value.tooltipCustomFormat;
        if (Ht(b) && $t(() => b({
          datapoint: i,
          seriesIndex: o,
          series: t,
          config: e.value
        })))
          Q.value = b({
            datapoint: i,
            seriesIndex: o,
            series: t,
            config: e.value
          });
        else {
          let x = "";
          e.value.xyPeriods[i[0].absoluteIndex] && (x += `<div style="border-bottom:1px solid ${e.value.tooltipBorderColor};padding-bottom:6px;margin-bottom:3px;">${e.value.xyPeriods[i[0].absoluteIndex]}</div>`), i.forEach((T, F) => {
            x += `
                    <div style="display:flex; flex-wrap: wrap; align-items:center; gap:3px;">
                        <svg viewBox="0 0 12 12" height="14" width="12"><circle cx="6" cy="6" r="6" stroke="none" fill="${T.color}"/></svg>
                        <span>${T.name}:</span>
                        <b>${nr(
              e.value.formatter,
              T.value,
              Gt({
                p: e.value.valuePrefix,
                v: T.value,
                s: e.value.valueSuffix,
                r: e.value.dataLabelRoundingValue
              }),
              { datapoint: T, seriesIndex: F }
            )}
                        </b>
                    </div>
                `;
          }), Q.value = x;
        }
        G.value = true;
      }
      function ee() {
        W.value = null, G.value = false;
      }
      return {
        absoluteZero: N,
        dataset: K.filter((o) => !w.value.includes(o.id)),
        legend: K,
        drawingArea: c2,
        extremes: n,
        slotSize: B,
        yLabels: ie2,
        useTooltip: ue,
        killTooltip: ee
      };
    }), v = computed(() => {
      if (z2.value !== A.BAR) return null;
      const u2 = {
        height: S.value.height,
        width: S.value.width
      }, c2 = {
        left: e.value.xyPaddingLeft,
        top: e.value.xyPaddingTop,
        right: u2.width - e.value.xyPaddingRight,
        bottom: u2.height - e.value.xyPaddingBottom,
        width: u2.width - e.value.xyPaddingLeft - e.value.xyPaddingRight,
        height: u2.height - e.value.xyPaddingTop - e.value.xyPaddingBottom
      };
      let t = [];
      Z(y.value.dataset) && (t = [
        {
          values: y.value.dataset.slice(k2.value.start, k2.value.end),
          absoluteIndices: y.value.dataset.map((i, b) => b).slice(k2.value.start, k2.value.end),
          name: e.value.title,
          color: de.value[e.value.paletteStartIndex] || et[e.value.paletteStartIndex],
          id: "bar_0"
        }
      ]), ze(y.value.dataset) && (t = y.value.dataset.map((i, b) => ({
        ...i,
        values: i.VALUE || i.DATA || i.SERIE || i.SERIES || i.VALUES || i.NUM || 0,
        name: i.NAME || i.DESCRIPTION || i.TITLE || i.LABEL || `Serie ${b}`,
        id: `bar_${b}`
      })).map((i, b) => ({
        ...i,
        color: i.COLOR ? j(i.COLOR) : de.value[b + e.value.paletteStartIndex] || et[b + e.value.paletteStartIndex] || et[(b + e.value.paletteStartIndex) % et.length],
        values: i.values.slice(k2.value.start, k2.value.end),
        absoluteIndices: i.values.map((x, T) => T).slice(k2.value.start, k2.value.end)
      })));
      const n = {
        max: Math.max(...t.filter((i) => !w.value.includes(i.id)).flatMap((i) => i.values)) < 0 ? 0 : Math.max(...t.filter((i) => !w.value.includes(i.id)).flatMap((i) => i.values)),
        min: Math.min(...t.filter((i) => !w.value.includes(i.id)).flatMap((i) => i.values)),
        maxSeries: Math.max(...t.filter((i) => !w.value.includes(i.id)).map((i) => i.values.length))
      }, r = It(n.min < 0 ? n.min : 0, n.max, e.value.xyScaleSegments), h = r.min < 0 ? Math.abs(r.min) : 0, N = c2.bottom - h / (r.max + h) * c2.height, B = c2.width / n.maxSeries, ie2 = r.ticks.map((i) => ({
        y: c2.bottom - c2.height * ((i + h) / (r.max + h)),
        x: c2.left - 8,
        value: i
      })), K = t.map((i, b) => ({
        ...i,
        coordinates: i.values.map((x, T) => {
          const F = (x + h) / (n.max + h) * c2.height, fe = Math.abs(x) / Math.abs(n.min) * (c2.height - N), Ce = h / (n.max + h) * c2.height, ge = B / t.filter((te) => !w.value.includes(te.id)).length - e.value.barGap / t.filter((te) => !w.value.includes(te.id)).length;
          return {
            x: c2.left + B * T + ge * b + e.value.barGap / 2,
            y: x > 0 ? c2.bottom - F : N,
            height: x > 0 ? F - Ce : fe,
            value: x,
            width: ge
          };
        })
      })), ue = t.filter((i) => !w.value.includes(i.id)).map((i, b) => ({
        ...i,
        coordinates: i.values.map((x, T) => {
          const F = (x + h) / (n.max + h) * c2.height, fe = Math.abs(x) / (n.max + h) * c2.height, Ce = h / (n.max + h) * c2.height, ge = B / t.filter((te) => !w.value.includes(te.id)).length - e.value.barGap / t.filter((te) => !w.value.includes(te.id)).length;
          return {
            x: c2.left + B * T + ge * b + e.value.barGap / 2,
            y: x > 0 ? c2.bottom - F : N,
            height: x > 0 ? F - Ce : fe,
            value: x,
            width: ge
          };
        })
      }));
      function ee(i) {
        W.value = i, Y.value = i;
        const b = t.map((T) => ({
          ...T,
          value: T.values[i],
          absoluteIndex: T.absoluteIndices[i]
        })).filter((T) => !w.value.includes(T.id));
        ve.value = { datapoint: b, seriesIndex: i, config: e.value, dataset: t };
        const x = e.value.tooltipCustomFormat;
        if (Ht(x) && $t(() => x({
          datapoint: b,
          seriesIndex: i,
          series: t,
          config: e.value
        })))
          Q.value = x({
            point: b,
            seriesIndex: i,
            series: t,
            config: e.value
          });
        else {
          let T = "";
          e.value.xyPeriods[b[0].absoluteIndex] && (T += `<div style="border-bottom:1px solid ${e.value.tooltipBorderColor};padding-bottom:6px;margin-bottom:3px;">${e.value.xyPeriods[b[0].absoluteIndex]}</div>`), b.forEach((F, fe) => {
            T += `
                    <div style="display:flex; flex-wrap: wrap; align-items:center; gap:3px;">
                        <svg viewBox="0 0 12 12" height="14" width="12"><rect x=0 y="0" width="12" height="12" rx="1" stroke="none" fill="${F.color}"/></svg>
                        <span>${F.name}:</span>
                        <b>${nr(
              e.value.formatter,
              F.value,
              Gt({
                p: e.value.valuePrefix,
                v: F.value,
                s: e.value.valueSuffix,
                r: e.value.dataLabelRoundingValue
              }),
              { datapoint: F, seriesIndex: fe }
            )}
                        </b>
                    </div>
                `;
          }), Q.value = T;
        }
        G.value = true;
      }
      function o() {
        G.value = false, W.value = null, Y.value = null;
      }
      return {
        absoluteZero: N,
        dataset: ue.filter((i) => !w.value.includes(i.id)),
        legend: K,
        drawingArea: c2,
        extremes: n,
        slotSize: B,
        yLabels: ie2,
        useTooltip: ee,
        killTooltip: o
      };
    }), $e = ref(false);
    function nt(u2) {
      $e.value = u2, Oe.value += 1;
    }
    function Ge2() {
      Se.value.showTooltip = !Se.value.showTooltip;
    }
    return $({
      generatePdf: Me,
      generateImage: Be,
      toggleTooltip: Ge2
    }), (u2, c2) => tt.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      id: `${z2.value}_${P2.value}`,
      ref_key: "quickChart",
      ref: j2,
      class: normalizeClass({ "vue-ui-quick-chart": true, "vue-data-ui-wrapper-fullscreen": $e.value }),
      style: normalizeStyle(`background:${e.value.backgroundColor};color:${e.value.color};font-family:${e.value.fontFamily}; position: relative; ${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.showUserOptions ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${Oe.value}`,
        backgroundColor: e.value.backgroundColor,
        color: e.value.color,
        isPrinting: unref(ke),
        isImaging: unref(be),
        uid: P2.value,
        hasTooltip: e.value.userOptionsButtons.tooltip && e.value.showTooltip,
        hasPdf: e.value.userOptionsButtons.pdf,
        hasImg: e.value.userOptionsButtons.img,
        hasFullscreen: e.value.userOptionsButtons.fullscreen,
        hasXls: false,
        isTooltip: Se.value.showTooltip,
        isFullscreen: $e.value,
        titles: { ...e.value.userOptionsButtonTitles },
        chartElement: j2.value,
        position: e.value.userOptionsPosition,
        onToggleFullscreen: nt,
        onGeneratePdf: unref(Me),
        onGenerateImage: unref(Be),
        onToggleTooltip: Ge2
      }, createSlots({ _: 2 }, [
        u2.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(u2.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        u2.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(u2.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        u2.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(u2.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        u2.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: n }) => [
            renderSlot(u2.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: n })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      e.value.title ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "quickChartTitle",
        ref: le,
        class: "vue-ui-quick-chart-title",
        style: normalizeStyle(`background:transparent;color:${e.value.color};font-size:${e.value.titleFontSize}px;font-weight:${e.value.titleBold ? "bold" : "normal"};text-align:${e.value.titleTextAlign}`)
      }, toDisplayString(e.value.title), 5)) : createCommentVNode("", true),
      z2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        viewBox: at.value,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${P2.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 2,
              id: `blur_std_${P2.value}`
            }, null, 8, Dt),
            Vt
          ], 8, Ut),
          createBaseVNode("filter", {
            id: `shadow_${P2.value}`,
            "color-interpolation-filters": "sRGB"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "0",
              stdDeviation: "10",
              "flood-opacity": "0.5",
              "flood-color": e.value.donutShadowColor
            }, null, 8, Wt)
          ], 8, qt)
        ]),
        z2.value === A.DONUT ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", jt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(C.value.chart, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              C.value.isArcBigEnough(t) ? (openBlock(), createElementBlock("path", {
                key: 0,
                d: unref(Bt)(t, { x: S.value.width / 2, y: S.value.height / 2 }, 16, 16, false, false, S.value.height * je.value),
                stroke: t.color,
                "stroke-width": e.value.donutLabelMarkerStrokeWidth,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none",
                filter: he(t.id)
              }, null, 8, Gt2)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("circle", {
            cx: C.value.cx,
            cy: C.value.cy,
            r: C.value.radius,
            fill: e.value.backgroundColor,
            filter: e.value.donutUseShadow ? `url(#shadow_${P2.value})` : ""
          }, null, 8, Ht2),
          createBaseVNode("g", Xt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(C.value.chart, (t, n) => (openBlock(), createElementBlock("path", {
              d: t.arcSlice,
              fill: t.color,
              stroke: e.value.backgroundColor,
              "stroke-width": e.value.donutStrokeWidth,
              filter: he(t.id)
            }, null, 8, Zt))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(C.value.chart, (t, n) => (openBlock(), createElementBlock("path", {
              d: t.arcSlice,
              fill: "transparent",
              onMouseenter: (r) => C.value.useTooltip({ datapoint: t, seriesIndex: n }),
              onMouseout: c2[0] || (c2[0] = (r) => C.value.killTooltip()),
              onClick: (r) => g("selectDatapoint", t)
            }, null, 40, Yt))), 256))
          ]),
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", Jt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(C.value.chart, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              C.value.isArcBigEnough(t) ? (openBlock(), createElementBlock("circle", {
                key: 0,
                cx: unref(z)(t).x,
                cy: unref(P)(t) - 3.7,
                fill: t.color,
                stroke: e.value.backgroundColor,
                "stroke-width": 1,
                r: 3,
                filter: he(t.id)
              }, null, 8, Qt2)) : createCommentVNode("", true),
              C.value.isArcBigEnough(t) ? (openBlock(), createElementBlock("text", {
                key: 1,
                "text-anchor": unref(z)(t, true, 20).anchor,
                x: unref(z)(t, true).x,
                y: unref(P)(t),
                fill: e.value.color,
                "font-size": e.value.dataLabelFontSize,
                filter: he(t.id)
              }, toDisplayString(C.value.displayArcPercentage(t, C.value.chart)) + " (" + toDisplayString(unref(nr)(
                e.value.formatter,
                t.value,
                unref(Gt)({
                  p: e.value.valuePrefix,
                  v: t.value,
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: t, seriesIndex: n }
              )) + ") ", 9, Kt2)) : createCommentVNode("", true),
              C.value.isArcBigEnough(t, true, 20) ? (openBlock(), createElementBlock("text", {
                key: 2,
                "text-anchor": unref(z)(t).anchor,
                x: unref(z)(t, true).x,
                y: unref(P)(t) + e.value.dataLabelFontSize,
                fill: e.value.color,
                "font-size": e.value.dataLabelFontSize,
                filter: he(t.id)
              }, toDisplayString(t.name), 9, ea)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.donutShowTotal ? (openBlock(), createElementBlock("g", ta, [
            createBaseVNode("text", {
              "text-anchor": "middle",
              x: C.value.drawingArea.centerX,
              y: C.value.drawingArea.centerY - e.value.donutTotalLabelFontSize / 2,
              "font-size": e.value.donutTotalLabelFontSize,
              fill: e.value.color
            }, toDisplayString(e.value.donutTotalLabelText), 9, aa),
            createBaseVNode("text", {
              "text-anchor": "middle",
              x: C.value.drawingArea.centerX,
              y: C.value.drawingArea.centerY + e.value.donutTotalLabelFontSize,
              "font-size": e.value.donutTotalLabelFontSize,
              fill: e.value.color
            }, toDisplayString(unref(Gt)({
              p: e.value.valuePrefix,
              v: C.value.total,
              s: e.value.valueSuffix,
              r: e.value.dataLabelRoundingValue
            })), 9, la)
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        z2.value === A.LINE ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          e.value.xyShowGrid ? (openBlock(), createElementBlock("g", oa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.yLabels, (t) => (openBlock(), createElementBlock(Fragment, null, [
              t.y <= d.value.drawingArea.bottom ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: d.value.drawingArea.left,
                x2: d.value.drawingArea.right,
                y1: t.y,
                y2: t.y,
                stroke: e.value.xyGridStroke,
                "stroke-width": e.value.xyGridStrokeWidth,
                "stroke-linecap": "round"
              }, null, 8, ia)) : createCommentVNode("", true)
            ], 64))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.extremes.maxSeries + 1, (t, n) => (openBlock(), createElementBlock("line", {
              x1: d.value.drawingArea.left + d.value.slotSize * n,
              x2: d.value.drawingArea.left + d.value.slotSize * n,
              y1: d.value.drawingArea.top,
              y2: d.value.drawingArea.bottom,
              stroke: e.value.xyGridStroke,
              "stroke-width": e.value.xyGridStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, ua))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowAxis ? (openBlock(), createElementBlock("g", na, [
            createBaseVNode("line", {
              x1: d.value.drawingArea.left,
              x2: d.value.drawingArea.left,
              y1: d.value.drawingArea.top,
              y2: d.value.drawingArea.bottom,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, ra),
            createBaseVNode("line", {
              x1: d.value.drawingArea.left,
              x2: d.value.drawingArea.right,
              y1: isNaN(d.value.absoluteZero) ? d.value.drawingArea.bottom : d.value.absoluteZero,
              y2: isNaN(d.value.absoluteZero) ? d.value.drawingArea.bottom : d.value.absoluteZero,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, sa)
          ])) : createCommentVNode("", true),
          e.value.xyShowScale ? (openBlock(), createElementBlock("g", va, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.yLabels, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              t.y <= d.value.drawingArea.bottom ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: t.x + 4,
                x2: d.value.drawingArea.left,
                y1: t.y,
                y2: t.y,
                stroke: e.value.xyAxisStroke,
                "stroke-width": e.value.xyAxisStrokeWidth,
                "stroke-linecap": "round"
              }, null, 8, da)) : createCommentVNode("", true),
              t.y <= d.value.drawingArea.bottom ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: t.x,
                y: t.y + e.value.xyLabelsYFontSize / 3,
                "text-anchor": "end",
                "font-size": e.value.xyLabelsYFontSize,
                fill: e.value.color
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                t.value,
                unref(Gt)({
                  p: e.value.valuePrefix,
                  v: t.value,
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: t, seriesIndex: n }
              )), 9, ca)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowScale && e.value.xyPeriods.length ? (openBlock(), createElementBlock("g", ha, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k2.value.start, k2.value.end), (t, n) => (openBlock(), createElementBlock("line", {
              x1: d.value.drawingArea.left + d.value.slotSize * (n + 1) - d.value.slotSize / 2,
              x2: d.value.drawingArea.left + d.value.slotSize * (n + 1) - d.value.slotSize / 2,
              y1: d.value.drawingArea.bottom,
              y2: d.value.drawingArea.bottom + 4,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, fa))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k2.value.start, k2.value.end), (t, n) => (openBlock(), createElementBlock("text", {
              "font-size": e.value.xyLabelsXFontSize,
              "text-anchor": e.value.xyPeriodLabelsRotation > 0 ? "start" : e.value.xyPeriodLabelsRotation < 0 ? "end" : "middle",
              fill: e.value.color,
              transform: `translate(${d.value.drawingArea.left + d.value.slotSize * (n + 1) - d.value.slotSize / 2}, ${d.value.drawingArea.bottom + e.value.xyLabelsXFontSize + 6}), rotate(${e.value.xyPeriodLabelsRotation})`
            }, toDisplayString(t), 9, ga))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", ma, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.dataset, (t, n) => (openBlock(), createElementBlock("g", pa, [
              e.value.lineSmooth ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("path", {
                  d: `M ${unref(vt)(t.coordinates)}`,
                  stroke: e.value.backgroundColor,
                  "stroke-width": e.value.lineStrokeWidth + 1,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, xa),
                createBaseVNode("path", {
                  d: `M ${unref(vt)(t.coordinates)}`,
                  stroke: t.color,
                  "stroke-width": e.value.lineStrokeWidth,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, ya)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("path", {
                  d: `M ${t.linePath}`,
                  stroke: e.value.backgroundColor,
                  "stroke-width": e.value.lineStrokeWidth + 1,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, ka),
                createBaseVNode("path", {
                  d: `M ${t.linePath}`,
                  stroke: t.color,
                  "stroke-width": e.value.lineStrokeWidth,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, ba)
              ], 64)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("circle", {
                cx: r.x,
                cy: unref(k)(r.y),
                r: 3,
                fill: t.color,
                stroke: e.value.backgroundColor,
                "stroke-width": "0.5",
                class: "quick-animation",
                style: { transition: "all 0.3s ease-in-out" }
              }, null, 8, Sa))), 256))
            ]))), 256))
          ]),
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", wa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.dataset, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("text", {
                "text-anchor": "middle",
                "font-size": e.value.dataLabelFontSize,
                fill: t.color,
                x: r.x,
                y: unref(k)(r.y) - e.value.dataLabelFontSize / 2,
                class: "quick-animation",
                style: { transition: "all 0.3s ease-in-out" }
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                unref(k)(r.value),
                unref(Gt)({
                  p: e.value.valuePrefix,
                  v: unref(k)(r.value),
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: r, seriesIndex: h }
              )), 9, _a))), 256))
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", Aa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.extremes.maxSeries, (t, n) => (openBlock(), createElementBlock("rect", {
              x: d.value.drawingArea.left + n * d.value.slotSize,
              y: d.value.drawingArea.top,
              height: d.value.drawingArea.height <= 0 ? 1e-5 : d.value.drawingArea.height,
              width: d.value.slotSize <= 0 ? 1e-5 : d.value.slotSize,
              fill: [W.value, Y.value].includes(n) ? e.value.xyHighlighterColor : "transparent",
              style: normalizeStyle(`opacity:${e.value.xyHighlighterOpacity}`),
              onMouseenter: (r) => d.value.useTooltip(n),
              onMouseleave: c2[1] || (c2[1] = (r) => d.value.killTooltip()),
              onClick: (r) => g("selectDatapoint", d.value.dataset.map((h) => ({
                ...h,
                value: h.values[n]
              })))
            }, null, 44, La))), 256))
          ])
        ], 64)) : createCommentVNode("", true),
        z2.value === A.BAR ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          e.value.xyShowGrid ? (openBlock(), createElementBlock("g", za, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.yLabels, (t) => (openBlock(), createElementBlock(Fragment, null, [
              t.y <= v.value.drawingArea.bottom ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: v.value.drawingArea.left,
                x2: v.value.drawingArea.right,
                y1: t.y,
                y2: t.y,
                stroke: e.value.xyGridStroke,
                "stroke-width": e.value.xyGridStrokeWidth,
                "stroke-linecap": "round"
              }, null, 8, $a)) : createCommentVNode("", true)
            ], 64))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.extremes.maxSeries + 1, (t, n) => (openBlock(), createElementBlock("line", {
              x1: v.value.drawingArea.left + v.value.slotSize * n,
              x2: v.value.drawingArea.left + v.value.slotSize * n,
              y1: v.value.drawingArea.top,
              y2: v.value.drawingArea.bottom,
              stroke: e.value.xyGridStroke,
              "stroke-width": e.value.xyGridStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Ca))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowAxis ? (openBlock(), createElementBlock("g", Pa, [
            createBaseVNode("line", {
              x1: v.value.drawingArea.left,
              x2: v.value.drawingArea.left,
              y1: v.value.drawingArea.top,
              y2: v.value.drawingArea.bottom,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Ta),
            createBaseVNode("line", {
              x1: v.value.drawingArea.left,
              x2: v.value.drawingArea.right,
              y1: isNaN(v.value.absoluteZero) ? v.value.drawingArea.bottom : v.value.absoluteZero,
              y2: isNaN(v.value.absoluteZero) ? v.value.drawingArea.bottom : v.value.absoluteZero,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Ia)
          ])) : createCommentVNode("", true),
          e.value.xyShowScale ? (openBlock(), createElementBlock("g", Ea, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.yLabels, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              t.y <= v.value.drawingArea.bottom ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: t.x + 4,
                x2: v.value.drawingArea.left,
                y1: t.y,
                y2: t.y,
                stroke: e.value.xyAxisStroke,
                "stroke-width": e.value.xyAxisStrokeWidth,
                "stroke-linecap": "round"
              }, null, 8, Ra)) : createCommentVNode("", true),
              t.y <= v.value.drawingArea.bottom ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: t.x,
                y: t.y + e.value.xyLabelsYFontSize / 3,
                "text-anchor": "end",
                "font-size": e.value.xyLabelsYFontSize,
                fill: e.value.color
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                t.value,
                unref(Gt)({
                  p: e.value.valuePrefix,
                  v: t.value,
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: t, seriesIndex: n }
              )), 9, Na)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowScale && e.value.xyPeriods.length ? (openBlock(), createElementBlock("g", Oa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k2.value.start, k2.value.end), (t, n) => (openBlock(), createElementBlock("line", {
              x1: v.value.drawingArea.left + v.value.slotSize * (n + 1) - v.value.slotSize / 2,
              x2: v.value.drawingArea.left + v.value.slotSize * (n + 1) - v.value.slotSize / 2,
              y1: v.value.drawingArea.bottom,
              y2: v.value.drawingArea.bottom + 4,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Fa))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k2.value.start, k2.value.end), (t, n) => (openBlock(), createElementBlock("text", {
              "font-size": e.value.xyLabelsXFontSize,
              "text-anchor": e.value.xyPeriodLabelsRotation > 0 ? "start" : e.value.xyPeriodLabelsRotation < 0 ? "end" : "middle",
              transform: `translate(${v.value.drawingArea.left + v.value.slotSize * (n + 1) - v.value.slotSize / 2}, ${v.value.drawingArea.bottom + e.value.xyLabelsXFontSize + 6}) rotate(${e.value.xyPeriodLabelsRotation})`,
              fill: e.value.color
            }, toDisplayString(t), 9, Ma))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", Ba, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.dataset, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("rect", {
                x: r.x,
                width: r.width <= 0 ? 1e-5 : r.width,
                height: unref(k)(r.height <= 0 ? 1e-5 : r.height),
                y: unref(k)(r.y),
                fill: t.color,
                stroke: e.value.backgroundColor,
                "stroke-width": e.value.barStrokeWidth,
                "stroke-linecap": "round",
                class: normalizeClass({ "vue-data-ui-bar-animated": e.value.barAnimated && r.value < 0 })
              }, [
                e.value.barAnimated && r.value > 0 && !unref(ke) && !unref(be) ? (openBlock(), createElementBlock("animate", {
                  key: 0,
                  attributeName: "height",
                  from: 0,
                  to: r.height,
                  dur: "0.5s"
                }, null, 8, Da)) : createCommentVNode("", true),
                e.value.barAnimated && r.value > 0 && !unref(ke) && !unref(be) ? (openBlock(), createElementBlock("animate", {
                  key: 1,
                  attributeName: "y",
                  from: v.value.absoluteZero,
                  to: v.value.absoluteZero - r.height,
                  dur: "0.5s"
                }, null, 8, Va)) : createCommentVNode("", true)
              ], 10, Ua))), 256))
            ], 64))), 256))
          ]),
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", qa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.dataset, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("text", {
                x: r.x + r.width / 2,
                y: unref(k)(r.y) - e.value.dataLabelFontSize / 2,
                "text-anchor": "middle",
                "font-size": e.value.dataLabelFontSize,
                fill: t.color,
                class: "quick-animation"
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                unref(k)(r.value),
                unref(Gt)({
                  p: e.value.valuePrefix,
                  v: unref(k)(r.value),
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: r, seriesIndex: h }
              )), 9, Wa))), 256))
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", ja, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.extremes.maxSeries, (t, n) => (openBlock(), createElementBlock("rect", {
              x: v.value.drawingArea.left + n * v.value.slotSize,
              y: v.value.drawingArea.top,
              height: v.value.drawingArea.height <= 0 ? 1e-5 : v.value.drawingArea.height,
              width: v.value.slotSize <= 0 ? 1e-5 : v.value.slotSize,
              fill: [W.value, Y.value].includes(n) ? e.value.xyHighlighterColor : "transparent",
              style: normalizeStyle(`opacity:${e.value.xyHighlighterOpacity}`),
              onMouseenter: (r) => v.value.useTooltip(n),
              onMouseleave: c2[2] || (c2[2] = (r) => v.value.killTooltip()),
              onClick: (r) => g("selectDatapoint", v.value.dataset.map((h) => ({
                ...h,
                value: h.values[n]
              })))
            }, null, 44, Ga))), 256))
          ])
        ], 64)) : createCommentVNode("", true),
        [A.LINE, A.BAR].includes(z2.value) ? (openBlock(), createElementBlock("g", Ha, [
          e.value.xAxisLabel && z2.value === A.LINE ? (openBlock(), createElementBlock("g", Xa, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              "text-anchor": "middle",
              x: d.value.drawingArea.left + d.value.drawingArea.width / 2,
              y: S.value.height - e.value.axisLabelsFontSize / 3
            }, toDisplayString(e.value.xAxisLabel), 9, Za)
          ])) : createCommentVNode("", true),
          e.value.xAxisLabel && z2.value === A.BAR ? (openBlock(), createElementBlock("g", Ya, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              "text-anchor": "middle",
              x: v.value.drawingArea.left + v.value.drawingArea.width / 2,
              y: S.value.height - e.value.axisLabelsFontSize / 3
            }, toDisplayString(e.value.xAxisLabel), 9, Ja)
          ])) : createCommentVNode("", true),
          e.value.yAxisLabel && z2.value === A.LINE ? (openBlock(), createElementBlock("g", Qa, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              transform: `translate(${e.value.axisLabelsFontSize}, ${d.value.drawingArea.top + d.value.drawingArea.height / 2}) rotate(-90)`,
              "text-anchor": "middle"
            }, toDisplayString(e.value.yAxisLabel), 9, Ka)
          ])) : createCommentVNode("", true),
          e.value.yAxisLabel && z2.value === A.BAR ? (openBlock(), createElementBlock("g", el, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              transform: `translate(${e.value.axisLabelsFontSize}, ${v.value.drawingArea.top + v.value.drawingArea.height / 2}) rotate(-90)`,
              "text-anchor": "middle"
            }, toDisplayString(e.value.yAxisLabel), 9, tl)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 12, Bt2)) : createCommentVNode("", true),
      z2.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 3,
        config: {
          type: "line",
          style: {
            backgroundColor: e.value.backgroundColor,
            line: {
              axis: {
                color: e.value.xyAxisStroke
              },
              path: {
                color: e.value.xyAxisStroke,
                strokeWidth: 0.5
              }
            }
          }
        }
      }, null, 8, ["config"])),
      u2.$slots.watermark ? (openBlock(), createElementBlock("div", al, [
        renderSlot(u2.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ke) || unref(be) })), void 0, true)
      ])) : createCommentVNode("", true),
      [A.BAR, A.LINE].includes(z2.value) && e.value.zoomXy && y.value.maxSeriesLength > 1 ? (openBlock(), createElementBlock("div", {
        key: `slicer_${ye.value}`,
        ref_key: "quickChartSlicer",
        ref: se2
      }, [
        (openBlock(), createBlock(_e, {
          key: `slicer_${ye.value}`,
          background: e.value.zoomColor,
          borderColor: e.value.backgroundColor,
          fontSize: e.value.zoomFontSize,
          useResetSlot: e.value.zoomUseResetSlot,
          labelLeft: e.value.xyPeriods[k2.value.start] ? e.value.xyPeriods[k2.value.start] : "",
          labelRight: e.value.xyPeriods[k2.value.end - 1] ? e.value.xyPeriods[k2.value.end - 1] : "",
          textColor: e.value.color,
          inputColor: e.value.zoomColor,
          selectColor: e.value.zoomHighlightColor,
          max: y.value.maxSeriesLength,
          min: 0,
          valueStart: k2.value.start,
          valueEnd: k2.value.end,
          smoothMinimap: e.value.zoomMinimap.smooth,
          minimapSelectedColor: e.value.zoomMinimap.selectedColor,
          minimapSelectedColorOpacity: e.value.zoomMinimap.selectedColorOpacity,
          minimapSelectionRadius: e.value.zoomMinimap.selectionRadius,
          minimapLineColor: e.value.zoomMinimap.lineColor,
          minimap: ut.value,
          minimapIndicatorColor: e.value.zoomMinimap.indicatorColor,
          minimapSelectedIndex: Y.value,
          start: k2.value.start,
          "onUpdate:start": c2[3] || (c2[3] = (t) => k2.value.start = t),
          end: k2.value.end,
          "onUpdate:end": c2[4] || (c2[4] = (t) => k2.value.end = t),
          onReset: it,
          onTrapMouse: ot
        }, {
          "reset-action": withCtx(({ reset: t }) => [
            renderSlot(u2.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: t })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "smoothMinimap", "minimapSelectedColor", "minimapSelectedColorOpacity", "minimapSelectionRadius", "minimapLineColor", "minimap", "minimapIndicatorColor", "minimapSelectedIndex", "start", "end"]))
      ])) : createCommentVNode("", true),
      e.value.showLegend ? (openBlock(), createElementBlock("div", {
        key: 6,
        ref_key: "quickChartLegend",
        ref: oe2,
        class: "vue-ui-quick-chart-legend",
        style: normalizeStyle(`background:transparent;color:${e.value.color}`)
      }, [
        z2.value === A.DONUT ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(C.value.legend, (t, n) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-quick-chart-legend-item",
          onClick: (r) => {
            lt(t, C.value.dataset), g("selectLegend", t);
          },
          style: normalizeStyle(`cursor: ${C.value.legend.length > 1 ? "pointer" : "default"}; opacity:${w.value.includes(t.id) ? "0.5" : "1"}`)
        }, [
          e.value.useCustomLegend ? renderSlot(u2.$slots, "legend", normalizeProps(mergeProps({ key: 0 }, { legend: t })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(u, {
              name: e.value.legendIcon,
              stroke: t.color,
              size: e.value.legendIconSize
            }, null, 8, ["name", "stroke", "size"]),
            createBaseVNode("span", {
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px`)
            }, toDisplayString(t.name), 5),
            createBaseVNode("span", {
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px;font-variant-numeric:tabular-nums`)
            }, toDisplayString(w.value.includes(t.id) ? "-" : unref(nr)(
              e.value.formatter,
              t.absoluteValue,
              unref(Gt)({
                p: e.value.valuePrefix,
                v: t.absoluteValue,
                s: e.value.valueSuffix,
                r: e.value.dataLabelRoundingValue
              }),
              { datapoint: t, seriesIndex: n }
            )), 5),
            w.value.includes(t.id) ? (openBlock(), createElementBlock("span", {
              key: 0,
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px`)
            }, " ( - % ) ", 4)) : _e2.value ? (openBlock(), createElementBlock("span", {
              key: 1,
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px; font-variant-numeric: tabular-nums;`)
            }, " ( - % ) ", 4)) : (openBlock(), createElementBlock("span", {
              key: 2,
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px; font-variant-numeric: tabular-nums;`)
            }, " (" + toDisplayString(unref(Gt)({
              v: t.value / C.value.total * 100,
              s: "%",
              r: e.value.dataLabelRoundingPercentage
            })) + ") ", 5))
          ], 64))
        ], 12, ll))), 256)) : createCommentVNode("", true),
        z2.value === A.LINE ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(d.value.legend, (t, n) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-quick-chart-legend-item",
          onClick: (r) => {
            Ve(t.id, d.value.legend.length - 1), g("selectLegend", t);
          },
          style: normalizeStyle(`cursor: ${d.value.legend.length > 1 ? "pointer" : "default"}; opacity:${w.value.includes(t.id) ? "0.5" : "1"}`)
        }, [
          e.value.useCustomLegend ? renderSlot(u2.$slots, "legend", normalizeProps(mergeProps({ key: 0 }, { legend: t })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(u, {
              name: e.value.legendIcon,
              stroke: t.color,
              size: e.value.legendIconSize
            }, null, 8, ["name", "stroke", "size"]),
            createBaseVNode("span", {
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px`)
            }, toDisplayString(t.name), 5)
          ], 64))
        ], 12, ol))), 256)) : createCommentVNode("", true),
        z2.value === A.BAR ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(v.value.legend, (t, n) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-quick-chart-legend-item",
          onClick: (r) => {
            Ve(t.id, v.value.legend.length - 1), g("selectLegend", t);
          },
          style: normalizeStyle(`cursor: ${v.value.legend.length > 1 ? "pointer" : "default"}; opacity:${w.value.includes(t.id) ? "0.5" : "1"}`)
        }, [
          e.value.useCustomLegend ? renderSlot(u2.$slots, "legend", normalizeProps(mergeProps({ key: 0 }, { legend: t })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(u, {
              name: e.value.legendIcon,
              stroke: t.color,
              size: e.value.legendIconSize
            }, null, 8, ["name", "stroke", "size"]),
            createBaseVNode("span", {
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px`)
            }, toDisplayString(t.name), 5)
          ], 64))
        ], 12, il))), 256)) : createCommentVNode("", true)
      ], 4)) : createCommentVNode("", true),
      createVNode(E, {
        show: Se.value.showTooltip && G.value,
        backgroundColor: e.value.backgroundColor,
        color: e.value.color,
        borderRadius: e.value.tooltipBorderRadius,
        borderColor: e.value.tooltipBorderColor,
        borderWidth: e.value.tooltipBorderWidth,
        fontSize: e.value.tooltipFontSize,
        backgroundOpacity: e.value.tooltipBackgroundOpacity,
        position: e.value.tooltipPosition,
        offsetY: e.value.tooltipOffsetY,
        parent: j2.value,
        content: Q.value,
        isCustom: unref(Ht)(e.value.tooltipCustomFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(u2.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ve.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(u2.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ve.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"])
    ], 14, Mt)) : (openBlock(), createElementBlock("div", ul, [
      createVNode(u, {
        name: "circleCancel",
        stroke: "red"
      }),
      nl
    ]));
  }
};
var kl = s(rl, [["__scopeId", "data-v-b839026c"]]);
export {
  kl as default
};
//# sourceMappingURL=vue-ui-quick-chart-CiiSUexi-ACQ3ITCJ.js.map
