import {
  fe
} from "./chunk-C4CXLYL5.js";

// node_modules/vue-data-ui/dist/index.es-YufTdp0y.js
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vo(a3) {
  return a3 && a3.__esModule && Object.prototype.hasOwnProperty.call(a3, "default") ? a3.default : a3;
}
var Gt = function(a3) {
  return a3 && a3.Math == Math && a3;
};
var U = (
  // eslint-disable-next-line es/no-global-this -- safe
  Gt(typeof globalThis == "object" && globalThis) || Gt(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Gt(typeof self == "object" && self) || Gt(typeof Tt == "object" && Tt) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Tt || Function("return this")()
);
var ot = {};
var L = function(a3) {
  try {
    return !!a3();
  } catch {
    return true;
  }
};
var Nl = L;
var ce = !Nl(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var Ml = L;
var br = !Ml(function() {
  var a3 = (function() {
  }).bind();
  return typeof a3 != "function" || a3.hasOwnProperty("prototype");
});
var _l = br;
var Ht = Function.prototype.call;
var Y = _l ? Ht.bind(Ht) : function() {
  return Ht.apply(Ht, arguments);
};
var Lo = {};
var ko = {}.propertyIsEnumerable;
var Bo = Object.getOwnPropertyDescriptor;
var Dl = Bo && !ko.call({ 1: 2 }, 1);
Lo.f = Dl ? function(e) {
  var t = Bo(this, e);
  return !!t && t.enumerable;
} : ko;
var xr = function(a3, e) {
  return {
    enumerable: !(a3 & 1),
    configurable: !(a3 & 2),
    writable: !(a3 & 4),
    value: e
  };
};
var Fo = br;
var jo = Function.prototype;
var Ya = jo.call;
var Vl = Fo && jo.bind.bind(Ya, Ya);
var k = Fo ? Vl : function(a3) {
  return function() {
    return Ya.apply(a3, arguments);
  };
};
var Uo = k;
var Ll = Uo({}.toString);
var kl = Uo("".slice);
var Fe = function(a3) {
  return kl(Ll(a3), 8, -1);
};
var Bl = k;
var Fl = L;
var jl = Fe;
var Zr = Object;
var Ul = Bl("".split);
var zo = Fl(function() {
  return !Zr("z").propertyIsEnumerable(0);
}) ? function(a3) {
  return jl(a3) == "String" ? Ul(a3, "") : Zr(a3);
} : Zr;
var je = function(a3) {
  return a3 == null;
};
var zl = je;
var Gl = TypeError;
var ge = function(a3) {
  if (zl(a3)) throw Gl("Can't call method on " + a3);
  return a3;
};
var Hl = zo;
var Yl = ge;
var Ct = function(a3) {
  return Hl(Yl(a3));
};
var Xa = typeof document == "object" && document.all;
var Xl = typeof Xa > "u" && Xa !== void 0;
var Go = {
  all: Xa,
  IS_HTMLDDA: Xl
};
var Ho = Go;
var Wl = Ho.all;
var D = Ho.IS_HTMLDDA ? function(a3) {
  return typeof a3 == "function" || a3 === Wl;
} : function(a3) {
  return typeof a3 == "function";
};
var mn = D;
var Yo = Go;
var ql = Yo.all;
var Te = Yo.IS_HTMLDDA ? function(a3) {
  return typeof a3 == "object" ? a3 !== null : mn(a3) || a3 === ql;
} : function(a3) {
  return typeof a3 == "object" ? a3 !== null : mn(a3);
};
var Jr = U;
var Ql = D;
var Kl = function(a3) {
  return Ql(a3) ? a3 : void 0;
};
var Ue = function(a3, e) {
  return arguments.length < 2 ? Kl(Jr[a3]) : Jr[a3] && Jr[a3][e];
};
var Zl = k;
var Tr = Zl({}.isPrototypeOf);
var Sr = typeof navigator < "u" && String(navigator.userAgent) || "";
var Xo = U;
var ea = Sr;
var bn = Xo.process;
var xn = Xo.Deno;
var Tn = bn && bn.versions || xn && xn.version;
var Sn = Tn && Tn.v8;
var ue;
var cr;
Sn && (ue = Sn.split("."), cr = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1]));
!cr && ea && (ue = ea.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = ea.match(/Chrome\/(\d+)/), ue && (cr = +ue[1])));
var Oi = cr;
var On = Oi;
var Jl = L;
var eh = U;
var th = eh.String;
var Wo = !!Object.getOwnPropertySymbols && !Jl(function() {
  var a3 = Symbol();
  return !th(a3) || !(Object(a3) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && On && On < 41;
});
var rh = Wo;
var qo = rh && !Symbol.sham && typeof Symbol.iterator == "symbol";
var ah = Ue;
var ih = D;
var nh = Tr;
var sh = qo;
var oh = Object;
var Qo = sh ? function(a3) {
  return typeof a3 == "symbol";
} : function(a3) {
  var e = ah("Symbol");
  return ih(e) && nh(e.prototype, oh(a3));
};
var uh = String;
var Or = function(a3) {
  try {
    return uh(a3);
  } catch {
    return "Object";
  }
};
var lh = D;
var hh = Or;
var vh = TypeError;
var Se = function(a3) {
  if (lh(a3)) return a3;
  throw vh(hh(a3) + " is not a function");
};
var fh = Se;
var ch = je;
var ut = function(a3, e) {
  var t = a3[e];
  return ch(t) ? void 0 : fh(t);
};
var ta = Y;
var ra = D;
var aa = Te;
var gh = TypeError;
var dh = function(a3, e) {
  var t, r;
  if (e === "string" && ra(t = a3.toString) && !aa(r = ta(t, a3)) || ra(t = a3.valueOf) && !aa(r = ta(t, a3)) || e !== "string" && ra(t = a3.toString) && !aa(r = ta(t, a3))) return r;
  throw gh("Can't convert object to primitive value");
};
var Ko = { exports: {} };
var En = U;
var ph = Object.defineProperty;
var Ei = function(a3, e) {
  try {
    ph(En, a3, { value: e, configurable: true, writable: true });
  } catch {
    En[a3] = e;
  }
  return e;
};
var yh = U;
var mh = Ei;
var $n = "__core-js_shared__";
var bh = yh[$n] || mh($n, {});
var $i = bh;
var wn = $i;
(Ko.exports = function(a3, e) {
  return wn[a3] || (wn[a3] = e !== void 0 ? e : {});
})("versions", []).push({
  version: "3.32.0",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var wi = Ko.exports;
var xh = ge;
var Th = Object;
var Er = function(a3) {
  return Th(xh(a3));
};
var Sh = k;
var Oh = Er;
var Eh = Sh({}.hasOwnProperty);
var le = Object.hasOwn || function(e, t) {
  return Eh(Oh(e), t);
};
var $h = k;
var wh = 0;
var Ch = Math.random();
var Ah = $h(1 .toString);
var Zo = function(a3) {
  return "Symbol(" + (a3 === void 0 ? "" : a3) + ")_" + Ah(++wh + Ch, 36);
};
var Ph = U;
var Rh = wi;
var Cn = le;
var Ih = Zo;
var Nh = Wo;
var Mh = qo;
var Je = Ph.Symbol;
var ia = Rh("wks");
var _h = Mh ? Je.for || Je : Je && Je.withoutSetter || Ih;
var G = function(a3) {
  return Cn(ia, a3) || (ia[a3] = Nh && Cn(Je, a3) ? Je[a3] : _h("Symbol." + a3)), ia[a3];
};
var Dh = Y;
var An = Te;
var Pn = Qo;
var Vh = ut;
var Lh = dh;
var kh = G;
var Bh = TypeError;
var Fh = kh("toPrimitive");
var jh = function(a3, e) {
  if (!An(a3) || Pn(a3)) return a3;
  var t = Vh(a3, Fh), r;
  if (t) {
    if (e === void 0 && (e = "default"), r = Dh(t, a3, e), !An(r) || Pn(r)) return r;
    throw Bh("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), Lh(a3, e);
};
var Uh = jh;
var zh = Qo;
var Ci = function(a3) {
  var e = Uh(a3, "string");
  return zh(e) ? e : e + "";
};
var Gh = U;
var Rn = Te;
var Wa = Gh.document;
var Hh = Rn(Wa) && Rn(Wa.createElement);
var $r = function(a3) {
  return Hh ? Wa.createElement(a3) : {};
};
var Yh = ce;
var Xh = L;
var Wh = $r;
var Jo = !Yh && !Xh(function() {
  return Object.defineProperty(Wh("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
});
var qh = ce;
var Qh = Y;
var Kh = Lo;
var Zh = xr;
var Jh = Ct;
var ev = Ci;
var tv = le;
var rv = Jo;
var In = Object.getOwnPropertyDescriptor;
ot.f = qh ? In : function(e, t) {
  if (e = Jh(e), t = ev(t), rv) try {
    return In(e, t);
  } catch {
  }
  if (tv(e, t)) return Zh(!Qh(Kh.f, e, t), e[t]);
};
var de = {};
var av = ce;
var iv = L;
var eu = av && iv(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype != 42;
});
var nv = Te;
var sv = String;
var ov = TypeError;
var K = function(a3) {
  if (nv(a3)) return a3;
  throw ov(sv(a3) + " is not an object");
};
var uv = ce;
var lv = Jo;
var hv = eu;
var Yt = K;
var Nn = Ci;
var vv = TypeError;
var na = Object.defineProperty;
var fv = Object.getOwnPropertyDescriptor;
var sa = "enumerable";
var oa = "configurable";
var ua = "writable";
de.f = uv ? hv ? function(e, t, r) {
  if (Yt(e), t = Nn(t), Yt(r), typeof e == "function" && t === "prototype" && "value" in r && ua in r && !r[ua]) {
    var i = fv(e, t);
    i && i[ua] && (e[t] = r.value, r = {
      configurable: oa in r ? r[oa] : i[oa],
      enumerable: sa in r ? r[sa] : i[sa],
      writable: false
    });
  }
  return na(e, t, r);
} : na : function(e, t, r) {
  if (Yt(e), t = Nn(t), Yt(r), lv) try {
    return na(e, t, r);
  } catch {
  }
  if ("get" in r || "set" in r) throw vv("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
};
var cv = ce;
var gv = de;
var dv = xr;
var At = cv ? function(a3, e, t) {
  return gv.f(a3, e, dv(1, t));
} : function(a3, e, t) {
  return a3[e] = t, a3;
};
var tu = { exports: {} };
var qa = ce;
var pv = le;
var ru = Function.prototype;
var yv = qa && Object.getOwnPropertyDescriptor;
var Ai = pv(ru, "name");
var mv = Ai && (function() {
}).name === "something";
var bv = Ai && (!qa || qa && yv(ru, "name").configurable);
var wr = {
  EXISTS: Ai,
  PROPER: mv,
  CONFIGURABLE: bv
};
var xv = k;
var Tv = D;
var Qa = $i;
var Sv = xv(Function.toString);
Tv(Qa.inspectSource) || (Qa.inspectSource = function(a3) {
  return Sv(a3);
});
var Pi = Qa.inspectSource;
var Ov = U;
var Ev = D;
var Mn = Ov.WeakMap;
var $v = Ev(Mn) && /native code/.test(String(Mn));
var wv = wi;
var Cv = Zo;
var _n = wv("keys");
var Ri = function(a3) {
  return _n[a3] || (_n[a3] = Cv(a3));
};
var Ii = {};
var Av = $v;
var au = U;
var Pv = Te;
var Rv = At;
var la = le;
var ha = $i;
var Iv = Ri;
var Nv = Ii;
var Dn = "Object already initialized";
var Ka = au.TypeError;
var Mv = au.WeakMap;
var gr;
var Et;
var dr;
var _v = function(a3) {
  return dr(a3) ? Et(a3) : gr(a3, {});
};
var Dv = function(a3) {
  return function(e) {
    var t;
    if (!Pv(e) || (t = Et(e)).type !== a3)
      throw Ka("Incompatible receiver, " + a3 + " required");
    return t;
  };
};
if (Av || ha.state) {
  fe2 = ha.state || (ha.state = new Mv());
  fe2.get = fe2.get, fe2.has = fe2.has, fe2.set = fe2.set, gr = function(a3, e) {
    if (fe2.has(a3)) throw Ka(Dn);
    return e.facade = a3, fe2.set(a3, e), e;
  }, Et = function(a3) {
    return fe2.get(a3) || {};
  }, dr = function(a3) {
    return fe2.has(a3);
  };
} else {
  Xe = Iv("state");
  Nv[Xe] = true, gr = function(a3, e) {
    if (la(a3, Xe)) throw Ka(Dn);
    return e.facade = a3, Rv(a3, Xe, e), e;
  }, Et = function(a3) {
    return la(a3, Xe) ? a3[Xe] : {};
  }, dr = function(a3) {
    return la(a3, Xe);
  };
}
var fe2;
var Xe;
var Cr = {
  set: gr,
  get: Et,
  has: dr,
  enforce: _v,
  getterFor: Dv
};
var Ni = k;
var Vv = L;
var Lv = D;
var Xt = le;
var Za = ce;
var kv = wr.CONFIGURABLE;
var Bv = Pi;
var iu = Cr;
var Fv = iu.enforce;
var jv = iu.get;
var Vn = String;
var or = Object.defineProperty;
var Uv = Ni("".slice);
var zv = Ni("".replace);
var Gv = Ni([].join);
var Hv = Za && !Vv(function() {
  return or(function() {
  }, "length", { value: 8 }).length !== 8;
});
var Yv = String(String).split("String");
var Xv = tu.exports = function(a3, e, t) {
  Uv(Vn(e), 0, 7) === "Symbol(" && (e = "[" + zv(Vn(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (e = "get " + e), t && t.setter && (e = "set " + e), (!Xt(a3, "name") || kv && a3.name !== e) && (Za ? or(a3, "name", { value: e, configurable: true }) : a3.name = e), Hv && t && Xt(t, "arity") && a3.length !== t.arity && or(a3, "length", { value: t.arity });
  try {
    t && Xt(t, "constructor") && t.constructor ? Za && or(a3, "prototype", { writable: false }) : a3.prototype && (a3.prototype = void 0);
  } catch {
  }
  var r = Fv(a3);
  return Xt(r, "source") || (r.source = Gv(Yv, typeof e == "string" ? e : "")), a3;
};
Function.prototype.toString = Xv(function() {
  return Lv(this) && jv(this).source || Bv(this);
}, "toString");
var nu = tu.exports;
var Wv = D;
var qv = de;
var Qv = nu;
var Kv = Ei;
var ze = function(a3, e, t, r) {
  r || (r = {});
  var i = r.enumerable, n = r.name !== void 0 ? r.name : e;
  if (Wv(t) && Qv(t, n, r), r.global)
    i ? a3[e] = t : Kv(e, t);
  else {
    try {
      r.unsafe ? a3[e] && (i = true) : delete a3[e];
    } catch {
    }
    i ? a3[e] = t : qv.f(a3, e, {
      value: t,
      enumerable: false,
      configurable: !r.nonConfigurable,
      writable: !r.nonWritable
    });
  }
  return a3;
};
var su = {};
var Zv = Math.ceil;
var Jv = Math.floor;
var ef = Math.trunc || function(e) {
  var t = +e;
  return (t > 0 ? Jv : Zv)(t);
};
var tf = ef;
var Ar = function(a3) {
  var e = +a3;
  return e !== e || e === 0 ? 0 : tf(e);
};
var rf = Ar;
var af = Math.max;
var nf = Math.min;
var ou = function(a3, e) {
  var t = rf(a3);
  return t < 0 ? af(t + e, 0) : nf(t, e);
};
var sf = Ar;
var of = Math.min;
var lt = function(a3) {
  return a3 > 0 ? of(sf(a3), 9007199254740991) : 0;
};
var uf = lt;
var Pr = function(a3) {
  return uf(a3.length);
};
var lf = Ct;
var hf = ou;
var vf = Pr;
var Ln = function(a3) {
  return function(e, t, r) {
    var i = lf(e), n = vf(i), o = hf(r, n), s;
    if (a3 && t != t) {
      for (; n > o; )
        if (s = i[o++], s != s) return true;
    } else for (; n > o; o++)
      if ((a3 || o in i) && i[o] === t) return a3 || o || 0;
    return !a3 && -1;
  };
};
var uu = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Ln(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Ln(false)
};
var ff = k;
var va = le;
var cf = Ct;
var gf = uu.indexOf;
var df = Ii;
var kn = ff([].push);
var lu = function(a3, e) {
  var t = cf(a3), r = 0, i = [], n;
  for (n in t) !va(df, n) && va(t, n) && kn(i, n);
  for (; e.length > r; ) va(t, n = e[r++]) && (~gf(i, n) || kn(i, n));
  return i;
};
var Mi = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var pf = lu;
var yf = Mi;
var mf = yf.concat("length", "prototype");
su.f = Object.getOwnPropertyNames || function(e) {
  return pf(e, mf);
};
var hu = {};
hu.f = Object.getOwnPropertySymbols;
var bf = Ue;
var xf = k;
var Tf = su;
var Sf = hu;
var Of = K;
var Ef = xf([].concat);
var $f = bf("Reflect", "ownKeys") || function(e) {
  var t = Tf.f(Of(e)), r = Sf.f;
  return r ? Ef(t, r(e)) : t;
};
var Bn = le;
var wf = $f;
var Cf = ot;
var Af = de;
var Pf = function(a3, e, t) {
  for (var r = wf(e), i = Af.f, n = Cf.f, o = 0; o < r.length; o++) {
    var s = r[o];
    !Bn(a3, s) && !(t && Bn(t, s)) && i(a3, s, n(e, s));
  }
};
var Rf = L;
var If = D;
var Nf = /#|\.prototype\./;
var Pt = function(a3, e) {
  var t = _f[Mf(a3)];
  return t == Vf ? true : t == Df ? false : If(e) ? Rf(e) : !!e;
};
var Mf = Pt.normalize = function(a3) {
  return String(a3).replace(Nf, ".").toLowerCase();
};
var _f = Pt.data = {};
var Df = Pt.NATIVE = "N";
var Vf = Pt.POLYFILL = "P";
var vu = Pt;
var fa = U;
var Lf = ot.f;
var kf = At;
var Bf = ze;
var Ff = Ei;
var jf = Pf;
var Uf = vu;
var ee = function(a3, e) {
  var t = a3.target, r = a3.global, i = a3.stat, n, o, s, u, l, h;
  if (r ? o = fa : i ? o = fa[t] || Ff(t, {}) : o = (fa[t] || {}).prototype, o) for (s in e) {
    if (l = e[s], a3.dontCallGetSet ? (h = Lf(o, s), u = h && h.value) : u = o[s], n = Uf(r ? s : t + (i ? "." : "#") + s, a3.forced), !n && u !== void 0) {
      if (typeof l == typeof u) continue;
      jf(l, u);
    }
    (a3.sham || u && u.sham) && kf(l, "sham", true), Bf(o, s, l, a3);
  }
};
var zf = Fe;
var Rt = typeof process < "u" && zf(process) == "process";
var Gf = k;
var Hf = Se;
var Yf = function(a3, e, t) {
  try {
    return Gf(Hf(Object.getOwnPropertyDescriptor(a3, e)[t]));
  } catch {
  }
};
var Xf = D;
var Wf = String;
var qf = TypeError;
var Qf = function(a3) {
  if (typeof a3 == "object" || Xf(a3)) return a3;
  throw qf("Can't set " + Wf(a3) + " as a prototype");
};
var Kf = Yf;
var Zf = K;
var Jf = Qf;
var fu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var a3 = false, e = {}, t;
  try {
    t = Kf(Object.prototype, "__proto__", "set"), t(e, []), a3 = e instanceof Array;
  } catch {
  }
  return function(i, n) {
    return Zf(i), Jf(n), a3 ? t(i, n) : i.__proto__ = n, i;
  };
}() : void 0);
var ec = de.f;
var tc = le;
var rc = G;
var Fn = rc("toStringTag");
var _i = function(a3, e, t) {
  a3 && !t && (a3 = a3.prototype), a3 && !tc(a3, Fn) && ec(a3, Fn, { configurable: true, value: e });
};
var jn = nu;
var ac = de;
var ic = function(a3, e, t) {
  return t.get && jn(t.get, e, { getter: true }), t.set && jn(t.set, e, { setter: true }), ac.f(a3, e, t);
};
var nc = Ue;
var sc = ic;
var oc = G;
var uc = ce;
var Un = oc("species");
var lc = function(a3) {
  var e = nc(a3);
  uc && e && !e[Un] && sc(e, Un, {
    configurable: true,
    get: function() {
      return this;
    }
  });
};
var hc = Tr;
var vc = TypeError;
var fc = function(a3, e) {
  if (hc(e, a3)) return a3;
  throw vc("Incorrect invocation");
};
var cc = G;
var gc = cc("toStringTag");
var cu = {};
cu[gc] = "z";
var dc = String(cu) === "[object z]";
var pc = dc;
var yc = D;
var ur = Fe;
var mc = G;
var bc = mc("toStringTag");
var xc = Object;
var Tc = ur(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments";
var Sc = function(a3, e) {
  try {
    return a3[e];
  } catch {
  }
};
var Di = pc ? ur : function(a3) {
  var e, t, r;
  return a3 === void 0 ? "Undefined" : a3 === null ? "Null" : typeof (t = Sc(e = xc(a3), bc)) == "string" ? t : Tc ? ur(e) : (r = ur(e)) == "Object" && yc(e.callee) ? "Arguments" : r;
};
var Oc = k;
var Ec = L;
var gu = D;
var $c = Di;
var wc = Ue;
var Cc = Pi;
var du = function() {
};
var Ac = [];
var pu = wc("Reflect", "construct");
var Vi = /^\s*(?:class|function)\b/;
var Pc = Oc(Vi.exec);
var Rc = !Vi.exec(du);
var ft = function(e) {
  if (!gu(e)) return false;
  try {
    return pu(du, Ac, e), true;
  } catch {
    return false;
  }
};
var yu = function(e) {
  if (!gu(e)) return false;
  switch ($c(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return Rc || !!Pc(Vi, Cc(e));
  } catch {
    return true;
  }
};
yu.sham = true;
var Ic = !pu || Ec(function() {
  var a3;
  return ft(ft.call) || !ft(Object) || !ft(function() {
    a3 = true;
  }) || a3;
}) ? yu : ft;
var Nc = Ic;
var Mc = Or;
var _c = TypeError;
var Dc = function(a3) {
  if (Nc(a3)) return a3;
  throw _c(Mc(a3) + " is not a constructor");
};
var zn = K;
var Vc = Dc;
var Lc = je;
var kc = G;
var Bc = kc("species");
var mu = function(a3, e) {
  var t = zn(a3).constructor, r;
  return t === void 0 || Lc(r = zn(t)[Bc]) ? e : Vc(r);
};
var Fc = br;
var bu = Function.prototype;
var Gn = bu.apply;
var Hn = bu.call;
var Li = typeof Reflect == "object" && Reflect.apply || (Fc ? Hn.bind(Gn) : function() {
  return Hn.apply(Gn, arguments);
});
var jc = Fe;
var Uc = k;
var It = function(a3) {
  if (jc(a3) === "Function") return Uc(a3);
};
var Yn = It;
var zc = Se;
var Gc = br;
var Hc = Yn(Yn.bind);
var ki = function(a3, e) {
  return zc(a3), e === void 0 ? a3 : Gc ? Hc(a3, e) : function() {
    return a3.apply(e, arguments);
  };
};
var Yc = Ue;
var xu = Yc("document", "documentElement");
var Xc = k;
var Wc = Xc([].slice);
var qc = TypeError;
var Qc = function(a3, e) {
  if (a3 < e) throw qc("Not enough arguments");
  return a3;
};
var Kc = Sr;
var Tu = /(?:ipad|iphone|ipod).*applewebkit/i.test(Kc);
var ae = U;
var Zc = Li;
var Jc = ki;
var Xn = D;
var eg = le;
var Su = L;
var Wn = xu;
var tg = Wc;
var qn = $r;
var rg = Qc;
var ag = Tu;
var ig = Rt;
var Ja = ae.setImmediate;
var ei = ae.clearImmediate;
var ng = ae.process;
var ca = ae.Dispatch;
var sg = ae.Function;
var Qn = ae.MessageChannel;
var og = ae.String;
var ga = 0;
var St = {};
var Kn = "onreadystatechange";
var $t;
var Ne;
var da;
var pa;
Su(function() {
  $t = ae.location;
});
var Bi = function(a3) {
  if (eg(St, a3)) {
    var e = St[a3];
    delete St[a3], e();
  }
};
var ya = function(a3) {
  return function() {
    Bi(a3);
  };
};
var Zn = function(a3) {
  Bi(a3.data);
};
var Jn = function(a3) {
  ae.postMessage(og(a3), $t.protocol + "//" + $t.host);
};
(!Ja || !ei) && (Ja = function(e) {
  rg(arguments.length, 1);
  var t = Xn(e) ? e : sg(e), r = tg(arguments, 1);
  return St[++ga] = function() {
    Zc(t, void 0, r);
  }, Ne(ga), ga;
}, ei = function(e) {
  delete St[e];
}, ig ? Ne = function(a3) {
  ng.nextTick(ya(a3));
} : ca && ca.now ? Ne = function(a3) {
  ca.now(ya(a3));
} : Qn && !ag ? (da = new Qn(), pa = da.port2, da.port1.onmessage = Zn, Ne = Jc(pa.postMessage, pa)) : ae.addEventListener && Xn(ae.postMessage) && !ae.importScripts && $t && $t.protocol !== "file:" && !Su(Jn) ? (Ne = Jn, ae.addEventListener("message", Zn, false)) : Kn in qn("script") ? Ne = function(a3) {
  Wn.appendChild(qn("script"))[Kn] = function() {
    Wn.removeChild(this), Bi(a3);
  };
} : Ne = function(a3) {
  setTimeout(ya(a3), 0);
});
var Ou = {
  set: Ja,
  clear: ei
};
var Eu = function() {
  this.head = null, this.tail = null;
};
Eu.prototype = {
  add: function(a3) {
    var e = { item: a3, next: null }, t = this.tail;
    t ? t.next = e : this.head = e, this.tail = e;
  },
  get: function() {
    var a3 = this.head;
    if (a3) {
      var e = this.head = a3.next;
      return e === null && (this.tail = null), a3.item;
    }
  }
};
var $u = Eu;
var ug = Sr;
var lg = /ipad|iphone|ipod/i.test(ug) && typeof Pebble < "u";
var hg = Sr;
var vg = /web0s(?!.*chrome)/i.test(hg);
var Le = U;
var es = ki;
var fg = ot.f;
var ma = Ou.set;
var cg = $u;
var gg = Tu;
var dg = lg;
var pg = vg;
var ba = Rt;
var ts = Le.MutationObserver || Le.WebKitMutationObserver;
var rs = Le.document;
var as = Le.process;
var Wt = Le.Promise;
var is = fg(Le, "queueMicrotask");
var ti = is && is.value;
var We;
var xa;
var Ta;
var qt;
var ns;
if (!ti) {
  Qt = new cg(), Kt = function() {
    var a3, e;
    for (ba && (a3 = as.domain) && a3.exit(); e = Qt.get(); ) try {
      e();
    } catch (t) {
      throw Qt.head && We(), t;
    }
    a3 && a3.enter();
  };
  !gg && !ba && !pg && ts && rs ? (xa = true, Ta = rs.createTextNode(""), new ts(Kt).observe(Ta, { characterData: true }), We = function() {
    Ta.data = xa = !xa;
  }) : !dg && Wt && Wt.resolve ? (qt = Wt.resolve(void 0), qt.constructor = Wt, ns = es(qt.then, qt), We = function() {
    ns(Kt);
  }) : ba ? We = function() {
    as.nextTick(Kt);
  } : (ma = es(ma, Le), We = function() {
    ma(Kt);
  }), ti = function(a3) {
    Qt.head || We(), Qt.add(a3);
  };
}
var Qt;
var Kt;
var yg = ti;
var mg = function(a3, e) {
  try {
    arguments.length == 1 ? console.error(a3) : console.error(a3, e);
  } catch {
  }
};
var Fi = function(a3) {
  try {
    return { error: false, value: a3() };
  } catch (e) {
    return { error: true, value: e };
  }
};
var bg = U;
var Rr = bg.Promise;
var wu = typeof Deno == "object" && Deno && typeof Deno.version == "object";
var xg = wu;
var Tg = Rt;
var Sg = !xg && !Tg && typeof window == "object" && typeof document == "object";
var Og = U;
var Ot = Rr;
var Eg = D;
var $g = vu;
var wg = Pi;
var Cg = G;
var Ag = Sg;
var Pg = wu;
var Sa = Oi;
Ot && Ot.prototype;
var Rg = Cg("species");
var ri = false;
var Cu = Eg(Og.PromiseRejectionEvent);
var Ig = $g("Promise", function() {
  var a3 = wg(Ot), e = a3 !== String(Ot);
  if (!e && Sa === 66) return true;
  if (!Sa || Sa < 51 || !/native code/.test(a3)) {
    var t = new Ot(function(n) {
      n(1);
    }), r = function(n) {
      n(function() {
      }, function() {
      });
    }, i = t.constructor = {};
    if (i[Rg] = r, ri = t.then(function() {
    }) instanceof r, !ri) return true;
  }
  return !e && (Ag || Pg) && !Cu;
});
var Nt = {
  CONSTRUCTOR: Ig,
  REJECTION_EVENT: Cu,
  SUBCLASSING: ri
};
var ht = {};
var ss = Se;
var Ng = TypeError;
var Mg = function(a3) {
  var e, t;
  this.promise = new a3(function(r, i) {
    if (e !== void 0 || t !== void 0) throw Ng("Bad Promise constructor");
    e = r, t = i;
  }), this.resolve = ss(e), this.reject = ss(t);
};
ht.f = function(a3) {
  return new Mg(a3);
};
var _g = ee;
var pr = Rt;
var we = U;
var nt = Y;
var os = ze;
var us = fu;
var Dg = _i;
var Vg = lc;
var Lg = Se;
var lr = D;
var kg = Te;
var Bg = fc;
var Fg = mu;
var Au = Ou.set;
var ji = yg;
var jg = mg;
var Ug = Fi;
var zg = $u;
var Pu = Cr;
var yr = Rr;
var Ui = Nt;
var Ru = ht;
var Ir = "Promise";
var Iu = Ui.CONSTRUCTOR;
var Gg = Ui.REJECTION_EVENT;
var Hg = Ui.SUBCLASSING;
var Oa = Pu.getterFor(Ir);
var Yg = Pu.set;
var Ze = yr && yr.prototype;
var Ve = yr;
var Zt = Ze;
var Nu = we.TypeError;
var ai = we.document;
var zi = we.process;
var ii = Ru.f;
var Xg = ii;
var Wg = !!(ai && ai.createEvent && we.dispatchEvent);
var Mu = "unhandledrejection";
var qg = "rejectionhandled";
var ls = 0;
var _u = 1;
var Qg = 2;
var Gi = 1;
var Du = 2;
var Jt;
var hs;
var Kg;
var vs;
var Vu = function(a3) {
  var e;
  return kg(a3) && lr(e = a3.then) ? e : false;
};
var Lu = function(a3, e) {
  var t = e.value, r = e.state == _u, i = r ? a3.ok : a3.fail, n = a3.resolve, o = a3.reject, s = a3.domain, u, l, h;
  try {
    i ? (r || (e.rejection === Du && Jg(e), e.rejection = Gi), i === true ? u = t : (s && s.enter(), u = i(t), s && (s.exit(), h = true)), u === a3.promise ? o(Nu("Promise-chain cycle")) : (l = Vu(u)) ? nt(l, u, n, o) : n(u)) : o(t);
  } catch (f) {
    s && !h && s.exit(), o(f);
  }
};
var ku = function(a3, e) {
  a3.notified || (a3.notified = true, ji(function() {
    for (var t = a3.reactions, r; r = t.get(); )
      Lu(r, a3);
    a3.notified = false, e && !a3.rejection && Zg(a3);
  }));
};
var Bu = function(a3, e, t) {
  var r, i;
  Wg ? (r = ai.createEvent("Event"), r.promise = e, r.reason = t, r.initEvent(a3, false, true), we.dispatchEvent(r)) : r = { promise: e, reason: t }, !Gg && (i = we["on" + a3]) ? i(r) : a3 === Mu && jg("Unhandled promise rejection", t);
};
var Zg = function(a3) {
  nt(Au, we, function() {
    var e = a3.facade, t = a3.value, r = fs(a3), i;
    if (r && (i = Ug(function() {
      pr ? zi.emit("unhandledRejection", t, e) : Bu(Mu, e, t);
    }), a3.rejection = pr || fs(a3) ? Du : Gi, i.error))
      throw i.value;
  });
};
var fs = function(a3) {
  return a3.rejection !== Gi && !a3.parent;
};
var Jg = function(a3) {
  nt(Au, we, function() {
    var e = a3.facade;
    pr ? zi.emit("rejectionHandled", e) : Bu(qg, e, a3.value);
  });
};
var et = function(a3, e, t) {
  return function(r) {
    a3(e, r, t);
  };
};
var rt = function(a3, e, t) {
  a3.done || (a3.done = true, t && (a3 = t), a3.value = e, a3.state = Qg, ku(a3, true));
};
var ni = function(a3, e, t) {
  if (!a3.done) {
    a3.done = true, t && (a3 = t);
    try {
      if (a3.facade === e) throw Nu("Promise can't be resolved itself");
      var r = Vu(e);
      r ? ji(function() {
        var i = { done: false };
        try {
          nt(
            r,
            e,
            et(ni, i, a3),
            et(rt, i, a3)
          );
        } catch (n) {
          rt(i, n, a3);
        }
      }) : (a3.value = e, a3.state = _u, ku(a3, false));
    } catch (i) {
      rt({ done: false }, i, a3);
    }
  }
};
if (Iu && (Ve = function(e) {
  Bg(this, Zt), Lg(e), nt(Jt, this);
  var t = Oa(this);
  try {
    e(et(ni, t), et(rt, t));
  } catch (r) {
    rt(t, r);
  }
}, Zt = Ve.prototype, Jt = function(e) {
  Yg(this, {
    type: Ir,
    done: false,
    notified: false,
    parent: false,
    reactions: new zg(),
    rejection: false,
    state: ls,
    value: void 0
  });
}, Jt.prototype = os(Zt, "then", function(e, t) {
  var r = Oa(this), i = ii(Fg(this, Ve));
  return r.parent = true, i.ok = lr(e) ? e : true, i.fail = lr(t) && t, i.domain = pr ? zi.domain : void 0, r.state == ls ? r.reactions.add(i) : ji(function() {
    Lu(i, r);
  }), i.promise;
}), hs = function() {
  var a3 = new Jt(), e = Oa(a3);
  this.promise = a3, this.resolve = et(ni, e), this.reject = et(rt, e);
}, Ru.f = ii = function(a3) {
  return a3 === Ve || a3 === Kg ? new hs(a3) : Xg(a3);
}, lr(yr) && Ze !== Object.prototype)) {
  vs = Ze.then, Hg || os(Ze, "then", function(e, t) {
    var r = this;
    return new Ve(function(i, n) {
      nt(vs, r, i, n);
    }).then(e, t);
  }, { unsafe: true });
  try {
    delete Ze.constructor;
  } catch {
  }
  us && us(Ze, Zt);
}
_g({ global: true, constructor: true, wrap: true, forced: Iu }, {
  Promise: Ve
});
Dg(Ve, Ir, false);
Vg(Ir);
var Mt = {};
var ed = G;
var td = Mt;
var rd = ed("iterator");
var ad = Array.prototype;
var id = function(a3) {
  return a3 !== void 0 && (td.Array === a3 || ad[rd] === a3);
};
var nd = Di;
var cs = ut;
var sd = je;
var od = Mt;
var ud = G;
var ld = ud("iterator");
var Fu = function(a3) {
  if (!sd(a3)) return cs(a3, ld) || cs(a3, "@@iterator") || od[nd(a3)];
};
var hd = Y;
var vd = Se;
var fd = K;
var cd = Or;
var gd = Fu;
var dd = TypeError;
var pd = function(a3, e) {
  var t = arguments.length < 2 ? gd(a3) : e;
  if (vd(t)) return fd(hd(t, a3));
  throw dd(cd(a3) + " is not iterable");
};
var yd = Y;
var gs = K;
var md = ut;
var bd = function(a3, e, t) {
  var r, i;
  gs(a3);
  try {
    if (r = md(a3, "return"), !r) {
      if (e === "throw") throw t;
      return t;
    }
    r = yd(r, a3);
  } catch (n) {
    i = true, r = n;
  }
  if (e === "throw") throw t;
  if (i) throw r;
  return gs(r), t;
};
var xd = ki;
var Td = Y;
var Sd = K;
var Od = Or;
var Ed = id;
var $d = Pr;
var ds = Tr;
var wd = pd;
var Cd = Fu;
var ps = bd;
var Ad = TypeError;
var hr = function(a3, e) {
  this.stopped = a3, this.result = e;
};
var ys = hr.prototype;
var ju = function(a3, e, t) {
  var r = t && t.that, i = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), s = !!(t && t.INTERRUPTED), u = xd(e, r), l, h, f, c, v, d, g, p = function(x) {
    return l && ps(l, "normal", x), new hr(true, x);
  }, y = function(x) {
    return i ? (Sd(x), s ? u(x[0], x[1], p) : u(x[0], x[1])) : s ? u(x, p) : u(x);
  };
  if (n)
    l = a3.iterator;
  else if (o)
    l = a3;
  else {
    if (h = Cd(a3), !h) throw Ad(Od(a3) + " is not iterable");
    if (Ed(h)) {
      for (f = 0, c = $d(a3); c > f; f++)
        if (v = y(a3[f]), v && ds(ys, v)) return v;
      return new hr(false);
    }
    l = wd(a3, h);
  }
  for (d = n ? a3.next : l.next; !(g = Td(d, l)).done; ) {
    try {
      v = y(g.value);
    } catch (x) {
      ps(l, "throw", x);
    }
    if (typeof v == "object" && v && ds(ys, v)) return v;
  }
  return new hr(false);
};
var Pd = G;
var Uu = Pd("iterator");
var zu = false;
try {
  Rd = 0, ms = {
    next: function() {
      return { done: !!Rd++ };
    },
    return: function() {
      zu = true;
    }
  };
  ms[Uu] = function() {
    return this;
  }, Array.from(ms, function() {
    throw 2;
  });
} catch {
}
var Rd;
var ms;
var Id = function(a3, e) {
  if (!e && !zu) return false;
  var t = false;
  try {
    var r = {};
    r[Uu] = function() {
      return {
        next: function() {
          return { done: t = true };
        }
      };
    }, a3(r);
  } catch {
  }
  return t;
};
var Nd = Rr;
var Md = Id;
var _d = Nt.CONSTRUCTOR;
var Gu = _d || !Md(function(a3) {
  Nd.all(a3).then(void 0, function() {
  });
});
var Dd = ee;
var Vd = Y;
var Ld = Se;
var kd = ht;
var Bd = Fi;
var Fd = ju;
var jd = Gu;
Dd({ target: "Promise", stat: true, forced: jd }, {
  all: function(e) {
    var t = this, r = kd.f(t), i = r.resolve, n = r.reject, o = Bd(function() {
      var s = Ld(t.resolve), u = [], l = 0, h = 1;
      Fd(e, function(f) {
        var c = l++, v = false;
        h++, Vd(s, t, f).then(function(d) {
          v || (v = true, u[c] = d, --h || i(u));
        }, n);
      }), --h || i(u);
    });
    return o.error && n(o.value), r.promise;
  }
});
var Ud = ee;
var zd = Nt.CONSTRUCTOR;
var si = Rr;
var Gd = Ue;
var Hd = D;
var Yd = ze;
var bs = si && si.prototype;
Ud({ target: "Promise", proto: true, forced: zd, real: true }, {
  catch: function(a3) {
    return this.then(void 0, a3);
  }
});
if (Hd(si)) {
  xs = Gd("Promise").prototype.catch;
  bs.catch !== xs && Yd(bs, "catch", xs, { unsafe: true });
}
var xs;
var Xd = ee;
var Wd = Y;
var qd = Se;
var Qd = ht;
var Kd = Fi;
var Zd = ju;
var Jd = Gu;
Xd({ target: "Promise", stat: true, forced: Jd }, {
  race: function(e) {
    var t = this, r = Qd.f(t), i = r.reject, n = Kd(function() {
      var o = qd(t.resolve);
      Zd(e, function(s) {
        Wd(o, t, s).then(r.resolve, i);
      });
    });
    return n.error && i(n.value), r.promise;
  }
});
var ep = ee;
var tp = Y;
var rp = ht;
var ap = Nt.CONSTRUCTOR;
ep({ target: "Promise", stat: true, forced: ap }, {
  reject: function(e) {
    var t = rp.f(this);
    return tp(t.reject, void 0, e), t.promise;
  }
});
var ip = K;
var np = Te;
var sp = ht;
var op = function(a3, e) {
  if (ip(a3), np(e) && e.constructor === a3) return e;
  var t = sp.f(a3), r = t.resolve;
  return r(e), t.promise;
};
var up = ee;
var lp = Ue;
var hp = Nt.CONSTRUCTOR;
var vp = op;
lp("Promise");
up({ target: "Promise", stat: true, forced: hp }, {
  resolve: function(e) {
    return vp(this, e);
  }
});
function Ts(a3, e, t, r, i, n, o) {
  try {
    var s = a3[n](o), u = s.value;
  } catch (l) {
    t(l);
    return;
  }
  s.done ? e(u) : Promise.resolve(u).then(r, i);
}
function xe(a3) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(r, i) {
      var n = a3.apply(e, t);
      function o(u) {
        Ts(n, r, i, o, s, "next", u);
      }
      function s(u) {
        Ts(n, r, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var fp = Di;
var cp = String;
var pe = function(a3) {
  if (fp(a3) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
  return cp(a3);
};
var gp = K;
var Hu = function() {
  var a3 = gp(this), e = "";
  return a3.hasIndices && (e += "d"), a3.global && (e += "g"), a3.ignoreCase && (e += "i"), a3.multiline && (e += "m"), a3.dotAll && (e += "s"), a3.unicode && (e += "u"), a3.unicodeSets && (e += "v"), a3.sticky && (e += "y"), e;
};
var Hi = L;
var dp = U;
var Yi = dp.RegExp;
var Xi = Hi(function() {
  var a3 = Yi("a", "y");
  return a3.lastIndex = 2, a3.exec("abcd") != null;
});
var pp = Xi || Hi(function() {
  return !Yi("a", "y").sticky;
});
var yp = Xi || Hi(function() {
  var a3 = Yi("^r", "gy");
  return a3.lastIndex = 2, a3.exec("str") != null;
});
var Yu = {
  BROKEN_CARET: yp,
  MISSED_STICKY: pp,
  UNSUPPORTED_Y: Xi
};
var Xu = {};
var mp = lu;
var bp = Mi;
var xp = Object.keys || function(e) {
  return mp(e, bp);
};
var Tp = ce;
var Sp = eu;
var Op = de;
var Ep = K;
var $p = Ct;
var wp = xp;
Xu.f = Tp && !Sp ? Object.defineProperties : function(e, t) {
  Ep(e);
  for (var r = $p(t), i = wp(t), n = i.length, o = 0, s; n > o; ) Op.f(e, s = i[o++], r[s]);
  return e;
};
var Cp = K;
var Ap = Xu;
var Ss = Mi;
var Pp = Ii;
var Rp = xu;
var Ip = $r;
var Np = Ri;
var Os = ">";
var Es = "<";
var oi = "prototype";
var ui = "script";
var Wu = Np("IE_PROTO");
var Ea = function() {
};
var qu = function(a3) {
  return Es + ui + Os + a3 + Es + "/" + ui + Os;
};
var $s = function(a3) {
  a3.write(qu("")), a3.close();
  var e = a3.parentWindow.Object;
  return a3 = null, e;
};
var Mp = function() {
  var a3 = Ip("iframe"), e = "java" + ui + ":", t;
  return a3.style.display = "none", Rp.appendChild(a3), a3.src = String(e), t = a3.contentWindow.document, t.open(), t.write(qu("document.F=Object")), t.close(), t.F;
};
var er;
var vr = function() {
  try {
    er = new ActiveXObject("htmlfile");
  } catch {
  }
  vr = typeof document < "u" ? document.domain && er ? $s(er) : Mp() : $s(er);
  for (var a3 = Ss.length; a3--; ) delete vr[oi][Ss[a3]];
  return vr();
};
Pp[Wu] = true;
var Wi = Object.create || function(e, t) {
  var r;
  return e !== null ? (Ea[oi] = Cp(e), r = new Ea(), Ea[oi] = null, r[Wu] = e) : r = vr(), t === void 0 ? r : Ap.f(r, t);
};
var _p = L;
var Dp = U;
var Vp = Dp.RegExp;
var Lp = _p(function() {
  var a3 = Vp(".", "s");
  return !(a3.dotAll && a3.exec(`
`) && a3.flags === "s");
});
var kp = L;
var Bp = U;
var Fp = Bp.RegExp;
var jp = kp(function() {
  var a3 = Fp("(?<a>b)", "g");
  return a3.exec("b").groups.a !== "b" || "b".replace(a3, "$<a>c") !== "bc";
});
var tt = Y;
var Nr = k;
var Up = pe;
var zp = Hu;
var Gp = Yu;
var Hp = wi;
var Yp = Wi;
var Xp = Cr.get;
var Wp = Lp;
var qp = jp;
var Qp = Hp("native-string-replace", String.prototype.replace);
var mr = RegExp.prototype.exec;
var li = mr;
var Kp = Nr("".charAt);
var Zp = Nr("".indexOf);
var Jp = Nr("".replace);
var $a = Nr("".slice);
var hi = function() {
  var a3 = /a/, e = /b*/g;
  return tt(mr, a3, "a"), tt(mr, e, "a"), a3.lastIndex !== 0 || e.lastIndex !== 0;
}();
var Qu = Gp.BROKEN_CARET;
var vi = /()??/.exec("")[1] !== void 0;
var ey = hi || vi || Qu || Wp || qp;
ey && (li = function(e) {
  var t = this, r = Xp(t), i = Up(e), n = r.raw, o, s, u, l, h, f, c;
  if (n)
    return n.lastIndex = t.lastIndex, o = tt(li, n, i), t.lastIndex = n.lastIndex, o;
  var v = r.groups, d = Qu && t.sticky, g = tt(zp, t), p = t.source, y = 0, x = i;
  if (d && (g = Jp(g, "y", ""), Zp(g, "g") === -1 && (g += "g"), x = $a(i, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && Kp(i, t.lastIndex - 1) !== `
`) && (p = "(?: " + p + ")", x = " " + x, y++), s = new RegExp("^(?:" + p + ")", g)), vi && (s = new RegExp("^" + p + "$(?!\\s)", g)), hi && (u = t.lastIndex), l = tt(mr, d ? s : t, x), d ? l ? (l.input = $a(l.input, y), l[0] = $a(l[0], y), l.index = t.lastIndex, t.lastIndex += l[0].length) : t.lastIndex = 0 : hi && l && (t.lastIndex = t.global ? l.index + l[0].length : u), vi && l && l.length > 1 && tt(Qp, l[0], s, function() {
    for (h = 1; h < arguments.length - 2; h++)
      arguments[h] === void 0 && (l[h] = void 0);
  }), l && v)
    for (l.groups = f = Yp(null), h = 0; h < v.length; h++)
      c = v[h], f[c[0]] = l[c[1]];
  return l;
});
var Mr = li;
var ty = ee;
var ws = Mr;
ty({ target: "RegExp", proto: true, forced: /./.exec !== ws }, {
  exec: ws
});
var Cs = It;
var As = ze;
var ry = Mr;
var Ps = L;
var Ku = G;
var ay = At;
var iy = Ku("species");
var wa = RegExp.prototype;
var qi = function(a3, e, t, r) {
  var i = Ku(a3), n = !Ps(function() {
    var l = {};
    return l[i] = function() {
      return 7;
    }, ""[a3](l) != 7;
  }), o = n && !Ps(function() {
    var l = false, h = /a/;
    return a3 === "split" && (h = {}, h.constructor = {}, h.constructor[iy] = function() {
      return h;
    }, h.flags = "", h[i] = /./[i]), h.exec = function() {
      return l = true, null;
    }, h[i](""), !l;
  });
  if (!n || !o || t) {
    var s = Cs(/./[i]), u = e(i, ""[a3], function(l, h, f, c, v) {
      var d = Cs(l), g = h.exec;
      return g === ry || g === wa.exec ? n && !v ? { done: true, value: s(h, f, c) } : { done: true, value: d(f, h, c) } : { done: false };
    });
    As(String.prototype, a3, u[0]), As(wa, i, u[1]);
  }
  r && ay(wa[i], "sham", true);
};
var Qi = k;
var ny = Ar;
var sy = pe;
var oy = ge;
var uy = Qi("".charAt);
var Rs = Qi("".charCodeAt);
var ly = Qi("".slice);
var Is = function(a3) {
  return function(e, t) {
    var r = sy(oy(e)), i = ny(t), n = r.length, o, s;
    return i < 0 || i >= n ? a3 ? "" : void 0 : (o = Rs(r, i), o < 55296 || o > 56319 || i + 1 === n || (s = Rs(r, i + 1)) < 56320 || s > 57343 ? a3 ? uy(r, i) : o : a3 ? ly(r, i, i + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
};
var hy = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Is(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Is(true)
};
var vy = hy.charAt;
var Ki = function(a3, e, t) {
  return e + (t ? vy(a3, e).length : 1);
};
var Ns = Y;
var fy = K;
var cy = D;
var gy = Fe;
var dy = Mr;
var py = TypeError;
var Zi = function(a3, e) {
  var t = a3.exec;
  if (cy(t)) {
    var r = Ns(t, a3, e);
    return r !== null && fy(r), r;
  }
  if (gy(a3) === "RegExp") return Ns(dy, a3, e);
  throw py("RegExp#exec called on incompatible receiver");
};
var yy = Y;
var my = qi;
var by = K;
var xy = je;
var Ty = lt;
var Ca = pe;
var Sy = ge;
var Oy = ut;
var Ey = Ki;
var Ms = Zi;
my("match", function(a3, e, t) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function(i) {
      var n = Sy(this), o = xy(i) ? void 0 : Oy(i, a3);
      return o ? yy(o, i, n) : new RegExp(i)[a3](Ca(n));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(r) {
      var i = by(this), n = Ca(r), o = t(e, i, n);
      if (o.done) return o.value;
      if (!i.global) return Ms(i, n);
      var s = i.unicode;
      i.lastIndex = 0;
      for (var u = [], l = 0, h; (h = Ms(i, n)) !== null; ) {
        var f = Ca(h[0]);
        u[l] = f, f === "" && (i.lastIndex = Ey(n, Ty(i.lastIndex), s)), l++;
      }
      return l === 0 ? null : u;
    }
  ];
});
var Ji = k;
var $y = Er;
var wy = Math.floor;
var Aa = Ji("".charAt);
var Cy = Ji("".replace);
var Pa = Ji("".slice);
var Ay = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var Py = /\$([$&'`]|\d{1,2})/g;
var Ry = function(a3, e, t, r, i, n) {
  var o = t + a3.length, s = r.length, u = Py;
  return i !== void 0 && (i = $y(i), u = Ay), Cy(n, u, function(l, h) {
    var f;
    switch (Aa(h, 0)) {
      case "$":
        return "$";
      case "&":
        return a3;
      case "`":
        return Pa(e, 0, t);
      case "'":
        return Pa(e, o);
      case "<":
        f = i[Pa(h, 1, -1)];
        break;
      default:
        var c = +h;
        if (c === 0) return l;
        if (c > s) {
          var v = wy(c / 10);
          return v === 0 ? l : v <= s ? r[v - 1] === void 0 ? Aa(h, 1) : r[v - 1] + Aa(h, 1) : l;
        }
        f = r[c - 1];
    }
    return f === void 0 ? "" : f;
  });
};
var Iy = Li;
var _s = Y;
var _r = k;
var Ny = qi;
var My = L;
var _y = K;
var Dy = D;
var Vy = je;
var Ly = Ar;
var ky = lt;
var qe = pe;
var By = ge;
var Fy = Ki;
var jy = ut;
var Uy = Ry;
var zy = Zi;
var Gy = G;
var fi = Gy("replace");
var Hy = Math.max;
var Yy = Math.min;
var Xy = _r([].concat);
var Ra = _r([].push);
var Ds = _r("".indexOf);
var Vs = _r("".slice);
var Wy = function(a3) {
  return a3 === void 0 ? a3 : String(a3);
};
var qy = function() {
  return "a".replace(/./, "$0") === "$0";
}();
var Ls = function() {
  return /./[fi] ? /./[fi]("a", "$0") === "" : false;
}();
var Qy = !My(function() {
  var a3 = /./;
  return a3.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(a3, "$<a>") !== "7";
});
Ny("replace", function(a3, e, t) {
  var r = Ls ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(n, o) {
      var s = By(this), u = Vy(n) ? void 0 : jy(n, fi);
      return u ? _s(u, n, s, o) : _s(e, qe(s), n, o);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(i, n) {
      var o = _y(this), s = qe(i);
      if (typeof n == "string" && Ds(n, r) === -1 && Ds(n, "$<") === -1) {
        var u = t(e, o, s, n);
        if (u.done) return u.value;
      }
      var l = Dy(n);
      l || (n = qe(n));
      var h = o.global;
      if (h) {
        var f = o.unicode;
        o.lastIndex = 0;
      }
      for (var c = []; ; ) {
        var v = zy(o, s);
        if (v === null || (Ra(c, v), !h)) break;
        var d = qe(v[0]);
        d === "" && (o.lastIndex = Fy(s, ky(o.lastIndex), f));
      }
      for (var g = "", p = 0, y = 0; y < c.length; y++) {
        v = c[y];
        for (var x = qe(v[0]), b = Hy(Yy(Ly(v.index), s.length), 0), T = [], $ = 1; $ < v.length; $++) Ra(T, Wy(v[$]));
        var E = v.groups;
        if (l) {
          var S = Xy([x], T, b, s);
          E !== void 0 && Ra(S, E);
          var C = qe(Iy(n, void 0, S));
        } else
          C = Uy(x, s, b, T, E, n);
        b >= p && (g += Vs(s, p, b) + C, p = b + x.length);
      }
      return g + Vs(s, p);
    }
  ];
}, !Qy || !qy || Ls);
var Ky = Te;
var Zy = Fe;
var Jy = G;
var em = Jy("match");
var Zu = function(a3) {
  var e;
  return Ky(a3) && ((e = a3[em]) !== void 0 ? !!e : Zy(a3) == "RegExp");
};
var tm = Zu;
var rm = TypeError;
var en = function(a3) {
  if (tm(a3))
    throw rm("The method doesn't accept regular expressions");
  return a3;
};
var am = G;
var im = am("match");
var tn = function(a3) {
  var e = /./;
  try {
    "/./"[a3](e);
  } catch {
    try {
      return e[im] = false, "/./"[a3](e);
    } catch {
    }
  }
  return false;
};
var nm = ee;
var Ju = It;
var sm = ot.f;
var om = lt;
var ks = pe;
var um = en;
var lm = ge;
var hm = tn;
var Bs = Ju("".startsWith);
var vm = Ju("".slice);
var fm = Math.min;
var el = hm("startsWith");
var cm = !el && !!function() {
  var a3 = sm(String.prototype, "startsWith");
  return a3 && !a3.writable;
}();
nm({ target: "String", proto: true, forced: !cm && !el }, {
  startsWith: function(e) {
    var t = ks(lm(this));
    um(e);
    var r = om(fm(arguments.length > 1 ? arguments[1] : void 0, t.length)), i = ks(e);
    return Bs ? Bs(t, i, r) : vm(t, r, r + i.length) === i;
  }
});
var gm = G;
var dm = Wi;
var pm = de.f;
var ci = gm("unscopables");
var gi = Array.prototype;
gi[ci] == null && pm(gi, ci, {
  configurable: true,
  value: dm(null)
});
var ym = function(a3) {
  gi[ci][a3] = true;
};
var mm = L;
var bm = !mm(function() {
  function a3() {
  }
  return a3.prototype.constructor = null, Object.getPrototypeOf(new a3()) !== a3.prototype;
});
var xm = le;
var Tm = D;
var Sm = Er;
var Om = Ri;
var Em = bm;
var Fs = Om("IE_PROTO");
var di = Object;
var $m = di.prototype;
var tl = Em ? di.getPrototypeOf : function(a3) {
  var e = Sm(a3);
  if (xm(e, Fs)) return e[Fs];
  var t = e.constructor;
  return Tm(t) && e instanceof t ? t.prototype : e instanceof di ? $m : null;
};
var wm = L;
var Cm = D;
var Am = Te;
var js = tl;
var Pm = ze;
var Rm = G;
var pi = Rm("iterator");
var rl = false;
var ke;
var Ia;
var Na;
[].keys && (Na = [].keys(), "next" in Na ? (Ia = js(js(Na)), Ia !== Object.prototype && (ke = Ia)) : rl = true);
var Im = !Am(ke) || wm(function() {
  var a3 = {};
  return ke[pi].call(a3) !== a3;
});
Im && (ke = {});
Cm(ke[pi]) || Pm(ke, pi, function() {
  return this;
});
var al = {
  IteratorPrototype: ke,
  BUGGY_SAFARI_ITERATORS: rl
};
var Nm = al.IteratorPrototype;
var Mm = Wi;
var _m = xr;
var Dm = _i;
var Vm = Mt;
var Lm = function() {
  return this;
};
var km = function(a3, e, t, r) {
  var i = e + " Iterator";
  return a3.prototype = Mm(Nm, { next: _m(+!r, t) }), Dm(a3, i, false), Vm[i] = Lm, a3;
};
var Bm = ee;
var Fm = Y;
var il = wr;
var jm = D;
var Um = km;
var Us = tl;
var zs = fu;
var zm = _i;
var Gm = At;
var Ma = ze;
var Hm = G;
var Ym = Mt;
var nl = al;
var Xm = il.PROPER;
var Wm = il.CONFIGURABLE;
var Gs = nl.IteratorPrototype;
var tr = nl.BUGGY_SAFARI_ITERATORS;
var ct = Hm("iterator");
var Hs = "keys";
var gt = "values";
var Ys = "entries";
var qm = function() {
  return this;
};
var Qm = function(a3, e, t, r, i, n, o) {
  Um(t, e, r);
  var s = function(y) {
    if (y === i && c) return c;
    if (!tr && y in h) return h[y];
    switch (y) {
      case Hs:
        return function() {
          return new t(this, y);
        };
      case gt:
        return function() {
          return new t(this, y);
        };
      case Ys:
        return function() {
          return new t(this, y);
        };
    }
    return function() {
      return new t(this);
    };
  }, u = e + " Iterator", l = false, h = a3.prototype, f = h[ct] || h["@@iterator"] || i && h[i], c = !tr && f || s(i), v = e == "Array" && h.entries || f, d, g, p;
  if (v && (d = Us(v.call(new a3())), d !== Object.prototype && d.next && (Us(d) !== Gs && (zs ? zs(d, Gs) : jm(d[ct]) || Ma(d, ct, qm)), zm(d, u, true))), Xm && i == gt && f && f.name !== gt && (Wm ? Gm(h, "name", gt) : (l = true, c = function() {
    return Fm(f, this);
  })), i)
    if (g = {
      values: s(gt),
      keys: n ? c : s(Hs),
      entries: s(Ys)
    }, o) for (p in g)
      (tr || l || !(p in h)) && Ma(h, p, g[p]);
    else Bm({ target: e, proto: true, forced: tr || l }, g);
  return h[ct] !== c && Ma(h, ct, c, { name: i }), Ym[e] = c, g;
};
var Km = function(a3, e) {
  return { value: a3, done: e };
};
var Zm = Ct;
var rn = ym;
var Xs = Mt;
var sl = Cr;
var Jm = de.f;
var e0 = Qm;
var rr = Km;
var t0 = ce;
var ol = "Array Iterator";
var r0 = sl.set;
var a0 = sl.getterFor(ol);
var i0 = e0(Array, "Array", function(a3, e) {
  r0(this, {
    type: ol,
    target: Zm(a3),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var a3 = a0(this), e = a3.target, t = a3.kind, r = a3.index++;
  return !e || r >= e.length ? (a3.target = void 0, rr(void 0, true)) : t == "keys" ? rr(r, false) : t == "values" ? rr(e[r], false) : rr([r, e[r]], false);
}, "values");
var Ws = Xs.Arguments = Xs.Array;
rn("keys");
rn("values");
rn("entries");
if (t0 && Ws.name !== "values") try {
  Jm(Ws, "name", { value: "values" });
} catch {
}
var n0 = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
var s0 = $r;
var _a = s0("span").classList;
var qs = _a && _a.constructor && _a.constructor.prototype;
var o0 = qs === Object.prototype ? void 0 : qs;
var Qs = U;
var ul = n0;
var u0 = o0;
var mt = i0;
var Da = At;
var ll = G;
var Va = ll("iterator");
var Ks = ll("toStringTag");
var La = mt.values;
var hl = function(a3, e) {
  if (a3) {
    if (a3[Va] !== La) try {
      Da(a3, Va, La);
    } catch {
      a3[Va] = La;
    }
    if (a3[Ks] || Da(a3, Ks, e), ul[e]) {
      for (var t in mt)
        if (a3[t] !== mt[t]) try {
          Da(a3, t, mt[t]);
        } catch {
          a3[t] = mt[t];
        }
    }
  }
};
for (ka in ul)
  hl(Qs[ka] && Qs[ka].prototype, ka);
var ka;
hl(u0, "DOMTokenList");
function l0(a3, e) {
  if (fe(a3) !== "object" || a3 === null) return a3;
  var t = a3[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a3, e || "default");
    if (fe(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a3);
}
function h0(a3) {
  var e = l0(a3, "string");
  return fe(e) === "symbol" ? e : String(e);
}
function an(a3, e, t) {
  return e = h0(e), e in a3 ? Object.defineProperty(a3, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : a3[e] = t, a3;
}
var v0 = Se;
var f0 = Er;
var c0 = zo;
var g0 = Pr;
var d0 = TypeError;
var Zs = function(a3) {
  return function(e, t, r, i) {
    v0(t);
    var n = f0(e), o = c0(n), s = g0(n), u = a3 ? s - 1 : 0, l = a3 ? -1 : 1;
    if (r < 2) for (; ; ) {
      if (u in o) {
        i = o[u], u += l;
        break;
      }
      if (u += l, a3 ? u < 0 : s <= u)
        throw d0("Reduce of empty array with no initial value");
    }
    for (; a3 ? u >= 0 : s > u; u += l) u in o && (i = t(i, o[u], u, n));
    return i;
  };
};
var p0 = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Zs(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Zs(true)
};
var y0 = L;
var vl = function(a3, e) {
  var t = [][a3];
  return !!t && y0(function() {
    t.call(null, e || function() {
      return 1;
    }, 1);
  });
};
var m0 = ee;
var b0 = p0.left;
var x0 = vl;
var Js = Oi;
var T0 = Rt;
var S0 = !T0 && Js > 79 && Js < 83;
var O0 = S0 || !x0("reduce");
m0({ target: "Array", proto: true, forced: O0 }, {
  reduce: function(e) {
    var t = arguments.length;
    return b0(this, e, t, t > 1 ? arguments[1] : void 0);
  }
});
var E0 = ee;
var fl = It;
var $0 = ot.f;
var w0 = lt;
var eo = pe;
var C0 = en;
var A0 = ge;
var P0 = tn;
var to = fl("".endsWith);
var R0 = fl("".slice);
var I0 = Math.min;
var cl = P0("endsWith");
var N0 = !cl && !!function() {
  var a3 = $0(String.prototype, "endsWith");
  return a3 && !a3.writable;
}();
E0({ target: "String", proto: true, forced: !N0 && !cl }, {
  endsWith: function(e) {
    var t = eo(A0(this));
    C0(e);
    var r = arguments.length > 1 ? arguments[1] : void 0, i = t.length, n = r === void 0 ? i : I0(w0(r), i), o = eo(e);
    return to ? to(t, o, n) : R0(t, n - o.length, n) === o;
  }
});
var M0 = Ci;
var _0 = de;
var D0 = xr;
var V0 = function(a3, e, t) {
  var r = M0(e);
  r in a3 ? _0.f(a3, r, D0(0, t)) : a3[r] = t;
};
var ro = ou;
var L0 = Pr;
var k0 = V0;
var B0 = Array;
var F0 = Math.max;
var j0 = function(a3, e, t) {
  for (var r = L0(a3), i = ro(e, r), n = ro(t === void 0 ? r : t, r), o = B0(F0(n - i, 0)), s = 0; i < n; i++, s++) k0(o, s, a3[i]);
  return o.length = s, o;
};
var U0 = Li;
var dt = Y;
var nn = k;
var z0 = qi;
var G0 = K;
var H0 = je;
var Y0 = Zu;
var ao = ge;
var X0 = mu;
var W0 = Ki;
var q0 = lt;
var Ba = pe;
var Q0 = ut;
var io = j0;
var no = Zi;
var K0 = Mr;
var Z0 = Yu;
var J0 = L;
var Qe = Z0.UNSUPPORTED_Y;
var so = 4294967295;
var eb = Math.min;
var gl = [].push;
var tb = nn(/./.exec);
var Ke = nn(gl);
var pt = nn("".slice);
var rb = !J0(function() {
  var a3 = /(?:)/, e = a3.exec;
  a3.exec = function() {
    return e.apply(this, arguments);
  };
  var t = "ab".split(a3);
  return t.length !== 2 || t[0] !== "a" || t[1] !== "b";
});
z0("split", function(a3, e, t) {
  var r;
  return "abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length ? r = function(i, n) {
    var o = Ba(ao(this)), s = n === void 0 ? so : n >>> 0;
    if (s === 0) return [];
    if (i === void 0) return [o];
    if (!Y0(i))
      return dt(e, o, i, s);
    for (var u = [], l = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), h = 0, f = new RegExp(i.source, l + "g"), c, v, d; (c = dt(K0, f, o)) && (v = f.lastIndex, !(v > h && (Ke(u, pt(o, h, c.index)), c.length > 1 && c.index < o.length && U0(gl, u, io(c, 1)), d = c[0].length, h = v, u.length >= s))); )
      f.lastIndex === c.index && f.lastIndex++;
    return h === o.length ? (d || !tb(f, "")) && Ke(u, "") : Ke(u, pt(o, h)), u.length > s ? io(u, 0, s) : u;
  } : "0".split(void 0, 0).length ? r = function(i, n) {
    return i === void 0 && n === 0 ? [] : dt(e, this, i, n);
  } : r = e, [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(n, o) {
      var s = ao(this), u = H0(n) ? void 0 : Q0(n, a3);
      return u ? dt(u, n, s, o) : dt(r, Ba(s), n, o);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(i, n) {
      var o = G0(this), s = Ba(i), u = t(r, o, s, n, r !== e);
      if (u.done) return u.value;
      var l = X0(o, RegExp), h = o.unicode, f = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Qe ? "g" : "y"), c = new l(Qe ? "^(?:" + o.source + ")" : o, f), v = n === void 0 ? so : n >>> 0;
      if (v === 0) return [];
      if (s.length === 0) return no(c, s) === null ? [s] : [];
      for (var d = 0, g = 0, p = []; g < s.length; ) {
        c.lastIndex = Qe ? 0 : g;
        var y = no(c, Qe ? pt(s, g) : s), x;
        if (y === null || (x = eb(q0(c.lastIndex + (Qe ? g : 0)), s.length)) === d)
          g = W0(s, g, h);
        else {
          if (Ke(p, pt(s, d, g)), p.length === v) return p;
          for (var b = 1; b <= y.length - 1; b++)
            if (Ke(p, y[b]), p.length === v) return p;
          g = d = x;
        }
      }
      return Ke(p, pt(s, d)), p;
    }
  ];
}, !rb, Qe);
var Dr = { exports: {} };
var bt = { exports: {} };
(function() {
  var a3, e, t, r, i, n;
  typeof performance < "u" && performance !== null && performance.now ? bt.exports = function() {
    return performance.now();
  } : typeof process < "u" && process !== null && process.hrtime ? (bt.exports = function() {
    return (a3() - i) / 1e6;
  }, e = process.hrtime, a3 = function() {
    var o;
    return o = e(), o[0] * 1e9 + o[1];
  }, r = a3(), n = process.uptime() * 1e9, i = r - n) : Date.now ? (bt.exports = function() {
    return Date.now() - t;
  }, t = Date.now()) : (bt.exports = function() {
    return (/* @__PURE__ */ new Date()).getTime() - t;
  }, t = (/* @__PURE__ */ new Date()).getTime());
}).call(Tt);
var ab = bt.exports;
var ib = ab;
var be = typeof window > "u" ? Tt : window;
var ar = ["moz", "webkit"];
var at = "AnimationFrame";
var st = be["request" + at];
var wt = be["cancel" + at] || be["cancelRequest" + at];
for (yt = 0; !st && yt < ar.length; yt++)
  st = be[ar[yt] + "Request" + at], wt = be[ar[yt] + "Cancel" + at] || be[ar[yt] + "CancelRequest" + at];
var yt;
if (!st || !wt) {
  Fa = 0, oo = 0, Me = [], nb = 1e3 / 60;
  st = function(a3) {
    if (Me.length === 0) {
      var e = ib(), t = Math.max(0, nb - (e - Fa));
      Fa = t + e, setTimeout(function() {
        var r = Me.slice(0);
        Me.length = 0;
        for (var i = 0; i < r.length; i++)
          if (!r[i].cancelled)
            try {
              r[i].callback(Fa);
            } catch (n) {
              setTimeout(function() {
                throw n;
              }, 0);
            }
      }, Math.round(t));
    }
    return Me.push({
      handle: ++oo,
      callback: a3,
      cancelled: false
    }), oo;
  }, wt = function(a3) {
    for (var e = 0; e < Me.length; e++)
      Me[e].handle === a3 && (Me[e].cancelled = true);
  };
}
var Fa;
var oo;
var Me;
var nb;
Dr.exports = function(a3) {
  return st.call(be, a3);
};
Dr.exports.cancel = function() {
  wt.apply(be, arguments);
};
Dr.exports.polyfill = function(a3) {
  a3 || (a3 = be), a3.requestAnimationFrame = st, a3.cancelAnimationFrame = wt;
};
var sb = Dr.exports;
var ja = Vo(sb);
var dl = `	
\v\f\r                　\u2028\u2029\uFEFF`;
var ob = k;
var ub = ge;
var lb = pe;
var yi = dl;
var uo = ob("".replace);
var hb = RegExp("^[" + yi + "]+");
var vb = RegExp("(^|[^" + yi + "])[" + yi + "]+$");
var Ua = function(a3) {
  return function(e) {
    var t = lb(ub(e));
    return a3 & 1 && (t = uo(t, hb, "")), a3 & 2 && (t = uo(t, vb, "$1")), t;
  };
};
var fb = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Ua(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Ua(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Ua(3)
};
var cb = wr.PROPER;
var gb = L;
var lo = dl;
var ho = "​᠎";
var db = function(a3) {
  return gb(function() {
    return !!lo[a3]() || ho[a3]() !== ho || cb && lo[a3].name !== a3;
  });
};
var pb = ee;
var yb = fb.trim;
var mb = db;
pb({ target: "String", proto: true, forced: mb("trim") }, {
  trim: function() {
    return yb(this);
  }
});
var bb = function(a3) {
  this.ok = false, this.alpha = 1, a3.charAt(0) == "#" && (a3 = a3.substr(1, 6)), a3 = a3.replace(/ /g, ""), a3 = a3.toLowerCase();
  var e = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  a3 = e[a3] || a3;
  for (var t = [
    {
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3]),
          parseFloat(u[4])
        ];
      }
    },
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3])
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(u) {
        return [
          parseInt(u[1], 16),
          parseInt(u[2], 16),
          parseInt(u[3], 16)
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(u) {
        return [
          parseInt(u[1] + u[1], 16),
          parseInt(u[2] + u[2], 16),
          parseInt(u[3] + u[3], 16)
        ];
      }
    }
  ], r = 0; r < t.length; r++) {
    var i = t[r].re, n = t[r].process, o = i.exec(a3);
    if (o) {
      var s = n(o);
      this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = true;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toRGBA = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
  }, this.toHex = function() {
    var u = this.r.toString(16), l = this.g.toString(16), h = this.b.toString(16);
    return u.length == 1 && (u = "0" + u), l.length == 1 && (l = "0" + l), h.length == 1 && (h = "0" + h), "#" + u + l + h;
  }, this.getHelpXML = function() {
    for (var u = new Array(), l = 0; l < t.length; l++)
      for (var h = t[l].example, f = 0; f < h.length; f++)
        u[u.length] = h[f];
    for (var c in e)
      u[u.length] = c;
    var v = document.createElement("ul");
    v.setAttribute("id", "rgbcolor-examples");
    for (var l = 0; l < u.length; l++)
      try {
        var d = document.createElement("li"), g = new RGBColor(u[l]), p = document.createElement("div");
        p.style.cssText = "margin: 3px; border: 1px solid black; background:" + g.toHex() + "; color:" + g.toHex(), p.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(
          " " + u[l] + " -> " + g.toRGB() + " -> " + g.toHex()
        );
        d.appendChild(p), d.appendChild(y), v.appendChild(d);
      } catch {
      }
    return v;
  };
};
var mi = Vo(bb);
var xb = ee;
var Tb = It;
var Sb = uu.indexOf;
var Ob = vl;
var bi = Tb([].indexOf);
var pl = !!bi && 1 / bi([1], 1, -0) < 0;
var Eb = pl || !Ob("indexOf");
xb({ target: "Array", proto: true, forced: Eb }, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return pl ? bi(this, e, t) || 0 : Sb(this, e, t);
  }
});
var $b = ee;
var wb = k;
var Cb = en;
var Ab = ge;
var vo = pe;
var Pb = tn;
var Rb = wb("".indexOf);
$b({ target: "String", proto: true, forced: !Pb("includes") }, {
  includes: function(e) {
    return !!~Rb(
      vo(Ab(this)),
      vo(Cb(e)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var Ib = Fe;
var Nb = Array.isArray || function(e) {
  return Ib(e) == "Array";
};
var Mb = ee;
var _b = k;
var Db = Nb;
var Vb = _b([].reverse);
var fo = [1, 2];
Mb({ target: "Array", proto: true, forced: String(fo) === String(fo.reverse()) }, {
  reverse: function() {
    return Db(this) && (this.length = this.length), Vb(this);
  }
});
var yl = function(a3, e) {
  return (yl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  })(a3, e);
};
function ml(a3, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function t() {
    this.constructor = a3;
  }
  yl(a3, e), a3.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function Lb(a3) {
  var e = "";
  Array.isArray(a3) || (a3 = [a3]);
  for (var t = 0; t < a3.length; t++) {
    var r = a3[t];
    if (r.type === m.CLOSE_PATH) e += "z";
    else if (r.type === m.HORIZ_LINE_TO) e += (r.relative ? "h" : "H") + r.x;
    else if (r.type === m.VERT_LINE_TO) e += (r.relative ? "v" : "V") + r.y;
    else if (r.type === m.MOVE_TO) e += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === m.LINE_TO) e += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === m.CURVE_TO) e += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_CURVE_TO) e += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.QUAD_TO) e += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_QUAD_TO) e += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== m.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + t + ".");
      e += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return e;
}
function xi(a3, e) {
  var t = a3[0], r = a3[1];
  return [t * Math.cos(e) - r * Math.sin(e), t * Math.sin(e) + r * Math.cos(e)];
}
function oe() {
  for (var a3 = [], e = 0; e < arguments.length; e++) a3[e] = arguments[e];
  for (var t = 0; t < a3.length; t++) if (typeof a3[t] != "number") throw new Error("assertNumbers arguments[" + t + "] is not a number. " + typeof a3[t] + " == typeof " + a3[t]);
  return true;
}
var Ee = Math.PI;
function za(a3, e, t) {
  a3.lArcFlag = a3.lArcFlag === 0 ? 0 : 1, a3.sweepFlag = a3.sweepFlag === 0 ? 0 : 1;
  var r = a3.rX, i = a3.rY, n = a3.x, o = a3.y;
  r = Math.abs(a3.rX), i = Math.abs(a3.rY);
  var s = xi([(e - n) / 2, (t - o) / 2], -a3.xRot / 180 * Ee), u = s[0], l = s[1], h = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(l, 2) / Math.pow(i, 2);
  1 < h && (r *= Math.sqrt(h), i *= Math.sqrt(h)), a3.rX = r, a3.rY = i;
  var f = Math.pow(r, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(u, 2), c = (a3.lArcFlag !== a3.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(i, 2) - f) / f)), v = r * l / i * c, d = -i * u / r * c, g = xi([v, d], a3.xRot / 180 * Ee);
  a3.cX = g[0] + (e + n) / 2, a3.cY = g[1] + (t + o) / 2, a3.phi1 = Math.atan2((l - d) / i, (u - v) / r), a3.phi2 = Math.atan2((-l - d) / i, (-u - v) / r), a3.sweepFlag === 0 && a3.phi2 > a3.phi1 && (a3.phi2 -= 2 * Ee), a3.sweepFlag === 1 && a3.phi2 < a3.phi1 && (a3.phi2 += 2 * Ee), a3.phi1 *= 180 / Ee, a3.phi2 *= 180 / Ee;
}
function co(a3, e, t) {
  oe(a3, e, t);
  var r = a3 * a3 + e * e - t * t;
  if (0 > r) return [];
  if (r === 0) return [[a3 * t / (a3 * a3 + e * e), e * t / (a3 * a3 + e * e)]];
  var i = Math.sqrt(r);
  return [[(a3 * t + e * i) / (a3 * a3 + e * e), (e * t - a3 * i) / (a3 * a3 + e * e)], [(a3 * t - e * i) / (a3 * a3 + e * e), (e * t + a3 * i) / (a3 * a3 + e * e)]];
}
var j;
var ye = Math.PI / 180;
function go(a3, e, t) {
  return (1 - t) * a3 + t * e;
}
function po(a3, e, t, r) {
  return a3 + Math.cos(r / 180 * Ee) * e + Math.sin(r / 180 * Ee) * t;
}
function yo(a3, e, t, r) {
  var i = 1e-6, n = e - a3, o = t - e, s = 3 * n + 3 * (r - t) - 6 * o, u = 6 * (o - n), l = 3 * n;
  return Math.abs(s) < i ? [-l / u] : function(h, f, c) {
    var v = h * h / 4 - f;
    if (v < -c) return [];
    if (v <= c) return [-h / 2];
    var d = Math.sqrt(v);
    return [-h / 2 - d, -h / 2 + d];
  }(u / s, l / s, i);
}
function mo(a3, e, t, r, i) {
  var n = 1 - i;
  return a3 * (n * n * n) + e * (3 * n * n * i) + t * (3 * n * i * i) + r * (i * i * i);
}
(function(a3) {
  function e() {
    return i(function(s, u, l) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += u), s.y1 !== void 0 && (s.y1 += l), s.x2 !== void 0 && (s.x2 += u), s.y2 !== void 0 && (s.y2 += l), s.x !== void 0 && (s.x += u), s.y !== void 0 && (s.y += l), s.relative = false), s;
    });
  }
  function t() {
    var s = NaN, u = NaN, l = NaN, h = NaN;
    return i(function(f, c, v) {
      return f.type & m.SMOOTH_CURVE_TO && (f.type = m.CURVE_TO, s = isNaN(s) ? c : s, u = isNaN(u) ? v : u, f.x1 = f.relative ? c - s : 2 * c - s, f.y1 = f.relative ? v - u : 2 * v - u), f.type & m.CURVE_TO ? (s = f.relative ? c + f.x2 : f.x2, u = f.relative ? v + f.y2 : f.y2) : (s = NaN, u = NaN), f.type & m.SMOOTH_QUAD_TO && (f.type = m.QUAD_TO, l = isNaN(l) ? c : l, h = isNaN(h) ? v : h, f.x1 = f.relative ? c - l : 2 * c - l, f.y1 = f.relative ? v - h : 2 * v - h), f.type & m.QUAD_TO ? (l = f.relative ? c + f.x1 : f.x1, h = f.relative ? v + f.y1 : f.y1) : (l = NaN, h = NaN), f;
    });
  }
  function r() {
    var s = NaN, u = NaN;
    return i(function(l, h, f) {
      if (l.type & m.SMOOTH_QUAD_TO && (l.type = m.QUAD_TO, s = isNaN(s) ? h : s, u = isNaN(u) ? f : u, l.x1 = l.relative ? h - s : 2 * h - s, l.y1 = l.relative ? f - u : 2 * f - u), l.type & m.QUAD_TO) {
        s = l.relative ? h + l.x1 : l.x1, u = l.relative ? f + l.y1 : l.y1;
        var c = l.x1, v = l.y1;
        l.type = m.CURVE_TO, l.x1 = ((l.relative ? 0 : h) + 2 * c) / 3, l.y1 = ((l.relative ? 0 : f) + 2 * v) / 3, l.x2 = (l.x + 2 * c) / 3, l.y2 = (l.y + 2 * v) / 3;
      } else s = NaN, u = NaN;
      return l;
    });
  }
  function i(s) {
    var u = 0, l = 0, h = NaN, f = NaN;
    return function(c) {
      if (isNaN(h) && !(c.type & m.MOVE_TO)) throw new Error("path must start with moveto");
      var v = s(c, u, l, h, f);
      return c.type & m.CLOSE_PATH && (u = h, l = f), c.x !== void 0 && (u = c.relative ? u + c.x : c.x), c.y !== void 0 && (l = c.relative ? l + c.y : c.y), c.type & m.MOVE_TO && (h = u, f = l), v;
    };
  }
  function n(s, u, l, h, f, c) {
    return oe(s, u, l, h, f, c), i(function(v, d, g, p) {
      var y = v.x1, x = v.x2, b = v.relative && !isNaN(p), T = v.x !== void 0 ? v.x : b ? 0 : d, $ = v.y !== void 0 ? v.y : b ? 0 : g;
      function E(ne) {
        return ne * ne;
      }
      v.type & m.HORIZ_LINE_TO && u !== 0 && (v.type = m.LINE_TO, v.y = v.relative ? 0 : g), v.type & m.VERT_LINE_TO && l !== 0 && (v.type = m.LINE_TO, v.x = v.relative ? 0 : d), v.x !== void 0 && (v.x = v.x * s + $ * l + (b ? 0 : f)), v.y !== void 0 && (v.y = T * u + v.y * h + (b ? 0 : c)), v.x1 !== void 0 && (v.x1 = v.x1 * s + v.y1 * l + (b ? 0 : f)), v.y1 !== void 0 && (v.y1 = y * u + v.y1 * h + (b ? 0 : c)), v.x2 !== void 0 && (v.x2 = v.x2 * s + v.y2 * l + (b ? 0 : f)), v.y2 !== void 0 && (v.y2 = x * u + v.y2 * h + (b ? 0 : c));
      var S = s * h - u * l;
      if (v.xRot !== void 0 && (s !== 1 || u !== 0 || l !== 0 || h !== 1)) if (S === 0) delete v.rX, delete v.rY, delete v.xRot, delete v.lArcFlag, delete v.sweepFlag, v.type = m.LINE_TO;
      else {
        var C = v.xRot * Math.PI / 180, N = Math.sin(C), _ = Math.cos(C), B = 1 / E(v.rX), P = 1 / E(v.rY), X = E(_) * B + E(N) * P, W = 2 * N * _ * (B - P), z = E(N) * B + E(_) * P, q = X * h * h - W * u * h + z * u * u, H = W * (s * h + u * l) - 2 * (X * l * h + z * s * u), Q = X * l * l - W * s * l + z * s * s, R = (Math.atan2(H, q - Q) + Math.PI) % Math.PI / 2, M = Math.sin(R), Z = Math.cos(R);
        v.rX = Math.abs(S) / Math.sqrt(q * E(Z) + H * M * Z + Q * E(M)), v.rY = Math.abs(S) / Math.sqrt(q * E(M) - H * M * Z + Q * E(Z)), v.xRot = 180 * R / Math.PI;
      }
      return v.sweepFlag !== void 0 && 0 > S && (v.sweepFlag = +!v.sweepFlag), v;
    });
  }
  function o() {
    return function(s) {
      var u = {};
      for (var l in s) u[l] = s[l];
      return u;
    };
  }
  a3.ROUND = function(s) {
    function u(l) {
      return Math.round(l * s) / s;
    }
    return s === void 0 && (s = 1e13), oe(s), function(l) {
      return l.x1 !== void 0 && (l.x1 = u(l.x1)), l.y1 !== void 0 && (l.y1 = u(l.y1)), l.x2 !== void 0 && (l.x2 = u(l.x2)), l.y2 !== void 0 && (l.y2 = u(l.y2)), l.x !== void 0 && (l.x = u(l.x)), l.y !== void 0 && (l.y = u(l.y)), l.rX !== void 0 && (l.rX = u(l.rX)), l.rY !== void 0 && (l.rY = u(l.rY)), l;
    };
  }, a3.TO_ABS = e, a3.TO_REL = function() {
    return i(function(s, u, l) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= l), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= l), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= l), s.relative = true), s;
    });
  }, a3.NORMALIZE_HVZ = function(s, u, l) {
    return s === void 0 && (s = true), u === void 0 && (u = true), l === void 0 && (l = true), i(function(h, f, c, v, d) {
      if (isNaN(v) && !(h.type & m.MOVE_TO)) throw new Error("path must start with moveto");
      return u && h.type & m.HORIZ_LINE_TO && (h.type = m.LINE_TO, h.y = h.relative ? 0 : c), l && h.type & m.VERT_LINE_TO && (h.type = m.LINE_TO, h.x = h.relative ? 0 : f), s && h.type & m.CLOSE_PATH && (h.type = m.LINE_TO, h.x = h.relative ? v - f : v, h.y = h.relative ? d - c : d), h.type & m.ARC && (h.rX === 0 || h.rY === 0) && (h.type = m.LINE_TO, delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag), h;
    });
  }, a3.NORMALIZE_ST = t, a3.QT_TO_C = r, a3.INFO = i, a3.SANITIZE = function(s) {
    s === void 0 && (s = 0), oe(s);
    var u = NaN, l = NaN, h = NaN, f = NaN;
    return i(function(c, v, d, g, p) {
      var y = Math.abs, x = false, b = 0, T = 0;
      if (c.type & m.SMOOTH_CURVE_TO && (b = isNaN(u) ? 0 : v - u, T = isNaN(l) ? 0 : d - l), c.type & (m.CURVE_TO | m.SMOOTH_CURVE_TO) ? (u = c.relative ? v + c.x2 : c.x2, l = c.relative ? d + c.y2 : c.y2) : (u = NaN, l = NaN), c.type & m.SMOOTH_QUAD_TO ? (h = isNaN(h) ? v : 2 * v - h, f = isNaN(f) ? d : 2 * d - f) : c.type & m.QUAD_TO ? (h = c.relative ? v + c.x1 : c.x1, f = c.relative ? d + c.y1 : c.y2) : (h = NaN, f = NaN), c.type & m.LINE_COMMANDS || c.type & m.ARC && (c.rX === 0 || c.rY === 0 || !c.lArcFlag) || c.type & m.CURVE_TO || c.type & m.SMOOTH_CURVE_TO || c.type & m.QUAD_TO || c.type & m.SMOOTH_QUAD_TO) {
        var $ = c.x === void 0 ? 0 : c.relative ? c.x : c.x - v, E = c.y === void 0 ? 0 : c.relative ? c.y : c.y - d;
        b = isNaN(h) ? c.x1 === void 0 ? b : c.relative ? c.x : c.x1 - v : h - v, T = isNaN(f) ? c.y1 === void 0 ? T : c.relative ? c.y : c.y1 - d : f - d;
        var S = c.x2 === void 0 ? 0 : c.relative ? c.x : c.x2 - v, C = c.y2 === void 0 ? 0 : c.relative ? c.y : c.y2 - d;
        y($) <= s && y(E) <= s && y(b) <= s && y(T) <= s && y(S) <= s && y(C) <= s && (x = true);
      }
      return c.type & m.CLOSE_PATH && y(v - g) <= s && y(d - p) <= s && (x = true), x ? [] : c;
    });
  }, a3.MATRIX = n, a3.ROTATE = function(s, u, l) {
    u === void 0 && (u = 0), l === void 0 && (l = 0), oe(s, u, l);
    var h = Math.sin(s), f = Math.cos(s);
    return n(f, h, -h, f, u - u * f + l * h, l - u * h - l * f);
  }, a3.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), oe(s, u), n(1, 0, 0, 1, s, u);
  }, a3.SCALE = function(s, u) {
    return u === void 0 && (u = s), oe(s, u), n(s, 0, 0, u, 0, 0);
  }, a3.SKEW_X = function(s) {
    return oe(s), n(1, 0, Math.atan(s), 1, 0, 0);
  }, a3.SKEW_Y = function(s) {
    return oe(s), n(1, Math.atan(s), 0, 1, 0, 0);
  }, a3.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), oe(s), n(-1, 0, 0, 1, s, 0);
  }, a3.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), oe(s), n(1, 0, 0, -1, 0, s);
  }, a3.A_TO_C = function() {
    return i(function(s, u, l) {
      return m.ARC === s.type ? function(h, f, c) {
        var v, d, g, p;
        h.cX || za(h, f, c);
        for (var y = Math.min(h.phi1, h.phi2), x = Math.max(h.phi1, h.phi2) - y, b = Math.ceil(x / 90), T = new Array(b), $ = f, E = c, S = 0; S < b; S++) {
          var C = go(h.phi1, h.phi2, S / b), N = go(h.phi1, h.phi2, (S + 1) / b), _ = N - C, B = 4 / 3 * Math.tan(_ * ye / 4), P = [Math.cos(C * ye) - B * Math.sin(C * ye), Math.sin(C * ye) + B * Math.cos(C * ye)], X = P[0], W = P[1], z = [Math.cos(N * ye), Math.sin(N * ye)], q = z[0], H = z[1], Q = [q + B * Math.sin(N * ye), H - B * Math.cos(N * ye)], R = Q[0], M = Q[1];
          T[S] = { relative: h.relative, type: m.CURVE_TO };
          var Z = function(ne, ve) {
            var Oe = xi([ne * h.rX, ve * h.rY], h.xRot), He = Oe[0], Dt = Oe[1];
            return [h.cX + He, h.cY + Dt];
          };
          v = Z(X, W), T[S].x1 = v[0], T[S].y1 = v[1], d = Z(R, M), T[S].x2 = d[0], T[S].y2 = d[1], g = Z(q, H), T[S].x = g[0], T[S].y = g[1], h.relative && (T[S].x1 -= $, T[S].y1 -= E, T[S].x2 -= $, T[S].y2 -= E, T[S].x -= $, T[S].y -= E), $ = (p = [T[S].x, T[S].y])[0], E = p[1];
        }
        return T;
      }(s, s.relative ? 0 : u, s.relative ? 0 : l) : s;
    });
  }, a3.ANNOTATE_ARCS = function() {
    return i(function(s, u, l) {
      return s.relative && (u = 0, l = 0), m.ARC === s.type && za(s, u, l), s;
    });
  }, a3.CLONE = o, a3.CALCULATE_BOUNDS = function() {
    var s = function(c) {
      var v = {};
      for (var d in c) v[d] = c[d];
      return v;
    }, u = e(), l = r(), h = t(), f = i(function(c, v, d) {
      var g = h(l(u(s(c))));
      function p(M) {
        M > f.maxX && (f.maxX = M), M < f.minX && (f.minX = M);
      }
      function y(M) {
        M > f.maxY && (f.maxY = M), M < f.minY && (f.minY = M);
      }
      if (g.type & m.DRAWING_COMMANDS && (p(v), y(d)), g.type & m.HORIZ_LINE_TO && p(g.x), g.type & m.VERT_LINE_TO && y(g.y), g.type & m.LINE_TO && (p(g.x), y(g.y)), g.type & m.CURVE_TO) {
        p(g.x), y(g.y);
        for (var x = 0, b = yo(v, g.x1, g.x2, g.x); x < b.length; x++)
          0 < (R = b[x]) && 1 > R && p(mo(v, g.x1, g.x2, g.x, R));
        for (var T = 0, $ = yo(d, g.y1, g.y2, g.y); T < $.length; T++)
          0 < (R = $[T]) && 1 > R && y(mo(d, g.y1, g.y2, g.y, R));
      }
      if (g.type & m.ARC) {
        p(g.x), y(g.y), za(g, v, d);
        for (var E = g.xRot / 180 * Math.PI, S = Math.cos(E) * g.rX, C = Math.sin(E) * g.rX, N = -Math.sin(E) * g.rY, _ = Math.cos(E) * g.rY, B = g.phi1 < g.phi2 ? [g.phi1, g.phi2] : -180 > g.phi2 ? [g.phi2 + 360, g.phi1 + 360] : [g.phi2, g.phi1], P = B[0], X = B[1], W = function(M) {
          var Z = M[0], ne = M[1], ve = 180 * Math.atan2(ne, Z) / Math.PI;
          return ve < P ? ve + 360 : ve;
        }, z = 0, q = co(N, -S, 0).map(W); z < q.length; z++)
          (R = q[z]) > P && R < X && p(po(g.cX, S, N, R));
        for (var H = 0, Q = co(_, -C, 0).map(W); H < Q.length; H++) {
          var R;
          (R = Q[H]) > P && R < X && y(po(g.cY, C, _, R));
        }
      }
      return c;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(j || (j = {}));
var se;
var bl = function() {
  function a3() {
  }
  return a3.prototype.round = function(e) {
    return this.transform(j.ROUND(e));
  }, a3.prototype.toAbs = function() {
    return this.transform(j.TO_ABS());
  }, a3.prototype.toRel = function() {
    return this.transform(j.TO_REL());
  }, a3.prototype.normalizeHVZ = function(e, t, r) {
    return this.transform(j.NORMALIZE_HVZ(e, t, r));
  }, a3.prototype.normalizeST = function() {
    return this.transform(j.NORMALIZE_ST());
  }, a3.prototype.qtToC = function() {
    return this.transform(j.QT_TO_C());
  }, a3.prototype.aToC = function() {
    return this.transform(j.A_TO_C());
  }, a3.prototype.sanitize = function(e) {
    return this.transform(j.SANITIZE(e));
  }, a3.prototype.translate = function(e, t) {
    return this.transform(j.TRANSLATE(e, t));
  }, a3.prototype.scale = function(e, t) {
    return this.transform(j.SCALE(e, t));
  }, a3.prototype.rotate = function(e, t, r) {
    return this.transform(j.ROTATE(e, t, r));
  }, a3.prototype.matrix = function(e, t, r, i, n, o) {
    return this.transform(j.MATRIX(e, t, r, i, n, o));
  }, a3.prototype.skewX = function(e) {
    return this.transform(j.SKEW_X(e));
  }, a3.prototype.skewY = function(e) {
    return this.transform(j.SKEW_Y(e));
  }, a3.prototype.xSymmetry = function(e) {
    return this.transform(j.X_AXIS_SYMMETRY(e));
  }, a3.prototype.ySymmetry = function(e) {
    return this.transform(j.Y_AXIS_SYMMETRY(e));
  }, a3.prototype.annotateArcs = function() {
    return this.transform(j.ANNOTATE_ARCS());
  }, a3;
}();
var kb = function(a3) {
  return a3 === " " || a3 === "	" || a3 === "\r" || a3 === `
`;
};
var bo = function(a3) {
  return 48 <= a3.charCodeAt(0) && a3.charCodeAt(0) <= 57;
};
var Bb = function(a3) {
  function e() {
    var t = a3.call(this) || this;
    return t.curNumber = "", t.curCommandType = -1, t.curCommandRelative = false, t.canParseCommandOrComma = true, t.curNumberHasExp = false, t.curNumberHasExpDigits = false, t.curNumberHasDecimal = false, t.curArgs = [], t;
  }
  return ml(e, a3), e.prototype.finish = function(t) {
    if (t === void 0 && (t = []), this.parse(" ", t), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return t;
  }, e.prototype.parse = function(t, r) {
    var i = this;
    r === void 0 && (r = []);
    for (var n = function(f) {
      r.push(f), i.curArgs.length = 0, i.canParseCommandOrComma = true;
    }, o = 0; o < t.length; o++) {
      var s = t[o], u = !(this.curCommandType !== m.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), l = bo(s) && (this.curNumber === "0" && s === "0" || u);
      if (!bo(s) || l) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var h = Number(this.curNumber);
          if (isNaN(h)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === m.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > h) throw new SyntaxError('Expected positive number, got "' + h + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(h), this.curArgs.length === Fb[this.curCommandType] && (m.HORIZ_LINE_TO === this.curCommandType ? n({ type: m.HORIZ_LINE_TO, relative: this.curCommandRelative, x: h }) : m.VERT_LINE_TO === this.curCommandType ? n({ type: m.VERT_LINE_TO, relative: this.curCommandRelative, y: h }) : this.curCommandType === m.MOVE_TO || this.curCommandType === m.LINE_TO || this.curCommandType === m.SMOOTH_QUAD_TO ? (n({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), m.MOVE_TO === this.curCommandType && (this.curCommandType = m.LINE_TO)) : this.curCommandType === m.CURVE_TO ? n({ type: m.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === m.SMOOTH_CURVE_TO ? n({ type: m.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === m.QUAD_TO ? n({ type: m.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === m.ARC && n({ type: m.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = false, this.curNumberHasExp = false, this.curNumberHasDecimal = false, this.canParseCommandOrComma = true;
        }
        if (!kb(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = false;
        else if (s !== "+" && s !== "-" && s !== ".") if (l) this.curNumber = s, this.curNumberHasDecimal = false;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + o + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = false, s !== "z" && s !== "Z") if (s === "h" || s === "H") this.curCommandType = m.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
          else if (s === "v" || s === "V") this.curCommandType = m.VERT_LINE_TO, this.curCommandRelative = s === "v";
          else if (s === "m" || s === "M") this.curCommandType = m.MOVE_TO, this.curCommandRelative = s === "m";
          else if (s === "l" || s === "L") this.curCommandType = m.LINE_TO, this.curCommandRelative = s === "l";
          else if (s === "c" || s === "C") this.curCommandType = m.CURVE_TO, this.curCommandRelative = s === "c";
          else if (s === "s" || s === "S") this.curCommandType = m.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
          else if (s === "q" || s === "Q") this.curCommandType = m.QUAD_TO, this.curCommandRelative = s === "q";
          else if (s === "t" || s === "T") this.curCommandType = m.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
          else {
            if (s !== "a" && s !== "A") throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ".");
            this.curCommandType = m.ARC, this.curCommandRelative = s === "a";
          }
          else r.push({ type: m.CLOSE_PATH }), this.canParseCommandOrComma = true, this.curCommandType = -1;
        }
        else this.curNumber = s, this.curNumberHasDecimal = s === ".";
      } else this.curNumber += s, this.curNumberHasDecimal = true;
      else this.curNumber += s;
      else this.curNumber += s, this.curNumberHasExp = true;
      else this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, e.prototype.transform = function(t) {
    return Object.create(this, { parse: { value: function(r, i) {
      i === void 0 && (i = []);
      for (var n = 0, o = Object.getPrototypeOf(this).parse.call(this, r); n < o.length; n++) {
        var s = o[n], u = t(s);
        Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
      }
      return i;
    } } });
  }, e;
}(bl);
var m = function(a3) {
  function e(t) {
    var r = a3.call(this) || this;
    return r.commands = typeof t == "string" ? e.parse(t) : t, r;
  }
  return ml(e, a3), e.prototype.encode = function() {
    return e.encode(this.commands);
  }, e.prototype.getBounds = function() {
    var t = j.CALCULATE_BOUNDS();
    return this.transform(t), t;
  }, e.prototype.transform = function(t) {
    for (var r = [], i = 0, n = this.commands; i < n.length; i++) {
      var o = t(n[i]);
      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
    }
    return this.commands = r, this;
  }, e.encode = function(t) {
    return Lb(t);
  }, e.parse = function(t) {
    var r = new Bb(), i = [];
    return r.parse(t, i), r.finish(i), i;
  }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e;
}(bl);
var Fb = ((se = {})[m.MOVE_TO] = 2, se[m.LINE_TO] = 2, se[m.HORIZ_LINE_TO] = 1, se[m.VERT_LINE_TO] = 1, se[m.CLOSE_PATH] = 0, se[m.QUAD_TO] = 4, se[m.SMOOTH_QUAD_TO] = 2, se[m.CURVE_TO] = 6, se[m.SMOOTH_CURVE_TO] = 4, se[m.ARC] = 7, se);
var jb = Y;
var Ub = le;
var zb = Tr;
var Gb = Hu;
var xo = RegExp.prototype;
var Hb = function(a3) {
  var e = a3.flags;
  return e === void 0 && !("flags" in xo) && !Ub(a3, "flags") && zb(xo, a3) ? jb(Gb, a3) : e;
};
var Yb = wr.PROPER;
var Xb = ze;
var Wb = K;
var To = pe;
var qb = L;
var Qb = Hb;
var sn = "toString";
var Kb = RegExp.prototype;
var xl = Kb[sn];
var Zb = qb(function() {
  return xl.call({ source: "a", flags: "b" }) != "/a/b";
});
var Jb = Yb && xl.name != sn;
(Zb || Jb) && Xb(RegExp.prototype, sn, function() {
  var e = Wb(this), t = To(e.source), r = To(Qb(e));
  return "/" + t + "/" + r;
}, { unsafe: true });
function fr(a3) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fr = function(e) {
    return typeof e;
  } : fr = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fr(a3);
}
function e1(a3, e) {
  if (!(a3 instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var t1 = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var r1 = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function a1(a3, e, t, r, i) {
  if (typeof a3 == "string" && (a3 = document.getElementById(a3)), !a3 || fr(a3) !== "object" || !("getContext" in a3))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var n = a3.getContext("2d");
  try {
    return n.getImageData(e, t, r, i);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function i1(a3, e, t, r, i, n) {
  if (!(isNaN(n) || n < 1)) {
    n |= 0;
    var o = a1(a3, e, t, r, i);
    o = n1(o, e, t, r, i, n), a3.getContext("2d").putImageData(o, e, t);
  }
}
function n1(a3, e, t, r, i, n) {
  for (var o = a3.data, s = 2 * n + 1, u = r - 1, l = i - 1, h = n + 1, f = h * (h + 1) / 2, c = new So(), v = c, d, g = 1; g < s; g++)
    v = v.next = new So(), g === h && (d = v);
  v.next = c;
  for (var p = null, y = null, x = 0, b = 0, T = t1[n], $ = r1[n], E = 0; E < i; E++) {
    v = c;
    for (var S = o[b], C = o[b + 1], N = o[b + 2], _ = o[b + 3], B = 0; B < h; B++)
      v.r = S, v.g = C, v.b = N, v.a = _, v = v.next;
    for (var P = 0, X = 0, W = 0, z = 0, q = h * S, H = h * C, Q = h * N, R = h * _, M = f * S, Z = f * C, ne = f * N, ve = f * _, Oe = 1; Oe < h; Oe++) {
      var He = b + ((u < Oe ? u : Oe) << 2), Dt = o[He], ln = o[He + 1], hn = o[He + 2], vn = o[He + 3], Vt = h - Oe;
      M += (v.r = Dt) * Vt, Z += (v.g = ln) * Vt, ne += (v.b = hn) * Vt, ve += (v.a = vn) * Vt, P += Dt, X += ln, W += hn, z += vn, v = v.next;
    }
    p = c, y = d;
    for (var Fr = 0; Fr < r; Fr++) {
      var jr = ve * T >> $;
      if (o[b + 3] = jr, jr !== 0) {
        var Ur = 255 / jr;
        o[b] = (M * T >> $) * Ur, o[b + 1] = (Z * T >> $) * Ur, o[b + 2] = (ne * T >> $) * Ur;
      } else
        o[b] = o[b + 1] = o[b + 2] = 0;
      M -= q, Z -= H, ne -= Q, ve -= R, q -= p.r, H -= p.g, Q -= p.b, R -= p.a;
      var Ae = Fr + n + 1;
      Ae = x + (Ae < u ? Ae : u) << 2, P += p.r = o[Ae], X += p.g = o[Ae + 1], W += p.b = o[Ae + 2], z += p.a = o[Ae + 3], M += P, Z += X, ne += W, ve += z, p = p.next;
      var Lt = y, fn = Lt.r, cn = Lt.g, gn = Lt.b, dn = Lt.a;
      q += fn, H += cn, Q += gn, R += dn, P -= fn, X -= cn, W -= gn, z -= dn, y = y.next, b += 4;
    }
    x += r;
  }
  for (var Ye = 0; Ye < r; Ye++) {
    b = Ye << 2;
    var Pe = o[b], Re = o[b + 1], Ie = o[b + 2], te = o[b + 3], zr = h * Pe, Gr = h * Re, Hr = h * Ie, Yr = h * te, kt = f * Pe, Bt = f * Re, Ft = f * Ie, jt = f * te;
    v = c;
    for (var pn = 0; pn < h; pn++)
      v.r = Pe, v.g = Re, v.b = Ie, v.a = te, v = v.next;
    for (var yn = r, Xr = 0, Wr = 0, qr = 0, Qr = 0, Ut = 1; Ut <= n; Ut++) {
      b = yn + Ye << 2;
      var zt = h - Ut;
      kt += (v.r = Pe = o[b]) * zt, Bt += (v.g = Re = o[b + 1]) * zt, Ft += (v.b = Ie = o[b + 2]) * zt, jt += (v.a = te = o[b + 3]) * zt, Qr += Pe, Xr += Re, Wr += Ie, qr += te, v = v.next, Ut < l && (yn += r);
    }
    b = Ye, p = c, y = d;
    for (var Kr = 0; Kr < i; Kr++) {
      var re = b << 2;
      o[re + 3] = te = jt * T >> $, te > 0 ? (te = 255 / te, o[re] = (kt * T >> $) * te, o[re + 1] = (Bt * T >> $) * te, o[re + 2] = (Ft * T >> $) * te) : o[re] = o[re + 1] = o[re + 2] = 0, kt -= zr, Bt -= Gr, Ft -= Hr, jt -= Yr, zr -= p.r, Gr -= p.g, Hr -= p.b, Yr -= p.a, re = Ye + ((re = Kr + h) < l ? re : l) * r << 2, kt += Qr += p.r = o[re], Bt += Xr += p.g = o[re + 1], Ft += Wr += p.b = o[re + 2], jt += qr += p.a = o[re + 3], p = p.next, zr += Pe = y.r, Gr += Re = y.g, Hr += Ie = y.b, Yr += te = y.a, Qr -= Pe, Xr -= Re, Wr -= Ie, qr -= te, y = y.next, b += r;
    }
  }
  return a3;
}
var So = (
  /**
   * Set properties.
   */
  function a() {
    e1(this, a), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function s1() {
  var {
    DOMParser: a3
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: a3,
    createCanvas(t, r) {
      return new OffscreenCanvas(t, r);
    },
    createImage(t) {
      return xe(function* () {
        var r = yield fetch(t), i = yield r.blob(), n = yield createImageBitmap(i);
        return n;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof a3 > "u") && Reflect.deleteProperty(e, "DOMParser"), e;
}
function o1(a3) {
  var {
    DOMParser: e,
    canvas: t,
    fetch: r
  } = a3;
  return {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: e,
    fetch: r,
    createCanvas: t.createCanvas,
    createImage: t.loadImage
  };
}
var b2 = Object.freeze({
  __proto__: null,
  offscreen: s1,
  node: o1
});
function vt(a3) {
  return a3.replace(/(?!\u3000)\s+/gm, " ");
}
function u1(a3) {
  return a3.replace(/^[\n \t]+/, "");
}
function l1(a3) {
  return a3.replace(/[\n \t]+$/, "");
}
function ie(a3) {
  var e = (a3 || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return e.map(parseFloat);
}
var h1 = /^[A-Z-]+$/;
function v1(a3) {
  return h1.test(a3) ? a3.toLowerCase() : a3;
}
function Tl(a3) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(a3) || [];
  return e[2] || e[3] || e[4];
}
function f1(a3) {
  if (!a3.startsWith("rgb"))
    return a3;
  var e = 3, t = a3.replace(/\d+(\.\d+)?/g, (r, i) => e-- && i ? String(Math.round(parseFloat(r))) : r);
  return t;
}
var c1 = /(\[[^\]]+\])/g;
var g1 = /(#[^\s+>~.[:]+)/g;
var d1 = /(\.[^\s+>~.[:]+)/g;
var p1 = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var y1 = /(:[\w-]+\([^)]*\))/gi;
var m1 = /(:[^\s+>~.[:]+)/g;
var b1 = /([^\s+>~.[:]+)/g;
function _e(a3, e) {
  var t = e.exec(a3);
  return t ? [a3.replace(e, " "), t.length] : [a3, 0];
}
function x1(a3) {
  var e = [0, 0, 0], t = a3.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [t, r] = _e(t, c1), e[1] += r, [t, r] = _e(t, g1), e[0] += r, [t, r] = _e(t, d1), e[1] += r, [t, r] = _e(t, p1), e[2] += r, [t, r] = _e(t, y1), e[1] += r, [t, r] = _e(t, m1), e[1] += r, t = t.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [t, r] = _e(t, b1), e[2] += r, e.join("");
}
var it = 1e-8;
function Oo(a3) {
  return Math.sqrt(Math.pow(a3[0], 2) + Math.pow(a3[1], 2));
}
function Ti(a3, e) {
  return (a3[0] * e[0] + a3[1] * e[1]) / (Oo(a3) * Oo(e));
}
function Eo(a3, e) {
  return (a3[0] * e[1] < a3[1] * e[0] ? -1 : 1) * Math.acos(Ti(a3, e));
}
function $o(a3) {
  return a3 * a3 * a3;
}
function wo(a3) {
  return 3 * a3 * a3 * (1 - a3);
}
function Co(a3) {
  return 3 * a3 * (1 - a3) * (1 - a3);
}
function Ao(a3) {
  return (1 - a3) * (1 - a3) * (1 - a3);
}
function Po(a3) {
  return a3 * a3;
}
function Ro(a3) {
  return 2 * a3 * (1 - a3);
}
function Io(a3) {
  return (1 - a3) * (1 - a3);
}
var O = class _O {
  constructor(e, t, r) {
    this.document = e, this.name = t, this.value = r, this.isNormalizedColor = false;
  }
  static empty(e) {
    return new _O(e, "EMPTY", "");
  }
  split() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: t,
      name: r
    } = this;
    return vt(this.getString()).trim().split(e).map((i) => new _O(t, r, i));
  }
  hasValue(e) {
    var {
      value: t
    } = this;
    return t !== null && t !== "" && (e || t !== 0) && typeof t < "u";
  }
  isString(e) {
    var {
      value: t
    } = this, r = typeof t == "string";
    return !r || !e ? r : e.test(t);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue())
      return false;
    var e = this.getString();
    switch (true) {
      case e.endsWith("px"):
      case /^[0-9]+$/.test(e):
        return true;
      default:
        return false;
    }
  }
  setValue(e) {
    return this.value = e, this;
  }
  getValue(e) {
    return typeof e > "u" || this.hasValue() ? this.value : e;
  }
  getNumber(e) {
    if (!this.hasValue())
      return typeof e > "u" ? 0 : parseFloat(e);
    var {
      value: t
    } = this, r = parseFloat(t);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(e) {
    return typeof e > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(e);
  }
  getColor(e) {
    var t = this.getString(e);
    return this.isNormalizedColor || (this.isNormalizedColor = true, t = f1(t), this.value = t), t;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!this.hasValue())
      return 0;
    var [r, i] = typeof e == "boolean" ? [void 0, e] : [e], {
      viewPort: n
    } = this.document.screen;
    switch (true) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(n.computeSize("x"), n.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(n.computeSize("x"), n.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * n.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * n.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && i):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * n.computeSize(r);
      default: {
        var o = this.getNumber();
        return t && o < 1 ? o * n.computeSize(r) : o;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue())
      return 0;
    switch (true) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var e = this.getString(), t = /#([^)'"]+)/.exec(e);
    return t && (t = t[1]), t || (t = e), this.document.definitions[t];
  }
  getFillStyleDefinition(e, t) {
    var r = this.getDefinition();
    if (!r)
      return null;
    if (typeof r.createGradient == "function")
      return r.createGradient(this.document.ctx, e, t);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var i = r.getAttribute("patternTransform");
        r = r.getHrefAttribute().getDefinition(), i.hasValue() && r.getAttribute("patternTransform", true).setValue(i.value);
      }
      return r.createPattern(this.document.ctx, e, t);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? _O.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(e) {
    for (var t = this.getColor(), r = t.length, i = 0, n = 0; n < r && (t[n] === "," && i++, i !== 3); n++)
      ;
    if (e.hasValue() && this.isString() && i !== 3) {
      var o = new mi(t);
      o.ok && (o.alpha = e.getNumber(), t = o.toRGBA());
    }
    return new _O(this.document, this.name, t);
  }
};
O.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
var T1 = class {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(e, t) {
    this.viewPorts.push({
      width: e,
      height: t
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: e
    } = this;
    return e[e.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(e) {
    return typeof e == "number" ? e : e === "x" ? this.width : e === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
};
var V = class _V {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  static parse(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = t, i = t] = ie(e);
    return new _V(r, i);
  }
  static parseScale(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = t, i = r] = ie(e);
    return new _V(r, i);
  }
  static parsePath(e) {
    for (var t = ie(e), r = t.length, i = [], n = 0; n < r; n += 2)
      i.push(new _V(t[n], t[n + 1]));
    return i;
  }
  angleTo(e) {
    return Math.atan2(e.y - this.y, e.x - this.x);
  }
  applyTransform(e) {
    var {
      x: t,
      y: r
    } = this, i = t * e[0] + r * e[2] + e[4], n = t * e[1] + r * e[3] + e[5];
    this.x = i, this.y = n;
  }
};
var S1 = class {
  constructor(e) {
    this.screen = e, this.working = false, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: e,
        onClick: t,
        onMouseMove: r
      } = this, i = e.ctx.canvas;
      i.onclick = t, i.onmousemove = r, this.working = true;
    }
  }
  stop() {
    if (this.working) {
      var e = this.screen.ctx.canvas;
      this.working = false, e.onclick = null, e.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: e,
        events: t,
        eventElements: r
      } = this, {
        style: i
      } = e.ctx.canvas;
      i && (i.cursor = ""), t.forEach((n, o) => {
        for (var {
          run: s
        } = n, u = r[o]; u; )
          s(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(e, t) {
    if (!(!this.working || !t)) {
      var {
        events: r,
        eventElements: i
      } = this;
      r.forEach((n, o) => {
        var {
          x: s,
          y: u
        } = n;
        !i[o] && t.isPointInPath && t.isPointInPath(s, u) && (i[o] = e);
      });
    }
  }
  checkBoundingBox(e, t) {
    if (!(!this.working || !t)) {
      var {
        events: r,
        eventElements: i
      } = this;
      r.forEach((n, o) => {
        var {
          x: s,
          y: u
        } = n;
        !i[o] && t.isPointInBox(s, u) && (i[o] = e);
      });
    }
  }
  mapXY(e, t) {
    for (var {
      window: r,
      ctx: i
    } = this.screen, n = new V(e, t), o = i.canvas; o; )
      n.x -= o.offsetLeft, n.y -= o.offsetTop, o = o.offsetParent;
    return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), n;
  }
  onClick(e) {
    var {
      x: t,
      y: r
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onclick",
      x: t,
      y: r,
      run(i) {
        i.onClick && i.onClick();
      }
    });
  }
  onMouseMove(e) {
    var {
      x: t,
      y: r
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onmousemove",
      x: t,
      y: r,
      run(i) {
        i.onMouseMove && i.onMouseMove();
      }
    });
  }
};
var Sl = typeof window < "u" ? window : null;
var Ol = typeof fetch < "u" ? fetch.bind(void 0) : null;
var Vr = class {
  constructor(e) {
    var {
      fetch: t = Ol,
      window: r = Sl
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = e, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new T1(), this.mouse = new S1(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = false, this.isFirstRender = true, this.intervalId = null, this.window = r, this.fetch = t;
  }
  wait(e) {
    this.waits.push(e);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock)
      return true;
    var e = this.waits.every((t) => t());
    return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e;
  }
  setDefaults(e) {
    e.strokeStyle = "rgba(0,0,0,0)", e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4;
  }
  setViewBox(e) {
    var {
      document: t,
      ctx: r,
      aspectRatio: i,
      width: n,
      desiredWidth: o,
      height: s,
      desiredHeight: u,
      minX: l = 0,
      minY: h = 0,
      refX: f,
      refY: c,
      clip: v = false,
      clipX: d = 0,
      clipY: g = 0
    } = e, p = vt(i).replace(/^defer\s/, ""), [y, x] = p.split(" "), b = y || "xMidYMid", T = x || "meet", $ = n / o, E = s / u, S = Math.min($, E), C = Math.max($, E), N = o, _ = u;
    T === "meet" && (N *= S, _ *= S), T === "slice" && (N *= C, _ *= C);
    var B = new O(t, "refX", f), P = new O(t, "refY", c), X = B.hasValue() && P.hasValue();
    if (X && r.translate(-S * B.getPixels("x"), -S * P.getPixels("y")), v) {
      var W = S * d, z = S * g;
      r.beginPath(), r.moveTo(W, z), r.lineTo(n, z), r.lineTo(n, s), r.lineTo(W, s), r.closePath(), r.clip();
    }
    if (!X) {
      var q = T === "meet" && S === E, H = T === "slice" && C === E, Q = T === "meet" && S === $, R = T === "slice" && C === $;
      b.startsWith("xMid") && (q || H) && r.translate(n / 2 - N / 2, 0), b.endsWith("YMid") && (Q || R) && r.translate(0, s / 2 - _ / 2), b.startsWith("xMax") && (q || H) && r.translate(n - N, 0), b.endsWith("YMax") && (Q || R) && r.translate(0, s - _);
    }
    switch (true) {
      case b === "none":
        r.scale($, E);
        break;
      case T === "meet":
        r.scale(S, S);
        break;
      case T === "slice":
        r.scale(C, C);
        break;
    }
    r.translate(-l, -h);
  }
  start(e) {
    var {
      enableRedraw: t = false,
      ignoreMouse: r = false,
      ignoreAnimation: i = false,
      ignoreDimensions: n = false,
      ignoreClear: o = false,
      forceRedraw: s,
      scaleWidth: u,
      scaleHeight: l,
      offsetX: h,
      offsetY: f
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: c,
      mouse: v
    } = this, d = 1e3 / c;
    if (this.frameDuration = d, this.readyPromise = new Promise((b) => {
      this.resolveReady = b;
    }), this.isReady() && this.render(e, n, o, u, l, h, f), !!t) {
      var g = Date.now(), p = g, y = 0, x = () => {
        g = Date.now(), y = g - p, y >= d && (p = g - y % d, this.shouldUpdate(i, s) && (this.render(e, n, o, u, l, h, f), v.runEvents())), this.intervalId = ja(x);
      };
      r || v.start(), this.intervalId = ja(x);
    }
  }
  stop() {
    this.intervalId && (ja.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(e, t) {
    if (!e) {
      var {
        frameDuration: r
      } = this, i = this.animations.reduce((n, o) => o.update(r) || n, false);
      if (i)
        return true;
    }
    return !!(typeof t == "function" && t() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(e, t, r, i, n, o, s) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: l,
      viewPort: h,
      ctx: f,
      isFirstRender: c
    } = this, v = f.canvas;
    h.clear(), v.width && v.height ? h.setCurrent(v.width, v.height) : h.setCurrent(u, l);
    var d = e.getStyle("width"), g = e.getStyle("height");
    !t && (c || typeof i != "number" && typeof n != "number") && (d.hasValue() && (v.width = d.getPixels("x"), v.style && (v.style.width = "".concat(v.width, "px"))), g.hasValue() && (v.height = g.getPixels("y"), v.style && (v.style.height = "".concat(v.height, "px"))));
    var p = v.clientWidth || v.width, y = v.clientHeight || v.height;
    if (t && d.hasValue() && g.hasValue() && (p = d.getPixels("x"), y = g.getPixels("y")), h.setCurrent(p, y), typeof o == "number" && e.getAttribute("x", true).setValue(o), typeof s == "number" && e.getAttribute("y", true).setValue(s), typeof i == "number" || typeof n == "number") {
      var x = ie(e.getAttribute("viewBox").getString()), b = 0, T = 0;
      if (typeof i == "number") {
        var $ = e.getStyle("width");
        $.hasValue() ? b = $.getPixels("x") / i : isNaN(x[2]) || (b = x[2] / i);
      }
      if (typeof n == "number") {
        var E = e.getStyle("height");
        E.hasValue() ? T = E.getPixels("y") / n : isNaN(x[3]) || (T = x[3] / n);
      }
      b || (b = T), T || (T = b), e.getAttribute("width", true).setValue(i), e.getAttribute("height", true).setValue(n);
      var S = e.getStyle("transform", true, true);
      S.setValue("".concat(S.getString(), " scale(").concat(1 / b, ", ").concat(1 / T, ")"));
    }
    r || f.clearRect(0, 0, p, y), e.render(f), c && (this.isFirstRender = false);
  }
};
Vr.defaultWindow = Sl;
Vr.defaultFetch = Ol;
var {
  defaultFetch: O1
} = Vr;
var E1 = typeof DOMParser < "u" ? DOMParser : null;
var Ga = class {
  constructor() {
    var {
      fetch: e = O1,
      DOMParser: t = E1
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = e, this.DOMParser = t;
  }
  parse(e) {
    var t = this;
    return xe(function* () {
      return e.startsWith("<") ? t.parseFromString(e) : t.load(e);
    })();
  }
  parseFromString(e) {
    var t = new this.DOMParser();
    try {
      return this.checkDocument(t.parseFromString(e, "image/svg+xml"));
    } catch {
      return this.checkDocument(t.parseFromString(e, "text/xml"));
    }
  }
  checkDocument(e) {
    var t = e.getElementsByTagName("parsererror")[0];
    if (t)
      throw new Error(t.textContent);
    return e;
  }
  load(e) {
    var t = this;
    return xe(function* () {
      var r = yield t.fetch(e), i = yield r.text();
      return t.parseFromString(i);
    })();
  }
};
var $1 = class {
  constructor(e, t) {
    this.type = "translate", this.point = null, this.point = V.parse(t);
  }
  apply(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.translate(t || 0, r || 0);
  }
  unapply(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.translate(-1 * t || 0, -1 * r || 0);
  }
  applyToPoint(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0]);
  }
};
var w1 = class {
  constructor(e, t, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var i = ie(t);
    this.angle = new O(e, "angle", i[0]), this.originX = r[0], this.originY = r[1], this.cx = i[1] || 0, this.cy = i[2] || 0;
  }
  apply(e) {
    var {
      cx: t,
      cy: r,
      originX: i,
      originY: n,
      angle: o
    } = this, s = t + i.getPixels("x"), u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(o.getRadians()), e.translate(-s, -u);
  }
  unapply(e) {
    var {
      cx: t,
      cy: r,
      originX: i,
      originY: n,
      angle: o
    } = this, s = t + i.getPixels("x"), u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(-1 * o.getRadians()), e.translate(-s, -u);
  }
  applyToPoint(e) {
    var {
      cx: t,
      cy: r,
      angle: i
    } = this, n = i.getRadians();
    e.applyTransform([
      1,
      0,
      0,
      1,
      t || 0,
      r || 0
      // this.p.y
    ]), e.applyTransform([Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0]), e.applyTransform([
      1,
      0,
      0,
      1,
      -t || 0,
      -r || 0
      // -this.p.y
    ]);
  }
};
var C1 = class {
  constructor(e, t, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var i = V.parseScale(t);
    (i.x === 0 || i.y === 0) && (i.x = it, i.y = it), this.scale = i, this.originX = r[0], this.originY = r[1];
  }
  apply(e) {
    var {
      scale: {
        x: t,
        y: r
      },
      originX: i,
      originY: n
    } = this, o = i.getPixels("x"), s = n.getPixels("y");
    e.translate(o, s), e.scale(t, r || t), e.translate(-o, -s);
  }
  unapply(e) {
    var {
      scale: {
        x: t,
        y: r
      },
      originX: i,
      originY: n
    } = this, o = i.getPixels("x"), s = n.getPixels("y");
    e.translate(o, s), e.scale(1 / t, 1 / r || t), e.translate(-o, -s);
  }
  applyToPoint(e) {
    var {
      x: t,
      y: r
    } = this.scale;
    e.applyTransform([t || 0, 0, 0, r || 0, 0, 0]);
  }
};
var El = class {
  constructor(e, t, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = ie(t), this.originX = r[0], this.originY = r[1];
  }
  apply(e) {
    var {
      originX: t,
      originY: r,
      matrix: i
    } = this, n = t.getPixels("x"), o = r.getPixels("y");
    e.translate(n, o), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), e.translate(-n, -o);
  }
  unapply(e) {
    var {
      originX: t,
      originY: r,
      matrix: i
    } = this, n = i[0], o = i[2], s = i[4], u = i[1], l = i[3], h = i[5], f = 0, c = 0, v = 1, d = 1 / (n * (l * v - h * c) - o * (u * v - h * f) + s * (u * c - l * f)), g = t.getPixels("x"), p = r.getPixels("y");
    e.translate(g, p), e.transform(d * (l * v - h * c), d * (h * f - u * v), d * (s * c - o * v), d * (n * v - s * f), d * (o * h - s * l), d * (s * u - n * h)), e.translate(-g, -p);
  }
  applyToPoint(e) {
    e.applyTransform(this.matrix);
  }
};
var $l = class extends El {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skew", this.angle = null, this.angle = new O(e, "angle", t);
  }
};
var A1 = class extends $l {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
};
var P1 = class extends $l {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
};
function R1(a3) {
  return vt(a3).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function I1(a3) {
  var [e, t] = a3.split("(");
  return [e.trim(), t.trim().replace(")", "")];
}
var Be = class _Be {
  constructor(e, t, r) {
    this.document = e, this.transforms = [];
    var i = R1(t);
    i.forEach((n) => {
      if (n !== "none") {
        var [o, s] = I1(n), u = _Be.transformTypes[o];
        typeof u < "u" && this.transforms.push(new u(this.document, s, r));
      }
    });
  }
  static fromElement(e, t) {
    var r = t.getStyle("transform", false, true), [i, n = i] = t.getStyle("transform-origin", false, true).split(), o = [i, n];
    return r.hasValue() ? new _Be(e, r.getString(), o) : null;
  }
  apply(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = 0; i < r; i++)
      t[i].apply(e);
  }
  unapply(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = r - 1; i >= 0; i--)
      t[i].unapply(e);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = 0; i < r; i++)
      t[i].applyToPoint(e);
  }
};
Be.transformTypes = {
  translate: $1,
  rotate: w1,
  scale: C1,
  matrix: El,
  skewX: A1,
  skewY: P1
};
var I = class _I {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (this.document = e, this.node = t, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = false, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!t || t.nodeType !== 1)) {
      if (Array.from(t.attributes).forEach((s) => {
        var u = v1(s.nodeName);
        this.attributes[u] = new O(e, u, s.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var i = this.getAttribute("style").getString().split(";").map((s) => s.trim());
        i.forEach((s) => {
          if (s) {
            var [u, l] = s.split(":").map((h) => h.trim());
            this.styles[u] = new O(e, u, l);
          }
        });
      }
      var {
        definitions: n
      } = e, o = this.getAttribute("id");
      o.hasValue() && (n[o.getString()] || (n[o.getString()] = this)), Array.from(t.childNodes).forEach((s) => {
        if (s.nodeType === 1)
          this.addChild(s);
        else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
          var u = e.createTextNode(s);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, r = this.attributes[e];
    if (!r && t) {
      var i = new O(this.document, e, "");
      return this.attributes[e] = i, i;
    }
    return r || O.empty(this.document);
  }
  getHrefAttribute() {
    for (var e in this.attributes)
      if (e === "href" || e.endsWith(":href"))
        return this.attributes[e];
    return O.empty(this.document);
  }
  getStyle(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, i = this.styles[e];
    if (i)
      return i;
    var n = this.getAttribute(e);
    if (n != null && n.hasValue())
      return this.styles[e] = n, n;
    if (!r) {
      var {
        parent: o
      } = this;
      if (o) {
        var s = o.getStyle(e);
        if (s != null && s.hasValue())
          return s;
      }
    }
    if (t) {
      var u = new O(this.document, e, "");
      return this.styles[e] = u, u;
    }
    return i || O.empty(this.document);
  }
  render(e) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (e.save(), this.getStyle("mask").hasValue()) {
        var t = this.getStyle("mask").getDefinition();
        t && (this.applyEffects(e), t.apply(e, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(e), r.apply(e, this));
      } else
        this.setContext(e), this.renderChildren(e), this.clearContext(e);
      e.restore();
    }
  }
  setContext(e) {
  }
  applyEffects(e) {
    var t = Be.fromElement(this.document, this);
    t && t.apply(e);
    var r = this.getStyle("clip-path", false, true);
    if (r.hasValue()) {
      var i = r.getDefinition();
      i && i.apply(e);
    }
  }
  clearContext(e) {
  }
  renderChildren(e) {
    this.children.forEach((t) => {
      t.render(e);
    });
  }
  addChild(e) {
    var t = e instanceof _I ? e : this.document.createElement(e);
    t.parent = this, _I.ignoreChildTypes.includes(t.type) || this.children.push(t);
  }
  matchesSelector(e) {
    var t, {
      node: r
    } = this;
    if (typeof r.matches == "function")
      return r.matches(e);
    var i = (t = r.getAttribute) === null || t === void 0 ? void 0 : t.call(r, "class");
    return !i || i === "" ? false : i.split(" ").some((n) => ".".concat(n) === e);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: e,
      stylesSpecificity: t
    } = this.document;
    for (var r in e)
      if (!r.startsWith("@") && this.matchesSelector(r)) {
        var i = e[r], n = t[r];
        if (i)
          for (var o in i) {
            var s = this.stylesSpecificity[o];
            typeof s > "u" && (s = "000"), n >= s && (this.styles[o] = i[o], this.stylesSpecificity[o] = n);
          }
      }
  }
  removeStyles(e, t) {
    var r = t.reduce((i, n) => {
      var o = e.getStyle(n);
      if (!o.hasValue())
        return i;
      var s = o.getString();
      return o.setValue(""), [...i, [n, s]];
    }, []);
    return r;
  }
  restoreStyles(e, t) {
    t.forEach((r) => {
      var [i, n] = r;
      e.getStyle(i, true).setValue(n);
    });
  }
  isFirstChild() {
    var e;
    return ((e = this.parent) === null || e === void 0 ? void 0 : e.children.indexOf(this)) === 0;
  }
};
I.ignoreChildTypes = ["title"];
var N1 = class extends I {
  constructor(e, t, r) {
    super(e, t, r);
  }
};
function M1(a3) {
  var e = a3.trim();
  return /^('|")/.test(e) ? e : '"'.concat(e, '"');
}
function _1(a3) {
  return typeof process > "u" ? a3 : a3.trim().split(",").map(M1).join(",");
}
function D1(a3) {
  if (!a3)
    return "";
  var e = a3.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
  }
}
function V1(a3) {
  if (!a3)
    return "";
  var e = a3.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^[\d.]+$/.test(e) ? e : "";
  }
}
var J = class _J {
  constructor(e, t, r, i, n, o) {
    var s = o ? typeof o == "string" ? _J.parse(o) : o : {};
    this.fontFamily = n || s.fontFamily, this.fontSize = i || s.fontSize, this.fontStyle = e || s.fontStyle, this.fontWeight = r || s.fontWeight, this.fontVariant = t || s.fontVariant;
  }
  static parse() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, r = "", i = "", n = "", o = "", s = "", u = vt(e).trim().split(" "), l = {
      fontSize: false,
      fontStyle: false,
      fontWeight: false,
      fontVariant: false
    };
    return u.forEach((h) => {
      switch (true) {
        case (!l.fontStyle && _J.styles.includes(h)):
          h !== "inherit" && (r = h), l.fontStyle = true;
          break;
        case (!l.fontVariant && _J.variants.includes(h)):
          h !== "inherit" && (i = h), l.fontStyle = true, l.fontVariant = true;
          break;
        case (!l.fontWeight && _J.weights.includes(h)):
          h !== "inherit" && (n = h), l.fontStyle = true, l.fontVariant = true, l.fontWeight = true;
          break;
        case !l.fontSize:
          h !== "inherit" && ([o] = h.split("/")), l.fontStyle = true, l.fontVariant = true, l.fontWeight = true, l.fontSize = true;
          break;
        default:
          h !== "inherit" && (s += h);
      }
    }), new _J(r, i, n, o, s, t);
  }
  toString() {
    return [
      D1(this.fontStyle),
      this.fontVariant,
      V1(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      _1(this.fontFamily)
    ].join(" ").trim();
  }
};
J.styles = "normal|italic|oblique|inherit";
J.variants = "normal|small-caps|inherit";
J.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
var he = class {
  constructor() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.addPoint(e, t), this.addPoint(r, i);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(e, t) {
    typeof e < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), typeof t < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
  }
  addX(e) {
    this.addPoint(e, null);
  }
  addY(e) {
    this.addPoint(null, e);
  }
  addBoundingBox(e) {
    if (e) {
      var {
        x1: t,
        y1: r,
        x2: i,
        y2: n
      } = e;
      this.addPoint(t, r), this.addPoint(i, n);
    }
  }
  sumCubic(e, t, r, i, n) {
    return Math.pow(1 - e, 3) * t + 3 * Math.pow(1 - e, 2) * e * r + 3 * (1 - e) * Math.pow(e, 2) * i + Math.pow(e, 3) * n;
  }
  bezierCurveAdd(e, t, r, i, n) {
    var o = 6 * t - 12 * r + 6 * i, s = -3 * t + 9 * r - 9 * i + 3 * n, u = 3 * r - 3 * t;
    if (s === 0) {
      if (o === 0)
        return;
      var l = -u / o;
      0 < l && l < 1 && (e ? this.addX(this.sumCubic(l, t, r, i, n)) : this.addY(this.sumCubic(l, t, r, i, n)));
      return;
    }
    var h = Math.pow(o, 2) - 4 * u * s;
    if (!(h < 0)) {
      var f = (-o + Math.sqrt(h)) / (2 * s);
      0 < f && f < 1 && (e ? this.addX(this.sumCubic(f, t, r, i, n)) : this.addY(this.sumCubic(f, t, r, i, n)));
      var c = (-o - Math.sqrt(h)) / (2 * s);
      0 < c && c < 1 && (e ? this.addX(this.sumCubic(c, t, r, i, n)) : this.addY(this.sumCubic(c, t, r, i, n)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(e, t, r, i, n, o, s, u) {
    this.addPoint(e, t), this.addPoint(s, u), this.bezierCurveAdd(true, e, r, n, s), this.bezierCurveAdd(false, t, i, o, u);
  }
  addQuadraticCurve(e, t, r, i, n, o) {
    var s = e + 0.6666666666666666 * (r - e), u = t + 2 / 3 * (i - t), l = s + 1 / 3 * (n - e), h = u + 1 / 3 * (o - t);
    this.addBezierCurve(e, t, s, l, u, h, n, o);
  }
  isPointInBox(e, t) {
    var {
      x1: r,
      y1: i,
      x2: n,
      y2: o
    } = this;
    return r <= e && e <= n && i <= t && t <= o;
  }
};
var w = class extends m {
  constructor(e) {
    super(e.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new V(0, 0), this.control = new V(0, 0), this.current = new V(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: e,
      commands: t
    } = this;
    return e >= t.length - 1;
  }
  next() {
    var e = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = e, e;
  }
  getPoint() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new V(this.command[e], this.command[t]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(e, t) {
    var r = this.getPoint(e, t);
    return this.control = r, r;
  }
  getAsCurrentPoint(e, t) {
    var r = this.getPoint(e, t);
    return this.current = r, r;
  }
  getReflectedControlPoint() {
    var e = this.previousCommand.type;
    if (e !== m.CURVE_TO && e !== m.SMOOTH_CURVE_TO && e !== m.QUAD_TO && e !== m.SMOOTH_QUAD_TO)
      return this.current;
    var {
      current: {
        x: t,
        y: r
      },
      control: {
        x: i,
        y: n
      }
    } = this, o = new V(2 * t - i, 2 * r - n);
    return o;
  }
  makeAbsolute(e) {
    if (this.command.relative) {
      var {
        x: t,
        y: r
      } = this.current;
      e.x += t, e.y += r;
    }
    return e;
  }
  addMarker(e, t, r) {
    var {
      points: i,
      angles: n
    } = this;
    r && n.length > 0 && !n[n.length - 1] && (n[n.length - 1] = i[i.length - 1].angleTo(r)), this.addMarkerAngle(e, t ? t.angleTo(e) : null);
  }
  addMarkerAngle(e, t) {
    this.points.push(e), this.angles.push(t);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: e
    } = this, t = e.length, r = 0; r < t; r++)
      if (!e[r]) {
        for (var i = r + 1; i < t; i++)
          if (e[i]) {
            e[r] = e[i];
            break;
          }
      }
    return e;
  }
};
var Ge = class extends I {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = false;
  }
  calculateOpacity() {
    for (var e = 1, t = this; t; ) {
      var r = t.getStyle("opacity", false, true);
      r.hasValue(true) && (e *= r.getNumber()), t = t.parent;
    }
    return e;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!t) {
      var r = this.getStyle("fill"), i = this.getStyle("fill-opacity"), n = this.getStyle("stroke"), o = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, i);
        s && (e.fillStyle = s);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (e.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (i.hasValue()) {
        var l = new O(this.document, "fill", e.fillStyle).addOpacity(i).getColor();
        e.fillStyle = l;
      }
      if (n.isUrlDefinition()) {
        var h = n.getFillStyleDefinition(this, o);
        h && (e.strokeStyle = h);
      } else if (n.hasValue()) {
        n.getString() === "currentColor" && n.setValue(this.getStyle("color").getColor());
        var f = n.getString();
        f !== "inherit" && (e.strokeStyle = f === "none" ? "rgba(0,0,0,0)" : f);
      }
      if (o.hasValue()) {
        var c = new O(this.document, "stroke", e.strokeStyle).addOpacity(o).getString();
        e.strokeStyle = c;
      }
      var v = this.getStyle("stroke-width");
      if (v.hasValue()) {
        var d = v.getPixels();
        e.lineWidth = d || it;
      }
      var g = this.getStyle("stroke-linecap"), p = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), x = this.getStyle("stroke-dasharray"), b = this.getStyle("stroke-dashoffset");
      if (g.hasValue() && (e.lineCap = g.getString()), p.hasValue() && (e.lineJoin = p.getString()), y.hasValue() && (e.miterLimit = y.getNumber()), x.hasValue() && x.getString() !== "none") {
        var T = ie(x.getString());
        typeof e.setLineDash < "u" ? e.setLineDash(T) : typeof e.webkitLineDash < "u" ? e.webkitLineDash = T : typeof e.mozDash < "u" && !(T.length === 1 && T[0] === 0) && (e.mozDash = T);
        var $ = b.getPixels();
        typeof e.lineDashOffset < "u" ? e.lineDashOffset = $ : typeof e.webkitLineDashOffset < "u" ? e.webkitLineDashOffset = $ : typeof e.mozDashOffset < "u" && (e.mozDashOffset = $);
      }
    }
    if (this.modifiedEmSizeStack = false, typeof e.font < "u") {
      var E = this.getStyle("font"), S = this.getStyle("font-style"), C = this.getStyle("font-variant"), N = this.getStyle("font-weight"), _ = this.getStyle("font-size"), B = this.getStyle("font-family"), P = new J(S.getString(), C.getString(), N.getString(), _.hasValue() ? "".concat(_.getPixels(true), "px") : "", B.getString(), J.parse(E.getString(), e.font));
      S.setValue(P.fontStyle), C.setValue(P.fontVariant), N.setValue(P.fontWeight), _.setValue(P.fontSize), B.setValue(P.fontFamily), e.font = P.toString(), _.isPixels() && (this.document.emSize = _.getPixels(), this.modifiedEmSizeStack = true);
    }
    t || (this.applyEffects(e), e.globalAlpha = this.calculateOpacity());
  }
  clearContext(e) {
    super.clearContext(e), this.modifiedEmSizeStack && this.document.popEmSize();
  }
};
var A = class _A extends Ge {
  constructor(e, t, r) {
    super(e, t, r), this.type = "path", this.pathParser = null, this.pathParser = new w(this.getAttribute("d").getString());
  }
  path(e) {
    var {
      pathParser: t
    } = this, r = new he();
    for (t.reset(), e && e.beginPath(); !t.isEnd(); )
      switch (t.next().type) {
        case w.MOVE_TO:
          this.pathM(e, r);
          break;
        case w.LINE_TO:
          this.pathL(e, r);
          break;
        case w.HORIZ_LINE_TO:
          this.pathH(e, r);
          break;
        case w.VERT_LINE_TO:
          this.pathV(e, r);
          break;
        case w.CURVE_TO:
          this.pathC(e, r);
          break;
        case w.SMOOTH_CURVE_TO:
          this.pathS(e, r);
          break;
        case w.QUAD_TO:
          this.pathQ(e, r);
          break;
        case w.SMOOTH_QUAD_TO:
          this.pathT(e, r);
          break;
        case w.ARC:
          this.pathA(e, r);
          break;
        case w.CLOSE_PATH:
          this.pathZ(e, r);
          break;
      }
    return r;
  }
  getBoundingBox(e) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: e
    } = this, t = e.getMarkerPoints(), r = e.getMarkerAngles(), i = t.map((n, o) => [n, r[o]]);
    return i;
  }
  renderChildren(e) {
    this.path(e), this.document.screen.mouse.checkPath(this, e);
    var t = this.getStyle("fill-rule");
    e.fillStyle !== "" && (t.getString("inherit") !== "inherit" ? e.fill(t.getString()) : e.fill()), e.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.stroke(), e.restore()) : e.stroke());
    var r = this.getMarkers();
    if (r) {
      var i = r.length - 1, n = this.getStyle("marker-start"), o = this.getStyle("marker-mid"), s = this.getStyle("marker-end");
      if (n.isUrlDefinition()) {
        var u = n.getDefinition(), [l, h] = r[0];
        u.render(e, l, h);
      }
      if (o.isUrlDefinition())
        for (var f = o.getDefinition(), c = 1; c < i; c++) {
          var [v, d] = r[c];
          f.render(e, v, d);
        }
      if (s.isUrlDefinition()) {
        var g = s.getDefinition(), [p, y] = r[i];
        g.render(e, p, y);
      }
    }
  }
  static pathM(e) {
    var t = e.getAsCurrentPoint();
    return e.start = e.current, {
      point: t
    };
  }
  pathM(e, t) {
    var {
      pathParser: r
    } = this, {
      point: i
    } = _A.pathM(r), {
      x: n,
      y: o
    } = i;
    r.addMarker(i), t.addPoint(n, o), e && e.moveTo(n, o);
  }
  static pathL(e) {
    var {
      current: t
    } = e, r = e.getAsCurrentPoint();
    return {
      current: t,
      point: r
    };
  }
  pathL(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = _A.pathL(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathH(e) {
    var {
      current: t,
      command: r
    } = e, i = new V((r.relative ? t.x : 0) + r.x, t.y);
    return e.current = i, {
      current: t,
      point: i
    };
  }
  pathH(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = _A.pathH(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathV(e) {
    var {
      current: t,
      command: r
    } = e, i = new V(t.x, (r.relative ? t.y : 0) + r.y);
    return e.current = i, {
      current: t,
      point: i
    };
  }
  pathV(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = _A.pathV(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathC(e) {
    var {
      current: t
    } = e, r = e.getPoint("x1", "y1"), i = e.getAsControlPoint("x2", "y2"), n = e.getAsCurrentPoint();
    return {
      current: t,
      point: r,
      controlPoint: i,
      currentPoint: n
    };
  }
  pathC(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n,
      controlPoint: o,
      currentPoint: s
    } = _A.pathC(r);
    r.addMarker(s, o, n), t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y), e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathS(e) {
    var {
      current: t
    } = e, r = e.getReflectedControlPoint(), i = e.getAsControlPoint("x2", "y2"), n = e.getAsCurrentPoint();
    return {
      current: t,
      point: r,
      controlPoint: i,
      currentPoint: n
    };
  }
  pathS(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n,
      controlPoint: o,
      currentPoint: s
    } = _A.pathS(r);
    r.addMarker(s, o, n), t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y), e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathQ(e) {
    var {
      current: t
    } = e, r = e.getAsControlPoint("x1", "y1"), i = e.getAsCurrentPoint();
    return {
      current: t,
      controlPoint: r,
      currentPoint: i
    };
  }
  pathQ(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      controlPoint: n,
      currentPoint: o
    } = _A.pathQ(r);
    r.addMarker(o, n, n), t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y), e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathT(e) {
    var {
      current: t
    } = e, r = e.getReflectedControlPoint();
    e.control = r;
    var i = e.getAsCurrentPoint();
    return {
      current: t,
      controlPoint: r,
      currentPoint: i
    };
  }
  pathT(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      controlPoint: n,
      currentPoint: o
    } = _A.pathT(r);
    r.addMarker(o, n, n), t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y), e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathA(e) {
    var {
      current: t,
      command: r
    } = e, {
      rX: i,
      rY: n,
      xRot: o,
      lArcFlag: s,
      sweepFlag: u
    } = r, l = o * (Math.PI / 180), h = e.getAsCurrentPoint(), f = new V(Math.cos(l) * (t.x - h.x) / 2 + Math.sin(l) * (t.y - h.y) / 2, -Math.sin(l) * (t.x - h.x) / 2 + Math.cos(l) * (t.y - h.y) / 2), c = Math.pow(f.x, 2) / Math.pow(i, 2) + Math.pow(f.y, 2) / Math.pow(n, 2);
    c > 1 && (i *= Math.sqrt(c), n *= Math.sqrt(c));
    var v = (s === u ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(n, 2) - Math.pow(i, 2) * Math.pow(f.y, 2) - Math.pow(n, 2) * Math.pow(f.x, 2)) / (Math.pow(i, 2) * Math.pow(f.y, 2) + Math.pow(n, 2) * Math.pow(f.x, 2)));
    isNaN(v) && (v = 0);
    var d = new V(v * i * f.y / n, v * -n * f.x / i), g = new V((t.x + h.x) / 2 + Math.cos(l) * d.x - Math.sin(l) * d.y, (t.y + h.y) / 2 + Math.sin(l) * d.x + Math.cos(l) * d.y), p = Eo([1, 0], [(f.x - d.x) / i, (f.y - d.y) / n]), y = [(f.x - d.x) / i, (f.y - d.y) / n], x = [(-f.x - d.x) / i, (-f.y - d.y) / n], b = Eo(y, x);
    return Ti(y, x) <= -1 && (b = Math.PI), Ti(y, x) >= 1 && (b = 0), {
      currentPoint: h,
      rX: i,
      rY: n,
      sweepFlag: u,
      xAxisRotation: l,
      centp: g,
      a1: p,
      ad: b
    };
  }
  pathA(e, t) {
    var {
      pathParser: r
    } = this, {
      currentPoint: i,
      rX: n,
      rY: o,
      sweepFlag: s,
      xAxisRotation: u,
      centp: l,
      a1: h,
      ad: f
    } = _A.pathA(r), c = 1 - s ? 1 : -1, v = h + c * (f / 2), d = new V(l.x + n * Math.cos(v), l.y + o * Math.sin(v));
    if (r.addMarkerAngle(d, v - c * Math.PI / 2), r.addMarkerAngle(i, v - c * Math.PI), t.addPoint(i.x, i.y), e && !isNaN(h) && !isNaN(f)) {
      var g = n > o ? n : o, p = n > o ? 1 : n / o, y = n > o ? o / n : 1;
      e.translate(l.x, l.y), e.rotate(u), e.scale(p, y), e.arc(0, 0, g, h, h + f, !!(1 - s)), e.scale(1 / p, 1 / y), e.rotate(-u), e.translate(-l.x, -l.y);
    }
  }
  static pathZ(e) {
    e.current = e.start;
  }
  pathZ(e, t) {
    _A.pathZ(this.pathParser), e && t.x1 !== t.x2 && t.y1 !== t.y2 && e.closePath();
  }
};
var wl = class extends A {
  constructor(e, t, r) {
    super(e, t, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
};
var Ce = class _Ce extends Ge {
  constructor(e, t, r) {
    super(e, t, new.target === _Ce ? true : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    super.setContext(e, t);
    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    r && (e.textBaseline = r);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(e) {
    if (this.type !== "text")
      return this.getTElementBoundingBox(e);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e);
    var t = null;
    return this.children.forEach((r, i) => {
      var n = this.getChildBoundingBox(e, this, this, i);
      t ? t.addBoundingBox(n) : t = n;
    }), t;
  }
  getFontSize() {
    var {
      document: e,
      parent: t
    } = this, r = J.parse(e.ctx.font).fontSize, i = t.getStyle("font-size").getNumber(r);
    return i;
  }
  getTElementBoundingBox(e) {
    var t = this.getFontSize();
    return new he(this.x, this.y - t, this.x + this.measureText(e), this.y);
  }
  getGlyph(e, t, r) {
    var i = t[r], n = null;
    if (e.isArabic) {
      var o = t.length, s = t[r - 1], u = t[r + 1], l = "isolated";
      if ((r === 0 || s === " ") && r < o - 1 && u !== " " && (l = "terminal"), r > 0 && s !== " " && r < o - 1 && u !== " " && (l = "medial"), r > 0 && s !== " " && (r === o - 1 || u === " ") && (l = "initial"), typeof e.glyphs[i] < "u") {
        var h = e.glyphs[i];
        n = h instanceof wl ? h : h[l];
      }
    } else
      n = e.glyphs[i];
    return n || (n = e.missingGlyph), n;
  }
  getText() {
    return "";
  }
  getTextFromNode(e) {
    var t = e || this.node, r = Array.from(t.parentNode.childNodes), i = r.indexOf(t), n = r.length - 1, o = vt(
      // textNode.value
      // || textNode.text
      t.textContent || ""
    );
    return i === 0 && (o = u1(o)), i === n && (o = l1(o)), o;
  }
  renderChildren(e) {
    if (this.type !== "text") {
      this.renderTElementChildren(e);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e), this.children.forEach((r, i) => {
      this.renderChild(e, this, this, i);
    });
    var {
      mouse: t
    } = this.document.screen;
    t.isWorking() && t.checkBoundingBox(this, this.getBoundingBox(e));
  }
  renderTElementChildren(e) {
    var {
      document: t,
      parent: r
    } = this, i = this.getText(), n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (var {
        unitsPerEm: o
      } = n.fontFace, s = J.parse(t.ctx.font), u = r.getStyle("font-size").getNumber(s.fontSize), l = r.getStyle("font-style").getString(s.fontStyle), h = u / o, f = n.isRTL ? i.split("").reverse().join("") : i, c = ie(r.getAttribute("dx").getString()), v = f.length, d = 0; d < v; d++) {
        var g = this.getGlyph(n, f, d);
        e.translate(this.x, this.y), e.scale(h, -h);
        var p = e.lineWidth;
        e.lineWidth = e.lineWidth * o / u, l === "italic" && e.transform(1, 0, 0.4, 1, 0, 0), g.render(e), l === "italic" && e.transform(1, 0, -0.4, 1, 0, 0), e.lineWidth = p, e.scale(1 / h, -1 / h), e.translate(-this.x, -this.y), this.x += u * (g.horizAdvX || n.horizAdvX) / o, typeof c[d] < "u" && !isNaN(c[d]) && (this.x += c[d]);
      }
      return;
    }
    var {
      x: y,
      y: x
    } = this;
    e.fillStyle && e.fillText(i, y, x), e.strokeStyle && e.strokeText(i, y, x);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e = this.leafTexts[this.textChunkStart], t = e.getStyle("text-anchor").getString("start"), r = false, i = 0;
      t === "start" && !r || t === "end" && r ? i = e.x - this.minX : t === "end" && !r || t === "start" && r ? i = e.x - this.maxX : i = e.x - (this.minX + this.maxX) / 2;
      for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
        this.leafTexts[n].x += i;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(e) {
    this.children.forEach((t, r) => {
      this.adjustChildCoordinatesRecursiveCore(e, this, this, r);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(e, t, r, i) {
    var n = r.children[i];
    n.children.length > 0 ? n.children.forEach((o, s) => {
      t.adjustChildCoordinatesRecursiveCore(e, t, n, s);
    }) : this.adjustChildCoordinates(e, t, r, i);
  }
  adjustChildCoordinates(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.measureText != "function")
      return n;
    e.save(), n.setContext(e, true);
    var o = n.getAttribute("x"), s = n.getAttribute("y"), u = n.getAttribute("dx"), l = n.getAttribute("dy"), h = n.getStyle("font-family").getDefinition(), f = !!h && h.isRTL;
    i === 0 && (o.hasValue() || o.setValue(n.getInheritedAttribute("x")), s.hasValue() || s.setValue(n.getInheritedAttribute("y")), u.hasValue() || u.setValue(n.getInheritedAttribute("dx")), l.hasValue() || l.setValue(n.getInheritedAttribute("dy")));
    var c = n.measureText(e);
    return f && (t.x -= c), o.hasValue() ? (t.applyAnchoring(), n.x = o.getPixels("x"), u.hasValue() && (n.x += u.getPixels("x"))) : (u.hasValue() && (t.x += u.getPixels("x")), n.x = t.x), t.x = n.x, f || (t.x += c), s.hasValue() ? (n.y = s.getPixels("y"), l.hasValue() && (n.y += l.getPixels("y"))) : (l.hasValue() && (t.y += l.getPixels("y")), n.y = t.y), t.y = n.y, t.leafTexts.push(n), t.minX = Math.min(t.minX, n.x, n.x + c), t.maxX = Math.max(t.maxX, n.x, n.x + c), n.clearContext(e), e.restore(), n;
  }
  getChildBoundingBox(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.getBoundingBox != "function")
      return null;
    var o = n.getBoundingBox(e);
    return o ? (n.children.forEach((s, u) => {
      var l = t.getChildBoundingBox(e, t, n, u);
      o.addBoundingBox(l);
    }), o) : null;
  }
  renderChild(e, t, r, i) {
    var n = r.children[i];
    n.render(e), n.children.forEach((o, s) => {
      t.renderChild(e, t, n, s);
    });
  }
  measureText(e) {
    var {
      measureCache: t
    } = this;
    if (~t)
      return t;
    var r = this.getText(), i = this.measureTargetText(e, r);
    return this.measureCache = i, i;
  }
  measureTargetText(e, t) {
    if (!t.length)
      return 0;
    var {
      parent: r
    } = this, i = r.getStyle("font-family").getDefinition();
    if (i) {
      for (var n = this.getFontSize(), o = i.isRTL ? t.split("").reverse().join("") : t, s = ie(r.getAttribute("dx").getString()), u = o.length, l = 0, h = 0; h < u; h++) {
        var f = this.getGlyph(i, o, h);
        l += (f.horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, typeof s[h] < "u" && !isNaN(s[h]) && (l += s[h]);
      }
      return l;
    }
    if (!e.measureText)
      return t.length * 10;
    e.save(), this.setContext(e, true);
    var {
      width: c
    } = e.measureText(t);
    return this.clearContext(e), e.restore(), c;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(e) {
    for (var t = this; t instanceof _Ce && t.isFirstChild(); ) {
      var r = t.parent.getAttribute(e);
      if (r.hasValue(true))
        return r.getValue("0");
      t = t.parent;
    }
    return null;
  }
};
var Lr = class _Lr extends Ce {
  constructor(e, t, r) {
    super(e, t, new.target === _Lr ? true : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
};
var L1 = class extends Lr {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
};
var _t = class extends Ge {
  constructor() {
    super(...arguments), this.type = "svg", this.root = false;
  }
  setContext(e) {
    var t, {
      document: r
    } = this, {
      screen: i,
      window: n
    } = r, o = e.canvas;
    if (i.setDefaults(e), o.style && typeof e.font < "u" && n && typeof n.getComputedStyle < "u") {
      e.font = n.getComputedStyle(o).getPropertyValue("font");
      var s = new O(r, "fontSize", J.parse(e.font).fontSize);
      s.hasValue() && (r.rootEmSize = s.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", true).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", true).setValue(0);
    var {
      width: u,
      height: l
    } = i.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", true).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", true).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", true).setValue("black");
    var h = this.getAttribute("refX"), f = this.getAttribute("refY"), c = this.getAttribute("viewBox"), v = c.hasValue() ? ie(c.getString()) : null, d = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", g = 0, p = 0, y = 0, x = 0;
    v && (g = v[0], p = v[1]), this.root || (u = this.getStyle("width").getPixels("x"), l = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = g, x = p, g = 0, p = 0)), i.viewPort.setCurrent(u, l), this.node && (!this.parent || ((t = this.node.parentNode) === null || t === void 0 ? void 0 : t.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue() && this.getStyle("transform-origin", true, true).setValue("50% 50%"), super.setContext(e), e.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), v && (u = v[2], l = v[3]), r.setViewBox({
      ctx: e,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: i.viewPort.width,
      desiredWidth: u,
      height: i.viewPort.height,
      desiredHeight: l,
      minX: g,
      minY: p,
      refX: h.getValue(),
      refY: f.getValue(),
      clip: d,
      clipX: y,
      clipY: x
    }), v && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, l));
  }
  clearContext(e) {
    super.clearContext(e), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, i = this.getAttribute("width", true), n = this.getAttribute("height", true), o = this.getAttribute("viewBox"), s = this.getAttribute("style"), u = i.getNumber(0), l = n.getNumber(0);
    if (r)
      if (typeof r == "string")
        this.getAttribute("preserveAspectRatio", true).setValue(r);
      else {
        var h = this.getAttribute("preserveAspectRatio");
        h.hasValue() && h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (i.setValue(e), n.setValue(t), o.hasValue() || o.setValue("0 0 ".concat(u || e, " ").concat(l || t)), s.hasValue()) {
      var f = this.getStyle("width"), c = this.getStyle("height");
      f.hasValue() && f.setValue("".concat(e, "px")), c.hasValue() && c.setValue("".concat(t, "px"));
    }
  }
};
var Cl = class extends A {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(e) {
    var t = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), i = this.getStyle("width", false, true).getPixels("x"), n = this.getStyle("height", false, true).getPixels("y"), o = this.getAttribute("rx"), s = this.getAttribute("ry"), u = o.getPixels("x"), l = s.getPixels("y");
    if (o.hasValue() && !s.hasValue() && (l = u), s.hasValue() && !o.hasValue() && (u = l), u = Math.min(u, i / 2), l = Math.min(l, n / 2), e) {
      var h = 4 * ((Math.sqrt(2) - 1) / 3);
      e.beginPath(), n > 0 && i > 0 && (e.moveTo(t + u, r), e.lineTo(t + i - u, r), e.bezierCurveTo(t + i - u + h * u, r, t + i, r + l - h * l, t + i, r + l), e.lineTo(t + i, r + n - l), e.bezierCurveTo(t + i, r + n - l + h * l, t + i - u + h * u, r + n, t + i - u, r + n), e.lineTo(t + u, r + n), e.bezierCurveTo(t + u - h * u, r + n, t, r + n - l + h * l, t, r + n - l), e.lineTo(t, r + l), e.bezierCurveTo(t, r + l - h * l, t + u - h * u, r, t + u, r), e.closePath());
    }
    return new he(t, r, t + i, r + n);
  }
  getMarkers() {
    return null;
  }
};
var k1 = class extends A {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(e) {
    var t = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), i = this.getAttribute("r").getPixels();
    return e && i > 0 && (e.beginPath(), e.arc(t, r, i, 0, Math.PI * 2, false), e.closePath()), new he(t - i, r - i, t + i, r + i);
  }
  getMarkers() {
    return null;
  }
};
var B1 = class extends A {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(e) {
    var t = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), i = this.getAttribute("ry").getPixels("y"), n = this.getAttribute("cx").getPixels("x"), o = this.getAttribute("cy").getPixels("y");
    return e && r > 0 && i > 0 && (e.beginPath(), e.moveTo(n + r, o), e.bezierCurveTo(n + r, o + t * i, n + t * r, o + i, n, o + i), e.bezierCurveTo(n - t * r, o + i, n - r, o + t * i, n - r, o), e.bezierCurveTo(n - r, o - t * i, n - t * r, o - i, n, o - i), e.bezierCurveTo(n + t * r, o - i, n + r, o - t * i, n + r, o), e.closePath()), new he(n - r, o - i, n + r, o + i);
  }
  getMarkers() {
    return null;
  }
};
var F1 = class extends A {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new V(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new V(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(e) {
    var [{
      x: t,
      y: r
    }, {
      x: i,
      y: n
    }] = this.getPoints();
    return e && (e.beginPath(), e.moveTo(t, r), e.lineTo(i, n)), new he(t, r, i, n);
  }
  getMarkers() {
    var [e, t] = this.getPoints(), r = e.angleTo(t);
    return [[e, r], [t, r]];
  }
};
var Al = class extends A {
  constructor(e, t, r) {
    super(e, t, r), this.type = "polyline", this.points = [], this.points = V.parsePath(this.getAttribute("points").getString());
  }
  path(e) {
    var {
      points: t
    } = this, [{
      x: r,
      y: i
    }] = t, n = new he(r, i);
    return e && (e.beginPath(), e.moveTo(r, i)), t.forEach((o) => {
      var {
        x: s,
        y: u
      } = o;
      n.addPoint(s, u), e && e.lineTo(s, u);
    }), n;
  }
  getMarkers() {
    var {
      points: e
    } = this, t = e.length - 1, r = [];
    return e.forEach((i, n) => {
      n !== t && r.push([i, i.angleTo(e[n + 1])]);
    }), r.length > 0 && r.push([e[e.length - 1], r[r.length - 1][1]]), r;
  }
};
var j1 = class extends Al {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(e) {
    var t = super.path(e), [{
      x: r,
      y: i
    }] = this.points;
    return e && (e.lineTo(r, i), e.closePath()), t;
  }
};
var U1 = class extends I {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(e, t, r) {
    var i = this.getStyle("width").getPixels("x", true), n = this.getStyle("height").getPixels("y", true), o = new _t(this.document, null);
    o.attributes.viewBox = new O(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.width = new O(this.document, "width", "".concat(i, "px")), o.attributes.height = new O(this.document, "height", "".concat(n, "px")), o.attributes.transform = new O(this.document, "transform", this.getAttribute("patternTransform").getValue()), o.children = this.children;
    var s = this.document.createCanvas(i, n), u = s.getContext("2d"), l = this.getAttribute("x"), h = this.getAttribute("y");
    l.hasValue() && h.hasValue() && u.translate(l.getPixels("x", true), h.getPixels("y", true)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var f = -1; f <= 1; f++)
      for (var c = -1; c <= 1; c++)
        u.save(), o.attributes.x = new O(this.document, "x", f * s.width), o.attributes.y = new O(this.document, "y", c * s.height), o.render(u), u.restore();
    var v = e.createPattern(s, "repeat");
    return v;
  }
};
var z1 = class extends I {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(e, t, r) {
    if (t) {
      var {
        x: i,
        y: n
      } = t, o = this.getAttribute("orient").getString("auto"), s = this.getAttribute("markerUnits").getString("strokeWidth");
      e.translate(i, n), o === "auto" && e.rotate(r), s === "strokeWidth" && e.scale(e.lineWidth, e.lineWidth), e.save();
      var u = new _t(this.document, null);
      u.type = this.type, u.attributes.viewBox = new O(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new O(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new O(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new O(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new O(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new O(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new O(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new O(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(e), e.restore(), s === "strokeWidth" && e.scale(1 / e.lineWidth, 1 / e.lineWidth), o === "auto" && e.rotate(-r), e.translate(-i, -n);
    }
  }
};
var G1 = class extends I {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
};
var on = class extends Ge {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(e) {
    var t = new he();
    return this.children.forEach((r) => {
      t.addBoundingBox(r.getBoundingBox(e));
    }), t;
  }
};
var Pl = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: i,
      children: n
    } = this;
    n.forEach((o) => {
      o.type === "stop" && i.push(o);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(e, t, r) {
    var i = this;
    this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
    var {
      stops: n
    } = i, o = this.getGradient(e, t);
    if (!o)
      return this.addParentOpacity(r, n[n.length - 1].color);
    if (n.forEach((p) => {
      o.addColorStop(p.offset, this.addParentOpacity(r, p.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: s
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: l
      } = s.screen, [h] = l.viewPorts, f = new Cl(s, null);
      f.attributes.x = new O(s, "x", -u / 3), f.attributes.y = new O(s, "y", -u / 3), f.attributes.width = new O(s, "width", u), f.attributes.height = new O(s, "height", u);
      var c = new on(s, null);
      c.attributes.transform = new O(s, "transform", this.getAttribute("gradientTransform").getValue()), c.children = [f];
      var v = new _t(s, null);
      v.attributes.x = new O(s, "x", 0), v.attributes.y = new O(s, "y", 0), v.attributes.width = new O(s, "width", h.width), v.attributes.height = new O(s, "height", h.height), v.children = [c];
      var d = s.createCanvas(h.width, h.height), g = d.getContext("2d");
      return g.fillStyle = o, v.render(g), g.createPattern(d, "no-repeat");
    }
    return o;
  }
  inheritStopContainer(e) {
    this.attributesToInherit.forEach((t) => {
      !this.getAttribute(t).hasValue() && e.getAttribute(t).hasValue() && this.getAttribute(t, true).setValue(e.getAttribute(t).getValue());
    });
  }
  addParentOpacity(e, t) {
    if (e.hasValue()) {
      var r = new O(this.document, "color", t);
      return r.addOpacity(e).getColor();
    }
    return t;
  }
};
var H1 = class extends Pl {
  constructor(e, t, r) {
    super(e, t, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox", i = r ? t.getBoundingBox(e) : null;
    if (r && !i)
      return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", true).setValue(0), this.getAttribute("y1", true).setValue(0), this.getAttribute("x2", true).setValue(1), this.getAttribute("y2", true).setValue(0));
    var n = r ? i.x + i.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), s = r ? i.x + i.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = r ? i.y + i.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return n === s && o === u ? null : e.createLinearGradient(n, o, s, u);
  }
};
var Y1 = class extends Pl {
  constructor(e, t, r) {
    super(e, t, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox", i = t.getBoundingBox(e);
    if (r && !i)
      return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", true).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", true).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", true).setValue("50%");
    var n = r ? i.x + i.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), s = n, u = o;
    this.getAttribute("fx").hasValue() && (s = r ? i.x + i.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? i.y + i.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var l = r ? (i.width + i.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), h = this.getAttribute("fr").getPixels();
    return e.createRadialGradient(s, u, h, n, o, l);
  }
};
var X1 = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "stop";
    var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), n = this.getStyle("stop-opacity"), o = this.getStyle("stop-color", true);
    o.getString() === "" && o.setValue("#000"), n.hasValue() && (o = o.addOpacity(n)), this.offset = i, this.color = o.getColor();
  }
};
var un = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = false, this.frozen = false, e.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new O(e, "values", null);
    var i = this.getAttribute("values");
    i.hasValue() && this.values.setValue(i.getString().split(";"));
  }
  getProperty() {
    var e = this.getAttribute("attributeType").getString(), t = this.getAttribute("attributeName").getString();
    return e === "CSS" ? this.parent.getStyle(t, true) : this.parent.getAttribute(t, true);
  }
  calcValue() {
    var {
      initialUnits: e
    } = this, {
      progress: t,
      from: r,
      to: i
    } = this.getProgress(), n = r.getNumber() + (i.getNumber() - r.getNumber()) * t;
    return e === "%" && (n *= 100), "".concat(n).concat(e);
  }
  update(e) {
    var {
      parent: t
    } = this, r = this.getProperty();
    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
      var i = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite")
        this.duration = 0;
      else if (i === "freeze" && !this.frozen)
        this.frozen = true, t.animationFrozen = true, t.animationFrozenValue = r.getString();
      else if (i === "remove" && !this.removed)
        return this.removed = true, r.setValue(t.animationFrozen ? t.animationFrozenValue : this.initialValue), true;
      return false;
    }
    this.duration += e;
    var n = false;
    if (this.begin < this.duration) {
      var o = this.calcValue(), s = this.getAttribute("type");
      if (s.hasValue()) {
        var u = s.getString();
        o = "".concat(u, "(").concat(o, ")");
      }
      r.setValue(o), n = true;
    }
    return n;
  }
  getProgress() {
    var {
      document: e,
      values: t
    } = this, r = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (t.hasValue()) {
      var i = r.progress * (t.getValue().length - 1), n = Math.floor(i), o = Math.ceil(i);
      r.from = new O(e, "from", parseFloat(t.getValue()[n])), r.to = new O(e, "to", parseFloat(t.getValue()[o])), r.progress = (i - n) / (o - n);
    } else
      r.from = this.from, r.to = this.to;
    return r;
  }
};
var W1 = class extends un {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: e,
      from: t,
      to: r
    } = this.getProgress(), i = new mi(t.getColor()), n = new mi(r.getColor());
    if (i.ok && n.ok) {
      var o = i.r + (n.r - i.r) * e, s = i.g + (n.g - i.g) * e, u = i.b + (n.b - i.b) * e;
      return "rgb(".concat(Math.floor(o), ", ").concat(Math.floor(s), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
};
var q1 = class extends un {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: e,
      from: t,
      to: r
    } = this.getProgress(), i = ie(t.getString()), n = ie(r.getString()), o = i.map((s, u) => {
      var l = n[u];
      return s + (l - s) * e;
    }).join(" ");
    return o;
  }
};
var Q1 = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: i
    } = e, {
      children: n
    } = this;
    for (var o of n)
      switch (o.type) {
        case "font-face": {
          this.fontFace = o;
          var s = o.getStyle("font-family");
          s.hasValue() && (i[s.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = o;
          break;
        case "glyph": {
          var u = o;
          u.arabicForm ? (this.isRTL = true, this.isArabic = true, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
          break;
        }
      }
  }
  render() {
  }
};
var K1 = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
};
var Z1 = class extends A {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
};
var J1 = class extends Ce {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var e = this.getHrefAttribute().getDefinition();
    if (e) {
      var t = e.children[0];
      if (t)
        return t.getText();
    }
    return "";
  }
};
var e2 = class extends Ce {
  constructor(e, t, r) {
    super(e, t, r), this.type = "a";
    var {
      childNodes: i
    } = t, n = i[0], o = i.length > 0 && Array.from(i).every((s) => s.nodeType === 3);
    this.hasText = o, this.text = o ? this.getTextFromNode(n) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(e) {
    if (this.hasText) {
      super.renderChildren(e);
      var {
        document: t,
        x: r,
        y: i
      } = this, {
        mouse: n
      } = t.screen, o = new O(t, "fontSize", J.parse(t.ctx.font).fontSize);
      n.isWorking() && n.checkBoundingBox(this, new he(r, i - o.getPixels("y"), r + this.measureText(e), i));
    } else if (this.children.length > 0) {
      var s = new on(this.document, null);
      s.children = this.children, s.parent = this, s.render(e);
    }
  }
  onClick() {
    var {
      window: e
    } = this.document;
    e && e.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var e = this.document.ctx;
    e.canvas.style.cursor = "pointer";
  }
};
function No(a3, e) {
  var t = Object.keys(a3);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a3);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a3, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ir(a3) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? No(Object(t), true).forEach(function(r) {
      an(a3, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a3, Object.getOwnPropertyDescriptors(t)) : No(Object(t)).forEach(function(r) {
      Object.defineProperty(a3, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a3;
}
var t2 = class extends Ce {
  constructor(e, t, r) {
    super(e, t, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var i = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(i);
  }
  getText() {
    return this.text;
  }
  path(e) {
    var {
      dataArray: t
    } = this;
    e && e.beginPath(), t.forEach((r) => {
      var {
        type: i,
        points: n
      } = r;
      switch (i) {
        case w.LINE_TO:
          e && e.lineTo(n[0], n[1]);
          break;
        case w.MOVE_TO:
          e && e.moveTo(n[0], n[1]);
          break;
        case w.CURVE_TO:
          e && e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
          break;
        case w.QUAD_TO:
          e && e.quadraticCurveTo(n[0], n[1], n[2], n[3]);
          break;
        case w.ARC: {
          var [o, s, u, l, h, f, c, v] = n, d = u > l ? u : l, g = u > l ? 1 : u / l, p = u > l ? l / u : 1;
          e && (e.translate(o, s), e.rotate(c), e.scale(g, p), e.arc(0, 0, d, h, h + f, !!(1 - v)), e.scale(1 / g, 1 / p), e.rotate(-c), e.translate(-o, -s));
          break;
        }
        case w.CLOSE_PATH:
          e && e.closePath();
          break;
      }
    });
  }
  renderChildren(e) {
    this.setTextData(e), e.save();
    var t = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
      glyphInfo: i
    } = this, n = e.fillStyle;
    t === "underline" && e.beginPath(), i.forEach((o, s) => {
      var {
        p0: u,
        p1: l,
        rotation: h,
        text: f
      } = o;
      e.save(), e.translate(u.x, u.y), e.rotate(h), e.fillStyle && e.fillText(f, 0, 0), e.strokeStyle && e.strokeText(f, 0, 0), e.restore(), t === "underline" && (s === 0 && e.moveTo(u.x, u.y + r / 8), e.lineTo(l.x, l.y + r / 5));
    }), t === "underline" && (e.lineWidth = r / 20, e.strokeStyle = n, e.stroke(), e.closePath()), e.restore();
  }
  getLetterSpacingAt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[e] || 0;
  }
  findSegmentToFitChar(e, t, r, i, n, o, s, u, l) {
    var h = o, f = this.measureText(e, u);
    u === " " && t === "justify" && r < i && (f += (i - r) / n), l > -1 && (h += this.getLetterSpacingAt(l));
    var c = this.textHeight / 20, v = this.getEquidistantPointOnPath(h, c, 0), d = this.getEquidistantPointOnPath(h + f, c, 0), g = {
      p0: v,
      p1: d
    }, p = v && d ? Math.atan2(d.y - v.y, d.x - v.x) : 0;
    if (s) {
      var y = Math.cos(Math.PI / 2 + p) * s, x = Math.cos(-p) * s;
      g.p0 = ir(ir({}, v), {}, {
        x: v.x + y,
        y: v.y + x
      }), g.p1 = ir(ir({}, d), {}, {
        x: d.x + y,
        y: d.y + x
      });
    }
    return h += f, {
      offset: h,
      segment: g,
      rotation: p
    };
  }
  measureText(e, t) {
    var {
      measuresCache: r
    } = this, i = t || this.getText();
    if (r.has(i))
      return r.get(i);
    var n = this.measureTargetText(e, i);
    return r.set(i, n), n;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(e) {
    if (!this.glyphInfo) {
      var t = this.getText(), r = t.split(""), i = t.split(" ").length - 1, n = this.parent.getAttribute("dx").split().map((T) => T.getPixels("x")), o = this.parent.getAttribute("dy").getPixels("y"), s = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), l = this.parent.getStyle("letter-spacing"), h = 0;
      !u.hasValue() || u.getValue() === "inherit" ? h = l.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (h = u.getPixels());
      var f = [], c = t.length;
      this.letterSpacingCache = f;
      for (var v = 0; v < c; v++)
        f.push(typeof n[v] < "u" ? n[v] : h);
      var d = f.reduce((T, $, E) => E === 0 ? 0 : T + $ || 0, 0), g = this.measureText(e), p = Math.max(g + d, 0);
      this.textWidth = g, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), x = this.getStyle("startOffset").getNumber(0) * y, b = 0;
      (s === "middle" || s === "center") && (b = -p / 2), (s === "end" || s === "right") && (b = -p), b += x, r.forEach((T, $) => {
        var {
          offset: E,
          segment: S,
          rotation: C
        } = this.findSegmentToFitChar(e, s, p, y, i, b, o, T, $);
        b = E, !(!S.p0 || !S.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[$],
          p0: S.p0,
          p1: S.p1,
          rotation: C
        });
      });
    }
  }
  parsePathData(e) {
    if (this.pathLength = -1, !e)
      return [];
    var t = [], {
      pathParser: r
    } = e;
    for (r.reset(); !r.isEnd(); ) {
      var {
        current: i
      } = r, n = i ? i.x : 0, o = i ? i.y : 0, s = r.next(), u = s.type, l = [];
      switch (s.type) {
        case w.MOVE_TO:
          this.pathM(r, l);
          break;
        case w.LINE_TO:
          u = this.pathL(r, l);
          break;
        case w.HORIZ_LINE_TO:
          u = this.pathH(r, l);
          break;
        case w.VERT_LINE_TO:
          u = this.pathV(r, l);
          break;
        case w.CURVE_TO:
          this.pathC(r, l);
          break;
        case w.SMOOTH_CURVE_TO:
          u = this.pathS(r, l);
          break;
        case w.QUAD_TO:
          this.pathQ(r, l);
          break;
        case w.SMOOTH_QUAD_TO:
          u = this.pathT(r, l);
          break;
        case w.ARC:
          l = this.pathA(r);
          break;
        case w.CLOSE_PATH:
          A.pathZ(r);
          break;
      }
      s.type !== w.CLOSE_PATH ? t.push({
        type: u,
        points: l,
        start: {
          x: n,
          y: o
        },
        pathLength: this.calcLength(n, o, u, l)
      }) : t.push({
        type: w.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return t;
  }
  pathM(e, t) {
    var {
      x: r,
      y: i
    } = A.pathM(e).point;
    t.push(r, i);
  }
  pathL(e, t) {
    var {
      x: r,
      y: i
    } = A.pathL(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathH(e, t) {
    var {
      x: r,
      y: i
    } = A.pathH(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathV(e, t) {
    var {
      x: r,
      y: i
    } = A.pathV(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathC(e, t) {
    var {
      point: r,
      controlPoint: i,
      currentPoint: n
    } = A.pathC(e);
    t.push(r.x, r.y, i.x, i.y, n.x, n.y);
  }
  pathS(e, t) {
    var {
      point: r,
      controlPoint: i,
      currentPoint: n
    } = A.pathS(e);
    return t.push(r.x, r.y, i.x, i.y, n.x, n.y), w.CURVE_TO;
  }
  pathQ(e, t) {
    var {
      controlPoint: r,
      currentPoint: i
    } = A.pathQ(e);
    t.push(r.x, r.y, i.x, i.y);
  }
  pathT(e, t) {
    var {
      controlPoint: r,
      currentPoint: i
    } = A.pathT(e);
    return t.push(r.x, r.y, i.x, i.y), w.QUAD_TO;
  }
  pathA(e) {
    var {
      rX: t,
      rY: r,
      sweepFlag: i,
      xAxisRotation: n,
      centp: o,
      a1: s,
      ad: u
    } = A.pathA(e);
    return i === 0 && u > 0 && (u -= 2 * Math.PI), i === 1 && u < 0 && (u += 2 * Math.PI), [o.x, o.y, t, r, s, u, n, i];
  }
  calcLength(e, t, r, i) {
    var n = 0, o = null, s = null, u = 0;
    switch (r) {
      case w.LINE_TO:
        return this.getLineLength(e, t, i[0], i[1]);
      case w.CURVE_TO:
        for (n = 0, o = this.getPointOnCubicBezier(0, e, t, i[0], i[1], i[2], i[3], i[4], i[5]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnCubicBezier(u, e, t, i[0], i[1], i[2], i[3], i[4], i[5]), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return n;
      case w.QUAD_TO:
        for (n = 0, o = this.getPointOnQuadraticBezier(0, e, t, i[0], i[1], i[2], i[3]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnQuadraticBezier(u, e, t, i[0], i[1], i[2], i[3]), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return n;
      case w.ARC: {
        n = 0;
        var l = i[4], h = i[5], f = i[4] + h, c = Math.PI / 180;
        if (Math.abs(l - f) < c && (c = Math.abs(l - f)), o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), h < 0)
          for (u = l - c; u > f; u -= c)
            s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        else
          for (u = l + c; u < f; u += c)
            s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], f, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), n;
      }
    }
    return 0;
  }
  getPointOnLine(e, t, r, i, n) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : t, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (n - r) / (i - t + it), l = Math.sqrt(e * e / (1 + u * u));
    i < t && (l *= -1);
    var h = u * l, f = null;
    if (i === t)
      f = {
        x: o,
        y: s + h
      };
    else if ((s - r) / (o - t + it) === u)
      f = {
        x: o + l,
        y: s + h
      };
    else {
      var c = 0, v = 0, d = this.getLineLength(t, r, i, n);
      if (d < it)
        return null;
      var g = (o - t) * (i - t) + (s - r) * (n - r);
      g /= d * d, c = t + g * (i - t), v = r + g * (n - r);
      var p = this.getLineLength(o, s, c, v), y = Math.sqrt(e * e - p * p);
      l = Math.sqrt(y * y / (1 + u * u)), i < t && (l *= -1), h = u * l, f = {
        x: c + l,
        y: v + h
      };
    }
    return f;
  }
  getPointOnPath(e) {
    var t = this.getPathLength(), r = 0, i = null;
    if (e < -5e-5 || e - 5e-5 > t)
      return null;
    var {
      dataArray: n
    } = this;
    for (var o of n) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < e)) {
        r += o.pathLength;
        continue;
      }
      var s = e - r, u = 0;
      switch (o.type) {
        case w.LINE_TO:
          i = this.getPointOnLine(s, o.start.x, o.start.y, o.points[0], o.points[1], o.start.x, o.start.y);
          break;
        case w.ARC: {
          var l = o.points[4], h = o.points[5], f = o.points[4] + h;
          if (u = l + s / o.pathLength * h, h < 0 && u < f || h >= 0 && u > f)
            break;
          i = this.getPointOnEllipticalArc(o.points[0], o.points[1], o.points[2], o.points[3], u, o.points[6]);
          break;
        }
        case w.CURVE_TO:
          u = s / o.pathLength, u > 1 && (u = 1), i = this.getPointOnCubicBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3], o.points[4], o.points[5]);
          break;
        case w.QUAD_TO:
          u = s / o.pathLength, u > 1 && (u = 1), i = this.getPointOnQuadraticBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3]);
          break;
      }
      if (i)
        return i;
      break;
    }
    return null;
  }
  getLineLength(e, t, r, i) {
    return Math.sqrt((r - e) * (r - e) + (i - t) * (i - t));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((e, t) => t.pathLength > 0 ? e + t.pathLength : e, 0)), this.pathLength;
  }
  getPointOnCubicBezier(e, t, r, i, n, o, s, u, l) {
    var h = u * $o(e) + o * wo(e) + i * Co(e) + t * Ao(e), f = l * $o(e) + s * wo(e) + n * Co(e) + r * Ao(e);
    return {
      x: h,
      y: f
    };
  }
  getPointOnQuadraticBezier(e, t, r, i, n, o, s) {
    var u = o * Po(e) + i * Ro(e) + t * Io(e), l = s * Po(e) + n * Ro(e) + r * Io(e);
    return {
      x: u,
      y: l
    };
  }
  getPointOnEllipticalArc(e, t, r, i, n, o) {
    var s = Math.cos(o), u = Math.sin(o), l = {
      x: r * Math.cos(n),
      y: i * Math.sin(n)
    };
    return {
      x: e + (l.x * s - l.y * u),
      y: t + (l.x * u + l.y * s)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(e, t) {
    var r = this.getPathLength(), i = t || 0.25, n = e || r / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== n || this.equidistantCache.precision !== i) {
      this.equidistantCache = {
        step: n,
        precision: i,
        points: []
      };
      for (var o = 0, s = 0; s <= r; s += i) {
        var u = this.getPointOnPath(s), l = this.getPointOnPath(s + i);
        !u || !l || (o += this.getLineLength(u.x, u.y, l.x, l.y), o >= n && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: s
        }), o -= n));
      }
    }
  }
  getEquidistantPointOnPath(e, t, r) {
    if (this.buildEquidistantCache(t, r), e < 0 || e - this.getPathLength() > 5e-5)
      return null;
    var i = Math.round(e / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[i] || null;
  }
};
var r2 = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
var a2 = class extends Ge {
  constructor(e, t, r) {
    super(e, t, r), this.type = "image", this.loaded = false;
    var i = this.getHrefAttribute().getString();
    if (i) {
      var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
      e.images.push(this), n ? this.loadSvg(i) : this.loadImage(i), this.isSvg = n;
    }
  }
  loadImage(e) {
    var t = this;
    return xe(function* () {
      try {
        var r = yield t.document.createImage(e);
        t.image = r;
      } catch (i) {
        console.error('Error while loading image "'.concat(e, '":'), i);
      }
      t.loaded = true;
    })();
  }
  loadSvg(e) {
    var t = this;
    return xe(function* () {
      var r = r2.exec(e);
      if (r) {
        var i = r[5];
        r[4] === "base64" ? t.image = atob(i) : t.image = decodeURIComponent(i);
      } else
        try {
          var n = yield t.document.fetch(e), o = yield n.text();
          t.image = o;
        } catch (s) {
          console.error('Error while loading image "'.concat(e, '":'), s);
        }
      t.loaded = true;
    })();
  }
  renderChildren(e) {
    var {
      document: t,
      image: r,
      loaded: i
    } = this, n = this.getAttribute("x").getPixels("x"), o = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!i || !r || !s || !u)) {
      if (e.save(), e.translate(n, o), this.isSvg) {
        var l = t.canvg.forkString(e, this.image, {
          ignoreMouse: true,
          ignoreAnimation: true,
          ignoreDimensions: true,
          ignoreClear: true,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u
        });
        l.document.documentElement.parent = this, l.render();
      } else {
        var h = this.image;
        t.setViewBox({
          ctx: e,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: s,
          desiredWidth: h.width,
          height: u,
          desiredHeight: h.height
        }), this.loaded && (typeof h.complete > "u" || h.complete) && e.drawImage(h, 0, 0);
      }
      e.restore();
    }
  }
  getBoundingBox() {
    var e = this.getAttribute("x").getPixels("x"), t = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), i = this.getStyle("height").getPixels("y");
    return new he(e, t, e + r, t + i);
  }
};
var i2 = class extends Ge {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(e) {
  }
};
var n2 = class {
  constructor(e) {
    this.document = e, this.loaded = false, e.fonts.push(this);
  }
  load(e, t) {
    var r = this;
    return xe(function* () {
      try {
        var {
          document: i
        } = r, n = yield i.canvg.parser.load(t), o = n.getElementsByTagName("font");
        Array.from(o).forEach((s) => {
          var u = i.createElement(s);
          i.definitions[e] = u;
        });
      } catch (s) {
        console.error('Error while loading font "'.concat(t, '":'), s);
      }
      r.loaded = true;
    })();
  }
};
var Rl = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "style";
    var i = vt(
      Array.from(t.childNodes).map((o) => o.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), n = i.split("}");
    n.forEach((o) => {
      var s = o.trim();
      if (s) {
        var u = s.split("{"), l = u[0].split(","), h = u[1].split(";");
        l.forEach((f) => {
          var c = f.trim();
          if (c) {
            var v = e.styles[c] || {};
            if (h.forEach((p) => {
              var y = p.indexOf(":"), x = p.substr(0, y).trim(), b = p.substr(y + 1, p.length - y).trim();
              x && b && (v[x] = new O(e, x, b));
            }), e.styles[c] = v, e.stylesSpecificity[c] = x1(c), c === "@font-face") {
              var d = v["font-family"].getString().replace(/"|'/g, ""), g = v.src.getString().split(",");
              g.forEach((p) => {
                if (p.indexOf('format("svg")') > 0) {
                  var y = Tl(p);
                  y && new n2(e).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
};
Rl.parseExternalUrl = Tl;
var s2 = class extends Ge {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(e) {
    super.setContext(e);
    var t = this.getAttribute("x"), r = this.getAttribute("y");
    t.hasValue() && e.translate(t.getPixels("x"), 0), r.hasValue() && e.translate(0, r.getPixels("y"));
  }
  path(e) {
    var {
      element: t
    } = this;
    t && t.path(e);
  }
  renderChildren(e) {
    var {
      document: t,
      element: r
    } = this;
    if (r) {
      var i = r;
      if (r.type === "symbol" && (i = new _t(t, null), i.attributes.viewBox = new O(t, "viewBox", r.getAttribute("viewBox").getString()), i.attributes.preserveAspectRatio = new O(t, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), i.attributes.overflow = new O(t, "overflow", r.getAttribute("overflow").getString()), i.children = r.children, r.styles.opacity = new O(t, "opacity", this.calculateOpacity())), i.type === "svg") {
        var n = this.getStyle("width", false, true), o = this.getStyle("height", false, true);
        n.hasValue() && (i.attributes.width = new O(t, "width", n.getString())), o.hasValue() && (i.attributes.height = new O(t, "height", o.getString()));
      }
      var s = i.parent;
      i.parent = this, i.render(e), i.parent = s;
    }
  }
  getBoundingBox(e) {
    var {
      element: t
    } = this;
    return t ? t.getBoundingBox(e) : null;
  }
  elementTransform() {
    var {
      document: e,
      element: t
    } = this;
    return Be.fromElement(e, t);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
};
function nr(a3, e, t, r, i, n) {
  return a3[t * r * 4 + e * 4 + n];
}
function sr(a3, e, t, r, i, n, o) {
  a3[t * r * 4 + e * 4 + n] = o;
}
function F(a3, e, t) {
  var r = a3[e];
  return r * t;
}
function me(a3, e, t, r) {
  return e + Math.cos(a3) * t + Math.sin(a3) * r;
}
var Il = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feColorMatrix";
    var i = ie(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var n = i[0];
        i = [0.213 + 0.787 * n, 0.715 - 0.715 * n, 0.072 - 0.072 * n, 0, 0, 0.213 - 0.213 * n, 0.715 + 0.285 * n, 0.072 - 0.072 * n, 0, 0, 0.213 - 0.213 * n, 0.715 - 0.715 * n, 0.072 + 0.928 * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var o = i[0] * Math.PI / 180;
        i = [me(o, 0.213, 0.787, -0.213), me(o, 0.715, -0.715, -0.715), me(o, 0.072, -0.072, 0.928), 0, 0, me(o, 0.213, -0.213, 0.143), me(o, 0.715, 0.285, 0.14), me(o, 0.072, -0.072, -0.283), 0, 0, me(o, 0.213, -0.213, -0.787), me(o, 0.715, -0.715, 0.715), me(o, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = i, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(e, t, r, i, n) {
    for (var {
      includeOpacity: o,
      matrix: s
    } = this, u = e.getImageData(0, 0, i, n), l = 0; l < n; l++)
      for (var h = 0; h < i; h++) {
        var f = nr(u.data, h, l, i, n, 0), c = nr(u.data, h, l, i, n, 1), v = nr(u.data, h, l, i, n, 2), d = nr(u.data, h, l, i, n, 3), g = F(s, 0, f) + F(s, 1, c) + F(s, 2, v) + F(s, 3, d) + F(s, 4, 1), p = F(s, 5, f) + F(s, 6, c) + F(s, 7, v) + F(s, 8, d) + F(s, 9, 1), y = F(s, 10, f) + F(s, 11, c) + F(s, 12, v) + F(s, 13, d) + F(s, 14, 1), x = F(s, 15, f) + F(s, 16, c) + F(s, 17, v) + F(s, 18, d) + F(s, 19, 1);
        o && (g = 0, p = 0, y = 0, x *= d / 255), sr(u.data, h, l, i, n, 0, g), sr(u.data, h, l, i, n, 1, p), sr(u.data, h, l, i, n, 2, y), sr(u.data, h, l, i, n, 3, x);
      }
    e.clearRect(0, 0, i, n), e.putImageData(u, 0, 0);
  }
};
var kr = class _kr extends I {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(e, t) {
    var {
      document: r
    } = this, i = this.getAttribute("x").getPixels("x"), n = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), s = this.getStyle("height").getPixels("y");
    if (!o && !s) {
      var u = new he();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(e));
      }), i = Math.floor(u.x1), n = Math.floor(u.y1), o = Math.floor(u.width), s = Math.floor(u.height);
    }
    var l = this.removeStyles(t, _kr.ignoreStyles), h = r.createCanvas(i + o, n + s), f = h.getContext("2d");
    r.screen.setDefaults(f), this.renderChildren(f), new Il(r, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(f, 0, 0, i + o, n + s);
    var c = r.createCanvas(i + o, n + s), v = c.getContext("2d");
    r.screen.setDefaults(v), t.render(v), v.globalCompositeOperation = "destination-in", v.fillStyle = f.createPattern(h, "no-repeat"), v.fillRect(0, 0, i + o, n + s), e.fillStyle = v.createPattern(c, "no-repeat"), e.fillRect(0, 0, i + o, n + s), this.restoreStyles(t, l);
  }
  render(e) {
  }
};
kr.ignoreStyles = ["mask", "transform", "clip-path"];
var Mo = () => {
};
var o2 = class extends I {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(e) {
    var {
      document: t
    } = this, r = Reflect.getPrototypeOf(e), {
      beginPath: i,
      closePath: n
    } = e;
    r && (r.beginPath = Mo, r.closePath = Mo), Reflect.apply(i, e, []), this.children.forEach((o) => {
      if (!(typeof o.path > "u")) {
        var s = typeof o.elementTransform < "u" ? o.elementTransform() : null;
        s || (s = Be.fromElement(t, o)), s && s.apply(e), o.path(e), r && (r.closePath = n), s && s.unapply(e);
      }
    }), Reflect.apply(n, e, []), e.clip(), r && (r.beginPath = i, r.closePath = n);
  }
  render(e) {
  }
};
var Br = class _Br extends I {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(e, t) {
    var {
      document: r,
      children: i
    } = this, n = t.getBoundingBox(e);
    if (n) {
      var o = 0, s = 0;
      i.forEach((y) => {
        var x = y.extraFilterDistance || 0;
        o = Math.max(o, x), s = Math.max(s, x);
      });
      var u = Math.floor(n.width), l = Math.floor(n.height), h = u + 2 * o, f = l + 2 * s;
      if (!(h < 1 || f < 1)) {
        var c = Math.floor(n.x), v = Math.floor(n.y), d = this.removeStyles(t, _Br.ignoreStyles), g = r.createCanvas(h, f), p = g.getContext("2d");
        r.screen.setDefaults(p), p.translate(-c + o, -v + s), t.render(p), i.forEach((y) => {
          typeof y.apply == "function" && y.apply(p, 0, 0, h, f);
        }), e.drawImage(g, 0, 0, h, f, c - o, v - s, h, f), this.restoreStyles(t, d);
      }
    }
  }
  render(e) {
  }
};
Br.ignoreStyles = ["filter", "transform", "clip-path"];
var u2 = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(e, t, r, i, n) {
  }
};
var l2 = class extends I {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(e, t, r, i, n) {
  }
};
var h2 = class extends I {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(e, t, r, i, n) {
  }
};
var v2 = class extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(e, t, r, i, n) {
    var {
      document: o,
      blurRadius: s
    } = this, u = o.window ? o.window.document.body : null, l = e.canvas;
    l.id = o.getUniqueId(), u && (l.style.display = "none", u.appendChild(l)), i1(l, t, r, i, n, s), u && u.removeChild(l);
  }
};
var f2 = class extends I {
  constructor() {
    super(...arguments), this.type = "title";
  }
};
var c2 = class extends I {
  constructor() {
    super(...arguments), this.type = "desc";
  }
};
var g2 = {
  svg: _t,
  rect: Cl,
  circle: k1,
  ellipse: B1,
  line: F1,
  polyline: Al,
  polygon: j1,
  path: A,
  pattern: U1,
  marker: z1,
  defs: G1,
  linearGradient: H1,
  radialGradient: Y1,
  stop: X1,
  animate: un,
  animateColor: W1,
  animateTransform: q1,
  font: Q1,
  "font-face": K1,
  "missing-glyph": Z1,
  glyph: wl,
  text: Ce,
  tspan: Lr,
  tref: J1,
  a: e2,
  textPath: t2,
  image: a2,
  g: on,
  symbol: i2,
  style: Rl,
  use: s2,
  mask: kr,
  clipPath: o2,
  filter: Br,
  feDropShadow: u2,
  feMorphology: l2,
  feComposite: h2,
  feColorMatrix: Il,
  feGaussianBlur: v2,
  title: f2,
  desc: c2
};
function _o(a3, e) {
  var t = Object.keys(a3);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a3);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a3, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function d2(a3) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _o(Object(t), true).forEach(function(r) {
      an(a3, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a3, Object.getOwnPropertyDescriptors(t)) : _o(Object(t)).forEach(function(r) {
      Object.defineProperty(a3, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a3;
}
function p2(a3, e) {
  var t = document.createElement("canvas");
  return t.width = a3, t.height = e, t;
}
function y2(a3) {
  return Si.apply(this, arguments);
}
function Si() {
  return Si = xe(function* (a3) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, t = document.createElement("img");
    return e && (t.crossOrigin = "Anonymous"), new Promise((r, i) => {
      t.onload = () => {
        r(t);
      }, t.onerror = (n, o, s, u, l) => {
        i(l);
      }, t.src = a3;
    });
  }), Si.apply(this, arguments);
}
var $e = class _$e {
  constructor(e) {
    var {
      rootEmSize: t = 12,
      emSize: r = 12,
      createCanvas: i = _$e.createCanvas,
      createImage: n = _$e.createImage,
      anonymousCrossOrigin: o
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = e, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = e.screen, this.rootEmSize = t, this.emSize = r, this.createCanvas = i, this.createImage = this.bindCreateImage(n, o), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(e, t) {
    return typeof t == "boolean" ? (r, i) => e(r, typeof i == "boolean" ? i : t) : e;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: e
    } = this;
    return e[e.length - 1];
  }
  set emSize(e) {
    var {
      emSizeStack: t
    } = this;
    t.push(e);
  }
  popEmSize() {
    var {
      emSizeStack: e
    } = this;
    e.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((e) => e.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((e) => e.loaded);
  }
  createDocumentElement(e) {
    var t = this.createElement(e.documentElement);
    return t.root = true, t.addStylesFromStyleDefinition(), this.documentElement = t, t;
  }
  createElement(e) {
    var t = e.nodeName.replace(/^[^:]+:/, ""), r = _$e.elementTypes[t];
    return typeof r < "u" ? new r(this, e) : new N1(this, e);
  }
  createTextNode(e) {
    return new L1(this, e);
  }
  setViewBox(e) {
    this.screen.setViewBox(d2({
      document: this
    }, e));
  }
};
$e.createCanvas = p2;
$e.createImage = y2;
$e.elementTypes = g2;
function Do(a3, e) {
  var t = Object.keys(a3);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a3);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a3, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function De(a3) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Do(Object(t), true).forEach(function(r) {
      an(a3, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a3, Object.getOwnPropertyDescriptors(t)) : Do(Object(t)).forEach(function(r) {
      Object.defineProperty(a3, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a3;
}
var xt = class _xt {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new Ga(r), this.screen = new Vr(e, r), this.options = r;
    var i = new $e(this, r), n = i.createDocumentElement(t);
    this.document = i, this.documentElement = n;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(e, t) {
    var r = arguments;
    return xe(function* () {
      var i = r.length > 2 && r[2] !== void 0 ? r[2] : {}, n = new Ga(i), o = yield n.parse(t);
      return new _xt(e, o, i);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = new Ga(r), n = i.parseFromString(t);
    return new _xt(e, n, r);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return _xt.from(e, t, De(De({}, this.options), r));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return _xt.fromString(e, t, De(De({}, this.options), r));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var e = arguments, t = this;
    return xe(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      t.start(De({
        enableRedraw: true,
        ignoreAnimation: true,
        ignoreMouse: true
      }, r)), yield t.ready(), t.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: t,
      screen: r,
      options: i
    } = this;
    r.start(t, De(De({
      enableRedraw: true
    }, i), e));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    this.documentElement.resize(e, t, r);
  }
};
export {
  e2 as AElement,
  W1 as AnimateColorElement,
  un as AnimateElement,
  q1 as AnimateTransformElement,
  he as BoundingBox,
  $o as CB1,
  wo as CB2,
  Co as CB3,
  Ao as CB4,
  xt as Canvg,
  k1 as CircleElement,
  o2 as ClipPathElement,
  G1 as DefsElement,
  c2 as DescElement,
  $e as Document,
  I as Element,
  B1 as EllipseElement,
  Il as FeColorMatrixElement,
  h2 as FeCompositeElement,
  u2 as FeDropShadowElement,
  v2 as FeGaussianBlurElement,
  l2 as FeMorphologyElement,
  Br as FilterElement,
  J as Font,
  Q1 as FontElement,
  K1 as FontFaceElement,
  on as GElement,
  wl as GlyphElement,
  Pl as GradientElement,
  a2 as ImageElement,
  F1 as LineElement,
  H1 as LinearGradientElement,
  z1 as MarkerElement,
  kr as MaskElement,
  El as Matrix,
  Z1 as MissingGlyphElement,
  S1 as Mouse,
  it as PSEUDO_ZERO,
  Ga as Parser,
  A as PathElement,
  w as PathParser,
  U1 as PatternElement,
  V as Point,
  j1 as PolygonElement,
  Al as PolylineElement,
  O as Property,
  Po as QB1,
  Ro as QB2,
  Io as QB3,
  Y1 as RadialGradientElement,
  Cl as RectElement,
  Ge as RenderedElement,
  w1 as Rotate,
  _t as SVGElement,
  n2 as SVGFontLoader,
  C1 as Scale,
  Vr as Screen,
  $l as Skew,
  A1 as SkewX,
  P1 as SkewY,
  X1 as StopElement,
  Rl as StyleElement,
  i2 as SymbolElement,
  J1 as TRefElement,
  Lr as TSpanElement,
  Ce as TextElement,
  t2 as TextPathElement,
  f2 as TitleElement,
  Be as Transform,
  $1 as Translate,
  N1 as UnknownElement,
  s2 as UseElement,
  T1 as ViewPort,
  vt as compressSpaces,
  xt as default,
  x1 as getSelectorSpecificity,
  v1 as normalizeAttributeName,
  f1 as normalizeColor,
  Tl as parseExternalUrl,
  b2 as presets,
  ie as toNumbers,
  u1 as trimLeft,
  l1 as trimRight,
  Oo as vectorMagnitude,
  Eo as vectorsAngle,
  Ti as vectorsRatio
};
/*! Bundled license information:

vue-data-ui/dist/index.es-YufTdp0y.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=index.es-YufTdp0y-Y26YJRMX.js.map
