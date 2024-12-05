import {
  C
} from "./chunk-KAESDEK5.js";
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
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Gt,
  It,
  Kt,
  Lt,
  Mt,
  Qt,
  Xt,
  j,
  nr,
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
  createVNode,
  guardReactiveProps,
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-bullet-CQKaC4wG.js
var $e = ["id"];
var Be = ["xmlns", "viewBox"];
var Fe = { key: 0 };
var Ie = ["x", "y", "height", "width", "fill", "stroke"];
var Pe = ["x", "y", "height", "width", "rx", "fill", "stroke", "stroke-width"];
var Se = ["x", "y", "height", "width", "fill", "stroke", "stroke-width"];
var He = ["x", "y", "font-size", "font-weight", "fill"];
var ze = ["x", "y", "height", "width", "rx", "fill", "stroke", "stroke-width"];
var Me = { key: 3 };
var Ne = ["x", "y", "fill", "font-size", "font-weight"];
var Oe = { key: 4 };
var Ae = ["x1", "x2", "y1", "y2", "stroke"];
var Te = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Ue = {
  class: "vue-ui-bullet-legend-item",
  dir: "auto"
};
var We = { style: { "margin-right": "2px" } };
var Ee = {
  __name: "vue-ui-bullet",
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
  setup(Y, { expose: J }) {
    const o = Y, { vue_ui_bullet: K } = oe(), S = ref(null), Q = ref(null), H = ref(0), Z = ref(null), ee = ref(0), C2 = computed({
      get: () => true,
      set: (t) => t
    }), y = computed(() => o.dataset.segments ? Array.isArray(o.dataset.segments) ? o.dataset.segments.length ? true : (console.warn(`VueUiBullet: dataset segments is empty. Provide segments with this datastructure:

segments: [
    {
        name: string;
        from: number;
        to: number;
        color?: string;
    },
    {...}
]
        `), false) : (console.warn(`VueUiBullet: dataset segments must be an array of objects with this datastructure:

segments: [
    {
        name: string;
        from: number;
        to: number;
        color?: string;
    },
    {...}
] 
        `), false) : false);
    onMounted(z);
    function z() {
      Xt(o.dataset) ? Kt({
        componentName: "VueUiBullet",
        type: "dataset"
      }) : y.value && o.dataset.segments.forEach((t, s2) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "from", "to"]
        }).forEach((l) => {
          C2.value = false, Kt({
            componentName: "VueUiBullet segment",
            type: "datasetSerieAttribute",
            property: l,
            index: s2
          });
        });
      }), e.value.style.chart.animation.show && O(o.dataset.value || 0);
    }
    const $ = ref(Lt());
    function M() {
      const t = c({
        userConfig: o.config,
        defaultConfig: K
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_bullet[t.theme] || o.config,
          defaultConfig: t
        })
      } : t;
    }
    const e = computed({
      get: () => M(),
      set: (t) => t
    });
    watch(() => o.config, (t) => {
      e.value = M(), z(), H.value += 1;
    }, { deep: true });
    const a = computed(() => {
      const t = e.value.style.chart.height, s2 = e.value.style.chart.width, l = e.value.style.chart.padding.left, f = s2 - e.value.style.chart.padding.right, k = e.value.style.chart.padding.top, i = t - e.value.style.chart.padding.bottom;
      return {
        height: t,
        width: s2,
        left: l,
        right: f,
        top: k,
        bottom: i,
        chartWidth: f - l,
        chartHeight: i - k
      };
    }), te = computed(() => {
      if (!y.value) return [];
      const t = [];
      for (let s2 = 0; s2 < o.dataset.segments.length; s2 += 1)
        t.push(Mt(e.value.style.chart.segments.baseColor, s2 / o.dataset.segments.length));
      return t;
    }), B = computed(() => y.value ? {
      min: Math.min(...o.dataset.segments.map((t) => t.from)),
      max: Math.max(...o.dataset.segments.map((t) => t.to))
    } : { min: 0, max: 1 }), n = ref(ae());
    watch(() => o.dataset, (t) => {
      e.value.style.chart.animation.show ? O(t.value || 0) : n.value = t.value || 0;
    }, { deep: true });
    function ae() {
      return e.value.style.chart.animation.show ? B.value.min : o.dataset.value || 0;
    }
    const N = ref(null);
    function O(t) {
      const s2 = Math.abs(t - n.value) / e.value.style.chart.animation.animationFrames;
      function l() {
        n.value < t ? n.value = Math.min(n.value + s2, t) : n.value > t && (n.value = Math.max(n.value - s2, t)), n.value !== t && (N.value = requestAnimationFrame(l));
      }
      l();
    }
    onBeforeUnmount(() => {
      cancelAnimationFrame(N.value);
    });
    const v = computed(() => {
      if (!y.value)
        return [];
      const t = It(B.value.min, B.value.max, e.value.style.chart.segments.ticks.divisions), s2 = t.min >= 0 ? 0 : Math.abs(t.min), l = {
        x: a.value.left + (o.dataset.target + s2) / (t.max + s2) * a.value.chartWidth - e.value.style.chart.target.width / 2
      }, f = {
        width: (n.value + s2) / (t.max + s2) * a.value.chartWidth
      }, k = t.ticks.map((i) => ({
        value: i,
        y: a.value.bottom + e.value.style.chart.segments.dataLabels.fontSize + 3 + e.value.style.chart.segments.dataLabels.offsetY,
        x: a.value.left + (i + s2) / (t.max + s2) * a.value.chartWidth
      }));
      return {
        scale: t,
        target: l,
        value: f,
        ticks: k,
        chunks: o.dataset.segments.map((i, oe2) => ({
          ...i,
          color: i.color ? j(i.color) : te.value[oe2],
          x: a.value.left + a.value.chartWidth * ((i.from + s2) / (t.max + s2)),
          y: a.value.top,
          height: a.value.chartHeight,
          width: a.value.chartWidth * (Math.abs(i.to - i.from) / (t.max + s2))
        }))
      };
    }), A = computed(() => v.value.chunks.map((t) => {
      const s2 = nr(
        e.value.style.chart.segments.dataLabels.formatter,
        t.from,
        Gt({
          p: e.value.style.chart.segments.dataLabels.prefix,
          v: t.from,
          s: e.value.style.chart.segments.dataLabels.suffix,
          r: e.value.style.chart.segments.dataLabels.rounding
        })
      ), l = nr(
        e.value.style.chart.segments.dataLabels.formatter,
        t.to,
        Gt({
          p: e.value.style.chart.segments.dataLabels.prefix,
          v: t.to,
          s: e.value.style.chart.segments.dataLabels.suffix,
          r: e.value.style.chart.segments.dataLabels.rounding
        })
      );
      return {
        ...t,
        shape: "square",
        value: `${s2} - ${l}`
      };
    })), le = computed(() => ({
      cy: "bullet-div-legend",
      backgroundColor: "transparent",
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 6,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), { isPrinting: T, isImaging: U, generatePdf: W, generateImage: E } = se({
      elementId: `bullet_${$.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-bullet"
    }), p2 = ref(false);
    function se2(t) {
      p2.value = t, ee.value += 1;
    }
    function re() {
      return v.value;
    }
    return J({
      generatePdf: W,
      generateImage: E,
      getData: re
    }), (t, s2) => (openBlock(), createElementBlock("div", {
      ref_key: "bulletChart",
      ref: S,
      class: normalizeClass(`vue-ui-bullet ${p2.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%;background:${e.value.style.chart.backgroundColor}`),
      id: `bullet_${$.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: Q,
        style: "width:100%;background:transparent;"
      }, [
        (openBlock(), createBlock(x, {
          lineHeight: "1.3rem",
          key: `title_${H.value}`,
          config: {
            title: {
              cy: "bullet-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "bullet-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && C2.value ? (openBlock(), createBlock(ie, {
        key: 1,
        ref: "details",
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(T),
        isImaging: unref(U),
        uid: $.value,
        hasTooltip: false,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: false,
        hasTable: false,
        hasLabel: false,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: p2.value,
        chartElement: S.value,
        position: e.value.userOptions.position,
        titles: { ...e.value.userOptions.buttonTitles },
        onToggleFullscreen: se2,
        onGeneratePdf: unref(W),
        onGenerateImage: unref(E)
      }, createSlots({ _: 2 }, [
        t.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        t.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: f }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: f })), void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "chartElement", "position", "titles", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      C2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": p2.value, "vue-data-ui-fulscreen--off": !p2.value, "vue-ui-bullet-svg": true }),
        viewBox: `0 0 ${a.value.width} ${a.value.height}`,
        style: normalizeStyle(`width: 100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        y.value ? (openBlock(), createElementBlock("g", Fe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.chunks, (l) => (openBlock(), createElementBlock("rect", {
            x: l.x,
            y: l.y,
            height: l.height,
            width: l.width,
            fill: l.color,
            "stroke-width": 1,
            stroke: e.value.style.chart.backgroundColor
          }, null, 8, Ie))), 256)),
          e.value.style.chart.target.onTop ? createCommentVNode("", true) : (openBlock(), createElementBlock("rect", {
            key: 0,
            x: v.value.target.x,
            y: a.value.top + (a.value.chartHeight - a.value.chartHeight * e.value.style.chart.target.heightRatio) / 2,
            height: a.value.chartHeight * e.value.style.chart.target.heightRatio,
            width: e.value.style.chart.target.width,
            rx: e.value.style.chart.target.rounded ? e.value.style.chart.target.width / 2 : 0,
            fill: e.value.style.chart.target.color,
            stroke: e.value.style.chart.target.stroke,
            "stroke-width": e.value.style.chart.target.strokeWidth
          }, null, 8, Pe)),
          createBaseVNode("rect", {
            x: a.value.left,
            y: a.value.top + (a.value.chartHeight - a.value.chartHeight * e.value.style.chart.valueBar.heightRatio) / 2,
            height: a.value.chartHeight * e.value.style.chart.valueBar.heightRatio,
            width: v.value.value.width,
            fill: e.value.style.chart.valueBar.color,
            stroke: e.value.style.chart.valueBar.stroke,
            "stroke-width": e.value.style.chart.valueBar.strokeWidth
          }, null, 8, Se),
          e.value.style.chart.valueBar.label.show ? (openBlock(), createElementBlock("text", {
            key: 1,
            x: a.value.left + v.value.value.width,
            y: a.value.top - 6 + e.value.style.chart.valueBar.label.offsetY,
            "font-size": e.value.style.chart.valueBar.label.fontSize,
            "font-weight": e.value.style.chart.valueBar.label.bold ? "bold" : "normal",
            fill: e.value.style.chart.valueBar.label.color,
            "text-anchor": "middle"
          }, toDisplayString(unref(nr)(
            e.value.style.chart.segments.dataLabels.formatter,
            n.value,
            unref(Gt)({
              p: e.value.style.chart.segments.dataLabels.prefix,
              v: n.value,
              s: e.value.style.chart.segments.dataLabels.suffix,
              r: e.value.style.chart.segments.dataLabels.rounding
            })
          )), 9, He)) : createCommentVNode("", true),
          e.value.style.chart.target.onTop ? (openBlock(), createElementBlock("rect", {
            key: 2,
            x: v.value.target.x,
            y: a.value.top + (a.value.chartHeight - a.value.chartHeight * e.value.style.chart.target.heightRatio) / 2,
            height: a.value.chartHeight * e.value.style.chart.target.heightRatio,
            width: e.value.style.chart.target.width,
            rx: e.value.style.chart.target.rounded ? e.value.style.chart.target.width / 2 : 0,
            fill: e.value.style.chart.target.color,
            stroke: e.value.style.chart.target.stroke,
            "stroke-width": e.value.style.chart.target.strokeWidth
          }, null, 8, ze)) : createCommentVNode("", true),
          e.value.style.chart.segments.dataLabels.show ? (openBlock(), createElementBlock("g", Me, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.ticks, (l) => (openBlock(), createElementBlock("text", {
              x: l.x,
              y: l.y,
              "text-anchor": "middle",
              fill: e.value.style.chart.segments.dataLabels.color,
              "font-size": e.value.style.chart.segments.dataLabels.fontSize + "px",
              "font-weight": e.value.style.chart.segments.dataLabels.bold ? "bold" : "normal"
            }, toDisplayString(unref(nr)(
              e.value.style.chart.segments.dataLabels.formatter,
              l.value,
              unref(Gt)({
                p: e.value.style.chart.segments.dataLabels.prefix,
                v: l.value,
                s: e.value.style.chart.segments.dataLabels.suffix,
                r: e.value.style.chart.segments.dataLabels.rounding
              })
            )), 9, Ne))), 256))
          ])) : createCommentVNode("", true),
          e.value.style.chart.segments.dataLabels.show && e.value.style.chart.segments.ticks.show ? (openBlock(), createElementBlock("g", Oe, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value.ticks, (l) => (openBlock(), createElementBlock("line", {
              x1: l.x,
              x2: l.x,
              y1: a.value.bottom,
              y2: a.value.bottom + 3,
              stroke: e.value.style.chart.segments.ticks.stroke,
              "stroke-width": 1,
              "stroke-linecap": "round"
            }, null, 8, Ae))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(t.$slots, "svg", { svg: a.value }, void 0, true)
      ], 14, Be)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Te, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(T) || unref(U) })), void 0, true)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: Z
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: 0,
          clickable: false,
          legendSet: A.value,
          config: le.value
        }, {
          item: withCtx(({ legend: l }) => [
            createBaseVNode("div", Ue, [
              createBaseVNode("span", We, toDisplayString(l.name) + ":", 1),
              createBaseVNode("span", null, toDisplayString(l.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
        renderSlot(t.$slots, "legend", { legend: A.value }, void 0, true)
      ], 512)
    ], 14, $e));
  }
};
var Je = s(Ee, [["__scopeId", "data-v-8f9b47b1"]]);
export {
  Je as default
};
//# sourceMappingURL=vue-ui-bullet-CQKaC4wG-YZOUBMQU.js.map
