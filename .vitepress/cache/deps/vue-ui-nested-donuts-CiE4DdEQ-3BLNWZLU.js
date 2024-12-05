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
  Nt,
  Ot,
  P,
  Qt,
  R as R2,
  Xt,
  Yt,
  cr,
  et,
  gt,
  ir,
  j,
  nr,
  oe,
  or,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-nested-donuts-CiE4DdEQ.js
var re = (M2) => (pushScopeId("data-v-e05474aa"), M2 = M2(), popScopeId(), M2);
var Lt2 = ["id"];
var Ct = ["xmlns", "viewBox"];
var Ft = ["id"];
var St = re(() => createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#FFFFFF",
  "stop-opacity": "0"
}, null, -1));
var Nt2 = ["offset", "stop-color"];
var Tt = ["offset", "stop-opacity"];
var It = re(() => createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#FFFFFF",
  "stop-opacity": "0"
}, null, -1));
var Dt = ["id"];
var Ot2 = ["id"];
var zt = re(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Pt = ["id"];
var At = ["flood-color"];
var Vt = ["d", "fill", "stroke", "stroke-width", "filter"];
var Mt = { key: 0 };
var Bt = ["d", "fill"];
var Ut = { key: 1 };
var Rt = ["x", "y", "font-size", "font-weight", "fill"];
var Et = { key: 2 };
var Gt2 = ["filter"];
var Yt2 = ["text-anchor", "x", "y", "fill", "font-size", "font-weight"];
var Xt2 = ["text-anchor", "x", "y", "fill", "font-size", "font-weight"];
var Wt = ["text-anchor", "x", "y", "fill", "font-size", "font-weight"];
var Ht2 = ["d", "fill", "onMouseenter", "onClick"];
var qt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Kt2 = {
  key: 0,
  class: "vue-ui-nested-donuts-legend-title"
};
var Jt = ["onClick"];
var Qt2 = ["innerHTML"];
var Zt = {
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
  setup(M2, { expose: Be, emit: ie2 }) {
    const I = M2, { vue_ui_nested_donuts: Ue } = oe(), E2 = computed(() => !!I.dataset && I.dataset.length), _ = ref(Lt()), Z = ref(false), j2 = ref(""), Re = ref(null), de = ref(0), B = ref(null), ce = ref(null), ee = ref(null), ve = ref(0), fe = ref(0), he = ref(0), U = ref(false);
    function Ee(t) {
      U.value = t, de.value += 1;
    }
    const e = computed({
      get: () => ye(),
      set: (t) => t
    });
    function ye() {
      const t = c({
        userConfig: I.config,
        defaultConfig: Ue
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_nested_donuts[t.theme] || I.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => I.config, (t) => {
      e.value = ye(), pe(), ve.value += 1, fe.value += 1, he.value += 1;
    }, { deep: true });
    const G = ref(null);
    onMounted(() => {
      pe();
    });
    function pe() {
      if (Xt(I.dataset) && Kt({
        componentName: "VueUiNestedDonuts",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: s2, height: a } = M({
            chart: B.value,
            title: e.value.style.chart.title.text ? ce.value : null,
            legend: e.value.style.chart.legend.show ? ee.value : null
          });
          f.value.width = s2, f.value.height = a;
        });
        G.value = new ResizeObserver(t), G.value.observe(B.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      G.value && G.value.disconnect();
    });
    const { isPrinting: be, isImaging: ge, generatePdf: me, generateImage: _e } = se({
      elementId: `nested_donuts_${_.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-nested-donuts"
    }), Ge2 = computed(() => or(e.value.customPalette)), w = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), f = ref({
      height: 512,
      width: 512
    });
    function Ye({ datapoint: t, index: s2 }) {
      ie2("selectDatapoint", { datapoint: t, index: s2 });
    }
    const h = ref([]), C2 = computed(() => (I.dataset.forEach((t, s2) => {
      [null, void 0].includes(t.name) && Kt({
        componentName: "VueUiNestedDonuts",
        type: "datasetSerieAttribute",
        property: "name",
        index: s2
      }), [null, void 0].includes(t.series) ? Kt({
        componentName: "VueUiNestedDonuts",
        type: "datasetSerieAttribute",
        property: "series",
        index: s2
      }) : t.series.length === 0 ? Kt({
        componentName: "VueUiNestedDonuts",
        type: "datasetAttributeEmpty",
        property: `series at index ${s2}`
      }) : t.series.forEach((a, o) => {
        [null, void 0].includes(a.name) && Kt({
          componentName: "VueUiNestedDonuts",
          type: "datasetSerieAttribute",
          property: "name",
          index: o,
          key: "serie"
        }), [null, void 0].includes(a.values) && Kt({
          componentName: "VueUiNestedDonuts",
          type: "datasetSerieAttribute",
          property: "values",
          index: o,
          key: "serie"
        });
      });
    }), I.dataset.map((t, s2) => ({
      ...t,
      total: t.series.filter((a) => !h.value.includes(a.id)).map((a) => ir(a.values).reduce((o, l) => o + l, 0)).reduce((a, o) => a + o, 0),
      datasetIndex: s2,
      id: `${_.value}_${s2}`,
      series: t.series.map((a, o) => ({
        name: a.name,
        arcOf: t.name,
        arcOfId: `${_.value}_${s2}`,
        id: `${_.value}_${s2}_${o}`,
        seriesIndex: o,
        datasetIndex: s2,
        color: j(a.color) || Ge2.value[o] || et[o] || et[o % et.length],
        value: ir(a.values).reduce((l, i) => l + i, 0),
        absoluteValues: a.values || []
      }))
    })))), F = computed(() => Math.min(f.value.height, f.value.width) * (e.value.style.chart.layout.donut.strokeWidth / 512)), we = computed(() => [...C2.value].map((t, s2) => {
      const a = t.series.filter((o) => !h.value.includes(o.id)).map((o) => o.value).reduce((o, l) => o + l, 0);
      return {
        ...t,
        total: a,
        series: t.series.filter((o) => !h.value.includes(o.id)).map((o) => ({
          ...o,
          proportion: o.value / a
        }))
      };
    }));
    function Xe(t, s2, a) {
      let o = 0;
      for (let l = 0; l < t.length; l += 1)
        a.includes(t[l]) && (o += 1);
      return o < s2;
    }
    const v = ref(we.value);
    watch(() => we.value, (t) => v.value = t);
    const ke = ref(null), xe = ref(null);
    function te(t) {
      ie2("selectLegend", t);
      const s2 = C2.value.flatMap((c2) => c2.series).find((c2) => c2.id === t.id), a = v.value.flatMap((c2) => c2.series).find((c2) => c2.id === t.id);
      let l = a ? a.value : 0;
      const i = C2.value.find((c2) => c2.id === s2.arcOfId).series.map((c2) => c2.id), b = Xe(i, i.length - 1, h.value);
      if (h.value.includes(t.id)) {
        let c2 = function() {
          l > s2.value ? (cancelAnimationFrame(ke.value), v.value = v.value.map((k) => ({
            ...k,
            series: k.series.map((N) => N.id == t.id ? {
              ...N,
              value: s2.value
            } : N)
          }))) : (l += s2.value * 0.025, v.value = v.value.map((k) => ({
            ...k,
            series: k.series.map((N) => N.id === t.id ? {
              ...N,
              value: l
            } : N)
          })), ke.value = requestAnimationFrame(c2));
        };
        h.value = h.value.filter((k) => k !== t.id), c2();
      } else if (b) {
        let c2 = function() {
          l < 0.1 ? (cancelAnimationFrame(xe.value), h.value.push(t.id), v.value = v.value.map((k, N) => ({
            ...k,
            series: k.series.map((O2) => O2.id === t.id ? {
              ...O2,
              value: 0
            } : O2)
          }))) : (l /= 1.1, v.value = v.value.map((k, N) => ({
            ...k,
            series: k.series.map((O2) => O2.id === t.id ? {
              ...O2,
              value: l
            } : O2)
          })), xe.value = requestAnimationFrame(c2));
        };
        c2();
      }
    }
    const le = computed(() => F.value / C2.value.length * e.value.style.chart.layout.donut.spacingRatio), $e = computed(() => v.value.map((t, s2) => F.value - s2 * F.value / C2.value.length)), Y = computed(() => v.value.map((t, s2) => {
      const a = s2 * F.value / C2.value.length;
      return {
        ...t,
        radius: F.value - a,
        donut: gt(
          { series: t.series },
          f.value.width / 2,
          f.value.height / 2,
          F.value - a,
          F.value - a,
          1.99999,
          2,
          1,
          360,
          105.25,
          le.value
        )
      };
    })), Le = computed(() => [...C2.value].map((t, s2) => {
      const a = s2 * F.value / C2.value.length;
      return {
        sizeRatio: a,
        donut: gt(
          { series: [{ value: 1 }] },
          f.value.width / 2,
          f.value.height / 2,
          F.value - a,
          F.value - a,
          1.99999,
          2,
          1,
          360,
          105.25,
          F.value / C2.value.length * e.value.style.chart.layout.donut.spacingRatio
        )[0]
      };
    })), Ce = ref(null), X = ref(null), W2 = ref(null), ae = ref(null);
    function We({ datapoint: t, _relativeIndex: s2, seriesIndex: a }) {
      Ce.value = t.arcOfId, X.value = t.id, W2.value = a, ae.value = {
        datapoint: t,
        seriesIndex: a,
        series: v.value,
        config: e.value
      };
      const o = e.value.style.chart.tooltip.customFormat;
      if (Ht(o) && $t(() => o({
        seriesIndex: a,
        datapoint: t,
        series: v.value,
        config: e.value
      })))
        j2.value = o({
          seriesIndex: a,
          datapoint: t,
          series: v.value,
          config: e.value
        });
      else {
        let l = "";
        if (e.value.style.chart.tooltip.showAllItemsAtIndex && h.value.length === 0) {
          const i = v.value.map((b) => b.series.find((c2) => c2.seriesIndex === a));
          i.forEach((b, c2) => {
            if (!b) return "";
            l += `
                    <div style="display:flex; flex-direction: column; justify-content:flex-start; align-items:flex-start;padding:6px 0; ${c2 < i.length - 1 ? `border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor}` : ""}">
                        <div style="display:flex; flex-direction: row; gap: 3px; justify-content:flex-start; align-items:center;">
                            <svg viewBox="0 0 20 20" height="${e.value.style.chart.tooltip.fontSize}" width="${e.value.style.chart.tooltip.fontSize}">
                                <circle cx="10" cy="10" r="10" fill="${b.color}"/>
                            </svg>
                            <span>
                                ${b.arcOf ?? ""} - ${b.name}
                            </span>
                        </div>
                        <span>
                            ${e.value.style.chart.tooltip.showValue ? `<b>${nr(
              e.value.style.chart.layout.labels.dataLabels.formatter,
              t.value,
              Gt({
                p: e.value.style.chart.layout.labels.dataLabels.prefix,
                v: t.value,
                s: e.value.style.chart.layout.labels.dataLabels.suffix,
                r: e.value.style.chart.tooltip.roundingValue
              }),
              { datapoint: t, seriesIndex: a }
            )}
                        </b>` : ""}
                            ${e.value.style.chart.tooltip.showPercentage ? `(${Gt({
              v: b.proportion * 100,
              s: "%",
              r: e.value.style.chart.tooltip.roundingPercentage
            })})` : ""}
                        </span>
                    </div>
                `;
          });
        } else
          l += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.arcOf ?? ""} - ${t.name}</div>`, l += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`, e.value.style.chart.tooltip.showValue && (l += `<b>${nr(
            e.value.style.chart.layout.labels.dataLabels.formatter,
            t.value,
            Gt({
              p: e.value.style.chart.layout.labels.dataLabels.prefix,
              v: t.value,
              s: e.value.style.chart.layout.labels.dataLabels.suffix,
              r: e.value.style.chart.tooltip.roundingValue
            }),
            { datapoint: t, seriesIndex: a }
          )}</b>`), e.value.style.chart.tooltip.showPercentage && (e.value.style.chart.tooltip.showValue ? l += `<span>(${Gt({
            v: t.proportion * 100,
            s: "%",
            r: e.value.style.chart.tooltip.roundingPercentage
          })})</span></div>` : l += `<b>${Gt({
            v: t.proportion * 100,
            s: "%",
            r: e.value.style.chart.tooltip.roundingPercentage
          })}</b></div>`);
        j2.value = `<div style="font-size:${e.value.style.chart.tooltip.fontSize}px">${l}</div>`;
      }
      Z.value = true;
    }
    function oe2(t) {
      return t.proportion * 100 > e.value.style.chart.layout.labels.dataLabels.hideUnderValue;
    }
    function Fe(t, s2) {
      if (!e.value.useBlurOnHover)
        return "";
      if (e.value.style.chart.tooltip.showAllItemsAtIndex && h.value.length === 0)
        return [null, void 0].includes(W2.value) || W2.value === s2 ? "" : `url(#blur_${_.value})`;
      if (!e.value.style.chart.tooltip.showAllItemsAtIndex || h.value.length)
        return [null, void 0].includes(X.value) || X.value === t.id ? "" : `url(#blur_${_.value})`;
    }
    const se2 = computed(() => C2.value.map((t, s2) => t.series.map((a, o) => ({
      name: a.name,
      color: a.color,
      value: a.value,
      shape: "circle",
      arcOf: a.arcOf,
      id: a.id,
      seriesIndex: o,
      datasetIndex: s2,
      total: t.series.filter((l) => !h.value.includes(l.id)).map((l) => l.value).reduce((l, i) => l + i, 0)
    })).map((a) => ({
      ...a,
      opacity: h.value.includes(a.id) ? 0.5 : 1,
      segregate: () => te(a),
      isSegregated: h.value.includes(a.id)
    })))), He = computed(() => ({
      cy: "nested-donuts-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), D = computed(() => {
      const t = v.value.flatMap((a) => a.series.map((o) => ({
        name: `${a.name} - ${o.name}`,
        color: o.color,
        total: a.total
      }))), s2 = v.value.flatMap((a) => a.series.map((o) => o.value));
      return { head: t, body: s2 };
    });
    function Se() {
      nextTick(() => {
        const t = D.value.head.map((o, l) => [[
          o.name
        ], [D.value.body[l]], [isNaN(D.value.body[l] / o.total) ? "-" : D.value.body[l] / o.total * 100]]), s2 = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), a = Nt(s2);
        Ot({ csvContent: a, title: e.value.style.chart.title.text || "vue-ui-nested-donuts" });
      });
    }
    const H = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ], s2 = D.value.head.map((l, i) => {
        const b = Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: D.value.body[i], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: l.color,
            name: l.name
          },
          b,
          isNaN(D.value.body[i] / l.total) ? "-" : Gt({
            v: D.value.body[i] / l.total * 100,
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
        body: s2,
        config: a
      };
    });
    function qe() {
      return C2.value;
    }
    function Ne() {
      w.value.showTable = !w.value.showTable;
    }
    function Te() {
      w.value.dataLabels.show = !w.value.dataLabels.show;
    }
    function Ie() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    return Be({
      getData: qe,
      generatePdf: me,
      generateCsv: Se,
      generateImage: _e,
      toggleTable: Ne,
      toggleLabels: Te,
      toggleTooltip: Ie
    }), (t, s2) => (openBlock(), createElementBlock("div", {
      ref_key: "nestedDonutsChart",
      ref: B,
      class: normalizeClass(`vue-ui-nested-donuts ${U.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${!e.value.style.chart.title.text && e.value.userOptions.show ? "padding-top:36px" : ""};background:${e.value.style.chart.backgroundColor}`),
      id: `nested_donuts_${_.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: ce
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ve.value}`,
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
      e.value.userOptions.show && E2.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${de.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(be),
        isImaging: unref(ge),
        uid: _.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasLabel: e.value.userOptions.buttons.labels,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: U.value,
        isTooltip: w.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: B.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Ee,
        onGeneratePdf: unref(me),
        onGenerateCsv: Se,
        onGenerateImage: unref(_e),
        onToggleTable: Ne,
        onToggleLabels: Te,
        onToggleTooltip: Ie
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      E2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": U.value, "vue-data-ui-fulscreen--off": !U.value }),
        viewBox: `0 0 ${f.value.width <= 0 ? 1e-3 : f.value.width} ${f.value.height < 0 ? 1e-3 : f.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Le.value, (a, o) => (openBlock(), createElementBlock("radialGradient", {
            id: `radial_${_.value}_${o}`
          }, [
            St,
            createBaseVNode("stop", {
              offset: `${(1 - le.value / $e.value[o]) * 100}%`,
              "stop-color": unref(cr)("#FFFFFF", 0),
              "stop-opacity": "0"
            }, null, 8, Nt2),
            createBaseVNode("stop", {
              offset: `${(1 - le.value / $e.value[o] / 2) * 100}%`,
              "stop-color": "#FFFFFF",
              "stop-opacity": e.value.style.chart.gradientIntensity / 100
            }, null, 8, Tt),
            It
          ], 8, Ft))), 256))
        ]),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${_.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 2,
              id: `blur_std_${_.value}`
            }, null, 8, Ot2),
            zt
          ], 8, Dt),
          createBaseVNode("filter", {
            id: `shadow_${_.value}`,
            "color-interpolation-filters": "sRGB"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "0",
              stdDeviation: "10",
              "flood-opacity": "0.5",
              "flood-color": e.value.style.chart.layout.donut.shadowColor
            }, null, 8, At)
          ], 8, Pt)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Y.value, (a, o) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, i) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              class: "vue-ui-donut-arc-path",
              d: l.arcSlice,
              fill: unref(cr)(l.color, 80),
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.donut.borderWidth,
              filter: Fe(l, i)
            }, null, 8, Vt)
          ]))), 256))
        ]))), 256)),
        e.value.style.chart.useGradient ? (openBlock(), createElementBlock("g", Mt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Le.value, (a, o) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              d: a.donut.arcSlice,
              fill: `url(#radial_${_.value}_${o})`,
              stroke: "transparent",
              "stroke-width": "0"
            }, null, 8, Bt)
          ]))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.layout.labels.dataLabels.showDonutName ? (openBlock(), createElementBlock("g", Ut, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Y.value, (a, o) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, i) => (openBlock(), createElementBlock("g", null, [
              i === 0 && f.value.width && f.value.height ? (openBlock(), createElementBlock("text", {
                key: 0,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                x: f.value.width / 2,
                y: l.startY - e.value.style.chart.layout.labels.dataLabels.fontSize + e.value.style.chart.layout.labels.dataLabels.donutNameOffsetY,
                "text-anchor": "middle",
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldDonutName ? "bold" : "normal",
                fill: e.value.style.chart.layout.labels.dataLabels.color
              }, toDisplayString(e.value.style.chart.layout.labels.dataLabels.donutNameAbbreviation ? unref(Yt)({ source: a.name, length: e.value.style.chart.layout.labels.dataLabels.donutNameMaxAbbreviationSize }) : a.name), 11, Rt)) : createCommentVNode("", true)
            ]))), 256))
          ]))), 256))
        ])) : createCommentVNode("", true),
        e.value.style.chart.layout.labels.dataLabels.show ? (openBlock(), createElementBlock("g", Et, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Y.value, (a, o) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, i) => (openBlock(), createElementBlock("g", {
              filter: Fe(l, i)
            }, [
              oe2(l) && w.value.dataLabels.show && e.value.style.chart.layout.labels.dataLabels.showPercentage ? (openBlock(), createElementBlock("text", {
                key: 0,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                "text-anchor": unref(z)(l, true).anchor,
                x: unref(z)(l, false, e.value.style.chart.layout.labels.dataLabels.offsetX).x || 0,
                y: unref(P)(l, e.value.style.chart.layout.labels.dataLabels.offsetY, e.value.style.chart.layout.labels.dataLabels.offsetY),
                fill: e.value.style.chart.layout.labels.dataLabels.useSerieColor ? l.color : e.value.style.chart.layout.labels.dataLabels.color,
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldPercentage ? "bold" : "normal"
              }, toDisplayString(unref(Gt)({ v: l.proportion * 100, s: "%", r: e.value.style.chart.layout.labels.dataLabels.roundingPercentage })), 11, Yt2)) : createCommentVNode("", true),
              oe2(l) && w.value.dataLabels.show && e.value.style.chart.layout.labels.dataLabels.showPercentage && e.value.style.chart.layout.labels.dataLabels.showValue ? (openBlock(), createElementBlock("text", {
                key: 1,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                "text-anchor": unref(z)(l, true).anchor,
                x: unref(z)(l, false, e.value.style.chart.layout.labels.dataLabels.offsetX).x || 0,
                y: unref(P)(l, e.value.style.chart.layout.labels.dataLabels.offsetY, e.value.style.chart.layout.labels.dataLabels.offsetY) + e.value.style.chart.layout.labels.dataLabels.fontSize,
                fill: e.value.style.chart.layout.labels.dataLabels.useSerieColor ? l.color : e.value.style.chart.layout.labels.dataLabels.color,
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldValue ? "bold" : "normal"
              }, " (" + toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.dataLabels.roundingValue
                }),
                { datapoint: l, seriesIndex: o, datapointIndex: i }
              )) + ") ", 11, Xt2)) : createCommentVNode("", true),
              oe2(l) && w.value.dataLabels.show && !e.value.style.chart.layout.labels.dataLabels.showPercentage && e.value.style.chart.layout.labels.dataLabels.showValue ? (openBlock(), createElementBlock("text", {
                key: 2,
                class: normalizeClass({ animated: e.value.useCssAnimation }),
                "text-anchor": unref(z)(l, true).anchor,
                x: unref(z)(l, false, e.value.style.chart.layout.labels.dataLabels.offsetX).x || 0,
                y: unref(P)(l, e.value.style.chart.layout.labels.dataLabels.offsetY, e.value.style.chart.layout.labels.dataLabels.offsetY),
                fill: e.value.style.chart.layout.labels.dataLabels.useSerieColor ? l.color : e.value.style.chart.layout.labels.dataLabels.color,
                "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
                "font-weight": e.value.style.chart.layout.labels.dataLabels.boldValue ? "bold" : "normal"
              }, toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.dataLabels.roundingValue
                }),
                { datapoint: l, seriesIndex: o, datapointIndex: i }
              )), 11, Wt)) : createCommentVNode("", true)
            ], 8, Gt2))), 256))
          ]))), 256))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Y.value, (a, o) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.donut, (l, i) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              "data-cy-donut-trap": "",
              d: l.arcSlice,
              fill: Re.value === o ? "rgba(0,0,0,0.1)" : "transparent",
              onMouseenter: (b) => We({
                datapoint: l,
                relativeIndex: o,
                seriesIndex: l.seriesIndex
              }),
              onClick: (b) => Ye({ datapoint: l, index: i }),
              onMouseleave: s2[0] || (s2[0] = (b) => {
                Z.value = false, Ce.value = null, X.value = null, W2.value = null;
              })
            }, null, 40, Ht2)
          ]))), 256))
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: f.value }, void 0, true)
      ], 14, Ct)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", qt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(be) || unref(ge) })), void 0, true)
      ])) : createCommentVNode("", true),
      E2.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        show: w.value.showTooltip && Z.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: B.value,
        content: j2.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ae.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ae.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      e.value.style.chart.legend.show ? (openBlock(), createElementBlock("div", {
        key: 5,
        ref_key: "chartLegend",
        ref: ee,
        class: normalizeClass({ "vue-ui-nested-donuts-legend": se2.value.length > 1 })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(se2.value, (a, o) => (openBlock(), createBlock(C, {
          key: `legend_${o}_${he.value}`,
          legendSet: a,
          config: He.value,
          onClickMarker: s2[1] || (s2[1] = ({ legend: l }) => te(l))
        }, {
          legendTitle: withCtx(({ titleSet: l }) => [
            l[0] && l[0].arcOf ? (openBlock(), createElementBlock("div", Kt2, toDisplayString(l[0].arcOf), 1)) : createCommentVNode("", true)
          ]),
          item: withCtx(({ legend: l, index: i }) => [
            createBaseVNode("div", {
              onClick: (b) => te(l),
              style: normalizeStyle(`opacity:${h.value.includes(l.id) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(l.name) + ": " + toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.legend.roundingValue
                }),
                { datapoint: l, seriesIndex: i }
              )) + " ", 1),
              h.value.includes(l.id) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(" ( - % ) ")
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(" (" + toDisplayString(isNaN(l.value / l.total) ? "-" : unref(Gt)({ v: l.value / l.total * 100, s: "%", r: e.value.style.chart.legend.roundingPercentage })) + ") ", 1)
              ], 64))
            ], 12, Jt)
          ]),
          _: 2
        }, 1032, ["legendSet", "config"]))), 128))
      ], 2)) : createCommentVNode("", true),
      e.value.style.chart.legend.show ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 6,
        ref_key: "chartLegend",
        ref: ee
      }, [
        renderSlot(t.$slots, "legend", { legend: se2.value }, void 0, true)
      ], 512)),
      E2.value ? (openBlock(), createBlock(R, {
        key: 7,
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
          (openBlock(), createBlock(W, {
            key: `table_${fe.value}`,
            colNames: H.value.colNames,
            head: H.value.head,
            body: H.value.body,
            config: H.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: s2[2] || (s2[2] = (a) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createBaseVNode("div", {
                innerHTML: a,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Qt2)
            ]),
            td: withCtx(({ td: a }) => [
              createTextVNode(toDisplayString(a.name || a), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Lt2));
  }
};
var vl = s(Zt, [["__scopeId", "data-v-e05474aa"]]);
export {
  vl as default
};
//# sourceMappingURL=vue-ui-nested-donuts-CiE4DdEQ-3BLNWZLU.js.map
