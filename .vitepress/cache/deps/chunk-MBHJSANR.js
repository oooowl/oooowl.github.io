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
  te
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  guardReactiveProps,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  useCssVars,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-accordion-m-s-7akB.js
var F = ["id"];
var P = {
  key: 0,
  class: "vue-ui-accordion-arrow"
};
var z = {
  __name: "vue-ui-accordion",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    hideDetails: {
      type: Boolean,
      default: false
    }
  },
  setup(l) {
    const f = l;
    useCssVars((o) => ({
      "95f7c2e4": C.value
    }));
    const { vue_ui_accordion: g } = te(), e = computed(() => c({
      userConfig: f.config,
      defaultConfig: g
    })), a = ref(e.value.open), h = ref(Dt()), t = ref(null), d = ref(0);
    onMounted(() => {
      t.value.open = e.value.open;
    }), watch(() => e.value.open, (o) => {
      t.value.open = o;
    });
    function k() {
      (d.value > 0 || !e.value.open) && (a.value = !a.value), d.value += 1;
    }
    const C = computed(() => `${e.value.maxHeight}px`);
    return (o, E) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("details", {
        id: `details_${h.value}`,
        ref_key: "details",
        ref: t,
        onToggle: k
      }, [
        createBaseVNode("summary", {
          class: normalizeClass({ "vue-ui-accordion-headless": l.hideDetails })
        }, [
          createBaseVNode("div", {
            class: "vue-ui-accordion-head",
            style: normalizeStyle(`background:${e.value.head.backgroundColor};padding:${e.value.head.padding}; ${l.hideDetails ? "height: 0px !important; padding: 0 !important;" : ""}`)
          }, [
            l.hideDetails ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", P, [
              e.value.head.useArrowSlot ? renderSlot(o.$slots, "arrow", normalizeProps(mergeProps({ key: 0 }, { backgroundColor: e.value.head.backgroundColor, color: e.value.head.color, iconColor: e.value.head.iconColor, isOpen: a.value })), void 0, true) : (openBlock(), createBlock(u, {
                key: 1,
                name: "arrowRight",
                stroke: e.value.head.iconColor
              }, null, 8, ["stroke"]))
            ])),
            renderSlot(o.$slots, "title", normalizeProps(guardReactiveProps({ color: e.value.head.color, isOpen: a.value })), void 0, true)
          ], 4)
        ], 2)
      ], 40, F),
      createBaseVNode("div", {
        class: "vue-ui-accordion-content",
        style: normalizeStyle(`background:${e.value.body.backgroundColor};color:${e.value.body.color}`)
      }, [
        renderSlot(o.$slots, "content", normalizeProps(guardReactiveProps({ backgroundColor: e.value.body.backgroundColor, color: e.value.body.color, isOpen: a.value })), void 0, true)
      ], 4)
    ]));
  }
};
var R = s(z, [["__scopeId", "data-v-28fc829c"]]);

export {
  R
};
//# sourceMappingURL=chunk-MBHJSANR.js.map
