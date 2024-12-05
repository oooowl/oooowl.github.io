// node_modules/.pnpm/vue-data-ui@2.4.1/node_modules/vue-data-ui/dist/purify.es-BwOkayRK.js
function I(a) {
  "@babel/helpers - typeof";
  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, I(a);
}
function Pe(a, n) {
  return Pe = Object.setPrototypeOf || function(s, c) {
    return s.__proto__ = c, s;
  }, Pe(a, n);
}
function zt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function le(a, n, o) {
  return zt() ? le = Reflect.construct : le = function(c, g, y) {
    var N = [null];
    N.push.apply(N, g);
    var x = Function.bind.apply(c, N), j = new x();
    return y && Pe(j, y.prototype), j;
  }, le.apply(null, arguments);
}
function M(a) {
  return Gt(a) || Wt(a) || Bt(a) || $t();
}
function Gt(a) {
  if (Array.isArray(a)) return Fe(a);
}
function Wt(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
}
function Bt(a, n) {
  if (a) {
    if (typeof a == "string") return Fe(a, n);
    var o = Object.prototype.toString.call(a).slice(8, -1);
    if (o === "Object" && a.constructor && (o = a.constructor.name), o === "Map" || o === "Set") return Array.from(a);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Fe(a, n);
  }
}
function Fe(a, n) {
  (n == null || n > a.length) && (n = a.length);
  for (var o = 0, s = new Array(n); o < n; o++) s[o] = a[o];
  return s;
}
function $t() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var jt = Object.hasOwnProperty;
var ut = Object.setPrototypeOf;
var Yt = Object.isFrozen;
var Xt = Object.getPrototypeOf;
var Vt = Object.getOwnPropertyDescriptor;
var E = Object.freeze;
var b = Object.seal;
var qt = Object.create;
var vt = typeof Reflect < "u" && Reflect;
var ue = vt.apply;
var Ue = vt.construct;
ue || (ue = function(n, o, s) {
  return n.apply(o, s);
});
E || (E = function(n) {
  return n;
});
b || (b = function(n) {
  return n;
});
Ue || (Ue = function(n, o) {
  return le(n, M(o));
});
var Kt = O(Array.prototype.forEach);
var ft = O(Array.prototype.pop);
var q = O(Array.prototype.push);
var se = O(String.prototype.toLowerCase);
var De = O(String.prototype.toString);
var ct = O(String.prototype.match);
var L = O(String.prototype.replace);
var Zt = O(String.prototype.indexOf);
var Jt = O(String.prototype.trim);
var _ = O(RegExp.prototype.test);
var we = Qt(TypeError);
function O(a) {
  return function(n) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      s[c - 1] = arguments[c];
    return ue(a, n, s);
  };
}
function Qt(a) {
  return function() {
    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    return Ue(a, o);
  };
}
function l(a, n, o) {
  var s;
  o = (s = o) !== null && s !== void 0 ? s : se, ut && ut(a, null);
  for (var c = n.length; c--; ) {
    var g = n[c];
    if (typeof g == "string") {
      var y = o(g);
      y !== g && (Yt(n) || (n[c] = y), g = y);
    }
    a[g] = true;
  }
  return a;
}
function U(a) {
  var n = qt(null), o;
  for (o in a)
    ue(jt, a, [o]) === true && (n[o] = a[o]);
  return n;
}
function ie(a, n) {
  for (; a !== null; ) {
    var o = Vt(a, n);
    if (o) {
      if (o.get)
        return O(o.get);
      if (typeof o.value == "function")
        return O(o.value);
    }
    a = Xt(a);
  }
  function s(c) {
    return console.warn("fallback value for", c), null;
  }
  return s;
}
var mt = E(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Ce = E(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var Ie = E(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var er = E(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var xe = E(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
var tr = E(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var pt = E(["#text"]);
var dt = E(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var ke = E(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Tt = E(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var oe = E(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var rr = b(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ar = b(/<%[\w\W]*|[\w\W]*%>/gm);
var nr = b(/\${[\w\W]*}/gm);
var ir = b(/^data-[\-\w.\u00B7-\uFFFF]/);
var or = b(/^aria-[\-\w]+$/);
var lr = b(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var sr = b(/^(?:\w+script|data):/i);
var ur = b(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var fr = b(/^html$/i);
var cr = b(/^[a-z][.\w]*(-[.\w]+)+$/i);
var mr = function() {
  return typeof window > "u" ? null : window;
};
var pr = function(n, o) {
  if (I(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var s = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (s = o.currentScript.getAttribute(c));
  var g = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(g, {
      createHTML: function(N) {
        return N;
      },
      createScriptURL: function(N) {
        return N;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + g + " could not be created."), null;
  }
};
function _t() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mr(), n = function(e) {
    return _t(e);
  };
  if (n.version = "2.5.6", n.removed = [], !a || !a.document || a.document.nodeType !== 9)
    return n.isSupported = false, n;
  var o = a.document, s = a.document, c = a.DocumentFragment, g = a.HTMLTemplateElement, y = a.Node, N = a.Element, x = a.NodeFilter, j = a.NamedNodeMap, ht = j === void 0 ? a.NamedNodeMap || a.MozNamedAttrMap : j, Et = a.HTMLFormElement, At = a.DOMParser, K = a.trustedTypes, Z = N.prototype, yt = ie(Z, "cloneNode"), gt = ie(Z, "nextSibling"), St = ie(Z, "childNodes"), fe = ie(Z, "parentNode");
  if (typeof g == "function") {
    var ce = s.createElement("template");
    ce.content && ce.content.ownerDocument && (s = ce.content.ownerDocument);
  }
  var R = pr(K, o), me = R ? R.createHTML("") : "", J = s, pe = J.implementation, bt = J.createNodeIterator, Ot = J.createDocumentFragment, Rt = J.getElementsByTagName, Lt = o.importNode, He = {};
  try {
    He = U(s).documentMode ? s.documentMode : {};
  } catch {
  }
  var D = {};
  n.isSupported = typeof fe == "function" && pe && pe.createHTMLDocument !== void 0 && He !== 9;
  var de = rr, Te = ar, ve = nr, Mt = ir, Nt = or, Dt = sr, ze = ur, wt = cr, _e = lr, p = null, Ge = l({}, [].concat(M(mt), M(Ce), M(Ie), M(xe), M(pt))), d = null, We = l({}, [].concat(M(dt), M(ke), M(Tt), M(oe))), f = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), Y = null, he = null, Be = true, Ee = true, $e = false, je = true, H = false, Ae = true, k = false, ye = false, ge = false, z = false, Q = false, ee = false, Ye = true, Xe = false, Ct = "user-content-", Se = true, X = false, G = {}, W = null, Ve = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), qe = null, Ke = l({}, ["audio", "video", "img", "source", "image", "track"]), be = null, Ze = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), te = "http://www.w3.org/1998/Math/MathML", re = "http://www.w3.org/2000/svg", w = "http://www.w3.org/1999/xhtml", B = w, Oe = false, Re = null, It = l({}, [te, re, w], De), P, xt = ["application/xhtml+xml", "text/html"], kt = "text/html", T, $ = null, Pt = s.createElement("form"), Je = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Le = function(e) {
    $ && $ === e || ((!e || I(e) !== "object") && (e = {}), e = U(e), P = // eslint-disable-next-line unicorn/prefer-includes
    xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? P = kt : P = e.PARSER_MEDIA_TYPE, T = P === "application/xhtml+xml" ? De : se, p = "ALLOWED_TAGS" in e ? l({}, e.ALLOWED_TAGS, T) : Ge, d = "ALLOWED_ATTR" in e ? l({}, e.ALLOWED_ATTR, T) : We, Re = "ALLOWED_NAMESPACES" in e ? l({}, e.ALLOWED_NAMESPACES, De) : It, be = "ADD_URI_SAFE_ATTR" in e ? l(
      U(Ze),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      T
      // eslint-disable-line indent
    ) : Ze, qe = "ADD_DATA_URI_TAGS" in e ? l(
      U(Ke),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      T
      // eslint-disable-line indent
    ) : Ke, W = "FORBID_CONTENTS" in e ? l({}, e.FORBID_CONTENTS, T) : Ve, Y = "FORBID_TAGS" in e ? l({}, e.FORBID_TAGS, T) : {}, he = "FORBID_ATTR" in e ? l({}, e.FORBID_ATTR, T) : {}, G = "USE_PROFILES" in e ? e.USE_PROFILES : false, Be = e.ALLOW_ARIA_ATTR !== false, Ee = e.ALLOW_DATA_ATTR !== false, $e = e.ALLOW_UNKNOWN_PROTOCOLS || false, je = e.ALLOW_SELF_CLOSE_IN_ATTR !== false, H = e.SAFE_FOR_TEMPLATES || false, Ae = e.SAFE_FOR_XML !== false, k = e.WHOLE_DOCUMENT || false, z = e.RETURN_DOM || false, Q = e.RETURN_DOM_FRAGMENT || false, ee = e.RETURN_TRUSTED_TYPE || false, ge = e.FORCE_BODY || false, Ye = e.SANITIZE_DOM !== false, Xe = e.SANITIZE_NAMED_PROPS || false, Se = e.KEEP_CONTENT !== false, X = e.IN_PLACE || false, _e = e.ALLOWED_URI_REGEXP || _e, B = e.NAMESPACE || w, f = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), H && (Ee = false), Q && (z = true), G && (p = l({}, M(pt)), d = [], G.html === true && (l(p, mt), l(d, dt)), G.svg === true && (l(p, Ce), l(d, ke), l(d, oe)), G.svgFilters === true && (l(p, Ie), l(d, ke), l(d, oe)), G.mathMl === true && (l(p, xe), l(d, Tt), l(d, oe))), e.ADD_TAGS && (p === Ge && (p = U(p)), l(p, e.ADD_TAGS, T)), e.ADD_ATTR && (d === We && (d = U(d)), l(d, e.ADD_ATTR, T)), e.ADD_URI_SAFE_ATTR && l(be, e.ADD_URI_SAFE_ATTR, T), e.FORBID_CONTENTS && (W === Ve && (W = U(W)), l(W, e.FORBID_CONTENTS, T)), Se && (p["#text"] = true), k && l(p, ["html", "head", "body"]), p.table && (l(p, ["tbody"]), delete Y.tbody), E && E(e), $ = e);
  }, Qe = l({}, ["mi", "mo", "mn", "ms", "mtext"]), et = l({}, ["foreignobject", "annotation-xml"]), Ft = l({}, ["title", "style", "font", "a", "script"]), ae = l({}, Ce);
  l(ae, Ie), l(ae, er);
  var Me = l({}, xe);
  l(Me, tr);
  var Ut = function(e) {
    var t = fe(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: B,
      tagName: "template"
    });
    var r = se(e.tagName), u = se(t.tagName);
    return Re[e.namespaceURI] ? e.namespaceURI === re ? t.namespaceURI === w ? r === "svg" : t.namespaceURI === te ? r === "svg" && (u === "annotation-xml" || Qe[u]) : !!ae[r] : e.namespaceURI === te ? t.namespaceURI === w ? r === "math" : t.namespaceURI === re ? r === "math" && et[u] : !!Me[r] : e.namespaceURI === w ? t.namespaceURI === re && !et[u] || t.namespaceURI === te && !Qe[u] ? false : !Me[r] && (Ft[r] || !ae[r]) : !!(P === "application/xhtml+xml" && Re[e.namespaceURI]) : false;
  }, S = function(e) {
    q(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = me;
      } catch {
        e.remove();
      }
    }
  }, ne = function(e, t) {
    try {
      q(n.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      q(n.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is" && !d[e])
      if (z || Q)
        try {
          S(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, tt = function(e) {
    var t, r;
    if (ge)
      e = "<remove></remove>" + e;
    else {
      var u = ct(e, /^[\r\n\t ]+/);
      r = u && u[0];
    }
    P === "application/xhtml+xml" && B === w && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var A = R ? R.createHTML(e) : e;
    if (B === w)
      try {
        t = new At().parseFromString(A, P);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = pe.createDocument(B, "template", null);
      try {
        t.documentElement.innerHTML = Oe ? me : A;
      } catch {
      }
    }
    var h = t.body || t.documentElement;
    return e && r && h.insertBefore(s.createTextNode(r), h.childNodes[0] || null), B === w ? Rt.call(t, k ? "html" : "body")[0] : k ? t.documentElement : h;
  }, rt = function(e) {
    return bt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null,
      false
    );
  }, at = function(e) {
    return e instanceof Et && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof ht) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, V = function(e) {
    return I(y) === "object" ? e instanceof y : e && I(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, C = function(e, t, r) {
    D[e] && Kt(D[e], function(u) {
      u.call(n, t, r, $);
    });
  }, nt = function(e) {
    var t;
    if (C("beforeSanitizeElements", e, null), at(e) || _(/[\u0080-\uFFFF]/, e.nodeName))
      return S(e), true;
    var r = T(e.nodeName);
    if (C("uponSanitizeElement", e, {
      tagName: r,
      allowedTags: p
    }), e.hasChildNodes() && !V(e.firstElementChild) && (!V(e.content) || !V(e.content.firstElementChild)) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent) || r === "select" && _(/<template/i, e.innerHTML) || e.nodeType === 7 || Ae && e.nodeType === 8 && _(/<[/\w]/g, e.data))
      return S(e), true;
    if (!p[r] || Y[r]) {
      if (!Y[r] && ot(r) && (f.tagNameCheck instanceof RegExp && _(f.tagNameCheck, r) || f.tagNameCheck instanceof Function && f.tagNameCheck(r)))
        return false;
      if (Se && !W[r]) {
        var u = fe(e) || e.parentNode, A = St(e) || e.childNodes;
        if (A && u)
          for (var h = A.length, v = h - 1; v >= 0; --v) {
            var F = yt(A[v], true);
            F.__removalCount = (e.__removalCount || 0) + 1, u.insertBefore(F, gt(e));
          }
      }
      return S(e), true;
    }
    return e instanceof N && !Ut(e) || (r === "noscript" || r === "noembed" || r === "noframes") && _(/<\/no(script|embed|frames)/i, e.innerHTML) ? (S(e), true) : (H && e.nodeType === 3 && (t = e.textContent, t = L(t, de, " "), t = L(t, Te, " "), t = L(t, ve, " "), e.textContent !== t && (q(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), C("afterSanitizeElements", e, null), false);
  }, it = function(e, t, r) {
    if (Ye && (t === "id" || t === "name") && (r in s || r in Pt))
      return false;
    if (!(Ee && !he[t] && _(Mt, t))) {
      if (!(Be && _(Nt, t))) {
        if (!d[t] || he[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ot(e) && (f.tagNameCheck instanceof RegExp && _(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && _(f.attributeNameCheck, t) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && _(f.tagNameCheck, r) || f.tagNameCheck instanceof Function && f.tagNameCheck(r)))
          ) return false;
        } else if (!be[t]) {
          if (!_(_e, L(r, ze, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Zt(r, "data:") === 0 && qe[e])) {
              if (!($e && !_(Dt, L(r, ze, "")))) {
                if (r)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, ot = function(e) {
    return e !== "annotation-xml" && ct(e, wt);
  }, lt = function(e) {
    var t, r, u, A;
    C("beforeSanitizeAttributes", e, null);
    var h = e.attributes;
    if (h) {
      var v = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: d
      };
      for (A = h.length; A--; ) {
        t = h[A];
        var F = t, m = F.name, Ne = F.namespaceURI;
        if (r = m === "value" ? t.value : Jt(t.value), u = T(m), v.attrName = u, v.attrValue = r, v.keepAttr = true, v.forceKeepAttr = void 0, C("uponSanitizeAttribute", e, v), r = v.attrValue, Ae && _(/((--!?|])>)|<\/(style|title)/i, r)) {
          ne(m, e);
          continue;
        }
        if (!v.forceKeepAttr && (ne(m, e), !!v.keepAttr)) {
          if (!je && _(/\/>/i, r)) {
            ne(m, e);
            continue;
          }
          H && (r = L(r, de, " "), r = L(r, Te, " "), r = L(r, ve, " "));
          var st = T(e.nodeName);
          if (it(st, u, r)) {
            if (Xe && (u === "id" || u === "name") && (ne(m, e), r = Ct + r), R && I(K) === "object" && typeof K.getAttributeType == "function" && !Ne)
              switch (K.getAttributeType(st, u)) {
                case "TrustedHTML": {
                  r = R.createHTML(r);
                  break;
                }
                case "TrustedScriptURL": {
                  r = R.createScriptURL(r);
                  break;
                }
              }
            try {
              Ne ? e.setAttributeNS(Ne, m, r) : e.setAttribute(m, r), at(e) ? S(e) : ft(n.removed);
            } catch {
            }
          }
        }
      }
      C("afterSanitizeAttributes", e, null);
    }
  }, Ht = function i(e) {
    var t, r = rt(e);
    for (C("beforeSanitizeShadowDOM", e, null); t = r.nextNode(); )
      C("uponSanitizeShadowNode", t, null), !nt(t) && (t.content instanceof c && i(t.content), lt(t));
    C("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(i) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t, r, u, A, h;
    if (Oe = !i, Oe && (i = "<!-->"), typeof i != "string" && !V(i))
      if (typeof i.toString == "function") {
        if (i = i.toString(), typeof i != "string")
          throw we("dirty is not a string, aborting");
      } else
        throw we("toString is not a function");
    if (!n.isSupported) {
      if (I(a.toStaticHTML) === "object" || typeof a.toStaticHTML == "function") {
        if (typeof i == "string")
          return a.toStaticHTML(i);
        if (V(i))
          return a.toStaticHTML(i.outerHTML);
      }
      return i;
    }
    if (ye || Le(e), n.removed = [], typeof i == "string" && (X = false), X) {
      if (i.nodeName) {
        var v = T(i.nodeName);
        if (!p[v] || Y[v])
          throw we("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (i instanceof y)
      t = tt("<!---->"), r = t.ownerDocument.importNode(i, true), r.nodeType === 1 && r.nodeName === "BODY" || r.nodeName === "HTML" ? t = r : t.appendChild(r);
    else {
      if (!z && !H && !k && // eslint-disable-next-line unicorn/prefer-includes
      i.indexOf("<") === -1)
        return R && ee ? R.createHTML(i) : i;
      if (t = tt(i), !t)
        return z ? null : ee ? me : "";
    }
    t && ge && S(t.firstChild);
    for (var F = rt(X ? i : t); u = F.nextNode(); )
      u.nodeType === 3 && u === A || nt(u) || (u.content instanceof c && Ht(u.content), lt(u), A = u);
    if (A = null, X)
      return i;
    if (z) {
      if (Q)
        for (h = Ot.call(t.ownerDocument); t.firstChild; )
          h.appendChild(t.firstChild);
      else
        h = t;
      return (d.shadowroot || d.shadowrootmod) && (h = Lt.call(o, h, true)), h;
    }
    var m = k ? t.outerHTML : t.innerHTML;
    return k && p["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && _(fr, t.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + m), H && (m = L(m, de, " "), m = L(m, Te, " "), m = L(m, ve, " ")), R && ee ? R.createHTML(m) : m;
  }, n.setConfig = function(i) {
    Le(i), ye = true;
  }, n.clearConfig = function() {
    $ = null, ye = false;
  }, n.isValidAttribute = function(i, e, t) {
    $ || Le({});
    var r = T(i), u = T(e);
    return it(r, u, t);
  }, n.addHook = function(i, e) {
    typeof e == "function" && (D[i] = D[i] || [], q(D[i], e));
  }, n.removeHook = function(i) {
    if (D[i])
      return ft(D[i]);
  }, n.removeHooks = function(i) {
    D[i] && (D[i] = []);
  }, n.removeAllHooks = function() {
    D = {};
  }, n;
}
var Tr = _t();
export {
  Tr as default
};
/*! Bundled license information:

vue-data-ui/dist/purify.es-BwOkayRK.js:
  (*! @license DOMPurify 2.5.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.6/LICENSE *)
*/
//# sourceMappingURL=purify.es-BwOkayRK-PJYSFXHI.js.map
