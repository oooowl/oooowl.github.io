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
  Qt,
  R as R2,
  Xt,
  cr,
  et,
  ir,
  j,
  k,
  nr,
  oe,
  or,
  pt,
  qt
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
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-rings-BgRc1o4_.js
var it = ["id"];
var vt = ["xmlns", "viewBox"];
var ct = ["id"];
var dt = ["stop-color"];
var pt2 = ["stop-color"];
var ht = ["stroke", "cx", "cy", "r", "fill"];
var gt = ["stroke", "stroke-width", "cx", "cy", "r", "fill"];
var ft = ["cx", "cy", "r", "onMouseenter"];
var yt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var mt = ["onClick"];
var bt = { key: 0 };
var kt = { key: 1 };
var Ct = ["innerHTML"];
var wt = {
  __name: "vue-ui-rings",
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
  setup(ke, { expose: Ce, emit: we }) {
    const g = ke, { vue_ui_rings: $e } = oe(), P = ref(false), M2 = computed(() => !!g.dataset && g.dataset.length), L = ref(Lt()), Te = ref(null), z = ref(false), E2 = ref(""), $ = ref(null), Y = ref(0), S = ref(null), q = ref(null), J = ref(null), K = ref(0), Q = ref(0), Z = ref(0), e = computed({
      get: () => ee(),
      set: (t) => t
    });
    function ee() {
      const t = c({
        userConfig: g.config,
        defaultConfig: $e
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_rings[t.theme] || g.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => g.config, (t) => {
      e.value = ee(), te(), K.value += 1, Q.value += 1, Z.value += 1;
    }, { deep: true });
    const A = ref(null);
    onMounted(() => {
      te();
    });
    function te() {
      if (Xt(g.dataset) ? Kt({
        componentName: "VueUiRings",
        type: "dataset"
      }) : g.dataset.forEach((t, a) => {
        t.values.length || Kt({
          componentName: "VueUiRings",
          type: "dataset"
        }), qt({
          datasetObject: t,
          requiredAttributes: ["name", "values"]
        }).forEach((l) => {
          Kt({
            componentName: "VueUiRings",
            type: "datasetSerieAttribute",
            property: l,
            index: a
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: a, height: l } = M({
            chart: S.value,
            title: e.value.style.chart.title.text ? q.value : null,
            legend: e.value.style.chart.legend.show ? J.value : null
          });
          r.value.width = a, r.value.height = l;
        });
        A.value = new ResizeObserver(t), A.value.observe(S.value.parentNode);
      }
      setTimeout(() => {
        P.value = true;
      }, 600);
    }
    onBeforeUnmount(() => {
      A.value && A.value.disconnect();
    });
    const { isPrinting: le, isImaging: ae, generatePdf: oe2, generateImage: se2 } = se({
      elementId: `rings_${L.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-rings"
    }), ue = computed(() => or(e.value.customPalette)), C2 = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), r = ref({
      height: 360,
      width: 360
    }), _e = computed(() => Math.min(r.value.height, r.value.width)), v = ref([]);
    function G(t) {
      v.value.includes(t) ? v.value = v.value.filter((a) => a !== t) : v.value.push(t), we("selectLegend", c2.value.map((a) => ({
        name: a.name,
        color: a.color,
        value: a.value
      })));
    }
    const xe = computed(() => Math.max(
      ...R3.value.filter((t) => !v.value.includes(t.uid)).map(({ value: t }) => t)
    ));
    function re(t) {
      return t / xe.value;
    }
    const R3 = computed(() => g.dataset.map(({ values: t, name: a, color: l = null }, o) => {
      const s2 = ir(t).reduce((b, F) => b + F, 0);
      return {
        name: a,
        color: l || j(l) || ue.value[o] || et[o] || et[o % et.length],
        value: s2,
        proportion: s2 / g.dataset.map((b) => (b.values || []).reduce((F, Ie) => F + Ie, 0)).reduce((b, F) => b + F, 0),
        uid: Lt()
      };
    })), ne = computed(() => R3.value.map((t) => ({
      ...t,
      shape: "circle",
      opacity: v.value.includes(t.uid) ? 0.5 : 1,
      segregate: () => G(t.uid),
      isSegregated: v.value.includes(t.uid)
    })).toSorted((t, a) => a.value - t.value)), Ne = computed(() => ({
      cy: "rings-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), y = computed(() => R3.value.filter((t) => !v.value.includes(t.uid)).map(({ value: t }) => t).reduce((t, a) => t + a, 0)), c2 = computed(() => R3.value.filter((t) => !v.value.includes(t.uid)).map(({ name: t, value: a, color: l = null, uid: o }, s2) => ({
      uid: o,
      name: t,
      color: l || j(l) || ue.value[s2] || et[s2] || et[s2 % et.length],
      value: a,
      proportion: re(a),
      percentage: a / y.value * 100,
      strokeWidth: e.value.style.chart.layout.rings.strokeWidth * re(a)
    })).toSorted((t, a) => a.value - t.value));
    function Pe() {
      return c2.value.map(
        ({ name: t, color: a, value: l, absoluteValues: o, percentage: s2 }) => ({
          name: t,
          color: a,
          value: l,
          absoluteValues: o,
          percentage: s2
        })
      );
    }
    const p2 = computed(() => _e.value - e.value.style.chart.layout.rings.strokeWidth * 2), H = ref(null);
    function Le(t, a) {
      if (v.value.length === g.dataset.length) return;
      H.value = {
        datapoint: a,
        seriesIndex: t,
        series: c2.value,
        config: e.value
      }, $.value = t;
      const l = c2.value[t], o = e.value.style.chart.tooltip.customFormat;
      if (Ht(o) && $t(() => o({
        seriesIndex: t,
        datapoint: a,
        series: c2.value,
        config: e.value
      })))
        E2.value = o({
          seriesIndex: t,
          datapoint: a,
          series: c2.value,
          config: e.value
        });
      else {
        let s2 = "";
        s2 += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${l.name}</div>`, s2 += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${l.color}" /></svg>`, e.value.style.chart.tooltip.showValue && (s2 += `<b>${nr(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          l.value,
          Gt({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: l.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: a, seriesIndex: t }
        )}
      </b>`), e.value.style.chart.tooltip.showPercentage && (e.value.style.chart.tooltip.showValue ? s2 += `<span>(${Gt({
          v: l.value / y.value * 100,
          s: "%",
          r: e.value.style.chart.tooltip.roundingPercentage
        })})</span></div>` : s2 += `<b>${Gt({
          v: l.value / y.value * 100,
          s: "%",
          r: e.value.style.chart.tooltip.roundingPercentage
        })}</b></div>`), E2.value = s2;
      }
      z.value = true;
    }
    const w = computed(() => {
      const t = c2.value.map((l) => ({
        name: l.name,
        color: l.color
      })), a = c2.value.map((l) => l.value);
      return { head: t, body: a };
    }), V = computed(() => {
      const t = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: y.value, s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        "100%"
      ], a = w.value.head.map((s2, b) => [
        {
          color: s2.color,
          name: s2.name
        },
        Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: w.value.body[b], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        isNaN(w.value.body[b] / y.value) ? "-" : (w.value.body[b] / y.value * 100).toFixed(e.value.table.td.roundingPercentage) + "%"
      ]), l = {
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
      }, o = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ];
      return {
        head: t,
        body: a,
        config: l,
        colNames: o
      };
    });
    function ie2() {
      nextTick(() => {
        const t = w.value.head.map((o, s2) => [[
          o.name
        ], [w.value.body[s2]], [isNaN(w.value.body[s2] / y.value) ? "-" : w.value.body[s2] / y.value * 100]]), a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), l = Nt(a);
        Ot({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-rings" });
      });
    }
    const I = ref(false);
    function Se(t) {
      I.value = t, Y.value += 1;
    }
    function ve() {
      C2.value.showTable = !C2.value.showTable;
    }
    function ce() {
      C2.value.showTooltip = !C2.value.showTooltip;
    }
    return Ce({
      getData: Pe,
      generatePdf: oe2,
      generateCsv: ie2,
      generateImage: se2,
      toggleTable: ve,
      toggleTooltip: ce
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "ringsChart",
      ref: S,
      class: normalizeClass(`vue-ui-rings ${I.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};text-align:center;width:100%;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`),
      id: `rings_${L.value}`,
      onMouseleave: a[3] || (a[3] = (l) => {
        $.value = null, z.value = false;
      })
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: q,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${K.value}`,
          config: {
            title: {
              cy: "rings-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "rings-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && M2.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: Te,
        key: `user_options_${Y.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(le),
        isImaging: unref(ae),
        uid: L.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: C2.value.showTooltip,
        isFullscreen: I.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: S.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Se,
        onGeneratePdf: unref(oe2),
        onGenerateCsv: ie2,
        onGenerateImage: unref(se2),
        onToggleTable: ve,
        onToggleTooltip: ce
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
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: o })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      M2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": I.value, "vue-data-ui-fulscreen--off": !I.value }),
        viewBox: `0 0 ${r.value.width <= 0 ? 10 : r.value.width} ${r.value.height <= 0 ? 10 : r.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, (l, o) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "30%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `gradient_${L.value}_${o}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(pt)(l.color, 0.05), 100 - e.value.style.chart.layout.rings.gradient.intensity)
            }, null, 8, dt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, pt2)
          ], 8, ct))), 256))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, (l, o) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("circle", {
            class: normalizeClass({
              "vue-ui-rings-item": P.value && e.value.useCssAnimation,
              "vue-rings-item-onload": !P.value && e.value.useCssAnimation,
              "vue-ui-rings-opacity": $.value !== null && $.value !== o
            }),
            style: normalizeStyle(`animation-delay:${o * 100}ms`),
            stroke: e.value.style.chart.layout.rings.stroke,
            cx: r.value.width / 2,
            cy: o === 0 ? r.value.height / 2 : r.value.height / 2 + p2.value * c2.value[0].proportion / 2 - p2.value * l.proportion / 2 - 2 * (o + 1),
            r: unref(k)(p2.value * l.proportion / 2 * 0.9 <= 0 ? 1e-4 : p2.value * l.proportion / 2 * 0.9),
            fill: e.value.style.chart.layout.rings.gradient.underlayerColor
          }, null, 14, ht),
          createBaseVNode("circle", {
            class: normalizeClass({
              "vue-ui-rings-item": P.value && e.value.useCssAnimation,
              "vue-rings-item-onload": !P.value && e.value.useCssAnimation,
              "vue-ui-rings-shadow": e.value.style.chart.layout.rings.useShadow,
              "vue-ui-rings-blur": $.value !== null && $.value !== o
            }),
            style: normalizeStyle(`animation-delay:${o * 100}ms`),
            stroke: e.value.style.chart.layout.rings.stroke,
            "stroke-width": l.strokeWidth < 0.5 ? 0.5 : l.strokeWidth,
            cx: r.value.width / 2,
            cy: o === 0 ? r.value.height / 2 : r.value.height / 2 + p2.value * c2.value[0].proportion / 2 - p2.value * l.proportion / 2 - 2 * (o + 1),
            r: unref(k)(p2.value * l.proportion / 2 * 0.9 <= 0 ? 1e-4 : p2.value * l.proportion / 2 * 0.9),
            fill: e.value.style.chart.layout.rings.gradient.show ? `url(#gradient_${L.value}_${o})` : l.color
          }, null, 14, gt),
          createBaseVNode("circle", {
            "data-cy-trap": "",
            stroke: "none",
            cx: r.value.width / 2,
            cy: o === 0 ? r.value.height / 2 : r.value.height / 2 + p2.value * c2.value[0].proportion / 2 - p2.value * l.proportion / 2 - 2 * (o + 1),
            r: unref(k)(p2.value * l.proportion / 2 * 0.9 <= 0 ? 1e-4 : p2.value * l.proportion / 2 * 0.9),
            fill: "transparent",
            onMouseenter: (s2) => Le(o, l),
            onMouseleave: a[0] || (a[0] = (s2) => {
              $.value = null, z.value = false;
            })
          }, null, 40, ft)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: r.value }, void 0, true)
      ], 14, vt)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", yt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(le) || unref(ae) })), void 0, true)
      ])) : createCommentVNode("", true),
      M2.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "rings",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            rings: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: J
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${Z.value}`,
          legendSet: ne.value,
          config: Ne.value,
          onClickMarker: a[1] || (a[1] = ({ legend: l }) => G(l.uid))
        }, {
          item: withCtx(({ legend: l, index: o }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (s2) => G(l.uid),
              style: normalizeStyle(`opacity:${v.value.includes(l.uid) ? 0.5 : 1}`)
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
                { datapoint: l, seriesIndex: o }
              )) + " ", 1),
              v.value.includes(l.uid) ? (openBlock(), createElementBlock("span", kt, " ( - % ) ")) : (openBlock(), createElementBlock("span", bt, " (" + toDisplayString(isNaN(l.value / y.value) ? "-" : unref(Gt)({
                v: l.value / y.value * 100,
                s: "%",
                r: e.value.style.chart.legend.roundingPercentage
              })) + ") ", 1))
            ], 12, mt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: ne.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: C2.value.showTooltip && z.value && v.value.length < g.dataset.length,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: S.value,
        content: E2.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...H.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...H.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      M2.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: C2.value.showTable,
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
            key: `table_${Q.value}`,
            colNames: V.value.colNames,
            head: V.value.head,
            body: V.value.body,
            config: V.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (l) => C2.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Ct)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 46, it));
  }
};
var At = s(wt, [["__scopeId", "data-v-08656179"]]);
export {
  At as default
};
//# sourceMappingURL=vue-ui-rings-BgRc1o4_-6DAT4X3T.js.map
