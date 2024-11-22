import {
  _e
} from "./chunk-2OITSM6Y.js";
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
  Wt,
  Xt,
  ar,
  et,
  j,
  nr,
  oe,
  or,
  qt,
  sr,
  xt
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-stackbar-DNROvZII.js
var Xt2 = ["id"];
var Ut = ["xmlns", "viewBox"];
var Yt = { key: 0 };
var Gt2 = ["id"];
var Jt = ["stop-color"];
var qt2 = ["stop-color"];
var Zt = ["stop-color"];
var Kt2 = ["x1", "x2", "y1", "y2", "stroke"];
var Qt2 = ["x1", "x2", "y1", "y2", "stroke"];
var jt = ["x1", "x2", "y1", "y2", "stroke"];
var ea = ["x1", "x2", "y1", "y2", "stroke"];
var ta = ["x", "y", "height", "rx", "width", "fill", "stroke", "stroke-width"];
var aa = ["x", "y", "width", "rx", "height", "fill", "stroke", "stroke-width"];
var la = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ra = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var oa = ["x", "y", "font-size", "fill", "font-weight"];
var sa = ["transform", "font-size", "fill", "font-weight"];
var ia = ["x", "y", "font-size", "fill", "font-weight"];
var ua = { key: 0 };
var na = ["x", "y", "font-size", "font-weight", "fill"];
var ca = ["x", "y", "font-size", "fill", "font-weight"];
var va = { key: 0 };
var ha = ["x", "y", "font-size", "font-weight", "fill"];
var da = ["x1", "x2", "y1", "y2", "stroke"];
var ya = ["x", "y", "font-size", "font-weight", "fill"];
var ga = ["x1", "x2", "y1", "y2", "stroke"];
var ba = ["font-size", "font-weight", "fill", "text-anchor", "transform"];
var fa = ["text-anchor", "font-size", "font-weight", "fill", "transform"];
var ma = ["font-size", "font-weight", "fill", "x", "y"];
var pa = ["x", "y", "width", "height", "onClick", "onMouseenter", "fill"];
var xa = ["x", "y", "width", "height", "onClick", "onMouseenter", "fill"];
var ka = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var wa = ["onClick"];
var _a = ["innerHTML"];
var Ca = {
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
  setup(de, { expose: Qe, emit: ye }) {
    const x2 = de, { vue_ui_stackbar: je } = oe(), H = computed({
      get() {
        return !!x2.dataset && x2.dataset.length;
      },
      set(a) {
        return a;
      }
    }), U = ref(null), ue = ref(Lt()), j2 = ref(false), ge = ref(null), ne = ref(""), L = ref([]), be = ref(0), fe = ref(null), me = ref(null), pe = ref(null), xe = ref(0), ce = ref(false), Y = ref(null), G = ref(false), et2 = ref(0), tt = ref(0), at = ref(0);
    onMounted(() => {
      ve();
    });
    const e = computed({
      get: () => ke(),
      set: (a) => a
    });
    function ke() {
      const a = c({
        userConfig: x2.config,
        defaultConfig: je
      });
      let r = {};
      return a.theme ? r = {
        ...c({
          userConfig: Ge.vue_ui_stackbar[a.theme] || x2.config,
          defaultConfig: a
        }),
        customPalette: R2[a.theme] || et
      } : r = a, x2.config && sr(x2.config, "style.chart.grid.scale.scaleMin") ? r.style.chart.grid.scale.scaleMin = x2.config.style.chart.grid.scale.scaleMin : r.style.chart.grid.scale.scaleMin = null, x2.config && sr(x2.config, "style.chart.grid.scale.scaleMax") ? r.style.chart.grid.scale.scaleMax = x2.config.style.chart.grid.scale.scaleMax : r.style.chart.grid.scale.scaleMax = null, r;
    }
    watch(() => x2.config, (a) => {
      e.value = ke(), ve(), et2.value += 1, tt.value += 1, at.value += 1;
    }, { deep: true }), watch(() => x2.dataset, (a) => {
      Me();
    }, { deep: true });
    const w = ref({
      dataLabels: {
        show: e.value.style.chart.bars.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), { isPrinting: we, isImaging: _e2, generatePdf: Ce, generateImage: ze } = se({
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
    }), lt = computed(() => or(e.value.customPalette)), Le = ref(null), Se = ref(null);
    onMounted(() => {
      ve();
    });
    function ve() {
      if (Xt(x2.dataset) ? Kt({
        componentName: "VueUiStackbar",
        type: "dataset"
      }) : x2.dataset.forEach((a, r) => {
        qt({
          datasetObject: a,
          requiredAttributes: ["name", "series"]
        }).forEach((t) => {
          H.value = false, Kt({
            componentName: "VueUiStackbar",
            type: "datasetSerieAttribute",
            property: t,
            index: r
          });
        });
      }), setTimeout(() => {
        G.value = true;
      }, 10), e.value.responsive) {
        const a = O(() => {
          G.value = false;
          const { width: r, height: t } = M({
            chart: U.value,
            title: e.value.style.chart.title.text ? fe.value : null,
            legend: e.value.style.chart.legend.show ? me.value : null,
            slicer: e.value.style.chart.zoom.show && R3.value > 1 ? pe.value : null
          });
          ee.value.width = r, ee.value.height = t, clearTimeout(Se.value), Se.value = setTimeout(() => {
            G.value = true;
          }, 10);
        });
        Le.value = new ResizeObserver(a), Le.value.observe(U.value.parentNode);
      }
    }
    const o = computed(() => {
      const { height: a, width: r } = ee.value, { right: t } = ee.value.paddingRatio, l = e.value.style.chart.padding.top, i = r - r * t, n = a - e.value.style.chart.padding.bottom, k = e.value.style.chart.padding.left, I = r - k - r * t, F = a - l - e.value.style.chart.padding.bottom;
      return {
        chartHeight: a,
        chartWidth: r,
        top: l,
        right: i,
        bottom: n,
        left: k,
        width: I,
        height: F < 0 ? 0 : F
      };
    }), P = computed(() => x2.dataset.map((a, r) => {
      const t = j(a.color) || lt.value[r] || et[r] || et[r % et.length];
      return {
        ...a,
        // In distributed mode, all values are converted to positive
        series: JSON.parse(JSON.stringify(a.series)).map((l) => e.value.style.chart.bars.distributed ? Math.abs(l) : l),
        // Store signs to manage display of neg values in distributed mode
        signedSeries: a.series.map((l) => l >= 0 ? 1 : -1),
        absoluteIndex: r,
        id: Lt(),
        color: t
      };
    })), R3 = computed(() => Math.max(...P.value.filter((a) => !L.value.includes(a.id)).map((a) => a.series.length))), c2 = ref({
      start: 0,
      end: Math.max(...x2.dataset.map((a) => a.series.length))
    });
    function Me() {
      c2.value = {
        start: 0,
        end: Math.max(...x2.dataset.map((a) => a.series.length))
      }, xe.value += 1;
    }
    const d = computed(() => {
      let a;
      return e.value.orientation === "vertical" ? a = o.value.width / (c2.value.end - c2.value.start) : a = o.value.height / (c2.value.end - c2.value.start), a <= 0 ? 0 : a;
    }), J = computed(() => ar(P.value.filter((a) => !L.value.includes(a.id))).slice(c2.value.start, c2.value.end)), rt = computed(() => ar(P.value.filter((a) => !L.value.includes(a.id)).map((a) => ({
      ...a,
      series: a.series.map((r, t) => a.signedSeries[t] === -1 && r >= 0 ? -r : r)
    }))).slice(c2.value.start, c2.value.end)), te = computed(() => {
      const a = P.value.filter((r) => !L.value.includes(r.id));
      return {
        positive: ar(a.map((r) => ({
          ...r,
          series: r.series.slice(c2.value.start, c2.value.end).map((t) => t >= 0 ? t : 0)
        }))),
        negative: ar(a.map((r) => ({
          ...r,
          series: r.series.slice(c2.value.start, c2.value.end).map((t) => t < 0 ? t : 0)
        })))
      };
    }), N = computed(() => {
      const a = e.value.style.chart.grid.scale.scaleMax !== null && !e.value.style.chart.bars.distributed ? e.value.style.chart.grid.scale.scaleMax : Math.max(...te.value.positive), r = Math.min(...te.value.negative), t = e.value.style.chart.grid.scale.scaleMin !== null && !e.value.style.chart.bars.distributed ? e.value.style.chart.grid.scale.scaleMin : [-1 / 0, 1 / 0, NaN, void 0, null].includes(r) ? 0 : r, l = !e.value.style.chart.bars.distributed && (e.value.style.chart.grid.scale.scaleMax !== null || e.value.style.chart.grid.scale.scaleMin !== null) ? Wt(t > 0 ? 0 : t, a < 0 ? 0 : a, e.value.style.chart.grid.scale.ticks) : It(t > 0 ? 0 : t, a < 0 ? 0 : a, e.value.style.chart.grid.scale.ticks);
      return l.ticks.map((i) => ({
        zero: o.value.bottom - o.value.height * (Math.abs(l.min) / (l.max + Math.abs(l.min))),
        y: o.value.bottom - o.value.height * ((i + Math.abs(l.min)) / (l.max + Math.abs(l.min))),
        x: o.value.left - 8,
        horizontal_zero: o.value.left + o.value.width * (Math.abs(l.min) / (l.max + Math.abs(l.min))),
        horizontal_x: o.value.left + o.value.width * ((i + Math.abs(l.min)) / (l.max + Math.abs(l.min))),
        horizontal_y: o.value.bottom - 8,
        value: i
      }));
    }), q = computed(() => e.value.style.chart.grid.x.timeLabels.values.slice(c2.value.start, c2.value.end)), m = computed(() => {
      if (!H.value) return [];
      let a = Array(R3.value).fill(0), r = Array(R3.value).fill(0), t = Array(R3.value).fill(0), l = Array(R3.value).fill(0);
      const i = Math.max(...te.value.positive) || 0, n = Math.min(...te.value.negative), k = [-1 / 0, 1 / 0, NaN, void 0, null].includes(n) ? 0 : n, I = !e.value.style.chart.bars.distributed && (e.value.style.chart.grid.scale.scaleMax !== null || e.value.style.chart.grid.scale.scaleMin !== null) ? Wt(e.value.style.chart.grid.scale.scaleMin !== null ? e.value.style.chart.grid.scale.scaleMin : k > 0 ? 0 : k, e.value.style.chart.grid.scale.scaleMax !== null ? e.value.style.chart.grid.scale.scaleMax : i < 0 ? 0 : i, e.value.style.chart.grid.scale.ticks) : It(e.value.style.chart.grid.scale.scaleMin !== null ? e.value.style.chart.grid.scale.scaleMin : k > 0 ? 0 : k, e.value.style.chart.grid.scale.scaleMax !== null ? e.value.style.chart.grid.scale.scaleMax : i < 0 ? 0 : i, e.value.style.chart.grid.scale.ticks), { min: F, max: Z } = I, V = Z + (F >= 0 ? 0 : Math.abs(F)) || 1, M2 = o.value.height, re = o.value.width, De = N.value[0] ? N.value[0].zero : o.value.bottom, Ee = N.value[0] ? N.value[0].horizontal_zero : o.value.left;
      return P.value.filter((K) => !L.value.includes(K.id)).map((K) => {
        const O2 = K.series.slice(c2.value.start, c2.value.end), nt = K.signedSeries.slice(c2.value.start, c2.value.end), ct = O2.map((y, g) => o.value.left + d.value * g + d.value * e.value.style.chart.bars.gapRatio / 4), vt = O2.map((y, g) => o.value.top + d.value * g + d.value * e.value.style.chart.bars.gapRatio / 4), ht = O2.map((y, g) => {
          const $ = e.value.style.chart.bars.distributed ? (y || 0) / J.value[g] : (y || 0) / V;
          let A, T;
          return y > 0 ? (T = M2 * $, A = De - T - a[g], a[g] += T) : (T = M2 * $, A = De + t[g], t[g] += Math.abs(T)), A;
        }), dt = O2.map((y, g) => {
          const $ = e.value.style.chart.bars.distributed ? (y || 0) / J.value[g] : (y || 0) / V;
          let A, T;
          return y > 0 ? (T = re * $, A = Ee + r[g], r[g] += T) : (T = re * $, A = Ee - Math.abs(T) - l[g], l[g] += Math.abs(T)), A;
        }), yt = O2.map((y, g) => {
          const $ = e.value.style.chart.bars.distributed ? (y || 0) / J.value[g] : (y || 0) / V;
          return y > 0 ? M2 * $ : M2 * Math.abs($);
        }), gt = O2.map((y, g) => {
          const $ = e.value.style.chart.bars.distributed ? (y || 0) / J.value[g] : (y || 0) / V;
          return y > 0 ? re * $ : re * Math.abs($);
        }), bt = O2.map((y) => Math.abs(y)).reduce((y, g) => y + g, 0);
        return {
          ...K,
          proportions: O2.map((y, g) => e.value.style.chart.bars.distributed ? (y || 0) / J.value[g] : (y || 0) / bt),
          series: O2,
          signedSeries: nt,
          x: ct,
          y: ht,
          height: yt,
          horizontal_width: gt,
          horizontal_y: vt,
          horizontal_x: dt
        };
      });
    }), $e = computed(() => rt.value.map((a, r) => ({
      value: a,
      sign: a >= 0 ? 1 : -1
    })));
    function ae(a, r, t, l, i) {
      const n = i === -1 && a >= 0 ? -a : a;
      return nr(
        e.value.style.chart.bars.dataLabels.formatter,
        n,
        Gt({
          p: e.value.style.chart.bars.dataLabels.prefix,
          v: n,
          s: e.value.style.chart.bars.dataLabels.suffix,
          r: e.value.style.chart.bars.dataLabels.rounding
        }),
        { datapoint: r, seriesIndex: t, datapointIndex: l }
      );
    }
    function Te(a, r, t, l) {
      return nr(
        e.value.style.chart.bars.dataLabels.formatter,
        a,
        Gt({
          v: a,
          s: "%",
          r: e.value.style.chart.bars.dataLabels.rounding
        }),
        { datapoint: r, seriesIndex: t, datapointIndex: l }
      );
    }
    function Ne(a) {
      const r = JSON.parse(JSON.stringify(m.value)).map((t) => ({
        name: t.name,
        value: t.series[a] === 0 ? 0 : t.series[a] || null,
        proportion: t.proportions[a] || null,
        color: t.color,
        id: t.id
      }));
      ye("selectDatapoint", { datapoint: r, period: q.value[a] });
    }
    function Oe(a) {
      Y.value = a, j2.value = true;
      const r = e.value.style.chart.tooltip.customFormat, t = JSON.parse(JSON.stringify(m.value)).map((i) => ({
        name: i.name,
        value: i.series[a] === 0 ? 0 : (i.signedSeries[a] === -1 && i.series[a] >= 0 ? -i.series[a] : i.series[a]) || null,
        proportion: i.proportions[a] || null,
        color: i.color,
        id: i.id
      })), l = t.map((i) => Math.abs(i.value)).reduce((i, n) => i + n, 0);
      if (Ht(r) && $t(() => r({
        seriesIndex: a,
        datapoint: t,
        series: m.value,
        config: e.value
      })))
        ne.value = r({
          seriesIndex: a,
          datapoint: t,
          series: m.value,
          config: e.value
        });
      else {
        const {
          showValue: i,
          showPercentage: n,
          borderColor: k,
          roundingValue: I,
          roundingPercentage: F
        } = e.value.style.chart.tooltip;
        let Z = "";
        q.value[a] && (Z += `<div style="width:100%;text-align:center;border-bottom:1px solid ${k};padding-bottom:6px;margin-bottom:3px;">${q.value[a]}</div>`);
        const V = [
          i && n ? "(" : "",
          i && n ? ")" : ""
        ];
        t.reverse().forEach((M2) => {
          Z += `
                <div style="display:flex;flex-direction:row;align-items:center;gap:4px">
                    <svg viewBox="0 0 12 12" height="14" width="14"><rect rx="1" x="0" y="0" height="12" width="12" stroke="none" fill="${e.value.style.chart.bars.gradient.show ? `url(#gradient_${M2.id})` : M2.color}"/></svg>
                    ${M2.name}${i || n ? ":" : ""} ${i ? Gt({
            p: e.value.style.chart.bars.dataLabels.prefix,
            v: M2.value,
            s: e.value.style.chart.bars.dataLabels.suffix,
            r: I
          }) : ""} ${V[0]}${n ? Gt({
            v: isNaN(M2.value / l) ? 0 : Math.abs(M2.value) / l * 100,
            // Negs are absed to show relative proportion to absolute total. It's opinionated.
            s: "%",
            r: F
          }) : ""}${V[1]}
                </div>
            `;
        }), ne.value = `<div>${Z}</div>`;
      }
    }
    function ot(a) {
      ce.value = a, be.value += 1;
    }
    function Pe() {
      w.value.showTable = !w.value.showTable;
    }
    function Re() {
      w.value.dataLabels.show = !w.value.dataLabels.show;
    }
    function Ie() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    function st() {
      return m.value;
    }
    const Fe = computed(() => {
      if (m.value.length === 0) return { head: [], body: [], config: {}, columnNames: [] };
      const a = m.value.map(({ name: t, color: l }) => ({
        label: t,
        color: l
      })), r = [];
      for (let t = c2.value.start; t < c2.value.end; t += 1) {
        const l = [e.value.style.chart.grid.x.timeLabels.values[t] || t + 1];
        P.value.forEach((i) => {
          l.push(Number((i.series[t] || 0).toFixed(e.value.table.td.roundingValue)));
        }), r.push(l);
      }
      return { head: a, body: r };
    });
    function Ve() {
      const a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], r = ["", ...Fe.value.head.map((n) => n.label)], t = Fe.value.body, l = a.concat([r]).concat(t), i = Nt(l);
      Ot({ csvContent: i, title: e.value.style.chart.title.text || "vue-ui-stackbar" });
    }
    const le = computed(() => {
      const a = [""].concat(m.value.map((i) => i.name)).concat(' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>');
      let r = [];
      for (let i = 0; i < R3.value; i += 1) {
        const n = m.value.map((k) => k.series[i] ?? 0).reduce((k, I) => k + I, 0);
        r.push([e.value.style.chart.grid.x.timeLabels.values.slice(c2.value.start, c2.value.end)[i] ?? i + 1].concat(m.value.map((k) => (k.series[i] ?? 0).toFixed(e.value.table.td.roundingValue))).concat((n ?? 0).toFixed(e.value.table.td.roundingValue)));
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
      return { head: a, body: r.slice(0, c2.value.end - c2.value.start), config: t, colNames: l };
    });
    function it(a, r) {
      if (ye("selectLegend", m.value.find((t) => t.absoluteIndex === a)), L.value.includes(r.id))
        L.value = L.value.filter((t) => t !== r.id);
      else {
        if (L.value.length === P.value.length - 1) return;
        L.value.push(r.id);
      }
    }
    const Ae = computed(() => P.value.map((a, r) => ({
      ...a,
      shape: "square"
    })).map((a) => ({
      ...a,
      opacity: L.value.includes(a.id) ? 0.5 : 1,
      segregate: () => it(a.absoluteIndex, a),
      isSegregated: L.value.includes(a.id)
    }))), ut = computed(() => ({
      cy: "stackbar-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    }));
    return Qe({
      getData: st,
      generatePdf: Ce,
      generateCsv: Ve,
      generateImage: ze,
      toggleTable: Pe,
      toggleLabels: Re,
      toggleTooltip: Ie
    }), (a, r) => (openBlock(), createElementBlock("div", {
      id: `stackbar_${ue.value}`,
      ref_key: "stackbarChart",
      ref: U,
      class: normalizeClass({ "vue-ui-stackbar": true, "vue-data-ui-wrapper-fullscreen": ce.value }),
      style: normalizeStyle(`background:${e.value.style.chart.backgroundColor};color:${e.value.style.chart.color};font-family:${e.value.style.fontFamily}; position: relative; ${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      renderSlot(a.$slots, "userConfig", {}, void 0, true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: fe,
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
      e.value.userOptions.show && H.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${be.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(we),
        isImaging: unref(_e2),
        uid: ue.value,
        hasTooltip: e.value.style.chart.tooltip.show && e.value.userOptions.buttons.tooltip,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: ce.value,
        chartElement: U.value,
        position: e.value.userOptions.position,
        isTooltip: w.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        onToggleFullscreen: ot,
        onGeneratePdf: unref(Ce),
        onGenerateCsv: Ve,
        onGenerateImage: unref(ze),
        onToggleTable: Pe,
        onToggleLabels: Re,
        onToggleTooltip: Ie
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "chartElement", "position", "isTooltip", "titles", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      H.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        viewBox: `0 0 ${o.value.chartWidth <= 0 ? 10 : o.value.chartWidth} ${o.value.chartHeight <= 0 ? 10 : o.value.chartHeight}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.style.chart.bars.gradient.show ? (openBlock(), createElementBlock("defs", Yt, [
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
            }, null, 8, Jt),
            createBaseVNode("stop", {
              offset: "61.8%",
              "stop-color": unref(Mt)(t.color, e.value.style.chart.bars.gradient.intensity / 100)
            }, null, 8, qt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": t.color
            }, null, 8, Zt)
          ], 8, Gt2))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.grid.x.showHorizontalLines && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
          x1: o.value.left,
          x2: o.value.right,
          y1: t.y,
          y2: t.y,
          stroke: e.value.style.chart.grid.x.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, Kt2))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.showHorizontalLines && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(c2.value.end - c2.value.start + 1, (t, l) => (openBlock(), createElementBlock("line", {
          x1: o.value.left,
          x2: o.value.right,
          y1: o.value.top + d.value * l,
          y2: o.value.top + d.value * l,
          stroke: e.value.style.chart.grid.y.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, Qt2))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.showVerticalLines && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(c2.value.end - c2.value.start + 1, (t, l) => (openBlock(), createElementBlock("line", {
          x1: o.value.left + d.value * l,
          x2: o.value.left + d.value * l,
          y1: o.value.top,
          y2: o.value.bottom,
          stroke: e.value.style.chart.grid.y.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, jt))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.showHorizontalLines && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 4 }, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
          x1: t.horizontal_x,
          x2: t.horizontal_x,
          y1: o.value.top,
          y2: o.value.bottom,
          stroke: e.value.style.chart.grid.x.axisColor,
          "stroke-width": 1,
          "stroke-linecap": "round"
        }, null, 8, ea))), 256)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("g", null, [
          e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(t.x, (i, n) => (openBlock(), createElementBlock("rect", {
            x: i,
            y: t.y[n] < 0 ? 0 : t.y[n],
            height: t.height[n] < 0 ? 1e-4 : t.height[n],
            rx: e.value.style.chart.bars.borderRadius > t.height[n] / 2 ? (t.height[n] < 0 ? 0 : t.height[n]) / 2 : e.value.style.chart.bars.borderRadius,
            width: d.value * (1 - e.value.style.chart.bars.gapRatio / 2),
            fill: e.value.style.chart.bars.gradient.show ? `url(#gradient_${t.id})` : t.color,
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": e.value.style.chart.bars.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: normalizeClass({ "vue-data-ui-bar-animated": e.value.useCssAnimation, "vue-data-ui-bar-transition": G.value })
          }, null, 10, ta))), 256)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(t.horizontal_x, (i, n) => (openBlock(), createElementBlock("rect", {
            x: i,
            y: t.horizontal_y[n] < 0 ? 0 : t.horizontal_y[n],
            width: t.horizontal_width[n] < 0 ? 1e-4 : t.horizontal_width[n],
            rx: e.value.style.chart.bars.borderRadius > t.height[n] / 2 ? (t.height[n] < 0 ? 0 : t.height[n]) / 2 : e.value.style.chart.bars.borderRadius,
            height: d.value * (1 - e.value.style.chart.bars.gapRatio / 2),
            fill: e.value.style.chart.bars.gradient.show ? `url(#gradient_${t.id})` : t.color,
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": e.value.style.chart.bars.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: normalizeClass({ "vue-data-ui-bar-animated": e.value.useCssAnimation, "vue-data-ui-bar-transition": G.value })
          }, null, 10, aa))), 256))
        ]))), 256)),
        e.value.style.chart.grid.x.showAxis ? (openBlock(), createElementBlock("line", {
          key: 5,
          x1: o.value.left,
          x2: o.value.right,
          y1: o.value.bottom,
          y2: o.value.bottom,
          stroke: e.value.style.chart.grid.x.axisColor,
          "stroke-width": e.value.style.chart.grid.x.axisThickness,
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, null, 8, la)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.showAxis && !e.value.style.chart.bars.distributed ? (openBlock(), createElementBlock("line", {
          key: 6,
          x1: o.value.left,
          x2: o.value.left,
          y1: o.value.top,
          y2: o.value.bottom,
          stroke: e.value.style.chart.grid.y.axisColor,
          "stroke-width": e.value.style.chart.grid.y.axisThickness,
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, null, 8, ra)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.axisName.show && e.value.style.chart.grid.x.axisName.text ? (openBlock(), createElementBlock("text", {
          key: 7,
          x: o.value.left + o.value.width / 2,
          y: o.value.chartHeight + e.value.style.chart.grid.x.axisName.offsetY,
          "font-size": e.value.style.chart.grid.x.axisName.fontSize,
          fill: e.value.style.chart.grid.x.axisName.color,
          "font-weight": e.value.style.chart.grid.x.axisName.bold ? "bold" : "normal",
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.grid.x.axisName.text), 9, oa)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.axisName.show && e.value.style.chart.grid.y.axisName.text ? (openBlock(), createElementBlock("text", {
          key: 8,
          transform: `translate(${e.value.style.chart.grid.y.axisName.fontSize + e.value.style.chart.grid.y.axisName.offsetX}, ${o.value.top + o.value.height / 2}) rotate(-90)`,
          "font-size": e.value.style.chart.grid.y.axisName.fontSize,
          fill: e.value.style.chart.grid.y.axisName.color,
          "font-weight": e.value.style.chart.grid.y.axisName.bold ? "bold" : "normal",
          "text-anchor": "middle"
        }, toDisplayString(e.value.style.chart.grid.y.axisName.text), 9, sa)) : createCommentVNode("", true),
        w.value.dataLabels.show && e.value.orientation === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.x, (i, n) => (openBlock(), createElementBlock("text", {
              x: i + d.value * (1 - e.value.style.chart.bars.gapRatio / 2) / 2,
              y: t.y[n] + t.height[n] / 2 + e.value.style.chart.bars.dataLabels.fontSize / 3,
              "font-size": e.value.style.chart.bars.dataLabels.fontSize,
              fill: e.value.style.chart.bars.dataLabels.adaptColorToBackground ? unref(xt)(t.color) : e.value.style.chart.bars.dataLabels.color,
              "font-weight": e.value.style.chart.bars.dataLabels.bold ? "bold" : "normal",
              "text-anchor": "middle"
            }, toDisplayString(e.value.style.chart.bars.showDistributedPercentage && e.value.style.chart.bars.distributed ? Te(t.proportions[n] * 100, t, l, n) : ae(t.series[n], t, l, n, t.signedSeries[n])), 9, ia))), 256))
          ]))), 256)),
          e.value.style.chart.bars.totalValues.show && m.value.length > 1 ? (openBlock(), createElementBlock("g", ua, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($e.value, (t, l) => (openBlock(), createElementBlock("text", {
              x: o.value.left + d.value * l + d.value / 2,
              y: o.value.top - e.value.style.chart.bars.totalValues.fontSize / 3,
              "text-anchor": "middle",
              "font-size": e.value.style.chart.bars.totalValues.fontSize,
              "font-weight": e.value.style.chart.bars.totalValues.bold ? "bold" : "normal",
              fill: e.value.style.chart.bars.totalValues.color
            }, toDisplayString(ae(t.value, t, l, t.sign)), 9, na))), 256))
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        w.value.dataLabels.show && e.value.orientation === "horizontal" ? (openBlock(), createElementBlock(Fragment, { key: 10 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (t, l) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.horizontal_x, (i, n) => (openBlock(), createElementBlock("text", {
              x: i + (t.horizontal_width[n] < 0 ? 1e-4 : t.horizontal_width[n]) / 2,
              y: t.horizontal_y[n] + d.value * (1 - e.value.style.chart.bars.gapRatio / 2) / 2 + e.value.style.chart.bars.dataLabels.fontSize / 3,
              "font-size": e.value.style.chart.bars.dataLabels.fontSize,
              fill: e.value.style.chart.bars.dataLabels.adaptColorToBackground ? unref(xt)(t.color) : e.value.style.chart.bars.dataLabels.color,
              "font-weight": e.value.style.chart.bars.dataLabels.bold ? "bold" : "normal",
              "text-anchor": "middle"
            }, toDisplayString(e.value.style.chart.bars.showDistributedPercentage && e.value.style.chart.bars.distributed ? Te(t.proportions[n] * 100, t, l, n) : ae(t.series[n], t, l, n, t.signedSeries[n])), 9, ca))), 256))
          ]))), 256)),
          e.value.style.chart.bars.totalValues.show && m.value.length > 1 ? (openBlock(), createElementBlock("g", va, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($e.value, (t, l) => (openBlock(), createElementBlock("text", {
              x: o.value.right + e.value.style.chart.bars.totalValues.fontSize / 3,
              y: o.value.top + d.value * l + d.value / 2,
              "text-anchor": "start",
              "font-size": e.value.style.chart.bars.totalValues.fontSize,
              "font-weight": e.value.style.chart.bars.totalValues.bold ? "bold" : "normal",
              fill: e.value.style.chart.bars.totalValues.color
            }, toDisplayString(ae(t.value, t, l, t.sign)), 9, ha))), 256))
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.axisLabels.show && !e.value.style.chart.bars.distributed && e.value.orientation === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 11 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
            x1: o.value.left,
            x2: o.value.left - 6,
            y1: t.y,
            y2: t.y,
            stroke: e.value.style.chart.grid.x.axisColor,
            "stroke-width": 1
          }, null, 8, da))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("text", {
            x: t.x,
            y: t.y + e.value.style.chart.grid.y.axisLabels.fontSize / 3,
            "font-size": e.value.style.chart.grid.y.axisLabels.fontSize,
            "font-weight": e.value.style.chart.grid.y.axisLabels.bold ? "bold" : "normal",
            fill: e.value.style.chart.grid.y.axisLabels.color,
            "text-anchor": "end"
          }, toDisplayString(unref(Gt)({
            p: e.value.style.chart.bars.dataLabels.prefix,
            v: t.value,
            s: e.value.style.chart.bars.dataLabels.suffix,
            r: e.value.style.chart.grid.y.axisLabels.rounding
          })), 9, ya))), 256))
        ], 64)) : createCommentVNode("", true),
        e.value.style.chart.grid.y.axisLabels.show && !e.value.style.chart.bars.distributed && e.value.orientation === "horizontal" ? (openBlock(), createElementBlock(Fragment, { key: 12 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("line", {
            x1: t.horizontal_x,
            x2: t.horizontal_x,
            y1: o.value.bottom,
            y2: o.value.bottom + 6,
            stroke: e.value.style.chart.grid.x.axisColor,
            "stroke-width": 1,
            "stroke-linecap": "round"
          }, null, 8, ga))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (t, l) => (openBlock(), createElementBlock("text", {
            "font-size": e.value.style.chart.grid.x.timeLabels.fontSize,
            "font-weight": e.value.style.chart.grid.y.axisLabels.bold ? "bold" : "normal",
            fill: e.value.style.chart.grid.y.axisLabels.color,
            "text-anchor": e.value.style.chart.grid.x.timeLabels.rotation > 0 ? "start" : e.value.style.chart.grid.x.timeLabels.rotation < 0 ? "end" : "middle",
            transform: `translate(${t.horizontal_x}, ${o.value.bottom + e.value.style.chart.grid.x.timeLabels.fontSize * 1.3 + e.value.style.chart.grid.x.timeLabels.offsetY}), rotate(${e.value.style.chart.grid.x.timeLabels.rotation})`
          }, toDisplayString(unref(Gt)({
            p: e.value.style.chart.bars.dataLabels.prefix,
            v: t.value,
            s: e.value.style.chart.bars.dataLabels.suffix,
            r: e.value.style.chart.grid.y.axisLabels.rounding
          })), 9, ba))), 256))
        ], 64)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.timeLabels.show && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 13 }, renderList(q.value, (t, l) => (openBlock(), createElementBlock("text", {
          "text-anchor": e.value.style.chart.grid.x.timeLabels.rotation > 0 ? "start" : e.value.style.chart.grid.x.timeLabels.rotation < 0 ? "end" : "middle",
          "font-size": e.value.style.chart.grid.x.timeLabels.fontSize,
          "font-weight": e.value.style.chart.grid.x.timeLabels.bold ? "bold" : "normal",
          fill: e.value.style.chart.grid.x.timeLabels.color,
          transform: `translate(${o.value.left + d.value * l + d.value / 2}, ${o.value.bottom + e.value.style.chart.grid.x.timeLabels.fontSize * 1.3 + e.value.style.chart.grid.x.timeLabels.offsetY}), rotate(${e.value.style.chart.grid.x.timeLabels.rotation})`
        }, toDisplayString(t), 9, fa))), 256)) : createCommentVNode("", true),
        e.value.style.chart.grid.x.timeLabels.show && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 14 }, renderList(q.value, (t, l) => (openBlock(), createElementBlock("text", {
          "text-anchor": "end",
          "font-size": e.value.style.chart.grid.y.axisLabels.fontSize,
          "font-weight": e.value.style.chart.grid.y.axisLabels.bold ? "bold" : "normal",
          fill: e.value.style.chart.grid.y.axisLabels.color,
          x: o.value.left - 8,
          y: o.value.top + d.value * l + d.value / 2 + e.value.style.chart.grid.y.axisLabels.fontSize / 3
        }, toDisplayString(t), 9, ma))), 256)) : createCommentVNode("", true),
        w.value.showTooltip && e.value.orientation === "vertical" ? (openBlock(true), createElementBlock(Fragment, { key: 15 }, renderList(c2.value.end - c2.value.start, (t, l) => (openBlock(), createElementBlock("rect", {
          x: o.value.left + l * d.value,
          y: o.value.top,
          width: d.value,
          height: o.value.height < 0 ? 0 : o.value.height,
          onClick: (i) => Ne(l),
          onMouseenter: (i) => Oe(l),
          onMouseleave: r[0] || (r[0] = (i) => {
            Y.value = null, j2.value = false;
          }),
          fill: l === Y.value ? e.value.style.chart.highlighter.color : "transparent",
          style: normalizeStyle({ opacity: e.value.style.chart.highlighter.opacity / 100 })
        }, null, 44, pa))), 256)) : createCommentVNode("", true),
        w.value.showTooltip && e.value.orientation === "horizontal" ? (openBlock(true), createElementBlock(Fragment, { key: 16 }, renderList(c2.value.end - c2.value.start, (t, l) => (openBlock(), createElementBlock("rect", {
          x: o.value.left,
          y: o.value.top + l * d.value,
          width: o.value.width < 0 ? 0 : o.value.width,
          height: d.value,
          onClick: (i) => Ne(l),
          onMouseenter: (i) => Oe(l),
          onMouseleave: r[1] || (r[1] = (i) => {
            Y.value = null, j2.value = false;
          }),
          fill: l === Y.value ? e.value.style.chart.highlighter.color : "transparent",
          style: normalizeStyle({ opacity: e.value.style.chart.highlighter.opacity / 100 })
        }, null, 44, xa))), 256)) : createCommentVNode("", true),
        renderSlot(a.$slots, "svg", normalizeProps(guardReactiveProps({ ...o.value })), void 0, true)
      ], 12, Ut)) : createCommentVNode("", true),
      a.$slots.watermark ? (openBlock(), createElementBlock("div", ka, [
        renderSlot(a.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(we) || unref(_e2) })), void 0, true)
      ])) : createCommentVNode("", true),
      H.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        ref: pe,
        style: normalizeStyle(`width:100%;background:${e.value.style.chart.backgroundColor}`),
        "data-html2canvas-ignore": ""
      }, [
        e.value.style.chart.zoom.show && R3.value > 1 ? (openBlock(), createBlock(_e, {
          key: `slicer_${xe.value}`,
          background: e.value.style.chart.zoom.color,
          borderColor: e.value.style.chart.backgroundColor,
          fontSize: e.value.style.chart.zoom.fontSize,
          useResetSlot: e.value.style.chart.zoom.useResetSlot,
          labelLeft: e.value.style.chart.grid.x.timeLabels.values[c2.value.start] ? e.value.style.chart.grid.x.timeLabels.values[c2.value.start] : "",
          labelRight: e.value.style.chart.grid.x.timeLabels.values[c2.value.end - 1] ? e.value.style.chart.grid.x.timeLabels.values[c2.value.end - 1] : "",
          textColor: e.value.style.chart.color,
          inputColor: e.value.style.chart.zoom.color,
          selectColor: e.value.style.chart.zoom.highlightColor,
          max: Math.max(...de.dataset.map((t) => t.series.length)),
          min: 0,
          valueStart: c2.value.start,
          valueEnd: c2.value.end,
          start: c2.value.start,
          "onUpdate:start": r[2] || (r[2] = (t) => c2.value.start = t),
          end: c2.value.end,
          "onUpdate:end": r[3] || (r[3] = (t) => c2.value.end = t),
          onReset: Me
        }, {
          "reset-action": withCtx(({ reset: t }) => [
            renderSlot(a.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: t })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"])) : createCommentVNode("", true)
      ], 4),
      createVNode(E, {
        show: w.value.showTooltip && j2.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: U.value,
        content: ne.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(a.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ge.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(a.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ge.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: me
      }, [
        e.value.style.chart.legend.show && H.value ? (openBlock(), createBlock(C, {
          key: 0,
          legendSet: Ae.value,
          config: ut.value,
          onClickMarker: r[4] || (r[4] = ({ legend: t }) => t.segregate())
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              onClick: (l) => t.segregate(),
              style: normalizeStyle(`opacity:${L.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name), 13, wa)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(a.$slots, "legend", {
          key: 1,
          legend: Ae.value
        }, void 0, true)
      ], 512),
      c2.value.end - c2.value.start < 200 ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: w.value.showTable,
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
            onClose: r[5] || (r[5] = (t) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createBaseVNode("div", { innerHTML: t }, null, 8, _a)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(isNaN(Number(t)) ? t : unref(Gt)({
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
    ], 14, Xt2));
  }
};
var Da = s(Ca, [["__scopeId", "data-v-a4f47dd7"]]);
export {
  Da as default
};
//# sourceMappingURL=vue-ui-stackbar-DNROvZII-LRAJNUVZ.js.map
