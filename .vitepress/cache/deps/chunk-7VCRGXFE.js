import {
  mt,
  yt
} from "./chunk-TG4LWCJY.js";
import {
  computed,
  createCommentVNode,
  createElementBlock,
  openBlock
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/Shape-CO_Ak9Zm.js
var y = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
var c = ["d", "fill", "stroke", "stroke-width"];
var g = ["points", "fill", "stroke", "stroke-width"];
var $ = {
  __name: "Shape",
  props: {
    color: String,
    isSelected: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 3
    },
    plot: Object,
    radius: Number,
    shape: String,
    stroke: String,
    strokeWidth: Number,
    zoom: {
      type: Number,
      default: 1.3
    }
  },
  emits: ["mouseover", "mouseout", "click"],
  setup(e, { emit: n }) {
    const t = e;
    function v(k) {
      return {
        circle: {
          points: 1,
          rotation: 0
        },
        line: {
          points: 2,
          rotation: 0
        },
        triangle: {
          points: 3,
          rotation: 0.52
        },
        square: {
          points: 4,
          rotation: 0.783
        },
        diamond: {
          points: 4,
          rotation: 0
        },
        pentagon: {
          points: 5,
          rotation: 0.95
        },
        hexagon: {
          points: 6,
          rotation: 0
        }
      }[k];
    }
    const s = computed(() => v(t.shape)), d = computed(() => t.shape !== "star" ? null : yt({
      plot: { x: t.plot.x, y: t.plot.y },
      radius: t.radius * (t.isSelected ? t.zoom : 1)
    })), m = computed(() => mt({
      plot: { x: t.plot.x, y: t.plot.y },
      radius: t.radius * (t.isSelected ? t.zoom : 1),
      sides: s.value.points,
      rotation: s.value.rotation
    }).path);
    return (k, o) => (openBlock(), createElementBlock("g", null, [
      s.value && s.value.points === 1 ? (openBlock(), createElementBlock("circle", {
        key: 0,
        cx: e.plot.x,
        cy: e.plot.y,
        r: t.radius * (t.isSelected ? t.zoom : 1),
        fill: e.color,
        stroke: e.stroke,
        "stroke-width": e.strokeWidth,
        onMouseover: o[0] || (o[0] = (r) => n("mouseover")),
        onMouseout: o[1] || (o[1] = (r) => n("mouseout")),
        onClick: o[2] || (o[2] = (r) => n("click"))
      }, null, 40, y)) : createCommentVNode("", true),
      s.value && s.value.points >= e.limit ? (openBlock(), createElementBlock("path", {
        key: 1,
        d: m.value,
        fill: e.color,
        stroke: e.stroke,
        "stroke-width": e.strokeWidth,
        onMouseover: o[3] || (o[3] = (r) => n("mouseover")),
        onMouseout: o[4] || (o[4] = (r) => n("mouseout")),
        onClick: o[5] || (o[5] = (r) => n("click"))
      }, null, 40, c)) : createCommentVNode("", true),
      d.value ? (openBlock(), createElementBlock("polygon", {
        key: 2,
        points: d.value,
        fill: e.color,
        stroke: e.stroke,
        "stroke-width": e.strokeWidth,
        onMouseover: o[6] || (o[6] = (r) => n("mouseover")),
        onMouseout: o[7] || (o[7] = (r) => n("mouseout")),
        onClick: o[8] || (o[8] = (r) => n("click"))
      }, null, 40, g)) : createCommentVNode("", true)
    ]));
  }
};

export {
  $
};
//# sourceMappingURL=chunk-7VCRGXFE.js.map
