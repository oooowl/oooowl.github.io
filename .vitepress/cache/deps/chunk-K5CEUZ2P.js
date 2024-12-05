import {
  dr
} from "./chunk-4SKEOFB2.js";
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/Tooltip-Com_T8vc.js
function B({ tooltip: e, chart: o, clientPosition: t, positionPreference: r = "center", defaultOffsetY: a = 24, blockShiftY: d = false }) {
  const l = ref(0), s = ref(a);
  if (e && o) {
    const { width: n, height: m } = e.getBoundingClientRect(), { right: i, left: f, bottom: v } = o.getBoundingClientRect();
    r === "center" && (t.x + n / 2 > i ? l.value = -n + (i - t.x) : t.x - n / 2 < f ? l.value = -n + (n - (t.x - f)) : l.value = -n / 2), r === "right" && (t.x + n > i ? l.value = -n + (i - t.x) : l.value = 0), r === "left" && (t.x < f + n ? l.value = -n + (n - (t.x - f)) : l.value = -n), t.y + m > v && !d && (s.value = -m - a);
  }
  return {
    top: t.y + s.value,
    left: t.x + l.value
  };
}
function N(e, o, t) {
  onMounted(() => e.addEventListener(o, t)), onUnmounted(() => e.removeEventListener(o, t));
}
function Y() {
  const e = ref(0), o = ref(0);
  return N(window, "mousemove", (t) => {
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
    },
    blockShiftY: {
      type: Boolean,
      default: false
    }
  },
  setup(e) {
    const o = e, t = ref(null), r = ref(Y()), a = computed(() => B({
      tooltip: t.value,
      chart: o.parent,
      clientPosition: r.value,
      positionPreference: o.position,
      defaultOffsetY: o.offsetY,
      blockShiftY: o.blockShiftY
    })), d = computed(() => dr(o.backgroundColor, o.backgroundOpacity));
    return (l, s) => e.show ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref_key: "tooltip",
      ref: t,
      class: normalizeClass({ "vue-data-ui-custom-tooltip": e.isCustom, "vue-data-ui-tooltip": !e.isCustom }),
      style: normalizeStyle(`pointer-events:none;top:${a.value.top}px;left:${a.value.left}px;${e.isCustom ? "" : `background:${d.value};color:${e.color};max-width:${e.maxWidth};font-size:${e.fontSize}px`};border-radius:${e.borderRadius}px;border:${e.borderWidth}px solid ${e.borderColor};`)
    }, [
      renderSlot(l.$slots, "tooltip-before"),
      renderSlot(l.$slots, "default"),
      createBaseVNode("div", { innerHTML: e.content }, null, 8, w),
      renderSlot(l.$slots, "tooltip-after")
    ], 6)) : createCommentVNode("", true);
  }
};

export {
  Y,
  E
};
//# sourceMappingURL=chunk-K5CEUZ2P.js.map
