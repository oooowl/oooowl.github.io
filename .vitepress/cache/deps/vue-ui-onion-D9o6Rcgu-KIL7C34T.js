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
  Xt,
  et,
  j,
  nr,
  oe,
  or
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-onion-D9o6Rcgu.js
var nt = ["id"];
var ut = ["xmlns", "viewBox"];
var it = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
var ct = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
var dt = ["id"];
var vt = ["stdDeviation"];
var ht = ["filter"];
var ft = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
var gt = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "onMouseenter"];
var pt = { key: 1 };
var yt = ["onMouseenter"];
var mt = ["x", "y", "font-size", "fill", "font-weight"];
var bt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var kt = ["onClick"];
var $t2 = ["innerHTML"];
var wt = {
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
  setup(me, { expose: be, emit: ke }) {
    const k = me, { vue_ui_onion: $e } = oe(), R3 = computed(() => !!k.dataset && k.dataset.length), x2 = ref(Lt()), we = ref(null), J = ref(0), A = ref(false), V = ref(""), p2 = ref([]), P = ref(null), K = ref(null), Q = ref(null), Z = ref(0), ee = ref(0), te = ref(0), e = computed({
      get: () => ae(),
      set: (a) => a
    });
    function ae() {
      const a = c({
        userConfig: k.config,
        defaultConfig: $e
      });
      return a.theme ? {
        ...c({
          userConfig: Ge.vue_ui_onion[a.theme] || k.config,
          defaultConfig: a
        }),
        customPalette: R2[a.theme] || et
      } : a;
    }
    watch(() => k.config, (a) => {
      e.value = ae(), ne(), Z.value += 1, ee.value += 1, te.value += 1;
    }, { deep: true });
    const { isPrinting: le, isImaging: oe2, generatePdf: re, generateImage: se2 } = se({
      elementId: `vue-ui-onion_${x2.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-onion"
    }), xe = computed(() => or(e.value.customPalette)), $ = ref({
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
    }), D = ref(null);
    onMounted(() => {
      ne();
    });
    function ne() {
      if (Xt(k.dataset) && Kt({
        componentName: "VueUiOnion",
        type: "dataset"
      }), e.value.responsive) {
        const o = O(() => {
          const { width: t, height: l } = M({
            chart: P.value,
            title: e.value.style.chart.title.text ? K.value : null,
            legend: e.value.style.chart.legend.show ? Q.value : null
          });
          r.value.width = t, r.value.height = l, r.value.padding.top = Math.max(t, l) * 0.125, r.value.padding.right = Math.max(t, l) * 0.125, r.value.padding.bottom = Math.max(t, l) * 0.125, r.value.padding.left = Math.max(t, l) * 0.125, r.value.minRadius = Math.min(t, l) * 0.125;
        });
        D.value = new ResizeObserver(o), D.value.observe(P.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      D.value && D.value.disconnect();
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
    })), c2 = computed(() => (k.dataset.forEach((a, o) => {
      [null, void 0].includes(a.name) && Kt({
        componentName: "VueUiOnion",
        type: "datasetSerieAttribute",
        property: "name",
        index: o
      }), [void 0].includes(a.percentage) && Kt({
        componentName: "VueUiOnion",
        type: "datasetSerieAttribute",
        property: "percentage",
        index: o
      });
    }), k.dataset.map((a, o) => {
      const t = `onion_serie_${o}_${x2.value}`;
      return {
        ...a,
        percentage: a.percentage || 0,
        targetPercentage: a.percentage || 0,
        color: j(a.color) || xe.value[o] || et[o],
        id: t,
        shape: "circle",
        opacity: p2.value.includes(t) ? 0.5 : 1,
        absoluteIndex: o,
        segregate: () => ue(t),
        isSegregated: p2.value.includes(t)
      };
    }))), O2 = ref(c2.value), Ce = computed(() => e.value.useStartAnimation), _e = ref(null), Te = computed(() => Math.max(...c2.value.map((a) => a.percentage))), X = ref(false);
    watch(() => c2.value, Pe, { immediate: true });
    function Pe() {
      if (Ce.value && !X.value) {
        let o = function() {
          a >= Te.value ? (cancelAnimationFrame(_e.value), O2.value = c2.value, X.value = true) : (O2.value = c2.value.map((t) => ({
            ...t,
            percentage: a < t.targetPercentage ? a : t.targetPercentage
          })), a += 1, requestAnimationFrame(o), X.value = true);
        };
        O2.value = c2.value.map((t) => ({
          ...t,
          percentage: 0
        }));
        let a = 0;
        o();
      } else
        O2.value = c2.value;
    }
    const Oe = computed(() => ({
      cy: "onion-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), Ie = computed(() => c2.value.filter((a) => !p2.value.includes(a.id)).length), w = computed(() => {
      const a = Math.min(i.value.width, i.value.height) / 2 / c2.value.length;
      return {
        gutter: (a > e.value.style.chart.layout.maxThickness ? e.value.style.chart.layout.maxThickness : a) * e.value.style.chart.layout.gutter.width,
        track: (a > e.value.style.chart.layout.maxThickness ? e.value.style.chart.layout.maxThickness : a) * e.value.style.chart.layout.track.width
      };
    }), y = computed(() => O2.value.filter((a) => !p2.value.includes(a.id)).map((a, o) => {
      const t = (i.value.maxRadius - w.value.track) / Ie.value / 2 * (1 + o), l = i.value.centerY - t;
      return {
        percentage: a.percentage || 0,
        ...a,
        labelY: l,
        radius: t,
        path: Se(t, a.percentage || 0)
      };
    }));
    function Se(a, o) {
      const t = 2 * Math.PI * a, l = t * 0.75, f = `${l} ${t}`, S = l * (1 - o / 100);
      return {
        bgDashArray: `${l} ${t}`,
        bgDashOffset: 0,
        dashArray: f,
        dashOffset: S,
        fullOffset: 0,
        active: `
            M ${i.value.centerX},${i.value.centerY - a} 
            A ${a},${a} 0 1 1 
            ${i.value.centerX + a * Math.cos(Math.PI * 3 / 4)},${i.value.centerY + a * Math.sin(Math.PI * 3 / 4)}
        `.trim()
      };
    }
    function ue(a) {
      p2.value.includes(a) ? p2.value = p2.value.filter((o) => o !== a) : p2.value.push(a), ke("selectLegend", y.value);
    }
    function Me() {
      return y.value;
    }
    const G = computed(() => {
      const a = [e.value.table.translations.serie, e.value.table.translations.percentage, e.value.table.translations.value], o = y.value.map((t) => [
        t.name,
        t.percentage,
        t.value
      ]);
      return { head: a, body: o };
    }), L = computed(() => {
      const a = G.value.head, o = y.value.map((l) => [
        `<span style="color:${l.color}">⬤</span> ${l.name}`,
        `${Number(l.percentage ?? 0).toFixed(e.value.table.td.roundingPercentage).toLocaleString()}%`,
        `${l.prefix || ""}${[null, void 0, NaN, "NaN"].includes(l.value) ? "-" : l.value.toFixed(e.value.table.td.roundingValue).toLocaleString()}${l.suffix || ""}`
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
      };
      return { head: a, body: o, config: t, colNames: a };
    });
    function ie2() {
      nextTick(() => {
        const a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], o = G.value.head, t = G.value.body, l = a.concat([o]).concat(t), f = Nt(l);
        Ot({ csvContent: f, title: e.value.style.chart.title.text || "vue-ui-onion" });
      });
    }
    const m = ref(void 0), I = ref(false);
    function Fe(a) {
      I.value = a, J.value += 1;
    }
    const U = ref(null);
    function ce({ datapoint: a, seriesIndex: o, show: t = true }) {
      const l = a.absoluteIndex;
      m.value = o, U.value = {
        datapoint: a,
        seriesIndex: l,
        series: c2.value,
        config: e.value
      }, A.value = t;
      let f = "";
      const S = e.value.style.chart.tooltip.customFormat;
      if (Ht(S) && $t(() => S({
        seriesIndex: l,
        datapoint: a,
        series: c2.value,
        config: e.value
      })))
        V.value = S({
          seriesIndex: l,
          datapoint: a,
          series: c2.value,
          config: e.value
        });
      else {
        const E2 = e.value.style.chart.tooltip.showPercentage, H = e.value.style.chart.tooltip.showValue;
        f += `<div style="width: 100%; border-bottom: 1px solid ${e.value.style.chart.tooltip.borderColor}; padding-bottom: 6px;margin-bottom:3px;display:flex;flex-direction:row;gap:3px;align-items:center"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${a.color}"/></svg><span></span>${a.name}</span></div>`, f += `<div style="width:100%;text-align:left;"><b>${E2 ? Gt({ p: "", v: a.percentage, s: "%", r: e.value.style.chart.tooltip.roundingPercentage }) : ""}</b> ${E2 && H ? "(" : ""}${H ? nr(
          e.value.style.chart.layout.labels.value.formatter,
          a.value,
          Gt({
            p: a.prefix || "",
            v: a.value,
            s: a.suffix || "",
            r: e.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: a, seriesIndex: o }
        ) : ""}${E2 && H ? ")" : ""}</div>`, V.value = `<div>${f}</div>`;
      }
    }
    function de() {
      $.value.showTable = !$.value.showTable;
    }
    function ve() {
      $.value.showTooltip = !$.value.showTooltip;
    }
    return be({
      getData: Me,
      generatePdf: re,
      generateCsv: ie2,
      generateImage: se2,
      toggleTable: de,
      toggleTooltip: ve
    }), (a, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-onion ${I.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "onionChart",
      ref: P,
      id: `vue-ui-onion_${x2.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive ? "height: 100%;" : ""} text-align:center;background:${e.value.style.chart.backgroundColor}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: K,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${Z.value}`,
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
      e.value.userOptions.show && R3.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: we,
        key: `user_options${J.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isImaging: unref(oe2),
        isPrinting: unref(le),
        uid: x2.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: I.value,
        isTooltip: $.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: P.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Fe,
        onGeneratePdf: unref(re),
        onGenerateCsv: ie2,
        onGenerateImage: unref(se2),
        onToggleTable: de,
        onToggleTooltip: ve
      }, createSlots({ _: 2 }, [
        a.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        a.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        a.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        a.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        a.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(a.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        a.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: l }) => [
            renderSlot(a.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: l })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      R3.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": I.value, "vue-data-ui-fulscreen--off": !I.value }),
        viewBox: `0 0 ${r.value.width <= 0 ? 1e-4 : r.value.width} ${r.value.height <= 0 ? 1e-4 : r.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, l) => (openBlock(), createElementBlock("circle", {
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: t.radius <= 0 ? 1e-4 : t.radius,
          stroke: e.value.style.chart.layout.gutter.color,
          "stroke-width": w.value.gutter,
          fill: "none",
          "stroke-dasharray": t.path.bgDashArray,
          "stroke-dashoffset": t.path.fullOffset,
          "stroke-linecap": "round",
          class: normalizeClass({ "vue-ui-onion-path": true, "vue-ui-onion-blur": e.value.useBlurOnHover && ![null, void 0].includes(m.value) && m.value !== l }),
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
        }, null, 10, it))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, l) => (openBlock(), createElementBlock("circle", {
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: t.radius < 0 ? 1e-4 : t.radius,
          stroke: `${t.color}`,
          "stroke-width": w.value.track,
          fill: "none",
          "stroke-dasharray": t.path.dashArray,
          "stroke-dashoffset": t.path.dashOffset,
          class: normalizeClass({ "vue-ui-onion-path": true, "vue-ui-onion-blur": e.value.useBlurOnHover && ![null, void 0].includes(m.value) && m.value !== l }),
          "stroke-linecap": "round",
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
        }, null, 10, ct))), 256)),
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
            }, null, 8, vt)
          ], 8, dt)
        ]),
        e.value.style.chart.useGradient ? (openBlock(), createElementBlock("g", {
          key: 0,
          filter: `url(#blur_${x2.value})`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, l) => (openBlock(), createElementBlock("circle", {
            cx: i.value.centerX,
            cy: i.value.centerY,
            r: t.radius <= 0 ? 1e-4 : t.radius,
            stroke: "white",
            "stroke-width": w.value.track / 3,
            fill: "none",
            "stroke-linecap": "round",
            "stroke-dasharray": t.path.dashArray,
            "stroke-dashoffset": t.path.dashOffset,
            style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" }
          }, null, 8, ft))), 256))
        ], 8, ht)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, l) => (openBlock(), createElementBlock("circle", {
          "data-cy-trap": "",
          cx: i.value.centerX,
          cy: i.value.centerY,
          r: t.radius <= 0 ? 1e-4 : t.radius,
          stroke: "transparent",
          "stroke-width": Math.max(w.value.track, w.value.gutter),
          fill: "none",
          "stroke-dasharray": t.path.bgDashArray,
          "stroke-dashoffset": t.path.fullOffset,
          "stroke-linecap": "round",
          class: "vue-ui-onion-path",
          style: { transform: "rotate(-90deg)", "transform-origin": "50% 50%" },
          onMouseenter: (f) => ce({
            datapoint: t,
            show: true,
            seriesIndex: l
          }),
          onMouseleave: o[0] || (o[0] = (f) => {
            m.value = void 0, A.value = false;
          })
        }, null, 40, gt))), 256)),
        e.value.style.chart.layout.labels.show ? (openBlock(), createElementBlock("g", pt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, l) => (openBlock(), createElementBlock("g", {
            onMouseenter: (f) => ce({
              datapoint: t,
              show: true,
              seriesIndex: l
            }),
            onMouseleave: o[1] || (o[1] = (f) => {
              m.value = void 0, A.value = false;
            })
          }, [
            p2.value.includes(t.id) ? createCommentVNode("", true) : (openBlock(), createElementBlock("text", {
              key: 0,
              x: r.value.width / 2 - w.value.gutter * 0.8 + e.value.style.chart.layout.labels.offsetX,
              y: t.labelY + e.value.style.chart.layout.labels.offsetY,
              "text-anchor": "end",
              "font-size": e.value.style.chart.layout.labels.fontSize,
              fill: e.value.useBlurOnHover && ![null, void 0].includes(m.value) && m.value === l ? t.color : e.value.style.chart.layout.labels.color,
              "font-weight": e.value.style.chart.layout.labels.bold ? "bold" : "normal"
            }, toDisplayString(t.name ? t.name + ": " : "") + " " + toDisplayString(e.value.style.chart.layout.labels.percentage.show ? unref(Gt)({
              v: t.percentage,
              s: "%",
              r: e.value.style.chart.layout.labels.roundingPercentage
            }) : "") + " " + toDisplayString(!e.value.style.chart.layout.labels.percentage.show && e.value.style.chart.layout.labels.value.show ? `: ${unref(nr)(
              e.value.style.chart.layout.labels.value.formatter,
              t.value,
              unref(Gt)({
                p: t.prefix || "",
                v: t.value || 0,
                s: t.suffix || "",
                r: e.value.style.chart.layout.labels.roundingValue
              }),
              { datapoint: t, seriesIndex: l }
            )}` : `${e.value.style.chart.layout.labels.value.show && t.value ? `(${unref(nr)(
              e.value.style.chart.layout.labels.value.formatter,
              t.value,
              unref(Gt)({
                p: t.prefix || "",
                v: t.value || 0,
                s: t.suffix || "",
                r: e.value.style.chart.layout.labels.roundingValue
              }),
              { datapoint: t, seriesIndex: l }
            )})` : ""}`), 9, mt))
          ], 40, yt))), 256))
        ])) : createCommentVNode("", true),
        renderSlot(a.$slots, "svg", { svg: r.value }, void 0, true)
      ], 14, ut)) : createCommentVNode("", true),
      a.$slots.watermark ? (openBlock(), createElementBlock("div", bt, [
        renderSlot(a.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(le) || unref(oe2) })), void 0, true)
      ])) : createCommentVNode("", true),
      R3.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        ref: Q
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${te.value}`,
          legendSet: c2.value,
          config: Oe.value,
          onClickMarker: o[2] || (o[2] = ({ legend: t }) => ue(t.id))
        }, {
          item: withCtx(({ legend: t }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (l) => t.segregate(),
              style: normalizeStyle(`opacity:${p2.value.includes(t.id) ? 0.5 : 1}`)
            }, toDisplayString(t.name ? t.name + ": " : "") + " " + toDisplayString((t.percentage || 0).toFixed(e.value.style.chart.legend.roundingPercentage)) + "% ", 13, kt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(a.$slots, "legend", {
          key: 1,
          legend: c2.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: $.value.showTooltip && A.value,
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
        content: V.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(a.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...U.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(a.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...U.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      R3.value ? (openBlock(), createBlock(R, {
        key: 5,
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
            key: `table_${ee.value}`,
            colNames: L.value.colNames,
            head: L.value.head,
            body: L.value.body,
            config: L.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[3] || (o[3] = (t) => $.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createTextVNode(toDisplayString(t), 1)
            ]),
            td: withCtx(({ td: t }) => [
              createBaseVNode("div", { innerHTML: t }, null, 8, $t2)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, nt));
  }
};
var Dt = s(wt, [["__scopeId", "data-v-3e9f72db"]]);
export {
  Dt as default
};
//# sourceMappingURL=vue-ui-onion-D9o6Rcgu-KIL7C34T.js.map
