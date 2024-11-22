import {
  c
} from "./chunk-B52AVJZK.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Qt,
  oe
} from "./chunk-TG4LWCJY.js";
import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  normalizeStyle,
  openBlock,
  ref,
  unref,
  useCssVars
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-mini-loader-C7roqZ4p.js
var b = ["xmlns", "viewBox"];
var x = { key: 0 };
var $ = ["stroke"];
var w = ["stroke"];
var A = ["stroke"];
var N = { key: 1 };
var O = ["stroke"];
var S = { key: 2 };
var F = ["stroke"];
var I = {
  __name: "vue-ui-mini-loader",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(c2) {
    const d = c2;
    useCssVars((_) => ({
      "221651ee": v.value,
      d11bae38: C.value,
      d85c00de: g.value
    }));
    const { vue_ui_mini_loader: p } = oe(), e = computed(() => c({
      userConfig: d.config,
      defaultConfig: p
    })), k = ref({
      onion: "-10 -10 84 84",
      line: "-10 -10 112 84",
      bar: "-10 -10 106 84"
    }), i = computed(() => ({
      gutter: `stroke:${e.value.line.gutterColor};opacity:${e.value.line.gutterOpacity};`,
      gutterBlur: `filter:blur(${e.value.line.gutterBlur}px);`
    })), s2 = computed(() => ({
      gutter: `stroke:${e.value.bar.gutterColor};opacity:${e.value.bar.gutterOpacity};`,
      gutterBlur: `filter:blur(${e.value.bar.gutterBlur}px);`
    })), o = computed(() => ({
      gutter: `stroke:${e.value.onion.gutterColor};opacity:${e.value.onion.gutterOpacity};`,
      gutterBlur: `filter:blur(${e.value.onion.gutterBlur}px);`
    })), v = computed(() => `blur(${e.value.onion.trackBlur}px) hue-rotate(${e.value.onion.trackHueRotate}deg)`), C = computed(() => `blur(${e.value.line.trackBlur}px) hue-rotate(${e.value.line.trackHueRotate}deg)`), g = computed(() => `blur(${e.value.bar.trackBlur}px) hue-rotate(${e.value.bar.trackHueRotate}deg)`);
    return (_, E) => (openBlock(), createElementBlock("svg", {
      xmlns: unref(Qt),
      viewBox: k.value[e.value.type],
      style: { background: "transparent" },
      width: "100%"
    }, [
      e.value.type === "onion" ? (openBlock(), createElementBlock("g", x, [
        createBaseVNode("path", {
          d: "M 3 32 C 3 45 12 62 32 62 A 1 1 0 0 0 32 3",
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          style: normalizeStyle(o.value.gutter + o.value.gutterBlur)
        }, null, 4),
        createBaseVNode("path", {
          d: "M 13 32 C 13 39 19 52 32 52 A 1 1 0 0 0 32 13",
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          style: normalizeStyle(o.value.gutter + o.value.gutterBlur)
        }, null, 4),
        createBaseVNode("path", {
          d: "M 23 32 C 23 37 26.5 41 32 41 A 1 1 0 0 0 32 25",
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          style: normalizeStyle(o.value.gutter + o.value.gutterBlur)
        }, null, 4),
        createBaseVNode("path", {
          d: "M 3 32 C 3 45 12 62 32 62 A 1 1 0 0 0 32 3",
          stroke: e.value.onion.trackColor,
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          class: "onion-animated"
        }, null, 8, $),
        createBaseVNode("path", {
          d: "M 13 32 C 13 39 19 52 32 52 A 1 1 0 0 0 32 13",
          stroke: e.value.onion.trackColor,
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          class: "onion-animated"
        }, null, 8, w),
        createBaseVNode("path", {
          d: "M 23 32 C 23 37 26.5 41 32 41 A 1 1 0 0 0 32 25",
          stroke: e.value.onion.trackColor,
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          class: "onion-animated"
        }, null, 8, A)
      ])) : createCommentVNode("", true),
      e.value.type === "line" ? (openBlock(), createElementBlock("g", N, [
        createBaseVNode("path", {
          d: "M 3 62 C 6 57 6 48 11 45 C 16 44 17 53 22 52 C 27 49 25 32 30 31 C 34 29 37 47 42 47 C 46 47 45 38 49 36 C 53 34 56 45 61 45 C 66 45 65 24 69 24 C 73 22 75 35 79 34 C 84 34 83 11 91 5",
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          style: normalizeStyle(i.value.gutter + i.value.gutterBlur)
        }, null, 4),
        createBaseVNode("path", {
          d: "M 3 62 C 6 57 6 48 11 45 C 16 44 17 53 22 52 C 27 49 25 32 30 31 C 34 29 37 47 42 47 C 46 47 45 38 49 36 C 53 34 56 45 61 45 C 66 45 65 24 69 24 C 73 22 75 35 79 34 C 84 34 83 11 91 5",
          stroke: e.value.line.trackColor,
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          class: "line-animated"
        }, null, 8, O)
      ])) : createCommentVNode("", true),
      e.value.type === "bar" ? (openBlock(), createElementBlock("g", S, [
        createBaseVNode("path", {
          d: "M 3 62 L 3 44 M 12 62 L 12 49 M 21 62 L 21 37 M 30 62 L 30 29 M 39 62 L 39 43 M 48 62 L 48 16 M 57 62 L 57 24 M 66 62 L 66 35 M 75 62 L 75 20 M 84 62 L 84 5",
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          style: normalizeStyle(s2.value.gutter + s2.value.gutterBlur)
        }, null, 4),
        createBaseVNode("path", {
          d: "M 3 62 L 3 44 M 12 62 L 12 49 M 21 62 L 21 37 M 30 62 L 30 29 M 39 62 L 39 43 M 48 62 L 48 16 M 57 62 L 57 24 M 66 62 L 66 35 M 75 62 L 75 20 M 84 62 L 84 5",
          stroke: e.value.bar.trackColor,
          "stroke-width": "4",
          fill: "none",
          "stroke-linecap": "round",
          class: "bar-animated"
        }, null, 8, F)
      ])) : createCommentVNode("", true)
    ], 8, b));
  }
};
var U = s(I, [["__scopeId", "data-v-20f54e0e"]]);
export {
  U as default
};
//# sourceMappingURL=vue-ui-mini-loader-C7roqZ4p-POXX47ME.js.map
