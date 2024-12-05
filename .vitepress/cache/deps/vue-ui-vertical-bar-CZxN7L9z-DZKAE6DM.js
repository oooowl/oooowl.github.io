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
  Nt,
  Q,
  R as R2,
  Vt,
  Xt,
  dr,
  ir,
  jt,
  k as k2,
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
  useCssVars,
  watch,
  withCtx,
  withKeys
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-vertical-bar-CZxN7L9z.js
var Nt2 = ["id"];
var Pt = ["onClick"];
var St = ["xmlns", "viewBox"];
var Vt2 = ["id"];
var zt = ["stop-color"];
var Ft = ["stop-color"];
var Mt = ["x", "y", "width", "height", "fill", "rx"];
var Ot = ["x", "y", "width", "height", "fill", "rx", "stroke", "stroke-width"];
var It = ["x2", "y1", "y2", "stroke", "stroke-width"];
var At = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Bt = ["x", "y", "text-anchor", "font-size", "fill", "font-weight"];
var Dt2 = ["x", "y", "font-size", "fill", "font-weight"];
var Rt = ["x", "y", "font-size", "fill", "font-weight"];
var Xt2 = ["x", "y", "font-size", "fill", "font-weight"];
var Et = ["y", "width", "height", "fill", "onMouseenter"];
var Gt = {
  key: 6,
  class: "vue-data-ui-watermark"
};
var Ut = ["onClick"];
var Ht2 = { style: "width:100%;padding-top: 36px;position:relative" };
var Wt = { class: "vue-ui-data-table" };
var jt2 = { key: 0 };
var Yt = { style: { width: "100%" } };
var qt2 = ["data-cell"];
var Kt2 = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Jt2 = ["data-cell"];
var Qt = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Zt = ["data-cell"];
var ea = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var ta = ["data-cell"];
var aa = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var la = ["data-cell"];
var oa = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var na = ["data-cell"];
var ua = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var sa = ["data-cell"];
var ra = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var ia = {
  __name: "vue-ui-vertical-bar",
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
  setup(Be, { expose: De, emit: Re }) {
    const C2 = Be;
    useCssVars((t) => ({
      "5a0dcab3": t.tdo
    }));
    const { vue_ui_vertical_bar: Xe } = te(), Y = computed(() => !!C2.dataset && C2.dataset.length), V = ref(Dt()), Ee = ref(null), te2 = ref(false), ae2 = ref(""), q = ref(0), Ge = ref(null), ce = ref(0), A = ref(null), ve = ref(null), le = ref(null), he = ref(null), pe = ref(null), ge = ref(0), oe = ref(0), e = computed({
      get: () => ye(),
      set: (t) => t
    });
    function ye() {
      const t = c({
        userConfig: C2.config,
        defaultConfig: Xe
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_vertical_bar[t.theme] || C2.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => C2.config, (t) => {
      e.value = ye(), Ce(), ge.value += 1, oe.value += 1, v.value = e.value.style.chart.layout.bars.height, y.value = e.value.style.chart.layout.bars.gap;
    }, { deep: true }), watch(() => C2.dataset, J, { deep: true });
    const { isPrinting: fe, isImaging: be, generatePdf: me, generateImage: _e } = re({
      elementId: `vue-ui-vertical-bar_${V.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-vertical-bar"
    }), Ue = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), ke = computed(() => tr(e.value.customPalette)), xe = ref(null), $e = ref(false), He2 = computed(() => e.value.table.responsiveBreakpoint), K = ref(null);
    onMounted(() => {
      Ce();
    });
    function Ce() {
      if (jt(C2.dataset) && qt({
        componentName: "VueUiVerticalBar",
        type: "dataset"
      }), q.value = C2.dataset.flatMap((t) => t.children && t.children.length > 0 ? t.children.length : 1).reduce((t, l) => t + l, 0), We(), e.value.responsive) {
        const t = O(() => {
          const { width: l, height: a } = k({
            chart: A.value,
            title: e.value.style.chart.title.text ? ve.value : null,
            legend: e.value.style.chart.legend.show ? le.value : null,
            source: he.value,
            noTitle: pe.value
          });
          Le.value = l, v.value = a / q.value - y.value * 2;
        });
        K.value = new ResizeObserver(t), K.value.observe(A.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      K.value && K.value.disconnect();
    });
    function We() {
      new ResizeObserver((l) => {
        l.forEach((a) => {
          $e.value = a.contentRect.width < He2.value;
        });
      }).observe(xe.value);
    }
    const $ = ref({
      showTable: e.value.table.show,
      sortDesc: e.value.style.chart.layout.bars.sort === "desc",
      showTooltip: e.value.style.chart.tooltip.show
    }), we = computed(() => $.value.sortDesc), z = computed(() => (C2.dataset.forEach((t, l) => {
      !t.value && !t.children && qt({
        componentName: "VueUiVerticalBar",
        type: "datasetAttributeEmpty",
        property: `value (index ${l})`
      }), t.children && (jt(t.children) ? qt({
        componentName: "VueUiVerticalBar",
        type: "datasetAttributeEmpty",
        property: `children (index ${l})`
      }) : t.children.forEach((a, o) => {
        [null, void 0].includes(a.name) && qt({
          componentName: "VueUiVerticalBar",
          type: "datasetSerieAttribute",
          property: "name",
          key: "children",
          index: o
        });
      }));
    }), C2.dataset.map((t, l) => {
      const a = `vertical_parent_${l}_${V.value}`, o = t.children && t.children.length > 0, m = k2(t.value ? t.value : o ? t.children.map((x2) => x2.value || 0).reduce((x2, N) => x2 + N, 0) : 0), p2 = m >= 0 ? 1 : -1;
      return {
        ...t,
        id: a,
        shape: "square",
        opacity: T.value.includes(a) ? 0.5 : 1,
        value: Math.abs(m),
        sign: p2,
        hasChildren: o,
        isChild: false,
        segregate: () => X(a),
        isSegregated: T.value.includes(a),
        color: Q(t.color) || ke.value[l] || rt[l] || rt[l % rt.length],
        children: !t.children || !t.children.length ? [] : t.children.toSorted((x2, N) => we.value ? N.value - x2.value : x2.value - N.value).map((x2, N) => ({
          ...x2,
          value: k2(Math.abs(x2.value)),
          sign: x2.value >= 0 ? 1 : -1,
          isChild: true,
          parentId: a,
          parentName: t.name,
          parentValue: m,
          parentSign: p2,
          id: `vertical_child_${l}_${N}_${V.value}`,
          childIndex: N,
          color: Q(x2.color) || Q(t.color) || ke.value[l] || rt[l] || rt[l % rt.length]
        })).map((x2, N) => ({
          ...x2,
          isFirstChild: N === 0,
          isLastChild: N === t.children.length - 1
        }))
      };
    }).toSorted((t, l) => we.value ? l.value - t.value : t.value - l.value))), Te = computed(() => ({
      cy: "vertical-bar-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), v = ref(e.value.style.chart.layout.bars.height), y = ref(e.value.style.chart.layout.bars.gap), je = computed(() => (v.value + y.value) * q.value), Le = ref(512), f = computed(() => ({
      width: Le.value,
      height: je.value,
      padding: {
        top: 12,
        left: 128 + e.value.style.chart.layout.bars.offsetX,
        right: 64 + e.value.style.chart.layout.bars.paddingRight,
        bottom: 12
      }
    })), s2 = computed(() => ({
      fullHeight: f.value.padding.top + f.value.padding.bottom + f.value.height,
      top: f.value.padding.top,
      left: f.value.padding.left,
      right: f.value.width - f.value.padding.right,
      bottom: f.value.padding.top + f.value.height,
      width: f.value.width - (f.value.padding.left + f.value.padding.right)
    }));
    function J() {
      q.value = F.value.flatMap((t) => t.children && t.children.length > 0 ? t.children.length : 1).reduce((t, l) => t + l, 0);
    }
    const T = ref([]);
    function X(t) {
      T.value.includes(t) ? T.value = T.value.filter((l) => l !== t) : T.value.push(t), J(), Re("selectLegend", F.value);
    }
    const F = computed(() => z.value.filter((t) => !T.value.includes(t.id))), L = computed(() => F.value.map((t) => Math.abs(t.value)).reduce((t, l) => t + l, 0));
    function Ne(t, l = false, a = 0) {
      return l ? Ht({
        v: k2(Math.abs(t) / L.value * 100),
        s: "%",
        r: a
      }) : Math.abs(t) / L.value;
    }
    const B = computed(() => F.value.flatMap((t) => t.hasChildren ? t.children : t)), D = computed(() => B.value.map((t) => t.sign).includes(-1)), Ye = computed(() => Math.max(...F.value.flatMap((t) => t.children && t.children.length ? Math.max(...t.children.map((l) => l.value)) : t.value)));
    function P(t) {
      const l = t / Ye.value;
      return s2.value.width / (D.value ? 2 : 1) * l;
    }
    function qe(t) {
      return P(t) + s2.value.left;
    }
    function E2(t, l) {
      const a = F.value.find((p2) => p2.id === t.parentId), o = s2.value.top + (y.value + v.value) * l, m = a.children.length * (y.value + v.value);
      return {
        y: o + m / 2 - e.value.style.chart.layout.bars.parentLabels.fontSize,
        name: a.name,
        value: [void 0, NaN, null].includes(a.value) ? "" : a.sign === 1 ? a.value : -a.value,
        percentageToTotal: isNaN(a.value / L.value) ? "" : Ne(a.value, true, e.value.style.chart.layout.bars.dataLabels.percentage.roundingPercentage),
        sign: a.sign
      };
    }
    function Ke() {
      return F.value;
    }
    const ne = ref(null), ue = ref(null);
    function Je(t, l) {
      ue.value = {
        datapoint: t,
        seriesIndex: l,
        series: z.value,
        config: e.value
      }, te2.value = true, ne.value = t.id;
      let a = "";
      const o = t.isChild ? t.parentName : t.name, m = t.isChild ? t.name : "", p2 = e.value.style.chart.tooltip.customFormat;
      Xt(p2) && Kt(() => p2({
        datapoint: t,
        series: z.value,
        config: e.value,
        seriesIndex: l
      })) ? ae2.value = p2({
        datapoint: t,
        series: z.value,
        config: e.value,
        seriesIndex: l
      }) : (a += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;text-align:left;">
                <div style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" rx="2" stroke="none" fill="${t.color}"/></svg> ${o}</div>
                ${m ? `<div>${m}</div>` : ""}
            </div>`, e.value.style.chart.tooltip.showValue && (a += `<div>${e.value.translations.value}: <b>${ir(
        e.value.style.chart.layout.bars.dataLabels.value.formatter,
        t.sign === 1 ? t.value : -t.value,
        Ht({
          p: e.value.style.chart.tooltip.prefix,
          v: t.sign === 1 ? t.value : -t.value,
          s: e.value.style.chart.tooltip.suffix,
          r: e.value.style.chart.tooltip.roundingValue
        }),
        { datapoint: t, seriesIndex: l }
      )}</b></div>`), e.value.style.chart.tooltip.showPercentage && (a += `<div>${e.value.translations.percentageToTotal} : <b>${Ht({
        v: Math.abs(t.value) / L.value * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })}</b></div>`, t.isChild && (a += `<div>${e.value.translations.percentageToSerie}: <b>${Ht({
        v: Math.abs(t.value) / Math.abs(t.parentValue) * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })}</b></div>`)), ae2.value = `<div style="text-align:left">${a}</div>`);
    }
    function Pe(t, l, a, o) {
      if (!e.value.style.chart.layout.bars.dataLabels.value.show)
        return "";
      const m = ir(
        e.value.style.chart.layout.bars.dataLabels.value.formatter,
        k2(o === -1 && t >= 0 ? -t : t),
        Ht({
          p: e.value.style.chart.layout.bars.dataLabels.value.prefix,
          v: k2(o === -1 && t >= 0 ? -t : t),
          s: e.value.style.chart.layout.bars.dataLabels.value.suffix,
          r: e.value.style.chart.layout.bars.dataLabels.value.roundingValue
        }),
        { datapoint: l, seriesIndex: a }
      ), p2 = `(${Ne(t, true, e.value.style.chart.layout.bars.dataLabels.percentage.roundingPercentage)})`;
      return `${m}${e.value.style.chart.layout.bars.dataLabels.percentage.show ? ` ${p2}` : ""}`;
    }
    const w = computed(() => {
      const t = [
        e.value.translations.parentName,
        e.value.translations.value,
        e.value.translations.percentageToTotal,
        e.value.translations.childName,
        e.value.translations.value,
        e.value.translations.percentageToSerie,
        e.value.translations.percentageToTotal
      ], l = B.value.map((a) => a.isChild ? a.isFirstChild ? {
        color: a.color,
        parentName: a.parentName,
        parentValue: a.parentValue,
        percentageToTotal: a.parentValue / L.value,
        childName: a.name,
        childValue: a.sign === 1 ? a.value : -a.value,
        childPercentageToParent: Math.abs(a.value) / Math.abs(a.parentValue),
        childPercentageToTotal: Math.abs(a.value) / L.value
      } : {
        color: "",
        parentName: "",
        parentValue: "",
        percentageToTotal: "",
        childName: a.name,
        childValue: a.sign === 1 ? a.value : -a.value,
        childPercentageToParent: Math.abs(a.value) / Math.abs(a.parentValue),
        childPercentageToTotal: Math.abs(a.value) / L.value
      } : {
        color: a.color,
        parentName: a.name,
        parentValue: a.sign === 1 ? a.value : -a.value,
        percentageToTotal: Math.abs(a.value) / L.value,
        childName: "",
        childValue: "",
        childPercentageToParent: "",
        childPercentageToTotal: ""
      });
      return { head: t, body: l };
    });
    function Se2() {
      const t = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], l = w.value.head, a = w.value.body.map((p2) => [
        p2.parentName,
        p2.parentValue,
        p2.percentageToTotal,
        p2.childName,
        p2.childValue,
        p2.childPercentageToParent,
        p2.childPercentageToTotal
      ]), o = t.concat([l]).concat(a), m = Vt(o);
      Nt({ csvContent: m, title: e.value.style.chart.title.text || "vue-ui-vertical-bar" });
    }
    const G = ref(false);
    function Qe(t) {
      G.value = t, ce.value += 1;
    }
    function Ve() {
      $.value.showTable = !$.value.showTable;
    }
    function ze() {
      $.value.sortDesc = !$.value.sortDesc, J();
    }
    function Fe() {
      $.value.showTooltip = !$.value.showTooltip;
    }
    const Q2 = ref(false);
    function se() {
      Q2.value = !Q2.value;
    }
    return De({
      getData: Ke,
      recalculateHeight: J,
      generatePdf: me,
      generateCsv: Se2,
      generateImage: _e,
      toggleTable: Ve,
      toggleSort: ze,
      toggleTooltip: Fe,
      toggleAnnotator: se
    }), (t, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-vertical-bar ${G.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "verticalBarChart",
      ref: A,
      id: `vue-ui-vertical-bar_${V.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: A.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: Q2.value,
        onClose: se
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Ue.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: pe,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: ve,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ge.value}`,
          config: {
            title: {
              cy: "vertical-bar-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "vertical-bar-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && Y.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Ee,
        key: `user_options_${ce.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(be),
        isPrinting: unref(fe),
        uid: V.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasSort: e.value.userOptions.buttons.sort,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: G.value,
        isTooltip: $.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: A.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: Q2.value,
        onToggleFullscreen: Qe,
        onGeneratePdf: unref(me),
        onGenerateCsv: Se2,
        onGenerateImage: unref(_e),
        onToggleTable: Ve,
        onToggleSort: ze,
        onToggleTooltip: Fe,
        onToggleAnnotator: se
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
        t.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionSort ? {
          name: "optionSort",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionSort", {}, void 0, true)
          ]),
          key: "6"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
          ]),
          key: "7"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: o }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: o })), void 0, true)
          ]),
          key: "8"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasSort", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      e.value.style.chart.legend.show && e.value.style.chart.legend.position === "top" ? (openBlock(), createElementBlock("div", {
        key: 4,
        ref_key: "chartLegend",
        ref: le
      }, [
        (openBlock(), createBlock(C, {
          key: `legend_top_${oe.value}`,
          legendSet: z.value,
          config: Te.value,
          onClickMarker: l[0] || (l[0] = ({ legend: a }) => X(a.id))
        }, {
          item: withCtx(({ legend: a, index: o }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (m) => X(a.id),
              style: normalizeStyle(`opacity:${T.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name) + ": " + toDisplayString(unref(ir)(
              e.value.style.chart.layout.bars.dataLabels.value.formatter,
              a.value,
              unref(Ht)({
                p: e.value.style.chart.legend.prefix,
                v: a.value,
                s: e.value.style.chart.legend.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: a, seriesIndex: o }
            )), 13, Pt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"]))
      ], 512)) : createCommentVNode("", true),
      Y.value ? (openBlock(), createElementBlock("svg", {
        key: 5,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": G.value, "vue-data-ui-fulscreen--off": !G.value }),
        viewBox: `0 0 ${f.value.width <= 0 ? 10 : f.value.width} ${s2.value.fullHeight <= 0 ? 10 : s2.value.fullHeight}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (a, o) => (openBlock(), createElementBlock("linearGradient", {
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "0%",
          id: `vertical_bar_gradient_${V.value}_${o}`
        }, [
          createBaseVNode("stop", {
            offset: "0%",
            "stop-color": a.color
          }, null, 8, zt),
          createBaseVNode("stop", {
            offset: "100%",
            "stop-color": unref(dr)(unref(yt)(a.color, 0.03), 100 - e.value.style.chart.layout.bars.gradientIntensity)
          }, null, 8, Ft)
        ], 8, Vt2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (a, o) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: unref(k2)(D.value ? s2.value.left + s2.value.width / 2 - (a.sign === 1 ? 0 : P(a.value) <= 0 ? 1e-4 : P(a.value)) : s2.value.left),
            y: s2.value.top + (y.value + v.value) * o,
            width: unref(k2)(P(a.value) <= 0 ? 1e-4 : P(a.value)),
            height: v.value <= 0 ? 1e-4 : v.value,
            fill: e.value.style.chart.layout.bars.underlayerColor,
            rx: e.value.style.chart.layout.bars.borderRadius,
            class: normalizeClass({ animated: e.value.useCssAnimation })
          }, null, 10, Mt)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (a, o) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: unref(k2)(D.value ? s2.value.left + s2.value.width / 2 - (a.sign === 1 ? 0 : P(a.value) <= 0 ? 1e-4 : P(a.value)) : s2.value.left),
            y: s2.value.top + (y.value + v.value) * o,
            width: unref(k2)(P(a.value) <= 0 ? 1e-4 : P(a.value)),
            height: v.value <= 0 ? 1e-4 : v.value,
            fill: e.value.style.chart.layout.bars.useGradient ? `url(#vertical_bar_gradient_${V.value}_${o})` : unref(dr)(a.color, e.value.style.chart.layout.bars.fillOpacity),
            rx: e.value.style.chart.layout.bars.borderRadius,
            stroke: e.value.style.chart.layout.bars.useStroke ? a.color : "none",
            "stroke-width": e.value.style.chart.layout.bars.useStroke ? e.value.style.chart.layout.bars.strokeWidth : 0,
            class: normalizeClass({ animated: e.value.useCssAnimation })
          }, null, 10, Ot),
          (!a.isChild || a.isLastChild) && e.value.style.chart.layout.separators.show && o !== B.value.length - 1 ? (openBlock(), createElementBlock("line", {
            key: 0,
            x1: 0,
            x2: s2.value.left,
            y1: v.value + y.value / 2 + s2.value.top + (y.value + v.value) * o,
            y2: v.value + y.value / 2 + s2.value.top + (y.value + v.value) * o,
            stroke: e.value.style.chart.layout.separators.color,
            "stroke-width": e.value.style.chart.layout.separators.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, It)) : createCommentVNode("", true),
          D.value && e.value.style.chart.layout.separators.show ? (openBlock(), createElementBlock("line", {
            key: 1,
            x1: s2.value.left + s2.value.width / 2,
            x2: s2.value.left + s2.value.width / 2,
            y1: s2.value.top,
            y2: s2.value.bottom,
            stroke: e.value.style.chart.layout.separators.color,
            "stroke-width": e.value.style.chart.layout.separators.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, At)) : createCommentVNode("", true),
          createBaseVNode("text", {
            x: D.value ? s2.value.left + s2.value.width / 2 + (a.sign === 1 ? -12 : 12) + (a.sign === 1 ? -e.value.style.chart.layout.bars.dataLabels.offsetX : e.value.style.chart.layout.bars.dataLabels.offsetX) : qe(a.value) + 3 + e.value.style.chart.layout.bars.dataLabels.offsetX,
            y: s2.value.top + (y.value + v.value) * o + v.value / 2 + e.value.style.chart.layout.bars.dataLabels.fontSize / 2,
            "text-anchor": !D.value || a.sign === -1 ? "start" : "end",
            "font-size": e.value.style.chart.layout.bars.dataLabels.fontSize,
            fill: e.value.style.chart.layout.bars.dataLabels.color,
            "font-weight": e.value.style.chart.layout.bars.dataLabels.bold ? "bold" : "normal"
          }, toDisplayString(Pe(a.value, a, o, a.sign)), 9, Bt),
          (a.isChild || !a.hasChildren) && e.value.style.chart.layout.bars.nameLabels.show ? (openBlock(), createElementBlock("text", {
            key: 2,
            "text-anchor": "end",
            x: s2.value.left - 3 + e.value.style.chart.layout.bars.nameLabels.offsetX,
            y: s2.value.top + (y.value + v.value) * o + v.value / 2 + e.value.style.chart.layout.bars.nameLabels.fontSize / 2,
            "font-size": e.value.style.chart.layout.bars.nameLabels.fontSize,
            fill: e.value.style.chart.layout.bars.nameLabels.color,
            "font-weight": e.value.style.chart.layout.bars.nameLabels.bold ? "bold" : "normal"
          }, toDisplayString(a.name), 9, Dt2)) : createCommentVNode("", true),
          a.isChild && a.childIndex === 0 && e.value.style.chart.layout.bars.parentLabels.show ? (openBlock(), createElementBlock("text", {
            key: 3,
            x: 3 + e.value.style.chart.layout.bars.parentLabels.offsetX,
            y: E2(a, o).y,
            "font-size": e.value.style.chart.layout.bars.parentLabels.fontSize,
            fill: e.value.style.chart.layout.bars.parentLabels.color,
            "font-weight": e.value.style.chart.layout.bars.parentLabels.bold ? "bold" : "normal",
            "text-anchor": "start"
          }, toDisplayString(E2(a, o).name), 9, Rt)) : createCommentVNode("", true),
          a.isChild && a.childIndex === 0 && e.value.style.chart.layout.bars.parentLabels.show ? (openBlock(), createElementBlock("text", {
            key: 4,
            x: 3 + e.value.style.chart.layout.bars.parentLabels.offsetX,
            y: E2(a, o).y + e.value.style.chart.layout.bars.parentLabels.fontSize + 6,
            "font-size": e.value.style.chart.layout.bars.parentLabels.fontSize,
            fill: e.value.style.chart.layout.bars.parentLabels.color,
            "font-weight": e.value.style.chart.layout.bars.dataLabels.bold ? "bold" : "normal",
            "text-anchor": "start"
          }, toDisplayString(Pe(E2(a, o).value), E2(a, o), o, a.parentSign || a.sign), 9, Xt2)) : createCommentVNode("", true),
          createBaseVNode("rect", {
            "data-cy-trap": "",
            x: 0,
            y: s2.value.top + (y.value + v.value) * o - y.value / 2,
            width: f.value.width <= 0 ? 1e-4 : f.value.width,
            height: v.value + y.value <= 0 ? 1e-4 : v.value + y.value,
            fill: ne.value === a.id ? unref(dr)(e.value.style.chart.layout.highlighter.color, e.value.style.chart.layout.highlighter.opacity) : "transparent",
            onMouseenter: (m) => Je(a, o),
            onMouseleave: l[1] || (l[1] = (m) => {
              Ge.value = null, te2.value = false, ne.value = null;
            })
          }, null, 40, Et)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: f.value }, void 0, true)
      ], 14, St)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Gt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(fe) || unref(be) })), void 0, true)
      ])) : createCommentVNode("", true),
      Y.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
        config: {
          type: "verticalBar",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            verticalBar: {
              axis: {
                color: "#CCCCCC"
              },
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.chart.legend.show && e.value.style.chart.legend.position === "bottom" ? (openBlock(), createElementBlock("div", {
        key: 8,
        ref_key: "chartLegend",
        ref: le
      }, [
        (openBlock(), createBlock(C, {
          key: `legend_bottom_${oe.value}`,
          legendSet: z.value,
          config: Te.value,
          onClickMarker: l[2] || (l[2] = ({ legend: a }) => X(a.id))
        }, {
          item: withCtx(({ legend: a, index: o }) => [
            createBaseVNode("div", {
              onClick: (m) => X(a.id),
              style: normalizeStyle(`opacity:${T.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name) + ": " + toDisplayString(unref(ir)(
              e.value.style.chart.layout.bars.dataLabels.value.formatter,
              a.value,
              unref(Ht)({
                p: e.value.style.chart.legend.prefix,
                v: a.value,
                s: e.value.style.chart.legend.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: a, seriesIndex: o }
            )), 13, Ut)
          ]),
          _: 1
        }, 8, ["legendSet", "config"]))
      ], 512)) : createCommentVNode("", true),
      renderSlot(t.$slots, "legend", { legend: z.value }, void 0, true),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 9,
        ref_key: "source",
        ref: he,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: $.value.showTooltip && te2.value && T.value.length < C2.dataset.length,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: A.value,
        content: ae2.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ue.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ue.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      Y.value ? (openBlock(), createBlock(R, {
        key: 10,
        hideDetails: "",
        config: {
          open: $.value.showTable,
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
          createBaseVNode("div", {
            ref_key: "tableContainer",
            ref: xe,
            class: "vue-ui-vertical-bar-table"
          }, [
            createBaseVNode("div", Ht2, [
              createBaseVNode("div", {
                role: "button",
                tabindex: "0",
                style: normalizeStyle(`width:32px; position: absolute; top: 0; right:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${e.value.table.th.backgroundColor};`),
                onClick: l[3] || (l[3] = (a) => $.value.showTable = false),
                onKeypress: l[4] || (l[4] = withKeys((a) => $.value.showTable = false, ["enter"]))
              }, [
                createVNode(u, {
                  name: "close",
                  stroke: e.value.table.th.color,
                  "stroke-width": 2
                }, null, 8, ["stroke"])
              ], 36),
              createBaseVNode("div", {
                style: { width: "100%", "container-type": "inline-size" },
                class: normalizeClass({ "vue-ui-responsive": $e.value })
              }, [
                createBaseVNode("table", Wt, [
                  createBaseVNode("caption", {
                    style: normalizeStyle({ backgroundColor: e.value.table.th.backgroundColor, color: e.value.table.th.color, outline: e.value.table.th.outline }),
                    class: "vue-ui-data-table__caption"
                  }, [
                    createTextVNode(toDisplayString(e.value.style.chart.title.text) + " ", 1),
                    e.value.style.chart.title.subtitle.text ? (openBlock(), createElementBlock("span", jt2, toDisplayString(e.value.style.chart.title.subtitle.text), 1)) : createCommentVNode("", true)
                  ], 4),
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", {
                      role: "row",
                      style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color}`)
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(w.value.head, (a) => (openBlock(), createElementBlock("th", {
                        style: normalizeStyle(`outline:${e.value.table.th.outline}`)
                      }, [
                        createBaseVNode("div", Yt, toDisplayString(a), 1)
                      ], 4))), 256))
                    ], 4),
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                      }, null, 4),
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline};text-align:right;padding-right:5px;font-weight:bold`)
                      }, "∑ " + toDisplayString(e.value.table.td.prefix) + toDisplayString(isNaN(L.value) ? "" : L.value.toFixed(e.value.table.td.roundingValue)) + toDisplayString(e.value.table.td.suffix), 5),
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline};text-align:right;padding-right:5px;font-weight:bold`)
                      }, "100%", 4),
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                      }, null, 4),
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                      }, null, 4),
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                      }, null, 4),
                      createBaseVNode("th", {
                        style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                      }, null, 4)
                    ])
                  ]),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(w.value.body, (a, o) => (openBlock(), createElementBlock("tr", {
                      class: normalizeClass({ "vue-ui-data-table__tbody__row": true, "vue-ui-data-table__tbody__row-even": o % 2 === 0, "vue-ui-data-table__tbody__row-odd": o % 2 !== 0 }),
                      style: normalizeStyle(`background:${e.value.table.td.backgroundColor};color:${e.value.table.td.color}`)
                    }, [
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline};font-variant-numeric: tabular-nums;`),
                        "data-cell": w.value.head[0] ?? ""
                      }, [
                        createBaseVNode("div", Kt2, [
                          a.color ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            style: normalizeStyle(`color:${a.color};margin-right:3px`)
                          }, "⬤", 4)) : createCommentVNode("", true),
                          createBaseVNode("span", null, toDisplayString(a.parentName), 1)
                        ])
                      ], 12, qt2),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": w.value.head[1] ?? ""
                      }, [
                        createBaseVNode("div", Qt, toDisplayString(e.value.table.td.prefix) + toDisplayString(["", NaN, void 0].includes(a.parentValue) ? "" : a.parentValue.toFixed(e.value.table.td.roundingValue)) + toDisplayString(e.value.table.td.suffix), 1)
                      ], 12, Jt2),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": w.value.head[2] ?? ""
                      }, [
                        createBaseVNode("div", ea, toDisplayString(["", NaN, void 0].includes(a.percentageToTotal) ? "" : `${(a.percentageToTotal * 100).toFixed(e.value.table.td.roundingPercentage)}%`), 1)
                      ], 12, Zt),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": w.value.head[3] ?? ""
                      }, [
                        createBaseVNode("div", aa, toDisplayString(a.childName), 1)
                      ], 12, ta),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": w.value.head[4] ?? ""
                      }, [
                        createBaseVNode("div", oa, toDisplayString(e.value.table.td.prefix) + toDisplayString(["", NaN, void 0].includes(a.childValue) ? "" : a.childValue.toFixed(e.value.table.td.roundingValue)) + toDisplayString(e.value.table.td.suffix), 1)
                      ], 12, la),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": w.value.head[5] ?? ""
                      }, [
                        createBaseVNode("div", ua, toDisplayString(["", NaN, void 0].includes(a.childPercentageToParent) ? "" : `${(a.childPercentageToParent * 100).toFixed(e.value.table.td.roundingPercentage)}%`), 1)
                      ], 12, na),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": w.value.head[6] ?? ""
                      }, [
                        createBaseVNode("div", ra, toDisplayString(["", NaN, void 0].includes(a.childPercentageToTotal) ? "" : `${(a.childPercentageToTotal * 100).toFixed(e.value.table.td.roundingPercentage)}%`), 1)
                      ], 12, sa)
                    ], 6))), 256))
                  ])
                ])
              ], 2)
            ])
          ], 512)
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Nt2));
  }
};
var Ca = s(ia, [["__scopeId", "data-v-0976c0bc"]]);
export {
  Ca as default
};
//# sourceMappingURL=vue-ui-vertical-bar-CZxN7L9z-DZKAE6DM.js.map
