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
  Ft,
  Ge,
  Gt,
  Ht,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  R as R2,
  St,
  Xt,
  cr,
  et,
  k,
  nr,
  oe,
  or,
  qt,
  vt
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-scatter-CVuoW-cD.js
var Ct = ["id"];
var zt = ["xmlns", "viewBox"];
var St2 = { key: 0 };
var At = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Lt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Tt = { key: 1 };
var Bt = ["points", "fill", "stroke-width", "stroke-dasharray", "stroke"];
var Nt2 = { key: 0 };
var Pt = ["cx", "cy", "r", "fill", "stroke", "stroke-width", "onMouseover"];
var Wt = { key: 1 };
var Ft2 = { key: 2 };
var Ot2 = ["id"];
var Xt2 = ["stop-color"];
var It = ["stop-color"];
var Dt = ["id"];
var Yt = ["stop-color"];
var jt = ["stop-color"];
var Vt = ["x", "y", "width", "height", "fill", "stroke", "stroke-width", "rx"];
var Et = ["x", "y", "height", "width", "fill", "stroke", "stroke-width", "rx"];
var Gt2 = { key: 0 };
var Rt = ["d", "stroke", "stroke-width"];
var qt2 = ["d", "stroke", "stroke-width"];
var Ut = ["d", "stroke", "stroke-width"];
var Ht2 = ["d", "stroke", "stroke-width"];
var Jt = {
  key: 3,
  style: { "pointer-events": "none !important" }
};
var Kt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var Qt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width", "stroke-dasharray"];
var Zt = ["x", "y", "font-size", "fill", "font-weight", "text-anchor"];
var el = ["x", "y", "font-size", "fill", "font-weight"];
var tl = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var ll = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var al = ["x", "y", "font-size", "fill", "font-weight", "text-anchor"];
var ol = { key: 4 };
var sl = ["x", "y", "font-size", "fill"];
var ul = ["x", "y", "font-size", "fill"];
var rl = ["id", "transform", "font-size", "font-weight", "fill"];
var il = { key: 5 };
var nl = ["x", "y", "font-size", "fill"];
var yl = ["x", "y", "font-size", "fill"];
var vl = ["font-size", "font-weight", "fill", "x", "y"];
var cl = ["id"];
var dl = ["x", "y", "width", "height"];
var hl = { key: 6 };
var pl = ["x1", "x2", "y1", "y2", "stroke-dasharray", "stroke", "stroke-width", "clip-path"];
var fl = ["x", "y", "fill", "font-size", "font-weight"];
var gl = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var xl = ["onClick"];
var ml = {
  key: 0,
  style: { width: "100%", display: "flex", "align-items": "center", "justify-content": "center" }
};
var bl = {
  viewBox: "0 0 20 20",
  height: "20",
  width: "20",
  style: { overflow: "hidden", background: "transparent" }
};
var kl = { key: 0 };
var _l = ["innerHTML"];
var wl = {
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
  setup(De, { expose: Ye }) {
    const F = De, { vue_ui_scatter: je } = oe(), Q = computed(() => !!F.dataset && F.dataset.length), C2 = ref(Lt()), Ve = ref(null), se2 = ref(false), ue = ref(""), pe = ref(0), J = ref(null), fe = ref(null), ge = ref(null), xe = ref(0), me = ref(0), be = ref(0), e = computed({
      get: () => ke(),
      set: (l) => l
    });
    function ke() {
      const l = c({
        userConfig: F.config,
        defaultConfig: je
      });
      return l.theme ? {
        ...c({
          userConfig: Ge.vue_ui_scatter[l.theme] || F.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || et
      } : l;
    }
    watch(() => F.config, (l) => {
      e.value = ke(), _e(), xe.value += 1, me.value += 1, be.value += 1;
    }, { deep: true });
    const Z = ref(null);
    onMounted(() => {
      _e();
    });
    function _e() {
      if (Xt(F.dataset) && Kt({
        componentName: "VueUiScatter",
        type: "dataset"
      }), e.value.responsive) {
        const l = O(() => {
          const { width: i, height: t } = M({
            chart: J.value,
            title: e.value.style.title.text ? fe.value : null,
            legend: e.value.style.legend.show ? ge.value : null
          });
          z.value.width = i, z.value.height = t;
        });
        Z.value = new ResizeObserver(l), Z.value.observe(J.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      Z.value && Z.value.disconnect();
    });
    const { isPrinting: we, isImaging: Me, generatePdf: $e, generateImage: Ce } = se({
      elementId: `vue-ui-scatter_${C2.value}`,
      fileName: e.value.style.title.text || "vue-ui-scatter"
    }), ze = computed(() => or(e.value.customPalette)), I = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), z = ref({
      height: e.value.style.layout.height,
      width: e.value.style.layout.width
    }), ee = computed(() => e.value.style.layout.marginalBars.show ? e.value.style.layout.marginalBars.size + e.value.style.layout.marginalBars.offset : 0), u = computed(() => ({
      top: e.value.style.layout.padding.top + ee.value,
      right: z.value.width - e.value.style.layout.padding.right - ee.value,
      bottom: z.value.height - e.value.style.layout.padding.bottom,
      left: e.value.style.layout.padding.left,
      height: z.value.height - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom - ee.value,
      width: z.value.width - e.value.style.layout.padding.left - e.value.style.layout.padding.right - ee.value
    })), h = computed(() => {
      F.dataset.forEach((a, n) => {
        qt({
          datasetObject: a,
          requiredAttributes: ["values"]
        }).forEach((m) => {
          Kt({
            componentName: "VueUiScatter",
            type: "datasetSerieAttribute",
            property: m,
            index: n
          });
        }), a.values && a.values.forEach((m, V) => {
          qt({
            datasetObject: m,
            requiredAttributes: ["x", "y"]
          }).forEach((H) => {
            Kt({
              componentName: "VueUiScatter",
              type: "datasetSerieAttribute",
              property: `values.${H}`,
              index: `${n} - ${V}`
            });
          });
        });
      });
      const l = Math.min(...j.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.x))), i = Math.max(...j.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.x))), t = Math.min(...j.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.y))), s2 = Math.max(...j.value.filter((a) => !x2.value.includes(a.id)).flatMap((a) => a.values.map((n) => n.y)));
      return { xMin: l >= 0 ? 0 : l, xMax: i, yMin: t >= 0 ? 0 : t, yMax: s2 };
    }), p2 = computed(() => ({
      x: u.value.left + Math.abs(h.value.xMin) / (h.value.xMax + Math.abs(h.value.xMin)) * u.value.width,
      y: u.value.bottom - Math.abs(h.value.yMin) / (h.value.yMax + Math.abs(h.value.yMin)) * u.value.height
    })), j = computed(() => F.dataset.map((l, i) => {
      const t = `cluster_${C2.value}_${i}`;
      return {
        ...l,
        id: t,
        color: l.color ? l.color : ze.value[i] || et[i] || et[i % et.length],
        opacity: x2.value.includes(t) ? 0.5 : 1,
        shape: l.shape ?? "circle",
        segregate: () => Be(t),
        isSegregated: x2.value.includes(t)
      };
    })), Ee = computed(() => ({
      cy: "scatter-div-legend",
      backgroundColor: e.value.style.legend.backgroundColor,
      color: e.value.style.legend.color,
      fontSize: e.value.style.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.legend.bold ? "bold" : ""
    })), re = computed(() => j.value.map((l, i) => ({
      ...l,
      plots: l.values.map((t) => ({
        x: u.value.left + (t.x + Math.abs(h.value.xMin)) / (h.value.xMax + Math.abs(h.value.xMin)) * u.value.width,
        y: u.value.bottom - (t.y + Math.abs(h.value.yMin)) / (h.value.yMax + Math.abs(h.value.yMin)) * u.value.height,
        v: {
          ...t,
          name: t.name || ""
        },
        clusterName: l.name,
        color: l.color ? l.color : ze.value[i] || et[i] || et[i % et.length],
        id: `plot_${C2.value}_${Math.random()}`,
        weight: t.weight ?? e.value.style.layout.plots.radius
      }))
    })).filter((l) => !x2.value.includes(l.id))), S = computed(() => re.value.map((l) => {
      const i = l.plots.reduce((f, E2) => f + E2.x, 0) / l.plots.length, t = l.plots.reduce((f, E2) => f + E2.y, 0) / l.plots.length;
      let s2 = 0, a = 0, n = 0;
      for (const f of l.plots)
        s2 += (f.x - i) * (f.y - t), a += (f.x - i) ** 2, n += (f.y - t) ** 2;
      const m = s2 / Math.sqrt(a * n), V = m * (Math.sqrt(n) / Math.sqrt(a)), H = t - V * i, N = {
        x1: u.value.left,
        x2: u.value.right,
        y1: V * u.value.left + H,
        y2: V * u.value.right + H,
        coefficient: m
      }, _ = (N.y2 - N.y1) / (N.x2 - N.x1), L = N.y1 - _ * N.x1, O2 = Math.min(z.value.width - e.value.style.layout.padding.right, Math.max(e.value.style.layout.padding.left, (u.value.top - L) / _)), le = {
        x: O2,
        y: _ * O2 + L <= e.value.style.layout.padding.top ? u.value.top : _ * O2 + L
      };
      return {
        ...l,
        correlation: N,
        label: le,
        plots: l.plots.map((f) => {
          const E2 = (f.x + _ * f.y - _ * L) / (1 + Math.pow(_, 2)), ne = (_ * f.x + Math.pow(_, 2) * f.y + L) / (1 + Math.pow(_, 2)), b = Math.sqrt(Math.pow(f.x - E2, 2) + Math.pow(f.y - ne, 2));
          return {
            ...f,
            deviation: b,
            shape: l.shape,
            color: l.color
          };
        })
      };
    })), Se = computed(() => Math.max(...S.value.flatMap((l) => l.plots.map((i) => Math.abs(i.deviation)))));
    function Ge2() {
      return S.value;
    }
    function Ae(l, i) {
      const t = Array.isArray(l) ? l.flatMap((b) => b.plots.map((G) => ({
        x: G.x,
        y: G.y
      }))) : l.plots.map((b) => ({
        x: b.x,
        y: b.y
      }));
      let s2 = 1 / 0, a = -1 / 0, n = 1 / 0, m = -1 / 0;
      t.forEach(({ x: b, y: G }) => {
        s2 = Math.min(s2, b), a = Math.max(a, b), n = Math.min(n, G), m = Math.max(m, G);
      });
      const V = a - s2, H = m - n, N = V / i, _ = H / i, L = Array(i).fill(0), O2 = Array(i).fill(0);
      t.forEach(({ x: b, y: G }) => {
        const ye = Math.floor((b - s2) / N), ve = Math.floor((G - n) / _);
        L[ye] || (L[ye] = 0), O2[ve] || (O2[ve] = 0), L[ye] += 1, O2[ve] += 1;
      });
      const le = [], f = [];
      for (let b = 0; b < i; b += 1)
        le.push(s2 + (b + 0.5) * N), f.push(n + (b + 0.5) * _);
      const E2 = Math.max(...L), ne = Math.max(...O2);
      return { x: L, y: O2, avgX: le, avgY: f, maxX: E2, maxY: ne };
    }
    const D = computed(() => e.value.style.layout.marginalBars.tranches), A = computed(() => Ae(re.value, D.value)), Re = computed(() => {
      const l = u.value.top - e.value.style.layout.marginalBars.offset, i = u.value.right + e.value.style.layout.marginalBars.offset;
      return re.value.map((t) => {
        const s2 = Ae(t, D.value);
        return {
          coords: s2,
          dX: vt(s2.avgX.map((a, n) => ({
            x: a,
            y: l - s2.x[n] / s2.maxX * e.value.style.layout.marginalBars.size
          }))),
          dY: St(s2.avgY.map((a, n) => ({
            y: a,
            x: i + e.value.style.layout.marginalBars.size * s2.y[n] / s2.maxY
          }))),
          color: t.color,
          id: t.id
        };
      });
    }), B = ref(void 0), v = ref(null), ie2 = ref(null);
    function Le(l, i) {
      B.value = l.id, v.value = l;
      let t = "";
      ie2.value = {
        datapoint: l,
        seriesIndex: i,
        series: S.value,
        config: e.value
      };
      const s2 = e.value.style.tooltip.customFormat;
      Ht(s2) && $t(() => s2({
        datapoint: l,
        seriesIndex: i,
        series: S.value,
        config: e.value
      })) ? ue.value = s2({
        datapoint: l,
        seriesIndex: i,
        series: S.value,
        config: e.value
      }) : (l.clusterName && (t += `<div style="display:flex;gap:3px;align-items:center">${l.clusterName}</div>`), l.v.name && (t += `<div>${l.v.name}</div>`), t += `<div style="text-align:left;margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}">`, t += `<div>${e.value.style.layout.dataLabels.xAxis.name}: <b>${isNaN(l.v.x) ? "-" : nr(
        e.value.style.layout.plots.selectors.labels.x.formatter,
        l.v.x,
        Gt({
          p: e.value.style.tooltip.prefix,
          v: l.v.x,
          s: e.value.style.tooltip.suffix,
          r: e.value.style.tooltip.roundingValue
        }),
        { datapoint: l, seriesIndex: i }
      )}</b></div>`, t += `<div>${e.value.style.layout.dataLabels.yAxis.name}: <b>${isNaN(l.v.y) ? "-" : nr(
        e.value.style.layout.plots.selectors.labels.y.formatter,
        l.v.y,
        Gt({
          p: e.value.style.tooltip.prefix,
          v: l.v.y,
          s: e.value.style.tooltip.suffix,
          r: e.value.style.tooltip.roundingValue
        }),
        { datapoint: l, seriesIndex: i }
      )}</b></div>`, t += `${e.value.style.layout.plots.deviation.translation}: <b>${Gt({
        v: l.deviation,
        r: e.value.style.layout.plots.deviation.roundingValue
      })}</b>`, t += "</div>", ue.value = `<div>${t}</div>`), se2.value = true;
    }
    function Te() {
      se2.value = false, B.value = void 0, v.value = null;
    }
    const x2 = ref([]);
    function Be(l) {
      x2.value.includes(l) ? x2.value = x2.value.filter((i) => i !== l) : x2.value.length < F.dataset.length - 1 && x2.value.push(l);
    }
    function Ne() {
      nextTick(() => {
        const l = ["", e.value.table.translations.correlationCoefficient, e.value.table.translations.nbrPlots, `${e.value.style.layout.dataLabels.xAxis.name} ${e.value.table.translations.average}`, `${e.value.style.layout.dataLabels.yAxis.name} ${e.value.table.translations.average}`], i = S.value.map((a) => [
          a.name,
          a.correlation.coefficient,
          a.plots.length,
          a.plots.map((n) => n.v.x).reduce((n, m) => n + m, 0) / a.plots.length,
          a.plots.map((n) => n.v.y).reduce((n, m) => n + m, 0) / a.plots.length
        ]), t = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([l]).concat(i), s2 = Nt(t);
        Ot({ csvContent: s2, title: e.value.style.title.text || "vue-ui-heatmap" });
      });
    }
    const te = computed(() => {
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
    function qe(l) {
      K.value = l, pe.value += 1;
    }
    function Pe() {
      I.value.showTable = !I.value.showTable;
    }
    function We() {
      I.value.showTooltip = !I.value.showTooltip;
    }
    return Ye({
      getData: Ge2,
      generatePdf: $e,
      generateCsv: Ne,
      generateImage: Ce,
      toggleTable: Pe,
      toggleTooltip: We
    }), (l, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-scatter ${K.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "scatterChart",
      ref: J,
      id: `vue-ui-scatter_${C2.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.title.text ? "" : "padding-top:36px"};background:${e.value.style.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: fe,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${xe.value}`,
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
      e.value.userOptions.show && Q.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: Ve,
        key: `user_options_${pe.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(Me),
        isPrinting: unref(we),
        uid: C2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: I.value.showTooltip,
        isFullscreen: K.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: J.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: qe,
        onGeneratePdf: unref($e),
        onGenerateCsv: Ne,
        onGenerateImage: unref(Ce),
        onToggleTable: Pe,
        onToggleTooltip: We
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      Q.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": K.value, "vue-data-ui-fulscreen--off": !K.value }),
        viewBox: `0 0 ${z.value.width <= 0 ? 10 : z.value.width} ${z.value.height <= 0 ? 10 : z.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        e.value.style.layout.axis.show ? (openBlock(), createElementBlock("g", St2, [
          createBaseVNode("line", {
            x1: p2.value.x,
            x2: p2.value.x,
            y1: u.value.top,
            y2: u.value.bottom,
            stroke: e.value.style.layout.axis.stroke,
            "stroke-width": e.value.style.layout.axis.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, At),
          createBaseVNode("line", {
            x1: u.value.left,
            x2: u.value.right,
            y1: p2.value.y,
            y2: p2.value.y,
            stroke: e.value.style.layout.axis.stroke,
            "stroke-width": e.value.style.layout.axis.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Lt2)
        ])) : createCommentVNode("", true),
        e.value.style.layout.plots.giftWrap.show ? (openBlock(), createElementBlock("g", Tt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
            t.plots.length > 2 ? (openBlock(), createElementBlock("polygon", {
              key: 0,
              points: unref(Ft)({ series: t.plots }),
              fill: unref(cr)(t.color, e.value.style.layout.plots.giftWrap.fillOpacity * 100),
              "stroke-width": e.value.style.layout.plots.giftWrap.strokeWidth,
              "stroke-dasharray": e.value.style.layout.plots.giftWrap.strokeDasharray,
              stroke: t.color,
              "stroke-linejoin": "round",
              "stroke-linecap": "round"
            }, null, 8, Bt)) : createCommentVNode("", true)
          ]))), 256))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
          !t.shape || t.shape === "circle" ? (openBlock(), createElementBlock("g", Nt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.plots, (a, n) => (openBlock(), createElementBlock("circle", {
              cx: a.x,
              cy: a.y,
              r: B.value && B.value === a.id ? a.weight * 2 : a.weight,
              fill: unref(cr)(t.color, e.value.style.layout.plots.opacity * 100),
              stroke: e.value.style.layout.plots.stroke,
              "stroke-width": e.value.style.layout.plots.strokeWidth,
              onMouseover: (m) => Le(a, s2),
              onMouseleave: Te,
              style: normalizeStyle(`opacity:${B.value && B.value === a.id ? 1 : e.value.style.layout.plots.significance.useDistanceOpacity ? 1 - Math.abs(a.deviation) / Se.value : e.value.style.layout.plots.significance.show && Math.abs(a.deviation) > e.value.style.layout.plots.significance.deviationThreshold ? e.value.style.layout.plots.significance.opacity : 1}`)
            }, null, 44, Pt))), 256))
          ])) : (openBlock(), createElementBlock("g", Wt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.plots, (a, n) => (openBlock(), createBlock($, {
              plot: { x: a.x, y: a.y },
              radius: B.value && B.value === a.id ? a.weight * 2 : a.weight,
              shape: t.shape,
              color: unref(cr)(t.color, e.value.style.layout.plots.opacity * 100),
              stroke: e.value.style.layout.plots.stroke,
              strokeWidth: e.value.style.layout.plots.strokeWidth,
              onMouseover: (m) => Le(a, s2),
              onMouseleave: Te,
              style: normalizeStyle(`opacity:${B.value && B.value === a.id ? 1 : e.value.style.layout.plots.significance.useDistanceOpacity ? 1 - Math.abs(a.deviation) / Se.value : e.value.style.layout.plots.significance.show && Math.abs(a.deviation) > e.value.style.layout.plots.significance.deviationThreshold ? e.value.style.layout.plots.significance.opacity : 1}`)
            }, null, 8, ["plot", "radius", "shape", "color", "stroke", "strokeWidth", "onMouseover", "style"]))), 256))
          ]))
        ]))), 256)),
        e.value.style.layout.marginalBars.show ? (openBlock(), createElementBlock("g", Ft2, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `marginal_x_${C2.value}`,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.marginalBars.fill
              }, null, 8, Xt2),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.backgroundColor
              }, null, 8, It)
            ], 8, Ot2),
            createBaseVNode("linearGradient", {
              id: `marginal_y_${C2.value}`,
              x1: "0%",
              x2: "100%",
              y1: "0%",
              y2: "0%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.backgroundColor
              }, null, 8, Yt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.layout.marginalBars.fill
              }, null, 8, jt)
            ], 8, Dt)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.x, (t, s2) => (openBlock(), createElementBlock("g", null, [
            t && A.value.avgX[s2] ? (openBlock(), createElementBlock("rect", {
              key: 0,
              x: A.value.avgX[s2] - u.value.width / D.value / 2,
              y: u.value.top - e.value.style.layout.marginalBars.offset - t / A.value.maxX * e.value.style.layout.marginalBars.size,
              width: u.value.width / D.value <= 0 ? 1e-4 : u.value.width / D.value,
              height: t / A.value.maxX * e.value.style.layout.marginalBars.size <= 0 ? 1e-4 : t / A.value.maxX * e.value.style.layout.marginalBars.size,
              fill: e.value.style.layout.marginalBars.useGradient ? `url(#marginal_x_${C2.value})` : e.value.style.layout.marginalBars.fill,
              style: normalizeStyle(`opacity:${e.value.style.layout.marginalBars.opacity}`),
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.marginalBars.strokeWidth,
              rx: e.value.style.layout.marginalBars.borderRadius
            }, null, 12, Vt)) : createCommentVNode("", true)
          ]))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.y, (t, s2) => (openBlock(), createElementBlock("g", null, [
            t && A.value.avgY[s2] ? (openBlock(), createElementBlock("rect", {
              key: 0,
              x: u.value.right + e.value.style.layout.marginalBars.offset,
              y: A.value.avgY[s2] - u.value.height / D.value / 2,
              height: u.value.height / D.value <= 0 ? 1e-4 : u.value.height / D.value,
              width: t / A.value.maxY * e.value.style.layout.marginalBars.size <= 0 ? 1e-4 : t / A.value.maxY * e.value.style.layout.marginalBars.size,
              fill: e.value.style.layout.marginalBars.useGradient ? `url(#marginal_y_${C2.value})` : e.value.style.layout.marginalBars.fill,
              style: normalizeStyle(`opacity:${e.value.style.layout.marginalBars.opacity}`),
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.marginalBars.strokeWidth,
              rx: e.value.style.layout.marginalBars.borderRadius
            }, null, 12, Et)) : createCommentVNode("", true)
          ]))), 256)),
          e.value.style.layout.marginalBars.showLines ? (openBlock(), createElementBlock("g", Gt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Re.value, (t) => (openBlock(), createElementBlock(Fragment, null, [
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 0,
                d: `M ${t.dX}`,
                stroke: e.value.style.backgroundColor,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth + 1,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, Rt)),
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 1,
                d: `M ${t.dX}`,
                stroke: t.color,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, qt2)),
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 2,
                d: `M ${t.dY}`,
                stroke: e.value.style.backgroundColor,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth + 1,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, Ut)),
              x2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("path", {
                key: 3,
                d: `M ${t.dY}`,
                stroke: t.color,
                "stroke-width": e.value.style.layout.marginalBars.linesStrokeWidth,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none"
              }, null, 8, Ht2))
            ], 64))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        v.value && e.value.style.layout.plots.selectors.show ? (openBlock(), createElementBlock("g", Jt, [
          createBaseVNode("line", {
            x1: p2.value.x,
            x2: v.value.x,
            y1: v.value.y,
            y2: v.value.y,
            stroke: e.value.style.layout.plots.selectors.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.strokeWidth,
            "stroke-dasharray": e.value.style.layout.plots.selectors.strokeDasharray,
            "stroke-linecap": "round",
            class: "line-pointer"
          }, null, 8, Kt2),
          createBaseVNode("line", {
            x1: v.value.x,
            x2: v.value.x,
            y1: p2.value.y,
            y2: v.value.y,
            stroke: e.value.style.layout.plots.selectors.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.strokeWidth,
            "stroke-dasharray": e.value.style.layout.plots.selectors.strokeDasharray,
            "stroke-linecap": "round",
            class: "line-pointer"
          }, null, 8, Qt2),
          createBaseVNode("text", {
            x: p2.value.x + (v.value.x > p2.value.x ? -6 : 6),
            y: v.value.y + e.value.style.layout.plots.selectors.labels.fontSize / 3,
            "font-size": e.value.style.layout.plots.selectors.labels.fontSize,
            fill: e.value.style.layout.plots.selectors.labels.color,
            "font-weight": e.value.style.layout.plots.selectors.labels.bold ? "bold" : "normal",
            "text-anchor": v.value.x > p2.value.x ? "end" : "start"
          }, toDisplayString(unref(nr)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k)(v.value.v.y),
            unref(Gt)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k)(v.value.v.y),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.plots.selectors.labels.rounding
            }),
            { datapoint: v.value }
          )), 9, Zt),
          createBaseVNode("text", {
            x: v.value.x,
            y: p2.value.y + (v.value.y > p2.value.y ? -6 : e.value.style.layout.plots.selectors.labels.fontSize + 6),
            "font-size": e.value.style.layout.plots.selectors.labels.fontSize,
            fill: e.value.style.layout.plots.selectors.labels.color,
            "font-weight": e.value.style.layout.plots.selectors.labels.bold ? "bold" : "normal",
            "text-anchor": "middle"
          }, toDisplayString(unref(nr)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k)(v.value.v.x),
            unref(Gt)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k)(v.value.v.x),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.plots.selectors.labels.rounding
            }),
            { datapoint: v.value }
          )), 9, el),
          createBaseVNode("circle", {
            cx: p2.value.x,
            cy: v.value.y,
            r: e.value.style.layout.plots.selectors.markers.radius,
            fill: e.value.style.layout.plots.selectors.markers.fill,
            stroke: e.value.style.layout.plots.selectors.markers.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.markers.strokeWidth,
            class: "line-pointer"
          }, null, 8, tl),
          createBaseVNode("circle", {
            cx: v.value.x,
            cy: p2.value.y,
            r: e.value.style.layout.plots.selectors.markers.radius,
            fill: e.value.style.layout.plots.selectors.markers.fill,
            stroke: e.value.style.layout.plots.selectors.markers.stroke,
            "stroke-width": e.value.style.layout.plots.selectors.markers.strokeWidth,
            class: "line-pointer"
          }, null, 8, ll),
          e.value.style.layout.plots.selectors.labels.showName ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: v.value.x,
            y: v.value.y + (v.value.y < p2.value.y ? -e.value.style.layout.plots.selectors.labels.fontSize / 2 : e.value.style.layout.plots.selectors.labels.fontSize),
            "font-size": e.value.style.layout.plots.selectors.labels.fontSize,
            fill: e.value.style.layout.plots.selectors.labels.color,
            "font-weight": e.value.style.layout.plots.selectors.labels.bold ? "bold" : "normal",
            "text-anchor": v.value.x < u.value.left + 100 ? "start" : v.value.x > u.value.right - 100 ? "end" : v.value.x > p2.value.x ? "start" : "end"
          }, toDisplayString(v.value.v.name), 9, al)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.layout.dataLabels.xAxis.show ? (openBlock(), createElementBlock("g", ol, [
          createBaseVNode("text", {
            x: u.value.left - 5,
            y: p2.value.y + e.value.style.layout.dataLabels.xAxis.fontSize / 3,
            "text-anchor": "end",
            "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
            fill: e.value.style.layout.dataLabels.xAxis.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.plots.selectors.labels.x.formatter,
            unref(k)(h.value.xMin),
            unref(Gt)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k)(h.value.xMin),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.xAxis.rounding
            })
          )), 9, sl),
          createBaseVNode("text", {
            x: u.value.right + 3,
            y: p2.value.y + e.value.style.layout.dataLabels.xAxis.fontSize / 3,
            "text-anchor": "start",
            "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
            fill: e.value.style.layout.dataLabels.xAxis.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.plots.selectors.labels.x.formatter,
            unref(k)(h.value.xMax),
            unref(Gt)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k)(h.value.xMax),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.xAxis.rounding
            })
          )), 9, ul),
          createBaseVNode("text", {
            id: `vue-ui-scatter-xAxis-label-${C2.value}`,
            transform: `translate(${e.value.style.layout.dataLabels.xAxis.fontSize * 2}, ${u.value.top + u.value.height / 2}), rotate(-90)`,
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
            "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal",
            fill: e.value.style.layout.dataLabels.xAxis.color
          }, toDisplayString(e.value.style.layout.dataLabels.xAxis.name), 9, rl)
        ])) : createCommentVNode("", true),
        e.value.style.layout.dataLabels.yAxis.show ? (openBlock(), createElementBlock("g", il, [
          createBaseVNode("text", {
            x: p2.value.x,
            y: u.value.bottom + e.value.style.layout.dataLabels.yAxis.fontSize + 3,
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
            fill: e.value.style.layout.dataLabels.yAxis.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k)(h.value.yMin),
            unref(Gt)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k)(h.value.yMin),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.yAxis.rounding
            })
          )), 9, nl),
          createBaseVNode("text", {
            x: p2.value.x,
            y: u.value.top - e.value.style.layout.dataLabels.yAxis.fontSize / 2,
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
            fill: e.value.style.layout.dataLabels.yAxis.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.plots.selectors.labels.y.formatter,
            unref(k)(h.value.yMax),
            unref(Gt)({
              p: e.value.style.layout.plots.selectors.labels.prefix,
              v: unref(k)(h.value.yMax),
              s: e.value.style.layout.plots.selectors.labels.suffix,
              r: e.value.style.layout.dataLabels.yAxis.rounding
            })
          )), 9, yl),
          createBaseVNode("text", {
            "text-anchor": "middle",
            "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
            "font-weight": e.value.style.layout.dataLabels.yAxis.bold ? "bold" : "normal",
            fill: e.value.style.layout.dataLabels.yAxis.color,
            x: u.value.left + u.value.width / 2,
            y: u.value.bottom + 8 + e.value.style.layout.dataLabels.yAxis.fontSize * 2
          }, toDisplayString(e.value.style.layout.dataLabels.yAxis.name), 9, vl)
        ])) : createCommentVNode("", true),
        createBaseVNode("clipPath", {
          id: `clip_path_${C2.value}`
        }, [
          createBaseVNode("rect", {
            x: u.value.left,
            y: u.value.top,
            width: u.value.width <= 0 ? 1e-4 : u.value.width,
            height: u.value.height <= 0 ? 1e-4 : u.value.height
          }, null, 8, dl)
        ], 8, cl),
        e.value.style.layout.correlation.show ? (openBlock(), createElementBlock("g", hl, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("line", {
            x1: t.correlation.x1,
            x2: t.correlation.x2,
            y1: t.correlation.y1,
            y2: t.correlation.y2,
            "stroke-dasharray": e.value.style.layout.correlation.strokeDasharray,
            stroke: t.color,
            "stroke-width": e.value.style.layout.correlation.strokeWidth,
            "clip-path": `url(#clip_path_${C2.value})`
          }, null, 8, pl))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (t, s2) => (openBlock(), createElementBlock("g", null, [
            e.value.style.layout.correlation.label.show ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: t.label.x,
              y: t.label.y,
              fill: e.value.style.layout.correlation.label.useSerieColor ? t.color : e.value.style.layout.correlation.label.color,
              "font-size": e.value.style.layout.correlation.label.fontSize,
              "font-weight": e.value.style.layout.correlation.label.bold ? "bold" : "normal"
            }, toDisplayString(unref(Gt)({
              v: unref(k)(t.correlation.coefficient),
              r: e.value.style.layout.correlation.label.roundingValue
            })), 9, fl)) : createCommentVNode("", true)
          ]))), 256))
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "svg", { svg: z.value }, void 0, true)
      ], 14, zt)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", gl, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(we) || unref(Me) })), void 0, true)
      ])) : createCommentVNode("", true),
      Q.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        ref: ge
      }, [
        e.value.style.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${be.value}`,
          legendSet: j.value,
          config: Ee.value,
          onClickMarker: i[0] || (i[0] = ({ legend: t }) => Be(t.id))
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              onClick: (s2) => t.segregate(),
              style: normalizeStyle(`opacity:${x2.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name), 13, xl)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(l.$slots, "legend", {
          key: 1,
          legend: j.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: I.value.showTooltip && se2.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: J.value,
        content: ue.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(l.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ie2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(l.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ie2.value })), void 0, true)
        ]),
        default: withCtx(() => [
          e.value.style.tooltip.showShape ? (openBlock(), createElementBlock("div", ml, [
            (openBlock(), createElementBlock("svg", bl, [
              createVNode($, {
                shape: v.value.shape,
                color: v.value.color,
                plot: { x: 10, y: 10 },
                radius: 7
              }, null, 8, ["shape", "color"])
            ]))
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      Q.value ? (openBlock(), createBlock(R, {
        key: 5,
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
            key: `table_${me.value}`,
            colNames: te.value.colNames,
            head: te.value.head,
            body: te.value.body,
            config: te.value.config,
            title: `${e.value.style.title.text}${e.value.style.title.subtitle.text ? ` : ${e.value.style.title.subtitle.text}` : ""}`,
            onClose: i[1] || (i[1] = (t) => I.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createTextVNode(toDisplayString(t), 1)
            ]),
            td: withCtx(({ td: t }) => [
              t.shape ? (openBlock(), createElementBlock("div", kl, [
                createBaseVNode("span", null, toDisplayString(t.content), 1)
              ])) : (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: t
              }, null, 8, _l))
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Ct));
  }
};
var Xl = s(wl, [["__scopeId", "data-v-a6514d5f"]]);
export {
  Xl as default
};
//# sourceMappingURL=vue-ui-scatter-CVuoW-cD-NWFEGZQO.js.map
