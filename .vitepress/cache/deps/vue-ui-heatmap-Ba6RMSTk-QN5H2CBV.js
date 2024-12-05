import {
  E
} from "./chunk-K5CEUZ2P.js";
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
import {
  u
} from "./chunk-PP6VIFVK.js";
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
  Vt,
  Xt,
  Yt,
  Zt,
  _t,
  cr,
  ir,
  jt,
  k,
  qt,
  te
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
  useCssVars,
  watch,
  withCtx,
  withKeys
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-heatmap-Ba6RMSTk.js
var ut = ["id"];
var nt = {
  key: 2,
  style: "width:100%;background:transparent"
};
var it = ["xmlns", "viewBox"];
var rt = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"];
var vt = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"];
var dt = ["font-size", "font-weight", "fill", "x", "y"];
var yt = ["x", "y", "width", "height", "onMouseover"];
var ct = { key: 0 };
var ht = ["font-size", "fill", "x", "y", "font-weight"];
var pt = { key: 0 };
var gt = ["text-anchor", "font-size", "fill", "font-weight", "transform"];
var ft = { key: 1 };
var bt = ["x", "y", "width", "height", "stroke", "stroke-width"];
var mt = { key: 2 };
var xt = ["id"];
var wt = ["stop-color"];
var _t2 = ["stop-color"];
var kt = ["x", "y", "font-size", "fill"];
var $t = ["x", "y", "height", "rx", "fill"];
var Ct = ["x", "y", "font-size", "fill"];
var Lt = ["stroke", "x1", "x2", "y1", "y2"];
var At = ["fill", "d"];
var Tt = { key: 3 };
var zt = {
  id: "colorScaleHorizontal",
  x1: "0%",
  x2: "100%",
  y1: "0%",
  y2: "0%"
};
var Mt = ["stop-color"];
var St = ["stop-color"];
var Ot = ["x", "y", "width", "height", "rx"];
var Nt2 = ["x", "y", "font-size", "fill"];
var Ft = ["x", "y", "font-size", "fill"];
var Pt = ["stroke", "x1", "x2", "y1", "y2"];
var Vt2 = ["fill", "d"];
var It = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var Bt = {
  key: 6,
  ref: "source",
  dir: "auto"
};
var Rt = { class: "vue-ui-data-table" };
var Et = { key: 0 };
var Gt = ["data-cell"];
var Xt2 = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Ht2 = ["data-cell"];
var Dt2 = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Ut = {
  __name: "vue-ui-heatmap",
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
  setup(D, { expose: $e }) {
    const r = D;
    useCssVars((t) => ({
      "309b083a": t.tdo
    }));
    const { vue_ui_heatmap: Ce } = te(), U = computed(() => !!r.dataset && r.dataset.length);
    jt(r.dataset) && qt({
      componentName: "VueUiHeatmap",
      type: "dataset"
    });
    const P = ref(Dt()), Y = ref(null), Le = ref(null), J = ref(false), Q = ref(""), ie = ref(void 0), V = ref(null), re2 = ref(0), ve = ref(null), Ae = ref(null), de = ref(false), ye = ref(0), e = computed({
      get: () => ce(),
      set: (t) => t
    });
    function ce() {
      const t = c({
        userConfig: r.config,
        defaultConfig: Ce
      });
      let a = {};
      return t.theme ? a = {
        ...c({
          userConfig: He.vue_ui_heatmap[t.theme] || r.config,
          defaultConfig: t
        })
      } : a = t, r.config && cr(r.config, "style.layout.dataLabels.xAxis.showOnlyAtModulo") ? a.style.layout.dataLabels.xAxis.showOnlyAtModulo = r.config.style.layout.dataLabels.xAxis.showOnlyAtModulo : a.style.layout.dataLabels.xAxis.showOnlyAtModulo = null, a;
    }
    watch(() => r.config, (t) => {
      e.value = ce(), Z(), ye.value += 1;
    }, { deep: true }), watch(() => r.dataset, () => {
      Z();
    }, { deep: true });
    const { isPrinting: he, isImaging: pe, generatePdf: ge, generateImage: fe } = re({
      elementId: `heatmap__${P.value}`,
      fileName: e.value.style.title.text || "vue-ui-heatmap"
    }), Te = computed(() => e.value.userOptions.show && !e.value.style.title.text), _ = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), ze = computed(() => e.value.table.responsiveBreakpoint);
    function Me() {
      new ResizeObserver((a) => {
        a.forEach((s2) => {
          de.value = s2.contentRect.width < ze.value;
        });
      }).observe(ve.value);
    }
    onMounted(Z);
    function Z() {
      Me();
    }
    const N = computed(() => Math.max(...r.dataset.flatMap((t) => (t.values || []).length))), k2 = computed(() => {
      const t = e.value.style.layout.padding.top + e.value.style.layout.padding.bottom + r.dataset.length * e.value.style.layout.cells.height, a = e.value.style.layout.padding.left + e.value.style.layout.padding.right + (N.value < r.dataset.length ? r.dataset.length : N.value) * e.value.style.layout.cells.height, s2 = t + (e.value.style.legend.show ? e.value.style.legend.position === "right" ? 0 : e.value.style.layout.cells.height * 2 : 0);
      return {
        height: t,
        heightWithLegend: s2,
        width: a
      };
    }), j = computed(() => e.value.style.legend.position), l = computed(() => ({
      top: e.value.style.layout.padding.top,
      left: e.value.style.layout.padding.left,
      right: k2.value.width - e.value.style.layout.padding.right - (j.value === "right" && e.value.style.legend.show ? 92 : 0),
      bottom: k2.value.height - e.value.style.layout.padding.bottom,
      height: k2.value.height - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom,
      width: k2.value.width - e.value.style.layout.padding.right - e.value.style.layout.padding.left - (j.value === "right" && e.value.style.legend.show ? 92 : 0)
    })), ee = computed(() => d.value.height * r.dataset.length), m = computed(() => Math.max(...r.dataset.flatMap((t) => t.values))), z = computed(() => Math.min(...r.dataset.flatMap((t) => t.values))), M = computed(() => {
      const t = r.dataset.flatMap((s2) => s2.values);
      return t.reduce((s2, v) => s2 + v, 0) / t.length;
    }), d = computed(() => ({
      width: l.value.width / N.value,
      height: l.value.width / (N.value < r.dataset.length ? r.dataset.length : N.value)
    })), $ = computed(() => {
      const t = e.value.style.layout.dataLabels.yAxis.values.length ? e.value.style.layout.dataLabels.yAxis.values : r.dataset.map((s2) => s2.name), a = e.value.style.layout.dataLabels.xAxis.values;
      return {
        yLabels: t,
        xLabels: a.slice(0, N.value)
      };
    }), W = computed(() => (r.dataset.forEach((t, a) => {
      Zt({
        datasetObject: t,
        requiredAttributes: ["values"]
      }).forEach((s2) => {
        qt({
          componentName: "VueUiHeatmap",
          type: "datasetSerieAttribute",
          property: "values",
          index: a
        });
      });
    }), r.dataset.map((t) => ({
      ...t,
      temperatures: (t.values || []).map((a, s2) => a >= M.value ? {
        side: "up",
        color: Yt(e.value.style.layout.cells.colors.cold, e.value.style.layout.cells.colors.hot, z.value, m.value, a),
        ratio: Math.abs(Math.abs(a - M.value) / Math.abs(m.value - M.value)) > 1 ? 1 : Math.abs(Math.abs(a - M.value) / Math.abs(m.value - M.value)),
        value: a,
        yAxisName: t.name,
        xAxisName: $.value.xLabels[s2],
        id: `vue-data-ui-heatmap-cell-${Dt()}`
      } : {
        side: "down",
        ratio: Math.abs(1 - Math.abs(a) / Math.abs(M.value)) > 1 ? 1 : Math.abs(1 - Math.abs(a) / Math.abs(M.value)),
        color: Yt(e.value.style.layout.cells.colors.cold, e.value.style.layout.cells.colors.hot, z.value, m.value, a),
        value: a,
        yAxisName: t.name,
        xAxisName: $.value.xLabels[s2],
        id: `vue-data-ui-heatmap-cell-${Dt()}`
      })
    })))), C = ref(null), I = ref(null);
    function Se2(t, a, s2, v) {
      V.value = { x: s2, y: v };
      const { value: y, yAxisName: g, xAxisName: L, id: Ne } = t;
      ie.value = Ne, C.value = y, I.value = {
        datapoint: t,
        seriesIndex: a,
        series: W.value,
        config: e.value
      }, J.value = true;
      let le = "";
      const ae2 = e.value.style.tooltip.customFormat;
      Xt(ae2) && Kt(() => ae2({
        datapoint: t,
        seriesIndex: a,
        series: W.value,
        config: e.value
      })) ? Q.value = ae2({
        datapoint: t,
        seriesIndex: a,
        series: W.value,
        config: e.value
      }) : (le += `<div>${g} ${L ? `${L}` : ""}</div>`, le += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor};font-weight:bold;display:flex;flex-direction:row;gap:12px;align-items:center;justify-content:center"><span style="color:${Yt(e.value.style.layout.cells.colors.cold, e.value.style.layout.cells.colors.hot, z.value, m.value, y)}">⬤</span><span>${isNaN(y) ? "-" : ir(
        e.value.style.layout.cells.value.formatter,
        y,
        Ht({
          p: e.value.style.layout.dataLabels.prefix,
          v: y,
          s: e.value.style.layout.dataLabels.suffix,
          r: e.value.style.tooltip.roundingValue
        }),
        { datapoint: t, seriesIndex: a }
      )}</span></div>`, Q.value = `<div style="font-size:${e.value.style.tooltip.fontSize}px">${le}</div>`);
    }
    const B = computed(() => l.value.top + ee.value * (1 - C.value / m.value)), R2 = computed(() => l.value.left + (k2.value.width - l.value.left - e.value.style.layout.padding.right) * (C.value / m.value));
    computed(() => {
      const t = r.dataset.map((s2) => ({
        name: s2.name
      })), a = r.dataset.map((s2) => s2.values);
      return { head: t, body: a };
    });
    function be() {
      nextTick(() => {
        const t = ["", ...r.dataset.map((y, g) => y.name)], a = [];
        for (let y = 0; y < $.value.xLabels.length; y += 1) {
          const g = [$.value.xLabels[y]];
          for (let L = 0; L < r.dataset.length; L += 1)
            g.push([r.dataset[L].values[y]]);
          a.push(g);
        }
        const s2 = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([t]).concat(a), v = Vt(s2);
        Nt({ csvContent: v, title: e.value.style.title.text || "vue-ui-heatmap" });
      });
    }
    const E2 = ref(false);
    function Oe(t) {
      E2.value = t, re2.value += 1;
    }
    function me() {
      _.value.showTable = !_.value.showTable;
    }
    function xe() {
      _.value.showTooltip = !_.value.showTooltip;
    }
    const q = ref(false);
    function te2() {
      q.value = !q.value;
    }
    return $e({
      generatePdf: ge,
      generateCsv: be,
      generateImage: fe,
      toggleTable: me,
      toggleTooltip: xe,
      toggleAnnotator: te2
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "heatmapChart",
      ref: Y,
      class: normalizeClass(`vue-ui-heatmap ${E2.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.backgroundColor}`),
      id: `heatmap__${P.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: Y.value,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        active: q.value,
        onClose: te2
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Te.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: Ae,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.title.text ? (openBlock(), createElementBlock("div", nt, [
        (openBlock(), createBlock(x, {
          key: `title_${ye.value}`,
          config: {
            title: {
              cy: "heatmap-div-title",
              ...e.value.style.title
            },
            subtitle: {
              cy: "heatmap-div-subtitle",
              ...e.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && U.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: Le,
        key: `user_options_${re2.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(pe),
        isPrinting: unref(he),
        uid: P.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: E2.value,
        isTooltip: _.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: Y.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: q.value,
        onToggleFullscreen: Oe,
        onGeneratePdf: unref(ge),
        onGenerateCsv: be,
        onGenerateImage: unref(fe),
        onToggleTable: me,
        onToggleTooltip: xe,
        onToggleAnnotator: te2
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
          fn: withCtx(({ toggleFullscreen: s2, isFullscreen: v }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: s2, isFullscreen: v })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: s2, isAnnotator: v }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: s2, isAnnotator: v })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      U.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": E2.value, "vue-data-ui-fulscreen--off": !E2.value }),
        viewBox: `0 0 ${k2.value.width} ${k2.value.heightWithLegend}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(W.value, (s2, v) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(s2.temperatures, (y, g) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("rect", {
              x: l.value.left + d.value.width * g + e.value.style.layout.cells.spacing / 2,
              y: l.value.top + d.value.height * v + e.value.style.layout.cells.spacing / 2,
              width: d.value.width - e.value.style.layout.cells.spacing,
              height: d.value.height - e.value.style.layout.cells.spacing,
              fill: e.value.style.layout.cells.colors.underlayer,
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.cells.spacing
            }, null, 8, rt),
            createBaseVNode("rect", {
              x: l.value.left + d.value.width * g + e.value.style.layout.cells.spacing / 2,
              y: l.value.top + d.value.height * v + e.value.style.layout.cells.spacing / 2,
              width: d.value.width - e.value.style.layout.cells.spacing,
              height: d.value.height - e.value.style.layout.cells.spacing,
              fill: y.color,
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.cells.spacing
            }, null, 8, vt),
            e.value.style.layout.cells.value.show ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": "middle",
              "font-size": e.value.style.layout.cells.value.fontSize,
              "font-weight": e.value.style.layout.cells.value.bold ? "bold" : "normal",
              fill: unref(_t)(y.color),
              x: l.value.left + d.value.width * g + d.value.width / 2,
              y: l.value.top + d.value.height * v + d.value.height / 2 + e.value.style.layout.cells.value.fontSize / 3
            }, toDisplayString(unref(ir)(
              e.value.style.layout.cells.value.formatter,
              y.value,
              unref(Ht)({
                p: e.value.style.layout.dataLabels.prefix,
                v: y.value,
                s: e.value.style.layout.dataLabels.suffix,
                r: e.value.style.layout.cells.value.roundingValue
              }),
              { datapoint: y }
            )), 9, dt)) : createCommentVNode("", true)
          ]))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(s2.temperatures, (y, g) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("rect", {
              x: l.value.left + d.value.width * g,
              y: l.value.top + d.value.height * v,
              width: d.value.width,
              height: d.value.height,
              fill: "transparent",
              stroke: "none",
              onMouseover: (L) => Se2(y, v, l.value.left + d.value.width * g, l.value.top + d.value.height * v),
              onMouseout: a[0] || (a[0] = (L) => {
                J.value = false, ie.value = void 0, C.value = null, V.value = null;
              })
            }, null, 40, yt)
          ]))), 256)),
          e.value.style.layout.dataLabels.yAxis.show ? (openBlock(), createElementBlock("g", ct, [
            createBaseVNode("text", {
              "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
              fill: e.value.style.layout.dataLabels.yAxis.color,
              x: l.value.left + e.value.style.layout.dataLabels.yAxis.offsetX - 6,
              y: l.value.top + d.value.height * v + d.value.height / 2 + e.value.style.layout.dataLabels.yAxis.fontSize / 3 + e.value.style.layout.dataLabels.yAxis.offsetY,
              "text-anchor": "end",
              "font-weight": e.value.style.layout.dataLabels.yAxis.bold ? "bold" : "normal"
            }, toDisplayString($.value.yLabels[v]), 9, ht)
          ])) : createCommentVNode("", true)
        ]))), 256)),
        e.value.style.layout.dataLabels.xAxis.show ? (openBlock(), createElementBlock("g", pt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($.value.xLabels, (s2, v) => (openBlock(), createElementBlock(Fragment, null, [
            !e.value.style.layout.dataLabels.xAxis.showOnlyAtModulo || e.value.style.layout.dataLabels.xAxis.showOnlyAtModulo && v % e.value.style.layout.dataLabels.xAxis.showOnlyAtModulo === 0 ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": e.value.style.layout.dataLabels.xAxis.rotation === 0 ? "middle" : e.value.style.layout.dataLabels.xAxis.rotation < 0 ? "start" : "end",
              "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
              fill: e.value.style.layout.dataLabels.xAxis.color,
              "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal",
              transform: `translate(${l.value.left + d.value.width / 2 + l.value.width / $.value.xLabels.length * v + e.value.style.layout.dataLabels.xAxis.offsetX}, ${l.value.top + e.value.style.layout.dataLabels.xAxis.offsetY - 6}), rotate(${e.value.style.layout.dataLabels.xAxis.rotation})`
            }, toDisplayString(s2), 9, gt)) : createCommentVNode("", true)
          ], 64))), 256))
        ])) : createCommentVNode("", true),
        V.value ? (openBlock(), createElementBlock("g", ft, [
          createBaseVNode("rect", {
            style: { "pointer-events": "none" },
            x: V.value.x - e.value.style.layout.cells.selected.border / 2 + e.value.style.layout.cells.spacing,
            y: V.value.y - e.value.style.layout.cells.selected.border / 2 + e.value.style.layout.cells.spacing,
            width: d.value.width - e.value.style.layout.cells.spacing + e.value.style.layout.cells.selected.border - e.value.style.layout.cells.spacing,
            height: d.value.height - e.value.style.layout.cells.spacing + e.value.style.layout.cells.selected.border - e.value.style.layout.cells.spacing,
            fill: "transparent",
            stroke: e.value.style.layout.cells.selected.color,
            "stroke-width": e.value.style.layout.cells.selected.border,
            rx: 1
          }, null, 8, bt)
        ])) : createCommentVNode("", true),
        e.value.style.legend.show && j.value === "right" ? (openBlock(), createElementBlock("g", mt, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `colorScaleVertical_${P.value}`,
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.cells.colors.hot
              }, null, 8, wt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.layout.cells.colors.cold
              }, null, 8, _t2)
            ], 8, xt)
          ]),
          createBaseVNode("text", {
            x: l.value.right + 36 + 18,
            y: l.value.top - e.value.style.legend.fontSize * 1.5,
            "text-anchor": "middle",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(m.value),
            unref(Ht)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(m.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, kt),
          createBaseVNode("rect", {
            x: l.value.right + 36,
            y: l.value.top,
            width: 36,
            height: ee.value,
            rx: e.value.style.legend.scaleBorderRadius,
            fill: `url(#colorScaleVertical_${P.value})`
          }, null, 8, $t),
          createBaseVNode("text", {
            x: l.value.right + 36 + 18,
            y: l.value.top + ee.value + e.value.style.legend.fontSize * 2.5,
            "text-anchor": "middle",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(z.value),
            unref(Ht)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(z.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, Ct),
          C.value !== null ? (openBlock(), createElementBlock("line", {
            key: 0,
            stroke: unref(_t)(I.value.datapoint.color),
            "stroke-width": "2",
            x1: l.value.right + 36,
            x2: l.value.right + 72,
            y1: B.value,
            y2: B.value
          }, null, 8, Lt)) : createCommentVNode("", true),
          C.value !== null ? (openBlock(), createElementBlock("path", {
            key: 1,
            fill: e.value.style.color,
            stroke: "none",
            d: `M ${l.value.right + 36},${B.value} ${l.value.right + 26},${B.value - 8} ${l.value.right + 26},${B.value + 8}z`
          }, null, 8, At)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.legend.show && j.value === "bottom" ? (openBlock(), createElementBlock("g", Tt, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", zt, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.cells.colors.cold
              }, null, 8, Mt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.layout.cells.colors.hot
              }, null, 8, St)
            ])
          ]),
          createBaseVNode("rect", {
            x: l.value.left,
            y: l.value.bottom + e.value.style.layout.cells.height,
            width: k2.value.width - l.value.left - e.value.style.layout.padding.right,
            height: e.value.style.layout.cells.height,
            rx: e.value.style.legend.scaleBorderRadius > e.value.style.layout.cells.height / 2 ? e.value.style.layout.cells.height / 2 : e.value.style.legend.scaleBorderRadius,
            fill: "url(#colorScaleHorizontal)"
          }, null, 8, Ot),
          createBaseVNode("text", {
            x: l.value.left,
            y: l.value.bottom + e.value.style.layout.cells.height * 2 + e.value.style.legend.fontSize * 2,
            "text-anchor": "start",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(z.value),
            unref(Ht)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(z.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, Nt2),
          createBaseVNode("text", {
            x: l.value.right,
            y: l.value.bottom + e.value.style.layout.cells.height * 2 + e.value.style.legend.fontSize * 2,
            "text-anchor": "end",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(ir)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(m.value),
            unref(Ht)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(m.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, Ft),
          C.value !== null ? (openBlock(), createElementBlock("line", {
            key: 0,
            stroke: unref(_t)(I.value.datapoint.color),
            "stroke-width": "2",
            x1: R2.value,
            x2: R2.value,
            y1: l.value.bottom + e.value.style.layout.cells.height,
            y2: l.value.bottom + e.value.style.layout.cells.height * 2
          }, null, 8, Pt)) : createCommentVNode("", true),
          C.value !== null ? (openBlock(), createElementBlock("path", {
            key: 1,
            fill: e.value.style.color,
            stroke: "none",
            d: `M ${R2.value},${l.value.bottom + e.value.style.layout.cells.height} ${R2.value - 12},${l.value.bottom + e.value.style.layout.cells.height - 20} ${R2.value + 12},${l.value.bottom + e.value.style.layout.cells.height - 20}z`
          }, null, 8, Vt2)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: k2.value }, void 0, true)
      ], 14, it)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", It, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(he) || unref(pe) })), void 0, true)
      ])) : createCommentVNode("", true),
      t.$slots.source ? (openBlock(), createElementBlock("div", Bt, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      U.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
        config: {
          type: "heatmap",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            heatmap: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createVNode(E, {
        show: _.value.showTooltip && J.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: Y.value,
        content: Q.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...I.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...I.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      U.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: _.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: e.value.style.backgroundColor,
            color: e.value.style.color
          },
          head: {
            backgroundColor: e.value.style.backgroundColor,
            color: e.value.style.color
          }
        }
      }, {
        content: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "tableContainer",
            ref: ve,
            class: "vue-ui-heatmap-table"
          }, [
            createBaseVNode("div", {
              style: "width:100%;overflow-x:auto;padding-top:36px;position:relative",
              class: normalizeClass({ "vue-ui-responsive": de.value })
            }, [
              createBaseVNode("div", {
                role: "button",
                tabindex: "0",
                style: normalizeStyle(`width:32px; position: absolute; top: 0; left:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${e.value.table.th.backgroundColor};`),
                onClick: a[1] || (a[1] = (s2) => _.value.showTable = false),
                onKeypress: a[2] || (a[2] = withKeys((s2) => _.value.showTable = false, ["enter"]))
              }, [
                createVNode(u, {
                  name: "close",
                  stroke: e.value.table.th.color,
                  "stroke-width": 2
                }, null, 8, ["stroke"])
              ], 36),
              createBaseVNode("table", Rt, [
                createBaseVNode("caption", {
                  style: normalizeStyle(`backgroundColor:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                }, [
                  createTextVNode(toDisplayString(e.value.style.title.text) + " ", 1),
                  e.value.style.title.subtitle.text ? (openBlock(), createElementBlock("span", Et, toDisplayString(e.value.style.title.subtitle.text), 1)) : createCommentVNode("", true)
                ], 4),
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", {
                    role: "row",
                    style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color}`)
                  }, [
                    createBaseVNode("th", {
                      style: normalizeStyle(`outline:${e.value.table.th.outline};padding-right:6px`)
                    }, null, 4),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(D.dataset, (s2, v) => (openBlock(), createElementBlock("th", {
                      align: "right",
                      style: normalizeStyle(`outline:${e.value.table.th.outline};padding-right:6px`)
                    }, toDisplayString(s2.name), 5))), 256))
                  ], 4)
                ]),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($.value.xLabels, (s2, v) => (openBlock(), createElementBlock("tr", {
                    role: "row",
                    class: normalizeClass({ "vue-ui-data-table__tbody__row": true, "vue-ui-data-table__tbody__row-even": v % 2 === 0, "vue-ui-data-table__tbody__row-odd": v % 2 !== 0 }),
                    style: normalizeStyle(`background:${e.value.table.td.backgroundColor};color:${e.value.table.td.color}`)
                  }, [
                    createBaseVNode("td", {
                      "data-cell": e.value.table.colNames.xAxis,
                      class: "vue-ui-data-table__tbody__td",
                      style: normalizeStyle(`outline:${e.value.table.td.outline}`)
                    }, [
                      createBaseVNode("div", Xt2, toDisplayString(s2), 1)
                    ], 12, Gt),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(D.dataset, (y, g) => (openBlock(), createElementBlock("td", {
                      class: "vue-ui-data-table__tbody__td",
                      "data-cell": D.dataset[g].name,
                      style: normalizeStyle(`outline:${e.value.table.td.outline}`)
                    }, [
                      createBaseVNode("div", Dt2, toDisplayString(isNaN(y.values[v]) ? "-" : unref(Ht)({ p: e.value.style.layout.dataLabels.prefix, v: y.values[v], s: e.value.style.layout.dataLabels.suffix, r: e.value.table.td.roundingValue })), 1)
                    ], 12, Ht2))), 256))
                  ], 6))), 256))
                ])
              ])
            ], 2)
          ], 512)
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, ut));
  }
};
var ol = s(Ut, [["__scopeId", "data-v-569c98af"]]);
export {
  ol as default
};
//# sourceMappingURL=vue-ui-heatmap-Ba6RMSTk-QN5H2CBV.js.map
