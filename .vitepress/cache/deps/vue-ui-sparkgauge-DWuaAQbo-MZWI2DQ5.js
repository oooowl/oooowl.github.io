import {
  fs
} from "./chunk-XKFV7VRH.js";
import {
  p
} from "./chunk-VCFIOMKF.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Gt,
  Kt,
  Lt,
  Qt,
  Ut,
  Xt,
  k,
  nr,
  oe,
  qt
} from "./chunk-TG4LWCJY.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  toDisplayString,
  unref,
  watch
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-sparkgauge-DWuaAQbo.js
var K = ["xmlns", "viewBox"];
var Q = ["id"];
var W = ["stop-color"];
var Z = ["stop-color"];
var ee = ["d", "stroke", "stroke-linecap"];
var te = ["d", "stroke", "stroke-linecap", "stroke-dashoffset"];
var ae = ["x", "y", "font-size", "fill", "font-weight"];
var ie = {
  __name: "vue-ui-sparkgauge",
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
  setup(F) {
    const l = F, { vue_ui_sparkgauge: O } = oe(), g = computed(() => !!l.dataset && Object.keys(l.dataset).length);
    onMounted(() => {
      h();
    });
    function h() {
      Xt(l.dataset) ? Kt({
        componentName: "VueUiSparkgauge",
        type: "dataset"
      }) : qt({
        datasetObject: l.dataset,
        requiredAttributes: ["value", "min", "max"]
      }).forEach((t) => {
        Kt({
          componentName: "VueUiSparkgauge",
          type: "datasetAttribute",
          property: t
        });
      });
    }
    const b = ref(Lt()), e = computed({
      get: () => k2(),
      set: (t) => t
    });
    function k2() {
      const t = c({
        userConfig: l.config,
        defaultConfig: O
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_sparkgauge[t.theme] || l.config,
          defaultConfig: t
        })
      } : t;
    }
    watch(() => l.config, (t) => {
      e.value = k2(), h();
    }, { deep: true });
    const u = computed(() => ({
      height: e.value.style.height,
      width: 128,
      base: e.value.style.basePosition
    })), o = computed(() => {
      const t = l.dataset.min ?? 0, n = l.dataset.max ?? 0, B = n - t;
      return {
        min: t,
        max: n,
        diff: B
      };
    }), a = ref(e.value.style.animation.show ? o.value.min : l.dataset.value);
    watch(() => l.dataset.value, () => {
      C(l.dataset.value || 0);
    });
    const _ = computed(() => a.value > o.value.max ? o.value.max : a.value < o.value.min ? o.value.min : a.value), x = computed(() => o.value.diff / e.value.style.animation.speedMs);
    onMounted(() => {
      C(l.dataset.value || 0);
    });
    function C(t) {
      function n() {
        a.value < t ? a.value = Math.min(a.value + x.value, t) : a.value > t && (a.value = Math.max(a.value - x.value, t)), a.value !== t && requestAnimationFrame(n);
      }
      n();
    }
    const f = computed(() => l.dataset.title ?? ""), $ = computed(() => a.value >= 0 ? (_.value - o.value.min) / o.value.diff : (Math.abs(o.value.min) - Math.abs(_.value)) / o.value.diff), w = computed(() => Ut(e.value.style.colors.min, e.value.style.colors.max, o.value.min, o.value.max, a.value)), L = computed(() => e.value.style.dataLabel.autoColor ? w.value : e.value.style.dataLabel.color), j = computed(() => e.value.style.track.autoColor ? w.value : e.value.style.track.color);
    return (t, n) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width: 100%; background:${e.value.style.background}`)
    }, [
      e.value.style.title.show && f.value && e.value.style.title.position === "top" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "vue-data-ui-sparkgauge-label",
        style: normalizeStyle(`font-size:${e.value.style.title.fontSize}px;text-align:${e.value.style.title.textAlign};font-weight:${e.value.style.title.bold ? "bold" : "normal"};color:${e.value.style.title.color}`)
      }, toDisplayString(f.value), 5)) : createCommentVNode("", true),
      g.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Qt),
        viewBox: `0 0 ${u.value.width} ${u.value.height}`,
        style: "overflow: visible; background:transparent; width:100%;"
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: `gradient_${b.value}`,
            x1: "-10%",
            y1: "100%",
            x2: "110%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": e.value.style.colors.min
            }, null, 8, W),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": e.value.style.colors.max
            }, null, 8, Z)
          ], 8, Q)
        ]),
        createBaseVNode("path", {
          d: `M10 ${u.value.base} A 1 1 0 1 1 118 ${u.value.base}`,
          stroke: e.value.style.gutter.color,
          "stroke-width": 8,
          "stroke-linecap": e.value.style.gutter.strokeLinecap,
          fill: "none"
        }, null, 8, ee),
        $.value !== 0 ? (openBlock(), createElementBlock("path", {
          key: 0,
          d: `M10 ${u.value.base} A 1 1 0 1 1 118 ${u.value.base}`,
          stroke: e.value.style.colors.showGradient ? `url(#gradient_${b.value})` : j.value,
          "stroke-width": 8,
          "stroke-linecap": e.value.style.track.strokeLinecap,
          fill: "none",
          "stroke-dasharray": 169.5,
          "stroke-dashoffset": 169.5 - 169.5 * $.value,
          class: normalizeClass({ "vue-ui-sparkgauge-track": e.value.style.animation.show }),
          style: normalizeStyle(e.value.style.animation.show ? `animation: vue-ui-sparkgauge-animation ${e.value.style.animation.speedMs}ms ease-in;` : "")
        }, null, 14, te)) : createCommentVNode("", true),
        createBaseVNode("text", {
          "text-anchor": "middle",
          x: u.value.width / 2,
          y: u.value.base + 6 + e.value.style.dataLabel.offsetY,
          "font-size": e.value.style.dataLabel.fontSize,
          fill: L.value,
          "font-weight": e.value.style.dataLabel.bold ? "bold" : "normal"
        }, toDisplayString(unref(nr)(
          e.value.style.dataLabel.formatter,
          unref(k)(a.value),
          unref(Gt)({
            p: e.value.style.dataLabel.prefix,
            v: unref(k)(a.value),
            s: e.value.style.dataLabel.suffix,
            r: e.value.style.dataLabel.rounding
          }),
          { datapoint: unref(k)(a.value), color: L.value }
        )), 9, ae)
      ], 8, K)) : createCommentVNode("", true),
      g.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 2,
        config: {
          type: "gauge",
          style: {
            backgroundColor: e.value.style.background,
            gauge: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.title.show && f.value && e.value.style.title.position === "bottom" ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: "vue-data-ui-sparkgauge-label",
        style: normalizeStyle(`font-size:${e.value.style.title.fontSize}px;text-align:${e.value.style.title.textAlign};font-weight:${e.value.style.title.bold ? "bold" : "normal"};font-weight:${e.value.style.title.bold ? "bold" : "normal"};color:${e.value.style.title.color}`)
      }, toDisplayString(f.value), 5)) : createCommentVNode("", true)
    ], 4));
  }
};
export {
  ie as default
};
//# sourceMappingURL=vue-ui-sparkgauge-DWuaAQbo-MZWI2DQ5.js.map
