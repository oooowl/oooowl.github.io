import {
  Cs
} from "./chunk-QGOFMHVO.js";
import {
  p
} from "./chunk-FSTZFDG3.js";
import {
  c
} from "./chunk-OBQGP7GO.js";
import {
  Dt,
  He,
  Ht,
  Jt,
  Q,
  R,
  Zt,
  dr,
  ir,
  jt,
  qt,
  rt,
  te,
  tr,
  yt
} from "./chunk-4SKEOFB2.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  guardReactiveProps,
  mergeProps,
  nextTick,
  normalizeProps,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vue-data-ui/dist/vue-ui-sparkbar-DxXt-GHr.js
var ve = ["onClick"];
var ce = { key: 1 };
var de = ["xmlns", "viewBox"];
var fe = ["id"];
var pe = ["stop-color"];
var ye = ["stop-color"];
var me = ["height", "width", "fill", "rx"];
var ge = ["height", "width", "fill", "rx"];
var he = ["height", "width", "fill", "rx"];
var xe = {
  key: 2,
  ref: "source",
  dir: "auto"
};
var $e = {
  __name: "vue-ui-sparkbar",
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
    },
    /**
     * Used in VueUiRadar's tooltip exclusively
     */
    backgroundOpacity: {
      type: Number,
      default: null
    }
  },
  emits: ["selectDatapoint"],
  setup(C, { emit: E }) {
    const a = C, { vue_ui_sparkbar: B } = te(), S = computed(() => !!a.dataset && a.dataset.length), A = ref(Dt()), e = computed({
      get: () => N(),
      set: (t) => t
    });
    function N() {
      const t = c({
        userConfig: a.config,
        defaultConfig: B
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_sparkbar[t.theme] || a.config,
          defaultConfig: t
        }),
        customPalette: R[t.theme] || rt
      } : t;
    }
    watch(() => a.config, (t) => {
      e.value = N();
    }, { deep: true });
    const M = computed(() => tr(e.value.customPalette)), y = ref(a.dataset.map((t) => ({
      ...t,
      value: e.value.style.animation.show ? 0 : t.value || 0,
      formatter: t.formatter || null
    }))), D = ref(null);
    onMounted(async () => {
      jt(a.dataset) && qt({
        componentName: "VueUiSparkbar",
        type: "dataset"
      }), F();
    });
    function F() {
      if (e.value.style.animation.show) {
        let P = function() {
          r += l / t, r < l ? (y.value = y.value.map((u, h) => ({
            ...u,
            value: u.value += o[h]
          })), D.value = requestAnimationFrame(P)) : y.value = a.dataset.map((u) => ({
            ...u,
            value: u.value || 0,
            formatter: u.formatter || null
          }));
        };
        const t = e.value.style.animation.animationFrames, o = a.dataset.map((u, h) => u.value / t), l = a.dataset.map((u) => u.value || 0).reduce((u, h) => u + h, 0);
        let r = 0;
        P();
      }
    }
    watch(() => a.dataset, async (t) => {
      cancelAnimationFrame(D.value), y.value = a.dataset.map((o) => ({
        ...o,
        value: e.value.style.animation.show ? 0 : o.value || 0,
        formatter: o.formatter || null
      })), nextTick(F);
    }, { deep: true });
    const i = ref({
      width: 500,
      height: 16
    }), U = computed(() => Math.max(...a.dataset.map((t) => t.value))), j = computed(() => (a.dataset.forEach((t, o) => {
      Zt({
        datasetObject: t,
        requiredAttributes: ["name", "value"]
      }).forEach((l) => {
        qt({
          componentName: "VueUiSparkbar",
          type: "datasetSerieAttribute",
          property: l,
          index: o
        });
      });
    }), y.value.map((t, o) => ({
      ...t,
      value: t.value || 0,
      color: Q(t.color) || M.value[o] || rt[o] || rt[o % rt.length]
    }))));
    function G(t) {
      return t / U.value;
    }
    function I(t) {
      return e.value.style.layout.independant ? t.target ? t.value / t.target : e.value.style.layout.percentage ? t.value > 100 ? 1 : t.value / 100 : e.value.style.layout.target === 0 ? 1 : t.value / e.value.style.layout.target : G(t.value);
    }
    function m(t) {
      return e.value.style.layout.independant && t.target || e.value.style.layout.target;
    }
    function W(t, o) {
      E("selectDatapoint", { datapoint: t, index: o });
    }
    return (t, o) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle({
        width: "100%",
        fontFamily: e.value.style.fontFamily,
        background: a.backgroundOpacity !== null ? unref(dr)(e.value.style.backgroundColor, a.backgroundOpacity) : e.value.style.backgroundColor
      })
    }, [
      t.$slots.title ? renderSlot(t.$slots, "title", normalizeProps(mergeProps({ key: 0 }, { title: { ...t.title, title: e.value.style.title.text, subtitle: e.value.style.title.subtitle.text } }))) : createCommentVNode("", true),
      !t.$slots.title && e.value.style.title.text ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "vue-ui-sparkbar-title-container",
        style: normalizeStyle({
          background: e.value.style.title.backgroundColor,
          margin: e.value.style.title.margin,
          textAlign: e.value.style.title.textAlign
        })
      }, [
        createBaseVNode("div", {
          class: "vue-ui-sparkbar-title",
          style: normalizeStyle({
            fontSize: e.value.style.title.fontSize + "px",
            color: e.value.style.title.color,
            fontWeight: e.value.style.title.bold ? "bold" : "normal"
          })
        }, toDisplayString(e.value.style.title.text), 5),
        e.value.style.title.subtitle.text ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "vue-ui-sparkbar-subtitle",
          style: normalizeStyle({
            fontSize: e.value.style.title.subtitle.fontSize + "px",
            color: e.value.style.title.subtitle.color,
            fontWeight: e.value.style.title.subtitle.bold ? "bold" : "normal"
          })
        }, toDisplayString(e.value.style.title.subtitle.text), 5)) : createCommentVNode("", true)
      ], 4)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(j.value, (l, r) => (openBlock(), createElementBlock(Fragment, null, [
        S.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(`display:flex !important;${["left", "right"].includes(e.value.style.labels.name.position) ? `flex-direction: ${e.value.style.labels.name.position === "right" ? "row-reverse" : "row"} !important` : "flex-direction:column !important"};gap:${e.value.style.gap}px !important;align-items:center;${C.dataset.length > 0 && r !== C.dataset.length - 1 ? "margin-bottom:6px" : ""}`),
          onClick: () => W(l, r)
        }, [
          renderSlot(t.$slots, "data-label", normalizeProps(guardReactiveProps({ bar: {
            ...l,
            target: m(l),
            valueLabel: unref(ir)(
              l.formatter,
              l.value,
              unref(Ht)({
                p: l.prefix || "",
                v: l.value,
                s: l.suffix || "",
                r: l.rounding || 0
              }),
              { datapoint: l, seriesIndex: r }
            ),
            targetLabel: unref(ir)(
              l.formatter,
              m(l),
              unref(Ht)({
                p: l.prefix || "",
                v: m(l),
                s: l.suffix || "",
                r: l.rounding || 0
              }),
              { datapoint: l, seriesIndex: r }
            )
          } }))),
          t.$slots["data-label"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle({
              width: e.value.style.labels.name.width,
              color: e.value.style.labels.name.color,
              fontSize: e.value.style.labels.fontSize + "px",
              fontWeight: e.value.style.labels.name.bold ? "bold" : "normal",
              textAlign: ["left", "right"].includes(e.value.style.labels.name.position) || ["top", "top-left"].includes(e.value.style.labels.name.position) ? "left" : e.value.style.labels.name.position === "top-center" ? "center" : "right"
            })
          }, [
            createBaseVNode("span", null, toDisplayString(l.name), 1),
            e.value.style.labels.value.show ? (openBlock(), createElementBlock("span", {
              key: 0,
              style: normalizeStyle(`font-weight:${e.value.style.labels.value.bold ? "bold" : "normal"}`)
            }, ": " + toDisplayString(unref(ir)(
              l.formatter,
              l.value,
              unref(Ht)({
                p: l.prefix || "",
                v: l.value,
                s: l.suffix || "",
                r: l.rounding || 0
              }),
              { datapoint: l, seriesIndex: r }
            )), 5)) : createCommentVNode("", true),
            e.value.style.layout.showTargetValue ? (openBlock(), createElementBlock("span", ce, toDisplayString(" " + e.value.style.layout.targetValueText) + " " + toDisplayString(unref(ir)(
              l.formatter,
              m(l),
              unref(Ht)({
                p: l.prefix || "",
                v: m(l),
                s: l.suffix || "",
                r: l.rounding || 0
              }),
              { datapoint: l, seriesIndex: r }
            )), 1)) : createCommentVNode("", true)
          ], 4)),
          (openBlock(), createElementBlock("svg", {
            xmlns: unref(Jt),
            viewBox: `0 0 ${i.value.width} ${i.value.height}`,
            width: "100%"
          }, [
            createVNode(p),
            createBaseVNode("defs", null, [
              createBaseVNode("linearGradient", {
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                id: `sparkbar_gradient_${r}_${A.value}`
              }, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": unref(dr)(unref(yt)(l.color, 0.03), 100 - e.value.style.bar.gradient.intensity)
                }, null, 8, pe),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": l.color
                }, null, 8, ye)
              ], 8, fe)
            ]),
            createBaseVNode("rect", {
              height: i.value.height,
              width: i.value.width,
              x: 0,
              y: 0,
              fill: unref(dr)(e.value.style.gutter.backgroundColor, e.value.style.gutter.opacity),
              rx: i.value.height / 2
            }, null, 8, me),
            createBaseVNode("rect", {
              height: i.value.height,
              width: i.value.width * I(l),
              x: 0,
              y: 0,
              fill: e.value.style.bar.gradient.underlayerColor,
              rx: i.value.height / 2
            }, null, 8, ge),
            createBaseVNode("rect", {
              height: i.value.height,
              width: i.value.width * I(l),
              x: 0,
              y: 0,
              fill: e.value.style.bar.gradient.show ? `url(#sparkbar_gradient_${r}_${A.value})` : l.color,
              rx: i.value.height / 2
            }, null, 8, he)
          ], 8, de))
        ], 12, ve)) : createCommentVNode("", true)
      ], 64))), 256)),
      t.$slots.source ? (openBlock(), createElementBlock("div", xe, [
        renderSlot(t.$slots, "source")
      ], 512)) : createCommentVNode("", true),
      S.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 3,
        config: {
          type: "sparkbar",
          style: {
            backgroundColor: e.value.style.backgroundColor,
            sparkbar: {
              color: "#CCCCCC"
            }
          }
        }
      }, null, 8, ["config"]))
    ], 4));
  }
};

export {
  $e
};
//# sourceMappingURL=chunk-2E4IZQOC.js.map
