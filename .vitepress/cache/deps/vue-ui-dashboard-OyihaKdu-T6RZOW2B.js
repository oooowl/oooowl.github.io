import {
  H
} from "./chunk-LIC37ZHM.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-GR634IEI.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  oe
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  normalizeClass,
  normalizeStyle,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  useCssVars,
  watch
} from "./chunk-CQOUZRMK.js";
import "./chunk-GYVK32RL.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-dashboard-OyihaKdu.js
var ie = (M) => (pushScopeId("data-v-57895b3a"), M = M(), popScopeId(), M);
var re = {
  key: 0,
  "data-html2canvas-ignore": "",
  style: { width: "100%", display: "flex", "justify-content": "end" }
};
var de = ["disabled"];
var ce = ["stroke"];
var he = createStaticVNode('<path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-57895b3a></path><path d="M18 16v.01" data-v-57895b3a></path><path d="M6 16v.01" data-v-57895b3a></path><path d="M12 5v.01" data-v-57895b3a></path><path d="M12 12v.01" data-v-57895b3a></path><path d="M12 1a4 4 0 0 1 2.001 7.464l.001 .072a3.998 3.998 0 0 1 1.987 3.758l.22 .128a3.978 3.978 0 0 1 1.591 -.417l.2 -.005a4 4 0 1 1 -3.994 3.77l-.28 -.16c-.522 .25 -1.108 .39 -1.726 .39c-.619 0 -1.205 -.14 -1.728 -.391l-.279 .16l.007 .231a4 4 0 1 1 -2.212 -3.579l.222 -.129a3.998 3.998 0 0 1 1.988 -3.756l.002 -.071a4 4 0 0 1 -1.995 -3.265l-.005 -.2a4 4 0 0 1 4 -4z" data-v-57895b3a></path>', 6);
var ve = [
  he
];
var fe = { key: 1 };
var pe = ["id"];
var ge = ie(() => createBaseVNode("div", { class: "vue-ui-dashboard-grid" }, null, -1));
var be = ["onMousedown", "onTouchstart"];
var we = ["onMousedown", "onTouchstart"];
var ye = ["onMousedown", "onTouchstart"];
var _e = ["onMousedown", "onTouchstart"];
var Me = ["onMousedown", "onTouchstart"];
var x = 20;
var me = {
  __name: "vue-ui-dashboard",
  props: {
    dataset: Array,
    config: Object
  },
  emits: ["change"],
  setup(M, { expose: W, emit: E }) {
    const X = M;
    useCssVars((e) => ({
      "417957d3": V.value,
      "60fae9e7": j.value
    }));
    const { vue_ui_dashboard: L } = oe(), s2 = computed(() => c({
      userConfig: X.config,
      defaultConfig: L
    })), Y = ref(`vue-ui-dashboard-${Math.random()}`), c2 = ref(s2.value.locked);
    function N() {
      c2.value = !c2.value;
    }
    const n = ref(X.dataset), h = ref(null), u = ref(null), v = ref({ x: 0, y: 0 }), f = ref({ x: 0, y: 0 }), i = ref(null), d = ref(false), p = ref(null), T = ref(false);
    function S() {
      T.value = true, H({
        domElement: document.getElementById(`vue-ui-dashboard_${Y.value}`),
        fileName: "vue-ui-dashboard"
      }).finally(() => {
        T.value = false;
      });
    }
    function R(e) {
      if (!c2.value && (d.value = true, p.value = e, u.value === null)) {
        h.value = e, v.value = { x: event.clientX, y: event.clientY };
        const t = n.value[e], a = 100 - t.width, o = 100 - t.height;
        t.left < 0 && (t.left = 0), t.top < 0 && (t.top = 0), t.left > a && (t.left = a), t.top > o && (t.top = o), t.left < 0 && (t.left = 0), t.top < 0 && (t.top = 0), t.left + t.width > 100 && (t.left = 100 - t.width), t.top + t.height > 100 && (t.top = 100 - t.height);
      }
    }
    function k(e, t) {
      d.value = true, p.value = e, u.value = { index: e, direction: t };
      const a = n.value[e];
      f.value = { x: event.clientX, y: event.clientY, initialWidth: a.width, initialHeight: a.height };
    }
    function H2(e, t, a) {
      if (u.value.direction.includes("top")) {
        const o = e.height - a / i.value.offsetHeight * 100;
        o >= x && (e.top += a / i.value.offsetHeight * 100, e.height = o);
      }
      if (u.value.direction.includes("bottom")) {
        const o = e.height + a / i.value.offsetHeight * 100;
        o >= x && (e.height = o);
      }
      if (u.value.direction.includes("left")) {
        const o = e.width - t / i.value.offsetWidth * 100;
        o >= x && (e.left += t / i.value.offsetWidth * 100, e.width = o);
      }
      if (u.value.direction.includes("right")) {
        const o = e.width + t / i.value.offsetWidth * 100;
        o >= x && (e.width = o);
      }
    }
    function B(e) {
      if (!c2.value) {
        if (d.value = true, h.value !== null) {
          const t = n.value[h.value], a = e.clientX - v.value.x, o = e.clientY - v.value.y, l = t.left + a / i.value.offsetWidth * 100, b = t.top + o / i.value.offsetHeight * 100;
          l >= 0 && b >= 0 && l + t.width <= 100 && b + t.height <= 100 && (t.left = l, t.top = b), v.value = { x: e.clientX, y: e.clientY };
        }
        if (u.value !== null) {
          const t = n.value[u.value.index], a = e.clientX - f.value.x, o = e.clientY - f.value.y;
          H2(t, a, o), f.value = { x: e.clientX, y: e.clientY };
        }
      }
    }
    watch(
      n,
      (e) => {
        e && !d.value && E("change", n.value);
      },
      { deep: true }
    );
    function F() {
      h.value = null, u.value = null, d.value = false, p.value = null, n.value.forEach((e) => {
        e.left = Math.round(e.left / 100 * 100), e.top = Math.round(e.top / 100 * 100), e.width = Math.round(e.width / 100 * 100), e.height = Math.round(e.height / 100 * 100);
      });
    }
    function P(e) {
      c2.value || (d.value = true, p.value = e, u.value === null && (h.value = e, v.value = { x: event.touches[0].clientX, y: event.touches[0].clientY }));
    }
    function C(e, t, a) {
      if (d.value = true, p.value = e, u.value === null) {
        u.value = { index: e, direction: t };
        const o = n.value[e];
        f.value = { x: a.touches[0].clientX, y: a.touches[0].clientY, initialWidth: o.width, initialHeight: o.height };
      }
    }
    function $(e) {
      if (d.value = true, e.preventDefault(), u.value !== null) {
        const t = n.value[u.value.index], a = e.touches[0].clientX - f.value.x, o = e.touches[0].clientY - f.value.y;
        H2(t, a, o), f.value = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }
    function O(e) {
      if (!c2.value && (d.value = true, e.preventDefault(), h.value !== null)) {
        const t = n.value[h.value], a = e.touches[0].clientX - v.value.x, o = e.touches[0].clientY - v.value.y, l = t.left + a / i.value.offsetWidth * 100, b = t.top + o / i.value.offsetHeight * 100;
        l >= 0 && b >= 0 && l + t.width <= 100 && b + t.height <= 100 && (t.left = l, t.top = b), v.value = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }
    function m() {
      d.value = false, p.value = null, h.value = null, u.value = null, n.value.forEach((e) => {
        e.left = Math.round(e.left / 100 * 100), e.top = Math.round(e.top / 100 * 100), e.width = Math.round(e.width / 100 * 100), e.height = Math.round(e.height / 100 * 100);
      });
    }
    const V = computed(() => s2.value.style.item.borderColor), j = computed(() => s2.value.style.resizeHandles.backgroundColor), A = computed(() => s2.value.style.board.aspectRatio), G = computed(() => s2.value.style.board.backgroundColor), U = computed(() => s2.value.style.board.border);
    function q() {
      return n.value;
    }
    return W({
      generatePdf: S,
      getItemsPositions: q,
      toggleLock: N
    }), (e, t) => (openBlock(), createElementBlock("div", null, [
      s2.value.allowPrint ? (openBlock(), createElementBlock("div", re, [
        createBaseVNode("button", {
          class: "vue-ui-dashboard-button",
          onClick: S,
          disabled: T.value,
          style: normalizeStyle([{ "margin-top": "12px" }, `color:${s2.value.style.board.color}`])
        }, [
          T.value ? (openBlock(), createElementBlock("svg", {
            key: 0,
            class: "vue-ui-dashboard-print-icon",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: s2.value.style.board.color,
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, ve, 8, ce)) : (openBlock(), createElementBlock("span", fe, "PDF"))
        ], 12, de)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: "vue-ui-dashboard-container",
        ref_key: "dashboardContainer",
        ref: i,
        id: `vue-ui-dashboard_${Y.value}`,
        style: normalizeStyle(`border:${U.value}; sbackground:${G.value}; aspect-ratio:${A.value}`)
      }, [
        createBaseVNode("div", {
          class: "vue-ui-dashboard-grid-container",
          ref: "container",
          onMousemove: B,
          onMouseup: F,
          onTouchmove: O,
          onTouchend: m,
          style: normalizeStyle(`background:${s2.value.style.board.backgroundColor}`)
        }, [
          ge,
          (openBlock(true), createElementBlock(Fragment, null, renderList(n.value, (a, o) => (openBlock(), createElementBlock("div", {
            key: a.id,
            class: normalizeClass({ "vue-ui-dashboard-grid-item": true, "vue-ui-dashboard-grid-item--locked": c2.value }),
            style: normalizeStyle({
              width: `${a.width}%`,
              height: `${a.height}%`,
              left: `${a.left}%`,
              top: `${a.top}%`,
              cursor: "move",
              boxShadow: p.value === o ? "0 6px 12px -3px rgba(0,0,0,0.3)" : "",
              zIndex: p.value === o ? "1" : "0",
              backgroundColor: s2.value.style.item.backgroundColor
            }),
            onMousedown: (l) => R(o),
            onTouchstart: (l) => P(o)
          }, [
            c2.value ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", {
                class: "vue-ui-dashboard-resize-handle vue-ui-dashboard-top-left",
                onMousedown: (l) => k(o, "top-left"),
                onTouchstart: (l) => C(o, "top-left", l),
                onTouchmove: t[0] || (t[0] = (l) => $(l)),
                onTouchend: m
              }, null, 40, we),
              createBaseVNode("div", {
                class: "vue-ui-dashboard-resize-handle vue-ui-dashboard-top-right",
                onMousedown: (l) => k(o, "top-right"),
                onTouchstart: (l) => C(o, "top-right", l),
                onTouchmove: t[1] || (t[1] = (l) => $(l)),
                onTouchend: m
              }, null, 40, ye),
              createBaseVNode("div", {
                class: "vue-ui-dashboard-resize-handle vue-ui-dashboard-bottom-left",
                onMousedown: (l) => k(o, "bottom-left"),
                onTouchstart: (l) => C(o, "bottom-left", l),
                onTouchmove: t[2] || (t[2] = (l) => $(l)),
                onTouchend: m
              }, null, 40, _e),
              createBaseVNode("div", {
                class: "vue-ui-dashboard-resize-handle vue-ui-dashboard-bottom-right",
                onMousedown: (l) => k(o, "bottom-right"),
                onTouchstart: (l) => C(o, "bottom-right", l),
                onTouchmove: t[3] || (t[3] = (l) => $(l)),
                onTouchend: m
              }, null, 40, Me)
            ], 64)),
            renderSlot(e.$slots, "content", {
              item: a,
              index: o,
              left: a.left,
              top: a.top,
              height: a.height,
              width: a.width
            }, void 0, true)
          ], 46, be))), 128))
        ], 36)
      ], 12, pe)
    ]));
  }
};
var xe = s(me, [["__scopeId", "data-v-57895b3a"]]);
export {
  xe as default
};
//# sourceMappingURL=vue-ui-dashboard-OyihaKdu-T6RZOW2B.js.map
