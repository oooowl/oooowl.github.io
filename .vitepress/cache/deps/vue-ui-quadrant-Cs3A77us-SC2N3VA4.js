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
import {
  $
} from "./chunk-7VCRGXFE.js";
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
  Ft,
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
  cr,
  et,
  j,
  nr,
  oe,
  or,
  pt,
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
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-quadrant-Cs3A77us.js
var _t = ["id"];
var qt = ["xmlns", "viewBox", "id"];
var St = ["id"];
var Ct = ["stop-color"];
var zt = ["stop-color"];
var Tt = { key: 0 };
var Wt = ["fill", "x", "y", "height", "width", "stroke-width", "stroke", "rx"];
var Xt2 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Yt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Mt = { key: 1 };
var Nt2 = ["points", "fill"];
var At = ["points", "fill"];
var Vt = ["points", "fill"];
var Bt = ["points", "fill"];
var Pt = { key: 2 };
var Rt = ["y", "fill", "font-size"];
var Ft2 = ["x", "y", "fill", "font-size"];
var Ot2 = ["x", "y", "fill", "font-size"];
var Ht2 = ["y", "fill", "font-size"];
var It = { key: 3 };
var Dt = ["x", "y", "font-size", "fill"];
var Et = ["x", "y", "font-size", "fill"];
var Ut = ["x", "y", "font-size", "fill"];
var Gt2 = ["id", "font-size", "transform", "fill"];
var Qt2 = ["id", "font-size", "transform", "fill"];
var Jt = ["id", "font-size", "transform", "fill"];
var jt = { key: 4 };
var Zt = ["fill", "points"];
var Kt2 = ["x", "y", "width", "height"];
var el = ["x", "y", "width", "height"];
var tl = ["x", "y", "width", "height"];
var ll = ["x", "y", "width", "height"];
var al = { key: 0 };
var ul = ["x", "y", "font-size", "fill"];
var ol = { key: 0 };
var sl = ["x", "y", "onMouseover", "onClick"];
var rl = {
  key: 7,
  class: "vue-ui-dna"
};
var nl = ["points", "fill"];
var il = ["points", "fill"];
var vl = ["points", "fill"];
var dl = ["points", "fill"];
var cl = { key: 8 };
var hl = ["x", "y", "font-size", "fill", "font-weight"];
var yl = { key: 9 };
var bl = ["x", "y", "fill"];
var fl = ["x", "y", "fill"];
var pl = ["x", "y", "fill"];
var gl = ["x", "y", "fill"];
var ml = ["stroke", "d"];
var xl = ["stroke", "d"];
var $l = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var kl = ["onClick"];
var Ll = {
  key: 0,
  height: "14",
  width: "14",
  viewBox: "0 0 20 20"
};
var wl = ["innerHTML"];
var _l = {
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
  setup(Be, { expose: Pe, emit: ae }) {
    const W2 = Be, { vue_ui_quadrant: Re } = oe(), G = computed(() => !!W2.dataset && W2.dataset.length), z = ref(Lt()), Fe = ref(null), Q = ref(false), ue = ref(""), ie2 = ref(0), p2 = ref(false), O2 = ref(null), ve = ref(null), de = ref(null), ce = ref(0), he = ref(0), ye = ref(0), t = computed({
      get: () => be(),
      set: (l) => l
    });
    function be() {
      const l = c({
        userConfig: W2.config,
        defaultConfig: Re
      });
      return l.theme ? {
        ...c({
          userConfig: Ge.vue_ui_quadrant[l.theme] || W2.config,
          defaultConfig: l
        }),
        customPalette: R2[l.theme] || et
      } : l;
    }
    watch(() => W2.config, (l) => {
      t.value = be(), fe(), ce.value += 1, he.value += 1, ye.value += 1;
    }, { deep: true });
    const J = ref(null);
    function fe() {
      if (Xt(W2.dataset) ? Kt({
        componentName: "VueUiQuadrant",
        type: "dataset"
      }) : W2.dataset.forEach((l, u) => {
        [null, void 0].includes(l.name) && Kt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "name",
          index: u
        }), [null, void 0].includes(l.series) ? Kt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "series",
          index: u
        }) : l.series.forEach((a, s2) => {
          [null, void 0].includes(a.name) && Kt({
            componentName: "VueUiQuadrant",
            type: "datasetSerieAttribute",
            property: "name",
            key: "series",
            index: s2
          });
        });
      }), t.value.responsive) {
        const l = O(() => {
          const { width: u, height: a } = M({
            chart: O2.value,
            title: t.value.style.chart.title.text ? ve.value : null,
            legend: t.value.style.chart.legend.show ? de.value : null
          });
          g.value = 48, e.value.height = a, e.value.usableHeight = a - g.value * 2, e.value.width = u, e.value.usableWidth = u - g.value * 2, e.value.top = g.value, e.value.left = g.value, e.value.right = u - g.value, e.value.bottom = a - g.value, e.value.centerX = u / 2, e.value.centerY = a - a / 2, e.value.padding = g.value;
        });
        J.value = new ResizeObserver(l), J.value.observe(O2.value.parentNode);
      }
    }
    onMounted(() => {
      fe();
    }), onBeforeUnmount(() => {
      J.value && J.value.disconnect();
    });
    const { isPrinting: pe, isImaging: ge, generatePdf: me, generateImage: xe } = se({
      elementId: `vue-ui-quadrant_${z.value}`,
      fileName: t.value.style.chart.title.text || "vue-ui-quadrant"
    }), $e = computed(() => or(t.value.customPalette)), L = ref({
      plotLabels: {
        show: t.value.style.chart.layout.labels.plotLabels.show
      },
      showTable: t.value.table.show,
      showTooltip: t.value.style.chart.tooltip.show
    }), g = ref(48), e = ref({
      height: t.value.style.chart.height,
      usableHeight: t.value.style.chart.height - g.value * 2,
      width: t.value.style.chart.width,
      usableWidth: t.value.style.chart.width - g.value * 2,
      top: g.value,
      left: g.value,
      right: t.value.style.chart.width - g.value,
      bottom: t.value.style.chart.height - g.value,
      centerX: t.value.style.chart.width / 2,
      centerY: t.value.style.chart.height - t.value.style.chart.height / 2,
      padding: g.value
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
    }), Oe = ref(null), j2 = ref(false);
    function H({ targetX: l, targetY: u, targetW: a, targetH: s2, side: r }) {
      i.value && E2(r);
      const b = {
        x: l - d.value.startX,
        y: u - d.value.startY,
        w: a - d.value.width,
        h: s2 - d.value.height
      }, f = t.value.zoomAnimationFrames;
      let X = 0;
      function Ye() {
        j2.value = true, d.value.startX += b.x / f, d.value.startY += b.y / f, d.value.width += b.w / f, d.value.height += b.h / f, X += 1, X < f ? Oe.value = requestAnimationFrame(Ye) : j2.value = false;
      }
      Ye();
    }
    function M2(l) {
      if (!j2.value)
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
    const He = computed(() => {
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
    }), w = computed(() => {
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
    }), N = ref([]), R3 = computed(() => W2.dataset.map((l, u) => ({
      ...l,
      id: `cat_${u}_${z.value}`,
      color: j(l.color) || $e.value[u] || et[u]
    }))), Ie = computed(() => R3.value.filter((l) => !N.value.includes(l.id))), De = computed(() => R3.value.map((l, u) => ({
      ...l,
      shape: l.shape || "circle",
      series: l.series.map((a) => ({
        ...a,
        x: ke(a.x),
        y: Le(a.y),
        xValue: a.x,
        yValue: a.y,
        quadrantSide: _e({ x: a.x, y: a.y }),
        categoryName: l.name,
        shape: l.shape,
        color: l.color
      }))
    }))), C2 = computed(() => (W2.dataset.forEach((l, u) => {
      l.series.forEach((a, s2) => {
        [null, void 0].includes(a.x) && Kt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "x",
          key: "series",
          index: s2
        }), [null, void 0].includes(a.y) && Kt({
          componentName: "VueUiQuadrant",
          type: "datasetSerieAttribute",
          property: "y",
          key: "series",
          index: s2
        });
      });
    }), Ie.value.map((l, u) => ({
      ...l,
      shape: l.shape || "circle",
      color: l.color || $e.value[u] || et[u],
      series: l.series.map((a) => ({
        ...a,
        x: ke(a.x),
        y: Le(a.y),
        xValue: a.x,
        yValue: a.y,
        quadrantSide: _e({ x: a.x, y: a.y }),
        categoryName: l.name,
        shape: l.shape,
        color: l.color,
        uid: Lt()
      }))
    }))));
    function ke(l) {
      if (l >= 0) {
        const u = l / w.value.x.max;
        return e.value.centerX + e.value.usableWidth / 2 * u;
      } else {
        const u = Math.abs(l) / Math.abs(w.value.x.min);
        return e.value.centerX - e.value.usableWidth / 2 * u;
      }
    }
    function Le(l) {
      if (l >= 0) {
        const u = l / w.value.y.max;
        return e.value.centerY + (1 - e.value.usableHeight / 2 * u);
      } else {
        const u = Math.abs(l) / Math.abs(w.value.y.min);
        return e.value.centerY - (1 - e.value.usableHeight / 2 * u);
      }
    }
    const Z = computed(() => {
      const l = C2.value.flatMap((f) => f.series.map((X) => ({
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
    }), K = computed(() => {
      const l = Z.value.head, u = Z.value.tableData.map((s2) => [
        {
          shape: s2.shape,
          color: s2.color,
          name: s2.category
        },
        s2.name,
        nr(
          t.value.style.chart.layout.labels.plotLabels.x.formatter,
          s2.x,
          Gt({
            v: s2.x,
            r: t.value.style.chart.layout.labels.plotLabels.rounding
          })
        ),
        nr(
          t.value.style.chart.layout.labels.plotLabels.y.formatter,
          s2.y,
          Gt({
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
    function oe2(l) {
      N.value.includes(l) ? N.value = N.value.filter((a) => a !== l) : N.value.push(l);
      const u = Ce();
      ae("selectLegend", u);
    }
    const we = computed(() => De.value.map((l) => ({
      name: l.name,
      shape: l.shape,
      color: l.color,
      id: l.id,
      opacity: N.value.includes(l.id) ? 0.5 : 1,
      segregate: () => oe2(l.id),
      isSegregated: N.value.includes(l.id)
    }))), Ee = computed(() => ({
      cy: "quadrant-div-legend",
      backgroundColor: t.value.style.chart.legend.backgroundColor,
      color: t.value.style.chart.legend.color,
      fontSize: t.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: t.value.style.chart.legend.bold ? "bold" : ""
    }));
    function _e(l) {
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
    const I = ref(null), D = ref(null), se2 = ref(null);
    function qe(l, u, a) {
      I.value = u.uid, D.value = {
        color: l.color,
        shape: l.shape
      }, se2.value = {
        datapoint: u,
        seriesIndex: a,
        series: C2.value,
        config: t.value
      }, Q.value = true;
      const s2 = t.value.style.chart.tooltip.customFormat;
      if (Ht(s2) && $t(() => s2({
        seriesIndex: a,
        datapoint: u,
        series: C2.value,
        config: t.value
      })))
        ue.value = s2({
          seriesIndex: a,
          datapoint: u,
          series: C2.value,
          config: t.value
        });
      else {
        let r = "";
        u.quadrantSide && (r += `<div style="color:${t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].color};font-weight:${t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].bold ? "bold" : "400"}">${t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].text}</div>`), r += `<div>${l.name}</div>`, r += `<div style="padding-bottom:6px;border-bottom:1px solid ${t.value.style.chart.tooltip.borderColor};margin-bottom:3px">${u.name}</div>`, r += `<div>${t.value.style.chart.layout.grid.xAxis.name ? t.value.style.chart.layout.grid.xAxis.name : "x"}: <b>${nr(
          t.value.style.chart.layout.labels.plotLabels.x.formatter,
          u.xValue,
          Gt({
            v: u.xValue,
            r: t.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: u, category: l, categoryIndex: a }
        )}</b></div>`, r += `<div>${t.value.style.chart.layout.grid.yAxis.name ? t.value.style.chart.layout.grid.yAxis.name : "y"}: <b>${nr(
          t.value.style.chart.layout.labels.plotLabels.y.formatter,
          u.yValue,
          Gt({
            v: u.yValue,
            r: t.value.style.chart.tooltip.roundingValue
          }),
          { datapoint: u, category: l, categoryIndex: a }
        )}</b></div>`, ue.value = `<div style="text-align:left;font-size:${t.value.style.chart.tooltip.fontSize}px">${r}</div>`;
      }
    }
    function Se(l, u) {
      const a = {
        category: l.name,
        shape: l.shape,
        itemName: u.name,
        x: u.xValue,
        y: u.yValue,
        quadrantSide: u.quadrantSide,
        sideName: t.value.style.chart.layout.labels.quadrantLabels[u.quadrantSide].text
      };
      ae("selectPlot", a);
    }
    function E2(l) {
      if (!l) return;
      const u = C2.value.flatMap((s2) => s2.series.filter((r) => r.quadrantSide === l).map((r) => ({
        category: r.categoryName,
        itemName: r.name,
        x: r.xValue,
        y: r.yValue
      }))), a = {
        quadrantSide: l,
        sideName: t.value.style.chart.layout.labels.quadrantLabels[l].text,
        items: [...u]
      };
      ae("selectSide", a);
    }
    const $2 = computed(() => ({
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
    function Ce() {
      return C2.value.map((l) => ({
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
    function ze() {
      nextTick(() => {
        const l = [[t.value.style.chart.title.text], [t.value.style.chart.title.subtitle.text], [""]], u = Z.value.head, a = Z.value.body, s2 = l.concat([u]).concat(a), r = Nt(s2);
        Ot({ csvContent: r, title: t.value.style.chart.title.text || "vue-ui-quadrant" });
      });
    }
    const U = ref(false);
    function Ue(l) {
      U.value = l, ie2.value += 1;
    }
    function Te() {
      L.value.showTable = !L.value.showTable;
    }
    function We() {
      L.value.plotLabels.show = !L.value.plotLabels.show;
    }
    function Xe() {
      L.value.showTooltip = !L.value.showTooltip;
    }
    return Pe({
      getData: Ce,
      generatePdf: me,
      generateCsv: ze,
      generateImage: xe,
      toggleTable: Te,
      toggleLabels: We,
      toggleTooltip: Xe
    }), (l, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-quadrant ${U.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${t.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      ref_key: "quadrantChart",
      ref: O2,
      id: `vue-ui-quadrant_${z.value}`,
      style: normalizeStyle(`font-family:${t.value.style.fontFamily};width:100%; text-align:center;${t.value.style.chart.title.text ? "" : "padding-top: 36px"};background:${t.value.style.chart.backgroundColor};${t.value.responsive ? "height: 100%" : ""}`)
    }, [
      t.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: ve,
        style: "width:100%;background:transparent;padding-bottom:12px"
      }, [
        (openBlock(), createBlock(x, {
          key: `table_${ce.value}`,
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
      t.value.userOptions.show && G.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: Fe,
        key: `user_options_${ie2.value}`,
        backgroundColor: t.value.style.chart.backgroundColor,
        color: t.value.style.chart.color,
        isImaging: unref(ge),
        isPrinting: unref(pe),
        uid: z.value,
        hasTooltip: t.value.userOptions.buttons.tooltip && t.value.style.chart.tooltip.show,
        hasPdf: t.value.userOptions.buttons.pdf,
        hasImg: t.value.userOptions.buttons.img,
        hasXls: t.value.userOptions.buttons.csv,
        hasTable: t.value.userOptions.buttons.table,
        hasLabel: t.value.userOptions.buttons.labels,
        hasFullscreen: t.value.userOptions.buttons.fullscreen,
        isFullscreen: U.value,
        isTooltip: L.value.showTooltip,
        titles: { ...t.value.userOptions.buttonTitles },
        chartElement: O2.value,
        position: t.value.userOptions.position,
        onToggleFullscreen: Ue,
        onGeneratePdf: unref(me),
        onGenerateCsv: ze,
        onGenerateImage: unref(xe),
        onToggleTable: Te,
        onToggleLabels: We,
        onToggleTooltip: Xe
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isImaging", "isPrinting", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasTable", "hasLabel", "hasFullscreen", "isFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      G.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": U.value, "vue-data-ui-fulscreen--off": !U.value }),
        viewBox: `${d.value.startX} ${d.value.startY} ${d.value.width} ${d.value.height}`,
        style: normalizeStyle(`max-width:100%;overflow:${p2.value ? "hidden" : "visible"};background:transparent;color:${t.value.style.chart.color}`),
        id: `svg_${z.value}`
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (a, s2) => (openBlock(), createElementBlock("radialGradient", {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%",
            id: `quadrant_gradient_${z.value}_${s2}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(cr)(unref(pt)(a.color, 0.05), t.value.style.chart.layout.areas.opacity)
            }, null, 8, Ct),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(cr)(a.color, t.value.style.chart.layout.areas.opacity)
            }, null, 8, zt)
          ], 8, St))), 256))
        ]),
        t.value.style.chart.layout.grid.graduations.show ? (openBlock(), createElementBlock("g", Tt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(He.value, (a) => (openBlock(), createElementBlock("rect", {
            fill: t.value.style.chart.layout.grid.graduations.fill ? unref(cr)(t.value.style.chart.layout.grid.graduations.color, a.opacity) : "none",
            x: a.x,
            y: a.y,
            height: a.height <= 0 ? 1e-3 : a.height,
            width: a.width <= 0 ? 1e-3 : a.width,
            "stroke-width": t.value.style.chart.layout.grid.graduations.strokeWidth,
            stroke: t.value.style.chart.layout.grid.graduations.stroke,
            rx: t.value.style.chart.layout.grid.graduations.roundingForce
          }, null, 8, Wt))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("line", {
          x1: e.value.left,
          y1: e.value.centerY,
          x2: e.value.right,
          y2: e.value.centerY,
          stroke: t.value.style.chart.layout.grid.stroke,
          "stroke-width": t.value.style.chart.layout.grid.strokeWidth
        }, null, 8, Xt2),
        createBaseVNode("line", {
          x1: e.value.centerX,
          y1: e.value.top,
          x2: e.value.centerX,
          y2: e.value.bottom,
          stroke: t.value.style.chart.layout.grid.stroke,
          "stroke-width": t.value.style.chart.layout.grid.strokeWidth
        }, null, 8, Yt),
        t.value.style.chart.layout.grid.showArrows ? (openBlock(), createElementBlock("g", Mt, [
          createBaseVNode("polygon", {
            points: `${e.value.right - 8},${e.value.centerY - 6} ${e.value.right},${e.value.centerY} ${e.value.right - 8},${e.value.centerY + 6}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, Nt2),
          createBaseVNode("polygon", {
            points: `${e.value.left + 8},${e.value.centerY - 6} ${e.value.left},${e.value.centerY} ${e.value.left + 8},${e.value.centerY + 6}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, At),
          createBaseVNode("polygon", {
            points: `${e.value.centerX - 6},${e.value.top + 8} ${e.value.centerX},${e.value.top} ${e.value.centerX + 6},${e.value.top + 8}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, Vt),
          createBaseVNode("polygon", {
            points: `${e.value.centerX - 6},${e.value.bottom - 8} ${e.value.centerX},${e.value.bottom} ${e.value.centerX + 6},${e.value.bottom - 8}`,
            fill: t.value.style.chart.layout.grid.stroke,
            stroke: "none"
          }, null, 8, Bt)
        ])) : createCommentVNode("", true),
        t.value.style.chart.layout.labels.quadrantLabels.show && !p2.value ? (openBlock(), createElementBlock("g", Pt, [
          t.value.style.chart.layout.labels.quadrantLabels.tl.text ? (openBlock(), createElementBlock("text", {
            key: 0,
            x: 0,
            y: e.value.top - e.value.padding / 2,
            "text-anchor": "start",
            fill: t.value.style.chart.layout.labels.quadrantLabels.tl.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.tl.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.tl.bold ? "bold" : ""}`),
            onClick: u[0] || (u[0] = (a) => E2("tl"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.tl.text), 13, Rt)) : createCommentVNode("", true),
          t.value.style.chart.layout.labels.quadrantLabels.tr.text ? (openBlock(), createElementBlock("text", {
            key: 1,
            x: e.value.width,
            y: e.value.top - e.value.padding / 2,
            "text-anchor": "end",
            fill: t.value.style.chart.layout.labels.quadrantLabels.tr.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.tr.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.tr.bold ? "bold" : ""}`),
            onClick: u[1] || (u[1] = (a) => E2("tr"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.tr.text), 13, Ft2)) : createCommentVNode("", true),
          t.value.style.chart.layout.labels.quadrantLabels.br.text ? (openBlock(), createElementBlock("text", {
            key: 2,
            x: e.value.width,
            y: e.value.bottom + e.value.padding * 0.7,
            "text-anchor": "end",
            fill: t.value.style.chart.layout.labels.quadrantLabels.br.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.br.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.br.bold ? "bold" : ""}`),
            onClick: u[2] || (u[2] = (a) => E2("br"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.br.text), 13, Ot2)) : createCommentVNode("", true),
          t.value.style.chart.layout.labels.quadrantLabels.bl.text ? (openBlock(), createElementBlock("text", {
            key: 3,
            x: 0,
            y: e.value.bottom + e.value.padding * 0.7,
            "text-anchor": "start",
            fill: t.value.style.chart.layout.labels.quadrantLabels.bl.color,
            "font-size": t.value.style.chart.layout.labels.quadrantLabels.bl.fontSize,
            style: normalizeStyle(`font-weight:${t.value.style.chart.layout.labels.quadrantLabels.bl.bold ? "bold" : ""}`),
            onClick: u[3] || (u[3] = (a) => E2("bl"))
          }, toDisplayString(t.value.style.chart.layout.labels.quadrantLabels.bl.text), 13, Ht2)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        t.value.style.chart.layout.labels.axisLabels.show ? (openBlock(), createElementBlock("g", It, [
          createBaseVNode("text", {
            x: e.value.centerX,
            y: e.value.top - e.value.padding / 6,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(unref(nr)(
            t.value.style.chart.layout.labels.plotLabels.y.formatter,
            w.value.y.max,
            unref(Gt)({
              v: w.value.y.max,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, Dt),
          createBaseVNode("text", {
            x: e.value.centerX,
            y: e.value.top - e.value.padding / 2,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(t.value.style.chart.layout.grid.yAxis.name), 9, Et),
          createBaseVNode("text", {
            x: e.value.centerX,
            y: e.value.bottom + e.value.padding * 0.35,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            fill: t.value.style.chart.layout.labels.axisLabels.color.negative
          }, toDisplayString(unref(nr)(
            t.value.style.chart.layout.labels.plotLabels.y.formatter,
            w.value.y.min,
            unref(Gt)({
              v: w.value.y.min,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, Ut),
          createBaseVNode("text", {
            id: `xLabelMin_${z.value}`,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            transform: `translate(${e.value.padding - t.value.style.chart.layout.labels.axisLabels.fontSize}, ${e.value.height / 2}), rotate(-90)`,
            fill: t.value.style.chart.layout.labels.axisLabels.color.negative
          }, toDisplayString(unref(nr)(
            t.value.style.chart.layout.labels.plotLabels.x.formatter,
            w.value.x.min,
            unref(Gt)({
              v: w.value.x.min,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, Gt2),
          createBaseVNode("text", {
            id: `xLabelMax_${z.value}`,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            transform: `translate(${e.value.width - e.value.padding + t.value.style.chart.layout.labels.axisLabels.fontSize}, ${e.value.height / 2}), rotate(90)`,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(unref(nr)(
            t.value.style.chart.layout.labels.plotLabels.x.formatter,
            w.value.x.max,
            unref(Gt)({
              v: w.value.x.max,
              r: t.value.style.chart.layout.labels.plotLabels.rounding
            })
          )), 9, Qt2),
          createBaseVNode("text", {
            id: `xLabelMaxName_${z.value}`,
            "text-anchor": "middle",
            "font-size": t.value.style.chart.layout.labels.axisLabels.fontSize,
            transform: `translate(${e.value.width - t.value.style.chart.layout.labels.axisLabels.fontSize}, ${e.value.height / 2}), rotate(90)`,
            fill: t.value.style.chart.layout.labels.axisLabels.color.positive
          }, toDisplayString(t.value.style.chart.layout.grid.xAxis.name), 9, Jt)
        ])) : createCommentVNode("", true),
        t.value.style.chart.layout.areas.show ? (openBlock(), createElementBlock("g", jt, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (a, s2) => (openBlock(), createElementBlock("g", null, [
            a.series.length > 2 ? (openBlock(), createElementBlock("polygon", {
              key: 0,
              "data-cy-quadrant-area": "",
              fill: t.value.style.chart.layout.areas.useGradient ? `url(#quadrant_gradient_${z.value}_${s2})` : unref(cr)(a.color, t.value.style.chart.layout.areas.opacity),
              points: unref(Ft)(a)
            }, null, 8, Zt)) : createCommentVNode("", true)
          ]))), 256))
        ])) : createCommentVNode("", true),
        createBaseVNode("g", null, [
          createBaseVNode("rect", {
            onClick: u[4] || (u[4] = (a) => M2("TL")),
            x: e.value.left,
            y: e.value.top,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, Kt2),
          createBaseVNode("rect", {
            onClick: u[5] || (u[5] = (a) => M2("TR")),
            x: e.value.centerX,
            y: e.value.top,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, el),
          createBaseVNode("rect", {
            onClick: u[6] || (u[6] = (a) => M2("BR")),
            x: e.value.centerX,
            y: e.value.centerY,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, tl),
          createBaseVNode("rect", {
            onClick: u[7] || (u[7] = (a) => M2("BL")),
            x: e.value.left,
            y: e.value.centerY,
            width: e.value.usableWidth / 2 <= 0 ? 1e-3 : e.value.usableWidth / 2,
            height: e.value.usableHeight / 2 <= 0 ? 1e-3 : e.value.usableHeight / 2,
            fill: "transparent",
            class: normalizeClass({ "vue-data-ui-zoom-plus": !p2.value, "vue-data-ui-zoom-minus": p2.value })
          }, null, 10, ll)
        ]),
        t.value.style.chart.layout.labels.plotLabels.showAsTag ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
          L.value.plotLabels.show ? (openBlock(), createElementBlock("g", ol, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (a, s2) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (r) => (openBlock(), createElementBlock("foreignObject", {
                style: { overflow: "visible" },
                height: "10",
                width: "100",
                x: r.x - 50,
                y: r.y - t.value.style.chart.layout.labels.plotLabels.fontSize,
                onMouseover: (b) => qe(a, r, s2),
                onMouseleave: u[9] || (u[9] = (b) => {
                  Q.value = false, I.value = null, D.value = null;
                }),
                onClick: (b) => Se(a, r)
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle(`color:${unref(xt)(a.color)};margin: 0 auto; font-size:${t.value.style.chart.layout.labels.plotLabels.fontSize}px; text-align:center;background:${a.color}; padding: 2px 4px; border-radius: 12px; height: ${t.value.style.chart.layout.labels.plotLabels.fontSize * 1.5}px`)
                }, toDisplayString(r.name), 5)
              ], 40, sl))), 256))
            ], 64))), 256))
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (a, s2) => (openBlock(), createElementBlock("g", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (r) => (openBlock(), createBlock($, {
              color: a.color,
              isSelected: I.value && r.uid === I.value,
              plot: r,
              radius: t.value.style.chart.layout.plots.radius / (p2.value ? 1.5 : 1),
              shape: a.shape,
              stroke: t.value.style.chart.layout.plots.outline ? t.value.style.chart.layout.plots.outlineColor : "none",
              strokeWidth: t.value.style.chart.layout.plots.outlineWidth,
              onMouseover: (b) => qe(a, r, s2),
              onMouseleave: u[8] || (u[8] = (b) => {
                Q.value = false, I.value = null, D.value = null;
              }),
              onClick: (b) => Se(a, r)
            }, null, 8, ["color", "isSelected", "plot", "radius", "shape", "stroke", "strokeWidth", "onMouseover", "onClick"]))), 256))
          ]))), 256)),
          L.value.plotLabels.show ? (openBlock(), createElementBlock("g", al, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (a) => (openBlock(), createElementBlock("g", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(a.series, (s2) => (openBlock(), createElementBlock("text", {
                x: s2.x,
                y: s2.y + t.value.style.chart.layout.labels.plotLabels.offsetY + t.value.style.chart.layout.plots.radius,
                "text-anchor": "middle",
                "font-size": t.value.style.chart.layout.labels.plotLabels.fontSize / (p2.value ? 1.5 : 1),
                fill: t.value.style.chart.layout.labels.plotLabels.color
              }, toDisplayString(s2.name), 9, ul))), 256))
            ]))), 256))
          ])) : createCommentVNode("", true)
        ], 64)),
        p2.value ? (openBlock(), createElementBlock("g", rl, [
          i.value === "TL" ? (openBlock(), createElementBlock("polygon", {
            key: 0,
            points: `${e.value.left - 1},${e.value.centerY} ${e.value.centerX},${e.value.centerY} ${e.value.centerX},${e.value.top - 1} ${e.value.right},${e.value.top - 1} ${e.value.right},${e.value.bottom} ${e.value.left - 1},${e.value.bottom} ${e.value.left - 1},${e.value.centerY}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, nl)) : createCommentVNode("", true),
          i.value === "TR" ? (openBlock(), createElementBlock("polygon", {
            key: 1,
            points: `${e.value.left},${e.value.top - 1} ${e.value.centerX},${e.value.top - 1} ${e.value.centerX},${e.value.centerY} ${e.value.right + 1},${e.value.centerY} ${e.value.right + 1},${e.value.bottom} ${e.value.left},${e.value.bottom} ${e.value.left},${e.value.top - 1}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, il)) : createCommentVNode("", true),
          i.value === "BR" ? (openBlock(), createElementBlock("polygon", {
            key: 2,
            points: `${e.value.left},${e.value.top} ${e.value.right + 1},${e.value.top} ${e.value.right + 1},${e.value.centerY} ${e.value.centerX},${e.value.centerY} ${e.value.centerX},${e.value.bottom + 1} ${e.value.left},${e.value.bottom + 1} ${e.value.left},${e.value.top}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, vl)) : createCommentVNode("", true),
          i.value === "BL" ? (openBlock(), createElementBlock("polygon", {
            key: 3,
            points: `${e.value.left - 1},${e.value.top} ${e.value.right},${e.value.top} ${e.value.right},${e.value.bottom + 1} ${e.value.centerX},${e.value.bottom + 1} ${e.value.centerX},${e.value.centerY} ${e.value.left - 1},${e.value.centerY} ${e.value.left - 1},${e.value.top}`,
            fill: t.value.style.chart.backgroundColor,
            style: { opacity: "1" }
          }, null, 8, dl)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        i.value && !j2.value ? (openBlock(), createElementBlock("g", cl, [
          createBaseVNode("text", {
            x: B.value.x,
            y: B.value.y - B.value.fontSize / 1.5,
            "font-size": B.value.fontSize / 1.5,
            fill: B.value.fill,
            "text-anchor": "middle",
            "font-weight": B.value.bold ? "bold" : "normal"
          }, toDisplayString(B.value.text), 9, hl)
        ])) : createCommentVNode("", true),
        p2.value && i.value ? (openBlock(), createElementBlock("g", yl, [
          createBaseVNode("rect", {
            x: $2.value[i.value].tl.x,
            y: $2.value[i.value].tl.y,
            height: "20",
            width: "20",
            fill: $2.value[i.value].tl.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "TL" ? 1 : 0.2}`),
            onClick: u[10] || (u[10] = (a) => M2("TL")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "TL" })
          }, null, 14, bl),
          createBaseVNode("rect", {
            x: $2.value[i.value].tr.x,
            y: $2.value[i.value].tr.y,
            height: "20",
            width: "20",
            fill: $2.value[i.value].tr.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "TR" ? 1 : 0.2}`),
            onClick: u[11] || (u[11] = (a) => M2("TR")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "TR" })
          }, null, 14, fl),
          createBaseVNode("rect", {
            x: $2.value[i.value].br.x,
            y: $2.value[i.value].br.y,
            height: "20",
            width: "20",
            fill: $2.value[i.value].br.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "BR" ? 1 : 0.2}`),
            onClick: u[12] || (u[12] = (a) => M2("BR")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "BR" })
          }, null, 14, pl),
          createBaseVNode("rect", {
            x: $2.value[i.value].bl.x,
            y: $2.value[i.value].bl.y,
            height: "20",
            width: "20",
            fill: $2.value[i.value].bl.fill,
            style: normalizeStyle(`cursor: pointer; opacity: ${i.value === "BL" ? 1 : 0.2}`),
            onClick: u[13] || (u[13] = (a) => M2("BL")),
            class: normalizeClass({ "vue-ui-quadrant-mini-map-cell": true, "vue-ui-quadrant-mini-map-cell-selectable": i.value !== "BL" })
          }, null, 14, gl),
          createBaseVNode("path", {
            class: "vue-ui-quadrant-minimap-crosshairs",
            stroke: t.value.style.chart.backgroundColor,
            "stroke-width": 1,
            d: $2.value[i.value].crosshairs.horizontal
          }, null, 8, ml),
          createBaseVNode("path", {
            class: "vue-ui-quadrant-minimap-crosshairs",
            stroke: t.value.style.chart.backgroundColor,
            "stroke-width": 1,
            d: $2.value[i.value].crosshairs.vertical
          }, null, 8, xl)
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "svg", { svg: e.value }, void 0, true)
      ], 14, qt)) : createCommentVNode("", true),
      l.$slots.watermark ? (openBlock(), createElementBlock("div", $l, [
        renderSlot(l.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(pe) || unref(ge) })), void 0, true)
      ])) : createCommentVNode("", true),
      G.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
        ref: de
      }, [
        t.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
          key: `legend_${ye.value}`,
          legendSet: we.value,
          config: Ee.value,
          onClickMarker: u[14] || (u[14] = ({ legend: a }) => oe2(a.id))
        }, {
          item: withCtx(({ legend: a }) => [
            createBaseVNode("div", {
              "data-cy-legend-item": "",
              onClick: (s2) => oe2(a.id),
              style: normalizeStyle(`opacity:${N.value.includes(a.id) ? 0.5 : 1}`)
            }, toDisplayString(a.name), 13, kl)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(l.$slots, "legend", {
          key: 1,
          legend: we.value
        }, void 0, true)
      ], 512),
      createVNode(E, {
        show: L.value.showTooltip && Q.value,
        backgroundColor: t.value.style.chart.tooltip.backgroundColor,
        color: t.value.style.chart.tooltip.color,
        borderRadius: t.value.style.chart.tooltip.borderRadius,
        borderColor: t.value.style.chart.tooltip.borderColor,
        borderWidth: t.value.style.chart.tooltip.borderWidth,
        fontSize: t.value.style.chart.tooltip.fontSize,
        backgroundOpacity: t.value.style.chart.tooltip.backgroundOpacity,
        position: t.value.style.chart.tooltip.position,
        offsetY: t.value.style.chart.tooltip.offsetY,
        parent: O2.value,
        content: ue.value,
        isCustom: t.value.style.chart.tooltip.customFormat && typeof t.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(l.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...se2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(l.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...se2.value })), void 0, true)
        ]),
        default: withCtx(() => [
          t.value.style.chart.tooltip.showShape ? (openBlock(), createElementBlock("svg", Ll, [
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
      G.value ? (openBlock(), createBlock(R, {
        key: 5,
        hideDetails: "",
        config: {
          open: L.value.showTable,
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
            key: `table_${he.value}`,
            colNames: K.value.colNames,
            head: K.value.head,
            body: K.value.body,
            config: K.value.config,
            title: `${t.value.style.chart.title.text}${t.value.style.chart.title.subtitle.text ? ` : ${t.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: u[15] || (u[15] = (a) => L.value.showTable = false)
          }, {
            th: withCtx(({ th: a }) => [
              createTextVNode(toDisplayString(a), 1)
            ]),
            td: withCtx(({ td: a }) => [
              createBaseVNode("div", {
                innerHTML: a.name || a
              }, null, 8, wl)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, _t));
  }
};
var Rl = s(_l, [["__scopeId", "data-v-5ecb2dd2"]]);
export {
  Rl as default
};
//# sourceMappingURL=vue-ui-quadrant-Cs3A77us-SC2N3VA4.js.map
