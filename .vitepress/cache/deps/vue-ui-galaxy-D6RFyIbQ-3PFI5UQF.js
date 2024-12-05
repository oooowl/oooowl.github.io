import {
  C
} from "./chunk-ZYATGC4V.js";
import {
  E
} from "./chunk-K5CEUZ2P.js";
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
  Kt,
  Nt,
  Q,
  Qt,
  R as R2,
  Vt,
  Xt,
  Zt,
  ir,
  jt,
  qt,
  rt,
  te,
  tr,
  ur
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
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-galaxy-D6RFyIbQ.js
var tt = ["id"];
var lt = {
  key: 1,
  ref: "noTitle",
  class: "vue-data-ui-no-title-space",
  style: "height:36px; width: 100%;background:transparent"
};
var at = {
  key: 2,
  style: "width:100%;background:transparent;padding-bottom:24px"
};
var ot = ["xmlns", "viewBox"];
var st = ["id"];
var rt2 = ["stdDeviation"];
var ut = ["d", "stroke", "stroke-width"];
var nt = ["d", "stroke", "stroke-width"];
var it = ["filter"];
var ct = ["d", "stroke", "stroke-width"];
var vt = ["d", "stroke-width", "onMouseenter", "onClick"];
var dt = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var ht = ["onClick"];
var pt = { key: 0 };
var yt = { key: 1 };
var ft = {
  key: 8,
  ref: "source",
  dir: "auto"
};
var gt = ["innerHTML"];
var bt = {
  __name: "vue-ui-galaxy",
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
  setup(fe, { expose: ge, emit: U }) {
    const y = fe, { vue_ui_galaxy: be } = te(), L = computed(() => !!y.dataset && y.dataset.length);
    onMounted(() => {
      X();
    });
    function X() {
      jt(y.dataset) ? qt({
        componentName: "VueUiGalaxy",
        type: "dataset"
      }) : y.dataset.forEach((t, a) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "values"]
        }).forEach((l) => {
          qt({
            componentName: "VueUiGalaxy",
            type: "datasetSerieAttribute",
            property: l,
            index: a
          });
        });
      });
    }
    const _ = ref(Dt()), O = ref(null), me = ref(null), V = ref(false), B = ref(""), f = ref(null), R3 = ref(0), Y = ref(0), j = ref(0), q = ref(0), e = computed({
      get: () => J(),
      set: (t) => t
    });
    function J() {
      const t = c({
        userConfig: y.config,
        defaultConfig: be
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_galaxy[t.theme] || y.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => y.config, (t) => {
      e.value = J(), X(), Y.value += 1, j.value += 1, q.value += 1;
    }, { deep: true });
    const { isPrinting: K, isImaging: Q2, generatePdf: Z, generateImage: ee } = re({
      elementId: `galaxy_${_.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-galaxy"
    }), ke = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), Ce = computed(() => tr(e.value.customPalette)), b = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), G = ref({
      height: 180,
      // or 250 if non fibo
      width: 250
    }), h = ref([]);
    function M(t) {
      h.value.includes(t.id) ? h.value = h.value.filter((a) => a !== t.id) : h.value.push(t.id), U("selectLegend", T.value.map((a) => ({
        name: a.name,
        color: a.color,
        value: a.value
      })));
    }
    const C2 = computed(() => y.dataset.map((t, a) => ({
      name: t.name,
      color: Q(t.color) || Ce.value[a] || rt[a] || rt[a % rt.length],
      value: t.values ? ur(t.values).reduce((l, s2) => l + s2, 0) : 0,
      absoluteValues: ur(t.values),
      id: Dt(),
      seriesIndex: a
    })).sort((t, a) => a.value - t.value));
    function we() {
      return C2.value.map((t) => ({
        name: t.name,
        color: t.color,
        value: t.value
      }));
    }
    const g = computed(() => C2.value.filter((t) => !h.value.includes(t.id)).map((t) => t.value).reduce((t, a) => t + a, 0)), $e = ref(190), te2 = computed(() => C2.value.filter((t) => !h.value.includes(t.id))), T = computed(() => {
      const t = [];
      for (let a = 0; a < te2.value.length; a += 1) {
        const l = te2.value[a];
        let s2 = l.value / g.value * $e.value;
        a > 0 && t.length && (s2 += t[a - 1].points), t.push({
          points: s2,
          ...l,
          seriesIndex: a,
          proportion: l.value / g.value,
          path: Qt({
            points: s2,
            startX: 115 + e.value.style.chart.layout.arcs.offsetX,
            startY: 90 + e.value.style.chart.layout.arcs.offsetY
          })
        });
      }
      return t.filter((a, l) => !h.value.includes(a.id)).toSorted((a, l) => l.points - a.points);
    }), P = ref(false);
    function xe(t) {
      P.value = t, R3.value += 1;
    }
    const z = ref(null);
    function _e({ datapoint: t, _relativeIndex: a, seriesIndex: l, show: s2 = false }) {
      z.value = {
        datapoint: t,
        seriesIndex: l,
        series: C2.value,
        config: e.value
      }, V.value = s2, f.value = t.id;
      let r = "";
      const w = e.value.style.chart.tooltip.customFormat;
      Xt(w) && Kt(() => w({
        seriesIndex: l,
        datapoint: t,
        series: C2.value,
        config: e.value
      })) ? B.value = w({
        seriesIndex: l,
        datapoint: t,
        series: C2.value,
        config: e.value
      }) : (r += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`, r += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`, e.value.style.chart.tooltip.showValue && (r += `<b>${ir(
        e.value.style.chart.layout.labels.dataLabels.formatter,
        t.value,
        Ht({
          p: e.value.style.chart.layout.labels.dataLabels.prefix,
          v: t.value,
          s: e.value.style.chart.layout.labels.dataLabels.suffix,
          r: e.value.style.chart.tooltip.roundingValue
        }),
        { datapoint: t, seriesIndex: l }
      )}</b>`), e.value.style.chart.tooltip.showPercentage && (e.value.style.chart.tooltip.showValue ? r += `<span>(${Ht({
        v: t.proportion * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })})</span></div>` : r += `<b>${Ht({
        v: t.proportion * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })}</b></div>`), B.value = `<div>${r}</div>`);
    }
    const le = computed(() => C2.value.map((t, a) => ({
      ...t,
      proportion: (t.value || 0) / y.dataset.map((l) => (l.values || []).reduce((s2, r) => s2 + r, 0)).reduce((l, s2) => l + s2, 0),
      opacity: h.value.includes(t.id) ? 0.5 : 1,
      shape: t.shape || "circle",
      segregate: () => M(t),
      isSegregated: h.value.includes(t.id)
    }))), Te = computed(() => ({
      cy: "galaxy-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), m = computed(() => {
      const t = T.value.map((l) => ({
        name: l.name,
        color: l.color
      })), a = T.value.map((l) => l.value);
      return { head: t, body: a };
    });
    function ae2() {
      nextTick(() => {
        const t = m.value.head.map((s2, r) => [[
          s2.name
        ], [m.value.body[r]], [isNaN(m.value.body[r] / g.value) ? "-" : m.value.body[r] / g.value * 100]]), a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), l = Vt(a);
        Nt({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-galaxy" });
      });
    }
    const I = computed(() => {
      const t = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: g.value, s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        "100%"
      ], a = m.value.head.map((r, w) => {
        const Pe = Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: m.value.body[w], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: r.color,
            name: r.name
          },
          Pe,
          isNaN(m.value.body[w] / g.value) ? "-" : Ht({
            v: m.value.body[w] / g.value * 100,
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
          e.value.table.columnNames.value,
          e.value.table.columnNames.percentage
        ],
        head: t,
        body: a,
        config: l
      };
    });
    function oe() {
      b.value.showTable = !b.value.showTable;
    }
    function se() {
      b.value.showTooltip = !b.value.showTooltip;
    }
    const A = ref(false);
    function W2() {
      A.value = !A.value;
    }
    return ge({
      getData: we,
      generatePdf: Z,
      generateCsv: ae2,
      generateImage: ee,
      toggleTable: oe,
      toggleTooltip: se,
      toggleAnnotator: W2
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "galaxyChart",
      ref: O,
      class: normalizeClass(`vue-ui-galaxy ${P.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: `galaxy_${_.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: O.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: A.value,
        onClose: W2
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      ke.value ? (openBlock(), createElementBlock("div", lt, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", at, [
        (openBlock(), createBlock(x, {
          key: `title_${Y.value}`,
          config: {
            title: {
              cy: "galaxy-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "galaxy-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && L.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: me,
        key: `user_option_${R3.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(K),
        isImaging: unref(Q2),
        uid: _.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: b.value.showTooltip,
        isFullscreen: P.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: O.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: A.value,
        onToggleFullscreen: xe,
        onGeneratePdf: unref(Z),
        onGenerateCsv: ae2,
        onGenerateImage: unref(ee),
        onToggleTable: oe,
        onToggleTooltip: se,
        onToggleAnnotator: W2
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
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: s2 }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: s2 })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: l, isAnnotator: s2 }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: l, isAnnotator: s2 })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      L.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": P.value, "vue-data-ui-fulscreen--off": !P.value }),
        viewBox: `0 0 ${G.value.width} ${G.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
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
              stdDeviation: 100 / e.value.style.chart.layout.arcs.gradient.intensity
            }, null, 8, rt2)
          ], 8, st)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (l) => (openBlock(), createElementBlock("g", null, [
          l.value ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: l.path,
            fill: "none",
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": (e.value.style.chart.layout.arcs.strokeWidth + e.value.style.chart.layout.arcs.borderWidth) * (f.value === l.id && e.value.style.chart.layout.arcs.hoverEffect.show ? e.value.style.chart.layout.arcs.hoverEffect.multiplicator : 1),
            "stroke-linecap": "round"
          }, null, 8, ut)) : createCommentVNode("", true),
          l.value ? (openBlock(), createElementBlock("path", {
            key: 1,
            d: l.path,
            fill: "none",
            stroke: l.color,
            "stroke-width": e.value.style.chart.layout.arcs.strokeWidth * (f.value === l.id && e.value.style.chart.layout.arcs.hoverEffect.show ? e.value.style.chart.layout.arcs.hoverEffect.multiplicator : 1),
            "stroke-linecap": "round",
            class: normalizeClass(`${f.value && f.value !== l.id && e.value.useBlurOnHover ? "vue-ui-galaxy-blur" : ""}`)
          }, null, 10, nt)) : createCommentVNode("", true),
          l.value && e.value.style.chart.layout.arcs.gradient.show ? (openBlock(), createElementBlock("g", {
            key: 2,
            filter: `url(#blur_${_.value})`
          }, [
            createBaseVNode("path", {
              d: l.path,
              fill: "none",
              stroke: e.value.style.chart.layout.arcs.gradient.color,
              "stroke-width": e.value.style.chart.layout.arcs.strokeWidth / 2 * (f.value === l.id && e.value.style.chart.layout.arcs.hoverEffect.show ? e.value.style.chart.layout.arcs.hoverEffect.multiplicator : 1),
              "stroke-linecap": "round",
              class: normalizeClass(`vue-ui-galaxy-gradient ${f.value && f.value !== l.id && e.value.useBlurOnHover ? "vue-ui-galaxy-blur" : ""}`)
            }, null, 10, ct)
          ], 8, it)) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (l, s2) => (openBlock(), createElementBlock("g", null, [
          l.value ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: l.path,
            fill: "none",
            stroke: "transparent",
            "stroke-width": e.value.style.chart.layout.arcs.strokeWidth + e.value.style.chart.layout.arcs.borderWidth,
            "stroke-linecap": "round",
            onMouseenter: (r) => _e({
              datapoint: l,
              relativeIndex: s2,
              seriesIndex: l.seriesIndex,
              show: true
            }),
            onMouseleave: a[0] || (a[0] = (r) => {
              V.value = false, f.value = null;
            }),
            onClick: (r) => U("selectDatapoint", l)
          }, null, 40, vt)) : createCommentVNode("", true)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: G.value }, void 0, true)
      ], 14, ot)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", dt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(K) || unref(Q2) })), void 0, true)
      ])) : createCommentVNode("", true),
      L.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "galaxy",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            galaxy: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
        key: `legend_${q.value}`,
        legendSet: le.value,
        config: Te.value,
        onClickMarker: a[1] || (a[1] = ({ legend: l }) => M(l))
      }, {
        item: withCtx(({ legend: l, index: s2 }) => [
          createBaseVNode("div", {
            onClick: (r) => M(l),
            style: normalizeStyle(`opacity:${h.value.includes(l.id) ? 0.5 : 1}`)
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
              { datapoint: l, seriesIndex: s2 }
            )) + " ", 1),
            h.value.includes(l.id) ? (openBlock(), createElementBlock("span", yt, " ( - % ) ")) : (openBlock(), createElementBlock("span", pt, " (" + toDisplayString(isNaN(l.value / g.value) ? "-" : unref(Ht)({
              v: l.value / g.value * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })) + ") ", 1))
          ], 12, ht)
        ]),
        _: 1
      }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
      renderSlot(t.$slots, "legend", { legend: le.value }, void 0, true),
      t.$slots.source ? (openBlock(), createElementBlock("div", ft, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: b.value.showTooltip && V.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: O.value,
        content: B.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...z.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...z.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      L.value ? (openBlock(), createBlock(R, {
        key: 9,
        hideDetails: "",
        config: {
          open: b.value.showTable,
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
            key: `table_${j.value}`,
            colNames: I.value.colNames,
            head: I.value.head,
            body: I.value.body,
            config: I.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (l) => b.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, gt)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, tt));
  }
};
var It = s(bt, [["__scopeId", "data-v-9e3163ed"]]);
export {
  It as default
};
//# sourceMappingURL=vue-ui-galaxy-D6RFyIbQ-3PFI5UQF.js.map
