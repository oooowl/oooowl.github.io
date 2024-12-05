import {
  Ue
} from "./chunk-VDRRPMYI.js";
import {
  C as C2
} from "./chunk-ZYATGC4V.js";
import {
  E as E2
} from "./chunk-K5CEUZ2P.js";
import {
  C,
  E,
  I,
  L,
  O,
  S,
  b,
  k,
  m
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
import "./chunk-FSTZFDG3.js";
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
  It,
  Kt,
  Nt,
  Q,
  R as R2,
  Ut,
  Vt,
  Xt,
  br,
  dr,
  ir,
  jt,
  lr,
  qt,
  rt,
  te,
  tr,
  ur
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  guardReactiveProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-xy-canvas-jieVsnBN.js
var at = ["id"];
var tt = ["onClick"];
var lt = {
  key: 2,
  class: "vue-data-ui-watermark"
};
var ot = ["innerHTML"];
var rt2 = {
  __name: "vue-ui-xy-canvas",
  props: {
    dataset: {
      type: Array,
      default() {
        return [];
      }
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["selectLegend"],
  setup(be, { expose: ea, emit: aa }) {
    const E3 = be, { vue_ui_xy_canvas: ta } = te(), ie = ref(Dt()), U = ref(null), $ = ref(null), Z = ref(null), s2 = ref(null), f = ref(1), M = ref(1), te2 = ref(false), d = ref(null), le = ref(""), me = ref(null), S2 = ref([]), H = ref(1), N = ref(true), z = ref(true), ve = ref(null), xe = ref(0), Le = ref(0), ce = ref(false), ke = ref(null), Ce = ref(null), we = ref(null), Se2 = ref(null), $e = ref(0), ze = ref(0), Te = ref(0), de = computed(() => !!E3.dataset && E3.dataset.length), a = computed({
      get: () => Me(),
      set: (e) => e
    });
    function Me() {
      const e = c({
        userConfig: E3.config,
        defaultConfig: ta
      });
      return e.theme ? {
        ...c({
          userConfig: He.vue_ui_xy_canvas[e.theme] || E3.config,
          defaultConfig: e
        }),
        customPalette: R2[e.theme] || rt
      } : e;
    }
    watch(() => E3.config, (e) => {
      a.value = Me(), De(), $e.value += 1, ze.value += 1, Te.value += 1;
    }, { deep: true });
    const Re = ref(a.value.style.chart.aspectRatio), { isPrinting: Ie, isImaging: Oe, generatePdf: Pe, generateImage: Fe } = re({
      elementId: `xy_canvas_${ie.value}`,
      fileName: a.value.style.chart.title.text || "vue-ui-xy-canvas"
    }), u = ref({
      showTable: a.value.table.show,
      showDataLabels: a.value.style.chart.dataLabels.show,
      stacked: a.value.style.chart.stacked,
      showTooltip: a.value.style.chart.tooltip.show
    });
    function la(e) {
      ce.value = e, Le.value += 1;
    }
    const Ee = computed(() => tr(a.value.customPalette)), R3 = computed(() => W2.value ? Math.max(...W2.value.filter((e, l) => !S2.value.includes(e.absoluteIndex)).map((e) => e.series.length)) : 0), t = computed(() => {
      const e = f.value - f.value * (a.value.style.chart.paddingProportions.left + a.value.style.chart.paddingProportions.right);
      return {
        canvasWidth: f.value,
        canvasHeight: M.value,
        left: f.value * a.value.style.chart.paddingProportions.left,
        top: M.value * a.value.style.chart.paddingProportions.top,
        right: f.value - f.value * a.value.style.chart.paddingProportions.right,
        bottom: M.value - M.value * a.value.style.chart.paddingProportions.bottom,
        width: e,
        height: M.value - M.value * (a.value.style.chart.paddingProportions.top + a.value.style.chart.paddingProportions.bottom),
        slot: e / (r.value.end - r.value.start)
      };
    });
    function Ne(e, l) {
      return e / l;
    }
    function oa({ hasAutoScale: e, series: l, min: o, max: i, scale: c2, yOffset: y, individualHeight: n, stackIndex: g = null }) {
      return l.map((k2, ye) => {
        const T = c2.min < 0 ? Math.abs(c2.min) : 0, I2 = Ne(k2 + T, T + c2.max);
        let O2, G;
        e && (O2 = Math.abs(c2.min), G = Ne(k2 + O2, c2.max + O2));
        let V = 0;
        return g === null ? V = t.value.bottom - t.value.height * (e ? G : I2) : V = t.value.bottom - y - n * (e ? G : I2), {
          x: t.value.left + t.value.slot * ye + t.value.slot / 2,
          y: V,
          value: k2
        };
      });
    }
    const p = computed(() => {
      const e = Math.min(...W2.value.filter((n, g) => !S2.value.includes(n.absoluteIndex)).flatMap((n) => n.series.slice(r.value.start, r.value.end))), l = Math.max(...W2.value.filter((n, g) => !S2.value.includes(n.absoluteIndex)).flatMap((n) => n.series.slice(r.value.start, r.value.end))), o = Ut(e < 0 ? e : 0, l === e ? e + 1 < 0 ? 0 : e + 1 : l < 0 ? 0 : l, a.value.style.chart.scale.ticks), i = o.min < 0 ? Math.abs(o.min) : 0, c2 = t.value.bottom - t.value.height * (i / (o.max + i)), y = o.ticks.map((n) => ({
        y: t.value.bottom - t.value.height * ((n + i) / (o.max + i)),
        x: t.value.left - 8,
        value: n
      }));
      return {
        absoluteMin: i,
        max: l,
        min: e,
        scale: o,
        yLabels: y,
        zero: c2
      };
    }), ra = computed(() => h.value.map((e) => `
            <div style="display:flex;flex-direction:row;gap:6px;align-items:center;">
                <svg viewBox="0 0 10 10" height="12" width="12">
                    <circle cx="5" cy="5" r="5" fill="${e.color}"/>
                </svg>
                <span>${e.name ? e.name + ": " : ""}</span>
                <span>${ir(
      a.value.style.chart.dataLabels.formatter,
      e.series[d.value],
      Ht({
        p: e.prefix || "",
        v: e.series[d.value],
        s: e.suffix || "",
        r: e.rounding || 0
      }),
      { datapoint: e, seriesIndex: d.value }
    )}</span>
            </div>
        `)), W2 = computed(() => E3.dataset.map((e, l) => ({
      ...e,
      series: br({
        data: ur(e.series),
        threshold: a.value.downsample.threshold
      }),
      absoluteIndex: l,
      color: Q(e.color || Ee.value[l] || rt[l] || rt[l % rt.length])
    })));
    watch(R3, (e) => {
      e && Ae();
    });
    const h = computed(() => lr(W2.value.filter((e, l) => !S2.value.includes(e.absoluteIndex))).map((e, l) => ({
      ...e,
      series: e.series.slice(r.value.start, r.value.end)
    })).map((e, l) => {
      let o = Math.min(...e.series) || 0, i = Math.max(...e.series) || 1;
      o === i && (o = o >= 0 ? i - 1 : o, i = i >= 0 ? i : o + 1);
      const y = {
        ratios: e.series.filter((j) => ![null, void 0].includes(j)).map((j) => (j - o) / (i - o)),
        valueMin: o,
        valueMax: i
      }, n = e.scaleSteps || a.value.style.chart.scale.ticks;
      let g;
      e.autoScaling ? g = Ut(y.valueMin, y.valueMax, n) : g = Ut(y.valueMin < 0 ? y.valueMin : 0, y.valueMax <= 0 ? 0 : y.valueMax, n);
      const k2 = u.value.stacked ? t.value.height * (1 - e.cumulatedStackRatio) : 0, ye = u.value.stacked ? t.value.height / a.value.style.chart.stackGap : 0, T = u.value.stacked ? t.value.height * e.stackRatio - ye : t.value.height, I2 = g.min < 0 ? Math.abs(g.min) : 0;
      let O2;
      e.autoScaling && u.value.stacked && i <= 0 ? O2 = t.value.bottom - k2 - T : O2 = t.value.bottom - k2 - T * (I2 / (g.max + I2));
      const G = g.ticks.map((j, ma) => ({
        y: t.value.bottom - k2 - T * (ma / (g.ticks.length - 1)),
        x: t.value.left - 8,
        value: j
      })), V = oa({
        hasAutoScale: u.value.stacked && e.autoScaling,
        series: e.series,
        min: u.value.stacked ? o : p.value.min,
        max: u.value.stacked ? i : p.value.max,
        scale: u.value.stacked ? g : p.value.scale,
        yOffset: k2,
        individualHeight: T,
        stackIndex: u.value.stacked ? l : null
      });
      return {
        ...e,
        coordinatesLine: V,
        min: o,
        max: i,
        localScale: g,
        localZero: O2,
        localMin: I2,
        localYLabels: G,
        yOffset: k2,
        individualHeight: T
      };
    })), r = ref({
      start: 0,
      end: R3.value
    });
    function Ae() {
      r.value = {
        start: 0,
        end: R3.value
      }, xe.value += 1;
    }
    const ua = computed(() => h.value.filter((e) => ["line", "plot", void 0].includes(e.type))), L2 = computed(() => h.value.filter((e) => e.type === "bar"));
    function sa() {
      if (!$.value)
        return;
      const e = Z.value.offsetWidth, l = Z.value.offsetHeight;
      $.value.width = e * H.value * 2, $.value.height = l * H.value * 2, f.value = e * H.value * 2, M.value = l * H.value * 2, s2.value.scale(H.value, H.value), he();
    }
    function na() {
      if (s2.value.clearRect(0, 0, 1e4, 1e4), s2.value.fillStyle = a.value.style.chart.backgroundColor, s2.value.fillRect(0, 0, t.value.canvasWidth, t.value.canvasHeight), u.value.stacked)
        a.value.style.chart.grid.y.verticalLines.show && r.value.end - r.value.start < a.value.style.chart.grid.y.verticalLines.hideUnderXLength && h.value.forEach((e) => {
          for (let l = 0; l < r.value.end - r.value.start + 1; l += 1)
            C(
              s2.value,
              [
                {
                  x: t.value.left + t.value.slot * l,
                  y: t.value.bottom - e.yOffset - e.individualHeight
                },
                {
                  x: t.value.left + t.value.slot * l,
                  y: t.value.bottom - e.yOffset
                }
              ],
              {
                color: a.value.style.chart.grid.y.verticalLines.color
              }
            );
        }), a.value.style.chart.grid.x.horizontalLines.show && (a.value.style.chart.grid.x.horizontalLines.alternate ? h.value.forEach((e) => {
          e.localYLabels.forEach((l, o) => {
            o < e.localYLabels.length - 1 && L(
              s2.value,
              [
                { x: t.value.left, y: l.y },
                { x: t.value.right, y: l.y },
                { x: t.value.right, y: e.localYLabels[o + 1].y },
                { x: t.value.left, y: e.localYLabels[o + 1].y }
              ],
              {
                fillColor: o % 2 === 0 ? "transparent" : dr(a.value.style.chart.grid.x.horizontalLines.color, a.value.style.chart.grid.x.horizontalLines.opacity),
                strokeColor: "transparent"
              }
            );
          });
        }) : h.value.forEach((e) => {
          e.localYLabels.slice(r.value.start, r.value.end).forEach((l) => {
            C(
              s2.value,
              [
                { x: t.value.left, y: l.y },
                { x: t.value.right, y: l.y }
              ],
              {
                color: a.value.style.chart.grid.x.horizontalLines.color
              }
            );
          });
        })), a.value.style.chart.grid.zeroLine.show && h.value.forEach((e) => {
          C(
            s2.value,
            [
              { x: t.value.left, y: e.localZero },
              { x: t.value.right, y: e.localZero }
            ],
            {
              color: a.value.style.chart.grid.zeroLine.color,
              lineDash: a.value.style.chart.grid.zeroLine.dashed ? [10, 10] : [0, 0]
            }
          );
        }), a.value.style.chart.grid.y.axisLabels.show && h.value.forEach((e) => {
          C(
            s2.value,
            [
              { x: t.value.left, y: t.value.bottom - e.yOffset },
              { x: t.value.left, y: t.value.bottom - e.yOffset - e.individualHeight }
            ],
            {
              color: e.color
            }
          ), C(
            s2.value,
            [
              { x: t.value.right, y: t.value.bottom - e.yOffset },
              { x: t.value.right, y: t.value.bottom - e.yOffset - e.individualHeight }
            ],
            {
              color: e.color
            }
          ), e.localYLabels.forEach((l, o) => {
            I(
              s2.value,
              ir(
                a.value.style.chart.dataLabels.formatter,
                l.value,
                Ht({
                  p: e.prefix || a.value.style.chart.grid.y.axisLabels.prefix || "",
                  v: l.value,
                  s: e.suffix || a.value.style.chart.grid.y.axisLabels.suffix || "",
                  r: e.rounding || a.value.style.chart.grid.y.axisLabels.rounding || 0
                }),
                { datapoint: l, seriesIndex: o }
              ),
              l.x + a.value.style.chart.grid.y.axisLabels.offsetX,
              l.y,
              {
                align: "right",
                font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
                color: e.color
              }
            );
          });
        }), h.value.forEach((e) => {
          I(
            s2.value,
            e.name,
            f.value / 35,
            t.value.bottom - e.yOffset - e.individualHeight / 2,
            {
              align: "center",
              rotation: -90,
              color: e.color,
              font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`
            }
          );
        });
      else {
        if (a.value.style.chart.grid.y.verticalLines.show && r.value.end - r.value.start < a.value.style.chart.grid.y.verticalLines.hideUnderXLength)
          for (let e = 0; e < r.value.end - r.value.start + 1; e += 1)
            C(
              s2.value,
              [
                { x: t.value.left + t.value.slot * e, y: t.value.top },
                { x: t.value.left + t.value.slot * e, y: t.value.bottom }
              ],
              {
                color: a.value.style.chart.grid.y.verticalLines.color
              }
            );
        a.value.style.chart.grid.x.horizontalLines.show && (a.value.style.chart.grid.x.horizontalLines.alternate ? p.value.yLabels.forEach((e, l) => {
          l < p.value.yLabels.length - 1 && L(
            s2.value,
            [
              { x: t.value.left, y: e.y },
              { x: t.value.right, y: e.y },
              { x: t.value.right, y: p.value.yLabels[l + 1].y },
              { x: t.value.left, y: p.value.yLabels[l + 1].y }
            ],
            {
              fillColor: l % 2 === 0 ? "transparent" : dr(a.value.style.chart.grid.x.horizontalLines.color, a.value.style.chart.grid.x.horizontalLines.opacity),
              strokeColor: "transparent"
            }
          );
        }) : p.value.yLabels.forEach((e) => {
          C(
            s2.value,
            [
              { x: t.value.left, y: e.y },
              { x: t.value.right, y: e.y }
            ],
            {
              color: a.value.style.chart.grid.x.horizontalLines.color
            }
          );
        })), a.value.style.chart.grid.y.showAxis && C(
          s2.value,
          [
            { x: t.value.left, y: t.value.top },
            { x: t.value.left, y: t.value.bottom }
          ],
          {
            color: a.value.style.chart.grid.y.axisColor,
            lineWidth: a.value.style.chart.grid.y.axisThickness
          }
        ), a.value.style.chart.grid.x.showAxis && C(
          s2.value,
          [
            { x: t.value.left, y: t.value.bottom },
            { x: t.value.right, y: t.value.bottom }
          ],
          {
            color: a.value.style.chart.grid.x.axisColor,
            lineWidth: a.value.style.chart.grid.x.axisThickness
          }
        ), a.value.style.chart.grid.zeroLine.show && C(
          s2.value,
          [
            { x: t.value.left, y: p.value.zero },
            { x: t.value.right, y: p.value.zero }
          ],
          {
            color: a.value.style.chart.grid.zeroLine.color,
            lineDash: a.value.style.chart.grid.zeroLine.dashed ? [10, 10] : [0, 0]
          }
        ), a.value.style.chart.grid.y.axisLabels.show && p.value.yLabels.forEach((e, l) => {
          I(
            s2.value,
            ir(
              a.value.style.chart.dataLabels.formatter,
              e.value,
              Ht({
                p: a.value.style.chart.grid.y.axisLabels.prefix || "",
                v: e.value,
                s: a.value.style.chart.grid.y.axisLabels.suffix || "",
                r: a.value.style.chart.grid.y.axisLabels.rounding || 0
              }),
              { datapoint: e, seriesIndex: l }
            ),
            e.x + a.value.style.chart.grid.y.axisLabels.offsetX,
            e.y,
            {
              align: "right",
              font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
              color: a.value.style.chart.grid.y.axisLabels.color
            }
          );
        });
      }
      a.value.style.chart.grid.y.axisName && I(
        s2.value,
        a.value.style.chart.grid.y.axisName,
        f.value - f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio * 1.2,
        t.value.bottom - t.value.height / 2,
        {
          font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
          color: a.value.style.chart.color,
          align: "center",
          rotation: 90
        }
      ), a.value.style.chart.grid.x.axisName && I(
        s2.value,
        a.value.style.chart.grid.x.axisName,
        f.value / 2,
        M.value,
        {
          font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
          color: a.value.style.chart.color,
          align: "center"
        }
      );
    }
    function ia(e) {
      for (let l = 0; l < e.coordinatesLine.length; l += 1) {
        const o = (d.value === l ? f.value / 150 : a.value.style.chart.line.plots.show ? f.value / 200 : 0) * a.value.style.chart.line.plots.radiusRatio;
        b(
          s2.value,
          { x: e.coordinatesLine[l].x, y: e.coordinatesLine[l].y },
          o,
          {
            color: a.value.style.chart.backgroundColor,
            fillStyle: e.color,
            strokeColor: "transparent"
          }
        );
      }
    }
    function va(e) {
      for (let l = 0; l < e.coordinatesLine.length; l += 1)
        I(
          s2.value,
          ir(
            a.value.style.chart.dataLabels.formatter,
            e.coordinatesLine[l].value,
            Ht({
              p: e.prefix || "",
              v: e.coordinatesLine[l].value,
              s: e.suffix || "",
              r: e.rounding || 0
            }),
            { datapoint: e.coordinatesLine[l], seriesIndex: l }
          ),
          e.coordinatesLine[l].x,
          e.coordinatesLine[l].y + a.value.style.chart.dataLabels.offsetY,
          {
            align: "center",
            font: `${Math.round(f.value / 40 * a.value.style.chart.dataLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
            color: a.value.style.chart.dataLabels.useSerieColor ? e.color : a.value.style.chart.dataLabels.color,
            strokeColor: a.value.style.chart.backgroundColor,
            lineWidth: 0.8
          }
        );
    }
    function ca() {
      for (let e = r.value.start; e < r.value.end; e += 1)
        (r.value.end - r.value.start < a.value.style.chart.grid.y.timeLabels.modulo || r.value.end - r.value.start >= a.value.style.chart.grid.y.timeLabels.modulo && (e % Math.floor((r.value.end - r.value.start) / a.value.style.chart.grid.y.timeLabels.modulo) === 0 || e === d.value + r.value.start)) && I(
          s2.value,
          a.value.style.chart.grid.y.timeLabels.values[e] || e + 1,
          t.value.left + t.value.slot * (e - r.value.start) + t.value.slot / 2,
          t.value.bottom + f.value / a.value.style.chart.grid.y.timeLabels.offsetY,
          {
            align: a.value.style.chart.grid.y.timeLabels.rotation === 0 ? "center" : a.value.style.chart.grid.y.timeLabels.rotation > 0 ? "left" : "right",
            font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.timeLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
            color: dr(a.value.style.chart.grid.y.timeLabels.color, d.value !== null ? d.value + r.value.start === e ? 100 : 20 : 100),
            rotation: a.value.style.chart.grid.y.timeLabels.rotation
          }
        );
    }
    function _e() {
      C(
        s2.value,
        [
          { x: t.value.left + t.value.slot * d.value + t.value.slot / 2, y: t.value.top },
          { x: t.value.left + t.value.slot * d.value + t.value.slot / 2, y: t.value.bottom }
        ],
        {
          color: a.value.style.chart.selector.color,
          lineDash: a.value.style.chart.selector.dashed ? [8, 8] : [0, 0],
          lineWidth: 2,
          linceCap: "round"
        }
      );
    }
    function da() {
      L2.value.forEach((e, l) => {
        for (let o = 0; o < e.coordinatesLine.length; o += 1)
          L(
            s2.value,
            [
              {
                x: t.value.left + t.value.slot * o + t.value.slot / 10 + (u.value.stacked ? 0 : t.value.slot / L2.value.length * l - (l === 0 ? 0 : t.value.slot / (5 * L2.value.length) * l)),
                y: u.value.stacked ? e.localZero : p.value.zero
              },
              {
                x: t.value.left + t.value.slot * o + t.value.slot / 10 + (u.value.stacked ? 0 : t.value.slot / L2.value.length * l - (l === 0 ? 0 : t.value.slot / (5 * L2.value.length) * l)) + t.value.slot * 0.8 / (u.value.stacked ? 1 : L2.value.length),
                y: u.value.stacked ? e.localZero : p.value.zero
              },
              {
                x: t.value.left + t.value.slot * o + t.value.slot / 10 + (u.value.stacked ? 0 : t.value.slot / L2.value.length * l - (l === 0 ? 0 : t.value.slot / (5 * L2.value.length) * l)) + t.value.slot * 0.8 / (u.value.stacked ? 1 : L2.value.length),
                y: e.coordinatesLine[o].y
              },
              {
                x: t.value.left + t.value.slot * o + t.value.slot / 10 + (u.value.stacked ? 0 : t.value.slot / L2.value.length * l - (l === 0 ? 0 : t.value.slot / (5 * L2.value.length) * l)),
                y: e.coordinatesLine[o].y
              }
            ],
            {
              strokeColor: a.value.style.chart.backgroundColor,
              gradient: {
                type: "linear",
                start: {
                  x: e.coordinatesLine[o].x,
                  y: e.coordinatesLine[o].y
                },
                end: {
                  x: e.coordinatesLine[o].x,
                  y: u.value.stacked ? e.localZero : p.value.zero
                },
                stops: [
                  { offset: 0, color: e.color },
                  { offset: 1, color: It(e.color, 0.5) }
                ]
              }
            }
          ), u.value.showDataLabels && [true, void 0].includes(e.dataLabels) && I(
            s2.value,
            ir(
              a.value.style.chart.dataLabels.formatter,
              e.coordinatesLine[o].value,
              Ht({
                p: e.prefix || "",
                v: e.coordinatesLine[o].value,
                s: e.suffix || "",
                r: e.rounding || 0
              }),
              { datapoint: e.coordinatesLine[o], seriesIndex: o }
            ),
            t.value.left + t.value.slot * o + t.value.slot / 10 + (u.value.stacked ? 0 : t.value.slot / L2.value.length * l - (l === 0 ? 0 : t.value.slot / (5 * L2.value.length) * l)) + t.value.slot * 0.4 / (u.value.stacked ? 1 : L2.value.length),
            (e.coordinatesLine[o].value < 0 ? u.value.stacked ? e.localZero : p.value.zero : e.coordinatesLine[o].y) + a.value.style.chart.dataLabels.offsetY,
            {
              align: "center",
              font: `${Math.round(f.value / 40 * a.value.style.chart.dataLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
              color: a.value.style.chart.dataLabels.useSerieColor ? e.color : a.value.style.chart.dataLabels.color,
              strokeColor: a.value.style.chart.backgroundColor,
              lineWidth: 0.8
            }
          );
      });
    }
    function ha(e) {
      e.useArea ? u.value.stacked ? m(
        s2.value,
        [{ x: e.coordinatesLine[0].x, y: e.localZero }, ...e.coordinatesLine, { x: e.coordinatesLine.at(-1).x, y: e.localZero }],
        {
          fillColor: dr(e.color, a.value.style.chart.area.opacity),
          strokeColor: "transparent"
        }
      ) : m(
        s2.value,
        [{ x: e.coordinatesLine[0].x, y: p.value.zero }, ...e.coordinatesLine, { x: e.coordinatesLine.at(-1).x, y: p.value.zero }],
        {
          fillColor: dr(e.color, a.value.style.chart.area.opacity),
          strokeColor: "transparent"
        }
      ) : C(s2.value, e.coordinatesLine, {
        color: e.color,
        lineWidth: 3
      });
    }
    function fa() {
      h.value.forEach((e, l) => {
        C(
          s2.value,
          [
            { x: t.value.left, y: t.value.bottom - e.yOffset },
            { x: t.value.right, y: t.value.bottom - e.yOffset }
          ],
          {
            color: a.value.style.chart.grid.x.horizontalLines.color,
            lineWidth: 1
          }
        );
      });
    }
    function he() {
      na(), N.value ? (z.value && d.value !== null && a.value.style.chart.selector.show && _e(), da(), u.value.stacked && a.value.style.chart.grid.x.showAxis && fa(), ua.value.forEach((e) => {
        (e.type === "line" || !e.type) && ha(e), z.value && (ia(e), u.value.showDataLabels && [true, void 0].includes(e.dataLabels) && va(e));
      }), ve.value = S($.value)) : (ve.value && (s2.value.clearRect(0, 0, 1e4, 1e4), s2.value.drawImage(ve.value, 0, 0)), z.value && d.value !== null && a.value.style.chart.selector.show && _e(), z.value && d.value !== null && h.value.forEach((e) => {
        if (e.type === "line" || !e.type || e.type === "plot") {
          if (!e.coordinatesLine[d.value]) return;
          e.coordinatesLine[d.value].x !== void 0 && e.coordinatesLine[d.value].y !== void 0 && b(
            s2.value,
            {
              x: e.coordinatesLine[d.value].x,
              y: e.coordinatesLine[d.value].y
            },
            f.value / 150 * a.value.style.chart.line.plots.radiusRatio,
            {
              color: a.value.style.chart.backgroundColor,
              fillStyle: e.color,
              strokeColor: "transparent"
            }
          );
        }
      })), a.value.style.chart.grid.y.timeLabels.show && ca(), N.value = false;
    }
    const oe = E(() => {
      z.value = true, sa();
    }, R3.value > 200 ? 10 : 1, !z.value);
    function ya(e) {
      const { left: l } = $.value.getBoundingClientRect(), o = e.clientX - l;
      if (o * 2 < t.value.left || o * 2 > t.value.right) {
        te2.value = false, d.value = null;
        return;
      }
      const i = o * 2 - t.value.left;
      if (d.value = Math.floor(i / t.value.slot), te2.value = true, !z.value) return;
      let c2 = "";
      const y = a.value.style.chart.tooltip.customFormat;
      Xt(y) && Kt(() => y({
        seriesIndex: d.value,
        datapoint: h.value.map((n) => ({
          shape: n.shape || null,
          name: n.name,
          color: n.color,
          type: n.type || "line",
          value: n.series.find((g, k2) => k2 === d.value)
        })),
        series: h.value,
        config: a.value
      })) ? le.value = y({
        seriesIndex: d.value,
        datapoint: h.value.map((n) => ({
          shape: n.shape || null,
          name: n.name,
          color: n.color,
          type: n.type || "line",
          value: n.series.find((g, k2) => k2 === d.value)
        })),
        series: h.value,
        config: a.value
      }) : (a.value.style.chart.grid.y.timeLabels.values.slice(r.value.start, r.value.end)[d.value] && (c2 += `<div style="padding-bottom: 6px; margin-bottom: 4px; border-bottom: 1px solid ${a.value.style.chart.tooltip.borderColor}; width:100%">${a.value.style.chart.grid.y.timeLabels.values.slice(r.value.start, r.value.end)[d.value]}</div>`), c2 += ra.value.join(""), le.value = c2), z.value = false;
    }
    watch(() => d.value, (e) => {
      oe();
    }), watch(() => r.value, (e) => {
      N.value = true, he();
    }, {
      deep: true
    }), watch(() => u.value.showDataLabels, (e) => {
      N.value = true, he();
    }), watch(() => u.value.stacked, (e) => {
      N.value = true, z.value = true, oe();
    });
    function ga() {
      te2.value = false, d.value = null, le.value = "";
    }
    const re2 = ref(null), ue = ref(null);
    onMounted(() => {
      De();
    });
    function De() {
      if (jt(E3.dataset) ? qt({
        componentName: "VueUiXyCanvas",
        type: "dataset"
      }) : $.value && (s2.value = $.value.getContext("2d", { willReadFrequently: true })), a.value.responsive) {
        const e = O(() => {
          const { width: l, height: o } = k({
            chart: U.value,
            title: a.value.style.chart.title.text ? ke.value : null,
            legend: a.value.style.chart.legend.show ? Ce.value : null,
            slicer: a.value.style.chart.zoom.show && R3.value > 1 ? we.value : null,
            source: Se2.value
          });
          Re.value = `${l} / ${o}`;
        });
        re2.value = new ResizeObserver(e), re2.value.observe(U.value.parentNode);
      }
      ue.value = new ResizeObserver((e) => {
        for (const l of e)
          l.contentBoxSize && Z.value && (N.value = true, oe());
      }), ue.value.observe(Z.value);
    }
    onBeforeUnmount(() => {
      ue.value && ue.value.disconnect(), re2.value && re2.value.disconnect();
    });
    function He2(e) {
      aa("selectLegend", h.value.find((l) => l.absoluteIndex === e)), S2.value.includes(e) ? S2.value = S2.value.filter((l) => l !== e) : S2.value.push(e), N.value = true, oe();
    }
    const We = computed(() => W2.value.map((e, l) => ({
      ...e,
      name: e.name,
      color: Q(e.color) || Ee.value[l] || rt[l] || rt[l % rt.length],
      shape: e.shape || "circle",
      prefix: e.prefix || "",
      suffix: e.suffix || "",
      rounding: e.rounding || 0
    })).map((e) => ({
      ...e,
      opacity: S2.value.includes(e.absoluteIndex) ? 0.5 : 1,
      segregate: () => He2(e.absoluteIndex),
      isSegregated: S2.value.includes(e.absoluteIndex)
    }))), pa = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: a.value.style.chart.legend.backgroundColor,
      color: a.value.style.chart.legend.color,
      fontSize: a.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: a.value.style.chart.legend.bold ? "bold" : ""
    })), se = computed(() => {
      const e = [""].concat(h.value.map((c2) => c2.name)).concat(' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>');
      let l = [];
      for (let c2 = 0; c2 < R3.value; c2 += 1) {
        const y = h.value.map((n) => n.series[c2] ?? 0).reduce((n, g) => n + g, 0);
        l.push([a.value.style.chart.grid.y.timeLabels.values.slice(r.value.start, r.value.end)[c2] ?? c2 + 1].concat(h.value.map((n) => (n.series[c2] ?? 0).toFixed(a.value.table.rounding))).concat((y ?? 0).toFixed(a.value.table.rounding)));
      }
      const o = {
        th: {
          backgroundColor: a.value.table.th.backgroundColor,
          color: a.value.table.th.color,
          outline: a.value.table.th.outline
        },
        td: {
          backgroundColor: a.value.table.td.backgroundColor,
          color: a.value.table.td.color,
          outline: a.value.table.td.outline
        },
        breakpoint: a.value.table.responsiveBreakpoint
      }, i = [a.value.table.columnNames.period].concat(h.value.map((c2) => c2.name)).concat(a.value.table.columnNames.total);
      return { head: e, body: l.slice(0, r.value.end - r.value.start), config: o, colNames: i };
    }), Ye = computed(() => {
      if (h.value.length === 0) return { head: [], body: [], config: {}, columnNames: [] };
      const e = h.value.map((o) => ({
        label: o.name,
        color: o.color,
        type: o.type
      })), l = [];
      for (let o = r.value.start; o < r.value.end; o += 1) {
        const i = [a.value.style.chart.grid.y.timeLabels.values[o] || o + 1];
        h.value.forEach((c2) => {
          i.push(Number((c2.series[o] || 0).toFixed(a.value.table.rounding)));
        }), l.push(i);
      }
      return { head: e, body: l };
    });
    function Be() {
      const e = [[a.value.style.chart.title.text], [a.value.style.chart.title.subtitle.text], [""]], l = ["", ...Ye.value.head.map((y) => y.label)], o = Ye.value.body, i = e.concat([l]).concat(o), c2 = Vt(i);
      Nt({ csvContent: c2, title: a.value.style.chart.title.text || "vue-ui-xy-canvas" });
    }
    function ba() {
      return h.value;
    }
    function Xe() {
      u.value.showTable = !u.value.showTable;
    }
    function Ue2() {
      u.value.showDataLabels = !u.value.showDataLabels;
    }
    function Ze() {
      u.value.stacked = !u.value.stacked;
    }
    function Ge() {
      u.value.showTooltip = !u.value.showTooltip;
    }
    const ne = ref(false);
    function fe() {
      ne.value = !ne.value;
    }
    return ea({
      getData: ba,
      generateCsv: Be,
      generatePdf: Pe,
      generateImage: Fe,
      toggleTable: Xe,
      toggleLabels: Ue2,
      toggleStack: Ze,
      toggleTooltip: Ge,
      toggleAnnotator: fe
    }), (e, l) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`width:100%; position:relative; ${a.value.responsive ? "height: 100%" : ""}`),
      ref_key: "xy",
      ref: U,
      id: `xy_canvas_${ie.value}`,
      class: normalizeClass(`vue-ui-donut ${ce.value ? "vue-data-ui-wrapper-fullscreen" : ""}`)
    }, [
      a.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: ke,
        style: normalizeStyle(`width:100%;background:${a.value.style.chart.backgroundColor};`)
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${$e.value}`,
          config: {
            title: {
              cy: "xy-canvas-title",
              ...a.value.style.chart.title
            },
            subtitle: {
              cy: "xy-canvas-subtitle",
              ...a.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 4)) : createCommentVNode("", true),
      a.value.userOptions.show && de.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${Le.value}`,
        backgroundColor: a.value.style.chart.backgroundColor,
        color: a.value.style.chart.color,
        isPrinting: unref(Ie),
        isImaging: unref(Oe),
        uid: ie.value,
        hasTooltip: a.value.userOptions.buttons.tooltip && a.value.style.chart.tooltip.show,
        hasPdf: a.value.userOptions.buttons.pdf,
        hasImg: a.value.userOptions.buttons.img,
        hasXls: a.value.userOptions.buttons.csv,
        hasLabel: a.value.userOptions.buttons.labels,
        hasStack: be.dataset.length > 1 && a.value.userOptions.buttons.stack,
        hasFullscreen: a.value.userOptions.buttons.fullscreen,
        hasTable: r.value.end - r.value.start < 200 && a.value.userOptions.buttons.table,
        isFullscreen: ce.value,
        isTooltip: u.value.showTooltip,
        isStacked: u.value.stacked,
        titles: { ...a.value.userOptions.buttonTitles },
        chartElement: U.value,
        position: a.value.userOptions.position,
        hasAnnotator: a.value.userOptions.buttons.annotator,
        isAnnotation: ne.value,
        onToggleFullscreen: la,
        onGeneratePdf: unref(Pe),
        onGenerateCsv: Be,
        onGenerateImage: unref(Fe),
        onToggleTable: Xe,
        onToggleLabels: Ue2,
        onToggleStack: Ze,
        onToggleTooltip: Ge,
        onToggleAnnotator: fe
      }, createSlots({ _: 2 }, [
        e.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        e.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        e.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        e.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        e.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        e.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        e.$slots.optionStack ? {
          name: "optionStack",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionStack", {}, void 0, true)
          ]),
          key: "6"
        } : void 0,
        e.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: i }) => [
            renderSlot(e.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: i })), void 0, true)
          ]),
          key: "7"
        } : void 0,
        e.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: o, isAnnotator: i }) => [
            renderSlot(e.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: o, isAnnotator: i })), void 0, true)
          ]),
          key: "8"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasLabel", "hasStack", "hasFullscreen", "hasTable", "isFullscreen", "isTooltip", "isStacked", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: "vue-ui-xy-canvas",
        style: normalizeStyle(`position: relative; aspect-ratio: ${Re.value}`),
        ref_key: "container",
        ref: Z
      }, [
        de.value ? (openBlock(), createElementBlock("canvas", {
          key: 0,
          ref_key: "canvas",
          ref: $,
          style: { width: "100%", height: "100%" },
          onMousemove: l[0] || (l[0] = (o) => ya(o)),
          onMouseleave: ga
        }, null, 544)) : (openBlock(), createBlock(Cs, {
          key: 1,
          config: {
            type: "line",
            style: {
              backgroundColor: a.value.style.chart.backgroundColor,
              line: {
                axis: {
                  color: "#CCCCCC"
                },
                path: {
                  color: "#CCCCCC",
                  strokeWidth: 0.5
                }
              }
            }
          }
        }, null, 8, ["config"])),
        createVNode(E2, {
          show: u.value.showTooltip && te2.value,
          backgroundColor: a.value.style.chart.tooltip.backgroundColor,
          color: a.value.style.chart.tooltip.color,
          fontSize: a.value.style.chart.tooltip.fontSize,
          borderRadius: a.value.style.chart.tooltip.borderRadius,
          borderColor: a.value.style.chart.tooltip.borderColor,
          borderWidth: a.value.style.chart.tooltip.borderWidth,
          position: a.value.style.chart.tooltip.position,
          offsetY: a.value.style.chart.tooltip.offsetY,
          parent: $.value,
          content: le.value,
          backgroundOpacity: a.value.style.chart.tooltip.backgroundOpacity,
          isCustom: unref(Xt)(a.value.style.chart.tooltip.customFormat)
        }, {
          "tooltip-before": withCtx(() => [
            renderSlot(e.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...me.value })), void 0, true)
          ]),
          "tooltip-after": withCtx(() => [
            renderSlot(e.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...me.value })), void 0, true)
          ]),
          _: 3
        }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "position", "offsetY", "parent", "content", "backgroundOpacity", "isCustom"])
      ], 4),
      createBaseVNode("div", {
        ref_key: "chartSlicer",
        ref: we,
        style: normalizeStyle(`width:100%;background:${a.value.style.chart.backgroundColor}`),
        "data-html2canvas-ignore": ""
      }, [
        a.value.style.chart.zoom.show && R3.value > 1 ? (openBlock(), createBlock(Ue, {
          key: `slicer_${xe.value}`,
          background: a.value.style.chart.zoom.color,
          borderColor: a.value.style.chart.backgroundColor,
          fontSize: a.value.style.chart.zoom.fontSize,
          useResetSlot: a.value.style.chart.zoom.useResetSlot,
          labelLeft: a.value.style.chart.grid.y.timeLabels.values[r.value.start] ? a.value.style.chart.grid.y.timeLabels.values[r.value.start] : "",
          labelRight: a.value.style.chart.grid.y.timeLabels.values[r.value.end - 1] ? a.value.style.chart.grid.y.timeLabels.values[r.value.end - 1] : "",
          textColor: a.value.style.chart.color,
          inputColor: a.value.style.chart.zoom.color,
          selectColor: a.value.style.chart.zoom.highlightColor,
          max: R3.value,
          min: 0,
          valueStart: r.value.start,
          valueEnd: r.value.end,
          start: r.value.start,
          "onUpdate:start": l[1] || (l[1] = (o) => r.value.start = o),
          end: r.value.end,
          "onUpdate:end": l[2] || (l[2] = (o) => r.value.end = o),
          onReset: Ae
        }, {
          "reset-action": withCtx(({ reset: o }) => [
            renderSlot(e.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: o })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"])) : createCommentVNode("", true)
      ], 4),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: Ce
      }, [
        a.value.style.chart.legend.show && de.value ? (openBlock(), createBlock(C2, {
          legendSet: We.value,
          config: pa.value,
          key: `legend_${Te.value}`,
          onClickMarker: l[3] || (l[3] = ({ i: o }) => He2(o))
        }, {
          item: withCtx(({ legend: o, index: i }) => [
            createBaseVNode("div", {
              onClick: (c2) => o.segregate(),
              style: normalizeStyle(`opacity:${S2.value.includes(i) ? 0.5 : 1}`)
            }, toDisplayString(o.name), 13, tt)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(e.$slots, "legend", {
          key: 1,
          legend: We.value
        }, void 0, true)
      ], 512),
      e.$slots.watermark ? (openBlock(), createElementBlock("div", lt, [
        renderSlot(e.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(Ie) || unref(Oe) })), void 0, true)
      ])) : createCommentVNode("", true),
      e.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 3,
        ref_key: "source",
        ref: Se2,
        dir: "auto"
      }, [
        renderSlot(e.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      r.value.end - r.value.start < 200 ? (openBlock(), createBlock(R, {
        key: 4,
        hideDetails: "",
        config: {
          open: u.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: a.value.style.chart.backgroundColor,
            color: a.value.style.chart.color
          },
          head: {
            backgroundColor: a.value.style.chart.backgroundColor,
            color: a.value.style.chart.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${ze.value}`,
            colNames: se.value.colNames,
            head: se.value.head,
            body: se.value.body,
            config: se.value.config,
            title: `${a.value.style.chart.title.text}${a.value.style.chart.title.subtitle.text ? ` : ${a.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: l[4] || (l[4] = (o) => u.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", { innerHTML: o }, null, 8, ot)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true),
      a.value.userOptions.buttons.annotator && h.value.length ? (openBlock(), createBlock(Se, {
        key: 5,
        parent: U.value,
        backgroundColor: a.value.style.chart.backgroundColor,
        color: a.value.style.chart.color,
        active: ne.value,
        onClose: fe
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true)
    ], 14, at));
  }
};
var xt = s(rt2, [["__scopeId", "data-v-433caf88"]]);
export {
  xt as default
};
//# sourceMappingURL=vue-ui-xy-canvas-jieVsnBN-AR3UNNI6.js.map
