import {
  be
} from "./chunk-LK7VO2XW.js";
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
  Tt,
  Xt,
  cr,
  et,
  j,
  k,
  mt,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-radar-CNSpiNrM.js
var gt = ["id"];
var ft = ["xmlns", "viewBox"];
var yt = ["id"];
var mt2 = ["stop-color"];
var bt = ["stop-color"];
var kt = { key: 0 };
var Ct = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var _t = { key: 0 };
var wt = ["d", "stroke", "stroke-width"];
var $t2 = ["d", "stroke", "stroke-width"];
var xt = { key: 1 };
var Pt = ["x", "y", "text-anchor", "font-size", "fill", "onMouseenter"];
var Tt2 = ["points", "stroke", "stroke-width"];
var Nt2 = ["points", "stroke", "stroke-width", "fill"];
var Ot2 = { key: 2 };
var St = ["cx", "cy", "fill", "r", "stroke"];
var Ft = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var At = ["onClick"];
var It = {
  key: 0,
  style: { "max-width": "200px", margin: "0 auto" }
};
var Lt2 = {
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
  setup(Pe, { expose: Te, emit: Ne }) {
    const v = Pe, { vue_ui_radar: Oe } = oe(), F = computed(() => !!v.dataset && Object.keys(v.dataset).length), _ = ref(Lt()), Se = ref(null), G = ref(false), W2 = ref(""), Z = ref(0), A = ref(null), ee = ref(null), te = ref(null), ae = ref(0), oe2 = ref(0), le = ref(0), e = computed({
      get: () => re(),
      set: (t) => t
    });
    function re() {
      const t = c({
        userConfig: v.config,
        defaultConfig: Oe
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_radar[t.theme] || v.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => v.config, (t) => {
      e.value = re(), se2(), ae.value += 1, oe2.value += 1, le.value += 1;
    }, { deep: true });
    const V = ref(null);
    function se2() {
      if (Xt(v.dataset) && Kt({
        componentName: "VueUiRadar",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: a, height: o } = M({
            chart: A.value,
            title: e.value.style.chart.title.text ? ee.value : null,
            legend: e.value.style.chart.legend.show ? te.value : null
          });
          u.value.width = a, u.value.height = o;
        });
        V.value = new ResizeObserver(t), V.value.observe(A.value.parentNode);
      }
    }
    onMounted(() => {
      se2();
    }), onBeforeUnmount(() => {
      V.value && V.value.disconnect();
    });
    const { isPrinting: ne, isImaging: ue, generatePdf: ie2, generateImage: ce } = se({
      elementId: `vue-ui-radar_${_.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-radar"
    }), de = computed(() => or(e.value.customPalette)), k2 = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), Fe = computed(() => ({
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
    })), u = ref({
      height: 312,
      width: 512
    }), c2 = ref([]), I = ref(null), T = ref(false);
    function ve(t) {
      T.value = true, c2.value.includes(t) ? (I.value = t, c2.value = c2.value.filter((a) => a !== t), setTimeout(() => {
        T.value = false, I.value = null;
      }, 500)) : (c2.value.push(t), setTimeout(() => {
        T.value = false;
      }, 500)), Ne("selectLegend", N.value.filter((a, o) => !c2.value.includes(o)).map((a) => ({
        name: a.name,
        color: a.color,
        proportion: a.totalProportion
      })));
    }
    function Ae() {
      return N.value.map((t) => ({
        name: t.name,
        color: t.color,
        proportion: t.totalProportion
      }));
    }
    const g = computed(() => [null, void 0].includes(v.dataset.categories) ? (Kt({
      componentName: "VueUiRadar",
      type: "datasetAttribute",
      property: "categories ({ name: string; prefix?: string; suffix?: string}[])"
    }), []) : (v.dataset.categories.length === 0 ? Kt({
      componentName: "VueUiRadar",
      type: "datasetAttributeEmpty",
      property: "categories"
    }) : v.dataset.categories.forEach((t, a) => {
      qt({
        datasetObject: t,
        requiredAttributes: ["name"]
      }).forEach((o) => {
        Kt({
          componentName: "VueUiRadar",
          type: "datasetAttribute",
          property: `category.${o} at index ${a}`,
          index: a
        });
      });
    }), [null, void 0].includes(v.dataset.series) ? Kt({
      componentName: "VueUiRadar",
      type: "datasetAttribute",
      property: "series ({ name: string; values: number[]; color?: string; target: number}[])"
    }) : v.dataset.series.forEach((t, a) => {
      qt({
        datasetObject: t,
        requiredAttributes: ["name", "values", "target"]
      }).forEach((o) => {
        Kt({
          componentName: "VueUiRadar",
          type: "datasetSerieAttribute",
          key: "series",
          property: o,
          index: a
        });
      });
    }), v.dataset.categories.map((t, a) => ({
      name: t.name,
      categoryId: `radar_category_${_.value}_${a}`,
      color: j(t.color) || de.value[a] || et[a] || et[a % et.length],
      prefix: t.prefix ?? "",
      suffix: t.suffix ?? ""
    })))), b = computed(() => F.value ? v.dataset.series.map((t, a) => ({
      ...t,
      color: j(t.color) || de.value[a] || et[a] || et[a % et.length],
      serieId: `radar_serie_${_.value}_${a}`,
      formatter: t.formatter || null
    })) : []), pe = computed(() => Math.max(...b.value.flatMap((t) => t.values))), he = computed(() => b.value.length), X = computed(() => Math.min(u.value.width, u.value.height) / 3), ge = computed(() => mt({
      plot: { x: u.value.width / 2, y: u.value.height / 2 },
      radius: X.value,
      sides: he.value,
      rotation: 0
    })), Ie = computed(() => {
      const t = [];
      for (let a = 0; a < X.value; a += X.value / e.value.style.chart.layout.grid.graduations)
        t.push(a);
      return t;
    }), C2 = computed(() => ge.value.coordinates.map((t, a) => {
      const o = b.value[a].values.map((l) => Le({
        centerX: u.value.width / 2,
        centerY: u.value.height / 2,
        apexX: t.x,
        apexY: t.y,
        proportion: l / (b.value[a].target || pe.value)
      }));
      return {
        ...t,
        ...b.value[a],
        plots: o
      };
    }));
    function Y({ x: t, y: a }) {
      let o = "middle";
      return t = Math.round(t), a = Math.round(a), t > u.value.width / 2 && (t += 12, o = "start"), t < u.value.width / 2 && (t -= 12, o = "end"), a > u.value.height / 2 && (a += 20), a < u.value.height / 2 && (a -= 12), a === u.value.height / 2 && (a += 4), { x: t, y: a, anchor: o };
    }
    function Le({ centerX: t, centerY: a, apexX: o, apexY: l, proportion: r }) {
      return {
        x: t + (o - t) * r,
        y: a + (l - a) * r
      };
    }
    const N = computed(() => {
      const t = b.value.map((a, o) => a.values.map((l) => l / (a.target || pe.value)));
      return g.value.map((a, o) => ({
        ...a,
        totalProportion: k(t.map((l) => l[o]).reduce((l, r) => l + r, 0) / b.value.length),
        shape: "circle",
        opacity: c2.value.includes(o) ? 0.5 : 1,
        segregate: () => ve(o),
        isSegregated: c2.value.includes(o)
      }));
    }), ze = computed(() => ({
      cy: "radar-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), U = computed(() => {
      const t = [
        { name: e.value.translations.datapoint, color: "" },
        { name: e.value.translations.target, color: "" },
        ...N.value
      ], a = v.dataset.series.map((l) => [
        l.name,
        nr(
          l.formatter,
          l.target,
          Gt({
            p: l.prefix,
            v: l.target,
            s: l.suffix,
            r: e.value.table.td.roundingValue
          })
        ),
        ...l.values.map((r, d) => `${nr(
          l.formatter,
          r,
          Gt({ p: g.value[d].prefix, v: r, s: g.value[d].suffix, r: e.value.table.td.roundingValue })
        )} (${isNaN(r / l.target) ? "" : Gt({
          v: r / l.target * 100,
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
    }), E2 = ref(null), j2 = ref([]), q = ref(null);
    function Re(t, a) {
      j2.value = [], E2.value = a, G.value = true;
      let o = "";
      q.value = {
        datapoint: t,
        seriesIndex: a,
        series: {
          categories: g.value,
          datapoints: b.value,
          radar: C2.value
        },
        config: e.value
      };
      const l = e.value.style.chart.tooltip.customFormat;
      if (Ht(l) && $t(() => l({
        seriesIndex: a,
        datapoint: t,
        series: { categories: g.value, datapoints: b.value, radar: C2.value },
        config: e.value
      })))
        W2.value = l({
          seriesIndex: a,
          datapoint: t,
          series: { categories: g.value, datapoints: b.value, radar: C2.value },
          config: e.value
        });
      else {
        o += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`;
        for (let r = 0; r < t.values.length; r += 1)
          c2.value.includes(r) || j2.value.push({
            name: g.value[r].name,
            value: t.values[r] / t.target * 100,
            color: g.value[r].color,
            suffix: "%)",
            prefix: `${Gt({ p: g.value[r].prefix ?? "", v: t.values[r], s: g.value[r].suffix ?? "", r: e.value.style.chart.tooltip.roundingValue })} (`,
            rounding: e.value.style.chart.tooltip.roundingPercentage,
            formatter: t.formatter
          });
        W2.value = o;
      }
    }
    function fe() {
      nextTick(() => {
        const t = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], a = [[""], [e.value.translations.target], ...N.value.flatMap((d) => [[d.name], ["%"]])], o = v.dataset.series.map((d, zt) => [d.name, d.target, ...d.values.flatMap((H) => [
          H,
          isNaN(H / d.target) ? "" : H / d.target * 100
        ])]), l = t.concat([a]).concat(o), r = Nt(l);
        Ot({ csvContent: r, title: e.value.style.chart.title.text || "vue-ui-radar" });
      });
    }
    const L = ref(false);
    function Me(t) {
      L.value = t, Z.value += 1;
    }
    function ye() {
      k2.value.showTable = !k2.value.showTable;
    }
    function me() {
      k2.value.showTooltip = !k2.value.showTooltip;
    }
    return Te({
      getData: Ae,
      generatePdf: ie2,
      generateCsv: fe,
      generateImage: ce,
      toggleTable: ye,
      toggleTooltip: me
    }), (t, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-radar ${L.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "radarChart",
      ref: A,
      id: `vue-ui-radar_${_.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height: 100%;" : ""} text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: ee,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ae.value}`,
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
      e.value.userOptions.show && F.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: Se,
        key: `user_options_${Z.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(ue),
        isPrinting: unref(ne),
        uid: _.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: L.value,
        isTooltip: k2.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: A.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Me,
        onGeneratePdf: unref(ie2),
        onGenerateCsv: fe,
        onGenerateImage: unref(ce),
        onToggleTable: ye,
        onToggleTooltip: me
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      F.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": L.value, "vue-data-ui-fulscreen--off": !L.value }),
        viewBox: `0 0 ${u.value.width <= 0 ? 10 : u.value.width} ${u.value.height <= 0 ? 10 : u.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (o, l) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `radar_gradient_${_.value}_${l}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(pt)(o.color, 0.05), e.value.style.chart.layout.dataPolygon.opacity)
            }, null, 8, mt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(o.color, e.value.style.chart.layout.dataPolygon.opacity)
            }, null, 8, bt)
          ], 8, yt))), 256))
        ]),
        e.value.style.chart.layout.grid.show ? (openBlock(), createElementBlock("g", kt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (o) => (openBlock(), createElementBlock("line", {
            x1: u.value.width / 2,
            y1: u.value.height / 2,
            x2: o.x,
            y2: o.y,
            stroke: e.value.style.chart.layout.grid.stroke,
            "stroke-width": e.value.style.chart.layout.grid.strokeWidth
          }, null, 8, Ct))), 256)),
          e.value.style.chart.layout.grid.graduations > 0 ? (openBlock(), createElementBlock("g", _t, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Ie.value, (o) => (openBlock(), createElementBlock("path", {
              d: unref(mt)({
                plot: { x: u.value.width / 2, y: u.value.height / 2 },
                radius: o,
                sides: he.value,
                rotation: 0
              }).path,
              fill: "none",
              stroke: e.value.style.chart.layout.grid.stroke,
              "stroke-width": e.value.style.chart.layout.grid.strokeWidth
            }, null, 8, wt))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("path", {
          d: ge.value.path,
          fill: "none",
          stroke: e.value.style.chart.layout.outerPolygon.stroke,
          "stroke-width": e.value.style.chart.layout.outerPolygon.strokeWidth,
          "stroke-linejoin": "round",
          "stroke-linecap": "round"
        }, null, 8, $t2),
        e.value.style.chart.layout.labels.dataLabels.show ? (openBlock(), createElementBlock("g", xt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (o, l) => (openBlock(), createElementBlock("text", {
            x: Y(o).x,
            y: Y(o).y,
            "text-anchor": Y(o).anchor,
            "font-size": e.value.style.chart.layout.labels.dataLabels.fontSize,
            fill: e.value.style.chart.layout.labels.dataLabels.color,
            onMouseenter: (r) => Re(o, l),
            onMouseleave: a[0] || (a[0] = (r) => {
              G.value = false, E2.value = null;
            })
          }, toDisplayString(o.name), 41, Pt))), 256))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (o, l) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("g", null, [
            e.value.useCssAnimation || !e.value.useCssAnimation && !c2.value.includes(l) ? (openBlock(), createElementBlock("polygon", {
              key: 0,
              "data-cy-radar-path": "",
              points: unref(Tt)(C2.value.map((r) => r.plots[l]), false, true),
              stroke: e.value.style.chart.backgroundColor,
              "stroke-width": e.value.style.chart.layout.dataPolygon.strokeWidth + 1,
              fill: "none",
              class: normalizeClass({ "animated-out": c2.value.includes(l) && e.value.useCssAnimation, "animated-in": T.value && I.value === l && e.value.useCssAnimation })
            }, null, 10, Tt2)) : createCommentVNode("", true),
            e.value.useCssAnimation || !e.value.useCssAnimation && !c2.value.includes(l) ? (openBlock(), createElementBlock("polygon", {
              key: 1,
              "data-cy-radar-path": "",
              points: unref(Tt)(C2.value.map((r) => r.plots[l]), false, true),
              stroke: o.color,
              "stroke-width": e.value.style.chart.layout.dataPolygon.strokeWidth,
              fill: e.value.style.chart.layout.dataPolygon.transparent ? "transparent" : e.value.style.chart.layout.dataPolygon.useGradient ? `url(#radar_gradient_${_.value}_${l})` : unref(cr)(o.color, e.value.style.chart.layout.dataPolygon.opacity),
              class: normalizeClass({ "animated-out": c2.value.includes(l) && e.value.useCssAnimation, "animated-in": T.value && I.value === l && e.value.useCssAnimation })
            }, null, 10, Nt2)) : createCommentVNode("", true)
          ])
        ]))), 256)),
        e.value.style.chart.layout.plots.show ? (openBlock(), createElementBlock("g", Ot2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (o, l) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(o.plots, (r, d) => (openBlock(), createElementBlock("circle", {
              cx: r.x,
              cy: r.y,
              fill: c2.value.includes(d) ? "transparent" : g.value[d].color,
              r: E2.value !== null && E2.value === l ? e.value.style.chart.layout.plots.radius * 1.6 : e.value.style.chart.layout.plots.radius,
              stroke: c2.value.includes(d) ? "transparent" : e.value.style.chart.backgroundColor,
              "stroke-width": 0.5,
              class: normalizeClass({ "animated-out": c2.value.includes(d) && e.value.useCssAnimation, "animated-in": T.value && I.value === d && e.value.useCssAnimation })
            }, null, 10, St))), 256))
          ]))), 256))
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: u.value }, void 0, true)
      ], 14, ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Ft, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ne) || unref(ue) })), void 0, true)
      ])) : createCommentVNode("", true),
      F.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        ref: te
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${le.value}`,
          legendSet: N.value,
          config: ze.value,
          onClickMarker: a[1] || (a[1] = ({ i: o }) => ve(o))
        }, {
          item: withCtx(({ legend: o, index: l }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (r) => o.segregate(),
              style: normalizeStyle(`opacity:${c2.value.includes(l) ? 0.5 : 1}`)
            }, toDisplayString(o.name) + ": " + toDisplayString(unref(Gt)({
              v: o.totalProportion * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })), 13, At)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: N.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: k2.value.showTooltip && G.value,
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
        content: W2.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...q.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          ["function"].includes(typeof e.value.style.chart.tooltip.customFormat) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", It, [
            createVNode(be, {
              dataset: j2.value,
              config: Fe.value,
              backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity
            }, null, 8, ["dataset", "config", "backgroundOpacity"])
          ])),
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...q.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "fontSize", "position", "offsetY", "parent", "content", "isCustom"]),
      F.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: k2.value.showTable,
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
            key: `table_${oe2.value}`,
            colNames: U.value.colNames,
            head: U.value.head,
            body: U.value.body,
            config: U.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (o) => k2.value.showTable = false)
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
    ], 14, gt));
  }
};
var Jt = s(Lt2, [["__scopeId", "data-v-ed1fdeb2"]]);
export {
  Jt as default
};
//# sourceMappingURL=vue-ui-radar-CNSpiNrM-FHWGVWUK.js.map
