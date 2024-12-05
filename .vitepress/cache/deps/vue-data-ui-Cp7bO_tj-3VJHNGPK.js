import {
  u
} from "./chunk-57NPTS3S.js";
import "./chunk-WZWZ3JKY.js";
import "./chunk-TG4LWCJY.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  guardReactiveProps,
  mergeProps,
  normalizeProps,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReactive,
  toDisplayString,
  toHandlers,
  toRefs,
  unref,
  watch,
  withCtx
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-data-ui-Cp7bO_tj.js
var de = {
  key: 0,
  style: { width: "100%", display: "flex", gap: "6px", "align-items": "center", color: "#FF0000" }
};
var Ve = { style: { width: "36px" } };
var ve = {
  __name: "vue-data-ui",
  props: {
    component: { type: String },
    dataset: { type: [Object, Array, Number, String] },
    config: { type: Object }
  },
  emits: [
    "selectLegend",
    "selectDatapoint",
    "toggleOpenState",
    "saveAnnotations",
    "selectRoot",
    "selectBranch",
    "selectNut",
    "change",
    "selectPlot",
    "selectSide",
    "rate",
    "postImage",
    "hoverIndex",
    "selectX",
    "toggleLock",
    "toggleTooltip",
    "start",
    "play",
    "pause",
    "reset",
    "restart",
    "lap"
  ],
  setup(N, { expose: F, emit: G }) {
    const n = N, { component: M, dataset: W, config: X } = toRefs(n), s = {
      VueUi3dBar: defineAsyncComponent(() => import("./vue-ui-3d-bar-DcF1nyGW-ZB6N5NMD.js")),
      VueUiAgePyramid: defineAsyncComponent(() => import("./vue-ui-age-pyramid-Oe_yHDL0-47DHEMMZ.js")),
      VueUiAnnotator: defineAsyncComponent(() => import("./vue-ui-annotator-Dix6_Gm6-FLY5ZLZD.js")),
      VueUiCandlestick: defineAsyncComponent(() => import("./vue-ui-candlestick-CRwzWF6j-EZWK5CL6.js")),
      VueUiChestnut: defineAsyncComponent(() => import("./vue-ui-chestnut-CRk0RCB9-YBNVCJ6C.js")),
      VueUiDashboard: defineAsyncComponent(() => import("./vue-ui-dashboard-OyihaKdu-T6RZOW2B.js")),
      VueUiDigits: defineAsyncComponent(() => import("./vue-ui-digits-IKt4qT2--GZH66Z4Q.js")),
      VueUiDonut: defineAsyncComponent(() => import("./vue-ui-donut-DFaGk4fI-NAGGUA4K.js")),
      VueUiDonutEvolution: defineAsyncComponent(() => import("./vue-ui-donut-evolution-Dd4o37RP-UMEBBBHD.js")),
      VueUiGalaxy: defineAsyncComponent(() => import("./vue-ui-galaxy-CH1BDtWl-NBROXDE7.js")),
      VueUiGauge: defineAsyncComponent(() => import("./vue-ui-gauge-BXiy515T-GLJ6QPVI.js")),
      VueUiHeatmap: defineAsyncComponent(() => import("./vue-ui-heatmap-B-zWMk0Y-CG2BMOFP.js")),
      VueUiKpi: defineAsyncComponent(() => import("./vue-ui-kpi-CghbfSdM-6DLKK5O5.js")),
      VueUiMiniLoader: defineAsyncComponent(() => import("./vue-ui-mini-loader-C7roqZ4p-POXX47ME.js")),
      VueUiMolecule: defineAsyncComponent(() => import("./vue-ui-molecule-BwmkMEVN-IDQFIK5B.js")),
      VueUiMoodRadar: defineAsyncComponent(() => import("./vue-ui-mood-radar-DSznHxLS-WKSJGV57.js")),
      VueUiNestedDonuts: defineAsyncComponent(() => import("./vue-ui-nested-donuts-CiE4DdEQ-3BLNWZLU.js")),
      VueUiOnion: defineAsyncComponent(() => import("./vue-ui-onion-D9o6Rcgu-KIL7C34T.js")),
      VueUiQuadrant: defineAsyncComponent(() => import("./vue-ui-quadrant-Cs3A77us-SC2N3VA4.js")),
      VueUiRadar: defineAsyncComponent(() => import("./vue-ui-radar-CNSpiNrM-FHWGVWUK.js")),
      VueUiRating: defineAsyncComponent(() => import("./vue-ui-rating-b_iYZWF8-KTLLHHZ6.js")),
      VueUiRelationCircle: defineAsyncComponent(() => import("./vue-ui-relation-circle-nRf1pvD0-IB4ZLVZI.js")),
      VueUiRings: defineAsyncComponent(() => import("./vue-ui-rings-BgRc1o4_-6DAT4X3T.js")),
      VueUiScatter: defineAsyncComponent(() => import("./vue-ui-scatter-CVuoW-cD-NWFEGZQO.js")),
      VueUiScreenshot: defineAsyncComponent(() => import("./vue-ui-screenshot-Csc0dQL9-FZBKT3ZO.js")),
      VueUiSkeleton: defineAsyncComponent(() => import("./vue-ui-skeleton-B2sRnIXX-RASZRXKY.js")),
      VueUiSmiley: defineAsyncComponent(() => import("./vue-ui-smiley-D4s-AdIE-XRQR24QD.js")),
      VueUiSparkbar: defineAsyncComponent(() => import("./vue-ui-sparkbar-Bb1fq2GR-HPDTJW6S.js")),
      VueUiSparkgauge: defineAsyncComponent(() => import("./vue-ui-sparkgauge-DWuaAQbo-MZWI2DQ5.js")),
      VueUiSparkHistogram: defineAsyncComponent(() => import("./vue-ui-sparkhistogram-CjeJ3ch1-EPZROHNP.js")),
      VueUiSparkline: defineAsyncComponent(() => import("./vue-ui-sparkline-DGJDBArr-TNFEXONB.js")),
      VueUiSparkStackbar: defineAsyncComponent(() => import("./vue-ui-sparkstackbar-B3ul3qUZ-NIJBA4VR.js")),
      VueUiTable: defineAsyncComponent(() => import("./vue-ui-table-CmVi0nv2-DF55H5RC.js")),
      VueUiTableSparkline: defineAsyncComponent(() => import("./vue-ui-table-sparkline-eg2Qd8ws-3I7CFF7D.js")),
      VueUiThermometer: defineAsyncComponent(() => import("./vue-ui-thermometer-BePmFiwy-CU6ZQUTE.js")),
      VueUiTiremarks: defineAsyncComponent(() => import("./vue-ui-tiremarks-d6TmSHY7-J7ZSHAE2.js")),
      VueUiTreemap: defineAsyncComponent(() => import("./vue-ui-treemap-Qg0858o6-CKV55XQS.js")),
      VueUiVerticalBar: defineAsyncComponent(() => import("./vue-ui-vertical-bar-CieqHVD5-WWUWL57S.js")),
      VueUiWaffle: defineAsyncComponent(() => import("./vue-ui-waffle-CjNhM-mV-NTSESCIB.js")),
      VueUiWheel: defineAsyncComponent(() => import("./vue-ui-wheel-B8mbO6ht-YODLGBWE.js")),
      VueUiXy: defineAsyncComponent(() => import("./vue-ui-xy-x8KEsGV--DY45TB2E.js")),
      VueUiTableHeatmap: defineAsyncComponent(() => import("./vue-ui-table-heatmap-CgFr38QT-QQEDQTTB.js")),
      VueUiAccordion: defineAsyncComponent(() => import("./vue-ui-accordion-D_1fE5EF-TQKNAN34.js")),
      VueUiQuickChart: defineAsyncComponent(() => import("./vue-ui-quick-chart-CiiSUexi-ACQ3ITCJ.js")),
      VueUiCursor: defineAsyncComponent(() => import("./vue-ui-cursor-y0kdr0uA-SFX6FF3J.js")),
      VueUiSparkTrend: defineAsyncComponent(() => import("./vue-ui-spark-trend-CHKQGMLs-TKKZ7SY2.js")),
      VueUiStripPlot: defineAsyncComponent(() => import("./vue-ui-strip-plot-CIb2LSV8-GELCPKOZ.js")),
      VueUiDumbbell: defineAsyncComponent(() => import("./vue-ui-dumbbell-B7j1_JoQ-TTED6IGR.js")),
      VueUiWordCloud: defineAsyncComponent(() => import("./vue-ui-word-cloud-DMXrUmX5-WAVWTKPF.js")),
      VueUiXyCanvas: defineAsyncComponent(() => import("./vue-ui-xy-canvas-BYdTxzi6-N6KEVVYG.js")),
      VueUiFlow: defineAsyncComponent(() => import("./vue-ui-flow-DkPTzNv9-HF24HI6R.js")),
      VueUiParallelCoordinatePlot: defineAsyncComponent(() => import("./vue-ui-parallel-coordinate-plot-BcYrYXhG-OSKPVC4C.js")),
      VueUiTimer: defineAsyncComponent(() => import("./vue-ui-timer-COSI3Q5T-FC2FWCPH.js")),
      VueUiCarouselTable: defineAsyncComponent(() => import("./vue-ui-carousel-table-BHeEbRKY-KI2KJ2NY.js")),
      VueUiGizmo: defineAsyncComponent(() => import("./vue-ui-gizmo-CKQcbe_7-IPSRSDIY.js")),
      VueUiStackbar: defineAsyncComponent(() => import("./vue-ui-stackbar-DNROvZII-LRAJNUVZ.js")),
      VueUiBullet: defineAsyncComponent(() => import("./vue-ui-bullet-CQKaC4wG-YZOUBMQU.js"))
    }, Q = {
      VueUi3dBar: ["config", "dataset"],
      VueUiAgePyramid: ["config", "dataset"],
      VueUiAnnotator: ["config", "dataset"],
      VueUiCandlestick: ["config", "dataset"],
      VueUiChestnut: ["config", "dataset"],
      VueUiDashboard: ["config", "dataset"],
      VueUiDigits: ["config", "dataset"],
      VueUiDonut: ["config", "dataset"],
      VueUiDonutEvolution: ["config", "dataset"],
      VueUiGalaxy: ["config", "dataset"],
      VueUiGauge: ["config", "dataset"],
      VueUiHeatmap: ["config", "dataset"],
      VueUiKpi: ["config", "dataset"],
      VueUiMiniLoader: ["config"],
      VueUiMolecule: ["config", "dataset"],
      VueUiMoodRadar: ["config", "dataset"],
      VueUiNestedDonuts: ["config", "dataset"],
      VueUiOnion: ["config", "dataset"],
      VueUiQuadrant: ["config", "dataset"],
      VueUiRadar: ["config", "dataset"],
      VueUiRating: ["config", "dataset"],
      VueUiRelationCircle: ["config", "dataset"],
      VueUiRings: ["config", "dataset"],
      VueUiScatter: ["config", "dataset"],
      VueUiScreenshot: ["config"],
      VueUiSkeleton: ["config"],
      VueUiSmiley: ["config", "dataset"],
      VueUiSparkbar: ["config", "dataset"],
      VueUiSparkgauge: ["config", "dataset"],
      VueUiSparkHistogram: ["config", "dataset"],
      VueUiSparkline: ["config", "dataset"],
      VueUiSparkStackbar: ["config", "dataset"],
      VueUiTable: ["config", "dataset"],
      VueUiTableSparkline: ["config", "dataset"],
      VueUiThermometer: ["config", "dataset"],
      VueUiTiremarks: ["config", "dataset"],
      VueUiTreemap: ["config", "dataset"],
      VueUiVerticalBar: ["config", "dataset"],
      VueUiWaffle: ["config", "dataset"],
      VueUiWheel: ["config", "dataset"],
      VueUiXy: ["config", "dataset"],
      VueUiTableHeatmap: ["config", "dataset"],
      VueUiAccordion: ["config"],
      VueUiQuickChart: ["config", "dataset"],
      VueUiCursor: ["config"],
      VueUiSparkTrend: ["config", "dataset"],
      VueUiStripPlot: ["config", "dataset"],
      VueUiDumbbell: ["config", "dataset"],
      VueUiWordCloud: ["config", "dataset"],
      VueUiXyCanvas: ["config", "dataset"],
      VueUiFlow: ["config", "dataset"],
      VueUiParallelCoordinatePlot: ["config", "dataset"],
      VueUiTimer: ["config"],
      VueUiCarouselTable: ["config", "dataset"],
      VueUiGizmo: ["config", "dataset"],
      VueUiStackbar: ["config", "dataset"],
      VueUiBullet: ["config", "dataset"]
    }, g = computed(() => !s[n.component]), $ = computed(() => s[n.component] || null), i = ref(null), j = computed(() => {
      const e = Q[n.component] || [], a = {};
      return e.includes("config") && (a.config = X.value), e.includes("dataset") && (a.dataset = W.value), a;
    }), p = ref(() => null), m = ref(() => null), d = ref(() => null), V = ref(() => null), U = ref(() => null), f = ref(() => null), v = ref(() => null), h = ref(() => null), k = ref(() => null), S = ref(() => null), b = ref(() => null), y = ref(() => null), T = ref(() => null), C = ref(() => null), A = ref(() => null), P = ref(() => null), D = ref(() => null), x = ref(() => null), L = ref(() => null), _ = ref(() => null), B = ref(() => null), I = ref(() => null), E = ref(() => null);
    onMounted(() => {
      if (g.value)
        throw new Error(`

Vue Data UI exception:
The provided component "${n.component}" does not exist. Check the spelling.

Available components:

${Object.keys(s).map((e) => `. ${e}
`).join("")}`);
    }), watch(i, async (e) => {
      e && (e.generatePdf && (p.value = e.generatePdf), e.generateImage && (d.value = e.generateImage), e.generateCsv && (m.value = e.generateCsv), e.getItemsPositions && (V.value = e.getItemsPositions), e.toggleReadonly && (U.value = e.toggleReadonly), e.shoot && (f.value = e.shoot), e.close && (v.value = e.close), e.restoreOrder && (h.value = e.restoreOrder), e.recalculateHeight && (k.value = e.recalculateHeight), e.toggleLock && (S.value = e.toggleLock), e.toggleTable && (b.value = e.toggleTable), e.toggleLabels && (y.value = e.toggleLabels), e.toggleSort && (T.value = e.toggleSort), e.toggleStack && (C.value = e.toggleStack), e.toggleTooltip && (A.value = e.toggleTooltip), e.start && (P.value = e.start), e.pause && (D.value = e.pause), e.reset && (x.value = e.reset), e.restart && (L.value = e.restart), e.lap && (_.value = e.lap), e.toggleAnimation && (B.value = e.toggleAnimation), e.pauseAnimation && (I.value = e.pauseAnimation), e.resumeAnimation && (E.value = e.resumeAnimation));
    });
    const z = () => {
      const e = [
        "selectLegend",
        "selectDatapoint",
        "toggleOpenState",
        "saveAnnotations",
        "selectRoot",
        "selectBranch",
        "selectNut",
        "change",
        "selectPlot",
        "selectSide",
        "rate",
        "postImage",
        "hoverIndex",
        "selectX",
        "toggleLock",
        "toggleTooltip",
        "start",
        "pause",
        "reset",
        "restart",
        "lap",
        "toggleAnimation",
        "pauseAnimation",
        "resumeAnimation"
      ], a = {};
      return e.forEach((u2) => {
        a[u2] = (...l) => G(u2, ...l);
      }), a;
    }, r = shallowReactive([]);
    return watch([r, i], () => {
      if (i.value)
        for (; r.length; ) {
          const [e, ...a] = r.shift();
          typeof i.value[e] == "function" && i.value[e](...a);
        }
    }), F({
      getData: (...e) => i.value && typeof i.value.getData == "function" ? i.value.getData() : r.push(["getData", ...e]),
      generatePdf: p,
      generateCsv: m,
      generateImage: d,
      getItemsPositions: V,
      toggleReadonly: U,
      shoot: f,
      close: v,
      restoreOrder: h,
      recalculateHeight: k,
      toggleLock: S,
      toggleTable: b,
      toggleLabels: y,
      toggleSort: T,
      toggleStack: C,
      toggleTooltip: A,
      start: P,
      pause: D,
      reset: x,
      restart: L,
      lap: _,
      pauseAnimation: I,
      resumeAnimation: E,
      toggleAnimation: B
    }), (e, a) => g.value ? (openBlock(), createElementBlock("div", de, [
      createBaseVNode("div", Ve, [
        createVNode(u, {
          name: "moodFlat",
          stroke: "#FF0000"
        })
      ]),
      createTextVNode(' The provided component "' + toDisplayString(unref(M)) + '" does not exist ', 1)
    ])) : (openBlock(), createBlock(resolveDynamicComponent($.value), mergeProps({
      key: 1,
      ref_key: "currentComponentRef",
      ref: i
    }, j.value, toHandlers(z())), createSlots({ _: 2 }, [
      renderList(e.$slots, (u2, l) => ({
        name: l,
        fn: withCtx((K) => [
          renderSlot(e.$slots, l, normalizeProps(guardReactiveProps(K)))
        ])
      }))
    ]), 1040));
  }
};
export {
  ve as default
};
//# sourceMappingURL=vue-data-ui-Cp7bO_tj-3VJHNGPK.js.map
