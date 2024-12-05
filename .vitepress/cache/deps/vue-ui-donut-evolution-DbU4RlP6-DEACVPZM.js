import {
  Ue
} from "./chunk-VDRRPMYI.js";
import {
  C
} from "./chunk-ZYATGC4V.js";
import "./chunk-GUAP4JK5.js";
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
  Nt,
  Ot,
  Pt,
  Q,
  R as R2,
  T,
  Ut,
  Vt,
  Zt,
  dr,
  ir,
  jt,
  kt,
  qt,
  rt,
  te,
  tr,
  ur,
  z,
  zt
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
  withCtx,
  withKeys
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-donut-evolution-DbU4RlP6.js
var At = ["id"];
var $t = ["xmlns", "viewBox"];
var St = ["id"];
var Nt2 = ["stop-color"];
var zt2 = ["stop-color"];
var Ft = ["id"];
var Pt2 = ["stop-color"];
var Tt = ["stop-color"];
var Dt2 = ["stop-color"];
var It = { key: 0 };
var Ot2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Et = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Vt2 = { key: 0 };
var Ht2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Mt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Wt = ["x", "y", "font-size", "fill", "font-weight"];
var Rt = ["text-anchor", "font-size", "fill", "transform"];
var Ut2 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Xt = { key: 1 };
var Gt = ["cx", "cy", "r", "fill"];
var jt2 = { key: 0 };
var Bt = { key: 0 };
var Yt = ["d", "stroke"];
var Kt = ["text-anchor", "x", "y", "fill"];
var qt2 = ["cx", "cy", "r", "fill"];
var Jt2 = { key: 0 };
var Qt = ["cx", "cy", "fill"];
var Zt2 = { key: 1 };
var el = ["d", "fill", "stroke"];
var tl = { key: 2 };
var ll = ["d", "fill", "stroke"];
var al = ["x", "y", "font-size", "fill"];
var ol = ["x", "y", "width", "fill", "onClick"];
var ul = ["x", "y", "width", "height", "onMouseenter", "onClick"];
var sl = {
  key: 3,
  "data-cy-zoom": "",
  class: "vue-ui-donut-evolution-dialog"
};
var nl = ["x", "y", "width", "height", "fill"];
var rl = ["x1", "y1", "x2", "y2", "stroke"];
var il = ["x1", "y2", "x2", "y1", "stroke"];
var cl = ["onKeypress", "cx", "cy", "r"];
var vl = ["d", "stroke"];
var dl = ["cx", "cy", "r", "fill"];
var hl = ["d", "fill", "stroke"];
var yl = { class: "vue-ui-donut-evolution-focus" };
var fl = ["text-anchor", "x", "y", "fill"];
var gl = ["cx", "cy", "r", "fill"];
var bl = ["cx", "cy", "r", "fill"];
var ml = ["x", "y", "fill"];
var pl = ["x", "y", "font-size", "fill"];
var xl = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var kl = ["onClick"];
var _l = { key: 0 };
var Cl = { key: 1 };
var wl = {
  key: 9,
  ref: "source",
  dir: "auto"
};
var Ll = { key: 0 };
var Al = { key: 1 };
var $l = {
  __name: "vue-ui-donut-evolution",
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
  setup(We, { expose: Re, emit: de }) {
    const A = We, { vue_ui_donut_evolution: Ue2 } = te(), X = computed(() => !!A.dataset && A.dataset.length), h = ref({
      start: 0,
      end: Math.max(...A.dataset.map((l) => l.values.length))
    });
    function he() {
      h.value = {
        start: 0,
        end: W2.value
      }, ge.value += 1;
    }
    onMounted(() => {
      ye();
    });
    function ye() {
      jt(A.dataset) ? qt({
        componentName: "VueUiDonutEvolution",
        type: "dataset"
      }) : A.dataset.length && A.dataset.forEach((l, i) => {
        Zt({
          datasetObject: l,
          requiredAttributes: ["name", "values"]
        }).forEach((t) => {
          qt({
            componentName: "VueUiDonutEvolution",
            type: "datasetSerieAttribute",
            property: t,
            index: i
          });
        });
      });
    }
    const O = ref(Dt()), _ = ref([]), g = ref(null), ee = ref(null), $ = ref(false), S = ref(null), te2 = ref(null), Xe = ref(null), fe = ref(0), ge = ref(0), be = ref(0), me = ref(0), pe = ref(0), e = computed({
      get: () => xe(),
      set: (l) => l
    });
    function xe() {
      const l = c({
        userConfig: A.config,
        defaultConfig: Ue2
      });
      return l.theme ? {
        ...c({
          userConfig: He.vue_ui_donut_evolution[l.theme] || A.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || rt
      } : l;
    }
    watch(() => A.config, (l) => {
      e.value = xe(), ye(), be.value += 1, me.value += 1, pe.value += 1;
    }, { deep: true }), watch(() => A.dataset, (l) => {
      he();
    }, { deep: true });
    const { isPrinting: ke, isImaging: _e, generatePdf: Ce, generateImage: we } = re({
      elementId: O.value,
      fileName: e.value.style.chart.title.text || "vue-ui-donut-evolution"
    }), Ge = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), je = computed(() => tr(e.value.customPalette)), G = ref({
      showTable: e.value.table.show
    }), s2 = computed(() => ({
      top: e.value.style.chart.layout.padding.top,
      right: e.value.style.chart.layout.padding.right,
      bottom: e.value.style.chart.layout.padding.bottom,
      left: e.value.style.chart.layout.padding.left
    })), r = computed(() => {
      const l = e.value.style.chart.layout.height, i = e.value.style.chart.layout.width, t = l - s2.value.top - s2.value.bottom, n = i - s2.value.left - s2.value.right;
      return {
        absoluteHeight: l,
        absoluteWidth: i,
        centerX: s2.value.left + n / 2,
        centerY: s2.value.top + t / 2,
        height: t,
        width: n
      };
    }), D = computed(() => (A.dataset.forEach((l, i) => {
      [null, void 0].includes(l.name) && qt({
        componentName: "VueUiDonutEvolution",
        type: "datasetSerieAttribute",
        property: "name",
        index: i
      }), [null, void 0].includes(l.values) && qt({
        componentName: "VueUiDonutEvolution",
        type: "datasetSerieAttribute",
        property: "values",
        index: i
      });
    }), A.dataset.map((l, i) => ({
      ...l,
      values: ur(l.values),
      color: Q(l.color) || je.value[i] || rt[i] || rt[i % rt.length],
      length: (l.values || []).length,
      uid: Dt()
    })))), M = computed(() => D.value.filter((l) => !_.value.includes(l.uid)).map((l) => ({
      ...l,
      values: l.values.filter((i, t) => t >= h.value.start && t <= h.value.end)
    }))), W2 = computed(() => Math.max(...M.value.map((l) => l.length))), w = computed(() => r.value.width / (h.value.end - h.value.start)), C2 = computed(() => {
      const l = [];
      for (let u = 0; u < h.value.end - h.value.start; u += 1) {
        const f = M.value.map((z2) => z2.values[u] ?? null), y = f.filter((z2) => [void 0, null].includes(z2)).length === f.length, N = f.reduce((z2, L) => z2 + L, 0), ne = f.map((z2) => z2 / N), H = s2.value.left + w.value * u + w.value / 2;
        l.push({
          index: u,
          percentages: ne,
          subtotal: y || N < 0 ? null : N,
          values: f,
          x: H
        });
      }
      const i = 0, t = Math.max(...l.map((u) => u.subtotal)), n = l.length === 1 ? t * 2 : t;
      return l.map((u, f) => {
        const y = w.value / 2 * 0.7, N = y > r.value.width / 16 ? r.value.width / 16 : y, ne = g.value === u.index ? r.value.width / 16 : N, H = l.length > 4 ? y * 2 : y * 2 > w.value / 2 * 0.7 ? w.value / 2 * 0.7 : y * 2, z2 = r.value.absoluteHeight - s2.value.bottom - r.value.height * u.subtotal / Ut(i, n, e.value.style.chart.layout.grid.yAxis.dataLabels.steps).max;
        return {
          ...u,
          y: z2,
          radius: N,
          activeRadius: ne,
          hoverRadius: H,
          donut: kt({
            series: M.value.map((L, Pe) => ({
              color: L.color,
              name: L.name,
              value: L.values[f] ?? 0
            }))
          }, u.x, z2, N, N, 1.99999, 2, 1, 360, 105.25, N / 2),
          donutHover: kt({
            series: M.value.map((L, Pe) => ({
              color: L.color,
              name: L.name,
              value: L.values[f] ?? 0
            }))
          }, u.x, z2, H, H, 1.99999, 2, 1, 360, 105.25, H / 2),
          donutFocus: kt({
            series: M.value.map((L, Pe) => ({
              color: L.color,
              name: L.name,
              value: L.values[f] ?? 0
            }))
          }, r.value.centerX, r.value.centerY, r.value.height / 3.6, r.value.height / 3.6, 1.99999, 2, 1, 360, 105.25, r.value.height / 6)
        };
      });
    });
    function j(l, i, t) {
      return ir(
        e.value.style.chart.layout.dataLabels.formatter,
        l,
        Ht({
          p: e.value.style.chart.layout.dataLabels.prefix,
          v: l,
          s: e.value.style.chart.layout.dataLabels.suffix,
          r: e.value.style.chart.layout.dataLabels.rounding
        }),
        { datapoint: i, index: t }
      );
    }
    const le = computed(() => ({
      max: Math.max(...C2.value.map((l) => l.subtotal)),
      min: 0
    })), E = computed(() => {
      const l = C2.value.length === 1 ? le.value.max * 2 : le.value.max;
      return Ut(le.value.min, l, e.value.style.chart.layout.grid.yAxis.dataLabels.steps);
    });
    function Be(l) {
      return l / E.value.max;
    }
    const Ye = computed(() => E.value.ticks.map((l) => ({
      y: r.value.absoluteHeight - s2.value.bottom - r.value.height * Be(l),
      value: l
    })));
    function Le(l, i) {
      return isNaN(l.value / Ot(i, "value")) ? 0 : (l.value / Ot(i, "value") * 100).toFixed(0) + "%";
    }
    function Ae() {
      $.value || (g.value = null, ee.value = null);
    }
    function Ke(l) {
      $.value || (g.value = l.index, ee.value = l);
    }
    const ae2 = ref(null);
    function oe(l, i) {
      l.subtotal && (ee.value = null, g.value = null, $.value = true, S.value = l, [null, void 0].includes(i) || (ae2.value = i));
    }
    function $e() {
      S.value = null, $.value = false, ae2.value = null;
    }
    const Se2 = computed(() => D.value.map((l, i) => ({
      name: l.name,
      value: l.values.slice(h.value.start, h.value.end).reduce((t, n) => t + n, 0),
      shape: "circle",
      uid: l.uid,
      color: l.color
    })).sort((l, i) => i.value - l.value).map((l) => ({
      ...l,
      opacity: _.value.includes(l.uid) ? 0.5 : 1,
      segregate: () => ue(l.uid),
      isSegregated: _.value.includes(l.uid)
    }))), Ne = computed(() => C2.value.map((l) => l.subtotal).reduce((l, i) => l + i, 0)), qe = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    }));
    function ue(l) {
      if (_.value.includes(l))
        _.value = _.value.filter((i) => i !== l), de("selectLegend", null);
      else {
        if (_.value.length === D.value.length - 1) return;
        _.value.push(l), de("selectLegend", D.value.find((i) => i.uid === l));
      }
      S.value && oe(C2.value.find((i, t) => t === ae2.value));
    }
    const V = computed(() => {
      const l = [""].concat(D.value.filter((u) => !_.value.includes(u.uid)).map((u) => ({
        name: u.name,
        color: u.color
      }))).concat(["Σ"]);
      let i = [];
      for (let u = 0; u < W2.value; u += 1) {
        const f = D.value.filter((y) => !_.value.includes(y.uid)).map((y) => y.values[u] ?? 0).reduce((y, N) => y + N, 0);
        i.push([e.value.style.chart.layout.grid.xAxis.dataLabels.values[u] ?? "-"].concat(D.value.filter((y) => !_.value.includes(y.uid)).map((y) => ({
          value: y.values[u] ?? 0,
          percentage: y.values[u] ? y.values[u] / f * 100 : 0
        }))).concat([`${e.value.style.chart.layout.dataLabels.prefix}${Number(f.toFixed(e.value.table.td.roundingValue))}${e.value.style.chart.layout.dataLabels.suffix}`]));
      }
      const t = {
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
      }, n = [
        e.value.table.columnNames.period
      ].concat(D.value.filter((u) => !_.value.includes(u.uid)).map((u) => u.name)).concat(e.value.table.columnNames.total);
      return { head: l, body: i, config: t, colNames: n };
    });
    function Je() {
      return D.value;
    }
    function ze() {
      nextTick(() => {
        const l = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], i = [...V.value.head.map((f) => f.name ?? f)], t = [...V.value.body.map((f) => f.map((y) => y.value ?? y))], n = l.concat([i]).concat(t), u = Vt(n);
        Nt({ csvContent: u, title: e.value.style.chart.title.text || "vue-ui-donut-evolution" });
      });
    }
    const R3 = ref(false);
    function Qe(l) {
      R3.value = l, fe.value += 1;
    }
    function Fe() {
      G.value.showTable = !G.value.showTable;
    }
    const B = ref(false);
    function se() {
      B.value = !B.value;
    }
    return Re({
      getData: Je,
      generatePdf: Ce,
      generateCsv: ze,
      generateImage: we,
      toggleTable: Fe,
      toggleAnnotator: se
    }), (l, i) => (openBlock(), createElementBlock("div", {
      ref_key: "donutEvolutionChart",
      ref: te2,
      class: normalizeClass(`vue-ui-donut-evolution ${R3.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor}`),
      id: O.value
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: te2.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: B.value,
        onClose: se
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Ge.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: Xe,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        style: "width:100%;background:transparent;padding-bottom:24px",
        onMouseleave: Ae
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${be.value}`,
          config: {
            title: {
              cy: "donut-evolution-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "donut-evolution-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 32)) : createCommentVNode("", true),
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_options_${fe.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ke),
        isImaging: unref(_e),
        uid: O.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: R3.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: te2.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: B.value,
        onToggleFullscreen: Qe,
        onGeneratePdf: unref(Ce),
        onGenerateCsv: ze,
        onGenerateImage: unref(we),
        onToggleTable: Fe,
        onToggleAnnotator: se
      }, createSlots({ _: 2 }, [
        l.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        l.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        l.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        l.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        l.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: n }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: n })), void 0, true)
          ]),
          key: "4"
        } : void 0,
        l.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: n }) => [
            renderSlot(l.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: n })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": R3.value, "vue-data-ui-fulscreen--off": !R3.value }),
        viewBox: `0 0 ${r.value.absoluteWidth} ${r.value.absoluteHeight}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: `hover_${O.value}`,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(e.value.style.chart.backgroundColor, e.value.style.chart.layout.highlighter.opacity)
            }, null, 8, Nt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(e.value.style.chart.layout.highlighter.color, e.value.style.chart.layout.highlighter.opacity)
            }, null, 8, zt2)
          ], 8, St),
          createBaseVNode("radialGradient", {
            id: `focus_${O.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(Q)(e.value.style.chart.backgroundColor), 0)
            }, null, 8, Pt2),
            createBaseVNode("stop", {
              offset: "77%",
              "stop-color": unref(dr)("#FFFFFF", 30)
            }, null, 8, Tt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(unref(Q)(e.value.style.chart.backgroundColor), 0)
            }, null, 8, Dt2)
          ], 8, Ft)
        ]),
        e.value.style.chart.layout.grid.show ? (openBlock(), createElementBlock("g", It, [
          createBaseVNode("line", {
            x1: s2.value.left,
            x2: s2.value.left,
            y1: s2.value.top,
            y2: s2.value.top + r.value.height,
            stroke: e.value.style.chart.layout.grid.stroke,
            "stroke-width": e.value.style.chart.layout.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Ot2),
          createBaseVNode("line", {
            x1: s2.value.left,
            x2: r.value.absoluteWidth - s2.value.right,
            y1: r.value.absoluteHeight - s2.value.bottom,
            y2: r.value.absoluteHeight - s2.value.bottom,
            stroke: e.value.style.chart.layout.grid.stroke,
            "stroke-width": e.value.style.chart.layout.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Et),
          e.value.style.chart.layout.grid.showVerticalLines ? (openBlock(), createElementBlock("g", Vt2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(h.value.end - h.value.start, (t, n) => (openBlock(), createElementBlock("line", {
              x1: s2.value.left + (n + 1) * w.value,
              x2: s2.value.left + (n + 1) * w.value,
              y1: s2.value.top,
              y2: r.value.absoluteHeight - s2.value.bottom,
              stroke: e.value.style.chart.layout.grid.stroke,
              "stroke-width": e.value.style.chart.layout.grid.strokeWidth,
              "stroke-linecap": "round"
            }, null, 8, Ht2))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.chart.layout.grid.yAxis.dataLabels.show ? (openBlock(), createElementBlock("g", {
          key: 1,
          class: normalizeClass({ "donut-opacity": true, "donut-behind": g.value !== null || $.value })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Ye.value, (t, n) => (openBlock(), createElementBlock("g", null, [
            t.value >= E.value.min && t.value <= E.value.max ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: s2.value.left,
              x2: s2.value.left - 5,
              y1: t.y,
              y2: t.y,
              stroke: e.value.style.chart.layout.grid.stroke,
              "stroke-width": e.value.style.chart.layout.grid.strokeWidth
            }, null, 8, Mt)) : createCommentVNode("", true),
            t.value >= E.value.min && t.value <= E.value.max ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: s2.value.left - 8 + e.value.style.chart.layout.grid.yAxis.dataLabels.offsetX,
              y: t.y + e.value.style.chart.layout.grid.yAxis.dataLabels.fontSize / 3,
              "font-size": e.value.style.chart.layout.grid.yAxis.dataLabels.fontSize,
              "text-anchor": "end",
              fill: e.value.style.chart.layout.grid.yAxis.dataLabels.color,
              "font-weight": e.value.style.chart.layout.grid.yAxis.dataLabels.bold ? "bold" : "normal"
            }, toDisplayString(unref(Pt)(t.value) ? unref(ir)(
              e.value.style.chart.layout.dataLabels.formatter,
              t.value,
              unref(Ht)({
                p: e.value.style.chart.layout.dataLabels.prefix,
                v: t.value,
                s: e.value.style.chart.layout.dataLabels.suffix,
                r: e.value.style.chart.layout.grid.yAxis.dataLabels.roundingValue
              }),
              { datapoint: t, seriesIndex: n }
            ) : ""), 9, Wt)) : createCommentVNode("", true)
          ]))), 256))
        ], 2)) : createCommentVNode("", true),
        e.value.style.chart.layout.grid.xAxis.dataLabels.show ? (openBlock(), createElementBlock("g", {
          key: 2,
          class: normalizeClass({ "donut-opacity": true, "donut-behind": $.value })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(h.value.end - h.value.start, (t, n) => (openBlock(), createElementBlock("g", null, [
            e.value.style.chart.layout.grid.xAxis.dataLabels.showOnlyFirstAndLast && (n === 0 || n === W2.value - 1) || !e.value.style.chart.layout.grid.xAxis.dataLabels.showOnlyFirstAndLast ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": e.value.style.chart.layout.grid.xAxis.dataLabels.rotation > 0 ? "start" : e.value.style.chart.layout.grid.xAxis.dataLabels.rotation < 0 ? "end" : "middle",
              "font-size": e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize,
              fill: e.value.style.chart.layout.grid.xAxis.dataLabels.color,
              transform: `translate(${s2.value.left + w.value * n + w.value / 2}, ${e.value.style.chart.layout.grid.xAxis.dataLabels.offsetY + r.value.absoluteHeight - s2.value.bottom + e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize * 2}), rotate(${e.value.style.chart.layout.grid.xAxis.dataLabels.rotation})`
            }, toDisplayString(e.value.style.chart.layout.grid.xAxis.dataLabels.values[Number(n) + Number(h.value.start)] ?? ""), 9, Rt)) : createCommentVNode("", true)
          ]))), 256))
        ], 2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", null, [
          e.value.style.chart.layout.line.show && n < C2.value.length - 1 && ![t.subtotal, C2.value[n + 1].subtotal].includes(null) ? (openBlock(), createElementBlock("line", {
            key: 0,
            class: normalizeClass({ "donut-opacity": true, "donut-behind": g.value !== null || $.value }),
            x1: t.x,
            y1: t.y,
            x2: C2.value[n + 1].x,
            y2: C2.value[n + 1].y,
            stroke: e.value.style.chart.layout.line.stroke,
            "stroke-width": e.value.style.chart.layout.line.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 10, Ut2)) : createCommentVNode("", true),
          t.subtotal !== null ? (openBlock(), createElementBlock("g", Xt, [
            t.subtotal ? (openBlock(), createElementBlock("circle", {
              key: 0,
              cx: t.x,
              cy: t.y,
              r: t.activeRadius,
              fill: e.value.style.chart.backgroundColor
            }, null, 8, Gt)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", {
          class: normalizeClass({ "donut-opacity": true, "donut-behind": n !== g.value && g.value !== null || $.value })
        }, [
          t.subtotal ? (openBlock(), createElementBlock("g", jt2, [
            g.value !== null && g.value === n ? (openBlock(), createElementBlock("g", Bt, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donutHover, (u) => (openBlock(), createElementBlock("g", null, [
                createBaseVNode("path", {
                  d: unref(zt)(u, { x: u.center.endX, y: u.center.endY }, 12, 12, { x: t.x, y: t.y }, true, 20),
                  stroke: u.color,
                  "stroke-width": "1",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  fill: "none"
                }, null, 8, Yt)
              ]))), 256)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donutHover, (u, f) => (openBlock(), createElementBlock("g", null, [
                createBaseVNode("text", {
                  "data-cy-hover-label": "",
                  "text-anchor": unref(z)(u, true, 0).anchor,
                  x: unref(z)(u, true, 3).x,
                  y: unref(T)(u),
                  fill: e.value.style.chart.layout.grid.yAxis.dataLabels.color,
                  "font-size": 8,
                  "font-weight": "bold"
                }, toDisplayString(u.name) + ": " + toDisplayString(Le(u, t.donut)) + " (" + toDisplayString(u.value === null ? "-" : j(u.value, u, f)) + ") ", 9, Kt)
              ]))), 256)),
              createBaseVNode("g", null, [
                createBaseVNode("circle", {
                  cx: t.x,
                  cy: t.y,
                  r: t.hoverRadius,
                  fill: e.value.style.chart.backgroundColor
                }, null, 8, qt2)
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", {
          class: normalizeClass({ "donut-opacity": true, "donut-behind": n !== g.value && g.value !== null || $.value })
        }, [
          t.subtotal !== null ? (openBlock(), createElementBlock("g", Jt2, [
            t.subtotal === 0 ? (openBlock(), createElementBlock("circle", {
              key: 0,
              cx: t.x,
              cy: t.y,
              r: 3,
              fill: e.value.style.chart.color
            }, null, 8, Qt)) : g.value !== null && g.value === n ? (openBlock(), createElementBlock("g", Zt2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donutHover, (u, f) => (openBlock(), createElementBlock("path", {
                d: u.arcSlice,
                fill: `${u.color}`,
                "stroke-width": 1,
                stroke: e.value.style.chart.backgroundColor
              }, null, 8, el))), 256))
            ])) : (openBlock(), createElementBlock("g", tl, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donut, (u, f) => (openBlock(), createElementBlock("path", {
                d: u.arcSlice,
                fill: `${u.color}`,
                "stroke-width": 0.5,
                stroke: e.value.style.chart.backgroundColor
              }, null, 8, ll))), 256))
            ]))
          ])) : createCommentVNode("", true)
        ], 2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", {
          class: normalizeClass({ "donut-opacity": true, "donut-behind": n !== g.value && g.value !== null || $.value })
        }, [
          t.subtotal !== null && e.value.style.chart.layout.dataLabels.show ? (openBlock(), createElementBlock("text", {
            key: 0,
            "text-anchor": "middle",
            x: t.x,
            y: g.value === t.index && t.subtotal ? t.y + e.value.style.chart.layout.dataLabels.fontSize / 3 : t.y - t.radius - e.value.style.chart.layout.dataLabels.fontSize + e.value.style.chart.layout.dataLabels.offsetY,
            "font-size": e.value.style.chart.layout.dataLabels.fontSize,
            "font-weight": "bold",
            fill: e.value.style.chart.layout.dataLabels.color
          }, toDisplayString(j(t.subtotal, t, n)), 9, al)) : createCommentVNode("", true)
        ], 2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("rect", {
          x: s2.value.left + n * w.value,
          y: r.value.absoluteHeight - s2.value.bottom - 10,
          width: w.value,
          height: 10,
          fill: g.value === t.index ? `url(#hover_${O.value})` : "transparent",
          onClick: (u) => oe(t, n),
          class: normalizeClass({ "donut-hover": g.value === t.index && t.subtotal })
        }, null, 10, ol))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("rect", {
          "data-cy-trap": "",
          x: s2.value.left + n * w.value,
          y: s2.value.top,
          width: w.value,
          height: r.value.height,
          fill: "transparent",
          onMouseenter: (u) => Ke(t),
          onMouseleave: Ae,
          onClick: (u) => oe(t, n),
          class: normalizeClass({ "donut-hover": g.value === t.index && t.subtotal })
        }, null, 42, ul))), 256)),
        $.value ? (openBlock(), createElementBlock("g", sl, [
          createBaseVNode("rect", {
            rx: 4,
            x: s2.value.left,
            y: s2.value.top,
            width: r.value.width,
            height: r.value.height,
            fill: e.value.style.chart.backgroundColor,
            style: { filter: "drop-shadow(0 12px 12px rgba(0,0,0,0.3))" }
          }, null, 8, nl),
          createBaseVNode("line", {
            "data-html2canvas-ignore": "",
            x1: r.value.absoluteWidth - s2.value.right - 15,
            y1: s2.value.top + 5,
            x2: r.value.absoluteWidth - s2.value.right - 4,
            y2: s2.value.top + 15.5,
            "stroke-linecap": "round",
            stroke: e.value.style.chart.color,
            "stroke-width": "1.5"
          }, null, 8, rl),
          createBaseVNode("line", {
            "data-html2canvas-ignore": "",
            x1: r.value.absoluteWidth - s2.value.right - 15,
            y2: s2.value.top + 5,
            x2: r.value.absoluteWidth - s2.value.right - 4,
            y1: s2.value.top + 15.5,
            "stroke-linecap": "round",
            stroke: e.value.style.chart.color,
            "stroke-width": "1.5"
          }, null, 8, il),
          createBaseVNode("circle", {
            "data-cy-close": "",
            onClick: $e,
            onKeypress: withKeys($e, ["enter"]),
            cx: r.value.absoluteWidth - s2.value.right - r.value.width / 40,
            cy: s2.value.top + r.value.height / 30,
            r: r.value.height / 12,
            fill: "transparent",
            style: { cursor: "pointer" },
            tabindex: "0"
          }, null, 40, cl),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value.donutFocus, (t) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              "data-cy-zoom-donut": "",
              d: unref(zt)(t, { x: r.value.centerX, y: r.value.centerY }, 12, 12, false, false, 15),
              stroke: t.color,
              "stroke-width": "1",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              fill: "none",
              class: "vue-ui-donut-evolution-focus"
            }, null, 8, vl)
          ]))), 256)),
          createBaseVNode("circle", {
            cx: s2.value.left + r.value.width / 2,
            cy: s2.value.top + r.value.height / 2,
            r: r.value.height / 7,
            fill: e.value.style.chart.backgroundColor
          }, null, 8, dl),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value.donutFocus, (t, n) => (openBlock(), createElementBlock("path", {
            d: t.arcSlice,
            fill: `${t.color}`,
            "stroke-width": 1,
            stroke: e.value.style.chart.backgroundColor,
            class: "vue-ui-donut-evolution-focus"
          }, null, 8, hl))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value.donutFocus, (t, n) => (openBlock(), createElementBlock("g", yl, [
            createBaseVNode("text", {
              "text-anchor": unref(z)(t, true, 20).anchor,
              x: unref(z)(t, true, 10).x,
              y: unref(T)(t),
              fill: e.value.style.chart.layout.grid.yAxis.dataLabels.color,
              "font-size": 10,
              "font-weight": "bold"
            }, toDisplayString(t.name) + ": " + toDisplayString(Le(t, S.value.donutFocus)) + " (" + toDisplayString(t.value === null ? "-" : j(t.value, t, n)) + ") ", 9, fl)
          ]))), 256)),
          createBaseVNode("circle", {
            cx: s2.value.left + r.value.width / 2,
            cy: s2.value.top + r.value.height / 2,
            r: r.value.height / 3.8,
            fill: `url(#focus_${O.value})`
          }, null, 8, gl),
          createBaseVNode("circle", {
            cx: s2.value.left + r.value.width / 2,
            cy: s2.value.top + r.value.height / 2,
            r: r.value.height / 7.7,
            fill: e.value.style.chart.backgroundColor
          }, null, 8, bl),
          createBaseVNode("text", {
            "text-anchor": "middle",
            x: s2.value.left + r.value.width / 2,
            y: s2.value.top + r.value.height / 2 + 14 / 3,
            "font-size": 14,
            "font-weight": "bold",
            fill: e.value.style.chart.layout.dataLabels.color,
            class: "vue-ui-donut-evolution-focus"
          }, toDisplayString(j(S.value.subtotal, S.value, null)), 9, ml),
          e.value.style.chart.layout.grid.xAxis.dataLabels.values[S.value.index] ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: s2.value.left + 6,
            y: s2.value.top + e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize * 2,
            "font-size": e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize * 1.6,
            fill: e.value.style.chart.layout.dataLabels.color
          }, toDisplayString(e.value.style.chart.layout.grid.xAxis.dataLabels.values[Number(S.value.index) + Number(h.value.start)]), 9, pl)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "svg", { svg: r.value }, void 0, true)
      ], 14, $t)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", xl, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ke) || unref(_e) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "donutEvolution",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            donutEvolution: {
              axis: {
                color: "#CCCCCC"
              },
              donuts: {
                color: "#CCCCCC"
              }
            }
          }
        }
      }, null, 8, ["config"])),
      W2.value > 1 && e.value.style.chart.zoom.show ? (openBlock(), createBlock(Ue, {
        key: `slicer_${ge.value}`,
        background: e.value.style.chart.zoom.color,
        borderColor: e.value.style.chart.backgroundColor,
        fontSize: e.value.style.chart.zoom.fontSize,
        useResetSlot: e.value.style.chart.zoom.useResetSlot,
        labelLeft: e.value.style.chart.layout.grid.xAxis.dataLabels.values[Number(h.value.start)] || "",
        labelRight: e.value.style.chart.layout.grid.xAxis.dataLabels.values[Number(h.value.end) - 1] || "",
        textColor: e.value.style.chart.color,
        inputColor: e.value.style.chart.zoom.color,
        selectColor: e.value.style.chart.zoom.highlightColor,
        max: W2.value,
        min: 0,
        valueStart: h.value.start,
        valueEnd: h.value.end,
        start: h.value.start,
        "onUpdate:start": i[0] || (i[0] = (t) => h.value.start = t),
        end: h.value.end,
        "onUpdate:end": i[1] || (i[1] = (t) => h.value.end = t),
        onReset: he
      }, {
        "reset-action": withCtx(({ reset: t }) => [
          renderSlot(l.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: t })), void 0, true)
        ]),
        _: 3
      }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"])) : createCommentVNode("", true),
      e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
        key: `legend_${pe.value}`,
        legendSet: Se2.value,
        config: qe.value,
        onClickMarker: i[2] || (i[2] = ({ legend: t }) => ue(t.uid))
      }, {
        item: withCtx(({ legend: t, index: n }) => [
          createBaseVNode("div", {
            "data-cy-legend-item": "",
            onClick: (u) => ue(t.uid),
            style: normalizeStyle(`opacity:${_.value.includes(t.uid) ? 0.5 : 1}`)
          }, [
            createTextVNode(toDisplayString(t.name) + ": " + toDisplayString(unref(ir)(
              e.value.style.chart.layout.dataLabels.formatter,
              t.value,
              unref(Ht)({
                p: e.value.style.chart.layout.dataLabels.prefix,
                v: t.value,
                s: e.value.style.chart.layout.dataLabels.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: t, seriesIndex: n }
            )) + " ", 1),
            _.value.includes(t.uid) ? (openBlock(), createElementBlock("span", Cl, " ( - % ) ")) : (openBlock(), createElementBlock("span", _l, " (" + toDisplayString(isNaN(t.value / Ne.value) ? "-" : unref(Ht)({
              v: t.value / Ne.value * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })) + ") ", 1))
          ], 12, kl)
        ]),
        _: 1
      }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
      renderSlot(l.$slots, "legend", { legend: Se2.value }, void 0, true),
      l.$slots.source ? (openBlock(), createElementBlock("div", wl, [
        renderSlot(l.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      X.value ? (openBlock(), createBlock(R, {
        key: 10,
        hideDetails: "",
        config: {
          open: G.value.showTable,
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
            key: `table_${me.value}`,
            colNames: V.value.colNames,
            head: V.value.head,
            body: V.value.body,
            config: V.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: i[3] || (i[3] = (t) => G.value.showTable = false)
          }, {
            th: withCtx(({ th: t }) => [
              createTextVNode(toDisplayString(t.name ?? t), 1)
            ]),
            td: withCtx(({ td: t }) => [
              t.value === null ? (openBlock(), createElementBlock("span", Ll, "-")) : (openBlock(), createElementBlock("b", Al, toDisplayString(isNaN(t.value) ? "" : e.value.style.chart.layout.dataLabels.prefix) + toDisplayString(!isNaN(t.value) && t.value !== null ? Number(t.value.toFixed(e.value.table.td.roundingValue)).toLocaleString() : t) + toDisplayString(isNaN(t.value) ? "" : e.value.style.chart.layout.dataLabels.suffix), 1)),
              createBaseVNode("span", null, toDisplayString(t.percentage && !isNaN(t.percentage) ? `(${Number(t.percentage.toFixed(e.value.table.td.roundingPercentage)).toLocaleString()}%)` : ""), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, At));
  }
};
var Wl = s($l, [["__scopeId", "data-v-800b47b9"]]);
export {
  Wl as default
};
//# sourceMappingURL=vue-ui-donut-evolution-DbU4RlP6-DEACVPZM.js.map
