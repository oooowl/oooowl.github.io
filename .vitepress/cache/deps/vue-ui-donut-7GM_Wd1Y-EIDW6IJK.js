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
  Jt,
  Nt,
  Q,
  R as R2,
  Rt,
  T,
  Vt,
  Xt,
  Zt,
  dr,
  fr,
  ir,
  jt,
  kt,
  qt,
  rt,
  te,
  tr,
  yt,
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

// node_modules/vue-data-ui/dist/vue-ui-donut-7GM_Wd1Y.js
var Ot = (W2) => (pushScopeId("data-v-897a9187"), W2 = W2(), popScopeId(), W2);
var Xt2 = ["id"];
var It = ["xmlns", "viewBox"];
var Dt2 = { key: 0 };
var Bt = ["id"];
var Mt = ["stop-color"];
var Gt = ["offset", "stop-color"];
var Vt2 = ["offset", "stop-color"];
var jt2 = ["stop-color"];
var Ht2 = { key: 1 };
var Rt2 = ["id", "cx", "cy"];
var Ut = ["stop-color", "stop-opacity"];
var Et = ["stop-color"];
var Wt = ["id"];
var qt2 = ["id"];
var Jt2 = Ot(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Kt = ["id"];
var Qt = ["flood-color"];
var Zt2 = ["id"];
var el = ["flood-color"];
var tl = ["d", "stroke", "filter"];
var ll = ["x1", "y1", "x2", "y2", "stroke", "filter"];
var al = ["cx", "cy", "r", "fill", "filter"];
var ol = ["stroke", "d"];
var ul = ["d", "fill", "stroke", "stroke-width", "filter"];
var sl = { key: 0 };
var nl = ["stroke", "d"];
var rl = { key: 0 };
var il = ["d", "stroke", "stroke-width", "filter"];
var vl = ["d", "fill", "stroke", "stroke-width", "filter"];
var cl = { key: 1 };
var dl = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var hl = ["cx", "cy", "r", "stroke"];
var yl = ["cx", "cy", "r", "fill"];
var fl = { key: 0 };
var pl = ["d", "fill", "onMouseenter", "onClick"];
var gl = { key: 1 };
var bl = ["cx", "cy", "r", "fill"];
var ml = ["x", "y", "fill", "font-size"];
var wl = ["x", "y", "fill", "font-size"];
var kl = ["x", "y", "fill", "font-size"];
var _l = ["x", "y", "fill", "font-size"];
var xl = ["filter"];
var Cl = { key: 0 };
var $l = ["x", "y"];
var Pl = { key: 1 };
var Sl = ["cx", "cy", "fill", "stroke", "filter", "onClick"];
var Ll = ["cx", "cy", "fill", "stroke", "filter", "onClick"];
var Fl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var Tl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var zl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var Yl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var Al = { key: 2 };
var Nl = ["x", "y", "width"];
var Ol = ["x", "y", "width"];
var Xl = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Il = ["onClick"];
var Dl = {
  key: 0,
  style: { "font-variant-numeric": "tabular-nums" }
};
var Bl = { key: 1 };
var Ml = ["innerHTML"];
var Gl = {
  __name: "vue-ui-donut",
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
  setup(W2, { expose: Re, emit: de }) {
    const N = W2, { vue_ui_donut: Ue } = te(), q = computed({
      get() {
        return !!N.dataset && N.dataset.length;
      },
      set(l) {
        return l;
      }
    }), H = ref(null), he = ref(null), ye = ref(null), le = ref(null), fe = ref(null), pe = ref(null), ge = ref(0), be = ref(0), me = ref(0);
    onMounted(() => {
      we();
    }), onBeforeUnmount(() => {
      le.value && le.value.disconnect();
    });
    function we() {
      if (jt(N.dataset) ? qt({
        componentName: "VueUiDonut",
        type: "dataset"
      }) : N.dataset.forEach((l, r) => {
        Zt({
          datasetObject: l,
          requiredAttributes: ["name", "values"]
        }).forEach((t) => {
          q.value = false, qt({
            componentName: "VueUiDonut",
            type: "datasetSerieAttribute",
            property: t,
            index: r
          });
        });
      }), e.value.responsive) {
        const l = O(() => {
          const { width: r, height: t } = k({
            chart: H.value,
            title: e.value.style.chart.title.text ? he.value : null,
            legend: e.value.style.chart.legend.show ? ye.value : null,
            source: fe.value,
            noTitle: pe.value
          });
          u.value.width = r, u.value.height = t;
        });
        le.value = new ResizeObserver(l), le.value.observe(H.value.parentNode);
      }
    }
    const k2 = ref(Dt()), Ee = ref(null), ae2 = ref(false), se = ref(""), S = ref(null), ke = ref(0);
    function _e() {
      const l = c({
        userConfig: N.config,
        defaultConfig: Ue
      });
      return l.theme ? {
        ...c({
          userConfig: He.vue_ui_donut[l.theme] || N.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || rt
      } : l;
    }
    const e = computed({
      get: () => _e(),
      set: (l) => l
    });
    watch(() => N.config, (l) => {
      e.value = _e(), we(), ge.value += 1, be.value += 1, me.value += 1;
    }, { deep: true });
    const { isPrinting: xe, isImaging: Ce, generatePdf: $e, generateImage: Pe } = re({
      elementId: `donut__${k2.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-donut"
    }), We = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), Se2 = computed(() => tr(e.value.customPalette)), y = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), u = ref({
      height: 360,
      width: 512
    }), J = computed(() => {
      const l = e.value.style.chart.layout.donut.strokeWidth / 512, r = u.value.width * l, t = r > C2.value ? C2.value : r;
      return t < 24 ? 24 : t;
    }), M = computed(() => N.dataset.map((l, r) => ({
      name: l.name,
      color: Q(l.color) || Se2.value[r] || rt[r] || rt[r % rt.length],
      value: l.values.reduce((t, a) => t + a, 0),
      absoluteValues: l.values,
      comment: l.comment || ""
    }))), T2 = ref(M.value);
    watch(() => M.value, (l) => T2.value = l);
    function qe() {
      return M.value.map((l) => ({
        name: l.name,
        color: l.color,
        value: l.value
      }));
    }
    const O2 = ref([]), Le = ref(null), Fe = ref(null), G = ref(false);
    function Te(l) {
      const r = M.value.find((v, g) => g === l);
      let a = T2.value.find((v, g) => g === l).value;
      if (O2.value.includes(l)) {
        let g = function() {
          a > v ? (cancelAnimationFrame(Le.value), T2.value = T2.value.map((p2, ve) => l === ve ? {
            ...p2,
            value: v
          } : p2), G.value = false) : (G.value = true, a += v * 0.025, T2.value = T2.value.map((p2, ve) => l === ve ? {
            ...p2,
            value: a
          } : p2), Le.value = requestAnimationFrame(g));
        };
        O2.value = O2.value.filter((p2) => p2 !== l);
        const v = r.value;
        g();
      } else if (O2.value.length < M.value.length - 1) {
        let v = function() {
          a < 0.1 ? (cancelAnimationFrame(Fe.value), O2.value.push(l), T2.value = T2.value.map((g, p2) => l === p2 ? {
            ...g,
            value: 0
          } : g), G.value = false) : (G.value = true, a /= 1.1, T2.value = T2.value.map((g, p2) => l === p2 ? {
            ...g,
            value: a
          } : g), Fe.value = requestAnimationFrame(v));
        };
        v();
      }
      de("selectLegend", I.value.map((v) => ({
        name: v.name,
        color: v.color,
        value: v.value
      })));
    }
    const I = computed(() => (T2.value.forEach((l, r) => {
      if ([null, void 0].includes(l.values))
        return {
          ...l,
          values: []
        };
    }), T2.value.map((l, r) => ({
      ...l,
      seriesIndex: r
    })).filter((l, r) => !O2.value.includes(r)))), ze = computed(() => N.dataset.map((l, r) => ({
      name: l.name,
      color: Q(l.color) || Se2.value[r] || rt[r] || rt[r % rt.length],
      value: (l.values || []).reduce((t, a) => t + a, 0),
      shape: "circle"
    })).map((l, r) => ({
      ...l,
      proportion: l.value / N.dataset.map((t) => (t.values || []).reduce((a, v) => a + v, 0)).reduce((t, a) => t + a, 0),
      opacity: O2.value.includes(r) ? 0.5 : 1,
      segregate: () => Te(r),
      isSegregated: O2.value.includes(r)
    }))), Je = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), C2 = computed(() => {
      const l = Math.min(u.value.width / 3, u.value.height / 3);
      return l < 55 ? 55 : l;
    }), f = computed(() => kt({ series: I.value }, u.value.width / 2, u.value.height / 2, C2.value, C2.value, 1.99999, 2, 1, 360, 105.25, J.value)), c2 = computed(() => {
      const l = Math.max(...I.value.map((t) => t.value)), r = I.value.map((t) => t.value / l);
      return fr({
        series: r,
        center: {
          x: u.value.width / 2,
          y: u.value.height / 2
        },
        maxRadius: Math.min(u.value.width, u.value.height) / 3
      });
    });
    function R3(l) {
      return l.x > u.value.width / 2 + 6 ? "start" : l.x < u.value.width / 2 - 6 ? "end" : "middle";
    }
    function Ke(l) {
      return l.middlePoint.y > u.value.height / 2 ? Rt({ initX: l.middlePoint.x, initY: l.middlePoint.y, offset: 100, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y : Rt({ initX: l.middlePoint.x, initY: l.middlePoint.y, offset: 0, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y - 100;
    }
    function z2(l) {
      return l.proportion * 100 > e.value.style.chart.layout.labels.dataLabels.hideUnderValue;
    }
    function ne(l, r) {
      const t = l.value / Qe(r);
      return isNaN(t) ? 0 : ir(
        e.value.style.chart.layout.labels.percentage.formatter,
        t * 100,
        Ht({
          v: t * 100,
          s: "%",
          r: e.value.style.chart.layout.labels.percentage.rounding
        }),
        { datapoint: l }
      );
    }
    function Qe(l) {
      return [...l].map((r) => r.value).reduce((r, t) => r + t, 0);
    }
    const $ = computed(() => I.value.map((l) => l.value).reduce((l, r) => l + r, 0)), Ye = computed(() => $.value / I.value.length), re2 = ref(null), K = ref(false);
    function Ae({ datapoint: l, relativeIndex: r, seriesIndex: t, show: a = false }) {
      re2.value = { datapoint: l, seriesIndex: t, config: e.value, series: M.value }, ae2.value = a, S.value = r;
      let v = "";
      const g = e.value.style.chart.tooltip.customFormat;
      if (K.value = false, Xt(g))
        try {
          const p2 = g({
            seriesIndex: t,
            datapoint: l,
            series: M.value,
            config: e.value
          });
          typeof p2 == "string" && (se.value = p2, K.value = true);
        } catch {
          console.warn("Custom format cannot be applied."), K.value = false;
        }
      if (!K.value) {
        if (v += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${l.name}</div>`, v += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${l.color}"/></svg>`, e.value.style.chart.tooltip.showValue && (v += `<b>${ir(
          e.value.style.chart.layout.labels.value.formatter,
          l.value,
          Ht({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: l.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          {
            datapoint: l,
            relativeIndex: r,
            seriesIndex: t
          }
        )}</b>`), e.value.style.chart.tooltip.showPercentage) {
          const p2 = ir(
            e.value.style.chart.layout.labels.percentage.formatter,
            l.proportion * 100,
            Ht({
              v: l.proportion * 100,
              s: "%",
              r: e.value.style.chart.tooltip.roundingPercentage
            }),
            {
              datapoint: l,
              relativeIndex: r,
              seriesIndex: t
            }
          );
          e.value.style.chart.tooltip.showValue ? v += `<span>(${p2})</span></div>` : v += `<b>${p2}</b></div>`;
        }
        e.value.style.chart.comments.showInTooltip && l.comment && (v += `<div class="vue-data-ui-tooltip-comment" style="background:${l.color}20; padding: 6px; margin-bottom: 6px; margin-top:6px; border-left: 1px solid ${l.color}">${l.comment}</div>`), se.value = `<div>${v}</div>`;
      }
    }
    function Q2(l) {
      return e.value.useBlurOnHover && ![null, void 0].includes(S.value) && S.value !== l ? `url(#blur_${k2.value})` : "";
    }
    const D = computed(() => {
      const l = I.value.map((t) => ({
        name: t.name,
        color: t.color
      })), r = I.value.map((t) => t.value);
      return { head: l, body: r };
    });
    function Ne() {
      nextTick(() => {
        const l = D.value.head.map((a, v) => [[
          a.name
        ], [D.value.body[v]], [isNaN(D.value.body[v] / $.value) ? "-" : D.value.body[v] / $.value * 100]]), r = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(l), t = Vt(r);
        Nt({ csvContent: t, title: e.value.style.chart.title.text || "vue-ui-donut" });
      });
    }
    const oe = computed(() => {
      const l = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: $.value, s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        "100%"
      ], r = D.value.head.map((v, g) => {
        const p2 = Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: D.value.body[g], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: v.color,
            name: v.name
          },
          p2,
          isNaN(D.value.body[g] / $.value) ? "-" : (D.value.body[g] / $.value * 100).toFixed(e.value.table.td.roundingPercentage) + "%"
        ];
      }), t = {
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
          e.value.table.columnNames.value,
          e.value.table.columnNames.percentage
        ],
        head: l,
        body: r,
        config: t
      };
    }), Z = ref(false);
    function Ze(l) {
      Z.value = l, ke.value += 1;
    }
    const Oe = computed(() => /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    function et(l) {
      return l.toFixed(e.value.style.chart.legend.roundingPercentage).split("").map((r) => "-").join("");
    }
    function B(l, r) {
      de("selectDatapoint", { datapoint: l, index: r });
    }
    function Xe() {
      y.value.showTable = !y.value.showTable;
    }
    function Ie() {
      y.value.dataLabels.show = !y.value.dataLabels.show;
    }
    function De() {
      y.value.showTooltip = !y.value.showTooltip;
    }
    const ue = ref(false);
    function ie() {
      ue.value = !ue.value;
    }
    return Re({
      getData: qe,
      generatePdf: $e,
      generateCsv: Ne,
      generateImage: Pe,
      toggleTable: Xe,
      toggleLabels: Ie,
      toggleTooltip: De,
      toggleAnnotator: ie
    }), (l, r) => (openBlock(), createElementBlock("div", {
      ref_key: "donutChart",
      ref: H,
      class: normalizeClass(`vue-ui-donut ${Z.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height:100%;" : ""} text-align:center;background:${e.value.style.chart.backgroundColor}`),
      id: `donut__${k2.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: H.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: ue.value,
        onClose: ie
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      renderSlot(l.$slots, "userConfig", {}, void 0, true),
      We.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: pe,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: he,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ge.value}`,
          config: {
            title: {
              cy: "donut-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "donut-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && q.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Ee,
        key: `user_option_${ke.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(xe),
        isImaging: unref(Ce),
        uid: k2.value,
        hasTooltip: e.value.style.chart.tooltip.show && e.value.userOptions.buttons.tooltip,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: Z.value,
        chartElement: H.value,
        position: e.value.userOptions.position,
        isTooltip: y.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: ue.value,
        onToggleFullscreen: Ze,
        onGeneratePdf: unref($e),
        onGenerateCsv: Ne,
        onGenerateImage: unref(Pe),
        onToggleTable: Xe,
        onToggleLabels: Ie,
        onToggleTooltip: De,
        onToggleAnnotator: ie
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
        l.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        l.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: a }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: a })), void 0, true)
          ]),
          key: "6"
        } : void 0,
        l.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: a }) => [
            renderSlot(l.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: a })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "chartElement", "position", "isTooltip", "titles", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      q.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": Z.value, "vue-data-ui-fulscreen--off": !Z.value }),
        viewBox: `0 0 ${u.value.width <= 0 ? 10 : u.value.width} ${u.value.height <= 0 ? 10 : u.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.type === "classic" ? (openBlock(), createElementBlock("defs", Dt2, [
          e.value.style.chart.useGradient ? (openBlock(), createElementBlock("radialGradient", {
            key: 0,
            id: `gradient_${k2.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(e.value.style.chart.backgroundColor, 0),
              "stop-opacity": "0"
            }, null, 8, Mt),
            createBaseVNode("stop", {
              offset: `${(1 - J.value / C2.value) * 100}%`,
              "stop-color": unref(dr)("#FFFFFF", 0),
              "stop-opacity": "0"
            }, null, 8, Gt),
            createBaseVNode("stop", {
              offset: `${(1 - J.value / C2.value / 2) * 100}%`,
              "stop-color": unref(dr)("#FFFFFF", e.value.style.chart.gradientIntensity)
            }, null, 8, Vt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(e.value.style.chart.backgroundColor, 0),
              "stop-opacity": "0"
            }, null, 8, jt2)
          ], 8, Bt)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.type === "polar" ? (openBlock(), createElementBlock("defs", Ht2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, (t, a) => (openBlock(), createElementBlock("radialGradient", {
            id: `polar_gradient_${a}_${k2.value}`,
            cx: t.middlePoint.x / u.value.width * 100 + "%",
            cy: t.middlePoint.y / u.value.height * 100 + "%",
            r: "62%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(yt)(f.value[a].color, 0.05),
              "stop-opacity": e.value.style.chart.gradientIntensity / 100
            }, null, 8, Ut),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": f.value[a].color
            }, null, 8, Et)
          ], 8, Rt2))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${k2.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 2,
              id: `blur_std_${k2.value}`
            }, null, 8, qt2),
            Jt2
          ], 8, Wt),
          createBaseVNode("filter", {
            id: `shadow_${k2.value}`,
            "color-interpolation-filters": "sRGB"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "0",
              stdDeviation: "10",
              "flood-opacity": "0.5",
              "flood-color": e.value.style.chart.layout.donut.shadowColor
            }, null, 8, Qt)
          ], 8, Kt),
          createBaseVNode("filter", {
            id: `drop_shadow_${k2.value}`,
            "color-interpolation-filters": "sRGB",
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "0",
              stdDeviation: "3",
              "flood-opacity": "1",
              "flood-color": e.value.style.chart.layout.donut.shadowColor
            }, null, 8, el)
          ], 8, Zt2)
        ]),
        e.value.type === "classic" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(f.value, (t, a) => (openBlock(), createElementBlock("g", null, [
          z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: unref(zt)(t, { x: u.value.width / 2, y: u.value.height / 2 }, 16, 16, false, false, J.value),
            stroke: t.color,
            "stroke-width": "1",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none",
            filter: Q2(a)
          }, null, 8, tl)) : createCommentVNode("", true)
        ]))), 256)) : createCommentVNode("", true),
        e.value.type === "polar" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(f.value, (t, a) => (openBlock(), createElementBlock("g", null, [
          z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("line", {
            key: 0,
            x1: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
            y1: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y,
            x2: c2.value[a].middlePoint.x,
            y2: c2.value[a].middlePoint.y,
            stroke: t.color,
            "stroke-width": "1",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none",
            filter: Q2(a)
          }, null, 8, ll)) : createCommentVNode("", true)
        ]))), 256)) : createCommentVNode("", true),
        e.value.type === "classic" ? (openBlock(), createElementBlock("circle", {
          key: 4,
          cx: u.value.width / 2,
          cy: u.value.height / 2,
          r: C2.value <= 0 ? 10 : C2.value,
          fill: e.value.style.chart.backgroundColor,
          filter: e.value.style.chart.layout.donut.useShadow ? `url(#shadow_${k2.value})` : ""
        }, null, 8, al)) : createCommentVNode("", true),
        $.value && e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
            stroke: e.value.style.chart.backgroundColor,
            d: t.arcSlice,
            fill: "#FFFFFF"
          }, null, 8, ol))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
            class: "vue-ui-donut-arc-path",
            d: t.arcSlice,
            fill: unref(dr)(t.color, 80),
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": e.value.style.chart.layout.donut.borderWidth,
            filter: Q2(a)
          }, null, 8, ul))), 256))
        ], 64)) : createCommentVNode("", true),
        $.value && e.value.type === "polar" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
          f.value.length > 1 ? (openBlock(), createElementBlock("g", sl, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
              stroke: e.value.style.chart.backgroundColor,
              d: c2.value[a].path,
              fill: "#FFFFFF"
            }, null, 8, nl))), 256)),
            e.value.style.chart.layout.donut.useShadow ? (openBlock(), createElementBlock("g", rl, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
                class: "vue-ui-donut-arc-path",
                d: c2.value[a].path,
                fill: "transparent",
                stroke: e.value.style.chart.backgroundColor,
                "stroke-width": e.value.style.chart.layout.donut.borderWidth,
                filter: `url(#drop_shadow_${k2.value})`
              }, null, 8, il))), 256))
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
              class: "vue-ui-donut-arc-path",
              d: c2.value[a].path,
              fill: e.value.style.chart.useGradient ? `url(#polar_gradient_${a}_${k2.value})` : t.color,
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.donut.borderWidth,
              filter: Q2(a)
            }, null, 8, vl))), 256))
          ])) : (openBlock(), createElementBlock("g", cl, [
            createBaseVNode("circle", {
              cx: u.value.width / 2,
              cy: u.value.height / 2,
              r: C2.value,
              fill: e.value.style.chart.useGradient ? `url(#polar_gradient_0_${k2.value})` : f.value[0].color,
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.donut.borderWidth
            }, null, 8, dl)
          ]))
        ], 64)) : (openBlock(), createElementBlock("circle", {
          key: 7,
          cx: u.value.width / 2,
          cy: u.value.height / 2,
          r: C2.value <= 0 ? 10 : C2.value,
          fill: "transparent",
          stroke: e.value.style.chart.backgroundColor
        }, null, 8, hl)),
        e.value.style.chart.useGradient && e.value.type === "classic" ? (openBlock(), createElementBlock("circle", {
          key: 8,
          cx: u.value.width / 2,
          cy: u.value.height / 2,
          r: (
            /* This might require adjustments */
            C2.value <= 0 ? 10 : C2.value
          ),
          fill: `url(#gradient_${k2.value})`
        }, null, 8, yl)) : createCommentVNode("", true),
        $.value ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
          f.value.length > 1 || e.value.type === "classic" ? (openBlock(), createElementBlock("g", fl, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
              "data-cy-donut-trap": "",
              d: e.value.type === "classic" ? t.arcSlice : c2.value[a].path,
              fill: S.value === a ? "rgba(0,0,0,0.1)" : "transparent",
              onMouseenter: (v) => Ae({
                datapoint: t,
                relativeIndex: a,
                seriesIndex: t.seriesIndex,
                show: true
              }),
              onMouseleave: r[0] || (r[0] = (v) => {
                ae2.value = false, S.value = null;
              }),
              onClick: (v) => B(t, a)
            }, null, 40, pl))), 256))
          ])) : (openBlock(), createElementBlock("g", gl, [
            createBaseVNode("circle", {
              cx: u.value.width / 2,
              cy: u.value.height / 2,
              r: C2.value,
              fill: S.value === l.i ? "rgba(0,0,0,0.1)" : "transparent",
              "data-cy-donut-trap": "",
              onMouseenter: r[1] || (r[1] = (t) => Ae({
                datapoint: f.value[0],
                relativeIndex: 0,
                seriesIndex: f.value[0].seriesIndex,
                show: true
              })),
              onMouseleave: r[2] || (r[2] = (t) => {
                ae2.value = false, S.value = null;
              }),
              onClick: r[3] || (r[3] = (t) => B(f.value[0], l.i))
            }, null, 40, bl)
          ]))
        ], 64)) : createCommentVNode("", true),
        e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 10 }, [
          e.value.style.chart.layout.labels.hollow.total.show ? (openBlock(), createElementBlock("text", {
            key: 0,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 - (e.value.style.chart.layout.labels.hollow.average.show ? e.value.style.chart.layout.labels.hollow.total.fontSize : 0) + e.value.style.chart.layout.labels.hollow.total.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.total.color,
            "font-size": e.value.style.chart.layout.labels.hollow.total.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.total.bold ? "bold" : ""}`)
          }, toDisplayString(e.value.style.chart.layout.labels.hollow.total.text), 13, ml)) : createCommentVNode("", true),
          e.value.style.chart.layout.labels.hollow.total.show ? (openBlock(), createElementBlock("text", {
            key: 1,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 + e.value.style.chart.layout.labels.hollow.total.fontSize - (e.value.style.chart.layout.labels.hollow.average.show ? e.value.style.chart.layout.labels.hollow.total.fontSize : 0) + e.value.style.chart.layout.labels.hollow.total.value.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.total.value.color,
            "font-size": e.value.style.chart.layout.labels.hollow.total.value.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.total.value.bold ? "bold" : ""}`)
          }, toDisplayString(unref(ir)(
            e.value.style.chart.layout.labels.hollow.total.value.formatter,
            $.value,
            unref(Ht)({
              p: e.value.style.chart.layout.labels.hollow.total.value.prefix,
              v: $.value,
              s: e.value.style.chart.layout.labels.hollow.total.value.suffix
            })
          )), 13, wl)) : createCommentVNode("", true),
          e.value.style.chart.layout.labels.hollow.average.show ? (openBlock(), createElementBlock("text", {
            key: 2,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 + (e.value.style.chart.layout.labels.hollow.total.show ? e.value.style.chart.layout.labels.hollow.average.fontSize : 0) + e.value.style.chart.layout.labels.hollow.average.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.average.color,
            "font-size": e.value.style.chart.layout.labels.hollow.average.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.average.bold ? "bold" : ""}`)
          }, toDisplayString(e.value.style.chart.layout.labels.hollow.average.text), 13, kl)) : createCommentVNode("", true),
          e.value.style.chart.layout.labels.hollow.average.show ? (openBlock(), createElementBlock("text", {
            key: 3,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 + (e.value.style.chart.layout.labels.hollow.total.show ? e.value.style.chart.layout.labels.hollow.average.fontSize : 0) + e.value.style.chart.layout.labels.hollow.average.fontSize + e.value.style.chart.layout.labels.hollow.average.value.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.average.value.color,
            "font-size": e.value.style.chart.layout.labels.hollow.average.value.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.average.value.bold ? "bold" : ""}`)
          }, toDisplayString(G.value ? "--" : unref(ir)(
            e.value.style.chart.layout.labels.hollow.average.value.formatter,
            Ye.value,
            unref(Ht)({
              p: e.value.style.chart.layout.labels.hollow.average.value.prefix,
              v: Ye.value,
              s: e.value.style.chart.layout.labels.hollow.average.value.suffix,
              r: e.value.style.chart.layout.labels.hollow.average.value.rounding
            })
          )), 13, _l)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("g", {
          filter: Q2(a),
          class: normalizeClass({ animated: e.value.useCssAnimation })
        }, [
          e.value.style.chart.layout.labels.dataLabels.useLabelSlots ? (openBlock(), createElementBlock("g", Cl, [
            (openBlock(), createElementBlock("foreignObject", {
              x: unref(z)(t, true).anchor === "end" ? unref(z)(t).x - 120 : unref(z)(t, true).anchor === "middle" ? unref(z)(t).x - 60 : unref(z)(t).x,
              y: unref(T)(t) - (Oe.value ? 20 : 0),
              width: "120",
              height: "60",
              style: { overflow: "visible" }
            }, [
              createBaseVNode("div", null, [
                renderSlot(l.$slots, "dataLabel", normalizeProps(guardReactiveProps({
                  datapoint: t,
                  isBlur: !e.value.useBlurOnHover || [null, void 0].includes(S.value) || S.value === a,
                  isSafari: Oe.value,
                  isVisible: z2(t) && y.value.dataLabels.show,
                  textAlign: unref(z)(t, true, 16, true).anchor,
                  flexAlign: unref(z)(t, true, 16).anchor,
                  percentage: ne(t, f.value)
                })), void 0, true)
              ])
            ], 8, $l))
          ])) : (openBlock(), createElementBlock("g", Pl, [
            e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("circle", {
                key: 0,
                cx: unref(z)(t).x,
                cy: unref(T)(t) - 3.5,
                fill: t.color,
                stroke: e.value.style.chart.backgroundColor,
                "stroke-width": 1,
                r: 3,
                filter: !e.value.useBlurOnHover || [null, void 0].includes(S.value) || S.value === a ? "" : `url(#blur_${k2.value})`,
                onClick: (v) => B(t, a)
              }, null, 8, Sl)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.type === "polar" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("circle", {
                key: 0,
                cx: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
                cy: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y,
                fill: t.color,
                stroke: e.value.style.chart.backgroundColor,
                "stroke-width": 1,
                r: 3,
                filter: !e.value.useBlurOnHover || [null, void 0].includes(S.value) || S.value === a ? "" : `url(#blur_${k2.value})`,
                onClick: (v) => B(t, a)
              }, null, 8, Ll)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 0,
                "text-anchor": unref(z)(t, true, 12).anchor,
                x: unref(z)(t, true, 12).x,
                y: unref(T)(t),
                fill: e.value.style.chart.layout.labels.percentage.color,
                "font-size": e.value.style.chart.layout.labels.percentage.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.percentage.bold ? "bold" : ""}`),
                onClick: (v) => B(t, a)
              }, toDisplayString(ne(t, f.value)) + " " + toDisplayString(e.value.style.chart.layout.labels.value.show ? `(${unref(ir)(
                e.value.style.chart.layout.labels.value.formatter,
                t.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: t.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.value.rounding
                }),
                { datapoint: t }
              )})` : ""), 13, Fl)) : createCommentVNode("", true),
              z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 1,
                "text-anchor": unref(z)(t).anchor,
                x: unref(z)(t, true, 12).x,
                y: unref(T)(t) + e.value.style.chart.layout.labels.percentage.fontSize,
                fill: e.value.style.chart.layout.labels.name.color,
                "font-size": e.value.style.chart.layout.labels.name.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.name.bold ? "bold" : ""}`),
                onClick: (v) => B(t, a)
              }, toDisplayString(t.name), 13, Tl)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.type === "polar" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 0,
                "text-anchor": R3(c2.value[a].middlePoint),
                x: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
                y: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y,
                fill: e.value.style.chart.layout.labels.percentage.color,
                "font-size": e.value.style.chart.layout.labels.percentage.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.percentage.bold ? "bold" : ""}`),
                onClick: (v) => B(t, a)
              }, toDisplayString(ne(t, f.value)) + " " + toDisplayString(e.value.style.chart.layout.labels.value.show ? `(${unref(ir)(
                e.value.style.chart.layout.labels.value.formatter,
                t.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: t.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.value.rounding
                }),
                { datapoint: t }
              )})` : ""), 13, zl)) : createCommentVNode("", true),
              z2(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 1,
                "text-anchor": R3(c2.value[a].middlePoint),
                x: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
                y: unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y + e.value.style.chart.layout.labels.percentage.fontSize,
                fill: e.value.style.chart.layout.labels.name.color,
                "font-size": e.value.style.chart.layout.labels.name.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.name.bold ? "bold" : ""}`),
                onClick: (v) => B(t, a)
              }, toDisplayString(t.name), 13, Yl)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ])),
          y.value.dataLabels.show && e.value.style.chart.comments.show && t.comment ? (openBlock(), createElementBlock("g", Al, [
            z2(t) && e.value.type === "classic" ? (openBlock(), createElementBlock("foreignObject", {
              key: 0,
              x: e.value.style.chart.comments.offsetX + (unref(z)(t, true).anchor === "end" ? unref(z)(t).x - e.value.style.chart.comments.width : unref(z)(t, true).anchor === "middle" ? unref(z)(t).x - e.value.style.chart.comments.width / 2 : unref(z)(t).x),
              y: unref(T)(t) + 24 + e.value.style.chart.comments.offsetY,
              width: e.value.style.chart.comments.width,
              height: "200",
              style: { overflow: "visible", "pointer-events": "none" }
            }, [
              createBaseVNode("div", null, [
                renderSlot(l.$slots, "plot-comment", {
                  plot: { ...t, textAlign: unref(z)(t, true, 16, true).anchor, flexAlign: unref(z)(t, true, 16).anchor }
                }, void 0, true)
              ])
            ], 8, Nl)) : createCommentVNode("", true),
            z2(t) && e.value.type === "polar" ? (openBlock(), createElementBlock("foreignObject", {
              key: 1,
              x: e.value.style.chart.comments.offsetX + (R3(c2.value[a].middlePoint) === "end" ? unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x - e.value.style.chart.comments.width : R3(c2.value[a].middlePoint) === "middle" ? unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x - e.value.style.chart.comments.width / 2 : unref(Rt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x),
              y: Ke(c2.value[a]) + e.value.style.chart.comments.offsetY,
              width: e.value.style.chart.comments.width,
              height: "200",
              style: { overflow: "visible", "pointer-events": "none" }
            }, [
              createBaseVNode("div", null, [
                renderSlot(l.$slots, "plot-comment", {
                  plot: { ...t, textAlign: R3(c2.value[a].middlePoint), flexAlign: R3(c2.value[a].middlePoint) }
                }, void 0, true)
              ])
            ], 8, Ol)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 10, xl))), 256)),
        renderSlot(l.$slots, "svg", { svg: u.value }, void 0, true)
      ], 14, It)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", Xl, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(xe) || unref(Ce) })), void 0, true)
      ])) : createCommentVNode("", true),
      q.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "donut",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            donut: {
              color: "#CCCCCC",
              strokeWidth: J.value * 0.8
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: ye
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${me.value}`,
          legendSet: ze.value,
          config: Je.value,
          onClickMarker: r[4] || (r[4] = ({ i: t }) => Te(t))
        }, {
          item: withCtx(({ legend: t, index: a }) => [
            createBaseVNode("div", {
              onClick: (v) => t.segregate(),
              style: normalizeStyle(`opacity:${O2.value.includes(a) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(t.name) + ": " + toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.value.formatter,
                t.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: t.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.legend.roundingValue
                }),
                {
                  datapoint: t,
                  index: a
                }
              )) + " ", 1),
              O2.value.includes(a) ? (openBlock(), createElementBlock("span", Bl, " ( " + toDisplayString(et(t.proportion * 100)) + " % ) ", 1)) : (openBlock(), createElementBlock("span", Dl, " (" + toDisplayString(isNaN(t.value / $.value) ? "-" : unref(ir)(
                e.value.style.chart.layout.labels.percentage.formatter,
                G.value ? t.proportion * 100 : t.value / $.value * 100,
                unref(Ht)({
                  v: G.value ? t.proportion * 100 : t.value / $.value * 100,
                  s: "%",
                  r: e.value.style.chart.legend.roundingPercentage
                })
              )) + ") ", 1))
            ], 12, Il)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
        renderSlot(l.$slots, "legend", { legend: ze.value }, void 0, true)
      ], 512),
      l.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: fe,
        dir: "auto"
      }, [
        renderSlot(l.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: y.value.showTooltip && ae2.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: H.value,
        content: se.value,
        isCustom: K.value
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(l.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...re2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(l.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...re2.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      q.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: y.value.showTable,
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
            key: `table_${be.value}`,
            colNames: oe.value.colNames,
            head: oe.value.head,
            body: oe.value.body,
            config: oe.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: r[5] || (r[5] = (t) => y.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createBaseVNode("div", {
                innerHTML: t,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Ml)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(t.name ? t.name : isNaN(Number(t)) ? t.includes("%") ? t : unref(ir)(
                e.value.style.chart.layout.labels.percentage.formatter,
                t,
                unref(Ht)({
                  v: t,
                  s: "%",
                  r: e.value.style.chart.layout.labels.percentage.rounding
                })
              ) : unref(ir)(
                e.value.style.chart.layout.labels.value.formatter,
                t,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: t,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.value.rounding
                })
              )), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Xt2));
  }
};
var la = s(Gl, [["__scopeId", "data-v-897a9187"]]);
export {
  la as default
};
//# sourceMappingURL=vue-ui-donut-7GM_Wd1Y-EIDW6IJK.js.map
