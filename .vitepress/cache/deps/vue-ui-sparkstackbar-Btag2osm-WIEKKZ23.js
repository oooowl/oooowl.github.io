import {
  E
} from "./chunk-K5CEUZ2P.js";
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
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  He,
  Ht,
  Jt,
  Q,
  R,
  Xt,
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

// node_modules/vue-data-ui/dist/vue-ui-sparkstackbar-Btag2osm.js
var _e = ["xmlns", "viewBox"];
var we = ["id"];
var Ce = ["stop-color"];
var xe = ["stop-color"];
var $e = ["stop-color"];
var Se = {
  id: "stackPill",
  clipPathUnits: "objectBoundingBox"
};
var ze = ["fill"];
var Pe = {
  key: 0,
  "clip-path": "url(#stackPill)"
};
var De = ["x", "width", "height", "fill"];
var Fe = ["x", "width", "height", "fill", "stroke"];
var Ne = ["onClick", "x", "width", "height", "onMouseenter"];
var Ae = ["width", "height", "rx"];
var Le = ["onClick"];
var Be = { style: { display: "flex", "flex-direction": "row", "align-items": "center", gap: "4px", "justify-content": "center" } };
var Oe = ["height", "width"];
var je = ["fill"];
var Ee = {
  key: 4,
  ref: "source",
  dir: "auto"
};
var Me = {
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
  setup(ee, { emit: te2 }) {
    const u = ee, { vue_ui_sparkstackbar: le } = te(), M = computed(() => !!u.dataset && u.dataset.length), T = ref(null), U = ref(Dt()), A = ref(false), L = ref(""), e = computed({
      get: () => V(),
      set: (t) => t
    });
    function V() {
      const t = c({
        userConfig: u.config,
        defaultConfig: le
      });
      return t.theme ? {
        ...c({
          userConfig: He.vue_ui_sparkstackbar[t.theme] || u.config,
          defaultConfig: t
        }),
        customPalette: R[t.theme] || rt
      } : t;
    }
    watch(() => u.config, (t) => {
      e.value = V(), I();
    }, { deep: true }), watch(() => u.dataset, (t) => {
      b.value = u.dataset.map((a, l) => ({
        ...a,
        color: a.color ? Q(a.color) : S.value[l] || rt[l] || rt[l % rt.length]
      }));
    }, { deep: true });
    const S = computed(() => tr(e.value.customPalette)), b = ref(u.dataset.map((t, a) => ({
      ...t,
      value: e.value.style.animation.show ? 0 : t.value || 0,
      color: t.color ? Q(t.color) : S.value[a] || rt[a] || rt[a % rt.length]
    }))), _ = ref(true);
    onMounted(() => {
      if (I(), e.value.style.animation.show) {
        let h = function() {
          o += l / t, o < l ? (b.value = b.value.map((n, c2) => ({
            ...n,
            value: n.value += a[c2],
            color: n.color ? Q(n.color) : S.value[c2] || rt[c2] || rt[c2 % rt.length]
          })), requestAnimationFrame(h)) : (_.value = false, b.value = u.dataset.map((n, c2) => ({
            ...n,
            value: n.value || 0,
            color: n.color ? Q(n.color) : S.value[c2] || rt[c2] || rt[c2 % rt.length],
            id: Dt()
          })));
        };
        const t = e.value.style.animation.animationFrames, a = u.dataset.map((n, c2) => n.value / t), l = u.dataset.map((n) => n.value || 0).reduce((n, c2) => n + c2, 0);
        let o = 0;
        _.value = true, h();
      }
    });
    function I() {
      jt(u.dataset) ? qt({
        componentName: "VueUiSparkStackbar",
        type: "dataset"
      }) : u.dataset.forEach((t, a) => {
        Zt({
          datasetObject: t,
          requiredAttributes: ["name", "value"]
        }).forEach((l) => {
          qt({
            componentName: "VueUiSparkStackbar",
            type: "datasetSerieAttribute",
            property: l,
            index: a
          });
        });
      });
    }
    const g = ref({
      width: 500,
      height: 16
    }), f = ref([]), R2 = computed(() => u.dataset.map((t) => t.value || 0).filter((t, a) => !f.value.includes(a)).reduce((t, a) => t + a, 0)), z = computed(() => b.value.map((t, a) => {
      const l = t.value || 0, o = l / R2.value, h = isNaN(o) ? 0 : o, n = h * g.value.width;
      return {
        ...t,
        value: l,
        proportion: h,
        width: n,
        proportionLabel: Ht({
          v: h * 100,
          s: "%",
          r: e.value.style.legend.percentage.rounding
        })
      };
    })), B = computed(() => z.value.filter((t, a) => !f.value.includes(a)));
    function oe(t) {
      f.value.includes(t) ? f.value = f.value.filter((a) => a !== t) : f.value.length < b.value.length - 1 && f.value.push(t);
    }
    const P = computed(() => {
      let t = 0;
      const a = [];
      for (let l = 0; l < B.value.length; l += 1)
        a.push({
          ...B.value[l],
          start: t
        }), t += B.value[l].width;
      return a;
    });
    function W(t, a) {
      te2("selectDatapoint", { datapoint: t, index: a });
    }
    const O = ref(null), D = ref(false), k = ref(null);
    function ae({ datapoint: t, seriesIndex: a }) {
      if (!e.value.style.tooltip.show)
        return;
      O.value = { datapoint: t, seriesIndex: a, config: e.value, series: z.value }, A.value = true, k.value = a;
      const l = e.value.style.tooltip.customFormat;
      if (Xt(l))
        try {
          const o = l({
            seriesIndex: a,
            datapoint: t,
            series: z.value,
            config: e.value
          });
          typeof o == "string" && (L.value = o, D.value = true);
        } catch {
          console.warn("Custom format cannot be applied."), D.value = false;
        }
      if (!D.value) {
        let o = "";
        o += `<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`, o += `<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`, o += `<b>${t.proportionLabel}</b>`, o += `<span>(${ir(
          e.value.style.legend.value.formatter,
          t.value,
          Ht({
            p: e.value.style.legend.value.prefix,
            v: t.value,
            s: e.value.style.legend.value.suffix,
            r: e.value.style.legend.value.rounding
          }),
          {
            datapoint: t,
            seriesIndex: a
          }
        )})</span>`, L.value = `<div>${o}</div>`;
      }
    }
    return (t, a) => (openBlock(), createElementBlock("div", {
      ref_key: "sparkstackbarChart",
      ref: T,
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
      M.value ? (openBlock(), createElementBlock("svg", {
        key: 1,
        xmlns: unref(Jt),
        width: "100%",
        viewBox: `0 0 ${g.value.width} ${g.value.height}`
      }, [
        createVNode(p),
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(P.value, (l, o) => (openBlock(), createElementBlock("linearGradient", {
            key: `stack_gradient_${o}`,
            gradientTransform: "rotate(90)",
            id: `stack_gradient_${o}_${U.value}`
          }, [
            createBaseVNode("stop", {
              offset: "0%",
              "stop-color": l.color
            }, null, 8, Ce),
            createBaseVNode("stop", {
              offset: "50%",
              "stop-color": unref(dr)(unref(yt)(l.color, 0.05), 100 - e.value.style.bar.gradient.intensity)
            }, null, 8, xe),
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": l.color
            }, null, 8, $e)
          ], 8, we))), 128)),
          createBaseVNode("clipPath", Se, [
            createBaseVNode("rect", {
              x: "0.005",
              y: "-2",
              width: "0.99",
              height: "5",
              rx: "3",
              ry: "3",
              fill: e.value.style.backgroundColor
            }, null, 8, ze)
          ])
        ]),
        R2.value > 0 ? (openBlock(), createElementBlock("g", Pe, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(P.value, (l, o) => (openBlock(), createElementBlock("rect", {
            key: `stack_underlayer_${o}`,
            x: l.start,
            y: 0,
            width: l.width,
            height: g.value.height,
            fill: e.value.style.bar.gradient.underlayerColor,
            class: normalizeClass({ animated: !_.value }),
            style: normalizeStyle({
              opacity: k.value !== null && e.value.style.tooltip.show ? k.value === o ? 1 : 0.5 : 1
            })
          }, null, 14, De))), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(P.value, (l, o) => (openBlock(), createElementBlock("rect", {
            key: `stack_${o}`,
            x: l.start,
            y: 0,
            width: l.width,
            height: g.value.height,
            fill: e.value.style.bar.gradient.show ? `url(#stack_gradient_${o}_${U.value})` : l.color,
            stroke: e.value.style.backgroundColor,
            "stroke-linecap": "round",
            class: normalizeClass({ animated: !_.value }),
            style: normalizeStyle({
              opacity: k.value !== null && e.value.style.tooltip.show ? k.value === o ? 1 : 0.5 : 1
            })
          }, null, 14, Fe))), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(P.value, (l, o) => (openBlock(), createElementBlock("rect", {
            key: `stack_trap_${o}`,
            onClick: () => W(l, o),
            x: l.start,
            y: 0,
            width: l.width,
            height: g.value.height,
            fill: "transparent",
            stroke: "none",
            class: normalizeClass({ animated: !_.value }),
            onMouseenter: () => ae({ datapoint: l, seriesIndex: o }),
            onMouseleave: a[0] || (a[0] = (h) => {
              A.value = false, k.value = null;
            })
          }, null, 42, Ne))), 128))
        ])) : (openBlock(), createElementBlock("rect", {
          key: 1,
          x: 2,
          y: 1,
          width: g.value.width - 4,
          height: g.value.height - 2,
          stroke: "#CCCCCC",
          "stroke-width": "2",
          fill: "transparent",
          rx: (g.value.height - 4) / 2
        }, null, 8, Ae))
      ], 8, _e)) : createCommentVNode("", true),
      M.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
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
        (openBlock(true), createElementBlock(Fragment, null, renderList(z.value, (l, o) => (openBlock(), createElementBlock("div", {
          style: normalizeStyle(`font-size:${e.value.style.legend.fontSize}px;`),
          class: normalizeClass({ "vue-ui-sparkstackbar-legend-item": true, "vue-ui-sparkstackbar-legend-item-unselected": f.value.includes(o) }),
          onClick: (h) => {
            oe(o), W(l, o);
          }
        }, [
          createBaseVNode("div", Be, [
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
              }, null, 8, je)
            ], 8, Oe)),
            createBaseVNode("span", {
              style: normalizeStyle(`color:${e.value.style.legend.name.color}; font-weight:${e.value.style.legend.name.bold ? "bold" : "normal"}`)
            }, toDisplayString(l.name), 5),
            e.value.style.legend.percentage.show ? (openBlock(), createElementBlock("span", {
              key: 0,
              style: normalizeStyle(`font-weight:${e.value.style.legend.percentage.bold ? "bold" : "normal"};color:${e.value.style.legend.percentage.color}`)
            }, toDisplayString(f.value.includes(o) ? " - " : l.proportionLabel), 5)) : createCommentVNode("", true),
            e.value.style.legend.value.show ? (openBlock(), createElementBlock("span", {
              key: 1,
              style: normalizeStyle(`font-weight:${e.value.style.legend.value.bold ? "bold" : "normal"};color:${e.value.style.legend.value.color}`)
            }, " (" + toDisplayString(unref(ir)(
              e.value.style.legend.value.formatter,
              l.value,
              unref(Ht)({
                p: e.value.style.legend.value.prefix,
                v: l.value,
                s: e.value.style.legend.value.suffix,
                r: e.value.style.legend.value.rounding
              }),
              { datapoint: l, seriesIndex: o }
            )) + ") ", 5)) : createCommentVNode("", true)
          ])
        ], 14, Le))), 256))
      ], 4)) : createCommentVNode("", true),
      createVNode(E, {
        show: A.value && e.value.style.tooltip.show,
        parent: T.value,
        backgroundColor: e.value.style.tooltip.backgroundColor,
        color: e.value.style.tooltip.color,
        fontSize: e.value.style.tooltip.fontSize,
        borderRadius: e.value.style.tooltip.borderRadius,
        borderColor: e.value.style.tooltip.borderColor,
        borderWidth: e.value.style.tooltip.borderWidth,
        backgroundOpacity: e.value.style.tooltip.backgroundOpacity,
        position: e.value.style.tooltip.position,
        content: L.value,
        isCustom: D.value,
        offsetY: -124 + e.value.style.tooltip.offsetY,
        blockShiftY: true
      }, {
        "tooltip-before": withCtx(() => [
          renderSlot(t.$slots, "tooltip-before", normalizeProps(guardReactiveProps({ ...O.value })), void 0, true)
        ]),
        "tooltip-after": withCtx(() => [
          renderSlot(t.$slots, "tooltip-after", normalizeProps(guardReactiveProps({ ...O.value })), void 0, true)
        ]),
        _: 3
      }, 8, ["show", "parent", "backgroundColor", "color", "fontSize", "borderRadius", "borderColor", "borderWidth", "backgroundOpacity", "position", "content", "isCustom", "offsetY"]),
      t.$slots.source ? (openBlock(), createElementBlock("div", Ee, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 4));
  }
};
var Ge = s(Me, [["__scopeId", "data-v-233900f7"]]);
export {
  Ge as default
};
//# sourceMappingURL=vue-ui-sparkstackbar-Btag2osm-WIEKKZ23.js.map
