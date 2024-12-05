import {
  O,
  k
} from "./chunk-GUAP4JK5.js";
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
  c
} from "./chunk-OBQGP7GO.js";
import "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  He,
  Jt,
  R,
  Zt,
  jt,
  qt,
  rt,
  te,
  tr
} from "./chunk-4SKEOFB2.js";
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
  useCssVars,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-relation-circle-OXfdAyky.js
var He2 = ["id"];
var Je = ["xmlns", "viewBox"];
var Ke = ["cx", "cy", "r", "stroke", "stroke-width"];
var Qe = { key: 0 };
var Ze = ["stroke", "d", "stroke-width"];
var et = { key: 1 };
var tt = ["stroke", "x1", "x2", "y1", "y2"];
var lt = ["text-anchor", "transform", "x", "y", "onClick", "font-weight", "font-size", "fill"];
var nt = ["cx", "cy", "fill", "onClick", "r"];
var rt2 = {
  key: 5,
  class: "vue-data-ui-watermark"
};
var st = {
  __name: "vue-ui-relation-circle",
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
  setup(ae2, { expose: ie }) {
    const d = ae2;
    useCssVars((e) => ({
      "47419f48": fe.value,
      "77774d27": ve.value,
      df46026e: ge.value
    }));
    const { vue_ui_relation_circle: oe } = te(), F = computed(() => !!d.dataset && Object.keys(d.dataset).length), k2 = ref(Dt()), M = ref(0), _ = ref(null), j = ref(null), B = ref(null), G = ref(null), U = ref(0), l = computed({
      get: () => D(),
      set: (e) => e
    });
    function D() {
      const e = c({
        userConfig: d.config,
        defaultConfig: oe
      });
      return e.theme ? {
        ...c({
          userConfig: He.vue_ui_relation_circle[e.theme] || d.config,
          defaultConfig: e
        }),
        customPalette: R[e.theme] || rt
      } : e;
    }
    watch(() => d.config, (e) => {
      l.value = D(), H(), U.value += 1;
    }, { deep: true });
    const { isPrinting: V, isImaging: W, generatePdf: X, generateImage: Y } = re({
      elementId: `relation_circle_${k2.value}`,
      fileName: l.value.style.title.text || "vue-ui-relation-circle"
    }), ue = computed(() => l.value.userOptions.show && !l.value.style.title.text), q = computed(() => tr(l.value.customPalette)), g = ref([]), p2 = ref([]), o = ref({}), v = ref([]), ce = ref(0), T = computed(() => d.dataset.slice(0, l.value.style.limit)), E = ref(l.value.style.size), u = ref({
      height: l.value.style.size,
      width: l.value.style.size
    }), h = computed({
      get() {
        return E.value * l.value.style.circle.radiusProportion;
      },
      set(e) {
        return e;
      }
    }), de = computed(() => l.value.style.links.curved), ve = computed(() => `${l.value.style.animation.speedMs}ms`), fe = computed(() => h.value * 2), ge = computed(() => h.value * 4), w = ref(null);
    onMounted(() => {
      H(), document.getElementById(`relation_circle_${k2.value}`).addEventListener("click", J);
    });
    function H() {
      if (jt(d.dataset) ? qt({
        componentName: "VueUiRelationCircle",
        type: "dataset"
      }) : d.dataset.forEach((e, r) => {
        Zt({
          datasetObject: e,
          requiredAttributes: ["id", "label", "relations", "weights"]
        }).forEach((t) => {
          qt({
            componentName: "VueUiRelationCircle",
            type: "datasetSerieAttribute",
            property: t,
            index: r
          });
        });
      }), l.value.responsive) {
        const e = O(() => {
          const { width: r, height: t } = k({
            chart: _.value,
            title: l.value.style.title.text ? j.value : null,
            source: B.value,
            noTitle: G.value
          });
          E.value = Math.min(r, t), u.value.width = r, u.value.height = t, h.value = E.value * l.value.style.circle.radiusProportion, g.value = [], p2.value = [], K(), Q();
        });
        w.value = new ResizeObserver(e), w.value.observe(_.value.parentNode);
      } else
        g.value = [], p2.value = [], K(), Q();
    }
    onBeforeUnmount(() => {
      document.getElementById(`relation_circle_${k2.value}`).removeEventListener("click", J), w.value && w.value.disconnect();
    });
    function J(e) {
      const r = e.target;
      r && Array.from(r.classList).includes("vue-ui-user-options") || r && Array.from(r.classList).includes("vue-ui-user-options-summary") || r && Array.from(r.classList).includes("vue-data-ui-button") || r && Array.from(r.classList).includes("vue-ui-relation-circle-legend") || (o.value = {}, v.value = []);
    }
    function K() {
      const e = 6.28319 / T.value.length, r = 360 / T.value.length;
      let t = 0, s2 = 0;
      T.value.forEach(($, L) => {
        const Ce = h.value * Math.cos(t) + u.value.width / 2, we = h.value * Math.sin(t) + u.value.height / 2 + l.value.style.circle.offsetY;
        g.value.push({ x: Ce, y: we, ...$, color: $.color ? $.color : q.value[L] ? q.value[L] : rt[L], regAngle: s2 }), t += e, s2 += r;
      });
    }
    function Q() {
      g.value.forEach((e) => {
        g.value.filter((t) => t.relations.includes(e.id)).forEach((t, s2) => {
          p2.value.push({
            weight: e.weights && e.weights[s2] ? e.weights[s2] : 1,
            relationId: `${e.id}_${t.id}`,
            x1: e.x,
            y1: e.y,
            x2: t.x,
            y2: t.y,
            colorSource: e.color,
            colorTarget: t.color,
            ...e
          });
        });
      });
    }
    const he = computed(() => Math.max(...p2.value.map((e) => e.weight)));
    function ye(e) {
      return Object.hasOwn(o.value, "x") ? v.value.includes(e.id) ? "opacity:1" : "opacity:0.1" : "opacity:1";
    }
    function Z(e) {
      return Object.hasOwn(o.value, "x") ? e.colorTarget : e.colorSource;
    }
    function ee(e) {
      return Object.hasOwn(o.value, "x") ? v.value.includes(e.id) && e.relationId === `${e.id}_${o.value.id}` || e.relationId === `${o.value.id}_${e.id}` ? `opacity:1;stroke-width:${le(e)}` : "opacity: 0" : "opacity: 1";
    }
    function me(e) {
      return e.regAngle > 90 && e.regAngle < 270 ? "end" : "start";
    }
    function pe(e) {
      return e.regAngle > 90 && e.regAngle < 270 ? e.x - 5 : e.x + 5;
    }
    function ke(e) {
      return Object.hasOwn(o.value, "x") ? o.value.id === e.id || v.value.includes(e.id) ? "opacity:1" : "opacity:0.2" : "opacity:1";
    }
    function _e(e) {
      return e.regAngle > 90 && e.regAngle < 270 ? `rotate(${e.regAngle + 180},${e.x},${e.y})` : `rotate(${e.regAngle},${e.x},${e.y})`;
    }
    function te2(e) {
      ce.value = 360 - e.regAngle, o.value.id && e.id === o.value.id ? (o.value = {}, v.value = []) : (o.value = e, v.value = [...e.relations]);
    }
    function le(e) {
      return e.weight / he.value * l.value.style.links.maxWidth;
    }
    const x2 = ref(false);
    function $e(e) {
      x2.value = e, M.value += 1;
    }
    const b = ref(false);
    function z() {
      b.value = !b.value;
    }
    return ie({
      generatePdf: X,
      generateImage: Y,
      toggleAnnotator: z
    }), (e, r) => (openBlock(), createElementBlock("div", {
      ref_key: "relationCircleChart",
      ref: _,
      class: "vue-ui-relation-circle",
      style: normalizeStyle(`width:100%;background:${l.value.style.backgroundColor};text-align:center;${l.value.responsive ? "height: 100%" : ""}`),
      id: `relation_circle_${k2.value}`
    }, [
      l.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: _.value,
        backgroundColor: l.value.style.backgroundColor,
        color: l.value.style.color,
        active: b.value,
        onClose: z
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      ue.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        ref_key: "noTitle",
        ref: G,
        class: "vue-data-ui-no-title-space",
        style: "height:36px; width: 100%;background:transparent"
      }, null, 512)) : createCommentVNode("", true),
      l.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 2,
        ref_key: "chartTitle",
        ref: j,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${U.value}`,
          config: {
            title: {
              cy: "relation-div-title",
              ...l.value.style.title
            },
            subtitle: {
              cy: "relation-div-subtitle",
              ...l.value.style.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ], 512)) : createCommentVNode("", true),
      l.value.userOptions.show && F.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_options_${M.value}`,
        backgroundColor: l.value.style.backgroundColor,
        color: l.value.style.color,
        isPrinting: unref(V),
        isImaging: unref(W),
        uid: k2.value,
        hasPdf: l.value.userOptions.buttons.pdf,
        hasImg: l.value.userOptions.buttons.img,
        hasFullscreen: l.value.userOptions.buttons.img,
        hasXls: false,
        isFullscreen: x2.value,
        titles: { ...l.value.userOptions.buttonTitles },
        chartElement: _.value,
        position: l.value.userOptions.position,
        hasAnnotator: l.value.userOptions.buttons.annotator,
        isAnnotation: b.value,
        onToggleFullscreen: $e,
        onGeneratePdf: unref(X),
        onGenerateImage: unref(Y),
        onToggleAnnotator: z
      }, createSlots({ _: 2 }, [
        e.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        e.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        e.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: s2 }) => [
            renderSlot(e.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: s2 })), void 0, true)
          ]),
          key: "2"
        } : void 0,
        e.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: t, isAnnotator: s2 }) => [
            renderSlot(e.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: t, isAnnotator: s2 })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      F.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        class: normalizeClass([{ "vue-data-ui-fullscreen--on": x2.value, "vue-data-ui-fulscreen--off": !x2.value }, "relation-circle"]),
        viewBox: `0 0 ${u.value.width <= 0 ? 10 : u.value.width} ${u.value.height <= 0 ? 10 : u.value.height}`,
        width: "100%",
        style: "user-select:none; background:transparent"
      }, [
        createVNode(p),
        createBaseVNode("circle", {
          cx: (u.value.width <= 0 ? 1e-4 : u.value.width) / 2,
          cy: (u.value.height <= 0 ? 1e-4 : u.value.height) / 2 + l.value.style.circle.offsetY,
          r: h.value <= 0 ? 1e-4 : h.value,
          stroke: l.value.style.circle.stroke,
          "stroke-width": l.value.style.circle.strokeWidth,
          fill: "transparent",
          class: "main-circle"
        }, null, 8, Ke),
        de.value ? (openBlock(), createElementBlock("g", Qe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value, (t, s2) => (openBlock(), createElementBlock("path", {
            key: `relation_${s2}`,
            style: normalizeStyle(ee(t)),
            stroke: Z(t),
            class: normalizeClass(["relation", { "vue-ui-relation-circle-selected": o.value.hasOwnProperty("id") && v.value.includes(t.id) }]),
            d: `M${t.x1},${t.y1} C${t.x1},${t.y1} ${u.value.width / 2},${u.value.height / 2 + l.value.style.circle.offsetY} ${t.x2},${t.y2}`,
            fill: "none",
            "stroke-width": le(t),
            "stroke-linecap": "round"
          }, null, 14, Ze))), 128))
        ])) : (openBlock(), createElementBlock("g", et, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value, (t, s2) => (openBlock(), createElementBlock("line", {
            key: `relation_${s2}`,
            stroke: Z(t),
            style: normalizeStyle(ee(t)),
            x1: t.x1,
            x2: t.x2,
            y1: t.y1,
            y2: t.y2,
            class: normalizeClass({ "vue-ui-relation-circle-selected": o.value.hasOwnProperty("id") && v.value.includes(t.id) }),
            "stroke-linecap": "round"
          }, null, 14, tt))), 128))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (t, s2) => (openBlock(), createElementBlock("text", {
          key: `plot_text_${s2}`,
          "text-anchor": me(t),
          transform: _e(t),
          x: pe(t),
          y: t.y + 5,
          onClick: ($) => te2(t),
          class: "vue-ui-relation-circle-legend",
          "transform-origin": "start",
          "font-weight": o.value.id === t.id ? "900" : "400",
          style: normalizeStyle(`font-family:${l.value.style.fontFamily};${ke(t)}`),
          "font-size": l.value.style.labels.fontSize,
          fill: l.value.style.labels.color
        }, toDisplayString(t.label), 13, lt))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (t, s2) => (openBlock(), createElementBlock("circle", {
          cx: t.x,
          cy: t.y,
          key: `plot_${s2}`,
          style: normalizeStyle(ye(t)),
          class: "vue-ui-relation-circle-plot",
          fill: l.value.style.plot.color,
          onClick: ($) => te2(t),
          r: l.value.style.plot.radius
        }, null, 12, nt))), 128)),
        renderSlot(e.$slots, "svg", { svg: u.value }, void 0, true)
      ], 10, Je)) : createCommentVNode("", true),
      e.$slots.watermark ? (openBlock(), createElementBlock("div", rt2, [
        renderSlot(e.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(V) || unref(W) })), void 0, true)
      ])) : createCommentVNode("", true),
      e.$slots.source ? (openBlock(), createElementBlock("div", {
        key: 6,
        ref_key: "source",
        ref: B,
        dir: "auto"
      }, [
        renderSlot(e.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      F.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
        config: {
          type: "relationCircle",
          style: {
            backgroundColor: l.value.style.backgroundColor,
            relationCircle: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"]))
    ], 12, He2));
  }
};
var yt = s(st, [["__scopeId", "data-v-a4837ff7"]]);
export {
  yt as default
};
//# sourceMappingURL=vue-ui-relation-circle-OXfdAyky-PMISX4LX.js.map
