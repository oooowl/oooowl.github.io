import {
  E
} from "./chunk-K5CEUZ2P.js";
import {
  W
} from "./chunk-ROOSILH6.js";
import "./chunk-H2UGMUIX.js";
import {
  x
} from "./chunk-AIHOZQHZ.js";
import {
  Se
} from "./chunk-BZKUIZ5F.js";
import {
  ae,
  re
} from "./chunk-LOF7EHPB.js";
import {
  Cs
} from "./chunk-QGOFMHVO.js";
import {
  p
} from "./chunk-FSTZFDG3.js";
import {
  R
} from "./chunk-MBHJSANR.js";
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
  Ft,
  He,
  It,
  Jt,
  Kt,
  Nt,
  R as R2,
  Vt,
  Xt,
  jt,
  qt,
  rt,
  te,
  tr
} from "./chunk-4SKEOFB2.js";
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
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-molecule-BOkIojio.js
var Pt = ["cx", "cy", "r", "fill", "stroke", "stroke-width", "onClick", "onMouseover"];
var Tt = {
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
  setup(n, { emit: $ }) {
    const b = n;
    function c2(s2) {
      $("zoom", s2);
    }
    function d(s2) {
      $("hover", s2);
    }
    return toRef(b, "dataset").value.forEach((s2) => {
      s2.nodes && s2.nodes.length > 0 && s2.nodes.forEach((v) => {
        v.ancestor = s2;
      });
    }), (s2, v) => {
      const R3 = resolveComponent("RecursiveCircles", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(n.dataset, (p2) => (openBlock(), createElementBlock(Fragment, null, [
        p2.polygonPath && p2.polygonPath.coordinates ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(p2.polygonPath.coordinates, (D, J) => (openBlock(), createElementBlock("circle", {
            cx: D.x,
            cy: D.y,
            r: p2.circleRadius,
            fill: `url(#gradient_${p2.color})`,
            stroke: n.hoveredUid && n.hoveredUid === p2.uid ? n.strokeHovered : n.stroke,
            "stroke-width": n.hoveredUid && n.hoveredUid === p2.uid ? p2.circleRadius / 6 : p2.circleRadius / 12,
            style: { cursor: "pointer" },
            onClick: withModifiers((A) => c2(p2), ["stop"]),
            onMouseover: (A) => d(p2),
            onMouseleave: v[0] || (v[0] = (A) => d(null))
          }, null, 40, Pt))), 256)),
          p2.nodes && p2.nodes.length > 0 ? (openBlock(), createBlock(R3, {
            key: 0,
            dataset: p2.nodes,
            color: n.color,
            stroke: n.stroke,
            strokeHovered: n.strokeHovered,
            hoveredUid: n.hoveredUid,
            onZoom: c2,
            onHover: d
          }, null, 8, ["dataset", "color", "stroke", "strokeHovered", "hoveredUid"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64))), 256);
    };
  }
};
var Ft2 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var Rt = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"];
var St = {
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
  setup(n) {
    return toRef(n, "dataset").value.forEach((c2) => {
      c2.nodes && c2.nodes.length > 0 && c2.nodes.forEach((d) => {
        d.ancestor = c2;
      });
    }), (c2, d) => {
      const L = resolveComponent("RecursiveLinks", true);
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(n.dataset, (s2) => (openBlock(), createElementBlock(Fragment, null, [
          s2.polygonPath && s2.polygonPath.coordinates ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(s2.polygonPath.coordinates, (v, R3) => (openBlock(), createElementBlock(Fragment, null, [
            s2.ancestor && s2.ancestor.polygonPath ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("line", {
                x1: v.x,
                y1: v.y,
                x2: s2.ancestor.polygonPath.coordinates[0].x,
                y2: s2.ancestor.polygonPath.coordinates[0].y,
                stroke: n.backgroundColor,
                "stroke-width": s2.circleRadius / 1.5
              }, null, 8, Ft2),
              createBaseVNode("line", {
                x1: v.x,
                y1: v.y,
                x2: s2.ancestor.polygonPath.coordinates[0].x,
                y2: s2.ancestor.polygonPath.coordinates[0].y,
                stroke: n.color,
                "stroke-width": s2.circleRadius / 2
              }, null, 8, Rt)
            ], 64)) : createCommentVNode("", true)
          ], 64))), 256)) : createCommentVNode("", true)
        ], 64))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(n.dataset, (s2) => (openBlock(), createElementBlock(Fragment, null, [
          s2.polygonPath && s2.polygonPath.coordinates ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            s2.nodes && s2.nodes.length > 0 ? (openBlock(), createBlock(L, {
              key: 0,
              dataset: s2.nodes,
              color: n.color,
              backgroundColor: n.backgroundColor
            }, null, 8, ["dataset", "color", "backgroundColor"])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 64))), 256))
      ], 64);
    };
  }
};
var Lt = ["x", "y", "fill", "font-size"];
var Dt2 = {
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
  setup(n, { emit: $ }) {
    return toRef(n, "dataset").value.forEach((d) => {
      d.nodes && d.nodes.length > 0 && d.nodes.forEach((L) => {
        L.ancestor = d;
      });
    }), (d, L) => {
      const s2 = resolveComponent("RecursiveLabels", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(n.dataset, (v) => (openBlock(), createElementBlock(Fragment, null, [
        v.polygonPath && v.polygonPath.coordinates ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(v.polygonPath.coordinates, (R3) => (openBlock(), createElementBlock("text", {
            x: R3.x,
            y: R3.y + v.circleRadius * 2,
            fill: n.color,
            "font-size": v.circleRadius,
            "text-anchor": "middle",
            style: { opacity: "0.8", "pointer-events": "none" }
          }, toDisplayString(v.name), 9, Lt))), 256)),
          v.nodes && v.nodes.length > 0 ? (openBlock(), createBlock(s2, {
            key: 0,
            dataset: v.nodes,
            color: n.color,
            hoveredUid: n.hoveredUid
          }, null, 8, ["dataset", "color", "hoveredUid"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64))), 256);
    };
  }
};
var At = { style: { position: "relative", height: "100%", width: "100%" } };
var It2 = {
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
  setup(n, { emit: $ }) {
    return (b, c2) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: ${n.isFullscreen ? "fixed" : "absolute"};bottom:0;right:${n.isFullscreen ? "12px" : "0"};width:80px;height:80px`),
      "data-html2canvas-ignore": ""
    }, [
      createBaseVNode("div", At, [
        createBaseVNode("button", {
          onClick: c2[0] || (c2[0] = withModifiers((d) => $("moveLeft"), ["stop"])),
          style: { position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: n.color,
            name: "arrowLeft",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: c2[1] || (c2[1] = withModifiers((d) => $("moveTop"), ["stop"])),
          style: { position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: n.color,
            name: "arrowTop",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: c2[2] || (c2[2] = withModifiers((d) => $("moveRight"), ["stop"])),
          style: { position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: n.color,
            name: "arrowRight",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: c2[3] || (c2[3] = withModifiers((d) => $("moveBottom"), ["stop"])),
          style: { position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: n.color,
            name: "arrowBottom",
            style: { cursor: "pointer" }
          }, null, 8, ["stroke"])
        ]),
        createBaseVNode("button", {
          onClick: c2[4] || (c2[4] = withModifiers((d) => $("reset"), ["stop"])),
          style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", height: "24px", width: "24px", padding: "0", background: "transparent", border: "none", display: "flex", "align-items": "center", "justify-content": "center" }
        }, [
          createVNode(u, {
            stroke: n.color,
            name: "close",
            style: { cursor: "pointer" },
            strokeWidth: 2
          }, null, 8, ["stroke"])
        ])
      ])
    ], 4));
  }
};
var Nt2 = ["id"];
var Ot = {
  key: 1,
  ref: "noTitle",
  class: "vue-data-ui-no-title-space",
  style: "height:36px; width: 100%;background:transparent"
};
var Ut = {
  key: 2,
  style: "width:100%;background:transparent;"
};
var zt = ["xmlns", "viewBox"];
var Bt = ["id"];
var Mt = ["stop-color"];
var Ht = ["stop-color"];
var Et = {
  key: 6,
  class: "vue-data-ui-watermark"
};
var Xt2 = {
  key: 8,
  ref: "source",
  dir: "auto"
};
var Gt = ["innerHTML"];
var jt2 = {
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
  setup(n, { expose: $ }) {
    const b = n, { vue_ui_molecule: c2 } = te(), d = computed(() => !!b.dataset && b.dataset.length);
    onMounted(() => {
      L();
    });
    function L() {
      jt(b.dataset) && qt({
        componentName: "VueUiMolecule",
        type: "dataset"
      });
    }
    const s2 = ref(Dt()), v = ref(null), R3 = ref(false), p2 = ref(""), D = ref(null), J = ref(null), A = ref(false), w = ref(null), de = ref(null), _ = ref(0), ve = ref(0), fe = ref(0), t = computed({
      get: () => pe(),
      set: (e) => e
    });
    function pe() {
      const e = c({
        userConfig: b.config,
        defaultConfig: c2
      });
      return e.theme ? {
        ...c({
          userConfig: He.vue_ui_molecule[e.theme] || b.config,
          defaultConfig: e
        }),
        customPalette: R2[e.theme] || rt
      } : e;
    }
    watch(() => b.config, (e) => {
      t.value = pe(), L(), ve.value += 1, fe.value += 1;
    }, { deep: true });
    const { isPrinting: he, isImaging: ge, generatePdf: ye, generateImage: me } = re({
      elementId: `cluster_${s2.value}`,
      fileName: t.value.style.chart.title.text || "vue-ui-molecule"
    }), Ie = computed(() => t.value.userOptions.show && !t.value.style.chart.title.text), Ne = computed(() => tr(t.value.customPalette)), P = ref({
      showTable: t.value.table.show,
      showDataLabels: true,
      showTooltip: t.value.style.chart.tooltip.show
    });
    function be(e, l = 0) {
      return Array.isArray(e) && e.length > 0 && e[0].nodes ? be(e[0].nodes, l + 1) : l;
    }
    function Oe() {
      const e = be(b.dataset);
      let l = 100, o = l;
      for (let u2 = 0; u2 < e; u2 += 1)
        l /= 1, o += l;
      return {
        height: o,
        width: o
      };
    }
    const I = ref(Oe()), ee = ref(`0 0 ${I.value.width} ${I.value.height}`);
    function ke(e, l = { x: -I.value.width / 2.43, y: I.value.height / 2 }, o = I.value.width / 1.1, u2 = 24, i = 0, h = 0, j = "#BBBBBB") {
      if (e && e.length > 0) {
        const se = Ft({
          plot: l,
          radius: o,
          sides: e.length,
          rotation: i
        });
        e.forEach((g, B) => {
          const V = se.coordinates[B];
          let N;
          if (g.ancestor ? g.ancestor.ancestor ? N = g.ancestor.color || j : (N = Ne.value[h] || rt[h] || j, h += 1) : N = j, g.polygonPath = {
            coordinates: [V]
          }, g.circleRadius = u2, g.color = N, g.uid = Dt(), g.nodes && g.nodes.length > 0) {
            const re2 = !g.ancestor || !g.ancestor.ancestor ? h : 0;
            g.nodes = ke(
              g.nodes,
              V,
              o / 2.9,
              u2 / 2.2,
              i + Math.PI * B / g.nodes.length,
              re2,
              N
            );
          }
        });
      }
      return e;
    }
    function Ue(e) {
      const l = /* @__PURE__ */ new Set();
      function o(i) {
        i.forEach((h) => {
          h.color && !l.has(h.color) && l.add(h.color), h.nodes && h.nodes.length > 0 && o(h.nodes);
        });
      }
      o(e);
      const u2 = {};
      return Array.from(l).forEach((i, h) => {
        u2[i] = `gradient_${h}`;
      }), u2;
    }
    const ze = computed(() => Ue(F.value)), F = computed(() => ke(b.dataset));
    function te2() {
      A.value = false, J.value = null, de.value = null, w.value = null, le({
        polygonPath: {
          coordinates: [{ x: I.value.width / 2, y: I.value.height / 2 }]
        },
        circleRadius: 24
      });
    }
    const oe = ref(null);
    function le(e) {
      D.value.focus(), nextTick(() => {
        oe.value && cancelAnimationFrame(oe.value);
        const l = ee.value.split(" "), o = parseFloat(l[0]), u2 = parseFloat(l[1]), i = parseFloat(l[2]), h = parseFloat(l[3]), { x: j, y: se } = e.polygonPath.coordinates[0], { circleRadius: g } = e, B = 8.34, V = j - g * B, N = se - g * B, re2 = g * B * 2, Ye = g * B * 2, We = Math.sqrt((V - o) ** 2 + (N - u2) ** 2), Y = Math.min(1200, Math.max(20, Math.floor(We / 10))), qe = (V - o) / Y, Ze = (N - u2) / Y, Je = (re2 - i) / Y, Ke = (Ye - h) / Y;
        let E2 = 0;
        function Te() {
          ee.value = `${o + qe * E2} ${u2 + Ze * E2} ${i + Je * E2} ${h + Ke * E2}`, E2 += t.value.style.chart.zoom.speed, E2 <= Y && (oe.value = requestAnimationFrame(Te));
        }
        Te();
      });
    }
    function Be(e) {
      J.value === e.uid ? te2() : (J.value = e.uid, de.value = e, w.value = {
        circleRadius: e.circleRadius,
        polygonPath: {
          coordinates: [{ x: e.polygonPath.coordinates[0].x, y: e.polygonPath.coordinates[0].y }]
        }
      }, le(e), A.value = e.uid !== F.value[0].uid);
    }
    function Me(e) {
      if (e.target.nodeName !== "circle")
        te2(), A.value = false;
      else
        return;
    }
    const ae2 = ref(null);
    function He2(e) {
      ae2.value = {
        datapoint: e,
        seriesIndex: -1,
        series: F.value,
        config: t.value
      };
      const l = t.value.style.chart.tooltip.customFormat;
      if (Xt(l) && Kt(() => l({
        seriesIndex: -1,
        datapoint: e,
        series: F.value,
        config: t.value
      })))
        p2.value = l({
          seriesIndex: -1,
          // well, ok
          datapoint: e,
          series: F.value,
          config: t.value
        });
      else {
        let o = "";
        o += `<div style="display:flex;align-items:center;gap:3px"><div style="color:${e.color}">⬤</div><div>${e.name}</div></div>`, e.details && (o += `<div style="width:100%;border-top:1px solid ${t.value.style.chart.tooltip.borderColor};margin-top: 2px">${e.details}</div>`), p2.value = `<div style="font-family:inherit">${o}</div>`;
      }
    }
    const Ce = ref(null), X = ref(null);
    function Ee(e) {
      Ce.value = e, e ? (R3.value = true, He2(e), X.value = e.uid) : (R3.value = false, p2.value = "", X.value = null);
    }
    function K(e) {
      e === "right" && (w.value.polygonPath.coordinates[0].x += w.value.circleRadius), e === "left" && (w.value.polygonPath.coordinates[0].x -= w.value.circleRadius), e === "top" && (w.value.polygonPath.coordinates[0].y -= w.value.circleRadius), e === "bottom" && (w.value.polygonPath.coordinates[0].y += w.value.circleRadius), le(w.value);
    }
    function Xe(e) {
      const l = [];
      function o(u2) {
        u2.forEach((i) => {
          const h = {
            name: i.name,
            details: i.details || "-",
            ancestor: i.ancestor && i.ancestor.name || "-",
            color: i.color || ""
          };
          l.push(h), i.nodes && i.nodes.length > 0 && o(i.nodes, i.name);
        });
      }
      return o(e), l;
    }
    const Ge = computed(() => Xe(F.value)), H = computed(() => {
      const e = [
        t.value.table.translations.nodeName,
        t.value.table.translations.details,
        t.value.table.translations.ancestor
      ], l = Ge.value.map((i, h) => [
        {
          color: i.color,
          name: i.name
        },
        i.details,
        i.ancestor || ""
      ]), o = {
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
      }, u2 = [
        t.value.table.translations.nodeName,
        t.value.table.translations.details,
        t.value.table.translations.ancestor
      ];
      return {
        head: e,
        body: l,
        config: o,
        colNames: u2
      };
    });
    function $e() {
      nextTick(() => {
        const e = H.value.body.map((u2, i) => [[u2[0].name], [u2[1]], [u2[2]]]), l = [[t.value.style.chart.title.text], [t.value.style.chart.title.subtitle.text], [[...H.value.head]]].concat(e), o = Vt(l);
        Nt({ csvContent: o, title: t.value.style.chart.title.text || "vue-ui-molecule" });
      });
    }
    function je() {
      return F.value;
    }
    const G = ref(false);
    function Ve(e) {
      G.value = e, _.value += 1;
    }
    function xe() {
      P.value.showTable = !P.value.showTable;
    }
    function we() {
      P.value.showDataLabels = !P.value.showDataLabels;
    }
    function Pe() {
      P.value.showTooltip = !P.value.showTooltip;
    }
    const Q = ref(false);
    function ne() {
      Q.value = !Q.value;
    }
    return $({
      getData: je,
      generatePdf: ye,
      generateCsv: $e,
      generateImage: me,
      toggleTable: xe,
      toggleLabels: we,
      toggleTooltip: Pe,
      toggleAnnotator: ne
    }), (e, l) => (openBlock(), createElementBlock("div", {
      onMouseleave: l[7] || (l[7] = (o) => {
        Ce.value = null, X.value = null;
      }),
      ref_key: "moleculeChart",
      ref: D,
      class: normalizeClass(`vue-ui-molecule ${G.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${t.value.style.fontFamily};width:100%; text-align:center;background:${t.value.style.chart.backgroundColor}`),
      id: `cluster_${s2.value}`
    }, [
      t.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: D.value,
        backgroundColor: t.value.style.chart.backgroundColor,
        color: t.value.style.chart.color,
        active: Q.value,
        onClose: ne
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      Ie.value ? (openBlock(), createElementBlock("div", Ot, null, 512)) : createCommentVNode("", true),
      t.value.style.chart.title.text ? (openBlock(), createElementBlock("div", Ut, [
        (openBlock(), createBlock(x, {
          key: `title_${ve.value}`,
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
      t.value.userOptions.show && d.value ? (openBlock(), createBlock(ae, {
        ref_key: "details",
        ref: v,
        key: `user_options_${_.value}`,
        backgroundColor: t.value.style.chart.backgroundColor,
        color: t.value.style.chart.color,
        isPrinting: unref(he),
        isImaging: unref(ge),
        uid: s2.value,
        hasTooltip: t.value.userOptions.buttons.tooltip && t.value.style.chart.tooltip.show,
        hasPdf: t.value.userOptions.buttons.pdf,
        hasXls: t.value.userOptions.buttons.csv,
        hasImg: t.value.userOptions.buttons.img,
        hasTable: t.value.userOptions.buttons.table,
        hasLabel: t.value.userOptions.buttons.labels,
        hasFullscreen: t.value.userOptions.buttons.fullscreen,
        isTooltip: P.value.showTooltip,
        titles: { ...t.value.userOptions.buttonTitles },
        chartElement: D.value,
        position: t.value.userOptions.position,
        hasAnnotator: t.value.userOptions.buttons.annotator,
        isAnnotation: Q.value,
        onToggleFullscreen: Ve,
        onGeneratePdf: unref(ye),
        onGenerateCsv: $e,
        onGenerateImage: unref(me),
        onToggleTable: xe,
        onToggleLabels: we,
        onToggleTooltip: Pe,
        onToggleAnnotator: ne
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
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: u2 }) => [
            renderSlot(e.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: u2 })), void 0, true)
          ]),
          key: "6"
        } : void 0,
        e.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: o, isAnnotator: u2 }) => [
            renderSlot(e.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: o, isAnnotator: u2 })), void 0, true)
          ]),
          key: "7"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasTooltip", "hasPdf", "hasXls", "hasImg", "hasTable", "hasLabel", "hasFullscreen", "isTooltip", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      d.value ? (openBlock(), createElementBlock("svg", {
        key: 4,
        xmlns: unref(Jt),
        viewBox: ee.value,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": G.value, "vue-data-ui-fulscreen--off": !G.value }),
        style: normalizeStyle(`overflow: hidden; background:transparent;color:${t.value.style.chart.color}`),
        onClick: l[0] || (l[0] = withModifiers((o) => Me(o), ["stop"]))
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(ze.value), (o) => (openBlock(), createElementBlock("radialGradient", {
            id: `gradient_${o}`,
            cx: "50%",
            cy: "30%",
            r: "50%",
            fx: "50%",
            fy: "50%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": unref(It)(o, 0.5)
            }, null, 8, Mt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": o
            }, null, 8, Ht)
          ], 8, Bt))), 256))
        ]),
        createVNode(St, {
          dataset: F.value,
          color: t.value.style.chart.links.stroke,
          backgroundColor: t.value.style.chart.backgroundColor
        }, null, 8, ["dataset", "color", "backgroundColor"]),
        createVNode(Tt, {
          dataset: F.value,
          hoveredUid: X.value,
          stroke: t.value.style.chart.nodes.stroke,
          strokeHovered: t.value.style.chart.nodes.strokeHovered,
          onZoom: Be,
          onHover: Ee
        }, null, 8, ["dataset", "hoveredUid", "stroke", "strokeHovered"]),
        P.value.showDataLabels ? (openBlock(), createBlock(Dt2, {
          key: 0,
          dataset: F.value,
          color: t.value.style.chart.color,
          hoveredUid: X.value
        }, null, 8, ["dataset", "color", "hoveredUid"])) : createCommentVNode("", true),
        renderSlot(e.$slots, "svg", { svg: I.value }, void 0, true)
      ], 14, zt)) : createCommentVNode("", true),
      A.value ? (openBlock(), createBlock(It2, {
        key: `direction_pad_${_.value}`,
        color: t.value.style.chart.color,
        isFullscreen: G.value,
        onMoveLeft: l[1] || (l[1] = (o) => K("left")),
        onMoveRight: l[2] || (l[2] = (o) => K("right")),
        onMoveTop: l[3] || (l[3] = (o) => K("top")),
        onMoveBottom: l[4] || (l[4] = (o) => K("bottom")),
        onReset: l[5] || (l[5] = (o) => {
          te2(), A.value = false;
        })
      }, null, 8, ["color", "isFullscreen"])) : createCommentVNode("", true),
      e.$slots.watermark ? (openBlock(), createElementBlock("div", Et, [
        renderSlot(e.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(he) || unref(ge) })), void 0, true)
      ])) : createCommentVNode("", true),
      d.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 7,
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
      e.$slots.source ? (openBlock(), createElementBlock("div", Xt2, [
        renderSlot(e.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      createVNode(E, {
        show: P.value.showTooltip && R3.value,
        backgroundColor: t.value.style.chart.tooltip.backgroundColor,
        color: t.value.style.chart.tooltip.color,
        borderRadius: t.value.style.chart.tooltip.borderRadius,
        borderColor: t.value.style.chart.tooltip.borderColor,
        borderWidth: t.value.style.chart.tooltip.borderWidth,
        fontSize: t.value.style.chart.tooltip.fontSize,
        backgroundOpacity: t.value.style.chart.tooltip.backgroundOpacity,
        position: t.value.style.chart.tooltip.position,
        offsetY: t.value.style.chart.tooltip.offsetY,
        parent: D.value,
        content: p2.value,
        isCustom: t.value.style.chart.tooltip.customFormat && typeof t.value.style.chart.tooltip.customFormat == "function"
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(e.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...ae2.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(e.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...ae2.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "backgroundColor", "color", "borderRadius", "borderColor", "borderWidth", "fontSize", "backgroundOpacity", "position", "offsetY", "parent", "content", "isCustom"]),
      d.value ? (openBlock(), createBlock(R, {
        key: 9,
        hideDetails: "",
        config: {
          open: P.value.showTable,
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
            key: `table_${fe.value}`,
            colNames: H.value.colNames,
            head: H.value.head,
            body: H.value.body,
            config: H.value.config,
            title: `${t.value.style.chart.title.text}${t.value.style.chart.title.subtitle.text ? ` : ${t.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: l[6] || (l[6] = (o) => P.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", {
                innerHTML: o,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, Gt)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o.name || o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"]))
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 46, Nt2));
  }
};
var ao = s(jt2, [["__scopeId", "data-v-f7e44332"]]);
export {
  ao as default
};
//# sourceMappingURL=vue-ui-molecule-BOkIojio-WU6PFSMN.js.map
