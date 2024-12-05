import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
import {
  x
} from "./chunk-AIHOZQHZ.js";
import {
  p
} from "./chunk-FSTZFDG3.js";
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
  Jt,
  nr,
  te
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  guardReactiveProps,
  mergeProps,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-timer-Brr7buaM.js
var he = class {
  constructor(A, k2, T, H = true, x2 = true) {
    this.interval = k2, this.elapsed = 0, this.isPaused = false;
    const S = `
            let interval;
            let elapsed = 0;
            let paused = false;
            let startTime;
            let tickInterval;

            onmessage = function(e) {
                const { action, data } = e.data;

                switch(action) {
                    case 'start':
                        startTime = Date.now();
                        tickInterval = data.interval;
                        elapsed = 0;
                        paused = false;
                        interval = setInterval(() => {
                            elapsed += tickInterval;
                            postMessage({ elapsed, timestamp: Date.now() });
                        }, tickInterval);
                        break;
                    
                    case 'pause':
                        paused = true;
                        clearInterval(interval);
                        elapsed = Date.now() - startTime;
                        break;

                    case 'resume':
                        if (paused) {
                            startTime = Date.now() - elapsed;
                            interval = setInterval(() => {
                                elapsed += tickInterval;
                                postMessage({ elapsed, timestamp: Date.now() });
                            }, tickInterval);
                        }
                        paused = false;
                        break;

                    case 'stop':
                        clearInterval(interval);
                        elapsed = 0;
                        postMessage({ elapsed });
                        break;

                    case 'reset':
                        elapsed = 0;
                        clearInterval(interval);
                        postMessage({ elapsed });
                        break;

                    case 'lap':
                        postMessage({
                            elapsed,
                            timestamp: Date.now(),
                            action: 'lap'
                        });
                        break;

                    default:
                        break;
                }
            };
        `, R = new Blob([S], { type: "application/javascript" }), m = URL.createObjectURL(R), i = new Worker(m);
    function I(c2) {
      let e = Math.floor(c2 / 1e3), w = Math.floor(c2 % 1e3 / 10), y = Math.floor(e / 3600), t = Math.floor(e % 3600 / 60), d = e % 60, u2 = "";
      return x2 && (u2 += String(y).padStart(2, "0") + ":"), u2 += String(t).padStart(2, "0") + ":", u2 += String(d).padStart(2, "0"), H && (u2 += "." + String(w).padStart(2, "0")), u2;
    }
    this.start = () => {
      this.isPaused = false, i.postMessage({ action: "start", data: { interval: this.interval } });
    }, this.pause = () => {
      this.isPaused ? this.resume() : (this.isPaused = true, i.postMessage({ action: "pause" }));
    }, this.resume = () => {
      this.isPaused && (i.postMessage({ action: "resume" }), this.isPaused = false);
    }, this.stop = () => {
      i.postMessage({ action: "stop" }), this.isPaused = false;
    }, this.reset = () => {
      i.postMessage({ action: "reset" }), this.elapsed = 0, this.isPaused = false;
    }, this.restart = () => {
      this.stop(), this.start();
    }, this.lap = () => new Promise((c2) => {
      i.postMessage({ action: "lap" });
      const e = (w) => {
        const { elapsed: y, timestamp: t, action: d } = w.data;
        if (d === "lap") {
          const u2 = I(y);
          c2({
            timestamp: t || 0,
            elapsed: y,
            formatted: u2
          });
        }
      };
      i.addEventListener("message", e, { once: true });
    }), i.onmessage = (c2) => {
      const { elapsed: e, timestamp: w } = c2.data;
      this.elapsed = e, A({
        timestamp: w || 0,
        elapsed: this.elapsed,
        formatted: I(this.elapsed)
      });
    }, i.onerror = (c2) => {
      T && T(c2);
    };
  }
};
var ve = ["xmlns", "viewBox"];
var pe = { key: 0 };
var fe = ["id"];
var we = ["stop-color"];
var ke = ["stop-color"];
var ge = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var me = ["d", "stroke", "stroke-width"];
var ye = ["r", "fill", "stroke", "stroke-width"];
var be = ["r", "fill", "stroke", "stroke-width"];
var _e = ["x", "y"];
var Me = ["x", "y", "font-size", "fill", "font-weight"];
var Ce = {
  key: 0,
  class: "vue-ui-timer-controls"
};
var Te = ["title"];
var xe = ["title"];
var Ie = ["title"];
var $e = ["title"];
var Pe = ["title"];
var Se = {
  __name: "vue-ui-timer",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["start", "pause", "reset", "restart", "lap"],
  setup(G, { expose: A, emit: k2 }) {
    const T = G, { vue_ui_timer: H } = te(), x2 = ref(null), S = ref(null), R = ref(null), m = ref(null), i = ref(Dt()), I = ref(0);
    onMounted(() => {
      c2();
    });
    function c2() {
      if (e.value.responsive) {
        const a = O(() => {
          const { width: o, height: h } = k({
            chart: x2.value,
            title: e.value.style.title.text ? S.value : null,
            legend: R.value
          });
          t.value.width = o, t.value.height = h, t.value.tracker.core = nr({
            relator: Math.min(o, h),
            adjuster: e.value.style.width,
            source: 6 * e.value.stopwatch.tracker.radiusRatio,
            threshold: 1,
            fallback: 1
          }), t.value.tracker.aura = nr({
            relator: Math.min(o, h),
            adjuster: e.value.style.width,
            source: 12 * e.value.stopwatch.tracker.aura.radiusRatio,
            threshold: 1,
            fallback: 1
          }), t.value.label = nr({
            relator: Math.min(o, h),
            adjuster: e.value.style.width,
            source: e.value.stopwatch.label.fontSize,
            threshold: 10,
            fallback: 10
          });
        });
        m.value = new ResizeObserver(a), m.value.observe(x2.value.parentNode);
      }
    }
    onBeforeUnmount(() => {
      m.value && m.value.disconnect();
    });
    const e = computed({
      get: () => w(),
      set: (a) => a
    });
    function w() {
      return c({
        userConfig: T.config,
        defaultConfig: H
      });
    }
    watch(() => T.config, (a) => {
      e.value = w(), c2(), I.value += 1;
    }, { deep: true });
    const y = computed(() => {
      if (e.value.stopwatch.showHours && e.value.stopwatch.showHundredth)
        return "00:00:00.00";
      if (e.value.stopwatch.showHours && !e.value.stopwatch.showHundredth)
        return "00:00:00";
      if (!e.value.stopwatch.showHours && e.value.stopwatch.showHundredth)
        return "00:00.00";
      if (!e.value.stopwatch.showHours && !e.value.stopwatch.showHundredth)
        return "00:00";
    }), t = ref({
      height: e.value.style.height,
      width: e.value.style.width,
      tracker: {
        core: 6 * e.value.stopwatch.tracker.radiusRatio,
        aura: 12 * e.value.stopwatch.tracker.aura.radiusRatio
      },
      label: e.value.stopwatch.label.fontSize
    }), d = ref(0), u2 = new he(
      (a) => X(a),
      10,
      "",
      e.value.stopwatch.showHundredth,
      e.value.stopwatch.showHours
    ), D = ref(true), s2 = ref(false), p2 = ref(false);
    function L() {
      k2("start"), D.value && u2.start(), D.value = false, s2.value = true;
    }
    function N() {
      s2.value && (k2("reset"), u2.stop(), b.value = [], D.value = true, s2.value = false);
    }
    function B() {
      p2.value = !p2.value, k2("pause", d.value), u2.pause();
    }
    function j() {
      s2.value && (p2.value = false, k2("restart"), b.value = [], u2.restart());
    }
    const b = ref([]);
    async function F() {
      if (!s2.value || p2.value) return;
      const a = await u2.lap();
      a && (b.value.push(a), k2("lap", b.value));
    }
    function X({ timestamp: a, elapsed: o, formatted: h }) {
      d.value = { timestamp: a, elapsed: o, formatted: h };
    }
    const g = computed(() => Math.min(t.value.width, t.value.height) / 2.5 * e.value.stopwatch.track.radiusRatio);
    function q(a, o) {
      const $ = 360 / (o * 1e3);
      return a * $ % 360;
    }
    function J(a) {
      let o = a * (Math.PI / 180), h = t.value.width / 2 + g.value * Math.cos(o), $ = t.value.height / 2 + g.value * Math.sin(o);
      return { cx: h, cy: $ };
    }
    const _ = computed(() => {
      const a = q(d.value.elapsed, e.value.stopwatch.cycleSeconds), { cx: o, cy: h } = J(a - 90), $ = a > 180 ? 1 : 0;
      return {
        cx: o || t.value.width / 2,
        cy: h || t.value.height / 2 - g.value,
        largeArcFlag: $,
        sweepFlag: 1
      };
    });
    return A({
      start: L,
      pause: B,
      reset: N,
      restart: j,
      lap: F
    }), (a, o) => (openBlock(), createElementBlock("div", {
      ref_key: "timerChart",
      ref: x2,
      class: "vue-ui-timer",
      style: normalizeStyle({
        fontFamily: e.value.style.fontFamily,
        width: "100%",
        height: e.value.responsive ? "100%" : "auto",
        textAlign: "center"
      })
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: S,
        style: normalizeStyle({
          width: "100%",
          background: e.value.style.backgroundColor
        })
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${I.value}`,
          config: {
            title: {
              cy: "title",
              ...e.value.style.title
            },
            subtitle: {
              cy: "subtitle",
              ...e.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 4)) : createCommentVNode("", true),
      (openBlock(), createElementBlock("svg", {
        xmlns: unref(Jt),
        viewBox: `0 0 ${t.value.width <= 0 ? 10 : t.value.width} ${t.value.height <= 0 ? 10 : t.value.height}`,
        style: normalizeStyle({
          maxWidth: "100%",
          overflow: "visible",
          background: e.value.style.backgroundColor
        })
      }, [
        createVNode(p),
        e.value.stopwatch.tracker.gradient.show ? (openBlock(), createElementBlock("defs", pe, [
          createBaseVNode("radialGradient", {
            id: `tracker_gradient_${i.value}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": e.value.stopwatch.tracker.gradient.color
            }, null, 8, we),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.stopwatch.tracker.fill
            }, null, 8, ke)
          ], 8, fe)
        ])) : createCommentVNode("", true),
        createBaseVNode("circle", {
          cx: t.value.width / 2,
          cy: t.value.height / 2,
          r: g.value,
          fill: e.value.stopwatch.track.fill,
          stroke: e.value.stopwatch.track.stroke,
          "stroke-width": e.value.stopwatch.track.strokeWidth
        }, null, 8, ge),
        e.value.stopwatch.cycleTrack.show ? (openBlock(), createElementBlock("path", {
          key: 1,
          d: `M ${t.value.width / 2},${t.value.height / 2 - g.value} A ${g.value},${g.value} 0 ${_.value.largeArcFlag},${_.value.sweepFlag} ${_.value.cx},${_.value.cy}`,
          stroke: e.value.stopwatch.cycleTrack.stroke,
          "stroke-width": e.value.stopwatch.cycleTrack.strokeWidth,
          "stroke-linecap": "round",
          fill: "none"
        }, null, 8, me)) : createCommentVNode("", true),
        createBaseVNode("circle", mergeProps(_.value, {
          r: t.value.tracker.core,
          fill: e.value.stopwatch.tracker.gradient.show ? `url(#tracker_gradient_${i.value})` : e.value.stopwatch.tracker.fill,
          stroke: e.value.stopwatch.tracker.stroke,
          "stroke-width": e.value.stopwatch.tracker.strokeWidth
        }), null, 16, ye),
        e.value.stopwatch.tracker.aura.show ? (openBlock(), createElementBlock("circle", mergeProps({ key: 2 }, _.value, {
          r: t.value.tracker.aura,
          fill: `${e.value.stopwatch.tracker.aura.fill}20`,
          stroke: e.value.stopwatch.tracker.aura.stroke,
          "stroke-width": e.value.stopwatch.tracker.aura.strokeWidth
        }), null, 16, be)) : createCommentVNode("", true),
        a.$slots.time ? (openBlock(), createElementBlock("foreignObject", {
          key: 3,
          x: t.value.width / 2,
          y: t.value.height / 2,
          height: "0.1",
          width: "0.1",
          style: { overflow: "visible" }
        }, [
          renderSlot(a.$slots, "time", normalizeProps(guardReactiveProps({ ...d.value })), void 0, true)
        ], 8, _e)) : (openBlock(), createElementBlock("text", {
          key: 4,
          x: t.value.width / 2,
          y: t.value.height / 2 + t.value.label / 4,
          "font-size": t.value.label,
          "text-anchor": "middle",
          fill: e.value.stopwatch.label.color,
          "font-weight": e.value.stopwatch.label.bold ? "bold" : "normal",
          style: { "font-variant-numeric": "tabular-nums !important" }
        }, toDisplayString(d.value.formatted || y.value), 9, Me))
      ], 12, ve)),
      createBaseVNode("div", {
        ref_key: "chartLegend",
        ref: R,
        style: normalizeStyle({ width: "100%", backgroundColor: e.value.stopwatch.legend.backgroundColor })
      }, [
        a.$slots.controls ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Ce, [
          e.value.stopwatch.legend.buttons.start ? (openBlock(), createElementBlock("button", {
            key: 0,
            title: e.value.stopwatch.legend.buttonTitles.start,
            onClick: L,
            class: "vue-ui-timer-button",
            style: normalizeStyle({
              opacity: s2.value ? 0.2 : 1,
              cursor: s2.value ? "default" : "pointer"
            })
          }, [
            createVNode(u, {
              name: "play",
              stroke: e.value.stopwatch.legend.buttons.iconColor
            }, null, 8, ["stroke"])
          ], 12, Te)) : createCommentVNode("", true),
          e.value.stopwatch.legend.buttons.pause ? (openBlock(), createElementBlock("button", {
            key: 1,
            title: p2.value ? e.value.stopwatch.legend.buttonTitles.resume : e.value.stopwatch.legend.buttonTitles.pause,
            onClick: B,
            class: "vue-ui-timer-button",
            style: normalizeStyle({
              opacity: s2.value ? 1 : 0.2,
              cursor: s2.value ? "pointer" : "default"
            })
          }, [
            createVNode(u, {
              name: "pause",
              stroke: e.value.stopwatch.legend.buttons.iconColor
            }, null, 8, ["stroke"])
          ], 12, xe)) : createCommentVNode("", true),
          e.value.stopwatch.legend.buttons.reset ? (openBlock(), createElementBlock("button", {
            key: 2,
            title: e.value.stopwatch.legend.buttonTitles.reset,
            onClick: N,
            class: "vue-ui-timer-button",
            style: normalizeStyle({
              opacity: s2.value ? 1 : 0.2,
              cursor: s2.value ? "pointer" : "default"
            })
          }, [
            createVNode(u, {
              name: "stop",
              stroke: e.value.stopwatch.legend.buttons.iconColor
            }, null, 8, ["stroke"])
          ], 12, Ie)) : createCommentVNode("", true),
          e.value.stopwatch.legend.buttons.restart ? (openBlock(), createElementBlock("button", {
            key: 3,
            title: e.value.stopwatch.legend.buttonTitles.restart,
            onClick: j,
            class: "vue-ui-timer-button",
            style: normalizeStyle({
              opacity: s2.value ? 1 : 0.2,
              cursor: s2.value ? "pointer" : "default"
            })
          }, [
            createVNode(u, {
              name: "restart",
              stroke: e.value.stopwatch.legend.buttons.iconColor
            }, null, 8, ["stroke"])
          ], 12, $e)) : createCommentVNode("", true),
          e.value.stopwatch.legend.buttons.lap ? (openBlock(), createElementBlock("button", {
            key: 4,
            title: e.value.stopwatch.legend.buttonTitles.lap,
            onClick: F,
            class: "vue-ui-timer-button",
            style: normalizeStyle({
              opacity: s2.value && !p2.value ? 1 : 0.2,
              cursor: s2.value && !p2.value ? "pointer" : "default"
            })
          }, [
            createVNode(u, {
              name: "lap",
              stroke: e.value.stopwatch.legend.buttons.iconColor
            }, null, 8, ["stroke"])
          ], 12, Pe)) : createCommentVNode("", true)
        ])),
        renderSlot(a.$slots, "controls", normalizeProps(guardReactiveProps({
          start: L,
          pause: B,
          reset: N,
          restart: j,
          lap: F,
          laps: b.value,
          isRunning: s2.value,
          isPaused: p2.value,
          ...d.value
        })), void 0, true),
        renderSlot(a.$slots, "laps", normalizeProps(guardReactiveProps({
          laps: b.value,
          lap: F,
          isRunning: s2.value,
          isPaused: p2.value,
          ...d.value
        })), void 0, true)
      ], 4)
    ], 4));
  }
};
var Be = s(Se, [["__scopeId", "data-v-8609e7e7"]]);
export {
  Be as default
};
//# sourceMappingURL=vue-ui-timer-Brr7buaM-RI7P6H5D.js.map
