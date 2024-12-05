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
  Ar,
  Bt,
  Dt,
  Et,
  He,
  Ht,
  Jt,
  Kt,
  Lt,
  Nt,
  R as R2,
  Vt,
  Xt,
  Zt,
  dr,
  ir,
  jt,
  k as k2,
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

// node_modules/vue-data-ui/dist/vue-ui-scatter-4LbMvEAD.js
var Nt2 = ["id"];
var Pt = ["xmlns", "viewBox"];
var Wt = { key: 0 };
var Ot = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Ft = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Xt2 = { key: 1 };
var It = ["points", "fill", "stroke-width", "stroke-dasharray", "stroke"];
var Dt2 = { key: 0 };
var Yt = ["cx", "cy", "r", "fill", "stroke", "stroke-width", "onMouseover"];
var jt2 = { key: 1 };
var Vt2 = { key: 2 };
var Et2 = ["id"];
var Gt = ["stop-color"];
var Rt = ["stop-color"];
var Ut = ["id"];
var qt2 = ["stop-color"];
var Ht2 = ["stop-color"];
var Jt2 = ["x", "y", "width", "height", "fill", "stroke", "stroke-width", "rx"];
var Kt2 = ["x", "y", "height", "width", "fill", "stroke", "stroke-width", "rx"];
var Qt = { key: 0 };
var Zt2 = ["d", "stroke", "stroke-width"];
var el = ["d", "stroke", "stroke-width"];
var tl = ["d", "stroke", "stroke-width"];
var ll = ["d", "stroke", "stroke-width"];
var al = {
  key: 3,
  style: { "pointer-events": "none !important" }
};
var ol = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var sl = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var ul = ["x", "y", "font-size", "fill", "font-weight", "text-anchor"];
var rl = ["x", "y", "font-size", "fill", "font-weight"];
var il = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var nl = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var vl = ["x", "y", "font-size", "fill", "font-weight", "text-anchor"];
var yl = { key: 4 };
var cl = ["x", "y", "font-size", "fill"];
var dl = ["x", "y", "font-size", "fill"];
var hl = ["id", "transform", "font-size", "font-weight", "fill"];
var pl = { key: 5 };
var fl = ["x", "y", "font-size", "fill"];
var gl = ["x", "y", "font-size", "fill"];
var xl = ["font-size", "font-weight", "fill", "x", "y"];
var ml = ["id"];
var bl = ["x", "y", "width", "height"];
var kl = { key: 6 };
var _l = ["x1", "x2", "y1", "y2", "stroke-dasharray", "stroke", "stroke-width", "clip-path"];
var wl = ["x", "y", "fill", "font-size", "font-weight"];
var Ml = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var $l = ["onClick"];
var Cl = {
  key: 0,
  style: { width: "100%", display: "flex", "align-items": "center", "justify-content": "center" }
};
var zl = {
  viewBox: "0 0 20 20",
  height: "20",
  width: "20",
  style: { overflow: "hidden", background: "transparent" }
};
var Al = { key: 0 };
var Sl = ["innerHTML"];
var Ll = {
  __name: "vue-ui-scatter",
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
  setup(Ee, { expose: Ge }) {
    const O2 = Ee, { vue_ui_scatter: Re } = te(), ee = computed(() => !!O2.dataset && O2.dataset.length), z = ref(Dt()), Ue = ref(null), ue = ref(false), re2 = ref(""), ge = ref(0), H = ref(null), xe = ref(null), me = ref(null), be = ref(null), ke = ref(null), _e = ref(0), we = ref(0), Me = ref(0), e = computed({
      get: () => $e(),
      set: (l) => l
    });
    function $e() {
      const l = c({
        userConfig: O2.config,
        defaultConfig: Re
      });
      return l.theme ? {
        ...c({
          userConfig: He.vue_ui_scatter[l.theme] || O2.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || rt
      } : l;
    }
    watch(() => O2.config, (l) => {
      e.value = $e(), Ce(), _e.value += 1, we.value += 1, Me.value += 1;
    }, { deep: true });
    const te2 = ref(null);
    onMounted(() => {
      Ce();
    });
    function Ce() {
      if (jt(O2.dataset) && qt({
        componentName: "VueUiScatter",
        type: "dataset"
      }), e.value.responsive) {
        const l = O(() => {
          const { width: i, height: t } = k({
            chart: H.value,
            title: e.value.style.title.text ? xe.value : null,
            legend: e.value.style.legend.show ? me.value : null,
            source: be.value,
            noTitle: ke.value
          });
          A.value.width = i, A.value.height = t;
        });
        te2.value = new ResizeObserver(l), te2.value.observe(H.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      te2.value && te2.value.disconnect();
    });
    const { isPrinting: ze, isImaging: Ae, generatePdf: Se2, generateImage: Le } = re({
      elementId: `vue-ui-scatter_${z.value}`,
      fileName: e.value.style.title.text || "vue-ui-scatter"
    }), qe = computed(() => e.value.userOptions.show && !e.value.style.title.text), Te = computed(() => tr(e.value.customPalette)), I = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), A = ref({
      height: e.value.style.layout.height,
      width: e.value.style.layout.width
    }), le = computed(() => e.value.style.layout.marginalBars.show ? e.value.style.layout.marginalBars.size + e.value.style.layout.marginalBars.offset : 0), r = computed(() => ({
      top: e.value.style.layout.padding.top + le.value,
      right: A.value.width - e.value.style.layout.padding.right - le.value,
      bottom: A.value.height - e.value.style.layout.padding.bottom,
      left: e.value.style.layout.padding.left,
      height: A.value.height - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom - le.value,
      width: A.value.width - e.value.style.layout.padding.left - e.value.style.layout.padding.right - le.value
    })), p2 = computed(() => {
      O2.dataset.forEach((a, n) => {
        Zt({
          datasetObject: a,
          requiredAttributes: ["values"]
        }).forEach((b) => {
          qt({
            componentName: "VueUiScatter",
            type: "datasetSerieAttribute",
            property: b,
            index: n
          });
        }), a.values && a.values.forEach((b, E2) => {
          Zt({
            datasetObject: b,
            requiredAttributes: ["x", "y"]
          }).forEach((J) => {
            qt({
              componentName: "VueUiScatter",
              type: "datasetSerieAttribute",
              property: `values.${J}`,
              index: `${n} - ${E2}`
            });
          });
        });
      });
      const l = Math.min(...V.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.x))), i = Math.max(...V.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.x))), t = Math.min(...V.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.y))), s2 = Math.max(...V.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.y)));
      return { xMin: l >= 0 ? 0 : l, xMax: i, yMin: t >= 0 ? 0 : t, yMax: s2 };
    }), f = computed(() => ({
      x: r.value.left + Math.abs(p2.value.xMin) / (p2.value.xMax + Math.abs(p2.value.xMin)) * r.value.width,
      y: r.value.bottom - Math.abs(p2.value.yMin) / (p2.value.yMax + Math.abs(p2.value.yMin)) * r.value.height
    })), V = computed(() => O2.dataset.map((l, i) => {
      const t = `cluster_${z.value}_${i}`;
      return {
        ...l,
        values: Ar({
          data: l.values,
          threshold: e.value.downsample.threshold
        }),
        id: t,
        color: l.color ? l.color : Te.value[i] || rt[i] || rt[i % rt.length],
        opacity: x2.value.includes(t) ? 0.5 : 1,
        shape: l.shape ?? "circle",
        segregate: () => Oe(t),
        isSegregated: x2.value.includes(t)
      };
    })), He2 = computed(() => ({
      cy: "scatter-div-legend",
      backgroundColor: e.value.style.legend.backgroundColor,
      color: e.value.style.legend.color,
      fontSize: e.value.style.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.legend.bold ? "bold" : ""
    })), ie = computed(() => V.value.map((l, i) => ({
      ...l,
      plots: l.values.map((t) => ({
        x: r.value.left + (t.x + Math.abs(p2.value.xMin)) / (p2.value.xMax + Math.abs(p2.value.xMin)) * r.value.width,
        y: r.value.bottom - (t.y + Math.abs(p2.value.yMin)) / (p2.value.yMax + Math.abs(p2.value.yMin)) * r.value.height,
        v: {
          ...t,
          name: t.name || ""
        },
        clusterName: l.name,
        color: l.color ? l.color : Te.value[i] || rt[i] || rt[i % rt.length],
        id: `plot_${z.value}_${Math.random()}`,
        weight: t.weight ?? e.value.style.layout.plots.radius
      }))
    })).filter((l) => !x2.value.includes(l.id))), S = computed(() => ie.value.map((l) => {
      const i = l.plots.reduce((g, G) => g + G.x, 0) / l.plots.length, t = l.plots.reduce((g, G) => g + G.y, 0) / l.plots.length;
      let s2 = 0, a = 0, n = 0;
      for (const g of l.plots)
        s2 += (g.x - i) * (g.y - t), a += (g.x - i) ** 2, n += (g.y - t) ** 2;
      const b = s2 / Math.sqrt(a * n), E2 = b * (Math.sqrt(n) / Math.sqrt(a)), J = t - E2 * i, N = {
        x1: r.value.left,
        x2: r.value.right,
        y1: E2 * r.value.left + J,
        y2: E2 * r.value.right + J,
        coefficient: b
      }, w = (N.y2 - N.y1) / (N.x2 - N.x1), T = N.y1 - w * N.x1, F = Math.min(A.value.width - e.value.style.layout.padding.right, Math.max(e.value.style.layout.padding.left, (r.value.top - T) / w)), se = {
        x: F,
        y: w * F + T <= e.value.style.layout.padding.top ? r.value.top : w * F + T
      };
      return {
        ...l,
        correlation: N,
        label: se,
        plots: l.plots.map((g) => {
          const G = (g.x + w * g.y - w * T) / (1 + Math.pow(w, 2)), ye = (w * g.x + Math.pow(w, 2) * g.y + T) / (1 + Math.pow(w, 2)), k3 = Math.sqrt(Math.pow(g.x - G, 2) + Math.pow(g.y - ye, 2));
          return {
            ...g,
            deviation: k3,
            shape: l.shape,
            color: l.color
          };
        })
      };
    })), Be = computed(() => Math.max(...S.value.flatMap((l) => l.plots.map((i) => Math.abs(i.deviation)))));
    function Je() {
      return S.value;
    }
    function Ne(l, i) {
      const t = Array.isArray(l) ? l.flatMap((k3) => k3.plots.map((R3) => ({
        x: R3.x,
        y: R3.y
      }))) : l.plots.map((k3) => ({
        x: k3.x,
        y: k3.y
      }));
      let s2 = 1 / 0, a = -1 / 0, n = 1 / 0, b = -1 / 0;
      t.forEach(({ x: k3, y: R3 }) => {
        s2 = Math.min(s2, k3), a = Math.max(a, k3), n = Math.min(n, R3), b = Math.max(b, R3);
      });
      const E2 = a - s2, J = b - n, N = E2 / i, w = J / i, T = Array(i).fill(0), F = Array(i).fill(0);
      t.forEach(({ x: k3, y: R3 }) => {
        const ce = Math.floor((k3 - s2) / N), de = Math.floor((R3 - n) / w);
        T[ce] || (T[ce] = 0), F[de] || (F[de] = 0), T[ce] += 1, F[de] += 1;
      });
      const se = [], g = [];
      for (let k3 = 0; k3 < i; k3 += 1)
        se.push(s2 + (k3 + 0.5) * N), g.push(n + (k3 + 0.5) * w);
      const G = Math.max(...T), ye = Math.max(...F);
      return { x: T, y: F, avgX: se, avgY: g, maxX: G, maxY: ye };
    }
    const D = computed(() => e.value.style.layout.marginalBars.tranches), L = computed(() => Ne(ie.value, D.value)), Ke = computed(() => {
      const l = r.value.top - e.value.style.layout.marginalBars.offset, i = r.value.right + e.value.style.layout.marginalBars.offset;
      return ie.value.map((t) => {
        const s2 = Ne(t, D.value);
        return {
          coords: s2,
          dX: Lt(s2.avgX.map((a, n) => ({
            x: a,
            y: l - s2.x[n] / s2.maxX * e.value.style.layout.marginalBars.size
          }))),
          dY: Bt(s2.avgY.map((a, n) => ({
            y: a,
            x: i + e.value.style.layout.marginalBars.size * s2.y[n] / s2.maxY
          }))),
          color: t.color,
          id: t.id
        };
      });
    }), B = ref(void 0), y = ref(null), ne = ref(null);
    function Pe(l, i) {
      B.value = l.id, y.value = l;
      let t = "";
      ne.value = {
        datapoint: l,
        seriesIndex: i,
        series: S.value,
        config: e.value
      };
      const s2 = e.value.style.tooltip.customFormat;
      Xt(s2) && Kt(() => s2({
        datapoint: l,
        seriesIndex: i,
        series: S.value,
        config: e.value
      })) ? re2.value = s2({
        datapoint: l,
        seriesIndex: i,
        series: S.value,
        config: e.value
      }) : (l.clusterName && (t += `<div style="display:flex;gap:3px;align-items:center">${l.clusterName}</div>`), l.v.name && (t += `<div>${l.v.name}</div>`), t += `<div style="text-align:left;margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}">`, t += `<div>${e.value.style.layout.dataLabels.xAxis.name}: <b>${isNaN(l.v.x) ? "-" : ir(
        e.value.style.layout.plots.selectors.labels.x.formatter,
        l.v.x,
        Ht({
          p: e.value.style.tooltip.prefix,
          v: l.v.x,
          s: e.value.style.tooltip.suffix,
          r: e.value.style.tooltip.roundingValue
        }),
        { datapoint: l, seriesIndex: i }
      )}</b></div>`, t += `<div>${e.value.style.layout.dataLabels.yAxis.name}: <b>${isNaN(l.v.y) ? "-" : ir(
        e.value.style.layout.plots.selectors.labels.y.formatter,
        l.v.y,
        Ht({
          p: e.value.style.tooltip.prefix,
          v: l.v.y,
          s: e.value.style.tooltip.suffix,
          r: e.value.style.tooltip.roundingValue
        }),
        { datapoint: l, seriesIndex: i }
      )}</b></div>`, t += `${e.value.style.layout.plots.deviation.translation}: <b>${Ht({
        v: l.deviation,
        r: e.value.style.layout.plots.deviation.roundingValue
      })}</b>`, t += "</div>", re2.value = `<div>${t}</div>`), ue.value = true;
    }
    function We() {
      ue.value = false, B.value = void 0, y.value = null;
    }
    const x2 = ref([]);
    function Oe(l) {
      x2.value.includes(l) ? x2.value = x2.value.filter((i) => i !== l) : x2.value.length < O2.dataset.length - 1 && x2.value.push(l);
    }
    function Fe() {
      nextTick(() => {
        const l = ["", e.value.table.translations.correlationCoefficient, e.value.table.translations.nbrPlots, `${e.value.style.layout.dataLabels.xAxis.name} ${e.value.table.translations.average}`, `${e.value.style.layout.dataLabels.yAxis.name} ${e.value.table.translations.average}`], i = S.value.map((a) => [
          a.name,
          a.correlation.coefficient,
          a.plots.length,
          a.plots.map((n) => n.v.x).reduce((n, b) => n + b, 0) / a.plots.length,
          a.plots.map((n) => n.v.y).reduce((n, b) => n + b, 0) / a.plots.length
        ]), t = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([l]).concat(i), s2 = Vt(t);
        Nt({ csvContent: s2, title: e.value.style.title.text || "vue-ui-heatmap" });
      });
    }
    const ae2 = computed(() => {
      const l = [
        e.value.table.translations.series,
        e.value.table.translations.correlationCoefficient,
        e.value.table.translations.nbrPlots,
        `${e.value.style.layout.dataLabels.xAxis.name} ${e.value.table.translations.average}`,
        `${e.value.style.layout.dataLabels.yAxis.name} ${e.value.table.translations.average}`
      ], i = S.value.map((s2) => [
        {
          shape: s2.shape,
          content: s2.name,
          color: s2.color
        },
        Number((s2.correlation.coefficient ?? 0).toFixed(e.value.table.td.roundingValue)).toLocaleString(),
        s2.plots.length.toLocaleString(),
        Number((s2.plots.map((a) => a.v.x ?? 0).reduce((a, n) => a + n, 0) / s2.plots.length).toFixed(e.value.table.td.roundingAverage)).toLocaleString(),
        Number((s2.plots.map((a) => a.v.y ?? 0).reduce((a, n) => a + n, 0) / s2.plots.length).toFixed(e.value.table.td.roundingAverage)).toLocaleString()
      ]), t = {
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
      return { head: l, body: i, config: t, colNames: l };
    }), K = ref(false);
    function Qe(l) {
      K.value = l, ge.value += 1;
    }
    function Xe() {
      I.value.showTable = !I.value.showTable;
    }
    function Ie() {
      I.value.showTooltip = !I.value.showTooltip;
    }
    const oe = ref(false);
    function ve() {
      oe.value = !oe.value;
    }
    return Ge({
      getData: Je,
      generatePdf: Se2,
      generateCsv: Fe,
      generateImage: Le,
      toggleTable: Xe,
      toggleTooltip: Ie,
      toggleAnnotator: ve
    }), (l, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-scatter ${K.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "scatterChart",
      ref: H,
      id: `vue-ui-scatter_${z.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: H.value,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        active: oe.value,
        onClose: ve
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      qe.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: ke,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: xe,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${_e.value}`,
          config: {
            title: {
              cy: "scatter-div-title",
              ...e.value.style.title
            },
            subtitle: {
              cy: "scatter-div-subtitle",
              ...e.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && ee.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Ue,
        key: `user_options_${ge.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(Ae),
        isPrinting: unref(ze),
        uid: z.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: I.value.showTooltip,
        isFullscreen: K.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: H.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: oe.value,
        onToggleFullscreen: Qe,
        onGeneratePdf: unref(Se2),
        onGenerateCsv: Fe,
        onGenerateImage: unref(Le),
        onToggleTable: Xe,
        onToggleTooltip: Ie,
        onToggleAnnotator: ve
      }, createSlots({ _: 2 }, [
        l.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        l.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        l.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        l.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        l.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        l.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: s2 }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: s2 })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        l.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: s2 }) => [
            renderSlot(l.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: s2 })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      ee.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": K.value, "vue-data-ui-fulscreen--off": !K.value }),
        viewBox: `0 0 ${A.value.width <= 0 ? 10 : A.value.width} ${A.value.height <= 0 ? 10 : A.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        e.value.style.layout.axis.show ? (openBlock(), createElementBlock("g", Wt, [
          createBaseVNode("line", {
            x1: f.value.x,
            x2: f.value.x,
            y1: r.value.top,
            y2: r.value.bottom,
            stroke: e.value.style.layout.axis.stroke,
            "stroke-width": e.value.style.layout.axis.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Ot),
          createBaseVNode("line", {
            x1: r.value.left,
            x2: r.value.right,
            y1: f.value.y,
            y2: f.value.y,
            stroke: e.value.style.layout.axis.stroke,
            "stroke-width": e.value.style.layout.axis.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Ft)
        ])) : createCommentVNode("", true),
        e.value.style.layout.plots.giftWrap.show ? (openBlock(), createElementBlock("g", Xt2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
            t.plots.length > 2 ? (openBlock(), createElementBlock("polygon", {
              key: 0,
              points: unref(Et)({ series: t.plots }),
              fill: unref(dr)(t.color, e.value.style.layout.plots.giftWrap.fillOpacity * 100),
              "stroke-width": e.value.style.layout.plots.giftWrap.strokeWidth,
              "stroke-dasharray": e.value.style.layout.plots.giftWrap.strokeDasharray,
              stroke: t.color,
              "stroke-linejoin": "round",
              "stroke-linecap": "round"
            }, null, 8, It)) : createCommentVNode("", true)
          ]))), 256))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
          !t.shape || t.shape === "circle" ? (openBlock(), createElementBlock("g", Dt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.plots, (a, n) => (openBlock(), createElementBlock("circle", {
              cx: a.x,
              cy: a.y,
              r: B.value && B.value === a.id ? a.weight * 2 : a.weight,
              fill: unref(dr)(t.color, e.value.style.layout.plots.opacity * 100),
              stroke: e.value.style.layout.plots.stroke,
              "stroke-width": e.value.style.layout.plots.strokeWidth,
              onMouseover: (b) => Pe(a, s2),
              onMouseleave: We,
              style: normalizeStyle(`opacity:${B.value && B.value === a.id ? 1 : e.value.style.layout.plots.significance.useDistanceOpacity ? 1 - Math.abs(a.deviation) / Be.value : e.value.style.layout.plots.significance.show && Math.abs(a.deviation) > e.value.style.layout.plots.significance.deviationThreshold ? e.value.style.layout.plots.significance.opacity : 1}`)
            }, null, 44, Yt))), 256))
          ])) : (openBlock(), createElementBlock("g", jt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.plots, (a, n) => (openBlock(), createBlock($, {
              plot: { x: a.x, y: a.y },
              radius: B.value && B.value === a.id ? a.weight * 2 : a.weight,
              shape: t.shape,
              color: unref(dr)(t.color, e.value.style.layout.plots.opacity * 100),
              stroke: e.value.style.layout.plots.stroke,
              strokeWidth: e.value.style.layout.plots.strokeWidth,
              onMouseover: (b) => Pe(a, s2),
              onMouseleave: We,
              style: normalizeStyle(`opacity:${B.value && B.value === a.id ? 1 : e.value.style.layout.plots.significance.useDistanceOpacity ? 1 - Math.abs(a.deviation) / Be.value : e.value.style.layout.plots.significance.show && Math.abs(a.deviation) > e.value.style.layout.plots.significance.deviationThreshold ? e.value.style.layout.plots.significance.opacity : 1}`)
            }, null, 8, ["plot", "radius", "shape", "color", "stroke", "strokeWidth", "onMouseover", "style"]))), 256))
          ]))
        ]))), 256)),
        e.value.style.layout.marginalBars.show ? (openBlock(), createElementBlock("g", Vt2, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `marginal_x_${z.value}`,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.marginalBars.fill
              }, null, 8, Gt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.backgroundColor
              }, null, 8, Rt)
            ], 8, Et2),
            createBaseVNode("linearGradient", {
              id: `marginal_y_${z.value}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.backgroundColor
              }, null, 8, qt2),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.layout.marginalBars.fill
              }, null, 8, Ht2)
            ], 8, Ut)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(L.value.x, (t, s2) => (openBlock(), createElementBlock("g", null, [
            t && L.value.avgX[s2] ? (openBlock(), createElementBlock("rect", {
              key: 0,
              x: L.value.avgX[s2] - r.value.width / D.value / 2,
              y: r.value.top - e.value.style.layout.marginalBars.offset - t / L.value.maxX * e.value.style.layout.marginalBars.size,
              width: r.value.width / D.value <= 0 ? 1e-4 : r.value.width / D.value,
              height: t / L.value.maxX * e.value.style.layout.marginalBars.size <= 0 ? 1e-4 : t / L.value.maxX * e.value.style.layout.marginalBars.size,
              fill: e.value.style.layout.marginalBars.useGradient ? `url(#marginal_x_${z.value})` : e.value.style.layout.marginalBars.fill,
              style: normalizeStyle(`opacity:${e.value.style.layout.marginalBars.opacity}`),
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.marginalBars.strokeWidth,
              rx: e.value.style.layout.marginalBars.borderRadius
            }, null, 12, Jt2)) : createCommentVNode("", true)
          ]))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(L.value.y, (t, s2) => (openBlock(), createElementBlock("g", null, [
            t && L.value.avgY[s2] ? (openBlock(), createElementBlock("rect", {
              key: 0,
              x: r.value.right + e.value.style.layout.marginalBars.offset,
              y: L.value.avgY[s2] - r.value.height / D.value / 2,
              height: r.value.height / D.value <= 0 ? 1e-4 : r.value.height / D.value,
              width: t / L.value.maxY * e.value.style.layout.marginalBars.size <= 0 ? 1e-4 : t / L.value.maxY * e.value.style.layout.marginalBars.size,
              fill: e.value.style.layout.marginalBars.useGradient ? `url(#marginal_y_${z.value})` : e.value.style.layout.marginalBars.fill,
              style: normalizeStyle(`opacity:${e.value.style.layout.marginalBars.opacity}`),
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.marginalBars.strokeWidth,
              rx: e.value.style.layout.marginalBars.borderRadius
            }, null, 12, Kt2)) : createCommentVNode("", true)
          ]))), 256)),
          e.value.style.layout.marginalBars.showLines ? (openBlock(), createElementBlock("g", Qt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Ke.value, (t) => (openBlock(), createElementBlock(Fragment, null, [
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 0,
                d: `M ${t.dX}`,
                stroke: e.value.style.backgroundColor,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth + 1,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, Zt2)),
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 1,
                d: `M ${t.dX}`,
                stroke: t.color,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, el)),
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 2,
                d: `M ${t.dY}`,
                stroke: e.value.style.backgroundColor,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth + 1,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, tl)),
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 3,
                d: `M ${t.dY}`,
                stroke: t.color,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, ll))
            ], 64))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        y.value && e.value.style.layout.plots.selectors.show ? (openBlock(), createElementBlock("g", al, [
          createBaseVNode("line", {
            x1: f.value.x,
            x2: y.value.x,
            y1: y.value.y,
            y2: y.value.y,
            stroke: e.value.style.layout.plots.selectors.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.strokeWidth,
            "stroke-dasharray": e.value.style.layout.plots.selectors.strokeDasharray,
            "stroke-linecap": "round",
            class: "line-pointer"
          }, null, 8, ol),
          createBaseVNode("line", {
            x1: y.value.x,
            x2: y.value.x,
            y1: f.value.y,
            y2: y.value.y,
            stroke: e.value.style.layout.plots.selectors.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.strokeWidth,
            "stroke-dasharray": e.value.style.layout.plots.selectors.strokeDasharray,
            "stroke-linecap": "round",
            class: "line-pointer"
          }, null, 8, sl),
          createBaseVNode("text", {
            x: f.value.x + (y.value.x > f.value.x ? -6 : 6),
            y: y.value.y + e.value.style.layout.plots.selectors.labels.fontSize / 3,
            "font-size": e.value.style.layout.plots.selectors.labels.fontSize,
            fill: e.value.style.layout.plots.selectors.labels.color,
            "font-weight": e.value.style.layout.plots.selectors.labels.bold ? "bold" : "normal",
            "text-anchor": y.value.x > f.value.x ? "end" : "start"
          }, toDisplayString(unref(ir)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k2)(y.value.v.y),
            unref(Ht)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k2)(y.value.v.y),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.plots.selectors.labels.rounding
            }),
            { datapoint: y.value }
          )), 9, ul),
          createBaseVNode("text", {
            x: y.value.x,
            y: f.value.y + (y.value.y > f.value.y ? -6 : e.value.style.layout.plots.selectors.labels.fontSize + 6),
            "font-size": e.value.style.layout.plots.selectors.labels.fontSize,
            fill: e.value.style.layout.plots.selectors.labels.color,
            "font-weight": e.value.style.layout.plots.selectors.labels.bold ? "bold" : "normal",
            "text-anchor": "middle"
          }, toDisplayString(unref(ir)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k2)(y.value.v.x),
            unref(Ht)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k2)(y.value.v.x),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.plots.selectors.labels.rounding
            }),
            { datapoint: y.value }
          )), 9, rl),
          createBaseVNode("circle", {
            cx: f.value.x,
            cy: y.value.y,
            r: e.value.style.layout.plots.selectors.markers.radius,
            fill: e.value.style.layout.plots.selectors.markers.fill,
            stroke: e.value.style.layout.plots.selectors.markers.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.markers.strokeWidth,
            class: "line-pointer"
          }, null, 8, il),
          createBaseVNode("circle", {
            cx: y.value.x,
            cy: f.value.y,
            r: e.value.style.layout.plots.selectors.markers.radius,
            fill: e.value.style.layout.plots.selectors.markers.fill,
            stroke: e.value.style.layout.plots.selectors.markers.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.markers.strokeWidth,
            class: "line-pointer"
          }, null, 8, nl),
          e.value.style.layout.plots.selectors.labels.showName ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: y.value.x,
            y: y.value.y + (y.value.y < f.value.y ? -e.value.style.layout.plots.selectors.labels.fontSize / 2 : e.value.style.layout.plots.selectors.labels.fontSize),
            "font-size": e.value.style.layout.plots.selectors.labels.fontSize,
            fill: e.value.style.layout.plots.selectors.labels.color,
            "font-weight": e.value.style.layout.plots.selectors.labels.bold ? "bold" : "normal",
            "text-anchor": y.value.x < r.value.left + 100 ? "start" : y.value.x > r.value.right - 100 ? "end" : y.value.x > f.value.x ? "start" : "end"
          }, toDisplayString(y.value.v.name), 9, vl)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.layout.dataLabels.xAxis.show ? (openBlock(), createElementBlock("g", yl, [
          createBaseVNode("text", {
            x: r.value.left - 5,
            y: f.value.y + e.value.style.layout.dataLabels.xAxis.fontSize / 3,
            "text-anchor": "end",
            "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
            fill: e.value.style.layout.dataLabels.xAxis.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.plots.selectors.labels.x.formatter,
            unref(k2)(p2.value.xMin),
            unref(Ht)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k2)(p2.value.xMin),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.xAxis.rounding
            })
          )), 9, cl),
          createBaseVNode("text", {
            x: r.value.right + 3,
            y: f.value.y + e.value.style.layout.dataLabels.xAxis.fontSize / 3,
            "text-anchor": "start",
            "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
            fill: e.value.style.layout.dataLabels.xAxis.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.plots.selectors.labels.x.formatter,
            unref(k2)(p2.value.xMax),
            unref(Ht)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k2)(p2.value.xMax),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.xAxis.rounding
            })
          )), 9, dl),
          createBaseVNode("text", {
            id: `vue-ui-scatter-xAxis-label-${z.value}`,
            transform: `translate(${e.value.style.layout.dataLabels.xAxis.fontSize * 2}, ${r.value.top + r.value.height / 2}), rotate(-90)`,
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
            "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal",
            fill: e.value.style.layout.dataLabels.xAxis.color
          }, toDisplayString(e.value.style.layout.dataLabels.xAxis.name), 9, hl)
        ])) : createCommentVNode("", true),
        e.value.style.layout.dataLabels.yAxis.show ? (openBlock(), createElementBlock("g", pl, [
          createBaseVNode("text", {
            x: f.value.x,
            y: r.value.bottom + e.value.style.layout.dataLabels.yAxis.fontSize + 3,
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
            fill: e.value.style.layout.dataLabels.yAxis.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k2)(p2.value.yMin),
            unref(Ht)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k2)(p2.value.yMin),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.yAxis.rounding
            })
          )), 9, fl),
          createBaseVNode("text", {
            x: f.value.x,
            y: r.value.top - e.value.style.layout.dataLabels.yAxis.fontSize / 2,
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
            fill: e.value.style.layout.dataLabels.yAxis.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k2)(p2.value.yMax),
            unref(Ht)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k2)(p2.value.yMax),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.yAxis.rounding
            })
          )), 9, gl),
          createBaseVNode("text", {
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
            "font-weight": e.value.style.layout.dataLabels.yAxis.bold ? "bold" : "normal",
            fill: e.value.style.layout.dataLabels.yAxis.color,
            x: r.value.left + r.value.width / 2,
            y: r.value.bottom + 8 + e.value.style.layout.dataLabels.yAxis.fontSize * 2
          }, toDisplayString(e.value.style.layout.dataLabels.yAxis.name), 9, xl)
        ])) : createCommentVNode("", true),
        createBaseVNode("clipPath", {
          id: `clip_path_${z.value}`
        }, [
          createBaseVNode("rect", {
            x: r.value.left,
            y: r.value.top,
            width: r.value.width <= 0 ? 1e-4 : r.value.width,
            height: r.value.height <= 0 ? 1e-4 : r.value.height
          }, null, 8, bl)
        ], 8, ml),
        e.value.style.layout.correlation.show ? (openBlock(), createElementBlock("g", kl, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("line", {
            x1: t.correlation.x1,
            x2: t.correlation.x2,
            y1: t.correlation.y1,
            y2: t.correlation.y2,
            "stroke-dasharray": e.value.style.layout.correlation.strokeDasharray,
            stroke: t.color,
            "stroke-width": e.value.style.layout.correlation.strokeWidth,
            "clip-path": `url(#clip_path_${z.value})`
          }, null, 8, _l))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
            e.value.style.layout.correlation.label.show ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: t.label.x,
              y: t.label.y,
              fill: e.value.style.layout.correlation.label.useSerieColor ? t.color : e.value.style.layout.correlation.label.color,
              "font-size": e.value.style.layout.correlation.label.fontSize,
              "font-weight": e.value.style.layout.correlation.label.bold ? "bold" : "normal"
            }, toDisplayString(unref(Ht)({
              v: unref(k2)(t.correlation.coefficient),
              r: e.value.style.layout.correlation.label.roundingValue
            })), 9, wl)) : createCommentVNode("", true)
          ]))), 256))
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "svg", { svg: A.value }, void 0, true)
      ], 14, Pt)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", Ml, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ze) || unref(Ae) })), void 0, true)
      ])) : createCommentVNode("", true),
      ee.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "quadrant",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            quadrant: {
              grid: {
                color: e.value.style.layout.axis.stroke
              },
              plots: {
                color: e.value.style.layout.axis.stroke,
                radius: 1
              }
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: me
      }, [
        e.value.style.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${Me.value}`,
          legendSet: V.value,
          config: He2.value,
          onClickMarker: i[0] || (i[0] = ({ legend: t }) => Oe(t.id))
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              onClick: (s2) => t.segregate(),
              style: normalizeStyle(`opacity:${x2.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name), 13, $l)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(l.$slots, "legend", {
          key: 1,
          legend: V.value
        }, void 0, true)
      ], 512),
      l.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: be,
        dir: "auto"
      }, [
        renderSlot(l.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: I.value.showTooltip && ue.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: H.value,
        content: re2.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(l.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ne.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(l.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ne.value })), void 0, true)
        ]),
        default: withCtx(() => [
          e.value.style.tooltip.showShape ? (openBlock(), createElementBlock("div", Cl, [
            (openBlock(), createElementBlock("svg", zl, [
              createVNode($, {
                shape: y.value.shape,
                color: y.value.color,
                plot: { x: 10, y: 10 },
                radius: 7
              }, null, 8, ["shape", "color"])
            ]))
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      ee.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: I.value.showTable,
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
            key: `table_${we.value}`,
            colNames: ae2.value.colNames,
            head: ae2.value.head,
            body: ae2.value.body,
            config: ae2.value.config,
            title: `${e.value.style.title.text}${e.value.style.title.subtitle.text ? ` : ${e.value.style.title.subtitle.text}` : ""}`,
            onClose: i[1] || (i[1] = (t) => I.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createTextVNode(toDisplayString(t), 1)
            ]),
            td: withCtx(({ td: t }) => [
              t.shape ? (openBlock(), createElementBlock("div", Al, [
                createBaseVNode("span", null, toDisplayString(t.content), 1)
              ])) : (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: t
              }, null, 8, Sl))
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Nt2));
  }
};
var Rl = s(Ll, [["__scopeId", "data-v-0648a715"]]);
export {
  Rl as default
};
//# sourceMappingURL=vue-ui-scatter-4LbMvEAD-YKJSOWLT.js.map
