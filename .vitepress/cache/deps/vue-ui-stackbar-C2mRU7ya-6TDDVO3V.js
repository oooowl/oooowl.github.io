import {
  Ue
} from "./chunk-VDRRPMYI.js";
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
  Gt,
  He,
  Ht,
  It,
  Jt,
  Kt,
  Nt,
  Q,
  R as R2,
  Ut,
  Vt,
  Xt,
  Zt,
  _t,
  cr,
  ir,
  jt,
  qt,
  rt,
  sr,
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
  normalizeClass,
  normalizeProps,
  normalizeStyle,
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

// node_modules/vue-data-ui/dist/vue-ui-stackbar-C2mRU7ya.js
var Jt2 = ["id"];
var qt2 = ["xmlns", "viewBox"];
var Zt2 = { key: 0 };
var Kt2 = ["id"];
var Qt = ["stop-color"];
var jt2 = ["stop-color"];
var ea = ["stop-color"];
var ta = ["x1", "x2", "y1", "y2", "stroke"];
var aa = ["x1", "x2", "y1", "y2", "stroke"];
var la = ["x1", "x2", "y1", "y2", "stroke"];
var oa = ["x1", "x2", "y1", "y2", "stroke"];
var ra = ["x", "y", "height", "rx", "width", "fill", "stroke", "stroke-width"];
var sa = ["x", "y", "width", "rx", "height", "fill", "stroke", "stroke-width"];
var ia = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var na = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ua = ["x", "y", "font-size", "fill", "font-weight"];
var ca = ["transform", "font-size", "fill", "font-weight"];
var va = ["x", "y", "font-size", "fill", "font-weight"];
var ha = { key: 0 };
var da = ["x", "y", "font-size", "font-weight", "fill"];
var ya = ["x", "y", "font-size", "fill", "font-weight"];
var ga = { key: 0 };
var ba = ["x", "y", "font-size", "font-weight", "fill"];
var fa = ["x1", "x2", "y1", "y2", "stroke"];
var ma = ["x", "y", "font-size", "font-weight", "fill"];
var pa = ["x1", "x2", "y1", "y2", "stroke"];
var xa = ["font-size", "font-weight", "fill", "text-anchor", "transform"];
var ka = ["text-anchor", "font-size", "font-weight", "fill", "transform"];
var wa = ["font-size", "font-weight", "fill", "x", "y"];
var Ca = ["x", "y", "width", "height", "onClick", "onMouseenter", "fill"];
var _a = ["x", "y", "width", "height", "onClick", "onMouseenter", "fill"];
var za = {
  key: 4,
  class: "vue-data-ui-watermark"
};
var La = ["onClick"];
var Sa = ["innerHTML"];
var $a = {
  __name: "vue-ui-stackbar",
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
  emits: ["selectDatapoint", "selectLegend"],
  setup(ge, { expose: tt, emit: be }) {
    const x2 = ge, { vue_ui_stackbar: at } = te(), W2 = computed({
      get() {
        return !!x2.dataset && x2.dataset.length;
      },
      set(a) {
        return a;
      }
    }), X = ref(null), ue = ref(Dt()), j = ref(false), fe = ref(null), ce = ref(""), L = ref([]), me = ref(0), pe = ref(null), xe = ref(null), ke = ref(null), we = ref(null), Ce = ref(0), ve = ref(false), G = ref(null), J = ref(false), lt = ref(0), ot = ref(0), rt2 = ref(0);
    onMounted(() => {
      he();
    });
    const e = computed({
      get: () => _e(),
      set: (a) => a
    });
    function _e() {
      const a = c({
        userConfig: x2.config,
        defaultConfig: at
      });
      let o = {};
      return a.theme ? o = {
        ...c({
          userConfig: He.vue_ui_stackbar[a.theme] || x2.config,
          defaultConfig: a
        }),
        customPalette: R2[a.theme] || rt
      } : o = a, x2.config && cr(x2.config, "style.chart.grid.scale.scaleMin") ? o.style.chart.grid.scale.scaleMin = x2.config.style.chart.grid.scale.scaleMin : o.style.chart.grid.scale.scaleMin = null, x2.config && cr(x2.config, "style.chart.grid.scale.scaleMax") ? o.style.chart.grid.scale.scaleMax = x2.config.style.chart.grid.scale.scaleMax : o.style.chart.grid.scale.scaleMax = null, o;
    }
    watch(() => x2.config, (a) => {
      e.value = _e(), he(), lt.value += 1, ot.value += 1, rt2.value += 1;
    }, { deep: true }), watch(() => x2.dataset, (a) => {
      Ne();
    }, { deep: true });
    const _ = ref({
      dataLabels: {
        show: e.value.style.chart.bars.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), { isPrinting: ze, isImaging: Le, generatePdf: Se2, generateImage: $e } = re({
      elementId: `stackbar_${ue.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-stackbar"
    }), ee = ref({
      width: e.value.style.chart.width,
      height: e.value.style.chart.height,
      paddingRatio: {
        top: e.value.style.chart.padding.top / e.value.style.chart.height,
        right: e.value.style.chart.padding.right / e.value.style.chart.width,
        bottom: e.value.style.chart.padding.bottom / e.value.style.chart.height,
        left: e.value.style.chart.padding.left / e.value.style.chart.width
      }
    }), st = computed(() => tr(e.value.customPalette)), Me = ref(null), Te = ref(null);
    onMounted(() => {
      he();
    });
    function he() {
      if (jt(x2.dataset) ? qt({
        componentName: "VueUiStackbar",
        type: "dataset"
      }) : x2.dataset.forEach((a, o) => {
        Zt({
          datasetObject: a,
          requiredAttributes: ["name", "series"]
        }).forEach((t) => {
          W2.value = false, qt({
            componentName: "VueUiStackbar",
            type: "datasetSerieAttribute",
            property: t,
            index: o
          });
        });
      }), setTimeout(() => {
        J.value = true;
      }, 10), e.value.responsive) {
        const a = O(() => {
          J.value = false;
          const { width: o, height: t } = k({
            chart: X.value,
            title: e.value.style.chart.title.text ? pe.value : null,
            legend: e.value.style.chart.legend.show ? xe.value : null,
            slicer: e.value.style.chart.zoom.show && A.value > 1 ? ke.value : null,
            source: we.value
          });
          ee.value.width = o, ee.value.height = t, clearTimeout(Te.value), Te.value = setTimeout(() => {
            J.value = true;
          }, 10);
        });
        Me.value = new ResizeObserver(a), Me.value.observe(X.value.parentNode);
      }
    }
    const r = computed(() => {
      const { height: a, width: o } = ee.value, { right: t } = ee.value.paddingRatio, l = e.value.style.chart.padding.top, i = o - o * t, u = a - e.value.style.chart.padding.bottom, w = e.value.style.chart.padding.left, R3 = o - w - o * t, I = a - l - e.value.style.chart.padding.bottom;
      return {
        chartHeight: a,
        chartWidth: o,
        top: l,
        right: i,
        bottom: u,
        left: w,
        width: R3,
        height: I < 0 ? 0 : I
      };
    }), P = computed(() => x2.dataset.map((a, o) => {
      const t = Q(a.color) || st.value[o] || rt[o] || rt[o % rt.length];
      return {
        ...a,
        // In distributed mode, all values are converted to positive
        series: JSON.parse(JSON.stringify(a.series)).map((l) => e.value.style.chart.bars.distributed ? Math.abs(l) : l),
        // Store signs to manage display of neg values in distributed mode
        signedSeries: a.series.map((l) => l >= 0 ? 1 : -1),
        absoluteIndex: o,
        id: Dt(),
        color: t
      };
    })), A = computed(() => Math.max(...P.value.filter((a) => !L.value.includes(a.id)).map((a) => a.series.length))), c2 = ref({
      start: 0,
      end: Math.max(...x2.dataset.map((a) => a.series.length))
    });
    function Ne() {
      c2.value = {
        start: 0,
        end: Math.max(...x2.dataset.map((a) => a.series.length))
      }, Ce.value += 1;
    }
    const d = computed(() => {
      let a;
      return e.value.orientation === "vertical" ? a = r.value.width / (c2.value.end - c2.value.start) : a = r.value.height / (c2.value.end - c2.value.start), a <= 0 ? 0 : a;
    }), q = computed(() => sr(P.value.filter((a) => !L.value.includes(a.id))).slice(c2.value.start, c2.value.end)), it = computed(() => sr(P.value.filter((a) => !L.value.includes(a.id)).map((a) => ({
      ...a,
      series: a.series.map((o, t) => a.signedSeries[t] === -1 && o >= 0 ? -o : o)
    }))).slice(c2.value.start, c2.value.end)), te2 = computed(() => {
      const a = P.value.filter((o) => !L.value.includes(o.id));
      return {
        positive: sr(a.map((o) => ({
          ...o,
          series: o.series.slice(c2.value.start, c2.value.end).map((t) => t >= 0 ? t : 0)
        }))),
        negative: sr(a.map((o) => ({
          ...o,
          series: o.series.slice(c2.value.start, c2.value.end).map((t) => t < 0 ? t : 0)
        })))
      };
    }), N = computed(() => {
      const a = e.value.style.chart.grid.scale.scaleMax !== null && !e.value.style.chart.bars.distributed ? e.value.style.chart.grid.scale.scaleMax : Math.max(...te2.value.positive), o = Math.min(...te2.value.negative), t = e.value.style.chart.grid.scale.scaleMin !== null && !e.value.style.chart.bars.distributed ? e.value.style.chart.grid.scale.scaleMin : [-1 / 0, 1 / 0, NaN, void 0, null].includes(o) ? 0 : o, l = !e.value.style.chart.bars.distributed && (e.value.style.chart.grid.scale.scaleMax !== null || e.value.style.chart.grid.scale.scaleMin !== null) ? Gt(t > 0 ? 0 : t, a < 0 ? 0 : a, e.value.style.chart.grid.scale.ticks) : Ut(t > 0 ? 0 : t, a < 0 ? 0 : a, e.value.style.chart.grid.scale.ticks);
      return l.ticks.map((i) => ({
        zero: r.value.bottom - r.value.height * (Math.abs(l.min) / (l.max + Math.abs(l.min))),
        y: r.value.bottom - r.value.height * ((i + Math.abs(l.min)) / (l.max + Math.abs(l.min))),
        x: r.value.left - 8,
        horizontal_zero: r.value.left + r.value.width * (Math.abs(l.min) / (l.max + Math.abs(l.min))),
        horizontal_x: r.value.left + r.value.width * ((i + Math.abs(l.min)) / (l.max + Math.abs(l.min))),
        horizontal_y: r.value.bottom - 8,
        value: i
      }));
    }), Z = computed(() => e.value.style.chart.grid.x.timeLabels.values.slice(c2.value.start, c2.value.end)), m = computed(() => {
      if (!W2.value) return [];
      let a = Array(A.value).fill(0), o = Array(A.value).fill(0), t = Array(A.value).fill(0), l = Array(A.value).fill(0);
      const i = Math.max(...te2.value.positive) || 0, u = Math.min(...te2.value.negative), w = [-1 / 0, 1 / 0, NaN, void 0, null].includes(u) ? 0 : u, R3 = !e.value.style.chart.bars.distributed && (e.value.style.chart.grid.scale.scaleMax !== null || e.value.style.chart.grid.scale.scaleMin !== null) ? Gt(e.value.style.chart.grid.scale.scaleMin !== null ? e.value.style.chart.grid.scale.scaleMin : w > 0 ? 0 : w, e.value.style.chart.grid.scale.scaleMax !== null ? e.value.style.chart.grid.scale.scaleMax : i < 0 ? 0 : i, e.value.style.chart.grid.scale.ticks) : Ut(e.value.style.chart.grid.scale.scaleMin !== null ? e.value.style.chart.grid.scale.scaleMin : w > 0 ? 0 : w, e.value.style.chart.grid.scale.scaleMax !== null ? e.value.style.chart.grid.scale.scaleMax : i < 0 ? 0 : i, e.value.style.chart.grid.scale.ticks), { min: I, max: K } = R3, F = K + (I >= 0 ? 0 : Math.abs(I)) || 1, $ = r.value.height, re2 = r.value.width, Be = N.value[0] ? N.value[0].zero : r.value.bottom, We = N.value[0] ? N.value[0].horizontal_zero : r.value.left;
      return P.value.filter((Q2) => !L.value.includes(Q2.id)).map((Q2) => {
        const O2 = Q2.series.slice(c2.value.start, c2.value.end), ht = Q2.signedSeries.slice(c2.value.start, c2.value.end), dt = O2.map((y, b) => r.value.left + d.value * b + d.value * e.value.style.chart.bars.gapRatio / 4), yt = O2.map((y, b) => r.value.top + d.value * b + d.value * e.value.style.chart.bars.gapRatio / 4), gt = O2.map((y, b) => {
          const M = e.value.style.chart.bars.distributed ? (y || 0) / q.value[b] : (y || 0) / F;
          let V, T;
          return y > 0 ? (T = $ * M, V = Be - T - a[b], a[b] += T) : (T = $ * M, V = Be + t[b], t[b] += Math.abs(T)), V;
        }), bt = O2.map((y, b) => {
          const M = e.value.style.chart.bars.distributed ? (y || 0) / q.value[b] : (y || 0) / F;
          let V, T;
          return y > 0 ? (T = re2 * M, V = We + o[b], o[b] += T) : (T = re2 * M, V = We - Math.abs(T) - l[b], l[b] += Math.abs(T)), V;
        }), ft = O2.map((y, b) => {
          const M = e.value.style.chart.bars.distributed ? (y || 0) / q.value[b] : (y || 0) / F;
          return y > 0 ? $ * M : $ * Math.abs(M);
        }), mt = O2.map((y, b) => {
          const M = e.value.style.chart.bars.distributed ? (y || 0) / q.value[b] : (y || 0) / F;
          return y > 0 ? re2 * M : re2 * Math.abs(M);
        }), pt = O2.map((y) => Math.abs(y)).reduce((y, b) => y + b, 0);
        return {
          ...Q2,
          proportions: O2.map((y, b) => e.value.style.chart.bars.distributed ? (y || 0) / q.value[b] : (y || 0) / pt),
          series: O2,
          signedSeries: ht,
          x: dt,
          y: gt,
          height: ft,
          horizontal_width: mt,
          horizontal_y: yt,
          horizontal_x: bt
        };
      });
    }), Oe = computed(() => it.value.map((a, o) => ({
      value: a,
      sign: a >= 0 ? 1 : -1
    })));
    function ae2(a, o, t, l, i) {
      const u = i === -1 && a >= 0 ? -a : a;
      return ir(
        e.value.style.chart.bars.dataLabels.formatter,
        u,
        Ht({
          p: e.value.style.chart.bars.dataLabels.prefix,
          v: u,
          s: e.value.style.chart.bars.dataLabels.suffix,
          r: e.value.style.chart.bars.dataLabels.rounding
        }),
        { datapoint: o, seriesIndex: t, datapointIndex: l }
      );
    }
    function Pe(a, o, t, l) {
      return ir(
        e.value.style.chart.bars.dataLabels.formatter,
        a,
        Ht({
          v: a,
          s: "%",
          r: e.value.style.chart.bars.dataLabels.rounding
        }),
        { datapoint: o, seriesIndex: t, datapointIndex: l }
      );
    }
    function Ae(a) {
      const o = JSON.parse(JSON.stringify(m.value)).map((t) => ({
        name: t.name,
        value: t.series[a] === 0 ? 0 : t.series[a] || null,
        proportion: t.proportions[a] || null,
        color: t.color,
        id: t.id
      }));
      be("selectDatapoint", { datapoint: o, period: Z.value[a] });
    }
    function Re(a) {
      G.value = a, j.value = true;
      const o = e.value.style.chart.tooltip.customFormat, t = JSON.parse(JSON.stringify(m.value)).map((i) => ({
        name: i.name,
        value: i.series[a] === 0 ? 0 : (i.signedSeries[a] === -1 && i.series[a] >= 0 ? -i.series[a] : i.series[a]) || null,
        proportion: i.proportions[a] || null,
        color: i.color,
        id: i.id
      })), l = t.map((i) => Math.abs(i.value)).reduce((i, u) => i + u, 0);
      if (Xt(o) && Kt(() => o({
        seriesIndex: a,
        datapoint: t,
        series: m.value,
        config: e.value
      })))
        ce.value = o({
          seriesIndex: a,
          datapoint: t,
          series: m.value,
          config: e.value
        });
      else {
        const {
          showValue: i,
          showPercentage: u,
          borderColor: w,
          roundingValue: R3,
          roundingPercentage: I
        } = e.value.style.chart.tooltip;
        let K = "";
        Z.value[a] && (K += `<div style="width:100%;text-align:center;border-bottom:1px solid ${w};padding-bottom:6px;margin-bottom:3px;">${Z.value[a]}</div>`);
        const F = [
          i && u ? "(" : "",
          i && u ? ")" : ""
        ];
        t.reverse().forEach(($) => {
          K += `
                <div style="display:flex;flex-direction:row;align-items:center;gap:4px">
                    <svg viewBox="0 0 12 12" height="14" width="14"><rect rx="1" x="0" y="0" height="12" width="12" stroke="none" fill="${e.value.style.chart.bars.gradient.show ? `url(#gradient_${$.id})` : $.color}"/></svg>
                    ${$.name}${i || u ? ":" : ""} ${i ? Ht({
            p: e.value.style.chart.bars.dataLabels.prefix,
            v: $.value,
            s: e.value.style.chart.bars.dataLabels.suffix,
            r: R3
          }) : ""} ${F[0]}${u ? Ht({
            v: isNaN($.value / l) ? 0 : Math.abs($.value) / l * 100,
            // Negs are absed to show relative proportion to absolute total. It's opinionated.
            s: "%",
            r: I
          }) : ""}${F[1]}
                </div>
            `;
        }), ce.value = `<div>${K}</div>`;
      }
    }
    function nt(a) {
      ve.value = a, me.value += 1;
    }
    function Ie() {
      _.value.showTable = !_.value.showTable;
    }
    function Fe() {
      _.value.dataLabels.show = !_.value.dataLabels.show;
    }
    function Ve() {
      _.value.showTooltip = !_.value.showTooltip;
    }
    function ut() {
      return m.value;
    }
    const De = computed(() => {
      if (m.value.length === 0) return { head: [], body: [], config: {}, columnNames: [] };
      const a = m.value.map(({ name: t, color: l }) => ({
        label: t,
        color: l
      })), o = [];
      for (let t = c2.value.start; t < c2.value.end; t += 1) {
        const l = [e.value.style.chart.grid.x.timeLabels.values[t] || t + 1];
        P.value.forEach((i) => {
          l.push(Number((i.series[t] || 0).toFixed(e.value.table.td.roundingValue)));
        }), o.push(l);
      }
      return { head: a, body: o };
    });
    function Ee() {
      const a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], o = ["", ...De.value.head.map((u) => u.label)], t = De.value.body, l = a.concat([o]).concat(t), i = Vt(l);
      Nt({ csvContent: i, title: e.value.style.chart.title.text || "vue-ui-stackbar" });
    }
    const le = computed(() => {
      const a = [""].concat(m.value.map((i) => i.name)).concat(' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>');
      let o = [];
      for (let i = 0; i < A.value; i += 1) {
        const u = m.value.map((w) => w.series[i] ?? 0).reduce((w, R3) => w + R3, 0);
        o.push([e.value.style.chart.grid.x.timeLabels.values.slice(c2.value.start, c2.value.end)[i] ?? i + 1].concat(m.value.map((w) => (w.series[i] ?? 0).toFixed(e.value.table.td.roundingValue))).concat((u ?? 0).toFixed(e.value.table.td.roundingValue)));
      }
      const t = {
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
      }, l = [e.value.table.columnNames.period].concat(m.value.map((i) => i.name)).concat(e.value.table.columnNames.total);
      return { head: a, body: o.slice(0, c2.value.end - c2.value.start), config: t, colNames: l };
    });
    function ct(a, o) {
      if (be("selectLegend", m.value.find((t) => t.absoluteIndex === a)), L.value.includes(o.id))
        L.value = L.value.filter((t) => t !== o.id);
      else {
        if (L.value.length === P.value.length - 1) return;
        L.value.push(o.id);
      }
    }
    const He2 = computed(() => P.value.map((a, o) => ({
      ...a,
      shape: "square"
    })).map((a) => ({
      ...a,
      opacity: L.value.includes(a.id) ? 0.5 : 1,
      segregate: () => ct(a.absoluteIndex, a),
      isSegregated: L.value.includes(a.id)
    }))), vt = computed(() => ({
      cy: "stackbar-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), oe = ref(false);
    function de() {
      oe.value = !oe.value;
    }
    return tt({
      getData: ut,
      generatePdf: Se2,
      generateCsv: Ee,
      generateImage: $e,
      toggleTable: Ie,
      toggleLabels: Fe,
      toggleTooltip: Ve,
      toggleAnnotator: de
    }), (a, o) => (openBlock(), createElementBlock("div", {
      id: `stackbar_${ue.value}`,
      ref_key: "stackbarChart",
      ref: X,
      class: normalizeClass({ "vue-ui-stackbar": true, "vue-data-ui-wrapper-fullscreen": ve.value }),
      style: normalizeStyle(`background:${e.value.style.chart.backgroundColor};color:${e.value.style.chart.color};font-family:${e.value.style.fontFamily}; position: relative; ${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: X.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: oe.value,
        onClose: de
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      renderSlot(a.$slots, "userConfig", {}, void 0, true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "chartTitle",
        ref: pe,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        createVNode(x, {
          config: {
            title: {
              cy: "stackbar-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "stackbar-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"])
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && W2.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${me.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ze),
        isImaging: unref(Le),
        uid: ue.value,
        hasTooltip: e.value.style.chart.tooltip.show && e.value.userOptions.buttons.tooltip,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: ve.value,
        chartElement: X.value,
        position: e.value.userOptions.position,
        isTooltip: _.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: oe.value,
        onToggleFullscreen: nt,
        onGeneratePdf: unref(Se2),
        onGenerateCsv: Ee,
        onGenerateImage: unref($e),
        onToggleTable: Ie,
        onToggleLabels: Fe,
        onToggleTooltip: Ve,
        onToggleAnnotator: de
      }, createSlots({ _: 2 }, [
        a.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        a.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        a.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        a.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        a.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        a.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        a.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: l }) => [
            renderSlot(a.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: l })), void 0, true)
          ]),
          key: "6"
        } : void 0,
        a.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: l }) => [
            renderSlot(a.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: l })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "chartElement", "position", "isTooltip", "titles", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      W2.value ? (openBlock(), createElementBlock("svg", {
        key: 3,
        xmlns: unref(Jt),
        viewBox: `0 0 ${r.value.chartWidth <= 0 ? 10 : r.value.chartWidth} ${r.value.chartHeight <= 0 ? 10 : r.value.chartHeight}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.style.chart.bars.gradient.show ? (openBlock(), createElementBlock("defs", Zt2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("linearGradient", {
            id: `gradient_${t.id}`,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": t.color
            }, null, 8, Qt),
            createBaseVNode("stop", {
              offset: "61.8%",
              "stop-color": unref(It)(t.color, e.value.style.chart.bars.gradient.intensity / 100)
            }, null, 8, jt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": t.color
            }, null, 8, ea)
          ], 8, Kt2))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.grid.x.showHorizontalLines && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
          x1: r.value.left,
          x2: r.value.right,
          y1: t.y,
          y2: t.y,
          stroke: e.value.style.chart.grid.x.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, ta))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.showHorizontalLines && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(c2.value.end - c2.value.start + 1, (t, l) => (openBlock(), createElementBlock("line", {
          x1: r.value.left,
          x2: r.value.right,
          y1: r.value.top + d.value * l,
          y2: r.value.top + d.value * l,
          stroke: e.value.style.chart.grid.y.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, aa))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.showVerticalLines && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(c2.value.end - c2.value.start + 1, (t, l) => (openBlock(), createElementBlock("line", {
          x1: r.value.left + d.value * l,
          x2: r.value.left + d.value * l,
          y1: r.value.top,
          y2: r.value.bottom,
          stroke: e.value.style.chart.grid.y.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, la))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.showHorizontalLines && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 4 }, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
          x1: t.horizontal_x,
          x2: t.horizontal_x,
          y1: r.value.top,
          y2: r.value.bottom,
          stroke: e.value.style.chart.grid.x.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, oa))), 256)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("g", null, [
          e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(t.x, (i, u) => (openBlock(), createElementBlock("rect", {
            x: i,
            y: t.y[u] < 0 ? 0 : t.y[u],
            height: t.height[u] < 0 ? 1e-4 : t.height[u],
            rx: e.value.style.chart.bars.borderRadius > t.height[u] / 2 ? (t.height[u] < 0 ? 0 : t.height[u]) / 2 : e.value.style.chart.bars.borderRadius,
            width: d.value * (1 - e.value.style.chart.bars.gapRatio / 2),
            fill: e.value.style.chart.bars.gradient.show ? `url(#gradient_${t.id})` : t.color,
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": e.value.style.chart.bars.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: normalizeClass({ "vue-data-ui-bar-animated": e.value.useCssAnimation, "vue-data-ui-bar-transition": J.value })
          }, null, 10, ra))), 256)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(t.horizontal_x, (i, u) => (openBlock(), createElementBlock("rect", {
            x: i,
            y: t.horizontal_y[u] < 0 ? 0 : t.horizontal_y[u],
            width: t.horizontal_width[u] < 0 ? 1e-4 : t.horizontal_width[u],
            rx: e.value.style.chart.bars.borderRadius > t.height[u] / 2 ? (t.height[u] < 0 ? 0 : t.height[u]) / 2 : e.value.style.chart.bars.borderRadius,
            height: d.value * (1 - e.value.style.chart.bars.gapRatio / 2),
            fill: e.value.style.chart.bars.gradient.show ? `url(#gradient_${t.id})` : t.color,
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": e.value.style.chart.bars.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: normalizeClass({ "vue-data-ui-bar-animated": e.value.useCssAnimation, "vue-data-ui-bar-transition": J.value })
          }, null, 10, sa))), 256))
        ]))), 256)),
        e.value.style.chart.grid.x.showAxis ? (openBlock(), createElementBlock("line", {
          key: 5,
          x1: r.value.left,
          x2: r.value.right,
          y1: r.value.bottom,
          y2: r.value.bottom,
          stroke: e.value.style.chart.grid.x.axisColor,
          "stroke-width": e.value.style.chart.grid.x.axisThickness,
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, null, 8, ia)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.showAxis && !e.value.style.chart.bars.distributed ? (openBlock(), createElementBlock("line", {
          key: 6,
          x1: r.value.left,
          x2: r.value.left,
          y1: r.value.top,
          y2: r.value.bottom,
          stroke: e.value.style.chart.grid.y.axisColor,
          "stroke-width": e.value.style.chart.grid.y.axisThickness,
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, null, 8, na)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.axisName.show && e.value.style.chart.grid.x.axisName.text ? (openBlock(), createElementBlock("text", {
          key: 7,
          x: r.value.left + r.value.width / 2,
          y: r.value.chartHeight + e.value.style.chart.grid.x.axisName.offsetY,
          "font-size": e.value.style.chart.grid.x.axisName.fontSize,
          fill: e.value.style.chart.grid.x.axisName.color,
          "font-weight": e.value.style.chart.grid.x.axisName.bold ? "bold" : "normal",
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.grid.x.axisName.text), 9, ua)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.axisName.show && e.value.style.chart.grid.y.axisName.text ? (openBlock(), createElementBlock("text", {
          key: 8,
          transform: `translate(${e.value.style.chart.grid.y.axisName.fontSize + e.value.style.chart.grid.y.axisName.offsetX}, ${r.value.top + r.value.height / 2}) rotate(-90)`,
          "font-size": e.value.style.chart.grid.y.axisName.fontSize,
          fill: e.value.style.chart.grid.y.axisName.color,
          "font-weight": e.value.style.chart.grid.y.axisName.bold ? "bold" : "normal",
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.grid.y.axisName.text), 9, ca)) : createCommentVNode("", true),
        _.value.dataLabels.show && e.value.orientation === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.x, (i, u) => (openBlock(), createElementBlock("text", {
              x: i + d.value * (1 - e.value.style.chart.bars.gapRatio / 2) / 2,
              y: t.y[u] + t.height[u] / 2 + e.value.style.chart.bars.dataLabels.fontSize / 3,
              "font-size": e.value.style.chart.bars.dataLabels.fontSize,
              fill: e.value.style.chart.bars.dataLabels.adaptColorToBackground ? unref(_t)(t.color) : e.value.style.chart.bars.dataLabels.color,
              "font-weight": e.value.style.chart.bars.dataLabels.bold ? "bold" : "normal",
              "text-anchor": "middle"
            }, toDisplayString(e.value.style.chart.bars.showDistributedPercentage && e.value.style.chart.bars.distributed ? Pe(t.proportions[u] * 100, t, l, u) : ae2(t.series[u], t, l, u, t.signedSeries[u])), 9, va))), 256))
          ]))), 256)),
          e.value.style.chart.bars.totalValues.show && m.value.length > 1 ? (openBlock(), createElementBlock("g", ha, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Oe.value, (t, l) => (openBlock(), createElementBlock("text", {
              x: r.value.left + d.value * l + d.value / 2,
              y: r.value.top - e.value.style.chart.bars.totalValues.fontSize / 3,
              "text-anchor": "middle",
              "font-size": e.value.style.chart.bars.totalValues.fontSize,
              "font-weight": e.value.style.chart.bars.totalValues.bold ? "bold" : "normal",
              fill: e.value.style.chart.bars.totalValues.color
            }, toDisplayString(ae2(t.value, t, l, t.sign)), 9, da))), 256))
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        _.value.dataLabels.show && e.value.orientation === "horizontal" ? (openBlock(), createElementBlock(Fragment, { key: 10 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.horizontal_x, (i, u) => (openBlock(), createElementBlock("text", {
              x: i + (t.horizontal_width[u] < 0 ? 1e-4 : t.horizontal_width[u]) / 2,
              y: t.horizontal_y[u] + d.value * (1 - e.value.style.chart.bars.gapRatio / 2) / 2 + e.value.style.chart.bars.dataLabels.fontSize / 3,
              "font-size": e.value.style.chart.bars.dataLabels.fontSize,
              fill: e.value.style.chart.bars.dataLabels.adaptColorToBackground ? unref(_t)(t.color) : e.value.style.chart.bars.dataLabels.color,
              "font-weight": e.value.style.chart.bars.dataLabels.bold ? "bold" : "normal",
              "text-anchor": "middle"
            }, toDisplayString(e.value.style.chart.bars.showDistributedPercentage && e.value.style.chart.bars.distributed ? Pe(t.proportions[u] * 100, t, l, u) : ae2(t.series[u], t, l, u, t.signedSeries[u])), 9, ya))), 256))
          ]))), 256)),
          e.value.style.chart.bars.totalValues.show && m.value.length > 1 ? (openBlock(), createElementBlock("g", ga, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Oe.value, (t, l) => (openBlock(), createElementBlock("text", {
              x: r.value.right + e.value.style.chart.bars.totalValues.fontSize / 3,
              y: r.value.top + d.value * l + d.value / 2,
              "text-anchor": "start",
              "font-size": e.value.style.chart.bars.totalValues.fontSize,
              "font-weight": e.value.style.chart.bars.totalValues.bold ? "bold" : "normal",
              fill: e.value.style.chart.bars.totalValues.color
            }, toDisplayString(ae2(t.value, t, l, t.sign)), 9, ba))), 256))
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.axisLabels.show && !e.value.style.chart.bars.distributed && e.value.orientation === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 11 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
            x1: r.value.left,
            x2: r.value.left - 6,
            y1: t.y,
            y2: t.y,
            stroke: e.value.style.chart.grid.x.axisColor,
            "stroke-width": 1
          }, null, 8, fa))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("text", {
            x: t.x,
            y: t.y + e.value.style.chart.grid.y.axisLabels.fontSize / 3,
            "font-size": e.value.style.chart.grid.y.axisLabels.fontSize,
            "font-weight": e.value.style.chart.grid.y.axisLabels.bold ? "bold" : "normal",
            fill: e.value.style.chart.grid.y.axisLabels.color,
            "text-anchor": "end"
          }, toDisplayString(unref(Ht)({
            p: e.value.style.chart.bars.dataLabels.prefix,
            v: t.value,
            s: e.value.style.chart.bars.dataLabels.suffix,
            r: e.value.style.chart.grid.y.axisLabels.rounding
          })), 9, ma))), 256))
        ], 64)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.axisLabels.show && !e.value.style.chart.bars.distributed && e.value.orientation === "horizontal" ? (openBlock(), createElementBlock(Fragment, { key: 12 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
            x1: t.horizontal_x,
            x2: t.horizontal_x,
            y1: r.value.bottom,
            y2: r.value.bottom + 6,
            stroke: e.value.style.chart.grid.x.axisColor,
            "stroke-width": 1,
            "stroke-linecap": "round"
          }, null, 8, pa))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("text", {
            "font-size": e.value.style.chart.grid.x.timeLabels.fontSize,
            "font-weight": e.value.style.chart.grid.y.axisLabels.bold ? "bold" : "normal",
            fill: e.value.style.chart.grid.y.axisLabels.color,
            "text-anchor": e.value.style.chart.grid.x.timeLabels.rotation > 0 ? "start" : e.value.style.chart.grid.x.timeLabels.rotation < 0 ? "end" : "middle",
            transform: `translate(${t.horizontal_x}, ${r.value.bottom + e.value.style.chart.grid.x.timeLabels.fontSize * 1.3 + e.value.style.chart.grid.x.timeLabels.offsetY}), rotate(${e.value.style.chart.grid.x.timeLabels.rotation})`
          }, toDisplayString(unref(Ht)({
            p: e.value.style.chart.bars.dataLabels.prefix,
            v: t.value,
            s: e.value.style.chart.bars.dataLabels.suffix,
            r: e.value.style.chart.grid.y.axisLabels.rounding
          })), 9, xa))), 256))
        ], 64)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.timeLabels.show && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 13 }, renderList(Z.value, (t, l) => (openBlock(), createElementBlock("text", {
          "text-anchor": e.value.style.chart.grid.x.timeLabels.rotation > 0 ? "start" : e.value.style.chart.grid.x.timeLabels.rotation < 0 ? "end" : "middle",
          "font-size": e.value.style.chart.grid.x.timeLabels.fontSize,
          "font-weight": e.value.style.chart.grid.x.timeLabels.bold ? "bold" : "normal",
          fill: e.value.style.chart.grid.x.timeLabels.color,
          transform: `translate(${r.value.left + d.value * l + d.value / 2}, ${r.value.bottom + e.value.style.chart.grid.x.timeLabels.fontSize * 1.3 + e.value.style.chart.grid.x.timeLabels.offsetY}), rotate(${e.value.style.chart.grid.x.timeLabels.rotation})`
        }, toDisplayString(t), 9, ka))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.timeLabels.show && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 14 }, renderList(Z.value, (t, l) => (openBlock(), createElementBlock("text", {
          "text-anchor": "end",
          "font-size": e.value.style.chart.grid.y.axisLabels.fontSize,
          "font-weight": e.value.style.chart.grid.y.axisLabels.bold ? "bold" : "normal",
          fill: e.value.style.chart.grid.y.axisLabels.color,
          x: r.value.left - 8,
          y: r.value.top + d.value * l + d.value / 2 + e.value.style.chart.grid.y.axisLabels.fontSize / 3
        }, toDisplayString(t), 9, wa))), 256)) : createCommentVNode("", true),
        _.value.showTooltip && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 15 }, renderList(c2.value.end - c2.value.start, (t, l) => (openBlock(), createElementBlock("rect", {
          x: r.value.left + l * d.value,
          y: r.value.top,
          width: d.value,
          height: r.value.height < 0 ? 0 : r.value.height,
          onClick: (i) => Ae(l),
          onMouseenter: (i) => Re(l),
          onMouseleave: o[0] || (o[0] = (i) => {
            G.value = null, j.value = false;
          }),
          fill: l === G.value ? e.value.style.chart.highlighter.color : "transparent",
          style: normalizeStyle({ opacity: e.value.style.chart.highlighter.opacity / 100 })
        }, null, 44, Ca))), 256)) : createCommentVNode("", true),
        _.value.showTooltip && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 16 }, renderList(c2.value.end - c2.value.start, (t, l) => (openBlock(), createElementBlock("rect", {
          x: r.value.left,
          y: r.value.top + l * d.value,
          width: r.value.width < 0 ? 0 : r.value.width,
          height: d.value,
          onClick: (i) => Ae(l),
          onMouseenter: (i) => Re(l),
          onMouseleave: o[1] || (o[1] = (i) => {
            G.value = null, j.value = false;
          }),
          fill: l === G.value ? e.value.style.chart.highlighter.color : "transparent",
          style: normalizeStyle({ opacity: e.value.style.chart.highlighter.opacity / 100 })
        }, null, 44, _a))), 256)) : createCommentVNode("", true),
        renderSlot(a.$slots, "svg", normalizeProps(guardReactiveProps({ ...r.value })), void 0, true)
      ], 12, qt2)) : createCommentVNode("", true),
      a.$slots.watermark ? (openBlock(), createElementBlock("div", za, [
        renderSlot(a.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ze) || unref(Le) })), void 0, true)
      ])) : createCommentVNode("", true),
      W2.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 5,
        config: {
          type: "bar",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            bar: {
              axis: {
                color: "#CCCCCC"
              },
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartSlicer",
        ref: ke,
        style: normalizeStyle(`width:100%;background:${e.value.style.chart.backgroundColor}`),
        "data-html2canvas-ignore": ""
      }, [
        e.value.style.chart.zoom.show && A.value > 1 ? (openBlock(), createBlock(Ue, {
          key: `slicer_${Ce.value}`,
          background: e.value.style.chart.zoom.color,
          borderColor: e.value.style.chart.backgroundColor,
          fontSize: e.value.style.chart.zoom.fontSize,
          useResetSlot: e.value.style.chart.zoom.useResetSlot,
          labelLeft: e.value.style.chart.grid.x.timeLabels.values[c2.value.start] ? e.value.style.chart.grid.x.timeLabels.values[c2.value.start] : "",
          labelRight: e.value.style.chart.grid.x.timeLabels.values[c2.value.end - 1] ? e.value.style.chart.grid.x.timeLabels.values[c2.value.end - 1] : "",
          textColor: e.value.style.chart.color,
          inputColor: e.value.style.chart.zoom.color,
          selectColor: e.value.style.chart.zoom.highlightColor,
          max: Math.max(...ge.dataset.map((t) => t.series.length)),
          min: 0,
          valueStart: c2.value.start,
          valueEnd: c2.value.end,
          start: c2.value.start,
          "onUpdate:start": o[2] || (o[2] = (t) => c2.value.start = t),
          end: c2.value.end,
          "onUpdate:end": o[3] || (o[3] = (t) => c2.value.end = t),
          onReset: Ne
        }, {
          "reset-action": withCtx(({ reset: t }) => [
            renderSlot(a.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: t })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"])) : createCommentVNode("", true)
      ], 4),
      createVNode(E, {
        show: _.value.showTooltip && j.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: X.value,
        content: ce.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(a.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...fe.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(a.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...fe.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: xe
      }, [
        e.value.style.chart.legend.show && W2.value ? (openBlock(), createBlock(C, {
          key: 0,
          legendSet: He2.value,
          config: vt.value,
          onClickMarker: o[4] || (o[4] = ({ legend: t }) => t.segregate())
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              onClick: (l) => t.segregate(),
              style: normalizeStyle(`opacity:${L.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name), 13, La)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(a.$slots, "legend", {
          key: 1,
          legend: He2.value
        }, void 0, true)
      ], 512),
      a.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 6,
        ref_key: "source",
        ref: we,
        dir: "auto"
      }, [
        renderSlot(a.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      c2.value.end - c2.value.start < 200 ? (openBlock(), createBlock(R, {
        key: 7,
        hideDetails: "",
        config: {
          open: _.value.showTable,
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
          createVNode(W, {
            colNames: le.value.colNames,
            head: le.value.head,
            body: le.value.body,
            config: le.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[5] || (o[5] = (t) => _.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createBaseVNode("div", { innerHTML: t }, null, 8, Sa)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(isNaN(Number(t)) ? t : unref(Ht)({
                p: e.value.style.chart.bars.dataLabels.prefix,
                v: t,
                s: e.value.style.chart.bars.dataLabels.suffix,
                r: e.value.table.td.roundingValue
              })), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"])
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Jt2));
  }
};
var Xa = s($a, [["__scopeId", "data-v-d80dd138"]]);
export {
  Xa as default
};
//# sourceMappingURL=vue-ui-stackbar-C2mRU7ya-6TDDVO3V.js.map
