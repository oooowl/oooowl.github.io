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
  Vt,
  Xt,
  dr,
  ir,
  jt,
  k as k2,
  qt,
  te,
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

// node_modules/vue-data-ui/dist/vue-ui-age-pyramid-DkfNZR86.js
var qe = ["id"];
var Je = ["xmlns", "viewBox"];
var Ke = ["id"];
var Qe = ["stop-color"];
var Ze = ["stop-color"];
var et = ["id"];
var tt = ["stop-color"];
var lt = ["stop-color"];
var at = ["x", "y", "width", "height", "fill", "rx"];
var ot = ["x", "y", "width", "height", "fill", "rx"];
var st = ["x", "y", "width", "height", "fill", "rx"];
var it = ["x", "y", "width", "height", "fill", "rx"];
var ut = { key: 0 };
var rt = ["x", "y", "fill", "font-size", "font-weight"];
var nt = ["x", "y", "fill", "font-size", "font-weight"];
var dt = { key: 1 };
var vt = ["x", "y", "font-size", "fill", "font-weight"];
var yt2 = { key: 2 };
var ht = { key: 0 };
var ft = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ct = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var gt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var pt = ["x", "y", "font-size", "fill", "font-weight"];
var bt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var xt = ["x", "y", "font-size", "fill", "font-weight"];
var mt = ["x", "y", "font-size", "fill", "font-weight"];
var wt = ["x", "y", "width", "height", "fill", "onMouseover"];
var kt = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var _t = {
  __name: "vue-ui-age-pyramid",
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
  setup(U, { expose: fe }) {
    const c2 = U, { vue_ui_age_pyramid: ce } = te(), M = computed(() => !!c2.dataset && c2.dataset.length), x2 = ref(Dt()), ge = ref(null), G = ref(false), B = ref(""), N = ref(null), V = ref(0), C = ref(null), Y = ref(null), j = ref(null), H = ref(null), q = ref(0), J = ref(0), e = computed({
      get: () => K(),
      set: (t) => t
    });
    function K() {
      const t = c({
        userConfig: c2.config,
        defaultConfig: ce
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_age_pyramid[t.theme] || c2.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => c2.config, (t) => {
      e.value = K(), Z(), q.value += 1, J.value += 1;
    }, { deep: true });
    const Q = ref(null);
    onMounted(() => {
      Z();
    });
    function Z() {
      if (jt(c2.dataset) && qt({
        componentName: "VueUiAgePyramid",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: s2, height: l } = k({
            chart: C.value,
            title: e.value.style.title.text ? Y.value : null,
            source: j.value,
            noTitle: H.value
          });
          g.value.width = s2, g.value.height = l;
        });
        Q.value = new ResizeObserver(t), Q.value.observe(C.value.parentNode);
      }
    }
    const { isPrinting: ee, isImaging: te2, generatePdf: le, generateImage: ae2 } = re({
      elementId: `vue-ui-age-pyramid_${x2.value}`,
      fileName: e.value.style.title.text || "vue-ui-age-pyramid"
    }), pe = computed(() => e.value.userOptions.show && !e.value.style.title.text), m = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), g = ref({
      height: e.value.style.height,
      width: e.value.style.width
    }), o = computed(() => {
      const t = g.value.width - e.value.style.layout.padding.right - e.value.style.layout.padding.left, s2 = e.value.style.layout.padding.left, l = g.value.width - e.value.style.layout.padding.right;
      return {
        top: e.value.style.layout.padding.top,
        left: s2,
        right: l,
        bottom: g.value.height - e.value.style.layout.padding.bottom,
        width: t,
        height: g.value.height - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom,
        centerX: e.value.style.layout.padding.left + t / 2,
        leftChart: {
          width: t / 2 - e.value.style.layout.centerSlit.width,
          right: s2 + t / 2 - e.value.style.layout.centerSlit.width
        },
        rightChart: {
          width: t / 2 - e.value.style.layout.centerSlit.width,
          left: s2 + t / 2 + e.value.style.layout.centerSlit.width
        }
      };
    }), be = computed(() => c2.dataset.map((t) => e.value.style.layout.dataLabels.yAxis.display === "age" ? t[1] : t[0])), $ = computed(() => {
      const t = xe(z.value / 5), s2 = [], l = [];
      for (let a = 0; a <= 5; a += 1) {
        const u = t * a, ue = t * (a - 5);
        s2.push({
          value: u,
          x: o.value.left + o.value.width / 2 + e.value.style.layout.centerSlit.width + u / z.value * o.value.leftChart.width
        }), l.push({
          value: Math.abs(ue),
          x: o.value.left + o.value.width / 2 + ue / z.value * o.value.leftChart.width - e.value.style.layout.centerSlit.width
        });
      }
      return {
        right: s2,
        left: l
      };
    });
    function xe(t) {
      if (t === 0) return 0;
      const l = 10 ** Math.floor(Math.log10(Math.abs(t)));
      let a;
      return t < 0, a = Math.round(t / l) * l, a;
    }
    const z = computed(() => Math.max(...c2.dataset.flatMap((t) => t.slice(-2).map((s2) => k2(s2))))), T = computed(() => c2.dataset.length), me = computed(() => c2.dataset.map((t) => ({
      segment: t[0],
      age: t[1],
      left: {
        value: t[2],
        proportionToMax: t[2] / z.value
      },
      right: {
        value: t[3],
        proportionToMax: t[3] / z.value
      }
    }))), A = computed(() => me.value.map((t, s2) => {
      const l = o.value.top + o.value.height / T.value * s2, a = o.value.height / T.value - e.value.style.layout.bars.gap;
      return {
        segment: t.segment,
        age: t.age,
        left: {
          ...t.left,
          y: l,
          color: e.value.style.layout.bars.left.color,
          x: o.value.leftChart.right - t.left.proportionToMax * o.value.leftChart.width,
          width: k2(t.left.proportionToMax * o.value.leftChart.width),
          height: a
        },
        right: {
          ...t.right,
          y: l,
          color: e.value.style.layout.bars.right.color,
          x: o.value.rightChart.left,
          width: k2(t.right.proportionToMax * o.value.rightChart.width),
          height: a
        }
      };
    })), E2 = ref(null);
    function we(t, s2) {
      N.value = t, E2.value = {
        datapoint: s2,
        seriesIndex: t,
        series: A.value,
        config: e.value
      };
      const l = e.value.style.tooltip.customFormat;
      if (Xt(l) && Kt(() => l({
        seriesIndex: t,
        datapoint: {
          segment: s2[0],
          index: s2[1],
          left: s2[2],
          right: s2[3]
        },
        series: A.value,
        config: e.value
      })))
        B.value = l({
          seriesIndex: t,
          datapoint: {
            segment: s2[0],
            index: s2[1],
            left: s2[2],
            right: s2[3]
          },
          series: A.value,
          config: e.value
        });
      else {
        let a = "";
        const u = A.value[t];
        a += `<div><b>${u.segment}</b></div>`, a += `<div>${e.value.translations.age}: ${ir(
          e.value.style.layout.dataLabels.yAxis.formatter,
          k2(u.age),
          Ht({ v: k2(u.age) }),
          { datapoint: s2, seriesIndex: t }
        )}</div>`, a += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}">`, a += '<div style="display:flex; flex-direction:row;gap:12px">', a += `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center"><svg viewBox="0 0 12 12" height="12" width="12"><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.underlayer}"/><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_left_${x2.value})` : e.value.style.layout.bars.left.color}"/></svg><div>${e.value.translations.female}</div><div><b>${ir(
          e.value.style.layout.dataLabels.xAxis.formatter,
          k2(u.left.value),
          Ht({ v: k2(u.left.value) }),
          { datapoint: s2, seriesIndex: t }
        )}</b></div></div>`, a += `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center"><svg viewBox="0 0 12 12" height="12" width="12"><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.underlayer}"/><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_right_${x2.value})` : e.value.style.layout.bars.right.color}"/></svg><div>${e.value.translations.male}</div><div><b>${ir(
          e.value.style.layout.dataLabels.xAxis.formatter,
          k2(u.right.value),
          Ht({ v: k2(u.right.value) }),
          { datapoint: s2, seriesIndex: t }
        )}</b></div></div>`, a += "</div>", a += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}"><div>${e.value.translations.total}</div><div><b>${ir(
          e.value.style.layout.dataLabels.xAxis.formatter,
          k2(u.right.value) + k2(u.left.value),
          Ht({ v: k2(u.right.value) + k2(u.left.value) }),
          { datapoint: s2, seriesIndex: t }
        )}</b></div></div>`, a += "</div>", B.value = `<div>${a}</div>`;
      }
      G.value = true;
    }
    function oe() {
      nextTick(() => {
        const t = [e.value.translations.year, e.value.translations.age, e.value.translations.female, e.value.translations.male, e.value.translations.total], s2 = c2.dataset.map((u) => [
          u[0],
          u[1],
          u[2],
          u[3],
          u[2] + u[3]
        ]), l = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([t]).concat(s2), a = Vt(l);
        Nt({ csvContent: a, title: e.value.style.title.text || "vue-ui-heatmap" });
      });
    }
    const R2 = computed(() => {
      const t = [
        e.value.translations.year,
        e.value.translations.age,
        e.value.translations.female,
        e.value.translations.male,
        e.value.translations.total
      ], s2 = c2.dataset.map((a) => [
        a[0],
        a[1],
        a[2].toLocaleString(),
        a[3].toLocaleString(),
        (a[2] + a[3]).toLocaleString()
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
      };
      return { head: t, body: s2, config: l, colNames: t };
    }), I = ref(false);
    function ke(t) {
      I.value = t, V.value += 1;
    }
    function se() {
      m.value.showTable = !m.value.showTable;
    }
    function ie() {
      m.value.showTooltip = !m.value.showTooltip;
    }
    const D = ref(false);
    function W2() {
      D.value = !D.value;
    }
    return fe({
      generatePdf: le,
      generateCsv: oe,
      generateImage: ae2,
      toggleTable: se,
      toggleTooltip: ie,
      toggleAnnotator: W2
    }), (t, s2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-age-pyramid ${I.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      ref_key: "agePyramid",
      ref: C,
      id: `vue-ui-age-pyramid_${x2.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.backgroundColor};${e.value.responsive ? "height:100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: C.value,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        active: D.value,
        onClose: W2
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      pe.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: H,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: Y,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${q.value}`,
          config: {
            title: {
              cy: "pyramid-div-title",
              ...e.value.style.title
            },
            subtitle: {
              cy: "pyramid-div-subtitle",
              ...e.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && M.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: ge,
        key: `user_options_${V.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(te2),
        isPrinting: unref(ee),
        uid: x2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: I.value,
        isTooltip: m.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: C.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: D.value,
        onToggleFullscreen: ke,
        onGeneratePdf: unref(le),
        onGenerateCsv: oe,
        onGenerateImage: unref(ae2),
        onToggleTable: se,
        onToggleTooltip: ie,
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
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      M.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": I.value, "vue-data-ui-fulscreen--off": !I.value }),
        viewBox: `0 0 ${g.value.width <= 0 ? 10 : g.value.width} ${g.value.height <= 0 ? 10 : g.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: `age_pyramid_left_${x2.value}`,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": e.value.style.layout.bars.left.color
            }, null, 8, Qe),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(unref(yt)(e.value.style.layout.bars.left.color, e.value.style.layout.bars.gradient.shiftHue), 100 - e.value.style.layout.bars.gradient.intensity)
            }, null, 8, Ze)
          ], 8, Ke),
          createBaseVNode("linearGradient", {
            id: `age_pyramid_right_${x2.value}`,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(e.value.style.layout.bars.right.color, e.value.style.layout.bars.gradient.shiftHue), 100 - e.value.style.layout.bars.gradient.intensity)
            }, null, 8, tt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.layout.bars.right.color
            }, null, 8, lt)
          ], 8, et)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(A.value, (l, a) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: l.left.x,
            y: l.left.y,
            width: unref(k2)(l.left.width <= 0 ? 1e-4 : l.left.width),
            height: l.left.height <= 0 ? 1e-4 : l.left.height,
            fill: e.value.style.layout.bars.gradient.underlayer,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, at),
          createBaseVNode("rect", {
            x: l.left.x,
            y: l.left.y,
            width: l.left.width <= 0 ? 1e-4 : l.left.width,
            height: l.left.height <= 0 ? 1e-4 : l.left.height,
            fill: e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_left_${x2.value})` : l.left.color,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, ot),
          createBaseVNode("rect", {
            x: l.right.x,
            y: l.right.y,
            width: l.right.width <= 0 ? 1e-4 : l.right.width,
            height: l.right.height <= 0 ? 1e-4 : l.right.height,
            fill: e.value.style.layout.bars.gradient.underlayer,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, st),
          createBaseVNode("rect", {
            x: l.right.x,
            y: l.right.y,
            width: l.right.width <= 0 ? 1e-4 : l.right.width,
            height: l.right.height <= 0 ? 1e-4 : l.right.height,
            fill: e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_right_${x2.value})` : l.right.color,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, it)
        ]))), 256)),
        createBaseVNode("g", null, [
          e.value.style.layout.dataLabels.sideTitles.show ? (openBlock(), createElementBlock("g", ut, [
            createBaseVNode("text", {
              x: o.value.left,
              y: o.value.top + e.value.style.layout.dataLabels.sideTitles.offsetY,
              fill: e.value.style.layout.dataLabels.sideTitles.useSideColor ? e.value.style.layout.bars.left.color : e.value.style.layout.dataLabels.sideTitles.color,
              "font-size": e.value.style.layout.dataLabels.sideTitles.fontSize,
              "text-anchor": "start",
              "font-weight": e.value.style.layout.dataLabels.sideTitles.bold ? "bold" : "normal"
            }, toDisplayString(e.value.translations.female), 9, rt),
            createBaseVNode("text", {
              x: o.value.right,
              y: o.value.top + e.value.style.layout.dataLabels.sideTitles.offsetY,
              fill: e.value.style.layout.dataLabels.sideTitles.useSideColor ? e.value.style.layout.bars.right.color : e.value.style.layout.dataLabels.sideTitles.color,
              "font-size": e.value.style.layout.dataLabels.sideTitles.fontSize,
              "text-anchor": "end",
              "font-weight": e.value.style.layout.dataLabels.sideTitles.bold ? "bold" : "normal"
            }, toDisplayString(e.value.translations.male), 9, nt)
          ])) : createCommentVNode("", true),
          e.value.style.layout.dataLabels.yAxis.show ? (openBlock(), createElementBlock("g", dt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(be.value, (l, a) => (openBlock(), createElementBlock(Fragment, null, [
              a % e.value.style.layout.dataLabels.yAxis.showEvery === 0 ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: o.value.centerX,
                y: o.value.top + o.value.height / T.value * a + e.value.style.layout.dataLabels.yAxis.fontSize / 3,
                "text-anchor": "middle",
                "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
                fill: e.value.style.layout.dataLabels.yAxis.color,
                "font-weight": e.value.style.layout.dataLabels.yAxis.bold ? "bold" : "normal"
              }, toDisplayString(unref(ir)(
                e.value.style.layout.dataLabels.yAxis.formatter,
                l,
                unref(Ht)({ v: l }),
                { datapoint: l, seriesIndex: a }
              )), 9, vt)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.layout.dataLabels.xAxis.show ? (openBlock(), createElementBlock("g", yt2, [
            e.value.style.layout.grid.show ? (openBlock(), createElementBlock("g", ht, [
              createBaseVNode("line", {
                x1: $.value.right[0].x,
                x2: $.value.right.at(-1).x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, ft),
              createBaseVNode("line", {
                x1: $.value.left[0].x,
                x2: $.value.left.at(-1).x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, ct)
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList($.value.right, (l, a) => (openBlock(), createElementBlock("g", null, [
              e.value.style.layout.grid.show ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: l.x,
                x2: l.x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 4,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, gt)) : createCommentVNode("", true),
              createBaseVNode("text", {
                x: l.x,
                y: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize * 2,
                "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
                fill: e.value.style.layout.dataLabels.xAxis.color,
                "text-anchor": "middle",
                "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal"
              }, toDisplayString(unref(ir)(
                e.value.style.layout.dataLabels.xAxis.formatter,
                l.value / e.value.style.layout.dataLabels.xAxis.scale,
                unref(Ht)({
                  v: l.value / e.value.style.layout.dataLabels.xAxis.scale
                }),
                { datapoint: l, seriesIndex: a }
              )), 9, pt)
            ]))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList($.value.left, (l, a) => (openBlock(), createElementBlock("g", null, [
              e.value.style.layout.grid.show ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: l.x,
                x2: l.x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 4,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, bt)) : createCommentVNode("", true),
              createBaseVNode("text", {
                x: l.x,
                y: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize * 2,
                "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
                fill: e.value.style.layout.dataLabels.xAxis.color,
                "text-anchor": "middle",
                "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal"
              }, toDisplayString(unref(ir)(
                e.value.style.layout.dataLabels.xAxis.formatter,
                l.value / e.value.style.layout.dataLabels.xAxis.scale,
                unref(Ht)({
                  v: l.value / e.value.style.layout.dataLabels.xAxis.scale
                }),
                { datapoint: l, seriesIndex: a }
              )), 9, xt)
            ]))), 256)),
            createBaseVNode("text", {
              x: o.value.right,
              y: g.value.height,
              "text-anchor": "end",
              "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
              fill: e.value.style.layout.dataLabels.xAxis.color,
              "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal"
            }, toDisplayString(e.value.style.layout.dataLabels.xAxis.translation), 9, mt)
          ])) : createCommentVNode("", true)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(U.dataset, (l, a) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: o.value.left,
            y: o.value.top + o.value.height / T.value * a - e.value.style.layout.bars.gap / 2,
            width: o.value.width <= 0 ? 1e-4 : o.value.width,
            height: o.value.height / T.value <= 0 ? 1e-4 : o.value.height / T.value,
            fill: N.value !== null && N.value === a ? unref(dr)(e.value.style.highlighter.color, e.value.style.highlighter.opacity) : "transparent",
            onMouseover: (u) => we(a, l),
            onMouseleave: s2[0] || (s2[0] = (u) => {
              N.value = null, G.value = false;
            })
          }, null, 40, wt)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: g.value }, void 0, true)
      ], 14, Je)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", kt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ee) || unref(te2) })), void 0, true)
      ])) : createCommentVNode("", true),
      M.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "pyramid",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            pyramid: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      renderSlot(t.$slots, "legend", { legend: A.value }, void 0, true),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: j,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: m.value.showTooltip && G.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: C.value,
        content: B.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...E2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...E2.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      M.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: m.value.showTable,
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
          (openBlock(), createBlock(W, {
            key: `table_${J.value}`,
            colNames: R2.value.colNames,
            head: R2.value.head,
            body: R2.value.body,
            config: R2.value.config,
            title: `${e.value.style.title.text}${e.value.style.title.subtitle.text ? ` : ${e.value.style.title.subtitle.text}` : ""}`,
            onClose: s2[1] || (s2[1] = (l) => m.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createTextVNode(toDisplayString(l), 1)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, qe));
  }
};
var Rt = s(_t, [["__scopeId", "data-v-c061125a"]]);
export {
  Rt as default
};
//# sourceMappingURL=vue-ui-age-pyramid-DkfNZR86-M37NSCTL.js.map
