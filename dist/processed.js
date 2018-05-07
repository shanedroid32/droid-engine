(function () {
  var __scope_0 = Array(1);

  var __scope_1 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [void 0, void 0, _8u, 0, 0, void 0, _9k, _3L, void 0, _3J, void 0, void 0];
        break;

      default:
        throw new Error("Unknown scope selector");
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var $$0 = {
    enumerable: false,
    configurable: true,
    writable: false
  };
  var $$1 = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0 = this;

  var _$1 = _$0.Object;
  var _$2 = _$1.defineProperty;
  var _$3 = _$0.Symbol;
  var _$4 = _$3.iterator;
  var _$5 = _$0.WeakMap;
  var _$6 = _$1.isExtensible;
  var _$7 = _$0.Array;
  var _$8 = _$7.prototype;
  var _$9 = _$8.slice;
  var _$A = _$0.Math;
  var _$B = _$A.imul;

  var _3N = function (t, e) {
    if (!(this instanceof _3N)) return new _3N(t, e);
    this.x = t || 0, this.y = e || 0;
  };

  var _g = _3N.prototype;

  var _6v = function (t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t);
  };

  var _6u = function (t) {
    return t * 57.29577951308232;
  };

  var _6t = function (t) {
    return t / 57.29577951308232;
  };

  var _4i = function (t) {
    return new _3N(t[0] || 0, t[1] || 0);
  };

  var _4h = function (t) {
    return new _3N(t.x || 0, t.y || 0);
  };

  var _4V = function (t) {
    return this.x += t.x, this;
  };

  var _4U = function (t) {
    return this.y += t.y, this;
  };

  var _4T = function (t) {
    return this.x += t.x, this.y += t.y, this;
  };

  var _4S = function (t) {
    return this.x += t, this.y += t, this;
  };

  var _4R = function (t) {
    return this.x += t, this;
  };

  var _4Q = function (t) {
    return this.y += t, this;
  };

  var _4P = function (t) {
    return this.x -= t.x, this;
  };

  var _4O = function (t) {
    return this.y -= t.y, this;
  };

  var _4N = function (t) {
    return this.x -= t.x, this.y -= t.y, this;
  };

  var _4M = function (t) {
    return this.x -= t, this.y -= t, this;
  };

  var _4L = function (t) {
    return this.x -= t, this;
  };

  var _4K = function (t) {
    return this.y -= t, this;
  };

  var _4J = function (t) {
    return this.x /= t.x, this;
  };

  var _4I = function (t) {
    return this.y /= t.y, this;
  };

  var _4H = function (t) {
    return this.x /= t.x, this.y /= t.y, this;
  };

  var _4G = function (t) {
    return 0 !== t ? (this.x /= t, this.y /= t) : (this.x = 0, this.y = 0), this;
  };

  var _4F = function (t) {
    return 0 !== t ? this.x /= t : this.x = 0, this;
  };

  var _4E = function (t) {
    return 0 !== t ? this.y /= t : this.y = 0, this;
  };

  var _4D = function () {
    return this.x *= -1, this;
  };

  var _4C = function () {
    return this.y *= -1, this;
  };

  var _4B = function () {
    return this.invertX(), this.invertY(), this;
  };

  var _4A = function (t) {
    return this.x *= t.x, this;
  };

  var _49 = function (t) {
    return this.y *= t.y, this;
  };

  var _48 = function (t) {
    return this.x *= t.x, this.y *= t.y, this;
  };

  var _47 = function (t) {
    return this.x *= t, this.y *= t, this;
  };

  var _46 = function (t) {
    return this.x *= t, this;
  };

  var _45 = function (t) {
    return this.y *= t, this;
  };

  var _44 = function () {
    var t = this.length();
    return 0 === t ? (this.x = 1, this.y = 0) : this.divide(_3N(t, t)), this;
  };

  var _43 = function (t, e) {
    return Math.abs(this.x) > t && (this.x *= e), Math.abs(this.y) > t && (this.y *= e), this;
  };

  var _42 = function (t, e) {
    return this.randomizeX(t, e), this.randomizeY(t, e), this;
  };

  var _41 = function (t, e) {
    var r = Math.min(t.x, e.x),
        n = Math.max(t.x, e.x);
    return this.x = _6v(r, n), this;
  };

  var _40 = function (t, e) {
    var r = Math.min(t.y, e.y),
        n = Math.max(t.y, e.y);
    return this.y = _6v(r, n), this;
  };

  var _3z = function (t, e) {
    return Math.round(Math.random()) ? this.randomizeX(t, e) : this.randomizeY(t, e), this;
  };

  var _3y = function () {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  };

  var _3x = function (t) {
    return void 0 === t && (t = 8), this.x = this.x.toFixed(t), this.y = this.y.toFixed(t), this;
  };

  var _3w = function (t, e) {
    return void 0 === e && (e = .5), this.x = (1 - e) * this.x + e * t.x, this;
  };

  var _3v = function (t, e) {
    return void 0 === e && (e = .5), this.y = (1 - e) * this.y + e * t.y, this;
  };

  var _3u = function (t, e) {
    return this.mixX(t, e), this.mixY(t, e), this;
  };

  var _3t = function () {
    return new _3N(this.x, this.y);
  };

  var _3s = function (t) {
    return this.x = t.x, this;
  };

  var _3r = function (t) {
    return this.y = t.y, this;
  };

  var _3q = function (t) {
    return this.copyX(t), this.copyY(t), this;
  };

  var _3p = function () {
    return this.x = this.y = 0, this;
  };

  var _3o = function (t) {
    return this.x * t.x + this.y * t.y;
  };

  var _3n = function (t) {
    return this.x * t.y - this.y * t.x;
  };

  var _3m = function (t) {
    var e = (this.x * t.x + this.y * t.y) / (t.x * t.x + t.y * t.y);
    return this.x = e * t.x, this.y = e * t.y, this;
  };

  var _3i = function () {
    return Math.atan2(this.y, this.x);
  };

  var _3j = function () {
    return _6u(this.horizontalAngle());
  };

  var _3l = function () {
    return Math.atan2(this.x, this.y);
  };

  var _3k = function () {
    return _6u(this.verticalAngle());
  };

  var _3h = function (t) {
    var e = this.x * Math.cos(t) - this.y * Math.sin(t),
        r = this.x * Math.sin(t) + this.y * Math.cos(t);
    return this.x = e, this.y = r, this;
  };

  var _3g = function (t) {
    return t = _6t(t), this.rotate(t);
  };

  var _3f = function (t) {
    return this.rotate(t - this.angle());
  };

  var _3e = function (t) {
    return t = _6t(t), this.rotateTo(t);
  };

  var _3d = function (t) {
    var e = this.angle() + t;
    return this.rotate(e);
  };

  var _3c = function (t) {
    return t = _6t(t), this.rotateBy(t);
  };

  var _3b = function (t) {
    return this.x - t.x;
  };

  var _3a = function (t) {
    return Math.abs(this.distanceX(t));
  };

  var _3Z = function (t) {
    return this.y - t.y;
  };

  var _3Y = function (t) {
    return Math.abs(this.distanceY(t));
  };

  var _3X = function (t) {
    return Math.sqrt(this.distanceSq(t));
  };

  var _3W = function (t) {
    var e = this.distanceX(t),
        r = this.distanceY(t);
    return e * e + r * r;
  };

  var _3U = function () {
    return Math.sqrt(this.lengthSq());
  };

  var _3V = function () {
    return this.x * this.x + this.y * this.y;
  };

  var _3T = function () {
    return 0 === this.x && 0 === this.y;
  };

  var _3S = function (t) {
    return this.x === t.x && this.y === t.y;
  };

  var _3R = function () {
    return "x:" + this.x + ", y:" + this.y;
  };

  var _3Q = function () {
    return [this.x, this.y];
  };

  var _3P = function () {
    return {
      x: this.x,
      y: this.y
    };
  };

  var _22 = function (t) {
    "use strict";

    return _4p(t) ? t : _5h(t);
  };

  var _1C = _22.prototype;

  var _1J = function (t) {
    "use strict";

    return _4x(t) ? t : _4v(t);
  };

  var _5I = function (t) {
    "use strict";

    return _5K(t) ? t : _7G(t);
  };

  var _m = function (t) {
    "use strict";

    return _4p(t) && !_4o(t) ? t : _4l(t);
  };

  var _4p = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_ITERABLE__@@"]);
  };

  var _4x = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_KEYED__@@"]);
  };

  var _5K = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_INDEXED__@@"]);
  };

  var _4o = function (t) {
    "use strict";

    return _4x(t) || _5K(t);
  };

  var _5B = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_ORDERED__@@"]);
  };

  var _7E = function (t) {
    "use strict";

    return t.value = !1, t;
  };

  var _7M = function (t) {
    "use strict";

    t && (t.value = !0);
  };

  var _1m = function () {
    "use strict";
  };

  var _1l = _1m.prototype;

  var _7K = function (t, e) {
    "use strict";

    e = e || 0;

    for (var r = Math.max(0, t.length - e), n = new Array(r), i = 0; i < r; i++) n[i] = t[i + e];

    return n;
  };

  var _5z = function (t) {
    "use strict";

    return void 0 === t.size && (t.size = t.__iterate(_5w)), t.size;
  };

  var _7I = function (t, e) {
    "use strict";

    if ("number" != typeof e) {
      var r = e >>> 0;
      if ("" + r !== e || 4294967295 === r) return NaN;
      e = r;
    }

    return e < 0 ? _5z(t) + e : e;
  };

  var _5w = function () {
    "use strict";

    return !0;
  };

  var _8V = function (t, e, r) {
    "use strict";

    return (0 === t || void 0 !== r && t <= -r) && (void 0 === e || void 0 !== r && e >= r);
  };

  var _7J = function (t, e) {
    "use strict";

    return _9W(t, e, 0);
  };

  var _8U = function (t, e) {
    "use strict";

    return _9W(t, e, e);
  };

  var _9W = function (t, e, r) {
    "use strict";

    return void 0 === t ? r : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
  };

  var _5H = function (t) {
    "use strict";

    this.next = t;
  };

  var _6M = _5H.prototype;

  var _5l = function (t, e, r, n) {
    "use strict";

    var i = 0 === t ? e : 1 === t ? r : [e, r];
    return n ? n.value = i : n = {
      value: i,
      done: !1
    }, n;
  };

  var _A6 = function () {
    "use strict";

    return {
      value: void 0,
      done: !0
    };
  };

  var _8b = function (t) {
    "use strict";

    return !!_9V(t);
  };

  var _8e = function (t) {
    "use strict";

    return t && "function" == typeof t.next;
  };

  var _7C = function (t) {
    "use strict";

    var e = _9V(t);

    return e && e.call(t);
  };

  var _9V = function (t) {
    "use strict";

    var e = t && (_1L && t[_1L] || t["@@iterator"]);
    if ("function" == typeof e) return e;
  };

  var _7B = function (t) {
    "use strict";

    return t && "number" == typeof t.length;
  };

  var _5h = function (t) {
    "use strict";

    return null === t || void 0 === t ? _76() : _4p(t) ? t.toSeq() : function (t) {
      var e = _8W(t) || "object" == typeof t && new _8X(t);
      if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
      return e;
    }(t);
  };

  var _4v = function (t) {
    "use strict";

    return null === t || void 0 === t ? _76().toKeyedSeq() : _4p(t) ? _4x(t) ? t.toSeq() : t.fromEntrySeq() : _69(t);
  };

  var _7G = function (t) {
    "use strict";

    return null === t || void 0 === t ? _76() : _4p(t) ? _4x(t) ? t.entrySeq() : t.toIndexedSeq() : _68(t);
  };

  var _4l = function (t) {
    "use strict";

    return (null === t || void 0 === t ? _76() : _4p(t) ? _4x(t) ? t.entrySeq() : t : _68(t)).toSetSeq();
  };

  var _65 = function (t) {
    "use strict";

    this._array = t, this.size = t.length;
  };

  var _8X = function (t) {
    "use strict";

    var e = Object.keys(t);
    this._object = t, this._keys = e, this.size = e.length;
  };

  var _8Z = function (t) {
    "use strict";

    this._iterable = t, this.size = t.length || t.size;
  };

  var _8c = function (t) {
    "use strict";

    this._iterator = t, this._iteratorCache = [];
  };

  var _75 = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_SEQ__@@"]);
  };

  var _76 = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[0] || (__captured__scope_2[0] = new _65([]));
  };

  var _69 = function (t) {
    "use strict";

    var e = Array.isArray(t) ? new _65(t).fromEntrySeq() : _8e(t) ? new _8c(t).fromEntrySeq() : _8b(t) ? new _8Z(t).fromEntrySeq() : "object" == typeof t ? new _8X(t) : void 0;
    if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
    return e;
  };

  var _68 = function (t) {
    "use strict";

    var e = _8W(t);

    if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
    return e;
  };

  var _8W = function (t) {
    "use strict";

    return _7B(t) ? new _65(t) : _8e(t) ? new _8c(t) : _8b(t) ? new _8Z(t) : void 0;
  };

  var _8n = function (t, e, r, n) {
    "use strict";

    var i = t._cache;

    if (i) {
      for (var o = i.length - 1, u = 0; u <= o; u++) {
        var s = i[r ? o - u : u];
        if (!1 === e(s[1], n ? s[0] : u, t)) return u + 1;
      }

      return u;
    }

    return t.__iterateUncached(e, r);
  };

  var _8m = function (t, e, r, n) {
    "use strict";

    var i = t._cache;

    if (i) {
      var o = i.length - 1,
          u = 0;
      return new _5H(function () {
        var t = i[r ? o - u : u];
        return u++ > o ? {
          value: void 0,
          done: !0
        } : _5l(e, n ? t[0] : u - 1, t[1]);
      });
    }

    return t.__iteratorUncached(e, r);
  };

  var _6x = function (t, e) {
    "use strict";

    return e ? function t(e, r, n, i) {
      return Array.isArray(r) ? e.call(i, n, _7G(r).map(function (n, i) {
        return t(e, n, i, r);
      })) : _A0(r) ? e.call(i, n, _4v(r).map(function (n, i) {
        return t(e, n, i, r);
      })) : r;
    }(e, t, "", {
      "": t
    }) : _9z(t);
  };

  var _9z = function (t) {
    "use strict";

    return Array.isArray(t) ? _7G(t).map(_9z).toList() : _A0(t) ? _4v(t).map(_9z).toMap() : t;
  };

  var _A0 = function (t) {
    "use strict";

    return t && (t.constructor === Object || void 0 === t.constructor);
  };

  var _4k = function (t, e) {
    "use strict";

    if (t === e || t != t && e != e) return !0;
    if (!t || !e) return !1;

    if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
      if (t = t.valueOf(), e = e.valueOf(), t === e || t != t && e != e) return !0;
      if (!t || !e) return !1;
    }

    return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e));
  };

  var _5y = function (t, e) {
    "use strict";

    if (t === e) return !0;
    if (!_4p(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || _4x(t) !== _4x(e) || _5K(t) !== _5K(e) || _5B(t) !== _5B(e)) return !1;
    if (0 === t.size && 0 === e.size) return !0;
    var r = !_4o(t);

    if (_5B(t)) {
      var n = t.entries();
      return e.every(function (t, e) {
        var i = n.next().value;
        return i && _4k(i[1], t) && (r || _4k(i[0], e));
      }) && n.next().done;
    }

    var i = !1;
    if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
      i = !0;
      var o = t;
      t = e, e = o;
    }

    var h = !0,
        p = e.__iterate(function (e, n) {
      if (r ? !t.has(e) : i ? !_4k(e, t.get(n, _1w)) : !_4k(t.get(n, _1w), e)) return h = !1, !1;
    });

    return h && t.size === p;
  };

  var _6y = function (t, e) {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    if (!(this instanceof _6y)) return new _6y(t, e);

    if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
      if (__captured__scope_2[11]) return __captured__scope_2[11];
      __captured__scope_2[11] = this;
    }
  };

  var _58 = function (t, e) {
    "use strict";

    if (!t) throw new Error(e);
  };

  var _70 = function (t, e, r) {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    if (!(this instanceof _70)) return new _70(t, e, r);

    if (_58(0 !== r, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), r = void 0 === r ? 1 : Math.abs(r), e < t && (r = -r), this._start = t, this._end = e, this._step = r, this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1), 0 === this.size) {
      if (__captured__scope_2[1]) return __captured__scope_2[1];
      __captured__scope_2[1] = this;
    }
  };

  var _1D = function () {
    "use strict";

    throw TypeError("Abstract");
  };

  var _21 = function () {
    "use strict";
  };

  var _1z = function () {
    "use strict";
  };

  var _1y = function () {
    "use strict";
  };

  var _5k = function (t) {
    "use strict";

    return t >>> 1 & 1073741824 | 3221225471 & t;
  };

  var _5i = function (t) {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    if (!1 === t || null === t || void 0 === t) return 0;
    if ("function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null === t || void 0 === t)) return 0;
    if (!0 === t) return 1;
    var e,
        r,
        n = typeof t;

    if ("number" === n) {
      if (t != t || t === 1 / 0) return 0;
      var i = 0 | t;

      for (i !== t && (i ^= 4294967295 * t); t > 4294967295;) i ^= t /= 4294967295;

      return _5k(i);
    }

    if ("string" === n) return t.length > 16 ? (void 0 === (r = __captured__scope_2[2][e = t]) && (r = _8S(e), __captured__scope_2[3] === 255 && (__captured__scope_2[3] = 0, __captured__scope_2[2] = {}), __captured__scope_2[3]++, __captured__scope_2[2][e] = r), r) : _8S(t);
    if ("function" == typeof t.hashCode) return t.hashCode();
    if ("object" === n) return function (t) {
      var e;
      if (void 0 !== (e = _8r.get(t))) return e;
      if (void 0 !== (e = t[_8p])) return e;

      if (!true) {
        if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[_8p])) return e;
        if (void 0 !== (e = function (t) {
          if (t && t.nodeType > 0) switch (t.nodeType) {
            case 1:
              return t.uniqueID;

            case 9:
              return t.documentElement && t.documentElement.uniqueID;
          }
        }(t))) return e;
      }

      if (e = ++__captured__scope_2[4], 1073741824 & __captured__scope_2[4] && (__captured__scope_2[4] = 0), true) _8r.set(t, e);else {
        if (void 0 !== _9g && !1 === _9g(t)) throw new Error("Non-extensible objects are not allowed as keys.");
        Object.defineProperty(t, _8p, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        });
      }
      return e;
    }(t);
    if ("function" == typeof t.toString) return _8S(t.toString());
    throw new Error("Value type " + n + " cannot be hashed.");
  };

  var _8S = function (t) {
    "use strict";

    for (var e = 0, r = 0; r < t.length; r++) e = 31 * e + t.charCodeAt(r) | 0;

    return _5k(e);
  };

  var _5A = function (t) {
    "use strict";

    _58(t !== 1 / 0, "Cannot perform this action with an infinite size.");
  };

  var _1i = function (t) {
    "use strict";

    return null === t || void 0 === t ? _5C() : _1u(t) && !_5B(t) ? t : _5C().withMutations(function (e) {
      var r = _1J(t);

      _5A(r.size), r.forEach(function (t, r) {
        return e.set(r, t);
      });
    });
  };

  var _1u = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_MAP__@@"]);
  };

  var _1q = function (t, e) {
    "use strict";

    this.ownerID = t, this.entries = e;
  };

  var _1j = _1q.prototype;

  var _A7 = function (t, e, r) {
    "use strict";

    this.ownerID = t, this.bitmap = e, this.nodes = r;
  };

  var _AA = _A7.prototype;

  var _AI = function (t, e, r) {
    "use strict";

    this.ownerID = t, this.count = e, this.nodes = r;
  };

  var _AL = _AI.prototype;

  var _A8 = function (t, e, r) {
    "use strict";

    this.ownerID = t, this.keyHash = e, this.entries = r;
  };

  var _A9 = _A8.prototype;

  var _7L = function (t, e, r) {
    "use strict";

    this.ownerID = t, this.keyHash = e, this.entry = r;
  };

  var _8z = _7L.prototype;

  var _4z = function (t, e, r) {
    "use strict";

    this._type = e, this._reverse = r, this._stack = t._root && _77(t._root);
  };

  var _8l = function (t, e) {
    "use strict";

    return _5l(t, e[0], e[1]);
  };

  var _77 = function (t, e) {
    "use strict";

    return {
      node: t,
      index: 0,
      __prev: e
    };
  };

  var _4y = function (t, e, r, n) {
    "use strict";

    var i = Object.create(_T);
    return i.size = t, i._root = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
  };

  var _5C = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[7] || (__captured__scope_2[7] = _4y(0));
  };

  var _59 = function (t, e, r) {
    "use strict";

    var n, i;

    if (t._root) {
      var o = _7E(_6O),
          u = _7E(_6b);

      if (n = _7D(t._root, t.__ownerID, 0, void 0, e, r, o, u), !u.value) return t;
      i = t.size + (o.value ? r === _1w ? -1 : 1 : 0);
    } else {
      if (r === _1w) return t;
      i = 1, n = new _1q(t.__ownerID, [[e, r]]);
    }

    return t.__ownerID ? (t.size = i, t._root = n, t.__hash = void 0, t.__altered = !0, t) : n ? _4y(i, n) : _5C();
  };

  var _7D = function (t, e, r, n, i, o, u, s) {
    "use strict";

    return t ? t.update(e, r, n, i, o, u, s) : o === _1w ? t : (_7M(s), _7M(u), new _7L(e, n, [i, o]));
  };

  var _AJ = function (t) {
    "use strict";

    return t.constructor === _7L || t.constructor === _A8;
  };

  var _A5 = function (t, e, r, n, i) {
    "use strict";

    if (t.keyHash === n) return new _A8(e, n, [t.entry, i]);
    var o,
        u = (0 === r ? t.keyHash : t.keyHash >>> r) & 31,
        s = (0 === r ? n : n >>> r) & 31,
        a = u === s ? [_A5(t, e, r + 5, n, i)] : (o = new _7L(e, n, i), u < s ? [t, o] : [o, t]);
    return new _A7(e, 1 << u | 1 << s, a);
  };

  var _56 = function (t, e, r) {
    "use strict";

    for (var i = [], o = 0; o < r.length; o++) {
      var s = r[o],
          a = _1J(s);

      _4p(s) || (a = a.map(function (t) {
        return _6x(t);
      })), i.push(a);
    }

    return _7A(t, e, i);
  };

  var _55 = function (t, e, r) {
    "use strict";

    return t && t.mergeDeep && _4p(e) ? t.mergeDeep(e) : _4k(t, e) ? t : e;
  };

  var _54 = function (t) {
    "use strict";

    return function (e, r, n) {
      if (e && e.mergeDeepWith && _4p(r)) return e.mergeDeepWith(t, r);
      var i = t(e, r, n);
      return _4k(e, i) ? e : i;
    };
  };

  var _7A = function (t, e, r) {
    "use strict";

    return 0 === (r = r.filter(function (t) {
      return 0 !== t.size;
    })).length ? t : 0 !== t.size || t.__ownerID || 1 !== r.length ? t.withMutations(function (t) {
      for (var n = e ? function (r, n) {
        t.update(n, _1w, function (t) {
          return t === _1w ? r : e(t, r, n);
        });
      } : function (e, r) {
        t.set(r, e);
      }, i = 0; i < r.length; i++) r[i].forEach(n);
    }) : t.constructor(r[0]);
  };

  var _AH = function (t) {
    "use strict";

    return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, t += t >> 8, 127 & (t += t >> 16);
  };

  var _AK = function (t, e, r, n) {
    "use strict";

    var i = n ? t : _7K(t);
    return i[e] = r, i;
  };

  var _6A = function (t) {
    "use strict";

    var e = _8h();

    if (null === t || void 0 === t) return e;
    if (_7u(t)) return t;

    var r = _5I(t),
        n = r.size;

    return 0 === n ? e : (_5A(n), n > 0 && n < 32 ? _8g(0, n, 5, null, new _8f(r.toArray())) : e.withMutations(function (t) {
      t.setSize(n), r.forEach(function (e, r) {
        return t.set(r, e);
      });
    }));
  };

  var _7u = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_LIST__@@"]);
  };

  var _8f = function (t, e) {
    "use strict";

    this.array = t, this.ownerID = e;
  };

  var _9o = _8f.prototype;

  var _9Z = function (t, e) {
    "use strict";

    var r = t._origin,
        n = t._capacity,
        i = _9c(n),
        o = t._tail;

    return u(t._root, t._level, 0);

    function u(t, s, a) {
      return 0 === s ? function (t, u) {
        var s = u === i ? o && o.array : t && t.array,
            a = u > r ? 0 : r - u,
            c = n - u;
        return c > 32 && (c = 32), function () {
          if (a === c) return _8w;
          var t = e ? --c : a++;
          return s && s[t];
        };
      }(t, a) : function (t, i, o) {
        var s,
            a = t && t.array,
            c = o > r ? 0 : r - o >> i,
            f = 1 + (n - o >> i);
        return f > 32 && (f = 32), function () {
          for (;;) {
            if (s) {
              var t = s();
              if (t !== _8w) return t;
              s = null;
            }

            if (c === f) return _8w;
            var r = e ? --f : c++;
            s = u(a && a[r], i - 5, o + (r << i));
          }
        };
      }(t, s, a);
    }
  };

  var _8g = function (t, e, r, n, i, o, u) {
    "use strict";

    var s = Object.create(_6B);
    return s.size = e - t, s._origin = t, s._capacity = e, s._level = r, s._root = n, s._tail = i, s.__ownerID = o, s.__hash = u, s.__altered = !1, s;
  };

  var _8h = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[6] || (__captured__scope_2[6] = _8g(0, 0, 5));
  };

  var _9b = function (t, e, r, n, i, o) {
    "use strict";

    var u,
        s = n >>> r & 31,
        a = t && s < t.array.length;
    if (!a && void 0 === i) return t;

    if (r > 0) {
      var c = t && t.array[s],
          f = _9b(c, e, r - 5, n, i, o);

      return f === c ? t : ((u = _A4(t, e)).array[s] = f, u);
    }

    return a && t.array[s] === i ? t : (_7M(o), u = _A4(t, e), void 0 === i && s === u.array.length - 1 ? u.array.pop() : u.array[s] = i, u);
  };

  var _A4 = function (t, e) {
    "use strict";

    return e && t && e === t.ownerID ? t : new _8f(t ? t.array.slice() : [], e);
  };

  var _9e = function (t, e) {
    "use strict";

    if (e >= _9c(t._capacity)) return t._tail;

    if (e < 1 << t._level + 5) {
      for (var r = t._root, n = t._level; r && n > 0;) r = r.array[e >>> n & 31], n -= 5;

      return r;
    }
  };

  var _9d = function (t, e, r) {
    "use strict";

    void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
    var n = t.__ownerID || new _1m(),
        i = t._origin,
        o = t._capacity,
        u = i + e,
        s = void 0 === r ? o : r < 0 ? o + r : i + r;
    if (u === i && s === o) return t;
    if (u >= s) return t.clear();

    for (var a = t._level, c = t._root, f = 0; u + f < 0;) c = new _8f(c && c.array.length ? [void 0, c] : [], n), f += 1 << (a += 5);

    f && (u += f, i += f, s += f, o += f);

    for (var h = _9c(o), p = _9c(s); p >= 1 << a + 5;) c = new _8f(c && c.array.length ? [c] : [], n), a += 5;

    var l = t._tail,
        _ = p < h ? _9e(t, s - 1) : p > h ? new _8f([], n) : l;

    if (l && p > h && u < o && l.array.length) {
      for (var v = c = _A4(c, n), m = a; m > 5; m -= 5) {
        var g = h >>> m & 31;
        v = v.array[g] = _A4(v.array[g], n);
      }

      v.array[h >>> 5 & 31] = l;
    }

    if (s < o && (_ = _ && _.removeAfter(n, 0, s)), u >= p) u -= p, s -= p, a = 5, c = null, _ = _ && _.removeBefore(n, 0, u);else if (u > i || p < h) {
      for (f = 0; c;) {
        var w = u >>> a & 31;
        if (w !== p >>> a & 31) break;
        w && (f += (1 << a) * w), a -= 5, c = c.array[w];
      }

      c && u > i && (c = c.removeBefore(n, a, u - f)), c && p < h && (c = c.removeAfter(n, a, p - f)), f && (u -= f, s -= f);
    }
    return t.__ownerID ? (t.size = s - u, t._origin = u, t._capacity = s, t._level = a, t._root = c, t._tail = _, t.__hash = void 0, t.__altered = !0, t) : _8g(u, s, a, c, _);
  };

  var _9a = function (t, e, r) {
    "use strict";

    for (var n = [], o = 0, s = 0; s < r.length; s++) {
      var a = r[s],
          c = _5I(a);

      c.size > o && (o = c.size), _4p(a) || (c = c.map(function (t) {
        return _6x(t);
      })), n.push(c);
    }

    return o > t.size && (t = t.setSize(o)), _7A(t, e, n);
  };

  var _9c = function (t) {
    "use strict";

    return t < 32 ? 0 : t - 1 >>> 5 << 5;
  };

  var _52 = function (t) {
    "use strict";

    return null === t || void 0 === t ? _79() : _6P(t) ? t : _79().withMutations(function (e) {
      var r = _1J(t);

      _5A(r.size), r.forEach(function (t, r) {
        return e.set(r, t);
      });
    });
  };

  var _6P = function (t) {
    "use strict";

    return _1u(t) && _5B(t);
  };

  var _8j = function (t, e, r, n) {
    "use strict";

    var i = Object.create(_52.prototype);
    return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = r, i.__hash = n, i;
  };

  var _79 = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[5] || (__captured__scope_2[5] = _8j(_5C(), _8h()));
  };

  var _8k = function (t, e, r) {
    "use strict";

    var n,
        i,
        o = t._map,
        u = t._list,
        s = o.get(e),
        a = void 0 !== s;

    if (r === _1w) {
      if (!a) return t;
      u.size >= 32 && u.size >= 2 * o.size ? (i = u.filter(function (t, e) {
        return void 0 !== t && s !== e;
      }), n = i.toKeyedSeq().map(function (t) {
        return t[0];
      }).flip().toMap(), t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID)) : (n = o.remove(e), i = s === u.size - 1 ? u.pop() : u.set(s, void 0));
    } else if (a) {
      if (r === u.get(s)[1]) return t;
      n = o, i = u.set(s, [e, r]);
    } else n = o.set(e, u.size), i = u.set(u.size, [e, r]);

    return t.__ownerID ? (t.size = n.size, t._map = n, t._list = i, t.__hash = void 0, t) : _8j(n, i);
  };

  var _6G = function (t, e) {
    "use strict";

    this._iter = t, this._useKeys = e, this.size = t.size;
  };

  var _6I = function (t) {
    "use strict";

    this._iter = t, this.size = t.size;
  };

  var _6E = function (t) {
    "use strict";

    this._iter = t, this.size = t.size;
  };

  var _5t = function (t) {
    "use strict";

    this._iter = t, this.size = t.size;
  };

  var _4t = function (t) {
    "use strict";

    var e = _5m(t);

    return e._iter = t, e.size = t.size, e.flip = function () {
      return t;
    }, e.reverse = function () {
      var e = t.reverse.apply(this);
      return e.flip = function () {
        return t.reverse();
      }, e;
    }, e.has = function (e) {
      return t.includes(e);
    }, e.includes = function (e) {
      return t.has(e);
    }, e.cacheResult = _74, e.__iterateUncached = function (e, r) {
      var n = this;
      return t.__iterate(function (t, r) {
        return !1 !== e(r, t, n);
      }, r);
    }, e.__iteratorUncached = function (e, r) {
      if (e === 2) {
        var n = t.__iterator(e, r);

        return new _5H(function () {
          var t = n.next();

          if (!t.done) {
            var e = t.value[0];
            t.value[0] = t.value[1], t.value[1] = e;
          }

          return t;
        });
      }

      return t.__iterator(e === 1 ? 0 : 1, r);
    }, e;
  };

  var _63 = function (t, e, r) {
    "use strict";

    var n = _5m(t);

    return n.size = t.size, n.has = function (e) {
      return t.has(e);
    }, n.get = function (n, i) {
      var o = t.get(n, _1w);
      return o === _1w ? i : e.call(r, o, n, t);
    }, n.__iterateUncached = function (n, i) {
      var o = this;
      return t.__iterate(function (t, i, u) {
        return !1 !== n(e.call(r, t, i, u), i, o);
      }, i);
    }, n.__iteratorUncached = function (n, i) {
      var o = t.__iterator(2, i);

      return new _5H(function () {
        var i = o.next();
        if (i.done) return i;
        var u = i.value,
            s = u[0];
        return _5l(n, s, e.call(r, u[1], s, t), i);
      });
    }, n;
  };

  var _62 = function (t, e) {
    "use strict";

    var r = _5m(t);

    return r._iter = t, r.size = t.size, r.reverse = function () {
      return t;
    }, t.flip && (r.flip = function () {
      var e = _4t(t);

      return e.reverse = function () {
        return t.flip();
      }, e;
    }), r.get = function (r, n) {
      return t.get(e ? r : -1 - r, n);
    }, r.has = function (r) {
      return t.has(e ? r : -1 - r);
    }, r.includes = function (e) {
      return t.includes(e);
    }, r.cacheResult = _74, r.__iterate = function (e, r) {
      var n = this;
      return t.__iterate(function (t, r) {
        return e(t, r, n);
      }, !r);
    }, r.__iterator = function (e, r) {
      return t.__iterator(e, !r);
    }, r;
  };

  var _64 = function (t, e, r, n) {
    "use strict";

    var i = _5m(t);

    return n && (i.has = function (n) {
      var i = t.get(n, _1w);
      return i !== _1w && !!e.call(r, i, n, t);
    }, i.get = function (n, i) {
      var o = t.get(n, _1w);
      return o !== _1w && e.call(r, o, n, t) ? o : i;
    }), i.__iterateUncached = function (i, o) {
      var u = this,
          s = 0;
      return t.__iterate(function (t, o, a) {
        if (e.call(r, t, o, a)) return s++, i(t, n ? o : s - 1, u);
      }, o), s;
    }, i.__iteratorUncached = function (i, o) {
      var u = t.__iterator(2, o),
          s = 0;

      return new _5H(function () {
        for (;;) {
          var o = u.next();
          if (o.done) return o;
          var a = o.value,
              c = a[0],
              f = a[1];
          if (e.call(r, f, c, t)) return _5l(i, n ? c : s++, f, o);
        }
      });
    }, i;
  };

  var _61 = function (t, e, r, n) {
    "use strict";

    var i = t.size;
    if (void 0 !== e && (e |= 0), void 0 !== r && (r === 1 / 0 ? r = i : r |= 0), _8V(e, r, i)) return t;

    var o = _7J(e, i),
        u = _8U(r, i);

    if (o != o || u != u) return _61(t.toSeq().cacheResult(), e, r, n);
    var s,
        a = u - o;
    a == a && (s = a < 0 ? 0 : a);

    var c = _5m(t);

    return c.size = 0 === s ? s : t.size && s || void 0, !n && _75(t) && s >= 0 && (c.get = function (e, r) {
      return (e = _7I(this, e)) >= 0 && e < s ? t.get(e + o, r) : r;
    }), c.__iterateUncached = function (e, r) {
      var i = this;
      if (0 === s) return 0;
      if (r) return this.cacheResult().__iterate(e, r);
      var u = 0,
          a = !0,
          c = 0;
      return t.__iterate(function (t, r) {
        if (!a || !(a = u++ < o)) return c++, !1 !== e(t, n ? r : c - 1, i) && c !== s;
      }), c;
    }, c.__iteratorUncached = function (e, r) {
      if (0 !== s && r) return this.cacheResult().__iterator(e, r);

      var i = 0 !== s && t.__iterator(e, r),
          u = 0,
          a = 0;

      return new _5H(function () {
        for (; u++ < o;) i.next();

        if (++a > s) return {
          value: void 0,
          done: !0
        };
        var t = i.next();
        return n || e === 1 ? t : _5l(e, a - 1, e === 0 ? void 0 : t.value[1], t);
      });
    }, c;
  };

  var _5n = function (t, e, r, n) {
    "use strict";

    var i = _5m(t);

    return i.__iterateUncached = function (i, o) {
      var u = this;
      if (o) return this.cacheResult().__iterate(i, o);
      var s = !0,
          a = 0;
      return t.__iterate(function (t, o, c) {
        if (!s || !(s = e.call(r, t, o, c))) return a++, i(t, n ? o : a - 1, u);
      }), a;
    }, i.__iteratorUncached = function (i, o) {
      var u = this;
      if (o) return this.cacheResult().__iterator(i, o);

      var s = t.__iterator(2, o),
          a = !0,
          c = 0;

      return new _5H(function () {
        var t, o, f;

        do {
          if ((t = s.next()).done) return n || i === 1 ? t : _5l(i, c++, i === 0 ? void 0 : t.value[1], t);
          var h = t.value;
          o = h[0], f = h[1], a && (a = e.call(r, f, o, u));
        } while (a);

        return i === 2 ? t : _5l(i, o, f, t);
      });
    }, i;
  };

  var _5v = function (t, e, r) {
    "use strict";

    var n = _5m(t);

    return n.__iterateUncached = function (n, i) {
      var o = 0,
          s = !1;
      return function t(a, c) {
        var f = this;

        a.__iterate(function (i, a) {
          return (!e || c < e) && _4p(i) ? t(i, c + 1) : !1 === n(i, r ? a : o++, f) && (s = !0), !s;
        }, i);
      }(t, 0), o;
    }, n.__iteratorUncached = function (n, i) {
      var o = t.__iterator(n, i),
          s = [],
          a = 0;

      return new _5H(function () {
        for (; o;) {
          var t = o.next();

          if (!1 === t.done) {
            var c = t.value;
            if (n === 2 && (c = c[1]), e && !(s.length < e) || !_4p(c)) return r ? t : _5l(n, a++, c, t);
            s.push(o), o = c.__iterator(n, i);
          } else o = s.pop();
        }

        return {
          value: void 0,
          done: !0
        };
      });
    }, n;
  };

  var _51 = function (t, e, r) {
    "use strict";

    e || (e = _78);

    var n = _4x(t),
        i = 0,
        o = t.toSeq().map(function (e, n) {
      return [n, e, i++, r ? r(e, n, t) : e];
    }).toArray();

    return o.sort(function (t, r) {
      return e(t[3], r[3]) || t[2] - r[2];
    }).forEach(n ? function (t, e) {
      o[e].length = 2;
    } : function (t, e) {
      o[e] = t[1];
    }), n ? _4v(o) : _5K(t) ? _7G(o) : _4l(o);
  };

  var _5q = function (t, e, r) {
    "use strict";

    if (e || (e = _78), r) {
      var n = t.toSeq().map(function (e, n) {
        return [e, r(e, n, t)];
      }).reduce(function (t, r) {
        return _8T(e, t[1], r[1]) ? r : t;
      });
      return n && n[0];
    }

    return t.reduce(function (t, r) {
      return _8T(e, t, r) ? r : t;
    });
  };

  var _8T = function (t, e, r) {
    "use strict";

    var n = t(r, e);
    return 0 === n && r !== e && (void 0 === r || null === r || r != r) || n > 0;
  };

  var _7H = function (t, e, n) {
    "use strict";

    var i = _5m(t);

    return i.size = new _65(n).map(function (t) {
      return t.size;
    }).min(), i.__iterate = function (t, e) {
      for (var r, n = this.__iterator(1, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this););

      return i;
    }, i.__iteratorUncached = function (t, i) {
      var o = n.map(function (t) {
        return t = _22(t), _7C(i ? t.reverse() : t);
      }),
          u = 0,
          s = !1;
      return new _5H(function () {
        var r;
        return s || (r = o.map(function (t) {
          return t.next();
        }), s = r.some(function (t) {
          return t.done;
        })), s ? {
          value: void 0,
          done: !0
        } : _5l(t, u++, e.apply(null, r.map(function (t) {
          return t.value;
        })));
      });
    }, i;
  };

  var _4u = function (t, e) {
    "use strict";

    return _75(t) ? e : t.constructor(e);
  };

  var _9f = function (t) {
    "use strict";

    if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
  };

  var _9X = function (t) {
    "use strict";

    return _5A(t.size), _5z(t);
  };

  var _5s = function (t) {
    "use strict";

    return _4x(t) ? _1J : _5K(t) ? _5I : _m;
  };

  var _5m = function (t) {
    "use strict";

    return Object.create((_4x(t) ? _4v : _5K(t) ? _7G : _4l).prototype);
  };

  var _74 = function () {
    "use strict";

    return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : _5h.prototype.cacheResult.call(this);
  };

  var _78 = function (t, e) {
    "use strict";

    return t > e ? 1 : t < e ? -1 : 0;
  };

  var _57 = function (t) {
    "use strict";

    var e = _7C(t);

    if (!e) {
      if (!_7B(t)) throw new TypeError("Expected iterable or array-like: " + t);
      e = _7C(_22(t));
    }

    return e;
  };

  var _72 = function (t, e) {
    "use strict";

    var r,
        n = function (o) {
      if (o instanceof n) return o;
      if (!(this instanceof n)) return new n(o);

      if (!r) {
        r = !0;
        var u = Object.keys(t);
        !function (t, e) {
          try {
            e.forEach(function (t, e) {
              Object.defineProperty(t, e, {
                get: function () {
                  return this.get(e);
                },
                set: function (t) {
                  _58(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t);
                }
              });
            }.bind(void 0, t));
          } catch (t) {}
        }(i, u), i.size = u.length, i._name = e, i._keys = u, i._defaultValues = t;
      }

      this._map = _1i(o);
    },
        i = n.prototype = Object.create(_73);

    return i.constructor = n, n;
  };

  var _9x = function (t, e, r) {
    "use strict";

    var n = Object.create(Object.getPrototypeOf(t));
    return n._map = e, n.__ownerID = r, n;
  };

  var _9y = function (t) {
    "use strict";

    return t._name || t.constructor.name || "Record";
  };

  var _1B = function (t) {
    "use strict";

    return null === t || void 0 === t ? _p() : _3G(t) && !_5B(t) ? t : _p().withMutations(function (e) {
      var r = _m(t);

      _5A(r.size), r.forEach(function (t) {
        return e.add(t);
      });
    });
  };

  var _3G = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_SET__@@"]);
  };

  var _4s = function (t, e) {
    "use strict";

    return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
  };

  var _o = function (t, e) {
    "use strict";

    var r = Object.create(_W);
    return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r;
  };

  var _p = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[9] || (__captured__scope_2[9] = _o(_5C()));
  };

  var _4q = function (t) {
    "use strict";

    return null === t || void 0 === t ? _6i() : _6e(t) ? t : _6i().withMutations(function (e) {
      var r = _m(t);

      _5A(r.size), r.forEach(function (t) {
        return e.add(t);
      });
    });
  };

  var _6e = function (t) {
    "use strict";

    return _3G(t) && _5B(t);
  };

  var _6h = function (t, e) {
    "use strict";

    var r = Object.create(_4r);
    return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r;
  };

  var _6i = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[8] || (__captured__scope_2[8] = _6h(_79()));
  };

  var _6C = function (t) {
    "use strict";

    return null === t || void 0 === t ? _8i() : _7d(t) ? t : _8i().unshiftAll(t);
  };

  var _7d = function (t) {
    "use strict";

    return !(!t || !t["@@__IMMUTABLE_STACK__@@"]);
  };

  var _9Y = function (t, e, r, n) {
    "use strict";

    var i = Object.create(_6D);
    return i.size = t, i._head = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
  };

  var _8i = function () {
    "use strict";

    var __captured__scope_2 = __scope_0[0] || __scope_1(0);

    return __captured__scope_2[10] || (__captured__scope_2[10] = _9Y(0));
  };

  var _5r = function (t, e) {
    "use strict";

    return e;
  };

  var _5x = function (t, e) {
    "use strict";

    return [e, t];
  };

  var _60 = function (t) {
    "use strict";

    return function () {
      return !t.apply(this, arguments);
    };
  };

  var _5p = function (t) {
    "use strict";

    return function () {
      return -t.apply(this, arguments);
    };
  };

  var _25 = function (t) {
    "use strict";

    return "string" == typeof t ? JSON.stringify(t) : String(t);
  };

  var _7F = function () {
    "use strict";

    return _7K(arguments);
  };

  var _5o = function (t, e) {
    "use strict";

    return t < e ? 1 : t > e ? -1 : 0;
  };

  var _5j = function (t, e) {
    "use strict";

    return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
  };

  var _7O = function () {
    "use strict";

    return "[Iterator]";
  };

  var _7N = function () {
    "use strict";

    return this.toString();
  };

  var _7P = function () {
    "use strict";

    return this;
  };

  var _8R = function () {
    "use strict";

    return _5h(arguments);
  };

  var _6q = function () {
    "use strict";

    return this;
  };

  var _6p = function () {
    "use strict";

    return this.__toString("Seq {", "}");
  };

  var _6o = function () {
    "use strict";

    return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
  };

  var _6n = function (t, e) {
    "use strict";

    return _8n(this, t, e, !0);
  };

  var _6m = function (t, e) {
    "use strict";

    return _8m(this, t, e, !0);
  };

  var _6d = function () {
    "use strict";

    return this;
  };

  var _90 = function () {
    "use strict";

    return _7G(arguments);
  };

  var _8I = function () {
    "use strict";

    return this;
  };

  var _8H = function () {
    "use strict";

    return this.__toString("Seq [", "]");
  };

  var _8G = function (t, e) {
    "use strict";

    return _8n(this, t, e, !1);
  };

  var _8F = function (t, e) {
    "use strict";

    return _8m(this, t, e, !1);
  };

  var _6l = function () {
    "use strict";

    return _4l(arguments);
  };

  var _6r = function () {
    "use strict";

    return this;
  };

  var _8L = function (t, e) {
    "use strict";

    return this.has(t) ? this._array[_7I(this, t)] : e;
  };

  var _8K = function (t, e) {
    "use strict";

    for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++) if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;

    return i;
  };

  var _8J = function (t, e) {
    "use strict";

    var r = this._array,
        n = r.length - 1,
        i = 0;
    return new _5H(function () {
      return i > n ? {
        value: void 0,
        done: !0
      } : _5l(t, i, r[e ? n - i++ : i++]);
    });
  };

  var _9w = function (t, e) {
    "use strict";

    return void 0 === e || this.has(t) ? this._object[t] : e;
  };

  var _9v = function (t) {
    "use strict";

    return this._object.hasOwnProperty(t);
  };

  var _9u = function (t, e) {
    "use strict";

    for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; o <= i; o++) {
      var u = n[e ? i - o : o];
      if (!1 === t(r[u], u, this)) return o + 1;
    }

    return o;
  };

  var _9t = function (t, e) {
    "use strict";

    var r = this._object,
        n = this._keys,
        i = n.length - 1,
        o = 0;
    return new _5H(function () {
      var u = n[e ? i - o : o];
      return o++ > i ? {
        value: void 0,
        done: !0
      } : _5l(t, u, r[u]);
    });
  };

  var _9s = function (t, e) {
    "use strict";

    if (e) return this.cacheResult().__iterate(t, e);

    var r = this._iterable,
        n = _7C(r),
        i = 0;

    if (_8e(n)) for (var o; !(o = n.next()).done && !1 !== t(o.value, i++, this););
    return i;
  };

  var _9r = function (t, e) {
    "use strict";

    if (e) return this.cacheResult().__iterator(t, e);

    var r = this._iterable,
        n = _7C(r);

    if (!_8e(n)) return new _5H(_A6);
    var i = 0;
    return new _5H(function () {
      var e = n.next();
      return e.done ? e : _5l(t, i++, e.value);
    });
  };

  var _9q = function (t, e) {
    "use strict";

    if (e) return this.cacheResult().__iterate(t, e);

    for (var r, n = this._iterator, i = this._iteratorCache, o = 0; o < i.length;) if (!1 === t(i[o], o++, this)) return o;

    for (; !(r = n.next()).done;) {
      var u = r.value;
      if (i[o] = u, !1 === t(u, o++, this)) break;
    }

    return o;
  };

  var _9p = function (t, e) {
    "use strict";

    if (e) return this.cacheResult().__iterator(t, e);
    var r = this._iterator,
        n = this._iteratorCache,
        i = 0;
    return new _5H(function () {
      if (i >= n.length) {
        var e = r.next();
        if (e.done) return e;
        n[i] = e.value;
      }

      return _5l(t, i, n[i++]);
    });
  };

  var _9U = function () {
    "use strict";

    return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
  };

  var _9T = function (t, e) {
    "use strict";

    return this.has(t) ? this._value : e;
  };

  var _9S = function (t) {
    "use strict";

    return _4k(this._value, t);
  };

  var _9R = function (t, e) {
    "use strict";

    var r = this.size;
    return _8V(t, e, r) ? this : new _6y(this._value, _8U(e, r) - _7J(t, r));
  };

  var _9Q = function () {
    "use strict";

    return this;
  };

  var _9P = function (t) {
    "use strict";

    return _4k(this._value, t) ? 0 : -1;
  };

  var _9O = function (t) {
    "use strict";

    return _4k(this._value, t) ? this.size : -1;
  };

  var _9N = function (t, e) {
    "use strict";

    for (var r = 0; r < this.size; r++) if (!1 === t(this._value, r, this)) return r + 1;

    return r;
  };

  var _9M = function (t, e) {
    "use strict";

    var r = this,
        n = 0;
    return new _5H(function () {
      return n < r.size ? _5l(t, n++, r._value) : {
        value: void 0,
        done: !0
      };
    });
  };

  var _9L = function (t) {
    "use strict";

    return t instanceof _6y ? _4k(this._value, t._value) : _5y(t);
  };

  var _9K = function () {
    "use strict";

    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
  };

  var _9J = function (t, e) {
    "use strict";

    return this.has(t) ? this._start + _7I(this, t) * this._step : e;
  };

  var _9I = function (t) {
    "use strict";

    var e = (t - this._start) / this._step;
    return e >= 0 && e < this.size && e === Math.floor(e);
  };

  var _9H = function (t, e) {
    "use strict";

    return _8V(t, e, this.size) ? this : (t = _7J(t, this.size), (e = _8U(e, this.size)) <= t ? new _70(0, 0) : new _70(this.get(t, this._end), this.get(e, this._end), this._step));
  };

  var _9G = function (t) {
    "use strict";

    var e = t - this._start;

    if (e % this._step == 0) {
      var r = e / this._step;
      if (r >= 0 && r < this.size) return r;
    }

    return -1;
  };

  var _9F = function (t) {
    "use strict";

    return this.indexOf(t);
  };

  var _9E = function (t, e) {
    "use strict";

    for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; o <= r; o++) {
      if (!1 === t(i, o, this)) return o + 1;
      i += e ? -n : n;
    }

    return o;
  };

  var _9D = function (t, e) {
    "use strict";

    var r = this.size - 1,
        n = this._step,
        i = e ? this._start + r * n : this._start,
        o = 0;
    return new _5H(function () {
      var u = i;
      return i += e ? -n : n, o > r ? {
        value: void 0,
        done: !0
      } : _5l(t, o++, u);
    });
  };

  var _9C = function (t) {
    "use strict";

    return t instanceof _70 ? this._start === t._start && this._end === t._end && this._step === t._step : _5y(this, t);
  };

  var _1v = function () {
    "use strict";

    var e = _5D.call(arguments, 0);

    return _5C().withMutations(function (t) {
      for (var r = 0; r < e.length; r += 2) {
        if (r + 1 >= e.length) throw new Error("Missing value for key: " + e[r]);
        t.set(e[r], e[r + 1]);
      }
    });
  };

  var _1h = function () {
    "use strict";

    return this.__toString("Map {", "}");
  };

  var _1g = function (t, e) {
    "use strict";

    return this._root ? this._root.get(0, void 0, t, e) : e;
  };

  var _1f = function (t, e) {
    "use strict";

    return _59(this, t, e);
  };

  var _1e = function (t, e) {
    "use strict";

    return this.updateIn(t, _1w, function () {
      return e;
    });
  };

  var _1O = function (t) {
    "use strict";

    return _59(this, t, _1w);
  };

  var _1N = function (t) {
    "use strict";

    return this.updateIn(t, function () {
      return _1w;
    });
  };

  var _1d = function (t, e, r) {
    "use strict";

    return 1 === arguments.length ? t(this) : this.updateIn([t], e, r);
  };

  var _1c = function (t, e, r) {
    "use strict";

    r || (r = e, e = void 0);

    var n = function t(e, r, n, i) {
      var o = e === _1w,
          u = r.next();

      if (u.done) {
        var s = o ? n : e,
            a = i(s);
        return a === s ? e : a;
      }

      _58(o || e && e.set, "invalid keyPath");

      var c = u.value,
          f = o ? _1w : e.get(c, _1w),
          h = t(f, r, n, i);
      return h === f ? e : h === _1w ? e.remove(c) : (o ? _5C() : e).set(c, h);
    }(this, _57(t), e, r);

    return n === _1w ? void 0 : n;
  };

  var _1b = function () {
    "use strict";

    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : _5C();
  };

  var _1a = function () {
    "use strict";

    return _56(this, void 0, arguments);
  };

  var _1Z = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return _56(this, e, r);
  };

  var _1Y = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return this.updateIn(e, _5C(), function (t) {
      return "function" == typeof t.merge ? t.merge.apply(t, r) : r[r.length - 1];
    });
  };

  var _1X = function () {
    "use strict";

    return _56(this, _55, arguments);
  };

  var _1W = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return _56(this, _54(e), r);
  };

  var _1V = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return this.updateIn(e, _5C(), function (t) {
      return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, r) : r[r.length - 1];
    });
  };

  var _1U = function (t) {
    "use strict";

    return _52(_51(this, t));
  };

  var _1T = function (t, e) {
    "use strict";

    return _52(_51(this, e, t));
  };

  var _u = function (t) {
    "use strict";

    var e = this.asMutable();
    return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
  };

  var _s = function () {
    "use strict";

    return this.__ownerID ? this : this.__ensureOwner(new _1m());
  };

  var _q = function () {
    "use strict";

    return this.__ensureOwner();
  };

  var _1S = function () {
    "use strict";

    return this.__altered;
  };

  var _1R = function (t, e) {
    "use strict";

    return new _4z(this, t, e);
  };

  var _1Q = function (t, e) {
    "use strict";

    var r = this,
        n = 0;
    return this._root && this._root.iterate(function (e) {
      return n++, t(e[1], e[0], r);
    }, e), n;
  };

  var _1P = function (t) {
    "use strict";

    return t === this.__ownerID ? this : t ? _4y(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
  };

  var _1t = function (t, e, r, n) {
    "use strict";

    for (var i = this.entries, o = 0, u = i.length; o < u; o++) if (_4k(r, i[o][0])) return i[o][1];

    return n;
  };

  var _1s = function (t, e, r, n, i, o, u) {
    "use strict";

    for (var s = i === _1w, a = this.entries, c = 0, f = a.length; c < f && !_4k(n, a[c][0]); c++);

    var h = c < f;
    if (h ? a[c][1] === i : s) return this;

    if (_7M(u), (s || !h) && _7M(o), !s || 1 !== a.length) {
      if (!h && !s && a.length >= 8) return function (t, e, r, n) {
        t || (t = new _1m());

        for (var i = new _7L(t, _5i(r), [r, n]), o = 0; o < e.length; o++) {
          var u = e[o];
          i = i.update(t, 0, void 0, u[0], u[1]);
        }

        return i;
      }(t, a, n, i);
      var p = t && t === this.ownerID,
          l = p ? a : _7K(a);
      return h ? s ? c === f - 1 ? l.pop() : l[c] = l.pop() : l[c] = [n, i] : l.push([n, i]), p ? (this.entries = l, this) : new _1q(t, l);
    }
  };

  var _AD = function (t, e, r, n) {
    "use strict";

    void 0 === e && (e = _5i(r));
    var i = 1 << ((0 === t ? e : e >>> t) & 31),
        o = this.bitmap;
    return 0 == (o & i) ? n : this.nodes[_AH(o & i - 1)].get(t + 5, e, r, n);
  };

  var _AC = function (t, e, r, n, i, o, u) {
    "use strict";

    void 0 === r && (r = _5i(n));
    var s = (0 === e ? r : r >>> e) & 31,
        a = 1 << s,
        c = this.bitmap,
        f = 0 != (c & a);
    if (!f && i === _1w) return this;

    var h = _AH(c & a - 1),
        p = this.nodes,
        l = f ? p[h] : void 0,
        _ = _7D(l, t, e + 5, r, n, i, o, u);

    if (_ === l) return this;
    if (!f && _ && p.length >= 16) return function (t, e, r, n, i) {
      for (var o = 0, u = new Array(32), s = 0; 0 !== r; s++, r >>>= 1) u[s] = 1 & r ? e[o++] : void 0;

      return u[n] = i, new _AI(t, o + 1, u);
    }(t, p, c, s, _);
    if (f && !_ && 2 === p.length && _AJ(p[1 ^ h])) return p[1 ^ h];
    if (f && _ && 1 === p.length && _AJ(_)) return _;
    var g = t && t === this.ownerID,
        w = f ? _ ? c : c ^ a : c | a,
        b = f ? _ ? _AK(p, h, _, g) : function (t, e, r) {
      var n = t.length - 1;
      if (r && e === n) return t.pop(), t;

      for (var i = new Array(n), o = 0, u = 0; u < n; u++) u === e && (o = 1), i[u] = t[u + o];

      return i;
    }(p, h, g) : function (t, e, r, n) {
      var i = t.length + 1;
      if (n && e + 1 === i) return t[e] = r, t;

      for (var o = new Array(i), u = 0, s = 0; s < i; s++) s === e ? (o[s] = r, u = -1) : o[s] = t[s + u];

      return o;
    }(p, h, _, g);
    return g ? (this.bitmap = w, this.nodes = b, this) : new _A7(t, w, b);
  };

  var _AN = function (t, e, r, n) {
    "use strict";

    void 0 === e && (e = _5i(r));
    var i = (0 === t ? e : e >>> t) & 31,
        o = this.nodes[i];
    return o ? o.get(t + 5, e, r, n) : n;
  };

  var _AM = function (t, e, r, n, i, o, u) {
    "use strict";

    void 0 === r && (r = _5i(n));
    var s = (0 === e ? r : r >>> e) & 31,
        a = i === _1w,
        c = this.nodes,
        f = c[s];
    if (a && !f) return this;

    var h = _7D(f, t, e + 5, r, n, i, o, u);

    if (h === f) return this;
    var p = this.count;

    if (f) {
      if (!h && --p < 8) return function (t, e, r, n) {
        for (var i = 0, o = 0, u = new Array(r), s = 0, a = 1, c = e.length; s < c; s++, a <<= 1) {
          var f = e[s];
          void 0 !== f && s !== n && (i |= a, u[o++] = f);
        }

        return new _A7(t, i, u);
      }(t, c, p, s);
    } else p++;

    var l = t && t === this.ownerID,
        _ = _AK(c, s, h, l);

    return l ? (this.count = p, this.nodes = _, this) : new _AI(t, p, _);
  };

  var _AF = function (t, e, r, n) {
    "use strict";

    for (var i = this.entries, o = 0, u = i.length; o < u; o++) if (_4k(r, i[o][0])) return i[o][1];

    return n;
  };

  var _AE = function (t, e, r, n, i, o, u) {
    "use strict";

    void 0 === r && (r = _5i(n));
    var s = i === _1w;
    if (r !== this.keyHash) return s ? this : (_7M(u), _7M(o), _A5(this, t, e, r, [n, i]));

    for (var a = this.entries, c = 0, f = a.length; c < f && !_4k(n, a[c][0]); c++);

    var h = c < f;
    if (h ? a[c][1] === i : s) return this;
    if (_7M(u), (s || !h) && _7M(o), s && 2 === f) return new _7L(t, this.keyHash, a[1 ^ c]);
    var p = t && t === this.ownerID,
        l = p ? a : _7K(a);
    return h ? s ? c === f - 1 ? l.pop() : l[c] = l.pop() : l[c] = [n, i] : l.push([n, i]), p ? (this.entries = l, this) : new _A8(t, this.keyHash, l);
  };

  var _9j = function (t, e, r, n) {
    "use strict";

    return _4k(r, this.entry[0]) ? this.entry[1] : n;
  };

  var _9i = function (t, e, r, n, i, o, u) {
    "use strict";

    var s = i === _1w,
        a = _4k(n, this.entry[0]);

    return (a ? i === this.entry[1] : s) ? this : (_7M(u), s ? void _7M(o) : a ? t && t === this.ownerID ? (this.entry[1] = i, this) : new _7L(t, this.keyHash, [n, i]) : (_7M(o), _A5(this, t, e, _5i(n), [n, i])));
  };

  var _1r = function (t, e) {
    "use strict";

    for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++) if (!1 === t(r[e ? i - n : n])) return !1;
  };

  var _AB = function (t, e) {
    "use strict";

    for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
      var o = r[e ? i - n : n];
      if (o && !1 === o.iterate(t, e)) return !1;
    }
  };

  var _9h = function (t, e) {
    "use strict";

    return t(this.entry);
  };

  var _6a = function () {
    "use strict";

    for (var t = this._type, e = this._stack; e;) {
      var r,
          n = e.node,
          i = e.index++;

      if (n.entry) {
        if (0 === i) return _8l(t, n.entry);
      } else if (n.entries) {
        if (r = n.entries.length - 1, i <= r) return _8l(t, n.entries[this._reverse ? r - i : i]);
      } else if (r = n.nodes.length - 1, i <= r) {
        var o = n.nodes[this._reverse ? r - i : i];

        if (o) {
          if (o.entry) return _8l(t, o.entry);
          e = this._stack = _77(o, e);
        }

        continue;
      }

      e = this._stack = this._stack.__prev;
    }

    return {
      value: void 0,
      done: !0
    };
  };

  var _7v = function () {
    "use strict";

    return this(arguments);
  };

  var _8E = function () {
    "use strict";

    return this.__toString("List [", "]");
  };

  var _8D = function (t, e) {
    "use strict";

    if ((t = _7I(this, t)) >= 0 && t < this.size) {
      var r = _9e(this, t += this._origin);

      return r && r.array[t & 31];
    }

    return e;
  };

  var _8C = function (t, e) {
    "use strict";

    return function (t, e, r) {
      if ((e = _7I(t, e)) != e) return t;
      if (e >= t.size || e < 0) return t.withMutations(function (t) {
        e < 0 ? _9d(t, e).set(0, r) : _9d(t, 0, e + 1).set(e, r);
      });
      e += t._origin;

      var n = t._tail,
          i = t._root,
          o = _7E(_6b);

      return e >= _9c(t._capacity) ? n = _9b(n, t.__ownerID, 0, e, r, o) : i = _9b(i, t.__ownerID, t._level, e, r, o), o.value ? t.__ownerID ? (t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t) : _8g(t._origin, t._capacity, t._level, i, n) : t;
    }(this, t, e);
  };

  var _7w = function (t) {
    "use strict";

    return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
  };

  var _8B = function (t, e) {
    "use strict";

    return this.splice(t, 0, e);
  };

  var _8A = function () {
    "use strict";

    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : _8h();
  };

  var _89 = function () {
    "use strict";

    var t = arguments,
        e = this.size;
    return this.withMutations(function (r) {
      _9d(r, 0, e + t.length);

      for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
    });
  };

  var _88 = function () {
    "use strict";

    return _9d(this, 0, -1);
  };

  var _87 = function () {
    "use strict";

    var t = arguments;
    return this.withMutations(function (e) {
      _9d(e, -t.length);

      for (var r = 0; r < t.length; r++) e.set(r, t[r]);
    });
  };

  var _86 = function () {
    "use strict";

    return _9d(this, 1);
  };

  var _85 = function () {
    "use strict";

    return _9a(this, void 0, arguments);
  };

  var _84 = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return _9a(this, e, r);
  };

  var _83 = function () {
    "use strict";

    return _9a(this, _55, arguments);
  };

  var _82 = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return _9a(this, _54(e), r);
  };

  var _81 = function (t) {
    "use strict";

    return _9d(this, 0, t);
  };

  var _80 = function (t, e) {
    "use strict";

    var r = this.size;
    return _8V(t, e, r) ? this : _9d(this, _7J(t, r), _8U(e, r));
  };

  var _7z = function (t, e) {
    "use strict";

    var r = 0,
        n = _9Z(this, e);

    return new _5H(function () {
      var e = n();
      return e === _8w ? {
        value: void 0,
        done: !0
      } : _5l(t, r++, e);
    });
  };

  var _7y = function (t, e) {
    "use strict";

    for (var r, n = 0, i = _9Z(this, e); (r = i()) !== _8w && !1 !== t(r, n++, this););

    return n;
  };

  var _7x = function (t) {
    "use strict";

    return t === this.__ownerID ? this : t ? _8g(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this);
  };

  var _A2 = function (t, e, r) {
    "use strict";

    if (r === e ? 1 << e : 0 === this.array.length) return this;
    var n = r >>> e & 31;
    if (n >= this.array.length) return new _8f([], t);
    var i,
        o = 0 === n;

    if (e > 0) {
      var u = this.array[n];
      if ((i = u && u.removeBefore(t, e - 5, r)) === u && o) return this;
    }

    if (o && !i) return this;

    var s = _A4(this, t);

    if (!o) for (var a = 0; a < n; a++) s.array[a] = void 0;
    return i && (s.array[n] = i), s;
  };

  var _A1 = function (t, e, r) {
    "use strict";

    if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
    var n,
        i = r - 1 >>> e & 31;
    if (i >= this.array.length) return this;

    if (e > 0) {
      var o = this.array[i];
      if ((n = o && o.removeAfter(t, e - 5, r)) === o && i === this.array.length - 1) return this;
    }

    var u = _A4(this, t);

    return u.array.splice(i + 1), n && (u.array[i] = n), u;
  };

  var _6Q = function () {
    "use strict";

    return this(arguments);
  };

  var _6Z = function () {
    "use strict";

    return this.__toString("OrderedMap {", "}");
  };

  var _6Y = function (t, e) {
    "use strict";

    var r = this._map.get(t);

    return void 0 !== r ? this._list.get(r)[1] : e;
  };

  var _6X = function () {
    "use strict";

    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : _79();
  };

  var _6W = function (t, e) {
    "use strict";

    return _8k(this, t, e);
  };

  var _6R = function (t) {
    "use strict";

    return _8k(this, t, _1w);
  };

  var _6V = function () {
    "use strict";

    return this._map.wasAltered() || this._list.wasAltered();
  };

  var _6U = function (t, e) {
    "use strict";

    var r = this;
    return this._list.__iterate(function (e) {
      return e && t(e[1], e[0], r);
    }, e);
  };

  var _6T = function (t, e) {
    "use strict";

    return this._list.fromEntrySeq().__iterator(t, e);
  };

  var _6S = function (t) {
    "use strict";

    if (t === this.__ownerID) return this;

    var e = this._map.__ensureOwner(t),
        r = this._list.__ensureOwner(t);

    return t ? _8j(e, r, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = r, this);
  };

  var _7Z = function (t, e) {
    "use strict";

    return this._iter.get(t, e);
  };

  var _7Y = function (t) {
    "use strict";

    return this._iter.has(t);
  };

  var _7X = function () {
    "use strict";

    return this._iter.valueSeq();
  };

  var _7W = function () {
    "use strict";

    var t = this,
        e = _62(this, !0);

    return this._useKeys || (e.valueSeq = function () {
      return t._iter.toSeq().reverse();
    }), e;
  };

  var _7V = function (t, e) {
    "use strict";

    var r = this,
        n = _63(this, t, e);

    return this._useKeys || (n.valueSeq = function () {
      return r._iter.toSeq().map(t, e);
    }), n;
  };

  var _7U = function (t, e) {
    "use strict";

    var r,
        n = this;
    return this._iter.__iterate(this._useKeys ? function (e, r) {
      return t(e, r, n);
    } : (r = e ? _9X(this) : 0, function (i) {
      return t(i, e ? --r : r++, n);
    }), e);
  };

  var _7T = function (t, e) {
    "use strict";

    if (this._useKeys) return this._iter.__iterator(t, e);

    var r = this._iter.__iterator(1, e),
        n = e ? _9X(this) : 0;

    return new _5H(function () {
      var i = r.next();
      return i.done ? i : _5l(t, e ? --n : n++, i.value, i);
    });
  };

  var _7S = function (t) {
    "use strict";

    return this._iter.includes(t);
  };

  var _7R = function (t, e) {
    "use strict";

    var r = this,
        n = 0;
    return this._iter.__iterate(function (e) {
      return t(e, n++, r);
    }, e);
  };

  var _7Q = function (t, e) {
    "use strict";

    var r = this._iter.__iterator(1, e),
        n = 0;

    return new _5H(function () {
      var e = r.next();
      return e.done ? e : _5l(t, n++, e.value, e);
    });
  };

  var _7c = function (t) {
    "use strict";

    return this._iter.includes(t);
  };

  var _7b = function (t, e) {
    "use strict";

    var r = this;
    return this._iter.__iterate(function (e) {
      return t(e, e, r);
    }, e);
  };

  var _7a = function (t, e) {
    "use strict";

    var r = this._iter.__iterator(1, e);

    return new _5H(function () {
      var e = r.next();
      return e.done ? e : _5l(t, e.value, e.value, e);
    });
  };

  var _8P = function () {
    "use strict";

    return this._iter.toSeq();
  };

  var _8O = function (t, e) {
    "use strict";

    var r = this;
    return this._iter.__iterate(function (e) {
      if (e) {
        _9f(e);

        var n = _4p(e);

        return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
      }
    }, e);
  };

  var _8N = function (t, e) {
    "use strict";

    var r = this._iter.__iterator(1, e);

    return new _5H(function () {
      for (;;) {
        var e = r.next();
        if (e.done) return e;
        var n = e.value;

        if (n) {
          _9f(n);

          var i = _4p(n);

          return _5l(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
        }
      }
    });
  };

  var _9B = function () {
    "use strict";

    return this.__toString(_9y(this) + " {", "}");
  };

  var _9A = function (t) {
    "use strict";

    return this._defaultValues.hasOwnProperty(t);
  };

  var _99 = function (t, e) {
    "use strict";

    if (!this.has(t)) return e;
    var r = this._defaultValues[t];
    return this._map ? this._map.get(t, r) : r;
  };

  var _98 = function () {
    "use strict";

    if (this.__ownerID) return this._map && this._map.clear(), this;
    var t = this.constructor;
    return t._empty || (t._empty = _9x(this, _5C()));
  };

  var _97 = function (t, e) {
    "use strict";

    if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + _9y(this));

    if (this._map && !this._map.has(t)) {
      var r = this._defaultValues[t];
      if (e === r) return this;
    }

    var n = this._map && this._map.set(t, e);

    return this.__ownerID || n === this._map ? this : _9x(this, n);
  };

  var _92 = function (t) {
    "use strict";

    if (!this.has(t)) return this;

    var e = this._map && this._map.remove(t);

    return this.__ownerID || e === this._map ? this : _9x(this, e);
  };

  var _96 = function () {
    "use strict";

    return this._map.wasAltered();
  };

  var _95 = function (t, e) {
    "use strict";

    var r = this;
    return _1J(this._defaultValues).map(function (t, e) {
      return r.get(e);
    }).__iterator(t, e);
  };

  var _94 = function (t, e) {
    "use strict";

    var r = this;
    return _1J(this._defaultValues).map(function (t, e) {
      return r.get(e);
    }).__iterate(t, e);
  };

  var _93 = function (t) {
    "use strict";

    if (t === this.__ownerID) return this;

    var e = this._map && this._map.__ensureOwner(t);

    return t ? _9x(this, e, t) : (this.__ownerID = t, this._map = e, this);
  };

  var _3I = function () {
    "use strict";

    return this(arguments);
  };

  var _3H = function (t) {
    "use strict";

    return this(_1J(t).keySeq());
  };

  var _1A = function () {
    "use strict";

    return this.__toString("Set {", "}");
  };

  var _19 = function (t) {
    "use strict";

    return this._map.has(t);
  };

  var _18 = function (t) {
    "use strict";

    return _4s(this, this._map.set(t, !0));
  };

  var _x = function (t) {
    "use strict";

    return _4s(this, this._map.remove(t));
  };

  var _17 = function () {
    "use strict";

    return _4s(this, this._map.clear());
  };

  var _16 = function () {
    "use strict";

    var e = _5D.call(arguments, 0);

    return 0 === (e = e.filter(function (t) {
      return 0 !== t.size;
    })).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function (t) {
      for (var r = 0; r < e.length; r++) _m(e[r]).forEach(function (e) {
        return t.add(e);
      });
    }) : this.constructor(e[0]);
  };

  var _15 = function () {
    "use strict";

    var e = _5D.call(arguments, 0);

    if (0 === e.length) return this;
    e = e.map(function (t) {
      return _m(t);
    });
    var r = this;
    return this.withMutations(function (t) {
      r.forEach(function (r) {
        e.every(function (t) {
          return t.includes(r);
        }) || t.remove(r);
      });
    });
  };

  var _14 = function () {
    "use strict";

    var e = _5D.call(arguments, 0);

    if (0 === e.length) return this;
    e = e.map(function (t) {
      return _m(t);
    });
    var r = this;
    return this.withMutations(function (t) {
      r.forEach(function (r) {
        e.some(function (t) {
          return t.includes(r);
        }) && t.remove(r);
      });
    });
  };

  var _w = function () {
    "use strict";

    return this.union.apply(this, arguments);
  };

  var _v = function (e) {
    "use strict";

    var r = _5D.call(arguments, 1);

    return this.union.apply(this, r);
  };

  var _13 = function (t) {
    "use strict";

    return _4q(_51(this, t));
  };

  var _12 = function (t, e) {
    "use strict";

    return _4q(_51(this, e, t));
  };

  var _11 = function () {
    "use strict";

    return this._map.wasAltered();
  };

  var _10 = function (t, e) {
    "use strict";

    var r = this;
    return this._map.__iterate(function (e, n) {
      return t(n, n, r);
    }, e);
  };

  var _z = function (t, e) {
    "use strict";

    return this._map.map(function (t, e) {
      return e;
    }).__iterator(t, e);
  };

  var _y = function (t) {
    "use strict";

    if (t === this.__ownerID) return this;

    var e = this._map.__ensureOwner(t);

    return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this);
  };

  var _6g = function () {
    "use strict";

    return this(arguments);
  };

  var _6f = function (t) {
    "use strict";

    return this(_1J(t).keySeq());
  };

  var _6j = function () {
    "use strict";

    return this.__toString("OrderedSet {", "}");
  };

  var _7e = function () {
    "use strict";

    return this(arguments);
  };

  var _7s = function () {
    "use strict";

    return this.__toString("Stack [", "]");
  };

  var _7r = function (t, e) {
    "use strict";

    var r = this._head;

    for (t = _7I(this, t); r && t--;) r = r.next;

    return r ? r.value : e;
  };

  var _7q = function () {
    "use strict";

    return this._head && this._head.value;
  };

  var _7p = function () {
    "use strict";

    if (0 === arguments.length) return this;

    for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--) e = {
      value: arguments[r],
      next: e
    };

    return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : _9Y(t, e);
  };

  var _7o = function (t) {
    "use strict";

    if (0 === (t = _5I(t)).size) return this;

    _5A(t.size);

    var e = this.size,
        r = this._head;
    return t.reverse().forEach(function (t) {
      e++, r = {
        value: t,
        next: r
      };
    }), this.__ownerID ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : _9Y(e, r);
  };

  var _7n = function () {
    "use strict";

    return this.slice(1);
  };

  var _7m = function () {
    "use strict";

    return this.push.apply(this, arguments);
  };

  var _7l = function (t) {
    "use strict";

    return this.pushAll(t);
  };

  var _7k = function () {
    "use strict";

    return this.pop.apply(this, arguments);
  };

  var _7j = function () {
    "use strict";

    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : _8i();
  };

  var _7i = function (t, e) {
    "use strict";

    if (_8V(t, e, this.size)) return this;

    var r = _7J(t, this.size),
        n = _8U(e, this.size);

    if (n !== this.size) return _1z.prototype.slice.call(this, t, e);

    for (var i = this.size - r, o = this._head; r--;) o = o.next;

    return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : _9Y(i, o);
  };

  var _7h = function (t) {
    "use strict";

    return t === this.__ownerID ? this : t ? _9Y(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
  };

  var _7g = function (t, e) {
    "use strict";

    if (e) return this.reverse().__iterate(t);

    for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this);) n = n.next;

    return r;
  };

  var _7f = function (t, e) {
    "use strict";

    if (e) return this.reverse().__iterator(t);
    var r = 0,
        n = this._head;
    return new _5H(function () {
      if (n) {
        var e = n.value;
        return n = n.next, _5l(t, r++, e);
      }

      return {
        value: void 0,
        done: !0
      };
    });
  };

  var _26 = function () {
    "use strict";

    _5A(this.size);

    var t = new Array(this.size || 0);
    return this.valueSeq().__iterate(function (e, r) {
      t[r] = e;
    }), t;
  };

  var _3F = function () {
    "use strict";

    return new _6I(this);
  };

  var _3E = function () {
    "use strict";

    return this.toSeq().map(function (t) {
      return t && "function" == typeof t.toJS ? t.toJS() : t;
    }).__toJS();
  };

  var _3D = function () {
    "use strict";

    return this.toSeq().map(function (t) {
      return t && "function" == typeof t.toJSON ? t.toJSON() : t;
    }).__toJS();
  };

  var _3C = function () {
    "use strict";

    return new _6G(this, !0);
  };

  var _3B = function () {
    "use strict";

    return _1i(this.toKeyedSeq());
  };

  var _1F = function () {
    "use strict";

    _5A(this.size);

    var t = {};
    return this.__iterate(function (e, r) {
      t[r] = e;
    }), t;
  };

  var _3A = function () {
    "use strict";

    return _52(this.toKeyedSeq());
  };

  var _39 = function () {
    "use strict";

    return _4q(_4x(this) ? this.valueSeq() : this);
  };

  var _38 = function () {
    "use strict";

    return _1B(_4x(this) ? this.valueSeq() : this);
  };

  var _37 = function () {
    "use strict";

    return new _6E(this);
  };

  var _36 = function () {
    "use strict";

    return _5K(this) ? this.toIndexedSeq() : _4x(this) ? this.toKeyedSeq() : this.toSetSeq();
  };

  var _35 = function () {
    "use strict";

    return _6C(_4x(this) ? this.valueSeq() : this);
  };

  var _34 = function () {
    "use strict";

    return _6A(_4x(this) ? this.valueSeq() : this);
  };

  var _33 = function () {
    "use strict";

    return "[Iterable]";
  };

  var _32 = function (t, e) {
    "use strict";

    return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
  };

  var _31 = function () {
    "use strict";

    var e = _5D.call(arguments, 0);

    return _4u(this, function (t, e) {
      var r = _4x(t),
          i = [t].concat(e).map(function (t) {
        return _4p(t) ? r && (t = _1J(t)) : t = r ? _69(t) : _68(Array.isArray(t) ? t : [t]), t;
      }).filter(function (t) {
        return 0 !== t.size;
      });

      if (0 === i.length) return t;

      if (1 === i.length) {
        var o = i[0];
        if (o === t || r && _4x(o) || _5K(t) && _5K(o)) return o;
      }

      var c = new _65(i);
      return r ? c = c.toKeyedSeq() : _5K(t) || (c = c.toSetSeq()), (c = c.flatten(!0)).size = i.reduce(function (t, e) {
        if (void 0 !== t) {
          var r = e.size;
          if (void 0 !== r) return t + r;
        }
      }, 0), c;
    }(this, e));
  };

  var _j = function (t) {
    "use strict";

    return this.some(function (e) {
      return _4k(e, t);
    });
  };

  var _1M = function () {
    "use strict";

    return this.__iterator(2);
  };

  var _30 = function (t, e) {
    "use strict";

    _5A(this.size);

    var r = !0;
    return this.__iterate(function (n, i, o) {
      if (!t.call(e, n, i, o)) return r = !1, !1;
    }), r;
  };

  var _2z = function (t, e) {
    "use strict";

    return _4u(this, _64(this, t, e, !0));
  };

  var _2y = function (t, e, r) {
    "use strict";

    var n = this.findEntry(t, e);
    return n ? n[1] : r;
  };

  var _2x = function (t, e) {
    "use strict";

    return _5A(this.size), this.__iterate(e ? t.bind(e) : t);
  };

  var _2w = function (t) {
    "use strict";

    _5A(this.size), t = void 0 !== t ? "" + t : ",";
    var e = "",
        r = !0;
    return this.__iterate(function (n) {
      r ? r = !1 : e += t, e += null !== n && void 0 !== n ? n.toString() : "";
    }), e;
  };

  var _2v = function () {
    "use strict";

    return this.__iterator(0);
  };

  var _2u = function (t, e) {
    "use strict";

    return _4u(this, _63(this, t, e));
  };

  var _2t = function (t, e, r) {
    "use strict";

    var n, i;
    return _5A(this.size), arguments.length < 2 ? i = !0 : n = e, this.__iterate(function (e, o, u) {
      i ? (i = !1, n = e) : n = t.call(r, n, e, o, u);
    }), n;
  };

  var _2s = function (t, e, r) {
    "use strict";

    var n = this.toKeyedSeq().reverse();
    return n.reduce.apply(n, arguments);
  };

  var _2r = function () {
    "use strict";

    return _4u(this, _62(this, !0));
  };

  var _2q = function (t, e) {
    "use strict";

    return _4u(this, _61(this, t, e, !0));
  };

  var _2p = function (t, e) {
    "use strict";

    return !this.every(_60(t), e);
  };

  var _2o = function (t) {
    "use strict";

    return _4u(this, _51(this, t));
  };

  var _2n = function () {
    "use strict";

    return this.__iterator(1);
  };

  var _2m = function () {
    "use strict";

    return this.slice(0, -1);
  };

  var _2l = function () {
    "use strict";

    return void 0 !== this.size ? 0 === this.size : !this.some(function () {
      return !0;
    });
  };

  var _2k = function (t, e) {
    "use strict";

    return _5z(t ? this.toSeq().filter(t, e) : this);
  };

  var _2j = function (t, e) {
    "use strict";

    return function (t, e, r) {
      var n = _1i().asMutable();

      return t.__iterate(function (i, o) {
        n.update(e.call(r, i, o, t), 0, function (t) {
          return t + 1;
        });
      }), n.asImmutable();
    }(this, t, e);
  };

  var _2i = function (t) {
    "use strict";

    return _5y(this, t);
  };

  var _2h = function () {
    "use strict";

    var t = this;
    if (t._cache) return new _65(t._cache);
    var e = t.toSeq().map(_5x).toIndexedSeq();
    return e.fromEntrySeq = function () {
      return t.toSeq();
    }, e;
  };

  var _2g = function (t, e) {
    "use strict";

    return this.filter(_60(t), e);
  };

  var _2f = function (t, e, r) {
    "use strict";

    var n = r;
    return this.__iterate(function (r, i, o) {
      if (t.call(e, r, i, o)) return n = [i, r], !1;
    }), n;
  };

  var _2e = function (t, e) {
    "use strict";

    var r = this.findEntry(t, e);
    return r && r[0];
  };

  var _2d = function (t, e, r) {
    "use strict";

    return this.toKeyedSeq().reverse().find(t, e, r);
  };

  var _2c = function (t, e, r) {
    "use strict";

    return this.toKeyedSeq().reverse().findEntry(t, e, r);
  };

  var _2b = function (t, e) {
    "use strict";

    return this.toKeyedSeq().reverse().findKey(t, e);
  };

  var _2a = function () {
    "use strict";

    return this.find(_5w);
  };

  var _23 = function (t, e) {
    "use strict";

    return _4u(this, function (t, e, r) {
      var n = _5s(t);

      return t.toSeq().map(function (i, o) {
        return n(e.call(r, i, o, t));
      }).flatten(!0);
    }(this, t, e));
  };

  var _2Z = function (t) {
    "use strict";

    return _4u(this, _5v(this, t, !0));
  };

  var _2Y = function () {
    "use strict";

    return new _5t(this);
  };

  var _2X = function (t, e) {
    "use strict";

    return this.find(function (e, r) {
      return _4k(r, t);
    }, void 0, e);
  };

  var _2W = function (t, e) {
    "use strict";

    for (var r, n = this, i = _57(t); !(r = i.next()).done;) {
      var o = r.value;
      if ((n = n && n.get ? n.get(o, _1w) : _1w) === _1w) return e;
    }

    return n;
  };

  var _2V = function (t, e) {
    "use strict";

    return function (t, e, r) {
      var n = _4x(t),
          i = (_5B(t) ? _52() : _1i()).asMutable();

      t.__iterate(function (o, u) {
        i.update(e.call(r, o, u, t), function (t) {
          return (t = t || []).push(n ? [u, o] : o), t;
        });
      });

      var o = _5s(t);

      return i.map(function (e) {
        return _4u(t, o(e));
      });
    }(this, t, e);
  };

  var _2U = function (t) {
    "use strict";

    return this.get(t, _1w) !== _1w;
  };

  var _2T = function (t) {
    "use strict";

    return this.getIn(t, _1w) !== _1w;
  };

  var _2S = function (t) {
    "use strict";

    return t = "function" == typeof t.includes ? t : _22(t), this.every(function (e) {
      return t.includes(e);
    });
  };

  var _2R = function (t) {
    "use strict";

    return (t = "function" == typeof t.isSubset ? t : _22(t)).isSubset(this);
  };

  var _2Q = function (t) {
    "use strict";

    return this.findKey(function (e) {
      return _4k(e, t);
    });
  };

  var _2P = function () {
    "use strict";

    return this.toSeq().map(_5r).toIndexedSeq();
  };

  var _2O = function () {
    "use strict";

    return this.toSeq().reverse().first();
  };

  var _2N = function (t) {
    "use strict";

    return this.toKeyedSeq().reverse().keyOf(t);
  };

  var _2M = function (t) {
    "use strict";

    return _5q(this, t);
  };

  var _2L = function (t, e) {
    "use strict";

    return _5q(this, e, t);
  };

  var _2K = function (t) {
    "use strict";

    return _5q(this, t ? _5p(t) : _5o);
  };

  var _2J = function (t, e) {
    "use strict";

    return _5q(this, e ? _5p(e) : _5o, t);
  };

  var _2I = function () {
    "use strict";

    return this.slice(1);
  };

  var _2H = function (t) {
    "use strict";

    return this.slice(Math.max(0, t));
  };

  var _2G = function (t) {
    "use strict";

    return _4u(this, this.toSeq().reverse().skip(t).reverse());
  };

  var _2F = function (t, e) {
    "use strict";

    return _4u(this, _5n(this, t, e, !0));
  };

  var _2E = function (t, e) {
    "use strict";

    return this.skipWhile(_60(t), e);
  };

  var _2D = function (t, e) {
    "use strict";

    return _4u(this, _51(this, e, t));
  };

  var _2C = function (t) {
    "use strict";

    return this.slice(0, Math.max(0, t));
  };

  var _2B = function (t) {
    "use strict";

    return _4u(this, this.toSeq().reverse().take(t).reverse());
  };

  var _2A = function (t, e) {
    "use strict";

    return _4u(this, function (t, e, r) {
      var n = _5m(t);

      return n.__iterateUncached = function (n, i) {
        var o = this;
        if (i) return this.cacheResult().__iterate(n, i);
        var u = 0;
        return t.__iterate(function (t, i, s) {
          return e.call(r, t, i, s) && ++u && n(t, i, o);
        }), u;
      }, n.__iteratorUncached = function (n, i) {
        var o = this;
        if (i) return this.cacheResult().__iterator(n, i);

        var u = t.__iterator(2, i),
            s = !0;

        return new _5H(function () {
          if (!s) return {
            value: void 0,
            done: !0
          };
          var t = u.next();
          if (t.done) return t;
          var i = t.value,
              a = i[0],
              c = i[1];
          return e.call(r, c, a, o) ? n === 2 ? t : _5l(n, a, c, t) : (s = !1, {
            value: void 0,
            done: !0
          });
        });
      }, n;
    }(this, t, e));
  };

  var _29 = function (t, e) {
    "use strict";

    return this.takeWhile(_60(t), e);
  };

  var _28 = function () {
    "use strict";

    return this.toIndexedSeq();
  };

  var _27 = function () {
    "use strict";

    return this.__hash || (this.__hash = function (t) {
      if (t.size === 1 / 0) return 0;

      var e = _5B(t),
          r = _4x(t),
          n = e ? 1 : 0;

      return function (t, e) {
        return e = _6K(e, 3432918353), e = _6K(e << 15 | e >>> -15, 461845907), e = _6K(e << 13 | e >>> -13, 5), e = _6K((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507), e = _5k((e = _6K(e ^ e >>> 13, 3266489909)) ^ e >>> 16);
      }(t.__iterate(r ? e ? function (t, e) {
        n = 31 * n + _5j(_5i(t), _5i(e)) | 0;
      } : function (t, e) {
        n = n + _5j(_5i(t), _5i(e)) | 0;
      } : e ? function (t) {
        n = 31 * n + _5i(t) | 0;
      } : function (t) {
        n = n + _5i(t) | 0;
      }), n);
    }(this));
  };

  var _24 = function () {
    "use strict";

    return this.toString();
  };

  var _1I = function () {
    "use strict";

    return _4u(this, _4t(this));
  };

  var _1H = function (t, e) {
    "use strict";

    var r = this,
        n = 0;
    return _4u(this, this.toSeq().map(function (i, o) {
      return t.call(e, [o, i], n++, r);
    }).fromEntrySeq());
  };

  var _1G = function (t, e) {
    "use strict";

    var r = this;
    return _4u(this, this.toSeq().flip().map(function (n, i) {
      return t.call(e, n, i, r);
    }).flip());
  };

  var _1E = function (t, e) {
    "use strict";

    return JSON.stringify(e) + ": " + _25(t);
  };

  var _5e = function () {
    "use strict";

    return new _6G(this, !1);
  };

  var _5d = function (t, e) {
    "use strict";

    return _4u(this, _64(this, t, e, !1));
  };

  var _5c = function (t, e) {
    "use strict";

    var r = this.findEntry(t, e);
    return r ? r[0] : -1;
  };

  var _5b = function (t) {
    "use strict";

    var e = this.keyOf(t);
    return void 0 === e ? -1 : e;
  };

  var _5a = function (t) {
    "use strict";

    var e = this.lastKeyOf(t);
    return void 0 === e ? -1 : e;
  };

  var _5Z = function () {
    "use strict";

    return _4u(this, _62(this, !1));
  };

  var _5Y = function (t, e) {
    "use strict";

    return _4u(this, _61(this, t, e, !1));
  };

  var _5X = function (t, e) {
    "use strict";

    var r = arguments.length;
    if (e = Math.max(0 | e, 0), 0 === r || 2 === r && !e) return this;
    t = _7J(t, t < 0 ? this.count() : this.size);
    var n = this.slice(0, t);
    return _4u(this, 1 === r ? n : n.concat(_7K(arguments, 2), this.slice(t + e)));
  };

  var _5W = function (t, e) {
    "use strict";

    var r = this.findLastEntry(t, e);
    return r ? r[0] : -1;
  };

  var _5V = function () {
    "use strict";

    return this.get(0);
  };

  var _5U = function (t) {
    "use strict";

    return _4u(this, _5v(this, t, !1));
  };

  var _5T = function (t, e) {
    "use strict";

    return (t = _7I(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, r) {
      return r === t;
    }, void 0, e);
  };

  var _5S = function (t) {
    "use strict";

    return (t = _7I(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
  };

  var _5R = function (t) {
    "use strict";

    return _4u(this, function (t, e) {
      var r = _5m(t);

      return r.size = t.size && 2 * t.size - 1, r.__iterateUncached = function (r, n) {
        var i = this,
            o = 0;
        return t.__iterate(function (t, n) {
          return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i);
        }, n), o;
      }, r.__iteratorUncached = function (r, n) {
        var i,
            o = t.__iterator(1, n),
            u = 0;

        return new _5H(function () {
          return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? _5l(r, u++, e) : _5l(r, u++, i.value, i);
        });
      }, r;
    }(this, t));
  };

  var _5Q = function () {
    "use strict";

    var t = [this].concat(_7K(arguments)),
        e = _7H(this.toSeq(), _7G.of, t),
        r = e.flatten(!0);

    return e.size && (r.size = e.size * t.length), _4u(this, r);
  };

  var _5P = function () {
    "use strict";

    return _70(0, this.size);
  };

  var _5O = function () {
    "use strict";

    return this.get(-1);
  };

  var _5N = function (t, e) {
    "use strict";

    return _4u(this, _5n(this, t, e, !1));
  };

  var _5M = function () {
    "use strict";

    return _4u(this, _7H(this, _7F, [this].concat(_7K(arguments))));
  };

  var _5L = function (t) {
    "use strict";

    var e = _7K(arguments);

    return e[0] = this, _4u(this, _7H(this, t, e));
  };

  var _l = function (t, e) {
    "use strict";

    return this.has(t) ? t : e;
  };

  var _i = function (t) {
    "use strict";

    return this.has(t);
  };

  var _k = function () {
    "use strict";

    return this.valueSeq();
  };

  var _3M = function (e) {
    "use strict";

    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, _3M), this.name = e, this.position = new _4j.default(0, 0), this.isVisible = !0, this.isActive = !0, this.scene = null, this.components = (0, _6s.List)();
  };

  var _h = _3M.prototype;

  var _1n = function () {
    "use strict";

    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, _1n);
  };

  var _1k = _1n.prototype;

  var _1p = function () {
    "use strict";
  };

  var _4W = function (e, r, n, i) {
    "use strict";

    var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        u = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, _4W), this.name = e, this.entity = r, this.scene = i, this.isVisible = o, this.isActive = u, this.position = n, this.scenePosition = this.getScenePosition();
  };

  var _f = _4W.prototype;

  var _4f = function (t) {
    "use strict";

    if (null !== this.entity && null !== t) throw new Error("This component is already attached to an entity!");
    this.entity = t;
  };

  var _4e = function () {
    "use strict";

    return new _4g.default(this.entity.position.x, this.entity.position.y).add(this.position);
  };

  var _4d = function () {
    "use strict";
  };

  var _4c = function () {
    "use strict";
  };

  var _4b = function () {
    "use strict";
  };

  var _4a = function () {
    "use strict";
  };

  var _4Z = function () {
    "use strict";
  };

  var _4Y = function () {
    "use strict";
  };

  var __constructor = function () {};

  $$0.value = "t", _$2(_4W, "name", $$0);
  $$1.value = _4f, _$2(_f, "setEntity", $$1);
  $$0.value = "r", _$2(_3N, "name", $$0);
  _3N.fromArray = _4i;
  _3N.fromObject = _4h;
  _g.addX = _4V;
  _g.addY = _4U;
  _g.add = _4T;
  _g.addScalar = _4S;
  _g.addScalarX = _4R;
  _g.addScalarY = _4Q;
  _g.subtractX = _4P;
  _g.subtractY = _4O;
  _g.subtract = _4N;
  _g.subtractScalar = _4M;
  _g.subtractScalarX = _4L;
  _g.subtractScalarY = _4K;
  _g.divideX = _4J;
  _g.divideY = _4I;
  _g.divide = _4H;
  _g.divideScalar = _4G;
  _g.divideScalarX = _4F;
  _g.divideScalarY = _4E;
  _g.invertX = _4D;
  _g.invertY = _4C;
  _g.invert = _4B;
  _g.multiplyX = _4A;
  _g.multiplyY = _49;
  _g.multiply = _48;
  _g.multiplyScalar = _47;
  _g.multiplyScalarX = _46;
  _g.multiplyScalarY = _45;
  _g.normalize = _44;
  _g.norm = _44;
  _g.limit = _43;
  _g.randomize = _42;
  _g.randomizeX = _41;
  _g.randomizeY = _40;
  _g.randomizeAny = _3z;
  _g.unfloat = _3y;
  _g.toFixed = _3x;
  _g.mixX = _3w;
  _g.mixY = _3v;
  _g.mix = _3u;
  _g.clone = _3t;
  _g.copyX = _3s;
  _g.copyY = _3r;
  _g.copy = _3q;
  _g.zero = _3p;
  _g.dot = _3o;
  _g.cross = _3n;
  _g.projectOnto = _3m;
  _g.horizontalAngle = _3i;
  _g.horizontalAngleDeg = _3j;
  _g.verticalAngle = _3l;
  _g.verticalAngleDeg = _3k;
  _g.angle = _3i;
  _g.angleDeg = _3j;
  _g.direction = _3i;
  _g.rotate = _3h;
  _g.rotateDeg = _3g;
  _g.rotateTo = _3f;
  _g.rotateToDeg = _3e;
  _g.rotateBy = _3d;
  _g.rotateByDeg = _3c;
  _g.distanceX = _3b;
  _g.absDistanceX = _3a;
  _g.distanceY = _3Z;
  _g.absDistanceY = _3Y;
  _g.distance = _3X;
  _g.distanceSq = _3W;
  _g.length = _3U;
  _g.lengthSq = _3V;
  _g.magnitude = _3U;
  _g.isZero = _3T;
  _g.isEqualTo = _3S;
  _g.toString = _3R;
  _g.toArray = _3Q;
  _g.toObject = _3P;
  var _4g = {
    "default": _3N
  };
  $$1.value = _4e, _$2(_f, "getScenePosition", $$1);
  $$1.value = _4d, _$2(_f, "addedToEntity", $$1);
  $$1.value = _4c, _$2(_f, "addedToScene", $$1);
  $$1.value = _4b, _$2(_f, "removedFromEntity", $$1);
  $$1.value = _4a, _$2(_f, "removedFromScene", $$1);
  $$1.value = _4Z, _$2(_f, "updateComponent", $$1);
  $$1.value = _4Y, _$2(_f, "renderComponent", $$1);

  var _1 = (__constructor.prototype = _f, new __constructor());

  _1.name = "Test Component";
  var _4j = {
    "default": _3N
  };
  var _1L = _$4;
  _1C[_1L] = _2n;
  _1C.toArray = _26;

  var _6J = (__constructor.prototype = _67, new __constructor());

  _1C.toIndexedSeq = _3F;
  _1C.toJS = _3E;
  _1C.toJSON = _3D;

  var _4w = (__constructor.prototype = _4n, new __constructor());

  var _6H = (__constructor.prototype = _4w, new __constructor());

  _1C.toKeyedSeq = _3C;

  var _V = (__constructor.prototype = _1C, new __constructor());

  _1D.prototype = _V;
  _1D.Keyed = _21;

  var _20 = (__constructor.prototype = _V, new __constructor());

  var _8d = (__constructor.prototype = _67, new __constructor());

  var _8a = (__constructor.prototype = _67, new __constructor());

  _7G.of = _90;

  var _5J = (__constructor.prototype = _1C, new __constructor());

  _5J.constructor = _5I;
  _5J.toKeyedSeq = _5e;

  var _8Y = (__constructor.prototype = _4w, new __constructor());

  _4l.of = _6l;

  var _4m = (__constructor.prototype = _4n, new __constructor());

  var _1w = {};
  _5H.KEYS = 0;
  _5H.VALUES = 1;
  _5H.ENTRIES = 2;
  _6M[_1L] = _7P;
  _6M.toString = _7O;
  _6M.toSource = _7N;
  _6M.inspect = _7N;
  _5J.filter = _5d;
  _5J.findIndex = _5c;
  _5J.indexOf = _5b;
  _5J.lastIndexOf = _5a;
  _5J.reverse = _5Z;
  _5J.slice = _5Y;
  _5J.splice = _5X;
  _5J.findLastIndex = _5W;
  _5J.first = _5V;
  _5J.flatten = _5U;
  _5J.get = _5T;
  _5J.has = _5S;
  _5J.interpose = _5R;
  _5J.interleave = _5Q;

  var _71 = (__constructor.prototype = _67, new __constructor());

  _5J.keySeq = _5P;
  _5J.last = _5O;
  _5J.skipWhile = _5N;
  _5J.zip = _5M;
  _5J.zipWith = _5L;
  _5J["@@__IMMUTABLE_INDEXED__@@"] = true;
  _5J["@@__IMMUTABLE_ORDERED__@@"] = true;
  _5I.prototype = _5J;
  _20.constructor = _5I;
  _20.toKeyedSeq = _5e;
  _20.filter = _5d;
  _20.findIndex = _5c;
  _20.indexOf = _5b;
  _20.lastIndexOf = _5a;
  _20.reverse = _5Z;
  _20.slice = _5Y;
  _20.splice = _5X;
  _20.findLastIndex = _5W;
  _20.first = _5V;
  _20.flatten = _5U;
  _20.get = _5T;
  _20.has = _5S;
  _20.interpose = _5R;
  _20.interleave = _5Q;
  _20.keySeq = _5P;
  _20.last = _5O;
  _20.skipWhile = _5N;
  _20.zip = _5M;
  _20.zipWith = _5L;
  _20["@@__IMMUTABLE_INDEXED__@@"] = true;
  _20["@@__IMMUTABLE_ORDERED__@@"] = true;
  _1z.prototype = _20;
  _1D.Indexed = _1z;

  var _X = (__constructor.prototype = _V, new __constructor());

  var _n = (__constructor.prototype = _1C, new __constructor());

  _n.constructor = _m;
  _n.get = _l;
  _n.includes = _i;
  _n.keySeq = _k;
  _n.has = _j;
  _n.contains = _i;
  _m.prototype = _n;
  _X.constructor = _m;
  _X.get = _l;
  _X.includes = _i;
  _X.keySeq = _k;
  _X.has = _j;
  _X.contains = _i;
  _1y.prototype = _X;
  _1D.Set = _1y;
  _V.constructor = _1D;

  var _U = (__constructor.prototype = _V, new __constructor());

  _U[_1L] = _1M;

  var _1K = (__constructor.prototype = _1C, new __constructor());

  _1K[_1L] = _1M;
  _1K.constructor = _1J;
  _1K.flip = _1I;
  _1K.mapEntries = _1H;
  _1K.mapKeys = _1G;
  _1K["@@__IMMUTABLE_KEYED__@@"] = true;
  _1K.__toJS = _1F;
  _1K.__toStringMapper = _1E;
  _1J.prototype = _1K;
  _U.constructor = _1J;
  _U.flip = _1I;
  _U.mapEntries = _1H;
  _U.mapKeys = _1G;
  _U["@@__IMMUTABLE_KEYED__@@"] = true;
  _U.__toJS = _1F;
  _U.__toStringMapper = _1E;
  _21.prototype = _U;

  var _T = (__constructor.prototype = _U, new __constructor());

  _T.constructor = _1i;
  _T.toString = _1h;
  _T.get = _1g;
  var _6O = {
    value: true
  };
  var _6b = {
    value: true
  };
  _8z.get = _9j;
  _A9.get = _AF;
  var _8u = {};

  var _8r = new _$5();

  var _8p = _$3("__immutablehash__");

  var _9g = _$6;
  _A9.update = _AE;
  _A9.iterate = _1r;
  _AA.get = _AD;
  _AL.get = _AN;
  _AL.update = _AM;
  _AL.iterate = _AB;
  _AA.update = _AC;
  _AA.iterate = _AB;
  _8z.update = _9i;
  _8z.iterate = _9h;
  _1j.get = _1t;
  _1j.update = _1s;
  _1j.iterate = _1r;
  _T.set = _1f;
  _T.setIn = _1e;
  _T.remove = _1O;
  _T.deleteIn = _1N;
  _T.update = _1d;
  _T.updateIn = _1c;
  _T.clear = _1b;
  _T.merge = _1a;
  var _5D = _$9;
  _T.mergeWith = _1Z;
  _T.mergeIn = _1Y;
  _T.mergeDeep = _1X;
  _T.mergeDeepWith = _1W;
  _T.mergeDeepIn = _1V;

  var _6B = (__constructor.prototype = _20, new __constructor());

  _9o.removeBefore = _A2;
  _9o.removeAfter = _A1;
  _6A.prototype = _6B;
  _6A.of = _7v;
  _6A.isList = _7u;
  _6B.constructor = _6A;
  _6B.toString = _8E;
  _6B.get = _8D;
  _6B.set = _8C;
  _6B.remove = _7w;
  _6B.insert = _8B;
  _6B.clear = _8A;
  _6B.push = _89;
  _6B.pop = _88;
  _6B.unshift = _87;
  _6B.shift = _86;
  _6B.merge = _85;
  _6B.mergeWith = _84;
  _6B.mergeDeep = _83;
  _6B.mergeDeepWith = _82;
  _6B.setSize = _81;
  _6B.slice = _80;
  var _8w = {};
  _6B.__iterator = _7z;
  _6B.__iterate = _7y;
  _6B.__ensureOwner = _7x;
  _6B["@@__IMMUTABLE_LIST__@@"] = true;
  _6B["delete"] = _7w;
  _6B.setIn = _1e;
  _6B.removeIn = _1N;
  _6B.deleteIn = _1N;
  _6B.update = _1d;
  _6B.updateIn = _1c;
  _6B.mergeIn = _1Y;
  _6B.mergeDeepIn = _1V;
  _6B.withMutations = _u;
  _6B.asMutable = _s;
  _6B.asImmutable = _q;
  _6B.wasAltered = _1S;

  var _9k = (__constructor.prototype = _6B, new __constructor());

  _9k.size = 0;
  _9k._origin = 0;
  _9k._capacity = 0;
  _9k._level = 5;
  _9k._root = void 0;
  _9k._tail = void 0;
  _9k.__ownerID = void 0;
  _9k.__hash = void 0;
  _9k.__altered = false;

  var _53 = (__constructor.prototype = _T, new __constructor());

  _53.constructor = _52;
  _53.toString = _6Z;
  _53.get = _6Y;
  _53.clear = _6X;
  _53.set = _6W;
  _53.remove = _6R;
  _53.wasAltered = _6V;
  _53.__iterate = _6U;
  _53.__iterator = _6T;
  _53.__ensureOwner = _6S;
  _53["@@__IMMUTABLE_ORDERED__@@"] = true;
  _53["delete"] = _6R;
  _52.prototype = _53;
  _52.of = _6Q;
  _52.isOrderedMap = _6P;
  _T.sort = _1U;
  _T.sortBy = _1T;
  _T.withMutations = _u;
  _T.asMutable = _s;
  _T.asImmutable = _q;
  _T.wasAltered = _1S;

  var _50 = (__constructor.prototype = _6M, new __constructor());

  _50.constructor = _4z;
  _50.next = _6a;
  _4z.prototype = _50;
  _T.__iterator = _1R;
  _T.__iterate = _1Q;
  _T.__ensureOwner = _1P;
  _T["@@__IMMUTABLE_MAP__@@"] = true;
  _T["delete"] = _1O;
  _T.removeIn = _1N;

  var _3L = (__constructor.prototype = _T, new __constructor());

  _3L.size = 0;
  _3L._root = void 0;
  _3L.__ownerID = void 0;
  _3L.__hash = void 0;
  _3L.__altered = false;
  _1i.prototype = _T;
  _1i.of = _1v;
  _1i.isMap = _1u;
  _1C.toMap = _3B;
  _1C.toObject = _1F;
  _1C.toOrderedMap = _3A;

  var _W = (__constructor.prototype = _X, new __constructor());

  var _3J = (__constructor.prototype = _W, new __constructor());

  _3J.size = 0;
  _3J._map = _3L;
  _3J.__ownerID = void 0;
  _1B.prototype = _W;
  _1B.of = _3I;
  _1B.fromKeys = _3H;
  _1B.isSet = _3G;
  _W.constructor = _1B;
  _W.toString = _1A;
  _W.has = _19;
  _W.add = _18;
  _W.remove = _x;
  _W.clear = _17;
  _W.union = _16;
  _W.intersect = _15;
  _W.subtract = _14;
  _W.merge = _w;
  _W.mergeWith = _v;
  _W.sort = _13;
  _W.sortBy = _12;
  _W.wasAltered = _11;
  _W.__iterate = _10;
  _W.__iterator = _z;
  _W.__ensureOwner = _y;
  _W["@@__IMMUTABLE_SET__@@"] = true;
  _W["delete"] = _x;
  _W.mergeDeep = _w;
  _W.mergeDeepWith = _v;
  _W.withMutations = _u;
  _W.asMutable = _s;
  _W.asImmutable = _q;
  _W.__empty = _p;
  _W.__make = _o;

  var _4r = (__constructor.prototype = _W, new __constructor());

  _4r.constructor = _4q;
  _4r.toString = _6j;
  _4r["@@__IMMUTABLE_ORDERED__@@"] = true;
  _4r.__empty = _6i;
  _4r.__make = _6h;
  _4q.prototype = _4r;
  _4q.of = _6g;
  _4q.fromKeys = _6f;
  _4q.isOrderedSet = _6e;
  _1C.toOrderedSet = _39;
  _1C.toSet = _38;

  var _6F = (__constructor.prototype = _4m, new __constructor());

  _1C.toSetSeq = _37;
  _1C.toSeq = _36;

  var _6D = (__constructor.prototype = _20, new __constructor());

  _6D.constructor = _6C;
  _6D.toString = _7s;
  _6D.get = _7r;
  _6D.peek = _7q;
  _6D.push = _7p;
  _6D.pushAll = _7o;
  _6D.pop = _7n;
  _6D.unshift = _7m;
  _6D.unshiftAll = _7l;
  _6D.shift = _7k;
  _6D.clear = _7j;
  _6D.slice = _7i;
  _6D.__ensureOwner = _7h;
  _6D.__iterate = _7g;
  _6D.__iterator = _7f;
  _6D["@@__IMMUTABLE_STACK__@@"] = true;
  _6D.withMutations = _u;
  _6D.asMutable = _s;
  _6D.asImmutable = _q;
  _6D.wasAltered = _1S;
  _6C.prototype = _6D;
  _6C.of = _7e;
  _6C.isStack = _7d;
  _1C.toStack = _35;
  _1C.toList = _34;
  _1C.toString = _33;
  _1C.__toString = _32;
  _1C.concat = _31;
  _1C.includes = _j;
  _1C.entries = _1M;
  _1C.every = _30;
  _1C.filter = _2z;
  _1C.find = _2y;
  _1C.forEach = _2x;
  _1C.join = _2w;
  _1C.keys = _2v;
  _1C.map = _2u;
  _1C.reduce = _2t;
  _1C.reduceRight = _2s;
  _1C.reverse = _2r;
  _1C.slice = _2q;
  _1C.some = _2p;
  _1C.sort = _2o;
  _1C.values = _2n;
  _1C.butLast = _2m;
  _1C.isEmpty = _2l;
  _1C.count = _2k;
  _1C.countBy = _2j;
  _1C.equals = _2i;
  _1C.entrySeq = _2h;
  _1C.filterNot = _2g;
  _1C.findEntry = _2f;
  _1C.findKey = _2e;
  _1C.findLast = _2d;
  _1C.findLastEntry = _2c;
  _1C.findLastKey = _2b;
  _1C.first = _2a;
  _1C.flatMap = _23;
  _1C.flatten = _2Z;

  var _5u = (__constructor.prototype = _4w, new __constructor());

  _1C.fromEntrySeq = _2Y;
  _1C.get = _2X;
  _1C.getIn = _2W;
  _1C.groupBy = _2V;
  _1C.has = _2U;
  _1C.hasIn = _2T;
  _1C.isSubset = _2S;
  _1C.isSuperset = _2R;
  _1C.keyOf = _2Q;
  _1C.keySeq = _2P;
  _1C.last = _2O;
  _1C.lastKeyOf = _2N;
  _1C.max = _2M;
  _1C.maxBy = _2L;
  _1C.min = _2K;
  _1C.minBy = _2J;
  _1C.rest = _2I;
  _1C.skip = _2H;
  _1C.skipLast = _2G;
  _1C.skipWhile = _2F;
  _1C.skipUntil = _2E;
  _1C.sortBy = _2D;
  _1C.take = _2C;
  _1C.takeLast = _2B;
  _1C.takeWhile = _2A;
  _1C.takeUntil = _29;
  _1C.valueSeq = _28;
  var _6K = _$B;
  _1C.hashCode = _27;
  _1C["@@__IMMUTABLE_ITERABLE__@@"] = true;
  _1C.__toJS = _26;
  _1C.__toStringMapper = _25;
  _1C.toSource = _24;
  _1C.inspect = _24;
  _1C.chain = _23;
  _1C.contains = _j;

  var _4n = (__constructor.prototype = _1C, new __constructor());

  _4n.constructor = _5h;
  _4n.toSeq = _6q;
  _4n.toString = _6p;
  _4n.cacheResult = _6o;
  _4n.__iterate = _6n;
  _4n.__iterator = _6m;
  _4n["@@__IMMUTABLE_SEQ__@@"] = true;
  _6G.prototype = _6H;
  _4w[_1L] = _1M;
  _4w.constructor = _1J;
  _4w.toKeyedSeq = _6d;
  _4w.flip = _1I;
  _4w.mapEntries = _1H;
  _4w.mapKeys = _1G;
  _4w["@@__IMMUTABLE_KEYED__@@"] = true;
  _4w.__toJS = _1F;
  _4w.__toStringMapper = _1E;
  _6H.constructor = _6G;
  _6H.get = _7Z;
  _6H.has = _7Y;
  _6H.valueSeq = _7X;
  _6H.reverse = _7W;
  _6H.map = _7V;
  _6H.__iterate = _7U;
  _6H.__iterator = _7T;
  _6H["@@__IMMUTABLE_ORDERED__@@"] = true;
  _6H.cacheResult = _74;
  _8X.prototype = _8Y;
  _8Y.constructor = _8X;
  _8Y.get = _9w;
  _8Y.has = _9v;
  _8Y.__iterate = _9u;
  _8Y.__iterator = _9t;
  _8Y["@@__IMMUTABLE_ORDERED__@@"] = true;
  _4v.prototype = _4w;
  _4l.prototype = _4m;
  _4m.constructor = _m;
  _4m.toSetSeq = _6r;
  _4m.get = _l;
  _4m.includes = _i;
  _4m.keySeq = _k;
  _4m.has = _j;
  _4m.contains = _i;
  _6E.prototype = _6F;
  _6F.constructor = _6E;
  _6F.has = _7c;
  _6F.__iterate = _7b;
  _6F.__iterator = _7a;
  _6F.cacheResult = _74;
  _5t.prototype = _5u;
  _5u.constructor = _5t;
  _5u.entrySeq = _8P;
  _5u.__iterate = _8O;
  _5u.__iterator = _8N;
  _5u.cacheResult = _74;

  var _67 = (__constructor.prototype = _4n, new __constructor());

  _67.constructor = _5I;
  _67.toIndexedSeq = _8I;
  _67.toString = _8H;
  _67.__iterate = _8G;
  _67.__iterator = _8F;
  _67.toKeyedSeq = _5e;
  _67.filter = _5d;
  _67.findIndex = _5c;
  _67.indexOf = _5b;
  _67.lastIndexOf = _5a;
  _67.reverse = _5Z;
  _67.slice = _5Y;
  _67.splice = _5X;
  _67.findLastIndex = _5W;
  _67.first = _5V;
  _67.flatten = _5U;
  _67.get = _5T;
  _67.has = _5S;
  _67.interpose = _5R;
  _67.interleave = _5Q;
  _67.keySeq = _5P;
  _67.last = _5O;
  _67.skipWhile = _5N;
  _67.zip = _5M;
  _67.zipWith = _5L;
  _67["@@__IMMUTABLE_INDEXED__@@"] = true;
  _67["@@__IMMUTABLE_ORDERED__@@"] = true;
  _6I.prototype = _6J;
  _6J.constructor = _6I;
  _6J.includes = _7S;
  _6J.__iterate = _7R;
  _6J.__iterator = _7Q;
  _6J.cacheResult = _74;
  _8c.prototype = _8d;
  _8d.constructor = _8c;
  _8d.__iterateUncached = _9q;
  _8d.__iteratorUncached = _9p;
  _8Z.prototype = _8a;
  _8a.constructor = _8Z;
  _8a.__iterateUncached = _9s;
  _8a.__iteratorUncached = _9r;
  _7G.prototype = _67;
  _70.prototype = _71;
  _71.constructor = _70;
  _71.toString = _9K;
  _71.get = _9J;
  _71.includes = _9I;
  _71.slice = _9H;
  _71.indexOf = _9G;
  _71.lastIndexOf = _9F;
  _71.__iterate = _9E;
  _71.__iterator = _9D;
  _71.equals = _9C;

  var _66 = (__constructor.prototype = _67, new __constructor());

  _66.constructor = _65;
  _66.get = _8L;
  _66.__iterate = _8K;
  _66.__iterator = _8J;
  _65.prototype = _66;
  _5h.prototype = _4n;
  _5h.of = _8R;
  _5h.isSeq = _75;
  _5h.Keyed = _4v;
  _5h.Set = _4l;
  _5h.Indexed = _7G;
  _22.isIterable = _4p;
  _22.isKeyed = _4x;
  _22.isIndexed = _5K;
  _22.isAssociative = _4o;
  _22.isOrdered = _5B;
  _22.Keyed = _1J;
  _22.Indexed = _5I;
  _22.Set = _m;
  _22.Iterator = _5H;

  var _73 = (__constructor.prototype = _U, new __constructor());

  _73.constructor = _72;
  _73.toString = _9B;
  _73.has = _9A;
  _73.get = _99;
  _73.clear = _98;
  _73.set = _97;
  _73.remove = _92;
  _73.wasAltered = _96;
  _73.__iterator = _95;
  _73.__iterate = _94;
  _73.__ensureOwner = _93;
  _73["delete"] = _92;
  _73.removeIn = _1N;
  _73.deleteIn = _1N;
  _73.merge = _1a;
  _73.mergeWith = _1Z;
  _73.mergeIn = _1Y;
  _73.mergeDeep = _1X;
  _73.mergeDeepWith = _1W;
  _73.mergeDeepIn = _1V;
  _73.setIn = _1e;
  _73.update = _1d;
  _73.updateIn = _1c;
  _73.withMutations = _u;
  _73.asMutable = _s;
  _73.asImmutable = _q;
  _72.prototype = _73;

  var _6z = (__constructor.prototype = _67, new __constructor());

  _6z.constructor = _6y;
  _6z.toString = _9U;
  _6z.get = _9T;
  _6z.includes = _9S;
  _6z.slice = _9R;
  _6z.reverse = _9Q;
  _6z.indexOf = _9P;
  _6z.lastIndexOf = _9O;
  _6z.__iterate = _9N;
  _6z.__iterator = _9M;
  _6z.equals = _9L;
  _6y.prototype = _6z;
  var _6s = {
    Iterable: _22,
    Seq: _5h,
    Collection: _1D,
    Map: _1i,
    OrderedMap: _52,
    List: _6A,
    Stack: _6C,
    Set: _1B,
    OrderedSet: _4q,
    Record: _72,
    Range: _70,
    Repeat: _6y,
    is: _4k,
    fromJS: _6x
  };

  var _3 = (__constructor.prototype = _h, new __constructor());

  _3.name = "Test Entity";

  var _5 = (__constructor.prototype = _g, new __constructor());

  _5.x = 0;
  _5.y = 0;
  _3.position = _5;
  _3.isVisible = true;
  _3.isActive = true;
  _3.scene = null;

  var _A = (__constructor.prototype = _W, new __constructor());

  _A.size = 2;

  var _C = (__constructor.prototype = _T, new __constructor());

  _C.size = 2;

  var _D = (__constructor.prototype = _1j, new __constructor());

  var _E = (__constructor.prototype = _1l, new __constructor());

  _D.ownerID = _E;
  var _G = [_1, true];

  var _I = (__constructor.prototype = _f, new __constructor());

  _I.name = "Another Component";
  _I.entity = _3;
  $$0.value = "t", _$2(_1n, "name", $$0);
  $$1.value = _1p, _$2(_1k, "init", $$1);

  var _K = (__constructor.prototype = _1k, new __constructor());

  _I.scene = _K;
  _I.isVisible = true;
  _I.isActive = true;

  var _L = (__constructor.prototype = _g, new __constructor());

  _L.x = 250;
  _L.y = 250;
  _I.position = _L;

  var _O = (__constructor.prototype = _g, new __constructor());

  _O.x = 250;
  _O.y = 250;
  _I.scenePosition = _O;
  var _H = [_I, true];
  var _F = [_G, _H];
  _D.entries = _F;
  _C._root = _D;
  _C.__ownerID = void 0;
  _C.__hash = void 0;
  _C.__altered = false;
  _A._map = _C;
  _A.__ownerID = void 0;
  _3.components = _A;
  _1.entity = _3;
  _1.scene = _K;
  _1.isVisible = true;
  _1.isActive = true;

  var _Y = (__constructor.prototype = _g, new __constructor());

  _Y.x = 10;
  _Y.y = 10;
  _1.position = _Y;

  var _b = (__constructor.prototype = _g, new __constructor());

  _b.x = 10;
  _b.y = 10;
  _1.scenePosition = _b;
  var _0 = [_1, _I];
  console.log(_0);
}).call(this);