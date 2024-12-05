import {
  Je,
  st,
  te
} from "./chunk-4SKEOFB2.js";
import {
  computed,
  createElementBlock,
  nextTick,
  openBlock,
  ref
} from "./chunk-VJWGEPT5.js";
import {
  xQ
} from "./chunk-VFW4PQWD.js";

// node_modules/vue-data-ui/dist/vue-ui-screenshot-BV6ZYQRk.js
var te2 = {
  __name: "vue-ui-screenshot",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["postImage"],
  setup(Y, { expose: z, emit: H }) {
    const k = Y, { vue_ui_screenshot: C } = te(), $ = ref(`vue-ui-screenshot-${Math.random()}`), n = computed(() => {
      if (!Object.keys(k.config || {}).length)
        return C;
      const e = Je({
        defaultConfig: C,
        userConfig: k.config
      });
      return st(e);
    }), a = ref(null), d = ref(null), v = ref(null), B = ref(null), M = ref(null), y = ref(null), h = ref(null), p = ref(null), m = ref(null), b = ref(null), x = ref(null), w = ref(false), S = ref(null);
    function T() {
      const e = document.createElement("DIV"), { innerWidth: t, innerHeight: l } = window;
      return e.style.position = "fixed", e.style.top = `${l ? l / 2 - n.value.style.captureArea.initialHeight / 2 : 200}px`, e.style.left = `${t ? t / 2 - n.value.style.captureArea.initialWidth / 2 : 100}px`, e.style.width = `${n.value.style.captureArea.initialWidth}px`, e.style.height = `${n.value.style.captureArea.initialHeight}px`, e.style.background = n.value.style.captureArea.background, e.style.cursor = "move", e.style.boxSizing = "border-box", e.style.border = n.value.style.captureArea.border, e.style.resize = "both", e.style.padding = "none !important", e.style.margin = "none !important", e.dataset.cy = "screenshot-overlay", e;
    }
    function E() {
      a.value && (clearTimeout(S.value), a.value.remove(), a.value = null);
    }
    function R(e) {
      const t = document.createElement("DIV");
      t.classList.add("vue-ui-screenshot-info-text"), t.innerHTML = n.value.translations.info, t.dataset.html2canvasIgnore = "true", t.dataset.cy = "screenshot-info-text", t.style.background = n.value.style.info.background, t.style.color = n.value.style.info.color, t.style.fontWeight = n.value.style.info.bold ? "bold" : "normal", t.style.minWidth = `${n.value.style.info.minWidth}px`, t.style.left = "50%", t.style.padding = `${n.value.style.info.padding}px`, t.style.position = "absolute", t.style.textAlign = "center", t.style.top = `${n.value.style.info.top}px`, t.style.transform = "translateX(-50%)", t.style.borderRadius = `${n.value.style.info.borderRadius}px`, t.style.boxShadow = n.value.style.info.boxShadow, t.style.fontFamily = n.value.style.info.fontFamily, t.style.fontSize = `${n.value.style.info.fontSize}px`, t.style.border = n.value.style.info.border, t.style.userSelect = "none";
      const l = document.createElement("BUTTON");
      l.classList.add("vue-ui-screenshot-close-button"), l.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>', l.style.outline = "none", l.dataset.cy = "screenshot-close-button", l.style.display = "flex", l.style.cursor = "pointer", l.style.borderRadius = "50%", l.style.alignItems = "center", l.style.position = "absolute", l.style.justifyContent = "center", l.style.transformOrigin = "center", l.style.top = `${n.value.style.cancelButton.top}px`, l.style.right = `${n.value.style.cancelButton.right}px`, l.style.background = n.value.style.cancelButton.background, l.style.color = n.value.style.cancelButton.color, l.style.border = n.value.style.cancelButton.border, l.style.borderRadius = `${n.value.style.cancelButton.borderRadius}px`, l.style.height = `${n.value.style.cancelButton.size}px`, l.style.width = `${n.value.style.cancelButton.size}px`, l.addEventListener("click", E), t.appendChild(l), e.appendChild(t);
    }
    function I(e) {
      a.value && (w.value = true, e.touches ? (y.value = e.touches[0].clientX, h.value = e.touches[0].clientY) : (y.value = e.clientX, h.value = e.clientY), b.value = a.value.getBoundingClientRect().width, x.value = a.value.getBoundingClientRect().height, e.target.addEventListener("mousemove", L), e.target.addEventListener("touchmove", L));
    }
    function L(e) {
      if (!a.value) return;
      let t, l;
      e.touches ? (p.value = e.touches[0].clientX, t = e.touches[0].clientX, m.value = e.touches[0].clientY, l = e.touches[0].clientY) : (p.value = e.clientX, t = e.clientX, m.value = e.clientY, l = e.clientY);
      const u = e.target.classList[0], s = a.value.style;
      switch (true) {
        case u === "vue-ui-screenshot-handle-nw":
          s.top = `${l}px`, s.left = `${t}px`, s.width = `${b.value + (y.value - p.value)}px`, s.height = `${x.value + (h.value - m.value)}px`;
          break;
        case u === "vue-ui-screenshot-handle-ne":
          s.top = `${l}px`, s.width = `${b.value + (p.value - y.value)}px`, s.height = `${x.value + (h.value - m.value)}px`;
          break;
        case u === "vue-ui-screenshot-handle-sw":
          s.left = `${t}px`, s.width = `${b.value + (y.value - p.value)}px`, s.height = `${x.value + (m.value - h.value)}px`;
          break;
        case u === "vue-ui-screenshot-handle-se":
          s.width = `${b.value + (p.value - y.value)}px`, s.height = `${x.value + (m.value - h.value)}px`;
          break;
      }
    }
    function A(e) {
      if (!a.value) return;
      e.stopPropagation();
      const t = Array.from(e.target.classList);
      t.includes("vue-ui-screenshot-handle-se") || t.includes("vue-ui-screenshot-handle-sw") || t.includes("vue-ui-screenshot-handle-nw") || t.includes("vue-ui-screenshot-handle-ne") || (w.value = true, a.value.style.pointerEvents = "auto", e.touches ? (d.value = e.touches[0].clientX, v.value = e.touches[0].clientY) : (d.value = e.clientX, v.value = e.clientY), B.value = d.value, M.value = v.value, document.addEventListener("mousemove", g), document.addEventListener("touchmove", g), document.addEventListener("mouseup", f), document.addEventListener("touchend", f));
    }
    function f() {
      d.value = null, v.value = null, B.value = null, M.value = null, w.value = false, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", f), document.removeEventListener("touchmove", g), document.removeEventListener("touchend", f);
    }
    function g(e) {
      if (!a.value) return;
      const t = a.value.getBoundingClientRect();
      let l, u;
      e.touches ? (l = e.touches[0].clientX - d.value, u = e.touches[0].clientY - v.value, d.value = e.touches[0].clientX, v.value = e.touches[0].clientY) : (l = e.clientX - d.value, u = e.clientY - v.value, d.value = e.clientX, v.value = e.clientY), a.value.style.top = `${t.top + u}px`, a.value.style.left = `${t.left + l}px`;
    }
    function X(e) {
      e.target.removeEventListener("mousemove", L), e.target.removeEventListener("touchmove", L), document.removeEventListener("mousemove", g), document.removeEventListener("touchmove", g), document.removeEventListener("mouseup", f), document.removeEventListener("touchend", f), w.value = false;
    }
    function W() {
      const e = navigator.userAgent;
      return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        e
      ) ? "mobile" : "desktop";
    }
    function D() {
      const e = document.getElementById(`vue-ui-screenshot-button-${$.value}`);
      e.innerHTML = `<svg id="saveButtonSvg" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path fill="none" stroke="currentColor" d="M1 4 1 3C1 2 2 1 3 1L4 1M16 1 17 1C18 1 19 2 19 3L19 4M1 16 1 17C1 18 2 19 3 19L4 19M16 19 17 19C18 19 19 18 19 17L19 16M8 10A1 1 0 0012 10 1 1 0 008 10M5 13 5 8C5 7 5 7 6 7L14 7C15 7 15 7 15 8L15 13C15 14 15 14 14 14L6 14C5 14 5 14 5 13M7 6 13 6" />
    </svg>`, document.getElementById(`vue-ui-screenshot-button-${$.value}`).animate([
        { opacity: "0.3" },
        { opacity: "1" },
        { opacity: "0.3" }
      ], { duration: 1e3, iterations: 1 / 0 }), e.classList.add("loading"), e.setAttribute("disabled", "true");
    }
    function O() {
      if (!a.value) return;
      D();
      const e = a.value.getBoundingClientRect();
      S.value = setTimeout(() => {
        xQ(document.body, {
          allowTaint: true,
          width: e.width,
          height: e.height,
          x: e.left + window.scrollX,
          y: e.top + window.scrollY,
          useCORS: true,
          scale: n.value.quality
        }).then((t) => {
          const l = t.toDataURL("image/png", 1), u = l.split(",")[1], c = atob(u).length / 1024;
          if (n.value.mode === "download") {
            const o = document.createElement("a");
            o.download = "screenshot.png", o.href = l, o.click();
          }
          n.value.mode === "post" && H("postImage", {
            createdAt: Date.now(),
            fileSize: `${c.toFixed(2)} KB`,
            image: l,
            x: e.left + window.scrollX,
            y: e.top + window.scrollY,
            screenWidth: window.innerWidth > 0 ? window.innerWidth : screen.width,
            deviceType: W()
          });
        }).finally(E);
      }, 10);
    }
    function _(e) {
      const t = n.value.style.handles.size / 2 + 4, l = document.createElement("DIV");
      l.style.top = `${-t}px`, l.style.left = `${-t}px`, l.style.cursor = "nw-resize", l.classList.add("vue-ui-screenshot-handle-nw"), l.dataset.cy = "screenshot-handle-nw";
      const u = document.createElement("DIV");
      u.style.top = `${-t}px`, u.style.left = "auto", u.style.right = `${-t}px`, u.style.cursor = "ne-resize", u.classList.add("vue-ui-screenshot-handle-ne"), u.dataset.cy = "screenshot-handle-ne";
      const s = document.createElement("DIV");
      s.style.top = "auto", s.style.bottom = `${-t}px`, s.style.left = `${-t}px`, s.style.cursor = "sw-resize", s.classList.add("vue-ui-screenshot-handle-sw"), s.dataset.cy = "screenshot-handle-sw";
      const c = document.createElement("DIV");
      c.style.top = "auto", c.style.left = "auto", c.style.right = `${-t}px`, c.style.bottom = `${-t}px`, c.style.cursor = "se-resize", c.classList.add("vue-ui-screenshot-handle-se"), c.dataset.cy = "screenshot-handle-se";
      const o = document.createElement("BUTTON");
      o.innerHTML = `<svg id="saveButtonSvg" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke="currentColor" d="M1 4 1 3C1 2 2 1 3 1L4 1M16 1 17 1C18 1 19 2 19 3L19 4M1 16 1 17C1 18 2 19 3 19L4 19M16 19 17 19C18 19 19 18 19 17L19 16M8 10A1 1 0 0012 10 1 1 0 008 10M5 13 5 8C5 7 5 7 6 7L14 7C15 7 15 7 15 8L15 13C15 14 15 14 14 14L6 14C5 14 5 14 5 13M7 6 13 6" /></svg><span>${n.value.translations.captureButton}</span>`, o.classList.add("vue-ui-screenshot-capture-button"), o.id = `vue-ui-screenshot-button-${$.value}`, o.style.position = "absolute", o.style.top = "50%", o.style.left = "50%", o.style.transform = "translate(-50%,-50%)", o.style.background = n.value.style.captureButton.background, o.style.color = n.value.style.captureButton.color, o.style.border = n.value.style.captureButton.border, o.style.outline = "none", o.style.cursor = "pointer", o.style.padding = n.value.style.captureButton.padding, o.style.fontFamily = n.value.style.captureButton.fontFamily, o.style.fontSize = `${n.value.style.captureButton.fontSize}px`, o.style.minHeight = `${n.value.style.captureButton.minHeight}px`, o.style.width = "fit-content", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.gap = "3px", o.style.borderRadius = `${n.value.style.captureButton.borderRadius}px`, o.style.boxShadow = n.value.style.captureButton.boxShadow, o.style.userSelect = "none", o.style.opacity = "0.95", o.style.textAlign = "left", o.style.fontWeight = n.value.style.captureButton.bold ? "bold" : "normal", o.dataset.cy = "screenshot-save-button", o.addEventListener("mouseenter", () => {
        o.style.opacity = "1";
      }), o.addEventListener("mouseleave", () => {
        o.style.opacity = "0.95";
      }), o.addEventListener("click", O), e.appendChild(o), [l, u, s, c].forEach((r, j) => {
        r.classList.add(`handle-${j}`), r.dataset.html2canvasIgnore = "true", r.style.position = "absolute", r.style.height = `${n.value.style.handles.size}px`, r.style.width = `${n.value.style.handles.size}px`, r.style.background = n.value.style.handles.background, r.style.border = n.value.style.handles.border, r.style.borderRadius = `${n.value.style.handles.borderRadius}px`, r.style.pointerEvents = "auto !important", r.addEventListener("mousedown", I), r.addEventListener("touchstart", I), e.appendChild(r);
      });
    }
    function F() {
      a.value || nextTick(() => {
        const e = T();
        e.dataset.html2canvasIgnore = true, R(e), _(e), a.value = e, e.addEventListener("touchmove", function(t) {
          t.preventDefault();
        }, { passive: false }), document.body.appendChild(e), document.addEventListener("mousedown", A), document.addEventListener("touchstart", A), document.addEventListener("mouseup", X), document.addEventListener("touchend", X);
      });
    }
    return z({
      shoot: F,
      close: E
    }), (e, t) => (openBlock(), createElementBlock("div"));
  }
};
export {
  te2 as default
};
//# sourceMappingURL=vue-ui-screenshot-BV6ZYQRk-MNQE4TZE.js.map
