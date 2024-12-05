// node_modules/vue-data-ui/dist/useResponsive-CoxXLe23.js
function b(e, i, o, t = {}) {
  if (o <= 0) return;
  e.save();
  const {
    color: s = "black",
    lineWidth: h = 1,
    lineCap: w = "round",
    lineJoin: f = "round",
    lineDash: g = null,
    lineDashoffset: u = 0,
    shadowColor: l = null,
    shadowBlur: r = 0,
    shadowOffsetX: y = 0,
    shadowOffsetY: d = 0,
    fillStyle: N = "#FFFFFF"
  } = t;
  e.beginPath(), e.arc(i.x, i.y, o, 0, 2 * Math.PI), e.strokeStyle = s, e.lineWidth = h, e.lineCap = w, e.lineJoin = f, g && (e.setLineDash(g), e.lineDashoffset = u), l && (e.shadowColor = l, e.shadowOffsetX = y, e.shadowOffsetY = d), r && (e.shadowBlur = r), N && (e.fillStyle = N), e.fillStyle && e.fill(), e.stroke(), e.restore();
}
function C(e, i, o = {}) {
  if (!i.length) return;
  e.save();
  const {
    color: t = "black",
    lineWidth: s = 1,
    lineCap: h = "round",
    lineJoin: w = "round",
    lineDash: f = null,
    lineDashoffset: g = 0,
    shadowColor: u = null,
    shadowBlur: l = 0,
    shadowOffsetX: r = 0,
    shadowOffsetY: y = 0
  } = o;
  e.beginPath(), e.moveTo(i[0].x, i[0].y);
  for (let d = 1; d < i.length; d += 1)
    e.lineTo(i[d].x, i[d].y);
  e.strokeStyle = t, e.lineWidth = s, e.lineCap = h, e.lineJoin = w, f && (e.setLineDash(f), e.lineDashoffset = g), u && (e.shadowColor = u, e.shadowOffsetX = r, e.shadowOffsetY = y), l && (e.shadowBlur = l), e.stroke(), e.restore();
}
function m(e, i, o = {}) {
  if (!i.length) return;
  e.save();
  const {
    strokeColor: t = "black",
    lineWidth: s = 1,
    lineCap: h = "round",
    lineJoin: w = "round",
    lineDash: f = null,
    lineDashoffset: g = 0,
    fillColor: u = null,
    gradient: l = null,
    shadowColor: r = null,
    shadowBlur: y = 0,
    shadowOffsetX: d = 0,
    shadowOffsetY: N = 0
  } = o;
  e.beginPath(), e.moveTo(i[0].x, i[0].y);
  for (let n = 1; n < i.length; n += 1)
    e.lineTo(i[n].x, i[n].y);
  if (e.closePath(), e.strokeStyle = t, e.lineWidth = s, e.lineCap = h, e.lineJoin = w, f && (e.setLineDash(f), e.lineDashoffset = g), r && (e.shadowColor = r, e.shadowBlur = y, e.shadowOffsetX = d, e.shadowOffsetY = N), l) {
    let n;
    l.type === "linear" ? n = e.createLinearGradient(
      a(l.start.x, Number.MIN_VALUE),
      a(l.start.y, Number.MIN_VALUE),
      a(l.end.x, Number.MIN_VALUE * 2),
      a(l.end.y, Number.MIN_VALUE * 2)
    ) : l.type === "radial" && (n = e.createRadialGradient(
      a(l.start.x, Number.MIN_VALUE),
      a(l.start.y, Number.MIN_VALUE),
      l.start.r || 0,
      a(l.end.x, Number.MIN_VALUE * 2),
      a(l.end.y, Number.MIN_VALUE * 2),
      l.end.r || 0
    )), n && l.stops && (l.stops.forEach((p) => {
      n.addColorStop(p.offset, p.color);
    }), e.fillStyle = n);
  } else u && (e.fillStyle = u);
  e.fillStyle && e.fill(), t && e.stroke(), e.restore();
}
function L(e, i, o = {}) {
  if (!i.length) return;
  e.save();
  const {
    strokeColor: t = "black",
    lineWidth: s = 1,
    lineCap: h = "round",
    lineJoin: w = "round",
    lineDash: f = null,
    lineDashoffset: g = 0,
    fillColor: u = null,
    gradient: l = null,
    shadowColor: r = null,
    shadowBlur: y = 0,
    shadowOffsetX: d = 0,
    shadowOffsetY: N = 0
  } = o;
  e.beginPath(), e.moveTo(i[0].x, i[0].y);
  for (let n = 1; n < i.length; n += 1)
    e.lineTo(i[n].x, i[n].y);
  if (e.closePath(), e.strokeStyle = t, e.lineWidth = s, e.lineCap = h, e.lineJoin = w, f && (e.setLineDash(f), e.lineDashoffset = g), r && (e.shadowColor = r, e.shadowBlur = y, e.shadowOffsetX = d, e.shadowOffsetY = N), l) {
    let n;
    l.type === "linear" ? n = e.createLinearGradient(
      a(l.start.x, Number.MIN_VALUE),
      a(l.start.y, Number.MIN_VALUE),
      a(l.end.x, Number.MIN_VALUE * 2),
      a(l.end.y, Number.MIN_VALUE * 2)
    ) : l.type === "radial" && (n = e.createRadialGradient(
      a(l.start.x, Number.MIN_VALUE),
      a(l.start.y, Number.MIN_VALUE),
      l.start.r || 0,
      a(l.end.x, Number.MIN_VALUE * 2),
      a(l.end.y, Number.MIN_VALUE * 2),
      l.end.r || 0
    )), n && l.stops && (l.stops.forEach((p) => {
      n.addColorStop(p.offset, p.color);
    }), e.fillStyle = n);
  } else u && (e.fillStyle = u);
  e.fillStyle && e.fill(), t && e.stroke(), e.restore();
}
function I(e, i, o, t, s = {}) {
  e.save();
  const {
    font: h = "16px sans-serif",
    color: w = "black",
    align: f = "start",
    baseline: g = "alphabetic",
    maxWidth: u = void 0,
    rotation: l = 0,
    shadowColor: r = null,
    shadowBlur: y = 0,
    shadowOffsetX: d = 0,
    shadowOffsetY: N = 0,
    strokeColor: n = null,
    lineWidth: p = 1
  } = s;
  e.font = h, e.fillStyle = w, e.textAlign = f, e.textBaseline = g, r && (e.shadowColor = r, e.shadowBlur = y, e.shadowOffsetX = d, e.shadowOffsetY = N), n && (e.strokeStyle = n, e.lineWidth = p), l !== 0 && (e.translate(o, t), e.rotate(Math.PI / 180 * l), e.translate(-o, -t)), e.fillText(i, o, t, u), n && e.strokeText(i, o, t, u), e.restore();
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
    const h = this, w = function() {
      t = null, o || e.apply(h, s);
    }, f = o && !t;
    clearTimeout(t), t = setTimeout(w, i), f && e.apply(h, s);
  };
}
function S(e) {
  const i = document.createElement("canvas");
  return i.width = e.width || 1, i.height = e.height || 1, e.width || (e.width = 1), e.height || (e.height = 1), i.getContext("2d").drawImage(e, 0, 0), i;
}
function a(e, i) {
  return [null, void 0, NaN, 1 / 0, -1 / 0].includes(e) ? i : e;
}
function k({
  chart: e,
  title: i = null,
  slicer: o = null,
  legend: t = null,
  source: s = null,
  noTitle: h = null
}) {
  let w = 0, f = 0;
  if (e) {
    const g = e.parentNode, { height: u, width: l } = g.getBoundingClientRect();
    let r = 0, y = 0, d = 0, N = 0, n = 0;
    i && (r = i.getBoundingClientRect().height), o && (y = o.getBoundingClientRect().height), t && (d = t.getBoundingClientRect().height), s && (N = s.getBoundingClientRect().height), h && (n = h.getBoundingClientRect().height), w = u - r - y - d - N - n, f = l;
  }
  return {
    width: f,
    height: w
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
  S,
  k
};
//# sourceMappingURL=chunk-GUAP4JK5.js.map
