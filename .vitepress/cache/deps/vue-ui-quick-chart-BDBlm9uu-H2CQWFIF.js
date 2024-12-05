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
  c
} from "./chunk-OBQGP7GO.js";
import {
  u
} from "./chunk-PP6VIFVK.js";
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
  Q,
  R,
  T,
  Ut,
  Xt,
  ir,
  k as k2,
  kt,
  qt,
  rt,
  te,
  tr,
  ur,
  z,
  zt
} from "./chunk-4SKEOFB2.js";
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-quick-chart-BDBlm9uu.js
var _ = {
  LINE: "LINE",
  BAR: "BAR",
  DONUT: "DONUT"
};
var Mt = ["SERIE", "SERIES", "DATA", "VALUE", "VALUES", "NUM"];
function Bt({ dataset: s2, barLineSwitch: C = 6 }) {
  let p2 = null, R2 = null, q = 0;
  if ((typeof s2 == "number" || typeof s2 == "string") && console.warn(`The provided dataset (${s2}) is not sufficient to build a chart`), ye(s2) && (Y(s2) && (s2.length < C ? p2 = _.BAR : p2 = _.LINE, R2 = s2, q = s2.length), Ce(s2))) {
    if (!Dt2(s2))
      return console.warn("The objects in the dataset array have a different data structure. Either keys or value types are different."), false;
    const oe = Object.keys(s2[0]), ve = Object.values(s2[0]);
    if (!oe.some((P) => Vt(P)))
      return console.warn("The data type of the dataset objects in the array must contain one of the following keys: DATA, SERIES, VALUE, VALUES, NUM. Casing is not important."), false;
    et(ve, (P) => typeof P == "number") && (p2 = _.DONUT, R2 = s2), et(ve, (P) => Array.isArray(P) && Y(P)) && (tt(s2) > C ? p2 = _.LINE : p2 = _.BAR, q = tt(s2), R2 = s2.map((P) => ({
      ...P,
      data: qt2(P, (G) => Y(G))
    }))), s2 = s2.map((P) => at(P)), R2 = R2.map((P) => at(P));
  }
  return ye(s2) && [...new Set(s2.flatMap((oe) => Array.isArray(oe)))][0], {
    dataset: s2,
    type: p2,
    usableDataset: R2,
    maxSeriesLength: q
  };
}
function lt(s2) {
  return !s2 || ye(s2) && !s2.length;
}
function ye(s2) {
  return Array.isArray(s2);
}
function Y(s2) {
  if (!ye(s2) || lt(s2)) return false;
  const C = s2.map((p2) => Number(p2));
  return ![...new Set(C.flatMap((p2) => typeof p2 == "number" && !isNaN(p2)))].includes(false);
}
function Ce(s2) {
  return !ye(s2) || lt(s2) || !![...new Set(s2.flatMap((p2) => typeof p2 == "object" && !Array.isArray(p2)))].includes(false) ? false : !s2.map((p2) => Object.keys(p2).length > 0).includes(false);
}
function Ut2(s2, C) {
  const p2 = Object.keys(s2).sort(), R2 = Object.keys(C).sort();
  if (p2.length !== R2.length)
    return false;
  for (let q = 0; q < p2.length; q += 1) {
    const W = p2[q], le = R2[q];
    if (W !== le || typeof s2[W] != typeof C[le])
      return false;
  }
  return true;
}
function Dt2(s2) {
  if (s2.length <= 1) return true;
  for (let C = 0; C < s2.length; C += 1)
    for (let p2 = C + 1; p2 < s2.length; p2 += 1)
      if (!Ut2(s2[C], s2[p2]))
        return false;
  return true;
}
function Vt(s2) {
  return Mt.includes(s2.toUpperCase());
}
function et(s2, C) {
  let p2 = [];
  for (let R2 = 0; R2 < s2.length; R2 += 1)
    p2.push(C(s2[R2]));
  return p2.includes(true);
}
function tt(s2) {
  return Math.max(...[...s2].flatMap((C) => Object.values(C).filter((p2) => Y(p2)).map((p2) => p2.length)));
}
function qt2(s2, C) {
  return Object.values(s2).filter((p2) => C(p2))[0];
}
function at(s2) {
  const C = {};
  for (let p2 in s2)
    s2.hasOwnProperty(p2) && (C[p2.toUpperCase()] = s2[p2]);
  return C;
}
var ot = (s2) => (pushScopeId("data-v-7397d9b6"), s2 = s2(), popScopeId(), s2);
var Wt = ["id"];
var jt = ["xmlns", "viewBox"];
var Gt = ["id"];
var Ht2 = ["id"];
var Xt2 = ot(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Zt = ["id"];
var Yt = ["flood-color"];
var Jt2 = {
  key: 0,
  class: "donut-label-connectors"
};
var Qt = ["d", "stroke", "stroke-width", "filter"];
var Kt2 = ["cx", "cy", "r", "fill", "filter"];
var ea = { class: "donut" };
var ta = ["d", "fill", "stroke", "stroke-width", "filter"];
var aa = ["d", "onMouseenter", "onClick"];
var la = {
  key: 1,
  class: "donut-labels quick-animation"
};
var oa = ["cx", "cy", "fill", "stroke", "filter"];
var ia = ["text-anchor", "x", "y", "fill", "font-size", "filter"];
var ua = ["text-anchor", "x", "y", "fill", "font-size", "filter"];
var na = {
  key: 2,
  class: "donut-hollow quick-animation"
};
var ra = ["x", "y", "font-size", "fill"];
var sa = ["x", "y", "font-size", "fill"];
var va = {
  key: 0,
  class: "line-grid"
};
var da = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ca = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ha = {
  key: 1,
  class: "line-axis"
};
var fa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ga = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var pa = {
  key: 2,
  class: "yLabels"
};
var ma = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ya = ["x", "y", "font-size", "fill"];
var xa = {
  key: 3,
  class: "periodLabels"
};
var ka = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ba = ["font-size", "text-anchor", "fill", "transform"];
var Sa = { class: "plots" };
var wa = { class: "line-plot-series" };
var Aa = ["d", "stroke", "stroke-width"];
var _a = ["d", "stroke", "stroke-width"];
var La = ["d", "stroke", "stroke-width"];
var za = ["d", "stroke", "stroke-width"];
var $a = ["cx", "cy", "fill", "stroke"];
var Ca = {
  key: 4,
  class: "dataLabels"
};
var Ta = ["font-size", "fill", "x", "y"];
var Pa = { class: "tooltip-traps" };
var Ia = ["x", "y", "height", "width", "fill", "onMouseenter", "onClick"];
var Ea = {
  key: 0,
  class: "line-grid"
};
var Ra = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Oa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Na = {
  key: 1,
  class: "line-axis"
};
var Fa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ma = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ba = {
  key: 2,
  class: "yLabels"
};
var Ua = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Da = ["x", "y", "font-size", "fill"];
var Va = {
  key: 3,
  class: "periodLabels"
};
var qa = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Wa = ["font-size", "text-anchor", "transform", "fill"];
var ja = { class: "plots" };
var Ga = ["x", "width", "height", "y", "fill", "stroke", "stroke-width"];
var Ha = ["to"];
var Xa = ["from", "to"];
var Za = {
  key: 4,
  class: "dataLabels"
};
var Ya = ["x", "y", "font-size", "fill"];
var Ja = { class: "tooltip-traps" };
var Qa = ["x", "y", "height", "width", "fill", "onMouseenter", "onClick"];
var Ka = {
  key: 3,
  class: "axis-labels"
};
var el = { key: 0 };
var tl = ["font-size", "fill", "x", "y"];
var al = { key: 1 };
var ll = ["font-size", "fill", "x", "y"];
var ol = { key: 2 };
var il = ["font-size", "fill", "transform"];
var ul = { key: 3 };
var nl = ["font-size", "fill", "transform"];
var rl = {
  key: 6,
  class: "vue-data-ui-watermark"
};
var sl = ["onClick"];
var vl = ["onClick"];
var dl = ["onClick"];
var cl = {
  key: 1,
  class: "vue-ui-quick-chart-not-processable"
};
var hl = ot(() => createBaseVNode("span", null, "Dataset is not processable", -1));
var fl = {
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
  setup(s2, { expose: C, emit: p2 }) {
    const R2 = s2, { vue_ui_quick_chart: q } = te(), W = ref(null), le = ref(null), oe = ref(null), ve = ref(null), P = ref(Dt()), G = ref(false), de = ref(null), K = ref(""), j = ref(null), Me = ref(null), Be = ref(null), w = ref([]), Ue2 = ref(0), xe = ref(0), e = computed({
      get: () => De(),
      set: (u2) => u2
    });
    function De() {
      const u2 = c({
        userConfig: R2.config,
        defaultConfig: q
      });
      return u2.theme ? {
        ...c({
          userConfig: He.vue_ui_quick_chart[u2.theme] || R2.config,
          defaultConfig: u2
        }),
        customPalette: R[u2.theme] || rt
      } : u2;
    }
    watch(() => R2.config, (u2) => {
      e.value = De(), S.value.width = e.value.width, S.value.height = e.value.height, We();
    }, { deep: true }), watch(() => R2.dataset, (u2) => {
      x.value = he.value, k3.value.start = 0, k3.value.end = x.value.maxSeriesLength, xe.value += 1;
    }, { deep: true });
    const ce = computed(() => tr(e.value.customPalette)), he = computed(() => {
      const u2 = Bt({ dataset: ur(R2.dataset, [
        "serie",
        "series",
        "data",
        "value",
        "values",
        "num"
      ]), barLineSwitch: e.value.chartIsBarUnderDatasetLength });
      return u2 || console.error("VueUiQuickChart : Dataset is not processable"), u2;
    }), x = ref(he.value), it = computed(() => !!x.value), z2 = computed(() => x.value ? x.value.type : null);
    watch(() => z2.value, (u2) => {
      u2 || qt({
        componentName: "VueUiQuickChart",
        type: "dataset"
      });
    }, { immediate: true });
    const { isPrinting: ke, isImaging: be, generatePdf: Ve, generateImage: qe } = re({
      elementId: `${z2.value}_${P.value}`,
      fileName: e.value.title || z2.value
    }), ut = computed(() => e.value.showUserOptions && !e.value.title), S = ref({
      width: e.value.width,
      height: e.value.height
    }), Se2 = ref({
      showTooltip: e.value.showTooltip
    }), we = ref(null);
    onMounted(() => {
      We();
    });
    function We() {
      if (e.value.responsive) {
        const u2 = O(() => {
          const { width: c2, height: t } = k({
            chart: W.value,
            title: e.value.title ? le.value : null,
            legend: e.value.showLegend ? oe.value : null,
            slicer: [_.BAR, _.LINE].includes(z2.value) && e.value.zoomXy && x.value.maxSeriesLength > 1 ? ve.value : null,
            source: Me.value,
            noTitle: Be.value
          });
          S.value.width = c2, S.value.height = t;
        });
        we.value = new ResizeObserver(u2), we.value.observe(W.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      we.value && we.value.disconnect();
    });
    const nt = computed(() => {
      switch (z2.value) {
        case _.LINE:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
        case _.BAR:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
        case _.DONUT:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
        default:
          return `0 0 ${S.value.width <= 0 ? 10 : S.value.width} ${S.value.height <= 0 ? 10 : S.value.height}`;
      }
    });
    function je(u2) {
      return [...u2].map((c2) => c2.value).reduce((c2, t) => c2 + t, 0);
    }
    function fe(u2) {
      return e.value.blurOnHover && ![null, void 0].includes(j.value) && j.value !== u2 ? `url(#blur_${P.value})` : "";
    }
    function Ge(u2, c2) {
      w.value.includes(u2) ? w.value = w.value.filter((t) => t !== u2) : w.value.length < c2 && w.value.push(u2);
    }
    const He2 = ref(null), Xe = ref(null), Ae = ref(false);
    function rt2(u2, c2) {
      Ae.value = true;
      let t = u2.value;
      if (w.value.includes(u2.id)) {
        let r = function() {
          t > n ? (Ae.value = false, cancelAnimationFrame(Xe.value), x.value = {
            ...x.value,
            dataset: x.value.dataset.map((h, O2) => u2.id === `donut_${O2}` ? {
              ...h,
              value: n,
              VALUE: n
            } : h)
          }) : (t += n * 0.025, x.value = {
            ...x.value,
            dataset: x.value.dataset.map((h, O2) => u2.id === `donut_${O2}` ? {
              ...h,
              value: t,
              VALUE: t
            } : h)
          }, Xe.value = requestAnimationFrame(r));
        };
        w.value = w.value.filter((h) => h !== u2.id);
        const n = he.value.dataset.find((h, O2) => u2.id === `donut_${O2}`).VALUE;
        r();
      } else if (c2.length > 1) {
        let n = function() {
          t < 0.1 ? (Ae.value = false, cancelAnimationFrame(He2.value), w.value.push(u2.id), x.value = {
            ...x.value,
            dataset: x.value.dataset.map((r, h) => u2.id === `donut_${h}` ? {
              ...r,
              value: 0,
              VALUE: 0
            } : r)
          }) : (t /= 1.1, x.value = {
            ...x.value,
            dataset: x.value.dataset.map((r, h) => u2.id === `donut_${h}` ? {
              ...r,
              value: t,
              VALUE: t
            } : r)
          }, He2.value = requestAnimationFrame(n));
        };
        n();
      }
    }
    const J = ref(null);
    function st(u2) {
      J.value = u2;
    }
    const Ze = computed(() => e.value.donutThicknessRatio < 0.15 ? 0.15 : e.value.donutThicknessRatio > 0.4 ? 0.4 : e.value.donutThicknessRatio), T2 = computed(() => {
      if (z2.value !== _.DONUT) return null;
      const u2 = x.value.dataset.map((o, i) => ({
        ...o,
        value: o.VALUE || o.DATA || o.SERIE || o.VALUES || o.NUM || 0,
        name: o.NAME || o.DESCRIPTION || o.TITLE || o.LABEL || `Serie ${i}`,
        id: `donut_${i}`
      })).map((o, i) => ({
        ...o,
        color: o.COLOR ? Q(o.COLOR) : ce.value[i + e.value.paletteStartIndex] || rt[i + e.value.paletteStartIndex] || rt[(i + e.value.paletteStartIndex) % rt.length],
        immutableValue: o.value
      }));
      function c2(o, i) {
        return Ht({
          v: isNaN(o.value / je(i)) ? 0 : o.value / je(i) * 100,
          s: "%",
          r: e.value.dataLabelRoundingPercentage
        });
      }
      function t(o) {
        return o.proportion * 100 > e.value.donutHideLabelUnderPercentage;
      }
      function n(o, i) {
        const b = he.value.dataset.find((I, F) => `donut_${F}` === o).VALUE;
        return Math.abs(String(Number(b.toFixed(0))).length - String(Number(i.toFixed(0))).length);
      }
      function r({ datapoint: o, seriesIndex: i }) {
        de.value = { datapoint: o, seriesIndex: i, config: e.value, dataset: u2 }, j.value = o.id;
        const b = e.value.tooltipCustomFormat;
        if (Xt(b) && Kt(() => b({
          datapoint: o,
          seriesIndex: i,
          series: u2,
          config: e.value
        })))
          K.value = b({
            datapoint: o,
            seriesIndex: i,
            series: u2,
            config: e.value
          });
        else {
          let y = "";
          y += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.tooltipBorderColor};padding-bottom:6px;margin-bottom:3px;">${o.name}</div>`, y += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${o.color}"/></svg>`, y += `<b>${ir(
            e.value.formatter,
            o.value,
            Ht({
              p: e.value.valuePrefix,
              v: o.value,
              s: e.value.valueSuffix,
              r: e.value.dataLabelRoundingValue
            }),
            { datapoint: o, seriesIndex: i }
          )}</b>`, y += `<span>(${Ht({ v: o.proportion * 100, s: "%", r: e.value.dataLabelRoundingPercentage })})</span></div>`, K.value = `<div>${y}</div>`;
        }
        G.value = true;
      }
      function h() {
        G.value = false, j.value = null, J.value = null;
      }
      const O2 = {
        centerX: S.value.width / 2,
        centerY: S.value.height / 2
      }, U = u2.filter((o) => !w.value.includes(o.id)).map((o) => o.value || 0).reduce((o, i) => o + i, 0), ie = u2.map((o, i) => ({
        ...o,
        proportion: (o.value || 0) / U,
        value: o.value || 0,
        absoluteValue: he.value.dataset.find((b, y) => `donut_${y}` === o.id).VALUE
      })), ee = S.value.width / 2, ue = S.value.height / 2, te2 = S.value.height * e.value.donutRadiusRatio;
      return {
        dataset: ie.filter((o) => !w.value.includes(o.id)),
        legend: ie,
        drawingArea: O2,
        displayArcPercentage: c2,
        isArcBigEnough: t,
        useTooltip: r,
        killTooltip: h,
        getSpaces: n,
        total: U,
        cx: ee,
        cy: ue,
        radius: te2,
        chart: kt(
          { series: u2.filter((o) => !w.value.includes(o.id)) },
          ee,
          ue,
          te2,
          te2,
          1.99999,
          2,
          1,
          360,
          105.25,
          S.value.height * Ze.value
        )
      };
    }), k3 = ref({
      start: 0,
      end: x.value.maxSeriesLength
    });
    function vt() {
      k3.value = {
        start: 0,
        end: x.value.maxSeriesLength
      }, xe.value += 1;
    }
    const dt = computed(() => {
      if (!e.value.zoomMinimap.show || z2.value === _.DONUT) return [];
      let u2 = [];
      Y(x.value.dataset) && (u2 = x.value.dataset), Ce(x.value.dataset) && (u2 = x.value.dataset.map((r, h) => ({
        values: r.VALUE || r.DATA || r.SERIE || r.SERIES || r.VALUES || r.NUM || 0,
        id: z2.value === _.LINE ? `line_${h}` : `bar_${h}`
      })).filter((r) => !w.value.includes(r.id)));
      const c2 = Y(u2) ? u2.length : Math.max(...u2.map((r) => r.values.length));
      let t = [];
      if (Y(u2))
        t = u2;
      else
        for (let r = 0; r < c2; r += 1)
          t.push(u2.map((h) => h.values[r] || 0).reduce((h, O2) => (h || 0) + (O2 || 0), 0));
      const n = Math.min(...t);
      return t.map((r) => r + (n < 0 ? Math.abs(n) : 0));
    }), d = computed(() => {
      if (z2.value !== _.LINE) return null;
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
      Y(x.value.dataset) && (t = [
        {
          values: x.value.dataset.slice(k3.value.start, k3.value.end),
          absoluteIndices: x.value.dataset.map((o, i) => i).slice(k3.value.start, k3.value.end),
          name: e.value.title,
          color: ce.value[e.value.paletteStartIndex] || rt[e.value.paletteStartIndex],
          id: "line_0"
        }
      ]), Ce(x.value.dataset) && (t = x.value.dataset.map((o, i) => ({
        ...o,
        values: o.VALUE || o.DATA || o.SERIE || o.SERIES || o.VALUES || o.NUM || 0,
        name: o.NAME || o.DESCRIPTION || o.TITLE || o.LABEL || `Serie ${i}`,
        id: `line_${i}`
      })).map((o, i) => ({
        ...o,
        color: o.COLOR ? Q(o.COLOR) : ce.value[i + e.value.paletteStartIndex] || rt[i + e.value.paletteStartIndex] || rt[(i + e.value.paletteStartIndex) % rt.length],
        values: o.values.slice(k3.value.start, k3.value.end),
        absoluteIndices: o.values.map((b, y) => y).slice(k3.value.start, k3.value.end)
      })));
      const n = {
        max: Math.max(...t.filter((o) => !w.value.includes(o.id)).flatMap((o) => o.values)),
        min: Math.min(...t.filter((o) => !w.value.includes(o.id)).flatMap((o) => o.values)),
        maxSeries: Math.max(...t.map((o) => o.values.length))
      }, r = Ut(n.min < 0 ? n.min : 0, n.max < 0 ? 0 : n.max, e.value.xyScaleSegments), h = n.min < 0 ? Math.abs(n.min) : 0, O2 = n.max < 0 ? c2.top : c2.bottom - h / (r.max + h) * c2.height, U = c2.width / n.maxSeries, ie = r.ticks.map((o) => ({
        y: c2.bottom - c2.height * ((o + h) / (r.max + h)),
        x: c2.left - 8,
        value: o
      })), ee = t.map((o, i) => ({
        ...o,
        coordinates: o.values.map((b, y) => ({
          x: c2.left + U * (y + 1) - U / 2,
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
        j.value = o, J.value = o;
        const i = t.map((y) => ({
          ...y,
          value: y.values[o],
          absoluteIndex: y.absoluteIndices[o]
        })).filter((y) => !w.value.includes(y.id));
        de.value = { datapoint: i, seriesIndex: o, config: e.value, dataset: t };
        const b = e.value.tooltipCustomFormat;
        if (Xt(b) && Kt(() => b({
          datapoint: i,
          seriesIndex: o,
          series: t,
          config: e.value
        })))
          K.value = b({
            datapoint: i,
            seriesIndex: o,
            series: t,
            config: e.value
          });
        else {
          let y = "";
          e.value.xyPeriods[i[0].absoluteIndex] && (y += `<div style="border-bottom:1px solid ${e.value.tooltipBorderColor};padding-bottom:6px;margin-bottom:3px;">${e.value.xyPeriods[i[0].absoluteIndex]}</div>`), i.forEach((I, F) => {
            y += `
                    <div style="display:flex; flex-wrap: wrap; align-items:center; gap:3px;">
                        <svg viewBox="0 0 12 12" height="14" width="12"><circle cx="6" cy="6" r="6" stroke="none" fill="${I.color}"/></svg>
                        <span>${I.name}:</span>
                        <b>${ir(
              e.value.formatter,
              I.value,
              Ht({
                p: e.value.valuePrefix,
                v: I.value,
                s: e.value.valueSuffix,
                r: e.value.dataLabelRoundingValue
              }),
              { datapoint: I, seriesIndex: F }
            )}
                        </b>
                    </div>
                `;
          }), K.value = y;
        }
        G.value = true;
      }
      function te2() {
        j.value = null, G.value = false;
      }
      return {
        absoluteZero: O2,
        dataset: ee.filter((o) => !w.value.includes(o.id)),
        legend: ee,
        drawingArea: c2,
        extremes: n,
        slotSize: U,
        yLabels: ie,
        useTooltip: ue,
        killTooltip: te2
      };
    }), v = computed(() => {
      if (z2.value !== _.BAR) return null;
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
      Y(x.value.dataset) && (t = [
        {
          values: x.value.dataset.slice(k3.value.start, k3.value.end),
          absoluteIndices: x.value.dataset.map((i, b) => b).slice(k3.value.start, k3.value.end),
          name: e.value.title,
          color: ce.value[e.value.paletteStartIndex] || rt[e.value.paletteStartIndex],
          id: "bar_0"
        }
      ]), Ce(x.value.dataset) && (t = x.value.dataset.map((i, b) => ({
        ...i,
        values: i.VALUE || i.DATA || i.SERIE || i.SERIES || i.VALUES || i.NUM || 0,
        name: i.NAME || i.DESCRIPTION || i.TITLE || i.LABEL || `Serie ${b}`,
        id: `bar_${b}`
      })).map((i, b) => ({
        ...i,
        color: i.COLOR ? Q(i.COLOR) : ce.value[b + e.value.paletteStartIndex] || rt[b + e.value.paletteStartIndex] || rt[(b + e.value.paletteStartIndex) % rt.length],
        values: i.values.slice(k3.value.start, k3.value.end),
        absoluteIndices: i.values.map((y, I) => I).slice(k3.value.start, k3.value.end)
      })));
      const n = {
        max: Math.max(...t.filter((i) => !w.value.includes(i.id)).flatMap((i) => i.values)) < 0 ? 0 : Math.max(...t.filter((i) => !w.value.includes(i.id)).flatMap((i) => i.values)),
        min: Math.min(...t.filter((i) => !w.value.includes(i.id)).flatMap((i) => i.values)),
        maxSeries: Math.max(...t.filter((i) => !w.value.includes(i.id)).map((i) => i.values.length))
      }, r = Ut(n.min < 0 ? n.min : 0, n.max, e.value.xyScaleSegments), h = r.min < 0 ? Math.abs(r.min) : 0, O2 = c2.bottom - h / (r.max + h) * c2.height, U = c2.width / n.maxSeries, ie = r.ticks.map((i) => ({
        y: c2.bottom - c2.height * ((i + h) / (r.max + h)),
        x: c2.left - 8,
        value: i
      })), ee = t.map((i, b) => ({
        ...i,
        coordinates: i.values.map((y, I) => {
          const F = (y + h) / (n.max + h) * c2.height, ge = Math.abs(y) / Math.abs(n.min) * (c2.height - O2), Ie = h / (n.max + h) * c2.height, pe = U / t.filter((ae2) => !w.value.includes(ae2.id)).length - e.value.barGap / t.filter((ae2) => !w.value.includes(ae2.id)).length;
          return {
            x: c2.left + U * I + pe * b + e.value.barGap / 2,
            y: y > 0 ? c2.bottom - F : O2,
            height: y > 0 ? F - Ie : ge,
            value: y,
            width: pe
          };
        })
      })), ue = t.filter((i) => !w.value.includes(i.id)).map((i, b) => ({
        ...i,
        coordinates: i.values.map((y, I) => {
          const F = (y + h) / (n.max + h) * c2.height, ge = Math.abs(y) / (n.max + h) * c2.height, Ie = h / (n.max + h) * c2.height, pe = U / t.filter((ae2) => !w.value.includes(ae2.id)).length - e.value.barGap / t.filter((ae2) => !w.value.includes(ae2.id)).length;
          return {
            x: c2.left + U * I + pe * b + e.value.barGap / 2,
            y: y > 0 ? c2.bottom - F : O2,
            height: y > 0 ? F - Ie : ge,
            value: y,
            width: pe
          };
        })
      }));
      function te2(i) {
        j.value = i, J.value = i;
        const b = t.map((I) => ({
          ...I,
          value: I.values[i],
          absoluteIndex: I.absoluteIndices[i]
        })).filter((I) => !w.value.includes(I.id));
        de.value = { datapoint: b, seriesIndex: i, config: e.value, dataset: t };
        const y = e.value.tooltipCustomFormat;
        if (Xt(y) && Kt(() => y({
          datapoint: b,
          seriesIndex: i,
          series: t,
          config: e.value
        })))
          K.value = y({
            point: b,
            seriesIndex: i,
            series: t,
            config: e.value
          });
        else {
          let I = "";
          e.value.xyPeriods[b[0].absoluteIndex] && (I += `<div style="border-bottom:1px solid ${e.value.tooltipBorderColor};padding-bottom:6px;margin-bottom:3px;">${e.value.xyPeriods[b[0].absoluteIndex]}</div>`), b.forEach((F, ge) => {
            I += `
                    <div style="display:flex; flex-wrap: wrap; align-items:center; gap:3px;">
                        <svg viewBox="0 0 12 12" height="14" width="12"><rect x=0 y="0" width="12" height="12" rx="1" stroke="none" fill="${F.color}"/></svg>
                        <span>${F.name}:</span>
                        <b>${ir(
              e.value.formatter,
              F.value,
              Ht({
                p: e.value.valuePrefix,
                v: F.value,
                s: e.value.valueSuffix,
                r: e.value.dataLabelRoundingValue
              }),
              { datapoint: F, seriesIndex: ge }
            )}
                        </b>
                    </div>
                `;
          }), K.value = I;
        }
        G.value = true;
      }
      function o() {
        G.value = false, j.value = null, J.value = null;
      }
      return {
        absoluteZero: O2,
        dataset: ue.filter((i) => !w.value.includes(i.id)),
        legend: ee,
        drawingArea: c2,
        extremes: n,
        slotSize: U,
        yLabels: ie,
        useTooltip: te2,
        killTooltip: o
      };
    }), Te = ref(false);
    function ct(u2) {
      Te.value = u2, Ue2.value += 1;
    }
    function Ye() {
      Se2.value.showTooltip = !Se2.value.showTooltip;
    }
    const _e = ref(false);
    function Pe() {
      _e.value = !_e.value;
    }
    return C({
      generatePdf: Ve,
      generateImage: qe,
      toggleTooltip: Ye,
      toggleAnnotator: Pe
    }), (u2, c2) => it.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      id: `${z2.value}_${P.value}`,
      ref_key: "quickChart",
      ref: W,
      class: normalizeClass({ "vue-ui-quick-chart": true, "vue-data-ui-wrapper-fullscreen": Te.value }),
      style: normalizeStyle(`background:${e.value.backgroundColor};color:${e.value.color};font-family:${e.value.fontFamily}; position: relative; ${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.userOptionsButtons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: W.value,
        backgroundColor: e.value.backgroundColor,
        color: e.value.color,
        active: _e.value,
        onClose: Pe
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      ut.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: Be,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.showUserOptions ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${Ue2.value}`,
        backgroundColor: e.value.backgroundColor,
        color: e.value.color,
        isPrinting: unref(ke),
        isImaging: unref(be),
        uid: P.value,
        hasTooltip: e.value.userOptionsButtons.tooltip && e.value.showTooltip,
        hasPdf: e.value.userOptionsButtons.pdf,
        hasImg: e.value.userOptionsButtons.img,
        hasFullscreen: e.value.userOptionsButtons.fullscreen,
        hasXls: false,
        isTooltip: Se2.value.showTooltip,
        isFullscreen: Te.value,
        titles: { ...e.value.userOptionsButtonTitles },
        chartElement: W.value,
        position: e.value.userOptionsPosition,
        hasAnnotator: e.value.userOptionsButtons.annotator,
        isAnnotation: _e.value,
        onToggleFullscreen: ct,
        onGeneratePdf: unref(Ve),
        onGenerateImage: unref(qe),
        onToggleTooltip: Ye,
        onToggleAnnotator: Pe
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
        } : void 0,
        u2.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: n }) => [
            renderSlot(u2.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: n })), void 0, true)
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      e.value.title ? (openBlock(), createElementBlock("div", {
        key: 3,
        ref_key: "quickChartTitle",
        ref: le,
        class: "vue-ui-quick-chart-title",
        style: normalizeStyle(`background:transparent;color:${e.value.color};font-size:${e.value.titleFontSize}px;font-weight:${e.value.titleBold ? "bold" : "normal"};text-align:${e.value.titleTextAlign}`)
      }, toDisplayString(e.value.title), 5)) : createCommentVNode("", true),
      z2.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        viewBox: nt.value,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${P.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 2,
              id: `blur_std_${P.value}`
            }, null, 8, Ht2),
            Xt2
          ], 8, Gt),
          createBaseVNode("filter", {
            id: `shadow_${P.value}`,
            "color-interpolation-filters": "sRGB"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "0",
              stdDeviation: "10",
              "flood-opacity": "0.5",
              "flood-color": e.value.donutShadowColor
            }, null, 8, Yt)
          ], 8, Zt)
        ]),
        z2.value === _.DONUT ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", Jt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(T2.value.chart, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              T2.value.isArcBigEnough(t) ? (openBlock(), createElementBlock("path", {
                key: 0,
                d: unref(zt)(t, { x: S.value.width / 2, y: S.value.height / 2 }, 16, 16, false, false, S.value.height * Ze.value),
                stroke: t.color,
                "stroke-width": e.value.donutLabelMarkerStrokeWidth,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none",
                filter: fe(t.id)
              }, null, 8, Qt)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("circle", {
            cx: T2.value.cx,
            cy: T2.value.cy,
            r: T2.value.radius,
            fill: e.value.backgroundColor,
            filter: e.value.donutUseShadow ? `url(#shadow_${P.value})` : ""
          }, null, 8, Kt2),
          createBaseVNode("g", ea, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(T2.value.chart, (t, n) => (openBlock(), createElementBlock("path", {
              d: t.arcSlice,
              fill: t.color,
              stroke: e.value.backgroundColor,
              "stroke-width": e.value.donutStrokeWidth,
              filter: fe(t.id)
            }, null, 8, ta))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(T2.value.chart, (t, n) => (openBlock(), createElementBlock("path", {
              d: t.arcSlice,
              fill: "transparent",
              onMouseenter: (r) => T2.value.useTooltip({ datapoint: t, seriesIndex: n }),
              onMouseout: c2[0] || (c2[0] = (r) => T2.value.killTooltip()),
              onClick: (r) => p2("selectDatapoint", t)
            }, null, 40, aa))), 256))
          ]),
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", la, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(T2.value.chart, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              T2.value.isArcBigEnough(t) ? (openBlock(), createElementBlock("circle", {
                key: 0,
                cx: unref(z)(t).x,
                cy: unref(T)(t) - 3.7,
                fill: t.color,
                stroke: e.value.backgroundColor,
                "stroke-width": 1,
                r: 3,
                filter: fe(t.id)
              }, null, 8, oa)) : createCommentVNode("", true),
              T2.value.isArcBigEnough(t) ? (openBlock(), createElementBlock("text", {
                key: 1,
                "text-anchor": unref(z)(t, true, 20).anchor,
                x: unref(z)(t, true).x,
                y: unref(T)(t),
                fill: e.value.color,
                "font-size": e.value.dataLabelFontSize,
                filter: fe(t.id)
              }, toDisplayString(T2.value.displayArcPercentage(t, T2.value.chart)) + " (" + toDisplayString(unref(ir)(
                e.value.formatter,
                t.value,
                unref(Ht)({
                  p: e.value.valuePrefix,
                  v: t.value,
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: t, seriesIndex: n }
              )) + ") ", 9, ia)) : createCommentVNode("", true),
              T2.value.isArcBigEnough(t, true, 20) ? (openBlock(), createElementBlock("text", {
                key: 2,
                "text-anchor": unref(z)(t).anchor,
                x: unref(z)(t, true).x,
                y: unref(T)(t) + e.value.dataLabelFontSize,
                fill: e.value.color,
                "font-size": e.value.dataLabelFontSize,
                filter: fe(t.id)
              }, toDisplayString(t.name), 9, ua)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.donutShowTotal ? (openBlock(), createElementBlock("g", na, [
            createBaseVNode("text", {
              "text-anchor": "middle",
              x: T2.value.drawingArea.centerX,
              y: T2.value.drawingArea.centerY - e.value.donutTotalLabelFontSize / 2,
              "font-size": e.value.donutTotalLabelFontSize,
              fill: e.value.color
            }, toDisplayString(e.value.donutTotalLabelText), 9, ra),
            createBaseVNode("text", {
              "text-anchor": "middle",
              x: T2.value.drawingArea.centerX,
              y: T2.value.drawingArea.centerY + e.value.donutTotalLabelFontSize,
              "font-size": e.value.donutTotalLabelFontSize,
              fill: e.value.color
            }, toDisplayString(unref(Ht)({
              p: e.value.valuePrefix,
              v: T2.value.total,
              s: e.value.valueSuffix,
              r: e.value.dataLabelRoundingValue
            })), 9, sa)
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        z2.value === _.LINE ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          e.value.xyShowGrid ? (openBlock(), createElementBlock("g", va, [
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
              }, null, 8, da)) : createCommentVNode("", true)
            ], 64))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.extremes.maxSeries + 1, (t, n) => (openBlock(), createElementBlock("line", {
              x1: d.value.drawingArea.left + d.value.slotSize * n,
              x2: d.value.drawingArea.left + d.value.slotSize * n,
              y1: d.value.drawingArea.top,
              y2: d.value.drawingArea.bottom,
              stroke: e.value.xyGridStroke,
              "stroke-width": e.value.xyGridStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, ca))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowAxis ? (openBlock(), createElementBlock("g", ha, [
            createBaseVNode("line", {
              x1: d.value.drawingArea.left,
              x2: d.value.drawingArea.left,
              y1: d.value.drawingArea.top,
              y2: d.value.drawingArea.bottom,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, fa),
            createBaseVNode("line", {
              x1: d.value.drawingArea.left,
              x2: d.value.drawingArea.right,
              y1: isNaN(d.value.absoluteZero) ? d.value.drawingArea.bottom : d.value.absoluteZero,
              y2: isNaN(d.value.absoluteZero) ? d.value.drawingArea.bottom : d.value.absoluteZero,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, ga)
          ])) : createCommentVNode("", true),
          e.value.xyShowScale ? (openBlock(), createElementBlock("g", pa, [
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
              }, null, 8, ma)) : createCommentVNode("", true),
              t.y <= d.value.drawingArea.bottom ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: t.x,
                y: t.y + e.value.xyLabelsYFontSize / 3,
                "text-anchor": "end",
                "font-size": e.value.xyLabelsYFontSize,
                fill: e.value.color
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                t.value,
                unref(Ht)({
                  p: e.value.valuePrefix,
                  v: t.value,
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: t, seriesIndex: n }
              )), 9, ya)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowScale && e.value.xyPeriods.length ? (openBlock(), createElementBlock("g", xa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k3.value.start, k3.value.end), (t, n) => (openBlock(), createElementBlock("line", {
              x1: d.value.drawingArea.left + d.value.slotSize * (n + 1) - d.value.slotSize / 2,
              x2: d.value.drawingArea.left + d.value.slotSize * (n + 1) - d.value.slotSize / 2,
              y1: d.value.drawingArea.bottom,
              y2: d.value.drawingArea.bottom + 4,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, ka))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k3.value.start, k3.value.end), (t, n) => (openBlock(), createElementBlock("text", {
              "font-size": e.value.xyLabelsXFontSize,
              "text-anchor": e.value.xyPeriodLabelsRotation > 0 ? "start" : e.value.xyPeriodLabelsRotation < 0 ? "end" : "middle",
              fill: e.value.color,
              transform: `translate(${d.value.drawingArea.left + d.value.slotSize * (n + 1) - d.value.slotSize / 2}, ${d.value.drawingArea.bottom + e.value.xyLabelsXFontSize + 6}), rotate(${e.value.xyPeriodLabelsRotation})`
            }, toDisplayString(t), 9, ba))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", Sa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.dataset, (t, n) => (openBlock(), createElementBlock("g", wa, [
              e.value.lineSmooth ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("path", {
                  d: `M ${unref(Lt)(t.coordinates)}`,
                  stroke: e.value.backgroundColor,
                  "stroke-width": e.value.lineStrokeWidth + 1,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, Aa),
                createBaseVNode("path", {
                  d: `M ${unref(Lt)(t.coordinates)}`,
                  stroke: t.color,
                  "stroke-width": e.value.lineStrokeWidth,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, _a)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("path", {
                  d: `M ${t.linePath}`,
                  stroke: e.value.backgroundColor,
                  "stroke-width": e.value.lineStrokeWidth + 1,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, La),
                createBaseVNode("path", {
                  d: `M ${t.linePath}`,
                  stroke: t.color,
                  "stroke-width": e.value.lineStrokeWidth,
                  "stroke-linecap": "round",
                  fill: "none",
                  class: normalizeClass({ "quick-animation": true, "vue-data-ui-line-animated": e.value.lineAnimated }),
                  style: { transition: "all 0.3s ease-in-out" }
                }, null, 10, za)
              ], 64)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("circle", {
                cx: r.x,
                cy: unref(k2)(r.y),
                r: 3,
                fill: t.color,
                stroke: e.value.backgroundColor,
                "stroke-width": "0.5",
                class: "quick-animation",
                style: { transition: "all 0.3s ease-in-out" }
              }, null, 8, $a))), 256))
            ]))), 256))
          ]),
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", Ca, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.dataset, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("text", {
                "text-anchor": "middle",
                "font-size": e.value.dataLabelFontSize,
                fill: t.color,
                x: r.x,
                y: unref(k2)(r.y) - e.value.dataLabelFontSize / 2,
                class: "quick-animation",
                style: { transition: "all 0.3s ease-in-out" }
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                unref(k2)(r.value),
                unref(Ht)({
                  p: e.value.valuePrefix,
                  v: unref(k2)(r.value),
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: r, seriesIndex: h }
              )), 9, Ta))), 256))
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", Pa, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value.extremes.maxSeries, (t, n) => (openBlock(), createElementBlock("rect", {
              x: d.value.drawingArea.left + n * d.value.slotSize,
              y: d.value.drawingArea.top,
              height: d.value.drawingArea.height <= 0 ? 1e-5 : d.value.drawingArea.height,
              width: d.value.slotSize <= 0 ? 1e-5 : d.value.slotSize,
              fill: [j.value, J.value].includes(n) ? e.value.xyHighlighterColor : "transparent",
              style: normalizeStyle(`opacity:${e.value.xyHighlighterOpacity}`),
              onMouseenter: (r) => d.value.useTooltip(n),
              onMouseleave: c2[1] || (c2[1] = (r) => d.value.killTooltip()),
              onClick: (r) => p2("selectDatapoint", d.value.dataset.map((h) => ({
                ...h,
                value: h.values[n]
              })))
            }, null, 44, Ia))), 256))
          ])
        ], 64)) : createCommentVNode("", true),
        z2.value === _.BAR ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          e.value.xyShowGrid ? (openBlock(), createElementBlock("g", Ea, [
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
              }, null, 8, Ra)) : createCommentVNode("", true)
            ], 64))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.extremes.maxSeries + 1, (t, n) => (openBlock(), createElementBlock("line", {
              x1: v.value.drawingArea.left + v.value.slotSize * n,
              x2: v.value.drawingArea.left + v.value.slotSize * n,
              y1: v.value.drawingArea.top,
              y2: v.value.drawingArea.bottom,
              stroke: e.value.xyGridStroke,
              "stroke-width": e.value.xyGridStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Oa))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowAxis ? (openBlock(), createElementBlock("g", Na, [
            createBaseVNode("line", {
              x1: v.value.drawingArea.left,
              x2: v.value.drawingArea.left,
              y1: v.value.drawingArea.top,
              y2: v.value.drawingArea.bottom,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Fa),
            createBaseVNode("line", {
              x1: v.value.drawingArea.left,
              x2: v.value.drawingArea.right,
              y1: isNaN(v.value.absoluteZero) ? v.value.drawingArea.bottom : v.value.absoluteZero,
              y2: isNaN(v.value.absoluteZero) ? v.value.drawingArea.bottom : v.value.absoluteZero,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Ma)
          ])) : createCommentVNode("", true),
          e.value.xyShowScale ? (openBlock(), createElementBlock("g", Ba, [
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
              }, null, 8, Ua)) : createCommentVNode("", true),
              t.y <= v.value.drawingArea.bottom ? (openBlock(), createElementBlock("text", {
                key: 1,
                x: t.x,
                y: t.y + e.value.xyLabelsYFontSize / 3,
                "text-anchor": "end",
                "font-size": e.value.xyLabelsYFontSize,
                fill: e.value.color
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                t.value,
                unref(Ht)({
                  p: e.value.valuePrefix,
                  v: t.value,
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: t, seriesIndex: n }
              )), 9, Da)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.xyShowScale && e.value.xyPeriods.length ? (openBlock(), createElementBlock("g", Va, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k3.value.start, k3.value.end), (t, n) => (openBlock(), createElementBlock("line", {
              x1: v.value.drawingArea.left + v.value.slotSize * (n + 1) - v.value.slotSize / 2,
              x2: v.value.drawingArea.left + v.value.slotSize * (n + 1) - v.value.slotSize / 2,
              y1: v.value.drawingArea.bottom,
              y2: v.value.drawingArea.bottom + 4,
              stroke: e.value.xyAxisStroke,
              "stroke-width": e.value.xyAxisStrokeWidth,
              "stroke-linecap": "round"
            }, null, 8, qa))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.value.xyPeriods.slice(k3.value.start, k3.value.end), (t, n) => (openBlock(), createElementBlock("text", {
              "font-size": e.value.xyLabelsXFontSize,
              "text-anchor": e.value.xyPeriodLabelsRotation > 0 ? "start" : e.value.xyPeriodLabelsRotation < 0 ? "end" : "middle",
              transform: `translate(${v.value.drawingArea.left + v.value.slotSize * (n + 1) - v.value.slotSize / 2}, ${v.value.drawingArea.bottom + e.value.xyLabelsXFontSize + 6}) rotate(${e.value.xyPeriodLabelsRotation})`,
              fill: e.value.color
            }, toDisplayString(t), 9, Wa))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", ja, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.dataset, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("rect", {
                x: r.x,
                width: r.width <= 0 ? 1e-5 : r.width,
                height: unref(k2)(r.height <= 0 ? 1e-5 : r.height),
                y: unref(k2)(r.y),
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
                }, null, 8, Ha)) : createCommentVNode("", true),
                e.value.barAnimated && r.value > 0 && !unref(ke) && !unref(be) ? (openBlock(), createElementBlock("animate", {
                  key: 1,
                  attributeName: "y",
                  from: v.value.absoluteZero,
                  to: v.value.absoluteZero - r.height,
                  dur: "0.5s"
                }, null, 8, Xa)) : createCommentVNode("", true)
              ], 10, Ga))), 256))
            ], 64))), 256))
          ]),
          e.value.showDataLabels ? (openBlock(), createElementBlock("g", Za, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.dataset, (t, n) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.coordinates, (r, h) => (openBlock(), createElementBlock("text", {
                x: r.x + r.width / 2,
                y: unref(k2)(r.y) - e.value.dataLabelFontSize / 2,
                "text-anchor": "middle",
                "font-size": e.value.dataLabelFontSize,
                fill: t.color,
                class: "quick-animation"
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                unref(k2)(r.value),
                unref(Ht)({
                  p: e.value.valuePrefix,
                  v: unref(k2)(r.value),
                  s: e.value.valueSuffix,
                  r: e.value.dataLabelRoundingValue
                }),
                { datapoint: r, seriesIndex: h }
              )), 9, Ya))), 256))
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("g", Ja, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.extremes.maxSeries, (t, n) => (openBlock(), createElementBlock("rect", {
              x: v.value.drawingArea.left + n * v.value.slotSize,
              y: v.value.drawingArea.top,
              height: v.value.drawingArea.height <= 0 ? 1e-5 : v.value.drawingArea.height,
              width: v.value.slotSize <= 0 ? 1e-5 : v.value.slotSize,
              fill: [j.value, J.value].includes(n) ? e.value.xyHighlighterColor : "transparent",
              style: normalizeStyle(`opacity:${e.value.xyHighlighterOpacity}`),
              onMouseenter: (r) => v.value.useTooltip(n),
              onMouseleave: c2[2] || (c2[2] = (r) => v.value.killTooltip()),
              onClick: (r) => p2("selectDatapoint", v.value.dataset.map((h) => ({
                ...h,
                value: h.values[n]
              })))
            }, null, 44, Qa))), 256))
          ])
        ], 64)) : createCommentVNode("", true),
        [_.LINE, _.BAR].includes(z2.value) ? (openBlock(), createElementBlock("g", Ka, [
          e.value.xAxisLabel && z2.value === _.LINE ? (openBlock(), createElementBlock("g", el, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              "text-anchor": "middle",
              x: d.value.drawingArea.left + d.value.drawingArea.width / 2,
              y: S.value.height - e.value.axisLabelsFontSize / 3
            }, toDisplayString(e.value.xAxisLabel), 9, tl)
          ])) : createCommentVNode("", true),
          e.value.xAxisLabel && z2.value === _.BAR ? (openBlock(), createElementBlock("g", al, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              "text-anchor": "middle",
              x: v.value.drawingArea.left + v.value.drawingArea.width / 2,
              y: S.value.height - e.value.axisLabelsFontSize / 3
            }, toDisplayString(e.value.xAxisLabel), 9, ll)
          ])) : createCommentVNode("", true),
          e.value.yAxisLabel && z2.value === _.LINE ? (openBlock(), createElementBlock("g", ol, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              transform: `translate(${e.value.axisLabelsFontSize}, ${d.value.drawingArea.top + d.value.drawingArea.height / 2}) rotate(-90)`,
              "text-anchor": "middle"
            }, toDisplayString(e.value.yAxisLabel), 9, il)
          ])) : createCommentVNode("", true),
          e.value.yAxisLabel && z2.value === _.BAR ? (openBlock(), createElementBlock("g", ul, [
            createBaseVNode("text", {
              "font-size": e.value.axisLabelsFontSize,
              fill: e.value.color,
              transform: `translate(${e.value.axisLabelsFontSize}, ${v.value.drawingArea.top + v.value.drawingArea.height / 2}) rotate(-90)`,
              "text-anchor": "middle"
            }, toDisplayString(e.value.yAxisLabel), 9, nl)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 12, jt)) : createCommentVNode("", true),
      z2.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 5,
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
      u2.$slots.watermark ? (openBlock(), createElementBlock("div", rl, [
        renderSlot(u2.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ke) || unref(be) })), void 0, true)
      ])) : createCommentVNode("", true),
      [_.BAR, _.LINE].includes(z2.value) && e.value.zoomXy && x.value.maxSeriesLength > 1 ? (openBlock(), createElementBlock("div", {
        key: `slicer_${xe.value}`,
        ref_key: "quickChartSlicer",
        ref: ve
      }, [
        (openBlock(), createBlock(Ue, {
          key: `slicer_${xe.value}`,
          background: e.value.zoomColor,
          borderColor: e.value.backgroundColor,
          fontSize: e.value.zoomFontSize,
          useResetSlot: e.value.zoomUseResetSlot,
          labelLeft: e.value.xyPeriods[k3.value.start] ? e.value.xyPeriods[k3.value.start] : "",
          labelRight: e.value.xyPeriods[k3.value.end - 1] ? e.value.xyPeriods[k3.value.end - 1] : "",
          textColor: e.value.color,
          inputColor: e.value.zoomColor,
          selectColor: e.value.zoomHighlightColor,
          max: x.value.maxSeriesLength,
          min: 0,
          valueStart: k3.value.start,
          valueEnd: k3.value.end,
          smoothMinimap: e.value.zoomMinimap.smooth,
          minimapSelectedColor: e.value.zoomMinimap.selectedColor,
          minimapSelectedColorOpacity: e.value.zoomMinimap.selectedColorOpacity,
          minimapSelectionRadius: e.value.zoomMinimap.selectionRadius,
          minimapLineColor: e.value.zoomMinimap.lineColor,
          minimap: dt.value,
          minimapIndicatorColor: e.value.zoomMinimap.indicatorColor,
          minimapSelectedIndex: J.value,
          start: k3.value.start,
          "onUpdate:start": c2[3] || (c2[3] = (t) => k3.value.start = t),
          end: k3.value.end,
          "onUpdate:end": c2[4] || (c2[4] = (t) => k3.value.end = t),
          onReset: vt,
          onTrapMouse: st
        }, {
          "reset-action": withCtx(({ reset: t }) => [
            renderSlot(u2.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: t })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "smoothMinimap", "minimapSelectedColor", "minimapSelectedColorOpacity", "minimapSelectionRadius", "minimapLineColor", "minimap", "minimapIndicatorColor", "minimapSelectedIndex", "start", "end"]))
      ])) : createCommentVNode("", true),
      e.value.showLegend ? (openBlock(), createElementBlock("div", {
        key: 8,
        ref_key: "quickChartLegend",
        ref: oe,
        class: "vue-ui-quick-chart-legend",
        style: normalizeStyle(`background:transparent;color:${e.value.color}`)
      }, [
        z2.value === _.DONUT ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(T2.value.legend, (t, n) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-quick-chart-legend-item",
          onClick: (r) => {
            rt2(t, T2.value.dataset), p2("selectLegend", t);
          },
          style: normalizeStyle(`cursor: ${T2.value.legend.length > 1 ? "pointer" : "default"}; opacity:${w.value.includes(t.id) ? "0.5" : "1"}`)
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
            }, toDisplayString(w.value.includes(t.id) ? "-" : unref(ir)(
              e.value.formatter,
              t.absoluteValue,
              unref(Ht)({
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
            }, " ( - % ) ", 4)) : Ae.value ? (openBlock(), createElementBlock("span", {
              key: 1,
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px; font-variant-numeric: tabular-nums;`)
            }, " ( - % ) ", 4)) : (openBlock(), createElementBlock("span", {
              key: 2,
              style: normalizeStyle(`font-size:${e.value.legendFontSize}px; font-variant-numeric: tabular-nums;`)
            }, " (" + toDisplayString(unref(Ht)({
              v: t.value / T2.value.total * 100,
              s: "%",
              r: e.value.dataLabelRoundingPercentage
            })) + ") ", 5))
          ], 64))
        ], 12, sl))), 256)) : createCommentVNode("", true),
        z2.value === _.LINE ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(d.value.legend, (t, n) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-quick-chart-legend-item",
          onClick: (r) => {
            Ge(t.id, d.value.legend.length - 1), p2("selectLegend", t);
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
        ], 12, vl))), 256)) : createCommentVNode("", true),
        z2.value === _.BAR ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(v.value.legend, (t, n) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-quick-chart-legend-item",
          onClick: (r) => {
            Ge(t.id, v.value.legend.length - 1), p2("selectLegend", t);
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
        ], 12, dl))), 256)) : createCommentVNode("", true)
      ], 4)) : createCommentVNode("", true),
      u2.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 9,
        ref_key: "source",
        ref: Me,
        dir: "auto"
      }, [
        renderSlot(u2.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: Se2.value.showTooltip && G.value,
        backgroundColor: e.value.backgroundColor,
        color: e.value.color,
        borderRadius: e.value.tooltipBorderRadius,
        borderColor: e.value.tooltipBorderColor,
        borderWidth: e.value.tooltipBorderWidth,
        fontSize: e.value.tooltipFontSize,
        backgroundOpacity: e.value.tooltipBackgroundOpacity,
        position: e.value.tooltipPosition,
        offsetY: e.value.tooltipOffsetY,
        parent: W.value,
        content: K.value,
        isCustom: unref(Xt)(e.value.tooltipCustomFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(u2.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...de.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(u2.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...de.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"])
    ], 14, Wt)) : (openBlock(), createElementBlock("div", cl, [
      createVNode(u, {
        name: "circleCancel",
        stroke: "red"
      }),
      hl
    ]));
  }
};
var zl = s(fl, [["__scopeId", "data-v-7397d9b6"]]);
export {
  zl as default
};
//# sourceMappingURL=vue-ui-quick-chart-BDBlm9uu-H2CQWFIF.js.map
