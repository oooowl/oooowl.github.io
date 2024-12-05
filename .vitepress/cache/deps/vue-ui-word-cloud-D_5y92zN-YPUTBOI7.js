import {
  E as E2
} from "./chunk-K5CEUZ2P.js";
import {
  E,
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
  Nt,
  R as R2,
  Vt,
  Xt,
  Zt,
  jt,
  k as k2,
  qt,
  rr,
  rt,
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-word-cloud-D_5y92zN.js
var gt = (c2) => (pushScopeId("data-v-3fd7d274"), c2 = c2(), popScopeId(), c2);
var yt = { "data-html2canvas-ignore": "" };
var bt = {
  key: 0,
  class: "reset-wrapper"
};
var Ct = {
  key: 1,
  class: "reset-wrapper"
};
var kt = { class: "mono-slicer" };
var wt = gt(() => createBaseVNode("div", { class: "slider-track" }, null, -1));
var $t = ["min", "max", "value"];
var xt = {
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
  setup(c2, { emit: B }) {
    const s2 = c2;
    useCssVars((w) => ({
      "90ad3208": j.value,
      "4f9eef70": O2.value,
      "6e07ae3e": k3.value,
      "2fd430a0": c2.selectColor,
      "6b8169a4": T.value
    }));
    const j = computed(() => s2.inputColor), T = computed(() => s2.background), k3 = computed(() => `${s2.selectColor}33`), O2 = computed(() => s2.borderColor);
    function M() {
      B("reset");
    }
    const g = computed(() => {
      const w = s2.max - s2.min, y = 0, S = (s2.value - s2.min) / w * 100;
      return {
        left: `${y}%`,
        width: `${S - y}%`,
        background: s2.selectColor
      };
    });
    return (w, y) => (openBlock(), createElementBlock("div", yt, [
      c2.value !== c2.source ? (openBlock(), createElementBlock("div", bt, [
        c2.useResetSlot ? renderSlot(w.$slots, "reset-action", {
          key: 1,
          reset: M
        }, void 0, true) : (openBlock(), createElementBlock("button", {
          key: 0,
          "data-cy-reset": "",
          tabindex: "0",
          role: "button",
          class: "vue-data-ui-refresh-button",
          onClick: M
        }, [
          createVNode(u, {
            name: "refresh",
            stroke: c2.textColor
          }, null, 8, ["stroke"])
        ]))
      ])) : (openBlock(), createElementBlock("div", Ct)),
      createBaseVNode("div", kt, [
        wt,
        createBaseVNode("div", {
          class: "range-highlight",
          style: normalizeStyle(g.value)
        }, null, 4),
        createBaseVNode("input", {
          type: "range",
          min: c2.min,
          max: c2.max,
          value: Number(c2.value),
          onInput: y[0] || (y[0] = (S) => B("update:value", Number(S.target.value)))
        }, null, 40, $t)
      ])
    ]));
  }
};
var Tt = s(xt, [["__scopeId", "data-v-3fd7d274"]]);
var St = ["id"];
var Ft = ["xmlns", "viewBox"];
var _t = ["transform"];
var Nt2 = ["fill", "font-weight", "x", "y", "font-size", "transform", "onMouseover"];
var Pt = {
  key: 4,
  class: "vue-data-ui-watermark"
};
var zt = ["innerHTML"];
var At = {
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
  setup(c2, { expose: B }) {
    const s2 = c2, { vue_ui_word_cloud: j } = te(), T = computed({
      get() {
        return !!s2.dataset && s2.dataset.length;
      },
      set(t) {
        return t;
      }
    }), k3 = ref(typeof s2.dataset == "string" ? rr(s2.dataset) : s2.dataset.map((t) => ({
      ...t,
      value: k2(t.value)
    }))), O2 = ref(Dt()), M = ref(0), g = ref(null), w = ref(null), y = ref(null), S = ref(0), le = ref(0), Y = ref(false), e = computed({
      get: () => ne(),
      set: (t) => t
    });
    function ne() {
      const t = c({
        userConfig: s2.config,
        defaultConfig: j
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_word_cloud[t.theme] || s2.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => s2.config, (t) => {
      e.value = ne(), re2(), S.value += 1, le.value += 1, q();
    }, { deep: true });
    const se = ref(null), F = ref(0), u2 = ref({
      width: e.value.style.chart.width,
      height: e.value.style.chart.height,
      maxFontSize: e.value.style.chart.words.maxFontSize,
      minFontSize: e.value.style.chart.words.minFontSize
    }), xe = O(() => {
      const { width: t, height: a } = k({
        chart: g.value,
        title: e.value.style.chart.title.text ? w.value : null,
        slicer: e.value.style.chart.zoom.show && se.value,
        source: y.value
      });
      u2.value.width = t, u2.value.height = a, nextTick(H);
    });
    watch(() => F.value, () => {
      Te();
    });
    const Te = E(() => {
      H();
    }, 10);
    function q() {
      F.value = ve.value;
    }
    const D = ref(null);
    onMounted(() => {
      re2(), q();
    });
    function re2() {
      jt(s2.dataset) ? qt({
        componentName: "VueUiWordCloud",
        type: "dataset"
      }) : k3.value.forEach((t, a) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "value"]
        }).forEach((o) => {
          T.value = false, qt({
            componentName: "VueUiWordCloud",
            type: "datasetSerieAttribute",
            property: o,
            index: a
          });
        });
      }), e.value.responsive && (D.value = new ResizeObserver(xe), D.value.observe(g.value.parentNode));
    }
    onBeforeUnmount(() => {
      D.value && D.value.disconnect();
    });
    const { isPrinting: ue, isImaging: ie, generatePdf: ce, generateImage: de } = re({
      elementId: `wordCloud_${O2.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-word-cloud"
    }), m = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    });
    function Se2(t, a, o = "Arial") {
      const l = document.createElement("canvas").getContext("2d");
      return l.font = `${a}px ${e.value.style.chart.words.bold ? "bold" : "normal"} ${o}`, {
        width: l.measureText(t).width + e.value.style.chart.words.proximity,
        height: a
      };
    }
    function Fe(t, a) {
      return t.x < a.x + a.width && t.x + t.width > a.x && t.y < a.y + a.height && t.y + t.height > a.y;
    }
    function _e(t, a, o) {
      const i = [], l = { x: -a / 2, y: -o / 2, width: a, height: o }, f = 0, N = 0;
      return t.forEach((P) => {
        let Z = false;
        for (let L = 0; L < Math.max(a, o) / 2 && !Z; L += e.value.style.chart.words.packingWeight)
          for (let ee = 0; ee < 360 && !Z; ee += e.value.style.chart.words.packingWeight) {
            const pe = ee * Math.PI / 180, Ie = f + L * Math.cos(pe) - P.width / 2, Oe = N + L * Math.sin(pe) - P.height / 2, b = { ...P, x: Ie, y: Oe }, Me = b.x >= l.x && b.y >= l.y && b.x + b.width <= l.x + l.width && b.y + b.height <= l.y + l.height, We = i.some((Re) => Fe(b, Re));
            Me && !We && (i.push(b), Z = true);
          }
      }), i;
    }
    const W2 = ref([]);
    watch(() => s2.dataset, H, { immediate: true });
    const ve = computed(() => Math.min(...k3.value.map((t) => t.value))), Ne = computed(() => Math.max(...k3.value.map((t) => t.value)));
    function H() {
      const t = [...k3.value].filter((l) => l.value >= F.value).map((l) => l.value), a = Math.max(...t), o = Math.min(...t), i = [...k3.value].filter((l) => l.value >= F.value).map((l, f) => {
        const N = (l.value - o) / (a - o) * (u2.value.maxFontSize - u2.value.minFontSize) + u2.value.minFontSize, P = Se2(l.name, N);
        return {
          ...l,
          id: Dt(),
          fontSize: N,
          width: P.width,
          height: P.height,
          color: e.value.style.chart.words.usePalette ? e.value.customPalette[f] || e.value.customPalette[f % e.value.customPalette.length] || rt[f] || rt[f % rt.length] : e.value.style.chart.words.color
        };
      });
      W2.value = _e(i, u2.value.width, u2.value.height).sort((l, f) => f.fontSize - l.fontSize);
    }
    const V = computed(() => {
      const t = W2.value.map((o) => ({
        name: o.name,
        color: o.color
      })), a = W2.value.map((o) => o.value);
      return { head: t, body: a };
    });
    function he() {
      nextTick(() => {
        const t = V.value.head.map((i, l) => [[
          i.name
        ], [V.value.body[l]]]), a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], [e.value.table.columnNames.value]]].concat(t), o = Vt(a);
        Nt({ csvContent: o, title: e.value.style.chart.title.text || "vue-ui-word-cloud" });
      });
    }
    const E3 = computed(() => {
      const t = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value
      ], a = V.value.head.map((l, f) => {
        const N = Ht({ p: e.value.table.td.prefix, v: V.value.body[f], s: e.value.table.td.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: l.color,
            name: l.name
          },
          N
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
    function Pe(t) {
      U.value = t, M.value += 1;
    }
    function ze() {
      return W2.value;
    }
    function me() {
      m.value.showTable = !m.value.showTable;
    }
    function fe() {
      m.value.showTooltip = !m.value.showTooltip;
    }
    const G = ref(false);
    function J() {
      G.value = !G.value;
    }
    B({
      getData: ze,
      generateCsv: he,
      generatePdf: ce,
      generateImage: de,
      toggleTable: me,
      toggleTooltip: fe,
      toggleAnnotator: J
    });
    const _ = ref(null), R3 = ref(false), K = ref(""), Q = ref(null);
    function Ae(t) {
      if (!m.value.showTooltip) return;
      _.value = t.id, Q.value = { datapoint: t, config: e.value };
      const a = e.value.style.chart.tooltip.customFormat;
      if (R3.value = false, Xt(a))
        try {
          const o = a({
            datapoint: t,
            config: e.value
          });
          typeof o == "string" && (K.value = o, R3.value = true);
        } catch {
          console.warn("Custom format cannot be applied."), R3.value = false;
        }
      if (!R3.value) {
        let o = `<svg viewBox="0 0 10 10" height="${e.value.style.chart.tooltip.fontSize}"><circle cx="5" cy="5" r="5" fill="${t.color}"/></svg><span>${t.name}:</span><b>${(t.value || 0).toFixed(e.value.style.chart.tooltip.roundingValue)}</b>`;
        K.value = `<div dir="auto" style="display:flex; gap:4px; align-items:center; jsutify-content:center;">${o}</div>`;
      }
      Y.value = true;
    }
    return (t, a) => (openBlock(), createElementBlock("div", {
      class: "vue-ui-word-cloud",
      ref_key: "wordCloudChart",
      ref: g,
      id: `wordCloud_${O2.value}`,
      style: normalizeStyle(`width: 100%; font-family:${e.value.style.fontFamily};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height:100%" : ""}`)
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: g.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: G.value,
        onClose: J
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "chartTitle",
        ref: w,
        style: "width:100%;background:transparent;padding-bottom:24px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${S.value}`,
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
      e.value.userOptions.show && T.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${M.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ue),
        isImaging: unref(ie),
        uid: O2.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: U.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: g.value,
        position: e.value.userOptions.position,
        hasTooltip: e.value.style.chart.tooltip.show && e.value.userOptions.buttons.tooltip,
        isTooltip: m.value.showTooltip,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: G.value,
        onToggleFullscreen: Pe,
        onGeneratePdf: unref(ce),
        onGenerateCsv: he,
        onGenerateImage: unref(de),
        onToggleTable: me,
        onToggleTooltip: fe,
        onToggleAnnotator: J
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
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: i }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: i })), void 0, true)
          ]),
          key: "4"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: o, isAnnotator: i }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: o, isAnnotator: i })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasTooltip", "isTooltip", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      T.value ? (openBlock(), createElementBlock("svg", {
        key: 3,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": U.value, "vue-data-ui-fulscreen--off": !U.value }),
        xmlns: unref(Jt),
        viewBox: `0 0 ${u2.value.width <= 0 ? 10 : u2.value.width} ${u2.value.height <= 0 ? 10 : u2.value.height}`,
        style: "overflow:visible;background:transparent;"
      }, [
        createVNode(p),
        createBaseVNode("g", {
          transform: `translate(${(u2.value.width <= 0 ? 10 : u2.value.width) / 2}, ${(u2.value.height <= 0 ? 10 : u2.value.height) / 2})`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(W2.value, (o, i) => (openBlock(), createElementBlock("g", null, [
            (openBlock(), createElementBlock("text", {
              fill: o.color,
              "font-weight": e.value.style.chart.words.bold ? "bold" : "normal",
              key: i,
              x: o.x,
              y: o.y,
              "font-size": o.fontSize,
              transform: `translate(${o.width / 2}, ${o.height / 2})`,
              class: normalizeClass({ animated: e.value.useCssAnimation, "word-selected": _.value && _.value === o.id && m.value.showTooltip, "word-not-selected": _.value && _.value !== o.id && m.value.showTooltip }),
              "text-anchor": "middle",
              "dominant-baseline": "central",
              onMouseover: (l) => Ae(o),
              onMouseleave: a[0] || (a[0] = (l) => {
                _.value = null, Y.value = false;
              }),
              style: normalizeStyle(`animation-delay:${i * e.value.animationDelayMs}ms !important;`)
            }, toDisplayString(o.name), 47, Nt2))
          ]))), 256))
        ], 8, _t),
        renderSlot(t.$slots, "svg", {
          svg: { height: u2.value.height, width: u2.value.width }
        }, void 0, true)
      ], 10, Ft)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Pt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ue) || unref(ie) })), void 0, true)
      ])) : createCommentVNode("", true),
      createVNode(E2, {
        show: m.value.showTooltip && Y.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        fontSize: e.value.style.chart.tooltip.fontSize,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: g.value,
        content: K.value,
        isCustom: R3.value
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...Q.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...Q.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      createBaseVNode("div", {
        ref_key: "chartSlicer",
        ref: se,
        style: "width:100%;background:transparent",
        "data-html2canvas-ignore": ""
      }, [
        e.value.style.chart.zoom.show ? (openBlock(), createBlock(Tt, {
          key: 0,
          value: F.value,
          "onUpdate:value": a[1] || (a[1] = (o) => F.value = o),
          min: ve.value,
          max: Ne.value,
          textColor: e.value.style.chart.color,
          inputColor: e.value.style.chart.zoom.color,
          selectColor: e.value.style.chart.zoom.highlightColor,
          useResetSlot: e.value.style.chart.zoom.useResetSlot,
          background: e.value.style.chart.zoom.color,
          borderColor: e.value.style.chart.backgroundColor,
          source: e.value.style.chart.width,
          onReset: q
        }, {
          "reset-action": withCtx(({ reset: o }) => [
            renderSlot(t.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: o })), void 0, true)
          ]),
          _: 3
        }, 8, ["value", "min", "max", "textColor", "inputColor", "selectColor", "useResetSlot", "background", "borderColor", "source"])) : createCommentVNode("", true)
      ], 512),
      t.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 5,
        ref_key: "source",
        ref: y,
        dir: "auto"
      }, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      T.value ? (openBlock(), createBlock(R, {
        key: 6,
        hideDetails: "",
        config: {
          open: m.value.showTable,
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
            key: `table_${le.value}`,
            colNames: E3.value.colNames,
            head: E3.value.head,
            body: E3.value.body,
            config: E3.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (o) => m.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", {
                innerHTML: o,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, zt)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o.name || o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 12, St));
  }
};
var jt2 = s(At, [["__scopeId", "data-v-13d267e2"]]);
export {
  jt2 as default
};
//# sourceMappingURL=vue-ui-word-cloud-D_5y92zN-YPUTBOI7.js.map
