// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/jspdf.es.min-C660YX78.js
function fe(i2) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fe(i2);
}
var sn = Uint8Array;
var $e = Uint16Array;
var sa = Uint32Array;
var oo = new sn([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var so = new sn([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var us = new sn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var Ac = function(i2, e) {
  for (var n = new $e(31), a = 0; a < 31; ++a)
    n[a] = e += 1 << i2[a - 1];
  for (var c = new sa(n[30]), a = 1; a < 30; ++a)
    for (var o = n[a]; o < n[a + 1]; ++o)
      c[o] = o - n[a] << 5 | a;
  return [n, c];
};
var xc = Ac(oo, 2);
var Sc = xc[0];
var ls = xc[1];
Sc[28] = 258, ls[258] = 28;
var _c = Ac(so, 0);
var Au = _c[0];
var rc = _c[1];
var hs = new $e(32768);
for (ye = 0; ye < 32768; ++ye) {
  Pr = (ye & 43690) >>> 1 | (ye & 21845) << 1;
  Pr = (Pr & 52428) >>> 2 | (Pr & 13107) << 2, Pr = (Pr & 61680) >>> 4 | (Pr & 3855) << 4, hs[ye] = ((Pr & 65280) >>> 8 | (Pr & 255) << 8) >>> 1;
}
var Pr;
var ye;
var Kn = function(i2, e, n) {
  for (var a = i2.length, c = 0, o = new $e(e); c < a; ++c)
    ++o[i2[c] - 1];
  var l = new $e(e);
  for (c = 0; c < e; ++c)
    l[c] = l[c - 1] + o[c - 1] << 1;
  var h;
  if (n) {
    h = new $e(1 << e);
    var f = 15 - e;
    for (c = 0; c < a; ++c)
      if (i2[c])
        for (var g = c << 4 | i2[c], b = e - i2[c], A = l[i2[c] - 1]++ << b, S = A | (1 << b) - 1; A <= S; ++A)
          h[hs[A] >>> f] = g;
  } else
    for (h = new $e(a), c = 0; c < a; ++c)
      h[c] = hs[l[i2[c] - 1]++] >>> 15 - i2[c];
  return h;
};
var Ir = new sn(288);
for (ye = 0; ye < 144; ++ye)
  Ir[ye] = 8;
var ye;
for (ye = 144; ye < 256; ++ye)
  Ir[ye] = 9;
var ye;
for (ye = 256; ye < 280; ++ye)
  Ir[ye] = 7;
var ye;
for (ye = 280; ye < 288; ++ye)
  Ir[ye] = 8;
var ye;
var ca = new sn(32);
for (ye = 0; ye < 32; ++ye)
  ca[ye] = 5;
var ye;
var xu = Kn(Ir, 9, 0);
var Su = Kn(Ir, 9, 1);
var _u = Kn(ca, 5, 0);
var Pu = Kn(ca, 5, 1);
var ts = function(i2) {
  for (var e = i2[0], n = 1; n < i2.length; ++n)
    i2[n] > e && (e = i2[n]);
  return e;
};
var Bn = function(i2, e, n) {
  var a = e / 8 >> 0;
  return (i2[a] | i2[a + 1] << 8) >>> (e & 7) & n;
};
var es = function(i2, e) {
  var n = e / 8 >> 0;
  return (i2[n] | i2[n + 1] << 8 | i2[n + 2] << 16) >>> (e & 7);
};
var Ls = function(i2) {
  return (i2 / 8 >> 0) + (i2 & 7 && 1);
};
var Pc = function(i2, e, n) {
  (n == null || n > i2.length) && (n = i2.length);
  var a = new (i2 instanceof $e ? $e : i2 instanceof sa ? sa : sn)(n - e);
  return a.set(i2.subarray(e, n)), a;
};
var ku = function(i2, e, n) {
  var a = i2.length, c = !e || n, o = !n || n.i;
  n || (n = {}), e || (e = new sn(a * 3));
  var l = function(Y) {
    var $ = e.length;
    if (Y > $) {
      var et = new sn(Math.max($ * 2, Y));
      et.set(e), e = et;
    }
  }, h = n.f || 0, f = n.p || 0, g = n.b || 0, b = n.l, A = n.d, S = n.m, p = n.n, O = a * 8;
  do {
    if (!b) {
      n.f = h = Bn(i2, f, 1);
      var I = Bn(i2, f + 1, 3);
      if (f += 3, I)
        if (I == 1)
          b = Su, A = Pu, S = 9, p = 5;
        else if (I == 2) {
          var X = Bn(i2, f, 31) + 257, ot = Bn(i2, f + 10, 15) + 4, ut = X + Bn(i2, f + 5, 31) + 1;
          f += 14;
          for (var wt = new sn(ut), tt = new sn(19), R = 0; R < ot; ++R)
            tt[us[R]] = Bn(i2, f + R * 3, 7);
          f += ot * 3;
          var gt = ts(tt), dt = (1 << gt) - 1;
          if (!o && f + ut * (gt + 7) > O)
            break;
          for (var F = Kn(tt, gt, 1), R = 0; R < ut; ) {
            var P = F[Bn(i2, f, dt)];
            f += P & 15;
            var q = P >>> 4;
            if (q < 16)
              wt[R++] = q;
            else {
              var z = 0, D = 0;
              for (q == 16 ? (D = 3 + Bn(i2, f, 3), f += 2, z = wt[R - 1]) : q == 17 ? (D = 3 + Bn(i2, f, 7), f += 3) : q == 18 && (D = 11 + Bn(i2, f, 127), f += 7); D--; )
                wt[R++] = z;
            }
          }
          var at = wt.subarray(0, X), nt = wt.subarray(X);
          S = ts(at), p = ts(nt), b = Kn(at, S, 1), A = Kn(nt, p, 1);
        } else
          throw "invalid block type";
      else {
        var q = Ls(f) + 4, _ = i2[q - 4] | i2[q - 3] << 8, M = q + _;
        if (M > a) {
          if (o)
            throw "unexpected EOF";
          break;
        }
        c && l(g + _), e.set(i2.subarray(q, M), g), n.b = g += _, n.p = f = M * 8;
        continue;
      }
      if (f > O)
        throw "unexpected EOF";
    }
    c && l(g + 131072);
    for (var lt = (1 << S) - 1, Q = (1 << p) - 1, ft = S + p + 18; o || f + ft < O; ) {
      var z = b[es(i2, f) & lt], ht = z >>> 4;
      if (f += z & 15, f > O)
        throw "unexpected EOF";
      if (!z)
        throw "invalid length/literal";
      if (ht < 256)
        e[g++] = ht;
      else if (ht == 256) {
        b = null;
        break;
      } else {
        var kt = ht - 254;
        if (ht > 264) {
          var R = ht - 257, L = oo[R];
          kt = Bn(i2, f, (1 << L) - 1) + Sc[R], f += L;
        }
        var j = A[es(i2, f) & Q], B = j >>> 4;
        if (!j)
          throw "invalid distance";
        f += j & 15;
        var nt = Au[B];
        if (B > 3) {
          var L = so[B];
          nt += es(i2, f) & (1 << L) - 1, f += L;
        }
        if (f > O)
          throw "unexpected EOF";
        c && l(g + 131072);
        for (var W = g + kt; g < W; g += 4)
          e[g] = e[g - nt], e[g + 1] = e[g + 1 - nt], e[g + 2] = e[g + 2 - nt], e[g + 3] = e[g + 3 - nt];
        g = W;
      }
    }
    n.l = b, n.p = f, n.b = g, b && (h = 1, n.m = S, n.d = A, n.n = p);
  } while (!h);
  return g == e.length ? e : Pc(e, 0, g);
};
var lr = function(i2, e, n) {
  n <<= e & 7;
  var a = e / 8 >> 0;
  i2[a] |= n, i2[a + 1] |= n >>> 8;
};
var ia = function(i2, e, n) {
  n <<= e & 7;
  var a = e / 8 >> 0;
  i2[a] |= n, i2[a + 1] |= n >>> 8, i2[a + 2] |= n >>> 16;
};
var ns = function(i2, e) {
  for (var n = [], a = 0; a < i2.length; ++a)
    i2[a] && n.push({ s: a, f: i2[a] });
  var c = n.length, o = n.slice();
  if (!c)
    return [new sn(0), 0];
  if (c == 1) {
    var l = new sn(n[0].s + 1);
    return l[n[0].s] = 1, [l, 1];
  }
  n.sort(function(ut, wt) {
    return ut.f - wt.f;
  }), n.push({ s: -1, f: 25001 });
  var h = n[0], f = n[1], g = 0, b = 1, A = 2;
  for (n[0] = { s: -1, f: h.f + f.f, l: h, r: f }; b != c - 1; )
    h = n[n[g].f < n[A].f ? g++ : A++], f = n[g != b && n[g].f < n[A].f ? g++ : A++], n[b++] = { s: -1, f: h.f + f.f, l: h, r: f };
  for (var S = o[0].s, a = 1; a < c; ++a)
    o[a].s > S && (S = o[a].s);
  var p = new $e(S + 1), O = fs(n[b - 1], p, 0);
  if (O > e) {
    var a = 0, I = 0, q = O - e, _ = 1 << q;
    for (o.sort(function(wt, tt) {
      return p[tt.s] - p[wt.s] || wt.f - tt.f;
    }); a < c; ++a) {
      var M = o[a].s;
      if (p[M] > e)
        I += _ - (1 << O - p[M]), p[M] = e;
      else
        break;
    }
    for (I >>>= q; I > 0; ) {
      var X = o[a].s;
      p[X] < e ? I -= 1 << e - p[X]++ - 1 : ++a;
    }
    for (; a >= 0 && I; --a) {
      var ot = o[a].s;
      p[ot] == e && (--p[ot], ++I);
    }
    O = e;
  }
  return [new sn(p), O];
};
var fs = function(i2, e, n) {
  return i2.s == -1 ? Math.max(fs(i2.l, e, n + 1), fs(i2.r, e, n + 1)) : e[i2.s] = n;
};
var ic = function(i2) {
  for (var e = i2.length; e && !i2[--e]; )
    ;
  for (var n = new $e(++e), a = 0, c = i2[0], o = 1, l = function(f) {
    n[a++] = f;
  }, h = 1; h <= e; ++h)
    if (i2[h] == c && h != e)
      ++o;
    else {
      if (!c && o > 2) {
        for (; o > 138; o -= 138)
          l(32754);
        o > 2 && (l(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
      } else if (o > 3) {
        for (l(c), --o; o > 6; o -= 6)
          l(8304);
        o > 2 && (l(o - 3 << 5 | 8208), o = 0);
      }
      for (; o--; )
        l(c);
      o = 1, c = i2[h];
    }
  return [n.subarray(0, a), e];
};
var aa = function(i2, e) {
  for (var n = 0, a = 0; a < e.length; ++a)
    n += i2[a] * e[a];
  return n;
};
var ds = function(i2, e, n) {
  var a = n.length, c = Ls(e + 2);
  i2[c] = a & 255, i2[c + 1] = a >>> 8, i2[c + 2] = i2[c] ^ 255, i2[c + 3] = i2[c + 1] ^ 255;
  for (var o = 0; o < a; ++o)
    i2[c + o + 4] = n[o];
  return (c + 4 + a) * 8;
};
var ac = function(i2, e, n, a, c, o, l, h, f, g, b) {
  lr(e, b++, n), ++c[256];
  for (var A = ns(c, 15), S = A[0], p = A[1], O = ns(o, 15), I = O[0], q = O[1], _ = ic(S), M = _[0], X = _[1], ot = ic(I), ut = ot[0], wt = ot[1], tt = new $e(19), R = 0; R < M.length; ++R)
    tt[M[R] & 31]++;
  for (var R = 0; R < ut.length; ++R)
    tt[ut[R] & 31]++;
  for (var gt = ns(tt, 7), dt = gt[0], F = gt[1], P = 19; P > 4 && !dt[us[P - 1]]; --P)
    ;
  var z = g + 5 << 3, D = aa(c, Ir) + aa(o, ca) + l, at = aa(c, S) + aa(o, I) + l + 14 + 3 * P + aa(tt, dt) + (2 * tt[16] + 3 * tt[17] + 7 * tt[18]);
  if (z <= D && z <= at)
    return ds(e, b, i2.subarray(f, f + g));
  var nt, lt, Q, ft;
  if (lr(e, b, 1 + (at < D)), b += 2, at < D) {
    nt = Kn(S, p, 0), lt = S, Q = Kn(I, q, 0), ft = I;
    var ht = Kn(dt, F, 0);
    lr(e, b, X - 257), lr(e, b + 5, wt - 1), lr(e, b + 10, P - 4), b += 14;
    for (var R = 0; R < P; ++R)
      lr(e, b + 3 * R, dt[us[R]]);
    b += 3 * P;
    for (var kt = [M, ut], L = 0; L < 2; ++L)
      for (var j = kt[L], R = 0; R < j.length; ++R) {
        var B = j[R] & 31;
        lr(e, b, ht[B]), b += dt[B], B > 15 && (lr(e, b, j[R] >>> 5 & 127), b += j[R] >>> 12);
      }
  } else
    nt = xu, lt = Ir, Q = _u, ft = ca;
  for (var R = 0; R < h; ++R)
    if (a[R] > 255) {
      var B = a[R] >>> 18 & 31;
      ia(e, b, nt[B + 257]), b += lt[B + 257], B > 7 && (lr(e, b, a[R] >>> 23 & 31), b += oo[B]);
      var W = a[R] & 31;
      ia(e, b, Q[W]), b += ft[W], W > 3 && (ia(e, b, a[R] >>> 5 & 8191), b += so[W]);
    } else
      ia(e, b, nt[a[R]]), b += lt[a[R]];
  return ia(e, b, nt[256]), b + lt[256];
};
var Fu = new sa([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var Iu = function(i2, e, n, a, c, o) {
  var l = i2.length, h = new sn(a + l + 5 * (1 + Math.floor(l / 7e3)) + c), f = h.subarray(a, h.length - c), g = 0;
  if (!e || l < 8)
    for (var b = 0; b <= l; b += 65535) {
      var A = b + 65535;
      A < l ? g = ds(f, g, i2.subarray(b, A)) : (f[b] = o, g = ds(f, g, i2.subarray(b, l)));
    }
  else {
    for (var S = Fu[e - 1], p = S >>> 13, O = S & 8191, I = (1 << n) - 1, q = new $e(32768), _ = new $e(I + 1), M = Math.ceil(n / 3), X = 2 * M, ot = function(zt) {
      return (i2[zt] ^ i2[zt + 1] << M ^ i2[zt + 2] << X) & I;
    }, ut = new sa(25e3), wt = new $e(288), tt = new $e(32), R = 0, gt = 0, b = 0, dt = 0, F = 0, P = 0; b < l; ++b) {
      var z = ot(b), D = b & 32767, at = _[z];
      if (q[D] = at, _[z] = D, F <= b) {
        var nt = l - b;
        if ((R > 7e3 || dt > 24576) && nt > 423) {
          g = ac(i2, f, 0, ut, wt, tt, gt, dt, P, b - P, g), dt = R = gt = 0, P = b;
          for (var lt = 0; lt < 286; ++lt)
            wt[lt] = 0;
          for (var lt = 0; lt < 30; ++lt)
            tt[lt] = 0;
        }
        var Q = 2, ft = 0, ht = O, kt = D - at & 32767;
        if (nt > 2 && z == ot(b - kt))
          for (var L = Math.min(p, nt) - 1, j = Math.min(32767, b), B = Math.min(258, nt); kt <= j && --ht && D != at; ) {
            if (i2[b + Q] == i2[b + Q - kt]) {
              for (var W = 0; W < B && i2[b + W] == i2[b + W - kt]; ++W)
                ;
              if (W > Q) {
                if (Q = W, ft = kt, W > L)
                  break;
                for (var Y = Math.min(kt, W - 2), $ = 0, lt = 0; lt < Y; ++lt) {
                  var et = b - kt + lt + 32768 & 32767, rt = q[et], At = et - rt + 32768 & 32767;
                  At > $ && ($ = At, at = et);
                }
              }
            }
            D = at, at = q[D], kt += D - at + 32768 & 32767;
          }
        if (ft) {
          ut[dt++] = 268435456 | ls[Q] << 18 | rc[ft];
          var Nt = ls[Q] & 31, Ct = rc[ft] & 31;
          gt += oo[Nt] + so[Ct], ++wt[257 + Nt], ++tt[Ct], F = b + Q, ++R;
        } else
          ut[dt++] = i2[b], ++wt[i2[b]];
      }
    }
    g = ac(i2, f, o, ut, wt, tt, gt, dt, P, b - P, g);
  }
  return Pc(h, 0, a + Ls(g) + c);
};
var Cu = function() {
  var i2 = 1, e = 0;
  return {
    p: function(n) {
      for (var a = i2, c = e, o = n.length, l = 0; l != o; ) {
        for (var h = Math.min(l + 5552, o); l < h; ++l)
          a += n[l], c += a;
        a %= 65521, c %= 65521;
      }
      i2 = a, e = c;
    },
    d: function() {
      return (i2 >>> 8 << 16 | (e & 255) << 8 | e >>> 8) + ((i2 & 255) << 23) * 2;
    }
  };
};
var ju = function(i2, e, n, a, c) {
  return Iu(i2, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(i2.length))) * 1.5) : 12 + e.mem, n, a, !c);
};
var Ou = function(i2, e, n) {
  for (; n; ++e)
    i2[e] = n, n >>>= 8;
};
var Mu = function(i2, e) {
  var n = e.level, a = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
  i2[0] = 120, i2[1] = a << 6 | (a ? 32 - 2 * a : 1);
};
var Bu = function(i2) {
  if ((i2[0] & 15) != 8 || i2[0] >>> 4 > 7 || (i2[0] << 8 | i2[1]) % 31)
    throw "invalid zlib data";
  if (i2[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function ps(i2, e) {
  e === void 0 && (e = {});
  var n = Cu();
  n.p(i2);
  var a = ju(i2, e, 2, 4);
  return Mu(a, e), Ou(a, a.length - 4, n.d()), a;
}
function Eu(i2, e) {
  return ku((Bu(i2), i2.subarray(2, -4)), e);
}
var Ut = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function rs() {
  Ut.console && typeof Ut.console.log == "function" && Ut.console.log.apply(Ut.console, arguments);
}
var ve = { log: rs, warn: function(i2) {
  Ut.console && (typeof Ut.console.warn == "function" ? Ut.console.warn.apply(Ut.console, arguments) : rs.call(null, arguments));
}, error: function(i2) {
  Ut.console && (typeof Ut.console.error == "function" ? Ut.console.error.apply(Ut.console, arguments) : rs(i2));
} };
function is(i2, e, n) {
  var a = new XMLHttpRequest();
  a.open("GET", i2), a.responseType = "blob", a.onload = function() {
    Ur(a.response, e, n);
  }, a.onerror = function() {
    ve.error("could not download file");
  }, a.send();
}
function oc(i2) {
  var e = new XMLHttpRequest();
  e.open("HEAD", i2, false);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Ka(i2) {
  try {
    i2.dispatchEvent(new MouseEvent("click"));
  } catch {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), i2.dispatchEvent(e);
  }
}
var oa;
var gs;
var Ur = Ut.saveAs || ((typeof window > "u" ? "undefined" : fe(window)) !== "object" || window !== Ut ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(i2, e, n) {
  var a = Ut.URL || Ut.webkitURL, c = document.createElement("a");
  e = e || i2.name || "download", c.download = e, c.rel = "noopener", typeof i2 == "string" ? (c.href = i2, c.origin !== location.origin ? oc(c.href) ? is(i2, e, n) : Ka(c, c.target = "_blank") : Ka(c)) : (c.href = a.createObjectURL(i2), setTimeout(function() {
    a.revokeObjectURL(c.href);
  }, 4e4), setTimeout(function() {
    Ka(c);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(i2, e, n) {
  if (e = e || i2.name || "download", typeof i2 == "string") if (oc(i2)) is(i2, e, n);
  else {
    var a = document.createElement("a");
    a.href = i2, a.target = "_blank", setTimeout(function() {
      Ka(a);
    });
  }
  else navigator.msSaveOrOpenBlob(function(c, o) {
    return o === void 0 ? o = { autoBom: false } : fe(o) !== "object" && (ve.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type) ? new Blob(["\uFEFF", c], { type: c.type }) : c;
  }(i2, n), e);
} : function(i2, e, n, a) {
  if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), typeof i2 == "string") return is(i2, e, n);
  var c = i2.type === "application/octet-stream", o = /constructor/i.test(Ut.HTMLElement) || Ut.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((l || c && o) && (typeof FileReader > "u" ? "undefined" : fe(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var b = h.result;
      b = l ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = b : location = b, a = null;
    }, h.readAsDataURL(i2);
  } else {
    var f = Ut.URL || Ut.webkitURL, g = f.createObjectURL(i2);
    a ? a.location = g : location.href = g, a = null, setTimeout(function() {
      f.revokeObjectURL(g);
    }, 4e4);
  }
});
function kc(i2) {
  var e;
  i2 = i2 || "", this.ok = false, i2.charAt(0) == "#" && (i2 = i2.substr(1, 6)), i2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[i2 = (i2 = i2.replace(/ /g, "")).toLowerCase()] || i2;
  for (var n = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], a = 0; a < n.length; a++) {
    var c = n[a].re, o = n[a].process, l = c.exec(i2);
    l && (e = o(l), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = true);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var h = this.r.toString(16), f = this.g.toString(16), g = this.b.toString(16);
    return h.length == 1 && (h = "0" + h), f.length == 1 && (f = "0" + f), g.length == 1 && (g = "0" + g), "#" + h + f + g;
  };
}
function as(i2, e) {
  var n = i2[0], a = i2[1], c = i2[2], o = i2[3];
  n = Je(n, a, c, o, e[0], 7, -680876936), o = Je(o, n, a, c, e[1], 12, -389564586), c = Je(c, o, n, a, e[2], 17, 606105819), a = Je(a, c, o, n, e[3], 22, -1044525330), n = Je(n, a, c, o, e[4], 7, -176418897), o = Je(o, n, a, c, e[5], 12, 1200080426), c = Je(c, o, n, a, e[6], 17, -1473231341), a = Je(a, c, o, n, e[7], 22, -45705983), n = Je(n, a, c, o, e[8], 7, 1770035416), o = Je(o, n, a, c, e[9], 12, -1958414417), c = Je(c, o, n, a, e[10], 17, -42063), a = Je(a, c, o, n, e[11], 22, -1990404162), n = Je(n, a, c, o, e[12], 7, 1804603682), o = Je(o, n, a, c, e[13], 12, -40341101), c = Je(c, o, n, a, e[14], 17, -1502002290), n = Xe(n, a = Je(a, c, o, n, e[15], 22, 1236535329), c, o, e[1], 5, -165796510), o = Xe(o, n, a, c, e[6], 9, -1069501632), c = Xe(c, o, n, a, e[11], 14, 643717713), a = Xe(a, c, o, n, e[0], 20, -373897302), n = Xe(n, a, c, o, e[5], 5, -701558691), o = Xe(o, n, a, c, e[10], 9, 38016083), c = Xe(c, o, n, a, e[15], 14, -660478335), a = Xe(a, c, o, n, e[4], 20, -405537848), n = Xe(n, a, c, o, e[9], 5, 568446438), o = Xe(o, n, a, c, e[14], 9, -1019803690), c = Xe(c, o, n, a, e[3], 14, -187363961), a = Xe(a, c, o, n, e[8], 20, 1163531501), n = Xe(n, a, c, o, e[13], 5, -1444681467), o = Xe(o, n, a, c, e[2], 9, -51403784), c = Xe(c, o, n, a, e[7], 14, 1735328473), n = Ke(n, a = Xe(a, c, o, n, e[12], 20, -1926607734), c, o, e[5], 4, -378558), o = Ke(o, n, a, c, e[8], 11, -2022574463), c = Ke(c, o, n, a, e[11], 16, 1839030562), a = Ke(a, c, o, n, e[14], 23, -35309556), n = Ke(n, a, c, o, e[1], 4, -1530992060), o = Ke(o, n, a, c, e[4], 11, 1272893353), c = Ke(c, o, n, a, e[7], 16, -155497632), a = Ke(a, c, o, n, e[10], 23, -1094730640), n = Ke(n, a, c, o, e[13], 4, 681279174), o = Ke(o, n, a, c, e[0], 11, -358537222), c = Ke(c, o, n, a, e[3], 16, -722521979), a = Ke(a, c, o, n, e[6], 23, 76029189), n = Ke(n, a, c, o, e[9], 4, -640364487), o = Ke(o, n, a, c, e[12], 11, -421815835), c = Ke(c, o, n, a, e[15], 16, 530742520), n = Ze(n, a = Ke(a, c, o, n, e[2], 23, -995338651), c, o, e[0], 6, -198630844), o = Ze(o, n, a, c, e[7], 10, 1126891415), c = Ze(c, o, n, a, e[14], 15, -1416354905), a = Ze(a, c, o, n, e[5], 21, -57434055), n = Ze(n, a, c, o, e[12], 6, 1700485571), o = Ze(o, n, a, c, e[3], 10, -1894986606), c = Ze(c, o, n, a, e[10], 15, -1051523), a = Ze(a, c, o, n, e[1], 21, -2054922799), n = Ze(n, a, c, o, e[8], 6, 1873313359), o = Ze(o, n, a, c, e[15], 10, -30611744), c = Ze(c, o, n, a, e[6], 15, -1560198380), a = Ze(a, c, o, n, e[13], 21, 1309151649), n = Ze(n, a, c, o, e[4], 6, -145523070), o = Ze(o, n, a, c, e[11], 10, -1120210379), c = Ze(c, o, n, a, e[2], 15, 718787259), a = Ze(a, c, o, n, e[9], 21, -343485551), i2[0] = Fr(n, i2[0]), i2[1] = Fr(a, i2[1]), i2[2] = Fr(c, i2[2]), i2[3] = Fr(o, i2[3]);
}
function co(i2, e, n, a, c, o) {
  return e = Fr(Fr(e, i2), Fr(a, o)), Fr(e << c | e >>> 32 - c, n);
}
function Je(i2, e, n, a, c, o, l) {
  return co(e & n | ~e & a, i2, e, c, o, l);
}
function Xe(i2, e, n, a, c, o, l) {
  return co(e & a | n & ~a, i2, e, c, o, l);
}
function Ke(i2, e, n, a, c, o, l) {
  return co(e ^ n ^ a, i2, e, c, o, l);
}
function Ze(i2, e, n, a, c, o, l) {
  return co(n ^ (e | ~a), i2, e, c, o, l);
}
function Fc(i2) {
  var e, n = i2.length, a = [1732584193, -271733879, -1732584194, 271733878];
  for (e = 64; e <= i2.length; e += 64) as(a, qu(i2.substring(e - 64, e)));
  i2 = i2.substring(e - 64);
  var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (e = 0; e < i2.length; e++) c[e >> 2] |= i2.charCodeAt(e) << (e % 4 << 3);
  if (c[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (as(a, c), e = 0; e < 16; e++) c[e] = 0;
  return c[14] = 8 * n, as(a, c), a;
}
function qu(i2) {
  var e, n = [];
  for (e = 0; e < 64; e += 4) n[e >> 2] = i2.charCodeAt(e) + (i2.charCodeAt(e + 1) << 8) + (i2.charCodeAt(e + 2) << 16) + (i2.charCodeAt(e + 3) << 24);
  return n;
}
oa = Ut.atob.bind(Ut), gs = Ut.btoa.bind(Ut);
var sc = "0123456789abcdef".split("");
function Du(i2) {
  for (var e = "", n = 0; n < 4; n++) e += sc[i2 >> 8 * n + 4 & 15] + sc[i2 >> 8 * n & 15];
  return e;
}
function Ru(i2) {
  return String.fromCharCode((255 & i2) >> 0, (65280 & i2) >> 8, (16711680 & i2) >> 16, (4278190080 & i2) >> 24);
}
function ms(i2) {
  return Fc(i2).map(Ru).join("");
}
var Tu = function(i2) {
  for (var e = 0; e < i2.length; e++) i2[e] = Du(i2[e]);
  return i2.join("");
}(Fc("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Fr(i2, e) {
  if (Tu) {
    var n = (65535 & i2) + (65535 & e);
    return (i2 >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  return i2 + e & 4294967295;
}
function vs(i2, e) {
  var n, a, c, o;
  if (i2 !== n) {
    for (var l = (c = i2, o = 1 + (256 / i2.length >> 0), new Array(o + 1).join(c)), h = [], f = 0; f < 256; f++) h[f] = f;
    var g = 0;
    for (f = 0; f < 256; f++) {
      var b = h[f];
      g = (g + b + l.charCodeAt(f)) % 256, h[f] = h[g], h[g] = b;
    }
    n = i2, a = h;
  } else h = a;
  var A = e.length, S = 0, p = 0, O = "";
  for (f = 0; f < A; f++) p = (p + (b = h[S = (S + 1) % 256])) % 256, h[S] = h[p], h[p] = b, l = h[(h[S] + h[p]) % 256], O += String.fromCharCode(e.charCodeAt(f) ^ l);
  return O;
}
var cc = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Ni(i2, e, n, a) {
  this.v = 1, this.r = 2;
  var c = 192;
  i2.forEach(function(h) {
    if (cc.perm !== void 0) throw new Error("Invalid permission: " + h);
    c += cc[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var o = (e + this.padding).substr(0, 32), l = (n + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(o, l), this.P = -(1 + (255 ^ c)), this.encryptionKey = ms(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), this.U = vs(this.encryptionKey, this.padding);
}
function Ai(i2) {
  if (/[^\u0000-\u00ff]/.test(i2)) throw new Error("Invalid PDF Name Object: " + i2 + ", Only accept ASCII characters.");
  for (var e = "", n = i2.length, a = 0; a < n; a++) {
    var c = i2.charCodeAt(a);
    c < 33 || c === 35 || c === 37 || c === 40 || c === 41 || c === 47 || c === 60 || c === 62 || c === 91 || c === 93 || c === 123 || c === 125 || c > 126 ? e += "#" + ("0" + c.toString(16)).slice(-2) : e += i2[a];
  }
  return e;
}
function uc(i2) {
  if (fe(i2) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var e = {};
  this.subscribe = function(n, a, c) {
    if (c = c || false, typeof n != "string" || typeof a != "function" || typeof c != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    e.hasOwnProperty(n) || (e[n] = {});
    var o = Math.random().toString(35);
    return e[n][o] = [a, !!c], o;
  }, this.unsubscribe = function(n) {
    for (var a in e) if (e[a][n]) return delete e[a][n], Object.keys(e[a]).length === 0 && delete e[a], true;
    return false;
  }, this.publish = function(n) {
    if (e.hasOwnProperty(n)) {
      var a = Array.prototype.slice.call(arguments, 1), c = [];
      for (var o in e[n]) {
        var l = e[n][o];
        try {
          l[0].apply(i2, a);
        } catch (h) {
          Ut.console && ve.error("jsPDF PubSub Error", h.message, h);
        }
        l[1] && c.push(o);
      }
      c.length && c.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return e;
  };
}
function io(i2) {
  if (!(this instanceof io)) return new io(i2);
  var e = "opacity,stroke-opacity".split(",");
  for (var n in i2) i2.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = i2[n]);
  this.id = "", this.objectNumber = -1;
}
function Ic(i2, e) {
  this.gState = i2, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function Hr(i2, e, n, a, c) {
  if (!(this instanceof Hr)) return new Hr(i2, e, n, a, c);
  this.type = i2 === "axial" ? 2 : 3, this.coords = e, this.colors = n, Ic.call(this, a, c);
}
function xi(i2, e, n, a, c) {
  if (!(this instanceof xi)) return new xi(i2, e, n, a, c);
  this.boundingBox = i2, this.xStep = e, this.yStep = n, this.stream = "", this.cloneIndex = 0, Ic.call(this, a, c);
}
function Ht(i2) {
  var e, n = typeof arguments[0] == "string" ? arguments[0] : "p", a = arguments[1], c = arguments[2], o = arguments[3], l = [], h = 1, f = 16, g = "S", b = null;
  fe(i2 = i2 || {}) === "object" && (n = i2.orientation, a = i2.unit || a, c = i2.format || c, o = i2.compress || i2.compressPdf || o, (b = i2.encryption || null) !== null && (b.userPassword = b.userPassword || "", b.ownerPassword = b.ownerPassword || "", b.userPermissions = b.userPermissions || []), h = typeof i2.userUnit == "number" ? Math.abs(i2.userUnit) : 1, i2.precision !== void 0 && (e = i2.precision), i2.floatPrecision !== void 0 && (f = i2.floatPrecision), g = i2.defaultPathOperation || "S"), l = i2.filters || (o === true ? ["FlateEncode"] : l), a = a || "mm", n = ("" + (n || "P")).toLowerCase();
  var A = i2.putOnlyUsedFonts || false, S = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = uc;
  var O = "1.3", I = p.__private__.getPdfVersion = function() {
    return O;
  };
  p.__private__.setPdfVersion = function(s) {
    O = s;
  };
  var q = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return q;
  };
  var _ = p.__private__.getPageFormat = function(s) {
    return q[s];
  };
  c = c || "a4";
  var M = { COMPAT: "compat", ADVANCED: "advanced" }, X = M.COMPAT;
  function ot() {
    this.saveGraphicsState(), E(new Tt(It, 0, 0, -It, 0, pr() * It).toString() + " cm"), this.setFontSize(this.getFontSize() / It), g = "n", X = M.ADVANCED;
  }
  function ut() {
    this.restoreGraphicsState(), g = "S", X = M.COMPAT;
  }
  var wt = p.__private__.combineFontStyleAndFontWeight = function(s, v) {
    if (s == "bold" && v == "normal" || s == "bold" && v == 400 || s == "normal" && v == "italic" || s == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return v && (s = v == 400 || v === "normal" ? s === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || s !== "normal" ? (v == 700 ? "bold" : v) + "" + s : "bold"), s;
  };
  p.advancedAPI = function(s) {
    var v = X === M.COMPAT;
    return v && ot.call(this), typeof s != "function" || (s(this), v && ut.call(this)), this;
  }, p.compatAPI = function(s) {
    var v = X === M.ADVANCED;
    return v && ut.call(this), typeof s != "function" || (s(this), v && ot.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return X === M.ADVANCED;
  };
  var tt, R = function(s) {
    if (X !== M.ADVANCED) throw new Error(s + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, gt = p.roundToPrecision = p.__private__.roundToPrecision = function(s, v) {
    var C = e || v;
    if (isNaN(s) || isNaN(C)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return s.toFixed(C).replace(/0+$/, "");
  };
  tt = p.hpf = p.__private__.hpf = typeof f == "number" ? function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(s, f);
  } : f === "smart" ? function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(s, s > -1 && s < 1 ? 16 : 5);
  } : function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(s, 16);
  };
  var dt = p.f2 = p.__private__.f2 = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.f2");
    return gt(s, 2);
  }, F = p.__private__.f3 = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.f3");
    return gt(s, 3);
  }, P = p.scale = p.__private__.scale = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.scale");
    return X === M.COMPAT ? s * It : X === M.ADVANCED ? s : void 0;
  }, z = function(s) {
    return X === M.COMPAT ? pr() - s : X === M.ADVANCED ? s : void 0;
  }, D = function(s) {
    return P(z(s));
  };
  p.__private__.setPrecision = p.setPrecision = function(s) {
    typeof parseInt(s, 10) == "number" && (e = parseInt(s, 10));
  };
  var at, nt = "00000000000000000000000000000000", lt = p.__private__.getFileId = function() {
    return nt;
  }, Q = p.__private__.setFileId = function(s) {
    return nt = s !== void 0 && /^[a-fA-F0-9]{32}$/.test(s) ? s.toUpperCase() : nt.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), b !== null && (Ge = new Ni(b.userPermissions, b.userPassword, b.ownerPassword, nt)), nt;
  };
  p.setFileId = function(s) {
    return Q(s), this;
  }, p.getFileId = function() {
    return lt();
  };
  var ft = p.__private__.convertDateToPDFDate = function(s) {
    var v = s.getTimezoneOffset(), C = v < 0 ? "+" : "-", T = Math.floor(Math.abs(v / 60)), J = Math.abs(v % 60), st = [C, B(T), "'", B(J), "'"].join("");
    return ["D:", s.getFullYear(), B(s.getMonth() + 1), B(s.getDate()), B(s.getHours()), B(s.getMinutes()), B(s.getSeconds()), st].join("");
  }, ht = p.__private__.convertPDFDateToDate = function(s) {
    var v = parseInt(s.substr(2, 4), 10), C = parseInt(s.substr(6, 2), 10) - 1, T = parseInt(s.substr(8, 2), 10), J = parseInt(s.substr(10, 2), 10), st = parseInt(s.substr(12, 2), 10), yt = parseInt(s.substr(14, 2), 10);
    return new Date(v, C, T, J, st, yt, 0);
  }, kt = p.__private__.setCreationDate = function(s) {
    var v;
    if (s === void 0 && (s = /* @__PURE__ */ new Date()), s instanceof Date) v = ft(s);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(s)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      v = s;
    }
    return at = v;
  }, L = p.__private__.getCreationDate = function(s) {
    var v = at;
    return s === "jsDate" && (v = ht(at)), v;
  };
  p.setCreationDate = function(s) {
    return kt(s), this;
  }, p.getCreationDate = function(s) {
    return L(s);
  };
  var j, B = p.__private__.padd2 = function(s) {
    return ("0" + parseInt(s)).slice(-2);
  }, W = p.__private__.padd2Hex = function(s) {
    return ("00" + (s = s.toString())).substr(s.length);
  }, Y = 0, $ = [], et = [], rt = 0, At = [], Nt = [], Ct = false, Mt = et, zt = function() {
    Y = 0, rt = 0, et = [], $ = [], At = [], $n = Oe(), An = Oe();
  };
  p.__private__.setCustomOutputDestination = function(s) {
    Ct = true, Mt = s;
  };
  var ct = function(s) {
    Ct || (Mt = s);
  };
  p.__private__.resetCustomOutputDestination = function() {
    Ct = false, Mt = et;
  };
  var E = p.__private__.out = function(s) {
    return s = s.toString(), rt += s.length + 1, Mt.push(s), Mt;
  }, Xt = p.__private__.write = function(s) {
    return E(arguments.length === 1 ? s.toString() : Array.prototype.join.call(arguments, " "));
  }, Et = p.__private__.getArrayBuffer = function(s) {
    for (var v = s.length, C = new ArrayBuffer(v), T = new Uint8Array(C); v--; ) T[v] = s.charCodeAt(v);
    return C;
  }, Lt = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return Lt;
  };
  var xt = i2.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(s) {
    return xt = X === M.ADVANCED ? s / It : s, this;
  };
  var Ft, Pt = p.__private__.getFontSize = p.getFontSize = function() {
    return X === M.COMPAT ? xt : xt * It;
  }, qt = i2.R2L || false;
  p.__private__.setR2L = p.setR2L = function(s) {
    return qt = s, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return qt;
  };
  var Gt, Qt = p.__private__.setZoomMode = function(s) {
    var v = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(s)) Ft = s;
    else if (isNaN(s)) {
      if (v.indexOf(s) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + s + '" is not recognized.');
      Ft = s;
    } else Ft = parseInt(s, 10);
  };
  p.__private__.getZoomMode = function() {
    return Ft;
  };
  var te, ie = p.__private__.setPageMode = function(s) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(s) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + s + '" is not recognized.');
    Gt = s;
  };
  p.__private__.getPageMode = function() {
    return Gt;
  };
  var de = p.__private__.setLayoutMode = function(s) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(s) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + s + '" is not recognized.');
    te = s;
  };
  p.__private__.getLayoutMode = function() {
    return te;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(s, v, C) {
    return Qt(s), de(v), ie(C), this;
  };
  var Wt = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(s) {
    if (Object.keys(Wt).indexOf(s) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return Wt[s];
  }, p.__private__.getDocumentProperties = function() {
    return Wt;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(s) {
    for (var v in Wt) Wt.hasOwnProperty(v) && s[v] && (Wt[v] = s[v]);
    return this;
  }, p.__private__.setDocumentProperty = function(s, v) {
    if (Object.keys(Wt).indexOf(s) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return Wt[s] = v;
  };
  var ee, It, Ve, oe, yn, ge = {}, Le = {}, Rn = [], ce = {}, jr = {}, Ae = {}, Ln = {}, Qn = null, xe = 0, Yt = [], ue = new uc(p), Or = i2.hotfixes || [], He = {}, Tn = {}, zn = [], Tt = function s(v, C, T, J, st, yt) {
    if (!(this instanceof s)) return new s(v, C, T, J, st, yt);
    isNaN(v) && (v = 1), isNaN(C) && (C = 0), isNaN(T) && (T = 0), isNaN(J) && (J = 1), isNaN(st) && (st = 0), isNaN(yt) && (yt = 0), this._matrix = [v, C, T, J, st, yt];
  };
  Object.defineProperty(Tt.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(s) {
    this._matrix[0] = s;
  } }), Object.defineProperty(Tt.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(s) {
    this._matrix[1] = s;
  } }), Object.defineProperty(Tt.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(s) {
    this._matrix[2] = s;
  } }), Object.defineProperty(Tt.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(s) {
    this._matrix[3] = s;
  } }), Object.defineProperty(Tt.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(s) {
    this._matrix[4] = s;
  } }), Object.defineProperty(Tt.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(s) {
    this._matrix[5] = s;
  } }), Object.defineProperty(Tt.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(s) {
    this._matrix[0] = s;
  } }), Object.defineProperty(Tt.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(s) {
    this._matrix[1] = s;
  } }), Object.defineProperty(Tt.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(s) {
    this._matrix[2] = s;
  } }), Object.defineProperty(Tt.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(s) {
    this._matrix[3] = s;
  } }), Object.defineProperty(Tt.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(s) {
    this._matrix[4] = s;
  } }), Object.defineProperty(Tt.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(s) {
    this._matrix[5] = s;
  } }), Object.defineProperty(Tt.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Tt.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Tt.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Tt.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Tt.prototype.join = function(s) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(tt).join(s);
  }, Tt.prototype.multiply = function(s) {
    var v = s.sx * this.sx + s.shy * this.shx, C = s.sx * this.shy + s.shy * this.sy, T = s.shx * this.sx + s.sy * this.shx, J = s.shx * this.shy + s.sy * this.sy, st = s.tx * this.sx + s.ty * this.shx + this.tx, yt = s.tx * this.shy + s.ty * this.sy + this.ty;
    return new Tt(v, C, T, J, st, yt);
  }, Tt.prototype.decompose = function() {
    var s = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty, yt = Math.sqrt(s * s + v * v), jt = (s /= yt) * C + (v /= yt) * T;
    C -= s * jt, T -= v * jt;
    var Dt = Math.sqrt(C * C + T * T);
    return jt /= Dt, s * (T /= Dt) < v * (C /= Dt) && (s = -s, v = -v, jt = -jt, yt = -yt), { scale: new Tt(yt, 0, 0, Dt, 0, 0), translate: new Tt(1, 0, 0, 1, J, st), rotate: new Tt(s, v, -v, s, 0, 0), skew: new Tt(1, 0, jt, 1, 0, 0) };
  }, Tt.prototype.toString = function(s) {
    return this.join(" ");
  }, Tt.prototype.inversed = function() {
    var s = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty, yt = 1 / (s * T - v * C), jt = T * yt, Dt = -v * yt, Kt = -C * yt, $t = s * yt;
    return new Tt(jt, Dt, Kt, $t, -jt * J - Kt * st, -Dt * J - $t * st);
  }, Tt.prototype.applyToPoint = function(s) {
    var v = s.x * this.sx + s.y * this.shx + this.tx, C = s.x * this.shy + s.y * this.sy + this.ty;
    return new ai(v, C);
  }, Tt.prototype.applyToRectangle = function(s) {
    var v = this.applyToPoint(s), C = this.applyToPoint(new ai(s.x + s.w, s.y + s.h));
    return new Ri(v.x, v.y, C.x - v.x, C.y - v.y);
  }, Tt.prototype.clone = function() {
    var s = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty;
    return new Tt(s, v, C, T, J, st);
  }, p.Matrix = Tt;
  var Nn = p.matrixMult = function(s, v) {
    return v.multiply(s);
  }, Un = new Tt(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = Un;
  var tn = function(s, v) {
    if (!jr[s]) {
      var C = (v instanceof Hr ? "Sh" : "P") + (Object.keys(ce).length + 1).toString(10);
      v.id = C, jr[s] = C, ce[C] = v, ue.publish("addPattern", v);
    }
  };
  p.ShadingPattern = Hr, p.TilingPattern = xi, p.addShadingPattern = function(s, v) {
    return R("addShadingPattern()"), tn(s, v), this;
  }, p.beginTilingPattern = function(s) {
    R("beginTilingPattern()"), Pa(s.boundingBox[0], s.boundingBox[1], s.boundingBox[2] - s.boundingBox[0], s.boundingBox[3] - s.boundingBox[1], s.matrix);
  }, p.endTilingPattern = function(s, v) {
    R("endTilingPattern()"), v.stream = Nt[j].join(`
`), tn(s, v), ue.publish("endTilingPattern", v), zn.pop().restore();
  };
  var qe = p.__private__.newObject = function() {
    var s = Oe();
    return un(s, true), s;
  }, Oe = p.__private__.newObjectDeferred = function() {
    return Y++, $[Y] = function() {
      return rt;
    }, Y;
  }, un = function(s, v) {
    return v = typeof v == "boolean" && v, $[s] = rt, v && E(s + " 0 obj"), s;
  }, Gr = p.__private__.newAdditionalObject = function() {
    var s = { objId: Oe(), content: "" };
    return At.push(s), s;
  }, $n = Oe(), An = Oe(), xn = p.__private__.decodeColorString = function(s) {
    var v = s.split(" ");
    if (v.length !== 2 || v[1] !== "g" && v[1] !== "G")
      v.length === 5 && (v[4] === "k" || v[4] === "K") && (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), "r"]);
    else {
      var C = parseFloat(v[0]);
      v = [C, C, C, "r"];
    }
    for (var T = "#", J = 0; J < 3; J++) T += ("0" + Math.floor(255 * parseFloat(v[J])).toString(16)).slice(-2);
    return T;
  }, Sn = p.__private__.encodeColorString = function(s) {
    var v;
    typeof s == "string" && (s = { ch1: s });
    var C = s.ch1, T = s.ch2, J = s.ch3, st = s.ch4, yt = s.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof C == "string" && C.charAt(0) !== "#") {
      var jt = new kc(C);
      if (jt.ok) C = jt.toHex();
      else if (!/^\d*\.?\d*$/.test(C)) throw new Error('Invalid color "' + C + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof C == "string" && /^#[0-9A-Fa-f]{3}$/.test(C) && (C = "#" + C[1] + C[1] + C[2] + C[2] + C[3] + C[3]), typeof C == "string" && /^#[0-9A-Fa-f]{6}$/.test(C)) {
      var Dt = parseInt(C.substr(1), 16);
      C = Dt >> 16 & 255, T = Dt >> 8 & 255, J = 255 & Dt;
    }
    if (T === void 0 || st === void 0 && C === T && T === J) if (typeof C == "string") v = C + " " + yt[0];
    else switch (s.precision) {
      case 2:
        v = dt(C / 255) + " " + yt[0];
        break;
      case 3:
      default:
        v = F(C / 255) + " " + yt[0];
    }
    else if (st === void 0 || fe(st) === "object") {
      if (st && !isNaN(st.a) && st.a === 0) return v = ["1.", "1.", "1.", yt[1]].join(" ");
      if (typeof C == "string") v = [C, T, J, yt[1]].join(" ");
      else switch (s.precision) {
        case 2:
          v = [dt(C / 255), dt(T / 255), dt(J / 255), yt[1]].join(" ");
          break;
        default:
        case 3:
          v = [F(C / 255), F(T / 255), F(J / 255), yt[1]].join(" ");
      }
    } else if (typeof C == "string") v = [C, T, J, st, yt[2]].join(" ");
    else switch (s.precision) {
      case 2:
        v = [dt(C), dt(T), dt(J), dt(st), yt[2]].join(" ");
        break;
      case 3:
      default:
        v = [F(C), F(T), F(J), F(st), yt[2]].join(" ");
    }
    return v;
  }, Hn = p.__private__.getFilters = function() {
    return l;
  }, pn = p.__private__.putStream = function(s) {
    var v = (s = s || {}).data || "", C = s.filters || Hn(), T = s.alreadyAppliedFilters || [], J = s.addLength1 || false, st = v.length, yt = s.objectId, jt = function(Ye) {
      return Ye;
    };
    if (b !== null && yt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    b !== null && (jt = Ge.encryptor(yt, 0));
    var Dt = {};
    C === true && (C = ["FlateEncode"]);
    var Kt = s.additionalKeyValues || [], $t = (Dt = Ht.API.processDataByFilters !== void 0 ? Ht.API.processDataByFilters(v, C) : { data: v, reverseChain: [] }).reverseChain + (Array.isArray(T) ? T.join(" ") : T.toString());
    if (Dt.data.length !== 0 && (Kt.push({ key: "Length", value: Dt.data.length }), J === true && Kt.push({ key: "Length1", value: st })), $t.length != 0) if ($t.split("/").length - 1 == 1) Kt.push({ key: "Filter", value: $t });
    else {
      Kt.push({ key: "Filter", value: "[" + $t + "]" });
      for (var re = 0; re < Kt.length; re += 1) if (Kt[re].key === "DecodeParms") {
        for (var Ne = [], Se = 0; Se < Dt.reverseChain.split("/").length - 1; Se += 1) Ne.push("null");
        Ne.push(Kt[re].value), Kt[re].value = "[" + Ne.join(" ") + "]";
      }
    }
    E("<<");
    for (var Me = 0; Me < Kt.length; Me++) E("/" + Kt[Me].key + " " + Kt[Me].value);
    E(">>"), Dt.data.length !== 0 && (E("stream"), E(jt(Dt.data)), E("endstream"));
  }, Wn = p.__private__.putPage = function(s) {
    var v = s.number, C = s.data, T = s.objId, J = s.contentsObjId;
    un(T, true), E("<</Type /Page"), E("/Parent " + s.rootDictionaryObjId + " 0 R"), E("/Resources " + s.resourceDictionaryObjId + " 0 R"), E("/MediaBox [" + parseFloat(tt(s.mediaBox.bottomLeftX)) + " " + parseFloat(tt(s.mediaBox.bottomLeftY)) + " " + tt(s.mediaBox.topRightX) + " " + tt(s.mediaBox.topRightY) + "]"), s.cropBox !== null && E("/CropBox [" + tt(s.cropBox.bottomLeftX) + " " + tt(s.cropBox.bottomLeftY) + " " + tt(s.cropBox.topRightX) + " " + tt(s.cropBox.topRightY) + "]"), s.bleedBox !== null && E("/BleedBox [" + tt(s.bleedBox.bottomLeftX) + " " + tt(s.bleedBox.bottomLeftY) + " " + tt(s.bleedBox.topRightX) + " " + tt(s.bleedBox.topRightY) + "]"), s.trimBox !== null && E("/TrimBox [" + tt(s.trimBox.bottomLeftX) + " " + tt(s.trimBox.bottomLeftY) + " " + tt(s.trimBox.topRightX) + " " + tt(s.trimBox.topRightY) + "]"), s.artBox !== null && E("/ArtBox [" + tt(s.artBox.bottomLeftX) + " " + tt(s.artBox.bottomLeftY) + " " + tt(s.artBox.topRightX) + " " + tt(s.artBox.topRightY) + "]"), typeof s.userUnit == "number" && s.userUnit !== 1 && E("/UserUnit " + s.userUnit), ue.publish("putPage", { objId: T, pageContext: Yt[v], pageNumber: v, page: C }), E("/Contents " + J + " 0 R"), E(">>"), E("endobj");
    var st = C.join(`
`);
    return X === M.ADVANCED && (st += `
Q`), un(J, true), pn({ data: st, filters: Hn(), objectId: J }), E("endobj"), T;
  }, Mr = p.__private__.putPages = function() {
    var s, v, C = [];
    for (s = 1; s <= xe; s++) Yt[s].objId = Oe(), Yt[s].contentsObjId = Oe();
    for (s = 1; s <= xe; s++) C.push(Wn({ number: s, data: Nt[s], objId: Yt[s].objId, contentsObjId: Yt[s].contentsObjId, mediaBox: Yt[s].mediaBox, cropBox: Yt[s].cropBox, bleedBox: Yt[s].bleedBox, trimBox: Yt[s].trimBox, artBox: Yt[s].artBox, userUnit: Yt[s].userUnit, rootDictionaryObjId: $n, resourceDictionaryObjId: An }));
    un($n, true), E("<</Type /Pages");
    var T = "/Kids [";
    for (v = 0; v < xe; v++) T += C[v] + " 0 R ";
    E(T + "]"), E("/Count " + xe), E(">>"), E("endobj"), ue.publish("postPutPages");
  }, Yr = function(s) {
    ue.publish("putFont", { font: s, out: E, newObject: qe, putStream: pn }), s.isAlreadyPutted !== true && (s.objectNumber = qe(), E("<<"), E("/Type /Font"), E("/BaseFont /" + Ai(s.postScriptName)), E("/Subtype /Type1"), typeof s.encoding == "string" && E("/Encoding /" + s.encoding), E("/FirstChar 32"), E("/LastChar 255"), E(">>"), E("endobj"));
  }, Jr = function() {
    for (var s in ge) ge.hasOwnProperty(s) && (A === false || A === true && S.hasOwnProperty(s)) && Yr(ge[s]);
  }, Xr = function(s) {
    s.objectNumber = qe();
    var v = [];
    v.push({ key: "Type", value: "/XObject" }), v.push({ key: "Subtype", value: "/Form" }), v.push({ key: "BBox", value: "[" + [tt(s.x), tt(s.y), tt(s.x + s.width), tt(s.y + s.height)].join(" ") + "]" }), v.push({ key: "Matrix", value: "[" + s.matrix.toString() + "]" });
    var C = s.pages[1].join(`
`);
    pn({ data: C, additionalKeyValues: v, objectId: s.objectNumber }), E("endobj");
  }, Kr = function() {
    for (var s in He) He.hasOwnProperty(s) && Xr(He[s]);
  }, ua = function(s, v) {
    var C, T = [], J = 1 / (v - 1);
    for (C = 0; C < 1; C += J) T.push(C);
    if (T.push(1), s[0].offset != 0) {
      var st = { offset: 0, color: s[0].color };
      s.unshift(st);
    }
    if (s[s.length - 1].offset != 1) {
      var yt = { offset: 1, color: s[s.length - 1].color };
      s.push(yt);
    }
    for (var jt = "", Dt = 0, Kt = 0; Kt < T.length; Kt++) {
      for (C = T[Kt]; C > s[Dt + 1].offset; ) Dt++;
      var $t = s[Dt].offset, re = (C - $t) / (s[Dt + 1].offset - $t), Ne = s[Dt].color, Se = s[Dt + 1].color;
      jt += W(Math.round((1 - re) * Ne[0] + re * Se[0]).toString(16)) + W(Math.round((1 - re) * Ne[1] + re * Se[1]).toString(16)) + W(Math.round((1 - re) * Ne[2] + re * Se[2]).toString(16));
    }
    return jt.trim();
  }, uo = function(s, v) {
    v || (v = 21);
    var C = qe(), T = ua(s.colors, v), J = [];
    J.push({ key: "FunctionType", value: "0" }), J.push({ key: "Domain", value: "[0.0 1.0]" }), J.push({ key: "Size", value: "[" + v + "]" }), J.push({ key: "BitsPerSample", value: "8" }), J.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), J.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), pn({ data: T, additionalKeyValues: J, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: C }), E("endobj"), s.objectNumber = qe(), E("<< /ShadingType " + s.type), E("/ColorSpace /DeviceRGB");
    var st = "/Coords [" + tt(parseFloat(s.coords[0])) + " " + tt(parseFloat(s.coords[1])) + " ";
    s.type === 2 ? st += tt(parseFloat(s.coords[2])) + " " + tt(parseFloat(s.coords[3])) : st += tt(parseFloat(s.coords[2])) + " " + tt(parseFloat(s.coords[3])) + " " + tt(parseFloat(s.coords[4])) + " " + tt(parseFloat(s.coords[5])), E(st += "]"), s.matrix && E("/Matrix [" + s.matrix.toString() + "]"), E("/Function " + C + " 0 R"), E("/Extend [true true]"), E(">>"), E("endobj");
  }, lo = function(s, v) {
    var C = Oe(), T = qe();
    v.push({ resourcesOid: C, objectOid: T }), s.objectNumber = T;
    var J = [];
    J.push({ key: "Type", value: "/Pattern" }), J.push({ key: "PatternType", value: "1" }), J.push({ key: "PaintType", value: "1" }), J.push({ key: "TilingType", value: "1" }), J.push({ key: "BBox", value: "[" + s.boundingBox.map(tt).join(" ") + "]" }), J.push({ key: "XStep", value: tt(s.xStep) }), J.push({ key: "YStep", value: tt(s.yStep) }), J.push({ key: "Resources", value: C + " 0 R" }), s.matrix && J.push({ key: "Matrix", value: "[" + s.matrix.toString() + "]" }), pn({ data: s.stream, additionalKeyValues: J, objectId: s.objectNumber }), E("endobj");
  }, Zr = function(s) {
    var v;
    for (v in ce) ce.hasOwnProperty(v) && (ce[v] instanceof Hr ? uo(ce[v]) : ce[v] instanceof xi && lo(ce[v], s));
  }, la = function(s) {
    for (var v in s.objectNumber = qe(), E("<<"), s) switch (v) {
      case "opacity":
        E("/ca " + dt(s[v]));
        break;
      case "stroke-opacity":
        E("/CA " + dt(s[v]));
    }
    E(">>"), E("endobj");
  }, ho = function() {
    var s;
    for (s in Ae) Ae.hasOwnProperty(s) && la(Ae[s]);
  }, Fi = function() {
    for (var s in E("/XObject <<"), He) He.hasOwnProperty(s) && He[s].objectNumber >= 0 && E("/" + s + " " + He[s].objectNumber + " 0 R");
    ue.publish("putXobjectDict"), E(">>");
  }, fo = function() {
    Ge.oid = qe(), E("<<"), E("/Filter /Standard"), E("/V " + Ge.v), E("/R " + Ge.r), E("/U <" + Ge.toHexString(Ge.U) + ">"), E("/O <" + Ge.toHexString(Ge.O) + ">"), E("/P " + Ge.P), E(">>"), E("endobj");
  }, ha = function() {
    for (var s in E("/Font <<"), ge) ge.hasOwnProperty(s) && (A === false || A === true && S.hasOwnProperty(s)) && E("/" + s + " " + ge[s].objectNumber + " 0 R");
    E(">>");
  }, po = function() {
    if (Object.keys(ce).length > 0) {
      for (var s in E("/Shading <<"), ce) ce.hasOwnProperty(s) && ce[s] instanceof Hr && ce[s].objectNumber >= 0 && E("/" + s + " " + ce[s].objectNumber + " 0 R");
      ue.publish("putShadingPatternDict"), E(">>");
    }
  }, Qr = function(s) {
    if (Object.keys(ce).length > 0) {
      for (var v in E("/Pattern <<"), ce) ce.hasOwnProperty(v) && ce[v] instanceof p.TilingPattern && ce[v].objectNumber >= 0 && ce[v].objectNumber < s && E("/" + v + " " + ce[v].objectNumber + " 0 R");
      ue.publish("putTilingPatternDict"), E(">>");
    }
  }, go = function() {
    if (Object.keys(Ae).length > 0) {
      var s;
      for (s in E("/ExtGState <<"), Ae) Ae.hasOwnProperty(s) && Ae[s].objectNumber >= 0 && E("/" + s + " " + Ae[s].objectNumber + " 0 R");
      ue.publish("putGStateDict"), E(">>");
    }
  }, ke = function(s) {
    un(s.resourcesOid, true), E("<<"), E("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), ha(), po(), Qr(s.objectOid), go(), Fi(), E(">>"), E("endobj");
  }, fa = function() {
    var s = [];
    Jr(), ho(), Kr(), Zr(s), ue.publish("putResources"), s.forEach(ke), ke({ resourcesOid: An, objectOid: Number.MAX_SAFE_INTEGER }), ue.publish("postPutResources");
  }, da = function() {
    ue.publish("putAdditionalObjects");
    for (var s = 0; s < At.length; s++) {
      var v = At[s];
      un(v.objId, true), E(v.content), E("endobj");
    }
    ue.publish("postPutAdditionalObjects");
  }, pa = function(s) {
    Le[s.fontName] = Le[s.fontName] || {}, Le[s.fontName][s.fontStyle] = s.id;
  }, Ii = function(s, v, C, T, J) {
    var st = { id: "F" + (Object.keys(ge).length + 1).toString(10), postScriptName: s, fontName: v, fontStyle: C, encoding: T, isStandardFont: J || false, metadata: {} };
    return ue.publish("addFont", { font: st, instance: this }), ge[st.id] = st, pa(st), st.id;
  }, mo = function(s) {
    for (var v = 0, C = Lt.length; v < C; v++) {
      var T = Ii.call(this, s[v][0], s[v][1], s[v][2], Lt[v][3], true);
      A === false && (S[T] = true);
      var J = s[v][0].split("-");
      pa({ id: T, fontName: J[0], fontStyle: J[1] || "" });
    }
    ue.publish("addFonts", { fonts: ge, dictionary: Le });
  }, _n = function(s) {
    return s.foo = function() {
      try {
        return s.apply(this, arguments);
      } catch (T) {
        var v = T.stack || "";
        ~v.indexOf(" at ") && (v = v.split(" at ")[1]);
        var C = "Error in function " + v.split(`
`)[0].split("<")[0] + ": " + T.message;
        if (!Ut.console) throw new Error(C);
        Ut.console.error(C, T), Ut.alert && alert(C);
      }
    }, s.foo.bar = s, s.foo;
  }, $r = function(s, v) {
    var C, T, J, st, yt, jt, Dt, Kt, $t;
    if (J = (v = v || {}).sourceEncoding || "Unicode", yt = v.outputEncoding, (v.autoencode || yt) && ge[ee].metadata && ge[ee].metadata[J] && ge[ee].metadata[J].encoding && (st = ge[ee].metadata[J].encoding, !yt && ge[ee].encoding && (yt = ge[ee].encoding), !yt && st.codePages && (yt = st.codePages[0]), typeof yt == "string" && (yt = st[yt]), yt)) {
      for (Dt = false, jt = [], C = 0, T = s.length; C < T; C++) (Kt = yt[s.charCodeAt(C)]) ? jt.push(String.fromCharCode(Kt)) : jt.push(s[C]), jt[C].charCodeAt(0) >> 8 && (Dt = true);
      s = jt.join("");
    }
    for (C = s.length; Dt === void 0 && C !== 0; ) s.charCodeAt(C - 1) >> 8 && (Dt = true), C--;
    if (!Dt) return s;
    for (jt = v.noBOM ? [] : [254, 255], C = 0, T = s.length; C < T; C++) {
      if (($t = (Kt = s.charCodeAt(C)) >> 8) >> 8) throw new Error("Character at position " + C + " of string '" + s + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      jt.push($t), jt.push(Kt - ($t << 8));
    }
    return String.fromCharCode.apply(void 0, jt);
  }, en = p.__private__.pdfEscape = p.pdfEscape = function(s, v) {
    return $r(s, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Ci = p.__private__.beginPage = function(s) {
    Nt[++xe] = [], Yt[xe] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(s[0]), topRightY: Number(s[1]) } }, ma(xe), ct(Nt[j]);
  }, ga = function(s, v) {
    var C, T, J;
    switch (n = v || n, typeof s == "string" && (C = _(s.toLowerCase()), Array.isArray(C) && (T = C[0], J = C[1])), Array.isArray(s) && (T = s[0] * It, J = s[1] * It), isNaN(T) && (T = c[0], J = c[1]), (T > 14400 || J > 14400) && (ve.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), T = Math.min(14400, T), J = Math.min(14400, J)), c = [T, J], n.substr(0, 1)) {
      case "l":
        J > T && (c = [J, T]);
        break;
      case "p":
        T > J && (c = [J, T]);
    }
    Ci(c), Na(Bi), E(Pn), qi !== 0 && E(qi + " J"), Di !== 0 && E(Di + " j"), ue.publish("addPage", { pageNumber: xe });
  }, vo = function(s) {
    s > 0 && s <= xe && (Nt.splice(s, 1), Yt.splice(s, 1), xe--, j > xe && (j = xe), this.setPage(j));
  }, ma = function(s) {
    s > 0 && s <= xe && (j = s);
  }, bo = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return Nt.length - 1;
  }, va = function(s, v, C) {
    var T, J = void 0;
    return C = C || {}, s = s !== void 0 ? s : ge[ee].fontName, v = v !== void 0 ? v : ge[ee].fontStyle, T = s.toLowerCase(), Le[T] !== void 0 && Le[T][v] !== void 0 ? J = Le[T][v] : Le[s] !== void 0 && Le[s][v] !== void 0 ? J = Le[s][v] : C.disableWarning === false && ve.warn("Unable to look up font label for font '" + s + "', '" + v + "'. Refer to getFontList() for available fonts."), J || C.noFallback || (J = Le.times[v]) == null && (J = Le.times.normal), J;
  }, wo = p.__private__.putInfo = function() {
    var s = qe(), v = function(T) {
      return T;
    };
    for (var C in b !== null && (v = Ge.encryptor(s, 0)), E("<<"), E("/Producer (" + en(v("jsPDF " + Ht.version)) + ")"), Wt) Wt.hasOwnProperty(C) && Wt[C] && E("/" + C.substr(0, 1).toUpperCase() + C.substr(1) + " (" + en(v(Wt[C])) + ")");
    E("/CreationDate (" + en(v(at)) + ")"), E(">>"), E("endobj");
  }, ji = p.__private__.putCatalog = function(s) {
    var v = (s = s || {}).rootDictionaryObjId || $n;
    switch (qe(), E("<<"), E("/Type /Catalog"), E("/Pages " + v + " 0 R"), Ft || (Ft = "fullwidth"), Ft) {
      case "fullwidth":
        E("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        E("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        E("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        E("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var C = "" + Ft;
        C.substr(C.length - 1) === "%" && (Ft = parseInt(Ft) / 100), typeof Ft == "number" && E("/OpenAction [3 0 R /XYZ null null " + dt(Ft) + "]");
    }
    switch (te || (te = "continuous"), te) {
      case "continuous":
        E("/PageLayout /OneColumn");
        break;
      case "single":
        E("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        E("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        E("/PageLayout /TwoColumnRight");
    }
    Gt && E("/PageMode /" + Gt), ue.publish("putCatalog"), E(">>"), E("endobj");
  }, yo = p.__private__.putTrailer = function() {
    E("trailer"), E("<<"), E("/Size " + (Y + 1)), E("/Root " + Y + " 0 R"), E("/Info " + (Y - 1) + " 0 R"), b !== null && E("/Encrypt " + Ge.oid + " 0 R"), E("/ID [ <" + nt + "> <" + nt + "> ]"), E(">>");
  }, Lo = p.__private__.putHeader = function() {
    E("%PDF-" + O), E("%ºß¬à");
  }, No = p.__private__.putXRef = function() {
    var s = "0000000000";
    E("xref"), E("0 " + (Y + 1)), E("0000000000 65535 f ");
    for (var v = 1; v <= Y; v++)
      typeof $[v] == "function" ? E((s + $[v]()).slice(-10) + " 00000 n ") : $[v] !== void 0 ? E((s + $[v]).slice(-10) + " 00000 n ") : E("0000000000 00000 n ");
  }, tr = p.__private__.buildDocument = function() {
    zt(), ct(et), ue.publish("buildDocument"), Lo(), Mr(), da(), fa(), b !== null && fo(), wo(), ji();
    var s = rt;
    return No(), yo(), E("startxref"), E("" + s), E("%%EOF"), ct(Nt[j]), et.join(`
`);
  }, ti = p.__private__.getBlob = function(s) {
    return new Blob([Et(s)], { type: "application/pdf" });
  }, ei = p.output = p.__private__.output = _n(function(s, v) {
    switch (typeof (v = v || {}) == "string" ? v = { filename: v } : v.filename = v.filename || "generated.pdf", s) {
      case void 0:
        return tr();
      case "save":
        p.save(v.filename);
        break;
      case "arraybuffer":
        return Et(tr());
      case "blob":
        return ti(tr());
      case "bloburi":
      case "bloburl":
        if (Ut.URL !== void 0 && typeof Ut.URL.createObjectURL == "function") return Ut.URL && Ut.URL.createObjectURL(ti(tr())) || void 0;
        ve.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var C = "", T = tr();
        try {
          C = gs(T);
        } catch {
          C = gs(unescape(encodeURIComponent(T)));
        }
        return "data:application/pdf;filename=" + v.filename + ";base64," + C;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Ut) === "[object Window]") {
          var J = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", st = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          v.pdfObjectUrl && (J = v.pdfObjectUrl, st = "");
          var yt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + J + '"' + st + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(v) + ");<\/script></body></html>", jt = Ut.open();
          return jt !== null && jt.document.write(yt), jt;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Ut) === "[object Window]") {
          var Dt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (v.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + v.filename + '" width="500px" height="400px" /></body></html>', Kt = Ut.open();
          if (Kt !== null) {
            Kt.document.write(Dt);
            var $t = this;
            Kt.document.documentElement.querySelector("#pdfViewer").onload = function() {
              Kt.document.title = v.filename, Kt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open($t.output("bloburl"));
            };
          }
          return Kt;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Ut) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var re = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", v) + '"></iframe></body></html>', Ne = Ut.open();
        if (Ne !== null && (Ne.document.write(re), Ne.document.title = v.filename), Ne || typeof safari > "u") return Ne;
        break;
      case "datauri":
      case "dataurl":
        return Ut.document.location.href = this.output("datauristring", v);
      default:
        return null;
    }
  }), ba = function(s) {
    return Array.isArray(Or) === true && Or.indexOf(s) > -1;
  };
  switch (a) {
    case "pt":
      It = 1;
      break;
    case "mm":
      It = 72 / 25.4;
      break;
    case "cm":
      It = 72 / 2.54;
      break;
    case "in":
      It = 72;
      break;
    case "px":
      It = ba("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      It = 12;
      break;
    case "ex":
      It = 6;
      break;
    default:
      if (typeof a != "number") throw new Error("Invalid unit: " + a);
      It = a;
  }
  var Ge = null;
  kt(), Q();
  var Ao = function(s) {
    return b !== null ? Ge.encryptor(s, 0) : function(v) {
      return v;
    };
  }, wa = p.__private__.getPageInfo = p.getPageInfo = function(s) {
    if (isNaN(s) || s % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Yt[s].objId, pageNumber: s, pageContext: Yt[s] };
  }, Vt = p.__private__.getPageInfoByObjId = function(s) {
    if (isNaN(s) || s % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var v in Yt) if (Yt[v].objId === s) break;
    return wa(v);
  }, xo = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: Yt[j].objId, pageNumber: j, pageContext: Yt[j] };
  };
  p.addPage = function() {
    return ga.apply(this, arguments), this;
  }, p.setPage = function() {
    return ma.apply(this, arguments), ct.call(this, Nt[j]), this;
  }, p.insertPage = function(s) {
    return this.addPage(), this.movePage(j, s), this;
  }, p.movePage = function(s, v) {
    var C, T;
    if (s > v) {
      C = Nt[s], T = Yt[s];
      for (var J = s; J > v; J--) Nt[J] = Nt[J - 1], Yt[J] = Yt[J - 1];
      Nt[v] = C, Yt[v] = T, this.setPage(v);
    } else if (s < v) {
      C = Nt[s], T = Yt[s];
      for (var st = s; st < v; st++) Nt[st] = Nt[st + 1], Yt[st] = Yt[st + 1];
      Nt[v] = C, Yt[v] = T, this.setPage(v);
    }
    return this;
  }, p.deletePage = function() {
    return vo.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(s, v, C, T, J) {
    var st, yt, jt, Dt, Kt, $t, re, Ne, Se, Me = (T = T || {}).scope || this;
    if (typeof s == "number" && typeof v == "number" && (typeof C == "string" || Array.isArray(C))) {
      var Ye = C;
      C = v, v = s, s = Ye;
    }
    if (arguments[3] instanceof Tt ? (R("The transform parameter of text() with a Matrix value"), Se = J) : (jt = arguments[4], Dt = arguments[5], fe(re = arguments[3]) === "object" && re !== null || (typeof jt == "string" && (Dt = jt, jt = null), typeof re == "string" && (Dt = re, re = null), typeof re == "number" && (jt = re, re = null), T = { flags: re, angle: jt, align: Dt })), isNaN(v) || isNaN(C) || s == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (s.length === 0) return Me;
    var Re = "", kn = false, ln = typeof T.lineHeightFactor == "number" ? T.lineHeightFactor : Er, nr = Me.internal.scaleFactor;
    function ka(be) {
      return be = be.split("	").join(Array(T.TabLen || 9).join(" ")), en(be, re);
    }
    function Hi(be) {
      for (var we, Fe = be.concat(), De = [], or = Fe.length; or--; ) typeof (we = Fe.shift()) == "string" ? De.push(we) : Array.isArray(be) && (we.length === 1 || we[1] === void 0 && we[2] === void 0) ? De.push(we[0]) : De.push([we[0], we[1], we[2]]);
      return De;
    }
    function Wi(be, we) {
      var Fe;
      if (typeof be == "string") Fe = we(be)[0];
      else if (Array.isArray(be)) {
        for (var De, or, wr = be.concat(), gi = [], Ia = wr.length; Ia--; ) typeof (De = wr.shift()) == "string" ? gi.push(we(De)[0]) : Array.isArray(De) && typeof De[0] == "string" && (or = we(De[0], De[1], De[2]), gi.push([or[0], or[1], or[2]]));
        Fe = gi;
      }
      return Fe;
    }
    var si = false, Vi = true;
    if (typeof s == "string") si = true;
    else if (Array.isArray(s)) {
      var Gi = s.concat();
      yt = [];
      for (var ci, nn = Gi.length; nn--; ) (typeof (ci = Gi.shift()) != "string" || Array.isArray(ci) && typeof ci[0] != "string") && (Vi = false);
      si = Vi;
    }
    if (si === false) throw new Error('Type of text must be string or Array. "' + s + '" is not recognized.');
    typeof s == "string" && (s = s.match(/[\r?\n]/) ? s.split(/\r\n|\r|\n/g) : [s]);
    var ui = xt / Me.internal.scaleFactor, li = ui * (ln - 1);
    switch (T.baseline) {
      case "bottom":
        C -= li;
        break;
      case "top":
        C += ui - li;
        break;
      case "hanging":
        C += ui - 2 * li;
        break;
      case "middle":
        C += ui / 2 - li;
    }
    if (($t = T.maxWidth || 0) > 0 && (typeof s == "string" ? s = Me.splitTextToSize(s, $t) : Object.prototype.toString.call(s) === "[object Array]" && (s = s.reduce(function(be, we) {
      return be.concat(Me.splitTextToSize(we, $t));
    }, []))), st = { text: s, x: v, y: C, options: T, mutex: { pdfEscape: en, activeFontKey: ee, fonts: ge, activeFontSize: xt } }, ue.publish("preProcessText", st), s = st.text, jt = (T = st.options).angle, !(Se instanceof Tt) && jt && typeof jt == "number") {
      jt *= Math.PI / 180, T.rotationDirection === 0 && (jt = -jt), X === M.ADVANCED && (jt = -jt);
      var hi = Math.cos(jt), Yi = Math.sin(jt);
      Se = new Tt(hi, Yi, -Yi, hi, 0, 0);
    } else jt && jt instanceof Tt && (Se = jt);
    X !== M.ADVANCED || Se || (Se = Un), (Kt = T.charSpace || ii) !== void 0 && (Re += tt(P(Kt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ne = T.horizontalScale) !== void 0 && (Re += tt(100 * Ne) + ` Tz
`), T.lang;
    var rn = -1, Mo = T.renderingMode !== void 0 ? T.renderingMode : T.stroke, Ji = Me.internal.getCurrentPageInfo().pageContext;
    switch (Mo) {
      case 0:
      case false:
      case "fill":
        rn = 0;
        break;
      case 1:
      case true:
      case "stroke":
        rn = 1;
        break;
      case 2:
      case "fillThenStroke":
        rn = 2;
        break;
      case 3:
      case "invisible":
        rn = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        rn = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        rn = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        rn = 6;
        break;
      case 7:
      case "addToPathForClipping":
        rn = 7;
    }
    var Fa = Ji.usedRenderingMode !== void 0 ? Ji.usedRenderingMode : -1;
    rn !== -1 ? Re += rn + ` Tr
` : Fa !== -1 && (Re += `0 Tr
`), rn !== -1 && (Ji.usedRenderingMode = rn), Dt = T.align || "left";
    var Fn, Xi = xt * ln, Bo = Me.internal.pageSize.getWidth(), Eo = ge[ee];
    Kt = T.charSpace || ii, $t = T.maxWidth || 0, re = Object.assign({ autoencode: true, noBOM: true }, T.flags);
    var gr = [];
    if (Object.prototype.toString.call(s) === "[object Array]") {
      var gn;
      yt = Hi(s), Dt !== "left" && (Fn = yt.map(function(be) {
        return Me.getStringUnitWidth(be, { font: Eo, charSpace: Kt, fontSize: xt, doKerning: false }) * xt / nr;
      }));
      var In, mr = 0;
      if (Dt === "right") {
        v -= Fn[0], s = [], nn = yt.length;
        for (var Gn = 0; Gn < nn; Gn++) Gn === 0 ? (In = er(v), gn = fr(C)) : (In = P(mr - Fn[Gn]), gn = -Xi), s.push([yt[Gn], In, gn]), mr = Fn[Gn];
      } else if (Dt === "center") {
        v -= Fn[0] / 2, s = [], nn = yt.length;
        for (var rr = 0; rr < nn; rr++) rr === 0 ? (In = er(v), gn = fr(C)) : (In = P((mr - Fn[rr]) / 2), gn = -Xi), s.push([yt[rr], In, gn]), mr = Fn[rr];
      } else if (Dt === "left") {
        s = [], nn = yt.length;
        for (var fi = 0; fi < nn; fi++) s.push(yt[fi]);
      } else {
        if (Dt !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        s = [], nn = yt.length, $t = $t !== 0 ? $t : Bo;
        for (var Cn = 0; Cn < nn; Cn++) gn = Cn === 0 ? fr(C) : -Xi, In = Cn === 0 ? er(v) : 0, Cn < nn - 1 ? gr.push(tt(P(($t - Fn[Cn]) / (yt[Cn].split(" ").length - 1)))) : gr.push(0), s.push([yt[Cn], In, gn]);
      }
    }
    var di = typeof T.R2L == "boolean" ? T.R2L : qt;
    di === true && (s = Wi(s, function(be, we, Fe) {
      return [be.split("").reverse().join(""), we, Fe];
    })), st = { text: s, x: v, y: C, options: T, mutex: { pdfEscape: en, activeFontKey: ee, fonts: ge, activeFontSize: xt } }, ue.publish("postProcessText", st), s = st.text, kn = st.mutex.isHex || false;
    var Ki = ge[ee].encoding;
    Ki !== "WinAnsiEncoding" && Ki !== "StandardEncoding" || (s = Wi(s, function(be, we, Fe) {
      return [ka(be), we, Fe];
    })), yt = Hi(s), s = [];
    for (var vr, jn, ir, Rr = 0, pi = 1, Tr = Array.isArray(yt[0]) ? pi : Rr, br = "", Zi = function(be, we, Fe) {
      var De = "";
      return Fe instanceof Tt ? (Fe = typeof T.angle == "number" ? Nn(Fe, new Tt(1, 0, 0, 1, be, we)) : Nn(new Tt(1, 0, 0, 1, be, we), Fe), X === M.ADVANCED && (Fe = Nn(new Tt(1, 0, 0, -1, 0, 0), Fe)), De = Fe.join(" ") + ` Tm
`) : De = tt(be) + " " + tt(we) + ` Td
`, De;
    }, mn = 0; mn < yt.length; mn++) {
      switch (br = "", Tr) {
        case pi:
          ir = (kn ? "<" : "(") + yt[mn][0] + (kn ? ">" : ")"), vr = parseFloat(yt[mn][1]), jn = parseFloat(yt[mn][2]);
          break;
        case Rr:
          ir = (kn ? "<" : "(") + yt[mn] + (kn ? ">" : ")"), vr = er(v), jn = fr(C);
      }
      gr !== void 0 && gr[mn] !== void 0 && (br = gr[mn] + ` Tw
`), mn === 0 ? s.push(br + Zi(vr, jn, Se) + ir) : Tr === Rr ? s.push(br + ir) : Tr === pi && s.push(br + Zi(vr, jn, Se) + ir);
    }
    s = Tr === Rr ? s.join(` Tj
T* `) : s.join(` Tj
`), s += ` Tj
`;
    var ar = `BT
/`;
    return ar += ee + " " + xt + ` Tf
`, ar += tt(xt * ln) + ` TL
`, ar += qr + `
`, ar += Re, ar += s, E(ar += "ET"), S[ee] = true, Me;
  };
  var So = p.__private__.clip = p.clip = function(s) {
    return E(s === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return So("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return E("n"), this;
  };
  var Vn = p.__private__.isValidStyle = function(s) {
    var v = false;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(s) !== -1 && (v = true), v;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(s) {
    return Vn(s) && (g = s), this;
  };
  var ya = p.__private__.getStyle = p.getStyle = function(s) {
    var v = g;
    switch (s) {
      case "D":
      case "S":
        v = "S";
        break;
      case "F":
        v = "f";
        break;
      case "FD":
      case "DF":
        v = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        v = s;
    }
    return v;
  }, La = p.close = function() {
    return E("h"), this;
  };
  p.stroke = function() {
    return E("S"), this;
  }, p.fill = function(s) {
    return ni("f", s), this;
  }, p.fillEvenOdd = function(s) {
    return ni("f*", s), this;
  }, p.fillStroke = function(s) {
    return ni("B", s), this;
  }, p.fillStrokeEvenOdd = function(s) {
    return ni("B*", s), this;
  };
  var ni = function(s, v) {
    fe(v) === "object" ? Po(v, s) : E(s);
  }, Oi = function(s) {
    s === null || X === M.ADVANCED && s === void 0 || (s = ya(s), E(s));
  };
  function _o(s, v, C, T, J) {
    var st = new xi(v || this.boundingBox, C || this.xStep, T || this.yStep, this.gState, J || this.matrix);
    st.stream = this.stream;
    var yt = s + "$$" + this.cloneIndex++ + "$$";
    return tn(yt, st), st;
  }
  var Po = function(s, v) {
    var C = jr[s.key], T = ce[C];
    if (T instanceof Hr) E("q"), E(ko(v)), T.gState && p.setGState(T.gState), E(s.matrix.toString() + " cm"), E("/" + C + " sh"), E("Q");
    else if (T instanceof xi) {
      var J = new Tt(1, 0, 0, -1, 0, pr());
      s.matrix && (J = J.multiply(s.matrix || Un), C = _o.call(T, s.key, s.boundingBox, s.xStep, s.yStep, J).id), E("q"), E("/Pattern cs"), E("/" + C + " scn"), T.gState && p.setGState(T.gState), E(v), E("Q");
    }
  }, ko = function(s) {
    switch (s) {
      case "f":
      case "F":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
        return "W S";
      case "B*":
        return "W* S";
      case "S":
        return "W S";
      case "n":
        return "W n";
    }
  }, Mi = p.moveTo = function(s, v) {
    return E(tt(P(s)) + " " + tt(D(v)) + " m"), this;
  }, Br = p.lineTo = function(s, v) {
    return E(tt(P(s)) + " " + tt(D(v)) + " l"), this;
  }, hr = p.curveTo = function(s, v, C, T, J, st) {
    return E([tt(P(s)), tt(D(v)), tt(P(C)), tt(D(T)), tt(P(J)), tt(D(st)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(s, v, C, T, J) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || !Vn(J)) throw new Error("Invalid arguments passed to jsPDF.line");
    return X === M.COMPAT ? this.lines([[C - s, T - v]], s, v, [1, 1], J || "S") : this.lines([[C - s, T - v]], s, v, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(s, v, C, T, J, st) {
    var yt, jt, Dt, Kt, $t, re, Ne, Se, Me, Ye, Re, kn;
    if (typeof s == "number" && (kn = C, C = v, v = s, s = kn), T = T || [1, 1], st = st || false, isNaN(v) || isNaN(C) || !Array.isArray(s) || !Array.isArray(T) || !Vn(J) || typeof st != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (Mi(v, C), yt = T[0], jt = T[1], Kt = s.length, Ye = v, Re = C, Dt = 0; Dt < Kt; Dt++) ($t = s[Dt]).length === 2 ? (Ye = $t[0] * yt + Ye, Re = $t[1] * jt + Re, Br(Ye, Re)) : (re = $t[0] * yt + Ye, Ne = $t[1] * jt + Re, Se = $t[2] * yt + Ye, Me = $t[3] * jt + Re, Ye = $t[4] * yt + Ye, Re = $t[5] * jt + Re, hr(re, Ne, Se, Me, Ye, Re));
    return st && La(), Oi(J), this;
  }, p.path = function(s) {
    for (var v = 0; v < s.length; v++) {
      var C = s[v], T = C.c;
      switch (C.op) {
        case "m":
          Mi(T[0], T[1]);
          break;
        case "l":
          Br(T[0], T[1]);
          break;
        case "c":
          hr.apply(this, T);
          break;
        case "h":
          La();
      }
    }
    return this;
  }, p.__private__.rect = p.rect = function(s, v, C, T, J) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || !Vn(J)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return X === M.COMPAT && (T = -T), E([tt(P(s)), tt(D(v)), tt(P(C)), tt(P(T)), "re"].join(" ")), Oi(J), this;
  }, p.__private__.triangle = p.triangle = function(s, v, C, T, J, st, yt) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || isNaN(J) || isNaN(st) || !Vn(yt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[C - s, T - v], [J - C, st - T], [s - J, v - st]], s, v, [1, 1], yt, true), this;
  }, p.__private__.roundedRect = p.roundedRect = function(s, v, C, T, J, st, yt) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || isNaN(J) || isNaN(st) || !Vn(yt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var jt = 4 / 3 * (Math.SQRT2 - 1);
    return J = Math.min(J, 0.5 * C), st = Math.min(st, 0.5 * T), this.lines([[C - 2 * J, 0], [J * jt, 0, J, st - st * jt, J, st], [0, T - 2 * st], [0, st * jt, -J * jt, st, -J, st], [2 * J - C, 0], [-J * jt, 0, -J, -st * jt, -J, -st], [0, 2 * st - T], [0, -st * jt, J * jt, -st, J, -st]], s + J, v, [1, 1], yt, true), this;
  }, p.__private__.ellipse = p.ellipse = function(s, v, C, T, J) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || !Vn(J)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var st = 4 / 3 * (Math.SQRT2 - 1) * C, yt = 4 / 3 * (Math.SQRT2 - 1) * T;
    return Mi(s + C, v), hr(s + C, v - yt, s + st, v - T, s, v - T), hr(s - st, v - T, s - C, v - yt, s - C, v), hr(s - C, v + yt, s - st, v + T, s, v + T), hr(s + st, v + T, s + C, v + yt, s + C, v), Oi(J), this;
  }, p.__private__.circle = p.circle = function(s, v, C, T) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || !Vn(T)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(s, v, C, C, T);
  }, p.setFont = function(s, v, C) {
    return C && (v = wt(v, C)), ee = va(s, v, { disableWarning: false }), this;
  };
  var Fo = p.__private__.getFont = p.getFont = function() {
    return ge[va.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var s, v, C = {};
    for (s in Le) if (Le.hasOwnProperty(s)) for (v in C[s] = [], Le[s]) Le[s].hasOwnProperty(v) && C[s].push(v);
    return C;
  }, p.addFont = function(s, v, C, T, J) {
    var st = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && st.indexOf(arguments[3]) !== -1 ? J = arguments[3] : arguments[3] && st.indexOf(arguments[3]) == -1 && (C = wt(C, T)), J = J || "Identity-H", Ii.call(this, s, v, C, J);
  };
  var Er, Bi = i2.lineWidth || 0.200025, ri = p.__private__.getLineWidth = p.getLineWidth = function() {
    return Bi;
  }, Na = p.__private__.setLineWidth = p.setLineWidth = function(s) {
    return Bi = s, E(tt(P(s)) + " w"), this;
  };
  p.__private__.setLineDash = Ht.API.setLineDash = Ht.API.setLineDashPattern = function(s, v) {
    if (s = s || [], v = v || 0, isNaN(v) || !Array.isArray(s)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return s = s.map(function(C) {
      return tt(P(C));
    }).join(" "), v = tt(P(v)), E("[" + s + "] " + v + " d"), this;
  };
  var Aa = p.__private__.getLineHeight = p.getLineHeight = function() {
    return xt * Er;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return xt * Er;
  };
  var xa = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(s) {
    return typeof (s = s || 1.15) == "number" && (Er = s), this;
  }, Sa = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return Er;
  };
  xa(i2.lineHeight);
  var er = p.__private__.getHorizontalCoordinate = function(s) {
    return P(s);
  }, fr = p.__private__.getVerticalCoordinate = function(s) {
    return X === M.ADVANCED ? s : Yt[j].mediaBox.topRightY - Yt[j].mediaBox.bottomLeftY - P(s);
  }, Io = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(s) {
    return tt(er(s));
  }, dr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(s) {
    return tt(fr(s));
  }, Pn = i2.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return xn(Pn);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(s, v, C, T) {
    return Pn = Sn({ ch1: s, ch2: v, ch3: C, ch4: T, pdfColorType: "draw", precision: 2 }), E(Pn), this;
  };
  var Ei = i2.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return xn(Ei);
  }, p.__private__.setFillColor = p.setFillColor = function(s, v, C, T) {
    return Ei = Sn({ ch1: s, ch2: v, ch3: C, ch4: T, pdfColorType: "fill", precision: 2 }), E(Ei), this;
  };
  var qr = i2.textColor || "0 g", Co = p.__private__.getTextColor = p.getTextColor = function() {
    return xn(qr);
  };
  p.__private__.setTextColor = p.setTextColor = function(s, v, C, T) {
    return qr = Sn({ ch1: s, ch2: v, ch3: C, ch4: T, pdfColorType: "text", precision: 3 }), this;
  };
  var ii = i2.charSpace, jo = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(ii || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return ii = s, this;
  };
  var qi = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(s) {
    var v = p.CapJoinStyles[s];
    if (v === void 0) throw new Error("Line cap style of '" + s + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return qi = v, E(v + " J"), this;
  };
  var Di = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(s) {
    var v = p.CapJoinStyles[s];
    if (v === void 0) throw new Error("Line join style of '" + s + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Di = v, E(v + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(s) {
    if (s = s || 0, isNaN(s)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return E(tt(P(s)) + " M"), this;
  }, p.GState = io, p.setGState = function(s) {
    (s = typeof s == "string" ? Ae[Ln[s]] : _a(null, s)).equals(Qn) || (E("/" + s.id + " gs"), Qn = s);
  };
  var _a = function(s, v) {
    if (!s || !Ln[s]) {
      var C = false;
      for (var T in Ae) if (Ae.hasOwnProperty(T) && Ae[T].equals(v)) {
        C = true;
        break;
      }
      if (C) v = Ae[T];
      else {
        var J = "GS" + (Object.keys(Ae).length + 1).toString(10);
        Ae[J] = v, v.id = J;
      }
      return s && (Ln[s] = v.id), ue.publish("addGState", v), v;
    }
  };
  p.addGState = function(s, v) {
    return _a(s, v), this;
  }, p.saveGraphicsState = function() {
    return E("q"), Rn.push({ key: ee, size: xt, color: qr }), this;
  }, p.restoreGraphicsState = function() {
    E("Q");
    var s = Rn.pop();
    return ee = s.key, xt = s.size, qr = s.color, Qn = null, this;
  }, p.setCurrentTransformationMatrix = function(s) {
    return E(s.toString() + " cm"), this;
  }, p.comment = function(s) {
    return E("#" + s), this;
  };
  var ai = function(s, v) {
    var C = s || 0;
    Object.defineProperty(this, "x", { enumerable: true, get: function() {
      return C;
    }, set: function(st) {
      isNaN(st) || (C = parseFloat(st));
    } });
    var T = v || 0;
    Object.defineProperty(this, "y", { enumerable: true, get: function() {
      return T;
    }, set: function(st) {
      isNaN(st) || (T = parseFloat(st));
    } });
    var J = "pt";
    return Object.defineProperty(this, "type", { enumerable: true, get: function() {
      return J;
    }, set: function(st) {
      J = st.toString();
    } }), this;
  }, Ri = function(s, v, C, T) {
    ai.call(this, s, v), this.type = "rect";
    var J = C || 0;
    Object.defineProperty(this, "w", { enumerable: true, get: function() {
      return J;
    }, set: function(yt) {
      isNaN(yt) || (J = parseFloat(yt));
    } });
    var st = T || 0;
    return Object.defineProperty(this, "h", { enumerable: true, get: function() {
      return st;
    }, set: function(yt) {
      isNaN(yt) || (st = parseFloat(yt));
    } }), this;
  }, Ti = function() {
    this.page = xe, this.currentPage = j, this.pages = Nt.slice(0), this.pagesContext = Yt.slice(0), this.x = Ve, this.y = oe, this.matrix = yn, this.width = Dr(j), this.height = pr(j), this.outputDestination = Mt, this.id = "", this.objectNumber = -1;
  };
  Ti.prototype.restore = function() {
    xe = this.page, j = this.currentPage, Yt = this.pagesContext, Nt = this.pages, Ve = this.x, oe = this.y, yn = this.matrix, zi(j, this.width), Ui(j, this.height), Mt = this.outputDestination;
  };
  var Pa = function(s, v, C, T, J) {
    zn.push(new Ti()), xe = j = 0, Nt = [], Ve = s, oe = v, yn = J, Ci([C, T]);
  }, Oo = function(s) {
    if (Tn[s]) zn.pop().restore();
    else {
      var v = new Ti(), C = "Xo" + (Object.keys(He).length + 1).toString(10);
      v.id = C, Tn[s] = C, He[C] = v, ue.publish("addFormObject", v), zn.pop().restore();
    }
  };
  for (var oi in p.beginFormObject = function(s, v, C, T, J) {
    return Pa(s, v, C, T, J), this;
  }, p.endFormObject = function(s) {
    return Oo(s), this;
  }, p.doFormObject = function(s, v) {
    var C = He[Tn[s]];
    return E("q"), E(v.toString() + " cm"), E("/" + C.id + " Do"), E("Q"), this;
  }, p.getFormObject = function(s) {
    var v = He[Tn[s]];
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix };
  }, p.save = function(s, v) {
    return s = s || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || false, v.returnPromise === false ? (Ur(ti(tr()), s), typeof Ur.unload == "function" && Ut.setTimeout && setTimeout(Ur.unload, 911), this) : new Promise(function(C, T) {
      try {
        var J = Ur(ti(tr()), s);
        typeof Ur.unload == "function" && Ut.setTimeout && setTimeout(Ur.unload, 911), C(J);
      } catch (st) {
        T(st.message);
      }
    });
  }, Ht.API) Ht.API.hasOwnProperty(oi) && (oi === "events" && Ht.API.events.length ? function(s, v) {
    var C, T, J;
    for (J = v.length - 1; J !== -1; J--) C = v[J][0], T = v[J][1], s.subscribe.apply(s, [C].concat(typeof T == "function" ? [T] : T));
  }(ue, Ht.API.events) : p[oi] = Ht.API[oi]);
  var Dr = p.getPageWidth = function(s) {
    return (Yt[s = s || j].mediaBox.topRightX - Yt[s].mediaBox.bottomLeftX) / It;
  }, zi = p.setPageWidth = function(s, v) {
    Yt[s].mediaBox.topRightX = v * It + Yt[s].mediaBox.bottomLeftX;
  }, pr = p.getPageHeight = function(s) {
    return (Yt[s = s || j].mediaBox.topRightY - Yt[s].mediaBox.bottomLeftY) / It;
  }, Ui = p.setPageHeight = function(s, v) {
    Yt[s].mediaBox.topRightY = v * It + Yt[s].mediaBox.bottomLeftY;
  };
  return p.internal = { pdfEscape: en, getStyle: ya, getFont: Fo, getFontSize: Pt, getCharSpace: jo, getTextColor: Co, getLineHeight: Aa, getLineHeightFactor: Sa, getLineWidth: ri, write: Xt, getHorizontalCoordinate: er, getVerticalCoordinate: fr, getCoordinateString: Io, getVerticalCoordinateString: dr, collections: {}, newObject: qe, newAdditionalObject: Gr, newObjectDeferred: Oe, newObjectDeferredBegin: un, getFilters: Hn, putStream: pn, events: ue, scaleFactor: It, pageSize: { getWidth: function() {
    return Dr(j);
  }, setWidth: function(s) {
    zi(j, s);
  }, getHeight: function() {
    return pr(j);
  }, setHeight: function(s) {
    Ui(j, s);
  } }, encryptionOptions: b, encryption: Ge, getEncryptor: Ao, output: ei, getNumberOfPages: bo, pages: Nt, out: E, f2: dt, f3: F, getPageInfo: wa, getPageInfoByObjId: Vt, getCurrentPageInfo: xo, getPDFVersion: I, Point: ai, Rectangle: Ri, Matrix: Tt, hasHotfix: ba }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return Dr(j);
  }, set: function(s) {
    zi(j, s);
  }, enumerable: true, configurable: true }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return pr(j);
  }, set: function(s) {
    Ui(j, s);
  }, enumerable: true, configurable: true }), mo.call(p, Lt), ee = "F1", ga(c, n), ue.publish("initialized"), p;
}
Ni.prototype.lsbFirstWord = function(i2) {
  return String.fromCharCode(i2 >> 0 & 255, i2 >> 8 & 255, i2 >> 16 & 255, i2 >> 24 & 255);
}, Ni.prototype.toHexString = function(i2) {
  return i2.split("").map(function(e) {
    return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, Ni.prototype.hexToBytes = function(i2) {
  for (var e = [], n = 0; n < i2.length; n += 2) e.push(String.fromCharCode(parseInt(i2.substr(n, 2), 16)));
  return e.join("");
}, Ni.prototype.processOwnerPassword = function(i2, e) {
  return vs(ms(e).substr(0, 5), i2);
}, Ni.prototype.encryptor = function(i2, e) {
  var n = ms(this.encryptionKey + String.fromCharCode(255 & i2, i2 >> 8 & 255, i2 >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
  return function(a) {
    return vs(n, a);
  };
}, io.prototype.equals = function(i2) {
  var e, n = "id,objectNumber,equals";
  if (!i2 || fe(i2) !== fe(this)) return false;
  var a = 0;
  for (e in this) if (!(n.indexOf(e) >= 0)) {
    if (this.hasOwnProperty(e) && !i2.hasOwnProperty(e) || this[e] !== i2[e]) return false;
    a++;
  }
  for (e in i2) i2.hasOwnProperty(e) && n.indexOf(e) < 0 && a--;
  return a === 0;
}, Ht.API = { events: [] }, Ht.version = "2.5.1";
var Pe = Ht.API;
var Ns = 1;
var Vr = function(i2) {
  return i2.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
};
var yi = function(i2) {
  return i2.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
};
var Jt = function(i2) {
  return i2.toFixed(2);
};
var kr = function(i2) {
  return i2.toFixed(5);
};
Pe.__acroform__ = {};
var cn = function(i2, e) {
  i2.prototype = Object.create(e.prototype), i2.prototype.constructor = i2;
};
var lc = function(i2) {
  return i2 * Ns;
};
var Jn = function(i2) {
  var e = new jc(), n = Bt.internal.getHeight(i2) || 0, a = Bt.internal.getWidth(i2) || 0;
  return e.BBox = [0, 0, Number(Jt(a)), Number(Jt(n))], e;
};
var zu = Pe.__acroform__.setBit = function(i2, e) {
  if (i2 = i2 || 0, e = e || 0, isNaN(i2) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return i2 |= 1 << e;
};
var Uu = Pe.__acroform__.clearBit = function(i2, e) {
  if (i2 = i2 || 0, e = e || 0, isNaN(i2) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return i2 &= ~(1 << e);
};
var Hu = Pe.__acroform__.getBit = function(i2, e) {
  if (isNaN(i2) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return i2 & 1 << e ? 1 : 0;
};
var Ie = Pe.__acroform__.getBitForPdf = function(i2, e) {
  if (isNaN(i2) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return Hu(i2, e - 1);
};
var Ce = Pe.__acroform__.setBitForPdf = function(i2, e) {
  if (isNaN(i2) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return zu(i2, e - 1);
};
var je = Pe.__acroform__.clearBitForPdf = function(i2, e) {
  if (isNaN(i2) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return Uu(i2, e - 1);
};
var Wu = Pe.__acroform__.calculateCoordinates = function(i2, e) {
  var n = e.internal.getHorizontalCoordinate, a = e.internal.getVerticalCoordinate, c = i2[0], o = i2[1], l = i2[2], h = i2[3], f = {};
  return f.lowerLeft_X = n(c) || 0, f.lowerLeft_Y = a(o + h) || 0, f.upperRight_X = n(c + l) || 0, f.upperRight_Y = a(o) || 0, [Number(Jt(f.lowerLeft_X)), Number(Jt(f.lowerLeft_Y)), Number(Jt(f.upperRight_X)), Number(Jt(f.upperRight_Y))];
};
var Vu = function(i2) {
  if (i2.appearanceStreamContent) return i2.appearanceStreamContent;
  if (i2.V || i2.DV) {
    var e = [], n = i2._V || i2.DV, a = bs(i2, n), c = i2.scope.internal.getFont(i2.fontName, i2.fontStyle).id;
    e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(i2.scope.__private__.encodeColorString(i2.color)), e.push("/" + c + " " + Jt(a.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC");
    var o = Jn(i2);
    return o.scope = i2.scope, o.stream = e.join(`
`), o;
  }
};
var bs = function(i2, e) {
  var n = i2.fontSize === 0 ? i2.maxFontSize : i2.fontSize, a = { text: "", fontSize: "" }, c = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
  c = i2.multiline ? c.map(function(F) {
    return F.split(`
`);
  }) : c.map(function(F) {
    return [F];
  });
  var o = n, l = Bt.internal.getHeight(i2) || 0;
  l = l < 0 ? -l : l;
  var h = Bt.internal.getWidth(i2) || 0;
  h = h < 0 ? -h : h;
  var f = function(F, P, z) {
    if (F + 1 < c.length) {
      var D = P + " " + c[F + 1][0];
      return Za(D, i2, z).width <= h - 4;
    }
    return false;
  };
  o++;
  t: for (; o > 0; ) {
    e = "", o--;
    var g, b, A = Za("3", i2, o).height, S = i2.multiline ? l - o : (l - A) / 2, p = S += 2, O = 0, I = 0, q = 0;
    if (o <= 0) {
      e = `(...) Tj
`, e += "% Width of Text: " + Za(e, i2, o = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var _ = "", M = 0, X = 0; X < c.length; X++) if (c.hasOwnProperty(X)) {
      var ot = false;
      if (c[X].length !== 1 && q !== c[X].length - 1) {
        if ((A + 2) * (M + 2) + 2 > l) continue t;
        _ += c[X][q], ot = true, I = X, X--;
      } else {
        _ = (_ += c[X][q] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
        var ut = parseInt(X), wt = f(ut, _, o), tt = X >= c.length - 1;
        if (wt && !tt) {
          _ += " ", q = 0;
          continue;
        }
        if (wt || tt) {
          if (tt) I = ut;
          else if (i2.multiline && (A + 2) * (M + 2) + 2 > l) continue t;
        } else {
          if (!i2.multiline || (A + 2) * (M + 2) + 2 > l) continue t;
          I = ut;
        }
      }
      for (var R = "", gt = O; gt <= I; gt++) {
        var dt = c[gt];
        if (i2.multiline) {
          if (gt === I) {
            R += dt[q] + " ", q = (q + 1) % dt.length;
            continue;
          }
          if (gt === O) {
            R += dt[dt.length - 1] + " ";
            continue;
          }
        }
        R += dt[0] + " ";
      }
      switch (R = R.substr(R.length - 1) == " " ? R.substr(0, R.length - 1) : R, b = Za(R, i2, o).width, i2.textAlign) {
        case "right":
          g = h - b - 2;
          break;
        case "center":
          g = (h - b) / 2;
          break;
        case "left":
        default:
          g = 2;
      }
      e += Jt(g) + " " + Jt(p) + ` Td
`, e += "(" + Vr(R) + `) Tj
`, e += -Jt(g) + ` 0 Td
`, p = -(o + 2), b = 0, O = ot ? I : I + 1, M++, _ = "";
    }
    break;
  }
  return a.text = e, a.fontSize = o, a;
};
var Za = function(i2, e, n) {
  var a = e.scope.internal.getFont(e.fontName, e.fontStyle), c = e.scope.getStringUnitWidth(i2, { font: a, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n);
  return { height: e.scope.getStringUnitWidth("3", { font: a, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n) * 1.5, width: c };
};
var Gu = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: false, internal: null, isInitialized: false };
var Yu = function(i2, e) {
  var n = { type: "reference", object: i2 };
  e.internal.getPageInfo(i2.page).pageContext.annotations.find(function(a) {
    return a.type === n.type && a.object === n.object;
  }) === void 0 && e.internal.getPageInfo(i2.page).pageContext.annotations.push(n);
};
var Ju = function(i2, e) {
  for (var n in i2) if (i2.hasOwnProperty(n)) {
    var a = n, c = i2[n];
    e.internal.newObjectDeferredBegin(c.objId, true), fe(c) === "object" && typeof c.putStream == "function" && c.putStream(), delete i2[a];
  }
};
var Xu = function(i2, e) {
  if (e.scope = i2, i2.internal !== void 0 && (i2.internal.acroformPlugin === void 0 || i2.internal.acroformPlugin.isInitialized === false)) {
    if (qn.FieldNum = 0, i2.internal.acroformPlugin = JSON.parse(JSON.stringify(Gu)), i2.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Ns = i2.internal.scaleFactor, i2.internal.acroformPlugin.acroFormDictionaryRoot = new Oc(), i2.internal.acroformPlugin.acroFormDictionaryRoot.scope = i2, i2.internal.acroformPlugin.acroFormDictionaryRoot._eventID = i2.internal.events.subscribe("postPutResources", function() {
      (function(n) {
        n.internal.events.unsubscribe(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID, n.internal.acroformPlugin.printedOut = true;
      })(i2);
    }), i2.internal.events.subscribe("buildDocument", function() {
      (function(n) {
        n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var a = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var c in a) if (a.hasOwnProperty(c)) {
          var o = a[c];
          o.objId = void 0, o.hasAnnotation && Yu(o, n);
        }
      })(i2);
    }), i2.internal.events.subscribe("putCatalog", function() {
      (function(n) {
        if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        n.internal.write("/AcroForm " + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(i2);
    }), i2.internal.events.subscribe("postPutPages", function(n) {
      (function(a, c) {
        var o = !a;
        for (var l in a || (c.internal.newObjectDeferredBegin(c.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), c.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), a = a || c.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (a.hasOwnProperty(l)) {
          var h = a[l], f = [], g = h.Rect;
          if (h.Rect && (h.Rect = Wu(h.Rect, c)), c.internal.newObjectDeferredBegin(h.objId, true), h.DA = Bt.createDefaultAppearanceStream(h), fe(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var b = Vu(h);
            f.push({ key: "AP", value: "<</N " + b + ">>" }), c.internal.acroformPlugin.xForms.push(b);
          }
          if (h.appearanceStreamContent) {
            var A = "";
            for (var S in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(S)) {
              var p = h.appearanceStreamContent[S];
              if (A += "/" + S + " ", A += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var l in p) if (p.hasOwnProperty(l)) {
                  var O = p[l];
                  typeof O == "function" && (O = O.call(c, h)), A += "/" + l + " " + O + " ", c.internal.acroformPlugin.xForms.indexOf(O) >= 0 || c.internal.acroformPlugin.xForms.push(O);
                }
              } else typeof (O = p) == "function" && (O = O.call(c, h)), A += "/" + l + " " + O, c.internal.acroformPlugin.xForms.indexOf(O) >= 0 || c.internal.acroformPlugin.xForms.push(O);
              A += ">>";
            }
            f.push({ key: "AP", value: `<<
` + A + ">>" });
          }
          c.internal.putStream({ additionalKeyValues: f, objectId: h.objId }), c.internal.out("endobj");
        }
        o && Ju(c.internal.acroformPlugin.xForms, c);
      })(n, i2);
    }), i2.internal.acroformPlugin.isInitialized = true;
  }
};
var Cc = Pe.__acroform__.arrayToPdfArray = function(i2, e, n) {
  var a = function(l) {
    return l;
  };
  if (Array.isArray(i2)) {
    for (var c = "[", o = 0; o < i2.length; o++) switch (o !== 0 && (c += " "), fe(i2[o])) {
      case "boolean":
      case "number":
      case "object":
        c += i2[o].toString();
        break;
      case "string":
        i2[o].substr(0, 1) !== "/" ? (e !== void 0 && n && (a = n.internal.getEncryptor(e)), c += "(" + Vr(a(i2[o].toString())) + ")") : c += i2[o].toString();
    }
    return c += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
};
var os = function(i2, e, n) {
  var a = function(c) {
    return c;
  };
  return e !== void 0 && n && (a = n.internal.getEncryptor(e)), (i2 = i2 || "").toString(), i2 = "(" + Vr(a(i2)) + ")";
};
var Xn = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(i2) {
    this._objId = i2;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: true });
};
Xn.prototype.toString = function() {
  return this.objId + " 0 R";
}, Xn.prototype.putStream = function() {
  var i2 = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: i2, objectId: this.objId }), this.scope.internal.out("endobj");
}, Xn.prototype.getKeyValueListForStream = function() {
  var i2 = [], e = Object.getOwnPropertyNames(this).filter(function(o) {
    return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
  });
  for (var n in e) if (Object.getOwnPropertyDescriptor(this, e[n]).configurable === false) {
    var a = e[n], c = this[a];
    c && (Array.isArray(c) ? i2.push({ key: a, value: Cc(c, this.objId, this.scope) }) : c instanceof Xn ? (c.scope = this.scope, i2.push({ key: a, value: c.objId + " 0 R" })) : typeof c != "function" && i2.push({ key: a, value: c }));
  }
  return i2;
};
var jc = function() {
  Xn.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: false, writable: true }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: false, writable: true }), Object.defineProperty(this, "FormType", { value: 1, configurable: false, writable: true });
  var i2, e = [];
  Object.defineProperty(this, "BBox", { configurable: false, get: function() {
    return e;
  }, set: function(n) {
    e = n;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: false, writable: true }), Object.defineProperty(this, "stream", { enumerable: false, configurable: true, set: function(n) {
    i2 = n.trim();
  }, get: function() {
    return i2 || null;
  } });
};
cn(jc, Xn);
var Oc = function() {
  Xn.call(this);
  var i2, e = [];
  Object.defineProperty(this, "Kids", { enumerable: false, configurable: true, get: function() {
    return e.length > 0 ? e : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: false, configurable: false, get: function() {
    return e;
  } }), Object.defineProperty(this, "DA", { enumerable: false, configurable: false, get: function() {
    if (i2) {
      var n = function(a) {
        return a;
      };
      return this.scope && (n = this.scope.internal.getEncryptor(this.objId)), "(" + Vr(n(i2)) + ")";
    }
  }, set: function(n) {
    i2 = n;
  } });
};
cn(Oc, Xn);
var qn = function i() {
  Xn.call(this);
  var e = 4;
  Object.defineProperty(this, "F", { enumerable: false, configurable: false, get: function() {
    return e;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
    e = _;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: true, configurable: true, get: function() {
    return !!Ie(e, 3);
  }, set: function(_) {
    _ ? this.F = Ce(e, 3) : this.F = je(e, 3);
  } });
  var n = 0;
  Object.defineProperty(this, "Ff", { enumerable: false, configurable: false, get: function() {
    return n;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
    n = _;
  } });
  var a = [];
  Object.defineProperty(this, "Rect", { enumerable: false, configurable: false, get: function() {
    if (a.length !== 0) return a;
  }, set: function(_) {
    a = _ !== void 0 ? _ : [];
  } }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, get: function() {
    return !a || isNaN(a[0]) ? 0 : a[0];
  }, set: function(_) {
    a[0] = _;
  } }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, get: function() {
    return !a || isNaN(a[1]) ? 0 : a[1];
  }, set: function(_) {
    a[1] = _;
  } }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, get: function() {
    return !a || isNaN(a[2]) ? 0 : a[2];
  }, set: function(_) {
    a[2] = _;
  } }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, get: function() {
    return !a || isNaN(a[3]) ? 0 : a[3];
  }, set: function(_) {
    a[3] = _;
  } });
  var c = "";
  Object.defineProperty(this, "FT", { enumerable: true, configurable: false, get: function() {
    return c;
  }, set: function(_) {
    switch (_) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        c = _;
        break;
      default:
        throw new Error('Invalid value "' + _ + '" for attribute FT supplied.');
    }
  } });
  var o = null;
  Object.defineProperty(this, "T", { enumerable: true, configurable: false, get: function() {
    if (!o || o.length < 1) {
      if (this instanceof ao) return;
      o = "FieldObject" + i.FieldNum++;
    }
    var _ = function(M) {
      return M;
    };
    return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), "(" + Vr(_(o)) + ")";
  }, set: function(_) {
    o = _.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: true, enumerable: true, get: function() {
    return o;
  }, set: function(_) {
    o = _;
  } });
  var l = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: true, configurable: true, get: function() {
    return l;
  }, set: function(_) {
    l = _;
  } });
  var h = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: true, configurable: true, get: function() {
    return h;
  }, set: function(_) {
    h = _;
  } });
  var f = 0;
  Object.defineProperty(this, "fontSize", { enumerable: true, configurable: true, get: function() {
    return f;
  }, set: function(_) {
    f = _;
  } });
  var g = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: true, configurable: true, get: function() {
    return g === void 0 ? 50 / Ns : g;
  }, set: function(_) {
    g = _;
  } });
  var b = "black";
  Object.defineProperty(this, "color", { enumerable: true, configurable: true, get: function() {
    return b;
  }, set: function(_) {
    b = _;
  } });
  var A = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: true, configurable: false, get: function() {
    if (!(!A || this instanceof ao || this instanceof Wr)) return os(A, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), A = _;
  } });
  var S = null;
  Object.defineProperty(this, "DV", { enumerable: false, configurable: false, get: function() {
    if (S) return this instanceof Ue ? S : os(S, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), S = this instanceof Ue ? _ : _.substr(0, 1) === "(" ? yi(_.substr(1, _.length - 2)) : yi(_);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: true, configurable: true, get: function() {
    return this instanceof Ue ? yi(S.substr(1, S.length - 1)) : S;
  }, set: function(_) {
    _ = _.toString(), S = this instanceof Ue ? "/" + _ : _;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: false, configurable: false, get: function() {
    if (p) return p;
  }, set: function(_) {
    this.V = _;
  } }), Object.defineProperty(this, "V", { enumerable: false, configurable: false, get: function() {
    if (p) return this instanceof Ue ? p : os(p, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Ue ? _ : _.substr(0, 1) === "(" ? yi(_.substr(1, _.length - 2)) : yi(_);
  } }), Object.defineProperty(this, "value", { enumerable: true, configurable: true, get: function() {
    return this instanceof Ue ? yi(p.substr(1, p.length - 1)) : p;
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Ue ? "/" + _ : _;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: true, configurable: true, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: true, configurable: false, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: true, configurable: false, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var O, I = false;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: true, configurable: true, get: function() {
    return I;
  }, set: function(_) {
    _ = !!_, I = _;
  } }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, get: function() {
    if (O) return O;
  }, set: function(_) {
    O = _;
  } }), Object.defineProperty(this, "readOnly", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 1);
  }, set: function(_) {
    _ ? this.Ff = Ce(this.Ff, 1) : this.Ff = je(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 2);
  }, set: function(_) {
    _ ? this.Ff = Ce(this.Ff, 2) : this.Ff = je(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 3);
  }, set: function(_) {
    _ ? this.Ff = Ce(this.Ff, 3) : this.Ff = je(this.Ff, 3);
  } });
  var q = null;
  Object.defineProperty(this, "Q", { enumerable: true, configurable: false, get: function() {
    if (q !== null) return q;
  }, set: function(_) {
    if ([0, 1, 2].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
    q = _;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var _;
    switch (q) {
      case 0:
      default:
        _ = "left";
        break;
      case 1:
        _ = "center";
        break;
      case 2:
        _ = "right";
    }
    return _;
  }, configurable: true, enumerable: true, set: function(_) {
    switch (_) {
      case "right":
      case 2:
        q = 2;
        break;
      case "center":
      case 1:
        q = 1;
        break;
      case "left":
      case 0:
      default:
        q = 0;
    }
  } });
};
cn(qn, Xn);
var Si = function() {
  qn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var i2 = 0;
  Object.defineProperty(this, "TI", { enumerable: true, configurable: false, get: function() {
    return i2;
  }, set: function(n) {
    i2 = n;
  } }), Object.defineProperty(this, "topIndex", { enumerable: true, configurable: true, get: function() {
    return i2;
  }, set: function(n) {
    i2 = n;
  } });
  var e = [];
  Object.defineProperty(this, "Opt", { enumerable: true, configurable: false, get: function() {
    return Cc(e, this.objId, this.scope);
  }, set: function(n) {
    var a, c;
    c = [], typeof (a = n) == "string" && (c = function(o, l, h) {
      h || (h = 1);
      for (var f, g = []; f = l.exec(o); ) g.push(f[h]);
      return g;
    }(a, /\((.*?)\)/g)), e = c;
  } }), this.getOptions = function() {
    return e;
  }, this.setOptions = function(n) {
    e = n, this.sort && e.sort();
  }, this.addOption = function(n) {
    n = (n = n || "").toString(), e.push(n), this.sort && e.sort();
  }, this.removeOption = function(n, a) {
    for (a = a || false, n = (n = n || "").toString(); e.indexOf(n) !== -1 && (e.splice(e.indexOf(n), 1), a !== false); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 18);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 18) : this.Ff = je(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 19);
  }, set: function(n) {
    this.combo === true && (n ? this.Ff = Ce(this.Ff, 19) : this.Ff = je(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 20);
  }, set: function(n) {
    n ? (this.Ff = Ce(this.Ff, 20), e.sort()) : this.Ff = je(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 22);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 22) : this.Ff = je(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 23);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 27);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 27) : this.Ff = je(this.Ff, 27);
  } }), this.hasAppearanceStream = false;
};
cn(Si, qn);
var _i = function() {
  Si.call(this), this.fontName = "helvetica", this.combo = false;
};
cn(_i, Si);
var Pi = function() {
  _i.call(this), this.combo = true;
};
cn(Pi, _i);
var to = function() {
  Pi.call(this), this.edit = true;
};
cn(to, Pi);
var Ue = function() {
  qn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 15);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 15) : this.Ff = je(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 16);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 16) : this.Ff = je(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 17);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 17) : this.Ff = je(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 26);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
  } });
  var i2, e = {};
  Object.defineProperty(this, "MK", { enumerable: false, configurable: false, get: function() {
    var n = function(o) {
      return o;
    };
    if (this.scope && (n = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
      var a, c = [];
      for (a in c.push("<<"), e) c.push("/" + a + " (" + Vr(n(e[a])) + ")");
      return c.push(">>"), c.join(`
`);
    }
  }, set: function(n) {
    fe(n) === "object" && (e = n);
  } }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, get: function() {
    return e.CA || "";
  }, set: function(n) {
    typeof n == "string" && (e.CA = n);
  } }), Object.defineProperty(this, "AS", { enumerable: false, configurable: false, get: function() {
    return i2;
  }, set: function(n) {
    i2 = n;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: true, configurable: true, get: function() {
    return i2.substr(1, i2.length - 1);
  }, set: function(n) {
    i2 = "/" + n;
  } });
};
cn(Ue, qn);
var eo = function() {
  Ue.call(this), this.pushButton = true;
};
cn(eo, Ue);
var ki = function() {
  Ue.call(this), this.radio = true, this.pushButton = false;
  var i2 = [];
  Object.defineProperty(this, "Kids", { enumerable: true, configurable: false, get: function() {
    return i2;
  }, set: function(e) {
    i2 = e !== void 0 ? e : [];
  } });
};
cn(ki, Ue);
var ao = function() {
  var i2, e;
  qn.call(this), Object.defineProperty(this, "Parent", { enumerable: false, configurable: false, get: function() {
    return i2;
  }, set: function(c) {
    i2 = c;
  } }), Object.defineProperty(this, "optionName", { enumerable: false, configurable: true, get: function() {
    return e;
  }, set: function(c) {
    e = c;
  } });
  var n, a = {};
  Object.defineProperty(this, "MK", { enumerable: false, configurable: false, get: function() {
    var c = function(h) {
      return h;
    };
    this.scope && (c = this.scope.internal.getEncryptor(this.objId));
    var o, l = [];
    for (o in l.push("<<"), a) l.push("/" + o + " (" + Vr(c(a[o])) + ")");
    return l.push(">>"), l.join(`
`);
  }, set: function(c) {
    fe(c) === "object" && (a = c);
  } }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, get: function() {
    return a.CA || "";
  }, set: function(c) {
    typeof c == "string" && (a.CA = c);
  } }), Object.defineProperty(this, "AS", { enumerable: false, configurable: false, get: function() {
    return n;
  }, set: function(c) {
    n = c;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: true, configurable: true, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(c) {
    n = "/" + c;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Bt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
cn(ao, qn), ki.prototype.setAppearance = function(i2) {
  if (!("createAppearanceStream" in i2) || !("getCA" in i2)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
    var n = this.Kids[e];
    n.appearanceStreamContent = i2.createAppearanceStream(n.optionName), n.caption = i2.getCA();
  }
}, ki.prototype.createOption = function(i2) {
  var e = new ao();
  return e.Parent = this, e.optionName = i2, this.Kids.push(e), Ku.call(this.scope, e), e;
};
var no = function() {
  Ue.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Bt.CheckBox.createAppearanceStream();
};
cn(no, Ue);
var Wr = function() {
  qn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 13);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 13) : this.Ff = je(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 21);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 21) : this.Ff = je(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 24);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 24) : this.Ff = je(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 25);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 25) : this.Ff = je(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
  } });
  var i2 = null;
  Object.defineProperty(this, "MaxLen", { enumerable: true, configurable: false, get: function() {
    return i2;
  }, set: function(e) {
    i2 = e;
  } }), Object.defineProperty(this, "maxLength", { enumerable: true, configurable: true, get: function() {
    return i2;
  }, set: function(e) {
    Number.isInteger(e) && (i2 = e);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: true, configurable: true, get: function() {
    return this.V || this.DV;
  } });
};
cn(Wr, qn);
var ro = function() {
  Wr.call(this), Object.defineProperty(this, "password", { enumerable: true, configurable: true, get: function() {
    return !!Ie(this.Ff, 14);
  }, set: function(i2) {
    i2 ? this.Ff = Ce(this.Ff, 14) : this.Ff = je(this.Ff, 14);
  } }), this.password = true;
};
cn(ro, Wr);
var Bt = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Bt.CheckBox.YesNormal }, D: { On: Bt.CheckBox.YesPushDown, Off: Bt.CheckBox.OffPushDown } };
}, YesPushDown: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [], a = i2.scope.internal.getFont(i2.fontName, i2.fontStyle).id, c = i2.scope.__private__.encodeColorString(i2.color), o = bs(i2, i2.caption);
  return n.push("0.749023 g"), n.push("0 0 " + Jt(Bt.internal.getWidth(i2)) + " " + Jt(Bt.internal.getHeight(i2)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + a + " " + Jt(o.fontSize) + " Tf " + c), n.push("BT"), n.push(o.text), n.push("ET"), n.push("Q"), n.push("EMC"), e.stream = n.join(`
`), e;
}, YesNormal: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = i2.scope.internal.getFont(i2.fontName, i2.fontStyle).id, a = i2.scope.__private__.encodeColorString(i2.color), c = [], o = Bt.internal.getHeight(i2), l = Bt.internal.getWidth(i2), h = bs(i2, i2.caption);
  return c.push("1 g"), c.push("0 0 " + Jt(l) + " " + Jt(o) + " re"), c.push("f"), c.push("q"), c.push("0 0 1 rg"), c.push("0 0 " + Jt(l - 1) + " " + Jt(o - 1) + " re"), c.push("W"), c.push("n"), c.push("0 g"), c.push("BT"), c.push("/" + n + " " + Jt(h.fontSize) + " Tf " + a), c.push(h.text), c.push("ET"), c.push("Q"), e.stream = c.join(`
`), e;
}, OffPushDown: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [];
  return n.push("0.749023 g"), n.push("0 0 " + Jt(Bt.internal.getWidth(i2)) + " " + Jt(Bt.internal.getHeight(i2)) + " re"), n.push("f"), e.stream = n.join(`
`), e;
} }, RadioButton: { Circle: { createAppearanceStream: function(i2) {
  var e = { D: { Off: Bt.RadioButton.Circle.OffPushDown }, N: {} };
  return e.N[i2] = Bt.RadioButton.Circle.YesNormal, e.D[i2] = Bt.RadioButton.Circle.YesPushDown, e;
}, getCA: function() {
  return "l";
}, YesNormal: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [], a = Bt.internal.getWidth(i2) <= Bt.internal.getHeight(i2) ? Bt.internal.getWidth(i2) / 4 : Bt.internal.getHeight(i2) / 4;
  a = Number((0.9 * a).toFixed(5));
  var c = Bt.internal.Bezier_C, o = Number((a * c).toFixed(5));
  return n.push("q"), n.push("1 0 0 1 " + kr(Bt.internal.getWidth(i2) / 2) + " " + kr(Bt.internal.getHeight(i2) / 2) + " cm"), n.push(a + " 0 m"), n.push(a + " " + o + " " + o + " " + a + " 0 " + a + " c"), n.push("-" + o + " " + a + " -" + a + " " + o + " -" + a + " 0 c"), n.push("-" + a + " -" + o + " -" + o + " -" + a + " 0 -" + a + " c"), n.push(o + " -" + a + " " + a + " -" + o + " " + a + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
}, YesPushDown: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [], a = Bt.internal.getWidth(i2) <= Bt.internal.getHeight(i2) ? Bt.internal.getWidth(i2) / 4 : Bt.internal.getHeight(i2) / 4;
  a = Number((0.9 * a).toFixed(5));
  var c = Number((2 * a).toFixed(5)), o = Number((c * Bt.internal.Bezier_C).toFixed(5)), l = Number((a * Bt.internal.Bezier_C).toFixed(5));
  return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + kr(Bt.internal.getWidth(i2) / 2) + " " + kr(Bt.internal.getHeight(i2) / 2) + " cm"), n.push(c + " 0 m"), n.push(c + " " + o + " " + o + " " + c + " 0 " + c + " c"), n.push("-" + o + " " + c + " -" + c + " " + o + " -" + c + " 0 c"), n.push("-" + c + " -" + o + " -" + o + " -" + c + " 0 -" + c + " c"), n.push(o + " -" + c + " " + c + " -" + o + " " + c + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + kr(Bt.internal.getWidth(i2) / 2) + " " + kr(Bt.internal.getHeight(i2) / 2) + " cm"), n.push(a + " 0 m"), n.push(a + " " + l + " " + l + " " + a + " 0 " + a + " c"), n.push("-" + l + " " + a + " -" + a + " " + l + " -" + a + " 0 c"), n.push("-" + a + " -" + l + " -" + l + " -" + a + " 0 -" + a + " c"), n.push(l + " -" + a + " " + a + " -" + l + " " + a + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
}, OffPushDown: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [], a = Bt.internal.getWidth(i2) <= Bt.internal.getHeight(i2) ? Bt.internal.getWidth(i2) / 4 : Bt.internal.getHeight(i2) / 4;
  a = Number((0.9 * a).toFixed(5));
  var c = Number((2 * a).toFixed(5)), o = Number((c * Bt.internal.Bezier_C).toFixed(5));
  return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + kr(Bt.internal.getWidth(i2) / 2) + " " + kr(Bt.internal.getHeight(i2) / 2) + " cm"), n.push(c + " 0 m"), n.push(c + " " + o + " " + o + " " + c + " 0 " + c + " c"), n.push("-" + o + " " + c + " -" + c + " " + o + " -" + c + " 0 c"), n.push("-" + c + " -" + o + " -" + o + " -" + c + " 0 -" + c + " c"), n.push(o + " -" + c + " " + c + " -" + o + " " + c + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
} }, Cross: { createAppearanceStream: function(i2) {
  var e = { D: { Off: Bt.RadioButton.Cross.OffPushDown }, N: {} };
  return e.N[i2] = Bt.RadioButton.Cross.YesNormal, e.D[i2] = Bt.RadioButton.Cross.YesPushDown, e;
}, getCA: function() {
  return "8";
}, YesNormal: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [], a = Bt.internal.calculateCross(i2);
  return n.push("q"), n.push("1 1 " + Jt(Bt.internal.getWidth(i2) - 2) + " " + Jt(Bt.internal.getHeight(i2) - 2) + " re"), n.push("W"), n.push("n"), n.push(Jt(a.x1.x) + " " + Jt(a.x1.y) + " m"), n.push(Jt(a.x2.x) + " " + Jt(a.x2.y) + " l"), n.push(Jt(a.x4.x) + " " + Jt(a.x4.y) + " m"), n.push(Jt(a.x3.x) + " " + Jt(a.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join(`
`), e;
}, YesPushDown: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = Bt.internal.calculateCross(i2), a = [];
  return a.push("0.749023 g"), a.push("0 0 " + Jt(Bt.internal.getWidth(i2)) + " " + Jt(Bt.internal.getHeight(i2)) + " re"), a.push("f"), a.push("q"), a.push("1 1 " + Jt(Bt.internal.getWidth(i2) - 2) + " " + Jt(Bt.internal.getHeight(i2) - 2) + " re"), a.push("W"), a.push("n"), a.push(Jt(n.x1.x) + " " + Jt(n.x1.y) + " m"), a.push(Jt(n.x2.x) + " " + Jt(n.x2.y) + " l"), a.push(Jt(n.x4.x) + " " + Jt(n.x4.y) + " m"), a.push(Jt(n.x3.x) + " " + Jt(n.x3.y) + " l"), a.push("s"), a.push("Q"), e.stream = a.join(`
`), e;
}, OffPushDown: function(i2) {
  var e = Jn(i2);
  e.scope = i2.scope;
  var n = [];
  return n.push("0.749023 g"), n.push("0 0 " + Jt(Bt.internal.getWidth(i2)) + " " + Jt(Bt.internal.getHeight(i2)) + " re"), n.push("f"), e.stream = n.join(`
`), e;
} } }, createDefaultAppearanceStream: function(i2) {
  var e = i2.scope.internal.getFont(i2.fontName, i2.fontStyle).id, n = i2.scope.__private__.encodeColorString(i2.color);
  return "/" + e + " " + i2.fontSize + " Tf " + n;
} };
Bt.internal = { Bezier_C: 0.551915024494, calculateCross: function(i2) {
  var e = Bt.internal.getWidth(i2), n = Bt.internal.getHeight(i2), a = Math.min(e, n);
  return { x1: { x: (e - a) / 2, y: (n - a) / 2 + a }, x2: { x: (e - a) / 2 + a, y: (n - a) / 2 }, x3: { x: (e - a) / 2, y: (n - a) / 2 }, x4: { x: (e - a) / 2 + a, y: (n - a) / 2 + a } };
} }, Bt.internal.getWidth = function(i2) {
  var e = 0;
  return fe(i2) === "object" && (e = lc(i2.Rect[2])), e;
}, Bt.internal.getHeight = function(i2) {
  var e = 0;
  return fe(i2) === "object" && (e = lc(i2.Rect[3])), e;
};
var Ku = Pe.addField = function(i2) {
  if (Xu(this, i2), !(i2 instanceof qn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var e;
  return (e = i2).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = false, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), i2.page = i2.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Pe.AcroFormChoiceField = Si, Pe.AcroFormListBox = _i, Pe.AcroFormComboBox = Pi, Pe.AcroFormEditBox = to, Pe.AcroFormButton = Ue, Pe.AcroFormPushButton = eo, Pe.AcroFormRadioButton = ki, Pe.AcroFormCheckBox = no, Pe.AcroFormTextField = Wr, Pe.AcroFormPasswordField = ro, Pe.AcroFormAppearance = Bt, Pe.AcroForm = { ChoiceField: Si, ListBox: _i, ComboBox: Pi, EditBox: to, Button: Ue, PushButton: eo, RadioButton: ki, CheckBox: no, TextField: Wr, PasswordField: ro, Appearance: Bt }, Ht.AcroForm = { ChoiceField: Si, ListBox: _i, ComboBox: Pi, EditBox: to, Button: Ue, PushButton: eo, RadioButton: ki, CheckBox: no, TextField: Wr, PasswordField: ro, Appearance: Bt };
function Mc(i2) {
  return i2.reduce(function(e, n, a) {
    return e[n] = a, e;
  }, {});
}
(function(i2) {
  i2.__addimage__ = {};
  var e = "UNKNOWN", n = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a = i2.__addimage__.getImageFileTypeByImageData = function(F, P) {
    var z, D, at, nt, lt, Q = e;
    if ((P = P || e) === "RGBA" || F.data !== void 0 && F.data instanceof Uint8ClampedArray && "height" in F && "width" in F) return "RGBA";
    if (wt(F)) for (lt in n) for (at = n[lt], z = 0; z < at.length; z += 1) {
      for (nt = true, D = 0; D < at[z].length; D += 1) if (at[z][D] !== void 0 && at[z][D] !== F[D]) {
        nt = false;
        break;
      }
      if (nt === true) {
        Q = lt;
        break;
      }
    }
    else for (lt in n) for (at = n[lt], z = 0; z < at.length; z += 1) {
      for (nt = true, D = 0; D < at[z].length; D += 1) if (at[z][D] !== void 0 && at[z][D] !== F.charCodeAt(D)) {
        nt = false;
        break;
      }
      if (nt === true) {
        Q = lt;
        break;
      }
    }
    return Q === e && P !== e && (Q = P), Q;
  }, c = function F(P) {
    for (var z = this.internal.write, D = this.internal.putStream, at = (0, this.internal.getFilters)(); at.indexOf("FlateEncode") !== -1; ) at.splice(at.indexOf("FlateEncode"), 1);
    P.objectId = this.internal.newObject();
    var nt = [];
    if (nt.push({ key: "Type", value: "/XObject" }), nt.push({ key: "Subtype", value: "/Image" }), nt.push({ key: "Width", value: P.width }), nt.push({ key: "Height", value: P.height }), P.colorSpace === q.INDEXED ? nt.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (P.palette.length / 3 - 1) + " " + ("sMask" in P && P.sMask !== void 0 ? P.objectId + 2 : P.objectId + 1) + " 0 R]" }) : (nt.push({ key: "ColorSpace", value: "/" + P.colorSpace }), P.colorSpace === q.DEVICE_CMYK && nt.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), nt.push({ key: "BitsPerComponent", value: P.bitsPerComponent }), "decodeParameters" in P && P.decodeParameters !== void 0 && nt.push({ key: "DecodeParms", value: "<<" + P.decodeParameters + ">>" }), "transparency" in P && Array.isArray(P.transparency)) {
      for (var lt = "", Q = 0, ft = P.transparency.length; Q < ft; Q++) lt += P.transparency[Q] + " " + P.transparency[Q] + " ";
      nt.push({ key: "Mask", value: "[" + lt + "]" });
    }
    P.sMask !== void 0 && nt.push({ key: "SMask", value: P.objectId + 1 + " 0 R" });
    var ht = P.filter !== void 0 ? ["/" + P.filter] : void 0;
    if (D({ data: P.data, additionalKeyValues: nt, alreadyAppliedFilters: ht, objectId: P.objectId }), z("endobj"), "sMask" in P && P.sMask !== void 0) {
      var kt = "/Predictor " + P.predictor + " /Colors 1 /BitsPerComponent " + P.bitsPerComponent + " /Columns " + P.width, L = { width: P.width, height: P.height, colorSpace: "DeviceGray", bitsPerComponent: P.bitsPerComponent, decodeParameters: kt, data: P.sMask };
      "filter" in P && (L.filter = P.filter), F.call(this, L);
    }
    if (P.colorSpace === q.INDEXED) {
      var j = this.internal.newObject();
      D({ data: R(new Uint8Array(P.palette)), objectId: j }), z("endobj");
    }
  }, o = function() {
    var F = this.internal.collections.addImage_images;
    for (var P in F) c.call(this, F[P]);
  }, l = function() {
    var F, P = this.internal.collections.addImage_images, z = this.internal.write;
    for (var D in P) z("/I" + (F = P[D]).index, F.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", l));
  }, f = function() {
    var F = this.internal.collections.addImage_images;
    return h.call(this), F;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, b = function(F) {
    return typeof i2["process" + F.toUpperCase()] == "function";
  }, A = function(F) {
    return fe(F) === "object" && F.nodeType === 1;
  }, S = function(F, P) {
    if (F.nodeName === "IMG" && F.hasAttribute("src")) {
      var z = "" + F.getAttribute("src");
      if (z.indexOf("data:image/") === 0) return oa(unescape(z).split("base64,").pop());
      var D = i2.loadFile(z, true);
      if (D !== void 0) return D;
    }
    if (F.nodeName === "CANVAS") {
      if (F.width === 0 || F.height === 0) throw new Error("Given canvas must have data. Canvas width: " + F.width + ", height: " + F.height);
      var at;
      switch (P) {
        case "PNG":
          at = "image/png";
          break;
        case "WEBP":
          at = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          at = "image/jpeg";
      }
      return oa(F.toDataURL(at, 1).split("base64,").pop());
    }
  }, p = function(F) {
    var P = this.internal.collections.addImage_images;
    if (P) {
      for (var z in P) if (F === P[z].alias) return P[z];
    }
  }, O = function(F, P, z) {
    return F || P || (F = -96, P = -96), F < 0 && (F = -1 * z.width * 72 / F / this.internal.scaleFactor), P < 0 && (P = -1 * z.height * 72 / P / this.internal.scaleFactor), F === 0 && (F = P * z.width / z.height), P === 0 && (P = F * z.height / z.width), [F, P];
  }, I = function(F, P, z, D, at, nt) {
    var lt = O.call(this, z, D, at), Q = this.internal.getCoordinateString, ft = this.internal.getVerticalCoordinateString, ht = f.call(this);
    if (z = lt[0], D = lt[1], ht[at.index] = at, nt) {
      nt *= Math.PI / 180;
      var kt = Math.cos(nt), L = Math.sin(nt), j = function(W) {
        return W.toFixed(4);
      }, B = [j(kt), j(L), j(-1 * L), j(kt), 0, 0, "cm"];
    }
    this.internal.write("q"), nt ? (this.internal.write([1, "0", "0", 1, Q(F), ft(P + D), "cm"].join(" ")), this.internal.write(B.join(" ")), this.internal.write([Q(z), "0", "0", Q(D), "0", "0", "cm"].join(" "))) : this.internal.write([Q(z), "0", "0", Q(D), Q(F), ft(P + D), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + at.index + " Do"), this.internal.write("Q");
  }, q = i2.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  i2.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var _ = i2.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, M = i2.__addimage__.sHashCode = function(F) {
    var P, z, D = 0;
    if (typeof F == "string") for (z = F.length, P = 0; P < z; P++) D = (D << 5) - D + F.charCodeAt(P), D |= 0;
    else if (wt(F)) for (z = F.byteLength / 2, P = 0; P < z; P++) D = (D << 5) - D + F[P], D |= 0;
    return D;
  }, X = i2.__addimage__.validateStringAsBase64 = function(F) {
    (F = F || "").toString().trim();
    var P = true;
    return F.length === 0 && (P = false), F.length % 4 != 0 && (P = false), /^[A-Za-z0-9+/]+$/.test(F.substr(0, F.length - 2)) === false && (P = false), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(F.substr(-2)) === false && (P = false), P;
  }, ot = i2.__addimage__.extractImageFromDataUrl = function(F) {
    var P = (F = F || "").split("base64,"), z = null;
    if (P.length === 2) {
      var D = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(P[0]);
      Array.isArray(D) && (z = { mimeType: D[1], charset: D[2], data: P[1] });
    }
    return z;
  }, ut = i2.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  i2.__addimage__.isArrayBuffer = function(F) {
    return ut() && F instanceof ArrayBuffer;
  };
  var wt = i2.__addimage__.isArrayBufferView = function(F) {
    return ut() && typeof Uint32Array < "u" && (F instanceof Int8Array || F instanceof Uint8Array || typeof Uint8ClampedArray < "u" && F instanceof Uint8ClampedArray || F instanceof Int16Array || F instanceof Uint16Array || F instanceof Int32Array || F instanceof Uint32Array || F instanceof Float32Array || F instanceof Float64Array);
  }, tt = i2.__addimage__.binaryStringToUint8Array = function(F) {
    for (var P = F.length, z = new Uint8Array(P), D = 0; D < P; D++) z[D] = F.charCodeAt(D);
    return z;
  }, R = i2.__addimage__.arrayBufferToBinaryString = function(F) {
    for (var P = "", z = wt(F) ? F : new Uint8Array(F), D = 0; D < z.length; D += 8192) P += String.fromCharCode.apply(null, z.subarray(D, D + 8192));
    return P;
  };
  i2.addImage = function() {
    var F, P, z, D, at, nt, lt, Q, ft;
    if (typeof arguments[1] == "number" ? (P = e, z = arguments[1], D = arguments[2], at = arguments[3], nt = arguments[4], lt = arguments[5], Q = arguments[6], ft = arguments[7]) : (P = arguments[1], z = arguments[2], D = arguments[3], at = arguments[4], nt = arguments[5], lt = arguments[6], Q = arguments[7], ft = arguments[8]), fe(F = arguments[0]) === "object" && !A(F) && "imageData" in F) {
      var ht = F;
      F = ht.imageData, P = ht.format || P || e, z = ht.x || z || 0, D = ht.y || D || 0, at = ht.w || ht.width || at, nt = ht.h || ht.height || nt, lt = ht.alias || lt, Q = ht.compression || Q, ft = ht.rotation || ht.angle || ft;
    }
    var kt = this.internal.getFilters();
    if (Q === void 0 && kt.indexOf("FlateEncode") !== -1 && (Q = "SLOW"), isNaN(z) || isNaN(D)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var L = gt.call(this, F, P, lt, Q);
    return I.call(this, z, D, at, nt, L, ft), this;
  };
  var gt = function(F, P, z, D) {
    var at, nt, lt;
    if (typeof F == "string" && a(F) === e) {
      F = unescape(F);
      var Q = dt(F, false);
      (Q !== "" || (Q = i2.loadFile(F, true)) !== void 0) && (F = Q);
    }
    if (A(F) && (F = S(F, P)), P = a(F, P), !b(P)) throw new Error("addImage does not support files of type '" + P + "', please ensure that a plugin for '" + P + "' support is added.");
    if (((lt = z) == null || lt.length === 0) && (z = function(ft) {
      return typeof ft == "string" || wt(ft) ? M(ft) : wt(ft.data) ? M(ft.data) : null;
    }(F)), (at = p.call(this, z)) || (ut() && (F instanceof Uint8Array || P === "RGBA" || (nt = F, F = tt(F))), at = this["process" + P.toUpperCase()](F, g.call(this), z, function(ft) {
      return ft && typeof ft == "string" && (ft = ft.toUpperCase()), ft in i2.image_compression ? ft : _.NONE;
    }(D), nt)), !at) throw new Error("An unknown error occurred whilst processing the image.");
    return at;
  }, dt = i2.__addimage__.convertBase64ToBinaryString = function(F, P) {
    var z;
    P = typeof P != "boolean" || P;
    var D, at = "";
    if (typeof F == "string") {
      D = (z = ot(F)) !== null ? z.data : F;
      try {
        at = oa(D);
      } catch (nt) {
        if (P) throw X(D) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + nt.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return at;
  };
  i2.getImageProperties = function(F) {
    var P, z, D = "";
    if (A(F) && (F = S(F)), typeof F == "string" && a(F) === e && ((D = dt(F, false)) === "" && (D = i2.loadFile(F) || ""), F = D), z = a(F), !b(z)) throw new Error("addImage does not support files of type '" + z + "', please ensure that a plugin for '" + z + "' support is added.");
    if (!ut() || F instanceof Uint8Array || (F = tt(F)), !(P = this["process" + z.toUpperCase()](F))) throw new Error("An unknown error occurred whilst processing the image");
    return P.fileType = z, P;
  };
})(Ht.API), /**
* @license
* Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = function(n) {
    if (n !== void 0 && n != "") return true;
  };
  Ht.API.events.push(["addPage", function(n) {
    this.internal.getPageInfo(n.pageNumber).pageContext.annotations = [];
  }]), i2.events.push(["putPage", function(n) {
    for (var a, c, o, l = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(n.objId), g = n.pageContext.annotations, b = false, A = 0; A < g.length && !b; A++) switch ((a = g[A]).type) {
      case "link":
        (e(a.options.url) || e(a.options.pageNumber)) && (b = true);
        break;
      case "reference":
      case "text":
      case "freetext":
        b = true;
    }
    if (b != 0) {
      this.internal.write("/Annots [");
      for (var S = 0; S < g.length; S++) {
        a = g[S];
        var p = this.internal.pdfEscape, O = this.internal.getEncryptor(n.objId);
        switch (a.type) {
          case "reference":
            this.internal.write(" " + a.object.objId + " 0 R ");
            break;
          case "text":
            var I = this.internal.newAdditionalObject(), q = this.internal.newAdditionalObject(), _ = this.internal.getEncryptor(I.objId), M = a.title || "Note";
            o = "<</Type /Annot /Subtype /Text " + (c = "/Rect [" + l(a.bounds.x) + " " + h(a.bounds.y + a.bounds.h) + " " + l(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y) + "] ") + "/Contents (" + p(_(a.contents)) + ")", o += " /Popup " + q.objId + " 0 R", o += " /P " + f.objId + " 0 R", o += " /T (" + p(_(M)) + ") >>", I.content = o;
            var X = I.objId + " 0 R";
            o = "<</Type /Annot /Subtype /Popup " + (c = "/Rect [" + l(a.bounds.x + 30) + " " + h(a.bounds.y + a.bounds.h) + " " + l(a.bounds.x + a.bounds.w + 30) + " " + h(a.bounds.y) + "] ") + " /Parent " + X, a.open && (o += " /Open true"), o += " >>", q.content = o, this.internal.write(I.objId, "0 R", q.objId, "0 R");
            break;
          case "freetext":
            c = "/Rect [" + l(a.bounds.x) + " " + h(a.bounds.y) + " " + l(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y + a.bounds.h) + "] ";
            var ot = a.color || "#000000";
            o = "<</Type /Annot /Subtype /FreeText " + c + "/Contents (" + p(O(a.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + ot + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
            break;
          case "link":
            if (a.options.name) {
              var ut = this.annotations._nameMap[a.options.name];
              a.options.pageNumber = ut.page, a.options.top = ut.y;
            } else a.options.top || (a.options.top = 0);
            if (c = "/Rect [" + a.finalBounds.x + " " + a.finalBounds.y + " " + a.finalBounds.w + " " + a.finalBounds.h + "] ", o = "", a.options.url) o = "<</Type /Annot /Subtype /Link " + c + "/Border [0 0 0] /A <</S /URI /URI (" + p(O(a.options.url)) + ") >>";
            else if (a.options.pageNumber)
              switch (o = "<</Type /Annot /Subtype /Link " + c + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                case "Fit":
                  o += " /Fit]";
                  break;
                case "FitH":
                  o += " /FitH " + a.options.top + "]";
                  break;
                case "FitV":
                  a.options.left = a.options.left || 0, o += " /FitV " + a.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var wt = h(a.options.top);
                  a.options.left = a.options.left || 0, a.options.zoom === void 0 && (a.options.zoom = 0), o += " /XYZ " + a.options.left + " " + wt + " " + a.options.zoom + "]";
              }
            o != "" && (o += " >>", this.internal.write(o));
        }
      }
      this.internal.write("]");
    }
  }]), i2.createAnnotation = function(n) {
    var a = this.internal.getCurrentPageInfo();
    switch (n.type) {
      case "link":
        this.link(n.bounds.x, n.bounds.y, n.bounds.w, n.bounds.h, n);
        break;
      case "text":
      case "freetext":
        a.pageContext.annotations.push(n);
    }
  }, i2.link = function(n, a, c, o, l) {
    var h = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: f(n), y: g(a), w: f(n + c), h: g(a + o) }, options: l, type: "link" });
  }, i2.textWithLink = function(n, a, c, o) {
    var l, h, f = this.getTextWidth(n), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (o.maxWidth !== void 0) {
      h = o.maxWidth;
      var b = this.splitTextToSize(n, h).length;
      l = Math.ceil(g * b);
    } else h = f, l = g;
    return this.text(n, a, c, o), c += 0.2 * g, o.align === "center" && (a -= f / 2), o.align === "right" && (a -= f), this.link(a, c - g, h, l, o), f;
  }, i2.getTextWidth = function(n) {
    var a = this.internal.getFontSize();
    return this.getStringUnitWidth(n) * a / this.internal.scaleFactor;
  };
}(Ht.API), /**
* @license
* Copyright (c) 2017 Aras Abbasi
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, n = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, a = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, c = [1570, 1571, 1573, 1575];
  i2.__arabicParser__ = {};
  var o = i2.__arabicParser__.isInArabicSubstitutionA = function(I) {
    return e[I.charCodeAt(0)] !== void 0;
  }, l = i2.__arabicParser__.isArabicLetter = function(I) {
    return typeof I == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(I);
  }, h = i2.__arabicParser__.isArabicEndLetter = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length <= 2;
  }, f = i2.__arabicParser__.isArabicAlfLetter = function(I) {
    return l(I) && c.indexOf(I.charCodeAt(0)) >= 0;
  };
  i2.__arabicParser__.arabicLetterHasIsolatedForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length >= 1;
  };
  var g = i2.__arabicParser__.arabicLetterHasFinalForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length >= 2;
  };
  i2.__arabicParser__.arabicLetterHasInitialForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length >= 3;
  };
  var b = i2.__arabicParser__.arabicLetterHasMedialForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length == 4;
  }, A = i2.__arabicParser__.resolveLigatures = function(I) {
    var q = 0, _ = n, M = "", X = 0;
    for (q = 0; q < I.length; q += 1) _[I.charCodeAt(q)] !== void 0 ? (X++, typeof (_ = _[I.charCodeAt(q)]) == "number" && (M += String.fromCharCode(_), _ = n, X = 0), q === I.length - 1 && (_ = n, M += I.charAt(q - (X - 1)), q -= X - 1, X = 0)) : (_ = n, M += I.charAt(q - X), q -= X, X = 0);
    return M;
  };
  i2.__arabicParser__.isArabicDiacritic = function(I) {
    return I !== void 0 && a[I.charCodeAt(0)] !== void 0;
  };
  var S = i2.__arabicParser__.getCorrectForm = function(I, q, _) {
    return l(I) ? o(I) === false ? -1 : !g(I) || !l(q) && !l(_) || !l(_) && h(q) || h(I) && !l(q) || h(I) && f(q) || h(I) && h(q) ? 0 : b(I) && l(q) && !h(q) && l(_) && g(_) ? 3 : h(I) || !l(_) ? 1 : 2 : -1;
  }, p = function(I) {
    var q = 0, _ = 0, M = 0, X = "", ot = "", ut = "", wt = (I = I || "").split("\\s+"), tt = [];
    for (q = 0; q < wt.length; q += 1) {
      for (tt.push(""), _ = 0; _ < wt[q].length; _ += 1) X = wt[q][_], ot = wt[q][_ - 1], ut = wt[q][_ + 1], l(X) ? (M = S(X, ot, ut), tt[q] += M !== -1 ? String.fromCharCode(e[X.charCodeAt(0)][M]) : X) : tt[q] += X;
      tt[q] = A(tt[q]);
    }
    return tt.join(" ");
  }, O = i2.__arabicParser__.processArabic = i2.processArabic = function() {
    var I, q = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, _ = [];
    if (Array.isArray(q)) {
      var M = 0;
      for (_ = [], M = 0; M < q.length; M += 1) Array.isArray(q[M]) ? _.push([p(q[M][0]), q[M][1], q[M][2]]) : _.push([p(q[M])]);
      I = _;
    } else I = p(q);
    return typeof arguments[0] == "string" ? I : (arguments[0].text = I, arguments[0]);
  };
  i2.events.push(["preProcessText", O]);
}(Ht.API), Ht.API.autoPrint = function(i2) {
  var e;
  switch ((i2 = i2 || {}).variant = i2.variant || "non-conform", i2.variant) {
    case "javascript":
      this.addJS("print({});");
      break;
    case "non-conform":
    default:
      this.internal.events.subscribe("postPutResources", function() {
        e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + e + " 0 R");
      });
  }
  return this;
}, /**
* @license
* Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = function() {
    var n = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return n;
    }, set: function(h) {
      n = h;
    } });
    var a = 150;
    Object.defineProperty(this, "width", { get: function() {
      return a;
    }, set: function(h) {
      a = isNaN(h) || Number.isInteger(h) === false || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = a + 1);
    } });
    var c = 300;
    Object.defineProperty(this, "height", { get: function() {
      return c;
    }, set: function(h) {
      c = isNaN(h) || Number.isInteger(h) === false || h < 0 ? 300 : h, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = c + 1);
    } });
    var o = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return o;
    }, set: function(h) {
      o = h;
    } });
    var l = {};
    Object.defineProperty(this, "style", { get: function() {
      return l;
    }, set: function(h) {
      l = h;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  e.prototype.getContext = function(n, a) {
    var c;
    if ((n = n || "2d") !== "2d") return null;
    for (c in a) this.pdf.context2d.hasOwnProperty(c) && (this.pdf.context2d[c] = a[c]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, e.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, i2.events.push(["initialized", function() {
    this.canvas = new e(), this.canvas.pdf = this;
  }]);
}(Ht.API), function(i2) {
  var e = { left: 0, top: 0, bottom: 0, right: 0 }, n = false, a = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), c.call(this));
  }, c = function() {
    this.internal.__cell__.lastCell = new o(), this.internal.__cell__.pages = 1;
  }, o = function() {
    var f = arguments[0];
    Object.defineProperty(this, "x", { enumerable: true, get: function() {
      return f;
    }, set: function(I) {
      f = I;
    } });
    var g = arguments[1];
    Object.defineProperty(this, "y", { enumerable: true, get: function() {
      return g;
    }, set: function(I) {
      g = I;
    } });
    var b = arguments[2];
    Object.defineProperty(this, "width", { enumerable: true, get: function() {
      return b;
    }, set: function(I) {
      b = I;
    } });
    var A = arguments[3];
    Object.defineProperty(this, "height", { enumerable: true, get: function() {
      return A;
    }, set: function(I) {
      A = I;
    } });
    var S = arguments[4];
    Object.defineProperty(this, "text", { enumerable: true, get: function() {
      return S;
    }, set: function(I) {
      S = I;
    } });
    var p = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: true, get: function() {
      return p;
    }, set: function(I) {
      p = I;
    } });
    var O = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: true, get: function() {
      return O;
    }, set: function(I) {
      O = I;
    } }), this;
  };
  o.prototype.clone = function() {
    return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, o.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, i2.setHeaderFunction = function(f) {
    return a.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, i2.getTextDimensions = function(f, g) {
    a.call(this);
    var b = (g = g || {}).fontSize || this.getFontSize(), A = g.font || this.getFont(), S = g.scaleFactor || this.internal.scaleFactor, p = 0, O = 0, I = 0, q = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var _ = g.maxWidth;
    _ > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, _) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(X, ot) {
      return X.concat(q.splitTextToSize(ot, _));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var M = 0; M < f.length; M++) p < (I = this.getStringUnitWidth(f[M], { font: A }) * b) && (p = I);
    return p !== 0 && (O = f.length), { w: p /= S, h: Math.max((O * b * this.getLineHeightFactor() - b * (this.getLineHeightFactor() - 1)) / S, 0) };
  }, i2.cellAddPage = function() {
    a.call(this), this.addPage();
    var f = this.internal.__cell__.margins || e;
    return this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var l = i2.cell = function() {
    var f;
    f = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), a.call(this);
    var g = this.internal.__cell__.lastCell, b = this.internal.__cell__.padding, A = this.internal.__cell__.margins || e, S = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === f.lineNumber ? (f.x = (g.x || 0) + (g.width || 0), f.y = g.y || 0) : g.y + g.height + f.height + A.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = A.top, p && S && (this.printHeaderRow(f.lineNumber, true), f.y += S[0].height)) : f.y = g.y + g.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, n === true ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - b, f.y + b, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + b, { align: "center", baseline: "top", maxWidth: f.width - b - b }) : this.text(f.text, f.x + b, f.y + b, { align: "left", baseline: "top", maxWidth: f.width - b - b })), this.internal.__cell__.lastCell = f, this;
  };
  i2.table = function(f, g, b, A, S) {
    if (a.call(this), !b) throw new Error("No data for PDF table.");
    var p, O, I, q, _ = [], M = [], X = [], ot = {}, ut = {}, wt = [], tt = [], R = (S = S || {}).autoSize || false, gt = S.printHeaders !== false, dt = S.css && S.css["font-size"] !== void 0 ? 16 * S.css["font-size"] : S.fontSize || 12, F = S.margins || Object.assign({ width: this.getPageWidth() }, e), P = typeof S.padding == "number" ? S.padding : 3, z = S.headerBackgroundColor || "#c8c8c8", D = S.headerTextColor || "#000";
    if (c.call(this), this.internal.__cell__.printHeaders = gt, this.internal.__cell__.margins = F, this.internal.__cell__.table_font_size = dt, this.internal.__cell__.padding = P, this.internal.__cell__.headerBackgroundColor = z, this.internal.__cell__.headerTextColor = D, this.setFontSize(dt), A == null) M = _ = Object.keys(b[0]), X = _.map(function() {
      return "left";
    });
    else if (Array.isArray(A) && fe(A[0]) === "object") for (_ = A.map(function(ht) {
      return ht.name;
    }), M = A.map(function(ht) {
      return ht.prompt || ht.name || "";
    }), X = A.map(function(ht) {
      return ht.align || "left";
    }), p = 0; p < A.length; p += 1) ut[A[p].name] = A[p].width * (19.049976 / 25.4);
    else Array.isArray(A) && typeof A[0] == "string" && (M = _ = A, X = _.map(function() {
      return "left";
    }));
    if (R || Array.isArray(A) && typeof A[0] == "string") for (p = 0; p < _.length; p += 1) {
      for (ot[q = _[p]] = b.map(function(ht) {
        return ht[q];
      }), this.setFont(void 0, "bold"), wt.push(this.getTextDimensions(M[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), O = ot[q], this.setFont(void 0, "normal"), I = 0; I < O.length; I += 1) wt.push(this.getTextDimensions(O[I], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      ut[q] = Math.max.apply(null, wt) + P + P, wt = [];
    }
    if (gt) {
      var at = {};
      for (p = 0; p < _.length; p += 1) at[_[p]] = {}, at[_[p]].text = M[p], at[_[p]].align = X[p];
      var nt = h.call(this, at, ut);
      tt = _.map(function(ht) {
        return new o(f, g, ut[ht], nt, at[ht].text, void 0, at[ht].align);
      }), this.setTableHeaderRow(tt), this.printHeaderRow(1, false);
    }
    var lt = A.reduce(function(ht, kt) {
      return ht[kt.name] = kt.align, ht;
    }, {});
    for (p = 0; p < b.length; p += 1) {
      "rowStart" in S && S.rowStart instanceof Function && S.rowStart({ row: p, data: b[p] }, this);
      var Q = h.call(this, b[p], ut);
      for (I = 0; I < _.length; I += 1) {
        var ft = b[p][_[I]];
        "cellStart" in S && S.cellStart instanceof Function && S.cellStart({ row: p, col: I, data: ft }, this), l.call(this, new o(f, g, ut[_[I]], Q, ft, p + 2, lt[_[I]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = g, this;
  };
  var h = function(f, g) {
    var b = this.internal.__cell__.padding, A = this.internal.__cell__.table_font_size, S = this.internal.scaleFactor;
    return Object.keys(f).map(function(p) {
      var O = f[p];
      return this.splitTextToSize(O.hasOwnProperty("text") ? O.text : O, g[p] - b - b);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * A / S + b + b;
    }, this).reduce(function(p, O) {
      return Math.max(p, O);
    }, 0);
  };
  i2.setTableHeaderRow = function(f) {
    a.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, i2.printHeaderRow = function(f, g) {
    if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var b;
    if (n = true, typeof this.internal.__cell__.headerFunction == "function") {
      var A = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o(A[0], A[1], A[2], A[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var S = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      b = this.internal.__cell__.tableHeaderRow[p].clone(), g && (b.y = this.internal.__cell__.margins.top || 0, S.push(b)), b.lineNumber = f;
      var O = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), l.call(this, b), this.setTextColor(O);
    }
    S.length > 0 && this.setTableHeaderRow(S), this.setFont(void 0, "normal"), n = false;
  };
}(Ht.API);
var Bc = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] };
var Ec = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"];
var ws = Mc(Ec);
var qc = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var Zu = Mc(qc);
function ys(i2) {
  var e = i2.family.replace(/"|'/g, "").toLowerCase(), n = function(o) {
    return Bc[o = o || "normal"] ? o : "normal";
  }(i2.style), a = function(o) {
    if (!o) return 400;
    if (typeof o == "number") return o >= 100 && o <= 900 && o % 100 == 0 ? o : 400;
    if (/^\d00$/.test(o)) return parseInt(o);
    switch (o) {
      case "bold":
        return 700;
      case "normal":
      default:
        return 400;
    }
  }(i2.weight), c = function(o) {
    return typeof ws[o = o || "normal"] == "number" ? o : "normal";
  }(i2.stretch);
  return { family: e, style: n, weight: a, stretch: c, src: i2.src || [], ref: i2.ref || { name: e, style: [c, n, a].join(" ") } };
}
function hc(i2, e, n, a) {
  var c;
  for (c = n; c >= 0 && c < e.length; c += a) if (i2[e[c]]) return i2[e[c]];
  for (c = n; c >= 0 && c < e.length; c -= a) if (i2[e[c]]) return i2[e[c]];
}
var Qu = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" };
var fc = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function dc(i2) {
  return [i2.stretch, i2.style, i2.weight, i2.family].join(" ");
}
function $u(i2, e, n) {
  for (var a = (n = n || {}).defaultFontFamily || "times", c = Object.assign({}, Qu, n.genericFontFamilies || {}), o = null, l = null, h = 0; h < e.length; ++h) if (c[(o = ys(e[h])).family] && (o.family = c[o.family]), i2.hasOwnProperty(o.family)) {
    l = i2[o.family];
    break;
  }
  if (!(l = l || i2[a])) throw new Error("Could not find a font-family for the rule '" + dc(o) + "' and default family '" + a + "'.");
  if (l = function(f, g) {
    if (g[f]) return g[f];
    var b = ws[f], A = b <= ws.normal ? -1 : 1, S = hc(g, Ec, b, A);
    if (!S) throw new Error("Could not find a matching font-stretch value for " + f);
    return S;
  }(o.stretch, l), l = function(f, g) {
    if (g[f]) return g[f];
    for (var b = Bc[f], A = 0; A < b.length; ++A) if (g[b[A]]) return g[b[A]];
    throw new Error("Could not find a matching font-style for " + f);
  }(o.style, l), !(l = function(f, g) {
    if (g[f]) return g[f];
    if (f === 400 && g[500]) return g[500];
    if (f === 500 && g[400]) return g[400];
    var b = Zu[f], A = hc(g, qc, b, f < 400 ? -1 : 1);
    if (!A) throw new Error("Could not find a matching font-weight for value " + f);
    return A;
  }(o.weight, l))) throw new Error("Failed to resolve a font for the rule '" + dc(o) + "'.");
  return l;
}
function pc(i2) {
  return i2.trimLeft();
}
function t1(i2, e) {
  for (var n = 0; n < i2.length; ) {
    if (i2.charAt(n) === e) return [i2.substring(0, n), i2.substring(n + 1)];
    n += 1;
  }
  return null;
}
function e1(i2) {
  var e = i2.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return e === null ? null : [e[0], i2.substring(e[0].length)];
}
var Qa;
var gc;
var mc;
var ss = ["times"];
(function(i2) {
  var e, n, a, c, o, l, h, f, g, b = function(L) {
    return L = L || {}, this.isStrokeTransparent = L.isStrokeTransparent || false, this.strokeOpacity = L.strokeOpacity || 1, this.strokeStyle = L.strokeStyle || "#000000", this.fillStyle = L.fillStyle || "#000000", this.isFillTransparent = L.isFillTransparent || false, this.fillOpacity = L.fillOpacity || 1, this.font = L.font || "10px sans-serif", this.textBaseline = L.textBaseline || "alphabetic", this.textAlign = L.textAlign || "left", this.lineWidth = L.lineWidth || 1, this.lineJoin = L.lineJoin || "miter", this.lineCap = L.lineCap || "butt", this.path = L.path || [], this.transform = L.transform !== void 0 ? L.transform.clone() : new f(), this.globalCompositeOperation = L.globalCompositeOperation || "normal", this.globalAlpha = L.globalAlpha || 1, this.clip_path = L.clip_path || [], this.currentPoint = L.currentPoint || new l(), this.miterLimit = L.miterLimit || 10, this.lastPoint = L.lastPoint || new l(), this.lineDashOffset = L.lineDashOffset || 0, this.lineDash = L.lineDash || [], this.margin = L.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = L.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof L.ignoreClearRect != "boolean" || L.ignoreClearRect, this;
  };
  i2.events.push(["initialized", function() {
    this.context2d = new A(this), e = this.internal.f2, n = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, c = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, l = this.internal.Point, h = this.internal.Rectangle, f = this.internal.Matrix, g = new b();
  }]);
  var A = function(L) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: false, style: false };
    } });
    var j = L;
    Object.defineProperty(this, "pdf", { get: function() {
      return j;
    } });
    var B = false;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return B;
    }, set: function(ct) {
      B = !!ct;
    } });
    var W = false;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return W;
    }, set: function(ct) {
      W = !!ct;
    } });
    var Y = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return Y;
    }, set: function(ct) {
      isNaN(ct) || (Y = ct);
    } });
    var $ = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return $;
    }, set: function(ct) {
      isNaN(ct) || ($ = ct);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(ct) {
      var E;
      typeof ct == "number" ? E = [ct, ct, ct, ct] : ((E = new Array(4))[0] = ct[0], E[1] = ct.length >= 2 ? ct[1] : E[0], E[2] = ct.length >= 3 ? ct[2] : E[0], E[3] = ct.length >= 4 ? ct[3] : E[1]), g.margin = E;
    } });
    var et = false;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return et;
    }, set: function(ct) {
      et = ct;
    } });
    var rt = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return rt;
    }, set: function(ct) {
      rt = ct;
    } });
    var At = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return At;
    }, set: function(ct) {
      At = ct;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(ct) {
      ct instanceof b && (g = ct);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(ct) {
      g.path = ct;
    } });
    var Nt = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return Nt;
    }, set: function(ct) {
      Nt = ct;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(ct) {
      var E;
      E = S(ct), this.ctx.fillStyle = E.style, this.ctx.isFillTransparent = E.a === 0, this.ctx.fillOpacity = E.a, this.pdf.setFillColor(E.r, E.g, E.b, { a: E.a }), this.pdf.setTextColor(E.r, E.g, E.b, { a: E.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(ct) {
      var E = S(ct);
      this.ctx.strokeStyle = E.style, this.ctx.isStrokeTransparent = E.a === 0, this.ctx.strokeOpacity = E.a, E.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (E.a, this.pdf.setDrawColor(E.r, E.g, E.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(ct) {
      ["butt", "round", "square"].indexOf(ct) !== -1 && (this.ctx.lineCap = ct, this.pdf.setLineCap(ct));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(ct) {
      isNaN(ct) || (this.ctx.lineWidth = ct, this.pdf.setLineWidth(ct));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(ct) {
      ["bevel", "round", "miter"].indexOf(ct) !== -1 && (this.ctx.lineJoin = ct, this.pdf.setLineJoin(ct));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(ct) {
      isNaN(ct) || (this.ctx.miterLimit = ct, this.pdf.setMiterLimit(ct));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(ct) {
      this.ctx.textBaseline = ct;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(ct) {
      ["right", "end", "center", "left", "start"].indexOf(ct) !== -1 && (this.ctx.textAlign = ct);
    } });
    var Ct = null;
    function Mt(ct, E) {
      if (Ct === null) {
        var Xt = function(Et) {
          var Lt = [];
          return Object.keys(Et).forEach(function(xt) {
            Et[xt].forEach(function(Ft) {
              var Pt = null;
              switch (Ft) {
                case "bold":
                  Pt = { family: xt, weight: "bold" };
                  break;
                case "italic":
                  Pt = { family: xt, style: "italic" };
                  break;
                case "bolditalic":
                  Pt = { family: xt, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  Pt = { family: xt };
              }
              Pt !== null && (Pt.ref = { name: xt, style: Ft }, Lt.push(Pt));
            });
          }), Lt;
        }(ct.getFontList());
        Ct = function(Et) {
          for (var Lt = {}, xt = 0; xt < Et.length; ++xt) {
            var Ft = ys(Et[xt]), Pt = Ft.family, qt = Ft.stretch, Gt = Ft.style, Qt = Ft.weight;
            Lt[Pt] = Lt[Pt] || {}, Lt[Pt][qt] = Lt[Pt][qt] || {}, Lt[Pt][qt][Gt] = Lt[Pt][qt][Gt] || {}, Lt[Pt][qt][Gt][Qt] = Ft;
          }
          return Lt;
        }(Xt.concat(E));
      }
      return Ct;
    }
    var zt = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return zt;
    }, set: function(ct) {
      Ct = null, zt = ct;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(ct) {
      var E;
      if (this.ctx.font = ct, (E = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ct)) !== null) {
        var Xt = E[1], Et = (E[2], E[3]), Lt = E[4], xt = (E[5], E[6]), Ft = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Lt)[2];
        Lt = Math.floor(Ft === "px" ? parseFloat(Lt) * this.pdf.internal.scaleFactor : Ft === "em" ? parseFloat(Lt) * this.pdf.getFontSize() : parseFloat(Lt) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Lt);
        var Pt = function(Wt) {
          var ee, It, Ve = [], oe = Wt.trim();
          if (oe === "") return ss;
          if (oe in fc) return [fc[oe]];
          for (; oe !== ""; ) {
            switch (It = null, ee = (oe = pc(oe)).charAt(0)) {
              case '"':
              case "'":
                It = t1(oe.substring(1), ee);
                break;
              default:
                It = e1(oe);
            }
            if (It === null || (Ve.push(It[0]), (oe = pc(It[1])) !== "" && oe.charAt(0) !== ",")) return ss;
            oe = oe.replace(/^,/, "");
          }
          return Ve;
        }(xt);
        if (this.fontFaces) {
          var qt = $u(Mt(this.pdf, this.fontFaces), Pt.map(function(Wt) {
            return { family: Wt, stretch: "normal", weight: Et, style: Xt };
          }));
          this.pdf.setFont(qt.ref.name, qt.ref.style);
        } else {
          var Gt = "";
          (Et === "bold" || parseInt(Et, 10) >= 700 || Xt === "bold") && (Gt = "bold"), Xt === "italic" && (Gt += "italic"), Gt.length === 0 && (Gt = "normal");
          for (var Qt = "", te = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, ie = 0; ie < Pt.length; ie++) {
            if (this.pdf.internal.getFont(Pt[ie], Gt, { noFallback: true, disableWarning: true }) !== void 0) {
              Qt = Pt[ie];
              break;
            }
            if (Gt === "bolditalic" && this.pdf.internal.getFont(Pt[ie], "bold", { noFallback: true, disableWarning: true }) !== void 0) Qt = Pt[ie], Gt = "bold";
            else if (this.pdf.internal.getFont(Pt[ie], "normal", { noFallback: true, disableWarning: true }) !== void 0) {
              Qt = Pt[ie], Gt = "normal";
              break;
            }
          }
          if (Qt === "") {
            for (var de = 0; de < Pt.length; de++) if (te[Pt[de]]) {
              Qt = te[Pt[de]];
              break;
            }
          }
          Qt = Qt === "" ? "Times" : Qt, this.pdf.setFont(Qt, Gt);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(ct) {
      this.ctx.globalCompositeOperation = ct;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(ct) {
      this.ctx.globalAlpha = ct;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(ct) {
      this.ctx.lineDashOffset = ct, kt.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(ct) {
      this.ctx.lineDash = ct, kt.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(ct) {
      this.ctx.ignoreClearRect = !!ct;
    } });
  };
  A.prototype.setLineDash = function(L) {
    this.lineDash = L;
  }, A.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, A.prototype.fill = function() {
    ot.call(this, "fill", false);
  }, A.prototype.stroke = function() {
    ot.call(this, "stroke", false);
  }, A.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, A.prototype.moveTo = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var B = this.ctx.transform.applyToPoint(new l(L, j));
    this.path.push({ type: "mt", x: B.x, y: B.y }), this.ctx.lastPoint = new l(L, j);
  }, A.prototype.closePath = function() {
    var L = new l(0, 0), j = 0;
    for (j = this.path.length - 1; j !== -1; j--) if (this.path[j].type === "begin" && fe(this.path[j + 1]) === "object" && typeof this.path[j + 1].x == "number") {
      L = new l(this.path[j + 1].x, this.path[j + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new l(L.x, L.y);
  }, A.prototype.lineTo = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var B = this.ctx.transform.applyToPoint(new l(L, j));
    this.path.push({ type: "lt", x: B.x, y: B.y }), this.ctx.lastPoint = new l(B.x, B.y);
  }, A.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), ot.call(this, null, true);
  }, A.prototype.quadraticCurveTo = function(L, j, B, W) {
    if (isNaN(B) || isNaN(W) || isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var Y = this.ctx.transform.applyToPoint(new l(B, W)), $ = this.ctx.transform.applyToPoint(new l(L, j));
    this.path.push({ type: "qct", x1: $.x, y1: $.y, x: Y.x, y: Y.y }), this.ctx.lastPoint = new l(Y.x, Y.y);
  }, A.prototype.bezierCurveTo = function(L, j, B, W, Y, $) {
    if (isNaN(Y) || isNaN($) || isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W)) throw ve.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var et = this.ctx.transform.applyToPoint(new l(Y, $)), rt = this.ctx.transform.applyToPoint(new l(L, j)), At = this.ctx.transform.applyToPoint(new l(B, W));
    this.path.push({ type: "bct", x1: rt.x, y1: rt.y, x2: At.x, y2: At.y, x: et.x, y: et.y }), this.ctx.lastPoint = new l(et.x, et.y);
  }, A.prototype.arc = function(L, j, B, W, Y, $) {
    if (isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W) || isNaN(Y)) throw ve.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if ($ = !!$, !this.ctx.transform.isIdentity) {
      var et = this.ctx.transform.applyToPoint(new l(L, j));
      L = et.x, j = et.y;
      var rt = this.ctx.transform.applyToPoint(new l(0, B)), At = this.ctx.transform.applyToPoint(new l(0, 0));
      B = Math.sqrt(Math.pow(rt.x - At.x, 2) + Math.pow(rt.y - At.y, 2));
    }
    Math.abs(Y - W) >= 2 * Math.PI && (W = 0, Y = 2 * Math.PI), this.path.push({ type: "arc", x: L, y: j, radius: B, startAngle: W, endAngle: Y, counterclockwise: $ });
  }, A.prototype.arcTo = function(L, j, B, W, Y) {
    throw new Error("arcTo not implemented.");
  }, A.prototype.rect = function(L, j, B, W) {
    if (isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W)) throw ve.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(L, j), this.lineTo(L + B, j), this.lineTo(L + B, j + W), this.lineTo(L, j + W), this.lineTo(L, j), this.lineTo(L + B, j), this.lineTo(L, j);
  }, A.prototype.fillRect = function(L, j, B, W) {
    if (isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W)) throw ve.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var Y = {};
      this.lineCap !== "butt" && (Y.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Y.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(L, j, B, W), this.fill(), Y.hasOwnProperty("lineCap") && (this.lineCap = Y.lineCap), Y.hasOwnProperty("lineJoin") && (this.lineJoin = Y.lineJoin);
    }
  }, A.prototype.strokeRect = function(L, j, B, W) {
    if (isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W)) throw ve.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    O.call(this) || (this.beginPath(), this.rect(L, j, B, W), this.stroke());
  }, A.prototype.clearRect = function(L, j, B, W) {
    if (isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W)) throw ve.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(L, j, B, W));
  }, A.prototype.save = function(L) {
    L = typeof L != "boolean" || L;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, B = 0; B < this.pdf.internal.getNumberOfPages(); B++) this.pdf.setPage(B + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(j), L) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var W = new b(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = W;
    }
  }, A.prototype.restore = function(L) {
    L = typeof L != "boolean" || L;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, B = 0; B < this.pdf.internal.getNumberOfPages(); B++) this.pdf.setPage(B + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(j), L && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, A.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var S = function(L) {
    var j, B, W, Y;
    if (L.isCanvasGradient === true && (L = L.getColor()), !L) return { r: 0, g: 0, b: 0, a: 0, style: L };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L)) j = 0, B = 0, W = 0, Y = 0;
    else {
      var $ = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);
      if ($ !== null) j = parseInt($[1]), B = parseInt($[2]), W = parseInt($[3]), Y = 1;
      else if (($ = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L)) !== null) j = parseInt($[1]), B = parseInt($[2]), W = parseInt($[3]), Y = parseFloat($[4]);
      else {
        if (Y = 1, typeof L == "string" && L.charAt(0) !== "#") {
          var et = new kc(L);
          L = et.ok ? et.toHex() : "#000000";
        }
        L.length === 4 ? (j = L.substring(1, 2), j += j, B = L.substring(2, 3), B += B, W = L.substring(3, 4), W += W) : (j = L.substring(1, 3), B = L.substring(3, 5), W = L.substring(5, 7)), j = parseInt(j, 16), B = parseInt(B, 16), W = parseInt(W, 16);
      }
    }
    return { r: j, g: B, b: W, a: Y, style: L };
  }, p = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, O = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  A.prototype.fillText = function(L, j, B, W) {
    if (isNaN(j) || isNaN(B) || typeof L != "string") throw ve.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (W = isNaN(W) ? void 0 : W, !p.call(this)) {
      var Y = Q(this.ctx.transform.rotation), $ = this.ctx.transform.scaleX;
      P.call(this, { text: L, x: j, y: B, scale: $, angle: Y, align: this.textAlign, maxWidth: W });
    }
  }, A.prototype.strokeText = function(L, j, B, W) {
    if (isNaN(j) || isNaN(B) || typeof L != "string") throw ve.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!O.call(this)) {
      W = isNaN(W) ? void 0 : W;
      var Y = Q(this.ctx.transform.rotation), $ = this.ctx.transform.scaleX;
      P.call(this, { text: L, x: j, y: B, scale: $, renderingMode: "stroke", angle: Y, align: this.textAlign, maxWidth: W });
    }
  }, A.prototype.measureText = function(L) {
    if (typeof L != "string") throw ve.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var j = this.pdf, B = this.pdf.internal.scaleFactor, W = j.internal.getFontSize(), Y = j.getStringUnitWidth(L) * W / j.internal.scaleFactor, $ = function(et) {
      var rt = (et = et || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return rt;
      } }), this;
    };
    return new $({ width: Y *= Math.round(96 * B / 72 * 1e4) / 1e4 });
  }, A.prototype.scale = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var B = new f(L, 0, 0, j, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(B);
  }, A.prototype.rotate = function(L) {
    if (isNaN(L)) throw ve.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var j = new f(Math.cos(L), Math.sin(L), -Math.sin(L), Math.cos(L), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(j);
  }, A.prototype.translate = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var B = new f(1, 0, 0, 1, L, j);
    this.ctx.transform = this.ctx.transform.multiply(B);
  }, A.prototype.transform = function(L, j, B, W, Y, $) {
    if (isNaN(L) || isNaN(j) || isNaN(B) || isNaN(W) || isNaN(Y) || isNaN($)) throw ve.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var et = new f(L, j, B, W, Y, $);
    this.ctx.transform = this.ctx.transform.multiply(et);
  }, A.prototype.setTransform = function(L, j, B, W, Y, $) {
    L = isNaN(L) ? 1 : L, j = isNaN(j) ? 0 : j, B = isNaN(B) ? 0 : B, W = isNaN(W) ? 1 : W, Y = isNaN(Y) ? 0 : Y, $ = isNaN($) ? 0 : $, this.ctx.transform = new f(L, j, B, W, Y, $);
  };
  var I = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  A.prototype.drawImage = function(L, j, B, W, Y, $, et, rt, At) {
    var Nt = this.pdf.getImageProperties(L), Ct = 1, Mt = 1, zt = 1, ct = 1;
    W !== void 0 && rt !== void 0 && (zt = rt / W, ct = At / Y, Ct = Nt.width / W * rt / W, Mt = Nt.height / Y * At / Y), $ === void 0 && ($ = j, et = B, j = 0, B = 0), W !== void 0 && rt === void 0 && (rt = W, At = Y), W === void 0 && rt === void 0 && (rt = Nt.width, At = Nt.height);
    for (var E, Xt = this.ctx.transform.decompose(), Et = Q(Xt.rotate.shx), Lt = new f(), xt = (Lt = (Lt = (Lt = Lt.multiply(Xt.translate)).multiply(Xt.skew)).multiply(Xt.scale)).applyToRectangle(new h($ - j * zt, et - B * ct, W * Ct, Y * Mt)), Ft = q.call(this, xt), Pt = [], qt = 0; qt < Ft.length; qt += 1) Pt.indexOf(Ft[qt]) === -1 && Pt.push(Ft[qt]);
    if (X(Pt), this.autoPaging) for (var Gt = Pt[0], Qt = Pt[Pt.length - 1], te = Gt; te < Qt + 1; te++) {
      this.pdf.setPage(te);
      var ie = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], de = te === 1 ? this.posY + this.margin[0] : this.margin[0], Wt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ee = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], It = te === 1 ? 0 : Wt + (te - 2) * ee;
      if (this.ctx.clip_path.length !== 0) {
        var Ve = this.path;
        E = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = M(E, this.posX + this.margin[3], -It + de + this.ctx.prevPageLastElemOffset), ut.call(this, "fill", true), this.path = Ve;
      }
      var oe = JSON.parse(JSON.stringify(xt));
      oe = M([oe], this.posX + this.margin[3], -It + de + this.ctx.prevPageLastElemOffset)[0];
      var yn = (te > Gt || te < Qt) && I.call(this);
      yn && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ie, ee, null).clip().discardPath()), this.pdf.addImage(L, "JPEG", oe.x, oe.y, oe.w, oe.h, null, null, Et), yn && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(L, "JPEG", xt.x, xt.y, xt.w, xt.h, null, null, Et);
  };
  var q = function(L, j, B) {
    var W = [];
    j = j || this.pdf.internal.pageSize.width, B = B || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var Y = this.posY + this.ctx.prevPageLastElemOffset;
    switch (L.type) {
      default:
      case "mt":
      case "lt":
        W.push(Math.floor((L.y + Y) / B) + 1);
        break;
      case "arc":
        W.push(Math.floor((L.y + Y - L.radius) / B) + 1), W.push(Math.floor((L.y + Y + L.radius) / B) + 1);
        break;
      case "qct":
        var $ = ft(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x, L.y);
        W.push(Math.floor(($.y + Y) / B) + 1), W.push(Math.floor(($.y + $.h + Y) / B) + 1);
        break;
      case "bct":
        var et = ht(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x2, L.y2, L.x, L.y);
        W.push(Math.floor((et.y + Y) / B) + 1), W.push(Math.floor((et.y + et.h + Y) / B) + 1);
        break;
      case "rect":
        W.push(Math.floor((L.y + Y) / B) + 1), W.push(Math.floor((L.y + L.h + Y) / B) + 1);
    }
    for (var rt = 0; rt < W.length; rt += 1) for (; this.pdf.internal.getNumberOfPages() < W[rt]; ) _.call(this);
    return W;
  }, _ = function() {
    var L = this.fillStyle, j = this.strokeStyle, B = this.font, W = this.lineCap, Y = this.lineWidth, $ = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = L, this.strokeStyle = j, this.font = B, this.lineCap = W, this.lineWidth = Y, this.lineJoin = $;
  }, M = function(L, j, B) {
    for (var W = 0; W < L.length; W++) switch (L[W].type) {
      case "bct":
        L[W].x2 += j, L[W].y2 += B;
      case "qct":
        L[W].x1 += j, L[W].y1 += B;
      case "mt":
      case "lt":
      case "arc":
      default:
        L[W].x += j, L[W].y += B;
    }
    return L;
  }, X = function(L) {
    return L.sort(function(j, B) {
      return j - B;
    });
  }, ot = function(L, j) {
    for (var B, W, Y = this.fillStyle, $ = this.strokeStyle, et = this.lineCap, rt = this.lineWidth, At = Math.abs(rt * this.ctx.transform.scaleX), Nt = this.lineJoin, Ct = JSON.parse(JSON.stringify(this.path)), Mt = JSON.parse(JSON.stringify(this.path)), zt = [], ct = 0; ct < Mt.length; ct++) if (Mt[ct].x !== void 0) for (var E = q.call(this, Mt[ct]), Xt = 0; Xt < E.length; Xt += 1) zt.indexOf(E[Xt]) === -1 && zt.push(E[Xt]);
    for (var Et = 0; Et < zt.length; Et++) for (; this.pdf.internal.getNumberOfPages() < zt[Et]; ) _.call(this);
    if (X(zt), this.autoPaging) for (var Lt = zt[0], xt = zt[zt.length - 1], Ft = Lt; Ft < xt + 1; Ft++) {
      this.pdf.setPage(Ft), this.fillStyle = Y, this.strokeStyle = $, this.lineCap = et, this.lineWidth = At, this.lineJoin = Nt;
      var Pt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], qt = Ft === 1 ? this.posY + this.margin[0] : this.margin[0], Gt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Qt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], te = Ft === 1 ? 0 : Gt + (Ft - 2) * Qt;
      if (this.ctx.clip_path.length !== 0) {
        var ie = this.path;
        B = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = M(B, this.posX + this.margin[3], -te + qt + this.ctx.prevPageLastElemOffset), ut.call(this, L, true), this.path = ie;
      }
      if (W = JSON.parse(JSON.stringify(Ct)), this.path = M(W, this.posX + this.margin[3], -te + qt + this.ctx.prevPageLastElemOffset), j === false || Ft === 0) {
        var de = (Ft > Lt || Ft < xt) && I.call(this);
        de && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Pt, Qt, null).clip().discardPath()), ut.call(this, L, j), de && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = rt;
    }
    else this.lineWidth = At, ut.call(this, L, j), this.lineWidth = rt;
    this.path = Ct;
  }, ut = function(L, j) {
    if ((L !== "stroke" || j || !O.call(this)) && (L === "stroke" || j || !p.call(this))) {
      for (var B, W, Y = [], $ = this.path, et = 0; et < $.length; et++) {
        var rt = $[et];
        switch (rt.type) {
          case "begin":
            Y.push({ begin: true });
            break;
          case "close":
            Y.push({ close: true });
            break;
          case "mt":
            Y.push({ start: rt, deltas: [], abs: [] });
            break;
          case "lt":
            var At = Y.length;
            if ($[et - 1] && !isNaN($[et - 1].x) && (B = [rt.x - $[et - 1].x, rt.y - $[et - 1].y], At > 0)) {
              for (; At >= 0; At--) if (Y[At - 1].close !== true && Y[At - 1].begin !== true) {
                Y[At - 1].deltas.push(B), Y[At - 1].abs.push(rt);
                break;
              }
            }
            break;
          case "bct":
            B = [rt.x1 - $[et - 1].x, rt.y1 - $[et - 1].y, rt.x2 - $[et - 1].x, rt.y2 - $[et - 1].y, rt.x - $[et - 1].x, rt.y - $[et - 1].y], Y[Y.length - 1].deltas.push(B);
            break;
          case "qct":
            var Nt = $[et - 1].x + 2 / 3 * (rt.x1 - $[et - 1].x), Ct = $[et - 1].y + 2 / 3 * (rt.y1 - $[et - 1].y), Mt = rt.x + 2 / 3 * (rt.x1 - rt.x), zt = rt.y + 2 / 3 * (rt.y1 - rt.y), ct = rt.x, E = rt.y;
            B = [Nt - $[et - 1].x, Ct - $[et - 1].y, Mt - $[et - 1].x, zt - $[et - 1].y, ct - $[et - 1].x, E - $[et - 1].y], Y[Y.length - 1].deltas.push(B);
            break;
          case "arc":
            Y.push({ deltas: [], abs: [], arc: true }), Array.isArray(Y[Y.length - 1].abs) && Y[Y.length - 1].abs.push(rt);
        }
      }
      W = j ? null : L === "stroke" ? "stroke" : "fill";
      for (var Xt = false, Et = 0; Et < Y.length; Et++) if (Y[Et].arc) for (var Lt = Y[Et].abs, xt = 0; xt < Lt.length; xt++) {
        var Ft = Lt[xt];
        Ft.type === "arc" ? R.call(this, Ft.x, Ft.y, Ft.radius, Ft.startAngle, Ft.endAngle, Ft.counterclockwise, void 0, j, !Xt) : z.call(this, Ft.x, Ft.y), Xt = true;
      }
      else if (Y[Et].close === true) this.pdf.internal.out("h"), Xt = false;
      else if (Y[Et].begin !== true) {
        var Pt = Y[Et].start.x, qt = Y[Et].start.y;
        D.call(this, Y[Et].deltas, Pt, qt), Xt = true;
      }
      W && gt.call(this, W), j && dt.call(this);
    }
  }, wt = function(L) {
    var j = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, B = j * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return L - B;
      case "top":
        return L + j - B;
      case "hanging":
        return L + j - 2 * B;
      case "middle":
        return L + j / 2 - B;
      case "ideographic":
        return L;
      case "alphabetic":
      default:
        return L;
    }
  }, tt = function(L) {
    return L + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  A.prototype.createLinearGradient = function() {
    var L = function() {
    };
    return L.colorStops = [], L.addColorStop = function(j, B) {
      this.colorStops.push([j, B]);
    }, L.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, L.isCanvasGradient = true, L;
  }, A.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, A.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var R = function(L, j, B, W, Y, $, et, rt, At) {
    for (var Nt = nt.call(this, B, W, Y, $), Ct = 0; Ct < Nt.length; Ct++) {
      var Mt = Nt[Ct];
      Ct === 0 && (At ? F.call(this, Mt.x1 + L, Mt.y1 + j) : z.call(this, Mt.x1 + L, Mt.y1 + j)), at.call(this, L, j, Mt.x2, Mt.y2, Mt.x3, Mt.y3, Mt.x4, Mt.y4);
    }
    rt ? dt.call(this) : gt.call(this, et);
  }, gt = function(L) {
    switch (L) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, dt = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, F = function(L, j) {
    this.pdf.internal.out(n(L) + " " + a(j) + " m");
  }, P = function(L) {
    var j;
    switch (L.align) {
      case "right":
      case "end":
        j = "right";
        break;
      case "center":
        j = "center";
        break;
      case "left":
      case "start":
      default:
        j = "left";
    }
    var B = this.pdf.getTextDimensions(L.text), W = wt.call(this, L.y), Y = tt.call(this, W) - B.h, $ = this.ctx.transform.applyToPoint(new l(L.x, W)), et = this.ctx.transform.decompose(), rt = new f();
    rt = (rt = (rt = rt.multiply(et.translate)).multiply(et.skew)).multiply(et.scale);
    for (var At, Nt, Ct, Mt = this.ctx.transform.applyToRectangle(new h(L.x, W, B.w, B.h)), zt = rt.applyToRectangle(new h(L.x, Y, B.w, B.h)), ct = q.call(this, zt), E = [], Xt = 0; Xt < ct.length; Xt += 1) E.indexOf(ct[Xt]) === -1 && E.push(ct[Xt]);
    if (X(E), this.autoPaging) for (var Et = E[0], Lt = E[E.length - 1], xt = Et; xt < Lt + 1; xt++) {
      this.pdf.setPage(xt);
      var Ft = xt === 1 ? this.posY + this.margin[0] : this.margin[0], Pt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], qt = this.pdf.internal.pageSize.height - this.margin[2], Gt = qt - this.margin[0], Qt = this.pdf.internal.pageSize.width - this.margin[1], te = Qt - this.margin[3], ie = xt === 1 ? 0 : Pt + (xt - 2) * Gt;
      if (this.ctx.clip_path.length !== 0) {
        var de = this.path;
        At = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = M(At, this.posX + this.margin[3], -1 * ie + Ft), ut.call(this, "fill", true), this.path = de;
      }
      var Wt = M([JSON.parse(JSON.stringify(zt))], this.posX + this.margin[3], -ie + Ft + this.ctx.prevPageLastElemOffset)[0];
      L.scale >= 0.01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), Ct = this.lineWidth, this.lineWidth = Ct * L.scale);
      var ee = this.autoPaging !== "text";
      if (ee || Wt.y + Wt.h <= qt) {
        if (ee || Wt.y >= Ft && Wt.x <= Qt) {
          var It = ee ? L.text : this.pdf.splitTextToSize(L.text, L.maxWidth || Qt - Wt.x)[0], Ve = M([JSON.parse(JSON.stringify(Mt))], this.posX + this.margin[3], -ie + Ft + this.ctx.prevPageLastElemOffset)[0], oe = ee && (xt > Et || xt < Lt) && I.call(this);
          oe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], te, Gt, null).clip().discardPath()), this.pdf.text(It, Ve.x, Ve.y, { angle: L.angle, align: j, renderingMode: L.renderingMode }), oe && this.pdf.restoreGraphicsState();
        }
      } else Wt.y < qt && (this.ctx.prevPageLastElemOffset += qt - Wt.y);
      L.scale >= 0.01 && (this.pdf.setFontSize(Nt), this.lineWidth = Ct);
    }
    else L.scale >= 0.01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), Ct = this.lineWidth, this.lineWidth = Ct * L.scale), this.pdf.text(L.text, $.x + this.posX, $.y + this.posY, { angle: L.angle, align: j, renderingMode: L.renderingMode, maxWidth: L.maxWidth }), L.scale >= 0.01 && (this.pdf.setFontSize(Nt), this.lineWidth = Ct);
  }, z = function(L, j, B, W) {
    B = B || 0, W = W || 0, this.pdf.internal.out(n(L + B) + " " + a(j + W) + " l");
  }, D = function(L, j, B) {
    return this.pdf.lines(L, j, B, null, null);
  }, at = function(L, j, B, W, Y, $, et, rt) {
    this.pdf.internal.out([e(c(B + L)), e(o(W + j)), e(c(Y + L)), e(o($ + j)), e(c(et + L)), e(o(rt + j)), "c"].join(" "));
  }, nt = function(L, j, B, W) {
    for (var Y = 2 * Math.PI, $ = Math.PI / 2; j > B; ) j -= Y;
    var et = Math.abs(B - j);
    et < Y && W && (et = Y - et);
    for (var rt = [], At = W ? -1 : 1, Nt = j; et > 1e-5; ) {
      var Ct = Nt + At * Math.min(et, $);
      rt.push(lt.call(this, L, Nt, Ct)), et -= Math.abs(Ct - Nt), Nt = Ct;
    }
    return rt;
  }, lt = function(L, j, B) {
    var W = (B - j) / 2, Y = L * Math.cos(W), $ = L * Math.sin(W), et = Y, rt = -$, At = et * et + rt * rt, Nt = At + et * Y + rt * $, Ct = 4 / 3 * (Math.sqrt(2 * At * Nt) - Nt) / (et * $ - rt * Y), Mt = et - Ct * rt, zt = rt + Ct * et, ct = Mt, E = -zt, Xt = W + j, Et = Math.cos(Xt), Lt = Math.sin(Xt);
    return { x1: L * Math.cos(j), y1: L * Math.sin(j), x2: Mt * Et - zt * Lt, y2: Mt * Lt + zt * Et, x3: ct * Et - E * Lt, y3: ct * Lt + E * Et, x4: L * Math.cos(B), y4: L * Math.sin(B) };
  }, Q = function(L) {
    return 180 * L / Math.PI;
  }, ft = function(L, j, B, W, Y, $) {
    var et = L + 0.5 * (B - L), rt = j + 0.5 * (W - j), At = Y + 0.5 * (B - Y), Nt = $ + 0.5 * (W - $), Ct = Math.min(L, Y, et, At), Mt = Math.max(L, Y, et, At), zt = Math.min(j, $, rt, Nt), ct = Math.max(j, $, rt, Nt);
    return new h(Ct, zt, Mt - Ct, ct - zt);
  }, ht = function(L, j, B, W, Y, $, et, rt) {
    var At, Nt, Ct, Mt, zt, ct, E, Xt, Et, Lt, xt, Ft, Pt, qt, Gt = B - L, Qt = W - j, te = Y - B, ie = $ - W, de = et - Y, Wt = rt - $;
    for (Nt = 0; Nt < 41; Nt++) Et = (E = (Ct = L + (At = Nt / 40) * Gt) + At * ((zt = B + At * te) - Ct)) + At * (zt + At * (Y + At * de - zt) - E), Lt = (Xt = (Mt = j + At * Qt) + At * ((ct = W + At * ie) - Mt)) + At * (ct + At * ($ + At * Wt - ct) - Xt), Nt == 0 ? (xt = Et, Ft = Lt, Pt = Et, qt = Lt) : (xt = Math.min(xt, Et), Ft = Math.min(Ft, Lt), Pt = Math.max(Pt, Et), qt = Math.max(qt, Lt));
    return new h(Math.round(xt), Math.round(Ft), Math.round(Pt - xt), Math.round(qt - Ft));
  }, kt = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var L, j, B = (L = this.ctx.lineDash, j = this.ctx.lineDashOffset, JSON.stringify({ lineDash: L, lineDashOffset: j }));
      this.prevLineDash !== B && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = B);
    }
  };
})(Ht.API), /**
* @license
* jsPDF filters PlugIn
* Copyright (c) 2014 Aras Abbasi
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = function(o) {
    var l, h, f, g, b, A, S, p, O, I;
    for (h = [], f = 0, g = (o += l = "\0\0\0\0".slice(o.length % 4 || 4)).length; g > f; f += 4) (b = (o.charCodeAt(f) << 24) + (o.charCodeAt(f + 1) << 16) + (o.charCodeAt(f + 2) << 8) + o.charCodeAt(f + 3)) !== 0 ? (A = (b = ((b = ((b = ((b = (b - (I = b % 85)) / 85) - (O = b % 85)) / 85) - (p = b % 85)) / 85) - (S = b % 85)) / 85) % 85, h.push(A + 33, S + 33, p + 33, O + 33, I + 33)) : h.push(122);
    return function(q, _) {
      for (var M = _; M > 0; M--) q.pop();
    }(h, l.length), String.fromCharCode.apply(String, h) + "~>";
  }, n = function(o) {
    var l, h, f, g, b, A = String, S = "length", p = 255, O = "charCodeAt", I = "slice", q = "replace";
    for (o[I](-2), o = o[I](0, -2)[q](/\s/g, "")[q]("z", "!!!!!"), f = [], g = 0, b = (o += l = "uuuuu"[I](o[S] % 5 || 5))[S]; b > g; g += 5) h = 52200625 * (o[O](g) - 33) + 614125 * (o[O](g + 1) - 33) + 7225 * (o[O](g + 2) - 33) + 85 * (o[O](g + 3) - 33) + (o[O](g + 4) - 33), f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
    return function(_, M) {
      for (var X = M; X > 0; X--) _.pop();
    }(f, l[S]), A.fromCharCode.apply(A, f);
  }, a = function(o) {
    var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), o.length % 2 && (o += "0"), l.test(o) === false) return "";
    for (var h = "", f = 0; f < o.length; f += 2) h += String.fromCharCode("0x" + (o[f] + o[f + 1]));
    return h;
  }, c = function(o) {
    for (var l = new Uint8Array(o.length), h = o.length; h--; ) l[h] = o.charCodeAt(h);
    return o = (l = ps(l)).reduce(function(f, g) {
      return f + String.fromCharCode(g);
    }, "");
  };
  i2.processDataByFilters = function(o, l) {
    var h = 0, f = o || "", g = [];
    for (typeof (l = l || []) == "string" && (l = [l]), h = 0; h < l.length; h += 1) switch (l[h]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        f = n(f), g.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        f = e(f), g.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        f = a(f), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(b) {
          return ("0" + b.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", g.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        f = c(f), g.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + l[h] + '" is not implemented');
    }
    return { data: f, reverseChain: g.reverse().join(" ") };
  };
}(Ht.API), /**
* @license
* jsPDF fileloading PlugIn
* Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  i2.loadFile = function(e, n, a) {
    return function(c, o, l) {
      o = o !== false, l = typeof l == "function" ? l : function() {
      };
      var h = void 0;
      try {
        h = function(f, g, b) {
          var A = new XMLHttpRequest(), S = 0, p = function(O) {
            var I = O.length, q = [], _ = String.fromCharCode;
            for (S = 0; S < I; S += 1) q.push(_(255 & O.charCodeAt(S)));
            return q.join("");
          };
          if (A.open("GET", f, !g), A.overrideMimeType("text/plain; charset=x-user-defined"), g === false && (A.onload = function() {
            A.status === 200 ? b(p(this.responseText)) : b(void 0);
          }), A.send(null), g && A.status === 200) return p(A.responseText);
        }(c, o, l);
      } catch {
      }
      return h;
    }(e, n, a);
  }, i2.loadImageFile = i2.loadFile;
}(Ht.API), function(i2) {
  function e() {
    return (Ut.html2canvas ? Promise.resolve(Ut.html2canvas) : import("./html2canvas.esm-d2sM-0Wm-FLS6LZT6.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load html2canvas: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  function n() {
    return (Ut.DOMPurify ? Promise.resolve(Ut.DOMPurify) : import("./purify.es-BwOkayRK-PJYSFXHI.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load dompurify: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  var a = function(l) {
    var h = fe(l);
    return h === "undefined" ? "undefined" : h === "string" || l instanceof String ? "string" : h === "number" || l instanceof Number ? "number" : h === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, c = function(l, h) {
    var f = document.createElement(l);
    for (var g in h.className && (f.className = h.className), h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) f.style[g] = h.style[g];
    return f;
  }, o = function l(h) {
    var f = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), g = l.convert(Promise.resolve(), f);
    return g = (g = g.setProgress(1, l, 1, [l])).set(h);
  };
  (o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(l, h) {
    return l.__proto__ = h || o.prototype, l;
  }, o.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: true, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, o.prototype.from = function(l, h) {
    return this.then(function() {
      switch (h = h || function(f) {
        switch (a(f)) {
          case "string":
            return "string";
          case "element":
            return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(l)) {
        case "string":
          return this.then(n).then(function(f) {
            return this.set({ src: c("div", { innerHTML: l, dompurify: f }) });
          });
        case "element":
          return this.set({ src: l });
        case "canvas":
          return this.set({ canvas: l });
        case "img":
          return this.set({ img: l });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, o.prototype.to = function(l) {
    switch (l) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, o.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var l = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function f(g, b) {
        for (var A = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(false), S = g.firstChild; S; S = S.nextSibling) b !== true && S.nodeType === 1 && S.nodeName === "SCRIPT" || A.appendChild(f(S, b));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (A.width = g.width, A.height = g.height, A.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (A.value = g.value), A.addEventListener("load", function() {
          A.scrollTop = g.scrollTop, A.scrollLeft = g.scrollLeft;
        }, true)), A;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = c("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = c("div", { className: "html2pdf__container", style: l }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(c("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, o.prototype.toCanvas = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(h) {
      var f = Object.assign({}, this.opt.html2canvas);
      return delete f.onrendered, h(this.prop.container, f);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toContext2d = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(h) {
      var f = this.opt.jsPDF, g = this.opt.fontFaces, b = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, A = Object.assign({ async: true, allowTaint: true, scale: b, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: true, proxy: null, removeContainer: true, foreignObjectRendering: false, useCORS: false }, this.opt.html2canvas);
      if (delete A.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = g, g) for (var S = 0; S < g.length; ++S) {
        var p = g[S], O = p.src.find(function(I) {
          return I.format === "truetype";
        });
        O && f.addFont(O.url, p.ref.name, p.ref.style);
      }
      return A.windowHeight = A.windowHeight || 0, A.windowHeight = A.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : A.windowHeight, f.context2d.save(true), h(this.prop.container, A);
    }).then(function(h) {
      this.opt.jsPDF.context2d.restore(true), (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = l;
    });
  }, o.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, o.prototype.output = function(l, h, f) {
    return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(l, h) : this.outputPdf(l, h);
  }, o.prototype.outputPdf = function(l, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(l, h);
    });
  }, o.prototype.outputImg = function(l) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (l) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + l + '" is not supported.';
      }
    });
  }, o.prototype.save = function(l) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(l ? { filename: l } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, o.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, o.prototype.set = function(l) {
    if (a(l) !== "object") return this;
    var h = Object.keys(l || {}).map(function(f) {
      if (f in o.template.prop) return function() {
        this.prop[f] = l[f];
      };
      switch (f) {
        case "margin":
          return this.setMargin.bind(this, l.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = l.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, l.pageSize);
        default:
          return function() {
            this.opt[f] = l[f];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, o.prototype.get = function(l, h) {
    return this.then(function() {
      var f = l in o.template.prop ? this.prop[l] : this.opt[l];
      return h ? h(f) : f;
    });
  }, o.prototype.setMargin = function(l) {
    return this.then(function() {
      switch (a(l)) {
        case "number":
          l = [l, l, l, l];
        case "array":
          if (l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = l;
    }).then(this.setPageSize);
  }, o.prototype.setPageSize = function(l) {
    function h(f, g) {
      return Math.floor(f * g / 72 * 96);
    }
    return this.then(function() {
      (l = l || Ht.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = { width: l.width - this.opt.margin[1] - this.opt.margin[3], height: l.height - this.opt.margin[0] - this.opt.margin[2] }, l.inner.px = { width: h(l.inner.width, l.k), height: h(l.inner.height, l.k) }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
    });
  }, o.prototype.setProgress = function(l, h, f, g) {
    return l != null && (this.progress.val = l), h != null && (this.progress.state = h), f != null && (this.progress.n = f), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, o.prototype.updateProgress = function(l, h, f, g) {
    return this.setProgress(l ? this.progress.val + l : null, h || null, f ? this.progress.n + f : null, g ? this.progress.stack.concat(g) : null);
  }, o.prototype.then = function(l, h) {
    var f = this;
    return this.thenCore(l, h, function(g, b) {
      return f.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(A) {
        return f.updateProgress(null, g), A;
      }).then(g, b).then(function(A) {
        return f.updateProgress(1), A;
      });
    });
  }, o.prototype.thenCore = function(l, h, f) {
    f = f || Promise.prototype.then, l && (l = l.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), b = f.call(g, l, h);
    return o.convert(b, this.__proto__);
  }, o.prototype.thenExternal = function(l, h) {
    return Promise.prototype.then.call(this, l, h);
  }, o.prototype.thenList = function(l) {
    var h = this;
    return l.forEach(function(f) {
      h = h.thenCore(f);
    }), h;
  }, o.prototype.catch = function(l) {
    l && (l = l.bind(this));
    var h = Promise.prototype.catch.call(this, l);
    return o.convert(h, this);
  }, o.prototype.catchExternal = function(l) {
    return Promise.prototype.catch.call(this, l);
  }, o.prototype.error = function(l) {
    return this.then(function() {
      throw new Error(l);
    });
  }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, Ht.getPageSize = function(l, h, f) {
    if (fe(l) === "object") {
      var g = l;
      l = g.orientation, h = g.unit || h, f = g.format || f;
    }
    h = h || "mm", f = f || "a4", l = ("" + (l || "P")).toLowerCase();
    var b, A = ("" + f).toLowerCase(), S = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        b = 1;
        break;
      case "mm":
        b = 72 / 25.4;
        break;
      case "cm":
        b = 72 / 2.54;
        break;
      case "in":
        b = 72;
        break;
      case "px":
        b = 0.75;
        break;
      case "pc":
      case "em":
        b = 12;
        break;
      case "ex":
        b = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var p, O = 0, I = 0;
    if (S.hasOwnProperty(A)) O = S[A][1] / b, I = S[A][0] / b;
    else try {
      O = f[1], I = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (l === "p" || l === "portrait") l = "p", I > O && (p = I, I = O, O = p);
    else {
      if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
      l = "l", O > I && (p = I, I = O, O = p);
    }
    return { width: I, height: O, unit: h, k: b, orientation: l };
  }, i2.html = function(l, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(ys) : null;
    var f = new o(h);
    return h.worker ? f : f.from(l).doCallback();
  };
}(Ht.API), Ht.API.addJS = function(i2) {
  return mc = i2, this.internal.events.subscribe("postPutResources", function() {
    Qa = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Qa + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), gc = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + mc + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    Qa !== void 0 && gc !== void 0 && this.internal.out("/Names <</JavaScript " + Qa + " 0 R>>");
  }), this;
}, /**
* @license
* Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e;
  i2.events.push(["postPutResources", function() {
    var n = this, a = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var c = n.outline.render().split(/\r\n/), o = 0; o < c.length; o++) {
      var l = c[o], h = a.exec(l);
      if (h != null) {
        var f = h[1];
        n.internal.newObjectDeferredBegin(f, false);
      }
      n.internal.write(l);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, b = [];
      for (o = 0; o < g; o++) {
        var A = n.internal.newObject();
        b.push(A);
        var S = n.internal.getPageInfo(o + 1);
        n.internal.write("<< /D[" + S.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = n.internal.newObject();
      for (n.internal.write("<< /Names [ "), o = 0; o < b.length; o++) n.internal.write("(page_" + (o + 1) + ")" + b[o] + " 0 R");
      n.internal.write(" ] >>", "endobj"), e = n.internal.newObject(), n.internal.write("<< /Dests " + p + " 0 R"), n.internal.write(">>", "endobj");
    }
  }]), i2.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
  }]), i2.events.push(["initialized", function() {
    var n = this;
    n.outline = { createNamedDestinations: false, root: { children: [] } }, n.outline.add = function(a, c, o) {
      var l = { title: c, options: o, children: [] };
      return a == null && (a = this.root), a.children.push(l), l;
    }, n.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = n, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, n.outline.genIds_r = function(a) {
      a.id = n.internal.newObjectDeferred();
      for (var c = 0; c < a.children.length; c++) this.genIds_r(a.children[c]);
    }, n.outline.renderRoot = function(a) {
      this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, a)), this.objEnd();
    }, n.outline.renderItems = function(a) {
      for (var c = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < a.children.length; o++) {
        var l = a.children[o];
        this.objStart(l), this.line("/Title " + this.makeString(l.title)), this.line("/Parent " + this.makeRef(a)), o > 0 && this.line("/Prev " + this.makeRef(a.children[o - 1])), o < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[o + 1])), l.children.length > 0 && (this.line("/First " + this.makeRef(l.children[0])), this.line("/Last " + this.makeRef(l.children[l.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, l);
        if (h > 0 && this.line("/Count " + h), l.options && l.options.pageNumber) {
          var f = n.internal.getPageInfo(l.options.pageNumber);
          this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + c(0) + " 0]");
        }
        this.objEnd();
      }
      for (var g = 0; g < a.children.length; g++) this.renderItems(a.children[g]);
    }, n.outline.line = function(a) {
      this.ctx.val += a + `\r
`;
    }, n.outline.makeRef = function(a) {
      return a.id + " 0 R";
    }, n.outline.makeString = function(a) {
      return "(" + n.internal.pdfEscape(a) + ")";
    }, n.outline.objStart = function(a) {
      this.ctx.val += `\r
` + a.id + ` 0 obj\r
<<\r
`;
    }, n.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, n.outline.count_r = function(a, c) {
      for (var o = 0; o < c.children.length; o++) a.count++, this.count_r(a, c.children[o]);
      return a.count;
    };
  }]);
}(Ht.API), /**
* @license
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = [192, 193, 194, 195, 196, 197, 198, 199];
  i2.processJPEG = function(n, a, c, o, l, h) {
    var f, g = this.decode.DCT_DECODE, b = null;
    if (typeof n == "string" || this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) {
      switch (n = l || n, n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n, (f = function(A) {
        for (var S, p = 256 * A.charCodeAt(4) + A.charCodeAt(5), O = A.length, I = { width: 0, height: 0, numcomponents: 1 }, q = 4; q < O; q += 2) {
          if (q += p, e.indexOf(A.charCodeAt(q + 1)) !== -1) {
            S = 256 * A.charCodeAt(q + 5) + A.charCodeAt(q + 6), I = { width: 256 * A.charCodeAt(q + 7) + A.charCodeAt(q + 8), height: S, numcomponents: A.charCodeAt(q + 9) };
            break;
          }
          p = 256 * A.charCodeAt(q + 2) + A.charCodeAt(q + 3);
        }
        return I;
      }(n = this.__addimage__.isArrayBufferView(n) ? this.__addimage__.arrayBufferToBinaryString(n) : n)).numcomponents) {
        case 1:
          h = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          h = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          h = this.color_spaces.DEVICE_RGB;
      }
      b = { data: n, width: f.width, height: f.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: a, alias: c };
    }
    return b;
  };
}(Ht.API);
var Li;
var $a;
var vc;
var bc;
var wc;
var n1 = function() {
  var i2, e, n;
  function a(o) {
    var l, h, f, g, b, A, S, p, O, I, q, _, M, X;
    for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, A = null; ; ) {
      switch (l = this.readUInt32(), O = (function() {
        var ot, ut;
        for (ut = [], ot = 0; ot < 4; ++ot) ut.push(String.fromCharCode(this.data[this.pos++]));
        return ut;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(l);
          break;
        case "fcTL":
          A && this.animation.frames.push(A), this.pos += 4, A = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, b = this.readUInt16(), g = this.readUInt16() || 100, A.delay = 1e3 * b / g, A.disposeOp = this.data[this.pos++], A.blendOp = this.data[this.pos++], A.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (O === "fdAT" && (this.pos += 4, l -= 4), o = (A != null ? A.data : void 0) || this.imgData, _ = 0; 0 <= l ? _ < l : _ > l; 0 <= l ? ++_ : --_) o.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(l), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((I = f - this.transparency.indexed.length) > 0) for (M = 0; 0 <= I ? M < I : M > I; 0 <= I ? ++M : --M) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(l)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(l);
          }
          break;
        case "tEXt":
          S = (q = this.read(l)).indexOf(0), p = String.fromCharCode.apply(String, q.slice(0, S)), this.text[p] = String.fromCharCode.apply(String, q.slice(S + 1));
          break;
        case "IEND":
          return A && this.animation.frames.push(A), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (X = this.colorType) === 4 || X === 6, h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += l;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  a.prototype.read = function(o) {
    var l, h;
    for (h = [], l = 0; 0 <= o ? l < o : l > o; 0 <= o ? ++l : --l) h.push(this.data[this.pos++]);
    return h;
  }, a.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.decodePixels = function(o) {
    var l = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * l), f = 0, g = this;
    if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
    function b(A, S, p, O) {
      var I, q, _, M, X, ot, ut, wt, tt, R, gt, dt, F, P, z, D, at, nt, lt, Q, ft, ht = Math.ceil((g.width - A) / p), kt = Math.ceil((g.height - S) / O), L = g.width == ht && g.height == kt;
      for (P = l * ht, dt = L ? h : new Uint8Array(P * kt), ot = o.length, F = 0, q = 0; F < kt && f < ot; ) {
        switch (o[f++]) {
          case 0:
            for (M = at = 0; at < P; M = at += 1) dt[q++] = o[f++];
            break;
          case 1:
            for (M = nt = 0; nt < P; M = nt += 1) I = o[f++], X = M < l ? 0 : dt[q - l], dt[q++] = (I + X) % 256;
            break;
          case 2:
            for (M = lt = 0; lt < P; M = lt += 1) I = o[f++], _ = (M - M % l) / l, z = F && dt[(F - 1) * P + _ * l + M % l], dt[q++] = (z + I) % 256;
            break;
          case 3:
            for (M = Q = 0; Q < P; M = Q += 1) I = o[f++], _ = (M - M % l) / l, X = M < l ? 0 : dt[q - l], z = F && dt[(F - 1) * P + _ * l + M % l], dt[q++] = (I + Math.floor((X + z) / 2)) % 256;
            break;
          case 4:
            for (M = ft = 0; ft < P; M = ft += 1) I = o[f++], _ = (M - M % l) / l, X = M < l ? 0 : dt[q - l], F === 0 ? z = D = 0 : (z = dt[(F - 1) * P + _ * l + M % l], D = _ && dt[(F - 1) * P + (_ - 1) * l + M % l]), ut = X + z - D, wt = Math.abs(ut - X), R = Math.abs(ut - z), gt = Math.abs(ut - D), tt = wt <= R && wt <= gt ? X : R <= gt ? z : D, dt[q++] = (I + tt) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + o[f - 1]);
        }
        if (!L) {
          var j = ((S + F * O) * g.width + A) * l, B = F * P;
          for (M = 0; M < ht; M += 1) {
            for (var W = 0; W < l; W += 1) h[j++] = dt[B++];
            j += (p - 1) * l;
          }
        }
        F++;
      }
    }
    return o = Eu(o), g.interlaceMethod == 1 ? (b(0, 0, 8, 8), b(4, 0, 8, 8), b(0, 4, 4, 8), b(2, 0, 4, 4), b(0, 2, 2, 4), b(1, 0, 2, 2), b(0, 1, 1, 2)) : b(0, 0, 1, 1), h;
  }, a.prototype.decodePalette = function() {
    var o, l, h, f, g, b, A, S, p;
    for (h = this.palette, b = this.transparency.indexed || [], g = new Uint8Array((b.length || 0) + h.length), f = 0, o = 0, l = A = 0, S = h.length; A < S; l = A += 3) g[f++] = h[l], g[f++] = h[l + 1], g[f++] = h[l + 2], g[f++] = (p = b[o++]) != null ? p : 255;
    return g;
  }, a.prototype.copyToImageData = function(o, l) {
    var h, f, g, b, A, S, p, O, I, q, _;
    if (f = this.colors, I = null, h = this.hasAlphaChannel, this.palette.length && (I = (_ = this._decodedPalette) != null ? _ : this._decodedPalette = this.decodePalette(), f = 4, h = true), O = (g = o.data || o).length, A = I || l, b = S = 0, f === 1) for (; b < O; ) p = I ? 4 * l[b / 4] : S, q = A[p++], g[b++] = q, g[b++] = q, g[b++] = q, g[b++] = h ? A[p++] : 255, S = p;
    else for (; b < O; ) p = I ? 4 * l[b / 4] : S, g[b++] = A[p++], g[b++] = A[p++], g[b++] = A[p++], g[b++] = h ? A[p++] : 255, S = p;
  }, a.prototype.decode = function() {
    var o;
    return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), o;
  };
  var c = function() {
    if (Object.prototype.toString.call(Ut) === "[object Window]") {
      try {
        e = Ut.document.createElement("canvas"), n = e.getContext("2d");
      } catch {
        return false;
      }
      return true;
    }
    return false;
  };
  return c(), i2 = function(o) {
    var l;
    if (c() === true) return n.width = o.width, n.height = o.height, n.clearRect(0, 0, o.width, o.height), n.putImageData(o, 0, 0), (l = new Image()).src = e.toDataURL(), l;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, a.prototype.decodeFrames = function(o) {
    var l, h, f, g, b, A, S, p;
    if (this.animation) {
      for (p = [], h = b = 0, A = (S = this.animation.frames).length; b < A; h = ++b) l = S[h], f = o.createImageData(l.width, l.height), g = this.decodePixels(new Uint8Array(l.data)), this.copyToImageData(f, g), l.imageData = f, p.push(l.image = i2(f));
      return p;
    }
  }, a.prototype.renderFrame = function(o, l) {
    var h, f, g;
    return h = (f = this.animation.frames)[l], g = f[l - 1], l === 0 && o.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && o.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), o.drawImage(h.image, h.xOffset, h.yOffset);
  }, a.prototype.animate = function(o) {
    var l, h, f, g, b, A, S = this;
    return h = 0, A = this.animation, g = A.numFrames, f = A.frames, b = A.numPlays, (l = function() {
      var p, O;
      if (p = h++ % g, O = f[p], S.renderFrame(o, p), g > 1 && h / g < b) return S.animation._timeout = setTimeout(l, O.delay);
    })();
  }, a.prototype.stopAnimation = function() {
    var o;
    return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
  }, a.prototype.render = function(o) {
    var l, h;
    return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, o.height = this.height, l = o.getContext("2d"), this.animation ? (this.decodeFrames(l), this.animate(l)) : (h = l.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), l.putImageData(h, 0, 0));
  }, a;
}();
function r1(i2) {
  var e = 0;
  if (i2[e++] !== 71 || i2[e++] !== 73 || i2[e++] !== 70 || i2[e++] !== 56 || (i2[e++] + 1 & 253) != 56 || i2[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var n = i2[e++] | i2[e++] << 8, a = i2[e++] | i2[e++] << 8, c = i2[e++], o = c >> 7, l = 1 << (7 & c) + 1;
  i2[e++], i2[e++];
  var h = null, f = null;
  o && (h = e, f = l, e += 3 * l);
  var g = true, b = [], A = 0, S = null, p = 0, O = null;
  for (this.width = n, this.height = a; g && e < i2.length; ) switch (i2[e++]) {
    case 33:
      switch (i2[e++]) {
        case 255:
          if (i2[e] !== 11 || i2[e + 1] == 78 && i2[e + 2] == 69 && i2[e + 3] == 84 && i2[e + 4] == 83 && i2[e + 5] == 67 && i2[e + 6] == 65 && i2[e + 7] == 80 && i2[e + 8] == 69 && i2[e + 9] == 50 && i2[e + 10] == 46 && i2[e + 11] == 48 && i2[e + 12] == 3 && i2[e + 13] == 1 && i2[e + 16] == 0) e += 14, O = i2[e++] | i2[e++] << 8, e++;
          else for (e += 12; ; ) {
            if (!((F = i2[e++]) >= 0)) throw Error("Invalid block size");
            if (F === 0) break;
            e += F;
          }
          break;
        case 249:
          if (i2[e++] !== 4 || i2[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var I = i2[e++];
          A = i2[e++] | i2[e++] << 8, S = i2[e++], !(1 & I) && (S = null), p = I >> 2 & 7, e++;
          break;
        case 254:
          for (; ; ) {
            if (!((F = i2[e++]) >= 0)) throw Error("Invalid block size");
            if (F === 0) break;
            e += F;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + i2[e - 1].toString(16));
      }
      break;
    case 44:
      var q = i2[e++] | i2[e++] << 8, _ = i2[e++] | i2[e++] << 8, M = i2[e++] | i2[e++] << 8, X = i2[e++] | i2[e++] << 8, ot = i2[e++], ut = ot >> 6 & 1, wt = 1 << (7 & ot) + 1, tt = h, R = f, gt = false;
      ot >> 7 && (gt = true, tt = e, R = wt, e += 3 * wt);
      var dt = e;
      for (e++; ; ) {
        var F;
        if (!((F = i2[e++]) >= 0)) throw Error("Invalid block size");
        if (F === 0) break;
        e += F;
      }
      b.push({ x: q, y: _, width: M, height: X, has_local_palette: gt, palette_offset: tt, palette_size: R, data_offset: dt, data_length: e - dt, transparent_index: S, interlaced: !!ut, delay: A, disposal: p });
      break;
    case 59:
      g = false;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + i2[e - 1].toString(16));
  }
  this.numFrames = function() {
    return b.length;
  }, this.loopCount = function() {
    return O;
  }, this.frameInfo = function(P) {
    if (P < 0 || P >= b.length) throw new Error("Frame index out of range.");
    return b[P];
  }, this.decodeAndBlitFrameBGRA = function(P, z) {
    var D = this.frameInfo(P), at = D.width * D.height, nt = new Uint8Array(at);
    yc(i2, D.data_offset, nt, at);
    var lt = D.palette_offset, Q = D.transparent_index;
    Q === null && (Q = 256);
    var ft = D.width, ht = n - ft, kt = ft, L = 4 * (D.y * n + D.x), j = 4 * ((D.y + D.height) * n + D.x), B = L, W = 4 * ht;
    D.interlaced === true && (W += 4 * n * 7);
    for (var Y = 8, $ = 0, et = nt.length; $ < et; ++$) {
      var rt = nt[$];
      if (kt === 0 && (kt = ft, (B += W) >= j && (W = 4 * ht + 4 * n * (Y - 1), B = L + (ft + ht) * (Y << 1), Y >>= 1)), rt === Q) B += 4;
      else {
        var At = i2[lt + 3 * rt], Nt = i2[lt + 3 * rt + 1], Ct = i2[lt + 3 * rt + 2];
        z[B++] = Ct, z[B++] = Nt, z[B++] = At, z[B++] = 255;
      }
      --kt;
    }
  }, this.decodeAndBlitFrameRGBA = function(P, z) {
    var D = this.frameInfo(P), at = D.width * D.height, nt = new Uint8Array(at);
    yc(i2, D.data_offset, nt, at);
    var lt = D.palette_offset, Q = D.transparent_index;
    Q === null && (Q = 256);
    var ft = D.width, ht = n - ft, kt = ft, L = 4 * (D.y * n + D.x), j = 4 * ((D.y + D.height) * n + D.x), B = L, W = 4 * ht;
    D.interlaced === true && (W += 4 * n * 7);
    for (var Y = 8, $ = 0, et = nt.length; $ < et; ++$) {
      var rt = nt[$];
      if (kt === 0 && (kt = ft, (B += W) >= j && (W = 4 * ht + 4 * n * (Y - 1), B = L + (ft + ht) * (Y << 1), Y >>= 1)), rt === Q) B += 4;
      else {
        var At = i2[lt + 3 * rt], Nt = i2[lt + 3 * rt + 1], Ct = i2[lt + 3 * rt + 2];
        z[B++] = At, z[B++] = Nt, z[B++] = Ct, z[B++] = 255;
      }
      --kt;
    }
  };
}
function yc(i2, e, n, a) {
  for (var c = i2[e++], o = 1 << c, l = o + 1, h = l + 1, f = c + 1, g = (1 << f) - 1, b = 0, A = 0, S = 0, p = i2[e++], O = new Int32Array(4096), I = null; ; ) {
    for (; b < 16 && p !== 0; ) A |= i2[e++] << b, b += 8, p === 1 ? p = i2[e++] : --p;
    if (b < f) break;
    var q = A & g;
    if (A >>= f, b -= f, q !== o) {
      if (q === l) break;
      for (var _ = q < h ? q : I, M = 0, X = _; X > o; ) X = O[X] >> 8, ++M;
      var ot = X;
      if (S + M + (_ !== q ? 1 : 0) > a) return void ve.log("Warning, gif stream longer than expected.");
      n[S++] = ot;
      var ut = S += M;
      for (_ !== q && (n[S++] = ot), X = _; M--; ) X = O[X], n[--ut] = 255 & X, X >>= 8;
      I !== null && h < 4096 && (O[h++] = I << 8 | ot, h >= g + 1 && f < 12 && (++f, g = g << 1 | 1)), I = q;
    } else h = l + 1, g = (1 << (f = c + 1)) - 1, I = null;
  }
  return S !== a && ve.log("Warning, gif stream shorter than expected."), n;
}
function cs(i2) {
  var e, n, a, c, o, l = Math.floor, h = new Array(64), f = new Array(64), g = new Array(64), b = new Array(64), A = new Array(65535), S = new Array(65535), p = new Array(64), O = new Array(64), I = [], q = 0, _ = 7, M = new Array(64), X = new Array(64), ot = new Array(64), ut = new Array(256), wt = new Array(2048), tt = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], R = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], gt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], dt = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], F = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], D = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], at = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function nt(L, j) {
    for (var B = 0, W = 0, Y = new Array(), $ = 1; $ <= 16; $++) {
      for (var et = 1; et <= L[$]; et++) Y[j[W]] = [], Y[j[W]][0] = B, Y[j[W]][1] = $, W++, B++;
      B *= 2;
    }
    return Y;
  }
  function lt(L) {
    for (var j = L[0], B = L[1] - 1; B >= 0; ) j & 1 << B && (q |= 1 << _), B--, --_ < 0 && (q == 255 ? (Q(255), Q(0)) : Q(q), _ = 7, q = 0);
  }
  function Q(L) {
    I.push(L);
  }
  function ft(L) {
    Q(L >> 8 & 255), Q(255 & L);
  }
  function ht(L, j, B, W, Y) {
    for (var $, et = Y[0], rt = Y[240], At = function(Lt, xt) {
      var Ft, Pt, qt, Gt, Qt, te, ie, de, Wt, ee, It = 0;
      for (Wt = 0; Wt < 8; ++Wt) {
        Ft = Lt[It], Pt = Lt[It + 1], qt = Lt[It + 2], Gt = Lt[It + 3], Qt = Lt[It + 4], te = Lt[It + 5], ie = Lt[It + 6];
        var Ve = Ft + (de = Lt[It + 7]), oe = Ft - de, yn = Pt + ie, ge = Pt - ie, Le = qt + te, Rn = qt - te, ce = Gt + Qt, jr = Gt - Qt, Ae = Ve + ce, Ln = Ve - ce, Qn = yn + Le, xe = yn - Le;
        Lt[It] = Ae + Qn, Lt[It + 4] = Ae - Qn;
        var Yt = 0.707106781 * (xe + Ln);
        Lt[It + 2] = Ln + Yt, Lt[It + 6] = Ln - Yt;
        var ue = 0.382683433 * ((Ae = jr + Rn) - (xe = ge + oe)), Or = 0.5411961 * Ae + ue, He = 1.306562965 * xe + ue, Tn = 0.707106781 * (Qn = Rn + ge), zn = oe + Tn, Tt = oe - Tn;
        Lt[It + 5] = Tt + Or, Lt[It + 3] = Tt - Or, Lt[It + 1] = zn + He, Lt[It + 7] = zn - He, It += 8;
      }
      for (It = 0, Wt = 0; Wt < 8; ++Wt) {
        Ft = Lt[It], Pt = Lt[It + 8], qt = Lt[It + 16], Gt = Lt[It + 24], Qt = Lt[It + 32], te = Lt[It + 40], ie = Lt[It + 48];
        var Nn = Ft + (de = Lt[It + 56]), Un = Ft - de, tn = Pt + ie, qe = Pt - ie, Oe = qt + te, un = qt - te, Gr = Gt + Qt, $n = Gt - Qt, An = Nn + Gr, xn = Nn - Gr, Sn = tn + Oe, Hn = tn - Oe;
        Lt[It] = An + Sn, Lt[It + 32] = An - Sn;
        var pn = 0.707106781 * (Hn + xn);
        Lt[It + 16] = xn + pn, Lt[It + 48] = xn - pn;
        var Wn = 0.382683433 * ((An = $n + un) - (Hn = qe + Un)), Mr = 0.5411961 * An + Wn, Yr = 1.306562965 * Hn + Wn, Jr = 0.707106781 * (Sn = un + qe), Xr = Un + Jr, Kr = Un - Jr;
        Lt[It + 40] = Kr + Mr, Lt[It + 24] = Kr - Mr, Lt[It + 8] = Xr + Yr, Lt[It + 56] = Xr - Yr, It++;
      }
      for (Wt = 0; Wt < 64; ++Wt) ee = Lt[Wt] * xt[Wt], p[Wt] = ee > 0 ? ee + 0.5 | 0 : ee - 0.5 | 0;
      return p;
    }(L, j), Nt = 0; Nt < 64; ++Nt) O[tt[Nt]] = At[Nt];
    var Ct = O[0] - B;
    B = O[0], Ct == 0 ? lt(W[0]) : (lt(W[S[$ = 32767 + Ct]]), lt(A[$]));
    for (var Mt = 63; Mt > 0 && O[Mt] == 0; ) Mt--;
    if (Mt == 0) return lt(et), B;
    for (var zt, ct = 1; ct <= Mt; ) {
      for (var E = ct; O[ct] == 0 && ct <= Mt; ) ++ct;
      var Xt = ct - E;
      if (Xt >= 16) {
        zt = Xt >> 4;
        for (var Et = 1; Et <= zt; ++Et) lt(rt);
        Xt &= 15;
      }
      $ = 32767 + O[ct], lt(Y[(Xt << 4) + S[$]]), lt(A[$]), ct++;
    }
    return Mt != 63 && lt(et), B;
  }
  function kt(L) {
    L = Math.min(Math.max(L, 1), 100), o != L && (function(j) {
      for (var B = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], W = 0; W < 64; W++) {
        var Y = l((B[W] * j + 50) / 100);
        Y = Math.min(Math.max(Y, 1), 255), h[tt[W]] = Y;
      }
      for (var $ = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], et = 0; et < 64; et++) {
        var rt = l(($[et] * j + 50) / 100);
        rt = Math.min(Math.max(rt, 1), 255), f[tt[et]] = rt;
      }
      for (var At = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], Nt = 0, Ct = 0; Ct < 8; Ct++) for (var Mt = 0; Mt < 8; Mt++) g[Nt] = 1 / (h[tt[Nt]] * At[Ct] * At[Mt] * 8), b[Nt] = 1 / (f[tt[Nt]] * At[Ct] * At[Mt] * 8), Nt++;
    }(L < 50 ? Math.floor(5e3 / L) : Math.floor(200 - 2 * L)), o = L);
  }
  this.encode = function(L, j) {
    j && kt(j), I = new Array(), q = 0, _ = 7, ft(65496), ft(65504), ft(16), Q(74), Q(70), Q(73), Q(70), Q(0), Q(1), Q(1), Q(0), ft(1), ft(1), Q(0), Q(0), function() {
      ft(65499), ft(132), Q(0);
      for (var Pt = 0; Pt < 64; Pt++) Q(h[Pt]);
      Q(1);
      for (var qt = 0; qt < 64; qt++) Q(f[qt]);
    }(), function(Pt, qt) {
      ft(65472), ft(17), Q(8), ft(qt), ft(Pt), Q(3), Q(1), Q(17), Q(0), Q(2), Q(17), Q(1), Q(3), Q(17), Q(1);
    }(L.width, L.height), function() {
      ft(65476), ft(418), Q(0);
      for (var Pt = 0; Pt < 16; Pt++) Q(R[Pt + 1]);
      for (var qt = 0; qt <= 11; qt++) Q(gt[qt]);
      Q(16);
      for (var Gt = 0; Gt < 16; Gt++) Q(dt[Gt + 1]);
      for (var Qt = 0; Qt <= 161; Qt++) Q(F[Qt]);
      Q(1);
      for (var te = 0; te < 16; te++) Q(P[te + 1]);
      for (var ie = 0; ie <= 11; ie++) Q(z[ie]);
      Q(17);
      for (var de = 0; de < 16; de++) Q(D[de + 1]);
      for (var Wt = 0; Wt <= 161; Wt++) Q(at[Wt]);
    }(), ft(65498), ft(12), Q(3), Q(1), Q(0), Q(2), Q(17), Q(3), Q(17), Q(0), Q(63), Q(0);
    var B = 0, W = 0, Y = 0;
    q = 0, _ = 7, this.encode.displayName = "_encode_";
    for (var $, et, rt, At, Nt, Ct, Mt, zt, ct, E = L.data, Xt = L.width, Et = L.height, Lt = 4 * Xt, xt = 0; xt < Et; ) {
      for ($ = 0; $ < Lt; ) {
        for (Nt = Lt * xt + $, Mt = -1, zt = 0, ct = 0; ct < 64; ct++) Ct = Nt + (zt = ct >> 3) * Lt + (Mt = 4 * (7 & ct)), xt + zt >= Et && (Ct -= Lt * (xt + 1 + zt - Et)), $ + Mt >= Lt && (Ct -= $ + Mt - Lt + 4), et = E[Ct++], rt = E[Ct++], At = E[Ct++], M[ct] = (wt[et] + wt[rt + 256 >> 0] + wt[At + 512 >> 0] >> 16) - 128, X[ct] = (wt[et + 768 >> 0] + wt[rt + 1024 >> 0] + wt[At + 1280 >> 0] >> 16) - 128, ot[ct] = (wt[et + 1280 >> 0] + wt[rt + 1536 >> 0] + wt[At + 1792 >> 0] >> 16) - 128;
        B = ht(M, g, B, e, a), W = ht(X, b, W, n, c), Y = ht(ot, b, Y, n, c), $ += 32;
      }
      xt += 8;
    }
    if (_ >= 0) {
      var Ft = [];
      Ft[1] = _ + 1, Ft[0] = (1 << _ + 1) - 1, lt(Ft);
    }
    return ft(65497), new Uint8Array(I);
  }, i2 = i2 || 50, function() {
    for (var L = String.fromCharCode, j = 0; j < 256; j++) ut[j] = L(j);
  }(), e = nt(R, gt), n = nt(P, z), a = nt(dt, F), c = nt(D, at), function() {
    for (var L = 1, j = 2, B = 1; B <= 15; B++) {
      for (var W = L; W < j; W++) S[32767 + W] = B, A[32767 + W] = [], A[32767 + W][1] = B, A[32767 + W][0] = W;
      for (var Y = -(j - 1); Y <= -L; Y++) S[32767 + Y] = B, A[32767 + Y] = [], A[32767 + Y][1] = B, A[32767 + Y][0] = j - 1 + Y;
      L <<= 1, j <<= 1;
    }
  }(), function() {
    for (var L = 0; L < 256; L++) wt[L] = 19595 * L, wt[L + 256 >> 0] = 38470 * L, wt[L + 512 >> 0] = 7471 * L + 32768, wt[L + 768 >> 0] = -11059 * L, wt[L + 1024 >> 0] = -21709 * L, wt[L + 1280 >> 0] = 32768 * L + 8421375, wt[L + 1536 >> 0] = -27439 * L, wt[L + 1792 >> 0] = -5329 * L;
  }(), kt(i2);
}
function En(i2, e) {
  if (this.pos = 0, this.buffer = i2, this.datav = new DataView(i2.buffer), this.is_with_alpha = !!e, this.bottom_up = true, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Lc(i2) {
  function e(R) {
    if (!R) throw Error("assert :P");
  }
  function n(R, gt, dt) {
    for (var F = 0; 4 > F; F++) if (R[gt + F] != dt.charCodeAt(F)) return true;
    return false;
  }
  function a(R, gt, dt, F, P) {
    for (var z = 0; z < P; z++) R[gt + z] = dt[F + z];
  }
  function c(R, gt, dt, F) {
    for (var P = 0; P < F; P++) R[gt + P] = dt;
  }
  function o(R) {
    return new Int32Array(R);
  }
  function l(R, gt) {
    for (var dt = [], F = 0; F < R; F++) dt.push(new gt());
    return dt;
  }
  function h(R, gt) {
    var dt = [];
    return function F(P, z, D) {
      for (var at = D[z], nt = 0; nt < at && (P.push(D.length > z + 1 ? [] : new gt()), !(D.length < z + 1)); nt++) F(P[nt], z + 1, D);
    }(dt, 0, R), dt;
  }
  var f = function() {
    var R = this;
    function gt(t, r) {
      for (var u = 1 << r - 1 >>> 0; t & u; ) u >>>= 1;
      return u ? (t & u - 1) + u : t;
    }
    function dt(t, r, u, d, m) {
      e(!(d % u));
      do
        t[r + (d -= u)] = m;
      while (0 < d);
    }
    function F(t, r, u, d, m) {
      if (e(2328 >= m), 512 >= m) var w = o(512);
      else if ((w = o(m)) == null) return 0;
      return function(y, N, x, k, U, K) {
        var Z, G, vt = N, it = 1 << x, H = o(16), V = o(16);
        for (e(U != 0), e(k != null), e(y != null), e(0 < x), G = 0; G < U; ++G) {
          if (15 < k[G]) return 0;
          ++H[k[G]];
        }
        if (H[0] == U) return 0;
        for (V[1] = 0, Z = 1; 15 > Z; ++Z) {
          if (H[Z] > 1 << Z) return 0;
          V[Z + 1] = V[Z] + H[Z];
        }
        for (G = 0; G < U; ++G) Z = k[G], 0 < k[G] && (K[V[Z]++] = G);
        if (V[15] == 1) return (k = new P()).g = 0, k.value = K[0], dt(y, vt, 1, it, k), it;
        var pt, bt = -1, mt = it - 1, Ot = 0, St = 1, Rt = 1, _t = 1 << x;
        for (G = 0, Z = 1, U = 2; Z <= x; ++Z, U <<= 1) {
          if (St += Rt <<= 1, 0 > (Rt -= H[Z])) return 0;
          for (; 0 < H[Z]; --H[Z]) (k = new P()).g = Z, k.value = K[G++], dt(y, vt + Ot, U, _t, k), Ot = gt(Ot, Z);
        }
        for (Z = x + 1, U = 2; 15 >= Z; ++Z, U <<= 1) {
          if (St += Rt <<= 1, 0 > (Rt -= H[Z])) return 0;
          for (; 0 < H[Z]; --H[Z]) {
            if (k = new P(), (Ot & mt) != bt) {
              for (vt += _t, pt = 1 << (bt = Z) - x; 15 > bt && !(0 >= (pt -= H[bt])); ) ++bt, pt <<= 1;
              it += _t = 1 << (pt = bt - x), y[N + (bt = Ot & mt)].g = pt + x, y[N + bt].value = vt - N - bt;
            }
            k.g = Z - x, k.value = K[G++], dt(y, vt + (Ot >> x), U, _t, k), Ot = gt(Ot, Z);
          }
        }
        return St != 2 * V[15] - 1 ? 0 : it;
      }(t, r, u, d, m, w);
    }
    function P() {
      this.value = this.g = 0;
    }
    function z() {
      this.value = this.g = 0;
    }
    function D() {
      this.G = l(5, P), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = l(nn, z);
    }
    function at(t, r, u, d) {
      e(t != null), e(r != null), e(2147483648 > d), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = r, t.pa = u, t.Jd = r, t.Yc = u + d, t.Zc = 4 <= d ? u + d - 4 + 1 : u, $(t);
    }
    function nt(t, r) {
      for (var u = 0; 0 < r--; ) u |= rt(t, 128) << r;
      return u;
    }
    function lt(t, r) {
      var u = nt(t, r);
      return et(t) ? -u : u;
    }
    function Q(t, r, u, d) {
      var m, w = 0;
      for (e(t != null), e(r != null), e(4294967288 > d), t.Sb = d, t.Ra = 0, t.u = 0, t.h = 0, 4 < d && (d = 4), m = 0; m < d; ++m) w += r[u + m] << 8 * m;
      t.Ra = w, t.bb = d, t.oa = r, t.pa = u;
    }
    function ft(t) {
      for (; 8 <= t.u && t.bb < t.Sb; ) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << hi - 8 >>> 0, ++t.bb, t.u -= 8;
      B(t) && (t.h = 1, t.u = 0);
    }
    function ht(t, r) {
      if (e(0 <= r), !t.h && r <= li) {
        var u = j(t) & ui[r];
        return t.u += r, ft(t), u;
      }
      return t.h = 1, t.u = 0;
    }
    function kt() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function L() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function j(t) {
      return t.Ra >>> (t.u & hi - 1) >>> 0;
    }
    function B(t) {
      return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > hi;
    }
    function W(t, r) {
      t.u = r, t.h = B(t);
    }
    function Y(t) {
      t.u >= Yi && (e(t.u >= Yi), ft(t));
    }
    function $(t) {
      e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
    }
    function et(t) {
      return nt(t, 1);
    }
    function rt(t, r) {
      var u = t.Ca;
      0 > t.b && $(t);
      var d = t.b, m = u * r >>> 8, w = (t.I >>> d > m) + 0;
      for (w ? (u -= m, t.I -= m + 1 << d >>> 0) : u = m + 1, d = u, m = 0; 256 <= d; ) m += 8, d >>= 8;
      return d = 7 ^ m + rn[d], t.b -= d, t.Ca = (u << d) - 1, w;
    }
    function At(t, r, u) {
      t[r + 0] = u >> 24 & 255, t[r + 1] = u >> 16 & 255, t[r + 2] = u >> 8 & 255, t[r + 3] = u >> 0 & 255;
    }
    function Nt(t, r) {
      return t[r + 0] << 0 | t[r + 1] << 8;
    }
    function Ct(t, r) {
      return Nt(t, r) | t[r + 2] << 16;
    }
    function Mt(t, r) {
      return Nt(t, r) | Nt(t, r + 2) << 16;
    }
    function zt(t, r) {
      var u = 1 << r;
      return e(t != null), e(0 < r), t.X = o(u), t.X == null ? 0 : (t.Mb = 32 - r, t.Xa = r, 1);
    }
    function ct(t, r) {
      e(t != null), e(r != null), e(t.Xa == r.Xa), a(r.X, 0, t.X, 0, 1 << r.Xa);
    }
    function E() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Xt(t, r, u, d) {
      e(u != null), e(d != null);
      var m = u[0], w = d[0];
      return m == 0 && (m = (t * w + r / 2) / r), w == 0 && (w = (r * m + t / 2) / t), 0 >= m || 0 >= w ? 0 : (u[0] = m, d[0] = w, 1);
    }
    function Et(t, r) {
      return t + (1 << r) - 1 >>> r;
    }
    function Lt(t, r) {
      return ((4278255360 & t) + (4278255360 & r) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & r) >>> 0 & 16711935) >>> 0;
    }
    function xt(t, r) {
      R[r] = function(u, d, m, w, y, N, x) {
        var k;
        for (k = 0; k < y; ++k) {
          var U = R[t](N[x + k - 1], m, w + k);
          N[x + k] = Lt(u[d + k], U);
        }
      };
    }
    function Ft() {
      this.ud = this.hd = this.jd = 0;
    }
    function Pt(t, r) {
      return ((4278124286 & (t ^ r)) >>> 1) + (t & r) >>> 0;
    }
    function qt(t) {
      return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
    }
    function Gt(t, r) {
      return qt(t + (t - r + 0.5 >> 1));
    }
    function Qt(t, r, u) {
      return Math.abs(r - u) - Math.abs(t - u);
    }
    function te(t, r, u, d, m, w, y) {
      for (d = w[y - 1], u = 0; u < m; ++u) w[y + u] = d = Lt(t[r + u], d);
    }
    function ie(t, r, u, d, m) {
      var w;
      for (w = 0; w < u; ++w) {
        var y = t[r + w], N = y >> 8 & 255, x = 16711935 & (x = (x = 16711935 & y) + ((N << 16) + N));
        d[m + w] = (4278255360 & y) + x >>> 0;
      }
    }
    function de(t, r) {
      r.jd = t >> 0 & 255, r.hd = t >> 8 & 255, r.ud = t >> 16 & 255;
    }
    function Wt(t, r, u, d, m, w) {
      var y;
      for (y = 0; y < d; ++y) {
        var N = r[u + y], x = N >>> 8, k = N, U = 255 & (U = (U = N >>> 16) + ((t.jd << 24 >> 24) * (x << 24 >> 24) >>> 5));
        k = 255 & (k = (k = k + ((t.hd << 24 >> 24) * (x << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (U << 24 >> 24) >>> 5)), m[w + y] = (4278255360 & N) + (U << 16) + k;
      }
    }
    function ee(t, r, u, d, m) {
      R[r] = function(w, y, N, x, k, U, K, Z, G) {
        for (x = K; x < Z; ++x) for (K = 0; K < G; ++K) k[U++] = m(N[d(w[y++])]);
      }, R[t] = function(w, y, N, x, k, U, K) {
        var Z = 8 >> w.b, G = w.Ea, vt = w.K[0], it = w.w;
        if (8 > Z) for (w = (1 << w.b) - 1, it = (1 << Z) - 1; y < N; ++y) {
          var H, V = 0;
          for (H = 0; H < G; ++H) H & w || (V = d(x[k++])), U[K++] = m(vt[V & it]), V >>= Z;
        }
        else R["VP8LMapColor" + u](x, k, vt, it, U, K, y, N, G);
      };
    }
    function It(t, r, u, d, m) {
      for (u = r + u; r < u; ) {
        var w = t[r++];
        d[m++] = w >> 16 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 0 & 255;
      }
    }
    function Ve(t, r, u, d, m) {
      for (u = r + u; r < u; ) {
        var w = t[r++];
        d[m++] = w >> 16 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 0 & 255, d[m++] = w >> 24 & 255;
      }
    }
    function oe(t, r, u, d, m) {
      for (u = r + u; r < u; ) {
        var w = (y = t[r++]) >> 16 & 240 | y >> 12 & 15, y = y >> 0 & 240 | y >> 28 & 15;
        d[m++] = w, d[m++] = y;
      }
    }
    function yn(t, r, u, d, m) {
      for (u = r + u; r < u; ) {
        var w = (y = t[r++]) >> 16 & 248 | y >> 13 & 7, y = y >> 5 & 224 | y >> 3 & 31;
        d[m++] = w, d[m++] = y;
      }
    }
    function ge(t, r, u, d, m) {
      for (u = r + u; r < u; ) {
        var w = t[r++];
        d[m++] = w >> 0 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 16 & 255;
      }
    }
    function Le(t, r, u, d, m, w) {
      if (w == 0) for (u = r + u; r < u; ) At(d, ((w = t[r++])[0] >> 24 | w[1] >> 8 & 65280 | w[2] << 8 & 16711680 | w[3] << 24) >>> 0), m += 32;
      else a(d, m, t, r, u);
    }
    function Rn(t, r) {
      R[r][0] = R[t + "0"], R[r][1] = R[t + "1"], R[r][2] = R[t + "2"], R[r][3] = R[t + "3"], R[r][4] = R[t + "4"], R[r][5] = R[t + "5"], R[r][6] = R[t + "6"], R[r][7] = R[t + "7"], R[r][8] = R[t + "8"], R[r][9] = R[t + "9"], R[r][10] = R[t + "10"], R[r][11] = R[t + "11"], R[r][12] = R[t + "12"], R[r][13] = R[t + "13"], R[r][14] = R[t + "0"], R[r][15] = R[t + "0"];
    }
    function ce(t) {
      return t == Ro || t == To || t == Ea || t == zo;
    }
    function jr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Ae() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function Ln() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new jr(), this.f.kb = new Ae(), this.sd = null;
    }
    function Qn() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function xe() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function Yt(t) {
      return alert("todo:WebPSamplerProcessPlane"), t.T;
    }
    function ue(t, r) {
      var u = t.T, d = r.ba.f.RGBA, m = d.eb, w = d.fb + t.ka * d.A, y = bn[r.ba.S], N = t.y, x = t.O, k = t.f, U = t.N, K = t.ea, Z = t.W, G = r.cc, vt = r.dc, it = r.Mc, H = r.Nc, V = t.ka, pt = t.ka + t.T, bt = t.U, mt = bt + 1 >> 1;
      for (V == 0 ? y(N, x, null, null, k, U, K, Z, k, U, K, Z, m, w, null, null, bt) : (y(r.ec, r.fc, N, x, G, vt, it, H, k, U, K, Z, m, w - d.A, m, w, bt), ++u); V + 2 < pt; V += 2) G = k, vt = U, it = K, H = Z, U += t.Rc, Z += t.Rc, w += 2 * d.A, y(N, (x += 2 * t.fa) - t.fa, N, x, G, vt, it, H, k, U, K, Z, m, w - d.A, m, w, bt);
      return x += t.fa, t.j + pt < t.o ? (a(r.ec, r.fc, N, x, bt), a(r.cc, r.dc, k, U, mt), a(r.Mc, r.Nc, K, Z, mt), u--) : 1 & pt || y(N, x, null, null, k, U, K, Z, k, U, K, Z, m, w + d.A, null, null, bt), u;
    }
    function Or(t, r, u) {
      var d = t.F, m = [t.J];
      if (d != null) {
        var w = t.U, y = r.ba.S, N = y == Ba || y == Ea;
        r = r.ba.f.RGBA;
        var x = [0], k = t.ka;
        x[0] = t.T, t.Kb && (k == 0 ? --x[0] : (--k, m[0] -= t.width), t.j + t.ka + t.T == t.o && (x[0] = t.o - t.j - k));
        var U = r.eb;
        k = r.fb + k * r.A, t = Ia(d, m[0], t.width, w, x, U, k + (N ? 0 : 3), r.A), e(u == x), t && ce(y) && wr(U, k, N, w, x, r.A);
      }
      return 0;
    }
    function He(t) {
      var r = t.ma, u = r.ba.S, d = 11 > u, m = u == Oa || u == Ma || u == Ba || u == Do || u == 12 || ce(u);
      if (r.memory = null, r.Ib = null, r.Jb = null, r.Nd = null, !Vi(r.Oa, t, m ? 11 : 12)) return 0;
      if (m && ce(u) && yt(), t.da) alert("todo:use_scaling");
      else {
        if (d) {
          if (r.Ib = Yt, t.Kb) {
            if (u = t.U + 1 >> 1, r.memory = o(t.U + 2 * u), r.memory == null) return 0;
            r.ec = r.memory, r.fc = 0, r.cc = r.ec, r.dc = r.fc + t.U, r.Mc = r.cc, r.Nc = r.dc + u, r.Ib = ue, yt();
          }
        } else alert("todo:EmitYUV");
        m && (r.Jb = Or, d && J());
      }
      if (d && !Rs) {
        for (t = 0; 256 > t; ++t) iu[t] = 89858 * (t - 128) + Da >> qa, su[t] = -22014 * (t - 128) + Da, ou[t] = -45773 * (t - 128), au[t] = 113618 * (t - 128) + Da >> qa;
        for (t = $i; t < Wo; ++t) r = 76283 * (t - 16) + Da >> qa, cu[t - $i] = ln(r, 255), uu[t - $i] = ln(r + 8 >> 4, 15);
        Rs = 1;
      }
      return 1;
    }
    function Tn(t) {
      var r = t.ma, u = t.U, d = t.T;
      return e(!(1 & t.ka)), 0 >= u || 0 >= d ? 0 : (u = r.Ib(t, r), r.Jb != null && r.Jb(t, r, u), r.Dc += u, 1);
    }
    function zn(t) {
      t.ma.memory = null;
    }
    function Tt(t, r, u, d) {
      return ht(t, 8) != 47 ? 0 : (r[0] = ht(t, 14) + 1, u[0] = ht(t, 14) + 1, d[0] = ht(t, 1), ht(t, 3) != 0 ? 0 : !t.h);
    }
    function Nn(t, r) {
      if (4 > t) return t + 1;
      var u = t - 2 >> 1;
      return (2 + (1 & t) << u) + ht(r, u) + 1;
    }
    function Un(t, r) {
      return 120 < r ? r - 120 : 1 <= (u = ((u = Wc[r - 1]) >> 4) * t + (8 - (15 & u))) ? u : 1;
      var u;
    }
    function tn(t, r, u) {
      var d = j(u), m = t[r += 255 & d].g - 8;
      return 0 < m && (W(u, u.u + 8), d = j(u), r += t[r].value, r += d & (1 << m) - 1), W(u, u.u + t[r].g), t[r].value;
    }
    function qe(t, r, u) {
      return u.g += t.g, u.value += t.value << r >>> 0, e(8 >= u.g), t.g;
    }
    function Oe(t, r, u) {
      var d = t.xc;
      return e((r = d == 0 ? 0 : t.vc[t.md * (u >> d) + (r >> d)]) < t.Wb), t.Ya[r];
    }
    function un(t, r, u, d) {
      var m = t.ab, w = t.c * r, y = t.C;
      r = y + r;
      var N = u, x = d;
      for (d = t.Ta, u = t.Ua; 0 < m--; ) {
        var k = t.gc[m], U = y, K = r, Z = N, G = x, vt = (x = d, N = u, k.Ea);
        switch (e(U < K), e(K <= k.nc), k.hc) {
          case 2:
            Fa(Z, G, (K - U) * vt, x, N);
            break;
          case 0:
            var it = U, H = K, V = x, pt = N, bt = (_t = k).Ea;
            it == 0 && (Mo(Z, G, null, null, 1, V, pt), te(Z, G + 1, 0, 0, bt - 1, V, pt + 1), G += bt, pt += bt, ++it);
            for (var mt = 1 << _t.b, Ot = mt - 1, St = Et(bt, _t.b), Rt = _t.K, _t = _t.w + (it >> _t.b) * St; it < H; ) {
              var se = Rt, le = _t, ae = 1;
              for (Ji(Z, G, V, pt - bt, 1, V, pt); ae < bt; ) {
                var ne = (ae & ~Ot) + mt;
                ne > bt && (ne = bt), (0, gr[se[le++] >> 8 & 15])(Z, G + +ae, V, pt + ae - bt, ne - ae, V, pt + ae), ae = ne;
              }
              G += bt, pt += bt, ++it & Ot || (_t += St);
            }
            K != k.nc && a(x, N - vt, x, N + (K - U - 1) * vt, vt);
            break;
          case 1:
            for (vt = Z, H = G, bt = (Z = k.Ea) - (pt = Z & ~(V = (G = 1 << k.b) - 1)), it = Et(Z, k.b), mt = k.K, k = k.w + (U >> k.b) * it; U < K; ) {
              for (Ot = mt, St = k, Rt = new Ft(), _t = H + pt, se = H + Z; H < _t; ) de(Ot[St++], Rt), gn(Rt, vt, H, G, x, N), H += G, N += G;
              H < se && (de(Ot[St++], Rt), gn(Rt, vt, H, bt, x, N), H += bt, N += bt), ++U & V || (k += it);
            }
            break;
          case 3:
            if (Z == x && G == N && 0 < k.b) {
              for (H = x, Z = vt = N + (K - U) * vt - (pt = (K - U) * Et(k.Ea, k.b)), G = x, V = N, it = [], pt = (bt = pt) - 1; 0 <= pt; --pt) it[pt] = G[V + pt];
              for (pt = bt - 1; 0 <= pt; --pt) H[Z + pt] = it[pt];
              Fn(k, U, K, x, vt, x, N);
            } else Fn(k, U, K, Z, G, x, N);
        }
        N = d, x = u;
      }
      x != u && a(d, u, N, x, w);
    }
    function Gr(t, r) {
      var u = t.V, d = t.Ba + t.c * t.C, m = r - t.C;
      if (e(r <= t.l.o), e(16 >= m), 0 < m) {
        var w = t.l, y = t.Ta, N = t.Ua, x = w.width;
        if (un(t, m, u, d), m = N = [N], e((u = t.C) < (d = r)), e(w.v < w.va), d > w.o && (d = w.o), u < w.j) {
          var k = w.j - u;
          u = w.j, m[0] += k * x;
        }
        if (u >= d ? u = 0 : (m[0] += 4 * w.v, w.ka = u - w.j, w.U = w.va - w.v, w.T = d - u, u = 1), u) {
          if (N = N[0], 11 > (u = t.ca).S) {
            var U = u.f.RGBA, K = (d = u.S, m = w.U, w = w.T, k = U.eb, U.A), Z = w;
            for (U = U.fb + t.Ma * U.A; 0 < Z--; ) {
              var G = y, vt = N, it = m, H = k, V = U;
              switch (d) {
                case ja:
                  In(G, vt, it, H, V);
                  break;
                case Oa:
                  mr(G, vt, it, H, V);
                  break;
                case Ro:
                  mr(G, vt, it, H, V), wr(H, V, 0, it, 1, 0);
                  break;
                case Fs:
                  fi(G, vt, it, H, V);
                  break;
                case Ma:
                  Le(G, vt, it, H, V, 1);
                  break;
                case To:
                  Le(G, vt, it, H, V, 1), wr(H, V, 0, it, 1, 0);
                  break;
                case Ba:
                  Le(G, vt, it, H, V, 0);
                  break;
                case Ea:
                  Le(G, vt, it, H, V, 0), wr(H, V, 1, it, 1, 0);
                  break;
                case Do:
                  Gn(G, vt, it, H, V);
                  break;
                case zo:
                  Gn(G, vt, it, H, V), gi(H, V, it, 1, 0);
                  break;
                case Is:
                  rr(G, vt, it, H, V);
                  break;
                default:
                  e(0);
              }
              N += x, U += K;
            }
            t.Ma += w;
          } else alert("todo:EmitRescaledRowsYUVA");
          e(t.Ma <= u.height);
        }
      }
      t.C = r, e(t.C <= t.i);
    }
    function $n(t) {
      var r;
      if (0 < t.ua) return 0;
      for (r = 0; r < t.Wb; ++r) {
        var u = t.Ya[r].G, d = t.Ya[r].H;
        if (0 < u[1][d[1] + 0].g || 0 < u[2][d[2] + 0].g || 0 < u[3][d[3] + 0].g) return 0;
      }
      return 1;
    }
    function An(t, r, u, d, m, w) {
      if (t.Z != 0) {
        var y = t.qd, N = t.rd;
        for (e(Lr[t.Z] != null); r < u; ++r) Lr[t.Z](y, N, d, m, d, m, w), y = d, N = m, m += w;
        t.qd = y, t.rd = N;
      }
    }
    function xn(t, r) {
      var u = t.l.ma, d = u.Z == 0 || u.Z == 1 ? t.l.j : t.C;
      if (d = t.C < d ? d : t.C, e(r <= t.l.o), r > d) {
        var m = t.l.width, w = u.ca, y = u.tb + m * d, N = t.V, x = t.Ba + t.c * d, k = t.gc;
        e(t.ab == 1), e(k[0].hc == 3), Bo(k[0], d, r, N, x, w, y), An(u, d, r, w, y, m);
      }
      t.C = t.Ma = r;
    }
    function Sn(t, r, u, d, m, w, y) {
      var N = t.$ / d, x = t.$ % d, k = t.m, U = t.s, K = u + t.$, Z = K;
      m = u + d * m;
      var G = u + d * w, vt = 280 + U.ua, it = t.Pb ? N : 16777216, H = 0 < U.ua ? U.Wa : null, V = U.wc, pt = K < G ? Oe(U, x, N) : null;
      e(t.C < w), e(G <= m);
      var bt = false;
      t: for (; ; ) {
        for (; bt || K < G; ) {
          var mt = 0;
          if (N >= it) {
            var Ot = K - u;
            e((it = t).Pb), it.wd = it.m, it.xd = Ot, 0 < it.s.ua && ct(it.s.Wa, it.s.vb), it = N + Gc;
          }
          if (x & V || (pt = Oe(U, x, N)), e(pt != null), pt.Qb && (r[K] = pt.qb, bt = true), !bt) if (Y(k), pt.jc) {
            mt = k, Ot = r;
            var St = K, Rt = pt.pd[j(mt) & nn - 1];
            e(pt.jc), 256 > Rt.g ? (W(mt, mt.u + Rt.g), Ot[St] = Rt.value, mt = 0) : (W(mt, mt.u + Rt.g - 256), e(256 <= Rt.value), mt = Rt.value), mt == 0 && (bt = true);
          } else mt = tn(pt.G[0], pt.H[0], k);
          if (k.h) break;
          if (bt || 256 > mt) {
            if (!bt) if (pt.nd) r[K] = (pt.qb | mt << 8) >>> 0;
            else {
              if (Y(k), bt = tn(pt.G[1], pt.H[1], k), Y(k), Ot = tn(pt.G[2], pt.H[2], k), St = tn(pt.G[3], pt.H[3], k), k.h) break;
              r[K] = (St << 24 | bt << 16 | mt << 8 | Ot) >>> 0;
            }
            if (bt = false, ++K, ++x >= d && (x = 0, ++N, y != null && N <= w && !(N % 16) && y(t, N), H != null)) for (; Z < K; ) mt = r[Z++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
          } else if (280 > mt) {
            if (mt = Nn(mt - 256, k), Ot = tn(pt.G[4], pt.H[4], k), Y(k), Ot = Un(d, Ot = Nn(Ot, k)), k.h) break;
            if (K - u < Ot || m - K < mt) break t;
            for (St = 0; St < mt; ++St) r[K + St] = r[K + St - Ot];
            for (K += mt, x += mt; x >= d; ) x -= d, ++N, y != null && N <= w && !(N % 16) && y(t, N);
            if (e(K <= m), x & V && (pt = Oe(U, x, N)), H != null) for (; Z < K; ) mt = r[Z++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
          } else {
            if (!(mt < vt)) break t;
            for (bt = mt - 280, e(H != null); Z < K; ) mt = r[Z++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
            mt = K, e(!(bt >>> (Ot = H).Xa)), r[mt] = Ot.X[bt], bt = true;
          }
          bt || e(k.h == B(k));
        }
        if (t.Pb && k.h && K < m) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && ct(t.s.vb, t.s.Wa);
        else {
          if (k.h) break t;
          y != null && y(t, N > w ? w : N), t.a = 0, t.$ = K - u;
        }
        return 1;
      }
      return t.a = 3, 0;
    }
    function Hn(t) {
      e(t != null), t.vc = null, t.yc = null, t.Ya = null;
      var r = t.Wa;
      r != null && (r.X = null), t.vb = null, e(t != null);
    }
    function pn() {
      var t = new Oo();
      return t == null ? null : (t.a = 0, t.xb = Os, Rn("Predictor", "VP8LPredictors"), Rn("Predictor", "VP8LPredictors_C"), Rn("PredictorAdd", "VP8LPredictorsAdd"), Rn("PredictorAdd", "VP8LPredictorsAdd_C"), Fa = ie, gn = Wt, In = It, mr = Ve, Gn = oe, rr = yn, fi = ge, R.VP8LMapColor32b = Xi, R.VP8LMapColor8b = Eo, t);
    }
    function Wn(t, r, u, d, m) {
      var w = 1, y = [t], N = [r], x = d.m, k = d.s, U = null, K = 0;
      t: for (; ; ) {
        if (u) for (; w && ht(x, 1); ) {
          var Z = y, G = N, vt = d, it = 1, H = vt.m, V = vt.gc[vt.ab], pt = ht(H, 2);
          if (vt.Oc & 1 << pt) w = 0;
          else {
            switch (vt.Oc |= 1 << pt, V.hc = pt, V.Ea = Z[0], V.nc = G[0], V.K = [null], ++vt.ab, e(4 >= vt.ab), pt) {
              case 0:
              case 1:
                V.b = ht(H, 3) + 2, it = Wn(Et(V.Ea, V.b), Et(V.nc, V.b), 0, vt, V.K), V.K = V.K[0];
                break;
              case 3:
                var bt, mt = ht(H, 8) + 1, Ot = 16 < mt ? 0 : 4 < mt ? 1 : 2 < mt ? 2 : 3;
                if (Z[0] = Et(V.Ea, Ot), V.b = Ot, bt = it = Wn(mt, 1, 0, vt, V.K)) {
                  var St, Rt = mt, _t = V, se = 1 << (8 >> _t.b), le = o(se);
                  if (le == null) bt = 0;
                  else {
                    var ae = _t.K[0], ne = _t.w;
                    for (le[0] = _t.K[0][0], St = 1; St < 1 * Rt; ++St) le[St] = Lt(ae[ne + St], le[St - 1]);
                    for (; St < 4 * se; ++St) le[St] = 0;
                    _t.K[0] = null, _t.K[0] = le, bt = 1;
                  }
                }
                it = bt;
                break;
              case 2:
                break;
              default:
                e(0);
            }
            w = it;
          }
        }
        if (y = y[0], N = N[0], w && ht(x, 1) && !(w = 1 <= (K = ht(x, 4)) && 11 >= K)) {
          d.a = 3;
          break t;
        }
        var me;
        if (me = w) e: {
          var pe, Zt, Be, an = d, Ee = y, on = N, he = K, fn = u, dn = an.m, Te = an.s, We = [null], Qe = 1, wn = 0, Yn = Vc[he];
          n: for (; ; ) {
            if (fn && ht(dn, 1)) {
              var ze = ht(dn, 3) + 2, cr = Et(Ee, ze), zr = Et(on, ze), mi = cr * zr;
              if (!Wn(cr, zr, 0, an, We)) break n;
              for (We = We[0], Te.xc = ze, pe = 0; pe < mi; ++pe) {
                var Nr = We[pe] >> 8 & 65535;
                We[pe] = Nr, Nr >= Qe && (Qe = Nr + 1);
              }
            }
            if (dn.h) break n;
            for (Zt = 0; 5 > Zt; ++Zt) {
              var _e = Cs[Zt];
              !Zt && 0 < he && (_e += 1 << he), wn < _e && (wn = _e);
            }
            var Vo = l(Qe * Yn, P), Us = Qe, Hs = l(Us, D);
            if (Hs == null) var Ta = null;
            else e(65536 >= Us), Ta = Hs;
            var ta = o(wn);
            if (Ta == null || ta == null || Vo == null) {
              an.a = 1;
              break n;
            }
            var za = Vo;
            for (pe = Be = 0; pe < Qe; ++pe) {
              var Mn = Ta[pe], vi = Mn.G, bi = Mn.H, Ws = 0, Ua = 1, Vs = 0;
              for (Zt = 0; 5 > Zt; ++Zt) {
                _e = Cs[Zt], vi[Zt] = za, bi[Zt] = Be, !Zt && 0 < he && (_e += 1 << he);
                i: {
                  var Ha, Go = _e, Wa = an, ea = ta, fu = za, du = Be, Yo = 0, Ar = Wa.m, pu = ht(Ar, 1);
                  if (c(ea, 0, 0, Go), pu) {
                    var gu = ht(Ar, 1) + 1, mu = ht(Ar, 1), Gs = ht(Ar, mu == 0 ? 1 : 8);
                    ea[Gs] = 1, gu == 2 && (ea[Gs = ht(Ar, 8)] = 1);
                    var Va = 1;
                  } else {
                    var Ys = o(19), Js = ht(Ar, 4) + 4;
                    if (19 < Js) {
                      Wa.a = 3;
                      var Ga = 0;
                      break i;
                    }
                    for (Ha = 0; Ha < Js; ++Ha) Ys[Hc[Ha]] = ht(Ar, 3);
                    var Jo = void 0, na = void 0, Xs = Wa, vu = Ys, Ya = Go, Ks = ea, Xo = 0, xr = Xs.m, Zs = 8, Qs = l(128, P);
                    r: for (; F(Qs, 0, 7, vu, 19); ) {
                      if (ht(xr, 1)) {
                        var bu = 2 + 2 * ht(xr, 3);
                        if ((Jo = 2 + ht(xr, bu)) > Ya) break r;
                      } else Jo = Ya;
                      for (na = 0; na < Ya && Jo--; ) {
                        Y(xr);
                        var $s = Qs[0 + (127 & j(xr))];
                        W(xr, xr.u + $s.g);
                        var wi = $s.value;
                        if (16 > wi) Ks[na++] = wi, wi != 0 && (Zs = wi);
                        else {
                          var wu = wi == 16, tc = wi - 16, yu = zc[tc], ec = ht(xr, Tc[tc]) + yu;
                          if (na + ec > Ya) break r;
                          for (var Lu = wu ? Zs : 0; 0 < ec--; ) Ks[na++] = Lu;
                        }
                      }
                      Xo = 1;
                      break r;
                    }
                    Xo || (Xs.a = 3), Va = Xo;
                  }
                  (Va = Va && !Ar.h) && (Yo = F(fu, du, 8, ea, Go)), Va && Yo != 0 ? Ga = Yo : (Wa.a = 3, Ga = 0);
                }
                if (Ga == 0) break n;
                if (Ua && Uc[Zt] == 1 && (Ua = za[Be].g == 0), Ws += za[Be].g, Be += Ga, 3 >= Zt) {
                  var ra, Ko = ta[0];
                  for (ra = 1; ra < _e; ++ra) ta[ra] > Ko && (Ko = ta[ra]);
                  Vs += Ko;
                }
              }
              if (Mn.nd = Ua, Mn.Qb = 0, Ua && (Mn.qb = (vi[3][bi[3] + 0].value << 24 | vi[1][bi[1] + 0].value << 16 | vi[2][bi[2] + 0].value) >>> 0, Ws == 0 && 256 > vi[0][bi[0] + 0].value && (Mn.Qb = 1, Mn.qb += vi[0][bi[0] + 0].value << 8)), Mn.jc = !Mn.Qb && 6 > Vs, Mn.jc) {
                var Ja, ur = Mn;
                for (Ja = 0; Ja < nn; ++Ja) {
                  var Sr = Ja, _r = ur.pd[Sr], Xa = ur.G[0][ur.H[0] + Sr];
                  256 <= Xa.value ? (_r.g = Xa.g + 256, _r.value = Xa.value) : (_r.g = 0, _r.value = 0, Sr >>= qe(Xa, 8, _r), Sr >>= qe(ur.G[1][ur.H[1] + Sr], 16, _r), Sr >>= qe(ur.G[2][ur.H[2] + Sr], 0, _r), qe(ur.G[3][ur.H[3] + Sr], 24, _r));
                }
              }
            }
            Te.vc = We, Te.Wb = Qe, Te.Ya = Ta, Te.yc = Vo, me = 1;
            break e;
          }
          me = 0;
        }
        if (!(w = me)) {
          d.a = 3;
          break t;
        }
        if (0 < K) {
          if (k.ua = 1 << K, !zt(k.Wa, K)) {
            d.a = 1, w = 0;
            break t;
          }
        } else k.ua = 0;
        var Zo = d, nc = y, Nu = N, Qo = Zo.s, $o = Qo.xc;
        if (Zo.c = nc, Zo.i = Nu, Qo.md = Et(nc, $o), Qo.wc = $o == 0 ? -1 : (1 << $o) - 1, u) {
          d.xb = $c;
          break t;
        }
        if ((U = o(y * N)) == null) {
          d.a = 1, w = 0;
          break t;
        }
        w = (w = Sn(d, U, 0, y, N, N, null)) && !x.h;
        break t;
      }
      return w ? (m != null ? m[0] = U : (e(U == null), e(u)), d.$ = 0, u || Hn(k)) : Hn(k), w;
    }
    function Mr(t, r) {
      var u = t.c * t.i, d = u + r + 16 * r;
      return e(t.c <= r), t.V = o(d), t.V == null ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + u + r, 1);
    }
    function Yr(t, r) {
      var u = t.C, d = r - u, m = t.V, w = t.Ba + t.c * u;
      for (e(r <= t.l.o); 0 < d; ) {
        var y = 16 < d ? 16 : d, N = t.l.ma, x = t.l.width, k = x * y, U = N.ca, K = N.tb + x * u, Z = t.Ta, G = t.Ua;
        un(t, y, m, w), As(Z, G, U, K, k), An(N, u, u + y, U, K, x), d -= y, m += y * t.c, u += y;
      }
      e(u == r), t.C = t.Ma = r;
    }
    function Jr() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Xr() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function Kr() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
    }
    function ua() {
      this.Yb = function() {
        var t = [];
        return function r(u, d, m) {
          for (var w = m[d], y = 0; y < w && (u.push(m.length > d + 1 ? [] : 0), !(m.length < d + 1)); y++) r(u[y], d + 1, m);
        }(t, 0, [3, 11]), t;
      }();
    }
    function uo() {
      this.jb = o(3), this.Wc = h([4, 8], ua), this.Xc = h([4, 17], ua);
    }
    function lo() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
    }
    function Zr() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function la() {
      this.Na = this.la = 0;
    }
    function ho() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function Fi() {
      this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function fo() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new Zr()), this.Y = 0, this.ya = Array(new Fi()), this.aa = 0, this.l = new Qr();
    }
    function ha() {
      this.y = o(16), this.f = o(8), this.ea = o(8);
    }
    function po() {
      this.cb = this.a = 0, this.sc = "", this.m = new kt(), this.Od = new Jr(), this.Kc = new Xr(), this.ed = new lo(), this.Qa = new Kr(), this.Ic = this.$c = this.Aa = 0, this.D = new fo(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = l(8, kt), this.ia = 0, this.pb = l(4, ho), this.Pa = new uo(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new ha()), this.Hd = 0, this.rb = Array(new la()), this.sb = 0, this.wa = Array(new Zr()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Fi()), this.L = this.aa = 0, this.gd = h([4, 2], Zr), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function Qr() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function go() {
      var t = new po();
      return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, Qi || (Qi = pa)), t;
    }
    function ke(t, r, u) {
      return t.a == 0 && (t.a = r, t.sc = u, t.cb = 0), 0;
    }
    function fa(t, r, u) {
      return 3 <= u && t[r + 0] == 157 && t[r + 1] == 1 && t[r + 2] == 42;
    }
    function da(t, r) {
      if (t == null) return 0;
      if (t.a = 0, t.sc = "OK", r == null) return ke(t, 2, "null VP8Io passed to VP8GetHeaders()");
      var u = r.data, d = r.w, m = r.ha;
      if (4 > m) return ke(t, 7, "Truncated header.");
      var w = u[d + 0] | u[d + 1] << 8 | u[d + 2] << 16, y = t.Od;
      if (y.Rb = !(1 & w), y.td = w >> 1 & 7, y.yd = w >> 4 & 1, y.ub = w >> 5, 3 < y.td) return ke(t, 3, "Incorrect keyframe parameters.");
      if (!y.yd) return ke(t, 4, "Frame not displayable.");
      d += 3, m -= 3;
      var N = t.Kc;
      if (y.Rb) {
        if (7 > m) return ke(t, 7, "cannot parse picture header");
        if (!fa(u, d, m)) return ke(t, 3, "Bad code word");
        N.c = 16383 & (u[d + 4] << 8 | u[d + 3]), N.Td = u[d + 4] >> 6, N.i = 16383 & (u[d + 6] << 8 | u[d + 5]), N.Ud = u[d + 6] >> 6, d += 7, m -= 7, t.za = N.c + 15 >> 4, t.Ub = N.i + 15 >> 4, r.width = N.c, r.height = N.i, r.Da = 0, r.j = 0, r.v = 0, r.va = r.width, r.o = r.height, r.da = 0, r.ib = r.width, r.hb = r.height, r.U = r.width, r.T = r.height, c((w = t.Pa).jb, 0, 255, w.jb.length), e((w = t.Qa) != null), w.Cb = 0, w.Bb = 0, w.Fb = 1, c(w.Zb, 0, 0, w.Zb.length), c(w.Lb, 0, 0, w.Lb);
      }
      if (y.ub > m) return ke(t, 7, "bad partition length");
      at(w = t.m, u, d, y.ub), d += y.ub, m -= y.ub, y.Rb && (N.Ld = et(w), N.Kd = et(w)), N = t.Qa;
      var x, k = t.Pa;
      if (e(w != null), e(N != null), N.Cb = et(w), N.Cb) {
        if (N.Bb = et(w), et(w)) {
          for (N.Fb = et(w), x = 0; 4 > x; ++x) N.Zb[x] = et(w) ? lt(w, 7) : 0;
          for (x = 0; 4 > x; ++x) N.Lb[x] = et(w) ? lt(w, 6) : 0;
        }
        if (N.Bb) for (x = 0; 3 > x; ++x) k.jb[x] = et(w) ? nt(w, 8) : 255;
      } else N.Bb = 0;
      if (w.Ka) return ke(t, 3, "cannot parse segment header");
      if ((N = t.ed).zd = et(w), N.Tb = nt(w, 6), N.wb = nt(w, 3), N.Pc = et(w), N.Pc && et(w)) {
        for (k = 0; 4 > k; ++k) et(w) && (N.vd[k] = lt(w, 6));
        for (k = 0; 4 > k; ++k) et(w) && (N.od[k] = lt(w, 6));
      }
      if (t.L = N.Tb == 0 ? 0 : N.zd ? 1 : 2, w.Ka) return ke(t, 3, "cannot parse filter header");
      var U = m;
      if (m = x = d, d = x + U, N = U, t.Xb = (1 << nt(t.m, 2)) - 1, U < 3 * (k = t.Xb)) u = 7;
      else {
        for (x += 3 * k, N -= 3 * k, U = 0; U < k; ++U) {
          var K = u[m + 0] | u[m + 1] << 8 | u[m + 2] << 16;
          K > N && (K = N), at(t.Jc[+U], u, x, K), x += K, N -= K, m += 3;
        }
        at(t.Jc[+k], u, x, N), u = x < d ? 0 : 5;
      }
      if (u != 0) return ke(t, u, "cannot parse partitions");
      for (u = nt(x = t.m, 7), m = et(x) ? lt(x, 4) : 0, d = et(x) ? lt(x, 4) : 0, N = et(x) ? lt(x, 4) : 0, k = et(x) ? lt(x, 4) : 0, x = et(x) ? lt(x, 4) : 0, U = t.Qa, K = 0; 4 > K; ++K) {
        if (U.Cb) {
          var Z = U.Zb[K];
          U.Fb || (Z += u);
        } else {
          if (0 < K) {
            t.pb[K] = t.pb[0];
            continue;
          }
          Z = u;
        }
        var G = t.pb[K];
        G.Sc[0] = Uo[ln(Z + m, 127)], G.Sc[1] = Ho[ln(Z + 0, 127)], G.Eb[0] = 2 * Uo[ln(Z + d, 127)], G.Eb[1] = 101581 * Ho[ln(Z + N, 127)] >> 16, 8 > G.Eb[1] && (G.Eb[1] = 8), G.Qc[0] = Uo[ln(Z + k, 117)], G.Qc[1] = Ho[ln(Z + x, 127)], G.lc = Z + x;
      }
      if (!y.Rb) return ke(t, 4, "Not a key frame.");
      for (et(w), y = t.Pa, u = 0; 4 > u; ++u) {
        for (m = 0; 8 > m; ++m) for (d = 0; 3 > d; ++d) for (N = 0; 11 > N; ++N) k = rt(w, Zc[u][m][d][N]) ? nt(w, 8) : Xc[u][m][d][N], y.Wc[u][m].Yb[d][N] = k;
        for (m = 0; 17 > m; ++m) y.Xc[u][m] = y.Wc[u][Qc[m]];
      }
      return t.kc = et(w), t.kc && (t.Bd = nt(w, 8)), t.cb = 1;
    }
    function pa(t, r, u, d, m, w, y) {
      var N = r[m].Yb[u];
      for (u = 0; 16 > m; ++m) {
        if (!rt(t, N[u + 0])) return m;
        for (; !rt(t, N[u + 1]); ) if (N = r[++m].Yb[0], u = 0, m == 16) return 16;
        var x = r[m + 1].Yb;
        if (rt(t, N[u + 2])) {
          var k = t, U = 0;
          if (rt(k, (Z = N)[(K = u) + 3])) if (rt(k, Z[K + 6])) {
            for (N = 0, K = 2 * (U = rt(k, Z[K + 8])) + (Z = rt(k, Z[K + 9 + U])), U = 0, Z = Yc[K]; Z[N]; ++N) U += U + rt(k, Z[N]);
            U += 3 + (8 << K);
          } else rt(k, Z[K + 7]) ? (U = 7 + 2 * rt(k, 165), U += rt(k, 145)) : U = 5 + rt(k, 159);
          else U = rt(k, Z[K + 4]) ? 3 + rt(k, Z[K + 5]) : 2;
          N = x[2];
        } else U = 1, N = x[1];
        x = y + Jc[m], 0 > (k = t).b && $(k);
        var K, Z = k.b, G = (K = k.Ca >> 1) - (k.I >> Z) >> 31;
        --k.b, k.Ca += G, k.Ca |= 1, k.I -= (K + 1 & G) << Z, w[x] = ((U ^ G) - G) * d[(0 < m) + 0];
      }
      return 16;
    }
    function Ii(t) {
      var r = t.rb[t.sb - 1];
      r.la = 0, r.Na = 0, c(t.zc, 0, 0, t.zc.length), t.ja = 0;
    }
    function mo(t, r) {
      if (t == null) return 0;
      if (r == null) return ke(t, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!t.cb && !da(t, r)) return 0;
      if (e(t.cb), r.ac == null || r.ac(r)) {
        r.ob && (t.L = 0);
        var u = Ra[t.L];
        if (t.L == 2 ? (t.yb = 0, t.zb = 0) : (t.yb = r.v - u >> 4, t.zb = r.j - u >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = r.o + 15 + u >> 4, t.Hb = r.va + 15 + u >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
          var d = t.ed;
          for (u = 0; 4 > u; ++u) {
            var m;
            if (t.Qa.Cb) {
              var w = t.Qa.Lb[u];
              t.Qa.Fb || (w += d.Tb);
            } else w = d.Tb;
            for (m = 0; 1 >= m; ++m) {
              var y = t.gd[u][m], N = w;
              if (d.Pc && (N += d.vd[0], m && (N += d.od[0])), 0 < (N = 0 > N ? 0 : 63 < N ? 63 : N)) {
                var x = N;
                0 < d.wb && (x = 4 < d.wb ? x >> 2 : x >> 1) > 9 - d.wb && (x = 9 - d.wb), 1 > x && (x = 1), y.dd = x, y.tc = 2 * N + x, y.ld = 40 <= N ? 2 : 15 <= N ? 1 : 0;
              } else y.tc = 0;
              y.La = m;
            }
          }
        }
        u = 0;
      } else ke(t, 6, "Frame setup failed"), u = t.a;
      if (u = u == 0) {
        if (u) {
          t.$c = 0, 0 < t.Aa || (t.Ic = hu);
          t: {
            u = t.Ic, d = 4 * (x = t.za);
            var k = 32 * x, U = x + 1, K = 0 < t.L ? x * (0 < t.Aa ? 2 : 1) : 0, Z = (t.Aa == 2 ? 2 : 1) * x;
            if ((y = d + 832 + (m = 3 * (16 * u + Ra[t.L]) / 2 * k) + (w = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != y) u = 0;
            else {
              if (y > t.Vb) {
                if (t.Vb = 0, t.Ec = o(y), t.Fc = 0, t.Ec == null) {
                  u = ke(t, 1, "no memory during frame initialization.");
                  break t;
                }
                t.Vb = y;
              }
              y = t.Ec, N = t.Fc, t.Ac = y, t.Bc = N, N += d, t.Gd = l(k, ha), t.Hd = 0, t.rb = l(U + 1, la), t.sb = 1, t.wa = K ? l(K, Zr) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += x), e(true), t.oc = y, t.pc = N, N += 832, t.ya = l(Z, Fi), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, t.Aa == 2 && (t.D.aa += x), t.R = 16 * x, t.B = 8 * x, x = (k = Ra[t.L]) * t.R, k = k / 2 * t.B, t.sa = y, t.ta = N + x, t.qa = t.sa, t.ra = t.ta + 16 * u * t.R + k, t.Ha = t.qa, t.Ia = t.ra + 8 * u * t.B + k, t.$c = 0, N += m, t.mb = w ? y : null, t.nb = w ? N : null, e(N + w <= t.Fc + t.Vb), Ii(t), c(t.Ac, t.Bc, 0, d), u = 1;
            }
          }
          if (u) {
            if (r.ka = 0, r.y = t.sa, r.O = t.ta, r.f = t.qa, r.N = t.ra, r.ea = t.Ha, r.Vd = t.Ia, r.fa = t.R, r.Rc = t.B, r.F = null, r.J = 0, !ks) {
              for (u = -255; 255 >= u; ++u) xs[255 + u] = 0 > u ? -u : u;
              for (u = -1020; 1020 >= u; ++u) Ss[1020 + u] = -128 > u ? -128 : 127 < u ? 127 : u;
              for (u = -112; 112 >= u; ++u) _s[112 + u] = -16 > u ? -16 : 15 < u ? 15 : u;
              for (u = -255; 510 >= u; ++u) Ps[255 + u] = 0 > u ? 0 : 255 < u ? 255 : u;
              ks = 1;
            }
            Cn = wo, di = vo, vr = ma, jn = bo, ir = va, Ki = ga, Rr = Ei, pi = qr, Tr = jo, br = qi, Zi = Co, mn = ii, ar = Di, be = _a, we = Sa, Fe = er, De = fr, or = Io, On[0] = Vn, On[1] = yo, On[2] = xo, On[3] = So, On[4] = ya, On[5] = ni, On[6] = La, On[7] = Oi, On[8] = Po, On[9] = _o, yr[0] = ba, yr[1] = No, yr[2] = tr, yr[3] = ti, yr[4] = Ge, yr[5] = Ao, yr[6] = wa, sr[0] = hr, sr[1] = Lo, sr[2] = ko, sr[3] = Mi, sr[4] = Er, sr[5] = Fo, sr[6] = Bi, u = 1;
          } else u = 0;
        }
        u && (u = function(G, vt) {
          for (G.M = 0; G.M < G.Va; ++G.M) {
            var it, H = G.Jc[G.M & G.Xb], V = G.m, pt = G;
            for (it = 0; it < pt.za; ++it) {
              var bt = V, mt = pt, Ot = mt.Ac, St = mt.Bc + 4 * it, Rt = mt.zc, _t = mt.ya[mt.aa + it];
              if (mt.Qa.Bb ? _t.$b = rt(bt, mt.Pa.jb[0]) ? 2 + rt(bt, mt.Pa.jb[2]) : rt(bt, mt.Pa.jb[1]) : _t.$b = 0, mt.kc && (_t.Ad = rt(bt, mt.Bd)), _t.Za = !rt(bt, 145) + 0, _t.Za) {
                var se = _t.Ob, le = 0;
                for (mt = 0; 4 > mt; ++mt) {
                  var ae, ne = Rt[0 + mt];
                  for (ae = 0; 4 > ae; ++ae) {
                    ne = Kc[Ot[St + ae]][ne];
                    for (var me = js[rt(bt, ne[0])]; 0 < me; ) me = js[2 * me + rt(bt, ne[me])];
                    ne = -me, Ot[St + ae] = ne;
                  }
                  a(se, le, Ot, St, 4), le += 4, Rt[0 + mt] = ne;
                }
              } else ne = rt(bt, 156) ? rt(bt, 128) ? 1 : 3 : rt(bt, 163) ? 2 : 0, _t.Ob[0] = ne, c(Ot, St, ne, 4), c(Rt, 0, ne, 4);
              _t.Dd = rt(bt, 142) ? rt(bt, 114) ? rt(bt, 183) ? 1 : 3 : 2 : 0;
            }
            if (pt.m.Ka) return ke(G, 7, "Premature end-of-partition0 encountered.");
            for (; G.ja < G.za; ++G.ja) {
              if (pt = H, bt = (V = G).rb[V.sb - 1], Ot = V.rb[V.sb + V.ja], it = V.ya[V.aa + V.ja], St = V.kc ? it.Ad : 0) bt.la = Ot.la = 0, it.Za || (bt.Na = Ot.Na = 0), it.Hc = 0, it.Gc = 0, it.ia = 0;
              else {
                var pe, Zt;
                if (bt = Ot, Ot = pt, St = V.Pa.Xc, Rt = V.ya[V.aa + V.ja], _t = V.pb[Rt.$b], mt = Rt.ad, se = 0, le = V.rb[V.sb - 1], ne = ae = 0, c(mt, se, 0, 384), Rt.Za) var Be = 0, an = St[3];
                else {
                  me = o(16);
                  var Ee = bt.Na + le.Na;
                  if (Ee = Qi(Ot, St[1], Ee, _t.Eb, 0, me, 0), bt.Na = le.Na = (0 < Ee) + 0, 1 < Ee) Cn(me, 0, mt, se);
                  else {
                    var on = me[0] + 3 >> 3;
                    for (me = 0; 256 > me; me += 16) mt[se + me] = on;
                  }
                  Be = 1, an = St[0];
                }
                var he = 15 & bt.la, fn = 15 & le.la;
                for (me = 0; 4 > me; ++me) {
                  var dn = 1 & fn;
                  for (on = Zt = 0; 4 > on; ++on) he = he >> 1 | (dn = (Ee = Qi(Ot, an, Ee = dn + (1 & he), _t.Sc, Be, mt, se)) > Be) << 7, Zt = Zt << 2 | (3 < Ee ? 3 : 1 < Ee ? 2 : mt[se + 0] != 0), se += 16;
                  he >>= 4, fn = fn >> 1 | dn << 7, ae = (ae << 8 | Zt) >>> 0;
                }
                for (an = he, Be = fn >> 4, pe = 0; 4 > pe; pe += 2) {
                  for (Zt = 0, he = bt.la >> 4 + pe, fn = le.la >> 4 + pe, me = 0; 2 > me; ++me) {
                    for (dn = 1 & fn, on = 0; 2 > on; ++on) Ee = dn + (1 & he), he = he >> 1 | (dn = 0 < (Ee = Qi(Ot, St[2], Ee, _t.Qc, 0, mt, se))) << 3, Zt = Zt << 2 | (3 < Ee ? 3 : 1 < Ee ? 2 : mt[se + 0] != 0), se += 16;
                    he >>= 2, fn = fn >> 1 | dn << 5;
                  }
                  ne |= Zt << 4 * pe, an |= he << 4 << pe, Be |= (240 & fn) << pe;
                }
                bt.la = an, le.la = Be, Rt.Hc = ae, Rt.Gc = ne, Rt.ia = 43690 & ne ? 0 : _t.ia, St = !(ae | ne);
              }
              if (0 < V.L && (V.wa[V.Y + V.ja] = V.gd[it.$b][it.Za], V.wa[V.Y + V.ja].La |= !St), pt.Ka) return ke(G, 7, "Premature end-of-file encountered.");
            }
            if (Ii(G), V = vt, pt = 1, it = (H = G).D, bt = 0 < H.L && H.M >= H.zb && H.M <= H.Va, H.Aa == 0) t: {
              if (it.M = H.M, it.uc = bt, Wi(H, it), pt = 1, it = (Zt = H.D).Nb, bt = (ne = Ra[H.L]) * H.R, Ot = ne / 2 * H.B, me = 16 * it * H.R, on = 8 * it * H.B, St = H.sa, Rt = H.ta - bt + me, _t = H.qa, mt = H.ra - Ot + on, se = H.Ha, le = H.Ia - Ot + on, fn = (he = Zt.M) == 0, ae = he >= H.Va - 1, H.Aa == 2 && Wi(H, Zt), Zt.uc) for (dn = (Ee = H).D.M, e(Ee.D.uc), Zt = Ee.yb; Zt < Ee.Hb; ++Zt) {
                Be = Zt, an = dn;
                var Te = (We = (_e = Ee).D).Nb;
                pe = _e.R;
                var We = We.wa[We.Y + Be], Qe = _e.sa, wn = _e.ta + 16 * Te * pe + 16 * Be, Yn = We.dd, ze = We.tc;
                if (ze != 0) if (e(3 <= ze), _e.L == 1) 0 < Be && Fe(Qe, wn, pe, ze + 4), We.La && or(Qe, wn, pe, ze), 0 < an && we(Qe, wn, pe, ze + 4), We.La && De(Qe, wn, pe, ze);
                else {
                  var cr = _e.B, zr = _e.qa, mi = _e.ra + 8 * Te * cr + 8 * Be, Nr = _e.Ha, _e = _e.Ia + 8 * Te * cr + 8 * Be;
                  Te = We.ld, 0 < Be && (pi(Qe, wn, pe, ze + 4, Yn, Te), br(zr, mi, Nr, _e, cr, ze + 4, Yn, Te)), We.La && (mn(Qe, wn, pe, ze, Yn, Te), be(zr, mi, Nr, _e, cr, ze, Yn, Te)), 0 < an && (Rr(Qe, wn, pe, ze + 4, Yn, Te), Tr(zr, mi, Nr, _e, cr, ze + 4, Yn, Te)), We.La && (Zi(Qe, wn, pe, ze, Yn, Te), ar(zr, mi, Nr, _e, cr, ze, Yn, Te));
                }
              }
              if (H.ia && alert("todo:DitherRow"), V.put != null) {
                if (Zt = 16 * he, he = 16 * (he + 1), fn ? (V.y = H.sa, V.O = H.ta + me, V.f = H.qa, V.N = H.ra + on, V.ea = H.Ha, V.W = H.Ia + on) : (Zt -= ne, V.y = St, V.O = Rt, V.f = _t, V.N = mt, V.ea = se, V.W = le), ae || (he -= ne), he > V.o && (he = V.o), V.F = null, V.J = null, H.Fa != null && 0 < H.Fa.length && Zt < he && (V.J = Ui(H, V, Zt, he - Zt), V.F = H.mb, V.F == null && V.F.length == 0)) {
                  pt = ke(H, 3, "Could not decode alpha data.");
                  break t;
                }
                Zt < V.j && (ne = V.j - Zt, Zt = V.j, e(!(1 & ne)), V.O += H.R * ne, V.N += H.B * (ne >> 1), V.W += H.B * (ne >> 1), V.F != null && (V.J += V.width * ne)), Zt < he && (V.O += V.v, V.N += V.v >> 1, V.W += V.v >> 1, V.F != null && (V.J += V.v), V.ka = Zt - V.j, V.U = V.va - V.v, V.T = he - Zt, pt = V.put(V));
              }
              it + 1 != H.Ic || ae || (a(H.sa, H.ta - bt, St, Rt + 16 * H.R, bt), a(H.qa, H.ra - Ot, _t, mt + 8 * H.B, Ot), a(H.Ha, H.Ia - Ot, se, le + 8 * H.B, Ot));
            }
            if (!pt) return ke(G, 6, "Output aborted.");
          }
          return 1;
        }(t, r)), r.bc != null && r.bc(r), u &= 1;
      }
      return u ? (t.cb = 0, u) : 0;
    }
    function _n(t, r, u, d, m) {
      m = t[r + u + 32 * d] + (m >> 3), t[r + u + 32 * d] = -256 & m ? 0 > m ? 0 : 255 : m;
    }
    function $r(t, r, u, d, m, w) {
      _n(t, r, 0, u, d + m), _n(t, r, 1, u, d + w), _n(t, r, 2, u, d - w), _n(t, r, 3, u, d - m);
    }
    function en(t) {
      return (20091 * t >> 16) + t;
    }
    function Ci(t, r, u, d) {
      var m, w = 0, y = o(16);
      for (m = 0; 4 > m; ++m) {
        var N = t[r + 0] + t[r + 8], x = t[r + 0] - t[r + 8], k = (35468 * t[r + 4] >> 16) - en(t[r + 12]), U = en(t[r + 4]) + (35468 * t[r + 12] >> 16);
        y[w + 0] = N + U, y[w + 1] = x + k, y[w + 2] = x - k, y[w + 3] = N - U, w += 4, r++;
      }
      for (m = w = 0; 4 > m; ++m) N = (t = y[w + 0] + 4) + y[w + 8], x = t - y[w + 8], k = (35468 * y[w + 4] >> 16) - en(y[w + 12]), _n(u, d, 0, 0, N + (U = en(y[w + 4]) + (35468 * y[w + 12] >> 16))), _n(u, d, 1, 0, x + k), _n(u, d, 2, 0, x - k), _n(u, d, 3, 0, N - U), w++, d += 32;
    }
    function ga(t, r, u, d) {
      var m = t[r + 0] + 4, w = 35468 * t[r + 4] >> 16, y = en(t[r + 4]), N = 35468 * t[r + 1] >> 16;
      $r(u, d, 0, m + y, t = en(t[r + 1]), N), $r(u, d, 1, m + w, t, N), $r(u, d, 2, m - w, t, N), $r(u, d, 3, m - y, t, N);
    }
    function vo(t, r, u, d, m) {
      Ci(t, r, u, d), m && Ci(t, r + 16, u, d + 4);
    }
    function ma(t, r, u, d) {
      di(t, r + 0, u, d, 1), di(t, r + 32, u, d + 128, 1);
    }
    function bo(t, r, u, d) {
      var m;
      for (t = t[r + 0] + 4, m = 0; 4 > m; ++m) for (r = 0; 4 > r; ++r) _n(u, d, r, m, t);
    }
    function va(t, r, u, d) {
      t[r + 0] && jn(t, r + 0, u, d), t[r + 16] && jn(t, r + 16, u, d + 4), t[r + 32] && jn(t, r + 32, u, d + 128), t[r + 48] && jn(t, r + 48, u, d + 128 + 4);
    }
    function wo(t, r, u, d) {
      var m, w = o(16);
      for (m = 0; 4 > m; ++m) {
        var y = t[r + 0 + m] + t[r + 12 + m], N = t[r + 4 + m] + t[r + 8 + m], x = t[r + 4 + m] - t[r + 8 + m], k = t[r + 0 + m] - t[r + 12 + m];
        w[0 + m] = y + N, w[8 + m] = y - N, w[4 + m] = k + x, w[12 + m] = k - x;
      }
      for (m = 0; 4 > m; ++m) y = (t = w[0 + 4 * m] + 3) + w[3 + 4 * m], N = w[1 + 4 * m] + w[2 + 4 * m], x = w[1 + 4 * m] - w[2 + 4 * m], k = t - w[3 + 4 * m], u[d + 0] = y + N >> 3, u[d + 16] = k + x >> 3, u[d + 32] = y - N >> 3, u[d + 48] = k - x >> 3, d += 64;
    }
    function ji(t, r, u) {
      var d, m = r - 32, w = hn, y = 255 - t[m - 1];
      for (d = 0; d < u; ++d) {
        var N, x = w, k = y + t[r - 1];
        for (N = 0; N < u; ++N) t[r + N] = x[k + t[m + N]];
        r += 32;
      }
    }
    function yo(t, r) {
      ji(t, r, 4);
    }
    function Lo(t, r) {
      ji(t, r, 8);
    }
    function No(t, r) {
      ji(t, r, 16);
    }
    function tr(t, r) {
      var u;
      for (u = 0; 16 > u; ++u) a(t, r + 32 * u, t, r - 32, 16);
    }
    function ti(t, r) {
      var u;
      for (u = 16; 0 < u; --u) c(t, r, t[r - 1], 16), r += 32;
    }
    function ei(t, r, u) {
      var d;
      for (d = 0; 16 > d; ++d) c(r, u + 32 * d, t, 16);
    }
    function ba(t, r) {
      var u, d = 16;
      for (u = 0; 16 > u; ++u) d += t[r - 1 + 32 * u] + t[r + u - 32];
      ei(d >> 5, t, r);
    }
    function Ge(t, r) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += t[r - 1 + 32 * u];
      ei(d >> 4, t, r);
    }
    function Ao(t, r) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += t[r + u - 32];
      ei(d >> 4, t, r);
    }
    function wa(t, r) {
      ei(128, t, r);
    }
    function Vt(t, r, u) {
      return t + 2 * r + u + 2 >> 2;
    }
    function xo(t, r) {
      var u, d = r - 32;
      for (d = new Uint8Array([Vt(t[d - 1], t[d + 0], t[d + 1]), Vt(t[d + 0], t[d + 1], t[d + 2]), Vt(t[d + 1], t[d + 2], t[d + 3]), Vt(t[d + 2], t[d + 3], t[d + 4])]), u = 0; 4 > u; ++u) a(t, r + 32 * u, d, 0, d.length);
    }
    function So(t, r) {
      var u = t[r - 1], d = t[r - 1 + 32], m = t[r - 1 + 64], w = t[r - 1 + 96];
      At(t, r + 0, 16843009 * Vt(t[r - 1 - 32], u, d)), At(t, r + 32, 16843009 * Vt(u, d, m)), At(t, r + 64, 16843009 * Vt(d, m, w)), At(t, r + 96, 16843009 * Vt(m, w, w));
    }
    function Vn(t, r) {
      var u, d = 4;
      for (u = 0; 4 > u; ++u) d += t[r + u - 32] + t[r - 1 + 32 * u];
      for (d >>= 3, u = 0; 4 > u; ++u) c(t, r + 32 * u, d, 4);
    }
    function ya(t, r) {
      var u = t[r - 1 + 0], d = t[r - 1 + 32], m = t[r - 1 + 64], w = t[r - 1 - 32], y = t[r + 0 - 32], N = t[r + 1 - 32], x = t[r + 2 - 32], k = t[r + 3 - 32];
      t[r + 0 + 96] = Vt(d, m, t[r - 1 + 96]), t[r + 1 + 96] = t[r + 0 + 64] = Vt(u, d, m), t[r + 2 + 96] = t[r + 1 + 64] = t[r + 0 + 32] = Vt(w, u, d), t[r + 3 + 96] = t[r + 2 + 64] = t[r + 1 + 32] = t[r + 0 + 0] = Vt(y, w, u), t[r + 3 + 64] = t[r + 2 + 32] = t[r + 1 + 0] = Vt(N, y, w), t[r + 3 + 32] = t[r + 2 + 0] = Vt(x, N, y), t[r + 3 + 0] = Vt(k, x, N);
    }
    function La(t, r) {
      var u = t[r + 1 - 32], d = t[r + 2 - 32], m = t[r + 3 - 32], w = t[r + 4 - 32], y = t[r + 5 - 32], N = t[r + 6 - 32], x = t[r + 7 - 32];
      t[r + 0 + 0] = Vt(t[r + 0 - 32], u, d), t[r + 1 + 0] = t[r + 0 + 32] = Vt(u, d, m), t[r + 2 + 0] = t[r + 1 + 32] = t[r + 0 + 64] = Vt(d, m, w), t[r + 3 + 0] = t[r + 2 + 32] = t[r + 1 + 64] = t[r + 0 + 96] = Vt(m, w, y), t[r + 3 + 32] = t[r + 2 + 64] = t[r + 1 + 96] = Vt(w, y, N), t[r + 3 + 64] = t[r + 2 + 96] = Vt(y, N, x), t[r + 3 + 96] = Vt(N, x, x);
    }
    function ni(t, r) {
      var u = t[r - 1 + 0], d = t[r - 1 + 32], m = t[r - 1 + 64], w = t[r - 1 - 32], y = t[r + 0 - 32], N = t[r + 1 - 32], x = t[r + 2 - 32], k = t[r + 3 - 32];
      t[r + 0 + 0] = t[r + 1 + 64] = w + y + 1 >> 1, t[r + 1 + 0] = t[r + 2 + 64] = y + N + 1 >> 1, t[r + 2 + 0] = t[r + 3 + 64] = N + x + 1 >> 1, t[r + 3 + 0] = x + k + 1 >> 1, t[r + 0 + 96] = Vt(m, d, u), t[r + 0 + 64] = Vt(d, u, w), t[r + 0 + 32] = t[r + 1 + 96] = Vt(u, w, y), t[r + 1 + 32] = t[r + 2 + 96] = Vt(w, y, N), t[r + 2 + 32] = t[r + 3 + 96] = Vt(y, N, x), t[r + 3 + 32] = Vt(N, x, k);
    }
    function Oi(t, r) {
      var u = t[r + 0 - 32], d = t[r + 1 - 32], m = t[r + 2 - 32], w = t[r + 3 - 32], y = t[r + 4 - 32], N = t[r + 5 - 32], x = t[r + 6 - 32], k = t[r + 7 - 32];
      t[r + 0 + 0] = u + d + 1 >> 1, t[r + 1 + 0] = t[r + 0 + 64] = d + m + 1 >> 1, t[r + 2 + 0] = t[r + 1 + 64] = m + w + 1 >> 1, t[r + 3 + 0] = t[r + 2 + 64] = w + y + 1 >> 1, t[r + 0 + 32] = Vt(u, d, m), t[r + 1 + 32] = t[r + 0 + 96] = Vt(d, m, w), t[r + 2 + 32] = t[r + 1 + 96] = Vt(m, w, y), t[r + 3 + 32] = t[r + 2 + 96] = Vt(w, y, N), t[r + 3 + 64] = Vt(y, N, x), t[r + 3 + 96] = Vt(N, x, k);
    }
    function _o(t, r) {
      var u = t[r - 1 + 0], d = t[r - 1 + 32], m = t[r - 1 + 64], w = t[r - 1 + 96];
      t[r + 0 + 0] = u + d + 1 >> 1, t[r + 2 + 0] = t[r + 0 + 32] = d + m + 1 >> 1, t[r + 2 + 32] = t[r + 0 + 64] = m + w + 1 >> 1, t[r + 1 + 0] = Vt(u, d, m), t[r + 3 + 0] = t[r + 1 + 32] = Vt(d, m, w), t[r + 3 + 32] = t[r + 1 + 64] = Vt(m, w, w), t[r + 3 + 64] = t[r + 2 + 64] = t[r + 0 + 96] = t[r + 1 + 96] = t[r + 2 + 96] = t[r + 3 + 96] = w;
    }
    function Po(t, r) {
      var u = t[r - 1 + 0], d = t[r - 1 + 32], m = t[r - 1 + 64], w = t[r - 1 + 96], y = t[r - 1 - 32], N = t[r + 0 - 32], x = t[r + 1 - 32], k = t[r + 2 - 32];
      t[r + 0 + 0] = t[r + 2 + 32] = u + y + 1 >> 1, t[r + 0 + 32] = t[r + 2 + 64] = d + u + 1 >> 1, t[r + 0 + 64] = t[r + 2 + 96] = m + d + 1 >> 1, t[r + 0 + 96] = w + m + 1 >> 1, t[r + 3 + 0] = Vt(N, x, k), t[r + 2 + 0] = Vt(y, N, x), t[r + 1 + 0] = t[r + 3 + 32] = Vt(u, y, N), t[r + 1 + 32] = t[r + 3 + 64] = Vt(d, u, y), t[r + 1 + 64] = t[r + 3 + 96] = Vt(m, d, u), t[r + 1 + 96] = Vt(w, m, d);
    }
    function ko(t, r) {
      var u;
      for (u = 0; 8 > u; ++u) a(t, r + 32 * u, t, r - 32, 8);
    }
    function Mi(t, r) {
      var u;
      for (u = 0; 8 > u; ++u) c(t, r, t[r - 1], 8), r += 32;
    }
    function Br(t, r, u) {
      var d;
      for (d = 0; 8 > d; ++d) c(r, u + 32 * d, t, 8);
    }
    function hr(t, r) {
      var u, d = 8;
      for (u = 0; 8 > u; ++u) d += t[r + u - 32] + t[r - 1 + 32 * u];
      Br(d >> 4, t, r);
    }
    function Fo(t, r) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += t[r + u - 32];
      Br(d >> 3, t, r);
    }
    function Er(t, r) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += t[r - 1 + 32 * u];
      Br(d >> 3, t, r);
    }
    function Bi(t, r) {
      Br(128, t, r);
    }
    function ri(t, r, u) {
      var d = t[r - u], m = t[r + 0], w = 3 * (m - d) + qo[1020 + t[r - 2 * u] - t[r + u]], y = Ca[112 + (w + 4 >> 3)];
      t[r - u] = hn[255 + d + Ca[112 + (w + 3 >> 3)]], t[r + 0] = hn[255 + m - y];
    }
    function Na(t, r, u, d) {
      var m = t[r + 0], w = t[r + u];
      return vn[255 + t[r - 2 * u] - t[r - u]] > d || vn[255 + w - m] > d;
    }
    function Aa(t, r, u, d) {
      return 4 * vn[255 + t[r - u] - t[r + 0]] + vn[255 + t[r - 2 * u] - t[r + u]] <= d;
    }
    function xa(t, r, u, d, m) {
      var w = t[r - 3 * u], y = t[r - 2 * u], N = t[r - u], x = t[r + 0], k = t[r + u], U = t[r + 2 * u], K = t[r + 3 * u];
      return 4 * vn[255 + N - x] + vn[255 + y - k] > d ? 0 : vn[255 + t[r - 4 * u] - w] <= m && vn[255 + w - y] <= m && vn[255 + y - N] <= m && vn[255 + K - U] <= m && vn[255 + U - k] <= m && vn[255 + k - x] <= m;
    }
    function Sa(t, r, u, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Aa(t, r + d, u, m) && ri(t, r + d, u);
    }
    function er(t, r, u, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Aa(t, r + d * u, 1, m) && ri(t, r + d * u, 1);
    }
    function fr(t, r, u, d) {
      var m;
      for (m = 3; 0 < m; --m) Sa(t, r += 4 * u, u, d);
    }
    function Io(t, r, u, d) {
      var m;
      for (m = 3; 0 < m; --m) er(t, r += 4, u, d);
    }
    function dr(t, r, u, d, m, w, y, N) {
      for (w = 2 * w + 1; 0 < m--; ) {
        if (xa(t, r, u, w, y)) if (Na(t, r, u, N)) ri(t, r, u);
        else {
          var x = t, k = r, U = u, K = x[k - 2 * U], Z = x[k - U], G = x[k + 0], vt = x[k + U], it = x[k + 2 * U], H = 27 * (pt = qo[1020 + 3 * (G - Z) + qo[1020 + K - vt]]) + 63 >> 7, V = 18 * pt + 63 >> 7, pt = 9 * pt + 63 >> 7;
          x[k - 3 * U] = hn[255 + x[k - 3 * U] + pt], x[k - 2 * U] = hn[255 + K + V], x[k - U] = hn[255 + Z + H], x[k + 0] = hn[255 + G - H], x[k + U] = hn[255 + vt - V], x[k + 2 * U] = hn[255 + it - pt];
        }
        r += d;
      }
    }
    function Pn(t, r, u, d, m, w, y, N) {
      for (w = 2 * w + 1; 0 < m--; ) {
        if (xa(t, r, u, w, y)) if (Na(t, r, u, N)) ri(t, r, u);
        else {
          var x = t, k = r, U = u, K = x[k - U], Z = x[k + 0], G = x[k + U], vt = Ca[112 + ((it = 3 * (Z - K)) + 4 >> 3)], it = Ca[112 + (it + 3 >> 3)], H = vt + 1 >> 1;
          x[k - 2 * U] = hn[255 + x[k - 2 * U] + H], x[k - U] = hn[255 + K + it], x[k + 0] = hn[255 + Z - vt], x[k + U] = hn[255 + G - H];
        }
        r += d;
      }
    }
    function Ei(t, r, u, d, m, w) {
      dr(t, r, u, 1, 16, d, m, w);
    }
    function qr(t, r, u, d, m, w) {
      dr(t, r, 1, u, 16, d, m, w);
    }
    function Co(t, r, u, d, m, w) {
      var y;
      for (y = 3; 0 < y; --y) Pn(t, r += 4 * u, u, 1, 16, d, m, w);
    }
    function ii(t, r, u, d, m, w) {
      var y;
      for (y = 3; 0 < y; --y) Pn(t, r += 4, 1, u, 16, d, m, w);
    }
    function jo(t, r, u, d, m, w, y, N) {
      dr(t, r, m, 1, 8, w, y, N), dr(u, d, m, 1, 8, w, y, N);
    }
    function qi(t, r, u, d, m, w, y, N) {
      dr(t, r, 1, m, 8, w, y, N), dr(u, d, 1, m, 8, w, y, N);
    }
    function Di(t, r, u, d, m, w, y, N) {
      Pn(t, r + 4 * m, m, 1, 8, w, y, N), Pn(u, d + 4 * m, m, 1, 8, w, y, N);
    }
    function _a(t, r, u, d, m, w, y, N) {
      Pn(t, r + 4, 1, m, 8, w, y, N), Pn(u, d + 4, 1, m, 8, w, y, N);
    }
    function ai() {
      this.ba = new Ln(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xe(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function Ri() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function Ti() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Pa() {
      this.ua = 0, this.Wa = new E(), this.vb = new E(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new D(), this.yc = new P();
    }
    function Oo() {
      this.xb = this.a = 0, this.l = new Qr(), this.ca = new Ln(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new L(), this.Pb = 0, this.wd = new L(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Pa(), this.ab = 0, this.gc = l(4, Ti), this.Oc = 0;
    }
    function oi() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Qr(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Dr(t, r, u, d, m, w, y) {
      for (t = t == null ? 0 : t[r + 0], r = 0; r < y; ++r) m[w + r] = t + u[d + r] & 255, t = m[w + r];
    }
    function zi(t, r, u, d, m, w, y) {
      var N;
      if (t == null) Dr(null, null, u, d, m, w, y);
      else for (N = 0; N < y; ++N) m[w + N] = t[r + N] + u[d + N] & 255;
    }
    function pr(t, r, u, d, m, w, y) {
      if (t == null) Dr(null, null, u, d, m, w, y);
      else {
        var N, x = t[r + 0], k = x, U = x;
        for (N = 0; N < y; ++N) k = U + (x = t[r + N]) - k, U = u[d + N] + (-256 & k ? 0 > k ? 0 : 255 : k) & 255, k = x, m[w + N] = U;
      }
    }
    function Ui(t, r, u, d) {
      var m = r.width, w = r.o;
      if (e(t != null && r != null), 0 > u || 0 >= d || u + d > w) return null;
      if (!t.Cc) {
        if (t.ga == null) {
          var y;
          if (t.ga = new oi(), (y = t.ga == null) || (y = r.width * r.o, e(t.Gb.length == 0), t.Gb = o(y), t.Uc = 0, t.Gb == null ? y = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, y = 1), y = !y), !y) {
            y = t.ga;
            var N = t.Fa, x = t.P, k = t.qc, U = t.mb, K = t.nb, Z = x + 1, G = k - 1, vt = y.l;
            if (e(N != null && U != null && r != null), Lr[0] = null, Lr[1] = Dr, Lr[2] = zi, Lr[3] = pr, y.ca = U, y.tb = K, y.c = r.width, y.i = r.height, e(0 < y.c && 0 < y.i), 1 >= k) r = 0;
            else if (y.$a = N[x + 0] >> 0 & 3, y.Z = N[x + 0] >> 2 & 3, y.Lc = N[x + 0] >> 4 & 3, x = N[x + 0] >> 6 & 3, 0 > y.$a || 1 < y.$a || 4 <= y.Z || 1 < y.Lc || x) r = 0;
            else if (vt.put = Tn, vt.ac = He, vt.bc = zn, vt.ma = y, vt.width = r.width, vt.height = r.height, vt.Da = r.Da, vt.v = r.v, vt.va = r.va, vt.j = r.j, vt.o = r.o, y.$a) t: {
              e(y.$a == 1), r = pn();
              e: for (; ; ) {
                if (r == null) {
                  r = 0;
                  break t;
                }
                if (e(y != null), y.mc = r, r.c = y.c, r.i = y.i, r.l = y.l, r.l.ma = y, r.l.width = y.c, r.l.height = y.i, r.a = 0, Q(r.m, N, Z, G), !Wn(y.c, y.i, 1, r, null) || (r.ab == 1 && r.gc[0].hc == 3 && $n(r.s) ? (y.ic = 1, N = r.c * r.i, r.Ta = null, r.Ua = 0, r.V = o(N), r.Ba = 0, r.V == null ? (r.a = 1, r = 0) : r = 1) : (y.ic = 0, r = Mr(r, y.c)), !r)) break e;
                r = 1;
                break t;
              }
              y.mc = null, r = 0;
            }
            else r = G >= y.c * y.i;
            y = !r;
          }
          if (y) return null;
          t.ga.Lc != 1 ? t.Ga = 0 : d = w - u;
        }
        e(t.ga != null), e(u + d <= w);
        t: {
          if (r = (N = t.ga).c, w = N.l.o, N.$a == 0) {
            if (Z = t.rc, G = t.Vc, vt = t.Fa, x = t.P + 1 + u * r, k = t.mb, U = t.nb + u * r, e(x <= t.P + t.qc), N.Z != 0) for (e(Lr[N.Z] != null), y = 0; y < d; ++y) Lr[N.Z](Z, G, vt, x, k, U, r), Z = k, G = U, U += r, x += r;
            else for (y = 0; y < d; ++y) a(k, U, vt, x, r), Z = k, G = U, U += r, x += r;
            t.rc = Z, t.Vc = G;
          } else {
            if (e(N.mc != null), r = u + d, e((y = N.mc) != null), e(r <= y.i), y.C >= r) r = 1;
            else if (N.ic || J(), N.ic) {
              N = y.V, Z = y.Ba, G = y.c;
              var it = y.i, H = (vt = 1, x = y.$ / G, k = y.$ % G, U = y.m, K = y.s, y.$), V = G * it, pt = G * r, bt = K.wc, mt = H < pt ? Oe(K, k, x) : null;
              e(H <= V), e(r <= it), e($n(K));
              e: for (; ; ) {
                for (; !U.h && H < pt; ) {
                  if (k & bt || (mt = Oe(K, k, x)), e(mt != null), Y(U), 256 > (it = tn(mt.G[0], mt.H[0], U))) N[Z + H] = it, ++H, ++k >= G && (k = 0, ++x <= r && !(x % 16) && xn(y, x));
                  else {
                    if (!(280 > it)) {
                      vt = 0;
                      break e;
                    }
                    it = Nn(it - 256, U);
                    var Ot, St = tn(mt.G[4], mt.H[4], U);
                    if (Y(U), !(H >= (St = Un(G, St = Nn(St, U))) && V - H >= it)) {
                      vt = 0;
                      break e;
                    }
                    for (Ot = 0; Ot < it; ++Ot) N[Z + H + Ot] = N[Z + H + Ot - St];
                    for (H += it, k += it; k >= G; ) k -= G, ++x <= r && !(x % 16) && xn(y, x);
                    H < pt && k & bt && (mt = Oe(K, k, x));
                  }
                  e(U.h == B(U));
                }
                xn(y, x > r ? r : x);
                break e;
              }
              !vt || U.h && H < V ? (vt = 0, y.a = U.h ? 5 : 3) : y.$ = H, r = vt;
            } else r = Sn(y, y.V, y.Ba, y.c, y.i, r, Yr);
            if (!r) {
              d = 0;
              break t;
            }
          }
          u + d >= w && (t.Cc = 1), d = 1;
        }
        if (!d) return null;
        if (t.Cc && ((d = t.ga) != null && (d.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return t.nb + u * m;
    }
    function s(t, r, u, d, m, w) {
      for (; 0 < m--; ) {
        var y, N = t, x = r + (u ? 1 : 0), k = t, U = r + (u ? 0 : 3);
        for (y = 0; y < d; ++y) {
          var K = k[U + 4 * y];
          K != 255 && (K *= 32897, N[x + 4 * y + 0] = N[x + 4 * y + 0] * K >> 23, N[x + 4 * y + 1] = N[x + 4 * y + 1] * K >> 23, N[x + 4 * y + 2] = N[x + 4 * y + 2] * K >> 23);
        }
        r += w;
      }
    }
    function v(t, r, u, d, m) {
      for (; 0 < d--; ) {
        var w;
        for (w = 0; w < u; ++w) {
          var y = t[r + 2 * w + 0], N = 15 & (k = t[r + 2 * w + 1]), x = 4369 * N, k = (240 & k | k >> 4) * x >> 16;
          t[r + 2 * w + 0] = (240 & y | y >> 4) * x >> 16 & 240 | (15 & y | y << 4) * x >> 16 >> 4 & 15, t[r + 2 * w + 1] = 240 & k | N;
        }
        r += m;
      }
    }
    function C(t, r, u, d, m, w, y, N) {
      var x, k, U = 255;
      for (k = 0; k < m; ++k) {
        for (x = 0; x < d; ++x) {
          var K = t[r + x];
          w[y + 4 * x] = K, U &= K;
        }
        r += u, y += N;
      }
      return U != 255;
    }
    function T(t, r, u, d, m) {
      var w;
      for (w = 0; w < m; ++w) u[d + w] = t[r + w] >> 8;
    }
    function J() {
      wr = s, gi = v, Ia = C, As = T;
    }
    function st(t, r, u) {
      R[t] = function(d, m, w, y, N, x, k, U, K, Z, G, vt, it, H, V, pt, bt) {
        var mt, Ot = bt - 1 >> 1, St = N[x + 0] | k[U + 0] << 16, Rt = K[Z + 0] | G[vt + 0] << 16;
        e(d != null);
        var _t = 3 * St + Rt + 131074 >> 2;
        for (r(d[m + 0], 255 & _t, _t >> 16, it, H), w != null && (_t = 3 * Rt + St + 131074 >> 2, r(w[y + 0], 255 & _t, _t >> 16, V, pt)), mt = 1; mt <= Ot; ++mt) {
          var se = N[x + mt] | k[U + mt] << 16, le = K[Z + mt] | G[vt + mt] << 16, ae = St + se + Rt + le + 524296, ne = ae + 2 * (se + Rt) >> 3;
          _t = ne + St >> 1, St = (ae = ae + 2 * (St + le) >> 3) + se >> 1, r(d[m + 2 * mt - 1], 255 & _t, _t >> 16, it, H + (2 * mt - 1) * u), r(d[m + 2 * mt - 0], 255 & St, St >> 16, it, H + (2 * mt - 0) * u), w != null && (_t = ae + Rt >> 1, St = ne + le >> 1, r(w[y + 2 * mt - 1], 255 & _t, _t >> 16, V, pt + (2 * mt - 1) * u), r(w[y + 2 * mt + 0], 255 & St, St >> 16, V, pt + (2 * mt + 0) * u)), St = se, Rt = le;
        }
        1 & bt || (_t = 3 * St + Rt + 131074 >> 2, r(d[m + bt - 1], 255 & _t, _t >> 16, it, H + (bt - 1) * u), w != null && (_t = 3 * Rt + St + 131074 >> 2, r(w[y + bt - 1], 255 & _t, _t >> 16, V, pt + (bt - 1) * u)));
      };
    }
    function yt() {
      bn[ja] = tu, bn[Oa] = Ms, bn[Fs] = eu, bn[Ma] = Bs, bn[Ba] = Es, bn[Do] = qs, bn[Is] = nu, bn[Ro] = Ms, bn[To] = Bs, bn[Ea] = Es, bn[zo] = qs;
    }
    function jt(t) {
      return t & ~ru ? 0 > t ? 0 : 255 : t >> Ds;
    }
    function Dt(t, r) {
      return jt((19077 * t >> 8) + (26149 * r >> 8) - 14234);
    }
    function Kt(t, r, u) {
      return jt((19077 * t >> 8) - (6419 * r >> 8) - (13320 * u >> 8) + 8708);
    }
    function $t(t, r) {
      return jt((19077 * t >> 8) + (33050 * r >> 8) - 17685);
    }
    function re(t, r, u, d, m) {
      d[m + 0] = Dt(t, u), d[m + 1] = Kt(t, r, u), d[m + 2] = $t(t, r);
    }
    function Ne(t, r, u, d, m) {
      d[m + 0] = $t(t, r), d[m + 1] = Kt(t, r, u), d[m + 2] = Dt(t, u);
    }
    function Se(t, r, u, d, m) {
      var w = Kt(t, r, u);
      r = w << 3 & 224 | $t(t, r) >> 3, d[m + 0] = 248 & Dt(t, u) | w >> 5, d[m + 1] = r;
    }
    function Me(t, r, u, d, m) {
      var w = 240 & $t(t, r) | 15;
      d[m + 0] = 240 & Dt(t, u) | Kt(t, r, u) >> 4, d[m + 1] = w;
    }
    function Ye(t, r, u, d, m) {
      d[m + 0] = 255, re(t, r, u, d, m + 1);
    }
    function Re(t, r, u, d, m) {
      Ne(t, r, u, d, m), d[m + 3] = 255;
    }
    function kn(t, r, u, d, m) {
      re(t, r, u, d, m), d[m + 3] = 255;
    }
    function ln(t, r) {
      return 0 > t ? 0 : t > r ? r : t;
    }
    function nr(t, r, u) {
      R[t] = function(d, m, w, y, N, x, k, U, K) {
        for (var Z = U + (-2 & K) * u; U != Z; ) r(d[m + 0], w[y + 0], N[x + 0], k, U), r(d[m + 1], w[y + 0], N[x + 0], k, U + u), m += 2, ++y, ++x, U += 2 * u;
        1 & K && r(d[m + 0], w[y + 0], N[x + 0], k, U);
      };
    }
    function ka(t, r, u) {
      return u == 0 ? t == 0 ? r == 0 ? 6 : 5 : r == 0 ? 4 : 0 : u;
    }
    function Hi(t, r, u, d, m) {
      switch (t >>> 30) {
        case 3:
          di(r, u, d, m, 0);
          break;
        case 2:
          Ki(r, u, d, m);
          break;
        case 1:
          jn(r, u, d, m);
      }
    }
    function Wi(t, r) {
      var u, d, m = r.M, w = r.Nb, y = t.oc, N = t.pc + 40, x = t.oc, k = t.pc + 584, U = t.oc, K = t.pc + 600;
      for (u = 0; 16 > u; ++u) y[N + 32 * u - 1] = 129;
      for (u = 0; 8 > u; ++u) x[k + 32 * u - 1] = 129, U[K + 32 * u - 1] = 129;
      for (0 < m ? y[N - 1 - 32] = x[k - 1 - 32] = U[K - 1 - 32] = 129 : (c(y, N - 32 - 1, 127, 21), c(x, k - 32 - 1, 127, 9), c(U, K - 32 - 1, 127, 9)), d = 0; d < t.za; ++d) {
        var Z = r.ya[r.aa + d];
        if (0 < d) {
          for (u = -1; 16 > u; ++u) a(y, N + 32 * u - 4, y, N + 32 * u + 12, 4);
          for (u = -1; 8 > u; ++u) a(x, k + 32 * u - 4, x, k + 32 * u + 4, 4), a(U, K + 32 * u - 4, U, K + 32 * u + 4, 4);
        }
        var G = t.Gd, vt = t.Hd + d, it = Z.ad, H = Z.Hc;
        if (0 < m && (a(y, N - 32, G[vt].y, 0, 16), a(x, k - 32, G[vt].f, 0, 8), a(U, K - 32, G[vt].ea, 0, 8)), Z.Za) {
          var V = y, pt = N - 32 + 16;
          for (0 < m && (d >= t.za - 1 ? c(V, pt, G[vt].y[15], 4) : a(V, pt, G[vt + 1].y, 0, 4)), u = 0; 4 > u; u++) V[pt + 128 + u] = V[pt + 256 + u] = V[pt + 384 + u] = V[pt + 0 + u];
          for (u = 0; 16 > u; ++u, H <<= 2) V = y, pt = N + Ts[u], On[Z.Ob[u]](V, pt), Hi(H, it, 16 * +u, V, pt);
        } else if (V = ka(d, m, Z.Ob[0]), yr[V](y, N), H != 0) for (u = 0; 16 > u; ++u, H <<= 2) Hi(H, it, 16 * +u, y, N + Ts[u]);
        for (u = Z.Gc, V = ka(d, m, Z.Dd), sr[V](x, k), sr[V](U, K), H = it, V = x, pt = k, 255 & (Z = u >> 0) && (170 & Z ? vr(H, 256, V, pt) : ir(H, 256, V, pt)), Z = U, H = K, 255 & (u >>= 8) && (170 & u ? vr(it, 320, Z, H) : ir(it, 320, Z, H)), m < t.Ub - 1 && (a(G[vt].y, 0, y, N + 480, 16), a(G[vt].f, 0, x, k + 224, 8), a(G[vt].ea, 0, U, K + 224, 8)), u = 8 * w * t.B, G = t.sa, vt = t.ta + 16 * d + 16 * w * t.R, it = t.qa, Z = t.ra + 8 * d + u, H = t.Ha, V = t.Ia + 8 * d + u, u = 0; 16 > u; ++u) a(G, vt + u * t.R, y, N + 32 * u, 16);
        for (u = 0; 8 > u; ++u) a(it, Z + u * t.B, x, k + 32 * u, 8), a(H, V + u * t.B, U, K + 32 * u, 8);
      }
    }
    function si(t, r, u, d, m, w, y, N, x) {
      var k = [0], U = [0], K = 0, Z = x != null ? x.kd : 0, G = x ?? new Ri();
      if (t == null || 12 > u) return 7;
      G.data = t, G.w = r, G.ha = u, r = [r], u = [u], G.gb = [G.gb];
      t: {
        var vt = r, it = u, H = G.gb;
        if (e(t != null), e(it != null), e(H != null), H[0] = 0, 12 <= it[0] && !n(t, vt[0], "RIFF")) {
          if (n(t, vt[0] + 8, "WEBP")) {
            H = 3;
            break t;
          }
          var V = Mt(t, vt[0] + 4);
          if (12 > V || 4294967286 < V) {
            H = 3;
            break t;
          }
          if (Z && V > it[0] - 8) {
            H = 7;
            break t;
          }
          H[0] = V, vt[0] += 12, it[0] -= 12;
        }
        H = 0;
      }
      if (H != 0) return H;
      for (V = 0 < G.gb[0], u = u[0]; ; ) {
        t: {
          var pt = t;
          it = r, H = u;
          var bt = k, mt = U, Ot = vt = [0];
          if ((_t = K = [K])[0] = 0, 8 > H[0]) H = 7;
          else {
            if (!n(pt, it[0], "VP8X")) {
              if (Mt(pt, it[0] + 4) != 10) {
                H = 3;
                break t;
              }
              if (18 > H[0]) {
                H = 7;
                break t;
              }
              var St = Mt(pt, it[0] + 8), Rt = 1 + Ct(pt, it[0] + 12);
              if (2147483648 <= Rt * (pt = 1 + Ct(pt, it[0] + 15))) {
                H = 3;
                break t;
              }
              Ot != null && (Ot[0] = St), bt != null && (bt[0] = Rt), mt != null && (mt[0] = pt), it[0] += 18, H[0] -= 18, _t[0] = 1;
            }
            H = 0;
          }
        }
        if (K = K[0], vt = vt[0], H != 0) return H;
        if (it = !!(2 & vt), !V && K) return 3;
        if (w != null && (w[0] = !!(16 & vt)), y != null && (y[0] = it), N != null && (N[0] = 0), y = k[0], vt = U[0], K && it && x == null) {
          H = 0;
          break;
        }
        if (4 > u) {
          H = 7;
          break;
        }
        if (V && K || !V && !K && !n(t, r[0], "ALPH")) {
          u = [u], G.na = [G.na], G.P = [G.P], G.Sa = [G.Sa];
          t: {
            St = t, H = r, V = u;
            var _t = G.gb;
            bt = G.na, mt = G.P, Ot = G.Sa, Rt = 22, e(St != null), e(V != null), pt = H[0];
            var se = V[0];
            for (e(bt != null), e(Ot != null), bt[0] = null, mt[0] = null, Ot[0] = 0; ; ) {
              if (H[0] = pt, V[0] = se, 8 > se) {
                H = 7;
                break t;
              }
              var le = Mt(St, pt + 4);
              if (4294967286 < le) {
                H = 3;
                break t;
              }
              var ae = 8 + le + 1 & -2;
              if (Rt += ae, 0 < _t && Rt > _t) {
                H = 3;
                break t;
              }
              if (!n(St, pt, "VP8 ") || !n(St, pt, "VP8L")) {
                H = 0;
                break t;
              }
              if (se[0] < ae) {
                H = 7;
                break t;
              }
              n(St, pt, "ALPH") || (bt[0] = St, mt[0] = pt + 8, Ot[0] = le), pt += ae, se -= ae;
            }
          }
          if (u = u[0], G.na = G.na[0], G.P = G.P[0], G.Sa = G.Sa[0], H != 0) break;
        }
        u = [u], G.Ja = [G.Ja], G.xa = [G.xa];
        t: if (_t = t, H = r, V = u, bt = G.gb[0], mt = G.Ja, Ot = G.xa, St = H[0], pt = !n(_t, St, "VP8 "), Rt = !n(_t, St, "VP8L"), e(_t != null), e(V != null), e(mt != null), e(Ot != null), 8 > V[0]) H = 7;
        else {
          if (pt || Rt) {
            if (_t = Mt(_t, St + 4), 12 <= bt && _t > bt - 12) {
              H = 3;
              break t;
            }
            if (Z && _t > V[0] - 8) {
              H = 7;
              break t;
            }
            mt[0] = _t, H[0] += 8, V[0] -= 8, Ot[0] = Rt;
          } else Ot[0] = 5 <= V[0] && _t[St + 0] == 47 && !(_t[St + 4] >> 5), mt[0] = V[0];
          H = 0;
        }
        if (u = u[0], G.Ja = G.Ja[0], G.xa = G.xa[0], r = r[0], H != 0) break;
        if (4294967286 < G.Ja) return 3;
        if (N == null || it || (N[0] = G.xa ? 2 : 1), y = [y], vt = [vt], G.xa) {
          if (5 > u) {
            H = 7;
            break;
          }
          N = y, Z = vt, it = w, t == null || 5 > u ? t = 0 : 5 <= u && t[r + 0] == 47 && !(t[r + 4] >> 5) ? (V = [0], _t = [0], bt = [0], Q(mt = new L(), t, r, u), Tt(mt, V, _t, bt) ? (N != null && (N[0] = V[0]), Z != null && (Z[0] = _t[0]), it != null && (it[0] = bt[0]), t = 1) : t = 0) : t = 0;
        } else {
          if (10 > u) {
            H = 7;
            break;
          }
          N = vt, t == null || 10 > u || !fa(t, r + 3, u - 3) ? t = 0 : (Z = t[r + 0] | t[r + 1] << 8 | t[r + 2] << 16, it = 16383 & (t[r + 7] << 8 | t[r + 6]), t = 16383 & (t[r + 9] << 8 | t[r + 8]), 1 & Z || 3 < (Z >> 1 & 7) || !(Z >> 4 & 1) || Z >> 5 >= G.Ja || !it || !t ? t = 0 : (y && (y[0] = it), N && (N[0] = t), t = 1));
        }
        if (!t || (y = y[0], vt = vt[0], K && (k[0] != y || U[0] != vt))) return 3;
        x != null && (x[0] = G, x.offset = r - x.w, e(4294967286 > r - x.w), e(x.offset == x.ha - u));
        break;
      }
      return H == 0 || H == 7 && K && x == null ? (w != null && (w[0] |= G.na != null && 0 < G.na.length), d != null && (d[0] = y), m != null && (m[0] = vt), 0) : H;
    }
    function Vi(t, r, u) {
      var d = r.width, m = r.height, w = 0, y = 0, N = d, x = m;
      if (r.Da = t != null && 0 < t.Da, r.Da && (N = t.cd, x = t.bd, w = t.v, y = t.j, 11 > u || (w &= -2, y &= -2), 0 > w || 0 > y || 0 >= N || 0 >= x || w + N > d || y + x > m)) return 0;
      if (r.v = w, r.j = y, r.va = w + N, r.o = y + x, r.U = N, r.T = x, r.da = t != null && 0 < t.da, r.da) {
        if (!Xt(N, x, u = [t.ib], w = [t.hb])) return 0;
        r.ib = u[0], r.hb = w[0];
      }
      return r.ob = t != null && t.ob, r.Kb = t == null || !t.Sd, r.da && (r.ob = r.ib < 3 * d / 4 && r.hb < 3 * m / 4, r.Kb = 0), 1;
    }
    function Gi(t) {
      if (t == null) return 2;
      if (11 > t.S) {
        var r = t.f.RGBA;
        r.fb += (t.height - 1) * r.A, r.A = -r.A;
      } else r = t.f.kb, t = t.height, r.O += (t - 1) * r.fa, r.fa = -r.fa, r.N += (t - 1 >> 1) * r.Ab, r.Ab = -r.Ab, r.W += (t - 1 >> 1) * r.Db, r.Db = -r.Db, r.F != null && (r.J += (t - 1) * r.lb, r.lb = -r.lb);
      return 0;
    }
    function ci(t, r, u, d) {
      if (d == null || 0 >= t || 0 >= r) return 2;
      if (u != null) {
        if (u.Da) {
          var m = u.cd, w = u.bd, y = -2 & u.v, N = -2 & u.j;
          if (0 > y || 0 > N || 0 >= m || 0 >= w || y + m > t || N + w > r) return 2;
          t = m, r = w;
        }
        if (u.da) {
          if (!Xt(t, r, m = [u.ib], w = [u.hb])) return 2;
          t = m[0], r = w[0];
        }
      }
      d.width = t, d.height = r;
      t: {
        var x = d.width, k = d.height;
        if (t = d.S, 0 >= x || 0 >= k || !(t >= ja && 13 > t)) t = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            y = w = m = r = 0;
            var U = (N = x * zs[t]) * k;
            if (11 > t || (w = (k + 1) / 2 * (r = (x + 1) / 2), t == 12 && (y = (m = x) * k)), (k = o(U + 2 * w + y)) == null) {
              t = 1;
              break t;
            }
            d.sd = k, 11 > t ? ((x = d.f.RGBA).eb = k, x.fb = 0, x.A = N, x.size = U) : ((x = d.f.kb).y = k, x.O = 0, x.fa = N, x.Fd = U, x.f = k, x.N = 0 + U, x.Ab = r, x.Cd = w, x.ea = k, x.W = 0 + U + w, x.Db = r, x.Ed = w, t == 12 && (x.F = k, x.J = 0 + U + 2 * w), x.Tc = y, x.lb = m);
          }
          if (r = 1, m = d.S, w = d.width, y = d.height, m >= ja && 13 > m) if (11 > m) t = d.f.RGBA, r &= (N = Math.abs(t.A)) * (y - 1) + w <= t.size, r &= N >= w * zs[m], r &= t.eb != null;
          else {
            t = d.f.kb, N = (w + 1) / 2, U = (y + 1) / 2, x = Math.abs(t.fa), k = Math.abs(t.Ab);
            var K = Math.abs(t.Db), Z = Math.abs(t.lb), G = Z * (y - 1) + w;
            r &= x * (y - 1) + w <= t.Fd, r &= k * (U - 1) + N <= t.Cd, r = (r &= K * (U - 1) + N <= t.Ed) & x >= w & k >= N & K >= N, r &= t.y != null, r &= t.f != null, r &= t.ea != null, m == 12 && (r &= Z >= w, r &= G <= t.Tc, r &= t.F != null);
          }
          else r = 0;
          t = r ? 0 : 2;
        }
      }
      return t != 0 || u != null && u.fd && (t = Gi(d)), t;
    }
    var nn = 64, ui = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], li = 24, hi = 32, Yi = 8, rn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    xt("Predictor0", "PredictorAdd0"), R.Predictor0 = function() {
      return 4278190080;
    }, R.Predictor1 = function(t) {
      return t;
    }, R.Predictor2 = function(t, r, u) {
      return r[u + 0];
    }, R.Predictor3 = function(t, r, u) {
      return r[u + 1];
    }, R.Predictor4 = function(t, r, u) {
      return r[u - 1];
    }, R.Predictor5 = function(t, r, u) {
      return Pt(Pt(t, r[u + 1]), r[u + 0]);
    }, R.Predictor6 = function(t, r, u) {
      return Pt(t, r[u - 1]);
    }, R.Predictor7 = function(t, r, u) {
      return Pt(t, r[u + 0]);
    }, R.Predictor8 = function(t, r, u) {
      return Pt(r[u - 1], r[u + 0]);
    }, R.Predictor9 = function(t, r, u) {
      return Pt(r[u + 0], r[u + 1]);
    }, R.Predictor10 = function(t, r, u) {
      return Pt(Pt(t, r[u - 1]), Pt(r[u + 0], r[u + 1]));
    }, R.Predictor11 = function(t, r, u) {
      var d = r[u + 0];
      return 0 >= Qt(d >> 24 & 255, t >> 24 & 255, (r = r[u - 1]) >> 24 & 255) + Qt(d >> 16 & 255, t >> 16 & 255, r >> 16 & 255) + Qt(d >> 8 & 255, t >> 8 & 255, r >> 8 & 255) + Qt(255 & d, 255 & t, 255 & r) ? d : t;
    }, R.Predictor12 = function(t, r, u) {
      var d = r[u + 0];
      return (qt((t >> 24 & 255) + (d >> 24 & 255) - ((r = r[u - 1]) >> 24 & 255)) << 24 | qt((t >> 16 & 255) + (d >> 16 & 255) - (r >> 16 & 255)) << 16 | qt((t >> 8 & 255) + (d >> 8 & 255) - (r >> 8 & 255)) << 8 | qt((255 & t) + (255 & d) - (255 & r))) >>> 0;
    }, R.Predictor13 = function(t, r, u) {
      var d = r[u - 1];
      return (Gt((t = Pt(t, r[u + 0])) >> 24 & 255, d >> 24 & 255) << 24 | Gt(t >> 16 & 255, d >> 16 & 255) << 16 | Gt(t >> 8 & 255, d >> 8 & 255) << 8 | Gt(t >> 0 & 255, d >> 0 & 255)) >>> 0;
    };
    var Mo = R.PredictorAdd0;
    R.PredictorAdd1 = te, xt("Predictor2", "PredictorAdd2"), xt("Predictor3", "PredictorAdd3"), xt("Predictor4", "PredictorAdd4"), xt("Predictor5", "PredictorAdd5"), xt("Predictor6", "PredictorAdd6"), xt("Predictor7", "PredictorAdd7"), xt("Predictor8", "PredictorAdd8"), xt("Predictor9", "PredictorAdd9"), xt("Predictor10", "PredictorAdd10"), xt("Predictor11", "PredictorAdd11"), xt("Predictor12", "PredictorAdd12"), xt("Predictor13", "PredictorAdd13");
    var Ji = R.PredictorAdd2;
    ee("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
      return t >> 8 & 255;
    }, function(t) {
      return t;
    }), ee("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
      return t;
    }, function(t) {
      return t >> 8 & 255;
    });
    var Fa, Fn = R.ColorIndexInverseTransform, Xi = R.MapARGB, Bo = R.VP8LColorIndexInverseTransformAlpha, Eo = R.MapAlpha, gr = R.VP8LPredictorsAdd = [];
    gr.length = 16, (R.VP8LPredictors = []).length = 16, (R.VP8LPredictorsAdd_C = []).length = 16, (R.VP8LPredictors_C = []).length = 16;
    var gn, In, mr, Gn, rr, fi, Cn, di, Ki, vr, jn, ir, Rr, pi, Tr, br, Zi, mn, ar, be, we, Fe, De, or, wr, gi, Ia, As, xs = o(511), Ss = o(2041), _s = o(225), Ps = o(767), ks = 0, qo = Ss, Ca = _s, hn = Ps, vn = xs, ja = 0, Oa = 1, Fs = 2, Ma = 3, Ba = 4, Do = 5, Is = 6, Ro = 7, To = 8, Ea = 9, zo = 10, Tc = [2, 3, 7], zc = [3, 3, 11], Cs = [280, 256, 256, 256, 40], Uc = [0, 1, 1, 1, 0], Hc = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], Wc = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], Vc = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], Gc = 8, Uo = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], Ho = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], Qi = null, Yc = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], Jc = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], js = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], Xc = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], Kc = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], Zc = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], Qc = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], yr = [], On = [], sr = [], $c = 1, Os = 2, Lr = [], bn = [];
    st("UpsampleRgbLinePair", re, 3), st("UpsampleBgrLinePair", Ne, 3), st("UpsampleRgbaLinePair", kn, 4), st("UpsampleBgraLinePair", Re, 4), st("UpsampleArgbLinePair", Ye, 4), st("UpsampleRgba4444LinePair", Me, 2), st("UpsampleRgb565LinePair", Se, 2);
    var tu = R.UpsampleRgbLinePair, eu = R.UpsampleBgrLinePair, Ms = R.UpsampleRgbaLinePair, Bs = R.UpsampleBgraLinePair, Es = R.UpsampleArgbLinePair, qs = R.UpsampleRgba4444LinePair, nu = R.UpsampleRgb565LinePair, qa = 16, Da = 1 << qa - 1, $i = -227, Wo = 482, Ds = 6, ru = (256 << Ds) - 1, Rs = 0, iu = o(256), au = o(256), ou = o(256), su = o(256), cu = o(Wo - $i), uu = o(Wo - $i);
    nr("YuvToRgbRow", re, 3), nr("YuvToBgrRow", Ne, 3), nr("YuvToRgbaRow", kn, 4), nr("YuvToBgraRow", Re, 4), nr("YuvToArgbRow", Ye, 4), nr("YuvToRgba4444Row", Me, 2), nr("YuvToRgb565Row", Se, 2);
    var Ts = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], Ra = [0, 2, 8], lu = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], hu = 1;
    this.WebPDecodeRGBA = function(t, r, u, d, m) {
      var w = Oa, y = new ai(), N = new Ln();
      y.ba = N, N.S = w, N.width = [N.width], N.height = [N.height];
      var x = N.width, k = N.height, U = new Qn();
      if (U == null || t == null) var K = 2;
      else e(U != null), K = si(t, r, u, U.width, U.height, U.Pd, U.Qd, U.format, null);
      if (K != 0 ? x = 0 : (x != null && (x[0] = U.width[0]), k != null && (k[0] = U.height[0]), x = 1), x) {
        N.width = N.width[0], N.height = N.height[0], d != null && (d[0] = N.width), m != null && (m[0] = N.height);
        t: {
          if (d = new Qr(), (m = new Ri()).data = t, m.w = r, m.ha = u, m.kd = 1, r = [0], e(m != null), ((t = si(m.data, m.w, m.ha, null, null, null, r, null, m)) == 0 || t == 7) && r[0] && (t = 4), (r = t) == 0) {
            if (e(y != null), d.data = m.data, d.w = m.w + m.offset, d.ha = m.ha - m.offset, d.put = Tn, d.ac = He, d.bc = zn, d.ma = y, m.xa) {
              if ((t = pn()) == null) {
                y = 1;
                break t;
              }
              if (function(Z, G) {
                var vt = [0], it = [0], H = [0];
                e: for (; ; ) {
                  if (Z == null) return 0;
                  if (G == null) return Z.a = 2, 0;
                  if (Z.l = G, Z.a = 0, Q(Z.m, G.data, G.w, G.ha), !Tt(Z.m, vt, it, H)) {
                    Z.a = 3;
                    break e;
                  }
                  if (Z.xb = Os, G.width = vt[0], G.height = it[0], !Wn(vt[0], it[0], 1, Z, null)) break e;
                  return 1;
                }
                return e(Z.a != 0), 0;
              }(t, d)) {
                if (d = (r = ci(d.width, d.height, y.Oa, y.ba)) == 0) {
                  e: {
                    d = t;
                    n: for (; ; ) {
                      if (d == null) {
                        d = 0;
                        break e;
                      }
                      if (e(d.s.yc != null), e(d.s.Ya != null), e(0 < d.s.Wb), e((u = d.l) != null), e((m = u.ma) != null), d.xb != 0) {
                        if (d.ca = m.ba, d.tb = m.tb, e(d.ca != null), !Vi(m.Oa, u, Ma)) {
                          d.a = 2;
                          break n;
                        }
                        if (!Mr(d, u.width) || u.da) break n;
                        if ((u.da || ce(d.ca.S)) && J(), 11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), d.ca.f.kb.F != null && J()), d.Pb && 0 < d.s.ua && d.s.vb.X == null && !zt(d.s.vb, d.s.Wa.Xa)) {
                          d.a = 1;
                          break n;
                        }
                        d.xb = 0;
                      }
                      if (!Sn(d, d.V, d.Ba, d.c, d.i, u.o, Gr)) break n;
                      m.Dc = d.Ma, d = 1;
                      break e;
                    }
                    e(d.a != 0), d = 0;
                  }
                  d = !d;
                }
                d && (r = t.a);
              } else r = t.a;
            } else {
              if ((t = new go()) == null) {
                y = 1;
                break t;
              }
              if (t.Fa = m.na, t.P = m.P, t.qc = m.Sa, da(t, d)) {
                if ((r = ci(d.width, d.height, y.Oa, y.ba)) == 0) {
                  if (t.Aa = 0, u = y.Oa, e((m = t) != null), u != null) {
                    if (0 < (x = 0 > (x = u.Md) ? 0 : 100 < x ? 255 : 255 * x / 100)) {
                      for (k = U = 0; 4 > k; ++k) 12 > (K = m.pb[k]).lc && (K.ia = x * lu[0 > K.lc ? 0 : K.lc] >> 3), U |= K.ia;
                      U && (alert("todo:VP8InitRandom"), m.ia = 1);
                    }
                    m.Ga = u.Id, 100 < m.Ga ? m.Ga = 100 : 0 > m.Ga && (m.Ga = 0);
                  }
                  mo(t, d) || (r = t.a);
                }
              } else r = t.a;
            }
            r == 0 && y.Oa != null && y.Oa.fd && (r = Gi(y.ba));
          }
          y = r;
        }
        w = y != 0 ? null : 11 > w ? N.f.RGBA.eb : N.f.kb.y;
      } else w = null;
      return w;
    };
    var zs = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(R, gt) {
    for (var dt = "", F = 0; F < 4; F++) dt += String.fromCharCode(R[gt++]);
    return dt;
  }
  function b(R, gt) {
    return (R[gt + 0] << 0 | R[gt + 1] << 8 | R[gt + 2] << 16) >>> 0;
  }
  function A(R, gt) {
    return (R[gt + 0] << 0 | R[gt + 1] << 8 | R[gt + 2] << 16 | R[gt + 3] << 24) >>> 0;
  }
  new f();
  var S = [0], p = [0], O = [], I = new f(), q = i2, _ = function(R, gt) {
    var dt = {}, F = 0, P = false, z = 0, D = 0;
    if (dt.frames = [], !/** @license
     * Copyright (c) 2017 Dominik Homberger
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    https://webpjs.appspot.com
    WebPRiffParser dominikhlbg@gmail.com
    */
    function(j, B, W, Y) {
      for (var $ = 0; $ < Y; $++) if (j[B + $] != W.charCodeAt($)) return true;
      return false;
    }(R, gt, "RIFF", 4)) {
      var at, nt;
      for (A(R, gt += 4), gt += 8; gt < R.length; ) {
        var lt = g(R, gt), Q = A(R, gt += 4);
        gt += 4;
        var ft = Q + (1 & Q);
        switch (lt) {
          case "VP8 ":
          case "VP8L":
            dt.frames[F] === void 0 && (dt.frames[F] = {}), (L = dt.frames[F]).src_off = P ? D : gt - 8, L.src_size = z + Q + 8, F++, P && (P = false, z = 0, D = 0);
            break;
          case "VP8X":
            (L = dt.header = {}).feature_flags = R[gt];
            var ht = gt + 4;
            L.canvas_width = 1 + b(R, ht), ht += 3, L.canvas_height = 1 + b(R, ht), ht += 3;
            break;
          case "ALPH":
            P = true, z = ft + 8, D = gt - 8;
            break;
          case "ANIM":
            (L = dt.header).bgcolor = A(R, gt), ht = gt + 4, L.loop_count = (at = R)[(nt = ht) + 0] << 0 | at[nt + 1] << 8, ht += 2;
            break;
          case "ANMF":
            var kt, L;
            (L = dt.frames[F] = {}).offset_x = 2 * b(R, gt), gt += 3, L.offset_y = 2 * b(R, gt), gt += 3, L.width = 1 + b(R, gt), gt += 3, L.height = 1 + b(R, gt), gt += 3, L.duration = b(R, gt), gt += 3, kt = R[gt++], L.dispose = 1 & kt, L.blend = kt >> 1 & 1;
        }
        lt != "ANMF" && (gt += ft);
      }
      return dt;
    }
  }(q, 0);
  _.response = q, _.rgbaoutput = true, _.dataurl = false;
  var M = _.header ? _.header : null, X = _.frames ? _.frames : null;
  if (M) {
    M.loop_counter = M.loop_count, S = [M.canvas_height], p = [M.canvas_width];
    for (var ot = 0; ot < X.length && X[ot].blend != 0; ot++) ;
  }
  var ut = X[0], wt = I.WebPDecodeRGBA(q, ut.src_off, ut.src_size, p, S);
  ut.rgba = wt, ut.imgwidth = p[0], ut.imgheight = S[0];
  for (var tt = 0; tt < p[0] * S[0] * 4; tt++) O[tt] = wt[tt];
  return this.width = p, this.height = S, this.data = O, this;
}
(function(i2) {
  var e = function() {
    return typeof ps == "function";
  }, n = function(S, p, O, I) {
    var q = 4, _ = l;
    switch (I) {
      case i2.image_compression.FAST:
        q = 1, _ = o;
        break;
      case i2.image_compression.MEDIUM:
        q = 6, _ = h;
        break;
      case i2.image_compression.SLOW:
        q = 9, _ = f;
    }
    S = a(S, p, O, _);
    var M = ps(S, { level: q });
    return i2.__addimage__.arrayBufferToBinaryString(M);
  }, a = function(S, p, O, I) {
    for (var q, _, M, X = S.length / p, ot = new Uint8Array(S.length + X), ut = b(), wt = 0; wt < X; wt += 1) {
      if (M = wt * p, q = S.subarray(M, M + p), I) ot.set(I(q, O, _), M + wt);
      else {
        for (var tt, R = ut.length, gt = []; tt < R; tt += 1) gt[tt] = ut[tt](q, O, _);
        var dt = A(gt.concat());
        ot.set(gt[dt], M + wt);
      }
      _ = q;
    }
    return ot;
  }, c = function(S) {
    var p = Array.apply([], S);
    return p.unshift(0), p;
  }, o = function(S, p) {
    var O, I = [], q = S.length;
    I[0] = 1;
    for (var _ = 0; _ < q; _ += 1) O = S[_ - p] || 0, I[_ + 1] = S[_] - O + 256 & 255;
    return I;
  }, l = function(S, p, O) {
    var I, q = [], _ = S.length;
    q[0] = 2;
    for (var M = 0; M < _; M += 1) I = O && O[M] || 0, q[M + 1] = S[M] - I + 256 & 255;
    return q;
  }, h = function(S, p, O) {
    var I, q, _ = [], M = S.length;
    _[0] = 3;
    for (var X = 0; X < M; X += 1) I = S[X - p] || 0, q = O && O[X] || 0, _[X + 1] = S[X] + 256 - (I + q >>> 1) & 255;
    return _;
  }, f = function(S, p, O) {
    var I, q, _, M, X = [], ot = S.length;
    X[0] = 4;
    for (var ut = 0; ut < ot; ut += 1) I = S[ut - p] || 0, q = O && O[ut] || 0, _ = O && O[ut - p] || 0, M = g(I, q, _), X[ut + 1] = S[ut] - M + 256 & 255;
    return X;
  }, g = function(S, p, O) {
    if (S === p && p === O) return S;
    var I = Math.abs(p - O), q = Math.abs(S - O), _ = Math.abs(S + p - O - O);
    return I <= q && I <= _ ? S : q <= _ ? p : O;
  }, b = function() {
    return [c, o, l, h, f];
  }, A = function(S) {
    var p = S.map(function(O) {
      return O.reduce(function(I, q) {
        return I + Math.abs(q);
      }, 0);
    });
    return p.indexOf(Math.min.apply(null, p));
  };
  i2.processPNG = function(S, p, O, I) {
    var q, _, M, X, ot, ut, wt, tt, R, gt, dt, F, P, z, D, at = this.decode.FLATE_DECODE, nt = "";
    if (this.__addimage__.isArrayBuffer(S) && (S = new Uint8Array(S)), this.__addimage__.isArrayBufferView(S)) {
      if (S = (M = new n1(S)).imgData, _ = M.bits, q = M.colorSpace, ot = M.colors, [4, 6].indexOf(M.colorType) !== -1) {
        if (M.bits === 8) {
          R = (tt = M.pixelBitlength == 32 ? new Uint32Array(M.decodePixels().buffer) : M.pixelBitlength == 16 ? new Uint16Array(M.decodePixels().buffer) : new Uint8Array(M.decodePixels().buffer)).length, dt = new Uint8Array(R * M.colors), gt = new Uint8Array(R);
          var lt, Q = M.pixelBitlength - M.bits;
          for (z = 0, D = 0; z < R; z++) {
            for (P = tt[z], lt = 0; lt < Q; ) dt[D++] = P >>> lt & 255, lt += M.bits;
            gt[z] = P >>> lt & 255;
          }
        }
        if (M.bits === 16) {
          R = (tt = new Uint32Array(M.decodePixels().buffer)).length, dt = new Uint8Array(R * (32 / M.pixelBitlength) * M.colors), gt = new Uint8Array(R * (32 / M.pixelBitlength)), F = M.colors > 1, z = 0, D = 0;
          for (var ft = 0; z < R; ) P = tt[z++], dt[D++] = P >>> 0 & 255, F && (dt[D++] = P >>> 16 & 255, P = tt[z++], dt[D++] = P >>> 0 & 255), gt[ft++] = P >>> 16 & 255;
          _ = 8;
        }
        I !== i2.image_compression.NONE && e() ? (S = n(dt, M.width * M.colors, M.colors, I), wt = n(gt, M.width, 1, I)) : (S = dt, wt = gt, at = void 0);
      }
      if (M.colorType === 3 && (q = this.color_spaces.INDEXED, ut = M.palette, M.transparency.indexed)) {
        var ht = M.transparency.indexed, kt = 0;
        for (z = 0, R = ht.length; z < R; ++z) kt += ht[z];
        if ((kt /= 255) === R - 1 && ht.indexOf(0) !== -1) X = [ht.indexOf(0)];
        else if (kt !== R) {
          for (tt = M.decodePixels(), gt = new Uint8Array(tt.length), z = 0, R = tt.length; z < R; z++) gt[z] = ht[tt[z]];
          wt = n(gt, M.width, 1);
        }
      }
      var L = function(j) {
        var B;
        switch (j) {
          case i2.image_compression.FAST:
            B = 11;
            break;
          case i2.image_compression.MEDIUM:
            B = 13;
            break;
          case i2.image_compression.SLOW:
            B = 14;
            break;
          default:
            B = 12;
        }
        return B;
      }(I);
      return at === this.decode.FLATE_DECODE && (nt = "/Predictor " + L + " "), nt += "/Colors " + ot + " /BitsPerComponent " + _ + " /Columns " + M.width, (this.__addimage__.isArrayBuffer(S) || this.__addimage__.isArrayBufferView(S)) && (S = this.__addimage__.arrayBufferToBinaryString(S)), (wt && this.__addimage__.isArrayBuffer(wt) || this.__addimage__.isArrayBufferView(wt)) && (wt = this.__addimage__.arrayBufferToBinaryString(wt)), { alias: O, data: S, index: p, filter: at, decodeParameters: nt, transparency: X, palette: ut, sMask: wt, predictor: L, width: M.width, height: M.height, bitsPerComponent: _, colorSpace: q };
    }
  };
})(Ht.API), function(i2) {
  i2.processGIF89A = function(e, n, a, c) {
    var o = new r1(e), l = o.width, h = o.height, f = [];
    o.decodeAndBlitFrameRGBA(0, f);
    var g = { data: f, width: l, height: h }, b = new cs(100).encode(g, 100);
    return i2.processJPEG.call(this, b, n, a, c);
  }, i2.processGIF87A = i2.processGIF89A;
}(Ht.API), En.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var i2 = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(i2);
    for (var e = 0; e < i2; e++) {
      var n = this.datav.getUint8(this.pos++, true), a = this.datav.getUint8(this.pos++, true), c = this.datav.getUint8(this.pos++, true), o = this.datav.getUint8(this.pos++, true);
      this.palette[e] = { red: c, green: a, blue: n, quad: o };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = false);
}, En.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var i2 = "bit" + this.bitPP, e = this.width * this.height * 4;
    this.data = new Uint8Array(e), this[i2]();
  } catch (n) {
    ve.log("bit decode error:" + n);
  }
}, En.prototype.bit1 = function() {
  var i2, e = Math.ceil(this.width / 8), n = e % 4;
  for (i2 = this.height - 1; i2 >= 0; i2--) {
    for (var a = this.bottom_up ? i2 : this.height - 1 - i2, c = 0; c < e; c++) for (var o = this.datav.getUint8(this.pos++, true), l = a * this.width * 4 + 8 * c * 4, h = 0; h < 8 && 8 * c + h < this.width; h++) {
      var f = this.palette[o >> 7 - h & 1];
      this.data[l + 4 * h] = f.blue, this.data[l + 4 * h + 1] = f.green, this.data[l + 4 * h + 2] = f.red, this.data[l + 4 * h + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, En.prototype.bit4 = function() {
  for (var i2 = Math.ceil(this.width / 2), e = i2 % 4, n = this.height - 1; n >= 0; n--) {
    for (var a = this.bottom_up ? n : this.height - 1 - n, c = 0; c < i2; c++) {
      var o = this.datav.getUint8(this.pos++, true), l = a * this.width * 4 + 2 * c * 4, h = o >> 4, f = 15 & o, g = this.palette[h];
      if (this.data[l] = g.blue, this.data[l + 1] = g.green, this.data[l + 2] = g.red, this.data[l + 3] = 255, 2 * c + 1 >= this.width) break;
      g = this.palette[f], this.data[l + 4] = g.blue, this.data[l + 4 + 1] = g.green, this.data[l + 4 + 2] = g.red, this.data[l + 4 + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, En.prototype.bit8 = function() {
  for (var i2 = this.width % 4, e = this.height - 1; e >= 0; e--) {
    for (var n = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
      var c = this.datav.getUint8(this.pos++, true), o = n * this.width * 4 + 4 * a;
      if (c < this.palette.length) {
        var l = this.palette[c];
        this.data[o] = l.red, this.data[o + 1] = l.green, this.data[o + 2] = l.blue, this.data[o + 3] = 255;
      } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
    }
    i2 !== 0 && (this.pos += 4 - i2);
  }
}, En.prototype.bit15 = function() {
  for (var i2 = this.width % 3, e = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
    for (var a = this.bottom_up ? n : this.height - 1 - n, c = 0; c < this.width; c++) {
      var o = this.datav.getUint16(this.pos, true);
      this.pos += 2;
      var l = (o & e) / e * 255 | 0, h = (o >> 5 & e) / e * 255 | 0, f = (o >> 10 & e) / e * 255 | 0, g = o >> 15 ? 255 : 0, b = a * this.width * 4 + 4 * c;
      this.data[b] = f, this.data[b + 1] = h, this.data[b + 2] = l, this.data[b + 3] = g;
    }
    this.pos += i2;
  }
}, En.prototype.bit16 = function() {
  for (var i2 = this.width % 3, e = parseInt("11111", 2), n = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
    for (var c = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
      var l = this.datav.getUint16(this.pos, true);
      this.pos += 2;
      var h = (l & e) / e * 255 | 0, f = (l >> 5 & n) / n * 255 | 0, g = (l >> 11) / e * 255 | 0, b = c * this.width * 4 + 4 * o;
      this.data[b] = g, this.data[b + 1] = f, this.data[b + 2] = h, this.data[b + 3] = 255;
    }
    this.pos += i2;
  }
}, En.prototype.bit24 = function() {
  for (var i2 = this.height - 1; i2 >= 0; i2--) {
    for (var e = this.bottom_up ? i2 : this.height - 1 - i2, n = 0; n < this.width; n++) {
      var a = this.datav.getUint8(this.pos++, true), c = this.datav.getUint8(this.pos++, true), o = this.datav.getUint8(this.pos++, true), l = e * this.width * 4 + 4 * n;
      this.data[l] = o, this.data[l + 1] = c, this.data[l + 2] = a, this.data[l + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, En.prototype.bit32 = function() {
  for (var i2 = this.height - 1; i2 >= 0; i2--) for (var e = this.bottom_up ? i2 : this.height - 1 - i2, n = 0; n < this.width; n++) {
    var a = this.datav.getUint8(this.pos++, true), c = this.datav.getUint8(this.pos++, true), o = this.datav.getUint8(this.pos++, true), l = this.datav.getUint8(this.pos++, true), h = e * this.width * 4 + 4 * n;
    this.data[h] = o, this.data[h + 1] = c, this.data[h + 2] = a, this.data[h + 3] = l;
  }
}, En.prototype.getData = function() {
  return this.data;
}, /**
* @license
* Copyright (c) 2018 Aras Abbasi
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  i2.processBMP = function(e, n, a, c) {
    var o = new En(e, false), l = o.width, h = o.height, f = { data: o.getData(), width: l, height: h }, g = new cs(100).encode(f, 100);
    return i2.processJPEG.call(this, g, n, a, c);
  };
}(Ht.API), Lc.prototype.getData = function() {
  return this.data;
}, /**
* @license
* Copyright (c) 2019 Aras Abbasi
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  i2.processWEBP = function(e, n, a, c) {
    var o = new Lc(e), l = o.width, h = o.height, f = { data: o.getData(), width: l, height: h }, g = new cs(100).encode(f, 100);
    return i2.processJPEG.call(this, g, n, a, c);
  };
}(Ht.API), Ht.API.processRGBA = function(i2, e, n) {
  for (var a = i2.data, c = a.length, o = new Uint8Array(c / 4 * 3), l = new Uint8Array(c / 4), h = 0, f = 0, g = 0; g < c; g += 4) {
    var b = a[g], A = a[g + 1], S = a[g + 2], p = a[g + 3];
    o[h++] = b, o[h++] = A, o[h++] = S, l[f++] = p;
  }
  var O = this.__addimage__.arrayBufferToBinaryString(o);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(l), data: O, index: e, alias: n, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: i2.width, height: i2.height };
}, Ht.API.setLanguage = function(i2) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = false), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[i2] !== void 0 && (this.internal.languageSettings.languageCode = i2, this.internal.languageSettings.isSubscribed === false && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = true)), this;
}, Li = Ht.API, $a = Li.getCharWidthsArray = function(i2, e) {
  var n, a, c = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), l = e.charSpace || this.internal.getCharSpace(), h = e.widths ? e.widths : c.metadata.Unicode.widths, f = h.fof ? h.fof : 1, g = e.kerning ? e.kerning : c.metadata.Unicode.kerning, b = g.fof ? g.fof : 1, A = e.doKerning !== false, S = 0, p = i2.length, O = 0, I = h[0] || f, q = [];
  for (n = 0; n < p; n++) a = i2.charCodeAt(n), typeof c.metadata.widthOfString == "function" ? q.push((c.metadata.widthOfGlyph(c.metadata.characterToGlyph(a)) + l * (1e3 / o) || 0) / 1e3) : (S = A && fe(g[a]) === "object" && !isNaN(parseInt(g[a][O], 10)) ? g[a][O] / b : 0, q.push((h[a] || I) / f + S)), O = a;
  return q;
}, vc = Li.getStringUnitWidth = function(i2, e) {
  var n = (e = e || {}).fontSize || this.internal.getFontSize(), a = e.font || this.internal.getFont(), c = e.charSpace || this.internal.getCharSpace();
  return Li.processArabic && (i2 = Li.processArabic(i2)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(i2, n, c) / n : $a.apply(this, arguments).reduce(function(o, l) {
    return o + l;
  }, 0);
}, bc = function(i2, e, n, a) {
  for (var c = [], o = 0, l = i2.length, h = 0; o !== l && h + e[o] < n; ) h += e[o], o++;
  c.push(i2.slice(0, o));
  var f = o;
  for (h = 0; o !== l; ) h + e[o] > a && (c.push(i2.slice(f, o)), h = 0, f = o), h += e[o], o++;
  return f !== o && c.push(i2.slice(f, o)), c;
}, wc = function(i2, e, n) {
  n || (n = {});
  var a, c, o, l, h, f, g, b = [], A = [b], S = n.textIndent || 0, p = 0, O = 0, I = i2.split(" "), q = $a.apply(this, [" ", n])[0];
  if (f = n.lineIndent === -1 ? I[0].length + 2 : n.lineIndent || 0) {
    var _ = Array(f).join(" "), M = [];
    I.map(function(ot) {
      (ot = ot.split(/\s*\n/)).length > 1 ? M = M.concat(ot.map(function(ut, wt) {
        return (wt && ut.length ? `
` : "") + ut;
      })) : M.push(ot[0]);
    }), I = M, f = vc.apply(this, [_, n]);
  }
  for (o = 0, l = I.length; o < l; o++) {
    var X = 0;
    if (a = I[o], f && a[0] == `
` && (a = a.substr(1), X = 1), S + p + (O = (c = $a.apply(this, [a, n])).reduce(function(ot, ut) {
      return ot + ut;
    }, 0)) > e || X) {
      if (O > e) {
        for (h = bc.apply(this, [a, c, e - (S + p), e]), b.push(h.shift()), b = [h.pop()]; h.length; ) A.push([h.shift()]);
        O = c.slice(a.length - (b[0] ? b[0].length : 0)).reduce(function(ot, ut) {
          return ot + ut;
        }, 0);
      } else b = [a];
      A.push(b), S = O + f, p = q;
    } else b.push(a), S += p + O, p = q;
  }
  return g = f ? function(ot, ut) {
    return (ut ? _ : "") + ot.join(" ");
  } : function(ot) {
    return ot.join(" ");
  }, A.map(g);
}, Li.splitTextToSize = function(i2, e, n) {
  var a, c = (n = n || {}).fontSize || this.internal.getFontSize(), o = (function(b) {
    if (b.widths && b.kerning) return { widths: b.widths, kerning: b.kerning };
    var A = this.internal.getFont(b.fontName, b.fontStyle);
    return A.metadata.Unicode ? { widths: A.metadata.Unicode.widths || { 0: 1 }, kerning: A.metadata.Unicode.kerning || {} } : { font: A.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, n);
  a = Array.isArray(i2) ? i2 : String(i2).split(/\r?\n/);
  var l = 1 * this.internal.scaleFactor * e / c;
  o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / c : 0, o.lineIndent = n.lineIndent;
  var h, f, g = [];
  for (h = 0, f = a.length; h < f; h++) g = g.concat(wc.apply(this, [a[h], l, o]));
  return g;
}, function(i2) {
  i2.__fontmetrics__ = i2.__fontmetrics__ || {};
  for (var e = "klmnopqrstuvwxyz", n = {}, a = {}, c = 0; c < e.length; c++) n[e[c]] = "0123456789abcdef"[c], a["0123456789abcdef"[c]] = e[c];
  var o = function(A) {
    return "0x" + parseInt(A, 10).toString(16);
  }, l = i2.__fontmetrics__.compress = function(A) {
    var S, p, O, I, q = ["{"];
    for (var _ in A) {
      if (S = A[_], isNaN(parseInt(_, 10)) ? p = "'" + _ + "'" : (_ = parseInt(_, 10), p = (p = o(_).slice(2)).slice(0, -1) + a[p.slice(-1)]), typeof S == "number") S < 0 ? (O = o(S).slice(3), I = "-") : (O = o(S).slice(2), I = ""), O = I + O.slice(0, -1) + a[O.slice(-1)];
      else {
        if (fe(S) !== "object") throw new Error("Don't know what to do with value type " + fe(S) + ".");
        O = l(S);
      }
      q.push(p + O);
    }
    return q.push("}"), q.join("");
  }, h = i2.__fontmetrics__.uncompress = function(A) {
    if (typeof A != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var S, p, O, I, q = {}, _ = 1, M = q, X = [], ot = "", ut = "", wt = A.length - 1, tt = 1; tt < wt; tt += 1) (I = A[tt]) == "'" ? S ? (O = S.join(""), S = void 0) : S = [] : S ? S.push(I) : I == "{" ? (X.push([M, O]), M = {}, O = void 0) : I == "}" ? ((p = X.pop())[0][p[1]] = M, O = void 0, M = p[0]) : I == "-" ? _ = -1 : O === void 0 ? n.hasOwnProperty(I) ? (ot += n[I], O = parseInt(ot, 16) * _, _ = 1, ot = "") : ot += I : n.hasOwnProperty(I) ? (ut += n[I], M[O] = parseInt(ut, 16) * _, _ = 1, O = void 0, ut = "") : ut += I;
    return q;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, b = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  i2.events.push(["addFont", function(A) {
    var S = A.font, p = b.Unicode[S.postScriptName];
    p && (S.metadata.Unicode = {}, S.metadata.Unicode.widths = p.widths, S.metadata.Unicode.kerning = p.kerning);
    var O = g.Unicode[S.postScriptName];
    O && (S.metadata.Unicode.encoding = O, S.encoding = O.codePages[0]);
  }]);
}(Ht.API), /**
* @license
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = function(n) {
    for (var a = n.length, c = new Uint8Array(a), o = 0; o < a; o++) c[o] = n.charCodeAt(o);
    return c;
  };
  i2.API.events.push(["addFont", function(n) {
    var a = void 0, c = n.font, o = n.instance;
    if (!c.isStandardFont) {
      if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + c.postScriptName + "').");
      if (typeof (a = o.existsFileInVFS(c.postScriptName) === false ? o.loadFile(c.postScriptName) : o.getFileFromVFS(c.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + c.postScriptName + "').");
      (function(l, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(oa(h)), l.metadata = i2.API.TTFFont.open(h), l.metadata.Unicode = l.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, l.metadata.glyIdsUsed = [0];
      })(c, a);
    }
  }]);
}(Ht), /** @license
* Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* ====================================================================
*/
function(i2) {
  function e() {
    return (Ut.canvg ? Promise.resolve(Ut.canvg) : import("./index.es-YufTdp0y-SIODSMTM.js")).catch(function(n) {
      return Promise.reject(new Error("Could not load canvg: " + n));
    }).then(function(n) {
      return n.default ? n.default : n;
    });
  }
  Ht.API.addSvgAsImage = function(n, a, c, o, l, h, f, g) {
    if (isNaN(a) || isNaN(c)) throw ve.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(o) || isNaN(l)) throw ve.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var b = document.createElement("canvas");
    b.width = o, b.height = l;
    var A = b.getContext("2d");
    A.fillStyle = "#fff", A.fillRect(0, 0, b.width, b.height);
    var S = { ignoreMouse: true, ignoreAnimation: true, ignoreDimensions: true }, p = this;
    return e().then(function(O) {
      return O.fromString(A, n, S);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(O) {
      return O.render(S);
    }).then(function() {
      p.addImage(b.toDataURL("image/jpeg", 1), a, c, o, l, f, g);
    });
  };
}(), Ht.API.putTotalPages = function(i2) {
  var e, n = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(i2, "g"), n = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(i2, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var a = 1; a <= this.internal.getNumberOfPages(); a++) for (var c = 0; c < this.internal.pages[a].length; c++) this.internal.pages[a][c] = this.internal.pages[a][c].replace(e, n);
  return this;
}, Ht.API.viewerPreferences = function(i2, e) {
  var n;
  i2 = i2 || {}, e = e || false;
  var a, c, o, l = { HideToolbar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideMenubar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, FitWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, CenterWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: false, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: false, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: false, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: false, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: false, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: false, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(l), f = [], g = 0, b = 0, A = 0;
  function S(O, I) {
    var q, _ = false;
    for (q = 0; q < O.length; q += 1) O[q] === I && (_ = true);
    return _;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(l)), this.internal.viewerpreferences.isSubscribed = false), n = this.internal.viewerpreferences.configuration, i2 === "reset" || e === true) {
    var p = h.length;
    for (A = 0; A < p; A += 1) n[h[A]].value = n[h[A]].defaultValue, n[h[A]].explicitSet = false;
  }
  if (fe(i2) === "object") {
    for (c in i2) if (o = i2[c], S(h, c) && o !== void 0) {
      if (n[c].type === "boolean" && typeof o == "boolean") n[c].value = o;
      else if (n[c].type === "name" && S(n[c].valueSet, o)) n[c].value = o;
      else if (n[c].type === "integer" && Number.isInteger(o)) n[c].value = o;
      else if (n[c].type === "array") {
        for (g = 0; g < o.length; g += 1) if (a = true, o[g].length === 1 && typeof o[g][0] == "number") f.push(String(o[g] - 1));
        else if (o[g].length > 1) {
          for (b = 0; b < o[g].length; b += 1) typeof o[g][b] != "number" && (a = false);
          a === true && f.push([o[g][0] - 1, o[g][1] - 1].join(" "));
        }
        n[c].value = "[" + f.join(" ") + "]";
      } else n[c].value = n[c].defaultValue;
      n[c].explicitSet = true;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === false && (this.internal.events.subscribe("putCatalog", function() {
    var O, I = [];
    for (O in n) n[O].explicitSet === true && (n[O].type === "name" ? I.push("/" + O + " /" + n[O].value) : I.push("/" + O + " " + n[O].value));
    I.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + I.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = n, this;
}, /** ====================================================================
* @license
* jsPDF XMP metadata plugin
* Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* ====================================================================
*/
function(i2) {
  var e = function() {
    var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', c = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(a)), l = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), g = o.length + l.length + h.length + c.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(c + o + l + h + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, n = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  i2.addMetadata = function(a, c) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: a, namespaceuri: c || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", e)), this;
  };
}(Ht.API), function(i2) {
  var e = i2.API, n = e.pdfEscape16 = function(o, l) {
    for (var h, f = l.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], b = [""], A = 0, S = o.length; A < S; ++A) {
      if (h = l.metadata.characterToGlyph(o.charCodeAt(A)), l.metadata.glyIdsUsed.push(h), l.metadata.toUnicode[h] = o.charCodeAt(A), f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(l.metadata.widthOfGlyph(h), 10)])), h == "0") return b.join("");
      h = h.toString(16), b.push(g[4 - h.length], h);
    }
    return b.join("");
  }, a = function(o) {
    var l, h, f, g, b, A, S;
    for (b = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, f = [], A = 0, S = (h = Object.keys(o).sort(function(p, O) {
      return p - O;
    })).length; A < S; A++) l = h[A], f.length >= 100 && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), o[l] !== void 0 && o[l] !== null && typeof o[l].toString == "function" && (g = ("0000" + o[l].toString(16)).slice(-4), l = ("0000" + (+l).toString(16)).slice(-4), f.push("<" + l + "><" + g + ">"));
    return f.length && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), b += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  e.events.push(["putFont", function(o) {
    (function(l) {
      var h = l.font, f = l.out, g = l.newObject, b = l.putStream;
      if (h.metadata instanceof i2.API.TTFFont && h.encoding === "Identity-H") {
        for (var A = h.metadata.Unicode.widths, S = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", O = 0; O < S.length; O++) p += String.fromCharCode(S[O]);
        var I = g();
        b({ data: p, addLength1: true, objectId: I }), f("endobj");
        var q = g();
        b({ data: a(h.metadata.toUnicode), addLength1: true, objectId: q }), f("endobj");
        var _ = g();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Ai(h.fontName)), f("/FontFile2 " + I + " 0 R"), f("/FontBBox " + i2.API.PDFObject.convert(h.metadata.bbox)), f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f(">>"), f("endobj");
        var M = g();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + Ai(h.fontName)), f("/FontDescriptor " + _ + " 0 R"), f("/W " + i2.API.PDFObject.convert(A)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), h.objectNumber = g(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + q + " 0 R"), f("/BaseFont /" + Ai(h.fontName)), f("/Encoding /" + h.encoding), f("/DescendantFonts [" + M + " 0 R]"), f(">>"), f("endobj"), h.isAlreadyPutted = true;
      }
    })(o);
  }]), e.events.push(["putFont", function(o) {
    (function(l) {
      var h = l.font, f = l.out, g = l.newObject, b = l.putStream;
      if (h.metadata instanceof i2.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var A = h.metadata.rawData, S = "", p = 0; p < A.length; p++) S += String.fromCharCode(A[p]);
        var O = g();
        b({ data: S, addLength1: true, objectId: O }), f("endobj");
        var I = g();
        b({ data: a(h.metadata.toUnicode), addLength1: true, objectId: I }), f("endobj");
        var q = g();
        f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + O + " 0 R"), f("/Flags 96"), f("/FontBBox " + i2.API.PDFObject.convert(h.metadata.bbox)), f("/FontName /" + Ai(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = g();
        for (var _ = 0; _ < h.metadata.hmtx.widths.length; _++) h.metadata.hmtx.widths[_] = parseInt(h.metadata.hmtx.widths[_] * (1e3 / h.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + I + " 0 R/BaseFont/" + Ai(h.fontName) + "/FontDescriptor " + q + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + i2.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), f("endobj"), h.isAlreadyPutted = true;
      }
    })(o);
  }]);
  var c = function(o) {
    var l, h = o.text || "", f = o.x, g = o.y, b = o.options || {}, A = o.mutex || {}, S = A.pdfEscape, p = A.activeFontKey, O = A.fonts, I = p, q = "", _ = 0, M = "", X = O[I].encoding;
    if (O[I].encoding !== "Identity-H") return { text: h, x: f, y: g, options: b, mutex: A };
    for (M = h, I = p, Array.isArray(h) && (M = h[0]), _ = 0; _ < M.length; _ += 1) O[I].metadata.hasOwnProperty("cmap") && (l = O[I].metadata.cmap.unicode.codeMap[M[_].charCodeAt(0)]), l || M[_].charCodeAt(0) < 256 && O[I].metadata.hasOwnProperty("Unicode") ? q += M[_] : q += "";
    var ot = "";
    return parseInt(I.slice(1)) < 14 || X === "WinAnsiEncoding" ? ot = S(q, I).split("").map(function(ut) {
      return ut.charCodeAt(0).toString(16);
    }).join("") : X === "Identity-H" && (ot = n(q, O[I])), A.isHex = true, { text: ot, x: f, y: g, options: b, mutex: A };
  };
  e.events.push(["postProcessText", function(o) {
    var l = o.text || "", h = [], f = { text: l, x: o.x, y: o.y, options: o.options, mutex: o.mutex };
    if (Array.isArray(l)) {
      var g = 0;
      for (g = 0; g < l.length; g += 1) Array.isArray(l[g]) && l[g].length === 3 ? h.push([c(Object.assign({}, f, { text: l[g][0] })).text, l[g][1], l[g][2]]) : h.push(c(Object.assign({}, f, { text: l[g] })).text);
      o.text = h;
    } else o.text = c(Object.assign({}, f, { text: l })).text;
  }]);
}(Ht), /**
* @license
* jsPDF virtual FileSystem functionality
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/
function(i2) {
  var e = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), true;
  };
  i2.existsFileInVFS = function(n) {
    return e.call(this), this.internal.vFS[n] !== void 0;
  }, i2.addFileToVFS = function(n, a) {
    return e.call(this), this.internal.vFS[n] = a, this;
  }, i2.getFileFromVFS = function(n) {
    return e.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null;
  };
}(Ht.API), /**
* @license
* Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
* MIT License
*/
function(i2) {
  i2.__bidiEngine__ = i2.prototype.__bidiEngine__ = function(a) {
    var c, o, l, h, f, g, b, A = e, S = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], O = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, I = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, q = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], _ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), M = false, X = 0;
    this.__bidiEngine__ = {};
    var ot = function(F) {
      var P = F.charCodeAt(), z = P >> 8, D = I[z];
      return D !== void 0 ? A[256 * D + (255 & P)] : z === 252 || z === 253 ? "AL" : _.test(z) ? "L" : z === 8 ? "R" : "N";
    }, ut = function(F) {
      for (var P, z = 0; z < F.length; z++) {
        if ((P = ot(F.charAt(z))) === "L") return false;
        if (P === "R") return true;
      }
      return false;
    }, wt = function(F, P, z, D) {
      var at, nt, lt, Q, ft = P[D];
      switch (ft) {
        case "L":
        case "R":
          M = false;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          M && (ft = "AN");
          break;
        case "AL":
          M = true, ft = "R";
          break;
        case "WS":
          ft = "N";
          break;
        case "CS":
          D < 1 || D + 1 >= P.length || (at = z[D - 1]) !== "EN" && at !== "AN" || (nt = P[D + 1]) !== "EN" && nt !== "AN" ? ft = "N" : M && (nt = "AN"), ft = nt === at ? nt : "N";
          break;
        case "ES":
          ft = (at = D > 0 ? z[D - 1] : "B") === "EN" && D + 1 < P.length && P[D + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (D > 0 && z[D - 1] === "EN") {
            ft = "EN";
            break;
          }
          if (M) {
            ft = "N";
            break;
          }
          for (lt = D + 1, Q = P.length; lt < Q && P[lt] === "ET"; ) lt++;
          ft = lt < Q && P[lt] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (l && !h) {
            for (Q = P.length, lt = D + 1; lt < Q && P[lt] === "NSM"; ) lt++;
            if (lt < Q) {
              var ht = F[D], kt = ht >= 1425 && ht <= 2303 || ht === 64286;
              if (at = P[lt], kt && (at === "R" || at === "AL")) {
                ft = "R";
                break;
              }
            }
          }
          ft = D < 1 || (at = P[D - 1]) === "B" ? "N" : z[D - 1];
          break;
        case "B":
          M = false, c = true, ft = X;
          break;
        case "S":
          o = true, ft = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          M = false;
          break;
        case "BN":
          ft = "N";
      }
      return ft;
    }, tt = function(F, P, z) {
      var D = F.split("");
      return z && R(D, z, { hiLevel: X }), D.reverse(), P && P.reverse(), D.join("");
    }, R = function(F, P, z) {
      var D, at, nt, lt, Q, ft = -1, ht = F.length, kt = 0, L = [], j = X ? p : S, B = [];
      for (M = false, c = false, o = false, at = 0; at < ht; at++) B[at] = ot(F[at]);
      for (nt = 0; nt < ht; nt++) {
        if (Q = kt, L[nt] = wt(F, B, L, nt), D = 240 & (kt = j[Q][O[L[nt]]]), kt &= 15, P[nt] = lt = j[kt][5], D > 0) if (D === 16) {
          for (at = ft; at < nt; at++) P[at] = 1;
          ft = -1;
        } else ft = -1;
        if (j[kt][6]) ft === -1 && (ft = nt);
        else if (ft > -1) {
          for (at = ft; at < nt; at++) P[at] = lt;
          ft = -1;
        }
        B[nt] === "B" && (P[nt] = 0), z.hiLevel |= lt;
      }
      o && function(W, Y, $) {
        for (var et = 0; et < $; et++) if (W[et] === "S") {
          Y[et] = X;
          for (var rt = et - 1; rt >= 0 && W[rt] === "WS"; rt--) Y[rt] = X;
        }
      }(B, P, ht);
    }, gt = function(F, P, z, D, at) {
      if (!(at.hiLevel < F)) {
        if (F === 1 && X === 1 && !c) return P.reverse(), void (z && z.reverse());
        for (var nt, lt, Q, ft, ht = P.length, kt = 0; kt < ht; ) {
          if (D[kt] >= F) {
            for (Q = kt + 1; Q < ht && D[Q] >= F; ) Q++;
            for (ft = kt, lt = Q - 1; ft < lt; ft++, lt--) nt = P[ft], P[ft] = P[lt], P[lt] = nt, z && (nt = z[ft], z[ft] = z[lt], z[lt] = nt);
            kt = Q;
          }
          kt++;
        }
      }
    }, dt = function(F, P, z) {
      var D = F.split(""), at = { hiLevel: X };
      return z || (z = []), R(D, z, at), function(nt, lt, Q) {
        if (Q.hiLevel !== 0 && b) for (var ft, ht = 0; ht < nt.length; ht++) lt[ht] === 1 && (ft = q.indexOf(nt[ht])) >= 0 && (nt[ht] = q[ft + 1]);
      }(D, z, at), gt(2, D, P, z, at), gt(1, D, P, z, at), D.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(F, P, z) {
      if (function(at, nt) {
        if (nt) for (var lt = 0; lt < at.length; lt++) nt[lt] = lt;
        h === void 0 && (h = ut(at)), g === void 0 && (g = ut(at));
      }(F, P), l || !f || g) if (l && f && h ^ g) X = h ? 1 : 0, F = tt(F, P, z);
      else if (!l && f && g) X = h ? 1 : 0, F = dt(F, P, z), F = tt(F, P);
      else if (!l || h || f || g) {
        if (l && !f && h ^ g) F = tt(F, P), h ? (X = 0, F = dt(F, P, z)) : (X = 1, F = dt(F, P, z), F = tt(F, P));
        else if (l && h && !f && g) X = 1, F = dt(F, P, z), F = tt(F, P);
        else if (!l && !f && h ^ g) {
          var D = b;
          h ? (X = 1, F = dt(F, P, z), X = 0, b = false, F = dt(F, P, z), b = D) : (X = 0, F = dt(F, P, z), F = tt(F, P), X = 1, b = false, F = dt(F, P, z), b = D, F = tt(F, P));
        }
      } else X = 0, F = dt(F, P, z);
      else X = h ? 1 : 0, F = dt(F, P, z);
      return F;
    }, this.__bidiEngine__.setOptions = function(F) {
      F && (l = F.isInputVisual, f = F.isOutputVisual, h = F.isInputRtl, g = F.isOutputRtl, b = F.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__;
  };
  var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], n = new i2.__bidiEngine__({ isInputVisual: true });
  i2.API.events.push(["postProcessText", function(a) {
    var c = a.text, o = (a.x, a.y, a.options || {}), l = (a.mutex, o.lang, []);
    if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, n.setOptions(o), Object.prototype.toString.call(c) === "[object Array]") {
      var h = 0;
      for (l = [], h = 0; h < c.length; h += 1) Object.prototype.toString.call(c[h]) === "[object Array]" ? l.push([n.doBidiReorder(c[h][0]), c[h][1], c[h][2]]) : l.push([n.doBidiReorder(c[h])]);
      a.text = l;
    } else a.text = n.doBidiReorder(c);
    n.setOptions({ isInputVisual: true });
  }]);
}(Ht), Ht.API.TTFFont = function() {
  function i2(e) {
    var n;
    if (this.rawData = e, n = this.contents = new Cr(e), this.contents.pos = 4, n.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    n.pos = 0, this.parse(), this.subset = new b1(this), this.registerTTF();
  }
  return i2.open = function(e) {
    return new i2(e);
  }, i2.prototype.parse = function() {
    return this.directory = new i1(this.contents), this.head = new o1(this), this.name = new h1(this), this.cmap = new Dc(this), this.toUnicode = {}, this.hhea = new s1(this), this.maxp = new f1(this), this.hmtx = new d1(this), this.post = new u1(this), this.os2 = new c1(this), this.loca = new v1(this), this.glyf = new p1(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, i2.prototype.registerTTF = function() {
    var e, n, a, c, o;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var l, h, f, g;
      for (g = [], l = 0, h = (f = this.bbox).length; l < h; l++) e = f[l], g.push(Math.round(e * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (a = 255 & (c = this.post.italic_angle), 32768 & (n = c >> 16) && (n = -(1 + (65535 ^ n))), this.italicAngle = +(n + "." + a)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, i2.prototype.characterToGlyph = function(e) {
    var n;
    return ((n = this.cmap.unicode) != null ? n.codeMap[e] : void 0) || 0;
  }, i2.prototype.widthOfGlyph = function(e) {
    var n;
    return n = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * n;
  }, i2.prototype.widthOfString = function(e, n, a) {
    var c, o, l, h;
    for (l = 0, o = 0, h = (e = "" + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) c = e.charCodeAt(o), l += this.widthOfGlyph(this.characterToGlyph(c)) + a * (1e3 / n) || 0;
    return l * (n / 1e3);
  }, i2.prototype.lineHeight = function(e, n) {
    var a;
    return n == null && (n = false), a = n ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * e;
  }, i2;
}();
var Dn;
var Cr = function() {
  function i2(e) {
    this.data = e ?? [], this.pos = 0, this.length = this.data.length;
  }
  return i2.prototype.readByte = function() {
    return this.data[this.pos++];
  }, i2.prototype.writeByte = function(e) {
    return this.data[this.pos++] = e;
  }, i2.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, i2.prototype.writeUInt32 = function(e) {
    return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, i2.prototype.readInt32 = function() {
    var e;
    return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
  }, i2.prototype.writeInt32 = function(e) {
    return e < 0 && (e += 4294967296), this.writeUInt32(e);
  }, i2.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, i2.prototype.writeUInt16 = function(e) {
    return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, i2.prototype.readInt16 = function() {
    var e;
    return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
  }, i2.prototype.writeInt16 = function(e) {
    return e < 0 && (e += 65536), this.writeUInt16(e);
  }, i2.prototype.readString = function(e) {
    var n, a;
    for (a = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n) a[n] = String.fromCharCode(this.readByte());
    return a.join("");
  }, i2.prototype.writeString = function(e) {
    var n, a, c;
    for (c = [], n = 0, a = e.length; 0 <= a ? n < a : n > a; n = 0 <= a ? ++n : --n) c.push(this.writeByte(e.charCodeAt(n)));
    return c;
  }, i2.prototype.readShort = function() {
    return this.readInt16();
  }, i2.prototype.writeShort = function(e) {
    return this.writeInt16(e);
  }, i2.prototype.readLongLong = function() {
    var e, n, a, c, o, l, h, f;
    return e = this.readByte(), n = this.readByte(), a = this.readByte(), c = this.readByte(), o = this.readByte(), l = this.readByte(), h = this.readByte(), f = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ n) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ c) + 16777216 * (255 ^ o) + 65536 * (255 ^ l) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * e + 281474976710656 * n + 1099511627776 * a + 4294967296 * c + 16777216 * o + 65536 * l + 256 * h + f;
  }, i2.prototype.writeLongLong = function(e) {
    var n, a;
    return n = Math.floor(e / 4294967296), a = 4294967295 & e, this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n), this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), this.writeByte(255 & a);
  }, i2.prototype.readInt = function() {
    return this.readInt32();
  }, i2.prototype.writeInt = function(e) {
    return this.writeInt32(e);
  }, i2.prototype.read = function(e) {
    var n, a;
    for (n = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) n.push(this.readByte());
    return n;
  }, i2.prototype.write = function(e) {
    var n, a, c, o;
    for (o = [], a = 0, c = e.length; a < c; a++) n = e[a], o.push(this.writeByte(n));
    return o;
  }, i2;
}();
var i1 = function() {
  var i2;
  function e(n) {
    var a, c, o;
    for (this.scalarType = n.readInt(), this.tableCount = n.readShort(), this.searchRange = n.readShort(), this.entrySelector = n.readShort(), this.rangeShift = n.readShort(), this.tables = {}, c = 0, o = this.tableCount; 0 <= o ? c < o : c > o; c = 0 <= o ? ++c : --c) a = { tag: n.readString(4), checksum: n.readInt(), offset: n.readInt(), length: n.readInt() }, this.tables[a.tag] = a;
  }
  return e.prototype.encode = function(n) {
    var a, c, o, l, h, f, g, b, A, S, p, O, I;
    for (I in p = Object.keys(n).length, f = Math.log(2), A = 16 * Math.floor(Math.log(p) / f), l = Math.floor(A / f), b = 16 * p - A, (c = new Cr()).writeInt(this.scalarType), c.writeShort(p), c.writeShort(A), c.writeShort(l), c.writeShort(b), o = 16 * p, g = c.pos + o, h = null, O = [], n) for (S = n[I], c.writeString(I), c.writeInt(i2(S)), c.writeInt(g), c.writeInt(S.length), O = O.concat(S), I === "head" && (h = g), g += S.length; g % 4; ) O.push(0), g++;
    return c.write(O), a = 2981146554 - i2(c.data), c.pos = h + 8, c.writeUInt32(a), c.data;
  }, i2 = function(n) {
    var a, c, o, l;
    for (n = Rc.call(n); n.length % 4; ) n.push(0);
    for (o = new Cr(n), c = 0, a = 0, l = n.length; a < l; a = a += 4) c += o.readUInt32();
    return 4294967295 & c;
  }, e;
}();
var a1 = {}.hasOwnProperty;
var Zn = function(i2, e) {
  for (var n in e) a1.call(e, n) && (i2[n] = e[n]);
  function a() {
    this.constructor = i2;
  }
  return a.prototype = e.prototype, i2.prototype = new a(), i2.__super__ = e.prototype, i2;
};
Dn = function() {
  function i2(e) {
    var n;
    this.file = e, n = this.file.directory.tables[this.tag], this.exists = !!n, n && (this.offset = n.offset, this.length = n.length, this.parse(this.file.contents));
  }
  return i2.prototype.parse = function() {
  }, i2.prototype.encode = function() {
  }, i2.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, i2;
}();
var o1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "head", e.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.revision = n.readInt(), this.checkSumAdjustment = n.readInt(), this.magicNumber = n.readInt(), this.flags = n.readShort(), this.unitsPerEm = n.readShort(), this.created = n.readLongLong(), this.modified = n.readLongLong(), this.xMin = n.readShort(), this.yMin = n.readShort(), this.xMax = n.readShort(), this.yMax = n.readShort(), this.macStyle = n.readShort(), this.lowestRecPPEM = n.readShort(), this.fontDirectionHint = n.readShort(), this.indexToLocFormat = n.readShort(), this.glyphDataFormat = n.readShort();
  }, e.prototype.encode = function(n) {
    var a;
    return (a = new Cr()).writeInt(this.version), a.writeInt(this.revision), a.writeInt(this.checkSumAdjustment), a.writeInt(this.magicNumber), a.writeShort(this.flags), a.writeShort(this.unitsPerEm), a.writeLongLong(this.created), a.writeLongLong(this.modified), a.writeShort(this.xMin), a.writeShort(this.yMin), a.writeShort(this.xMax), a.writeShort(this.yMax), a.writeShort(this.macStyle), a.writeShort(this.lowestRecPPEM), a.writeShort(this.fontDirectionHint), a.writeShort(n), a.writeShort(this.glyphDataFormat), a.data;
  }, e;
}();
var Nc = function() {
  function i2(e, n) {
    var a, c, o, l, h, f, g, b, A, S, p, O, I, q, _, M, X;
    switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = n + e.readInt(), A = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = e.readByte();
        break;
      case 4:
        for (p = e.readUInt16(), S = p / 2, e.pos += 6, o = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(e.readUInt16());
          return ut;
        }(), e.pos += 2, I = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(e.readUInt16());
          return ut;
        }(), g = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(e.readUInt16());
          return ut;
        }(), b = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(e.readUInt16());
          return ut;
        }(), c = (this.length - e.pos + this.offset) / 2, h = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= c ? ot < c : ot > c; f = 0 <= c ? ++ot : --ot) ut.push(e.readUInt16());
          return ut;
        }(), f = _ = 0, X = o.length; _ < X; f = ++_) for (q = o[f], a = M = O = I[f]; O <= q ? M <= q : M >= q; a = O <= q ? ++M : --M) b[f] === 0 ? l = a + g[f] : (l = h[b[f] / 2 + (a - O) - (S - f)] || 0) !== 0 && (l += g[f]), this.codeMap[a] = 65535 & l;
    }
    e.pos = A;
  }
  return i2.encode = function(e, n) {
    var a, c, o, l, h, f, g, b, A, S, p, O, I, q, _, M, X, ot, ut, wt, tt, R, gt, dt, F, P, z, D, at, nt, lt, Q, ft, ht, kt, L, j, B, W, Y, $, et, rt, At, Nt, Ct;
    switch (D = new Cr(), l = Object.keys(e).sort(function(Mt, zt) {
      return Mt - zt;
    }), n) {
      case "macroman":
        for (I = 0, q = function() {
          var Mt = [];
          for (O = 0; O < 256; ++O) Mt.push(0);
          return Mt;
        }(), M = { 0: 0 }, o = {}, at = 0, ft = l.length; at < ft; at++) M[rt = e[c = l[at]]] == null && (M[rt] = ++I), o[c] = { old: e[c], new: M[e[c]] }, q[c] = M[e[c]];
        return D.writeUInt16(1), D.writeUInt16(0), D.writeUInt32(12), D.writeUInt16(0), D.writeUInt16(262), D.writeUInt16(0), D.write(q), { charMap: o, subtable: D.data, maxGlyphID: I + 1 };
      case "unicode":
        for (P = [], A = [], X = 0, M = {}, a = {}, _ = g = null, nt = 0, ht = l.length; nt < ht; nt++) M[ut = e[c = l[nt]]] == null && (M[ut] = ++X), a[c] = { old: ut, new: M[ut] }, h = M[ut] - c, _ != null && h === g || (_ && A.push(_), P.push(c), g = h), _ = c;
        for (_ && A.push(_), A.push(65535), P.push(65535), dt = 2 * (gt = P.length), R = 2 * Math.pow(Math.log(gt) / Math.LN2, 2), S = Math.log(R / 2) / Math.LN2, tt = 2 * gt - R, f = [], wt = [], p = [], O = lt = 0, kt = P.length; lt < kt; O = ++lt) {
          if (F = P[O], b = A[O], F === 65535) {
            f.push(0), wt.push(0);
            break;
          }
          if (F - (z = a[F].new) >= 32768) for (f.push(0), wt.push(2 * (p.length + gt - O)), c = Q = F; F <= b ? Q <= b : Q >= b; c = F <= b ? ++Q : --Q) p.push(a[c].new);
          else f.push(z - F), wt.push(0);
        }
        for (D.writeUInt16(3), D.writeUInt16(1), D.writeUInt32(12), D.writeUInt16(4), D.writeUInt16(16 + 8 * gt + 2 * p.length), D.writeUInt16(0), D.writeUInt16(dt), D.writeUInt16(R), D.writeUInt16(S), D.writeUInt16(tt), $ = 0, L = A.length; $ < L; $++) c = A[$], D.writeUInt16(c);
        for (D.writeUInt16(0), et = 0, j = P.length; et < j; et++) c = P[et], D.writeUInt16(c);
        for (At = 0, B = f.length; At < B; At++) h = f[At], D.writeUInt16(h);
        for (Nt = 0, W = wt.length; Nt < W; Nt++) ot = wt[Nt], D.writeUInt16(ot);
        for (Ct = 0, Y = p.length; Ct < Y; Ct++) I = p[Ct], D.writeUInt16(I);
        return { charMap: a, subtable: D.data, maxGlyphID: X + 1 };
    }
  }, i2;
}();
var Dc = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "cmap", e.prototype.parse = function(n) {
    var a, c, o;
    for (n.pos = this.offset, this.version = n.readUInt16(), o = n.readUInt16(), this.tables = [], this.unicode = null, c = 0; 0 <= o ? c < o : c > o; c = 0 <= o ? ++c : --c) a = new Nc(n, this.offset), this.tables.push(a), a.isUnicode && this.unicode == null && (this.unicode = a);
    return true;
  }, e.encode = function(n, a) {
    var c, o;
    return a == null && (a = "macroman"), c = Nc.encode(n, a), (o = new Cr()).writeUInt16(0), o.writeUInt16(1), c.table = o.data.concat(c.subtable), c;
  }, e;
}();
var s1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "hhea", e.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.ascender = n.readShort(), this.decender = n.readShort(), this.lineGap = n.readShort(), this.advanceWidthMax = n.readShort(), this.minLeftSideBearing = n.readShort(), this.minRightSideBearing = n.readShort(), this.xMaxExtent = n.readShort(), this.caretSlopeRise = n.readShort(), this.caretSlopeRun = n.readShort(), this.caretOffset = n.readShort(), n.pos += 8, this.metricDataFormat = n.readShort(), this.numberOfMetrics = n.readUInt16();
  }, e;
}();
var c1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "OS/2", e.prototype.parse = function(n) {
    if (n.pos = this.offset, this.version = n.readUInt16(), this.averageCharWidth = n.readShort(), this.weightClass = n.readUInt16(), this.widthClass = n.readUInt16(), this.type = n.readShort(), this.ySubscriptXSize = n.readShort(), this.ySubscriptYSize = n.readShort(), this.ySubscriptXOffset = n.readShort(), this.ySubscriptYOffset = n.readShort(), this.ySuperscriptXSize = n.readShort(), this.ySuperscriptYSize = n.readShort(), this.ySuperscriptXOffset = n.readShort(), this.ySuperscriptYOffset = n.readShort(), this.yStrikeoutSize = n.readShort(), this.yStrikeoutPosition = n.readShort(), this.familyClass = n.readShort(), this.panose = function() {
      var a, c;
      for (c = [], a = 0; a < 10; ++a) c.push(n.readByte());
      return c;
    }(), this.charRange = function() {
      var a, c;
      for (c = [], a = 0; a < 4; ++a) c.push(n.readInt());
      return c;
    }(), this.vendorID = n.readString(4), this.selection = n.readShort(), this.firstCharIndex = n.readShort(), this.lastCharIndex = n.readShort(), this.version > 0 && (this.ascent = n.readShort(), this.descent = n.readShort(), this.lineGap = n.readShort(), this.winAscent = n.readShort(), this.winDescent = n.readShort(), this.codePageRange = function() {
      var a, c;
      for (c = [], a = 0; a < 2; a = ++a) c.push(n.readInt());
      return c;
    }(), this.version > 1)) return this.xHeight = n.readShort(), this.capHeight = n.readShort(), this.defaultChar = n.readShort(), this.breakChar = n.readShort(), this.maxContext = n.readShort();
  }, e;
}();
var u1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "post", e.prototype.parse = function(n) {
    var a, c, o;
    switch (n.pos = this.offset, this.format = n.readInt(), this.italicAngle = n.readInt(), this.underlinePosition = n.readShort(), this.underlineThickness = n.readShort(), this.isFixedPitch = n.readInt(), this.minMemType42 = n.readInt(), this.maxMemType42 = n.readInt(), this.minMemType1 = n.readInt(), this.maxMemType1 = n.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var l;
        for (c = n.readUInt16(), this.glyphNameIndex = [], l = 0; 0 <= c ? l < c : l > c; l = 0 <= c ? ++l : --l) this.glyphNameIndex.push(n.readUInt16());
        for (this.names = [], o = []; n.pos < this.offset + this.length; ) a = n.readByte(), o.push(this.names.push(n.readString(a)));
        return o;
      case 151552:
        return c = n.readUInt16(), this.offsets = n.read(c);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var h, f, g;
          for (g = [], l = h = 0, f = this.file.maxp.numGlyphs; 0 <= f ? h < f : h > f; l = 0 <= f ? ++h : --h) g.push(n.readUInt32());
          return g;
        }).call(this);
    }
  }, e;
}();
var l1 = function(i2, e) {
  this.raw = i2, this.length = i2.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
};
var h1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "name", e.prototype.parse = function(n) {
    var a, c, o, l, h, f, g, b, A, S, p;
    for (n.pos = this.offset, n.readShort(), a = n.readShort(), f = n.readShort(), c = [], l = 0; 0 <= a ? l < a : l > a; l = 0 <= a ? ++l : --l) c.push({ platformID: n.readShort(), encodingID: n.readShort(), languageID: n.readShort(), nameID: n.readShort(), length: n.readShort(), offset: this.offset + f + n.readShort() });
    for (g = {}, l = A = 0, S = c.length; A < S; l = ++A) o = c[l], n.pos = o.offset, b = n.readString(o.length), h = new l1(b, o), g[p = o.nameID] == null && (g[p] = []), g[o.nameID].push(h);
    this.strings = g, this.copyright = g[0], this.fontFamily = g[1], this.fontSubfamily = g[2], this.uniqueSubfamily = g[3], this.fontName = g[4], this.version = g[5];
    try {
      this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = g[7], this.manufacturer = g[8], this.designer = g[9], this.description = g[10], this.vendorUrl = g[11], this.designerUrl = g[12], this.license = g[13], this.licenseUrl = g[14], this.preferredFamily = g[15], this.preferredSubfamily = g[17], this.compatibleFull = g[18], this.sampleText = g[19];
  }, e;
}();
var f1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "maxp", e.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.numGlyphs = n.readUInt16(), this.maxPoints = n.readUInt16(), this.maxContours = n.readUInt16(), this.maxCompositePoints = n.readUInt16(), this.maxComponentContours = n.readUInt16(), this.maxZones = n.readUInt16(), this.maxTwilightPoints = n.readUInt16(), this.maxStorage = n.readUInt16(), this.maxFunctionDefs = n.readUInt16(), this.maxInstructionDefs = n.readUInt16(), this.maxStackElements = n.readUInt16(), this.maxSizeOfInstructions = n.readUInt16(), this.maxComponentElements = n.readUInt16(), this.maxComponentDepth = n.readUInt16();
  }, e;
}();
var d1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "hmtx", e.prototype.parse = function(n) {
    var a, c, o, l, h, f, g;
    for (n.pos = this.offset, this.metrics = [], a = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? a < f : a > f; a = 0 <= f ? ++a : --a) this.metrics.push({ advance: n.readUInt16(), lsb: n.readInt16() });
    for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var b, A;
      for (A = [], a = b = 0; 0 <= o ? b < o : b > o; a = 0 <= o ? ++b : --b) A.push(n.readInt16());
      return A;
    }(), this.widths = (function() {
      var b, A, S, p;
      for (p = [], b = 0, A = (S = this.metrics).length; b < A; b++) l = S[b], p.push(l.advance);
      return p;
    }).call(this), c = this.widths[this.widths.length - 1], g = [], a = h = 0; 0 <= o ? h < o : h > o; a = 0 <= o ? ++h : --h) g.push(this.widths.push(c));
    return g;
  }, e.prototype.forGlyph = function(n) {
    return n in this.metrics ? this.metrics[n] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[n - this.metrics.length] };
  }, e;
}();
var Rc = [].slice;
var p1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "glyf", e.prototype.parse = function() {
    return this.cache = {};
  }, e.prototype.glyphFor = function(n) {
    var a, c, o, l, h, f, g, b, A, S;
    return n in this.cache ? this.cache[n] : (l = this.file.loca, a = this.file.contents, c = l.indexOf(n), (o = l.lengthOf(n)) === 0 ? this.cache[n] = null : (a.pos = this.offset + c, h = (f = new Cr(a.read(o))).readShort(), b = f.readShort(), S = f.readShort(), g = f.readShort(), A = f.readShort(), this.cache[n] = h === -1 ? new m1(f, b, S, g, A) : new g1(f, h, b, S, g, A), this.cache[n]));
  }, e.prototype.encode = function(n, a, c) {
    var o, l, h, f, g;
    for (h = [], l = [], f = 0, g = a.length; f < g; f++) o = n[a[f]], l.push(h.length), o && (h = h.concat(o.encode(c)));
    return l.push(h.length), { table: h, offsets: l };
  }, e;
}();
var g1 = function() {
  function i2(e, n, a, c, o, l) {
    this.raw = e, this.numberOfContours = n, this.xMin = a, this.yMin = c, this.xMax = o, this.yMax = l, this.compound = false;
  }
  return i2.prototype.encode = function() {
    return this.raw.data;
  }, i2;
}();
var m1 = function() {
  function i2(e, n, a, c, o) {
    var l, h;
    for (this.raw = e, this.xMin = n, this.yMin = a, this.xMax = c, this.yMax = o, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], l = this.raw; h = l.readShort(), this.glyphOffsets.push(l.pos), this.glyphIDs.push(l.readUInt16()), 32 & h; ) l.pos += 1 & h ? 4 : 2, 128 & h ? l.pos += 8 : 64 & h ? l.pos += 4 : 8 & h && (l.pos += 2);
  }
  return i2.prototype.encode = function() {
    var e, n, a;
    for (n = new Cr(Rc.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e) n.pos = this.glyphOffsets[e];
    return n.data;
  }, i2;
}();
var v1 = function(i2) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "loca", e.prototype.parse = function(n) {
    var a, c;
    return n.pos = this.offset, a = this.file.head.indexToLocFormat, this.offsets = a === 0 ? (function() {
      var o, l;
      for (l = [], c = 0, o = this.length; c < o; c += 2) l.push(2 * n.readUInt16());
      return l;
    }).call(this) : (function() {
      var o, l;
      for (l = [], c = 0, o = this.length; c < o; c += 4) l.push(n.readUInt32());
      return l;
    }).call(this);
  }, e.prototype.indexOf = function(n) {
    return this.offsets[n];
  }, e.prototype.lengthOf = function(n) {
    return this.offsets[n + 1] - this.offsets[n];
  }, e.prototype.encode = function(n, a) {
    for (var c = new Uint32Array(this.offsets.length), o = 0, l = 0, h = 0; h < c.length; ++h) if (c[h] = o, l < a.length && a[l] == h) {
      ++l, c[h] = o;
      var f = this.offsets[h], g = this.offsets[h + 1] - f;
      g > 0 && (o += g);
    }
    for (var b = new Array(4 * c.length), A = 0; A < c.length; ++A) b[4 * A + 3] = 255 & c[A], b[4 * A + 2] = (65280 & c[A]) >> 8, b[4 * A + 1] = (16711680 & c[A]) >> 16, b[4 * A] = (4278190080 & c[A]) >> 24;
    return b;
  }, e;
}();
var b1 = function() {
  function i2(e) {
    this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return i2.prototype.generateCmap = function() {
    var e, n, a, c, o;
    for (n in c = this.font.cmap.tables[0].codeMap, e = {}, o = this.subset) a = o[n], e[n] = c[a];
    return e;
  }, i2.prototype.glyphsFor = function(e) {
    var n, a, c, o, l, h, f;
    for (c = {}, l = 0, h = e.length; l < h; l++) c[o = e[l]] = this.font.glyf.glyphFor(o);
    for (o in n = [], c) (a = c[o]) != null && a.compound && n.push.apply(n, a.glyphIDs);
    if (n.length > 0) for (o in f = this.glyphsFor(n)) a = f[o], c[o] = a;
    return c;
  }, i2.prototype.encode = function(e, n) {
    var a, c, o, l, h, f, g, b, A, S, p, O, I, q, _;
    for (c in a = Dc.encode(this.generateCmap(), "unicode"), l = this.glyphsFor(e), p = { 0: 0 }, _ = a.charMap) p[(f = _[c]).old] = f.new;
    for (O in S = a.maxGlyphID, l) O in p || (p[O] = S++);
    return b = function(M) {
      var X, ot;
      for (X in ot = {}, M) ot[M[X]] = X;
      return ot;
    }(p), A = Object.keys(b).sort(function(M, X) {
      return M - X;
    }), I = function() {
      var M, X, ot;
      for (ot = [], M = 0, X = A.length; M < X; M++) h = A[M], ot.push(b[h]);
      return ot;
    }(), o = this.font.glyf.encode(l, I, p), g = this.font.loca.encode(o.offsets, I), q = { cmap: this.font.cmap.raw(), glyf: o.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(n) }, this.font.os2.exists && (q["OS/2"] = this.font.os2.raw()), this.font.directory.encode(q);
  }, i2;
}();
Ht.API.PDFObject = function() {
  var i2;
  function e() {
  }
  return i2 = function(n, a) {
    return (Array(a + 1).join("0") + n).slice(-a);
  }, e.convert = function(n) {
    var a, c, o, l;
    if (Array.isArray(n)) return "[" + function() {
      var h, f, g;
      for (g = [], h = 0, f = n.length; h < f; h++) a = n[h], g.push(e.convert(a));
      return g;
    }().join(" ") + "]";
    if (typeof n == "string") return "/" + n;
    if (n != null && n.isString) return "(" + n + ")";
    if (n instanceof Date) return "(D:" + i2(n.getUTCFullYear(), 4) + i2(n.getUTCMonth(), 2) + i2(n.getUTCDate(), 2) + i2(n.getUTCHours(), 2) + i2(n.getUTCMinutes(), 2) + i2(n.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(n) === "[object Object]") {
      for (c in o = ["<<"], n) l = n[c], o.push("/" + c + " " + e.convert(l));
      return o.push(">>"), o.join(`
`);
    }
    return "" + n;
  }, e;
}();

export {
  fe,
  Ht
};
/*! Bundled license information:

vue-data-ui/dist/jspdf.es.min-C660YX78.js:
  (** @license
   *
   * jsPDF - PDF Document creation from JavaScript
   * Version 2.5.1 Built on 2022-01-28T15:37:57.791Z
   *                      CommitID 00000000
   *
   * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
   *               2015-2021 yWorks GmbH, http://www.yworks.com
   *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
   *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
   *               2010 Aaron Spike, https://github.com/acspike
   *               2012 Willow Systems Corporation, https://github.com/willowsystems
   *               2012 Pablo Hess, https://github.com/pablohess
   *               2012 Florian Jenett, https://github.com/fjenett
   *               2013 Warren Weckesser, https://github.com/warrenweckesser
   *               2013 Youssef Beddad, https://github.com/lifof
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2013 Stefan Slonevskiy, https://github.com/stefslon
   *               2013 Jeremy Morel, https://github.com/jmorel
   *               2013 Christoph Hartmann, https://github.com/chris-rock
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Makes, https://github.com/dollaruw
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Steven Spungin, https://github.com/Flamenco
   *               2014 Kenneth Glassey, https://github.com/Gavvers
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   * Contributor(s):
   *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
   *    kim3er, mfo, alnorth, Flamenco
   *)
  (**
   * A class to parse color values
   * @author Stoyan Stefanov <sstoo@gmail.com>
   * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
   * @license Use it if you like it
   *)
  (**
   * @license
   * Joseph Myers does not specify a particular license for his work.
   *
   * Author: Joseph Myers
   * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
   *
   * Modified by: Owen Leong
   *)
  (**
   * @license
   * FPDF is released under a permissive license: there is no usage restriction.
   * You may embed it freely in your application (commercial or not), with or
   * without modifications.
   *
   * Reference: http://www.fpdf.org/en/script/script37.php
   *)
  (**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   * Author: Owen Leong (@owenl131)
   * Date: 15 Oct 2020
   * References:
   * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
   * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
   * http://www.fpdf.org/en/script/script37.php
   *)
  (**
   * @license
   *
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   *)
  (**
   * @license
   * (c) Dean McNamee <dean@gmail.com>, 2013.
   *
   * https://github.com/deanm/omggif
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to
   * deal in the Software without restriction, including without limitation the
   * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
   * sell copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
   * IN THE SOFTWARE.
   *
   * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
   * including animation and compression.  It does not rely on any specific
   * underlying system, so should run in the browser, Node, or Plask.
   *)
  (**
   * @license
    Copyright (c) 2008, Adobe Systems Incorporated
    All rights reserved.
  
    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are
    met:
  
    * Redistributions of source code must retain the above copyright notice, 
      this list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the 
      documentation and/or other materials provided with the distribution.
    
    * Neither the name of Adobe Systems Incorporated nor the names of its 
      contributors may be used to endorse or promote products derived from 
      this software without specific prior written permission.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  *)
  (**
   * @license
   * Copyright (c) 2017 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   *)
*/
//# sourceMappingURL=chunk-GR634IEI.js.map
