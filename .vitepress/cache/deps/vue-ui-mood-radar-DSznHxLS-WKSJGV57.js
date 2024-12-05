import {
  C
} from "./chunk-KAESDEK5.js";
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
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Gt,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  Tt,
  Xt,
  cr,
  mt,
  nr,
  oe,
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-mood-radar-DSznHxLS.js
var je = ["id"];
var Be = {
  key: 0,
  style: "width:100%;background:transparent"
};
var De = ["xmlns", "viewBox"];
var We = ["id"];
var ze = ["stop-color"];
var Ge2 = ["stop-color"];
var Ee = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Ue = ["d", "stroke", "stroke-width"];
var He = ["stroke"];
var Re = ["fill"];
var Xe = ["stroke"];
var Ke = ["fill"];
var qe = ["stroke"];
var Ye = ["fill"];
var Je = ["stroke"];
var Qe = ["fill"];
var Ze = ["stroke"];
var et = ["fill"];
var tt = ["d", "stroke", "stroke-width", "fill"];
var lt = ["x1", "y1", "stroke"];
var ot = ["cx", "cy", "fill", "stroke"];
var at = ["fill", "stroke"];
var st = ["y", "fill", "font-weight"];
var rt = ["y", "fill"];
var nt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var ut = ["onClick"];
var it = { style: { "font-weight": "bold" } };
var dt = ["innerHTML"];
var ct = {
  __name: "vue-ui-mood-radar",
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
  setup(te, { expose: le }) {
    const u2 = te, { vue_ui_mood_radar: oe2 } = oe(), _ = computed(() => !!u2.dataset && Object.keys(u2.dataset).length);
    onMounted(() => {
      S();
    });
    function S() {
      Xt(u2.dataset) && Kt({
        componentName: "VueUiMoodRadar",
        type: "dataset"
      });
    }
    const w = ref(Lt()), V = ref(null), ae = ref(null), r = ref(null), se2 = ref(0), re = ref(0), j = ref(0), e = computed({
      get: () => B(),
      set: (l) => l
    });
    function B() {
      const l = c({
        userConfig: u2.config,
        defaultConfig: oe2
      });
      return l.theme ? {
        ...c({
          userConfig: Ge.vue_ui_mood_radar[l.theme] || u2.config,
          defaultConfig: l
        })
      } : l;
    }
    watch(() => u2.config, (l) => {
      e.value = B(), S(), se2.value += 1, re.value += 1, j.value += 1;
    }, { deep: true });
    const { isPrinting: D, isImaging: W2, generatePdf: z, generateImage: G } = se({
      elementId: w.value,
      fileName: e.value.style.chart.title.text || "vue-ui-mood-radar"
    }), N = ref({
      showTable: e.value.table.show
    }), p2 = computed(() => ({
      height: 256,
      width: 256
    })), I = computed(() => mt({
      plot: { x: 128, y: p2.value.height / 2 },
      radius: 90,
      sides: 5,
      rotation: 11
    }));
    function ne({ centerX: l, centerY: o, apexX: t, apexY: d, proportion: v, key: $, value: ve }) {
      return {
        x: l + (t - l) * v,
        y: o + (d - o) * v,
        key: $,
        value: ve
      };
    }
    const ue = computed(() => Math.max(...Object.values(u2.dataset).map((l) => isNaN(l) ? 0 : l))), x2 = computed(() => Object.values(u2.dataset).reduce((l, o) => (isNaN(l) ? 0 : l) + (isNaN(o) ? 0 : o), 0)), y = computed(() => Object.keys(u2.dataset).map((l, o) => {
      const t = typeof u2.dataset[l] != "number" || isNaN(u2.dataset[l]) ? 0 : u2.dataset[l];
      return {
        index: o,
        key: l,
        value: t,
        proportion: t / x2.value,
        color: e.value.style.chart.layout.smileys.colors[l]
      };
    }).sort((l, o) => o.key - l.key)), E = computed(() => _.value ? (["1", "2", "3", "4", "5"].forEach((l) => {
      [null, void 0].includes(u2.dataset[l]) && Kt({
        componentName: "VueUiMoodRadar",
        type: "datasetAttribute",
        property: l
      });
    }), I.value.coordinates.map((l, o) => {
      const t = ne({
        centerX: p2.value.width / 2,
        centerY: p2.value.height / 2,
        apexX: l.x,
        apexY: l.y,
        proportion: y.value[o].value / ue.value,
        key: y.value[o].key,
        value: y.value[o].value
      });
      return {
        ...l,
        plots: t,
        key: y.value[o].key
      };
    })) : []), ie2 = computed(() => ({
      cy: "mood-radar-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    }));
    function de(l) {
      l === r.value ? r.value = null : r.value = l;
    }
    const g = computed(() => {
      const l = y.value.map((t) => ({
        name: t.key,
        color: t.color
      })), o = y.value.map((t) => isNaN(t.value) ? 0 : t.value);
      return { head: l, body: o };
    });
    function U() {
      nextTick(() => {
        const l = g.value.head.map((d, v) => [[
          d.name
        ], [g.value.body[v]], [isNaN(g.value.body[v] / x2.value) ? "-" : g.value.body[v] / x2.value * 100]]), o = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(l), t = Nt(o);
        Ot({ csvContent: t, title: e.value.style.chart.title.text || "vue-ui-mood-radar" });
      });
    }
    const L = computed(() => {
      const l = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Number(x2.value.toFixed(e.value.table.td.roundingValue)).toLocaleString(),
        "100%"
      ], o = g.value.head.map((v, $) => [
        {
          color: v.color,
          name: v.name
        },
        g.value.body[$].toFixed(e.value.table.td.roundingValue),
        isNaN(g.value.body[$] / x2.value) ? "-" : (g.value.body[$] / x2.value * 100).toFixed(e.value.table.td.roundingPercentage) + "%"
      ]), t = {
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
      }, d = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ];
      return {
        head: l,
        body: o,
        config: t,
        colNames: d
      };
    });
    function ce() {
      return y.value;
    }
    function H() {
      N.value.showTable = !N.value.showTable;
    }
    const T = ref(false);
    function ye(l) {
      T.value = l;
    }
    return le({
      getData: ce,
      generatePdf: z,
      generateCsv: U,
      generateImage: G,
      toggleTable: H
    }), (l, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-mood-radar ${T.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "moodRadarChart",
      ref: V,
      id: `${w.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", Be, [
        createVNode(x, {
          config: {
            title: {
              cy: "mood-radar-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "mood-radar-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"])
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && _.value ? (openBlock(), createBlock(ie, {
        key: 1,
        ref_key: "details",
        ref: ae,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(D),
        isImaging: unref(W2),
        uid: w.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: V.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: ye,
        onGeneratePdf: unref(z),
        onGenerateCsv: U,
        onGenerateImage: unref(G),
        onToggleTable: H
      }, createSlots({ _: 2 }, [
        l.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        l.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        l.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        l.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        l.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: d }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: d })), void 0, true)
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      _.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        viewBox: `0 0 ${p2.value.width} ${p2.value.height}`,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": T.value, "vue-data-ui-fulscreen--off": !T.value }),
        style: normalizeStyle(`overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `mood_radar_gradient_${w.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(e.value.style.chart.layout.dataPolygon.color, e.value.style.chart.layout.dataPolygon.opacity)
            }, null, 8, ze),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(unref(pt)(e.value.style.chart.layout.dataPolygon.color, e.value.style.chart.layout.dataPolygon.gradient.intensity / 100), e.value.style.chart.layout.dataPolygon.opacity)
            }, null, 8, Ge2)
          ], 8, We)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(I.value.coordinates, (t) => (openBlock(), createElementBlock("line", {
          x1: p2.value.width / 2,
          y1: p2.value.height / 2,
          x2: t.x,
          y2: t.y,
          stroke: e.value.style.chart.layout.grid.stroke,
          "stroke-width": e.value.style.chart.layout.grid.strokeWidth
        }, null, 8, Ee))), 256)),
        createBaseVNode("path", {
          d: I.value.path,
          fill: "none",
          stroke: e.value.style.chart.layout.outerPolygon.stroke,
          "stroke-width": e.value.style.chart.layout.outerPolygon.strokeWidth,
          "stroke-linejoin": "round",
          "stroke-linecap": "round"
        }, null, 8, Ue),
        createBaseVNode("path", {
          fill: "none",
          stroke: e.value.style.chart.layout.smileys.colors[5],
          "stroke-width": "1",
          "stroke-linecap": "round",
          d: "M119 25A1 1 0 00137 25 1 1 0 00119 25M123 26C124 33 132 33 133 26L123 26M123 22A1 1 0 00126 22 1 1 0 00123 22M130 22A1 1 0 00133 22 1 1 0 00130 22"
        }, null, 8, He),
        createBaseVNode("circle", {
          class: "vue-ui-mood-radar-trap",
          onMouseenter: o[0] || (o[0] = (t) => r.value = 5),
          onMouseleave: o[1] || (o[1] = (t) => r.value = null),
          cx: "128",
          cy: "25",
          r: "20",
          fill: r.value === 5 ? unref(cr)(e.value.style.chart.layout.smileys.colors[5], 20) : "transparent"
        }, null, 40, Re),
        createBaseVNode("path", {
          fill: "none",
          stroke: e.value.style.chart.layout.smileys.colors[4],
          "stroke-width": "1",
          "stroke-linecap": "round",
          d: "M218 95A1 1 0 00236 95 1 1 0 00218 95M222 97C225 99 229 99 232 97M222 92A1 1 0 00225 92 1 1 0 00222 92M229 92A1 1 0 00232 92 1 1 0 00229 92"
        }, null, 8, Xe),
        createBaseVNode("circle", {
          class: "vue-ui-mood-radar-trap",
          onMouseenter: o[2] || (o[2] = (t) => r.value = 4),
          onMouseleave: o[3] || (o[3] = (t) => r.value = null),
          cx: "227",
          cy: "95.5",
          r: "20",
          fill: r.value === 4 ? unref(cr)(e.value.style.chart.layout.smileys.colors[4], 20) : "transparent"
        }, null, 40, Ke),
        createBaseVNode("path", {
          fill: "none",
          stroke: e.value.style.chart.layout.smileys.colors[3],
          "stroke-width": "1",
          "stroke-linecap": "round",
          d: "M181 213A1 1 0 00199 213 1 1 0 00181 213M185 210A1 1 0 00188 210 1 1 0 00185 210M192 210A1 1 0 00195 210 1 1 0 00192 210M185 215 195 215"
        }, null, 8, qe),
        createBaseVNode("circle", {
          class: "vue-ui-mood-radar-trap",
          onMouseenter: o[4] || (o[4] = (t) => r.value = 3),
          onMouseleave: o[5] || (o[5] = (t) => r.value = null),
          cx: "190",
          cy: "213.5",
          r: "20",
          fill: r.value === 3 ? unref(cr)(e.value.style.chart.layout.smileys.colors[3], 20) : "transparent"
        }, null, 40, Ye),
        createBaseVNode("path", {
          fill: "none",
          stroke: e.value.style.chart.layout.smileys.colors[2],
          "stroke-width": "1",
          "stroke-linecap": "round",
          d: "M56 213A1 1 0 0074 213 1 1 0 0056 213M60 216C63 214 67 214 70 216M60 210A1 1 0 0063 210 1 1 0 0060 210M67 210A1 1 0 0070 210 1 1 0 0067 210"
        }, null, 8, Je),
        createBaseVNode("circle", {
          class: "vue-ui-mood-radar-trap",
          onMouseenter: o[6] || (o[6] = (t) => r.value = 2),
          onMouseleave: o[7] || (o[7] = (t) => r.value = null),
          cx: "65",
          cy: "213.5",
          r: "20",
          fill: r.value === 2 ? unref(cr)(e.value.style.chart.layout.smileys.colors[2], 20) : "transparent"
        }, null, 40, Qe),
        createBaseVNode("path", {
          fill: "none",
          stroke: e.value.style.chart.layout.smileys.colors[1],
          "stroke-width": "1",
          "stroke-linecap": "round",
          d: "M20 96A1 1 0 0038 96 1 1 0 0020 96M24 100C25 95 33 95 34 100L24 100M24 93A1 1 0 0027 93 1 1 0 0024 93M31 93A1 1 0 0034 93 1 1 0 0031 93"
        }, null, 8, Ze),
        createBaseVNode("circle", {
          class: "vue-ui-mood-radar-trap",
          onMouseenter: o[8] || (o[8] = (t) => r.value = 1),
          onMouseleave: o[9] || (o[9] = (t) => r.value = null),
          cx: "29",
          cy: "95.5",
          r: "20",
          fill: r.value === 1 ? unref(cr)(e.value.style.chart.layout.smileys.colors[1], 20) : "transparent"
        }, null, 40, et),
        createBaseVNode("path", {
          d: unref(Tt)(E.value.map((t) => t.plots)),
          stroke: e.value.style.chart.layout.dataPolygon.stroke,
          "stroke-width": e.value.style.chart.layout.dataPolygon.strokeWidth,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          fill: e.value.style.chart.layout.dataPolygon.gradient.show ? `url(#mood_radar_gradient_${w.value})` : unref(cr)(e.value.style.chart.layout.dataPolygon.color, e.value.style.chart.layout.dataPolygon.opacity)
        }, null, 8, tt),
        (openBlock(true), createElementBlock(Fragment, null, renderList(E.value.map((t) => t.plots), (t, d) => (openBlock(), createElementBlock("g", {
          class: "vue-ui-mood-radar-trap",
          style: normalizeStyle(`opacity:${r.value == t.key ? "1" : "0"}`)
        }, [
          createBaseVNode("line", {
            x1: t.x,
            y1: t.y,
            x2: 128,
            y2: 128,
            stroke: e.value.style.chart.layout.smileys.colors[t.key]
          }, null, 8, lt),
          createBaseVNode("circle", {
            cx: t.x,
            cy: t.y,
            fill: e.value.style.chart.layout.smileys.colors[t.key],
            r: "3",
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": 0.5
          }, null, 8, ot),
          createBaseVNode("circle", {
            cx: 128,
            cy: 128,
            fill: e.value.style.chart.layout.smileys.colors[t.key],
            r: "3",
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": 0.5
          }, null, 8, at),
          createBaseVNode("text", {
            x: 128,
            y: ["5", 5].includes(t.key) ? 145 : 120,
            fill: e.value.style.chart.layout.dataLabel.color,
            "font-size": "12",
            "text-anchor": "middle",
            "font-weight": e.value.style.chart.layout.dataLabel.bold ? "bold" : "normal"
          }, toDisplayString(unref(nr)(
            e.value.style.chart.layout.dataLabel.formatter,
            t.value,
            unref(Gt)({
              p: e.value.style.chart.layout.dataLabel.prefix,
              v: t.value,
              s: e.value.style.chart.layout.dataLabel.suffix,
              r: e.value.style.chart.layout.dataLabel.roundingValue
            }),
            { datapoint: t, seriesIndex: d }
          )), 9, st),
          createBaseVNode("text", {
            x: 128,
            y: ["5", 5].includes(t.key) ? 163 : 102,
            fill: e.value.style.chart.layout.dataLabel.color,
            "font-size": "12",
            "text-anchor": "middle"
          }, " (" + toDisplayString(unref(Gt)({
            v: t.value / x2.value * 100,
            s: "%",
            r: e.value.style.chart.layout.dataLabel.roundingPercentage
          })) + ") ", 9, rt)
        ], 4))), 256)),
        renderSlot(l.$slots, "svg", { svg: p2.value }, void 0, true)
      ], 14, De)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", nt, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(D) || unref(W2) })), void 0, true)
      ])) : createCommentVNode("", true),
      _.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "radar",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            radar: {
              grid: {
                color: "#CCCCCC"
              },
              shapes: {
                color: "#CCCCCC"
              }
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
        legendSet: y.value,
        config: ie2.value,
        key: `legend_${j.value}`,
        style: { display: "flex", "row-gap": "6px" }
      }, {
        item: withCtx(({ legend: t, index: d }) => [
          createBaseVNode("div", {
            onClick: () => de(t.key),
            style: { display: "flex", "flex-direction": "row", gap: "3px", "align-items": "center", margin: "3px 0" }
          }, [
            t.key == 1 ? (openBlock(), createBlock(u, {
              key: 0,
              strokeWidth: 1,
              name: "moodSad",
              stroke: e.value.style.chart.layout.smileys.colors[t.key]
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            t.key == 2 ? (openBlock(), createBlock(u, {
              key: 1,
              strokeWidth: 1,
              name: "moodFlat",
              stroke: e.value.style.chart.layout.smileys.colors[t.key]
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            t.key == 3 ? (openBlock(), createBlock(u, {
              key: 2,
              strokeWidth: 1,
              name: "moodNeutral",
              stroke: e.value.style.chart.layout.smileys.colors[t.key]
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            t.key == 4 ? (openBlock(), createBlock(u, {
              key: 3,
              strokeWidth: 1,
              name: "smiley",
              stroke: e.value.style.chart.layout.smileys.colors[t.key]
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            t.key == 5 ? (openBlock(), createBlock(u, {
              key: 4,
              strokeWidth: 1,
              name: "moodHappy",
              stroke: e.value.style.chart.layout.smileys.colors[t.key]
            }, null, 8, ["stroke"])) : createCommentVNode("", true),
            createBaseVNode("span", it, toDisplayString(unref(nr)(
              e.value.style.chart.layout.dataLabel.formatter,
              t.value,
              unref(Gt)({
                p: e.value.style.chart.layout.dataLabel.prefix,
                v: t.value,
                s: e.value.style.chart.layout.dataLabel.suffix,
                r: e.value.style.chart.layout.dataLabel.roundingValue
              }),
              { datapoint: t, seriesIndex: d }
            )), 1),
            createTextVNode(" (" + toDisplayString(unref(Gt)({
              v: t.proportion * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })) + ") ", 1)
          ], 8, ut)
        ]),
        _: 1
      }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
      renderSlot(l.$slots, "legend", { legend: y.value }, void 0, true),
      _.value ? (openBlock(), createBlock(R, {
        key: 6,
        hideDetails: "",
        config: {
          open: N.value.showTable,
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
          createVNode(W, {
            colNames: L.value.colNames,
            head: L.value.head,
            body: L.value.body,
            config: L.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[10] || (o[10] = (t) => N.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createBaseVNode("div", {
                innerHTML: t,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, dt)
            ]),
            td: withCtx(({ td: t }) => [
              createTextVNode(toDisplayString(t.name || t), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"])
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, je));
  }
};
var wt = s(ct, [["__scopeId", "data-v-bded5f3b"]]);
export {
  wt as default
};
//# sourceMappingURL=vue-ui-mood-radar-DSznHxLS-WKSJGV57.js.map
