import {
  u
} from "./chunk-PP6VIFVK.js";
import "./chunk-3LFGMZCN.js";
import "./chunk-4SKEOFB2.js";
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-data-ui-bEKZH8jG.js
var Vt = {
  key: 0,
  style: { width: "100%", display: "flex", gap: "6px", "align-items": "center", color: "#FF0000" }
};
var Ut = { style: { width: "36px" } };
var ht = {
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
    "lap",
    "toggleAnnotator"
  ],
  setup(F, { expose: G, emit: M }) {
    const n = F, { component: W, dataset: X, config: Q } = toRefs(n), s = {
      VueUi3dBar: defineAsyncComponent(() => import("./vue-ui-3d-bar-f7YaBbrh-MNA73COF.js")),
      VueUiAgePyramid: defineAsyncComponent(() => import("./vue-ui-age-pyramid-DkfNZR86-M37NSCTL.js")),
      VueUiAnnotator: defineAsyncComponent(() => import("./vue-ui-annotator-DrVu5Pu0-ZNCQWKEE.js")),
      VueUiCandlestick: defineAsyncComponent(() => import("./vue-ui-candlestick-Bw1O3QmK-62QOSP2P.js")),
      VueUiChestnut: defineAsyncComponent(() => import("./vue-ui-chestnut-DE1AMXeX-3IHYJEBQ.js")),
      VueUiDashboard: defineAsyncComponent(() => import("./vue-ui-dashboard-CAkCNUBh-JTHOEFEJ.js")),
      VueUiDigits: defineAsyncComponent(() => import("./vue-ui-digits-BaXAiH4u-62U3B34B.js")),
      VueUiDonut: defineAsyncComponent(() => import("./vue-ui-donut-7GM_Wd1Y-EIDW6IJK.js")),
      VueUiDonutEvolution: defineAsyncComponent(() => import("./vue-ui-donut-evolution-DbU4RlP6-DEACVPZM.js")),
      VueUiGalaxy: defineAsyncComponent(() => import("./vue-ui-galaxy-D6RFyIbQ-3PFI5UQF.js")),
      VueUiGauge: defineAsyncComponent(() => import("./vue-ui-gauge-DNJXnyLw-JCU6C4YT.js")),
      VueUiHeatmap: defineAsyncComponent(() => import("./vue-ui-heatmap-Ba6RMSTk-QN5H2CBV.js")),
      VueUiKpi: defineAsyncComponent(() => import("./vue-ui-kpi-C8wyHy1H-RCQPMPMP.js")),
      VueUiMiniLoader: defineAsyncComponent(() => import("./vue-ui-mini-loader-DutVmCuC-2IG7MQTP.js")),
      VueUiMolecule: defineAsyncComponent(() => import("./vue-ui-molecule-BOkIojio-WU6PFSMN.js")),
      VueUiMoodRadar: defineAsyncComponent(() => import("./vue-ui-mood-radar-C8U8PHaq-XS4VJ44D.js")),
      VueUiNestedDonuts: defineAsyncComponent(() => import("./vue-ui-nested-donuts-Bv2D1uFd-JO54OJPN.js")),
      VueUiOnion: defineAsyncComponent(() => import("./vue-ui-onion-CT9YjU8v-BYYYUTRD.js")),
      VueUiQuadrant: defineAsyncComponent(() => import("./vue-ui-quadrant-C_9VNAXg-HC6J3CII.js")),
      VueUiRadar: defineAsyncComponent(() => import("./vue-ui-radar-C2QM_ee9-GO4LHB4P.js")),
      VueUiRating: defineAsyncComponent(() => import("./vue-ui-rating-DVpgv2AY-636R5Z2R.js")),
      VueUiRelationCircle: defineAsyncComponent(() => import("./vue-ui-relation-circle-OXfdAyky-PMISX4LX.js")),
      VueUiRings: defineAsyncComponent(() => import("./vue-ui-rings-qLQ-gl21-QG5AYGVI.js")),
      VueUiScatter: defineAsyncComponent(() => import("./vue-ui-scatter-4LbMvEAD-YKJSOWLT.js")),
      VueUiScreenshot: defineAsyncComponent(() => import("./vue-ui-screenshot-BV6ZYQRk-MNQE4TZE.js")),
      VueUiSkeleton: defineAsyncComponent(() => import("./vue-ui-skeleton-BY8Jg9a_-YAGYF4MM.js")),
      VueUiSmiley: defineAsyncComponent(() => import("./vue-ui-smiley-BQ_3uicm-JSICBGRC.js")),
      VueUiSparkbar: defineAsyncComponent(() => import("./vue-ui-sparkbar-DxXt-GHr-JDN7YYCP.js")),
      VueUiSparkgauge: defineAsyncComponent(() => import("./vue-ui-sparkgauge-BCPkJveV-2VBCRYPU.js")),
      VueUiSparkHistogram: defineAsyncComponent(() => import("./vue-ui-sparkhistogram-BKcr2mFc-V3R5GAER.js")),
      VueUiSparkline: defineAsyncComponent(() => import("./vue-ui-sparkline-DYHUFUOp-5HRDY4VA.js")),
      VueUiSparkStackbar: defineAsyncComponent(() => import("./vue-ui-sparkstackbar-Btag2osm-WIEKKZ23.js")),
      VueUiTable: defineAsyncComponent(() => import("./vue-ui-table-CyuRalnp-KUO3OVED.js")),
      VueUiTableSparkline: defineAsyncComponent(() => import("./vue-ui-table-sparkline-Yg2I33yZ-IUQDKTL4.js")),
      VueUiThermometer: defineAsyncComponent(() => import("./vue-ui-thermometer-DXwbqNrn-JSC3MYJ6.js")),
      VueUiTiremarks: defineAsyncComponent(() => import("./vue-ui-tiremarks-DJowPFwY-UIDLBPJA.js")),
      VueUiTreemap: defineAsyncComponent(() => import("./vue-ui-treemap-Bn5JU5BI-42LUFM6A.js")),
      VueUiVerticalBar: defineAsyncComponent(() => import("./vue-ui-vertical-bar-CZxN7L9z-DZKAE6DM.js")),
      VueUiWaffle: defineAsyncComponent(() => import("./vue-ui-waffle-CzUpKfkZ-6U46YF3J.js")),
      VueUiWheel: defineAsyncComponent(() => import("./vue-ui-wheel-CCje_ZSc-25L2R2LZ.js")),
      VueUiXy: defineAsyncComponent(() => import("./vue-ui-xy-Drm1aAb--H3UUAC6J.js")),
      VueUiTableHeatmap: defineAsyncComponent(() => import("./vue-ui-table-heatmap-DlGeS3l9-HSCIRY5Q.js")),
      VueUiAccordion: defineAsyncComponent(() => import("./vue-ui-accordion-m-s-7akB-7VOR5FYG.js")),
      VueUiQuickChart: defineAsyncComponent(() => import("./vue-ui-quick-chart-BDBlm9uu-H2CQWFIF.js")),
      VueUiCursor: defineAsyncComponent(() => import("./vue-ui-cursor-DbfjKtpf-JVX4LTXY.js")),
      VueUiSparkTrend: defineAsyncComponent(() => import("./vue-ui-spark-trend-BhCJfY_p-YL2G7GBG.js")),
      VueUiStripPlot: defineAsyncComponent(() => import("./vue-ui-strip-plot-BIXF3VxN-BBKN6UMZ.js")),
      VueUiDumbbell: defineAsyncComponent(() => import("./vue-ui-dumbbell-BacTx3zB-M4LXWP4M.js")),
      VueUiWordCloud: defineAsyncComponent(() => import("./vue-ui-word-cloud-D_5y92zN-YPUTBOI7.js")),
      VueUiXyCanvas: defineAsyncComponent(() => import("./vue-ui-xy-canvas-jieVsnBN-AR3UNNI6.js")),
      VueUiFlow: defineAsyncComponent(() => import("./vue-ui-flow-D2G0YWL9-66CS72H4.js")),
      VueUiParallelCoordinatePlot: defineAsyncComponent(() => import("./vue-ui-parallel-coordinate-plot-in5qpfXf-WVFOIQ7R.js")),
      VueUiTimer: defineAsyncComponent(() => import("./vue-ui-timer-Brr7buaM-RI7P6H5D.js")),
      VueUiCarouselTable: defineAsyncComponent(() => import("./vue-ui-carousel-table-kcQa0FHw-56LWCZFD.js")),
      VueUiGizmo: defineAsyncComponent(() => import("./vue-ui-gizmo-Db7-gRmB-3MGJGKHJ.js")),
      VueUiStackbar: defineAsyncComponent(() => import("./vue-ui-stackbar-C2mRU7ya-6TDDVO3V.js")),
      VueUiBullet: defineAsyncComponent(() => import("./vue-ui-bullet-CYDMehDZ-RADY3LRJ.js"))
    }, $ = {
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
    }, g = computed(() => !s[n.component]), j = computed(() => s[n.component] || null), i = ref(null), z = computed(() => {
      const t = $[n.component] || [], a = {};
      return t.includes("config") && (a.config = Q.value), t.includes("dataset") && (a.dataset = X.value), a;
    }), p = ref(() => null), m = ref(() => null), d = ref(() => null), V = ref(() => null), U = ref(() => null), f = ref(() => null), v = ref(() => null), h = ref(() => null), k = ref(() => null), S = ref(() => null), b = ref(() => null), y = ref(() => null), T = ref(() => null), A = ref(() => null), C = ref(() => null), P = ref(() => null), D = ref(() => null), x = ref(() => null), L = ref(() => null), _ = ref(() => null), B = ref(() => null), I = ref(() => null), E = ref(() => null), H = ref(() => null);
    onMounted(() => {
      if (g.value)
        throw new Error(`

Vue Data UI exception:
The provided component "${n.component}" does not exist. Check the spelling.

Available components:

${Object.keys(s).map((t) => `. ${t}
`).join("")}`);
    }), watch(i, async (t) => {
      t && (t.generatePdf && (p.value = t.generatePdf), t.generateImage && (d.value = t.generateImage), t.generateCsv && (m.value = t.generateCsv), t.getItemsPositions && (V.value = t.getItemsPositions), t.toggleReadonly && (U.value = t.toggleReadonly), t.shoot && (f.value = t.shoot), t.close && (v.value = t.close), t.restoreOrder && (h.value = t.restoreOrder), t.recalculateHeight && (k.value = t.recalculateHeight), t.toggleLock && (S.value = t.toggleLock), t.toggleTable && (b.value = t.toggleTable), t.toggleLabels && (y.value = t.toggleLabels), t.toggleSort && (T.value = t.toggleSort), t.toggleStack && (A.value = t.toggleStack), t.toggleTooltip && (C.value = t.toggleTooltip), t.start && (P.value = t.start), t.pause && (D.value = t.pause), t.reset && (x.value = t.reset), t.restart && (L.value = t.restart), t.lap && (_.value = t.lap), t.toggleAnimation && (B.value = t.toggleAnimation), t.pauseAnimation && (I.value = t.pauseAnimation), t.resumeAnimation && (E.value = t.resumeAnimation), t.toggleAnnotator && (H.value = t.toggleAnnotator));
    });
    const K = () => {
      const t = [
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
        "resumeAnimation",
        "toggleAnnotator"
      ], a = {};
      return t.forEach((u2) => {
        a[u2] = (...l) => M(u2, ...l);
      }), a;
    }, r = shallowReactive([]);
    return watch([r, i], () => {
      if (i.value)
        for (; r.length; ) {
          const [t, ...a] = r.shift();
          typeof i.value[t] == "function" && i.value[t](...a);
        }
    }), G({
      getData: (...t) => i.value && typeof i.value.getData == "function" ? i.value.getData() : r.push(["getData", ...t]),
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
      toggleStack: A,
      toggleTooltip: C,
      start: P,
      pause: D,
      reset: x,
      restart: L,
      lap: _,
      pauseAnimation: I,
      resumeAnimation: E,
      toggleAnimation: B,
      toggleAnnotator: H
    }), (t, a) => g.value ? (openBlock(), createElementBlock("div", Vt, [
      createBaseVNode("div", Ut, [
        createVNode(u, {
          name: "moodFlat",
          stroke: "#FF0000"
        })
      ]),
      createTextVNode(' The provided component "' + toDisplayString(unref(W)) + '" does not exist ', 1)
    ])) : (openBlock(), createBlock(resolveDynamicComponent(j.value), mergeProps({
      key: 1,
      ref_key: "currentComponentRef",
      ref: i
    }, z.value, toHandlers(K())), createSlots({ _: 2 }, [
      renderList(t.$slots, (u2, l) => ({
        name: l,
        fn: withCtx((q) => [
          renderSlot(t.$slots, l, normalizeProps(guardReactiveProps(q)))
        ])
      }))
    ]), 1040));
  }
};
export {
  ht as default
};
//# sourceMappingURL=vue-data-ui-bEKZH8jG-VHRILCPB.js.map
