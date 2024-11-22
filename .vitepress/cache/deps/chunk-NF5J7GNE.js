// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/useResponsive-NZB-WLRF.js
function b(e, i, o, t = {}) {
  if (o <= 0) return;
  e.save();
  const {
    color: s = "black",
    lineWidth: u = 1,
    lineCap: d = "round",
    lineJoin: f = "round",
    lineDash: w = null,
    lineDashoffset: r = 0,
    shadowColor: l = null,
    shadowBlur: a = 0,
    shadowOffsetX: y = 0,
    shadowOffsetY: g = 0,
    fillStyle: N = "#FFFFFF"
  } = t;
  e.beginPath(), e.arc(i.x, i.y, o, 0, 2 * Math.PI), e.strokeStyle = s, e.lineWidth = u, e.lineCap = d, e.lineJoin = f, w && (e.setLineDash(w), e.lineDashoffset = r), l && (e.shadowColor = l, e.shadowOffsetX = y, e.shadowOffsetY = g), a && (e.shadowBlur = a), N && (e.fillStyle = N), e.fillStyle && e.fill(), e.stroke(), e.restore();
}
function C(e, i, o = {}) {
  if (!i.length) return;
  e.save();
  const {
    color: t = "black",
    lineWidth: s = 1,
    lineCap: u = "round",
    lineJoin: d = "round",
    lineDash: f = null,
    lineDashoffset: w = 0,
    shadowColor: r = null,
    shadowBlur: l = 0,
    shadowOffsetX: a = 0,
    shadowOffsetY: y = 0
  } = o;
  e.beginPath(), e.moveTo(i[0].x, i[0].y);
  for (let g = 1; g < i.length; g += 1)
    e.lineTo(i[g].x, i[g].y);
  e.strokeStyle = t, e.lineWidth = s, e.lineCap = u, e.lineJoin = d, f && (e.setLineDash(f), e.lineDashoffset = w), r && (e.shadowColor = r, e.shadowOffsetX = a, e.shadowOffsetY = y), l && (e.shadowBlur = l), e.stroke(), e.restore();
}
function m(e, i, o = {}) {
  if (!i.length) return;
  e.save();
  const {
    strokeColor: t = "black",
    lineWidth: s = 1,
    lineCap: u = "round",
    lineJoin: d = "round",
    lineDash: f = null,
    lineDashoffset: w = 0,
    fillColor: r = null,
    gradient: l = null,
    shadowColor: a = null,
    shadowBlur: y = 0,
    shadowOffsetX: g = 0,
    shadowOffsetY: N = 0
  } = o;
  e.beginPath(), e.moveTo(i[0].x, i[0].y);
  for (let n = 1; n < i.length; n += 1)
    e.lineTo(i[n].x, i[n].y);
  if (e.closePath(), e.strokeStyle = t, e.lineWidth = s, e.lineCap = u, e.lineJoin = d, f && (e.setLineDash(f), e.lineDashoffset = w), a && (e.shadowColor = a, e.shadowBlur = y, e.shadowOffsetX = g, e.shadowOffsetY = N), l) {
    let n;
    l.type === "linear" ? n = e.createLinearGradient(
      h(l.start.x, Number.MIN_VALUE),
      h(l.start.y, Number.MIN_VALUE),
      h(l.end.x, Number.MIN_VALUE * 2),
      h(l.end.y, Number.MIN_VALUE * 2)
    ) : l.type === "radial" && (n = e.createRadialGradient(
      h(l.start.x, Number.MIN_VALUE),
      h(l.start.y, Number.MIN_VALUE),
      l.start.r || 0,
      h(l.end.x, Number.MIN_VALUE * 2),
      h(l.end.y, Number.MIN_VALUE * 2),
      l.end.r || 0
    )), n && l.stops && (l.stops.forEach((p) => {
      n.addColorStop(p.offset, p.color);
    }), e.fillStyle = n);
  } else r && (e.fillStyle = r);
  e.fillStyle && e.fill(), t && e.stroke(), e.restore();
}
function L(e, i, o = {}) {
  if (!i.length) return;
  e.save();
  const {
    strokeColor: t = "black",
    lineWidth: s = 1,
    lineCap: u = "round",
    lineJoin: d = "round",
    lineDash: f = null,
    lineDashoffset: w = 0,
    fillColor: r = null,
    gradient: l = null,
    shadowColor: a = null,
    shadowBlur: y = 0,
    shadowOffsetX: g = 0,
    shadowOffsetY: N = 0
  } = o;
  e.beginPath(), e.moveTo(i[0].x, i[0].y);
  for (let n = 1; n < i.length; n += 1)
    e.lineTo(i[n].x, i[n].y);
  if (e.closePath(), e.strokeStyle = t, e.lineWidth = s, e.lineCap = u, e.lineJoin = d, f && (e.setLineDash(f), e.lineDashoffset = w), a && (e.shadowColor = a, e.shadowBlur = y, e.shadowOffsetX = g, e.shadowOffsetY = N), l) {
    let n;
    l.type === "linear" ? n = e.createLinearGradient(
      h(l.start.x, Number.MIN_VALUE),
      h(l.start.y, Number.MIN_VALUE),
      h(l.end.x, Number.MIN_VALUE * 2),
      h(l.end.y, Number.MIN_VALUE * 2)
    ) : l.type === "radial" && (n = e.createRadialGradient(
      h(l.start.x, Number.MIN_VALUE),
      h(l.start.y, Number.MIN_VALUE),
      l.start.r || 0,
      h(l.end.x, Number.MIN_VALUE * 2),
      h(l.end.y, Number.MIN_VALUE * 2),
      l.end.r || 0
    )), n && l.stops && (l.stops.forEach((p) => {
      n.addColorStop(p.offset, p.color);
    }), e.fillStyle = n);
  } else r && (e.fillStyle = r);
  e.fillStyle && e.fill(), t && e.stroke(), e.restore();
}
function I(e, i, o, t, s = {}) {
  e.save();
  const {
    font: u = "16px sans-serif",
    color: d = "black",
    align: f = "start",
    baseline: w = "alphabetic",
    maxWidth: r = void 0,
    rotation: l = 0,
    shadowColor: a = null,
    shadowBlur: y = 0,
    shadowOffsetX: g = 0,
    shadowOffsetY: N = 0,
    strokeColor: n = null,
    lineWidth: p = 1
  } = s;
  e.font = u, e.fillStyle = d, e.textAlign = f, e.textBaseline = w, a && (e.shadowColor = a, e.shadowBlur = y, e.shadowOffsetX = g, e.shadowOffsetY = N), n && (e.strokeStyle = n, e.lineWidth = p), l !== 0 && (e.translate(o, t), e.rotate(Math.PI / 180 * l), e.translate(-o, -t)), e.fillText(i, o, t, r), n && e.strokeText(i, o, t, r), e.restore();
}
function O(e, i = 20) {
  let o;
  return function(...t) {
    const s = this;
    o || (e.apply(s, t), o = true, setTimeout(() => o = false, i));
  };
}
function E(e, i, o = false) {
  let t;
  return function(...s) {
    const u = this, d = function() {
      t = null, o || e.apply(u, s);
    }, f = o && !t;
    clearTimeout(t), t = setTimeout(d, i), f && e.apply(u, s);
  };
}
function k(e) {
  const i = document.createElement("canvas");
  return i.width = e.width || 1, i.height = e.height || 1, e.width || (e.width = 1), e.height || (e.height = 1), i.getContext("2d").drawImage(e, 0, 0), i;
}
function h(e, i) {
  return [null, void 0, NaN, 1 / 0, -1 / 0].includes(e) ? i : e;
}
function M({
  chart: e,
  title: i = null,
  slicer: o = null,
  legend: t = null
}) {
  let s = 0, u = 0;
  if (e) {
    const d = e.parentNode, { height: f, width: w } = d.getBoundingClientRect();
    let r = 0, l = 0, a = 0;
    i && (r = i.getBoundingClientRect().height), o && (l = o.getBoundingClientRect().height), t && (a = t.getBoundingClientRect().height), s = f - r - l - a, u = w;
  }
  return {
    width: u,
    height: s
  };
}

export {
  b,
  C,
  m,
  L,
  I,
  O,
  E,
  k,
  M
};
//# sourceMappingURL=chunk-NF5J7GNE.js.map
