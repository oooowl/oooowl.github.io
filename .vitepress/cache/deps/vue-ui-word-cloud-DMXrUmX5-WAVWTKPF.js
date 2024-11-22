import {
  E as E2
} from "./chunk-57X6EWGW.js";
import {
  E,
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
  Ht,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  er,
  et,
  k,
  oe,
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
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-word-cloud-DMXrUmX5.js
var ht = (i) => (pushScopeId("data-v-3fd7d274"), i = i(), popScopeId(), i);
var mt = { "data-html2canvas-ignore": "" };
var ft = {
  key: 0,
  class: "reset-wrapper"
};
var pt = {
  key: 1,
  class: "reset-wrapper"
};
var gt = { class: "mono-slicer" };
var yt = ht(() => createBaseVNode("div", { class: "slider-track" }, null, -1));
var bt = ["min", "max", "value"];
var Ct = {
  __name: "MonoSlicer",
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    inputColor: {
      type: String,
      default: "#1A1A1A"
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    borderColor: {
      type: String,
      default: "#FFFFFF"
    },
    selectColor: {
      type: String,
      default: "#4A4A4A"
    },
    textColor: {
      type: String,
      default: "#1A1A1A"
    },
    useResetSlot: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    source: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:value", "reset"],
  setup(i, { emit: B }) {
    const s2 = i;
    useCssVars((w) => ({
      "90ad3208": X.value,
      "4f9eef70": P.value,
      "6e07ae3e": b.value,
      "2fd430a0": i.selectColor,
      "6b8169a4": x2.value
    }));
    const X = computed(() => s2.inputColor), x2 = computed(() => s2.background), b = computed(() => `${s2.selectColor}33`), P = computed(() => s2.borderColor);
    function I() {
      B("reset");
    }
    const C = computed(() => {
      const w = s2.max - s2.min, g = 0, S = (s2.value - s2.min) / w * 100;
      return {
        left: `${g}%`,
        width: `${S - g}%`,
        background: s2.selectColor
      };
    });
    return (w, g) => (openBlock(), createElementBlock("div", mt, [
      i.value !== i.source ? (openBlock(), createElementBlock("div", ft, [
        i.useResetSlot ? renderSlot(w.$slots, "reset-action", {
          key: 1,
          reset: I
        }, void 0, true) : (openBlock(), createElementBlock("button", {
          key: 0,
          "data-cy-reset": "",
          tabindex: "0",
          role: "button",
          class: "vue-data-ui-refresh-button",
          onClick: I
        }, [
          createVNode(u, {
            name: "refresh",
            stroke: i.textColor
          }, null, 8, ["stroke"])
        ]))
      ])) : (openBlock(), createElementBlock("div", pt)),
      createBaseVNode("div", gt, [
        yt,
        createBaseVNode("div", {
          class: "range-highlight",
          style: normalizeStyle(C.value)
        }, null, 4),
        createBaseVNode("input", {
          type: "range",
          min: i.min,
          max: i.max,
          value: Number(i.value),
          onInput: g[0] || (g[0] = (S) => B("update:value", Number(S.target.value)))
        }, null, 40, bt)
      ])
    ]));
  }
};
var wt = s(Ct, [["__scopeId", "data-v-3fd7d274"]]);
var kt = ["id"];
var $t = ["xmlns", "viewBox"];
var xt = ["transform"];
var St = ["fill", "font-weight", "x", "y", "font-size", "transform", "onMouseover"];
var Tt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Ft = ["innerHTML"];
var _t = {
  __name: "vue-ui-word-cloud",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: [Array, String],
      default() {
        return [];
      }
    }
  },
  setup(i, { expose: B }) {
    const s2 = i, { vue_ui_word_cloud: X } = oe(), x2 = computed({
      get() {
        return !!s2.dataset && s2.dataset.length;
      },
      set(t) {
        return t;
      }
    }), b = ref(typeof s2.dataset == "string" ? er(s2.dataset) : s2.dataset.map((t) => ({
      ...t,
      value: k(t.value)
    }))), P = ref(Lt()), I = ref(0), C = ref(null), w = ref(null), g = ref(0), S = ref(0), j = ref(false), e = computed({
      get: () => oe2(),
      set: (t) => t
    });
    function oe2() {
      const t = c({
        userConfig: s2.config,
        defaultConfig: X
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_word_cloud[t.theme] || s2.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => s2.config, (t) => {
      e.value = oe2(), le(), g.value += 1, S.value += 1, Y();
    }, { deep: true });
    const ae = ref(null), T = ref(0), r = ref({
      width: e.value.style.chart.width,
      height: e.value.style.chart.height,
      maxFontSize: e.value.style.chart.words.maxFontSize,
      minFontSize: e.value.style.chart.words.minFontSize
    }), we = O(() => {
      const { width: t, height: a } = M({
        chart: C.value,
        title: e.value.style.chart.title.text ? w.value : null,
        slicer: e.value.style.chart.zoom.show && ae.value
      });
      r.value.width = t, r.value.height = a, nextTick(q);
    });
    watch(() => T.value, () => {
      ke();
    });
    const ke = E(() => {
      q();
    }, 10);
    function Y() {
      T.value = ie2.value;
    }
    const D = ref(null);
    onMounted(() => {
      le(), Y();
    });
    function le() {
      Xt(s2.dataset) ? Kt({
        componentName: "VueUiWordCloud",
        type: "dataset"
      }) : b.value.forEach((t, a) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "value"]
        }).forEach((o) => {
          x2.value = false, Kt({
            componentName: "VueUiWordCloud",
            type: "datasetSerieAttribute",
            property: o,
            index: a
          });
        });
      }), e.value.responsive && (D.value = new ResizeObserver(we), D.value.observe(C.value.parentNode));
    }
    onBeforeUnmount(() => {
      D.value && D.value.disconnect();
    });
    const { isPrinting: se2, isImaging: ne, generatePdf: re, generateImage: ue } = se({
      elementId: `wordCloud_${P.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-word-cloud"
    }), d = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    });
    function $e(t, a, o = "Arial") {
      const l = document.createElement("canvas").getContext("2d");
      return l.font = `${a}px ${e.value.style.chart.words.bold ? "bold" : "normal"} ${o}`, {
        width: l.measureText(t).width + e.value.style.chart.words.proximity,
        height: a
      };
    }
    function xe(t, a) {
      return t.x < a.x + a.width && t.x + t.width > a.x && t.y < a.y + a.height && t.y + t.height > a.y;
    }
    function Se(t, a, o) {
      const c2 = [], l = { x: -a / 2, y: -o / 2, width: a, height: o }, v = 0, _ = 0;
      return t.forEach((N) => {
        let K = false;
        for (let G = 0; G < Math.max(a, o) / 2 && !K; G += e.value.style.chart.words.packingWeight)
          for (let Q = 0; Q < 360 && !K; Q += e.value.style.chart.words.packingWeight) {
            const he = Q * Math.PI / 180, ze = v + G * Math.cos(he) - N.width / 2, Pe = _ + G * Math.sin(he) - N.height / 2, y = { ...N, x: ze, y: Pe }, Ie = y.x >= l.x && y.y >= l.y && y.x + y.width <= l.x + l.width && y.y + y.height <= l.y + l.height, Oe = c2.some((Me) => xe(y, Me));
            Ie && !Oe && (c2.push(y), K = true);
          }
      }), c2;
    }
    const O2 = ref([]);
    watch(() => s2.dataset, q, { immediate: true });
    const ie2 = computed(() => Math.min(...b.value.map((t) => t.value))), Te = computed(() => Math.max(...b.value.map((t) => t.value)));
    function q() {
      const t = [...b.value].filter((l) => l.value >= T.value).map((l) => l.value), a = Math.max(...t), o = Math.min(...t), c2 = [...b.value].filter((l) => l.value >= T.value).map((l, v) => {
        const _ = (l.value - o) / (a - o) * (r.value.maxFontSize - r.value.minFontSize) + r.value.minFontSize, N = $e(l.name, _);
        return {
          ...l,
          id: Lt(),
          fontSize: _,
          width: N.width,
          height: N.height,
          color: e.value.style.chart.words.usePalette ? e.value.customPalette[v] || e.value.customPalette[v % e.value.customPalette.length] || et[v] || et[v % et.length] : e.value.style.chart.words.color
        };
      });
      O2.value = Se(c2, r.value.width, r.value.height).sort((l, v) => v.fontSize - l.fontSize);
    }
    const V = computed(() => {
      const t = O2.value.map((o) => ({
        name: o.name,
        color: o.color
      })), a = O2.value.map((o) => o.value);
      return { head: t, body: a };
    });
    function ce() {
      nextTick(() => {
        const t = V.value.head.map((c2, l) => [[
          c2.name
        ], [V.value.body[l]]]), a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], [e.value.table.columnNames.value]]].concat(t), o = Nt(a);
        Ot({ csvContent: o, title: e.value.style.chart.title.text || "vue-ui-word-cloud" });
      });
    }
    const E3 = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value
      ], a = V.value.head.map((l, v) => {
        const _ = Gt({ p: e.value.table.td.prefix, v: V.value.body[v], s: e.value.table.td.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: l.color,
            name: l.name
          },
          _
        ];
      }), o = {
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
      return {
        colNames: [
          e.value.table.columnNames.series,
          e.value.table.columnNames.value
        ],
        head: t,
        body: a,
        config: o
      };
    }), U = ref(false);
    function Fe(t) {
      U.value = t, I.value += 1;
    }
    function _e() {
      return O2.value;
    }
    function de() {
      d.value.showTable = !d.value.showTable;
    }
    function ve() {
      d.value.showTooltip = !d.value.showTooltip;
    }
    B({
      getData: _e,
      generateCsv: ce,
      generatePdf: re,
      generateImage: ue,
      toggleTable: de,
      toggleTooltip: ve
    });
    const F = ref(null), M2 = ref(false), H = ref(""), J = ref(null);
    function Ne(t) {
      if (!d.value.showTooltip) return;
      F.value = t.id, J.value = { datapoint: t, config: e.value };
      const a = e.value.style.chart.tooltip.customFormat;
      if (M2.value = false, Ht(a))
        try {
          const o = a({
            datapoint: t,
            config: e.value
          });
          typeof o == "string" && (H.value = o, M2.value = true);
        } catch {
          console.warn("Custom format cannot be applied."), M2.value = false;
        }
      if (!M2.value) {
        let o = `<svg viewBox="0 0 10 10" height="${e.value.style.chart.tooltip.fontSize}"><circle cx="5" cy="5" r="5" fill="${t.color}"/></svg><span>${t.name}:</span><b>${(t.value || 0).toFixed(e.value.style.chart.tooltip.roundingValue)}</b>`;
        H.value = `<div dir="auto" style="display:flex; gap:4px; align-items:center; jsutify-content:center;">${o}</div>`;
      }
      j.value = true;
    }
    return (t, a) => (openBlock(), createElementBlock("div", {
      class: "vue-ui-word-cloud",
      ref_key: "wordCloudChart",
      ref: C,
      id: `wordCloud_${P.value}`,
      style: normalizeStyle(`width: 100%; font-family:${e.value.style.fontFamily};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: w,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${g.value}`,
          config: {
            title: {
              ...e.value.style.chart.title
            },
            subtitle: {
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && x2.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${I.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(se2),
        isImaging: unref(ne),
        uid: P.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: U.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: C.value,
        position: e.value.userOptions.position,
        hasTooltip: e.value.style.chart.tooltip.show && e.value.userOptions.buttons.tooltip,
        isTooltip: d.value.showTooltip,
        onToggleFullscreen: Fe,
        onGeneratePdf: unref(re),
        onGenerateCsv: ce,
        onGenerateImage: unref(ue),
        onToggleTable: de,
        onToggleTooltip: ve
      }, createSlots({ _: 2 }, [
        t.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        t.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        t.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: c2 }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: c2 })), void 0, true)
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasTooltip", "isTooltip", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      x2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": U.value, "vue-data-ui-fulscreen--off": !U.value }),
        xmlns: unref(Qt),
        viewBox: `0 0 ${r.value.width <= 0 ? 10 : r.value.width} ${r.value.height <= 0 ? 10 : r.value.height}`,
        style: "overflow:visible;background:transparent;"
      }, [
        createVNode(p),
        createBaseVNode("g", {
          transform: `translate(${(r.value.width <= 0 ? 10 : r.value.width) / 2}, ${(r.value.height <= 0 ? 10 : r.value.height) / 2})`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(O2.value, (o, c2) => (openBlock(), createElementBlock("g", null, [
            (openBlock(), createElementBlock("text", {
              fill: o.color,
              "font-weight": e.value.style.chart.words.bold ? "bold" : "normal",
              key: c2,
              x: o.x,
              y: o.y,
              "font-size": o.fontSize,
              transform: `translate(${o.width / 2}, ${o.height / 2})`,
              class: normalizeClass({ animated: e.value.useCssAnimation, "word-selected": F.value && F.value === o.id && d.value.showTooltip, "word-not-selected": F.value && F.value !== o.id && d.value.showTooltip }),
              "text-anchor": "middle",
              "dominant-baseline": "middle",
              onMouseover: (l) => Ne(o),
              onMouseleave: a[0] || (a[0] = (l) => {
                F.value = null, j.value = false;
              }),
              style: normalizeStyle(`animation-delay:${c2 * e.value.animationDelayMs}ms !important;`)
            }, toDisplayString(o.name), 47, St))
          ]))), 256))
        ], 8, xt),
        renderSlot(t.$slots, "svg", {
          svg: { height: r.value.height, width: r.value.width }
        }, void 0, true)
      ], 10, $t)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Tt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(se2) || unref(ne) })), void 0, true)
      ])) : createCommentVNode("", true),
      createVNode(E2, {
        show: d.value.showTooltip && j.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: C.value,
        content: H.value,
        isCustom: M2.value
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...J.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...J.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      createBaseVNode("div", {
        ref_key: "chartSlicer",
        ref: ae,
        style: "width:100%;background:transparent",
        "data-html2canvas-ignore": ""
      }, [
        e.value.style.chart.zoom.show ? (openBlock(), createBlock(wt, {
          key: 0,
          value: T.value,
          "onUpdate:value": a[1] || (a[1] = (o) => T.value = o),
          min: ie2.value,
          max: Te.value,
          textColor: e.value.style.chart.color,
          inputColor: e.value.style.chart.zoom.color,
          selectColor: e.value.style.chart.zoom.highlightColor,
          useResetSlot: e.value.style.chart.zoom.useResetSlot,
          background: e.value.style.chart.zoom.color,
          borderColor: e.value.style.chart.backgroundColor,
          source: e.value.style.chart.width,
          onReset: Y
        }, {
          "reset-action": withCtx(({ reset: o }) => [
            renderSlot(t.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: o })), void 0, true)
          ]),
          _: 3
        }, 8, ["value", "min", "max", "textColor", "inputColor", "selectColor", "useResetSlot", "background", "borderColor", "source"])) : createCommentVNode("", true)
      ], 512),
      x2.value ? (openBlock(), createBlock(R, {
        key: 4,
        hideDetails: "",
        config: {
          open: d.value.showTable,
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
            key: `table_${S.value}`,
            colNames: E3.value.colNames,
            head: E3.value.head,
            body: E3.value.body,
            config: E3.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (o) => d.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", {
                innerHTML: o,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Ft)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o.name || o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 12, kt));
  }
};
var Et = s(_t, [["__scopeId", "data-v-7f4cd511"]]);
export {
  Et as default
};
//# sourceMappingURL=vue-ui-word-cloud-DMXrUmX5-WAVWTKPF.js.map
