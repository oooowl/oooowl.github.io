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
import "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  $t,
  Dt,
  He,
  Ht,
  Jt,
  Nt,
  R as R2,
  Vt,
  _t,
  ir,
  jt,
  k,
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
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-flow-D2G0YWL9.js
var st = ["id"];
var rt2 = {
  key: 1,
  ref: "noTitle",
  class: "vue-data-ui-no-title-space",
  style: "height:36px; width: 100%;background:transparent"
};
var ut = {
  key: 2,
  style: "width:100%;background:transparent;padding-bottom:24px"
};
var it = ["xmlns", "viewBox"];
var ct = ["id"];
var dt = ["stop-color"];
var vt = ["stop-color"];
var ft = ["d", "fill", "stroke", "stroke-width"];
var ht = ["x", "y", "height", "width", "fill", "stroke", "stroke-width", "onMouseenter"];
var mt = ["x", "y", "font-size", "fill"];
var gt = ["x", "y", "font-size", "fill"];
var pt = {
  key: 4,
  class: "vue-data-ui-watermark"
};
var bt = {
  key: 6,
  ref: "source",
  dir: "auto"
};
var yt = ["innerHTML"];
var kt = {
  __name: "vue-ui-flow",
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
  setup(ke, { expose: we }) {
    const g = ke, { vue_ui_flow: Ce } = te(), M = computed(() => !!g.dataset && g.dataset.length);
    onMounted(() => {
      R3();
    });
    function R3() {
      jt(g.dataset) && qt({
        componentName: "VueUiFlow",
        type: "dataset"
      });
    }
    const z = ref(Dt()), Y = ref(null), Z = ref(0), J = ref(0), T = ref(false);
    function $e(t) {
      T.value = t, Z.value += 1;
    }
    const e = computed({
      get: () => Q(),
      set: (t) => t
    });
    function Q() {
      const t = c({
        userConfig: g.config,
        defaultConfig: Ce
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_flow[t.theme] || g.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || rt
      } : t;
    }
    watch(() => g.config, (t) => {
      e.value = Q(), R3(), J.value += 1;
    }, { deep: true });
    const { isPrinting: ee, isImaging: te2, generatePdf: oe, generateImage: le } = re({
      elementId: `flow_${z.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-flow"
    }), _e = computed(() => e.value.userOptions.show && !e.value.style.chart.title.text), D = computed(() => tr(e.value.customPalette)), ae2 = computed(() => e.value.style.chart.nodes.gap), _ = computed(() => e.value.style.chart.nodes.width), I = ref({
      showTable: e.value.table.show
    }), ne = computed(() => e.value.style.chart.links.width), G = computed(() => !g.dataset || !g.dataset.length ? [] : g.dataset.map((t) => [
      t[0],
      t[1],
      k(t[2])
    ])), se = computed(() => {
      const t = {};
      function l(n) {
        t[n] || (t[n] = { inflow: 0, outflow: 0 });
      }
      G.value.forEach(([n, a, v]) => {
        l(n), l(a), t[n].outflow += v, t[a].inflow += v;
      });
      let o = 0;
      for (const n in t) {
        const a = Math.max(t[n].inflow, t[n].outflow);
        o = Math.max(o, a);
      }
      return o;
    });
    function xe(t) {
      return t / se.value * 100 + e.value.style.chart.nodes.minHeight;
    }
    function Ne(t) {
      const l = e.value.style.chart.nodes.minHeight;
      return (t - l) / 100 * se.value;
    }
    function Te(t) {
      const l = {}, o = {};
      function n(s2, r) {
        l[s2] || (l[s2] = { height: 0, level: null, inflow: 0, outflow: 0 }), l[s2].level === null && (l[s2].level = r), o[r] || (o[r] = []), o[r].includes(s2) || o[r].push(s2);
      }
      t.forEach(([s2, r, h], x2) => {
        const $ = l[s2] ? l[s2].level : 0, E = $ + 1;
        n(s2, $), n(r, E), l[s2].children || (l[s2].children = []), l[s2].children.push({ target: r, value: h }), l[s2].outflow += h, l[r].inflow += h;
      }), Object.keys(l).forEach((s2, r) => {
        l[s2].color = D.value[r] || D.value[r % D.value.length] || rt[r] || rt[r % d.length];
      });
      for (const s2 in l)
        l[s2].height = xe(Math.max(l[s2].inflow, l[s2].outflow)), l[s2].name = s2;
      const a = {};
      for (const s2 in o) {
        let r = 0;
        o[s2].forEach((h, x2) => {
          const $ = l[h].height;
          a[h] = {
            x: parseInt(s2, 10) * ne.value + e.value.style.chart.padding.left,
            y: r,
            absoluteY: r,
            height: $,
            i: x2,
            color: l[h].color,
            value: Ne($)
          }, r += $ + ae2.value;
        });
      }
      const v = [];
      for (const s2 in l) {
        let r = a[s2].absoluteY;
        l[s2].children && l[s2].children.forEach(({ target: h, value: x2 }, $) => {
          const E = a[h].y, V = a[s2], j = a[h], ce = k(r), de = k(r + x2 / l[s2].outflow * V.height), ve = k(E), fe = k(E + x2 / l[h].inflow * j.height), He2 = {
            id: Dt(),
            source: s2,
            target: h,
            path: `M ${k(V.x) + k(_.value)} ${ce} L ${k(V.x) + k(_.value)} ${de} L ${k(j.x)} ${fe} L ${k(j.x)} ${ve} Z`,
            value: x2,
            sourceColor: l[s2].color,
            targetColor: l[h].color
          };
          v.push(He2), r += de - ce, a[h].y += fe - ve;
        });
      }
      return { nodeCoordinates: a, links: v };
    }
    const p2 = computed(() => {
      const t = Te(g.dataset);
      return {
        nodes: Object.keys(t.nodeCoordinates).map((l, o) => ({
          ...t.nodeCoordinates[l],
          name: l
        })),
        links: t.links
      };
    }), Pe = computed(() => Fe(p2.value.nodes));
    function Fe(t) {
      const l = {};
      for (const n in t) {
        const { x: a, height: v } = t[n];
        l[a] || (l[a] = 0), l[a] += v + ae2.value;
      }
      return Math.max(...Object.values(l));
    }
    const B = computed(() => {
      const { top: t, right: l, left: o, bottom: n } = e.value.style.chart.padding, a = G.value.length * ne.value;
      return {
        height: Pe.value + t + n,
        width: l + Math.max(...p2.value.nodes.map((v) => v.x)) + _.value,
        left: o,
        top: t,
        right: a - l,
        p_top: t,
        p_bottom: n
      };
    });
    function Oe(t) {
      const l = {}, o = {}, n = /* @__PURE__ */ new Set();
      return G.value.forEach(([a, v, s2]) => {
        l[a] || (l[a] = []), o[v] || (o[v] = []), l[a].push(v), o[v].push(a);
      }), l[t] && l[t].forEach((a) => n.add(a)), o[t] && o[t].forEach((a) => n.add(a)), Array.from(n).concat(t);
    }
    const w = ref(null), A = ref(null);
    function Ie(t) {
      w.value = Oe(t.name), A.value = t.name;
    }
    function Ae() {
      w.value = null, A.value = null;
    }
    const re2 = computed(() => p2.value.links.map(({ source: t, target: l, sourceColor: o, targetColor: n, value: a }) => ({
      source: t,
      target: l,
      sourceColor: o,
      targetColor: n,
      value: a
    })));
    function ue() {
      nextTick(() => {
        const t = re2.value.map((n, a) => [
          [n.source],
          [n.target],
          [n.value]
        ]), l = [
          [e.value.style.chart.title.text],
          [e.value.style.chart.title.subtitle.text],
          [
            [e.value.table.columnNames.source],
            [e.value.table.columnNames.target],
            [e.value.table.columnNames.value]
          ]
        ].concat(t), o = Vt(l);
        Nt({
          csvContent: o,
          title: e.value.style.chart.title.text || "vue-ui-flow"
        });
      });
    }
    const L = computed(() => {
      const t = [
        e.value.table.columnNames.source,
        e.value.table.columnNames.target,
        e.value.table.columnNames.value
      ], l = re2.value.map((a, v) => [
        {
          color: a.sourceColor,
          name: a.source
        },
        {
          color: a.targetColor,
          name: a.target
        },
        Ht({
          p: e.value.style.chart.nodes.labels.prefix,
          v: a.value,
          s: e.value.style.chart.nodes.labels.suffix,
          r: e.value.style.chart.nodes.labels.rounding
        })
      ]), o = {
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
          e.value.table.columnNames.source,
          e.value.table.columnNames.target,
          e.value.table.columnNames.value
        ],
        head: t,
        body: l,
        config: o
      };
    });
    function Le() {
      return p2.value;
    }
    function ie() {
      I.value.showTable = !I.value.showTable;
    }
    const H = ref(false);
    function U() {
      H.value = !H.value;
    }
    return we({
      getData: Le,
      generateCsv: ue,
      generateImage: le,
      generatePdf: oe,
      toggleTable: ie,
      toggleAnnotator: U
    }), (t, l) => (openBlock(), createElementBlock("div", {
      ref_key: "flowChart",
      ref: Y,
      class: normalizeClass(`vue-ui-flow ${T.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;background:${e.value.style.chart.backgroundColor}`),
      id: `flow_${z.value}`
    }, [
      e.value.userOptions.buttons.annotator ? (openBlock(), createBlock(Se, {
        key: 0,
        parent: Y.value,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        active: H.value,
        onClose: U
      }, null, 8, ["parent", "backgroundColor", "color", "active"])) : createCommentVNode("", true),
      _e.value ? (openBlock(), createElementBlock("div", rt2, null, 512)) : createCommentVNode("", true),
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", ut, [
        (openBlock(), createBlock(x, {
          key: `title_${J.value}`,
          config: {
            title: {
              cy: "flow-title",
              ...e.value.style.chart.title
            },
            subtitle: {
              cy: "flow-subtitle",
              ...e.value.style.chart.title.subtitle
            }
          }
        }, null, 8, ["config"]))
      ])) : createCommentVNode("", true),
      e.value.userOptions.show && M.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${Z.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(ee),
        isImaging: unref(te2),
        uid: z.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: T.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: Y.value,
        position: e.value.userOptions.position,
        hasAnnotator: e.value.userOptions.buttons.annotator,
        isAnnotation: H.value,
        onToggleFullscreen: $e,
        onGeneratePdf: unref(oe),
        onGenerateCsv: ue,
        onGenerateImage: unref(le),
        onToggleTable: ie,
        onToggleAnnotator: U
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
        t.$slots.optionTable ? {
          name: "optionTable",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionTable", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: o, isFullscreen: n }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: o, isFullscreen: n })), void 0, true)
          ]),
          key: "4"
        } : void 0,
        t.$slots.optionAnnotator ? {
          name: "optionAnnotator",
          fn: withCtx(({ toggleAnnotator: o, isAnnotator: n }) => [
            renderSlot(t.$slots, "optionAnnotator", normalizeProps(guardReactiveProps({ toggleAnnotator: o, isAnnotator: n })), void 0, true)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "hasAnnotator", "isAnnotation", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      (openBlock(), createElementBlock("svg", {
        xmlns: unref(Jt),
        viewBox: `0 0 ${B.value.width} ${B.value.height}`,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": T.value, "vue-data-ui-fulscreen--off": !T.value }),
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.links, (o, n) => (openBlock(), createElementBlock("linearGradient", {
            id: o.id,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": o.sourceColor
            }, null, 8, dt),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": o.targetColor
            }, null, 8, vt)
          ], 8, ct))), 256))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.links, (o) => (openBlock(), createElementBlock("path", {
          class: "vue-ui-flow-link",
          d: o.path,
          fill: `url(#${o.id})`,
          stroke: e.value.style.chart.links.stroke,
          "stroke-width": e.value.style.chart.links.strokeWidth,
          style: normalizeStyle(`opacity:${A.value ? [o.target, o.source].includes(A.value) ? 1 : 0.3 : e.value.style.chart.links.opacity}`)
        }, null, 12, ft))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.nodes, (o, n) => (openBlock(), createElementBlock("rect", {
          class: "vue-ui-flow-node",
          x: o.x,
          y: unref(k)(o.absoluteY),
          height: unref(k)(o.height),
          width: _.value,
          fill: o.color,
          stroke: e.value.style.chart.nodes.stroke,
          "stroke-width": e.value.style.chart.nodes.strokeWidth,
          onMouseenter: (a) => Ie(o),
          onMouseleave: l[0] || (l[0] = (a) => Ae()),
          style: normalizeStyle(`opacity:${w.value ? w.value.includes(o.name) ? 1 : 0.2 : 1}`)
        }, null, 44, ht))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.nodes, (o, n) => (openBlock(), createElementBlock("text", {
          x: o.x + _.value / 2,
          y: unref(k)(o.absoluteY + o.height / 2 - e.value.style.chart.nodes.labels.fontSize / 4),
          "font-size": e.value.style.chart.nodes.labels.fontSize,
          fill: unref(_t)(o.color),
          "text-anchor": "middle",
          style: normalizeStyle(`pointer-events: none; opacity:${w.value ? w.value.includes(o.name) ? 1 : 0 : 1}`)
        }, toDisplayString(e.value.style.chart.nodes.labels.abbreviation.use ? unref($t)({ source: o.name, length: e.value.style.chart.nodes.labels.abbreviation.length }) : o.name), 13, mt))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.nodes, (o, n) => (openBlock(), createElementBlock("text", {
          x: o.x + _.value / 2,
          y: unref(k)(o.absoluteY + o.height / 2 + e.value.style.chart.nodes.labels.fontSize),
          "font-size": e.value.style.chart.nodes.labels.fontSize,
          fill: unref(_t)(o.color),
          "text-anchor": "middle",
          style: normalizeStyle(`pointer-events: none; opacity:${w.value ? w.value.includes(o.name) ? 1 : 0 : 1}`)
        }, toDisplayString(unref(ir)(
          e.value.style.chart.nodes.labels.formatter,
          o.value,
          unref(Ht)({
            p: e.value.style.chart.nodes.labels.prefix,
            v: o.value,
            s: e.value.style.chart.nodes.labels.suffix,
            r: e.value.style.chart.nodes.labels.rounding
          }),
          { datapoint: o, seriesIndex: n }
        )), 13, gt))), 256)),
        renderSlot(t.$slots, "svg", { svg: B.value }, void 0, true)
      ], 14, it)),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", pt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(ee) || unref(te2) })), void 0, true)
      ])) : createCommentVNode("", true),
      M.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 5,
        config: {
          type: "flow",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor
          }
        }
      }, null, 8, ["config"])),
      t.$slots.source ? (openBlock(), createElementBlock("div", bt, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true),
      M.value ? (openBlock(), createBlock(R, {
        key: 7,
        hideDetails: "",
        config: {
          open: I.value.showTable,
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
          createVNode(W, {
            colNames: L.value.colNames,
            head: L.value.head,
            body: L.value.body,
            config: L.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: l[1] || (l[1] = (o) => I.value.showTable = false)
          }, {
            th: withCtx(({ th: o }) => [
              createBaseVNode("div", {
                innerHTML: o,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, yt)
            ]),
            td: withCtx(({ td: o }) => [
              createTextVNode(toDisplayString(o.name || o), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"])
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, st));
  }
};
var At = s(kt, [["__scopeId", "data-v-49421974"]]);
export {
  At as default
};
//# sourceMappingURL=vue-ui-flow-D2G0YWL9-66CS72H4.js.map
