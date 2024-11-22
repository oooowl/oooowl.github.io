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
  Yt,
  cr,
  et,
  j,
  nr,
  oe,
  or,
  pt,
  qt,
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
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-waffle-CjNhM-mV.js
var Fe = (G) => (pushScopeId("data-v-a0574c0d"), G = G(), popScopeId(), G);
var It = ["id"];
var Tt = ["xmlns", "viewBox"];
var St = ["id"];
var Lt2 = ["stop-color"];
var Pt = ["stop-color"];
var zt = ["id"];
var Ft = Fe(() => createBaseVNode("feGaussianBlur", {
  in: "SourceGraphic",
  stdDeviation: 2
}, null, -1));
var Nt2 = Fe(() => createBaseVNode("feColorMatrix", {
  type: "saturate",
  values: "0"
}, null, -1));
var Bt = [
  Ft,
  Nt2
];
var Ot2 = ["x", "y", "height", "width"];
var At = ["height", "width"];
var Vt = ["rx", "x", "y", "height", "width", "stroke", "stroke-width", "filter"];
var Mt = ["rx", "x", "y", "height", "width", "fill", "stroke", "stroke-width", "filter"];
var Dt = ["x", "y", "height", "width", "filter"];
var Gt2 = { key: 0 };
var Rt = { key: 1 };
var Ut = { key: 2 };
var jt = { key: 3 };
var Et = ["onMouseover", "x", "y", "height", "width"];
var Wt = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var qt2 = ["onClick"];
var Ht2 = { key: 0 };
var Xt2 = { key: 1 };
var Yt2 = ["innerHTML"];
var Kt2 = {
  __name: "vue-ui-waffle",
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
  setup(G, { expose: Ne, emit: Be }) {
    const g = G, { vue_ui_waffle: Oe } = oe(), X = computed(() => !!g.dataset && g.dataset.length), L = ref(Lt()), Ae = ref(null), Z = ref(false), ee = ref(""), O2 = ref(null), ue = ref(0), R3 = ref(null), se2 = ref(null), re = ref(null), ne = ref(0), ie2 = ref(0), ce = ref(0), e = computed({
      get: () => ve(),
      set: (t) => t
    });
    function ve() {
      const t = c({
        userConfig: g.config,
        defaultConfig: Oe
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_waffle[t.theme] || g.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => g.config, (t) => {
      e.value = ve(), de(), ne.value += 1, ie2.value += 1, ce.value += 1;
    }, { deep: true });
    const Y = ref(null);
    function de() {
      if (Xt(g.dataset) ? Kt({
        componentName: "VueUiWaffle",
        type: "dataset"
      }) : g.dataset.forEach((t, o) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "values"]
        }).forEach((l) => {
          Kt({
            componentName: "VueUiWaffle",
            type: "datasetSerieAttribute",
            property: l,
            index: o
          });
        });
      }), e.value.responsive) {
        const t = O(() => {
          const { width: o, height: l } = M({
            chart: R3.value,
            title: e.value.style.chart.title.text ? se2.value : null,
            legend: e.value.style.chart.legend.show ? re.value : null
          });
          P.value.width = o, P.value.height = l, C2.value.width = o, C2.value.height = l;
        });
        Y.value = new ResizeObserver(t), Y.value.observe(R3.value.parentNode);
      }
    }
    onMounted(() => {
      de();
    }), onBeforeUnmount(() => {
      Y.value && Y.value.disconnect();
    });
    const { isPrinting: he, isImaging: pe, generatePdf: ye, generateImage: fe } = se({
      elementId: `vue-ui-waffle_${L.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-waffle"
    }), ge = computed(() => or(e.value.customPalette)), I = ref({
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), P = ref({
      height: 512,
      width: 512
    }), C2 = ref({
      top: 0,
      left: 0,
      height: 512,
      width: 512
    }), z = computed(() => (C2.value.width - e.value.style.chart.layout.grid.size * e.value.style.chart.layout.grid.spaceBetween) / e.value.style.chart.layout.grid.size), F = computed(() => (C2.value.height - e.value.style.chart.layout.grid.size * e.value.style.chart.layout.grid.spaceBetween) / e.value.style.chart.layout.grid.size), U = computed(() => C2.value.width / e.value.style.chart.layout.grid.size), K = computed(() => C2.value.height / e.value.style.chart.layout.grid.size);
    function me(t) {
      const o = e.value.style.chart.layout.grid.size * e.value.style.chart.layout.grid.size, l = t.reduce((m, ae) => m + ae, 0), a = t.map((m) => m / l * o), u = a.map(Math.floor), n = a.map((m) => m % 1);
      let y = o - u.reduce((m, ae) => m + ae, 0);
      for (; y > 0; ) {
        let m = n.indexOf(Math.max(...n));
        u[m] += 1, n[m] = 0, y -= 1;
      }
      return u;
    }
    function be() {
      return g.dataset.map((t, o) => ({
        ...t,
        color: j(t.color) || ge.value[o] || et[o] || et[o % et.length],
        uid: `serie_${o}`,
        absoluteIndex: o
      }));
    }
    const we = computed(() => be()), v = ref(we.value);
    watch(() => g.dataset, (t) => {
      v.value = be();
    }, { deep: true });
    const Ve = computed(() => {
      const t = v.value.filter((o, l) => !p2.value.includes(o.uid)).map((o, l) => (o.values || []).reduce((a, u) => a + u, 0));
      return me(t);
    }), Me = computed(() => {
      const t = v.value.map((o, l) => (o.values || []).reduce((a, u) => a + u));
      return me(t);
    }), j2 = computed(() => (g.dataset.forEach((t, o) => {
      [null, void 0].includes(t.values) && Kt({
        componentName: "VueUiWaffle",
        type: "datasetSerieAttribute",
        property: "values (number[])",
        index: o
      });
    }), v.value.filter((t, o) => !p2.value.includes(t.uid)).map((t, o) => ({
      absoluteIndex: t.absoluteIndex,
      uid: t.uid,
      name: t.name,
      color: t.color,
      value: (t.values || []).reduce((l, a) => l + a, 0),
      absoluteValues: t.values || [],
      proportion: Ve.value[o]
    })))), De = computed(() => v.value.map((t, o) => ({
      absoluteIndex: t.absoluteIndex,
      uid: t.uid,
      name: t.name,
      color: t.color,
      value: (t.values || []).reduce((l, a) => l + a, 0),
      absoluteValues: t.values || [],
      proportion: Me.value[o]
    })));
    function Ge2() {
      return De.value.map((t) => ({
        name: t.name,
        color: t.color,
        value: t.value,
        proportion: t.proportion
      }));
    }
    const Re = computed(() => {
      let t = 0;
      return j2.value.map((o, l) => {
        const a = t, u = a + o.proportion, n = [];
        for (let y = Math.floor(a); y < Math.floor(u); y += 1)
          n.push(y);
        return t = u, {
          ...o,
          start: a,
          rects: n
        };
      });
    }), r = computed(() => Re.value.flatMap((t, o) => t.rects.map((l, a) => ({
      isFirst: a === 0,
      isLongEnough: l.length > 2,
      name: t.name,
      color: t.color,
      value: t.value,
      serieIndex: o,
      absoluteStartIndex: a < 3,
      serieId: t.uid,
      ...t
    }))).map((t, o) => ({
      ...t,
      isAbsoluteFirst: o % e.value.style.chart.layout.grid.size === 0
    }))), E2 = computed(() => {
      const t = [];
      for (let o = 0; o < e.value.style.chart.layout.grid.size; o += 1)
        for (let l = 0; l < e.value.style.chart.layout.grid.size; l += 1)
          t.push({
            isStartOfLine: l === 0,
            position: e.value.style.chart.layout.grid.vertical ? o : l,
            x: (e.value.style.chart.layout.grid.vertical ? o : l) * (z.value + e.value.style.chart.layout.grid.spaceBetween),
            y: (e.value.style.chart.layout.grid.vertical ? l : o) * (F.value + e.value.style.chart.layout.grid.spaceBetween) + C2.value.top
          });
      return t;
    }), p2 = ref([]), N = ref(false), ke = ref(null), xe = ref(null);
    function Ce(t) {
      if (!e.value.useAnimation) {
        p2.value.includes(t) ? p2.value = p2.value.filter((u) => u !== t) : p2.value.length < A.value.length - 1 && A.value.length > 1 && p2.value.push(t);
        return;
      }
      const o = we.value.find((u) => u.uid === t).values.reduce((u, n) => u + n, 0);
      let a = v.value.find((u) => u.uid === t).values.reduce((u, n) => u + n, 0);
      if (p2.value.includes(t)) {
        let n = function() {
          a > u ? (cancelAnimationFrame(ke.value), v.value = v.value.map((y, m) => y.uid === t ? {
            ...y,
            values: [u]
          } : y), N.value = false) : (N.value = true, a += u * 0.025, v.value = v.value.map((y, m) => y.uid === t ? {
            ...y,
            values: [a]
          } : y), ke.value = requestAnimationFrame(n));
        };
        p2.value = p2.value.filter((y) => y !== t);
        const u = o;
        n();
      } else if (p2.value.length < A.value.length - 1 && A.value.length > 1) {
        let u = function() {
          a < 0.1 ? (cancelAnimationFrame(xe.value), p2.value.push(t), v.value = v.value.map((n, y) => n.uid === t ? {
            ...n,
            values: [0]
          } : n), N.value = false) : (N.value = true, a /= 1.5, v.value = v.value.map((n, y) => n.uid === t ? {
            ...n,
            values: [a]
          } : n), xe.value = requestAnimationFrame(u));
        };
        u();
      }
      Be("selectLegend", j2.value.map((u) => ({
        name: u.name,
        color: u.color,
        value: u.value,
        proportion: u.proportion / Math.pow(e.value.style.chart.layout.grid.size, 2)
      })));
    }
    const A = computed(() => v.value.map((t, o) => ({
      name: t.name,
      color: t.color || ge[o] || et[o] || et[o % et.length],
      value: (t.values || []).reduce((l, a) => l + a, 0),
      uid: t.uid,
      shape: "square"
    })).map((t, o) => ({
      ...t,
      proportion: t.value / v.value.map((l) => (l.values || []).reduce((a, u) => a + u, 0)).reduce((l, a) => l + a, 0),
      opacity: p2.value.includes(t.uid) ? 0.5 : 1,
      segregate: () => Ce(t.uid),
      isSegregated: p2.value.includes(t.uid)
    }))), Ue = computed(() => ({
      cy: "waffle-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), _ = computed(() => j2.value.map((t) => t.value).reduce((t, o) => t + o, 0)), te = ref(null);
    function je(t) {
      if (p2.value.length === g.dataset.length) return;
      const o = r.value[t];
      te.value = {
        datapoint: o,
        seriesIndex: o.absoluteIndex,
        series: v.value,
        config: e.value
      }, Z.value = true, O2.value = r.value[t].serieIndex;
      const l = e.value.style.chart.tooltip.customFormat;
      if (Ht(l) && $t(() => l({
        seriesIndex: r.value[t].absoluteIndex,
        datapoint: o,
        series: v.value,
        config: e.value
      })))
        ee.value = l({
          seriesIndex: r.value[t].absoluteIndex,
          datapoint: o,
          series: v.value,
          config: e.value
        });
      else {
        let a = "";
        if (a += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${o.name}</div>`, a += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><rect x="0" y="0" height="12" width="12" stroke="none" rx="1" fill="${o.color}" /></svg>`, e.value.style.chart.tooltip.showValue && (a += `<b>${nr(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          o.value,
          Gt({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: o.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.style.chart.tooltip.roundingValue
          }),
          {
            datapoint: o,
            seriesIndex: r.value[t].absoluteIndex,
            series: v.value
          }
        )}</b>`), e.value.style.chart.tooltip.showPercentage) {
          const u = Gt({
            v: o.value / _.value * 100,
            s: "%",
            r: e.value.style.chart.tooltip.roundingPercentage
          });
          e.value.style.chart.tooltip.showValue ? a += `<span>(${u})</span></div>` : a += `<b>${u}%</b></div>`;
        }
        ee.value = a;
      }
    }
    const $ = computed(() => {
      const t = j2.value.map((l) => ({
        name: l.name,
        color: l.color
      })), o = j2.value.map((l) => l.value);
      return { head: t, body: o };
    });
    function le(t) {
      return e.value.useBlurOnHover && ![null, void 0].includes(O2.value) && O2.value !== t ? `url(#blur_${L.value})` : "";
    }
    function _e() {
      nextTick(() => {
        const t = $.value.head.map((a, u) => [[
          a.name
        ], [$.value.body[u]], [isNaN($.value.body[u] / _.value) ? "-" : $.value.body[u] / _.value * 100]]), o = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), l = Nt(o);
        Ot({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-waffle" });
      });
    }
    const J = computed(() => {
      const t = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        nr(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          _.value,
          Gt({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: _.value,
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.table.td.roundingValue
          })
        ),
        "100%"
      ], o = $.value.head.map((u, n) => [
        {
          color: u.color,
          name: u.name
        },
        nr(
          e.value.style.chart.layout.labels.dataLabels.formatter,
          $.value.body[n],
          Gt({
            p: e.value.style.chart.layout.labels.dataLabels.prefix,
            v: $.value.body[n],
            s: e.value.style.chart.layout.labels.dataLabels.suffix,
            r: e.value.table.td.roundingValue
          })
        ),
        isNaN($.value.body[n] / _.value) ? "-" : Gt({
          v: $.value.body[n] / _.value * 100,
          s: "%",
          r: e.value.table.td.roundingPercentage
        })
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
        shape: "square",
        breakpoint: e.value.table.responsiveBreakpoint
      }, a = [
        e.value.table.columnNames.series,
        e.value.table.columnNames.value,
        e.value.table.columnNames.percentage
      ];
      return {
        head: t,
        body: o,
        config: l,
        colNames: a
      };
    }), W2 = ref(false);
    function Ee(t) {
      W2.value = t, ue.value += 1;
    }
    function $e() {
      I.value.showTable = !I.value.showTable;
    }
    function Ie() {
      I.value.showTooltip = !I.value.showTooltip;
    }
    return Ne({
      getData: Ge2,
      generatePdf: ye,
      generateCsv: _e,
      generateImage: fe,
      toggleTable: $e,
      toggleTooltip: Ie
    }), (t, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-waffle ${W2.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      ref_key: "waffleChart",
      ref: R3,
      id: `vue-ui-waffle_${L.value}`,
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor};${e.value.responsive ? "height: 100%" : ""}`)
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: se2,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${ne.value}`,
          config: {
            title: {
              cy: "waffle-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "waffle-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: Ae,
        key: `user_options_${ue.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(he),
        isImaging: unref(pe),
        uid: L.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: W2.value,
        isTooltip: I.value.showTooltip,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: R3.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Ee,
        onGeneratePdf: unref(ye),
        onGenerateCsv: _e,
        onGenerateImage: unref(fe),
        onToggleTable: $e,
        onToggleTooltip: Ie
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
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": W2.value, "vue-data-ui-fulscreen--off": !W2.value }),
        viewBox: `0 0 ${P.value.width <= 0 ? 10 : P.value.width} ${P.value.height <= 0 ? 10 : P.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:visible;background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (l, a) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `gradient_${L.value}_${a}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(pt)(l.color, 0.05), 100 - e.value.style.chart.layout.rect.gradientIntensity)
            }, null, 8, Lt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, Pt)
          ], 8, St))), 256))
        ]),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${L.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, Bt, 8, zt)
        ]),
        e.value.useCustomCells && r.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(E2.value, (l, a) => (openBlock(), createElementBlock("foreignObject", {
          x: l.x,
          y: l.y,
          height: F.value <= 0 ? 1e-4 : F.value,
          width: z.value <= 0 ? 1e-4 : z.value,
          class: "vue-ui-waffle-custom-cell-foreignObject"
        }, [
          renderSlot(t.$slots, "cell", normalizeProps(guardReactiveProps({ cell: { ...l, color: r.value[a].color, ...r.value[a] }, isSelected: [null, void 0].includes(O2.value) ? true : r.value[a].serieIndex === O2.value })), void 0, true)
        ], 8, Ot2))), 256)) : createCommentVNode("", true),
        !r.value.length && !e.value.useCustomCells ? (openBlock(), createElementBlock("rect", {
          key: 1,
          x: 12,
          y: 12,
          height: C2.value.height - 24,
          width: C2.value.width - 24,
          rx: 3,
          fill: "none",
          stroke: "black"
        }, null, 8, At)) : r.value.length && !e.value.useCustomCells ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(E2.value, (l, a) => (openBlock(), createElementBlock("rect", {
            rx: e.value.style.chart.layout.rect.rounded ? e.value.style.chart.layout.rect.rounding : 0,
            x: l.x + e.value.style.chart.layout.grid.spaceBetween / 2,
            y: l.y + e.value.style.chart.layout.grid.spaceBetween / 2,
            height: F.value <= 0 ? 1e-4 : F.value,
            width: z.value <= 0 ? 1e-4 : z.value,
            fill: "white",
            stroke: e.value.style.chart.layout.rect.stroke,
            "stroke-width": e.value.style.chart.layout.rect.strokeWidth,
            filter: le(r.value[a].serieIndex)
          }, null, 8, Vt))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(E2.value, (l, a) => (openBlock(), createElementBlock("rect", {
            rx: e.value.style.chart.layout.rect.rounded ? e.value.style.chart.layout.rect.rounding : 0,
            x: l.x + e.value.style.chart.layout.grid.spaceBetween / 2,
            y: l.y + e.value.style.chart.layout.grid.spaceBetween / 2,
            height: F.value <= 0 ? 1e-4 : F.value,
            width: z.value <= 0 ? 1e-4 : z.value,
            fill: e.value.style.chart.layout.rect.useGradient && e.value.style.chart.layout.rect.gradientIntensity > 0 ? `url(#gradient_${L.value}_${a})` : r.value[a].color,
            stroke: e.value.style.chart.layout.rect.stroke,
            "stroke-width": e.value.style.chart.layout.rect.strokeWidth,
            filter: le(r.value[a].serieIndex)
          }, null, 8, Mt))), 256))
        ], 64)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(E2.value, (l, a) => (openBlock(), createElementBlock(Fragment, null, [
          r.value.length && !N.value && !e.value.style.chart.layout.grid.vertical && e.value.style.chart.layout.labels.captions.show && (r.value[a].isFirst && l.position < e.value.style.chart.layout.grid.size - 2 || r.value[a].isAbsoluteFirst && a % e.value.style.chart.layout.grid.size === 0 && r.value[a].absoluteStartIndex) ? (openBlock(), createElementBlock("foreignObject", {
            key: 0,
            x: l.x + e.value.style.chart.layout.labels.captions.offsetX + e.value.style.chart.layout.grid.spaceBetween / 2,
            y: l.y + e.value.style.chart.layout.labels.captions.offsetY + e.value.style.chart.layout.grid.spaceBetween / 2,
            height: K.value <= 0 ? 1e-4 : K.value,
            width: U.value * e.value.style.chart.layout.grid.size <= 0 ? 1e-4 : U.value * e.value.style.chart.layout.grid.size,
            filter: le(r.value[a].serieIndex)
          }, [
            createBaseVNode("div", {
              class: "vue-ui-waffle-caption",
              style: normalizeStyle(`height: 100%; width: 100%; font-size:${e.value.style.chart.layout.labels.captions.fontSize}px;display:flex;align-items:center;justify-content:flex-start;padding: 0 ${U.value / 12}px;color:${unref(xt)(r.value[a].color)};gap:2px`)
            }, [
              e.value.style.chart.layout.labels.captions.showSerieName ? (openBlock(), createElementBlock("span", Gt2, toDisplayString(e.value.style.chart.layout.labels.captions.serieNameAbbreviation ? unref(Yt)({ source: r.value[a].name, length: e.value.style.chart.layout.labels.captions.serieNameMaxAbbreviationSize }) : r.value[a].name) + ": ", 1)) : createCommentVNode("", true),
              e.value.style.chart.layout.labels.captions.showPercentage ? (openBlock(), createElementBlock("span", Rt, toDisplayString(unref(Gt)({ v: r.value[a].proportion, s: "%", r: e.value.style.chart.layout.labels.captions.roundingPercentage })), 1)) : createCommentVNode("", true),
              e.value.style.chart.layout.labels.captions.showPercentage && e.value.style.chart.layout.labels.captions.showValue ? (openBlock(), createElementBlock("span", Ut, " (" + toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                r.value[a].value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: r.value[a].value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.captions.roundingValue
                }),
                { datapoint: r.value[a], position: l }
              )) + ") ", 1)) : createCommentVNode("", true),
              !e.value.style.chart.layout.labels.captions.showPercentage && e.value.style.chart.layout.labels.captions.showValue ? (openBlock(), createElementBlock("span", jt, toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                r.value[a].value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: r.value[a].value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.layout.labels.captions.roundingValue
                }),
                { datapoint: r.value[a], position: l }
              )), 1)) : createCommentVNode("", true)
            ], 4)
          ], 8, Dt)) : createCommentVNode("", true)
        ], 64))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(E2.value, (l, a) => (openBlock(), createElementBlock("rect", {
          onMouseover: (u) => je(a),
          onMouseleave: o[0] || (o[0] = (u) => {
            Z.value = false, O2.value = null;
          }),
          x: l.x + e.value.style.chart.layout.grid.spaceBetween / 2,
          y: l.y + e.value.style.chart.layout.grid.spaceBetween / 2,
          height: K.value <= 0 ? 1e-4 : K.value,
          width: U.value <= 0 ? 1e-4 : U.value,
          fill: "transparent",
          stroke: "none"
        }, null, 40, Et))), 256)),
        renderSlot(t.$slots, "svg", { svg: P.value }, void 0, true)
      ], 14, Tt)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", Wt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(he) || unref(pe) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "waffle",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            waffle: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: re
      }, [
        e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${ce.value}`,
          legendSet: A.value,
          config: Ue.value,
          onClickMarker: o[1] || (o[1] = ({ legend: l }) => Ce(l.uid))
        }, {
          item: withCtx(({ legend: l }) => [
            createBaseVNode("div", {
              onClick: (a) => l.segregate(),
              style: normalizeStyle(`opacity:${p2.value.includes(l.uid) ? 0.5 : 1}`)
            }, [
              createTextVNode(toDisplayString(l.name) + ": " + toDisplayString(unref(nr)(
                e.value.style.chart.layout.labels.dataLabels.formatter,
                l.value,
                unref(Gt)({
                  p: e.value.style.chart.layout.labels.dataLabels.prefix,
                  v: l.value,
                  s: e.value.style.chart.layout.labels.dataLabels.suffix,
                  r: e.value.style.chart.legend.roundingValue,
                  isAnimating: N.value
                }),
                { datapoint: l }
              )) + " ", 1),
              p2.value.includes(l.uid) ? (openBlock(), createElementBlock("span", Xt2, " ( - % ) ")) : (openBlock(), createElementBlock("span", Ht2, " (" + toDisplayString(isNaN(l.value / _.value) ? "-" : unref(Gt)({ v: l.value / _.value * 100, s: "%", r: e.value.style.chart.legend.roundingPercentage, isAnimating: N.value })) + ") ", 1))
            ], 12, qt2)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(t.$slots, "legend", {
          key: 1,
          legend: A.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: I.value.showTooltip && Z.value && p2.value.length < g.dataset.length,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: R3.value,
        content: ee.value,
        isCustom: e.value.style.chart.tooltip.customFormat && typeof e.value.style.chart.tooltip.customFormat == "function",
        fontSize: e.value.style.chart.tooltip.fontSize
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...te.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...te.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom", "fontSize"]),
      X.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: I.value.showTable,
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
            key: `table_${ie2.value}`,
            colNames: J.value.colNames,
            head: J.value.head,
            body: J.value.body,
            config: J.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[2] || (o[2] = (l) => I.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Yt2)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, It));
  }
};
var cl = s(Kt2, [["__scopeId", "data-v-a0574c0d"]]);
export {
  cl as default
};
//# sourceMappingURL=vue-ui-waffle-CjNhM-mV-NTSESCIB.js.map
