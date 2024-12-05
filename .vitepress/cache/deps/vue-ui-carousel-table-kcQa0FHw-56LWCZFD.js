import {
  ae,
  re
} from "./chunk-LOF7EHPB.js";
import {
  Cs
} from "./chunk-QGOFMHVO.js";
import "./chunk-FSTZFDG3.js";
import {
  c
} from "./chunk-OBQGP7GO.js";
import "./chunk-PP6VIFVK.js";
import {
  s
} from "./chunk-3LFGMZCN.js";
import {
  Dt,
  Nt,
  Vt,
  dr,
  jt,
  qt,
  te
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
  guardReactiveProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
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

// node_modules/vue-data-ui/dist/vue-ui-carousel-table-kcQa0FHw.js
var Ne = ["id"];
var Se = ["height"];
var He = ["data-cell", "height"];
var Le = {
  key: 2,
  ref: "source",
  dir: "auto"
};
var Ue = {
  __name: "vue-ui-carousel-table",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    dataset: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(g, { expose: ce }) {
    const l = g, { vue_ui_carousel_table: pe } = te(), S = ref(Dt()), Q = ref(false), $ = ref(!!l.dataset);
    onMounted(() => {
      W();
    });
    function W() {
      jt(l.dataset) ? qt({
        componentName: "VueUiCarouselTable",
        type: "dataset"
      }) : ((!l.dataset.head || jt(l.dataset.head)) && (qt({
        componentName: "VueUiCarouselTable",
        type: "datasetAttribute",
        property: "head"
      }), $.value = false), (!l.dataset.body || jt(l.dataset.body)) && (qt({
        componentName: "VueUiCarouselTable",
        type: "datasetAttribute",
        property: "body"
      }), $.value = false));
    }
    const e = computed({
      get: () => Y(),
      set: (t) => t
    });
    function Y() {
      return c({
        userConfig: l.config,
        defaultConfig: pe
      });
    }
    watch(() => l.config, (t) => {
      e.value = Y(), W();
    }, { deep: true }), watch(() => l.dataset, (t) => {
      H();
    }, { deep: true });
    const { isPrinting: Z, isImaging: _, generatePdf: he, generateImage: ee } = re({
      elementId: `carousel-table_${S.value}`,
      fileName: e.value.caption.text || "vue-ui-carousel-table"
    }), c2 = ref({
      showAnimation: e.value.animation.use
    }), u = ref(null), te2 = ref(null), T = ref(null), A = ref(null), k = ref(0), R = ref(0), z = ref(false), x = ref(null), h = ref(null), w = ref(0);
    function H() {
      x.value && (h.value = {
        elements: x.value.getElementsByTagName("tr"),
        heights: Array.from(x.value.getElementsByTagName("tr")).map((t) => t.getBoundingClientRect().height)
      });
    }
    onMounted(H);
    const fe = computed(() => !h.value || !h.value.heights.length ? 0 : Math.max(...h.value.heights) + k.value + R.value), ge = computed(() => l.dataset.body ? e.value.tbody.tr.visible <= l.dataset.body.length ? e.value.tbody.tr.visible : l.dataset.body.length : 0), me = computed(() => (e.value.tbody.tr.height + e.value.tbody.tr.td.padding.top + e.value.tbody.tr.td.padding.bottom + e.value.tbody.tr.border.size * 2) * ge.value + k.value + R.value), E = ref(0), I = ref(null), m = ref(0), b = ref(false), ae2 = ref(0);
    onMounted(() => {
      T.value && (k.value = T.value.getBoundingClientRect().height), A.value && (R.value = A.value.getBoundingClientRect().height), c2.value.showAnimation && h.value && oe();
    }), onMounted(() => {
      if (u.value) {
        let a = function() {
          const i = t.getBoundingClientRect().bottom;
          n.forEach((p) => {
            p.getBoundingClientRect().top < i ? p.style.visibility = "hidden" : p.style.visibility = "visible";
          });
        };
        const t = u.value.querySelector("thead"), n = Array.from(x.value.querySelectorAll("tr"));
        u.value.addEventListener("scroll", a), a(), onBeforeUnmount(() => {
          u.value.removeEventListener("scroll", a);
        });
      }
    });
    function be(t) {
      Q.value = t, ae2.value += 1;
    }
    function oe() {
      !I.value && !b.value && (I.value = requestAnimationFrame(ne));
    }
    function ye() {
      if (!u.value) return false;
      const { scrollTop: t, scrollHeight: n, clientHeight: a } = u.value;
      return t + a >= n;
    }
    function ne(t) {
      if (b.value) return;
      m.value || (m.value = t), t - m.value >= e.value.animation.speedMs && (E.value += h.value.heights[w.value], (ye() || w.value >= h.value.heights.length) && (E.value = 0, w.value = -1), w.value += 1, u.value && u.value.scrollTo({
        top: E.value,
        behavior: "smooth"
      }), m.value = t), I.value = requestAnimationFrame(ne);
    }
    function f() {
      b.value = true, cancelAnimationFrame(I.value), I.value = null;
    }
    onBeforeUnmount(f);
    function y() {
      !b.value || !c2.value.showAnimation || (b.value = false, m.value = 0, oe());
    }
    function Ce() {
      e.value.animation.pauseOnHover && f();
    }
    const L = ref(null);
    function $e() {
      f(), clearTimeout(L.value);
    }
    function le() {
      clearTimeout(L.value), L.value = setTimeout(y, 1e3);
    }
    watch(
      () => e.value.animation.use,
      (t) => {
        t ? (c2.value.showAnimation = true, y()) : (c2.value.showAnimation = false, f());
      }
    );
    const Te = computed(() => e.value.responsiveBreakpoint);
    onMounted(() => {
      const t = new ResizeObserver((n) => {
        n.forEach((a) => {
          z.value = a.contentRect.width < Te.value;
        }), k.value = T.value ? T.value.getBoundingClientRect().height : 0, R.value = A.value ? A.value.getBoundingClientRect().height : 0, w.value = 0, nextTick(() => {
          f(), m.value = 0, E.value = 0, H(), y();
        });
      });
      u.value && t.observe(u.value);
    });
    function ie() {
      he();
    }
    function se() {
      c2.value.showAnimation = !c2.value.showAnimation, c2.value.showAnimation ? y() : f();
    }
    function ue() {
      nextTick(() => {
        const t = l.dataset.head.map((i, p) => [
          [l.dataset.body[p]]
        ]), n = [
          [e.value.caption.text],
          [l.dataset.head.map((i) => [i])]
        ].concat(t), a = Vt(n);
        Nt({
          csvContent: a,
          title: e.value.caption.text || "vue-ui-carousel-table"
        });
      });
    }
    return ce({
      pauseAnimation: f,
      resumeAnimation: y,
      toggleAnimation: se,
      generateCsv: ue,
      generatePdf: ie,
      generateImage: ee
    }), (t, n) => (openBlock(), createElementBlock("div", {
      style: { position: "relative", overflow: "visible" },
      ref_key: "chartContainer",
      ref: te2
    }, [
      createBaseVNode("div", {
        ref_key: "tableContainer",
        ref: u,
        id: `carousel-table_${S.value}`,
        style: normalizeStyle({
          height: unref(Z) || unref(_) ? "auto" : `${Math.max(me.value, fe.value)}px`,
          containerType: "inline-size",
          position: "relative",
          overflow: "auto",
          fontFamily: e.value.fontFamily
        }),
        class: normalizeClass({ "vue-ui-responsive": z.value, "is-playing": !b.value }),
        onMouseover: n[0] || (n[0] = (a) => Ce()),
        onMouseleave: n[1] || (n[1] = (a) => y()),
        onTouchstart: n[2] || (n[2] = (a) => $e()),
        onTouchend: n[3] || (n[3] = (a) => le()),
        onTouchcancel: n[4] || (n[4] = (a) => le())
      }, [
        $.value ? (openBlock(), createElementBlock("table", {
          key: 0,
          class: "vue-data-ui-carousel-table",
          style: normalizeStyle({
            ...e.value.style,
            border: `${e.value.border.size}px solid ${e.value.border.color}`,
            width: "100%",
            borderCollapse: "collapse"
          })
        }, [
          createBaseVNode("caption", {
            ref_key: "caption",
            ref: T,
            class: "vue-data-ui-carousel-table-caption",
            style: normalizeStyle({
              ...e.value.caption.style,
              fontFamily: "inherit",
              position: "sticky",
              top: 0,
              zIndex: 2,
              paddingTop: e.value.caption.padding.top + "px",
              paddingRight: e.value.caption.padding.right + "px",
              paddingBottom: e.value.caption.padding.bottom + "px",
              paddingLeft: e.value.caption.padding.left + "px",
              boxShadow: z.value ? e.value.thead.tr.style.boxShadow : "none",
              minHeight: "36px"
            })
          }, [
            createTextVNode(toDisplayString(e.value.caption.text && !t.$slots.caption ? e.value.caption.text : "") + " ", 1),
            renderSlot(t.$slots, "caption", {}, void 0, true)
          ], 4),
          createBaseVNode("thead", {
            style: normalizeStyle({ ...e.value.thead.style, position: "sticky", top: `${k.value}px`, zIndex: 1 })
          }, [
            createBaseVNode("tr", {
              ref_key: "tableRow",
              ref: A,
              role: "row",
              style: normalizeStyle({
                ...e.value.thead.tr.style,
                border: e.value.thead.tr.border.size ? `${e.value.thead.tr.border.size}px solid ${e.value.thead.tr.border.color}` : "none",
                boxShadow: z.value ? "none" : e.value.thead.tr.style.boxShadow
              }),
              height: `${e.value.thead.tr.height}px`
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(g.dataset.head, (a, i) => (openBlock(), createElementBlock("th", {
                role: "cell",
                key: `th_${i}`,
                style: normalizeStyle({
                  ...e.value.thead.tr.th.style,
                  border: e.value.thead.tr.th.border.size ? `${e.value.thead.tr.th.border.size}px solid ${e.value.thead.tr.th.border.color}` : "none",
                  paddingTop: e.value.thead.tr.th.padding.top + "px",
                  paddingRight: e.value.thead.tr.th.padding.right + "px",
                  paddingBottom: e.value.thead.tr.th.padding.bottom + "px",
                  paddingLeft: e.value.thead.tr.th.padding.left + "px"
                })
              }, [
                createTextVNode(toDisplayString(t.$slots.th ? "" : a) + " ", 1),
                renderSlot(t.$slots, "th", normalizeProps(guardReactiveProps({ th: a, colIndex: i })), void 0, true)
              ], 4))), 128))
            ], 12, Se)
          ], 4),
          g.dataset.body && g.dataset.head ? (openBlock(), createElementBlock("tbody", {
            key: 0,
            ref_key: "tbody",
            ref: x,
            style: normalizeStyle({
              clipPath: "inset(0,0,0,0)"
            })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(g.dataset.body, (a, i) => (openBlock(), createElementBlock("tr", {
              style: normalizeStyle({
                ...e.value.tbody.tr.style,
                border: `${e.value.tbody.tr.border.size}px solid ${e.value.tbody.tr.border.color}`,
                verticalAlign: "middle"
              })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(a, (p, U) => (openBlock(), createElementBlock("td", {
                role: "cell",
                "data-cell": g.dataset.head[U] || "",
                style: normalizeStyle({
                  ...e.value.tbody.tr.td.style,
                  border: `${e.value.tbody.tr.td.border.size}px solid ${e.value.tbody.tr.td.border.color}`,
                  backgroundColor: unref(dr)(e.value.tbody.tr.td.style.backgroundColor, i % 2 === 0 && e.value.tbody.tr.td.alternateColor ? e.value.tbody.tr.td.alternateOpacity * 100 : 100),
                  paddingTop: e.value.tbody.tr.td.padding.top + "px",
                  paddingRight: e.value.tbody.tr.td.padding.right + "px",
                  paddingBottom: e.value.tbody.tr.td.padding.bottom + "px",
                  paddingLeft: e.value.tbody.tr.td.padding.left + "px",
                  verticalAlign: "middle"
                }),
                height: `${e.value.tbody.tr.height}px`
              }, [
                createTextVNode(toDisplayString(t.$slots.td ? "" : p) + " ", 1),
                renderSlot(t.$slots, "td", normalizeProps(guardReactiveProps({ td: p, rowIndex: i, colIndex: U })), void 0, true)
              ], 12, He))), 256))
            ], 4))), 256))
          ], 4)) : createCommentVNode("", true)
        ], 4)) : createCommentVNode("", true)
      ], 46, Ne),
      $.value ? createCommentVNode("", true) : (openBlock(), createBlock(Cs, {
        key: 0,
        config: {
          type: "table"
        }
      })),
      e.value.userOptions.show && $.value ? (openBlock(), createBlock(ae, {
        ref: "details",
        key: `user_option_${ae2.value}`,
        backgroundColor: e.value.style.backgroundColor,
        color: e.value.style.color,
        isPrinting: unref(Z),
        isImaging: unref(_),
        uid: S.value,
        hasTooltip: false,
        hasPdf: e.value.userOptions.buttons.pdf,
        hasImg: e.value.userOptions.buttons.img,
        hasXls: e.value.userOptions.buttons.csv,
        hasTable: false,
        hasLabel: false,
        hasAnimation: e.value.userOptions.buttons.animation,
        isAnimation: !c2.value.showAnimation,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: Q.value,
        chartElement: te2.value,
        position: e.value.userOptions.position,
        titles: { ...e.value.userOptions.buttonTitles },
        zIndex: 3,
        offsetX: 12,
        onGeneratePdf: ie,
        onGenerateCsv: ue,
        onGenerateImage: unref(ee),
        onToggleAnimation: se,
        onToggleFullscreen: be
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
        t.$slots.optionAnimation ? {
          name: "optionAnimation",
          fn: withCtx(() => [
            renderSlot(t.$slots, "optionAnimation", {}, void 0, true)
          ]),
          key: "3"
        } : void 0,
        t.$slots.optionFullscreen ? {
          name: "optionFullscreen",
          fn: withCtx(({ toggleFullscreen: a, isFullscreen: i }) => [
            renderSlot(t.$slots, "optionFullscreen", normalizeProps(guardReactiveProps({ toggleFullscreen: a, isFullscreen: i })), void 0, true)
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasXls", "hasAnimation", "isAnimation", "hasFullscreen", "isFullscreen", "chartElement", "position", "titles", "onGenerateImage"])) : createCommentVNode("", true),
      t.$slots.source ? (openBlock(), createElementBlock("div", Le, [
        renderSlot(t.$slots, "source", {}, void 0, true)
      ], 512)) : createCommentVNode("", true)
    ], 512));
  }
};
var je = s(Ue, [["__scopeId", "data-v-1b9d6aaa"]]);
export {
  je as default
};
//# sourceMappingURL=vue-ui-carousel-table-kcQa0FHw-56LWCZFD.js.map
