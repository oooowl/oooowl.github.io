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
  Ge,
  Gt,
  Kt,
  Lt,
  Nt,
  Ot,
  Qt,
  R as R2,
  Xt,
  Yt,
  et,
  k,
  nr,
  oe,
  or,
  xt
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

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-flow-DkPTzNv9.js
var lt = ["id"];
var ot = {
  key: 0,
  style: "width:100%;background:transparent;padding-bottom:24px"
};
var at = ["xmlns", "viewBox"];
var nt = ["id"];
var st = ["stop-color"];
var ut = ["stop-color"];
var rt = ["d", "fill", "stroke", "stroke-width"];
var it = ["x", "y", "height", "width", "fill", "stroke", "stroke-width", "onMouseenter"];
var ct = ["x", "y", "font-size", "fill"];
var dt = ["x", "y", "font-size", "fill"];
var vt = {
  key: 2,
  class: "vue-data-ui-watermark"
};
var ft = ["innerHTML"];
var ht = {
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
  setup(be, { expose: ye }) {
    const g = be, { vue_ui_flow: ke } = oe(), M = computed(() => !!g.dataset && g.dataset.length);
    onMounted(() => {
      j();
    });
    function j() {
      Xt(g.dataset) && Kt({
        componentName: "VueUiFlow",
        type: "dataset"
      });
    }
    const z = ref(Lt()), X = ref(null), W2 = ref(0), q = ref(0), N = ref(false);
    function we(t) {
      N.value = t, W2.value += 1;
    }
    const e = computed({
      get: () => K(),
      set: (t) => t
    });
    function K() {
      const t = c({
        userConfig: g.config,
        defaultConfig: ke
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_flow[t.theme] || g.config,
          defaultConfig: t
        }),
        customPalette: R2[t.theme] || et
      } : t;
    }
    watch(() => g.config, (t) => {
      e.value = K(), j(), q.value += 1;
    }, { deep: true });
    const { isPrinting: R3, isImaging: Z, generatePdf: J, generateImage: Q } = se({
      elementId: `flow_${z.value}`,
      fileName: e.value.style.chart.title.text || "vue-ui-flow"
    }), Y = computed(() => or(e.value.customPalette)), ee = computed(() => e.value.style.chart.nodes.gap), x2 = computed(() => e.value.style.chart.nodes.width), I = ref({
      showTable: e.value.table.show
    }), te = computed(() => e.value.style.chart.links.width), D = computed(() => !g.dataset || !g.dataset.length ? [] : g.dataset.map((t) => [
      t[0],
      t[1],
      k(t[2])
    ])), le = computed(() => {
      const t = {};
      function o(n) {
        t[n] || (t[n] = { inflow: 0, outflow: 0 });
      }
      D.value.forEach(([n, a, c2]) => {
        o(n), o(a), t[n].outflow += c2, t[a].inflow += c2;
      });
      let l = 0;
      for (const n in t) {
        const a = Math.max(t[n].inflow, t[n].outflow);
        l = Math.max(l, a);
      }
      return l;
    });
    function Ce(t) {
      return t / le.value * 100 + e.value.style.chart.nodes.minHeight;
    }
    function xe(t) {
      const o = e.value.style.chart.nodes.minHeight;
      return (t - o) / 100 * le.value;
    }
    function $e(t) {
      const o = {}, l = {};
      function n(s2, u) {
        o[s2] || (o[s2] = { height: 0, level: null, inflow: 0, outflow: 0 }), o[s2].level === null && (o[s2].level = u), l[u] || (l[u] = []), l[u].includes(s2) || l[u].push(s2);
      }
      t.forEach(([s2, u, f], $) => {
        const w = o[s2] ? o[s2].level : 0, O = w + 1;
        n(s2, w), n(u, O), o[s2].children || (o[s2].children = []), o[s2].children.push({ target: u, value: f }), o[s2].outflow += f, o[u].inflow += f;
      }), Object.keys(o).forEach((s2, u) => {
        o[s2].color = Y.value[u] || Y.value[u % Y.value.length] || et[u] || et[u % d.length];
      });
      for (const s2 in o)
        o[s2].height = Ce(Math.max(o[s2].inflow, o[s2].outflow)), o[s2].name = s2;
      const a = {};
      for (const s2 in l) {
        let u = 0;
        l[s2].forEach((f, $) => {
          const w = o[f].height;
          a[f] = {
            x: parseInt(s2, 10) * te.value + e.value.style.chart.padding.left,
            y: u,
            absoluteY: u,
            height: w,
            i: $,
            color: o[f].color,
            value: xe(w)
          }, u += w + ee.value;
        });
      }
      const c2 = [];
      for (const s2 in o) {
        let u = a[s2].absoluteY;
        o[s2].children && o[s2].children.forEach(({ target: f, value: $ }, w) => {
          const O = a[f].y, B = a[s2], A = a[f], se2 = k(u), ue = k(u + $ / o[s2].outflow * B.height), re = k(O), ie2 = k(O + $ / o[f].inflow * A.height), Le = {
            id: Lt(),
            source: s2,
            target: f,
            path: `M ${k(B.x) + k(x2.value)} ${se2} L ${k(B.x) + k(x2.value)} ${ue} L ${k(A.x)} ${ie2} L ${k(A.x)} ${re} Z`,
            value: $,
            sourceColor: o[s2].color,
            targetColor: o[f].color
          };
          c2.push(Le), u += ue - se2, a[f].y += ie2 - re;
        });
      }
      return { nodeCoordinates: a, links: c2 };
    }
    const p2 = computed(() => {
      const t = $e(g.dataset);
      return {
        nodes: Object.keys(t.nodeCoordinates).map((o, l) => ({
          ...t.nodeCoordinates[o],
          name: o
        })),
        links: t.links
      };
    }), _e = computed(() => Ne(p2.value.nodes));
    function Ne(t) {
      const o = {};
      for (const n in t) {
        const { x: a, height: c2 } = t[n];
        o[a] || (o[a] = 0), o[a] += c2 + ee.value;
      }
      return Math.max(...Object.values(o));
    }
    const G = computed(() => {
      const { top: t, right: o, left: l, bottom: n } = e.value.style.chart.padding, a = D.value.length * te.value;
      return {
        height: _e.value + t + n,
        width: o + Math.max(...p2.value.nodes.map((c2) => c2.x)) + x2.value,
        left: l,
        top: t,
        right: a - o,
        p_top: t,
        p_bottom: n
      };
    });
    function Te(t) {
      const o = {}, l = {}, n = /* @__PURE__ */ new Set();
      return D.value.forEach(([a, c2, s2]) => {
        o[a] || (o[a] = []), l[c2] || (l[c2] = []), o[a].push(c2), l[c2].push(a);
      }), o[t] && o[t].forEach((a) => n.add(a)), l[t] && l[t].forEach((a) => n.add(a)), Array.from(n).concat(t);
    }
    const b = ref(null), L = ref(null);
    function Pe(t) {
      b.value = Te(t.name), L.value = t.name;
    }
    function Fe() {
      b.value = null, L.value = null;
    }
    const oe2 = computed(() => p2.value.links.map(({ source: t, target: o, sourceColor: l, targetColor: n, value: a }) => ({
      source: t,
      target: o,
      sourceColor: l,
      targetColor: n,
      value: a
    })));
    function ae() {
      nextTick(() => {
        const t = oe2.value.map((n, a) => [
          [n.source],
          [n.target],
          [n.value]
        ]), o = [
          [e.value.style.chart.title.text],
          [e.value.style.chart.title.subtitle.text],
          [
            [e.value.table.columnNames.source],
            [e.value.table.columnNames.target],
            [e.value.table.columnNames.value]
          ]
        ].concat(t), l = Nt(o);
        Ot({
          csvContent: l,
          title: e.value.style.chart.title.text || "vue-ui-flow"
        });
      });
    }
    const H = computed(() => {
      const t = [
        e.value.table.columnNames.source,
        e.value.table.columnNames.target,
        e.value.table.columnNames.value
      ], o = oe2.value.map((a, c2) => [
        {
          color: a.sourceColor,
          name: a.source
        },
        {
          color: a.targetColor,
          name: a.target
        },
        Gt({
          p: e.value.style.chart.nodes.labels.prefix,
          v: a.value,
          s: e.value.style.chart.nodes.labels.suffix,
          r: e.value.style.chart.nodes.labels.rounding
        })
      ]), l = {
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
        body: o,
        config: l
      };
    });
    function Ie() {
      return p2.value;
    }
    function ne() {
      I.value.showTable = !I.value.showTable;
    }
    return ye({
      getData: Ie,
      generateCsv: ae,
      generateImage: Q,
      generatePdf: J,
      toggleTable: ne
    }), (t, o) => (openBlock(), createElementBlock("div", {
      ref_key: "flowChart",
      ref: X,
      class: normalizeClass(`vue-ui-flow ${N.value ? "vue-data-ui-wrapper-fullscreen" : ""}`),
      style: normalizeStyle(`font-family:${e.value.style.fontFamily};width:100%; text-align:center;${e.value.style.chart.title.text ? "" : "padding-top:36px"};background:${e.value.style.chart.backgroundColor}`),
      id: `flow_${z.value}`
    }, [
      e.value.style.chart.title.text ? (openBlock(), createElementBlock("div", ot, [
        (openBlock(), createBlock(x, {
          key: `title_${q.value}`,
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
      e.value.userOptions.show && M.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${W2.value}`,
        backgroundColor: e.value.style.chart.backgroundColor,
        color: e.value.style.chart.color,
        isPrinting: unref(R3),
        isImaging: unref(Z),
        uid: z.value,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasXls: e.value.userOptions.buttons.csv,
        hasImg: e.value.userOptions.buttons.img,
        hasTable: e.value.userOptions.buttons.table,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: N.value,
        titles: { ...e.value.userOptions.buttonTitles },
        chartElement: X.value,
        position: e.value.userOptions.position,
        onToggleFullscreen: we,
        onGeneratePdf: unref(J),
        onGenerateCsv: ae,
        onGenerateImage: unref(Q),
        onToggleTable: ne
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
          fn: withCtx(({ toggleFullscreen: l, isFullscreen: n }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: l, isFullscreen: n })), void 0, true)
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasXls", "hasImg", "hasTable", "hasFullscreen", "isFullscreen", "titles", "chartElement", "position", "onGeneratePdf", "onGenerateImage"])) : createCommentVNode("", true),
      (openBlock(), createElementBlock("svg", {
        xmlns: unref(Qt),
        viewBox: `0 0 ${G.value.width} ${G.value.height}`,
        class: normalizeClass({ "vue-data-ui-fullscreen--on": N.value, "vue-data-ui-fulscreen--off": !N.value }),
        style: normalizeStyle(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.links, (l, n) => (openBlock(), createElementBlock("linearGradient", {
            id: l.id,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": l.sourceColor
            }, null, 8, st),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.targetColor
            }, null, 8, ut)
          ], 8, nt))), 256))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.links, (l) => (openBlock(), createElementBlock("path", {
          class: "vue-ui-flow-link",
          d: l.path,
          fill: `url(#${l.id})`,
          stroke: e.value.style.chart.links.stroke,
          "stroke-width": e.value.style.chart.links.strokeWidth,
          style: normalizeStyle(`opacity:${L.value ? [l.target, l.source].includes(L.value) ? 1 : 0.3 : e.value.style.chart.links.opacity}`)
        }, null, 12, rt))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.nodes, (l, n) => (openBlock(), createElementBlock("rect", {
          class: "vue-ui-flow-node",
          x: l.x,
          y: unref(k)(l.absoluteY),
          height: unref(k)(l.height),
          width: x2.value,
          fill: l.color,
          stroke: e.value.style.chart.nodes.stroke,
          "stroke-width": e.value.style.chart.nodes.strokeWidth,
          onMouseenter: (a) => Pe(l),
          onMouseleave: o[0] || (o[0] = (a) => Fe()),
          style: normalizeStyle(`opacity:${b.value ? b.value.includes(l.name) ? 1 : 0.2 : 1}`)
        }, null, 44, it))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.nodes, (l, n) => (openBlock(), createElementBlock("text", {
          x: l.x + x2.value / 2,
          y: unref(k)(l.absoluteY + l.height / 2 - e.value.style.chart.nodes.labels.fontSize / 4),
          "font-size": e.value.style.chart.nodes.labels.fontSize,
          fill: unref(xt)(l.color),
          "text-anchor": "middle",
          style: normalizeStyle(`pointer-events: none; opacity:${b.value ? b.value.includes(l.name) ? 1 : 0 : 1}`)
        }, toDisplayString(e.value.style.chart.nodes.labels.abbreviation.use ? unref(Yt)({ source: l.name, length: e.value.style.chart.nodes.labels.abbreviation.length }) : l.name), 13, ct))), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(p2.value.nodes, (l, n) => (openBlock(), createElementBlock("text", {
          x: l.x + x2.value / 2,
          y: unref(k)(l.absoluteY + l.height / 2 + e.value.style.chart.nodes.labels.fontSize),
          "font-size": e.value.style.chart.nodes.labels.fontSize,
          fill: unref(xt)(l.color),
          "text-anchor": "middle",
          style: normalizeStyle(`pointer-events: none; opacity:${b.value ? b.value.includes(l.name) ? 1 : 0 : 1}`)
        }, toDisplayString(unref(nr)(
          e.value.style.chart.nodes.labels.formatter,
          l.value,
          unref(Gt)({
            p: e.value.style.chart.nodes.labels.prefix,
            v: l.value,
            s: e.value.style.chart.nodes.labels.suffix,
            r: e.value.style.chart.nodes.labels.rounding
          }),
          { datapoint: l, seriesIndex: n }
        )), 13, dt))), 256)),
        renderSlot(t.$slots, "svg", { svg: G.value }, void 0, true)
      ], 14, at)),
      t.$slots.watermark ? (openBlock(), createElementBlock("div", vt, [
        renderSlot(t.$slots, "watermark", normalizeProps(guardReactiveProps({ isPrinting: unref(R3) || unref(Z) })), void 0, true)
      ])) : createCommentVNode("", true),
      M.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 3,
        config: {
          type: "flow",
          style: {
            backgroundColor: e.value.style.chart.backgroundColor
          }
        }
      }, null, 8, ["config"])),
      M.value ? (openBlock(), createBlock(R, {
        key: 4,
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
            colNames: H.value.colNames,
            head: H.value.head,
            body: H.value.body,
            config: H.value.config,
            title: `${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text ? ` : ${e.value.style.chart.title.subtitle.text}` : ""}`,
            onClose: o[1] || (o[1] = (l) => I.value.showTable = false)
          }, {
            th: withCtx(({ th: l }) => [
              createBaseVNode("div", {
                innerHTML: l,
                style: { display: "flex", "align-items": "center" }
              }, null, 8, ft)
            ]),
            td: withCtx(({ td: l }) => [
              createTextVNode(toDisplayString(l.name || l), 1)
            ]),
            _: 1
          }, 8, ["colNames", "head", "body", "config", "title"])
        ]),
        _: 1
      }, 8, ["config"])) : createCommentVNode("", true)
    ], 14, lt));
  }
};
var _t = s(ht, [["__scopeId", "data-v-53bf76e7"]]);
export {
  _t as default
};
//# sourceMappingURL=vue-ui-flow-DkPTzNv9-HF24HI6R.js.map
