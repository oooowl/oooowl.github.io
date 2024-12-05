import {
  E
} from "./chunk-57X6EWGW.js";
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
  $t,
  Ge,
  Gt,
  Ht,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  Ut,
  Xt,
  k,
  nr,
  oe,
  qt,
  sr,
  xt
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
  useCssVars,
  watch,
  withCtx,
  withKeys
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-heatmap-B-zWMk0Y.js
var tt = ["id"];
var lt = {
  key: 0,
  style: "width:100%;background:transparent"
};
var at = ["xmlns", "viewBox"];
var ot = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"];
var st = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"];
var ut = ["font-size", "font-weight", "fill", "x", "y"];
var nt = ["x", "y", "width", "height", "onMouseover"];
var it = { key: 0 };
var rt = ["font-size", "fill", "x", "y", "font-weight"];
var vt = { key: 0 };
var dt = ["text-anchor", "font-size", "fill", "font-weight", "transform"];
var yt = { key: 1 };
var ct = ["x", "y", "width", "height", "stroke", "stroke-width"];
var ht = { key: 2 };
var pt = ["id"];
var gt = ["stop-color"];
var ft = ["stop-color"];
var bt = ["x", "y", "font-size", "fill"];
var mt = ["x", "y", "height", "rx", "fill"];
var xt2 = ["x", "y", "font-size", "fill"];
var wt = ["stroke", "x1", "x2", "y1", "y2"];
var _t = ["fill", "d"];
var kt = { key: 3 };
var $t2 = {
  id: "colorScaleHorizontal",
  x1: "0%",
  x2: "100%",
  y1: "0%",
  y2: "0%"
};
var Ct = ["stop-color"];
var Lt2 = ["stop-color"];
var At = ["x", "y", "width", "height", "rx"];
var zt = ["x", "y", "font-size", "fill"];
var Tt = ["x", "y", "font-size", "fill"];
var Mt = ["stroke", "x1", "x2", "y1", "y2"];
var St = ["fill", "d"];
var Nt2 = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Ot2 = { class: "vue-ui-data-table" };
var Ft = { key: 0 };
var Vt = ["data-cell"];
var Pt = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var It = ["data-cell"];
var Bt = { style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" } };
var Rt = {
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
  setup(G, { expose: _e }) {
    const r = G;
    useCssVars((t) => ({
      "1678b056": t.tdo
    }));
    const { vue_ui_heatmap: ke } = oe(), X = computed(() => !!r.dataset && r.dataset.length);
    Xt(r.dataset) && Kt({
      componentName: "VueUiHeatmap",
      type: "dataset"
    });
    const V = ref(Lt()), q = ref(null), $e = ref(null), K = ref(false), J = ref(""), ue = ref(void 0), P = ref(null), ne = ref(0), ie2 = ref(null), re = ref(false), ve = ref(0), e = computed({
      get: () => de(),
      set: (t) => t
    });
    function de() {
      const t = c({
        userConfig: r.config,
        defaultConfig: ke
      });
      let a = {};
      return t.theme ? a = {
        ...c({
          userConfig: Ge.vue_ui_heatmap[t.theme] || r.config,
          defaultConfig: t
        })
      } : a = t, r.config && sr(r.config, "style.layout.dataLabels.xAxis.showOnlyAtModulo") ? a.style.layout.dataLabels.xAxis.showOnlyAtModulo = r.config.style.layout.dataLabels.xAxis.showOnlyAtModulo : a.style.layout.dataLabels.xAxis.showOnlyAtModulo = null, a;
    }
    watch(() => r.config, (t) => {
      e.value = de(), Q(), ve.value += 1;
    }, { deep: true }), watch(() => r.dataset, () => {
      Q();
    }, { deep: true });
    const { isPrinting: ye, isImaging: ce, generatePdf: he, generateImage: pe } = se({
      elementId: `heatmap__${V.value}`,
      fileName: e.value.style.title.text || "vue-ui-heatmap"
    }), w = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), Ce = computed(() => e.value.table.responsiveBreakpoint);
    function Le() {
      new ResizeObserver((a) => {
        a.forEach((o) => {
          re.value = o.contentRect.width < Ce.value;
        });
      }).observe(ie2.value);
    }
    onMounted(Q);
    function Q() {
      Le();
    }
    const O = computed(() => Math.max(...r.dataset.flatMap((t) => (t.values || []).length))), _ = computed(() => {
      const t = e.value.style.layout.padding.top + e.value.style.layout.padding.bottom + r.dataset.length * e.value.style.layout.cells.height, a = e.value.style.layout.padding.left + e.value.style.layout.padding.right + (O.value < r.dataset.length ? r.dataset.length : O.value) * e.value.style.layout.cells.height, o = t + (e.value.style.legend.show ? e.value.style.legend.position === "right" ? 0 : e.value.style.layout.cells.height * 2 : 0);
      return {
        height: t,
        heightWithLegend: o,
        width: a
      };
    }), H = computed(() => e.value.style.legend.position), l = computed(() => ({
      top: e.value.style.layout.padding.top,
      left: e.value.style.layout.padding.left,
      right: _.value.width - e.value.style.layout.padding.right - (H.value === "right" && e.value.style.legend.show ? 92 : 0),
      bottom: _.value.height - e.value.style.layout.padding.bottom,
      height: _.value.height - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom,
      width: _.value.width - e.value.style.layout.padding.right - e.value.style.layout.padding.left - (H.value === "right" && e.value.style.legend.show ? 92 : 0)
    })), Z = computed(() => d.value.height * r.dataset.length), b = computed(() => Math.max(...r.dataset.flatMap((t) => t.values))), T = computed(() => Math.min(...r.dataset.flatMap((t) => t.values))), M = computed(() => {
      const t = r.dataset.flatMap((o) => o.values);
      return t.reduce((o, v) => o + v, 0) / t.length;
    }), d = computed(() => ({
      width: l.value.width / O.value,
      height: l.value.width / (O.value < r.dataset.length ? r.dataset.length : O.value)
    })), $ = computed(() => {
      const t = e.value.style.layout.dataLabels.yAxis.values.length ? e.value.style.layout.dataLabels.yAxis.values : r.dataset.map((o) => o.name), a = e.value.style.layout.dataLabels.xAxis.values;
      return {
        yLabels: t,
        xLabels: a.slice(0, O.value)
      };
    }), D = computed(() => (r.dataset.forEach((t, a) => {
      qt({
        datasetObject: t,
        requiredAttributes: ["values"]
      }).forEach((o) => {
        Kt({
          componentName: "VueUiHeatmap",
          type: "datasetSerieAttribute",
          property: "values",
          index: a
        });
      });
    }), r.dataset.map((t) => ({
      ...t,
      temperatures: (t.values || []).map((a, o) => a >= M.value ? {
        side: "up",
        color: Ut(e.value.style.layout.cells.colors.cold, e.value.style.layout.cells.colors.hot, T.value, b.value, a),
        ratio: Math.abs(Math.abs(a - M.value) / Math.abs(b.value - M.value)) > 1 ? 1 : Math.abs(Math.abs(a - M.value) / Math.abs(b.value - M.value)),
        value: a,
        yAxisName: t.name,
        xAxisName: $.value.xLabels[o],
        id: `vue-data-ui-heatmap-cell-${Lt()}`
      } : {
        side: "down",
        ratio: Math.abs(1 - Math.abs(a) / Math.abs(M.value)) > 1 ? 1 : Math.abs(1 - Math.abs(a) / Math.abs(M.value)),
        color: Ut(e.value.style.layout.cells.colors.cold, e.value.style.layout.cells.colors.hot, T.value, b.value, a),
        value: a,
        yAxisName: t.name,
        xAxisName: $.value.xLabels[o],
        id: `vue-data-ui-heatmap-cell-${Lt()}`
      })
    })))), C = ref(null), I = ref(null);
    function Ae(t, a, o, v) {
      P.value = { x: o, y: v };
      const { value: y, yAxisName: g, xAxisName: L, id: Te } = t;
      ue.value = Te, C.value = y, I.value = {
        datapoint: t,
        seriesIndex: a,
        series: D.value,
        config: e.value
      }, K.value = true;
      let ee = "";
      const te = e.value.style.tooltip.customFormat;
      Ht(te) && $t(() => te({
        datapoint: t,
        seriesIndex: a,
        series: D.value,
        config: e.value
      })) ? J.value = te({
        datapoint: t,
        seriesIndex: a,
        series: D.value,
        config: e.value
      }) : (ee += `<div>${g} ${L ? `${L}` : ""}</div>`, ee += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor};font-weight:bold;display:flex;flex-direction:row;gap:12px;align-items:center;justify-content:center"><span style="color:${Ut(e.value.style.layout.cells.colors.cold, e.value.style.layout.cells.colors.hot, T.value, b.value, y)}">⬤</span><span>${isNaN(y) ? "-" : nr(
        e.value.style.layout.cells.value.formatter,
        y,
        Gt({
          p: e.value.style.layout.dataLabels.prefix,
          v: y,
          s: e.value.style.layout.dataLabels.suffix,
          r: e.value.style.tooltip.roundingValue
        }),
        { datapoint: t, seriesIndex: a }
      )}</span></div>`, J.value = `<div style="font-size:${e.value.style.tooltip.fontSize}px">${ee}</div>`);
    }
    const B = computed(() => l.value.top + Z.value * (1 - C.value / b.value)), R2 = computed(() => l.value.left + (_.value.width - l.value.left - e.value.style.layout.padding.right) * (C.value / b.value));
    computed(() => {
      const t = r.dataset.map((o) => ({
        name: o.name
      })), a = r.dataset.map((o) => o.values);
      return { head: t, body: a };
    });
    function ge() {
      nextTick(() => {
        const t = ["", ...r.dataset.map((y, g) => y.name)], a = [];
        for (let y = 0; y < $.value.xLabels.length; y += 1) {
          const g = [$.value.xLabels[y]];
          for (let L = 0; L < r.dataset.length; L += 1)
            g.push([r.dataset[L].values[y]]);
          a.push(g);
        }
        const o = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([t]).concat(a), v = Nt(o);
        Ot({ csvContent: v, title: e.value.style.title.text || "vue-ui-heatmap" });
      });
    }
    const E2 = ref(false);
    function ze(t) {
      E2.value = t, ne.value += 1;
    }
    function fe() {
      w.value.showTable = !w.value.showTable;
    }
    function be() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    return _e({
      generatePdf: he,
      generateCsv: ge,
      generateImage: pe,
      toggleTable: fe,
      toggleTooltip: be
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "heatmapChart",
      ref: q,
      class: normalizeClass(`vue-ui-heatmap ${E2.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.title.text ? "" : "padding-top:36px"};background:${e.value.style.backgroundColor}`),
      id: `heatmap__${V.value}`
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", lt, [
        (openBlock(), createBlock(x, {
          key: `title_${ve.value}`,
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
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: $e,
        key: `user_options_${ne.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(ce),
        isPrinting: unref(ye),
        uid: V.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: E2.value,
        isTooltip: w.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: q.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: ze,
        onGeneratePdf: unref(he),
        onGenerateCsv: ge,
        onGenerateImage: unref(pe),
        onToggleTable: fe,
        onToggleTooltip: be
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
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: v }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: v })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": E2.value, "vue-data-ui-fulscreen--off": !E2.value }),
        viewBox: `0 0 ${_.value.width} ${_.value.heightWithLegend}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (o, v) => (openBlock(), createElementBlock("g", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(o.temperatures, (y, g) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("rect", {
              x: l.value.left + d.value.width * g + e.value.style.layout.cells.spacing / 2,
              y: l.value.top + d.value.height * v + e.value.style.layout.cells.spacing / 2,
              width: d.value.width - e.value.style.layout.cells.spacing,
              height: d.value.height - e.value.style.layout.cells.spacing,
              fill: e.value.style.layout.cells.colors.underlayer,
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.cells.spacing
            }, null, 8, ot),
            createBaseVNode("rect", {
              x: l.value.left + d.value.width * g + e.value.style.layout.cells.spacing / 2,
              y: l.value.top + d.value.height * v + e.value.style.layout.cells.spacing / 2,
              width: d.value.width - e.value.style.layout.cells.spacing,
              height: d.value.height - e.value.style.layout.cells.spacing,
              fill: y.color,
              stroke: e.value.style.backgroundColor,
              "stroke-width": e.value.style.layout.cells.spacing
            }, null, 8, st),
            e.value.style.layout.cells.value.show ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": "middle",
              "font-size": e.value.style.layout.cells.value.fontSize,
              "font-weight": e.value.style.layout.cells.value.bold ? "bold" : "normal",
              fill: unref(xt)(y.color),
              x: l.value.left + d.value.width * g + d.value.width / 2,
              y: l.value.top + d.value.height * v + d.value.height / 2 + e.value.style.layout.cells.value.fontSize / 3
            }, toDisplayString(unref(nr)(
              e.value.style.layout.cells.value.formatter,
              y.value,
              unref(Gt)({
                p: e.value.style.layout.dataLabels.prefix,
                v: y.value,
                s: e.value.style.layout.dataLabels.suffix,
                r: e.value.style.layout.cells.value.roundingValue
              }),
              { datapoint: y }
            )), 9, ut)) : createCommentVNode("", true)
          ]))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(o.temperatures, (y, g) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("rect", {
              x: l.value.left + d.value.width * g,
              y: l.value.top + d.value.height * v,
              width: d.value.width,
              height: d.value.height,
              fill: "transparent",
              stroke: "none",
              onMouseover: (L) => Ae(y, v, l.value.left + d.value.width * g, l.value.top + d.value.height * v),
              onMouseout: a[0] || (a[0] = (L) => {
                K.value = false, ue.value = void 0, C.value = null, P.value = null;
              })
            }, null, 40, nt)
          ]))), 256)),
          e.value.style.layout.dataLabels.yAxis.show ? (openBlock(), createElementBlock("g", it, [
            createBaseVNode("text", {
              "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
              fill: e.value.style.layout.dataLabels.yAxis.color,
              x: l.value.left + e.value.style.layout.dataLabels.yAxis.offsetX - 6,
              y: l.value.top + d.value.height * v + d.value.height / 2 + e.value.style.layout.dataLabels.yAxis.fontSize / 3 + e.value.style.layout.dataLabels.yAxis.offsetY,
              "text-anchor": "end",
              "font-weight": e.value.style.layout.dataLabels.yAxis.bold ? "bold" : "normal"
            }, toDisplayString($.value.yLabels[v]), 9, rt)
          ])) : createCommentVNode("", true)
        ]))), 256)),
        e.value.style.layout.dataLabels.xAxis.show ? (openBlock(), createElementBlock("g", vt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($.value.xLabels, (o, v) => (openBlock(), createElementBlock(Fragment, null, [
            !e.value.style.layout.dataLabels.xAxis.showOnlyAtModulo || e.value.style.layout.dataLabels.xAxis.showOnlyAtModulo && v % e.value.style.layout.dataLabels.xAxis.showOnlyAtModulo === 0 ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": e.value.style.layout.dataLabels.xAxis.rotation === 0 ? "middle" : e.value.style.layout.dataLabels.xAxis.rotation < 0 ? "start" : "end",
              "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
              fill: e.value.style.layout.dataLabels.xAxis.color,
              "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal",
              transform: `translate(${l.value.left + d.value.width / 2 + l.value.width / $.value.xLabels.length * v + e.value.style.layout.dataLabels.xAxis.offsetX}, ${l.value.top + e.value.style.layout.dataLabels.xAxis.offsetY - 6}), rotate(${e.value.style.layout.dataLabels.xAxis.rotation})`
            }, toDisplayString(o), 9, dt)) : createCommentVNode("", true)
          ], 64))), 256))
        ])) : createCommentVNode("", true),
        P.value ? (openBlock(), createElementBlock("g", yt, [
          createBaseVNode("rect", {
            style: { "pointer-events": "none" },
            x: P.value.x - e.value.style.layout.cells.selected.border / 2 + e.value.style.layout.cells.spacing,
            y: P.value.y - e.value.style.layout.cells.selected.border / 2 + e.value.style.layout.cells.spacing,
            width: d.value.width - e.value.style.layout.cells.spacing + e.value.style.layout.cells.selected.border - e.value.style.layout.cells.spacing,
            height: d.value.height - e.value.style.layout.cells.spacing + e.value.style.layout.cells.selected.border - e.value.style.layout.cells.spacing,
            fill: "transparent",
            stroke: e.value.style.layout.cells.selected.color,
            "stroke-width": e.value.style.layout.cells.selected.border,
            rx: 1
          }, null, 8, ct)
        ])) : createCommentVNode("", true),
        e.value.style.legend.show && H.value === "right" ? (openBlock(), createElementBlock("g", ht, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", {
              id: `colorScaleVertical_${V.value}`,
              x2: "0%",
              y2: "100%"
            }, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.cells.colors.hot
              }, null, 8, gt),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.layout.cells.colors.cold
              }, null, 8, ft)
            ], 8, pt)
          ]),
          createBaseVNode("text", {
            x: l.value.right + 36 + 18,
            y: l.value.top - e.value.style.legend.fontSize * 1.5,
            "text-anchor": "middle",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(b.value),
            unref(Gt)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(b.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, bt),
          createBaseVNode("rect", {
            x: l.value.right + 36,
            y: l.value.top,
            width: 36,
            height: Z.value,
            rx: e.value.style.legend.scaleBorderRadius,
            fill: `url(#colorScaleVertical_${V.value})`
          }, null, 8, mt),
          createBaseVNode("text", {
            x: l.value.right + 36 + 18,
            y: l.value.top + Z.value + e.value.style.legend.fontSize * 2.5,
            "text-anchor": "middle",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(T.value),
            unref(Gt)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(T.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, xt2),
          C.value !== null ? (openBlock(), createElementBlock("line", {
            key: 0,
            stroke: unref(xt)(I.value.datapoint.color),
            "stroke-width": "2",
            x1: l.value.right + 36,
            x2: l.value.right + 72,
            y1: B.value,
            y2: B.value
          }, null, 8, wt)) : createCommentVNode("", true),
          C.value !== null ? (openBlock(), createElementBlock("path", {
            key: 1,
            fill: e.value.style.color,
            stroke: "none",
            d: `M ${l.value.right + 36},${B.value} ${l.value.right + 26},${B.value - 8} ${l.value.right + 26},${B.value + 8}z`
          }, null, 8, _t)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.legend.show && H.value === "bottom" ? (openBlock(), createElementBlock("g", kt, [
          createBaseVNode("defs", null, [
            createBaseVNode("linearGradient", $t2, [
              createBaseVNode("stop", {
                offset: "0%",
                "stop-color": e.value.style.layout.cells.colors.cold
              }, null, 8, Ct),
              createBaseVNode("stop", {
                offset: "100%",
                "stop-color": e.value.style.layout.cells.colors.hot
              }, null, 8, Lt2)
            ])
          ]),
          createBaseVNode("rect", {
            x: l.value.left,
            y: l.value.bottom + e.value.style.layout.cells.height,
            width: _.value.width - l.value.left - e.value.style.layout.padding.right,
            height: e.value.style.layout.cells.height,
            rx: e.value.style.legend.scaleBorderRadius > e.value.style.layout.cells.height / 2 ? e.value.style.layout.cells.height / 2 : e.value.style.legend.scaleBorderRadius,
            fill: "url(#colorScaleHorizontal)"
          }, null, 8, At),
          createBaseVNode("text", {
            x: l.value.left,
            y: l.value.bottom + e.value.style.layout.cells.height * 2 + e.value.style.legend.fontSize * 2,
            "text-anchor": "start",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(T.value),
            unref(Gt)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(T.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, zt),
          createBaseVNode("text", {
            x: l.value.right,
            y: l.value.bottom + e.value.style.layout.cells.height * 2 + e.value.style.legend.fontSize * 2,
            "text-anchor": "end",
            "font-size": e.value.style.legend.fontSize * 2,
            fill: e.value.style.legend.color
          }, toDisplayString(unref(nr)(
            e.value.style.layout.cells.value.formatter,
            unref(k)(b.value),
            unref(Gt)({
              p: e.value.style.layout.dataLabels.prefix,
              v: unref(k)(b.value),
              s: e.value.style.layout.dataLabels.suffix,
              r: e.value.style.legend.roundingValue
            })
          )), 9, Tt),
          C.value !== null ? (openBlock(), createElementBlock("line", {
            key: 0,
            stroke: unref(xt)(I.value.datapoint.color),
            "stroke-width": "2",
            x1: R2.value,
            x2: R2.value,
            y1: l.value.bottom + e.value.style.layout.cells.height,
            y2: l.value.bottom + e.value.style.layout.cells.height * 2
          }, null, 8, Mt)) : createCommentVNode("", true),
          C.value !== null ? (openBlock(), createElementBlock("path", {
            key: 1,
            fill: e.value.style.color,
            stroke: "none",
            d: `M ${R2.value},${l.value.bottom + e.value.style.layout.cells.height} ${R2.value - 12},${l.value.bottom + e.value.style.layout.cells.height - 20} ${R2.value + 12},${l.value.bottom + e.value.style.layout.cells.height - 20}z`
          }, null, 8, St)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: _.value }, void 0, true)
      ], 14, at)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Nt2, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ye) || unref(ce) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        show: w.value.showTooltip && K.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: q.value,
        content: J.value,
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
      X.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: w.value.showTable,
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
            ref: ie2,
            class: "vue-ui-heatmap-table"
          }, [
            createBaseVNode("div", {
              style: "width:100%;overflow-x:auto;padding-top:36px;position:relative",
              class: normalizeClass({ "vue-ui-responsive": re.value })
            }, [
              createBaseVNode("div", {
                role: "button",
                tabindex: "0",
                style: normalizeStyle(`width:32px; position: absolute; top: 0; left:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${e.value.table.th.backgroundColor};`),
                onClick: a[1] || (a[1] = (o) => w.value.showTable = false),
                onKeypress: a[2] || (a[2] = withKeys((o) => w.value.showTable = false, ["enter"]))
              }, [
                createVNode(u, {
                  name: "close",
                  stroke: e.value.table.th.color,
                  "stroke-width": 2
                }, null, 8, ["stroke"])
              ], 36),
              createBaseVNode("table", Ot2, [
                createBaseVNode("caption", {
                  style: normalizeStyle(`backgroundColor:${e.value.table.th.backgroundColor};color:${e.value.table.th.color};outline:${e.value.table.th.outline}`)
                }, [
                  createTextVNode(toDisplayString(e.value.style.title.text) + " ", 1),
                  e.value.style.title.subtitle.text ? (openBlock(), createElementBlock("span", Ft, toDisplayString(e.value.style.title.subtitle.text), 1)) : createCommentVNode("", true)
                ], 4),
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", {
                    role: "row",
                    style: normalizeStyle(`background:${e.value.table.th.backgroundColor};color:${e.value.table.th.color}`)
                  }, [
                    createBaseVNode("th", {
                      style: normalizeStyle(`outline:${e.value.table.th.outline};padding-right:6px`)
                    }, null, 4),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(G.dataset, (o, v) => (openBlock(), createElementBlock("th", {
                      align: "right",
                      style: normalizeStyle(`outline:${e.value.table.th.outline};padding-right:6px`)
                    }, toDisplayString(o.name), 5))), 256))
                  ], 4)
                ]),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($.value.xLabels, (o, v) => (openBlock(), createElementBlock("tr", {
                    role: "row",
                    class: normalizeClass({ "vue-ui-data-table__tbody__row": true, "vue-ui-data-table__tbody__row-even": v % 2 === 0, "vue-ui-data-table__tbody__row-odd": v % 2 !== 0 }),
                    style: normalizeStyle(`background:${e.value.table.td.backgroundColor};color:${e.value.table.td.color}`)
                  }, [
                    createBaseVNode("td", {
                      "data-cell": e.value.table.colNames.xAxis,
                      class: "vue-ui-data-table__tbody__td",
                      style: normalizeStyle(`outline:${e.value.table.td.outline}`)
                    }, [
                      createBaseVNode("div", Pt, toDisplayString(o), 1)
                    ], 12, Vt),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(G.dataset, (y, g) => (openBlock(), createElementBlock("td", {
                      class: "vue-ui-data-table__tbody__td",
                      "data-cell": G.dataset[g].name,
                      style: normalizeStyle(`outline:${e.value.table.td.outline}`)
                    }, [
                      createBaseVNode("div", Bt, toDisplayString(isNaN(y.values[v]) ? "-" : unref(Gt)({ p: e.value.style.layout.dataLabels.prefix, v: y.values[v], s: e.value.style.layout.dataLabels.suffix, r: e.value.table.td.roundingValue })), 1)
                    ], 12, It))), 256))
                  ], 6))), 256))
                ])
              ])
            ], 2)
          ], 512)
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, tt));
  }
};
var Jt = s(Rt, [["__scopeId", "data-v-c67467bd"]]);
export {
  Jt as default
};
//# sourceMappingURL=vue-ui-heatmap-B-zWMk0Y-CG2BMOFP.js.map
