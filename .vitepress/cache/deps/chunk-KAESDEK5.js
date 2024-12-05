import {
  $
} from "./chunk-7VCRGXFE.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Fragment,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderList,
  renderSlot
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/Legend-DXLiSLHd.js
var v = ["id"];
var $2 = ["onClick", "height", "width"];
var S = {
  __name: "Legend",
  props: {
    legendSet: {
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
    },
    id: {
      type: String,
      default: ""
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["clickMarker"],
  setup(e, { emit: r }) {
    function f(i, l) {
      r("clickMarker", { legend: i, i: l });
    }
    return (i, l) => (openBlock(), createElementBlock("div", {
      id: e.id,
      class: "vue-data-ui-legend",
      style: normalizeStyle(`background:${e.config.backgroundColor};font-size:${e.config.fontSize}px;color:${e.config.color};padding-bottom:${e.config.paddingBottom}px;padding-top:${e.config.paddingTop || 12}px;font-weight:${e.config.fontWeight}`)
    }, [
      renderSlot(i.$slots, "legendTitle", { titleSet: e.legendSet }, void 0, true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(e.legendSet, (t, a) => (openBlock(), createElementBlock("div", {
        class: normalizeClass({ "vue-data-ui-legend-item": true, active: e.clickable })
      }, [
        t.shape ? (openBlock(), createElementBlock("svg", {
          key: 0,
          onClick: (b) => f(t, a),
          height: e.config.fontSize,
          width: e.config.fontSize,
          viewBox: "0 0 20 20",
          style: normalizeStyle(`overflow: visible;opacity:${t.opacity}`)
        }, [
          createVNode($, {
            shape: t.shape,
            radius: 9,
            stroke: "none",
            plot: { x: 10, y: 10 },
            fill: t.color
          }, null, 8, ["shape", "fill"])
        ], 12, $2)) : createCommentVNode("", true),
        renderSlot(i.$slots, "item", {
          legend: t,
          index: a
        }, void 0, true)
      ], 2))), 256))
    ], 12, v));
  }
};
var C = s(S, [["__scopeId", "data-v-310b3d7d"]]);

export {
  C
};
//# sourceMappingURL=chunk-KAESDEK5.js.map
