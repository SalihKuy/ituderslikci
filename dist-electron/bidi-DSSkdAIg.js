var Mu = Object.defineProperty;
var Ou = Object.getPrototypeOf;
var Fu = Reflect.get;
var Cn = (i) => {
  throw TypeError(i);
};
var ju = (i, s, t) => s in i ? Mu(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var Y = (i, s, t) => ju(i, typeof s != "symbol" ? s + "" : s, t), xn = (i, s, t) => s.has(i) || Cn("Cannot " + t), Is = (i, s) => Object(s) !== s ? Cn('Cannot use the "in" operator on this value') : i.has(s), e = (i, s, t) => (xn(i, s, "read from private field"), t ? t.call(i) : s.get(i)), v = (i, s, t) => s.has(i) ? Cn("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(i) : s.set(i, t), S = (i, s, t, r) => (xn(i, s, "write to private field"), r ? r.call(i, t) : s.set(i, t), t), T = (i, s, t) => (xn(i, s, "access private method"), t);
var Hi = (i, s, t, r) => ({
  set _(n) {
    S(i, s, n, t);
  },
  get _() {
    return e(i, s, r);
  }
}), Ki = (i, s, t) => Fu(Ou(i), t, s);
import Bu from "crypto";
import { C as qu, D as Au, U as he, T as xi, E as ge, b as Lu, c as Oe, d as De, e as Ei, f as Ke, g as Ee, i as it, t as le, h as Uu, J as $u, j as Hu, A as xo, k as Ku, l as zu, s as Eo, m as Wu, S as Vu, H as Gu, n as Xu, o as zi, p as Ju, q as Yu, r as Qu, u as Zu, v as ed, w as td, P as js, x as rd, y as sd, R as nd, z as id, B as ad, G as od, I as So, L as Wi, K as Vi, M as Gi, W as cd, N as et, O as Ts, Q as Ae, V as _t, X as Xi, Y as ht, Z as rn, _ as ud, $ as dd, a0 as ld, a1 as hd, a2 as Po, a3 as sn, a4 as pd, a5 as En, a6 as fd, a7 as md, a8 as gd, a9 as at, aa as wd, ab as yd, ac as rt, ad as vd, ae as bd, af as Cd, ag as xd, ah as Ed, ai as Sd, aj as Ji, ak as Pd, al as _d, am as kd, an as gn, ao as wn, ap as yn, aq as Yi, ar as Id, as as Td } from "./main-Cd7tkSQs.js";
var Sn = {}, ir = {}, kt = {}, Pn, Qi;
function Nd() {
  return Qi || (Qi = 1, Pn = function(i) {
    return { all: i = i || /* @__PURE__ */ new Map(), on: function(s, t) {
      var r = i.get(s);
      r ? r.push(t) : i.set(s, [t]);
    }, off: function(s, t) {
      var r = i.get(s);
      r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : i.set(s, []));
    }, emit: function(s, t) {
      var r = i.get(s);
      r && r.slice().map(function(n) {
        n(t);
      }), (r = i.get("*")) && r.slice().map(function(n) {
        n(s, t);
      });
    } };
  }), Pn;
}
var Zi;
function Zt() {
  var r, n;
  if (Zi) return kt;
  Zi = 1;
  var i = kt.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(kt, "__esModule", { value: !0 }), kt.EventEmitter = void 0;
  const s = i(Nd());
  let t = (n = class {
    constructor() {
      v(this, r, (0, s.default)());
    }
    on(a, o) {
      return e(this, r).on(a, o), this;
    }
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param event The event you'd like to listen to
     * @param handler The handler function to run when the event occurs
     * @return `this` to enable chaining method calls.
     */
    once(a, o) {
      const l = (d) => {
        o(d), this.off(a, l);
      };
      return this.on(a, l);
    }
    off(a, o) {
      return e(this, r).off(a, o), this;
    }
    /**
     * Emits an event and call any associated listeners.
     *
     * @param event The event to emit.
     * @param eventData Any data to emit with the event.
     * @return `true` if there are any listeners, `false` otherwise.
     */
    emit(a, o) {
      e(this, r).emit(a, o);
    }
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     * @param event - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(a) {
      return a ? e(this, r).all.delete(a) : e(this, r).all.clear(), this;
    }
  }, r = new WeakMap(), n);
  return kt.EventEmitter = t, kt;
}
var ar = {}, ea;
function Be() {
  if (ea) return ar;
  ea = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.LogType = void 0;
  var i;
  return function(s) {
    s.bidi = "bidi", s.cdp = "cdp", s.debug = "debug", s.debugError = "debug:error", s.debugInfo = "debug:info";
  }(i || (ar.LogType = i = {})), ar;
}
var or = {}, ta;
function Rd() {
  var r, n, u, a, o, l, _o;
  if (ta) return or;
  ta = 1;
  var i;
  Object.defineProperty(or, "__esModule", { value: !0 }), or.ProcessingQueue = void 0;
  const s = Be();
  let t = (r = class {
    constructor(c, p) {
      v(this, l);
      v(this, n);
      v(this, u);
      v(this, a, []);
      // Flag to keep only 1 active processor.
      v(this, o, !1);
      S(this, u, c), S(this, n, p);
    }
    add(c, p) {
      e(this, a).push([c, p]), T(this, l, _o).call(this);
    }
  }, n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakSet(), _o = async function() {
    var c;
    if (!e(this, o)) {
      for (S(this, o, !0); e(this, a).length > 0; ) {
        const p = e(this, a).shift();
        if (!p)
          continue;
        const [w, E] = p;
        (c = e(this, n)) == null || c.call(this, i.LOGGER_PREFIX, "Processing event:", E), await w.then((m) => {
          var h;
          if (m.kind === "error") {
            (h = e(this, n)) == null || h.call(this, s.LogType.debugError, "Event threw before sending:", m.error.message, m.error.stack);
            return;
          }
          return e(this, u).call(this, m.value);
        }).catch((m) => {
          var h;
          (h = e(this, n)) == null || h.call(this, s.LogType.debugError, "Event was not processed:", m == null ? void 0 : m.message);
        });
      }
      S(this, o, !1);
    }
  }, Y(r, "LOGGER_PREFIX", `${s.LogType.debug}:queue`), r);
  return or.ProcessingQueue = t, i = t, or;
}
var cr = {}, ot = {}, _n = {}, ra;
function Dd() {
  return ra || (ra = 1, Object.defineProperty(_n, "__esModule", { value: !0 })), _n;
}
var Re = {}, sa;
function ko() {
  if (sa) return Re;
  sa = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.EVENT_NAMES = Re.Bluetooth = Re.Network = Re.BrowsingContext = Re.Log = Re.Script = Re.BiDiModule = void 0;
  var i;
  (function(a) {
    a.Bluetooth = "bluetooth", a.Browser = "browser", a.BrowsingContext = "browsingContext", a.Cdp = "goog:cdp", a.DeprecatedCdp = "cdp", a.Input = "input", a.Log = "log", a.Network = "network", a.Script = "script", a.Session = "session";
  })(i || (Re.BiDiModule = i = {}));
  var s;
  (function(a) {
    (function(o) {
      o.Message = "script.message", o.RealmCreated = "script.realmCreated", o.RealmDestroyed = "script.realmDestroyed";
    })(a.EventNames || (a.EventNames = {}));
  })(s || (Re.Script = s = {}));
  var t;
  (function(a) {
    (function(o) {
      o.LogEntryAdded = "log.entryAdded";
    })(a.EventNames || (a.EventNames = {}));
  })(t || (Re.Log = t = {}));
  var r;
  (function(a) {
    (function(o) {
      o.ContextCreated = "browsingContext.contextCreated", o.ContextDestroyed = "browsingContext.contextDestroyed", o.DomContentLoaded = "browsingContext.domContentLoaded", o.DownloadWillBegin = "browsingContext.downloadWillBegin", o.FragmentNavigated = "browsingContext.fragmentNavigated", o.HistoryUpdated = "browsingContext.historyUpdated", o.Load = "browsingContext.load", o.NavigationAborted = "browsingContext.navigationAborted", o.NavigationFailed = "browsingContext.navigationFailed", o.NavigationStarted = "browsingContext.navigationStarted", o.UserPromptClosed = "browsingContext.userPromptClosed", o.UserPromptOpened = "browsingContext.userPromptOpened";
    })(a.EventNames || (a.EventNames = {}));
  })(r || (Re.BrowsingContext = r = {}));
  var n;
  (function(a) {
    (function(o) {
      o.AuthRequired = "network.authRequired", o.BeforeRequestSent = "network.beforeRequestSent", o.FetchError = "network.fetchError", o.ResponseCompleted = "network.responseCompleted", o.ResponseStarted = "network.responseStarted";
    })(a.EventNames || (a.EventNames = {}));
  })(n || (Re.Network = n = {}));
  var u;
  return function(a) {
    (function(o) {
      o.RequestDevicePromptUpdated = "bluetooth.requestDevicePromptUpdated";
    })(a.EventNames || (a.EventNames = {}));
  }(u || (Re.Bluetooth = u = {})), Re.EVENT_NAMES = /* @__PURE__ */ new Set([
    // keep-sorted start
    ...Object.values(i),
    ...Object.values(r.EventNames),
    ...Object.values(t.EventNames),
    ...Object.values(n.EventNames),
    ...Object.values(s.EventNames)
    // keep-sorted end
  ]), Re;
}
var kn = {}, na;
function Md() {
  return na || (na = 1, Object.defineProperty(kn, "__esModule", { value: !0 })), kn;
}
var ne = {}, ia;
function Io() {
  if (ia) return ne;
  ia = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.NoSuchWebExtensionException = ne.InvalidWebExtensionException = ne.UnderspecifiedStoragePartitionException = ne.UnableToSetFileInputException = ne.UnableToSetCookieException = ne.NoSuchStoragePartitionException = ne.UnsupportedOperationException = ne.UnableToCloseBrowserException = ne.UnableToCaptureScreenException = ne.UnknownErrorException = ne.UnknownCommandException = ne.SessionNotCreatedException = ne.NoSuchUserContextException = ne.NoSuchScriptException = ne.NoSuchRequestException = ne.NoSuchNodeException = ne.NoSuchInterceptException = ne.NoSuchHistoryEntryException = ne.NoSuchHandleException = ne.NoSuchFrameException = ne.NoSuchElementException = ne.NoSuchAlertException = ne.MoveTargetOutOfBoundsException = ne.InvalidSessionIdException = ne.InvalidSelectorException = ne.InvalidArgumentException = ne.Exception = void 0;
  class i extends Error {
    constructor(D, H, K) {
      super();
      Y(this, "error");
      Y(this, "message");
      Y(this, "stacktrace");
      this.error = D, this.message = H, this.stacktrace = K;
    }
    toErrorResponse(D) {
      return {
        type: "error",
        id: D,
        error: this.error,
        message: this.message,
        stacktrace: this.stacktrace
      };
    }
  }
  ne.Exception = i;
  class s extends i {
    constructor(I, D) {
      super("invalid argument", I, D);
    }
  }
  ne.InvalidArgumentException = s;
  class t extends i {
    constructor(I, D) {
      super("invalid selector", I, D);
    }
  }
  ne.InvalidSelectorException = t;
  class r extends i {
    constructor(I, D) {
      super("invalid session id", I, D);
    }
  }
  ne.InvalidSessionIdException = r;
  class n extends i {
    constructor(I, D) {
      super("move target out of bounds", I, D);
    }
  }
  ne.MoveTargetOutOfBoundsException = n;
  class u extends i {
    constructor(I, D) {
      super("no such alert", I, D);
    }
  }
  ne.NoSuchAlertException = u;
  class a extends i {
    constructor(I, D) {
      super("no such element", I, D);
    }
  }
  ne.NoSuchElementException = a;
  class o extends i {
    constructor(I, D) {
      super("no such frame", I, D);
    }
  }
  ne.NoSuchFrameException = o;
  class l extends i {
    constructor(I, D) {
      super("no such handle", I, D);
    }
  }
  ne.NoSuchHandleException = l;
  class d extends i {
    constructor(I, D) {
      super("no such history entry", I, D);
    }
  }
  ne.NoSuchHistoryEntryException = d;
  class y extends i {
    constructor(I, D) {
      super("no such intercept", I, D);
    }
  }
  ne.NoSuchInterceptException = y;
  class c extends i {
    constructor(I, D) {
      super("no such node", I, D);
    }
  }
  ne.NoSuchNodeException = c;
  class p extends i {
    constructor(I, D) {
      super("no such request", I, D);
    }
  }
  ne.NoSuchRequestException = p;
  class w extends i {
    constructor(I, D) {
      super("no such script", I, D);
    }
  }
  ne.NoSuchScriptException = w;
  class E extends i {
    constructor(I, D) {
      super("no such user context", I, D);
    }
  }
  ne.NoSuchUserContextException = E;
  class m extends i {
    constructor(I, D) {
      super("session not created", I, D);
    }
  }
  ne.SessionNotCreatedException = m;
  class h extends i {
    constructor(I, D) {
      super("unknown command", I, D);
    }
  }
  ne.UnknownCommandException = h;
  class f extends i {
    constructor(I, D = new Error().stack) {
      super("unknown error", I, D);
    }
  }
  ne.UnknownErrorException = f;
  class x extends i {
    constructor(I, D) {
      super("unable to capture screen", I, D);
    }
  }
  ne.UnableToCaptureScreenException = x;
  class C extends i {
    constructor(I, D) {
      super("unable to close browser", I, D);
    }
  }
  ne.UnableToCloseBrowserException = C;
  class g extends i {
    constructor(I, D) {
      super("unsupported operation", I, D);
    }
  }
  ne.UnsupportedOperationException = g;
  class N extends i {
    constructor(I, D) {
      super("no such storage partition", I, D);
    }
  }
  ne.NoSuchStoragePartitionException = N;
  class _ extends i {
    constructor(I, D) {
      super("unable to set cookie", I, D);
    }
  }
  ne.UnableToSetCookieException = _;
  class k extends i {
    constructor(I, D) {
      super("unable to set file input", I, D);
    }
  }
  ne.UnableToSetFileInputException = k;
  class b extends i {
    constructor(I, D) {
      super("underspecified storage partition", I, D);
    }
  }
  ne.UnderspecifiedStoragePartitionException = b;
  class O extends i {
    constructor(I, D) {
      super("invalid web extension", I, D);
    }
  }
  ne.InvalidWebExtensionException = O;
  class P extends i {
    constructor(I, D) {
      super("no such web extension", I, D);
    }
  }
  return ne.NoSuchWebExtensionException = P, ne;
}
var In = {}, aa;
function Od() {
  return aa || (aa = 1, Object.defineProperty(In, "__esModule", { value: !0 })), In;
}
var Tn = {}, oa;
function Fd() {
  return oa || (oa = 1, Object.defineProperty(Tn, "__esModule", { value: !0 })), Tn;
}
var ca;
function Ce() {
  return ca || (ca = 1, function(i) {
    var s = ot.__createBinding || (Object.create ? function(u, a, o, l) {
      l === void 0 && (l = o);
      var d = Object.getOwnPropertyDescriptor(a, o);
      (!d || ("get" in d ? !a.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
        return a[o];
      } }), Object.defineProperty(u, l, d);
    } : function(u, a, o, l) {
      l === void 0 && (l = o), u[l] = a[o];
    }), t = ot.__setModuleDefault || (Object.create ? function(u, a) {
      Object.defineProperty(u, "default", { enumerable: !0, value: a });
    } : function(u, a) {
      u.default = a;
    }), r = ot.__importStar || /* @__PURE__ */ function() {
      var u = function(a) {
        return u = Object.getOwnPropertyNames || function(o) {
          var l = [];
          for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (l[l.length] = d);
          return l;
        }, u(a);
      };
      return function(a) {
        if (a && a.__esModule) return a;
        var o = {};
        if (a != null) for (var l = u(a), d = 0; d < l.length; d++) l[d] !== "default" && s(o, a, l[d]);
        return t(o, a), o;
      };
    }(), n = ot.__exportStar || function(u, a) {
      for (var o in u) o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && s(a, u, o);
    };
    Object.defineProperty(i, "__esModule", { value: !0 }), i.ChromiumBidi = i.Cdp = void 0, i.Cdp = r(Dd()), i.ChromiumBidi = r(ko()), n(Md(), i), n(Io(), i), n(Od(), i), n(Fd(), i);
  }(ot)), ot;
}
var ur = {}, ua;
function jd() {
  if (ua) return ur;
  ua = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.BidiNoOpParser = void 0;
  let i = class {
    // Bluetooth module
    // keep-sorted start block=yes
    parseHandleRequestDevicePromptParams(t) {
      return t;
    }
    parseSimulateAdapterParameters(t) {
      return t;
    }
    parseSimulateAdvertisementParameters(t) {
      return t;
    }
    parseSimulatePreconnectedPeripheralParameters(t) {
      return t;
    }
    // keep-sorted end
    // Browser module
    // keep-sorted start block=yes
    parseRemoveUserContextParams(t) {
      return t;
    }
    // keep-sorted end
    // Browsing Context module
    // keep-sorted start block=yes
    parseActivateParams(t) {
      return t;
    }
    parseCaptureScreenshotParams(t) {
      return t;
    }
    parseCloseParams(t) {
      return t;
    }
    parseCreateParams(t) {
      return t;
    }
    parseGetTreeParams(t) {
      return t;
    }
    parseHandleUserPromptParams(t) {
      return t;
    }
    parseLocateNodesParams(t) {
      return t;
    }
    parseNavigateParams(t) {
      return t;
    }
    parsePrintParams(t) {
      return t;
    }
    parseReloadParams(t) {
      return t;
    }
    parseSetViewportParams(t) {
      return t;
    }
    parseTraverseHistoryParams(t) {
      return t;
    }
    // keep-sorted end
    // CDP module
    // keep-sorted start block=yes
    parseGetSessionParams(t) {
      return t;
    }
    parseResolveRealmParams(t) {
      return t;
    }
    parseSendCommandParams(t) {
      return t;
    }
    // keep-sorted end
    // Script module
    // keep-sorted start block=yes
    parseAddPreloadScriptParams(t) {
      return t;
    }
    parseCallFunctionParams(t) {
      return t;
    }
    parseDisownParams(t) {
      return t;
    }
    parseEvaluateParams(t) {
      return t;
    }
    parseGetRealmsParams(t) {
      return t;
    }
    parseRemovePreloadScriptParams(t) {
      return t;
    }
    // keep-sorted end
    // Input module
    // keep-sorted start block=yes
    parsePerformActionsParams(t) {
      return t;
    }
    parseReleaseActionsParams(t) {
      return t;
    }
    parseSetFilesParams(t) {
      return t;
    }
    // keep-sorted end
    // Network module
    // keep-sorted start block=yes
    parseAddInterceptParams(t) {
      return t;
    }
    parseContinueRequestParams(t) {
      return t;
    }
    parseContinueResponseParams(t) {
      return t;
    }
    parseContinueWithAuthParams(t) {
      return t;
    }
    parseFailRequestParams(t) {
      return t;
    }
    parseProvideResponseParams(t) {
      return t;
    }
    parseRemoveInterceptParams(t) {
      return t;
    }
    parseSetCacheBehavior(t) {
      return t;
    }
    // keep-sorted end
    // Permissions module
    // keep-sorted start block=yes
    parseSetPermissionsParams(t) {
      return t;
    }
    // keep-sorted end
    // Session module
    // keep-sorted start block=yes
    parseSubscribeParams(t) {
      return t;
    }
    // keep-sorted end
    // Storage module
    // keep-sorted start block=yes
    parseDeleteCookiesParams(t) {
      return t;
    }
    parseGetCookiesParams(t) {
      return t;
    }
    parseSetCookieParams(t) {
      return t;
    }
  };
  return ur.BidiNoOpParser = i, ur;
}
var dr = {}, da;
function Bd() {
  var t, r, n, To, a;
  if (da) return dr;
  da = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.BrowserProcessor = void 0;
  const i = Ce();
  let s = (a = class {
    constructor(l, d) {
      v(this, n);
      v(this, t);
      v(this, r);
      S(this, t, l), S(this, r, d);
    }
    close() {
      return setTimeout(() => e(this, t).sendCommand("Browser.close"), 0), {};
    }
    async createUserContext(l) {
      const d = {
        proxyServer: l["goog:proxyServer"] ?? void 0
      }, y = l["goog:proxyBypassList"] ?? void 0;
      return y && (d.proxyBypassList = y.join(",")), {
        userContext: (await e(this, t).sendCommand("Target.createBrowserContext", d)).browserContextId
      };
    }
    async removeUserContext(l) {
      const d = l.userContext;
      if (d === "default")
        throw new i.InvalidArgumentException("`default` user context cannot be removed");
      try {
        await e(this, t).sendCommand("Target.disposeBrowserContext", {
          browserContextId: d
        });
      } catch (y) {
        throw y.message.startsWith("Failed to find context with id") ? new i.NoSuchUserContextException(y.message) : y;
      }
      return {};
    }
    async getUserContexts() {
      const l = await e(this, t).sendCommand("Target.getBrowserContexts");
      return {
        userContexts: [
          {
            userContext: "default"
          },
          ...l.browserContextIds.map((d) => ({
            userContext: d
          }))
        ]
      };
    }
    async getClientWindows() {
      const l = e(this, r).getTopLevelContexts().map((p) => p.cdpTarget.id), d = await Promise.all(l.map(async (p) => await T(this, n, To).call(this, p))), y = /* @__PURE__ */ new Set(), c = new Array();
      for (const p of d)
        y.has(p.clientWindow) || (y.add(p.clientWindow), c.push(p));
      return { clientWindows: c };
    }
  }, t = new WeakMap(), r = new WeakMap(), n = new WeakSet(), To = async function(l) {
    const d = await e(this, t).sendCommand("Browser.getWindowForTarget", { targetId: l });
    return {
      // `active` is not supported in CDP yet.
      active: !1,
      clientWindow: `${d.windowId}`,
      state: d.bounds.windowState ?? "normal",
      height: d.bounds.height ?? 0,
      width: d.bounds.width ?? 0,
      x: d.bounds.left ?? 0,
      y: d.bounds.top ?? 0
    };
  }, a);
  return dr.BrowserProcessor = s, dr;
}
var lr = {}, la;
function qd() {
  var t, r, n, u, a;
  if (la) return lr;
  la = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.CdpProcessor = void 0;
  const i = Ce();
  let s = (a = class {
    constructor(l, d, y, c) {
      v(this, t);
      v(this, r);
      v(this, n);
      v(this, u);
      S(this, t, l), S(this, r, d), S(this, n, y), S(this, u, c);
    }
    getSession(l) {
      const d = l.context, y = e(this, t).getContext(d).cdpTarget.cdpSessionId;
      return y === void 0 ? {} : { session: y };
    }
    resolveRealm(l) {
      const d = l.realm, y = e(this, r).getRealm({ realmId: d });
      if (y === void 0)
        throw new i.UnknownErrorException(`Could not find realm ${l.realm}`);
      return { executionContextId: y.executionContextId };
    }
    async sendCommand(l) {
      return {
        result: await (l.session ? e(this, n).getCdpClient(l.session) : e(this, u)).sendCommand(l.method, l.params),
        session: l.session
      };
    }
  }, t = new WeakMap(), r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a);
  return lr.CdpProcessor = s, lr;
}
var hr = {}, ha;
function Ad() {
  var t, r, n, u, No, o;
  if (ha) return hr;
  ha = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.BrowsingContextProcessor = void 0;
  const i = Ce();
  let s = (o = class {
    constructor(d, y, c) {
      v(this, u);
      v(this, t);
      v(this, r);
      v(this, n);
      S(this, t, d), S(this, r, y), S(this, n, c), e(this, n).addSubscribeHook(i.ChromiumBidi.BrowsingContext.EventNames.ContextCreated, T(this, u, No).bind(this));
    }
    getTree(d) {
      return {
        contexts: (d.root === void 0 ? e(this, r).getTopLevelContexts() : [e(this, r).getContext(d.root)]).map((c) => c.serializeToBidiValue(d.maxDepth ?? Number.MAX_VALUE))
      };
    }
    async create(d) {
      let y, c = "default";
      if (d.referenceContext !== void 0) {
        if (y = e(this, r).getContext(d.referenceContext), !y.isTopLevelContext())
          throw new i.InvalidArgumentException("referenceContext should be a top-level context");
        c = y.userContext;
      }
      d.userContext !== void 0 && (c = d.userContext);
      const p = e(this, r).getAllContexts().filter((h) => h.userContext === c);
      let w = !1;
      switch (d.type) {
        case "tab":
          w = !1;
          break;
        case "window":
          w = !0;
          break;
      }
      p.length || (w = !0);
      let E;
      try {
        E = await e(this, t).sendCommand("Target.createTarget", {
          url: "about:blank",
          newWindow: w,
          browserContextId: c === "default" ? void 0 : c,
          background: d.background === !0
        });
      } catch (h) {
        throw (
          // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
          h.message.startsWith("Failed to find browser context with id") || // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
          h.message === "browserContextId" ? new i.NoSuchUserContextException(`The context ${c} was not found`) : h
        );
      }
      const m = await e(this, r).waitForContext(E.targetId);
      return await m.lifecycleLoaded(), { context: m.id };
    }
    navigate(d) {
      return e(this, r).getContext(d.context).navigate(
        d.url,
        d.wait ?? "none"
        /* BrowsingContext.ReadinessState.None */
      );
    }
    reload(d) {
      return e(this, r).getContext(d.context).reload(
        d.ignoreCache ?? !1,
        d.wait ?? "none"
        /* BrowsingContext.ReadinessState.None */
      );
    }
    async activate(d) {
      const y = e(this, r).getContext(d.context);
      if (!y.isTopLevelContext())
        throw new i.InvalidArgumentException("Activation is only supported on the top-level context");
      return await y.activate(), {};
    }
    async captureScreenshot(d) {
      return await e(this, r).getContext(d.context).captureScreenshot(d);
    }
    async print(d) {
      return await e(this, r).getContext(d.context).print(d);
    }
    async setViewport(d) {
      const y = e(this, r).getContext(d.context);
      if (!y.isTopLevelContext())
        throw new i.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
      return await y.setViewport(d.viewport, d.devicePixelRatio), {};
    }
    async traverseHistory(d) {
      const y = e(this, r).getContext(d.context);
      if (!y)
        throw new i.InvalidArgumentException(`No browsing context with id ${d.context}`);
      if (!y.isTopLevelContext())
        throw new i.InvalidArgumentException("Traversing history is only supported on the top-level context");
      return await y.traverseHistory(d.delta), {};
    }
    async handleUserPrompt(d) {
      var c;
      const y = e(this, r).getContext(d.context);
      try {
        await y.handleUserPrompt(d.accept, d.userText);
      } catch (p) {
        throw (c = p.message) != null && c.includes("No dialog is showing") ? new i.NoSuchAlertException("No dialog is showing") : p;
      }
      return {};
    }
    async close(d) {
      const y = e(this, r).getContext(d.context);
      if (!y.isTopLevelContext())
        throw new i.InvalidArgumentException(`Non top-level browsing context ${y.id} cannot be closed.`);
      const c = y.cdpTarget.parentCdpClient;
      try {
        const p = new Promise((w) => {
          const E = (m) => {
            m.targetId === d.context && (c.off("Target.detachedFromTarget", E), w());
          };
          c.on("Target.detachedFromTarget", E);
        });
        try {
          d.promptUnload ? await y.close() : await c.sendCommand("Target.closeTarget", {
            targetId: d.context
          });
        } catch (w) {
          if (!c.isCloseError(w))
            throw w;
        }
        await p;
      } catch (p) {
        if (!(p.code === -32e3 && p.message === "Not attached to an active page"))
          throw p;
      }
      return {};
    }
    async locateNodes(d) {
      return await e(this, r).getContext(d.context).locateNodes(d);
    }
  }, t = new WeakMap(), r = new WeakMap(), n = new WeakMap(), u = new WeakSet(), No = function(d) {
    return [
      e(this, r).getContext(d),
      ...e(this, r).getContext(d).allChildren
    ].forEach((p) => {
      e(this, n).registerEvent({
        type: "event",
        method: i.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
        params: p.serializeToBidiValue()
      }, p.id);
    }), Promise.resolve();
  }, o);
  return hr.BrowsingContextProcessor = s, hr;
}
var pr = {}, Ns = {}, pa;
function Pt() {
  if (pa) return Ns;
  pa = 1, Object.defineProperty(Ns, "__esModule", { value: !0 }), Ns.assert = i;
  function i(s, t) {
    if (!s)
      throw new Error(t ?? "Internal assertion failed.");
  }
  return Ns;
}
var fr = {}, mr = {}, fa;
function Ld() {
  if (fa) return mr;
  fa = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.isSingleComplexGrapheme = i, mr.isSingleGrapheme = s;
  function i(t) {
    return s(t) && t.length > 1;
  }
  function s(t) {
    return [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(t)].length === 1;
  }
  return mr;
}
var qe = {}, ma;
function Ro() {
  var n, u, Xr, o, l, d, y, c, p, w;
  if (ma) return qe;
  ma = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.WheelSource = qe.PointerSource = qe.KeySource = qe.NoneSource = void 0;
  class i {
    constructor() {
      Y(this, "type", "none");
    }
  }
  qe.NoneSource = i;
  class s {
    constructor() {
      v(this, u);
      Y(this, "type", "key");
      Y(this, "pressed", /* @__PURE__ */ new Set());
      // This is a bitfield that matches the modifiers parameter of
      // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
      v(this, n, 0);
    }
    get modifiers() {
      return e(this, n);
    }
    get alt() {
      return (e(this, n) & 1) === 1;
    }
    set alt(m) {
      T(this, u, Xr).call(this, m, 1);
    }
    get ctrl() {
      return (e(this, n) & 2) === 2;
    }
    set ctrl(m) {
      T(this, u, Xr).call(this, m, 2);
    }
    get meta() {
      return (e(this, n) & 4) === 4;
    }
    set meta(m) {
      T(this, u, Xr).call(this, m, 4);
    }
    get shift() {
      return (e(this, n) & 8) === 8;
    }
    set shift(m) {
      T(this, u, Xr).call(this, m, 8);
    }
  }
  n = new WeakMap(), u = new WeakSet(), Xr = function(m, h) {
    m ? S(this, n, e(this, n) | h) : S(this, n, e(this, n) & ~h);
  }, qe.KeySource = s;
  class t {
    constructor(m, h) {
      Y(this, "type", "pointer");
      Y(this, "subtype");
      Y(this, "pointerId");
      Y(this, "pressed", /* @__PURE__ */ new Set());
      Y(this, "x", 0);
      Y(this, "y", 0);
      Y(this, "radiusX");
      Y(this, "radiusY");
      Y(this, "force");
      v(this, w, /* @__PURE__ */ new Map());
      this.pointerId = m, this.subtype = h;
    }
    // This is a bitfield that matches the buttons parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
    get buttons() {
      let m = 0;
      for (const h of this.pressed)
        switch (h) {
          case 0:
            m |= 1;
            break;
          case 1:
            m |= 4;
            break;
          case 2:
            m |= 2;
            break;
          case 3:
            m |= 8;
            break;
          case 4:
            m |= 16;
            break;
        }
      return m;
    }
    setClickCount(m, h) {
      let f = e(this, w).get(m);
      return (!f || f.compare(h)) && (f = h), ++f.count, e(this, w).set(m, f), f.count;
    }
    getClickCount(m) {
      var h;
      return ((h = e(this, w).get(m)) == null ? void 0 : h.count) ?? 0;
    }
  }
  w = new WeakMap(), // --- Platform-specific code starts here ---
  // Input.dispatchMouseEvent doesn't know the concept of double click, so we
  // need to create the logic, similar to how it's done for OSes:
  // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
  Y(t, "ClickContext", (o = class {
    constructor(h, f, x) {
      Y(this, "count", 0);
      v(this, y);
      v(this, c);
      v(this, p);
      S(this, y, h), S(this, c, f), S(this, p, x);
    }
    compare(h) {
      return (
        // The click needs to be within a certain amount of ms.
        e(h, p) - e(this, p) > e(o, l) || // The click needs to be within a certain square radius.
        Math.abs(e(h, y) - e(this, y)) > e(o, d) || Math.abs(e(h, c) - e(this, c)) > e(o, d)
      );
    }
  }, l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), v(o, l, 500), v(o, d, 2), o)), qe.PointerSource = t;
  class r {
    constructor() {
      Y(this, "type", "wheel");
    }
  }
  return qe.WheelSource = r, qe;
}
var It = {}, ga;
function Ud() {
  if (ga) return It;
  ga = 1, Object.defineProperty(It, "__esModule", { value: !0 }), It.getNormalizedKey = i, It.getKeyCode = s, It.getKeyLocation = t;
  function i(r) {
    switch (r) {
      case "":
        return "Unidentified";
      case "":
        return "Cancel";
      case "":
        return "Help";
      case "":
        return "Backspace";
      case "":
        return "Tab";
      case "":
        return "Clear";
      // Specification declares the '\uE006' to be `Return`, but it is not supported by
      // Chrome, so fall back to `Enter`, which aligns with WPT.
      case "":
      case "":
        return "Enter";
      case "":
        return "Shift";
      case "":
        return "Control";
      case "":
        return "Alt";
      case "":
        return "Pause";
      case "":
        return "Escape";
      case "":
        return " ";
      case "":
        return "PageUp";
      case "":
        return "PageDown";
      case "":
        return "End";
      case "":
        return "Home";
      case "":
        return "ArrowLeft";
      case "":
        return "ArrowUp";
      case "":
        return "ArrowRight";
      case "":
        return "ArrowDown";
      case "":
        return "Insert";
      case "":
        return "Delete";
      case "":
        return ";";
      case "":
        return "=";
      case "":
        return "0";
      case "":
        return "1";
      case "":
        return "2";
      case "":
        return "3";
      case "":
        return "4";
      case "":
        return "5";
      case "":
        return "6";
      case "":
        return "7";
      case "":
        return "8";
      case "":
        return "9";
      case "":
        return "*";
      case "":
        return "+";
      case "":
        return ",";
      case "":
        return "-";
      case "":
        return ".";
      case "":
        return "/";
      case "":
        return "F1";
      case "":
        return "F2";
      case "":
        return "F3";
      case "":
        return "F4";
      case "":
        return "F5";
      case "":
        return "F6";
      case "":
        return "F7";
      case "":
        return "F8";
      case "":
        return "F9";
      case "":
        return "F10";
      case "":
        return "F11";
      case "":
        return "F12";
      case "":
        return "Meta";
      case "":
        return "ZenkakuHankaku";
      case "":
        return "Shift";
      case "":
        return "Control";
      case "":
        return "Alt";
      case "":
        return "Meta";
      case "":
        return "PageUp";
      case "":
        return "PageDown";
      case "":
        return "End";
      case "":
        return "Home";
      case "":
        return "ArrowLeft";
      case "":
        return "ArrowUp";
      case "":
        return "ArrowRight";
      case "":
        return "ArrowDown";
      case "":
        return "Insert";
      case "":
        return "Delete";
      default:
        return r;
    }
  }
  function s(r) {
    switch (r) {
      case "`":
      case "~":
        return "Backquote";
      case "\\":
      case "|":
        return "Backslash";
      case "":
        return "Backspace";
      case "[":
      case "{":
        return "BracketLeft";
      case "]":
      case "}":
        return "BracketRight";
      case ",":
      case "<":
        return "Comma";
      case "0":
      case ")":
        return "Digit0";
      case "1":
      case "!":
        return "Digit1";
      case "2":
      case "@":
        return "Digit2";
      case "3":
      case "#":
        return "Digit3";
      case "4":
      case "$":
        return "Digit4";
      case "5":
      case "%":
        return "Digit5";
      case "6":
      case "^":
        return "Digit6";
      case "7":
      case "&":
        return "Digit7";
      case "8":
      case "*":
        return "Digit8";
      case "9":
      case "(":
        return "Digit9";
      case "=":
      case "+":
        return "Equal";
      // The spec declares the '<' to be `IntlBackslash` as well, but it is already covered
      // in the `Comma` above.
      case ">":
        return "IntlBackslash";
      case "a":
      case "A":
        return "KeyA";
      case "b":
      case "B":
        return "KeyB";
      case "c":
      case "C":
        return "KeyC";
      case "d":
      case "D":
        return "KeyD";
      case "e":
      case "E":
        return "KeyE";
      case "f":
      case "F":
        return "KeyF";
      case "g":
      case "G":
        return "KeyG";
      case "h":
      case "H":
        return "KeyH";
      case "i":
      case "I":
        return "KeyI";
      case "j":
      case "J":
        return "KeyJ";
      case "k":
      case "K":
        return "KeyK";
      case "l":
      case "L":
        return "KeyL";
      case "m":
      case "M":
        return "KeyM";
      case "n":
      case "N":
        return "KeyN";
      case "o":
      case "O":
        return "KeyO";
      case "p":
      case "P":
        return "KeyP";
      case "q":
      case "Q":
        return "KeyQ";
      case "r":
      case "R":
        return "KeyR";
      case "s":
      case "S":
        return "KeyS";
      case "t":
      case "T":
        return "KeyT";
      case "u":
      case "U":
        return "KeyU";
      case "v":
      case "V":
        return "KeyV";
      case "w":
      case "W":
        return "KeyW";
      case "x":
      case "X":
        return "KeyX";
      case "y":
      case "Y":
        return "KeyY";
      case "z":
      case "Z":
        return "KeyZ";
      case "-":
      case "_":
        return "Minus";
      case ".":
        return "Period";
      case "'":
      case '"':
        return "Quote";
      case ";":
      case ":":
        return "Semicolon";
      case "/":
      case "?":
        return "Slash";
      case "":
        return "AltLeft";
      case "":
        return "AltRight";
      case "":
        return "ControlLeft";
      case "":
        return "ControlRight";
      case "":
        return "Enter";
      case "":
        return "Pause";
      case "":
        return "MetaLeft";
      case "":
        return "MetaRight";
      case "":
        return "ShiftLeft";
      case "":
        return "ShiftRight";
      case " ":
      case "":
        return "Space";
      case "":
        return "Tab";
      case "":
        return "Delete";
      case "":
        return "End";
      case "":
        return "Help";
      case "":
        return "Home";
      case "":
        return "Insert";
      case "":
        return "PageDown";
      case "":
        return "PageUp";
      case "":
        return "ArrowDown";
      case "":
        return "ArrowLeft";
      case "":
        return "ArrowRight";
      case "":
        return "ArrowUp";
      case "":
        return "Escape";
      case "":
        return "F1";
      case "":
        return "F2";
      case "":
        return "F3";
      case "":
        return "F4";
      case "":
        return "F5";
      case "":
        return "F6";
      case "":
        return "F7";
      case "":
        return "F8";
      case "":
        return "F9";
      case "":
        return "F10";
      case "":
        return "F11";
      case "":
        return "F12";
      case "":
        return "NumpadEqual";
      case "":
      case "":
        return "Numpad0";
      case "":
      case "":
        return "Numpad1";
      case "":
      case "":
        return "Numpad2";
      case "":
      case "":
        return "Numpad3";
      case "":
      case "":
        return "Numpad4";
      case "":
        return "Numpad5";
      case "":
      case "":
        return "Numpad6";
      case "":
      case "":
        return "Numpad7";
      case "":
      case "":
        return "Numpad8";
      case "":
      case "":
        return "Numpad9";
      case "":
        return "NumpadAdd";
      case "":
        return "NumpadComma";
      case "":
      case "":
        return "NumpadDecimal";
      case "":
        return "NumpadDivide";
      case "":
        return "NumpadEnter";
      case "":
        return "NumpadMultiply";
      case "":
        return "NumpadSubtract";
      default:
        return;
    }
  }
  function t(r) {
    switch (r) {
      case "":
      case "":
      case "":
      case "":
      case "":
        return 1;
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
      case "":
        return 3;
      case "":
      case "":
      case "":
      case "":
        return 2;
      default:
        return 0;
    }
  }
  return It;
}
var gr = {}, wa;
function $d() {
  return wa || (wa = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.KeyToKeyCode = void 0, gr.KeyToKeyCode = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    Abort: 3,
    Help: 6,
    Backspace: 8,
    Tab: 9,
    Numpad5: 12,
    NumpadEnter: 13,
    Enter: 13,
    "\\r": 13,
    "\\n": 13,
    ShiftLeft: 16,
    ShiftRight: 16,
    ControlLeft: 17,
    ControlRight: 17,
    AltLeft: 18,
    AltRight: 18,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Convert: 28,
    NonConvert: 29,
    Space: 32,
    Numpad9: 33,
    PageUp: 33,
    Numpad3: 34,
    PageDown: 34,
    End: 35,
    Numpad1: 35,
    Home: 36,
    Numpad7: 36,
    ArrowLeft: 37,
    Numpad4: 37,
    Numpad8: 38,
    ArrowUp: 38,
    ArrowRight: 39,
    Numpad6: 39,
    Numpad2: 40,
    ArrowDown: 40,
    Select: 41,
    Open: 43,
    PrintScreen: 44,
    Insert: 45,
    Numpad0: 45,
    Delete: 46,
    NumpadDecimal: 46,
    Digit0: 48,
    Digit1: 49,
    Digit2: 50,
    Digit3: 51,
    Digit4: 52,
    Digit5: 53,
    Digit6: 54,
    Digit7: 55,
    Digit8: 56,
    Digit9: 57,
    KeyA: 65,
    KeyB: 66,
    KeyC: 67,
    KeyD: 68,
    KeyE: 69,
    KeyF: 70,
    KeyG: 71,
    KeyH: 72,
    KeyI: 73,
    KeyJ: 74,
    KeyK: 75,
    KeyL: 76,
    KeyM: 77,
    KeyN: 78,
    KeyO: 79,
    KeyP: 80,
    KeyQ: 81,
    KeyR: 82,
    KeyS: 83,
    KeyT: 84,
    KeyU: 85,
    KeyV: 86,
    KeyW: 87,
    KeyX: 88,
    KeyY: 89,
    KeyZ: 90,
    MetaLeft: 91,
    MetaRight: 92,
    ContextMenu: 93,
    NumpadMultiply: 106,
    NumpadAdd: 107,
    NumpadSubtract: 109,
    NumpadDivide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    F16: 127,
    F17: 128,
    F18: 129,
    F19: 130,
    F20: 131,
    F21: 132,
    F22: 133,
    F23: 134,
    F24: 135,
    NumLock: 144,
    ScrollLock: 145,
    AudioVolumeMute: 173,
    AudioVolumeDown: 174,
    AudioVolumeUp: 175,
    MediaTrackNext: 176,
    MediaTrackPrevious: 177,
    MediaStop: 178,
    MediaPlayPause: 179,
    Semicolon: 186,
    Equal: 187,
    NumpadEqual: 187,
    Comma: 188,
    Minus: 189,
    Period: 190,
    Slash: 191,
    Backquote: 192,
    BracketLeft: 219,
    Backslash: 220,
    BracketRight: 221,
    Quote: 222,
    AltGraph: 225,
    Props: 247,
    Cancel: 3,
    Clear: 12,
    Shift: 16,
    Control: 17,
    Alt: 18,
    Accept: 30,
    ModeChange: 31,
    " ": 32,
    Print: 42,
    Execute: 43,
    "\\u0000": 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    Meta: 91,
    "*": 106,
    "+": 107,
    "-": 109,
    "/": 111,
    ";": 186,
    "=": 187,
    ",": 188,
    ".": 190,
    "`": 192,
    "[": 219,
    "\\\\": 220,
    "]": 221,
    "'": 222,
    Attn: 246,
    CrSel: 247,
    ExSel: 248,
    EraseEof: 249,
    Play: 250,
    ZoomOut: 251,
    ")": 48,
    "!": 49,
    "@": 50,
    "#": 51,
    $: 52,
    "%": 53,
    "^": 54,
    "&": 55,
    "(": 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    ":": 186,
    "<": 188,
    _: 189,
    ">": 190,
    "?": 191,
    "~": 192,
    "{": 219,
    "|": 220,
    "}": 221,
    '"': 222,
    Camera: 44,
    EndCall: 95,
    VolumeDown: 182,
    VolumeUp: 183
  }), gr;
}
var ya;
function Hd() {
  var m, h, f, x, C, g, N, _, Te, Do, Mo, Oo, Fo, jo, Mn, Bo, qo, Ao;
  if (ya) return fr;
  ya = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.ActionDispatcher = void 0;
  const i = Ce(), s = Pt(), t = Ld(), r = Ro(), n = Ud(), u = $d(), a = ((j) => {
    const F = j.getClientRects()[0], B = Math.max(0, Math.min(F.x, F.x + F.width)), L = Math.min(window.innerWidth, Math.max(F.x, F.x + F.width)), $ = Math.max(0, Math.min(F.y, F.y + F.height)), W = Math.min(window.innerHeight, Math.max(F.y, F.y + F.height));
    return [B + (L - B >> 1), $ + (W - $ >> 1)];
  }).toString(), o = (() => navigator.platform.toLowerCase().includes("mac")).toString();
  async function l(j, F) {
    var Z, U, A, J;
    const L = await (await j.getOrCreateSandbox(void 0)).callFunction(a, !1, { type: "undefined" }, [F]);
    if (L.type === "exception")
      throw new i.NoSuchElementException(`Origin element ${F.sharedId} was not found`);
    (0, s.assert)(L.result.type === "array"), (0, s.assert)(((U = (Z = L.result.value) == null ? void 0 : Z[0]) == null ? void 0 : U.type) === "number"), (0, s.assert)(((J = (A = L.result.value) == null ? void 0 : A[1]) == null ? void 0 : J.type) === "number");
    const { result: { value: [{ value: $ }, { value: W }] } } = L;
    return { x: $, y: W };
  }
  let d = (m = class {
    constructor(F, B, L, $) {
      v(this, _);
      v(this, h);
      v(this, f, 0);
      v(this, x, 0);
      v(this, C);
      v(this, g);
      v(this, N);
      S(this, h, B), S(this, C, F), S(this, g, L), S(this, N, $);
    }
    async dispatchActions(F) {
      await e(this, C).queue.run(async () => {
        for (const B of F)
          await this.dispatchTickActions(B);
      });
    }
    async dispatchTickActions(F) {
      S(this, f, performance.now()), S(this, x, 0);
      for (const { action: L } of F)
        "duration" in L && L.duration !== void 0 && S(this, x, Math.max(e(this, x), L.duration));
      const B = [
        new Promise((L) => setTimeout(L, e(this, x)))
      ];
      for (const L of F)
        B.push(T(this, _, Do).call(this, L));
      await Promise.all(B);
    }
  }, h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakSet(), Te = function() {
    return e(this, h).getContext(e(this, g));
  }, Do = async function({ id: F, action: B }) {
    const L = e(this, C).get(F), $ = e(this, C).getGlobalKeyState();
    switch (B.type) {
      case "keyDown": {
        await T(this, _, qo).call(this, L, B), e(this, C).cancelList.push({
          id: F,
          action: {
            ...B,
            type: "keyUp"
          }
        });
        break;
      }
      case "keyUp": {
        await T(this, _, Ao).call(this, L, B);
        break;
      }
      case "pause":
        break;
      case "pointerDown": {
        await T(this, _, Mo).call(this, L, $, B), e(this, C).cancelList.push({
          id: F,
          action: {
            ...B,
            type: "pointerUp"
          }
        });
        break;
      }
      case "pointerMove": {
        await T(this, _, Fo).call(this, L, $, B);
        break;
      }
      case "pointerUp": {
        await T(this, _, Oo).call(this, L, $, B);
        break;
      }
      case "scroll": {
        await T(this, _, Bo).call(this, L, $, B);
        break;
      }
    }
  }, Mo = async function(F, B, L) {
    const { button: $ } = L;
    if (F.pressed.has($))
      return;
    F.pressed.add($);
    const { x: W, y: Z, subtype: U } = F, { width: A, height: J, pressure: se, twist: we, tangentialPressure: ye } = L, { tiltX: te, tiltY: M } = w(L), { modifiers: z } = B, { radiusX: X, radiusY: ae } = E(A ?? 1, J ?? 1);
    switch (U) {
      case "mouse":
      case "pen":
        await e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mousePressed",
          x: W,
          y: Z,
          modifiers: z,
          button: p($),
          buttons: F.buttons,
          clickCount: F.setClickCount($, new r.PointerSource.ClickContext(W, Z, performance.now())),
          pointerType: U,
          tangentialPressure: ye,
          tiltX: te,
          tiltY: M,
          twist: we,
          force: se
        });
        break;
      case "touch":
        await e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
          type: "touchStart",
          touchPoints: [
            {
              x: W,
              y: Z,
              radiusX: X,
              radiusY: ae,
              tangentialPressure: ye,
              tiltX: te,
              tiltY: M,
              twist: we,
              force: se,
              id: F.pointerId
            }
          ],
          modifiers: z
        });
        break;
    }
    F.radiusX = X, F.radiusY = ae, F.force = se;
  }, Oo = function(F, B, L) {
    const { button: $ } = L;
    if (!F.pressed.has($))
      return;
    F.pressed.delete($);
    const { x: W, y: Z, force: U, radiusX: A, radiusY: J, subtype: se } = F, { modifiers: we } = B;
    switch (se) {
      case "mouse":
      case "pen":
        return e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mouseReleased",
          x: W,
          y: Z,
          modifiers: we,
          button: p($),
          buttons: F.buttons,
          clickCount: F.getClickCount($),
          pointerType: se
        });
      case "touch":
        return e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
          type: "touchEnd",
          touchPoints: [
            {
              x: W,
              y: Z,
              id: F.pointerId,
              force: U,
              radiusX: A,
              radiusY: J
            }
          ],
          modifiers: we
        });
    }
  }, Fo = async function(F, B, L) {
    const { x: $, y: W, subtype: Z } = F, { width: U, height: A, pressure: J, twist: se, tangentialPressure: we, x: ye, y: te, origin: M = "viewport", duration: z = e(this, x) } = L, { tiltX: X, tiltY: ae } = w(L), { radiusX: oe, radiusY: de } = E(U ?? 1, A ?? 1), { targetX: ie, targetY: me } = await T(this, _, Mn).call(this, M, ye, te, $, W);
    if (ie < 0 || me < 0)
      throw new i.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${ie}, y: ${me})`);
    let re;
    do {
      const pe = z > 0 ? (performance.now() - e(this, f)) / z : 1;
      re = pe >= 1;
      let ue, q;
      if (re ? (ue = ie, q = me) : (ue = Math.round(pe * (ie - $) + $), q = Math.round(pe * (me - W) + W)), F.x !== ue || F.y !== q) {
        const { modifiers: V } = B;
        switch (Z) {
          case "mouse":
            await e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: ue,
              y: q,
              modifiers: V,
              clickCount: 0,
              button: p(F.pressed.values().next().value ?? 5),
              buttons: F.buttons,
              pointerType: Z,
              tangentialPressure: we,
              tiltX: X,
              tiltY: ae,
              twist: se,
              force: J
            });
            break;
          case "pen":
            F.pressed.size !== 0 && await e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: ue,
              y: q,
              modifiers: V,
              clickCount: 0,
              button: p(F.pressed.values().next().value ?? 5),
              buttons: F.buttons,
              pointerType: Z,
              tangentialPressure: we,
              tiltX: X,
              tiltY: ae,
              twist: se,
              force: J ?? 0.5
            });
            break;
          case "touch":
            F.pressed.size !== 0 && await e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
              type: "touchMove",
              touchPoints: [
                {
                  x: ue,
                  y: q,
                  radiusX: oe,
                  radiusY: de,
                  tangentialPressure: we,
                  tiltX: X,
                  tiltY: ae,
                  twist: se,
                  force: J,
                  id: F.pointerId
                }
              ],
              modifiers: V
            });
            break;
        }
        F.x = ue, F.y = q, F.radiusX = oe, F.radiusY = de, F.force = J;
      }
    } while (!re);
  }, jo = async function() {
    if (e(this, _, Te).id === e(this, _, Te).cdpTarget.id)
      return { x: 0, y: 0 };
    const { backendNodeId: F } = await e(this, _, Te).cdpTarget.cdpClient.sendCommand("DOM.getFrameOwner", { frameId: e(this, _, Te).id }), { model: B } = await e(this, _, Te).cdpTarget.cdpClient.sendCommand("DOM.getBoxModel", {
      backendNodeId: F
    });
    return { x: B.content[0], y: B.content[1] };
  }, Mn = async function(F, B, L, $, W) {
    let Z, U;
    const A = await T(this, _, jo).call(this);
    switch (F) {
      case "viewport":
        Z = B + A.x, U = L + A.y;
        break;
      case "pointer":
        Z = $ + B + A.x, U = W + L + A.y;
        break;
      default: {
        const { x: J, y: se } = await l(e(this, _, Te), F.element);
        Z = J + B + A.x, U = se + L + A.y;
        break;
      }
    }
    return { targetX: Z, targetY: U };
  }, Bo = async function(F, B, L) {
    const { deltaX: $, deltaY: W, x: Z, y: U, origin: A = "viewport", duration: J = e(this, x) } = L;
    if (A === "pointer")
      throw new i.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
    const { targetX: se, targetY: we } = await T(this, _, Mn).call(this, A, Z, U, 0, 0);
    if (se < 0 || we < 0)
      throw new i.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${se}, y: ${we})`);
    let ye = 0, te = 0, M;
    do {
      const z = J > 0 ? (performance.now() - e(this, f)) / J : 1;
      M = z >= 1;
      let X, ae;
      if (M ? (X = $ - ye, ae = W - te) : (X = Math.round(z * $ - ye), ae = Math.round(z * W - te)), X !== 0 || ae !== 0) {
        const { modifiers: oe } = B;
        await e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          deltaX: X,
          deltaY: ae,
          x: se,
          y: we,
          modifiers: oe
        }), ye += X, te += ae;
      }
    } while (!M);
  }, qo = async function(F, B) {
    const L = B.value;
    if (!(0, t.isSingleGrapheme)(L))
      throw new i.InvalidArgumentException(`Invalid key value: ${L}`);
    const $ = (0, t.isSingleComplexGrapheme)(L), W = (0, n.getNormalizedKey)(L), Z = F.pressed.has(W), U = (0, n.getKeyCode)(L), A = (0, n.getKeyLocation)(L);
    switch (W) {
      case "Alt":
        F.alt = !0;
        break;
      case "Shift":
        F.shift = !0;
        break;
      case "Control":
        F.ctrl = !0;
        break;
      case "Meta":
        F.meta = !0;
        break;
    }
    F.pressed.add(W);
    const { modifiers: J } = F, se = y(W, F, $), we = c(U ?? "", F) ?? se;
    let ye;
    if (e(this, N) && F.meta)
      switch (U) {
        case "KeyA":
          ye = "SelectAll";
          break;
        case "KeyC":
          ye = "Copy";
          break;
        case "KeyV":
          ye = F.shift ? "PasteAndMatchStyle" : "Paste";
          break;
        case "KeyX":
          ye = "Cut";
          break;
        case "KeyZ":
          ye = F.shift ? "Redo" : "Undo";
          break;
      }
    const te = [
      e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
        type: we ? "keyDown" : "rawKeyDown",
        windowsVirtualKeyCode: u.KeyToKeyCode[W],
        key: W,
        code: U,
        text: we,
        unmodifiedText: se,
        autoRepeat: Z,
        isSystemKey: F.alt || void 0,
        location: A < 3 ? A : void 0,
        isKeypad: A === 3,
        modifiers: J,
        commands: ye ? [ye] : void 0
      })
    ];
    W === "Escape" && !F.alt && (e(this, N) && !F.ctrl && !F.meta || !e(this, N)) && te.push(e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.cancelDragging")), await Promise.all(te);
  }, Ao = function(F, B) {
    const L = B.value;
    if (!(0, t.isSingleGrapheme)(L))
      throw new i.InvalidArgumentException(`Invalid key value: ${L}`);
    const $ = (0, t.isSingleComplexGrapheme)(L), W = (0, n.getNormalizedKey)(L);
    if (!F.pressed.has(W))
      return;
    const Z = (0, n.getKeyCode)(L), U = (0, n.getKeyLocation)(L);
    switch (W) {
      case "Alt":
        F.alt = !1;
        break;
      case "Shift":
        F.shift = !1;
        break;
      case "Control":
        F.ctrl = !1;
        break;
      case "Meta":
        F.meta = !1;
        break;
    }
    F.pressed.delete(W);
    const { modifiers: A } = F, J = y(W, F, $), se = c(Z ?? "", F) ?? J;
    return e(this, _, Te).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
      type: "keyUp",
      windowsVirtualKeyCode: u.KeyToKeyCode[W],
      key: W,
      code: Z,
      text: se,
      unmodifiedText: J,
      location: U < 3 ? U : void 0,
      isSystemKey: F.alt || void 0,
      isKeypad: U === 3,
      modifiers: A
    });
  }, Y(m, "isMacOS", async (F) => {
    const B = await (await F.getOrCreateSandbox(void 0)).callFunction(o, !1);
    return (0, s.assert)(B.type !== "exception"), (0, s.assert)(B.result.type === "boolean"), B.result.value;
  }), m);
  fr.ActionDispatcher = d;
  const y = (j, F, B) => B ? j : j === "Enter" ? "\r" : [...j].length === 1 ? F.shift ? j.toLocaleUpperCase("en-US") : j : void 0, c = (j, F) => {
    if (F.ctrl) {
      switch (j) {
        case "Digit2":
          if (F.shift)
            return "\0";
          break;
        case "KeyA":
          return "";
        case "KeyB":
          return "";
        case "KeyC":
          return "";
        case "KeyD":
          return "";
        case "KeyE":
          return "";
        case "KeyF":
          return "";
        case "KeyG":
          return "\x07";
        case "KeyH":
          return "\b";
        case "KeyI":
          return "	";
        case "KeyJ":
          return `
`;
        case "KeyK":
          return "\v";
        case "KeyL":
          return "\f";
        case "KeyM":
          return "\r";
        case "KeyN":
          return "";
        case "KeyO":
          return "";
        case "KeyP":
          return "";
        case "KeyQ":
          return "";
        case "KeyR":
          return "";
        case "KeyS":
          return "";
        case "KeyT":
          return "";
        case "KeyU":
          return "";
        case "KeyV":
          return "";
        case "KeyW":
          return "";
        case "KeyX":
          return "";
        case "KeyY":
          return "";
        case "KeyZ":
          return "";
        case "BracketLeft":
          return "\x1B";
        case "Backslash":
          return "";
        case "BracketRight":
          return "";
        case "Digit6":
          if (F.shift)
            return "";
          break;
        case "Minus":
          return "";
      }
      return "";
    }
    if (F.alt)
      return "";
  };
  function p(j) {
    switch (j) {
      case 0:
        return "left";
      case 1:
        return "middle";
      case 2:
        return "right";
      case 3:
        return "back";
      case 4:
        return "forward";
      default:
        return "none";
    }
  }
  function w(j) {
    const F = j.altitudeAngle ?? Math.PI / 2, B = j.azimuthAngle ?? 0;
    let L = 0, $ = 0;
    if (F === 0 && ((B === 0 || B === 2 * Math.PI) && (L = Math.PI / 2), B === Math.PI / 2 && ($ = Math.PI / 2), B === Math.PI && (L = -Math.PI / 2), B === 3 * Math.PI / 2 && ($ = -Math.PI / 2), B > 0 && B < Math.PI / 2 && (L = Math.PI / 2, $ = Math.PI / 2), B > Math.PI / 2 && B < Math.PI && (L = -Math.PI / 2, $ = Math.PI / 2), B > Math.PI && B < 3 * Math.PI / 2 && (L = -Math.PI / 2, $ = -Math.PI / 2), B > 3 * Math.PI / 2 && B < 2 * Math.PI && (L = Math.PI / 2, $ = -Math.PI / 2)), F !== 0) {
      const Z = Math.tan(F);
      L = Math.atan(Math.cos(B) / Z), $ = Math.atan(Math.sin(B) / Z);
    }
    const W = 180 / Math.PI;
    return {
      tiltX: Math.round(L * W),
      tiltY: Math.round($ * W)
    };
  }
  function E(j, F) {
    return {
      radiusX: j ? j / 2 : 0.5,
      radiusY: F ? F / 2 : 0.5
    };
  }
  return fr;
}
var wr = {}, yr = {}, vr = {}, va;
function Kd() {
  var s, t, r, On, u;
  if (va) return vr;
  va = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.Mutex = void 0;
  let i = (u = class {
    constructor() {
      v(this, r);
      v(this, s, !1);
      v(this, t, []);
    }
    // This is FIFO.
    acquire() {
      const o = { resolved: !1 };
      return e(this, s) ? new Promise((l) => {
        e(this, t).push(() => l(T(this, r, On).bind(this, o)));
      }) : (S(this, s, !0), Promise.resolve(T(this, r, On).bind(this, o)));
    }
    async run(o) {
      const l = await this.acquire();
      try {
        return await o();
      } finally {
        l();
      }
    }
  }, s = new WeakMap(), t = new WeakMap(), r = new WeakSet(), On = function(o) {
    if (o.resolved)
      throw new Error("Cannot release more than once.");
    o.resolved = !0;
    const l = e(this, t).shift();
    if (!l) {
      S(this, s, !1);
      return;
    }
    l();
  }, u);
  return vr.Mutex = i, vr;
}
var ba;
function zd() {
  var n, u, a;
  if (ba) return yr;
  ba = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.InputState = void 0;
  const i = Ce(), s = Kd(), t = Ro();
  let r = (a = class {
    constructor() {
      Y(this, "cancelList", []);
      v(this, n, /* @__PURE__ */ new Map());
      v(this, u, new s.Mutex());
    }
    getOrCreate(l, d, y) {
      let c = e(this, n).get(l);
      if (!c) {
        switch (d) {
          case "none":
            c = new t.NoneSource();
            break;
          case "key":
            c = new t.KeySource();
            break;
          case "pointer": {
            let p = y === "mouse" ? 0 : 2;
            const w = /* @__PURE__ */ new Set();
            for (const [, E] of e(this, n))
              E.type === "pointer" && w.add(E.pointerId);
            for (; w.has(p); )
              ++p;
            c = new t.PointerSource(p, y);
            break;
          }
          case "wheel":
            c = new t.WheelSource();
            break;
          default:
            throw new i.InvalidArgumentException(`Expected "none", "key", "pointer", or "wheel". Found unknown source type ${d}.`);
        }
        return e(this, n).set(l, c), c;
      }
      if (c.type !== d)
        throw new i.InvalidArgumentException(`Input source type of ${l} is ${c.type}, but received ${d}.`);
      return c;
    }
    get(l) {
      const d = e(this, n).get(l);
      if (!d)
        throw new i.UnknownErrorException("Internal error.");
      return d;
    }
    getGlobalKeyState() {
      const l = new t.KeySource();
      for (const [, d] of e(this, n))
        if (d.type === "key") {
          for (const y of d.pressed)
            l.pressed.add(y);
          l.alt || (l.alt = d.alt), l.ctrl || (l.ctrl = d.ctrl), l.meta || (l.meta = d.meta), l.shift || (l.shift = d.shift);
        }
      return l;
    }
    get queue() {
      return e(this, u);
    }
  }, n = new WeakMap(), u = new WeakMap(), a);
  return yr.InputState = r, yr;
}
var Ca;
function Wd() {
  if (Ca) return wr;
  Ca = 1, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.InputStateManager = void 0;
  const i = Pt(), s = zd();
  let t = class extends WeakMap {
    get(n) {
      return (0, i.assert)(n.isTopLevelContext()), this.has(n) || this.set(n, new s.InputState()), super.get(n);
    }
  };
  return wr.InputStateManager = t, wr;
}
var xa;
function Vd() {
  var u, a, o, Lo, d;
  if (xa) return pr;
  xa = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.InputProcessor = void 0;
  const i = Ce(), s = Pt(), t = Hd(), r = Wd();
  let n = (d = class {
    constructor(c) {
      v(this, o);
      v(this, u);
      v(this, a, new r.InputStateManager());
      S(this, u, c);
    }
    async performActions(c) {
      const p = e(this, u).getContext(c.context), w = e(this, a).get(p.top), E = T(this, o, Lo).call(this, c, w);
      return await new t.ActionDispatcher(w, e(this, u), c.context, await t.ActionDispatcher.isMacOS(p).catch(() => !1)).dispatchActions(E), {};
    }
    async releaseActions(c) {
      const p = e(this, u).getContext(c.context), w = p.top, E = e(this, a).get(w);
      return await new t.ActionDispatcher(E, e(this, u), c.context, await t.ActionDispatcher.isMacOS(p).catch(() => !1)).dispatchTickActions(E.cancelList.reverse()), e(this, a).delete(w), {};
    }
    async setFiles(c) {
      const w = await e(this, u).getContext(c.context).getOrCreateSandbox(void 0);
      let E;
      try {
        E = await w.callFunction(String(function(x) {
          if (!(this instanceof HTMLInputElement))
            return this instanceof Element ? 1 : 0;
          if (this.type !== "file")
            return 2;
          if (this.disabled)
            return 3;
          if (x > 1 && !this.multiple)
            return 4;
        }), !1, c.element, [{ type: "number", value: c.files.length }]);
      } catch {
        throw new i.NoSuchNodeException(`Could not find element ${c.element.sharedId}`);
      }
      if ((0, s.assert)(E.type === "success"), E.result.type === "number")
        switch (E.result.value) {
          case 0:
            throw new i.NoSuchElementException(`Could not find element ${c.element.sharedId}`);
          case 1:
            throw new i.UnableToSetFileInputException(`Element ${c.element.sharedId} is not a input`);
          case 2:
            throw new i.UnableToSetFileInputException(`Input element ${c.element.sharedId} is not a file type`);
          case 3:
            throw new i.UnableToSetFileInputException(`Input element ${c.element.sharedId} is disabled`);
          case 4:
            throw new i.UnableToSetFileInputException("Cannot set multiple files on a non-multiple input element");
        }
      if (c.files.length === 0)
        return await w.callFunction(String(function() {
          var x;
          if (((x = this.files) == null ? void 0 : x.length) === 0) {
            this.dispatchEvent(new Event("cancel", {
              bubbles: !0
            }));
            return;
          }
          this.files = new DataTransfer().files, this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0 }));
        }), !1, c.element), {};
      const m = [];
      for (let f = 0; f < c.files.length; ++f) {
        const x = await w.callFunction(
          String(function(_) {
            var k;
            return (k = this.files) == null ? void 0 : k.item(_);
          }),
          !1,
          c.element,
          [{ type: "number", value: 0 }],
          "root"
          /* Script.ResultOwnership.Root */
        );
        if ((0, s.assert)(x.type === "success"), x.result.type !== "object")
          break;
        const { handle: C } = x.result;
        (0, s.assert)(C !== void 0);
        const { path: g } = await w.cdpClient.sendCommand("DOM.getFileInfo", {
          objectId: C
        });
        m.push(g), w.disown(C).catch(void 0);
      }
      m.sort();
      const h = [...c.files].sort();
      if (m.length !== c.files.length || h.some((f, x) => m[x] !== f)) {
        const { objectId: f } = await w.deserializeForCdp(c.element);
        (0, s.assert)(f !== void 0), await w.cdpClient.sendCommand("DOM.setFileInputFiles", {
          files: c.files,
          objectId: f
        });
      } else
        await w.callFunction(String(function() {
          this.dispatchEvent(new Event("cancel", {
            bubbles: !0
          }));
        }), !1, c.element);
      return {};
    }
  }, u = new WeakMap(), a = new WeakMap(), o = new WeakSet(), Lo = function(c, p) {
    var E;
    const w = [];
    for (const m of c.actions) {
      switch (m.type) {
        case "pointer": {
          m.parameters ?? (m.parameters = {
            pointerType: "mouse"
            /* Input.PointerType.Mouse */
          }), (E = m.parameters).pointerType ?? (E.pointerType = "mouse");
          const f = p.getOrCreate(m.id, "pointer", m.parameters.pointerType);
          if (f.subtype !== m.parameters.pointerType)
            throw new i.InvalidArgumentException(`Expected input source ${m.id} to be ${f.subtype}; got ${m.parameters.pointerType}.`);
          break;
        }
        default:
          p.getOrCreate(m.id, m.type);
      }
      const h = m.actions.map((f) => ({
        id: m.id,
        action: f
      }));
      for (let f = 0; f < h.length; f++)
        w.length === f && w.push([]), w[f].push(h[f]);
    }
    return w;
  }, d);
  return pr.InputProcessor = n, pr;
}
var br = {}, ke = {}, Rs = {}, Ea;
function Gd() {
  if (Ea) return Rs;
  Ea = 1, Object.defineProperty(Rs, "__esModule", { value: !0 }), Rs.base64ToString = i;
  function i(s) {
    return "atob" in globalThis ? globalThis.atob(s) : Buffer.from(s, "base64").toString("ascii");
  }
  return Rs;
}
var Sa;
function vn() {
  if (Sa) return ke;
  Sa = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.computeHeadersSize = t, ke.bidiNetworkHeadersFromCdpNetworkHeaders = r, ke.bidiNetworkHeadersFromCdpNetworkHeadersEntries = n, ke.cdpNetworkHeadersFromBidiNetworkHeaders = u, ke.bidiNetworkHeadersFromCdpFetchHeaders = a, ke.cdpFetchHeadersFromBidiNetworkHeaders = o, ke.networkHeaderFromCookieHeaders = l, ke.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = d, ke.cdpToBiDiCookie = y, ke.deserializeByteValue = c, ke.bidiToCdpCookie = p, ke.sameSiteBiDiToCdp = E, ke.isSpecialScheme = m, ke.matchUrlPattern = f, ke.bidiBodySizeFromCdpPostDataEntries = x, ke.getTiming = C;
  const i = Io(), s = Gd();
  function t(g) {
    const N = g.reduce((_, k) => `${_}${k.name}: ${k.value.value}\r
`, "");
    return new TextEncoder().encode(N).length;
  }
  function r(g) {
    return g ? Object.entries(g).map(([N, _]) => ({
      name: N,
      value: {
        type: "string",
        value: _
      }
    })) : [];
  }
  function n(g) {
    return g ? g.map(({ name: N, value: _ }) => ({
      name: N,
      value: {
        type: "string",
        value: _
      }
    })) : [];
  }
  function u(g) {
    if (g !== void 0)
      return g.reduce((N, _) => (N[_.name] = _.value.value, N), {});
  }
  function a(g) {
    return g ? g.map(({ name: N, value: _ }) => ({
      name: N,
      value: {
        type: "string",
        value: _
      }
    })) : [];
  }
  function o(g) {
    if (g !== void 0)
      return g.map(({ name: N, value: _ }) => ({
        name: N,
        value: _.value
      }));
  }
  function l(g) {
    return g === void 0 ? void 0 : {
      name: "Cookie",
      value: {
        type: "string",
        value: g.reduce((_, k, b) => {
          b > 0 && (_ += ";");
          const O = k.value.type === "base64" ? btoa(k.value.value) : k.value.value;
          return _ += `${k.name}=${O}`, _;
        }, "")
      }
    };
  }
  function d(g) {
    switch (g) {
      case "default":
        return "Default";
      case "cancel":
        return "CancelAuth";
      case "provideCredentials":
        return "ProvideCredentials";
    }
  }
  function y(g) {
    const N = {
      name: g.name,
      value: { type: "string", value: g.value },
      domain: g.domain,
      path: g.path,
      size: g.size,
      httpOnly: g.httpOnly,
      secure: g.secure,
      sameSite: g.sameSite === void 0 ? "none" : w(g.sameSite),
      ...g.expires >= 0 ? { expiry: g.expires } : void 0
    };
    return N["goog:session"] = g.session, N["goog:priority"] = g.priority, N["goog:sameParty"] = g.sameParty, N["goog:sourceScheme"] = g.sourceScheme, N["goog:sourcePort"] = g.sourcePort, g.partitionKey !== void 0 && (N["goog:partitionKey"] = g.partitionKey), g.partitionKeyOpaque !== void 0 && (N["goog:partitionKeyOpaque"] = g.partitionKeyOpaque), N;
  }
  function c(g) {
    return g.type === "base64" ? (0, s.base64ToString)(g.value) : g.value;
  }
  function p(g, N) {
    const _ = c(g.cookie.value), k = {
      name: g.cookie.name,
      value: _,
      domain: g.cookie.domain,
      path: g.cookie.path ?? "/",
      secure: g.cookie.secure ?? !1,
      httpOnly: g.cookie.httpOnly ?? !1,
      ...N.sourceOrigin !== void 0 && {
        partitionKey: {
          hasCrossSiteAncestor: !1,
          // CDP's `partitionKey.topLevelSite` is the BiDi's `partition.sourceOrigin`.
          topLevelSite: N.sourceOrigin
        }
      },
      ...g.cookie.expiry !== void 0 && {
        expires: g.cookie.expiry
      },
      ...g.cookie.sameSite !== void 0 && {
        sameSite: E(g.cookie.sameSite)
      }
    };
    return g.cookie["goog:url"] !== void 0 && (k.url = g.cookie["goog:url"]), g.cookie["goog:priority"] !== void 0 && (k.priority = g.cookie["goog:priority"]), g.cookie["goog:sameParty"] !== void 0 && (k.sameParty = g.cookie["goog:sameParty"]), g.cookie["goog:sourceScheme"] !== void 0 && (k.sourceScheme = g.cookie["goog:sourceScheme"]), g.cookie["goog:sourcePort"] !== void 0 && (k.sourcePort = g.cookie["goog:sourcePort"]), k;
  }
  function w(g) {
    switch (g) {
      case "Strict":
        return "strict";
      case "None":
        return "none";
      case "Lax":
        return "lax";
      default:
        return "lax";
    }
  }
  function E(g) {
    switch (g) {
      case "strict":
        return "Strict";
      case "lax":
        return "Lax";
      case "none":
        return "None";
    }
    throw new i.InvalidArgumentException(`Unknown 'sameSite' value ${g}`);
  }
  function m(g) {
    return ["ftp", "file", "http", "https", "ws", "wss"].includes(g.replace(/:$/, ""));
  }
  function h(g) {
    return g.protocol.replace(/:$/, "");
  }
  function f(g, N) {
    const _ = new URL(N);
    return !(g.protocol !== void 0 && g.protocol !== h(_) || g.hostname !== void 0 && g.hostname !== _.hostname || g.port !== void 0 && g.port !== _.port || g.pathname !== void 0 && g.pathname !== _.pathname || g.search !== void 0 && g.search !== _.search);
  }
  function x(g) {
    let N = 0;
    for (const _ of g)
      N += atob(_.bytes ?? "").length;
    return N;
  }
  function C(g, N = 0) {
    return !g || g <= 0 || g + N <= 0 ? 0 : g + N;
  }
  return ke;
}
var Pa;
function Uo() {
  var n, u, a, Fn, Jr, d;
  if (Pa) return br;
  Pa = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.NetworkProcessor = void 0;
  const i = Ce(), s = vn();
  let t = (d = class {
    constructor(c, p) {
      v(this, a);
      v(this, n);
      v(this, u);
      S(this, n, c), S(this, u, p);
    }
    async addIntercept(c) {
      e(this, n).verifyTopLevelContextsList(c.contexts);
      const p = c.urlPatterns ?? [], w = d.parseUrlPatterns(p), E = e(this, u).addIntercept({
        urlPatterns: w,
        phases: c.phases,
        contexts: c.contexts
      });
      return await Promise.all(e(this, n).getAllContexts().map((m) => m.cdpTarget.toggleNetwork())), {
        intercept: E
      };
    }
    async continueRequest(c) {
      if (c.url !== void 0 && d.parseUrlString(c.url), c.method !== void 0 && !d.isMethodValid(c.method))
        throw new i.InvalidArgumentException(`Method '${c.method}' is invalid.`);
      c.headers && d.validateHeaders(c.headers);
      const p = T(this, a, Jr).call(this, c.request, [
        "beforeRequestSent"
      ]);
      try {
        await p.continueRequest(c);
      } catch (w) {
        throw d.wrapInterceptionError(w);
      }
      return {};
    }
    async continueResponse(c) {
      c.headers && d.validateHeaders(c.headers);
      const p = T(this, a, Jr).call(this, c.request, [
        "authRequired",
        "responseStarted"
      ]);
      try {
        await p.continueResponse(c);
      } catch (w) {
        throw d.wrapInterceptionError(w);
      }
      return {};
    }
    async continueWithAuth(c) {
      const p = c.request;
      return await T(this, a, Jr).call(this, p, [
        "authRequired"
      ]).continueWithAuth(c), {};
    }
    async failRequest({ request: c }) {
      const p = T(this, a, Fn).call(this, c);
      if (p.interceptPhase === "authRequired")
        throw new i.InvalidArgumentException(`Request '${c}' in 'authRequired' phase cannot be failed`);
      if (!p.interceptPhase)
        throw new i.NoSuchRequestException(`No blocked request found for network id '${c}'`);
      return await p.failRequest("Failed"), {};
    }
    async provideResponse(c) {
      c.headers && d.validateHeaders(c.headers);
      const p = T(this, a, Jr).call(this, c.request, [
        "beforeRequestSent",
        "responseStarted",
        "authRequired"
      ]);
      try {
        await p.provideResponse(c);
      } catch (w) {
        throw d.wrapInterceptionError(w);
      }
      return {};
    }
    async removeIntercept(c) {
      return e(this, u).removeIntercept(c.intercept), await Promise.all(e(this, n).getAllContexts().map((p) => p.cdpTarget.toggleNetwork())), {};
    }
    async setCacheBehavior(c) {
      const p = e(this, n).verifyTopLevelContextsList(c.contexts);
      if (p.size === 0)
        return e(this, u).defaultCacheBehavior = c.cacheBehavior, await Promise.all(e(this, n).getAllContexts().map((E) => E.cdpTarget.toggleSetCacheDisabled())), {};
      const w = c.cacheBehavior === "bypass";
      return await Promise.all([...p.values()].map((E) => E.cdpTarget.toggleSetCacheDisabled(w))), {};
    }
    /**
     * Validate https://fetch.spec.whatwg.org/#header-value
     */
    static validateHeaders(c) {
      for (const p of c) {
        let w;
        if (p.value.type === "string" ? w = p.value.value : w = atob(p.value.value), w !== w.trim() || w.includes(`
`) || w.includes("\0"))
          throw new i.InvalidArgumentException(`Header value '${w}' is not acceptable value`);
      }
    }
    static isMethodValid(c) {
      return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(c);
    }
    /**
     * Attempts to parse the given url.
     * Throws an InvalidArgumentException if the url is invalid.
     */
    static parseUrlString(c) {
      try {
        return new URL(c);
      } catch (p) {
        throw new i.InvalidArgumentException(`Invalid URL '${c}': ${p}`);
      }
    }
    static parseUrlPatterns(c) {
      return c.map((p) => {
        let w = "", E = !0, m = !0, h = !0, f = !0, x = !0;
        switch (p.type) {
          case "string": {
            w = r(p.pattern);
            break;
          }
          case "pattern": {
            if (p.protocol === void 0)
              E = !1, w += "http";
            else {
              if (p.protocol === "")
                throw new i.InvalidArgumentException("URL pattern must specify a protocol");
              if (p.protocol = r(p.protocol), !p.protocol.match(/^[a-zA-Z+-.]+$/))
                throw new i.InvalidArgumentException("Forbidden characters");
              w += p.protocol;
            }
            const g = w.toLocaleLowerCase();
            if (w += ":", (0, s.isSpecialScheme)(g) && (w += "//"), p.hostname === void 0)
              g !== "file" && (w += "placeholder"), m = !1;
            else {
              if (p.hostname === "")
                throw new i.InvalidArgumentException("URL pattern must specify a hostname");
              if (p.protocol === "file")
                throw new i.InvalidArgumentException("URL pattern protocol cannot be 'file'");
              p.hostname = r(p.hostname);
              let N = !1;
              for (const _ of p.hostname) {
                if (_ === "/" || _ === "?" || _ === "#")
                  throw new i.InvalidArgumentException("'/', '?', '#' are forbidden in hostname");
                if (!N && _ === ":")
                  throw new i.InvalidArgumentException("':' is only allowed inside brackets in hostname");
                _ === "[" && (N = !0), _ === "]" && (N = !1);
              }
              w += p.hostname;
            }
            if (p.port === void 0)
              h = !1;
            else {
              if (p.port === "")
                throw new i.InvalidArgumentException("URL pattern must specify a port");
              if (p.port = r(p.port), w += ":", !p.port.match(/^\d+$/))
                throw new i.InvalidArgumentException("Forbidden characters");
              w += p.port;
            }
            if (p.pathname === void 0)
              f = !1;
            else {
              if (p.pathname = r(p.pathname), p.pathname[0] !== "/" && (w += "/"), p.pathname.includes("#") || p.pathname.includes("?"))
                throw new i.InvalidArgumentException("Forbidden characters");
              w += p.pathname;
            }
            if (p.search === void 0)
              x = !1;
            else {
              if (p.search = r(p.search), p.search[0] !== "?" && (w += "?"), p.search.includes("#"))
                throw new i.InvalidArgumentException("Forbidden characters");
              w += p.search;
            }
            break;
          }
        }
        const C = (g) => {
          const N = {
            "ftp:": 21,
            "file:": null,
            "http:": 80,
            "https:": 443,
            "ws:": 80,
            "wss:": 443
          };
          if ((0, s.isSpecialScheme)(g.protocol) && N[g.protocol] !== null && (!g.port || String(N[g.protocol]) === g.port))
            return "";
          if (g.port)
            return g.port;
        };
        try {
          const g = new URL(w);
          return {
            protocol: E ? g.protocol.replace(/:$/, "") : void 0,
            hostname: m ? g.hostname : void 0,
            port: h ? C(g) : void 0,
            pathname: f && g.pathname ? g.pathname : void 0,
            search: x ? g.search : void 0
          };
        } catch (g) {
          throw new i.InvalidArgumentException(`${g.message} '${w}'`);
        }
      });
    }
    static wrapInterceptionError(c) {
      return c != null && c.message.includes("Invalid header") ? new i.InvalidArgumentException("Invalid header") : c;
    }
  }, n = new WeakMap(), u = new WeakMap(), a = new WeakSet(), Fn = function(c) {
    const p = e(this, u).getRequestById(c);
    if (!p)
      throw new i.NoSuchRequestException(`Network request with ID '${c}' doesn't exist`);
    return p;
  }, Jr = function(c, p) {
    const w = T(this, a, Fn).call(this, c);
    if (!w.interceptPhase)
      throw new i.NoSuchRequestException(`No blocked request found for network id '${c}'`);
    if (w.interceptPhase && !p.includes(w.interceptPhase))
      throw new i.InvalidArgumentException(`Blocked request for network id '${c}' is in '${w.interceptPhase}' phase`);
    return w;
  }, d);
  br.NetworkProcessor = t;
  function r(y) {
    const c = /* @__PURE__ */ new Set(["(", ")", "*", "{", "}"]);
    let p = "", w = !1;
    for (const E of y) {
      if (!w) {
        if (c.has(E))
          throw new i.InvalidArgumentException("Forbidden characters");
        if (E === "\\") {
          w = !0;
          continue;
        }
      }
      p += E, w = !1;
    }
    return p;
  }
  return br;
}
var Cr = {}, _a;
function Xd() {
  var t, r;
  if (_a) return Cr;
  _a = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.PermissionsProcessor = void 0;
  const i = Ce();
  let s = (r = class {
    constructor(u) {
      v(this, t);
      S(this, t, u);
    }
    async setPermissions(u) {
      try {
        const a = u["goog:userContext"] || u.userContext;
        await e(this, t).sendCommand("Browser.setPermission", {
          origin: u.origin,
          browserContextId: a && a !== "default" ? a : void 0,
          permission: {
            name: u.descriptor.name
          },
          setting: u.state
        });
      } catch (a) {
        if (a.message === "Permission can't be granted to opaque origins.")
          return {};
        throw new i.InvalidArgumentException(a.message);
      }
      return {};
    }
  }, t = new WeakMap(), r);
  return Cr.PermissionsProcessor = s, Cr;
}
var xr = {}, Er = {}, Ds = {}, ka;
function er() {
  if (ka) return Ds;
  ka = 1, Object.defineProperty(Ds, "__esModule", { value: !0 }), Ds.uuidv4 = s;
  function i(t) {
    return t.reduce((r, n) => r + n.toString(16).padStart(2, "0"), "");
  }
  function s() {
    if ("crypto" in globalThis && "randomUUID" in globalThis.crypto)
      return globalThis.crypto.randomUUID();
    const t = new Uint8Array(16);
    return "crypto" in globalThis && "getRandomValues" in globalThis.crypto ? globalThis.crypto.getRandomValues(t) : Bu.webcrypto.getRandomValues(t), t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, [
      i(t.subarray(0, 4)),
      i(t.subarray(4, 6)),
      i(t.subarray(6, 8)),
      i(t.subarray(8, 10)),
      i(t.subarray(10, 16))
    ].join("-");
  }
  return Ds;
}
var Sr = {}, Ia;
function zo() {
  var n, u, a, o, l, jn, $o, Ho, p, Bn, Ko;
  if (Ia) return Sr;
  Ia = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.ChannelProxy = void 0;
  const i = Ce(), s = Be(), t = er();
  let r = (l = class {
    constructor(h, f) {
      v(this, p);
      v(this, n);
      v(this, u, (0, t.uuidv4)());
      v(this, a);
      S(this, n, h), S(this, a, f);
    }
    /**
     * Creates a channel proxy in the given realm, initialises listener and
     * returns a handle to `sendMessage` delegate.
     */
    async init(h, f) {
      var g, N;
      const x = await T(g = l, o, $o).call(g, h), C = await T(N = l, o, Ho).call(N, h, x);
      return T(this, p, Bn).call(this, h, x, f), C;
    }
    /** Gets a ChannelProxy from window and returns its handle. */
    async startListenerFromWindow(h, f) {
      var x;
      try {
        const C = await T(this, p, Ko).call(this, h);
        T(this, p, Bn).call(this, h, C, f);
      } catch (C) {
        (x = e(this, a)) == null || x.call(this, s.LogType.debugError, C);
      }
    }
    /**
     * String to be evaluated to create a ProxyChannel and put it to window.
     * Returns the delegate `sendMessage`. Used to provide an argument for preload
     * script. Does the following:
     * 1. Creates a ChannelProxy.
     * 2. Puts the ChannelProxy to window['${this.#id}'] or resolves the promise
     *    by calling delegate stored in window['${this.#id}'].
     *    This is needed because `#getHandleFromWindow` can be called before or
     *    after this method.
     * 3. Returns the delegate `sendMessage` of the created ChannelProxy.
     */
    getEvalInWindowStr() {
      var x;
      const h = String((C, g) => {
        const N = window;
        return N[C] === void 0 ? N[C] = g : (N[C](g), delete N[C]), g.sendMessage;
      }), f = T(x = l, o, jn).call(x);
      return `(${h})('${e(this, u)}',${f})`;
    }
  }, n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakSet(), jn = function() {
    return `(${String(() => {
      const f = [];
      let x = null;
      return {
        /**
         * Gets a promise, which is resolved as soon as a message occurs
         * in the queue.
         */
        async getMessage() {
          return await (f.length > 0 ? Promise.resolve() : new Promise((g) => {
            x = g;
          })), f.shift();
        },
        /**
         * Adds a message to the queue.
         * Resolves the pending promise if needed.
         */
        sendMessage(C) {
          f.push(C), x !== null && (x(), x = null);
        }
      };
    })})()`;
  }, $o = async function(h) {
    const f = await h.cdpClient.sendCommand("Runtime.evaluate", {
      expression: T(this, o, jn).call(this),
      contextId: h.executionContextId,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    if (f.exceptionDetails || f.result.objectId === void 0)
      throw new Error("Cannot create channel");
    return f.result.objectId;
  }, Ho = async function(h, f) {
    return (await h.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((C) => C.sendMessage),
      arguments: [{ objectId: f }],
      executionContextId: h.executionContextId,
      serializationOptions: {
        serialization: "idOnly"
      }
    })).result.objectId;
  }, p = new WeakSet(), Bn = async function(h, f, x) {
    var C, g;
    for (; ; )
      try {
        const N = await h.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String(async (_) => await _.getMessage()),
          arguments: [
            {
              objectId: f
            }
          ],
          awaitPromise: !0,
          executionContextId: h.executionContextId,
          serializationOptions: {
            serialization: "deep",
            maxDepth: ((C = e(this, n).serializationOptions) == null ? void 0 : C.maxObjectDepth) ?? void 0
          }
        });
        if (N.exceptionDetails)
          throw new Error("Runtime.callFunctionOn in ChannelProxy", {
            cause: N.exceptionDetails
          });
        for (const _ of h.associatedBrowsingContexts)
          x.registerEvent({
            type: "event",
            method: i.ChromiumBidi.Script.EventNames.Message,
            params: {
              channel: e(this, n).channel,
              data: h.cdpToBidiValue(
                N,
                e(this, n).ownership ?? "none"
                /* Script.ResultOwnership.None */
              ),
              source: h.source
            }
          }, _.id);
      } catch (N) {
        (g = e(this, a)) == null || g.call(this, s.LogType.debugError, N);
        break;
      }
  }, Ko = async function(h) {
    const f = await h.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((x) => {
        const C = window;
        if (C[x] === void 0)
          return new Promise((N) => C[x] = N);
        const g = C[x];
        return delete C[x], g;
      }),
      arguments: [{ value: e(this, u) }],
      executionContextId: h.executionContextId,
      awaitPromise: !0,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    if (f.exceptionDetails !== void 0 || f.result.objectId === void 0)
      throw new Error(`ChannelHandle not found in window["${e(this, u)}"]`);
    return f.result.objectId;
  }, v(l, o), l);
  return Sr.ChannelProxy = r, Sr;
}
var Ta;
function Jd() {
  var r, n, u, a, o, l, d, y, Wo, p;
  if (Ta) return Er;
  Ta = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.PreloadScript = void 0;
  const i = er(), s = zo();
  let t = (p = class {
    constructor(E, m) {
      v(this, y);
      /** BiDi ID, an automatically generated UUID. */
      v(this, r, (0, i.uuidv4)());
      /** CDP preload scripts. */
      v(this, n, []);
      /** The script itself, in a format expected by the spec i.e. a function. */
      v(this, u);
      /** Targets, in which the preload script is initialized. */
      v(this, a, /* @__PURE__ */ new Set());
      /** Channels to be added as arguments to functionDeclaration. */
      v(this, o);
      /** The script sandbox / world name. */
      v(this, l);
      /** The browsing contexts to execute the preload scripts in, if any. */
      v(this, d);
      var h;
      S(this, o, ((h = E.arguments) == null ? void 0 : h.map((f) => new s.ChannelProxy(f.value, m))) ?? []), S(this, u, E.functionDeclaration), S(this, l, E.sandbox), S(this, d, E.contexts);
    }
    get id() {
      return e(this, r);
    }
    get targetIds() {
      return e(this, a);
    }
    /** Channels of the preload script. */
    get channels() {
      return e(this, o);
    }
    /** Contexts of the preload script, if any */
    get contexts() {
      return e(this, d);
    }
    /**
     * Adds the script to the given CDP targets by calling the
     * `Page.addScriptToEvaluateOnNewDocument` command.
     */
    async initInTargets(E, m) {
      await Promise.all(Array.from(E).map((h) => this.initInTarget(h, m)));
    }
    /**
     * Adds the script to the given CDP target by calling the
     * `Page.addScriptToEvaluateOnNewDocument` command.
     */
    async initInTarget(E, m) {
      const h = await E.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
        source: T(this, y, Wo).call(this),
        worldName: e(this, l),
        runImmediately: m
      });
      e(this, n).push({
        target: E,
        preloadScriptId: h.identifier
      }), e(this, a).add(E.id);
    }
    /**
     * Removes this script from all CDP targets.
     */
    async remove() {
      await Promise.all([
        e(this, n).map(async (E) => {
          const m = E.target, h = E.preloadScriptId;
          return await m.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
            identifier: h
          });
        })
      ]);
    }
    /** Removes the provided cdp target from the list of cdp preload scripts. */
    dispose(E) {
      S(this, n, e(this, n).filter((m) => {
        var h;
        return ((h = m.target) == null ? void 0 : h.id) !== E;
      })), e(this, a).delete(E);
    }
  }, r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakSet(), /**
   * String to be evaluated. Wraps user-provided function so that the following
   * steps are run:
   * 1. Create channels.
   * 2. Store the created channels in window.
   * 3. Call the user-provided function with channels as arguments.
   */
  Wo = function() {
    const E = `[${this.channels.map((m) => m.getEvalInWindowStr()).join(", ")}]`;
    return `(()=>{(${e(this, u)})(...${E})})()`;
  }, p);
  return Er.PreloadScript = t, Er;
}
var Na;
function Yd() {
  var r, n, u, a, o, l, Vo, Bs, c;
  if (Na) return xr;
  Na = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.ScriptProcessor = void 0;
  const i = Ce(), s = Jd();
  let t = (c = class {
    constructor(w, E, m, h, f) {
      v(this, l);
      v(this, r);
      v(this, n);
      v(this, u);
      v(this, a);
      v(this, o);
      S(this, n, E), S(this, u, m), S(this, a, h), S(this, o, f), S(this, r, w), e(this, r).addSubscribeHook(i.ChromiumBidi.Script.EventNames.RealmCreated, T(this, l, Vo).bind(this));
    }
    async addPreloadScript(w) {
      const E = e(this, n).verifyTopLevelContextsList(w.contexts), m = new s.PreloadScript(w, e(this, o));
      e(this, a).add(m);
      const h = E.size === 0 ? new Set(e(this, n).getTopLevelContexts().map((f) => f.cdpTarget)) : new Set([...E.values()].map((f) => f.cdpTarget));
      return await m.initInTargets(h, !1), {
        script: m.id
      };
    }
    async removePreloadScript(w) {
      const { script: E } = w, m = e(this, a).find({ id: E });
      if (m.length === 0)
        throw new i.NoSuchScriptException(`No preload script with id '${E}'`);
      return await Promise.all(m.map((h) => h.remove())), e(this, a).remove({ id: E }), {};
    }
    async callFunction(w) {
      return await (await T(this, l, Bs).call(this, w.target)).callFunction(w.functionDeclaration, w.awaitPromise, w.this, w.arguments, w.resultOwnership, w.serializationOptions, w.userActivation);
    }
    async evaluate(w) {
      return await (await T(this, l, Bs).call(this, w.target)).evaluate(w.expression, w.awaitPromise, w.resultOwnership, w.serializationOptions, w.userActivation);
    }
    async disown(w) {
      const E = await T(this, l, Bs).call(this, w.target);
      return await Promise.all(w.handles.map(async (m) => await E.disown(m))), {};
    }
    getRealms(w) {
      return w.context !== void 0 && e(this, n).getContext(w.context), { realms: e(this, u).findRealms({
        browsingContextId: w.context,
        type: w.type
      }).map((m) => m.realmInfo) };
    }
  }, r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakSet(), Vo = function(w) {
    const E = e(this, n).getContext(w), m = [
      E,
      ...e(this, n).getContext(w).allChildren
    ], h = /* @__PURE__ */ new Set();
    for (const f of m) {
      const x = e(this, u).findRealms({
        browsingContextId: f.id
      });
      for (const C of x)
        h.add(C);
    }
    for (const f of h)
      e(this, r).registerEvent({
        type: "event",
        method: i.ChromiumBidi.Script.EventNames.RealmCreated,
        params: f.realmInfo
      }, E.id);
    return Promise.resolve();
  }, Bs = async function(w) {
    return "context" in w ? await e(this, n).getContext(w.context).getOrCreateSandbox(w.sandbox) : e(this, u).getRealm({
      realmId: w.realm
    });
  }, c);
  return xr.ScriptProcessor = t, xr;
}
var Pr = {}, Ra;
function Qd() {
  var t, r, n, u, a, Go, Xo, d;
  if (Ra) return Pr;
  Ra = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.SessionProcessor = void 0;
  const i = Ce();
  let s = (d = class {
    constructor(c, p, w) {
      v(this, a);
      v(this, t);
      v(this, r);
      v(this, n);
      v(this, u, !1);
      S(this, t, c), S(this, r, p), S(this, n, w);
    }
    status() {
      return { ready: !1, message: "already connected" };
    }
    async new(c) {
      if (e(this, u))
        throw new Error("Session has been already created.");
      S(this, u, !0);
      const p = T(this, a, Go).call(this, c.capabilities);
      await e(this, n).call(this, p);
      const w = await e(this, r).sendCommand("Browser.getVersion");
      return {
        sessionId: "unknown",
        capabilities: {
          ...p,
          acceptInsecureCerts: p.acceptInsecureCerts ?? !1,
          browserName: w.product,
          browserVersion: w.revision,
          platformName: "",
          setWindowRect: !1,
          webSocketUrl: "",
          userAgent: w.userAgent
        }
      };
    }
    async subscribe(c, p = {}) {
      return {
        subscription: await e(this, t).subscribe(c.events, c.contexts ?? [], p)
      };
    }
    async unsubscribe(c, p = {}) {
      return await e(this, t).unsubscribe(c.events, c.contexts ?? [], p), {};
    }
  }, t = new WeakMap(), r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakSet(), Go = function(c) {
    const p = [];
    for (const E of c.firstMatch ?? [{}]) {
      const m = {
        ...c.alwaysMatch
      };
      for (const h of Object.keys(E)) {
        if (m[h] !== void 0)
          throw new i.InvalidArgumentException(`Capability ${h} in firstMatch is already defined in alwaysMatch`);
        m[h] = E[h];
      }
      p.push(m);
    }
    const w = p.find((E) => E.browserName === "chrome") ?? p[0] ?? {};
    return w.unhandledPromptBehavior = T(this, a, Xo).call(this, w.unhandledPromptBehavior), w;
  }, Xo = function(c) {
    if (c !== void 0) {
      if (typeof c == "object")
        return c;
      if (typeof c != "string")
        throw new i.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof c}`);
      switch (c) {
        case "accept":
        case "accept and notify":
          return {
            default: "accept"
            /* Session.UserPromptHandlerType.Accept */
          };
        case "dismiss":
        case "dismiss and notify":
          return {
            default: "dismiss"
            /* Session.UserPromptHandlerType.Dismiss */
          };
        case "ignore":
          return {
            default: "ignore"
            /* Session.UserPromptHandlerType.Ignore */
          };
        default:
          throw new i.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${c}`);
      }
    }
  }, d);
  return Pr.SessionProcessor = s, Pr;
}
var _r = {}, Da;
function Zd() {
  var a, o, l, d, qs, Yr, Jo, Yo, As, qn, h;
  if (Da) return _r;
  Da = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.StorageProcessor = void 0;
  const i = Ce(), s = Pt(), t = Be(), r = Uo(), n = vn();
  let u = (h = class {
    constructor(x, C, g) {
      v(this, d);
      v(this, a);
      v(this, o);
      v(this, l);
      S(this, o, C), S(this, a, x), S(this, l, g);
    }
    async deleteCookies(x) {
      const C = T(this, d, As).call(this, x.partition);
      let g;
      try {
        g = await e(this, a).sendCommand("Storage.getCookies", {
          browserContextId: T(this, d, Yr).call(this, C)
        });
      } catch (_) {
        throw T(this, d, qs).call(this, _) ? new i.NoSuchUserContextException(_.message) : _;
      }
      const N = g.cookies.filter(
        // CDP's partition key is the source origin. If the request specifies the
        // `sourceOrigin` partition key, only cookies with the requested source origin
        // are returned.
        (_) => {
          var k;
          return C.sourceOrigin === void 0 || ((k = _.partitionKey) == null ? void 0 : k.topLevelSite) === C.sourceOrigin;
        }
      ).filter((_) => {
        const k = (0, n.cdpToBiDiCookie)(_);
        return T(this, d, qn).call(this, k, x.filter);
      }).map((_) => ({
        ..._,
        // Set expiry to pass date to delete the cookie.
        expires: 1
      }));
      return await e(this, a).sendCommand("Storage.setCookies", {
        cookies: N,
        browserContextId: T(this, d, Yr).call(this, C)
      }), {
        partitionKey: C
      };
    }
    async getCookies(x) {
      const C = T(this, d, As).call(this, x.partition);
      let g;
      try {
        g = await e(this, a).sendCommand("Storage.getCookies", {
          browserContextId: T(this, d, Yr).call(this, C)
        });
      } catch (_) {
        throw T(this, d, qs).call(this, _) ? new i.NoSuchUserContextException(_.message) : _;
      }
      return {
        cookies: g.cookies.filter(
          // CDP's partition key is the source origin. If the request specifies the
          // `sourceOrigin` partition key, only cookies with the requested source origin
          // are returned.
          (_) => {
            var k;
            return C.sourceOrigin === void 0 || ((k = _.partitionKey) == null ? void 0 : k.topLevelSite) === C.sourceOrigin;
          }
        ).map((_) => (0, n.cdpToBiDiCookie)(_)).filter((_) => T(this, d, qn).call(this, _, x.filter)),
        partitionKey: C
      };
    }
    async setCookie(x) {
      var N;
      const C = T(this, d, As).call(this, x.partition), g = (0, n.bidiToCdpCookie)(x, C);
      try {
        await e(this, a).sendCommand("Storage.setCookies", {
          cookies: [g],
          browserContextId: T(this, d, Yr).call(this, C)
        });
      } catch (_) {
        throw T(this, d, qs).call(this, _) ? new i.NoSuchUserContextException(_.message) : ((N = e(this, l)) == null || N.call(this, t.LogType.debugError, _), new i.UnableToSetCookieException(_.toString()));
      }
      return {
        partitionKey: C
      };
    }
  }, a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakSet(), qs = function(x) {
    var C;
    return (C = x.message) == null ? void 0 : C.startsWith("Failed to find browser context for id");
  }, Yr = function(x) {
    return x.userContext === "default" ? void 0 : x.userContext;
  }, Jo = function(x) {
    const C = x.context;
    return {
      userContext: e(this, o).getContext(C).userContext
    };
  }, Yo = function(x) {
    var _;
    const C = /* @__PURE__ */ new Map();
    let g = x.sourceOrigin;
    if (g !== void 0) {
      const k = r.NetworkProcessor.parseUrlString(g);
      k.origin === "null" ? g = k.origin : g = `${k.protocol}//${k.hostname}`;
    }
    for (const [k, b] of Object.entries(x))
      k !== void 0 && b !== void 0 && !["type", "sourceOrigin", "userContext"].includes(k) && C.set(k, b);
    return C.size > 0 && ((_ = e(this, l)) == null || _.call(this, t.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(C))}`)), {
      userContext: x.userContext ?? "default",
      ...g === void 0 ? {} : { sourceOrigin: g }
    };
  }, As = function(x) {
    return x === void 0 ? { userContext: "default" } : x.type === "context" ? T(this, d, Jo).call(this, x) : ((0, s.assert)(x.type === "storageKey", "Unknown partition type"), T(this, d, Yo).call(this, x));
  }, qn = function(x, C) {
    return C === void 0 ? !0 : (C.domain === void 0 || C.domain === x.domain) && (C.name === void 0 || C.name === x.name) && // `value` contains fields `type` and `value`.
    (C.value === void 0 || (0, n.deserializeByteValue)(C.value) === (0, n.deserializeByteValue)(x.value)) && (C.path === void 0 || C.path === x.path) && (C.size === void 0 || C.size === x.size) && (C.httpOnly === void 0 || C.httpOnly === x.httpOnly) && (C.secure === void 0 || C.secure === x.secure) && (C.sameSite === void 0 || C.sameSite === x.sameSite) && (C.expiry === void 0 || C.expiry === x.expiry);
  }, h);
  return _r.StorageProcessor = u, _r;
}
var kr = {}, Ma;
function Si() {
  var s, t, r;
  if (Ma) return kr;
  Ma = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.OutgoingMessage = void 0;
  let i = (r = class {
    constructor(u, a) {
      v(this, s);
      v(this, t);
      S(this, s, u), S(this, t, a);
    }
    static createFromPromise(u, a) {
      return u.then((o) => o.kind === "success" ? {
        kind: "success",
        value: new r(o.value, a)
      } : o);
    }
    static createResolved(u, a) {
      return Promise.resolve({
        kind: "success",
        value: new r(u, a)
      });
    }
    get message() {
      return e(this, s);
    }
    get channel() {
      return e(this, t);
    }
  }, s = new WeakMap(), t = new WeakMap(), r);
  return kr.OutgoingMessage = i, kr;
}
var Oa;
function el() {
  var m, h, f, x, C, g, N, _, k, b, O, P, R, Qo, Ls, H;
  if (Oa) return cr;
  Oa = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.CommandProcessor = void 0;
  const i = Ce(), s = Zt(), t = Be(), r = jd(), n = Bd(), u = qd(), a = Ad(), o = Vd(), l = Uo(), d = Xd(), y = Yd(), c = Qd(), p = Zd(), w = Si();
  let E = (H = class extends s.EventEmitter {
    constructor(j, F, B, L, $, W, Z, U, A = new r.BidiNoOpParser(), J, se) {
      super();
      v(this, R);
      // keep-sorted start
      v(this, m);
      v(this, h);
      v(this, f);
      v(this, x);
      v(this, C);
      v(this, g);
      v(this, N);
      v(this, _);
      v(this, k);
      v(this, b);
      // keep-sorted end
      v(this, O);
      v(this, P);
      S(this, O, A), S(this, P, se), S(this, m, U), S(this, h, new n.BrowserProcessor(F, L)), S(this, f, new a.BrowsingContextProcessor(F, L, B)), S(this, x, new u.CdpProcessor(L, $, j, F)), S(this, C, new o.InputProcessor(L)), S(this, g, new l.NetworkProcessor(L, Z)), S(this, N, new d.PermissionsProcessor(F)), S(this, _, new y.ScriptProcessor(B, L, $, W, se)), S(this, k, new c.SessionProcessor(B, F, J)), S(this, b, new p.StorageProcessor(F, L, se));
    }
    async processCommand(j) {
      var F;
      try {
        const B = await T(this, R, Qo).call(this, j), L = {
          type: "success",
          id: j.id,
          result: B
        };
        this.emit("response", {
          message: w.OutgoingMessage.createResolved(L, j.channel),
          event: j.method
        });
      } catch (B) {
        if (B instanceof i.Exception)
          this.emit("response", {
            message: w.OutgoingMessage.createResolved(B.toErrorResponse(j.id), j.channel),
            event: j.method
          });
        else {
          const L = B;
          (F = e(this, P)) == null || F.call(this, t.LogType.bidi, L), this.emit("response", {
            message: w.OutgoingMessage.createResolved(new i.UnknownErrorException(L.message, L.stack).toErrorResponse(j.id), j.channel),
            event: j.method
          });
        }
      }
    }
  }, m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakMap(), k = new WeakMap(), b = new WeakMap(), O = new WeakMap(), P = new WeakMap(), R = new WeakSet(), Qo = async function(j) {
    switch (j.method) {
      // Bluetooth module
      // keep-sorted start block=yes
      case "bluetooth.handleRequestDevicePrompt":
        return await e(this, m).handleRequestDevicePrompt(e(this, O).parseHandleRequestDevicePromptParams(j.params));
      case "bluetooth.simulateAdapter":
        return await e(this, m).simulateAdapter(e(this, O).parseSimulateAdapterParameters(j.params));
      case "bluetooth.simulateAdvertisement":
        return await e(this, m).simulateAdvertisement(e(this, O).parseSimulateAdvertisementParameters(j.params));
      case "bluetooth.simulatePreconnectedPeripheral":
        return await e(this, m).simulatePreconnectedPeripheral(e(this, O).parseSimulatePreconnectedPeripheralParameters(j.params));
      // keep-sorted end
      // Browser module
      // keep-sorted start block=yes
      case "browser.close":
        return e(this, h).close();
      case "browser.createUserContext":
        return await e(this, h).createUserContext(j.params);
      case "browser.getClientWindows":
        return await e(this, h).getClientWindows();
      case "browser.getUserContexts":
        return await e(this, h).getUserContexts();
      case "browser.removeUserContext":
        return await e(this, h).removeUserContext(e(this, O).parseRemoveUserContextParams(j.params));
      case "browser.setClientWindowState":
        throw new i.UnknownErrorException(`Method ${j.method} is not implemented.`);
      // keep-sorted end
      // Browsing Context module
      // keep-sorted start block=yes
      case "browsingContext.activate":
        return await e(this, f).activate(e(this, O).parseActivateParams(j.params));
      case "browsingContext.captureScreenshot":
        return await e(this, f).captureScreenshot(e(this, O).parseCaptureScreenshotParams(j.params));
      case "browsingContext.close":
        return await e(this, f).close(e(this, O).parseCloseParams(j.params));
      case "browsingContext.create":
        return await e(this, f).create(e(this, O).parseCreateParams(j.params));
      case "browsingContext.getTree":
        return e(this, f).getTree(e(this, O).parseGetTreeParams(j.params));
      case "browsingContext.handleUserPrompt":
        return await e(this, f).handleUserPrompt(e(this, O).parseHandleUserPromptParams(j.params));
      case "browsingContext.locateNodes":
        return await e(this, f).locateNodes(e(this, O).parseLocateNodesParams(j.params));
      case "browsingContext.navigate":
        return await e(this, f).navigate(e(this, O).parseNavigateParams(j.params));
      case "browsingContext.print":
        return await e(this, f).print(e(this, O).parsePrintParams(j.params));
      case "browsingContext.reload":
        return await e(this, f).reload(e(this, O).parseReloadParams(j.params));
      case "browsingContext.setViewport":
        return await e(this, f).setViewport(e(this, O).parseSetViewportParams(j.params));
      case "browsingContext.traverseHistory":
        return await e(this, f).traverseHistory(e(this, O).parseTraverseHistoryParams(j.params));
      // keep-sorted end
      // CDP module
      // keep-sorted start block=yes
      case "goog:cdp.getSession":
        return e(this, x).getSession(e(this, O).parseGetSessionParams(j.params));
      case "goog:cdp.resolveRealm":
        return e(this, x).resolveRealm(e(this, O).parseResolveRealmParams(j.params));
      case "goog:cdp.sendCommand":
        return await e(this, x).sendCommand(e(this, O).parseSendCommandParams(j.params));
      // keep-sorted end
      // CDP deprecated domain.
      // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2844
      // keep-sorted start block=yes
      case "cdp.getSession":
        return e(this, x).getSession(e(this, O).parseGetSessionParams(j.params));
      case "cdp.resolveRealm":
        return e(this, x).resolveRealm(e(this, O).parseResolveRealmParams(j.params));
      case "cdp.sendCommand":
        return await e(this, x).sendCommand(e(this, O).parseSendCommandParams(j.params));
      // keep-sorted end
      // Input module
      // keep-sorted start block=yes
      case "input.performActions":
        return await e(this, C).performActions(e(this, O).parsePerformActionsParams(j.params));
      case "input.releaseActions":
        return await e(this, C).releaseActions(e(this, O).parseReleaseActionsParams(j.params));
      case "input.setFiles":
        return await e(this, C).setFiles(e(this, O).parseSetFilesParams(j.params));
      // keep-sorted end
      // Network module
      // keep-sorted start block=yes
      case "network.addIntercept":
        return await e(this, g).addIntercept(e(this, O).parseAddInterceptParams(j.params));
      case "network.continueRequest":
        return await e(this, g).continueRequest(e(this, O).parseContinueRequestParams(j.params));
      case "network.continueResponse":
        return await e(this, g).continueResponse(e(this, O).parseContinueResponseParams(j.params));
      case "network.continueWithAuth":
        return await e(this, g).continueWithAuth(e(this, O).parseContinueWithAuthParams(j.params));
      case "network.failRequest":
        return await e(this, g).failRequest(e(this, O).parseFailRequestParams(j.params));
      case "network.provideResponse":
        return await e(this, g).provideResponse(e(this, O).parseProvideResponseParams(j.params));
      case "network.removeIntercept":
        return await e(this, g).removeIntercept(e(this, O).parseRemoveInterceptParams(j.params));
      case "network.setCacheBehavior":
        return await e(this, g).setCacheBehavior(e(this, O).parseSetCacheBehavior(j.params));
      // keep-sorted end
      // Permissions module
      // keep-sorted start block=yes
      case "permissions.setPermission":
        return await e(this, N).setPermissions(e(this, O).parseSetPermissionsParams(j.params));
      // keep-sorted end
      // Script module
      // keep-sorted start block=yes
      case "script.addPreloadScript":
        return await e(this, _).addPreloadScript(e(this, O).parseAddPreloadScriptParams(j.params));
      case "script.callFunction":
        return await e(this, _).callFunction(e(this, O).parseCallFunctionParams(T(this, R, Ls).call(this, j.params)));
      case "script.disown":
        return await e(this, _).disown(e(this, O).parseDisownParams(T(this, R, Ls).call(this, j.params)));
      case "script.evaluate":
        return await e(this, _).evaluate(e(this, O).parseEvaluateParams(T(this, R, Ls).call(this, j.params)));
      case "script.getRealms":
        return e(this, _).getRealms(e(this, O).parseGetRealmsParams(j.params));
      case "script.removePreloadScript":
        return await e(this, _).removePreloadScript(e(this, O).parseRemovePreloadScriptParams(j.params));
      // keep-sorted end
      // Session module
      // keep-sorted start block=yes
      case "session.end":
        throw new i.UnknownErrorException(`Method ${j.method} is not implemented.`);
      case "session.new":
        return await e(this, k).new(j.params);
      case "session.status":
        return e(this, k).status();
      case "session.subscribe":
        return await e(this, k).subscribe(e(this, O).parseSubscribeParams(j.params), j.channel);
      case "session.unsubscribe":
        return await e(this, k).unsubscribe(e(this, O).parseSubscribeParams(j.params), j.channel);
      // keep-sorted end
      // Storage module
      // keep-sorted start block=yes
      case "storage.deleteCookies":
        return await e(this, b).deleteCookies(e(this, O).parseDeleteCookiesParams(j.params));
      case "storage.getCookies":
        return await e(this, b).getCookies(e(this, O).parseGetCookiesParams(j.params));
      case "storage.setCookie":
        return await e(this, b).setCookie(e(this, O).parseSetCookieParams(j.params));
      // keep-sorted end
      // WebExtension module
      // keep-sorted start block=yes
      case "webExtension.install":
        throw new i.UnknownErrorException(`Method ${j.method} is not implemented.`);
      case "webExtension.uninstall":
        throw new i.UnknownErrorException(`Method ${j.method} is not implemented.`);
    }
    throw new i.UnknownCommandException(`Unknown command '${j == null ? void 0 : j.method}'.`);
  }, // Workaround for as zod.union always take the first schema
  // https://github.com/w3c/webdriver-bidi/issues/635
  Ls = function(j) {
    return typeof j == "object" && j && "target" in j && typeof j.target == "object" && j.target && "context" in j.target && delete j.target.realm, j;
  }, H);
  return cr.CommandProcessor = E, cr;
}
var Ir = {}, Fa;
function tl() {
  var s, t, r;
  if (Fa) return Ir;
  Fa = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.BluetoothProcessor = void 0;
  let i = (r = class {
    constructor(u, a) {
      v(this, s);
      v(this, t);
      S(this, s, u), S(this, t, a);
    }
    async simulateAdapter(u) {
      const a = e(this, t).getContext(u.context);
      return await a.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable"), await a.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.enable", {
        state: u.state
      }), {};
    }
    async simulatePreconnectedPeripheral(u) {
      return await e(this, t).getContext(u.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulatePreconnectedPeripheral", {
        address: u.address,
        name: u.name,
        knownServiceUuids: u.knownServiceUuids,
        manufacturerData: u.manufacturerData
      }), {};
    }
    async simulateAdvertisement(u) {
      return await e(this, t).getContext(u.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateAdvertisement", {
        entry: u.scanEntry
      }), {};
    }
    onCdpTargetCreated(u) {
      u.cdpClient.on("DeviceAccess.deviceRequestPrompted", (a) => {
        e(this, s).registerEvent({
          type: "event",
          method: "bluetooth.requestDevicePromptUpdated",
          params: {
            context: u.id,
            prompt: a.id,
            devices: a.devices
          }
        }, u.id);
      });
    }
    async handleRequestDevicePrompt(u) {
      const a = e(this, t).getContext(u.context);
      return u.accept ? await a.cdpTarget.cdpClient.sendCommand("DeviceAccess.selectPrompt", {
        id: u.prompt,
        deviceId: u.device
      }) : await a.cdpTarget.cdpClient.sendCommand("DeviceAccess.cancelPrompt", {
        id: u.prompt
      }), {};
    }
  }, s = new WeakMap(), t = new WeakMap(), r);
  return Ir.BluetoothProcessor = i, Ir;
}
var Tr = {}, Tt = {}, Nr = {}, ja;
function bn() {
  var s, t, r, n, u, a, o;
  if (ja) return Nr;
  ja = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.Deferred = void 0;
  let i = (s = Symbol.toStringTag, o = class {
    constructor() {
      v(this, t, !1);
      v(this, r);
      v(this, n);
      v(this, u);
      v(this, a);
      Y(this, s, "Promise");
      S(this, r, new Promise((d, y) => {
        S(this, u, d), S(this, a, y);
      })), e(this, r).catch((d) => {
      });
    }
    get isFinished() {
      return e(this, t);
    }
    get result() {
      if (!e(this, t))
        throw new Error("Deferred is not finished yet");
      return e(this, n);
    }
    then(d, y) {
      return e(this, r).then(d, y);
    }
    catch(d) {
      return e(this, r).catch(d);
    }
    resolve(d) {
      S(this, n, d), e(this, t) || (S(this, t, !0), e(this, u).call(this, d));
    }
    reject(d) {
      e(this, t) || (S(this, t, !0), e(this, a).call(this, d));
    }
    finally(d) {
      return e(this, r).finally(d);
    }
  }, t = new WeakMap(), r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o);
  return Nr.Deferred = i, Nr;
}
var Ms = {}, Ba;
function Zo() {
  if (Ba) return Ms;
  Ba = 1, Object.defineProperty(Ms, "__esModule", { value: !0 }), Ms.getTimestamp = i;
  function i() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  return Ms;
}
var Os = {}, qa;
function rl() {
  if (qa) return Os;
  qa = 1, Object.defineProperty(Os, "__esModule", { value: !0 }), Os.inchesFromCm = i;
  function i(s) {
    return s / 2.54;
  }
  return Os;
}
var Rr = {}, Dr = {}, Aa;
function nc() {
  var u, a, o, l, d, y, c, p, An, E, ec, Ln, Un, tc, $n, Hn, rc, sc, Kn;
  if (Aa) return Dr;
  Aa = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.Realm = void 0;
  const i = Ce(), s = Be(), t = er(), r = zo(), b = class b {
    constructor(P, R, I, D, H, K, Q) {
      v(this, p);
      v(this, u);
      v(this, a);
      v(this, o);
      v(this, l);
      v(this, d);
      v(this, y);
      v(this, c);
      S(this, u, P), S(this, a, R), S(this, o, I), S(this, l, D), S(this, d, H), S(this, y, K), S(this, c, Q), e(this, c).addRealm(this);
    }
    cdpToBidiValue(P, R) {
      const I = this.serializeForBiDi(P.result.deepSerializedValue, /* @__PURE__ */ new Map());
      if (P.result.objectId) {
        const D = P.result.objectId;
        R === "root" ? (I.handle = D, e(this, c).knownHandlesToRealmMap.set(D, this.realmId)) : T(this, p, Kn).call(this, D).catch((H) => {
          var K;
          return (K = e(this, l)) == null ? void 0 : K.call(this, s.LogType.debugError, H);
        });
      }
      return I;
    }
    /**
     * Relies on the CDP to implement proper BiDi serialization, except:
     * * CDP integer property `backendNodeId` is replaced with `sharedId` of
     * `{documentId}_element_{backendNodeId}`;
     * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
     * using unique-per serialization `internalIdMap`.
     * * CDP type `platformobject` is replaced with `object`.
     * @param deepSerializedValue - CDP value to be converted to BiDi.
     * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
     * `internalId`.
     */
    serializeForBiDi(P, R) {
      if (Object.hasOwn(P, "weakLocalObjectReference")) {
        const D = P.weakLocalObjectReference;
        R.has(D) || R.set(D, (0, t.uuidv4)()), P.internalId = R.get(D), delete P.weakLocalObjectReference;
      }
      if (P.type === "node" && P.value && Object.hasOwn(P.value, "frameId") && delete P.value.frameId, P.type === "platformobject")
        return { type: "object" };
      const I = P.value;
      if (I === void 0)
        return P;
      if (["array", "set", "htmlcollection", "nodelist"].includes(P.type))
        for (const D in I)
          I[D] = this.serializeForBiDi(I[D], R);
      if (["object", "map"].includes(P.type))
        for (const D in I)
          I[D] = [
            this.serializeForBiDi(I[D][0], R),
            this.serializeForBiDi(I[D][1], R)
          ];
      return P;
    }
    get realmId() {
      return e(this, y);
    }
    get executionContextId() {
      return e(this, o);
    }
    get origin() {
      return e(this, d);
    }
    get source() {
      return {
        realm: this.realmId
      };
    }
    get cdpClient() {
      return e(this, u);
    }
    get baseInfo() {
      return {
        realm: this.realmId,
        origin: this.origin
      };
    }
    async evaluate(P, R, I = "none", D = {}, H = !1, K = !1) {
      var j;
      const Q = await this.cdpClient.sendCommand("Runtime.evaluate", {
        contextId: this.executionContextId,
        expression: P,
        awaitPromise: R,
        serializationOptions: T(j = b, E, Hn).call(j, "deep", D),
        userGesture: H,
        includeCommandLineAPI: K
      });
      return Q.exceptionDetails ? await T(this, p, $n).call(this, Q.exceptionDetails, 0, I) : {
        realm: this.realmId,
        result: this.cdpToBidiValue(Q, I),
        type: "success"
      };
    }
    initialize() {
      T(this, p, An).call(this, {
        type: "event",
        method: i.ChromiumBidi.Script.EventNames.RealmCreated,
        params: this.realmInfo
      });
    }
    /**
     * Serializes a given CDP object into BiDi, keeping references in the
     * target's `globalThis`.
     */
    async serializeCdpObject(P, R) {
      var H;
      const I = T(H = b, E, ec).call(H, P), D = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String((K) => K),
        awaitPromise: !1,
        arguments: [I],
        serializationOptions: {
          serialization: "deep"
        },
        executionContextId: this.executionContextId
      });
      return this.cdpToBidiValue(D, R);
    }
    /**
     * Gets the string representation of an object. This is equivalent to
     * calling `toString()` on the object value.
     */
    async stringifyObject(P) {
      const { result: R } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String(
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          (I) => String(I)
        ),
        awaitPromise: !1,
        arguments: [P],
        returnByValue: !0,
        executionContextId: this.executionContextId
      });
      return R.value;
    }
    async callFunction(P, R, I = {
      type: "undefined"
    }, D = [], H = "none", K = {}, Q = !1) {
      var L;
      const j = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${P}
      ), args);
    }`, F = [
        await this.deserializeForCdp(I),
        ...await Promise.all(D.map(async ($) => await this.deserializeForCdp($)))
      ];
      let B;
      try {
        B = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: j,
          awaitPromise: R,
          arguments: F,
          serializationOptions: T(L = b, E, Hn).call(L, "deep", K),
          executionContextId: this.executionContextId,
          userGesture: Q
        });
      } catch ($) {
        throw $.code === -32e3 && [
          "Could not find object with given id",
          "Argument should belong to the same JavaScript world as target object",
          "Invalid remote object id"
        ].includes($.message) ? new i.NoSuchHandleException("Handle was not found.") : $;
      }
      return B.exceptionDetails ? await T(this, p, $n).call(this, B.exceptionDetails, 1, H) : {
        type: "success",
        result: this.cdpToBidiValue(B, H),
        realm: this.realmId
      };
    }
    async deserializeForCdp(P) {
      if ("handle" in P && P.handle)
        return { objectId: P.handle };
      if ("handle" in P || "sharedId" in P)
        throw new i.NoSuchHandleException("Handle was not found.");
      switch (P.type) {
        case "undefined":
          return { unserializableValue: "undefined" };
        case "null":
          return { unserializableValue: "null" };
        case "string":
          return { value: P.value };
        case "number":
          return P.value === "NaN" ? { unserializableValue: "NaN" } : P.value === "-0" ? { unserializableValue: "-0" } : P.value === "Infinity" ? { unserializableValue: "Infinity" } : P.value === "-Infinity" ? { unserializableValue: "-Infinity" } : {
            value: P.value
          };
        case "boolean":
          return { value: !!P.value };
        case "bigint":
          return {
            unserializableValue: `BigInt(${JSON.stringify(P.value)})`
          };
        case "date":
          return {
            unserializableValue: `new Date(Date.parse(${JSON.stringify(P.value)}))`
          };
        case "regexp":
          return {
            unserializableValue: `new RegExp(${JSON.stringify(P.value.pattern)}, ${JSON.stringify(P.value.flags)})`
          };
        case "map": {
          const R = await T(this, p, Ln).call(this, P.value), { result: I } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...D) => {
              const H = /* @__PURE__ */ new Map();
              for (let K = 0; K < D.length; K += 2)
                H.set(D[K], D[K + 1]);
              return H;
            }),
            awaitPromise: !1,
            arguments: R,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: I.objectId };
        }
        case "object": {
          const R = await T(this, p, Ln).call(this, P.value), { result: I } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...D) => {
              const H = {};
              for (let K = 0; K < D.length; K += 2) {
                const Q = D[K];
                H[Q] = D[K + 1];
              }
              return H;
            }),
            awaitPromise: !1,
            arguments: R,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: I.objectId };
        }
        case "array": {
          const R = await T(this, p, Un).call(this, P.value), { result: I } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...D) => D),
            awaitPromise: !1,
            arguments: R,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: I.objectId };
        }
        case "set": {
          const R = await T(this, p, Un).call(this, P.value), { result: I } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...D) => new Set(D)),
            awaitPromise: !1,
            arguments: R,
            returnByValue: !1,
            executionContextId: this.executionContextId
          });
          return { objectId: I.objectId };
        }
        case "channel":
          return { objectId: await new r.ChannelProxy(P.value, e(this, l)).init(this, e(this, a)) };
      }
      throw new Error(`Value ${JSON.stringify(P)} is not deserializable.`);
    }
    async disown(P) {
      e(this, c).knownHandlesToRealmMap.get(P) === this.realmId && (await T(this, p, Kn).call(this, P), e(this, c).knownHandlesToRealmMap.delete(P));
    }
    dispose() {
      T(this, p, An).call(this, {
        type: "event",
        method: i.ChromiumBidi.Script.EventNames.RealmDestroyed,
        params: {
          realm: this.realmId
        }
      });
    }
  };
  u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakSet(), An = function(P) {
    if (this.associatedBrowsingContexts.length === 0)
      e(this, a).registerGlobalEvent(P);
    else
      for (const R of this.associatedBrowsingContexts)
        e(this, a).registerEvent(P, R.id);
  }, E = new WeakSet(), ec = function(P) {
    return P.objectId !== void 0 ? { objectId: P.objectId } : P.unserializableValue !== void 0 ? { unserializableValue: P.unserializableValue } : { value: P.value };
  }, Ln = async function(P) {
    return (await Promise.all(P.map(async ([I, D]) => {
      let H;
      typeof I == "string" ? H = { value: I } : H = await this.deserializeForCdp(I);
      const K = await this.deserializeForCdp(D);
      return [H, K];
    }))).flat();
  }, Un = async function(P) {
    return await Promise.all(P.map((R) => this.deserializeForCdp(R)));
  }, tc = async function(P, R, I) {
    var K;
    const D = ((K = P.stackTrace) == null ? void 0 : K.callFrames.map((Q) => ({
      url: Q.url,
      functionName: Q.functionName,
      lineNumber: Q.lineNumber - R,
      columnNumber: Q.columnNumber
    }))) ?? [], H = P.exception;
    return {
      exception: await this.serializeCdpObject(H, I),
      columnNumber: P.columnNumber,
      lineNumber: P.lineNumber - R,
      stackTrace: {
        callFrames: D
      },
      text: await this.stringifyObject(H) || P.text
    };
  }, $n = async function(P, R, I) {
    return {
      exceptionDetails: await T(this, p, tc).call(this, P, R, I),
      realm: this.realmId,
      type: "exception"
    };
  }, Hn = function(P, R) {
    var I, D;
    return {
      serialization: P,
      additionalParameters: T(I = b, E, rc).call(I, R),
      ...T(D = b, E, sc).call(D, R)
    };
  }, rc = function(P) {
    const R = {};
    return P.maxDomDepth !== void 0 && (R.maxNodeDepth = P.maxDomDepth === null ? 1e3 : P.maxDomDepth), P.includeShadowTree !== void 0 && (R.includeShadowTree = P.includeShadowTree), R;
  }, sc = function(P) {
    return P.maxObjectDepth === void 0 || P.maxObjectDepth === null ? {} : { maxDepth: P.maxObjectDepth };
  }, Kn = async function(P) {
    try {
      await this.cdpClient.sendCommand("Runtime.releaseObject", {
        objectId: P
      });
    } catch (R) {
      if (!(R.code === -32e3 && R.message === "Invalid remote object id"))
        throw R;
    }
  }, v(b, E);
  let n = b;
  return Dr.Realm = n, Dr;
}
var Mr = {}, La;
function sl() {
  if (La) return Mr;
  La = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.getSharedId = s, Mr.parseSharedId = r;
  const i = "_element_";
  function s(n, u, a) {
    return `f.${n}.d.${u}.e.${a}`;
  }
  function t(n) {
    const u = n.match(new RegExp(`(.*)${i}(.*)`));
    if (!u)
      return null;
    const a = u[1], o = u[2];
    if (a === void 0 || o === void 0)
      return null;
    const l = parseInt(o ?? "");
    return isNaN(l) ? null : {
      documentId: a,
      backendNodeId: l
    };
  }
  function r(n) {
    const u = t(n);
    if (u !== null)
      return { ...u, frameId: void 0 };
    const a = n.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
    if (!a)
      return null;
    const o = a[1], l = a[2], d = a[3];
    if (o === void 0 || l === void 0 || d === void 0)
      return null;
    const y = parseInt(d ?? "");
    return isNaN(y) ? null : {
      frameId: o,
      documentId: l,
      backendNodeId: y
    };
  }
  return Mr;
}
var Ua;
function ac() {
  var n, u, a, ic;
  if (Ua) return Rr;
  Ua = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.WindowRealm = void 0;
  const i = Ce(), s = nc(), t = sl();
  class r extends s.Realm {
    constructor(y, c, p, w, E, m, h, f, x, C) {
      super(p, w, E, m, h, f, x);
      v(this, a);
      v(this, n);
      v(this, u);
      Y(this, "sandbox");
      S(this, n, y), S(this, u, c), this.sandbox = C, this.initialize();
    }
    get browsingContext() {
      return e(this, u).getContext(e(this, n));
    }
    get associatedBrowsingContexts() {
      return [this.browsingContext];
    }
    get realmType() {
      return "window";
    }
    get realmInfo() {
      return {
        ...this.baseInfo,
        type: this.realmType,
        context: e(this, n),
        sandbox: this.sandbox
      };
    }
    get source() {
      return {
        realm: this.realmId,
        context: this.browsingContext.id
      };
    }
    serializeForBiDi(y, c) {
      const p = y.value;
      if (y.type === "node" && p !== void 0) {
        if (Object.hasOwn(p, "backendNodeId")) {
          let w = this.browsingContext.navigableId ?? "UNKNOWN";
          Object.hasOwn(p, "loaderId") && (w = p.loaderId, delete p.loaderId), y.sharedId = (0, t.getSharedId)(T(this, a, ic).call(this, w), w, p.backendNodeId), delete p.backendNodeId;
        }
        if (Object.hasOwn(p, "children"))
          for (const w in p.children)
            p.children[w] = this.serializeForBiDi(p.children[w], c);
        Object.hasOwn(p, "shadowRoot") && p.shadowRoot !== null && (p.shadowRoot = this.serializeForBiDi(p.shadowRoot, c)), p.namespaceURI === "" && (p.namespaceURI = null);
      }
      return super.serializeForBiDi(y, c);
    }
    async deserializeForCdp(y) {
      if ("sharedId" in y && y.sharedId) {
        const c = (0, t.parseSharedId)(y.sharedId);
        if (c === null)
          throw new i.NoSuchNodeException(`SharedId "${y.sharedId}" was not found.`);
        const { documentId: p, backendNodeId: w } = c;
        if (this.browsingContext.navigableId !== p)
          throw new i.NoSuchNodeException(`SharedId "${y.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
        try {
          const { object: E } = await this.cdpClient.sendCommand("DOM.resolveNode", {
            backendNodeId: w,
            executionContextId: this.executionContextId
          });
          return { objectId: E.objectId };
        } catch (E) {
          throw E.code === -32e3 && E.message === "No node with given id found" ? new i.NoSuchNodeException(`SharedId "${y.sharedId}" was not found.`) : new i.UnknownErrorException(E.message, E.stack);
        }
      }
      return await super.deserializeForCdp(y);
    }
    async evaluate(y, c, p, w, E, m) {
      return await e(this, u).getContext(e(this, n)).targetUnblockedOrThrow(), await super.evaluate(y, c, p, w, E, m);
    }
    async callFunction(y, c, p, w, E, m, h) {
      return await e(this, u).getContext(e(this, n)).targetUnblockedOrThrow(), await super.callFunction(y, c, p, w, E, m, h);
    }
  }
  return n = new WeakMap(), u = new WeakMap(), a = new WeakSet(), ic = function(y) {
    const c = e(this, u).getAllContexts().find((p) => p.navigableId === y);
    return (c == null ? void 0 : c.id) ?? "UNKNOWN";
  }, Rr.WindowRealm = r, Rr;
}
var Ve = {}, Fs = {}, $a;
function nl() {
  if ($a) return Fs;
  $a = 1, Object.defineProperty(Fs, "__esModule", { value: !0 }), Fs.urlMatchesAboutBlank = i;
  function i(s) {
    if (s === "")
      return !0;
    try {
      const t = new URL(s);
      return t.protocol.replace(/:$/, "").toLowerCase() === "about" && t.pathname.toLowerCase() === "blank" && t.username === "" && t.password === "" && t.host === "";
    } catch (t) {
      if (t instanceof TypeError)
        return !1;
      throw t;
    }
  }
  return Fs;
}
var Ha;
function il() {
  var d, y, c, p, w, E, m, Us, f, x, C, g, N, _, k, b, oc, P;
  if (Ha) return Ve;
  Ha = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.NavigationTracker = Ve.NavigationState = Ve.NavigationResult = void 0;
  const i = Ce(), s = bn(), t = Be(), r = Zo(), n = nl(), u = er();
  class a {
    constructor(I, D) {
      Y(this, "eventName");
      Y(this, "message");
      this.eventName = I, this.message = D;
    }
  }
  Ve.NavigationResult = a;
  class o {
    constructor(I, D, H, K) {
      v(this, m);
      Y(this, "navigationId", (0, u.uuidv4)());
      v(this, d);
      v(this, y, !1);
      v(this, c, new s.Deferred());
      Y(this, "url");
      Y(this, "loaderId");
      v(this, p);
      v(this, w);
      v(this, E, !1);
      Y(this, "isFragmentNavigation");
      S(this, d, D), this.url = I, S(this, p, H), S(this, w, K);
    }
    get finished() {
      return e(this, c);
    }
    navigationInfo() {
      return {
        context: e(this, d),
        navigation: this.navigationId,
        timestamp: (0, r.getTimestamp)(),
        url: this.url
      };
    }
    start() {
      !e(this, p) && !e(this, y) && e(this, w).registerEvent({
        type: "event",
        method: i.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
        params: this.navigationInfo()
      }, e(this, d)), S(this, y, !0);
    }
    frameNavigated() {
      S(this, E, !0);
    }
    fragmentNavigated() {
      S(this, E, !0), T(this, m, Us).call(this, new a(
        "browsingContext.fragmentNavigated"
        /* NavigationEventName.FragmentNavigated */
      ));
    }
    load() {
      T(this, m, Us).call(this, new a(
        "browsingContext.load"
        /* NavigationEventName.Load */
      ));
    }
    fail(I) {
      T(this, m, Us).call(this, new a(e(this, E) ? "browsingContext.navigationAborted" : "browsingContext.navigationFailed", I));
    }
  }
  d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakMap(), E = new WeakMap(), m = new WeakSet(), Us = function(I) {
    S(this, y, !0), !e(this, p) && !e(this, c).isFinished && I.eventName !== "browsingContext.load" && e(this, w).registerEvent({
      type: "event",
      method: I.eventName,
      params: this.navigationInfo()
    }, e(this, d)), e(this, c).resolve(I);
  }, Ve.NavigationState = o;
  let l = (P = class {
    constructor(I, D, H, K) {
      v(this, b);
      v(this, f);
      v(this, x);
      v(this, C, /* @__PURE__ */ new Map());
      v(this, g);
      v(this, N);
      // When a new navigation is started via `BrowsingContext.navigate` with `wait` set to
      // `None`, the command result should have `navigation` value, but mapper does not have
      // it yet. This value will be set to `navigationId` after next .
      v(this, _);
      // Flags if the initial navigation to `about:blank` is in progress.
      v(this, k, !0);
      S(this, g, D), S(this, f, H), S(this, x, K), S(this, k, !0), S(this, N, new o(I, D, (0, n.urlMatchesAboutBlank)(I), e(this, f)));
    }
    /**
     * Returns current started ongoing navigation. It can be either a started pending
     * navigation, or one is already navigated.
     */
    get currentNavigationId() {
      var I;
      return ((I = e(this, _)) == null ? void 0 : I.loaderId) !== void 0 ? e(this, _).navigationId : e(this, N).navigationId;
    }
    /**
     * Flags if the current navigation relates to the initial to `about:blank` navigation.
     */
    get isInitialNavigation() {
      return e(this, k);
    }
    /**
     * Url of the last navigated navigation.
     */
    get url() {
      return e(this, N).url;
    }
    /**
     * Creates a pending navigation e.g. when navigation command is called. Required to
     * provide navigation id before the actual navigation is started. It will be used when
     * navigation started. Can be aborted, failed, fragment navigated, or became a current
     * navigation.
     */
    createPendingNavigation(I, D = !1) {
      var K, Q;
      (K = e(this, x)) == null || K.call(this, t.LogType.debug, "createCommandNavigation"), S(this, k, D && e(this, k) && (0, n.urlMatchesAboutBlank)(I)), (Q = e(this, _)) == null || Q.fail("navigation canceled by concurrent navigation");
      const H = new o(I, e(this, g), e(this, k), e(this, f));
      return S(this, _, H), H;
    }
    dispose() {
      var I;
      (I = e(this, _)) == null || I.fail("navigation canceled by context disposal"), e(this, N).fail("navigation canceled by context disposal");
    }
    // Update the current url.
    onTargetInfoChanged(I) {
      var D;
      (D = e(this, x)) == null || D.call(this, t.LogType.debug, `onTargetInfoChanged ${I}`), e(this, N).url = I;
    }
    /**
     * @param {string} unreachableUrl indicated the navigation is actually failed.
     */
    frameNavigated(I, D, H) {
      var Q;
      if ((Q = e(this, x)) == null || Q.call(this, t.LogType.debug, `frameNavigated ${I}`), H !== void 0 && !e(this, C).has(D)) {
        const j = e(this, _) ?? this.createPendingNavigation(H, !0);
        j.url = H, j.start(), j.fail("the requested url is unreachable");
        return;
      }
      const K = T(this, b, oc).call(this, I, D);
      K.frameNavigated(), K !== e(this, N) && e(this, N).fail("navigation canceled by concurrent navigation"), K.url = I, K.loaderId = D, e(this, C).set(D, K), K.start(), S(this, N, K), e(this, _) === K && S(this, _, void 0);
    }
    navigatedWithinDocument(I, D) {
      var K;
      if ((K = e(this, x)) == null || K.call(this, t.LogType.debug, `navigatedWithinDocument ${I}, ${D}`), e(this, N).url = I, D !== "fragment")
        return;
      const H = e(this, _) !== void 0 && e(this, _).loaderId === void 0 ? e(this, _) : new o(I, e(this, g), !1, e(this, f));
      H.fragmentNavigated(), H === e(this, _) && S(this, _, void 0);
    }
    frameRequestedNavigation(I) {
      var D;
      (D = e(this, x)) == null || D.call(this, t.LogType.debug, `Page.frameRequestedNavigation ${I}`), this.createPendingNavigation(I, !0);
    }
    /**
     * Required to mark navigation as fully complete.
     * TODO: navigation should be complete when it became the current one on
     * `Page.frameNavigated` or on navigating command finished with a new loader Id.
     */
    loadPageEvent(I) {
      var D, H;
      (D = e(this, x)) == null || D.call(this, t.LogType.debug, "loadPageEvent"), S(this, k, !1), (H = e(this, C).get(I)) == null || H.load();
    }
    /**
     * Fail navigation due to navigation command failed.
     */
    failNavigation(I, D) {
      var H;
      (H = e(this, x)) == null || H.call(this, t.LogType.debug, "failCommandNavigation"), I.fail(D);
    }
    /**
     * Updates the navigation's `loaderId` and sets it as current one, if it is a
     * cross-document navigation.
     */
    navigationCommandFinished(I, D) {
      var H;
      (H = e(this, x)) == null || H.call(this, t.LogType.debug, `finishCommandNavigation ${I.navigationId}, ${D}`), D !== void 0 && (I.loaderId = D, e(this, C).set(D, I)), I.isFragmentNavigation = D === void 0, !(D === void 0 || e(this, N) === I) && (e(this, N).fail("navigation canceled by concurrent navigation"), I.start(), S(this, N, I), e(this, _) === I && S(this, _, void 0));
    }
    /**
     * Emulated event, tight to `Network.requestWillBeSent`.
     */
    frameStartedNavigating(I, D) {
      var K;
      if ((K = e(this, x)) == null || K.call(this, t.LogType.debug, `frameStartedNavigating ${I}, ${D}`), e(this, C).has(D))
        return;
      const H = e(this, _) ?? this.createPendingNavigation(I, !0);
      H.url = I, H.start(), H.loaderId = D, e(this, C).set(D, H);
    }
    /**
     * In case of `beforeunload` handler, the pending navigation should be marked as started
     * for consistency, as the `browsingContext.navigationStarted` should be emitted before
     * user prompt.
     */
    beforeunload() {
      var I, D;
      if ((I = e(this, x)) == null || I.call(this, t.LogType.debug, "beforeunload"), e(this, _) === void 0) {
        (D = e(this, x)) == null || D.call(this, t.LogType.debugError, "Unexpectedly no pending navigation on beforeunload");
        return;
      }
      e(this, _).start();
    }
    /**
     * If there is a navigation with the loaderId equals to the network request id, it means
     * that the navigation failed.
     */
    networkLoadingFailed(I, D) {
      var H;
      (H = e(this, C).get(I)) == null || H.fail(D);
    }
  }, f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakMap(), k = new WeakMap(), b = new WeakSet(), oc = function(I, D) {
    var H;
    return e(this, C).has(D) ? e(this, C).get(D) : e(this, _) !== void 0 && ((H = e(this, _)) == null ? void 0 : H.loaderId) === void 0 ? e(this, _) : this.createPendingNavigation(I, !0);
  }, P);
  return Ve.NavigationTracker = l, Ve;
}
var Ka;
function fc() {
  var h, f, x, C, g, N, _, k, b, O, P, R, I, D, H, K, Q, j, $s, zn, L, cc, uc, Hs, Wn, dc, Vn, lc, hc, pc;
  if (Ka) return Tt;
  Ka = 1;
  var i;
  Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.BrowsingContextImpl = void 0, Tt.serializeOrigin = y;
  const s = Ce(), t = Pt(), r = bn(), n = Be(), u = Zo(), a = rl(), o = ac(), l = il();
  let d = (h = class {
    constructor(M, z, X, ae, oe, de, ie, me, re, pe, ue) {
      v(this, j);
      /** Direct children browsing contexts. */
      v(this, f, /* @__PURE__ */ new Set());
      /** The ID of this browsing context. */
      v(this, x);
      Y(this, "userContext");
      /**
       * The ID of the parent browsing context.
       * If null, this is a top-level context.
       */
      v(this, C);
      v(this, g, null);
      // Keeps track of the previously set viewport.
      v(this, N, { width: 0, height: 0 });
      v(this, _);
      v(this, k, {
        DOMContentLoaded: new r.Deferred(),
        load: new r.Deferred()
      });
      v(this, b);
      v(this, O, new r.Deferred());
      v(this, P);
      v(this, R);
      v(this, I);
      v(this, D);
      v(this, H);
      // The deferred will be resolved when the default realm is created.
      v(this, K);
      // Set when the user prompt is opened. Required to provide the type in closing event.
      v(this, Q);
      S(this, b, ae), S(this, x, M), S(this, g, z), this.userContext = X, S(this, R, oe), S(this, P, de), S(this, H, ie), S(this, K, pe), S(this, I, ue), S(this, _, re), S(this, D, new l.NavigationTracker(me, M, oe, ue));
    }
    static create(M, z, X, ae, oe, de, ie, me, re, pe, ue) {
      var V;
      const q = new i(M, z, X, ae, oe, de, ie, me, re, pe, ue);
      return T(V = q, j, zn).call(V), de.addContext(q), q.isTopLevelContext() || q.parent.addChild(q.id), oe.registerPromiseEvent(q.targetUnblockedOrThrow().then(() => ({
        kind: "success",
        value: {
          type: "event",
          method: s.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
          params: {
            ...q.serializeToBidiValue(),
            // Hack to provide the initial URL of the context, as it can be changed
            // between the page target is attached and unblocked, as the page is not
            // fully paused in MPArch session (https://crbug.com/372842894).
            // TODO: remove once https://crbug.com/372842894 is addressed.
            url: me
          }
        }
      }), (G) => ({
        kind: "error",
        error: G
      })), q.id, s.ChromiumBidi.BrowsingContext.EventNames.ContextCreated), q;
    }
    /**
     * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
     */
    get navigableId() {
      return e(this, C);
    }
    get navigationId() {
      return e(this, D).currentNavigationId;
    }
    dispose(M) {
      e(this, D).dispose(), T(this, j, $s).call(this), e(this, H).deleteRealms({
        browsingContextId: this.id
      }), this.isTopLevelContext() || e(this.parent, f).delete(this.id), T(this, j, dc).call(this), M && e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
        params: this.serializeToBidiValue()
      }, this.id), e(this, R).clearBufferedEvents(this.id), e(this, P).deleteContextById(this.id);
    }
    /** Returns the ID of this context. */
    get id() {
      return e(this, x);
    }
    /** Returns the parent context ID. */
    get parentId() {
      return e(this, g);
    }
    /** Sets the parent context ID and updates parent's children. */
    set parentId(M) {
      var z;
      if (e(this, g) !== null) {
        (z = e(this, I)) == null || z.call(this, n.LogType.debugError, "Parent context already set");
        return;
      }
      S(this, g, M), this.isTopLevelContext() || this.parent.addChild(this.id);
    }
    /** Returns the parent context. */
    get parent() {
      return this.parentId === null ? null : e(this, P).getContext(this.parentId);
    }
    /** Returns all direct children contexts. */
    get directChildren() {
      return [...e(this, f)].map((M) => e(this, P).getContext(M));
    }
    /** Returns all children contexts, flattened. */
    get allChildren() {
      const M = this.directChildren;
      return M.concat(...M.map((z) => z.allChildren));
    }
    /**
     * Returns true if this is a top-level context.
     * This is the case whenever the parent context ID is null.
     */
    isTopLevelContext() {
      return e(this, g) === null;
    }
    get top() {
      let M = this, z = M.parent;
      for (; z; )
        M = z, z = M.parent;
      return M;
    }
    addChild(M) {
      e(this, f).add(M);
    }
    get cdpTarget() {
      return e(this, b);
    }
    updateCdpTarget(M) {
      S(this, b, M), T(this, j, zn).call(this);
    }
    get url() {
      return e(this, D).url;
    }
    async lifecycleLoaded() {
      await e(this, k).load;
    }
    async targetUnblockedOrThrow() {
      const M = await e(this, b).unblocked;
      if (M.kind === "error")
        throw M.error;
    }
    async getOrCreateSandbox(M) {
      if (M === void 0 || M === "")
        return await e(this, O);
      let z = e(this, H).findRealms({
        browsingContextId: this.id,
        sandbox: M
      });
      return z.length === 0 && (await e(this, b).cdpClient.sendCommand("Page.createIsolatedWorld", {
        frameId: this.id,
        worldName: M
      }), z = e(this, H).findRealms({
        browsingContextId: this.id,
        sandbox: M
      }), (0, t.assert)(z.length !== 0)), z[0];
    }
    serializeToBidiValue(M = 0, z = !0) {
      return {
        context: e(this, x),
        url: this.url,
        userContext: this.userContext,
        originalOpener: e(this, _) ?? null,
        // TODO(#2646): Implement Client Window correctly
        clientWindow: "",
        children: M > 0 ? this.directChildren.map((X) => X.serializeToBidiValue(M - 1, !1)) : null,
        ...z ? { parent: e(this, g) } : {}
      };
    }
    onTargetInfoChanged(M) {
      e(this, D).onTargetInfoChanged(M.targetInfo.url);
    }
    async navigate(M, z) {
      try {
        new URL(M);
      } catch {
        throw new s.InvalidArgumentException(`Invalid URL: ${M}`);
      }
      const X = e(this, D).createPendingNavigation(M), ae = (async () => {
        const de = await e(this, b).cdpClient.sendCommand("Page.navigate", {
          url: M,
          frameId: this.id
        });
        if (de.errorText)
          throw e(this, D).failNavigation(X, de.errorText), new s.UnknownErrorException(de.errorText);
        e(this, D).navigationCommandFinished(X, de.loaderId), T(this, j, Hs).call(this, de.loaderId);
      })(), oe = await Promise.race([
        // No `loaderId` means same-document navigation.
        T(this, j, Vn).call(this, z, ae, X),
        // Throw an error if the navigation is canceled.
        X.finished
      ]);
      if (oe instanceof l.NavigationResult && // TODO: check after decision on the spec is done:
      //  https://github.com/w3c/webdriver-bidi/issues/799.
      (oe.eventName === "browsingContext.navigationAborted" || oe.eventName === "browsingContext.navigationFailed"))
        throw new s.UnknownErrorException(oe.message ?? "unknown exception");
      return {
        navigation: X.navigationId,
        // Url can change due to redirects. Get the one from commandNavigation.
        url: X.url
      };
    }
    // TODO: support concurrent navigations analogous to `navigate`.
    async reload(M, z) {
      await this.targetUnblockedOrThrow(), T(this, j, Wn).call(this);
      const X = e(this, D).createPendingNavigation(e(this, D).url), ae = e(this, b).cdpClient.sendCommand("Page.reload", {
        ignoreCache: M
      }), oe = await Promise.race([
        // No `loaderId` means same-document navigation.
        T(this, j, Vn).call(this, z, ae, X),
        // Throw an error if the navigation is canceled.
        X.finished
      ]);
      if (oe instanceof l.NavigationResult && (oe.eventName === "browsingContext.navigationAborted" || oe.eventName === "browsingContext.navigationFailed"))
        throw new s.UnknownErrorException(oe.message ?? "unknown exception");
      return {
        navigation: X.navigationId,
        // Url can change due to redirects. Get the one from commandNavigation.
        url: X.url
      };
    }
    async setViewport(M, z) {
      if (M === null && z === null)
        await e(this, b).cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
      else
        try {
          let X;
          M === void 0 ? X = e(this, N) : M === null ? X = {
            width: 0,
            height: 0
          } : X = M, S(this, N, X), await e(this, b).cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", {
            width: e(this, N).width,
            height: e(this, N).height,
            deviceScaleFactor: z || 0,
            mobile: !1,
            dontSetVisibleSize: !0
          });
        } catch (X) {
          throw X.message.startsWith(
            // https://crsrc.org/c/content/browser/devtools/protocol/emulation_handler.cc;l=257;drc=2f6eee84cf98d4227e7c41718dd71b82f26d90ff
            "Width and height values must be positive"
          ) ? new s.UnsupportedOperationException("Provided viewport dimensions are not supported") : X;
        }
    }
    async handleUserPrompt(M, z) {
      await e(this, b).cdpClient.sendCommand("Page.handleJavaScriptDialog", {
        accept: M ?? !0,
        promptText: z
      });
    }
    async activate() {
      await e(this, b).cdpClient.sendCommand("Page.bringToFront");
    }
    async captureScreenshot(M) {
      if (!this.isTopLevelContext())
        throw new s.UnsupportedOperationException(`Non-top-level 'context' (${M.context}) is currently not supported`);
      const z = c(M);
      let X = !1, ae;
      switch (M.origin ?? (M.origin = "viewport"), M.origin) {
        case "document": {
          ae = String(() => {
            const re = document.documentElement;
            return {
              x: 0,
              y: 0,
              width: re.scrollWidth,
              height: re.scrollHeight
            };
          }), X = !0;
          break;
        }
        case "viewport": {
          ae = String(() => {
            const re = window.visualViewport;
            return {
              x: re.pageLeft,
              y: re.pageTop,
              width: re.width,
              height: re.height
            };
          });
          break;
        }
      }
      const de = await (await this.getOrCreateSandbox(void 0)).callFunction(ae, !1);
      (0, t.assert)(de.type === "success");
      const ie = p(de.result);
      (0, t.assert)(ie);
      let me = ie;
      if (M.clip) {
        const re = M.clip;
        M.origin === "viewport" && re.type === "box" && (re.x += ie.x, re.y += ie.y), me = E(await T(this, j, lc).call(this, re), ie);
      }
      if (me.width === 0 || me.height === 0)
        throw new s.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${me.width}, height=${me.height}`);
      return await e(this, b).cdpClient.sendCommand("Page.captureScreenshot", {
        clip: { ...me, scale: 1 },
        ...z,
        captureBeyondViewport: X
      });
    }
    async print(M) {
      var X, ae, oe, de, ie, me;
      if (!this.isTopLevelContext())
        throw new s.UnsupportedOperationException("Printing of non-top level contexts is not supported");
      const z = {};
      if (M.background !== void 0 && (z.printBackground = M.background), ((X = M.margin) == null ? void 0 : X.bottom) !== void 0 && (z.marginBottom = (0, a.inchesFromCm)(M.margin.bottom)), ((ae = M.margin) == null ? void 0 : ae.left) !== void 0 && (z.marginLeft = (0, a.inchesFromCm)(M.margin.left)), ((oe = M.margin) == null ? void 0 : oe.right) !== void 0 && (z.marginRight = (0, a.inchesFromCm)(M.margin.right)), ((de = M.margin) == null ? void 0 : de.top) !== void 0 && (z.marginTop = (0, a.inchesFromCm)(M.margin.top)), M.orientation !== void 0 && (z.landscape = M.orientation === "landscape"), ((ie = M.page) == null ? void 0 : ie.height) !== void 0 && (z.paperHeight = (0, a.inchesFromCm)(M.page.height)), ((me = M.page) == null ? void 0 : me.width) !== void 0 && (z.paperWidth = (0, a.inchesFromCm)(M.page.width)), M.pageRanges !== void 0) {
        for (const re of M.pageRanges) {
          if (typeof re == "number")
            continue;
          const pe = re.split("-");
          if (pe.length < 1 || pe.length > 2)
            throw new s.InvalidArgumentException(`Invalid page range: ${re} is not a valid integer range.`);
          if (pe.length === 1) {
            m(pe[0] ?? "");
            continue;
          }
          let ue, q;
          const [V = "", G = ""] = pe;
          if (V === "" ? ue = 1 : ue = m(V), G === "" ? q = Number.MAX_SAFE_INTEGER : q = m(G), ue > q)
            throw new s.InvalidArgumentException(`Invalid page range: ${V} > ${G}`);
        }
        z.pageRanges = M.pageRanges.join(",");
      }
      M.scale !== void 0 && (z.scale = M.scale), M.shrinkToFit !== void 0 && (z.preferCSSPageSize = !M.shrinkToFit);
      try {
        return {
          data: (await e(this, b).cdpClient.sendCommand("Page.printToPDF", z)).data
        };
      } catch (re) {
        throw re.message === "invalid print parameters: content area is empty" ? new s.UnsupportedOperationException(re.message) : re;
      }
    }
    async close() {
      await e(this, b).cdpClient.sendCommand("Page.close");
    }
    async traverseHistory(M) {
      if (M === 0)
        return;
      const z = await e(this, b).cdpClient.sendCommand("Page.getNavigationHistory"), X = z.entries[z.currentIndex + M];
      if (!X)
        throw new s.NoSuchHistoryEntryException(`No history entry at delta ${M}`);
      await e(this, b).cdpClient.sendCommand("Page.navigateToHistoryEntry", {
        entryId: X.id
      });
    }
    async toggleModulesIfNeeded() {
      await Promise.all([
        e(this, b).toggleNetworkIfNeeded(),
        e(this, b).toggleDeviceAccessIfNeeded()
      ]);
    }
    async locateNodes(M) {
      return await T(this, j, pc).call(this, await e(this, O), M.locator, M.startNodes ?? [], M.maxNodeCount, M.serializationOptions);
    }
  }, f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakMap(), k = new WeakMap(), b = new WeakMap(), O = new WeakMap(), P = new WeakMap(), R = new WeakMap(), I = new WeakMap(), D = new WeakMap(), H = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), j = new WeakSet(), $s = function(M = !1) {
    this.directChildren.map((z) => z.dispose(M));
  }, zn = function() {
    e(this, b).cdpClient.on("Network.loadingFailed", (M) => {
      e(this, D).networkLoadingFailed(M.requestId, M.errorText);
    }), e(this, b).cdpClient.on("Page.frameNavigated", (M) => {
      this.id === M.frame.id && (e(this, D).frameNavigated(
        M.frame.url + (M.frame.urlFragment ?? ""),
        M.frame.loaderId,
        // `unreachableUrl` indicates if the navigation failed.
        M.frame.unreachableUrl
      ), T(this, j, $s).call(this), T(this, j, Hs).call(this, M.frame.loaderId));
    }), e(this, b).on("frameStartedNavigating", (M) => {
      var X;
      (X = e(this, I)) == null || X.call(this, n.LogType.debugInfo, "Received frameStartedNavigating event", M), [
        this.id,
        ...this.cdpTarget.id === this.id ? [void 0] : []
      ].includes(M.frameId) && e(this, D).frameStartedNavigating(M.url, M.loaderId);
    }), e(this, b).cdpClient.on("Page.navigatedWithinDocument", (M) => {
      if (this.id === M.frameId && (e(this, D).navigatedWithinDocument(M.url, M.navigationType), M.navigationType === "historyApi")) {
        e(this, R).registerEvent({
          type: "event",
          method: "browsingContext.historyUpdated",
          params: {
            context: this.id,
            url: e(this, D).url
          }
        }, this.id);
        return;
      }
    }), e(this, b).cdpClient.on("Page.frameRequestedNavigation", (M) => {
      this.id === M.frameId && e(this, D).frameRequestedNavigation(M.url);
    }), e(this, b).cdpClient.on("Page.lifecycleEvent", (M) => {
      if (this.id === M.frameId) {
        if (M.name === "init") {
          T(this, j, Hs).call(this, M.loaderId);
          return;
        }
        if (M.name === "commit") {
          S(this, C, M.loaderId);
          return;
        }
        if (e(this, C) || S(this, C, M.loaderId), M.loaderId === e(this, C))
          switch (M.name) {
            case "DOMContentLoaded":
              e(this, D).isInitialNavigation || e(this, R).registerEvent({
                type: "event",
                method: s.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
                params: {
                  context: this.id,
                  navigation: e(this, D).currentNavigationId,
                  timestamp: (0, u.getTimestamp)(),
                  url: e(this, D).url
                }
              }, this.id), e(this, k).DOMContentLoaded.resolve();
              break;
            case "load":
              e(this, D).isInitialNavigation || e(this, R).registerEvent({
                type: "event",
                method: s.ChromiumBidi.BrowsingContext.EventNames.Load,
                params: {
                  context: this.id,
                  navigation: e(this, D).currentNavigationId,
                  timestamp: (0, u.getTimestamp)(),
                  url: e(this, D).url
                }
              }, this.id), e(this, D).loadPageEvent(M.loaderId), e(this, k).load.resolve();
              break;
          }
      }
    }), e(this, b).cdpClient.on("Runtime.executionContextCreated", (M) => {
      var re;
      const { auxData: z, name: X, uniqueId: ae, id: oe } = M.context;
      if (!z || z.frameId !== this.id)
        return;
      let de, ie;
      switch (z.type) {
        case "isolated":
          ie = X, e(this, O).isFinished || (re = e(this, I)) == null || re.call(this, n.LogType.debugError, "Unexpectedly, isolated realm created before the default one"), de = e(this, O).isFinished ? e(this, O).result.origin : (
            // This fallback is not expected to be ever reached.
            ""
          );
          break;
        case "default":
          de = y(M.context.origin);
          break;
        default:
          return;
      }
      const me = new o.WindowRealm(this.id, e(this, P), e(this, b).cdpClient, e(this, R), oe, e(this, I), de, ae, e(this, H), ie);
      z.isDefault && (e(this, O).resolve(me), Promise.all(e(this, b).getChannels().map((pe) => pe.startListenerFromWindow(me, e(this, R)))));
    }), e(this, b).cdpClient.on("Runtime.executionContextDestroyed", (M) => {
      e(this, O).isFinished && e(this, O).result.executionContextId === M.executionContextId && S(this, O, new r.Deferred()), e(this, H).deleteRealms({
        cdpSessionId: e(this, b).cdpSessionId,
        executionContextId: M.executionContextId
      });
    }), e(this, b).cdpClient.on("Runtime.executionContextsCleared", () => {
      e(this, O).isFinished || e(this, O).reject(new s.UnknownErrorException("execution contexts cleared")), S(this, O, new r.Deferred()), e(this, H).deleteRealms({
        cdpSessionId: e(this, b).cdpSessionId
      });
    }), e(this, b).cdpClient.on("Page.javascriptDialogClosed", (M) => {
      var X;
      const z = M.result;
      e(this, Q) === void 0 && ((X = e(this, I)) == null || X.call(this, n.LogType.debugError, "Unexpectedly no opening prompt event before closing one")), e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
        params: {
          context: this.id,
          accepted: z,
          // `lastUserPromptType` should never be undefined here, so fallback to
          // `UNKNOWN`. The fallback is required to prevent tests from hanging while
          // waiting for the closing event. The cast is required, as the `UNKNOWN` value
          // is not standard.
          type: e(this, Q) ?? "UNKNOWN",
          userText: z && M.userInput ? M.userInput : void 0
        }
      }, this.id), S(this, Q, void 0);
    }), e(this, b).cdpClient.on("Page.javascriptDialogOpening", (M) => {
      var ae;
      const z = T(ae = i, L, cc).call(ae, M.type);
      M.type === "beforeunload" && e(this, D).beforeunload(), S(this, Q, z);
      const X = T(this, j, uc).call(this, z);
      switch (e(this, R).registerEvent({
        type: "event",
        method: s.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
        params: {
          context: this.id,
          handler: X,
          type: z,
          message: M.message,
          ...M.type === "prompt" ? { defaultValue: M.defaultPrompt } : {}
        }
      }, this.id), X) {
        // Based on `unhandledPromptBehavior`, check if the prompt should be handled
        // automatically (`accept`, `dismiss`) or wait for the user to do it.
        case "accept":
          this.handleUserPrompt(!0);
          break;
        case "dismiss":
          this.handleUserPrompt(!1);
          break;
      }
    });
  }, L = new WeakSet(), cc = function(M) {
    switch (M) {
      case "alert":
        return "alert";
      case "beforeunload":
        return "beforeunload";
      case "confirm":
        return "confirm";
      case "prompt":
        return "prompt";
    }
  }, uc = function(M) {
    var X, ae, oe, de, ie, me, re, pe;
    const z = "dismiss";
    switch (M) {
      case "alert":
        return ((X = e(this, K)) == null ? void 0 : X.alert) ?? ((ae = e(this, K)) == null ? void 0 : ae.default) ?? z;
      case "beforeunload":
        return ((oe = e(this, K)) == null ? void 0 : oe.beforeUnload) ?? ((de = e(this, K)) == null ? void 0 : de.default) ?? "accept";
      case "confirm":
        return ((ie = e(this, K)) == null ? void 0 : ie.confirm) ?? ((me = e(this, K)) == null ? void 0 : me.default) ?? z;
      case "prompt":
        return ((re = e(this, K)) == null ? void 0 : re.prompt) ?? ((pe = e(this, K)) == null ? void 0 : pe.default) ?? z;
    }
  }, Hs = function(M) {
    M === void 0 || e(this, C) === M || (T(this, j, Wn).call(this), S(this, C, M), T(this, j, $s).call(this, !0));
  }, Wn = function() {
    var M, z;
    e(this, k).DOMContentLoaded.isFinished ? e(this, k).DOMContentLoaded = new r.Deferred() : (M = e(this, I)) == null || M.call(this, i.LOGGER_PREFIX, "Document changed (DOMContentLoaded)"), e(this, k).load.isFinished ? e(this, k).load = new r.Deferred() : (z = e(this, I)) == null || z.call(this, i.LOGGER_PREFIX, "Document changed (load)");
  }, dc = function() {
    e(this, k).DOMContentLoaded.isFinished || e(this, k).DOMContentLoaded.reject(new s.UnknownErrorException("navigation canceled")), e(this, k).load.isFinished || e(this, k).load.reject(new s.UnknownErrorException("navigation canceled"));
  }, Vn = async function(M, z, X) {
    if (M !== "none") {
      if (await z, X.isFragmentNavigation === !0) {
        await X.finished;
        return;
      }
      if (M === "interactive") {
        await e(this, k).DOMContentLoaded;
        return;
      }
      if (M === "complete") {
        await e(this, k).load;
        return;
      }
      throw new s.InvalidArgumentException(`Wait condition ${M} is not supported`);
    }
  }, lc = async function(M) {
    switch (M.type) {
      case "box":
        return { x: M.x, y: M.y, width: M.width, height: M.height };
      case "element": {
        const z = await this.getOrCreateSandbox(void 0), X = await z.callFunction(String((ae) => ae instanceof Element), !1, { type: "undefined" }, [M.element]);
        if (X.type === "exception")
          throw new s.NoSuchElementException(`Element '${M.element.sharedId}' was not found`);
        if ((0, t.assert)(X.result.type === "boolean"), !X.result.value)
          throw new s.NoSuchElementException(`Node '${M.element.sharedId}' is not an Element`);
        {
          const ae = await z.callFunction(String((de) => {
            const ie = de.getBoundingClientRect();
            return {
              x: ie.x,
              y: ie.y,
              height: ie.height,
              width: ie.width
            };
          }), !1, { type: "undefined" }, [M.element]);
          (0, t.assert)(ae.type === "success");
          const oe = p(ae.result);
          if (!oe)
            throw new s.UnableToCaptureScreenException(`Could not get bounding box for Element '${M.element.sharedId}'`);
          return oe;
        }
      }
    }
  }, hc = async function(M, z, X, ae) {
    switch (z.type) {
      case "context":
        throw new Error("Unreachable");
      case "css":
        return {
          functionDeclaration: String((oe, de, ...ie) => {
            const me = (pe) => {
              if (!(pe instanceof HTMLElement || pe instanceof Document || pe instanceof DocumentFragment))
                throw new Error("startNodes in css selector should be HTMLElement, Document or DocumentFragment");
              return [...pe.querySelectorAll(oe)];
            };
            ie = ie.length > 0 ? ie : [document];
            const re = ie.map((pe) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              me(pe)
            )).flat(1);
            return de === 0 ? re : re.slice(0, de);
          }),
          argumentsLocalValues: [
            // `cssSelector`
            { type: "string", value: z.value },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: X ?? 0 },
            // `startNodes`
            ...ae
          ]
        };
      case "xpath":
        return {
          functionDeclaration: String((oe, de, ...ie) => {
            const re = new XPathEvaluator().createExpression(oe), pe = (q) => {
              const V = re.evaluate(q, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE), G = [];
              for (let ee = 0; ee < V.snapshotLength; ee++)
                G.push(V.snapshotItem(ee));
              return G;
            };
            ie = ie.length > 0 ? ie : [document];
            const ue = ie.map((q) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              pe(q)
            )).flat(1);
            return de === 0 ? ue : ue.slice(0, de);
          }),
          argumentsLocalValues: [
            // `xPathSelector`
            { type: "string", value: z.value },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: X ?? 0 },
            // `startNodes`
            ...ae
          ]
        };
      case "innerText":
        if (z.value === "")
          throw new s.InvalidSelectorException("innerText locator cannot be empty");
        return {
          functionDeclaration: String((oe, de, ie, me, re, ...pe) => {
            const ue = ie ? oe.toUpperCase() : oe, q = (G, ee) => {
              var Me;
              const ce = [];
              if (G instanceof DocumentFragment || G instanceof Document)
                return [...G.children].forEach((We) => (
                  // `currentMaxDepth` is not decremented intentionally according to
                  // https://github.com/w3c/webdriver-bidi/pull/713.
                  ce.push(...q(We, ee))
                )), ce;
              if (!(G instanceof HTMLElement))
                return [];
              const fe = G, ve = ie ? (Me = fe.innerText) == null ? void 0 : Me.toUpperCase() : fe.innerText;
              if (!ve.includes(ue))
                return [];
              const be = [];
              for (const Ie of fe.children)
                Ie instanceof HTMLElement && be.push(Ie);
              if (be.length === 0)
                de && ve === ue ? ce.push(fe) : de || ce.push(fe);
              else {
                const Ie = (
                  // Don't search deeper if `maxDepth` is reached.
                  ee <= 0 ? [] : be.map((We) => q(We, ee - 1)).flat(1)
                );
                Ie.length === 0 ? (!de || ve === ue) && ce.push(fe) : ce.push(...Ie);
              }
              return ce;
            };
            pe = pe.length > 0 ? pe : [document];
            const V = pe.map((G) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              q(G, re)
            )).flat(1);
            return me === 0 ? V : V.slice(0, me);
          }),
          argumentsLocalValues: [
            // `innerTextSelector`
            { type: "string", value: z.value },
            // `fullMatch` with default `true`.
            { type: "boolean", value: z.matchType !== "partial" },
            // `ignoreCase` with default `false`.
            { type: "boolean", value: z.ignoreCase === !0 },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: X ?? 0 },
            // `maxDepth` with default `1000` (same as default full serialization depth).
            { type: "number", value: z.maxDepth ?? 1e3 },
            // `startNodes`
            ...ae
          ]
        };
      case "accessibility": {
        if (!z.value.name && !z.value.role)
          throw new s.InvalidSelectorException("Either name or role has to be specified");
        await Promise.all([
          e(this, b).cdpClient.sendCommand("Accessibility.enable"),
          e(this, b).cdpClient.sendCommand("Accessibility.getRootAXNode")
        ]);
        const oe = await M.evaluate(
          /* expression=*/
          "({getAccessibleName, getAccessibleRole})",
          /* awaitPromise=*/
          !1,
          "root",
          /* serializationOptions= */
          void 0,
          /* userActivation=*/
          !1,
          /* includeCommandLineApi=*/
          !0
        );
        if (oe.type !== "success")
          throw new Error("Could not get bindings");
        if (oe.result.type !== "object")
          throw new Error("Could not get bindings");
        return {
          functionDeclaration: String((de, ie, me, re, ...pe) => {
            const ue = [];
            let q = !1;
            function V(G, ee) {
              if (!q)
                for (const ce of G) {
                  let fe = !0;
                  if (ee.role) {
                    const be = me.getAccessibleRole(ce);
                    ee.role !== be && (fe = !1);
                  }
                  if (ee.name) {
                    const be = me.getAccessibleName(ce);
                    ee.name !== be && (fe = !1);
                  }
                  if (fe) {
                    if (re !== 0 && ue.length === re) {
                      q = !0;
                      break;
                    }
                    ue.push(ce);
                  }
                  const ve = [];
                  for (const be of ce.children)
                    be instanceof HTMLElement && ve.push(be);
                  V(ve, ee);
                }
            }
            return pe = pe.length > 0 ? pe : Array.from(document.documentElement.children).filter((G) => G instanceof HTMLElement), V(pe, {
              role: ie,
              name: de
            }), ue;
          }),
          argumentsLocalValues: [
            // `name`
            { type: "string", value: z.value.name || "" },
            // `role`
            { type: "string", value: z.value.role || "" },
            // `bindings`.
            { handle: oe.result.handle },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: X ?? 0 },
            // `startNodes`
            ...ae
          ]
        };
      }
    }
  }, pc = async function(M, z, X, ae, oe) {
    var re, pe, ue;
    if (z.type === "context") {
      if (X.length !== 0)
        throw new s.InvalidArgumentException("Start nodes are not supported");
      const q = z.value.context;
      if (!q)
        throw new s.InvalidSelectorException("Invalid context");
      const G = e(this, P).getContext(q).parent;
      if (!G)
        throw new s.InvalidArgumentException("This context has no container");
      try {
        const { backendNodeId: ee } = await e(G, b).cdpClient.sendCommand("DOM.getFrameOwner", {
          frameId: q
        }), { object: ce } = await e(G, b).cdpClient.sendCommand("DOM.resolveNode", {
          backendNodeId: ee
        }), fe = await M.callFunction("function () { return this; }", !1, { handle: ce.objectId }, [], "none", oe);
        if (fe.type === "exception")
          throw new Error("Unknown exception");
        return { nodes: [fe.result] };
      } catch {
        throw new s.InvalidArgumentException("Context does not exist");
      }
    }
    const de = await T(this, j, hc).call(this, M, z, ae, X);
    oe = {
      ...oe,
      // The returned object is an array of nodes, so no need in deeper JS serialization.
      maxObjectDepth: 1
    };
    const ie = await M.callFunction(de.functionDeclaration, !1, { type: "undefined" }, de.argumentsLocalValues, "none", oe);
    if (ie.type !== "success")
      throw (re = e(this, I)) == null || re.call(this, i.LOGGER_PREFIX, "Failed locateNodesByLocator", ie), // CSS selector.
      (pe = ie.exceptionDetails.text) != null && pe.endsWith("is not a valid selector.") || // XPath selector.
      (ue = ie.exceptionDetails.text) != null && ue.endsWith("is not a valid XPath expression.") ? new s.InvalidSelectorException(`Not valid selector ${typeof z.value == "string" ? z.value : JSON.stringify(z.value)}`) : ie.exceptionDetails.text === "Error: startNodes in css selector should be HTMLElement, Document or DocumentFragment" ? new s.InvalidArgumentException("startNodes in css selector should be HTMLElement, Document or DocumentFragment") : new s.UnknownErrorException(`Unexpected error in selector script: ${ie.exceptionDetails.text}`);
    if (ie.result.type !== "array")
      throw new s.UnknownErrorException(`Unexpected selector script result type: ${ie.result.type}`);
    return { nodes: ie.result.value.map((q) => {
      if (q.type !== "node")
        throw new s.UnknownErrorException(`Unexpected selector script result element: ${q.type}`);
      return q;
    }) };
  }, v(h, L), Y(h, "LOGGER_PREFIX", `${n.LogType.debug}:browsingContext`), h);
  Tt.BrowsingContextImpl = d, i = d;
  function y(te) {
    return ["://", ""].includes(te) && (te = "null"), te;
  }
  function c(te) {
    const { quality: M, type: z } = te.format ?? {
      type: "image/png"
    };
    switch (z) {
      case "image/png":
        return { format: "png" };
      case "image/jpeg":
        return {
          format: "jpeg",
          ...M === void 0 ? {} : { quality: Math.round(M * 100) }
        };
      case "image/webp":
        return {
          format: "webp",
          ...M === void 0 ? {} : { quality: Math.round(M * 100) }
        };
    }
    throw new s.InvalidArgumentException(`Image format '${z}' is not a supported format`);
  }
  function p(te) {
    var oe, de, ie, me;
    if (te.type !== "object" || te.value === void 0)
      return;
    const M = (oe = te.value.find(([re]) => re === "x")) == null ? void 0 : oe[1], z = (de = te.value.find(([re]) => re === "y")) == null ? void 0 : de[1], X = (ie = te.value.find(([re]) => re === "height")) == null ? void 0 : ie[1], ae = (me = te.value.find(([re]) => re === "width")) == null ? void 0 : me[1];
    if (!((M == null ? void 0 : M.type) !== "number" || (z == null ? void 0 : z.type) !== "number" || (X == null ? void 0 : X.type) !== "number" || (ae == null ? void 0 : ae.type) !== "number"))
      return {
        x: M.value,
        y: z.value,
        width: ae.value,
        height: X.value
      };
  }
  function w(te) {
    return {
      ...te.width < 0 ? {
        x: te.x + te.width,
        width: -te.width
      } : {
        x: te.x,
        width: te.width
      },
      ...te.height < 0 ? {
        y: te.y + te.height,
        height: -te.height
      } : {
        y: te.y,
        height: te.height
      }
    };
  }
  function E(te, M) {
    te = w(te), M = w(M);
    const z = Math.max(te.x, M.x), X = Math.max(te.y, M.y);
    return {
      x: z,
      y: X,
      width: Math.max(Math.min(te.x + te.width, M.x + M.width) - z, 0),
      height: Math.max(Math.min(te.y + te.height, M.y + M.height) - X, 0)
    };
  }
  function m(te) {
    if (te = te.trim(), !/^[0-9]+$/.test(te))
      throw new s.InvalidArgumentException(`Invalid integer: ${te}`);
    return parseInt(te);
  }
  return Tt;
}
var Or = {}, za;
function al() {
  var t, r, n;
  if (za) return Or;
  za = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.WorkerRealm = void 0;
  const i = nc();
  let s = (n = class extends i.Realm {
    constructor(o, l, d, y, c, p, w, E, m) {
      super(o, l, d, y, c, w, E);
      v(this, t);
      v(this, r);
      S(this, r, p), S(this, t, m), this.initialize();
    }
    get associatedBrowsingContexts() {
      return e(this, r).flatMap((o) => o.associatedBrowsingContexts);
    }
    get realmType() {
      return e(this, t);
    }
    get source() {
      var o;
      return {
        realm: this.realmId,
        // This is a hack to make Puppeteer able to track workers.
        // TODO: remove after Puppeteer tracks workers by owners and use the base version.
        context: (o = this.associatedBrowsingContexts[0]) == null ? void 0 : o.id
      };
    }
    get realmInfo() {
      const o = e(this, r).map((d) => d.realmId), { realmType: l } = this;
      switch (l) {
        case "dedicated-worker": {
          const d = o[0];
          if (d === void 0 || o.length !== 1)
            throw new Error("Dedicated worker must have exactly one owner");
          return {
            ...this.baseInfo,
            type: l,
            owners: [d]
          };
        }
        case "service-worker":
        case "shared-worker":
          return {
            ...this.baseInfo,
            type: l
          };
      }
    }
  }, t = new WeakMap(), r = new WeakMap(), n);
  return Or.WorkerRealm = s, Or;
}
var Fr = {}, jr = {}, Br = {}, Wa;
function ol() {
  if (Wa) return Br;
  Wa = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.logMessageFormatter = r, Br.getRemoteValuesText = a;
  const i = Pt(), s = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
  function t(o) {
    return s.some((l) => o.includes(l));
  }
  function r(o) {
    let l = "";
    const d = o[0].value.toString(), y = o.slice(1, void 0), c = d.split(new RegExp(s.map((p) => `(${p})`).join("|"), "g"));
    for (const p of c)
      if (!(p === void 0 || p === ""))
        if (t(p)) {
          const w = y.shift();
          (0, i.assert)(w, `Less value is provided: "${a(o, !1)}"`), p === "%s" ? l += u(w) : p === "%d" || p === "%i" ? w.type === "bigint" || w.type === "number" || w.type === "string" ? l += parseInt(w.value.toString(), 10) : l += "NaN" : p === "%f" ? w.type === "bigint" || w.type === "number" || w.type === "string" ? l += parseFloat(w.value.toString()) : l += "NaN" : l += n(w);
        } else
          l += p;
    if (y.length > 0)
      throw new Error(`More value is provided: "${a(o, !1)}"`);
    return l;
  }
  function n(o) {
    var l;
    if (o.type !== "array" && o.type !== "bigint" && o.type !== "date" && o.type !== "number" && o.type !== "object" && o.type !== "string")
      return u(o);
    if (o.type === "bigint")
      return `${o.value.toString()}n`;
    if (o.type === "number")
      return o.value.toString();
    if (["date", "string"].includes(o.type))
      return JSON.stringify(o.value);
    if (o.type === "object")
      return `{${o.value.map((d) => `${JSON.stringify(d[0])}:${n(d[1])}`).join(",")}}`;
    if (o.type === "array")
      return `[${((l = o.value) == null ? void 0 : l.map((d) => n(d)).join(",")) ?? ""}]`;
    throw Error(`Invalid value type: ${o}`);
  }
  function u(o) {
    var l, d, y, c;
    if (!Object.hasOwn(o, "value"))
      return o.type;
    switch (o.type) {
      case "string":
      case "number":
      case "boolean":
      case "bigint":
        return String(o.value);
      case "regexp":
        return `/${o.value.pattern}/${o.value.flags ?? ""}`;
      case "date":
        return new Date(o.value).toString();
      case "object":
        return `Object(${((l = o.value) == null ? void 0 : l.length) ?? ""})`;
      case "array":
        return `Array(${((d = o.value) == null ? void 0 : d.length) ?? ""})`;
      case "map":
        return `Map(${(y = o.value) == null ? void 0 : y.length})`;
      case "set":
        return `Set(${(c = o.value) == null ? void 0 : c.length})`;
      default:
        return o.type;
    }
  }
  function a(o, l) {
    const d = o[0];
    return d ? d.type === "string" && t(d.value.toString()) && l ? r(o) : o.map((y) => u(y)).join(" ") : "";
  }
  return Br;
}
var Va;
function cl() {
  var l, d, y, c, p, mc, gc, m, h, wc;
  if (Va) return jr;
  Va = 1;
  var i;
  Object.defineProperty(jr, "__esModule", { value: !0 }), jr.LogManager = void 0;
  const s = Ce(), t = Be(), r = ol();
  function n(x) {
    const C = x == null ? void 0 : x.callFrames.map((g) => ({
      columnNumber: g.columnNumber,
      functionName: g.functionName,
      lineNumber: g.lineNumber,
      url: g.url
    }));
    return C ? { callFrames: C } : void 0;
  }
  function u(x) {
    return ["error", "assert"].includes(x) ? "error" : ["debug", "trace"].includes(x) ? "debug" : ["warn", "warning"].includes(x) ? "warn" : "info";
  }
  function a(x) {
    switch (x) {
      case "warning":
        return "warn";
      case "startGroup":
        return "group";
      case "startGroupCollapsed":
        return "groupCollapsed";
      case "endGroup":
        return "groupEnd";
    }
    return x;
  }
  let o = (h = class {
    constructor(C, g, N, _) {
      v(this, p);
      v(this, l);
      v(this, d);
      v(this, y);
      v(this, c);
      S(this, y, C), S(this, d, g), S(this, l, N), S(this, c, _);
    }
    static create(C, g, N, _) {
      var b;
      const k = new i(C, g, N, _);
      return T(b = k, p, gc).call(b), k;
    }
  }, l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakSet(), mc = async function(C, g) {
    switch (C.type) {
      // TODO: Implement regexp, array, object, map and set heuristics base on
      //  preview.
      case "undefined":
        return { type: "undefined" };
      case "boolean":
        return { type: "boolean", value: C.value };
      case "string":
        return { type: "string", value: C.value };
      case "number":
        return { type: "number", value: C.unserializableValue ?? C.value };
      case "bigint":
        if (C.unserializableValue !== void 0 && C.unserializableValue[C.unserializableValue.length - 1] === "n")
          return {
            type: C.type,
            value: C.unserializableValue.slice(0, -1)
          };
        break;
      case "object":
        if (C.subtype === "null")
          return { type: "null" };
        break;
    }
    return await g.serializeCdpObject(
      C,
      "none"
      /* Script.ResultOwnership.None */
    );
  }, gc = function() {
    e(this, y).cdpClient.on("Runtime.consoleAPICalled", (C) => {
      var _;
      const g = e(this, d).findRealm({
        cdpSessionId: e(this, y).cdpSessionId,
        executionContextId: C.executionContextId
      });
      if (g === void 0) {
        (_ = e(this, c)) == null || _.call(this, t.LogType.cdp, C);
        return;
      }
      const N = Promise.all(C.args.map((k) => T(this, p, mc).call(this, k, g)));
      for (const k of g.associatedBrowsingContexts)
        e(this, l).registerPromiseEvent(N.then((b) => ({
          kind: "success",
          value: {
            type: "event",
            method: s.ChromiumBidi.Log.EventNames.LogEntryAdded,
            params: {
              level: u(C.type),
              source: g.source,
              text: (0, r.getRemoteValuesText)(b, !0),
              timestamp: Math.round(C.timestamp),
              stackTrace: n(C.stackTrace),
              type: "console",
              method: a(C.type),
              args: b
            }
          }
        }), (b) => ({
          kind: "error",
          error: b
        })), k.id, s.ChromiumBidi.Log.EventNames.LogEntryAdded);
    }), e(this, y).cdpClient.on("Runtime.exceptionThrown", (C) => {
      var N, _;
      const g = e(this, d).findRealm({
        cdpSessionId: e(this, y).cdpSessionId,
        executionContextId: C.exceptionDetails.executionContextId
      });
      if (g === void 0) {
        (N = e(this, c)) == null || N.call(this, t.LogType.cdp, C);
        return;
      }
      for (const k of g.associatedBrowsingContexts)
        e(this, l).registerPromiseEvent(T(_ = i, m, wc).call(_, C, g).then((b) => ({
          kind: "success",
          value: {
            type: "event",
            method: s.ChromiumBidi.Log.EventNames.LogEntryAdded,
            params: {
              level: "error",
              source: g.source,
              text: b,
              timestamp: Math.round(C.timestamp),
              stackTrace: n(C.exceptionDetails.stackTrace),
              type: "javascript"
            }
          }
        }), (b) => ({
          kind: "error",
          error: b
        })), k.id, s.ChromiumBidi.Log.EventNames.LogEntryAdded);
    });
  }, m = new WeakSet(), wc = async function(C, g) {
    return C.exceptionDetails.exception ? g === void 0 ? JSON.stringify(C.exceptionDetails.exception) : await g.stringifyObject(C.exceptionDetails.exception) : C.exceptionDetails.text;
  }, v(h, m), h);
  return jr.LogManager = o, i = o, jr;
}
var Ga;
function ul() {
  var o, l, d, y, c, p, w, E, m, h, f, x, C, g, N, _, k, yc, Gn, Ks, vc, bc, Cc, xc, K;
  if (Ga) return Fr;
  Ga = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.CdpTarget = void 0;
  const i = ko(), s = bn(), t = Zt(), r = Be(), n = fc(), u = cl();
  let a = (K = class extends t.EventEmitter {
    constructor(F, B, L, $, W, Z, U, A, J, se, we, ye) {
      super();
      v(this, k);
      v(this, o);
      v(this, l);
      v(this, d);
      v(this, y);
      v(this, c);
      v(this, p);
      v(this, w);
      v(this, E);
      v(this, m);
      v(this, h);
      v(this, f, new s.Deferred());
      v(this, x);
      v(this, C);
      v(this, g, !1);
      v(this, N, !1);
      v(this, _, {
        request: !1,
        response: !1,
        auth: !1
      });
      S(this, o, F), S(this, l, B), S(this, d, L), S(this, y, $), S(this, p, W), S(this, c, Z), S(this, w, U), S(this, h, J), S(this, E, A), S(this, m, se), S(this, x, we), S(this, C, ye);
    }
    static create(F, B, L, $, W, Z, U, A, J, se, we, ye) {
      var M, z;
      const te = new K(F, B, L, $, Z, W, U, A, J, se, we, ye);
      return u.LogManager.create(te, W, Z, ye), T(M = te, k, vc).call(M), T(z = te, k, yc).call(z), te;
    }
    /** Returns a deferred that resolves when the target is unblocked. */
    get unblocked() {
      return e(this, f);
    }
    get id() {
      return e(this, o);
    }
    get cdpClient() {
      return e(this, l);
    }
    get parentCdpClient() {
      return e(this, y);
    }
    get browserCdpClient() {
      return e(this, d);
    }
    /** Needed for CDP escape path. */
    get cdpSessionId() {
      return e(this, l).sessionId;
    }
    async toggleFetchIfNeeded() {
      const F = e(this, h).getInterceptionStages(this.topLevelId);
      if (e(this, _).request === F.request && e(this, _).response === F.response && e(this, _).auth === F.auth)
        return;
      const B = [];
      if (S(this, _, F), (F.request || F.auth) && B.push({
        urlPattern: "*",
        requestStage: "Request"
      }), F.response && B.push({
        urlPattern: "*",
        requestStage: "Response"
      }), B.length)
        await e(this, l).sendCommand("Fetch.enable", {
          patterns: B,
          handleAuthRequests: F.auth
        });
      else {
        const L = e(this, h).getRequestsByTarget(this).filter(($) => $.interceptPhase);
        Promise.allSettled(L.map(($) => $.waitNextPhase)).then(async () => e(this, h).getRequestsByTarget(this).filter((W) => W.interceptPhase).length ? await this.toggleFetchIfNeeded() : await e(this, l).sendCommand("Fetch.disable")).catch(($) => {
          var W;
          (W = e(this, C)) == null || W.call(this, r.LogType.bidi, "Disable failed", $);
        });
      }
    }
    /**
     * Toggles CDP "Fetch" domain and enable/disable network cache.
     */
    async toggleNetworkIfNeeded() {
      var F;
      try {
        await Promise.all([
          this.toggleSetCacheDisabled(),
          this.toggleFetchIfNeeded()
        ]);
      } catch (B) {
        if ((F = e(this, C)) == null || F.call(this, r.LogType.debugError, B), !T(this, k, Ks).call(this, B))
          throw B;
      }
    }
    async toggleSetCacheDisabled(F) {
      var $;
      const B = e(this, h).defaultCacheBehavior === "bypass", L = F ?? B;
      if (e(this, N) !== L) {
        S(this, N, L);
        try {
          await e(this, l).sendCommand("Network.setCacheDisabled", {
            cacheDisabled: L
          });
        } catch (W) {
          if (($ = e(this, C)) == null || $.call(this, r.LogType.debugError, W), S(this, N, !L), !T(this, k, Ks).call(this, W))
            throw W;
        }
      }
    }
    async toggleDeviceAccessIfNeeded() {
      var B;
      const F = this.isSubscribedTo(i.Bluetooth.EventNames.RequestDevicePromptUpdated);
      if (e(this, g) !== F) {
        S(this, g, F);
        try {
          await e(this, l).sendCommand(F ? "DeviceAccess.enable" : "DeviceAccess.disable");
        } catch (L) {
          if ((B = e(this, C)) == null || B.call(this, r.LogType.debugError, L), S(this, g, !F), !T(this, k, Ks).call(this, L))
            throw L;
        }
      }
    }
    async toggleNetwork() {
      var $;
      const F = e(this, h).getInterceptionStages(this.topLevelId), B = Object.values(F).some((W) => W), L = e(this, _).request !== F.request || e(this, _).response !== F.response || e(this, _).auth !== F.auth;
      ($ = e(this, C)) == null || $.call(this, r.LogType.debugInfo, "Toggle Network", `Fetch (${B}) ${L}`), B && L && await T(this, k, bc).call(this, F), !B && L && await T(this, k, Cc).call(this);
    }
    /**
     * All the ProxyChannels from all the preload scripts of the given
     * BrowsingContext.
     */
    getChannels() {
      return e(this, w).find().flatMap((F) => F.channels);
    }
    get topLevelId() {
      return e(this, E).findTopLevelContextId(this.id) ?? this.id;
    }
    isSubscribedTo(F) {
      return e(this, p).subscriptionManager.isSubscribedTo(F, this.topLevelId);
    }
  }, o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakMap(), E = new WeakMap(), m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakMap(), k = new WeakSet(), yc = async function() {
    var F;
    try {
      await Promise.all([
        e(this, l).sendCommand("Page.enable"),
        // There can be some existing frames in the target, if reconnecting to an
        // existing browser instance, e.g. via Puppeteer. Need to restore the browsing
        // contexts for the frames to correctly handle further events, like
        // `Runtime.executionContextCreated`.
        // It's important to schedule this task together with enabling domains commands to
        // prepare the tree before the events (e.g. Runtime.executionContextCreated) start
        // coming.
        // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2282
        e(this, l).sendCommand("Page.getFrameTree").then((B) => T(this, k, Gn).call(this, B.frameTree)),
        e(this, l).sendCommand("Runtime.enable"),
        e(this, l).sendCommand("Page.setLifecycleEventsEnabled", {
          enabled: !0
        }),
        e(this, l).sendCommand("Page.setPrerenderingAllowed", {
          isAllowed: !e(this, m)
        }).catch(() => {
        }),
        // Enabling CDP Network domain is required for navigation detection:
        // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2856.
        e(this, l).sendCommand("Network.enable").then(() => this.toggleNetworkIfNeeded()),
        e(this, l).sendCommand("Target.setAutoAttach", {
          autoAttach: !0,
          waitForDebuggerOnStart: !0,
          flatten: !0
        }),
        T(this, k, xc).call(this),
        e(this, l).sendCommand("Runtime.runIfWaitingForDebugger"),
        // Resume tab execution as well if it was paused by the debugger.
        e(this, y).sendCommand("Runtime.runIfWaitingForDebugger"),
        this.toggleDeviceAccessIfNeeded()
      ]);
    } catch (B) {
      if ((F = e(this, C)) == null || F.call(this, r.LogType.debugError, "Failed to unblock target", B), !e(this, l).isCloseError(B)) {
        e(this, f).resolve({
          kind: "error",
          error: B
        });
        return;
      }
    }
    e(this, f).resolve({
      kind: "success",
      value: void 0
    });
  }, Gn = function(F) {
    var $;
    const B = F.frame, L = e(this, E).findContext(B.id);
    if (L !== void 0 && L.parentId === null && B.parentId !== null && B.parentId !== void 0 && (L.parentId = B.parentId), L === void 0 && B.parentId !== void 0) {
      const W = e(this, E).getContext(B.parentId);
      n.BrowsingContextImpl.create(B.id, B.parentId, W.userContext, W.cdpTarget, e(this, p), e(this, E), e(this, c), B.url, void 0, e(this, x), e(this, C));
    }
    ($ = F.childFrames) == null || $.map((W) => T(this, k, Gn).call(this, W));
  }, /**
   * Heuristic checking if the error is due to the session being closed. If so, ignore the
   * error.
   */
  Ks = function(F) {
    const B = F;
    return B.code === -32001 && B.message === "Session with given id not found." || e(this, l).isCloseError(F);
  }, vc = function() {
    e(this, l).on("Network.requestWillBeSent", (F) => {
      F.loaderId === F.requestId && this.emit("frameStartedNavigating", {
        loaderId: F.loaderId,
        url: F.request.url,
        frameId: F.frameId
      });
    }), e(this, l).on("*", (F, B) => {
      typeof F == "string" && (e(this, p).registerEvent({
        type: "event",
        method: `goog:cdp.${F}`,
        params: {
          event: F,
          params: B,
          session: this.cdpSessionId
        }
      }, this.id), e(this, p).registerEvent({
        type: "event",
        method: `cdp.${F}`,
        params: {
          event: F,
          params: B,
          session: this.cdpSessionId
        }
      }, this.id));
    });
  }, bc = async function(F) {
    const B = [];
    if ((F.request || F.auth) && B.push({
      urlPattern: "*",
      requestStage: "Request"
    }), F.response && B.push({
      urlPattern: "*",
      requestStage: "Response"
    }), B.length) {
      const L = e(this, _);
      S(this, _, F);
      try {
        await e(this, l).sendCommand("Fetch.enable", {
          patterns: B,
          handleAuthRequests: F.auth
        });
      } catch {
        S(this, _, L);
      }
    }
  }, Cc = async function() {
    e(this, h).getRequestsByTarget(this).filter((B) => B.interceptPhase).length === 0 && (S(this, _, {
      request: !1,
      response: !1,
      auth: !1
    }), await e(this, l).sendCommand("Fetch.disable"));
  }, xc = async function() {
    await Promise.all(e(this, w).find({
      // Needed for OOPIF
      targetId: this.topLevelId,
      global: !0
    }).map((F) => F.initInTarget(this, !0)));
  }, K);
  return Fr.CdpTarget = a, Fr;
}
var Xa;
function dl() {
  var a, o, l, d, y, c, p, w, E, m, h, f, x, C, g, zs, Ec, Sc, Pc, _c, kc, Ws, I, Xn, Ic, Tc, Nc, j;
  if (Xa) return Tr;
  Xa = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.CdpTargetManager = void 0;
  const i = Be(), s = fc(), t = al(), r = ul(), n = {
    service_worker: "service-worker",
    shared_worker: "shared-worker",
    worker: "dedicated-worker"
  };
  let u = (j = class {
    constructor(B, L, $, W, Z, U, A, J, se, we, ye, te, M) {
      v(this, g);
      v(this, a);
      v(this, o);
      v(this, l, /* @__PURE__ */ new Set());
      v(this, d);
      v(this, y);
      v(this, c);
      v(this, p);
      v(this, w);
      v(this, E);
      v(this, m);
      v(this, h);
      v(this, f);
      v(this, x);
      v(this, C);
      v(this, I, /* @__PURE__ */ new Map());
      S(this, o, B), S(this, a, L), e(this, l).add($), S(this, d, $), S(this, y, W), S(this, c, Z), S(this, E, se), S(this, p, A), S(this, w, J), S(this, m, U), S(this, h, we), S(this, C, ye), S(this, x, te), S(this, f, M), T(this, g, zs).call(this, L);
    }
  }, a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakMap(), E = new WeakMap(), m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakSet(), /**
   * This method is called for each CDP session, since this class is responsible
   * for creating and destroying all targets and browsing contexts.
   */
  zs = function(B) {
    B.on("Target.attachedToTarget", (L) => {
      T(this, g, _c).call(this, L, B);
    }), B.on("Target.detachedFromTarget", T(this, g, Ic).bind(this)), B.on("Target.targetInfoChanged", T(this, g, Tc).bind(this)), B.on("Inspector.targetCrashed", () => {
      T(this, g, Nc).call(this, B);
    }), B.on("Page.frameAttached", T(this, g, Ec).bind(this)), B.on("Page.frameDetached", T(this, g, Sc).bind(this)), B.on("Page.frameSubtreeWillBeDetached", T(this, g, Pc).bind(this));
  }, Ec = function(B) {
    const L = e(this, c).findContext(B.parentFrameId);
    L !== void 0 && s.BrowsingContextImpl.create(
      B.frameId,
      B.parentFrameId,
      L.userContext,
      L.cdpTarget,
      e(this, y),
      e(this, c),
      e(this, m),
      // At this point, we don't know the URL of the frame yet, so it will be updated
      // later.
      "about:blank",
      void 0,
      e(this, x),
      e(this, f)
    );
  }, Sc = function(B) {
    var L;
    B.reason !== "swap" && ((L = e(this, c).findContext(B.frameId)) == null || L.dispose(!0));
  }, Pc = function(B) {
    var L;
    (L = e(this, c).findContext(B.frameId)) == null || L.dispose(!0);
  }, _c = function(B, L) {
    const { sessionId: $, targetInfo: W } = B, Z = e(this, o).getCdpClient($), U = async () => {
      await Z.sendCommand("Runtime.runIfWaitingForDebugger").then(() => L.sendCommand("Target.detachFromTarget", B)).catch((J) => {
        var se;
        return (se = e(this, f)) == null ? void 0 : se.call(this, i.LogType.debugError, J);
      });
    };
    if (e(this, d) === W.targetId) {
      U();
      return;
    }
    const A = W.type === "service_worker" ? `${L.sessionId}_${W.targetId}` : W.targetId;
    if (!e(this, l).has(A)) {
      switch (e(this, l).add(A), W.type) {
        case "tab":
          T(this, g, zs).call(this, Z), (async () => await Z.sendCommand("Target.setAutoAttach", {
            autoAttach: !0,
            waitForDebuggerOnStart: !0,
            flatten: !0
          }))();
          return;
        case "page":
        case "iframe": {
          const J = T(this, g, Ws).call(this, Z, L, W), se = e(this, c).findContext(W.targetId);
          if (se && W.type === "iframe")
            se.updateCdpTarget(J);
          else {
            const we = T(this, g, kc).call(this, W, L.sessionId), ye = W.browserContextId && W.browserContextId !== e(this, h) ? W.browserContextId : "default";
            s.BrowsingContextImpl.create(
              W.targetId,
              we,
              ye,
              J,
              e(this, y),
              e(this, c),
              e(this, m),
              // Hack: when a new target created, CDP emits targetInfoChanged with an empty
              // url, and navigates it to about:blank later. When the event is emitted for
              // an existing target (reconnect), the url is already known, and navigation
              // events will not be emitted anymore. Replacing empty url with `about:blank`
              // allows to handle both cases in the same way.
              // "7.3.2.1 Creating browsing contexts".
              // https://html.spec.whatwg.org/multipage/document-sequences.html#creating-browsing-contexts
              // TODO: check who to deal with non-null creator and its `creatorOrigin`.
              W.url === "" ? "about:blank" : W.url,
              W.openerFrameId ?? W.openerId,
              e(this, x),
              e(this, f)
            );
          }
          return;
        }
        case "service_worker":
        case "worker": {
          const J = e(this, m).findRealm({
            cdpSessionId: L.sessionId
          });
          if (!J) {
            U();
            return;
          }
          const se = T(this, g, Ws).call(this, Z, L, W);
          T(this, g, Xn).call(this, n[W.type], se, J);
          return;
        }
        // In CDP, we only emit shared workers on the browser and not the set of
        // frames that use the shared worker. If we change this in the future to
        // behave like service workers (emits on both browser and frame targets),
        // we can remove this block and merge service workers with the above one.
        case "shared_worker": {
          const J = T(this, g, Ws).call(this, Z, L, W);
          T(this, g, Xn).call(this, n[W.type], J);
          return;
        }
      }
      U();
    }
  }, /** Try to find the parent browsing context ID for the given attached target. */
  kc = function(B, L) {
    var W;
    if (B.type !== "iframe")
      return null;
    const $ = B.openerFrameId ?? B.openerId;
    return $ !== void 0 ? $ : L !== void 0 ? ((W = e(this, c).findContextBySession(L)) == null ? void 0 : W.id) ?? null : null;
  }, Ws = function(B, L, $) {
    T(this, g, zs).call(this, B);
    const W = r.CdpTarget.create($.targetId, B, e(this, a), L, e(this, m), e(this, y), e(this, E), e(this, c), e(this, p), e(this, C), e(this, x), e(this, f));
    return e(this, p).onCdpTargetCreated(W), e(this, w).onCdpTargetCreated(W), W;
  }, I = new WeakMap(), Xn = function(B, L, $) {
    L.cdpClient.on("Runtime.executionContextCreated", (W) => {
      const { uniqueId: Z, id: U, origin: A } = W.context, J = new t.WorkerRealm(L.cdpClient, e(this, y), U, e(this, f), (0, s.serializeOrigin)(A), $ ? [$] : [], Z, e(this, m), B);
      e(this, I).set(L.cdpSessionId, J);
    });
  }, Ic = function({ sessionId: B, targetId: L }) {
    L && e(this, E).find({ targetId: L }).map((Z) => {
      Z.dispose(L);
    });
    const $ = e(this, c).findContextBySession(B);
    if ($) {
      $.dispose(!0);
      return;
    }
    const W = e(this, I).get(B);
    W && e(this, m).deleteRealms({
      cdpSessionId: W.cdpClient.sessionId
    });
  }, Tc = function(B) {
    const L = e(this, c).findContext(B.targetInfo.targetId);
    L && L.onTargetInfoChanged(B);
  }, Nc = function(B) {
    const L = e(this, m).findRealms({
      cdpSessionId: B.sessionId
    });
    for (const $ of L)
      $.dispose();
  }, j);
  return Tr.CdpTargetManager = u, Tr;
}
var qr = {}, Ja;
function ll() {
  var r, n, u;
  if (Ja) return qr;
  Ja = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.BrowsingContextStorage = void 0;
  const i = Ce(), s = Zt();
  let t = (u = class {
    constructor() {
      /** Map from context ID to context implementation. */
      v(this, r, /* @__PURE__ */ new Map());
      /** Event emitter for browsing context storage eventsis not expected to be exposed to
       * the outside world. */
      v(this, n, new s.EventEmitter());
    }
    /** Gets all top-level contexts, i.e. those with no parent. */
    getTopLevelContexts() {
      return this.getAllContexts().filter((o) => o.isTopLevelContext());
    }
    /** Gets all contexts. */
    getAllContexts() {
      return Array.from(e(this, r).values());
    }
    /** Deletes the context with the given ID. */
    deleteContextById(o) {
      e(this, r).delete(o);
    }
    /** Deletes the given context. */
    deleteContext(o) {
      e(this, r).delete(o.id);
    }
    /** Tracks the given context. */
    addContext(o) {
      e(this, r).set(o.id, o), e(this, n).emit("added", {
        browsingContext: o
      });
    }
    /**
     * Waits for a context with the given ID to be added and returns it.
     */
    waitForContext(o) {
      return e(this, r).has(o) ? Promise.resolve(this.getContext(o)) : new Promise((l) => {
        const d = (y) => {
          y.browsingContext.id === o && (e(this, n).off("added", d), l(y.browsingContext));
        };
        e(this, n).on("added", d);
      });
    }
    /** Returns true whether there is an existing context with the given ID. */
    hasContext(o) {
      return e(this, r).has(o);
    }
    /** Gets the context with the given ID, if any. */
    findContext(o) {
      return e(this, r).get(o);
    }
    /** Returns the top-level context ID of the given context, if any. */
    findTopLevelContextId(o) {
      if (o === null)
        return null;
      const l = this.findContext(o);
      if (!l)
        return null;
      const d = l.parentId ?? null;
      return d === null ? o : this.findTopLevelContextId(d);
    }
    findContextBySession(o) {
      for (const l of e(this, r).values())
        if (l.cdpTarget.cdpSessionId === o)
          return l;
    }
    /** Gets the context with the given ID, if any, otherwise throws. */
    getContext(o) {
      const l = this.findContext(o);
      if (l === void 0)
        throw new i.NoSuchFrameException(`Context ${o} not found`);
      return l;
    }
    verifyTopLevelContextsList(o) {
      const l = /* @__PURE__ */ new Set();
      if (!o)
        return l;
      for (const d of o) {
        const y = this.getContext(d);
        if (y.isTopLevelContext())
          l.add(y);
        else
          throw new i.InvalidArgumentException(`Non top-level context '${d}' given.`);
      }
      return l;
    }
  }, r = new WeakMap(), n = new WeakMap(), u);
  return qr.BrowsingContextStorage = t, qr;
}
var Ar = {}, Lr = {}, Ur = {}, Ya;
function Rc() {
  var s, t;
  if (Ya) return Ur;
  Ya = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.DefaultMap = void 0;
  let i = (t = class extends Map {
    constructor(u, a) {
      super(a);
      /** The default value to return whenever a key is not present in the map. */
      v(this, s);
      S(this, s, u);
    }
    get(u) {
      return this.has(u) || this.set(u, e(this, s).call(this, u)), super.get(u);
    }
  }, s = new WeakMap(), t);
  return Ur.DefaultMap = i, Ur;
}
var Qa;
function hl() {
  var c, p, w, E, m, h, f, x, C, g, N, _, k, b, O, P, Jn, Dc, Mc, Oc, Fc, Qr, Ot, Yn, jc, Bc, qc, Qn, Ft, Ge, Vs, Zn, jt, Bt, qt, Gs, Ac, Lc, Uc, $c, Hc, Kc, zc, Xs, re, Wc;
  if (Qa) return Lr;
  Qa = 1;
  var i;
  Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.NetworkRequest = void 0;
  const s = Ce(), t = Pt(), r = Rc(), n = bn(), u = Be(), a = vn(), o = new RegExp('(?<=realm=").*(?=")');
  let l = (c = class {
    constructor(q, V, G, ee, ce = 0, fe) {
      v(this, P);
      /**
       * Each network request has an associated request id, which is a string
       * uniquely identifying that request.
       *
       * The identifier for a request resulting from a redirect matches that of the
       * request that initiated it.
       */
      v(this, p);
      v(this, w);
      /**
       * Indicates the network intercept phase, if the request is currently blocked.
       * Undefined necessarily implies that the request is not blocked.
       */
      v(this, E);
      v(this, m, !1);
      v(this, h);
      v(this, f, {});
      v(this, x);
      v(this, C);
      v(this, g, {});
      v(this, N);
      v(this, _);
      v(this, k);
      v(this, b);
      v(this, O, {
        [s.ChromiumBidi.Network.EventNames.AuthRequired]: !1,
        [s.ChromiumBidi.Network.EventNames.BeforeRequestSent]: !1,
        [s.ChromiumBidi.Network.EventNames.FetchError]: !1,
        [s.ChromiumBidi.Network.EventNames.ResponseCompleted]: !1,
        [s.ChromiumBidi.Network.EventNames.ResponseStarted]: !1
      });
      Y(this, "waitNextPhase", new n.Deferred());
      S(this, p, q), S(this, N, V), S(this, _, G), S(this, k, ee), S(this, h, ce), S(this, b, fe);
    }
    get id() {
      return e(this, p);
    }
    get fetchId() {
      return e(this, w);
    }
    /**
     * When blocked returns the phase for it
     */
    get interceptPhase() {
      return e(this, E);
    }
    get url() {
      var G, ee, ce, fe, ve, be, Me, Ie;
      const q = ((G = e(this, f).info) == null ? void 0 : G.request.urlFragment) ?? ((ee = e(this, f).paused) == null ? void 0 : ee.request.urlFragment) ?? "";
      return `${((ce = e(this, g).paused) == null ? void 0 : ce.request.url) ?? ((fe = e(this, x)) == null ? void 0 : fe.url) ?? ((ve = e(this, g).info) == null ? void 0 : ve.url) ?? ((be = e(this, f).auth) == null ? void 0 : be.request.url) ?? ((Me = e(this, f).info) == null ? void 0 : Me.request.url) ?? ((Ie = e(this, f).paused) == null ? void 0 : Ie.request.url) ?? i.unknownParameter}${q}`;
    }
    get redirectCount() {
      return e(this, h);
    }
    get cdpTarget() {
      return e(this, k);
    }
    get cdpClient() {
      return e(this, k).cdpClient;
    }
    isRedirecting() {
      return !!e(this, f).info;
    }
    handleRedirect(q) {
      e(this, g).hasExtraInfo = !1, e(this, g).info = q.redirectResponse, T(this, P, Ge).call(this, {
        wasRedirected: !0
      });
    }
    onRequestWillBeSentEvent(q) {
      e(this, f).info = q, T(this, P, Ge).call(this);
    }
    onRequestWillBeSentExtraInfoEvent(q) {
      e(this, f).extraInfo = q, T(this, P, Ge).call(this);
    }
    onResponseReceivedExtraInfoEvent(q) {
      q.statusCode >= 300 && q.statusCode <= 399 && e(this, f).info && q.headers.location === e(this, f).info.request.url || (e(this, g).extraInfo = q, T(this, P, Ge).call(this));
    }
    onResponseReceivedEvent(q) {
      e(this, g).hasExtraInfo = q.hasExtraInfo, e(this, g).info = q.response, T(this, P, Ge).call(this);
    }
    onServedFromCache() {
      S(this, m, !0), T(this, P, Ge).call(this);
    }
    onLoadingFailedEvent(q) {
      T(this, P, Ge).call(this, {
        hasFailed: !0
      }), T(this, P, Bt).call(this, () => ({
        method: s.ChromiumBidi.Network.EventNames.FetchError,
        params: {
          ...T(this, P, qt).call(this),
          errorText: q.errorText
        }
      }));
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
    async failRequest(q) {
      (0, t.assert)(e(this, w), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.failRequest", {
        requestId: e(this, w),
        errorReason: q
      }), S(this, E, void 0);
    }
    onRequestPaused(q) {
      S(this, w, q.requestId), q.responseStatusCode || q.responseErrorReason ? (e(this, g).paused = q, T(this, P, Ft).call(this, "responseStarted") && // CDP may emit multiple events for a single request
      !e(this, O)[s.ChromiumBidi.Network.EventNames.ResponseStarted] && // Continue all response that have not enabled Network domain
      e(this, w) !== this.id ? S(this, E, "responseStarted") : T(this, P, Zn).call(this)) : (e(this, f).paused = q, T(this, P, Ft).call(this, "beforeRequestSent") && // CDP may emit multiple events for a single request
      !e(this, O)[s.ChromiumBidi.Network.EventNames.BeforeRequestSent] && // Continue all requests that have not enabled Network domain
      e(this, w) !== this.id ? S(this, E, "beforeRequestSent") : T(this, P, Vs).call(this)), T(this, P, Ge).call(this);
    }
    onAuthRequired(q) {
      S(this, w, q.requestId), e(this, f).auth = q, T(this, P, Ft).call(this, "authRequired") && // Continue all auth requests that have not enabled Network domain
      e(this, w) !== this.id ? S(this, E, "authRequired") : T(this, P, jt).call(this, {
        response: "Default"
      }), T(this, P, Bt).call(this, () => ({
        method: s.ChromiumBidi.Network.EventNames.AuthRequired,
        params: {
          ...T(this, P, qt).call(this, "authRequired"),
          response: T(this, P, Gs).call(this)
        }
      }));
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
    async continueRequest(q = {}) {
      const V = T(this, P, Xs).call(this, q.headers, q.cookies), G = (0, a.cdpFetchHeadersFromBidiNetworkHeaders)(V), ee = d(q.body);
      await T(this, P, Vs).call(this, {
        url: q.url,
        method: q.method,
        headers: G,
        postData: ee
      }), S(this, x, {
        url: q.url,
        method: q.method,
        headers: q.headers,
        cookies: q.cookies,
        bodySize: y(q.body)
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
    async continueResponse(q = {}) {
      var V, G, ee;
      if (this.interceptPhase === "authRequired")
        if (q.credentials)
          await Promise.all([
            this.waitNextPhase,
            await T(this, P, jt).call(this, {
              response: "ProvideCredentials",
              username: q.credentials.username,
              password: q.credentials.password
            })
          ]);
        else
          return await T(this, P, jt).call(this, {
            response: "ProvideCredentials"
          });
      if (e(this, E) === "responseStarted") {
        const ce = T(this, P, Xs).call(this, q.headers, q.cookies), fe = (0, a.cdpFetchHeadersFromBidiNetworkHeaders)(ce);
        await T(this, P, Zn).call(this, {
          responseCode: q.statusCode ?? ((V = e(this, g).paused) == null ? void 0 : V.responseStatusCode),
          responsePhrase: q.reasonPhrase ?? ((G = e(this, g).paused) == null ? void 0 : G.responseStatusText),
          responseHeaders: fe ?? ((ee = e(this, g).paused) == null ? void 0 : ee.responseHeaders)
        }), S(this, C, {
          statusCode: q.statusCode,
          headers: ce
        });
      }
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
    async continueWithAuth(q) {
      let V, G;
      if (q.action === "provideCredentials") {
        const { credentials: ce } = q;
        V = ce.username, G = ce.password;
      }
      const ee = (0, a.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(q.action);
      await T(this, P, jt).call(this, {
        response: ee,
        username: V,
        password: G
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
    async provideResponse(q) {
      if ((0, t.assert)(e(this, w), "Network Interception not set-up."), this.interceptPhase === "authRequired")
        return await T(this, P, jt).call(this, {
          response: "ProvideCredentials"
        });
      if (!q.body && !q.headers)
        return await T(this, P, Vs).call(this);
      const V = T(this, P, Xs).call(this, q.headers, q.cookies), G = (0, a.cdpFetchHeadersFromBidiNetworkHeaders)(V), ee = q.statusCode ?? e(this, P, Ot) ?? 200;
      await this.cdpClient.sendCommand("Fetch.fulfillRequest", {
        requestId: e(this, w),
        responseCode: ee,
        responsePhrase: q.reasonPhrase,
        responseHeaders: G,
        body: d(q.body)
      }), S(this, E, void 0);
    }
    dispose() {
      this.waitNextPhase.reject(new Error("waitNextPhase disposed"));
    }
  }, p = new WeakMap(), w = new WeakMap(), E = new WeakMap(), m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakMap(), k = new WeakMap(), b = new WeakMap(), O = new WeakMap(), P = new WeakSet(), Jn = function() {
    return this.url.startsWith("data:");
  }, Dc = function() {
    var q, V, G, ee, ce;
    return ((q = e(this, x)) == null ? void 0 : q.method) ?? ((V = e(this, f).info) == null ? void 0 : V.request.method) ?? ((G = e(this, f).paused) == null ? void 0 : G.request.method) ?? ((ee = e(this, f).auth) == null ? void 0 : ee.request.method) ?? ((ce = e(this, g).paused) == null ? void 0 : ce.request.method);
  }, Mc = function() {
    return !e(this, f).info || !e(this, f).info.loaderId || // When we navigate all CDP network events have `loaderId`
    // CDP's `loaderId` and `requestId` match when
    // that request triggered the loading
    e(this, f).info.loaderId !== e(this, f).info.requestId ? null : e(this, _).getNavigationId(e(this, P, Qr) ?? void 0);
  }, Oc = function() {
    let q = [];
    return e(this, f).extraInfo && (q = e(this, f).extraInfo.associatedCookies.filter(({ blockedReasons: V }) => !Array.isArray(V) || V.length === 0).map(({ cookie: V }) => (0, a.cdpToBiDiCookie)(V))), q;
  }, Fc = function() {
    var V, G;
    let q = 0;
    return typeof ((V = e(this, x)) == null ? void 0 : V.bodySize) == "number" ? q = e(this, x).bodySize : q = (0, a.bidiBodySizeFromCdpPostDataEntries)(((G = e(this, f).info) == null ? void 0 : G.request.postDataEntries) ?? []), q;
  }, Qr = function() {
    var q, V, G, ee;
    return ((q = e(this, g).paused) == null ? void 0 : q.frameId) ?? ((V = e(this, f).info) == null ? void 0 : V.frameId) ?? ((G = e(this, f).paused) == null ? void 0 : G.frameId) ?? ((ee = e(this, f).auth) == null ? void 0 : ee.frameId) ?? null;
  }, Ot = function() {
    var q, V, G, ee;
    return ((q = e(this, C)) == null ? void 0 : q.statusCode) ?? ((V = e(this, g).paused) == null ? void 0 : V.responseStatusCode) ?? ((G = e(this, g).extraInfo) == null ? void 0 : G.statusCode) ?? ((ee = e(this, g).info) == null ? void 0 : ee.status);
  }, Yn = function() {
    var V, G, ee;
    let q = [];
    if ((V = e(this, x)) != null && V.headers) {
      const ce = new r.DefaultMap(() => []);
      for (const fe of e(this, x).headers)
        ce.get(fe.name).push(fe.value.value);
      for (const [fe, ve] of ce.entries())
        q.push({
          name: fe,
          value: {
            type: "string",
            value: ve.join(`
`).trimEnd()
          }
        });
    } else
      q = [
        ...(0, a.bidiNetworkHeadersFromCdpNetworkHeaders)((G = e(this, f).info) == null ? void 0 : G.request.headers),
        ...(0, a.bidiNetworkHeadersFromCdpNetworkHeaders)((ee = e(this, f).extraInfo) == null ? void 0 : ee.headers)
      ];
    return q;
  }, jc = function() {
    var G;
    if (!e(this, g).info || !(e(this, P, Ot) === 401 || e(this, P, Ot) === 407))
      return;
    const q = e(this, P, Ot) === 401 ? "WWW-Authenticate" : "Proxy-Authenticate", V = [];
    for (const [ee, ce] of Object.entries(e(this, g).info.headers))
      ee.localeCompare(q, void 0, { sensitivity: "base" }) === 0 && V.push({
        scheme: ce.split(" ").at(0) ?? "",
        realm: ((G = ce.match(o)) == null ? void 0 : G.at(0)) ?? ""
      });
    return V;
  }, Bc = function() {
    var V, G, ee, ce, fe, ve, be, Me, Ie, We, tr, rr, sr, nr, Fi, ji, Bi, qi, Ai, Li, Ui, $i;
    const q = (0, a.getTiming)((0, a.getTiming)((G = (V = e(this, g).info) == null ? void 0 : V.timing) == null ? void 0 : G.requestTime) - (0, a.getTiming)((ee = e(this, f).info) == null ? void 0 : ee.timestamp));
    return {
      // TODO: Verify this is correct
      timeOrigin: Math.round((0, a.getTiming)((ce = e(this, f).info) == null ? void 0 : ce.wallTime) * 1e3),
      // Timing baseline.
      // TODO: Verify this is correct.
      requestTime: 0,
      // TODO: set if redirect detected.
      redirectStart: 0,
      // TODO: set if redirect detected.
      redirectEnd: 0,
      // TODO: Verify this is correct
      // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=145
      fetchStart: (0, a.getTiming)((ve = (fe = e(this, g).info) == null ? void 0 : fe.timing) == null ? void 0 : ve.workerFetchStart, q),
      // fetchStart: 0,
      dnsStart: (0, a.getTiming)((Me = (be = e(this, g).info) == null ? void 0 : be.timing) == null ? void 0 : Me.dnsStart, q),
      dnsEnd: (0, a.getTiming)((We = (Ie = e(this, g).info) == null ? void 0 : Ie.timing) == null ? void 0 : We.dnsEnd, q),
      connectStart: (0, a.getTiming)((rr = (tr = e(this, g).info) == null ? void 0 : tr.timing) == null ? void 0 : rr.connectStart, q),
      connectEnd: (0, a.getTiming)((nr = (sr = e(this, g).info) == null ? void 0 : sr.timing) == null ? void 0 : nr.connectEnd, q),
      tlsStart: (0, a.getTiming)((ji = (Fi = e(this, g).info) == null ? void 0 : Fi.timing) == null ? void 0 : ji.sslStart, q),
      requestStart: (0, a.getTiming)((qi = (Bi = e(this, g).info) == null ? void 0 : Bi.timing) == null ? void 0 : qi.sendStart, q),
      // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=196
      responseStart: (0, a.getTiming)((Li = (Ai = e(this, g).info) == null ? void 0 : Ai.timing) == null ? void 0 : Li.receiveHeadersStart, q),
      responseEnd: (0, a.getTiming)(($i = (Ui = e(this, g).info) == null ? void 0 : Ui.timing) == null ? void 0 : $i.receiveHeadersEnd, q)
    };
  }, qc = function() {
    this.waitNextPhase.resolve(), this.waitNextPhase = new n.Deferred();
  }, Qn = function(q) {
    return e(this, k).isSubscribedTo(`network.${q}`) ? e(this, _).getInterceptsForPhase(this, q) : /* @__PURE__ */ new Set();
  }, Ft = function(q) {
    return T(this, P, Qn).call(this, q).size > 0;
  }, Ge = function(q = {}) {
    const V = (
      // Flush redirects
      q.wasRedirected || q.hasFailed || T(this, P, Jn).call(this) || !!e(this, f).extraInfo || // Requests from cache don't have extra info
      e(this, m) || // Sometimes there is no extra info and the response
      // is the only place we can find out
      !!(e(this, g).info && !e(this, g).hasExtraInfo)
    ), G = (
      // We can't intercept data urls from CDP
      T(this, P, Jn).call(this) || // Cached requests never hit the network
      e(this, m)
    ), ee = !G && T(this, P, Ft).call(this, "beforeRequestSent"), ce = !ee || ee && !!e(this, f).paused;
    e(this, f).info && (ee ? ce : V) && T(this, P, Bt).call(this, T(this, P, $c).bind(this));
    const fe = !!e(this, g).extraInfo || // Response from cache don't have extra info
    e(this, m) || // Don't expect extra info if the flag is false
    !!(e(this, g).info && !e(this, g).hasExtraInfo), ve = !G && T(this, P, Ft).call(this, "responseStarted");
    (e(this, g).info || ve && e(this, g).paused) && T(this, P, Bt).call(this, T(this, P, Hc).bind(this));
    const be = !ve || ve && !!e(this, g).paused;
    e(this, g).info && fe && be && (T(this, P, Bt).call(this, T(this, P, Kc).bind(this)), e(this, _).deleteRequest(this.id));
  }, Vs = async function(q = {}) {
    (0, t.assert)(e(this, w), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.continueRequest", {
      requestId: e(this, w),
      url: q.url,
      method: q.method,
      headers: q.headers,
      postData: q.postData
    }), S(this, E, void 0);
  }, Zn = async function({ responseCode: q, responsePhrase: V, responseHeaders: G } = {}) {
    (0, t.assert)(e(this, w), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.continueResponse", {
      requestId: e(this, w),
      responseCode: q,
      responsePhrase: V,
      responseHeaders: G
    }), S(this, E, void 0);
  }, jt = async function(q) {
    (0, t.assert)(e(this, w), "Network Interception not set-up."), await this.cdpClient.sendCommand("Fetch.continueWithAuth", {
      requestId: e(this, w),
      authChallengeResponse: q
    }), S(this, E, void 0);
  }, Bt = function(q) {
    var G;
    let V;
    try {
      V = q();
    } catch (ee) {
      (G = e(this, b)) == null || G.call(this, u.LogType.debugError, ee);
      return;
    }
    T(this, P, zc).call(this) || e(this, O)[V.method] && // Special case this event can be emitted multiple times
    V.method !== s.ChromiumBidi.Network.EventNames.AuthRequired || (T(this, P, qc).call(this), e(this, O)[V.method] = !0, e(this, P, Qr) ? e(this, N).registerEvent(Object.assign(V, {
      type: "event"
    }), e(this, P, Qr)) : e(this, N).registerGlobalEvent(Object.assign(V, {
      type: "event"
    })));
  }, qt = function(q) {
    var G;
    const V = {
      isBlocked: !1
    };
    if (q) {
      const ee = T(this, P, Qn).call(this, q);
      V.isBlocked = ee.size > 0, V.isBlocked && (V.intercepts = [...ee]);
    }
    return {
      context: e(this, P, Qr),
      navigation: e(this, P, Mc),
      redirectCount: e(this, h),
      request: T(this, P, Ac).call(this),
      // Timestamp should be in milliseconds, while CDP provides it in seconds.
      timestamp: Math.round((0, a.getTiming)((G = e(this, f).info) == null ? void 0 : G.wallTime) * 1e3),
      // Contains isBlocked and intercepts
      ...V
    };
  }, Gs = function() {
    var ee, ce, fe, ve, be, Me, Ie, We, tr, rr, sr, nr;
    (ee = e(this, g).info) != null && ee.fromDiskCache && (e(this, g).extraInfo = void 0);
    const q = [
      ...(0, a.bidiNetworkHeadersFromCdpNetworkHeaders)((ce = e(this, g).info) == null ? void 0 : ce.headers),
      ...(0, a.bidiNetworkHeadersFromCdpNetworkHeaders)((fe = e(this, g).extraInfo) == null ? void 0 : fe.headers)
      // TODO: Verify how to dedupe these
      // ...bidiNetworkHeadersFromCdpNetworkHeadersEntries(
      //   this.#response.paused?.responseHeaders
      // ),
    ], V = e(this, P, jc);
    return {
      ...{
        url: this.url,
        protocol: ((ve = e(this, g).info) == null ? void 0 : ve.protocol) ?? "",
        status: e(this, P, Ot) ?? -1,
        // TODO: Throw an exception or use some other status code?
        statusText: ((be = e(this, g).info) == null ? void 0 : be.statusText) || ((Me = e(this, g).paused) == null ? void 0 : Me.responseStatusText) || "",
        fromCache: ((Ie = e(this, g).info) == null ? void 0 : Ie.fromDiskCache) || ((We = e(this, g).info) == null ? void 0 : We.fromPrefetchCache) || e(this, m),
        headers: ((tr = e(this, C)) == null ? void 0 : tr.headers) ?? q,
        mimeType: ((rr = e(this, g).info) == null ? void 0 : rr.mimeType) || "",
        bytesReceived: ((sr = e(this, g).info) == null ? void 0 : sr.encodedDataLength) || 0,
        headersSize: (0, a.computeHeadersSize)(q),
        // TODO: consider removing from spec.
        bodySize: 0,
        content: {
          // TODO: consider removing from spec.
          size: 0
        },
        ...V ? { authChallenges: V } : {}
      },
      "goog:securityDetails": (nr = e(this, g).info) == null ? void 0 : nr.securityDetails
    };
  }, Ac = function() {
    var G, ee, ce, fe, ve, be;
    const q = e(this, P, Yn);
    return {
      ...{
        request: e(this, p),
        url: this.url,
        method: e(this, P, Dc) ?? i.unknownParameter,
        headers: q,
        cookies: e(this, P, Oc),
        headersSize: (0, a.computeHeadersSize)(q),
        bodySize: e(this, P, Fc),
        // TODO: populate
        destination: T(this, P, Lc).call(this),
        // TODO: populate
        initiatorType: T(this, P, Uc).call(this),
        timings: e(this, P, Bc)
      },
      "goog:postData": (ee = (G = e(this, f).info) == null ? void 0 : G.request) == null ? void 0 : ee.postData,
      "goog:hasPostData": (fe = (ce = e(this, f).info) == null ? void 0 : ce.request) == null ? void 0 : fe.hasPostData,
      "goog:resourceType": (ve = e(this, f).info) == null ? void 0 : ve.type,
      "goog:resourceInitiator": (be = e(this, f).info) == null ? void 0 : be.initiator
    };
  }, /**
   * Heuristic trying to guess the destination.
   * Specification: https://fetch.spec.whatwg.org/#concept-request-destination.
   * Specified values: "audio", "audioworklet", "document", "embed", "font", "frame",
   * "iframe", "image", "json", "manifest", "object", "paintworklet", "report", "script",
   * "serviceworker", "sharedworker", "style", "track", "video", "webidentity", "worker",
   * "xslt".
   */
  Lc = function() {
    var q, V;
    switch ((q = e(this, f).info) == null ? void 0 : q.type) {
      case "Script":
        return "script";
      case "Stylesheet":
        return "style";
      case "Image":
        return "image";
      case "Document":
        return ((V = e(this, f).info) == null ? void 0 : V.initiator.type) === "parser" ? "iframe" : "";
      default:
        return "";
    }
  }, /**
   * Heuristic trying to guess the initiator type.
   * Specification: https://fetch.spec.whatwg.org/#request-initiator-type.
   * Specified values: "audio", "beacon", "body", "css", "early-hints", "embed", "fetch",
   * "font", "frame", "iframe", "image", "img", "input", "link", "object", "ping",
   * "script", "track", "video", "xmlhttprequest", "other".
   */
  Uc = function() {
    var q, V, G, ee, ce, fe, ve, be, Me, Ie;
    if (((q = e(this, f).info) == null ? void 0 : q.initiator.type) === "parser")
      switch ((V = e(this, f).info) == null ? void 0 : V.type) {
        case "Document":
          return "iframe";
        case "Font":
          return ((ee = (G = e(this, f).info) == null ? void 0 : G.initiator) == null ? void 0 : ee.url) === ((ce = e(this, f).info) == null ? void 0 : ce.documentURL) ? "font" : "css";
        case "Image":
          return ((ve = (fe = e(this, f).info) == null ? void 0 : fe.initiator) == null ? void 0 : ve.url) === ((be = e(this, f).info) == null ? void 0 : be.documentURL) ? "img" : "css";
        case "Script":
          return "script";
        case "Stylesheet":
          return "link";
        default:
          return null;
      }
    return ((Ie = (Me = e(this, f)) == null ? void 0 : Me.info) == null ? void 0 : Ie.type) === "Fetch" ? "fetch" : null;
  }, $c = function() {
    var q;
    return (0, t.assert)(e(this, f).info, "RequestWillBeSentEvent is not set"), {
      method: s.ChromiumBidi.Network.EventNames.BeforeRequestSent,
      params: {
        ...T(this, P, qt).call(this, "beforeRequestSent"),
        initiator: {
          type: T(q = i, re, Wc).call(q, e(this, f).info.initiator.type),
          columnNumber: e(this, f).info.initiator.columnNumber,
          lineNumber: e(this, f).info.initiator.lineNumber,
          stackTrace: e(this, f).info.initiator.stack,
          request: e(this, f).info.initiator.requestId
        }
      }
    };
  }, Hc = function() {
    return {
      method: s.ChromiumBidi.Network.EventNames.ResponseStarted,
      params: {
        ...T(this, P, qt).call(this, "responseStarted"),
        response: T(this, P, Gs).call(this)
      }
    };
  }, Kc = function() {
    return {
      method: s.ChromiumBidi.Network.EventNames.ResponseCompleted,
      params: {
        ...T(this, P, qt).call(this),
        response: T(this, P, Gs).call(this)
      }
    };
  }, zc = function() {
    var V, G;
    const q = "/favicon.ico";
    return ((V = e(this, f).paused) == null ? void 0 : V.request.url.endsWith(q)) ?? ((G = e(this, f).info) == null ? void 0 : G.request.url.endsWith(q)) ?? !1;
  }, Xs = function(q, V) {
    if (!q && !V)
      return;
    let G = q;
    const ee = (0, a.networkHeaderFromCookieHeaders)(V);
    return ee && !G && (G = e(this, P, Yn)), ee && G && (G.filter((ce) => ce.name.localeCompare("cookie", void 0, {
      sensitivity: "base"
    }) !== 0), G.push(ee)), G;
  }, re = new WeakSet(), Wc = function(q) {
    switch (q) {
      case "parser":
      case "script":
      case "preflight":
        return q;
      default:
        return "other";
    }
  }, v(c, re), Y(c, "unknownParameter", "UNKNOWN"), c);
  Lr.NetworkRequest = l, i = l;
  function d(ue) {
    let q;
    return (ue == null ? void 0 : ue.type) === "string" ? q = btoa(ue.value) : (ue == null ? void 0 : ue.type) === "base64" && (q = ue.value), q;
  }
  function y(ue) {
    return (ue == null ? void 0 : ue.type) === "string" ? ue.value.length : (ue == null ? void 0 : ue.type) === "base64" ? atob(ue.value).length : 0;
  }
  return Lr;
}
var Za;
function pl() {
  var u, a, o, l, d, y, c, Le, w;
  if (Za) return Ar;
  Za = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.NetworkStorage = void 0;
  const i = Ce(), s = er(), t = hl(), r = vn();
  let n = (w = class {
    constructor(m, h, f, x) {
      v(this, c);
      v(this, u);
      v(this, a);
      v(this, o);
      /**
       * A map from network request ID to Network Request objects.
       * Needed as long as information about requests comes from different events.
       */
      v(this, l, /* @__PURE__ */ new Map());
      /** A map from intercept ID to track active network intercepts. */
      v(this, d, /* @__PURE__ */ new Map());
      v(this, y, "default");
      S(this, u, h), S(this, a, m), f.on("Target.detachedFromTarget", ({ sessionId: C }) => {
        this.disposeRequestMap(C);
      }), S(this, o, x);
    }
    onCdpTargetCreated(m) {
      const h = m.cdpClient, f = [
        [
          "Network.requestWillBeSent",
          (x) => {
            const C = this.getRequestById(x.requestId);
            C && C.isRedirecting() ? (C.handleRedirect(x), this.deleteRequest(x.requestId), T(this, c, Le).call(this, x.requestId, m, C.redirectCount + 1).onRequestWillBeSentEvent(x)) : T(this, c, Le).call(this, x.requestId, m).onRequestWillBeSentEvent(x);
          }
        ],
        [
          "Network.requestWillBeSentExtraInfo",
          (x) => {
            T(this, c, Le).call(this, x.requestId, m).onRequestWillBeSentExtraInfoEvent(x);
          }
        ],
        [
          "Network.responseReceived",
          (x) => {
            T(this, c, Le).call(this, x.requestId, m).onResponseReceivedEvent(x);
          }
        ],
        [
          "Network.responseReceivedExtraInfo",
          (x) => {
            T(this, c, Le).call(this, x.requestId, m).onResponseReceivedExtraInfoEvent(x);
          }
        ],
        [
          "Network.requestServedFromCache",
          (x) => {
            T(this, c, Le).call(this, x.requestId, m).onServedFromCache();
          }
        ],
        [
          "Network.loadingFailed",
          (x) => {
            T(this, c, Le).call(this, x.requestId, m).onLoadingFailedEvent(x);
          }
        ],
        [
          "Fetch.requestPaused",
          (x) => {
            T(this, c, Le).call(
              this,
              // CDP quirk if the Network domain is not present this is undefined
              x.networkId ?? x.requestId,
              m
            ).onRequestPaused(x);
          }
        ],
        [
          "Fetch.authRequired",
          (x) => {
            let C = this.getRequestByFetchId(x.requestId);
            C || (C = T(this, c, Le).call(this, x.requestId, m)), C.onAuthRequired(x);
          }
        ]
      ];
      for (const [x, C] of f)
        h.on(x, C);
    }
    getInterceptionStages(m) {
      const h = {
        request: !1,
        response: !1,
        auth: !1
      };
      for (const f of e(this, d).values())
        f.contexts && !f.contexts.includes(m) || (h.request || (h.request = f.phases.includes(
          "beforeRequestSent"
          /* Network.InterceptPhase.BeforeRequestSent */
        )), h.response || (h.response = f.phases.includes(
          "responseStarted"
          /* Network.InterceptPhase.ResponseStarted */
        )), h.auth || (h.auth = f.phases.includes(
          "authRequired"
          /* Network.InterceptPhase.AuthRequired */
        )));
      return h;
    }
    getInterceptsForPhase(m, h) {
      if (m.url === t.NetworkRequest.unknownParameter)
        return /* @__PURE__ */ new Set();
      const f = /* @__PURE__ */ new Set();
      for (const [x, C] of e(this, d).entries())
        if (!(!C.phases.includes(h) || C.contexts && !C.contexts.includes(m.cdpTarget.topLevelId))) {
          if (C.urlPatterns.length === 0) {
            f.add(x);
            continue;
          }
          for (const g of C.urlPatterns)
            if ((0, r.matchUrlPattern)(g, m.url)) {
              f.add(x);
              break;
            }
        }
      return f;
    }
    disposeRequestMap(m) {
      for (const h of e(this, l).values())
        h.cdpClient.sessionId === m && (e(this, l).delete(h.id), h.dispose());
    }
    /**
     * Adds the given entry to the intercept map.
     * URL patterns are assumed to be parsed.
     *
     * @return The intercept ID.
     */
    addIntercept(m) {
      const h = (0, s.uuidv4)();
      return e(this, d).set(h, m), h;
    }
    /**
     * Removes the given intercept from the intercept map.
     * Throws NoSuchInterceptException if the intercept does not exist.
     */
    removeIntercept(m) {
      if (!e(this, d).has(m))
        throw new i.NoSuchInterceptException(`Intercept '${m}' does not exist.`);
      e(this, d).delete(m);
    }
    getRequestsByTarget(m) {
      const h = [];
      for (const f of e(this, l).values())
        f.cdpTarget === m && h.push(f);
      return h;
    }
    getRequestById(m) {
      return e(this, l).get(m);
    }
    getRequestByFetchId(m) {
      for (const h of e(this, l).values())
        if (h.fetchId === m)
          return h;
    }
    addRequest(m) {
      e(this, l).set(m.id, m);
    }
    deleteRequest(m) {
      e(this, l).delete(m);
    }
    /**
     * Gets the virtual navigation ID for the given navigable ID.
     */
    getNavigationId(m) {
      var h;
      return m === void 0 ? null : ((h = e(this, u).findContext(m)) == null ? void 0 : h.navigationId) ?? null;
    }
    set defaultCacheBehavior(m) {
      S(this, y, m);
    }
    get defaultCacheBehavior() {
      return e(this, y);
    }
  }, u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakSet(), /**
   * Gets the network request with the given ID, if any.
   * Otherwise, creates a new network request with the given ID and cdp target.
   */
  Le = function(m, h, f) {
    let x = this.getRequestById(m);
    return x || (x = new t.NetworkRequest(m, e(this, a), this, h, f, e(this, o)), this.addRequest(x), x);
  }, w);
  return Ar.NetworkStorage = n, Ar;
}
var $r = {}, eo;
function fl() {
  var s, t;
  if (eo) return $r;
  eo = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.PreloadScriptStorage = void 0;
  let i = (t = class {
    constructor() {
      /** Tracks all BiDi preload scripts.  */
      v(this, s, /* @__PURE__ */ new Set());
    }
    /**
     * Finds all entries that match the given filter (OR logic).
     */
    find(n) {
      return n ? [...e(this, s)].filter((u) => !!(n.id !== void 0 && n.id === u.id || n.targetId !== void 0 && u.targetIds.has(n.targetId) || n.global !== void 0 && // Global scripts have no contexts
      (n.global && u.contexts === void 0 || // Non global scripts always have contexts
      !n.global && u.contexts !== void 0))) : [...e(this, s)];
    }
    add(n) {
      e(this, s).add(n);
    }
    /** Deletes all BiDi preload script entries that match the given filter. */
    remove(n) {
      for (const u of this.find(n))
        e(this, s).delete(u);
    }
  }, s = new WeakMap(), t);
  return $r.PreloadScriptStorage = i, $r;
}
var Hr = {}, to;
function ml() {
  var r, n, u;
  if (to) return Hr;
  to = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.RealmStorage = void 0;
  const i = Ce(), s = ac();
  let t = (u = class {
    constructor() {
      /** Tracks handles and their realms sent to the client. */
      v(this, r, /* @__PURE__ */ new Map());
      /** Map from realm ID to Realm. */
      v(this, n, /* @__PURE__ */ new Map());
    }
    get knownHandlesToRealmMap() {
      return e(this, r);
    }
    addRealm(o) {
      e(this, n).set(o.realmId, o);
    }
    /** Finds all realms that match the given filter. */
    findRealms(o) {
      return Array.from(e(this, n).values()).filter((l) => !(o.realmId !== void 0 && o.realmId !== l.realmId || o.browsingContextId !== void 0 && !l.associatedBrowsingContexts.map((d) => d.id).includes(o.browsingContextId) || o.sandbox !== void 0 && (!(l instanceof s.WindowRealm) || o.sandbox !== l.sandbox) || o.executionContextId !== void 0 && o.executionContextId !== l.executionContextId || o.origin !== void 0 && o.origin !== l.origin || o.type !== void 0 && o.type !== l.realmType || o.cdpSessionId !== void 0 && o.cdpSessionId !== l.cdpClient.sessionId));
    }
    findRealm(o) {
      const l = this.findRealms(o);
      if (l.length === 1)
        return l[0];
    }
    /** Gets the only realm that matches the given filter, if any, otherwise throws. */
    getRealm(o) {
      const l = this.findRealm(o);
      if (l === void 0)
        throw new i.NoSuchFrameException(`Realm ${JSON.stringify(o)} not found`);
      return l;
    }
    /** Deletes all realms that match the given filter. */
    deleteRealms(o) {
      this.findRealms(o).map((l) => {
        l.dispose(), e(this, n).delete(l.realmId), Array.from(this.knownHandlesToRealmMap.entries()).filter(([, d]) => d === l.realmId).map(([d]) => this.knownHandlesToRealmMap.delete(d));
      });
    }
  }, r = new WeakMap(), n = new WeakMap(), u);
  return Hr.RealmStorage = t, Hr;
}
var Kr = {}, zr = {}, ro;
function gl() {
  var s, t, r;
  if (ro) return zr;
  ro = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.Buffer = void 0;
  class i {
    /**
     * @param capacity The buffer capacity.
     * @param onItemRemoved Delegate called for each removed element.
     */
    constructor(u, a) {
      v(this, s);
      v(this, t, []);
      v(this, r);
      S(this, s, u), S(this, r, a);
    }
    get() {
      return e(this, t);
    }
    add(u) {
      var a;
      for (e(this, t).push(u); e(this, t).length > e(this, s); ) {
        const o = e(this, t).shift();
        o !== void 0 && ((a = e(this, r)) == null || a.call(this, o));
      }
    }
  }
  return s = new WeakMap(), t = new WeakMap(), r = new WeakMap(), zr.Buffer = i, zr;
}
var Wr = {}, so;
function wl() {
  var s, t, r;
  if (so) return Wr;
  so = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.IdWrapper = void 0;
  let i = (s = class {
    constructor() {
      v(this, r);
      S(this, r, ++Hi(s, t)._);
    }
    get id() {
      return e(this, r);
    }
  }, t = new WeakMap(), r = new WeakMap(), v(s, t, 0), s);
  return Wr.IdWrapper = i, Wr;
}
var Nt = {}, no;
function yl() {
  if (no) return Nt;
  no = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.isCdpEvent = s, Nt.isDeprecatedCdpEvent = t, Nt.assertSupportedEvent = r;
  const i = Ce();
  function s(n) {
    var u;
    return ((u = n.split(".").at(0)) == null ? void 0 : u.startsWith(i.ChromiumBidi.BiDiModule.Cdp)) ?? !1;
  }
  function t(n) {
    var u;
    return ((u = n.split(".").at(0)) == null ? void 0 : u.startsWith(i.ChromiumBidi.BiDiModule.DeprecatedCdp)) ?? !1;
  }
  function r(n) {
    if (!i.ChromiumBidi.EVENT_NAMES.has(n) && !s(n) && !t(n))
      throw new i.InvalidArgumentException(`Unknown event: ${n}`);
  }
  return Nt;
}
var tt = {}, io;
function vl() {
  var l, d, y, Js, p;
  if (io) return tt;
  io = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.SubscriptionManager = void 0, tt.cartesianProduct = t, tt.unrollEvents = r, tt.difference = a;
  const i = Ce(), s = er();
  function t(...w) {
    return w.reduce((E, m) => E.flatMap((h) => m.map((f) => [h, f].flat())));
  }
  function r(w) {
    const E = /* @__PURE__ */ new Set();
    function m(h) {
      for (const f of h)
        E.add(f);
    }
    for (const h of w)
      switch (h) {
        case i.ChromiumBidi.BiDiModule.Bluetooth:
          m(Object.values(i.ChromiumBidi.Bluetooth.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.BrowsingContext:
          m(Object.values(i.ChromiumBidi.BrowsingContext.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Log:
          m(Object.values(i.ChromiumBidi.Log.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Network:
          m(Object.values(i.ChromiumBidi.Network.EventNames));
          break;
        case i.ChromiumBidi.BiDiModule.Script:
          m(Object.values(i.ChromiumBidi.Script.EventNames));
          break;
        default:
          E.add(h);
      }
    return [...E.values()];
  }
  let n = (p = class {
    constructor(E) {
      v(this, y);
      v(this, l, []);
      v(this, d);
      S(this, d, E);
    }
    getChannelsSubscribedToEvent(E, m) {
      const h = /* @__PURE__ */ new Map();
      for (const f of e(this, l))
        T(this, y, Js).call(this, f, E, m) && h.set(JSON.stringify(f.channel), f.channel);
      return Array.from(h.values());
    }
    getChannelsSubscribedToEventGlobally(E) {
      const m = /* @__PURE__ */ new Map();
      for (const h of e(this, l))
        T(this, y, Js).call(this, h, E) && m.set(JSON.stringify(h.channel), h.channel);
      return Array.from(m.values());
    }
    isSubscribedTo(E, m) {
      for (const h of e(this, l))
        if (T(this, y, Js).call(this, h, E, m))
          return !0;
      return !1;
    }
    /**
     * Subscribes to event in the given context and channel.
     * @param {EventNames} event
     * @param {BrowsingContext.BrowsingContext | null} contextId
     * @param {BidiPlusChannel} channel
     * @return {SubscriptionItem[]} List of
     * subscriptions. If the event is a whole module, it will return all the specific
     * events. If the contextId is null, it will return all the top-level contexts which were
     * not subscribed before the command.
     */
    subscribe(E, m, h) {
      const f = {
        id: (0, s.uuidv4)(),
        eventNames: new Set(r(E)),
        topLevelTraversableIds: new Set(m.map((x) => {
          const C = e(this, d).findTopLevelContextId(x);
          if (!C)
            throw new i.NoSuchFrameException(`Top-level navigable not found for context id ${x}`);
          return C;
        })),
        channel: h
      };
      return e(this, l).push(f), f;
    }
    /**
     * Unsubscribes atomically from all events in the given contexts and channel.
     *
     * This is a legacy spec branch to unsubscribe by attributes.
     */
    unsubscribe(E, m, h) {
      const f = new Set(r(E));
      for (const k of m)
        e(this, d).getContext(k);
      const x = new Set(m.map((k) => {
        const b = e(this, d).findTopLevelContextId(k);
        if (!b)
          throw new i.NoSuchFrameException(`Top-level navigable not found for context id ${k}`);
        return b;
      })), C = x.size === 0, g = [], N = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      for (const k of e(this, l)) {
        if (JSON.stringify(k.channel) !== JSON.stringify(h)) {
          g.push(k);
          continue;
        }
        if (u(k.eventNames, f).size === 0) {
          g.push(k);
          continue;
        }
        if (C) {
          if (k.topLevelTraversableIds.size !== 0) {
            g.push(k);
            continue;
          }
          const b = new Set(k.eventNames);
          for (const O of f)
            b.has(O) && (N.add(O), b.delete(O));
          b.size !== 0 && g.push({
            ...k,
            eventNames: b
          });
        } else {
          if (k.topLevelTraversableIds.size === 0) {
            g.push(k);
            continue;
          }
          const b = /* @__PURE__ */ new Map();
          for (const O of k.eventNames)
            b.set(O, new Set(k.topLevelTraversableIds));
          for (const O of f) {
            const P = b.get(O);
            if (P) {
              for (const R of x)
                P.has(R) && (_.add(R), N.add(O), P.delete(R));
              P.size === 0 && b.delete(O);
            }
          }
          for (const [O, P] of b) {
            const R = {
              id: k.id,
              channel: k.channel,
              eventNames: /* @__PURE__ */ new Set([O]),
              topLevelTraversableIds: P
            };
            g.push(R);
          }
        }
      }
      if (!o(N, f))
        throw new i.InvalidArgumentException("No subscription found");
      if (!C && !o(_, x))
        throw new i.InvalidArgumentException("No subscription found");
      S(this, l, g);
    }
    /**
     * Unsubscribes by subscriptionId.
     */
    unsubscribeById(E) {
    }
  }, l = new WeakMap(), d = new WeakMap(), y = new WeakSet(), Js = function(E, m, h) {
    let f = !1;
    for (const C of E.eventNames)
      if (
        // Event explicitly subscribed
        C === m || // Event subscribed via module
        C === m.split(".").at(0) || // Event explicitly subscribed compared to module
        C.split(".").at(0) === m
      ) {
        f = !0;
        break;
      }
    if (!f)
      return !1;
    if (E.topLevelTraversableIds.size === 0)
      return !0;
    const x = h ? e(this, d).findTopLevelContextId(h) : null;
    return !!(x !== null && E.topLevelTraversableIds.has(x));
  }, p);
  tt.SubscriptionManager = n;
  function u(w, E) {
    const m = /* @__PURE__ */ new Set();
    for (const h of w)
      E.has(h) && m.add(h);
    return m;
  }
  function a(w, E) {
    const m = /* @__PURE__ */ new Set();
    for (const h of w)
      E.has(h) || m.add(h);
    return m;
  }
  function o(w, E) {
    if (w.size !== E.size)
      return !1;
    for (const m of w)
      if (!E.has(m))
        return !1;
    return !0;
  }
  return tt;
}
var ao;
function bl() {
  var p, w, E, m, h, f, x, C, g, N, _, Zr, b, ei, Ys, ti;
  if (ao) return Kr;
  ao = 1;
  var i;
  Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.EventManager = void 0;
  const s = Ce(), t = gl(), r = Rc(), n = Zt(), u = wl(), a = Si(), o = yl(), l = vl();
  class d {
    constructor(D, H) {
      v(this, p, new u.IdWrapper());
      v(this, w);
      v(this, E);
      S(this, E, D), S(this, w, H);
    }
    get id() {
      return e(this, p).id;
    }
    get contextId() {
      return e(this, w);
    }
    get event() {
      return e(this, E);
    }
  }
  p = new WeakMap(), w = new WeakMap(), E = new WeakMap();
  const y = /* @__PURE__ */ new Map([[s.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
  let c = (_ = class extends n.EventEmitter {
    constructor(H) {
      super();
      v(this, b);
      /**
       * Maps event name to a set of contexts where this event already happened.
       * Needed for getting buffered events from all the contexts in case of
       * subscripting to all contexts.
       */
      v(this, m, new r.DefaultMap(() => /* @__PURE__ */ new Set()));
      /**
       * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
       * during subscription. Channel-agnostic.
       */
      v(this, h, /* @__PURE__ */ new Map());
      /**
       * Maps `eventName` + `browsingContext` to  Map of json stringified channel to last id.
       * Used to avoid sending duplicated events when user
       * subscribes -> unsubscribes -> subscribes.
       */
      v(this, f, /* @__PURE__ */ new Map());
      v(this, x);
      v(this, C);
      /**
       * Map of event name to hooks to be called when client is subscribed to the event.
       */
      v(this, g);
      S(this, C, H), S(this, x, new l.SubscriptionManager(H)), S(this, g, new r.DefaultMap(() => []));
    }
    get subscriptionManager() {
      return e(this, x);
    }
    addSubscribeHook(H, K) {
      e(this, g).get(H).push(K);
    }
    registerEvent(H, K) {
      this.registerPromiseEvent(Promise.resolve({
        kind: "success",
        value: H
      }), K, H.method);
    }
    registerGlobalEvent(H) {
      this.registerGlobalPromiseEvent(Promise.resolve({
        kind: "success",
        value: H
      }), H.method);
    }
    registerPromiseEvent(H, K, Q) {
      const j = new d(H, K), F = e(this, x).getChannelsSubscribedToEvent(Q, K);
      T(this, b, ei).call(this, j, Q);
      for (const B of F)
        this.emit("event", {
          message: a.OutgoingMessage.createFromPromise(H, B),
          event: Q
        }), T(this, b, Ys).call(this, j, B, Q);
    }
    registerGlobalPromiseEvent(H, K) {
      const Q = new d(H, null), j = e(this, x).getChannelsSubscribedToEventGlobally(K);
      T(this, b, ei).call(this, Q, K);
      for (const F of j)
        this.emit("event", {
          message: a.OutgoingMessage.createFromPromise(H, F),
          event: K
        }), T(this, b, Ys).call(this, Q, F, K);
    }
    async subscribe(H, K, Q) {
      for (const $ of H)
        (0, o.assertSupportedEvent)($);
      for (const $ of K)
        $ !== null && e(this, C).getContext($);
      const j = new Set((0, l.unrollEvents)(H)), F = /* @__PURE__ */ new Map(), B = new Set(K.length ? K.map(($) => {
        const W = e(this, C).findTopLevelContextId($);
        if (!W)
          throw new s.InvalidArgumentException("Invalid context id");
        return W;
      }) : e(this, C).getTopLevelContexts().map(($) => $.id));
      for (const $ of j) {
        const W = new Set(e(this, C).getTopLevelContexts().map((Z) => Z.id).filter((Z) => e(this, x).isSubscribedTo($, Z)));
        F.set($, (0, l.difference)(B, W));
      }
      const L = e(this, x).subscribe(H, K, Q);
      for (const $ of L.eventNames)
        for (const W of B)
          for (const Z of T(this, b, ti).call(this, $, W, Q))
            this.emit("event", {
              message: a.OutgoingMessage.createFromPromise(Z.event, Q),
              event: $
            }), T(this, b, Ys).call(this, Z, Q, $);
      for (const [$, W] of F)
        for (const Z of W)
          e(this, g).get($).forEach((U) => U(Z));
      return await this.toggleModulesIfNeeded(), L.id;
    }
    async unsubscribe(H, K, Q) {
      for (const j of H)
        (0, o.assertSupportedEvent)(j);
      e(this, x).unsubscribe(H, K, Q), await this.toggleModulesIfNeeded();
    }
    async toggleModulesIfNeeded() {
      await Promise.all(e(this, C).getAllContexts().map(async (H) => await H.toggleModulesIfNeeded()));
    }
    clearBufferedEvents(H) {
      var K;
      for (const Q of y.keys()) {
        const j = T(K = i, N, Zr).call(K, Q, H);
        e(this, h).delete(j);
      }
    }
  }, m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakSet(), Zr = function(H, K) {
    return JSON.stringify({ eventName: H, browsingContext: K });
  }, b = new WeakSet(), /**
   * If the event is buffer-able, put it in the buffer.
   */
  ei = function(H, K) {
    var j;
    if (!y.has(K))
      return;
    const Q = T(j = i, N, Zr).call(j, K, H.contextId);
    e(this, h).has(Q) || e(this, h).set(Q, new t.Buffer(y.get(K))), e(this, h).get(Q).add(H), e(this, m).get(K).add(H.contextId);
  }, /**
   * If the event is buffer-able, mark it as sent to the given contextId and channel.
   */
  Ys = function(H, K, Q) {
    var L, $;
    if (!y.has(Q))
      return;
    const j = T(L = i, N, Zr).call(L, Q, H.contextId), F = Math.max((($ = e(this, f).get(j)) == null ? void 0 : $.get(JSON.stringify(K))) ?? 0, H.id), B = e(this, f).get(j);
    B ? B.set(JSON.stringify(K), F) : e(this, f).set(j, /* @__PURE__ */ new Map([[JSON.stringify(K), F]]));
  }, /**
   * Returns events which are buffered and not yet sent to the given channel events.
   */
  ti = function(H, K, Q) {
    var L, $, W;
    const j = T(L = i, N, Zr).call(L, H, K), F = (($ = e(this, f).get(j)) == null ? void 0 : $.get(JSON.stringify(Q))) ?? -1 / 0, B = ((W = e(this, h).get(j)) == null ? void 0 : W.get().filter((Z) => Z.id > F)) ?? [];
    return K === null && Array.from(e(this, m).get(H).keys()).filter((Z) => (
      // Events without context are already in the result.
      Z !== null && // Events from deleted contexts should not be sent.
      e(this, C).hasContext(Z)
    )).map((Z) => T(this, b, ti).call(this, H, Z, Q)).forEach((Z) => B.push(...Z)), B.sort((Z, U) => Z.id - U.id);
  }, v(_, N), _);
  return Kr.EventManager = c, i = c, Kr;
}
var oo;
function Cl() {
  var p, w, E, m, h, f, x, C, g, N, _, k, Vc, O;
  if (oo) return ir;
  oo = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.BidiServer = void 0;
  const i = Zt(), s = Be(), t = Rd(), r = el(), n = tl(), u = dl(), a = ll(), o = pl(), l = fl(), d = ml(), y = bl();
  let c = (O = class extends i.EventEmitter {
    constructor(I, D, H, K, Q, j, F) {
      super();
      v(this, k);
      v(this, p);
      v(this, w);
      v(this, E);
      v(this, m);
      v(this, h, new a.BrowsingContextStorage());
      v(this, f, new d.RealmStorage());
      v(this, x, new l.PreloadScriptStorage());
      v(this, C);
      v(this, g);
      v(this, N, (I) => {
        e(this, E).processCommand(I).catch((D) => {
          var H;
          (H = e(this, g)) == null || H.call(this, s.LogType.debugError, D);
        });
      });
      v(this, _, async (I) => {
        const D = { ...I.message, ...I.channel };
        await e(this, w).sendMessage(D);
      });
      S(this, g, F), S(this, p, new t.ProcessingQueue(e(this, _), e(this, g))), S(this, w, I), e(this, w).setOnMessage(e(this, N)), S(this, m, new y.EventManager(e(this, h)));
      const B = new o.NetworkStorage(e(this, m), e(this, h), H, F);
      S(this, C, new n.BluetoothProcessor(e(this, m), e(this, h))), S(this, E, new r.CommandProcessor(D, H, e(this, m), e(this, h), e(this, f), e(this, x), B, e(this, C), j, async (L) => {
        await H.sendCommand("Security.setIgnoreCertificateErrors", {
          ignore: L.acceptInsecureCerts ?? !1
        }), new u.CdpTargetManager(D, H, K, e(this, m), e(this, h), e(this, f), B, e(this, C), e(this, x), Q, (L == null ? void 0 : L["goog:prerenderingDisabled"]) ?? !1, L == null ? void 0 : L.unhandledPromptBehavior, F), await H.sendCommand("Target.setDiscoverTargets", {
          discover: !0
        }), await H.sendCommand("Target.setAutoAttach", {
          autoAttach: !0,
          waitForDebuggerOnStart: !0,
          flatten: !0,
          // Browser session should attach to tab instead of the page, so that
          // prerendering is not blocked.
          filter: [
            {
              type: "page",
              exclude: !0
            },
            {}
          ]
        }), await T(this, k, Vc).call(this);
      }, e(this, g))), e(this, m).on("event", ({ message: L, event: $ }) => {
        this.emitOutgoingMessage(L, $);
      }), e(this, E).on("response", ({ message: L, event: $ }) => {
        this.emitOutgoingMessage(L, $);
      });
    }
    /**
     * Creates and starts BiDi Mapper instance.
     */
    static async createAndStart(I, D, H, K, Q, j) {
      const [{ browserContextIds: F }, { targetInfos: B }] = await Promise.all([
        H.sendCommand("Target.getBrowserContexts"),
        H.sendCommand("Target.getTargets")
      ]);
      let L = "default";
      for (const W of B)
        if (W.browserContextId && !F.includes(W.browserContextId)) {
          L = W.browserContextId;
          break;
        }
      return new O(I, D, H, K, L, Q, j);
    }
    /**
     * Sends BiDi message.
     */
    emitOutgoingMessage(I, D) {
      e(this, p).add(I, D);
    }
    close() {
      e(this, w).close();
    }
  }, p = new WeakMap(), w = new WeakMap(), E = new WeakMap(), m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), x = new WeakMap(), C = new WeakMap(), g = new WeakMap(), N = new WeakMap(), _ = new WeakMap(), k = new WeakSet(), Vc = async function() {
    await Promise.all(e(this, h).getTopLevelContexts().map((I) => I.lifecycleLoaded()));
  }, O);
  return ir.BidiServer = c, ir;
}
var co;
function xl() {
  return co || (co = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.OutgoingMessage = i.EventEmitter = i.BidiServer = void 0;
    var s = Cl();
    Object.defineProperty(i, "BidiServer", { enumerable: !0, get: function() {
      return s.BidiServer;
    } });
    var t = Zt();
    Object.defineProperty(i, "EventEmitter", { enumerable: !0, get: function() {
      return t.EventEmitter;
    } });
    var r = Si();
    Object.defineProperty(i, "OutgoingMessage", { enumerable: !0, get: function() {
      return r.OutgoingMessage;
    } });
  }(Sn)), Sn;
}
var Pi = xl(), At, st, Xe;
const pt = class pt extends qu {
  constructor(t, r) {
    super();
    v(this, At, !1);
    v(this, st);
    v(this, Xe, Au.create());
    Y(this, "frame");
    /**
     * @internal
     */
    Y(this, "onClose", () => {
      pt.sessions.delete(this.id()), S(this, At, !0);
    });
    if (this.frame = t, !this.frame.page().browser().cdpSupported)
      return;
    const n = this.frame.page().browser().connection;
    S(this, st, n), r ? (e(this, Xe).resolve(r), pt.sessions.set(r, this)) : (async () => {
      try {
        const { result: u } = await n.send("goog:cdp.getSession", {
          context: t._id
        });
        e(this, Xe).resolve(u.session), pt.sessions.set(u.session, this);
      } catch (u) {
        e(this, Xe).reject(u);
      }
    })(), pt.sessions.set(e(this, Xe).value(), this);
  }
  connection() {
  }
  async send(t, r, n) {
    if (e(this, st) === void 0)
      throw new he("CDP support is required for this feature. The current browser does not support CDP.");
    if (e(this, At))
      throw new xi(`Protocol error (${t}): Session closed. Most likely the page has been closed.`);
    const u = await e(this, Xe).valueOrThrow(), { result: a } = await e(this, st).send("goog:cdp.sendCommand", {
      method: t,
      params: r,
      session: u
    }, n == null ? void 0 : n.timeout);
    return a.result;
  }
  async detach() {
    if (!(e(this, st) === void 0 || e(this, st).closed || e(this, At)))
      try {
        await this.frame.client.send("Target.detachFromTarget", {
          sessionId: this.id()
        });
      } finally {
        this.onClose();
      }
  }
  id() {
    const t = e(this, Xe).value();
    return typeof t == "string" ? t : "";
  }
};
At = new WeakMap(), st = new WeakMap(), Xe = new WeakMap(), Y(pt, "sessions", /* @__PURE__ */ new Map());
let ts = pt;
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const El = Ei("puppeteer:webDriverBiDi:SEND ►"), Sl = Ei("puppeteer:webDriverBiDi:RECV ◀");
var ss, Ue, Lt, ns, ft, Je, is;
class Pl extends ge {
  constructor(t, r, n = 0, u) {
    super();
    v(this, ss);
    v(this, Ue);
    v(this, Lt);
    v(this, ns, 0);
    v(this, ft, !1);
    v(this, Je, new Lu());
    v(this, is, []);
    S(this, ss, t), S(this, Lt, n), S(this, ns, u ?? 18e4), S(this, Ue, r), e(this, Ue).onmessage = this.onMessage.bind(this), e(this, Ue).onclose = this.unbind.bind(this);
  }
  get closed() {
    return e(this, ft);
  }
  get url() {
    return e(this, ss);
  }
  pipeTo(t) {
    e(this, is).push(t);
  }
  emit(t, r) {
    for (const n of e(this, is))
      n.emit(t, r);
    return super.emit(t, r);
  }
  send(t, r, n) {
    return Oe(!e(this, ft), "Protocol error: Connection closed."), e(this, Je).create(t, n ?? e(this, ns), (u) => {
      const a = JSON.stringify({
        id: u,
        method: t,
        params: r
      });
      El(a), e(this, Ue).send(a);
    });
  }
  /**
   * @internal
   */
  async onMessage(t) {
    var n;
    e(this, Lt) && await new Promise((u) => setTimeout(u, e(this, Lt))), Sl(t);
    const r = JSON.parse(t);
    if ("type" in r)
      switch (r.type) {
        case "success":
          e(this, Je).resolve(r.id, r);
          return;
        case "error":
          if (r.id === null)
            break;
          e(this, Je).reject(r.id, _l(r), `${r.error}: ${r.message}`);
          return;
        case "event":
          if (kl(r)) {
            (n = ts.sessions.get(r.params.session)) == null || n.emit(r.params.event, r.params.params);
            return;
          }
          this.emit(r.method, r.params);
          return;
      }
    "id" in r && e(this, Je).reject(r.id, `Protocol Error. Message is not in BiDi protocol format: '${t}'`, r.message), De(r);
  }
  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind() {
    e(this, ft) || (S(this, ft, !0), e(this, Ue).onmessage = () => {
    }, e(this, Ue).onclose = () => {
    }, e(this, Je).clear());
  }
  /**
   * Unbinds the connection and closes the transport.
   */
  dispose() {
    this.unbind(), e(this, Ue).close();
  }
  getPendingProtocolErrors() {
    return e(this, Je).getPendingProtocolErrors();
  }
}
ss = new WeakMap(), Ue = new WeakMap(), Lt = new WeakMap(), ns = new WeakMap(), ft = new WeakMap(), Je = new WeakMap(), is = new WeakMap();
function _l(i) {
  let s = `${i.error} ${i.message}`;
  return i.stacktrace && (s += ` ${i.stacktrace}`), s;
}
function kl(i) {
  return i.method.startsWith("goog:cdp.");
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const Il = (i, ...s) => {
  Ei(`bidi:${i}`)(s);
};
async function pp(i) {
  const s = new Nl(), t = new Tl(i), r = {
    send(a) {
      s.emitMessage(JSON.parse(a));
    },
    close() {
      u.close(), t.close(), i.dispose();
    },
    onmessage(a) {
    }
  };
  s.on("bidiResponse", (a) => {
    r.onmessage(JSON.stringify(a));
  });
  const n = new Pl(i.url(), r, i.delay, i.timeout), u = await Pi.BidiServer.createAndStart(
    s,
    t,
    t.browserClient(),
    /* selfTargetId= */
    "",
    void 0,
    Il
  );
  return n;
}
var as, mt, gt;
class Tl {
  constructor(s) {
    v(this, as);
    v(this, mt, /* @__PURE__ */ new Map());
    v(this, gt);
    S(this, as, s), S(this, gt, new uo(s));
  }
  browserClient() {
    return e(this, gt);
  }
  getCdpClient(s) {
    const t = e(this, as).session(s);
    if (!t)
      throw new Error(`Unknown CDP session with id ${s}`);
    if (!e(this, mt).has(t)) {
      const r = new uo(t, s, e(this, gt));
      return e(this, mt).set(t, r), r;
    }
    return e(this, mt).get(t);
  }
  close() {
    e(this, gt).close();
    for (const s of e(this, mt).values())
      s.close();
  }
}
as = new WeakMap(), mt = new WeakMap(), gt = new WeakMap();
var Ut, wt, os, cs;
class uo extends Pi.EventEmitter {
  constructor(t, r, n) {
    super();
    v(this, Ut, !1);
    v(this, wt);
    Y(this, "sessionId");
    v(this, os);
    v(this, cs, (t, r) => {
      this.emit(t, r);
    });
    S(this, wt, t), this.sessionId = r, S(this, os, n), e(this, wt).on("*", e(this, cs));
  }
  browserClient() {
    return e(this, os);
  }
  async sendCommand(t, ...r) {
    if (!e(this, Ut))
      try {
        return await e(this, wt).send(t, ...r);
      } catch (n) {
        if (e(this, Ut))
          return;
        throw n;
      }
  }
  close() {
    e(this, wt).off("*", e(this, cs)), S(this, Ut, !0);
  }
  isCloseError(t) {
    return t instanceof xi;
  }
}
Ut = new WeakMap(), wt = new WeakMap(), os = new WeakMap(), cs = new WeakMap();
var $t;
class Nl extends Pi.EventEmitter {
  constructor() {
    super(...arguments);
    v(this, $t, async (t) => {
    });
  }
  emitMessage(t) {
    e(this, $t).call(this, t);
  }
  setOnMessage(t) {
    S(this, $t, t);
  }
  async sendMessage(t) {
    this.emit("bidiResponse", t);
  }
  close() {
    S(this, $t, async (t) => {
    });
  }
}
$t = new WeakMap();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Rl = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Dl = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let Ml = (() => {
  var r, n, u, a, o, l, Gc, Qs, Xc, p;
  let i = ge, s = [], t;
  return p = class extends i {
    constructor(m) {
      super();
      v(this, l);
      v(this, r, Rl(this, s));
      v(this, n);
      v(this, u);
      v(this, a, new Ke());
      v(this, o);
      S(this, u, m);
    }
    static from(m) {
      var f;
      const h = new p(m);
      return T(f = h, l, Gc).call(f), h;
    }
    get disposed() {
      return e(this, a).disposed;
    }
    get request() {
      return e(this, r);
    }
    get navigation() {
      return e(this, n);
    }
    dispose() {
      this[Ee]();
    }
    [(t = [it], Ee)]() {
      e(this, a).dispose(), super[Ee]();
    }
  }, r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakSet(), Gc = function() {
    const m = e(this, a).use(new ge(e(this, u)));
    m.once("closed", () => {
      this.emit("failed", {
        url: e(this, u).url,
        timestamp: /* @__PURE__ */ new Date()
      }), this.dispose();
    }), m.on("request", ({ request: f }) => {
      if (f.navigation === void 0 || // If a request with a navigation ID comes in, then the navigation ID is
      // for this navigation.
      !T(this, l, Qs).call(this, f.navigation))
        return;
      S(this, r, f), this.emit("request", f), e(this, a).use(new ge(e(this, r))).on("redirect", (C) => {
        S(this, r, C);
      });
    });
    const h = e(this, a).use(new ge(e(this, l, Xc)));
    h.on("browsingContext.navigationStarted", (f) => {
      f.context !== e(this, u).id || e(this, n) !== void 0 || S(this, n, p.from(e(this, u)));
    });
    for (const f of [
      "browsingContext.domContentLoaded",
      "browsingContext.load"
    ])
      h.on(f, (x) => {
        x.context !== e(this, u).id || x.navigation === null || !T(this, l, Qs).call(this, x.navigation) || this.dispose();
      });
    for (const [f, x] of [
      ["browsingContext.fragmentNavigated", "fragment"],
      ["browsingContext.navigationFailed", "failed"],
      ["browsingContext.navigationAborted", "aborted"]
    ])
      h.on(f, (C) => {
        C.context !== e(this, u).id || // Note we don't check if `navigation` is null since `null` means the
        // fragment navigated.
        !T(this, l, Qs).call(this, C.navigation) || (this.emit(x, {
          url: C.url,
          timestamp: new Date(C.timestamp)
        }), this.dispose());
      });
  }, Qs = function(m) {
    return e(this, n) !== void 0 && !e(this, n).disposed ? !1 : e(this, o) === void 0 ? (S(this, o, m), !0) : e(this, o) === m;
  }, Xc = function() {
    return e(this, u).userContext.browser.session;
  }, (() => {
    const m = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Dl(p, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (h) => "dispose" in h, get: (h) => h.dispose }, metadata: m }, null, s), m && Object.defineProperty(p, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), p;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ol = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Vr = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, ri;
let _i = (() => {
  var o, l;
  let i = ge, s = [], t, r, n, u, a;
  return l = class extends i {
    constructor(c, p) {
      super();
      v(this, o, Ol(this, s));
      Y(this, "disposables", new Ke());
      Y(this, "id");
      Y(this, "origin");
      Y(this, "executionContextId");
      this.id = c, this.origin = p;
    }
    get disposed() {
      return e(this, o) !== void 0;
    }
    get target() {
      return { realm: this.id };
    }
    dispose(c) {
      S(this, o, c), this[Ee]();
    }
    async disown(c) {
      await this.session.send("script.disown", {
        target: this.target,
        handles: c
      });
    }
    async callFunction(c, p, w = {}) {
      const { result: E } = await this.session.send("script.callFunction", {
        functionDeclaration: c,
        awaitPromise: p,
        target: this.target,
        ...w
      });
      return E;
    }
    async evaluate(c, p, w = {}) {
      const { result: E } = await this.session.send("script.evaluate", {
        expression: c,
        awaitPromise: p,
        target: this.target,
        ...w
      });
      return E;
    }
    async resolveExecutionContextId() {
      if (!this.executionContextId) {
        const { result: c } = await this.session.connection.send("goog:cdp.resolveRealm", { realm: this.id });
        this.executionContextId = c.executionContextId;
      }
      return this.executionContextId;
    }
    [(t = [it], r = [le((c) => e(c, o))], n = [le((c) => e(c, o))], u = [le((c) => e(c, o))], a = [le((c) => e(c, o))], Ee)]() {
      e(this, o) ?? S(this, o, "Realm already destroyed, probably because all associated browsing contexts closed."), this.emit("destroyed", { reason: e(this, o) }), this.disposables.dispose(), super[Ee]();
    }
  }, o = new WeakMap(), (() => {
    const c = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Vr(l, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (p) => "dispose" in p, get: (p) => p.dispose }, metadata: c }, null, s), Vr(l, null, r, { kind: "method", name: "disown", static: !1, private: !1, access: { has: (p) => "disown" in p, get: (p) => p.disown }, metadata: c }, null, s), Vr(l, null, n, { kind: "method", name: "callFunction", static: !1, private: !1, access: { has: (p) => "callFunction" in p, get: (p) => p.callFunction }, metadata: c }, null, s), Vr(l, null, u, { kind: "method", name: "evaluate", static: !1, private: !1, access: { has: (p) => "evaluate" in p, get: (p) => p.evaluate }, metadata: c }, null, s), Vr(l, null, a, { kind: "method", name: "resolveExecutionContextId", static: !1, private: !1, access: { has: (p) => "resolveExecutionContextId" in p, get: (p) => p.resolveExecutionContextId }, metadata: c }, null, s), c && Object.defineProperty(l, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: c });
  })(), l;
})();
var us, un, Jc;
const Ii = class Ii extends _i {
  constructor(t, r) {
    super("", "");
    v(this, un);
    Y(this, "browsingContext");
    Y(this, "sandbox");
    v(this, us, /* @__PURE__ */ new Map());
    this.browsingContext = t, this.sandbox = r;
  }
  static from(t, r) {
    var u;
    const n = new Ii(t, r);
    return T(u = n, un, Jc).call(u), n;
  }
  get session() {
    return this.browsingContext.userContext.browser.session;
  }
  get target() {
    return { context: this.browsingContext.id, sandbox: this.sandbox };
  }
};
us = new WeakMap(), un = new WeakSet(), Jc = function() {
  this.disposables.use(new ge(this.browsingContext)).on("closed", ({ reason: n }) => {
    this.dispose(n);
  });
  const r = this.disposables.use(new ge(this.session));
  r.on("script.realmCreated", (n) => {
    n.type !== "window" || n.context !== this.browsingContext.id || n.sandbox !== this.sandbox || (this.id = n.realm, this.origin = n.origin, this.executionContextId = void 0, this.emit("updated", this));
  }), r.on("script.realmCreated", (n) => {
    if (n.type !== "dedicated-worker" || !n.owners.includes(this.id))
      return;
    const u = ki.from(this, n.realm, n.origin);
    e(this, us).set(u.id, u);
    const a = this.disposables.use(new ge(u));
    a.once("destroyed", () => {
      a.removeAllListeners(), e(this, us).delete(u.id);
    }), this.emit("worker", u);
  });
};
let si = Ii;
var ds, dn, Yc;
class ki extends _i {
  constructor(t, r, n) {
    super(r, n);
    v(this, dn);
    v(this, ds, /* @__PURE__ */ new Map());
    Y(this, "owners");
    this.owners = /* @__PURE__ */ new Set([t]);
  }
  static from(t, r, n) {
    var a;
    const u = new ri(t, r, n);
    return T(a = u, dn, Yc).call(a), u;
  }
  get session() {
    return this.owners.values().next().value.session;
  }
}
ds = new WeakMap(), dn = new WeakSet(), Yc = function() {
  const t = this.disposables.use(new ge(this.session));
  t.on("script.realmDestroyed", (r) => {
    r.realm === this.id && this.dispose("Realm already destroyed.");
  }), t.on("script.realmCreated", (r) => {
    if (r.type !== "dedicated-worker" || !r.owners.includes(this.id))
      return;
    const n = ri.from(this, r.realm, r.origin);
    e(this, ds).set(n.id, n), this.disposables.use(new ge(n)).once("destroyed", () => {
      e(this, ds).delete(n.id);
    }), this.emit("worker", n);
  });
};
ri = ki;
var ls, ln, Qc;
const Ti = class Ti extends _i {
  constructor(t, r, n) {
    super(r, n);
    v(this, ln);
    v(this, ls, /* @__PURE__ */ new Map());
    Y(this, "browser");
    this.browser = t;
  }
  static from(t, r, n) {
    var a;
    const u = new Ti(t, r, n);
    return T(a = u, ln, Qc).call(a), u;
  }
  get session() {
    return this.browser.session;
  }
};
ls = new WeakMap(), ln = new WeakSet(), Qc = function() {
  const t = this.disposables.use(new ge(this.session));
  t.on("script.realmDestroyed", (r) => {
    r.realm === this.id && this.dispose("Realm already destroyed.");
  }), t.on("script.realmCreated", (r) => {
    if (r.type !== "dedicated-worker" || !r.owners.includes(this.id))
      return;
    const n = ki.from(this, r.realm, r.origin);
    e(this, ls).set(n.id, n), this.disposables.use(new ge(n)).once("destroyed", () => {
      e(this, ls).delete(n.id);
    }), this.emit("worker", n);
  });
};
let ni = Ti;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Fl = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, jl = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let Bl = (() => {
  var r, n, u, a, o, l, d, Zc, ut, p;
  let i = ge, s = [], t;
  return p = class extends i {
    constructor(m, h) {
      super();
      v(this, d);
      v(this, r, Fl(this, s));
      v(this, n);
      v(this, u);
      v(this, a);
      v(this, o, new Ke());
      v(this, l);
      S(this, a, m), S(this, l, h);
    }
    static from(m, h) {
      var x;
      const f = new p(m, h);
      return T(x = f, d, Zc).call(x), f;
    }
    get disposed() {
      return e(this, o).disposed;
    }
    get error() {
      return e(this, r);
    }
    get headers() {
      return e(this, l).request.headers;
    }
    get id() {
      return e(this, l).request.request;
    }
    get initiator() {
      return e(this, l).initiator;
    }
    get method() {
      return e(this, l).request.method;
    }
    get navigation() {
      return e(this, l).navigation ?? void 0;
    }
    get redirect() {
      return e(this, n);
    }
    get lastRedirect() {
      let m = e(this, n);
      for (; m; ) {
        if (m && !e(m, n))
          return m;
        m = e(m, n);
      }
      return m;
    }
    get response() {
      return e(this, u);
    }
    get url() {
      return e(this, l).request.url;
    }
    get isBlocked() {
      return e(this, l).isBlocked;
    }
    get resourceType() {
      return e(this, l).request["goog:resourceType"] ?? void 0;
    }
    get postData() {
      return e(this, l).request["goog:postData"] ?? void 0;
    }
    get hasPostData() {
      return e(this, l).request["goog:hasPostData"] ?? !1;
    }
    async continueRequest({ url: m, method: h, headers: f, cookies: x, body: C }) {
      await e(this, d, ut).send("network.continueRequest", {
        request: this.id,
        url: m,
        method: h,
        headers: f,
        body: C,
        cookies: x
      });
    }
    async failRequest() {
      await e(this, d, ut).send("network.failRequest", {
        request: this.id
      });
    }
    async provideResponse({ statusCode: m, reasonPhrase: h, headers: f, body: x }) {
      await e(this, d, ut).send("network.provideResponse", {
        request: this.id,
        statusCode: m,
        reasonPhrase: h,
        headers: f,
        body: x
      });
    }
    async continueWithAuth(m) {
      m.action === "provideCredentials" ? await e(this, d, ut).send("network.continueWithAuth", {
        request: this.id,
        action: m.action,
        credentials: m.credentials
      }) : await e(this, d, ut).send("network.continueWithAuth", {
        request: this.id,
        action: m.action
      });
    }
    dispose() {
      this[Ee]();
    }
    [(t = [it], Ee)]() {
      e(this, o).dispose(), super[Ee]();
    }
    timing() {
      return e(this, l).request.timings;
    }
  }, r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakSet(), Zc = function() {
    e(this, o).use(new ge(e(this, a))).once("closed", ({ reason: f }) => {
      S(this, r, f), this.emit("error", e(this, r)), this.dispose();
    });
    const h = e(this, o).use(new ge(e(this, d, ut)));
    h.on("network.beforeRequestSent", (f) => {
      f.context !== e(this, a).id || f.request.request !== this.id || f.redirectCount !== e(this, l).redirectCount + 1 || (S(this, n, p.from(e(this, a), f)), this.emit("redirect", e(this, n)), this.dispose());
    }), h.on("network.authRequired", (f) => {
      f.context !== e(this, a).id || f.request.request !== this.id || // Don't try to authenticate for events that are not blocked
      !f.isBlocked || this.emit("authenticate", void 0);
    }), h.on("network.fetchError", (f) => {
      f.context !== e(this, a).id || f.request.request !== this.id || e(this, l).redirectCount !== f.redirectCount || (S(this, r, f.errorText), this.emit("error", e(this, r)), this.dispose());
    }), h.on("network.responseCompleted", (f) => {
      f.context !== e(this, a).id || f.request.request !== this.id || e(this, l).redirectCount !== f.redirectCount || (S(this, u, f.response), e(this, l).request.timings = f.request.timings, this.emit("success", e(this, u)), !(e(this, u).status >= 300 && e(this, u).status < 400) && this.dispose());
    });
  }, ut = function() {
    return e(this, a).userContext.browser.session;
  }, (() => {
    const m = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    jl(p, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (h) => "dispose" in h, get: (h) => h.dispose }, metadata: m }, null, s), m && Object.defineProperty(p, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), p;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var ql = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, lo = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let Al = (() => {
  var n, u, a, o, eu, ii, y;
  let i = ge, s = [], t, r;
  return y = class extends i {
    constructor(w, E) {
      super();
      v(this, o);
      v(this, n, ql(this, s));
      v(this, u);
      v(this, a, new Ke());
      Y(this, "browsingContext");
      Y(this, "info");
      this.browsingContext = w, this.info = E;
    }
    static from(w, E) {
      var h;
      const m = new y(w, E);
      return T(h = m, o, eu).call(h), m;
    }
    get closed() {
      return e(this, n) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get handled() {
      return this.info.handler === "accept" || this.info.handler === "dismiss" ? !0 : e(this, u) !== void 0;
    }
    get result() {
      return e(this, u);
    }
    dispose(w) {
      S(this, n, w), this[Ee]();
    }
    async handle(w = {}) {
      return await e(this, o, ii).send("browsingContext.handleUserPrompt", {
        ...w,
        context: this.info.context
      }), e(this, u);
    }
    [(t = [it], r = [le((w) => e(w, n))], Ee)]() {
      e(this, n) ?? S(this, n, "User prompt already closed, probably because the associated browsing context was destroyed."), this.emit("closed", { reason: e(this, n) }), e(this, a).dispose(), super[Ee]();
    }
  }, n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakSet(), eu = function() {
    e(this, a).use(new ge(this.browsingContext)).once("closed", ({ reason: m }) => {
      this.dispose(`User prompt already closed: ${m}`);
    }), e(this, a).use(new ge(e(this, o, ii))).on("browsingContext.userPromptClosed", (m) => {
      m.context === this.browsingContext.id && (S(this, u, m), this.emit("handled", m), this.dispose("User prompt already handled."));
    });
  }, ii = function() {
    return this.browsingContext.userContext.browser.session;
  }, (() => {
    const w = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    lo(y, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (E) => "dispose" in E, get: (E) => E.dispose }, metadata: w }, null, s), lo(y, null, r, { kind: "method", name: "handle", static: !1, private: !1, access: { has: (E) => "handle" in E, get: (E) => E.handle }, metadata: w }, null, s), w && Object.defineProperty(y, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: w });
  })(), y;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ll = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Se = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let Ul = (() => {
  var P, R, I, D, H, K, Q, j, tu, _e, ai, $;
  let i = ge, s = [], t, r, n, u, a, o, l, d, y, c, p, w, E, m, h, f, x, C, g, N, _, k, b, O;
  return $ = class extends i {
    constructor(U, A, J, se, we) {
      super();
      v(this, j);
      v(this, P, Ll(this, s));
      v(this, R);
      v(this, I);
      v(this, D, /* @__PURE__ */ new Map());
      v(this, H, new Ke());
      v(this, K, /* @__PURE__ */ new Map());
      v(this, Q, /* @__PURE__ */ new Map());
      Y(this, "defaultRealm");
      Y(this, "id");
      Y(this, "parent");
      Y(this, "userContext");
      Y(this, "originalOpener");
      S(this, I, se), this.id = J, this.parent = A, this.userContext = U, this.originalOpener = we, this.defaultRealm = T(this, j, ai).call(this);
    }
    static from(U, A, J, se, we) {
      var te;
      const ye = new $(U, A, J, se, we);
      return T(te = ye, j, tu).call(te), ye;
    }
    get children() {
      return e(this, D).values();
    }
    get closed() {
      return e(this, R) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get realms() {
      const U = this;
      return function* () {
        yield U.defaultRealm, yield* e(U, K).values();
      }();
    }
    get top() {
      let U = this;
      for (let { parent: A } = U; A; { parent: A } = U)
        U = A;
      return U;
    }
    get url() {
      return e(this, I);
    }
    dispose(U) {
      S(this, R, U);
      for (const A of e(this, D).values())
        A.dispose("Parent browsing context was disposed");
      this[Ee]();
    }
    async activate() {
      await e(this, j, _e).send("browsingContext.activate", {
        context: this.id
      });
    }
    async captureScreenshot(U = {}) {
      const { result: { data: A } } = await e(this, j, _e).send("browsingContext.captureScreenshot", {
        context: this.id,
        ...U
      });
      return A;
    }
    async close(U) {
      await Promise.all([...e(this, D).values()].map(async (A) => {
        await A.close(U);
      })), await e(this, j, _e).send("browsingContext.close", {
        context: this.id,
        promptUnload: U
      });
    }
    async traverseHistory(U) {
      await e(this, j, _e).send("browsingContext.traverseHistory", {
        context: this.id,
        delta: U
      });
    }
    async navigate(U, A) {
      await e(this, j, _e).send("browsingContext.navigate", {
        context: this.id,
        url: U,
        wait: A
      });
    }
    async reload(U = {}) {
      await e(this, j, _e).send("browsingContext.reload", {
        context: this.id,
        ...U
      });
    }
    async setCacheBehavior(U) {
      await e(this, j, _e).send("network.setCacheBehavior", {
        contexts: [this.id],
        cacheBehavior: U
      });
    }
    async print(U = {}) {
      const { result: { data: A } } = await e(this, j, _e).send("browsingContext.print", {
        context: this.id,
        ...U
      });
      return A;
    }
    async handleUserPrompt(U = {}) {
      await e(this, j, _e).send("browsingContext.handleUserPrompt", {
        context: this.id,
        ...U
      });
    }
    async setViewport(U = {}) {
      await e(this, j, _e).send("browsingContext.setViewport", {
        context: this.id,
        ...U
      });
    }
    async performActions(U) {
      await e(this, j, _e).send("input.performActions", {
        context: this.id,
        actions: U
      });
    }
    async releaseActions() {
      await e(this, j, _e).send("input.releaseActions", {
        context: this.id
      });
    }
    createWindowRealm(U) {
      return T(this, j, ai).call(this, U);
    }
    async addPreloadScript(U, A = {}) {
      return await this.userContext.browser.addPreloadScript(U, {
        ...A,
        contexts: [this]
      });
    }
    async addIntercept(U) {
      const { result: { intercept: A } } = await this.userContext.browser.session.send("network.addIntercept", {
        ...U,
        contexts: [this.id]
      });
      return A;
    }
    async removePreloadScript(U) {
      await this.userContext.browser.removePreloadScript(U);
    }
    async getCookies(U = {}) {
      const { result: { cookies: A } } = await e(this, j, _e).send("storage.getCookies", {
        ...U,
        partition: {
          type: "context",
          context: this.id
        }
      });
      return A;
    }
    async setCookie(U) {
      await e(this, j, _e).send("storage.setCookie", {
        cookie: U,
        partition: {
          type: "context",
          context: this.id
        }
      });
    }
    async setFiles(U, A) {
      await e(this, j, _e).send("input.setFiles", {
        context: this.id,
        element: U,
        files: A
      });
    }
    async subscribe(U) {
      await e(this, j, _e).subscribe(U, [this.id]);
    }
    async addInterception(U) {
      await e(this, j, _e).subscribe(U, [this.id]);
    }
    [(t = [it], r = [le((U) => e(U, R))], n = [le((U) => e(U, R))], u = [le((U) => e(U, R))], a = [le((U) => e(U, R))], o = [le((U) => e(U, R))], l = [le((U) => e(U, R))], d = [le((U) => e(U, R))], y = [le((U) => e(U, R))], c = [le((U) => e(U, R))], p = [le((U) => e(U, R))], w = [le((U) => e(U, R))], E = [le((U) => e(U, R))], m = [le((U) => e(U, R))], h = [le((U) => e(U, R))], f = [le((U) => e(U, R))], x = [le((U) => e(U, R))], C = [le((U) => e(U, R))], g = [le((U) => e(U, R))], N = [le((U) => e(U, R))], _ = [le((U) => e(U, R))], k = [le((U) => e(U, R))], Ee)]() {
      e(this, R) ?? S(this, R, "Browsing context already closed, probably because the user context closed."), this.emit("closed", { reason: e(this, R) }), e(this, H).dispose(), super[Ee]();
    }
    async deleteCookie(...U) {
      await Promise.all(U.map(async (A) => {
        await e(this, j, _e).send("storage.deleteCookies", {
          filter: A,
          partition: {
            type: "context",
            context: this.id
          }
        });
      }));
    }
    async locateNodes(U, A) {
      return (await e(this, j, _e).send("browsingContext.locateNodes", {
        context: this.id,
        locator: U,
        startNodes: A.length ? A : void 0
      })).result.nodes;
    }
  }, P = new WeakMap(), R = new WeakMap(), I = new WeakMap(), D = new WeakMap(), H = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), j = new WeakSet(), tu = function() {
    e(this, H).use(new ge(this.userContext)).once("closed", ({ reason: J }) => {
      this.dispose(`Browsing context already closed: ${J}`);
    });
    const A = e(this, H).use(new ge(e(this, j, _e)));
    A.on("browsingContext.contextCreated", (J) => {
      if (J.parent !== this.id)
        return;
      const se = $.from(this.userContext, this, J.context, J.url, J.originalOpener);
      e(this, D).set(J.context, se);
      const we = e(this, H).use(new ge(se));
      we.once("closed", () => {
        we.removeAllListeners(), e(this, D).delete(se.id);
      }), this.emit("browsingcontext", { browsingContext: se });
    }), A.on("browsingContext.contextDestroyed", (J) => {
      J.context === this.id && this.dispose("Browsing context already closed.");
    }), A.on("browsingContext.historyUpdated", (J) => {
      J.context === this.id && (S(this, I, J.url), this.emit("historyUpdated", void 0));
    }), A.on("browsingContext.domContentLoaded", (J) => {
      J.context === this.id && (S(this, I, J.url), this.emit("DOMContentLoaded", void 0));
    }), A.on("browsingContext.load", (J) => {
      J.context === this.id && (S(this, I, J.url), this.emit("load", void 0));
    }), A.on("browsingContext.navigationStarted", (J) => {
      if (J.context !== this.id)
        return;
      for (const [we, ye] of e(this, Q))
        ye.disposed && e(this, Q).delete(we);
      if (e(this, P) !== void 0 && !e(this, P).disposed)
        return;
      S(this, P, Ml.from(this));
      const se = e(this, H).use(new ge(e(this, P)));
      for (const we of ["fragment", "failed", "aborted"])
        se.once(we, ({ url: ye }) => {
          se[Ee](), S(this, I, ye);
        });
      this.emit("navigation", { navigation: e(this, P) });
    }), A.on("network.beforeRequestSent", (J) => {
      if (J.context !== this.id || e(this, Q).has(J.request.request))
        return;
      const se = Bl.from(this, J);
      e(this, Q).set(se.id, se), this.emit("request", { request: se });
    }), A.on("log.entryAdded", (J) => {
      J.source.context === this.id && this.emit("log", { entry: J });
    }), A.on("browsingContext.userPromptOpened", (J) => {
      if (J.context !== this.id)
        return;
      const se = Al.from(this, J);
      this.emit("userprompt", { userPrompt: se });
    });
  }, _e = function() {
    return this.userContext.browser.session;
  }, ai = function(U) {
    const A = si.from(this, U);
    return A.on("worker", (J) => {
      this.emit("worker", { realm: J });
    }), A;
  }, (() => {
    const U = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    b = [le((A) => e(A, R))], O = [le((A) => e(A, R))], Se($, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (A) => "dispose" in A, get: (A) => A.dispose }, metadata: U }, null, s), Se($, null, r, { kind: "method", name: "activate", static: !1, private: !1, access: { has: (A) => "activate" in A, get: (A) => A.activate }, metadata: U }, null, s), Se($, null, n, { kind: "method", name: "captureScreenshot", static: !1, private: !1, access: { has: (A) => "captureScreenshot" in A, get: (A) => A.captureScreenshot }, metadata: U }, null, s), Se($, null, u, { kind: "method", name: "close", static: !1, private: !1, access: { has: (A) => "close" in A, get: (A) => A.close }, metadata: U }, null, s), Se($, null, a, { kind: "method", name: "traverseHistory", static: !1, private: !1, access: { has: (A) => "traverseHistory" in A, get: (A) => A.traverseHistory }, metadata: U }, null, s), Se($, null, o, { kind: "method", name: "navigate", static: !1, private: !1, access: { has: (A) => "navigate" in A, get: (A) => A.navigate }, metadata: U }, null, s), Se($, null, l, { kind: "method", name: "reload", static: !1, private: !1, access: { has: (A) => "reload" in A, get: (A) => A.reload }, metadata: U }, null, s), Se($, null, d, { kind: "method", name: "setCacheBehavior", static: !1, private: !1, access: { has: (A) => "setCacheBehavior" in A, get: (A) => A.setCacheBehavior }, metadata: U }, null, s), Se($, null, y, { kind: "method", name: "print", static: !1, private: !1, access: { has: (A) => "print" in A, get: (A) => A.print }, metadata: U }, null, s), Se($, null, c, { kind: "method", name: "handleUserPrompt", static: !1, private: !1, access: { has: (A) => "handleUserPrompt" in A, get: (A) => A.handleUserPrompt }, metadata: U }, null, s), Se($, null, p, { kind: "method", name: "setViewport", static: !1, private: !1, access: { has: (A) => "setViewport" in A, get: (A) => A.setViewport }, metadata: U }, null, s), Se($, null, w, { kind: "method", name: "performActions", static: !1, private: !1, access: { has: (A) => "performActions" in A, get: (A) => A.performActions }, metadata: U }, null, s), Se($, null, E, { kind: "method", name: "releaseActions", static: !1, private: !1, access: { has: (A) => "releaseActions" in A, get: (A) => A.releaseActions }, metadata: U }, null, s), Se($, null, m, { kind: "method", name: "createWindowRealm", static: !1, private: !1, access: { has: (A) => "createWindowRealm" in A, get: (A) => A.createWindowRealm }, metadata: U }, null, s), Se($, null, h, { kind: "method", name: "addPreloadScript", static: !1, private: !1, access: { has: (A) => "addPreloadScript" in A, get: (A) => A.addPreloadScript }, metadata: U }, null, s), Se($, null, f, { kind: "method", name: "addIntercept", static: !1, private: !1, access: { has: (A) => "addIntercept" in A, get: (A) => A.addIntercept }, metadata: U }, null, s), Se($, null, x, { kind: "method", name: "removePreloadScript", static: !1, private: !1, access: { has: (A) => "removePreloadScript" in A, get: (A) => A.removePreloadScript }, metadata: U }, null, s), Se($, null, C, { kind: "method", name: "getCookies", static: !1, private: !1, access: { has: (A) => "getCookies" in A, get: (A) => A.getCookies }, metadata: U }, null, s), Se($, null, g, { kind: "method", name: "setCookie", static: !1, private: !1, access: { has: (A) => "setCookie" in A, get: (A) => A.setCookie }, metadata: U }, null, s), Se($, null, N, { kind: "method", name: "setFiles", static: !1, private: !1, access: { has: (A) => "setFiles" in A, get: (A) => A.setFiles }, metadata: U }, null, s), Se($, null, _, { kind: "method", name: "subscribe", static: !1, private: !1, access: { has: (A) => "subscribe" in A, get: (A) => A.subscribe }, metadata: U }, null, s), Se($, null, k, { kind: "method", name: "addInterception", static: !1, private: !1, access: { has: (A) => "addInterception" in A, get: (A) => A.addInterception }, metadata: U }, null, s), Se($, null, b, { kind: "method", name: "deleteCookie", static: !1, private: !1, access: { has: (A) => "deleteCookie" in A, get: (A) => A.deleteCookie }, metadata: U }, null, s), Se($, null, O, { kind: "method", name: "locateNodes", static: !1, private: !1, access: { has: (A) => "locateNodes" in A, get: (A) => A.locateNodes }, metadata: U }, null, s), U && Object.defineProperty($, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: U });
  })(), $;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var $l = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Rt = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let nn = (() => {
  var l, d, y, c, p, w, ru, dt;
  let i = ge, s = [], t, r, n, u, a, o;
  return l = class extends i {
    constructor(x, C) {
      super();
      v(this, w);
      v(this, d, $l(this, s));
      // Note these are only top-level contexts.
      v(this, y, /* @__PURE__ */ new Map());
      v(this, c, new Ke());
      v(this, p);
      Y(this, "browser");
      S(this, p, C), this.browser = x;
    }
    static create(x, C) {
      var N;
      const g = new l(x, C);
      return T(N = g, w, ru).call(N), g;
    }
    get browsingContexts() {
      return e(this, y).values();
    }
    get closed() {
      return e(this, d) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get id() {
      return e(this, p);
    }
    dispose(x) {
      S(this, d, x), this[Ee]();
    }
    async createBrowsingContext(x, C = {}) {
      var _;
      const { result: { context: g } } = await e(this, w, dt).send("browsingContext.create", {
        type: x,
        ...C,
        referenceContext: (_ = C.referenceContext) == null ? void 0 : _.id,
        userContext: e(this, p)
      }), N = e(this, y).get(g);
      return Oe(N, "The WebDriver BiDi implementation is failing to create a browsing context correctly."), N;
    }
    async remove() {
      try {
        await e(this, w, dt).send("browser.removeUserContext", {
          userContext: e(this, p)
        });
      } finally {
        this.dispose("User context already closed.");
      }
    }
    async getCookies(x = {}, C = void 0) {
      const { result: { cookies: g } } = await e(this, w, dt).send("storage.getCookies", {
        ...x,
        partition: {
          type: "storageKey",
          userContext: e(this, p),
          sourceOrigin: C
        }
      });
      return g;
    }
    async setCookie(x, C) {
      await e(this, w, dt).send("storage.setCookie", {
        cookie: x,
        partition: {
          type: "storageKey",
          sourceOrigin: C,
          userContext: this.id
        }
      });
    }
    async setPermissions(x, C, g) {
      await e(this, w, dt).send("permissions.setPermission", {
        origin: x,
        descriptor: C,
        state: g,
        userContext: e(this, p)
      });
    }
    [(t = [it], r = [le((x) => e(x, d))], n = [le((x) => e(x, d))], u = [le((x) => e(x, d))], a = [le((x) => e(x, d))], o = [le((x) => e(x, d))], Ee)]() {
      e(this, d) ?? S(this, d, "User context already closed, probably because the browser disconnected/closed."), this.emit("closed", { reason: e(this, d) }), e(this, c).dispose(), super[Ee]();
    }
  }, d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakSet(), ru = function() {
    const x = e(this, c).use(new ge(this.browser));
    x.once("closed", ({ reason: g }) => {
      this.dispose(`User context was closed: ${g}`);
    }), x.once("disconnected", ({ reason: g }) => {
      this.dispose(`User context was closed: ${g}`);
    }), e(this, c).use(new ge(e(this, w, dt))).on("browsingContext.contextCreated", (g) => {
      if (g.parent || g.userContext !== e(this, p))
        return;
      const N = Ul.from(this, void 0, g.context, g.url, g.originalOpener);
      e(this, y).set(N.id, N);
      const _ = e(this, c).use(new ge(N));
      _.on("closed", () => {
        _.removeAllListeners(), e(this, y).delete(N.id);
      }), this.emit("browsingcontext", { browsingContext: N });
    });
  }, dt = function() {
    return this.browser.session;
  }, (() => {
    const x = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Rt(l, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (C) => "dispose" in C, get: (C) => C.dispose }, metadata: x }, null, s), Rt(l, null, r, { kind: "method", name: "createBrowsingContext", static: !1, private: !1, access: { has: (C) => "createBrowsingContext" in C, get: (C) => C.createBrowsingContext }, metadata: x }, null, s), Rt(l, null, n, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (C) => "remove" in C, get: (C) => C.remove }, metadata: x }, null, s), Rt(l, null, u, { kind: "method", name: "getCookies", static: !1, private: !1, access: { has: (C) => "getCookies" in C, get: (C) => C.getCookies }, metadata: x }, null, s), Rt(l, null, a, { kind: "method", name: "setCookie", static: !1, private: !1, access: { has: (C) => "setCookie" in C, get: (C) => C.setCookie }, metadata: x }, null, s), Rt(l, null, o, { kind: "method", name: "setPermissions", static: !1, private: !1, access: { has: (C) => "setPermissions" in C, get: (C) => C.setPermissions }, metadata: x }, null, s), x && Object.defineProperty(l, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: x });
  })(), Y(l, "DEFAULT", "default"), l;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var St, su, oi;
class ks {
  static deserialize(s) {
    var t, r, n, u;
    if (!s) {
      De("Service did not produce a result.");
      return;
    }
    switch (s.type) {
      case "array":
        return (t = s.value) == null ? void 0 : t.map((a) => this.deserialize(a));
      case "set":
        return (r = s.value) == null ? void 0 : r.reduce((a, o) => a.add(this.deserialize(o)), /* @__PURE__ */ new Set());
      case "object":
        return (n = s.value) == null ? void 0 : n.reduce((a, o) => {
          const { key: l, value: d } = T(this, St, oi).call(this, o);
          return a[l] = d, a;
        }, {});
      case "map":
        return (u = s.value) == null ? void 0 : u.reduce((a, o) => {
          const { key: l, value: d } = T(this, St, oi).call(this, o);
          return a.set(l, d);
        }, /* @__PURE__ */ new Map());
      case "promise":
        return {};
      case "regexp":
        return new RegExp(s.value.pattern, s.value.flags);
      case "date":
        return new Date(s.value);
      case "undefined":
        return;
      case "null":
        return null;
      case "number":
        return T(this, St, su).call(this, s.value);
      case "bigint":
        return BigInt(s.value);
      case "boolean":
        return !!s.value;
      case "string":
        return s.value;
    }
    De(`Deserialization of type ${s.type} not supported.`);
  }
}
St = new WeakSet(), su = function(s) {
  switch (s) {
    case "-0":
      return -0;
    case "NaN":
      return NaN;
    case "Infinity":
      return 1 / 0;
    case "-Infinity":
      return -1 / 0;
    default:
      return s;
  }
}, oi = function([s, t]) {
  const r = typeof s == "string" ? s : this.deserialize(s), n = this.deserialize(t);
  return { key: r, value: n };
}, v(ks, St);
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var hs;
const Ni = class Ni extends Uu {
  constructor(t) {
    super(t.info.type, t.info.message, t.info.defaultValue);
    v(this, hs);
    S(this, hs, t), this.handled = t.handled;
  }
  static from(t) {
    return new Ni(t);
  }
  async handle(t) {
    await e(this, hs).handle({
      accept: t.accept,
      userText: t.text
    });
  }
};
hs = new WeakMap();
let ci = Ni;
var Hl = Ce();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var $e, Ht;
const Ri = class Ri extends $u {
  constructor(t, r) {
    super();
    v(this, $e);
    Y(this, "realm");
    v(this, Ht, !1);
    S(this, $e, t), this.realm = r;
  }
  static from(t, r) {
    return new Ri(t, r);
  }
  get disposed() {
    return e(this, Ht);
  }
  async jsonValue() {
    return await this.evaluate((t) => t);
  }
  asElement() {
    return null;
  }
  async dispose() {
    e(this, Ht) || (S(this, Ht, !0), await this.realm.destroyHandles([this]));
  }
  get isPrimitiveValue() {
    switch (e(this, $e).type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "undefined":
      case "null":
        return !0;
      default:
        return !1;
    }
  }
  toString() {
    return this.isPrimitiveValue ? "JSHandle:" + ks.deserialize(e(this, $e)) : "JSHandle@" + e(this, $e).type;
  }
  get id() {
    return "handle" in e(this, $e) ? e(this, $e).handle : void 0;
  }
  remoteValue() {
    return e(this, $e);
  }
  remoteObject() {
    throw new he("Not available in WebDriver BiDi");
  }
};
$e = new WeakMap(), Ht = new WeakMap();
let Et = Ri;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Kl = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, ho = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, zl = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (u) {
        return Promise.reject(u);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, Wl = /* @__PURE__ */ function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, n = 0;
    function u() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && n === 1) return n = 0, s.stack.push(r), Promise.resolve().then(u);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(a).then(u, function(o) {
              return t(o), u();
            });
          } else n |= 1;
        } catch (o) {
          t(o);
        }
      if (n === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return u();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let an = (() => {
  var n, u;
  let i = Ku, s = [], t, r;
  return u = class extends i {
    constructor(l, d) {
      super(Et.from(l, d));
      v(this, n, Kl(this, s));
    }
    static from(l, d) {
      return new u(l, d);
    }
    get realm() {
      return this.handle.realm;
    }
    get frame() {
      return this.realm.environment;
    }
    remoteValue() {
      return this.handle.remoteValue();
    }
    async autofill(l) {
      const d = this.frame.client, c = (await d.send("DOM.describeNode", {
        objectId: this.handle.id
      })).node.backendNodeId, p = this.frame._id;
      await d.send("Autofill.trigger", {
        fieldId: c,
        frameId: p,
        card: l.creditCard
      });
    }
    async contentFrame() {
      const l = { stack: [], error: void 0, hasError: !1 };
      try {
        const y = zl(l, await this.evaluateHandle((c) => {
          if (c instanceof HTMLIFrameElement || c instanceof HTMLFrameElement)
            return c.contentWindow;
        }), !1).remoteValue();
        return y.type === "window" ? this.frame.page().frames().find((c) => c._id === y.value.context) ?? null : null;
      } catch (d) {
        l.error = d, l.hasError = !0;
      } finally {
        Wl(l);
      }
    }
    async uploadFile(...l) {
      const d = Hu.value.path;
      d && (l = l.map((y) => d.win32.isAbsolute(y) || d.posix.isAbsolute(y) ? y : d.resolve(y))), await this.frame.setFiles(this, l);
    }
    async *queryAXTree(l, d) {
      const y = await this.frame.locateNodes(this, {
        type: "accessibility",
        value: {
          role: d,
          name: l
        }
      });
      return yield* xo.map(y, (c) => Promise.resolve(u.from(c, this.realm)));
    }
    async backendNodeId() {
      if (!this.frame.page().browser().cdpSupported)
        throw new he();
      if (e(this, n))
        return e(this, n);
      const { node: l } = await this.frame.client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      return S(this, n, l.backendNodeId), e(this, n);
    }
  }, n = new WeakMap(), (() => {
    const l = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    t = [le()], r = [le(), zu], ho(u, null, t, { kind: "method", name: "autofill", static: !1, private: !1, access: { has: (d) => "autofill" in d, get: (d) => d.autofill }, metadata: l }, null, s), ho(u, null, r, { kind: "method", name: "contentFrame", static: !1, private: !1, access: { has: (d) => "contentFrame" in d, get: (d) => d.contentFrame }, metadata: l }, null, s), l && Object.defineProperty(u, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: l });
  })(), u;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Nn = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (u) {
        return Promise.reject(u);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, Vl = /* @__PURE__ */ function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, n = 0;
    function u() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && n === 1) return n = 0, s.stack.push(r), Promise.resolve().then(u);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(a).then(u, function(o) {
              return t(o), u();
            });
          } else n |= 1;
        } catch (o) {
          t(o);
        }
      if (n === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return u();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
}), nt, ps, Kt, zt, fs, ms, ze, nu, iu, hn, au, ou;
const Di = class Di {
  constructor(s, t, r, n = !1) {
    v(this, ze);
    v(this, nt);
    Y(this, "name");
    v(this, ps);
    v(this, Kt);
    v(this, zt);
    v(this, fs, []);
    v(this, ms, new Ke());
    v(this, hn, async (s) => {
      const t = { stack: [], error: void 0, hasError: !1 };
      try {
        if (s.channel !== e(this, zt))
          return;
        const r = T(this, ze, au).call(this, s.source);
        if (!r)
          return;
        const n = Nn(t, Et.from(s.data, r), !1), u = Nn(t, await n.evaluateHandle(([, , d]) => d), !1), a = Nn(t, new Ke(), !1), o = [];
        for (const [d, y] of await u.getProperties()) {
          if (a.use(y), y instanceof an) {
            o[+d] = y, a.use(y);
            continue;
          }
          o[+d] = y.jsonValue();
        }
        let l;
        try {
          l = await e(this, ps).call(this, ...await Promise.all(o));
        } catch (d) {
          try {
            d instanceof Error ? await n.evaluate(([, y], c, p, w) => {
              const E = new Error(p);
              E.name = c, w && (E.stack = w), y(E);
            }, d.name, d.message, d.stack) : await n.evaluate(([, y], c) => {
              y(c);
            }, d);
          } catch (y) {
            De(y);
          }
          return;
        }
        try {
          await n.evaluate(([d], y) => {
            d(y);
          }, l);
        } catch (d) {
          De(d);
        }
      } catch (r) {
        t.error = r, t.hasError = !0;
      } finally {
        Vl(t);
      }
    });
    S(this, nt, s), this.name = t, S(this, ps, r), S(this, Kt, n), S(this, zt, `__puppeteer__${e(this, nt)._id}_page_exposeFunction_${this.name}`);
  }
  static async from(s, t, r, n = !1) {
    var a;
    const u = new Di(s, t, r, n);
    return await T(a = u, ze, nu).call(a), u;
  }
  [Symbol.dispose]() {
    this[Symbol.asyncDispose]().catch(De);
  }
  async [Symbol.asyncDispose]() {
    e(this, ms).dispose(), await Promise.all(e(this, fs).map(async ([s, t]) => {
      const r = e(this, Kt) ? s.isolatedRealm() : s.mainRealm();
      try {
        await Promise.all([
          r.evaluate((n) => {
            delete globalThis[n];
          }, this.name),
          ...s.childFrames().map((n) => n.evaluate((u) => {
            delete globalThis[u];
          }, this.name)),
          s.browsingContext.removePreloadScript(t)
        ]);
      } catch (n) {
        De(n);
      }
    }));
  }
};
nt = new WeakMap(), ps = new WeakMap(), Kt = new WeakMap(), zt = new WeakMap(), fs = new WeakMap(), ms = new WeakMap(), ze = new WeakSet(), nu = async function() {
  const s = e(this, ze, iu), t = {
    type: "channel",
    value: {
      channel: e(this, zt),
      ownership: "root"
    }
  };
  e(this, ms).use(new ge(s)).on(Hl.ChromiumBidi.Script.EventNames.Message, e(this, hn));
  const n = Eo(Wu((a) => {
    Object.assign(globalThis, {
      [PLACEHOLDER("name")]: function(...o) {
        return new Promise((l, d) => {
          a([l, d, o]);
        });
      }
    });
  }, { name: JSON.stringify(this.name) })), u = [e(this, nt)];
  for (const a of u)
    u.push(...a.childFrames());
  await Promise.all(u.map(async (a) => {
    const o = e(this, Kt) ? a.isolatedRealm() : a.mainRealm();
    try {
      const [l] = await Promise.all([
        a.browsingContext.addPreloadScript(n, {
          arguments: [t],
          sandbox: o.sandbox
        }),
        o.realm.callFunction(n, !1, {
          arguments: [t]
        })
      ]);
      e(this, fs).push([a, l]);
    } catch (l) {
      De(l);
    }
  }));
}, iu = function() {
  return e(this, nt).page().browser().connection;
}, hn = new WeakMap(), au = function(s) {
  const t = T(this, ze, ou).call(this, s.context);
  if (t)
    return t.realm(s.realm);
}, ou = function(s) {
  const t = [e(this, nt)];
  for (const r of t) {
    if (r._id === s)
      return r;
    t.push(...r.childFrames());
  }
};
let rs = Di;
var Gl = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Xl = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let Jl = (() => {
  var r, n, u, a, o, cu, d;
  let i = Gu, s = [], t;
  return d = class extends i {
    constructor(p, w, E) {
      super();
      v(this, o);
      v(this, r, Gl(this, s));
      v(this, n);
      v(this, u);
      v(this, a, !1);
      S(this, r, p), S(this, n, w), S(this, a, E);
      const m = p["goog:securityDetails"];
      E && m && S(this, u, new Vu(m));
    }
    static from(p, w, E) {
      var h;
      const m = new d(p, w, E);
      return T(h = m, o, cu).call(h), m;
    }
    remoteAddress() {
      return {
        ip: "",
        port: -1
      };
    }
    url() {
      return e(this, r).url;
    }
    status() {
      return e(this, r).status;
    }
    statusText() {
      return e(this, r).statusText;
    }
    headers() {
      const p = {};
      for (const w of e(this, r).headers)
        w.value.type === "string" && (p[w.name.toLowerCase()] = w.value.value);
      return p;
    }
    request() {
      return e(this, n);
    }
    fromCache() {
      return e(this, r).fromCache;
    }
    timing() {
      const p = e(this, n).timing();
      return {
        requestTime: p.requestTime,
        proxyStart: -1,
        proxyEnd: -1,
        dnsStart: p.dnsStart,
        dnsEnd: p.dnsEnd,
        connectStart: p.connectStart,
        connectEnd: p.connectEnd,
        sslStart: p.tlsStart,
        sslEnd: -1,
        workerStart: -1,
        workerReady: -1,
        workerFetchStart: -1,
        workerRespondWithSettled: -1,
        workerRouterEvaluationStart: -1,
        workerCacheLookupStart: -1,
        sendStart: p.requestStart,
        sendEnd: -1,
        pushStart: -1,
        pushEnd: -1,
        receiveHeadersStart: p.responseStart,
        receiveHeadersEnd: p.responseEnd
      };
    }
    frame() {
      return e(this, n).frame();
    }
    fromServiceWorker() {
      return !1;
    }
    securityDetails() {
      if (!e(this, a))
        throw new he();
      return e(this, u) ?? null;
    }
    content() {
      throw new he();
    }
  }, r = new WeakMap(), n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakSet(), cu = function() {
    var p, w;
    e(this, r).fromCache && (e(this, n)._fromMemoryCache = !0, (p = e(this, n).frame()) == null || p.page().trustedEmitter.emit("requestservedfromcache", e(this, n))), (w = e(this, n).frame()) == null || w.page().trustedEmitter.emit("response", this);
  }, (() => {
    const p = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    t = [Xu], Xl(d, null, t, { kind: "method", name: "remoteAddress", static: !1, private: !1, access: { has: (w) => "remoteAddress" in w, get: (w) => w.remoteAddress }, metadata: p }, null, s), p && Object.defineProperty(d, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: p });
  })(), d;
})();
var ui;
const uu = /* @__PURE__ */ new WeakMap();
var yt, gs, Ne, Pe, je, lu, di, li, hi, ws, pn;
class du extends zi {
  constructor(t, r, n) {
    super();
    v(this, je);
    v(this, yt);
    v(this, gs, null);
    Y(this, "id");
    v(this, Ne);
    v(this, Pe);
    v(this, ws, !1);
    v(this, pn, async () => {
      if (!e(this, Ne))
        return;
      const t = e(this, Ne).page()._credentials;
      t && !e(this, ws) ? (S(this, ws, !0), e(this, Pe).continueWithAuth({
        action: "provideCredentials",
        credentials: {
          type: "password",
          username: t.username,
          password: t.password
        }
      })) : e(this, Pe).continueWithAuth({
        action: "cancel"
      });
    });
    uu.set(t, this), this.interception.enabled = t.isBlocked, S(this, Pe, t), S(this, Ne, r), S(this, yt, n ? e(n, yt) : []), this.id = t.id;
  }
  static from(t, r, n) {
    var a;
    const u = new ui(t, r, n);
    return T(a = u, je, lu).call(a), u;
  }
  get client() {
    return e(this, Ne).client;
  }
  url() {
    return e(this, Pe).url;
  }
  resourceType() {
    if (!e(this, Ne).page().browser().cdpSupported)
      throw new he();
    return (e(this, Pe).resourceType || "other").toLowerCase();
  }
  method() {
    return e(this, Pe).method;
  }
  postData() {
    if (!e(this, Ne).page().browser().cdpSupported)
      throw new he();
    return e(this, Pe).postData;
  }
  hasPostData() {
    if (!e(this, Ne).page().browser().cdpSupported)
      throw new he();
    return e(this, Pe).hasPostData;
  }
  async fetchPostData() {
    throw new he();
  }
  headers() {
    const t = {};
    for (const r of e(this, Pe).headers)
      t[r.name.toLowerCase()] = r.value.value;
    return {
      ...t,
      ...e(this, je, li),
      ...e(this, je, hi)
    };
  }
  response() {
    return e(this, gs);
  }
  failure() {
    return e(this, Pe).error === void 0 ? null : { errorText: e(this, Pe).error };
  }
  isNavigationRequest() {
    return e(this, Pe).navigation !== void 0;
  }
  initiator() {
    var t;
    return {
      ...e(this, Pe).initiator,
      type: ((t = e(this, Pe).initiator) == null ? void 0 : t.type) ?? "other"
    };
  }
  redirectChain() {
    return e(this, yt).slice();
  }
  frame() {
    return e(this, Ne);
  }
  async continue(t, r) {
    return await super.continue({
      headers: e(this, je, di) ? this.headers() : void 0,
      ...t
    }, r);
  }
  async _continue(t = {}) {
    const r = po(t.headers);
    return this.interception.handled = !0, await e(this, Pe).continueRequest({
      url: t.url,
      method: t.method,
      body: t.postData ? {
        type: "base64",
        value: Ju(t.postData)
      } : void 0,
      headers: r.length > 0 ? r : void 0
    }).catch((n) => (this.interception.handled = !1, Yu(n)));
  }
  async _abort() {
    return this.interception.handled = !0, await e(this, Pe).failRequest().catch((t) => {
      throw this.interception.handled = !1, t;
    });
  }
  async _respond(t, r) {
    this.interception.handled = !0;
    let n;
    t.body && (n = zi.getResponse(t.body));
    const u = po(t.headers), a = u.some((l) => l.name === "content-length");
    t.contentType && u.push({
      name: "content-type",
      value: {
        type: "string",
        value: t.contentType
      }
    }), n != null && n.contentLength && !a && u.push({
      name: "content-length",
      value: {
        type: "string",
        value: String(n.contentLength)
      }
    });
    const o = t.status || 200;
    return await e(this, Pe).provideResponse({
      statusCode: o,
      headers: u.length > 0 ? u : void 0,
      reasonPhrase: Qu[o],
      body: n != null && n.base64 ? {
        type: "base64",
        value: n == null ? void 0 : n.base64
      } : void 0
    }).catch((l) => {
      throw this.interception.handled = !1, l;
    });
  }
  timing() {
    return e(this, Pe).timing();
  }
}
yt = new WeakMap(), gs = new WeakMap(), Ne = new WeakMap(), Pe = new WeakMap(), je = new WeakSet(), lu = function() {
  e(this, Pe).on("redirect", (t) => {
    const r = ui.from(t, e(this, Ne), this);
    e(this, yt).push(this), t.once("success", () => {
      e(this, Ne).page().trustedEmitter.emit("requestfinished", r);
    }), t.once("error", () => {
      e(this, Ne).page().trustedEmitter.emit("requestfailed", r);
    }), r.finalizeInterceptions();
  }), e(this, Pe).once("success", (t) => {
    S(this, gs, Jl.from(t, this, e(this, Ne).page().browser().cdpSupported));
  }), e(this, Pe).on("authenticate", e(this, pn)), e(this, Ne).page().trustedEmitter.emit("request", this), e(this, je, di) && this.interception.handlers.push(async () => {
    await this.continue({
      headers: this.headers()
    }, 0);
  });
}, di = function() {
  return !!(Object.keys(e(this, je, li)).length || Object.keys(e(this, je, hi)).length);
}, li = function() {
  var t;
  return ((t = e(this, Ne)) == null ? void 0 : t.page()._extraHTTPHeaders) ?? {};
}, hi = function() {
  var t;
  return ((t = e(this, Ne)) == null ? void 0 : t.page()._userAgentHeaders) ?? {};
}, ws = new WeakMap(), pn = new WeakMap();
ui = du;
function po(i) {
  const s = [];
  for (const [t, r] of Object.entries(i ?? []))
    if (!Object.is(r, void 0)) {
      const n = Array.isArray(r) ? r : [r];
      for (const u of n)
        s.push({
          name: t.toLowerCase(),
          value: {
            type: "string",
            value: String(u)
          }
        });
    }
  return s;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class fo extends Error {
}
var Qt, pu, fu;
class hu {
  static serialize(s) {
    switch (typeof s) {
      case "symbol":
      case "function":
        throw new fo(`Unable to serializable ${typeof s}`);
      case "object":
        return T(this, Qt, fu).call(this, s);
      case "undefined":
        return {
          type: "undefined"
        };
      case "number":
        return T(this, Qt, pu).call(this, s);
      case "bigint":
        return {
          type: "bigint",
          value: s.toString()
        };
      case "string":
        return {
          type: "string",
          value: s
        };
      case "boolean":
        return {
          type: "boolean",
          value: s
        };
    }
  }
}
Qt = new WeakSet(), pu = function(s) {
  let t;
  return Object.is(s, -0) ? t = "-0" : Object.is(s, 1 / 0) ? t = "Infinity" : Object.is(s, -1 / 0) ? t = "-Infinity" : Object.is(s, NaN) ? t = "NaN" : t = s, {
    type: "number",
    value: t
  };
}, fu = function(s) {
  if (s === null)
    return {
      type: "null"
    };
  if (Array.isArray(s))
    return {
      type: "array",
      value: s.map((r) => this.serialize(r))
    };
  if (Zu(s)) {
    try {
      JSON.stringify(s);
    } catch (r) {
      throw r instanceof TypeError && r.message.startsWith("Converting circular structure to JSON") && (r.message += " Recursive objects are not allowed."), r;
    }
    const t = [];
    for (const r in s)
      t.push([this.serialize(r), this.serialize(s[r])]);
    return {
      type: "object",
      value: t
    };
  } else {
    if (ed(s))
      return {
        type: "regexp",
        value: {
          pattern: s.source,
          flags: s.flags
        }
      };
    if (td(s))
      return {
        type: "date",
        value: s.toISOString()
      };
  }
  throw new fo("Custom object serialization not possible. Use plain objects instead.");
}, v(hu, Qt);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
function Yl(i) {
  if (i.exception.type !== "error")
    return ks.deserialize(i.exception);
  const [s = "", ...t] = i.text.split(": "), r = t.join(": "), n = new Error(r);
  n.name = s;
  const u = [];
  if (i.stackTrace && u.length < Error.stackTraceLimit)
    for (const a of i.stackTrace.callFrames.reverse()) {
      if (js.isPuppeteerURL(a.url) && a.url !== js.INTERNAL_URL) {
        const o = js.parse(a.url);
        u.unshift(`    at ${a.functionName || o.functionName} (${o.functionName} at ${o.siteString}, <anonymous>:${a.lineNumber}:${a.columnNumber})`);
      } else
        u.push(`    at ${a.functionName || "<anonymous>"} (${a.url}:${a.lineNumber}:${a.columnNumber})`);
      if (u.length >= Error.stackTraceLimit)
        break;
    }
  return n.stack = [i.text, ...u].join(`
`), n;
}
function mu(i, s) {
  return (t) => {
    throw t instanceof rd ? t.message += ` at ${i}` : t instanceof sd && (t.message = `Navigation timeout of ${s} ms exceeded`), t;
  };
}
var Ql = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (u) {
        return Promise.reject(u);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, Zl = /* @__PURE__ */ function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, n = 0;
    function u() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && n === 1) return n = 0, s.stack.push(r), Promise.resolve().then(u);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(a).then(u, function(o) {
              return t(o), u();
            });
          } else n |= 1;
        } catch (o) {
          t(o);
        }
      if (n === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return u();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
}), ys, pi;
class gu extends nd {
  constructor(t, r) {
    super(r);
    v(this, ys);
    Y(this, "realm");
    Y(this, "internalPuppeteerUtil");
    this.realm = t;
  }
  initialize() {
    this.realm.on("destroyed", ({ reason: t }) => {
      this.taskManager.terminateAll(new Error(t)), this.dispose();
    }), this.realm.on("updated", () => {
      this.internalPuppeteerUtil = void 0, this.taskManager.rerunAll();
    });
  }
  get puppeteerUtil() {
    const t = Promise.resolve();
    return id.inject((r) => {
      this.internalPuppeteerUtil && this.internalPuppeteerUtil.then((n) => {
        n.dispose();
      }), this.internalPuppeteerUtil = t.then(() => this.evaluateHandle(r));
    }, !this.internalPuppeteerUtil), this.internalPuppeteerUtil;
  }
  async evaluateHandle(t, ...r) {
    return await T(this, ys, pi).call(this, !1, t, ...r);
  }
  async evaluate(t, ...r) {
    return await T(this, ys, pi).call(this, !0, t, ...r);
  }
  createHandle(t) {
    return (t.type === "node" || t.type === "window") && this instanceof xt ? an.from(t, this) : Et.from(t, this);
  }
  async serializeAsync(t) {
    return t instanceof Wi && (t = await t.get(this)), this.serialize(t);
  }
  serialize(t) {
    if (t instanceof Et || t instanceof an) {
      if (t.realm !== this) {
        if (!(t.realm instanceof xt) || !(this instanceof xt))
          throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
        if (t.realm.environment !== this.environment)
          throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
      }
      if (t.disposed)
        throw new Error("JSHandle is disposed!");
      return t.remoteValue();
    }
    return hu.serialize(t);
  }
  async destroyHandles(t) {
    if (this.disposed)
      return;
    const r = t.map(({ id: n }) => n).filter((n) => n !== void 0);
    r.length !== 0 && await this.realm.disown(r).catch((n) => {
      De(n);
    });
  }
  async adoptHandle(t) {
    return await this.evaluateHandle((r) => r, t);
  }
  async transferHandle(t) {
    if (t.realm === this)
      return t;
    const r = this.adoptHandle(t);
    return await t.dispose(), await r;
  }
}
ys = new WeakSet(), pi = async function(t, r, ...n) {
  var y;
  const u = ad(((y = od(r)) == null ? void 0 : y.toString()) ?? js.INTERNAL_URL);
  let a;
  const o = t ? "none" : "root", l = t ? {} : {
    maxObjectDepth: 0,
    maxDomDepth: 0
  };
  if (So(r)) {
    const c = Gi.test(r) ? r : `${r}
${u}
`;
    a = this.realm.evaluate(c, !0, {
      resultOwnership: o,
      userActivation: !0,
      serializationOptions: l
    });
  } else {
    let c = Eo(r);
    c = Gi.test(c) ? c : `${c}
${u}
`, a = this.realm.callFunction(
      c,
      /* awaitPromise= */
      !0,
      {
        // LazyArgs are used only internally and should not affect the order
        // evaluate calls for the public APIs.
        arguments: n.some((p) => p instanceof Wi) ? await Promise.all(n.map((p) => this.serializeAsync(p))) : n.map((p) => this.serialize(p)),
        resultOwnership: o,
        userActivation: !0,
        serializationOptions: l
      }
    );
  }
  const d = await a;
  if ("type" in d && d.type === "exception")
    throw Yl(d.exceptionDetails);
  return t ? ks.deserialize(d.result) : this.createHandle(d.result);
};
var Wt, fn, wu, Vt;
const mn = class mn extends gu {
  constructor(t, r) {
    super(t, r.timeoutSettings);
    v(this, fn);
    v(this, Wt);
    v(this, Vt, !1);
    S(this, Wt, r);
  }
  static from(t, r) {
    var u;
    const n = new mn(t, r);
    return T(u = n, fn, wu).call(u), n;
  }
  get puppeteerUtil() {
    let t = Promise.resolve();
    return e(this, Vt) || (t = Promise.all([
      rs.from(this.environment, "__ariaQuerySelector", Vi.queryOne, !!this.sandbox),
      rs.from(this.environment, "__ariaQuerySelectorAll", async (r, n) => {
        const u = Vi.queryAll(r, n);
        return await r.realm.evaluateHandle((...a) => a, ...await xo.collect(u));
      }, !!this.sandbox)
    ]), S(this, Vt, !0)), t.then(() => super.puppeteerUtil);
  }
  get sandbox() {
    return this.realm.sandbox;
  }
  get environment() {
    return e(this, Wt);
  }
  async adoptBackendNode(t) {
    const r = { stack: [], error: void 0, hasError: !1 };
    try {
      const { object: n } = await e(this, Wt).client.send("DOM.resolveNode", {
        backendNodeId: t,
        executionContextId: await this.realm.resolveExecutionContextId()
      });
      return await Ql(r, an.from({
        handle: n.objectId,
        type: "node"
      }, this), !1).evaluateHandle((a) => a);
    } catch (n) {
      r.error = n, r.hasError = !0;
    } finally {
      Zl(r);
    }
  }
};
Wt = new WeakMap(), fn = new WeakSet(), wu = function() {
  Ki(mn.prototype, this, "initialize").call(this), this.realm.on("updated", () => {
    this.environment.clearDocumentHandle(), S(this, Vt, !1);
  });
}, Vt = new WeakMap();
let xt = mn;
var vs;
const Mi = class Mi extends gu {
  constructor(t, r) {
    super(t, r.timeoutSettings);
    v(this, vs);
    S(this, vs, r);
  }
  static from(t, r) {
    const n = new Mi(t, r);
    return n.initialize(), n;
  }
  get environment() {
    return e(this, vs);
  }
  async adoptBackendNode() {
    throw new Error("Cannot adopt DOM nodes into a worker.");
  }
};
vs = new WeakMap();
let fi = Mi;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var bs, Cs;
const Oi = class Oi extends cd {
  constructor(t, r) {
    super(r.origin);
    v(this, bs);
    v(this, Cs);
    S(this, bs, t), S(this, Cs, fi.from(r, this));
  }
  static from(t, r) {
    return new Oi(t, r);
  }
  get frame() {
    return e(this, bs);
  }
  mainRealm() {
    return e(this, Cs);
  }
  get client() {
    throw new he();
  }
};
bs = new WeakMap(), Cs = new WeakMap();
let mi = Oi;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var eh = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, ct = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, mo = function(i, s, t) {
  return typeof s == "symbol" && (s = s.description ? "[".concat(s.description, "]") : ""), Object.defineProperty(i, "name", { configurable: !0, value: t ? "".concat(t, " ", s) : s });
};
function th(i) {
  switch (i) {
    case "group":
      return "startGroup";
    case "groupCollapsed":
      return "startGroupCollapsed";
    case "groupEnd":
      return "endGroup";
    default:
      return i;
  }
}
let rh = (() => {
  var c, p, w, yu, gi, Zs, f, en, tn, g;
  let i = gd, s = [], t, r, n, u, a, o, l, d, y;
  return g = class extends i {
    constructor(k, b) {
      super();
      v(this, w);
      v(this, c, eh(this, s));
      Y(this, "browsingContext");
      v(this, p, /* @__PURE__ */ new WeakMap());
      Y(this, "realms");
      Y(this, "_id");
      Y(this, "client");
      Y(this, "accessibility");
      v(this, f, /* @__PURE__ */ new Map());
      S(this, c, k), this.browsingContext = b, this._id = b.id, this.client = new ts(this), this.realms = {
        default: xt.from(this.browsingContext.defaultRealm, this),
        internal: xt.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 1e4)}`), this)
      }, this.accessibility = new ud(this.realms.default, this._id);
    }
    static from(k, b) {
      var P;
      const O = new g(k, b);
      return T(P = O, w, yu).call(P), O;
    }
    get timeoutSettings() {
      return this.page()._timeoutSettings;
    }
    mainRealm() {
      return this.realms.default;
    }
    isolatedRealm() {
      return this.realms.internal;
    }
    realm(k) {
      for (const b of Object.values(this.realms))
        if (b.realm.id === k)
          return b;
    }
    page() {
      let k = e(this, c);
      for (; k instanceof g; )
        k = e(k, c);
      return k;
    }
    url() {
      return this.browsingContext.url;
    }
    parentFrame() {
      return e(this, c) instanceof g ? e(this, c) : null;
    }
    childFrames() {
      return [...this.browsingContext.children].map((k) => e(this, p).get(k));
    }
    async goto(k, b = {}) {
      const [O] = await Promise.all([
        this.waitForNavigation(b),
        // Some implementations currently only report errors when the
        // readiness=interactive.
        //
        // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
        this.browsingContext.navigate(
          k,
          "interactive"
          /* Bidi.BrowsingContext.ReadinessState.Interactive */
        ).catch((P) => {
          if (!(Po(P) && P.message.includes("net::ERR_HTTP_RESPONSE_CODE_FAILURE")) && !P.message.includes("navigation canceled") && !P.message.includes("Navigation was aborted by another navigation"))
            throw P;
        })
      ]).catch(mu(k, b.timeout ?? this.timeoutSettings.navigationTimeout()));
      return O;
    }
    async setContent(k, b = {}) {
      await Promise.all([
        this.setFrameContent(k),
        sn(Ts([
          e(this, w, en).call(this, b),
          e(this, w, tn).call(this, b)
        ]))
      ]);
    }
    async waitForNavigation(k = {}) {
      const { timeout: b = this.timeoutSettings.navigationTimeout(), signal: O } = k, P = this.childFrames().map((R) => {
        var I;
        return T(I = R, w, Zs).call(I);
      });
      return await sn(Ts([
        pd(Ae(this.browsingContext, "navigation"), Ae(this.browsingContext, "historyUpdated").pipe(_t(() => ({ navigation: null })))).pipe(Xi()).pipe(En(({ navigation: R }) => R === null ? et(null) : e(this, w, en).call(this, k).pipe(fd(() => P.length === 0 ? et(void 0) : Ts(P)), ht(Ae(R, "fragment"), Ae(R, "failed"), Ae(R, "aborted").pipe(_t(({ url: I }) => {
          throw new Error(`Navigation aborted: ${I}`);
        }))), En(() => {
          if (R.request) {
            let I = function(D) {
              return R === null ? et(null) : D.response || D.error ? et(R) : D.redirect ? I(D.redirect) : Ae(D, "success").pipe(ht(Ae(D, "error")), ht(Ae(D, "redirect"))).pipe(En(() => I(D)));
            };
            return I(R.request);
          }
          return et(R);
        })))),
        e(this, w, tn).call(this, k)
      ]).pipe(_t(([R]) => {
        if (!R)
          return null;
        const I = R.request;
        if (!I)
          return null;
        const D = I.lastRedirect ?? I;
        return uu.get(D).response();
      }), ht(rn(b), md(O), T(this, w, Zs).call(this).pipe(_t(() => {
        throw new xi("Frame detached.");
      })))));
    }
    waitForDevicePrompt() {
      throw new he();
    }
    get detached() {
      return this.browsingContext.closed;
    }
    async exposeFunction(k, b) {
      if (e(this, f).has(k))
        throw new Error(`Failed to add page binding with name ${k}: globalThis['${k}'] already exists!`);
      const O = await rs.from(this, k, b);
      e(this, f).set(k, O);
    }
    async removeExposedFunction(k) {
      const b = e(this, f).get(k);
      if (!b)
        throw new Error(`Failed to remove page binding with name ${k}: window['${k}'] does not exists!`);
      e(this, f).delete(k), await b[Symbol.asyncDispose]();
    }
    async createCDPSession() {
      if (!this.page().browser().cdpSupported)
        throw new he();
      return await this.page().browser().cdpConnection._createSession({ targetId: this._id });
    }
    async setFiles(k, b) {
      await this.browsingContext.setFiles(
        // SAFETY: ElementHandles are always remote references.
        k.remoteValue(),
        b
      );
    }
    async locateNodes(k, b) {
      return await this.browsingContext.locateNodes(
        b,
        // SAFETY: ElementHandles are always remote references.
        [k.remoteValue()]
      );
    }
  }, c = new WeakMap(), p = new WeakMap(), w = new WeakSet(), yu = function() {
    for (const k of this.browsingContext.children)
      T(this, w, gi).call(this, k);
    this.browsingContext.on("browsingcontext", ({ browsingContext: k }) => {
      T(this, w, gi).call(this, k);
    }), this.browsingContext.on("closed", () => {
      for (const k of ts.sessions.values())
        k.frame === this && k.onClose();
      this.page().trustedEmitter.emit("framedetached", this);
    }), this.browsingContext.on("request", ({ request: k }) => {
      const b = du.from(k, this);
      k.once("success", () => {
        this.page().trustedEmitter.emit("requestfinished", b);
      }), k.once("error", () => {
        this.page().trustedEmitter.emit("requestfailed", b);
      }), b.finalizeInterceptions();
    }), this.browsingContext.on("navigation", ({ navigation: k }) => {
      k.once("fragment", () => {
        this.page().trustedEmitter.emit("framenavigated", this);
      });
    }), this.browsingContext.on("load", () => {
      this.page().trustedEmitter.emit("load", void 0);
    }), this.browsingContext.on("DOMContentLoaded", () => {
      this._hasStartedLoading = !0, this.page().trustedEmitter.emit("domcontentloaded", void 0), this.page().trustedEmitter.emit("framenavigated", this);
    }), this.browsingContext.on("userprompt", ({ userPrompt: k }) => {
      this.page().trustedEmitter.emit("dialog", ci.from(k));
    }), this.browsingContext.on("log", ({ entry: k }) => {
      if (this._id === k.source.context)
        if (sh(k)) {
          const b = k.args.map((P) => this.mainRealm().createHandle(P)), O = b.reduce((P, R) => {
            const I = R instanceof Et && R.isPrimitiveValue ? ks.deserialize(R.remoteValue()) : R.toString();
            return `${P} ${I}`;
          }, "").slice(1);
          this.page().trustedEmitter.emit("console", new dd(th(k.method), O, b, ih(k.stackTrace), this));
        } else if (nh(k)) {
          const b = new Error(k.text ?? ""), O = b.message.split(`
`).length, P = b.stack.split(`
`).splice(0, O), R = [];
          if (k.stackTrace) {
            for (const I of k.stackTrace.callFrames)
              if (R.push(`    at ${I.functionName || "<anonymous>"} (${I.url}:${I.lineNumber + 1}:${I.columnNumber + 1})`), R.length >= Error.stackTraceLimit)
                break;
          }
          b.stack = [...P, ...R].join(`
`), this.page().trustedEmitter.emit("pageerror", b);
        } else
          De(`Unhandled LogEntry with type "${k.type}", text "${k.text}" and level "${k.level}"`);
    }), this.browsingContext.on("worker", ({ realm: k }) => {
      const b = mi.from(this, k);
      k.on("destroyed", () => {
        this.page().trustedEmitter.emit("workerdestroyed", b);
      }), this.page().trustedEmitter.emit("workercreated", b);
    });
  }, gi = function(k) {
    const b = g.from(this, k);
    return e(this, p).set(k, b), this.page().trustedEmitter.emit("frameattached", b), k.on("closed", () => {
      e(this, p).delete(k);
    }), b;
  }, Zs = function() {
    return ld(() => this.detached ? et(this) : Ae(
      this.page().trustedEmitter,
      "framedetached"
      /* PageEvent.FrameDetached */
    ).pipe(hd((k) => k === this)));
  }, f = new WeakMap(), en = function() {
    return a.value;
  }, tn = function() {
    return l.value;
  }, (() => {
    const k = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    t = [at], r = [at], n = [at], u = [at], o = [at], d = [at], y = [at], ct(g, null, t, { kind: "method", name: "goto", static: !1, private: !1, access: { has: (b) => "goto" in b, get: (b) => b.goto }, metadata: k }, null, s), ct(g, null, r, { kind: "method", name: "setContent", static: !1, private: !1, access: { has: (b) => "setContent" in b, get: (b) => b.setContent }, metadata: k }, null, s), ct(g, null, n, { kind: "method", name: "waitForNavigation", static: !1, private: !1, access: { has: (b) => "waitForNavigation" in b, get: (b) => b.waitForNavigation }, metadata: k }, null, s), ct(g, a = { value: mo(function(b = {}) {
      let { waitUntil: O = "load" } = b;
      const { timeout: P = this.timeoutSettings.navigationTimeout() } = b;
      Array.isArray(O) || (O = [O]);
      const R = /* @__PURE__ */ new Set();
      for (const I of O)
        switch (I) {
          case "load": {
            R.add("load");
            break;
          }
          case "domcontentloaded": {
            R.add("DOMContentLoaded");
            break;
          }
        }
      return R.size === 0 ? et(void 0) : Ts([...R].map((I) => Ae(this.browsingContext, I))).pipe(_t(() => {
      }), Xi(), ht(rn(P), T(this, w, Zs).call(this).pipe(_t(() => {
        throw new Error("Frame detached.");
      }))));
    }, "#waitForLoad$") }, u, { kind: "method", name: "#waitForLoad$", static: !1, private: !0, access: { has: (b) => Is(w, b), get: (b) => e(b, w, en) }, metadata: k }, null, s), ct(g, l = { value: mo(function(b = {}) {
      let { waitUntil: O = "load" } = b;
      Array.isArray(O) || (O = [O]);
      let P = 1 / 0;
      for (const R of O)
        switch (R) {
          case "networkidle0": {
            P = Math.min(0, P);
            break;
          }
          case "networkidle2": {
            P = Math.min(2, P);
            break;
          }
        }
      return P === 1 / 0 ? et(void 0) : this.page().waitForNetworkIdle$({
        idleTime: 500,
        timeout: b.timeout ?? this.timeoutSettings.timeout(),
        concurrency: P
      });
    }, "#waitForNetworkIdle$") }, o, { kind: "method", name: "#waitForNetworkIdle$", static: !1, private: !0, access: { has: (b) => Is(w, b), get: (b) => e(b, w, tn) }, metadata: k }, null, s), ct(g, null, d, { kind: "method", name: "setFiles", static: !1, private: !1, access: { has: (b) => "setFiles" in b, get: (b) => b.setFiles }, metadata: k }, null, s), ct(g, null, y, { kind: "method", name: "locateNodes", static: !1, private: !1, access: { has: (b) => "locateNodes" in b, get: (b) => b.locateNodes }, metadata: k }, null, s), k && Object.defineProperty(g, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: k });
  })(), g;
})();
function sh(i) {
  return i.type === "console";
}
function nh(i) {
  return i.type === "javascript";
}
function ih(i) {
  const s = [];
  if (i)
    for (const t of i.callFrames)
      s.push({
        url: t.url,
        lineNumber: t.lineNumber,
        columnNumber: t.columnNumber
      });
  return s;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Fe;
(function(i) {
  i.None = "none", i.Key = "key", i.Pointer = "pointer", i.Wheel = "wheel";
})(Fe || (Fe = {}));
var xe;
(function(i) {
  i.Pause = "pause", i.KeyDown = "keyDown", i.KeyUp = "keyUp", i.PointerUp = "pointerUp", i.PointerDown = "pointerDown", i.PointerMove = "pointerMove", i.Scroll = "scroll";
})(xe || (xe = {}));
const Gr = (i) => {
  switch (i) {
    case "\r":
    case `
`:
      i = "Enter";
      break;
  }
  if ([...i].length === 1)
    return i;
  switch (i) {
    case "Cancel":
      return "";
    case "Help":
      return "";
    case "Backspace":
      return "";
    case "Tab":
      return "";
    case "Clear":
      return "";
    case "Enter":
      return "";
    case "Shift":
    case "ShiftLeft":
      return "";
    case "Control":
    case "ControlLeft":
      return "";
    case "Alt":
    case "AltLeft":
      return "";
    case "Pause":
      return "";
    case "Escape":
      return "";
    case "PageUp":
      return "";
    case "PageDown":
      return "";
    case "End":
      return "";
    case "Home":
      return "";
    case "ArrowLeft":
      return "";
    case "ArrowUp":
      return "";
    case "ArrowRight":
      return "";
    case "ArrowDown":
      return "";
    case "Insert":
      return "";
    case "Delete":
      return "";
    case "NumpadEqual":
      return "";
    case "Numpad0":
      return "";
    case "Numpad1":
      return "";
    case "Numpad2":
      return "";
    case "Numpad3":
      return "";
    case "Numpad4":
      return "";
    case "Numpad5":
      return "";
    case "Numpad6":
      return "";
    case "Numpad7":
      return "";
    case "Numpad8":
      return "";
    case "Numpad9":
      return "";
    case "NumpadMultiply":
      return "";
    case "NumpadAdd":
      return "";
    case "NumpadSubtract":
      return "";
    case "NumpadDecimal":
      return "";
    case "NumpadDivide":
      return "";
    case "F1":
      return "";
    case "F2":
      return "";
    case "F3":
      return "";
    case "F4":
      return "";
    case "F5":
      return "";
    case "F6":
      return "";
    case "F7":
      return "";
    case "F8":
      return "";
    case "F9":
      return "";
    case "F10":
      return "";
    case "F11":
      return "";
    case "F12":
      return "";
    case "Meta":
    case "MetaLeft":
      return "";
    case "ShiftRight":
      return "";
    case "ControlRight":
      return "";
    case "AltRight":
      return "";
    case "MetaRight":
      return "";
    case "Digit0":
      return "0";
    case "Digit1":
      return "1";
    case "Digit2":
      return "2";
    case "Digit3":
      return "3";
    case "Digit4":
      return "4";
    case "Digit5":
      return "5";
    case "Digit6":
      return "6";
    case "Digit7":
      return "7";
    case "Digit8":
      return "8";
    case "Digit9":
      return "9";
    case "KeyA":
      return "a";
    case "KeyB":
      return "b";
    case "KeyC":
      return "c";
    case "KeyD":
      return "d";
    case "KeyE":
      return "e";
    case "KeyF":
      return "f";
    case "KeyG":
      return "g";
    case "KeyH":
      return "h";
    case "KeyI":
      return "i";
    case "KeyJ":
      return "j";
    case "KeyK":
      return "k";
    case "KeyL":
      return "l";
    case "KeyM":
      return "m";
    case "KeyN":
      return "n";
    case "KeyO":
      return "o";
    case "KeyP":
      return "p";
    case "KeyQ":
      return "q";
    case "KeyR":
      return "r";
    case "KeyS":
      return "s";
    case "KeyT":
      return "t";
    case "KeyU":
      return "u";
    case "KeyV":
      return "v";
    case "KeyW":
      return "w";
    case "KeyX":
      return "x";
    case "KeyY":
      return "y";
    case "KeyZ":
      return "z";
    case "Semicolon":
      return ";";
    case "Equal":
      return "=";
    case "Comma":
      return ",";
    case "Minus":
      return "-";
    case "Period":
      return ".";
    case "Slash":
      return "/";
    case "Backquote":
      return "`";
    case "BracketLeft":
      return "[";
    case "Backslash":
      return "\\";
    case "BracketRight":
      return "]";
    case "Quote":
      return '"';
    default:
      throw new Error(`Unknown key: "${i}"`);
  }
};
var Ye;
class ah extends wd {
  constructor(t) {
    super();
    v(this, Ye);
    S(this, Ye, t);
  }
  async down(t, r) {
    await e(this, Ye).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: xe.KeyDown,
            value: Gr(t)
          }
        ]
      }
    ]);
  }
  async up(t) {
    await e(this, Ye).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: xe.KeyUp,
            value: Gr(t)
          }
        ]
      }
    ]);
  }
  async press(t, r = {}) {
    const { delay: n = 0 } = r, u = [
      {
        type: xe.KeyDown,
        value: Gr(t)
      }
    ];
    n > 0 && u.push({
      type: xe.Pause,
      duration: n
    }), u.push({
      type: xe.KeyUp,
      value: Gr(t)
    }), await e(this, Ye).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: u
      }
    ]);
  }
  async type(t, r = {}) {
    const { delay: n = 0 } = r, u = [...t].map(Gr), a = [];
    if (n <= 0)
      for (const o of u)
        a.push({
          type: xe.KeyDown,
          value: o
        }, {
          type: xe.KeyUp,
          value: o
        });
    else
      for (const o of u)
        a.push({
          type: xe.KeyDown,
          value: o
        }, {
          type: xe.Pause,
          duration: n
        }, {
          type: xe.KeyUp,
          value: o
        });
    await e(this, Ye).mainFrame().browsingContext.performActions([
      {
        type: Fe.Key,
        id: "__puppeteer_keyboard",
        actions: a
      }
    ]);
  }
  async sendCharacter(t) {
    if ([...t].length > 1)
      throw new Error("Cannot send more than 1 character.");
    await (await e(this, Ye).focusedFrame()).isolatedRealm().evaluate(async (n) => {
      document.execCommand("insertText", !1, n);
    }, t);
  }
}
Ye = new WeakMap();
const Rn = (i) => {
  switch (i) {
    case rt.Left:
      return 0;
    case rt.Middle:
      return 1;
    case rt.Right:
      return 2;
    case rt.Back:
      return 3;
    case rt.Forward:
      return 4;
  }
};
var He, vt;
class oh extends yd {
  constructor(t) {
    super();
    v(this, He);
    v(this, vt, { x: 0, y: 0 });
    S(this, He, t);
  }
  async reset() {
    S(this, vt, { x: 0, y: 0 }), await e(this, He).mainFrame().browsingContext.releaseActions();
  }
  async move(t, r, n = {}) {
    const u = e(this, vt), a = {
      x: Math.round(t),
      y: Math.round(r)
    }, o = [], l = n.steps ?? 0;
    for (let d = 0; d < l; ++d)
      o.push({
        type: xe.PointerMove,
        x: u.x + (a.x - u.x) * (d / l),
        y: u.y + (a.y - u.y) * (d / l),
        origin: n.origin
      });
    o.push({
      type: xe.PointerMove,
      ...a,
      origin: n.origin
    }), S(this, vt, a), await e(this, He).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: o
      }
    ]);
  }
  async down(t = {}) {
    await e(this, He).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: xe.PointerDown,
            button: Rn(t.button ?? rt.Left)
          }
        ]
      }
    ]);
  }
  async up(t = {}) {
    await e(this, He).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: xe.PointerUp,
            button: Rn(t.button ?? rt.Left)
          }
        ]
      }
    ]);
  }
  async click(t, r, n = {}) {
    const u = [
      {
        type: xe.PointerMove,
        x: Math.round(t),
        y: Math.round(r),
        origin: n.origin
      }
    ], a = {
      type: xe.PointerDown,
      button: Rn(n.button ?? rt.Left)
    }, o = {
      type: xe.PointerUp,
      button: a.button
    };
    for (let l = 1; l < (n.count ?? 1); ++l)
      u.push(a, o);
    u.push(a), n.delay && u.push({
      type: xe.Pause,
      duration: n.delay
    }), u.push(o), await e(this, He).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: "__puppeteer_mouse",
        actions: u
      }
    ]);
  }
  async wheel(t = {}) {
    await e(this, He).mainFrame().browsingContext.performActions([
      {
        type: Fe.Wheel,
        id: "__puppeteer_wheel",
        actions: [
          {
            type: xe.Scroll,
            ...e(this, vt) ?? {
              x: 0,
              y: 0
            },
            deltaX: t.deltaX ?? 0,
            deltaY: t.deltaY ?? 0
          }
        ]
      }
    ]);
  }
  drag() {
    throw new he();
  }
  dragOver() {
    throw new he();
  }
  dragEnter() {
    throw new he();
  }
  drop() {
    throw new he();
  }
  dragAndDrop() {
    throw new he();
  }
}
He = new WeakMap(), vt = new WeakMap();
var xs, Es, Ss, bt, Ct, Ps, Gt;
class ch {
  constructor(s, t, r, n, u, a) {
    v(this, xs, !1);
    v(this, Es);
    v(this, Ss);
    v(this, bt);
    v(this, Ct);
    v(this, Ps);
    v(this, Gt);
    S(this, Ct, s), S(this, Ps, t), S(this, Es, Math.round(n)), S(this, Ss, Math.round(u)), S(this, Gt, a), S(this, bt, `__puppeteer_finger_${r}`);
  }
  async start(s = {}) {
    if (e(this, xs))
      throw new bd("Touch has already started");
    await e(this, Ct).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: e(this, bt),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: xe.PointerMove,
            x: e(this, Es),
            y: e(this, Ss),
            origin: s.origin
          },
          {
            ...e(this, Gt),
            type: xe.PointerDown,
            button: 0
          }
        ]
      }
    ]), S(this, xs, !0);
  }
  move(s, t) {
    const r = Math.round(s), n = Math.round(t);
    return e(this, Ct).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: e(this, bt),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            ...e(this, Gt),
            type: xe.PointerMove,
            x: r,
            y: n
          }
        ]
      }
    ]);
  }
  async end() {
    await e(this, Ct).mainFrame().browsingContext.performActions([
      {
        type: Fe.Pointer,
        id: e(this, bt),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: xe.PointerUp,
            button: 0
          }
        ]
      }
    ]), e(this, Ps).removeHandle(this);
  }
}
xs = new WeakMap(), Es = new WeakMap(), Ss = new WeakMap(), bt = new WeakMap(), Ct = new WeakMap(), Ps = new WeakMap(), Gt = new WeakMap();
var _s;
class uh extends vd {
  constructor(t) {
    super();
    v(this, _s);
    S(this, _s, t);
  }
  async touchStart(t, r, n = {}) {
    const u = this.idGenerator(), a = {
      width: 0.5 * 2,
      // 2 times default touch radius.
      height: 0.5 * 2,
      // 2 times default touch radius.
      pressure: 0.5,
      altitudeAngle: Math.PI / 2
    }, o = new ch(e(this, _s), this, u, t, r, a);
    return await o.start(n), this.touches.push(o), o;
  }
}
_s = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var dh = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, go = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, wo = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (u) {
        return Promise.reject(u);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, yo = /* @__PURE__ */ function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, n = 0;
    function u() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && n === 1) return n = 0, s.stack.push(r), Promise.resolve().then(u);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(a).then(u, function(o) {
              return t(o), u();
            });
          } else n |= 1;
        } catch (o) {
          t(o);
        }
      if (n === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return u();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let on = (() => {
  var n, u, a, o, l, d, y, c, vu, w, E, m, h, f, es, wi, yi, N;
  let i = kd, s, t = [], r = [];
  return N = class extends i {
    constructor(b, O) {
      super();
      v(this, c);
      v(this, n, go(this, t, new ge()));
      v(this, u, go(this, r));
      v(this, a);
      v(this, o, null);
      v(this, l, /* @__PURE__ */ new Set());
      Y(this, "keyboard");
      Y(this, "mouse");
      Y(this, "touchscreen");
      Y(this, "tracing");
      Y(this, "coverage");
      v(this, d);
      v(this, y);
      /**
       * @internal
       */
      Y(this, "_userAgentHeaders", {});
      v(this, w);
      v(this, E);
      v(this, m);
      /**
       * @internal
       */
      Y(this, "_extraHTTPHeaders", {});
      v(this, h);
      /**
       * @internal
       */
      Y(this, "_credentials", null);
      v(this, f);
      S(this, u, b), S(this, a, rh.from(this, O)), S(this, d, new Cd(e(this, a).client)), this.tracing = new xd(e(this, a).client), this.coverage = new Ed(e(this, a).client), this.keyboard = new ah(this), this.mouse = new oh(this), this.touchscreen = new uh(this);
    }
    static from(b, O) {
      var R;
      const P = new N(b, O);
      return T(R = P, c, vu).call(R), P;
    }
    get trustedEmitter() {
      return e(this, n);
    }
    set trustedEmitter(b) {
      S(this, n, b);
    }
    _client() {
      return e(this, a).client;
    }
    async setUserAgent(b, O) {
      if (!e(this, u).browser().cdpSupported && O)
        throw new he("Current Browser does not support `userAgentMetadata`");
      if (e(this, u).browser().cdpSupported && O)
        return await this._client().send("Network.setUserAgentOverride", {
          userAgent: b,
          userAgentMetadata: O
        });
      const P = b !== "";
      b = b ?? await e(this, u).browser().userAgent(), this._userAgentHeaders = P ? {
        "User-Agent": b
      } : {}, S(this, w, await T(this, c, es).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], e(this, w), P));
      const R = (H) => {
        Object.defineProperty(navigator, "userAgent", {
          value: H
        });
      }, I = [e(this, a)];
      for (const H of I)
        I.push(...H.childFrames());
      e(this, E) && await this.removeScriptToEvaluateOnNewDocument(e(this, E));
      const [D] = await Promise.all([
        P ? this.evaluateOnNewDocument(R, b) : void 0,
        // When we disable the UserAgent we want to
        // evaluate the original value in all Browsing Contexts
        I.map((H) => H.evaluate(R, b))
      ]);
      S(this, E, D == null ? void 0 : D.identifier);
    }
    async setBypassCSP(b) {
      await this._client().send("Page.setBypassCSP", { enabled: b });
    }
    async queryObjects(b) {
      Oe(!b.disposed, "Prototype JSHandle is disposed!"), Oe(b.id, "Prototype JSHandle must not be referencing primitive value");
      const O = await e(this, a).client.send("Runtime.queryObjects", {
        prototypeObjectId: b.id
      });
      return e(this, a).mainRealm().createHandle({
        type: "array",
        handle: O.objects.objectId
      });
    }
    browser() {
      return this.browserContext().browser();
    }
    browserContext() {
      return e(this, u);
    }
    mainFrame() {
      return e(this, a);
    }
    async focusedFrame() {
      const b = { stack: [], error: void 0, hasError: !1 };
      try {
        const P = wo(b, await this.mainFrame().isolatedRealm().evaluateHandle(() => {
          let I = window;
          for (; (I.document.activeElement instanceof I.HTMLIFrameElement || I.document.activeElement instanceof I.HTMLFrameElement) && I.document.activeElement.contentWindow !== null; )
            I = I.document.activeElement.contentWindow;
          return I;
        }), !1).remoteValue();
        Oe(P.type === "window");
        const R = this.frames().find((I) => I._id === P.value.context);
        return Oe(R), R;
      } catch (O) {
        b.error = O, b.hasError = !0;
      } finally {
        yo(b);
      }
    }
    frames() {
      const b = [e(this, a)];
      for (const O of b)
        b.push(...O.childFrames());
      return b;
    }
    isClosed() {
      return e(this, a).detached;
    }
    async close(b) {
      const O = { stack: [], error: void 0, hasError: !1 };
      try {
        const P = wo(O, await e(this, u).waitForScreenshotOperations(), !1);
        try {
          await e(this, a).browsingContext.close(b == null ? void 0 : b.runBeforeUnload);
        } catch {
          return;
        }
      } catch (P) {
        O.error = P, O.hasError = !0;
      } finally {
        yo(O);
      }
    }
    async reload(b = {}) {
      const [O] = await Promise.all([
        e(this, a).waitForNavigation(b),
        e(this, a).browsingContext.reload()
      ]).catch(mu(this.url(), b.timeout ?? this._timeoutSettings.navigationTimeout()));
      return O;
    }
    setDefaultNavigationTimeout(b) {
      this._timeoutSettings.setDefaultNavigationTimeout(b);
    }
    setDefaultTimeout(b) {
      this._timeoutSettings.setDefaultTimeout(b);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    getDefaultNavigationTimeout() {
      return this._timeoutSettings.navigationTimeout();
    }
    isJavaScriptEnabled() {
      return e(this, d).javascriptEnabled;
    }
    async setGeolocation(b) {
      return await e(this, d).setGeolocation(b);
    }
    async setJavaScriptEnabled(b) {
      return await e(this, d).setJavaScriptEnabled(b);
    }
    async emulateMediaType(b) {
      return await e(this, d).emulateMediaType(b);
    }
    async emulateCPUThrottling(b) {
      return await e(this, d).emulateCPUThrottling(b);
    }
    async emulateMediaFeatures(b) {
      return await e(this, d).emulateMediaFeatures(b);
    }
    async emulateTimezone(b) {
      return await e(this, d).emulateTimezone(b);
    }
    async emulateIdleState(b) {
      return await e(this, d).emulateIdleState(b);
    }
    async emulateVisionDeficiency(b) {
      return await e(this, d).emulateVisionDeficiency(b);
    }
    async setViewport(b) {
      if (!this.browser().cdpSupported) {
        await e(this, a).browsingContext.setViewport({
          viewport: b != null && b.width && (b != null && b.height) ? {
            width: b.width,
            height: b.height
          } : null,
          devicePixelRatio: b != null && b.deviceScaleFactor ? b.deviceScaleFactor : null
        }), S(this, o, b);
        return;
      }
      const O = await e(this, d).emulateViewport(b);
      S(this, o, b), O && await this.reload();
    }
    viewport() {
      return e(this, o);
    }
    async pdf(b = {}) {
      const { timeout: O = this._timeoutSettings.timeout(), path: P = void 0 } = b, { printBackground: R, margin: I, landscape: D, width: H, height: K, pageRanges: Q, scale: j, preferCSSPageSize: F } = Sd(b, "cm"), B = Q ? Q.split(", ") : [];
      await sn(Ji(this.mainFrame().isolatedRealm().evaluate(() => document.fonts.ready)).pipe(ht(rn(O))));
      const L = await sn(Ji(e(this, a).browsingContext.print({
        background: R,
        margin: I,
        orientation: D ? "landscape" : "portrait",
        page: {
          width: H,
          height: K
        },
        pageRanges: B,
        scale: j,
        shrinkToFit: !F
      })).pipe(ht(rn(O)))), $ = Pd(L, !0);
      return await this._maybeWriteTypedArrayToFile(P, $), $;
    }
    async createPDFStream(b) {
      const O = await this.pdf(b);
      return new ReadableStream({
        start(P) {
          P.enqueue(O), P.close();
        }
      });
    }
    async _screenshot(b) {
      const { clip: O, type: P, captureBeyondViewport: R, quality: I } = b;
      if (b.omitBackground !== void 0 && b.omitBackground)
        throw new he("BiDi does not support 'omitBackground'.");
      if (b.optimizeForSpeed !== void 0 && b.optimizeForSpeed)
        throw new he("BiDi does not support 'optimizeForSpeed'.");
      if (b.fromSurface !== void 0 && !b.fromSurface)
        throw new he("BiDi does not support 'fromSurface'.");
      if (O !== void 0 && O.scale !== void 0 && O.scale !== 1)
        throw new he("BiDi does not support 'scale' in 'clip'.");
      let D;
      if (O)
        if (R)
          D = O;
        else {
          const [K, Q] = await this.evaluate(() => {
            if (!window.visualViewport)
              throw new Error("window.visualViewport is not supported.");
            return [
              window.visualViewport.pageLeft,
              window.visualViewport.pageTop
            ];
          });
          D = {
            ...O,
            x: O.x - K,
            y: O.y - Q
          };
        }
      return await e(this, a).browsingContext.captureScreenshot({
        origin: R ? "document" : "viewport",
        format: {
          type: `image/${P}`,
          ...I !== void 0 ? { quality: I / 100 } : {}
        },
        ...D ? { clip: { type: "box", ...D } } : {}
      });
    }
    async createCDPSession() {
      return await e(this, a).createCDPSession();
    }
    async bringToFront() {
      await e(this, a).browsingContext.activate();
    }
    async evaluateOnNewDocument(b, ...O) {
      const P = lh(b, ...O);
      return { identifier: await e(this, a).browsingContext.addPreloadScript(P) };
    }
    async removeScriptToEvaluateOnNewDocument(b) {
      await e(this, a).browsingContext.removePreloadScript(b);
    }
    async exposeFunction(b, O) {
      return await this.mainFrame().exposeFunction(b, "default" in O ? O.default : O);
    }
    isDragInterceptionEnabled() {
      return !1;
    }
    async setCacheEnabled(b) {
      if (!e(this, u).browser().cdpSupported) {
        await e(this, a).browsingContext.setCacheBehavior(b ? "default" : "bypass");
        return;
      }
      await this._client().send("Network.setCacheDisabled", {
        cacheDisabled: !b
      });
    }
    async cookies(...b) {
      const O = (b.length ? b : [this.url()]).map((R) => new URL(R));
      return (await e(this, a).browsingContext.getCookies()).map((R) => bu(R)).filter((R) => O.some((I) => fh(R, I)));
    }
    isServiceWorkerBypassed() {
      throw new he();
    }
    target() {
      throw new he();
    }
    waitForFileChooser() {
      throw new he();
    }
    workers() {
      return [...e(this, l)];
    }
    async setRequestInterception(b) {
      S(this, m, await T(this, c, es).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], e(this, m), b));
    }
    async setExtraHTTPHeaders(b) {
      const O = {};
      for (const [P, R] of Object.entries(b))
        Oe(So(R), `Expected value of header "${P}" to be String, but "${typeof R}" is found.`), O[P.toLowerCase()] = R;
      this._extraHTTPHeaders = O, S(this, h, await T(this, c, es).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], e(this, h), !!Object.keys(this._extraHTTPHeaders).length));
    }
    async authenticate(b) {
      S(this, f, await T(this, c, es).call(this, [
        "authRequired"
        /* Bidi.Network.InterceptPhase.AuthRequired */
      ], e(this, f), !!b)), this._credentials = b;
    }
    setDragInterception() {
      throw new he();
    }
    setBypassServiceWorker() {
      throw new he();
    }
    async setOfflineMode(b) {
      if (!e(this, u).browser().cdpSupported)
        throw new he();
      return e(this, y) || S(this, y, {
        offline: !1,
        upload: -1,
        download: -1,
        latency: 0
      }), e(this, y).offline = b, await T(this, c, wi).call(this);
    }
    async emulateNetworkConditions(b) {
      if (!e(this, u).browser().cdpSupported)
        throw new he();
      return e(this, y) || S(this, y, {
        offline: !1,
        upload: -1,
        download: -1,
        latency: 0
      }), e(this, y).upload = b ? b.upload : -1, e(this, y).download = b ? b.download : -1, e(this, y).latency = b ? b.latency : 0, await T(this, c, wi).call(this);
    }
    async setCookie(...b) {
      const O = this.url(), P = O.startsWith("http");
      for (const R of b) {
        let I = R.url || "";
        !I && P && (I = O), Oe(I !== "about:blank", `Blank page can not have cookie "${R.name}"`), Oe(!String.prototype.startsWith.call(I || "", "data:"), `Data URL page can not have cookie "${R.name}"`), Oe(R.partitionKey === void 0 || typeof R.partitionKey == "string", "BiDi only allows domain partition keys");
        const D = URL.canParse(I) ? new URL(I) : void 0, H = R.domain ?? (D == null ? void 0 : D.hostname);
        Oe(H !== void 0, "At least one of the url and domain needs to be specified");
        const K = {
          domain: H,
          name: R.name,
          value: {
            type: "string",
            value: R.value
          },
          ...R.path !== void 0 ? { path: R.path } : {},
          ...R.httpOnly !== void 0 ? { httpOnly: R.httpOnly } : {},
          ...R.secure !== void 0 ? { secure: R.secure } : {},
          ...R.sameSite !== void 0 ? { sameSite: xu(R.sameSite) } : {},
          expiry: Eu(R.expires),
          // Chrome-specific properties.
          ...Cu(R, "sameParty", "sourceScheme", "priority", "url")
        };
        R.partitionKey !== void 0 ? await this.browserContext().userContext.setCookie(K, R.partitionKey) : await e(this, a).browsingContext.setCookie(K);
      }
    }
    async deleteCookie(...b) {
      await Promise.all(b.map(async (O) => {
        const P = O.url ?? this.url(), R = URL.canParse(P) ? new URL(P) : void 0, I = O.domain ?? (R == null ? void 0 : R.hostname);
        Oe(I !== void 0, "At least one of the url and domain needs to be specified");
        const D = {
          domain: I,
          name: O.name,
          ...O.path !== void 0 ? { path: O.path } : {}
        };
        await e(this, a).browsingContext.deleteCookie(D);
      }));
    }
    async removeExposedFunction(b) {
      await e(this, a).removeExposedFunction(b);
    }
    metrics() {
      throw new he();
    }
    async goBack(b = {}) {
      return await T(this, c, yi).call(this, -1, b);
    }
    async goForward(b = {}) {
      return await T(this, c, yi).call(this, 1, b);
    }
    waitForDevicePrompt() {
      throw new he();
    }
  }, n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakSet(), vu = function() {
    e(this, a).browsingContext.on("closed", () => {
      this.trustedEmitter.emit("close", void 0), this.trustedEmitter.removeAllListeners();
    }), this.trustedEmitter.on("workercreated", (b) => {
      e(this, l).add(b);
    }), this.trustedEmitter.on("workerdestroyed", (b) => {
      e(this, l).delete(b);
    });
  }, w = new WeakMap(), E = new WeakMap(), m = new WeakMap(), h = new WeakMap(), f = new WeakMap(), es = async function(b, O, P) {
    if (P && !O)
      return await e(this, a).browsingContext.addIntercept({
        phases: b
      });
    if (!P && O) {
      await e(this, a).browsingContext.userContext.browser.removeIntercept(O);
      return;
    }
    return O;
  }, wi = async function() {
    e(this, y) && await this._client().send("Network.emulateNetworkConditions", {
      offline: e(this, y).offline,
      latency: e(this, y).latency,
      uploadThroughput: e(this, y).upload,
      downloadThroughput: e(this, y).download
    });
  }, yi = async function(b, O) {
    const P = new AbortController();
    try {
      const [R] = await Promise.all([
        this.waitForNavigation({
          ...O,
          signal: P.signal
        }),
        e(this, a).browsingContext.traverseHistory(b)
      ]);
      return R;
    } catch (R) {
      if (P.abort(), Po(R) && R.message.includes("no such history entry"))
        return null;
      throw R;
    }
  }, (() => {
    const b = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    s = [gn()], dh(N, null, s, { kind: "accessor", name: "trustedEmitter", static: !1, private: !1, access: { has: (O) => "trustedEmitter" in O, get: (O) => O.trustedEmitter, set: (O, P) => {
      O.trustedEmitter = P;
    } }, metadata: b }, t, r), b && Object.defineProperty(N, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: b });
  })(), N;
})();
function lh(i, ...s) {
  return `() => {${_d(i, ...s)}}`;
}
function hh(i, s) {
  const t = i.domain.toLowerCase(), r = s.hostname.toLowerCase();
  return t === r ? !0 : t.startsWith(".") && r.endsWith(t);
}
function ph(i, s) {
  const t = s.pathname, r = i.path;
  return !!(t === r || t.startsWith(r) && (r.endsWith("/") || t[r.length] === "/"));
}
function fh(i, s) {
  const t = new URL(s);
  return Oe(i !== void 0), hh(i, t) ? ph(i, t) : !1;
}
function bu(i, s = !1) {
  const t = i[cn + "partitionKey"];
  function r() {
    return typeof t == "string" ? { partitionKey: t } : typeof t == "object" && t !== null ? s ? {
      partitionKey: {
        sourceOrigin: t.topLevelSite,
        hasCrossSiteAncestor: t.hasCrossSiteAncestor ?? !1
      }
    } : {
      // TODO: a breaking change in Puppeteer is required to change
      // partitionKey type and report the composite partition key.
      partitionKey: t.topLevelSite
    } : {};
  }
  return {
    name: i.name,
    // Presents binary value as base64 string.
    value: i.value.value,
    domain: i.domain,
    path: i.path,
    size: i.size,
    httpOnly: i.httpOnly,
    secure: i.secure,
    sameSite: gh(i.sameSite),
    expires: i.expiry ?? -1,
    session: i.expiry === void 0 || i.expiry <= 0,
    // Extending with CDP-specific properties with `goog:` prefix.
    ...mh(i, "sameParty", "sourceScheme", "partitionKeyOpaque", "priority"),
    ...r()
  };
}
const cn = "goog:";
function mh(i, ...s) {
  const t = {};
  for (const r of s)
    i[cn + r] !== void 0 && (t[r] = i[cn + r]);
  return t;
}
function Cu(i, ...s) {
  const t = {};
  for (const r of s)
    i[r] !== void 0 && (t[cn + r] = i[r]);
  return t;
}
function gh(i) {
  return i === "strict" ? "Strict" : i === "lax" ? "Lax" : "None";
}
function xu(i) {
  return i === "Strict" ? "strict" : i === "Lax" ? "lax" : "none";
}
function Eu(i) {
  return [void 0, -1].includes(i) ? void 0 : i;
}
function wh(i) {
  if (i === void 0 || typeof i == "string")
    return i;
  if (i.hasCrossSiteAncestor)
    throw new he("WebDriver BiDi does not support `hasCrossSiteAncestor` yet.");
  return i.sourceOrigin;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Xt;
class yh extends wn {
  constructor(t) {
    super();
    v(this, Xt);
    S(this, Xt, t);
  }
  asPage() {
    throw new he();
  }
  url() {
    return "";
  }
  createCDPSession() {
    throw new he();
  }
  type() {
    return yn.BROWSER;
  }
  browser() {
    return e(this, Xt);
  }
  browserContext() {
    return e(this, Xt).defaultBrowserContext();
  }
  opener() {
    throw new he();
  }
}
Xt = new WeakMap();
var Qe;
class vh extends wn {
  constructor(t) {
    super();
    v(this, Qe);
    S(this, Qe, t);
  }
  async page() {
    return e(this, Qe);
  }
  async asPage() {
    return on.from(this.browserContext(), e(this, Qe).mainFrame().browsingContext);
  }
  url() {
    return e(this, Qe).url();
  }
  createCDPSession() {
    return e(this, Qe).createCDPSession();
  }
  type() {
    return yn.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return e(this, Qe).browserContext();
  }
  opener() {
    throw new he();
  }
}
Qe = new WeakMap();
var Ze, Jt;
class bh extends wn {
  constructor(t) {
    super();
    v(this, Ze);
    v(this, Jt);
    S(this, Ze, t);
  }
  async page() {
    return e(this, Jt) === void 0 && S(this, Jt, on.from(this.browserContext(), e(this, Ze).browsingContext)), e(this, Jt);
  }
  async asPage() {
    return on.from(this.browserContext(), e(this, Ze).browsingContext);
  }
  url() {
    return e(this, Ze).url();
  }
  createCDPSession() {
    return e(this, Ze).createCDPSession();
  }
  type() {
    return yn.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return e(this, Ze).page().browserContext();
  }
  opener() {
    throw new he();
  }
}
Ze = new WeakMap(), Jt = new WeakMap();
var Yt;
class Ch extends wn {
  constructor(t) {
    super();
    v(this, Yt);
    S(this, Yt, t);
  }
  async page() {
    throw new he();
  }
  async asPage() {
    throw new he();
  }
  url() {
    return e(this, Yt).url();
  }
  createCDPSession() {
    throw new he();
  }
  type() {
    return yn.OTHER;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return e(this, Yt).frame.page().browserContext();
  }
  opener() {
    throw new he();
  }
}
Yt = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var xh = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, vo = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Eh = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (u) {
        return Promise.reject(u);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, Sh = /* @__PURE__ */ function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, n = 0;
    function u() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && n === 1) return n = 0, s.stack.push(r), Promise.resolve().then(u);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(a).then(u, function(o) {
              return t(o), u();
            });
          } else n |= 1;
        } catch (o) {
          t(o);
        }
      if (n === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return u();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let Ph = (() => {
  var n, u, a, o, l, d, y, Su, vi, w;
  let i = Id, s, t = [], r = [];
  return w = class extends i {
    constructor(h, f, x) {
      super();
      v(this, y);
      v(this, n, vo(this, t, new ge()));
      v(this, u, vo(this, r));
      v(this, a);
      // This is public because of cookies.
      Y(this, "userContext");
      v(this, o, /* @__PURE__ */ new WeakMap());
      v(this, l, /* @__PURE__ */ new Map());
      v(this, d, []);
      S(this, u, h), this.userContext = f, S(this, a, x.defaultViewport);
    }
    static from(h, f, x) {
      var g;
      const C = new w(h, f, x);
      return T(g = C, y, Su).call(g), C;
    }
    get trustedEmitter() {
      return e(this, n);
    }
    set trustedEmitter(h) {
      S(this, n, h);
    }
    targets() {
      return [...e(this, l).values()].flatMap(([h, f]) => [h, ...f.values()]);
    }
    async newPage() {
      const h = { stack: [], error: void 0, hasError: !1 };
      try {
        const f = Eh(h, await this.waitForScreenshotOperations(), !1), x = await this.userContext.createBrowsingContext(
          "tab"
          /* Bidi.BrowsingContext.CreateType.Tab */
        ), C = e(this, o).get(x);
        if (!C)
          throw new Error("Page is not found");
        if (e(this, a))
          try {
            await C.setViewport(e(this, a));
          } catch {
          }
        return C;
      } catch (f) {
        h.error = f, h.hasError = !0;
      } finally {
        Sh(h);
      }
    }
    async close() {
      Oe(this.userContext.id !== nn.DEFAULT, "Default BrowserContext cannot be closed!");
      try {
        await this.userContext.remove();
      } catch (h) {
        De(h);
      }
      e(this, l).clear();
    }
    browser() {
      return e(this, u);
    }
    async pages() {
      return [...this.userContext.browsingContexts].map((h) => e(this, o).get(h));
    }
    async overridePermissions(h, f) {
      const x = new Set(f.map((C) => {
        if (!Yi.get(C))
          throw new Error("Unknown permission: " + C);
        return C;
      }));
      await Promise.all(Array.from(Yi.keys()).map((C) => {
        const g = this.userContext.setPermissions(
          h,
          {
            name: C
          },
          x.has(C) ? "granted" : "denied"
          /* Bidi.Permissions.PermissionState.Denied */
        );
        return e(this, d).push({ origin: h, permission: C }), x.has(C) ? g : g.catch(De);
      }));
    }
    async clearPermissionOverrides() {
      const h = e(this, d).map(({ permission: f, origin: x }) => this.userContext.setPermissions(
        x,
        {
          name: f
        },
        "prompt"
        /* Bidi.Permissions.PermissionState.Prompt */
      ).catch(De));
      S(this, d, []), await Promise.all(h);
    }
    get id() {
      if (this.userContext.id !== nn.DEFAULT)
        return this.userContext.id;
    }
    async cookies() {
      return (await this.userContext.getCookies()).map((f) => bu(f, !0));
    }
    async setCookie(...h) {
      await Promise.all(h.map(async (f) => {
        const x = {
          domain: f.domain,
          name: f.name,
          value: {
            type: "string",
            value: f.value
          },
          ...f.path !== void 0 ? { path: f.path } : {},
          ...f.httpOnly !== void 0 ? { httpOnly: f.httpOnly } : {},
          ...f.secure !== void 0 ? { secure: f.secure } : {},
          ...f.sameSite !== void 0 ? { sameSite: xu(f.sameSite) } : {},
          expiry: Eu(f.expires),
          // Chrome-specific properties.
          ...Cu(f, "sameParty", "sourceScheme", "priority", "url")
        };
        return await this.userContext.setCookie(x, wh(f.partitionKey));
      }));
    }
  }, n = new WeakMap(), u = new WeakMap(), a = new WeakMap(), o = new WeakMap(), l = new WeakMap(), d = new WeakMap(), y = new WeakSet(), Su = function() {
    for (const h of this.userContext.browsingContexts)
      T(this, y, vi).call(this, h);
    this.userContext.on("browsingcontext", ({ browsingContext: h }) => {
      const f = T(this, y, vi).call(this, h);
      if (h.originalOpener)
        for (const x of this.userContext.browsingContexts)
          x.id === h.originalOpener && e(this, o).get(x).trustedEmitter.emit("popup", f);
    }), this.userContext.on("closed", () => {
      this.trustedEmitter.removeAllListeners();
    });
  }, vi = function(h) {
    const f = on.from(this, h);
    e(this, o).set(h, f), f.trustedEmitter.on("close", () => {
      e(this, o).delete(h);
    });
    const x = new vh(f), C = /* @__PURE__ */ new Map();
    return e(this, l).set(f, [x, C]), f.trustedEmitter.on("frameattached", (g) => {
      const N = g, _ = new bh(N);
      C.set(N, _), this.trustedEmitter.emit("targetcreated", _);
    }), f.trustedEmitter.on("framenavigated", (g) => {
      const N = g, _ = C.get(N);
      _ === void 0 ? this.trustedEmitter.emit("targetchanged", x) : this.trustedEmitter.emit("targetchanged", _);
    }), f.trustedEmitter.on("framedetached", (g) => {
      const N = g, _ = C.get(N);
      _ !== void 0 && (C.delete(N), this.trustedEmitter.emit("targetdestroyed", _));
    }), f.trustedEmitter.on("workercreated", (g) => {
      const N = g, _ = new Ch(N);
      C.set(N, _), this.trustedEmitter.emit("targetcreated", _);
    }), f.trustedEmitter.on("workerdestroyed", (g) => {
      const N = g, _ = C.get(N);
      _ !== void 0 && (C.delete(g), this.trustedEmitter.emit("targetdestroyed", _));
    }), f.trustedEmitter.on("close", () => {
      e(this, l).delete(f), this.trustedEmitter.emit("targetdestroyed", x);
    }), this.trustedEmitter.emit("targetcreated", x), f;
  }, (() => {
    const h = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    s = [gn()], xh(w, null, s, { kind: "accessor", name: "trustedEmitter", static: !1, private: !1, access: { has: (f) => "trustedEmitter" in f, get: (f) => f.trustedEmitter, set: (f, x) => {
      f.trustedEmitter = x;
    } }, metadata: h }, t, r), h && Object.defineProperty(w, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: h });
  })(), w;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var _h = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Dt = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, kh = function(i, s, t) {
  if (s != null) {
    if (typeof s != "object" && typeof s != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = s[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = s[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (u) {
        return Promise.reject(u);
      }
    }), i.stack.push({ value: s, dispose: r, async: t });
  } else t && i.stack.push({ async: !0 });
  return s;
}, Ih = /* @__PURE__ */ function(i) {
  return function(s) {
    function t(a) {
      s.error = s.hasError ? new i(a, s.error, "An error was suppressed during disposal.") : a, s.hasError = !0;
    }
    var r, n = 0;
    function u() {
      for (; r = s.stack.pop(); )
        try {
          if (!r.async && n === 1) return n = 0, s.stack.push(r), Promise.resolve().then(u);
          if (r.dispose) {
            var a = r.dispose.call(r.value);
            if (r.async) return n |= 2, Promise.resolve(a).then(u, function(o) {
              return t(o), u();
            });
          } else n |= 1;
        } catch (o) {
          t(o);
        }
      if (n === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
      if (s.hasError) throw s.error;
    }
    return u();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(i, s, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = i, r.suppressed = s, r;
});
let Th = (() => {
  var l, d, y, c, p, w, Pu, _u, ku, bi, x;
  let i = ge, s = [], t, r, n, u, a, o;
  return x = class extends i {
    constructor(N) {
      super();
      v(this, w);
      v(this, l, (_h(this, s), !1));
      v(this, d);
      v(this, y, new Ke());
      v(this, c, /* @__PURE__ */ new Map());
      Y(this, "session");
      v(this, p, /* @__PURE__ */ new Map());
      this.session = N;
    }
    static async from(N) {
      var k;
      const _ = new x(N);
      return await T(k = _, w, Pu).call(k), _;
    }
    get closed() {
      return e(this, l);
    }
    get defaultUserContext() {
      return e(this, c).get(nn.DEFAULT);
    }
    get disconnected() {
      return e(this, d) !== void 0;
    }
    get disposed() {
      return this.disconnected;
    }
    get userContexts() {
      return e(this, c).values();
    }
    dispose(N, _ = !1) {
      S(this, l, _), S(this, d, N), this[Ee]();
    }
    async close() {
      try {
        await this.session.send("browser.close", {});
      } finally {
        this.dispose("Browser already closed.", !0);
      }
    }
    async addPreloadScript(N, _ = {}) {
      var b;
      const { result: { script: k } } = await this.session.send("script.addPreloadScript", {
        functionDeclaration: N,
        ..._,
        contexts: (b = _.contexts) == null ? void 0 : b.map((O) => O.id)
      });
      return k;
    }
    async removeIntercept(N) {
      await this.session.send("network.removeIntercept", {
        intercept: N
      });
    }
    async removePreloadScript(N) {
      await this.session.send("script.removePreloadScript", {
        script: N
      });
    }
    async createUserContext() {
      const { result: { userContext: N } } = await this.session.send("browser.createUserContext", {});
      return T(this, w, bi).call(this, N);
    }
    [(t = [it], r = [le((N) => e(N, d))], n = [le((N) => e(N, d))], u = [le((N) => e(N, d))], a = [le((N) => e(N, d))], o = [le((N) => e(N, d))], Ee)]() {
      e(this, d) ?? S(this, d, "Browser was disconnected, probably because the session ended."), this.closed && this.emit("closed", { reason: e(this, d) }), this.emit("disconnected", { reason: e(this, d) }), e(this, y).dispose(), super[Ee]();
    }
  }, l = new WeakMap(), d = new WeakMap(), y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakSet(), Pu = async function() {
    const N = e(this, y).use(new ge(this.session));
    N.once("ended", ({ reason: _ }) => {
      this.dispose(_);
    }), N.on("script.realmCreated", (_) => {
      _.type === "shared-worker" && e(this, p).set(_.realm, ni.from(this, _.realm, _.origin));
    }), await T(this, w, _u).call(this), await T(this, w, ku).call(this);
  }, _u = async function() {
    const { result: { userContexts: N } } = await this.session.send("browser.getUserContexts", {});
    for (const _ of N)
      T(this, w, bi).call(this, _.userContext);
  }, ku = async function() {
    const N = /* @__PURE__ */ new Set();
    let _;
    {
      const k = { stack: [], error: void 0, hasError: !1 };
      try {
        kh(k, new ge(this.session), !1).on("browsingContext.contextCreated", (P) => {
          N.add(P.context);
        });
        const { result: O } = await this.session.send("browsingContext.getTree", {});
        _ = O.contexts;
      } catch (b) {
        k.error = b, k.hasError = !0;
      } finally {
        Ih(k);
      }
    }
    for (const k of _)
      N.has(k.context) || this.session.emit("browsingContext.contextCreated", k), k.children && _.push(...k.children);
  }, bi = function(N) {
    const _ = nn.create(this, N);
    e(this, c).set(_.id, _);
    const k = e(this, y).use(new ge(_));
    return k.once("closed", () => {
      k.removeAllListeners(), e(this, c).delete(_.id);
    }), _;
  }, (() => {
    const N = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Dt(x, null, t, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (_) => "dispose" in _, get: (_) => _.dispose }, metadata: N }, null, s), Dt(x, null, r, { kind: "method", name: "close", static: !1, private: !1, access: { has: (_) => "close" in _, get: (_) => _.close }, metadata: N }, null, s), Dt(x, null, n, { kind: "method", name: "addPreloadScript", static: !1, private: !1, access: { has: (_) => "addPreloadScript" in _, get: (_) => _.addPreloadScript }, metadata: N }, null, s), Dt(x, null, u, { kind: "method", name: "removeIntercept", static: !1, private: !1, access: { has: (_) => "removeIntercept" in _, get: (_) => _.removeIntercept }, metadata: N }, null, s), Dt(x, null, a, { kind: "method", name: "removePreloadScript", static: !1, private: !1, access: { has: (_) => "removePreloadScript" in _, get: (_) => _.removePreloadScript }, metadata: N }, null, s), Dt(x, null, o, { kind: "method", name: "createUserContext", static: !1, private: !1, access: { has: (_) => "createUserContext" in _, get: (_) => _.createUserContext }, metadata: N }, null, s), N && Object.defineProperty(x, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: N });
  })(), x;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Dn = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Mt = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
};
let Nh = (() => {
  var y, c, p, w, E, Iu, h;
  let i = ge, s = [], t, r = [], n = [], u, a, o, l, d;
  return h = class extends i {
    constructor(C, g) {
      super();
      v(this, E);
      v(this, y, Dn(this, s));
      v(this, c, new Ke());
      v(this, p);
      Y(this, "browser");
      v(this, w, Dn(this, r, void 0));
      Dn(this, n), S(this, p, g), this.connection = C;
    }
    static async from(C, g) {
      var k;
      const { result: N } = await C.send("session.new", {
        capabilities: g
      }), _ = new h(C, N);
      return await T(k = _, E, Iu).call(k), _;
    }
    get connection() {
      return e(this, w);
    }
    set connection(C) {
      S(this, w, C);
    }
    get capabilities() {
      return e(this, p).capabilities;
    }
    get disposed() {
      return this.ended;
    }
    get ended() {
      return e(this, y) !== void 0;
    }
    get id() {
      return e(this, p).sessionId;
    }
    dispose(C) {
      S(this, y, C), this[Ee]();
    }
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    async send(C, g) {
      return await this.connection.send(C, g);
    }
    async subscribe(C, g) {
      await this.send("session.subscribe", {
        events: C,
        contexts: g
      });
    }
    async addIntercepts(C, g) {
      await this.send("session.subscribe", {
        events: C,
        contexts: g
      });
    }
    async end() {
      try {
        await this.send("session.end", {});
      } finally {
        this.dispose("Session already ended.");
      }
    }
    [(t = [gn()], u = [it], a = [le((C) => e(C, y))], o = [le((C) => e(C, y))], l = [le((C) => e(C, y))], d = [le((C) => e(C, y))], Ee)]() {
      e(this, y) ?? S(this, y, "Session already destroyed, probably because the connection broke."), this.emit("ended", { reason: e(this, y) }), e(this, c).dispose(), super[Ee]();
    }
  }, y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakMap(), E = new WeakSet(), Iu = async function() {
    this.browser = await Th.from(this), e(this, c).use(this.browser).once("closed", ({ reason: N }) => {
      this.dispose(N);
    });
    const g = /* @__PURE__ */ new WeakSet();
    this.on("browsingContext.fragmentNavigated", (N) => {
      g.has(N) || (g.add(N), this.emit("browsingContext.navigationStarted", N), this.emit("browsingContext.fragmentNavigated", N));
    });
  }, (() => {
    const C = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    Mt(h, null, t, { kind: "accessor", name: "connection", static: !1, private: !1, access: { has: (g) => "connection" in g, get: (g) => g.connection, set: (g, N) => {
      g.connection = N;
    } }, metadata: C }, r, n), Mt(h, null, u, { kind: "method", name: "dispose", static: !1, private: !1, access: { has: (g) => "dispose" in g, get: (g) => g.dispose }, metadata: C }, null, s), Mt(h, null, a, { kind: "method", name: "send", static: !1, private: !1, access: { has: (g) => "send" in g, get: (g) => g.send }, metadata: C }, null, s), Mt(h, null, o, { kind: "method", name: "subscribe", static: !1, private: !1, access: { has: (g) => "subscribe" in g, get: (g) => g.subscribe }, metadata: C }, null, s), Mt(h, null, l, { kind: "method", name: "addIntercepts", static: !1, private: !1, access: { has: (g) => "addIntercepts" in g, get: (g) => g.addIntercepts }, metadata: C }, null, s), Mt(h, null, d, { kind: "method", name: "end", static: !1, private: !1, access: { has: (g) => "end" in g, get: (g) => g.end }, metadata: C }, null, s), C && Object.defineProperty(h, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: C });
  })(), h;
})();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Rh = function(i, s, t, r, n, u) {
  function a(f) {
    if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", d = !s && i ? r.static ? i : i.prototype : null, y = s || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {}), c, p = !1, w = t.length - 1; w >= 0; w--) {
    var E = {};
    for (var m in r) E[m] = m === "access" ? {} : r[m];
    for (var m in r.access) E.access[m] = r.access[m];
    E.addInitializer = function(f) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      u.push(a(f || null));
    };
    var h = (0, t[w])(o === "accessor" ? { get: y.get, set: y.set } : y[l], E);
    if (o === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (c = a(h.get)) && (y.get = c), (c = a(h.set)) && (y.set = c), (c = a(h.init)) && n.unshift(c);
    } else (c = a(h)) && (o === "field" ? n.unshift(c) : y[l] = c);
  }
  d && Object.defineProperty(d, r.name, y), p = !0;
}, bo = function(i, s, t) {
  for (var r = arguments.length > 2, n = 0; n < s.length; n++)
    t = r ? s[n].call(i, t) : s[n].call(i);
  return r ? t : void 0;
}, Co = function(i, s, t) {
  return typeof s == "symbol" && (s = s.description ? "[".concat(s.description, "]") : ""), Object.defineProperty(i, "name", { configurable: !0, value: t ? "".concat(t, " ", s) : s });
};
let fp = (() => {
  var u, a, o, lt, Tu, y, c, p, w, E, m, h, Nu, Ru, Du, Ci;
  let i = Td, s, t = [], r = [], n;
  return u = class extends i {
    constructor(k, b) {
      super();
      v(this, o);
      Y(this, "protocol", "webDriverBiDi");
      v(this, a, bo(this, t, new ge()));
      v(this, y, bo(this, r));
      v(this, c);
      v(this, p);
      v(this, w);
      v(this, E, /* @__PURE__ */ new WeakMap());
      v(this, m, new yh(this));
      v(this, h);
      S(this, y, b.process), S(this, c, b.closeCallback), S(this, p, k), S(this, w, b.defaultViewport), S(this, h, b.cdpConnection);
    }
    static async create(k) {
      var P, R, I;
      const b = await Nh.from(k.connection, {
        firstMatch: (P = k.capabilities) == null ? void 0 : P.firstMatch,
        alwaysMatch: {
          ...(R = k.capabilities) == null ? void 0 : R.alwaysMatch,
          // Capabilities that come from Puppeteer's API take precedence.
          acceptInsecureCerts: k.acceptInsecureCerts,
          unhandledPromptBehavior: {
            default: "ignore"
          },
          webSocketUrl: !0,
          // Puppeteer with WebDriver BiDi does not support prerendering
          // yet because WebDriver BiDi behavior is not specified. See
          // https://github.com/w3c/webdriver-bidi/issues/321.
          "goog:prerenderingDisabled": !0
        }
      });
      await b.subscribe(b.capabilities.browserName.toLocaleLowerCase().includes("firefox") ? u.subscribeModules : [...u.subscribeModules, ...u.subscribeCdpEvents]);
      const O = new u(b.browser, k);
      return T(I = O, o, Nu).call(I), O;
    }
    get cdpSupported() {
      return e(this, h) !== void 0;
    }
    get cdpConnection() {
      return e(this, h);
    }
    async userAgent() {
      return e(this, p).session.capabilities.userAgent;
    }
    get connection() {
      return e(this, p).session.connection;
    }
    wsEndpoint() {
      return this.connection.url;
    }
    async close() {
      var k;
      if (!this.connection.closed)
        try {
          await e(this, p).close(), await ((k = e(this, c)) == null ? void 0 : k.call(null));
        } catch (b) {
          De(b);
        } finally {
          this.connection.dispose();
        }
    }
    get connected() {
      return !e(this, p).disconnected;
    }
    process() {
      return e(this, y) ?? null;
    }
    async createBrowserContext(k) {
      const b = await e(this, p).createUserContext();
      return T(this, o, Ci).call(this, b);
    }
    async version() {
      return `${e(this, o, Ru)}/${e(this, o, Du)}`;
    }
    browserContexts() {
      return [...e(this, p).userContexts].map((k) => e(this, E).get(k));
    }
    defaultBrowserContext() {
      return e(this, E).get(e(this, p).defaultUserContext);
    }
    newPage() {
      return this.defaultBrowserContext().newPage();
    }
    targets() {
      return [
        e(this, m),
        ...this.browserContexts().flatMap((k) => k.targets())
      ];
    }
    target() {
      return e(this, m);
    }
    async disconnect() {
      try {
        await e(this, p).session.end();
      } catch (k) {
        De(k);
      } finally {
        this.connection.dispose();
      }
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: this.connection.getPendingProtocolErrors()
      };
    }
  }, a = new WeakMap(), o = new WeakSet(), lt = function() {
    return n.get.call(this);
  }, Tu = function(k) {
    return n.set.call(this, k);
  }, y = new WeakMap(), c = new WeakMap(), p = new WeakMap(), w = new WeakMap(), E = new WeakMap(), m = new WeakMap(), h = new WeakMap(), Nu = function() {
    var k;
    for (const b of e(this, p).userContexts)
      T(this, o, Ci).call(this, b);
    e(this, p).once("disconnected", () => {
      e(this, o, lt).emit("disconnected", void 0), e(this, o, lt).removeAllListeners();
    }), (k = e(this, y)) == null || k.once("close", () => {
      e(this, p).dispose("Browser process exited.", !0), this.connection.dispose();
    });
  }, Ru = function() {
    return e(this, p).session.capabilities.browserName;
  }, Du = function() {
    return e(this, p).session.capabilities.browserVersion;
  }, Ci = function(k) {
    const b = Ph.from(this, k, {
      defaultViewport: e(this, w)
    });
    return e(this, E).set(k, b), b.trustedEmitter.on("targetcreated", (O) => {
      e(this, o, lt).emit("targetcreated", O);
    }), b.trustedEmitter.on("targetchanged", (O) => {
      e(this, o, lt).emit("targetchanged", O);
    }), b.trustedEmitter.on("targetdestroyed", (O) => {
      e(this, o, lt).emit("targetdestroyed", O);
    }), b;
  }, (() => {
    const k = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
    s = [gn()], Rh(u, n = { get: Co(function() {
      return e(this, a);
    }, "#trustedEmitter", "get"), set: Co(function(b) {
      S(this, a, b);
    }, "#trustedEmitter", "set") }, s, { kind: "accessor", name: "#trustedEmitter", static: !1, private: !0, access: { has: (b) => Is(o, b), get: (b) => e(b, o, lt), set: (b, O) => {
      S(b, o, O, Tu);
    } }, metadata: k }, t, r), k && Object.defineProperty(u, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: k });
  })(), Y(u, "subscribeModules", [
    "browsingContext",
    "network",
    "log",
    "script"
  ]), Y(u, "subscribeCdpEvents", [
    // Coverage
    "goog:cdp.Debugger.scriptParsed",
    "goog:cdp.CSS.styleSheetAdded",
    "goog:cdp.Runtime.executionContextsCleared",
    // Tracing
    "goog:cdp.Tracing.tracingComplete",
    // TODO: subscribe to all CDP events in the future.
    "goog:cdp.Network.requestWillBeSent",
    "goog:cdp.Debugger.scriptParsed",
    "goog:cdp.Page.screencastFrame"
  ]), u;
})();
export {
  fp as BidiBrowser,
  Ph as BidiBrowserContext,
  Pl as BidiConnection,
  an as BidiElementHandle,
  rh as BidiFrame,
  xt as BidiFrameRealm,
  du as BidiHTTPRequest,
  Jl as BidiHTTPResponse,
  Et as BidiJSHandle,
  ah as BidiKeyboard,
  oh as BidiMouse,
  on as BidiPage,
  gu as BidiRealm,
  uh as BidiTouchscreen,
  fi as BidiWorkerRealm,
  bu as bidiToPuppeteerCookie,
  Cu as cdpSpecificCookiePropertiesFromPuppeteerToBidi,
  pp as connectBidiOverCdp,
  Eu as convertCookiesExpiryCdpToBiDi,
  wh as convertCookiesPartitionKeyFromPuppeteerToBiDi,
  xu as convertCookiesSameSiteCdpToBiDi,
  uu as requests
};
