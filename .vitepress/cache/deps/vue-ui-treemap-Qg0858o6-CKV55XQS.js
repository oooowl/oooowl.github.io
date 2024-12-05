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
  Kt,
  Lt,
  Mt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  et,
  j,
  nr,
  oe,
  or,
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
  nextTick,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-treemap-Qg0858o6.js
function De(a, i) {
  const s2 = a.length;
  if (s2 === 0)
    throw new Error(`Max aspect ratio cannot be computed: ${a} is an empty array`);
  {
    let n = 1 / 0, r = -1 / 0, c2 = 0;
    for (let h = 0; h < s2; h += 1) {
      const v = a[h].normalizedValue;
      v < n && (n = v), v > r && (r = v), c2 += v;
    }
    return Math.max(
      i ** 2 * r / c2 ** 2,
      c2 ** 2 / (i ** 2 * n)
    );
  }
}
function Ae(a) {
  const { xOffset: i, yOffset: s2, width: n, height: r } = a;
  return {
    x0: i,
    y0: s2,
    x1: i + n,
    y1: s2 + r
  };
}
function xt2(a, i, s2) {
  if (a.length === 0)
    return true;
  {
    const n = a.concat(i), r = De(
      a,
      s2
    ), c2 = De(n, s2);
    return r >= c2;
  }
}
function $t2(a) {
  const i = [], s2 = a.length;
  for (let n = 0; n < s2; n += 1) {
    const r = a[n], c2 = r.length;
    for (let d = 0; d < c2; d += 1)
      i.push(r[d]);
  }
  return i;
}
function Tt(a, i) {
  const s2 = {
    ...i,
    children: a
  };
  return Ve(s2);
}
function _t(a) {
  return (a.x1 - a.x0) * (a.y1 - a.y0);
}
function Me(a, i) {
  const { width: s2, height: n, xOffset: r, yOffset: c2 } = ue(i), d = a.length, h = a.map((p2) => p2.normalizedValue || 0).reduce((p2, $) => p2 + $, 0), v = h / n, S = h / s2;
  let w = r, N = c2;
  const f = [];
  if (s2 >= n) {
    for (let p2 = 0; p2 < d; p2 += 1) {
      const $ = a[p2], z = N + $.normalizedValue / v, R3 = {
        x0: w,
        y0: N,
        x1: w + v,
        y1: z
      }, I = Object.assign({}, $, R3);
      N = z, f.push(I);
    }
    return f;
  } else {
    for (let p2 = 0; p2 < d; p2 += 1) {
      const $ = a[p2], z = w + $.normalizedValue / S, R3 = {
        x0: w,
        y0: N,
        x1: z,
        y1: N + S
      }, I = Object.assign({}, $, R3);
      w = z, f.push(I);
    }
    return f;
  }
}
function Ot2(a) {
  const i = ue(a), s2 = i.width, n = i.height;
  return Math.min(s2, n);
}
function St(a, i) {
  const s2 = a.length, n = a.map((v) => v.value ?? 0).reduce((v, S) => v + S, 0), r = i / n, c2 = [];
  let d, h;
  for (let v = 0; v < s2; v += 1)
    h = a[v], d = Object.assign({}, h, {
      normalizedValue: h.value * (r || 0)
    }), c2.push(d);
  return c2;
}
function ue(a) {
  const { x0: i, y0: s2, x1: n, y1: r } = a;
  return {
    xOffset: i,
    yOffset: s2,
    width: n - i,
    height: r - s2
  };
}
function Nt2(a, i, s2, n) {
  let r = a, c2 = i, d = s2, h = n;
  for (; ; ) {
    const v = r.length;
    if (v === 0) {
      const f = Me(c2, d);
      return h.concat(f);
    }
    const S = Ot2(d), w = r[0], N = r.slice(1, v);
    if (xt2(c2, w, S)) {
      const f = c2.concat(w);
      r = N, c2 = f, d = d, h = h;
    } else {
      const f = c2.length;
      let p2 = 0;
      for (let I = 0; I < f; I += 1)
        p2 += c2[I].normalizedValue;
      const $ = zt(d, p2), z = Me(c2, d), R3 = h.concat(z);
      r = r, c2 = [], d = $, h = R3;
    }
  }
}
function Ve(a) {
  if (typeof a.children > "u" || !a.children.length)
    return [a];
  {
    const i = St(
      a.children,
      _t(a)
    ), s2 = Nt2(i, [], a, []), n = s2.length, r = [];
    for (let d = 0; d < n; d += 1)
      r.push(Ve(s2[d]));
    return $t2(r);
  }
}
function zt(a, i) {
  const { width: s2, height: n, xOffset: r, yOffset: c2 } = ue(a);
  if (s2 >= n) {
    const d = i / n, h = s2 - d, v = {
      xOffset: r + d,
      yOffset: c2,
      width: h,
      height: n
    };
    return Ae(v);
  } else {
    const d = i / s2, h = n - d, v = {
      xOffset: r,
      yOffset: c2 + d,
      width: s2,
      height: h
    };
    return Ae(v);
  }
}
var It = (a) => (pushScopeId("data-v-f7f2df00"), a = a(), popScopeId(), a);
var Pt = ["id"];
var Ft = ["xmlns", "viewBox"];
var Lt2 = { key: 0 };
var Rt = ["id"];
var Dt = ["stop-color"];
var At = ["stop-color"];
var Mt2 = ["x", "y", "height", "width", "fill", "rx", "stroke", "stroke-width", "onClick", "onMouseenter"];
var Vt = ["x", "y", "height", "width"];
var Bt = {
  style: { width: "100%", height: "100%" },
  class: "vue-ui-treemap-cell"
};
var Wt = It(() => createBaseVNode("br", null, null, -1));
var Ht2 = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Et = ["onClick"];
var Ut = { key: 0 };
var Gt2 = { key: 1 };
var Xt2 = ["innerHTML"];
var qt = {
  __name: "vue-ui-treemap",
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
  emits: ["selectLegend", "selectDatapoint"],
  setup(a, { expose: i, emit: s2 }) {
    const n = a, { vue_ui_treemap: r } = oe(), c2 = computed(() => !!n.dataset && n.dataset.length), d = computed(() => /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), h = ref(Lt()), v = ref(false), S = ref(""), w = ref(false), N = ref(0), f = ref([]), p2 = ref(null), $ = ref(null), z = ref(null), R3 = ref(0), I = ref(0), ie2 = ref(0), e = computed({
      get: () => ce(),
      set: (t) => t
    });
    function ce() {
      const t = c({
        userConfig: n.config,
        defaultConfig: r
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_treemap[t.theme] || n.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => n.config, (t) => {
      e.value = ce(), R3.value += 1, I.value += 1, ie2.value += 1;
    }, { deep: true });
    const { isPrinting: de, isImaging: ve, generatePdf: he, generateImage: fe } = se({
      elementId: `treemap_${h.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-treemap"
    }), Q = computed(() => or(e.value.customPalette)), D = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), A = ref({
      height: e.value.style.chart.height,
      width: e.value.style.chart.width
    }), W2 = computed(() => ({
      bottom: A.value.height - e.value.style.chart.padding.bottom,
      height: A.value.height - e.value.style.chart.padding.top - e.value.style.chart.padding.bottom,
      left: e.value.style.chart.padding.left,
      right: A.value.width - e.value.style.chart.padding.right,
      top: e.value.style.chart.padding.top,
      vbHeight: A.value.height,
      vbWidth: A.value.width,
      width: A.value.width - e.value.style.chart.padding.left - e.value.style.chart.padding.right
    }));
    function pe(t) {
      t.forEach((o, l) => {
        o.id = Lt(), o.color = j(o.color) || Q.value[l] || et[l] || et[l % et.length], o.children && (o.children.forEach((u) => {
          u.parentId = o.id, u.color = o.color;
        }), pe(o.children));
      });
    }
    const H = ref(n.dataset), ee = ref(null);
    onMounted(() => {
      Be();
    });
    function Be() {
      if (Xt(n.dataset) && Kt({
        componentName: "VueUiTreemap",
        type: "dataset"
      }), pe(H.value), e.value.responsive) {
        const t = O(() => {
          const { width: o, height: l } = M({
            chart: p2.value,
            title: e.value.style.chart.title.text ? $.value : null,
            legend: e.value.style.chart.legend.show ? z.value : null
          });
          A.value.width = o, A.value.height = l;
        });
        ee.value = new ResizeObserver(t), ee.value.observe(p2.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      ee.value && ee.value.disconnect();
    });
    const ne = ref(H.value), Z = computed(() => ne.value.map((t, o) => ({
      ...t,
      color: j(t.color) || Q.value[o] || et[o] || et[o % et.length]
    })).filter((t) => !f.value.includes(t.id))), U = computed(() => H.value.filter((t) => !f.value.includes(t.id)).map((t) => t.value || 0).reduce((t, o) => t + o, 0)), ge = computed({
      get() {
        let t = [...Z.value];
        return e.value.style.chart.layout.sorted && (t = [...Z.value].sort((o, l) => l.value - o.value)), t.map((o) => ({
          ...o
        }));
      },
      set(t) {
        return t;
      }
    });
    function ye(t, o) {
      return t.value / o;
    }
    function We(t, o, l) {
      const u = e.value.style.chart.layout.rects.colorRatio - ye(o, l);
      return Mt(t, u < 0 ? 0 : u);
    }
    function me(t, o, l, u) {
      return t.map((g, M2) => {
        const le = We(j(o) || Q.value[M2] || et[M2] || et[M2 % et.length], g, u), qe = ye(g, u);
        return {
          ...g,
          color: le,
          proportion: qe,
          parentName: l,
          children: g.children ? me(g.children, le, g.name, u) : void 0
        };
      });
    }
    const J = computed(() => Tt(
      ge.value.map((t, o) => {
        const l = t.children ? t.children.reduce((u, g) => u + g.value, 0) : t.value;
        return {
          value: t.value,
          id: t.id,
          children: t.children ? me(t.children.sort((u, g) => g.value - u.value), t.color, t.name, l) : void 0,
          color: t.color,
          name: t.name
        };
      }),
      { x0: W2.value.left * 2, y0: W2.value.top, x1: W2.value.width, y1: W2.value.height }
    ));
    function be({ y0: t, y1: o }) {
      return o - t <= 0 ? 1e-4 : o - t;
    }
    function we({ x0: t, x1: o }) {
      return o - t <= 0 ? 1e-4 : o - t;
    }
    function E2(t) {
      const o = e.value.style.chart.layout.labels.fontSize * (t.proportion * 2 > 1 ? 1 : t.proportion * 2);
      return o < e.value.style.chart.layout.labels.minFontSize ? e.value.style.chart.layout.labels.minFontSize : o;
    }
    function He(t) {
      w.value = t, N.value += 1;
    }
    const G = computed(() => ({
      startX: 0,
      startY: 0,
      width: W2.value.vbWidth,
      height: W2.value.vbHeight
    })), P = ref(false);
    function se2(t, o = H.value) {
      for (const l of o) {
        if (l.id === t)
          return l;
        if (l.children) {
          const u = se2(t, l.children);
          if (u)
            return u;
        }
      }
      return null;
    }
    function Ee(t) {
      if (P.value)
        s2("selectDatapoint", void 0), ne.value = H.value;
      else {
        if (s2("selectDatapoint", t), !se2(t.parentId))
          return;
        ne.value = [se2(t.parentId)];
      }
      P.value = !P.value;
    }
    const F = ref(null), Ce = computed(() => H.value.map((t, o) => ({
      ...t,
      color: j(t.color) || Q.value[o] || et[o] || et[o % et.length],
      shape: "square"
    })).sort((t, o) => o.value - t.value).map((t, o) => ({
      ...t,
      proportion: t.value / H.value.map((l) => l.value).reduce((l, u) => l + u, 0),
      opacity: f.value.includes(t.id) ? 0.5 : 1
    }))), Ue = computed(() => ({
      cy: "treemap-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    }));
    function ke(t) {
      P.value = false, F.value = null, f.value.includes(t.id) ? f.value = f.value.filter((o) => o !== t.id) : f.value.length < n.dataset.length - 1 && f.value.push(t.id), s2("selectLegend", ge.value);
    }
    const re = ref(null);
    function Ge2({ datapoint: t, seriesIndex: o }) {
      F.value = t, re.value = { datapoint: t, seriesIndex: o, config: e.value, series: Z.value };
      const l = e.value.style.chart.tooltip.customFormat;
      if (Ht(l) && $t(() => l({
        seriesIndex: o,
        datapoint: t,
        series: Z.value,
        config: e.value
      })))
        S.value = l({
          seriesIndex: o,
          datapoint: t,
          series: Z.value,
          config: e.value
        });
      else {
        let u = "";
        u += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`, u += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" stroke="none" fill="${t.color}"/></svg>`, u += `<b>${nr(
          e.value.style.chart.layout.labels.formatter,
          t.value,
          Gt({
            p: e.value.style.chart.layout.labels.prefix,
            v: t.value,
            s: e.value.style.chart.layout.labels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: t, seriesIndex: o }
        )}</b>`, S.value = `<div>${u}</div>`;
      }
      v.value = true;
    }
    const L = computed(() => {
      const t = J.value.map((l) => ({
        name: l.name,
        color: l.color
      })), o = J.value.map((l) => l.value);
      return { head: t, body: o };
    });
    function xe() {
      nextTick(() => {
        const t = L.value.head.map((u, g) => [[
          u.name
        ], [L.value.body[g]], [isNaN(L.value.body[g] / U.value) ? "-" : L.value.body[g] / U.value * 100]]), o = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), l = Nt(o);
        Ot({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-treemap" });
      });
    }
    const te = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ], o = L.value.head.map((g, M2) => {
        const le = nr(
          e.value.style.chart.layout.labels.formatter,
          L.value.body[M2],
          Gt({
            p: e.value.style.chart.layout.labels.prefix,
            v: L.value.body[M2],
            s: e.value.style.chart.layout.labels.suffix,
            r: e.value.table.td.roundingValue
          })
        );
        return [
          {
            color: g.color,
            name: g.name,
            shape: "square"
          },
          le,
          isNaN(L.value.body[M2] / U.value) ? "-" : Gt({
            v: L.value.body[M2] / U.value * 100,
            s: "%",
            r: e.value.table.td.roundingPercentage
          })
        ];
      }), l = {
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
      return {
        colNames: [
          e.value.table.columnNames.series,
          e.value.table.columnNames.value
        ],
        head: t,
        body: o,
        config: l
      };
    });
    function Xe() {
      return J.value;
    }
    function $e() {
      D.value.showTable = !D.value.showTable;
    }
    function Te() {
      D.value.showTooltip = !D.value.showTooltip;
    }
    return i({
      getData: Xe,
      generateCsv: xe,
      generateImage: fe,
      generatePdf: he,
      toggleTable: $e,
      toggleTooltip: Te
    }), (t, o) => (openBlock(), createElementBlock("div", {
      ref_key: "treemapChart",
      ref: p2,
      class: normalizeClass(`vue-ui-treemap ${w.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height: 100%;" : ""} text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: `treemap_${h.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: $,
        style: normalizeStyle(`width:100%;background:${e.value.style.chart.backgroundColor};padding-bottom:6px`)
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${R3.value}`,
          config: {
            title: {
              cy: "treemap-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "treemap-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 4)) : createCommentVNode("", true),
      e.value.userOptions.show && c2.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${N.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(de),
        isImaging: unref(ve),
        uid: h.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: w.value,
        isTooltip: D.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: p2.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: He,
        onGeneratePdf: unref(he),
        onGenerateCsv: xe,
        onGenerateImage: unref(fe),
        onToggleTable: $e,
        onToggleTooltip: Te
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
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: u }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: u })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      c2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": w.value, "vue-data-ui-fulscreen--off": !w.value, "vue-data-ui-zoom-plus": !P.value, "vue-data-ui-zoom-minus": P.value }),
        viewBox: `${G.value.startX} ${G.value.startY} ${G.value.width <= 0 ? 10 : G.value.width} ${G.value.height <= 0 ? 10 : G.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: hidden; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(J.value, (l, u) => (openBlock(), createElementBlock("g", null, [
          e.value.style.chart.layout.rects.gradient.show ? (openBlock(), createElementBlock("defs", Lt2, [
            createBaseVNode("radialGradient", {
              id: `tgrad_${l.id}`,
              gradientTransform: "translate(-1, -1.000001) scale(2, 2)"
            }, [
              createBaseVNode("stop", {
                offset: "18%",
                "stop-color": l.color
              }, null, 8, Dt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": unref(Mt)(l.color, e.value.style.chart.layout.rects.gradient.intensity / 100)
              }, null, 8, At)
            ], 8, Rt)
          ])) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(J.value, (l, u) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: l.x0,
            y: l.y0,
            height: be(l),
            width: we(l),
            fill: d.value ? l.color : e.value.style.chart.layout.rects.gradient.show ? `url(#tgrad_${l.id})` : l.color,
            rx: e.value.style.chart.layout.rects.borderRadius,
            stroke: F.value && F.value.id === l.id ? e.value.style.chart.layout.rects.selected.stroke : e.value.style.chart.layout.rects.stroke,
            "stroke-width": F.value && F.value.id === l.id ? e.value.style.chart.layout.rects.selected.strokeWidth : e.value.style.chart.layout.rects.strokeWidth,
            onClick: (g) => Ee(l),
            onMouseenter: () => Ge2({
              datapoint: l,
              seriesIndex: u
            }),
            onMouseleave: o[0] || (o[0] = (g) => {
              F.value = null, v.value = false;
            }),
            style: normalizeStyle(`opacity:${F.value ? F.value.id === l.id ? 1 : e.value.style.chart.layout.rects.selected.unselectedOpacity : 1}`),
            class: "vue-ui-treemap-rect"
          }, null, 44, Mt2),
          (openBlock(), createElementBlock("foreignObject", {
            x: l.x0,
            y: l.y0,
            height: be(l),
            width: we(l),
            class: "vue-ui-treemap-cell-foreignObject"
          }, [
            createBaseVNode("div", Bt, [
              e.value.style.chart.layout.labels.showDefaultLabels && (l.proportion > e.value.style.chart.layout.labels.hideUnderProportion || P.value) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "vue-ui-treemap-cell-default",
                style: normalizeStyle(`width:calc(100% - ${E2(l) / 1.5}px);text-align:left;line-height:${E2(l) < 14 ? 14 : E2(l)}px;padding:${E2(l) / 3}px; color:${unref(xt)(l.color)}`)
              }, [
                createBaseVNode("span", {
                  style: normalizeStyle(`width:100%;font-size:${E2(l)}px;`)
                }, toDisplayString(l.name), 5),
                Wt,
                createBaseVNode("span", {
                  style: normalizeStyle(`width:100%;font-size:${E2(l)}px;`)
                }, toDisplayString(unref(nr)(
                  e.value.style.chart.layout.labels.formatter,
                  l.value,
                  unref(Gt)({
                    p: e.value.style.chart.layout.labels.prefix,
                    v: l.value,
                    s: e.value.style.chart.layout.labels.suffix,
                    r: e.value.style.chart.layout.labels.rounding
                  }),
                  { datapoint: l }
                )), 5)
              ], 4)) : createCommentVNode("", true),
              renderSlot(t.$slots, "rect", normalizeProps(guardReactiveProps({
                rect: l,
                shouldShow: l.proportion > e.value.style.chart.layout.labels.hideUnderProportion || P.value,
                fontSize: E2(l),
                isZoom: P.value,
                textColor: unref(xt)(l.color)
              })), void 0, true)
            ])
          ], 8, Vt))
        ]))), 256)),
        renderSlot(t.$slots, "svg", normalizeProps(guardReactiveProps({ svg: W2.value, isZoom: P.value, rect: F.value, config: e.value })), void 0, true)
      ], 14, Ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ht2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(de) || unref(ve) })), void 0, true)
      ])) : createCommentVNode("", true),
      c2.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "treemap",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            treemap: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: z
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${ie2.value}`,
          legendSet: Ce.value,
          config: Ue.value,
          id: `treemap_legend_${h.value}`,
          onClickMarker: o[1] || (o[1] = ({ legend: l }) => ke(l))
        }, {
          item: withCtx(({ legend: l, index: u }) => [
            createBaseVNode("div", {
              onClick: (g) => ke(l),
              style: normalizeStyle(`opacity:${f.value.includes(l.id) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(l.name) + ": " + toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.formatter,
                l.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.suffix,
                  r: e.value.style.chart.legend.roundingValue
                }),
                { datapoint: l }
              )) + " ", 1),
              f.value.includes(l.id) ? (openBlock(), createElementBlock("span", Gt2, " ( - % ) ")) : (openBlock(), createElementBlock("span", Ut, " (" + toDisplayString(isNaN(l.value / U.value) ? "-" : (l.value / U.value * 100).toFixed(e.value.style.chart.legend.roundingPercentage)) + "%) ", 1))
            ], 12, Et)
          ]),
          _: 1
        }, 8, ["legendSet", "config", "id"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: Ce.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: D.value.showTooltip && v.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: p2.value,
        content: S.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...re.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...re.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      c2.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: D.value.showTable,
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
          (openBlock(), createBlock(W, {
            key: `table_${I.value}`,
            colNames: te.value.colNames,
            head: te.value.head,
            body: te.value.body,
            config: te.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[2] || (o[2] = (l) => D.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Xt2)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Pt));
  }
};
var rl = s(qt, [["__scopeId", "data-v-f7f2df00"]]);
export {
  rl as default
};
//# sourceMappingURL=vue-ui-treemap-Qg0858o6-CKV55XQS.js.map
