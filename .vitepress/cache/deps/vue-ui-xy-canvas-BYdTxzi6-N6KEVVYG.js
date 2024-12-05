import {
  _e
} from "./chunk-2OITSM6Y.js";
import {
  C as C2
} from "./chunk-KAESDEK5.js";
import {
  E as E2
} from "./chunk-57X6EWGW.js";
import {
  C,
  E,
  I,
  L,
  M,
  O,
  b,
  k,
  m
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
import "./chunk-VCFIOMKF.js";
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
  It,
  Kt,
  Lt,
  Mt,
  Nt,
  Ot,
  R as R2,
  Xt,
  cr,
  et,
  ir,
  j,
  nr,
  oe,
  or,
  tr
} from "./chunk-TG4LWCJY.js";
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-xy-canvas-BYdTxzi6.js
var qa = ["id"];
var Ja = ["onClick"];
var Ka = {
  key: 2,
  class: "vue-data-ui-watermark"
};
var Qa = ["innerHTML"];
var el = {
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
  setup(ge, { expose: Je, emit: Ke }) {
    const F = ge, { vue_ui_xy_canvas: Qe } = oe(), ne = ref(Lt()), ee = ref(null), $ = ref(null), B = ref(null), s2 = ref(null), f = ref(1), M2 = ref(1), ae = ref(false), d = ref(null), le = ref(""), pe = ref(null), w = ref([]), H = ref(1), E3 = ref(true), z = ref(true), ie2 = ref(null), be = ref(0), me = ref(0), ve = ref(false), xe = ref(null), Le = ref(null), ke = ref(null), Ce = ref(0), we = ref(0), Se = ref(0), ce = computed(() => !!F.dataset && F.dataset.length), a = computed({
      get: () => $e(),
      set: (e) => e
    });
    function $e() {
      const e = c({
        userConfig: F.config,
        defaultConfig: Qe
      });
      return e.theme ? {
        ...c({
          userConfig: Ge.vue_ui_xy_canvas[e.theme] || F.config,
          defaultConfig: e
        }),
        customPalette: R2[e.theme] || et
      } : e;
    }
    watch(() => F.config, (e) => {
      a.value = $e(), _e2(), Ce.value += 1, we.value += 1, Se.value += 1;
    }, { deep: true });
    const ze = ref(a.value.style.chart.aspectRatio), { isPrinting: Te, isImaging: Me, generatePdf: Re, generateImage: Ie } = se({
      elementId: `xy_canvas_${ne.value}`,
      fileName: a.value.style.chart.title.text || "vue-ui-xy-canvas"
    }), r = ref({
      showTable: a.value.table.show,
      showDataLabels: a.value.style.chart.dataLabels.show,
      stacked: a.value.style.chart.stacked,
      showTooltip: a.value.style.chart.tooltip.show
    });
    function ea(e) {
      ve.value = e, me.value += 1;
    }
    const Oe = computed(() => or(a.value.customPalette)), R3 = computed(() => W2.value ? Math.max(...W2.value.filter((e, t) => !w.value.includes(e.absoluteIndex)).map((e) => e.series.length)) : 0), l = computed(() => {
      const e = f.value - f.value * (a.value.style.chart.paddingProportions.left + a.value.style.chart.paddingProportions.right);
      return {
        canvasWidth: f.value,
        canvasHeight: M2.value,
        left: f.value * a.value.style.chart.paddingProportions.left,
        top: M2.value * a.value.style.chart.paddingProportions.top,
        right: f.value - f.value * a.value.style.chart.paddingProportions.right,
        bottom: M2.value - M2.value * a.value.style.chart.paddingProportions.bottom,
        width: e,
        height: M2.value - M2.value * (a.value.style.chart.paddingProportions.top + a.value.style.chart.paddingProportions.bottom),
        slot: e / (u.value.end - u.value.start)
      };
    });
    function Pe(e, t) {
      return e / t;
    }
    function aa({ hasAutoScale: e, series: t, min: o, max: i, scale: c2, yOffset: y, individualHeight: n, stackIndex: g = null }) {
      return t.map((L2, he) => {
        const T = c2.min < 0 ? Math.abs(c2.min) : 0, I2 = Pe(L2 + T, T + c2.max);
        let O2, X;
        e && (O2 = Math.abs(c2.min), X = Pe(L2 + O2, c2.max + O2));
        let A = 0;
        return g === null ? A = l.value.bottom - l.value.height * (e ? X : I2) : A = l.value.bottom - y - n * (e ? X : I2), {
          x: l.value.left + l.value.slot * he + l.value.slot / 2,
          y: A,
          value: L2
        };
      });
    }
    const p = computed(() => {
      const e = Math.min(...W2.value.filter((n, g) => !w.value.includes(n.absoluteIndex)).flatMap((n) => n.series.slice(u.value.start, u.value.end))), t = Math.max(...W2.value.filter((n, g) => !w.value.includes(n.absoluteIndex)).flatMap((n) => n.series.slice(u.value.start, u.value.end))), o = It(e < 0 ? e : 0, t === e ? e + 1 < 0 ? 0 : e + 1 : t < 0 ? 0 : t, a.value.style.chart.scale.ticks), i = o.min < 0 ? Math.abs(o.min) : 0, c2 = l.value.bottom - l.value.height * (i / (o.max + i)), y = o.ticks.map((n) => ({
        y: l.value.bottom - l.value.height * ((n + i) / (o.max + i)),
        x: l.value.left - 8,
        value: n
      }));
      return {
        absoluteMin: i,
        max: t,
        min: e,
        scale: o,
        yLabels: y,
        zero: c2
      };
    }), la = computed(() => h.value.map((e) => `
            <div style="display:flex;flex-direction:row;gap:6px;align-items:center;">
                <svg viewBox="0 0 10 10" height="12" width="12">
                    <circle cx="5" cy="5" r="5" fill="${e.color}"/>
                </svg>
                <span>${e.name ? e.name + ": " : ""}</span>
                <span>${nr(
      a.value.style.chart.dataLabels.formatter,
      e.series[d.value],
      Gt({
        p: e.prefix || "",
        v: e.series[d.value],
        s: e.suffix || "",
        r: e.rounding || 0
      }),
      { datapoint: e, seriesIndex: d.value }
    )}</span>
            </div>
        `)), W2 = computed(() => F.dataset.map((e, t) => ({
      ...e,
      series: ir(e.series),
      absoluteIndex: t,
      color: j(e.color || Oe.value[t] || et[t] || et[t % et.length])
    })));
    watch(R3, (e) => {
      e && Fe();
    });
    const h = computed(() => tr(W2.value.filter((e, t) => !w.value.includes(e.absoluteIndex))).map((e, t) => ({
      ...e,
      series: e.series.slice(u.value.start, u.value.end)
    })).map((e, t) => {
      let o = Math.min(...e.series) || 0, i = Math.max(...e.series) || 1;
      o === i && (o = o >= 0 ? i - 1 : o, i = i >= 0 ? i : o + 1);
      const y = {
        ratios: e.series.filter((U) => ![null, void 0].includes(U)).map((U) => (U - o) / (i - o)),
        valueMin: o,
        valueMax: i
      }, n = e.scaleSteps || a.value.style.chart.scale.ticks;
      let g;
      e.autoScaling ? g = It(y.valueMin, y.valueMax, n) : g = It(y.valueMin < 0 ? y.valueMin : 0, y.valueMax <= 0 ? 0 : y.valueMax, n);
      const L2 = r.value.stacked ? l.value.height * (1 - e.cumulatedStackRatio) : 0, he = r.value.stacked ? l.value.height / a.value.style.chart.stackGap : 0, T = r.value.stacked ? l.value.height * e.stackRatio - he : l.value.height, I2 = g.min < 0 ? Math.abs(g.min) : 0;
      let O2;
      e.autoScaling && r.value.stacked && i <= 0 ? O2 = l.value.bottom - L2 - T : O2 = l.value.bottom - L2 - T * (I2 / (g.max + I2));
      const X = g.ticks.map((U, ga) => ({
        y: l.value.bottom - L2 - T * (ga / (g.ticks.length - 1)),
        x: l.value.left - 8,
        value: U
      })), A = aa({
        hasAutoScale: r.value.stacked && e.autoScaling,
        series: e.series,
        min: r.value.stacked ? o : p.value.min,
        max: r.value.stacked ? i : p.value.max,
        scale: r.value.stacked ? g : p.value.scale,
        yOffset: L2,
        individualHeight: T,
        stackIndex: r.value.stacked ? t : null
      });
      return {
        ...e,
        coordinatesLine: A,
        min: o,
        max: i,
        localScale: g,
        localZero: O2,
        localMin: I2,
        localYLabels: X,
        yOffset: L2,
        individualHeight: T
      };
    })), u = ref({
      start: 0,
      end: R3.value
    });
    function Fe() {
      u.value = {
        start: 0,
        end: R3.value
      }, be.value += 1;
    }
    const ta = computed(() => h.value.filter((e) => ["line", "plot", void 0].includes(e.type))), x2 = computed(() => h.value.filter((e) => e.type === "bar"));
    function oa() {
      if (!$.value)
        return;
      const e = B.value.offsetWidth, t = B.value.offsetHeight;
      $.value.width = e * H.value * 2, $.value.height = t * H.value * 2, f.value = e * H.value * 2, M2.value = t * H.value * 2, s2.value.scale(H.value, H.value), de();
    }
    function ua() {
      if (s2.value.clearRect(0, 0, 1e4, 1e4), s2.value.fillStyle = a.value.style.chart.backgroundColor, s2.value.fillRect(0, 0, l.value.canvasWidth, l.value.canvasHeight), r.value.stacked)
        a.value.style.chart.grid.y.verticalLines.show && u.value.end - u.value.start < a.value.style.chart.grid.y.verticalLines.hideUnderXLength && h.value.forEach((e) => {
          for (let t = 0; t < u.value.end - u.value.start + 1; t += 1)
            C(
              s2.value,
              [
                {
                  x: l.value.left + l.value.slot * t,
                  y: l.value.bottom - e.yOffset - e.individualHeight
                },
                {
                  x: l.value.left + l.value.slot * t,
                  y: l.value.bottom - e.yOffset
                }
              ],
              {
                color: a.value.style.chart.grid.y.verticalLines.color
              }
            );
        }), a.value.style.chart.grid.x.horizontalLines.show && (a.value.style.chart.grid.x.horizontalLines.alternate ? h.value.forEach((e) => {
          e.localYLabels.forEach((t, o) => {
            o < e.localYLabels.length - 1 && L(
              s2.value,
              [
                { x: l.value.left, y: t.y },
                { x: l.value.right, y: t.y },
                { x: l.value.right, y: e.localYLabels[o + 1].y },
                { x: l.value.left, y: e.localYLabels[o + 1].y }
              ],
              {
                fillColor: o % 2 === 0 ? "transparent" : cr(a.value.style.chart.grid.x.horizontalLines.color, a.value.style.chart.grid.x.horizontalLines.opacity),
                strokeColor: "transparent"
              }
            );
          });
        }) : h.value.forEach((e) => {
          e.localYLabels.slice(u.value.start, u.value.end).forEach((t) => {
            C(
              s2.value,
              [
                { x: l.value.left, y: t.y },
                { x: l.value.right, y: t.y }
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
              { x: l.value.left, y: e.localZero },
              { x: l.value.right, y: e.localZero }
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
              { x: l.value.left, y: l.value.bottom - e.yOffset },
              { x: l.value.left, y: l.value.bottom - e.yOffset - e.individualHeight }
            ],
            {
              color: e.color
            }
          ), C(
            s2.value,
            [
              { x: l.value.right, y: l.value.bottom - e.yOffset },
              { x: l.value.right, y: l.value.bottom - e.yOffset - e.individualHeight }
            ],
            {
              color: e.color
            }
          ), e.localYLabels.forEach((t, o) => {
            I(
              s2.value,
              nr(
                a.value.style.chart.dataLabels.formatter,
                t.value,
                Gt({
                  p: e.prefix || a.value.style.chart.grid.y.axisLabels.prefix || "",
                  v: t.value,
                  s: e.suffix || a.value.style.chart.grid.y.axisLabels.suffix || "",
                  r: e.rounding || a.value.style.chart.grid.y.axisLabels.rounding || 0
                }),
                { datapoint: t, seriesIndex: o }
              ),
              t.x + a.value.style.chart.grid.y.axisLabels.offsetX,
              t.y,
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
            l.value.bottom - e.yOffset - e.individualHeight / 2,
            {
              align: "center",
              rotation: -90,
              color: e.color,
              font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`
            }
          );
        });
      else {
        if (a.value.style.chart.grid.y.verticalLines.show && u.value.end - u.value.start < a.value.style.chart.grid.y.verticalLines.hideUnderXLength)
          for (let e = 0; e < u.value.end - u.value.start + 1; e += 1)
            C(
              s2.value,
              [
                { x: l.value.left + l.value.slot * e, y: l.value.top },
                { x: l.value.left + l.value.slot * e, y: l.value.bottom }
              ],
              {
                color: a.value.style.chart.grid.y.verticalLines.color
              }
            );
        a.value.style.chart.grid.x.horizontalLines.show && (a.value.style.chart.grid.x.horizontalLines.alternate ? p.value.yLabels.forEach((e, t) => {
          t < p.value.yLabels.length - 1 && L(
            s2.value,
            [
              { x: l.value.left, y: e.y },
              { x: l.value.right, y: e.y },
              { x: l.value.right, y: p.value.yLabels[t + 1].y },
              { x: l.value.left, y: p.value.yLabels[t + 1].y }
            ],
            {
              fillColor: t % 2 === 0 ? "transparent" : cr(a.value.style.chart.grid.x.horizontalLines.color, a.value.style.chart.grid.x.horizontalLines.opacity),
              strokeColor: "transparent"
            }
          );
        }) : p.value.yLabels.forEach((e) => {
          C(
            s2.value,
            [
              { x: l.value.left, y: e.y },
              { x: l.value.right, y: e.y }
            ],
            {
              color: a.value.style.chart.grid.x.horizontalLines.color
            }
          );
        })), a.value.style.chart.grid.y.showAxis && C(
          s2.value,
          [
            { x: l.value.left, y: l.value.top },
            { x: l.value.left, y: l.value.bottom }
          ],
          {
            color: a.value.style.chart.grid.y.axisColor,
            lineWidth: a.value.style.chart.grid.y.axisThickness
          }
        ), a.value.style.chart.grid.x.showAxis && C(
          s2.value,
          [
            { x: l.value.left, y: l.value.bottom },
            { x: l.value.right, y: l.value.bottom }
          ],
          {
            color: a.value.style.chart.grid.x.axisColor,
            lineWidth: a.value.style.chart.grid.x.axisThickness
          }
        ), a.value.style.chart.grid.zeroLine.show && C(
          s2.value,
          [
            { x: l.value.left, y: p.value.zero },
            { x: l.value.right, y: p.value.zero }
          ],
          {
            color: a.value.style.chart.grid.zeroLine.color,
            lineDash: a.value.style.chart.grid.zeroLine.dashed ? [10, 10] : [0, 0]
          }
        ), a.value.style.chart.grid.y.axisLabels.show && p.value.yLabels.forEach((e, t) => {
          I(
            s2.value,
            nr(
              a.value.style.chart.dataLabels.formatter,
              e.value,
              Gt({
                p: a.value.style.chart.grid.y.axisLabels.prefix || "",
                v: e.value,
                s: a.value.style.chart.grid.y.axisLabels.suffix || "",
                r: a.value.style.chart.grid.y.axisLabels.rounding || 0
              }),
              { datapoint: e, seriesIndex: t }
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
        l.value.bottom - l.value.height / 2,
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
        M2.value,
        {
          font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.axisLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
          color: a.value.style.chart.color,
          align: "center"
        }
      );
    }
    function ra(e) {
      for (let t = 0; t < e.coordinatesLine.length; t += 1) {
        const o = (d.value === t ? f.value / 150 : a.value.style.chart.line.plots.show ? f.value / 200 : 0) * a.value.style.chart.line.plots.radiusRatio;
        b(
          s2.value,
          { x: e.coordinatesLine[t].x, y: e.coordinatesLine[t].y },
          o,
          {
            color: a.value.style.chart.backgroundColor,
            fillStyle: e.color,
            strokeColor: "transparent"
          }
        );
      }
    }
    function sa(e) {
      for (let t = 0; t < e.coordinatesLine.length; t += 1)
        I(
          s2.value,
          nr(
            a.value.style.chart.dataLabels.formatter,
            e.coordinatesLine[t].value,
            Gt({
              p: e.prefix || "",
              v: e.coordinatesLine[t].value,
              s: e.suffix || "",
              r: e.rounding || 0
            }),
            { datapoint: e.coordinatesLine[t], seriesIndex: t }
          ),
          e.coordinatesLine[t].x,
          e.coordinatesLine[t].y + a.value.style.chart.dataLabels.offsetY,
          {
            align: "center",
            font: `${Math.round(f.value / 40 * a.value.style.chart.dataLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
            color: a.value.style.chart.dataLabels.useSerieColor ? e.color : a.value.style.chart.dataLabels.color,
            strokeColor: a.value.style.chart.backgroundColor,
            lineWidth: 0.8
          }
        );
    }
    function na() {
      for (let e = u.value.start; e < u.value.end; e += 1)
        (u.value.end - u.value.start < a.value.style.chart.grid.y.timeLabels.modulo || u.value.end - u.value.start >= a.value.style.chart.grid.y.timeLabels.modulo && (e % Math.floor((u.value.end - u.value.start) / a.value.style.chart.grid.y.timeLabels.modulo) === 0 || e === d.value + u.value.start)) && I(
          s2.value,
          a.value.style.chart.grid.y.timeLabels.values[e] || e + 1,
          l.value.left + l.value.slot * (e - u.value.start) + l.value.slot / 2,
          l.value.bottom + f.value / a.value.style.chart.grid.y.timeLabels.offsetY,
          {
            align: a.value.style.chart.grid.y.timeLabels.rotation === 0 ? "center" : a.value.style.chart.grid.y.timeLabels.rotation > 0 ? "left" : "right",
            font: `${Math.round(f.value / 40 * a.value.style.chart.grid.y.timeLabels.fontSizeRatio)}px ${a.value.style.fontFamily}`,
            color: cr(a.value.style.chart.grid.y.timeLabels.color, d.value !== null ? d.value + u.value.start === e ? 100 : 20 : 100),
            rotation: a.value.style.chart.grid.y.timeLabels.rotation
          }
        );
    }
    function Ee() {
      C(
        s2.value,
        [
          { x: l.value.left + l.value.slot * d.value + l.value.slot / 2, y: l.value.top },
          { x: l.value.left + l.value.slot * d.value + l.value.slot / 2, y: l.value.bottom }
        ],
        {
          color: a.value.style.chart.selector.color,
          lineDash: a.value.style.chart.selector.dashed ? [8, 8] : [0, 0],
          lineWidth: 2,
          linceCap: "round"
        }
      );
    }
    function ia() {
      x2.value.forEach((e, t) => {
        for (let o = 0; o < e.coordinatesLine.length; o += 1)
          L(
            s2.value,
            [
              {
                x: l.value.left + l.value.slot * o + l.value.slot / 10 + (r.value.stacked ? 0 : l.value.slot / x2.value.length * t - (t === 0 ? 0 : l.value.slot / (5 * x2.value.length) * t)),
                y: r.value.stacked ? e.localZero : p.value.zero
              },
              {
                x: l.value.left + l.value.slot * o + l.value.slot / 10 + (r.value.stacked ? 0 : l.value.slot / x2.value.length * t - (t === 0 ? 0 : l.value.slot / (5 * x2.value.length) * t)) + l.value.slot * 0.8 / (r.value.stacked ? 1 : x2.value.length),
                y: r.value.stacked ? e.localZero : p.value.zero
              },
              {
                x: l.value.left + l.value.slot * o + l.value.slot / 10 + (r.value.stacked ? 0 : l.value.slot / x2.value.length * t - (t === 0 ? 0 : l.value.slot / (5 * x2.value.length) * t)) + l.value.slot * 0.8 / (r.value.stacked ? 1 : x2.value.length),
                y: e.coordinatesLine[o].y
              },
              {
                x: l.value.left + l.value.slot * o + l.value.slot / 10 + (r.value.stacked ? 0 : l.value.slot / x2.value.length * t - (t === 0 ? 0 : l.value.slot / (5 * x2.value.length) * t)),
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
                  y: r.value.stacked ? e.localZero : p.value.zero
                },
                stops: [
                  { offset: 0, color: e.color },
                  { offset: 1, color: Mt(e.color, 0.5) }
                ]
              }
            }
          ), r.value.showDataLabels && [true, void 0].includes(e.dataLabels) && I(
            s2.value,
            nr(
              a.value.style.chart.dataLabels.formatter,
              e.coordinatesLine[o].value,
              Gt({
                p: e.prefix || "",
                v: e.coordinatesLine[o].value,
                s: e.suffix || "",
                r: e.rounding || 0
              }),
              { datapoint: e.coordinatesLine[o], seriesIndex: o }
            ),
            l.value.left + l.value.slot * o + l.value.slot / 10 + (r.value.stacked ? 0 : l.value.slot / x2.value.length * t - (t === 0 ? 0 : l.value.slot / (5 * x2.value.length) * t)) + l.value.slot * 0.4 / (r.value.stacked ? 1 : x2.value.length),
            (e.coordinatesLine[o].value < 0 ? r.value.stacked ? e.localZero : p.value.zero : e.coordinatesLine[o].y) + a.value.style.chart.dataLabels.offsetY,
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
    function va(e) {
      e.useArea ? r.value.stacked ? m(
        s2.value,
        [{ x: e.coordinatesLine[0].x, y: e.localZero }, ...e.coordinatesLine, { x: e.coordinatesLine.at(-1).x, y: e.localZero }],
        {
          fillColor: cr(e.color, a.value.style.chart.area.opacity),
          strokeColor: "transparent"
        }
      ) : m(
        s2.value,
        [{ x: e.coordinatesLine[0].x, y: p.value.zero }, ...e.coordinatesLine, { x: e.coordinatesLine.at(-1).x, y: p.value.zero }],
        {
          fillColor: cr(e.color, a.value.style.chart.area.opacity),
          strokeColor: "transparent"
        }
      ) : C(s2.value, e.coordinatesLine, {
        color: e.color,
        lineWidth: 3
      });
    }
    function ca() {
      h.value.forEach((e, t) => {
        C(
          s2.value,
          [
            { x: l.value.left, y: l.value.bottom - e.yOffset },
            { x: l.value.right, y: l.value.bottom - e.yOffset }
          ],
          {
            color: a.value.style.chart.grid.x.horizontalLines.color,
            lineWidth: 1
          }
        );
      });
    }
    function de() {
      ua(), E3.value ? (z.value && d.value !== null && a.value.style.chart.selector.show && Ee(), ia(), r.value.stacked && a.value.style.chart.grid.x.showAxis && ca(), ta.value.forEach((e) => {
        (e.type === "line" || !e.type) && va(e), z.value && (ra(e), r.value.showDataLabels && [true, void 0].includes(e.dataLabels) && sa(e));
      }), ie2.value = k($.value)) : (ie2.value && (s2.value.clearRect(0, 0, 1e4, 1e4), s2.value.drawImage(ie2.value, 0, 0)), z.value && d.value !== null && a.value.style.chart.selector.show && Ee(), z.value && d.value !== null && h.value.forEach((e) => {
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
      })), a.value.style.chart.grid.y.timeLabels.show && na(), E3.value = false;
    }
    const te = E(() => {
      z.value = true, oa();
    }, R3.value > 200 ? 10 : 1, !z.value);
    function da(e) {
      const { left: t } = $.value.getBoundingClientRect(), o = e.clientX - t;
      if (o * 2 < l.value.left || o * 2 > l.value.right) {
        ae.value = false, d.value = null;
        return;
      }
      const i = o * 2 - l.value.left;
      if (d.value = Math.floor(i / l.value.slot), ae.value = true, !z.value) return;
      let c2 = "";
      const y = a.value.style.chart.tooltip.customFormat;
      Ht(y) && $t(() => y({
        seriesIndex: d.value,
        datapoint: h.value.map((n) => ({
          shape: n.shape || null,
          name: n.name,
          color: n.color,
          type: n.type || "line",
          value: n.series.find((g, L2) => L2 === d.value)
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
          value: n.series.find((g, L2) => L2 === d.value)
        })),
        series: h.value,
        config: a.value
      }) : (a.value.style.chart.grid.y.timeLabels.values.slice(u.value.start, u.value.end)[d.value] && (c2 += `<div style="padding-bottom: 6px; margin-bottom: 4px; border-bottom: 1px solid ${a.value.style.chart.tooltip.borderColor}; width:100%">${a.value.style.chart.grid.y.timeLabels.values.slice(u.value.start, u.value.end)[d.value]}</div>`), c2 += la.value.join(""), le.value = c2), z.value = false;
    }
    watch(() => d.value, (e) => {
      te();
    }), watch(() => u.value, (e) => {
      E3.value = true, de();
    }, {
      deep: true
    }), watch(() => r.value.showDataLabels, (e) => {
      E3.value = true, de();
    }), watch(() => r.value.stacked, (e) => {
      E3.value = true, z.value = true, te();
    });
    function ha() {
      ae.value = false, d.value = null, le.value = "";
    }
    const oe2 = ref(null), ue = ref(null);
    onMounted(() => {
      _e2();
    });
    function _e2() {
      if (Xt(F.dataset) ? Kt({
        componentName: "VueUiXyCanvas",
        type: "dataset"
      }) : $.value && (s2.value = $.value.getContext("2d", { willReadFrequently: true })), a.value.responsive) {
        const e = O(() => {
          const { width: t, height: o } = M({
            chart: ee.value,
            title: a.value.style.chart.title.text ? xe.value : null,
            legend: a.value.style.chart.legend.show ? Le.value : null,
            slicer: a.value.style.chart.zoom.show && R3.value > 1 ? ke.value : null
          });
          ze.value = `${t} / ${o}`;
        });
        oe2.value = new ResizeObserver(e), oe2.value.observe(ee.value.parentNode);
      }
      ue.value = new ResizeObserver((e) => {
        for (const t of e)
          t.contentBoxSize && B.value && (E3.value = true, te());
      }), ue.value.observe(B.value);
    }
    onBeforeUnmount(() => {
      ue.value && ue.value.disconnect(), oe2.value && oe2.value.disconnect();
    });
    function Ne(e) {
      Ke("selectLegend", h.value.find((t) => t.absoluteIndex === e)), w.value.includes(e) ? w.value = w.value.filter((t) => t !== e) : w.value.push(e), E3.value = true, te();
    }
    const De = computed(() => W2.value.map((e, t) => ({
      ...e,
      name: e.name,
      color: j(e.color) || Oe.value[t] || et[t] || et[t % et.length],
      shape: e.shape || "circle",
      prefix: e.prefix || "",
      suffix: e.suffix || "",
      rounding: e.rounding || 0
    })).map((e) => ({
      ...e,
      opacity: w.value.includes(e.absoluteIndex) ? 0.5 : 1,
      segregate: () => Ne(e.absoluteIndex),
      isSegregated: w.value.includes(e.absoluteIndex)
    }))), fa = computed(() => ({
      cy: "donut-div-legend",
      backgroundColor: a.value.style.chart.legend.backgroundColor,
      color: a.value.style.chart.legend.color,
      fontSize: a.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: a.value.style.chart.legend.bold ? "bold" : ""
    })), re = computed(() => {
      const e = [""].concat(h.value.map((c2) => c2.name)).concat(' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>');
      let t = [];
      for (let c2 = 0; c2 < R3.value; c2 += 1) {
        const y = h.value.map((n) => n.series[c2] ?? 0).reduce((n, g) => n + g, 0);
        t.push([a.value.style.chart.grid.y.timeLabels.values.slice(u.value.start, u.value.end)[c2] ?? c2 + 1].concat(h.value.map((n) => (n.series[c2] ?? 0).toFixed(a.value.table.rounding))).concat((y ?? 0).toFixed(a.value.table.rounding)));
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
      return { head: e, body: t.slice(0, u.value.end - u.value.start), config: o, colNames: i };
    }), He = computed(() => {
      if (h.value.length === 0) return { head: [], body: [], config: {}, columnNames: [] };
      const e = h.value.map((o) => ({
        label: o.name,
        color: o.color,
        type: o.type
      })), t = [];
      for (let o = u.value.start; o < u.value.end; o += 1) {
        const i = [a.value.style.chart.grid.y.timeLabels.values[o] || o + 1];
        h.value.forEach((c2) => {
          i.push(Number((c2.series[o] || 0).toFixed(a.value.table.rounding)));
        }), t.push(i);
      }
      return { head: e, body: t };
    });
    function We() {
      const e = [[a.value.style.chart.title.text], [a.value.style.chart.title.subtitle.text], [""]], t = ["", ...He.value.head.map((y) => y.label)], o = He.value.body, i = e.concat([t]).concat(o), c2 = Nt(i);
      Ot({ csvContent: c2, title: a.value.style.chart.title.text || "vue-ui-xy-canvas" });
    }
    function ya() {
      return h.value;
    }
    function Ye() {
      r.value.showTable = !r.value.showTable;
    }
    function Be() {
      r.value.showDataLabels = !r.value.showDataLabels;
    }
    function Xe() {
      r.value.stacked = !r.value.stacked;
    }
    function Ae() {
      r.value.showTooltip = !r.value.showTooltip;
    }
    return Je({
      getData: ya,
      generateCsv: We,
      generatePdf: Re,
      generateImage: Ie,
      toggleTable: Ye,
      toggleLabels: Be,
      toggleStack: Xe,
      toggleTooltip: Ae
    }), (e, t) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`width:100%; position: relative;${a.value.responsive ? "height: 100%" : ""}`),
      ref_key: "xy",
      ref: ee,
      id: `xy_canvas_${ne.value}`,
      class: normalizeClass(`vue-ui-donut ${ve.value ? "vue-data-ui-wrapper-fullscreen" : ""}`)
    }, [
      a.value.style.chart.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: xe,
        style: normalizeStyle(`width:100%;background:${a.value.style.chart.backgroundColor};`)
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${Ce.value}`,
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
      a.value.userOptions.show && ce.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${me.value}`,
        backgroundColor: a.value.style.chart.backgroundColor,
        color: a.value.style.chart.color,
        isPrinting: unref(Te),
        isImaging: unref(Me),
        uid: ne.value,
        hasTooltip: a.value.userOptions.buttons.tooltip && a.value.style.chart.tooltip.show,
        hasPdf: a.value.userOptions.buttons.pdf,
        hasImg: a.value.userOptions.buttons.img,
        hasXls: a.value.userOptions.buttons.csv,
        hasLabel: a.value.userOptions.buttons.labels,
        hasStack: ge.dataset.length > 1 && a.value.userOptions.buttons.stack,
        hasFullscreen: a.value.userOptions.buttons.fullscreen,
        hasTable: u.value.end - u.value.start < 200 && a.value.userOptions.buttons.table,
        isFullscreen: ve.value,
        isTooltip: r.value.showTooltip,
        isStacked: r.value.stacked,
        titles: { ...a.value.userOptions.buttonTitles },
        chartElement: ee.value,
        position: a.value.userOptions.position,
        onToggleFullscreen: ea,
        onGeneratePdf: unref(Re),
        onGenerateCsv: We,
        onGenerateImage: unref(Ie),
        onToggleTable: Ye,
        onToggleLabels: Be,
        onToggleStack: Xe,
        onToggleTooltip: Ae
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
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasImg", "hasXls", "hasLabel", "hasStack", "hasFullscreen", "hasTable", "isFullscreen", "isTooltip", "isStacked", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: "vue-ui-xy-canvas",
        style: normalizeStyle(`position: relative; aspect-ratio: ${ze.value}`),
        ref_key: "container",
        ref: B
      }, [
        ce.value ? (openBlock(), createElementBlock("canvas", {
          key: 0,
          ref_key: "canvas",
          ref: $,
          style: { width: "100%", height: "100%" },
          onMousemove: t[0] || (t[0] = (o) => da(o)),
          onMouseleave: ha
        }, null, 544)) : (openBlock(), createBlock(fs, {
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
          show: r.value.showTooltip && ae.value,
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
          isCustom: unref(Ht)(a.value.style.chart.tooltip.customFormat)
        }, {
          "tooltip-before": withCtx(() => [
            renderSlot(e.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...pe.value })), void 0, true)
          ]),
          "tooltip-after": withCtx(() => [
            renderSlot(e.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...pe.value })), void 0, true)
          ]),
          _: 3
        }, 8, ["show", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "position", "offsetY", "parent", "content", "backgroundOpacity", "isCustom"])
      ], 4),
      createBaseVNode("div", {
        ref_key: "chartSlicer",
        ref: ke,
        style: normalizeStyle(`width:100%;background:${a.value.style.chart.backgroundColor}`),
        "data-html2canvas-ignore": ""
      }, [
        a.value.style.chart.zoom.show && R3.value > 1 ? (openBlock(), createBlock(_e, {
          key: `slicer_${be.value}`,
          background: a.value.style.chart.zoom.color,
          borderColor: a.value.style.chart.backgroundColor,
          fontSize: a.value.style.chart.zoom.fontSize,
          useResetSlot: a.value.style.chart.zoom.useResetSlot,
          labelLeft: a.value.style.chart.grid.y.timeLabels.values[u.value.start] ? a.value.style.chart.grid.y.timeLabels.values[u.value.start] : "",
          labelRight: a.value.style.chart.grid.y.timeLabels.values[u.value.end - 1] ? a.value.style.chart.grid.y.timeLabels.values[u.value.end - 1] : "",
          textColor: a.value.style.chart.color,
          inputColor: a.value.style.chart.zoom.color,
          selectColor: a.value.style.chart.zoom.highlightColor,
          max: R3.value,
          min: 0,
          valueStart: u.value.start,
          valueEnd: u.value.end,
          start: u.value.start,
          "onUpdate:start": t[1] || (t[1] = (o) => u.value.start = o),
          end: u.value.end,
          "onUpdate:end": t[2] || (t[2] = (o) => u.value.end = o),
          onReset: Fe
        }, {
          "reset-action": withCtx(({ reset: o }) => [
            renderSlot(e.$slots, "reset-action", normalizeProps(guardReactiveProps({ reset: o })), void 0, true)
          ]),
          _: 3
        }, 8, ["background", "borderColor", "fontSize", "useResetSlot", "labelLeft", "labelRight", "textColor", "inputColor", "selectColor", "max", "valueStart", "valueEnd", "start", "end"])) : createCommentVNode("", true)
      ], 4),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: Le
      }, [
        a.value.style.chart.legend.show && ce.value ? (openBlock(), createBlock(C2, {
          legendSet: De.value,
          config: fa.value,
          key: `legend_${Se.value}`,
          onClickMarker: t[3] || (t[3] = ({ i: o }) => Ne(o))
        }, {
          item: withCtx(({ legend: o, index: i }) => [
            createBaseVNode("div", {
              onClick: (c2) => o.segregate(),
              style: normalizeStyle(`opacity:${w.value.includes(i) ? 0.5 : 1}`)
            }, toDisplayString(o.name), 13, Ja)
          ]),
          _: 1
        }, 8, ["legendSet", "config"])) : renderSlot(e.$slots, "legend", {
          key: 1,
          legend: De.value
        }, void 0, true)
      ], 512),
      e.$slots.watermark ? (openBlock(), createElementBlock("div", Ka, [
        renderSlot(e.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(Te) || unref(Me) })), void 0, true)
      ])) : createCommentVNode("", true),
      u.value.end - u.value.start < 200 ? (openBlock(), createBlock(R, {
        key: 3,
        hideDetails: "",
        config: {
          open: r.value.showTable,
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
            key: `table_${we.value}`,
            colNames: re.value.colNames,
            head: re.value.head,
            body: re.value.body,
            config: re.value.config,
            title: `${a.value.style.chart.title.text}${a.value.style.chart.title.subtitle.text ? ` : ${a.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: t[4] || (t[4] = (o) => r.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", { innerHTML: o }, null, 8, Qa)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, qa));
  }
};
var fl = s(el, [["__scopeId", "data-v-180df9f3"]]);
export {
  fl as default
};
//# sourceMappingURL=vue-ui-xy-canvas-BYdTxzi6-N6KEVVYG.js.map
