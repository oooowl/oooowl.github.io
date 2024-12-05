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
  T,
  Vt,
  Xt,
  dr,
  ir,
  jt,
  kt,
  qt,
  rt,
  te,
  tr,
  ur,
  z
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

// node_modules/vue-data-ui/dist/vue-ui-nested-donuts-Bv2D1uFd.js
var de = (B) => (pushScopeId("data-v-038450b3"), B = B(), popScopeId(), B);
var It = ["id"];
var At = ["xmlns", "viewBox"];
var Ot = ["id"];
var Pt = de(() => createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#FFFFFF",
  "stop-opacity": "0"
}, null, -1));
var Dt2 = ["offset", "stop-color"];
var zt = ["offset", "stop-opacity"];
var Vt2 = de(() => createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#FFFFFF",
  "stop-opacity": "0"
}, null, -1));
var Mt = ["id"];
var Bt = ["id"];
var Ut = de(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Rt = ["id"];
var Et = ["flood-color"];
var Gt = ["d", "fill", "stroke", "stroke-width", "filter"];
var Yt = { key: 0 };
var Xt2 = ["d", "fill"];
var Wt = { key: 1 };
var Ht2 = ["x", "y", "font-size", "font-weight", "fill"];
var qt2 = { key: 2 };
var Kt2 = ["filter"];
var Jt2 = ["text-anchor", "x", "y", "fill", "font-size", "font-weight"];
var Qt = ["text-anchor", "x", "y", "fill", "font-size", "font-weight"];
var Zt = ["text-anchor", "x", "y", "fill", "font-size", "font-weight"];
var jt2 = ["d", "fill", "onMouseenter", "onClick"];
var el = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var tl = {
  key: 0,
  class: "vue-ui-nested-donuts-legend-title"
};
var ll = ["onClick"];
var al = ["innerHTML"];
var ol = {
  __name: "vue-ui-nested-donuts",
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
  setup(B, { expose: Ge, emit: ce }) {
    const I = B, { vue_ui_nested_donuts: Ye } = te(), Y = computed(() => !!I.dataset && I.dataset.length), w = ref(Dt()), j = ref(false), ee = ref(""), Xe = ref(null), ve = ref(0), z2 = ref(null), fe = ref(null), te2 = ref(null), he = ref(null), ye = ref(null), pe = ref(0), be = ref(0), ge = ref(0), U = ref(false);
    function We(t) {
      U.value = t, ve.value += 1;
    }
    const e = computed({
      get: () => me(),
      set: (t) => t
    });
    function me() {
      const t = c({
        userConfig: I.config,
        defaultConfig: Ye
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_nested_donuts[t.theme] || I.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => I.config, (t) => {
      e.value = me(), ke(), pe.value += 1, be.value += 1, ge.value += 1;
    }, { deep: true });
    const X = ref(null);
    onMounted(() => {
      ke();
    });
    function ke() {
      if (jt(I.dataset) && qt({
        componentName: "VueUiNestedDonuts",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: u, height: a } = k({
            chart: z2.value,
            title: e.value.style.chart.title.text ? fe.value : null,
            legend: e.value.style.chart.legend.show ? te2.value : null,
            source: he.value,
            noTitle: ye.value
          });
          h.value.width = u, h.value.height = a;
        });
        X.value = new ResizeObserver(t), X.value.observe(z2.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      X.value && X.value.disconnect();
    });
    const { isPrinting: we, isImaging: _e, generatePdf: $e, generateImage: Le } = re({
      elementId: `nested_donuts_${w.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-nested-donuts"
    }), He2 = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), qe = computed(() => tr(e.value.customPalette)), _ = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), h = ref({
      height: 512,
      width: 512
    });
    function Ke({ datapoint: t, index: u }) {
      ce("selectDatapoint", { datapoint: t, index: u });
    }
    const y = ref([]), C2 = computed(() => (I.dataset.forEach((t, u) => {
      [null, void 0].includes(t.name) && qt({
        componentName: "VueUiNestedDonuts",
        type: "datasetSerieAttribute",
        property: "name",
        index: u
      }), [null, void 0].includes(t.series) ? qt({
        componentName: "VueUiNestedDonuts",
        type: "datasetSerieAttribute",
        property: "series",
        index: u
      }) : t.series.length === 0 ? qt({
        componentName: "VueUiNestedDonuts",
        type: "datasetAttributeEmpty",
        property: `series at index ${u}`
      }) : t.series.forEach((a, o) => {
        [null, void 0].includes(a.name) && qt({
          componentName: "VueUiNestedDonuts",
          type: "datasetSerieAttribute",
          property: "name",
          index: o,
          key: "serie"
        }), [null, void 0].includes(a.values) && qt({
          componentName: "VueUiNestedDonuts",
          type: "datasetSerieAttribute",
          property: "values",
          index: o,
          key: "serie"
        });
      });
    }), I.dataset.map((t, u) => ({
      ...t,
      total: t.series.filter((a) => !y.value.includes(a.id)).map((a) => ur(a.values).reduce((o, l) => o + l, 0)).reduce((a, o) => a + o, 0),
      datasetIndex: u,
      id: `${w.value}_${u}`,
      series: t.series.map((a, o) => ({
        name: a.name,
        arcOf: t.name,
        arcOfId: `${w.value}_${u}`,
        id: `${w.value}_${u}_${o}`,
        seriesIndex: o,
        datasetIndex: u,
        color: Q(a.color) || qe.value[o] || rt[o] || rt[o % rt.length],
        value: ur(a.values).reduce((l, d) => l + d, 0),
        absoluteValues: a.values || []
      }))
    })))), T2 = computed(() => Math.min(h.value.height, h.value.width) * (e.value.style.chart.layout.donut.strokeWidth / 512)), xe = computed(() => [...C2.value].map((t, u) => {
      const a = t.series.filter((o) => !y.value.includes(o.id)).map((o) => o.value).reduce((o, l) => o + l, 0);
      return {
        ...t,
        total: a,
        series: t.series.filter((o) => !y.value.includes(o.id)).map((o) => ({
          ...o,
          proportion: o.value / a
        }))
      };
    }));
    function Je(t, u, a) {
      let o = 0;
      for (let l = 0; l < t.length; l += 1)
        a.includes(t[l]) && (o += 1);
      return o < u;
    }
    const f = ref(xe.value);
    watch(() => xe.value, (t) => f.value = t);
    const Ce = ref(null), Te = ref(null);
    function le(t) {
      ce("selectLegend", t);
      const u = C2.value.flatMap((c2) => c2.series).find((c2) => c2.id === t.id), a = f.value.flatMap((c2) => c2.series).find((c2) => c2.id === t.id);
      let l = a ? a.value : 0;
      const d = C2.value.find((c2) => c2.id === u.arcOfId).series.map((c2) => c2.id), b = Je(d, d.length - 1, y.value);
      if (y.value.includes(t.id)) {
        let c2 = function() {
          l > u.value ? (cancelAnimationFrame(Ce.value), f.value = f.value.map(($) => ({
            ...$,
            series: $.series.map((S) => S.id == t.id ? {
              ...S,
              value: u.value
            } : S)
          }))) : (l += u.value * 0.025, f.value = f.value.map(($) => ({
            ...$,
            series: $.series.map((S) => S.id === t.id ? {
              ...S,
              value: l
            } : S)
          })), Ce.value = requestAnimationFrame(c2));
        };
        y.value = y.value.filter(($) => $ !== t.id), c2();
      } else if (b) {
        let c2 = function() {
          l < 0.1 ? (cancelAnimationFrame(Te.value), y.value.push(t.id), f.value = f.value.map(($, S) => ({
            ...$,
            series: $.series.map((O2) => O2.id === t.id ? {
              ...O2,
              value: 0
            } : O2)
          }))) : (l /= 1.1, f.value = f.value.map(($, S) => ({
            ...$,
            series: $.series.map((O2) => O2.id === t.id ? {
              ...O2,
              value: l
            } : O2)
          })), Te.value = requestAnimationFrame(c2));
        };
        c2();
      }
    }
    const ae2 = computed(() => T2.value / C2.value.length * e.value.style.chart.layout.donut.spacingRatio), Fe = computed(() => f.value.map((t, u) => T2.value - u * T2.value / C2.value.length)), W2 = computed(() => f.value.map((t, u) => {
      const a = u * T2.value / C2.value.length;
      return {
        ...t,
        radius: T2.value - a,
        donut: kt(
          { series: t.series },
          h.value.width / 2,
          h.value.height / 2,
          T2.value - a,
          T2.value - a,
          1.99999,
          2,
          1,
          360,
          105.25,
          ae2.value
        )
      };
    })), Se2 = computed(() => [...C2.value].map((t, u) => {
      const a = u * T2.value / C2.value.length;
      return {
        sizeRatio: a,
        donut: kt(
          { series: [{ value: 1 }] },
          h.value.width / 2,
          h.value.height / 2,
          T2.value - a,
          T2.value - a,
          1.99999,
          2,
          1,
          360,
          105.25,
          T2.value / C2.value.length * e.value.style.chart.layout.donut.spacingRatio
        )[0]
      };
    })), Ne = ref(null), H = ref(null), q = ref(null), oe = ref(null);
    function Qe({ datapoint: t, _relativeIndex: u, seriesIndex: a }) {
      Ne.value = t.arcOfId, H.value = t.id, q.value = a, oe.value = {
        datapoint: t,
        seriesIndex: a,
        series: f.value,
        config: e.value
      };
      const o = e.value.style.chart.tooltip.customFormat;
      if (Xt(o) && Kt(() => o({
        seriesIndex: a,
        datapoint: t,
        series: f.value,
        config: e.value
      })))
        ee.value = o({
          seriesIndex: a,
          datapoint: t,
          series: f.value,
          config: e.value
        });
      else {
        let l = "";
        if (e.value.style.chart.tooltip.showAllItemsAtIndex && y.value.length === 0) {
          const d = f.value.map((b) => b.series.find((c2) => c2.seriesIndex === a));
          d.forEach((b, c2) => {
            if (!b) return "";
            l += `
                    <div style="display:flex; flex-direction: column; justify-content:flex-start; align-items:flex-start;padding:6px 0; ${c2 < d.length - 1 ? `border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor}` : ""}">
                        <div style="display:flex; flex-direction: row; gap: 3px; justify-content:flex-start; align-items:center;">
                            <svg viewBox="0 0 20 20" height="${e.value.style.chart.tooltip.fontSize}" width="${e.value.style.chart.tooltip.fontSize}">
                                <circle cx="10" cy="10" r="10" fill="${b.color}"/>
                            </svg>
                            <span>
                                ${b.arcOf ?? ""} - ${b.name}
                            </span>
                        </div>
                        <span>
                            ${e.value.style.chart.tooltip.showValue ? `<b>${ir(
              e.value.style.chart.layout.labels.dataLabels.formatter,
              t.value,
              Ht({
                p: e.value.style.chart.layout.labels.dataLabels.prefix,
                v: t.value,
                s: e.value.style.chart.layout.labels.dataLabels.suffix,
                r: e.value.style.chart.tooltip.roundingValue
              }),
              { datapoint: t, seriesIndex: a }
            )}
                        </b>` : ""}
                            ${e.value.style.chart.tooltip.showPercentage ? `(${Ht({
              v: b.proportion * 100,
              s: "%",
              r: e.value.style.chart.tooltip.roundingPercentage
            })})` : ""}
                        </span>
                    </div>
                `;
          });
        } else
          l += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.arcOf ?? ""} - ${t.name}</div>`, l += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`, e.value.style.chart.tooltip.showValue && (l += `<b>${ir(
            e.value.style.chart.layout.labels.dataLabels.formatter,
            t.value,
            Ht({
              p: e.value.style.chart.layout.labels.dataLabels.prefix,
              v: t.value,
              s: e.value.style.chart.layout.labels.dataLabels.suffix,
              r: e.value.style.chart.tooltip.roundingValue
            }),
            { datapoint: t, seriesIndex: a }
          )}</b>`), e.value.style.chart.tooltip.showPercentage && (e.value.style.chart.tooltip.showValue ? l += `<span>(${Ht({
            v: t.proportion * 100,
            s: "%",
            r: e.value.style.chart.tooltip.roundingPercentage
          })})</span></div>` : l += `<b>${Ht({
            v: t.proportion * 100,
            s: "%",
            r: e.value.style.chart.tooltip.roundingPercentage
          })}</b></div>`);
        ee.value = `<div style="font-size:${e.value.style.chart.tooltip.fontSize}px">${l}</div>`;
      }
      j.value = true;
    }
    function se(t) {
      return t.proportion * 100 > e.value.style.chart.layout.labels.dataLabels.hideUnderValue;
    }
    function Ie(t, u) {
      if (!e.value.useBlurOnHover)
        return "";
      if (e.value.style.chart.tooltip.showAllItemsAtIndex && y.value.length === 0)
        return [null, void 0].includes(q.value) || q.value === u ? "" : `url(#blur_${w.value})`;
      if (!e.value.style.chart.tooltip.showAllItemsAtIndex || y.value.length)
        return [null, void 0].includes(H.value) || H.value === t.id ? "" : `url(#blur_${w.value})`;
    }
    const ue = computed(() => C2.value.map((t, u) => t.series.map((a, o) => ({
      name: a.name,
      color: a.color,
      value: a.value,
      shape: "circle",
      arcOf: a.arcOf,
      id: a.id,
      seriesIndex: o,
      datasetIndex: u,
      total: t.series.filter((l) => !y.value.includes(l.id)).map((l) => l.value).reduce((l, d) => l + d, 0)
    })).map((a) => ({
      ...a,
      opacity: y.value.includes(a.id) ? 0.5 : 1,
      segregate: () => le(a),
      isSegregated: y.value.includes(a.id)
    })))), Ze = computed(() => ({
      cy: "nested-donuts-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), A = computed(() => {
      const t = f.value.flatMap((a) => a.series.map((o) => ({
        name: `${a.name} - ${o.name}`,
        color: o.color,
        total: a.total
      }))), u = f.value.flatMap((a) => a.series.map((o) => o.value));
      return { head: t, body: u };
    });
    function Ae() {
      nextTick(() => {
        const t = A.value.head.map((o, l) => [[
          o.name
        ], [A.value.body[l]], [isNaN(A.value.body[l] / o.total) ? "-" : A.value.body[l] / o.total * 100]]), u = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), a = Vt(u);
        Nt({ csvContent: a, title: e.value.style.chart.title.text || "vue-ui-nested-donuts" });
      });
    }
    const K = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ], u = A.value.head.map((l, d) => {
        const b = Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: A.value.body[d], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: l.color,
            name: l.name
          },
          b,
          isNaN(A.value.body[d] / l.total) ? "-" : Ht({
            v: A.value.body[d] / l.total * 100,
            s: "%",
            r: e.value.table.td.roundingPercentage
          })
        ];
      }), a = {
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
        head: t,
        body: u,
        config: a
      };
    });
    function je() {
      return C2.value;
    }
    function Oe() {
      _.value.showTable = !_.value.showTable;
    }
    function Pe() {
      _.value.dataLabels.show = !_.value.dataLabels.show;
    }
    function De() {
      _.value.showTooltip = !_.value.showTooltip;
    }
    const J = ref(false);
    function ne() {
      J.value = !J.value;
    }
    return Ge({
      getData: je,
      generatePdf: $e,
      generateCsv: Ae,
      generateImage: Le,
      toggleTable: Oe,
      toggleLabels: Pe,
      toggleTooltip: De,
      toggleAnnotator: ne
    }), (t, u) => (openBlock(), createElementBlock("div", {
      ref_key: "nestedDonutsChart",
      ref: z2,
      class: normalizeClass(`vue-ui-nested-donuts ${U.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor}`),
      id: `nested_donuts_${w.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: z2.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: J.value,
        onClose: ne
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      He2.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: ye,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: fe
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${pe.value}`,
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
      e.value.userOptions.show && Y.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${ve.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(we),
        isImaging: unref(_e),
        uid: w.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: U.value,
        isTooltip: _.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: z2.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: J.value,
        onToggleFullscreen: We,
        onGeneratePdf: unref($e),
        onGenerateCsv: Ae,
        onGenerateImage: unref(Le),
        onToggleTable: Oe,
        onToggleLabels: Pe,
        onToggleTooltip: De,
        onToggleAnnotator: ne
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
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
          ]),
          key: "6"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: o }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: o })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      Y.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": U.value, "vue-data-ui-fulscreen--off": !U.value }),
        viewBox: `0 0 ${h.value.width <= 0 ? 1e-3 : h.value.width} ${h.value.height < 0 ? 1e-3 : h.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Se2.value, (a, o) => (openBlock(), createElementBlock("radialGradient", {
            id: `radial_${w.value}_${o}`
          }, [
            Pt,
            createBaseVNode("stop", {
              offset: `${(1 - ae2.value / Fe.value[o]) * 100}%`,
              "stop-color": unref(dr)("#FFFFFF", 0),
              "stop-opacity": "0"
            }, null, 8, Dt2),
            createBaseVNode("stop", {
              offset: `${(1 - ae2.value / Fe.value[o] / 2) * 100}%`,
              "stop-color": "#FFFFFF",
              "stop-opacity": e.value.style.chart.gradientIntensity / 100
            }, null, 8, zt),
            Vt2
          ], 8, Ot))), 256))
        ]),
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
            }, null, 8, Bt),
            Ut
          ], 8, Mt),
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
            }, null, 8, Et)
          ], 8, Rt)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(W2.value, (a, o) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, d) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              class: "vue-ui-donut-arc-path",
              d: l.arcSlice,
              fill: unref(dr)(l.color, 80),
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.donut.borderWidth,
              filter: Ie(l, d)
            }, null, 8, Gt)
          ]))), 256))
        ]))), 256)),
        e.value.style.chart.useGradient ? (openBlock(), createElementBlock("g", Yt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Se2.value, (a, o) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              d: a.donut.arcSlice,
              fill: `url(#radial_${w.value}_${o})`,
              stroke: "transparent",
              "stroke-width": "0"
            }, null, 8, Xt2)
          ]))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.layout.labels.dataLabels.showDonutName ? (openBlock(), createElementBlock("g", Wt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(W2.value, (a, o) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, d) => (openBlock(), createElementBlock("g", null, [
              d === 0 && h.value.width && h.value.height ? (openBlock(), createElementBlock("text", {
                key: 0,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                x: h.value.width / 2,
                y: l.startY - e.value.style.chart.layout.labels.dataLabels.fontSize + e.value.style.chart.layout.labels.dataLabels.donutNameOffsetY,
                "text-anchor": "middle",
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldDonutName ? "bold" : "normal",
                fill: e.value.style.chart.layout.labels.dataLabels.color
              }, toDisplayString(e.value.style.chart.layout.labels.dataLabels.donutNameAbbreviation ? unref($t)({ source: a.name, length: e.value.style.chart.layout.labels.dataLabels.donutNameMaxAbbreviationSize }) : a.name), 11, Ht2)) : createCommentVNode("", true)
            ]))), 256))
          ]))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.layout.labels.dataLabels.show ? (openBlock(), createElementBlock("g", qt2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(W2.value, (a, o) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, d) => (openBlock(), createElementBlock("g", {
              filter: Ie(l, d)
            }, [
              se(l) && _.value.dataLabels.show && e.value.style.chart.layout.labels.dataLabels.showPercentage ? (openBlock(), createElementBlock("text", {
                key: 0,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                "text-anchor": unref(z)(l, true).anchor,
                x: unref(z)(l, false, e.value.style.chart.layout.labels.dataLabels.offsetX).x || 0,
                y: unref(T)(l, e.value.style.chart.layout.labels.dataLabels.offsetY, e.value.style.chart.layout.labels.dataLabels.offsetY),
                fill: e.value.style.chart.layout.labels.dataLabels.useSerieColor ? l.color : e.value.style.chart.layout.labels.dataLabels.color,
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldPercentage ? "bold" : "normal"
              }, toDisplayString(unref(Ht)({ v: l.proportion * 100, s: "%", r: e.value.style.chart.layout.labels.dataLabels.roundingPercentage })), 11, Jt2)) : createCommentVNode("", true),
              se(l) && _.value.dataLabels.show && e.value.style.chart.layout.labels.dataLabels.showPercentage && e.value.style.chart.layout.labels.dataLabels.showValue ? (openBlock(), createElementBlock("text", {
                key: 1,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                "text-anchor": unref(z)(l, true).anchor,
                x: unref(z)(l, false, e.value.style.chart.layout.labels.dataLabels.offsetX).x || 0,
                y: unref(T)(l, e.value.style.chart.layout.labels.dataLabels.offsetY, e.value.style.chart.layout.labels.dataLabels.offsetY) + e.value.style.chart.layout.labels.dataLabels.fontSize,
                fill: e.value.style.chart.layout.labels.dataLabels.useSerieColor ? l.color : e.value.style.chart.layout.labels.dataLabels.color,
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldValue ? "bold" : "normal"
              }, " (" + toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.dataLabels.roundingValue
                }),
                { datapoint: l, seriesIndex: o, datapointIndex: d }
              )) + ") ", 11, Qt)) : createCommentVNode("", true),
              se(l) && _.value.dataLabels.show && !e.value.style.chart.layout.labels.dataLabels.showPercentage && e.value.style.chart.layout.labels.dataLabels.showValue ? (openBlock(), createElementBlock("text", {
                key: 2,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                "text-anchor": unref(z)(l, true).anchor,
                x: unref(z)(l, false, e.value.style.chart.layout.labels.dataLabels.offsetX).x || 0,
                y: unref(T)(l, e.value.style.chart.layout.labels.dataLabels.offsetY, e.value.style.chart.layout.labels.dataLabels.offsetY),
                fill: e.value.style.chart.layout.labels.dataLabels.useSerieColor ? l.color : e.value.style.chart.layout.labels.dataLabels.color,
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldValue ? "bold" : "normal"
              }, toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.dataLabels.roundingValue
                }),
                { datapoint: l, seriesIndex: o, datapointIndex: d }
              )), 11, Zt)) : createCommentVNode("", true)
            ], 8, Kt2))), 256))
          ]))), 256))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(W2.value, (a, o) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, d) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              "data-cy-donut-trap": "",
              d: l.arcSlice,
              fill: Xe.value === o ? "rgba(0,0,0,0.1)" : "transparent",
              onMouseenter: (b) => Qe({
                datapoint: l,
                relativeIndex: o,
                seriesIndex: l.seriesIndex
              }),
              onClick: (b) => Ke({ datapoint: l, index: d }),
              onMouseleave: u[0] || (u[0] = (b) => {
                j.value = false, Ne.value = null, H.value = null, q.value = null;
              })
            }, null, 40, jt2)
          ]))), 256))
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: h.value }, void 0, true)
      ], 14, At)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", el, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(we) || unref(_e) })), void 0, true)
      ])) : createCommentVNode("", true),
      Y.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "donut",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            donut: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createVNode(E, {
        show: _.value.showTooltip && j.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: z2.value,
        content: ee.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...oe.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...oe.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      e.value.style.chart.legend.show ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "chartLegend",
        ref: te2,
        class: normalizeClass({ "vue-ui-nested-donuts-legend": ue.value.length > 1 })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(ue.value, (a, o) => (openBlock(), createBlock(C, {
          key: `legend_${o}_${ge.value}`,
          legendSet: a,
          config: Ze.value,
          onClickMarker: u[1] || (u[1] = ({ legend: l }) => le(l))
        }, {
          legendTitle: withCtx(({ titleSet: l }) => [
            l[0] && l[0].arcOf ? (openBlock(), createElementBlock("div", tl, toDisplayString(l[0].arcOf), 1)) : createCommentVNode("", true)
          ]),
          item: withCtx(({ legend: l, index: d }) => [
            createBaseVNode("div", {
              onClick: (b) => le(l),
              style: normalizeStyle(`opacity:${y.value.includes(l.id) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(l.name) + ": " + toDisplayString(unref(ir)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Ht)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.legend.roundingValue
                }),
                { datapoint: l, seriesIndex: d }
              )) + " ", 1),
              y.value.includes(l.id) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(" ( - % ) ")
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(" (" + toDisplayString(isNaN(l.value / l.total) ? "-" : unref(Ht)({ v: l.value / l.total * 100, s: "%", r: e.value.style.chart.legend.roundingPercentage })) + ") ", 1)
              ], 64))
            ], 12, ll)
          ]),
          _: 2
        }, 1032, ["legendSet", "config"]))), 128))
      ], 2)) : createCommentVNode("", true),
      e.value.style.chart.legend.show ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 8,
        ref_key: "chartLegend",
        ref: te2
      }, [
        renderSlot(t.$slots, "legend", { legend: ue.value }, void 0, true)
      ], 512)),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 9,
        ref_key: "source",
        ref: he,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      Y.value ? (openBlock(), createBlock(R, {
        key: 10,
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
          (openBlock(), createBlock(W, {
            key: `table_${be.value}`,
            colNames: K.value.colNames,
            head: K.value.head,
            body: K.value.body,
            config: K.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: u[2] || (u[2] = (a) => _.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", {
                innerHTML: a,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, al)
            ]),
            td: withCtx(({ td: a }) => [
              createTextVNode(toDisplayString(a.name || a), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, It));
  }
};
var ml = s(ol, [["__scopeId", "data-v-038450b3"]]);
export {
  ml as default
};
//# sourceMappingURL=vue-ui-nested-donuts-Bv2D1uFd-JO54OJPN.js.map
