import {
  M,
  O
} from "./chunk-NF5J7GNE.js";
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
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Kt,
  Lt,
  Qt,
  R,
  Xt,
  et,
  oe,
  or,
  qt
} from "./chunk-TG4LWCJY.js";
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-relation-circle-nRf1pvD0.js
var De = ["id"];
var Ve = ["xmlns", "viewBox"];
var We = ["cx", "cy", "r", "stroke", "stroke-width"];
var Xe = { key: 0 };
var Ye = ["stroke", "d", "stroke-width"];
var qe = { key: 1 };
var He = ["stroke", "x1", "x2", "y1", "y2"];
var Je = ["text-anchor", "transform", "x", "y", "onClick", "font-weight", "font-size", "fill"];
var Ke = ["cx", "cy", "fill", "onClick", "r"];
var Qe = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var Ze = {
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
  setup(le, { expose: re }) {
    const d = le;
    useCssVars((e) => ({
      db99e4e4: ue.value,
      "1847af26": ae.value,
      "36a818e2": oe2.value
    }));
    const { vue_ui_relation_circle: se2 } = oe(), P = computed(() => !!d.dataset && Object.keys(d.dataset).length), m = ref(Lt()), N = ref(0), x2 = ref(null), S = ref(null), R2 = ref(0), l = computed({
      get: () => T(),
      set: (e) => e
    });
    function T() {
      const e = c({
        userConfig: d.config,
        defaultConfig: se2
      });
      return e.theme ? {
        ...c({
          userConfig: Ge.vue_ui_relation_circle[e.theme] || d.config,
          defaultConfig: e
        }),
        customPalette: R[e.theme] || et
      } : e;
    }
    watch(() => d.config, (e) => {
      l.value = T(), D(), R2.value += 1;
    }, { deep: true });
    const { isPrinting: M2, isImaging: j, generatePdf: B, generateImage: G } = se({
      elementId: `relation_circle_${m.value}`,
      fileName: l.value.style.title.text || "vue-ui-relation-circle"
    }), U = computed(() => or(l.value.customPalette)), f = ref([]), y = ref([]), n = ref({}), v = ref([]), ne = ref(0), A = computed(() => d.dataset.slice(0, l.value.style.limit)), I = ref(l.value.style.size), i = ref({
      height: l.value.style.size,
      width: l.value.style.size
    }), g = computed({
      get() {
        return I.value * l.value.style.circle.radiusProportion;
      },
      set(e) {
        return e;
      }
    }), ie2 = computed(() => l.value.style.links.curved), ae = computed(() => `${l.value.style.animation.speedMs}ms`), ue = computed(() => g.value * 2), oe2 = computed(() => g.value * 4), C = ref(null);
    onMounted(() => {
      D(), document.getElementById(`relation_circle_${m.value}`).addEventListener("click", V);
    });
    function D() {
      if (Xt(d.dataset) ? Kt({
        componentName: "VueUiRelationCircle",
        type: "dataset"
      }) : d.dataset.forEach((e, r) => {
        qt({
          datasetObject: e,
          requiredAttributes: ["id", "label", "relations", "weights"]
        }).forEach((t) => {
          Kt({
            componentName: "VueUiRelationCircle",
            type: "datasetSerieAttribute",
            property: t,
            index: r
          });
        });
      }), l.value.responsive) {
        const e = O(() => {
          const { width: r, height: t } = M({
            chart: x2.value,
            title: l.value.style.title.text ? S.value : null
          });
          I.value = Math.min(r, t), i.value.width = r, i.value.height = t, g.value = I.value * l.value.style.circle.radiusProportion, f.value = [], y.value = [], W(), X();
        });
        C.value = new ResizeObserver(e), C.value.observe(x2.value.parentNode);
      } else
        f.value = [], y.value = [], W(), X();
    }
    onBeforeUnmount(() => {
      document.getElementById(`relation_circle_${m.value}`).removeEventListener("click", V), C.value && C.value.disconnect();
    });
    function V(e) {
      const r = e.target;
      r && Array.from(r.classList).includes("vue-ui-user-options") || r && Array.from(r.classList).includes("vue-ui-user-options-summary") || r && Array.from(r.classList).includes("vue-data-ui-button") || r && Array.from(r.classList).includes("vue-ui-relation-circle-legend") || (n.value = {}, v.value = []);
    }
    function W() {
      const e = 6.28319 / A.value.length, r = 360 / A.value.length;
      let t = 0, a = 0;
      A.value.forEach((p2, F) => {
        const me = g.value * Math.cos(t) + i.value.width / 2, pe = g.value * Math.sin(t) + i.value.height / 2 + l.value.style.circle.offsetY;
        f.value.push({ x: me, y: pe, ...p2, color: p2.color ? p2.color : U.value[F] ? U.value[F] : et[F], regAngle: a }), t += e, a += r;
      });
    }
    function X() {
      f.value.forEach((e) => {
        f.value.filter((t) => t.relations.includes(e.id)).forEach((t, a) => {
          y.value.push({
            weight: e.weights && e.weights[a] ? e.weights[a] : 1,
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
    const ce = computed(() => Math.max(...y.value.map((e) => e.weight)));
    function de(e) {
      return Object.hasOwn(n.value, "x") ? v.value.includes(e.id) ? "opacity:1" : "opacity:0.1" : "opacity:1";
    }
    function Y(e) {
      return Object.hasOwn(n.value, "x") ? e.colorTarget : e.colorSource;
    }
    function q(e) {
      return Object.hasOwn(n.value, "x") ? v.value.includes(e.id) && e.relationId === `${e.id}_${n.value.id}` || e.relationId === `${n.value.id}_${e.id}` ? `opacity:1;stroke-width:${J(e)}` : "opacity: 0" : "opacity: 1";
    }
    function ve(e) {
      return e.regAngle > 90 && e.regAngle < 270 ? "end" : "start";
    }
    function fe(e) {
      return e.regAngle > 90 && e.regAngle < 270 ? e.x - 5 : e.x + 5;
    }
    function ge(e) {
      return Object.hasOwn(n.value, "x") ? n.value.id === e.id || v.value.includes(e.id) ? "opacity:1" : "opacity:0.2" : "opacity:1";
    }
    function he(e) {
      return e.regAngle > 90 && e.regAngle < 270 ? `rotate(${e.regAngle + 180},${e.x},${e.y})` : `rotate(${e.regAngle},${e.x},${e.y})`;
    }
    function H(e) {
      ne.value = 360 - e.regAngle, n.value.id && e.id === n.value.id ? (n.value = {}, v.value = []) : (n.value = e, v.value = [...e.relations]);
    }
    function J(e) {
      return e.weight / ce.value * l.value.style.links.maxWidth;
    }
    const w = ref(false);
    function ye(e) {
      w.value = e, N.value += 1;
    }
    return re({
      generatePdf: B,
      generateImage: G
    }), (e, r) => (openBlock(), createElementBlock("div", {
      ref_key: "relationCircleChart",
      ref: x2,
      class: "vue-ui-relation-circle",
      style: normalizeStyle(`width:100%;background:${l.value.style.backgroundColor};text-align:center;${l.value.responsive ? "height: 100%" : ""}`),
      id: `relation_circle_${m.value}`
    }, [
      l.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "chartTitle",
        ref: S,
        style: "width:100%;background:transparent"
      }, [
        (openBlock(), createBlock(x, {
          key: `title_${R2.value}`,
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
      l.value.userOptions.show && P.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_options_${N.value}`,
        backgroundColor: l.value.style.backgroundColor,
        color: l.value.style.color,
        isPrinting: unref(M2),
        isImaging: unref(j),
        uid: m.value,
        hasPdf: l.value.userOptions.buttons.pdf,
        hasImg: l.value.userOptions.buttons.img,
        hasFullscreen: l.value.userOptions.buttons.img,
        hasXls: false,
        isFullscreen: w.value,
        titles: { ...l.value.userOptions.buttonTitles },
        chartElement: x2.value,
        position: l.value.userOptions.position,
        onToggleFullscreen: ye,
        onGeneratePdf: unref(B),
        onGenerateImage: unref(G)
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
          fn: withCtx(({ toggleFullscreen: t, isFullscreen: a }) => [
            renderSlot(e.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: t, isFullscreen: a })), void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      P.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass([{ "vue-data-ui-fullscreen--on": w.value, "vue-data-ui-fulscreen--off": !w.value }, "relation-circle"]),
        viewBox: `0 0 ${i.value.width <= 0 ? 10 : i.value.width} ${i.value.height <= 0 ? 10 : i.value.height}`,
        width: "100%",
        style: "user-select:none; background:transparent"
      }, [
        createVNode(p),
        createBaseVNode("circle", {
          cx: (i.value.width <= 0 ? 1e-4 : i.value.width) / 2,
          cy: (i.value.height <= 0 ? 1e-4 : i.value.height) / 2 + l.value.style.circle.offsetY,
          r: g.value <= 0 ? 1e-4 : g.value,
          stroke: l.value.style.circle.stroke,
          "stroke-width": l.value.style.circle.strokeWidth,
          fill: "transparent",
          class: "main-circle"
        }, null, 8, We),
        ie2.value ? (openBlock(), createElementBlock("g", Xe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, a) => (openBlock(), createElementBlock("path", {
            key: `relation_${a}`,
            style: normalizeStyle(q(t)),
            stroke: Y(t),
            class: normalizeClass(["relation", { "vue-ui-relation-circle-selected": n.value.hasOwnProperty("id") && v.value.includes(t.id) }]),
            d: `M${t.x1},${t.y1} C${t.x1},${t.y1} ${i.value.width / 2},${i.value.height / 2 + l.value.style.circle.offsetY} ${t.x2},${t.y2}`,
            fill: "none",
            "stroke-width": J(t),
            "stroke-linecap": "round"
          }, null, 14, Ye))), 128))
        ])) : (openBlock(), createElementBlock("g", qe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (t, a) => (openBlock(), createElementBlock("line", {
            key: `relation_${a}`,
            stroke: Y(t),
            style: normalizeStyle(q(t)),
            x1: t.x1,
            x2: t.x2,
            y1: t.y1,
            y2: t.y2,
            class: normalizeClass({ "vue-ui-relation-circle-selected": n.value.hasOwnProperty("id") && v.value.includes(t.id) }),
            "stroke-linecap": "round"
          }, null, 14, He))), 128))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("text", {
          key: `plot_text_${a}`,
          "text-anchor": ve(t),
          transform: he(t),
          x: fe(t),
          y: t.y + 5,
          onClick: (p2) => H(t),
          class: "vue-ui-relation-circle-legend",
          "transform-origin": "start",
          "font-weight": n.value.id === t.id ? "900" : "400",
          style: normalizeStyle(`font-family:${l.value.style.fontFamily};${ge(t)}`),
          "font-size": l.value.style.labels.fontSize,
          fill: l.value.style.labels.color
        }, toDisplayString(t.label), 13, Je))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (t, a) => (openBlock(), createElementBlock("circle", {
          cx: t.x,
          cy: t.y,
          key: `plot_${a}`,
          style: normalizeStyle(de(t)),
          class: "vue-ui-relation-circle-plot",
          fill: l.value.style.plot.color,
          onClick: (p2) => H(t),
          r: l.value.style.plot.radius
        }, null, 12, Ke))), 128)),
        renderSlot(e.$slots, "svg", { svg: i.value }, void 0, true)
      ], 10, Ve)) : createCommentVNode("", true),
      e.$slots.watermark ? (openBlock(), createElementBlock("div", Qe, [
        renderSlot(e.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(M2) || unref(j) })), void 0, true)
      ])) : createCommentVNode("", true),
      P.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
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
    ], 12, De));
  }
};
var ot = s(Ze, [["__scopeId", "data-v-0d6438fc"]]);
export {
  ot as default
};
//# sourceMappingURL=vue-ui-relation-circle-nRf1pvD0-IB4ZLVZI.js.map
