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
  ir,
  jt,
  qt,
  rt,
  te,
  tr
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

// node_modules/vue-data-ui/dist/vue-ui-onion-CT9YjU8v.js
var ht = ["id"];
var ft = ["xmlns", "viewBox"];
var gt = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
var pt = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
var yt = ["id"];
var mt = ["stdDeviation"];
var bt = ["filter"];
var kt = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
var $t = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "onMouseenter"];
var wt = { key: 1 };
var Ct = ["onMouseenter"];
var xt = ["x", "y", "font-size", "fill", "font-weight"];
var Tt = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var _t = ["onClick"];
var Ot = ["innerHTML"];
var Pt = {
  __name: "vue-ui-onion",
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
  setup(we, { expose: Ce, emit: xe }) {
    const k2 = we, { vue_ui_onion: Te } = te(), D = computed(() => !!k2.dataset && k2.dataset.length), x2 = ref(Dt()), _e = ref(null), Q2 = ref(0), L = ref(false), X = ref(""), y = ref([]), T = ref(null), Z = ref(null), ee = ref(null), te2 = ref(null), ae2 = ref(null), le = ref(0), oe = ref(0), re2 = ref(0), e = computed({
      get: () => ne(),
      set: (t) => t
    });
    function ne() {
      const t = c({
        userConfig: k2.config,
        defaultConfig: Te
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_onion[t.theme] || k2.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => k2.config, (t) => {
      e.value = ne(), de(), le.value += 1, oe.value += 1, re2.value += 1;
    }, { deep: true });
    const { isPrinting: se, isImaging: ue, generatePdf: ie, generateImage: ce } = re({
      elementId: `vue-ui-onion_${x2.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-onion"
    }), Oe = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), Pe = computed(() => tr(e.value.customPalette)), $ = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), r = ref({
      height: 512,
      width: 512,
      padding: {
        top: 64,
        left: 64,
        right: 64,
        bottom: 64
      },
      minRadius: 64
    }), z = ref(null);
    onMounted(() => {
      de();
    });
    function de() {
      if (jt(k2.dataset) && qt({
        componentName: "VueUiOnion",
        type: "dataset"
      }), e.value.responsive) {
        const o = O(() => {
          const { width: a, height: l } = k({
            chart: T.value,
            title: e.value.style.chart.title.text ? Z.value : null,
            legend: e.value.style.chart.legend.show ? ee.value : null,
            source: te2.value,
            noTitle: ae2.value
          });
          r.value.width = a, r.value.height = l, r.value.padding.top = Math.max(a, l) * 0.125, r.value.padding.right = Math.max(a, l) * 0.125, r.value.padding.bottom = Math.max(a, l) * 0.125, r.value.padding.left = Math.max(a, l) * 0.125, r.value.minRadius = Math.min(a, l) * 0.125;
        });
        z.value = new ResizeObserver(o), z.value.observe(T.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      z.value && z.value.disconnect();
    });
    const i = computed(() => ({
      top: r.value.padding.top,
      left: r.value.padding.left,
      right: r.value.width - r.value.padding.right,
      bottom: r.value.height - r.value.padding.bottom,
      centerX: r.value.width / 2,
      centerY: r.value.height / 2,
      width: r.value.width - r.value.padding.right - r.value.padding.left,
      height: r.value.height - r.value.padding.bottom - r.value.padding.top,
      minRadius: r.value.minRadius,
      maxRadius: Math.min(r.value.width, r.value.height) - r.value.padding.top * 2
    })), c2 = computed(() => (k2.dataset.forEach((t, o) => {
      [null, void 0].includes(t.name) && qt({
        componentName: "VueUiOnion",
        type: "datasetSerieAttribute",
        property: "name",
        index: o
      }), [void 0].includes(t.percentage) && qt({
        componentName: "VueUiOnion",
        type: "datasetSerieAttribute",
        property: "percentage",
        index: o
      });
    }), k2.dataset.map((t, o) => {
      const a = `onion_serie_${o}_${x2.value}`;
      return {
        ...t,
        percentage: t.percentage || 0,
        targetPercentage: t.percentage || 0,
        color: Q(t.color) || Pe.value[o] || rt[o],
        id: a,
        shape: "circle",
        opacity: y.value.includes(a) ? 0.5 : 1,
        absoluteIndex: o,
        segregate: () => ve(a),
        isSegregated: y.value.includes(a)
      };
    }))), P = ref(c2.value), Ae = computed(() => e.value.useStartAnimation), Ie = ref(null), Se2 = computed(() => Math.max(...c2.value.map((t) => t.percentage))), G = ref(false);
    watch(() => c2.value, Me, { immediate: true });
    function Me() {
      if (Ae.value && !G.value) {
        let o = function() {
          t >= Se2.value ? (cancelAnimationFrame(Ie.value), P.value = c2.value, G.value = true) : (P.value = c2.value.map((a) => ({
            ...a,
            percentage: t < a.targetPercentage ? t : a.targetPercentage
          })), t += 1, requestAnimationFrame(o), G.value = true);
        };
        P.value = c2.value.map((a) => ({
          ...a,
          percentage: 0
        }));
        let t = 0;
        o();
      } else
        P.value = c2.value;
    }
    const Fe = computed(() => ({
      cy: "onion-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), Ne = computed(() => c2.value.filter((t) => !y.value.includes(t.id)).length), w = computed(() => {
      const t = Math.min(i.value.width, i.value.height) / 2 / c2.value.length;
      return {
        gutter: (t > e.value.style.chart.layout.maxThickness ? e.value.style.chart.layout.maxThickness : t) * e.value.style.chart.layout.gutter.width,
        track: (t > e.value.style.chart.layout.maxThickness ? e.value.style.chart.layout.maxThickness : t) * e.value.style.chart.layout.track.width
      };
    }), m = computed(() => P.value.filter((t) => !y.value.includes(t.id)).map((t, o) => {
      const a = (i.value.maxRadius - w.value.track) / Ne.value / 2 * (1 + o), l = i.value.centerY - a;
      return {
        percentage: t.percentage || 0,
        ...t,
        labelY: l,
        radius: a,
        path: Re(a, t.percentage || 0)
      };
    }));
    function Re(t, o) {
      const a = 2 * Math.PI * t, l = a * 0.75, p2 = `${l} ${a}`, I = l * (1 - o / 100);
      return {
        bgDashArray: `${l} ${a}`,
        bgDashOffset: 0,
        dashArray: p2,
        dashOffset: I,
        fullOffset: 0,
        active: `
            M ${i.value.centerX},${i.value.centerY - t} 
            A ${t},${t} 0 1 1 
            ${i.value.centerX + t * Math.cos(Math.PI * 3 / 4)},${i.value.centerY + t * Math.sin(Math.PI * 3 / 4)}
        `.trim()
      };
    }
    function ve(t) {
      y.value.includes(t) ? y.value = y.value.filter((o) => o !== t) : y.value.push(t), xe("selectLegend", m.value);
    }
    function De() {
      return m.value;
    }
    const U = computed(() => {
      const t = [e.value.table.translations.serie, e.value.table.translations.percentage, e.value.table.translations.value], o = m.value.map((a) => [
        a.name,
        a.percentage,
        a.value
      ]);
      return { head: t, body: o };
    }), Y = computed(() => {
      const t = U.value.head, o = m.value.map((l) => [
        `<span style="color:${l.color}">⬤</span> ${l.name}`,
        `${Number(l.percentage ?? 0).toFixed(e.value.table.td.roundingPercentage).toLocaleString()}%`,
        `${l.prefix || ""}${[null, void 0, NaN, "NaN"].includes(l.value) ? "-" : l.value.toFixed(e.value.table.td.roundingValue).toLocaleString()}${l.suffix || ""}`
      ]), a = {
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
      return { head: t, body: o, config: a, colNames: t };
    });
    function he() {
      nextTick(() => {
        const t = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], o = U.value.head, a = U.value.body, l = t.concat([o]).concat(a), p2 = Vt(l);
        Nt({ csvContent: p2, title: e.value.style.chart.title.text || "vue-ui-onion" });
      });
    }
    const b = ref(void 0), A = ref(false);
    function Le(t) {
      A.value = t, Q2.value += 1;
    }
    const E2 = ref(null);
    function fe({ datapoint: t, seriesIndex: o, show: a = true }) {
      const l = t.absoluteIndex;
      b.value = o, E2.value = {
        datapoint: t,
        seriesIndex: l,
        series: c2.value,
        config: e.value
      }, L.value = a;
      let p2 = "";
      const I = e.value.style.chart.tooltip.customFormat;
      if (Xt(I) && Kt(() => I({
        seriesIndex: l,
        datapoint: t,
        series: c2.value,
        config: e.value
      })))
        X.value = I({
          seriesIndex: l,
          datapoint: t,
          series: c2.value,
          config: e.value
        });
      else {
        const W2 = e.value.style.chart.tooltip.showPercentage, j = e.value.style.chart.tooltip.showValue;
        p2 += `<div style="width: 100%; border-bottom: 1px solid ${e.value.style.chart.tooltip.borderColor}; padding-bottom: 6px;margin-bottom:3px;display:flex;flex-direction:row;gap:3px;align-items:center"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg><span></span>${t.name}</span></div>`, p2 += `<div style="width:100%;text-align:left;"><b>${W2 ? Ht({ p: "", v: t.percentage, s: "%", r: e.value.style.chart.tooltip.roundingPercentage }) : ""}</b> ${W2 && j ? "(" : ""}${j ? ir(
          e.value.style.chart.layout.labels.value.formatter,
          t.value,
          Ht({
            p: t.prefix || "",
            v: t.value,
            s: t.suffix || "",
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: t, seriesIndex: o }
        ) : ""}${W2 && j ? ")" : ""}</div>`, X.value = `<div>${p2}</div>`;
      }
    }
    function ge() {
      $.value.showTable = !$.value.showTable;
    }
    function pe() {
      $.value.showTooltip = !$.value.showTooltip;
    }
    const B = ref(false);
    function H() {
      B.value = !B.value;
    }
    return Ce({
      getData: De,
      generatePdf: ie,
      generateCsv: he,
      generateImage: ce,
      toggleTable: ge,
      toggleTooltip: pe,
      toggleAnnotator: H
    }), (t, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-onion ${A.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "onionChart",
      ref: T,
      id: `vue-ui-onion_${x2.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height: 100%;" : ""} text-align:center;background:${e.value.style.chart.backgroundColor}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: T.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: B.value,
        onClose: H
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Oe.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: ae2,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: Z,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${le.value}`,
          config: {
            title: {
              cy: "onion-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "onion-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && D.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: _e,
        key: `user_options${Q2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(ue),
        isPrinting: unref(se),
        uid: x2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: A.value,
        isTooltip: $.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: T.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: B.value,
        onToggleFullscreen: Le,
        onGeneratePdf: unref(ie),
        onGenerateCsv: he,
        onGenerateImage: unref(ce),
        onToggleTable: ge,
        onToggleTooltip: pe,
        onToggleAnnotator: H
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
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: l }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: l })), void 0, true)
          ]),
          key: "5"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: l }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: l })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      D.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": A.value, "vue-data-ui-fulscreen--off": !A.value }),
        viewBox: `0 0 ${r.value.width <= 0 ? 1e-4 : r.value.width} ${r.value.height <= 0 ? 1e-4 : r.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (a, l) => (openBlock(), createElementBlock("circle", {
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: a.radius <= 0 ? 1e-4 : a.radius,
          stroke: e.value.style.chart.layout.gutter.color,
          "stroke-width": w.value.gutter,
          fill: "none",
          "stroke-dasharray": a.path.bgDashArray,
          "stroke-dashoffset": a.path.fullOffset,
          "stroke-linecap": "round",
          class: normalizeClass({ "vue-ui-onion-path": true, "vue-ui-onion-blur": e.value.useBlurOnHover && ![null, void 0].includes(b.value) && b.value !== l }),
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
        }, null, 10, gt))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (a, l) => (openBlock(), createElementBlock("circle", {
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: a.radius < 0 ? 1e-4 : a.radius,
          stroke: `${a.color}`,
          "stroke-width": w.value.track,
          fill: "none",
          "stroke-dasharray": a.path.dashArray,
          "stroke-dashoffset": a.path.dashOffset,
          class: normalizeClass({ "vue-ui-onion-path": true, "vue-ui-onion-blur": e.value.useBlurOnHover && ![null, void 0].includes(b.value) && b.value !== l }),
          "stroke-linecap": "round",
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
        }, null, 10, pt))), 256)),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${x2.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 100 / e.value.style.chart.gradientIntensity
            }, null, 8, mt)
          ], 8, yt)
        ]),
        e.value.style.chart.useGradient ? (openBlock(), createElementBlock("g", {
          key: 0,
          filter: `url(#blur_${x2.value})`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (a, l) => (openBlock(), createElementBlock("circle", {
            cx: i.value.centerX,
            cy: i.value.centerY,
            r: a.radius <= 0 ? 1e-4 : a.radius,
            stroke: "white",
            "stroke-width": w.value.track / 3,
            fill: "none",
            "stroke-linecap": "round",
            "stroke-dasharray": a.path.dashArray,
            "stroke-dashoffset": a.path.dashOffset,
            style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
          }, null, 8, kt))), 256))
        ], 8, bt)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (a, l) => (openBlock(), createElementBlock("circle", {
          "data-cy-trap": "",
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: a.radius <= 0 ? 1e-4 : a.radius,
          stroke: "transparent",
          "stroke-width": Math.max(w.value.track, w.value.gutter),
          fill: "none",
          "stroke-dasharray": a.path.bgDashArray,
          "stroke-dashoffset": a.path.fullOffset,
          "stroke-linecap": "round",
          class: "vue-ui-onion-path",
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" },
          onMouseenter: (p2) => fe({
            datapoint: a,
            show: true,
            seriesIndex: l
          }),
          onMouseleave: o[0] || (o[0] = (p2) => {
            b.value = void 0, L.value = false;
          })
        }, null, 40, $t))), 256)),
        e.value.style.chart.layout.labels.show ? (openBlock(), createElementBlock("g", wt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (a, l) => (openBlock(), createElementBlock("g", {
            onMouseenter: (p2) => fe({
              datapoint: a,
              show: true,
              seriesIndex: l
            }),
            onMouseleave: o[1] || (o[1] = (p2) => {
              b.value = void 0, L.value = false;
            })
          }, [
            y.value.includes(a.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("text", {
              key: 0,
              x: r.value.width / 2 - w.value.gutter * 0.8 + e.value.style.chart.layout.labels.offsetX,
              y: a.labelY + e.value.style.chart.layout.labels.offsetY,
              "text-anchor": "end",
              "font-size": e.value.style.chart.layout.labels.fontSize,
              fill: e.value.useBlurOnHover && ![null, void 0].includes(b.value) && b.value === l ? a.color : e.value.style.chart.layout.labels.color,
              "font-weight": e.value.style.chart.layout.labels.bold ? "bold" : "normal"
            }, toDisplayString(a.name ? a.name + ": " : "") + " " + toDisplayString(e.value.style.chart.layout.labels.percentage.show ? unref(Ht)({
              v: a.percentage,
              s: "%",
              r: e.value.style.chart.layout.labels.roundingPercentage
            }) : "") + " " + toDisplayString(!e.value.style.chart.layout.labels.percentage.show && e.value.style.chart.layout.labels.value.show ? `: ${unref(ir)(
              e.value.style.chart.layout.labels.value.formatter,
              a.value,
              unref(Ht)({
                p: a.prefix || "",
                v: a.value || 0,
                s: a.suffix || "",
                r: e.value.style.chart.layout.labels.roundingValue
              }),
              { datapoint: a, seriesIndex: l }
            )}` : `${e.value.style.chart.layout.labels.value.show && a.value ? `(${unref(ir)(
              e.value.style.chart.layout.labels.value.formatter,
              a.value,
              unref(Ht)({
                p: a.prefix || "",
                v: a.value || 0,
                s: a.suffix || "",
                r: e.value.style.chart.layout.labels.roundingValue
              }),
              { datapoint: a, seriesIndex: l }
            )})` : ""}`), 9, xt))
          ], 40, Ct))), 256))
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: r.value }, void 0, true)
      ], 14, ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Tt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(se) || unref(ue) })), void 0, true)
      ])) : createCommentVNode("", true),
      D.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "onion",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            onion: {
              color: e.value.style.chart.layout.gutter.color
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: ee
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${re2.value}`,
          legendSet: c2.value,
          config: Fe.value,
          onClickMarker: o[2] || (o[2] = ({ legend: a }) => ve(a.id))
        }, {
          item: withCtx(({ legend: a }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (l) => a.segregate(),
              style: normalizeStyle(`opacity:${y.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name ? a.name + ": " : "") + " " + toDisplayString((a.percentage || 0).toFixed(e.value.style.chart.legend.roundingPercentage)) + "% ", 13, _t)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: c2.value
        }, void 0, true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: te2,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: $.value.showTooltip && L.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: T.value,
        content: X.value,
        isCustom: unref(Xt)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...E2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...E2.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      D.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: $.value.showTable,
          maxHeight: 1e4,
          head: {
            backgroundColor: e.value.style.chart.backgroundColor,
            color: e.value.style.chart.color
          },
          body: {
            backgroundColor: e.value.style.chart.backgroundColor,
            color: e.value.style.chart.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${oe.value}`,
            colNames: Y.value.colNames,
            head: Y.value.head,
            body: Y.value.body,
            config: Y.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[3] || (o[3] = (a) => $.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createTextVNode(toDisplayString(a), 1)
            ]),
            td: withCtx(({ td: a }) => [
              createBaseVNode("div", { innerHTML: a }, null, 8, Ot)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, ht));
  }
};
var Gt = s(Pt, [["__scopeId", "data-v-cd5ffaad"]]);
export {
  Gt as default
};
//# sourceMappingURL=vue-ui-onion-CT9YjU8v-BYYYUTRD.js.map
