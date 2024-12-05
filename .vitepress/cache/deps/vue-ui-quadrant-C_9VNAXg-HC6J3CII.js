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
import {
  $
} from "./chunk-H2UGMUIX.js";
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
  Ar,
  Dt,
  Et,
  He,
  Ht,
  Jt,
  Kt,
  Nt,
  Q,
  R as R2,
  Vt,
  Xt,
  _t,
  dr,
  ir,
  jt,
  qt,
  rt,
  te,
  tr,
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

// node_modules/vue-data-ui/dist/vue-ui-quadrant-C_9VNAXg.js
var Xt2 = ["id"];
var Yt = ["xmlns", "viewBox", "id"];
var At = ["id"];
var Mt = ["stop-color"];
var Nt2 = ["stop-color"];
var Pt = { key: 0 };
var Ot = ["fill", "x", "y", "height", "width", "stroke-width", "stroke", "rx"];
var Bt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Vt2 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Rt = { key: 1 };
var Ft = ["points", "fill"];
var Ht2 = ["points", "fill"];
var It = ["points", "fill"];
var Dt2 = ["points", "fill"];
var Ut = { key: 2 };
var Et2 = ["y", "fill", "font-size"];
var Gt = ["x", "y", "fill", "font-size"];
var Qt = ["x", "y", "fill", "font-size"];
var Jt2 = ["y", "fill", "font-size"];
var jt2 = { key: 3 };
var Zt = ["x", "y", "font-size", "fill"];
var Kt2 = ["x", "y", "font-size", "fill"];
var el = ["x", "y", "font-size", "fill"];
var tl = ["id", "font-size", "transform", "fill"];
var ll = ["id", "font-size", "transform", "fill"];
var al = ["id", "font-size", "transform", "fill"];
var ul = { key: 4 };
var ol = ["fill", "points"];
var sl = ["x", "y", "width", "height"];
var rl = ["x", "y", "width", "height"];
var nl = ["x", "y", "width", "height"];
var il = ["x", "y", "width", "height"];
var vl = {
  key: 0,
  style: { "pointer-events": "none" }
};
var dl = ["x", "y", "font-size", "fill"];
var cl = { key: 0 };
var hl = ["x", "y", "onMouseover", "onClick"];
var yl = {
  key: 7,
  class: "vue-ui-dna"
};
var bl = ["points", "fill"];
var fl = ["points", "fill"];
var pl = ["points", "fill"];
var gl = ["points", "fill"];
var ml = { key: 8 };
var xl = ["x", "y", "font-size", "fill", "font-weight"];
var $l = { key: 9 };
var kl = ["x", "y", "fill"];
var Ll = ["x", "y", "fill"];
var wl = ["x", "y", "fill"];
var _l = ["x", "y", "fill"];
var ql = ["stroke", "d"];
var Cl = ["stroke", "d"];
var Sl = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var zl = ["onClick"];
var Tl = {
  key: 0,
  height: "14",
  width: "14",
  viewBox: "0 0 20 20"
};
var Wl = ["innerHTML"];
var Xl = {
  __name: "vue-ui-quadrant",
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
  emits: ["selectPlot", "selectSide", "selectLegend"],
  setup(Fe, { expose: He2, emit: ue }) {
    const W2 = Fe, { vue_ui_quadrant: Ie } = te(), J = computed(() => !!W2.dataset && W2.dataset.length), z = ref(Dt()), De = ref(null), j = ref(false), oe = ref(""), de = ref(0), p2 = ref(false), V = ref(null), ce = ref(null), he = ref(null), ye = ref(null), be = ref(null), fe = ref(0), pe = ref(0), ge = ref(0), t = computed({
      get: () => me(),
      set: (l) => l
    });
    function me() {
      const l = c({
        userConfig: W2.config,
        defaultConfig: Ie
      });
      return l.theme ? {
        ...c({
          userConfig: He.vue_ui_quadrant[l.theme] || W2.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || rt
      } : l;
    }
    watch(() => W2.config, (l) => {
      t.value = me(), xe(), fe.value += 1, pe.value += 1, ge.value += 1;
    }, { deep: true });
    const Z = ref(null);
    function xe() {
      if (jt(W2.dataset) ? qt({
        componentName: "VueUiQuadrant",
        type: "dataset"
      }) : W2.dataset.forEach((l, u) => {
        [null, void 0].includes(l.name) && qt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "name",
          index: u
        }), [null, void 0].includes(l.series) ? qt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "series",
          index: u
        }) : l.series.forEach((a, s2) => {
          [null, void 0].includes(a.name) && qt({
            componentName: "VueUiQuadrant",
            type: "datasetSerieAttribute",
            property: "name",
            key: "series",
            index: s2
          });
        });
      }), t.value.responsive) {
        const l = O(() => {
          const { width: u, height: a } = k({
            chart: V.value,
            title: t.value.style.chart.title.text ? ce.value : null,
            legend: t.value.style.chart.legend.show ? he.value : null,
            source: ye.value,
            noTitle: be.value
          });
          m.value = 48, e.value.height = a, e.value.usableHeight = a - m.value * 2, e.value.width = u, e.value.usableWidth = u - m.value * 2, e.value.top = m.value, e.value.left = m.value, e.value.right = u - m.value, e.value.bottom = a - m.value, e.value.centerX = u / 2, e.value.centerY = a - a / 2, e.value.padding = m.value;
        });
        Z.value = new ResizeObserver(l), Z.value.observe(V.value.parentNode);
      }
    }
    onMounted(() => {
      xe();
    }), onBeforeUnmount(() => {
      Z.value && Z.value.disconnect();
    });
    const { isPrinting: $e, isImaging: ke, generatePdf: Le, generateImage: we } = re({
      elementId: `vue-ui-quadrant_${z.value}`,
      fileName: t.value.style.chart.title.text || "vue-ui-quadrant"
    }), Ue = computed(() => t.value.userOptions.show && !t.value.style.chart.title.text), _e = computed(() => tr(t.value.customPalette)), w = ref({
      plotLabels: {
        show: t.value.style.chart.layout.labels.plotLabels.show
      },
      showTable: t.value.table.show,
      showTooltip: t.value.style.chart.tooltip.show
    }), m = ref(48), e = ref({
      height: t.value.style.chart.height,
      usableHeight: t.value.style.chart.height - m.value * 2,
      width: t.value.style.chart.width,
      usableWidth: t.value.style.chart.width - m.value * 2,
      top: m.value,
      left: m.value,
      right: t.value.style.chart.width - m.value,
      bottom: t.value.style.chart.height - m.value,
      centerX: t.value.style.chart.width / 2,
      centerY: t.value.style.chart.height - t.value.style.chart.height / 2,
      padding: m.value
    }), d = ref({
      ...JSON.parse(JSON.stringify(e.value)),
      startX: 0,
      startY: 0
    });
    watch(() => e.value, (l) => {
      l && (d.value = {
        ...JSON.parse(JSON.stringify(e.value)),
        startX: 0,
        startY: 0
      });
    }, { deep: true });
    const i = ref(null), B = computed(() => {
      switch (i.value) {
        case "TL":
          return {
            x: d.value.startX + d.value.width / 2,
            y: d.value.height,
            text: t.value.style.chart.layout.labels.quadrantLabels.tl.text || "Top Left",
            fontSize: t.value.style.chart.layout.labels.quadrantLabels.tl.fontSize,
            fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color,
            bold: t.value.style.chart.layout.labels.quadrantLabels.tl.bold
          };
        case "TR":
          return {
            x: d.value.startX + d.value.width / 2,
            y: d.value.height,
            text: t.value.style.chart.layout.labels.quadrantLabels.tr.text || "Top Right",
            fontSize: t.value.style.chart.layout.labels.quadrantLabels.tr.fontSize,
            fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color,
            bold: t.value.style.chart.layout.labels.quadrantLabels.tr.bold
          };
        case "BR":
          return {
            x: d.value.startX + d.value.width / 2,
            y: d.value.height * 1.678,
            text: t.value.style.chart.layout.labels.quadrantLabels.br.text || "Bottom Right",
            fontSize: t.value.style.chart.layout.labels.quadrantLabels.br.fontSize,
            fill: t.value.style.chart.layout.labels.quadrantLabels.br.color,
            bold: t.value.style.chart.layout.labels.quadrantLabels.br.bold
          };
        case "BL":
          return {
            x: d.value.startX + d.value.width / 2,
            y: d.value.height * 1.678,
            text: t.value.style.chart.layout.labels.quadrantLabels.bl.text || "Bottom Left",
            fontSize: t.value.style.chart.layout.labels.quadrantLabels.bl.fontSize,
            fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color,
            bold: t.value.style.chart.layout.labels.quadrantLabels.bl.bold
          };
        default:
          return { x: 0, y: 0, text: "", fontSize: 0, fill: "none", bold: false };
      }
    }), Ee = ref(null), K = ref(false);
    function H({ targetX: l, targetY: u, targetW: a, targetH: s2, side: r }) {
      i.value && U(r);
      const b = {
        x: l - d.value.startX,
        y: u - d.value.startY,
        w: a - d.value.width,
        h: s2 - d.value.height
      }, f = t.value.zoomAnimationFrames;
      let X = 0;
      function Pe() {
        K.value = true, d.value.startX += b.x / f, d.value.startY += b.y / f, d.value.width += b.w / f, d.value.height += b.h / f, X += 1, X < f ? Ee.value = requestAnimationFrame(Pe) : K.value = false;
      }
      Pe();
    }
    function A(l) {
      if (!K.value)
        if (p2.value && i.value === l)
          H({
            targetX: 0,
            targetY: 0,
            targetW: e.value.width,
            targetH: e.value.height
          }), i.value = null, p2.value = false;
        else {
          switch (i.value = l, l) {
            case "TL":
              H({
                targetX: 0,
                targetY: 0,
                targetW: e.value.width / 2 + e.value.left,
                targetH: e.value.height / 2 + e.value.top,
                side: "tl"
              });
              break;
            case "TR":
              H({
                targetX: e.value.width / 2 - e.value.left,
                targetY: 0,
                targetW: e.value.width / 2 + e.value.left,
                targetH: e.value.height / 2 + e.value.top,
                side: "tr"
              });
              break;
            case "BR":
              H({
                targetX: e.value.width / 2 - e.value.left,
                targetY: e.value.height / 2 - e.value.top,
                targetW: e.value.width / 2 + e.value.left,
                targetH: e.value.height / 2 + e.value.top,
                side: "br"
              });
              break;
            case "BL":
              H({
                targetX: 0,
                targetY: e.value.height / 2 - e.value.top,
                targetW: e.value.width / 2 + e.value.left,
                targetH: e.value.height / 2 + e.value.top,
                side: "bl"
              });
              break;
            default:
              d.value.startX = 0, d.value.startY = 0, d.value.width = e.value.width, d.value.height = e.value.height;
              break;
          }
          p2.value = true;
        }
    }
    const Ge = computed(() => {
      const l = t.value.style.chart.layout.grid.graduations.steps, u = e.value.usableWidth / (l * 2), a = e.value.top, s2 = [];
      for (let r = 0; r < l; r += 1)
        s2.push({
          x: e.value.padding + u * r,
          y: a + e.value.usableHeight * (r / l / 2),
          height: e.value.usableHeight * (1 - r / l),
          width: e.value.usableWidth * (1 - r / l),
          opacity: Math.round((r + 1) / l * 20)
        });
      return s2;
    }), _ = computed(() => {
      let l = t.value.style.chart.layout.grid.xAxis.max, u = t.value.style.chart.layout.grid.xAxis.min, a = t.value.style.chart.layout.grid.yAxis.max, s2 = t.value.style.chart.layout.grid.yAxis.min;
      return t.value.style.chart.layout.grid.xAxis.auto && (l = Math.max(...R3.value.flatMap((r) => r.series.map((b) => b.x))), u = Math.min(...R3.value.flatMap((r) => r.series.map((b) => b.x)))), t.value.style.chart.layout.grid.yAxis.auto && (a = Math.max(...R3.value.flatMap((r) => r.series.map((b) => b.y))), s2 = Math.min(...R3.value.flatMap((r) => r.series.map((b) => b.y)))), {
        x: {
          max: l,
          min: u
        },
        y: {
          max: a,
          min: s2
        }
      };
    }), M = ref([]), R3 = computed(() => W2.dataset.map((l, u) => ({
      ...l,
      series: Ar({
        data: l.series,
        threshold: t.value.downsample.threshold
      }),
      id: `cat_${u}_${z.value}`,
      color: Q(l.color) || _e.value[u] || rt[u]
    }))), Qe = computed(() => R3.value.filter((l) => !M.value.includes(l.id))), Je = computed(() => R3.value.map((l, u) => ({
      ...l,
      shape: l.shape || "circle",
      series: l.series.map((a) => ({
        ...a,
        x: qe(a.x),
        y: Ce(a.y),
        xValue: a.x,
        yValue: a.y,
        quadrantSide: ze({ x: a.x, y: a.y }),
        categoryName: l.name,
        shape: l.shape,
        color: l.color
      }))
    }))), S = computed(() => (W2.dataset.forEach((l, u) => {
      l.series.forEach((a, s2) => {
        [null, void 0].includes(a.x) && qt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "x",
          key: "series",
          index: s2
        }), [null, void 0].includes(a.y) && qt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "y",
          key: "series",
          index: s2
        });
      });
    }), Qe.value.map((l, u) => ({
      ...l,
      shape: l.shape || "circle",
      color: l.color || _e.value[u] || rt[u],
      series: l.series.map((a) => ({
        ...a,
        x: qe(a.x),
        y: Ce(a.y),
        xValue: a.x,
        yValue: a.y,
        quadrantSide: ze({ x: a.x, y: a.y }),
        categoryName: l.name,
        shape: l.shape,
        color: l.color,
        uid: Dt()
      }))
    }))));
    function qe(l) {
      if (l >= 0) {
        const u = l / _.value.x.max;
        return e.value.centerX + e.value.usableWidth / 2 * u;
      } else {
        const u = Math.abs(l) / Math.abs(_.value.x.min);
        return e.value.centerX - e.value.usableWidth / 2 * u;
      }
    }
    function Ce(l) {
      if (l >= 0) {
        const u = l / _.value.y.max;
        return e.value.centerY + (1 - e.value.usableHeight / 2 * u);
      } else {
        const u = Math.abs(l) / Math.abs(_.value.y.min);
        return e.value.centerY - (1 - e.value.usableHeight / 2 * u);
      }
    }
    const ee = computed(() => {
      const l = S.value.flatMap((f) => f.series.map((X) => ({
        x: X.xValue,
        y: X.yValue,
        name: X.name,
        category: X.categoryName,
        quadrantSide: X.quadrantSide,
        sideName: t.value.style.chart.layout.labels.quadrantLabels[X.quadrantSide].text,
        color: f.color,
        shape: f.shape
      }))), u = t.value.style.chart.layout.grid.xAxis.name || "x", a = t.value.style.chart.layout.grid.yAxis.name || "y", s2 = [t.value.translations.category, t.value.translations.item, u, a, t.value.translations.side], r = l.map((f) => [f.category, f.name, f.x, f.y, f.sideName || f.quadrantSide]), b = l.map((f) => ({
        shape: f.shape,
        color: f.color
      }));
      return { head: s2, body: r, itsShapes: b, tableData: l };
    }), te2 = computed(() => {
      const l = ee.value.head, u = ee.value.tableData.map((s2) => [
        {
          shape: s2.shape,
          color: s2.color,
          name: s2.category
        },
        s2.name,
        ir(
          t.value.style.chart.layout.labels.plotLabels.x.formatter,
          s2.x,
          Ht({
            v: s2.x,
            r: t.value.style.chart.layout.labels.plotLabels.rounding
          })
        ),
        ir(
          t.value.style.chart.layout.labels.plotLabels.y.formatter,
          s2.y,
          Ht({
            v: s2.y,
            r: t.value.style.chart.layout.labels.plotLabels.rounding
          })
        ),
        s2.sideName || s2.quadrantSide
      ]), a = {
        th: {
          backgroundColor: t.value.table.th.backgroundColor,
          color: t.value.table.th.color,
          outline: t.value.table.th.outline
        },
        td: {
          backgroundColor: t.value.table.td.backgroundColor,
          color: t.value.table.td.color,
          outline: t.value.table.td.outline
        },
        breakpoint: t.value.table.responsiveBreakpoint
      };
      return { head: l, body: u, config: a, colNames: l };
    });
    function se(l) {
      M.value.includes(l) ? M.value = M.value.filter((a) => a !== l) : M.value.push(l);
      const u = Xe();
      ue("selectLegend", u);
    }
    const Se2 = computed(() => Je.value.map((l) => ({
      name: l.name,
      shape: l.shape,
      color: l.color,
      id: l.id,
      opacity: M.value.includes(l.id) ? 0.5 : 1,
      segregate: () => se(l.id),
      isSegregated: M.value.includes(l.id)
    }))), je = computed(() => ({
      cy: "quadrant-div-legend",
      backgroundColor: t.value.style.chart.legend.backgroundColor,
      color: t.value.style.chart.legend.color,
      fontSize: t.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: t.value.style.chart.legend.bold ? "bold" : ""
    }));
    function ze(l) {
      switch (true) {
        case (l.x >= 0 && l.y >= 0):
          return "tr";
        case (l.x >= 0 && l.y < 0):
          return "br";
        case (l.x < 0 && l.y < 0):
          return "bl";
        case (l.x < 0 && l.y >= 0):
          return "tl";
        default:
          return "";
      }
    }
    const I = ref(null), D = ref(null), re2 = ref(null);
    function Te(l, u, a) {
      I.value = u.uid, D.value = {
        color: l.color,
        shape: l.shape
      }, re2.value = {
        datapoint: u,
        seriesIndex: a,
        series: S.value,
        config: t.value
      }, j.value = true;
      const s2 = t.value.style.chart.tooltip.customFormat;
      if (Xt(s2) && Kt(() => s2({
        seriesIndex: a,
        datapoint: u,
        series: S.value,
        config: t.value
      })))
        oe.value = s2({
          seriesIndex: a,
          datapoint: u,
          series: S.value,
          config: t.value
        });
      else {
        let r = "";
        u.quadrantSide && (r += `<div style="color:${t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].color};font-weight:${t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].bold ? "bold" : "400"}">${t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].text}</div>`), r += `<div>${l.name}</div>`, r += `<div style="padding-bottom:6px;border-bottom:1px solid ${t.value.style.chart.tooltip.borderColor};margin-bottom:3px">${u.name}</div>`, r += `<div>${t.value.style.chart.layout.grid.xAxis.name ? t.value.style.chart.layout.grid.xAxis.name : "x"}: <b>${ir(
          t.value.style.chart.layout.labels.plotLabels.x.formatter,
          u.xValue,
          Ht({
            v: u.xValue,
            r: t.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: u, category: l, categoryIndex: a }
        )}</b></div>`, r += `<div>${t.value.style.chart.layout.grid.yAxis.name ? t.value.style.chart.layout.grid.yAxis.name : "y"}: <b>${ir(
          t.value.style.chart.layout.labels.plotLabels.y.formatter,
          u.yValue,
          Ht({
            v: u.yValue,
            r: t.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: u, category: l, categoryIndex: a }
        )}</b></div>`, oe.value = `<div style="text-align:left;font-size:${t.value.style.chart.tooltip.fontSize}px">${r}</div>`;
      }
    }
    function We(l, u) {
      const a = {
        category: l.name,
        shape: l.shape,
        itemName: u.name,
        x: u.xValue,
        y: u.yValue,
        quadrantSide: u.quadrantSide,
        sideName: t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].text
      };
      ue("selectPlot", a);
    }
    function U(l) {
      if (!l) return;
      const u = S.value.flatMap((s2) => s2.series.filter((r) => r.quadrantSide === l).map((r) => ({
        category: r.categoryName,
        itemName: r.name,
        x: r.xValue,
        y: r.yValue
      }))), a = {
        quadrantSide: l,
        sideName: t.value.style.chart.layout.labels.quadrantLabels[l].text,
        items: [...u]
      };
      ue("selectSide", a);
    }
    const k2 = computed(() => ({
      TL: {
        tl: {
          x: e.value.left + e.value.usableWidth / 4 - 20,
          y: 0,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color
        },
        tr: {
          x: e.value.left + e.value.usableWidth / 4,
          y: 0,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color
        },
        br: {
          x: e.value.left + e.value.usableWidth / 4,
          y: 20,
          fill: t.value.style.chart.layout.labels.quadrantLabels.br.color
        },
        bl: {
          x: e.value.left + e.value.usableWidth / 4 - 20,
          y: 20,
          fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color
        },
        crosshairs: {
          horizontal: `M ${e.value.left + e.value.usableWidth / 4 - 20},20 ${e.value.left + e.value.usableWidth / 4 + 20},20`,
          vertical: `M ${e.value.left + e.value.usableWidth / 4},0 ${e.value.left + e.value.usableWidth / 4},40`
        }
      },
      TR: {
        tl: {
          x: e.value.centerX + e.value.usableWidth / 4 - 20,
          y: 0,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color
        },
        tr: {
          x: e.value.centerX + e.value.usableWidth / 4,
          y: 0,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color
        },
        br: {
          x: e.value.centerX + e.value.usableWidth / 4,
          y: 20,
          fill: t.value.style.chart.layout.labels.quadrantLabels.br.color
        },
        bl: {
          x: e.value.centerX + e.value.usableWidth / 4 - 20,
          y: 20,
          fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color
        },
        crosshairs: {
          horizontal: `M ${e.value.centerX + e.value.usableWidth / 4 - 20},20 ${e.value.centerX + e.value.usableWidth / 4 + 20},20`,
          vertical: `M ${e.value.centerX + e.value.usableWidth / 4},0 ${e.value.centerX + e.value.usableWidth / 4},40`
        }
      },
      BR: {
        tl: {
          x: e.value.centerX + e.value.usableWidth / 4 - 20,
          y: e.value.centerY - 48,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color
        },
        tr: {
          x: e.value.centerX + e.value.usableWidth / 4,
          y: e.value.centerY - 48,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color
        },
        br: {
          x: e.value.centerX + e.value.usableWidth / 4,
          y: e.value.centerY - 28,
          fill: t.value.style.chart.layout.labels.quadrantLabels.br.color
        },
        bl: {
          x: e.value.centerX + e.value.usableWidth / 4 - 20,
          y: e.value.centerY - 28,
          fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color
        },
        crosshairs: {
          horizontal: `M ${e.value.centerX + e.value.usableWidth / 4 - 20},${e.value.centerY - 28} ${e.value.centerX + e.value.usableWidth / 4 + 20},${e.value.centerY - 28}`,
          vertical: `M ${e.value.centerX + e.value.usableWidth / 4},${e.value.centerY - 48} ${e.value.centerX + e.value.usableWidth / 4},${e.value.centerY - 8}`
        }
      },
      BL: {
        tl: {
          x: e.value.left + e.value.usableWidth / 4 - 20,
          y: e.value.centerY - 48,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color
        },
        tr: {
          x: e.value.left + e.value.usableWidth / 4,
          y: e.value.centerY - 48,
          fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color
        },
        br: {
          x: e.value.left + e.value.usableWidth / 4,
          y: e.value.centerY - 28,
          fill: t.value.style.chart.layout.labels.quadrantLabels.br.color
        },
        bl: {
          x: e.value.left + e.value.usableWidth / 4 - 20,
          y: e.value.centerY - 28,
          fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color
        },
        crosshairs: {
          horizontal: `M ${e.value.left + e.value.usableWidth / 4 - 20},${e.value.centerY - 28} ${e.value.left + e.value.usableWidth / 4 + 20},${e.value.centerY - 28}`,
          vertical: `M ${e.value.left + e.value.usableWidth / 4},${e.value.centerY - 48} ${e.value.left + e.value.usableWidth / 4},${e.value.centerY - 8}`
        }
      }
    }));
    function Xe() {
      return S.value.map((l) => ({
        color: l.color,
        name: l.name,
        shape: l.shape,
        series: l.series.map((u) => ({
          name: u.name,
          x: u.xValue,
          y: u.yValue,
          quadrantSide: u.quadrantSide,
          sideName: t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].text
        }))
      }));
    }
    function Ye() {
      nextTick(() => {
        const l = [[t.value.style.chart.title.text], [t.value.style.chart.title.subtitle.text], [""]], u = ee.value.head, a = ee.value.body, s2 = l.concat([u]).concat(a), r = Vt(s2);
        Nt({ csvContent: r, title: t.value.style.chart.title.text || "vue-ui-quadrant" });
      });
    }
    const E2 = ref(false);
    function Ze(l) {
      E2.value = l, de.value += 1;
    }
    function Ae() {
      w.value.showTable = !w.value.showTable;
    }
    function Me() {
      w.value.plotLabels.show = !w.value.plotLabels.show;
    }
    function Ne() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    const le = ref(false);
    function ne() {
      le.value = !le.value;
    }
    return He2({
      getData: Xe,
      generatePdf: Le,
      generateCsv: Ye,
      generateImage: we,
      toggleTable: Ae,
      toggleLabels: Me,
      toggleTooltip: Ne,
      toggleAnnotator: ne
    }), (l, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-quadrant ${E2.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${t.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "quadrantChart",
      ref: V,
      id: `vue-ui-quadrant_${z.value}`,
      style: normalizeStyle(`font-family:${t.value.style.fontFamily};width:100%; text-align:center;background:${t.value.style.chart.backgroundColor};${t.value.responsive ? "height: 100%" : ""}`)
    }, [
      t.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: V.value,
        backgroundColor: t.value.style.chart.backgroundColor,
        color: t.value.style.chart.color,
        active: le.value,
        onClose: ne
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Ue.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: be,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      t.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: ce,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `table_${fe.value}`,
          config: {
            title: {
              cy: "quadrant-title",
              ...t.value.style.chart.title
            },
            subtitle: {
              cy: "quadrant-subtitle",
              ...t.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      t.value.userOptions.show && J.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: De,
        key: `user_options_${de.value}`,
        backgroundColor: t.value.style.chart.backgroundColor,
        color: t.value.style.chart.color,
        isImaging: unref(ke),
        isPrinting: unref($e),
        uid: z.value,
        hasTooltip: t.value.userOptions.buttons.tooltip && t.value.style.chart.tooltip.show,
        hasPdf: t.value.userOptions.buttons.pdf,
        hasImg: t.value.userOptions.buttons.img,
        hasXls: t.value.userOptions.buttons.csv,
        hasTable: t.value.userOptions.buttons.table,
        hasLabel: t.value.userOptions.buttons.labels,
        hasFullscreen: t.value.userOptions.buttons.fullscreen,
        isFullscreen: E2.value,
        isTooltip: w.value.showTooltip,
        titles: { ...t.value.userOptions.buttonTitles },
        chartElement: V.value,
        position: t.value.userOptions.position,
        hasAnnotator: t.value.userOptions.buttons.annotator,
        isAnnotation: le.value,
        onToggleFullscreen: Ze,
        onGeneratePdf: unref(Le),
        onGenerateCsv: Ye,
        onGenerateImage: unref(we),
        onToggleTable: Ae,
        onToggleLabels: Me,
        onToggleTooltip: Ne,
        onToggleAnnotator: ne
      }, createSlots({ _: 2 }, [
        l.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        l.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        l.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        l.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        l.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        l.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(l.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        l.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: s2 }) => [
            renderSlot(l.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: s2 })), void 0, true)
          ]),
          key: "6"
        } : void 0,
        l.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: a, isAnnotator: s2 }) => [
            renderSlot(l.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: a, isAnnotator: s2 })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      J.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": E2.value, "vue-data-ui-fulscreen--off": !E2.value }),
        viewBox: `${d.value.startX} ${d.value.startY} ${d.value.width} ${d.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:${p2.value ? "hidden" : "visible"};background:transparent;color:${t.value.style.chart.color}`),
        id: `svg_${z.value}`
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (a, s2) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `quadrant_gradient_${z.value}_${s2}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(dr)(unref(yt)(a.color, 0.05), t.value.style.chart.layout.areas.opacity)
            }, null, 8, Mt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(dr)(a.color, t.value.style.chart.layout.areas.opacity)
            }, null, 8, Nt2)
          ], 8, At))), 256))
        ]),
        t.value.style.chart.layout.grid.graduations.show ? (openBlock(), createElementBlock("g", Pt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Ge.value, (a) => (openBlock(), createElementBlock("rect", {
            fill: t.value.style.chart.layout.grid.graduations.fill ? unref(dr)(t.value.style.chart.layout.grid.graduations.color, a.opacity) : "none",
            x: a.x,
            y: a.y,
            height: a.height <= 0 ? 1e-3 : a.height,
            width: a.width <= 0 ? 1e-3 : a.width,
            "stroke-width": t.value.style.chart.layout.grid.graduations.strokeWidth,
            stroke: t.value.style.chart.layout.grid.graduations.stroke,
            rx: t.value.style.chart.layout.grid.graduations.roundingForce
          }, null, 8, Ot))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("line", {
          x1: e.value.left,
          y1: e.value.centerY,
          x2: e.value.right,
          y2: e.value.centerY,
          stroke: t.value.style.chart.layout.grid.stroke,
          "stroke-width": t.value.style.chart.layout.grid.strokeWidth
        }, null, 8, Bt),
        createBaseVNode("line", {
          x1: e.value.centerX,
          y1: e.value.top,
          x2: e.value.centerX,
          y2: e.value.bottom,
          stroke: t.value.style.chart.layout.grid.stroke,
          "stroke-width": t.value.style.chart.layout.grid.strokeWidth
        }, null, 8, Vt2),
        t.value.style.chart.layout.grid.showArrows ? (openBlock(), createElementBlock("g", Rt, [
          createBaseVNode("polygon", {
            points: `${e.value.right - 8},${e.value.centerY - 6} ${e.value.right},${e.value.centerY} ${e.value.right - 8},${e.value.centerY + 6}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, Ft),
          createBaseVNode("polygon", {
            points: `${e.value.left + 8},${e.value.centerY - 6} ${e.value.left},${e.value.centerY} ${e.value.left + 8},${e.value.centerY + 6}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, Ht2),
          createBaseVNode("polygon", {
            points: `${e.value.centerX - 6},${e.value.top + 8} ${e.value.centerX},${e.value.top} ${e.value.centerX + 6},${e.value.top + 8}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, It),
          createBaseVNode("polygon", {
            points: `${e.value.centerX - 6},${e.value.bottom - 8} ${e.value.centerX},${e.value.bottom} ${e.value.centerX + 6},${e.value.bottom - 8}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, Dt2)
        ])) : createCommentVNode("", true),
        t.value.style.chart.layout.labels.quadrantLabels.show && !p2.value ? (openBlock(), createElementBlock("g", Ut, [
          t.value.style.chart.layout.labels.quadrantLabels.tl.text ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: 0,
            y: e.value.top - e.value.padding / 2,
            "text-anchor": "start",
            fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.tl.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.tl.bold ? "bold" : ""}`),
            onClick: u[0] || (u[0] = (a) => U("tl"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.tl.text), 13, Et2)) : createCommentVNode("", true),
          t.value.style.chart.layout.labels.quadrantLabels.tr.text ? (openBlock(), createElementBlock("text", {
            key: 1,
            x: e.value.width,
            y: e.value.top - e.value.padding / 2,
            "text-anchor": "end",
            fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.tr.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.tr.bold ? "bold" : ""}`),
            onClick: u[1] || (u[1] = (a) => U("tr"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.tr.text), 13, Gt)) : createCommentVNode("", true),
          t.value.style.chart.layout.labels.quadrantLabels.br.text ? (openBlock(), createElementBlock("text", {
            key: 2,
            x: e.value.width,
            y: e.value.bottom + e.value.padding * 0.7,
            "text-anchor": "end",
            fill: t.value.style.chart.layout.labels.quadrantLabels.br.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.br.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.br.bold ? "bold" : ""}`),
            onClick: u[2] || (u[2] = (a) => U("br"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.br.text), 13, Qt)) : createCommentVNode("", true),
          t.value.style.chart.layout.labels.quadrantLabels.bl.text ? (openBlock(), createElementBlock("text", {
            key: 3,
            x: 0,
            y: e.value.bottom + e.value.padding * 0.7,
            "text-anchor": "start",
            fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.bl.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.bl.bold ? "bold" : ""}`),
            onClick: u[3] || (u[3] = (a) => U("bl"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.bl.text), 13, Jt2)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        t.value.style.chart.layout.labels.axisLabels.show ? (openBlock(), createElementBlock("g", jt2, [
          createBaseVNode("text", {
            x: e.value.centerX,
            y: e.value.top - e.value.padding / 6,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(unref(ir)(
            t.value.style.chart.layout.labels.plotLabels.y.formatter,
            _.value.y.max,
            unref(Ht)({
              v: _.value.y.max,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, Zt),
          createBaseVNode("text", {
            x: e.value.centerX,
            y: e.value.top - e.value.padding / 2,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(t.value.style.chart.layout.grid.yAxis.name), 9, Kt2),
          createBaseVNode("text", {
            x: e.value.centerX,
            y: e.value.bottom + e.value.padding * 0.35,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            fill: t.value.style.chart.layout.labels.axisLabels.color.negative
          }, toDisplayString(unref(ir)(
            t.value.style.chart.layout.labels.plotLabels.y.formatter,
            _.value.y.min,
            unref(Ht)({
              v: _.value.y.min,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, el),
          createBaseVNode("text", {
            id: `xLabelMin_${z.value}`,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            transform: `translate(${e.value.padding - t.value.style.chart.layout.labels.axisLabels.fontSize}, ${e.value.height / 2}), rotate(-90)`,
            fill: t.value.style.chart.layout.labels.axisLabels.color.negative
          }, toDisplayString(unref(ir)(
            t.value.style.chart.layout.labels.plotLabels.x.formatter,
            _.value.x.min,
            unref(Ht)({
              v: _.value.x.min,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, tl),
          createBaseVNode("text", {
            id: `xLabelMax_${z.value}`,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            transform: `translate(${e.value.width - e.value.padding + t.value.style.chart.layout.labels.axisLabels.fontSize}, ${e.value.height / 2}), rotate(90)`,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(unref(ir)(
            t.value.style.chart.layout.labels.plotLabels.x.formatter,
            _.value.x.max,
            unref(Ht)({
              v: _.value.x.max,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, ll),
          createBaseVNode("text", {
            id: `xLabelMaxName_${z.value}`,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            transform: `translate(${e.value.width - t.value.style.chart.layout.labels.axisLabels.fontSize}, ${e.value.height / 2}), rotate(90)`,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(t.value.style.chart.layout.grid.xAxis.name), 9, al)
        ])) : createCommentVNode("", true),
        t.value.style.chart.layout.areas.show ? (openBlock(), createElementBlock("g", ul, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (a, s2) => (openBlock(), createElementBlock("g", null, [
            a.series.length > 2 ? (openBlock(), createElementBlock("polygon", {
              key: 0,
              "data-cy-quadrant-area": "",
              fill: t.value.style.chart.layout.areas.useGradient ? `url(#quadrant_gradient_${z.value}_${s2})` : unref(dr)(a.color, t.value.style.chart.layout.areas.opacity),
              points: unref(Et)(a)
            }, null, 8, ol)) : createCommentVNode("", true)
          ]))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("g", null, [
          createBaseVNode("rect", {
            onClick: u[4] || (u[4] = (a) => A("TL")),
            x: e.value.left,
            y: e.value.top,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, sl),
          createBaseVNode("rect", {
            onClick: u[5] || (u[5] = (a) => A("TR")),
            x: e.value.centerX,
            y: e.value.top,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, rl),
          createBaseVNode("rect", {
            onClick: u[6] || (u[6] = (a) => A("BR")),
            x: e.value.centerX,
            y: e.value.centerY,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, nl),
          createBaseVNode("rect", {
            onClick: u[7] || (u[7] = (a) => A("BL")),
            x: e.value.left,
            y: e.value.centerY,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, il)
        ]),
        t.value.style.chart.layout.labels.plotLabels.showAsTag ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
          w.value.plotLabels.show ? (openBlock(), createElementBlock("g", cl, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (a, s2) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (r) => (openBlock(), createElementBlock("foreignObject", {
                style: { overflow: "visible" },
                height: "10",
                width: "100",
                x: r.x - 50,
                y: r.y - t.value.style.chart.layout.labels.plotLabels.fontSize,
                onMouseover: (b) => Te(a, r, s2),
                onMouseleave: u[9] || (u[9] = (b) => {
                  j.value = false, I.value = null, D.value = null;
                }),
                onClick: (b) => We(a, r)
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`color:${unref(_t)(a.color)};margin: 0 auto; font-size:${t.value.style.chart.layout.labels.plotLabels.fontSize}px; text-align:center;background:${a.color}; padding: 2px 4px; border-radius: 12px; height: ${t.value.style.chart.layout.labels.plotLabels.fontSize * 1.5}px`)
                }, toDisplayString(r.name), 5)
              ], 40, hl))), 256))
            ], 64))), 256))
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (a, s2) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (r) => (openBlock(), createBlock($, {
              color: a.color,
              isSelected: I.value && r.uid === I.value,
              plot: r,
              radius: t.value.style.chart.layout.plots.radius / (p2.value ? 1.5 : 1),
              shape: a.shape,
              stroke: t.value.style.chart.layout.plots.outline ? t.value.style.chart.layout.plots.outlineColor : "none",
              strokeWidth: t.value.style.chart.layout.plots.outlineWidth,
              onMouseover: (b) => Te(a, r, s2),
              onMouseleave: u[8] || (u[8] = (b) => {
                j.value = false, I.value = null, D.value = null;
              }),
              onClick: (b) => We(a, r)
            }, null, 8, ["color", "isSelected", "plot", "radius", "shape", "stroke", "strokeWidth", "onMouseover", "onClick"]))), 256))
          ]))), 256)),
          w.value.plotLabels.show ? (openBlock(), createElementBlock("g", vl, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (a) => (openBlock(), createElementBlock("g", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (s2) => (openBlock(), createElementBlock("text", {
                x: s2.x,
                y: s2.y + t.value.style.chart.layout.labels.plotLabels.offsetY + t.value.style.chart.layout.plots.radius,
                "text-anchor": "middle",
                "font-size": t.value.style.chart.layout.labels.plotLabels.fontSize / (p2.value ? 1.5 : 1),
                fill: t.value.style.chart.layout.labels.plotLabels.color
              }, toDisplayString(s2.name), 9, dl))), 256))
            ]))), 256))
          ])) : createCommentVNode("", true)
        ], 64)),
        p2.value ? (openBlock(), createElementBlock("g", yl, [
          i.value === "TL" ? (openBlock(), createElementBlock("polygon", {
            key: 0,
            points: `${e.value.left - 1},${e.value.centerY} ${e.value.centerX},${e.value.centerY} ${e.value.centerX},${e.value.top - 1} ${e.value.right},${e.value.top - 1} ${e.value.right},${e.value.bottom} ${e.value.left - 1},${e.value.bottom} ${e.value.left - 1},${e.value.centerY}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, bl)) : createCommentVNode("", true),
          i.value === "TR" ? (openBlock(), createElementBlock("polygon", {
            key: 1,
            points: `${e.value.left},${e.value.top - 1} ${e.value.centerX},${e.value.top - 1} ${e.value.centerX},${e.value.centerY} ${e.value.right + 1},${e.value.centerY} ${e.value.right + 1},${e.value.bottom} ${e.value.left},${e.value.bottom} ${e.value.left},${e.value.top - 1}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, fl)) : createCommentVNode("", true),
          i.value === "BR" ? (openBlock(), createElementBlock("polygon", {
            key: 2,
            points: `${e.value.left},${e.value.top} ${e.value.right + 1},${e.value.top} ${e.value.right + 1},${e.value.centerY} ${e.value.centerX},${e.value.centerY} ${e.value.centerX},${e.value.bottom + 1} ${e.value.left},${e.value.bottom + 1} ${e.value.left},${e.value.top}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, pl)) : createCommentVNode("", true),
          i.value === "BL" ? (openBlock(), createElementBlock("polygon", {
            key: 3,
            points: `${e.value.left - 1},${e.value.top} ${e.value.right},${e.value.top} ${e.value.right},${e.value.bottom + 1} ${e.value.centerX},${e.value.bottom + 1} ${e.value.centerX},${e.value.centerY} ${e.value.left - 1},${e.value.centerY} ${e.value.left - 1},${e.value.top}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, gl)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        i.value && !K.value ? (openBlock(), createElementBlock("g", ml, [
          createBaseVNode("text", {
            x: B.value.x,
            y: B.value.y - B.value.fontSize / 1.5,
            "font-size": B.value.fontSize / 1.5,
            fill: B.value.fill,
            "text-anchor": "middle",
            "font-weight": B.value.bold ? "bold" : "normal"
          }, toDisplayString(B.value.text), 9, xl)
        ])) : createCommentVNode("", true),
        p2.value && i.value ? (openBlock(), createElementBlock("g", $l, [
          createBaseVNode("rect", {
            x: k2.value[i.value].tl.x,
            y: k2.value[i.value].tl.y,
            height: "20",
            width: "20",
            fill: k2.value[i.value].tl.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "TL" ? 1 : 0.2}`),
            onClick: u[10] || (u[10] = (a) => A("TL")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "TL" })
          }, null, 14, kl),
          createBaseVNode("rect", {
            x: k2.value[i.value].tr.x,
            y: k2.value[i.value].tr.y,
            height: "20",
            width: "20",
            fill: k2.value[i.value].tr.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "TR" ? 1 : 0.2}`),
            onClick: u[11] || (u[11] = (a) => A("TR")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "TR" })
          }, null, 14, Ll),
          createBaseVNode("rect", {
            x: k2.value[i.value].br.x,
            y: k2.value[i.value].br.y,
            height: "20",
            width: "20",
            fill: k2.value[i.value].br.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "BR" ? 1 : 0.2}`),
            onClick: u[12] || (u[12] = (a) => A("BR")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "BR" })
          }, null, 14, wl),
          createBaseVNode("rect", {
            x: k2.value[i.value].bl.x,
            y: k2.value[i.value].bl.y,
            height: "20",
            width: "20",
            fill: k2.value[i.value].bl.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "BL" ? 1 : 0.2}`),
            onClick: u[13] || (u[13] = (a) => A("BL")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "BL" })
          }, null, 14, _l),
          createBaseVNode("path", {
            class: "vue-ui-quadrant-minimap-crosshairs",
            stroke: t.value.style.chart.backgroundColor,
            "stroke-width": 1,
            d: k2.value[i.value].crosshairs.horizontal
          }, null, 8, ql),
          createBaseVNode("path", {
            class: "vue-ui-quadrant-minimap-crosshairs",
            stroke: t.value.style.chart.backgroundColor,
            "stroke-width": 1,
            d: k2.value[i.value].crosshairs.vertical
          }, null, 8, Cl)
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "svg", { svg: e.value }, void 0, true)
      ], 14, Yt)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", Sl, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref($e) || unref(ke) })), void 0, true)
      ])) : createCommentVNode("", true),
      J.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 6,
        config: {
          type: "quadrant",
          style: {
            backgroundColor: t.value.style.chart.backgroundColor,
            quadrant: {
              grid: {
                color: t.value.style.chart.layout.grid.stroke
              },
              plots: {
                color: t.value.style.chart.layout.grid.stroke,
                radius: 1
              }
            }
          }
        }
      }, null, 8, ["config"])),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: he
      }, [
        t.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${ge.value}`,
          legendSet: Se2.value,
          config: je.value,
          onClickMarker: u[14] || (u[14] = ({ legend: a }) => se(a.id))
        }, {
          item: withCtx(({ legend: a }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (s2) => se(a.id),
              style: normalizeStyle(`opacity:${M.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name), 13, zl)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(l.$slots, "legend", {
          key: 1,
          legend: Se2.value
        }, void 0, true)
      ], 512),
      l.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 7,
        ref_key: "source",
        ref: ye,
        dir: "auto"
      }, [
        renderSlot(l.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: w.value.showTooltip && j.value,
        backgroundColor: t.value.style.chart.tooltip.backgroundColor,
        color: t.value.style.chart.tooltip.color,
        borderRadius: t.value.style.chart.tooltip.borderRadius,
        borderColor: t.value.style.chart.tooltip.borderColor,
        borderWidth: t.value.style.chart.tooltip.borderWidth,
        fontSize: t.value.style.chart.tooltip.fontSize,
        backgroundOpacity: t.value.style.chart.tooltip.backgroundOpacity,
        position: t.value.style.chart.tooltip.position,
        offsetY: t.value.style.chart.tooltip.offsetY,
        parent: V.value,
        content: oe.value,
        isCustom: t.value.style.chart.tooltip.customFormat && typeof t.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(l.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...re2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(l.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...re2.value })), void 0, true)
        ]),
        default: withCtx(() => [
          t.value.style.chart.tooltip.showShape ? (openBlock(), createElementBlock("svg", Tl, [
            createVNode($, {
              plot: { x: 10, y: 10 },
              shape: D.value.shape,
              color: D.value.color,
              radius: 8,
              stroke: t.value.style.chart.layout.plots.outline ? t.value.style.chart.layout.plots.outlineColor : "none",
              "stroke-width": t.value.style.chart.layout.plots.outlineWidth
            }, null, 8, ["shape", "color", "stroke", "stroke-width"])
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      J.value ? (openBlock(), createBlock(R, {
        key: 8,
        hideDetails: "",
        config: {
          open: w.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: t.value.style.chart.backgroundColor,
            color: t.value.style.chart.color
          },
          head: {
            backgroundColor: t.value.style.chart.backgroundColor,
            color: t.value.style.chart.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${pe.value}`,
            colNames: te2.value.colNames,
            head: te2.value.head,
            body: te2.value.body,
            config: te2.value.config,
            title: `${t.value.style.chart.title.text}${t.value.style.chart.title.subtitle.text ? ` : ${t.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: u[15] || (u[15] = (a) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createTextVNode(toDisplayString(a), 1)
            ]),
            td: withCtx(({ td: a }) => [
              createBaseVNode("div", {
                innerHTML: a.name || a
              }, null, 8, Wl)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Xt2));
  }
};
var Gl = s(Xl, [["__scopeId", "data-v-557eff8e"]]);
export {
  Gl as default
};
//# sourceMappingURL=vue-ui-quadrant-C_9VNAXg-HC6J3CII.js.map
