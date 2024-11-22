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
  Bt,
  Dt,
  Ge,
  Gt,
  Ht,
  Kt,
  Lt,
  Nt,
  Ot,
  P,
  Qt,
  R as R2,
  Xt,
  cr,
  et,
  gt,
  j,
  nr,
  oe,
  or,
  pt,
  qt,
  ur,
  z
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-donut-DFaGk4fI.js
var Ft = (R3) => (pushScopeId("data-v-159f668e"), R3 = R3(), popScopeId(), R3);
var zt = ["id"];
var Tt = ["xmlns", "viewBox"];
var Yt = { key: 0 };
var Xt2 = ["id"];
var Nt2 = ["stop-color"];
var Ot2 = ["offset", "stop-color"];
var It = ["offset", "stop-color"];
var Dt2 = ["stop-color"];
var At = { key: 1 };
var Bt2 = ["id", "cx", "cy"];
var Mt = ["stop-color", "stop-opacity"];
var Gt2 = ["stop-color"];
var Vt = ["id"];
var jt = ["id"];
var Ht2 = Ft(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Rt = ["id"];
var Ut = ["flood-color"];
var Et = ["id"];
var Wt = ["flood-color"];
var qt2 = ["d", "stroke", "filter"];
var Jt = ["x1", "y1", "x2", "y2", "stroke", "filter"];
var Kt2 = ["cx", "cy", "r", "fill", "filter"];
var Qt2 = ["stroke", "d"];
var Zt = ["d", "fill", "stroke", "stroke-width", "filter"];
var el = { key: 0 };
var tl = ["stroke", "d"];
var ll = { key: 0 };
var al = ["d", "stroke", "stroke-width", "filter"];
var ol = ["d", "fill", "stroke", "stroke-width", "filter"];
var ul = { key: 1 };
var sl = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var nl = ["cx", "cy", "r", "stroke"];
var rl = ["cx", "cy", "r", "fill"];
var il = { key: 0 };
var vl = ["d", "fill", "onMouseenter", "onClick"];
var cl = { key: 1 };
var dl = ["cx", "cy", "r", "fill"];
var hl = ["x", "y", "fill", "font-size"];
var yl = ["x", "y", "fill", "font-size"];
var fl = ["x", "y", "fill", "font-size"];
var pl = ["x", "y", "fill", "font-size"];
var gl = ["filter"];
var bl = { key: 0 };
var ml = ["x", "y"];
var wl = { key: 1 };
var kl = ["cx", "cy", "fill", "stroke", "filter", "onClick"];
var _l = ["cx", "cy", "fill", "stroke", "filter", "onClick"];
var xl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var Cl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var $l = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var Pl = ["text-anchor", "x", "y", "fill", "font-size", "onClick"];
var Sl = { key: 2 };
var Ll = ["x", "y", "width"];
var Fl = ["x", "y", "width"];
var zl = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Tl = ["onClick"];
var Yl = {
  key: 0,
  style: { "font-variant-numeric": "tabular-nums" }
};
var Xl = { key: 1 };
var Nl = ["innerHTML"];
var Ol = {
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
  setup(R3, { expose: Ge2, emit: ve }) {
    const N = R3, { vue_ui_donut: Ve } = oe(), U = computed({
      get() {
        return !!N.dataset && N.dataset.length;
      },
      set(l) {
        return l;
      }
    }), E2 = ref(null), ce = ref(null), de = ref(null), le = ref(null), he = ref(0), ye = ref(0), fe = ref(0);
    onMounted(() => {
      pe();
    }), onBeforeUnmount(() => {
      le.value && le.value.disconnect();
    });
    function pe() {
      if (Xt(N.dataset) ? Kt({
        componentName: "VueUiDonut",
        type: "dataset"
      }) : N.dataset.forEach((l, r) => {
        qt({
          datasetObject: l,
          requiredAttributes: ["name", "values"]
        }).forEach((t) => {
          U.value = false, Kt({
            componentName: "VueUiDonut",
            type: "datasetSerieAttribute",
            property: t,
            index: r
          });
        });
      }), e.value.responsive) {
        const l = O(() => {
          const { width: r, height: t } = M({
            chart: E2.value,
            title: e.value.style.chart.title.text ? ce.value : null,
            legend: e.value.style.chart.legend.show ? de.value : null
          });
          u.value.width = r, u.value.height = t;
        });
        le.value = new ResizeObserver(l), le.value.observe(E2.value.parentNode);
      }
    }
    const w = ref(Lt()), je = ref(null), ae = ref(false), ue = ref(""), P2 = ref(null), ge = ref(0);
    function be() {
      const l = c({
        userConfig: N.config,
        defaultConfig: Ve
      });
      return l.theme ? {
        ...c({
          userConfig: Ge.vue_ui_donut[l.theme] || N.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || et
      } : l;
    }
    const e = computed({
      get: () => be(),
      set: (l) => l
    });
    watch(() => N.config, (l) => {
      e.value = be(), pe(), he.value += 1, ye.value += 1, fe.value += 1;
    }, { deep: true });
    const { isPrinting: me, isImaging: we, generatePdf: ke, generateImage: _e } = se({
      elementId: `donut__${w.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-donut"
    }), xe = computed(() => or(e.value.customPalette)), y = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), u = ref({
      height: 360,
      width: 512
    }), W2 = computed(() => {
      const l = e.value.style.chart.layout.donut.strokeWidth / 512, r = u.value.width * l, t = r > C2.value ? C2.value : r;
      return t < 24 ? 24 : t;
    }), M2 = computed(() => N.dataset.map((l, r) => ({
      name: l.name,
      color: j(l.color) || xe.value[r] || et[r] || et[r % et.length],
      value: l.values.reduce((t, a) => t + a, 0),
      absoluteValues: l.values,
      comment: l.comment || ""
    }))), z2 = ref(M2.value);
    watch(() => M2.value, (l) => z2.value = l);
    function He() {
      return M2.value.map((l) => ({
        name: l.name,
        color: l.color,
        value: l.value
      }));
    }
    const O2 = ref([]), Ce = ref(null), $e = ref(null), G = ref(false);
    function Pe(l) {
      const r = M2.value.find((i, g) => g === l);
      let a = z2.value.find((i, g) => g === l).value;
      if (O2.value.includes(l)) {
        let g = function() {
          a > i ? (cancelAnimationFrame(Ce.value), z2.value = z2.value.map((p2, re) => l === re ? {
            ...p2,
            value: i
          } : p2), G.value = false) : (G.value = true, a += i * 0.025, z2.value = z2.value.map((p2, re) => l === re ? {
            ...p2,
            value: a
          } : p2), Ce.value = requestAnimationFrame(g));
        };
        O2.value = O2.value.filter((p2) => p2 !== l);
        const i = r.value;
        g();
      } else if (O2.value.length < M2.value.length - 1) {
        let i = function() {
          a < 0.1 ? (cancelAnimationFrame($e.value), O2.value.push(l), z2.value = z2.value.map((g, p2) => l === p2 ? {
            ...g,
            value: 0
          } : g), G.value = false) : (G.value = true, a /= 1.1, z2.value = z2.value.map((g, p2) => l === p2 ? {
            ...g,
            value: a
          } : g), $e.value = requestAnimationFrame(i));
        };
        i();
      }
      ve("selectLegend", D.value.map((i) => ({
        name: i.name,
        color: i.color,
        value: i.value
      })));
    }
    const D = computed(() => (z2.value.forEach((l, r) => {
      if ([null, void 0].includes(l.values))
        return {
          ...l,
          values: []
        };
    }), z2.value.map((l, r) => ({
      ...l,
      seriesIndex: r
    })).filter((l, r) => !O2.value.includes(r)))), Se = computed(() => N.dataset.map((l, r) => ({
      name: l.name,
      color: j(l.color) || xe.value[r] || et[r] || et[r % et.length],
      value: (l.values || []).reduce((t, a) => t + a, 0),
      shape: "circle"
    })).map((l, r) => ({
      ...l,
      proportion: l.value / N.dataset.map((t) => (t.values || []).reduce((a, i) => a + i, 0)).reduce((t, a) => t + a, 0),
      opacity: O2.value.includes(r) ? 0.5 : 1,
      segregate: () => Pe(r),
      isSegregated: O2.value.includes(r)
    }))), Re = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), C2 = computed(() => {
      const l = Math.min(u.value.width / 3, u.value.height / 3);
      return l < 55 ? 55 : l;
    }), f = computed(() => gt({ series: D.value }, u.value.width / 2, u.value.height / 2, C2.value, C2.value, 1.99999, 2, 1, 360, 105.25, W2.value)), c2 = computed(() => {
      const l = Math.max(...D.value.map((t) => t.value)), r = D.value.map((t) => t.value / l);
      return ur({
        series: r,
        center: {
          x: u.value.width / 2,
          y: u.value.height / 2
        },
        maxRadius: Math.min(u.value.width, u.value.height) / 3
      });
    });
    function j2(l) {
      return l.x > u.value.width / 2 + 6 ? "start" : l.x < u.value.width / 2 - 6 ? "end" : "middle";
    }
    function Ue(l) {
      return l.middlePoint.y > u.value.height / 2 ? Dt({ initX: l.middlePoint.x, initY: l.middlePoint.y, offset: 100, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y : Dt({ initX: l.middlePoint.x, initY: l.middlePoint.y, offset: 0, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y - 100;
    }
    function T(l) {
      return l.proportion * 100 > e.value.style.chart.layout.labels.dataLabels.hideUnderValue;
    }
    function se2(l, r) {
      const t = l.value / Ee(r);
      return isNaN(t) ? 0 : nr(
        e.value.style.chart.layout.labels.percentage.formatter,
        t * 100,
        Gt({
          v: t * 100,
          s: "%",
          r: e.value.style.chart.layout.labels.percentage.rounding
        }),
        { datapoint: l }
      );
    }
    function Ee(l) {
      return [...l].map((r) => r.value).reduce((r, t) => r + t, 0);
    }
    const $ = computed(() => D.value.map((l) => l.value).reduce((l, r) => l + r, 0)), Le = computed(() => $.value / D.value.length), ne = ref(null), q = ref(false);
    function Fe({ datapoint: l, relativeIndex: r, seriesIndex: t, show: a = false }) {
      ne.value = { datapoint: l, seriesIndex: t, config: e.value, series: M2.value }, ae.value = a, P2.value = r;
      let i = "";
      const g = e.value.style.chart.tooltip.customFormat;
      if (q.value = false, Ht(g))
        try {
          const p2 = g({
            seriesIndex: t,
            datapoint: l,
            series: M2.value,
            config: e.value
          });
          typeof p2 == "string" && (ue.value = p2, q.value = true);
        } catch {
          console.warn("Custom format cannot be applied."), q.value = false;
        }
      if (!q.value) {
        if (i += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${l.name}</div>`, i += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${l.color}"/></svg>`, e.value.style.chart.tooltip.showValue && (i += `<b>${nr(
          e.value.style.chart.layout.labels.value.formatter,
          l.value,
          Gt({
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
          const p2 = nr(
            e.value.style.chart.layout.labels.percentage.formatter,
            l.proportion * 100,
            Gt({
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
          e.value.style.chart.tooltip.showValue ? i += `<span>(${p2})</span></div>` : i += `<b>${p2}</b></div>`;
        }
        e.value.style.chart.comments.showInTooltip && l.comment && (i += `<div class="vue-data-ui-tooltip-comment" style="background:${l.color}20; padding: 6px; margin-bottom: 6px; margin-top:6px; border-left: 1px solid ${l.color}">${l.comment}</div>`), ue.value = `<div>${i}</div>`;
      }
    }
    function J(l) {
      return e.value.useBlurOnHover && ![null, void 0].includes(P2.value) && P2.value !== l ? `url(#blur_${w.value})` : "";
    }
    const A = computed(() => {
      const l = D.value.map((t) => ({
        name: t.name,
        color: t.color
      })), r = D.value.map((t) => t.value);
      return { head: l, body: r };
    });
    function ze() {
      nextTick(() => {
        const l = A.value.head.map((a, i) => [[
          a.name
        ], [A.value.body[i]], [isNaN(A.value.body[i] / $.value) ? "-" : A.value.body[i] / $.value * 100]]), r = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(l), t = Nt(r);
        Ot({ csvContent: t, title: e.value.style.chart.title.text || "vue-ui-donut" });
      });
    }
    const oe2 = computed(() => {
      const l = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: $.value, s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        "100%"
      ], r = A.value.head.map((i, g) => {
        const p2 = Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: A.value.body[g], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: i.color,
            name: i.name
          },
          p2,
          isNaN(A.value.body[g] / $.value) ? "-" : (A.value.body[g] / $.value * 100).toFixed(e.value.table.td.roundingPercentage) + "%"
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
    }), K = ref(false);
    function We(l) {
      K.value = l, ge.value += 1;
    }
    const Te = computed(() => /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    function qe(l) {
      return l.toFixed(e.value.style.chart.legend.roundingPercentage).split("").map((r) => "-").join("");
    }
    function B(l, r) {
      ve("selectDatapoint", { datapoint: l, index: r });
    }
    function Ye() {
      y.value.showTable = !y.value.showTable;
    }
    function Xe() {
      y.value.dataLabels.show = !y.value.dataLabels.show;
    }
    function Ne() {
      y.value.showTooltip = !y.value.showTooltip;
    }
    return Ge2({
      getData: He,
      generatePdf: ke,
      generateCsv: ze,
      generateImage: _e,
      toggleTable: Ye,
      toggleLabels: Xe,
      toggleTooltip: Ne
    }), (l, r) => (openBlock(), createElementBlock("div", {
      ref_key: "donutChart",
      ref: E2,
      class: normalizeClass(`vue-ui-donut ${K.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height:100%;" : ""} text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: `donut__${w.value}`
    }, [
      renderSlot(l.$slots, "userConfig", {}, void 0, true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: ce,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${he.value}`,
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
      e.value.userOptions.show && U.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: je,
        key: `user_option_${ge.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(me),
        isImaging: unref(we),
        uid: w.value,
        hasTooltip: e.value.style.chart.tooltip.show && e.value.userOptions.buttons.tooltip,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: K.value,
        chartElement: E2.value,
        position: e.value.userOptions.position,
        isTooltip: y.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        onToggleFullscreen: We,
        onGeneratePdf: unref(ke),
        onGenerateCsv: ze,
        onGenerateImage: unref(_e),
        onToggleTable: Ye,
        onToggleLabels: Xe,
        onToggleTooltip: Ne
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "chartElement", "position", "isTooltip", "titles", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      U.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": K.value, "vue-data-ui-fulscreen--off": !K.value }),
        viewBox: `0 0 ${u.value.width <= 0 ? 10 : u.value.width} ${u.value.height <= 0 ? 10 : u.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        e.value.type === "classic" ? (openBlock(), createElementBlock("defs", Yt, [
          e.value.style.chart.useGradient ? (openBlock(), createElementBlock("radialGradient", {
            key: 0,
            id: `gradient_${w.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(e.value.style.chart.backgroundColor, 0),
              "stop-opacity": "0"
            }, null, 8, Nt2),
            createBaseVNode("stop", {
              offset: `${(1 - W2.value / C2.value) * 100}%`,
              "stop-color": unref(cr)("#FFFFFF", 0),
              "stop-opacity": "0"
            }, null, 8, Ot2),
            createBaseVNode("stop", {
              offset: `${(1 - W2.value / C2.value / 2) * 100}%`,
              "stop-color": unref(cr)("#FFFFFF", e.value.style.chart.gradientIntensity)
            }, null, 8, It),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(e.value.style.chart.backgroundColor, 0),
              "stop-opacity": "0"
            }, null, 8, Dt2)
          ], 8, Xt2)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.type === "polar" ? (openBlock(), createElementBlock("defs", At, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, (t, a) => (openBlock(), createElementBlock("radialGradient", {
            id: `polar_gradient_${a}_${w.value}`,
            cx: t.middlePoint.x / u.value.width * 100 + "%",
            cy: t.middlePoint.y / u.value.height * 100 + "%",
            r: "62%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(pt)(f.value[a].color, 0.05),
              "stop-opacity": e.value.style.chart.gradientIntensity / 100
            }, null, 8, Mt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": f.value[a].color
            }, null, 8, Gt2)
          ], 8, Bt2))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${w.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 2,
              id: `blur_std_${w.value}`
            }, null, 8, jt),
            Ht2
          ], 8, Vt),
          createBaseVNode("filter", {
            id: `shadow_${w.value}`,
            "color-interpolation-filters": "sRGB"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "0",
              stdDeviation: "10",
              "flood-opacity": "0.5",
              "flood-color": e.value.style.chart.layout.donut.shadowColor
            }, null, 8, Ut)
          ], 8, Rt),
          createBaseVNode("filter", {
            id: `drop_shadow_${w.value}`,
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
            }, null, 8, Wt)
          ], 8, Et)
        ]),
        e.value.type === "classic" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(f.value, (t, a) => (openBlock(), createElementBlock("g", null, [
          T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: unref(Bt)(t, { x: u.value.width / 2, y: u.value.height / 2 }, 16, 16, false, false, W2.value),
            stroke: t.color,
            "stroke-width": "1",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none",
            filter: J(a)
          }, null, 8, qt2)) : createCommentVNode("", true)
        ]))), 256)) : createCommentVNode("", true),
        e.value.type === "polar" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(f.value, (t, a) => (openBlock(), createElementBlock("g", null, [
          T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("line", {
            key: 0,
            x1: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
            y1: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y,
            x2: c2.value[a].middlePoint.x,
            y2: c2.value[a].middlePoint.y,
            stroke: t.color,
            "stroke-width": "1",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none",
            filter: J(a)
          }, null, 8, Jt)) : createCommentVNode("", true)
        ]))), 256)) : createCommentVNode("", true),
        e.value.type === "classic" ? (openBlock(), createElementBlock("circle", {
          key: 4,
          cx: u.value.width / 2,
          cy: u.value.height / 2,
          r: C2.value <= 0 ? 10 : C2.value,
          fill: e.value.style.chart.backgroundColor,
          filter: e.value.style.chart.layout.donut.useShadow ? `url(#shadow_${w.value})` : ""
        }, null, 8, Kt2)) : createCommentVNode("", true),
        $.value && e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
            stroke: e.value.style.chart.backgroundColor,
            d: t.arcSlice,
            fill: "#FFFFFF"
          }, null, 8, Qt2))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
            class: "vue-ui-donut-arc-path",
            d: t.arcSlice,
            fill: unref(cr)(t.color, 80),
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": e.value.style.chart.layout.donut.borderWidth,
            filter: J(a)
          }, null, 8, Zt))), 256))
        ], 64)) : createCommentVNode("", true),
        $.value && e.value.type === "polar" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
          f.value.length > 1 ? (openBlock(), createElementBlock("g", el, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
              stroke: e.value.style.chart.backgroundColor,
              d: c2.value[a].path,
              fill: "#FFFFFF"
            }, null, 8, tl))), 256)),
            e.value.style.chart.layout.donut.useShadow ? (openBlock(), createElementBlock("g", ll, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
                class: "vue-ui-donut-arc-path",
                d: c2.value[a].path,
                fill: "transparent",
                stroke: e.value.style.chart.backgroundColor,
                "stroke-width": e.value.style.chart.layout.donut.borderWidth,
                filter: `url(#drop_shadow_${w.value})`
              }, null, 8, al))), 256))
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
              class: "vue-ui-donut-arc-path",
              d: c2.value[a].path,
              fill: e.value.style.chart.useGradient ? `url(#polar_gradient_${a}_${w.value})` : t.color,
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.donut.borderWidth,
              filter: J(a)
            }, null, 8, ol))), 256))
          ])) : (openBlock(), createElementBlock("g", ul, [
            createBaseVNode("circle", {
              cx: u.value.width / 2,
              cy: u.value.height / 2,
              r: C2.value,
              fill: e.value.style.chart.useGradient ? `url(#polar_gradient_0_${w.value})` : f.value[0].color,
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.donut.borderWidth
            }, null, 8, sl)
          ]))
        ], 64)) : (openBlock(), createElementBlock("circle", {
          key: 7,
          cx: u.value.width / 2,
          cy: u.value.height / 2,
          r: C2.value <= 0 ? 10 : C2.value,
          fill: "transparent",
          stroke: e.value.style.chart.backgroundColor
        }, null, 8, nl)),
        e.value.style.chart.useGradient && e.value.type === "classic" ? (openBlock(), createElementBlock("circle", {
          key: 8,
          cx: u.value.width / 2,
          cy: u.value.height / 2,
          r: (
            /* This might require adjustments */
            C2.value <= 0 ? 10 : C2.value
          ),
          fill: `url(#gradient_${w.value})`
        }, null, 8, rl)) : createCommentVNode("", true),
        $.value ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
          f.value.length > 1 || e.value.type === "classic" ? (openBlock(), createElementBlock("g", il, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("path", {
              "data-cy-donut-trap": "",
              d: e.value.type === "classic" ? t.arcSlice : c2.value[a].path,
              fill: P2.value === a ? "rgba(0,0,0,0.1)" : "transparent",
              onMouseenter: (i) => Fe({
                datapoint: t,
                relativeIndex: a,
                seriesIndex: t.seriesIndex,
                show: true
              }),
              onMouseleave: r[0] || (r[0] = (i) => {
                ae.value = false, P2.value = null;
              }),
              onClick: (i) => B(t, a)
            }, null, 40, vl))), 256))
          ])) : (openBlock(), createElementBlock("g", cl, [
            createBaseVNode("circle", {
              cx: u.value.width / 2,
              cy: u.value.height / 2,
              r: C2.value,
              fill: P2.value === l.i ? "rgba(0,0,0,0.1)" : "transparent",
              "data-cy-donut-trap": "",
              onMouseenter: r[1] || (r[1] = (t) => Fe({
                datapoint: f.value[0],
                relativeIndex: 0,
                seriesIndex: f.value[0].seriesIndex,
                show: true
              })),
              onMouseleave: r[2] || (r[2] = (t) => {
                ae.value = false, P2.value = null;
              }),
              onClick: r[3] || (r[3] = (t) => B(f.value[0], l.i))
            }, null, 40, dl)
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
          }, toDisplayString(e.value.style.chart.layout.labels.hollow.total.text), 13, hl)) : createCommentVNode("", true),
          e.value.style.chart.layout.labels.hollow.total.show ? (openBlock(), createElementBlock("text", {
            key: 1,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 + e.value.style.chart.layout.labels.hollow.total.fontSize - (e.value.style.chart.layout.labels.hollow.average.show ? e.value.style.chart.layout.labels.hollow.total.fontSize : 0) + e.value.style.chart.layout.labels.hollow.total.value.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.total.value.color,
            "font-size": e.value.style.chart.layout.labels.hollow.total.value.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.total.value.bold ? "bold" : ""}`)
          }, toDisplayString(unref(nr)(
            e.value.style.chart.layout.labels.hollow.total.value.formatter,
            $.value,
            unref(Gt)({
              p: e.value.style.chart.layout.labels.hollow.total.value.prefix,
              v: $.value,
              s: e.value.style.chart.layout.labels.hollow.total.value.suffix
            })
          )), 13, yl)) : createCommentVNode("", true),
          e.value.style.chart.layout.labels.hollow.average.show ? (openBlock(), createElementBlock("text", {
            key: 2,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 + (e.value.style.chart.layout.labels.hollow.total.show ? e.value.style.chart.layout.labels.hollow.average.fontSize : 0) + e.value.style.chart.layout.labels.hollow.average.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.average.color,
            "font-size": e.value.style.chart.layout.labels.hollow.average.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.average.bold ? "bold" : ""}`)
          }, toDisplayString(e.value.style.chart.layout.labels.hollow.average.text), 13, fl)) : createCommentVNode("", true),
          e.value.style.chart.layout.labels.hollow.average.show ? (openBlock(), createElementBlock("text", {
            key: 3,
            "text-anchor": "middle",
            x: u.value.width / 2,
            y: u.value.height / 2 + (e.value.style.chart.layout.labels.hollow.total.show ? e.value.style.chart.layout.labels.hollow.average.fontSize : 0) + e.value.style.chart.layout.labels.hollow.average.fontSize + e.value.style.chart.layout.labels.hollow.average.value.offsetY,
            fill: e.value.style.chart.layout.labels.hollow.average.value.color,
            "font-size": e.value.style.chart.layout.labels.hollow.average.value.fontSize,
            style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.hollow.average.value.bold ? "bold" : ""}`)
          }, toDisplayString(G.value ? "--" : unref(nr)(
            e.value.style.chart.layout.labels.hollow.average.value.formatter,
            Le.value,
            unref(Gt)({
              p: e.value.style.chart.layout.labels.hollow.average.value.prefix,
              v: Le.value,
              s: e.value.style.chart.layout.labels.hollow.average.value.suffix,
              r: e.value.style.chart.layout.labels.hollow.average.value.rounding
            })
          )), 13, pl)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("g", {
          filter: J(a),
          class: normalizeClass({ animated: e.value.useCssAnimation })
        }, [
          e.value.style.chart.layout.labels.dataLabels.useLabelSlots ? (openBlock(), createElementBlock("g", bl, [
            (openBlock(), createElementBlock("foreignObject", {
              x: unref(z)(t, true).anchor === "end" ? unref(z)(t).x - 120 : unref(z)(t, true).anchor === "middle" ? unref(z)(t).x - 60 : unref(z)(t).x,
              y: unref(P)(t) - (Te.value ? 20 : 0),
              width: "120",
              height: "60",
              style: { overflow: "visible" }
            }, [
              createBaseVNode("div", null, [
                renderSlot(l.$slots, "dataLabel", normalizeProps(guardReactiveProps({
                  datapoint: t,
                  isBlur: !e.value.useBlurOnHover || [null, void 0].includes(P2.value) || P2.value === a,
                  isSafari: Te.value,
                  isVisible: T(t) && y.value.dataLabels.show,
                  textAlign: unref(z)(t, true, 16, true).anchor,
                  flexAlign: unref(z)(t, true, 16).anchor,
                  percentage: se2(t, f.value)
                })), void 0, true)
              ])
            ], 8, ml))
          ])) : (openBlock(), createElementBlock("g", wl, [
            e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("circle", {
                key: 0,
                cx: unref(z)(t).x,
                cy: unref(P)(t) - 3.5,
                fill: t.color,
                stroke: e.value.style.chart.backgroundColor,
                "stroke-width": 1,
                r: 3,
                filter: !e.value.useBlurOnHover || [null, void 0].includes(P2.value) || P2.value === a ? "" : `url(#blur_${w.value})`,
                onClick: (i) => B(t, a)
              }, null, 8, kl)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.type === "polar" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("circle", {
                key: 0,
                cx: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
                cy: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 24, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y,
                fill: t.color,
                stroke: e.value.style.chart.backgroundColor,
                "stroke-width": 1,
                r: 3,
                filter: !e.value.useBlurOnHover || [null, void 0].includes(P2.value) || P2.value === a ? "" : `url(#blur_${w.value})`,
                onClick: (i) => B(t, a)
              }, null, 8, _l)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.type === "classic" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 0,
                "text-anchor": unref(z)(t, true, 12).anchor,
                x: unref(z)(t, true, 12).x,
                y: unref(P)(t),
                fill: e.value.style.chart.layout.labels.percentage.color,
                "font-size": e.value.style.chart.layout.labels.percentage.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.percentage.bold ? "bold" : ""}`),
                onClick: (i) => B(t, a)
              }, toDisplayString(se2(t, f.value)) + " " + toDisplayString(e.value.style.chart.layout.labels.value.show ? `(${unref(nr)(
                e.value.style.chart.layout.labels.value.formatter,
                t.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: t.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.value.rounding
                }),
                { datapoint: t }
              )})` : ""), 13, xl)) : createCommentVNode("", true),
              T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 1,
                "text-anchor": unref(z)(t).anchor,
                x: unref(z)(t, true, 12).x,
                y: unref(P)(t) + e.value.style.chart.layout.labels.percentage.fontSize,
                fill: e.value.style.chart.layout.labels.name.color,
                "font-size": e.value.style.chart.layout.labels.name.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.name.bold ? "bold" : ""}`),
                onClick: (i) => B(t, a)
              }, toDisplayString(t.name), 13, Cl)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            e.value.type === "polar" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 0,
                "text-anchor": j2(c2.value[a].middlePoint),
                x: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
                y: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y,
                fill: e.value.style.chart.layout.labels.percentage.color,
                "font-size": e.value.style.chart.layout.labels.percentage.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.percentage.bold ? "bold" : ""}`),
                onClick: (i) => B(t, a)
              }, toDisplayString(se2(t, f.value)) + " " + toDisplayString(e.value.style.chart.layout.labels.value.show ? `(${unref(nr)(
                e.value.style.chart.layout.labels.value.formatter,
                t.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: t.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.value.rounding
                }),
                { datapoint: t }
              )})` : ""), 13, $l)) : createCommentVNode("", true),
              T(t) && y.value.dataLabels.show ? (openBlock(), createElementBlock("text", {
                key: 1,
                "text-anchor": j2(c2.value[a].middlePoint),
                x: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x,
                y: unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).y + e.value.style.chart.layout.labels.percentage.fontSize,
                fill: e.value.style.chart.layout.labels.name.color,
                "font-size": e.value.style.chart.layout.labels.name.fontSize,
                style: normalizeStyle(`font-weight:${e.value.style.chart.layout.labels.name.bold ? "bold" : ""}`),
                onClick: (i) => B(t, a)
              }, toDisplayString(t.name), 13, Pl)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ])),
          y.value.dataLabels.show && e.value.style.chart.comments.show && t.comment ? (openBlock(), createElementBlock("g", Sl, [
            T(t) && e.value.type === "classic" ? (openBlock(), createElementBlock("foreignObject", {
              key: 0,
              x: e.value.style.chart.comments.offsetX + (unref(z)(t, true).anchor === "end" ? unref(z)(t).x - e.value.style.chart.comments.width : unref(z)(t, true).anchor === "middle" ? unref(z)(t).x - e.value.style.chart.comments.width / 2 : unref(z)(t).x),
              y: unref(P)(t) + 24 + e.value.style.chart.comments.offsetY,
              width: e.value.style.chart.comments.width,
              height: "200",
              style: { overflow: "visible", "pointer-events": "none" }
            }, [
              createBaseVNode("div", null, [
                renderSlot(l.$slots, "plot-comment", {
                  plot: { ...t, textAlign: unref(z)(t, true, 16, true).anchor, flexAlign: unref(z)(t, true, 16).anchor }
                }, void 0, true)
              ])
            ], 8, Ll)) : createCommentVNode("", true),
            T(t) && e.value.type === "polar" ? (openBlock(), createElementBlock("foreignObject", {
              key: 1,
              x: e.value.style.chart.comments.offsetX + (j2(c2.value[a].middlePoint) === "end" ? unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x - e.value.style.chart.comments.width : j2(c2.value[a].middlePoint) === "middle" ? unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x - e.value.style.chart.comments.width / 2 : unref(Dt)({ initX: c2.value[a].middlePoint.x, initY: c2.value[a].middlePoint.y, offset: 42, centerX: u.value.width / 2, centerY: u.value.height / 2 }).x),
              y: Ue(c2.value[a]) + e.value.style.chart.comments.offsetY,
              width: e.value.style.chart.comments.width,
              height: "200",
              style: { overflow: "visible", "pointer-events": "none" }
            }, [
              createBaseVNode("div", null, [
                renderSlot(l.$slots, "plot-comment", {
                  plot: { ...t, textAlign: j2(c2.value[a].middlePoint), flexAlign: j2(c2.value[a].middlePoint) }
                }, void 0, true)
              ])
            ], 8, Fl)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 10, gl))), 256)),
        renderSlot(l.$slots, "svg", { svg: u.value }, void 0, true)
      ], 14, Tt)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", zl, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(me) || unref(we) })), void 0, true)
      ])) : createCommentVNode("", true),
      U.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "donut",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            donut: {
              color: "#CCCCCC",
              strokeWidth: W2.value * 0.8
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: de
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${fe.value}`,
          legendSet: Se.value,
          config: Re.value,
          onClickMarker: r[4] || (r[4] = ({ i: t }) => Pe(t))
        }, {
          item: withCtx(({ legend: t, index: a }) => [
            createBaseVNode("div", {
              onClick: (i) => t.segregate(),
              style: normalizeStyle(`opacity:${O2.value.includes(a) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(t.name) + ": " + toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.value.formatter,
                t.value,
                unref(Gt)({
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
              O2.value.includes(a) ? (openBlock(), createElementBlock("span", Xl, " ( " + toDisplayString(qe(t.proportion * 100)) + " % ) ", 1)) : (openBlock(), createElementBlock("span", Yl, " (" + toDisplayString(isNaN(t.value / $.value) ? "-" : unref(nr)(
                e.value.style.chart.layout.labels.percentage.formatter,
                G.value ? t.proportion * 100 : t.value / $.value * 100,
                unref(Gt)({
                  v: G.value ? t.proportion * 100 : t.value / $.value * 100,
                  s: "%",
                  r: e.value.style.chart.legend.roundingPercentage
                })
              )) + ") ", 1))
            ], 12, Tl)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
        renderSlot(l.$slots, "legend", { legend: Se.value }, void 0, true)
      ], 512),
      createVNode(E, {
        show: y.value.showTooltip && ae.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: E2.value,
        content: ue.value,
        isCustom: q.value
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(l.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ne.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(l.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ne.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      U.value ? (openBlock(), createBlock(R, {
        key: 5,
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
            key: `table_${ye.value}`,
            colNames: oe2.value.colNames,
            head: oe2.value.head,
            body: oe2.value.body,
            config: oe2.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: r[5] || (r[5] = (t) => y.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createBaseVNode("div", {
                innerHTML: t,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Nl)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(t.name ? t.name : isNaN(Number(t)) ? t.includes("%") ? t : unref(nr)(
                e.value.style.chart.layout.labels.percentage.formatter,
                t,
                unref(Gt)({
                  v: t,
                  s: "%",
                  r: e.value.style.chart.layout.labels.percentage.rounding
                })
              ) : unref(nr)(
                e.value.style.chart.layout.labels.value.formatter,
                t,
                unref(Gt)({
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
    ], 14, zt));
  }
};
var ql = s(Ol, [["__scopeId", "data-v-159f668e"]]);
export {
  ql as default
};
//# sourceMappingURL=vue-ui-donut-DFaGk4fI-NAGGUA4K.js.map
