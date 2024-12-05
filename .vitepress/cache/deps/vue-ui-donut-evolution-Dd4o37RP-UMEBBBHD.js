import {
  _e
} from "./chunk-2OITSM6Y.js";
import {
  C
} from "./chunk-KAESDEK5.js";
import "./chunk-NF5J7GNE.js";
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
  Bt,
  Ge,
  Gt,
  It,
  Kt,
  Lt,
  Nt,
  Ot,
  P,
  Pt,
  Qt,
  R as R2,
  Xt,
  cr,
  et,
  gt,
  ir,
  j,
  nr,
  oe,
  or,
  qt,
  z,
  zt
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
  withCtx,
  withKeys
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-donut-evolution-Dd4o37RP.js
var kt = ["id"];
var _t = ["xmlns", "viewBox"];
var Ct = ["id"];
var wt = ["stop-color"];
var Lt2 = ["stop-color"];
var $t = ["id"];
var St = ["stop-color"];
var At = ["stop-color"];
var Nt2 = ["stop-color"];
var zt2 = { key: 0 };
var Ft = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Pt2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Dt = { key: 0 };
var It2 = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Tt = ["x1", "x2", "y1", "y2", "stroke", "stroke-width"];
var Et = ["x", "y", "font-size", "fill", "font-weight"];
var Ot2 = ["text-anchor", "font-size", "fill", "transform"];
var Vt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Ht = { key: 1 };
var Mt = ["cx", "cy", "r", "fill"];
var Wt = { key: 0 };
var Rt = { key: 0 };
var Ut = ["d", "stroke"];
var Xt2 = ["text-anchor", "x", "y", "fill"];
var Gt2 = ["cx", "cy", "r", "fill"];
var jt = { key: 0 };
var Bt2 = ["cx", "cy", "fill"];
var Yt = { key: 1 };
var Kt2 = ["d", "fill", "stroke"];
var qt2 = { key: 2 };
var Jt = ["d", "fill", "stroke"];
var Qt2 = ["x", "y", "font-size", "fill"];
var Zt = ["x", "y", "width", "fill", "onClick"];
var el = ["x", "y", "width", "height", "onMouseenter", "onClick"];
var tl = {
  key: 3,
  "data-cy-zoom": "",
  class: "vue-ui-donut-evolution-dialog"
};
var ll = ["x", "y", "width", "height", "fill"];
var al = ["x1", "y1", "x2", "y2", "stroke"];
var ul = ["x1", "y2", "x2", "y1", "stroke"];
var ol = ["onKeypress", "cx", "cy", "r"];
var sl = ["d", "stroke"];
var rl = ["cx", "cy", "r", "fill"];
var nl = ["d", "fill", "stroke"];
var il = { class: "vue-ui-donut-evolution-focus" };
var cl = ["text-anchor", "x", "y", "fill"];
var vl = ["cx", "cy", "r", "fill"];
var dl = ["cx", "cy", "r", "fill"];
var hl = ["x", "y", "fill"];
var yl = ["x", "y", "font-size", "fill"];
var fl = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var gl = ["onClick"];
var bl = { key: 0 };
var xl = { key: 1 };
var ml = { key: 0 };
var pl = { key: 1 };
var kl = {
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
  setup(He, { expose: Me, emit: ie2 }) {
    const $ = He, { vue_ui_donut_evolution: We } = oe(), X = computed(() => !!$.dataset && $.dataset.length), h = ref({
      start: 0,
      end: Math.max(...$.dataset.map((l) => l.values.length))
    });
    function ce() {
      h.value = {
        start: 0,
        end: W2.value
      }, ye.value += 1;
    }
    onMounted(() => {
      ve();
    });
    function ve() {
      Xt($.dataset) ? Kt({
        componentName: "VueUiDonutEvolution",
        type: "dataset"
      }) : $.dataset.length && $.dataset.forEach((l, i) => {
        qt({
          datasetObject: l,
          requiredAttributes: ["name", "values"]
        }).forEach((t) => {
          Kt({
            componentName: "VueUiDonutEvolution",
            type: "datasetSerieAttribute",
            property: t,
            index: i
          });
        });
      });
    }
    const T = ref(Lt()), _ = ref([]), g = ref(null), J = ref(null), S = ref(false), A = ref(null), de = ref(null), he = ref(0), ye = ref(0), fe = ref(0), ge = ref(0), be = ref(0), e = computed({
      get: () => xe(),
      set: (l) => l
    });
    function xe() {
      const l = c({
        userConfig: $.config,
        defaultConfig: We
      });
      return l.theme ? {
        ...c({
          userConfig: Ge.vue_ui_donut_evolution[l.theme] || $.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || et
      } : l;
    }
    watch(() => $.config, (l) => {
      e.value = xe(), ve(), fe.value += 1, ge.value += 1, be.value += 1;
    }, { deep: true }), watch(() => $.dataset, (l) => {
      ce();
    }, { deep: true });
    const { isPrinting: me, isImaging: pe, generatePdf: ke, generateImage: _e2 } = se({
      elementId: T.value,
      fileName: e.value.style.chart.title.text || "vue-ui-donut-evolution"
    }), Re = computed(() => or(e.value.customPalette)), G = ref({
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
    }), D = computed(() => ($.dataset.forEach((l, i) => {
      [null, void 0].includes(l.name) && Kt({
        componentName: "VueUiDonutEvolution",
        type: "datasetSerieAttribute",
        property: "name",
        index: i
      }), [null, void 0].includes(l.values) && Kt({
        componentName: "VueUiDonutEvolution",
        type: "datasetSerieAttribute",
        property: "values",
        index: i
      });
    }), $.dataset.map((l, i) => ({
      ...l,
      values: ir(l.values),
      color: j(l.color) || Re.value[i] || et[i] || et[i % et.length],
      length: (l.values || []).length,
      uid: Lt()
    })))), M = computed(() => D.value.filter((l) => !_.value.includes(l.uid)).map((l) => ({
      ...l,
      values: l.values.filter((i, t) => t >= h.value.start && t <= h.value.end)
    }))), W2 = computed(() => Math.max(...M.value.map((l) => l.length))), w = computed(() => r.value.width / (h.value.end - h.value.start)), C2 = computed(() => {
      const l = [];
      for (let o = 0; o < h.value.end - h.value.start; o += 1) {
        const f = M.value.map((z2) => z2.values[o] ?? null), y = f.filter((z2) => [void 0, null].includes(z2)).length === f.length, N = f.reduce((z2, L) => z2 + L, 0), le = f.map((z2) => z2 / N), H = s2.value.left + w.value * o + w.value / 2;
        l.push({
          index: o,
          percentages: le,
          subtotal: y || N < 0 ? null : N,
          values: f,
          x: H
        });
      }
      const i = 0, t = Math.max(...l.map((o) => o.subtotal)), n = l.length === 1 ? t * 2 : t;
      return l.map((o, f) => {
        const y = w.value / 2 * 0.7, N = y > r.value.width / 16 ? r.value.width / 16 : y, le = g.value === o.index ? r.value.width / 16 : N, H = l.length > 4 ? y * 2 : y * 2 > w.value / 2 * 0.7 ? w.value / 2 * 0.7 : y * 2, z2 = r.value.absoluteHeight - s2.value.bottom - r.value.height * o.subtotal / It(i, n, e.value.style.chart.layout.grid.yAxis.dataLabels.steps).max;
        return {
          ...o,
          y: z2,
          radius: N,
          activeRadius: le,
          hoverRadius: H,
          donut: gt({
            series: M.value.map((L, ze) => ({
              color: L.color,
              name: L.name,
              value: L.values[f] ?? 0
            }))
          }, o.x, z2, N, N, 1.99999, 2, 1, 360, 105.25, N / 2),
          donutHover: gt({
            series: M.value.map((L, ze) => ({
              color: L.color,
              name: L.name,
              value: L.values[f] ?? 0
            }))
          }, o.x, z2, H, H, 1.99999, 2, 1, 360, 105.25, H / 2),
          donutFocus: gt({
            series: M.value.map((L, ze) => ({
              color: L.color,
              name: L.name,
              value: L.values[f] ?? 0
            }))
          }, r.value.centerX, r.value.centerY, r.value.height / 3.6, r.value.height / 3.6, 1.99999, 2, 1, 360, 105.25, r.value.height / 6)
        };
      });
    });
    function j2(l, i, t) {
      return nr(
        e.value.style.chart.layout.dataLabels.formatter,
        l,
        Gt({
          p: e.value.style.chart.layout.dataLabels.prefix,
          v: l,
          s: e.value.style.chart.layout.dataLabels.suffix,
          r: e.value.style.chart.layout.dataLabels.rounding
        }),
        { datapoint: i, index: t }
      );
    }
    const Q = computed(() => ({
      max: Math.max(...C2.value.map((l) => l.subtotal)),
      min: 0
    })), O = computed(() => {
      const l = C2.value.length === 1 ? Q.value.max * 2 : Q.value.max;
      return It(Q.value.min, l, e.value.style.chart.layout.grid.yAxis.dataLabels.steps);
    });
    function Ue(l) {
      return l / O.value.max;
    }
    const Xe = computed(() => O.value.ticks.map((l) => ({
      y: r.value.absoluteHeight - s2.value.bottom - r.value.height * Ue(l),
      value: l
    })));
    function Ce(l, i) {
      return isNaN(l.value / Pt(i, "value")) ? 0 : (l.value / Pt(i, "value") * 100).toFixed(0) + "%";
    }
    function we() {
      S.value || (g.value = null, J.value = null);
    }
    function Ge2(l) {
      S.value || (g.value = l.index, J.value = l);
    }
    const Z = ref(null);
    function ee(l, i) {
      l.subtotal && (J.value = null, g.value = null, S.value = true, A.value = l, [null, void 0].includes(i) || (Z.value = i));
    }
    function Le() {
      A.value = null, S.value = false, Z.value = null;
    }
    const $e = computed(() => D.value.map((l, i) => ({
      name: l.name,
      value: l.values.slice(h.value.start, h.value.end).reduce((t, n) => t + n, 0),
      shape: "circle",
      uid: l.uid,
      color: l.color
    })).sort((l, i) => i.value - l.value).map((l) => ({
      ...l,
      opacity: _.value.includes(l.uid) ? 0.5 : 1,
      segregate: () => te(l.uid),
      isSegregated: _.value.includes(l.uid)
    }))), Se = computed(() => C2.value.map((l) => l.subtotal).reduce((l, i) => l + i, 0)), je = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    }));
    function te(l) {
      if (_.value.includes(l))
        _.value = _.value.filter((i) => i !== l), ie2("selectLegend", null);
      else {
        if (_.value.length === D.value.length - 1) return;
        _.value.push(l), ie2("selectLegend", D.value.find((i) => i.uid === l));
      }
      A.value && ee(C2.value.find((i, t) => t === Z.value));
    }
    const V = computed(() => {
      const l = [""].concat(D.value.filter((o) => !_.value.includes(o.uid)).map((o) => ({
        name: o.name,
        color: o.color
      }))).concat(["Σ"]);
      let i = [];
      for (let o = 0; o < W2.value; o += 1) {
        const f = D.value.filter((y) => !_.value.includes(y.uid)).map((y) => y.values[o] ?? 0).reduce((y, N) => y + N, 0);
        i.push([e.value.style.chart.layout.grid.xAxis.dataLabels.values[o] ?? "-"].concat(D.value.filter((y) => !_.value.includes(y.uid)).map((y) => ({
          value: y.values[o] ?? 0,
          percentage: y.values[o] ? y.values[o] / f * 100 : 0
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
      ].concat(D.value.filter((o) => !_.value.includes(o.uid)).map((o) => o.name)).concat(e.value.table.columnNames.total);
      return { head: l, body: i, config: t, colNames: n };
    });
    function Be() {
      return D.value;
    }
    function Ae() {
      nextTick(() => {
        const l = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [""]], i = [...V.value.head.map((f) => f.name ?? f)], t = [...V.value.body.map((f) => f.map((y) => y.value ?? y))], n = l.concat([i]).concat(t), o = Nt(n);
        Ot({ csvContent: o, title: e.value.style.chart.title.text || "vue-ui-donut-evolution" });
      });
    }
    const R3 = ref(false);
    function Ye(l) {
      R3.value = l, he.value += 1;
    }
    function Ne() {
      G.value.showTable = !G.value.showTable;
    }
    return Me({
      getData: Be,
      generatePdf: ke,
      generateCsv: Ae,
      generateImage: _e2,
      toggleTable: Ne
    }), (l, i) => (openBlock(), createElementBlock("div", {
      ref_key: "donutEvolutionChart",
      ref: de,
      class: normalizeClass(`vue-ui-donut-evolution ${R3.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: T.value
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: "width:100%;background:transparent;padding-bottom:24px",
        onMouseleave: we
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${fe.value}`,
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
      e.value.userOptions.show && X.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_options_${he.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(me),
        isImaging: unref(pe),
        uid: T.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: R3.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: de.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Ye,
        onGeneratePdf: unref(ke),
        onGenerateCsv: Ae,
        onGenerateImage: unref(_e2),
        onToggleTable: Ne
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasXls", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      X.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": R3.value, "vue-data-ui-fulscreen--off": !R3.value }),
        viewBox: `0 0 ${r.value.absoluteWidth} ${r.value.absoluteHeight}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: `hover_${T.value}`,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(e.value.style.chart.backgroundColor, e.value.style.chart.layout.highlighter.opacity)
            }, null, 8, wt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(e.value.style.chart.layout.highlighter.color, e.value.style.chart.layout.highlighter.opacity)
            }, null, 8, Lt2)
          ], 8, Ct),
          createBaseVNode("radialGradient", {
            id: `focus_${T.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(j)(e.value.style.chart.backgroundColor), 0)
            }, null, 8, St),
            createBaseVNode("stop", {
              offset: "77%",
              "stop-color": unref(cr)("#FFFFFF", 30)
            }, null, 8, At),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(unref(j)(e.value.style.chart.backgroundColor), 0)
            }, null, 8, Nt2)
          ], 8, $t)
        ]),
        e.value.style.chart.layout.grid.show ? (openBlock(), createElementBlock("g", zt2, [
          createBaseVNode("line", {
            x1: s2.value.left,
            x2: s2.value.left,
            y1: s2.value.top,
            y2: s2.value.top + r.value.height,
            stroke: e.value.style.chart.layout.grid.stroke,
            "stroke-width": e.value.style.chart.layout.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Ft),
          createBaseVNode("line", {
            x1: s2.value.left,
            x2: r.value.absoluteWidth - s2.value.right,
            y1: r.value.absoluteHeight - s2.value.bottom,
            y2: r.value.absoluteHeight - s2.value.bottom,
            stroke: e.value.style.chart.layout.grid.stroke,
            "stroke-width": e.value.style.chart.layout.grid.strokeWidth,
            "stroke-linecap": "round"
          }, null, 8, Pt2),
          e.value.style.chart.layout.grid.showVerticalLines ? (openBlock(), createElementBlock("g", Dt, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(h.value.end - h.value.start, (t, n) => (openBlock(), createElementBlock("line", {
              x1: s2.value.left + (n + 1) * w.value,
              x2: s2.value.left + (n + 1) * w.value,
              y1: s2.value.top,
              y2: r.value.absoluteHeight - s2.value.bottom,
              stroke: e.value.style.chart.layout.grid.stroke,
              "stroke-width": e.value.style.chart.layout.grid.strokeWidth,
              "stroke-linecap": "round"
            }, null, 8, It2))), 256))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        e.value.style.chart.layout.grid.yAxis.dataLabels.show ? (openBlock(), createElementBlock("g", {
          key: 1,
          class: normalizeClass({ "donut-opacity": true, "donut-behind": g.value !== null || S.value })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Xe.value, (t, n) => (openBlock(), createElementBlock("g", null, [
            t.value >= O.value.min && t.value <= O.value.max ? (openBlock(), createElementBlock("line", {
              key: 0,
              x1: s2.value.left,
              x2: s2.value.left - 5,
              y1: t.y,
              y2: t.y,
              stroke: e.value.style.chart.layout.grid.stroke,
              "stroke-width": e.value.style.chart.layout.grid.strokeWidth
            }, null, 8, Tt)) : createCommentVNode("", true),
            t.value >= O.value.min && t.value <= O.value.max ? (openBlock(), createElementBlock("text", {
              key: 1,
              x: s2.value.left - 8 + e.value.style.chart.layout.grid.yAxis.dataLabels.offsetX,
              y: t.y + e.value.style.chart.layout.grid.yAxis.dataLabels.fontSize / 3,
              "font-size": e.value.style.chart.layout.grid.yAxis.dataLabels.fontSize,
              "text-anchor": "end",
              fill: e.value.style.chart.layout.grid.yAxis.dataLabels.color,
              "font-weight": e.value.style.chart.layout.grid.yAxis.dataLabels.bold ? "bold" : "normal"
            }, toDisplayString(unref(zt)(t.value) ? unref(nr)(
              e.value.style.chart.layout.dataLabels.formatter,
              t.value,
              unref(Gt)({
                p: e.value.style.chart.layout.dataLabels.prefix,
                v: t.value,
                s: e.value.style.chart.layout.dataLabels.suffix,
                r: e.value.style.chart.layout.grid.yAxis.dataLabels.roundingValue
              }),
              { datapoint: t, seriesIndex: n }
            ) : ""), 9, Et)) : createCommentVNode("", true)
          ]))), 256))
        ], 2)) : createCommentVNode("", true),
        e.value.style.chart.layout.grid.xAxis.dataLabels.show ? (openBlock(), createElementBlock("g", {
          key: 2,
          class: normalizeClass({ "donut-opacity": true, "donut-behind": S.value })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(h.value.end - h.value.start, (t, n) => (openBlock(), createElementBlock("g", null, [
            e.value.style.chart.layout.grid.xAxis.dataLabels.showOnlyFirstAndLast && (n === 0 || n === W2.value - 1) || !e.value.style.chart.layout.grid.xAxis.dataLabels.showOnlyFirstAndLast ? (openBlock(), createElementBlock("text", {
              key: 0,
              "text-anchor": e.value.style.chart.layout.grid.xAxis.dataLabels.rotation > 0 ? "start" : e.value.style.chart.layout.grid.xAxis.dataLabels.rotation < 0 ? "end" : "middle",
              "font-size": e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize,
              fill: e.value.style.chart.layout.grid.xAxis.dataLabels.color,
              transform: `translate(${s2.value.left + w.value * n + w.value / 2}, ${e.value.style.chart.layout.grid.xAxis.dataLabels.offsetY + r.value.absoluteHeight - s2.value.bottom + e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize * 2}), rotate(${e.value.style.chart.layout.grid.xAxis.dataLabels.rotation})`
            }, toDisplayString(e.value.style.chart.layout.grid.xAxis.dataLabels.values[Number(n) + Number(h.value.start)] ?? ""), 9, Ot2)) : createCommentVNode("", true)
          ]))), 256))
        ], 2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", null, [
          e.value.style.chart.layout.line.show && n < C2.value.length - 1 && ![t.subtotal, C2.value[n + 1].subtotal].includes(null) ? (openBlock(), createElementBlock("line", {
            key: 0,
            class: normalizeClass({ "donut-opacity": true, "donut-behind": g.value !== null || S.value }),
            x1: t.x,
            y1: t.y,
            x2: C2.value[n + 1].x,
            y2: C2.value[n + 1].y,
            stroke: e.value.style.chart.layout.line.stroke,
            "stroke-width": e.value.style.chart.layout.line.strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 10, Vt)) : createCommentVNode("", true),
          t.subtotal !== null ? (openBlock(), createElementBlock("g", Ht, [
            t.subtotal ? (openBlock(), createElementBlock("circle", {
              key: 0,
              cx: t.x,
              cy: t.y,
              r: t.activeRadius,
              fill: e.value.style.chart.backgroundColor
            }, null, 8, Mt)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", {
          class: normalizeClass({ "donut-opacity": true, "donut-behind": n !== g.value && g.value !== null || S.value })
        }, [
          t.subtotal ? (openBlock(), createElementBlock("g", Wt, [
            g.value !== null && g.value === n ? (openBlock(), createElementBlock("g", Rt, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donutHover, (o) => (openBlock(), createElementBlock("g", null, [
                createBaseVNode("path", {
                  d: unref(Bt)(o, { x: o.center.endX, y: o.center.endY }, 12, 12, { x: t.x, y: t.y }, true, 20),
                  stroke: o.color,
                  "stroke-width": "1",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  fill: "none"
                }, null, 8, Ut)
              ]))), 256)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donutHover, (o, f) => (openBlock(), createElementBlock("g", null, [
                createBaseVNode("text", {
                  "data-cy-hover-label": "",
                  "text-anchor": unref(z)(o, true, 0).anchor,
                  x: unref(z)(o, true, 3).x,
                  y: unref(P)(o),
                  fill: e.value.style.chart.layout.grid.yAxis.dataLabels.color,
                  "font-size": 8,
                  "font-weight": "bold"
                }, toDisplayString(o.name) + ": " + toDisplayString(Ce(o, t.donut)) + " (" + toDisplayString(o.value === null ? "-" : j2(o.value, o, f)) + ") ", 9, Xt2)
              ]))), 256)),
              createBaseVNode("g", null, [
                createBaseVNode("circle", {
                  cx: t.x,
                  cy: t.y,
                  r: t.hoverRadius,
                  fill: e.value.style.chart.backgroundColor
                }, null, 8, Gt2)
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", {
          class: normalizeClass({ "donut-opacity": true, "donut-behind": n !== g.value && g.value !== null || S.value })
        }, [
          t.subtotal !== null ? (openBlock(), createElementBlock("g", jt, [
            t.subtotal === 0 ? (openBlock(), createElementBlock("circle", {
              key: 0,
              cx: t.x,
              cy: t.y,
              r: 3,
              fill: e.value.style.chart.color
            }, null, 8, Bt2)) : g.value !== null && g.value === n ? (openBlock(), createElementBlock("g", Yt, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donutHover, (o, f) => (openBlock(), createElementBlock("path", {
                d: o.arcSlice,
                fill: `${o.color}`,
                "stroke-width": 1,
                stroke: e.value.style.chart.backgroundColor
              }, null, 8, Kt2))), 256))
            ])) : (openBlock(), createElementBlock("g", qt2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.donut, (o, f) => (openBlock(), createElementBlock("path", {
                d: o.arcSlice,
                fill: `${o.color}`,
                "stroke-width": 0.5,
                stroke: e.value.style.chart.backgroundColor
              }, null, 8, Jt))), 256))
            ]))
          ])) : createCommentVNode("", true)
        ], 2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("g", {
          class: normalizeClass({ "donut-opacity": true, "donut-behind": n !== g.value && g.value !== null || S.value })
        }, [
          t.subtotal !== null && e.value.style.chart.layout.dataLabels.show ? (openBlock(), createElementBlock("text", {
            key: 0,
            "text-anchor": "middle",
            x: t.x,
            y: g.value === t.index && t.subtotal ? t.y + e.value.style.chart.layout.dataLabels.fontSize / 3 : t.y - t.radius - e.value.style.chart.layout.dataLabels.fontSize + e.value.style.chart.layout.dataLabels.offsetY,
            "font-size": e.value.style.chart.layout.dataLabels.fontSize,
            "font-weight": "bold",
            fill: e.value.style.chart.layout.dataLabels.color
          }, toDisplayString(j2(t.subtotal, t, n)), 9, Qt2)) : createCommentVNode("", true)
        ], 2))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("rect", {
          x: s2.value.left + n * w.value,
          y: r.value.absoluteHeight - s2.value.bottom - 10,
          width: w.value,
          height: 10,
          fill: g.value === t.index ? `url(#hover_${T.value})` : "transparent",
          onClick: (o) => ee(t, n),
          class: normalizeClass({ "donut-hover": g.value === t.index && t.subtotal })
        }, null, 10, Zt))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (t, n) => (openBlock(), createElementBlock("rect", {
          "data-cy-trap": "",
          x: s2.value.left + n * w.value,
          y: s2.value.top,
          width: w.value,
          height: r.value.height,
          fill: "transparent",
          onMouseenter: (o) => Ge2(t),
          onMouseleave: we,
          onClick: (o) => ee(t, n),
          class: normalizeClass({ "donut-hover": g.value === t.index && t.subtotal })
        }, null, 42, el))), 256)),
        S.value ? (openBlock(), createElementBlock("g", tl, [
          createBaseVNode("rect", {
            rx: 4,
            x: s2.value.left,
            y: s2.value.top,
            width: r.value.width,
            height: r.value.height,
            fill: e.value.style.chart.backgroundColor,
            style: { filter: "drop-shadow(0 12px 12px rgba(0,0,0,0.3))" }
          }, null, 8, ll),
          createBaseVNode("line", {
            "data-html2canvas-ignore": "",
            x1: r.value.absoluteWidth - s2.value.right - 15,
            y1: s2.value.top + 5,
            x2: r.value.absoluteWidth - s2.value.right - 4,
            y2: s2.value.top + 15.5,
            "stroke-linecap": "round",
            stroke: e.value.style.chart.color,
            "stroke-width": "1.5"
          }, null, 8, al),
          createBaseVNode("line", {
            "data-html2canvas-ignore": "",
            x1: r.value.absoluteWidth - s2.value.right - 15,
            y2: s2.value.top + 5,
            x2: r.value.absoluteWidth - s2.value.right - 4,
            y1: s2.value.top + 15.5,
            "stroke-linecap": "round",
            stroke: e.value.style.chart.color,
            "stroke-width": "1.5"
          }, null, 8, ul),
          createBaseVNode("circle", {
            "data-cy-close": "",
            onClick: Le,
            onKeypress: withKeys(Le, ["enter"]),
            cx: r.value.absoluteWidth - s2.value.right - r.value.width / 40,
            cy: s2.value.top + r.value.height / 30,
            r: r.value.height / 12,
            fill: "transparent",
            style: { cursor: "pointer" },
            tabindex: "0"
          }, null, 40, ol),
          (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.donutFocus, (t) => (openBlock(), createElementBlock("g", null, [
            createBaseVNode("path", {
              "data-cy-zoom-donut": "",
              d: unref(Bt)(t, { x: r.value.centerX, y: r.value.centerY }, 12, 12, false, false, 15),
              stroke: t.color,
              "stroke-width": "1",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              fill: "none",
              class: "vue-ui-donut-evolution-focus"
            }, null, 8, sl)
          ]))), 256)),
          createBaseVNode("circle", {
            cx: s2.value.left + r.value.width / 2,
            cy: s2.value.top + r.value.height / 2,
            r: r.value.height / 7,
            fill: e.value.style.chart.backgroundColor
          }, null, 8, rl),
          (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.donutFocus, (t, n) => (openBlock(), createElementBlock("path", {
            d: t.arcSlice,
            fill: `${t.color}`,
            "stroke-width": 1,
            stroke: e.value.style.chart.backgroundColor,
            class: "vue-ui-donut-evolution-focus"
          }, null, 8, nl))), 256)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.donutFocus, (t, n) => (openBlock(), createElementBlock("g", il, [
            createBaseVNode("text", {
              "text-anchor": unref(z)(t, true, 20).anchor,
              x: unref(z)(t, true, 10).x,
              y: unref(P)(t),
              fill: e.value.style.chart.layout.grid.yAxis.dataLabels.color,
              "font-size": 10,
              "font-weight": "bold"
            }, toDisplayString(t.name) + ": " + toDisplayString(Ce(t, A.value.donutFocus)) + " (" + toDisplayString(t.value === null ? "-" : j2(t.value, t, n)) + ") ", 9, cl)
          ]))), 256)),
          createBaseVNode("circle", {
            cx: s2.value.left + r.value.width / 2,
            cy: s2.value.top + r.value.height / 2,
            r: r.value.height / 3.8,
            fill: `url(#focus_${T.value})`
          }, null, 8, vl),
          createBaseVNode("circle", {
            cx: s2.value.left + r.value.width / 2,
            cy: s2.value.top + r.value.height / 2,
            r: r.value.height / 7.7,
            fill: e.value.style.chart.backgroundColor
          }, null, 8, dl),
          createBaseVNode("text", {
            "text-anchor": "middle",
            x: s2.value.left + r.value.width / 2,
            y: s2.value.top + r.value.height / 2 + 14 / 3,
            "font-size": 14,
            "font-weight": "bold",
            fill: e.value.style.chart.layout.dataLabels.color,
            class: "vue-ui-donut-evolution-focus"
          }, toDisplayString(j2(A.value.subtotal, A.value, null)), 9, hl),
          e.value.style.chart.layout.grid.xAxis.dataLabels.values[A.value.index] ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: s2.value.left + 6,
            y: s2.value.top + e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize * 2,
            "font-size": e.value.style.chart.layout.grid.xAxis.dataLabels.fontSize * 1.6,
            fill: e.value.style.chart.layout.dataLabels.color
          }, toDisplayString(e.value.style.chart.layout.grid.xAxis.dataLabels.values[Number(A.value.index) + Number(h.value.start)]), 9, yl)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "svg", { svg: r.value }, void 0, true)
      ], 14, _t)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", fl, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(me) || unref(pe) })), void 0, true)
      ])) : createCommentVNode("", true),
      X.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
      W2.value > 1 && e.value.style.chart.zoom.show ? (openBlock(), createBlock(_e, {
        key: `slicer_${ye.value}`,
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
        onReset: ce
      }, {
        "reset-action": withCtx(({ reset: t }) => [
          renderSlot(l.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: t })), void 0, true)
        ]),
        _: 3
      }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"])) : createCommentVNode("", true),
      e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
        key: `legend_${be.value}`,
        legendSet: $e.value,
        config: je.value,
        onClickMarker: i[2] || (i[2] = ({ legend: t }) => te(t.uid))
      }, {
        item: withCtx(({ legend: t, index: n }) => [
          createBaseVNode("div", {
            "data-cy-legend-item": "",
            onClick: (o) => te(t.uid),
            style: normalizeStyle(`opacity:${_.value.includes(t.uid) ? 0.5 : 1}`)
          }, [
            createTextVNode(toDisplayString(t.name) + ": " + toDisplayString(unref(nr)(
              e.value.style.chart.layout.dataLabels.formatter,
              t.value,
              unref(Gt)({
                p: e.value.style.chart.layout.dataLabels.prefix,
                v: t.value,
                s: e.value.style.chart.layout.dataLabels.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: t, seriesIndex: n }
            )) + " ", 1),
            _.value.includes(t.uid) ? (openBlock(), createElementBlock("span", xl, " ( - % ) ")) : (openBlock(), createElementBlock("span", bl, " (" + toDisplayString(isNaN(t.value / Se.value) ? "-" : unref(Gt)({
              v: t.value / Se.value * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })) + ") ", 1))
          ], 12, gl)
        ]),
        _: 1
      }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
      renderSlot(l.$slots, "legend", { legend: $e.value }, void 0, true),
      X.value ? (openBlock(), createBlock(R, {
        key: 7,
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
            key: `table_${ge.value}`,
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
              t.value === null ? (openBlock(), createElementBlock("span", ml, "-")) : (openBlock(), createElementBlock("b", pl, toDisplayString(isNaN(t.value) ? "" : e.value.style.chart.layout.dataLabels.prefix) + toDisplayString(!isNaN(t.value) && t.value !== null ? Number(t.value.toFixed(e.value.table.td.roundingValue)).toLocaleString() : t) + toDisplayString(isNaN(t.value) ? "" : e.value.style.chart.layout.dataLabels.suffix), 1)),
              createBaseVNode("span", null, toDisplayString(t.percentage && !isNaN(t.percentage) ? `(${Number(t.percentage.toFixed(e.value.table.td.roundingPercentage)).toLocaleString()}%)` : ""), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, kt));
  }
};
var Il = s(kl, [["__scopeId", "data-v-715ec8d1"]]);
export {
  Il as default
};
//# sourceMappingURL=vue-ui-donut-evolution-Dd4o37RP-UMEBBBHD.js.map
