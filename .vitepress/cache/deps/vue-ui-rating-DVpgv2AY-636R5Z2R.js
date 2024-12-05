import {
  c
} from "./chunk-OBQGP7GO.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  Ht,
  Jt,
  ir,
  jt,
  qt,
  te,
  xt,
  yt
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  watch,
  withKeys
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-rating-DVpgv2AY.js
var et = {
  key: 0,
  class: "vue-ui-rating-title",
  style: { width: "100%" }
};
var lt = ["src", "height", "width"];
var at = ["xmlns", "height", "width"];
var it = ["id"];
var ot = ["stop-color"];
var st = ["stop-color"];
var nt = ["points", "fill", "stroke", "stroke-width"];
var rt = ["src", "alt", "height", "width", "id"];
var ut = ["xmlns", "viewBox", "height", "id"];
var vt = ["id"];
var yt2 = ["stop-color"];
var dt = ["stop-color"];
var pt = ["points", "fill", "stroke"];
var gt = ["xmlns", "height"];
var ct = ["onClick", "onMouseenter", "onKeyup"];
var ft = ["onMouseenter"];
var mt = {
  __name: "vue-ui-rating",
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
  emits: ["rate"],
  setup(X, { expose: j, emit: B }) {
    const u = X, { vue_ui_rating: I } = te(), m = ref(Dt()), z = ref(false), y = ref(void 0), b = ref([]), t = computed({
      get: () => C(),
      set: (l) => l
    });
    function C() {
      return c({
        userConfig: u.config,
        defaultConfig: I
      });
    }
    watch(() => u.config, (l) => {
      t.value = C(), M();
    }, { deep: true });
    const Y = computed(() => typeof u.dataset.rating == "object" && !Array.isArray(u.dataset.rating) ? L(u.dataset.rating) : u.dataset.rating), G = computed(() => typeof u.dataset.rating == "object" && !Array.isArray(u.dataset.rating)), v = ref(Y.value), S = computed(() => t.value.type === "image"), c2 = computed(() => t.value.readonly);
    function L(l) {
      let n = 0, e = 0;
      for (const p in l) {
        const E = parseInt(p), A = l[p];
        n += E * A, e += A;
      }
      if (e === 0)
        return 0;
      const f = n / e;
      return Math.min(t.value.to, Math.max(t.value.from, f));
    }
    onMounted(() => {
      M();
    });
    function M() {
      jt(u.dataset) && qt({
        componentName: "VueUiRating",
        type: "dataset"
      }), b.value = [];
      for (let l = t.value.from; l <= t.value.to; l += 1)
        b.value.push(l);
    }
    function w(l, n = false) {
      return l > y.value || c2.value ? n ? t.value.style.image.inactiveOpacity : t.value.style.star.inactiveColor : n ? 1 : t.value.style.star.useGradient ? `url(#star_gradient_under_${m.value})` : t.value.style.star.activeColor;
    }
    function N(l, n = false) {
      const e = v.value - l, f = n ? 1 : 100;
      switch (true) {
        case e <= 0:
          return 1e-3;
        case e > 1:
          return 1 * f;
        default:
          return e * f;
      }
    }
    function V(l) {
      c2.value || (v.value = l, B("rate", l));
    }
    function O() {
      return v.value;
    }
    function D(l = true) {
      c2.value = l;
    }
    return j({
      getData: O,
      toggleReadonly: D
    }), (l, n) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`background:${t.value.style.backgroundColor};font-family:${t.value.style.fontFamily};width:100%`),
      class: "vue-ui-rating",
      onMouseover: n[2] || (n[2] = (e) => z.value = true),
      onMouseleave: n[3] || (n[3] = (e) => {
        z.value = false, y.value = void 0;
      })
    }, [
      t.value.style.title.text ? (openBlock(), createElementBlock("div", et, [
        createBaseVNode("div", {
          style: normalizeStyle(`color:${t.value.style.title.color};font-weight:${t.value.style.title.bold ? "bold" : "normal"};text-align:${t.value.style.title.textAlign};margin-bottom:${t.value.style.title.offsetY}px;font-size:${t.value.style.title.fontSize}px`)
        }, toDisplayString(t.value.style.title.text), 5),
        t.value.style.title.subtitle.text ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`color:${t.value.style.title.subtitle.color};font-size:${t.value.style.title.subtitle.fontSize}px;text-align:${t.value.style.title.textAlign};margin-bottom:${t.value.style.title.subtitle.offsetY}px;font-weight:${t.value.style.title.subtitle.bold ? "bold" : "normal"}`)
        }, toDisplayString(t.value.style.title.subtitle.text), 5)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      t.value.style.rating.show && t.value.style.rating.position === "top" ? (openBlock(), createElementBlock("div", {
        key: 1,
        style: normalizeStyle(`width:100%;text-align:center;margin-bottom:${t.value.style.rating.offsetY}px;font-size:${t.value.style.rating.fontSize}px;font-weight:${t.value.style.rating.bold ? "bold" : "normal"};margin-left:${t.value.style.rating.offsetX}px`)
      }, toDisplayString(unref(ir)(
        t.value.style.rating.formatter,
        v.value,
        unref(Ht)({
          v: v.value,
          r: t.value.style.rating.roundingValue
        }),
        t.value
      )), 5)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: "vue-ui-rating-wrapper",
        style: normalizeStyle(`height:${t.value.style.itemSize}px;width:100%;display:flex;align-items:center;justify-content:center`)
      }, [
        t.value.style.rating.show && t.value.style.rating.position === "left" ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`width:fit-content;text-align:center;margin-bottom:${t.value.style.rating.offsetY}px;font-size:${t.value.style.rating.fontSize}px;font-weight:${t.value.style.rating.bold ? "bold" : "normal"};padding-right:${t.value.style.rating.offsetX}px`)
        }, toDisplayString(unref(ir)(
          t.value.style.rating.formatter,
          v.value,
          unref(Ht)({
            v: v.value,
            r: t.value.style.rating.roundingValue
          }),
          t.value
        )), 5)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (e, f) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-rating-unit-container",
          style: normalizeStyle(`position:relative;height:${t.value.style.itemSize}px;width:${t.value.style.itemSize}px`)
        }, [
          S.value ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: t.value.style.image.src,
            height: t.value.style.itemSize,
            width: t.value.style.itemSize,
            class: "vue-ui-rating-unit",
            style: normalizeStyle(`position:absolute;top:0;left:0;opacity:${isNaN(y.value) ? t.value.style.image.inactiveOpacity : w(e, true)}`)
          }, null, 12, lt)) : (openBlock(), createElementBlock("svg", {
            key: 1,
            xmlns: unref(Jt),
            viewBox: "0 0 100 100",
            height: t.value.style.itemSize,
            width: t.value.style.itemSize,
            class: "vue-ui-rating-unit"
          }, [
            createBaseVNode("defs", null, [
              createBaseVNode("radialGradient", {
                cx: "50%",
                cy: "50%",
                r: "50%",
                fx: "50%",
                fy: "50%",
                id: `star_gradient_under_${m.value}`
              }, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": `${unref(yt)(t.value.style.star.activeColor, 0.05)}`
                }, null, 8, ot),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": t.value.style.star.activeColor
                }, null, 8, st)
              ], 8, it)
            ]),
            createBaseVNode("polygon", {
              points: unref(xt)({
                plot: { x: 50, y: 50 },
                radius: 30,
                apexes: t.value.style.star.apexes
              }),
              fill: isNaN(y.value) ? t.value.style.star.inactiveColor : w(e),
              stroke: t.value.style.star.borderColor ? t.value.style.star.borderColor : y.value ? w(e) : t.value.style.star.inactiveColor,
              "stroke-width": t.value.style.star.borderWidth,
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, nt)
          ], 8, at)),
          S.value ? (openBlock(), createElementBlock("img", {
            key: 2,
            src: t.value.style.image.src,
            alt: `${t.value.style.image.alt} ${e}`,
            height: t.value.style.itemSize,
            width: t.value.style.itemSize,
            id: `active_${m.value}_${e}`,
            class: "vue-ui-rating-unit",
            style: normalizeStyle(`position:absolute;top:0;left:0;clip:rect(0px,${N(f, true) * t.value.style.itemSize}px,${t.value.style.itemSize}px,0px`)
          }, null, 12, rt)) : (openBlock(), createElementBlock("svg", {
            key: 3,
            xmlns: unref(Jt),
            viewBox: `0 0 ${N(f)} 100`,
            height: t.value.style.itemSize,
            class: "vue-ui-rating-unit",
            id: `active_${m.value}_${e}`,
            style: { position: "absolute", top: "0", left: "0" }
          }, [
            createBaseVNode("defs", null, [
              createBaseVNode("radialGradient", {
                cx: "50%",
                cy: "50%",
                r: "50%",
                fx: "50%",
                fy: "50%",
                id: `star_gradient_over_${m.value}`
              }, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": `${unref(yt)(t.value.style.star.activeColor, 0.05)}`
                }, null, 8, yt2),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": t.value.style.star.activeColor
                }, null, 8, dt)
              ], 8, vt)
            ]),
            createBaseVNode("polygon", {
              points: unref(xt)({
                plot: { x: 50, y: 50 },
                radius: 30,
                apexes: t.value.style.star.apexes
              }),
              fill: t.value.style.star.useGradient ? `url(#star_gradient_over_${m.value})` : t.value.style.star.activeColor,
              stroke: t.value.style.star.activeColor
            }, null, 8, pt)
          ], 8, ut)),
          (openBlock(), createElementBlock("svg", {
            xmlns: unref(Jt),
            viewBox: "0 0 100 100",
            height: t.value.style.itemSize,
            class: "vue-ui-rating-unit",
            style: normalizeStyle(`position:absolute;top:0;left:0;${c2.value ? "" : "cursor:pointer"}`)
          }, [
            c2.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("rect", {
              key: 0,
              class: "vue-ui-rating-mouse-trap",
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              fill: "transparent",
              onClick: (p) => V(e),
              onMouseenter: (p) => y.value = e,
              onMouseleave: n[0] || (n[0] = (p) => y.value = void 0),
              tabindex: "0",
              onKeyup: withKeys((p) => V(e), ["enter"])
            }, null, 40, ct)),
            c2.value ? (openBlock(), createElementBlock("rect", {
              key: 1,
              class: "vue-ui-rating-mouse-trap",
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              fill: "transparent",
              onMouseenter: (p) => y.value = e,
              onMouseleave: n[1] || (n[1] = (p) => y.value = void 0)
            }, null, 40, ft)) : createCommentVNode("", true)
          ], 12, gt)),
          t.value.style.tooltip.show && G.value && c2.value ? (openBlock(), createElementBlock("div", {
            key: 4,
            class: "vue-ui-rating-tooltip",
            style: normalizeStyle(`border:1px solid ${t.value.style.tooltip.borderColor};position:absolute;top:${-48 + t.value.style.tooltip.offsetY}px;left:50%;transform:translateX(-50%);width:fit-content;text-align:center;background:${t.value.style.tooltip.backgroundColor};display:${y.value === e ? "block" : "none"};padding:2px 12px;border-radius:${t.value.style.tooltip.borderRadius}px;box-shadow:${t.value.style.tooltip.boxShadow}`)
          }, [
            createBaseVNode("div", {
              style: normalizeStyle(`width:100%;display:flex;flex-direction:row;gap:6px;position:relative;text-align:center;color:${t.value.style.tooltip.color}`)
            }, [
              createBaseVNode("span", {
                style: normalizeStyle(`font-size:${t.value.style.tooltip.fontSize}px`)
              }, toDisplayString(e) + ":", 5),
              createBaseVNode("span", {
                style: normalizeStyle(`font-weight:${t.value.style.tooltip.bold ? "bold" : "normal"};font-size:${t.value.style.tooltip.fontSize}px`)
              }, toDisplayString(unref(ir)(
                t.value.style.tooltip.formatter,
                u.dataset.rating[e],
                unref(Ht)({
                  v: u.dataset.rating[e],
                  r: t.value.style.tooltip.roundingValue
                }),
                t.value
              )), 5),
              createBaseVNode("div", {
                style: normalizeStyle(`font-family:Arial !important;position:absolute;top:calc(100% - 4px);left:50%;transform:translateX(-50%);color:${t.value.style.tooltip.borderColor}`)
              }, " ▼ ", 4)
            ], 4)
          ], 4)) : createCommentVNode("", true)
        ], 4))), 256)),
        t.value.style.rating.show && t.value.style.rating.position === "right" ? (openBlock(), createElementBlock("div", {
          key: 1,
          style: normalizeStyle(`width:fit-content;text-align:center;margin-bottom:${t.value.style.rating.offsetY}px;font-size:${t.value.style.rating.fontSize}px;font-weight:${t.value.style.rating.bold ? "bold" : "normal"};padding-left:${t.value.style.rating.offsetX}px`)
        }, toDisplayString(unref(ir)(
          t.value.style.rating.formatter,
          v.value,
          unref(Ht)({
            v: v.value,
            r: t.value.style.rating.roundingValue
          }),
          t.value
        )), 5)) : createCommentVNode("", true)
      ], 4),
      t.value.style.rating.show && t.value.style.rating.position === "bottom" ? (openBlock(), createElementBlock("div", {
        key: 2,
        style: normalizeStyle(`width:100%;text-align:center;margin-top:${t.value.style.rating.offsetY}px;font-size:${t.value.style.rating.fontSize}px;font-weight:${t.value.style.rating.bold ? "bold" : "normal"};margin-left:${t.value.style.rating.offsetX}px`)
      }, toDisplayString(unref(ir)(
        t.value.style.rating.formatter,
        v.value,
        unref(Ht)({
          v: v.value,
          r: t.value.style.rating.roundingValue
        }),
        t.value
      )), 5)) : createCommentVNode("", true)
    ], 36));
  }
};
var bt = s(mt, [["__scopeId", "data-v-d90e158f"]]);
export {
  bt as default
};
//# sourceMappingURL=vue-ui-rating-DVpgv2AY-636R5Z2R.js.map
