import {
  te
} from "./chunk-LOF7EHPB.js";
import {
  u
} from "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  It,
  Jt,
  _t
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  unref,
  vModelText,
  watch,
  withDirectives,
  withModifiers
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/PenAndPaper-C_laA5mt.js
var ie = { style: { height: "100%", width: "100%", position: "relative" } };
var de = { class: "icon" };
var ve = ["onClick"];
var pe = { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -46%)" } };
var fe = ["value"];
var he = {
  __name: "ColorPicker",
  props: {
    value: {
      type: String,
      default: "#ffffff"
    },
    size: {
      type: String,
      default: "50px"
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    buttonBorderColor: {
      type: String,
      default: "#FFFFFF"
    }
  },
  emits: ["update:value"],
  setup(r, { emit: I }) {
    const h = r, k = computed(() => ({
      backgroundColor: h.value,
      width: "100%",
      height: "100%",
      cursor: "pointer"
    })), y = ref(null), $ = ref(false), M = () => {
      var u2;
      (u2 = y.value) == null || u2.click();
    };
    function S(u2) {
      I("update:value", u2), $.value = false;
    }
    function x() {
      $.value = false;
    }
    function L() {
      $.value && x();
    }
    const X = (u2) => {
      const B = u2.target.value;
      I("update:value", B);
    }, F = computed(() => _t(h.value));
    watch(
      () => h.value,
      (u2) => {
        y.value.value = u2;
      }
    );
    const w = ref([
      "#000000",
      "#FFFFFF",
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FFC300",
      "#800080",
      "#FF1493",
      "#00CED1"
    ]);
    return (u2, B) => withDirectives((openBlock(), createElementBlock("div", ie, [
      createBaseVNode("div", {
        onClick: B[0] || (B[0] = (z) => $.value = !$.value),
        style: normalizeStyle(k.value)
      }, [
        createBaseVNode("div", de, [
          createVNode(u, {
            name: "palette",
            stroke: F.value,
            size: 22
          }, null, 8, ["stroke"])
        ])
      ], 4),
      $.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "vue-ui-color-picker",
        style: normalizeStyle({
          backgroundColor: r.backgroundColor
        })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(w.value, (z) => (openBlock(), createElementBlock("div", {
          class: "vue-ui-color-picker-option",
          style: normalizeStyle({
            backgroundColor: z,
            outline: `1px solid ${r.buttonBorderColor}`
          }),
          onClick: () => S(z)
        }, null, 12, ve))), 256)),
        createBaseVNode("div", {
          class: "vue-ui-color-picker-option",
          onClick: M,
          style: normalizeStyle({
            backgroundColor: r.value,
            outline: `1px solid ${r.buttonBorderColor}`
          })
        }, [
          createBaseVNode("div", pe, [
            createVNode(u, {
              name: "colorPicker",
              stroke: F.value,
              size: 22
            }, null, 8, ["stroke"])
          ]),
          createBaseVNode("input", {
            ref_key: "colorInput",
            ref: y,
            type: "color",
            value: r.value,
            class: "hidden-input",
            onInput: X
          }, null, 40, fe)
        ], 4)
      ], 4)) : createCommentVNode("", true)
    ])), [
      [unref(te), L]
    ]);
  }
};
var ke = s(he, [["__scopeId", "data-v-84e6c062"]]);
var ge = {
  class: normalizeClass({
    "vue-ui-pen-and-paper-action": true
  }),
  style: { padding: "0 !important" }
};
var me = ["disabled"];
var Ce = ["xmlns", "viewBox", "onTouchstart", "onTouchmove"];
var ye = ["cx", "cy", "r", "fill"];
var $e = ["d", "stroke", "stroke-width"];
var be = ["d", "stroke", "stroke-width"];
var Fe = {
  __name: "PenAndPaper",
  props: {
    parent: {
      type: HTMLElement
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    color: {
      type: String,
      default: "#2D353C"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(r, { emit: I }) {
    const h = r, k = ref([]), y = ref([]), $ = ref("0 0 0 0"), M = ref(h.color), S = ref(1), x = computed(() => It(h.color, 0.6));
    function L({ width: o, height: t }) {
      $.value = `0 0 ${o} ${t}`;
    }
    const X = ref(null);
    onMounted(() => {
      nextTick(() => {
        if (h.parent) {
          X.value = new ResizeObserver((e) => {
            for (const n of e) {
              const { width: l, height: a } = n.contentRect;
              L({ width: l, height: a });
            }
          }), X.value.observe(h.parent);
          const { width: o, height: t } = h.parent.getBoundingClientRect();
          L({ width: o, height: t });
        }
      });
    }), onBeforeUnmount(() => {
      X.value && X.value.disconnect();
    }), watch(
      () => h.parent,
      (o) => {
        if (!o) return;
        const { width: t, height: e } = h.parent.getBoundingClientRect();
        L({ width: t, height: e });
      },
      { immediate: true }
    );
    const F = ref(false), w = ref(""), u2 = ref(null);
    function B(o) {
      if (!u2.value) return;
      F.value = true;
      const { x: t, y: e } = W(o);
      w.value = `M ${t} ${e}`;
    }
    function z(o) {
      if (!F.value || !u2.value) return;
      const { x: t, y: e } = W(o);
      w.value += ` ${t} ${e}`;
    }
    function U(o) {
      const t = o.trim().split(/\s+/);
      if (t.length < 4)
        return o;
      const e = t.slice(1).map(Number);
      if (e.length % 2 !== 0)
        return o;
      const n = J(e), l = [`M ${n[0]} ${n[1]}`];
      for (let i = 2; i < n.length - 2; i += 2) {
        const g = n[i - 2], m = n[i - 1], d = n[i], v = n[i + 1], N = (g + d) / 2, Y = (m + v) / 2;
        l.push(`Q ${g} ${m} ${N} ${Y}`);
      }
      const a = n[n.length - 2], s2 = n[n.length - 1];
      return l.push(`L ${a} ${s2}`), l.join(" ");
    }
    function J(o, t = 1) {
      const e = [...o];
      for (let n = 2; n < o.length - 2; n += 2) {
        const l = o[n], a = o[n + 1], s2 = o[n - 2], i = o[n - 1], g = o[n + 2], m = o[n + 3];
        e[n] = l + t * ((s2 + g) / 2 - l), e[n + 1] = a + t * ((i + m) / 2 - a);
      }
      return e;
    }
    function K(o) {
      const t = o.trim().split(/\s+/);
      let e = "", n = "", l = null, a = null;
      for (let s2 = 0; s2 < t.length; s2 += 1) {
        const i = t[s2];
        if (isNaN(i)) {
          if (n = i, n === "M" || n === "L")
            l = parseFloat(t[++s2]), a = parseFloat(t[++s2]), e += `${n}${l} ${a}`;
          else if (n === "Q") {
            const g = parseFloat(t[++s2]), m = parseFloat(t[++s2]), d = parseFloat(t[++s2]), v = parseFloat(t[++s2]);
            g === l && m === a ? e += `t${d - l} ${v - a}` : e += `q${g - l} ${m - a} ${d - l} ${v - a}`, l = d, a = v;
          }
        } else {
          const g = parseFloat(i), m = parseFloat(t[++s2]);
          if (n === "L") {
            const d = g - l, v = m - a;
            d === 0 ? e += `v${v}` : v === 0 ? e += `h${d}` : e += `l${d} ${v}`, l = g, a = m;
          } else if (n === "Q") {
            const d = g, v = m, N = parseFloat(t[++s2]), Y = parseFloat(t[++s2]);
            d === l && v === a ? e += `t${N - l} ${Y - a}` : e += `q${d - l} ${v - a} ${N - l} ${Y - a}`, l = N, a = Y;
          }
        }
      }
      return e;
    }
    function E() {
      F.value && (k.value.push({
        strokeWidth: S.value,
        path: K(U(w.value)),
        color: M.value
      }), y.value = [], w.value = ""), F.value = false;
    }
    function W(o) {
      if (!u2.value) return { x: 0, y: 0 };
      const t = u2.value.getBoundingClientRect();
      let e, n;
      return o.touches && o.touches.length ? (e = o.touches[0].clientX, n = o.touches[0].clientY) : (e = o.clientX, n = o.clientY), {
        x: e - t.left,
        y: n - t.top
      };
    }
    ref(false);
    function Z() {
      if (k.value.length > 0) {
        const o = k.value.pop();
        y.value.push(o);
      }
    }
    function _() {
      if (y.value.length > 0) {
        const o = y.value.pop();
        k.value.push(o);
      }
    }
    function ee() {
      k.value = [], y.value = [];
    }
    const te2 = ref(null);
    return (o, t) => (openBlock(), createElementBlock(Fragment, null, [
      r.active ? (openBlock(), createElementBlock("div", {
        key: 0,
        "data-html2canvas-ignore": "",
        class: normalizeClass({
          "vue-ui-pen-and-paper-actions": true,
          visible: r.active
        })
      }, [
        createBaseVNode("button", {
          class: "vue-ui-pen-and-paper-action",
          style: normalizeStyle({
            backgroundColor: r.backgroundColor,
            border: `1px solid ${x.value}`
          }),
          onClick: t[0] || (t[0] = (e) => I("close"))
        }, [
          createVNode(u, {
            name: "close",
            stroke: r.color
          }, null, 8, ["stroke"])
        ], 4),
        createBaseVNode("button", ge, [
          createVNode(ke, {
            value: M.value,
            "onUpdate:value": t[1] || (t[1] = (e) => M.value = e),
            backgroundColor: r.backgroundColor,
            buttonBorderColor: x.value
          }, null, 8, ["value", "backgroundColor", "buttonBorderColor"])
        ]),
        createBaseVNode("button", {
          class: normalizeClass({
            "vue-ui-pen-and-paper-action": true,
            "vue-ui-pen-and-paper-action-disabled": !k.value.length
          }),
          disabled: !k.value.length,
          style: normalizeStyle({
            backgroundColor: r.backgroundColor,
            border: `1px solid ${x.value}`
          }),
          onClick: Z
        }, [
          createVNode(u, {
            name: "restart",
            stroke: r.color
          }, null, 8, ["stroke"])
        ], 14, me),
        createBaseVNode("button", {
          class: normalizeClass({
            "vue-ui-pen-and-paper-action": true,
            "vue-ui-pen-and-paper-action-disabled": !y.value.length
          }),
          style: normalizeStyle({
            backgroundColor: r.backgroundColor,
            border: `1px solid ${x.value}`
          }),
          onClick: _
        }, [
          createVNode(u, {
            name: "restart",
            stroke: r.color,
            style: { transform: "scaleX(-1)" }
          }, null, 8, ["stroke"])
        ], 6),
        createBaseVNode("button", {
          class: normalizeClass([{
            "vue-ui-pen-and-paper-action": true,
            "vue-ui-pen-and-paper-action-disabled": !k.value.length
          }, "vue-ui-pen-and-paper-action"]),
          style: normalizeStyle({
            backgroundColor: r.backgroundColor,
            border: `1px solid ${x.value}`
          }),
          onClick: ee
        }, [
          createVNode(u, {
            name: "trash",
            stroke: r.color
          }, null, 8, ["stroke"])
        ], 6),
        withDirectives(createBaseVNode("input", {
          ref_key: "range",
          ref: te2,
          type: "range",
          class: "vertical-range",
          min: 0.5,
          max: 12,
          step: 0.1,
          "onUpdate:modelValue": t[2] || (t[2] = (e) => S.value = e),
          style: normalizeStyle({
            accentColor: r.color
          })
        }, null, 4), [
          [vModelText, S.value]
        ])
      ], 2)) : createCommentVNode("", true),
      (openBlock(), createElementBlock("svg", {
        ref_key: "svgElement",
        ref: u2,
        xmlns: unref(Jt),
        viewBox: $.value,
        class: normalizeClass({
          "vue-ui-pen-and-paper": true,
          inactive: !r.active
        }),
        onMousedown: B,
        onMousemove: z,
        onMouseup: E,
        onMouseleave: E,
        onTouchstart: withModifiers(B, ["prevent"]),
        onTouchmove: withModifiers(z, ["prevent"]),
        onTouchend: E
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (e) => (openBlock(), createElementBlock(Fragment, { key: e }, [
          e.path.replace("M", "").split(" ").length === 2 ? (openBlock(), createElementBlock("circle", {
            key: 0,
            cx: e.path.replace("M", "").split(" ")[0],
            cy: e.path.replace("M", "").split(" ")[1],
            r: e.strokeWidth / 2,
            fill: e.color
          }, null, 8, ye)) : (openBlock(), createElementBlock("path", {
            key: 1,
            class: "vue-ui-pen-and-paper-path",
            d: e.path,
            stroke: e.color,
            "stroke-width": e.strokeWidth,
            fill: "none"
          }, null, 8, $e))
        ], 64))), 128)),
        F.value ? (openBlock(), createElementBlock("path", {
          key: 0,
          class: "vue-ui-pen-and-paper-path vue-ui-pen-and-paper-path-drawing",
          d: U(w.value),
          stroke: M.value,
          "stroke-width": S.value * 1.1,
          fill: "none"
        }, null, 8, be)) : createCommentVNode("", true)
      ], 42, Ce))
    ], 64));
  }
};
var Se = s(Fe, [["__scopeId", "data-v-a932b1ac"]]);

export {
  Se
};
//# sourceMappingURL=chunk-BZKUIZ5F.js.map
