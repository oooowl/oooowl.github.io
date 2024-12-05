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
  Kt,
  Nt,
  Q,
  R as R2,
  Vt,
  Xt,
  Zt,
  dr,
  ir,
  jt,
  k as k2,
  qt,
  rt,
  te,
  tr,
  ur,
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
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-rings-qLQ-gl21.js
var gt = ["id"];
var ft = ["xmlns", "viewBox"];
var yt2 = ["id"];
var mt = ["stop-color"];
var bt = ["stop-color"];
var kt = ["stroke", "cx", "cy", "r", "fill"];
var Ct = ["stroke", "stroke-width", "cx", "cy", "r", "fill"];
var wt = ["cx", "cy", "r", "onMouseenter"];
var $t = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Tt = ["onClick"];
var _t = { key: 0 };
var xt = { key: 1 };
var Nt2 = ["innerHTML"];
var Pt = {
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
  setup(Te, { expose: _e, emit: xe }) {
    const y = Te, { vue_ui_rings: Ne } = te(), L = ref(false), z = computed(() => !!y.dataset && y.dataset.length), S = ref(Dt()), Pe = ref(null), R3 = ref(false), G = ref(""), T = ref(null), J = ref(0), P = ref(null), K = ref(null), Q2 = ref(null), Z = ref(null), ee = ref(null), te2 = ref(0), le = ref(0), oe = ref(0), e = computed({
      get: () => ae2(),
      set: (t) => t
    });
    function ae2() {
      const t = c({
        userConfig: y.config,
        defaultConfig: Ne
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_rings[t.theme] || y.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => y.config, (t) => {
      e.value = ae2(), se(), te2.value += 1, le.value += 1, oe.value += 1;
    }, { deep: true });
    const V = ref(null);
    onMounted(() => {
      se();
    });
    function se() {
      if (jt(y.dataset) ? qt({
        componentName: "VueUiRings",
        type: "dataset"
      }) : y.dataset.forEach((t, o) => {
        t.values.length || qt({
          componentName: "VueUiRings",
          type: "dataset"
        }), Zt({
          datasetObject: t,
          requiredAttributes: ["name", "values"]
        }).forEach((l) => {
          qt({
            componentName: "VueUiRings",
            type: "datasetSerieAttribute",
            property: l,
            index: o
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: o, height: l } = k({
            chart: P.value,
            title: e.value.style.chart.title.text ? K.value : null,
            legend: e.value.style.chart.legend.show ? Q2.value : null,
            source: Z.value,
            noTitle: ee.value
          });
          u.value.width = o, u.value.height = l;
        });
        V.value = new ResizeObserver(t), V.value.observe(P.value.parentNode);
      }
      setTimeout(() => {
        L.value = true;
      }, 600);
    }
    onBeforeUnmount(() => {
      V.value && V.value.disconnect();
    });
    const { isPrinting: ne, isImaging: re2, generatePdf: ue, generateImage: ie } = re({
      elementId: `rings_${S.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-rings"
    }), Le = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), ve = computed(() => tr(e.value.customPalette)), w = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), u = ref({
      height: 360,
      width: 360
    }), Se2 = computed(() => Math.min(u.value.height, u.value.width)), c2 = ref([]);
    function H(t) {
      c2.value.includes(t) ? c2.value = c2.value.filter((o) => o !== t) : c2.value.push(t), xe("selectLegend", d.value.map((o) => ({
        name: o.name,
        color: o.color,
        value: o.value
      })));
    }
    const Ae = computed(() => Math.max(
      ...B.value.filter((t) => !c2.value.includes(t.uid)).map(({ value: t }) => t)
    ));
    function ce(t) {
      return t / Ae.value;
    }
    const B = computed(() => y.dataset.map(({ values: t, name: o, color: l = null }, a) => {
      const s2 = ur(t).reduce((b, O2) => b + O2, 0);
      return {
        name: o,
        color: l || Q(l) || ve.value[a] || rt[a] || rt[a % rt.length],
        value: s2,
        proportion: s2 / y.dataset.map((b) => (b.values || []).reduce((O2, ze) => O2 + ze, 0)).reduce((b, O2) => b + O2, 0),
        uid: Dt()
      };
    })), de = computed(() => B.value.map((t) => ({
      ...t,
      shape: "circle",
      opacity: c2.value.includes(t.uid) ? 0.5 : 1,
      segregate: () => H(t.uid),
      isSegregated: c2.value.includes(t.uid)
    })).toSorted((t, o) => o.value - t.value)), Oe = computed(() => ({
      cy: "rings-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), m = computed(() => B.value.filter((t) => !c2.value.includes(t.uid)).map(({ value: t }) => t).reduce((t, o) => t + o, 0)), d = computed(() => B.value.filter((t) => !c2.value.includes(t.uid)).map(({ name: t, value: o, color: l = null, uid: a }, s2) => ({
      uid: a,
      name: t,
      color: l || Q(l) || ve.value[s2] || rt[s2] || rt[s2 % rt.length],
      value: o,
      proportion: ce(o),
      percentage: o / m.value * 100,
      strokeWidth: e.value.style.chart.layout.rings.strokeWidth * ce(o)
    })).toSorted((t, o) => o.value - t.value));
    function Ie() {
      return d.value.map(
        ({ name: t, color: o, value: l, absoluteValues: a, percentage: s2 }) => ({
          name: t,
          color: o,
          value: l,
          absoluteValues: a,
          percentage: s2
        })
      );
    }
    const g = computed(() => Se2.value - e.value.style.chart.layout.rings.strokeWidth * 2), X = ref(null);
    function Fe(t, o) {
      if (c2.value.length === y.dataset.length) return;
      X.value = {
        datapoint: o,
        seriesIndex: t,
        series: d.value,
        config: e.value
      }, T.value = t;
      const l = d.value[t], a = e.value.style.chart.tooltip.customFormat;
      if (Xt(a) && Kt(() => a({
        seriesIndex: t,
        datapoint: o,
        series: d.value,
        config: e.value
      })))
        G.value = a({
          seriesIndex: t,
          datapoint: o,
          series: d.value,
          config: e.value
        });
      else {
        let s2 = "";
        s2 += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${l.name}</div>`, s2 += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${l.color}" /></svg>`, e.value.style.chart.tooltip.showValue && (s2 += `<b>${ir(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          l.value,
          Ht({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: l.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: o, seriesIndex: t }
        )}
      </b>`), e.value.style.chart.tooltip.showPercentage && (e.value.style.chart.tooltip.showValue ? s2 += `<span>(${Ht({
          v: l.value / m.value * 100,
          s: "%",
          r: e.value.style.chart.tooltip.roundingPercentage
        })})</span></div>` : s2 += `<b>${Ht({
          v: l.value / m.value * 100,
          s: "%",
          r: e.value.style.chart.tooltip.roundingPercentage
        })}</b></div>`), G.value = s2;
      }
      R3.value = true;
    }
    const $ = computed(() => {
      const t = d.value.map((l) => ({
        name: l.name,
        color: l.color
      })), o = d.value.map((l) => l.value);
      return { head: t, body: o };
    }), D = computed(() => {
      const t = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: m.value, s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        "100%"
      ], o = $.value.head.map((s2, b) => [
        {
          color: s2.color,
          name: s2.name
        },
        Ht({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: $.value.body[b], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        isNaN($.value.body[b] / m.value) ? "-" : ($.value.body[b] / m.value * 100).toFixed(e.value.table.td.roundingPercentage) + "%"
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
      }, a = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ];
      return {
        head: t,
        body: o,
        config: l,
        colNames: a
      };
    });
    function pe() {
      nextTick(() => {
        const t = $.value.head.map((a, s2) => [[
          a.name
        ], [$.value.body[s2]], [isNaN($.value.body[s2] / m.value) ? "-" : $.value.body[s2] / m.value * 100]]), o = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), l = Vt(o);
        Nt({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-rings" });
      });
    }
    const A = ref(false);
    function Me(t) {
      A.value = t, J.value += 1;
    }
    function he() {
      w.value.showTable = !w.value.showTable;
    }
    function ge() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    const U = ref(false);
    function j() {
      U.value = !U.value;
    }
    return _e({
      getData: Ie,
      generatePdf: ue,
      generateCsv: pe,
      generateImage: ie,
      toggleTable: he,
      toggleTooltip: ge,
      toggleAnnotator: j
    }), (t, o) => (openBlock(), createElementBlock("div", {
      ref_key: "ringsChart",
      ref: P,
      class: normalizeClass(`vue-ui-rings ${A.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};text-align:center;width:100%;background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`),
      id: `rings_${S.value}`,
      onMouseleave: o[3] || (o[3] = (l) => {
        T.value = null, R3.value = false;
      })
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: P.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: U.value,
        onClose: j
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Le.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: ee,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: K,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${te2.value}`,
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
      e.value.userOptions.show && z.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Pe,
        key: `user_options_${J.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ne),
        isImaging: unref(re2),
        uid: S.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: w.value.showTooltip,
        isFullscreen: A.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: P.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: U.value,
        onToggleFullscreen: Me,
        onGeneratePdf: unref(ue),
        onGenerateCsv: pe,
        onGenerateImage: unref(ie),
        onToggleTable: he,
        onToggleTooltip: ge,
        onToggleAnnotator: j
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
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: a }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: a })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: l, isAnnotator: a }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: l, isAnnotator: a })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      z.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": A.value, "vue-data-ui-fulscreen--off": !A.value }),
        viewBox: `0 0 ${u.value.width <= 0 ? 10 : u.value.width} ${u.value.height <= 0 ? 10 : u.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (l, a) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "30%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `gradient_${S.value}_${a}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(l.color, 0.05), 100 - e.value.style.chart.layout.rings.gradient.intensity)
            }, null, 8, mt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, bt)
          ], 8, yt2))), 256))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (l, a) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("circle", {
            class: normalizeClass({
              "vue-ui-rings-item": L.value && e.value.useCssAnimation,
              "vue-rings-item-onload": !L.value && e.value.useCssAnimation,
              "vue-ui-rings-opacity": T.value !== null && T.value !== a
            }),
            style: normalizeStyle(`animation-delay:${a * 100}ms`),
            stroke: e.value.style.chart.layout.rings.stroke,
            cx: u.value.width / 2,
            cy: a === 0 ? u.value.height / 2 : u.value.height / 2 + g.value * d.value[0].proportion / 2 - g.value * l.proportion / 2 - 2 * (a + 1),
            r: unref(k2)(g.value * l.proportion / 2 * 0.9 <= 0 ? 1e-4 : g.value * l.proportion / 2 * 0.9),
            fill: e.value.style.chart.layout.rings.gradient.underlayerColor
          }, null, 14, kt),
          createBaseVNode("circle", {
            class: normalizeClass({
              "vue-ui-rings-item": L.value && e.value.useCssAnimation,
              "vue-rings-item-onload": !L.value && e.value.useCssAnimation,
              "vue-ui-rings-shadow": e.value.style.chart.layout.rings.useShadow,
              "vue-ui-rings-blur": T.value !== null && T.value !== a
            }),
            style: normalizeStyle(`animation-delay:${a * 100}ms`),
            stroke: e.value.style.chart.layout.rings.stroke,
            "stroke-width": l.strokeWidth < 0.5 ? 0.5 : l.strokeWidth,
            cx: u.value.width / 2,
            cy: a === 0 ? u.value.height / 2 : u.value.height / 2 + g.value * d.value[0].proportion / 2 - g.value * l.proportion / 2 - 2 * (a + 1),
            r: unref(k2)(g.value * l.proportion / 2 * 0.9 <= 0 ? 1e-4 : g.value * l.proportion / 2 * 0.9),
            fill: e.value.style.chart.layout.rings.gradient.show ? `url(#gradient_${S.value}_${a})` : l.color
          }, null, 14, Ct),
          createBaseVNode("circle", {
            "data-cy-trap": "",
            stroke: "none",
            cx: u.value.width / 2,
            cy: a === 0 ? u.value.height / 2 : u.value.height / 2 + g.value * d.value[0].proportion / 2 - g.value * l.proportion / 2 - 2 * (a + 1),
            r: unref(k2)(g.value * l.proportion / 2 * 0.9 <= 0 ? 1e-4 : g.value * l.proportion / 2 * 0.9),
            fill: "transparent",
            onMouseenter: (s2) => Fe(a, l),
            onMouseleave: o[0] || (o[0] = (s2) => {
              T.value = null, R3.value = false;
            })
          }, null, 40, wt)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: u.value }, void 0, true)
      ], 14, ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", $t, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ne) || unref(re2) })), void 0, true)
      ])) : createCommentVNode("", true),
      z.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
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
        ref: Q2
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${oe.value}`,
          legendSet: de.value,
          config: Oe.value,
          onClickMarker: o[1] || (o[1] = ({ legend: l }) => H(l.uid))
        }, {
          item: withCtx(({ legend: l, index: a }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (s2) => H(l.uid),
              style: normalizeStyle(`opacity:${c2.value.includes(l.uid) ? 0.5 : 1}`)
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
                { datapoint: l, seriesIndex: a }
              )) + " ", 1),
              c2.value.includes(l.uid) ? (openBlock(), createElementBlock("span", xt, " ( - % ) ")) : (openBlock(), createElementBlock("span", _t, " (" + toDisplayString(isNaN(l.value / m.value) ? "-" : unref(Ht)({
                v: l.value / m.value * 100,
                s: "%",
                r: e.value.style.chart.legend.roundingPercentage
              })) + ") ", 1))
            ], 12, Tt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: de.value
        }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: Z,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: w.value.showTooltip && R3.value && c2.value.length < y.dataset.length,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: P.value,
        content: G.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...X.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...X.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      z.value ? (openBlock(), createBlock(R, {
        key: 8,
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
            key: `table_${le.value}`,
            colNames: D.value.colNames,
            head: D.value.head,
            body: D.value.body,
            config: D.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[2] || (o[2] = (l) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Nt2)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 46, gt));
  }
};
var Et = s(Pt, [["__scopeId", "data-v-2a4f4cb4"]]);
export {
  Et as default
};
//# sourceMappingURL=vue-ui-rings-qLQ-gl21-QG5AYGVI.js.map
