import {
  $
} from "./chunk-H2UGMUIX.js";
import {
  ae,
  re
} from "./chunk-LOF7EHPB.js";
import {
  c
} from "./chunk-OBQGP7GO.js";
import "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  He,
  Nt,
  Vt,
  Yt,
  _t,
  jt,
  qt,
  te,
  vt
} from "./chunk-4SKEOFB2.js";
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
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  unref,
  useCssVars,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-table-heatmap-DlGeS3l9.js
var he = ["id"];
var ge = { role: "cell" };
var ye = { role: "row" };
var be = ["data-cell"];
var Ce = {
  key: 0,
  style: { display: "flex", "flex-direction": "row", gap: "2px", "align-items": "center" }
};
var _e = ["height", "width"];
var ke = {
  key: 0,
  role: "cell",
  "data-cell": "sum"
};
var $e = {
  key: 1,
  role: "cell",
  "data-cell": "average"
};
var Ie = {
  key: 2,
  role: "cell",
  "data-cell": "median"
};
var we = {
  key: 1,
  ref: "source",
  dir: "auto"
};
var xe = {
  __name: "vue-ui-table-heatmap",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(B, { expose: U }) {
    const m = B;
    useCssVars((e) => ({
      "4e1c0e72": J.value,
      "6ed4bc22": q.value
    }));
    const { vue_ui_table_heatmap: A } = te(), k = ref(Dt()), u = ref(false), b = ref(null), $2 = ref(false), x = ref(0), t = computed({
      get: () => F(),
      set: (e) => e
    });
    function F() {
      const e = c({
        userConfig: m.config,
        defaultConfig: A
      });
      return e.theme ? {
        ...c({
          userConfig: He.vue_ui_table_heatmap[e.theme] || m.config,
          defaultConfig: e
        })
      } : e;
    }
    watch(() => m.config, (e) => {
      t.value = F(), O();
    }, { deep: true });
    const { isPrinting: D, isImaging: H, generatePdf: P, generateImage: N } = re({
      elementId: `table_heatmap_${k.value}`,
      fileName: "vue-ui-table-heatmap"
    }), L = computed(() => t.value.table.responsiveBreakpoint), X = computed(() => !!m.dataset && m.dataset.length);
    onMounted(() => {
      O();
    });
    function O() {
      jt(m.dataset) && qt({
        componentName: "VueUiTableHeatmap",
        type: "dataset"
      });
      const e = new ResizeObserver((s2) => {
        s2.forEach((a) => {
          u.value = a.contentRect.width < L.value;
        });
      });
      b.value && e.observe(b.value);
    }
    const R = computed(() => m.dataset.map((e) => {
      const s2 = e.values.map((o) => isNaN(o) ? 0 : o), a = s2.reduce((o, d) => o + d, 0);
      return {
        ...e,
        values: s2,
        serieExtremes: {
          max: Math.max(...s2),
          min: Math.min(...s2)
        },
        sum: a,
        average: a / s2.length,
        median: vt(s2),
        displayValues: [e.name, ...e.values],
        id: Dt()
      };
    })), T = computed(() => {
      const e = R.value.flatMap((s2) => s2.values);
      return {
        min: Math.min(...e),
        max: Math.max(...e)
      };
    });
    function W(e, s2) {
      const a = t.value.style.heatmapColors.useIndividualScale;
      return Yt(t.value.style.heatmapColors.min, t.value.style.heatmapColors.max, a ? s2.min : T.value.min, a ? s2.max : T.value.max, e);
    }
    const V = computed(() => R.value.map((e) => ({
      ...e,
      colors: e.displayValues.map((s2) => isNaN(s2) ? t.value.style.backgroundColor : W(s2, e.serieExtremes))
    }))), q = computed(() => t.value.style.backgroundColor), J = computed(() => `${t.value.table.borderWidth}px`);
    function z() {
      nextTick(() => {
        const e = V.value.map((o) => [
          [o.name],
          o.displayValues,
          [o.sum],
          [o.average],
          [o.median]
        ]), s2 = [[[""], t.value.table.head.values, ["sum"], ["average"], ["median"]]].concat(e), a = Vt(s2);
        Nt({ csvContent: a, title: "vue-ui-table-heatmap" });
      });
    }
    function K(e) {
      $2.value = e, x.value += 1;
    }
    return U({
      generatePdf: P,
      generateCsv: z,
      generateImage: N
    }), (e, s2) => (openBlock(), createElementBlock("div", {
      ref_key: "tableContainer",
      ref: b,
      style: normalizeStyle(`width:100%; overflow-x:auto; container-type: inline-size;padding-top:${t.value.userOptions.show ? "36px" : ""}; ${$2.value ? "vue-data-ui-wrapper-fullscreen" : ""}; position:relative;`),
      class: normalizeClass({ "vue-ui-responsive": u.value }),
      id: `table_heatmap_${k.value}`
    }, [
      t.value.userOptions.show && X.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${x.value}`,
        backgroundColor: t.value.style.backgroundColor,
        color: t.value.style.color,
        isPrinting: unref(D),
        isImaging: unref(H),
        uid: k.value,
        hasPdf: t.value.userOptions.buttons.pdf,
        hasXls: t.value.userOptions.buttons.csv,
        hasImg: t.value.userOptions.buttons.img,
        hasFullscreen: t.value.userOptions.buttons.fullscreen,
        isFullscreen: $2.value,
        titles: { ...t.value.userOptions.buttonTitles },
        chartElement: b.value,
        position: t.value.userOptions.position,
        onToggleFullscreen: K,
        onGeneratePdf: unref(P),
        onGenerateCsv: z,
        onGenerateImage: unref(N)
      }, createSlots({ _: 2 }, [
        e.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        e.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        e.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        e.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: o }) => [
            renderSlot(e.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: o })), void 0, true)
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      createBaseVNode("table", {
        class: normalizeClass({ "vue-ui-table-heatmap": true }),
        style: normalizeStyle(`width:100%;font-family:${t.value.style.fontFamily};background:${t.value.style.backgroundColor};`)
      }, [
        createBaseVNode("caption", null, [
          renderSlot(e.$slots, "caption", {}, void 0, true)
        ]),
        createBaseVNode("thead", null, [
          createBaseVNode("tr", {
            role: "row",
            style: normalizeStyle(`background:${t.value.table.head.backgroundColor};color:${t.value.table.head.color}`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.value.table.head.values, (a, o) => (openBlock(), createElementBlock("th", ge, [
              renderSlot(e.$slots, "head", normalizeProps(guardReactiveProps({ value: a, rowIndex: o, type: typeof a, isResponsive: u.value })), void 0, true)
            ]))), 256))
          ], 4)
        ]),
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(V.value, (a, o) => (openBlock(), createElementBlock("tr", ye, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(a.displayValues, (d, i) => (openBlock(), createElementBlock("td", {
              role: "cell",
              "data-cell": t.value.table.head.values[i]
            }, [
              a.color && i === 0 ? (openBlock(), createElementBlock("div", Ce, [
                a.color ? (openBlock(), createElementBlock("svg", {
                  key: 0,
                  height: t.value.style.shapeSize,
                  width: t.value.style.shapeSize,
                  viewBox: "0 0 20 20",
                  style: { background: "none", overflow: "visible" }
                }, [
                  createVNode($, {
                    plot: { x: 10, y: 10 },
                    color: a.color,
                    radius: 9,
                    shape: a.shape || "circle"
                  }, null, 8, ["color", "shape"])
                ], 8, _e)) : createCommentVNode("", true),
                renderSlot(e.$slots, "rowTitle", normalizeProps(guardReactiveProps({ value: d, rowIndex: o, colIndex: i, type: typeof d, isResponsive: u.value })), void 0, true)
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                i === 0 ? renderSlot(e.$slots, "rowTitle", normalizeProps(mergeProps({ key: 0 }, { value: d, rowIndex: o, colIndex: i, type: typeof d, isResponsive: u.value })), void 0, true) : createCommentVNode("", true),
                i > 0 ? renderSlot(e.$slots, "cell", normalizeProps(mergeProps({ key: 1 }, { value: d, rowIndex: o, colIndex: i, type: typeof d, isResponsive: u.value, color: a.colors[i], textColor: unref(_t)(a.colors[i]) })), void 0, true) : createCommentVNode("", true)
              ], 64))
            ], 8, be))), 256)),
            t.value.table.showSum ? (openBlock(), createElementBlock("td", ke, [
              renderSlot(e.$slots, "sum", normalizeProps(guardReactiveProps({ value: a.sum, rowIndex: o, isResponsive: u.value })), void 0, true)
            ])) : createCommentVNode("", true),
            t.value.table.showAverage ? (openBlock(), createElementBlock("td", $e, [
              renderSlot(e.$slots, "average", normalizeProps(guardReactiveProps({ value: a.average, rowIndex: o, isResponsive: u.value })), void 0, true)
            ])) : createCommentVNode("", true),
            t.value.table.showMedian ? (openBlock(), createElementBlock("td", Ie, [
              renderSlot(e.$slots, "median", normalizeProps(guardReactiveProps({ value: a.median, rowIndex: o, isResponsive: u.value })), void 0, true)
            ])) : createCommentVNode("", true)
          ]))), 256))
        ])
      ], 4),
      e.$slots.source ? (openBlock(), createElementBlock("div", we, [
        renderSlot(e.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 14, he));
  }
};
var Ve = s(xe, [["__scopeId", "data-v-393e4e2f"]]);
export {
  Ve as default
};
//# sourceMappingURL=vue-ui-table-heatmap-DlGeS3l9-HSCIRY5Q.js.map
