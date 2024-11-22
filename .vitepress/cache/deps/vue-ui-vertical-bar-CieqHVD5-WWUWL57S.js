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
import {
  u
} from "./chunk-57NPTS3S.js";
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
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  cr,
  et,
  j,
  k,
  nr,
  oe,
  or,
  pt
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-vertical-bar-CieqHVD5.js
var kt = ["id"];
var $t2 = ["onClick"];
var wt = ["xmlns", "viewBox"];
var Ct = ["id"];
var Tt = ["stop-color"];
var Lt2 = ["stop-color"];
var Nt2 = ["x", "y", "width", "height", "fill", "rx"];
var Pt = ["x", "y", "width", "height", "fill", "rx", "stroke", "stroke-width"];
var St = ["x2", "y1", "y2", "stroke", "stroke-width"];
var Vt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var zt = ["x", "y", "text-anchor", "font-size", "fill", "font-weight"];
var Ft = ["x", "y", "font-size", "fill", "font-weight"];
var Mt = ["x", "y", "font-size", "fill", "font-weight"];
var It = ["x", "y", "font-size", "fill", "font-weight"];
var Bt = ["y", "width", "height", "fill", "onMouseenter"];
var Ot2 = {
  key: 4,
  class: "vue-data-ui-watermark"
};
var Dt = ["onClick"];
var Rt = { style: "width:100%;padding-top: 36px;position:relative" };
var Xt2 = { class: "vue-ui-data-table" };
var At = { key: 0 };
var Et = { style: { width: "100%" } };
var Gt2 = ["data-cell"];
var Ut = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Ht2 = ["data-cell"];
var Wt = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var jt = ["data-cell"];
var Yt = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var qt = ["data-cell"];
var Kt2 = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Jt = ["data-cell"];
var Qt2 = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Zt = ["data-cell"];
var ea = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var ta = ["data-cell"];
var aa = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var la = {
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
  setup(Me, { expose: Ie, emit: Be }) {
    const w = Me;
    useCssVars((a) => ({
      "3d035ab4": a.tdo
    }));
    const { vue_ui_vertical_bar: Oe } = oe(), W = computed(() => !!w.dataset && w.dataset.length), V = ref(Lt()), De = ref(null), ee = ref(false), te = ref(""), j2 = ref(0), Re = ref(null), ie2 = ref(0), X = ref(null), de = ref(null), ae = ref(null), ce = ref(0), le = ref(0), e = computed({
      get: () => ve(),
      set: (a) => a
    });
    function ve() {
      const a = c({
        userConfig: w.config,
        defaultConfig: Oe
      });
      return a.theme ? {
        ...c({
          userConfig: Ge.vue_ui_vertical_bar[a.theme] || w.config,
          defaultConfig: a
        }),
        customPalette: R2[a.theme] || et
      } : a;
    }
    watch(() => w.config, (a) => {
      e.value = ve(), _e(), ce.value += 1, le.value += 1, v.value = e.value.style.chart.layout.bars.height, g.value = e.value.style.chart.layout.bars.gap;
    }, { deep: true }), watch(() => w.dataset, q, { deep: true });
    const { isPrinting: he, isImaging: pe, generatePdf: ge, generateImage: ye } = se({
      elementId: `vue-ui-vertical-bar_${V.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-vertical-bar"
    }), fe = computed(() => or(e.value.customPalette)), be = ref(null), me = ref(false), Xe = computed(() => e.value.table.responsiveBreakpoint), Y = ref(null);
    onMounted(() => {
      _e();
    });
    function _e() {
      if (Xt(w.dataset) && Kt({
        componentName: "VueUiVerticalBar",
        type: "dataset"
      }), j2.value = w.dataset.flatMap((a) => a.children && a.children.length > 0 ? a.children.length : 1).reduce((a, l) => a + l, 0), Ae(), e.value.responsive) {
        const a = O(() => {
          const { width: l, height: t } = M({
            chart: X.value,
            title: e.value.style.chart.title.text ? de.value : null,
            legend: e.value.style.chart.legend.show ? ae.value : null
          });
          $e.value = l, v.value = t / j2.value - g.value * 2;
        });
        Y.value = new ResizeObserver(a), Y.value.observe(X.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      Y.value && Y.value.disconnect();
    });
    function Ae() {
      new ResizeObserver((l) => {
        l.forEach((t) => {
          me.value = t.contentRect.width < Xe.value;
        });
      }).observe(be.value);
    }
    const $ = ref({
      showTable: e.value.table.show,
      sortDesc: e.value.style.chart.layout.bars.sort === "desc",
      showTooltip: e.value.style.chart.tooltip.show
    }), xe = computed(() => $.value.sortDesc), z = computed(() => (w.dataset.forEach((a, l) => {
      !a.value && !a.children && Kt({
        componentName: "VueUiVerticalBar",
        type: "datasetAttributeEmpty",
        property: `value (index ${l})`
      }), a.children && (Xt(a.children) ? Kt({
        componentName: "VueUiVerticalBar",
        type: "datasetAttributeEmpty",
        property: `children (index ${l})`
      }) : a.children.forEach((t, o) => {
        [null, void 0].includes(t.name) && Kt({
          componentName: "VueUiVerticalBar",
          type: "datasetSerieAttribute",
          property: "name",
          key: "children",
          index: o
        });
      }));
    }), w.dataset.map((a, l) => {
      const t = `vertical_parent_${l}_${V.value}`, o = a.children && a.children.length > 0, f = k(a.value ? a.value : o ? a.children.map((_) => _.value || 0).reduce((_, N) => _ + N, 0) : 0), p2 = f >= 0 ? 1 : -1;
      return {
        ...a,
        id: t,
        shape: "square",
        opacity: T.value.includes(t) ? 0.5 : 1,
        value: Math.abs(f),
        sign: p2,
        hasChildren: o,
        isChild: false,
        segregate: () => A(t),
        isSegregated: T.value.includes(t),
        color: j(a.color) || fe.value[l] || et[l] || et[l % et.length],
        children: !a.children || !a.children.length ? [] : a.children.toSorted((_, N) => xe.value ? N.value - _.value : _.value - N.value).map((_, N) => ({
          ..._,
          value: k(Math.abs(_.value)),
          sign: _.value >= 0 ? 1 : -1,
          isChild: true,
          parentId: t,
          parentName: a.name,
          parentValue: f,
          parentSign: p2,
          id: `vertical_child_${l}_${N}_${V.value}`,
          childIndex: N,
          color: j(_.color) || j(a.color) || fe.value[l] || et[l] || et[l % et.length]
        })).map((_, N) => ({
          ..._,
          isFirstChild: N === 0,
          isLastChild: N === a.children.length - 1
        }))
      };
    }).toSorted((a, l) => xe.value ? l.value - a.value : a.value - l.value))), ke = computed(() => ({
      cy: "vertical-bar-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), v = ref(e.value.style.chart.layout.bars.height), g = ref(e.value.style.chart.layout.bars.gap), Ee = computed(() => (v.value + g.value) * j2.value), $e = ref(512), y = computed(() => ({
      width: $e.value,
      height: Ee.value,
      padding: {
        top: 12,
        left: 128 + e.value.style.chart.layout.bars.offsetX,
        right: 64 + e.value.style.chart.layout.bars.paddingRight,
        bottom: 12
      }
    })), s2 = computed(() => ({
      fullHeight: y.value.padding.top + y.value.padding.bottom + y.value.height,
      top: y.value.padding.top,
      left: y.value.padding.left,
      right: y.value.width - y.value.padding.right,
      bottom: y.value.padding.top + y.value.height,
      width: y.value.width - (y.value.padding.left + y.value.padding.right)
    }));
    function q() {
      j2.value = F.value.flatMap((a) => a.children && a.children.length > 0 ? a.children.length : 1).reduce((a, l) => a + l, 0);
    }
    const T = ref([]);
    function A(a) {
      T.value.includes(a) ? T.value = T.value.filter((l) => l !== a) : T.value.push(a), q(), Be("selectLegend", F.value);
    }
    const F = computed(() => z.value.filter((a) => !T.value.includes(a.id))), L = computed(() => F.value.map((a) => Math.abs(a.value)).reduce((a, l) => a + l, 0));
    function we(a, l = false, t = 0) {
      return l ? Gt({
        v: k(Math.abs(a) / L.value * 100),
        s: "%",
        r: t
      }) : Math.abs(a) / L.value;
    }
    const B = computed(() => F.value.flatMap((a) => a.hasChildren ? a.children : a)), O2 = computed(() => B.value.map((a) => a.sign).includes(-1)), Ge2 = computed(() => Math.max(...F.value.flatMap((a) => a.children && a.children.length ? Math.max(...a.children.map((l) => l.value)) : a.value)));
    function P(a) {
      const l = a / Ge2.value;
      return s2.value.width / (O2.value ? 2 : 1) * l;
    }
    function Ue(a) {
      return P(a) + s2.value.left;
    }
    function E2(a, l) {
      const t = F.value.find((p2) => p2.id === a.parentId), o = s2.value.top + (g.value + v.value) * l, f = t.children.length * (g.value + v.value);
      return {
        y: o + f / 2 - e.value.style.chart.layout.bars.parentLabels.fontSize,
        name: t.name,
        value: [void 0, NaN, null].includes(t.value) ? "" : t.sign === 1 ? t.value : -t.value,
        percentageToTotal: isNaN(t.value / L.value) ? "" : we(t.value, true, e.value.style.chart.layout.bars.dataLabels.percentage.roundingPercentage),
        sign: t.sign
      };
    }
    function He() {
      return F.value;
    }
    const oe2 = ref(null), ne = ref(null);
    function We(a, l) {
      ne.value = {
        datapoint: a,
        seriesIndex: l,
        series: z.value,
        config: e.value
      }, ee.value = true, oe2.value = a.id;
      let t = "";
      const o = a.isChild ? a.parentName : a.name, f = a.isChild ? a.name : "", p2 = e.value.style.chart.tooltip.customFormat;
      Ht(p2) && $t(() => p2({
        datapoint: a,
        series: z.value,
        config: e.value,
        seriesIndex: l
      })) ? te.value = p2({
        datapoint: a,
        series: z.value,
        config: e.value,
        seriesIndex: l
      }) : (t += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;text-align:left;">
                <div style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" rx="2" stroke="none" fill="${a.color}"/></svg> ${o}</div>
                ${f ? `<div>${f}</div>` : ""}
            </div>`, e.value.style.chart.tooltip.showValue && (t += `<div>${e.value.translations.value}: <b>${nr(
        e.value.style.chart.layout.bars.dataLabels.value.formatter,
        a.sign === 1 ? a.value : -a.value,
        Gt({
          p: e.value.style.chart.tooltip.prefix,
          v: a.sign === 1 ? a.value : -a.value,
          s: e.value.style.chart.tooltip.suffix,
          r: e.value.style.chart.tooltip.roundingValue
        }),
        { datapoint: a, seriesIndex: l }
      )}</b></div>`), e.value.style.chart.tooltip.showPercentage && (t += `<div>${e.value.translations.percentageToTotal} : <b>${Gt({
        v: Math.abs(a.value) / L.value * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })}</b></div>`, a.isChild && (t += `<div>${e.value.translations.percentageToSerie}: <b>${Gt({
        v: Math.abs(a.value) / Math.abs(a.parentValue) * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })}</b></div>`)), te.value = `<div style="text-align:left">${t}</div>`);
    }
    function Ce(a, l, t, o) {
      if (!e.value.style.chart.layout.bars.dataLabels.value.show)
        return "";
      const f = nr(
        e.value.style.chart.layout.bars.dataLabels.value.formatter,
        k(o === -1 && a >= 0 ? -a : a),
        Gt({
          p: e.value.style.chart.layout.bars.dataLabels.value.prefix,
          v: k(o === -1 && a >= 0 ? -a : a),
          s: e.value.style.chart.layout.bars.dataLabels.value.suffix,
          r: e.value.style.chart.layout.bars.dataLabels.value.roundingValue
        }),
        { datapoint: l, seriesIndex: t }
      ), p2 = `(${we(a, true, e.value.style.chart.layout.bars.dataLabels.percentage.roundingPercentage)})`;
      return `${f}${e.value.style.chart.layout.bars.dataLabels.percentage.show ? ` ${p2}` : ""}`;
    }
    const C2 = computed(() => {
      const a = [
        e.value.translations.parentName,
        e.value.translations.value,
        e.value.translations.percentageToTotal,
        e.value.translations.childName,
        e.value.translations.value,
        e.value.translations.percentageToSerie,
        e.value.translations.percentageToTotal
      ], l = B.value.map((t) => t.isChild ? t.isFirstChild ? {
        color: t.color,
        parentName: t.parentName,
        parentValue: t.parentValue,
        percentageToTotal: t.parentValue / L.value,
        childName: t.name,
        childValue: t.sign === 1 ? t.value : -t.value,
        childPercentageToParent: Math.abs(t.value) / Math.abs(t.parentValue),
        childPercentageToTotal: Math.abs(t.value) / L.value
      } : {
        color: "",
        parentName: "",
        parentValue: "",
        percentageToTotal: "",
        childName: t.name,
        childValue: t.sign === 1 ? t.value : -t.value,
        childPercentageToParent: Math.abs(t.value) / Math.abs(t.parentValue),
        childPercentageToTotal: Math.abs(t.value) / L.value
      } : {
        color: t.color,
        parentName: t.name,
        parentValue: t.sign === 1 ? t.value : -t.value,
        percentageToTotal: Math.abs(t.value) / L.value,
        childName: "",
        childValue: "",
        childPercentageToParent: "",
        childPercentageToTotal: ""
      });
      return { head: a, body: l };
    });
    function Te() {
      const a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], l = C2.value.head, t = C2.value.body.map((p2) => [
        p2.parentName,
        p2.parentValue,
        p2.percentageToTotal,
        p2.childName,
        p2.childValue,
        p2.childPercentageToParent,
        p2.childPercentageToTotal
      ]), o = a.concat([l]).concat(t), f = Nt(o);
      Ot({ csvContent: f, title: e.value.style.chart.title.text || "vue-ui-vertical-bar" });
    }
    const G = ref(false);
    function je(a) {
      G.value = a, ie2.value += 1;
    }
    function Le() {
      $.value.showTable = !$.value.showTable;
    }
    function Ne() {
      $.value.sortDesc = !$.value.sortDesc, q();
    }
    function Pe() {
      $.value.showTooltip = !$.value.showTooltip;
    }
    return Ie({
      getData: He,
      recalculateHeight: q,
      generatePdf: ge,
      generateCsv: Te,
      generateImage: ye,
      toggleTable: Le,
      toggleSort: Ne,
      toggleTooltip: Pe
    }), (a, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-vertical-bar ${G.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "verticalBarChart",
      ref: X,
      id: `vue-ui-vertical-bar_${V.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: de,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ce.value}`,
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
      e.value.userOptions.show && W.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: De,
        key: `user_options_${ie2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(pe),
        isPrinting: unref(he),
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
        chartElement: X.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: je,
        onGeneratePdf: unref(ge),
        onGenerateCsv: Te,
        onGenerateImage: unref(ye),
        onToggleTable: Le,
        onToggleSort: Ne,
        onToggleTooltip: Pe
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
        a.$slots.optionSort ? {
          name: "optionSort",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionSort", {}, void 0, true)
          ]),
          key: "6"
        } : void 0,
        a.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: o }) => [
            renderSlot(a.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: o })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasSort", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      e.value.style.chart.legend.show && e.value.style.chart.legend.position === "top" ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartLegend",
        ref: ae
      }, [
        (openBlock(), createBlock(C, {
          key: `legend_top_${le.value}`,
          legendSet: z.value,
          config: ke.value,
          onClickMarker: l[0] || (l[0] = ({ legend: t }) => A(t.id))
        }, {
          item: withCtx(({ legend: t, index: o }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (f) => A(t.id),
              style: normalizeStyle(`opacity:${T.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name) + ": " + toDisplayString(unref(nr)(
              e.value.style.chart.layout.bars.dataLabels.value.formatter,
              t.value,
              unref(Gt)({
                p: e.value.style.chart.legend.prefix,
                v: t.value,
                s: e.value.style.chart.legend.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: t, seriesIndex: o }
            )), 13, $t2)
          ]),
          _: 1
        }, 8, ["legendSet", "config"]))
      ], 512)) : createCommentVNode("", true),
      W.value ? (openBlock(), createElementBlock("svg", {
        key: 3,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": G.value, "vue-data-ui-fulscreen--off": !G.value }),
        viewBox: `0 0 ${y.value.width <= 0 ? 10 : y.value.width} ${s2.value.fullHeight <= 0 ? 10 : s2.value.fullHeight}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (t, o) => (openBlock(), createElementBlock("linearGradient", {
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "0%",
          id: `vertical_bar_gradient_${V.value}_${o}`
        }, [
          createBaseVNode("stop", {
            offset: "0%",
            "stop-color": t.color
          }, null, 8, Tt),
          createBaseVNode("stop", {
            offset: "100%",
            "stop-color": unref(cr)(unref(pt)(t.color, 0.03), 100 - e.value.style.chart.layout.bars.gradientIntensity)
          }, null, 8, Lt2)
        ], 8, Ct))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (t, o) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: unref(k)(O2.value ? s2.value.left + s2.value.width / 2 - (t.sign === 1 ? 0 : P(t.value) <= 0 ? 1e-4 : P(t.value)) : s2.value.left),
            y: s2.value.top + (g.value + v.value) * o,
            width: unref(k)(P(t.value) <= 0 ? 1e-4 : P(t.value)),
            height: v.value <= 0 ? 1e-4 : v.value,
            fill: e.value.style.chart.layout.bars.underlayerColor,
            rx: e.value.style.chart.layout.bars.borderRadius,
            class: normalizeClass({ animated: e.value.useCssAnimation })
          }, null, 10, Nt2)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (t, o) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: unref(k)(O2.value ? s2.value.left + s2.value.width / 2 - (t.sign === 1 ? 0 : P(t.value) <= 0 ? 1e-4 : P(t.value)) : s2.value.left),
            y: s2.value.top + (g.value + v.value) * o,
            width: unref(k)(P(t.value) <= 0 ? 1e-4 : P(t.value)),
            height: v.value <= 0 ? 1e-4 : v.value,
            fill: e.value.style.chart.layout.bars.useGradient ? `url(#vertical_bar_gradient_${V.value}_${o})` : unref(cr)(t.color, e.value.style.chart.layout.bars.fillOpacity),
            rx: e.value.style.chart.layout.bars.borderRadius,
            stroke: e.value.style.chart.layout.bars.useStroke ? t.color : "none",
            "stroke-width": e.value.style.chart.layout.bars.useStroke ? e.value.style.chart.layout.bars.strokeWidth : 0,
            class: normalizeClass({ animated: e.value.useCssAnimation })
          }, null, 10, Pt),
          (!t.isChild || t.isLastChild) && e.value.style.chart.layout.separators.show && o !== B.value.length - 1 ? (openBlock(), createElementBlock("line", {
            key: 0,
            x1: 0,
            x2: s2.value.left,
            y1: v.value + g.value / 2 + s2.value.top + (g.value + v.value) * o,
            y2: v.value + g.value / 2 + s2.value.top + (g.value + v.value) * o,
            stroke: e.value.style.chart.layout.separators.color,
            "stroke-width": e.value.style.chart.layout.separators.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, St)) : createCommentVNode("", true),
          O2.value && e.value.style.chart.layout.separators.show ? (openBlock(), createElementBlock("line", {
            key: 1,
            x1: s2.value.left + s2.value.width / 2,
            x2: s2.value.left + s2.value.width / 2,
            y1: s2.value.top,
            y2: s2.value.bottom,
            stroke: e.value.style.chart.layout.separators.color,
            "stroke-width": e.value.style.chart.layout.separators.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Vt)) : createCommentVNode("", true),
          createBaseVNode("text", {
            x: O2.value ? s2.value.left + s2.value.width / 2 + (t.sign === 1 ? -12 : 12) + (t.sign === 1 ? -e.value.style.chart.layout.bars.dataLabels.offsetX : e.value.style.chart.layout.bars.dataLabels.offsetX) : Ue(t.value) + 3 + e.value.style.chart.layout.bars.dataLabels.offsetX,
            y: s2.value.top + (g.value + v.value) * o + v.value / 2 + e.value.style.chart.layout.bars.dataLabels.fontSize / 2,
            "text-anchor": !O2.value || t.sign === -1 ? "start" : "end",
            "font-size": e.value.style.chart.layout.bars.dataLabels.fontSize,
            fill: e.value.style.chart.layout.bars.dataLabels.color,
            "font-weight": e.value.style.chart.layout.bars.dataLabels.bold ? "bold" : "normal"
          }, toDisplayString(Ce(t.value, t, o, t.sign)), 9, zt),
          (t.isChild || !t.hasChildren) && e.value.style.chart.layout.bars.nameLabels.show ? (openBlock(), createElementBlock("text", {
            key: 2,
            "text-anchor": "end",
            x: s2.value.left - 3 + e.value.style.chart.layout.bars.nameLabels.offsetX,
            y: s2.value.top + (g.value + v.value) * o + v.value / 2 + e.value.style.chart.layout.bars.nameLabels.fontSize / 2,
            "font-size": e.value.style.chart.layout.bars.nameLabels.fontSize,
            fill: e.value.style.chart.layout.bars.nameLabels.color,
            "font-weight": e.value.style.chart.layout.bars.nameLabels.bold ? "bold" : "normal"
          }, toDisplayString(t.name), 9, Ft)) : createCommentVNode("", true),
          t.isChild && t.childIndex === 0 && e.value.style.chart.layout.bars.parentLabels.show ? (openBlock(), createElementBlock("text", {
            key: 3,
            x: 3 + e.value.style.chart.layout.bars.parentLabels.offsetX,
            y: E2(t, o).y,
            "font-size": e.value.style.chart.layout.bars.parentLabels.fontSize,
            fill: e.value.style.chart.layout.bars.parentLabels.color,
            "font-weight": e.value.style.chart.layout.bars.parentLabels.bold ? "bold" : "normal",
            "text-anchor": "start"
          }, toDisplayString(E2(t, o).name), 9, Mt)) : createCommentVNode("", true),
          t.isChild && t.childIndex === 0 && e.value.style.chart.layout.bars.parentLabels.show ? (openBlock(), createElementBlock("text", {
            key: 4,
            x: 3 + e.value.style.chart.layout.bars.parentLabels.offsetX,
            y: E2(t, o).y + e.value.style.chart.layout.bars.parentLabels.fontSize + 6,
            "font-size": e.value.style.chart.layout.bars.parentLabels.fontSize,
            fill: e.value.style.chart.layout.bars.parentLabels.color,
            "font-weight": e.value.style.chart.layout.bars.dataLabels.bold ? "bold" : "normal",
            "text-anchor": "start"
          }, toDisplayString(Ce(E2(t, o).value), E2(t, o), o, t.parentSign || t.sign), 9, It)) : createCommentVNode("", true),
          createBaseVNode("rect", {
            "data-cy-trap": "",
            x: 0,
            y: s2.value.top + (g.value + v.value) * o - g.value / 2,
            width: y.value.width <= 0 ? 1e-4 : y.value.width,
            height: v.value + g.value <= 0 ? 1e-4 : v.value + g.value,
            fill: oe2.value === t.id ? unref(cr)(e.value.style.chart.layout.highlighter.color, e.value.style.chart.layout.highlighter.opacity) : "transparent",
            onMouseenter: (f) => We(t, o),
            onMouseleave: l[1] || (l[1] = (f) => {
              Re.value = null, ee.value = false, oe2.value = null;
            })
          }, null, 40, Bt)
        ]))), 256)),
        renderSlot(a.$slots, "svg", { svg: y.value }, void 0, true)
      ], 14, wt)) : createCommentVNode("", true),
      a.$slots.watermark ? (openBlock(), createElementBlock("div", Ot2, [
        renderSlot(a.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(he) || unref(pe) })), void 0, true)
      ])) : createCommentVNode("", true),
      W.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 5,
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
        key: 6,
        ref_key: "chartLegend",
        ref: ae
      }, [
        (openBlock(), createBlock(C, {
          key: `legend_bottom_${le.value}`,
          legendSet: z.value,
          config: ke.value,
          onClickMarker: l[2] || (l[2] = ({ legend: t }) => A(t.id))
        }, {
          item: withCtx(({ legend: t, index: o }) => [
            createBaseVNode("div", {
              onClick: (f) => A(t.id),
              style: normalizeStyle(`opacity:${T.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name) + ": " + toDisplayString(unref(nr)(
              e.value.style.chart.layout.bars.dataLabels.value.formatter,
              t.value,
              unref(Gt)({
                p: e.value.style.chart.legend.prefix,
                v: t.value,
                s: e.value.style.chart.legend.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: t, seriesIndex: o }
            )), 13, Dt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"]))
      ], 512)) : createCommentVNode("", true),
      renderSlot(a.$slots, "legend", { legend: z.value }, void 0, true),
      createVNode(E, {
        show: $.value.showTooltip && ee.value && T.value.length < w.dataset.length,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: X.value,
        content: te.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(a.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ne.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(a.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ne.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      W.value ? (openBlock(), createBlock(R, {
        key: 7,
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
            ref: be,
            class: "vue-ui-vertical-bar-table"
          }, [
            createBaseVNode("div", Rt, [
              createBaseVNode("div", {
                role: "button",
                tabindex: "0",
                style: normalizeStyle(`width:32px; position: absolute; top: 0; right:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${e.value.table.th.backgroundColor};`),
                onClick: l[3] || (l[3] = (t) => $.value.showTable = false),
                onKeypress: l[4] || (l[4] = withKeys((t) => $.value.showTable = false, ["enter"]))
              }, [
                createVNode(u, {
                  name: "close",
                  stroke: e.value.table.th.color,
                  "stroke-width": 2
                }, null, 8, ["stroke"])
              ], 36),
              createBaseVNode("div", {
                style: { width: "100%", "container-type": "inline-size" },
                class: normalizeClass({ "vue-ui-responsive": me.value })
              }, [
                createBaseVNode("table", Xt2, [
                  createBaseVNode("caption", {
                    style: normalizeStyle({ backgroundColor: e.value.table.th.backgroundColor, color: e.value.table.th.color, outline: e.value.table.th.outline }),
                    class: "vue-ui-data-table__caption"
                  }, [
                    createTextVNode(toDisplayString(e.value.style.chart.title.text) + " ", 1),
                    e.value.style.chart.title.subtitle.text ? (openBlock(), createElementBlock("span", At, toDisplayString(e.value.style.chart.title.subtitle.text), 1)) : createCommentVNode("", true)
                  ], 4),
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", {
                      role: "row",
                      style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color}`)
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value.head, (t) => (openBlock(), createElementBlock("th", {
                        style: normalizeStyle(`outline:${e.value.table.th.outline}`)
                      }, [
                        createBaseVNode("div", Et, toDisplayString(t), 1)
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
                    (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value.body, (t, o) => (openBlock(), createElementBlock("tr", {
                      class: normalizeClass({ "vue-ui-data-table__tbody__row": true, "vue-ui-data-table__tbody__row-even": o % 2 === 0, "vue-ui-data-table__tbody__row-odd": o % 2 !== 0 }),
                      style: normalizeStyle(`background:${e.value.table.td.backgroundColor};color:${e.value.table.td.color}`)
                    }, [
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline};font-variant-numeric: tabular-nums;`),
                        "data-cell": C2.value.head[0] ?? ""
                      }, [
                        createBaseVNode("div", Ut, [
                          t.color ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            style: normalizeStyle(`color:${t.color};margin-right:3px`)
                          }, "⬤", 4)) : createCommentVNode("", true),
                          createBaseVNode("span", null, toDisplayString(t.parentName), 1)
                        ])
                      ], 12, Gt2),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": C2.value.head[1] ?? ""
                      }, [
                        createBaseVNode("div", Wt, toDisplayString(e.value.table.td.prefix) + toDisplayString(["", NaN, void 0].includes(t.parentValue) ? "" : t.parentValue.toFixed(e.value.table.td.roundingValue)) + toDisplayString(e.value.table.td.suffix), 1)
                      ], 12, Ht2),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": C2.value.head[2] ?? ""
                      }, [
                        createBaseVNode("div", Yt, toDisplayString(["", NaN, void 0].includes(t.percentageToTotal) ? "" : `${(t.percentageToTotal * 100).toFixed(e.value.table.td.roundingPercentage)}%`), 1)
                      ], 12, jt),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": C2.value.head[3] ?? ""
                      }, [
                        createBaseVNode("div", Kt2, toDisplayString(t.childName), 1)
                      ], 12, qt),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": C2.value.head[4] ?? ""
                      }, [
                        createBaseVNode("div", Qt2, toDisplayString(e.value.table.td.prefix) + toDisplayString(["", NaN, void 0].includes(t.childValue) ? "" : t.childValue.toFixed(e.value.table.td.roundingValue)) + toDisplayString(e.value.table.td.suffix), 1)
                      ], 12, Jt),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": C2.value.head[5] ?? ""
                      }, [
                        createBaseVNode("div", ea, toDisplayString(["", NaN, void 0].includes(t.childPercentageToParent) ? "" : `${(t.childPercentageToParent * 100).toFixed(e.value.table.td.roundingPercentage)}%`), 1)
                      ], 12, Zt),
                      createBaseVNode("td", {
                        class: "vue-ui-data-table__tbody__td",
                        style: normalizeStyle(`outline:${e.value.table.td.outline}`),
                        "data-cell": C2.value.head[6] ?? ""
                      }, [
                        createBaseVNode("div", aa, toDisplayString(["", NaN, void 0].includes(t.childPercentageToTotal) ? "" : `${(t.childPercentageToTotal * 100).toFixed(e.value.table.td.roundingPercentage)}%`), 1)
                      ], 12, ta)
                    ], 6))), 256))
                  ])
                ])
              ], 2)
            ])
          ], 512)
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, kt));
  }
};
var fa = s(la, [["__scopeId", "data-v-008d2191"]]);
export {
  fa as default
};
//# sourceMappingURL=vue-ui-vertical-bar-CieqHVD5-WWUWL57S.js.map
