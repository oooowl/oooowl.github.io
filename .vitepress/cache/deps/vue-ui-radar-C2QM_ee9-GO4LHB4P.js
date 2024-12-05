import {
  $e
} from "./chunk-2E4IZQOC.js";
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
  Ft,
  He,
  Ht,
  Jt,
  Kt,
  Mt,
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

// node_modules/vue-data-ui/dist/vue-ui-radar-C2QM_ee9.js
var Ct = ["id"];
var _t = ["xmlns", "viewBox"];
var wt = ["id"];
var $t = ["stop-color"];
var Pt = ["stop-color"];
var Tt = { key: 0 };
var xt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var At = { key: 0 };
var Ot = ["d", "stroke", "stroke-width"];
var Nt2 = ["d", "stroke", "stroke-width"];
var St = { key: 1 };
var Ft2 = ["x", "y", "text-anchor", "font-size", "fill", "onMouseenter"];
var It = ["points", "stroke", "stroke-width"];
var Lt = ["points", "stroke", "stroke-width", "fill"];
var zt = { key: 2 };
var Rt = ["cx", "cy", "fill", "r", "stroke"];
var Mt2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Vt2 = ["onClick"];
var Ut = {
  key: 0,
  style: { "max-width": "200px", margin: "0 auto" }
};
var Et = {
  __name: "vue-ui-radar",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["selectLegend"],
  setup(Ne, { expose: Se2, emit: Fe }) {
    const h = Ne, { vue_ui_radar: Ie } = te(), F = computed(() => !!h.dataset && Object.keys(h.dataset).length), _ = ref(Dt()), Le = ref(null), W2 = ref(false), X = ref(""), te2 = ref(0), A = ref(null), ae2 = ref(null), oe = ref(null), le = ref(null), re2 = ref(null), ne = ref(0), se = ref(0), ue = ref(0), e = computed({
      get: () => ie(),
      set: (t) => t
    });
    function ie() {
      const t = c({
        userConfig: h.config,
        defaultConfig: Ie
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_radar[t.theme] || h.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => h.config, (t) => {
      e.value = ie(), ce(), ne.value += 1, se.value += 1, ue.value += 1;
    }, { deep: true });
    const E2 = ref(null);
    function ce() {
      if (jt(h.dataset) && qt({
        componentName: "VueUiRadar",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: a, height: o } = k({
            chart: A.value,
            title: e.value.style.chart.title.text ? ae2.value : null,
            legend: e.value.style.chart.legend.show ? oe.value : null,
            source: le.value,
            noTitle: re2.value
          });
          i.value.width = a, i.value.height = o;
        });
        E2.value = new ResizeObserver(t), E2.value.observe(A.value.parentNode);
      }
    }
    onMounted(() => {
      ce();
    }), onBeforeUnmount(() => {
      E2.value && E2.value.disconnect();
    });
    const { isPrinting: de, isImaging: ve, generatePdf: pe, generateImage: he } = re({
      elementId: `vue-ui-radar_${_.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-radar"
    }), ze = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), ge = computed(() => tr(e.value.customPalette)), k3 = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), Re = computed(() => ({
      style: {
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        animation: {
          show: e.value.style.chart.tooltip.animation.show,
          animationFrames: e.value.style.chart.tooltip.animation.animationFrames
        },
        labels: {
          fontSize: e.value.style.chart.tooltip.fontSize,
          name: {
            color: e.value.style.chart.tooltip.color
          }
        },
        gutter: {
          backgroundColor: "#CCCCCC",
          opacity: 30
        }
      }
    })), i = ref({
      height: 312,
      width: 512
    }), c2 = ref([]), I = ref(null), O2 = ref(false);
    function fe(t) {
      O2.value = true, c2.value.includes(t) ? (I.value = t, c2.value = c2.value.filter((a) => a !== t), setTimeout(() => {
        O2.value = false, I.value = null;
      }, 500)) : (c2.value.push(t), setTimeout(() => {
        O2.value = false;
      }, 500)), Fe("selectLegend", N.value.filter((a, o) => !c2.value.includes(o)).map((a) => ({
        name: a.name,
        color: a.color,
        proportion: a.totalProportion
      })));
    }
    function Me() {
      return N.value.map((t) => ({
        name: t.name,
        color: t.color,
        proportion: t.totalProportion
      }));
    }
    const f = computed(() => [null, void 0].includes(h.dataset.categories) ? (qt({
      componentName: "VueUiRadar",
      type: "datasetAttribute",
      property: "categories ({ name: string; prefix?: string; suffix?: string}[])"
    }), []) : (h.dataset.categories.length === 0 ? qt({
      componentName: "VueUiRadar",
      type: "datasetAttributeEmpty",
      property: "categories"
    }) : h.dataset.categories.forEach((t, a) => {
      Zt({
        datasetObject: t,
        requiredAttributes: ["name"]
      }).forEach((o) => {
        qt({
          componentName: "VueUiRadar",
          type: "datasetAttribute",
          property: `category.${o} at index ${a}`,
          index: a
        });
      });
    }), [null, void 0].includes(h.dataset.series) ? qt({
      componentName: "VueUiRadar",
      type: "datasetAttribute",
      property: "series ({ name: string; values: number[]; color?: string; target: number}[])"
    }) : h.dataset.series.forEach((t, a) => {
      Zt({
        datasetObject: t,
        requiredAttributes: ["name", "values", "target"]
      }).forEach((o) => {
        qt({
          componentName: "VueUiRadar",
          type: "datasetSerieAttribute",
          key: "series",
          property: o,
          index: a
        });
      });
    }), h.dataset.categories.map((t, a) => ({
      name: t.name,
      categoryId: `radar_category_${_.value}_${a}`,
      color: Q(t.color) || ge.value[a] || rt[a] || rt[a % rt.length],
      prefix: t.prefix ?? "",
      suffix: t.suffix ?? ""
    })))), b = computed(() => F.value ? h.dataset.series.map((t, a) => ({
      ...t,
      color: Q(t.color) || ge.value[a] || rt[a] || rt[a % rt.length],
      serieId: `radar_serie_${_.value}_${a}`,
      formatter: t.formatter || null
    })) : []), ye = computed(() => Math.max(...b.value.flatMap((t) => t.values))), me = computed(() => b.value.length), Y = computed(() => Math.min(i.value.width, i.value.height) / 3), be = computed(() => Ft({
      plot: { x: i.value.width / 2, y: i.value.height / 2 },
      radius: Y.value,
      sides: me.value,
      rotation: 0
    })), Ve = computed(() => {
      const t = [];
      for (let a = 0; a < Y.value; a += Y.value / e.value.style.chart.layout.grid.graduations)
        t.push(a);
      return t;
    }), C2 = computed(() => be.value.coordinates.map((t, a) => {
      const o = b.value[a].values.map((l) => Ue({
        centerX: i.value.width / 2,
        centerY: i.value.height / 2,
        apexX: t.x,
        apexY: t.y,
        proportion: l / (b.value[a].target || ye.value)
      }));
      return {
        ...t,
        ...b.value[a],
        plots: o
      };
    }));
    function j({ x: t, y: a }) {
      let o = "middle";
      return t = Math.round(t), a = Math.round(a), t > i.value.width / 2 && (t += 12, o = "start"), t < i.value.width / 2 && (t -= 12, o = "end"), a > i.value.height / 2 && (a += 20), a < i.value.height / 2 && (a -= 12), a === i.value.height / 2 && (a += 4), { x: t, y: a, anchor: o };
    }
    function Ue({ centerX: t, centerY: a, apexX: o, apexY: l, proportion: n }) {
      return {
        x: t + (o - t) * n,
        y: a + (l - a) * n
      };
    }
    const N = computed(() => {
      const t = b.value.map((a, o) => a.values.map((l) => l / (a.target || ye.value)));
      return f.value.map((a, o) => ({
        ...a,
        totalProportion: k2(t.map((l) => l[o]).reduce((l, n) => l + n, 0) / b.value.length),
        shape: "circle",
        opacity: c2.value.includes(o) ? 0.5 : 1,
        segregate: () => fe(o),
        isSegregated: c2.value.includes(o)
      }));
    }), Ee = computed(() => ({
      cy: "radar-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), B = computed(() => {
      const t = [
        { name: e.value.translations.datapoint, color: "" },
        { name: e.value.translations.target, color: "" },
        ...N.value
      ], a = h.dataset.series.map((l) => [
        l.name,
        ir(
          l.formatter,
          l.target,
          Ht({
            p: l.prefix,
            v: l.target,
            s: l.suffix,
            r: e.value.table.td.roundingValue
          })
        ),
        ...l.values.map((n, d) => `${ir(
          l.formatter,
          n,
          Ht({ p: f.value[d].prefix, v: n, s: f.value[d].suffix, r: e.value.table.td.roundingValue })
        )} (${isNaN(n / l.target) ? "" : Ht({
          v: n / l.target * 100,
          s: "%",
          r: e.value.table.td.roundingPercentage
        })})`)
      ]), o = {
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
      return { head: t, body: a, config: o, colNames: t };
    }), D = ref(null), q = ref([]), H = ref(null);
    function Be(t, a) {
      q.value = [], D.value = a, W2.value = true;
      let o = "";
      H.value = {
        datapoint: t,
        seriesIndex: a,
        series: {
          categories: f.value,
          datapoints: b.value,
          radar: C2.value
        },
        config: e.value
      };
      const l = e.value.style.chart.tooltip.customFormat;
      if (Xt(l) && Kt(() => l({
        seriesIndex: a,
        datapoint: t,
        series: { categories: f.value, datapoints: b.value, radar: C2.value },
        config: e.value
      })))
        X.value = l({
          seriesIndex: a,
          datapoint: t,
          series: { categories: f.value, datapoints: b.value, radar: C2.value },
          config: e.value
        });
      else {
        o += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`;
        for (let n = 0; n < t.values.length; n += 1)
          c2.value.includes(n) || q.value.push({
            name: f.value[n].name,
            value: t.values[n] / t.target * 100,
            color: f.value[n].color,
            suffix: "%)",
            prefix: `${Ht({ p: f.value[n].prefix ?? "", v: t.values[n], s: f.value[n].suffix ?? "", r: e.value.style.chart.tooltip.roundingValue })} (`,
            rounding: e.value.style.chart.tooltip.roundingPercentage,
            formatter: t.formatter
          });
        X.value = o;
      }
    }
    function ke() {
      nextTick(() => {
        const t = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], a = [[""], [e.value.translations.target], ...N.value.flatMap((d) => [[d.name], ["%"]])], o = h.dataset.series.map((d, Bt) => [d.name, d.target, ...d.values.flatMap((K) => [
          K,
          isNaN(K / d.target) ? "" : K / d.target * 100
        ])]), l = t.concat([a]).concat(o), n = Vt(l);
        Nt({ csvContent: n, title: e.value.style.chart.title.text || "vue-ui-radar" });
      });
    }
    const L = ref(false);
    function De(t) {
      L.value = t, te2.value += 1;
    }
    function Ce() {
      k3.value.showTable = !k3.value.showTable;
    }
    function _e() {
      k3.value.showTooltip = !k3.value.showTooltip;
    }
    const G = ref(false);
    function J() {
      G.value = !G.value;
    }
    return Se2({
      getData: Me,
      generatePdf: pe,
      generateCsv: ke,
      generateImage: he,
      toggleTable: Ce,
      toggleTooltip: _e,
      toggleAnnotator: J
    }), (t, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-radar ${L.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "radarChart",
      ref: A,
      id: `vue-ui-radar_${_.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height: 100%;" : ""} text-align:center;background:${e.value.style.chart.backgroundColor}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: A.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: G.value,
        onClose: J
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      ze.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: re2,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: ae2,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ne.value}`,
          config: {
            title: {
              cy: "radar-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "radar-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && F.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Le,
        key: `user_options_${te2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(ve),
        isPrinting: unref(de),
        uid: _.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: L.value,
        isTooltip: k3.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: A.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: G.value,
        onToggleFullscreen: De,
        onGeneratePdf: unref(pe),
        onGenerateCsv: ke,
        onGenerateImage: unref(he),
        onToggleTable: Ce,
        onToggleTooltip: _e,
        onToggleAnnotator: J
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
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: l }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: l })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: o, isAnnotator: l }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: o, isAnnotator: l })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      F.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": L.value, "vue-data-ui-fulscreen--off": !L.value }),
        viewBox: `0 0 ${i.value.width <= 0 ? 10 : i.value.width} ${i.value.height <= 0 ? 10 : i.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (o, l) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `radar_gradient_${_.value}_${l}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(o.color, 0.05), e.value.style.chart.layout.dataPolygon.opacity)
            }, null, 8, $t),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(o.color, e.value.style.chart.layout.dataPolygon.opacity)
            }, null, 8, Pt)
          ], 8, wt))), 256))
        ]),
        e.value.style.chart.layout.grid.show ? (openBlock(), createElementBlock("g", Tt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (o) => (openBlock(), createElementBlock("line", {
            x1: i.value.width / 2,
            y1: i.value.height / 2,
            x2: o.x,
            y2: o.y,
            stroke: e.value.style.chart.layout.grid.stroke,
            "stroke-width": e.value.style.chart.layout.grid.strokeWidth
          }, null, 8, xt))), 256)),
          e.value.style.chart.layout.grid.graduations > 0 ? (openBlock(), createElementBlock("g", At, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Ve.value, (o) => (openBlock(), createElementBlock("path", {
              d: unref(Ft)({
                plot: { x: i.value.width / 2, y: i.value.height / 2 },
                radius: o,
                sides: me.value,
                rotation: 0
              }).path,
              fill: "none",
              stroke: e.value.style.chart.layout.grid.stroke,
              "stroke-width": e.value.style.chart.layout.grid.strokeWidth
            }, null, 8, Ot))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("path", {
          d: be.value.path,
          fill: "none",
          stroke: e.value.style.chart.layout.outerPolygon.stroke,
          "stroke-width": e.value.style.chart.layout.outerPolygon.strokeWidth,
          "stroke-linejoin": "round",
          "stroke-linecap": "round"
        }, null, 8, Nt2),
        e.value.style.chart.layout.labels.dataLabels.show ? (openBlock(), createElementBlock("g", St, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (o, l) => (openBlock(), createElementBlock("text", {
            x: j(o).x,
            y: j(o).y,
            "text-anchor": j(o).anchor,
            "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
            fill: e.value.style.chart.layout.labels.dataLabels.color,
            onMouseenter: (n) => Be(o, l),
            onMouseleave: a[0] || (a[0] = (n) => {
              W2.value = false, D.value = null;
            })
          }, toDisplayString(o.name), 41, Ft2))), 256))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (o, l) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("g", null, [
            e.value.useCssAnimation || !e.value.useCssAnimation && !c2.value.includes(l) ? (openBlock(), createElementBlock("polygon", {
              key: 0,
              "data-cy-radar-path": "",
              points: unref(Mt)(C2.value.map((n) => n.plots[l]), false, true),
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.dataPolygon.strokeWidth + 1,
              fill: "none",
              class: normalizeClass({ "animated-out": c2.value.includes(l) && e.value.useCssAnimation, "animated-in": O2.value && I.value === l && e.value.useCssAnimation })
            }, null, 10, It)) : createCommentVNode("", true),
            e.value.useCssAnimation || !e.value.useCssAnimation && !c2.value.includes(l) ? (openBlock(), createElementBlock("polygon", {
              key: 1,
              "data-cy-radar-path": "",
              points: unref(Mt)(C2.value.map((n) => n.plots[l]), false, true),
              stroke: o.color,
              "stroke-width": e.value.style.chart.layout.dataPolygon.strokeWidth,
              fill: e.value.style.chart.layout.dataPolygon.transparent ? "transparent" : e.value.style.chart.layout.dataPolygon.useGradient ? `url(#radar_gradient_${_.value}_${l})` : unref(dr)(o.color, e.value.style.chart.layout.dataPolygon.opacity),
              class: normalizeClass({ "animated-out": c2.value.includes(l) && e.value.useCssAnimation, "animated-in": O2.value && I.value === l && e.value.useCssAnimation })
            }, null, 10, Lt)) : createCommentVNode("", true)
          ])
        ]))), 256)),
        e.value.style.chart.layout.plots.show ? (openBlock(), createElementBlock("g", zt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (o, l) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(o.plots, (n, d) => (openBlock(), createElementBlock("circle", {
              cx: n.x,
              cy: n.y,
              fill: c2.value.includes(d) ? "transparent" : f.value[d].color,
              r: D.value !== null && D.value === l ? e.value.style.chart.layout.plots.radius * 1.6 : e.value.style.chart.layout.plots.radius,
              stroke: c2.value.includes(d) ? "transparent" : e.value.style.chart.backgroundColor,
              "stroke-width": 0.5,
              class: normalizeClass({ "animated-out": c2.value.includes(d) && e.value.useCssAnimation, "animated-in": O2.value && I.value === d && e.value.useCssAnimation })
            }, null, 10, Rt))), 256))
          ]))), 256))
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: i.value }, void 0, true)
      ], 14, _t)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Mt2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(de) || unref(ve) })), void 0, true)
      ])) : createCommentVNode("", true),
      F.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "radar",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            radar: {
              grid: {
                color: e.value.style.chart.layout.outerPolygon.stroke
              },
              shapes: {
                color: e.value.style.chart.layout.outerPolygon.stroke
              }
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: oe
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${ue.value}`,
          legendSet: N.value,
          config: Ee.value,
          onClickMarker: a[1] || (a[1] = ({ i: o }) => fe(o))
        }, {
          item: withCtx(({ legend: o, index: l }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (n) => o.segregate(),
              style: normalizeStyle(`opacity:${c2.value.includes(l) ? 0.5 : 1}`)
            }, toDisplayString(o.name) + ": " + toDisplayString(unref(Ht)({
              v: o.totalProportion * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })), 13, Vt2)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: N.value
        }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: le,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: k3.value.showTooltip && W2.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        fontSize: e.value.style.chart.tooltip.fontSize,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: A.value,
        content: X.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...H.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          ["function"].includes(typeof e.value.style.chart.tooltip.customFormat) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Ut, [
            createVNode($e, {
              dataset: q.value,
              config: Re.value,
              backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity
            }, null, 8, ["dataset", "config", "backgroundOpacity"])
          ])),
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...H.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "fontSize", "position", "offsetY", "parent", "content", "isCustom"]),
      F.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: k3.value.showTable,
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
            key: `table_${se.value}`,
            colNames: B.value.colNames,
            head: B.value.head,
            body: B.value.body,
            config: B.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (o) => k3.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createTextVNode(toDisplayString(o.name), 1)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Ct));
  }
};
var oa = s(Et, [["__scopeId", "data-v-e797ea4b"]]);
export {
  oa as default
};
//# sourceMappingURL=vue-ui-radar-C2QM_ee9-GO4LHB4P.js.map
