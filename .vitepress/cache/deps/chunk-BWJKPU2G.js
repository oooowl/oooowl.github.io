import {
  tt
} from "./chunk-PYZKFHQM.js";
import {
  ae,
  re
} from "./chunk-LOF7EHPB.js";
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
  He,
  Ht,
  Nt,
  Q,
  R,
  Vt,
  Zt,
  ir,
  jt,
  qt,
  rt,
  te,
  tr,
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
  guardReactiveProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-table-sparkline-Yg2I33yZ.js
var Ne = ["id"];
var We = { style: { "z-index": "1", "padding-right": "24px" } };
var De = ["onClick"];
var Te = { style: { display: "flex", "flex-direction": "row", gap: "3px", "align-items": "center" } };
var Me = ["data-cell"];
var Ve = {
  dir: "auto",
  style: { display: "flex", "flex-direction": "row", "align-items": "center", gap: "6px" }
};
var Ee = ["data-cell", "onPointerenter"];
var Ge = ["data-cell"];
var Le = ["data-cell"];
var Be = ["data-cell"];
var Re = ["data-cell"];
var Ue = {
  key: 0,
  ref: "source",
  dir: "auto"
};
var He2 = {
  __name: "vue-ui-table-sparkline",
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
  setup(j, { expose: ee }) {
    const b = j;
    useCssVars((t) => ({
      "588e7231": t.tdo
    }));
    const { vue_ui_table_sparkline: te2 } = te(), F = ref(Dt()), E = ref(0), I = ref(0), e = computed({
      get: () => G(),
      set: (t) => t
    });
    function G() {
      const t = c({
        userConfig: b.config,
        defaultConfig: te2
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_table_sparkline[t.theme] || b.config,
          defaultConfig: t
        }),
        customPalette: R[t.theme] || rt
      } : t;
    }
    watch(() => b.config, (t) => {
      e.value = G(), q(), I.value += 1;
    }, { deep: true }), watch(() => b.dataset, (t) => {
      x.value = y.value, I.value += 1;
    }, { deep: true });
    const { isPrinting: L, isImaging: B, generatePdf: R2, generateImage: U } = re({
      elementId: `table_${F.value}`,
      fileName: e.value.title.text || "vue-ui-table-sparkline"
    }), ae2 = computed(() => tr(e.value.customPalette)), S = ref(null), H = ref(false), le = computed(() => e.value.responsiveBreakpoint);
    onMounted(() => {
      q();
    });
    function q() {
      jt(b.dataset) && qt({
        componentName: "VueUiTableSparkline",
        type: "dataset"
      });
      const t = new ResizeObserver((u2) => {
        u2.forEach((a) => {
          H.value = a.contentRect.width < le.value;
        });
      });
      S.value && t.observe(S.value);
    }
    const X = computed(() => (b.dataset.forEach((t, u2) => {
      Zt({
        datasetObject: t,
        requiredAttributes: ["name", "values"]
      }).forEach((a) => {
        qt({
          componentName: "VueUiTableSparkline",
          type: "datasetSerieAttribute",
          property: a,
          index: u2
        });
      });
    }), b.dataset.map((t, u2) => {
      const a = (t.values || []).map((n) => isNaN(n) ? 0 : n ?? 0), o = a.reduce((n, l) => n + l, 0);
      return {
        ...t,
        values: t.values || [],
        color: Q(t.color) || ae2.value[u2] || rt[u2] || rt[u2 % rt.length],
        sum: o,
        average: o / a.length,
        median: vt(a),
        sparklineDataset: a.map((n, l) => ({
          period: e.value.colNames[l] || `col ${l}`,
          value: n || 0
        }))
      };
    })));
    function oe(t) {
      const a = (t[0].values || []).map(
        (n, l) => t.map((f) => f.values[l] || [])
      ).map(
        (n) => n.map((l, f) => [l, f]).sort((l, f) => f[0] - l[0]).map((l) => l[1])
      );
      return t.map((n, l) => ({
        ...n,
        values: n.values || [],
        orders: a[l]
      }));
    }
    const y = computed(() => oe(X.value)), x = ref(y.value), ne = computed(() => Math.max(...x.value.map((t) => (t.values || []).length))), w = ref(void 0), O = ref(false), N = ref(void 0), W = ref(-1);
    function ue() {
      O.value = false, N.value = void 0, W.value = -1, x.value = y.value;
    }
    function se(t) {
      O.value = true, N.value = t;
      const u2 = y.value.map((l) => l.values[t] || []), a = w.value === t ? 1 : -1;
      W.value = a, t === w.value ? w.value = void 0 : w.value = t;
      const n = u2.map((l, f) => [f, l]).sort((l, f) => a * (f[1] - l[1])).map((l) => l[0]).map((l) => y.value[l]);
      x.value = n, I.value += 1;
    }
    const re2 = computed(() => Math.max(...b.dataset.map((t) => (t.values || []).length))), k = computed(() => {
      let t = e.value.colNames;
      if (!t.length)
        for (let a = 0; a < re2.value; a += 1)
          t.push(`col ${a + 1}`);
      e.value.showTotal && (t = [...t, e.value.translations.total]);
      let u2;
      return e.value.showAverage && e.value.showMedian ? u2 = [
        ...t,
        e.value.translations.average,
        e.value.translations.median
      ] : e.value.showAverage && !e.value.showMedian ? u2 = [...t, e.value.translations.average] : !e.value.showAverage && e.value.showMedian ? u2 = [...t, e.value.translations.median] : u2 = t, e.value.showSparklines ? [...u2, e.value.translations.chart] : u2;
    }), g = ref(void 0), _ = ref(void 0);
    function ie({ dataIndex: t, serieIndex: u2 }) {
      g.value = t, _.value = u2;
    }
    const J = ref(false);
    function de(t) {
      J.value = t, E.value += 1;
    }
    function K() {
      nextTick(() => {
        const t = [e.value.translations.serie].concat(k.value), u2 = X.value.map((n, l) => [
          [n.name],
          n.values,
          [n.sum],
          [n.average],
          [n.median]
        ]), a = [t].concat(u2), o = Vt(a);
        Nt({
          csvContent: o,
          title: e.value.title.text || "vue-ui-table-sparkline"
        });
      });
    }
    return ee({
      generatePdf: R2,
      generateImage: U,
      generateCsv: K,
      restoreOrder: ue
    }), (t, u2) => (openBlock(), createElementBlock("div", {
      ref_key: "tableContainer",
      ref: S,
      class: normalizeClass({ "vue-ui-responsive": H.value }),
      style: { overflow: "hidden" },
      id: `table_${F.value}`
    }, [
      createBaseVNode("div", {
        style: { overflow: "auto" },
        onPointerleave: u2[0] || (u2[0] = (a) => {
          _.value = void 0, g.value = void 0;
        })
      }, [
        createBaseVNode("table", {
          class: "vue-ui-data-table",
          style: normalizeStyle({ fontFamily: e.value.fontFamily, position: "relative" })
        }, [
          e.value.title.text ? (openBlock(), createElementBlock("caption", {
            key: 0,
            style: normalizeStyle({ backgroundColor: e.value.title.backgroundColor })
          }, [
            createBaseVNode("div", {
              style: normalizeStyle({
                fontSize: `${e.value.title.fontSize}px`,
                fontWeight: e.value.title.bold ? "bold" : "normal",
                color: e.value.title.color,
                textAlign: e.value.title.textAlign
              })
            }, toDisplayString(e.value.title.text), 5),
            e.value.title.subtitle.text ? (openBlock(), createElementBlock("div", {
              key: 0,
              style: normalizeStyle({
                fontSize: `${e.value.title.subtitle.fontSize}px`,
                fontWeight: e.value.title.subtitle.bold ? "bold" : "normal",
                color: e.value.title.subtitle.color,
                textAlign: e.value.title.textAlign
              })
            }, toDisplayString(e.value.title.subtitle.text), 5)) : createCommentVNode("", true)
          ], 4)) : createCommentVNode("", true),
          createBaseVNode("thead", We, [
            createBaseVNode("tr", {
              role: "row",
              class: "vue-ui-data-table__thead-row",
              style: normalizeStyle({
                backgroundColor: e.value.thead.backgroundColor,
                color: e.value.thead.color
              })
            }, [
              createBaseVNode("th", {
                role: "cell",
                style: normalizeStyle({
                  backgroundColor: e.value.thead.backgroundColor,
                  outline: e.value.thead.outline,
                  textAlign: e.value.thead.textAlign,
                  fontWeight: e.value.thead.bold ? "bold" : "normal"
                }),
                class: "sticky-col-first"
              }, toDisplayString(e.value.translations.serie), 5),
              (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (a, o) => (openBlock(), createElementBlock("th", {
                role: "cell",
                style: normalizeStyle({
                  background: e.value.thead.backgroundColor,
                  outline: e.value.thead.outline,
                  textAlign: e.value.thead.textAlign,
                  fontWeight: e.value.thead.bold ? "bold" : "normal",
                  minWidth: o === k.value.length - 1 ? "150px" : "",
                  cursor: y.value[0].values[o] !== void 0 ? "pointer" : "default"
                }),
                onClick: () => se(o),
                class: normalizeClass({ "sticky-col": o === k.value.length - 1 && e.value.showSparklines })
              }, [
                createBaseVNode("div", Te, [
                  createBaseVNode("span", null, toDisplayString(a), 1),
                  O.value && o === N.value && y.value[0].values[o] !== void 0 ? (openBlock(), createBlock(u, {
                    key: 0,
                    size: 18,
                    name: W.value === 1 ? "sort" : "sortReverse",
                    stroke: e.value.thead.color
                  }, null, 8, ["name", "stroke"])) : createCommentVNode("", true)
                ]),
                e.value.userOptions.show && o === k.value.length - 1 ? (openBlock(), createBlock(ae, {
                  ref_for: true,
                  ref: "details",
                  key: `user_option_${E.value}`,
                  backgroundColor: e.value.thead.backgroundColor,
                  color: e.value.thead.color,
                  isPrinting: unref(L),
                  isImaging: unref(B),
                  uid: F.value,
                  hasPdf: e.value.userOptions.buttons.pdf,
                  hasXls: e.value.userOptions.buttons.csv,
                  hasImg: e.value.userOptions.buttons.img,
                  hasFullscreen: e.value.userOptions.buttons.fullscreen,
                  isFullscreen: J.value,
                  titles: { ...e.value.userOptions.buttonTitles },
                  chartElement: S.value,
                  position: e.value.userOptions.position,
                  onToggleFullscreen: de,
                  onGeneratePdf: unref(R2),
                  onGenerateImage: unref(U),
                  onGenerateCsv: K
                }, createSlots({ _: 2 }, [
                  t.$slots.optionPdf ? {
                    name: "optionPdf",
                    fn: withCtx(() => [
                      renderSlot(t.$slots, "optionPdf", {}, void 0, true)
                    ]),
                    key: "0"
                  } : void 0,
                  t.$slots.optionCsv ? {
                    name: "optionCsv",
                    fn: withCtx(() => [
                      renderSlot(t.$slots, "optionCsv", {}, void 0, true)
                    ]),
                    key: "1"
                  } : void 0,
                  t.$slots.optionImg ? {
                    name: "optionImg",
                    fn: withCtx(() => [
                      renderSlot(t.$slots, "optionImg", {}, void 0, true)
                    ]),
                    key: "2"
                  } : void 0,
                  t.$slots.optionFullscreen ? {
                    name: "optionFullscreen",
                    fn: withCtx(({ toggleFullscreen: n, isFullscreen: l }) => [
                      renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: n, isFullscreen: l })), void 0, true)
                    ]),
                    key: "3"
                  } : void 0
                ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true)
              ], 14, De))), 256))
            ], 4)
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(x.value, (a, o) => (openBlock(), createElementBlock("tr", {
              role: "row",
              style: normalizeStyle({
                backgroundColor: e.value.tbody.backgroundColor,
                color: e.value.tbody.color
              }),
              class: normalizeClass({ "vue-ui-data-table__tbody__row": true, "vue-ui-data-table__tbody__row-even": o % 2 === 0, "vue-ui-data-table__tbody__row-odd": o % 2 !== 0 })
            }, [
              createBaseVNode("td", {
                role: "cell",
                style: normalizeStyle({
                  backgroundColor: e.value.tbody.backgroundColor,
                  outline: e.value.tbody.outline,
                  fontSize: `${e.value.tbody.fontSize}px`,
                  fontWeight: e.value.tbody.bold ? "bold" : "normal",
                  textAlign: e.value.tbody.textAlign
                }),
                "data-cell": e.value.translations.serie,
                class: "vue-ui-data-table__tbody__td sticky-col-first"
              }, [
                createBaseVNode("div", Ve, [
                  createBaseVNode("span", {
                    style: normalizeStyle({ color: a.color })
                  }, "⬤", 4),
                  createBaseVNode("span", null, toDisplayString(a.name ?? "-"), 1)
                ])
              ], 12, Me),
              (openBlock(true), createElementBlock(Fragment, null, renderList(ne.value, (n, l) => (openBlock(), createElementBlock("td", {
                dir: "auto",
                role: "cell",
                style: normalizeStyle({
                  outline: e.value.tbody.outline,
                  fontSize: `${e.value.tbody.fontSize}px`,
                  fontWeight: e.value.tbody.bold ? "bold" : "normal",
                  textAlign: e.value.tbody.textAlign,
                  backgroundColor: g.value !== void 0 && _.value !== void 0 && l === g.value && _.value === o ? `${a.color}33` : "",
                  borderRadius: g.value !== void 0 && _.value !== void 0 && l === g.value && _.value === o ? "3px" : ""
                }),
                "data-cell": k.value[l],
                class: "vue-ui-data-table__tbody__td",
                onPointerenter: (f) => {
                  _.value = o, g.value = l;
                }
              }, toDisplayString([null, void 0].includes(a.values[l]) ? "-" : unref(ir)(
                e.value.formatter,
                Number(a.values[l]),
                unref(Ht)({
                  p: e.value.prefix,
                  v: Number(a.values[l]),
                  s: e.value.suffix,
                  r: e.value.roundingValues
                }),
                { datapoint: a, seriesIndex: o, datapointIndex: l }
              )), 45, Ee))), 256)),
              e.value.showTotal ? (openBlock(), createElementBlock("td", {
                key: 0,
                dir: "auto",
                role: "cell",
                style: normalizeStyle({
                  outline: e.value.tbody.outline,
                  fontSize: `${e.value.tbody.fontSize}px`,
                  fontWeight: e.value.tbody.bold ? "bold" : "normal",
                  textAlign: e.value.tbody.textAlign
                }),
                "data-cell": e.value.translations.total,
                class: "vue-ui-data-table__tbody__td"
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                a.sum,
                unref(Ht)({
                  p: e.value.prefix,
                  v: a.sum,
                  s: e.value.suffix,
                  r: e.value.roundingTotal
                }),
                { datapoint: a.sum, seriesIndex: o }
              )), 13, Ge)) : createCommentVNode("", true),
              e.value.showAverage ? (openBlock(), createElementBlock("td", {
                key: 1,
                dir: "auto",
                role: "cell",
                style: normalizeStyle({
                  outline: e.value.tbody.outline,
                  fontSize: `${e.value.tbody.fontSize}px`,
                  fontWeight: e.value.tbody.bold ? "bold" : "normal",
                  textAlign: e.value.tbody.textAlign
                }),
                "data-cell": e.value.translations.average,
                class: "vue-ui-data-table__tbody__td"
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                a.average,
                unref(Ht)({
                  p: e.value.prefix,
                  v: a.average,
                  s: e.value.suffix,
                  r: e.value.roundingAverage
                }),
                { datapoint: a.average, seriesIndex: o }
              )), 13, Le)) : createCommentVNode("", true),
              e.value.showMedian ? (openBlock(), createElementBlock("td", {
                key: 2,
                dir: "auto",
                role: "cell",
                style: normalizeStyle({
                  outline: e.value.tbody.outline,
                  fontSize: `${e.value.tbody.fontSize}px`,
                  fontWeight: e.value.tbody.bold ? "bold" : "normal",
                  textAlign: e.value.tbody.textAlign
                }),
                "data-cell": e.value.translations.median,
                class: "vue-ui-data-table__tbody__td"
              }, toDisplayString(unref(ir)(
                e.value.formatter,
                a.median,
                unref(Ht)({
                  p: e.value.prefix,
                  v: a.median,
                  s: e.value.suffix,
                  r: e.value.roundingMedian
                }),
                { datapoint: a.median, seriesIndex: o }
              )), 13, Be)) : createCommentVNode("", true),
              e.value.showSparklines ? (openBlock(), createElementBlock("td", {
                key: 3,
                role: "cell",
                "data-cell": e.value.translations.chart,
                style: normalizeStyle({
                  outline: e.value.tbody.outline,
                  fontSize: `${e.value.tbody.fontSize}px`,
                  fontWeight: e.value.tbody.bold ? "bold" : "normal",
                  textAlign: e.value.tbody.textAlign
                }),
                class: "vue-ui-data-table__tbody__td sticky-col"
              }, [
                (openBlock(), createBlock(tt, {
                  key: `sparkline_${o}_${I.value}`,
                  onHoverIndex: ({ index: n }) => ie({ dataIndex: n, serieIndex: o }),
                  dataset: a.sparklineDataset,
                  showInfo: false,
                  selectedIndex: g.value,
                  config: {
                    type: e.value.sparkline.type,
                    style: {
                      backgroundColor: e.value.tbody.backgroundColor,
                      animation: {
                        show: e.value.sparkline.animation.show && !unref(L) && !unref(B),
                        animationFrames: e.value.sparkline.animation.animationFrames
                      },
                      line: {
                        color: a.color,
                        smooth: e.value.sparkline.smooth,
                        strokeWidth: e.value.sparkline.strokeWidth
                      },
                      bar: {
                        color: a.color
                      },
                      area: {
                        color: a.color,
                        opacity: e.value.sparkline.showArea ? 16 : 0,
                        useGradient: e.value.sparkline.useGradient
                      },
                      verticalIndicator: {
                        color: a.color
                      },
                      plot: {
                        radius: 9,
                        stroke: e.value.tbody.backgroundColor,
                        strokeWidth: 3
                      }
                    }
                  }
                }, null, 8, ["onHoverIndex", "dataset", "selectedIndex", "config"]))
              ], 12, Re)) : createCommentVNode("", true)
            ], 6))), 256))
          ])
        ], 4)
      ], 32),
      t.$slots.source ? (openBlock(), createElementBlock("div", Ue, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 10, Ne));
  }
};
var je = s(He2, [["__scopeId", "data-v-1516623f"]]);

export {
  je
};
//# sourceMappingURL=chunk-BWJKPU2G.js.map
