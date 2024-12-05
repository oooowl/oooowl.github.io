import {
  cr
} from "./chunk-TG4LWCJY.js";
import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  renderSlot
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/Tooltip-CICAYyQj.js
function k({ tooltip: e, chart: o, clientPosition: t, positionPreference: a = "center", defaultOffsetY: i = 24 }) {
  const u = ref(0), r = ref(i);
  if (e && o) {
    const { width: n, height: c } = e.getBoundingClientRect(), { right: d, left: s, bottom: p } = o.getBoundingClientRect();
    a === "center" && (t.x + n / 2 > d ? u.value = -n + (d - t.x) : t.x - n / 2 < s ? u.value = -n + (n - (t.x - s)) : u.value = -n / 2), a === "right" && (t.x + n > d ? u.value = -n + (d - t.x) : u.value = 0), a === "left" && (t.x < s + n ? u.value = -n + (n - (t.x - s)) : u.value = -n), t.y + c > p && (r.value = -c - i);
  }
  return {
    top: t.y + r.value,
    left: t.x + u.value
  };
}
function B(e, o, t) {
  onMounted(() => e.addEventListener(o, t)), onUnmounted(() => e.removeEventListener(o, t));
}
function N() {
  const e = ref(0), o = ref(0);
  return B(window, "mousemove", (t) => {
    e.value = t.clientX, o.value = t.clientY;
  }), { x: e, y: o };
}
var w = ["innerHTML"];
var E = {
  __name: "Tooltip",
  props: {
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    color: {
      type: String,
      default: "#000000"
    },
    content: String,
    maxWidth: {
      type: String,
      default: "300px"
    },
    parent: {
      type: Object
    },
    show: {
      type: Boolean,
      default: false
    },
    isCustom: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: [Number, String],
      default: 14
    },
    borderRadius: {
      type: Number,
      default: 4
    },
    borderColor: {
      type: String,
      default: "#e1e5e8"
    },
    borderWidth: {
      type: Number,
      default: 1
    },
    backgroundOpacity: {
      type: Number,
      default: 100
    },
    position: {
      type: String,
      default: "center"
    },
    offsetY: {
      type: Number,
      default: 24
    }
  },
  setup(e) {
    const o = e, t = ref(null), a = ref(N()), i = computed(() => k({
      tooltip: t.value,
      chart: o.parent,
      clientPosition: a.value,
      positionPreference: o.position,
      defaultOffsetY: o.offsetY
    })), u = computed(() => cr(o.backgroundColor, o.backgroundOpacity));
    return (r, n) => e.show ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref_key: "tooltip",
      ref: t,
      class: normalizeClass({ "vue-data-ui-custom-tooltip": e.isCustom, "vue-data-ui-tooltip": !e.isCustom }),
      style: normalizeStyle(`pointer-events:none;top:${i.value.top}px;left:${i.value.left}px;${e.isCustom ? "" : `background:${u.value};color:${e.color};max-width:${e.maxWidth};font-size:${e.fontSize}px`};border-radius:${e.borderRadius}px;border:${e.borderWidth}px solid ${e.borderColor};`)
    }, [
      renderSlot(r.$slots, "tooltip-before"),
      renderSlot(r.$slots, "default"),
      createBaseVNode("div", { innerHTML: e.content }, null, 8, w),
      renderSlot(r.$slots, "tooltip-after")
    ], 6)) : createCommentVNode("", true);
  }
};

export {
  N,
  E
};
//# sourceMappingURL=chunk-57X6EWGW.js.map
