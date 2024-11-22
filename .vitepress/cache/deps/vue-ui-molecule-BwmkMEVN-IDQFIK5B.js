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
import {
  u
} from "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  $t,
  Ge,
  Ht,
  Kt,
  Lt,
  Mt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  et,
  mt,
  oe,
  or
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
  resolveComponent,
  toDisplayString,
  toRef,
  unref,
  watch,
  withCtx,
  withModifiers
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-molecule-BwmkMEVN.js
var Ct = ["cx", "cy", "r", "fill", "stroke", "stroke-width", "onClick", "onMouseover"];
var $t2 = {
  __name: "RecursiveCircles",
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    dataset: {
      type: Array,
      default: () => []
    },
    hoveredUid: {
      type: String,
      default: null
    },
    linkColor: {
      type: String,
      default: "#CCCCCC"
    },
    stroke: {
      type: String,
      default: "#FFFFFF"
    },
    strokeHovered: {
      type: String,
      default: "#000000"
    }
  },
  emits: ["zoom", "hover"],
  setup(a, { emit: k }) {
    const b = a;
    function u2(n) {
      k("zoom", n);
    }
    function c2(n) {
      k("hover", n);
    }
    return toRef(b, "dataset").value.forEach((n) => {
      n.nodes && n.nodes.length > 0 && n.nodes.forEach((v) => {
        v.ancestor = n;
      });
    }), (n, v) => {
      const R3 = resolveComponent("RecursiveCircles", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(a.dataset, (p2) => (openBlock(), createElementBlock(Fragment, null, [
        p2.polygonPath && p2.polygonPath.coordinates ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(p2.polygonPath.coordinates, (B, q) => (openBlock(), createElementBlock("circle", {
            cx: B.x,
            cy: B.y,
            r: p2.circleRadius,
            fill: `url(#gradient_${p2.color})`,
            stroke: a.hoveredUid && a.hoveredUid === p2.uid ? a.strokeHovered : a.stroke,
            "stroke-width": a.hoveredUid && a.hoveredUid === p2.uid ? p2.circleRadius / 6 : p2.circleRadius / 12,
            style: { cursor: "pointer" },
            onClick: withModifiers((D) => u2(p2), ["stop"]),
            onMouseover: (D) => c2(p2),
            onMouseleave: v[0] || (v[0] = (D) => c2(null))
          }, null, 40, Ct))), 256)),
          p2.nodes && p2.nodes.length > 0 ? (openBlock(), createBlock(R3, {
            key: 0,
            dataset: p2.nodes,
            color: a.color,
            stroke: a.stroke,
            strokeHovered: a.strokeHovered,
            hoveredUid: a.hoveredUid,
            onZoom: u2,
            onHover: c2
          }, null, 8, ["dataset", "color", "stroke", "strokeHovered", "hoveredUid"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64))), 256);
    };
  }
};
var xt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var wt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Pt = {
  __name: "RecursiveLinks",
  props: {
    dataset: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: "#DDDDDD"
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    }
  },
  setup(a) {
    return toRef(a, "dataset").value.forEach((u2) => {
      u2.nodes && u2.nodes.length > 0 && u2.nodes.forEach((c2) => {
        c2.ancestor = u2;
      });
    }), (u2, c2) => {
      const L = resolveComponent("RecursiveLinks", true);
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.dataset, (n) => (openBlock(), createElementBlock(Fragment, null, [
          n.polygonPath && n.polygonPath.coordinates ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(n.polygonPath.coordinates, (v, R3) => (openBlock(), createElementBlock(Fragment, null, [
            n.ancestor && n.ancestor.polygonPath ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("line", {
                x1: v.x,
                y1: v.y,
                x2: n.ancestor.polygonPath.coordinates[0].x,
                y2: n.ancestor.polygonPath.coordinates[0].y,
                stroke: a.backgroundColor,
                "stroke-width": n.circleRadius / 1.5
              }, null, 8, xt),
              createBaseVNode("line", {
                x1: v.x,
                y1: v.y,
                x2: n.ancestor.polygonPath.coordinates[0].x,
                y2: n.ancestor.polygonPath.coordinates[0].y,
                stroke: a.color,
                "stroke-width": n.circleRadius / 2
              }, null, 8, wt)
            ], 64)) : createCommentVNode("", true)
          ], 64))), 256)) : createCommentVNode("", true)
        ], 64))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.dataset, (n) => (openBlock(), createElementBlock(Fragment, null, [
          n.polygonPath && n.polygonPath.coordinates ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            n.nodes && n.nodes.length > 0 ? (openBlock(), createBlock(L, {
              key: 0,
              dataset: n.nodes,
              color: a.color,
              backgroundColor: a.backgroundColor
            }, null, 8, ["dataset", "color", "backgroundColor"])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 64))), 256))
      ], 64);
    };
  }
};
var Tt = ["x", "y", "fill", "font-size"];
var Ft = {
  __name: "RecursiveLabels",
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    dataset: {
      type: Array,
      default: () => []
    },
    hoveredUid: {
      type: String,
      default: null
    }
  },
  emits: ["zoom", "hover"],
  setup(a, { emit: k }) {
    return toRef(a, "dataset").value.forEach((c2) => {
      c2.nodes && c2.nodes.length > 0 && c2.nodes.forEach((L) => {
        L.ancestor = c2;
      });
    }), (c2, L) => {
      const n = resolveComponent("RecursiveLabels", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(a.dataset, (v) => (openBlock(), createElementBlock(Fragment, null, [
        v.polygonPath && v.polygonPath.coordinates ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(v.polygonPath.coordinates, (R3) => (openBlock(), createElementBlock("text", {
            x: R3.x,
            y: R3.y + v.circleRadius * 2,
            fill: a.color,
            "font-size": v.circleRadius,
            "text-anchor": "middle",
            style: { opacity: "0.8", "pointer-events": "none" }
          }, toDisplayString(v.name), 9, Tt))), 256)),
          v.nodes && v.nodes.length > 0 ? (openBlock(), createBlock(n, {
            key: 0,
            dataset: v.nodes,
            color: a.color,
            hoveredUid: a.hoveredUid
          }, null, 8, ["dataset", "color", "hoveredUid"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64))), 256);
    };
  }
};
var Rt = { style: { position: "relative", height: "100%", width: "100%" } };
var St = {
  __name: "BaseDirectionPad",
  props: {
    color: {
      type: String,
      default: "#FF0000"
    },
    isFullscreen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["moveLeft", "moveTop", "moveRight", "moveBottom", "reset"],
  setup(a, { emit: k }) {
    return (b, u2) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: ${a.isFullscreen ? "fixed" : "absolute"};bottom:0;right:${a.isFullscreen ? "12px" : "0"};width:80px;height:80px`),
      "data-html2canvas-ignore": ""
    }, [
      createBaseVNode("div", Rt, [
        createBaseVNode("button", {
          onClick: u2[0] || (u2[0] = withModifiers((c2) => k("moveLeft"), ["stop"])),
          style: { position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: a.color,
            name: "arrowLeft",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: u2[1] || (u2[1] = withModifiers((c2) => k("moveTop"), ["stop"])),
          style: { position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: a.color,
            name: "arrowTop",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: u2[2] || (u2[2] = withModifiers((c2) => k("moveRight"), ["stop"])),
          style: { position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: a.color,
            name: "arrowRight",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: u2[3] || (u2[3] = withModifiers((c2) => k("moveBottom"), ["stop"])),
          style: { position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: a.color,
            name: "arrowBottom",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: u2[4] || (u2[4] = withModifiers((c2) => k("reset"), ["stop"])),
          style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: a.color,
            name: "close",
            style: { cursor: "pointer" },
            strokeWidth: 2
          }, null, 8, ["stroke"])
        ])
      ])
    ], 4));
  }
};
var Lt2 = ["id"];
var Dt = {
  key: 0,
  style: "width:100%;background:transparent;"
};
var It = ["xmlns", "viewBox"];
var Ut = ["id"];
var Nt2 = ["stop-color"];
var zt = ["stop-color"];
var Bt = {
  key: 4,
  class: "vue-data-ui-watermark"
};
var Mt2 = ["innerHTML"];
var Ot2 = {
  __name: "vue-ui-molecule",
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
  setup(a, { expose: k }) {
    const b = a, { vue_ui_molecule: u2 } = oe(), c2 = computed(() => !!b.dataset && b.dataset.length);
    onMounted(() => {
      L();
    });
    function L() {
      Xt(b.dataset) && Kt({
        componentName: "VueUiMolecule",
        type: "dataset"
      });
    }
    const n = ref(Lt()), v = ref(null), R3 = ref(false), p2 = ref(""), B = ref(null), q = ref(null), D = ref(false), x2 = ref(null), ue = ref(null), Q = ref(0), ce = ref(0), de = ref(0), t = computed({
      get: () => ve(),
      set: (e) => e
    });
    function ve() {
      const e = c({
        userConfig: b.config,
        defaultConfig: u2
      });
      return e.theme ? {
        ...c({
          userConfig: Ge.vue_ui_molecule[e.theme] || b.config,
          defaultConfig: e
        }),
        customPalette: R2[e.theme] || et
      } : e;
    }
    watch(() => b.config, (e) => {
      t.value = ve(), L(), ce.value += 1, de.value += 1;
    }, { deep: true });
    const { isPrinting: fe, isImaging: pe, generatePdf: he, generateImage: ge } = se({
      elementId: `cluster_${n.value}`,
      fileName: t.value.style.chart.title.text || "vue-ui-molecule"
    }), De = computed(() => or(t.value.customPalette)), w = ref({
      showTable: t.value.table.show,
      showDataLabels: true,
      showTooltip: t.value.style.chart.tooltip.show
    });
    function ye(e, o = 0) {
      return Array.isArray(e) && e.length > 0 && e[0].nodes ? ye(e[0].nodes, o + 1) : o;
    }
    function Ie() {
      const e = ye(b.dataset);
      let o = 100, l = o;
      for (let d = 0; d < e; d += 1)
        o /= 1, l += o;
      return {
        height: l,
        width: l
      };
    }
    const I = ref(Ie()), _ = ref(`0 0 ${I.value.width} ${I.value.height}`);
    function me(e, o = { x: -I.value.width / 2.43, y: I.value.height / 2 }, l = I.value.width / 1.1, d = 24, i = 0, h = 0, j = "#BBBBBB") {
      if (e && e.length > 0) {
        const ae = mt({
          plot: o,
          radius: l,
          sides: e.length,
          rotation: i
        });
        e.forEach((g, M) => {
          const V = ae.coordinates[M];
          let U;
          if (g.ancestor ? g.ancestor.ancestor ? U = g.ancestor.color || j : (U = De.value[h] || et[h] || j, h += 1) : U = j, g.polygonPath = {
            coordinates: [V]
          }, g.circleRadius = d, g.color = U, g.uid = Lt(), g.nodes && g.nodes.length > 0) {
            const se2 = !g.ancestor || !g.ancestor.ancestor ? h : 0;
            g.nodes = me(
              g.nodes,
              V,
              l / 2.9,
              d / 2.2,
              i + Math.PI * M / g.nodes.length,
              se2,
              U
            );
          }
        });
      }
      return e;
    }
    function Ue(e) {
      const o = /* @__PURE__ */ new Set();
      function l(i) {
        i.forEach((h) => {
          h.color && !o.has(h.color) && o.add(h.color), h.nodes && h.nodes.length > 0 && l(h.nodes);
        });
      }
      l(e);
      const d = {};
      return Array.from(o).forEach((i, h) => {
        d[i] = `gradient_${h}`;
      }), d;
    }
    const Ne = computed(() => Ue(T.value)), T = computed(() => me(b.dataset));
    function ee() {
      D.value = false, q.value = null, ue.value = null, x2.value = null, oe2({
        polygonPath: {
          coordinates: [{ x: I.value.width / 2, y: I.value.height / 2 }]
        },
        circleRadius: 24
      });
    }
    const te = ref(null);
    function oe2(e) {
      B.value.focus(), nextTick(() => {
        te.value && cancelAnimationFrame(te.value);
        const o = _.value.split(" "), l = parseFloat(o[0]), d = parseFloat(o[1]), i = parseFloat(o[2]), h = parseFloat(o[3]), { x: j, y: ae } = e.polygonPath.coordinates[0], { circleRadius: g } = e, M = 8.34, V = j - g * M, U = ae - g * M, se2 = g * M * 2, Ge2 = g * M * 2, je = Math.sqrt((V - l) ** 2 + (U - d) ** 2), Y = Math.min(1200, Math.max(20, Math.floor(je / 10))), Ve = (V - l) / Y, Ye = (U - d) / Y, We = (se2 - i) / Y, qe = (Ge2 - h) / Y;
        let A = 0;
        function we() {
          _.value = `${l + Ve * A} ${d + Ye * A} ${i + We * A} ${h + qe * A}`, A += t.value.style.chart.zoom.speed, A <= Y && (te.value = requestAnimationFrame(we));
        }
        we();
      });
    }
    function ze(e) {
      q.value === e.uid ? ee() : (q.value = e.uid, ue.value = e, x2.value = {
        circleRadius: e.circleRadius,
        polygonPath: {
          coordinates: [{ x: e.polygonPath.coordinates[0].x, y: e.polygonPath.coordinates[0].y }]
        }
      }, oe2(e), D.value = e.uid !== T.value[0].uid);
    }
    function Be(e) {
      if (e.target.nodeName !== "circle")
        ee(), D.value = false;
      else
        return;
    }
    const le = ref(null);
    function Me(e) {
      le.value = {
        datapoint: e,
        seriesIndex: -1,
        series: T.value,
        config: t.value
      };
      const o = t.value.style.chart.tooltip.customFormat;
      if (Ht(o) && $t(() => o({
        seriesIndex: -1,
        datapoint: e,
        series: T.value,
        config: t.value
      })))
        p2.value = o({
          seriesIndex: -1,
          // well, ok
          datapoint: e,
          series: T.value,
          config: t.value
        });
      else {
        let l = "";
        l += `<div style="display:flex;align-items:center;gap:3px"><div style="color:${e.color}">⬤</div><div>${e.name}</div></div>`, e.details && (l += `<div style="width:100%;border-top:1px solid ${t.value.style.chart.tooltip.borderColor};margin-top: 2px">${e.details}</div>`), p2.value = `<div style="font-family:inherit">${l}</div>`;
      }
    }
    const be = ref(null), X = ref(null);
    function Oe(e) {
      be.value = e, e ? (R3.value = true, Me(e), X.value = e.uid) : (R3.value = false, p2.value = "", X.value = null);
    }
    function Z(e) {
      e === "right" && (x2.value.polygonPath.coordinates[0].x += x2.value.circleRadius), e === "left" && (x2.value.polygonPath.coordinates[0].x -= x2.value.circleRadius), e === "top" && (x2.value.polygonPath.coordinates[0].y -= x2.value.circleRadius), e === "bottom" && (x2.value.polygonPath.coordinates[0].y += x2.value.circleRadius), oe2(x2.value);
    }
    function He(e) {
      const o = [];
      function l(d) {
        d.forEach((i) => {
          const h = {
            name: i.name,
            details: i.details || "-",
            ancestor: i.ancestor && i.ancestor.name || "-",
            color: i.color || ""
          };
          o.push(h), i.nodes && i.nodes.length > 0 && l(i.nodes, i.name);
        });
      }
      return l(e), o;
    }
    const Ee = computed(() => He(T.value)), E2 = computed(() => {
      const e = [
        t.value.table.translations.nodeName,
        t.value.table.translations.details,
        t.value.table.translations.ancestor
      ], o = Ee.value.map((i, h) => [
        {
          color: i.color,
          name: i.name
        },
        i.details,
        i.ancestor || ""
      ]), l = {
        th: {
          backgroundColor: t.value.table.th.backgroundColor,
          color: t.value.table.th.color,
          outline: t.value.table.th.outline
        },
        td: {
          backgroundColor: t.value.table.td.backgroundColor,
          color: t.value.table.td.color,
          outline: t.value.table.td.outline
        },
        breakpoint: t.value.table.responsiveBreakpoint
      }, d = [
        t.value.table.translations.nodeName,
        t.value.table.translations.details,
        t.value.table.translations.ancestor
      ];
      return {
        head: e,
        body: o,
        config: l,
        colNames: d
      };
    });
    function ke() {
      nextTick(() => {
        const e = E2.value.body.map((d, i) => [[d[0].name], [d[1]], [d[2]]]), o = [[t.value.style.chart.title.text], [t.value.style.chart.title.subtitle.text], [[...E2.value.head]]].concat(e), l = Nt(o);
        Ot({ csvContent: l, title: t.value.style.chart.title.text || "vue-ui-molecule" });
      });
    }
    function Ae() {
      return T.value;
    }
    const G = ref(false);
    function Xe(e) {
      G.value = e, Q.value += 1;
    }
    function Ce() {
      w.value.showTable = !w.value.showTable;
    }
    function $e() {
      w.value.showDataLabels = !w.value.showDataLabels;
    }
    function xe() {
      w.value.showTooltip = !w.value.showTooltip;
    }
    return k({
      getData: Ae,
      generatePdf: he,
      generateCsv: ke,
      generateImage: ge,
      toggleTable: Ce,
      toggleLabels: $e,
      toggleTooltip: xe
    }), (e, o) => (openBlock(), createElementBlock("div", {
      onMouseleave: o[7] || (o[7] = (l) => {
        be.value = null, X.value = null;
      }),
      ref_key: "moleculeChart",
      ref: B,
      class: normalizeClass(`vue-ui-molecule ${G.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${t.value.style.fontFamily};width:100%; text-align:center;background:${t.value.style.chart.backgroundColor}`),
      id: `cluster_${n.value}`
    }, [
      t.value.style.chart.title.text ? (openBlock(), createElementBlock("div", Dt, [
        (openBlock(), createBlock(x, {
          key: `title_${ce.value}`,
          config: {
            title: {
              cy: "molecule-div-title",
              ...t.value.style.chart.title
            },
            subtitle: {
              cy: "molecule-div-subtitle",
              ...t.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      t.value.userOptions.show && c2.value ? (openBlock(), createBlock(ie, {
        ref_key: "details",
        ref: v,
        key: `user_options_${Q.value}`,
        backgroundColor: t.value.style.chart.backgroundColor,
        color: t.value.style.chart.color,
        isPrinting: unref(fe),
        isImaging: unref(pe),
        uid: n.value,
        hasTooltip: t.value.userOptions.buttons.tooltip && t.value.style.chart.tooltip.show,
        hasPdf: t.value.userOptions.buttons.pdf,
        hasXls: t.value.userOptions.buttons.csv,
        hasImg: t.value.userOptions.buttons.img,
        hasTable: t.value.userOptions.buttons.table,
        hasLabel: t.value.userOptions.buttons.labels,
        hasFullscreen: t.value.userOptions.buttons.fullscreen,
        isTooltip: w.value.showTooltip,
        titles: { ...t.value.userOptions.buttonTitles },
        chartElement: B.value,
        position: t.value.userOptions.position,
        onToggleFullscreen: Xe,
        onGeneratePdf: unref(he),
        onGenerateCsv: ke,
        onGenerateImage: unref(ge),
        onToggleTable: Ce,
        onToggleLabels: $e,
        onToggleTooltip: xe
      }, createSlots({ _: 2 }, [
        e.$slots.optionTooltip ? {
          name: "optionTooltip",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionTooltip", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        e.$slots.optionPdf ? {
          name: "optionPdf",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionPdf", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        e.$slots.optionCsv ? {
          name: "optionCsv",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionCsv", {}, void 0, true)
          ]),
          key: "2"
        } : void 0,
        e.$slots.optionImg ? {
          name: "optionImg",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionImg", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        e.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "4"
        } : void 0,
        e.$slots.optionLabels ? {
          name: "optionLabels",
          fn: withCtx(() => [
            renderSlot(e.$slots, "optionLabels", {}, void 0, true)
          ]),
          key: "5"
        } : void 0,
        e.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: d }) => [
            renderSlot(e.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: d })), void 0, true)
          ]),
          key: "6"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isTooltip", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      c2.value ? (openBlock(), createElementBlock("svg", {
        key: 2,
        xmlns: unref(Qt),
        viewBox: _.value,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": G.value, "vue-data-ui-fulscreen--off": !G.value }),
        style: normalizeStyle(`overflow: hidden; background:transparent;color:${t.value.style.chart.color}`),
        onClick: o[0] || (o[0] = withModifiers((l) => Be(l), ["stop"]))
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(Ne.value), (l) => (openBlock(), createElementBlock("radialGradient", {
            id: `gradient_${l}`,
            cx: "50%",
            cy: "30%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(Mt)(l, 0.5)
            }, null, 8, Nt2),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l
            }, null, 8, zt)
          ], 8, Ut))), 256))
        ]),
        createVNode(Pt, {
          dataset: T.value,
          color: t.value.style.chart.links.stroke,
          backgroundColor: t.value.style.chart.backgroundColor
        }, null, 8, ["dataset", "color", "backgroundColor"]),
        createVNode($t2, {
          dataset: T.value,
          hoveredUid: X.value,
          stroke: t.value.style.chart.nodes.stroke,
          strokeHovered: t.value.style.chart.nodes.strokeHovered,
          onZoom: ze,
          onHover: Oe
        }, null, 8, ["dataset", "hoveredUid", "stroke", "strokeHovered"]),
        w.value.showDataLabels ? (openBlock(), createBlock(Ft, {
          key: 0,
          dataset: T.value,
          color: t.value.style.chart.color,
          hoveredUid: X.value
        }, null, 8, ["dataset", "color", "hoveredUid"])) : createCommentVNode("", true),
        renderSlot(e.$slots, "svg", { svg: I.value }, void 0, true)
      ], 14, It)) : createCommentVNode("", true),
      D.value ? (openBlock(), createBlock(St, {
        key: `direction_pad_${Q.value}`,
        color: t.value.style.chart.color,
        isFullscreen: G.value,
        onMoveLeft: o[1] || (o[1] = (l) => Z("left")),
        onMoveRight: o[2] || (o[2] = (l) => Z("right")),
        onMoveTop: o[3] || (o[3] = (l) => Z("top")),
        onMoveBottom: o[4] || (o[4] = (l) => Z("bottom")),
        onReset: o[5] || (o[5] = (l) => {
          ee(), D.value = false;
        })
      }, null, 8, ["color", "isFullscreen"])) : createCommentVNode("", true),
      e.$slots.watermark ? (openBlock(), createElementBlock("div", Bt, [
        renderSlot(e.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(fe) || unref(pe) })), void 0, true)
      ])) : createCommentVNode("", true),
      c2.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 5,
        config: {
          type: "molecule",
          style: {
            backgroundColor: t.value.style.chart.backgroundColor,
            molecule: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      createVNode(E, {
        show: w.value.showTooltip && R3.value,
        backgroundColor: t.value.style.chart.tooltip.backgroundColor,
        color: t.value.style.chart.tooltip.color,
        borderRadius: t.value.style.chart.tooltip.borderRadius,
        borderColor: t.value.style.chart.tooltip.borderColor,
        borderWidth: t.value.style.chart.tooltip.borderWidth,
        fontSize: t.value.style.chart.tooltip.fontSize,
        backgroundOpacity: t.value.style.chart.tooltip.backgroundOpacity,
        position: t.value.style.chart.tooltip.position,
        offsetY: t.value.style.chart.tooltip.offsetY,
        parent: B.value,
        content: p2.value,
        isCustom: t.value.style.chart.tooltip.customFormat && typeof t.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(e.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...le.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(e.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...le.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      c2.value ? (openBlock(), createBlock(R, {
        key: 6,
        hideDetails: "",
        config: {
          open: w.value.showTable,
          maxHeight: 1e4,
          body: {
            backgroundColor: t.value.style.chart.backgroundColor,
            color: t.value.style.chart.color
          },
          head: {
            backgroundColor: t.value.style.chart.backgroundColor,
            color: t.value.style.chart.color
          }
        }
      }, {
        content: withCtx(() => [
          (openBlock(), createBlock(W, {
            key: `table_${de.value}`,
            colNames: E2.value.colNames,
            head: E2.value.head,
            body: E2.value.body,
            config: E2.value.config,
            title: `${t.value.style.chart.title.text}${t.value.style.chart.title.subtitle.text ? ` : ${t.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[6] || (o[6] = (l) => w.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Mt2)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 46, Lt2));
  }
};
var Kt2 = s(Ot2, [["__scopeId", "data-v-aafaabe0"]]);
export {
  Kt2 as default
};
//# sourceMappingURL=vue-ui-molecule-BwmkMEVN-IDQFIK5B.js.map
