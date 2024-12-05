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
  $t,
  Dt,
  He,
  Ht,
  Jt,
  Kt,
  Nt,
  Q,
  R as R2,
  Vt,
  Xt,
  Zt,
  _t,
  dr,
  ir,
  jt,
  qt,
  rt,
  te,
  tr,
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

// node_modules/vue-data-ui/dist/vue-ui-waffle-CzUpKfkZ.js
var Be = (j) => (pushScopeId("data-v-b51c7605"), j = j(), popScopeId(), j);
var zt = ["id"];
var Ft = ["xmlns", "viewBox"];
var Nt2 = ["id"];
var Ot = ["stop-color"];
var Bt = ["stop-color"];
var Vt2 = ["id"];
var Mt = Be(() => createBaseVNode("feGaussianBlur", {
  in: "SourceGraphic",
  stdDeviation: 2
}, null, -1));
var Dt2 = Be(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Gt = [
  Mt,
  Dt2
];
var Rt = ["x", "y", "height", "width"];
var Ut = ["height", "width"];
var jt2 = ["rx", "x", "y", "height", "width", "stroke", "stroke-width", "filter"];
var Et = ["rx", "x", "y", "height", "width", "fill", "stroke", "stroke-width", "filter"];
var Wt = ["x", "y", "height", "width", "filter"];
var qt2 = { key: 0 };
var Ht2 = { key: 1 };
var Xt2 = { key: 2 };
var Yt = { key: 3 };
var Kt2 = ["onMouseover", "x", "y", "height", "width"];
var Jt2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Qt = ["onClick"];
var Zt2 = { key: 0 };
var ea = { key: 1 };
var ta = ["innerHTML"];
var aa = {
  __name: "vue-ui-waffle",
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
  emits: ["selectLegend"],
  setup(j, { expose: Ve, emit: Me }) {
    const b = j, { vue_ui_waffle: De } = te(), X = computed(() => !!b.dataset && b.dataset.length), P = ref(Dt()), Ge = ref(null), ee = ref(false), te2 = ref(""), B = ref(null), re2 = ref(0), V = ref(null), ne = ref(null), ie = ref(null), ce = ref(null), ve = ref(null), de = ref(0), he = ref(0), pe = ref(0), e = computed({
      get: () => ye(),
      set: (t) => t
    });
    function ye() {
      const t = c({
        userConfig: b.config,
        defaultConfig: De
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_waffle[t.theme] || b.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => b.config, (t) => {
      e.value = ye(), fe(), de.value += 1, he.value += 1, pe.value += 1;
    }, { deep: true });
    const Y = ref(null);
    function fe() {
      if (jt(b.dataset) ? qt({
        componentName: "VueUiWaffle",
        type: "dataset"
      }) : b.dataset.forEach((t, o) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "values"]
        }).forEach((a) => {
          qt({
            componentName: "VueUiWaffle",
            type: "datasetSerieAttribute",
            property: a,
            index: o
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: o, height: a } = k({
            chart: V.value,
            title: e.value.style.chart.title.text ? ne.value : null,
            legend: e.value.style.chart.legend.show ? ie.value : null,
            source: ce.value,
            noTitle: ve.value
          });
          L.value.width = o, L.value.height = a, C2.value.width = o, C2.value.height = a;
        });
        Y.value = new ResizeObserver(t), Y.value.observe(V.value.parentNode);
      }
    }
    onMounted(() => {
      fe();
    }), onBeforeUnmount(() => {
      Y.value && Y.value.disconnect();
    });
    const { isPrinting: ge, isImaging: me, generatePdf: be, generateImage: we } = re({
      elementId: `vue-ui-waffle_${P.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-waffle"
    }), Re = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), ke = computed(() => tr(e.value.customPalette)), T = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), L = ref({
      height: 512,
      width: 512
    }), C2 = ref({
      top: 0,
      left: 0,
      height: 512,
      width: 512
    }), A = computed(() => (C2.value.width - e.value.style.chart.layout.grid.size * e.value.style.chart.layout.grid.spaceBetween) / e.value.style.chart.layout.grid.size), z = computed(() => (C2.value.height - e.value.style.chart.layout.grid.size * e.value.style.chart.layout.grid.spaceBetween) / e.value.style.chart.layout.grid.size), E2 = computed(() => C2.value.width / e.value.style.chart.layout.grid.size), K = computed(() => C2.value.height / e.value.style.chart.layout.grid.size);
    function xe(t) {
      const o = e.value.style.chart.layout.grid.size * e.value.style.chart.layout.grid.size, a = t.reduce((w, ue) => w + ue, 0), l = t.map((w) => w / a * o), u = l.map(Math.floor), i = l.map((w) => w % 1);
      let y = o - u.reduce((w, ue) => w + ue, 0);
      for (; y > 0; ) {
        let w = i.indexOf(Math.max(...i));
        u[w] += 1, i[w] = 0, y -= 1;
      }
      return u;
    }
    function Ce() {
      return b.dataset.map((t, o) => ({
        ...t,
        color: Q(t.color) || ke.value[o] || rt[o] || rt[o % rt.length],
        uid: `serie_${o}`,
        absoluteIndex: o
      }));
    }
    const _e = computed(() => Ce()), d = ref(_e.value);
    watch(() => b.dataset, (t) => {
      d.value = Ce();
    }, { deep: true });
    const Ue = computed(() => {
      const t = d.value.filter((o, a) => !p2.value.includes(o.uid)).map((o, a) => (o.values || []).reduce((l, u) => l + u, 0));
      return xe(t);
    }), je = computed(() => {
      const t = d.value.map((o, a) => (o.values || []).reduce((l, u) => l + u));
      return xe(t);
    }), W2 = computed(() => (b.dataset.forEach((t, o) => {
      [null, void 0].includes(t.values) && qt({
        componentName: "VueUiWaffle",
        type: "datasetSerieAttribute",
        property: "values (number[])",
        index: o
      });
    }), d.value.filter((t, o) => !p2.value.includes(t.uid)).map((t, o) => ({
      absoluteIndex: t.absoluteIndex,
      uid: t.uid,
      name: t.name,
      color: t.color,
      value: (t.values || []).reduce((a, l) => a + l, 0),
      absoluteValues: t.values || [],
      proportion: Ue.value[o]
    })))), Ee = computed(() => d.value.map((t, o) => ({
      absoluteIndex: t.absoluteIndex,
      uid: t.uid,
      name: t.name,
      color: t.color,
      value: (t.values || []).reduce((a, l) => a + l, 0),
      absoluteValues: t.values || [],
      proportion: je.value[o]
    })));
    function We() {
      return Ee.value.map((t) => ({
        name: t.name,
        color: t.color,
        value: t.value,
        proportion: t.proportion
      }));
    }
    const qe = computed(() => {
      let t = 0;
      return W2.value.map((o, a) => {
        const l = t, u = l + o.proportion, i = [];
        for (let y = Math.floor(l); y < Math.floor(u); y += 1)
          i.push(y);
        return t = u, {
          ...o,
          start: l,
          rects: i
        };
      });
    }), r = computed(() => qe.value.flatMap((t, o) => t.rects.map((a, l) => ({
      isFirst: l === 0,
      isLongEnough: a.length > 2,
      name: t.name,
      color: t.color,
      value: t.value,
      serieIndex: o,
      absoluteStartIndex: l < 3,
      serieId: t.uid,
      ...t
    }))).map((t, o) => ({
      ...t,
      isAbsoluteFirst: o % e.value.style.chart.layout.grid.size === 0
    }))), q = computed(() => {
      const t = [];
      for (let o = 0; o < e.value.style.chart.layout.grid.size; o += 1)
        for (let a = 0; a < e.value.style.chart.layout.grid.size; a += 1)
          t.push({
            isStartOfLine: a === 0,
            position: e.value.style.chart.layout.grid.vertical ? o : a,
            x: (e.value.style.chart.layout.grid.vertical ? o : a) * (A.value + e.value.style.chart.layout.grid.spaceBetween),
            y: (e.value.style.chart.layout.grid.vertical ? a : o) * (z.value + e.value.style.chart.layout.grid.spaceBetween) + C2.value.top
          });
      return t;
    }), p2 = ref([]), F = ref(false), $e = ref(null), Te = ref(null);
    function Ie(t) {
      if (!e.value.useAnimation) {
        p2.value.includes(t) ? p2.value = p2.value.filter((u) => u !== t) : p2.value.length < M.value.length - 1 && M.value.length > 1 && p2.value.push(t);
        return;
      }
      const o = _e.value.find((u) => u.uid === t).values.reduce((u, i) => u + i, 0);
      let l = d.value.find((u) => u.uid === t).values.reduce((u, i) => u + i, 0);
      if (p2.value.includes(t)) {
        let i = function() {
          l > u ? (cancelAnimationFrame($e.value), d.value = d.value.map((y, w) => y.uid === t ? {
            ...y,
            values: [u]
          } : y), F.value = false) : (F.value = true, l += u * 0.025, d.value = d.value.map((y, w) => y.uid === t ? {
            ...y,
            values: [l]
          } : y), $e.value = requestAnimationFrame(i));
        };
        p2.value = p2.value.filter((y) => y !== t);
        const u = o;
        i();
      } else if (p2.value.length < M.value.length - 1 && M.value.length > 1) {
        let u = function() {
          l < 0.1 ? (cancelAnimationFrame(Te.value), p2.value.push(t), d.value = d.value.map((i, y) => i.uid === t ? {
            ...i,
            values: [0]
          } : i), F.value = false) : (F.value = true, l /= 1.5, d.value = d.value.map((i, y) => i.uid === t ? {
            ...i,
            values: [l]
          } : i), Te.value = requestAnimationFrame(u));
        };
        u();
      }
      Me("selectLegend", W2.value.map((u) => ({
        name: u.name,
        color: u.color,
        value: u.value,
        proportion: u.proportion / Math.pow(e.value.style.chart.layout.grid.size, 2)
      })));
    }
    const M = computed(() => d.value.map((t, o) => ({
      name: t.name,
      color: t.color || ke[o] || rt[o] || rt[o % rt.length],
      value: (t.values || []).reduce((a, l) => a + l, 0),
      uid: t.uid,
      shape: "square"
    })).map((t, o) => ({
      ...t,
      proportion: t.value / d.value.map((a) => (a.values || []).reduce((l, u) => l + u, 0)).reduce((a, l) => a + l, 0),
      opacity: p2.value.includes(t.uid) ? 0.5 : 1,
      segregate: () => Ie(t.uid),
      isSegregated: p2.value.includes(t.uid)
    }))), He2 = computed(() => ({
      cy: "waffle-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), _ = computed(() => W2.value.map((t) => t.value).reduce((t, o) => t + o, 0)), ae2 = ref(null);
    function Xe(t) {
      if (p2.value.length === b.dataset.length) return;
      const o = r.value[t];
      ae2.value = {
        datapoint: o,
        seriesIndex: o.absoluteIndex,
        series: d.value,
        config: e.value
      }, ee.value = true, B.value = r.value[t].serieIndex;
      const a = e.value.style.chart.tooltip.customFormat;
      if (Xt(a) && Kt(() => a({
        seriesIndex: r.value[t].absoluteIndex,
        datapoint: o,
        series: d.value,
        config: e.value
      })))
        te2.value = a({
          seriesIndex: r.value[t].absoluteIndex,
          datapoint: o,
          series: d.value,
          config: e.value
        });
      else {
        let l = "";
        if (l += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${o.name}</div>`, l += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" stroke="none" rx="1" fill="${o.color}" /></svg>`, e.value.style.chart.tooltip.showValue && (l += `<b>${ir(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          o.value,
          Ht({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: o.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          {
            datapoint: o,
            seriesIndex: r.value[t].absoluteIndex,
            series: d.value
          }
        )}</b>`), e.value.style.chart.tooltip.showPercentage) {
          const u = Ht({
            v: o.value / _.value * 100,
            s: "%",
            r: e.value.style.chart.tooltip.roundingPercentage
          });
          e.value.style.chart.tooltip.showValue ? l += `<span>(${u})</span></div>` : l += `<b>${u}%</b></div>`;
        }
        te2.value = l;
      }
    }
    const $ = computed(() => {
      const t = W2.value.map((a) => ({
        name: a.name,
        color: a.color
      })), o = W2.value.map((a) => a.value);
      return { head: t, body: o };
    });
    function le(t) {
      return e.value.useBlurOnHover && ![null, void 0].includes(B.value) && B.value !== t ? `url(#blur_${P.value})` : "";
    }
    function Se2() {
      nextTick(() => {
        const t = $.value.head.map((l, u) => [[
          l.name
        ], [$.value.body[u]], [isNaN($.value.body[u] / _.value) ? "-" : $.value.body[u] / _.value * 100]]), o = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), a = Vt(o);
        Nt({ csvContent: a, title: e.value.style.chart.title.text || "vue-ui-waffle" });
      });
    }
    const J = computed(() => {
      const t = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        ir(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          _.value,
          Ht({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: _.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.table.td.roundingValue
          })
        ),
        "100%"
      ], o = $.value.head.map((u, i) => [
        {
          color: u.color,
          name: u.name
        },
        ir(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          $.value.body[i],
          Ht({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: $.value.body[i],
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.table.td.roundingValue
          })
        ),
        isNaN($.value.body[i] / _.value) ? "-" : Ht({
          v: $.value.body[i] / _.value * 100,
          s: "%",
          r: e.value.table.td.roundingPercentage
        })
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
        shape: "square",
        breakpoint: e.value.table.responsiveBreakpoint
      }, l = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ];
      return {
        head: t,
        body: o,
        config: a,
        colNames: l
      };
    }), H = ref(false);
    function Ye(t) {
      H.value = t, re2.value += 1;
    }
    function Pe() {
      T.value.showTable = !T.value.showTable;
    }
    function Le() {
      T.value.showTooltip = !T.value.showTooltip;
    }
    const Q2 = ref(false);
    function oe() {
      Q2.value = !Q2.value;
    }
    return Ve({
      getData: We,
      generatePdf: be,
      generateCsv: Se2,
      generateImage: we,
      toggleTable: Pe,
      toggleTooltip: Le,
      toggleAnnotator: oe
    }), (t, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-waffle ${H.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      ref_key: "waffleChart",
      ref: V,
      id: `vue-ui-waffle_${P.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: V.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: Q2.value,
        onClose: oe
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Re.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: ve,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: ne,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${de.value}`,
          config: {
            title: {
              cy: "waffle-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "waffle-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Ge,
        key: `user_options_${re2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ge),
        isImaging: unref(me),
        uid: P.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: H.value,
        isTooltip: T.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: V.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: Q2.value,
        onToggleFullscreen: Ye,
        onGeneratePdf: unref(be),
        onGenerateCsv: Se2,
        onGenerateImage: unref(we),
        onToggleTable: Pe,
        onToggleTooltip: Le,
        onToggleAnnotator: oe
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
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: l }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: l })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: l }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: l })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": H.value, "vue-data-ui-fulscreen--off": !H.value }),
        viewBox: `0 0 ${L.value.width <= 0 ? 10 : L.value.width} ${L.value.height <= 0 ? 10 : L.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (a, l) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `gradient_${P.value}_${l}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(a.color, 0.05), 100 - e.value.style.chart.layout.rect.gradientIntensity)
            }, null, 8, Ot),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": a.color
            }, null, 8, Bt)
          ], 8, Nt2))), 256))
        ]),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${P.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, Gt, 8, Vt2)
        ]),
        e.value.useCustomCells && r.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(q.value, (a, l) => (openBlock(), createElementBlock("foreignObject", {
          x: a.x,
          y: a.y,
          height: z.value <= 0 ? 1e-4 : z.value,
          width: A.value <= 0 ? 1e-4 : A.value,
          class: "vue-ui-waffle-custom-cell-foreignObject"
        }, [
          renderSlot(t.$slots, "cell", normalizeProps(guardReactiveProps({ cell: { ...a, color: r.value[l].color, ...r.value[l] }, isSelected: [null, void 0].includes(B.value) ? true : r.value[l].serieIndex === B.value })), void 0, true)
        ], 8, Rt))), 256)) : createCommentVNode("", true),
        !r.value.length && !e.value.useCustomCells ? (openBlock(), createElementBlock("rect", {
          key: 1,
          x: 12,
          y: 12,
          height: C2.value.height - 24,
          width: C2.value.width - 24,
          rx: 3,
          fill: "none",
          stroke: "black"
        }, null, 8, Ut)) : r.value.length && !e.value.useCustomCells ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a, l) => (openBlock(), createElementBlock("rect", {
            rx: e.value.style.chart.layout.rect.rounded ? e.value.style.chart.layout.rect.rounding : 0,
            x: a.x + e.value.style.chart.layout.grid.spaceBetween / 2,
            y: a.y + e.value.style.chart.layout.grid.spaceBetween / 2,
            height: z.value <= 0 ? 1e-4 : z.value,
            width: A.value <= 0 ? 1e-4 : A.value,
            fill: "white",
            stroke: e.value.style.chart.layout.rect.stroke,
            "stroke-width": e.value.style.chart.layout.rect.strokeWidth,
            filter: le(r.value[l].serieIndex)
          }, null, 8, jt2))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a, l) => (openBlock(), createElementBlock("rect", {
            rx: e.value.style.chart.layout.rect.rounded ? e.value.style.chart.layout.rect.rounding : 0,
            x: a.x + e.value.style.chart.layout.grid.spaceBetween / 2,
            y: a.y + e.value.style.chart.layout.grid.spaceBetween / 2,
            height: z.value <= 0 ? 1e-4 : z.value,
            width: A.value <= 0 ? 1e-4 : A.value,
            fill: e.value.style.chart.layout.rect.useGradient && e.value.style.chart.layout.rect.gradientIntensity > 0 ? `url(#gradient_${P.value}_${l})` : r.value[l].color,
            stroke: e.value.style.chart.layout.rect.stroke,
            "stroke-width": e.value.style.chart.layout.rect.strokeWidth,
            filter: le(r.value[l].serieIndex)
          }, null, 8, Et))), 256))
        ], 64)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a, l) => (openBlock(), createElementBlock(Fragment, null, [
          r.value.length && !F.value && !e.value.style.chart.layout.grid.vertical && e.value.style.chart.layout.labels.captions.show && (r.value[l].isFirst && a.position < e.value.style.chart.layout.grid.size - 2 || r.value[l].isAbsoluteFirst && l % e.value.style.chart.layout.grid.size === 0 && r.value[l].absoluteStartIndex) ? (openBlock(), createElementBlock("foreignObject", {
            key: 0,
            x: a.x + e.value.style.chart.layout.labels.captions.offsetX + e.value.style.chart.layout.grid.spaceBetween / 2,
            y: a.y + e.value.style.chart.layout.labels.captions.offsetY + e.value.style.chart.layout.grid.spaceBetween / 2,
            height: K.value <= 0 ? 1e-4 : K.value,
            width: E2.value * e.value.style.chart.layout.grid.size <= 0 ? 1e-4 : E2.value * e.value.style.chart.layout.grid.size,
            filter: le(r.value[l].serieIndex)
          }, [
            createBaseVNode("div", {
              class: "vue-ui-waffle-caption",
              style: normalizeStyle(`height: 100%; width: 100%; font-size:${e.value.style.chart.layout.labels.captions.fontSize}px;display:flex;align-items:center;justify-content:flex-start;padding: 0 ${E2.value / 12}px;color:${unref(_t)(r.value[l].color)};gap:2px`)
            }, [
              e.value.style.chart.layout.labels.captions.showSerieName ? (openBlock(), createElementBlock("span", qt2, toDisplayString(e.value.style.chart.layout.labels.captions.serieNameAbbreviation ? unref($t)({ source: r.value[l].name, length: e.value.style.chart.layout.labels.captions.serieNameMaxAbbreviationSize }) : r.value[l].name) + ": ", 1)) : createCommentVNode("", true),
              e.value.style.chart.layout.labels.captions.showPercentage ? (openBlock(), createElementBlock("span", Ht2, toDisplayString(unref(Ht)({ v: r.value[l].proportion, s: "%", r: e.value.style.chart.layout.labels.captions.roundingPercentage })), 1)) : createCommentVNode("", true),
              e.value.style.chart.layout.labels.captions.showPercentage && e.value.style.chart.layout.labels.captions.showValue ? (openBlock(), createElementBlock("span", Xt2, " (" + toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                r.value[l].value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: r.value[l].value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.captions.roundingValue
                }),
                { datapoint: r.value[l], position: a }
              )) + ") ", 1)) : createCommentVNode("", true),
              !e.value.style.chart.layout.labels.captions.showPercentage && e.value.style.chart.layout.labels.captions.showValue ? (openBlock(), createElementBlock("span", Yt, toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                r.value[l].value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: r.value[l].value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.captions.roundingValue
                }),
                { datapoint: r.value[l], position: a }
              )), 1)) : createCommentVNode("", true)
            ], 4)
          ], 8, Wt)) : createCommentVNode("", true)
        ], 64))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (a, l) => (openBlock(), createElementBlock("rect", {
          onMouseover: (u) => Xe(l),
          onMouseleave: o[0] || (o[0] = (u) => {
            ee.value = false, B.value = null;
          }),
          x: a.x + e.value.style.chart.layout.grid.spaceBetween / 2,
          y: a.y + e.value.style.chart.layout.grid.spaceBetween / 2,
          height: K.value <= 0 ? 1e-4 : K.value,
          width: E2.value <= 0 ? 1e-4 : E2.value,
          fill: "transparent",
          stroke: "none"
        }, null, 40, Kt2))), 256)),
        renderSlot(t.$slots, "svg", { svg: L.value }, void 0, true)
      ], 14, Ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Jt2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ge) || unref(me) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "waffle",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            waffle: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: ie
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${pe.value}`,
          legendSet: M.value,
          config: He2.value,
          onClickMarker: o[1] || (o[1] = ({ legend: a }) => Ie(a.uid))
        }, {
          item: withCtx(({ legend: a }) => [
            createBaseVNode("div", {
              onClick: (l) => a.segregate(),
              style: normalizeStyle(`opacity:${p2.value.includes(a.uid) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(a.name) + ": " + toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                a.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: a.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.legend.roundingValue,
                  isAnimating: F.value
                }),
                { datapoint: a }
              )) + " ", 1),
              p2.value.includes(a.uid) ? (openBlock(), createElementBlock("span", ea, " ( - % ) ")) : (openBlock(), createElementBlock("span", Zt2, " (" + toDisplayString(isNaN(a.value / _.value) ? "-" : unref(Ht)({ v: a.value / _.value * 100, s: "%", r: e.value.style.chart.legend.roundingPercentage, isAnimating: F.value })) + ") ", 1))
            ], 12, Qt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: M.value
        }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: ce,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: T.value.showTooltip && ee.value && p2.value.length < b.dataset.length,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: V.value,
        content: te2.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function",
        fontSize: e.value.style.chart.tooltip.fontSize
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ae2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ae2.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom", "fontSize"]),
      X.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: T.value.showTable,
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
            key: `table_${he.value}`,
            colNames: J.value.colNames,
            head: J.value.head,
            body: J.value.body,
            config: J.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[2] || (o[2] = (a) => T.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", {
                innerHTML: a,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, ta)
            ]),
            td: withCtx(({ td: a }) => [
              createTextVNode(toDisplayString(a.name || a), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, zt));
  }
};
var ga = s(aa, [["__scopeId", "data-v-b51c7605"]]);
export {
  ga as default
};
//# sourceMappingURL=vue-ui-waffle-CzUpKfkZ-6U46YF3J.js.map
