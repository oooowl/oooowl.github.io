import {
  U
} from "./chunk-C6J4C2HF.js";
import {
  c
} from "./chunk-OBQGP7GO.js";
import {
  Ht,
  ir,
  te
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-kpi-C8wyHy1H.js
var T = {
  __name: "vue-ui-kpi",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Number,
      default: 0
    }
  },
  setup(o) {
    const l = o, { vue_ui_kpi: b } = te(), e = computed({
      get: () => r(),
      set: (a) => a
    });
    function r() {
      return c({
        userConfig: l.config,
        defaultConfig: b
      });
    }
    watch(() => l.config, (a) => {
      e.value = r(), f();
    }, { deep: true });
    const F = ref((typeof l.dataset == "number", l.dataset)), t = ref(e.value.useAnimation ? e.value.animationValueStart : F.value), m = (a) => {
      const c2 = e.value.animationFrames, d = Math.abs(a - t.value) / c2;
      function g() {
        t.value < a ? t.value = Math.min(t.value + d, a) : t.value > a && (t.value = Math.max(t.value - d, a)), t.value !== a && requestAnimationFrame(g);
      }
      g();
    };
    onMounted(() => {
      f();
    });
    function f() {
      e.value.useAnimation ? (t.value = e.value.animationValueStart, m(l.dataset)) : t.value = l.dataset;
    }
    return watch(() => l.dataset, (a) => {
      e.value.useAnimation ? m(a) : t.value = a;
    }), (a, c2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`vue-ui-kpi ${e.value.layoutClass}`),
      style: normalizeStyle(`background:${e.value.backgroundColor}; ${e.value.layoutCss}`)
    }, [
      createBaseVNode("div", {
        class: normalizeClass(`vue-ui-kpi-title ${e.value.titleClass}`),
        style: normalizeStyle(`font-family: ${e.value.fontFamily}; font-size:${e.value.titleFontSize}px; color:${e.value.titleColor}; font-weight:${e.value.titleBold ? "bold" : "normal"}; ${e.value.titleCss}`)
      }, [
        renderSlot(a.$slots, "title", { comment: o.dataset }),
        createTextVNode(" " + toDisplayString(e.value.title), 1)
      ], 6),
      renderSlot(a.$slots, "comment-before", { comment: o.dataset }),
      createBaseVNode("div", {
        class: normalizeClass(`vue-ui-kpi-value ${e.value.valueClass}`),
        style: normalizeStyle(`font-family: ${e.value.fontFamily}; font-size:${e.value.valueFontSize}px; color:${e.value.valueColor}; font-weight:${e.value.valueBold ? "bold" : "normal"}; ${e.value.valueCss}`)
      }, [
        renderSlot(a.$slots, "value", { comment: o.dataset }),
        e.value.analogDigits.show ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle({ height: e.value.analogDigits.height + "px" })
        }, [
          createVNode(U, {
            dataset: Number(t.value.toFixed(e.value.valueRounding)),
            config: {
              backgroundColor: e.value.backgroundColor,
              digits: {
                color: e.value.analogDigits.color,
                skeletonColor: e.value.analogDigits.skeletonColor
              }
            }
          }, null, 8, ["dataset", "config"])
        ], 4)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(unref(ir)(
            e.value.formatter,
            t.value,
            unref(Ht)({
              p: e.value.prefix,
              v: t.value,
              s: e.value.suffix,
              r: e.value.valueRounding
            })
          )), 1)
        ], 64))
      ], 6),
      renderSlot(a.$slots, "comment-after", { comment: o.dataset })
    ], 6));
  }
};
export {
  T as default
};
//# sourceMappingURL=vue-ui-kpi-C8wyHy1H-RCQPMPMP.js.map
