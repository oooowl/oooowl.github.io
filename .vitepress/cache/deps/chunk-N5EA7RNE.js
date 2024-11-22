import {
  Ke
} from "./chunk-LKTBRWPS.js";
import {
  ie,
  se
} from "./chunk-KUISEN2N.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Gt,
  Kt,
  Lt,
  Nt,
  Ot,
  R,
  Xt,
  _t,
  et,
  j,
  nr,
  oe,
  or,
  qt
} from "./chunk-TG4LWCJY.js";
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-table-sparkline-eg2Qd8ws.js
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
var Ge2 = ["data-cell"];
var Le = ["data-cell"];
var Be = ["data-cell"];
var Re = ["data-cell"];
var Ue = {
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
  setup(j2, { expose: ee }) {
    const b = j2;
    useCssVars((t) => ({
      "6ca111be": t.tdo
    }));
    const { vue_ui_table_sparkline: te } = oe(), F = ref(Lt()), E = ref(0), C = ref(0), e = computed({
      get: () => G(),
      set: (t) => t
    });
    function G() {
      const t = c({
        userConfig: b.config,
        defaultConfig: te
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_table_sparkline[t.theme] || b.config,
          defaultConfig: t
        }),
        customPalette: R[t.theme] || et
      } : t;
    }
    watch(() => b.config, (t) => {
      e.value = G(), q(), C.value += 1;
    }, { deep: true }), watch(() => b.dataset, (t) => {
      x.value = y.value, C.value += 1;
    }, { deep: true });
    const { isPrinting: L, isImaging: B, generatePdf: R2, generateImage: U } = se({
      elementId: `table_${F.value}`,
      fileName: e.value.title.text || "vue-ui-table-sparkline"
    }), ae = computed(() => or(e.value.customPalette)), I = ref(null), H = ref(false), le = computed(() => e.value.responsiveBreakpoint);
    onMounted(() => {
      q();
    });
    function q() {
      Xt(b.dataset) && Kt({
        componentName: "VueUiTableSparkline",
        type: "dataset"
      });
      const t = new ResizeObserver((u2) => {
        u2.forEach((a) => {
          H.value = a.contentRect.width < le.value;
        });
      });
      I.value && t.observe(I.value);
    }
    const X = computed(() => (b.dataset.forEach((t, u2) => {
      qt({
        datasetObject: t,
        requiredAttributes: ["name", "values"]
      }).forEach((a) => {
        Kt({
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
        color: j(t.color) || ae.value[u2] || et[u2] || et[u2 % et.length],
        sum: o,
        average: o / a.length,
        median: _t(a),
        sparklineDataset: a.map((n, l) => ({
          period: e.value.colNames[l] || `col ${l}`,
          value: n || 0
        }))
      };
    })));
    function oe2(t) {
      const a = (t[0].values || []).map(
        (n, l) => t.map((p) => p.values[l] || [])
      ).map(
        (n) => n.map((l, p) => [l, p]).sort((l, p) => p[0] - l[0]).map((l) => l[1])
      );
      return t.map((n, l) => ({
        ...n,
        values: n.values || [],
        orders: a[l]
      }));
    }
    const y = computed(() => oe2(X.value)), x = ref(y.value), ne = computed(() => Math.max(...x.value.map((t) => (t.values || []).length))), S = ref(void 0), O = ref(false), N = ref(void 0), W = ref(-1);
    function ue() {
      O.value = false, N.value = void 0, W.value = -1, x.value = y.value;
    }
    function se2(t) {
      O.value = true, N.value = t;
      const u2 = y.value.map((l) => l.values[t] || []), a = S.value === t ? 1 : -1;
      W.value = a, t === S.value ? S.value = void 0 : S.value = t;
      const n = u2.map((l, p) => [p, l]).sort((l, p) => a * (p[1] - l[1])).map((l) => l[0]).map((l) => y.value[l]);
      x.value = n, C.value += 1;
    }
    const re = computed(() => Math.max(...b.dataset.map((t) => (t.values || []).length))), k = computed(() => {
      let t = e.value.colNames;
      if (!t.length)
        for (let a = 0; a < re.value; a += 1)
          t.push(`col ${a + 1}`);
      e.value.showTotal && (t = [...t, e.value.translations.total]);
      let u2;
      return e.value.showAverage && e.value.showMedian ? u2 = [
        ...t,
        e.value.translations.average,
        e.value.translations.median
      ] : e.value.showAverage && !e.value.showMedian ? u2 = [...t, e.value.translations.average] : !e.value.showAverage && e.value.showMedian ? u2 = [...t, e.value.translations.median] : u2 = t, e.value.showSparklines ? [...u2, e.value.translations.chart] : u2;
    }), m = ref(void 0), _ = ref(void 0);
    function ie2({ dataIndex: t, serieIndex: u2 }) {
      m.value = t, _.value = u2;
    }
    const Y = ref(false);
    function de(t) {
      Y.value = t, E.value += 1;
    }
    function J() {
      nextTick(() => {
        const t = [e.value.translations.serie].concat(k.value), u2 = X.value.map((n, l) => [
          [n.name],
          n.values,
          [n.sum],
          [n.average],
          [n.median]
        ]), a = [t].concat(u2), o = Nt(a);
        Ot({
          csvContent: o,
          title: e.value.title.text || "vue-ui-table-sparkline"
        });
      });
    }
    return ee({
      generatePdf: R2,
      generateImage: U,
      generateCsv: J,
      restoreOrder: ue
    }), (t, u2) => (openBlock(), createElementBlock("div", {
      ref_key: "tableContainer",
      ref: I,
      class: normalizeClass({ "vue-ui-responsive": H.value }),
      style: { overflow: "hidden" },
      id: `table_${F.value}`
    }, [
      createBaseVNode("div", {
        style: { overflow: "auto" },
        onPointerleave: u2[0] || (u2[0] = (a) => {
          _.value = void 0, m.value = void 0;
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
                onClick: () => se2(o),
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
                e.value.userOptions.show && o === k.value.length - 1 ? (openBlock(), createBlock(ie, {
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
                  isFullscreen: Y.value,
                  titles: { ...e.value.userOptions.buttonTitles },
                  chartElement: I.value,
                  position: e.value.userOptions.position,
                  onToggleFullscreen: de,
                  onGeneratePdf: unref(R2),
                  onGenerateImage: unref(U),
                  onGenerateCsv: J
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
                  backgroundColor: m.value !== void 0 && _.value !== void 0 && l === m.value && _.value === o ? `${a.color}33` : "",
                  borderRadius: m.value !== void 0 && _.value !== void 0 && l === m.value && _.value === o ? "3px" : ""
                }),
                "data-cell": k.value[l],
                class: "vue-ui-data-table__tbody__td",
                onPointerenter: (p) => {
                  _.value = o, m.value = l;
                }
              }, toDisplayString([null, void 0].includes(a.values[l]) ? "-" : unref(nr)(
                e.value.formatter,
                Number(a.values[l]),
                unref(Gt)({
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
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                a.sum,
                unref(Gt)({
                  p: e.value.prefix,
                  v: a.sum,
                  s: e.value.suffix,
                  r: e.value.roundingTotal
                }),
                { datapoint: a.sum, seriesIndex: o }
              )), 13, Ge2)) : createCommentVNode("", true),
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
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                a.average,
                unref(Gt)({
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
              }, toDisplayString(unref(nr)(
                e.value.formatter,
                a.median,
                unref(Gt)({
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
                (openBlock(), createBlock(Ke, {
                  key: `sparkline_${o}_${C.value}`,
                  onHoverIndex: ({ index: n }) => ie2({ dataIndex: n, serieIndex: o }),
                  dataset: a.sparklineDataset,
                  showInfo: false,
                  selectedIndex: m.value,
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
      ], 32)
    ], 10, Ne));
  }
};
var Ze = s(Ue, [["__scopeId", "data-v-26b54f10"]]);

export {
  Ze
};
//# sourceMappingURL=chunk-N5EA7RNE.js.map
