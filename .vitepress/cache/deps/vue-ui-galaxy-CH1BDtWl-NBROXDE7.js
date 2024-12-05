import {
  C
} from "./chunk-KAESDEK5.js";
import {
  E
} from "./chunk-57X6EWGW.js";
import {
  W
} from "./chunk-AG6S3GFO.js";
import "./chunk-7VCRGXFE.js";
import {
  x
} from "./chunk-NVSFRQ42.js";
import {
  ie,
  se
} from "./chunk-KUISEN2N.js";
import {
  fs
} from "./chunk-XKFV7VRH.js";
import {
  p
} from "./chunk-VCFIOMKF.js";
import {
  R
} from "./chunk-SRQVUCUV.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  $t,
  Ge,
  Gt,
  Ht,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  et,
  ir,
  j,
  jt,
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
  createTextVNode,
  createVNode,
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
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-galaxy-CH1BDtWl.js
var Ke = ["id"];
var Qe = {
  key: 0,
  style: "width:100%;background:transparent;padding-bottom:24px"
};
var Ze = ["xmlns", "viewBox"];
var et2 = ["id"];
var tt = ["stdDeviation"];
var lt = ["d", "stroke", "stroke-width"];
var at = ["d", "stroke", "stroke-width"];
var ot = ["filter"];
var st = ["d", "stroke", "stroke-width"];
var rt = ["d", "stroke-width", "onMouseenter", "onClick"];
var ut = {
  key: 3,
  class: "vue-data-ui-watermark"
};
var nt = ["onClick"];
var it = { key: 0 };
var ct = { key: 1 };
var vt = ["innerHTML"];
var dt = {
  __name: "vue-ui-galaxy",
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
  emits: ["selectLegend", "selectDatapoint"],
  setup(ye, { expose: pe, emit: A }) {
    const p2 = ye, { vue_ui_galaxy: fe } = oe(), S = computed(() => !!p2.dataset && p2.dataset.length);
    onMounted(() => {
      H();
    });
    function H() {
      Xt(p2.dataset) ? Kt({
        componentName: "VueUiGalaxy",
        type: "dataset"
      }) : p2.dataset.forEach((t, a) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "values"]
        }).forEach((l) => {
          Kt({
            componentName: "VueUiGalaxy",
            type: "datasetSerieAttribute",
            property: l,
            index: a
          });
        });
      });
    }
    const _ = ref(Lt()), D = ref(null), ge = ref(null), V = ref(false), B = ref(""), f = ref(null), U = ref(0), X = ref(0), R3 = ref(0), Y = ref(0), e = computed({
      get: () => j2(),
      set: (t) => t
    });
    function j2() {
      const t = c({
        userConfig: p2.config,
        defaultConfig: fe
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_galaxy[t.theme] || p2.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => p2.config, (t) => {
      e.value = j2(), H(), X.value += 1, R3.value += 1, Y.value += 1;
    }, { deep: true });
    const { isPrinting: q, isImaging: J, generatePdf: K, generateImage: Q } = se({
      elementId: `galaxy_${_.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-galaxy"
    }), be = computed(() => or(e.value.customPalette)), b = ref({
      dataLabels: {
        show: e.value.style.chart.layout.labels.dataLabels.show
      },
      showTable: e.value.table.show,
      showTooltip: e.value.style.chart.tooltip.show
    }), G = ref({
      height: 180,
      // or 250 if non fibo
      width: 250
    }), c2 = ref([]);
    function M(t) {
      c2.value.includes(t.id) ? c2.value = c2.value.filter((a) => a !== t.id) : c2.value.push(t.id), A("selectLegend", T.value.map((a) => ({
        name: a.name,
        color: a.color,
        value: a.value
      })));
    }
    const C2 = computed(() => p2.dataset.map((t, a) => ({
      name: t.name,
      color: j(t.color) || be.value[a] || et[a] || et[a % et.length],
      value: t.values ? ir(t.values).reduce((l, o) => l + o, 0) : 0,
      absoluteValues: ir(t.values),
      id: Lt(),
      seriesIndex: a
    })).sort((t, a) => a.value - t.value));
    function me() {
      return C2.value.map((t) => ({
        name: t.name,
        color: t.color,
        value: t.value
      }));
    }
    const g = computed(() => C2.value.filter((t) => !c2.value.includes(t.id)).map((t) => t.value).reduce((t, a) => t + a, 0)), ke = ref(190), Z = computed(() => C2.value.filter((t) => !c2.value.includes(t.id))), T = computed(() => {
      const t = [];
      for (let a = 0; a < Z.value.length; a += 1) {
        const l = Z.value[a];
        let o = l.value / g.value * ke.value;
        a > 0 && t.length && (o += t[a - 1].points), t.push({
          points: o,
          ...l,
          seriesIndex: a,
          proportion: l.value / g.value,
          path: jt({
            points: o,
            startX: 115 + e.value.style.chart.layout.arcs.offsetX,
            startY: 90 + e.value.style.chart.layout.arcs.offsetY
          })
        });
      }
      return t.filter((a, l) => !c2.value.includes(a.id)).toSorted((a, l) => l.points - a.points);
    }), P = ref(false);
    function Ce(t) {
      P.value = t, U.value += 1;
    }
    const z = ref(null);
    function we({ datapoint: t, _relativeIndex: a, seriesIndex: l, show: o = false }) {
      z.value = {
        datapoint: t,
        seriesIndex: l,
        series: C2.value,
        config: e.value
      }, V.value = o, f.value = t.id;
      let r = "";
      const w = e.value.style.chart.tooltip.customFormat;
      Ht(w) && $t(() => w({
        seriesIndex: l,
        datapoint: t,
        series: C2.value,
        config: e.value
      })) ? B.value = w({
        seriesIndex: l,
        datapoint: t,
        series: C2.value,
        config: e.value
      }) : (r += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`, r += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`, e.value.style.chart.tooltip.showValue && (r += `<b>${nr(
        e.value.style.chart.layout.labels.dataLabels.formatter,
        t.value,
        Gt({
          p: e.value.style.chart.layout.labels.dataLabels.prefix,
          v: t.value,
          s: e.value.style.chart.layout.labels.dataLabels.suffix,
          r: e.value.style.chart.tooltip.roundingValue
        }),
        { datapoint: t, seriesIndex: l }
      )}</b>`), e.value.style.chart.tooltip.showPercentage && (e.value.style.chart.tooltip.showValue ? r += `<span>(${Gt({
        v: t.proportion * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })})</span></div>` : r += `<b>${Gt({
        v: t.proportion * 100,
        s: "%",
        r: e.value.style.chart.tooltip.roundingPercentage
      })}</b></div>`), B.value = `<div>${r}</div>`);
    }
    const ee = computed(() => C2.value.map((t, a) => ({
      ...t,
      proportion: (t.value || 0) / p2.dataset.map((l) => (l.values || []).reduce((o, r) => o + r, 0)).reduce((l, o) => l + o, 0),
      opacity: c2.value.includes(t.id) ? 0.5 : 1,
      shape: t.shape || "circle",
      segregate: () => M(t),
      isSegregated: c2.value.includes(t.id)
    }))), xe = computed(() => ({
      cy: "galaxy-div-legend",
      backgroundColor: e.value.style.chart.legend.backgroundColor,
      color: e.value.style.chart.legend.color,
      fontSize: e.value.style.chart.legend.fontSize,
      paddingBottom: 12,
      fontWeight: e.value.style.chart.legend.bold ? "bold" : ""
    })), m = computed(() => {
      const t = T.value.map((l) => ({
        name: l.name,
        color: l.color
      })), a = T.value.map((l) => l.value);
      return { head: t, body: a };
    });
    function te() {
      nextTick(() => {
        const t = m.value.head.map((o, r) => [[
          o.name
        ], [m.value.body[r]], [isNaN(m.value.body[r] / g.value) ? "-" : m.value.body[r] / g.value * 100]]), a = [[e.value.style.chart.title.text], [e.value.style.chart.title.subtitle.text], [[""], ["val"], ["%"]]].concat(t), l = Nt(a);
        Ot({ csvContent: l, title: e.value.style.chart.title.text || "vue-ui-galaxy" });
      });
    }
    const N = computed(() => {
      const t = [
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',
        Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: g.value, s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue }),
        "100%"
      ], a = m.value.head.map((r, w) => {
        const $e = Gt({ p: e.value.style.chart.layout.labels.dataLabels.prefix, v: m.value.body[w], s: e.value.style.chart.layout.labels.dataLabels.suffix, r: e.value.table.td.roundingValue });
        return [
          {
            color: r.color,
            name: r.name
          },
          $e,
          isNaN(m.value.body[w] / g.value) ? "-" : Gt({
            v: m.value.body[w] / g.value * 100,
            s: "%",
            r: e.value.table.td.roundingPercentage
          })
        ];
      }), l = {
        th: {
          backgroundColor: e.value.table.th.backgroundColor,
          color: e.value.table.th.color,
          outline: e.value.table.th.outline
        },
        td: {
          backgroundColor: e.value.table.td.backgroundColor,
          color: e.value.table.td.color,
          outline: e.value.table.td.outline
        },
        breakpoint: e.value.table.responsiveBreakpoint
      };
      return {
        colNames: [
          e.value.table.columnNames.series,
          e.value.table.columnNames.value,
          e.value.table.columnNames.percentage
        ],
        head: t,
        body: a,
        config: l
      };
    });
    function le() {
      b.value.showTable = !b.value.showTable;
    }
    function ae() {
      b.value.showTooltip = !b.value.showTooltip;
    }
    return pe({
      getData: me,
      generatePdf: K,
      generateCsv: te,
      generateImage: Q,
      toggleTable: le,
      toggleTooltip: ae
    }), (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "galaxyChart",
      ref: D,
      class: normalizeClass(`vue-ui-galaxy ${P.value ? "vue-data-ui-wrapper-fullscreen" : ""} ${e.value.useCssAnimation ? "" : "vue-ui-dna"}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: `galaxy_${_.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", Qe, [
        (openBlock(), createBlock(x, {
          key: `title_${X.value}`,
          config: {
            title: {
              cy: "galaxy-div-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "galaxy-div-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && S.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: ge,
        key: `user_option_${U.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(q),
        isImaging: unref(J),
        uid: _.value,
        hasTooltip: e.value.userOptions.buttons.tooltip && e.value.style.chart.tooltip.show,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isTooltip: b.value.showTooltip,
        isFullscreen: P.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: D.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: Ce,
        onGeneratePdf: unref(K),
        onGenerateCsv: te,
        onGenerateImage: unref(Q),
        onToggleTable: le,
        onToggleTooltip: ae
      }, createSlots({ _: 2 }, [
        t.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        t.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        t.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        t.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        t.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: o }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: o })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isTooltip", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      S.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        class: normalizeClass({ "vue-data-ui-fullscreen--on": P.value, "vue-data-ui-fulscreen--off": !P.value }),
        viewBox: `0 0 ${G.value.width} ${G.value.height}`,
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: `blur_${_.value}`,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%"
          }, [
            createBaseVNode("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: 100 / e.value.style.chart.layout.arcs.gradient.intensity
            }, null, 8, tt)
          ], 8, et2)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (l) => (openBlock(), createElementBlock("g", null, [
          l.value ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: l.path,
            fill: "none",
            stroke: e.value.style.chart.backgroundColor,
            "stroke-width": (e.value.style.chart.layout.arcs.strokeWidth + e.value.style.chart.layout.arcs.borderWidth) * (f.value === l.id && e.value.style.chart.layout.arcs.hoverEffect.show ? e.value.style.chart.layout.arcs.hoverEffect.multiplicator : 1),
            "stroke-linecap": "round"
          }, null, 8, lt)) : createCommentVNode("", true),
          l.value ? (openBlock(), createElementBlock("path", {
            key: 1,
            d: l.path,
            fill: "none",
            stroke: l.color,
            "stroke-width": e.value.style.chart.layout.arcs.strokeWidth * (f.value === l.id && e.value.style.chart.layout.arcs.hoverEffect.show ? e.value.style.chart.layout.arcs.hoverEffect.multiplicator : 1),
            "stroke-linecap": "round",
            class: normalizeClass(`${f.value && f.value !== l.id && e.value.useBlurOnHover ? "vue-ui-galaxy-blur" : ""}`)
          }, null, 10, at)) : createCommentVNode("", true),
          l.value && e.value.style.chart.layout.arcs.gradient.show ? (openBlock(), createElementBlock("g", {
            key: 2,
            filter: `url(#blur_${_.value})`
          }, [
            createBaseVNode("path", {
              d: l.path,
              fill: "none",
              stroke: e.value.style.chart.layout.arcs.gradient.color,
              "stroke-width": e.value.style.chart.layout.arcs.strokeWidth / 2 * (f.value === l.id && e.value.style.chart.layout.arcs.hoverEffect.show ? e.value.style.chart.layout.arcs.hoverEffect.multiplicator : 1),
              "stroke-linecap": "round",
              class: normalizeClass(`vue-ui-galaxy-gradient ${f.value && f.value !== l.id && e.value.useBlurOnHover ? "vue-ui-galaxy-blur" : ""}`)
            }, null, 10, st)
          ], 8, ot)) : createCommentVNode("", true)
        ]))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (l, o) => (openBlock(), createElementBlock("g", null, [
          l.value ? (openBlock(), createElementBlock("path", {
            key: 0,
            d: l.path,
            fill: "none",
            stroke: "transparent",
            "stroke-width": e.value.style.chart.layout.arcs.strokeWidth + e.value.style.chart.layout.arcs.borderWidth,
            "stroke-linecap": "round",
            onMouseenter: (r) => we({
              datapoint: l,
              relativeIndex: o,
              seriesIndex: l.seriesIndex,
              show: true
            }),
            onMouseleave: a[0] || (a[0] = (r) => {
              V.value = false, f.value = null;
            }),
            onClick: (r) => A("selectDatapoint", l)
          }, null, 40, rt)) : createCommentVNode("", true)
        ]))), 256)),
        renderSlot(t.$slots, "svg", { svg: G.value }, void 0, true)
      ], 14, Ze)) : createCommentVNode("", true),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", ut, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(q) || unref(J) })), void 0, true)
      ])) : createCommentVNode("", true),
      S.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 4,
        config: {
          type: "galaxy",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor,
            galaxy: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.chart.legend.show ? (openBlock(), createBlock(C, {
        key: `legend_${Y.value}`,
        legendSet: ee.value,
        config: xe.value,
        onClickMarker: a[1] || (a[1] = ({ legend: l }) => M(l))
      }, {
        item: withCtx(({ legend: l, index: o }) => [
          createBaseVNode("div", {
            onClick: (r) => M(l),
            style: normalizeStyle(`opacity:${c2.value.includes(l.id) ? 0.5 : 1}`)
          }, [
            createTextVNode(toDisplayString(l.name) + ": " + toDisplayString(unref(nr)(
              e.value.style.chart.layout.labels.dataLabels.formatter,
              l.value,
              unref(Gt)({
                p: e.value.style.chart.layout.labels.dataLabels.prefix,
                v: l.value,
                s: e.value.style.chart.layout.labels.dataLabels.suffix,
                r: e.value.style.chart.legend.roundingValue
              }),
              { datapoint: l, seriesIndex: o }
            )) + " ", 1),
            c2.value.includes(l.id) ? (openBlock(), createElementBlock("span", ct, " ( - % ) ")) : (openBlock(), createElementBlock("span", it, " (" + toDisplayString(isNaN(l.value / g.value) ? "-" : unref(Gt)({
              v: l.value / g.value * 100,
              s: "%",
              r: e.value.style.chart.legend.roundingPercentage
            })) + ") ", 1))
          ], 12, nt)
        ]),
        _: 1
      }, 8, ["legendSet", "config"])) : createCommentVNode("", true),
      renderSlot(t.$slots, "legend", { legend: ee.value }, void 0, true),
      createVNode(E, {
        show: b.value.showTooltip && V.value,
        backgroundColor: e.value.style.chart.tooltip.backgroundColor,
        color: e.value.style.chart.tooltip.color,
        borderRadius: e.value.style.chart.tooltip.borderRadius,
        borderColor: e.value.style.chart.tooltip.borderColor,
        borderWidth: e.value.style.chart.tooltip.borderWidth,
        fontSize: e.value.style.chart.tooltip.fontSize,
        backgroundOpacity: e.value.style.chart.tooltip.backgroundOpacity,
        position: e.value.style.chart.tooltip.position,
        offsetY: e.value.style.chart.tooltip.offsetY,
        parent: D.value,
        content: B.value,
        isCustom: unref(Ht)(e.value.style.chart.tooltip.customFormat)
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...z.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...z.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      S.value ? (openBlock(), createBlock(R, {
        key: 6,
        hideDetails: "",
        config: {
          open: b.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: e.value.style.chart.backgroundColor,
            color: e.value.style.chart.color
          },
          head: {
            backgroundColor: e.value.style.chart.backgroundColor,
            color: e.value.style.chart.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${R3.value}`,
            colNames: N.value.colNames,
            head: N.value.head,
            body: N.value.body,
            config: N.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: a[2] || (a[2] = (l) => b.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, vt)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, Ke));
  }
};
var _t = s(dt, [["__scopeId", "data-v-20ef4a66"]]);
export {
  _t as default
};
//# sourceMappingURL=vue-ui-galaxy-CH1BDtWl-NBROXDE7.js.map
