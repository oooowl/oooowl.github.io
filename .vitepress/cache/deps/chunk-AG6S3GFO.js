import {
  $
} from "./chunk-7VCRGXFE.js";
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  withKeys
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/DataTable-DL2agEJ3.js
var T = { class: "vue-ui-data-table" };
var j = { style: { display: "flex", "align-items": "center", "justify-content": "flex-end", "padding-right": "3px", gap: "3px" } };
var F = {
  key: 0,
  height: "12",
  width: "12",
  viewBox: "0 0 20 20",
  style: { background: "none" }
};
var L = ["fill"];
var M = ["data-cell"];
var q = {
  dir: "auto",
  style: { display: "flex", "align-items": "center", gap: "5px", "justify-content": "flex-end", width: "100%", "padding-right": "3px" }
};
var G = {
  key: 0,
  height: "12",
  width: "12",
  viewBox: "0 0 20 20",
  style: { background: "none", overflow: "visible" }
};
var H = {
  __name: "DataTable",
  props: {
    colNames: {
      type: Array,
      default() {
        return [];
      }
    },
    head: Array,
    body: Array,
    title: String,
    config: Object
  },
  emits: ["close"],
  setup(t, { emit: g }) {
    const b = t;
    useCssVars((s2) => ({
      "72ac81a5": unref(_)
    }));
    const { backgroundColor: y, color: h, outline: m } = b.config.th, { backgroundColor: B, color: z, outline: _ } = b.config.td, D = computed(() => b.config.breakpoint), f = ref(null), x = ref(false);
    return onMounted(() => {
      const s2 = new ResizeObserver((r) => {
        r.forEach((o) => {
          x.value = o.contentRect.width < D.value;
        });
      });
      f.value && s2.observe(f.value);
    }), (s2, r) => (openBlock(), createElementBlock("div", {
      ref_key: "tableContainer",
      ref: f,
      style: { width: "100%", "container-type": "inline-size", position: "relative", "padding-top": "36px", overflow: "auto" },
      class: normalizeClass({ "vue-ui-responsive": x.value })
    }, [
      createBaseVNode("div", {
        "data-html2canvas-ignore": "",
        role: "button",
        tabindex: "0",
        style: normalizeStyle(`width:32px; position: absolute; top: 0; right:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${unref(y)};`),
        onClick: r[0] || (r[0] = (o) => g("close")),
        onKeypress: r[1] || (r[1] = withKeys((o) => g("close"), ["enter"]))
      }, [
        createVNode(u, {
          name: "close",
          stroke: unref(h),
          "stroke-width": 2
        }, null, 8, ["stroke"])
      ], 36),
      createBaseVNode("table", T, [
        createBaseVNode("caption", {
          style: normalizeStyle({ backgroundColor: unref(y), color: unref(h), outline: unref(m) }),
          class: "vue-ui-data-table__caption"
        }, toDisplayString(t.title), 5),
        createBaseVNode("thead", null, [
          createBaseVNode("tr", {
            role: "row",
            style: normalizeStyle([{ "font-variant-numeric": "tabular-nums" }, { backgroundColor: unref(y), color: unref(h) }]),
            class: "vue-ui-data-table__thead-row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.head, (o, c) => (openBlock(), createElementBlock("th", {
              role: "cell",
              style: normalizeStyle({ outline: unref(m) }),
              key: `th_${c}`
            }, [
              createBaseVNode("div", j, [
                o.color ? (openBlock(), createElementBlock("svg", F, [
                  createBaseVNode("circle", {
                    cx: "10",
                    cy: "10",
                    r: "10",
                    fill: o.color
                  }, null, 8, L)
                ])) : createCommentVNode("", true),
                renderSlot(s2.$slots, "th", { th: o }, void 0, true)
              ])
            ], 4))), 128))
          ], 4)
        ]),
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(t.body, (o, c) => (openBlock(), createElementBlock("tr", {
            role: "row",
            style: normalizeStyle([{ "font-variant-numeric": "tabular-nums" }, { backgroundColor: unref(B), color: unref(z) }]),
            class: normalizeClass({ "vue-ui-data-table__tbody__row": true, "vue-ui-data-table__tbody__row-even": c % 2 === 0, "vue-ui-data-table__tbody__row-odd": c % 2 !== 0 })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(o, (d, u2) => (openBlock(), createElementBlock("td", {
              role: "cell",
              "data-cell": (t.colNames[u2] && t.colNames[u2].name ? t.colNames[u2].name : "") || t.colNames[u2] || "",
              style: normalizeStyle({ outline: unref(_) }),
              class: "vue-ui-data-table__tbody__td"
            }, [
              createBaseVNode("div", q, [
                d.color ? (openBlock(), createElementBlock("svg", G, [
                  createVNode($, {
                    plot: { x: 10, y: 10 },
                    color: d.color,
                    radius: 9,
                    shape: t.config.shape || d.shape || "circle"
                  }, null, 8, ["color", "shape"])
                ])) : createCommentVNode("", true),
                renderSlot(s2.$slots, "td", { td: d }, void 0, true)
              ])
            ], 12, M))), 256))
          ], 6))), 256))
        ])
      ])
    ], 2));
  }
};
var W = s(H, [["__scopeId", "data-v-5cbf64d8"]]);

export {
  W
};
//# sourceMappingURL=chunk-AG6S3GFO.js.map
