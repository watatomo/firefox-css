function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
function t(e) {
    return e && e.__esModule ? e.default : e;
}
var n =
        "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : {},
    r = {},
    l = {},
    o = n.parcelRequire69a8;
null == o &&
    (((o = function (e) {
        if (e in r) return r[e].exports;
        if (e in l) {
            var t = l[e];
            delete l[e];
            var n = { id: e, exports: {} };
            return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
        }
        var o = new Error("Cannot find module '" + e + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
    }).register = function (e, t) {
        l[e] = t;
    }),
    (n.parcelRequire69a8 = o)),
    o.register("cjuLU", function (t, n) {
        /**
         * @license React
         * react-jsx-runtime.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r, l, a;
        e(
            t.exports,
            "Fragment",
            () => r,
            (e) => (r = e)
        ),
            e(
                t.exports,
                "jsx",
                () => l,
                (e) => (l = e)
            ),
            e(
                t.exports,
                "jsxs",
                () => a,
                (e) => (a = e)
            );
        var i = o("fYo6y"),
            u = Symbol.for("react.element"),
            s = Symbol.for("react.fragment"),
            c = Object.prototype.hasOwnProperty,
            f =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                    .ReactCurrentOwner,
            d = { key: !0, ref: !0, __self: !0, __source: !0 };
        function p(e, t, n) {
            var r,
                l = {},
                o = null,
                a = null;
            for (r in (void 0 !== n && (o = "" + n),
            void 0 !== t.key && (o = "" + t.key),
            void 0 !== t.ref && (a = t.ref),
            t))
                c.call(t, r) && !d.hasOwnProperty(r) && (l[r] = t[r]);
            if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                    void 0 === l[r] && (l[r] = t[r]);
            return {
                $$typeof: u,
                type: e,
                key: o,
                ref: a,
                props: l,
                _owner: f.current
            };
        }
        (r = s), (l = p), (a = p);
    }),
    o.register("fYo6y", function (e, t) {
        e.exports = o("ha5xJ");
    }),
    o.register("ha5xJ", function (t, n) {
        /**
         * @license React
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r,
            l,
            o,
            a,
            i,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            g,
            y,
            v,
            b,
            k,
            x,
            w,
            S,
            E,
            C,
            L,
            T,
            N,
            P,
            _,
            D,
            F,
            A,
            R,
            z,
            O,
            I;
        e(
            t.exports,
            "Children",
            () => r,
            (e) => (r = e)
        ),
            e(
                t.exports,
                "Component",
                () => l,
                (e) => (l = e)
            ),
            e(
                t.exports,
                "Fragment",
                () => o,
                (e) => (o = e)
            ),
            e(
                t.exports,
                "Profiler",
                () => a,
                (e) => (a = e)
            ),
            e(
                t.exports,
                "PureComponent",
                () => i,
                (e) => (i = e)
            ),
            e(
                t.exports,
                "StrictMode",
                () => u,
                (e) => (u = e)
            ),
            e(
                t.exports,
                "Suspense",
                () => s,
                (e) => (s = e)
            ),
            e(
                t.exports,
                "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
                () => c,
                (e) => (c = e)
            ),
            e(
                t.exports,
                "cloneElement",
                () => f,
                (e) => (f = e)
            ),
            e(
                t.exports,
                "createContext",
                () => d,
                (e) => (d = e)
            ),
            e(
                t.exports,
                "createElement",
                () => p,
                (e) => (p = e)
            ),
            e(
                t.exports,
                "createFactory",
                () => h,
                (e) => (h = e)
            ),
            e(
                t.exports,
                "createRef",
                () => m,
                (e) => (m = e)
            ),
            e(
                t.exports,
                "forwardRef",
                () => g,
                (e) => (g = e)
            ),
            e(
                t.exports,
                "isValidElement",
                () => y,
                (e) => (y = e)
            ),
            e(
                t.exports,
                "lazy",
                () => v,
                (e) => (v = e)
            ),
            e(
                t.exports,
                "memo",
                () => b,
                (e) => (b = e)
            ),
            e(
                t.exports,
                "startTransition",
                () => k,
                (e) => (k = e)
            ),
            e(
                t.exports,
                "unstable_act",
                () => x,
                (e) => (x = e)
            ),
            e(
                t.exports,
                "useCallback",
                () => w,
                (e) => (w = e)
            ),
            e(
                t.exports,
                "useContext",
                () => S,
                (e) => (S = e)
            ),
            e(
                t.exports,
                "useDebugValue",
                () => E,
                (e) => (E = e)
            ),
            e(
                t.exports,
                "useDeferredValue",
                () => C,
                (e) => (C = e)
            ),
            e(
                t.exports,
                "useEffect",
                () => L,
                (e) => (L = e)
            ),
            e(
                t.exports,
                "useId",
                () => T,
                (e) => (T = e)
            ),
            e(
                t.exports,
                "useImperativeHandle",
                () => N,
                (e) => (N = e)
            ),
            e(
                t.exports,
                "useInsertionEffect",
                () => P,
                (e) => (P = e)
            ),
            e(
                t.exports,
                "useLayoutEffect",
                () => _,
                (e) => (_ = e)
            ),
            e(
                t.exports,
                "useMemo",
                () => D,
                (e) => (D = e)
            ),
            e(
                t.exports,
                "useReducer",
                () => F,
                (e) => (F = e)
            ),
            e(
                t.exports,
                "useRef",
                () => A,
                (e) => (A = e)
            ),
            e(
                t.exports,
                "useState",
                () => R,
                (e) => (R = e)
            ),
            e(
                t.exports,
                "useSyncExternalStore",
                () => z,
                (e) => (z = e)
            ),
            e(
                t.exports,
                "useTransition",
                () => O,
                (e) => (O = e)
            ),
            e(
                t.exports,
                "version",
                () => I,
                (e) => (I = e)
            );
        var j = Symbol.for("react.element"),
            M = Symbol.for("react.portal"),
            U = Symbol.for("react.fragment"),
            q = Symbol.for("react.strict_mode"),
            B = Symbol.for("react.profiler"),
            V = Symbol.for("react.provider"),
            H = Symbol.for("react.context"),
            $ = Symbol.for("react.forward_ref"),
            W = Symbol.for("react.suspense"),
            Q = Symbol.for("react.memo"),
            G = Symbol.for("react.lazy"),
            Y = Symbol.iterator;
        var K = {
                isMounted: function () {
                    return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {}
            },
            X = Object.assign,
            J = {};
        function Z(e, t, n) {
            (this.props = e),
                (this.context = t),
                (this.refs = J),
                (this.updater = n || K);
        }
        function ee() {}
        function te(e, t, n) {
            (this.props = e),
                (this.context = t),
                (this.refs = J),
                (this.updater = n || K);
        }
        (Z.prototype.isReactComponent = {}),
            (Z.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error(
                        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                    );
                this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (Z.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (ee.prototype = Z.prototype);
        var ne = (te.prototype = new ee());
        (ne.constructor = te),
            X(ne, Z.prototype),
            (ne.isPureReactComponent = !0);
        var re = Array.isArray,
            le = Object.prototype.hasOwnProperty,
            oe = { current: null },
            ae = { key: !0, ref: !0, __self: !0, __source: !0 };
        function ie(e, t, n) {
            var r,
                l = {},
                o = null,
                a = null;
            if (null != t)
                for (r in (void 0 !== t.ref && (a = t.ref),
                void 0 !== t.key && (o = "" + t.key),
                t))
                    le.call(t, r) && !ae.hasOwnProperty(r) && (l[r] = t[r]);
            var i = arguments.length - 2;
            if (1 === i) l.children = n;
            else if (1 < i) {
                for (var u = Array(i), s = 0; s < i; s++)
                    u[s] = arguments[s + 2];
                l.children = u;
            }
            if (e && e.defaultProps)
                for (r in (i = e.defaultProps))
                    void 0 === l[r] && (l[r] = i[r]);
            return {
                $$typeof: j,
                type: e,
                key: o,
                ref: a,
                props: l,
                _owner: oe.current
            };
        }
        function ue(e) {
            return "object" == typeof e && null !== e && e.$$typeof === j;
        }
        var se = /\/+/g;
        function ce(e, t) {
            return "object" == typeof e && null !== e && null != e.key
                ? (function (e) {
                      var t = { "=": "=0", ":": "=2" };
                      return (
                          "$" +
                          e.replace(/[=:]/g, function (e) {
                              return t[e];
                          })
                      );
                  })("" + e.key)
                : t.toString(36);
        }
        function fe(e, t, n, r, l) {
            var o = typeof e;
            ("undefined" !== o && "boolean" !== o) || (e = null);
            var a = !1;
            if (null === e) a = !0;
            else
                switch (o) {
                    case "string":
                    case "number":
                        a = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case j:
                            case M:
                                a = !0;
                        }
                }
            if (a)
                return (
                    (l = l((a = e))),
                    (e = "" === r ? "." + ce(a, 0) : r),
                    re(l)
                        ? ((n = ""),
                          null != e && (n = e.replace(se, "$&/") + "/"),
                          fe(l, t, n, "", function (e) {
                              return e;
                          }))
                        : null != l &&
                          (ue(l) &&
                              (l = (function (e, t) {
                                  return {
                                      $$typeof: j,
                                      type: e.type,
                                      key: t,
                                      ref: e.ref,
                                      props: e.props,
                                      _owner: e._owner
                                  };
                              })(
                                  l,
                                  n +
                                      (!l.key || (a && a.key === l.key)
                                          ? ""
                                          : ("" + l.key).replace(se, "$&/") +
                                            "/") +
                                      e
                              )),
                          t.push(l)),
                    1
                );
            if (((a = 0), (r = "" === r ? "." : r + ":"), re(e)))
                for (var i = 0; i < e.length; i++) {
                    var u = r + ce((o = e[i]), i);
                    a += fe(o, t, n, u, l);
                }
            else if (
                ((u = (function (e) {
                    return null === e || "object" != typeof e
                        ? null
                        : "function" ==
                          typeof (e = (Y && e[Y]) || e["@@iterator"])
                        ? e
                        : null;
                })(e)),
                "function" == typeof u)
            )
                for (e = u.call(e), i = 0; !(o = e.next()).done; )
                    a += fe((o = o.value), t, n, (u = r + ce(o, i++)), l);
            else if ("object" === o)
                throw (
                    ((t = String(e)),
                    Error(
                        "Objects are not valid as a React child (found: " +
                            ("[object Object]" === t
                                ? "object with keys {" +
                                  Object.keys(e).join(", ") +
                                  "}"
                                : t) +
                            "). If you meant to render a collection of children, use an array instead."
                    ))
                );
            return a;
        }
        function de(e, t, n) {
            if (null == e) return e;
            var r = [],
                l = 0;
            return (
                fe(e, r, "", "", function (e) {
                    return t.call(n, e, l++);
                }),
                r
            );
        }
        function pe(e) {
            if (-1 === e._status) {
                var t = e._result;
                (t = t()).then(
                    function (t) {
                        (0 !== e._status && -1 !== e._status) ||
                            ((e._status = 1), (e._result = t));
                    },
                    function (t) {
                        (0 !== e._status && -1 !== e._status) ||
                            ((e._status = 2), (e._result = t));
                    }
                ),
                    -1 === e._status && ((e._status = 0), (e._result = t));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
        }
        var he = { current: null },
            me = { transition: null };
        (r = {
            map: de,
            forEach: function (e, t, n) {
                de(
                    e,
                    function () {
                        t.apply(this, arguments);
                    },
                    n
                );
            },
            count: function (e) {
                var t = 0;
                return (
                    de(e, function () {
                        t++;
                    }),
                    t
                );
            },
            toArray: function (e) {
                return (
                    de(e, function (e) {
                        return e;
                    }) || []
                );
            },
            only: function (e) {
                if (!ue(e))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return e;
            }
        }),
            (l = Z),
            (o = U),
            (a = B),
            (i = te),
            (u = q),
            (s = W),
            (c = {
                ReactCurrentDispatcher: he,
                ReactCurrentBatchConfig: me,
                ReactCurrentOwner: oe
            }),
            (f = function (e, t, n) {
                if (null == e)
                    throw Error(
                        "React.cloneElement(...): The argument must be a React element, but you passed " +
                            e +
                            "."
                    );
                var r = X({}, e.props),
                    l = e.key,
                    o = e.ref,
                    a = e._owner;
                if (null != t) {
                    if (
                        (void 0 !== t.ref && ((o = t.ref), (a = oe.current)),
                        void 0 !== t.key && (l = "" + t.key),
                        e.type && e.type.defaultProps)
                    )
                        var i = e.type.defaultProps;
                    for (u in t)
                        le.call(t, u) &&
                            !ae.hasOwnProperty(u) &&
                            (r[u] =
                                void 0 === t[u] && void 0 !== i ? i[u] : t[u]);
                }
                var u = arguments.length - 2;
                if (1 === u) r.children = n;
                else if (1 < u) {
                    i = Array(u);
                    for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
                    r.children = i;
                }
                return {
                    $$typeof: j,
                    type: e.type,
                    key: l,
                    ref: o,
                    props: r,
                    _owner: a
                };
            }),
            (d = function (e) {
                return (
                    ((e = {
                        $$typeof: H,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = { $$typeof: V, _context: e }),
                    (e.Consumer = e)
                );
            }),
            (p = ie),
            (h = function (e) {
                var t = ie.bind(null, e);
                return (t.type = e), t;
            }),
            (m = function () {
                return { current: null };
            }),
            (g = function (e) {
                return { $$typeof: $, render: e };
            }),
            (y = ue),
            (v = function (e) {
                return {
                    $$typeof: G,
                    _payload: { _status: -1, _result: e },
                    _init: pe
                };
            }),
            (b = function (e, t) {
                return {
                    $$typeof: Q,
                    type: e,
                    compare: void 0 === t ? null : t
                };
            }),
            (k = function (e) {
                var t = me.transition;
                me.transition = {};
                try {
                    e();
                } finally {
                    me.transition = t;
                }
            }),
            (x = function () {
                throw Error(
                    "act(...) is not supported in production builds of React."
                );
            }),
            (w = function (e, t) {
                return he.current.useCallback(e, t);
            }),
            (S = function (e) {
                return he.current.useContext(e);
            }),
            (E = function () {}),
            (C = function (e) {
                return he.current.useDeferredValue(e);
            }),
            (L = function (e, t) {
                return he.current.useEffect(e, t);
            }),
            (T = function () {
                return he.current.useId();
            }),
            (N = function (e, t, n) {
                return he.current.useImperativeHandle(e, t, n);
            }),
            (P = function (e, t) {
                return he.current.useInsertionEffect(e, t);
            }),
            (_ = function (e, t) {
                return he.current.useLayoutEffect(e, t);
            }),
            (D = function (e, t) {
                return he.current.useMemo(e, t);
            }),
            (F = function (e, t, n) {
                return he.current.useReducer(e, t, n);
            }),
            (A = function (e) {
                return he.current.useRef(e);
            }),
            (R = function (e) {
                return he.current.useState(e);
            }),
            (z = function (e, t, n) {
                return he.current.useSyncExternalStore(e, t, n);
            }),
            (O = function () {
                return he.current.useTransition();
            }),
            (I = "18.2.0");
    }),
    o.register("gAtBI", function (t, n) {
        /**
         * @license React
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r, l, a, i, u, s, c, f, d, p, h, m;
        e(
            t.exports,
            "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
            () => r,
            (e) => (r = e)
        ),
            e(
                t.exports,
                "createPortal",
                () => l,
                (e) => (l = e)
            ),
            e(
                t.exports,
                "createRoot",
                () => a,
                (e) => (a = e)
            ),
            e(
                t.exports,
                "findDOMNode",
                () => i,
                (e) => (i = e)
            ),
            e(
                t.exports,
                "flushSync",
                () => u,
                (e) => (u = e)
            ),
            e(
                t.exports,
                "hydrate",
                () => s,
                (e) => (s = e)
            ),
            e(
                t.exports,
                "hydrateRoot",
                () => c,
                (e) => (c = e)
            ),
            e(
                t.exports,
                "render",
                () => f,
                (e) => (f = e)
            ),
            e(
                t.exports,
                "unmountComponentAtNode",
                () => d,
                (e) => (d = e)
            ),
            e(
                t.exports,
                "unstable_batchedUpdates",
                () => p,
                (e) => (p = e)
            ),
            e(
                t.exports,
                "unstable_renderSubtreeIntoContainer",
                () => h,
                (e) => (h = e)
            ),
            e(
                t.exports,
                "version",
                () => m,
                (e) => (m = e)
            );
        var g = o("fYo6y"),
            y = o("6qr1r");
        function v(e) {
            for (
                var t =
                        "https://reactjs.org/docs/error-decoder.html?invariant=" +
                        e,
                    n = 1;
                n < arguments.length;
                n++
            )
                t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
        }
        var b = new Set(),
            k = {};
        function x(e, t) {
            w(e, t), w(e + "Capture", t);
        }
        function w(e, t) {
            for (k[e] = t, e = 0; e < t.length; e++) b.add(t[e]);
        }
        var S = !(
                "undefined" == typeof window ||
                void 0 === window.document ||
                void 0 === window.document.createElement
            ),
            E = Object.prototype.hasOwnProperty,
            C =
                /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            L = {},
            T = {};
        function N(e, t, n, r, l, o, a) {
            (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
                (this.attributeName = r),
                (this.attributeNamespace = l),
                (this.mustUseProperty = n),
                (this.propertyName = e),
                (this.type = t),
                (this.sanitizeURL = o),
                (this.removeEmptyString = a);
        }
        var P = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
            .split(" ")
            .forEach(function (e) {
                P[e] = new N(e, 0, !1, e, null, !1, !1);
            }),
            [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach(function (e) {
                var t = e[0];
                P[t] = new N(t, 1, !1, e[1], null, !1, !1);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(
                function (e) {
                    P[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
                }
            ),
            [
                "autoReverse",
                "externalResourcesRequired",
                "focusable",
                "preserveAlpha"
            ].forEach(function (e) {
                P[e] = new N(e, 2, !1, e, null, !1, !1);
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                .split(" ")
                .forEach(function (e) {
                    P[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
                }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                P[e] = new N(e, 3, !0, e, null, !1, !1);
            }),
            ["capture", "download"].forEach(function (e) {
                P[e] = new N(e, 4, !1, e, null, !1, !1);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
                P[e] = new N(e, 6, !1, e, null, !1, !1);
            }),
            ["rowSpan", "start"].forEach(function (e) {
                P[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
            });
        var _ = /[\-:]([a-z])/g;
        function D(e) {
            return e[1].toUpperCase();
        }
        function F(e, t, n, r) {
            var l = P.hasOwnProperty(t) ? P[t] : null;
            (null !== l
                ? 0 !== l.type
                : r ||
                  !(2 < t.length) ||
                  ("o" !== t[0] && "O" !== t[0]) ||
                  ("n" !== t[1] && "N" !== t[1])) &&
                ((function (e, t, n, r) {
                    if (
                        null == t ||
                        (function (e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return (
                                        !r &&
                                        (null !== n
                                            ? !n.acceptsBooleans
                                            : "data-" !==
                                                  (e = e
                                                      .toLowerCase()
                                                      .slice(0, 5)) &&
                                              "aria-" !== e)
                                    );
                                default:
                                    return !1;
                            }
                        })(e, t, n, r)
                    )
                        return !0;
                    if (r) return !1;
                    if (null !== n)
                        switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t;
                        }
                    return !1;
                })(t, n, l, r) && (n = null),
                r || null === l
                    ? (function (e) {
                          return (
                              !!E.call(T, e) ||
                              (!E.call(L, e) &&
                                  (C.test(e) ? (T[e] = !0) : ((L[e] = !0), !1)))
                          );
                      })(t) &&
                      (null === n
                          ? e.removeAttribute(t)
                          : e.setAttribute(t, "" + n))
                    : l.mustUseProperty
                    ? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
                    : ((t = l.attributeName),
                      (r = l.attributeNamespace),
                      null === n
                          ? e.removeAttribute(t)
                          : ((n =
                                3 === (l = l.type) || (4 === l && !0 === n)
                                    ? ""
                                    : "" + n),
                            r
                                ? e.setAttributeNS(r, t, n)
                                : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(_, D);
                P[t] = new N(t, 1, !1, e, null, !1, !1);
            }),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
                .split(" ")
                .forEach(function (e) {
                    var t = e.replace(_, D);
                    P[t] = new N(
                        t,
                        1,
                        !1,
                        e,
                        "http://www.w3.org/1999/xlink",
                        !1,
                        !1
                    );
                }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                var t = e.replace(_, D);
                P[t] = new N(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/XML/1998/namespace",
                    !1,
                    !1
                );
            }),
            ["tabIndex", "crossOrigin"].forEach(function (e) {
                P[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
            }),
            (P.xlinkHref = new N(
                "xlinkHref",
                1,
                !1,
                "xlink:href",
                "http://www.w3.org/1999/xlink",
                !0,
                !1
            )),
            ["src", "href", "action", "formAction"].forEach(function (e) {
                P[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
            });
        var A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            R = Symbol.for("react.element"),
            z = Symbol.for("react.portal"),
            O = Symbol.for("react.fragment"),
            I = Symbol.for("react.strict_mode"),
            j = Symbol.for("react.profiler"),
            M = Symbol.for("react.provider"),
            U = Symbol.for("react.context"),
            q = Symbol.for("react.forward_ref"),
            B = Symbol.for("react.suspense"),
            V = Symbol.for("react.suspense_list"),
            H = Symbol.for("react.memo"),
            $ = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var W = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
        var Q = Symbol.iterator;
        function G(e) {
            return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (Q && e[Q]) || e["@@iterator"])
                ? e
                : null;
        }
        var Y,
            K = Object.assign;
        function X(e) {
            if (void 0 === Y)
                try {
                    throw Error();
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    Y = (t && t[1]) || "";
                }
            return "\n" + Y + e;
        }
        var J = !1;
        function Z(e, t) {
            if (!e || J) return "";
            J = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (
                        ((t = function () {
                            throw Error();
                        }),
                        Object.defineProperty(t.prototype, "props", {
                            set: function () {
                                throw Error();
                            }
                        }),
                        "object" == typeof Reflect && Reflect.construct)
                    ) {
                        try {
                            Reflect.construct(t, []);
                        } catch (e) {
                            var r = e;
                        }
                        Reflect.construct(e, [], t);
                    } else {
                        try {
                            t.call();
                        } catch (e) {
                            r = e;
                        }
                        e.call(t.prototype);
                    }
                else {
                    try {
                        throw Error();
                    } catch (e) {
                        r = e;
                    }
                    e();
                }
            } catch (t) {
                if (t && r && "string" == typeof t.stack) {
                    for (
                        var l = t.stack.split("\n"),
                            o = r.stack.split("\n"),
                            a = l.length - 1,
                            i = o.length - 1;
                        1 <= a && 0 <= i && l[a] !== o[i];

                    )
                        i--;
                    for (; 1 <= a && 0 <= i; a--, i--)
                        if (l[a] !== o[i]) {
                            if (1 !== a || 1 !== i)
                                do {
                                    if ((a--, 0 > --i || l[a] !== o[i])) {
                                        var u =
                                            "\n" +
                                            l[a].replace(" at new ", " at ");
                                        return (
                                            e.displayName &&
                                                u.includes("<anonymous>") &&
                                                (u = u.replace(
                                                    "<anonymous>",
                                                    e.displayName
                                                )),
                                            u
                                        );
                                    }
                                } while (1 <= a && 0 <= i);
                            break;
                        }
                }
            } finally {
                (J = !1), (Error.prepareStackTrace = n);
            }
            return (e = e ? e.displayName || e.name : "") ? X(e) : "";
        }
        function ee(e) {
            switch (e.tag) {
                case 5:
                    return X(e.type);
                case 16:
                    return X("Lazy");
                case 13:
                    return X("Suspense");
                case 19:
                    return X("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return (e = Z(e.type, !1));
                case 11:
                    return (e = Z(e.type.render, !1));
                case 1:
                    return (e = Z(e.type, !0));
                default:
                    return "";
            }
        }
        function te(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
                case O:
                    return "Fragment";
                case z:
                    return "Portal";
                case j:
                    return "Profiler";
                case I:
                    return "StrictMode";
                case B:
                    return "Suspense";
                case V:
                    return "SuspenseList";
            }
            if ("object" == typeof e)
                switch (e.$$typeof) {
                    case U:
                        return (e.displayName || "Context") + ".Consumer";
                    case M:
                        return (
                            (e._context.displayName || "Context") + ".Provider"
                        );
                    case q:
                        var t = e.render;
                        return (
                            (e = e.displayName) ||
                                (e =
                                    "" !== (e = t.displayName || t.name || "")
                                        ? "ForwardRef(" + e + ")"
                                        : "ForwardRef"),
                            e
                        );
                    case H:
                        return null !== (t = e.displayName || null)
                            ? t
                            : te(e.type) || "Memo";
                    case $:
                        (t = e._payload), (e = e._init);
                        try {
                            return te(e(t));
                        } catch (e) {}
                }
            return null;
        }
        function ne(e) {
            var t = e.type;
            switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return (
                        (e = (e = t.render).displayName || e.name || ""),
                        t.displayName ||
                            ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                    );
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return te(t);
                case 8:
                    return t === I ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" == typeof t)
                        return t.displayName || t.name || null;
                    if ("string" == typeof t) return t;
            }
            return null;
        }
        function re(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function le(e) {
            var t = e.type;
            return (
                (e = e.nodeName) &&
                "input" === e.toLowerCase() &&
                ("checkbox" === t || "radio" === t)
            );
        }
        function oe(e) {
            e._valueTracker ||
                (e._valueTracker = (function (e) {
                    var t = le(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(
                            e.constructor.prototype,
                            t
                        ),
                        r = "" + e[t];
                    if (
                        !e.hasOwnProperty(t) &&
                        void 0 !== n &&
                        "function" == typeof n.get &&
                        "function" == typeof n.set
                    ) {
                        var l = n.get,
                            o = n.set;
                        return (
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return l.call(this);
                                },
                                set: function (e) {
                                    (r = "" + e), o.call(this, e);
                                }
                            }),
                            Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }),
                            {
                                getValue: function () {
                                    return r;
                                },
                                setValue: function (e) {
                                    r = "" + e;
                                },
                                stopTracking: function () {
                                    (e._valueTracker = null), delete e[t];
                                }
                            }
                        );
                    }
                })(e));
        }
        function ae(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return (
                e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
                (e = r) !== n && (t.setValue(e), !0)
            );
        }
        function ie(e) {
            if (
                void 0 ===
                (e = e || ("undefined" != typeof document ? document : void 0))
            )
                return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        }
        function ue(e, t) {
            var n = t.checked;
            return K({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != n ? n : e._wrapperState.initialChecked
            });
        }
        function se(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
            (n = re(null != t.value ? t.value : n)),
                (e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled:
                        "checkbox" === t.type || "radio" === t.type
                            ? null != t.checked
                            : null != t.value
                });
        }
        function ce(e, t) {
            null != (t = t.checked) && F(e, "checked", t, !1);
        }
        function fe(e, t) {
            ce(e, t);
            var n = re(t.value),
                r = t.type;
            if (null != n)
                "number" === r
                    ? ((0 === n && "" === e.value) || e.value != n) &&
                      (e.value = "" + n)
                    : e.value !== "" + n && (e.value = "" + n);
            else if ("submit" === r || "reset" === r)
                return void e.removeAttribute("value");
            t.hasOwnProperty("value")
                ? pe(e, t.type, n)
                : t.hasOwnProperty("defaultValue") &&
                  pe(e, t.type, re(t.defaultValue)),
                null == t.checked &&
                    null != t.defaultChecked &&
                    (e.defaultChecked = !!t.defaultChecked);
        }
        function de(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var r = t.type;
                if (
                    !(
                        ("submit" !== r && "reset" !== r) ||
                        (void 0 !== t.value && null !== t.value)
                    )
                )
                    return;
                (t = "" + e._wrapperState.initialValue),
                    n || t === e.value || (e.value = t),
                    (e.defaultValue = t);
            }
            "" !== (n = e.name) && (e.name = ""),
                (e.defaultChecked = !!e._wrapperState.initialChecked),
                "" !== n && (e.name = n);
        }
        function pe(e, t, n) {
            ("number" === t && ie(e.ownerDocument) === e) ||
                (null == n
                    ? (e.defaultValue = "" + e._wrapperState.initialValue)
                    : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var he = Array.isArray;
        function me(e, t, n, r) {
            if (((e = e.options), t)) {
                t = {};
                for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
                for (n = 0; n < e.length; n++)
                    (l = t.hasOwnProperty("$" + e[n].value)),
                        e[n].selected !== l && (e[n].selected = l),
                        l && r && (e[n].defaultSelected = !0);
            } else {
                for (n = "" + re(n), t = null, l = 0; l < e.length; l++) {
                    if (e[l].value === n)
                        return (
                            (e[l].selected = !0),
                            void (r && (e[l].defaultSelected = !0))
                        );
                    null !== t || e[l].disabled || (t = e[l]);
                }
                null !== t && (t.selected = !0);
            }
        }
        function ge(e, t) {
            if (null != t.dangerouslySetInnerHTML) throw Error(v(91));
            return K({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            });
        }
        function ye(e, t) {
            var n = t.value;
            if (null == n) {
                if (((n = t.children), (t = t.defaultValue), null != n)) {
                    if (null != t) throw Error(v(92));
                    if (he(n)) {
                        if (1 < n.length) throw Error(v(93));
                        n = n[0];
                    }
                    t = n;
                }
                null == t && (t = ""), (n = t);
            }
            e._wrapperState = { initialValue: re(n) };
        }
        function ve(e, t) {
            var n = re(t.value),
                r = re(t.defaultValue);
            null != n &&
                ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue &&
                    e.defaultValue !== n &&
                    (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r);
        }
        function be(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue &&
                "" !== t &&
                null !== t &&
                (e.value = t);
        }
        function ke(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function xe(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e
                ? ke(t)
                : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
                ? "http://www.w3.org/1999/xhtml"
                : e;
        }
        var we,
            Se,
            Ee =
                ((Se = function (e, t) {
                    if (
                        "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                        "innerHTML" in e
                    )
                        e.innerHTML = t;
                    else {
                        for (
                            (we =
                                we || document.createElement("div")).innerHTML =
                                "<svg>" + t.valueOf().toString() + "</svg>",
                                t = we.firstChild;
                            e.firstChild;

                        )
                            e.removeChild(e.firstChild);
                        for (; t.firstChild; ) e.appendChild(t.firstChild);
                    }
                }),
                "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                    ? function (e, t, n, r) {
                          MSApp.execUnsafeLocalFunction(function () {
                              return Se(e, t);
                          });
                      }
                    : Se);
        function Ce(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType)
                    return void (n.nodeValue = t);
            }
            e.textContent = t;
        }
        var Le = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            Te = ["Webkit", "ms", "Moz", "O"];
        function Ne(e, t, n) {
            return null == t || "boolean" == typeof t || "" === t
                ? ""
                : n ||
                  "number" != typeof t ||
                  0 === t ||
                  (Le.hasOwnProperty(e) && Le[e])
                ? ("" + t).trim()
                : t + "px";
        }
        function Pe(e, t) {
            for (var n in ((e = e.style), t))
                if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"),
                        l = Ne(n, t[n], r);
                    "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, l) : (e[n] = l);
                }
        }
        Object.keys(Le).forEach(function (e) {
            Te.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                    (Le[t] = Le[e]);
            });
        });
        var _e = K(
            { menuitem: !0 },
            {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
        );
        function De(e, t) {
            if (t) {
                if (
                    _e[e] &&
                    (null != t.children || null != t.dangerouslySetInnerHTML)
                )
                    throw Error(v(137, e));
                if (null != t.dangerouslySetInnerHTML) {
                    if (null != t.children) throw Error(v(60));
                    if (
                        "object" != typeof t.dangerouslySetInnerHTML ||
                        !("__html" in t.dangerouslySetInnerHTML)
                    )
                        throw Error(v(61));
                }
                if (null != t.style && "object" != typeof t.style)
                    throw Error(v(62));
            }
        }
        function Fe(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var Ae = null;
        function Re(e) {
            return (
                (e = e.target || e.srcElement || window)
                    .correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            );
        }
        var ze = null,
            Oe = null,
            Ie = null;
        function je(e) {
            if ((e = Fl(e))) {
                if ("function" != typeof ze) throw Error(v(280));
                var t = e.stateNode;
                t && ((t = Rl(t)), ze(e.stateNode, e.type, t));
            }
        }
        function Me(e) {
            Oe ? (Ie ? Ie.push(e) : (Ie = [e])) : (Oe = e);
        }
        function Ue() {
            if (Oe) {
                var e = Oe,
                    t = Ie;
                if (((Ie = Oe = null), je(e), t))
                    for (e = 0; e < t.length; e++) je(t[e]);
            }
        }
        function qe(e, t) {
            return e(t);
        }
        function Be() {}
        var Ve = !1;
        function He(e, t, n) {
            if (Ve) return e(t, n);
            Ve = !0;
            try {
                return qe(e, t, n);
            } finally {
                (Ve = !1), (null !== Oe || null !== Ie) && (Be(), Ue());
            }
        }
        function $e(e, t) {
            var n = e.stateNode;
            if (null === n) return null;
            var r = Rl(n);
            if (null === r) return null;
            n = r[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) ||
                        (r = !(
                            "button" === (e = e.type) ||
                            "input" === e ||
                            "select" === e ||
                            "textarea" === e
                        )),
                        (e = !r);
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (n && "function" != typeof n) throw Error(v(231, t, typeof n));
            return n;
        }
        var We = !1;
        if (S)
            try {
                var Qe = {};
                Object.defineProperty(Qe, "passive", {
                    get: function () {
                        We = !0;
                    }
                }),
                    window.addEventListener("test", Qe, Qe),
                    window.removeEventListener("test", Qe, Qe);
            } catch (Se) {
                We = !1;
            }
        function Ge(e, t, n, r, l, o, a, i, u) {
            var s = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, s);
            } catch (e) {
                this.onError(e);
            }
        }
        var Ye = !1,
            Ke = null,
            Xe = !1,
            Je = null,
            Ze = {
                onError: function (e) {
                    (Ye = !0), (Ke = e);
                }
            };
        function et(e, t, n, r, l, o, a, i, u) {
            (Ye = !1), (Ke = null), Ge.apply(Ze, arguments);
        }
        function tt(e) {
            var t = e,
                n = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
                e = t;
                do {
                    0 != (4098 & (t = e).flags) && (n = t.return),
                        (e = t.return);
                } while (e);
            }
            return 3 === t.tag ? n : null;
        }
        function nt(e) {
            if (13 === e.tag) {
                var t = e.memoizedState;
                if (
                    (null === t &&
                        null !== (e = e.alternate) &&
                        (t = e.memoizedState),
                    null !== t)
                )
                    return t.dehydrated;
            }
            return null;
        }
        function rt(e) {
            if (tt(e) !== e) throw Error(v(188));
        }
        function lt(e) {
            return null !==
                (e = (function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = tt(e))) throw Error(v(188));
                        return t !== e ? null : e;
                    }
                    for (var n = e, r = t; ; ) {
                        var l = n.return;
                        if (null === l) break;
                        var o = l.alternate;
                        if (null === o) {
                            if (null !== (r = l.return)) {
                                n = r;
                                continue;
                            }
                            break;
                        }
                        if (l.child === o.child) {
                            for (o = l.child; o; ) {
                                if (o === n) return rt(l), e;
                                if (o === r) return rt(l), t;
                                o = o.sibling;
                            }
                            throw Error(v(188));
                        }
                        if (n.return !== r.return) (n = l), (r = o);
                        else {
                            for (var a = !1, i = l.child; i; ) {
                                if (i === n) {
                                    (a = !0), (n = l), (r = o);
                                    break;
                                }
                                if (i === r) {
                                    (a = !0), (r = l), (n = o);
                                    break;
                                }
                                i = i.sibling;
                            }
                            if (!a) {
                                for (i = o.child; i; ) {
                                    if (i === n) {
                                        (a = !0), (n = o), (r = l);
                                        break;
                                    }
                                    if (i === r) {
                                        (a = !0), (r = o), (n = l);
                                        break;
                                    }
                                    i = i.sibling;
                                }
                                if (!a) throw Error(v(189));
                            }
                        }
                        if (n.alternate !== r) throw Error(v(190));
                    }
                    if (3 !== n.tag) throw Error(v(188));
                    return n.stateNode.current === n ? e : t;
                })(e))
                ? ot(e)
                : null;
        }
        function ot(e) {
            if (5 === e.tag || 6 === e.tag) return e;
            for (e = e.child; null !== e; ) {
                var t = ot(e);
                if (null !== t) return t;
                e = e.sibling;
            }
            return null;
        }
        var at = y.unstable_scheduleCallback,
            it = y.unstable_cancelCallback,
            ut = y.unstable_shouldYield,
            st = y.unstable_requestPaint,
            ct = y.unstable_now,
            ft = y.unstable_getCurrentPriorityLevel,
            dt = y.unstable_ImmediatePriority,
            pt = y.unstable_UserBlockingPriority,
            ht = y.unstable_NormalPriority,
            mt = y.unstable_LowPriority,
            gt = y.unstable_IdlePriority,
            yt = null,
            vt = null;
        var bt = Math.clz32
                ? Math.clz32
                : function (e) {
                      return (
                          (e >>>= 0),
                          0 === e ? 32 : (31 - ((kt(e) / xt) | 0)) | 0
                      );
                  },
            kt = Math.log,
            xt = Math.LN2;
        var wt = 64,
            St = 4194304;
        function Et(e) {
            switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e;
            }
        }
        function Ct(e, t) {
            var n = e.pendingLanes;
            if (0 === n) return 0;
            var r = 0,
                l = e.suspendedLanes,
                o = e.pingedLanes,
                a = 268435455 & n;
            if (0 !== a) {
                var i = a & ~l;
                0 !== i ? (r = Et(i)) : 0 !== (o &= a) && (r = Et(o));
            } else 0 !== (a = n & ~l) ? (r = Et(a)) : 0 !== o && (r = Et(o));
            if (0 === r) return 0;
            if (
                0 !== t &&
                t !== r &&
                0 == (t & l) &&
                ((l = r & -r) >= (o = t & -t) ||
                    (16 === l && 0 != (4194240 & o)))
            )
                return t;
            if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
                for (e = e.entanglements, t &= r; 0 < t; )
                    (l = 1 << (n = 31 - bt(t))), (r |= e[n]), (t &= ~l);
            return r;
        }
        function Lt(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1;
            }
        }
        function Tt(e) {
            return 0 !== (e = -1073741825 & e.pendingLanes)
                ? e
                : 1073741824 & e
                ? 1073741824
                : 0;
        }
        function Nt() {
            var e = wt;
            return 0 == (4194240 & (wt <<= 1)) && (wt = 64), e;
        }
        function Pt(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t;
        }
        function _t(e, t, n) {
            (e.pendingLanes |= t),
                536870912 !== t &&
                    ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
                ((e = e.eventTimes)[(t = 31 - bt(t))] = n);
        }
        function Dt(e, t) {
            var n = (e.entangledLanes |= t);
            for (e = e.entanglements; n; ) {
                var r = 31 - bt(n),
                    l = 1 << r;
                (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
            }
        }
        var Ft = 0;
        function At(e) {
            return 1 < (e &= -e)
                ? 4 < e
                    ? 0 != (268435455 & e)
                        ? 16
                        : 536870912
                    : 4
                : 1;
        }
        var Rt,
            zt,
            Ot,
            It,
            jt,
            Mt = !1,
            Ut = [],
            qt = null,
            Bt = null,
            Vt = null,
            Ht = new Map(),
            $t = new Map(),
            Wt = [],
            Qt =
                "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                    " "
                );
        function Gt(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    qt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Bt = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Vt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Ht.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    $t.delete(t.pointerId);
            }
        }
        function Yt(e, t, n, r, l, o) {
            return null === e || e.nativeEvent !== o
                ? ((e = {
                      blockedOn: t,
                      domEventName: n,
                      eventSystemFlags: r,
                      nativeEvent: o,
                      targetContainers: [l]
                  }),
                  null !== t && null !== (t = Fl(t)) && zt(t),
                  e)
                : ((e.eventSystemFlags |= r),
                  (t = e.targetContainers),
                  null !== l && -1 === t.indexOf(l) && t.push(l),
                  e);
        }
        function Kt(e) {
            var t = Dl(e.target);
            if (null !== t) {
                var n = tt(t);
                if (null !== n)
                    if (13 === (t = n.tag)) {
                        if (null !== (t = nt(n)))
                            return (
                                (e.blockedOn = t),
                                void jt(e.priority, function () {
                                    Ot(n);
                                })
                            );
                    } else if (
                        3 === t &&
                        n.stateNode.current.memoizedState.isDehydrated
                    )
                        return void (e.blockedOn =
                            3 === n.tag ? n.stateNode.containerInfo : null);
            }
            e.blockedOn = null;
        }
        function Xt(e) {
            if (null !== e.blockedOn) return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
                var n = sn(
                    e.domEventName,
                    e.eventSystemFlags,
                    t[0],
                    e.nativeEvent
                );
                if (null !== n)
                    return null !== (t = Fl(n)) && zt(t), (e.blockedOn = n), !1;
                var r = new (n = e.nativeEvent).constructor(n.type, n);
                (Ae = r), n.target.dispatchEvent(r), (Ae = null), t.shift();
            }
            return !0;
        }
        function Jt(e, t, n) {
            Xt(e) && n.delete(t);
        }
        function Zt() {
            (Mt = !1),
                null !== qt && Xt(qt) && (qt = null),
                null !== Bt && Xt(Bt) && (Bt = null),
                null !== Vt && Xt(Vt) && (Vt = null),
                Ht.forEach(Jt),
                $t.forEach(Jt);
        }
        function en(e, t) {
            e.blockedOn === t &&
                ((e.blockedOn = null),
                Mt ||
                    ((Mt = !0),
                    y.unstable_scheduleCallback(
                        y.unstable_NormalPriority,
                        Zt
                    )));
        }
        function tn(e) {
            function t(t) {
                return en(t, e);
            }
            if (0 < Ut.length) {
                en(Ut[0], e);
                for (var n = 1; n < Ut.length; n++) {
                    var r = Ut[n];
                    r.blockedOn === e && (r.blockedOn = null);
                }
            }
            for (
                null !== qt && en(qt, e),
                    null !== Bt && en(Bt, e),
                    null !== Vt && en(Vt, e),
                    Ht.forEach(t),
                    $t.forEach(t),
                    n = 0;
                n < Wt.length;
                n++
            )
                (r = Wt[n]).blockedOn === e && (r.blockedOn = null);
            for (; 0 < Wt.length && null === (n = Wt[0]).blockedOn; )
                Kt(n), null === n.blockedOn && Wt.shift();
        }
        var nn = A.ReactCurrentBatchConfig,
            rn = !0;
        function ln(e, t, n, r) {
            var l = Ft,
                o = nn.transition;
            nn.transition = null;
            try {
                (Ft = 1), an(e, t, n, r);
            } finally {
                (Ft = l), (nn.transition = o);
            }
        }
        function on(e, t, n, r) {
            var l = Ft,
                o = nn.transition;
            nn.transition = null;
            try {
                (Ft = 4), an(e, t, n, r);
            } finally {
                (Ft = l), (nn.transition = o);
            }
        }
        function an(e, t, n, r) {
            if (rn) {
                var l = sn(e, t, n, r);
                if (null === l) rl(e, t, r, un, n), Gt(e, r);
                else if (
                    (function (e, t, n, r, l) {
                        switch (t) {
                            case "focusin":
                                return (qt = Yt(qt, e, t, n, r, l)), !0;
                            case "dragenter":
                                return (Bt = Yt(Bt, e, t, n, r, l)), !0;
                            case "mouseover":
                                return (Vt = Yt(Vt, e, t, n, r, l)), !0;
                            case "pointerover":
                                var o = l.pointerId;
                                return (
                                    Ht.set(
                                        o,
                                        Yt(Ht.get(o) || null, e, t, n, r, l)
                                    ),
                                    !0
                                );
                            case "gotpointercapture":
                                return (
                                    (o = l.pointerId),
                                    $t.set(
                                        o,
                                        Yt($t.get(o) || null, e, t, n, r, l)
                                    ),
                                    !0
                                );
                        }
                        return !1;
                    })(l, e, t, n, r)
                )
                    r.stopPropagation();
                else if ((Gt(e, r), 4 & t && -1 < Qt.indexOf(e))) {
                    for (; null !== l; ) {
                        var o = Fl(l);
                        if (
                            (null !== o && Rt(o),
                            null === (o = sn(e, t, n, r)) && rl(e, t, r, un, n),
                            o === l)
                        )
                            break;
                        l = o;
                    }
                    null !== l && r.stopPropagation();
                } else rl(e, t, r, null, n);
            }
        }
        var un = null;
        function sn(e, t, n, r) {
            if (((un = null), null !== (e = Dl((e = Re(r))))))
                if (null === (t = tt(e))) e = null;
                else if (13 === (n = t.tag)) {
                    if (null !== (e = nt(t))) return e;
                    e = null;
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            return (un = e), null;
        }
        function cn(e) {
            switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (ft()) {
                        case dt:
                            return 1;
                        case pt:
                            return 4;
                        case ht:
                        case mt:
                            return 16;
                        case gt:
                            return 536870912;
                        default:
                            return 16;
                    }
                default:
                    return 16;
            }
        }
        var fn = null,
            dn = null,
            pn = null;
        function hn() {
            if (pn) return pn;
            var e,
                t,
                n = dn,
                r = n.length,
                l = "value" in fn ? fn.value : fn.textContent,
                o = l.length;
            for (e = 0; e < r && n[e] === l[e]; e++);
            var a = r - e;
            for (t = 1; t <= a && n[r - t] === l[o - t]; t++);
            return (pn = l.slice(e, 1 < t ? 1 - t : void 0));
        }
        function mn(e) {
            var t = e.keyCode;
            return (
                "charCode" in e
                    ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                    : (e = t),
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            );
        }
        function gn() {
            return !0;
        }
        function yn() {
            return !1;
        }
        function vn(e) {
            function t(t, n, r, l, o) {
                for (var a in ((this._reactName = t),
                (this._targetInst = r),
                (this.type = n),
                (this.nativeEvent = l),
                (this.target = o),
                (this.currentTarget = null),
                e))
                    e.hasOwnProperty(a) &&
                        ((t = e[a]), (this[a] = t ? t(l) : l[a]));
                return (
                    (this.isDefaultPrevented = (
                        null != l.defaultPrevented
                            ? l.defaultPrevented
                            : !1 === l.returnValue
                    )
                        ? gn
                        : yn),
                    (this.isPropagationStopped = yn),
                    this
                );
            }
            return (
                K(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e &&
                            (e.preventDefault
                                ? e.preventDefault()
                                : "unknown" != typeof e.returnValue &&
                                  (e.returnValue = !1),
                            (this.isDefaultPrevented = gn));
                    },
                    stopPropagation: function () {
                        var e = this.nativeEvent;
                        e &&
                            (e.stopPropagation
                                ? e.stopPropagation()
                                : "unknown" != typeof e.cancelBubble &&
                                  (e.cancelBubble = !0),
                            (this.isPropagationStopped = gn));
                    },
                    persist: function () {},
                    isPersistent: gn
                }),
                t
            );
        }
        var bn,
            kn,
            xn,
            wn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            Sn = vn(wn),
            En = K({}, wn, { view: 0, detail: 0 }),
            Cn = vn(En),
            Ln = K({}, En, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: jn,
                button: 0,
                buttons: 0,
                relatedTarget: function (e) {
                    return void 0 === e.relatedTarget
                        ? e.fromElement === e.srcElement
                            ? e.toElement
                            : e.fromElement
                        : e.relatedTarget;
                },
                movementX: function (e) {
                    return "movementX" in e
                        ? e.movementX
                        : (e !== xn &&
                              (xn && "mousemove" === e.type
                                  ? ((bn = e.screenX - xn.screenX),
                                    (kn = e.screenY - xn.screenY))
                                  : (kn = bn = 0),
                              (xn = e)),
                          bn);
                },
                movementY: function (e) {
                    return "movementY" in e ? e.movementY : kn;
                }
            }),
            Tn = vn(Ln),
            Nn = vn(K({}, Ln, { dataTransfer: 0 })),
            Pn = vn(K({}, En, { relatedTarget: 0 })),
            _n = vn(
                K({}, wn, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })
            ),
            Dn = K({}, wn, {
                clipboardData: function (e) {
                    return "clipboardData" in e
                        ? e.clipboardData
                        : window.clipboardData;
                }
            }),
            Fn = vn(Dn),
            An = vn(K({}, wn, { data: 0 })),
            Rn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            zn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            },
            On = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
        function In(e) {
            var t = this.nativeEvent;
            return t.getModifierState
                ? t.getModifierState(e)
                : !!(e = On[e]) && !!t[e];
        }
        function jn() {
            return In;
        }
        var Mn = K({}, En, {
                key: function (e) {
                    if (e.key) {
                        var t = Rn[e.key] || e.key;
                        if ("Unidentified" !== t) return t;
                    }
                    return "keypress" === e.type
                        ? 13 === (e = mn(e))
                            ? "Enter"
                            : String.fromCharCode(e)
                        : "keydown" === e.type || "keyup" === e.type
                        ? zn[e.keyCode] || "Unidentified"
                        : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: jn,
                charCode: function (e) {
                    return "keypress" === e.type ? mn(e) : 0;
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type
                        ? e.keyCode
                        : 0;
                },
                which: function (e) {
                    return "keypress" === e.type
                        ? mn(e)
                        : "keydown" === e.type || "keyup" === e.type
                        ? e.keyCode
                        : 0;
                }
            }),
            Un = vn(Mn),
            qn = vn(
                K({}, Ln, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })
            ),
            Bn = vn(
                K({}, En, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: jn
                })
            ),
            Vn = vn(
                K({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
            ),
            Hn = K({}, Ln, {
                deltaX: function (e) {
                    return "deltaX" in e
                        ? e.deltaX
                        : "wheelDeltaX" in e
                        ? -e.wheelDeltaX
                        : 0;
                },
                deltaY: function (e) {
                    return "deltaY" in e
                        ? e.deltaY
                        : "wheelDeltaY" in e
                        ? -e.wheelDeltaY
                        : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            $n = vn(Hn),
            Wn = [9, 13, 27, 32],
            Qn = S && "CompositionEvent" in window,
            Gn = null;
        S && "documentMode" in document && (Gn = document.documentMode);
        var Yn = S && "TextEvent" in window && !Gn,
            Kn = S && (!Qn || (Gn && 8 < Gn && 11 >= Gn)),
            Xn = String.fromCharCode(32),
            Jn = !1;
        function Zn(e, t) {
            switch (e) {
                case "keyup":
                    return -1 !== Wn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function er(e) {
            return "object" == typeof (e = e.detail) && "data" in e
                ? e.data
                : null;
        }
        var tr = !1;
        var nr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function rr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!nr[e.type] : "textarea" === t;
        }
        function lr(e, t, n, r) {
            Me(r),
                0 < (t = ol(t, "onChange")).length &&
                    ((n = new Sn("onChange", "change", null, n, r)),
                    e.push({ event: n, listeners: t }));
        }
        var or = null,
            ar = null;
        function ir(e) {
            Xr(e, 0);
        }
        function ur(e) {
            if (ae(Al(e))) return e;
        }
        function sr(e, t) {
            if ("change" === e) return t;
        }
        var cr = !1;
        if (S) {
            var fr;
            if (S) {
                var dr = "oninput" in document;
                if (!dr) {
                    var pr = document.createElement("div");
                    pr.setAttribute("oninput", "return;"),
                        (dr = "function" == typeof pr.oninput);
                }
                fr = dr;
            } else fr = !1;
            cr = fr && (!document.documentMode || 9 < document.documentMode);
        }
        function hr() {
            or && (or.detachEvent("onpropertychange", mr), (ar = or = null));
        }
        function mr(e) {
            if ("value" === e.propertyName && ur(ar)) {
                var t = [];
                lr(t, ar, e, Re(e)), He(ir, t);
            }
        }
        function gr(e, t, n) {
            "focusin" === e
                ? (hr(), (ar = n), (or = t).attachEvent("onpropertychange", mr))
                : "focusout" === e && hr();
        }
        function yr(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                return ur(ar);
        }
        function vr(e, t) {
            if ("click" === e) return ur(t);
        }
        function br(e, t) {
            if ("input" === e || "change" === e) return ur(t);
        }
        var kr =
            "function" == typeof Object.is
                ? Object.is
                : function (e, t) {
                      return (
                          (e === t && (0 !== e || 1 / e == 1 / t)) ||
                          (e != e && t != t)
                      );
                  };
        function xr(e, t) {
            if (kr(e, t)) return !0;
            if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
            )
                return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
                var l = n[r];
                if (!E.call(t, l) || !kr(e[l], t[l])) return !1;
            }
            return !0;
        }
        function wr(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function Sr(e, t) {
            var n,
                r = wr(e);
            for (e = 0; r; ) {
                if (3 === r.nodeType) {
                    if (((n = e + r.textContent.length), e <= t && n >= t))
                        return { node: r, offset: t - e };
                    e = n;
                }
                e: {
                    for (; r; ) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e;
                        }
                        r = r.parentNode;
                    }
                    r = void 0;
                }
                r = wr(r);
            }
        }
        function Er(e, t) {
            return (
                !(!e || !t) &&
                (e === t ||
                    ((!e || 3 !== e.nodeType) &&
                        (t && 3 === t.nodeType
                            ? Er(e, t.parentNode)
                            : "contains" in e
                            ? e.contains(t)
                            : !!e.compareDocumentPosition &&
                              !!(16 & e.compareDocumentPosition(t)))))
            );
        }
        function Cr() {
            for (var e = window, t = ie(); t instanceof e.HTMLIFrameElement; ) {
                try {
                    var n = "string" == typeof t.contentWindow.location.href;
                } catch (e) {
                    n = !1;
                }
                if (!n) break;
                t = ie((e = t.contentWindow).document);
            }
            return t;
        }
        function Lr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
                t &&
                (("input" === t &&
                    ("text" === e.type ||
                        "search" === e.type ||
                        "tel" === e.type ||
                        "url" === e.type ||
                        "password" === e.type)) ||
                    "textarea" === t ||
                    "true" === e.contentEditable)
            );
        }
        function Tr(e) {
            var t = Cr(),
                n = e.focusedElem,
                r = e.selectionRange;
            if (
                t !== n &&
                n &&
                n.ownerDocument &&
                Er(n.ownerDocument.documentElement, n)
            ) {
                if (null !== r && Lr(n))
                    if (
                        ((t = r.start),
                        void 0 === (e = r.end) && (e = t),
                        "selectionStart" in n)
                    )
                        (n.selectionStart = t),
                            (n.selectionEnd = Math.min(e, n.value.length));
                    else if (
                        (e =
                            ((t = n.ownerDocument || document) &&
                                t.defaultView) ||
                            window).getSelection
                    ) {
                        e = e.getSelection();
                        var l = n.textContent.length,
                            o = Math.min(r.start, l);
                        (r = void 0 === r.end ? o : Math.min(r.end, l)),
                            !e.extend && o > r && ((l = r), (r = o), (o = l)),
                            (l = Sr(n, o));
                        var a = Sr(n, r);
                        l &&
                            a &&
                            (1 !== e.rangeCount ||
                                e.anchorNode !== l.node ||
                                e.anchorOffset !== l.offset ||
                                e.focusNode !== a.node ||
                                e.focusOffset !== a.offset) &&
                            ((t = t.createRange()).setStart(l.node, l.offset),
                            e.removeAllRanges(),
                            o > r
                                ? (e.addRange(t), e.extend(a.node, a.offset))
                                : (t.setEnd(a.node, a.offset), e.addRange(t)));
                    }
                for (t = [], e = n; (e = e.parentNode); )
                    1 === e.nodeType &&
                        t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                for (
                    "function" == typeof n.focus && n.focus(), n = 0;
                    n < t.length;
                    n++
                )
                    ((e = t[n]).element.scrollLeft = e.left),
                        (e.element.scrollTop = e.top);
            }
        }
        var Nr = S && "documentMode" in document && 11 >= document.documentMode,
            Pr = null,
            _r = null,
            Dr = null,
            Fr = !1;
        function Ar(e, t, n) {
            var r =
                n.window === n
                    ? n.document
                    : 9 === n.nodeType
                    ? n
                    : n.ownerDocument;
            Fr ||
                null == Pr ||
                Pr !== ie(r) ||
                ("selectionStart" in (r = Pr) && Lr(r)
                    ? (r = { start: r.selectionStart, end: r.selectionEnd })
                    : (r = {
                          anchorNode: (r = (
                              (r.ownerDocument &&
                                  r.ownerDocument.defaultView) ||
                              window
                          ).getSelection()).anchorNode,
                          anchorOffset: r.anchorOffset,
                          focusNode: r.focusNode,
                          focusOffset: r.focusOffset
                      }),
                (Dr && xr(Dr, r)) ||
                    ((Dr = r),
                    0 < (r = ol(_r, "onSelect")).length &&
                        ((t = new Sn("onSelect", "select", null, t, n)),
                        e.push({ event: t, listeners: r }),
                        (t.target = Pr))));
        }
        function Rr(e, t) {
            var n = {};
            return (
                (n[e.toLowerCase()] = t.toLowerCase()),
                (n["Webkit" + e] = "webkit" + t),
                (n["Moz" + e] = "moz" + t),
                n
            );
        }
        var zr = {
                animationend: Rr("Animation", "AnimationEnd"),
                animationiteration: Rr("Animation", "AnimationIteration"),
                animationstart: Rr("Animation", "AnimationStart"),
                transitionend: Rr("Transition", "TransitionEnd")
            },
            Or = {},
            Ir = {};
        function jr(e) {
            if (Or[e]) return Or[e];
            if (!zr[e]) return e;
            var t,
                n = zr[e];
            for (t in n)
                if (n.hasOwnProperty(t) && t in Ir) return (Or[e] = n[t]);
            return e;
        }
        S &&
            ((Ir = document.createElement("div").style),
            "AnimationEvent" in window ||
                (delete zr.animationend.animation,
                delete zr.animationiteration.animation,
                delete zr.animationstart.animation),
            "TransitionEvent" in window || delete zr.transitionend.transition);
        var Mr = jr("animationend"),
            Ur = jr("animationiteration"),
            qr = jr("animationstart"),
            Br = jr("transitionend"),
            Vr = new Map(),
            Hr =
                "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                    " "
                );
        function $r(e, t) {
            Vr.set(e, t), x(t, [e]);
        }
        for (var Wr = 0; Wr < Hr.length; Wr++) {
            var Qr = Hr[Wr];
            $r(Qr.toLowerCase(), "on" + (Qr[0].toUpperCase() + Qr.slice(1)));
        }
        $r(Mr, "onAnimationEnd"),
            $r(Ur, "onAnimationIteration"),
            $r(qr, "onAnimationStart"),
            $r("dblclick", "onDoubleClick"),
            $r("focusin", "onFocus"),
            $r("focusout", "onBlur"),
            $r(Br, "onTransitionEnd"),
            w("onMouseEnter", ["mouseout", "mouseover"]),
            w("onMouseLeave", ["mouseout", "mouseover"]),
            w("onPointerEnter", ["pointerout", "pointerover"]),
            w("onPointerLeave", ["pointerout", "pointerover"]),
            x(
                "onChange",
                "change click focusin focusout input keydown keyup selectionchange".split(
                    " "
                )
            ),
            x(
                "onSelect",
                "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                    " "
                )
            ),
            x("onBeforeInput", [
                "compositionend",
                "keypress",
                "textInput",
                "paste"
            ]),
            x(
                "onCompositionEnd",
                "compositionend focusout keydown keypress keyup mousedown".split(
                    " "
                )
            ),
            x(
                "onCompositionStart",
                "compositionstart focusout keydown keypress keyup mousedown".split(
                    " "
                )
            ),
            x(
                "onCompositionUpdate",
                "compositionupdate focusout keydown keypress keyup mousedown".split(
                    " "
                )
            );
        var Gr =
                "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
            Yr = new Set(
                "cancel close invalid load scroll toggle".split(" ").concat(Gr)
            );
        function Kr(e, t, n) {
            var r = e.type || "unknown-event";
            (e.currentTarget = n),
                (function (e, t, n, r, l, o, a, i, u) {
                    if ((et.apply(this, arguments), Ye)) {
                        if (!Ye) throw Error(v(198));
                        var s = Ke;
                        (Ye = !1), (Ke = null), Xe || ((Xe = !0), (Je = s));
                    }
                })(r, t, void 0, e),
                (e.currentTarget = null);
        }
        function Xr(e, t) {
            t = 0 != (4 & t);
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    l = r.event;
                r = r.listeners;
                e: {
                    var o = void 0;
                    if (t)
                        for (var a = r.length - 1; 0 <= a; a--) {
                            var i = r[a],
                                u = i.instance,
                                s = i.currentTarget;
                            if (
                                ((i = i.listener),
                                u !== o && l.isPropagationStopped())
                            )
                                break e;
                            Kr(l, i, s), (o = u);
                        }
                    else
                        for (a = 0; a < r.length; a++) {
                            if (
                                ((u = (i = r[a]).instance),
                                (s = i.currentTarget),
                                (i = i.listener),
                                u !== o && l.isPropagationStopped())
                            )
                                break e;
                            Kr(l, i, s), (o = u);
                        }
                }
            }
            if (Xe) throw ((e = Je), (Xe = !1), (Je = null), e);
        }
        function Jr(e, t) {
            var n = t[Nl];
            void 0 === n && (n = t[Nl] = new Set());
            var r = e + "__bubble";
            n.has(r) || (nl(t, e, 2, !1), n.add(r));
        }
        function Zr(e, t, n) {
            var r = 0;
            t && (r |= 4), nl(n, e, r, t);
        }
        var el = "_reactListening" + Math.random().toString(36).slice(2);
        function tl(e) {
            if (!e[el]) {
                (e[el] = !0),
                    b.forEach(function (t) {
                        "selectionchange" !== t &&
                            (Yr.has(t) || Zr(t, !1, e), Zr(t, !0, e));
                    });
                var t = 9 === e.nodeType ? e : e.ownerDocument;
                null === t ||
                    t[el] ||
                    ((t[el] = !0), Zr("selectionchange", !1, t));
            }
        }
        function nl(e, t, n, r) {
            switch (cn(t)) {
                case 1:
                    var l = ln;
                    break;
                case 4:
                    l = on;
                    break;
                default:
                    l = an;
            }
            (n = l.bind(null, t, n, e)),
                (l = void 0),
                !We ||
                    ("touchstart" !== t &&
                        "touchmove" !== t &&
                        "wheel" !== t) ||
                    (l = !0),
                r
                    ? void 0 !== l
                        ? e.addEventListener(t, n, { capture: !0, passive: l })
                        : e.addEventListener(t, n, !0)
                    : void 0 !== l
                    ? e.addEventListener(t, n, { passive: l })
                    : e.addEventListener(t, n, !1);
        }
        function rl(e, t, n, r, l) {
            var o = r;
            if (0 == (1 & t) && 0 == (2 & t) && null !== r)
                e: for (;;) {
                    if (null === r) return;
                    var a = r.tag;
                    if (3 === a || 4 === a) {
                        var i = r.stateNode.containerInfo;
                        if (i === l || (8 === i.nodeType && i.parentNode === l))
                            break;
                        if (4 === a)
                            for (a = r.return; null !== a; ) {
                                var u = a.tag;
                                if (
                                    (3 === u || 4 === u) &&
                                    ((u = a.stateNode.containerInfo) === l ||
                                        (8 === u.nodeType &&
                                            u.parentNode === l))
                                )
                                    return;
                                a = a.return;
                            }
                        for (; null !== i; ) {
                            if (null === (a = Dl(i))) return;
                            if (5 === (u = a.tag) || 6 === u) {
                                r = o = a;
                                continue e;
                            }
                            i = i.parentNode;
                        }
                    }
                    r = r.return;
                }
            He(function () {
                var r = o,
                    l = Re(n),
                    a = [];
                e: {
                    var i = Vr.get(e);
                    if (void 0 !== i) {
                        var u = Sn,
                            s = e;
                        switch (e) {
                            case "keypress":
                                if (0 === mn(n)) break e;
                            case "keydown":
                            case "keyup":
                                u = Un;
                                break;
                            case "focusin":
                                (s = "focus"), (u = Pn);
                                break;
                            case "focusout":
                                (s = "blur"), (u = Pn);
                                break;
                            case "beforeblur":
                            case "afterblur":
                                u = Pn;
                                break;
                            case "click":
                                if (2 === n.button) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                u = Tn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                u = Nn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                u = Bn;
                                break;
                            case Mr:
                            case Ur:
                            case qr:
                                u = _n;
                                break;
                            case Br:
                                u = Vn;
                                break;
                            case "scroll":
                                u = Cn;
                                break;
                            case "wheel":
                                u = $n;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                u = Fn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                u = qn;
                        }
                        var c = 0 != (4 & t),
                            f = !c && "scroll" === e,
                            d = c ? (null !== i ? i + "Capture" : null) : i;
                        c = [];
                        for (var p, h = r; null !== h; ) {
                            var m = (p = h).stateNode;
                            if (
                                (5 === p.tag &&
                                    null !== m &&
                                    ((p = m),
                                    null !== d &&
                                        null != (m = $e(h, d)) &&
                                        c.push(ll(h, m, p))),
                                f)
                            )
                                break;
                            h = h.return;
                        }
                        0 < c.length &&
                            ((i = new u(i, s, null, n, l)),
                            a.push({ event: i, listeners: c }));
                    }
                }
                if (0 == (7 & t)) {
                    if (
                        ((u = "mouseout" === e || "pointerout" === e),
                        (!(i = "mouseover" === e || "pointerover" === e) ||
                            n === Ae ||
                            !(s = n.relatedTarget || n.fromElement) ||
                            (!Dl(s) && !s[Tl])) &&
                            (u || i) &&
                            ((i =
                                l.window === l
                                    ? l
                                    : (i = l.ownerDocument)
                                    ? i.defaultView || i.parentWindow
                                    : window),
                            u
                                ? ((u = r),
                                  null !==
                                      (s = (s = n.relatedTarget || n.toElement)
                                          ? Dl(s)
                                          : null) &&
                                      (s !== (f = tt(s)) ||
                                          (5 !== s.tag && 6 !== s.tag)) &&
                                      (s = null))
                                : ((u = null), (s = r)),
                            u !== s))
                    ) {
                        if (
                            ((c = Tn),
                            (m = "onMouseLeave"),
                            (d = "onMouseEnter"),
                            (h = "mouse"),
                            ("pointerout" !== e && "pointerover" !== e) ||
                                ((c = qn),
                                (m = "onPointerLeave"),
                                (d = "onPointerEnter"),
                                (h = "pointer")),
                            (f = null == u ? i : Al(u)),
                            (p = null == s ? i : Al(s)),
                            ((i = new c(m, h + "leave", u, n, l)).target = f),
                            (i.relatedTarget = p),
                            (m = null),
                            Dl(l) === r &&
                                (((c = new c(d, h + "enter", s, n, l)).target =
                                    p),
                                (c.relatedTarget = f),
                                (m = c)),
                            (f = m),
                            u && s)
                        )
                            e: {
                                for (d = s, h = 0, p = c = u; p; p = al(p)) h++;
                                for (p = 0, m = d; m; m = al(m)) p++;
                                for (; 0 < h - p; ) (c = al(c)), h--;
                                for (; 0 < p - h; ) (d = al(d)), p--;
                                for (; h--; ) {
                                    if (
                                        c === d ||
                                        (null !== d && c === d.alternate)
                                    )
                                        break e;
                                    (c = al(c)), (d = al(d));
                                }
                                c = null;
                            }
                        else c = null;
                        null !== u && il(a, i, u, c, !1),
                            null !== s && null !== f && il(a, f, s, c, !0);
                    }
                    if (
                        "select" ===
                            (u =
                                (i = r ? Al(r) : window).nodeName &&
                                i.nodeName.toLowerCase()) ||
                        ("input" === u && "file" === i.type)
                    )
                        var g = sr;
                    else if (rr(i))
                        if (cr) g = br;
                        else {
                            g = yr;
                            var y = gr;
                        }
                    else
                        (u = i.nodeName) &&
                            "input" === u.toLowerCase() &&
                            ("checkbox" === i.type || "radio" === i.type) &&
                            (g = vr);
                    switch (
                        (g && (g = g(e, r))
                            ? lr(a, g, n, l)
                            : (y && y(e, i, r),
                              "focusout" === e &&
                                  (y = i._wrapperState) &&
                                  y.controlled &&
                                  "number" === i.type &&
                                  pe(i, "number", i.value)),
                        (y = r ? Al(r) : window),
                        e)
                    ) {
                        case "focusin":
                            (rr(y) || "true" === y.contentEditable) &&
                                ((Pr = y), (_r = r), (Dr = null));
                            break;
                        case "focusout":
                            Dr = _r = Pr = null;
                            break;
                        case "mousedown":
                            Fr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            (Fr = !1), Ar(a, n, l);
                            break;
                        case "selectionchange":
                            if (Nr) break;
                        case "keydown":
                        case "keyup":
                            Ar(a, n, l);
                    }
                    var v;
                    if (Qn)
                        e: {
                            switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e;
                            }
                            b = void 0;
                        }
                    else
                        tr
                            ? Zn(e, n) && (b = "onCompositionEnd")
                            : "keydown" === e &&
                              229 === n.keyCode &&
                              (b = "onCompositionStart");
                    b &&
                        (Kn &&
                            "ko" !== n.locale &&
                            (tr || "onCompositionStart" !== b
                                ? "onCompositionEnd" === b && tr && (v = hn())
                                : ((dn =
                                      "value" in (fn = l)
                                          ? fn.value
                                          : fn.textContent),
                                  (tr = !0))),
                        0 < (y = ol(r, b)).length &&
                            ((b = new An(b, e, null, n, l)),
                            a.push({ event: b, listeners: y }),
                            v
                                ? (b.data = v)
                                : null !== (v = er(n)) && (b.data = v))),
                        (v = Yn
                            ? (function (e, t) {
                                  switch (e) {
                                      case "compositionend":
                                          return er(t);
                                      case "keypress":
                                          return 32 !== t.which
                                              ? null
                                              : ((Jn = !0), Xn);
                                      case "textInput":
                                          return (e = t.data) === Xn && Jn
                                              ? null
                                              : e;
                                      default:
                                          return null;
                                  }
                              })(e, n)
                            : (function (e, t) {
                                  if (tr)
                                      return "compositionend" === e ||
                                          (!Qn && Zn(e, t))
                                          ? ((e = hn()),
                                            (pn = dn = fn = null),
                                            (tr = !1),
                                            e)
                                          : null;
                                  switch (e) {
                                      case "paste":
                                      default:
                                          return null;
                                      case "keypress":
                                          if (
                                              !(
                                                  t.ctrlKey ||
                                                  t.altKey ||
                                                  t.metaKey
                                              ) ||
                                              (t.ctrlKey && t.altKey)
                                          ) {
                                              if (t.char && 1 < t.char.length)
                                                  return t.char;
                                              if (t.which)
                                                  return String.fromCharCode(
                                                      t.which
                                                  );
                                          }
                                          return null;
                                      case "compositionend":
                                          return Kn && "ko" !== t.locale
                                              ? null
                                              : t.data;
                                  }
                              })(e, n)) &&
                            0 < (r = ol(r, "onBeforeInput")).length &&
                            ((l = new An(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                n,
                                l
                            )),
                            a.push({ event: l, listeners: r }),
                            (l.data = v));
                }
                Xr(a, t);
            });
        }
        function ll(e, t, n) {
            return { instance: e, listener: t, currentTarget: n };
        }
        function ol(e, t) {
            for (var n = t + "Capture", r = []; null !== e; ) {
                var l = e,
                    o = l.stateNode;
                5 === l.tag &&
                    null !== o &&
                    ((l = o),
                    null != (o = $e(e, n)) && r.unshift(ll(e, o, l)),
                    null != (o = $e(e, t)) && r.push(ll(e, o, l))),
                    (e = e.return);
            }
            return r;
        }
        function al(e) {
            if (null === e) return null;
            do {
                e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
        }
        function il(e, t, n, r, l) {
            for (var o = t._reactName, a = []; null !== n && n !== r; ) {
                var i = n,
                    u = i.alternate,
                    s = i.stateNode;
                if (null !== u && u === r) break;
                5 === i.tag &&
                    null !== s &&
                    ((i = s),
                    l
                        ? null != (u = $e(n, o)) && a.unshift(ll(n, u, i))
                        : l || (null != (u = $e(n, o)) && a.push(ll(n, u, i)))),
                    (n = n.return);
            }
            0 !== a.length && e.push({ event: t, listeners: a });
        }
        var ul = /\r\n?/g,
            sl = /\u0000|\uFFFD/g;
        function cl(e) {
            return ("string" == typeof e ? e : "" + e)
                .replace(ul, "\n")
                .replace(sl, "");
        }
        function fl(e, t, n) {
            if (((t = cl(t)), cl(e) !== t && n)) throw Error(v(425));
        }
        function dl() {}
        var pl = null,
            hl = null;
        function ml(e, t) {
            return (
                "textarea" === e ||
                "noscript" === e ||
                "string" == typeof t.children ||
                "number" == typeof t.children ||
                ("object" == typeof t.dangerouslySetInnerHTML &&
                    null !== t.dangerouslySetInnerHTML &&
                    null != t.dangerouslySetInnerHTML.__html)
            );
        }
        var gl = "function" == typeof setTimeout ? setTimeout : void 0,
            yl = "function" == typeof clearTimeout ? clearTimeout : void 0,
            vl = "function" == typeof Promise ? Promise : void 0,
            bl =
                "function" == typeof queueMicrotask
                    ? queueMicrotask
                    : void 0 !== vl
                    ? function (e) {
                          return vl.resolve(null).then(e).catch(kl);
                      }
                    : gl;
        function kl(e) {
            setTimeout(function () {
                throw e;
            });
        }
        function xl(e, t) {
            var n = t,
                r = 0;
            do {
                var l = n.nextSibling;
                if ((e.removeChild(n), l && 8 === l.nodeType))
                    if ("/$" === (n = l.data)) {
                        if (0 === r) return e.removeChild(l), void tn(t);
                        r--;
                    } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
                n = l;
            } while (n);
            tn(t);
        }
        function wl(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break;
                if (8 === t) {
                    if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                    if ("/$" === t) return null;
                }
            }
            return e;
        }
        function Sl(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("$" === n || "$!" === n || "$?" === n) {
                        if (0 === t) return e;
                        t--;
                    } else "/$" === n && t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        var El = Math.random().toString(36).slice(2),
            Cl = "__reactFiber$" + El,
            Ll = "__reactProps$" + El,
            Tl = "__reactContainer$" + El,
            Nl = "__reactEvents$" + El,
            Pl = "__reactListeners$" + El,
            _l = "__reactHandles$" + El;
        function Dl(e) {
            var t = e[Cl];
            if (t) return t;
            for (var n = e.parentNode; n; ) {
                if ((t = n[Tl] || n[Cl])) {
                    if (
                        ((n = t.alternate),
                        null !== t.child || (null !== n && null !== n.child))
                    )
                        for (e = Sl(e); null !== e; ) {
                            if ((n = e[Cl])) return n;
                            e = Sl(e);
                        }
                    return t;
                }
                n = (e = n).parentNode;
            }
            return null;
        }
        function Fl(e) {
            return !(e = e[Cl] || e[Tl]) ||
                (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
                ? null
                : e;
        }
        function Al(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error(v(33));
        }
        function Rl(e) {
            return e[Ll] || null;
        }
        var zl = [],
            Ol = -1;
        function Il(e) {
            return { current: e };
        }
        function jl(e) {
            0 > Ol || ((e.current = zl[Ol]), (zl[Ol] = null), Ol--);
        }
        function Ml(e, t) {
            Ol++, (zl[Ol] = e.current), (e.current = t);
        }
        var Ul = {},
            ql = Il(Ul),
            Bl = Il(!1),
            Vl = Ul;
        function Hl(e, t) {
            var n = e.type.contextTypes;
            if (!n) return Ul;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                return r.__reactInternalMemoizedMaskedChildContext;
            var l,
                o = {};
            for (l in n) o[l] = t[l];
            return (
                r &&
                    (((e =
                        e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                        t),
                    (e.__reactInternalMemoizedMaskedChildContext = o)),
                o
            );
        }
        function $l(e) {
            return null != (e = e.childContextTypes);
        }
        function Wl() {
            jl(Bl), jl(ql);
        }
        function Ql(e, t, n) {
            if (ql.current !== Ul) throw Error(v(168));
            Ml(ql, t), Ml(Bl, n);
        }
        function Gl(e, t, n) {
            var r = e.stateNode;
            if (
                ((t = t.childContextTypes),
                "function" != typeof r.getChildContext)
            )
                return n;
            for (var l in (r = r.getChildContext()))
                if (!(l in t)) throw Error(v(108, ne(e) || "Unknown", l));
            return K({}, n, r);
        }
        function Yl(e) {
            return (
                (e =
                    ((e = e.stateNode) &&
                        e.__reactInternalMemoizedMergedChildContext) ||
                    Ul),
                (Vl = ql.current),
                Ml(ql, e),
                Ml(Bl, Bl.current),
                !0
            );
        }
        function Kl(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error(v(169));
            n
                ? ((e = Gl(e, t, Vl)),
                  (r.__reactInternalMemoizedMergedChildContext = e),
                  jl(Bl),
                  jl(ql),
                  Ml(ql, e))
                : jl(Bl),
                Ml(Bl, n);
        }
        var Xl = null,
            Jl = !1,
            Zl = !1;
        function eo(e) {
            null === Xl ? (Xl = [e]) : Xl.push(e);
        }
        function to() {
            if (!Zl && null !== Xl) {
                Zl = !0;
                var e = 0,
                    t = Ft;
                try {
                    var n = Xl;
                    for (Ft = 1; e < n.length; e++) {
                        var r = n[e];
                        do {
                            r = r(!0);
                        } while (null !== r);
                    }
                    (Xl = null), (Jl = !1);
                } catch (t) {
                    throw (
                        (null !== Xl && (Xl = Xl.slice(e + 1)), at(dt, to), t)
                    );
                } finally {
                    (Ft = t), (Zl = !1);
                }
            }
            return null;
        }
        var no = [],
            ro = 0,
            lo = null,
            oo = 0,
            ao = [],
            io = 0,
            uo = null,
            so = 1,
            co = "";
        function fo(e, t) {
            (no[ro++] = oo), (no[ro++] = lo), (lo = e), (oo = t);
        }
        function po(e, t, n) {
            (ao[io++] = so), (ao[io++] = co), (ao[io++] = uo), (uo = e);
            var r = so;
            e = co;
            var l = 32 - bt(r) - 1;
            (r &= ~(1 << l)), (n += 1);
            var o = 32 - bt(t) + l;
            if (30 < o) {
                var a = l - (l % 5);
                (o = (r & ((1 << a) - 1)).toString(32)),
                    (r >>= a),
                    (l -= a),
                    (so = (1 << (32 - bt(t) + l)) | (n << l) | r),
                    (co = o + e);
            } else (so = (1 << o) | (n << l) | r), (co = e);
        }
        function ho(e) {
            null !== e.return && (fo(e, 1), po(e, 1, 0));
        }
        function mo(e) {
            for (; e === lo; )
                (lo = no[--ro]),
                    (no[ro] = null),
                    (oo = no[--ro]),
                    (no[ro] = null);
            for (; e === uo; )
                (uo = ao[--io]),
                    (ao[io] = null),
                    (co = ao[--io]),
                    (ao[io] = null),
                    (so = ao[--io]),
                    (ao[io] = null);
        }
        var go = null,
            yo = null,
            vo = !1,
            bo = null;
        function ko(e, t) {
            var n = Hs(5, null, null, 0);
            (n.elementType = "DELETED"),
                (n.stateNode = t),
                (n.return = e),
                null === (t = e.deletions)
                    ? ((e.deletions = [n]), (e.flags |= 16))
                    : t.push(n);
        }
        function xo(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return (
                        null !==
                            (t =
                                1 !== t.nodeType ||
                                n.toLowerCase() !== t.nodeName.toLowerCase()
                                    ? null
                                    : t) &&
                        ((e.stateNode = t),
                        (go = e),
                        (yo = wl(t.firstChild)),
                        !0)
                    );
                case 6:
                    return (
                        null !==
                            (t =
                                "" === e.pendingProps || 3 !== t.nodeType
                                    ? null
                                    : t) &&
                        ((e.stateNode = t), (go = e), (yo = null), !0)
                    );
                case 13:
                    return (
                        null !== (t = 8 !== t.nodeType ? null : t) &&
                        ((n = null !== uo ? { id: so, overflow: co } : null),
                        (e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }),
                        ((n = Hs(18, null, null, 0)).stateNode = t),
                        (n.return = e),
                        (e.child = n),
                        (go = e),
                        (yo = null),
                        !0)
                    );
                default:
                    return !1;
            }
        }
        function wo(e) {
            return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function So(e) {
            if (vo) {
                var t = yo;
                if (t) {
                    var n = t;
                    if (!xo(e, t)) {
                        if (wo(e)) throw Error(v(418));
                        t = wl(n.nextSibling);
                        var r = go;
                        t && xo(e, t)
                            ? ko(r, n)
                            : ((e.flags = (-4097 & e.flags) | 2),
                              (vo = !1),
                              (go = e));
                    }
                } else {
                    if (wo(e)) throw Error(v(418));
                    (e.flags = (-4097 & e.flags) | 2), (vo = !1), (go = e);
                }
            }
        }
        function Eo(e) {
            for (
                e = e.return;
                null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

            )
                e = e.return;
            go = e;
        }
        function Co(e) {
            if (e !== go) return !1;
            if (!vo) return Eo(e), (vo = !0), !1;
            var t;
            if (
                ((t = 3 !== e.tag) &&
                    !(t = 5 !== e.tag) &&
                    (t =
                        "head" !== (t = e.type) &&
                        "body" !== t &&
                        !ml(e.type, e.memoizedProps)),
                t && (t = yo))
            ) {
                if (wo(e)) throw (Lo(), Error(v(418)));
                for (; t; ) ko(e, t), (t = wl(t.nextSibling));
            }
            if ((Eo(e), 13 === e.tag)) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                    throw Error(v(317));
                e: {
                    for (e = e.nextSibling, t = 0; e; ) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("/$" === n) {
                                if (0 === t) {
                                    yo = wl(e.nextSibling);
                                    break e;
                                }
                                t--;
                            } else
                                ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                        }
                        e = e.nextSibling;
                    }
                    yo = null;
                }
            } else yo = go ? wl(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Lo() {
            for (var e = yo; e; ) e = wl(e.nextSibling);
        }
        function To() {
            (yo = go = null), (vo = !1);
        }
        function No(e) {
            null === bo ? (bo = [e]) : bo.push(e);
        }
        var Po = A.ReactCurrentBatchConfig;
        function _o(e, t) {
            if (e && e.defaultProps) {
                for (var n in ((t = K({}, t)), (e = e.defaultProps)))
                    void 0 === t[n] && (t[n] = e[n]);
                return t;
            }
            return t;
        }
        var Do = Il(null),
            Fo = null,
            Ao = null,
            Ro = null;
        function zo() {
            Ro = Ao = Fo = null;
        }
        function Oo(e) {
            var t = Do.current;
            jl(Do), (e._currentValue = t);
        }
        function Io(e, t, n) {
            for (; null !== e; ) {
                var r = e.alternate;
                if (
                    ((e.childLanes & t) !== t
                        ? ((e.childLanes |= t),
                          null !== r && (r.childLanes |= t))
                        : null !== r &&
                          (r.childLanes & t) !== t &&
                          (r.childLanes |= t),
                    e === n)
                )
                    break;
                e = e.return;
            }
        }
        function jo(e, t) {
            (Fo = e),
                (Ro = Ao = null),
                null !== (e = e.dependencies) &&
                    null !== e.firstContext &&
                    (0 != (e.lanes & t) && (Ai = !0), (e.firstContext = null));
        }
        function Mo(e) {
            var t = e._currentValue;
            if (Ro !== e)
                if (
                    ((e = { context: e, memoizedValue: t, next: null }),
                    null === Ao)
                ) {
                    if (null === Fo) throw Error(v(308));
                    (Ao = e), (Fo.dependencies = { lanes: 0, firstContext: e });
                } else Ao = Ao.next = e;
            return t;
        }
        var Uo = null;
        function qo(e) {
            null === Uo ? (Uo = [e]) : Uo.push(e);
        }
        function Bo(e, t, n, r) {
            var l = t.interleaved;
            return (
                null === l
                    ? ((n.next = n), qo(t))
                    : ((n.next = l.next), (l.next = n)),
                (t.interleaved = n),
                Vo(e, r)
            );
        }
        function Vo(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (
                null !== n && (n.lanes |= t), n = e, e = e.return;
                null !== e;

            )
                (e.childLanes |= t),
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    (n = e),
                    (e = e.return);
            return 3 === n.tag ? n.stateNode : null;
        }
        var Ho = !1;
        function $o(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: { pending: null, interleaved: null, lanes: 0 },
                effects: null
            };
        }
        function Wo(e, t) {
            (e = e.updateQueue),
                t.updateQueue === e &&
                    (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    });
        }
        function Qo(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function Go(e, t, n) {
            var r = e.updateQueue;
            if (null === r) return null;
            if (((r = r.shared), 0 != (2 & qu))) {
                var l = r.pending;
                return (
                    null === l
                        ? (t.next = t)
                        : ((t.next = l.next), (l.next = t)),
                    (r.pending = t),
                    Vo(e, n)
                );
            }
            return (
                null === (l = r.interleaved)
                    ? ((t.next = t), qo(r))
                    : ((t.next = l.next), (l.next = t)),
                (r.interleaved = t),
                Vo(e, n)
            );
        }
        function Yo(e, t, n) {
            if (
                null !== (t = t.updateQueue) &&
                ((t = t.shared), 0 != (4194240 & n))
            ) {
                var r = t.lanes;
                (n |= r &= e.pendingLanes), (t.lanes = n), Dt(e, n);
            }
        }
        function Ko(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
                var l = null,
                    o = null;
                if (null !== (n = n.firstBaseUpdate)) {
                    do {
                        var a = {
                            eventTime: n.eventTime,
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: n.callback,
                            next: null
                        };
                        null === o ? (l = o = a) : (o = o.next = a),
                            (n = n.next);
                    } while (null !== n);
                    null === o ? (l = o = t) : (o = o.next = t);
                } else l = o = t;
                return (
                    (n = {
                        baseState: r.baseState,
                        firstBaseUpdate: l,
                        lastBaseUpdate: o,
                        shared: r.shared,
                        effects: r.effects
                    }),
                    void (e.updateQueue = n)
                );
            }
            null === (e = n.lastBaseUpdate)
                ? (n.firstBaseUpdate = t)
                : (e.next = t),
                (n.lastBaseUpdate = t);
        }
        function Xo(e, t, n, r) {
            var l = e.updateQueue;
            Ho = !1;
            var o = l.firstBaseUpdate,
                a = l.lastBaseUpdate,
                i = l.shared.pending;
            if (null !== i) {
                l.shared.pending = null;
                var u = i,
                    s = u.next;
                (u.next = null), null === a ? (o = s) : (a.next = s), (a = u);
                var c = e.alternate;
                null !== c &&
                    (i = (c = c.updateQueue).lastBaseUpdate) !== a &&
                    (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
                    (c.lastBaseUpdate = u));
            }
            if (null !== o) {
                var f = l.baseState;
                for (a = 0, c = s = u = null, i = o; ; ) {
                    var d = i.lane,
                        p = i.eventTime;
                    if ((r & d) === d) {
                        null !== c &&
                            (c = c.next =
                                {
                                    eventTime: p,
                                    lane: 0,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null
                                });
                        e: {
                            var h = e,
                                m = i;
                            switch (((d = t), (p = n), m.tag)) {
                                case 1:
                                    if ("function" == typeof (h = m.payload)) {
                                        f = h.call(p, f, d);
                                        break e;
                                    }
                                    f = h;
                                    break e;
                                case 3:
                                    h.flags = (-65537 & h.flags) | 128;
                                case 0:
                                    if (
                                        null ==
                                        (d =
                                            "function" == typeof (h = m.payload)
                                                ? h.call(p, f, d)
                                                : h)
                                    )
                                        break e;
                                    f = K({}, f, d);
                                    break e;
                                case 2:
                                    Ho = !0;
                            }
                        }
                        null !== i.callback &&
                            0 !== i.lane &&
                            ((e.flags |= 64),
                            null === (d = l.effects)
                                ? (l.effects = [i])
                                : d.push(i));
                    } else
                        (p = {
                            eventTime: p,
                            lane: d,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        }),
                            null === c
                                ? ((s = c = p), (u = f))
                                : (c = c.next = p),
                            (a |= d);
                    if (null === (i = i.next)) {
                        if (null === (i = l.shared.pending)) break;
                        (i = (d = i).next),
                            (d.next = null),
                            (l.lastBaseUpdate = d),
                            (l.shared.pending = null);
                    }
                }
                if (
                    (null === c && (u = f),
                    (l.baseState = u),
                    (l.firstBaseUpdate = s),
                    (l.lastBaseUpdate = c),
                    null !== (t = l.shared.interleaved))
                ) {
                    l = t;
                    do {
                        (a |= l.lane), (l = l.next);
                    } while (l !== t);
                } else null === o && (l.shared.lanes = 0);
                (Yu |= a), (e.lanes = a), (e.memoizedState = f);
            }
        }
        function Jo(e, t, n) {
            if (((e = t.effects), (t.effects = null), null !== e))
                for (t = 0; t < e.length; t++) {
                    var r = e[t],
                        l = r.callback;
                    if (null !== l) {
                        if (
                            ((r.callback = null),
                            (r = n),
                            "function" != typeof l)
                        )
                            throw Error(v(191, l));
                        l.call(r);
                    }
                }
        }
        var Zo = new g.Component().refs;
        function ea(e, t, n, r) {
            (n = null == (n = n(r, (t = e.memoizedState))) ? t : K({}, t, n)),
                (e.memoizedState = n),
                0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ta = {
            isMounted: function (e) {
                return !!(e = e._reactInternals) && tt(e) === e;
            },
            enqueueSetState: function (e, t, n) {
                e = e._reactInternals;
                var r = ps(),
                    l = hs(e),
                    o = Qo(r, l);
                (o.payload = t),
                    null != n && (o.callback = n),
                    null !== (t = Go(e, o, l)) && (ms(t, e, l, r), Yo(t, e, l));
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternals;
                var r = ps(),
                    l = hs(e),
                    o = Qo(r, l);
                (o.tag = 1),
                    (o.payload = t),
                    null != n && (o.callback = n),
                    null !== (t = Go(e, o, l)) && (ms(t, e, l, r), Yo(t, e, l));
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var n = ps(),
                    r = hs(e),
                    l = Qo(n, r);
                (l.tag = 2),
                    null != t && (l.callback = t),
                    null !== (t = Go(e, l, r)) && (ms(t, e, r, n), Yo(t, e, r));
            }
        };
        function na(e, t, n, r, l, o, a) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate
                ? e.shouldComponentUpdate(r, o, a)
                : !t.prototype ||
                      !t.prototype.isPureReactComponent ||
                      !xr(n, r) ||
                      !xr(l, o);
        }
        function ra(e, t, n) {
            var r = !1,
                l = Ul,
                o = t.contextType;
            return (
                "object" == typeof o && null !== o
                    ? (o = Mo(o))
                    : ((l = $l(t) ? Vl : ql.current),
                      (o = (r = null != (r = t.contextTypes)) ? Hl(e, l) : Ul)),
                (t = new t(n, o)),
                (e.memoizedState =
                    null !== t.state && void 0 !== t.state ? t.state : null),
                (t.updater = ta),
                (e.stateNode = t),
                (t._reactInternals = e),
                r &&
                    (((e =
                        e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                        l),
                    (e.__reactInternalMemoizedMaskedChildContext = o)),
                t
            );
        }
        function la(e, t, n, r) {
            (e = t.state),
                "function" == typeof t.componentWillReceiveProps &&
                    t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                    t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && ta.enqueueReplaceState(t, t.state, null);
        }
        function oa(e, t, n, r) {
            var l = e.stateNode;
            (l.props = n), (l.state = e.memoizedState), (l.refs = Zo), $o(e);
            var o = t.contextType;
            "object" == typeof o && null !== o
                ? (l.context = Mo(o))
                : ((o = $l(t) ? Vl : ql.current), (l.context = Hl(e, o))),
                (l.state = e.memoizedState),
                "function" == typeof (o = t.getDerivedStateFromProps) &&
                    (ea(e, t, o, n), (l.state = e.memoizedState)),
                "function" == typeof t.getDerivedStateFromProps ||
                    "function" == typeof l.getSnapshotBeforeUpdate ||
                    ("function" != typeof l.UNSAFE_componentWillMount &&
                        "function" != typeof l.componentWillMount) ||
                    ((t = l.state),
                    "function" == typeof l.componentWillMount &&
                        l.componentWillMount(),
                    "function" == typeof l.UNSAFE_componentWillMount &&
                        l.UNSAFE_componentWillMount(),
                    t !== l.state && ta.enqueueReplaceState(l, l.state, null),
                    Xo(e, n, l, r),
                    (l.state = e.memoizedState)),
                "function" == typeof l.componentDidMount &&
                    (e.flags |= 4194308);
        }
        function aa(e, t, n) {
            if (
                null !== (e = n.ref) &&
                "function" != typeof e &&
                "object" != typeof e
            ) {
                if (n._owner) {
                    if ((n = n._owner)) {
                        if (1 !== n.tag) throw Error(v(309));
                        var r = n.stateNode;
                    }
                    if (!r) throw Error(v(147, e));
                    var l = r,
                        o = "" + e;
                    return null !== t &&
                        null !== t.ref &&
                        "function" == typeof t.ref &&
                        t.ref._stringRef === o
                        ? t.ref
                        : ((t = function (e) {
                              var t = l.refs;
                              t === Zo && (t = l.refs = {}),
                                  null === e ? delete t[o] : (t[o] = e);
                          }),
                          (t._stringRef = o),
                          t);
                }
                if ("string" != typeof e) throw Error(v(284));
                if (!n._owner) throw Error(v(290, e));
            }
            return e;
        }
        function ia(e, t) {
            throw (
                ((e = Object.prototype.toString.call(t)),
                Error(
                    v(
                        31,
                        "[object Object]" === e
                            ? "object with keys {" +
                                  Object.keys(t).join(", ") +
                                  "}"
                            : e
                    )
                ))
            );
        }
        function ua(e) {
            return (0, e._init)(e._payload);
        }
        function sa(e) {
            function t(t, n) {
                if (e) {
                    var r = t.deletions;
                    null === r
                        ? ((t.deletions = [n]), (t.flags |= 16))
                        : r.push(n);
                }
            }
            function n(n, r) {
                if (!e) return null;
                for (; null !== r; ) t(n, r), (r = r.sibling);
                return null;
            }
            function r(e, t) {
                for (e = new Map(); null !== t; )
                    null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        (t = t.sibling);
                return e;
            }
            function l(e, t) {
                return ((e = Ws(e, t)).index = 0), (e.sibling = null), e;
            }
            function o(t, n, r) {
                return (
                    (t.index = r),
                    e
                        ? null !== (r = t.alternate)
                            ? (r = r.index) < n
                                ? ((t.flags |= 2), n)
                                : r
                            : ((t.flags |= 2), n)
                        : ((t.flags |= 1048576), n)
                );
            }
            function a(t) {
                return e && null === t.alternate && (t.flags |= 2), t;
            }
            function i(e, t, n, r) {
                return null === t || 6 !== t.tag
                    ? (((t = Ks(n, e.mode, r)).return = e), t)
                    : (((t = l(t, n)).return = e), t);
            }
            function u(e, t, n, r) {
                var o = n.type;
                return o === O
                    ? c(e, t, n.props.children, r, n.key)
                    : null !== t &&
                      (t.elementType === o ||
                          ("object" == typeof o &&
                              null !== o &&
                              o.$$typeof === $ &&
                              ua(o) === t.type))
                    ? (((r = l(t, n.props)).ref = aa(e, t, n)),
                      (r.return = e),
                      r)
                    : (((r = Qs(n.type, n.key, n.props, null, e.mode, r)).ref =
                          aa(e, t, n)),
                      (r.return = e),
                      r);
            }
            function s(e, t, n, r) {
                return null === t ||
                    4 !== t.tag ||
                    t.stateNode.containerInfo !== n.containerInfo ||
                    t.stateNode.implementation !== n.implementation
                    ? (((t = Xs(n, e.mode, r)).return = e), t)
                    : (((t = l(t, n.children || [])).return = e), t);
            }
            function c(e, t, n, r, o) {
                return null === t || 7 !== t.tag
                    ? (((t = Gs(n, e.mode, r, o)).return = e), t)
                    : (((t = l(t, n)).return = e), t);
            }
            function f(e, t, n) {
                if (("string" == typeof t && "" !== t) || "number" == typeof t)
                    return ((t = Ks("" + t, e.mode, n)).return = e), t;
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case R:
                            return (
                                ((n = Qs(
                                    t.type,
                                    t.key,
                                    t.props,
                                    null,
                                    e.mode,
                                    n
                                )).ref = aa(e, null, t)),
                                (n.return = e),
                                n
                            );
                        case z:
                            return ((t = Xs(t, e.mode, n)).return = e), t;
                        case $:
                            return f(e, (0, t._init)(t._payload), n);
                    }
                    if (he(t) || G(t))
                        return ((t = Gs(t, e.mode, n, null)).return = e), t;
                    ia(e, t);
                }
                return null;
            }
            function d(e, t, n, r) {
                var l = null !== t ? t.key : null;
                if (("string" == typeof n && "" !== n) || "number" == typeof n)
                    return null !== l ? null : i(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case R:
                            return n.key === l ? u(e, t, n, r) : null;
                        case z:
                            return n.key === l ? s(e, t, n, r) : null;
                        case $:
                            return d(e, t, (l = n._init)(n._payload), r);
                    }
                    if (he(n) || G(n))
                        return null !== l ? null : c(e, t, n, r, null);
                    ia(e, n);
                }
                return null;
            }
            function p(e, t, n, r, l) {
                if (("string" == typeof r && "" !== r) || "number" == typeof r)
                    return i(t, (e = e.get(n) || null), "" + r, l);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case R:
                            return u(
                                t,
                                (e = e.get(null === r.key ? n : r.key) || null),
                                r,
                                l
                            );
                        case z:
                            return s(
                                t,
                                (e = e.get(null === r.key ? n : r.key) || null),
                                r,
                                l
                            );
                        case $:
                            return p(e, t, n, (0, r._init)(r._payload), l);
                    }
                    if (he(r) || G(r))
                        return c(t, (e = e.get(n) || null), r, l, null);
                    ia(t, r);
                }
                return null;
            }
            function h(l, a, i, u) {
                for (
                    var s = null, c = null, h = a, m = (a = 0), g = null;
                    null !== h && m < i.length;
                    m++
                ) {
                    h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                    var y = d(l, h, i[m], u);
                    if (null === y) {
                        null === h && (h = g);
                        break;
                    }
                    e && h && null === y.alternate && t(l, h),
                        (a = o(y, a, m)),
                        null === c ? (s = y) : (c.sibling = y),
                        (c = y),
                        (h = g);
                }
                if (m === i.length) return n(l, h), vo && fo(l, m), s;
                if (null === h) {
                    for (; m < i.length; m++)
                        null !== (h = f(l, i[m], u)) &&
                            ((a = o(h, a, m)),
                            null === c ? (s = h) : (c.sibling = h),
                            (c = h));
                    return vo && fo(l, m), s;
                }
                for (h = r(l, h); m < i.length; m++)
                    null !== (g = p(h, l, m, i[m], u)) &&
                        (e &&
                            null !== g.alternate &&
                            h.delete(null === g.key ? m : g.key),
                        (a = o(g, a, m)),
                        null === c ? (s = g) : (c.sibling = g),
                        (c = g));
                return (
                    e &&
                        h.forEach(function (e) {
                            return t(l, e);
                        }),
                    vo && fo(l, m),
                    s
                );
            }
            function m(l, a, i, u) {
                var s = G(i);
                if ("function" != typeof s) throw Error(v(150));
                if (null == (i = s.call(i))) throw Error(v(151));
                for (
                    var c = (s = null),
                        h = a,
                        m = (a = 0),
                        g = null,
                        y = i.next();
                    null !== h && !y.done;
                    m++, y = i.next()
                ) {
                    h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                    var b = d(l, h, y.value, u);
                    if (null === b) {
                        null === h && (h = g);
                        break;
                    }
                    e && h && null === b.alternate && t(l, h),
                        (a = o(b, a, m)),
                        null === c ? (s = b) : (c.sibling = b),
                        (c = b),
                        (h = g);
                }
                if (y.done) return n(l, h), vo && fo(l, m), s;
                if (null === h) {
                    for (; !y.done; m++, y = i.next())
                        null !== (y = f(l, y.value, u)) &&
                            ((a = o(y, a, m)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y));
                    return vo && fo(l, m), s;
                }
                for (h = r(l, h); !y.done; m++, y = i.next())
                    null !== (y = p(h, l, m, y.value, u)) &&
                        (e &&
                            null !== y.alternate &&
                            h.delete(null === y.key ? m : y.key),
                        (a = o(y, a, m)),
                        null === c ? (s = y) : (c.sibling = y),
                        (c = y));
                return (
                    e &&
                        h.forEach(function (e) {
                            return t(l, e);
                        }),
                    vo && fo(l, m),
                    s
                );
            }
            return function e(r, o, i, u) {
                if (
                    ("object" == typeof i &&
                        null !== i &&
                        i.type === O &&
                        null === i.key &&
                        (i = i.props.children),
                    "object" == typeof i && null !== i)
                ) {
                    switch (i.$$typeof) {
                        case R:
                            e: {
                                for (var s = i.key, c = o; null !== c; ) {
                                    if (c.key === s) {
                                        if ((s = i.type) === O) {
                                            if (7 === c.tag) {
                                                n(r, c.sibling),
                                                    ((o = l(
                                                        c,
                                                        i.props.children
                                                    )).return = r),
                                                    (r = o);
                                                break e;
                                            }
                                        } else if (
                                            c.elementType === s ||
                                            ("object" == typeof s &&
                                                null !== s &&
                                                s.$$typeof === $ &&
                                                ua(s) === c.type)
                                        ) {
                                            n(r, c.sibling),
                                                ((o = l(c, i.props)).ref = aa(
                                                    r,
                                                    c,
                                                    i
                                                )),
                                                (o.return = r),
                                                (r = o);
                                            break e;
                                        }
                                        n(r, c);
                                        break;
                                    }
                                    t(r, c), (c = c.sibling);
                                }
                                i.type === O
                                    ? (((o = Gs(
                                          i.props.children,
                                          r.mode,
                                          u,
                                          i.key
                                      )).return = r),
                                      (r = o))
                                    : (((u = Qs(
                                          i.type,
                                          i.key,
                                          i.props,
                                          null,
                                          r.mode,
                                          u
                                      )).ref = aa(r, o, i)),
                                      (u.return = r),
                                      (r = u));
                            }
                            return a(r);
                        case z:
                            e: {
                                for (c = i.key; null !== o; ) {
                                    if (o.key === c) {
                                        if (
                                            4 === o.tag &&
                                            o.stateNode.containerInfo ===
                                                i.containerInfo &&
                                            o.stateNode.implementation ===
                                                i.implementation
                                        ) {
                                            n(r, o.sibling),
                                                ((o = l(
                                                    o,
                                                    i.children || []
                                                )).return = r),
                                                (r = o);
                                            break e;
                                        }
                                        n(r, o);
                                        break;
                                    }
                                    t(r, o), (o = o.sibling);
                                }
                                ((o = Xs(i, r.mode, u)).return = r), (r = o);
                            }
                            return a(r);
                        case $:
                            return e(r, o, (c = i._init)(i._payload), u);
                    }
                    if (he(i)) return h(r, o, i, u);
                    if (G(i)) return m(r, o, i, u);
                    ia(r, i);
                }
                return ("string" == typeof i && "" !== i) ||
                    "number" == typeof i
                    ? ((i = "" + i),
                      null !== o && 6 === o.tag
                          ? (n(r, o.sibling),
                            ((o = l(o, i)).return = r),
                            (r = o))
                          : (n(r, o),
                            ((o = Ks(i, r.mode, u)).return = r),
                            (r = o)),
                      a(r))
                    : n(r, o);
            };
        }
        var ca = sa(!0),
            fa = sa(!1),
            da = {},
            pa = Il(da),
            ha = Il(da),
            ma = Il(da);
        function ga(e) {
            if (e === da) throw Error(v(174));
            return e;
        }
        function ya(e, t) {
            switch ((Ml(ma, t), Ml(ha, e), Ml(pa, da), (e = t.nodeType))) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : xe(null, "");
                    break;
                default:
                    t = xe(
                        (t =
                            (e = 8 === e ? t.parentNode : t).namespaceURI ||
                            null),
                        (e = e.tagName)
                    );
            }
            jl(pa), Ml(pa, t);
        }
        function va() {
            jl(pa), jl(ha), jl(ma);
        }
        function ba(e) {
            ga(ma.current);
            var t = ga(pa.current),
                n = xe(t, e.type);
            t !== n && (Ml(ha, e), Ml(pa, n));
        }
        function ka(e) {
            ha.current === e && (jl(pa), jl(ha));
        }
        var xa = Il(0);
        function wa(e) {
            for (var t = e; null !== t; ) {
                if (13 === t.tag) {
                    var n = t.memoizedState;
                    if (
                        null !== n &&
                        (null === (n = n.dehydrated) ||
                            "$?" === n.data ||
                            "$!" === n.data)
                    )
                        return t;
                } else if (
                    19 === t.tag &&
                    void 0 !== t.memoizedProps.revealOrder
                ) {
                    if (0 != (128 & t.flags)) return t;
                } else if (null !== t.child) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return null;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
            return null;
        }
        var Sa = [];
        function Ea() {
            for (var e = 0; e < Sa.length; e++)
                Sa[e]._workInProgressVersionPrimary = null;
            Sa.length = 0;
        }
        var Ca = A.ReactCurrentDispatcher,
            La = A.ReactCurrentBatchConfig,
            Ta = 0,
            Na = null,
            Pa = null,
            _a = null,
            Da = !1,
            Fa = !1,
            Aa = 0,
            Ra = 0;
        function za() {
            throw Error(v(321));
        }
        function Oa(e, t) {
            if (null === t) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!kr(e[n], t[n])) return !1;
            return !0;
        }
        function Ia(e, t, n, r, l, o) {
            if (
                ((Ta = o),
                (Na = t),
                (t.memoizedState = null),
                (t.updateQueue = null),
                (t.lanes = 0),
                (Ca.current = null === e || null === e.memoizedState ? ki : xi),
                (e = n(r, l)),
                Fa)
            ) {
                o = 0;
                do {
                    if (((Fa = !1), (Aa = 0), 25 <= o)) throw Error(v(301));
                    (o += 1),
                        (_a = Pa = null),
                        (t.updateQueue = null),
                        (Ca.current = wi),
                        (e = n(r, l));
                } while (Fa);
            }
            if (
                ((Ca.current = bi),
                (t = null !== Pa && null !== Pa.next),
                (Ta = 0),
                (_a = Pa = Na = null),
                (Da = !1),
                t)
            )
                throw Error(v(300));
            return e;
        }
        function ja() {
            var e = 0 !== Aa;
            return (Aa = 0), e;
        }
        function Ma() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return (
                null === _a ? (Na.memoizedState = _a = e) : (_a = _a.next = e),
                _a
            );
        }
        function Ua() {
            if (null === Pa) {
                var e = Na.alternate;
                e = null !== e ? e.memoizedState : null;
            } else e = Pa.next;
            var t = null === _a ? Na.memoizedState : _a.next;
            if (null !== t) (_a = t), (Pa = e);
            else {
                if (null === e) throw Error(v(310));
                (e = {
                    memoizedState: (Pa = e).memoizedState,
                    baseState: Pa.baseState,
                    baseQueue: Pa.baseQueue,
                    queue: Pa.queue,
                    next: null
                }),
                    null === _a
                        ? (Na.memoizedState = _a = e)
                        : (_a = _a.next = e);
            }
            return _a;
        }
        function qa(e, t) {
            return "function" == typeof t ? t(e) : t;
        }
        function Ba(e) {
            var t = Ua(),
                n = t.queue;
            if (null === n) throw Error(v(311));
            n.lastRenderedReducer = e;
            var r = Pa,
                l = r.baseQueue,
                o = n.pending;
            if (null !== o) {
                if (null !== l) {
                    var a = l.next;
                    (l.next = o.next), (o.next = a);
                }
                (r.baseQueue = l = o), (n.pending = null);
            }
            if (null !== l) {
                (o = l.next), (r = r.baseState);
                var i = (a = null),
                    u = null,
                    s = o;
                do {
                    var c = s.lane;
                    if ((Ta & c) === c)
                        null !== u &&
                            (u = u.next =
                                {
                                    lane: 0,
                                    action: s.action,
                                    hasEagerState: s.hasEagerState,
                                    eagerState: s.eagerState,
                                    next: null
                                }),
                            (r = s.hasEagerState
                                ? s.eagerState
                                : e(r, s.action));
                    else {
                        var f = {
                            lane: c,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null
                        };
                        null === u ? ((i = u = f), (a = r)) : (u = u.next = f),
                            (Na.lanes |= c),
                            (Yu |= c);
                    }
                    s = s.next;
                } while (null !== s && s !== o);
                null === u ? (a = r) : (u.next = i),
                    kr(r, t.memoizedState) || (Ai = !0),
                    (t.memoizedState = r),
                    (t.baseState = a),
                    (t.baseQueue = u),
                    (n.lastRenderedState = r);
            }
            if (null !== (e = n.interleaved)) {
                l = e;
                do {
                    (o = l.lane), (Na.lanes |= o), (Yu |= o), (l = l.next);
                } while (l !== e);
            } else null === l && (n.lanes = 0);
            return [t.memoizedState, n.dispatch];
        }
        function Va(e) {
            var t = Ua(),
                n = t.queue;
            if (null === n) throw Error(v(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
                l = n.pending,
                o = t.memoizedState;
            if (null !== l) {
                n.pending = null;
                var a = (l = l.next);
                do {
                    (o = e(o, a.action)), (a = a.next);
                } while (a !== l);
                kr(o, t.memoizedState) || (Ai = !0),
                    (t.memoizedState = o),
                    null === t.baseQueue && (t.baseState = o),
                    (n.lastRenderedState = o);
            }
            return [o, r];
        }
        function Ha() {}
        function $a(e, t) {
            var n = Na,
                r = Ua(),
                l = t(),
                o = !kr(r.memoizedState, l);
            if (
                (o && ((r.memoizedState = l), (Ai = !0)),
                (r = r.queue),
                ri(Ga.bind(null, n, r, e), [e]),
                r.getSnapshot !== t ||
                    o ||
                    (null !== _a && 1 & _a.memoizedState.tag))
            ) {
                if (
                    ((n.flags |= 2048),
                    Ja(9, Qa.bind(null, n, r, l, t), void 0, null),
                    null === Bu)
                )
                    throw Error(v(349));
                0 != (30 & Ta) || Wa(n, t, l);
            }
            return l;
        }
        function Wa(e, t, n) {
            (e.flags |= 16384),
                (e = { getSnapshot: t, value: n }),
                null === (t = Na.updateQueue)
                    ? ((t = { lastEffect: null, stores: null }),
                      (Na.updateQueue = t),
                      (t.stores = [e]))
                    : null === (n = t.stores)
                    ? (t.stores = [e])
                    : n.push(e);
        }
        function Qa(e, t, n, r) {
            (t.value = n), (t.getSnapshot = r), Ya(t) && Ka(e);
        }
        function Ga(e, t, n) {
            return n(function () {
                Ya(t) && Ka(e);
            });
        }
        function Ya(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !kr(e, n);
            } catch (e) {
                return !0;
            }
        }
        function Ka(e) {
            var t = Vo(e, 1);
            null !== t && ms(t, e, 1, -1);
        }
        function Xa(e) {
            var t = Ma();
            return (
                "function" == typeof e && (e = e()),
                (t.memoizedState = t.baseState = e),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: qa,
                    lastRenderedState: e
                }),
                (t.queue = e),
                (e = e.dispatch = mi.bind(null, Na, e)),
                [t.memoizedState, e]
            );
        }
        function Ja(e, t, n, r) {
            return (
                (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                null === (t = Na.updateQueue)
                    ? ((t = { lastEffect: null, stores: null }),
                      (Na.updateQueue = t),
                      (t.lastEffect = e.next = e))
                    : null === (n = t.lastEffect)
                    ? (t.lastEffect = e.next = e)
                    : ((r = n.next),
                      (n.next = e),
                      (e.next = r),
                      (t.lastEffect = e)),
                e
            );
        }
        function Za() {
            return Ua().memoizedState;
        }
        function ei(e, t, n, r) {
            var l = Ma();
            (Na.flags |= e),
                (l.memoizedState = Ja(
                    1 | t,
                    n,
                    void 0,
                    void 0 === r ? null : r
                ));
        }
        function ti(e, t, n, r) {
            var l = Ua();
            r = void 0 === r ? null : r;
            var o = void 0;
            if (null !== Pa) {
                var a = Pa.memoizedState;
                if (((o = a.destroy), null !== r && Oa(r, a.deps)))
                    return void (l.memoizedState = Ja(t, n, o, r));
            }
            (Na.flags |= e), (l.memoizedState = Ja(1 | t, n, o, r));
        }
        function ni(e, t) {
            return ei(8390656, 8, e, t);
        }
        function ri(e, t) {
            return ti(2048, 8, e, t);
        }
        function li(e, t) {
            return ti(4, 2, e, t);
        }
        function oi(e, t) {
            return ti(4, 4, e, t);
        }
        function ai(e, t) {
            return "function" == typeof t
                ? ((e = e()),
                  t(e),
                  function () {
                      t(null);
                  })
                : null != t
                ? ((e = e()),
                  (t.current = e),
                  function () {
                      t.current = null;
                  })
                : void 0;
        }
        function ii(e, t, n) {
            return (
                (n = null != n ? n.concat([e]) : null),
                ti(4, 4, ai.bind(null, t, e), n)
            );
        }
        function ui() {}
        function si(e, t) {
            var n = Ua();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Oa(t, r[1])
                ? r[0]
                : ((n.memoizedState = [e, t]), e);
        }
        function ci(e, t) {
            var n = Ua();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Oa(t, r[1])
                ? r[0]
                : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function fi(e, t, n) {
            return 0 == (21 & Ta)
                ? (e.baseState && ((e.baseState = !1), (Ai = !0)),
                  (e.memoizedState = n))
                : (kr(n, t) ||
                      ((n = Nt()),
                      (Na.lanes |= n),
                      (Yu |= n),
                      (e.baseState = !0)),
                  t);
        }
        function di(e, t) {
            var n = Ft;
            (Ft = 0 !== n && 4 > n ? n : 4), e(!0);
            var r = La.transition;
            La.transition = {};
            try {
                e(!1), t();
            } finally {
                (Ft = n), (La.transition = r);
            }
        }
        function pi() {
            return Ua().memoizedState;
        }
        function hi(e, t, n) {
            var r = hs(e);
            if (
                ((n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }),
                gi(e))
            )
                yi(t, n);
            else if (null !== (n = Bo(e, t, n, r))) {
                ms(n, e, r, ps()), vi(n, t, r);
            }
        }
        function mi(e, t, n) {
            var r = hs(e),
                l = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (gi(e)) yi(t, l);
            else {
                var o = e.alternate;
                if (
                    0 === e.lanes &&
                    (null === o || 0 === o.lanes) &&
                    null !== (o = t.lastRenderedReducer)
                )
                    try {
                        var a = t.lastRenderedState,
                            i = o(a, n);
                        if (
                            ((l.hasEagerState = !0),
                            (l.eagerState = i),
                            kr(i, a))
                        ) {
                            var u = t.interleaved;
                            return (
                                null === u
                                    ? ((l.next = l), qo(t))
                                    : ((l.next = u.next), (u.next = l)),
                                void (t.interleaved = l)
                            );
                        }
                    } catch (e) {}
                null !== (n = Bo(e, t, l, r)) &&
                    (ms(n, e, r, (l = ps())), vi(n, t, r));
            }
        }
        function gi(e) {
            var t = e.alternate;
            return e === Na || (null !== t && t === Na);
        }
        function yi(e, t) {
            Fa = Da = !0;
            var n = e.pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
                (e.pending = t);
        }
        function vi(e, t, n) {
            if (0 != (4194240 & n)) {
                var r = t.lanes;
                (n |= r &= e.pendingLanes), (t.lanes = n), Dt(e, n);
            }
        }
        var bi = {
                readContext: Mo,
                useCallback: za,
                useContext: za,
                useEffect: za,
                useImperativeHandle: za,
                useInsertionEffect: za,
                useLayoutEffect: za,
                useMemo: za,
                useReducer: za,
                useRef: za,
                useState: za,
                useDebugValue: za,
                useDeferredValue: za,
                useTransition: za,
                useMutableSource: za,
                useSyncExternalStore: za,
                useId: za,
                unstable_isNewReconciler: !1
            },
            ki = {
                readContext: Mo,
                useCallback: function (e, t) {
                    return (
                        (Ma().memoizedState = [e, void 0 === t ? null : t]), e
                    );
                },
                useContext: Mo,
                useEffect: ni,
                useImperativeHandle: function (e, t, n) {
                    return (
                        (n = null != n ? n.concat([e]) : null),
                        ei(4194308, 4, ai.bind(null, t, e), n)
                    );
                },
                useLayoutEffect: function (e, t) {
                    return ei(4194308, 4, e, t);
                },
                useInsertionEffect: function (e, t) {
                    return ei(4, 2, e, t);
                },
                useMemo: function (e, t) {
                    var n = Ma();
                    return (
                        (t = void 0 === t ? null : t),
                        (e = e()),
                        (n.memoizedState = [e, t]),
                        e
                    );
                },
                useReducer: function (e, t, n) {
                    var r = Ma();
                    return (
                        (t = void 0 !== n ? n(t) : t),
                        (r.memoizedState = r.baseState = t),
                        (e = {
                            pending: null,
                            interleaved: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }),
                        (r.queue = e),
                        (e = e.dispatch = hi.bind(null, Na, e)),
                        [r.memoizedState, e]
                    );
                },
                useRef: function (e) {
                    return (e = { current: e }), (Ma().memoizedState = e);
                },
                useState: Xa,
                useDebugValue: ui,
                useDeferredValue: function (e) {
                    return (Ma().memoizedState = e);
                },
                useTransition: function () {
                    var e = Xa(!1),
                        t = e[0];
                    return (
                        (e = di.bind(null, e[1])),
                        (Ma().memoizedState = e),
                        [t, e]
                    );
                },
                useMutableSource: function () {},
                useSyncExternalStore: function (e, t, n) {
                    var r = Na,
                        l = Ma();
                    if (vo) {
                        if (void 0 === n) throw Error(v(407));
                        n = n();
                    } else {
                        if (((n = t()), null === Bu)) throw Error(v(349));
                        0 != (30 & Ta) || Wa(r, t, n);
                    }
                    l.memoizedState = n;
                    var o = { value: n, getSnapshot: t };
                    return (
                        (l.queue = o),
                        ni(Ga.bind(null, r, o, e), [e]),
                        (r.flags |= 2048),
                        Ja(9, Qa.bind(null, r, o, n, t), void 0, null),
                        n
                    );
                },
                useId: function () {
                    var e = Ma(),
                        t = Bu.identifierPrefix;
                    if (vo) {
                        var n = co;
                        (t =
                            ":" +
                            t +
                            "R" +
                            (n =
                                (so & ~(1 << (32 - bt(so) - 1))).toString(32) +
                                n)),
                            0 < (n = Aa++) && (t += "H" + n.toString(32)),
                            (t += ":");
                    } else t = ":" + t + "r" + (n = Ra++).toString(32) + ":";
                    return (e.memoizedState = t);
                },
                unstable_isNewReconciler: !1
            },
            xi = {
                readContext: Mo,
                useCallback: si,
                useContext: Mo,
                useEffect: ri,
                useImperativeHandle: ii,
                useInsertionEffect: li,
                useLayoutEffect: oi,
                useMemo: ci,
                useReducer: Ba,
                useRef: Za,
                useState: function () {
                    return Ba(qa);
                },
                useDebugValue: ui,
                useDeferredValue: function (e) {
                    return fi(Ua(), Pa.memoizedState, e);
                },
                useTransition: function () {
                    return [Ba(qa)[0], Ua().memoizedState];
                },
                useMutableSource: Ha,
                useSyncExternalStore: $a,
                useId: pi,
                unstable_isNewReconciler: !1
            },
            wi = {
                readContext: Mo,
                useCallback: si,
                useContext: Mo,
                useEffect: ri,
                useImperativeHandle: ii,
                useInsertionEffect: li,
                useLayoutEffect: oi,
                useMemo: ci,
                useReducer: Va,
                useRef: Za,
                useState: function () {
                    return Va(qa);
                },
                useDebugValue: ui,
                useDeferredValue: function (e) {
                    var t = Ua();
                    return null === Pa
                        ? (t.memoizedState = e)
                        : fi(t, Pa.memoizedState, e);
                },
                useTransition: function () {
                    return [Va(qa)[0], Ua().memoizedState];
                },
                useMutableSource: Ha,
                useSyncExternalStore: $a,
                useId: pi,
                unstable_isNewReconciler: !1
            };
        function Si(e, t) {
            try {
                var n = "",
                    r = t;
                do {
                    (n += ee(r)), (r = r.return);
                } while (r);
                var l = n;
            } catch (e) {
                l = "\nError generating stack: " + e.message + "\n" + e.stack;
            }
            return { value: e, source: t, stack: l, digest: null };
        }
        function Ei(e, t, n) {
            return {
                value: e,
                source: null,
                stack: null != n ? n : null,
                digest: null != t ? t : null
            };
        }
        function Ci(e, t) {
            try {
                console.error(t.value);
            } catch (e) {
                setTimeout(function () {
                    throw e;
                });
            }
        }
        var Li = "function" == typeof WeakMap ? WeakMap : Map;
        function Ti(e, t, n) {
            ((n = Qo(-1, n)).tag = 3), (n.payload = { element: null });
            var r = t.value;
            return (
                (n.callback = function () {
                    rs || ((rs = !0), (ls = r)), Ci(0, t);
                }),
                n
            );
        }
        function Ni(e, t, n) {
            (n = Qo(-1, n)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" == typeof r) {
                var l = t.value;
                (n.payload = function () {
                    return r(l);
                }),
                    (n.callback = function () {
                        Ci(0, t);
                    });
            }
            var o = e.stateNode;
            return (
                null !== o &&
                    "function" == typeof o.componentDidCatch &&
                    (n.callback = function () {
                        Ci(0, t),
                            "function" != typeof r &&
                                (null === os
                                    ? (os = new Set([this]))
                                    : os.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        });
                    }),
                n
            );
        }
        function Pi(e, t, n) {
            var r = e.pingCache;
            if (null === r) {
                r = e.pingCache = new Li();
                var l = new Set();
                r.set(t, l);
            } else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
            l.has(n) || (l.add(n), (e = js.bind(null, e, t, n)), t.then(e, e));
        }
        function _i(e) {
            do {
                var t;
                if (
                    ((t = 13 === e.tag) &&
                        (t =
                            null === (t = e.memoizedState) ||
                            null !== t.dehydrated),
                    t)
                )
                    return e;
                e = e.return;
            } while (null !== e);
            return null;
        }
        function Di(e, t, n, r, l) {
            return 0 == (1 & e.mode)
                ? (e === t
                      ? (e.flags |= 65536)
                      : ((e.flags |= 128),
                        (n.flags |= 131072),
                        (n.flags &= -52805),
                        1 === n.tag &&
                            (null === n.alternate
                                ? (n.tag = 17)
                                : (((t = Qo(-1, 1)).tag = 2), Go(n, t, 1))),
                        (n.lanes |= 1)),
                  e)
                : ((e.flags |= 65536), (e.lanes = l), e);
        }
        var Fi = A.ReactCurrentOwner,
            Ai = !1;
        function Ri(e, t, n, r) {
            t.child = null === e ? fa(t, null, n, r) : ca(t, e.child, n, r);
        }
        function zi(e, t, n, r, l) {
            n = n.render;
            var o = t.ref;
            return (
                jo(t, l),
                (r = Ia(e, t, n, r, o, l)),
                (n = ja()),
                null === e || Ai
                    ? (vo && n && ho(t),
                      (t.flags |= 1),
                      Ri(e, t, r, l),
                      t.child)
                    : ((t.updateQueue = e.updateQueue),
                      (t.flags &= -2053),
                      (e.lanes &= ~l),
                      ru(e, t, l))
            );
        }
        function Oi(e, t, n, r, l) {
            if (null === e) {
                var o = n.type;
                return "function" != typeof o ||
                    $s(o) ||
                    void 0 !== o.defaultProps ||
                    null !== n.compare ||
                    void 0 !== n.defaultProps
                    ? (((e = Qs(n.type, null, r, t, t.mode, l)).ref = t.ref),
                      (e.return = t),
                      (t.child = e))
                    : ((t.tag = 15), (t.type = o), Ii(e, t, o, r, l));
            }
            if (((o = e.child), 0 == (e.lanes & l))) {
                var a = o.memoizedProps;
                if (
                    (n = null !== (n = n.compare) ? n : xr)(a, r) &&
                    e.ref === t.ref
                )
                    return ru(e, t, l);
            }
            return (
                (t.flags |= 1),
                ((e = Ws(o, r)).ref = t.ref),
                (e.return = t),
                (t.child = e)
            );
        }
        function Ii(e, t, n, r, l) {
            if (null !== e) {
                var o = e.memoizedProps;
                if (xr(o, r) && e.ref === t.ref) {
                    if (
                        ((Ai = !1),
                        (t.pendingProps = r = o),
                        0 == (e.lanes & l))
                    )
                        return (t.lanes = e.lanes), ru(e, t, l);
                    0 != (131072 & e.flags) && (Ai = !0);
                }
            }
            return Ui(e, t, n, r, l);
        }
        function ji(e, t, n) {
            var r = t.pendingProps,
                l = r.children,
                o = null !== e ? e.memoizedState : null;
            if ("hidden" === r.mode)
                if (0 == (1 & t.mode))
                    (t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }),
                        Ml(Wu, $u),
                        ($u |= n);
                else {
                    if (0 == (1073741824 & n))
                        return (
                            (e = null !== o ? o.baseLanes | n : n),
                            (t.lanes = t.childLanes = 1073741824),
                            (t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }),
                            (t.updateQueue = null),
                            Ml(Wu, $u),
                            ($u |= e),
                            null
                        );
                    (t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }),
                        (r = null !== o ? o.baseLanes : n),
                        Ml(Wu, $u),
                        ($u |= r);
                }
            else
                null !== o
                    ? ((r = o.baseLanes | n), (t.memoizedState = null))
                    : (r = n),
                    Ml(Wu, $u),
                    ($u |= r);
            return Ri(e, t, l, n), t.child;
        }
        function Mi(e, t) {
            var n = t.ref;
            ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
                ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ui(e, t, n, r, l) {
            var o = $l(n) ? Vl : ql.current;
            return (
                (o = Hl(t, o)),
                jo(t, l),
                (n = Ia(e, t, n, r, o, l)),
                (r = ja()),
                null === e || Ai
                    ? (vo && r && ho(t),
                      (t.flags |= 1),
                      Ri(e, t, n, l),
                      t.child)
                    : ((t.updateQueue = e.updateQueue),
                      (t.flags &= -2053),
                      (e.lanes &= ~l),
                      ru(e, t, l))
            );
        }
        function qi(e, t, n, r, l) {
            if ($l(n)) {
                var o = !0;
                Yl(t);
            } else o = !1;
            if ((jo(t, l), null === t.stateNode))
                nu(e, t), ra(t, n, r), oa(t, n, r, l), (r = !0);
            else if (null === e) {
                var a = t.stateNode,
                    i = t.memoizedProps;
                a.props = i;
                var u = a.context,
                    s = n.contextType;
                "object" == typeof s && null !== s
                    ? (s = Mo(s))
                    : (s = Hl(t, (s = $l(n) ? Vl : ql.current)));
                var c = n.getDerivedStateFromProps,
                    f =
                        "function" == typeof c ||
                        "function" == typeof a.getSnapshotBeforeUpdate;
                f ||
                    ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                        "function" != typeof a.componentWillReceiveProps) ||
                    ((i !== r || u !== s) && la(t, a, r, s)),
                    (Ho = !1);
                var d = t.memoizedState;
                (a.state = d),
                    Xo(t, r, a, l),
                    (u = t.memoizedState),
                    i !== r || d !== u || Bl.current || Ho
                        ? ("function" == typeof c &&
                              (ea(t, n, c, r), (u = t.memoizedState)),
                          (i = Ho || na(t, n, i, r, d, u, s))
                              ? (f ||
                                    ("function" !=
                                        typeof a.UNSAFE_componentWillMount &&
                                        "function" !=
                                            typeof a.componentWillMount) ||
                                    ("function" ==
                                        typeof a.componentWillMount &&
                                        a.componentWillMount(),
                                    "function" ==
                                        typeof a.UNSAFE_componentWillMount &&
                                        a.UNSAFE_componentWillMount()),
                                "function" == typeof a.componentDidMount &&
                                    (t.flags |= 4194308))
                              : ("function" == typeof a.componentDidMount &&
                                    (t.flags |= 4194308),
                                (t.memoizedProps = r),
                                (t.memoizedState = u)),
                          (a.props = r),
                          (a.state = u),
                          (a.context = s),
                          (r = i))
                        : ("function" == typeof a.componentDidMount &&
                              (t.flags |= 4194308),
                          (r = !1));
            } else {
                (a = t.stateNode),
                    Wo(e, t),
                    (i = t.memoizedProps),
                    (s = t.type === t.elementType ? i : _o(t.type, i)),
                    (a.props = s),
                    (f = t.pendingProps),
                    (d = a.context),
                    "object" == typeof (u = n.contextType) && null !== u
                        ? (u = Mo(u))
                        : (u = Hl(t, (u = $l(n) ? Vl : ql.current)));
                var p = n.getDerivedStateFromProps;
                (c =
                    "function" == typeof p ||
                    "function" == typeof a.getSnapshotBeforeUpdate) ||
                    ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                        "function" != typeof a.componentWillReceiveProps) ||
                    ((i !== f || d !== u) && la(t, a, r, u)),
                    (Ho = !1),
                    (d = t.memoizedState),
                    (a.state = d),
                    Xo(t, r, a, l);
                var h = t.memoizedState;
                i !== f || d !== h || Bl.current || Ho
                    ? ("function" == typeof p &&
                          (ea(t, n, p, r), (h = t.memoizedState)),
                      (s = Ho || na(t, n, s, r, d, h, u) || !1)
                          ? (c ||
                                ("function" !=
                                    typeof a.UNSAFE_componentWillUpdate &&
                                    "function" !=
                                        typeof a.componentWillUpdate) ||
                                ("function" == typeof a.componentWillUpdate &&
                                    a.componentWillUpdate(r, h, u),
                                "function" ==
                                    typeof a.UNSAFE_componentWillUpdate &&
                                    a.UNSAFE_componentWillUpdate(r, h, u)),
                            "function" == typeof a.componentDidUpdate &&
                                (t.flags |= 4),
                            "function" == typeof a.getSnapshotBeforeUpdate &&
                                (t.flags |= 1024))
                          : ("function" != typeof a.componentDidUpdate ||
                                (i === e.memoizedProps &&
                                    d === e.memoizedState) ||
                                (t.flags |= 4),
                            "function" != typeof a.getSnapshotBeforeUpdate ||
                                (i === e.memoizedProps &&
                                    d === e.memoizedState) ||
                                (t.flags |= 1024),
                            (t.memoizedProps = r),
                            (t.memoizedState = h)),
                      (a.props = r),
                      (a.state = h),
                      (a.context = u),
                      (r = s))
                    : ("function" != typeof a.componentDidUpdate ||
                          (i === e.memoizedProps && d === e.memoizedState) ||
                          (t.flags |= 4),
                      "function" != typeof a.getSnapshotBeforeUpdate ||
                          (i === e.memoizedProps && d === e.memoizedState) ||
                          (t.flags |= 1024),
                      (r = !1));
            }
            return Bi(e, t, n, r, o, l);
        }
        function Bi(e, t, n, r, l, o) {
            Mi(e, t);
            var a = 0 != (128 & t.flags);
            if (!r && !a) return l && Kl(t, n, !1), ru(e, t, o);
            (r = t.stateNode), (Fi.current = t);
            var i =
                a && "function" != typeof n.getDerivedStateFromError
                    ? null
                    : r.render();
            return (
                (t.flags |= 1),
                null !== e && a
                    ? ((t.child = ca(t, e.child, null, o)),
                      (t.child = ca(t, null, i, o)))
                    : Ri(e, t, i, o),
                (t.memoizedState = r.state),
                l && Kl(t, n, !0),
                t.child
            );
        }
        function Vi(e) {
            var t = e.stateNode;
            t.pendingContext
                ? Ql(0, t.pendingContext, t.pendingContext !== t.context)
                : t.context && Ql(0, t.context, !1),
                ya(e, t.containerInfo);
        }
        function Hi(e, t, n, r, l) {
            return To(), No(l), (t.flags |= 256), Ri(e, t, n, r), t.child;
        }
        var $i,
            Wi,
            Qi,
            Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Yi(e) {
            return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ki(e, t, n) {
            var r,
                l = t.pendingProps,
                o = xa.current,
                a = !1,
                i = 0 != (128 & t.flags);
            if (
                ((r = i) ||
                    (r =
                        (null === e || null !== e.memoizedState) &&
                        0 != (2 & o)),
                r
                    ? ((a = !0), (t.flags &= -129))
                    : (null !== e && null === e.memoizedState) || (o |= 1),
                Ml(xa, 1 & o),
                null === e)
            )
                return (
                    So(t),
                    null !== (e = t.memoizedState) &&
                    null !== (e = e.dehydrated)
                        ? (0 == (1 & t.mode)
                              ? (t.lanes = 1)
                              : "$!" === e.data
                              ? (t.lanes = 8)
                              : (t.lanes = 1073741824),
                          null)
                        : ((i = l.children),
                          (e = l.fallback),
                          a
                              ? ((l = t.mode),
                                (a = t.child),
                                (i = { mode: "hidden", children: i }),
                                0 == (1 & l) && null !== a
                                    ? ((a.childLanes = 0), (a.pendingProps = i))
                                    : (a = Ys(i, l, 0, null)),
                                (e = Gs(e, l, n, null)),
                                (a.return = t),
                                (e.return = t),
                                (a.sibling = e),
                                (t.child = a),
                                (t.child.memoizedState = Yi(n)),
                                (t.memoizedState = Gi),
                                e)
                              : Xi(t, i))
                );
            if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
                return (function (e, t, n, r, l, o, a) {
                    if (n)
                        return 256 & t.flags
                            ? ((t.flags &= -257),
                              Ji(e, t, a, (r = Ei(Error(v(422))))))
                            : null !== t.memoizedState
                            ? ((t.child = e.child), (t.flags |= 128), null)
                            : ((o = r.fallback),
                              (l = t.mode),
                              (r = Ys(
                                  { mode: "visible", children: r.children },
                                  l,
                                  0,
                                  null
                              )),
                              ((o = Gs(o, l, a, null)).flags |= 2),
                              (r.return = t),
                              (o.return = t),
                              (r.sibling = o),
                              (t.child = r),
                              0 != (1 & t.mode) && ca(t, e.child, null, a),
                              (t.child.memoizedState = Yi(a)),
                              (t.memoizedState = Gi),
                              o);
                    if (0 == (1 & t.mode)) return Ji(e, t, a, null);
                    if ("$!" === l.data) {
                        if ((r = l.nextSibling && l.nextSibling.dataset))
                            var i = r.dgst;
                        return (
                            (r = i),
                            Ji(
                                e,
                                t,
                                a,
                                (r = Ei((o = Error(v(419))), r, void 0))
                            )
                        );
                    }
                    if (((i = 0 != (a & e.childLanes)), Ai || i)) {
                        if (null !== (r = Bu)) {
                            switch (a & -a) {
                                case 4:
                                    l = 2;
                                    break;
                                case 16:
                                    l = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    l = 32;
                                    break;
                                case 536870912:
                                    l = 268435456;
                                    break;
                                default:
                                    l = 0;
                            }
                            0 !==
                                (l =
                                    0 != (l & (r.suspendedLanes | a))
                                        ? 0
                                        : l) &&
                                l !== o.retryLane &&
                                ((o.retryLane = l), Vo(e, l), ms(r, e, l, -1));
                        }
                        return Ns(), Ji(e, t, a, (r = Ei(Error(v(421)))));
                    }
                    return "$?" === l.data
                        ? ((t.flags |= 128),
                          (t.child = e.child),
                          (t = Us.bind(null, e)),
                          (l._reactRetry = t),
                          null)
                        : ((e = o.treeContext),
                          (yo = wl(l.nextSibling)),
                          (go = t),
                          (vo = !0),
                          (bo = null),
                          null !== e &&
                              ((ao[io++] = so),
                              (ao[io++] = co),
                              (ao[io++] = uo),
                              (so = e.id),
                              (co = e.overflow),
                              (uo = t)),
                          (t = Xi(t, r.children)),
                          (t.flags |= 4096),
                          t);
                })(e, t, i, l, r, o, n);
            if (a) {
                (a = l.fallback), (i = t.mode), (r = (o = e.child).sibling);
                var u = { mode: "hidden", children: l.children };
                return (
                    0 == (1 & i) && t.child !== o
                        ? (((l = t.child).childLanes = 0),
                          (l.pendingProps = u),
                          (t.deletions = null))
                        : ((l = Ws(o, u)).subtreeFlags =
                              14680064 & o.subtreeFlags),
                    null !== r
                        ? (a = Ws(r, a))
                        : ((a = Gs(a, i, n, null)).flags |= 2),
                    (a.return = t),
                    (l.return = t),
                    (l.sibling = a),
                    (t.child = l),
                    (l = a),
                    (a = t.child),
                    (i =
                        null === (i = e.child.memoizedState)
                            ? Yi(n)
                            : {
                                  baseLanes: i.baseLanes | n,
                                  cachePool: null,
                                  transitions: i.transitions
                              }),
                    (a.memoizedState = i),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Gi),
                    l
                );
            }
            return (
                (e = (a = e.child).sibling),
                (l = Ws(a, { mode: "visible", children: l.children })),
                0 == (1 & t.mode) && (l.lanes = n),
                (l.return = t),
                (l.sibling = null),
                null !== e &&
                    (null === (n = t.deletions)
                        ? ((t.deletions = [e]), (t.flags |= 16))
                        : n.push(e)),
                (t.child = l),
                (t.memoizedState = null),
                l
            );
        }
        function Xi(e, t) {
            return (
                ((t = Ys(
                    { mode: "visible", children: t },
                    e.mode,
                    0,
                    null
                )).return = e),
                (e.child = t)
            );
        }
        function Ji(e, t, n, r) {
            return (
                null !== r && No(r),
                ca(t, e.child, null, n),
                ((e = Xi(t, t.pendingProps.children)).flags |= 2),
                (t.memoizedState = null),
                e
            );
        }
        function Zi(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            null !== r && (r.lanes |= t), Io(e.return, t, n);
        }
        function eu(e, t, n, r, l) {
            var o = e.memoizedState;
            null === o
                ? (e.memoizedState = {
                      isBackwards: t,
                      rendering: null,
                      renderingStartTime: 0,
                      last: r,
                      tail: n,
                      tailMode: l
                  })
                : ((o.isBackwards = t),
                  (o.rendering = null),
                  (o.renderingStartTime = 0),
                  (o.last = r),
                  (o.tail = n),
                  (o.tailMode = l));
        }
        function tu(e, t, n) {
            var r = t.pendingProps,
                l = r.revealOrder,
                o = r.tail;
            if ((Ri(e, t, r.children, n), 0 != (2 & (r = xa.current))))
                (r = (1 & r) | 2), (t.flags |= 128);
            else {
                if (null !== e && 0 != (128 & e.flags))
                    e: for (e = t.child; null !== e; ) {
                        if (13 === e.tag)
                            null !== e.memoizedState && Zi(e, n, t);
                        else if (19 === e.tag) Zi(e, n, t);
                        else if (null !== e.child) {
                            (e.child.return = e), (e = e.child);
                            continue;
                        }
                        if (e === t) break e;
                        for (; null === e.sibling; ) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                    }
                r &= 1;
            }
            if ((Ml(xa, r), 0 == (1 & t.mode))) t.memoizedState = null;
            else
                switch (l) {
                    case "forwards":
                        for (n = t.child, l = null; null !== n; )
                            null !== (e = n.alternate) &&
                                null === wa(e) &&
                                (l = n),
                                (n = n.sibling);
                        null === (n = l)
                            ? ((l = t.child), (t.child = null))
                            : ((l = n.sibling), (n.sibling = null)),
                            eu(t, !1, l, n, o);
                        break;
                    case "backwards":
                        for (
                            n = null, l = t.child, t.child = null;
                            null !== l;

                        ) {
                            if (null !== (e = l.alternate) && null === wa(e)) {
                                t.child = l;
                                break;
                            }
                            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                        }
                        eu(t, !0, n, null, o);
                        break;
                    case "together":
                        eu(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null;
                }
            return t.child;
        }
        function nu(e, t) {
            0 == (1 & t.mode) &&
                null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function ru(e, t, n) {
            if (
                (null !== e && (t.dependencies = e.dependencies),
                (Yu |= t.lanes),
                0 == (n & t.childLanes))
            )
                return null;
            if (null !== e && t.child !== e.child) throw Error(v(153));
            if (null !== t.child) {
                for (
                    n = Ws((e = t.child), e.pendingProps),
                        t.child = n,
                        n.return = t;
                    null !== e.sibling;

                )
                    (e = e.sibling),
                        ((n = n.sibling = Ws(e, e.pendingProps)).return = t);
                n.sibling = null;
            }
            return t.child;
        }
        function lu(e, t) {
            if (!vo)
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t), (t = t.sibling);
                        null === n ? (e.tail = null) : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n), (n = n.sibling);
                        null === r
                            ? t || null === e.tail
                                ? (e.tail = null)
                                : (e.tail.sibling = null)
                            : (r.sibling = null);
                }
        }
        function ou(e) {
            var t = null !== e.alternate && e.alternate.child === e.child,
                n = 0,
                r = 0;
            if (t)
                for (var l = e.child; null !== l; )
                    (n |= l.lanes | l.childLanes),
                        (r |= 14680064 & l.subtreeFlags),
                        (r |= 14680064 & l.flags),
                        (l.return = e),
                        (l = l.sibling);
            else
                for (l = e.child; null !== l; )
                    (n |= l.lanes | l.childLanes),
                        (r |= l.subtreeFlags),
                        (r |= l.flags),
                        (l.return = e),
                        (l = l.sibling);
            return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function au(e, t, n) {
            var r = t.pendingProps;
            switch ((mo(t), t.tag)) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return ou(t), null;
                case 1:
                case 17:
                    return $l(t.type) && Wl(), ou(t), null;
                case 3:
                    return (
                        (r = t.stateNode),
                        va(),
                        jl(Bl),
                        jl(ql),
                        Ea(),
                        r.pendingContext &&
                            ((r.context = r.pendingContext),
                            (r.pendingContext = null)),
                        (null !== e && null !== e.child) ||
                            (Co(t)
                                ? (t.flags |= 4)
                                : null === e ||
                                  (e.memoizedState.isDehydrated &&
                                      0 == (256 & t.flags)) ||
                                  ((t.flags |= 1024),
                                  null !== bo && (bs(bo), (bo = null)))),
                        ou(t),
                        null
                    );
                case 5:
                    ka(t);
                    var l = ga(ma.current);
                    if (((n = t.type), null !== e && null != t.stateNode))
                        Wi(e, t, n, r),
                            e.ref !== t.ref &&
                                ((t.flags |= 512), (t.flags |= 2097152));
                    else {
                        if (!r) {
                            if (null === t.stateNode) throw Error(v(166));
                            return ou(t), null;
                        }
                        if (((e = ga(pa.current)), Co(t))) {
                            (r = t.stateNode), (n = t.type);
                            var o = t.memoizedProps;
                            switch (
                                ((r[Cl] = t),
                                (r[Ll] = o),
                                (e = 0 != (1 & t.mode)),
                                n)
                            ) {
                                case "dialog":
                                    Jr("cancel", r), Jr("close", r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Jr("load", r);
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < Gr.length; l++)
                                        Jr(Gr[l], r);
                                    break;
                                case "source":
                                    Jr("error", r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Jr("error", r), Jr("load", r);
                                    break;
                                case "details":
                                    Jr("toggle", r);
                                    break;
                                case "input":
                                    se(r, o), Jr("invalid", r);
                                    break;
                                case "select":
                                    (r._wrapperState = {
                                        wasMultiple: !!o.multiple
                                    }),
                                        Jr("invalid", r);
                                    break;
                                case "textarea":
                                    ye(r, o), Jr("invalid", r);
                            }
                            for (var a in (De(n, o), (l = null), o))
                                if (o.hasOwnProperty(a)) {
                                    var i = o[a];
                                    "children" === a
                                        ? "string" == typeof i
                                            ? r.textContent !== i &&
                                              (!0 !==
                                                  o.suppressHydrationWarning &&
                                                  fl(r.textContent, i, e),
                                              (l = ["children", i]))
                                            : "number" == typeof i &&
                                              r.textContent !== "" + i &&
                                              (!0 !==
                                                  o.suppressHydrationWarning &&
                                                  fl(r.textContent, i, e),
                                              (l = ["children", "" + i]))
                                        : k.hasOwnProperty(a) &&
                                          null != i &&
                                          "onScroll" === a &&
                                          Jr("scroll", r);
                                }
                            switch (n) {
                                case "input":
                                    oe(r), de(r, o, !0);
                                    break;
                                case "textarea":
                                    oe(r), be(r);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    "function" == typeof o.onClick &&
                                        (r.onclick = dl);
                            }
                            (r = l),
                                (t.updateQueue = r),
                                null !== r && (t.flags |= 4);
                        } else {
                            (a = 9 === l.nodeType ? l : l.ownerDocument),
                                "http://www.w3.org/1999/xhtml" === e &&
                                    (e = ke(n)),
                                "http://www.w3.org/1999/xhtml" === e
                                    ? "script" === n
                                        ? (((e =
                                              a.createElement(
                                                  "div"
                                              )).innerHTML =
                                              "<script></script>"),
                                          (e = e.removeChild(e.firstChild)))
                                        : "string" == typeof r.is
                                        ? (e = a.createElement(n, { is: r.is }))
                                        : ((e = a.createElement(n)),
                                          "select" === n &&
                                              ((a = e),
                                              r.multiple
                                                  ? (a.multiple = !0)
                                                  : r.size &&
                                                    (a.size = r.size)))
                                    : (e = a.createElementNS(e, n)),
                                (e[Cl] = t),
                                (e[Ll] = r),
                                $i(e, t),
                                (t.stateNode = e);
                            e: {
                                switch (((a = Fe(n, r)), n)) {
                                    case "dialog":
                                        Jr("cancel", e),
                                            Jr("close", e),
                                            (l = r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Jr("load", e), (l = r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (l = 0; l < Gr.length; l++)
                                            Jr(Gr[l], e);
                                        l = r;
                                        break;
                                    case "source":
                                        Jr("error", e), (l = r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Jr("error", e), Jr("load", e), (l = r);
                                        break;
                                    case "details":
                                        Jr("toggle", e), (l = r);
                                        break;
                                    case "input":
                                        se(e, r),
                                            (l = ue(e, r)),
                                            Jr("invalid", e);
                                        break;
                                    case "option":
                                    default:
                                        l = r;
                                        break;
                                    case "select":
                                        (e._wrapperState = {
                                            wasMultiple: !!r.multiple
                                        }),
                                            (l = K({}, r, { value: void 0 })),
                                            Jr("invalid", e);
                                        break;
                                    case "textarea":
                                        ye(e, r),
                                            (l = ge(e, r)),
                                            Jr("invalid", e);
                                }
                                for (o in (De(n, l), (i = l)))
                                    if (i.hasOwnProperty(o)) {
                                        var u = i[o];
                                        "style" === o
                                            ? Pe(e, u)
                                            : "dangerouslySetInnerHTML" === o
                                            ? null !=
                                                  (u = u ? u.__html : void 0) &&
                                              Ee(e, u)
                                            : "children" === o
                                            ? "string" == typeof u
                                                ? ("textarea" !== n ||
                                                      "" !== u) &&
                                                  Ce(e, u)
                                                : "number" == typeof u &&
                                                  Ce(e, "" + u)
                                            : "suppressContentEditableWarning" !==
                                                  o &&
                                              "suppressHydrationWarning" !==
                                                  o &&
                                              "autoFocus" !== o &&
                                              (k.hasOwnProperty(o)
                                                  ? null != u &&
                                                    "onScroll" === o &&
                                                    Jr("scroll", e)
                                                  : null != u && F(e, o, u, a));
                                    }
                                switch (n) {
                                    case "input":
                                        oe(e), de(e, r, !1);
                                        break;
                                    case "textarea":
                                        oe(e), be(e);
                                        break;
                                    case "option":
                                        null != r.value &&
                                            e.setAttribute(
                                                "value",
                                                "" + re(r.value)
                                            );
                                        break;
                                    case "select":
                                        (e.multiple = !!r.multiple),
                                            null != (o = r.value)
                                                ? me(e, !!r.multiple, o, !1)
                                                : null != r.defaultValue &&
                                                  me(
                                                      e,
                                                      !!r.multiple,
                                                      r.defaultValue,
                                                      !0
                                                  );
                                        break;
                                    default:
                                        "function" == typeof l.onClick &&
                                            (e.onclick = dl);
                                }
                                switch (n) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        r = !!r.autoFocus;
                                        break e;
                                    case "img":
                                        r = !0;
                                        break e;
                                    default:
                                        r = !1;
                                }
                            }
                            r && (t.flags |= 4);
                        }
                        null !== t.ref &&
                            ((t.flags |= 512), (t.flags |= 2097152));
                    }
                    return ou(t), null;
                case 6:
                    if (e && null != t.stateNode) Qi(0, t, e.memoizedProps, r);
                    else {
                        if ("string" != typeof r && null === t.stateNode)
                            throw Error(v(166));
                        if (((n = ga(ma.current)), ga(pa.current), Co(t))) {
                            if (
                                ((r = t.stateNode),
                                (n = t.memoizedProps),
                                (r[Cl] = t),
                                (o = r.nodeValue !== n) && null !== (e = go))
                            )
                                switch (e.tag) {
                                    case 3:
                                        fl(r.nodeValue, n, 0 != (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !==
                                            e.memoizedProps
                                                .suppressHydrationWarning &&
                                            fl(
                                                r.nodeValue,
                                                n,
                                                0 != (1 & e.mode)
                                            );
                                }
                            o && (t.flags |= 4);
                        } else
                            ((r = (
                                9 === n.nodeType ? n : n.ownerDocument
                            ).createTextNode(r))[Cl] = t),
                                (t.stateNode = r);
                    }
                    return ou(t), null;
                case 13:
                    if (
                        (jl(xa),
                        (r = t.memoizedState),
                        null === e ||
                            (null !== e.memoizedState &&
                                null !== e.memoizedState.dehydrated))
                    ) {
                        if (
                            vo &&
                            null !== yo &&
                            0 != (1 & t.mode) &&
                            0 == (128 & t.flags)
                        )
                            Lo(), To(), (t.flags |= 98560), (o = !1);
                        else if (
                            ((o = Co(t)), null !== r && null !== r.dehydrated)
                        ) {
                            if (null === e) {
                                if (!o) throw Error(v(318));
                                if (
                                    !(o =
                                        null !== (o = t.memoizedState)
                                            ? o.dehydrated
                                            : null)
                                )
                                    throw Error(v(317));
                                o[Cl] = t;
                            } else
                                To(),
                                    0 == (128 & t.flags) &&
                                        (t.memoizedState = null),
                                    (t.flags |= 4);
                            ou(t), (o = !1);
                        } else null !== bo && (bs(bo), (bo = null)), (o = !0);
                        if (!o) return 65536 & t.flags ? t : null;
                    }
                    return 0 != (128 & t.flags)
                        ? ((t.lanes = n), t)
                        : ((r = null !== r) !==
                              (null !== e && null !== e.memoizedState) &&
                              r &&
                              ((t.child.flags |= 8192),
                              0 != (1 & t.mode) &&
                                  (null === e || 0 != (1 & xa.current)
                                      ? 0 === Qu && (Qu = 3)
                                      : Ns())),
                          null !== t.updateQueue && (t.flags |= 4),
                          ou(t),
                          null);
                case 4:
                    return (
                        va(),
                        null === e && tl(t.stateNode.containerInfo),
                        ou(t),
                        null
                    );
                case 10:
                    return Oo(t.type._context), ou(t), null;
                case 19:
                    if ((jl(xa), null === (o = t.memoizedState)))
                        return ou(t), null;
                    if (
                        ((r = 0 != (128 & t.flags)), null === (a = o.rendering))
                    )
                        if (r) lu(o, !1);
                        else {
                            if (
                                0 !== Qu ||
                                (null !== e && 0 != (128 & e.flags))
                            )
                                for (e = t.child; null !== e; ) {
                                    if (null !== (a = wa(e))) {
                                        for (
                                            t.flags |= 128,
                                                lu(o, !1),
                                                null !== (r = a.updateQueue) &&
                                                    ((t.updateQueue = r),
                                                    (t.flags |= 4)),
                                                t.subtreeFlags = 0,
                                                r = n,
                                                n = t.child;
                                            null !== n;

                                        )
                                            (e = r),
                                                ((o = n).flags &= 14680066),
                                                null === (a = o.alternate)
                                                    ? ((o.childLanes = 0),
                                                      (o.lanes = e),
                                                      (o.child = null),
                                                      (o.subtreeFlags = 0),
                                                      (o.memoizedProps = null),
                                                      (o.memoizedState = null),
                                                      (o.updateQueue = null),
                                                      (o.dependencies = null),
                                                      (o.stateNode = null))
                                                    : ((o.childLanes =
                                                          a.childLanes),
                                                      (o.lanes = a.lanes),
                                                      (o.child = a.child),
                                                      (o.subtreeFlags = 0),
                                                      (o.deletions = null),
                                                      (o.memoizedProps =
                                                          a.memoizedProps),
                                                      (o.memoizedState =
                                                          a.memoizedState),
                                                      (o.updateQueue =
                                                          a.updateQueue),
                                                      (o.type = a.type),
                                                      (e = a.dependencies),
                                                      (o.dependencies =
                                                          null === e
                                                              ? null
                                                              : {
                                                                    lanes: e.lanes,
                                                                    firstContext:
                                                                        e.firstContext
                                                                })),
                                                (n = n.sibling);
                                        return (
                                            Ml(xa, (1 & xa.current) | 2),
                                            t.child
                                        );
                                    }
                                    e = e.sibling;
                                }
                            null !== o.tail &&
                                ct() > ts &&
                                ((t.flags |= 128),
                                (r = !0),
                                lu(o, !1),
                                (t.lanes = 4194304));
                        }
                    else {
                        if (!r)
                            if (null !== (e = wa(a))) {
                                if (
                                    ((t.flags |= 128),
                                    (r = !0),
                                    null !== (n = e.updateQueue) &&
                                        ((t.updateQueue = n), (t.flags |= 4)),
                                    lu(o, !0),
                                    null === o.tail &&
                                        "hidden" === o.tailMode &&
                                        !a.alternate &&
                                        !vo)
                                )
                                    return ou(t), null;
                            } else
                                2 * ct() - o.renderingStartTime > ts &&
                                    1073741824 !== n &&
                                    ((t.flags |= 128),
                                    (r = !0),
                                    lu(o, !1),
                                    (t.lanes = 4194304));
                        o.isBackwards
                            ? ((a.sibling = t.child), (t.child = a))
                            : (null !== (n = o.last)
                                  ? (n.sibling = a)
                                  : (t.child = a),
                              (o.last = a));
                    }
                    return null !== o.tail
                        ? ((t = o.tail),
                          (o.rendering = t),
                          (o.tail = t.sibling),
                          (o.renderingStartTime = ct()),
                          (t.sibling = null),
                          (n = xa.current),
                          Ml(xa, r ? (1 & n) | 2 : 1 & n),
                          t)
                        : (ou(t), null);
                case 22:
                case 23:
                    return (
                        Es(),
                        (r = null !== t.memoizedState),
                        null !== e &&
                            (null !== e.memoizedState) !== r &&
                            (t.flags |= 8192),
                        r && 0 != (1 & t.mode)
                            ? 0 != (1073741824 & $u) &&
                              (ou(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                            : ou(t),
                        null
                    );
                case 24:
                case 25:
                    return null;
            }
            throw Error(v(156, t.tag));
        }
        function iu(e, t) {
            switch ((mo(t), t.tag)) {
                case 1:
                    return (
                        $l(t.type) && Wl(),
                        65536 & (e = t.flags)
                            ? ((t.flags = (-65537 & e) | 128), t)
                            : null
                    );
                case 3:
                    return (
                        va(),
                        jl(Bl),
                        jl(ql),
                        Ea(),
                        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                            ? ((t.flags = (-65537 & e) | 128), t)
                            : null
                    );
                case 5:
                    return ka(t), null;
                case 13:
                    if (
                        (jl(xa),
                        null !== (e = t.memoizedState) && null !== e.dehydrated)
                    ) {
                        if (null === t.alternate) throw Error(v(340));
                        To();
                    }
                    return 65536 & (e = t.flags)
                        ? ((t.flags = (-65537 & e) | 128), t)
                        : null;
                case 19:
                    return jl(xa), null;
                case 4:
                    return va(), null;
                case 10:
                    return Oo(t.type._context), null;
                case 22:
                case 23:
                    return Es(), null;
                default:
                    return null;
            }
        }
        ($i = function (e, t) {
            for (var n = t.child; null !== n; ) {
                if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                    (n.child.return = n), (n = n.child);
                    continue;
                }
                if (n === t) break;
                for (; null === n.sibling; ) {
                    if (null === n.return || n.return === t) return;
                    n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
            }
        }),
            (Wi = function (e, t, n, r) {
                var l = e.memoizedProps;
                if (l !== r) {
                    (e = t.stateNode), ga(pa.current);
                    var o,
                        a = null;
                    switch (n) {
                        case "input":
                            (l = ue(e, l)), (r = ue(e, r)), (a = []);
                            break;
                        case "select":
                            (l = K({}, l, { value: void 0 })),
                                (r = K({}, r, { value: void 0 })),
                                (a = []);
                            break;
                        case "textarea":
                            (l = ge(e, l)), (r = ge(e, r)), (a = []);
                            break;
                        default:
                            "function" != typeof l.onClick &&
                                "function" == typeof r.onClick &&
                                (e.onclick = dl);
                    }
                    for (s in (De(n, r), (n = null), l))
                        if (
                            !r.hasOwnProperty(s) &&
                            l.hasOwnProperty(s) &&
                            null != l[s]
                        )
                            if ("style" === s) {
                                var i = l[s];
                                for (o in i)
                                    i.hasOwnProperty(o) &&
                                        (n || (n = {}), (n[o] = ""));
                            } else
                                "dangerouslySetInnerHTML" !== s &&
                                    "children" !== s &&
                                    "suppressContentEditableWarning" !== s &&
                                    "suppressHydrationWarning" !== s &&
                                    "autoFocus" !== s &&
                                    (k.hasOwnProperty(s)
                                        ? a || (a = [])
                                        : (a = a || []).push(s, null));
                    for (s in r) {
                        var u = r[s];
                        if (
                            ((i = null != l ? l[s] : void 0),
                            r.hasOwnProperty(s) &&
                                u !== i &&
                                (null != u || null != i))
                        )
                            if ("style" === s)
                                if (i) {
                                    for (o in i)
                                        !i.hasOwnProperty(o) ||
                                            (u && u.hasOwnProperty(o)) ||
                                            (n || (n = {}), (n[o] = ""));
                                    for (o in u)
                                        u.hasOwnProperty(o) &&
                                            i[o] !== u[o] &&
                                            (n || (n = {}), (n[o] = u[o]));
                                } else
                                    n || (a || (a = []), a.push(s, n)), (n = u);
                            else
                                "dangerouslySetInnerHTML" === s
                                    ? ((u = u ? u.__html : void 0),
                                      (i = i ? i.__html : void 0),
                                      null != u &&
                                          i !== u &&
                                          (a = a || []).push(s, u))
                                    : "children" === s
                                    ? ("string" != typeof u &&
                                          "number" != typeof u) ||
                                      (a = a || []).push(s, "" + u)
                                    : "suppressContentEditableWarning" !== s &&
                                      "suppressHydrationWarning" !== s &&
                                      (k.hasOwnProperty(s)
                                          ? (null != u &&
                                                "onScroll" === s &&
                                                Jr("scroll", e),
                                            a || i === u || (a = []))
                                          : (a = a || []).push(s, u));
                    }
                    n && (a = a || []).push("style", n);
                    var s = a;
                    (t.updateQueue = s) && (t.flags |= 4);
                }
            }),
            (Qi = function (e, t, n, r) {
                n !== r && (t.flags |= 4);
            });
        var uu = !1,
            su = !1,
            cu = "function" == typeof WeakSet ? WeakSet : Set,
            fu = null;
        function du(e, t) {
            var n = e.ref;
            if (null !== n)
                if ("function" == typeof n)
                    try {
                        n(null);
                    } catch (n) {
                        Is(e, t, n);
                    }
                else n.current = null;
        }
        function pu(e, t, n) {
            try {
                n();
            } catch (n) {
                Is(e, t, n);
            }
        }
        var hu = !1;
        function mu(e, t, n) {
            var r = t.updateQueue;
            if (null !== (r = null !== r ? r.lastEffect : null)) {
                var l = (r = r.next);
                do {
                    if ((l.tag & e) === e) {
                        var o = l.destroy;
                        (l.destroy = void 0), void 0 !== o && pu(t, n, o);
                    }
                    l = l.next;
                } while (l !== r);
            }
        }
        function gu(e, t) {
            if (
                null !==
                (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
            ) {
                var n = (t = t.next);
                do {
                    if ((n.tag & e) === e) {
                        var r = n.create;
                        n.destroy = r();
                    }
                    n = n.next;
                } while (n !== t);
            }
        }
        function yu(e) {
            var t = e.ref;
            if (null !== t) {
                var n = e.stateNode;
                e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
            }
        }
        function vu(e) {
            var t = e.alternate;
            null !== t && ((e.alternate = null), vu(t)),
                (e.child = null),
                (e.deletions = null),
                (e.sibling = null),
                5 === e.tag &&
                    null !== (t = e.stateNode) &&
                    (delete t[Cl],
                    delete t[Ll],
                    delete t[Nl],
                    delete t[Pl],
                    delete t[_l]),
                (e.stateNode = null),
                (e.return = null),
                (e.dependencies = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.stateNode = null),
                (e.updateQueue = null);
        }
        function bu(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ku(e) {
            e: for (;;) {
                for (; null === e.sibling; ) {
                    if (null === e.return || bu(e.return)) return null;
                    e = e.return;
                }
                for (
                    e.sibling.return = e.return, e = e.sibling;
                    5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

                ) {
                    if (2 & e.flags) continue e;
                    if (null === e.child || 4 === e.tag) continue e;
                    (e.child.return = e), (e = e.child);
                }
                if (!(2 & e.flags)) return e.stateNode;
            }
        }
        function xu(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
                (e = e.stateNode),
                    t
                        ? 8 === n.nodeType
                            ? n.parentNode.insertBefore(e, t)
                            : n.insertBefore(e, t)
                        : (8 === n.nodeType
                              ? (t = n.parentNode).insertBefore(e, n)
                              : (t = n).appendChild(e),
                          null != (n = n._reactRootContainer) ||
                              null !== t.onclick ||
                              (t.onclick = dl));
            else if (4 !== r && null !== (e = e.child))
                for (xu(e, t, n), e = e.sibling; null !== e; )
                    xu(e, t, n), (e = e.sibling);
        }
        function wu(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
                (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (4 !== r && null !== (e = e.child))
                for (wu(e, t, n), e = e.sibling; null !== e; )
                    wu(e, t, n), (e = e.sibling);
        }
        var Su = null,
            Eu = !1;
        function Cu(e, t, n) {
            for (n = n.child; null !== n; ) Lu(e, t, n), (n = n.sibling);
        }
        function Lu(e, t, n) {
            if (vt && "function" == typeof vt.onCommitFiberUnmount)
                try {
                    vt.onCommitFiberUnmount(yt, n);
                } catch (e) {}
            switch (n.tag) {
                case 5:
                    su || du(n, t);
                case 6:
                    var r = Su,
                        l = Eu;
                    (Su = null),
                        Cu(e, t, n),
                        (Eu = l),
                        null !== (Su = r) &&
                            (Eu
                                ? ((e = Su),
                                  (n = n.stateNode),
                                  8 === e.nodeType
                                      ? e.parentNode.removeChild(n)
                                      : e.removeChild(n))
                                : Su.removeChild(n.stateNode));
                    break;
                case 18:
                    null !== Su &&
                        (Eu
                            ? ((e = Su),
                              (n = n.stateNode),
                              8 === e.nodeType
                                  ? xl(e.parentNode, n)
                                  : 1 === e.nodeType && xl(e, n),
                              tn(e))
                            : xl(Su, n.stateNode));
                    break;
                case 4:
                    (r = Su),
                        (l = Eu),
                        (Su = n.stateNode.containerInfo),
                        (Eu = !0),
                        Cu(e, t, n),
                        (Su = r),
                        (Eu = l);
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (
                        !su &&
                        null !== (r = n.updateQueue) &&
                        null !== (r = r.lastEffect)
                    ) {
                        l = r = r.next;
                        do {
                            var o = l,
                                a = o.destroy;
                            (o = o.tag),
                                void 0 !== a &&
                                    (0 != (2 & o) || 0 != (4 & o)) &&
                                    pu(n, t, a),
                                (l = l.next);
                        } while (l !== r);
                    }
                    Cu(e, t, n);
                    break;
                case 1:
                    if (
                        !su &&
                        (du(n, t),
                        "function" ==
                            typeof (r = n.stateNode).componentWillUnmount)
                    )
                        try {
                            (r.props = n.memoizedProps),
                                (r.state = n.memoizedState),
                                r.componentWillUnmount();
                        } catch (e) {
                            Is(n, t, e);
                        }
                    Cu(e, t, n);
                    break;
                case 21:
                    Cu(e, t, n);
                    break;
                case 22:
                    1 & n.mode
                        ? ((su = (r = su) || null !== n.memoizedState),
                          Cu(e, t, n),
                          (su = r))
                        : Cu(e, t, n);
                    break;
                default:
                    Cu(e, t, n);
            }
        }
        function Tu(e) {
            var t = e.updateQueue;
            if (null !== t) {
                e.updateQueue = null;
                var n = e.stateNode;
                null === n && (n = e.stateNode = new cu()),
                    t.forEach(function (t) {
                        var r = qs.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r));
                    });
            }
        }
        function Nu(e, t) {
            var n = t.deletions;
            if (null !== n)
                for (var r = 0; r < n.length; r++) {
                    var l = n[r];
                    try {
                        var o = e,
                            a = t,
                            i = a;
                        e: for (; null !== i; ) {
                            switch (i.tag) {
                                case 5:
                                    (Su = i.stateNode), (Eu = !1);
                                    break e;
                                case 3:
                                case 4:
                                    (Su = i.stateNode.containerInfo), (Eu = !0);
                                    break e;
                            }
                            i = i.return;
                        }
                        if (null === Su) throw Error(v(160));
                        Lu(o, a, l), (Su = null), (Eu = !1);
                        var u = l.alternate;
                        null !== u && (u.return = null), (l.return = null);
                    } catch (e) {
                        Is(l, t, e);
                    }
                }
            if (12854 & t.subtreeFlags)
                for (t = t.child; null !== t; ) Pu(t, e), (t = t.sibling);
        }
        function Pu(e, t) {
            var n = e.alternate,
                r = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if ((Nu(t, e), _u(e), 4 & r)) {
                        try {
                            mu(3, e, e.return), gu(3, e);
                        } catch (t) {
                            Is(e, e.return, t);
                        }
                        try {
                            mu(5, e, e.return);
                        } catch (t) {
                            Is(e, e.return, t);
                        }
                    }
                    break;
                case 1:
                    Nu(t, e), _u(e), 512 & r && null !== n && du(n, n.return);
                    break;
                case 5:
                    if (
                        (Nu(t, e),
                        _u(e),
                        512 & r && null !== n && du(n, n.return),
                        32 & e.flags)
                    ) {
                        var l = e.stateNode;
                        try {
                            Ce(l, "");
                        } catch (t) {
                            Is(e, e.return, t);
                        }
                    }
                    if (4 & r && null != (l = e.stateNode)) {
                        var o = e.memoizedProps,
                            a = null !== n ? n.memoizedProps : o,
                            i = e.type,
                            u = e.updateQueue;
                        if (((e.updateQueue = null), null !== u))
                            try {
                                "input" === i &&
                                    "radio" === o.type &&
                                    null != o.name &&
                                    ce(l, o),
                                    Fe(i, a);
                                var s = Fe(i, o);
                                for (a = 0; a < u.length; a += 2) {
                                    var c = u[a],
                                        f = u[a + 1];
                                    "style" === c
                                        ? Pe(l, f)
                                        : "dangerouslySetInnerHTML" === c
                                        ? Ee(l, f)
                                        : "children" === c
                                        ? Ce(l, f)
                                        : F(l, c, f, s);
                                }
                                switch (i) {
                                    case "input":
                                        fe(l, o);
                                        break;
                                    case "textarea":
                                        ve(l, o);
                                        break;
                                    case "select":
                                        var d = l._wrapperState.wasMultiple;
                                        l._wrapperState.wasMultiple =
                                            !!o.multiple;
                                        var p = o.value;
                                        null != p
                                            ? me(l, !!o.multiple, p, !1)
                                            : d !== !!o.multiple &&
                                              (null != o.defaultValue
                                                  ? me(
                                                        l,
                                                        !!o.multiple,
                                                        o.defaultValue,
                                                        !0
                                                    )
                                                  : me(
                                                        l,
                                                        !!o.multiple,
                                                        o.multiple ? [] : "",
                                                        !1
                                                    ));
                                }
                                l[Ll] = o;
                            } catch (t) {
                                Is(e, e.return, t);
                            }
                    }
                    break;
                case 6:
                    if ((Nu(t, e), _u(e), 4 & r)) {
                        if (null === e.stateNode) throw Error(v(162));
                        (l = e.stateNode), (o = e.memoizedProps);
                        try {
                            l.nodeValue = o;
                        } catch (t) {
                            Is(e, e.return, t);
                        }
                    }
                    break;
                case 3:
                    if (
                        (Nu(t, e),
                        _u(e),
                        4 & r && null !== n && n.memoizedState.isDehydrated)
                    )
                        try {
                            tn(t.containerInfo);
                        } catch (t) {
                            Is(e, e.return, t);
                        }
                    break;
                case 4:
                default:
                    Nu(t, e), _u(e);
                    break;
                case 13:
                    Nu(t, e),
                        _u(e),
                        8192 & (l = e.child).flags &&
                            ((o = null !== l.memoizedState),
                            (l.stateNode.isHidden = o),
                            !o ||
                                (null !== l.alternate &&
                                    null !== l.alternate.memoizedState) ||
                                (es = ct())),
                        4 & r && Tu(e);
                    break;
                case 22:
                    if (
                        ((c = null !== n && null !== n.memoizedState),
                        1 & e.mode
                            ? ((su = (s = su) || c), Nu(t, e), (su = s))
                            : Nu(t, e),
                        _u(e),
                        8192 & r)
                    ) {
                        if (
                            ((s = null !== e.memoizedState),
                            (e.stateNode.isHidden = s) &&
                                !c &&
                                0 != (1 & e.mode))
                        )
                            for (fu = e, c = e.child; null !== c; ) {
                                for (f = fu = c; null !== fu; ) {
                                    switch (((p = (d = fu).child), d.tag)) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            mu(4, d, d.return);
                                            break;
                                        case 1:
                                            du(d, d.return);
                                            var h = d.stateNode;
                                            if (
                                                "function" ==
                                                typeof h.componentWillUnmount
                                            ) {
                                                (r = d), (n = d.return);
                                                try {
                                                    (t = r),
                                                        (h.props =
                                                            t.memoizedProps),
                                                        (h.state =
                                                            t.memoizedState),
                                                        h.componentWillUnmount();
                                                } catch (e) {
                                                    Is(r, n, e);
                                                }
                                            }
                                            break;
                                        case 5:
                                            du(d, d.return);
                                            break;
                                        case 22:
                                            if (null !== d.memoizedState) {
                                                Ru(f);
                                                continue;
                                            }
                                    }
                                    null !== p
                                        ? ((p.return = d), (fu = p))
                                        : Ru(f);
                                }
                                c = c.sibling;
                            }
                        e: for (c = null, f = e; ; ) {
                            if (5 === f.tag) {
                                if (null === c) {
                                    c = f;
                                    try {
                                        (l = f.stateNode),
                                            s
                                                ? "function" ==
                                                  typeof (o = l.style)
                                                      .setProperty
                                                    ? o.setProperty(
                                                          "display",
                                                          "none",
                                                          "important"
                                                      )
                                                    : (o.display = "none")
                                                : ((i = f.stateNode),
                                                  (a =
                                                      null !=
                                                          (u =
                                                              f.memoizedProps
                                                                  .style) &&
                                                      u.hasOwnProperty(
                                                          "display"
                                                      )
                                                          ? u.display
                                                          : null),
                                                  (i.style.display = Ne(
                                                      "display",
                                                      a
                                                  )));
                                    } catch (t) {
                                        Is(e, e.return, t);
                                    }
                                }
                            } else if (6 === f.tag) {
                                if (null === c)
                                    try {
                                        f.stateNode.nodeValue = s
                                            ? ""
                                            : f.memoizedProps;
                                    } catch (t) {
                                        Is(e, e.return, t);
                                    }
                            } else if (
                                ((22 !== f.tag && 23 !== f.tag) ||
                                    null === f.memoizedState ||
                                    f === e) &&
                                null !== f.child
                            ) {
                                (f.child.return = f), (f = f.child);
                                continue;
                            }
                            if (f === e) break e;
                            for (; null === f.sibling; ) {
                                if (null === f.return || f.return === e)
                                    break e;
                                c === f && (c = null), (f = f.return);
                            }
                            c === f && (c = null),
                                (f.sibling.return = f.return),
                                (f = f.sibling);
                        }
                    }
                    break;
                case 19:
                    Nu(t, e), _u(e), 4 & r && Tu(e);
                case 21:
            }
        }
        function _u(e) {
            var t = e.flags;
            if (2 & t) {
                try {
                    e: {
                        for (var n = e.return; null !== n; ) {
                            if (bu(n)) {
                                var r = n;
                                break e;
                            }
                            n = n.return;
                        }
                        throw Error(v(160));
                    }
                    switch (r.tag) {
                        case 5:
                            var l = r.stateNode;
                            32 & r.flags && (Ce(l, ""), (r.flags &= -33)),
                                wu(e, ku(e), l);
                            break;
                        case 3:
                        case 4:
                            var o = r.stateNode.containerInfo;
                            xu(e, ku(e), o);
                            break;
                        default:
                            throw Error(v(161));
                    }
                } catch (t) {
                    Is(e, e.return, t);
                }
                e.flags &= -3;
            }
            4096 & t && (e.flags &= -4097);
        }
        function Du(e, t, n) {
            (fu = e), Fu(e, t, n);
        }
        function Fu(e, t, n) {
            for (var r = 0 != (1 & e.mode); null !== fu; ) {
                var l = fu,
                    o = l.child;
                if (22 === l.tag && r) {
                    var a = null !== l.memoizedState || uu;
                    if (!a) {
                        var i = l.alternate,
                            u = (null !== i && null !== i.memoizedState) || su;
                        i = uu;
                        var s = su;
                        if (((uu = a), (su = u) && !s))
                            for (fu = l; null !== fu; )
                                (u = (a = fu).child),
                                    22 === a.tag && null !== a.memoizedState
                                        ? zu(l)
                                        : null !== u
                                        ? ((u.return = a), (fu = u))
                                        : zu(l);
                        for (; null !== o; )
                            (fu = o), Fu(o, t, n), (o = o.sibling);
                        (fu = l), (uu = i), (su = s);
                    }
                    Au(e);
                } else
                    0 != (8772 & l.subtreeFlags) && null !== o
                        ? ((o.return = l), (fu = o))
                        : Au(e);
            }
        }
        function Au(e) {
            for (; null !== fu; ) {
                var t = fu;
                if (0 != (8772 & t.flags)) {
                    var n = t.alternate;
                    try {
                        if (0 != (8772 & t.flags))
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    su || gu(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !su)
                                        if (null === n) r.componentDidMount();
                                        else {
                                            var l =
                                                t.elementType === t.type
                                                    ? n.memoizedProps
                                                    : _o(
                                                          t.type,
                                                          n.memoizedProps
                                                      );
                                            r.componentDidUpdate(
                                                l,
                                                n.memoizedState,
                                                r.__reactInternalSnapshotBeforeUpdate
                                            );
                                        }
                                    var o = t.updateQueue;
                                    null !== o && Jo(t, o, r);
                                    break;
                                case 3:
                                    var a = t.updateQueue;
                                    if (null !== a) {
                                        if (((n = null), null !== t.child))
                                            switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode;
                                            }
                                        Jo(t, a, n);
                                    }
                                    break;
                                case 5:
                                    var i = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = i;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                u.autoFocus && n.focus();
                                                break;
                                            case "img":
                                                u.src && (n.src = u.src);
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var s = t.alternate;
                                        if (null !== s) {
                                            var c = s.memoizedState;
                                            if (null !== c) {
                                                var f = c.dehydrated;
                                                null !== f && tn(f);
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(v(163));
                            }
                        su || (512 & t.flags && yu(t));
                    } catch (e) {
                        Is(t, t.return, e);
                    }
                }
                if (t === e) {
                    fu = null;
                    break;
                }
                if (null !== (n = t.sibling)) {
                    (n.return = t.return), (fu = n);
                    break;
                }
                fu = t.return;
            }
        }
        function Ru(e) {
            for (; null !== fu; ) {
                var t = fu;
                if (t === e) {
                    fu = null;
                    break;
                }
                var n = t.sibling;
                if (null !== n) {
                    (n.return = t.return), (fu = n);
                    break;
                }
                fu = t.return;
            }
        }
        function zu(e) {
            for (; null !== fu; ) {
                var t = fu;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                gu(4, t);
                            } catch (e) {
                                Is(t, n, e);
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if ("function" == typeof r.componentDidMount) {
                                var l = t.return;
                                try {
                                    r.componentDidMount();
                                } catch (e) {
                                    Is(t, l, e);
                                }
                            }
                            var o = t.return;
                            try {
                                yu(t);
                            } catch (e) {
                                Is(t, o, e);
                            }
                            break;
                        case 5:
                            var a = t.return;
                            try {
                                yu(t);
                            } catch (e) {
                                Is(t, a, e);
                            }
                    }
                } catch (e) {
                    Is(t, t.return, e);
                }
                if (t === e) {
                    fu = null;
                    break;
                }
                var i = t.sibling;
                if (null !== i) {
                    (i.return = t.return), (fu = i);
                    break;
                }
                fu = t.return;
            }
        }
        var Ou,
            Iu = Math.ceil,
            ju = A.ReactCurrentDispatcher,
            Mu = A.ReactCurrentOwner,
            Uu = A.ReactCurrentBatchConfig,
            qu = 0,
            Bu = null,
            Vu = null,
            Hu = 0,
            $u = 0,
            Wu = Il(0),
            Qu = 0,
            Gu = null,
            Yu = 0,
            Ku = 0,
            Xu = 0,
            Ju = null,
            Zu = null,
            es = 0,
            ts = 1 / 0,
            ns = null,
            rs = !1,
            ls = null,
            os = null,
            as = !1,
            is = null,
            us = 0,
            ss = 0,
            cs = null,
            fs = -1,
            ds = 0;
        function ps() {
            return 0 != (6 & qu) ? ct() : -1 !== fs ? fs : (fs = ct());
        }
        function hs(e) {
            return 0 == (1 & e.mode)
                ? 1
                : 0 != (2 & qu) && 0 !== Hu
                ? Hu & -Hu
                : null !== Po.transition
                ? (0 === ds && (ds = Nt()), ds)
                : 0 !== (e = Ft)
                ? e
                : (e = void 0 === (e = window.event) ? 16 : cn(e.type));
        }
        function ms(e, t, n, r) {
            if (50 < ss) throw ((ss = 0), (cs = null), Error(v(185)));
            _t(e, n, r),
                (0 != (2 & qu) && e === Bu) ||
                    (e === Bu &&
                        (0 == (2 & qu) && (Ku |= n), 4 === Qu && ks(e, Hu)),
                    gs(e, r),
                    1 === n &&
                        0 === qu &&
                        0 == (1 & t.mode) &&
                        ((ts = ct() + 500), Jl && to()));
        }
        function gs(e, t) {
            var n = e.callbackNode;
            !(function (e, t) {
                for (
                    var n = e.suspendedLanes,
                        r = e.pingedLanes,
                        l = e.expirationTimes,
                        o = e.pendingLanes;
                    0 < o;

                ) {
                    var a = 31 - bt(o),
                        i = 1 << a,
                        u = l[a];
                    -1 === u
                        ? (0 != (i & n) && 0 == (i & r)) || (l[a] = Lt(i, t))
                        : u <= t && (e.expiredLanes |= i),
                        (o &= ~i);
                }
            })(e, t);
            var r = Ct(e, e === Bu ? Hu : 0);
            if (0 === r)
                null !== n && it(n),
                    (e.callbackNode = null),
                    (e.callbackPriority = 0);
            else if (((t = r & -r), e.callbackPriority !== t)) {
                if ((null != n && it(n), 1 === t))
                    0 === e.tag
                        ? (function (e) {
                              (Jl = !0), eo(e);
                          })(xs.bind(null, e))
                        : eo(xs.bind(null, e)),
                        bl(function () {
                            0 == (6 & qu) && to();
                        }),
                        (n = null);
                else {
                    switch (At(r)) {
                        case 1:
                            n = dt;
                            break;
                        case 4:
                            n = pt;
                            break;
                        case 16:
                        default:
                            n = ht;
                            break;
                        case 536870912:
                            n = gt;
                    }
                    n = Bs(n, ys.bind(null, e));
                }
                (e.callbackPriority = t), (e.callbackNode = n);
            }
        }
        function ys(e, t) {
            if (((fs = -1), (ds = 0), 0 != (6 & qu))) throw Error(v(327));
            var n = e.callbackNode;
            if (zs() && e.callbackNode !== n) return null;
            var r = Ct(e, e === Bu ? Hu : 0);
            if (0 === r) return null;
            if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Ps(e, r);
            else {
                t = r;
                var l = qu;
                qu |= 2;
                var o = Ts();
                for (
                    (Bu === e && Hu === t) ||
                    ((ns = null), (ts = ct() + 500), Cs(e, t));
                    ;

                )
                    try {
                        Ds();
                        break;
                    } catch (t) {
                        Ls(e, t);
                    }
                zo(),
                    (ju.current = o),
                    (qu = l),
                    null !== Vu ? (t = 0) : ((Bu = null), (Hu = 0), (t = Qu));
            }
            if (0 !== t) {
                if (
                    (2 === t && 0 !== (l = Tt(e)) && ((r = l), (t = vs(e, l))),
                    1 === t)
                )
                    throw ((n = Gu), Cs(e, 0), ks(e, r), gs(e, ct()), n);
                if (6 === t) ks(e, r);
                else {
                    if (
                        ((l = e.current.alternate),
                        0 == (30 & r) &&
                            !(function (e) {
                                for (var t = e; ; ) {
                                    if (16384 & t.flags) {
                                        var n = t.updateQueue;
                                        if (
                                            null !== n &&
                                            null !== (n = n.stores)
                                        )
                                            for (var r = 0; r < n.length; r++) {
                                                var l = n[r],
                                                    o = l.getSnapshot;
                                                l = l.value;
                                                try {
                                                    if (!kr(o(), l)) return !1;
                                                } catch (e) {
                                                    return !1;
                                                }
                                            }
                                    }
                                    if (
                                        ((n = t.child),
                                        16384 & t.subtreeFlags && null !== n)
                                    )
                                        (n.return = t), (t = n);
                                    else {
                                        if (t === e) break;
                                        for (; null === t.sibling; ) {
                                            if (
                                                null === t.return ||
                                                t.return === e
                                            )
                                                return !0;
                                            t = t.return;
                                        }
                                        (t.sibling.return = t.return),
                                            (t = t.sibling);
                                    }
                                }
                                return !0;
                            })(l) &&
                            (2 === (t = Ps(e, r)) &&
                                0 !== (o = Tt(e)) &&
                                ((r = o), (t = vs(e, o))),
                            1 === t))
                    )
                        throw ((n = Gu), Cs(e, 0), ks(e, r), gs(e, ct()), n);
                    switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                        case 0:
                        case 1:
                            throw Error(v(345));
                        case 2:
                        case 5:
                            Rs(e, Zu, ns);
                            break;
                        case 3:
                            if (
                                (ks(e, r),
                                (130023424 & r) === r &&
                                    10 < (t = es + 500 - ct()))
                            ) {
                                if (0 !== Ct(e, 0)) break;
                                if (((l = e.suspendedLanes) & r) !== r) {
                                    ps(),
                                        (e.pingedLanes |= e.suspendedLanes & l);
                                    break;
                                }
                                e.timeoutHandle = gl(
                                    Rs.bind(null, e, Zu, ns),
                                    t
                                );
                                break;
                            }
                            Rs(e, Zu, ns);
                            break;
                        case 4:
                            if ((ks(e, r), (4194240 & r) === r)) break;
                            for (t = e.eventTimes, l = -1; 0 < r; ) {
                                var a = 31 - bt(r);
                                (o = 1 << a),
                                    (a = t[a]) > l && (l = a),
                                    (r &= ~o);
                            }
                            if (
                                ((r = l),
                                10 <
                                    (r =
                                        (120 > (r = ct() - r)
                                            ? 120
                                            : 480 > r
                                            ? 480
                                            : 1080 > r
                                            ? 1080
                                            : 1920 > r
                                            ? 1920
                                            : 3e3 > r
                                            ? 3e3
                                            : 4320 > r
                                            ? 4320
                                            : 1960 * Iu(r / 1960)) - r))
                            ) {
                                e.timeoutHandle = gl(
                                    Rs.bind(null, e, Zu, ns),
                                    r
                                );
                                break;
                            }
                            Rs(e, Zu, ns);
                            break;
                        default:
                            throw Error(v(329));
                    }
                }
            }
            return gs(e, ct()), e.callbackNode === n ? ys.bind(null, e) : null;
        }
        function vs(e, t) {
            var n = Ju;
            return (
                e.current.memoizedState.isDehydrated && (Cs(e, t).flags |= 256),
                2 !== (e = Ps(e, t)) &&
                    ((t = Zu), (Zu = n), null !== t && bs(t)),
                e
            );
        }
        function bs(e) {
            null === Zu ? (Zu = e) : Zu.push.apply(Zu, e);
        }
        function ks(e, t) {
            for (
                t &= ~Xu,
                    t &= ~Ku,
                    e.suspendedLanes |= t,
                    e.pingedLanes &= ~t,
                    e = e.expirationTimes;
                0 < t;

            ) {
                var n = 31 - bt(t),
                    r = 1 << n;
                (e[n] = -1), (t &= ~r);
            }
        }
        function xs(e) {
            if (0 != (6 & qu)) throw Error(v(327));
            zs();
            var t = Ct(e, 0);
            if (0 == (1 & t)) return gs(e, ct()), null;
            var n = Ps(e, t);
            if (0 !== e.tag && 2 === n) {
                var r = Tt(e);
                0 !== r && ((t = r), (n = vs(e, r)));
            }
            if (1 === n) throw ((n = Gu), Cs(e, 0), ks(e, t), gs(e, ct()), n);
            if (6 === n) throw Error(v(345));
            return (
                (e.finishedWork = e.current.alternate),
                (e.finishedLanes = t),
                Rs(e, Zu, ns),
                gs(e, ct()),
                null
            );
        }
        function ws(e, t) {
            var n = qu;
            qu |= 1;
            try {
                return e(t);
            } finally {
                0 === (qu = n) && ((ts = ct() + 500), Jl && to());
            }
        }
        function Ss(e) {
            null !== is && 0 === is.tag && 0 == (6 & qu) && zs();
            var t = qu;
            qu |= 1;
            var n = Uu.transition,
                r = Ft;
            try {
                if (((Uu.transition = null), (Ft = 1), e)) return e();
            } finally {
                (Ft = r), (Uu.transition = n), 0 == (6 & (qu = t)) && to();
            }
        }
        function Es() {
            ($u = Wu.current), jl(Wu);
        }
        function Cs(e, t) {
            (e.finishedWork = null), (e.finishedLanes = 0);
            var n = e.timeoutHandle;
            if ((-1 !== n && ((e.timeoutHandle = -1), yl(n)), null !== Vu))
                for (n = Vu.return; null !== n; ) {
                    var r = n;
                    switch ((mo(r), r.tag)) {
                        case 1:
                            null != (r = r.type.childContextTypes) && Wl();
                            break;
                        case 3:
                            va(), jl(Bl), jl(ql), Ea();
                            break;
                        case 5:
                            ka(r);
                            break;
                        case 4:
                            va();
                            break;
                        case 13:
                        case 19:
                            jl(xa);
                            break;
                        case 10:
                            Oo(r.type._context);
                            break;
                        case 22:
                        case 23:
                            Es();
                    }
                    n = n.return;
                }
            if (
                ((Bu = e),
                (Vu = e = Ws(e.current, null)),
                (Hu = $u = t),
                (Qu = 0),
                (Gu = null),
                (Xu = Ku = Yu = 0),
                (Zu = Ju = null),
                null !== Uo)
            ) {
                for (t = 0; t < Uo.length; t++)
                    if (null !== (r = (n = Uo[t]).interleaved)) {
                        n.interleaved = null;
                        var l = r.next,
                            o = n.pending;
                        if (null !== o) {
                            var a = o.next;
                            (o.next = l), (r.next = a);
                        }
                        n.pending = r;
                    }
                Uo = null;
            }
            return e;
        }
        function Ls(e, t) {
            for (;;) {
                var n = Vu;
                try {
                    if ((zo(), (Ca.current = bi), Da)) {
                        for (var r = Na.memoizedState; null !== r; ) {
                            var l = r.queue;
                            null !== l && (l.pending = null), (r = r.next);
                        }
                        Da = !1;
                    }
                    if (
                        ((Ta = 0),
                        (_a = Pa = Na = null),
                        (Fa = !1),
                        (Aa = 0),
                        (Mu.current = null),
                        null === n || null === n.return)
                    ) {
                        (Qu = 1), (Gu = t), (Vu = null);
                        break;
                    }
                    e: {
                        var o = e,
                            a = n.return,
                            i = n,
                            u = t;
                        if (
                            ((t = Hu),
                            (i.flags |= 32768),
                            null !== u &&
                                "object" == typeof u &&
                                "function" == typeof u.then)
                        ) {
                            var s = u,
                                c = i,
                                f = c.tag;
                            if (
                                0 == (1 & c.mode) &&
                                (0 === f || 11 === f || 15 === f)
                            ) {
                                var d = c.alternate;
                                d
                                    ? ((c.updateQueue = d.updateQueue),
                                      (c.memoizedState = d.memoizedState),
                                      (c.lanes = d.lanes))
                                    : ((c.updateQueue = null),
                                      (c.memoizedState = null));
                            }
                            var p = _i(a);
                            if (null !== p) {
                                (p.flags &= -257),
                                    Di(p, a, i, 0, t),
                                    1 & p.mode && Pi(o, s, t),
                                    (u = s);
                                var h = (t = p).updateQueue;
                                if (null === h) {
                                    var m = new Set();
                                    m.add(u), (t.updateQueue = m);
                                } else h.add(u);
                                break e;
                            }
                            if (0 == (1 & t)) {
                                Pi(o, s, t), Ns();
                                break e;
                            }
                            u = Error(v(426));
                        } else if (vo && 1 & i.mode) {
                            var g = _i(a);
                            if (null !== g) {
                                0 == (65536 & g.flags) && (g.flags |= 256),
                                    Di(g, a, i, 0, t),
                                    No(Si(u, i));
                                break e;
                            }
                        }
                        (o = u = Si(u, i)),
                            4 !== Qu && (Qu = 2),
                            null === Ju ? (Ju = [o]) : Ju.push(o),
                            (o = a);
                        do {
                            switch (o.tag) {
                                case 3:
                                    (o.flags |= 65536),
                                        (t &= -t),
                                        (o.lanes |= t),
                                        Ko(o, Ti(0, u, t));
                                    break e;
                                case 1:
                                    i = u;
                                    var y = o.type,
                                        b = o.stateNode;
                                    if (
                                        0 == (128 & o.flags) &&
                                        ("function" ==
                                            typeof y.getDerivedStateFromError ||
                                            (null !== b &&
                                                "function" ==
                                                    typeof b.componentDidCatch &&
                                                (null === os || !os.has(b))))
                                    ) {
                                        (o.flags |= 65536),
                                            (t &= -t),
                                            (o.lanes |= t),
                                            Ko(o, Ni(o, i, t));
                                        break e;
                                    }
                            }
                            o = o.return;
                        } while (null !== o);
                    }
                    As(n);
                } catch (e) {
                    (t = e), Vu === n && null !== n && (Vu = n = n.return);
                    continue;
                }
                break;
            }
        }
        function Ts() {
            var e = ju.current;
            return (ju.current = bi), null === e ? bi : e;
        }
        function Ns() {
            (0 !== Qu && 3 !== Qu && 2 !== Qu) || (Qu = 4),
                null === Bu ||
                    (0 == (268435455 & Yu) && 0 == (268435455 & Ku)) ||
                    ks(Bu, Hu);
        }
        function Ps(e, t) {
            var n = qu;
            qu |= 2;
            var r = Ts();
            for ((Bu === e && Hu === t) || ((ns = null), Cs(e, t)); ; )
                try {
                    _s();
                    break;
                } catch (t) {
                    Ls(e, t);
                }
            if ((zo(), (qu = n), (ju.current = r), null !== Vu))
                throw Error(v(261));
            return (Bu = null), (Hu = 0), Qu;
        }
        function _s() {
            for (; null !== Vu; ) Fs(Vu);
        }
        function Ds() {
            for (; null !== Vu && !ut(); ) Fs(Vu);
        }
        function Fs(e) {
            var t = Ou(e.alternate, e, $u);
            (e.memoizedProps = e.pendingProps),
                null === t ? As(e) : (Vu = t),
                (Mu.current = null);
        }
        function As(e) {
            var t = e;
            do {
                var n = t.alternate;
                if (((e = t.return), 0 == (32768 & t.flags))) {
                    if (null !== (n = au(n, t, $u))) return void (Vu = n);
                } else {
                    if (null !== (n = iu(n, t)))
                        return (n.flags &= 32767), void (Vu = n);
                    if (null === e) return (Qu = 6), void (Vu = null);
                    (e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null);
                }
                if (null !== (t = t.sibling)) return void (Vu = t);
                Vu = t = e;
            } while (null !== t);
            0 === Qu && (Qu = 5);
        }
        function Rs(e, t, n) {
            var r = Ft,
                l = Uu.transition;
            try {
                (Uu.transition = null),
                    (Ft = 1),
                    (function (e, t, n, r) {
                        do {
                            zs();
                        } while (null !== is);
                        if (0 != (6 & qu)) throw Error(v(327));
                        n = e.finishedWork;
                        var l = e.finishedLanes;
                        if (null === n) return null;
                        if (
                            ((e.finishedWork = null),
                            (e.finishedLanes = 0),
                            n === e.current)
                        )
                            throw Error(v(177));
                        (e.callbackNode = null), (e.callbackPriority = 0);
                        var o = n.lanes | n.childLanes;
                        if (
                            ((function (e, t) {
                                var n = e.pendingLanes & ~t;
                                (e.pendingLanes = t),
                                    (e.suspendedLanes = 0),
                                    (e.pingedLanes = 0),
                                    (e.expiredLanes &= t),
                                    (e.mutableReadLanes &= t),
                                    (e.entangledLanes &= t),
                                    (t = e.entanglements);
                                var r = e.eventTimes;
                                for (e = e.expirationTimes; 0 < n; ) {
                                    var l = 31 - bt(n),
                                        o = 1 << l;
                                    (t[l] = 0),
                                        (r[l] = -1),
                                        (e[l] = -1),
                                        (n &= ~o);
                                }
                            })(e, o),
                            e === Bu && ((Vu = Bu = null), (Hu = 0)),
                            (0 == (2064 & n.subtreeFlags) &&
                                0 == (2064 & n.flags)) ||
                                as ||
                                ((as = !0),
                                Bs(ht, function () {
                                    return zs(), null;
                                })),
                            (o = 0 != (15990 & n.flags)),
                            0 != (15990 & n.subtreeFlags) || o)
                        ) {
                            (o = Uu.transition), (Uu.transition = null);
                            var a = Ft;
                            Ft = 1;
                            var i = qu;
                            (qu |= 4),
                                (Mu.current = null),
                                (function (e, t) {
                                    if (((pl = rn), Lr((e = Cr())))) {
                                        if ("selectionStart" in e)
                                            var n = {
                                                start: e.selectionStart,
                                                end: e.selectionEnd
                                            };
                                        else
                                            e: {
                                                var r =
                                                    (n =
                                                        ((n =
                                                            e.ownerDocument) &&
                                                            n.defaultView) ||
                                                        window).getSelection &&
                                                    n.getSelection();
                                                if (r && 0 !== r.rangeCount) {
                                                    n = r.anchorNode;
                                                    var l = r.anchorOffset,
                                                        o = r.focusNode;
                                                    r = r.focusOffset;
                                                    try {
                                                        n.nodeType, o.nodeType;
                                                    } catch (e) {
                                                        n = null;
                                                        break e;
                                                    }
                                                    var a = 0,
                                                        i = -1,
                                                        u = -1,
                                                        s = 0,
                                                        c = 0,
                                                        f = e,
                                                        d = null;
                                                    t: for (;;) {
                                                        for (
                                                            var p;
                                                            f !== n ||
                                                                (0 !== l &&
                                                                    3 !==
                                                                        f.nodeType) ||
                                                                (i = a + l),
                                                                f !== o ||
                                                                    (0 !== r &&
                                                                        3 !==
                                                                            f.nodeType) ||
                                                                    (u = a + r),
                                                                3 ===
                                                                    f.nodeType &&
                                                                    (a +=
                                                                        f
                                                                            .nodeValue
                                                                            .length),
                                                                null !==
                                                                    (p =
                                                                        f.firstChild);

                                                        )
                                                            (d = f), (f = p);
                                                        for (;;) {
                                                            if (f === e)
                                                                break t;
                                                            if (
                                                                (d === n &&
                                                                    ++s === l &&
                                                                    (i = a),
                                                                d === o &&
                                                                    ++c === r &&
                                                                    (u = a),
                                                                null !==
                                                                    (p =
                                                                        f.nextSibling))
                                                            )
                                                                break;
                                                            d = (f = d)
                                                                .parentNode;
                                                        }
                                                        f = p;
                                                    }
                                                    n =
                                                        -1 === i || -1 === u
                                                            ? null
                                                            : {
                                                                  start: i,
                                                                  end: u
                                                              };
                                                } else n = null;
                                            }
                                        n = n || { start: 0, end: 0 };
                                    } else n = null;
                                    for (
                                        hl = {
                                            focusedElem: e,
                                            selectionRange: n
                                        },
                                            rn = !1,
                                            fu = t;
                                        null !== fu;

                                    )
                                        if (
                                            ((e = (t = fu).child),
                                            0 != (1028 & t.subtreeFlags) &&
                                                null !== e)
                                        )
                                            (e.return = t), (fu = e);
                                        else
                                            for (; null !== fu; ) {
                                                t = fu;
                                                try {
                                                    var h = t.alternate;
                                                    if (0 != (1024 & t.flags))
                                                        switch (t.tag) {
                                                            case 0:
                                                            case 11:
                                                            case 15:
                                                            case 5:
                                                            case 6:
                                                            case 4:
                                                            case 17:
                                                                break;
                                                            case 1:
                                                                if (
                                                                    null !== h
                                                                ) {
                                                                    var m =
                                                                            h.memoizedProps,
                                                                        g =
                                                                            h.memoizedState,
                                                                        y =
                                                                            t.stateNode,
                                                                        b =
                                                                            y.getSnapshotBeforeUpdate(
                                                                                t.elementType ===
                                                                                    t.type
                                                                                    ? m
                                                                                    : _o(
                                                                                          t.type,
                                                                                          m
                                                                                      ),
                                                                                g
                                                                            );
                                                                    y.__reactInternalSnapshotBeforeUpdate =
                                                                        b;
                                                                }
                                                                break;
                                                            case 3:
                                                                var k =
                                                                    t.stateNode
                                                                        .containerInfo;
                                                                1 === k.nodeType
                                                                    ? (k.textContent =
                                                                          "")
                                                                    : 9 ===
                                                                          k.nodeType &&
                                                                      k.documentElement &&
                                                                      k.removeChild(
                                                                          k.documentElement
                                                                      );
                                                                break;
                                                            default:
                                                                throw Error(
                                                                    v(163)
                                                                );
                                                        }
                                                } catch (e) {
                                                    Is(t, t.return, e);
                                                }
                                                if (null !== (e = t.sibling)) {
                                                    (e.return = t.return),
                                                        (fu = e);
                                                    break;
                                                }
                                                fu = t.return;
                                            }
                                    (h = hu), (hu = !1);
                                })(e, n),
                                Pu(n, e),
                                Tr(hl),
                                (rn = !!pl),
                                (hl = pl = null),
                                (e.current = n),
                                Du(n, e, l),
                                st(),
                                (qu = i),
                                (Ft = a),
                                (Uu.transition = o);
                        } else e.current = n;
                        if (
                            (as && ((as = !1), (is = e), (us = l)),
                            (o = e.pendingLanes),
                            0 === o && (os = null),
                            (function (e) {
                                if (
                                    vt &&
                                    "function" == typeof vt.onCommitFiberRoot
                                )
                                    try {
                                        vt.onCommitFiberRoot(
                                            yt,
                                            e,
                                            void 0,
                                            128 == (128 & e.current.flags)
                                        );
                                    } catch (e) {}
                            })(n.stateNode),
                            gs(e, ct()),
                            null !== t)
                        )
                            for (
                                r = e.onRecoverableError, n = 0;
                                n < t.length;
                                n++
                            )
                                (l = t[n]),
                                    r(l.value, {
                                        componentStack: l.stack,
                                        digest: l.digest
                                    });
                        if (rs) throw ((rs = !1), (e = ls), (ls = null), e);
                        0 != (1 & us) && 0 !== e.tag && zs(),
                            (o = e.pendingLanes),
                            0 != (1 & o)
                                ? e === cs
                                    ? ss++
                                    : ((ss = 0), (cs = e))
                                : (ss = 0),
                            to();
                    })(e, t, n, r);
            } finally {
                (Uu.transition = l), (Ft = r);
            }
            return null;
        }
        function zs() {
            if (null !== is) {
                var e = At(us),
                    t = Uu.transition,
                    n = Ft;
                try {
                    if (
                        ((Uu.transition = null),
                        (Ft = 16 > e ? 16 : e),
                        null === is)
                    )
                        var r = !1;
                    else {
                        if (((e = is), (is = null), (us = 0), 0 != (6 & qu)))
                            throw Error(v(331));
                        var l = qu;
                        for (qu |= 4, fu = e.current; null !== fu; ) {
                            var o = fu,
                                a = o.child;
                            if (0 != (16 & fu.flags)) {
                                var i = o.deletions;
                                if (null !== i) {
                                    for (var u = 0; u < i.length; u++) {
                                        var s = i[u];
                                        for (fu = s; null !== fu; ) {
                                            var c = fu;
                                            switch (c.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    mu(8, c, o);
                                            }
                                            var f = c.child;
                                            if (null !== f)
                                                (f.return = c), (fu = f);
                                            else
                                                for (; null !== fu; ) {
                                                    var d = (c = fu).sibling,
                                                        p = c.return;
                                                    if ((vu(c), c === s)) {
                                                        fu = null;
                                                        break;
                                                    }
                                                    if (null !== d) {
                                                        (d.return = p),
                                                            (fu = d);
                                                        break;
                                                    }
                                                    fu = p;
                                                }
                                        }
                                    }
                                    var h = o.alternate;
                                    if (null !== h) {
                                        var m = h.child;
                                        if (null !== m) {
                                            h.child = null;
                                            do {
                                                var g = m.sibling;
                                                (m.sibling = null), (m = g);
                                            } while (null !== m);
                                        }
                                    }
                                    fu = o;
                                }
                            }
                            if (0 != (2064 & o.subtreeFlags) && null !== a)
                                (a.return = o), (fu = a);
                            else
                                e: for (; null !== fu; ) {
                                    if (0 != (2048 & (o = fu).flags))
                                        switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                mu(9, o, o.return);
                                        }
                                    var y = o.sibling;
                                    if (null !== y) {
                                        (y.return = o.return), (fu = y);
                                        break e;
                                    }
                                    fu = o.return;
                                }
                        }
                        var b = e.current;
                        for (fu = b; null !== fu; ) {
                            var k = (a = fu).child;
                            if (0 != (2064 & a.subtreeFlags) && null !== k)
                                (k.return = a), (fu = k);
                            else
                                e: for (a = b; null !== fu; ) {
                                    if (0 != (2048 & (i = fu).flags))
                                        try {
                                            switch (i.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    gu(9, i);
                                            }
                                        } catch (e) {
                                            Is(i, i.return, e);
                                        }
                                    if (i === a) {
                                        fu = null;
                                        break e;
                                    }
                                    var x = i.sibling;
                                    if (null !== x) {
                                        (x.return = i.return), (fu = x);
                                        break e;
                                    }
                                    fu = i.return;
                                }
                        }
                        if (
                            ((qu = l),
                            to(),
                            vt && "function" == typeof vt.onPostCommitFiberRoot)
                        )
                            try {
                                vt.onPostCommitFiberRoot(yt, e);
                            } catch (e) {}
                        r = !0;
                    }
                    return r;
                } finally {
                    (Ft = n), (Uu.transition = t);
                }
            }
            return !1;
        }
        function Os(e, t, n) {
            (e = Go(e, (t = Ti(0, (t = Si(n, t)), 1)), 1)),
                (t = ps()),
                null !== e && (_t(e, 1, t), gs(e, t));
        }
        function Is(e, t, n) {
            if (3 === e.tag) Os(e, e, n);
            else
                for (; null !== t; ) {
                    if (3 === t.tag) {
                        Os(t, e, n);
                        break;
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if (
                            "function" ==
                                typeof t.type.getDerivedStateFromError ||
                            ("function" == typeof r.componentDidCatch &&
                                (null === os || !os.has(r)))
                        ) {
                            (t = Go(t, (e = Ni(t, (e = Si(n, e)), 1)), 1)),
                                (e = ps()),
                                null !== t && (_t(t, 1, e), gs(t, e));
                            break;
                        }
                    }
                    t = t.return;
                }
        }
        function js(e, t, n) {
            var r = e.pingCache;
            null !== r && r.delete(t),
                (t = ps()),
                (e.pingedLanes |= e.suspendedLanes & n),
                Bu === e &&
                    (Hu & n) === n &&
                    (4 === Qu ||
                    (3 === Qu && (130023424 & Hu) === Hu && 500 > ct() - es)
                        ? Cs(e, 0)
                        : (Xu |= n)),
                gs(e, t);
        }
        function Ms(e, t) {
            0 === t &&
                (0 == (1 & e.mode)
                    ? (t = 1)
                    : ((t = St),
                      0 == (130023424 & (St <<= 1)) && (St = 4194304)));
            var n = ps();
            null !== (e = Vo(e, t)) && (_t(e, t, n), gs(e, n));
        }
        function Us(e) {
            var t = e.memoizedState,
                n = 0;
            null !== t && (n = t.retryLane), Ms(e, n);
        }
        function qs(e, t) {
            var n = 0;
            switch (e.tag) {
                case 13:
                    var r = e.stateNode,
                        l = e.memoizedState;
                    null !== l && (n = l.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(v(314));
            }
            null !== r && r.delete(t), Ms(e, n);
        }
        function Bs(e, t) {
            return at(e, t);
        }
        function Vs(e, t, n, r) {
            (this.tag = e),
                (this.key = n),
                (this.sibling =
                    this.child =
                    this.return =
                    this.stateNode =
                    this.type =
                    this.elementType =
                        null),
                (this.index = 0),
                (this.ref = null),
                (this.pendingProps = t),
                (this.dependencies =
                    this.memoizedState =
                    this.updateQueue =
                    this.memoizedProps =
                        null),
                (this.mode = r),
                (this.subtreeFlags = this.flags = 0),
                (this.deletions = null),
                (this.childLanes = this.lanes = 0),
                (this.alternate = null);
        }
        function Hs(e, t, n, r) {
            return new Vs(e, t, n, r);
        }
        function $s(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ws(e, t) {
            var n = e.alternate;
            return (
                null === n
                    ? (((n = Hs(e.tag, t, e.key, e.mode)).elementType =
                          e.elementType),
                      (n.type = e.type),
                      (n.stateNode = e.stateNode),
                      (n.alternate = e),
                      (e.alternate = n))
                    : ((n.pendingProps = t),
                      (n.type = e.type),
                      (n.flags = 0),
                      (n.subtreeFlags = 0),
                      (n.deletions = null)),
                (n.flags = 14680064 & e.flags),
                (n.childLanes = e.childLanes),
                (n.lanes = e.lanes),
                (n.child = e.child),
                (n.memoizedProps = e.memoizedProps),
                (n.memoizedState = e.memoizedState),
                (n.updateQueue = e.updateQueue),
                (t = e.dependencies),
                (n.dependencies =
                    null === t
                        ? null
                        : { lanes: t.lanes, firstContext: t.firstContext }),
                (n.sibling = e.sibling),
                (n.index = e.index),
                (n.ref = e.ref),
                n
            );
        }
        function Qs(e, t, n, r, l, o) {
            var a = 2;
            if (((r = e), "function" == typeof e)) $s(e) && (a = 1);
            else if ("string" == typeof e) a = 5;
            else
                e: switch (e) {
                    case O:
                        return Gs(n.children, l, o, t);
                    case I:
                        (a = 8), (l |= 8);
                        break;
                    case j:
                        return (
                            ((e = Hs(12, n, t, 2 | l)).elementType = j),
                            (e.lanes = o),
                            e
                        );
                    case B:
                        return (
                            ((e = Hs(13, n, t, l)).elementType = B),
                            (e.lanes = o),
                            e
                        );
                    case V:
                        return (
                            ((e = Hs(19, n, t, l)).elementType = V),
                            (e.lanes = o),
                            e
                        );
                    case W:
                        return Ys(n, l, o, t);
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                                case M:
                                    a = 10;
                                    break e;
                                case U:
                                    a = 9;
                                    break e;
                                case q:
                                    a = 11;
                                    break e;
                                case H:
                                    a = 14;
                                    break e;
                                case $:
                                    (a = 16), (r = null);
                                    break e;
                            }
                        throw Error(v(130, null == e ? e : typeof e, ""));
                }
            return (
                ((t = Hs(a, n, t, l)).elementType = e),
                (t.type = r),
                (t.lanes = o),
                t
            );
        }
        function Gs(e, t, n, r) {
            return ((e = Hs(7, e, r, t)).lanes = n), e;
        }
        function Ys(e, t, n, r) {
            return (
                ((e = Hs(22, e, r, t)).elementType = W),
                (e.lanes = n),
                (e.stateNode = { isHidden: !1 }),
                e
            );
        }
        function Ks(e, t, n) {
            return ((e = Hs(6, e, null, t)).lanes = n), e;
        }
        function Xs(e, t, n) {
            return (
                ((t = Hs(
                    4,
                    null !== e.children ? e.children : [],
                    e.key,
                    t
                )).lanes = n),
                (t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }),
                t
            );
        }
        function Js(e, t, n, r, l) {
            (this.tag = t),
                (this.containerInfo = e),
                (this.finishedWork =
                    this.pingCache =
                    this.current =
                    this.pendingChildren =
                        null),
                (this.timeoutHandle = -1),
                (this.callbackNode = this.pendingContext = this.context = null),
                (this.callbackPriority = 0),
                (this.eventTimes = Pt(0)),
                (this.expirationTimes = Pt(-1)),
                (this.entangledLanes =
                    this.finishedLanes =
                    this.mutableReadLanes =
                    this.expiredLanes =
                    this.pingedLanes =
                    this.suspendedLanes =
                    this.pendingLanes =
                        0),
                (this.entanglements = Pt(0)),
                (this.identifierPrefix = r),
                (this.onRecoverableError = l),
                (this.mutableSourceEagerHydrationData = null);
        }
        function Zs(e, t, n, r, l, o, a, i, u) {
            return (
                (e = new Js(e, t, n, i, u)),
                1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
                (o = Hs(3, null, null, t)),
                (e.current = o),
                (o.stateNode = e),
                (o.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }),
                $o(o),
                e
            );
        }
        function ec(e, t, n) {
            var r =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
            return {
                $$typeof: z,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            };
        }
        function tc(e) {
            if (!e) return Ul;
            e: {
                if (tt((e = e._reactInternals)) !== e || 1 !== e.tag)
                    throw Error(v(170));
                var t = e;
                do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if ($l(t.type)) {
                                t =
                                    t.stateNode
                                        .__reactInternalMemoizedMergedChildContext;
                                break e;
                            }
                    }
                    t = t.return;
                } while (null !== t);
                throw Error(v(171));
            }
            if (1 === e.tag) {
                var n = e.type;
                if ($l(n)) return Gl(e, n, t);
            }
            return t;
        }
        function nc(e, t, n, r, l, o, a, i, u) {
            return (
                ((e = Zs(n, r, !0, e, 0, o, 0, i, u)).context = tc(null)),
                (n = e.current),
                ((o = Qo((r = ps()), (l = hs(n)))).callback =
                    null != t ? t : null),
                Go(n, o, l),
                (e.current.lanes = l),
                _t(e, l, r),
                gs(e, r),
                e
            );
        }
        function rc(e, t, n, r) {
            var l = t.current,
                o = ps(),
                a = hs(l);
            return (
                (n = tc(n)),
                null === t.context ? (t.context = n) : (t.pendingContext = n),
                ((t = Qo(o, a)).payload = { element: e }),
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                null !== (e = Go(l, t, a)) && (ms(e, l, a, o), Yo(e, l, a)),
                a
            );
        }
        function lc(e) {
            return (e = e.current).child
                ? (e.child.tag, e.child.stateNode)
                : null;
        }
        function oc(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                var n = e.retryLane;
                e.retryLane = 0 !== n && n < t ? n : t;
            }
        }
        function ac(e, t) {
            oc(e, t), (e = e.alternate) && oc(e, t);
        }
        Ou = function (e, t, n) {
            if (null !== e)
                if (e.memoizedProps !== t.pendingProps || Bl.current) Ai = !0;
                else {
                    if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                        return (
                            (Ai = !1),
                            (function (e, t, n) {
                                switch (t.tag) {
                                    case 3:
                                        Vi(t), To();
                                        break;
                                    case 5:
                                        ba(t);
                                        break;
                                    case 1:
                                        $l(t.type) && Yl(t);
                                        break;
                                    case 4:
                                        ya(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        var r = t.type._context,
                                            l = t.memoizedProps.value;
                                        Ml(Do, r._currentValue),
                                            (r._currentValue = l);
                                        break;
                                    case 13:
                                        if (null !== (r = t.memoizedState))
                                            return null !== r.dehydrated
                                                ? (Ml(xa, 1 & xa.current),
                                                  (t.flags |= 128),
                                                  null)
                                                : 0 != (n & t.child.childLanes)
                                                ? Ki(e, t, n)
                                                : (Ml(xa, 1 & xa.current),
                                                  null !== (e = ru(e, t, n))
                                                      ? e.sibling
                                                      : null);
                                        Ml(xa, 1 & xa.current);
                                        break;
                                    case 19:
                                        if (
                                            ((r = 0 != (n & t.childLanes)),
                                            0 != (128 & e.flags))
                                        ) {
                                            if (r) return tu(e, t, n);
                                            t.flags |= 128;
                                        }
                                        if (
                                            (null !== (l = t.memoizedState) &&
                                                ((l.rendering = null),
                                                (l.tail = null),
                                                (l.lastEffect = null)),
                                            Ml(xa, xa.current),
                                            r)
                                        )
                                            break;
                                        return null;
                                    case 22:
                                    case 23:
                                        return (t.lanes = 0), ji(e, t, n);
                                }
                                return ru(e, t, n);
                            })(e, t, n)
                        );
                    Ai = 0 != (131072 & e.flags);
                }
            else
                (Ai = !1), vo && 0 != (1048576 & t.flags) && po(t, oo, t.index);
            switch (((t.lanes = 0), t.tag)) {
                case 2:
                    var r = t.type;
                    nu(e, t), (e = t.pendingProps);
                    var l = Hl(t, ql.current);
                    jo(t, n), (l = Ia(null, t, r, e, l, n));
                    var o = ja();
                    return (
                        (t.flags |= 1),
                        "object" == typeof l &&
                        null !== l &&
                        "function" == typeof l.render &&
                        void 0 === l.$$typeof
                            ? ((t.tag = 1),
                              (t.memoizedState = null),
                              (t.updateQueue = null),
                              $l(r) ? ((o = !0), Yl(t)) : (o = !1),
                              (t.memoizedState =
                                  null !== l.state && void 0 !== l.state
                                      ? l.state
                                      : null),
                              $o(t),
                              (l.updater = ta),
                              (t.stateNode = l),
                              (l._reactInternals = t),
                              oa(t, r, e, n),
                              (t = Bi(null, t, r, !0, o, n)))
                            : ((t.tag = 0),
                              vo && o && ho(t),
                              Ri(null, t, l, n),
                              (t = t.child)),
                        t
                    );
                case 16:
                    r = t.elementType;
                    e: {
                        switch (
                            (nu(e, t),
                            (e = t.pendingProps),
                            (r = (l = r._init)(r._payload)),
                            (t.type = r),
                            (l = t.tag =
                                (function (e) {
                                    if ("function" == typeof e)
                                        return $s(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === q) return 11;
                                        if (e === H) return 14;
                                    }
                                    return 2;
                                })(r)),
                            (e = _o(r, e)),
                            l)
                        ) {
                            case 0:
                                t = Ui(null, t, r, e, n);
                                break e;
                            case 1:
                                t = qi(null, t, r, e, n);
                                break e;
                            case 11:
                                t = zi(null, t, r, e, n);
                                break e;
                            case 14:
                                t = Oi(null, t, r, _o(r.type, e), n);
                                break e;
                        }
                        throw Error(v(306, r, ""));
                    }
                    return t;
                case 0:
                    return (
                        (r = t.type),
                        (l = t.pendingProps),
                        Ui(e, t, r, (l = t.elementType === r ? l : _o(r, l)), n)
                    );
                case 1:
                    return (
                        (r = t.type),
                        (l = t.pendingProps),
                        qi(e, t, r, (l = t.elementType === r ? l : _o(r, l)), n)
                    );
                case 3:
                    e: {
                        if ((Vi(t), null === e)) throw Error(v(387));
                        (r = t.pendingProps),
                            (l = (o = t.memoizedState).element),
                            Wo(e, t),
                            Xo(t, r, null, n);
                        var a = t.memoizedState;
                        if (((r = a.element), o.isDehydrated)) {
                            if (
                                ((o = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: a.cache,
                                    pendingSuspenseBoundaries:
                                        a.pendingSuspenseBoundaries,
                                    transitions: a.transitions
                                }),
                                (t.updateQueue.baseState = o),
                                (t.memoizedState = o),
                                256 & t.flags)
                            ) {
                                t = Hi(e, t, r, n, (l = Si(Error(v(423)), t)));
                                break e;
                            }
                            if (r !== l) {
                                t = Hi(e, t, r, n, (l = Si(Error(v(424)), t)));
                                break e;
                            }
                            for (
                                yo = wl(t.stateNode.containerInfo.firstChild),
                                    go = t,
                                    vo = !0,
                                    bo = null,
                                    n = fa(t, null, r, n),
                                    t.child = n;
                                n;

                            )
                                (n.flags = (-3 & n.flags) | 4096),
                                    (n = n.sibling);
                        } else {
                            if ((To(), r === l)) {
                                t = ru(e, t, n);
                                break e;
                            }
                            Ri(e, t, r, n);
                        }
                        t = t.child;
                    }
                    return t;
                case 5:
                    return (
                        ba(t),
                        null === e && So(t),
                        (r = t.type),
                        (l = t.pendingProps),
                        (o = null !== e ? e.memoizedProps : null),
                        (a = l.children),
                        ml(r, l)
                            ? (a = null)
                            : null !== o && ml(r, o) && (t.flags |= 32),
                        Mi(e, t),
                        Ri(e, t, a, n),
                        t.child
                    );
                case 6:
                    return null === e && So(t), null;
                case 13:
                    return Ki(e, t, n);
                case 4:
                    return (
                        ya(t, t.stateNode.containerInfo),
                        (r = t.pendingProps),
                        null === e
                            ? (t.child = ca(t, null, r, n))
                            : Ri(e, t, r, n),
                        t.child
                    );
                case 11:
                    return (
                        (r = t.type),
                        (l = t.pendingProps),
                        zi(e, t, r, (l = t.elementType === r ? l : _o(r, l)), n)
                    );
                case 7:
                    return Ri(e, t, t.pendingProps, n), t.child;
                case 8:
                case 12:
                    return Ri(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    e: {
                        if (
                            ((r = t.type._context),
                            (l = t.pendingProps),
                            (o = t.memoizedProps),
                            (a = l.value),
                            Ml(Do, r._currentValue),
                            (r._currentValue = a),
                            null !== o)
                        )
                            if (kr(o.value, a)) {
                                if (o.children === l.children && !Bl.current) {
                                    t = ru(e, t, n);
                                    break e;
                                }
                            } else
                                for (
                                    null !== (o = t.child) && (o.return = t);
                                    null !== o;

                                ) {
                                    var i = o.dependencies;
                                    if (null !== i) {
                                        a = o.child;
                                        for (
                                            var u = i.firstContext;
                                            null !== u;

                                        ) {
                                            if (u.context === r) {
                                                if (1 === o.tag) {
                                                    (u = Qo(
                                                        -1,
                                                        n & -n
                                                    )).tag = 2;
                                                    var s = o.updateQueue;
                                                    if (null !== s) {
                                                        var c = (s = s.shared)
                                                            .pending;
                                                        null === c
                                                            ? (u.next = u)
                                                            : ((u.next =
                                                                  c.next),
                                                              (c.next = u)),
                                                            (s.pending = u);
                                                    }
                                                }
                                                (o.lanes |= n),
                                                    null !==
                                                        (u = o.alternate) &&
                                                        (u.lanes |= n),
                                                    Io(o.return, n, t),
                                                    (i.lanes |= n);
                                                break;
                                            }
                                            u = u.next;
                                        }
                                    } else if (10 === o.tag)
                                        a = o.type === t.type ? null : o.child;
                                    else if (18 === o.tag) {
                                        if (null === (a = o.return))
                                            throw Error(v(341));
                                        (a.lanes |= n),
                                            null !== (i = a.alternate) &&
                                                (i.lanes |= n),
                                            Io(a, n, t),
                                            (a = o.sibling);
                                    } else a = o.child;
                                    if (null !== a) a.return = o;
                                    else
                                        for (a = o; null !== a; ) {
                                            if (a === t) {
                                                a = null;
                                                break;
                                            }
                                            if (null !== (o = a.sibling)) {
                                                (o.return = a.return), (a = o);
                                                break;
                                            }
                                            a = a.return;
                                        }
                                    o = a;
                                }
                        Ri(e, t, l.children, n), (t = t.child);
                    }
                    return t;
                case 9:
                    return (
                        (l = t.type),
                        (r = t.pendingProps.children),
                        jo(t, n),
                        (r = r((l = Mo(l)))),
                        (t.flags |= 1),
                        Ri(e, t, r, n),
                        t.child
                    );
                case 14:
                    return (
                        (l = _o((r = t.type), t.pendingProps)),
                        Oi(e, t, r, (l = _o(r.type, l)), n)
                    );
                case 15:
                    return Ii(e, t, t.type, t.pendingProps, n);
                case 17:
                    return (
                        (r = t.type),
                        (l = t.pendingProps),
                        (l = t.elementType === r ? l : _o(r, l)),
                        nu(e, t),
                        (t.tag = 1),
                        $l(r) ? ((e = !0), Yl(t)) : (e = !1),
                        jo(t, n),
                        ra(t, r, l),
                        oa(t, r, l, n),
                        Bi(null, t, r, !0, e, n)
                    );
                case 19:
                    return tu(e, t, n);
                case 22:
                    return ji(e, t, n);
            }
            throw Error(v(156, t.tag));
        };
        var ic =
            "function" == typeof reportError
                ? reportError
                : function (e) {
                      console.error(e);
                  };
        function uc(e) {
            this._internalRoot = e;
        }
        function sc(e) {
            this._internalRoot = e;
        }
        function cc(e) {
            return !(
                !e ||
                (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            );
        }
        function fc(e) {
            return !(
                !e ||
                (1 !== e.nodeType &&
                    9 !== e.nodeType &&
                    11 !== e.nodeType &&
                    (8 !== e.nodeType ||
                        " react-mount-point-unstable " !== e.nodeValue))
            );
        }
        function dc() {}
        function pc(e, t, n, r, l) {
            var o = n._reactRootContainer;
            if (o) {
                var a = o;
                if ("function" == typeof l) {
                    var i = l;
                    l = function () {
                        var e = lc(a);
                        i.call(e);
                    };
                }
                rc(t, a, e, l);
            } else
                a = (function (e, t, n, r, l) {
                    if (l) {
                        if ("function" == typeof r) {
                            var o = r;
                            r = function () {
                                var e = lc(a);
                                o.call(e);
                            };
                        }
                        var a = nc(t, r, e, 0, null, !1, 0, "", dc);
                        return (
                            (e._reactRootContainer = a),
                            (e[Tl] = a.current),
                            tl(8 === e.nodeType ? e.parentNode : e),
                            Ss(),
                            a
                        );
                    }
                    for (; (l = e.lastChild); ) e.removeChild(l);
                    if ("function" == typeof r) {
                        var i = r;
                        r = function () {
                            var e = lc(u);
                            i.call(e);
                        };
                    }
                    var u = Zs(e, 0, !1, null, 0, !1, 0, "", dc);
                    return (
                        (e._reactRootContainer = u),
                        (e[Tl] = u.current),
                        tl(8 === e.nodeType ? e.parentNode : e),
                        Ss(function () {
                            rc(t, u, n, r);
                        }),
                        u
                    );
                })(n, t, e, l, r);
            return lc(a);
        }
        (sc.prototype.render = uc.prototype.render =
            function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(v(409));
                rc(e, t, null, null);
            }),
            (sc.prototype.unmount = uc.prototype.unmount =
                function () {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        Ss(function () {
                            rc(null, e, null, null);
                        }),
                            (t[Tl] = null);
                    }
                }),
            (sc.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = It();
                    e = { blockedOn: null, target: e, priority: t };
                    for (
                        var n = 0;
                        n < Wt.length && 0 !== t && t < Wt[n].priority;
                        n++
                    );
                    Wt.splice(n, 0, e), 0 === n && Kt(e);
                }
            }),
            (Rt = function (e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = Et(t.pendingLanes);
                            0 !== n &&
                                (Dt(t, 1 | n),
                                gs(t, ct()),
                                0 == (6 & qu) && ((ts = ct() + 500), to()));
                        }
                        break;
                    case 13:
                        Ss(function () {
                            var t = Vo(e, 1);
                            if (null !== t) {
                                var n = ps();
                                ms(t, e, 1, n);
                            }
                        }),
                            ac(e, 1);
                }
            }),
            (zt = function (e) {
                if (13 === e.tag) {
                    var t = Vo(e, 134217728);
                    if (null !== t) ms(t, e, 134217728, ps());
                    ac(e, 134217728);
                }
            }),
            (Ot = function (e) {
                if (13 === e.tag) {
                    var t = hs(e),
                        n = Vo(e, t);
                    if (null !== n) ms(n, e, t, ps());
                    ac(e, t);
                }
            }),
            (It = function () {
                return Ft;
            }),
            (jt = function (e, t) {
                var n = Ft;
                try {
                    return (Ft = e), t();
                } finally {
                    Ft = n;
                }
            }),
            (ze = function (e, t, n) {
                switch (t) {
                    case "input":
                        if (
                            (fe(e, n),
                            (t = n.name),
                            "radio" === n.type && null != t)
                        ) {
                            for (n = e; n.parentNode; ) n = n.parentNode;
                            for (
                                n = n.querySelectorAll(
                                    "input[name=" +
                                        JSON.stringify("" + t) +
                                        '][type="radio"]'
                                ),
                                    t = 0;
                                t < n.length;
                                t++
                            ) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var l = Rl(r);
                                    if (!l) throw Error(v(90));
                                    ae(r), fe(r, l);
                                }
                            }
                        }
                        break;
                    case "textarea":
                        ve(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && me(e, !!n.multiple, t, !1);
                }
            }),
            (qe = ws),
            (Be = Ss);
        var hc = {
                usingClientEntryPoint: !1,
                Events: [Fl, Al, Rl, Me, Ue, ws]
            },
            mc = {
                findFiberByHostInstance: Dl,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            },
            gc = {
                bundleType: mc.bundleType,
                version: mc.version,
                rendererPackageName: mc.rendererPackageName,
                rendererConfig: mc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: A.ReactCurrentDispatcher,
                findHostInstanceByFiber: function (e) {
                    return null === (e = lt(e)) ? null : e.stateNode;
                },
                findFiberByHostInstance:
                    mc.findFiberByHostInstance ||
                    function () {
                        return null;
                    },
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var yc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!yc.isDisabled && yc.supportsFiber)
                try {
                    (yt = yc.inject(gc)), (vt = yc);
                } catch (e) {}
        }
        (r = hc),
            (l = function (e, t) {
                var n =
                    2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                if (!cc(t)) throw Error(v(200));
                return ec(e, t, null, n);
            }),
            (a = function (e, t) {
                if (!cc(e)) throw Error(v(299));
                var n = !1,
                    r = "",
                    l = ic;
                return (
                    null != t &&
                        (!0 === t.unstable_strictMode && (n = !0),
                        void 0 !== t.identifierPrefix &&
                            (r = t.identifierPrefix),
                        void 0 !== t.onRecoverableError &&
                            (l = t.onRecoverableError)),
                    (t = Zs(e, 1, !1, null, 0, n, 0, r, l)),
                    (e[Tl] = t.current),
                    tl(8 === e.nodeType ? e.parentNode : e),
                    new uc(t)
                );
            }),
            (i = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(v(188));
                    throw ((e = Object.keys(e).join(",")), Error(v(268, e)));
                }
                return (e = null === (e = lt(t)) ? null : e.stateNode);
            }),
            (u = function (e) {
                return Ss(e);
            }),
            (s = function (e, t, n) {
                if (!fc(t)) throw Error(v(200));
                return pc(null, e, t, !0, n);
            }),
            (c = function (e, t, n) {
                if (!cc(e)) throw Error(v(405));
                var r = (null != n && n.hydratedSources) || null,
                    l = !1,
                    o = "",
                    a = ic;
                if (
                    (null != n &&
                        (!0 === n.unstable_strictMode && (l = !0),
                        void 0 !== n.identifierPrefix &&
                            (o = n.identifierPrefix),
                        void 0 !== n.onRecoverableError &&
                            (a = n.onRecoverableError)),
                    (t = nc(t, null, e, 1, null != n ? n : null, l, 0, o, a)),
                    (e[Tl] = t.current),
                    tl(e),
                    r)
                )
                    for (e = 0; e < r.length; e++)
                        (l = (l = (n = r[e])._getVersion)(n._source)),
                            null == t.mutableSourceEagerHydrationData
                                ? (t.mutableSourceEagerHydrationData = [n, l])
                                : t.mutableSourceEagerHydrationData.push(n, l);
                return new sc(t);
            }),
            (f = function (e, t, n) {
                if (!fc(t)) throw Error(v(200));
                return pc(null, e, t, !1, n);
            }),
            (d = function (e) {
                if (!fc(e)) throw Error(v(40));
                return (
                    !!e._reactRootContainer &&
                    (Ss(function () {
                        pc(null, null, e, !1, function () {
                            (e._reactRootContainer = null), (e[Tl] = null);
                        });
                    }),
                    !0)
                );
            }),
            (p = ws),
            (h = function (e, t, n, r) {
                if (!fc(n)) throw Error(v(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(v(38));
                return pc(e, t, n, !1, r);
            }),
            (m = "18.2.0-next-9e3b772b8-20220608");
    }),
    o.register("6qr1r", function (e, t) {
        e.exports = o("7vgeW");
    }),
    o.register("7vgeW", function (t, n) {
        /**
         * @license React
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r, l, o, a, i, u, s, c, f, d, p, h, m, g, y, v, b, k, x;
        function w(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n; ) {
                var r = (n - 1) >>> 1,
                    l = e[r];
                if (!(0 < C(l, t))) break e;
                (e[r] = t), (e[n] = l), (n = r);
            }
        }
        function S(e) {
            return 0 === e.length ? null : e[0];
        }
        function E(e) {
            if (0 === e.length) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, l = e.length, o = l >>> 1; r < o; ) {
                    var a = 2 * (r + 1) - 1,
                        i = e[a],
                        u = a + 1,
                        s = e[u];
                    if (0 > C(i, n))
                        u < l && 0 > C(s, i)
                            ? ((e[r] = s), (e[u] = n), (r = u))
                            : ((e[r] = i), (e[a] = n), (r = a));
                    else {
                        if (!(u < l && 0 > C(s, n))) break e;
                        (e[r] = s), (e[u] = n), (r = u);
                    }
                }
            }
            return t;
        }
        function C(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id;
        }
        if (
            (e(
                t.exports,
                "unstable_now",
                () => r,
                (e) => (r = e)
            ),
            e(
                t.exports,
                "unstable_IdlePriority",
                () => l,
                (e) => (l = e)
            ),
            e(
                t.exports,
                "unstable_ImmediatePriority",
                () => o,
                (e) => (o = e)
            ),
            e(
                t.exports,
                "unstable_LowPriority",
                () => a,
                (e) => (a = e)
            ),
            e(
                t.exports,
                "unstable_NormalPriority",
                () => i,
                (e) => (i = e)
            ),
            e(
                t.exports,
                "unstable_Profiling",
                () => u,
                (e) => (u = e)
            ),
            e(
                t.exports,
                "unstable_UserBlockingPriority",
                () => s,
                (e) => (s = e)
            ),
            e(
                t.exports,
                "unstable_cancelCallback",
                () => c,
                (e) => (c = e)
            ),
            e(
                t.exports,
                "unstable_continueExecution",
                () => f,
                (e) => (f = e)
            ),
            e(
                t.exports,
                "unstable_forceFrameRate",
                () => d,
                (e) => (d = e)
            ),
            e(
                t.exports,
                "unstable_getCurrentPriorityLevel",
                () => p,
                (e) => (p = e)
            ),
            e(
                t.exports,
                "unstable_getFirstCallbackNode",
                () => h,
                (e) => (h = e)
            ),
            e(
                t.exports,
                "unstable_next",
                () => m,
                (e) => (m = e)
            ),
            e(
                t.exports,
                "unstable_pauseExecution",
                () => g,
                (e) => (g = e)
            ),
            e(
                t.exports,
                "unstable_requestPaint",
                () => y,
                (e) => (y = e)
            ),
            e(
                t.exports,
                "unstable_runWithPriority",
                () => v,
                (e) => (v = e)
            ),
            e(
                t.exports,
                "unstable_scheduleCallback",
                () => b,
                (e) => (b = e)
            ),
            e(
                t.exports,
                "unstable_shouldYield",
                () => k,
                (e) => (k = e)
            ),
            e(
                t.exports,
                "unstable_wrapCallback",
                () => x,
                (e) => (x = e)
            ),
            "object" == typeof performance &&
                "function" == typeof performance.now)
        ) {
            var L = performance;
            r = function () {
                return L.now();
            };
        } else {
            var T = Date,
                N = T.now();
            r = function () {
                return T.now() - N;
            };
        }
        var P = [],
            _ = [],
            D = 1,
            F = null,
            A = 3,
            R = !1,
            z = !1,
            O = !1,
            I = "function" == typeof setTimeout ? setTimeout : null,
            j = "function" == typeof clearTimeout ? clearTimeout : null,
            M = "undefined" != typeof setImmediate ? setImmediate : null;
        function U(e) {
            for (var t = S(_); null !== t; ) {
                if (null === t.callback) E(_);
                else {
                    if (!(t.startTime <= e)) break;
                    E(_), (t.sortIndex = t.expirationTime), w(P, t);
                }
                t = S(_);
            }
        }
        function q(e) {
            if (((O = !1), U(e), !z))
                if (null !== S(P)) (z = !0), Z(B);
                else {
                    var t = S(_);
                    null !== t && ee(q, t.startTime - e);
                }
        }
        function B(e, t) {
            (z = !1), O && ((O = !1), j(W), (W = -1)), (R = !0);
            var n = A;
            try {
                for (
                    U(t), F = S(P);
                    null !== F && (!(F.expirationTime > t) || (e && !Y()));

                ) {
                    var l = F.callback;
                    if ("function" == typeof l) {
                        (F.callback = null), (A = F.priorityLevel);
                        var o = l(F.expirationTime <= t);
                        (t = r()),
                            "function" == typeof o
                                ? (F.callback = o)
                                : F === S(P) && E(P),
                            U(t);
                    } else E(P);
                    F = S(P);
                }
                if (null !== F) var a = !0;
                else {
                    var i = S(_);
                    null !== i && ee(q, i.startTime - t), (a = !1);
                }
                return a;
            } finally {
                (F = null), (A = n), (R = !1);
            }
        }
        "undefined" != typeof navigator &&
            void 0 !== navigator.scheduling &&
            void 0 !== navigator.scheduling.isInputPending &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var V,
            H = !1,
            $ = null,
            W = -1,
            Q = 5,
            G = -1;
        function Y() {
            return !(r() - G < Q);
        }
        function K() {
            if (null !== $) {
                var e = r();
                G = e;
                var t = !0;
                try {
                    t = $(!0, e);
                } finally {
                    t ? V() : ((H = !1), ($ = null));
                }
            } else H = !1;
        }
        if ("function" == typeof M)
            V = function () {
                M(K);
            };
        else if ("undefined" != typeof MessageChannel) {
            var X = new MessageChannel(),
                J = X.port2;
            (X.port1.onmessage = K),
                (V = function () {
                    J.postMessage(null);
                });
        } else
            V = function () {
                I(K, 0);
            };
        function Z(e) {
            ($ = e), H || ((H = !0), V());
        }
        function ee(e, t) {
            W = I(function () {
                e(r());
            }, t);
        }
        (l = 5),
            (o = 1),
            (a = 4),
            (i = 3),
            (u = null),
            (s = 2),
            (c = function (e) {
                e.callback = null;
            }),
            (f = function () {
                z || R || ((z = !0), Z(B));
            }),
            (d = function (e) {
                0 > e || 125 < e
                    ? console.error(
                          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                      )
                    : (Q = 0 < e ? Math.floor(1e3 / e) : 5);
            }),
            (p = function () {
                return A;
            }),
            (h = function () {
                return S(P);
            }),
            (m = function (e) {
                switch (A) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = A;
                }
                var n = A;
                A = t;
                try {
                    return e();
                } finally {
                    A = n;
                }
            }),
            (g = function () {}),
            (y = function () {}),
            (v = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3;
                }
                var n = A;
                A = e;
                try {
                    return t();
                } finally {
                    A = n;
                }
            }),
            (b = function (e, t, n) {
                var l = r();
                switch (
                    ("object" == typeof n && null !== n
                        ? (n =
                              "number" == typeof (n = n.delay) && 0 < n
                                  ? l + n
                                  : l)
                        : (n = l),
                    e)
                ) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3;
                }
                return (
                    (e = {
                        id: D++,
                        callback: t,
                        priorityLevel: e,
                        startTime: n,
                        expirationTime: (o = n + o),
                        sortIndex: -1
                    }),
                    n > l
                        ? ((e.sortIndex = n),
                          w(_, e),
                          null === S(P) &&
                              e === S(_) &&
                              (O ? (j(W), (W = -1)) : (O = !0), ee(q, n - l)))
                        : ((e.sortIndex = o),
                          w(P, e),
                          z || R || ((z = !0), Z(B))),
                    e
                );
            }),
            (k = Y),
            (x = function (e) {
                var t = A;
                return function () {
                    var n = A;
                    A = t;
                    try {
                        return e.apply(this, arguments);
                    } finally {
                        A = n;
                    }
                };
            });
    }),
    o.register("exEpv", function (e, t) {
        var n = o("cw87W");
        function r() {}
        function l() {}
        (l.resetWarningCache = r),
            (e.exports = function () {
                function e(e, t, r, l, o, a) {
                    if (a !== n) {
                        var i = new Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                        );
                        throw ((i.name = "Invariant Violation"), i);
                    }
                }
                function t() {
                    return e;
                }
                e.isRequired = e;
                var o = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: l,
                    resetWarningCache: r
                };
                return (o.PropTypes = o), o;
            });
    }),
    o.register("cw87W", function (e, t) {
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }),
    o.register("2pHqv", function (t, n) {
        /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r,
            l,
            o,
            a,
            i,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            g,
            y,
            v,
            b,
            k,
            x,
            w,
            S,
            E,
            C,
            L,
            T,
            N,
            P,
            _;
        e(
            t.exports,
            "ContextConsumer",
            () => r,
            (e) => (r = e)
        ),
            e(
                t.exports,
                "ContextProvider",
                () => l,
                (e) => (l = e)
            ),
            e(
                t.exports,
                "Element",
                () => o,
                (e) => (o = e)
            ),
            e(
                t.exports,
                "ForwardRef",
                () => a,
                (e) => (a = e)
            ),
            e(
                t.exports,
                "Fragment",
                () => i,
                (e) => (i = e)
            ),
            e(
                t.exports,
                "Lazy",
                () => u,
                (e) => (u = e)
            ),
            e(
                t.exports,
                "Memo",
                () => s,
                (e) => (s = e)
            ),
            e(
                t.exports,
                "Portal",
                () => c,
                (e) => (c = e)
            ),
            e(
                t.exports,
                "Profiler",
                () => f,
                (e) => (f = e)
            ),
            e(
                t.exports,
                "StrictMode",
                () => d,
                (e) => (d = e)
            ),
            e(
                t.exports,
                "Suspense",
                () => p,
                (e) => (p = e)
            ),
            e(
                t.exports,
                "SuspenseList",
                () => h,
                (e) => (h = e)
            ),
            e(
                t.exports,
                "isAsyncMode",
                () => m,
                (e) => (m = e)
            ),
            e(
                t.exports,
                "isConcurrentMode",
                () => g,
                (e) => (g = e)
            ),
            e(
                t.exports,
                "isContextConsumer",
                () => y,
                (e) => (y = e)
            ),
            e(
                t.exports,
                "isContextProvider",
                () => v,
                (e) => (v = e)
            ),
            e(
                t.exports,
                "isElement",
                () => b,
                (e) => (b = e)
            ),
            e(
                t.exports,
                "isForwardRef",
                () => k,
                (e) => (k = e)
            ),
            e(
                t.exports,
                "isFragment",
                () => x,
                (e) => (x = e)
            ),
            e(
                t.exports,
                "isLazy",
                () => w,
                (e) => (w = e)
            ),
            e(
                t.exports,
                "isMemo",
                () => S,
                (e) => (S = e)
            ),
            e(
                t.exports,
                "isPortal",
                () => E,
                (e) => (E = e)
            ),
            e(
                t.exports,
                "isProfiler",
                () => C,
                (e) => (C = e)
            ),
            e(
                t.exports,
                "isStrictMode",
                () => L,
                (e) => (L = e)
            ),
            e(
                t.exports,
                "isSuspense",
                () => T,
                (e) => (T = e)
            ),
            e(
                t.exports,
                "isSuspenseList",
                () => N,
                (e) => (N = e)
            ),
            e(
                t.exports,
                "isValidElementType",
                () => P,
                (e) => (P = e)
            ),
            e(
                t.exports,
                "typeOf",
                () => _,
                (e) => (_ = e)
            );
        var D,
            F = Symbol.for("react.element"),
            A = Symbol.for("react.portal"),
            R = Symbol.for("react.fragment"),
            z = Symbol.for("react.strict_mode"),
            O = Symbol.for("react.profiler"),
            I = Symbol.for("react.provider"),
            j = Symbol.for("react.context"),
            M = Symbol.for("react.server_context"),
            U = Symbol.for("react.forward_ref"),
            q = Symbol.for("react.suspense"),
            B = Symbol.for("react.suspense_list"),
            V = Symbol.for("react.memo"),
            H = Symbol.for("react.lazy"),
            $ = Symbol.for("react.offscreen");
        function W(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case F:
                        switch ((e = e.type)) {
                            case R:
                            case O:
                            case z:
                            case q:
                            case B:
                                return e;
                            default:
                                switch ((e = e && e.$$typeof)) {
                                    case M:
                                    case j:
                                    case U:
                                    case H:
                                    case V:
                                    case I:
                                        return e;
                                    default:
                                        return t;
                                }
                        }
                    case A:
                        return t;
                }
            }
        }
        (D = Symbol.for("react.module.reference")),
            (r = j),
            (l = I),
            (o = F),
            (a = U),
            (i = R),
            (u = H),
            (s = V),
            (c = A),
            (f = O),
            (d = z),
            (p = q),
            (h = B),
            (m = function () {
                return !1;
            }),
            (g = function () {
                return !1;
            }),
            (y = function (e) {
                return W(e) === j;
            }),
            (v = function (e) {
                return W(e) === I;
            }),
            (b = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === F;
            }),
            (k = function (e) {
                return W(e) === U;
            }),
            (x = function (e) {
                return W(e) === R;
            }),
            (w = function (e) {
                return W(e) === H;
            }),
            (S = function (e) {
                return W(e) === V;
            }),
            (E = function (e) {
                return W(e) === A;
            }),
            (C = function (e) {
                return W(e) === O;
            }),
            (L = function (e) {
                return W(e) === z;
            }),
            (T = function (e) {
                return W(e) === q;
            }),
            (N = function (e) {
                return W(e) === B;
            }),
            (P = function (e) {
                return (
                    "string" == typeof e ||
                    "function" == typeof e ||
                    e === R ||
                    e === O ||
                    e === z ||
                    e === q ||
                    e === B ||
                    e === $ ||
                    ("object" == typeof e &&
                        null !== e &&
                        (e.$$typeof === H ||
                            e.$$typeof === V ||
                            e.$$typeof === I ||
                            e.$$typeof === j ||
                            e.$$typeof === U ||
                            e.$$typeof === D ||
                            void 0 !== e.getModuleId))
                );
            }),
            (_ = W);
    });
var a;
a = o("cjuLU");
var i,
    u,
    s = o("fYo6y");
!(function e() {
    if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
            console.error(e);
        }
})(),
    (i = (u = o("gAtBI")).createRoot),
    u.hydrateRoot;
s = o("fYo6y");
const { PREF_UPDATE_INTERVAL: c, PREF_NOTIFICATIONS_ENABLED: f } =
        ChromeUtils.importESModule(
            "chrome://userchrome/content/aboutuserchrome/modules/UCMSingletonData.sys.mjs"
        ),
    d =
        window._ucUtils ||
        window.docShell.chromeEventHandler.ownerGlobal._ucUtils,
    p = "userChromeJS.",
    h = "userChromeJS.enabled",
    m = "userChromeJS.scriptsDisabled",
    g = "userChromeJS.gBrowser_hack.enabled",
    y = "userChromeJS.gBrowser_hack.required",
    v = "scripts",
    b = (0, s.createContext)({}),
    k = {
        get(e, t) {
            const { prefs: n } = Services;
            try {
                switch (n.getPrefType(e)) {
                    case 0:
                        return t;
                    case 32:
                        return n.getStringPref(e, t);
                    case 64:
                        return n.getIntPref(e, t);
                    case 128:
                        return n.getBoolPref(e, t);
                }
            } catch (e) {}
            return t;
        },
        set: (e, t) => {
            const { prefs: n } = Services;
            switch (typeof t) {
                case "string":
                    n.setStringPref(e, t);
                    break;
                case "number":
                    n.setIntPref(e, t);
                    break;
                case "boolean":
                    n.setBoolPref(e, t);
            }
        }
    };
class x extends t(s).Component {
    constructor(e) {
        super(e),
            (this.navigate = (e) => {
                e !== this.state.path &&
                    (this.setState({ path: e }),
                    window.history.pushState({ path: e }, ""));
            }),
            (this.state = {
                path: v,
                navigate: this.navigate,
                missingFxAutoconfig: !d,
                outdatedFxAutoconfig: !d?.parseStringAsScriptInfo,
                scripts: d
                    ?.getScriptData()
                    .map((e) => ({ ...e, path: e.asFile().path })),
                ucjsEnabled: k.get(h, !1),
                scriptsDisabled: k.get(m, ""),
                gBrowserHackEnabled: k.get(g, !1),
                gBrowserHackRequired: k.get(y, !1),
                updateInterval: k.get(c, 864e5),
                notificationsEnabled: k.get(f, !0),
                updateCount: 0,
                setUpdateCount: (e) => {
                    this.setState({ updateCount: e });
                }
            }),
            window.history.replaceState({ path: this.state.path }, ""),
            window.addEventListener("popstate", this),
            Services.prefs.addObserver(p, this);
    }
    handleEvent(e) {
        if ("popstate" === e.type) this.setState({ path: e.state?.path || v });
    }
    observe(e, t, n) {
        if ("nsPref:changed" === t)
            switch (n) {
                case h:
                    this.setState({ ucjsEnabled: k.get(h, !1) });
                    break;
                case m:
                    this.setState({ scriptsDisabled: k.get(m, "") });
                    break;
                case g:
                    this.setState({ gBrowserHackEnabled: k.get(g, !1) });
                    break;
                case y:
                    this.setState({ gBrowserHackRequired: k.get(y, !1) });
                    break;
                case c:
                    this.setState({ updateInterval: k.get(c, 864e5) });
                    break;
                case f:
                    this.setState({ notificationsEnabled: k.get(f, !0) });
            }
    }
    componentWillUnmount() {
        window.removeEventListener("popstate", this),
            Services.prefs.removeObserver(p, this);
    }
    render() {
        return (0, a.jsx)(b.Provider, {
            value: this.state,
            children: this.props.children
        });
    }
}
var w;
(s = o("fYo6y")), (s = o("fYo6y")), (s = o("fYo6y"));
function S(e) {
    return e && "object" == typeof e
        ? "position" in e || "type" in e
            ? C(e.position)
            : "start" in e || "end" in e
            ? C(e)
            : "line" in e || "column" in e
            ? E(e)
            : ""
        : "";
}
function E(e) {
    return L(e && e.line) + ":" + L(e && e.column);
}
function C(e) {
    return E(e && e.start) + "-" + E(e && e.end);
}
function L(e) {
    return e && "number" == typeof e ? e : 1;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
w = function (e) {
    return (
        null != e &&
        null != e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
    );
};
class T extends Error {
    constructor(e, t, n) {
        const r = [null, null];
        let l = {
            start: { line: null, column: null },
            end: { line: null, column: null }
        };
        if (
            (super(),
            "string" == typeof t && ((n = t), (t = void 0)),
            "string" == typeof n)
        ) {
            const e = n.indexOf(":");
            -1 === e
                ? (r[1] = n)
                : ((r[0] = n.slice(0, e)), (r[1] = n.slice(e + 1)));
        }
        t &&
            ("type" in t || "position" in t
                ? t.position && (l = t.position)
                : "start" in t || "end" in t
                ? (l = t)
                : ("line" in t || "column" in t) && (l.start = t)),
            (this.name = S(t) || "1:1"),
            (this.message = "object" == typeof e ? e.message : e),
            (this.stack = ""),
            "object" == typeof e && e.stack && (this.stack = e.stack),
            (this.reason = this.message),
            this.fatal,
            (this.line = l.start.line),
            (this.column = l.start.column),
            (this.position = l),
            (this.source = r[0]),
            (this.ruleId = r[1]),
            this.file,
            this.actual,
            this.expected,
            this.url,
            this.note;
    }
}
(T.prototype.file = ""),
    (T.prototype.name = ""),
    (T.prototype.reason = ""),
    (T.prototype.message = ""),
    (T.prototype.stack = ""),
    (T.prototype.fatal = null),
    (T.prototype.column = null),
    (T.prototype.line = null),
    (T.prototype.source = null),
    (T.prototype.ruleId = null),
    (T.prototype.position = null);
const N = {
    basename: function (e, t) {
        if (void 0 !== t && "string" != typeof t)
            throw new TypeError('"ext" argument must be a string');
        P(e);
        let n,
            r = 0,
            l = -1,
            o = e.length;
        if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
                if (47 === e.charCodeAt(o)) {
                    if (n) {
                        r = o + 1;
                        break;
                    }
                } else l < 0 && ((n = !0), (l = o + 1));
            return l < 0 ? "" : e.slice(r, l);
        }
        if (t === e) return "";
        let a = -1,
            i = t.length - 1;
        for (; o--; )
            if (47 === e.charCodeAt(o)) {
                if (n) {
                    r = o + 1;
                    break;
                }
            } else
                a < 0 && ((n = !0), (a = o + 1)),
                    i > -1 &&
                        (e.charCodeAt(o) === t.charCodeAt(i--)
                            ? i < 0 && (l = o)
                            : ((i = -1), (l = a)));
        r === l ? (l = a) : l < 0 && (l = e.length);
        return e.slice(r, l);
    },
    dirname: function (e) {
        if ((P(e), 0 === e.length)) return ".";
        let t,
            n = -1,
            r = e.length;
        for (; --r; )
            if (47 === e.charCodeAt(r)) {
                if (t) {
                    n = r;
                    break;
                }
            } else t || (t = !0);
        return n < 0
            ? 47 === e.charCodeAt(0)
                ? "/"
                : "."
            : 1 === n && 47 === e.charCodeAt(0)
            ? "//"
            : e.slice(0, n);
    },
    extname: function (e) {
        P(e);
        let t,
            n = e.length,
            r = -1,
            l = 0,
            o = -1,
            a = 0;
        for (; n--; ) {
            const i = e.charCodeAt(n);
            if (47 !== i)
                r < 0 && ((t = !0), (r = n + 1)),
                    46 === i
                        ? o < 0
                            ? (o = n)
                            : 1 !== a && (a = 1)
                        : o > -1 && (a = -1);
            else if (t) {
                l = n + 1;
                break;
            }
        }
        return o < 0 ||
            r < 0 ||
            0 === a ||
            (1 === a && o === r - 1 && o === l + 1)
            ? ""
            : e.slice(o, r);
    },
    join: function (...e) {
        let t,
            n = -1;
        for (; ++n < e.length; )
            P(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
        return void 0 === t
            ? "."
            : (function (e) {
                  P(e);
                  const t = 47 === e.charCodeAt(0);
                  let n = (function (e, t) {
                      let n,
                          r,
                          l = "",
                          o = 0,
                          a = -1,
                          i = 0,
                          u = -1;
                      for (; ++u <= e.length; ) {
                          if (u < e.length) n = e.charCodeAt(u);
                          else {
                              if (47 === n) break;
                              n = 47;
                          }
                          if (47 === n) {
                              if (a === u - 1 || 1 === i);
                              else if (a !== u - 1 && 2 === i) {
                                  if (
                                      l.length < 2 ||
                                      2 !== o ||
                                      46 !== l.charCodeAt(l.length - 1) ||
                                      46 !== l.charCodeAt(l.length - 2)
                                  )
                                      if (l.length > 2) {
                                          if (
                                              ((r = l.lastIndexOf("/")),
                                              r !== l.length - 1)
                                          ) {
                                              r < 0
                                                  ? ((l = ""), (o = 0))
                                                  : ((l = l.slice(0, r)),
                                                    (o =
                                                        l.length -
                                                        1 -
                                                        l.lastIndexOf("/"))),
                                                  (a = u),
                                                  (i = 0);
                                              continue;
                                          }
                                      } else if (l.length > 0) {
                                          (l = ""), (o = 0), (a = u), (i = 0);
                                          continue;
                                      }
                                  t &&
                                      ((l = l.length > 0 ? l + "/.." : ".."),
                                      (o = 2));
                              } else
                                  l.length > 0
                                      ? (l += "/" + e.slice(a + 1, u))
                                      : (l = e.slice(a + 1, u)),
                                      (o = u - a - 1);
                              (a = u), (i = 0);
                          } else 46 === n && i > -1 ? i++ : (i = -1);
                      }
                      return l;
                  })(e, !t);
                  0 !== n.length || t || (n = ".");
                  n.length > 0 &&
                      47 === e.charCodeAt(e.length - 1) &&
                      (n += "/");
                  return t ? "/" + n : n;
              })(t);
    },
    sep: "/"
};
function P(e) {
    if ("string" != typeof e)
        throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
        );
}
const _ = {
    cwd: function () {
        return "/";
    }
};
function D(e) {
    return null !== e && "object" == typeof e && e.href && e.origin;
}
function F(e) {
    if ("string" == typeof e) e = new URL(e);
    else if (!D(e)) {
        const t = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
                e +
                "`"
        );
        throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
    }
    if ("file:" !== e.protocol) {
        const e = new TypeError("The URL must be of scheme file");
        throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
    }
    return (function (e) {
        if ("" !== e.hostname) {
            const e = new TypeError(
                'File URL host must be "localhost" or empty on darwin'
            );
            throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
        }
        const t = e.pathname;
        let n = -1;
        for (; ++n < t.length; )
            if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
                const e = t.charCodeAt(n + 2);
                if (70 === e || 102 === e) {
                    const e = new TypeError(
                        "File URL path must not include encoded / characters"
                    );
                    throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                }
            }
        return decodeURIComponent(t);
    })(e);
}
const A = ["history", "path", "basename", "stem", "extname", "dirname"];
class R {
    constructor(e) {
        let n;
        (n = e
            ? "string" == typeof e || t(w)(e)
                ? { value: e }
                : D(e)
                ? { path: e }
                : e
            : {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = _.cwd()),
            this.value,
            this.stored,
            this.result,
            this.map;
        let r,
            l = -1;
        for (; ++l < A.length; ) {
            const e = A[l];
            e in n &&
                void 0 !== n[e] &&
                (this[e] = "history" === e ? [...n[e]] : n[e]);
        }
        for (r in n) A.includes(r) || (this[r] = n[r]);
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(e) {
        D(e) && (e = F(e)),
            O(e, "path"),
            this.path !== e && this.history.push(e);
    }
    get dirname() {
        return "string" == typeof this.path ? N.dirname(this.path) : void 0;
    }
    set dirname(e) {
        I(this.basename, "dirname"),
            (this.path = N.join(e || "", this.basename));
    }
    get basename() {
        return "string" == typeof this.path ? N.basename(this.path) : void 0;
    }
    set basename(e) {
        O(e, "basename"),
            z(e, "basename"),
            (this.path = N.join(this.dirname || "", e));
    }
    get extname() {
        return "string" == typeof this.path ? N.extname(this.path) : void 0;
    }
    set extname(e) {
        if ((z(e, "extname"), I(this.dirname, "extname"), e)) {
            if (46 !== e.charCodeAt(0))
                throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
                throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = N.join(this.dirname, this.stem + (e || ""));
    }
    get stem() {
        return "string" == typeof this.path
            ? N.basename(this.path, this.extname)
            : void 0;
    }
    set stem(e) {
        O(e, "stem"),
            z(e, "stem"),
            (this.path = N.join(this.dirname || "", e + (this.extname || "")));
    }
    toString(e) {
        return (this.value || "").toString(e);
    }
    message(e, t, n) {
        const r = new T(e, t, n);
        return (
            this.path &&
                ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
        );
    }
    info(e, t, n) {
        const r = this.message(e, t, n);
        return (r.fatal = null), r;
    }
    fail(e, t, n) {
        const r = this.message(e, t, n);
        throw ((r.fatal = !0), r);
    }
}
function z(e, t) {
    if (e && e.includes(N.sep))
        throw new Error(
            "`" + t + "` cannot be a path: did not expect `" + N.sep + "`"
        );
}
function O(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
}
function I(e, t) {
    if (!e)
        throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function j(e) {
    if (e) throw e;
}
var M,
    U = Object.prototype.hasOwnProperty,
    q = Object.prototype.toString,
    B = Object.defineProperty,
    V = Object.getOwnPropertyDescriptor,
    H = function (e) {
        return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === q.call(e);
    },
    $ = function (e) {
        if (!e || "[object Object]" !== q.call(e)) return !1;
        var t,
            n = U.call(e, "constructor"),
            r =
                e.constructor &&
                e.constructor.prototype &&
                U.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !n && !r) return !1;
        for (t in e);
        return void 0 === t || U.call(e, t);
    },
    W = function (e, t) {
        B && "__proto__" === t.name
            ? B(e, t.name, {
                  enumerable: !0,
                  configurable: !0,
                  value: t.newValue,
                  writable: !0
              })
            : (e[t.name] = t.newValue);
    },
    Q = function (e, t) {
        if ("__proto__" === t) {
            if (!U.call(e, t)) return;
            if (V) return V(e, t).value;
        }
        return e[t];
    };
function G(e) {
    if ("object" != typeof e || null === e) return !1;
    const t = Object.getPrototypeOf(e);
    return !(
        (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
    );
}
function Y() {
    const e = [],
        t = {
            run: function (...t) {
                let n = -1;
                const r = t.pop();
                if ("function" != typeof r)
                    throw new TypeError(
                        "Expected function as last argument, not " + r
                    );
                !(function l(o, ...a) {
                    const i = e[++n];
                    let u = -1;
                    if (o) r(o);
                    else {
                        for (; ++u < t.length; )
                            (null !== a[u] && void 0 !== a[u]) || (a[u] = t[u]);
                        (t = a),
                            i
                                ? (function (e, t) {
                                      let n;
                                      return r;
                                      function r(...t) {
                                          const r = e.length > t.length;
                                          let a;
                                          r && t.push(l);
                                          try {
                                              a = e.apply(this, t);
                                          } catch (e) {
                                              if (r && n) throw e;
                                              return l(e);
                                          }
                                          r ||
                                              (a instanceof Promise
                                                  ? a.then(o, l)
                                                  : a instanceof Error
                                                  ? l(a)
                                                  : o(a));
                                      }
                                      function l(e, ...r) {
                                          n || ((n = !0), t(e, ...r));
                                      }
                                      function o(e) {
                                          l(null, e);
                                      }
                                  })(
                                      i,
                                      l
                                  )(...a)
                                : r(null, ...a);
                    }
                })(null, ...t);
            },
            use: function (n) {
                if ("function" != typeof n)
                    throw new TypeError(
                        "Expected `middelware` to be a function, not " + n
                    );
                return e.push(n), t;
            }
        };
    return t;
}
M = function e() {
    var t,
        n,
        r,
        l,
        o,
        a,
        i = arguments[0],
        u = 1,
        s = arguments.length,
        c = !1;
    for (
        "boolean" == typeof i && ((c = i), (i = arguments[1] || {}), (u = 2)),
            (null == i || ("object" != typeof i && "function" != typeof i)) &&
                (i = {});
        u < s;
        ++u
    )
        if (null != (t = arguments[u]))
            for (n in t)
                (r = Q(i, n)),
                    i !== (l = Q(t, n)) &&
                        (c && l && ($(l) || (o = H(l)))
                            ? (o
                                  ? ((o = !1), (a = r && H(r) ? r : []))
                                  : (a = r && $(r) ? r : {}),
                              W(i, { name: n, newValue: e(c, a, l) }))
                            : void 0 !== l && W(i, { name: n, newValue: l }));
    return i;
};
const K = (function e() {
        const n = Y(),
            r = [];
        let l,
            o = {},
            a = -1;
        return (
            (i.data = function (e, t) {
                if ("string" == typeof e)
                    return 2 === arguments.length
                        ? (te("data", l), (o[e] = t), i)
                        : (X.call(o, e) && o[e]) || null;
                if (e) return te("data", l), (o = e), i;
                return o;
            }),
            (i.Parser = void 0),
            (i.Compiler = void 0),
            (i.freeze = function () {
                if (l) return i;
                for (; ++a < r.length; ) {
                    const [e, ...t] = r[a];
                    if (!1 === t[0]) continue;
                    !0 === t[0] && (t[0] = void 0);
                    const l = e.call(i, ...t);
                    "function" == typeof l && n.use(l);
                }
                return (l = !0), (a = Number.POSITIVE_INFINITY), i;
            }),
            (i.attachers = r),
            (i.use = function (e, ...n) {
                let a;
                if ((te("use", l), null == e));
                else if ("function" == typeof e) f(e, ...n);
                else {
                    if ("object" != typeof e)
                        throw new TypeError(
                            "Expected usable value, not `" + e + "`"
                        );
                    Array.isArray(e) ? c(e) : s(e);
                }
                a && (o.settings = Object.assign(o.settings || {}, a));
                return i;
                function u(e) {
                    if ("function" == typeof e) f(e);
                    else {
                        if ("object" != typeof e)
                            throw new TypeError(
                                "Expected usable value, not `" + e + "`"
                            );
                        if (Array.isArray(e)) {
                            const [t, ...n] = e;
                            f(t, ...n);
                        } else s(e);
                    }
                }
                function s(e) {
                    c(e.plugins),
                        e.settings && (a = Object.assign(a || {}, e.settings));
                }
                function c(e) {
                    let t = -1;
                    if (null == e);
                    else {
                        if (!Array.isArray(e))
                            throw new TypeError(
                                "Expected a list of plugins, not `" + e + "`"
                            );
                        for (; ++t < e.length; ) {
                            u(e[t]);
                        }
                    }
                }
                function f(e, n) {
                    let l,
                        o = -1;
                    for (; ++o < r.length; )
                        if (r[o][0] === e) {
                            l = r[o];
                            break;
                        }
                    l
                        ? (G(l[1]) && G(n) && (n = t(M)(!0, l[1], n)),
                          (l[1] = n))
                        : r.push([...arguments]);
                }
            }),
            (i.parse = function (e) {
                i.freeze();
                const t = le(e),
                    n = i.Parser;
                return (
                    Z("parse", n),
                    J(n, "parse")
                        ? new n(String(t), t).parse()
                        : n(String(t), t)
                );
            }),
            (i.stringify = function (e, t) {
                i.freeze();
                const n = le(t),
                    r = i.Compiler;
                return (
                    ee("stringify", r),
                    ne(e),
                    J(r, "compile") ? new r(e, n).compile() : r(e, n)
                );
            }),
            (i.run = function (e, t, r) {
                ne(e),
                    i.freeze(),
                    r || "function" != typeof t || ((r = t), (t = void 0));
                if (!r) return new Promise(l);
                function l(l, o) {
                    function a(t, n, a) {
                        (n = n || e), t ? o(t) : l ? l(n) : r(null, n, a);
                    }
                    n.run(e, le(t), a);
                }
                l(null, r);
            }),
            (i.runSync = function (e, t) {
                let n, r;
                return i.run(e, t, l), re("runSync", "run", r), n;
                function l(e, t) {
                    j(e), (n = t), (r = !0);
                }
            }),
            (i.process = function (e, n) {
                if (
                    (i.freeze(),
                    Z("process", i.Parser),
                    ee("process", i.Compiler),
                    !n)
                )
                    return new Promise(r);
                function r(r, l) {
                    const o = le(e);
                    function a(e, t) {
                        e || !t ? l(e) : r ? r(t) : n(null, t);
                    }
                    i.run(i.parse(o), o, (e, n, r) => {
                        if (!e && n && r) {
                            const o = i.stringify(n, r);
                            null == o ||
                                ("string" == typeof (l = o) || t(w)(l)
                                    ? (r.value = o)
                                    : (r.result = o)),
                                a(e, r);
                        } else a(e);
                        var l;
                    });
                }
                r(null, n);
            }),
            (i.processSync = function (e) {
                let t;
                i.freeze(),
                    Z("processSync", i.Parser),
                    ee("processSync", i.Compiler);
                const n = le(e);
                return i.process(n, r), re("processSync", "process", t), n;
                function r(e) {
                    (t = !0), j(e);
                }
            }),
            i
        );
        function i() {
            const n = e();
            let l = -1;
            for (; ++l < r.length; ) n.use(...r[l]);
            return n.data(t(M)(!0, {}, o)), n;
        }
    })().freeze(),
    X = {}.hasOwnProperty;
function J(e, t) {
    return (
        "function" == typeof e &&
        e.prototype &&
        ((function (e) {
            let t;
            for (t in e) if (X.call(e, t)) return !0;
            return !1;
        })(e.prototype) ||
            t in e.prototype)
    );
}
function Z(e, t) {
    if ("function" != typeof t)
        throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function ee(e, t) {
    if ("function" != typeof t)
        throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function te(e, t) {
    if (t)
        throw new Error(
            "Cannot call `" +
                e +
                "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
        );
}
function ne(e) {
    if (!G(e) || "string" != typeof e.type)
        throw new TypeError("Expected node, got `" + e + "`");
}
function re(e, t, n) {
    if (!n)
        throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function le(e) {
    return (function (e) {
        return Boolean(
            e && "object" == typeof e && "message" in e && "messages" in e
        );
    })(e)
        ? e
        : new R(e);
}
function oe(e, t) {
    var { includeImageAlt: n = !0 } = t || {};
    return ae(e, n);
}
function ae(e, t) {
    return (
        (e &&
            "object" == typeof e &&
            (e.value ||
                (t ? e.alt : "") ||
                ("children" in e && ie(e.children, t)) ||
                (Array.isArray(e) && ie(e, t)))) ||
        ""
    );
}
function ie(e, t) {
    for (var n = [], r = -1; ++r < e.length; ) n[r] = ae(e[r], t);
    return n.join("");
}
function ue(e, t, n, r) {
    const l = e.length;
    let o,
        a = 0;
    if (
        ((t = t < 0 ? (-t > l ? 0 : l + t) : t > l ? l : t),
        (n = n > 0 ? n : 0),
        r.length < 1e4)
    )
        (o = Array.from(r)), o.unshift(t, n), [].splice.apply(e, o);
    else
        for (n && [].splice.apply(e, [t, n]); a < r.length; )
            (o = r.slice(a, a + 1e4)),
                o.unshift(t, 0),
                [].splice.apply(e, o),
                (a += 1e4),
                (t += 1e4);
}
function se(e, t) {
    return e.length > 0 ? (ue(e, e.length, 0, t), e) : t;
}
const ce = {}.hasOwnProperty;
function fe(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length; ) de(t, e[n]);
    return t;
}
function de(e, t) {
    let n;
    for (n in t) {
        const r = (ce.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            l = t[n];
        let o;
        for (o in l) {
            ce.call(r, o) || (r[o] = []);
            const e = l[o];
            pe(r[o], Array.isArray(e) ? e : e ? [e] : []);
        }
    }
}
function pe(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length; ) ("after" === t[n].add ? e : r).push(t[n]);
    ue(e, 0, 0, r);
}
const he = Le(/[A-Za-z]/),
    me = Le(/\d/),
    ge = Le(/[\dA-Fa-f]/),
    ye = Le(/[\dA-Za-z]/),
    ve = Le(/[!-/:-@[-`{-~]/),
    be = Le(/[#-'*+\--9=?A-Z^-~]/);
function ke(e) {
    return null !== e && (e < 32 || 127 === e);
}
function xe(e) {
    return null !== e && (e < 0 || 32 === e);
}
function we(e) {
    return null !== e && e < -2;
}
function Se(e) {
    return -2 === e || -1 === e || 32 === e;
}
const Ee = Le(/\s/),
    Ce = Le(
        /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
    );
function Le(e) {
    return function (t) {
        return null !== t && e.test(String.fromCharCode(t));
    };
}
function Te(e, t, n, r) {
    const l = r ? r - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return function (r) {
        if (Se(r)) return e.enter(n), a(r);
        return t(r);
    };
    function a(r) {
        return Se(r) && o++ < l ? (e.consume(r), a) : (e.exit(n), t(r));
    }
}
const Ne = {
    tokenize: function (e) {
        const t = e.attempt(
            this.parser.constructs.contentInitial,
            function (n) {
                if (null === n) return void e.consume(n);
                return (
                    e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    Te(e, t, "linePrefix")
                );
            },
            function (t) {
                return e.enter("paragraph"), r(t);
            }
        );
        let n;
        return t;
        function r(t) {
            const r = e.enter("chunkText", {
                contentType: "text",
                previous: n
            });
            return n && (n.next = r), (n = r), l(t);
        }
        function l(t) {
            return null === t
                ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t))
                : we(t)
                ? (e.consume(t), e.exit("chunkText"), r)
                : (e.consume(t), l);
        }
    }
};
const Pe = {
        tokenize: function (e) {
            const t = this,
                n = [];
            let r,
                l,
                o,
                a = 0;
            return i;
            function i(r) {
                if (a < n.length) {
                    const l = n[a];
                    return (
                        (t.containerState = l[1]),
                        e.attempt(l[0].continuation, u, s)(r)
                    );
                }
                return s(r);
            }
            function u(e) {
                if ((a++, t.containerState._closeFlow)) {
                    (t.containerState._closeFlow = void 0), r && v();
                    const n = t.events.length;
                    let l,
                        o = n;
                    for (; o--; )
                        if (
                            "exit" === t.events[o][0] &&
                            "chunkFlow" === t.events[o][1].type
                        ) {
                            l = t.events[o][1].end;
                            break;
                        }
                    y(a);
                    let i = n;
                    for (; i < t.events.length; )
                        (t.events[i][1].end = Object.assign({}, l)), i++;
                    return (
                        ue(t.events, o + 1, 0, t.events.slice(n)),
                        (t.events.length = i),
                        s(e)
                    );
                }
                return i(e);
            }
            function s(l) {
                if (a === n.length) {
                    if (!r) return d(l);
                    if (r.currentConstruct && r.currentConstruct.concrete)
                        return h(l);
                    t.interrupt = Boolean(
                        r.currentConstruct && !r._gfmTableDynamicInterruptHack
                    );
                }
                return (t.containerState = {}), e.check(_e, c, f)(l);
            }
            function c(e) {
                return r && v(), y(a), d(e);
            }
            function f(e) {
                return (
                    (t.parser.lazy[t.now().line] = a !== n.length),
                    (o = t.now().offset),
                    h(e)
                );
            }
            function d(n) {
                return (t.containerState = {}), e.attempt(_e, p, h)(n);
            }
            function p(e) {
                return (
                    a++, n.push([t.currentConstruct, t.containerState]), d(e)
                );
            }
            function h(n) {
                return null === n
                    ? (r && v(), y(0), void e.consume(n))
                    : ((r = r || t.parser.flow(t.now())),
                      e.enter("chunkFlow", {
                          contentType: "flow",
                          previous: l,
                          _tokenizer: r
                      }),
                      m(n));
            }
            function m(n) {
                return null === n
                    ? (g(e.exit("chunkFlow"), !0), y(0), void e.consume(n))
                    : we(n)
                    ? (e.consume(n),
                      g(e.exit("chunkFlow")),
                      (a = 0),
                      (t.interrupt = void 0),
                      i)
                    : (e.consume(n), m);
            }
            function g(e, n) {
                const i = t.sliceStream(e);
                if (
                    (n && i.push(null),
                    (e.previous = l),
                    l && (l.next = e),
                    (l = e),
                    r.defineSkip(e.start),
                    r.write(i),
                    t.parser.lazy[e.start.line])
                ) {
                    let e = r.events.length;
                    for (; e--; )
                        if (
                            r.events[e][1].start.offset < o &&
                            (!r.events[e][1].end ||
                                r.events[e][1].end.offset > o)
                        )
                            return;
                    const n = t.events.length;
                    let l,
                        i,
                        u = n;
                    for (; u--; )
                        if (
                            "exit" === t.events[u][0] &&
                            "chunkFlow" === t.events[u][1].type
                        ) {
                            if (l) {
                                i = t.events[u][1].end;
                                break;
                            }
                            l = !0;
                        }
                    for (y(a), e = n; e < t.events.length; )
                        (t.events[e][1].end = Object.assign({}, i)), e++;
                    ue(t.events, u + 1, 0, t.events.slice(n)),
                        (t.events.length = e);
                }
            }
            function y(r) {
                let l = n.length;
                for (; l-- > r; ) {
                    const r = n[l];
                    (t.containerState = r[1]), r[0].exit.call(t, e);
                }
                n.length = r;
            }
            function v() {
                r.write([null]),
                    (l = void 0),
                    (r = void 0),
                    (t.containerState._closeFlow = void 0);
            }
        }
    },
    _e = {
        tokenize: function (e, t, n) {
            return Te(
                e,
                e.attempt(this.parser.constructs.document, t, n),
                "linePrefix",
                this.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
            );
        }
    };
const De = {
    tokenize: function (e, t, n) {
        return Te(
            e,
            function (e) {
                return null === e || we(e) ? t(e) : n(e);
            },
            "linePrefix"
        );
    },
    partial: !0
};
function Fe(e) {
    const t = {};
    let n,
        r,
        l,
        o,
        a,
        i,
        u,
        s = -1;
    for (; ++s < e.length; ) {
        for (; s in t; ) s = t[s];
        if (
            ((n = e[s]),
            s &&
                "chunkFlow" === n[1].type &&
                "listItemPrefix" === e[s - 1][1].type &&
                ((i = n[1]._tokenizer.events),
                (l = 0),
                l < i.length && "lineEndingBlank" === i[l][1].type && (l += 2),
                l < i.length && "content" === i[l][1].type))
        )
            for (; ++l < i.length && "content" !== i[l][1].type; )
                "chunkText" === i[l][1].type &&
                    ((i[l][1]._isInFirstContentOfListItem = !0), l++);
        if ("enter" === n[0])
            n[1].contentType &&
                (Object.assign(t, Ae(e, s)), (s = t[s]), (u = !0));
        else if (n[1]._container) {
            for (
                l = s, r = void 0;
                l-- &&
                ((o = e[l]),
                "lineEnding" === o[1].type || "lineEndingBlank" === o[1].type);

            )
                "enter" === o[0] &&
                    (r && (e[r][1].type = "lineEndingBlank"),
                    (o[1].type = "lineEnding"),
                    (r = l));
            r &&
                ((n[1].end = Object.assign({}, e[r][1].start)),
                (a = e.slice(r, s)),
                a.unshift(n),
                ue(e, r, s - r + 1, a));
        }
    }
    return !u;
}
function Ae(e, t) {
    const n = e[t][1],
        r = e[t][2];
    let l = t - 1;
    const o = [],
        a = n._tokenizer || r.parser[n.contentType](n.start),
        i = a.events,
        u = [],
        s = {};
    let c,
        f,
        d = -1,
        p = n,
        h = 0,
        m = 0;
    const g = [m];
    for (; p; ) {
        for (; e[++l][1] !== p; );
        o.push(l),
            p._tokenizer ||
                ((c = r.sliceStream(p)),
                p.next || c.push(null),
                f && a.defineSkip(p.start),
                p._isInFirstContentOfListItem &&
                    (a._gfmTasklistFirstContentOfListItem = !0),
                a.write(c),
                p._isInFirstContentOfListItem &&
                    (a._gfmTasklistFirstContentOfListItem = void 0)),
            (f = p),
            (p = p.next);
    }
    for (p = n; ++d < i.length; )
        "exit" === i[d][0] &&
            "enter" === i[d - 1][0] &&
            i[d][1].type === i[d - 1][1].type &&
            i[d][1].start.line !== i[d][1].end.line &&
            ((m = d + 1),
            g.push(m),
            (p._tokenizer = void 0),
            (p.previous = void 0),
            (p = p.next));
    for (
        a.events = [],
            p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(),
            d = g.length;
        d--;

    ) {
        const t = i.slice(g[d], g[d + 1]),
            n = o.pop();
        u.unshift([n, n + t.length - 1]), ue(e, n, 2, t);
    }
    for (d = -1; ++d < u.length; )
        (s[h + u[d][0]] = h + u[d][1]), (h += u[d][1] - u[d][0] - 1);
    return s;
}
const Re = {
        tokenize: function (e, t) {
            let n;
            return function (t) {
                return (
                    e.enter("content"),
                    (n = e.enter("chunkContent", { contentType: "content" })),
                    r(t)
                );
            };
            function r(t) {
                return null === t
                    ? l(t)
                    : we(t)
                    ? e.check(ze, o, l)(t)
                    : (e.consume(t), r);
            }
            function l(n) {
                return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function o(t) {
                return (
                    e.consume(t),
                    e.exit("chunkContent"),
                    (n.next = e.enter("chunkContent", {
                        contentType: "content",
                        previous: n
                    })),
                    (n = n.next),
                    r
                );
            }
        },
        resolve: function (e) {
            return Fe(e), e;
        }
    },
    ze = {
        tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
                return (
                    e.exit("chunkContent"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    Te(e, l, "linePrefix")
                );
            };
            function l(l) {
                if (null === l || we(l)) return n(l);
                const o = r.events[r.events.length - 1];
                return !r.parser.constructs.disable.null.includes(
                    "codeIndented"
                ) &&
                    o &&
                    "linePrefix" === o[1].type &&
                    o[2].sliceSerialize(o[1], !0).length >= 4
                    ? t(l)
                    : e.interrupt(r.parser.constructs.flow, n, t)(l);
            }
        },
        partial: !0
    };
const Oe = {
    tokenize: function (e) {
        const t = this,
            n = e.attempt(
                De,
                function (r) {
                    if (null === r) return void e.consume(r);
                    return (
                        e.enter("lineEndingBlank"),
                        e.consume(r),
                        e.exit("lineEndingBlank"),
                        (t.currentConstruct = void 0),
                        n
                    );
                },
                e.attempt(
                    this.parser.constructs.flowInitial,
                    r,
                    Te(
                        e,
                        e.attempt(
                            this.parser.constructs.flow,
                            r,
                            e.attempt(Re, r)
                        ),
                        "linePrefix"
                    )
                )
            );
        return n;
        function r(r) {
            if (null !== r)
                return (
                    e.enter("lineEnding"),
                    e.consume(r),
                    e.exit("lineEnding"),
                    (t.currentConstruct = void 0),
                    n
                );
            e.consume(r);
        }
    }
};
const Ie = { resolveAll: qe() },
    je = Ue("string"),
    Me = Ue("text");
function Ue(e) {
    return {
        tokenize: function (t) {
            const n = this,
                r = this.parser.constructs[e],
                l = t.attempt(r, o, a);
            return o;
            function o(e) {
                return u(e) ? l(e) : a(e);
            }
            function a(e) {
                if (null !== e) return t.enter("data"), t.consume(e), i;
                t.consume(e);
            }
            function i(e) {
                return u(e) ? (t.exit("data"), l(e)) : (t.consume(e), i);
            }
            function u(e) {
                if (null === e) return !0;
                const t = r[e];
                let l = -1;
                if (t)
                    for (; ++l < t.length; ) {
                        const e = t[l];
                        if (!e.previous || e.previous.call(n, n.previous))
                            return !0;
                    }
                return !1;
            }
        },
        resolveAll: qe("text" === e ? Be : void 0)
    };
}
function qe(e) {
    return function (t, n) {
        let r,
            l = -1;
        for (; ++l <= t.length; )
            void 0 === r
                ? t[l] && "data" === t[l][1].type && ((r = l), l++)
                : (t[l] && "data" === t[l][1].type) ||
                  (l !== r + 2 &&
                      ((t[r][1].end = t[l - 1][1].end),
                      t.splice(r + 2, l - r - 2),
                      (l = r + 2)),
                  (r = void 0));
        return e ? e(t, n) : t;
    };
}
function Be(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
        if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
        ) {
            const r = e[n - 1][1],
                l = t.sliceStream(r);
            let o,
                a = l.length,
                i = -1,
                u = 0;
            for (; a--; ) {
                const e = l[a];
                if ("string" == typeof e) {
                    for (i = e.length; 32 === e.charCodeAt(i - 1); ) u++, i--;
                    if (i) break;
                    i = -1;
                } else if (-2 === e) (o = !0), u++;
                else if (-1 !== e) {
                    a++;
                    break;
                }
            }
            if (u) {
                const l = {
                    type:
                        n === e.length || o || u < 2
                            ? "lineSuffix"
                            : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - u,
                        offset: r.end.offset - u,
                        _index: r.start._index + a,
                        _bufferIndex: a ? i : r.start._bufferIndex + i
                    },
                    end: Object.assign({}, r.end)
                };
                (r.end = Object.assign({}, l.start)),
                    r.start.offset === r.end.offset
                        ? Object.assign(r, l)
                        : (e.splice(n, 0, ["enter", l, t], ["exit", l, t]),
                          (n += 2));
            }
            n++;
        }
    return e;
}
function Ve(e, t, n) {
    const r = [];
    let l = -1;
    for (; ++l < e.length; ) {
        const o = e[l].resolveAll;
        o && !r.includes(o) && ((t = o(t, n)), r.push(o));
    }
    return t;
}
function He(e, t, n) {
    let r = Object.assign(
        n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
        { _index: 0, _bufferIndex: -1 }
    );
    const l = {},
        o = [];
    let a = [],
        i = [],
        u = !0;
    const s = {
            consume: function (e) {
                we(e)
                    ? (r.line++,
                      (r.column = 1),
                      (r.offset += -3 === e ? 2 : 1),
                      k())
                    : -1 !== e && (r.column++, r.offset++);
                r._bufferIndex < 0
                    ? r._index++
                    : (r._bufferIndex++,
                      r._bufferIndex === a[r._index].length &&
                          ((r._bufferIndex = -1), r._index++));
                (c.previous = e), (u = !0);
            },
            enter: function (e, t) {
                const n = t || {};
                return (
                    (n.type = e),
                    (n.start = h()),
                    c.events.push(["enter", n, c]),
                    i.push(n),
                    n
                );
            },
            exit: function (e) {
                const t = i.pop();
                return (t.end = h()), c.events.push(["exit", t, c]), t;
            },
            attempt: v(function (e, t) {
                b(e, t.from);
            }),
            check: v(y),
            interrupt: v(y, { interrupt: !0 })
        },
        c = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: p,
            sliceSerialize: function (e, t) {
                return (function (e, t) {
                    let n = -1;
                    const r = [];
                    let l;
                    for (; ++n < e.length; ) {
                        const o = e[n];
                        let a;
                        if ("string" == typeof o) a = o;
                        else
                            switch (o) {
                                case -5:
                                    a = "\r";
                                    break;
                                case -4:
                                    a = "\n";
                                    break;
                                case -3:
                                    a = "\r\n";
                                    break;
                                case -2:
                                    a = t ? " " : "\t";
                                    break;
                                case -1:
                                    if (!t && l) continue;
                                    a = " ";
                                    break;
                                default:
                                    a = String.fromCharCode(o);
                            }
                        (l = -2 === o), r.push(a);
                    }
                    return r.join("");
                })(p(e), t);
            },
            now: h,
            defineSkip: function (e) {
                (l[e.line] = e.column), k();
            },
            write: function (e) {
                return (
                    (a = se(a, e)),
                    m(),
                    null !== a[a.length - 1]
                        ? []
                        : (b(t, 0), (c.events = Ve(o, c.events, c)), c.events)
                );
            }
        };
    let f,
        d = t.tokenize.call(c, s);
    return t.resolveAll && o.push(t), c;
    function p(e) {
        return (function (e, t) {
            const n = t.start._index,
                r = t.start._bufferIndex,
                l = t.end._index,
                o = t.end._bufferIndex;
            let a;
            n === l
                ? (a = [e[n].slice(r, o)])
                : ((a = e.slice(n, l)),
                  r > -1 && (a[0] = a[0].slice(r)),
                  o > 0 && a.push(e[l].slice(0, o)));
            return a;
        })(a, e);
    }
    function h() {
        return Object.assign({}, r);
    }
    function m() {
        let e;
        for (; r._index < a.length; ) {
            const t = a[r._index];
            if ("string" == typeof t)
                for (
                    e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                    r._index === e && r._bufferIndex < t.length;

                )
                    g(t.charCodeAt(r._bufferIndex));
            else g(t);
        }
    }
    function g(e) {
        (u = void 0), (f = e), (d = d(e));
    }
    function y(e, t) {
        t.restore();
    }
    function v(e, t) {
        return function (n, l, o) {
            let a, f, d, p;
            return Array.isArray(n)
                ? m(n)
                : "tokenize" in n
                ? m([n])
                : (function (e) {
                      return t;
                      function t(t) {
                          const n = null !== t && e[t],
                              r = null !== t && e.null;
                          return m([
                              ...(Array.isArray(n) ? n : n ? [n] : []),
                              ...(Array.isArray(r) ? r : r ? [r] : [])
                          ])(t);
                      }
                  })(n);
            function m(e) {
                return (a = e), (f = 0), 0 === e.length ? o : g(e[f]);
            }
            function g(e) {
                return function (n) {
                    (p = (function () {
                        const e = h(),
                            t = c.previous,
                            n = c.currentConstruct,
                            l = c.events.length,
                            o = Array.from(i);
                        return { restore: a, from: l };
                        function a() {
                            (r = e),
                                (c.previous = t),
                                (c.currentConstruct = n),
                                (c.events.length = l),
                                (i = o),
                                k();
                        }
                    })()),
                        (d = e),
                        e.partial || (c.currentConstruct = e);
                    return e.name &&
                        c.parser.constructs.disable.null.includes(e.name)
                        ? v(n)
                        : e.tokenize.call(
                              t ? Object.assign(Object.create(c), t) : c,
                              s,
                              y,
                              v
                          )(n);
                };
            }
            function y(t) {
                return (u = !0), e(d, p), l;
            }
            function v(e) {
                return (u = !0), p.restore(), ++f < a.length ? g(a[f]) : o;
            }
        };
    }
    function b(e, t) {
        e.resolveAll && !o.includes(e) && o.push(e),
            e.resolve &&
                ue(
                    c.events,
                    t,
                    c.events.length - t,
                    e.resolve(c.events.slice(t), c)
                ),
            e.resolveTo && (c.events = e.resolveTo(c.events, c));
    }
    function k() {
        r.line in l &&
            r.column < 2 &&
            ((r.column = l[r.line]), (r.offset += l[r.line] - 1));
    }
}
var $e = {};
function We(e) {
    return null === e || xe(e) || Ee(e) ? 1 : Ce(e) ? 2 : void 0;
}
e($e, "document", () => Ct),
    e($e, "contentInitial", () => Lt),
    e($e, "flowInitial", () => Tt),
    e($e, "flow", () => Nt),
    e($e, "string", () => Pt),
    e($e, "text", () => _t),
    e($e, "insideSpan", () => Dt),
    e($e, "attentionMarkers", () => Ft),
    e($e, "disable", () => At);
const Qe = {
    name: "attention",
    tokenize: function (e, t) {
        const n = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            l = We(r);
        let o;
        return function (t) {
            return e.enter("attentionSequence"), (o = t), a(t);
        };
        function a(i) {
            if (i === o) return e.consume(i), a;
            const u = e.exit("attentionSequence"),
                s = We(i),
                c = !s || (2 === s && l) || n.includes(i),
                f = !l || (2 === l && s) || n.includes(r);
            return (
                (u._open = Boolean(42 === o ? c : c && (l || !f))),
                (u._close = Boolean(42 === o ? f : f && (s || !c))),
                t(i)
            );
        }
    },
    resolveAll: function (e, t) {
        let n,
            r,
            l,
            o,
            a,
            i,
            u,
            s,
            c = -1;
        for (; ++c < e.length; )
            if (
                "enter" === e[c][0] &&
                "attentionSequence" === e[c][1].type &&
                e[c][1]._close
            )
                for (n = c; n--; )
                    if (
                        "exit" === e[n][0] &&
                        "attentionSequence" === e[n][1].type &&
                        e[n][1]._open &&
                        t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                            t.sliceSerialize(e[c][1]).charCodeAt(0)
                    ) {
                        if (
                            (e[n][1]._close || e[c][1]._open) &&
                            (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                            !(
                                (e[n][1].end.offset -
                                    e[n][1].start.offset +
                                    e[c][1].end.offset -
                                    e[c][1].start.offset) %
                                3
                            )
                        )
                            continue;
                        i =
                            e[n][1].end.offset - e[n][1].start.offset > 1 &&
                            e[c][1].end.offset - e[c][1].start.offset > 1
                                ? 2
                                : 1;
                        const f = Object.assign({}, e[n][1].end),
                            d = Object.assign({}, e[c][1].start);
                        Ge(f, -i),
                            Ge(d, i),
                            (o = {
                                type:
                                    i > 1
                                        ? "strongSequence"
                                        : "emphasisSequence",
                                start: f,
                                end: Object.assign({}, e[n][1].end)
                            }),
                            (a = {
                                type:
                                    i > 1
                                        ? "strongSequence"
                                        : "emphasisSequence",
                                start: Object.assign({}, e[c][1].start),
                                end: d
                            }),
                            (l = {
                                type: i > 1 ? "strongText" : "emphasisText",
                                start: Object.assign({}, e[n][1].end),
                                end: Object.assign({}, e[c][1].start)
                            }),
                            (r = {
                                type: i > 1 ? "strong" : "emphasis",
                                start: Object.assign({}, o.start),
                                end: Object.assign({}, a.end)
                            }),
                            (e[n][1].end = Object.assign({}, o.start)),
                            (e[c][1].start = Object.assign({}, a.end)),
                            (u = []),
                            e[n][1].end.offset - e[n][1].start.offset &&
                                (u = se(u, [
                                    ["enter", e[n][1], t],
                                    ["exit", e[n][1], t]
                                ])),
                            (u = se(u, [
                                ["enter", r, t],
                                ["enter", o, t],
                                ["exit", o, t],
                                ["enter", l, t]
                            ])),
                            (u = se(
                                u,
                                Ve(
                                    t.parser.constructs.insideSpan.null,
                                    e.slice(n + 1, c),
                                    t
                                )
                            )),
                            (u = se(u, [
                                ["exit", l, t],
                                ["enter", a, t],
                                ["exit", a, t],
                                ["exit", r, t]
                            ])),
                            e[c][1].end.offset - e[c][1].start.offset
                                ? ((s = 2),
                                  (u = se(u, [
                                      ["enter", e[c][1], t],
                                      ["exit", e[c][1], t]
                                  ])))
                                : (s = 0),
                            ue(e, n - 1, c - n + 3, u),
                            (c = n + u.length - s - 2);
                        break;
                    }
        c = -1;
        for (; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
        return e;
    }
};
function Ge(e, t) {
    (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const Ye = {
    name: "blockQuote",
    tokenize: function (e, t, n) {
        const r = this;
        return function (t) {
            if (62 === t) {
                const n = r.containerState;
                return (
                    n.open ||
                        (e.enter("blockQuote", { _container: !0 }),
                        (n.open = !0)),
                    e.enter("blockQuotePrefix"),
                    e.enter("blockQuoteMarker"),
                    e.consume(t),
                    e.exit("blockQuoteMarker"),
                    l
                );
            }
            return n(t);
        };
        function l(n) {
            return Se(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
        }
    },
    continuation: {
        tokenize: function (e, t, n) {
            return Te(
                e,
                e.attempt(Ye, t, n),
                "linePrefix",
                this.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
            );
        }
    },
    exit: function (e) {
        e.exit("blockQuote");
    }
};
const Ke = {
    name: "characterEscape",
    tokenize: function (e, t, n) {
        return function (t) {
            return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
            );
        };
        function r(r) {
            return ve(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
        }
    }
};
const Xe = {
        AElig: "Æ",
        AMP: "&",
        Aacute: "Á",
        Abreve: "Ă",
        Acirc: "Â",
        Acy: "А",
        Afr: "𝔄",
        Agrave: "À",
        Alpha: "Α",
        Amacr: "Ā",
        And: "⩓",
        Aogon: "Ą",
        Aopf: "𝔸",
        ApplyFunction: "⁡",
        Aring: "Å",
        Ascr: "𝒜",
        Assign: "≔",
        Atilde: "Ã",
        Auml: "Ä",
        Backslash: "∖",
        Barv: "⫧",
        Barwed: "⌆",
        Bcy: "Б",
        Because: "∵",
        Bernoullis: "ℬ",
        Beta: "Β",
        Bfr: "𝔅",
        Bopf: "𝔹",
        Breve: "˘",
        Bscr: "ℬ",
        Bumpeq: "≎",
        CHcy: "Ч",
        COPY: "©",
        Cacute: "Ć",
        Cap: "⋒",
        CapitalDifferentialD: "ⅅ",
        Cayleys: "ℭ",
        Ccaron: "Č",
        Ccedil: "Ç",
        Ccirc: "Ĉ",
        Cconint: "∰",
        Cdot: "Ċ",
        Cedilla: "¸",
        CenterDot: "·",
        Cfr: "ℭ",
        Chi: "Χ",
        CircleDot: "⊙",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        Colon: "∷",
        Colone: "⩴",
        Congruent: "≡",
        Conint: "∯",
        ContourIntegral: "∮",
        Copf: "ℂ",
        Coproduct: "∐",
        CounterClockwiseContourIntegral: "∳",
        Cross: "⨯",
        Cscr: "𝒞",
        Cup: "⋓",
        CupCap: "≍",
        DD: "ⅅ",
        DDotrahd: "⤑",
        DJcy: "Ђ",
        DScy: "Ѕ",
        DZcy: "Џ",
        Dagger: "‡",
        Darr: "↡",
        Dashv: "⫤",
        Dcaron: "Ď",
        Dcy: "Д",
        Del: "∇",
        Delta: "Δ",
        Dfr: "𝔇",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        Diamond: "⋄",
        DifferentialD: "ⅆ",
        Dopf: "𝔻",
        Dot: "¨",
        DotDot: "⃜",
        DotEqual: "≐",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        Downarrow: "⇓",
        Dscr: "𝒟",
        Dstrok: "Đ",
        ENG: "Ŋ",
        ETH: "Ð",
        Eacute: "É",
        Ecaron: "Ě",
        Ecirc: "Ê",
        Ecy: "Э",
        Edot: "Ė",
        Efr: "𝔈",
        Egrave: "È",
        Element: "∈",
        Emacr: "Ē",
        EmptySmallSquare: "◻",
        EmptyVerySmallSquare: "▫",
        Eogon: "Ę",
        Eopf: "𝔼",
        Epsilon: "Ε",
        Equal: "⩵",
        EqualTilde: "≂",
        Equilibrium: "⇌",
        Escr: "ℰ",
        Esim: "⩳",
        Eta: "Η",
        Euml: "Ë",
        Exists: "∃",
        ExponentialE: "ⅇ",
        Fcy: "Ф",
        Ffr: "𝔉",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        Fopf: "𝔽",
        ForAll: "∀",
        Fouriertrf: "ℱ",
        Fscr: "ℱ",
        GJcy: "Ѓ",
        GT: ">",
        Gamma: "Γ",
        Gammad: "Ϝ",
        Gbreve: "Ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        Gcy: "Г",
        Gdot: "Ġ",
        Gfr: "𝔊",
        Gg: "⋙",
        Gopf: "𝔾",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        Gt: "≫",
        HARDcy: "Ъ",
        Hacek: "ˇ",
        Hat: "^",
        Hcirc: "Ĥ",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        Hopf: "ℍ",
        HorizontalLine: "─",
        Hscr: "ℋ",
        Hstrok: "Ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        IEcy: "Е",
        IJlig: "Ĳ",
        IOcy: "Ё",
        Iacute: "Í",
        Icirc: "Î",
        Icy: "И",
        Idot: "İ",
        Ifr: "ℑ",
        Igrave: "Ì",
        Im: "ℑ",
        Imacr: "Ī",
        ImaginaryI: "ⅈ",
        Implies: "⇒",
        Int: "∬",
        Integral: "∫",
        Intersection: "⋂",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        Iogon: "Į",
        Iopf: "𝕀",
        Iota: "Ι",
        Iscr: "ℐ",
        Itilde: "Ĩ",
        Iukcy: "І",
        Iuml: "Ï",
        Jcirc: "Ĵ",
        Jcy: "Й",
        Jfr: "𝔍",
        Jopf: "𝕁",
        Jscr: "𝒥",
        Jsercy: "Ј",
        Jukcy: "Є",
        KHcy: "Х",
        KJcy: "Ќ",
        Kappa: "Κ",
        Kcedil: "Ķ",
        Kcy: "К",
        Kfr: "𝔎",
        Kopf: "𝕂",
        Kscr: "𝒦",
        LJcy: "Љ",
        LT: "<",
        Lacute: "Ĺ",
        Lambda: "Λ",
        Lang: "⟪",
        Laplacetrf: "ℒ",
        Larr: "↞",
        Lcaron: "Ľ",
        Lcedil: "Ļ",
        Lcy: "Л",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        LeftRightArrow: "↔",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        Leftarrow: "⇐",
        Leftrightarrow: "⇔",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        LessLess: "⪡",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        Lfr: "𝔏",
        Ll: "⋘",
        Lleftarrow: "⇚",
        Lmidot: "Ŀ",
        LongLeftArrow: "⟵",
        LongLeftRightArrow: "⟷",
        LongRightArrow: "⟶",
        Longleftarrow: "⟸",
        Longleftrightarrow: "⟺",
        Longrightarrow: "⟹",
        Lopf: "𝕃",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        Lscr: "ℒ",
        Lsh: "↰",
        Lstrok: "Ł",
        Lt: "≪",
        Map: "⤅",
        Mcy: "М",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        MinusPlus: "∓",
        Mopf: "𝕄",
        Mscr: "ℳ",
        Mu: "Μ",
        NJcy: "Њ",
        Nacute: "Ń",
        Ncaron: "Ň",
        Ncedil: "Ņ",
        Ncy: "Н",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        Nfr: "𝔑",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        Not: "⫬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        Nscr: "𝒩",
        Ntilde: "Ñ",
        Nu: "Ν",
        OElig: "Œ",
        Oacute: "Ó",
        Ocirc: "Ô",
        Ocy: "О",
        Odblac: "Ő",
        Ofr: "𝔒",
        Ograve: "Ò",
        Omacr: "Ō",
        Omega: "Ω",
        Omicron: "Ο",
        Oopf: "𝕆",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        Or: "⩔",
        Oscr: "𝒪",
        Oslash: "Ø",
        Otilde: "Õ",
        Otimes: "⨷",
        Ouml: "Ö",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        PartialD: "∂",
        Pcy: "П",
        Pfr: "𝔓",
        Phi: "Φ",
        Pi: "Π",
        PlusMinus: "±",
        Poincareplane: "ℌ",
        Popf: "ℙ",
        Pr: "⪻",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        Prime: "″",
        Product: "∏",
        Proportion: "∷",
        Proportional: "∝",
        Pscr: "𝒫",
        Psi: "Ψ",
        QUOT: '"',
        Qfr: "𝔔",
        Qopf: "ℚ",
        Qscr: "𝒬",
        RBarr: "⤐",
        REG: "®",
        Racute: "Ŕ",
        Rang: "⟫",
        Rarr: "↠",
        Rarrtl: "⤖",
        Rcaron: "Ř",
        Rcedil: "Ŗ",
        Rcy: "Р",
        Re: "ℜ",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        Rfr: "ℜ",
        Rho: "Ρ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        Rightarrow: "⇒",
        Ropf: "ℝ",
        RoundImplies: "⥰",
        Rrightarrow: "⇛",
        Rscr: "ℛ",
        Rsh: "↱",
        RuleDelayed: "⧴",
        SHCHcy: "Щ",
        SHcy: "Ш",
        SOFTcy: "Ь",
        Sacute: "Ś",
        Sc: "⪼",
        Scaron: "Š",
        Scedil: "Ş",
        Scirc: "Ŝ",
        Scy: "С",
        Sfr: "𝔖",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        Sigma: "Σ",
        SmallCircle: "∘",
        Sopf: "𝕊",
        Sqrt: "√",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        Sscr: "𝒮",
        Star: "⋆",
        Sub: "⋐",
        Subset: "⋐",
        SubsetEqual: "⊆",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        SuchThat: "∋",
        Sum: "∑",
        Sup: "⋑",
        Superset: "⊃",
        SupersetEqual: "⊇",
        Supset: "⋑",
        THORN: "Þ",
        TRADE: "™",
        TSHcy: "Ћ",
        TScy: "Ц",
        Tab: "\t",
        Tau: "Τ",
        Tcaron: "Ť",
        Tcedil: "Ţ",
        Tcy: "Т",
        Tfr: "𝔗",
        Therefore: "∴",
        Theta: "Θ",
        ThickSpace: "  ",
        ThinSpace: " ",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        Topf: "𝕋",
        TripleDot: "⃛",
        Tscr: "𝒯",
        Tstrok: "Ŧ",
        Uacute: "Ú",
        Uarr: "↟",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        Ubreve: "Ŭ",
        Ucirc: "Û",
        Ucy: "У",
        Udblac: "Ű",
        Ufr: "𝔘",
        Ugrave: "Ù",
        Umacr: "Ū",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        Uopf: "𝕌",
        UpArrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        UpEquilibrium: "⥮",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        Uparrow: "⇑",
        Updownarrow: "⇕",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        Upsilon: "Υ",
        Uring: "Ů",
        Uscr: "𝒰",
        Utilde: "Ũ",
        Uuml: "Ü",
        VDash: "⊫",
        Vbar: "⫫",
        Vcy: "В",
        Vdash: "⊩",
        Vdashl: "⫦",
        Vee: "⋁",
        Verbar: "‖",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        Vopf: "𝕍",
        Vscr: "𝒱",
        Vvdash: "⊪",
        Wcirc: "Ŵ",
        Wedge: "⋀",
        Wfr: "𝔚",
        Wopf: "𝕎",
        Wscr: "𝒲",
        Xfr: "𝔛",
        Xi: "Ξ",
        Xopf: "𝕏",
        Xscr: "𝒳",
        YAcy: "Я",
        YIcy: "Ї",
        YUcy: "Ю",
        Yacute: "Ý",
        Ycirc: "Ŷ",
        Ycy: "Ы",
        Yfr: "𝔜",
        Yopf: "𝕐",
        Yscr: "𝒴",
        Yuml: "Ÿ",
        ZHcy: "Ж",
        Zacute: "Ź",
        Zcaron: "Ž",
        Zcy: "З",
        Zdot: "Ż",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        Zfr: "ℨ",
        Zopf: "ℤ",
        Zscr: "𝒵",
        aacute: "á",
        abreve: "ă",
        ac: "∾",
        acE: "∾̳",
        acd: "∿",
        acirc: "â",
        acute: "´",
        acy: "а",
        aelig: "æ",
        af: "⁡",
        afr: "𝔞",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        alpha: "α",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        aogon: "ą",
        aopf: "𝕒",
        ap: "≈",
        apE: "⩰",
        apacir: "⩯",
        ape: "≊",
        apid: "≋",
        apos: "'",
        approx: "≈",
        approxeq: "≊",
        aring: "å",
        ascr: "𝒶",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        atilde: "ã",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        bNot: "⫭",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        barvee: "⊽",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bnot: "⌐",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxDL: "╗",
        boxDR: "╔",
        boxDl: "╖",
        boxDr: "╓",
        boxH: "═",
        boxHD: "╦",
        boxHU: "╩",
        boxHd: "╤",
        boxHu: "╧",
        boxUL: "╝",
        boxUR: "╚",
        boxUl: "╜",
        boxUr: "╙",
        boxV: "║",
        boxVH: "╬",
        boxVL: "╣",
        boxVR: "╠",
        boxVh: "╫",
        boxVl: "╢",
        boxVr: "╟",
        boxbox: "⧉",
        boxdL: "╕",
        boxdR: "╒",
        boxdl: "┐",
        boxdr: "┌",
        boxh: "─",
        boxhD: "╥",
        boxhU: "╨",
        boxhd: "┬",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxuL: "╛",
        boxuR: "╘",
        boxul: "┘",
        boxur: "└",
        boxv: "│",
        boxvH: "╪",
        boxvL: "╡",
        boxvR: "╞",
        boxvh: "┼",
        boxvl: "┤",
        boxvr: "├",
        bprime: "‵",
        breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        bumpeq: "≏",
        cacute: "ć",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        ccaps: "⩍",
        ccaron: "č",
        ccedil: "ç",
        ccirc: "ĉ",
        ccups: "⩌",
        ccupssm: "⩐",
        cdot: "ċ",
        cedil: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        cfr: "𝔠",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        chi: "χ",
        cir: "○",
        cirE: "⧃",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledR: "®",
        circledS: "Ⓢ",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        conint: "∮",
        copf: "𝕔",
        coprod: "∐",
        copy: "©",
        copysr: "℗",
        crarr: "↵",
        cross: "✗",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cup: "∪",
        cupbrcap: "⩈",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dArr: "⇓",
        dHar: "⥥",
        dagger: "†",
        daleth: "ℸ",
        darr: "↓",
        dash: "‐",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        dcaron: "ď",
        dcy: "д",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        ddotseq: "⩷",
        deg: "°",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        dfr: "𝔡",
        dharl: "⇃",
        dharr: "⇂",
        diam: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        dopf: "𝕕",
        dot: "˙",
        doteq: "≐",
        doteqdot: "≑",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        downarrow: "↓",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        dscr: "𝒹",
        dscy: "ѕ",
        dsol: "⧶",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        dzcy: "џ",
        dzigrarr: "⟿",
        eDDot: "⩷",
        eDot: "≑",
        eacute: "é",
        easter: "⩮",
        ecaron: "ě",
        ecir: "≖",
        ecirc: "ê",
        ecolon: "≕",
        ecy: "э",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        efr: "𝔢",
        eg: "⪚",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        emptyv: "∅",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        eng: "ŋ",
        ensp: " ",
        eogon: "ę",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        equals: "=",
        equest: "≟",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erDot: "≓",
        erarr: "⥱",
        escr: "ℯ",
        esdot: "≐",
        esim: "≂",
        eta: "η",
        eth: "ð",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        ffr: "𝔣",
        filig: "ﬁ",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        fopf: "𝕗",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        gE: "≧",
        gEl: "⪌",
        gacute: "ǵ",
        gamma: "γ",
        gammad: "ϝ",
        gap: "⪆",
        gbreve: "ğ",
        gcirc: "ĝ",
        gcy: "г",
        gdot: "ġ",
        ge: "≥",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        gfr: "𝔤",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        gjcy: "ѓ",
        gl: "≷",
        glE: "⪒",
        gla: "⪥",
        glj: "⪤",
        gnE: "≩",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        gopf: "𝕘",
        grave: "`",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        hArr: "⇔",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        hardcy: "ъ",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        hbar: "ℏ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        horbar: "―",
        hscr: "𝒽",
        hslash: "ℏ",
        hstrok: "ħ",
        hybull: "⁃",
        hyphen: "‐",
        iacute: "í",
        ic: "⁣",
        icirc: "î",
        icy: "и",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        ijlig: "ĳ",
        imacr: "ī",
        image: "ℑ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        int: "∫",
        intcal: "⊺",
        integers: "ℤ",
        intercal: "⊺",
        intlarhk: "⨗",
        intprod: "⨼",
        iocy: "ё",
        iogon: "į",
        iopf: "𝕚",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        isin: "∈",
        isinE: "⋹",
        isindot: "⋵",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        itilde: "ĩ",
        iukcy: "і",
        iuml: "ï",
        jcirc: "ĵ",
        jcy: "й",
        jfr: "𝔧",
        jmath: "ȷ",
        jopf: "𝕛",
        jscr: "𝒿",
        jsercy: "ј",
        jukcy: "є",
        kappa: "κ",
        kappav: "ϰ",
        kcedil: "ķ",
        kcy: "к",
        kfr: "𝔨",
        kgreen: "ĸ",
        khcy: "х",
        kjcy: "ќ",
        kopf: "𝕜",
        kscr: "𝓀",
        lAarr: "⇚",
        lArr: "⇐",
        lAtail: "⤛",
        lBarr: "⤎",
        lE: "≦",
        lEg: "⪋",
        lHar: "⥢",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        lambda: "λ",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        laquo: "«",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        lcaron: "ľ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        leftarrow: "←",
        leftarrowtail: "↢",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        leftthreetimes: "⋋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        lessgtr: "≶",
        lesssim: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        ljcy: "љ",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        llhard: "⥫",
        lltri: "◺",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnE: "≨",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        lstrok: "ł",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltrPar: "⦖",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        mDDot: "∺",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        mcy: "м",
        mdash: "—",
        measuredangle: "∡",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        mstpos: "∾",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nGg: "⋙̸",
        nGt: "≫⃒",
        nGtv: "≫̸",
        nLeftarrow: "⇍",
        nLeftrightarrow: "⇎",
        nLl: "⋘̸",
        nLt: "≪⃒",
        nLtv: "≪̸",
        nRightarrow: "⇏",
        nVDash: "⊯",
        nVdash: "⊮",
        nabla: "∇",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        ncaron: "ň",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        neArr: "⇗",
        nearhk: "⤤",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        nexist: "∄",
        nexists: "∄",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        ngsim: "≵",
        ngt: "≯",
        ngtr: "≯",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        njcy: "њ",
        nlArr: "⇍",
        nlE: "≦̸",
        nlarr: "↚",
        nldr: "‥",
        nle: "≰",
        nleftarrow: "↚",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nlsim: "≴",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nmid: "∤",
        nopf: "𝕟",
        not: "¬",
        notin: "∉",
        notinE: "⋹̸",
        notindot: "⋵̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvDash: "⊭",
        nvHarr: "⤄",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwArr: "⇖",
        nwarhk: "⤣",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        oS: "Ⓢ",
        oacute: "ó",
        oast: "⊛",
        ocir: "⊚",
        ocirc: "ô",
        ocy: "о",
        odash: "⊝",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        oelig: "œ",
        ofcir: "⦿",
        ofr: "𝔬",
        ogon: "˛",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        omacr: "ō",
        omega: "ω",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        oopf: "𝕠",
        opar: "⦷",
        operp: "⦹",
        oplus: "⊕",
        or: "∨",
        orarr: "↻",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oscr: "ℴ",
        oslash: "ø",
        osol: "⊘",
        otilde: "õ",
        otimes: "⊗",
        otimesas: "⨶",
        ouml: "ö",
        ovbar: "⌽",
        par: "∥",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        pfr: "𝔭",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        pointint: "⨕",
        popf: "𝕡",
        pound: "£",
        pr: "≺",
        prE: "⪳",
        prap: "⪷",
        prcue: "≼",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        prime: "′",
        primes: "ℙ",
        prnE: "⪵",
        prnap: "⪹",
        prnsim: "⋨",
        prod: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        pscr: "𝓅",
        psi: "ψ",
        puncsp: " ",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        qprime: "⁗",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        rAarr: "⇛",
        rArr: "⇒",
        rAtail: "⤜",
        rBarr: "⤏",
        rHar: "⥤",
        race: "∽̱",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        rcaron: "ř",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        reg: "®",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        rho: "ρ",
        rhov: "ϱ",
        rightarrow: "→",
        rightarrowtail: "↣",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        rightthreetimes: "⋌",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        rsaquo: "›",
        rscr: "𝓇",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        ruluhar: "⥨",
        rx: "℞",
        sacute: "ś",
        sbquo: "‚",
        sc: "≻",
        scE: "⪴",
        scap: "⪸",
        scaron: "š",
        sccue: "≽",
        sce: "⪰",
        scedil: "ş",
        scirc: "ŝ",
        scnE: "⪶",
        scnap: "⪺",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        seArr: "⇘",
        searhk: "⤥",
        searr: "↘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        shchcy: "щ",
        shcy: "ш",
        shortmid: "∣",
        shortparallel: "∥",
        shy: "­",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        square: "□",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        subE: "⫅",
        subdot: "⪽",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        supE: "⫆",
        supdot: "⪾",
        supdsub: "⫘",
        supe: "⊇",
        supedot: "⫄",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swArr: "⇙",
        swarhk: "⤦",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        target: "⌖",
        tau: "τ",
        tbrk: "⎴",
        tcaron: "ť",
        tcedil: "ţ",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        thorn: "þ",
        tilde: "˜",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        tscr: "𝓉",
        tscy: "ц",
        tshcy: "ћ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        uArr: "⇑",
        uHar: "⥣",
        uacute: "ú",
        uarr: "↑",
        ubrcy: "ў",
        ubreve: "ŭ",
        ucirc: "û",
        ucy: "у",
        udarr: "⇅",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        ufr: "𝔲",
        ugrave: "ù",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        umacr: "ū",
        uml: "¨",
        uogon: "ų",
        uopf: "𝕦",
        uparrow: "↑",
        updownarrow: "↕",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        upsi: "υ",
        upsih: "ϒ",
        upsilon: "υ",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        uring: "ů",
        urtri: "◹",
        uscr: "𝓊",
        utdot: "⋰",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        uuml: "ü",
        uwangle: "⦧",
        vArr: "⇕",
        vBar: "⫨",
        vBarv: "⫩",
        vDash: "⊨",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vcy: "в",
        vdash: "⊢",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        vert: "|",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        vzigzag: "⦚",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        wfr: "𝔴",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        yacute: "ý",
        yacy: "я",
        ycirc: "ŷ",
        ycy: "ы",
        yen: "¥",
        yfr: "𝔶",
        yicy: "ї",
        yopf: "𝕪",
        yscr: "𝓎",
        yucy: "ю",
        yuml: "ÿ",
        zacute: "ź",
        zcaron: "ž",
        zcy: "з",
        zdot: "ż",
        zeetrf: "ℨ",
        zeta: "ζ",
        zfr: "𝔷",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
    },
    Je = {}.hasOwnProperty;
function Ze(e) {
    return !!Je.call(Xe, e) && Xe[e];
}
const et = {
    name: "characterReference",
    tokenize: function (e, t, n) {
        const r = this;
        let l,
            o,
            a = 0;
        return function (t) {
            return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                i
            );
        };
        function i(t) {
            return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  u)
                : (e.enter("characterReferenceValue"),
                  (l = 31),
                  (o = ye),
                  s(t));
        }
        function u(t) {
            return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (l = 6),
                  (o = ge),
                  s)
                : (e.enter("characterReferenceValue"), (l = 7), (o = me), s(t));
        }
        function s(i) {
            let u;
            return 59 === i && a
                ? ((u = e.exit("characterReferenceValue")),
                  o !== ye || Ze(r.sliceSerialize(u))
                      ? (e.enter("characterReferenceMarker"),
                        e.consume(i),
                        e.exit("characterReferenceMarker"),
                        e.exit("characterReference"),
                        t)
                      : n(i))
                : o(i) && a++ < l
                ? (e.consume(i), s)
                : n(i);
        }
    }
};
const tt = {
    name: "codeFenced",
    tokenize: function (e, t, n) {
        const r = this,
            l = {
                tokenize: function (e, t, n) {
                    let r = 0;
                    return Te(
                        e,
                        l,
                        "linePrefix",
                        this.parser.constructs.disable.null.includes(
                            "codeIndented"
                        )
                            ? void 0
                            : 4
                    );
                    function l(t) {
                        return (
                            e.enter("codeFencedFence"),
                            e.enter("codeFencedFenceSequence"),
                            o(t)
                        );
                    }
                    function o(t) {
                        return t === u
                            ? (e.consume(t), r++, o)
                            : r < s
                            ? n(t)
                            : (e.exit("codeFencedFenceSequence"),
                              Te(e, a, "whitespace")(t));
                    }
                    function a(r) {
                        return null === r || we(r)
                            ? (e.exit("codeFencedFence"), t(r))
                            : n(r);
                    }
                },
                partial: !0
            },
            o = {
                tokenize: function (e, t, n) {
                    const r = this;
                    return l;
                    function l(t) {
                        return (
                            e.enter("lineEnding"),
                            e.consume(t),
                            e.exit("lineEnding"),
                            o
                        );
                    }
                    function o(e) {
                        return r.parser.lazy[r.now().line] ? n(e) : t(e);
                    }
                },
                partial: !0
            },
            a = this.events[this.events.length - 1],
            i =
                a && "linePrefix" === a[1].type
                    ? a[2].sliceSerialize(a[1], !0).length
                    : 0;
        let u,
            s = 0;
        return function (t) {
            return (
                e.enter("codeFenced"),
                e.enter("codeFencedFence"),
                e.enter("codeFencedFenceSequence"),
                (u = t),
                c(t)
            );
        };
        function c(t) {
            return t === u
                ? (e.consume(t), s++, c)
                : (e.exit("codeFencedFenceSequence"),
                  s < 3 ? n(t) : Te(e, f, "whitespace")(t));
        }
        function f(t) {
            return null === t || we(t)
                ? m(t)
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  d(t));
        }
        function d(t) {
            return null === t || xe(t)
                ? (e.exit("chunkString"),
                  e.exit("codeFencedFenceInfo"),
                  Te(e, p, "whitespace")(t))
                : 96 === t && t === u
                ? n(t)
                : (e.consume(t), d);
        }
        function p(t) {
            return null === t || we(t)
                ? m(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  h(t));
        }
        function h(t) {
            return null === t || we(t)
                ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(t))
                : 96 === t && t === u
                ? n(t)
                : (e.consume(t), h);
        }
        function m(n) {
            return e.exit("codeFencedFence"), r.interrupt ? t(n) : g(n);
        }
        function g(t) {
            return null === t
                ? v(t)
                : we(t)
                ? e.attempt(
                      o,
                      e.attempt(l, v, i ? Te(e, g, "linePrefix", i + 1) : g),
                      v
                  )(t)
                : (e.enter("codeFlowValue"), y(t));
        }
        function y(t) {
            return null === t || we(t)
                ? (e.exit("codeFlowValue"), g(t))
                : (e.consume(t), y);
        }
        function v(n) {
            return e.exit("codeFenced"), t(n);
        }
    },
    concrete: !0
};
const nt = {
        name: "codeIndented",
        tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
                return e.enter("codeIndented"), Te(e, l, "linePrefix", 5)(t);
            };
            function l(e) {
                const t = r.events[r.events.length - 1];
                return t &&
                    "linePrefix" === t[1].type &&
                    t[2].sliceSerialize(t[1], !0).length >= 4
                    ? o(e)
                    : n(e);
            }
            function o(t) {
                return null === t
                    ? i(t)
                    : we(t)
                    ? e.attempt(rt, o, i)(t)
                    : (e.enter("codeFlowValue"), a(t));
            }
            function a(t) {
                return null === t || we(t)
                    ? (e.exit("codeFlowValue"), o(t))
                    : (e.consume(t), a);
            }
            function i(n) {
                return e.exit("codeIndented"), t(n);
            }
        }
    },
    rt = {
        tokenize: function (e, t, n) {
            const r = this;
            return l;
            function l(t) {
                return r.parser.lazy[r.now().line]
                    ? n(t)
                    : we(t)
                    ? (e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      l)
                    : Te(e, o, "linePrefix", 5)(t);
            }
            function o(e) {
                const o = r.events[r.events.length - 1];
                return o &&
                    "linePrefix" === o[1].type &&
                    o[2].sliceSerialize(o[1], !0).length >= 4
                    ? t(e)
                    : we(e)
                    ? l(e)
                    : n(e);
            }
        },
        partial: !0
    };
function lt(e, t, n, r, l, o, a, i, u) {
    const s = u || Number.POSITIVE_INFINITY;
    let c = 0;
    return function (t) {
        if (60 === t)
            return (
                e.enter(r), e.enter(l), e.enter(o), e.consume(t), e.exit(o), f
            );
        return null === t || 41 === t || ke(t)
            ? n(t)
            : (e.enter(r),
              e.enter(a),
              e.enter(i),
              e.enter("chunkString", { contentType: "string" }),
              h(t));
    };
    function f(n) {
        return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(l), e.exit(r), t)
            : (e.enter(i),
              e.enter("chunkString", { contentType: "string" }),
              d(n));
    }
    function d(t) {
        return 62 === t
            ? (e.exit("chunkString"), e.exit(i), f(t))
            : null === t || 60 === t || we(t)
            ? n(t)
            : (e.consume(t), 92 === t ? p : d);
    }
    function p(t) {
        return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t);
    }
    function h(l) {
        return 40 === l
            ? ++c > s
                ? n(l)
                : (e.consume(l), h)
            : 41 === l
            ? c--
                ? (e.consume(l), h)
                : (e.exit("chunkString"), e.exit(i), e.exit(a), e.exit(r), t(l))
            : null === l || xe(l)
            ? c
                ? n(l)
                : (e.exit("chunkString"), e.exit(i), e.exit(a), e.exit(r), t(l))
            : ke(l)
            ? n(l)
            : (e.consume(l), 92 === l ? m : h);
    }
    function m(t) {
        return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
    }
}
function ot(e, t, n, r, l, o) {
    const a = this;
    let i,
        u = 0;
    return function (t) {
        return e.enter(r), e.enter(l), e.consume(t), e.exit(l), e.enter(o), s;
    };
    function s(f) {
        return null === f ||
            91 === f ||
            (93 === f && !i) ||
            (94 === f &&
                !u &&
                "_hiddenFootnoteSupport" in a.parser.constructs) ||
            u > 999
            ? n(f)
            : 93 === f
            ? (e.exit(o), e.enter(l), e.consume(f), e.exit(l), e.exit(r), t)
            : we(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s)
            : (e.enter("chunkString", { contentType: "string" }), c(f));
    }
    function c(t) {
        return null === t || 91 === t || 93 === t || we(t) || u++ > 999
            ? (e.exit("chunkString"), s(t))
            : (e.consume(t), (i = i || !Se(t)), 92 === t ? f : c);
    }
    function f(t) {
        return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c) : c(t);
    }
}
function at(e, t, n, r, l, o) {
    let a;
    return function (t) {
        return (
            e.enter(r),
            e.enter(l),
            e.consume(t),
            e.exit(l),
            (a = 40 === t ? 41 : t),
            i
        );
    };
    function i(n) {
        return n === a
            ? (e.enter(l), e.consume(n), e.exit(l), e.exit(r), t)
            : (e.enter(o), u(n));
    }
    function u(t) {
        return t === a
            ? (e.exit(o), i(a))
            : null === t
            ? n(t)
            : we(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              Te(e, u, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), s(t));
    }
    function s(t) {
        return t === a || null === t || we(t)
            ? (e.exit("chunkString"), u(t))
            : (e.consume(t), 92 === t ? c : s);
    }
    function c(t) {
        return t === a || 92 === t ? (e.consume(t), s) : s(t);
    }
}
function it(e, t) {
    let n;
    return function r(l) {
        if (we(l))
            return (
                e.enter("lineEnding"),
                e.consume(l),
                e.exit("lineEnding"),
                (n = !0),
                r
            );
        return Se(l) ? Te(e, r, n ? "linePrefix" : "lineSuffix")(l) : t(l);
    };
}
function ut(e) {
    return e
        .replace(/[\t\n\r ]+/g, " ")
        .replace(/^ | $/g, "")
        .toLowerCase()
        .toUpperCase();
}
const st = {
        name: "definition",
        tokenize: function (e, t, n) {
            const r = this;
            let l;
            return function (t) {
                return (
                    e.enter("definition"),
                    ot.call(
                        r,
                        e,
                        o,
                        n,
                        "definitionLabel",
                        "definitionLabelMarker",
                        "definitionLabelString"
                    )(t)
                );
            };
            function o(t) {
                return (
                    (l = ut(
                        r
                            .sliceSerialize(r.events[r.events.length - 1][1])
                            .slice(1, -1)
                    )),
                    58 === t
                        ? (e.enter("definitionMarker"),
                          e.consume(t),
                          e.exit("definitionMarker"),
                          it(
                              e,
                              lt(
                                  e,
                                  e.attempt(
                                      ct,
                                      Te(e, a, "whitespace"),
                                      Te(e, a, "whitespace")
                                  ),
                                  n,
                                  "definitionDestination",
                                  "definitionDestinationLiteral",
                                  "definitionDestinationLiteralMarker",
                                  "definitionDestinationRaw",
                                  "definitionDestinationString"
                              )
                          ))
                        : n(t)
                );
            }
            function a(o) {
                return null === o || we(o)
                    ? (e.exit("definition"),
                      r.parser.defined.includes(l) || r.parser.defined.push(l),
                      t(o))
                    : n(o);
            }
        }
    },
    ct = {
        tokenize: function (e, t, n) {
            return function (t) {
                return xe(t) ? it(e, r)(t) : n(t);
            };
            function r(t) {
                return 34 === t || 39 === t || 40 === t
                    ? at(
                          e,
                          Te(e, l, "whitespace"),
                          n,
                          "definitionTitle",
                          "definitionTitleMarker",
                          "definitionTitleString"
                      )(t)
                    : n(t);
            }
            function l(e) {
                return null === e || we(e) ? t(e) : n(e);
            }
        },
        partial: !0
    };
const ft = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "section",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul"
    ],
    dt = ["pre", "script", "style", "textarea"],
    pt = {
        name: "htmlFlow",
        tokenize: function (e, t, n) {
            const r = this;
            let l, o, a, i, u;
            return function (t) {
                return (
                    e.enter("htmlFlow"),
                    e.enter("htmlFlowData"),
                    e.consume(t),
                    s
                );
            };
            function s(i) {
                return 33 === i
                    ? (e.consume(i), c)
                    : 47 === i
                    ? (e.consume(i), p)
                    : 63 === i
                    ? (e.consume(i), (l = 3), r.interrupt ? t : R)
                    : he(i)
                    ? (e.consume(i), (a = String.fromCharCode(i)), (o = !0), h)
                    : n(i);
            }
            function c(o) {
                return 45 === o
                    ? (e.consume(o), (l = 2), f)
                    : 91 === o
                    ? (e.consume(o), (l = 5), (a = "CDATA["), (i = 0), d)
                    : he(o)
                    ? (e.consume(o), (l = 4), r.interrupt ? t : R)
                    : n(o);
            }
            function f(l) {
                return 45 === l ? (e.consume(l), r.interrupt ? t : R) : n(l);
            }
            function d(l) {
                return l === a.charCodeAt(i++)
                    ? (e.consume(l), i === a.length ? (r.interrupt ? t : L) : d)
                    : n(l);
            }
            function p(t) {
                return he(t)
                    ? (e.consume(t), (a = String.fromCharCode(t)), h)
                    : n(t);
            }
            function h(i) {
                return null === i || 47 === i || 62 === i || xe(i)
                    ? 47 !== i && o && dt.includes(a.toLowerCase())
                        ? ((l = 1), r.interrupt ? t(i) : L(i))
                        : ft.includes(a.toLowerCase())
                        ? ((l = 6),
                          47 === i
                              ? (e.consume(i), m)
                              : r.interrupt
                              ? t(i)
                              : L(i))
                        : ((l = 7),
                          r.interrupt && !r.parser.lazy[r.now().line]
                              ? n(i)
                              : o
                              ? y(i)
                              : g(i))
                    : 45 === i || ye(i)
                    ? (e.consume(i), (a += String.fromCharCode(i)), h)
                    : n(i);
            }
            function m(l) {
                return 62 === l ? (e.consume(l), r.interrupt ? t : L) : n(l);
            }
            function g(t) {
                return Se(t) ? (e.consume(t), g) : E(t);
            }
            function y(t) {
                return 47 === t
                    ? (e.consume(t), E)
                    : 58 === t || 95 === t || he(t)
                    ? (e.consume(t), v)
                    : Se(t)
                    ? (e.consume(t), y)
                    : E(t);
            }
            function v(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || ye(t)
                    ? (e.consume(t), v)
                    : b(t);
            }
            function b(t) {
                return 61 === t
                    ? (e.consume(t), k)
                    : Se(t)
                    ? (e.consume(t), b)
                    : y(t);
            }
            function k(t) {
                return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (u = t), x)
                    : Se(t)
                    ? (e.consume(t), k)
                    : ((u = null), w(t));
            }
            function x(t) {
                return null === t || we(t)
                    ? n(t)
                    : t === u
                    ? (e.consume(t), S)
                    : (e.consume(t), x);
            }
            function w(t) {
                return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t ||
                    xe(t)
                    ? b(t)
                    : (e.consume(t), w);
            }
            function S(e) {
                return 47 === e || 62 === e || Se(e) ? y(e) : n(e);
            }
            function E(t) {
                return 62 === t ? (e.consume(t), C) : n(t);
            }
            function C(t) {
                return Se(t)
                    ? (e.consume(t), C)
                    : null === t || we(t)
                    ? L(t)
                    : n(t);
            }
            function L(t) {
                return 45 === t && 2 === l
                    ? (e.consume(t), _)
                    : 60 === t && 1 === l
                    ? (e.consume(t), D)
                    : 62 === t && 4 === l
                    ? (e.consume(t), z)
                    : 63 === t && 3 === l
                    ? (e.consume(t), R)
                    : 93 === t && 5 === l
                    ? (e.consume(t), A)
                    : !we(t) || (6 !== l && 7 !== l)
                    ? null === t || we(t)
                        ? T(t)
                        : (e.consume(t), L)
                    : e.check(ht, z, T)(t);
            }
            function T(t) {
                return e.exit("htmlFlowData"), N(t);
            }
            function N(t) {
                return null === t
                    ? O(t)
                    : we(t)
                    ? e.attempt({ tokenize: P, partial: !0 }, N, O)(t)
                    : (e.enter("htmlFlowData"), L(t));
            }
            function P(e, t, n) {
                return function (t) {
                    return (
                        e.enter("lineEnding"),
                        e.consume(t),
                        e.exit("lineEnding"),
                        l
                    );
                };
                function l(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e);
                }
            }
            function _(t) {
                return 45 === t ? (e.consume(t), R) : L(t);
            }
            function D(t) {
                return 47 === t ? (e.consume(t), (a = ""), F) : L(t);
            }
            function F(t) {
                return 62 === t && dt.includes(a.toLowerCase())
                    ? (e.consume(t), z)
                    : he(t) && a.length < 8
                    ? (e.consume(t), (a += String.fromCharCode(t)), F)
                    : L(t);
            }
            function A(t) {
                return 93 === t ? (e.consume(t), R) : L(t);
            }
            function R(t) {
                return 62 === t
                    ? (e.consume(t), z)
                    : 45 === t && 2 === l
                    ? (e.consume(t), R)
                    : L(t);
            }
            function z(t) {
                return null === t || we(t)
                    ? (e.exit("htmlFlowData"), O(t))
                    : (e.consume(t), z);
            }
            function O(n) {
                return e.exit("htmlFlow"), t(n);
            }
        },
        resolveTo: function (e) {
            let t = e.length;
            for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

            );
            t > 1 &&
                "linePrefix" === e[t - 2][1].type &&
                ((e[t][1].start = e[t - 2][1].start),
                (e[t + 1][1].start = e[t - 2][1].start),
                e.splice(t - 2, 2));
            return e;
        },
        concrete: !0
    },
    ht = {
        tokenize: function (e, t, n) {
            return function (r) {
                return (
                    e.exit("htmlFlowData"),
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    e.attempt(De, t, n)
                );
            };
        },
        partial: !0
    };
const mt = {
        name: "labelEnd",
        tokenize: function (e, t, n) {
            const r = this;
            let l,
                o,
                a = r.events.length;
            for (; a--; )
                if (
                    ("labelImage" === r.events[a][1].type ||
                        "labelLink" === r.events[a][1].type) &&
                    !r.events[a][1]._balanced
                ) {
                    l = r.events[a][1];
                    break;
                }
            return function (t) {
                return l
                    ? l._inactive
                        ? u(t)
                        : ((o = r.parser.defined.includes(
                              ut(
                                  r.sliceSerialize({
                                      start: l.end,
                                      end: r.now()
                                  })
                              )
                          )),
                          e.enter("labelEnd"),
                          e.enter("labelMarker"),
                          e.consume(t),
                          e.exit("labelMarker"),
                          e.exit("labelEnd"),
                          i)
                    : n(t);
            };
            function i(n) {
                return 40 === n
                    ? e.attempt(gt, t, o ? t : u)(n)
                    : 91 === n
                    ? e.attempt(yt, t, o ? e.attempt(vt, t, u) : u)(n)
                    : o
                    ? t(n)
                    : u(n);
            }
            function u(e) {
                return (l._balanced = !0), n(e);
            }
        },
        resolveTo: function (e, t) {
            let n,
                r,
                l,
                o,
                a = e.length,
                i = 0;
            for (; a--; )
                if (((n = e[a][1]), r)) {
                    if (
                        "link" === n.type ||
                        ("labelLink" === n.type && n._inactive)
                    )
                        break;
                    "enter" === e[a][0] &&
                        "labelLink" === n.type &&
                        (n._inactive = !0);
                } else if (l) {
                    if (
                        "enter" === e[a][0] &&
                        ("labelImage" === n.type || "labelLink" === n.type) &&
                        !n._balanced &&
                        ((r = a), "labelLink" !== n.type)
                    ) {
                        i = 2;
                        break;
                    }
                } else "labelEnd" === n.type && (l = a);
            const u = {
                    type: "labelLink" === e[r][1].type ? "link" : "image",
                    start: Object.assign({}, e[r][1].start),
                    end: Object.assign({}, e[e.length - 1][1].end)
                },
                s = {
                    type: "label",
                    start: Object.assign({}, e[r][1].start),
                    end: Object.assign({}, e[l][1].end)
                },
                c = {
                    type: "labelText",
                    start: Object.assign({}, e[r + i + 2][1].end),
                    end: Object.assign({}, e[l - 2][1].start)
                };
            return (
                (o = [
                    ["enter", u, t],
                    ["enter", s, t]
                ]),
                (o = se(o, e.slice(r + 1, r + i + 3))),
                (o = se(o, [["enter", c, t]])),
                (o = se(
                    o,
                    Ve(
                        t.parser.constructs.insideSpan.null,
                        e.slice(r + i + 4, l - 3),
                        t
                    )
                )),
                (o = se(o, [
                    ["exit", c, t],
                    e[l - 2],
                    e[l - 1],
                    ["exit", s, t]
                ])),
                (o = se(o, e.slice(l + 1))),
                (o = se(o, [["exit", u, t]])),
                ue(e, r, e.length, o),
                e
            );
        },
        resolveAll: function (e) {
            let t,
                n = -1;
            for (; ++n < e.length; )
                (t = e[n][1]),
                    ("labelImage" !== t.type &&
                        "labelLink" !== t.type &&
                        "labelEnd" !== t.type) ||
                        (e.splice(n + 1, "labelImage" === t.type ? 4 : 2),
                        (t.type = "data"),
                        n++);
            return e;
        }
    },
    gt = {
        tokenize: function (e, t, n) {
            return function (t) {
                return (
                    e.enter("resource"),
                    e.enter("resourceMarker"),
                    e.consume(t),
                    e.exit("resourceMarker"),
                    it(e, r)
                );
            };
            function r(t) {
                return 41 === t
                    ? a(t)
                    : lt(
                          e,
                          l,
                          n,
                          "resourceDestination",
                          "resourceDestinationLiteral",
                          "resourceDestinationLiteralMarker",
                          "resourceDestinationRaw",
                          "resourceDestinationString",
                          32
                      )(t);
            }
            function l(t) {
                return xe(t) ? it(e, o)(t) : a(t);
            }
            function o(t) {
                return 34 === t || 39 === t || 40 === t
                    ? at(
                          e,
                          it(e, a),
                          n,
                          "resourceTitle",
                          "resourceTitleMarker",
                          "resourceTitleString"
                      )(t)
                    : a(t);
            }
            function a(r) {
                return 41 === r
                    ? (e.enter("resourceMarker"),
                      e.consume(r),
                      e.exit("resourceMarker"),
                      e.exit("resource"),
                      t)
                    : n(r);
            }
        }
    },
    yt = {
        tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
                return ot.call(
                    r,
                    e,
                    l,
                    n,
                    "reference",
                    "referenceMarker",
                    "referenceString"
                )(t);
            };
            function l(e) {
                return r.parser.defined.includes(
                    ut(
                        r
                            .sliceSerialize(r.events[r.events.length - 1][1])
                            .slice(1, -1)
                    )
                )
                    ? t(e)
                    : n(e);
            }
        }
    },
    vt = {
        tokenize: function (e, t, n) {
            return function (t) {
                return (
                    e.enter("reference"),
                    e.enter("referenceMarker"),
                    e.consume(t),
                    e.exit("referenceMarker"),
                    r
                );
            };
            function r(r) {
                return 93 === r
                    ? (e.enter("referenceMarker"),
                      e.consume(r),
                      e.exit("referenceMarker"),
                      e.exit("reference"),
                      t)
                    : n(r);
            }
        }
    };
const bt = {
    name: "lineEnding",
    tokenize: function (e, t) {
        return function (n) {
            return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                Te(e, t, "linePrefix")
            );
        };
    }
};
const kt = {
    name: "thematicBreak",
    tokenize: function (e, t, n) {
        let r,
            l = 0;
        return function (t) {
            return e.enter("thematicBreak"), (r = t), o(t);
        };
        function o(i) {
            return i === r
                ? (e.enter("thematicBreakSequence"), a(i))
                : Se(i)
                ? Te(e, o, "whitespace")(i)
                : l < 3 || (null !== i && !we(i))
                ? n(i)
                : (e.exit("thematicBreak"), t(i));
        }
        function a(t) {
            return t === r
                ? (e.consume(t), l++, a)
                : (e.exit("thematicBreakSequence"), o(t));
        }
    }
};
const xt = {
        name: "list",
        tokenize: function (e, t, n) {
            const r = this,
                l = r.events[r.events.length - 1];
            let o =
                    l && "linePrefix" === l[1].type
                        ? l[2].sliceSerialize(l[1], !0).length
                        : 0,
                a = 0;
            return function (t) {
                const l =
                    r.containerState.type ||
                    (42 === t || 43 === t || 45 === t
                        ? "listUnordered"
                        : "listOrdered");
                if (
                    "listUnordered" === l
                        ? !r.containerState.marker ||
                          t === r.containerState.marker
                        : me(t)
                ) {
                    if (
                        (r.containerState.type ||
                            ((r.containerState.type = l),
                            e.enter(l, { _container: !0 })),
                        "listUnordered" === l)
                    )
                        return (
                            e.enter("listItemPrefix"),
                            42 === t || 45 === t ? e.check(kt, n, u)(t) : u(t)
                        );
                    if (!r.interrupt || 49 === t)
                        return (
                            e.enter("listItemPrefix"),
                            e.enter("listItemValue"),
                            i(t)
                        );
                }
                return n(t);
            };
            function i(t) {
                return me(t) && ++a < 10
                    ? (e.consume(t), i)
                    : (!r.interrupt || a < 2) &&
                      (r.containerState.marker
                          ? t === r.containerState.marker
                          : 41 === t || 46 === t)
                    ? (e.exit("listItemValue"), u(t))
                    : n(t);
            }
            function u(t) {
                return (
                    e.enter("listItemMarker"),
                    e.consume(t),
                    e.exit("listItemMarker"),
                    (r.containerState.marker = r.containerState.marker || t),
                    e.check(De, r.interrupt ? n : s, e.attempt(wt, f, c))
                );
            }
            function s(e) {
                return (r.containerState.initialBlankLine = !0), o++, f(e);
            }
            function c(t) {
                return Se(t)
                    ? (e.enter("listItemPrefixWhitespace"),
                      e.consume(t),
                      e.exit("listItemPrefixWhitespace"),
                      f)
                    : n(t);
            }
            function f(n) {
                return (
                    (r.containerState.size =
                        o +
                        r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                    t(n)
                );
            }
        },
        continuation: {
            tokenize: function (e, t, n) {
                const r = this;
                return (
                    (r.containerState._closeFlow = void 0),
                    e.check(
                        De,
                        function (n) {
                            return (
                                (r.containerState.furtherBlankLines =
                                    r.containerState.furtherBlankLines ||
                                    r.containerState.initialBlankLine),
                                Te(
                                    e,
                                    t,
                                    "listItemIndent",
                                    r.containerState.size + 1
                                )(n)
                            );
                        },
                        function (n) {
                            if (r.containerState.furtherBlankLines || !Se(n))
                                return (
                                    (r.containerState.furtherBlankLines =
                                        void 0),
                                    (r.containerState.initialBlankLine =
                                        void 0),
                                    l(n)
                                );
                            return (
                                (r.containerState.furtherBlankLines = void 0),
                                (r.containerState.initialBlankLine = void 0),
                                e.attempt(St, t, l)(n)
                            );
                        }
                    )
                );
                function l(l) {
                    return (
                        (r.containerState._closeFlow = !0),
                        (r.interrupt = void 0),
                        Te(
                            e,
                            e.attempt(xt, t, n),
                            "linePrefix",
                            r.parser.constructs.disable.null.includes(
                                "codeIndented"
                            )
                                ? void 0
                                : 4
                        )(l)
                    );
                }
            }
        },
        exit: function (e) {
            e.exit(this.containerState.type);
        }
    },
    wt = {
        tokenize: function (e, t, n) {
            const r = this;
            return Te(
                e,
                function (e) {
                    const l = r.events[r.events.length - 1];
                    return !Se(e) &&
                        l &&
                        "listItemPrefixWhitespace" === l[1].type
                        ? t(e)
                        : n(e);
                },
                "listItemPrefixWhitespace",
                r.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 5
            );
        },
        partial: !0
    },
    St = {
        tokenize: function (e, t, n) {
            const r = this;
            return Te(
                e,
                function (e) {
                    const l = r.events[r.events.length - 1];
                    return l &&
                        "listItemIndent" === l[1].type &&
                        l[2].sliceSerialize(l[1], !0).length ===
                            r.containerState.size
                        ? t(e)
                        : n(e);
                },
                "listItemIndent",
                r.containerState.size + 1
            );
        },
        partial: !0
    };
const Et = {
    name: "setextUnderline",
    tokenize: function (e, t, n) {
        const r = this;
        let l,
            o,
            a = r.events.length;
        for (; a--; )
            if (
                "lineEnding" !== r.events[a][1].type &&
                "linePrefix" !== r.events[a][1].type &&
                "content" !== r.events[a][1].type
            ) {
                o = "paragraph" === r.events[a][1].type;
                break;
            }
        return function (t) {
            if (!r.parser.lazy[r.now().line] && (r.interrupt || o))
                return (
                    e.enter("setextHeadingLine"),
                    e.enter("setextHeadingLineSequence"),
                    (l = t),
                    i(t)
                );
            return n(t);
        };
        function i(t) {
            return t === l
                ? (e.consume(t), i)
                : (e.exit("setextHeadingLineSequence"),
                  Te(e, u, "lineSuffix")(t));
        }
        function u(r) {
            return null === r || we(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
        }
    },
    resolveTo: function (e, t) {
        let n,
            r,
            l,
            o = e.length;
        for (; o--; )
            if ("enter" === e[o][0]) {
                if ("content" === e[o][1].type) {
                    n = o;
                    break;
                }
                "paragraph" === e[o][1].type && (r = o);
            } else
                "content" === e[o][1].type && e.splice(o, 1),
                    l || "definition" !== e[o][1].type || (l = o);
        const a = {
            type: "setextHeading",
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        };
        (e[r][1].type = "setextHeadingText"),
            l
                ? (e.splice(r, 0, ["enter", a, t]),
                  e.splice(l + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[l][1].end)))
                : (e[n][1] = a);
        return e.push(["exit", a, t]), e;
    }
};
const Ct = {
        42: xt,
        43: xt,
        45: xt,
        48: xt,
        49: xt,
        50: xt,
        51: xt,
        52: xt,
        53: xt,
        54: xt,
        55: xt,
        56: xt,
        57: xt,
        62: Ye
    },
    Lt = { 91: st },
    Tt = { [-2]: nt, [-1]: nt, 32: nt },
    Nt = {
        35: {
            name: "headingAtx",
            tokenize: function (e, t, n) {
                const r = this;
                let l = 0;
                return function (t) {
                    return (
                        e.enter("atxHeading"),
                        e.enter("atxHeadingSequence"),
                        o(t)
                    );
                };
                function o(i) {
                    return 35 === i && l++ < 6
                        ? (e.consume(i), o)
                        : null === i || xe(i)
                        ? (e.exit("atxHeadingSequence"),
                          r.interrupt ? t(i) : a(i))
                        : n(i);
                }
                function a(n) {
                    return 35 === n
                        ? (e.enter("atxHeadingSequence"), i(n))
                        : null === n || we(n)
                        ? (e.exit("atxHeading"), t(n))
                        : Se(n)
                        ? Te(e, a, "whitespace")(n)
                        : (e.enter("atxHeadingText"), u(n));
                }
                function i(t) {
                    return 35 === t
                        ? (e.consume(t), i)
                        : (e.exit("atxHeadingSequence"), a(t));
                }
                function u(t) {
                    return null === t || 35 === t || xe(t)
                        ? (e.exit("atxHeadingText"), a(t))
                        : (e.consume(t), u);
                }
            },
            resolve: function (e, t) {
                let n,
                    r,
                    l = e.length - 2,
                    o = 3;
                "whitespace" === e[o][1].type && (o += 2);
                l - 2 > o && "whitespace" === e[l][1].type && (l -= 2);
                "atxHeadingSequence" === e[l][1].type &&
                    (o === l - 1 ||
                        (l - 4 > o && "whitespace" === e[l - 2][1].type)) &&
                    (l -= o + 1 === l ? 2 : 4);
                l > o &&
                    ((n = {
                        type: "atxHeadingText",
                        start: e[o][1].start,
                        end: e[l][1].end
                    }),
                    (r = {
                        type: "chunkText",
                        start: e[o][1].start,
                        end: e[l][1].end,
                        contentType: "text"
                    }),
                    ue(e, o, l - o + 1, [
                        ["enter", n, t],
                        ["enter", r, t],
                        ["exit", r, t],
                        ["exit", n, t]
                    ]));
                return e;
            }
        },
        42: kt,
        45: [Et, kt],
        60: pt,
        61: Et,
        95: kt,
        96: tt,
        126: tt
    },
    Pt = { 38: et, 92: Ke },
    _t = {
        [-5]: bt,
        [-4]: bt,
        [-3]: bt,
        33: {
            name: "labelStartImage",
            tokenize: function (e, t, n) {
                const r = this;
                return function (t) {
                    return (
                        e.enter("labelImage"),
                        e.enter("labelImageMarker"),
                        e.consume(t),
                        e.exit("labelImageMarker"),
                        l
                    );
                };
                function l(t) {
                    return 91 === t
                        ? (e.enter("labelMarker"),
                          e.consume(t),
                          e.exit("labelMarker"),
                          e.exit("labelImage"),
                          o)
                        : n(t);
                }
                function o(e) {
                    return 94 === e &&
                        "_hiddenFootnoteSupport" in r.parser.constructs
                        ? n(e)
                        : t(e);
                }
            },
            resolveAll: mt.resolveAll
        },
        38: et,
        42: Qe,
        60: [
            {
                name: "autolink",
                tokenize: function (e, t, n) {
                    let r = 1;
                    return function (t) {
                        return (
                            e.enter("autolink"),
                            e.enter("autolinkMarker"),
                            e.consume(t),
                            e.exit("autolinkMarker"),
                            e.enter("autolinkProtocol"),
                            l
                        );
                    };
                    function l(t) {
                        return he(t) ? (e.consume(t), o) : be(t) ? u(t) : n(t);
                    }
                    function o(e) {
                        return 43 === e || 45 === e || 46 === e || ye(e)
                            ? a(e)
                            : u(e);
                    }
                    function a(t) {
                        return 58 === t
                            ? (e.consume(t), i)
                            : (43 === t || 45 === t || 46 === t || ye(t)) &&
                              r++ < 32
                            ? (e.consume(t), a)
                            : u(t);
                    }
                    function i(t) {
                        return 62 === t
                            ? (e.exit("autolinkProtocol"), d(t))
                            : null === t || 32 === t || 60 === t || ke(t)
                            ? n(t)
                            : (e.consume(t), i);
                    }
                    function u(t) {
                        return 64 === t
                            ? (e.consume(t), (r = 0), s)
                            : be(t)
                            ? (e.consume(t), u)
                            : n(t);
                    }
                    function s(e) {
                        return ye(e) ? c(e) : n(e);
                    }
                    function c(t) {
                        return 46 === t
                            ? (e.consume(t), (r = 0), s)
                            : 62 === t
                            ? ((e.exit("autolinkProtocol").type =
                                  "autolinkEmail"),
                              d(t))
                            : f(t);
                    }
                    function f(t) {
                        return (45 === t || ye(t)) && r++ < 63
                            ? (e.consume(t), 45 === t ? f : c)
                            : n(t);
                    }
                    function d(n) {
                        return (
                            e.enter("autolinkMarker"),
                            e.consume(n),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t
                        );
                    }
                }
            },
            {
                name: "htmlText",
                tokenize: function (e, t, n) {
                    const r = this;
                    let l, o, a, i;
                    return function (t) {
                        return (
                            e.enter("htmlText"),
                            e.enter("htmlTextData"),
                            e.consume(t),
                            u
                        );
                    };
                    function u(t) {
                        return 33 === t
                            ? (e.consume(t), s)
                            : 47 === t
                            ? (e.consume(t), w)
                            : 63 === t
                            ? (e.consume(t), k)
                            : he(t)
                            ? (e.consume(t), C)
                            : n(t);
                    }
                    function s(t) {
                        return 45 === t
                            ? (e.consume(t), c)
                            : 91 === t
                            ? (e.consume(t), (o = "CDATA["), (a = 0), m)
                            : he(t)
                            ? (e.consume(t), b)
                            : n(t);
                    }
                    function c(t) {
                        return 45 === t ? (e.consume(t), f) : n(t);
                    }
                    function f(t) {
                        return null === t || 62 === t
                            ? n(t)
                            : 45 === t
                            ? (e.consume(t), d)
                            : p(t);
                    }
                    function d(e) {
                        return null === e || 62 === e ? n(e) : p(e);
                    }
                    function p(t) {
                        return null === t
                            ? n(t)
                            : 45 === t
                            ? (e.consume(t), h)
                            : we(t)
                            ? ((i = p), A(t))
                            : (e.consume(t), p);
                    }
                    function h(t) {
                        return 45 === t ? (e.consume(t), z) : p(t);
                    }
                    function m(t) {
                        return t === o.charCodeAt(a++)
                            ? (e.consume(t), a === o.length ? g : m)
                            : n(t);
                    }
                    function g(t) {
                        return null === t
                            ? n(t)
                            : 93 === t
                            ? (e.consume(t), y)
                            : we(t)
                            ? ((i = g), A(t))
                            : (e.consume(t), g);
                    }
                    function y(t) {
                        return 93 === t ? (e.consume(t), v) : g(t);
                    }
                    function v(t) {
                        return 62 === t
                            ? z(t)
                            : 93 === t
                            ? (e.consume(t), v)
                            : g(t);
                    }
                    function b(t) {
                        return null === t || 62 === t
                            ? z(t)
                            : we(t)
                            ? ((i = b), A(t))
                            : (e.consume(t), b);
                    }
                    function k(t) {
                        return null === t
                            ? n(t)
                            : 63 === t
                            ? (e.consume(t), x)
                            : we(t)
                            ? ((i = k), A(t))
                            : (e.consume(t), k);
                    }
                    function x(e) {
                        return 62 === e ? z(e) : k(e);
                    }
                    function w(t) {
                        return he(t) ? (e.consume(t), S) : n(t);
                    }
                    function S(t) {
                        return 45 === t || ye(t) ? (e.consume(t), S) : E(t);
                    }
                    function E(t) {
                        return we(t)
                            ? ((i = E), A(t))
                            : Se(t)
                            ? (e.consume(t), E)
                            : z(t);
                    }
                    function C(t) {
                        return 45 === t || ye(t)
                            ? (e.consume(t), C)
                            : 47 === t || 62 === t || xe(t)
                            ? L(t)
                            : n(t);
                    }
                    function L(t) {
                        return 47 === t
                            ? (e.consume(t), z)
                            : 58 === t || 95 === t || he(t)
                            ? (e.consume(t), T)
                            : we(t)
                            ? ((i = L), A(t))
                            : Se(t)
                            ? (e.consume(t), L)
                            : z(t);
                    }
                    function T(t) {
                        return 45 === t ||
                            46 === t ||
                            58 === t ||
                            95 === t ||
                            ye(t)
                            ? (e.consume(t), T)
                            : N(t);
                    }
                    function N(t) {
                        return 61 === t
                            ? (e.consume(t), P)
                            : we(t)
                            ? ((i = N), A(t))
                            : Se(t)
                            ? (e.consume(t), N)
                            : L(t);
                    }
                    function P(t) {
                        return null === t ||
                            60 === t ||
                            61 === t ||
                            62 === t ||
                            96 === t
                            ? n(t)
                            : 34 === t || 39 === t
                            ? (e.consume(t), (l = t), _)
                            : we(t)
                            ? ((i = P), A(t))
                            : Se(t)
                            ? (e.consume(t), P)
                            : (e.consume(t), (l = void 0), F);
                    }
                    function _(t) {
                        return t === l
                            ? (e.consume(t), D)
                            : null === t
                            ? n(t)
                            : we(t)
                            ? ((i = _), A(t))
                            : (e.consume(t), _);
                    }
                    function D(e) {
                        return 62 === e || 47 === e || xe(e) ? L(e) : n(e);
                    }
                    function F(t) {
                        return null === t ||
                            34 === t ||
                            39 === t ||
                            60 === t ||
                            61 === t ||
                            96 === t
                            ? n(t)
                            : 62 === t || xe(t)
                            ? L(t)
                            : (e.consume(t), F);
                    }
                    function A(t) {
                        return (
                            e.exit("htmlTextData"),
                            e.enter("lineEnding"),
                            e.consume(t),
                            e.exit("lineEnding"),
                            Te(
                                e,
                                R,
                                "linePrefix",
                                r.parser.constructs.disable.null.includes(
                                    "codeIndented"
                                )
                                    ? void 0
                                    : 4
                            )
                        );
                    }
                    function R(t) {
                        return e.enter("htmlTextData"), i(t);
                    }
                    function z(r) {
                        return 62 === r
                            ? (e.consume(r),
                              e.exit("htmlTextData"),
                              e.exit("htmlText"),
                              t)
                            : n(r);
                    }
                }
            }
        ],
        91: {
            name: "labelStartLink",
            tokenize: function (e, t, n) {
                const r = this;
                return function (t) {
                    return (
                        e.enter("labelLink"),
                        e.enter("labelMarker"),
                        e.consume(t),
                        e.exit("labelMarker"),
                        e.exit("labelLink"),
                        l
                    );
                };
                function l(e) {
                    return 94 === e &&
                        "_hiddenFootnoteSupport" in r.parser.constructs
                        ? n(e)
                        : t(e);
                }
            },
            resolveAll: mt.resolveAll
        },
        92: [
            {
                name: "hardBreakEscape",
                tokenize: function (e, t, n) {
                    return function (t) {
                        return (
                            e.enter("hardBreakEscape"),
                            e.enter("escapeMarker"),
                            e.consume(t),
                            r
                        );
                    };
                    function r(r) {
                        return we(r)
                            ? (e.exit("escapeMarker"),
                              e.exit("hardBreakEscape"),
                              t(r))
                            : n(r);
                    }
                }
            },
            Ke
        ],
        93: mt,
        95: Qe,
        96: {
            name: "codeText",
            tokenize: function (e, t, n) {
                let r,
                    l,
                    o = 0;
                return function (t) {
                    return (
                        e.enter("codeText"), e.enter("codeTextSequence"), a(t)
                    );
                };
                function a(t) {
                    return 96 === t
                        ? (e.consume(t), o++, a)
                        : (e.exit("codeTextSequence"), i(t));
                }
                function i(t) {
                    return null === t
                        ? n(t)
                        : 96 === t
                        ? ((l = e.enter("codeTextSequence")), (r = 0), s(t))
                        : 32 === t
                        ? (e.enter("space"), e.consume(t), e.exit("space"), i)
                        : we(t)
                        ? (e.enter("lineEnding"),
                          e.consume(t),
                          e.exit("lineEnding"),
                          i)
                        : (e.enter("codeTextData"), u(t));
                }
                function u(t) {
                    return null === t || 32 === t || 96 === t || we(t)
                        ? (e.exit("codeTextData"), i(t))
                        : (e.consume(t), u);
                }
                function s(n) {
                    return 96 === n
                        ? (e.consume(n), r++, s)
                        : r === o
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n))
                        : ((l.type = "codeTextData"), u(n));
                }
            },
            resolve: function (e) {
                let t,
                    n,
                    r = e.length - 4,
                    l = 3;
                if (
                    !(
                        ("lineEnding" !== e[l][1].type &&
                            "space" !== e[l][1].type) ||
                        ("lineEnding" !== e[r][1].type &&
                            "space" !== e[r][1].type)
                    )
                )
                    for (t = l; ++t < r; )
                        if ("codeTextData" === e[t][1].type) {
                            (e[l][1].type = "codeTextPadding"),
                                (e[r][1].type = "codeTextPadding"),
                                (l += 2),
                                (r -= 2);
                            break;
                        }
                (t = l - 1), r++;
                for (; ++t <= r; )
                    void 0 === n
                        ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                        : (t !== r && "lineEnding" !== e[t][1].type) ||
                          ((e[n][1].type = "codeTextData"),
                          t !== n + 2 &&
                              ((e[n][1].end = e[t - 1][1].end),
                              e.splice(n + 2, t - n - 2),
                              (r -= t - n - 2),
                              (t = n + 2)),
                          (n = void 0));
                return e;
            },
            previous: function (e) {
                return (
                    96 !== e ||
                    "characterEscape" ===
                        this.events[this.events.length - 1][1].type
                );
            }
        }
    },
    Dt = { null: [Qe, Ie] },
    Ft = { null: [42, 95] },
    At = { null: [] };
function Rt(e = {}) {
    const t = {
        defined: [],
        lazy: {},
        constructs: fe([$e].concat(e.extensions || [])),
        content: n(Ne),
        document: n(Pe),
        flow: n(Oe),
        string: n(je),
        text: n(Me)
    };
    return t;
    function n(e) {
        return function (n) {
            return He(t, e, n);
        };
    }
}
const zt = /[\0\t\n\r]/g;
function Ot() {
    let e,
        t = 1,
        n = "",
        r = !0;
    return function (l, o, a) {
        const i = [];
        let u, s, c, f, d;
        (l = n + l.toString(o)),
            (c = 0),
            (n = ""),
            r && (65279 === l.charCodeAt(0) && c++, (r = void 0));
        for (; c < l.length; ) {
            if (
                ((zt.lastIndex = c),
                (u = zt.exec(l)),
                (f = u && void 0 !== u.index ? u.index : l.length),
                (d = l.charCodeAt(f)),
                !u)
            ) {
                n = l.slice(c);
                break;
            }
            if (10 === d && c === f && e) i.push(-3), (e = void 0);
            else
                switch (
                    (e && (i.push(-5), (e = void 0)),
                    c < f && (i.push(l.slice(c, f)), (t += f - c)),
                    d)
                ) {
                    case 0:
                        i.push(65533), t++;
                        break;
                    case 9:
                        for (s = 4 * Math.ceil(t / 4), i.push(-2); t++ < s; )
                            i.push(-1);
                        break;
                    case 10:
                        i.push(-4), (t = 1);
                        break;
                    default:
                        (e = !0), (t = 1);
                }
            c = f + 1;
        }
        a && (e && i.push(-5), n && i.push(n), i.push(null));
        return i;
    };
}
function It(e) {
    for (; !Fe(e); );
    return e;
}
function jt(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 ||
        11 === n ||
        (n > 13 && n < 32) ||
        (n > 126 && n < 160) ||
        (n > 55295 && n < 57344) ||
        (n > 64975 && n < 65008) ||
        65535 == (65535 & n) ||
        65534 == (65535 & n) ||
        n > 1114111
        ? "�"
        : String.fromCharCode(n);
}
const Mt = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ut(e) {
    return e.replace(Mt, qt);
}
function qt(e, t, n) {
    if (t) return t;
    if (35 === n.charCodeAt(0)) {
        const e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
        return jt(n.slice(t ? 2 : 1), t ? 16 : 10);
    }
    return Ze(n) || e;
}
const Bt = {}.hasOwnProperty,
    Vt = function (e, t, n) {
        return (
            "string" != typeof t && ((n = t), (t = void 0)),
            (function (e = {}) {
                const t = Ht(
                        {
                            transforms: [],
                            canContainEols: [
                                "emphasis",
                                "fragment",
                                "heading",
                                "paragraph",
                                "strong"
                            ],
                            enter: {
                                autolink: u(le),
                                autolinkProtocol: P,
                                autolinkEmail: P,
                                atxHeading: u(ee),
                                blockQuote: u(Y),
                                characterEscape: P,
                                characterReference: P,
                                codeFenced: u(K),
                                codeFencedFenceInfo: s,
                                codeFencedFenceMeta: s,
                                codeIndented: u(K, s),
                                codeText: u(X, s),
                                codeTextData: P,
                                data: P,
                                codeFlowValue: P,
                                definition: u(J),
                                definitionDestinationString: s,
                                definitionLabelString: s,
                                definitionTitleString: s,
                                emphasis: u(Z),
                                hardBreakEscape: u(te),
                                hardBreakTrailing: u(te),
                                htmlFlow: u(ne, s),
                                htmlFlowData: P,
                                htmlText: u(ne, s),
                                htmlTextData: P,
                                image: u(re),
                                label: s,
                                link: u(le),
                                listItem: u(ie),
                                listItemValue: m,
                                listOrdered: u(ae, h),
                                listUnordered: u(ae),
                                paragraph: u(ue),
                                reference: V,
                                referenceString: s,
                                resourceDestinationString: s,
                                resourceTitleString: s,
                                setextHeading: u(ee),
                                strong: u(se),
                                thematicBreak: u(fe)
                            },
                            exit: {
                                atxHeading: f(),
                                atxHeadingSequence: C,
                                autolink: f(),
                                autolinkEmail: G,
                                autolinkProtocol: Q,
                                blockQuote: f(),
                                characterEscapeValue: _,
                                characterReferenceMarkerHexadecimal: $,
                                characterReferenceMarkerNumeric: $,
                                characterReferenceValue: W,
                                codeFenced: f(b),
                                codeFencedFence: v,
                                codeFencedFenceInfo: g,
                                codeFencedFenceMeta: y,
                                codeFlowValue: _,
                                codeIndented: f(k),
                                codeText: f(z),
                                codeTextData: _,
                                data: _,
                                definition: f(),
                                definitionDestinationString: E,
                                definitionLabelString: x,
                                definitionTitleString: w,
                                emphasis: f(),
                                hardBreakEscape: f(F),
                                hardBreakTrailing: f(F),
                                htmlFlow: f(A),
                                htmlFlowData: _,
                                htmlText: f(R),
                                htmlTextData: _,
                                image: f(I),
                                label: M,
                                labelText: j,
                                lineEnding: D,
                                link: f(O),
                                listItem: f(),
                                listOrdered: f(),
                                listUnordered: f(),
                                paragraph: f(),
                                referenceString: H,
                                resourceDestinationString: U,
                                resourceTitleString: q,
                                resource: B,
                                setextHeading: f(N),
                                setextHeadingLineSequence: T,
                                setextHeadingText: L,
                                strong: f(),
                                thematicBreak: f()
                            }
                        },
                        e.mdastExtensions || []
                    ),
                    n = {};
                return r;
                function r(e) {
                    let n = { type: "root", children: [] };
                    const r = [],
                        u = [],
                        f = {
                            stack: [n],
                            tokenStack: r,
                            config: t,
                            enter: c,
                            exit: d,
                            buffer: s,
                            resume: p,
                            setData: o,
                            getData: a
                        };
                    let h = -1;
                    for (; ++h < e.length; )
                        if (
                            "listOrdered" === e[h][1].type ||
                            "listUnordered" === e[h][1].type
                        )
                            if ("enter" === e[h][0]) u.push(h);
                            else {
                                h = l(e, u.pop(), h);
                            }
                    for (h = -1; ++h < e.length; ) {
                        const n = t[e[h][0]];
                        Bt.call(n, e[h][1].type) &&
                            n[e[h][1].type].call(
                                Object.assign(
                                    { sliceSerialize: e[h][2].sliceSerialize },
                                    f
                                ),
                                e[h][1]
                            );
                    }
                    if (r.length > 0) {
                        const e = r[r.length - 1];
                        (e[1] || Wt).call(f, void 0, e[0]);
                    }
                    for (
                        n.position = {
                            start: i(
                                e.length > 0
                                    ? e[0][1].start
                                    : { line: 1, column: 1, offset: 0 }
                            ),
                            end: i(
                                e.length > 0
                                    ? e[e.length - 2][1].end
                                    : { line: 1, column: 1, offset: 0 }
                            )
                        },
                            h = -1;
                        ++h < t.transforms.length;

                    )
                        n = t.transforms[h](n) || n;
                    return n;
                }
                function l(e, t, n) {
                    let r,
                        l,
                        o,
                        a,
                        i = t - 1,
                        u = -1,
                        s = !1;
                    for (; ++i <= n; ) {
                        const t = e[i];
                        if (
                            ("listUnordered" === t[1].type ||
                            "listOrdered" === t[1].type ||
                            "blockQuote" === t[1].type
                                ? ("enter" === t[0] ? u++ : u--, (a = void 0))
                                : "lineEndingBlank" === t[1].type
                                ? "enter" === t[0] &&
                                  (!r || a || u || o || (o = i), (a = void 0))
                                : "linePrefix" === t[1].type ||
                                  "listItemValue" === t[1].type ||
                                  "listItemMarker" === t[1].type ||
                                  "listItemPrefix" === t[1].type ||
                                  "listItemPrefixWhitespace" === t[1].type ||
                                  (a = void 0),
                            (!u &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                                (-1 === u &&
                                    "exit" === t[0] &&
                                    ("listUnordered" === t[1].type ||
                                        "listOrdered" === t[1].type)))
                        ) {
                            if (r) {
                                let a = i;
                                for (l = void 0; a--; ) {
                                    const t = e[a];
                                    if (
                                        "lineEnding" === t[1].type ||
                                        "lineEndingBlank" === t[1].type
                                    ) {
                                        if ("exit" === t[0]) continue;
                                        l &&
                                            ((e[l][1].type = "lineEndingBlank"),
                                            (s = !0)),
                                            (t[1].type = "lineEnding"),
                                            (l = a);
                                    } else if (
                                        "linePrefix" !== t[1].type &&
                                        "blockQuotePrefix" !== t[1].type &&
                                        "blockQuotePrefixWhitespace" !==
                                            t[1].type &&
                                        "blockQuoteMarker" !== t[1].type &&
                                        "listItemIndent" !== t[1].type
                                    )
                                        break;
                                }
                                o && (!l || o < l) && (r._spread = !0),
                                    (r.end = Object.assign(
                                        {},
                                        l ? e[l][1].start : t[1].end
                                    )),
                                    e.splice(l || i, 0, ["exit", r, t[2]]),
                                    i++,
                                    n++;
                            }
                            "listItemPrefix" === t[1].type &&
                                ((r = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: Object.assign({}, t[1].start)
                                }),
                                e.splice(i, 0, ["enter", r, t[2]]),
                                i++,
                                n++,
                                (o = void 0),
                                (a = !0));
                        }
                    }
                    return (e[t][1]._spread = s), n;
                }
                function o(e, t) {
                    n[e] = t;
                }
                function a(e) {
                    return n[e];
                }
                function i(e) {
                    return { line: e.line, column: e.column, offset: e.offset };
                }
                function u(e, t) {
                    return n;
                    function n(n) {
                        c.call(this, e(n), n), t && t.call(this, n);
                    }
                }
                function s() {
                    this.stack.push({ type: "fragment", children: [] });
                }
                function c(e, t, n) {
                    return (
                        this.stack[this.stack.length - 1].children.push(e),
                        this.stack.push(e),
                        this.tokenStack.push([t, n]),
                        (e.position = { start: i(t.start) }),
                        e
                    );
                }
                function f(e) {
                    return t;
                    function t(t) {
                        e && e.call(this, t), d.call(this, t);
                    }
                }
                function d(e, t) {
                    const n = this.stack.pop(),
                        r = this.tokenStack.pop();
                    if (!r)
                        throw new Error(
                            "Cannot close `" +
                                e.type +
                                "` (" +
                                S({ start: e.start, end: e.end }) +
                                "): it’s not open"
                        );
                    if (r[0].type !== e.type)
                        if (t) t.call(this, e, r[0]);
                        else {
                            (r[1] || Wt).call(this, e, r[0]);
                        }
                    return (n.position.end = i(e.end)), n;
                }
                function p() {
                    return oe(this.stack.pop());
                }
                function h() {
                    o("expectingFirstListItemValue", !0);
                }
                function m(e) {
                    if (a("expectingFirstListItemValue")) {
                        (this.stack[this.stack.length - 2].start =
                            Number.parseInt(this.sliceSerialize(e), 10)),
                            o("expectingFirstListItemValue");
                    }
                }
                function g() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                }
                function y() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                }
                function v() {
                    a("flowCodeInside") ||
                        (this.buffer(), o("flowCodeInside", !0));
                }
                function b() {
                    const e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                        /^(\r?\n|\r)|(\r?\n|\r)$/g,
                        ""
                    )),
                        o("flowCodeInside");
                }
                function k() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                        /(\r?\n|\r)$/g,
                        ""
                    );
                }
                function x(e) {
                    const t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                    (n.label = t),
                        (n.identifier = ut(
                            this.sliceSerialize(e)
                        ).toLowerCase());
                }
                function w() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                }
                function E() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                }
                function C(e) {
                    const t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                        const n = this.sliceSerialize(e).length;
                        t.depth = n;
                    }
                }
                function L() {
                    o("setextHeadingSlurpLineEnding", !0);
                }
                function T(e) {
                    this.stack[this.stack.length - 1].depth =
                        61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
                }
                function N() {
                    o("setextHeadingSlurpLineEnding");
                }
                function P(e) {
                    const t = this.stack[this.stack.length - 1];
                    let n = t.children[t.children.length - 1];
                    (n && "text" === n.type) ||
                        ((n = ce()),
                        (n.position = { start: i(e.start) }),
                        t.children.push(n)),
                        this.stack.push(n);
                }
                function _(e) {
                    const t = this.stack.pop();
                    (t.value += this.sliceSerialize(e)),
                        (t.position.end = i(e.end));
                }
                function D(e) {
                    const n = this.stack[this.stack.length - 1];
                    if (a("atHardBreak")) {
                        return (
                            (n.children[n.children.length - 1].position.end = i(
                                e.end
                            )),
                            void o("atHardBreak")
                        );
                    }
                    !a("setextHeadingSlurpLineEnding") &&
                        t.canContainEols.includes(n.type) &&
                        (P.call(this, e), _.call(this, e));
                }
                function F() {
                    o("atHardBreak", !0);
                }
                function A() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                }
                function R() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                }
                function z() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                }
                function O() {
                    const e = this.stack[this.stack.length - 1];
                    a("inReference")
                        ? ((e.type += "Reference"),
                          (e.referenceType = a("referenceType") || "shortcut"),
                          delete e.url,
                          delete e.title)
                        : (delete e.identifier, delete e.label),
                        o("referenceType");
                }
                function I() {
                    const e = this.stack[this.stack.length - 1];
                    a("inReference")
                        ? ((e.type += "Reference"),
                          (e.referenceType = a("referenceType") || "shortcut"),
                          delete e.url,
                          delete e.title)
                        : (delete e.identifier, delete e.label),
                        o("referenceType");
                }
                function j(e) {
                    const t = this.stack[this.stack.length - 2],
                        n = this.sliceSerialize(e);
                    (t.label = Ut(n)), (t.identifier = ut(n).toLowerCase());
                }
                function M() {
                    const e = this.stack[this.stack.length - 1],
                        t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                    o("inReference", !0),
                        "link" === n.type
                            ? (n.children = e.children)
                            : (n.alt = t);
                }
                function U() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                }
                function q() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                }
                function B() {
                    o("inReference");
                }
                function V() {
                    o("referenceType", "collapsed");
                }
                function H(e) {
                    const t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                    (n.label = t),
                        (n.identifier = ut(
                            this.sliceSerialize(e)
                        ).toLowerCase()),
                        o("referenceType", "full");
                }
                function $(e) {
                    o("characterReferenceType", e.type);
                }
                function W(e) {
                    const t = this.sliceSerialize(e),
                        n = a("characterReferenceType");
                    let r;
                    n
                        ? ((r = jt(
                              t,
                              "characterReferenceMarkerNumeric" === n ? 10 : 16
                          )),
                          o("characterReferenceType"))
                        : (r = Ze(t));
                    const l = this.stack.pop();
                    (l.value += r), (l.position.end = i(e.end));
                }
                function Q(e) {
                    _.call(this, e);
                    this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e);
                }
                function G(e) {
                    _.call(this, e);
                    this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e);
                }
                function Y() {
                    return { type: "blockquote", children: [] };
                }
                function K() {
                    return { type: "code", lang: null, meta: null, value: "" };
                }
                function X() {
                    return { type: "inlineCode", value: "" };
                }
                function J() {
                    return {
                        type: "definition",
                        identifier: "",
                        label: null,
                        title: null,
                        url: ""
                    };
                }
                function Z() {
                    return { type: "emphasis", children: [] };
                }
                function ee() {
                    return { type: "heading", depth: void 0, children: [] };
                }
                function te() {
                    return { type: "break" };
                }
                function ne() {
                    return { type: "html", value: "" };
                }
                function re() {
                    return { type: "image", title: null, url: "", alt: null };
                }
                function le() {
                    return { type: "link", title: null, url: "", children: [] };
                }
                function ae(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    };
                }
                function ie(e) {
                    return {
                        type: "listItem",
                        spread: e._spread,
                        checked: null,
                        children: []
                    };
                }
                function ue() {
                    return { type: "paragraph", children: [] };
                }
                function se() {
                    return { type: "strong", children: [] };
                }
                function ce() {
                    return { type: "text", value: "" };
                }
                function fe() {
                    return { type: "thematicBreak" };
                }
            })(n)(It(Rt(n).document().write(Ot()(e, t, !0))))
        );
    };
function Ht(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
        const r = t[n];
        Array.isArray(r) ? Ht(e, r) : $t(e, r);
    }
    return e;
}
function $t(e, t) {
    let n;
    for (n in t)
        if (Bt.call(t, n)) {
            const r = "canContainEols" === n || "transforms" === n,
                l = (Bt.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}),
                o = t[n];
            o && (r ? (e[n] = [...l, ...o]) : Object.assign(l, o));
        }
}
function Wt(e, t) {
    throw e
        ? new Error(
              "Cannot close `" +
                  e.type +
                  "` (" +
                  S({ start: e.start, end: e.end }) +
                  "): a different token (`" +
                  t.type +
                  "`, " +
                  S({ start: t.start, end: t.end }) +
                  ") is open"
          )
        : new Error(
              "Cannot close document, a token (`" +
                  t.type +
                  "`, " +
                  S({ start: t.start, end: t.end }) +
                  ") is still open"
          );
}
var Qt = function (e) {
        Object.assign(this, {
            Parser: (t) => {
                const n = this.data("settings");
                return Vt(
                    t,
                    Object.assign({}, n, e, {
                        extensions: this.data("micromarkExtensions") || [],
                        mdastExtensions:
                            this.data("fromMarkdownExtensions") || []
                    })
                );
            }
        });
    },
    Gt = function (e, t, n) {
        var r = { type: String(e) };
        return (
            null != n || ("string" != typeof t && !Array.isArray(t))
                ? Object.assign(r, t)
                : (n = t),
            Array.isArray(n)
                ? (r.children = n)
                : null != n && (r.value = String(n)),
            r
        );
    };
const Yt = function (e) {
    if (null == e) return Xt;
    if ("string" == typeof e)
        return (function (e) {
            return Kt(t);
            function t(t) {
                return t && t.type === e;
            }
        })(e);
    if ("object" == typeof e)
        return Array.isArray(e)
            ? (function (e) {
                  const t = [];
                  let n = -1;
                  for (; ++n < e.length; ) t[n] = Yt(e[n]);
                  return Kt(r);
                  function r(...e) {
                      let n = -1;
                      for (; ++n < t.length; )
                          if (t[n].call(this, ...e)) return !0;
                      return !1;
                  }
              })(e)
            : (function (e) {
                  return Kt(t);
                  function t(t) {
                      let n;
                      for (n in e) if (t[n] !== e[n]) return !1;
                      return !0;
                  }
              })(e);
    if ("function" == typeof e) return Kt(e);
    throw new Error("Expected function, string, or object as test");
};
function Kt(e) {
    return function (...t) {
        return Boolean(e.call(this, ...t));
    };
}
function Xt() {
    return !0;
}
const Jt = function (e, t, n, r) {
    "function" == typeof t &&
        "function" != typeof n &&
        ((r = n), (n = t), (t = null));
    const l = Yt(t),
        o = r ? -1 : 1;
    !(function e(a, i, u) {
        const s = "object" == typeof a && null !== a ? a : {};
        let c;
        "string" == typeof s.type &&
            ((c =
                "string" == typeof s.tagName
                    ? s.tagName
                    : "string" == typeof s.name
                    ? s.name
                    : void 0),
            Object.defineProperty(f, "name", {
                value: "node (" + s.type + (c ? "<" + c + ">" : "") + ")"
            }));
        return f;
        function f() {
            let s,
                c,
                f,
                d = [];
            if (
                (!t || l(a, i, u[u.length - 1] || null)) &&
                ((d = (function (e) {
                    return Array.isArray(e)
                        ? e
                        : "number" == typeof e
                        ? [true, e]
                        : [e];
                })(n(a, u))),
                false === d[0])
            )
                return d;
            if (a.children && "skip" !== d[0])
                for (
                    c = (r ? a.children.length : -1) + o, f = u.concat(a);
                    c > -1 && c < a.children.length;

                ) {
                    if (((s = e(a.children[c], c, f)()), false === s[0]))
                        return s;
                    c = "number" == typeof s[1] ? s[1] : c + o;
                }
            return d;
        }
    })(e, null, [])();
};
const Zt = function (e, t, n, r) {
        "function" == typeof t &&
            "function" != typeof n &&
            ((r = n), (n = t), (t = null)),
            Jt(
                e,
                t,
                function (e, t) {
                    const r = t[t.length - 1];
                    return n(e, r ? r.children.indexOf(e) : null, r);
                },
                r
            );
    },
    en = nn("start"),
    tn = nn("end");
function nn(e) {
    return function (t) {
        const n = (t && t.position && t.position[e]) || {};
        return {
            line: n.line || null,
            column: n.column || null,
            offset: n.offset > -1 ? n.offset : null
        };
    };
}
const rn = {}.hasOwnProperty;
function ln(e) {
    const t = Object.create(null);
    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
    return (
        Zt(e, "definition", (e) => {
            const n = on(e.identifier);
            n && !rn.call(t, n) && (t[n] = e);
        }),
        function (e) {
            const n = on(e);
            return n && rn.call(t, n) ? t[n] : null;
        }
    );
}
function on(e) {
    return String(e || "").toUpperCase();
}
const an = {}.hasOwnProperty;
function un(e, t) {
    const n = t.data || {};
    return "value" in t &&
        !(
            an.call(n, "hName") ||
            an.call(n, "hProperties") ||
            an.call(n, "hChildren")
        )
        ? e.augment(t, Gt("text", t.value))
        : e(t, "div", fn(e, t));
}
function sn(e, t, n) {
    const r = t && t.type;
    let l;
    if (!r) throw new Error("Expected node, got `" + t + "`");
    return (
        (l = an.call(e.handlers, r)
            ? e.handlers[r]
            : e.passThrough && e.passThrough.includes(r)
            ? cn
            : e.unknownHandler),
        ("function" == typeof l ? l : un)(e, t, n)
    );
}
function cn(e, t) {
    return "children" in t ? { ...t, children: fn(e, t) } : t;
}
function fn(e, t) {
    const n = [];
    if ("children" in t) {
        const r = t.children;
        let l = -1;
        for (; ++l < r.length; ) {
            const o = sn(e, r[l], t);
            if (o) {
                if (
                    l &&
                    "break" === r[l - 1].type &&
                    (Array.isArray(o) ||
                        "text" !== o.type ||
                        (o.value = o.value.replace(/^\s+/, "")),
                    !Array.isArray(o) && "element" === o.type)
                ) {
                    const e = o.children[0];
                    e &&
                        "text" === e.type &&
                        (e.value = e.value.replace(/^\s+/, ""));
                }
                Array.isArray(o) ? n.push(...o) : n.push(o);
            }
        }
    }
    return n;
}
function dn(e) {
    const t = [];
    let n = -1,
        r = 0,
        l = 0;
    for (; ++n < e.length; ) {
        const o = e.charCodeAt(n);
        let a = "";
        if (37 === o && ye(e.charCodeAt(n + 1)) && ye(e.charCodeAt(n + 2)))
            l = 2;
        else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
                (a = String.fromCharCode(o));
        else if (o > 55295 && o < 57344) {
            const t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
                ? ((a = String.fromCharCode(o, t)), (l = 1))
                : (a = "�");
        } else a = String.fromCharCode(o);
        a &&
            (t.push(e.slice(r, n), encodeURIComponent(a)),
            (r = n + l + 1),
            (a = "")),
            l && ((n += l), (l = 0));
    }
    return t.join("") + e.slice(r);
}
function pn(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push(Gt("text", "\n")); ++r < e.length; )
        r && n.push(Gt("text", "\n")), n.push(e[r]);
    return t && e.length > 0 && n.push(Gt("text", "\n")), n;
}
function hn(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.footnoteOrder.length; ) {
        const r = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
        if (!r) continue;
        const l = fn(e, r),
            o = String(r.identifier),
            a = dn(o.toLowerCase());
        let i = 0;
        const u = [];
        for (; ++i <= e.footnoteCounts[o]; ) {
            const t = {
                type: "element",
                tagName: "a",
                properties: {
                    href:
                        "#" +
                        e.clobberPrefix +
                        "fnref-" +
                        a +
                        (i > 1 ? "-" + i : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel
                },
                children: [{ type: "text", value: "↩" }]
            };
            i > 1 &&
                t.children.push({
                    type: "element",
                    tagName: "sup",
                    children: [{ type: "text", value: String(i) }]
                }),
                u.length > 0 && u.push({ type: "text", value: " " }),
                u.push(t);
        }
        const s = l[l.length - 1];
        if (s && "element" === s.type && "p" === s.tagName) {
            const e = s.children[s.children.length - 1];
            e && "text" === e.type
                ? (e.value += " ")
                : s.children.push({ type: "text", value: " " }),
                s.children.push(...u);
        } else l.push(...u);
        const c = {
            type: "element",
            tagName: "li",
            properties: { id: e.clobberPrefix + "fn-" + a },
            children: pn(l, !0)
        };
        r.position && (c.position = r.position), n.push(c);
    }
    return 0 === n.length
        ? null
        : {
              type: "element",
              tagName: "section",
              properties: { dataFootnotes: !0, className: ["footnotes"] },
              children: [
                  {
                      type: "element",
                      tagName: e.footnoteLabelTagName,
                      properties: {
                          ...JSON.parse(
                              JSON.stringify(e.footnoteLabelProperties)
                          ),
                          id: "footnote-label"
                      },
                      children: [Gt("text", e.footnoteLabel)]
                  },
                  { type: "text", value: "\n" },
                  {
                      type: "element",
                      tagName: "ol",
                      properties: {},
                      children: pn(n, !0)
                  },
                  { type: "text", value: "\n" }
              ]
          };
}
function mn(e, t) {
    const n = String(t.identifier),
        r = dn(n.toLowerCase()),
        l = e.footnoteOrder.indexOf(n);
    let o;
    -1 === l
        ? (e.footnoteOrder.push(n),
          (e.footnoteCounts[n] = 1),
          (o = e.footnoteOrder.length))
        : (e.footnoteCounts[n]++, (o = l + 1));
    const a = e.footnoteCounts[n];
    return e(t, "sup", [
        e(
            t.position,
            "a",
            {
                href: "#" + e.clobberPrefix + "fn-" + r,
                id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
                dataFootnoteRef: !0,
                ariaDescribedBy: "footnote-label"
            },
            [Gt("text", String(o))]
        )
    ]);
}
function gn(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (
        ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
        "imageReference" === t.type)
    )
        return Gt("text", "![" + t.alt + r);
    const l = fn(e, t),
        o = l[0];
    o && "text" === o.type
        ? (o.value = "[" + o.value)
        : l.unshift(Gt("text", "["));
    const a = l[l.length - 1];
    return a && "text" === a.type ? (a.value += r) : l.push(Gt("text", r)), l;
}
function yn(e) {
    const t = e.spread;
    return null == t ? e.children.length > 1 : t;
}
function vn(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        l = 0;
    const o = [];
    for (; r; )
        o.push(bn(t.slice(l, r.index), l > 0, !0), r[0]),
            (l = r.index + r[0].length),
            (r = n.exec(t));
    return o.push(bn(t.slice(l), l > 0, !1)), o.join("");
}
function bn(e, t, n) {
    let r = 0,
        l = e.length;
    if (t) {
        let t = e.codePointAt(r);
        for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
    }
    if (n) {
        let t = e.codePointAt(l - 1);
        for (; 9 === t || 32 === t; ) l--, (t = e.codePointAt(l - 1));
    }
    return l > r ? e.slice(r, l) : "";
}
const kn = {
    blockquote: function (e, t) {
        return e(t, "blockquote", pn(fn(e, t), !0));
    },
    break: function (e, t) {
        return [e(t, "br"), Gt("text", "\n")];
    },
    code: function (e, t) {
        const n = t.value ? t.value + "\n" : "",
            r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
            l = {};
        r && (l.className = ["language-" + r]);
        const o = e(t, "code", l, [Gt("text", n)]);
        return t.meta && (o.data = { meta: t.meta }), e(t.position, "pre", [o]);
    },
    delete: function (e, t) {
        return e(t, "del", fn(e, t));
    },
    emphasis: function (e, t) {
        return e(t, "em", fn(e, t));
    },
    footnoteReference: mn,
    footnote: function (e, t) {
        const n = e.footnoteById;
        let r = 1;
        for (; r in n; ) r++;
        const l = String(r);
        return (
            (n[l] = {
                type: "footnoteDefinition",
                identifier: l,
                children: [{ type: "paragraph", children: t.children }],
                position: t.position
            }),
            mn(e, {
                type: "footnoteReference",
                identifier: l,
                position: t.position
            })
        );
    },
    heading: function (e, t) {
        return e(t, "h" + t.depth, fn(e, t));
    },
    html: function (e, t) {
        return e.dangerous ? e.augment(t, Gt("raw", t.value)) : null;
    },
    imageReference: function (e, t) {
        const n = e.definition(t.identifier);
        if (!n) return gn(e, t);
        const r = { src: dn(n.url || ""), alt: t.alt };
        return (
            null !== n.title && void 0 !== n.title && (r.title = n.title),
            e(t, "img", r)
        );
    },
    image: function (e, t) {
        const n = { src: dn(t.url), alt: t.alt };
        return (
            null !== t.title && void 0 !== t.title && (n.title = t.title),
            e(t, "img", n)
        );
    },
    inlineCode: function (e, t) {
        return e(t, "code", [Gt("text", t.value.replace(/\r?\n|\r/g, " "))]);
    },
    linkReference: function (e, t) {
        const n = e.definition(t.identifier);
        if (!n) return gn(e, t);
        const r = { href: dn(n.url || "") };
        return (
            null !== n.title && void 0 !== n.title && (r.title = n.title),
            e(t, "a", r, fn(e, t))
        );
    },
    link: function (e, t) {
        const n = { href: dn(t.url) };
        return (
            null !== t.title && void 0 !== t.title && (n.title = t.title),
            e(t, "a", n, fn(e, t))
        );
    },
    listItem: function (e, t, n) {
        const r = fn(e, t),
            l = n
                ? (function (e) {
                      let t = e.spread;
                      const n = e.children;
                      let r = -1;
                      for (; !t && ++r < n.length; ) t = yn(n[r]);
                      return Boolean(t);
                  })(n)
                : yn(t),
            o = {},
            a = [];
        if ("boolean" == typeof t.checked) {
            let n;
            r[0] && "element" === r[0].type && "p" === r[0].tagName
                ? (n = r[0])
                : ((n = e(null, "p", [])), r.unshift(n)),
                n.children.length > 0 && n.children.unshift(Gt("text", " ")),
                n.children.unshift(
                    e(null, "input", {
                        type: "checkbox",
                        checked: t.checked,
                        disabled: !0
                    })
                ),
                (o.className = ["task-list-item"]);
        }
        let i = -1;
        for (; ++i < r.length; ) {
            const e = r[i];
            (l || 0 !== i || "element" !== e.type || "p" !== e.tagName) &&
                a.push(Gt("text", "\n")),
                "element" !== e.type || "p" !== e.tagName || l
                    ? a.push(e)
                    : a.push(...e.children);
        }
        const u = r[r.length - 1];
        return (
            !u ||
                (!l && "tagName" in u && "p" === u.tagName) ||
                a.push(Gt("text", "\n")),
            e(t, "li", o, a)
        );
    },
    list: function (e, t) {
        const n = {},
            r = t.ordered ? "ol" : "ul",
            l = fn(e, t);
        let o = -1;
        for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++o < l.length;

        ) {
            const e = l[o];
            if (
                "element" === e.type &&
                "li" === e.tagName &&
                e.properties &&
                Array.isArray(e.properties.className) &&
                e.properties.className.includes("task-list-item")
            ) {
                n.className = ["contains-task-list"];
                break;
            }
        }
        return e(t, r, n, pn(l, !0));
    },
    paragraph: function (e, t) {
        return e(t, "p", fn(e, t));
    },
    root: function (e, t) {
        return e.augment(t, Gt("root", pn(fn(e, t))));
    },
    strong: function (e, t) {
        return e(t, "strong", fn(e, t));
    },
    table: function (e, t) {
        const n = t.children;
        let r = -1;
        const l = t.align || [],
            o = [];
        for (; ++r < n.length; ) {
            const a = n[r].children,
                i = 0 === r ? "th" : "td",
                u = [];
            let s = -1;
            const c = t.align ? l.length : a.length;
            for (; ++s < c; ) {
                const t = a[s];
                u.push(e(t, i, { align: l[s] }, t ? fn(e, t) : []));
            }
            o[r] = e(n[r], "tr", pn(u, !0));
        }
        return e(
            t,
            "table",
            pn(
                [e(o[0].position, "thead", pn([o[0]], !0))].concat(
                    o[1]
                        ? e(
                              { start: en(o[1]), end: tn(o[o.length - 1]) },
                              "tbody",
                              pn(o.slice(1), !0)
                          )
                        : []
                ),
                !0
            )
        );
    },
    text: function (e, t) {
        return e.augment(t, Gt("text", vn(String(t.value))));
    },
    thematicBreak: function (e, t) {
        return e(t, "hr");
    },
    toml: xn,
    yaml: xn,
    definition: xn,
    footnoteDefinition: xn
};
function xn() {
    return null;
}
const wn = {}.hasOwnProperty;
function Sn(e, t) {
    const n = t || {},
        r = n.allowDangerousHtml || !1,
        l = {};
    return (
        (a.dangerous = r),
        (a.clobberPrefix =
            void 0 === n.clobberPrefix || null === n.clobberPrefix
                ? "user-content-"
                : n.clobberPrefix),
        (a.footnoteLabel = n.footnoteLabel || "Footnotes"),
        (a.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
        (a.footnoteLabelProperties = n.footnoteLabelProperties || {
            className: ["sr-only"]
        }),
        (a.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
        (a.definition = ln(e)),
        (a.footnoteById = l),
        (a.footnoteOrder = []),
        (a.footnoteCounts = {}),
        (a.augment = o),
        (a.handlers = { ...kn, ...n.handlers }),
        (a.unknownHandler = n.unknownHandler),
        (a.passThrough = n.passThrough),
        Zt(e, "footnoteDefinition", (e) => {
            const t = String(e.identifier).toUpperCase();
            wn.call(l, t) || (l[t] = e);
        }),
        a
    );
    function o(e, t) {
        if (e && "data" in e && e.data) {
            const n = e.data;
            n.hName &&
                ("element" !== t.type &&
                    (t = {
                        type: "element",
                        tagName: "",
                        properties: {},
                        children: []
                    }),
                (t.tagName = n.hName)),
                "element" === t.type &&
                    n.hProperties &&
                    (t.properties = { ...t.properties, ...n.hProperties }),
                "children" in t &&
                    t.children &&
                    n.hChildren &&
                    (t.children = n.hChildren);
        }
        if (e) {
            const r = "type" in e ? e : { position: e };
            (n = r) &&
                n.position &&
                n.position.start &&
                n.position.start.line &&
                n.position.start.column &&
                n.position.end &&
                n.position.end.line &&
                n.position.end.column &&
                (t.position = { start: en(r), end: tn(r) });
        }
        var n;
        return t;
    }
    function a(e, t, n, r) {
        return (
            Array.isArray(n) && ((r = n), (n = {})),
            o(e, {
                type: "element",
                tagName: t,
                properties: n || {},
                children: r || []
            })
        );
    }
}
function En(e, t) {
    const n = Sn(e, t),
        r = sn(n, e, null),
        l = hn(n);
    return (
        l && r.children.push(Gt("text", "\n"), l),
        Array.isArray(r) ? { type: "root", children: r } : r
    );
}
var Cn = function (e, t) {
    return e && "run" in e
        ? (function (e, t) {
              return (n, r, l) => {
                  e.run(En(n, t), r, (e) => {
                      l(e);
                  });
              };
          })(e, t)
        : (function (e) {
              return (t) => En(t, e);
          })(e || t);
};
var Ln;
Ln = o("exEpv")();
class Tn {
    constructor(e, t, n) {
        (this.property = e), (this.normal = t), n && (this.space = n);
    }
}
function Nn(e, t) {
    const n = {},
        r = {};
    let l = -1;
    for (; ++l < e.length; )
        Object.assign(n, e[l].property), Object.assign(r, e[l].normal);
    return new Tn(n, r, t);
}
function Pn(e) {
    return e.toLowerCase();
}
(Tn.prototype.property = {}),
    (Tn.prototype.normal = {}),
    (Tn.prototype.space = null);
class _n {
    constructor(e, t) {
        (this.property = e), (this.attribute = t);
    }
}
(_n.prototype.space = null),
    (_n.prototype.boolean = !1),
    (_n.prototype.booleanish = !1),
    (_n.prototype.overloadedBoolean = !1),
    (_n.prototype.number = !1),
    (_n.prototype.commaSeparated = !1),
    (_n.prototype.spaceSeparated = !1),
    (_n.prototype.commaOrSpaceSeparated = !1),
    (_n.prototype.mustUseProperty = !1),
    (_n.prototype.defined = !1);
var Dn = {};
e(Dn, "boolean", () => An),
    e(Dn, "booleanish", () => Rn),
    e(Dn, "overloadedBoolean", () => zn),
    e(Dn, "number", () => On),
    e(Dn, "spaceSeparated", () => In),
    e(Dn, "commaSeparated", () => jn),
    e(Dn, "commaOrSpaceSeparated", () => Mn);
let Fn = 0;
const An = Un(),
    Rn = Un(),
    zn = Un(),
    On = Un(),
    In = Un(),
    jn = Un(),
    Mn = Un();
function Un() {
    return 2 ** ++Fn;
}
const qn = Object.keys(Dn);
class Bn extends _n {
    constructor(e, t, n, r) {
        let l = -1;
        if ((super(e, t), Vn(this, "space", r), "number" == typeof n))
            for (; ++l < qn.length; ) {
                const e = qn[l];
                Vn(this, qn[l], (n & Dn[e]) === Dn[e]);
            }
    }
}
function Vn(e, t, n) {
    n && (e[t] = n);
}
Bn.prototype.defined = !0;
const Hn = {}.hasOwnProperty;
function $n(e) {
    const t = {},
        n = {};
    let r;
    for (r in e.properties)
        if (Hn.call(e.properties, r)) {
            const l = e.properties[r],
                o = new Bn(r, e.transform(e.attributes || {}, r), l, e.space);
            e.mustUseProperty &&
                e.mustUseProperty.includes(r) &&
                (o.mustUseProperty = !0),
                (t[r] = o),
                (n[Pn(r)] = r),
                (n[Pn(o.attribute)] = r);
        }
    return new Tn(t, n, e.space);
}
const Wn = $n({
        space: "xlink",
        transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        }
    }),
    Qn = $n({
        space: "xml",
        transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
    });
function Gn(e, t) {
    return t in e ? e[t] : t;
}
function Yn(e, t) {
    return Gn(e, t.toLowerCase());
}
const Kn = $n({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: Yn,
        properties: { xmlns: null, xmlnsXLink: null }
    }),
    Xn = $n({
        transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: Rn,
            ariaAutoComplete: null,
            ariaBusy: Rn,
            ariaChecked: Rn,
            ariaColCount: On,
            ariaColIndex: On,
            ariaColSpan: On,
            ariaControls: In,
            ariaCurrent: null,
            ariaDescribedBy: In,
            ariaDetails: null,
            ariaDisabled: Rn,
            ariaDropEffect: In,
            ariaErrorMessage: null,
            ariaExpanded: Rn,
            ariaFlowTo: In,
            ariaGrabbed: Rn,
            ariaHasPopup: null,
            ariaHidden: Rn,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: In,
            ariaLevel: On,
            ariaLive: null,
            ariaModal: Rn,
            ariaMultiLine: Rn,
            ariaMultiSelectable: Rn,
            ariaOrientation: null,
            ariaOwns: In,
            ariaPlaceholder: null,
            ariaPosInSet: On,
            ariaPressed: Rn,
            ariaReadOnly: Rn,
            ariaRelevant: null,
            ariaRequired: Rn,
            ariaRoleDescription: In,
            ariaRowCount: On,
            ariaRowIndex: On,
            ariaRowSpan: On,
            ariaSelected: Rn,
            ariaSetSize: On,
            ariaSort: null,
            ariaValueMax: On,
            ariaValueMin: On,
            ariaValueNow: On,
            ariaValueText: null,
            role: null
        }
    }),
    Jn = $n({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        transform: Yn,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: jn,
            acceptCharset: In,
            accessKey: In,
            action: null,
            allow: null,
            allowFullScreen: An,
            allowPaymentRequest: An,
            allowUserMedia: An,
            alt: null,
            as: null,
            async: An,
            autoCapitalize: null,
            autoComplete: In,
            autoFocus: An,
            autoPlay: An,
            capture: An,
            charSet: null,
            checked: An,
            cite: null,
            className: In,
            cols: On,
            colSpan: null,
            content: null,
            contentEditable: Rn,
            controls: An,
            controlsList: In,
            coords: On | jn,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: An,
            defer: An,
            dir: null,
            dirName: null,
            disabled: An,
            download: zn,
            draggable: Rn,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: An,
            formTarget: null,
            headers: In,
            height: On,
            hidden: An,
            high: On,
            href: null,
            hrefLang: null,
            htmlFor: In,
            httpEquiv: In,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: An,
            itemId: null,
            itemProp: In,
            itemRef: In,
            itemScope: An,
            itemType: In,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: An,
            low: On,
            manifest: null,
            max: null,
            maxLength: On,
            media: null,
            method: null,
            min: null,
            minLength: On,
            multiple: An,
            muted: An,
            name: null,
            nonce: null,
            noModule: An,
            noValidate: An,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: An,
            optimum: On,
            pattern: null,
            ping: In,
            placeholder: null,
            playsInline: An,
            poster: null,
            preload: null,
            readOnly: An,
            referrerPolicy: null,
            rel: In,
            required: An,
            reversed: An,
            rows: On,
            rowSpan: On,
            sandbox: In,
            scope: null,
            scoped: An,
            seamless: An,
            selected: An,
            shape: null,
            size: On,
            sizes: null,
            slot: null,
            span: On,
            spellCheck: Rn,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: On,
            step: null,
            style: null,
            tabIndex: On,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: An,
            useMap: null,
            value: Rn,
            width: On,
            wrap: null,
            align: null,
            aLink: null,
            archive: In,
            axis: null,
            background: null,
            bgColor: null,
            border: On,
            borderColor: null,
            bottomMargin: On,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: An,
            declare: An,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: On,
            leftMargin: On,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: On,
            marginWidth: On,
            noResize: An,
            noHref: An,
            noShade: An,
            noWrap: An,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: On,
            rules: null,
            scheme: null,
            scrolling: Rn,
            standby: null,
            summary: null,
            text: null,
            topMargin: On,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: On,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: An,
            disableRemotePlayback: An,
            prefix: null,
            property: null,
            results: On,
            security: null,
            unselectable: null
        }
    }),
    Zn = $n({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        transform: Gn,
        properties: {
            about: Mn,
            accentHeight: On,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: On,
            amplitude: On,
            arabicForm: null,
            ascent: On,
            attributeName: null,
            attributeType: null,
            azimuth: On,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: On,
            by: null,
            calcMode: null,
            capHeight: On,
            className: In,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: On,
            diffuseConstant: On,
            direction: null,
            display: null,
            dur: null,
            divisor: On,
            dominantBaseline: null,
            download: An,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: On,
            enableBackground: null,
            end: null,
            event: null,
            exponent: On,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: On,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: jn,
            g2: jn,
            glyphName: jn,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: On,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: On,
            horizOriginX: On,
            horizOriginY: On,
            id: null,
            ideographic: On,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: On,
            k: On,
            k1: On,
            k2: On,
            k3: On,
            k4: On,
            kernelMatrix: Mn,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: On,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: On,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: On,
            overlineThickness: On,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: On,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: In,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: On,
            pointsAtY: On,
            pointsAtZ: On,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Mn,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Mn,
            rev: Mn,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Mn,
            requiredFeatures: Mn,
            requiredFonts: Mn,
            requiredFormats: Mn,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: On,
            specularExponent: On,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: On,
            strikethroughThickness: On,
            string: null,
            stroke: null,
            strokeDashArray: Mn,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: On,
            strokeOpacity: On,
            strokeWidth: null,
            style: null,
            surfaceScale: On,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Mn,
            tabIndex: On,
            tableValues: null,
            target: null,
            targetX: On,
            targetY: On,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Mn,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: On,
            underlineThickness: On,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: On,
            values: null,
            vAlphabetic: On,
            vMathematical: On,
            vectorEffect: null,
            vHanging: On,
            vIdeographic: On,
            version: null,
            vertAdvY: On,
            vertOriginX: On,
            vertOriginY: On,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: On,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        }
    }),
    er = /^data[-\w.:]+$/i,
    tr = /-[a-z]/g,
    nr = /[A-Z]/g;
function rr(e, t) {
    const n = Pn(t);
    let r = t,
        l = _n;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && "data" === n.slice(0, 4) && er.test(t)) {
        if ("-" === t.charAt(4)) {
            const e = t.slice(5).replace(tr, or);
            r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
        } else {
            const e = t.slice(4);
            if (!tr.test(e)) {
                let n = e.replace(nr, lr);
                "-" !== n.charAt(0) && (n = "-" + n), (t = "data" + n);
            }
        }
        l = Bn;
    }
    return new l(r, t);
}
function lr(e) {
    return "-" + e.toLowerCase();
}
function or(e) {
    return e.charAt(1).toUpperCase();
}
const ar = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    ir = Nn([Qn, Wn, Kn, Xn, Jn], "html"),
    ur = Nn([Qn, Wn, Kn, Xn, Zn], "svg");
function sr(e) {
    if (e.allowedElements && e.disallowedElements)
        throw new TypeError(
            "Only one of `allowedElements` and `disallowedElements` should be defined"
        );
    if (e.allowedElements || e.disallowedElements || e.allowElement)
        return (t) => {
            Zt(t, "element", (t, n, r) => {
                const l = r;
                let o;
                if (
                    (e.allowedElements
                        ? (o = !e.allowedElements.includes(t.tagName))
                        : e.disallowedElements &&
                          (o = e.disallowedElements.includes(t.tagName)),
                    !o &&
                        e.allowElement &&
                        "number" == typeof n &&
                        (o = !e.allowElement(t, n, l)),
                    o && "number" == typeof n)
                )
                    return (
                        e.unwrapDisallowed && t.children
                            ? l.children.splice(n, 1, ...t.children)
                            : l.children.splice(n, 1),
                        n
                    );
            });
        };
}
const cr = ["http", "https", "mailto", "tel"];
var fr;
s = o("fYo6y");
function dr(e, t) {
    const n = t || {};
    return ("" === e[e.length - 1] ? [...e, ""] : e)
        .join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " "))
        .trim();
}
fr = o("2pHqv");
var pr,
    hr,
    mr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    gr = /\n/g,
    yr = /^\s*/,
    vr = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    br = /^:\s*/,
    kr = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    xr = /^[;\s]*/,
    wr = /^\s+|\s+$/g,
    Sr = "";
function Er(e) {
    return e ? e.replace(wr, Sr) : Sr;
}
(hr = function (e, t) {
    if ("string" != typeof e)
        throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
        r = 1;
    function l(e) {
        var t = e.match(gr);
        t && (n += t.length);
        var l = e.lastIndexOf("\n");
        r = ~l ? e.length - l : r + e.length;
    }
    function o() {
        var e = { line: n, column: r };
        return function (t) {
            return (t.position = new a(e)), c(), t;
        };
    }
    function a(e) {
        (this.start = e),
            (this.end = { line: n, column: r }),
            (this.source = t.source);
    }
    a.prototype.content = e;
    var i = [];
    function u(l) {
        var o = new Error(t.source + ":" + n + ":" + r + ": " + l);
        if (
            ((o.reason = l),
            (o.filename = t.source),
            (o.line = n),
            (o.column = r),
            (o.source = e),
            !t.silent)
        )
            throw o;
        i.push(o);
    }
    function s(t) {
        var n = t.exec(e);
        if (n) {
            var r = n[0];
            return l(r), (e = e.slice(r.length)), n;
        }
    }
    function c() {
        s(yr);
    }
    function f(e) {
        var t;
        for (e = e || []; (t = d()); ) !1 !== t && e.push(t);
        return e;
    }
    function d() {
        var t = o();
        if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
                var n = 2;
                Sr != e.charAt(n) &&
                ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
                ++n;
            if (((n += 2), Sr === e.charAt(n - 1)))
                return u("End of comment missing");
            var a = e.slice(2, n - 2);
            return (
                (r += 2),
                l(a),
                (e = e.slice(n)),
                (r += 2),
                t({ type: "comment", comment: a })
            );
        }
    }
    function p() {
        var e = o(),
            t = s(vr);
        if (t) {
            if ((d(), !s(br))) return u("property missing ':'");
            var n = s(kr),
                r = e({
                    type: "declaration",
                    property: Er(t[0].replace(mr, Sr)),
                    value: n ? Er(n[0].replace(mr, Sr)) : Sr
                });
            return s(xr), r;
        }
    }
    return (
        c(),
        (function () {
            var e,
                t = [];
            for (f(t); (e = p()); ) !1 !== e && (t.push(e), f(t));
            return t;
        })()
    );
}),
    (pr = function (e, t) {
        var n,
            r = null;
        if (!e || "string" != typeof e) return r;
        for (
            var l,
                o,
                a = hr(e),
                i = "function" == typeof t,
                u = 0,
                s = a.length;
            u < s;
            u++
        )
            (l = (n = a[u]).property),
                (o = n.value),
                i ? t(l, o, n) : o && (r || (r = {}), (r[l] = o));
        return r;
    });
const Cr = {}.hasOwnProperty,
    Lr = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Tr(e, t) {
    const n = [];
    let r,
        l = -1;
    for (; ++l < t.children.length; )
        (r = t.children[l]),
            "element" === r.type
                ? n.push(Nr(e, r, l, t))
                : "text" === r.type
                ? ("element" === t.type &&
                      Lr.has(t.tagName) &&
                      ((a = void 0),
                      "string" ==
                          typeof (a =
                              (o = r) &&
                              "object" == typeof o &&
                              "text" === o.type
                                  ? o.value || ""
                                  : o) &&
                          "" === a.replace(/[ \t\n\f\r]/g, ""))) ||
                  n.push(r.value)
                : "raw" !== r.type || e.options.skipHtml || n.push(r.value);
    var o, a;
    return n;
}
function Nr(e, n, r, l) {
    const o = e.options,
        a = e.schema,
        i = n.tagName,
        u = {};
    let c,
        f = a;
    if (
        ("html" === a.space && "svg" === i && ((f = ur), (e.schema = f)),
        n.properties)
    )
        for (c in n.properties)
            Cr.call(n.properties, c) && _r(u, c, n.properties[c], e);
    ("ol" !== i && "ul" !== i) || e.listDepth++;
    const d = Tr(e, n);
    ("ol" !== i && "ul" !== i) || e.listDepth--, (e.schema = a);
    const p = n.position || {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null }
        },
        h = o.components && Cr.call(o.components, i) ? o.components[i] : i,
        m = "string" == typeof h || h === t(s).Fragment;
    if (!t(fr).isValidElementType(h))
        throw new TypeError(
            `Component for name \`${i}\` not defined or is not renderable`
        );
    if (
        ((u.key = [i, p.start.line, p.start.column, r].join("-")),
        "a" === i &&
            o.linkTarget &&
            (u.target =
                "function" == typeof o.linkTarget
                    ? o.linkTarget(
                          String(u.href || ""),
                          n.children,
                          "string" == typeof u.title ? u.title : null
                      )
                    : o.linkTarget),
        "a" === i &&
            o.transformLinkUri &&
            (u.href = o.transformLinkUri(
                String(u.href || ""),
                n.children,
                "string" == typeof u.title ? u.title : null
            )),
        m ||
            "code" !== i ||
            "element" !== l.type ||
            "pre" === l.tagName ||
            (u.inline = !0),
        m ||
            ("h1" !== i &&
                "h2" !== i &&
                "h3" !== i &&
                "h4" !== i &&
                "h5" !== i &&
                "h6" !== i) ||
            (u.level = Number.parseInt(i.charAt(1), 10)),
        "img" === i &&
            o.transformImageUri &&
            (u.src = o.transformImageUri(
                String(u.src || ""),
                String(u.alt || ""),
                "string" == typeof u.title ? u.title : null
            )),
        !m && "li" === i && "element" === l.type)
    ) {
        const e = (function (e) {
            let t = -1;
            for (; ++t < e.children.length; ) {
                const n = e.children[t];
                if ("element" === n.type && "input" === n.tagName) return n;
            }
            return null;
        })(n);
        (u.checked = e && e.properties ? Boolean(e.properties.checked) : null),
            (u.index = Pr(l, n)),
            (u.ordered = "ol" === l.tagName);
    }
    var g;
    return (
        m ||
            ("ol" !== i && "ul" !== i) ||
            ((u.ordered = "ol" === i), (u.depth = e.listDepth)),
        ("td" !== i && "th" !== i) ||
            (u.align &&
                (u.style || (u.style = {}),
                (u.style.textAlign = u.align),
                delete u.align),
            m || (u.isHeader = "th" === i)),
        m ||
            "tr" !== i ||
            "element" !== l.type ||
            (u.isHeader = Boolean("thead" === l.tagName)),
        o.sourcePos &&
            (u["data-sourcepos"] = [
                (g = p).start.line,
                ":",
                g.start.column,
                "-",
                g.end.line,
                ":",
                g.end.column
            ]
                .map(String)
                .join("")),
        !m && o.rawSourcePos && (u.sourcePosition = n.position),
        !m &&
            o.includeElementIndex &&
            ((u.index = Pr(l, n)), (u.siblingCount = Pr(l))),
        m || (u.node = n),
        d.length > 0 ? t(s).createElement(h, u, d) : t(s).createElement(h, u)
    );
}
function Pr(e, t) {
    let n = -1,
        r = 0;
    for (; ++n < e.children.length && e.children[n] !== t; )
        "element" === e.children[n].type && r++;
    return r;
}
function _r(e, n, r, l) {
    const o = rr(l.schema, n);
    let a = r;
    null != a &&
        a == a &&
        (Array.isArray(a) &&
            (a = o.commaSeparated ? dr(a) : a.join(" ").trim()),
        "style" === o.property &&
            "string" == typeof a &&
            (a = (function (e) {
                const n = {};
                try {
                    t(pr)(e, r);
                } catch {}
                return n;
                function r(e, t) {
                    const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                    n[r.replace(/-([a-z])/g, Dr)] = t;
                }
            })(a)),
        o.space && o.property
            ? (e[Cr.call(ar, o.property) ? ar[o.property] : o.property] = a)
            : o.attribute && (e[o.attribute] = a));
}
function Dr(e, t) {
    return t.toUpperCase();
}
const Fr = {}.hasOwnProperty,
    Ar = {
        plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
        renderers: { to: "components", id: "change-renderers-to-components" },
        astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
        allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
        escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
        source: { to: "children", id: "change-source-to-children" },
        allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex"
        }
    };
function Rr(e) {
    for (const t in Ar)
        if (Fr.call(Ar, t) && Fr.call(e, t)) {
            const e = Ar[t];
            console.warn(
                `[react-markdown] Warning: please ${
                    e.to ? `use \`${e.to}\` instead of` : "remove"
                } \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                    e.id
                }> for more info)`
            ),
                delete Ar[t];
        }
    const n = K()
            .use(Qt)
            .use(e.remarkPlugins || [])
            .use(Cn, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(sr, e),
        r = new R();
    "string" == typeof e.children
        ? (r.value = e.children)
        : void 0 !== e.children &&
          null !== e.children &&
          console.warn(
              `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
          );
    const l = n.runSync(n.parse(r), r);
    if ("root" !== l.type) throw new TypeError("Expected a `root` node");
    let o = t(s).createElement(
        t(s).Fragment,
        {},
        Tr({ options: e, schema: ir, listDepth: 0 }, l)
    );
    return (
        e.className &&
            (o = t(s).createElement("div", { className: e.className }, o)),
        o
    );
}
(Rr.defaultProps = {
    transformLinkUri: function (e) {
        const t = (e || "").trim(),
            n = t.charAt(0);
        if ("#" === n || "/" === n) return t;
        const r = t.indexOf(":");
        if (-1 === r) return t;
        let l = -1;
        for (; ++l < cr.length; ) {
            const e = cr[l];
            if (r === e.length && t.slice(0, e.length).toLowerCase() === e)
                return t;
        }
        return (
            (l = t.indexOf("?")),
            -1 !== l && r > l
                ? t
                : ((l = t.indexOf("#")),
                  -1 !== l && r > l ? t : "javascript:void(0)")
        );
    }
}),
    (Rr.propTypes = {
        children: t(Ln).string,
        className: t(Ln).string,
        allowElement: t(Ln).func,
        allowedElements: t(Ln).arrayOf(t(Ln).string),
        disallowedElements: t(Ln).arrayOf(t(Ln).string),
        unwrapDisallowed: t(Ln).bool,
        remarkPlugins: t(Ln).arrayOf(
            t(Ln).oneOfType([
                t(Ln).object,
                t(Ln).func,
                t(Ln).arrayOf(
                    t(Ln).oneOfType([
                        t(Ln).bool,
                        t(Ln).string,
                        t(Ln).object,
                        t(Ln).func,
                        t(Ln).arrayOf(t(Ln).any)
                    ])
                )
            ])
        ),
        rehypePlugins: t(Ln).arrayOf(
            t(Ln).oneOfType([
                t(Ln).object,
                t(Ln).func,
                t(Ln).arrayOf(
                    t(Ln).oneOfType([
                        t(Ln).bool,
                        t(Ln).string,
                        t(Ln).object,
                        t(Ln).func,
                        t(Ln).arrayOf(t(Ln).any)
                    ])
                )
            ])
        ),
        sourcePos: t(Ln).bool,
        rawSourcePos: t(Ln).bool,
        skipHtml: t(Ln).bool,
        includeElementIndex: t(Ln).bool,
        transformLinkUri: t(Ln).oneOfType([t(Ln).func, t(Ln).bool]),
        linkTarget: t(Ln).oneOfType([t(Ln).func, t(Ln).string]),
        transformImageUri: t(Ln).func,
        components: t(Ln).object
    });
const zr = /[\t ]*(?:\r?\n|\r)/g;
function Or() {
    return (e) => {
        Zt(e, "text", (e, t, n) => {
            const r = [];
            let l = 0;
            zr.lastIndex = 0;
            let o = zr.exec(e.value);
            for (; o; ) {
                const t = o.index;
                l !== t && r.push({ type: "text", value: e.value.slice(l, t) }),
                    r.push({ type: "break" }),
                    (l = t + o[0].length),
                    (o = zr.exec(e.value));
            }
            if (r.length > 0 && n && "number" == typeof t)
                return (
                    l < e.value.length &&
                        r.push({ type: "text", value: e.value.slice(l) }),
                    n.children.splice(t, 1, ...r),
                    t + r.length
                );
        });
    };
}
const { gScriptUpdater: Ir } = ChromeUtils.importESModule(
        "chrome://userchrome/content/aboutuserchrome/modules/UCMSingletonData.sys.mjs"
    ),
    jr = ({ script: e, enabled: t, expanded: n, setUpdater: r }) => {
        const { navigate: l } = (0, s.useContext)(b);
        let o = Ir.getHandle(e),
            i = `${e.filename.toLowerCase().replace(/[^a-z0-9_-]/g, "_")}_name`,
            u =
                e.description.length > 200
                    ? `${String(e.description ?? "")?.slice(0, 200)}…`
                    : e.description;
        const [c, f] = (0, s.useState)(!1),
            [p, h] = (0, s.useState)(!1),
            [m, g] = (0, s.useState)(!0),
            [y, v] = (0, s.useState)("info"),
            [k, x] = (0, s.useState)(""),
            [w, S] = (0, s.useState)(!1),
            [E, C] = (0, s.useState)(""),
            [L, T] = (0, s.useState)(!e.icon),
            N = (0, s.useCallback)(
                (t) => {
                    switch (t.target.localName) {
                        case "button":
                        case "input":
                        case "a":
                            return;
                    }
                    t.target.closest(".script-card-expanded") ||
                        (n
                            ? window.history.back()
                            : (l(`scripts/${e.filename}`),
                              window.scrollTo(0, 0)),
                        t.preventDefault());
                },
                [n, l, e.filename]
            ),
            P = (0, s.useCallback)(() => {
                T(!0);
            }, []),
            _ = (0, s.useCallback)(
                (e) => {
                    o.launchLocalFile(), e.preventDefault();
                },
                [o]
            ),
            D = (0, s.useCallback)(
                (t) => {
                    d.toggleScript(e.filename);
                },
                [e.filename]
            );
        return (
            (0, s.useEffect)(() => {
                let t = o.subscribe(() => {
                    let t = o.remoteFile
                            ? d.parseStringAsScriptInfo(
                                  e.filename,
                                  o.remoteFile
                              )
                            : {},
                        n = t.version;
                    o.writing
                        ? (C("Updating…"), S(!0), g(!1))
                        : o.updateError
                        ? (C("Update failed"),
                          v("warning"),
                          x(`Update to ${n} manually`),
                          S(!0),
                          g(!1),
                          console.error(
                              `Error overwriting ${e.filename} :>> `,
                              o.updateError
                          ))
                        : o.pendingRestart
                        ? (C("Updated"),
                          v("success"),
                          x(`Restart to update to ${n}`),
                          S(!0),
                          g(!1))
                        : o.downloadError
                        ? (g(!0),
                          console.error(
                              `Error downloading ${e.filename} :>> `,
                              o.downloadError
                          ))
                        : Services.vc.compare(n, e.version) > 0
                        ? (C("Update now"),
                          x(`Update to ${t.version} available`),
                          S(!1),
                          g(!1))
                        : g(!0),
                        f(o.writing),
                        h(o.pendingRestart);
                });
                return (
                    o.checkRemoteFile(),
                    () => {
                        t();
                    }
                );
            }, []),
            (0, s.useEffect)(() => {
                r(
                    e.filename,
                    m
                        ? null
                        : {
                              disabled: w,
                              writing: c,
                              pendingRestart: p,
                              update: w ? null : o.updateScript
                          }
                );
            }, [w, m, c, p, r, e.filename, o.updateScript]),
            (0, a.jsxs)("div", {
                className: "script card",
                active: t ? "true" : "false",
                expanded: n ? "" : void 0,
                "aria-labelledby": i,
                onClick: N,
                role: "presentation",
                children: [
                    (0, a.jsxs)("div", {
                        className: "script-card-collapsed",
                        children: [
                            (0, a.jsx)("img", {
                                className: "script-icon",
                                alt: "",
                                src: e.icon,
                                onError: P,
                                hidden: L
                            }),
                            (0, a.jsxs)("div", {
                                className: "card-contents",
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: "script-name-container",
                                        children: [
                                            (0, a.jsx)("h3", {
                                                id: i,
                                                className: "script-name",
                                                title: `${e.filename}${
                                                    e.version
                                                        ? ` ${e.version}`
                                                        : ""
                                                }`,
                                                children: e.name || e.filename
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "script-version",
                                                hidden: !e.version,
                                                children: e.version
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "spacer"
                                            }),
                                            (0, a.jsx)("input", {
                                                type: "checkbox",
                                                className:
                                                    "script-checkbox toggle-button",
                                                checked: t,
                                                onInput: D
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)("div", {
                                        className: "script-description",
                                        children: u
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)("div", {
                        className: "script-card-message",
                        align: "center",
                        type: y,
                        hidden: m,
                        children: (0, a.jsxs)("div", {
                            className: "message-inner",
                            children: [
                                (0, a.jsx)("span", {
                                    className: "message-icon"
                                }),
                                (0, a.jsxs)("span", {
                                    className: "message-content",
                                    children: [
                                        (0, a.jsx)("span", {
                                            className: "message-text",
                                            children: k
                                        }),
                                        (0, a.jsx)("button", {
                                            className:
                                                "update-button " +
                                                (w ? "" : "primary"),
                                            disabled: w,
                                            onClick: o.updateScript,
                                            children: E
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    n ? (0, a.jsx)(Ur, { script: e, launchLocalFile: _ }) : null
                ]
            })
        );
    };
function Mr(e) {
    const t = (e || "").trim(),
        n = t.charAt(0);
    if ("#" === n || "/" === n) return t;
    const r = t.indexOf(":");
    if (-1 === r) return t;
    let l = -1;
    const o = ["http", "https", "mailto", "tel", "about", "chrome"];
    for (; ++l < o.length; ) {
        const e = o[l];
        if (r === e.length && t.slice(0, e.length).toLowerCase() === e)
            return t;
    }
    return (
        (l = t.indexOf("?")),
        -1 !== l && r > l
            ? t
            : ((l = t.indexOf("#")), -1 !== l && r > l ? t : "")
    );
}
const Ur = ({ script: e, launchLocalFile: t }) => {
        const n = (0, s.useRef)(),
            [r, l] = (0, s.useState)(!1),
            [o, i] = (0, s.useState)(!0),
            u = (0, s.useCallback)(() => {
                l((e) => !e), i(!1);
            }, []);
        return (
            (0, s.useEffect)(() => {
                const { current: e } = n;
                e &&
                    requestAnimationFrame(() => {
                        const t = parseFloat(
                            window.getComputedStyle(document.documentElement)
                                .fontSize
                        );
                        let { paddingTop: n, paddingBottom: r } =
                                window.getComputedStyle(e),
                            { height: l } = e.getBoundingClientRect();
                        (n = parseFloat(n)),
                            (r = parseFloat(r)),
                            (l -= n + r),
                            l > 20 * t + 8 && u();
                    });
            }, [u]),
            (0, a.jsx)("div", {
                className: "script-card-expanded",
                children: (0, a.jsxs)("div", {
                    className: "script-detail-rows",
                    children: [
                        e.description?.length > 200
                            ? (0, a.jsxs)("div", {
                                  className:
                                      "script-detail-description-wrapper " +
                                      (r
                                          ? "script-detail-description-collapse"
                                          : ""),
                                  ref: n,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className:
                                              "script-detail-description",
                                          children: (0, a.jsx)(Rr, {
                                              className: "line-break",
                                              linkTarget: "_blank",
                                              transformLinkUri: Mr,
                                              remarkPlugins: [Or],
                                              children: e.description.replace(
                                                  /␠/g,
                                                  " "
                                              )
                                          })
                                      }),
                                      (0, a.jsx)("button", {
                                          className:
                                              "button-link script-detail-description-toggle",
                                          hidden: o,
                                          onClick: u,
                                          children: r
                                              ? "Show more"
                                              : "Show less"
                                      })
                                  ]
                              })
                            : null,
                        (0, a.jsxs)("div", {
                            className: "script-detail-row script-detail-source",
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Source file"
                                }),
                                (0, a.jsx)("a", {
                                    href: e.path,
                                    onClick: t,
                                    children: e.filename
                                })
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-running",
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Running"
                                }),
                                e.isRunning ? "true" : "false"
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-version",
                            hidden: !e.version,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Version"
                                }),
                                e.version
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className: "script-detail-row script-detail-author",
                            hidden: !e.author,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Author"
                                }),
                                e.author
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-homepageURL",
                            hidden: !e.homepageURL,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Homepage"
                                }),
                                (0, a.jsx)("a", {
                                    target: "_blank",
                                    href:
                                        e.homepageURL &&
                                        (e.homepageURL.startsWith("http")
                                            ? e.homepageURL
                                            : `file:///${e.homepageURL}`),
                                    children: e.homepageURL
                                })
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-downloadURL",
                            hidden: !e.downloadURL,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Download URL"
                                }),
                                (0, a.jsx)("a", {
                                    target: "_blank",
                                    href:
                                        e.downloadURL &&
                                        (e.downloadURL.startsWith("http")
                                            ? e.downloadURL
                                            : `file:///${e.downloadURL}`),
                                    children: e.downloadURL
                                })
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-updateURL",
                            hidden:
                                !e.updateURL || e.updateURL === e.downloadURL,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Update URL"
                                }),
                                (0, a.jsx)("a", {
                                    target: "_blank",
                                    href:
                                        e.updateURL &&
                                        (e.updateURL.startsWith("http")
                                            ? e.updateURL
                                            : `file:///${e.updateURL}`),
                                    children: e.updateURL
                                })
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-optionsURL",
                            hidden: !e.optionsURL,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Options URL"
                                }),
                                (0, a.jsx)("a", {
                                    target: "_blank",
                                    href:
                                        e.optionsURL &&
                                        (e.optionsURL.startsWith("http")
                                            ? e.optionsURL
                                            : `file:///${e.optionsURL}`),
                                    children: e.optionsURL
                                })
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className: "script-detail-row script-detail-type",
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Type"
                                }),
                                e.isESM
                                    ? "ES module"
                                    : e.inbackground
                                    ? "Background script"
                                    : "Chrome script"
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-onlyonce",
                            hidden: !e.onlyonce,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Only once"
                                }),
                                "true"
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-ignoreCache",
                            hidden: !e.ignoreCache,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Ignore cache"
                                }),
                                "true"
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-loadOrder",
                            hidden: e.inbackground,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Load order"
                                }),
                                String(e.loadOrder)
                            ]
                        }),
                        (0, a.jsxs)("div", {
                            className:
                                "script-detail-row script-detail-charset",
                            hidden: !e.charset,
                            children: [
                                (0, a.jsx)("label", {
                                    className: "script-detail-label",
                                    children: "Character set"
                                }),
                                e.charset
                            ]
                        })
                    ]
                })
            })
        );
    },
    qr = ({ description: e, linkText: t, linkURL: n }) =>
        e
            ? (0, a.jsx)("div", {
                  className: "message-box",
                  children: (0, a.jsxs)("div", {
                      className: "message",
                      children: [
                          (0, a.jsx)("p", {
                              children: (0, a.jsx)("strong", { children: e })
                          }),
                          t && n
                              ? (0, a.jsx)("p", {
                                    children: (0, a.jsx)("a", {
                                        href: n,
                                        target: "_blank",
                                        children: t
                                    })
                                })
                              : null
                      ]
                  })
              })
            : null,
    Br = ({ missingFxAutoconfig: e, outdatedFxAutoconfig: t }) => {
        let n = {};
        return (
            (e || t) &&
                ((n.description = `fx-autoconfig is ${
                    e ? "not installed" : "outdated"
                }.`),
                (n.linkText = "Download fx-autoconfig"),
                (n.linkURL = "https://github.com/MrOtherGuy/fx-autoconfig")),
            (0, a.jsx)(qr, { ...n })
        );
    },
    Vr = () => {
        const {
            path: e,
            missingFxAutoconfig: t,
            outdatedFxAutoconfig: n,
            scripts: r,
            scriptsDisabled: l,
            setUpdateCount: o
        } = (0, s.useContext)(b);
        let [, i] = e.split("/");
        const [u, c] = (0, s.useState)(!1),
            [f, d] = (0, s.useState)(!0),
            [p, h] = (0, s.useState)(""),
            [m, g] = (0, s.useState)({}),
            y = (0, s.useCallback)(() => {
                window.history.back();
            }, []),
            v = (0, s.useCallback)(
                (e, t) =>
                    g((n) => {
                        let r = { ...n };
                        return t ? (r[e] = t) : delete r[e], r;
                    }),
                []
            ),
            k = (0, s.useCallback)(() => {
                Object.values(m).forEach((e) => e?.update?.());
            }, [m]);
        return (
            (0, s.useEffect)(() => {
                let e = Object.values(m).filter((e) => e);
                if (!e.length) return d(!0), void o(0);
                e.every((e) => e.disabled)
                    ? (c(!0),
                      e.some((e) => e.writing)
                          ? h("Updating…")
                          : e.some((e) => e.pendingRestart)
                          ? h("Restart to finish updating")
                          : h("Update failed — Try updating manually"))
                    : (c(!1), h("Updates available")),
                    d(!1),
                    o(
                        e.filter(
                            (e) =>
                                !(e.disabled || e.writing || e.pendingRestart)
                        ).length
                    );
            }, [o, m]),
            (0, a.jsxs)("div", {
                id: "scripts",
                children: [
                    (0, a.jsxs)("div", {
                        id: "scripts-header",
                        className: "view-header",
                        children: [
                            (0, a.jsx)("div", {
                                className: "sticky-container",
                                children: (0, a.jsxs)("div", {
                                    className: "main-heading",
                                    children: [
                                        (0, a.jsx)("button", {
                                            className: "back-button",
                                            title: "Go back",
                                            onClick: y,
                                            hidden: !i
                                        }),
                                        (0, a.jsx)("h1", {
                                            className: "header-name",
                                            hidden: !!i,
                                            children: "Manage Your Scripts"
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "spacer"
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: "header-button-box",
                                            hidden: f,
                                            children: [
                                                (0, a.jsx)("label", {
                                                    className:
                                                        "header-button-description",
                                                    children: p
                                                }),
                                                (0, a.jsx)("button", {
                                                    id: "update-all-button",
                                                    className:
                                                        "update-button " +
                                                        (u ? "" : "primary"),
                                                    disabled: u,
                                                    onClick: k,
                                                    children: "Update all"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, a.jsx)(Br, {
                                missingFxAutoconfig: t,
                                outdatedFxAutoconfig: n
                            })
                        ]
                    }),
                    (0, a.jsx)("div", {
                        id: "main",
                        children: (0, a.jsx)("div", {
                            id: "scripts-list",
                            children: r.map((e) =>
                                i && i !== e.filename
                                    ? null
                                    : (0, a.jsx)(
                                          jr,
                                          {
                                              script: e,
                                              enabled: !l
                                                  .split(",")
                                                  .includes(e.filename),
                                              expanded: !!i,
                                              setUpdater: v
                                          },
                                          `${e.filename}-card`
                                      )
                            )
                        })
                    })
                ]
            })
        );
    };
(s = o("fYo6y")), (s = o("fYo6y"));
function Hr(e) {
    let t = Math.floor(e / 864e5),
        n = Math.floor((e % 864e5) / 36e5),
        r = Math.floor((e % 36e5) / 6e4),
        l = [
            t > 0 ? `${t} ${t > 1 ? "days" : "day"}` : "",
            n > 0 ? `${n} ${n > 1 ? "hours" : "hour"}` : "",
            r > 0 ? `${r} ${r > 1 ? "minutes" : "minute"}` : ""
        ].filter(Boolean);
    return l.length > 2
        ? ((l = [l.slice(0, -1).join(", "), l.slice(-1)[0]]), l.join(", and "))
        : l.join(" and ");
}
const $r = ({ id: e, value: t, suffix: n, ...r }) => {
        const l = (0, s.useCallback)((e) => {
            e.target.querySelector("input").focus();
        }, []);
        return (0, a.jsxs)("label", {
            htmlFor: e,
            className: "period-input-field",
            onFocus: l,
            onMouseUp: l,
            children: [
                (0, a.jsx)("input", {
                    type: "text",
                    id: e,
                    value: t,
                    size: "1",
                    ...r
                }),
                (0, a.jsx)("span", {
                    className: "period-input-sizer",
                    children: t || "0"
                }),
                n && (0, a.jsx)("span", { children: n })
            ]
        });
    },
    Wr = ({
        defaultValue: e = 0,
        min: t = 0,
        max: n = Number.MAX_SAFE_INTEGER,
        onChange: r,
        onError: l,
        id: o,
        ...i
    }) => {
        const [u, c] = (0, s.useState)(Math.floor(e / 864e5) || null),
            [f, d] = (0, s.useState)(Math.floor((e % 864e5) / 36e5) || null),
            [p, h] = (0, s.useState)(Math.floor((e % 36e5) / 6e4) || null),
            [m, g] = (0, s.useState)(null),
            y = (0, s.useCallback)((e) => {
                let { value: t } = e.target;
                if (t?.toString().length > 10) return;
                let n = parseInt(t, 10);
                switch (e.target.name) {
                    case "days":
                        c(n || null);
                        break;
                    case "hours":
                        d(n || null);
                        break;
                    case "minutes":
                        h(n || null);
                }
            }, []),
            v = (0, s.useCallback)(
                (e) => {
                    let r = e.target?.closest(".period-input"),
                        l = e.relatedTarget?.closest(".period-input");
                    if (l && l === r) return;
                    let o = 864e5 * (u || 0) + 36e5 * (f || 0) + 6e4 * (p || 0);
                    o > t &&
                        o < n &&
                        (c(Math.floor(o / 864e5)),
                        d(Math.floor((o % 864e5) / 36e5)),
                        h(Math.floor((o % 36e5) / 6e4)));
                },
                [u, f, n, t, p]
            ),
            b = (0, s.useCallback)((e) => {
                if ("div" !== e.target.localName) return;
                let t = [...e.target.querySelectorAll("input")],
                    n = e.clientX,
                    r = t.sort((e, t) => {
                        let r = e.getBoundingClientRect(),
                            l = t.getBoundingClientRect();
                        return (
                            Math.abs(r.x + r.width / 2 - n) -
                            Math.abs(l.x + l.width / 2 - n)
                        );
                    }),
                    [l] = r;
                l.focus(), e.preventDefault();
            }, []);
        return (
            (0, s.useEffect)(() => {
                let e = 864e5 * (u || 0) + 36e5 * (f || 0) + 6e4 * (p || 0);
                e < t
                    ? (g(`Must be at least ${Hr(t)}`), l?.(e))
                    : e > n
                    ? (g(`Must be at most ${Hr(n)}`), l?.(e))
                    : (g(null), r(e));
            }, [u, f, n, t, p, r, l]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)("div", {
                        className: "period-input" + (m ? " error" : ""),
                        id: o,
                        role: "form",
                        onMouseDown: b,
                        onBlurCapture: v,
                        ...i,
                        children: [
                            (0, a.jsx)($r, {
                                name: "days",
                                id: o ? `${o}-days` : null,
                                value: u || "",
                                placeholder: "0",
                                suffix: "d",
                                onInput: y
                            }),
                            (0, a.jsx)($r, {
                                name: "hours",
                                id: o ? `${o}-hours` : null,
                                value: f || "",
                                placeholder: "0",
                                suffix: "h",
                                onInput: y
                            }),
                            (0, a.jsx)($r, {
                                name: "minutes",
                                id: o ? `${o}-minutes` : null,
                                value: p || "",
                                placeholder: "0",
                                suffix: "m",
                                onInput: y
                            })
                        ]
                    }),
                    m &&
                        (0, a.jsx)("div", {
                            className: "period-input-error-message",
                            children: m
                        })
                ]
            })
        );
    },
    { PREF_UPDATE_INTERVAL: Qr, PREF_NOTIFICATIONS_ENABLED: Gr } =
        ChromeUtils.importESModule(
            "chrome://userchrome/content/aboutuserchrome/modules/UCMSingletonData.sys.mjs"
        ),
    Yr = () => {
        const {
                missingFxAutoconfig: e,
                outdatedFxAutoconfig: t,
                ucjsEnabled: n,
                gBrowserHackEnabled: r,
                gBrowserHackRequired: l,
                updateInterval: o,
                notificationsEnabled: i
            } = (0, s.useContext)(b),
            u = (0, s.useCallback)((e) => {
                let t = e.target?.getAttribute("pref");
                t && k.set(t, e.target.checked);
            }, []),
            c = (0, s.useCallback)((e) => {
                k.set(Qr, e);
            }, []);
        return (0, a.jsxs)("div", {
            id: "scripts",
            children: [
                (0, a.jsxs)("div", {
                    id: "scripts-header",
                    className: "view-header",
                    children: [
                        (0, a.jsx)("div", {
                            className: "sticky-container",
                            children: (0, a.jsx)("div", {
                                className: "main-heading",
                                children: (0, a.jsx)("h1", {
                                    className: "header-name",
                                    children: "Settings"
                                })
                            })
                        }),
                        (0, a.jsx)(Br, {
                            missingFxAutoconfig: e,
                            outdatedFxAutoconfig: t
                        })
                    ]
                }),
                (0, a.jsx)("div", {
                    id: "main",
                    children: (0, a.jsxs)("div", {
                        id: "settings",
                        children: [
                            (0, a.jsxs)("div", {
                                id: "fx-autoconfig-settings",
                                className: "settings-group",
                                children: [
                                    (0, a.jsx)("h2", {
                                        children: "fx-autoconfig"
                                    }),
                                    (0, a.jsx)("div", {
                                        className: "setting-container",
                                        children: (0, a.jsxs)("div", {
                                            className: "checkbox-container",
                                            children: [
                                                (0, a.jsx)("input", {
                                                    type: "checkbox",
                                                    id: "userChromeJS-enabled",
                                                    className: "checkbox",
                                                    pref: h,
                                                    checked: n,
                                                    disabled: e,
                                                    onChange: u
                                                }),
                                                (0, a.jsx)("label", {
                                                    htmlFor:
                                                        "userChromeJS-enabled",
                                                    className: "checkbox-text",
                                                    children:
                                                        "Load userChrome.js scripts"
                                                })
                                            ]
                                        })
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "setting-container",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className:
                                                    "checkbox-container tail-with-learn-more",
                                                children: [
                                                    (0, a.jsx)("input", {
                                                        type: "checkbox",
                                                        id: "gBrowser_hack-enabled",
                                                        className: "checkbox",
                                                        pref: g,
                                                        checked: r,
                                                        disabled: l,
                                                        onChange: u
                                                    }),
                                                    (0, a.jsx)("label", {
                                                        htmlFor:
                                                            "gBrowser_hack-enabled",
                                                        className:
                                                            "checkbox-text",
                                                        children:
                                                            "Enable gBrowser hack"
                                                    })
                                                ]
                                            }),
                                            (0, a.jsx)("a", {
                                                href: "https://github.com/MrOtherGuy/fx-autoconfig#startup-error",
                                                target: "_blank",
                                                children: "Learn more"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsxs)("div", {
                                id: "about-userchrome-settings",
                                className: "settings-group",
                                children: [
                                    (0, a.jsx)("h2", {
                                        children: "Script Updates"
                                    }),
                                    (0, a.jsx)("div", {
                                        className: "setting-container",
                                        children: (0, a.jsxs)("div", {
                                            className: "checkbox-container",
                                            children: [
                                                (0, a.jsx)("input", {
                                                    type: "checkbox",
                                                    id: "manager-notifications",
                                                    className: "checkbox",
                                                    pref: Gr,
                                                    checked: i,
                                                    onChange: u
                                                }),
                                                (0, a.jsx)("label", {
                                                    htmlFor:
                                                        "manager-notifications",
                                                    className: "checkbox-text",
                                                    children:
                                                        "Show update notification badges"
                                                })
                                            ]
                                        })
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "setting-container",
                                        children: [
                                            (0, a.jsx)("label", {
                                                htmlFor:
                                                    "manager-updateInterval",
                                                children:
                                                    "Update check frequency"
                                            }),
                                            (0, a.jsx)(Wr, {
                                                id: "manager-updateInterval",
                                                defaultValue: o,
                                                min: 9e5,
                                                max: 2592e6,
                                                onChange: c
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    },
    Kr = () => {
        const { path: e, navigate: t, updateCount: n } = (0, s.useContext)(b),
            r = (0, s.useCallback)(
                (e) => {
                    let n = e.target?.closest("[path]");
                    n && t(n?.getAttribute("path"));
                },
                [t]
            );
        return (0, a.jsxs)("div", {
            id: "full",
            children: [
                (0, a.jsxs)("div", {
                    id: "sidebar",
                    children: [
                        (0, a.jsxs)("button-group", {
                            id: "categories",
                            orientation: "vertical",
                            role: "tablist",
                            tabIndex: "0",
                            children: [
                                (0, a.jsx)("button", {
                                    className:
                                        "category " +
                                        (e.split("/")[0] === v
                                            ? "selected"
                                            : ""),
                                    role: "tab",
                                    title: "Manage your scripts",
                                    onClick: r,
                                    path: v,
                                    name: "scripts",
                                    "badge-count": n || void 0,
                                    children: (0, a.jsx)("span", {
                                        className: "category-name",
                                        children: "Scripts"
                                    })
                                }),
                                (0, a.jsx)("button", {
                                    className:
                                        "category " +
                                        ("settings" === e.split("/")[0]
                                            ? "selected"
                                            : ""),
                                    role: "tab",
                                    title: "Settings",
                                    onClick: r,
                                    path: "settings",
                                    name: "settings",
                                    children: (0, a.jsx)("span", {
                                        className: "category-name",
                                        children: "Settings"
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)("div", { className: "spacer" }),
                        (0, a.jsx)("div", {
                            id: "sidebar-footer",
                            children: (0, a.jsxs)("ul", {
                                className: "sidebar-footer-list",
                                children: [
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("a", {
                                            href: "https://www.userchrome.org/what-is-userchrome-js.html#findingscripts",
                                            id: "get-more-button",
                                            className: "sidebar-footer-link",
                                            target: "_blank",
                                            title: "Get more scripts",
                                            children: [
                                                (0, a.jsx)("img", {
                                                    src: "chrome://global/skin/icons/search-glass.svg",
                                                    alt: "",
                                                    className:
                                                        "sidebar-footer-icon"
                                                }),
                                                (0, a.jsx)("span", {
                                                    className:
                                                        "sidebar-footer-label",
                                                    children: "Get more scripts"
                                                })
                                            ]
                                        })
                                    }),
                                    (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("a", {
                                            href: "https://github.com/aminomancer/uc.css.js",
                                            id: "help-button",
                                            className: "sidebar-footer-link",
                                            target: "_blank",
                                            title: "Help/Documentation",
                                            children: [
                                                (0, a.jsx)("img", {
                                                    src: "chrome://global/skin/icons/help.svg",
                                                    alt: "",
                                                    className:
                                                        "sidebar-footer-icon"
                                                }),
                                                (0, a.jsx)("span", {
                                                    className:
                                                        "sidebar-footer-label",
                                                    children:
                                                        "Help/Documentation"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, a.jsx)("div", {
                    id: "content",
                    children: {
                        scripts: (0, a.jsx)(Vr, {}),
                        settings: (0, a.jsx)(Yr, {})
                    }[e.split("/")[0]]
                })
            ]
        });
    };
(history.scrollRestoration = "manual"),
    i(document.getElementById("root")).render(
        (0, a.jsx)(x, { children: (0, a.jsx)(Kr, {}) })
    );
