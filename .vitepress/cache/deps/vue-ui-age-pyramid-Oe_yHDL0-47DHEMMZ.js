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
  Xt,
  cr,
  k,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-age-pyramid-Oe_yHDL0.js
var Xe = ["id"];
var Ue = ["xmlns", "viewBox"];
var Ve = ["id"];
var Ye = ["stop-color"];
var je = ["stop-color"];
var He = ["id"];
var qe = ["stop-color"];
var Je = ["stop-color"];
var Ke = ["x", "y", "width", "height", "fill", "rx"];
var Qe = ["x", "y", "width", "height", "fill", "rx"];
var Ze = ["x", "y", "width", "height", "fill", "rx"];
var et = ["x", "y", "width", "height", "fill", "rx"];
var tt = { key: 0 };
var lt = ["x", "y", "fill", "font-size", "font-weight"];
var at = ["x", "y", "fill", "font-size", "font-weight"];
var ot = { key: 1 };
var st = ["x", "y", "font-size", "fill", "font-weight"];
var it = { key: 2 };
var ut = { key: 0 };
var rt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var nt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var dt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var vt = ["x", "y", "font-size", "fill", "font-weight"];
var yt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var ht = ["x", "y", "font-size", "fill", "font-weight"];
var ft = ["x", "y", "font-size", "fill", "font-weight"];
var ct = ["x", "y", "width", "height", "fill", "onMouseover"];
var gt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var pt2 = {
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
  setup(W2, { expose: de }) {
    const f = W2, { vue_ui_age_pyramid: ve } = oe(), F = computed(() => !!f.dataset && f.dataset.length), x2 = ref(Lt()), ye = ref(null), D = ref(false), G = ref(""), M2 = ref(null), X = ref(0), A = ref(null), U = ref(null), V = ref(0), Y = ref(0), e = computed({
      get: () => j(),
      set: (t) => t
    });
    function j() {
      const t = c({
        userConfig: f.config,
        defaultConfig: ve
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_age_pyramid[t.theme] || f.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => f.config, (t) => {
      e.value = j(), q(), V.value += 1, Y.value += 1;
    }, { deep: true });
    const H = ref(null);
    onMounted(() => {
      q();
    });
    function q() {
      if (Xt(f.dataset) && Kt({
        componentName: "VueUiAgePyramid",
        type: "dataset"
      }), e.value.responsive) {
        const t = O(() => {
          const { width: s2, height: l } = M({
            chart: A.value,
            title: e.value.style.title.text ? U.value : null
          });
          c2.value.width = s2, c2.value.height = l;
        });
        H.value = new ResizeObserver(t), H.value.observe(A.value.parentNode);
      }
    }
    const { isPrinting: J, isImaging: K, generatePdf: Q, generateImage: Z } = se({
      elementId: `vue-ui-age-pyramid_${x2.value}`,
      fileName: e.value.style.title.text || "vue-ui-age-pyramid"
    }), m = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.tooltip.show
    }), c2 = ref({
      height: e.value.style.height,
      width: e.value.style.width
    }), o = computed(() => {
      const t = c2.value.width - e.value.style.layout.padding.right - e.value.style.layout.padding.left, s2 = e.value.style.layout.padding.left, l = c2.value.width - e.value.style.layout.padding.right;
      return {
        top: e.value.style.layout.padding.top,
        left: s2,
        right: l,
        bottom: c2.value.height - e.value.style.layout.padding.bottom,
        width: t,
        height: c2.value.height - e.value.style.layout.padding.top - e.value.style.layout.padding.bottom,
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
    }), he = computed(() => f.dataset.map((t) => e.value.style.layout.dataLabels.yAxis.display === "age" ? t[1] : t[0])), C = computed(() => {
      const t = fe(S.value / 5), s2 = [], l = [];
      for (let a = 0; a <= 5; a += 1) {
        const u = t * a, ae = t * (a - 5);
        s2.push({
          value: u,
          x: o.value.left + o.value.width / 2 + e.value.style.layout.centerSlit.width + u / S.value * o.value.leftChart.width
        }), l.push({
          value: Math.abs(ae),
          x: o.value.left + o.value.width / 2 + ae / S.value * o.value.leftChart.width - e.value.style.layout.centerSlit.width
        });
      }
      return {
        right: s2,
        left: l
      };
    });
    function fe(t) {
      if (t === 0) return 0;
      const l = 10 ** Math.floor(Math.log10(Math.abs(t)));
      let a;
      return t < 0, a = Math.round(t / l) * l, a;
    }
    const S = computed(() => Math.max(...f.dataset.flatMap((t) => t.slice(-2).map((s2) => k(s2))))), $ = computed(() => f.dataset.length), ce = computed(() => f.dataset.map((t) => ({
      segment: t[0],
      age: t[1],
      left: {
        value: t[2],
        proportionToMax: t[2] / S.value
      },
      right: {
        value: t[3],
        proportionToMax: t[3] / S.value
      }
    }))), T = computed(() => ce.value.map((t, s2) => {
      const l = o.value.top + o.value.height / $.value * s2, a = o.value.height / $.value - e.value.style.layout.bars.gap;
      return {
        segment: t.segment,
        age: t.age,
        left: {
          ...t.left,
          y: l,
          color: e.value.style.layout.bars.left.color,
          x: o.value.leftChart.right - t.left.proportionToMax * o.value.leftChart.width,
          width: k(t.left.proportionToMax * o.value.leftChart.width),
          height: a
        },
        right: {
          ...t.right,
          y: l,
          color: e.value.style.layout.bars.right.color,
          x: o.value.rightChart.left,
          width: k(t.right.proportionToMax * o.value.rightChart.width),
          height: a
        }
      };
    })), B = ref(null);
    function ge(t, s2) {
      M2.value = t, B.value = {
        datapoint: s2,
        seriesIndex: t,
        series: T.value,
        config: e.value
      };
      const l = e.value.style.tooltip.customFormat;
      if (Ht(l) && $t(() => l({
        seriesIndex: t,
        datapoint: {
          segment: s2[0],
          index: s2[1],
          left: s2[2],
          right: s2[3]
        },
        series: T.value,
        config: e.value
      })))
        G.value = l({
          seriesIndex: t,
          datapoint: {
            segment: s2[0],
            index: s2[1],
            left: s2[2],
            right: s2[3]
          },
          series: T.value,
          config: e.value
        });
      else {
        let a = "";
        const u = T.value[t];
        a += `<div><b>${u.segment}</b></div>`, a += `<div>${e.value.translations.age}: ${nr(
          e.value.style.layout.dataLabels.yAxis.formatter,
          k(u.age),
          Gt({ v: k(u.age) }),
          { datapoint: s2, seriesIndex: t }
        )}</div>`, a += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}">`, a += '<div style="display:flex; flex-direction:row;gap:12px">', a += `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center"><svg viewBox="0 0 12 12" height="12" width="12"><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.underlayer}"/><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_left_${x2.value})` : e.value.style.layout.bars.left.color}"/></svg><div>${e.value.translations.female}</div><div><b>${nr(
          e.value.style.layout.dataLabels.xAxis.formatter,
          k(u.left.value),
          Gt({ v: k(u.left.value) }),
          { datapoint: s2, seriesIndex: t }
        )}</b></div></div>`, a += `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center"><svg viewBox="0 0 12 12" height="12" width="12"><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.underlayer}"/><rect stroke="none" x="0" y="0" height="12" width="12" rx="2" fill="${e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_right_${x2.value})` : e.value.style.layout.bars.right.color}"/></svg><div>${e.value.translations.male}</div><div><b>${nr(
          e.value.style.layout.dataLabels.xAxis.formatter,
          k(u.right.value),
          Gt({ v: k(u.right.value) }),
          { datapoint: s2, seriesIndex: t }
        )}</b></div></div>`, a += "</div>", a += `<div style="margin-top:6px;padding-top:6px;border-top:1px solid ${e.value.style.tooltip.borderColor}"><div>${e.value.translations.total}</div><div><b>${nr(
          e.value.style.layout.dataLabels.xAxis.formatter,
          k(u.right.value) + k(u.left.value),
          Gt({ v: k(u.right.value) + k(u.left.value) }),
          { datapoint: s2, seriesIndex: t }
        )}</b></div></div>`, a += "</div>", G.value = `<div>${a}</div>`;
      }
      D.value = true;
    }
    function ee() {
      nextTick(() => {
        const t = [e.value.translations.year, e.value.translations.age, e.value.translations.female, e.value.translations.male, e.value.translations.total], s2 = f.dataset.map((u) => [
          u[0],
          u[1],
          u[2],
          u[3],
          u[2] + u[3]
        ]), l = [[e.value.style.title.text], [e.value.style.title.subtitle.text], [[""], [""], [""]]].concat([t]).concat(s2), a = Nt(l);
        Ot({ csvContent: a, title: e.value.style.title.text || "vue-ui-heatmap" });
      });
    }
    const P = computed(() => {
      const t = [
        e.value.translations.year,
        e.value.translations.age,
        e.value.translations.female,
        e.value.translations.male,
        e.value.translations.total
      ], s2 = f.dataset.map((a) => [
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
    }), z = ref(false);
    function pe(t) {
      z.value = t, X.value += 1;
    }
    function te() {
      m.value.showTable = !m.value.showTable;
    }
    function le() {
      m.value.showTooltip = !m.value.showTooltip;
    }
    return de({
      generatePdf: Q,
      generateCsv: ee,
      generateImage: Z,
      toggleTable: te,
      toggleTooltip: le
    }), (t, s2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-age-pyramid ${z.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      ref_key: "agePyramid",
      ref: A,
      id: `vue-ui-age-pyramid_${x2.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.title.text ? "" : "padding-top:36px"};background:${e.value.style.backgroundColor};${e.value.responsive ? "height:100%" : ""}`)
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: U,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${V.value}`,
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
      e.value.userOptions.show && F.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: ye,
        key: `user_options_${X.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isImaging: unref(K),
        isPrinting: unref(J),
        uid: x2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: z.value,
        isTooltip: m.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: A.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: pe,
        onGeneratePdf: unref(Q),
        onGenerateCsv: ee,
        onGenerateImage: unref(Z),
        onToggleTable: te,
        onToggleTooltip: le
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      F.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": z.value, "vue-data-ui-fulscreen--off": !z.value }),
        viewBox: `0 0 ${c2.value.width <= 0 ? 10 : c2.value.width} ${c2.value.height <= 0 ? 10 : c2.value.height}`,
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
            }, null, 8, Ye),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(unref(pt)(e.value.style.layout.bars.left.color, e.value.style.layout.bars.gradient.shiftHue), 100 - e.value.style.layout.bars.gradient.intensity)
            }, null, 8, je)
          ], 8, Ve),
          createBaseVNode("linearGradient", {
            id: `age_pyramid_right_${x2.value}`,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(pt)(e.value.style.layout.bars.right.color, e.value.style.layout.bars.gradient.shiftHue), 100 - e.value.style.layout.bars.gradient.intensity)
            }, null, 8, qe),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.layout.bars.right.color
            }, null, 8, Je)
          ], 8, He)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (l, a) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: l.left.x,
            y: l.left.y,
            width: unref(k)(l.left.width <= 0 ? 1e-4 : l.left.width),
            height: l.left.height <= 0 ? 1e-4 : l.left.height,
            fill: e.value.style.layout.bars.gradient.underlayer,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, Ke),
          createBaseVNode("rect", {
            x: l.left.x,
            y: l.left.y,
            width: l.left.width <= 0 ? 1e-4 : l.left.width,
            height: l.left.height <= 0 ? 1e-4 : l.left.height,
            fill: e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_left_${x2.value})` : l.left.color,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, Qe),
          createBaseVNode("rect", {
            x: l.right.x,
            y: l.right.y,
            width: l.right.width <= 0 ? 1e-4 : l.right.width,
            height: l.right.height <= 0 ? 1e-4 : l.right.height,
            fill: e.value.style.layout.bars.gradient.underlayer,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, Ze),
          createBaseVNode("rect", {
            x: l.right.x,
            y: l.right.y,
            width: l.right.width <= 0 ? 1e-4 : l.right.width,
            height: l.right.height <= 0 ? 1e-4 : l.right.height,
            fill: e.value.style.layout.bars.gradient.show ? `url(#age_pyramid_right_${x2.value})` : l.right.color,
            rx: e.value.style.layout.bars.borderRadius
          }, null, 8, et)
        ]))), 256)),
        createBaseVNode("g", null, [
          e.value.style.layout.dataLabels.sideTitles.show ? (openBlock(), createElementBlock("g", tt, [
            createBaseVNode("text", {
              x: o.value.left,
              y: o.value.top + e.value.style.layout.dataLabels.sideTitles.offsetY,
              fill: e.value.style.layout.dataLabels.sideTitles.useSideColor ? e.value.style.layout.bars.left.color : e.value.style.layout.dataLabels.sideTitles.color,
              "font-size": e.value.style.layout.dataLabels.sideTitles.fontSize,
              "text-anchor": "start",
              "font-weight": e.value.style.layout.dataLabels.sideTitles.bold ? "bold" : "normal"
            }, toDisplayString(e.value.translations.female), 9, lt),
            createBaseVNode("text", {
              x: o.value.right,
              y: o.value.top + e.value.style.layout.dataLabels.sideTitles.offsetY,
              fill: e.value.style.layout.dataLabels.sideTitles.useSideColor ? e.value.style.layout.bars.right.color : e.value.style.layout.dataLabels.sideTitles.color,
              "font-size": e.value.style.layout.dataLabels.sideTitles.fontSize,
              "text-anchor": "end",
              "font-weight": e.value.style.layout.dataLabels.sideTitles.bold ? "bold" : "normal"
            }, toDisplayString(e.value.translations.male), 9, at)
          ])) : createCommentVNode("", true),
          e.value.style.layout.dataLabels.yAxis.show ? (openBlock(), createElementBlock("g", ot, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(he.value, (l, a) => (openBlock(), createElementBlock(Fragment, null, [
              a % e.value.style.layout.dataLabels.yAxis.showEvery === 0 ? (openBlock(), createElementBlock("text", {
                key: 0,
                x: o.value.centerX,
                y: o.value.top + o.value.height / $.value * a + e.value.style.layout.dataLabels.yAxis.fontSize / 3,
                "text-anchor": "middle",
                "font-size": e.value.style.layout.dataLabels.yAxis.fontSize,
                fill: e.value.style.layout.dataLabels.yAxis.color,
                "font-weight": e.value.style.layout.dataLabels.yAxis.bold ? "bold" : "normal"
              }, toDisplayString(unref(nr)(
                e.value.style.layout.dataLabels.yAxis.formatter,
                l,
                unref(Gt)({ v: l }),
                { datapoint: l, seriesIndex: a }
              )), 9, st)) : createCommentVNode("", true)
            ], 64))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.layout.dataLabels.xAxis.show ? (openBlock(), createElementBlock("g", it, [
            e.value.style.layout.grid.show ? (openBlock(), createElementBlock("g", ut, [
              createBaseVNode("line", {
                x1: C.value.right[0].x,
                x2: C.value.right.at(-1).x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, rt),
              createBaseVNode("line", {
                x1: C.value.left[0].x,
                x2: C.value.left.at(-1).x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, nt)
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(C.value.right, (l, a) => (openBlock(), createElementBlock("g", null, [
              e.value.style.layout.grid.show ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: l.x,
                x2: l.x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 4,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, dt)) : createCommentVNode("", true),
              createBaseVNode("text", {
                x: l.x,
                y: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize * 2,
                "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
                fill: e.value.style.layout.dataLabels.xAxis.color,
                "text-anchor": "middle",
                "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal"
              }, toDisplayString(unref(nr)(
                e.value.style.layout.dataLabels.xAxis.formatter,
                l.value / e.value.style.layout.dataLabels.xAxis.scale,
                unref(Gt)({
                  v: l.value / e.value.style.layout.dataLabels.xAxis.scale
                }),
                { datapoint: l, seriesIndex: a }
              )), 9, vt)
            ]))), 256)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(C.value.left, (l, a) => (openBlock(), createElementBlock("g", null, [
              e.value.style.layout.grid.show ? (openBlock(), createElementBlock("line", {
                key: 0,
                x1: l.x,
                x2: l.x,
                y1: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 2,
                y2: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize / 4,
                stroke: e.value.style.layout.grid.stroke,
                "stroke-width": e.value.style.layout.grid.strokeWidth,
                "stroke-linecap": "round"
              }, null, 8, yt)) : createCommentVNode("", true),
              createBaseVNode("text", {
                x: l.x,
                y: o.value.bottom + e.value.style.layout.dataLabels.xAxis.fontSize * 2,
                "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
                fill: e.value.style.layout.dataLabels.xAxis.color,
                "text-anchor": "middle",
                "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal"
              }, toDisplayString(unref(nr)(
                e.value.style.layout.dataLabels.xAxis.formatter,
                l.value / e.value.style.layout.dataLabels.xAxis.scale,
                unref(Gt)({
                  v: l.value / e.value.style.layout.dataLabels.xAxis.scale
                }),
                { datapoint: l, seriesIndex: a }
              )), 9, ht)
            ]))), 256)),
            createBaseVNode("text", {
              x: o.value.right,
              y: c2.value.height,
              "text-anchor": "end",
              "font-size": e.value.style.layout.dataLabels.xAxis.fontSize,
              fill: e.value.style.layout.dataLabels.xAxis.color,
              "font-weight": e.value.style.layout.dataLabels.xAxis.bold ? "bold" : "normal"
            }, toDisplayString(e.value.style.layout.dataLabels.xAxis.translation), 9, ft)
          ])) : createCommentVNode("", true)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(W2.dataset, (l, a) => (openBlock(), createElementBlock("g", null, [
          createBaseVNode("rect", {
            x: o.value.left,
            y: o.value.top + o.value.height / $.value * a - e.value.style.layout.bars.gap / 2,
            width: o.value.width <= 0 ? 1e-4 : o.value.width,
            height: o.value.height / $.value <= 0 ? 1e-4 : o.value.height / $.value,
            fill: M2.value !== null && M2.value === a ? unref(cr)(e.value.style.highlighter.color, e.value.style.highlighter.opacity) : "transparent",
            onMouseover: (u) => ge(a, l),
            onMouseleave: s2[0] || (s2[0] = (u) => {
              M2.value = null, D.value = false;
            })
          }, null, 40, ct)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: c2.value }, void 0, true)
      ], 14, Ue)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", gt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(J) || unref(K) })), void 0, true)
      ])) : createCommentVNode("", true),
      F.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
      renderSlot(t.$slots, "legend", { legend: T.value }, void 0, true),
      createVNode(E, {
        show: m.value.showTooltip && D.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        fontSize: e.value.style.tooltip.fontSize,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        offsetY: e.value.style.tooltip.offsetY,
        parent: A.value,
        content: G.value,
        isCustom: e.value.style.tooltip.customFormat && typeof e.value.style.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...B.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...B.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      F.value ? (openBlock(), createBlock(R, {
        key: 5,
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
            key: `table_${Y.value}`,
            colNames: P.value.colNames,
            head: P.value.head,
            body: P.value.body,
            config: P.value.config,
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
    ], 14, Xe));
  }
};
var zt = s(pt2, [["__scopeId", "data-v-c8be6835"]]);
export {
  zt as default
};
//# sourceMappingURL=vue-ui-age-pyramid-Oe_yHDL0-47DHEMMZ.js.map
