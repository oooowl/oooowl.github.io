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
  He,
  Ht,
  It,
  Jt,
  Kt,
  Nt,
  Q,
  R as R2,
  Vt,
  Xt,
  _t,
  ir,
  jt,
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

// node_modules/vue-data-ui/dist/vue-ui-treemap-Bn5JU5BI.js
function Be(a, i) {
  const s2 = a.length;
  if (s2 === 0)
    throw new Error(`Max aspect ratio cannot be computed: ${a} is an empty array`);
  {
    let n = 1 / 0, u = -1 / 0, c2 = 0;
    for (let h = 0; h < s2; h += 1) {
      const v = a[h].normalizedValue;
      v < n && (n = v), v > u && (u = v), c2 += v;
    }
    return Math.max(
      i ** 2 * u / c2 ** 2,
      c2 ** 2 / (i ** 2 * n)
    );
  }
}
function We(a) {
  const { xOffset: i, yOffset: s2, width: n, height: u } = a;
  return {
    x0: i,
    y0: s2,
    x1: i + n,
    y1: s2 + u
  };
}
function Nt2(a, i, s2) {
  if (a.length === 0)
    return true;
  {
    const n = a.concat(i), u = Be(
      a,
      s2
    ), c2 = Be(n, s2);
    return u >= c2;
  }
}
function zt(a) {
  const i = [], s2 = a.length;
  for (let n = 0; n < s2; n += 1) {
    const u = a[n], c2 = u.length;
    for (let d = 0; d < c2; d += 1)
      i.push(u[d]);
  }
  return i;
}
function Pt(a, i) {
  const s2 = {
    ...i,
    children: a
  };
  return Ee(s2);
}
function At(a) {
  return (a.x1 - a.x0) * (a.y1 - a.y0);
}
function He2(a, i) {
  const { width: s2, height: n, xOffset: u, yOffset: c2 } = ce(i), d = a.length, h = a.map((p2) => p2.normalizedValue || 0).reduce((p2, _) => p2 + _, 0), v = h / n, N = h / s2;
  let C2 = u, z = c2;
  const y = [];
  if (s2 >= n) {
    for (let p2 = 0; p2 < d; p2 += 1) {
      const _ = a[p2], P = z + _.normalizedValue / v, R3 = {
        x0: C2,
        y0: z,
        x1: C2 + v,
        y1: P
      }, A = Object.assign({}, _, R3);
      z = P, y.push(A);
    }
    return y;
  } else {
    for (let p2 = 0; p2 < d; p2 += 1) {
      const _ = a[p2], P = C2 + _.normalizedValue / N, R3 = {
        x0: C2,
        y0: z,
        x1: P,
        y1: z + N
      }, A = Object.assign({}, _, R3);
      C2 = P, y.push(A);
    }
    return y;
  }
}
function It2(a) {
  const i = ce(a), s2 = i.width, n = i.height;
  return Math.min(s2, n);
}
function Ft(a, i) {
  const s2 = a.length, n = a.map((v) => v.value ?? 0).reduce((v, N) => v + N, 0), u = i / n, c2 = [];
  let d, h;
  for (let v = 0; v < s2; v += 1)
    h = a[v], d = Object.assign({}, h, {
      normalizedValue: h.value * (u || 0)
    }), c2.push(d);
  return c2;
}
function ce(a) {
  const { x0: i, y0: s2, x1: n, y1: u } = a;
  return {
    xOffset: i,
    yOffset: s2,
    width: n - i,
    height: u - s2
  };
}
function Lt(a, i, s2, n) {
  let u = a, c2 = i, d = s2, h = n;
  for (; ; ) {
    const v = u.length;
    if (v === 0) {
      const y = He2(c2, d);
      return h.concat(y);
    }
    const N = It2(d), C2 = u[0], z = u.slice(1, v);
    if (Nt2(c2, C2, N)) {
      const y = c2.concat(C2);
      u = z, c2 = y, d = d, h = h;
    } else {
      const y = c2.length;
      let p2 = 0;
      for (let A = 0; A < y; A += 1)
        p2 += c2[A].normalizedValue;
      const _ = Rt(d, p2), P = He2(c2, d), R3 = h.concat(P);
      u = u, c2 = [], d = _, h = R3;
    }
  }
}
function Ee(a) {
  if (typeof a.children > "u" || !a.children.length)
    return [a];
  {
    const i = Ft(
      a.children,
      At(a)
    ), s2 = Lt(i, [], a, []), n = s2.length, u = [];
    for (let d = 0; d < n; d += 1)
      u.push(Ee(s2[d]));
    return zt(u);
  }
}
function Rt(a, i) {
  const { width: s2, height: n, xOffset: u, yOffset: c2 } = ce(a);
  if (s2 >= n) {
    const d = i / n, h = s2 - d, v = {
      xOffset: u + d,
      yOffset: c2,
      width: h,
      height: n
    };
    return We(v);
  } else {
    const d = i / s2, h = n - d, v = {
      xOffset: u,
      yOffset: c2 + d,
      width: s2,
      height: h
    };
    return We(v);
  }
}
var Dt2 = (a) => (pushScopeId("data-v-04106534"), a = a(), popScopeId(), a);
var Mt = ["id"];
var Vt2 = ["xmlns", "viewBox"];
var Bt = { key: 0 };
var Wt = ["id"];
var Ht2 = ["stop-color"];
var Et = ["stop-color"];
var Ut = ["x", "y", "height", "width", "fill", "rx", "stroke", "stroke-width", "onClick", "onMouseenter"];
var Gt = ["x", "y", "height", "width"];
var Xt2 = {
  style: { width: "100%", height: "100%" },
  class: "vue-ui-treemap-cell"
};
var qt2 = Dt2(() => createBaseVNode("br", null, null, -1));
var jt2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Yt = ["onClick"];
var Zt = { key: 0 };
var Jt2 = { key: 1 };
var Kt2 = ["innerHTML"];
var Qt = {
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
    const n = a, { vue_ui_treemap: u } = te(), c2 = computed(() => !!n.dataset && n.dataset.length), d = computed(() => /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), h = ref(Dt()), v = ref(false), N = ref(""), C2 = ref(false), z = ref(0), y = ref([]), p2 = ref(null), _ = ref(null), P = ref(null), R3 = ref(null), A = ref(null), de = ref(0), ve = ref(0), he = ref(0), e = computed({
      get: () => fe(),
      set: (t) => t
    });
    function fe() {
      const t = c({
        userConfig: n.config,
        defaultConfig: u
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_treemap[t.theme] || n.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => n.config, (t) => {
      e.value = fe(), de.value += 1, ve.value += 1, he.value += 1;
    }, { deep: true });
    const { isPrinting: pe, isImaging: ge, generatePdf: ye, generateImage: me } = re({
      elementId: `treemap_${h.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-treemap"
    }), Ue = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), Q2 = computed(() => tr(e.value.customPalette)), D = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), M = ref({
      height: e.value.style.chart.height,
      width: e.value.style.chart.width
    }), W2 = computed(() => ({
      bottom: M.value.height - e.value.style.chart.padding.bottom,
      height: M.value.height - e.value.style.chart.padding.top - e.value.style.chart.padding.bottom,
      left: e.value.style.chart.padding.left,
      right: M.value.width - e.value.style.chart.padding.right,
      top: e.value.style.chart.padding.top,
      vbHeight: M.value.height,
      vbWidth: M.value.width,
      width: M.value.width - e.value.style.chart.padding.left - e.value.style.chart.padding.right
    }));
    function be(t) {
      t.forEach((l, o) => {
        l.id = Dt(), l.color = Q(l.color) || Q2.value[o] || rt[o] || rt[o % rt.length], l.children && (l.children.forEach((r) => {
          r.parentId = l.id, r.color = l.color;
        }), be(l.children));
      });
    }
    const H = ref(n.dataset), ee = ref(null);
    onMounted(() => {
      Ge();
    });
    function Ge() {
      if (jt(n.dataset) && qt({
        componentName: "VueUiTreemap",
        type: "dataset"
      }), be(H.value), e.value.responsive) {
        const t = O(() => {
          const { width: l, height: o } = k({
            chart: p2.value,
            title: e.value.style.chart.title.text ? _.value : null,
            legend: e.value.style.chart.legend.show ? P.value : null,
            source: R3.value,
            noTitle: A.value
          });
          M.value.width = l, M.value.height = o;
        });
        ee.value = new ResizeObserver(t), ee.value.observe(p2.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      ee.value && ee.value.disconnect();
    });
    const se = ref(H.value), Z = computed(() => se.value.map((t, l) => ({
      ...t,
      color: Q(t.color) || Q2.value[l] || rt[l] || rt[l % rt.length]
    })).filter((t) => !y.value.includes(t.id))), q = computed(() => H.value.filter((t) => !y.value.includes(t.id)).map((t) => t.value || 0).reduce((t, l) => t + l, 0)), we = computed({
      get() {
        let t = [...Z.value];
        return e.value.style.chart.layout.sorted && (t = [...Z.value].sort((l, o) => o.value - l.value)), t.map((l) => ({
          ...l
        }));
      },
      set(t) {
        return t;
      }
    });
    function ke(t, l) {
      return t.value / l;
    }
    function Xe(t, l, o) {
      const r = e.value.style.chart.layout.rects.colorRatio - ke(l, o);
      return It(t, r < 0 ? 0 : r);
    }
    function Ce(t, l, o, r) {
      return t.map((m, V) => {
        const le = Xe(Q(l) || Q2.value[V] || rt[V] || rt[V % rt.length], m, r), Ke = ke(m, r);
        return {
          ...m,
          color: le,
          proportion: Ke,
          parentName: o,
          children: m.children ? Ce(m.children, le, m.name, r) : void 0
        };
      });
    }
    const J = computed(() => Pt(
      we.value.map((t, l) => {
        const o = t.children ? t.children.reduce((r, m) => r + m.value, 0) : t.value;
        return {
          value: t.value,
          id: t.id,
          children: t.children ? Ce(t.children.sort((r, m) => m.value - r.value), t.color, t.name, o) : void 0,
          color: t.color,
          name: t.name
        };
      }),
      { x0: W2.value.left * 2, y0: W2.value.top, x1: W2.value.width, y1: W2.value.height }
    ));
    function $e({ y0: t, y1: l }) {
      return l - t <= 0 ? 1e-4 : l - t;
    }
    function xe({ x0: t, x1: l }) {
      return l - t <= 0 ? 1e-4 : l - t;
    }
    function E2(t) {
      const l = e.value.style.chart.layout.labels.fontSize * (t.proportion * 2 > 1 ? 1 : t.proportion * 2);
      return l < e.value.style.chart.layout.labels.minFontSize ? e.value.style.chart.layout.labels.minFontSize : l;
    }
    function qe(t) {
      C2.value = t, z.value += 1;
    }
    const j = computed(() => ({
      startX: 0,
      startY: 0,
      width: W2.value.vbWidth,
      height: W2.value.vbHeight
    })), I = ref(false);
    function re2(t, l = H.value) {
      for (const o of l) {
        if (o.id === t)
          return o;
        if (o.children) {
          const r = re2(t, o.children);
          if (r)
            return r;
        }
      }
      return null;
    }
    function je(t) {
      if (I.value)
        s2("selectDatapoint", void 0), se.value = H.value;
      else {
        if (s2("selectDatapoint", t), !re2(t.parentId))
          return;
        se.value = [re2(t.parentId)];
      }
      I.value = !I.value;
    }
    const F = ref(null), Te = computed(() => H.value.map((t, l) => ({
      ...t,
      color: Q(t.color) || Q2.value[l] || rt[l] || rt[l % rt.length],
      shape: "square"
    })).sort((t, l) => l.value - t.value).map((t, l) => ({
      ...t,
      proportion: t.value / H.value.map((o) => o.value).reduce((o, r) => o + r, 0),
      opacity: y.value.includes(t.id) ? 0.5 : 1
    }))), Ye = computed(() => ({
      cy: "treemap-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    }));
    function _e(t) {
      I.value = false, F.value = null, y.value.includes(t.id) ? y.value = y.value.filter((l) => l !== t.id) : y.value.length < n.dataset.length - 1 && y.value.push(t.id), s2("selectLegend", we.value);
    }
    const ue = ref(null);
    function Ze({ datapoint: t, seriesIndex: l }) {
      F.value = t, ue.value = { datapoint: t, seriesIndex: l, config: e.value, series: Z.value };
      const o = e.value.style.chart.tooltip.customFormat;
      if (Xt(o) && Kt(() => o({
        seriesIndex: l,
        datapoint: t,
        series: Z.value,
        config: e.value
      })))
        N.value = o({
          seriesIndex: l,
          datapoint: t,
          series: Z.value,
          config: e.value
        });
      else {
        let r = "";
        r += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`, r += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" stroke="none" fill="${t.color}"/></svg>`, r += `<b>${ir(
          e.value.style.chart.layout.labels.formatter,
          t.value,
          Ht({
            p: e.value.style.chart.layout.labels.prefix,
            v: t.value,
            s: e.value.style.chart.layout.labels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: t, seriesIndex: l }
        )}</b>`, N.value = `<div>${r}</div>`;
      }
      v.value = true;
    }
    const L = computed(() => {
      const t = J.value.map((o) => ({
        name: o.name,
        color: o.color
      })), l = J.value.map((o) => o.value);
      return { head: t, body: l };
    });
    function Oe() {
      nextTick(() => {
        const t = L.value.head.map((r, m) => [[
          r.name
        ], [L.value.body[m]], [isNaN(L.value.body[m] / q.value) ? "-" : L.value.body[m] / q.value * 100]]), l = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), o = Vt(l);
        Nt({ csvContent: o, title: e.value.style.chart.title.text || "vue-ui-treemap" });
      });
    }
    const te2 = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ], l = L.value.head.map((m, V) => {
        const le = ir(
          e.value.style.chart.layout.labels.formatter,
          L.value.body[V],
          Ht({
            p: e.value.style.chart.layout.labels.prefix,
            v: L.value.body[V],
            s: e.value.style.chart.layout.labels.suffix,
            r: e.value.table.td.roundingValue
          })
        );
        return [
          {
            color: m.color,
            name: m.name,
            shape: "square"
          },
          le,
          isNaN(L.value.body[V] / q.value) ? "-" : Ht({
            v: L.value.body[V] / q.value * 100,
            s: "%",
            r: e.value.table.td.roundingPercentage
          })
        ];
      }), o = {
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
        body: l,
        config: o
      };
    });
    function Je() {
      return J.value;
    }
    function Se2() {
      D.value.showTable = !D.value.showTable;
    }
    function Ne() {
      D.value.showTooltip = !D.value.showTooltip;
    }
    const oe = ref(false);
    function ie() {
      oe.value = !oe.value;
    }
    return i({
      getData: Je,
      generateCsv: Oe,
      generateImage: me,
      generatePdf: ye,
      toggleTable: Se2,
      toggleTooltip: Ne,
      toggleAnnotator: ie
    }), (t, l) => (openBlock(), createElementBlock("div", {
      ref_key: "treemapChart",
      ref: p2,
      class: normalizeClass(`vue-ui-treemap ${C2.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height: 100%;" : ""} text-align:center;background:${e.value.style.chart.backgroundColor}`),
      id: `treemap_${h.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: p2.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: oe.value,
        onClose: ie
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Ue.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: A,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: _,
        style: normalizeStyle(`width:100%;background:${e.value.style.chart.backgroundColor};padding-bottom:6px`)
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${de.value}`,
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
      e.value.userOptions.show && c2.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${z.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(pe),
        isImaging: unref(ge),
        uid: h.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: C2.value,
        isTooltip: D.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: p2.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: oe.value,
        onToggleFullscreen: qe,
        onGeneratePdf: unref(ye),
        onGenerateCsv: Oe,
        onGenerateImage: unref(me),
        onToggleTable: Se2,
        onToggleTooltip: Ne,
        onToggleAnnotator: ie
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
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: r }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: r })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: o, isAnnotator: r }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: o, isAnnotator: r })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      c2.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": C2.value, "vue-data-ui-fulscreen--off": !C2.value, "vue-data-ui-zoom-plus": !I.value, "vue-data-ui-zoom-minus": I.value }),
        viewBox: `${j.value.startX} ${j.value.startY} ${j.value.width <= 0 ? 10 : j.value.width} ${j.value.height <= 0 ? 10 : j.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: hidden; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(J.value, (o, r) => (openBlock(), createElementBlock("g", null, [
          e.value.style.chart.layout.rects.gradient.show ? (openBlock(), createElementBlock("defs", Bt, [
            createBaseVNode("radialGradient", {
              id: `tgrad_${o.id}`,
              gradientTransform: "translate(-1, -1.000001) scale(2, 2)"
            }, [
              createBaseVNode("stop", {
                offset: "18%",
                "stop-color": o.color
              }, null, 8, Ht2),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": unref(It)(o.color, e.value.style.chart.layout.rects.gradient.intensity / 100)
              }, null, 8, Et)
            ], 8, Wt)
          ])) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(J.value, (o, r) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: o.x0,
            y: o.y0,
            height: $e(o),
            width: xe(o),
            fill: d.value ? o.color : e.value.style.chart.layout.rects.gradient.show ? `url(#tgrad_${o.id})` : o.color,
            rx: e.value.style.chart.layout.rects.borderRadius,
            stroke: F.value && F.value.id === o.id ? e.value.style.chart.layout.rects.selected.stroke : e.value.style.chart.layout.rects.stroke,
            "stroke-width": F.value && F.value.id === o.id ? e.value.style.chart.layout.rects.selected.strokeWidth : e.value.style.chart.layout.rects.strokeWidth,
            onClick: (m) => je(o),
            onMouseenter: () => Ze({
              datapoint: o,
              seriesIndex: r
            }),
            onMouseleave: l[0] || (l[0] = (m) => {
              F.value = null, v.value = false;
            }),
            style: normalizeStyle(`opacity:${F.value ? F.value.id === o.id ? 1 : e.value.style.chart.layout.rects.selected.unselectedOpacity : 1}`),
            class: "vue-ui-treemap-rect"
          }, null, 44, Ut),
          (openBlock(), createElementBlock("foreignObject", {
            x: o.x0,
            y: o.y0,
            height: $e(o),
            width: xe(o),
            class: "vue-ui-treemap-cell-foreignObject"
          }, [
            createBaseVNode("div", Xt2, [
              e.value.style.chart.layout.labels.showDefaultLabels && (o.proportion > e.value.style.chart.layout.labels.hideUnderProportion || I.value) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "vue-ui-treemap-cell-default",
                style: normalizeStyle(`width:calc(100% - ${E2(o) / 1.5}px);text-align:left;line-height:${E2(o) < 14 ? 14 : E2(o)}px;padding:${E2(o) / 3}px; color:${unref(_t)(o.color)}`)
              }, [
                createBaseVNode("span", {
                  style: normalizeStyle(`width:100%;font-size:${E2(o)}px;`)
                }, toDisplayString(o.name), 5),
                qt2,
                createBaseVNode("span", {
                  style: normalizeStyle(`width:100%;font-size:${E2(o)}px;`)
                }, toDisplayString(unref(ir)(
                  e.value.style.chart.layout.labels.formatter,
                  o.value,
                  unref(Ht)({
                    p: e.value.style.chart.layout.labels.prefix,
                    v: o.value,
                    s: e.value.style.chart.layout.labels.suffix,
                    r: e.value.style.chart.layout.labels.rounding
                  }),
                  { datapoint: o }
                )), 5)
              ], 4)) : createCommentVNode("", true),
              renderSlot(t.$slots, "rect", normalizeProps(guardReactiveProps({
                rect: o,
                shouldShow: o.proportion > e.value.style.chart.layout.labels.hideUnderProportion || I.value,
                fontSize: E2(o),
                isZoom: I.value,
                textColor: unref(_t)(o.color)
              })), void 0, true)
            ])
          ], 8, Gt))
        ]))), 256)),
        renderSlot(t.$slots, "svg", normalizeProps(guardReactiveProps({ svg: W2.value, isZoom: I.value, rect: F.value, config: e.value })), void 0, true)
      ], 14, Vt2)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", jt2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(pe) || unref(ge) })), void 0, true)
      ])) : createCommentVNode("", true),
      c2.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
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
        ref: P
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${he.value}`,
          legendSet: Te.value,
          config: Ye.value,
          id: `treemap_legend_${h.value}`,
          onClickMarker: l[1] || (l[1] = ({ legend: o }) => _e(o))
        }, {
          item: withCtx(({ legend: o, index: r }) => [
            createBaseVNode("div", {
              onClick: (m) => _e(o),
              style: normalizeStyle(`opacity:${y.value.includes(o.id) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(o.name) + ": " + toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.formatter,
                o.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.prefix,
                  v: o.value,
                  s: e.value.style.chart.layout.labels.suffix,
                  r: e.value.style.chart.legend.roundingValue
                }),
                { datapoint: o }
              )) + " ", 1),
              y.value.includes(o.id) ? (openBlock(), createElementBlock("span", Jt2, " ( - % ) ")) : (openBlock(), createElementBlock("span", Zt, " (" + toDisplayString(isNaN(o.value / q.value) ? "-" : (o.value / q.value * 100).toFixed(e.value.style.chart.legend.roundingPercentage)) + "%) ", 1))
            ], 12, Yt)
          ]),
          _: 1
        }, 8, ["legendSet", "config", "id"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: Te.value
        }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: R3,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
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
        content: N.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ue.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ue.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      c2.value ? (openBlock(), createBlock(R, {
        key: 8,
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
            key: `table_${ve.value}`,
            colNames: te2.value.colNames,
            head: te2.value.head,
            body: te2.value.body,
            config: te2.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: l[2] || (l[2] = (o) => D.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", {
                innerHTML: o,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Kt2)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o.name || o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Mt));
  }
};
var po = s(Qt, [["__scopeId", "data-v-04106534"]]);
export {
  po as default
};
//# sourceMappingURL=vue-ui-treemap-Bn5JU5BI-42LUFM6A.js.map
