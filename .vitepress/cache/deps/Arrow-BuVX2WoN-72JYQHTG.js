import {
  Dt
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createBaseVNode,
  createElementBlock,
  openBlock,
  unref
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/Arrow-BuVX2WoN.js
var s = { class: "vue-ui-element-arrow" };
var f = ["id", "viewBox", "refX", "refY", "markerWidth", "markerHeight"];
var c = ["d", "fill"];
var h = ["id", "viewBox", "refX", "refY", "markerWidth", "markerHeight"];
var y = ["d", "fill"];
var v = ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "stroke-linecap", "stroke-dasharray", "marker-end", "marker-start"];
var z = {
  __name: "Arrow",
  props: {
    markerEnd: {
      type: Boolean,
      default: true
    },
    markerSize: {
      type: Number,
      default: 10
    },
    markerStart: {
      type: Boolean,
      default: false
    },
    stroke: {
      type: String,
      default: "#2D353C"
    },
    strokeDasharray: {
      type: Number,
      default: 0
    },
    strokeLinecap: {
      type: String,
      default: "round"
    },
    strokeWidth: {
      type: Number,
      default: 1
    },
    x1: {
      type: Number,
      default: 0
    },
    x2: {
      type: Number,
      default: 0
    },
    y1: {
      type: Number,
      default: 0
    },
    y2: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    const a = e, i = Dt(), d = computed(() => `0 0 ${a.markerSize} ${a.markerSize}`), r = computed(() => a.markerSize / 2), l = computed(() => r.value + a.markerSize / 10);
    return (x, S) => (openBlock(), createElementBlock("g", s, [
      createBaseVNode("defs", null, [
        createBaseVNode("marker", {
          id: `arrow_end_${unref(i)}`,
          orient: "auto",
          viewBox: d.value,
          refX: r.value,
          refY: r.value,
          markerWidth: l.value,
          markerHeight: l.value
        }, [
          createBaseVNode("path", {
            d: `M 0 0 L ${e.markerSize} ${r.value} L 0 ${e.markerSize} z`,
            fill: e.stroke
          }, null, 8, c)
        ], 8, f),
        createBaseVNode("marker", {
          id: `arrow_start_${unref(i)}`,
          orient: "auto-start-reverse",
          viewBox: d.value,
          refX: r.value,
          refY: r.value,
          markerWidth: l.value,
          markerHeight: l.value
        }, [
          createBaseVNode("path", {
            d: `M 0 0 L ${e.markerSize} ${r.value} L 0 ${e.markerSize} z`,
            fill: e.stroke
          }, null, 8, y)
        ], 8, h)
      ]),
      createBaseVNode("line", {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        stroke: e.stroke,
        "stroke-width": e.strokeWidth,
        "stroke-linecap": e.strokeLinecap,
        "stroke-dasharray": e.strokeDasharray,
        "marker-end": e.markerEnd ? `url(#arrow_end_${unref(i)})` : "",
        "marker-start": e.markerStart ? `url(#arrow_start_${unref(i)})` : ""
      }, null, 8, v)
    ]));
  }
};
export {
  z as default
};
//# sourceMappingURL=Arrow-BuVX2WoN-72JYQHTG.js.map
