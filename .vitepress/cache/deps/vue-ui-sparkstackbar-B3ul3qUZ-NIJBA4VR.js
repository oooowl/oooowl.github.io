import {
  fs
} from "./chunk-XKFV7VRH.js";
import {
  p
} from "./chunk-VCFIOMKF.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Ge,
  Gt,
  Kt,
  Lt,
  Qt,
  R,
  Xt,
  cr,
  et,
  j,
  nr,
  oe,
  or,
  pt,
  qt
} from "./chunk-TG4LWCJY.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  watch
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-sparkstackbar-B3ul3qUZ.js
var ue = ["xmlns", "viewBox"];
var ie = ["id"];
var ce = ["stop-color"];
var de = ["stop-color"];
var ve = ["stop-color"];
var ge = {
  id: "stackPill",
  clipPathUnits: "objectBoundingBox"
};
var pe = ["fill"];
var he = {
  key: 0,
  "clip-path": "url(#stackPill)"
};
var fe = ["height", "width", "fill"];
var ye = ["onClick", "x", "width", "height", "fill", "stroke"];
var me = ["width", "height", "rx"];
var ke = ["onClick"];
var _e = { style: { display: "flex", "flex-direction": "row", "align-items": "center", gap: "4px", "justify-content": "center" } };
var be = ["height", "width"];
var xe = ["fill"];
var we = {
  __name: "vue-ui-sparkstackbar",
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
  emits: ["selectDatapoint"],
  setup(M, { emit: T }) {
    const u = M, { vue_ui_sparkstackbar: q } = oe(), z = computed(() => !!u.dataset && u.dataset.length), A = ref(Lt()), e = computed({
      get: () => L(),
      set: (t) => t
    });
    function L() {
      const t = c({
        userConfig: u.config,
        defaultConfig: q
      });
      return t.theme ? {
        ...c({
          userConfig: Ge.vue_ui_sparkstackbar[t.theme] || u.config,
          defaultConfig: t
        }),
        customPalette: R[t.theme] || et
      } : t;
    }
    watch(() => u.config, (t) => {
      e.value = L(), B();
    }, { deep: true }), watch(() => u.dataset, (t) => {
      m.value = u.dataset.map((a, l) => ({
        ...a,
        color: a.color ? j(a.color) : x.value[l] || et[l] || et[l % et.length]
      }));
    }, { deep: true });
    const x = computed(() => or(e.value.customPalette)), m = ref(u.dataset.map((t, a) => ({
      ...t,
      value: e.value.style.animation.show ? 0 : t.value || 0,
      color: t.color ? j(t.color) : x.value[a] || et[a] || et[a % et.length]
    }))), w = ref(true);
    onMounted(() => {
      if (B(), e.value.style.animation.show) {
        let h = function() {
          o += l / t, o < l ? (m.value = m.value.map((s2, c2) => ({
            ...s2,
            value: s2.value += a[c2],
            color: s2.color ? j(s2.color) : x.value[c2] || et[c2] || et[c2 % et.length]
          })), requestAnimationFrame(h)) : (w.value = false, m.value = u.dataset.map((s2, c2) => ({
            ...s2,
            value: s2.value || 0,
            color: s2.color ? j(s2.color) : x.value[c2] || et[c2] || et[c2 % et.length],
            id: Lt()
          })));
        };
        const t = e.value.style.animation.animationFrames, a = u.dataset.map((s2, c2) => s2.value / t), l = u.dataset.map((s2) => s2.value || 0).reduce((s2, c2) => s2 + c2, 0);
        let o = 0;
        w.value = true, h();
      }
    });
    function B() {
      Xt(u.dataset) ? Kt({
        componentName: "VueUiSparkStackbar",
        type: "dataset"
      }) : u.dataset.forEach((t, a) => {
        qt({
          datasetObject: t,
          requiredAttributes: ["name", "value"]
        }).forEach((l) => {
          Kt({
            componentName: "VueUiSparkStackbar",
            type: "datasetSerieAttribute",
            property: l,
            index: a
          });
        });
      });
    }
    const p2 = ref({
      width: 500,
      height: 16
    }), v = ref([]), F = computed(() => u.dataset.map((t) => t.value || 0).filter((t, a) => !v.value.includes(a)).reduce((t, a) => t + a, 0)), j2 = computed(() => m.value.map((t, a) => {
      const l = t.value || 0, o = l / F.value, h = isNaN(o) ? 0 : o, s2 = h * p2.value.width;
      return {
        ...t,
        value: l,
        proportion: h,
        width: s2,
        proportionLabel: Gt({
          v: h * 100,
          s: "%",
          r: e.value.style.legend.percentage.rounding
        })
      };
    })), $ = computed(() => j2.value.filter((t, a) => !v.value.includes(a)));
    function H(t) {
      v.value.includes(t) ? v.value = v.value.filter((a) => a !== t) : v.value.length < m.value.length - 1 && v.value.push(t);
    }
    const S = computed(() => {
      let t = 0;
      const a = [];
      for (let l = 0; l < $.value.length; l += 1)
        a.push({
          ...$.value[l],
          start: t
        }), t += $.value[l].width;
      return a;
    });
    function E(t, a) {
      T("selectDatapoint", { datapoint: t, index: a });
    }
    return (t, a) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`width:100%; background:${e.value.style.backgroundColor}`)
    }, [
      e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(`width:calc(100% - 12px);background:transparent;margin:0 auto;margin:${e.value.style.title.margin};padding: 0 6px;text-align:${e.value.style.title.textAlign}`)
      }, [
        createBaseVNode("div", {
          style: normalizeStyle(`font-size:${e.value.style.title.fontSize}px;color:${e.value.style.title.color};font-weight:${e.value.style.title.bold ? "bold" : "normal"}`)
        }, toDisplayString(e.value.style.title.text), 5),
        e.value.style.title.subtitle.text ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`font-size:${e.value.style.title.subtitle.fontSize}px;color:${e.value.style.title.subtitle.color};font-weight:${e.value.style.title.subtitle.bold ? "bold" : "normal"}`)
        }, toDisplayString(e.value.style.title.subtitle.text), 5)) : createCommentVNode("", true)
      ], 4)) : createCommentVNode("", true),
      z.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Qt),
        width: "100%",
        viewBox: `0 0 ${p2.value.width} ${p2.value.height}`
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (l, o) => (openBlock(), createElementBlock("linearGradient", {
            key: `stack_gradient_${o}`,
            gradientTransform: "rotate(90)",
            id: `stack_gradient_${o}_${A.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": l.color
            }, null, 8, ce),
            createBaseVNode("stop", {
              offset: "50%",
              "stop-color": unref(cr)(unref(pt)(l.color, 0.05), 100 - e.value.style.bar.gradient.intensity)
            }, null, 8, de),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, ve)
          ], 8, ie))), 128)),
          createBaseVNode("clipPath", ge, [
            createBaseVNode("rect", {
              x: "0.005",
              y: "-2",
              width: "0.99",
              height: "5",
              rx: "3",
              ry: "3",
              fill: e.value.style.backgroundColor
            }, null, 8, pe)
          ])
        ]),
        F.value > 0 ? (openBlock(), createElementBlock("g", he, [
          createBaseVNode("rect", {
            x: 0,
            y: 0,
            height: p2.value.height,
            width: S.value.map((l) => l.width).reduce((l, o) => l + o, 0),
            fill: e.value.style.bar.gradient.underlayerColor,
            class: normalizeClass({ animated: !w.value })
          }, null, 10, fe),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (l, o) => (openBlock(), createElementBlock("rect", {
            key: `stack_${o}`,
            onClick: () => E(l, o),
            x: l.start,
            y: 0,
            width: l.width,
            height: p2.value.height,
            fill: e.value.style.bar.gradient.show ? `url(#stack_gradient_${o}_${A.value})` : l.color,
            stroke: e.value.style.backgroundColor,
            "stroke-linecap": "round",
            class: normalizeClass({ animated: !w.value })
          }, null, 10, ye))), 128))
        ])) : (openBlock(), createElementBlock("rect", {
          key: 1,
          x: 2,
          y: 1,
          width: p2.value.width - 4,
          height: p2.value.height - 2,
          stroke: "#CCCCCC",
          "stroke-width": "2",
          fill: "transparent",
          rx: (p2.value.height - 4) / 2
        }, null, 8, me))
      ], 8, ue)) : createCommentVNode("", true),
      z.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 2,
        config: {
          type: "sparkStackbar",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            sparkStackbar: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"])),
      e.value.style.legend.show ? (openBlock(), createElementBlock("div", {
        key: 3,
        style: normalizeStyle(`background:transparent;margin:0 auto;margin:${e.value.style.legend.margin};justify-content:${e.value.style.legend.textAlign === "left" ? "flex-start" : e.value.style.legend.textAlign === "right" ? "flex-end" : "center"}`),
        class: "vue-ui-sparkstackbar-legend"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(j2.value, (l, o) => (openBlock(), createElementBlock("div", {
          style: normalizeStyle(`font-size:${e.value.style.legend.fontSize}px;`),
          class: normalizeClass({ "vue-ui-sparkstackbar-legend-item": true, "vue-ui-sparkstackbar-legend-item-unselected": v.value.includes(o) }),
          onClick: (h) => {
            H(o), E(l, o);
          }
        }, [
          createBaseVNode("div", _e, [
            (openBlock(), createElementBlock("svg", {
              height: `${e.value.style.legend.fontSize}px`,
              width: `${e.value.style.legend.fontSize}px`,
              viewBox: "0 0 10 10"
            }, [
              createBaseVNode("circle", {
                cx: 5,
                cy: 5,
                r: 5,
                fill: l.color
              }, null, 8, xe)
            ], 8, be)),
            createBaseVNode("span", {
              style: normalizeStyle(`color:${e.value.style.legend.name.color}; font-weight:${e.value.style.legend.name.bold ? "bold" : "normal"}`)
            }, toDisplayString(l.name), 5),
            e.value.style.legend.percentage.show ? (openBlock(), createElementBlock("span", {
              key: 0,
              style: normalizeStyle(`font-weight:${e.value.style.legend.percentage.bold ? "bold" : "normal"};color:${e.value.style.legend.percentage.color}`)
            }, toDisplayString(v.value.includes(o) ? " - " : l.proportionLabel), 5)) : createCommentVNode("", true),
            e.value.style.legend.value.show ? (openBlock(), createElementBlock("span", {
              key: 1,
              style: normalizeStyle(`font-weight:${e.value.style.legend.value.bold ? "bold" : "normal"};color:${e.value.style.legend.value.color}`)
            }, " (" + toDisplayString(unref(nr)(
              e.value.style.legend.value.formatter,
              l.value,
              unref(Gt)({
                p: e.value.style.legend.value.prefix,
                v: l.value,
                s: e.value.style.legend.value.suffix,
                r: e.value.style.legend.value.rounding
              }),
              { datapoint: l, seriesIndex: o }
            )) + ") ", 5)) : createCommentVNode("", true)
          ])
        ], 14, ke))), 256))
      ], 4)) : createCommentVNode("", true)
    ], 4));
  }
};
var ze = s(we, [["__scopeId", "data-v-cd0ed8a9"]]);
export {
  ze as default
};
//# sourceMappingURL=vue-ui-sparkstackbar-B3ul3qUZ-NIJBA4VR.js.map
