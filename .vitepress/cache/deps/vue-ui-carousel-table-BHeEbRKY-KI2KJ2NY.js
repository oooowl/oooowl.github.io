import {
  ie,
  se
} from "./chunk-KUISEN2N.js";
import {
  fs
} from "./chunk-XKFV7VRH.js";
import "./chunk-VCFIOMKF.js";
import {
  c
} from "./chunk-B52AVJZK.js";
import "./chunk-57NPTS3S.js";
import {
  s
} from "./chunk-WZWZ3JKY.js";
import {
  Kt,
  Lt,
  Nt,
  Ot,
  Xt,
  cr,
  oe
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
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/vue-ui-carousel-table-BHeEbRKY.js
var Ne = ["id"];
var Se = ["height"];
var He = ["data-cell", "height"];
var Le = {
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
  setup(g, { expose: pe }) {
    const l = g, { vue_ui_carousel_table: ce } = oe(), S = ref(Lt()), Q = ref(false), $ = ref(!!l.dataset);
    onMounted(() => {
      W();
    });
    function W() {
      Xt(l.dataset) ? Kt({
        componentName: "VueUiCarouselTable",
        type: "dataset"
      }) : ((!l.dataset.head || Xt(l.dataset.head)) && (Kt({
        componentName: "VueUiCarouselTable",
        type: "datasetAttribute",
        property: "head"
      }), $.value = false), (!l.dataset.body || Xt(l.dataset.body)) && (Kt({
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
        defaultConfig: ce
      });
    }
    watch(() => l.config, (t) => {
      e.value = Y(), W();
    }, { deep: true }), watch(() => l.dataset, (t) => {
      H();
    }, { deep: true });
    const { isPrinting: Z, isImaging: _, generatePdf: he, generateImage: ee } = se({
      elementId: `carousel-table_${S.value}`,
      fileName: e.value.caption.text || "vue-ui-carousel-table"
    }), v = ref({
      showAnimation: e.value.animation.use
    }), s2 = ref(null), te = ref(null), T = ref(null), A = ref(null), x = ref(0), P = ref(0), R = ref(false), k = ref(null), h = ref(null), w = ref(0);
    function H() {
      k.value && (h.value = {
        elements: k.value.getElementsByTagName("tr"),
        heights: Array.from(k.value.getElementsByTagName("tr")).map((t) => t.getBoundingClientRect().height)
      });
    }
    onMounted(H);
    const fe = computed(() => !h.value || !h.value.heights.length ? 0 : Math.max(...h.value.heights) + x.value + P.value), ge = computed(() => l.dataset.body ? e.value.tbody.tr.visible <= l.dataset.body.length ? e.value.tbody.tr.visible : l.dataset.body.length : 0), me = computed(() => (e.value.tbody.tr.height + e.value.tbody.tr.td.padding.top + e.value.tbody.tr.td.padding.bottom + e.value.tbody.tr.border.size * 2) * ge.value + x.value + P.value), z = ref(0), I = ref(null), m = ref(0), b = ref(false), ae = ref(0);
    onMounted(() => {
      T.value && (x.value = T.value.getBoundingClientRect().height), A.value && (P.value = A.value.getBoundingClientRect().height), v.value.showAnimation && h.value && oe2();
    }), onMounted(() => {
      if (s2.value) {
        let a = function() {
          const i = t.getBoundingClientRect().bottom;
          n.forEach((p) => {
            p.getBoundingClientRect().top < i ? p.style.visibility = "hidden" : p.style.visibility = "visible";
          });
        };
        const t = s2.value.querySelector("thead"), n = Array.from(k.value.querySelectorAll("tr"));
        s2.value.addEventListener("scroll", a), a(), onBeforeUnmount(() => {
          s2.value.removeEventListener("scroll", a);
        });
      }
    });
    function be(t) {
      Q.value = t, ae.value += 1;
    }
    function oe2() {
      !I.value && !b.value && (I.value = requestAnimationFrame(ne));
    }
    function ye() {
      if (!s2.value) return false;
      const { scrollTop: t, scrollHeight: n, clientHeight: a } = s2.value;
      return t + a >= n;
    }
    function ne(t) {
      if (b.value) return;
      m.value || (m.value = t), t - m.value >= e.value.animation.speedMs && (z.value += h.value.heights[w.value], (ye() || w.value >= h.value.heights.length) && (z.value = 0, w.value = -1), w.value += 1, s2.value && s2.value.scrollTo({
        top: z.value,
        behavior: "smooth"
      }), m.value = t), I.value = requestAnimationFrame(ne);
    }
    function f() {
      b.value = true, cancelAnimationFrame(I.value), I.value = null;
    }
    onBeforeUnmount(f);
    function y() {
      !b.value || !v.value.showAnimation || (b.value = false, m.value = 0, oe2());
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
        t ? (v.value.showAnimation = true, y()) : (v.value.showAnimation = false, f());
      }
    );
    const Te = computed(() => e.value.responsiveBreakpoint);
    onMounted(() => {
      const t = new ResizeObserver((n) => {
        n.forEach((a) => {
          R.value = a.contentRect.width < Te.value;
        }), x.value = T.value ? T.value.getBoundingClientRect().height : 0, P.value = A.value ? A.value.getBoundingClientRect().height : 0, w.value = 0, nextTick(() => {
          f(), m.value = 0, z.value = 0, H(), y();
        });
      });
      s2.value && t.observe(s2.value);
    });
    function ie2() {
      he();
    }
    function se2() {
      v.value.showAnimation = !v.value.showAnimation, v.value.showAnimation ? y() : f();
    }
    function ue() {
      nextTick(() => {
        const t = l.dataset.head.map((i, p) => [
          [l.dataset.body[p]]
        ]), n = [
          [e.value.caption.text],
          [l.dataset.head.map((i) => [i])]
        ].concat(t), a = Nt(n);
        Ot({
          csvContent: a,
          title: e.value.caption.text || "vue-ui-carousel-table"
        });
      });
    }
    return pe({
      pauseAnimation: f,
      resumeAnimation: y,
      toggleAnimation: se2,
      generateCsv: ue,
      generatePdf: ie2,
      generateImage: ee
    }), (t, n) => (openBlock(), createElementBlock("div", {
      style: { position: "relative", overflow: "visible" },
      ref_key: "chartContainer",
      ref: te
    }, [
      createBaseVNode("div", {
        ref_key: "tableContainer",
        ref: s2,
        id: `carousel-table_${S.value}`,
        style: normalizeStyle({
          height: unref(Z) || unref(_) ? "auto" : `${Math.max(me.value, fe.value)}px`,
          containerType: "inline-size",
          position: "relative",
          overflow: "auto",
          fontFamily: e.value.fontFamily
        }),
        class: normalizeClass({ "vue-ui-responsive": R.value, "is-playing": !b.value }),
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
              boxShadow: R.value ? e.value.thead.tr.style.boxShadow : "none",
              minHeight: "36px"
            })
          }, [
            createTextVNode(toDisplayString(e.value.caption.text && !t.$slots.caption ? e.value.caption.text : "") + " ", 1),
            renderSlot(t.$slots, "caption", {}, void 0, true)
          ], 4),
          createBaseVNode("thead", {
            style: normalizeStyle({ ...e.value.thead.style, position: "sticky", top: `${x.value}px`, zIndex: 1 })
          }, [
            createBaseVNode("tr", {
              ref_key: "tableRow",
              ref: A,
              role: "row",
              style: normalizeStyle({
                ...e.value.thead.tr.style,
                border: e.value.thead.tr.border.size ? `${e.value.thead.tr.border.size}px solid ${e.value.thead.tr.border.color}` : "none",
                boxShadow: R.value ? "none" : e.value.thead.tr.style.boxShadow
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
            ref: k,
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
                  backgroundColor: unref(cr)(e.value.tbody.tr.td.style.backgroundColor, i % 2 === 0 && e.value.tbody.tr.td.alternateColor ? e.value.tbody.tr.td.alternateOpacity * 100 : 100),
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
      $.value ? createCommentVNode("", true) : (openBlock(), createBlock(fs, {
        key: 0,
        config: {
          type: "table"
        }
      })),
      e.value.userOptions.show && $.value ? (openBlock(), createBlock(ie, {
        ref: "details",
        key: `user_option_${ae.value}`,
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
        isAnimation: !v.value.showAnimation,
        hasFullscreen: e.value.userOptions.buttons.fullscreen,
        isFullscreen: Q.value,
        chartElement: te.value,
        position: e.value.userOptions.position,
        titles: { ...e.value.userOptions.buttonTitles },
        zIndex: 3,
        offsetX: 12,
        onGeneratePdf: ie2,
        onGenerateCsv: ue,
        onGenerateImage: unref(ee),
        onToggleAnimation: se2,
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
      ]), 1032, ["backgroundColor", "color", "isPrinting", "isImaging", "uid", "hasPdf", "hasImg", "hasXls", "hasAnimation", "isAnimation", "hasFullscreen", "isFullscreen", "chartElement", "position", "titles", "onGenerateImage"])) : createCommentVNode("", true)
    ], 512));
  }
};
var Xe = s(Le, [["__scopeId", "data-v-9f07c041"]]);
export {
  Xe as default
};
//# sourceMappingURL=vue-ui-carousel-table-BHeEbRKY-KI2KJ2NY.js.map
