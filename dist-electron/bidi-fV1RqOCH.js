var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _detached, _connection, _sessionId, _url, _transport, _delay, _timeout, _closed, _callbacks, _emitters, _cdp, _adapters, _browserCdpConnection, _closed2, _client, _browserClient, _forwardMessage, _onMessage, _workers, _WindowRealm_instances, initialize_fn, _workers2, _DedicatedWorkerRealm_instances, initialize_fn2, _workers3, _SharedWorkerRealm_instances, initialize_fn3, _BidiDeserializer_static, deserializeNumber_fn, deserializeTuple_fn, _prompt, _remoteValue, _disposed, _frame, _apply, _isolate, _channel, _scripts, _disposables, _ExposeableFunction_instances, initialize_fn4, connection_get, _handleMessage, getRealm_fn, findFrame_fn, _redirectChain, _response, _frame2, _request, _BidiHTTPRequest_instances, initialize_fn5, hasInternalHeaderOverwrite_get, extraHTTPHeaders_get, userAgentHeaders_get, _authenticationHandled, _handleAuthentication, _BidiSerializer_static, serializeNumber_fn, serializeObject_fn, _BidiRealm_instances, evaluate_fn, _frame3, _BidiFrameRealm_instances, initialize_fn6, _bindingsInstalled, _worker, _frame4, _realm, _page, _page2, _lastMovePoint, _started, _x, _y, _bidiId, _page3, _touchScreen, _properties, _page4, _browser, _page5, _frame5, _page6, _worker2;
import require$$2 from "crypto";
import { C as CDPSession, D as Deferred$1, U as UnsupportedOperation, T as TargetCloseError, E as EventEmitter$1, b as CallbackRegistry, c as assert$1, d as debugError, e as debug, f as DisposableStack, g as disposeSymbol, i as inertIfDisposed, t as throwIfDisposed, h as Dialog, J as JSHandle, j as environment, A as AsyncIterableUtil, k as ElementHandle, l as bindIsolatedHandle, s as stringifyFunction, m as interpolateFunction, S as SecurityDetails, H as HTTPResponse, n as invokeAtMostOnceForArguments, o as HTTPRequest, p as stringToBase64, q as handleError, r as STATUS_TEXTS, u as isPlainObject, v as isRegExp, w as isDate, P as PuppeteerURL, x as ProtocolError, y as TimeoutError, R as Realm$2, z as scriptInjector, B as getSourceUrlComment, G as getSourcePuppeteerURLIfAvailable, I as isString, L as LazyArg, K as ARIAQueryHandler, M as SOURCE_URL_REGEX, W as WebWorker, N as of, O as combineLatest, Q as fromEmitterEvent, V as map, X as first, Y as raceWith, Z as timeout, _ as Accessibility, $ as ConsoleMessage, a0 as defer, a1 as filter, a2 as isErrorLike, a3 as firstValueFrom, a4 as race, a5 as switchMap, a6 as delayWhen, a7 as fromAbortSignal, a8 as Frame, a9 as throwIfDetached, aa as Keyboard, ab as Mouse, ac as MouseButton, ad as Touchscreen, ae as TouchError, af as EmulationManager, ag as Tracing, ah as Coverage, ai as parsePDFOptions, aj as from, ak as stringToTypedArray, al as evaluationString, am as Page, an as bubble, ao as Target, ap as TargetType, aq as WEB_PERMISSION_TO_PROTOCOL_PERMISSION, ar as BrowserContext, as as Browser$1 } from "./main-Dx7mE1ja.js";
var BidiMapper = {};
var BidiServer = {};
var EventEmitter = {};
var mitt;
var hasRequiredMitt;
function requireMitt() {
  if (hasRequiredMitt) return mitt;
  hasRequiredMitt = 1;
  mitt = function(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(e, t) {
      var i = n.get(e);
      i ? i.push(t) : n.set(e, [t]);
    }, off: function(e, t) {
      var i = n.get(e);
      i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []));
    }, emit: function(e, t) {
      var i = n.get(e);
      i && i.slice().map(function(n2) {
        n2(t);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(e, t);
      });
    } };
  };
  return mitt;
}
var hasRequiredEventEmitter;
function requireEventEmitter() {
  var _emitter, _a2;
  if (hasRequiredEventEmitter) return EventEmitter;
  hasRequiredEventEmitter = 1;
  var __importDefault = EventEmitter.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(EventEmitter, "__esModule", { value: true });
  EventEmitter.EventEmitter = void 0;
  const mitt_1 = __importDefault(requireMitt());
  let EventEmitter$12 = (_a2 = class {
    constructor() {
      __privateAdd(this, _emitter, (0, mitt_1.default)());
    }
    on(type, handler) {
      __privateGet(this, _emitter).on(type, handler);
      return this;
    }
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param event The event you'd like to listen to
     * @param handler The handler function to run when the event occurs
     * @return `this` to enable chaining method calls.
     */
    once(event, handler) {
      const onceHandler = (eventData) => {
        handler(eventData);
        this.off(event, onceHandler);
      };
      return this.on(event, onceHandler);
    }
    off(type, handler) {
      __privateGet(this, _emitter).off(type, handler);
      return this;
    }
    /**
     * Emits an event and call any associated listeners.
     *
     * @param event The event to emit.
     * @param eventData Any data to emit with the event.
     * @return `true` if there are any listeners, `false` otherwise.
     */
    emit(event, eventData) {
      __privateGet(this, _emitter).emit(event, eventData);
    }
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     * @param event - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(event) {
      if (event) {
        __privateGet(this, _emitter).all.delete(event);
      } else {
        __privateGet(this, _emitter).all.clear();
      }
      return this;
    }
  }, _emitter = new WeakMap(), _a2);
  EventEmitter.EventEmitter = EventEmitter$12;
  return EventEmitter;
}
var log = {};
var hasRequiredLog;
function requireLog() {
  if (hasRequiredLog) return log;
  hasRequiredLog = 1;
  Object.defineProperty(log, "__esModule", { value: true });
  log.LogType = void 0;
  var LogType;
  (function(LogType2) {
    LogType2["bidi"] = "bidi";
    LogType2["cdp"] = "cdp";
    LogType2["debug"] = "debug";
    LogType2["debugError"] = "debug:error";
    LogType2["debugInfo"] = "debug:info";
  })(LogType || (log.LogType = LogType = {}));
  return log;
}
var ProcessingQueue = {};
var hasRequiredProcessingQueue;
function requireProcessingQueue() {
  var _a3, _logger, _processor, _queue, _isProcessing, _ProcessingQueue_instances, processIfNeeded_fn;
  if (hasRequiredProcessingQueue) return ProcessingQueue;
  hasRequiredProcessingQueue = 1;
  var _a2;
  Object.defineProperty(ProcessingQueue, "__esModule", { value: true });
  ProcessingQueue.ProcessingQueue = void 0;
  const log_js_1 = requireLog();
  let ProcessingQueue$1 = (_a3 = class {
    constructor(processor, logger) {
      __privateAdd(this, _ProcessingQueue_instances);
      __privateAdd(this, _logger);
      __privateAdd(this, _processor);
      __privateAdd(this, _queue, []);
      // Flag to keep only 1 active processor.
      __privateAdd(this, _isProcessing, false);
      __privateSet(this, _processor, processor);
      __privateSet(this, _logger, logger);
    }
    add(entry, name) {
      __privateGet(this, _queue).push([entry, name]);
      void __privateMethod(this, _ProcessingQueue_instances, processIfNeeded_fn).call(this);
    }
  }, _logger = new WeakMap(), _processor = new WeakMap(), _queue = new WeakMap(), _isProcessing = new WeakMap(), _ProcessingQueue_instances = new WeakSet(), processIfNeeded_fn = async function() {
    var _a4;
    if (__privateGet(this, _isProcessing)) {
      return;
    }
    __privateSet(this, _isProcessing, true);
    while (__privateGet(this, _queue).length > 0) {
      const arrayEntry = __privateGet(this, _queue).shift();
      if (!arrayEntry) {
        continue;
      }
      const [entryPromise, name] = arrayEntry;
      (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, _a2.LOGGER_PREFIX, "Processing event:", name);
      await entryPromise.then((entry) => {
        var _a5;
        if (entry.kind === "error") {
          (_a5 = __privateGet(this, _logger)) == null ? void 0 : _a5.call(this, log_js_1.LogType.debugError, "Event threw before sending:", entry.error.message, entry.error.stack);
          return;
        }
        return __privateGet(this, _processor).call(this, entry.value);
      }).catch((error) => {
        var _a5;
        (_a5 = __privateGet(this, _logger)) == null ? void 0 : _a5.call(this, log_js_1.LogType.debugError, "Event was not processed:", error == null ? void 0 : error.message);
      });
    }
    __privateSet(this, _isProcessing, false);
  }, __publicField(_a3, "LOGGER_PREFIX", `${log_js_1.LogType.debug}:queue`), _a3);
  ProcessingQueue.ProcessingQueue = ProcessingQueue$1;
  _a2 = ProcessingQueue$1;
  return ProcessingQueue;
}
var CommandProcessor = {};
var protocol = {};
var cdp = {};
var hasRequiredCdp;
function requireCdp() {
  if (hasRequiredCdp) return cdp;
  hasRequiredCdp = 1;
  Object.defineProperty(cdp, "__esModule", { value: true });
  return cdp;
}
var chromiumBidi = {};
var hasRequiredChromiumBidi;
function requireChromiumBidi() {
  if (hasRequiredChromiumBidi) return chromiumBidi;
  hasRequiredChromiumBidi = 1;
  Object.defineProperty(chromiumBidi, "__esModule", { value: true });
  chromiumBidi.EVENT_NAMES = chromiumBidi.Bluetooth = chromiumBidi.Network = chromiumBidi.BrowsingContext = chromiumBidi.Log = chromiumBidi.Script = chromiumBidi.BiDiModule = void 0;
  var BiDiModule;
  (function(BiDiModule2) {
    BiDiModule2["Bluetooth"] = "bluetooth";
    BiDiModule2["Browser"] = "browser";
    BiDiModule2["BrowsingContext"] = "browsingContext";
    BiDiModule2["Cdp"] = "goog:cdp";
    BiDiModule2["DeprecatedCdp"] = "cdp";
    BiDiModule2["Input"] = "input";
    BiDiModule2["Log"] = "log";
    BiDiModule2["Network"] = "network";
    BiDiModule2["Script"] = "script";
    BiDiModule2["Session"] = "session";
  })(BiDiModule || (chromiumBidi.BiDiModule = BiDiModule = {}));
  var Script;
  (function(Script2) {
    (function(EventNames) {
      EventNames["Message"] = "script.message";
      EventNames["RealmCreated"] = "script.realmCreated";
      EventNames["RealmDestroyed"] = "script.realmDestroyed";
    })(Script2.EventNames || (Script2.EventNames = {}));
  })(Script || (chromiumBidi.Script = Script = {}));
  var Log;
  (function(Log2) {
    (function(EventNames) {
      EventNames["LogEntryAdded"] = "log.entryAdded";
    })(Log2.EventNames || (Log2.EventNames = {}));
  })(Log || (chromiumBidi.Log = Log = {}));
  var BrowsingContext2;
  (function(BrowsingContext3) {
    (function(EventNames) {
      EventNames["ContextCreated"] = "browsingContext.contextCreated";
      EventNames["ContextDestroyed"] = "browsingContext.contextDestroyed";
      EventNames["DomContentLoaded"] = "browsingContext.domContentLoaded";
      EventNames["DownloadWillBegin"] = "browsingContext.downloadWillBegin";
      EventNames["FragmentNavigated"] = "browsingContext.fragmentNavigated";
      EventNames["HistoryUpdated"] = "browsingContext.historyUpdated";
      EventNames["Load"] = "browsingContext.load";
      EventNames["NavigationAborted"] = "browsingContext.navigationAborted";
      EventNames["NavigationFailed"] = "browsingContext.navigationFailed";
      EventNames["NavigationStarted"] = "browsingContext.navigationStarted";
      EventNames["UserPromptClosed"] = "browsingContext.userPromptClosed";
      EventNames["UserPromptOpened"] = "browsingContext.userPromptOpened";
    })(BrowsingContext3.EventNames || (BrowsingContext3.EventNames = {}));
  })(BrowsingContext2 || (chromiumBidi.BrowsingContext = BrowsingContext2 = {}));
  var Network;
  (function(Network2) {
    (function(EventNames) {
      EventNames["AuthRequired"] = "network.authRequired";
      EventNames["BeforeRequestSent"] = "network.beforeRequestSent";
      EventNames["FetchError"] = "network.fetchError";
      EventNames["ResponseCompleted"] = "network.responseCompleted";
      EventNames["ResponseStarted"] = "network.responseStarted";
    })(Network2.EventNames || (Network2.EventNames = {}));
  })(Network || (chromiumBidi.Network = Network = {}));
  var Bluetooth;
  (function(Bluetooth2) {
    (function(EventNames) {
      EventNames["RequestDevicePromptUpdated"] = "bluetooth.requestDevicePromptUpdated";
    })(Bluetooth2.EventNames || (Bluetooth2.EventNames = {}));
  })(Bluetooth || (chromiumBidi.Bluetooth = Bluetooth = {}));
  chromiumBidi.EVENT_NAMES = /* @__PURE__ */ new Set([
    // keep-sorted start
    ...Object.values(BiDiModule),
    ...Object.values(BrowsingContext2.EventNames),
    ...Object.values(Log.EventNames),
    ...Object.values(Network.EventNames),
    ...Object.values(Script.EventNames)
    // keep-sorted end
  ]);
  return chromiumBidi;
}
var webdriverBidi = {};
var hasRequiredWebdriverBidi;
function requireWebdriverBidi() {
  if (hasRequiredWebdriverBidi) return webdriverBidi;
  hasRequiredWebdriverBidi = 1;
  Object.defineProperty(webdriverBidi, "__esModule", { value: true });
  return webdriverBidi;
}
var ErrorResponse = {};
var hasRequiredErrorResponse;
function requireErrorResponse() {
  if (hasRequiredErrorResponse) return ErrorResponse;
  hasRequiredErrorResponse = 1;
  Object.defineProperty(ErrorResponse, "__esModule", { value: true });
  ErrorResponse.NoSuchWebExtensionException = ErrorResponse.InvalidWebExtensionException = ErrorResponse.UnderspecifiedStoragePartitionException = ErrorResponse.UnableToSetFileInputException = ErrorResponse.UnableToSetCookieException = ErrorResponse.NoSuchStoragePartitionException = ErrorResponse.UnsupportedOperationException = ErrorResponse.UnableToCloseBrowserException = ErrorResponse.UnableToCaptureScreenException = ErrorResponse.UnknownErrorException = ErrorResponse.UnknownCommandException = ErrorResponse.SessionNotCreatedException = ErrorResponse.NoSuchUserContextException = ErrorResponse.NoSuchScriptException = ErrorResponse.NoSuchRequestException = ErrorResponse.NoSuchNodeException = ErrorResponse.NoSuchInterceptException = ErrorResponse.NoSuchHistoryEntryException = ErrorResponse.NoSuchHandleException = ErrorResponse.NoSuchFrameException = ErrorResponse.NoSuchElementException = ErrorResponse.NoSuchAlertException = ErrorResponse.MoveTargetOutOfBoundsException = ErrorResponse.InvalidSessionIdException = ErrorResponse.InvalidSelectorException = ErrorResponse.InvalidArgumentException = ErrorResponse.Exception = void 0;
  class Exception extends Error {
    constructor(error, message, stacktrace) {
      super();
      __publicField(this, "error");
      __publicField(this, "message");
      __publicField(this, "stacktrace");
      this.error = error;
      this.message = message;
      this.stacktrace = stacktrace;
    }
    toErrorResponse(commandId) {
      return {
        type: "error",
        id: commandId,
        error: this.error,
        message: this.message,
        stacktrace: this.stacktrace
      };
    }
  }
  ErrorResponse.Exception = Exception;
  class InvalidArgumentException extends Exception {
    constructor(message, stacktrace) {
      super("invalid argument", message, stacktrace);
    }
  }
  ErrorResponse.InvalidArgumentException = InvalidArgumentException;
  class InvalidSelectorException extends Exception {
    constructor(message, stacktrace) {
      super("invalid selector", message, stacktrace);
    }
  }
  ErrorResponse.InvalidSelectorException = InvalidSelectorException;
  class InvalidSessionIdException extends Exception {
    constructor(message, stacktrace) {
      super("invalid session id", message, stacktrace);
    }
  }
  ErrorResponse.InvalidSessionIdException = InvalidSessionIdException;
  class MoveTargetOutOfBoundsException extends Exception {
    constructor(message, stacktrace) {
      super("move target out of bounds", message, stacktrace);
    }
  }
  ErrorResponse.MoveTargetOutOfBoundsException = MoveTargetOutOfBoundsException;
  class NoSuchAlertException extends Exception {
    constructor(message, stacktrace) {
      super("no such alert", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchAlertException = NoSuchAlertException;
  class NoSuchElementException extends Exception {
    constructor(message, stacktrace) {
      super("no such element", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchElementException = NoSuchElementException;
  class NoSuchFrameException extends Exception {
    constructor(message, stacktrace) {
      super("no such frame", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchFrameException = NoSuchFrameException;
  class NoSuchHandleException extends Exception {
    constructor(message, stacktrace) {
      super("no such handle", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchHandleException = NoSuchHandleException;
  class NoSuchHistoryEntryException extends Exception {
    constructor(message, stacktrace) {
      super("no such history entry", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchHistoryEntryException = NoSuchHistoryEntryException;
  class NoSuchInterceptException extends Exception {
    constructor(message, stacktrace) {
      super("no such intercept", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchInterceptException = NoSuchInterceptException;
  class NoSuchNodeException extends Exception {
    constructor(message, stacktrace) {
      super("no such node", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchNodeException = NoSuchNodeException;
  class NoSuchRequestException extends Exception {
    constructor(message, stacktrace) {
      super("no such request", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchRequestException = NoSuchRequestException;
  class NoSuchScriptException extends Exception {
    constructor(message, stacktrace) {
      super("no such script", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchScriptException = NoSuchScriptException;
  class NoSuchUserContextException extends Exception {
    constructor(message, stacktrace) {
      super("no such user context", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchUserContextException = NoSuchUserContextException;
  class SessionNotCreatedException extends Exception {
    constructor(message, stacktrace) {
      super("session not created", message, stacktrace);
    }
  }
  ErrorResponse.SessionNotCreatedException = SessionNotCreatedException;
  class UnknownCommandException extends Exception {
    constructor(message, stacktrace) {
      super("unknown command", message, stacktrace);
    }
  }
  ErrorResponse.UnknownCommandException = UnknownCommandException;
  class UnknownErrorException extends Exception {
    constructor(message, stacktrace = new Error().stack) {
      super("unknown error", message, stacktrace);
    }
  }
  ErrorResponse.UnknownErrorException = UnknownErrorException;
  class UnableToCaptureScreenException extends Exception {
    constructor(message, stacktrace) {
      super("unable to capture screen", message, stacktrace);
    }
  }
  ErrorResponse.UnableToCaptureScreenException = UnableToCaptureScreenException;
  class UnableToCloseBrowserException extends Exception {
    constructor(message, stacktrace) {
      super("unable to close browser", message, stacktrace);
    }
  }
  ErrorResponse.UnableToCloseBrowserException = UnableToCloseBrowserException;
  class UnsupportedOperationException extends Exception {
    constructor(message, stacktrace) {
      super("unsupported operation", message, stacktrace);
    }
  }
  ErrorResponse.UnsupportedOperationException = UnsupportedOperationException;
  class NoSuchStoragePartitionException extends Exception {
    constructor(message, stacktrace) {
      super("no such storage partition", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchStoragePartitionException = NoSuchStoragePartitionException;
  class UnableToSetCookieException extends Exception {
    constructor(message, stacktrace) {
      super("unable to set cookie", message, stacktrace);
    }
  }
  ErrorResponse.UnableToSetCookieException = UnableToSetCookieException;
  class UnableToSetFileInputException extends Exception {
    constructor(message, stacktrace) {
      super("unable to set file input", message, stacktrace);
    }
  }
  ErrorResponse.UnableToSetFileInputException = UnableToSetFileInputException;
  class UnderspecifiedStoragePartitionException extends Exception {
    constructor(message, stacktrace) {
      super("underspecified storage partition", message, stacktrace);
    }
  }
  ErrorResponse.UnderspecifiedStoragePartitionException = UnderspecifiedStoragePartitionException;
  class InvalidWebExtensionException extends Exception {
    constructor(message, stacktrace) {
      super("invalid web extension", message, stacktrace);
    }
  }
  ErrorResponse.InvalidWebExtensionException = InvalidWebExtensionException;
  class NoSuchWebExtensionException extends Exception {
    constructor(message, stacktrace) {
      super("no such web extension", message, stacktrace);
    }
  }
  ErrorResponse.NoSuchWebExtensionException = NoSuchWebExtensionException;
  return ErrorResponse;
}
var webdriverBidiPermissions = {};
var hasRequiredWebdriverBidiPermissions;
function requireWebdriverBidiPermissions() {
  if (hasRequiredWebdriverBidiPermissions) return webdriverBidiPermissions;
  hasRequiredWebdriverBidiPermissions = 1;
  Object.defineProperty(webdriverBidiPermissions, "__esModule", { value: true });
  return webdriverBidiPermissions;
}
var webdriverBidiBluetooth = {};
var hasRequiredWebdriverBidiBluetooth;
function requireWebdriverBidiBluetooth() {
  if (hasRequiredWebdriverBidiBluetooth) return webdriverBidiBluetooth;
  hasRequiredWebdriverBidiBluetooth = 1;
  Object.defineProperty(webdriverBidiBluetooth, "__esModule", { value: true });
  return webdriverBidiBluetooth;
}
var hasRequiredProtocol;
function requireProtocol() {
  if (hasRequiredProtocol) return protocol;
  hasRequiredProtocol = 1;
  (function(exports) {
    var __createBinding = protocol.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = protocol.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = protocol.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    var __exportStar = protocol.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChromiumBidi = exports.Cdp = void 0;
    exports.Cdp = __importStar(requireCdp());
    exports.ChromiumBidi = __importStar(requireChromiumBidi());
    __exportStar(requireWebdriverBidi(), exports);
    __exportStar(requireErrorResponse(), exports);
    __exportStar(requireWebdriverBidiPermissions(), exports);
    __exportStar(requireWebdriverBidiBluetooth(), exports);
  })(protocol);
  return protocol;
}
var BidiNoOpParser = {};
var hasRequiredBidiNoOpParser;
function requireBidiNoOpParser() {
  if (hasRequiredBidiNoOpParser) return BidiNoOpParser;
  hasRequiredBidiNoOpParser = 1;
  Object.defineProperty(BidiNoOpParser, "__esModule", { value: true });
  BidiNoOpParser.BidiNoOpParser = void 0;
  let BidiNoOpParser$1 = class BidiNoOpParser {
    // Bluetooth module
    // keep-sorted start block=yes
    parseHandleRequestDevicePromptParams(params) {
      return params;
    }
    parseSimulateAdapterParameters(params) {
      return params;
    }
    parseSimulateAdvertisementParameters(params) {
      return params;
    }
    parseSimulatePreconnectedPeripheralParameters(params) {
      return params;
    }
    // keep-sorted end
    // Browser module
    // keep-sorted start block=yes
    parseRemoveUserContextParams(params) {
      return params;
    }
    // keep-sorted end
    // Browsing Context module
    // keep-sorted start block=yes
    parseActivateParams(params) {
      return params;
    }
    parseCaptureScreenshotParams(params) {
      return params;
    }
    parseCloseParams(params) {
      return params;
    }
    parseCreateParams(params) {
      return params;
    }
    parseGetTreeParams(params) {
      return params;
    }
    parseHandleUserPromptParams(params) {
      return params;
    }
    parseLocateNodesParams(params) {
      return params;
    }
    parseNavigateParams(params) {
      return params;
    }
    parsePrintParams(params) {
      return params;
    }
    parseReloadParams(params) {
      return params;
    }
    parseSetViewportParams(params) {
      return params;
    }
    parseTraverseHistoryParams(params) {
      return params;
    }
    // keep-sorted end
    // CDP module
    // keep-sorted start block=yes
    parseGetSessionParams(params) {
      return params;
    }
    parseResolveRealmParams(params) {
      return params;
    }
    parseSendCommandParams(params) {
      return params;
    }
    // keep-sorted end
    // Script module
    // keep-sorted start block=yes
    parseAddPreloadScriptParams(params) {
      return params;
    }
    parseCallFunctionParams(params) {
      return params;
    }
    parseDisownParams(params) {
      return params;
    }
    parseEvaluateParams(params) {
      return params;
    }
    parseGetRealmsParams(params) {
      return params;
    }
    parseRemovePreloadScriptParams(params) {
      return params;
    }
    // keep-sorted end
    // Input module
    // keep-sorted start block=yes
    parsePerformActionsParams(params) {
      return params;
    }
    parseReleaseActionsParams(params) {
      return params;
    }
    parseSetFilesParams(params) {
      return params;
    }
    // keep-sorted end
    // Network module
    // keep-sorted start block=yes
    parseAddInterceptParams(params) {
      return params;
    }
    parseContinueRequestParams(params) {
      return params;
    }
    parseContinueResponseParams(params) {
      return params;
    }
    parseContinueWithAuthParams(params) {
      return params;
    }
    parseFailRequestParams(params) {
      return params;
    }
    parseProvideResponseParams(params) {
      return params;
    }
    parseRemoveInterceptParams(params) {
      return params;
    }
    parseSetCacheBehavior(params) {
      return params;
    }
    // keep-sorted end
    // Permissions module
    // keep-sorted start block=yes
    parseSetPermissionsParams(params) {
      return params;
    }
    // keep-sorted end
    // Session module
    // keep-sorted start block=yes
    parseSubscribeParams(params) {
      return params;
    }
    // keep-sorted end
    // Storage module
    // keep-sorted start block=yes
    parseDeleteCookiesParams(params) {
      return params;
    }
    parseGetCookiesParams(params) {
      return params;
    }
    parseSetCookieParams(params) {
      return params;
    }
  };
  BidiNoOpParser.BidiNoOpParser = BidiNoOpParser$1;
  return BidiNoOpParser;
}
var BrowserProcessor = {};
var hasRequiredBrowserProcessor;
function requireBrowserProcessor() {
  var _browserCdpClient, _browsingContextStorage, _BrowserProcessor_instances, getWindowInfo_fn, _a2;
  if (hasRequiredBrowserProcessor) return BrowserProcessor;
  hasRequiredBrowserProcessor = 1;
  Object.defineProperty(BrowserProcessor, "__esModule", { value: true });
  BrowserProcessor.BrowserProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  let BrowserProcessor$1 = (_a2 = class {
    constructor(browserCdpClient, browsingContextStorage) {
      __privateAdd(this, _BrowserProcessor_instances);
      __privateAdd(this, _browserCdpClient);
      __privateAdd(this, _browsingContextStorage);
      __privateSet(this, _browserCdpClient, browserCdpClient);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
    }
    close() {
      setTimeout(() => __privateGet(this, _browserCdpClient).sendCommand("Browser.close"), 0);
      return {};
    }
    async createUserContext(params) {
      const request = {
        proxyServer: params["goog:proxyServer"] ?? void 0
      };
      const proxyBypassList = params["goog:proxyBypassList"] ?? void 0;
      if (proxyBypassList) {
        request.proxyBypassList = proxyBypassList.join(",");
      }
      const context = await __privateGet(this, _browserCdpClient).sendCommand("Target.createBrowserContext", request);
      return {
        userContext: context.browserContextId
      };
    }
    async removeUserContext(params) {
      const userContext = params.userContext;
      if (userContext === "default") {
        throw new protocol_js_1.InvalidArgumentException("`default` user context cannot be removed");
      }
      try {
        await __privateGet(this, _browserCdpClient).sendCommand("Target.disposeBrowserContext", {
          browserContextId: userContext
        });
      } catch (err) {
        if (err.message.startsWith("Failed to find context with id")) {
          throw new protocol_js_1.NoSuchUserContextException(err.message);
        }
        throw err;
      }
      return {};
    }
    async getUserContexts() {
      const result = await __privateGet(this, _browserCdpClient).sendCommand("Target.getBrowserContexts");
      return {
        userContexts: [
          {
            userContext: "default"
          },
          ...result.browserContextIds.map((id) => {
            return {
              userContext: id
            };
          })
        ]
      };
    }
    async getClientWindows() {
      const topLevelTargetIds = __privateGet(this, _browsingContextStorage).getTopLevelContexts().map((b) => b.cdpTarget.id);
      const clientWindows = await Promise.all(topLevelTargetIds.map(async (targetId) => await __privateMethod(this, _BrowserProcessor_instances, getWindowInfo_fn).call(this, targetId)));
      const uniqueClientWindowIds = /* @__PURE__ */ new Set();
      const uniqueClientWindows = new Array();
      for (const window2 of clientWindows) {
        if (!uniqueClientWindowIds.has(window2.clientWindow)) {
          uniqueClientWindowIds.add(window2.clientWindow);
          uniqueClientWindows.push(window2);
        }
      }
      return { clientWindows: uniqueClientWindows };
    }
  }, _browserCdpClient = new WeakMap(), _browsingContextStorage = new WeakMap(), _BrowserProcessor_instances = new WeakSet(), getWindowInfo_fn = async function(targetId) {
    const windowInfo = await __privateGet(this, _browserCdpClient).sendCommand("Browser.getWindowForTarget", { targetId });
    return {
      // `active` is not supported in CDP yet.
      active: false,
      clientWindow: `${windowInfo.windowId}`,
      state: windowInfo.bounds.windowState ?? "normal",
      height: windowInfo.bounds.height ?? 0,
      width: windowInfo.bounds.width ?? 0,
      x: windowInfo.bounds.left ?? 0,
      y: windowInfo.bounds.top ?? 0
    };
  }, _a2);
  BrowserProcessor.BrowserProcessor = BrowserProcessor$1;
  return BrowserProcessor;
}
var CdpProcessor = {};
var hasRequiredCdpProcessor;
function requireCdpProcessor() {
  var _browsingContextStorage, _realmStorage, _cdpConnection, _browserCdpClient, _a2;
  if (hasRequiredCdpProcessor) return CdpProcessor;
  hasRequiredCdpProcessor = 1;
  Object.defineProperty(CdpProcessor, "__esModule", { value: true });
  CdpProcessor.CdpProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  let CdpProcessor$1 = (_a2 = class {
    constructor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient) {
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _realmStorage);
      __privateAdd(this, _cdpConnection);
      __privateAdd(this, _browserCdpClient);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _realmStorage, realmStorage);
      __privateSet(this, _cdpConnection, cdpConnection);
      __privateSet(this, _browserCdpClient, browserCdpClient);
    }
    getSession(params) {
      const context = params.context;
      const sessionId = __privateGet(this, _browsingContextStorage).getContext(context).cdpTarget.cdpSessionId;
      if (sessionId === void 0) {
        return {};
      }
      return { session: sessionId };
    }
    resolveRealm(params) {
      const context = params.realm;
      const realm = __privateGet(this, _realmStorage).getRealm({ realmId: context });
      if (realm === void 0) {
        throw new protocol_js_1.UnknownErrorException(`Could not find realm ${params.realm}`);
      }
      return { executionContextId: realm.executionContextId };
    }
    async sendCommand(params) {
      const client = params.session ? __privateGet(this, _cdpConnection).getCdpClient(params.session) : __privateGet(this, _browserCdpClient);
      const result = await client.sendCommand(params.method, params.params);
      return {
        result,
        session: params.session
      };
    }
  }, _browsingContextStorage = new WeakMap(), _realmStorage = new WeakMap(), _cdpConnection = new WeakMap(), _browserCdpClient = new WeakMap(), _a2);
  CdpProcessor.CdpProcessor = CdpProcessor$1;
  return CdpProcessor;
}
var BrowsingContextProcessor = {};
var hasRequiredBrowsingContextProcessor;
function requireBrowsingContextProcessor() {
  var _browserCdpClient, _browsingContextStorage, _eventManager, _BrowsingContextProcessor_instances, onContextCreatedSubscribeHook_fn, _a2;
  if (hasRequiredBrowsingContextProcessor) return BrowsingContextProcessor;
  hasRequiredBrowsingContextProcessor = 1;
  Object.defineProperty(BrowsingContextProcessor, "__esModule", { value: true });
  BrowsingContextProcessor.BrowsingContextProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  let BrowsingContextProcessor$1 = (_a2 = class {
    constructor(browserCdpClient, browsingContextStorage, eventManager) {
      __privateAdd(this, _BrowsingContextProcessor_instances);
      __privateAdd(this, _browserCdpClient);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _eventManager);
      __privateSet(this, _browserCdpClient, browserCdpClient);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _eventManager, eventManager);
      __privateGet(this, _eventManager).addSubscribeHook(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated, __privateMethod(this, _BrowsingContextProcessor_instances, onContextCreatedSubscribeHook_fn).bind(this));
    }
    getTree(params) {
      const resultContexts = params.root === void 0 ? __privateGet(this, _browsingContextStorage).getTopLevelContexts() : [__privateGet(this, _browsingContextStorage).getContext(params.root)];
      return {
        contexts: resultContexts.map((c) => c.serializeToBidiValue(params.maxDepth ?? Number.MAX_VALUE))
      };
    }
    async create(params) {
      let referenceContext;
      let userContext = "default";
      if (params.referenceContext !== void 0) {
        referenceContext = __privateGet(this, _browsingContextStorage).getContext(params.referenceContext);
        if (!referenceContext.isTopLevelContext()) {
          throw new protocol_js_1.InvalidArgumentException(`referenceContext should be a top-level context`);
        }
        userContext = referenceContext.userContext;
      }
      if (params.userContext !== void 0) {
        userContext = params.userContext;
      }
      const existingContexts = __privateGet(this, _browsingContextStorage).getAllContexts().filter((context2) => context2.userContext === userContext);
      let newWindow = false;
      switch (params.type) {
        case "tab":
          newWindow = false;
          break;
        case "window":
          newWindow = true;
          break;
      }
      if (!existingContexts.length) {
        newWindow = true;
      }
      let result;
      try {
        result = await __privateGet(this, _browserCdpClient).sendCommand("Target.createTarget", {
          url: "about:blank",
          newWindow,
          browserContextId: userContext === "default" ? void 0 : userContext,
          background: params.background === true
        });
      } catch (err) {
        if (
          // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
          err.message.startsWith("Failed to find browser context with id") || // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
          err.message === "browserContextId"
        ) {
          throw new protocol_js_1.NoSuchUserContextException(`The context ${userContext} was not found`);
        }
        throw err;
      }
      const context = await __privateGet(this, _browsingContextStorage).waitForContext(result.targetId);
      await context.lifecycleLoaded();
      return { context: context.id };
    }
    navigate(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      return context.navigate(
        params.url,
        params.wait ?? "none"
        /* BrowsingContext.ReadinessState.None */
      );
    }
    reload(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      return context.reload(
        params.ignoreCache ?? false,
        params.wait ?? "none"
        /* BrowsingContext.ReadinessState.None */
      );
    }
    async activate(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      if (!context.isTopLevelContext()) {
        throw new protocol_js_1.InvalidArgumentException("Activation is only supported on the top-level context");
      }
      await context.activate();
      return {};
    }
    async captureScreenshot(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      return await context.captureScreenshot(params);
    }
    async print(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      return await context.print(params);
    }
    async setViewport(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      if (!context.isTopLevelContext()) {
        throw new protocol_js_1.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
      }
      await context.setViewport(params.viewport, params.devicePixelRatio);
      return {};
    }
    async traverseHistory(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      if (!context) {
        throw new protocol_js_1.InvalidArgumentException(`No browsing context with id ${params.context}`);
      }
      if (!context.isTopLevelContext()) {
        throw new protocol_js_1.InvalidArgumentException("Traversing history is only supported on the top-level context");
      }
      await context.traverseHistory(params.delta);
      return {};
    }
    async handleUserPrompt(params) {
      var _a3;
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      try {
        await context.handleUserPrompt(params.accept, params.userText);
      } catch (error) {
        if ((_a3 = error.message) == null ? void 0 : _a3.includes("No dialog is showing")) {
          throw new protocol_js_1.NoSuchAlertException("No dialog is showing");
        }
        throw error;
      }
      return {};
    }
    async close(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      if (!context.isTopLevelContext()) {
        throw new protocol_js_1.InvalidArgumentException(`Non top-level browsing context ${context.id} cannot be closed.`);
      }
      const parentCdpClient = context.cdpTarget.parentCdpClient;
      try {
        const detachedFromTargetPromise = new Promise((resolve) => {
          const onContextDestroyed = (event) => {
            if (event.targetId === params.context) {
              parentCdpClient.off("Target.detachedFromTarget", onContextDestroyed);
              resolve();
            }
          };
          parentCdpClient.on("Target.detachedFromTarget", onContextDestroyed);
        });
        try {
          if (params.promptUnload) {
            await context.close();
          } else {
            await parentCdpClient.sendCommand("Target.closeTarget", {
              targetId: params.context
            });
          }
        } catch (error) {
          if (!parentCdpClient.isCloseError(error)) {
            throw error;
          }
        }
        await detachedFromTargetPromise;
      } catch (error) {
        if (!(error.code === -32e3 && error.message === "Not attached to an active page")) {
          throw error;
        }
      }
      return {};
    }
    async locateNodes(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      return await context.locateNodes(params);
    }
  }, _browserCdpClient = new WeakMap(), _browsingContextStorage = new WeakMap(), _eventManager = new WeakMap(), _BrowsingContextProcessor_instances = new WeakSet(), onContextCreatedSubscribeHook_fn = function(contextId) {
    const context = __privateGet(this, _browsingContextStorage).getContext(contextId);
    const contextsToReport = [
      context,
      ...__privateGet(this, _browsingContextStorage).getContext(contextId).allChildren
    ];
    contextsToReport.forEach((context2) => {
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
        params: context2.serializeToBidiValue()
      }, context2.id);
    });
    return Promise.resolve();
  }, _a2);
  BrowsingContextProcessor.BrowsingContextProcessor = BrowsingContextProcessor$1;
  return BrowsingContextProcessor;
}
var InputProcessor = {};
var assert = {};
var hasRequiredAssert;
function requireAssert() {
  if (hasRequiredAssert) return assert;
  hasRequiredAssert = 1;
  Object.defineProperty(assert, "__esModule", { value: true });
  assert.assert = assert$12;
  function assert$12(predicate, message) {
    if (!predicate) {
      throw new Error(message ?? "Internal assertion failed.");
    }
  }
  return assert;
}
var ActionDispatcher = {};
var GraphemeTools = {};
var hasRequiredGraphemeTools;
function requireGraphemeTools() {
  if (hasRequiredGraphemeTools) return GraphemeTools;
  hasRequiredGraphemeTools = 1;
  Object.defineProperty(GraphemeTools, "__esModule", { value: true });
  GraphemeTools.isSingleComplexGrapheme = isSingleComplexGrapheme;
  GraphemeTools.isSingleGrapheme = isSingleGrapheme;
  function isSingleComplexGrapheme(value) {
    return isSingleGrapheme(value) && value.length > 1;
  }
  function isSingleGrapheme(value) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return [...segmenter.segment(value)].length === 1;
  }
  return GraphemeTools;
}
var InputSource = {};
var hasRequiredInputSource;
function requireInputSource() {
  var _modifiers, _KeySource_instances, setModifier_fn, _a2, _DOUBLE_CLICK_TIME_MS, _MAX_DOUBLE_CLICK_RADIUS, _x2, _y2, _time, _clickContexts;
  if (hasRequiredInputSource) return InputSource;
  hasRequiredInputSource = 1;
  Object.defineProperty(InputSource, "__esModule", { value: true });
  InputSource.WheelSource = InputSource.PointerSource = InputSource.KeySource = InputSource.NoneSource = void 0;
  class NoneSource {
    constructor() {
      __publicField(this, "type", "none");
    }
  }
  InputSource.NoneSource = NoneSource;
  class KeySource {
    constructor() {
      __privateAdd(this, _KeySource_instances);
      __publicField(this, "type", "key");
      __publicField(this, "pressed", /* @__PURE__ */ new Set());
      // This is a bitfield that matches the modifiers parameter of
      // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
      __privateAdd(this, _modifiers, 0);
    }
    get modifiers() {
      return __privateGet(this, _modifiers);
    }
    get alt() {
      return (__privateGet(this, _modifiers) & 1) === 1;
    }
    set alt(value) {
      __privateMethod(this, _KeySource_instances, setModifier_fn).call(this, value, 1);
    }
    get ctrl() {
      return (__privateGet(this, _modifiers) & 2) === 2;
    }
    set ctrl(value) {
      __privateMethod(this, _KeySource_instances, setModifier_fn).call(this, value, 2);
    }
    get meta() {
      return (__privateGet(this, _modifiers) & 4) === 4;
    }
    set meta(value) {
      __privateMethod(this, _KeySource_instances, setModifier_fn).call(this, value, 4);
    }
    get shift() {
      return (__privateGet(this, _modifiers) & 8) === 8;
    }
    set shift(value) {
      __privateMethod(this, _KeySource_instances, setModifier_fn).call(this, value, 8);
    }
  }
  _modifiers = new WeakMap();
  _KeySource_instances = new WeakSet();
  setModifier_fn = function(value, bit) {
    if (value) {
      __privateSet(this, _modifiers, __privateGet(this, _modifiers) | bit);
    } else {
      __privateSet(this, _modifiers, __privateGet(this, _modifiers) & ~bit);
    }
  };
  InputSource.KeySource = KeySource;
  class PointerSource {
    constructor(id, subtype) {
      __publicField(this, "type", "pointer");
      __publicField(this, "subtype");
      __publicField(this, "pointerId");
      __publicField(this, "pressed", /* @__PURE__ */ new Set());
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      __publicField(this, "force");
      __privateAdd(this, _clickContexts, /* @__PURE__ */ new Map());
      this.pointerId = id;
      this.subtype = subtype;
    }
    // This is a bitfield that matches the buttons parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
    get buttons() {
      let buttons = 0;
      for (const button of this.pressed) {
        switch (button) {
          case 0:
            buttons |= 1;
            break;
          case 1:
            buttons |= 4;
            break;
          case 2:
            buttons |= 2;
            break;
          case 3:
            buttons |= 8;
            break;
          case 4:
            buttons |= 16;
            break;
        }
      }
      return buttons;
    }
    setClickCount(button, context) {
      let storedContext = __privateGet(this, _clickContexts).get(button);
      if (!storedContext || storedContext.compare(context)) {
        storedContext = context;
      }
      ++storedContext.count;
      __privateGet(this, _clickContexts).set(button, storedContext);
      return storedContext.count;
    }
    getClickCount(button) {
      var _a3;
      return ((_a3 = __privateGet(this, _clickContexts).get(button)) == null ? void 0 : _a3.count) ?? 0;
    }
  }
  _clickContexts = new WeakMap();
  // --- Platform-specific code starts here ---
  // Input.dispatchMouseEvent doesn't know the concept of double click, so we
  // need to create the logic, similar to how it's done for OSes:
  // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
  __publicField(PointerSource, "ClickContext", (_a2 = class {
    constructor(x, y, time2) {
      __publicField(this, "count", 0);
      __privateAdd(this, _x2);
      __privateAdd(this, _y2);
      __privateAdd(this, _time);
      __privateSet(this, _x2, x);
      __privateSet(this, _y2, y);
      __privateSet(this, _time, time2);
    }
    compare(context) {
      return (
        // The click needs to be within a certain amount of ms.
        __privateGet(context, _time) - __privateGet(this, _time) > __privateGet(_a2, _DOUBLE_CLICK_TIME_MS) || // The click needs to be within a certain square radius.
        Math.abs(__privateGet(context, _x2) - __privateGet(this, _x2)) > __privateGet(_a2, _MAX_DOUBLE_CLICK_RADIUS) || Math.abs(__privateGet(context, _y2) - __privateGet(this, _y2)) > __privateGet(_a2, _MAX_DOUBLE_CLICK_RADIUS)
      );
    }
  }, _DOUBLE_CLICK_TIME_MS = new WeakMap(), _MAX_DOUBLE_CLICK_RADIUS = new WeakMap(), _x2 = new WeakMap(), _y2 = new WeakMap(), _time = new WeakMap(), __privateAdd(_a2, _DOUBLE_CLICK_TIME_MS, 500), __privateAdd(_a2, _MAX_DOUBLE_CLICK_RADIUS, 2), _a2));
  InputSource.PointerSource = PointerSource;
  class WheelSource {
    constructor() {
      __publicField(this, "type", "wheel");
    }
  }
  InputSource.WheelSource = WheelSource;
  return InputSource;
}
var keyUtils = {};
var hasRequiredKeyUtils;
function requireKeyUtils() {
  if (hasRequiredKeyUtils) return keyUtils;
  hasRequiredKeyUtils = 1;
  Object.defineProperty(keyUtils, "__esModule", { value: true });
  keyUtils.getNormalizedKey = getNormalizedKey;
  keyUtils.getKeyCode = getKeyCode;
  keyUtils.getKeyLocation = getKeyLocation;
  function getNormalizedKey(value) {
    switch (value) {
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
        return value;
    }
  }
  function getKeyCode(key) {
    switch (key) {
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
  function getKeyLocation(key) {
    switch (key) {
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
  return keyUtils;
}
var USKeyboardLayout = {};
var hasRequiredUSKeyboardLayout;
function requireUSKeyboardLayout() {
  if (hasRequiredUSKeyboardLayout) return USKeyboardLayout;
  hasRequiredUSKeyboardLayout = 1;
  Object.defineProperty(USKeyboardLayout, "__esModule", { value: true });
  USKeyboardLayout.KeyToKeyCode = void 0;
  USKeyboardLayout.KeyToKeyCode = {
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
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
  };
  return USKeyboardLayout;
}
var hasRequiredActionDispatcher;
function requireActionDispatcher() {
  var _a2, _browsingContextStorage, _tickStart, _tickDuration, _inputState, _contextId, _isMacOS, _ActionDispatcher_instances, context_get, dispatchAction_fn, dispatchPointerDownAction_fn, dispatchPointerUpAction_fn, dispatchPointerMoveAction_fn, getFrameOffset_fn, getCoordinateFromOrigin_fn, dispatchScrollAction_fn, dispatchKeyDownAction_fn, dispatchKeyUpAction_fn;
  if (hasRequiredActionDispatcher) return ActionDispatcher;
  hasRequiredActionDispatcher = 1;
  Object.defineProperty(ActionDispatcher, "__esModule", { value: true });
  ActionDispatcher.ActionDispatcher = void 0;
  const protocol_js_1 = requireProtocol();
  const assert_js_1 = requireAssert();
  const GraphemeTools_js_1 = requireGraphemeTools();
  const InputSource_js_1 = requireInputSource();
  const keyUtils_js_1 = requireKeyUtils();
  const USKeyboardLayout_js_1 = requireUSKeyboardLayout();
  const CALCULATE_IN_VIEW_CENTER_PT_DECL = ((i) => {
    const t = i.getClientRects()[0], e = Math.max(0, Math.min(t.x, t.x + t.width)), n = Math.min(window.innerWidth, Math.max(t.x, t.x + t.width)), h = Math.max(0, Math.min(t.y, t.y + t.height)), m = Math.min(window.innerHeight, Math.max(t.y, t.y + t.height));
    return [e + (n - e >> 1), h + (m - h >> 1)];
  }).toString();
  const IS_MAC_DECL = (() => {
    return navigator.platform.toLowerCase().includes("mac");
  }).toString();
  async function getElementCenter(context, element) {
    var _a3, _b, _c, _d;
    const sandbox = await context.getOrCreateSandbox(void 0);
    const result = await sandbox.callFunction(CALCULATE_IN_VIEW_CENTER_PT_DECL, false, { type: "undefined" }, [element]);
    if (result.type === "exception") {
      throw new protocol_js_1.NoSuchElementException(`Origin element ${element.sharedId} was not found`);
    }
    (0, assert_js_1.assert)(result.result.type === "array");
    (0, assert_js_1.assert)(((_b = (_a3 = result.result.value) == null ? void 0 : _a3[0]) == null ? void 0 : _b.type) === "number");
    (0, assert_js_1.assert)(((_d = (_c = result.result.value) == null ? void 0 : _c[1]) == null ? void 0 : _d.type) === "number");
    const { result: { value: [{ value: x }, { value: y }] } } = result;
    return { x, y };
  }
  let ActionDispatcher$1 = (_a2 = class {
    constructor(inputState, browsingContextStorage, contextId, isMacOS) {
      __privateAdd(this, _ActionDispatcher_instances);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _tickStart, 0);
      __privateAdd(this, _tickDuration, 0);
      __privateAdd(this, _inputState);
      __privateAdd(this, _contextId);
      __privateAdd(this, _isMacOS);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _inputState, inputState);
      __privateSet(this, _contextId, contextId);
      __privateSet(this, _isMacOS, isMacOS);
    }
    async dispatchActions(optionsByTick) {
      await __privateGet(this, _inputState).queue.run(async () => {
        for (const options of optionsByTick) {
          await this.dispatchTickActions(options);
        }
      });
    }
    async dispatchTickActions(options) {
      __privateSet(this, _tickStart, performance.now());
      __privateSet(this, _tickDuration, 0);
      for (const { action } of options) {
        if ("duration" in action && action.duration !== void 0) {
          __privateSet(this, _tickDuration, Math.max(__privateGet(this, _tickDuration), action.duration));
        }
      }
      const promises = [
        new Promise((resolve) => setTimeout(resolve, __privateGet(this, _tickDuration)))
      ];
      for (const option of options) {
        promises.push(__privateMethod(this, _ActionDispatcher_instances, dispatchAction_fn).call(this, option));
      }
      await Promise.all(promises);
    }
  }, _browsingContextStorage = new WeakMap(), _tickStart = new WeakMap(), _tickDuration = new WeakMap(), _inputState = new WeakMap(), _contextId = new WeakMap(), _isMacOS = new WeakMap(), _ActionDispatcher_instances = new WeakSet(), context_get = function() {
    return __privateGet(this, _browsingContextStorage).getContext(__privateGet(this, _contextId));
  }, dispatchAction_fn = async function({ id, action }) {
    const source = __privateGet(this, _inputState).get(id);
    const keyState = __privateGet(this, _inputState).getGlobalKeyState();
    switch (action.type) {
      case "keyDown": {
        await __privateMethod(this, _ActionDispatcher_instances, dispatchKeyDownAction_fn).call(this, source, action);
        __privateGet(this, _inputState).cancelList.push({
          id,
          action: {
            ...action,
            type: "keyUp"
          }
        });
        break;
      }
      case "keyUp": {
        await __privateMethod(this, _ActionDispatcher_instances, dispatchKeyUpAction_fn).call(this, source, action);
        break;
      }
      case "pause": {
        break;
      }
      case "pointerDown": {
        await __privateMethod(this, _ActionDispatcher_instances, dispatchPointerDownAction_fn).call(this, source, keyState, action);
        __privateGet(this, _inputState).cancelList.push({
          id,
          action: {
            ...action,
            type: "pointerUp"
          }
        });
        break;
      }
      case "pointerMove": {
        await __privateMethod(this, _ActionDispatcher_instances, dispatchPointerMoveAction_fn).call(this, source, keyState, action);
        break;
      }
      case "pointerUp": {
        await __privateMethod(this, _ActionDispatcher_instances, dispatchPointerUpAction_fn).call(this, source, keyState, action);
        break;
      }
      case "scroll": {
        await __privateMethod(this, _ActionDispatcher_instances, dispatchScrollAction_fn).call(this, source, keyState, action);
        break;
      }
    }
  }, dispatchPointerDownAction_fn = async function(source, keyState, action) {
    const { button } = action;
    if (source.pressed.has(button)) {
      return;
    }
    source.pressed.add(button);
    const { x, y, subtype: pointerType } = source;
    const { width, height, pressure, twist, tangentialPressure } = action;
    const { tiltX, tiltY } = getTilt(action);
    const { modifiers } = keyState;
    const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
    switch (pointerType) {
      case "mouse":
      case "pen":
        await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mousePressed",
          x,
          y,
          modifiers,
          button: getCdpButton(button),
          buttons: source.buttons,
          clickCount: source.setClickCount(button, new InputSource_js_1.PointerSource.ClickContext(x, y, performance.now())),
          pointerType,
          tangentialPressure,
          tiltX,
          tiltY,
          twist,
          force: pressure
        });
        break;
      case "touch":
        await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
          type: "touchStart",
          touchPoints: [
            {
              x,
              y,
              radiusX,
              radiusY,
              tangentialPressure,
              tiltX,
              tiltY,
              twist,
              force: pressure,
              id: source.pointerId
            }
          ],
          modifiers
        });
        break;
    }
    source.radiusX = radiusX;
    source.radiusY = radiusY;
    source.force = pressure;
  }, dispatchPointerUpAction_fn = function(source, keyState, action) {
    const { button } = action;
    if (!source.pressed.has(button)) {
      return;
    }
    source.pressed.delete(button);
    const { x, y, force, radiusX, radiusY, subtype: pointerType } = source;
    const { modifiers } = keyState;
    switch (pointerType) {
      case "mouse":
      case "pen":
        return __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mouseReleased",
          x,
          y,
          modifiers,
          button: getCdpButton(button),
          buttons: source.buttons,
          clickCount: source.getClickCount(button),
          pointerType
        });
      case "touch":
        return __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
          type: "touchEnd",
          touchPoints: [
            {
              x,
              y,
              id: source.pointerId,
              force,
              radiusX,
              radiusY
            }
          ],
          modifiers
        });
    }
  }, dispatchPointerMoveAction_fn = async function(source, keyState, action) {
    const { x: startX, y: startY, subtype: pointerType } = source;
    const { width, height, pressure, twist, tangentialPressure, x: offsetX, y: offsetY, origin = "viewport", duration = __privateGet(this, _tickDuration) } = action;
    const { tiltX, tiltY } = getTilt(action);
    const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
    const { targetX, targetY } = await __privateMethod(this, _ActionDispatcher_instances, getCoordinateFromOrigin_fn).call(this, origin, offsetX, offsetY, startX, startY);
    if (targetX < 0 || targetY < 0) {
      throw new protocol_js_1.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
    }
    let last;
    do {
      const ratio = duration > 0 ? (performance.now() - __privateGet(this, _tickStart)) / duration : 1;
      last = ratio >= 1;
      let x;
      let y;
      if (last) {
        x = targetX;
        y = targetY;
      } else {
        x = Math.round(ratio * (targetX - startX) + startX);
        y = Math.round(ratio * (targetY - startY) + startY);
      }
      if (source.x !== x || source.y !== y) {
        const { modifiers } = keyState;
        switch (pointerType) {
          case "mouse":
            await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x,
              y,
              modifiers,
              clickCount: 0,
              button: getCdpButton(source.pressed.values().next().value ?? 5),
              buttons: source.buttons,
              pointerType,
              tangentialPressure,
              tiltX,
              tiltY,
              twist,
              force: pressure
            });
            break;
          case "pen":
            if (source.pressed.size !== 0) {
              await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
                type: "mouseMoved",
                x,
                y,
                modifiers,
                clickCount: 0,
                button: getCdpButton(source.pressed.values().next().value ?? 5),
                buttons: source.buttons,
                pointerType,
                tangentialPressure,
                tiltX,
                tiltY,
                twist,
                force: pressure ?? 0.5
              });
            }
            break;
          case "touch":
            if (source.pressed.size !== 0) {
              await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
                type: "touchMove",
                touchPoints: [
                  {
                    x,
                    y,
                    radiusX,
                    radiusY,
                    tangentialPressure,
                    tiltX,
                    tiltY,
                    twist,
                    force: pressure,
                    id: source.pointerId
                  }
                ],
                modifiers
              });
            }
            break;
        }
        source.x = x;
        source.y = y;
        source.radiusX = radiusX;
        source.radiusY = radiusY;
        source.force = pressure;
      }
    } while (!last);
  }, getFrameOffset_fn = async function() {
    if (__privateGet(this, _ActionDispatcher_instances, context_get).id === __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.id) {
      return { x: 0, y: 0 };
    }
    const { backendNodeId } = await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("DOM.getFrameOwner", { frameId: __privateGet(this, _ActionDispatcher_instances, context_get).id });
    const { model: frameBoxModel } = await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("DOM.getBoxModel", {
      backendNodeId
    });
    return { x: frameBoxModel.content[0], y: frameBoxModel.content[1] };
  }, getCoordinateFromOrigin_fn = async function(origin, offsetX, offsetY, startX, startY) {
    let targetX;
    let targetY;
    const frameOffset = await __privateMethod(this, _ActionDispatcher_instances, getFrameOffset_fn).call(this);
    switch (origin) {
      case "viewport":
        targetX = offsetX + frameOffset.x;
        targetY = offsetY + frameOffset.y;
        break;
      case "pointer":
        targetX = startX + offsetX + frameOffset.x;
        targetY = startY + offsetY + frameOffset.y;
        break;
      default: {
        const { x: posX, y: posY } = await getElementCenter(__privateGet(this, _ActionDispatcher_instances, context_get), origin.element);
        targetX = posX + offsetX + frameOffset.x;
        targetY = posY + offsetY + frameOffset.y;
        break;
      }
    }
    return { targetX, targetY };
  }, dispatchScrollAction_fn = async function(_source, keyState, action) {
    const { deltaX: targetDeltaX, deltaY: targetDeltaY, x: offsetX, y: offsetY, origin = "viewport", duration = __privateGet(this, _tickDuration) } = action;
    if (origin === "pointer") {
      throw new protocol_js_1.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
    }
    const { targetX, targetY } = await __privateMethod(this, _ActionDispatcher_instances, getCoordinateFromOrigin_fn).call(this, origin, offsetX, offsetY, 0, 0);
    if (targetX < 0 || targetY < 0) {
      throw new protocol_js_1.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
    }
    let currentDeltaX = 0;
    let currentDeltaY = 0;
    let last;
    do {
      const ratio = duration > 0 ? (performance.now() - __privateGet(this, _tickStart)) / duration : 1;
      last = ratio >= 1;
      let deltaX;
      let deltaY;
      if (last) {
        deltaX = targetDeltaX - currentDeltaX;
        deltaY = targetDeltaY - currentDeltaY;
      } else {
        deltaX = Math.round(ratio * targetDeltaX - currentDeltaX);
        deltaY = Math.round(ratio * targetDeltaY - currentDeltaY);
      }
      if (deltaX !== 0 || deltaY !== 0) {
        const { modifiers } = keyState;
        await __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          deltaX,
          deltaY,
          x: targetX,
          y: targetY,
          modifiers
        });
        currentDeltaX += deltaX;
        currentDeltaY += deltaY;
      }
    } while (!last);
  }, dispatchKeyDownAction_fn = async function(source, action) {
    const rawKey = action.value;
    if (!(0, GraphemeTools_js_1.isSingleGrapheme)(rawKey)) {
      throw new protocol_js_1.InvalidArgumentException(`Invalid key value: ${rawKey}`);
    }
    const isGrapheme = (0, GraphemeTools_js_1.isSingleComplexGrapheme)(rawKey);
    const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
    const repeat = source.pressed.has(key);
    const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
    const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
    switch (key) {
      case "Alt":
        source.alt = true;
        break;
      case "Shift":
        source.shift = true;
        break;
      case "Control":
        source.ctrl = true;
        break;
      case "Meta":
        source.meta = true;
        break;
    }
    source.pressed.add(key);
    const { modifiers } = source;
    const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
    const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
    let command;
    if (__privateGet(this, _isMacOS) && source.meta) {
      switch (code) {
        case "KeyA":
          command = "SelectAll";
          break;
        case "KeyC":
          command = "Copy";
          break;
        case "KeyV":
          command = source.shift ? "PasteAndMatchStyle" : "Paste";
          break;
        case "KeyX":
          command = "Cut";
          break;
        case "KeyZ":
          command = source.shift ? "Redo" : "Undo";
          break;
      }
    }
    const promises = [
      __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
        type: text ? "keyDown" : "rawKeyDown",
        windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
        key,
        code,
        text,
        unmodifiedText,
        autoRepeat: repeat,
        isSystemKey: source.alt || void 0,
        location: location < 3 ? location : void 0,
        isKeypad: location === 3,
        modifiers,
        commands: command ? [command] : void 0
      })
    ];
    if (key === "Escape") {
      if (!source.alt && (__privateGet(this, _isMacOS) && !source.ctrl && !source.meta || !__privateGet(this, _isMacOS))) {
        promises.push(__privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.cancelDragging"));
      }
    }
    await Promise.all(promises);
  }, dispatchKeyUpAction_fn = function(source, action) {
    const rawKey = action.value;
    if (!(0, GraphemeTools_js_1.isSingleGrapheme)(rawKey)) {
      throw new protocol_js_1.InvalidArgumentException(`Invalid key value: ${rawKey}`);
    }
    const isGrapheme = (0, GraphemeTools_js_1.isSingleComplexGrapheme)(rawKey);
    const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
    if (!source.pressed.has(key)) {
      return;
    }
    const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
    const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
    switch (key) {
      case "Alt":
        source.alt = false;
        break;
      case "Shift":
        source.shift = false;
        break;
      case "Control":
        source.ctrl = false;
        break;
      case "Meta":
        source.meta = false;
        break;
    }
    source.pressed.delete(key);
    const { modifiers } = source;
    const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
    const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
    return __privateGet(this, _ActionDispatcher_instances, context_get).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
      type: "keyUp",
      windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
      key,
      code,
      text,
      unmodifiedText,
      location: location < 3 ? location : void 0,
      isSystemKey: source.alt || void 0,
      isKeypad: location === 3,
      modifiers
    });
  }, __publicField(_a2, "isMacOS", async (context) => {
    const result = await (await context.getOrCreateSandbox(void 0)).callFunction(IS_MAC_DECL, false);
    (0, assert_js_1.assert)(result.type !== "exception");
    (0, assert_js_1.assert)(result.result.type === "boolean");
    return result.result.value;
  }), _a2);
  ActionDispatcher.ActionDispatcher = ActionDispatcher$1;
  const getKeyEventUnmodifiedText = (key, source, isGrapheme) => {
    if (isGrapheme) {
      return key;
    }
    if (key === "Enter") {
      return "\r";
    }
    return [...key].length === 1 ? source.shift ? key.toLocaleUpperCase("en-US") : key : void 0;
  };
  const getKeyEventText = (code, source) => {
    if (source.ctrl) {
      switch (code) {
        case "Digit2":
          if (source.shift) {
            return "\0";
          }
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
          return "\n";
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
          if (source.shift) {
            return "";
          }
          break;
        case "Minus":
          return "";
      }
      return "";
    }
    if (source.alt) {
      return "";
    }
    return;
  };
  function getCdpButton(button) {
    switch (button) {
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
  function getTilt(action) {
    const altitudeAngle = action.altitudeAngle ?? Math.PI / 2;
    const azimuthAngle = action.azimuthAngle ?? 0;
    let tiltXRadians = 0;
    let tiltYRadians = 0;
    if (altitudeAngle === 0) {
      if (azimuthAngle === 0 || azimuthAngle === 2 * Math.PI) {
        tiltXRadians = Math.PI / 2;
      }
      if (azimuthAngle === Math.PI / 2) {
        tiltYRadians = Math.PI / 2;
      }
      if (azimuthAngle === Math.PI) {
        tiltXRadians = -Math.PI / 2;
      }
      if (azimuthAngle === 3 * Math.PI / 2) {
        tiltYRadians = -Math.PI / 2;
      }
      if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
        tiltXRadians = Math.PI / 2;
        tiltYRadians = Math.PI / 2;
      }
      if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
        tiltXRadians = -Math.PI / 2;
        tiltYRadians = Math.PI / 2;
      }
      if (azimuthAngle > Math.PI && azimuthAngle < 3 * Math.PI / 2) {
        tiltXRadians = -Math.PI / 2;
        tiltYRadians = -Math.PI / 2;
      }
      if (azimuthAngle > 3 * Math.PI / 2 && azimuthAngle < 2 * Math.PI) {
        tiltXRadians = Math.PI / 2;
        tiltYRadians = -Math.PI / 2;
      }
    }
    if (altitudeAngle !== 0) {
      const tanAlt = Math.tan(altitudeAngle);
      tiltXRadians = Math.atan(Math.cos(azimuthAngle) / tanAlt);
      tiltYRadians = Math.atan(Math.sin(azimuthAngle) / tanAlt);
    }
    const factor = 180 / Math.PI;
    return {
      tiltX: Math.round(tiltXRadians * factor),
      tiltY: Math.round(tiltYRadians * factor)
    };
  }
  function getRadii(width, height) {
    return {
      radiusX: width ? width / 2 : 0.5,
      radiusY: height ? height / 2 : 0.5
    };
  }
  return ActionDispatcher;
}
var InputStateManager = {};
var InputState = {};
var Mutex = {};
var hasRequiredMutex;
function requireMutex() {
  var _locked, _acquirers, _Mutex_instances, release_fn, _a2;
  if (hasRequiredMutex) return Mutex;
  hasRequiredMutex = 1;
  Object.defineProperty(Mutex, "__esModule", { value: true });
  Mutex.Mutex = void 0;
  let Mutex$1 = (_a2 = class {
    constructor() {
      __privateAdd(this, _Mutex_instances);
      __privateAdd(this, _locked, false);
      __privateAdd(this, _acquirers, []);
    }
    // This is FIFO.
    acquire() {
      const state = { resolved: false };
      if (__privateGet(this, _locked)) {
        return new Promise((resolve) => {
          __privateGet(this, _acquirers).push(() => resolve(__privateMethod(this, _Mutex_instances, release_fn).bind(this, state)));
        });
      }
      __privateSet(this, _locked, true);
      return Promise.resolve(__privateMethod(this, _Mutex_instances, release_fn).bind(this, state));
    }
    async run(action) {
      const release = await this.acquire();
      try {
        const result = await action();
        return result;
      } finally {
        release();
      }
    }
  }, _locked = new WeakMap(), _acquirers = new WeakMap(), _Mutex_instances = new WeakSet(), release_fn = function(state) {
    if (state.resolved) {
      throw new Error("Cannot release more than once.");
    }
    state.resolved = true;
    const resolve = __privateGet(this, _acquirers).shift();
    if (!resolve) {
      __privateSet(this, _locked, false);
      return;
    }
    resolve();
  }, _a2);
  Mutex.Mutex = Mutex$1;
  return Mutex;
}
var hasRequiredInputState;
function requireInputState() {
  var _sources, _mutex, _a2;
  if (hasRequiredInputState) return InputState;
  hasRequiredInputState = 1;
  Object.defineProperty(InputState, "__esModule", { value: true });
  InputState.InputState = void 0;
  const protocol_js_1 = requireProtocol();
  const Mutex_js_1 = requireMutex();
  const InputSource_js_1 = requireInputSource();
  let InputState$1 = (_a2 = class {
    constructor() {
      __publicField(this, "cancelList", []);
      __privateAdd(this, _sources, /* @__PURE__ */ new Map());
      __privateAdd(this, _mutex, new Mutex_js_1.Mutex());
    }
    getOrCreate(id, type, subtype) {
      let source = __privateGet(this, _sources).get(id);
      if (!source) {
        switch (type) {
          case "none":
            source = new InputSource_js_1.NoneSource();
            break;
          case "key":
            source = new InputSource_js_1.KeySource();
            break;
          case "pointer": {
            let pointerId = subtype === "mouse" ? 0 : 2;
            const pointerIds = /* @__PURE__ */ new Set();
            for (const [, source2] of __privateGet(this, _sources)) {
              if (source2.type === "pointer") {
                pointerIds.add(source2.pointerId);
              }
            }
            while (pointerIds.has(pointerId)) {
              ++pointerId;
            }
            source = new InputSource_js_1.PointerSource(pointerId, subtype);
            break;
          }
          case "wheel":
            source = new InputSource_js_1.WheelSource();
            break;
          default:
            throw new protocol_js_1.InvalidArgumentException(`Expected "${"none"}", "${"key"}", "${"pointer"}", or "${"wheel"}". Found unknown source type ${type}.`);
        }
        __privateGet(this, _sources).set(id, source);
        return source;
      }
      if (source.type !== type) {
        throw new protocol_js_1.InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
      }
      return source;
    }
    get(id) {
      const source = __privateGet(this, _sources).get(id);
      if (!source) {
        throw new protocol_js_1.UnknownErrorException(`Internal error.`);
      }
      return source;
    }
    getGlobalKeyState() {
      const state = new InputSource_js_1.KeySource();
      for (const [, source] of __privateGet(this, _sources)) {
        if (source.type !== "key") {
          continue;
        }
        for (const pressed of source.pressed) {
          state.pressed.add(pressed);
        }
        state.alt || (state.alt = source.alt);
        state.ctrl || (state.ctrl = source.ctrl);
        state.meta || (state.meta = source.meta);
        state.shift || (state.shift = source.shift);
      }
      return state;
    }
    get queue() {
      return __privateGet(this, _mutex);
    }
  }, _sources = new WeakMap(), _mutex = new WeakMap(), _a2);
  InputState.InputState = InputState$1;
  return InputState;
}
var hasRequiredInputStateManager;
function requireInputStateManager() {
  if (hasRequiredInputStateManager) return InputStateManager;
  hasRequiredInputStateManager = 1;
  Object.defineProperty(InputStateManager, "__esModule", { value: true });
  InputStateManager.InputStateManager = void 0;
  const assert_js_1 = requireAssert();
  const InputState_js_1 = requireInputState();
  let InputStateManager$1 = class InputStateManager extends WeakMap {
    get(context) {
      (0, assert_js_1.assert)(context.isTopLevelContext());
      if (!this.has(context)) {
        this.set(context, new InputState_js_1.InputState());
      }
      return super.get(context);
    }
  };
  InputStateManager.InputStateManager = InputStateManager$1;
  return InputStateManager;
}
var hasRequiredInputProcessor;
function requireInputProcessor() {
  var _browsingContextStorage, _inputStateManager, _InputProcessor_instances, getActionsByTick_fn, _a2;
  if (hasRequiredInputProcessor) return InputProcessor;
  hasRequiredInputProcessor = 1;
  Object.defineProperty(InputProcessor, "__esModule", { value: true });
  InputProcessor.InputProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  const assert_js_1 = requireAssert();
  const ActionDispatcher_js_1 = requireActionDispatcher();
  const InputStateManager_js_1 = requireInputStateManager();
  let InputProcessor$1 = (_a2 = class {
    constructor(browsingContextStorage) {
      __privateAdd(this, _InputProcessor_instances);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _inputStateManager, new InputStateManager_js_1.InputStateManager());
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
    }
    async performActions(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      const inputState = __privateGet(this, _inputStateManager).get(context.top);
      const actionsByTick = __privateMethod(this, _InputProcessor_instances, getActionsByTick_fn).call(this, params, inputState);
      const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, __privateGet(this, _browsingContextStorage), params.context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
      await dispatcher.dispatchActions(actionsByTick);
      return {};
    }
    async releaseActions(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      const topContext = context.top;
      const inputState = __privateGet(this, _inputStateManager).get(topContext);
      const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, __privateGet(this, _browsingContextStorage), params.context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
      await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
      __privateGet(this, _inputStateManager).delete(topContext);
      return {};
    }
    async setFiles(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      const realm = await context.getOrCreateSandbox(void 0);
      let result;
      try {
        result = await realm.callFunction(String(function getFiles(fileListLength) {
          if (!(this instanceof HTMLInputElement)) {
            if (this instanceof Element) {
              return 1;
            }
            return 0;
          }
          if (this.type !== "file") {
            return 2;
          }
          if (this.disabled) {
            return 3;
          }
          if (fileListLength > 1 && !this.multiple) {
            return 4;
          }
          return;
        }), false, params.element, [{ type: "number", value: params.files.length }]);
      } catch {
        throw new protocol_js_1.NoSuchNodeException(`Could not find element ${params.element.sharedId}`);
      }
      (0, assert_js_1.assert)(result.type === "success");
      if (result.result.type === "number") {
        switch (result.result.value) {
          case 0: {
            throw new protocol_js_1.NoSuchElementException(`Could not find element ${params.element.sharedId}`);
          }
          case 1: {
            throw new protocol_js_1.UnableToSetFileInputException(`Element ${params.element.sharedId} is not a input`);
          }
          case 2: {
            throw new protocol_js_1.UnableToSetFileInputException(`Input element ${params.element.sharedId} is not a file type`);
          }
          case 3: {
            throw new protocol_js_1.UnableToSetFileInputException(`Input element ${params.element.sharedId} is disabled`);
          }
          case 4: {
            throw new protocol_js_1.UnableToSetFileInputException(`Cannot set multiple files on a non-multiple input element`);
          }
        }
      }
      if (params.files.length === 0) {
        await realm.callFunction(String(function dispatchEvent() {
          var _a3;
          if (((_a3 = this.files) == null ? void 0 : _a3.length) === 0) {
            this.dispatchEvent(new Event("cancel", {
              bubbles: true
            }));
            return;
          }
          this.files = new DataTransfer().files;
          this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true }));
        }), false, params.element);
        return {};
      }
      const paths = [];
      for (let i = 0; i < params.files.length; ++i) {
        const result2 = await realm.callFunction(
          String(function getFiles(index) {
            var _a3;
            return (_a3 = this.files) == null ? void 0 : _a3.item(index);
          }),
          false,
          params.element,
          [{ type: "number", value: 0 }],
          "root"
          /* Script.ResultOwnership.Root */
        );
        (0, assert_js_1.assert)(result2.type === "success");
        if (result2.result.type !== "object") {
          break;
        }
        const { handle } = result2.result;
        (0, assert_js_1.assert)(handle !== void 0);
        const { path } = await realm.cdpClient.sendCommand("DOM.getFileInfo", {
          objectId: handle
        });
        paths.push(path);
        void realm.disown(handle).catch(void 0);
      }
      paths.sort();
      const sortedFiles = [...params.files].sort();
      if (paths.length !== params.files.length || sortedFiles.some((path, index) => {
        return paths[index] !== path;
      })) {
        const { objectId } = await realm.deserializeForCdp(params.element);
        (0, assert_js_1.assert)(objectId !== void 0);
        await realm.cdpClient.sendCommand("DOM.setFileInputFiles", {
          files: params.files,
          objectId
        });
      } else {
        await realm.callFunction(String(function dispatchEvent() {
          this.dispatchEvent(new Event("cancel", {
            bubbles: true
          }));
        }), false, params.element);
      }
      return {};
    }
  }, _browsingContextStorage = new WeakMap(), _inputStateManager = new WeakMap(), _InputProcessor_instances = new WeakSet(), getActionsByTick_fn = function(params, inputState) {
    var _a3;
    const actionsByTick = [];
    for (const action of params.actions) {
      switch (action.type) {
        case "pointer": {
          action.parameters ?? (action.parameters = {
            pointerType: "mouse"
            /* Input.PointerType.Mouse */
          });
          (_a3 = action.parameters).pointerType ?? (_a3.pointerType = "mouse");
          const source = inputState.getOrCreate(action.id, "pointer", action.parameters.pointerType);
          if (source.subtype !== action.parameters.pointerType) {
            throw new protocol_js_1.InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
          }
          break;
        }
        default:
          inputState.getOrCreate(action.id, action.type);
      }
      const actions = action.actions.map((item) => ({
        id: action.id,
        action: item
      }));
      for (let i = 0; i < actions.length; i++) {
        if (actionsByTick.length === i) {
          actionsByTick.push([]);
        }
        actionsByTick[i].push(actions[i]);
      }
    }
    return actionsByTick;
  }, _a2);
  InputProcessor.InputProcessor = InputProcessor$1;
  return InputProcessor;
}
var NetworkProcessor = {};
var NetworkUtils = {};
var Base64 = {};
var hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return Base64;
  hasRequiredBase64 = 1;
  Object.defineProperty(Base64, "__esModule", { value: true });
  Base64.base64ToString = base64ToString;
  function base64ToString(base64Str) {
    if ("atob" in globalThis) {
      return globalThis.atob(base64Str);
    }
    return Buffer.from(base64Str, "base64").toString("ascii");
  }
  return Base64;
}
var hasRequiredNetworkUtils;
function requireNetworkUtils() {
  if (hasRequiredNetworkUtils) return NetworkUtils;
  hasRequiredNetworkUtils = 1;
  Object.defineProperty(NetworkUtils, "__esModule", { value: true });
  NetworkUtils.computeHeadersSize = computeHeadersSize;
  NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeaders = bidiNetworkHeadersFromCdpNetworkHeaders;
  NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeadersEntries = bidiNetworkHeadersFromCdpNetworkHeadersEntries;
  NetworkUtils.cdpNetworkHeadersFromBidiNetworkHeaders = cdpNetworkHeadersFromBidiNetworkHeaders;
  NetworkUtils.bidiNetworkHeadersFromCdpFetchHeaders = bidiNetworkHeadersFromCdpFetchHeaders;
  NetworkUtils.cdpFetchHeadersFromBidiNetworkHeaders = cdpFetchHeadersFromBidiNetworkHeaders;
  NetworkUtils.networkHeaderFromCookieHeaders = networkHeaderFromCookieHeaders;
  NetworkUtils.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction;
  NetworkUtils.cdpToBiDiCookie = cdpToBiDiCookie;
  NetworkUtils.deserializeByteValue = deserializeByteValue;
  NetworkUtils.bidiToCdpCookie = bidiToCdpCookie;
  NetworkUtils.sameSiteBiDiToCdp = sameSiteBiDiToCdp;
  NetworkUtils.isSpecialScheme = isSpecialScheme;
  NetworkUtils.matchUrlPattern = matchUrlPattern;
  NetworkUtils.bidiBodySizeFromCdpPostDataEntries = bidiBodySizeFromCdpPostDataEntries;
  NetworkUtils.getTiming = getTiming;
  const ErrorResponse_js_1 = requireErrorResponse();
  const Base64_js_1 = requireBase64();
  function computeHeadersSize(headers) {
    const requestHeaders = headers.reduce((acc, header) => {
      return `${acc}${header.name}: ${header.value.value}\r
`;
    }, "");
    return new TextEncoder().encode(requestHeaders).length;
  }
  function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
    if (!headers) {
      return [];
    }
    return Object.entries(headers).map(([name, value]) => ({
      name,
      value: {
        type: "string",
        value
      }
    }));
  }
  function bidiNetworkHeadersFromCdpNetworkHeadersEntries(headers) {
    if (!headers) {
      return [];
    }
    return headers.map(({ name, value }) => ({
      name,
      value: {
        type: "string",
        value
      }
    }));
  }
  function cdpNetworkHeadersFromBidiNetworkHeaders(headers) {
    if (headers === void 0) {
      return void 0;
    }
    return headers.reduce((result, header) => {
      result[header.name] = header.value.value;
      return result;
    }, {});
  }
  function bidiNetworkHeadersFromCdpFetchHeaders(headers) {
    if (!headers) {
      return [];
    }
    return headers.map(({ name, value }) => ({
      name,
      value: {
        type: "string",
        value
      }
    }));
  }
  function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
    if (headers === void 0) {
      return void 0;
    }
    return headers.map(({ name, value }) => ({
      name,
      value: value.value
    }));
  }
  function networkHeaderFromCookieHeaders(headers) {
    if (headers === void 0) {
      return void 0;
    }
    const value = headers.reduce((acc, value2, index) => {
      if (index > 0) {
        acc += ";";
      }
      const cookieValue = value2.value.type === "base64" ? btoa(value2.value.value) : value2.value.value;
      acc += `${value2.name}=${cookieValue}`;
      return acc;
    }, "");
    return {
      name: "Cookie",
      value: {
        type: "string",
        value
      }
    };
  }
  function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
    switch (action) {
      case "default":
        return "Default";
      case "cancel":
        return "CancelAuth";
      case "provideCredentials":
        return "ProvideCredentials";
    }
  }
  function cdpToBiDiCookie(cookie) {
    const result = {
      name: cookie.name,
      value: { type: "string", value: cookie.value },
      domain: cookie.domain,
      path: cookie.path,
      size: cookie.size,
      httpOnly: cookie.httpOnly,
      secure: cookie.secure,
      sameSite: cookie.sameSite === void 0 ? "none" : sameSiteCdpToBiDi(cookie.sameSite),
      ...cookie.expires >= 0 ? { expiry: cookie.expires } : void 0
    };
    result[`goog:session`] = cookie.session;
    result[`goog:priority`] = cookie.priority;
    result[`goog:sameParty`] = cookie.sameParty;
    result[`goog:sourceScheme`] = cookie.sourceScheme;
    result[`goog:sourcePort`] = cookie.sourcePort;
    if (cookie.partitionKey !== void 0) {
      result[`goog:partitionKey`] = cookie.partitionKey;
    }
    if (cookie.partitionKeyOpaque !== void 0) {
      result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
    }
    return result;
  }
  function deserializeByteValue(value) {
    if (value.type === "base64") {
      return (0, Base64_js_1.base64ToString)(value.value);
    }
    return value.value;
  }
  function bidiToCdpCookie(params, partitionKey) {
    const deserializedValue = deserializeByteValue(params.cookie.value);
    const result = {
      name: params.cookie.name,
      value: deserializedValue,
      domain: params.cookie.domain,
      path: params.cookie.path ?? "/",
      secure: params.cookie.secure ?? false,
      httpOnly: params.cookie.httpOnly ?? false,
      ...partitionKey.sourceOrigin !== void 0 && {
        partitionKey: {
          hasCrossSiteAncestor: false,
          // CDP's `partitionKey.topLevelSite` is the BiDi's `partition.sourceOrigin`.
          topLevelSite: partitionKey.sourceOrigin
        }
      },
      ...params.cookie.expiry !== void 0 && {
        expires: params.cookie.expiry
      },
      ...params.cookie.sameSite !== void 0 && {
        sameSite: sameSiteBiDiToCdp(params.cookie.sameSite)
      }
    };
    if (params.cookie[`goog:url`] !== void 0) {
      result.url = params.cookie[`goog:url`];
    }
    if (params.cookie[`goog:priority`] !== void 0) {
      result.priority = params.cookie[`goog:priority`];
    }
    if (params.cookie[`goog:sameParty`] !== void 0) {
      result.sameParty = params.cookie[`goog:sameParty`];
    }
    if (params.cookie[`goog:sourceScheme`] !== void 0) {
      result.sourceScheme = params.cookie[`goog:sourceScheme`];
    }
    if (params.cookie[`goog:sourcePort`] !== void 0) {
      result.sourcePort = params.cookie[`goog:sourcePort`];
    }
    return result;
  }
  function sameSiteCdpToBiDi(sameSite) {
    switch (sameSite) {
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
  function sameSiteBiDiToCdp(sameSite) {
    switch (sameSite) {
      case "strict":
        return "Strict";
      case "lax":
        return "Lax";
      case "none":
        return "None";
    }
    throw new ErrorResponse_js_1.InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
  }
  function isSpecialScheme(protocol2) {
    return ["ftp", "file", "http", "https", "ws", "wss"].includes(protocol2.replace(/:$/, ""));
  }
  function getScheme(url) {
    return url.protocol.replace(/:$/, "");
  }
  function matchUrlPattern(pattern, url) {
    const parsedUrl = new URL(url);
    if (pattern.protocol !== void 0 && pattern.protocol !== getScheme(parsedUrl)) {
      return false;
    }
    if (pattern.hostname !== void 0 && pattern.hostname !== parsedUrl.hostname) {
      return false;
    }
    if (pattern.port !== void 0 && pattern.port !== parsedUrl.port) {
      return false;
    }
    if (pattern.pathname !== void 0 && pattern.pathname !== parsedUrl.pathname) {
      return false;
    }
    if (pattern.search !== void 0 && pattern.search !== parsedUrl.search) {
      return false;
    }
    return true;
  }
  function bidiBodySizeFromCdpPostDataEntries(entries) {
    let size = 0;
    for (const entry of entries) {
      size += atob(entry.bytes ?? "").length;
    }
    return size;
  }
  function getTiming(timing, offset = 0) {
    if (!timing) {
      return 0;
    }
    if (timing <= 0 || timing + offset <= 0) {
      return 0;
    }
    return timing + offset;
  }
  return NetworkUtils;
}
var hasRequiredNetworkProcessor;
function requireNetworkProcessor() {
  var _browsingContextStorage, _networkStorage, _NetworkProcessor_instances, getRequestOrFail_fn, getBlockedRequestOrFail_fn, _a2;
  if (hasRequiredNetworkProcessor) return NetworkProcessor;
  hasRequiredNetworkProcessor = 1;
  Object.defineProperty(NetworkProcessor, "__esModule", { value: true });
  NetworkProcessor.NetworkProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  const NetworkUtils_js_1 = requireNetworkUtils();
  let NetworkProcessor$1 = (_a2 = class {
    constructor(browsingContextStorage, networkStorage) {
      __privateAdd(this, _NetworkProcessor_instances);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _networkStorage);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _networkStorage, networkStorage);
    }
    async addIntercept(params) {
      __privateGet(this, _browsingContextStorage).verifyTopLevelContextsList(params.contexts);
      const urlPatterns = params.urlPatterns ?? [];
      const parsedUrlPatterns = _a2.parseUrlPatterns(urlPatterns);
      const intercept = __privateGet(this, _networkStorage).addIntercept({
        urlPatterns: parsedUrlPatterns,
        phases: params.phases,
        contexts: params.contexts
      });
      await Promise.all(__privateGet(this, _browsingContextStorage).getAllContexts().map((context) => {
        return context.cdpTarget.toggleNetwork();
      }));
      return {
        intercept
      };
    }
    async continueRequest(params) {
      if (params.url !== void 0) {
        _a2.parseUrlString(params.url);
      }
      if (params.method !== void 0) {
        if (!_a2.isMethodValid(params.method)) {
          throw new protocol_js_1.InvalidArgumentException(`Method '${params.method}' is invalid.`);
        }
      }
      if (params.headers) {
        _a2.validateHeaders(params.headers);
      }
      const request = __privateMethod(this, _NetworkProcessor_instances, getBlockedRequestOrFail_fn).call(this, params.request, [
        "beforeRequestSent"
      ]);
      try {
        await request.continueRequest(params);
      } catch (error) {
        throw _a2.wrapInterceptionError(error);
      }
      return {};
    }
    async continueResponse(params) {
      if (params.headers) {
        _a2.validateHeaders(params.headers);
      }
      const request = __privateMethod(this, _NetworkProcessor_instances, getBlockedRequestOrFail_fn).call(this, params.request, [
        "authRequired",
        "responseStarted"
      ]);
      try {
        await request.continueResponse(params);
      } catch (error) {
        throw _a2.wrapInterceptionError(error);
      }
      return {};
    }
    async continueWithAuth(params) {
      const networkId = params.request;
      const request = __privateMethod(this, _NetworkProcessor_instances, getBlockedRequestOrFail_fn).call(this, networkId, [
        "authRequired"
      ]);
      await request.continueWithAuth(params);
      return {};
    }
    async failRequest({ request: networkId }) {
      const request = __privateMethod(this, _NetworkProcessor_instances, getRequestOrFail_fn).call(this, networkId);
      if (request.interceptPhase === "authRequired") {
        throw new protocol_js_1.InvalidArgumentException(`Request '${networkId}' in 'authRequired' phase cannot be failed`);
      }
      if (!request.interceptPhase) {
        throw new protocol_js_1.NoSuchRequestException(`No blocked request found for network id '${networkId}'`);
      }
      await request.failRequest("Failed");
      return {};
    }
    async provideResponse(params) {
      if (params.headers) {
        _a2.validateHeaders(params.headers);
      }
      const request = __privateMethod(this, _NetworkProcessor_instances, getBlockedRequestOrFail_fn).call(this, params.request, [
        "beforeRequestSent",
        "responseStarted",
        "authRequired"
      ]);
      try {
        await request.provideResponse(params);
      } catch (error) {
        throw _a2.wrapInterceptionError(error);
      }
      return {};
    }
    async removeIntercept(params) {
      __privateGet(this, _networkStorage).removeIntercept(params.intercept);
      await Promise.all(__privateGet(this, _browsingContextStorage).getAllContexts().map((context) => {
        return context.cdpTarget.toggleNetwork();
      }));
      return {};
    }
    async setCacheBehavior(params) {
      const contexts = __privateGet(this, _browsingContextStorage).verifyTopLevelContextsList(params.contexts);
      if (contexts.size === 0) {
        __privateGet(this, _networkStorage).defaultCacheBehavior = params.cacheBehavior;
        await Promise.all(__privateGet(this, _browsingContextStorage).getAllContexts().map((context) => {
          return context.cdpTarget.toggleSetCacheDisabled();
        }));
        return {};
      }
      const cacheDisabled = params.cacheBehavior === "bypass";
      await Promise.all([...contexts.values()].map((context) => {
        return context.cdpTarget.toggleSetCacheDisabled(cacheDisabled);
      }));
      return {};
    }
    /**
     * Validate https://fetch.spec.whatwg.org/#header-value
     */
    static validateHeaders(headers) {
      for (const header of headers) {
        let headerValue;
        if (header.value.type === "string") {
          headerValue = header.value.value;
        } else {
          headerValue = atob(header.value.value);
        }
        if (headerValue !== headerValue.trim() || headerValue.includes("\n") || headerValue.includes("\0")) {
          throw new protocol_js_1.InvalidArgumentException(`Header value '${headerValue}' is not acceptable value`);
        }
      }
    }
    static isMethodValid(method) {
      return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(method);
    }
    /**
     * Attempts to parse the given url.
     * Throws an InvalidArgumentException if the url is invalid.
     */
    static parseUrlString(url) {
      try {
        return new URL(url);
      } catch (error) {
        throw new protocol_js_1.InvalidArgumentException(`Invalid URL '${url}': ${error}`);
      }
    }
    static parseUrlPatterns(urlPatterns) {
      return urlPatterns.map((urlPattern) => {
        let patternUrl = "";
        let hasProtocol = true;
        let hasHostname = true;
        let hasPort = true;
        let hasPathname = true;
        let hasSearch = true;
        switch (urlPattern.type) {
          case "string": {
            patternUrl = unescapeURLPattern(urlPattern.pattern);
            break;
          }
          case "pattern": {
            if (urlPattern.protocol === void 0) {
              hasProtocol = false;
              patternUrl += "http";
            } else {
              if (urlPattern.protocol === "") {
                throw new protocol_js_1.InvalidArgumentException("URL pattern must specify a protocol");
              }
              urlPattern.protocol = unescapeURLPattern(urlPattern.protocol);
              if (!urlPattern.protocol.match(/^[a-zA-Z+-.]+$/)) {
                throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
              }
              patternUrl += urlPattern.protocol;
            }
            const scheme = patternUrl.toLocaleLowerCase();
            patternUrl += ":";
            if ((0, NetworkUtils_js_1.isSpecialScheme)(scheme)) {
              patternUrl += "//";
            }
            if (urlPattern.hostname === void 0) {
              if (scheme !== "file") {
                patternUrl += "placeholder";
              }
              hasHostname = false;
            } else {
              if (urlPattern.hostname === "") {
                throw new protocol_js_1.InvalidArgumentException("URL pattern must specify a hostname");
              }
              if (urlPattern.protocol === "file") {
                throw new protocol_js_1.InvalidArgumentException(`URL pattern protocol cannot be 'file'`);
              }
              urlPattern.hostname = unescapeURLPattern(urlPattern.hostname);
              let insideBrackets = false;
              for (const c of urlPattern.hostname) {
                if (c === "/" || c === "?" || c === "#") {
                  throw new protocol_js_1.InvalidArgumentException(`'/', '?', '#' are forbidden in hostname`);
                }
                if (!insideBrackets && c === ":") {
                  throw new protocol_js_1.InvalidArgumentException(`':' is only allowed inside brackets in hostname`);
                }
                if (c === "[") {
                  insideBrackets = true;
                }
                if (c === "]") {
                  insideBrackets = false;
                }
              }
              patternUrl += urlPattern.hostname;
            }
            if (urlPattern.port === void 0) {
              hasPort = false;
            } else {
              if (urlPattern.port === "") {
                throw new protocol_js_1.InvalidArgumentException(`URL pattern must specify a port`);
              }
              urlPattern.port = unescapeURLPattern(urlPattern.port);
              patternUrl += ":";
              if (!urlPattern.port.match(/^\d+$/)) {
                throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
              }
              patternUrl += urlPattern.port;
            }
            if (urlPattern.pathname === void 0) {
              hasPathname = false;
            } else {
              urlPattern.pathname = unescapeURLPattern(urlPattern.pathname);
              if (urlPattern.pathname[0] !== "/") {
                patternUrl += "/";
              }
              if (urlPattern.pathname.includes("#") || urlPattern.pathname.includes("?")) {
                throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
              }
              patternUrl += urlPattern.pathname;
            }
            if (urlPattern.search === void 0) {
              hasSearch = false;
            } else {
              urlPattern.search = unescapeURLPattern(urlPattern.search);
              if (urlPattern.search[0] !== "?") {
                patternUrl += "?";
              }
              if (urlPattern.search.includes("#")) {
                throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
              }
              patternUrl += urlPattern.search;
            }
            break;
          }
        }
        const serializePort = (url) => {
          const defaultPorts = {
            "ftp:": 21,
            "file:": null,
            "http:": 80,
            "https:": 443,
            "ws:": 80,
            "wss:": 443
          };
          if ((0, NetworkUtils_js_1.isSpecialScheme)(url.protocol) && defaultPorts[url.protocol] !== null && (!url.port || String(defaultPorts[url.protocol]) === url.port)) {
            return "";
          } else if (url.port) {
            return url.port;
          }
          return void 0;
        };
        try {
          const url = new URL(patternUrl);
          return {
            protocol: hasProtocol ? url.protocol.replace(/:$/, "") : void 0,
            hostname: hasHostname ? url.hostname : void 0,
            port: hasPort ? serializePort(url) : void 0,
            pathname: hasPathname && url.pathname ? url.pathname : void 0,
            search: hasSearch ? url.search : void 0
          };
        } catch (err) {
          throw new protocol_js_1.InvalidArgumentException(`${err.message} '${patternUrl}'`);
        }
      });
    }
    static wrapInterceptionError(error) {
      if (error == null ? void 0 : error.message.includes("Invalid header")) {
        return new protocol_js_1.InvalidArgumentException("Invalid header");
      }
      return error;
    }
  }, _browsingContextStorage = new WeakMap(), _networkStorage = new WeakMap(), _NetworkProcessor_instances = new WeakSet(), getRequestOrFail_fn = function(id) {
    const request = __privateGet(this, _networkStorage).getRequestById(id);
    if (!request) {
      throw new protocol_js_1.NoSuchRequestException(`Network request with ID '${id}' doesn't exist`);
    }
    return request;
  }, getBlockedRequestOrFail_fn = function(id, phases) {
    const request = __privateMethod(this, _NetworkProcessor_instances, getRequestOrFail_fn).call(this, id);
    if (!request.interceptPhase) {
      throw new protocol_js_1.NoSuchRequestException(`No blocked request found for network id '${id}'`);
    }
    if (request.interceptPhase && !phases.includes(request.interceptPhase)) {
      throw new protocol_js_1.InvalidArgumentException(`Blocked request for network id '${id}' is in '${request.interceptPhase}' phase`);
    }
    return request;
  }, _a2);
  NetworkProcessor.NetworkProcessor = NetworkProcessor$1;
  function unescapeURLPattern(pattern) {
    const forbidden = /* @__PURE__ */ new Set(["(", ")", "*", "{", "}"]);
    let result = "";
    let isEscaped = false;
    for (const c of pattern) {
      if (!isEscaped) {
        if (forbidden.has(c)) {
          throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
        }
        if (c === "\\") {
          isEscaped = true;
          continue;
        }
      }
      result += c;
      isEscaped = false;
    }
    return result;
  }
  return NetworkProcessor;
}
var PermissionsProcessor = {};
var hasRequiredPermissionsProcessor;
function requirePermissionsProcessor() {
  var _browserCdpClient, _a2;
  if (hasRequiredPermissionsProcessor) return PermissionsProcessor;
  hasRequiredPermissionsProcessor = 1;
  Object.defineProperty(PermissionsProcessor, "__esModule", { value: true });
  PermissionsProcessor.PermissionsProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  let PermissionsProcessor$1 = (_a2 = class {
    constructor(browserCdpClient) {
      __privateAdd(this, _browserCdpClient);
      __privateSet(this, _browserCdpClient, browserCdpClient);
    }
    async setPermissions(params) {
      try {
        const userContextId = params["goog:userContext"] || params.userContext;
        await __privateGet(this, _browserCdpClient).sendCommand("Browser.setPermission", {
          origin: params.origin,
          browserContextId: userContextId && userContextId !== "default" ? userContextId : void 0,
          permission: {
            name: params.descriptor.name
          },
          setting: params.state
        });
      } catch (err) {
        if (err.message === `Permission can't be granted to opaque origins.`) {
          return {};
        }
        throw new protocol_js_1.InvalidArgumentException(err.message);
      }
      return {};
    }
  }, _browserCdpClient = new WeakMap(), _a2);
  PermissionsProcessor.PermissionsProcessor = PermissionsProcessor$1;
  return PermissionsProcessor;
}
var ScriptProcessor = {};
var PreloadScript = {};
var uuid = {};
var hasRequiredUuid;
function requireUuid() {
  if (hasRequiredUuid) return uuid;
  hasRequiredUuid = 1;
  Object.defineProperty(uuid, "__esModule", { value: true });
  uuid.uuidv4 = uuidv4;
  function bytesToHex(bytes) {
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
  }
  function uuidv4() {
    if ("crypto" in globalThis && "randomUUID" in globalThis.crypto) {
      return globalThis.crypto.randomUUID();
    }
    const randomValues = new Uint8Array(16);
    if ("crypto" in globalThis && "getRandomValues" in globalThis.crypto) {
      globalThis.crypto.getRandomValues(randomValues);
    } else {
      require$$2.webcrypto.getRandomValues(randomValues);
    }
    randomValues[6] = randomValues[6] & 15 | 64;
    randomValues[8] = randomValues[8] & 63 | 128;
    return [
      bytesToHex(randomValues.subarray(0, 4)),
      bytesToHex(randomValues.subarray(4, 6)),
      bytesToHex(randomValues.subarray(6, 8)),
      bytesToHex(randomValues.subarray(8, 10)),
      bytesToHex(randomValues.subarray(10, 16))
    ].join("-");
  }
  return uuid;
}
var ChannelProxy = {};
var hasRequiredChannelProxy;
function requireChannelProxy() {
  var _properties2, _id, _logger, _ChannelProxy_static, _a2, createChannelProxyEvalStr_fn, createAndGetHandleInRealm_fn, createSendMessageHandle_fn, _ChannelProxy_instances, startListener_fn, getHandleFromWindow_fn;
  if (hasRequiredChannelProxy) return ChannelProxy;
  hasRequiredChannelProxy = 1;
  Object.defineProperty(ChannelProxy, "__esModule", { value: true });
  ChannelProxy.ChannelProxy = void 0;
  const protocol_js_1 = requireProtocol();
  const log_js_1 = requireLog();
  const uuid_js_1 = requireUuid();
  let ChannelProxy$1 = (_a2 = class {
    constructor(channel, logger) {
      __privateAdd(this, _ChannelProxy_instances);
      __privateAdd(this, _properties2);
      __privateAdd(this, _id, (0, uuid_js_1.uuidv4)());
      __privateAdd(this, _logger);
      __privateSet(this, _properties2, channel);
      __privateSet(this, _logger, logger);
    }
    /**
     * Creates a channel proxy in the given realm, initialises listener and
     * returns a handle to `sendMessage` delegate.
     */
    async init(realm, eventManager) {
      var _a3, _b;
      const channelHandle = await __privateMethod(_a3 = _a2, _ChannelProxy_static, createAndGetHandleInRealm_fn).call(_a3, realm);
      const sendMessageHandle = await __privateMethod(_b = _a2, _ChannelProxy_static, createSendMessageHandle_fn).call(_b, realm, channelHandle);
      void __privateMethod(this, _ChannelProxy_instances, startListener_fn).call(this, realm, channelHandle, eventManager);
      return sendMessageHandle;
    }
    /** Gets a ChannelProxy from window and returns its handle. */
    async startListenerFromWindow(realm, eventManager) {
      var _a3;
      try {
        const channelHandle = await __privateMethod(this, _ChannelProxy_instances, getHandleFromWindow_fn).call(this, realm);
        void __privateMethod(this, _ChannelProxy_instances, startListener_fn).call(this, realm, channelHandle, eventManager);
      } catch (error) {
        (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, error);
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
      var _a3;
      const delegate = String((id, channelProxy) => {
        const w = window;
        if (w[id] === void 0) {
          w[id] = channelProxy;
        } else {
          w[id](channelProxy);
          delete w[id];
        }
        return channelProxy.sendMessage;
      });
      const channelProxyEval = __privateMethod(_a3 = _a2, _ChannelProxy_static, createChannelProxyEvalStr_fn).call(_a3);
      return `(${delegate})('${__privateGet(this, _id)}',${channelProxyEval})`;
    }
  }, _properties2 = new WeakMap(), _id = new WeakMap(), _logger = new WeakMap(), _ChannelProxy_static = new WeakSet(), createChannelProxyEvalStr_fn = function() {
    const functionStr = String(() => {
      const queue = [];
      let queueNonEmptyResolver = null;
      return {
        /**
         * Gets a promise, which is resolved as soon as a message occurs
         * in the queue.
         */
        async getMessage() {
          const onMessage = queue.length > 0 ? Promise.resolve() : new Promise((resolve) => {
            queueNonEmptyResolver = resolve;
          });
          await onMessage;
          return queue.shift();
        },
        /**
         * Adds a message to the queue.
         * Resolves the pending promise if needed.
         */
        sendMessage(message) {
          queue.push(message);
          if (queueNonEmptyResolver !== null) {
            queueNonEmptyResolver();
            queueNonEmptyResolver = null;
          }
        }
      };
    });
    return `(${functionStr})()`;
  }, createAndGetHandleInRealm_fn = async function(realm) {
    const createChannelHandleResult = await realm.cdpClient.sendCommand("Runtime.evaluate", {
      expression: __privateMethod(this, _ChannelProxy_static, createChannelProxyEvalStr_fn).call(this),
      contextId: realm.executionContextId,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    if (createChannelHandleResult.exceptionDetails || createChannelHandleResult.result.objectId === void 0) {
      throw new Error(`Cannot create channel`);
    }
    return createChannelHandleResult.result.objectId;
  }, createSendMessageHandle_fn = async function(realm, channelHandle) {
    const sendMessageArgResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((channelHandle2) => {
        return channelHandle2.sendMessage;
      }),
      arguments: [{ objectId: channelHandle }],
      executionContextId: realm.executionContextId,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    return sendMessageArgResult.result.objectId;
  }, _ChannelProxy_instances = new WeakSet(), startListener_fn = async function(realm, channelHandle, eventManager) {
    var _a3, _b;
    for (; ; ) {
      try {
        const message = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String(async (channelHandle2) => await channelHandle2.getMessage()),
          arguments: [
            {
              objectId: channelHandle
            }
          ],
          awaitPromise: true,
          executionContextId: realm.executionContextId,
          serializationOptions: {
            serialization: "deep",
            maxDepth: ((_a3 = __privateGet(this, _properties2).serializationOptions) == null ? void 0 : _a3.maxObjectDepth) ?? void 0
          }
        });
        if (message.exceptionDetails) {
          throw new Error("Runtime.callFunctionOn in ChannelProxy", {
            cause: message.exceptionDetails
          });
        }
        for (const browsingContext of realm.associatedBrowsingContexts) {
          eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.Script.EventNames.Message,
            params: {
              channel: __privateGet(this, _properties2).channel,
              data: realm.cdpToBidiValue(
                message,
                __privateGet(this, _properties2).ownership ?? "none"
                /* Script.ResultOwnership.None */
              ),
              source: realm.source
            }
          }, browsingContext.id);
        }
      } catch (error) {
        (_b = __privateGet(this, _logger)) == null ? void 0 : _b.call(this, log_js_1.LogType.debugError, error);
        break;
      }
    }
  }, getHandleFromWindow_fn = async function(realm) {
    const channelHandleResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((id) => {
        const w = window;
        if (w[id] === void 0) {
          return new Promise((resolve) => w[id] = resolve);
        }
        const channelProxy = w[id];
        delete w[id];
        return channelProxy;
      }),
      arguments: [{ value: __privateGet(this, _id) }],
      executionContextId: realm.executionContextId,
      awaitPromise: true,
      serializationOptions: {
        serialization: "idOnly"
      }
    });
    if (channelHandleResult.exceptionDetails !== void 0 || channelHandleResult.result.objectId === void 0) {
      throw new Error(`ChannelHandle not found in window["${__privateGet(this, _id)}"]`);
    }
    return channelHandleResult.result.objectId;
  }, __privateAdd(_a2, _ChannelProxy_static), _a2);
  ChannelProxy.ChannelProxy = ChannelProxy$1;
  return ChannelProxy;
}
var hasRequiredPreloadScript;
function requirePreloadScript() {
  var _id, _cdpPreloadScripts, _functionDeclaration, _targetIds, _channels, _sandbox, _contexts, _PreloadScript_instances, getEvaluateString_fn, _a2;
  if (hasRequiredPreloadScript) return PreloadScript;
  hasRequiredPreloadScript = 1;
  Object.defineProperty(PreloadScript, "__esModule", { value: true });
  PreloadScript.PreloadScript = void 0;
  const uuid_js_1 = requireUuid();
  const ChannelProxy_js_1 = requireChannelProxy();
  let PreloadScript$1 = (_a2 = class {
    constructor(params, logger) {
      __privateAdd(this, _PreloadScript_instances);
      /** BiDi ID, an automatically generated UUID. */
      __privateAdd(this, _id, (0, uuid_js_1.uuidv4)());
      /** CDP preload scripts. */
      __privateAdd(this, _cdpPreloadScripts, []);
      /** The script itself, in a format expected by the spec i.e. a function. */
      __privateAdd(this, _functionDeclaration);
      /** Targets, in which the preload script is initialized. */
      __privateAdd(this, _targetIds, /* @__PURE__ */ new Set());
      /** Channels to be added as arguments to functionDeclaration. */
      __privateAdd(this, _channels);
      /** The script sandbox / world name. */
      __privateAdd(this, _sandbox);
      /** The browsing contexts to execute the preload scripts in, if any. */
      __privateAdd(this, _contexts);
      var _a3;
      __privateSet(this, _channels, ((_a3 = params.arguments) == null ? void 0 : _a3.map((a) => new ChannelProxy_js_1.ChannelProxy(a.value, logger))) ?? []);
      __privateSet(this, _functionDeclaration, params.functionDeclaration);
      __privateSet(this, _sandbox, params.sandbox);
      __privateSet(this, _contexts, params.contexts);
    }
    get id() {
      return __privateGet(this, _id);
    }
    get targetIds() {
      return __privateGet(this, _targetIds);
    }
    /** Channels of the preload script. */
    get channels() {
      return __privateGet(this, _channels);
    }
    /** Contexts of the preload script, if any */
    get contexts() {
      return __privateGet(this, _contexts);
    }
    /**
     * Adds the script to the given CDP targets by calling the
     * `Page.addScriptToEvaluateOnNewDocument` command.
     */
    async initInTargets(cdpTargets, runImmediately) {
      await Promise.all(Array.from(cdpTargets).map((cdpTarget) => this.initInTarget(cdpTarget, runImmediately)));
    }
    /**
     * Adds the script to the given CDP target by calling the
     * `Page.addScriptToEvaluateOnNewDocument` command.
     */
    async initInTarget(cdpTarget, runImmediately) {
      const addCdpPreloadScriptResult = await cdpTarget.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
        source: __privateMethod(this, _PreloadScript_instances, getEvaluateString_fn).call(this),
        worldName: __privateGet(this, _sandbox),
        runImmediately
      });
      __privateGet(this, _cdpPreloadScripts).push({
        target: cdpTarget,
        preloadScriptId: addCdpPreloadScriptResult.identifier
      });
      __privateGet(this, _targetIds).add(cdpTarget.id);
    }
    /**
     * Removes this script from all CDP targets.
     */
    async remove() {
      await Promise.all([
        __privateGet(this, _cdpPreloadScripts).map(async (cdpPreloadScript) => {
          const cdpTarget = cdpPreloadScript.target;
          const cdpPreloadScriptId = cdpPreloadScript.preloadScriptId;
          return await cdpTarget.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
            identifier: cdpPreloadScriptId
          });
        })
      ]);
    }
    /** Removes the provided cdp target from the list of cdp preload scripts. */
    dispose(cdpTargetId) {
      __privateSet(this, _cdpPreloadScripts, __privateGet(this, _cdpPreloadScripts).filter((cdpPreloadScript) => {
        var _a3;
        return ((_a3 = cdpPreloadScript.target) == null ? void 0 : _a3.id) !== cdpTargetId;
      }));
      __privateGet(this, _targetIds).delete(cdpTargetId);
    }
  }, _id = new WeakMap(), _cdpPreloadScripts = new WeakMap(), _functionDeclaration = new WeakMap(), _targetIds = new WeakMap(), _channels = new WeakMap(), _sandbox = new WeakMap(), _contexts = new WeakMap(), _PreloadScript_instances = new WeakSet(), /**
   * String to be evaluated. Wraps user-provided function so that the following
   * steps are run:
   * 1. Create channels.
   * 2. Store the created channels in window.
   * 3. Call the user-provided function with channels as arguments.
   */
  getEvaluateString_fn = function() {
    const channelsArgStr = `[${this.channels.map((c) => c.getEvalInWindowStr()).join(", ")}]`;
    return `(()=>{(${__privateGet(this, _functionDeclaration)})(...${channelsArgStr})})()`;
  }, _a2);
  PreloadScript.PreloadScript = PreloadScript$1;
  return PreloadScript;
}
var hasRequiredScriptProcessor;
function requireScriptProcessor() {
  var _eventManager, _browsingContextStorage, _realmStorage, _preloadScriptStorage, _logger, _ScriptProcessor_instances, onRealmCreatedSubscribeHook_fn, getRealm_fn2, _a2;
  if (hasRequiredScriptProcessor) return ScriptProcessor;
  hasRequiredScriptProcessor = 1;
  Object.defineProperty(ScriptProcessor, "__esModule", { value: true });
  ScriptProcessor.ScriptProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  const PreloadScript_js_1 = requirePreloadScript();
  let ScriptProcessor$1 = (_a2 = class {
    constructor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, logger) {
      __privateAdd(this, _ScriptProcessor_instances);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _realmStorage);
      __privateAdd(this, _preloadScriptStorage);
      __privateAdd(this, _logger);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _realmStorage, realmStorage);
      __privateSet(this, _preloadScriptStorage, preloadScriptStorage);
      __privateSet(this, _logger, logger);
      __privateSet(this, _eventManager, eventManager);
      __privateGet(this, _eventManager).addSubscribeHook(protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated, __privateMethod(this, _ScriptProcessor_instances, onRealmCreatedSubscribeHook_fn).bind(this));
    }
    async addPreloadScript(params) {
      const contexts = __privateGet(this, _browsingContextStorage).verifyTopLevelContextsList(params.contexts);
      const preloadScript = new PreloadScript_js_1.PreloadScript(params, __privateGet(this, _logger));
      __privateGet(this, _preloadScriptStorage).add(preloadScript);
      const cdpTargets = contexts.size === 0 ? new Set(__privateGet(this, _browsingContextStorage).getTopLevelContexts().map((context) => context.cdpTarget)) : new Set([...contexts.values()].map((context) => context.cdpTarget));
      await preloadScript.initInTargets(cdpTargets, false);
      return {
        script: preloadScript.id
      };
    }
    async removePreloadScript(params) {
      const { script: id } = params;
      const scripts = __privateGet(this, _preloadScriptStorage).find({ id });
      if (scripts.length === 0) {
        throw new protocol_js_1.NoSuchScriptException(`No preload script with id '${id}'`);
      }
      await Promise.all(scripts.map((script) => script.remove()));
      __privateGet(this, _preloadScriptStorage).remove({ id });
      return {};
    }
    async callFunction(params) {
      const realm = await __privateMethod(this, _ScriptProcessor_instances, getRealm_fn2).call(this, params.target);
      return await realm.callFunction(params.functionDeclaration, params.awaitPromise, params.this, params.arguments, params.resultOwnership, params.serializationOptions, params.userActivation);
    }
    async evaluate(params) {
      const realm = await __privateMethod(this, _ScriptProcessor_instances, getRealm_fn2).call(this, params.target);
      return await realm.evaluate(params.expression, params.awaitPromise, params.resultOwnership, params.serializationOptions, params.userActivation);
    }
    async disown(params) {
      const realm = await __privateMethod(this, _ScriptProcessor_instances, getRealm_fn2).call(this, params.target);
      await Promise.all(params.handles.map(async (handle) => await realm.disown(handle)));
      return {};
    }
    getRealms(params) {
      if (params.context !== void 0) {
        __privateGet(this, _browsingContextStorage).getContext(params.context);
      }
      const realms = __privateGet(this, _realmStorage).findRealms({
        browsingContextId: params.context,
        type: params.type
      }).map((realm) => realm.realmInfo);
      return { realms };
    }
  }, _eventManager = new WeakMap(), _browsingContextStorage = new WeakMap(), _realmStorage = new WeakMap(), _preloadScriptStorage = new WeakMap(), _logger = new WeakMap(), _ScriptProcessor_instances = new WeakSet(), onRealmCreatedSubscribeHook_fn = function(contextId) {
    const context = __privateGet(this, _browsingContextStorage).getContext(contextId);
    const contextsToReport = [
      context,
      ...__privateGet(this, _browsingContextStorage).getContext(contextId).allChildren
    ];
    const realms = /* @__PURE__ */ new Set();
    for (const reportContext of contextsToReport) {
      const realmsForContext = __privateGet(this, _realmStorage).findRealms({
        browsingContextId: reportContext.id
      });
      for (const realm of realmsForContext) {
        realms.add(realm);
      }
    }
    for (const realm of realms) {
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated,
        params: realm.realmInfo
      }, context.id);
    }
    return Promise.resolve();
  }, getRealm_fn2 = async function(target) {
    if ("context" in target) {
      const context = __privateGet(this, _browsingContextStorage).getContext(target.context);
      return await context.getOrCreateSandbox(target.sandbox);
    }
    return __privateGet(this, _realmStorage).getRealm({
      realmId: target.realm
    });
  }, _a2);
  ScriptProcessor.ScriptProcessor = ScriptProcessor$1;
  return ScriptProcessor;
}
var SessionProcessor = {};
var hasRequiredSessionProcessor;
function requireSessionProcessor() {
  var _eventManager, _browserCdpClient, _initConnection, _created, _SessionProcessor_instances, mergeCapabilities_fn, getUnhandledPromptBehavior_fn, _a2;
  if (hasRequiredSessionProcessor) return SessionProcessor;
  hasRequiredSessionProcessor = 1;
  Object.defineProperty(SessionProcessor, "__esModule", { value: true });
  SessionProcessor.SessionProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  let SessionProcessor$1 = (_a2 = class {
    constructor(eventManager, browserCdpClient, initConnection) {
      __privateAdd(this, _SessionProcessor_instances);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _browserCdpClient);
      __privateAdd(this, _initConnection);
      __privateAdd(this, _created, false);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _browserCdpClient, browserCdpClient);
      __privateSet(this, _initConnection, initConnection);
    }
    status() {
      return { ready: false, message: "already connected" };
    }
    async new(params) {
      if (__privateGet(this, _created)) {
        throw new Error("Session has been already created.");
      }
      __privateSet(this, _created, true);
      const matchedCapabitlites = __privateMethod(this, _SessionProcessor_instances, mergeCapabilities_fn).call(this, params.capabilities);
      await __privateGet(this, _initConnection).call(this, matchedCapabitlites);
      const version = await __privateGet(this, _browserCdpClient).sendCommand("Browser.getVersion");
      return {
        sessionId: "unknown",
        capabilities: {
          ...matchedCapabitlites,
          acceptInsecureCerts: matchedCapabitlites.acceptInsecureCerts ?? false,
          browserName: version.product,
          browserVersion: version.revision,
          platformName: "",
          setWindowRect: false,
          webSocketUrl: "",
          userAgent: version.userAgent
        }
      };
    }
    async subscribe(params, channel = {}) {
      const subscription = await __privateGet(this, _eventManager).subscribe(params.events, params.contexts ?? [], channel);
      return {
        subscription
      };
    }
    async unsubscribe(params, channel = {}) {
      await __privateGet(this, _eventManager).unsubscribe(params.events, params.contexts ?? [], channel);
      return {};
    }
  }, _eventManager = new WeakMap(), _browserCdpClient = new WeakMap(), _initConnection = new WeakMap(), _created = new WeakMap(), _SessionProcessor_instances = new WeakSet(), mergeCapabilities_fn = function(capabilitiesRequest) {
    const mergedCapabilities = [];
    for (const first2 of capabilitiesRequest.firstMatch ?? [{}]) {
      const result = {
        ...capabilitiesRequest.alwaysMatch
      };
      for (const key of Object.keys(first2)) {
        if (result[key] !== void 0) {
          throw new protocol_js_1.InvalidArgumentException(`Capability ${key} in firstMatch is already defined in alwaysMatch`);
        }
        result[key] = first2[key];
      }
      mergedCapabilities.push(result);
    }
    const match = mergedCapabilities.find((c) => c.browserName === "chrome") ?? mergedCapabilities[0] ?? {};
    match.unhandledPromptBehavior = __privateMethod(this, _SessionProcessor_instances, getUnhandledPromptBehavior_fn).call(this, match.unhandledPromptBehavior);
    return match;
  }, getUnhandledPromptBehavior_fn = function(capabilityValue) {
    if (capabilityValue === void 0) {
      return void 0;
    }
    if (typeof capabilityValue === "object") {
      return capabilityValue;
    }
    if (typeof capabilityValue !== "string") {
      throw new protocol_js_1.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof capabilityValue}`);
    }
    switch (capabilityValue) {
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
        throw new protocol_js_1.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${capabilityValue}`);
    }
  }, _a2);
  SessionProcessor.SessionProcessor = SessionProcessor$1;
  return SessionProcessor;
}
var StorageProcessor = {};
var hasRequiredStorageProcessor;
function requireStorageProcessor() {
  var _browserCdpClient, _browsingContextStorage, _logger, _StorageProcessor_instances, isNoSuchUserContextError_fn, getCdpBrowserContextId_fn, expandStoragePartitionSpecByBrowsingContext_fn, expandStoragePartitionSpecByStorageKey_fn, expandStoragePartitionSpec_fn, matchCookie_fn, _a2;
  if (hasRequiredStorageProcessor) return StorageProcessor;
  hasRequiredStorageProcessor = 1;
  Object.defineProperty(StorageProcessor, "__esModule", { value: true });
  StorageProcessor.StorageProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  const assert_js_1 = requireAssert();
  const log_js_1 = requireLog();
  const NetworkProcessor_js_1 = requireNetworkProcessor();
  const NetworkUtils_js_1 = requireNetworkUtils();
  let StorageProcessor$1 = (_a2 = class {
    constructor(browserCdpClient, browsingContextStorage, logger) {
      __privateAdd(this, _StorageProcessor_instances);
      __privateAdd(this, _browserCdpClient);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _logger);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _browserCdpClient, browserCdpClient);
      __privateSet(this, _logger, logger);
    }
    async deleteCookies(params) {
      const partitionKey = __privateMethod(this, _StorageProcessor_instances, expandStoragePartitionSpec_fn).call(this, params.partition);
      let cdpResponse;
      try {
        cdpResponse = await __privateGet(this, _browserCdpClient).sendCommand("Storage.getCookies", {
          browserContextId: __privateMethod(this, _StorageProcessor_instances, getCdpBrowserContextId_fn).call(this, partitionKey)
        });
      } catch (err) {
        if (__privateMethod(this, _StorageProcessor_instances, isNoSuchUserContextError_fn).call(this, err)) {
          throw new protocol_js_1.NoSuchUserContextException(err.message);
        }
        throw err;
      }
      const cdpCookiesToDelete = cdpResponse.cookies.filter(
        // CDP's partition key is the source origin. If the request specifies the
        // `sourceOrigin` partition key, only cookies with the requested source origin
        // are returned.
        (c) => {
          var _a3;
          return partitionKey.sourceOrigin === void 0 || ((_a3 = c.partitionKey) == null ? void 0 : _a3.topLevelSite) === partitionKey.sourceOrigin;
        }
      ).filter((cdpCookie) => {
        const bidiCookie = (0, NetworkUtils_js_1.cdpToBiDiCookie)(cdpCookie);
        return __privateMethod(this, _StorageProcessor_instances, matchCookie_fn).call(this, bidiCookie, params.filter);
      }).map((cookie) => ({
        ...cookie,
        // Set expiry to pass date to delete the cookie.
        expires: 1
      }));
      await __privateGet(this, _browserCdpClient).sendCommand("Storage.setCookies", {
        cookies: cdpCookiesToDelete,
        browserContextId: __privateMethod(this, _StorageProcessor_instances, getCdpBrowserContextId_fn).call(this, partitionKey)
      });
      return {
        partitionKey
      };
    }
    async getCookies(params) {
      const partitionKey = __privateMethod(this, _StorageProcessor_instances, expandStoragePartitionSpec_fn).call(this, params.partition);
      let cdpResponse;
      try {
        cdpResponse = await __privateGet(this, _browserCdpClient).sendCommand("Storage.getCookies", {
          browserContextId: __privateMethod(this, _StorageProcessor_instances, getCdpBrowserContextId_fn).call(this, partitionKey)
        });
      } catch (err) {
        if (__privateMethod(this, _StorageProcessor_instances, isNoSuchUserContextError_fn).call(this, err)) {
          throw new protocol_js_1.NoSuchUserContextException(err.message);
        }
        throw err;
      }
      const filteredBiDiCookies = cdpResponse.cookies.filter(
        // CDP's partition key is the source origin. If the request specifies the
        // `sourceOrigin` partition key, only cookies with the requested source origin
        // are returned.
        (c) => {
          var _a3;
          return partitionKey.sourceOrigin === void 0 || ((_a3 = c.partitionKey) == null ? void 0 : _a3.topLevelSite) === partitionKey.sourceOrigin;
        }
      ).map((c) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(c)).filter((c) => __privateMethod(this, _StorageProcessor_instances, matchCookie_fn).call(this, c, params.filter));
      return {
        cookies: filteredBiDiCookies,
        partitionKey
      };
    }
    async setCookie(params) {
      var _a3;
      const partitionKey = __privateMethod(this, _StorageProcessor_instances, expandStoragePartitionSpec_fn).call(this, params.partition);
      const cdpCookie = (0, NetworkUtils_js_1.bidiToCdpCookie)(params, partitionKey);
      try {
        await __privateGet(this, _browserCdpClient).sendCommand("Storage.setCookies", {
          cookies: [cdpCookie],
          browserContextId: __privateMethod(this, _StorageProcessor_instances, getCdpBrowserContextId_fn).call(this, partitionKey)
        });
      } catch (err) {
        if (__privateMethod(this, _StorageProcessor_instances, isNoSuchUserContextError_fn).call(this, err)) {
          throw new protocol_js_1.NoSuchUserContextException(err.message);
        }
        (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, err);
        throw new protocol_js_1.UnableToSetCookieException(err.toString());
      }
      return {
        partitionKey
      };
    }
  }, _browserCdpClient = new WeakMap(), _browsingContextStorage = new WeakMap(), _logger = new WeakMap(), _StorageProcessor_instances = new WeakSet(), isNoSuchUserContextError_fn = function(err) {
    var _a3;
    return (_a3 = err.message) == null ? void 0 : _a3.startsWith("Failed to find browser context for id");
  }, getCdpBrowserContextId_fn = function(partitionKey) {
    return partitionKey.userContext === "default" ? void 0 : partitionKey.userContext;
  }, expandStoragePartitionSpecByBrowsingContext_fn = function(descriptor) {
    const browsingContextId = descriptor.context;
    const browsingContext = __privateGet(this, _browsingContextStorage).getContext(browsingContextId);
    return {
      userContext: browsingContext.userContext
    };
  }, expandStoragePartitionSpecByStorageKey_fn = function(descriptor) {
    var _a3;
    const unsupportedPartitionKeys = /* @__PURE__ */ new Map();
    let sourceOrigin = descriptor.sourceOrigin;
    if (sourceOrigin !== void 0) {
      const url = NetworkProcessor_js_1.NetworkProcessor.parseUrlString(sourceOrigin);
      if (url.origin === "null") {
        sourceOrigin = url.origin;
      } else {
        sourceOrigin = `${url.protocol}//${url.hostname}`;
      }
    }
    for (const [key, value] of Object.entries(descriptor)) {
      if (key !== void 0 && value !== void 0 && !["type", "sourceOrigin", "userContext"].includes(key)) {
        unsupportedPartitionKeys.set(key, value);
      }
    }
    if (unsupportedPartitionKeys.size > 0) {
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(unsupportedPartitionKeys))}`);
    }
    const userContext = descriptor.userContext ?? "default";
    return {
      userContext,
      ...sourceOrigin === void 0 ? {} : { sourceOrigin }
    };
  }, expandStoragePartitionSpec_fn = function(partitionSpec) {
    if (partitionSpec === void 0) {
      return { userContext: "default" };
    }
    if (partitionSpec.type === "context") {
      return __privateMethod(this, _StorageProcessor_instances, expandStoragePartitionSpecByBrowsingContext_fn).call(this, partitionSpec);
    }
    (0, assert_js_1.assert)(partitionSpec.type === "storageKey", "Unknown partition type");
    return __privateMethod(this, _StorageProcessor_instances, expandStoragePartitionSpecByStorageKey_fn).call(this, partitionSpec);
  }, matchCookie_fn = function(cookie, filter2) {
    if (filter2 === void 0) {
      return true;
    }
    return (filter2.domain === void 0 || filter2.domain === cookie.domain) && (filter2.name === void 0 || filter2.name === cookie.name) && // `value` contains fields `type` and `value`.
    (filter2.value === void 0 || (0, NetworkUtils_js_1.deserializeByteValue)(filter2.value) === (0, NetworkUtils_js_1.deserializeByteValue)(cookie.value)) && (filter2.path === void 0 || filter2.path === cookie.path) && (filter2.size === void 0 || filter2.size === cookie.size) && (filter2.httpOnly === void 0 || filter2.httpOnly === cookie.httpOnly) && (filter2.secure === void 0 || filter2.secure === cookie.secure) && (filter2.sameSite === void 0 || filter2.sameSite === cookie.sameSite) && (filter2.expiry === void 0 || filter2.expiry === cookie.expiry);
  }, _a2);
  StorageProcessor.StorageProcessor = StorageProcessor$1;
  return StorageProcessor;
}
var OutgoingMessage = {};
var hasRequiredOutgoingMessage;
function requireOutgoingMessage() {
  var _message, _channel2, _a2;
  if (hasRequiredOutgoingMessage) return OutgoingMessage;
  hasRequiredOutgoingMessage = 1;
  Object.defineProperty(OutgoingMessage, "__esModule", { value: true });
  OutgoingMessage.OutgoingMessage = void 0;
  let OutgoingMessage$1 = (_a2 = class {
    constructor(message, channel) {
      __privateAdd(this, _message);
      __privateAdd(this, _channel2);
      __privateSet(this, _message, message);
      __privateSet(this, _channel2, channel);
    }
    static createFromPromise(messagePromise, channel) {
      return messagePromise.then((message) => {
        if (message.kind === "success") {
          return {
            kind: "success",
            value: new _a2(message.value, channel)
          };
        }
        return message;
      });
    }
    static createResolved(message, channel) {
      return Promise.resolve({
        kind: "success",
        value: new _a2(message, channel)
      });
    }
    get message() {
      return __privateGet(this, _message);
    }
    get channel() {
      return __privateGet(this, _channel2);
    }
  }, _message = new WeakMap(), _channel2 = new WeakMap(), _a2);
  OutgoingMessage.OutgoingMessage = OutgoingMessage$1;
  return OutgoingMessage;
}
var hasRequiredCommandProcessor;
function requireCommandProcessor() {
  var _bluetoothProcessor, _browserProcessor, _browsingContextProcessor, _cdpProcessor, _inputProcessor, _networkProcessor, _permissionsProcessor, _scriptProcessor, _sessionProcessor, _storageProcessor, _parser, _logger, _CommandProcessor_instances, processCommand_fn, processTargetParams_fn, _a2;
  if (hasRequiredCommandProcessor) return CommandProcessor;
  hasRequiredCommandProcessor = 1;
  Object.defineProperty(CommandProcessor, "__esModule", { value: true });
  CommandProcessor.CommandProcessor = void 0;
  const protocol_js_1 = requireProtocol();
  const EventEmitter_js_1 = requireEventEmitter();
  const log_js_1 = requireLog();
  const BidiNoOpParser_js_1 = requireBidiNoOpParser();
  const BrowserProcessor_js_1 = requireBrowserProcessor();
  const CdpProcessor_js_1 = requireCdpProcessor();
  const BrowsingContextProcessor_js_1 = requireBrowsingContextProcessor();
  const InputProcessor_js_1 = requireInputProcessor();
  const NetworkProcessor_js_1 = requireNetworkProcessor();
  const PermissionsProcessor_js_1 = requirePermissionsProcessor();
  const ScriptProcessor_js_1 = requireScriptProcessor();
  const SessionProcessor_js_1 = requireSessionProcessor();
  const StorageProcessor_js_1 = requireStorageProcessor();
  const OutgoingMessage_js_1 = requireOutgoingMessage();
  let CommandProcessor$1 = (_a2 = class extends EventEmitter_js_1.EventEmitter {
    constructor(cdpConnection, browserCdpClient, eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, networkStorage, bluetoothProcessor, parser = new BidiNoOpParser_js_1.BidiNoOpParser(), initConnection, logger) {
      super();
      __privateAdd(this, _CommandProcessor_instances);
      // keep-sorted start
      __privateAdd(this, _bluetoothProcessor);
      __privateAdd(this, _browserProcessor);
      __privateAdd(this, _browsingContextProcessor);
      __privateAdd(this, _cdpProcessor);
      __privateAdd(this, _inputProcessor);
      __privateAdd(this, _networkProcessor);
      __privateAdd(this, _permissionsProcessor);
      __privateAdd(this, _scriptProcessor);
      __privateAdd(this, _sessionProcessor);
      __privateAdd(this, _storageProcessor);
      // keep-sorted end
      __privateAdd(this, _parser);
      __privateAdd(this, _logger);
      __privateSet(this, _parser, parser);
      __privateSet(this, _logger, logger);
      __privateSet(this, _bluetoothProcessor, bluetoothProcessor);
      __privateSet(this, _browserProcessor, new BrowserProcessor_js_1.BrowserProcessor(browserCdpClient, browsingContextStorage));
      __privateSet(this, _browsingContextProcessor, new BrowsingContextProcessor_js_1.BrowsingContextProcessor(browserCdpClient, browsingContextStorage, eventManager));
      __privateSet(this, _cdpProcessor, new CdpProcessor_js_1.CdpProcessor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient));
      __privateSet(this, _inputProcessor, new InputProcessor_js_1.InputProcessor(browsingContextStorage));
      __privateSet(this, _networkProcessor, new NetworkProcessor_js_1.NetworkProcessor(browsingContextStorage, networkStorage));
      __privateSet(this, _permissionsProcessor, new PermissionsProcessor_js_1.PermissionsProcessor(browserCdpClient));
      __privateSet(this, _scriptProcessor, new ScriptProcessor_js_1.ScriptProcessor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, logger));
      __privateSet(this, _sessionProcessor, new SessionProcessor_js_1.SessionProcessor(eventManager, browserCdpClient, initConnection));
      __privateSet(this, _storageProcessor, new StorageProcessor_js_1.StorageProcessor(browserCdpClient, browsingContextStorage, logger));
    }
    async processCommand(command) {
      var _a3;
      try {
        const result = await __privateMethod(this, _CommandProcessor_instances, processCommand_fn).call(this, command);
        const response = {
          type: "success",
          id: command.id,
          result
        };
        this.emit("response", {
          message: OutgoingMessage_js_1.OutgoingMessage.createResolved(response, command.channel),
          event: command.method
        });
      } catch (e) {
        if (e instanceof protocol_js_1.Exception) {
          this.emit("response", {
            message: OutgoingMessage_js_1.OutgoingMessage.createResolved(e.toErrorResponse(command.id), command.channel),
            event: command.method
          });
        } else {
          const error = e;
          (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.bidi, error);
          this.emit("response", {
            message: OutgoingMessage_js_1.OutgoingMessage.createResolved(new protocol_js_1.UnknownErrorException(error.message, error.stack).toErrorResponse(command.id), command.channel),
            event: command.method
          });
        }
      }
    }
  }, _bluetoothProcessor = new WeakMap(), _browserProcessor = new WeakMap(), _browsingContextProcessor = new WeakMap(), _cdpProcessor = new WeakMap(), _inputProcessor = new WeakMap(), _networkProcessor = new WeakMap(), _permissionsProcessor = new WeakMap(), _scriptProcessor = new WeakMap(), _sessionProcessor = new WeakMap(), _storageProcessor = new WeakMap(), _parser = new WeakMap(), _logger = new WeakMap(), _CommandProcessor_instances = new WeakSet(), processCommand_fn = async function(command) {
    switch (command.method) {
      // Bluetooth module
      // keep-sorted start block=yes
      case "bluetooth.handleRequestDevicePrompt":
        return await __privateGet(this, _bluetoothProcessor).handleRequestDevicePrompt(__privateGet(this, _parser).parseHandleRequestDevicePromptParams(command.params));
      case "bluetooth.simulateAdapter":
        return await __privateGet(this, _bluetoothProcessor).simulateAdapter(__privateGet(this, _parser).parseSimulateAdapterParameters(command.params));
      case "bluetooth.simulateAdvertisement":
        return await __privateGet(this, _bluetoothProcessor).simulateAdvertisement(__privateGet(this, _parser).parseSimulateAdvertisementParameters(command.params));
      case "bluetooth.simulatePreconnectedPeripheral":
        return await __privateGet(this, _bluetoothProcessor).simulatePreconnectedPeripheral(__privateGet(this, _parser).parseSimulatePreconnectedPeripheralParameters(command.params));
      // keep-sorted end
      // Browser module
      // keep-sorted start block=yes
      case "browser.close":
        return __privateGet(this, _browserProcessor).close();
      case "browser.createUserContext":
        return await __privateGet(this, _browserProcessor).createUserContext(command.params);
      case "browser.getClientWindows":
        return await __privateGet(this, _browserProcessor).getClientWindows();
      case "browser.getUserContexts":
        return await __privateGet(this, _browserProcessor).getUserContexts();
      case "browser.removeUserContext":
        return await __privateGet(this, _browserProcessor).removeUserContext(__privateGet(this, _parser).parseRemoveUserContextParams(command.params));
      case "browser.setClientWindowState":
        throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
      // keep-sorted end
      // Browsing Context module
      // keep-sorted start block=yes
      case "browsingContext.activate":
        return await __privateGet(this, _browsingContextProcessor).activate(__privateGet(this, _parser).parseActivateParams(command.params));
      case "browsingContext.captureScreenshot":
        return await __privateGet(this, _browsingContextProcessor).captureScreenshot(__privateGet(this, _parser).parseCaptureScreenshotParams(command.params));
      case "browsingContext.close":
        return await __privateGet(this, _browsingContextProcessor).close(__privateGet(this, _parser).parseCloseParams(command.params));
      case "browsingContext.create":
        return await __privateGet(this, _browsingContextProcessor).create(__privateGet(this, _parser).parseCreateParams(command.params));
      case "browsingContext.getTree":
        return __privateGet(this, _browsingContextProcessor).getTree(__privateGet(this, _parser).parseGetTreeParams(command.params));
      case "browsingContext.handleUserPrompt":
        return await __privateGet(this, _browsingContextProcessor).handleUserPrompt(__privateGet(this, _parser).parseHandleUserPromptParams(command.params));
      case "browsingContext.locateNodes":
        return await __privateGet(this, _browsingContextProcessor).locateNodes(__privateGet(this, _parser).parseLocateNodesParams(command.params));
      case "browsingContext.navigate":
        return await __privateGet(this, _browsingContextProcessor).navigate(__privateGet(this, _parser).parseNavigateParams(command.params));
      case "browsingContext.print":
        return await __privateGet(this, _browsingContextProcessor).print(__privateGet(this, _parser).parsePrintParams(command.params));
      case "browsingContext.reload":
        return await __privateGet(this, _browsingContextProcessor).reload(__privateGet(this, _parser).parseReloadParams(command.params));
      case "browsingContext.setViewport":
        return await __privateGet(this, _browsingContextProcessor).setViewport(__privateGet(this, _parser).parseSetViewportParams(command.params));
      case "browsingContext.traverseHistory":
        return await __privateGet(this, _browsingContextProcessor).traverseHistory(__privateGet(this, _parser).parseTraverseHistoryParams(command.params));
      // keep-sorted end
      // CDP module
      // keep-sorted start block=yes
      case "goog:cdp.getSession":
        return __privateGet(this, _cdpProcessor).getSession(__privateGet(this, _parser).parseGetSessionParams(command.params));
      case "goog:cdp.resolveRealm":
        return __privateGet(this, _cdpProcessor).resolveRealm(__privateGet(this, _parser).parseResolveRealmParams(command.params));
      case "goog:cdp.sendCommand":
        return await __privateGet(this, _cdpProcessor).sendCommand(__privateGet(this, _parser).parseSendCommandParams(command.params));
      // keep-sorted end
      // CDP deprecated domain.
      // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2844
      // keep-sorted start block=yes
      case "cdp.getSession":
        return __privateGet(this, _cdpProcessor).getSession(__privateGet(this, _parser).parseGetSessionParams(command.params));
      case "cdp.resolveRealm":
        return __privateGet(this, _cdpProcessor).resolveRealm(__privateGet(this, _parser).parseResolveRealmParams(command.params));
      case "cdp.sendCommand":
        return await __privateGet(this, _cdpProcessor).sendCommand(__privateGet(this, _parser).parseSendCommandParams(command.params));
      // keep-sorted end
      // Input module
      // keep-sorted start block=yes
      case "input.performActions":
        return await __privateGet(this, _inputProcessor).performActions(__privateGet(this, _parser).parsePerformActionsParams(command.params));
      case "input.releaseActions":
        return await __privateGet(this, _inputProcessor).releaseActions(__privateGet(this, _parser).parseReleaseActionsParams(command.params));
      case "input.setFiles":
        return await __privateGet(this, _inputProcessor).setFiles(__privateGet(this, _parser).parseSetFilesParams(command.params));
      // keep-sorted end
      // Network module
      // keep-sorted start block=yes
      case "network.addIntercept":
        return await __privateGet(this, _networkProcessor).addIntercept(__privateGet(this, _parser).parseAddInterceptParams(command.params));
      case "network.continueRequest":
        return await __privateGet(this, _networkProcessor).continueRequest(__privateGet(this, _parser).parseContinueRequestParams(command.params));
      case "network.continueResponse":
        return await __privateGet(this, _networkProcessor).continueResponse(__privateGet(this, _parser).parseContinueResponseParams(command.params));
      case "network.continueWithAuth":
        return await __privateGet(this, _networkProcessor).continueWithAuth(__privateGet(this, _parser).parseContinueWithAuthParams(command.params));
      case "network.failRequest":
        return await __privateGet(this, _networkProcessor).failRequest(__privateGet(this, _parser).parseFailRequestParams(command.params));
      case "network.provideResponse":
        return await __privateGet(this, _networkProcessor).provideResponse(__privateGet(this, _parser).parseProvideResponseParams(command.params));
      case "network.removeIntercept":
        return await __privateGet(this, _networkProcessor).removeIntercept(__privateGet(this, _parser).parseRemoveInterceptParams(command.params));
      case "network.setCacheBehavior":
        return await __privateGet(this, _networkProcessor).setCacheBehavior(__privateGet(this, _parser).parseSetCacheBehavior(command.params));
      // keep-sorted end
      // Permissions module
      // keep-sorted start block=yes
      case "permissions.setPermission":
        return await __privateGet(this, _permissionsProcessor).setPermissions(__privateGet(this, _parser).parseSetPermissionsParams(command.params));
      // keep-sorted end
      // Script module
      // keep-sorted start block=yes
      case "script.addPreloadScript":
        return await __privateGet(this, _scriptProcessor).addPreloadScript(__privateGet(this, _parser).parseAddPreloadScriptParams(command.params));
      case "script.callFunction":
        return await __privateGet(this, _scriptProcessor).callFunction(__privateGet(this, _parser).parseCallFunctionParams(__privateMethod(this, _CommandProcessor_instances, processTargetParams_fn).call(this, command.params)));
      case "script.disown":
        return await __privateGet(this, _scriptProcessor).disown(__privateGet(this, _parser).parseDisownParams(__privateMethod(this, _CommandProcessor_instances, processTargetParams_fn).call(this, command.params)));
      case "script.evaluate":
        return await __privateGet(this, _scriptProcessor).evaluate(__privateGet(this, _parser).parseEvaluateParams(__privateMethod(this, _CommandProcessor_instances, processTargetParams_fn).call(this, command.params)));
      case "script.getRealms":
        return __privateGet(this, _scriptProcessor).getRealms(__privateGet(this, _parser).parseGetRealmsParams(command.params));
      case "script.removePreloadScript":
        return await __privateGet(this, _scriptProcessor).removePreloadScript(__privateGet(this, _parser).parseRemovePreloadScriptParams(command.params));
      // keep-sorted end
      // Session module
      // keep-sorted start block=yes
      case "session.end":
        throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
      case "session.new":
        return await __privateGet(this, _sessionProcessor).new(command.params);
      case "session.status":
        return __privateGet(this, _sessionProcessor).status();
      case "session.subscribe":
        return await __privateGet(this, _sessionProcessor).subscribe(__privateGet(this, _parser).parseSubscribeParams(command.params), command.channel);
      case "session.unsubscribe":
        return await __privateGet(this, _sessionProcessor).unsubscribe(__privateGet(this, _parser).parseSubscribeParams(command.params), command.channel);
      // keep-sorted end
      // Storage module
      // keep-sorted start block=yes
      case "storage.deleteCookies":
        return await __privateGet(this, _storageProcessor).deleteCookies(__privateGet(this, _parser).parseDeleteCookiesParams(command.params));
      case "storage.getCookies":
        return await __privateGet(this, _storageProcessor).getCookies(__privateGet(this, _parser).parseGetCookiesParams(command.params));
      case "storage.setCookie":
        return await __privateGet(this, _storageProcessor).setCookie(__privateGet(this, _parser).parseSetCookieParams(command.params));
      // keep-sorted end
      // WebExtension module
      // keep-sorted start block=yes
      case "webExtension.install":
        throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
      case "webExtension.uninstall":
        throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
    }
    throw new protocol_js_1.UnknownCommandException(`Unknown command '${command == null ? void 0 : command.method}'.`);
  }, // Workaround for as zod.union always take the first schema
  // https://github.com/w3c/webdriver-bidi/issues/635
  processTargetParams_fn = function(params) {
    if (typeof params === "object" && params && "target" in params && typeof params.target === "object" && params.target && "context" in params.target) {
      delete params.target["realm"];
    }
    return params;
  }, _a2);
  CommandProcessor.CommandProcessor = CommandProcessor$1;
  return CommandProcessor;
}
var BluetoothProcessor = {};
var hasRequiredBluetoothProcessor;
function requireBluetoothProcessor() {
  var _eventManager, _browsingContextStorage, _a2;
  if (hasRequiredBluetoothProcessor) return BluetoothProcessor;
  hasRequiredBluetoothProcessor = 1;
  Object.defineProperty(BluetoothProcessor, "__esModule", { value: true });
  BluetoothProcessor.BluetoothProcessor = void 0;
  let BluetoothProcessor$1 = (_a2 = class {
    constructor(eventManager, browsingContextStorage) {
      __privateAdd(this, _eventManager);
      __privateAdd(this, _browsingContextStorage);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
    }
    async simulateAdapter(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable");
      await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.enable", {
        state: params.state
      });
      return {};
    }
    async simulatePreconnectedPeripheral(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulatePreconnectedPeripheral", {
        address: params.address,
        name: params.name,
        knownServiceUuids: params.knownServiceUuids,
        manufacturerData: params.manufacturerData
      });
      return {};
    }
    async simulateAdvertisement(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateAdvertisement", {
        entry: params.scanEntry
      });
      return {};
    }
    onCdpTargetCreated(cdpTarget) {
      cdpTarget.cdpClient.on("DeviceAccess.deviceRequestPrompted", (event) => {
        __privateGet(this, _eventManager).registerEvent({
          type: "event",
          method: "bluetooth.requestDevicePromptUpdated",
          params: {
            context: cdpTarget.id,
            prompt: event.id,
            devices: event.devices
          }
        }, cdpTarget.id);
      });
    }
    async handleRequestDevicePrompt(params) {
      const context = __privateGet(this, _browsingContextStorage).getContext(params.context);
      if (params.accept) {
        await context.cdpTarget.cdpClient.sendCommand("DeviceAccess.selectPrompt", {
          id: params.prompt,
          deviceId: params.device
        });
      } else {
        await context.cdpTarget.cdpClient.sendCommand("DeviceAccess.cancelPrompt", {
          id: params.prompt
        });
      }
      return {};
    }
  }, _eventManager = new WeakMap(), _browsingContextStorage = new WeakMap(), _a2);
  BluetoothProcessor.BluetoothProcessor = BluetoothProcessor$1;
  return BluetoothProcessor;
}
var CdpTargetManager = {};
var BrowsingContextImpl = {};
var Deferred = {};
var hasRequiredDeferred;
function requireDeferred() {
  var _a2, _isFinished, _promise, _result, _resolve, _reject, _b;
  if (hasRequiredDeferred) return Deferred;
  hasRequiredDeferred = 1;
  Object.defineProperty(Deferred, "__esModule", { value: true });
  Deferred.Deferred = void 0;
  let Deferred$12 = (_a2 = Symbol.toStringTag, _b = class {
    constructor() {
      __privateAdd(this, _isFinished, false);
      __privateAdd(this, _promise);
      __privateAdd(this, _result);
      __privateAdd(this, _resolve);
      __privateAdd(this, _reject);
      __publicField(this, _a2, "Promise");
      __privateSet(this, _promise, new Promise((resolve, reject) => {
        __privateSet(this, _resolve, resolve);
        __privateSet(this, _reject, reject);
      }));
      __privateGet(this, _promise).catch((_error) => {
      });
    }
    get isFinished() {
      return __privateGet(this, _isFinished);
    }
    get result() {
      if (!__privateGet(this, _isFinished)) {
        throw new Error("Deferred is not finished yet");
      }
      return __privateGet(this, _result);
    }
    then(onFulfilled, onRejected) {
      return __privateGet(this, _promise).then(onFulfilled, onRejected);
    }
    catch(onRejected) {
      return __privateGet(this, _promise).catch(onRejected);
    }
    resolve(value) {
      __privateSet(this, _result, value);
      if (!__privateGet(this, _isFinished)) {
        __privateSet(this, _isFinished, true);
        __privateGet(this, _resolve).call(this, value);
      }
    }
    reject(reason) {
      if (!__privateGet(this, _isFinished)) {
        __privateSet(this, _isFinished, true);
        __privateGet(this, _reject).call(this, reason);
      }
    }
    finally(onFinally) {
      return __privateGet(this, _promise).finally(onFinally);
    }
  }, _isFinished = new WeakMap(), _promise = new WeakMap(), _result = new WeakMap(), _resolve = new WeakMap(), _reject = new WeakMap(), _b);
  Deferred.Deferred = Deferred$12;
  return Deferred;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime) return time;
  hasRequiredTime = 1;
  Object.defineProperty(time, "__esModule", { value: true });
  time.getTimestamp = getTimestamp;
  function getTimestamp() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  return time;
}
var unitConversions = {};
var hasRequiredUnitConversions;
function requireUnitConversions() {
  if (hasRequiredUnitConversions) return unitConversions;
  hasRequiredUnitConversions = 1;
  Object.defineProperty(unitConversions, "__esModule", { value: true });
  unitConversions.inchesFromCm = inchesFromCm;
  function inchesFromCm(cm) {
    return cm / 2.54;
  }
  return unitConversions;
}
var WindowRealm$1 = {};
var Realm$1 = {};
var hasRequiredRealm;
function requireRealm() {
  var _cdpClient, _eventManager, _executionContextId, _logger, _origin, _realmId, _realmStorage, _Realm_instances, registerEvent_fn, _Realm_static, cdpRemoteObjectToCallArgument_fn, flattenKeyValuePairs_fn, flattenValueList_fn, serializeCdpExceptionDetails_fn, getExceptionResult_fn, getSerializationOptions_fn, getAdditionalSerializationParameters_fn, getMaxObjectDepth_fn, releaseObject_fn;
  if (hasRequiredRealm) return Realm$1;
  hasRequiredRealm = 1;
  Object.defineProperty(Realm$1, "__esModule", { value: true });
  Realm$1.Realm = void 0;
  const protocol_js_1 = requireProtocol();
  const log_js_1 = requireLog();
  const uuid_js_1 = requireUuid();
  const ChannelProxy_js_1 = requireChannelProxy();
  const _Realm = class _Realm {
    constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
      __privateAdd(this, _Realm_instances);
      __privateAdd(this, _cdpClient);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _executionContextId);
      __privateAdd(this, _logger);
      __privateAdd(this, _origin);
      __privateAdd(this, _realmId);
      __privateAdd(this, _realmStorage);
      __privateSet(this, _cdpClient, cdpClient);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _executionContextId, executionContextId);
      __privateSet(this, _logger, logger);
      __privateSet(this, _origin, origin);
      __privateSet(this, _realmId, realmId);
      __privateSet(this, _realmStorage, realmStorage);
      __privateGet(this, _realmStorage).addRealm(this);
    }
    cdpToBidiValue(cdpValue, resultOwnership) {
      const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, /* @__PURE__ */ new Map());
      if (cdpValue.result.objectId) {
        const objectId = cdpValue.result.objectId;
        if (resultOwnership === "root") {
          bidiValue.handle = objectId;
          __privateGet(this, _realmStorage).knownHandlesToRealmMap.set(objectId, this.realmId);
        } else {
          void __privateMethod(this, _Realm_instances, releaseObject_fn).call(this, objectId).catch((error) => {
            var _a2;
            return (_a2 = __privateGet(this, _logger)) == null ? void 0 : _a2.call(this, log_js_1.LogType.debugError, error);
          });
        }
      }
      return bidiValue;
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
    serializeForBiDi(deepSerializedValue, internalIdMap) {
      if (Object.hasOwn(deepSerializedValue, "weakLocalObjectReference")) {
        const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
        if (!internalIdMap.has(weakLocalObjectReference)) {
          internalIdMap.set(weakLocalObjectReference, (0, uuid_js_1.uuidv4)());
        }
        deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
        delete deepSerializedValue["weakLocalObjectReference"];
      }
      if (deepSerializedValue.type === "node" && deepSerializedValue.value && Object.hasOwn(deepSerializedValue.value, "frameId")) {
        delete deepSerializedValue.value["frameId"];
      }
      if (deepSerializedValue.type === "platformobject") {
        return { type: "object" };
      }
      const bidiValue = deepSerializedValue.value;
      if (bidiValue === void 0) {
        return deepSerializedValue;
      }
      if (["array", "set", "htmlcollection", "nodelist"].includes(deepSerializedValue.type)) {
        for (const i in bidiValue) {
          bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
        }
      }
      if (["object", "map"].includes(deepSerializedValue.type)) {
        for (const i in bidiValue) {
          bidiValue[i] = [
            this.serializeForBiDi(bidiValue[i][0], internalIdMap),
            this.serializeForBiDi(bidiValue[i][1], internalIdMap)
          ];
        }
      }
      return deepSerializedValue;
    }
    get realmId() {
      return __privateGet(this, _realmId);
    }
    get executionContextId() {
      return __privateGet(this, _executionContextId);
    }
    get origin() {
      return __privateGet(this, _origin);
    }
    get source() {
      return {
        realm: this.realmId
      };
    }
    get cdpClient() {
      return __privateGet(this, _cdpClient);
    }
    get baseInfo() {
      return {
        realm: this.realmId,
        origin: this.origin
      };
    }
    async evaluate(expression, awaitPromise, resultOwnership = "none", serializationOptions = {}, userActivation = false, includeCommandLineApi = false) {
      var _a2;
      const cdpEvaluateResult = await this.cdpClient.sendCommand("Runtime.evaluate", {
        contextId: this.executionContextId,
        expression,
        awaitPromise,
        serializationOptions: __privateMethod(_a2 = _Realm, _Realm_static, getSerializationOptions_fn).call(_a2, "deep", serializationOptions),
        userGesture: userActivation,
        includeCommandLineAPI: includeCommandLineApi
      });
      if (cdpEvaluateResult.exceptionDetails) {
        return await __privateMethod(this, _Realm_instances, getExceptionResult_fn).call(this, cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
      }
      return {
        realm: this.realmId,
        result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
        type: "success"
      };
    }
    initialize() {
      __privateMethod(this, _Realm_instances, registerEvent_fn).call(this, {
        type: "event",
        method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated,
        params: this.realmInfo
      });
    }
    /**
     * Serializes a given CDP object into BiDi, keeping references in the
     * target's `globalThis`.
     */
    async serializeCdpObject(cdpRemoteObject, resultOwnership) {
      var _a2;
      const argument = __privateMethod(_a2 = _Realm, _Realm_static, cdpRemoteObjectToCallArgument_fn).call(_a2, cdpRemoteObject);
      const cdpValue = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String((remoteObject) => remoteObject),
        awaitPromise: false,
        arguments: [argument],
        serializationOptions: {
          serialization: "deep"
        },
        executionContextId: this.executionContextId
      });
      return this.cdpToBidiValue(cdpValue, resultOwnership);
    }
    /**
     * Gets the string representation of an object. This is equivalent to
     * calling `toString()` on the object value.
     */
    async stringifyObject(cdpRemoteObject) {
      const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String(
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          (remoteObject) => String(remoteObject)
        ),
        awaitPromise: false,
        arguments: [cdpRemoteObject],
        returnByValue: true,
        executionContextId: this.executionContextId
      });
      return result.value;
    }
    async callFunction(functionDeclaration, awaitPromise, thisLocalValue = {
      type: "undefined"
    }, argumentsLocalValues = [], resultOwnership = "none", serializationOptions = {}, userActivation = false) {
      var _a2;
      const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
      const thisAndArgumentsList = [
        await this.deserializeForCdp(thisLocalValue),
        ...await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))
      ];
      let cdpCallFunctionResult;
      try {
        cdpCallFunctionResult = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: callFunctionAndSerializeScript,
          awaitPromise,
          arguments: thisAndArgumentsList,
          serializationOptions: __privateMethod(_a2 = _Realm, _Realm_static, getSerializationOptions_fn).call(_a2, "deep", serializationOptions),
          executionContextId: this.executionContextId,
          userGesture: userActivation
        });
      } catch (error) {
        if (error.code === -32e3 && [
          "Could not find object with given id",
          "Argument should belong to the same JavaScript world as target object",
          "Invalid remote object id"
        ].includes(error.message)) {
          throw new protocol_js_1.NoSuchHandleException("Handle was not found.");
        }
        throw error;
      }
      if (cdpCallFunctionResult.exceptionDetails) {
        return await __privateMethod(this, _Realm_instances, getExceptionResult_fn).call(this, cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
      }
      return {
        type: "success",
        result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
        realm: this.realmId
      };
    }
    async deserializeForCdp(localValue) {
      if ("handle" in localValue && localValue.handle) {
        return { objectId: localValue.handle };
      } else if ("handle" in localValue || "sharedId" in localValue) {
        throw new protocol_js_1.NoSuchHandleException("Handle was not found.");
      }
      switch (localValue.type) {
        case "undefined":
          return { unserializableValue: "undefined" };
        case "null":
          return { unserializableValue: "null" };
        case "string":
          return { value: localValue.value };
        case "number":
          if (localValue.value === "NaN") {
            return { unserializableValue: "NaN" };
          } else if (localValue.value === "-0") {
            return { unserializableValue: "-0" };
          } else if (localValue.value === "Infinity") {
            return { unserializableValue: "Infinity" };
          } else if (localValue.value === "-Infinity") {
            return { unserializableValue: "-Infinity" };
          }
          return {
            value: localValue.value
          };
        case "boolean":
          return { value: Boolean(localValue.value) };
        case "bigint":
          return {
            unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`
          };
        case "date":
          return {
            unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`
          };
        case "regexp":
          return {
            unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`
          };
        case "map": {
          const keyValueArray = await __privateMethod(this, _Realm_instances, flattenKeyValuePairs_fn).call(this, localValue.value);
          const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...args) => {
              const result2 = /* @__PURE__ */ new Map();
              for (let i = 0; i < args.length; i += 2) {
                result2.set(args[i], args[i + 1]);
              }
              return result2;
            }),
            awaitPromise: false,
            arguments: keyValueArray,
            returnByValue: false,
            executionContextId: this.executionContextId
          });
          return { objectId: result.objectId };
        }
        case "object": {
          const keyValueArray = await __privateMethod(this, _Realm_instances, flattenKeyValuePairs_fn).call(this, localValue.value);
          const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...args) => {
              const result2 = {};
              for (let i = 0; i < args.length; i += 2) {
                const key = args[i];
                result2[key] = args[i + 1];
              }
              return result2;
            }),
            awaitPromise: false,
            arguments: keyValueArray,
            returnByValue: false,
            executionContextId: this.executionContextId
          });
          return { objectId: result.objectId };
        }
        case "array": {
          const args = await __privateMethod(this, _Realm_instances, flattenValueList_fn).call(this, localValue.value);
          const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...args2) => args2),
            awaitPromise: false,
            arguments: args,
            returnByValue: false,
            executionContextId: this.executionContextId
          });
          return { objectId: result.objectId };
        }
        case "set": {
          const args = await __privateMethod(this, _Realm_instances, flattenValueList_fn).call(this, localValue.value);
          const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String((...args2) => new Set(args2)),
            awaitPromise: false,
            arguments: args,
            returnByValue: false,
            executionContextId: this.executionContextId
          });
          return { objectId: result.objectId };
        }
        case "channel": {
          const channelProxy = new ChannelProxy_js_1.ChannelProxy(localValue.value, __privateGet(this, _logger));
          const channelProxySendMessageHandle = await channelProxy.init(this, __privateGet(this, _eventManager));
          return { objectId: channelProxySendMessageHandle };
        }
      }
      throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
    }
    async disown(handle) {
      if (__privateGet(this, _realmStorage).knownHandlesToRealmMap.get(handle) !== this.realmId) {
        return;
      }
      await __privateMethod(this, _Realm_instances, releaseObject_fn).call(this, handle);
      __privateGet(this, _realmStorage).knownHandlesToRealmMap.delete(handle);
    }
    dispose() {
      __privateMethod(this, _Realm_instances, registerEvent_fn).call(this, {
        type: "event",
        method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmDestroyed,
        params: {
          realm: this.realmId
        }
      });
    }
  };
  _cdpClient = new WeakMap();
  _eventManager = new WeakMap();
  _executionContextId = new WeakMap();
  _logger = new WeakMap();
  _origin = new WeakMap();
  _realmId = new WeakMap();
  _realmStorage = new WeakMap();
  _Realm_instances = new WeakSet();
  registerEvent_fn = function(event) {
    if (this.associatedBrowsingContexts.length === 0) {
      __privateGet(this, _eventManager).registerGlobalEvent(event);
    } else {
      for (const browsingContext of this.associatedBrowsingContexts) {
        __privateGet(this, _eventManager).registerEvent(event, browsingContext.id);
      }
    }
  };
  _Realm_static = new WeakSet();
  cdpRemoteObjectToCallArgument_fn = function(cdpRemoteObject) {
    if (cdpRemoteObject.objectId !== void 0) {
      return { objectId: cdpRemoteObject.objectId };
    }
    if (cdpRemoteObject.unserializableValue !== void 0) {
      return { unserializableValue: cdpRemoteObject.unserializableValue };
    }
    return { value: cdpRemoteObject.value };
  };
  flattenKeyValuePairs_fn = async function(mappingLocalValue) {
    const keyValueArray = await Promise.all(mappingLocalValue.map(async ([key, value]) => {
      let keyArg;
      if (typeof key === "string") {
        keyArg = { value: key };
      } else {
        keyArg = await this.deserializeForCdp(key);
      }
      const valueArg = await this.deserializeForCdp(value);
      return [keyArg, valueArg];
    }));
    return keyValueArray.flat();
  };
  flattenValueList_fn = async function(listLocalValue) {
    return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
  };
  serializeCdpExceptionDetails_fn = async function(cdpExceptionDetails, lineOffset, resultOwnership) {
    var _a2;
    const callFrames = ((_a2 = cdpExceptionDetails.stackTrace) == null ? void 0 : _a2.callFrames.map((frame) => ({
      url: frame.url,
      functionName: frame.functionName,
      lineNumber: frame.lineNumber - lineOffset,
      columnNumber: frame.columnNumber
    }))) ?? [];
    const exception = cdpExceptionDetails.exception;
    return {
      exception: await this.serializeCdpObject(exception, resultOwnership),
      columnNumber: cdpExceptionDetails.columnNumber,
      lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
      stackTrace: {
        callFrames
      },
      text: await this.stringifyObject(exception) || cdpExceptionDetails.text
    };
  };
  getExceptionResult_fn = async function(exceptionDetails, lineOffset, resultOwnership) {
    return {
      exceptionDetails: await __privateMethod(this, _Realm_instances, serializeCdpExceptionDetails_fn).call(this, exceptionDetails, lineOffset, resultOwnership),
      realm: this.realmId,
      type: "exception"
    };
  };
  getSerializationOptions_fn = function(serialization, serializationOptions) {
    var _a2, _b;
    return {
      serialization,
      additionalParameters: __privateMethod(_a2 = _Realm, _Realm_static, getAdditionalSerializationParameters_fn).call(_a2, serializationOptions),
      ...__privateMethod(_b = _Realm, _Realm_static, getMaxObjectDepth_fn).call(_b, serializationOptions)
    };
  };
  getAdditionalSerializationParameters_fn = function(serializationOptions) {
    const additionalParameters = {};
    if (serializationOptions.maxDomDepth !== void 0) {
      additionalParameters["maxNodeDepth"] = serializationOptions.maxDomDepth === null ? 1e3 : serializationOptions.maxDomDepth;
    }
    if (serializationOptions.includeShadowTree !== void 0) {
      additionalParameters["includeShadowTree"] = serializationOptions.includeShadowTree;
    }
    return additionalParameters;
  };
  getMaxObjectDepth_fn = function(serializationOptions) {
    return serializationOptions.maxObjectDepth === void 0 || serializationOptions.maxObjectDepth === null ? {} : { maxDepth: serializationOptions.maxObjectDepth };
  };
  releaseObject_fn = async function(handle) {
    try {
      await this.cdpClient.sendCommand("Runtime.releaseObject", {
        objectId: handle
      });
    } catch (error) {
      if (!(error.code === -32e3 && error.message === "Invalid remote object id")) {
        throw error;
      }
    }
  };
  __privateAdd(_Realm, _Realm_static);
  let Realm2 = _Realm;
  Realm$1.Realm = Realm2;
  return Realm$1;
}
var SharedId = {};
var hasRequiredSharedId;
function requireSharedId() {
  if (hasRequiredSharedId) return SharedId;
  hasRequiredSharedId = 1;
  Object.defineProperty(SharedId, "__esModule", { value: true });
  SharedId.getSharedId = getSharedId;
  SharedId.parseSharedId = parseSharedId;
  const SHARED_ID_DIVIDER = "_element_";
  function getSharedId(frameId, documentId, backendNodeId) {
    return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
  }
  function parseLegacySharedId(sharedId) {
    const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
    if (!match) {
      return null;
    }
    const documentId = match[1];
    const elementId = match[2];
    if (documentId === void 0 || elementId === void 0) {
      return null;
    }
    const backendNodeId = parseInt(elementId ?? "");
    if (isNaN(backendNodeId)) {
      return null;
    }
    return {
      documentId,
      backendNodeId
    };
  }
  function parseSharedId(sharedId) {
    const legacyFormattedSharedId = parseLegacySharedId(sharedId);
    if (legacyFormattedSharedId !== null) {
      return { ...legacyFormattedSharedId, frameId: void 0 };
    }
    const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
    if (!match) {
      return null;
    }
    const frameId = match[1];
    const documentId = match[2];
    const elementId = match[3];
    if (frameId === void 0 || documentId === void 0 || elementId === void 0) {
      return null;
    }
    const backendNodeId = parseInt(elementId ?? "");
    if (isNaN(backendNodeId)) {
      return null;
    }
    return {
      frameId,
      documentId,
      backendNodeId
    };
  }
  return SharedId;
}
var hasRequiredWindowRealm;
function requireWindowRealm() {
  var _browsingContextId, _browsingContextStorage, _WindowRealm_instances2, getBrowsingContextId_fn;
  if (hasRequiredWindowRealm) return WindowRealm$1;
  hasRequiredWindowRealm = 1;
  Object.defineProperty(WindowRealm$1, "__esModule", { value: true });
  WindowRealm$1.WindowRealm = void 0;
  const protocol_js_1 = requireProtocol();
  const Realm_js_1 = requireRealm();
  const SharedId_js_1 = requireSharedId();
  class WindowRealm2 extends Realm_js_1.Realm {
    constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox) {
      super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
      __privateAdd(this, _WindowRealm_instances2);
      __privateAdd(this, _browsingContextId);
      __privateAdd(this, _browsingContextStorage);
      __publicField(this, "sandbox");
      __privateSet(this, _browsingContextId, browsingContextId);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      this.sandbox = sandbox;
      this.initialize();
    }
    get browsingContext() {
      return __privateGet(this, _browsingContextStorage).getContext(__privateGet(this, _browsingContextId));
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
        context: __privateGet(this, _browsingContextId),
        sandbox: this.sandbox
      };
    }
    get source() {
      return {
        realm: this.realmId,
        context: this.browsingContext.id
      };
    }
    serializeForBiDi(deepSerializedValue, internalIdMap) {
      const bidiValue = deepSerializedValue.value;
      if (deepSerializedValue.type === "node" && bidiValue !== void 0) {
        if (Object.hasOwn(bidiValue, "backendNodeId")) {
          let navigableId = this.browsingContext.navigableId ?? "UNKNOWN";
          if (Object.hasOwn(bidiValue, "loaderId")) {
            navigableId = bidiValue.loaderId;
            delete bidiValue["loaderId"];
          }
          deepSerializedValue.sharedId = (0, SharedId_js_1.getSharedId)(__privateMethod(this, _WindowRealm_instances2, getBrowsingContextId_fn).call(this, navigableId), navigableId, bidiValue.backendNodeId);
          delete bidiValue["backendNodeId"];
        }
        if (Object.hasOwn(bidiValue, "children")) {
          for (const i in bidiValue.children) {
            bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
          }
        }
        if (Object.hasOwn(bidiValue, "shadowRoot") && bidiValue.shadowRoot !== null) {
          bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
        }
        if (bidiValue.namespaceURI === "") {
          bidiValue.namespaceURI = null;
        }
      }
      return super.serializeForBiDi(deepSerializedValue, internalIdMap);
    }
    async deserializeForCdp(localValue) {
      if ("sharedId" in localValue && localValue.sharedId) {
        const parsedSharedId = (0, SharedId_js_1.parseSharedId)(localValue.sharedId);
        if (parsedSharedId === null) {
          throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
        }
        const { documentId, backendNodeId } = parsedSharedId;
        if (this.browsingContext.navigableId !== documentId) {
          throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
        }
        try {
          const { object } = await this.cdpClient.sendCommand("DOM.resolveNode", {
            backendNodeId,
            executionContextId: this.executionContextId
          });
          return { objectId: object.objectId };
        } catch (error) {
          if (error.code === -32e3 && error.message === "No node with given id found") {
            throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
          }
          throw new protocol_js_1.UnknownErrorException(error.message, error.stack);
        }
      }
      return await super.deserializeForCdp(localValue);
    }
    async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi) {
      await __privateGet(this, _browsingContextStorage).getContext(__privateGet(this, _browsingContextId)).targetUnblockedOrThrow();
      return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi);
    }
    async callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation) {
      await __privateGet(this, _browsingContextStorage).getContext(__privateGet(this, _browsingContextId)).targetUnblockedOrThrow();
      return await super.callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation);
    }
  }
  _browsingContextId = new WeakMap();
  _browsingContextStorage = new WeakMap();
  _WindowRealm_instances2 = new WeakSet();
  getBrowsingContextId_fn = function(navigableId) {
    const maybeBrowsingContext = __privateGet(this, _browsingContextStorage).getAllContexts().find((context) => context.navigableId === navigableId);
    return (maybeBrowsingContext == null ? void 0 : maybeBrowsingContext.id) ?? "UNKNOWN";
  };
  WindowRealm$1.WindowRealm = WindowRealm2;
  return WindowRealm$1;
}
var NavigationTracker = {};
var UrlHelpers = {};
var hasRequiredUrlHelpers;
function requireUrlHelpers() {
  if (hasRequiredUrlHelpers) return UrlHelpers;
  hasRequiredUrlHelpers = 1;
  Object.defineProperty(UrlHelpers, "__esModule", { value: true });
  UrlHelpers.urlMatchesAboutBlank = urlMatchesAboutBlank;
  function urlMatchesAboutBlank(url) {
    if (url === "") {
      return true;
    }
    try {
      const parsedUrl = new URL(url);
      const schema = parsedUrl.protocol.replace(/:$/, "");
      return schema.toLowerCase() === "about" && parsedUrl.pathname.toLowerCase() === "blank" && parsedUrl.username === "" && parsedUrl.password === "" && parsedUrl.host === "";
    } catch (err) {
      if (err instanceof TypeError) {
        return false;
      }
      throw err;
    }
  }
  return UrlHelpers;
}
var hasRequiredNavigationTracker;
function requireNavigationTracker() {
  var _browsingContextId, _started2, _finished, _isInitial, _eventManager, _navigated, _NavigationState_instances, finish_fn, _eventManager2, _logger, _loaderIdToNavigationsMap, _browsingContextId2, _currentNavigation, _pendingNavigation, _isInitialNavigation, _NavigationTracker_instances, getNavigationForFrameNavigated_fn, _a2;
  if (hasRequiredNavigationTracker) return NavigationTracker;
  hasRequiredNavigationTracker = 1;
  Object.defineProperty(NavigationTracker, "__esModule", { value: true });
  NavigationTracker.NavigationTracker = NavigationTracker.NavigationState = NavigationTracker.NavigationResult = void 0;
  const protocol_js_1 = requireProtocol();
  const Deferred_js_1 = requireDeferred();
  const log_js_1 = requireLog();
  const time_js_1 = requireTime();
  const UrlHelpers_js_1 = requireUrlHelpers();
  const uuid_js_1 = requireUuid();
  class NavigationResult {
    constructor(eventName, message) {
      __publicField(this, "eventName");
      __publicField(this, "message");
      this.eventName = eventName;
      this.message = message;
    }
  }
  NavigationTracker.NavigationResult = NavigationResult;
  class NavigationState {
    constructor(url, browsingContextId, isInitial, eventManager) {
      __privateAdd(this, _NavigationState_instances);
      __publicField(this, "navigationId", (0, uuid_js_1.uuidv4)());
      __privateAdd(this, _browsingContextId);
      __privateAdd(this, _started2, false);
      __privateAdd(this, _finished, new Deferred_js_1.Deferred());
      __publicField(this, "url");
      __publicField(this, "loaderId");
      __privateAdd(this, _isInitial);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _navigated, false);
      __publicField(this, "isFragmentNavigation");
      __privateSet(this, _browsingContextId, browsingContextId);
      this.url = url;
      __privateSet(this, _isInitial, isInitial);
      __privateSet(this, _eventManager, eventManager);
    }
    get finished() {
      return __privateGet(this, _finished);
    }
    navigationInfo() {
      return {
        context: __privateGet(this, _browsingContextId),
        navigation: this.navigationId,
        timestamp: (0, time_js_1.getTimestamp)(),
        url: this.url
      };
    }
    start() {
      if (!__privateGet(this, _isInitial) && !__privateGet(this, _started2)) {
        __privateGet(this, _eventManager).registerEvent({
          type: "event",
          method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
          params: this.navigationInfo()
        }, __privateGet(this, _browsingContextId));
      }
      __privateSet(this, _started2, true);
    }
    frameNavigated() {
      __privateSet(this, _navigated, true);
    }
    fragmentNavigated() {
      __privateSet(this, _navigated, true);
      __privateMethod(this, _NavigationState_instances, finish_fn).call(this, new NavigationResult(
        "browsingContext.fragmentNavigated"
        /* NavigationEventName.FragmentNavigated */
      ));
    }
    load() {
      __privateMethod(this, _NavigationState_instances, finish_fn).call(this, new NavigationResult(
        "browsingContext.load"
        /* NavigationEventName.Load */
      ));
    }
    fail(message) {
      __privateMethod(this, _NavigationState_instances, finish_fn).call(this, new NavigationResult(__privateGet(this, _navigated) ? "browsingContext.navigationAborted" : "browsingContext.navigationFailed", message));
    }
  }
  _browsingContextId = new WeakMap();
  _started2 = new WeakMap();
  _finished = new WeakMap();
  _isInitial = new WeakMap();
  _eventManager = new WeakMap();
  _navigated = new WeakMap();
  _NavigationState_instances = new WeakSet();
  finish_fn = function(navigationResult) {
    __privateSet(this, _started2, true);
    if (!__privateGet(this, _isInitial) && !__privateGet(this, _finished).isFinished && navigationResult.eventName !== "browsingContext.load") {
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: navigationResult.eventName,
        params: this.navigationInfo()
      }, __privateGet(this, _browsingContextId));
    }
    __privateGet(this, _finished).resolve(navigationResult);
  };
  NavigationTracker.NavigationState = NavigationState;
  let NavigationTracker$1 = (_a2 = class {
    constructor(url, browsingContextId, eventManager, logger) {
      __privateAdd(this, _NavigationTracker_instances);
      __privateAdd(this, _eventManager2);
      __privateAdd(this, _logger);
      __privateAdd(this, _loaderIdToNavigationsMap, /* @__PURE__ */ new Map());
      __privateAdd(this, _browsingContextId2);
      __privateAdd(this, _currentNavigation);
      // When a new navigation is started via `BrowsingContext.navigate` with `wait` set to
      // `None`, the command result should have `navigation` value, but mapper does not have
      // it yet. This value will be set to `navigationId` after next .
      __privateAdd(this, _pendingNavigation);
      // Flags if the initial navigation to `about:blank` is in progress.
      __privateAdd(this, _isInitialNavigation, true);
      __privateSet(this, _browsingContextId2, browsingContextId);
      __privateSet(this, _eventManager2, eventManager);
      __privateSet(this, _logger, logger);
      __privateSet(this, _isInitialNavigation, true);
      __privateSet(this, _currentNavigation, new NavigationState(url, browsingContextId, (0, UrlHelpers_js_1.urlMatchesAboutBlank)(url), __privateGet(this, _eventManager2)));
    }
    /**
     * Returns current started ongoing navigation. It can be either a started pending
     * navigation, or one is already navigated.
     */
    get currentNavigationId() {
      var _a3;
      if (((_a3 = __privateGet(this, _pendingNavigation)) == null ? void 0 : _a3.loaderId) !== void 0) {
        return __privateGet(this, _pendingNavigation).navigationId;
      }
      return __privateGet(this, _currentNavigation).navigationId;
    }
    /**
     * Flags if the current navigation relates to the initial to `about:blank` navigation.
     */
    get isInitialNavigation() {
      return __privateGet(this, _isInitialNavigation);
    }
    /**
     * Url of the last navigated navigation.
     */
    get url() {
      return __privateGet(this, _currentNavigation).url;
    }
    /**
     * Creates a pending navigation e.g. when navigation command is called. Required to
     * provide navigation id before the actual navigation is started. It will be used when
     * navigation started. Can be aborted, failed, fragment navigated, or became a current
     * navigation.
     */
    createPendingNavigation(url, canBeInitialNavigation = false) {
      var _a3, _b;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, "createCommandNavigation");
      __privateSet(this, _isInitialNavigation, canBeInitialNavigation && __privateGet(this, _isInitialNavigation) && (0, UrlHelpers_js_1.urlMatchesAboutBlank)(url));
      (_b = __privateGet(this, _pendingNavigation)) == null ? void 0 : _b.fail("navigation canceled by concurrent navigation");
      const navigation = new NavigationState(url, __privateGet(this, _browsingContextId2), __privateGet(this, _isInitialNavigation), __privateGet(this, _eventManager2));
      __privateSet(this, _pendingNavigation, navigation);
      return navigation;
    }
    dispose() {
      var _a3;
      (_a3 = __privateGet(this, _pendingNavigation)) == null ? void 0 : _a3.fail("navigation canceled by context disposal");
      __privateGet(this, _currentNavigation).fail("navigation canceled by context disposal");
    }
    // Update the current url.
    onTargetInfoChanged(url) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `onTargetInfoChanged ${url}`);
      __privateGet(this, _currentNavigation).url = url;
    }
    /**
     * @param {string} unreachableUrl indicated the navigation is actually failed.
     */
    frameNavigated(url, loaderId, unreachableUrl) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `frameNavigated ${url}`);
      if (unreachableUrl !== void 0 && !__privateGet(this, _loaderIdToNavigationsMap).has(loaderId)) {
        const navigation2 = __privateGet(this, _pendingNavigation) ?? this.createPendingNavigation(unreachableUrl, true);
        navigation2.url = unreachableUrl;
        navigation2.start();
        navigation2.fail("the requested url is unreachable");
        return;
      }
      const navigation = __privateMethod(this, _NavigationTracker_instances, getNavigationForFrameNavigated_fn).call(this, url, loaderId);
      navigation.frameNavigated();
      if (navigation !== __privateGet(this, _currentNavigation)) {
        __privateGet(this, _currentNavigation).fail("navigation canceled by concurrent navigation");
      }
      navigation.url = url;
      navigation.loaderId = loaderId;
      __privateGet(this, _loaderIdToNavigationsMap).set(loaderId, navigation);
      navigation.start();
      __privateSet(this, _currentNavigation, navigation);
      if (__privateGet(this, _pendingNavigation) === navigation) {
        __privateSet(this, _pendingNavigation, void 0);
      }
    }
    navigatedWithinDocument(url, navigationType) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `navigatedWithinDocument ${url}, ${navigationType}`);
      __privateGet(this, _currentNavigation).url = url;
      if (navigationType !== "fragment") {
        return;
      }
      const fragmentNavigation = __privateGet(this, _pendingNavigation) !== void 0 && __privateGet(this, _pendingNavigation).loaderId === void 0 ? __privateGet(this, _pendingNavigation) : new NavigationState(url, __privateGet(this, _browsingContextId2), false, __privateGet(this, _eventManager2));
      fragmentNavigation.fragmentNavigated();
      if (fragmentNavigation === __privateGet(this, _pendingNavigation)) {
        __privateSet(this, _pendingNavigation, void 0);
      }
    }
    frameRequestedNavigation(url) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `Page.frameRequestedNavigation ${url}`);
      this.createPendingNavigation(url, true);
    }
    /**
     * Required to mark navigation as fully complete.
     * TODO: navigation should be complete when it became the current one on
     * `Page.frameNavigated` or on navigating command finished with a new loader Id.
     */
    loadPageEvent(loaderId) {
      var _a3, _b;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, "loadPageEvent");
      __privateSet(this, _isInitialNavigation, false);
      (_b = __privateGet(this, _loaderIdToNavigationsMap).get(loaderId)) == null ? void 0 : _b.load();
    }
    /**
     * Fail navigation due to navigation command failed.
     */
    failNavigation(navigation, errorText) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, "failCommandNavigation");
      navigation.fail(errorText);
    }
    /**
     * Updates the navigation's `loaderId` and sets it as current one, if it is a
     * cross-document navigation.
     */
    navigationCommandFinished(navigation, loaderId) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `finishCommandNavigation ${navigation.navigationId}, ${loaderId}`);
      if (loaderId !== void 0) {
        navigation.loaderId = loaderId;
        __privateGet(this, _loaderIdToNavigationsMap).set(loaderId, navigation);
      }
      navigation.isFragmentNavigation = loaderId === void 0;
      if (loaderId === void 0 || __privateGet(this, _currentNavigation) === navigation) {
        return;
      }
      __privateGet(this, _currentNavigation).fail("navigation canceled by concurrent navigation");
      navigation.start();
      __privateSet(this, _currentNavigation, navigation);
      if (__privateGet(this, _pendingNavigation) === navigation) {
        __privateSet(this, _pendingNavigation, void 0);
      }
    }
    /**
     * Emulated event, tight to `Network.requestWillBeSent`.
     */
    frameStartedNavigating(url, loaderId) {
      var _a3;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `frameStartedNavigating ${url}, ${loaderId}`);
      if (__privateGet(this, _loaderIdToNavigationsMap).has(loaderId)) {
        return;
      }
      const pendingNavigation = __privateGet(this, _pendingNavigation) ?? this.createPendingNavigation(url, true);
      pendingNavigation.url = url;
      pendingNavigation.start();
      pendingNavigation.loaderId = loaderId;
      __privateGet(this, _loaderIdToNavigationsMap).set(loaderId, pendingNavigation);
    }
    /**
     * In case of `beforeunload` handler, the pending navigation should be marked as started
     * for consistency, as the `browsingContext.navigationStarted` should be emitted before
     * user prompt.
     */
    beforeunload() {
      var _a3, _b;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debug, `beforeunload`);
      if (__privateGet(this, _pendingNavigation) === void 0) {
        (_b = __privateGet(this, _logger)) == null ? void 0 : _b.call(this, log_js_1.LogType.debugError, `Unexpectedly no pending navigation on beforeunload`);
        return;
      }
      __privateGet(this, _pendingNavigation).start();
    }
    /**
     * If there is a navigation with the loaderId equals to the network request id, it means
     * that the navigation failed.
     */
    networkLoadingFailed(loaderId, errorText) {
      var _a3;
      (_a3 = __privateGet(this, _loaderIdToNavigationsMap).get(loaderId)) == null ? void 0 : _a3.fail(errorText);
    }
  }, _eventManager2 = new WeakMap(), _logger = new WeakMap(), _loaderIdToNavigationsMap = new WeakMap(), _browsingContextId2 = new WeakMap(), _currentNavigation = new WeakMap(), _pendingNavigation = new WeakMap(), _isInitialNavigation = new WeakMap(), _NavigationTracker_instances = new WeakSet(), getNavigationForFrameNavigated_fn = function(url, loaderId) {
    var _a3;
    if (__privateGet(this, _loaderIdToNavigationsMap).has(loaderId)) {
      return __privateGet(this, _loaderIdToNavigationsMap).get(loaderId);
    }
    if (__privateGet(this, _pendingNavigation) !== void 0 && ((_a3 = __privateGet(this, _pendingNavigation)) == null ? void 0 : _a3.loaderId) === void 0) {
      return __privateGet(this, _pendingNavigation);
    }
    return this.createPendingNavigation(url, true);
  }, _a2);
  NavigationTracker.NavigationTracker = NavigationTracker$1;
  return NavigationTracker;
}
var hasRequiredBrowsingContextImpl;
function requireBrowsingContextImpl() {
  var _a3, _children, _id, _loaderId, _parentId, _previousViewport, _originalOpener, _lifecycle, _cdpTarget, _defaultRealmDeferred, _browsingContextStorage, _eventManager, _logger, _navigationTracker, _realmStorage, _unhandledPromptBehavior, _lastUserPromptType, _BrowsingContextImpl_instances, deleteAllChildren_fn, initListeners_fn, _BrowsingContextImpl_static, getPromptType_fn, getPromptHandler_fn, documentChanged_fn, resetLifecycleIfFinished_fn, failLifecycleIfNotFinished_fn, waitNavigation_fn, parseRect_fn, getLocatorDelegate_fn, locateNodesByLocator_fn;
  if (hasRequiredBrowsingContextImpl) return BrowsingContextImpl;
  hasRequiredBrowsingContextImpl = 1;
  var _a2;
  Object.defineProperty(BrowsingContextImpl, "__esModule", { value: true });
  BrowsingContextImpl.BrowsingContextImpl = void 0;
  BrowsingContextImpl.serializeOrigin = serializeOrigin;
  const protocol_js_1 = requireProtocol();
  const assert_js_1 = requireAssert();
  const Deferred_js_1 = requireDeferred();
  const log_js_1 = requireLog();
  const time_js_1 = requireTime();
  const unitConversions_js_1 = requireUnitConversions();
  const WindowRealm_js_1 = requireWindowRealm();
  const NavigationTracker_js_1 = requireNavigationTracker();
  let BrowsingContextImpl$1 = (_a3 = class {
    constructor(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger) {
      __privateAdd(this, _BrowsingContextImpl_instances);
      /** Direct children browsing contexts. */
      __privateAdd(this, _children, /* @__PURE__ */ new Set());
      /** The ID of this browsing context. */
      __privateAdd(this, _id);
      __publicField(this, "userContext");
      /**
       * The ID of the parent browsing context.
       * If null, this is a top-level context.
       */
      __privateAdd(this, _loaderId);
      __privateAdd(this, _parentId, null);
      // Keeps track of the previously set viewport.
      __privateAdd(this, _previousViewport, { width: 0, height: 0 });
      __privateAdd(this, _originalOpener);
      __privateAdd(this, _lifecycle, {
        DOMContentLoaded: new Deferred_js_1.Deferred(),
        load: new Deferred_js_1.Deferred()
      });
      __privateAdd(this, _cdpTarget);
      __privateAdd(this, _defaultRealmDeferred, new Deferred_js_1.Deferred());
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _logger);
      __privateAdd(this, _navigationTracker);
      __privateAdd(this, _realmStorage);
      // The deferred will be resolved when the default realm is created.
      __privateAdd(this, _unhandledPromptBehavior);
      // Set when the user prompt is opened. Required to provide the type in closing event.
      __privateAdd(this, _lastUserPromptType);
      __privateSet(this, _cdpTarget, cdpTarget);
      __privateSet(this, _id, id);
      __privateSet(this, _parentId, parentId);
      this.userContext = userContext;
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _realmStorage, realmStorage);
      __privateSet(this, _unhandledPromptBehavior, unhandledPromptBehavior);
      __privateSet(this, _logger, logger);
      __privateSet(this, _originalOpener, originalOpener);
      __privateSet(this, _navigationTracker, new NavigationTracker_js_1.NavigationTracker(url, id, eventManager, logger));
    }
    static create(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger) {
      var _a4;
      const context = new _a2(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger);
      __privateMethod(_a4 = context, _BrowsingContextImpl_instances, initListeners_fn).call(_a4);
      browsingContextStorage.addContext(context);
      if (!context.isTopLevelContext()) {
        context.parent.addChild(context.id);
      }
      eventManager.registerPromiseEvent(context.targetUnblockedOrThrow().then(() => {
        return {
          kind: "success",
          value: {
            type: "event",
            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
            params: {
              ...context.serializeToBidiValue(),
              // Hack to provide the initial URL of the context, as it can be changed
              // between the page target is attached and unblocked, as the page is not
              // fully paused in MPArch session (https://crbug.com/372842894).
              // TODO: remove once https://crbug.com/372842894 is addressed.
              url
            }
          }
        };
      }, (error) => {
        return {
          kind: "error",
          error
        };
      }), context.id, protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated);
      return context;
    }
    /**
     * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
     */
    get navigableId() {
      return __privateGet(this, _loaderId);
    }
    get navigationId() {
      return __privateGet(this, _navigationTracker).currentNavigationId;
    }
    dispose(emitContextDestroyed) {
      __privateGet(this, _navigationTracker).dispose();
      __privateMethod(this, _BrowsingContextImpl_instances, deleteAllChildren_fn).call(this);
      __privateGet(this, _realmStorage).deleteRealms({
        browsingContextId: this.id
      });
      if (!this.isTopLevelContext()) {
        __privateGet(this.parent, _children).delete(this.id);
      }
      __privateMethod(this, _BrowsingContextImpl_instances, failLifecycleIfNotFinished_fn).call(this);
      if (emitContextDestroyed) {
        __privateGet(this, _eventManager).registerEvent({
          type: "event",
          method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
          params: this.serializeToBidiValue()
        }, this.id);
      }
      __privateGet(this, _eventManager).clearBufferedEvents(this.id);
      __privateGet(this, _browsingContextStorage).deleteContextById(this.id);
    }
    /** Returns the ID of this context. */
    get id() {
      return __privateGet(this, _id);
    }
    /** Returns the parent context ID. */
    get parentId() {
      return __privateGet(this, _parentId);
    }
    /** Sets the parent context ID and updates parent's children. */
    set parentId(parentId) {
      var _a4;
      if (__privateGet(this, _parentId) !== null) {
        (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.debugError, "Parent context already set");
        return;
      }
      __privateSet(this, _parentId, parentId);
      if (!this.isTopLevelContext()) {
        this.parent.addChild(this.id);
      }
    }
    /** Returns the parent context. */
    get parent() {
      if (this.parentId === null) {
        return null;
      }
      return __privateGet(this, _browsingContextStorage).getContext(this.parentId);
    }
    /** Returns all direct children contexts. */
    get directChildren() {
      return [...__privateGet(this, _children)].map((id) => __privateGet(this, _browsingContextStorage).getContext(id));
    }
    /** Returns all children contexts, flattened. */
    get allChildren() {
      const children = this.directChildren;
      return children.concat(...children.map((child) => child.allChildren));
    }
    /**
     * Returns true if this is a top-level context.
     * This is the case whenever the parent context ID is null.
     */
    isTopLevelContext() {
      return __privateGet(this, _parentId) === null;
    }
    get top() {
      let topContext = this;
      let parent = topContext.parent;
      while (parent) {
        topContext = parent;
        parent = topContext.parent;
      }
      return topContext;
    }
    addChild(childId) {
      __privateGet(this, _children).add(childId);
    }
    get cdpTarget() {
      return __privateGet(this, _cdpTarget);
    }
    updateCdpTarget(cdpTarget) {
      __privateSet(this, _cdpTarget, cdpTarget);
      __privateMethod(this, _BrowsingContextImpl_instances, initListeners_fn).call(this);
    }
    get url() {
      return __privateGet(this, _navigationTracker).url;
    }
    async lifecycleLoaded() {
      await __privateGet(this, _lifecycle).load;
    }
    async targetUnblockedOrThrow() {
      const result = await __privateGet(this, _cdpTarget).unblocked;
      if (result.kind === "error") {
        throw result.error;
      }
    }
    async getOrCreateSandbox(sandbox) {
      if (sandbox === void 0 || sandbox === "") {
        return await __privateGet(this, _defaultRealmDeferred);
      }
      let maybeSandboxes = __privateGet(this, _realmStorage).findRealms({
        browsingContextId: this.id,
        sandbox
      });
      if (maybeSandboxes.length === 0) {
        await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.createIsolatedWorld", {
          frameId: this.id,
          worldName: sandbox
        });
        maybeSandboxes = __privateGet(this, _realmStorage).findRealms({
          browsingContextId: this.id,
          sandbox
        });
        (0, assert_js_1.assert)(maybeSandboxes.length !== 0);
      }
      return maybeSandboxes[0];
    }
    serializeToBidiValue(maxDepth = 0, addParentField = true) {
      return {
        context: __privateGet(this, _id),
        url: this.url,
        userContext: this.userContext,
        originalOpener: __privateGet(this, _originalOpener) ?? null,
        // TODO(#2646): Implement Client Window correctly
        clientWindow: "",
        children: maxDepth > 0 ? this.directChildren.map((c) => c.serializeToBidiValue(maxDepth - 1, false)) : null,
        ...addParentField ? { parent: __privateGet(this, _parentId) } : {}
      };
    }
    onTargetInfoChanged(params) {
      __privateGet(this, _navigationTracker).onTargetInfoChanged(params.targetInfo.url);
    }
    async navigate(url, wait) {
      try {
        new URL(url);
      } catch {
        throw new protocol_js_1.InvalidArgumentException(`Invalid URL: ${url}`);
      }
      const navigationState = __privateGet(this, _navigationTracker).createPendingNavigation(url);
      const cdpNavigatePromise = (async () => {
        const cdpNavigateResult = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.navigate", {
          url,
          frameId: this.id
        });
        if (cdpNavigateResult.errorText) {
          __privateGet(this, _navigationTracker).failNavigation(navigationState, cdpNavigateResult.errorText);
          throw new protocol_js_1.UnknownErrorException(cdpNavigateResult.errorText);
        }
        __privateGet(this, _navigationTracker).navigationCommandFinished(navigationState, cdpNavigateResult.loaderId);
        __privateMethod(this, _BrowsingContextImpl_instances, documentChanged_fn).call(this, cdpNavigateResult.loaderId);
      })();
      const result = await Promise.race([
        // No `loaderId` means same-document navigation.
        __privateMethod(this, _BrowsingContextImpl_instances, waitNavigation_fn).call(this, wait, cdpNavigatePromise, navigationState),
        // Throw an error if the navigation is canceled.
        navigationState.finished
      ]);
      if (result instanceof NavigationTracker_js_1.NavigationResult) {
        if (
          // TODO: check after decision on the spec is done:
          //  https://github.com/w3c/webdriver-bidi/issues/799.
          result.eventName === "browsingContext.navigationAborted" || result.eventName === "browsingContext.navigationFailed"
        ) {
          throw new protocol_js_1.UnknownErrorException(result.message ?? "unknown exception");
        }
      }
      return {
        navigation: navigationState.navigationId,
        // Url can change due to redirects. Get the one from commandNavigation.
        url: navigationState.url
      };
    }
    // TODO: support concurrent navigations analogous to `navigate`.
    async reload(ignoreCache, wait) {
      await this.targetUnblockedOrThrow();
      __privateMethod(this, _BrowsingContextImpl_instances, resetLifecycleIfFinished_fn).call(this);
      const navigationState = __privateGet(this, _navigationTracker).createPendingNavigation(__privateGet(this, _navigationTracker).url);
      const cdpReloadPromise = __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.reload", {
        ignoreCache
      });
      const result = await Promise.race([
        // No `loaderId` means same-document navigation.
        __privateMethod(this, _BrowsingContextImpl_instances, waitNavigation_fn).call(this, wait, cdpReloadPromise, navigationState),
        // Throw an error if the navigation is canceled.
        navigationState.finished
      ]);
      if (result instanceof NavigationTracker_js_1.NavigationResult) {
        if (result.eventName === "browsingContext.navigationAborted" || result.eventName === "browsingContext.navigationFailed") {
          throw new protocol_js_1.UnknownErrorException(result.message ?? "unknown exception");
        }
      }
      return {
        navigation: navigationState.navigationId,
        // Url can change due to redirects. Get the one from commandNavigation.
        url: navigationState.url
      };
    }
    async setViewport(viewport, devicePixelRatio) {
      if (viewport === null && devicePixelRatio === null) {
        await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
      } else {
        try {
          let appliedViewport;
          if (viewport === void 0) {
            appliedViewport = __privateGet(this, _previousViewport);
          } else if (viewport === null) {
            appliedViewport = {
              width: 0,
              height: 0
            };
          } else {
            appliedViewport = viewport;
          }
          __privateSet(this, _previousViewport, appliedViewport);
          await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", {
            width: __privateGet(this, _previousViewport).width,
            height: __privateGet(this, _previousViewport).height,
            deviceScaleFactor: devicePixelRatio ? devicePixelRatio : 0,
            mobile: false,
            dontSetVisibleSize: true
          });
        } catch (err) {
          if (err.message.startsWith(
            // https://crsrc.org/c/content/browser/devtools/protocol/emulation_handler.cc;l=257;drc=2f6eee84cf98d4227e7c41718dd71b82f26d90ff
            "Width and height values must be positive"
          )) {
            throw new protocol_js_1.UnsupportedOperationException("Provided viewport dimensions are not supported");
          }
          throw err;
        }
      }
    }
    async handleUserPrompt(accept, userText) {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.handleJavaScriptDialog", {
        accept: accept ?? true,
        promptText: userText
      });
    }
    async activate() {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.bringToFront");
    }
    async captureScreenshot(params) {
      if (!this.isTopLevelContext()) {
        throw new protocol_js_1.UnsupportedOperationException(`Non-top-level 'context' (${params.context}) is currently not supported`);
      }
      const formatParameters = getImageFormatParameters(params);
      let captureBeyondViewport = false;
      let script;
      params.origin ?? (params.origin = "viewport");
      switch (params.origin) {
        case "document": {
          script = String(() => {
            const element = document.documentElement;
            return {
              x: 0,
              y: 0,
              width: element.scrollWidth,
              height: element.scrollHeight
            };
          });
          captureBeyondViewport = true;
          break;
        }
        case "viewport": {
          script = String(() => {
            const viewport = window.visualViewport;
            return {
              x: viewport.pageLeft,
              y: viewport.pageTop,
              width: viewport.width,
              height: viewport.height
            };
          });
          break;
        }
      }
      const realm = await this.getOrCreateSandbox(void 0);
      const originResult = await realm.callFunction(script, false);
      (0, assert_js_1.assert)(originResult.type === "success");
      const origin = deserializeDOMRect(originResult.result);
      (0, assert_js_1.assert)(origin);
      let rect = origin;
      if (params.clip) {
        const clip = params.clip;
        if (params.origin === "viewport" && clip.type === "box") {
          clip.x += origin.x;
          clip.y += origin.y;
        }
        rect = getIntersectionRect(await __privateMethod(this, _BrowsingContextImpl_instances, parseRect_fn).call(this, clip), origin);
      }
      if (rect.width === 0 || rect.height === 0) {
        throw new protocol_js_1.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${rect.width}, height=${rect.height}`);
      }
      return await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.captureScreenshot", {
        clip: { ...rect, scale: 1 },
        ...formatParameters,
        captureBeyondViewport
      });
    }
    async print(params) {
      var _a4, _b, _c, _d, _e, _f;
      if (!this.isTopLevelContext()) {
        throw new protocol_js_1.UnsupportedOperationException("Printing of non-top level contexts is not supported");
      }
      const cdpParams = {};
      if (params.background !== void 0) {
        cdpParams.printBackground = params.background;
      }
      if (((_a4 = params.margin) == null ? void 0 : _a4.bottom) !== void 0) {
        cdpParams.marginBottom = (0, unitConversions_js_1.inchesFromCm)(params.margin.bottom);
      }
      if (((_b = params.margin) == null ? void 0 : _b.left) !== void 0) {
        cdpParams.marginLeft = (0, unitConversions_js_1.inchesFromCm)(params.margin.left);
      }
      if (((_c = params.margin) == null ? void 0 : _c.right) !== void 0) {
        cdpParams.marginRight = (0, unitConversions_js_1.inchesFromCm)(params.margin.right);
      }
      if (((_d = params.margin) == null ? void 0 : _d.top) !== void 0) {
        cdpParams.marginTop = (0, unitConversions_js_1.inchesFromCm)(params.margin.top);
      }
      if (params.orientation !== void 0) {
        cdpParams.landscape = params.orientation === "landscape";
      }
      if (((_e = params.page) == null ? void 0 : _e.height) !== void 0) {
        cdpParams.paperHeight = (0, unitConversions_js_1.inchesFromCm)(params.page.height);
      }
      if (((_f = params.page) == null ? void 0 : _f.width) !== void 0) {
        cdpParams.paperWidth = (0, unitConversions_js_1.inchesFromCm)(params.page.width);
      }
      if (params.pageRanges !== void 0) {
        for (const range of params.pageRanges) {
          if (typeof range === "number") {
            continue;
          }
          const rangeParts = range.split("-");
          if (rangeParts.length < 1 || rangeParts.length > 2) {
            throw new protocol_js_1.InvalidArgumentException(`Invalid page range: ${range} is not a valid integer range.`);
          }
          if (rangeParts.length === 1) {
            void parseInteger(rangeParts[0] ?? "");
            continue;
          }
          let lowerBound;
          let upperBound;
          const [rangeLowerPart = "", rangeUpperPart = ""] = rangeParts;
          if (rangeLowerPart === "") {
            lowerBound = 1;
          } else {
            lowerBound = parseInteger(rangeLowerPart);
          }
          if (rangeUpperPart === "") {
            upperBound = Number.MAX_SAFE_INTEGER;
          } else {
            upperBound = parseInteger(rangeUpperPart);
          }
          if (lowerBound > upperBound) {
            throw new protocol_js_1.InvalidArgumentException(`Invalid page range: ${rangeLowerPart} > ${rangeUpperPart}`);
          }
        }
        cdpParams.pageRanges = params.pageRanges.join(",");
      }
      if (params.scale !== void 0) {
        cdpParams.scale = params.scale;
      }
      if (params.shrinkToFit !== void 0) {
        cdpParams.preferCSSPageSize = !params.shrinkToFit;
      }
      try {
        const result = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.printToPDF", cdpParams);
        return {
          data: result.data
        };
      } catch (error) {
        if (error.message === "invalid print parameters: content area is empty") {
          throw new protocol_js_1.UnsupportedOperationException(error.message);
        }
        throw error;
      }
    }
    async close() {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.close");
    }
    async traverseHistory(delta) {
      if (delta === 0) {
        return;
      }
      const history = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.getNavigationHistory");
      const entry = history.entries[history.currentIndex + delta];
      if (!entry) {
        throw new protocol_js_1.NoSuchHistoryEntryException(`No history entry at delta ${delta}`);
      }
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.navigateToHistoryEntry", {
        entryId: entry.id
      });
    }
    async toggleModulesIfNeeded() {
      await Promise.all([
        __privateGet(this, _cdpTarget).toggleNetworkIfNeeded(),
        __privateGet(this, _cdpTarget).toggleDeviceAccessIfNeeded()
      ]);
    }
    async locateNodes(params) {
      return await __privateMethod(this, _BrowsingContextImpl_instances, locateNodesByLocator_fn).call(this, await __privateGet(this, _defaultRealmDeferred), params.locator, params.startNodes ?? [], params.maxNodeCount, params.serializationOptions);
    }
  }, _children = new WeakMap(), _id = new WeakMap(), _loaderId = new WeakMap(), _parentId = new WeakMap(), _previousViewport = new WeakMap(), _originalOpener = new WeakMap(), _lifecycle = new WeakMap(), _cdpTarget = new WeakMap(), _defaultRealmDeferred = new WeakMap(), _browsingContextStorage = new WeakMap(), _eventManager = new WeakMap(), _logger = new WeakMap(), _navigationTracker = new WeakMap(), _realmStorage = new WeakMap(), _unhandledPromptBehavior = new WeakMap(), _lastUserPromptType = new WeakMap(), _BrowsingContextImpl_instances = new WeakSet(), deleteAllChildren_fn = function(emitContextDestroyed = false) {
    this.directChildren.map((child) => child.dispose(emitContextDestroyed));
  }, initListeners_fn = function() {
    __privateGet(this, _cdpTarget).cdpClient.on("Network.loadingFailed", (params) => {
      __privateGet(this, _navigationTracker).networkLoadingFailed(params.requestId, params.errorText);
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Page.frameNavigated", (params) => {
      if (this.id !== params.frame.id) {
        return;
      }
      __privateGet(this, _navigationTracker).frameNavigated(
        params.frame.url + (params.frame.urlFragment ?? ""),
        params.frame.loaderId,
        // `unreachableUrl` indicates if the navigation failed.
        params.frame.unreachableUrl
      );
      __privateMethod(this, _BrowsingContextImpl_instances, deleteAllChildren_fn).call(this);
      __privateMethod(this, _BrowsingContextImpl_instances, documentChanged_fn).call(this, params.frame.loaderId);
    });
    __privateGet(this, _cdpTarget).on("frameStartedNavigating", (params) => {
      var _a4;
      (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.debugInfo, `Received ${"frameStartedNavigating"} event`, params);
      const possibleFrameIds = [
        this.id,
        ...this.cdpTarget.id === this.id ? [void 0] : []
      ];
      if (!possibleFrameIds.includes(params.frameId)) {
        return;
      }
      __privateGet(this, _navigationTracker).frameStartedNavigating(params.url, params.loaderId);
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Page.navigatedWithinDocument", (params) => {
      if (this.id !== params.frameId) {
        return;
      }
      __privateGet(this, _navigationTracker).navigatedWithinDocument(params.url, params.navigationType);
      if (params.navigationType === "historyApi") {
        __privateGet(this, _eventManager).registerEvent({
          type: "event",
          method: "browsingContext.historyUpdated",
          params: {
            context: this.id,
            url: __privateGet(this, _navigationTracker).url
          }
        }, this.id);
        return;
      }
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Page.frameRequestedNavigation", (params) => {
      if (this.id !== params.frameId) {
        return;
      }
      __privateGet(this, _navigationTracker).frameRequestedNavigation(params.url);
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Page.lifecycleEvent", (params) => {
      if (this.id !== params.frameId) {
        return;
      }
      if (params.name === "init") {
        __privateMethod(this, _BrowsingContextImpl_instances, documentChanged_fn).call(this, params.loaderId);
        return;
      }
      if (params.name === "commit") {
        __privateSet(this, _loaderId, params.loaderId);
        return;
      }
      if (!__privateGet(this, _loaderId)) {
        __privateSet(this, _loaderId, params.loaderId);
      }
      if (params.loaderId !== __privateGet(this, _loaderId)) {
        return;
      }
      switch (params.name) {
        case "DOMContentLoaded":
          if (!__privateGet(this, _navigationTracker).isInitialNavigation) {
            __privateGet(this, _eventManager).registerEvent({
              type: "event",
              method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
              params: {
                context: this.id,
                navigation: __privateGet(this, _navigationTracker).currentNavigationId,
                timestamp: (0, time_js_1.getTimestamp)(),
                url: __privateGet(this, _navigationTracker).url
              }
            }, this.id);
          }
          __privateGet(this, _lifecycle).DOMContentLoaded.resolve();
          break;
        case "load":
          if (!__privateGet(this, _navigationTracker).isInitialNavigation) {
            __privateGet(this, _eventManager).registerEvent({
              type: "event",
              method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.Load,
              params: {
                context: this.id,
                navigation: __privateGet(this, _navigationTracker).currentNavigationId,
                timestamp: (0, time_js_1.getTimestamp)(),
                url: __privateGet(this, _navigationTracker).url
              }
            }, this.id);
          }
          __privateGet(this, _navigationTracker).loadPageEvent(params.loaderId);
          __privateGet(this, _lifecycle).load.resolve();
          break;
      }
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextCreated", (params) => {
      var _a4;
      const { auxData, name, uniqueId, id } = params.context;
      if (!auxData || auxData.frameId !== this.id) {
        return;
      }
      let origin;
      let sandbox;
      switch (auxData.type) {
        case "isolated":
          sandbox = name;
          if (!__privateGet(this, _defaultRealmDeferred).isFinished) {
            (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.debugError, "Unexpectedly, isolated realm created before the default one");
          }
          origin = __privateGet(this, _defaultRealmDeferred).isFinished ? __privateGet(this, _defaultRealmDeferred).result.origin : (
            // This fallback is not expected to be ever reached.
            ""
          );
          break;
        case "default":
          origin = serializeOrigin(params.context.origin);
          break;
        default:
          return;
      }
      const realm = new WindowRealm_js_1.WindowRealm(this.id, __privateGet(this, _browsingContextStorage), __privateGet(this, _cdpTarget).cdpClient, __privateGet(this, _eventManager), id, __privateGet(this, _logger), origin, uniqueId, __privateGet(this, _realmStorage), sandbox);
      if (auxData.isDefault) {
        __privateGet(this, _defaultRealmDeferred).resolve(realm);
        void Promise.all(__privateGet(this, _cdpTarget).getChannels().map((channel) => channel.startListenerFromWindow(realm, __privateGet(this, _eventManager))));
      }
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextDestroyed", (params) => {
      if (__privateGet(this, _defaultRealmDeferred).isFinished && __privateGet(this, _defaultRealmDeferred).result.executionContextId === params.executionContextId) {
        __privateSet(this, _defaultRealmDeferred, new Deferred_js_1.Deferred());
      }
      __privateGet(this, _realmStorage).deleteRealms({
        cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId,
        executionContextId: params.executionContextId
      });
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextsCleared", () => {
      if (!__privateGet(this, _defaultRealmDeferred).isFinished) {
        __privateGet(this, _defaultRealmDeferred).reject(new protocol_js_1.UnknownErrorException("execution contexts cleared"));
      }
      __privateSet(this, _defaultRealmDeferred, new Deferred_js_1.Deferred());
      __privateGet(this, _realmStorage).deleteRealms({
        cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId
      });
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Page.javascriptDialogClosed", (params) => {
      var _a4;
      const accepted = params.result;
      if (__privateGet(this, _lastUserPromptType) === void 0) {
        (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.debugError, "Unexpectedly no opening prompt event before closing one");
      }
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
        params: {
          context: this.id,
          accepted,
          // `lastUserPromptType` should never be undefined here, so fallback to
          // `UNKNOWN`. The fallback is required to prevent tests from hanging while
          // waiting for the closing event. The cast is required, as the `UNKNOWN` value
          // is not standard.
          type: __privateGet(this, _lastUserPromptType) ?? "UNKNOWN",
          userText: accepted && params.userInput ? params.userInput : void 0
        }
      }, this.id);
      __privateSet(this, _lastUserPromptType, void 0);
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Page.javascriptDialogOpening", (params) => {
      var _a4;
      const promptType = __privateMethod(_a4 = _a2, _BrowsingContextImpl_static, getPromptType_fn).call(_a4, params.type);
      if (params.type === "beforeunload") {
        __privateGet(this, _navigationTracker).beforeunload();
      }
      __privateSet(this, _lastUserPromptType, promptType);
      const promptHandler = __privateMethod(this, _BrowsingContextImpl_instances, getPromptHandler_fn).call(this, promptType);
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
        params: {
          context: this.id,
          handler: promptHandler,
          type: promptType,
          message: params.message,
          ...params.type === "prompt" ? { defaultValue: params.defaultPrompt } : {}
        }
      }, this.id);
      switch (promptHandler) {
        // Based on `unhandledPromptBehavior`, check if the prompt should be handled
        // automatically (`accept`, `dismiss`) or wait for the user to do it.
        case "accept":
          void this.handleUserPrompt(true);
          break;
        case "dismiss":
          void this.handleUserPrompt(false);
          break;
      }
    });
  }, _BrowsingContextImpl_static = new WeakSet(), getPromptType_fn = function(cdpType) {
    switch (cdpType) {
      case "alert":
        return "alert";
      case "beforeunload":
        return "beforeunload";
      case "confirm":
        return "confirm";
      case "prompt":
        return "prompt";
    }
  }, getPromptHandler_fn = function(promptType) {
    var _a4, _b, _c, _d, _e, _f, _g, _h;
    const defaultPromptHandler = "dismiss";
    switch (promptType) {
      case "alert":
        return ((_a4 = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _a4.alert) ?? ((_b = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _b.default) ?? defaultPromptHandler;
      case "beforeunload":
        return ((_c = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _c.beforeUnload) ?? ((_d = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _d.default) ?? "accept";
      case "confirm":
        return ((_e = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _e.confirm) ?? ((_f = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _f.default) ?? defaultPromptHandler;
      case "prompt":
        return ((_g = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _g.prompt) ?? ((_h = __privateGet(this, _unhandledPromptBehavior)) == null ? void 0 : _h.default) ?? defaultPromptHandler;
    }
  }, documentChanged_fn = function(loaderId) {
    if (loaderId === void 0 || __privateGet(this, _loaderId) === loaderId) {
      return;
    }
    __privateMethod(this, _BrowsingContextImpl_instances, resetLifecycleIfFinished_fn).call(this);
    __privateSet(this, _loaderId, loaderId);
    __privateMethod(this, _BrowsingContextImpl_instances, deleteAllChildren_fn).call(this, true);
  }, resetLifecycleIfFinished_fn = function() {
    var _a4, _b;
    if (__privateGet(this, _lifecycle).DOMContentLoaded.isFinished) {
      __privateGet(this, _lifecycle).DOMContentLoaded = new Deferred_js_1.Deferred();
    } else {
      (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, _a2.LOGGER_PREFIX, "Document changed (DOMContentLoaded)");
    }
    if (__privateGet(this, _lifecycle).load.isFinished) {
      __privateGet(this, _lifecycle).load = new Deferred_js_1.Deferred();
    } else {
      (_b = __privateGet(this, _logger)) == null ? void 0 : _b.call(this, _a2.LOGGER_PREFIX, "Document changed (load)");
    }
  }, failLifecycleIfNotFinished_fn = function() {
    if (!__privateGet(this, _lifecycle).DOMContentLoaded.isFinished) {
      __privateGet(this, _lifecycle).DOMContentLoaded.reject(new protocol_js_1.UnknownErrorException("navigation canceled"));
    }
    if (!__privateGet(this, _lifecycle).load.isFinished) {
      __privateGet(this, _lifecycle).load.reject(new protocol_js_1.UnknownErrorException("navigation canceled"));
    }
  }, waitNavigation_fn = async function(wait, cdpCommandPromise, navigationState) {
    if (wait === "none") {
      return;
    }
    await cdpCommandPromise;
    if (navigationState.isFragmentNavigation === true) {
      await navigationState.finished;
      return;
    }
    if (wait === "interactive") {
      await __privateGet(this, _lifecycle).DOMContentLoaded;
      return;
    }
    if (wait === "complete") {
      await __privateGet(this, _lifecycle).load;
      return;
    }
    throw new protocol_js_1.InvalidArgumentException(`Wait condition ${wait} is not supported`);
  }, parseRect_fn = async function(clip) {
    switch (clip.type) {
      case "box":
        return { x: clip.x, y: clip.y, width: clip.width, height: clip.height };
      case "element": {
        const sandbox = await this.getOrCreateSandbox(void 0);
        const result = await sandbox.callFunction(String((element) => {
          return element instanceof Element;
        }), false, { type: "undefined" }, [clip.element]);
        if (result.type === "exception") {
          throw new protocol_js_1.NoSuchElementException(`Element '${clip.element.sharedId}' was not found`);
        }
        (0, assert_js_1.assert)(result.result.type === "boolean");
        if (!result.result.value) {
          throw new protocol_js_1.NoSuchElementException(`Node '${clip.element.sharedId}' is not an Element`);
        }
        {
          const result2 = await sandbox.callFunction(String((element) => {
            const rect2 = element.getBoundingClientRect();
            return {
              x: rect2.x,
              y: rect2.y,
              height: rect2.height,
              width: rect2.width
            };
          }), false, { type: "undefined" }, [clip.element]);
          (0, assert_js_1.assert)(result2.type === "success");
          const rect = deserializeDOMRect(result2.result);
          if (!rect) {
            throw new protocol_js_1.UnableToCaptureScreenException(`Could not get bounding box for Element '${clip.element.sharedId}'`);
          }
          return rect;
        }
      }
    }
  }, getLocatorDelegate_fn = async function(realm, locator, maxNodeCount, startNodes) {
    switch (locator.type) {
      case "context":
        throw new Error("Unreachable");
      case "css":
        return {
          functionDeclaration: String((cssSelector, maxNodeCount2, ...startNodes2) => {
            const locateNodesUsingCss = (element) => {
              if (!(element instanceof HTMLElement || element instanceof Document || element instanceof DocumentFragment)) {
                throw new Error("startNodes in css selector should be HTMLElement, Document or DocumentFragment");
              }
              return [...element.querySelectorAll(cssSelector)];
            };
            startNodes2 = startNodes2.length > 0 ? startNodes2 : [document];
            const returnedNodes = startNodes2.map((startNode) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              locateNodesUsingCss(startNode)
            )).flat(1);
            return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
          }),
          argumentsLocalValues: [
            // `cssSelector`
            { type: "string", value: locator.value },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: maxNodeCount ?? 0 },
            // `startNodes`
            ...startNodes
          ]
        };
      case "xpath":
        return {
          functionDeclaration: String((xPathSelector, maxNodeCount2, ...startNodes2) => {
            const evaluator = new XPathEvaluator();
            const expression = evaluator.createExpression(xPathSelector);
            const locateNodesUsingXpath = (element) => {
              const xPathResult = expression.evaluate(element, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
              const returnedNodes2 = [];
              for (let i = 0; i < xPathResult.snapshotLength; i++) {
                returnedNodes2.push(xPathResult.snapshotItem(i));
              }
              return returnedNodes2;
            };
            startNodes2 = startNodes2.length > 0 ? startNodes2 : [document];
            const returnedNodes = startNodes2.map((startNode) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              locateNodesUsingXpath(startNode)
            )).flat(1);
            return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
          }),
          argumentsLocalValues: [
            // `xPathSelector`
            { type: "string", value: locator.value },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: maxNodeCount ?? 0 },
            // `startNodes`
            ...startNodes
          ]
        };
      case "innerText":
        if (locator.value === "") {
          throw new protocol_js_1.InvalidSelectorException("innerText locator cannot be empty");
        }
        return {
          functionDeclaration: String((innerTextSelector, fullMatch, ignoreCase, maxNodeCount2, maxDepth, ...startNodes2) => {
            const searchText = ignoreCase ? innerTextSelector.toUpperCase() : innerTextSelector;
            const locateNodesUsingInnerText = (node, currentMaxDepth) => {
              var _a4;
              const returnedNodes2 = [];
              if (node instanceof DocumentFragment || node instanceof Document) {
                const children = [...node.children];
                children.forEach((child) => (
                  // `currentMaxDepth` is not decremented intentionally according to
                  // https://github.com/w3c/webdriver-bidi/pull/713.
                  returnedNodes2.push(...locateNodesUsingInnerText(child, currentMaxDepth))
                ));
                return returnedNodes2;
              }
              if (!(node instanceof HTMLElement)) {
                return [];
              }
              const element = node;
              const nodeInnerText = ignoreCase ? (_a4 = element.innerText) == null ? void 0 : _a4.toUpperCase() : element.innerText;
              if (!nodeInnerText.includes(searchText)) {
                return [];
              }
              const childNodes = [];
              for (const child of element.children) {
                if (child instanceof HTMLElement) {
                  childNodes.push(child);
                }
              }
              if (childNodes.length === 0) {
                if (fullMatch && nodeInnerText === searchText) {
                  returnedNodes2.push(element);
                } else {
                  if (!fullMatch) {
                    returnedNodes2.push(element);
                  }
                }
              } else {
                const childNodeMatches = (
                  // Don't search deeper if `maxDepth` is reached.
                  currentMaxDepth <= 0 ? [] : childNodes.map((child) => locateNodesUsingInnerText(child, currentMaxDepth - 1)).flat(1)
                );
                if (childNodeMatches.length === 0) {
                  if (!fullMatch || nodeInnerText === searchText) {
                    returnedNodes2.push(element);
                  }
                } else {
                  returnedNodes2.push(...childNodeMatches);
                }
              }
              return returnedNodes2;
            };
            startNodes2 = startNodes2.length > 0 ? startNodes2 : [document];
            const returnedNodes = startNodes2.map((startNode) => (
              // TODO: stop search early if `maxNodeCount` is reached.
              locateNodesUsingInnerText(startNode, maxDepth)
            )).flat(1);
            return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
          }),
          argumentsLocalValues: [
            // `innerTextSelector`
            { type: "string", value: locator.value },
            // `fullMatch` with default `true`.
            { type: "boolean", value: locator.matchType !== "partial" },
            // `ignoreCase` with default `false`.
            { type: "boolean", value: locator.ignoreCase === true },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: maxNodeCount ?? 0 },
            // `maxDepth` with default `1000` (same as default full serialization depth).
            { type: "number", value: locator.maxDepth ?? 1e3 },
            // `startNodes`
            ...startNodes
          ]
        };
      case "accessibility": {
        if (!locator.value.name && !locator.value.role) {
          throw new protocol_js_1.InvalidSelectorException("Either name or role has to be specified");
        }
        await Promise.all([
          __privateGet(this, _cdpTarget).cdpClient.sendCommand("Accessibility.enable"),
          __privateGet(this, _cdpTarget).cdpClient.sendCommand("Accessibility.getRootAXNode")
        ]);
        const bindings = await realm.evaluate(
          /* expression=*/
          "({getAccessibleName, getAccessibleRole})",
          /* awaitPromise=*/
          false,
          "root",
          /* serializationOptions= */
          void 0,
          /* userActivation=*/
          false,
          /* includeCommandLineApi=*/
          true
        );
        if (bindings.type !== "success") {
          throw new Error("Could not get bindings");
        }
        if (bindings.result.type !== "object") {
          throw new Error("Could not get bindings");
        }
        return {
          functionDeclaration: String((name, role, bindings2, maxNodeCount2, ...startNodes2) => {
            const returnedNodes = [];
            let aborted = false;
            function collect(contextNodes, selector) {
              if (aborted) {
                return;
              }
              for (const contextNode of contextNodes) {
                let match = true;
                if (selector.role) {
                  const role2 = bindings2.getAccessibleRole(contextNode);
                  if (selector.role !== role2) {
                    match = false;
                  }
                }
                if (selector.name) {
                  const name2 = bindings2.getAccessibleName(contextNode);
                  if (selector.name !== name2) {
                    match = false;
                  }
                }
                if (match) {
                  if (maxNodeCount2 !== 0 && returnedNodes.length === maxNodeCount2) {
                    aborted = true;
                    break;
                  }
                  returnedNodes.push(contextNode);
                }
                const childNodes = [];
                for (const child of contextNode.children) {
                  if (child instanceof HTMLElement) {
                    childNodes.push(child);
                  }
                }
                collect(childNodes, selector);
              }
            }
            startNodes2 = startNodes2.length > 0 ? startNodes2 : Array.from(document.documentElement.children).filter((c) => c instanceof HTMLElement);
            collect(startNodes2, {
              role,
              name
            });
            return returnedNodes;
          }),
          argumentsLocalValues: [
            // `name`
            { type: "string", value: locator.value.name || "" },
            // `role`
            { type: "string", value: locator.value.role || "" },
            // `bindings`.
            { handle: bindings.result.handle },
            // `maxNodeCount` with `0` means no limit.
            { type: "number", value: maxNodeCount ?? 0 },
            // `startNodes`
            ...startNodes
          ]
        };
      }
    }
  }, locateNodesByLocator_fn = async function(realm, locator, startNodes, maxNodeCount, serializationOptions) {
    var _a4, _b, _c;
    if (locator.type === "context") {
      if (startNodes.length !== 0) {
        throw new protocol_js_1.InvalidArgumentException("Start nodes are not supported");
      }
      const contextId = locator.value.context;
      if (!contextId) {
        throw new protocol_js_1.InvalidSelectorException("Invalid context");
      }
      const context = __privateGet(this, _browsingContextStorage).getContext(contextId);
      const parent = context.parent;
      if (!parent) {
        throw new protocol_js_1.InvalidArgumentException("This context has no container");
      }
      try {
        const { backendNodeId } = await __privateGet(parent, _cdpTarget).cdpClient.sendCommand("DOM.getFrameOwner", {
          frameId: contextId
        });
        const { object } = await __privateGet(parent, _cdpTarget).cdpClient.sendCommand("DOM.resolveNode", {
          backendNodeId
        });
        const locatorResult2 = await realm.callFunction(`function () { return this; }`, false, { handle: object.objectId }, [], "none", serializationOptions);
        if (locatorResult2.type === "exception") {
          throw new Error("Unknown exception");
        }
        return { nodes: [locatorResult2.result] };
      } catch {
        throw new protocol_js_1.InvalidArgumentException("Context does not exist");
      }
    }
    const locatorDelegate = await __privateMethod(this, _BrowsingContextImpl_instances, getLocatorDelegate_fn).call(this, realm, locator, maxNodeCount, startNodes);
    serializationOptions = {
      ...serializationOptions,
      // The returned object is an array of nodes, so no need in deeper JS serialization.
      maxObjectDepth: 1
    };
    const locatorResult = await realm.callFunction(locatorDelegate.functionDeclaration, false, { type: "undefined" }, locatorDelegate.argumentsLocalValues, "none", serializationOptions);
    if (locatorResult.type !== "success") {
      (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, _a2.LOGGER_PREFIX, "Failed locateNodesByLocator", locatorResult);
      if (
        // CSS selector.
        ((_b = locatorResult.exceptionDetails.text) == null ? void 0 : _b.endsWith("is not a valid selector.")) || // XPath selector.
        ((_c = locatorResult.exceptionDetails.text) == null ? void 0 : _c.endsWith("is not a valid XPath expression."))
      ) {
        throw new protocol_js_1.InvalidSelectorException(`Not valid selector ${typeof locator.value === "string" ? locator.value : JSON.stringify(locator.value)}`);
      }
      if (locatorResult.exceptionDetails.text === "Error: startNodes in css selector should be HTMLElement, Document or DocumentFragment") {
        throw new protocol_js_1.InvalidArgumentException("startNodes in css selector should be HTMLElement, Document or DocumentFragment");
      }
      throw new protocol_js_1.UnknownErrorException(`Unexpected error in selector script: ${locatorResult.exceptionDetails.text}`);
    }
    if (locatorResult.result.type !== "array") {
      throw new protocol_js_1.UnknownErrorException(`Unexpected selector script result type: ${locatorResult.result.type}`);
    }
    const nodes = locatorResult.result.value.map((value) => {
      if (value.type !== "node") {
        throw new protocol_js_1.UnknownErrorException(`Unexpected selector script result element: ${value.type}`);
      }
      return value;
    });
    return { nodes };
  }, __privateAdd(_a3, _BrowsingContextImpl_static), __publicField(_a3, "LOGGER_PREFIX", `${log_js_1.LogType.debug}:browsingContext`), _a3);
  BrowsingContextImpl.BrowsingContextImpl = BrowsingContextImpl$1;
  _a2 = BrowsingContextImpl$1;
  function serializeOrigin(origin) {
    if (["://", ""].includes(origin)) {
      origin = "null";
    }
    return origin;
  }
  function getImageFormatParameters(params) {
    const { quality, type } = params.format ?? {
      type: "image/png"
    };
    switch (type) {
      case "image/png": {
        return { format: "png" };
      }
      case "image/jpeg": {
        return {
          format: "jpeg",
          ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
        };
      }
      case "image/webp": {
        return {
          format: "webp",
          ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
        };
      }
    }
    throw new protocol_js_1.InvalidArgumentException(`Image format '${type}' is not a supported format`);
  }
  function deserializeDOMRect(result) {
    var _a4, _b, _c, _d;
    if (result.type !== "object" || result.value === void 0) {
      return;
    }
    const x = (_a4 = result.value.find(([key]) => {
      return key === "x";
    })) == null ? void 0 : _a4[1];
    const y = (_b = result.value.find(([key]) => {
      return key === "y";
    })) == null ? void 0 : _b[1];
    const height = (_c = result.value.find(([key]) => {
      return key === "height";
    })) == null ? void 0 : _c[1];
    const width = (_d = result.value.find(([key]) => {
      return key === "width";
    })) == null ? void 0 : _d[1];
    if ((x == null ? void 0 : x.type) !== "number" || (y == null ? void 0 : y.type) !== "number" || (height == null ? void 0 : height.type) !== "number" || (width == null ? void 0 : width.type) !== "number") {
      return;
    }
    return {
      x: x.value,
      y: y.value,
      width: width.value,
      height: height.value
    };
  }
  function normalizeRect(box) {
    return {
      ...box.width < 0 ? {
        x: box.x + box.width,
        width: -box.width
      } : {
        x: box.x,
        width: box.width
      },
      ...box.height < 0 ? {
        y: box.y + box.height,
        height: -box.height
      } : {
        y: box.y,
        height: box.height
      }
    };
  }
  function getIntersectionRect(first2, second) {
    first2 = normalizeRect(first2);
    second = normalizeRect(second);
    const x = Math.max(first2.x, second.x);
    const y = Math.max(first2.y, second.y);
    return {
      x,
      y,
      width: Math.max(Math.min(first2.x + first2.width, second.x + second.width) - x, 0),
      height: Math.max(Math.min(first2.y + first2.height, second.y + second.height) - y, 0)
    };
  }
  function parseInteger(value) {
    value = value.trim();
    if (!/^[0-9]+$/.test(value)) {
      throw new protocol_js_1.InvalidArgumentException(`Invalid integer: ${value}`);
    }
    return parseInt(value);
  }
  return BrowsingContextImpl;
}
var WorkerRealm = {};
var hasRequiredWorkerRealm;
function requireWorkerRealm() {
  var _realmType, _ownerRealms, _a2;
  if (hasRequiredWorkerRealm) return WorkerRealm;
  hasRequiredWorkerRealm = 1;
  Object.defineProperty(WorkerRealm, "__esModule", { value: true });
  WorkerRealm.WorkerRealm = void 0;
  const Realm_js_1 = requireRealm();
  let WorkerRealm$1 = (_a2 = class extends Realm_js_1.Realm {
    constructor(cdpClient, eventManager, executionContextId, logger, origin, ownerRealms, realmId, realmStorage, realmType) {
      super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
      __privateAdd(this, _realmType);
      __privateAdd(this, _ownerRealms);
      __privateSet(this, _ownerRealms, ownerRealms);
      __privateSet(this, _realmType, realmType);
      this.initialize();
    }
    get associatedBrowsingContexts() {
      return __privateGet(this, _ownerRealms).flatMap((realm) => realm.associatedBrowsingContexts);
    }
    get realmType() {
      return __privateGet(this, _realmType);
    }
    get source() {
      var _a3;
      return {
        realm: this.realmId,
        // This is a hack to make Puppeteer able to track workers.
        // TODO: remove after Puppeteer tracks workers by owners and use the base version.
        context: (_a3 = this.associatedBrowsingContexts[0]) == null ? void 0 : _a3.id
      };
    }
    get realmInfo() {
      const owners = __privateGet(this, _ownerRealms).map((realm) => realm.realmId);
      const { realmType } = this;
      switch (realmType) {
        case "dedicated-worker": {
          const owner = owners[0];
          if (owner === void 0 || owners.length !== 1) {
            throw new Error("Dedicated worker must have exactly one owner");
          }
          return {
            ...this.baseInfo,
            type: realmType,
            owners: [owner]
          };
        }
        case "service-worker":
        case "shared-worker": {
          return {
            ...this.baseInfo,
            type: realmType
          };
        }
      }
    }
  }, _realmType = new WeakMap(), _ownerRealms = new WeakMap(), _a2);
  WorkerRealm.WorkerRealm = WorkerRealm$1;
  return WorkerRealm;
}
var CdpTarget = {};
var LogManager = {};
var logHelper = {};
var hasRequiredLogHelper;
function requireLogHelper() {
  if (hasRequiredLogHelper) return logHelper;
  hasRequiredLogHelper = 1;
  Object.defineProperty(logHelper, "__esModule", { value: true });
  logHelper.logMessageFormatter = logMessageFormatter;
  logHelper.getRemoteValuesText = getRemoteValuesText;
  const assert_js_1 = requireAssert();
  const specifiers = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
  function isFormatSpecifier(str) {
    return specifiers.some((spec) => str.includes(spec));
  }
  function logMessageFormatter(args) {
    let output = "";
    const argFormat = args[0].value.toString();
    const argValues = args.slice(1, void 0);
    const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join("|"), "g"));
    for (const token of tokens) {
      if (token === void 0 || token === "") {
        continue;
      }
      if (isFormatSpecifier(token)) {
        const arg = argValues.shift();
        (0, assert_js_1.assert)(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
        if (token === "%s") {
          output += stringFromArg(arg);
        } else if (token === "%d" || token === "%i") {
          if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
            output += parseInt(arg.value.toString(), 10);
          } else {
            output += "NaN";
          }
        } else if (token === "%f") {
          if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
            output += parseFloat(arg.value.toString());
          } else {
            output += "NaN";
          }
        } else {
          output += toJson(arg);
        }
      } else {
        output += token;
      }
    }
    if (argValues.length > 0) {
      throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
    }
    return output;
  }
  function toJson(arg) {
    var _a2;
    if (arg.type !== "array" && arg.type !== "bigint" && arg.type !== "date" && arg.type !== "number" && arg.type !== "object" && arg.type !== "string") {
      return stringFromArg(arg);
    }
    if (arg.type === "bigint") {
      return `${arg.value.toString()}n`;
    }
    if (arg.type === "number") {
      return arg.value.toString();
    }
    if (["date", "string"].includes(arg.type)) {
      return JSON.stringify(arg.value);
    }
    if (arg.type === "object") {
      return `{${arg.value.map((pair) => {
        return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
      }).join(",")}}`;
    }
    if (arg.type === "array") {
      return `[${((_a2 = arg.value) == null ? void 0 : _a2.map((val) => toJson(val)).join(",")) ?? ""}]`;
    }
    throw Error(`Invalid value type: ${arg}`);
  }
  function stringFromArg(arg) {
    var _a2, _b, _c, _d;
    if (!Object.hasOwn(arg, "value")) {
      return arg.type;
    }
    switch (arg.type) {
      case "string":
      case "number":
      case "boolean":
      case "bigint":
        return String(arg.value);
      case "regexp":
        return `/${arg.value.pattern}/${arg.value.flags ?? ""}`;
      case "date":
        return new Date(arg.value).toString();
      case "object":
        return `Object(${((_a2 = arg.value) == null ? void 0 : _a2.length) ?? ""})`;
      case "array":
        return `Array(${((_b = arg.value) == null ? void 0 : _b.length) ?? ""})`;
      case "map":
        return `Map(${(_c = arg.value) == null ? void 0 : _c.length})`;
      case "set":
        return `Set(${(_d = arg.value) == null ? void 0 : _d.length})`;
      default:
        return arg.type;
    }
  }
  function getRemoteValuesText(args, formatText) {
    const arg = args[0];
    if (!arg) {
      return "";
    }
    if (arg.type === "string" && isFormatSpecifier(arg.value.toString()) && formatText) {
      return logMessageFormatter(args);
    }
    return args.map((arg2) => {
      return stringFromArg(arg2);
    }).join(" ");
  }
  return logHelper;
}
var hasRequiredLogManager;
function requireLogManager() {
  var _eventManager, _realmStorage, _cdpTarget, _logger, _LogManager_instances, heuristicSerializeArg_fn, initializeEntryAddedEventListener_fn, _LogManager_static, _a3, getExceptionText_fn;
  if (hasRequiredLogManager) return LogManager;
  hasRequiredLogManager = 1;
  var _a2;
  Object.defineProperty(LogManager, "__esModule", { value: true });
  LogManager.LogManager = void 0;
  const protocol_js_1 = requireProtocol();
  const log_js_1 = requireLog();
  const logHelper_js_1 = requireLogHelper();
  function getBidiStackTrace(cdpStackTrace) {
    const stackFrames = cdpStackTrace == null ? void 0 : cdpStackTrace.callFrames.map((callFrame) => {
      return {
        columnNumber: callFrame.columnNumber,
        functionName: callFrame.functionName,
        lineNumber: callFrame.lineNumber,
        url: callFrame.url
      };
    });
    return stackFrames ? { callFrames: stackFrames } : void 0;
  }
  function getLogLevel(consoleApiType) {
    if (["error", "assert"].includes(consoleApiType)) {
      return "error";
    }
    if (["debug", "trace"].includes(consoleApiType)) {
      return "debug";
    }
    if (["warn", "warning"].includes(consoleApiType)) {
      return "warn";
    }
    return "info";
  }
  function getLogMethod(consoleApiType) {
    switch (consoleApiType) {
      case "warning":
        return "warn";
      case "startGroup":
        return "group";
      case "startGroupCollapsed":
        return "groupCollapsed";
      case "endGroup":
        return "groupEnd";
    }
    return consoleApiType;
  }
  let LogManager$1 = (_a3 = class {
    constructor(cdpTarget, realmStorage, eventManager, logger) {
      __privateAdd(this, _LogManager_instances);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _realmStorage);
      __privateAdd(this, _cdpTarget);
      __privateAdd(this, _logger);
      __privateSet(this, _cdpTarget, cdpTarget);
      __privateSet(this, _realmStorage, realmStorage);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _logger, logger);
    }
    static create(cdpTarget, realmStorage, eventManager, logger) {
      var _a4;
      const logManager = new _a2(cdpTarget, realmStorage, eventManager, logger);
      __privateMethod(_a4 = logManager, _LogManager_instances, initializeEntryAddedEventListener_fn).call(_a4);
      return logManager;
    }
  }, _eventManager = new WeakMap(), _realmStorage = new WeakMap(), _cdpTarget = new WeakMap(), _logger = new WeakMap(), _LogManager_instances = new WeakSet(), heuristicSerializeArg_fn = async function(arg, realm) {
    switch (arg.type) {
      // TODO: Implement regexp, array, object, map and set heuristics base on
      //  preview.
      case "undefined":
        return { type: "undefined" };
      case "boolean":
        return { type: "boolean", value: arg.value };
      case "string":
        return { type: "string", value: arg.value };
      case "number":
        return { type: "number", value: arg.unserializableValue ?? arg.value };
      case "bigint":
        if (arg.unserializableValue !== void 0 && arg.unserializableValue[arg.unserializableValue.length - 1] === "n") {
          return {
            type: arg.type,
            value: arg.unserializableValue.slice(0, -1)
          };
        }
        break;
      case "object":
        if (arg.subtype === "null") {
          return { type: "null" };
        }
        break;
    }
    return await realm.serializeCdpObject(
      arg,
      "none"
      /* Script.ResultOwnership.None */
    );
  }, initializeEntryAddedEventListener_fn = function() {
    __privateGet(this, _cdpTarget).cdpClient.on("Runtime.consoleAPICalled", (params) => {
      var _a4;
      const realm = __privateGet(this, _realmStorage).findRealm({
        cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId,
        executionContextId: params.executionContextId
      });
      if (realm === void 0) {
        (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.cdp, params);
        return;
      }
      const argsPromise = Promise.all(params.args.map((arg) => __privateMethod(this, _LogManager_instances, heuristicSerializeArg_fn).call(this, arg, realm)));
      for (const browsingContext of realm.associatedBrowsingContexts) {
        __privateGet(this, _eventManager).registerPromiseEvent(argsPromise.then((args) => ({
          kind: "success",
          value: {
            type: "event",
            method: protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded,
            params: {
              level: getLogLevel(params.type),
              source: realm.source,
              text: (0, logHelper_js_1.getRemoteValuesText)(args, true),
              timestamp: Math.round(params.timestamp),
              stackTrace: getBidiStackTrace(params.stackTrace),
              type: "console",
              method: getLogMethod(params.type),
              args
            }
          }
        }), (error) => ({
          kind: "error",
          error
        })), browsingContext.id, protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded);
      }
    });
    __privateGet(this, _cdpTarget).cdpClient.on("Runtime.exceptionThrown", (params) => {
      var _a4, _b;
      const realm = __privateGet(this, _realmStorage).findRealm({
        cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId,
        executionContextId: params.exceptionDetails.executionContextId
      });
      if (realm === void 0) {
        (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.cdp, params);
        return;
      }
      for (const browsingContext of realm.associatedBrowsingContexts) {
        __privateGet(this, _eventManager).registerPromiseEvent(__privateMethod(_b = _a2, _LogManager_static, getExceptionText_fn).call(_b, params, realm).then((text) => ({
          kind: "success",
          value: {
            type: "event",
            method: protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded,
            params: {
              level: "error",
              source: realm.source,
              text,
              timestamp: Math.round(params.timestamp),
              stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
              type: "javascript"
            }
          }
        }), (error) => ({
          kind: "error",
          error
        })), browsingContext.id, protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded);
      }
    });
  }, _LogManager_static = new WeakSet(), getExceptionText_fn = async function(params, realm) {
    if (!params.exceptionDetails.exception) {
      return params.exceptionDetails.text;
    }
    if (realm === void 0) {
      return JSON.stringify(params.exceptionDetails.exception);
    }
    return await realm.stringifyObject(params.exceptionDetails.exception);
  }, __privateAdd(_a3, _LogManager_static), _a3);
  LogManager.LogManager = LogManager$1;
  _a2 = LogManager$1;
  return LogManager;
}
var hasRequiredCdpTarget;
function requireCdpTarget() {
  var _id, _cdpClient, _browserCdpClient, _parentCdpClient, _realmStorage, _eventManager, _preloadScriptStorage, _browsingContextStorage, _prerenderingDisabled, _networkStorage, _unblocked, _unhandledPromptBehavior, _logger, _deviceAccessEnabled, _cacheDisableState, _fetchDomainStages, _CdpTarget_instances, unblock_fn, restoreFrameTreeState_fn, isExpectedError_fn, setEventListeners_fn, enableFetch_fn, disableFetch_fn, initAndEvaluatePreloadScripts_fn, _a2;
  if (hasRequiredCdpTarget) return CdpTarget;
  hasRequiredCdpTarget = 1;
  Object.defineProperty(CdpTarget, "__esModule", { value: true });
  CdpTarget.CdpTarget = void 0;
  const chromium_bidi_js_1 = requireChromiumBidi();
  const Deferred_js_1 = requireDeferred();
  const EventEmitter_js_1 = requireEventEmitter();
  const log_js_1 = requireLog();
  const BrowsingContextImpl_js_1 = requireBrowsingContextImpl();
  const LogManager_js_1 = requireLogManager();
  let CdpTarget$1 = (_a2 = class extends EventEmitter_js_1.EventEmitter {
    constructor(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger) {
      super();
      __privateAdd(this, _CdpTarget_instances);
      __privateAdd(this, _id);
      __privateAdd(this, _cdpClient);
      __privateAdd(this, _browserCdpClient);
      __privateAdd(this, _parentCdpClient);
      __privateAdd(this, _realmStorage);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _preloadScriptStorage);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _prerenderingDisabled);
      __privateAdd(this, _networkStorage);
      __privateAdd(this, _unblocked, new Deferred_js_1.Deferred());
      __privateAdd(this, _unhandledPromptBehavior);
      __privateAdd(this, _logger);
      __privateAdd(this, _deviceAccessEnabled, false);
      __privateAdd(this, _cacheDisableState, false);
      __privateAdd(this, _fetchDomainStages, {
        request: false,
        response: false,
        auth: false
      });
      __privateSet(this, _id, targetId);
      __privateSet(this, _cdpClient, cdpClient);
      __privateSet(this, _browserCdpClient, browserCdpClient);
      __privateSet(this, _parentCdpClient, parentCdpClient);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _realmStorage, realmStorage);
      __privateSet(this, _preloadScriptStorage, preloadScriptStorage);
      __privateSet(this, _networkStorage, networkStorage);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _prerenderingDisabled, prerenderingDisabled);
      __privateSet(this, _unhandledPromptBehavior, unhandledPromptBehavior);
      __privateSet(this, _logger, logger);
    }
    static create(targetId, cdpClient, browserCdpClient, parentCdpClient, realmStorage, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger) {
      var _a3, _b;
      const cdpTarget = new _a2(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger);
      LogManager_js_1.LogManager.create(cdpTarget, realmStorage, eventManager, logger);
      __privateMethod(_a3 = cdpTarget, _CdpTarget_instances, setEventListeners_fn).call(_a3);
      void __privateMethod(_b = cdpTarget, _CdpTarget_instances, unblock_fn).call(_b);
      return cdpTarget;
    }
    /** Returns a deferred that resolves when the target is unblocked. */
    get unblocked() {
      return __privateGet(this, _unblocked);
    }
    get id() {
      return __privateGet(this, _id);
    }
    get cdpClient() {
      return __privateGet(this, _cdpClient);
    }
    get parentCdpClient() {
      return __privateGet(this, _parentCdpClient);
    }
    get browserCdpClient() {
      return __privateGet(this, _browserCdpClient);
    }
    /** Needed for CDP escape path. */
    get cdpSessionId() {
      return __privateGet(this, _cdpClient).sessionId;
    }
    async toggleFetchIfNeeded() {
      const stages = __privateGet(this, _networkStorage).getInterceptionStages(this.topLevelId);
      if (__privateGet(this, _fetchDomainStages).request === stages.request && __privateGet(this, _fetchDomainStages).response === stages.response && __privateGet(this, _fetchDomainStages).auth === stages.auth) {
        return;
      }
      const patterns = [];
      __privateSet(this, _fetchDomainStages, stages);
      if (stages.request || stages.auth) {
        patterns.push({
          urlPattern: "*",
          requestStage: "Request"
        });
      }
      if (stages.response) {
        patterns.push({
          urlPattern: "*",
          requestStage: "Response"
        });
      }
      if (patterns.length) {
        await __privateGet(this, _cdpClient).sendCommand("Fetch.enable", {
          patterns,
          handleAuthRequests: stages.auth
        });
      } else {
        const blockedRequest = __privateGet(this, _networkStorage).getRequestsByTarget(this).filter((request) => request.interceptPhase);
        void Promise.allSettled(blockedRequest.map((request) => request.waitNextPhase)).then(async () => {
          const blockedRequest2 = __privateGet(this, _networkStorage).getRequestsByTarget(this).filter((request) => request.interceptPhase);
          if (blockedRequest2.length) {
            return await this.toggleFetchIfNeeded();
          }
          return await __privateGet(this, _cdpClient).sendCommand("Fetch.disable");
        }).catch((error) => {
          var _a3;
          (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.bidi, "Disable failed", error);
        });
      }
    }
    /**
     * Toggles CDP "Fetch" domain and enable/disable network cache.
     */
    async toggleNetworkIfNeeded() {
      var _a3;
      try {
        await Promise.all([
          this.toggleSetCacheDisabled(),
          this.toggleFetchIfNeeded()
        ]);
      } catch (err) {
        (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, err);
        if (!__privateMethod(this, _CdpTarget_instances, isExpectedError_fn).call(this, err)) {
          throw err;
        }
      }
    }
    async toggleSetCacheDisabled(disable) {
      var _a3;
      const defaultCacheDisabled = __privateGet(this, _networkStorage).defaultCacheBehavior === "bypass";
      const cacheDisabled = disable ?? defaultCacheDisabled;
      if (__privateGet(this, _cacheDisableState) === cacheDisabled) {
        return;
      }
      __privateSet(this, _cacheDisableState, cacheDisabled);
      try {
        await __privateGet(this, _cdpClient).sendCommand("Network.setCacheDisabled", {
          cacheDisabled
        });
      } catch (err) {
        (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, err);
        __privateSet(this, _cacheDisableState, !cacheDisabled);
        if (!__privateMethod(this, _CdpTarget_instances, isExpectedError_fn).call(this, err)) {
          throw err;
        }
      }
    }
    async toggleDeviceAccessIfNeeded() {
      var _a3;
      const enabled = this.isSubscribedTo(chromium_bidi_js_1.Bluetooth.EventNames.RequestDevicePromptUpdated);
      if (__privateGet(this, _deviceAccessEnabled) === enabled) {
        return;
      }
      __privateSet(this, _deviceAccessEnabled, enabled);
      try {
        await __privateGet(this, _cdpClient).sendCommand(enabled ? "DeviceAccess.enable" : "DeviceAccess.disable");
      } catch (err) {
        (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, err);
        __privateSet(this, _deviceAccessEnabled, !enabled);
        if (!__privateMethod(this, _CdpTarget_instances, isExpectedError_fn).call(this, err)) {
          throw err;
        }
      }
    }
    async toggleNetwork() {
      var _a3;
      const stages = __privateGet(this, _networkStorage).getInterceptionStages(this.topLevelId);
      const fetchEnable = Object.values(stages).some((value) => value);
      const fetchChanged = __privateGet(this, _fetchDomainStages).request !== stages.request || __privateGet(this, _fetchDomainStages).response !== stages.response || __privateGet(this, _fetchDomainStages).auth !== stages.auth;
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugInfo, "Toggle Network", `Fetch (${fetchEnable}) ${fetchChanged}`);
      if (fetchEnable && fetchChanged) {
        await __privateMethod(this, _CdpTarget_instances, enableFetch_fn).call(this, stages);
      }
      if (!fetchEnable && fetchChanged) {
        await __privateMethod(this, _CdpTarget_instances, disableFetch_fn).call(this);
      }
    }
    /**
     * All the ProxyChannels from all the preload scripts of the given
     * BrowsingContext.
     */
    getChannels() {
      return __privateGet(this, _preloadScriptStorage).find().flatMap((script) => script.channels);
    }
    get topLevelId() {
      return __privateGet(this, _browsingContextStorage).findTopLevelContextId(this.id) ?? this.id;
    }
    isSubscribedTo(moduleOrEvent) {
      return __privateGet(this, _eventManager).subscriptionManager.isSubscribedTo(moduleOrEvent, this.topLevelId);
    }
  }, _id = new WeakMap(), _cdpClient = new WeakMap(), _browserCdpClient = new WeakMap(), _parentCdpClient = new WeakMap(), _realmStorage = new WeakMap(), _eventManager = new WeakMap(), _preloadScriptStorage = new WeakMap(), _browsingContextStorage = new WeakMap(), _prerenderingDisabled = new WeakMap(), _networkStorage = new WeakMap(), _unblocked = new WeakMap(), _unhandledPromptBehavior = new WeakMap(), _logger = new WeakMap(), _deviceAccessEnabled = new WeakMap(), _cacheDisableState = new WeakMap(), _fetchDomainStages = new WeakMap(), _CdpTarget_instances = new WeakSet(), unblock_fn = async function() {
    var _a3;
    try {
      await Promise.all([
        __privateGet(this, _cdpClient).sendCommand("Page.enable"),
        // There can be some existing frames in the target, if reconnecting to an
        // existing browser instance, e.g. via Puppeteer. Need to restore the browsing
        // contexts for the frames to correctly handle further events, like
        // `Runtime.executionContextCreated`.
        // It's important to schedule this task together with enabling domains commands to
        // prepare the tree before the events (e.g. Runtime.executionContextCreated) start
        // coming.
        // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2282
        __privateGet(this, _cdpClient).sendCommand("Page.getFrameTree").then((frameTree) => __privateMethod(this, _CdpTarget_instances, restoreFrameTreeState_fn).call(this, frameTree.frameTree)),
        __privateGet(this, _cdpClient).sendCommand("Runtime.enable"),
        __privateGet(this, _cdpClient).sendCommand("Page.setLifecycleEventsEnabled", {
          enabled: true
        }),
        __privateGet(this, _cdpClient).sendCommand("Page.setPrerenderingAllowed", {
          isAllowed: !__privateGet(this, _prerenderingDisabled)
        }).catch(() => {
        }),
        // Enabling CDP Network domain is required for navigation detection:
        // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2856.
        __privateGet(this, _cdpClient).sendCommand("Network.enable").then(() => this.toggleNetworkIfNeeded()),
        __privateGet(this, _cdpClient).sendCommand("Target.setAutoAttach", {
          autoAttach: true,
          waitForDebuggerOnStart: true,
          flatten: true
        }),
        __privateMethod(this, _CdpTarget_instances, initAndEvaluatePreloadScripts_fn).call(this),
        __privateGet(this, _cdpClient).sendCommand("Runtime.runIfWaitingForDebugger"),
        // Resume tab execution as well if it was paused by the debugger.
        __privateGet(this, _parentCdpClient).sendCommand("Runtime.runIfWaitingForDebugger"),
        this.toggleDeviceAccessIfNeeded()
      ]);
    } catch (error) {
      (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, "Failed to unblock target", error);
      if (!__privateGet(this, _cdpClient).isCloseError(error)) {
        __privateGet(this, _unblocked).resolve({
          kind: "error",
          error
        });
        return;
      }
    }
    __privateGet(this, _unblocked).resolve({
      kind: "success",
      value: void 0
    });
  }, restoreFrameTreeState_fn = function(frameTree) {
    var _a3;
    const frame = frameTree.frame;
    const maybeContext = __privateGet(this, _browsingContextStorage).findContext(frame.id);
    if (maybeContext !== void 0) {
      if (maybeContext.parentId === null && frame.parentId !== null && frame.parentId !== void 0) {
        maybeContext.parentId = frame.parentId;
      }
    }
    if (maybeContext === void 0 && frame.parentId !== void 0) {
      const parentBrowsingContext = __privateGet(this, _browsingContextStorage).getContext(frame.parentId);
      BrowsingContextImpl_js_1.BrowsingContextImpl.create(frame.id, frame.parentId, parentBrowsingContext.userContext, parentBrowsingContext.cdpTarget, __privateGet(this, _eventManager), __privateGet(this, _browsingContextStorage), __privateGet(this, _realmStorage), frame.url, void 0, __privateGet(this, _unhandledPromptBehavior), __privateGet(this, _logger));
    }
    (_a3 = frameTree.childFrames) == null ? void 0 : _a3.map((frameTree2) => __privateMethod(this, _CdpTarget_instances, restoreFrameTreeState_fn).call(this, frameTree2));
  }, /**
   * Heuristic checking if the error is due to the session being closed. If so, ignore the
   * error.
   */
  isExpectedError_fn = function(err) {
    const error = err;
    return error.code === -32001 && error.message === "Session with given id not found." || __privateGet(this, _cdpClient).isCloseError(err);
  }, setEventListeners_fn = function() {
    __privateGet(this, _cdpClient).on("Network.requestWillBeSent", (eventParams) => {
      if (eventParams.loaderId === eventParams.requestId) {
        this.emit("frameStartedNavigating", {
          loaderId: eventParams.loaderId,
          url: eventParams.request.url,
          frameId: eventParams.frameId
        });
      }
    });
    __privateGet(this, _cdpClient).on("*", (event, params) => {
      if (typeof event !== "string") {
        return;
      }
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: `goog:cdp.${event}`,
        params: {
          event,
          params,
          session: this.cdpSessionId
        }
      }, this.id);
      __privateGet(this, _eventManager).registerEvent({
        type: "event",
        method: `cdp.${event}`,
        params: {
          event,
          params,
          session: this.cdpSessionId
        }
      }, this.id);
    });
  }, enableFetch_fn = async function(stages) {
    const patterns = [];
    if (stages.request || stages.auth) {
      patterns.push({
        urlPattern: "*",
        requestStage: "Request"
      });
    }
    if (stages.response) {
      patterns.push({
        urlPattern: "*",
        requestStage: "Response"
      });
    }
    if (patterns.length) {
      const oldStages = __privateGet(this, _fetchDomainStages);
      __privateSet(this, _fetchDomainStages, stages);
      try {
        await __privateGet(this, _cdpClient).sendCommand("Fetch.enable", {
          patterns,
          handleAuthRequests: stages.auth
        });
      } catch {
        __privateSet(this, _fetchDomainStages, oldStages);
      }
    }
  }, disableFetch_fn = async function() {
    const blockedRequest = __privateGet(this, _networkStorage).getRequestsByTarget(this).filter((request) => request.interceptPhase);
    if (blockedRequest.length === 0) {
      __privateSet(this, _fetchDomainStages, {
        request: false,
        response: false,
        auth: false
      });
      await __privateGet(this, _cdpClient).sendCommand("Fetch.disable");
    }
  }, initAndEvaluatePreloadScripts_fn = async function() {
    await Promise.all(__privateGet(this, _preloadScriptStorage).find({
      // Needed for OOPIF
      targetId: this.topLevelId,
      global: true
    }).map((script) => {
      return script.initInTarget(this, true);
    }));
  }, _a2);
  CdpTarget.CdpTarget = CdpTarget$1;
  return CdpTarget;
}
var hasRequiredCdpTargetManager;
function requireCdpTargetManager() {
  var _browserCdpClient, _cdpConnection, _targetKeysToBeIgnoredByAutoAttach, _selfTargetId, _eventManager, _browsingContextStorage, _networkStorage, _bluetoothProcessor, _preloadScriptStorage, _realmStorage, _defaultUserContextId, _logger, _unhandledPromptBehavior, _prerenderingDisabled, _CdpTargetManager_instances, setEventListeners_fn, handleFrameAttachedEvent_fn, handleFrameDetachedEvent_fn, handleFrameSubtreeWillBeDetached_fn, handleAttachedToTargetEvent_fn, findFrameParentId_fn, createCdpTarget_fn, _workers4, handleWorkerTarget_fn, handleDetachedFromTargetEvent_fn, handleTargetInfoChangedEvent_fn, handleTargetCrashedEvent_fn, _a2;
  if (hasRequiredCdpTargetManager) return CdpTargetManager;
  hasRequiredCdpTargetManager = 1;
  Object.defineProperty(CdpTargetManager, "__esModule", { value: true });
  CdpTargetManager.CdpTargetManager = void 0;
  const log_js_1 = requireLog();
  const BrowsingContextImpl_js_1 = requireBrowsingContextImpl();
  const WorkerRealm_js_1 = requireWorkerRealm();
  const CdpTarget_js_1 = requireCdpTarget();
  const cdpToBidiTargetTypes = {
    service_worker: "service-worker",
    shared_worker: "shared-worker",
    worker: "dedicated-worker"
  };
  let CdpTargetManager$1 = (_a2 = class {
    constructor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, bluetoothProcessor, preloadScriptStorage, defaultUserContextId, prerenderingDisabled, unhandledPromptBehavior, logger) {
      __privateAdd(this, _CdpTargetManager_instances);
      __privateAdd(this, _browserCdpClient);
      __privateAdd(this, _cdpConnection);
      __privateAdd(this, _targetKeysToBeIgnoredByAutoAttach, /* @__PURE__ */ new Set());
      __privateAdd(this, _selfTargetId);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _networkStorage);
      __privateAdd(this, _bluetoothProcessor);
      __privateAdd(this, _preloadScriptStorage);
      __privateAdd(this, _realmStorage);
      __privateAdd(this, _defaultUserContextId);
      __privateAdd(this, _logger);
      __privateAdd(this, _unhandledPromptBehavior);
      __privateAdd(this, _prerenderingDisabled);
      __privateAdd(this, _workers4, /* @__PURE__ */ new Map());
      __privateSet(this, _cdpConnection, cdpConnection);
      __privateSet(this, _browserCdpClient, browserCdpClient);
      __privateGet(this, _targetKeysToBeIgnoredByAutoAttach).add(selfTargetId);
      __privateSet(this, _selfTargetId, selfTargetId);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _preloadScriptStorage, preloadScriptStorage);
      __privateSet(this, _networkStorage, networkStorage);
      __privateSet(this, _bluetoothProcessor, bluetoothProcessor);
      __privateSet(this, _realmStorage, realmStorage);
      __privateSet(this, _defaultUserContextId, defaultUserContextId);
      __privateSet(this, _prerenderingDisabled, prerenderingDisabled);
      __privateSet(this, _unhandledPromptBehavior, unhandledPromptBehavior);
      __privateSet(this, _logger, logger);
      __privateMethod(this, _CdpTargetManager_instances, setEventListeners_fn).call(this, browserCdpClient);
    }
  }, _browserCdpClient = new WeakMap(), _cdpConnection = new WeakMap(), _targetKeysToBeIgnoredByAutoAttach = new WeakMap(), _selfTargetId = new WeakMap(), _eventManager = new WeakMap(), _browsingContextStorage = new WeakMap(), _networkStorage = new WeakMap(), _bluetoothProcessor = new WeakMap(), _preloadScriptStorage = new WeakMap(), _realmStorage = new WeakMap(), _defaultUserContextId = new WeakMap(), _logger = new WeakMap(), _unhandledPromptBehavior = new WeakMap(), _prerenderingDisabled = new WeakMap(), _CdpTargetManager_instances = new WeakSet(), /**
   * This method is called for each CDP session, since this class is responsible
   * for creating and destroying all targets and browsing contexts.
   */
  setEventListeners_fn = function(cdpClient) {
    cdpClient.on("Target.attachedToTarget", (params) => {
      __privateMethod(this, _CdpTargetManager_instances, handleAttachedToTargetEvent_fn).call(this, params, cdpClient);
    });
    cdpClient.on("Target.detachedFromTarget", __privateMethod(this, _CdpTargetManager_instances, handleDetachedFromTargetEvent_fn).bind(this));
    cdpClient.on("Target.targetInfoChanged", __privateMethod(this, _CdpTargetManager_instances, handleTargetInfoChangedEvent_fn).bind(this));
    cdpClient.on("Inspector.targetCrashed", () => {
      __privateMethod(this, _CdpTargetManager_instances, handleTargetCrashedEvent_fn).call(this, cdpClient);
    });
    cdpClient.on("Page.frameAttached", __privateMethod(this, _CdpTargetManager_instances, handleFrameAttachedEvent_fn).bind(this));
    cdpClient.on("Page.frameDetached", __privateMethod(this, _CdpTargetManager_instances, handleFrameDetachedEvent_fn).bind(this));
    cdpClient.on("Page.frameSubtreeWillBeDetached", __privateMethod(this, _CdpTargetManager_instances, handleFrameSubtreeWillBeDetached_fn).bind(this));
  }, handleFrameAttachedEvent_fn = function(params) {
    const parentBrowsingContext = __privateGet(this, _browsingContextStorage).findContext(params.parentFrameId);
    if (parentBrowsingContext !== void 0) {
      BrowsingContextImpl_js_1.BrowsingContextImpl.create(
        params.frameId,
        params.parentFrameId,
        parentBrowsingContext.userContext,
        parentBrowsingContext.cdpTarget,
        __privateGet(this, _eventManager),
        __privateGet(this, _browsingContextStorage),
        __privateGet(this, _realmStorage),
        // At this point, we don't know the URL of the frame yet, so it will be updated
        // later.
        "about:blank",
        void 0,
        __privateGet(this, _unhandledPromptBehavior),
        __privateGet(this, _logger)
      );
    }
  }, handleFrameDetachedEvent_fn = function(params) {
    var _a3;
    if (params.reason === "swap") {
      return;
    }
    (_a3 = __privateGet(this, _browsingContextStorage).findContext(params.frameId)) == null ? void 0 : _a3.dispose(true);
  }, handleFrameSubtreeWillBeDetached_fn = function(params) {
    var _a3;
    (_a3 = __privateGet(this, _browsingContextStorage).findContext(params.frameId)) == null ? void 0 : _a3.dispose(true);
  }, handleAttachedToTargetEvent_fn = function(params, parentSessionCdpClient) {
    const { sessionId, targetInfo } = params;
    const targetCdpClient = __privateGet(this, _cdpConnection).getCdpClient(sessionId);
    const detach = async () => {
      await targetCdpClient.sendCommand("Runtime.runIfWaitingForDebugger").then(() => parentSessionCdpClient.sendCommand("Target.detachFromTarget", params)).catch((error) => {
        var _a3;
        return (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, error);
      });
    };
    if (__privateGet(this, _selfTargetId) === targetInfo.targetId) {
      void detach();
      return;
    }
    const targetKey = targetInfo.type === "service_worker" ? `${parentSessionCdpClient.sessionId}_${targetInfo.targetId}` : targetInfo.targetId;
    if (__privateGet(this, _targetKeysToBeIgnoredByAutoAttach).has(targetKey)) {
      return;
    }
    __privateGet(this, _targetKeysToBeIgnoredByAutoAttach).add(targetKey);
    switch (targetInfo.type) {
      case "tab":
        __privateMethod(this, _CdpTargetManager_instances, setEventListeners_fn).call(this, targetCdpClient);
        void (async () => {
          await targetCdpClient.sendCommand("Target.setAutoAttach", {
            autoAttach: true,
            waitForDebuggerOnStart: true,
            flatten: true
          });
        })();
        return;
      case "page":
      case "iframe": {
        const cdpTarget = __privateMethod(this, _CdpTargetManager_instances, createCdpTarget_fn).call(this, targetCdpClient, parentSessionCdpClient, targetInfo);
        const maybeContext = __privateGet(this, _browsingContextStorage).findContext(targetInfo.targetId);
        if (maybeContext && targetInfo.type === "iframe") {
          maybeContext.updateCdpTarget(cdpTarget);
        } else {
          const parentId = __privateMethod(this, _CdpTargetManager_instances, findFrameParentId_fn).call(this, targetInfo, parentSessionCdpClient.sessionId);
          const userContext = targetInfo.browserContextId && targetInfo.browserContextId !== __privateGet(this, _defaultUserContextId) ? targetInfo.browserContextId : "default";
          BrowsingContextImpl_js_1.BrowsingContextImpl.create(
            targetInfo.targetId,
            parentId,
            userContext,
            cdpTarget,
            __privateGet(this, _eventManager),
            __privateGet(this, _browsingContextStorage),
            __privateGet(this, _realmStorage),
            // Hack: when a new target created, CDP emits targetInfoChanged with an empty
            // url, and navigates it to about:blank later. When the event is emitted for
            // an existing target (reconnect), the url is already known, and navigation
            // events will not be emitted anymore. Replacing empty url with `about:blank`
            // allows to handle both cases in the same way.
            // "7.3.2.1 Creating browsing contexts".
            // https://html.spec.whatwg.org/multipage/document-sequences.html#creating-browsing-contexts
            // TODO: check who to deal with non-null creator and its `creatorOrigin`.
            targetInfo.url === "" ? "about:blank" : targetInfo.url,
            targetInfo.openerFrameId ?? targetInfo.openerId,
            __privateGet(this, _unhandledPromptBehavior),
            __privateGet(this, _logger)
          );
        }
        return;
      }
      case "service_worker":
      case "worker": {
        const realm = __privateGet(this, _realmStorage).findRealm({
          cdpSessionId: parentSessionCdpClient.sessionId
        });
        if (!realm) {
          void detach();
          return;
        }
        const cdpTarget = __privateMethod(this, _CdpTargetManager_instances, createCdpTarget_fn).call(this, targetCdpClient, parentSessionCdpClient, targetInfo);
        __privateMethod(this, _CdpTargetManager_instances, handleWorkerTarget_fn).call(this, cdpToBidiTargetTypes[targetInfo.type], cdpTarget, realm);
        return;
      }
      // In CDP, we only emit shared workers on the browser and not the set of
      // frames that use the shared worker. If we change this in the future to
      // behave like service workers (emits on both browser and frame targets),
      // we can remove this block and merge service workers with the above one.
      case "shared_worker": {
        const cdpTarget = __privateMethod(this, _CdpTargetManager_instances, createCdpTarget_fn).call(this, targetCdpClient, parentSessionCdpClient, targetInfo);
        __privateMethod(this, _CdpTargetManager_instances, handleWorkerTarget_fn).call(this, cdpToBidiTargetTypes[targetInfo.type], cdpTarget);
        return;
      }
    }
    void detach();
  }, /** Try to find the parent browsing context ID for the given attached target. */
  findFrameParentId_fn = function(targetInfo, parentSessionId) {
    var _a3;
    if (targetInfo.type !== "iframe") {
      return null;
    }
    const parentId = targetInfo.openerFrameId ?? targetInfo.openerId;
    if (parentId !== void 0) {
      return parentId;
    }
    if (parentSessionId !== void 0) {
      return ((_a3 = __privateGet(this, _browsingContextStorage).findContextBySession(parentSessionId)) == null ? void 0 : _a3.id) ?? null;
    }
    return null;
  }, createCdpTarget_fn = function(targetCdpClient, parentCdpClient, targetInfo) {
    __privateMethod(this, _CdpTargetManager_instances, setEventListeners_fn).call(this, targetCdpClient);
    const target = CdpTarget_js_1.CdpTarget.create(targetInfo.targetId, targetCdpClient, __privateGet(this, _browserCdpClient), parentCdpClient, __privateGet(this, _realmStorage), __privateGet(this, _eventManager), __privateGet(this, _preloadScriptStorage), __privateGet(this, _browsingContextStorage), __privateGet(this, _networkStorage), __privateGet(this, _prerenderingDisabled), __privateGet(this, _unhandledPromptBehavior), __privateGet(this, _logger));
    __privateGet(this, _networkStorage).onCdpTargetCreated(target);
    __privateGet(this, _bluetoothProcessor).onCdpTargetCreated(target);
    return target;
  }, _workers4 = new WeakMap(), handleWorkerTarget_fn = function(realmType, cdpTarget, ownerRealm) {
    cdpTarget.cdpClient.on("Runtime.executionContextCreated", (params) => {
      const { uniqueId, id, origin } = params.context;
      const workerRealm = new WorkerRealm_js_1.WorkerRealm(cdpTarget.cdpClient, __privateGet(this, _eventManager), id, __privateGet(this, _logger), (0, BrowsingContextImpl_js_1.serializeOrigin)(origin), ownerRealm ? [ownerRealm] : [], uniqueId, __privateGet(this, _realmStorage), realmType);
      __privateGet(this, _workers4).set(cdpTarget.cdpSessionId, workerRealm);
    });
  }, handleDetachedFromTargetEvent_fn = function({ sessionId, targetId }) {
    if (targetId) {
      __privateGet(this, _preloadScriptStorage).find({ targetId }).map((preloadScript) => {
        preloadScript.dispose(targetId);
      });
    }
    const context = __privateGet(this, _browsingContextStorage).findContextBySession(sessionId);
    if (context) {
      context.dispose(true);
      return;
    }
    const worker = __privateGet(this, _workers4).get(sessionId);
    if (worker) {
      __privateGet(this, _realmStorage).deleteRealms({
        cdpSessionId: worker.cdpClient.sessionId
      });
    }
  }, handleTargetInfoChangedEvent_fn = function(params) {
    const context = __privateGet(this, _browsingContextStorage).findContext(params.targetInfo.targetId);
    if (context) {
      context.onTargetInfoChanged(params);
    }
  }, handleTargetCrashedEvent_fn = function(cdpClient) {
    const realms = __privateGet(this, _realmStorage).findRealms({
      cdpSessionId: cdpClient.sessionId
    });
    for (const realm of realms) {
      realm.dispose();
    }
  }, _a2);
  CdpTargetManager.CdpTargetManager = CdpTargetManager$1;
  return CdpTargetManager;
}
var BrowsingContextStorage = {};
var hasRequiredBrowsingContextStorage;
function requireBrowsingContextStorage() {
  var _contexts, _eventEmitter, _a2;
  if (hasRequiredBrowsingContextStorage) return BrowsingContextStorage;
  hasRequiredBrowsingContextStorage = 1;
  Object.defineProperty(BrowsingContextStorage, "__esModule", { value: true });
  BrowsingContextStorage.BrowsingContextStorage = void 0;
  const protocol_js_1 = requireProtocol();
  const EventEmitter_js_1 = requireEventEmitter();
  let BrowsingContextStorage$1 = (_a2 = class {
    constructor() {
      /** Map from context ID to context implementation. */
      __privateAdd(this, _contexts, /* @__PURE__ */ new Map());
      /** Event emitter for browsing context storage eventsis not expected to be exposed to
       * the outside world. */
      __privateAdd(this, _eventEmitter, new EventEmitter_js_1.EventEmitter());
    }
    /** Gets all top-level contexts, i.e. those with no parent. */
    getTopLevelContexts() {
      return this.getAllContexts().filter((context) => context.isTopLevelContext());
    }
    /** Gets all contexts. */
    getAllContexts() {
      return Array.from(__privateGet(this, _contexts).values());
    }
    /** Deletes the context with the given ID. */
    deleteContextById(id) {
      __privateGet(this, _contexts).delete(id);
    }
    /** Deletes the given context. */
    deleteContext(context) {
      __privateGet(this, _contexts).delete(context.id);
    }
    /** Tracks the given context. */
    addContext(context) {
      __privateGet(this, _contexts).set(context.id, context);
      __privateGet(this, _eventEmitter).emit("added", {
        browsingContext: context
      });
    }
    /**
     * Waits for a context with the given ID to be added and returns it.
     */
    waitForContext(browsingContextId) {
      if (__privateGet(this, _contexts).has(browsingContextId)) {
        return Promise.resolve(this.getContext(browsingContextId));
      }
      return new Promise((resolve) => {
        const listener = (event) => {
          if (event.browsingContext.id === browsingContextId) {
            __privateGet(this, _eventEmitter).off("added", listener);
            resolve(event.browsingContext);
          }
        };
        __privateGet(this, _eventEmitter).on("added", listener);
      });
    }
    /** Returns true whether there is an existing context with the given ID. */
    hasContext(id) {
      return __privateGet(this, _contexts).has(id);
    }
    /** Gets the context with the given ID, if any. */
    findContext(id) {
      return __privateGet(this, _contexts).get(id);
    }
    /** Returns the top-level context ID of the given context, if any. */
    findTopLevelContextId(id) {
      if (id === null) {
        return null;
      }
      const maybeContext = this.findContext(id);
      if (!maybeContext) {
        return null;
      }
      const parentId = maybeContext.parentId ?? null;
      if (parentId === null) {
        return id;
      }
      return this.findTopLevelContextId(parentId);
    }
    findContextBySession(sessionId) {
      for (const context of __privateGet(this, _contexts).values()) {
        if (context.cdpTarget.cdpSessionId === sessionId) {
          return context;
        }
      }
      return;
    }
    /** Gets the context with the given ID, if any, otherwise throws. */
    getContext(id) {
      const result = this.findContext(id);
      if (result === void 0) {
        throw new protocol_js_1.NoSuchFrameException(`Context ${id} not found`);
      }
      return result;
    }
    verifyTopLevelContextsList(contexts) {
      const foundContexts = /* @__PURE__ */ new Set();
      if (!contexts) {
        return foundContexts;
      }
      for (const contextId of contexts) {
        const context = this.getContext(contextId);
        if (context.isTopLevelContext()) {
          foundContexts.add(context);
        } else {
          throw new protocol_js_1.InvalidArgumentException(`Non top-level context '${contextId}' given.`);
        }
      }
      return foundContexts;
    }
  }, _contexts = new WeakMap(), _eventEmitter = new WeakMap(), _a2);
  BrowsingContextStorage.BrowsingContextStorage = BrowsingContextStorage$1;
  return BrowsingContextStorage;
}
var NetworkStorage = {};
var NetworkRequest = {};
var DefaultMap = {};
var hasRequiredDefaultMap;
function requireDefaultMap() {
  var _getDefaultValue, _a2;
  if (hasRequiredDefaultMap) return DefaultMap;
  hasRequiredDefaultMap = 1;
  Object.defineProperty(DefaultMap, "__esModule", { value: true });
  DefaultMap.DefaultMap = void 0;
  let DefaultMap$1 = (_a2 = class extends Map {
    constructor(getDefaultValue, entries) {
      super(entries);
      /** The default value to return whenever a key is not present in the map. */
      __privateAdd(this, _getDefaultValue);
      __privateSet(this, _getDefaultValue, getDefaultValue);
    }
    get(key) {
      if (!this.has(key)) {
        this.set(key, __privateGet(this, _getDefaultValue).call(this, key));
      }
      return super.get(key);
    }
  }, _getDefaultValue = new WeakMap(), _a2);
  DefaultMap.DefaultMap = DefaultMap$1;
  return DefaultMap;
}
var hasRequiredNetworkRequest;
function requireNetworkRequest() {
  var _a3, _id, _fetchId, _interceptPhase, _servedFromCache, _redirectCount, _request2, _requestOverrides, _responseOverrides, _response2, _eventManager, _networkStorage, _cdpTarget, _logger, _emittedEvents, _NetworkRequest_instances, isDataUrl_fn, method_get, navigationId_get, cookies_get, bodySize_get, context_get, statusCode_get, requestHeaders_get, authChallenges_get, timings_get, phaseChanged_fn, interceptsInPhase_fn, isBlockedInPhase_fn, emitEventsIfReady_fn, continueRequest_fn, continueResponse_fn, continueWithAuth_fn, emitEvent_fn, getBaseEventParams_fn, getResponseEventParams_fn, getRequestData_fn, getDestination_fn, getInitiatorType_fn, getBeforeRequestEvent_fn, getResponseStartedEvent_fn, getResponseReceivedEvent_fn, isIgnoredEvent_fn, getOverrideHeader_fn, _NetworkRequest_static, getInitiator_fn;
  if (hasRequiredNetworkRequest) return NetworkRequest;
  hasRequiredNetworkRequest = 1;
  var _a2;
  Object.defineProperty(NetworkRequest, "__esModule", { value: true });
  NetworkRequest.NetworkRequest = void 0;
  const protocol_js_1 = requireProtocol();
  const assert_js_1 = requireAssert();
  const DefaultMap_js_1 = requireDefaultMap();
  const Deferred_js_1 = requireDeferred();
  const log_js_1 = requireLog();
  const NetworkUtils_js_1 = requireNetworkUtils();
  const REALM_REGEX = new RegExp('(?<=realm=").*(?=")');
  let NetworkRequest$1 = (_a3 = class {
    constructor(id, eventManager, networkStorage, cdpTarget, redirectCount = 0, logger) {
      __privateAdd(this, _NetworkRequest_instances);
      /**
       * Each network request has an associated request id, which is a string
       * uniquely identifying that request.
       *
       * The identifier for a request resulting from a redirect matches that of the
       * request that initiated it.
       */
      __privateAdd(this, _id);
      __privateAdd(this, _fetchId);
      /**
       * Indicates the network intercept phase, if the request is currently blocked.
       * Undefined necessarily implies that the request is not blocked.
       */
      __privateAdd(this, _interceptPhase);
      __privateAdd(this, _servedFromCache, false);
      __privateAdd(this, _redirectCount);
      __privateAdd(this, _request2, {});
      __privateAdd(this, _requestOverrides);
      __privateAdd(this, _responseOverrides);
      __privateAdd(this, _response2, {});
      __privateAdd(this, _eventManager);
      __privateAdd(this, _networkStorage);
      __privateAdd(this, _cdpTarget);
      __privateAdd(this, _logger);
      __privateAdd(this, _emittedEvents, {
        [protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.FetchError]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.ResponseCompleted]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted]: false
      });
      __publicField(this, "waitNextPhase", new Deferred_js_1.Deferred());
      __privateSet(this, _id, id);
      __privateSet(this, _eventManager, eventManager);
      __privateSet(this, _networkStorage, networkStorage);
      __privateSet(this, _cdpTarget, cdpTarget);
      __privateSet(this, _redirectCount, redirectCount);
      __privateSet(this, _logger, logger);
    }
    get id() {
      return __privateGet(this, _id);
    }
    get fetchId() {
      return __privateGet(this, _fetchId);
    }
    /**
     * When blocked returns the phase for it
     */
    get interceptPhase() {
      return __privateGet(this, _interceptPhase);
    }
    get url() {
      var _a4, _b, _c, _d, _e, _f, _g, _h;
      const fragment = ((_a4 = __privateGet(this, _request2).info) == null ? void 0 : _a4.request.urlFragment) ?? ((_b = __privateGet(this, _request2).paused) == null ? void 0 : _b.request.urlFragment) ?? "";
      const url = ((_c = __privateGet(this, _response2).paused) == null ? void 0 : _c.request.url) ?? ((_d = __privateGet(this, _requestOverrides)) == null ? void 0 : _d.url) ?? ((_e = __privateGet(this, _response2).info) == null ? void 0 : _e.url) ?? ((_f = __privateGet(this, _request2).auth) == null ? void 0 : _f.request.url) ?? ((_g = __privateGet(this, _request2).info) == null ? void 0 : _g.request.url) ?? ((_h = __privateGet(this, _request2).paused) == null ? void 0 : _h.request.url) ?? _a2.unknownParameter;
      return `${url}${fragment}`;
    }
    get redirectCount() {
      return __privateGet(this, _redirectCount);
    }
    get cdpTarget() {
      return __privateGet(this, _cdpTarget);
    }
    get cdpClient() {
      return __privateGet(this, _cdpTarget).cdpClient;
    }
    isRedirecting() {
      return Boolean(__privateGet(this, _request2).info);
    }
    handleRedirect(event) {
      __privateGet(this, _response2).hasExtraInfo = false;
      __privateGet(this, _response2).info = event.redirectResponse;
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this, {
        wasRedirected: true
      });
    }
    onRequestWillBeSentEvent(event) {
      __privateGet(this, _request2).info = event;
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this);
    }
    onRequestWillBeSentExtraInfoEvent(event) {
      __privateGet(this, _request2).extraInfo = event;
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this);
    }
    onResponseReceivedExtraInfoEvent(event) {
      if (event.statusCode >= 300 && event.statusCode <= 399 && __privateGet(this, _request2).info && event.headers["location"] === __privateGet(this, _request2).info.request.url) {
        return;
      }
      __privateGet(this, _response2).extraInfo = event;
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this);
    }
    onResponseReceivedEvent(event) {
      __privateGet(this, _response2).hasExtraInfo = event.hasExtraInfo;
      __privateGet(this, _response2).info = event.response;
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this);
    }
    onServedFromCache() {
      __privateSet(this, _servedFromCache, true);
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this);
    }
    onLoadingFailedEvent(event) {
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this, {
        hasFailed: true
      });
      __privateMethod(this, _NetworkRequest_instances, emitEvent_fn).call(this, () => {
        return {
          method: protocol_js_1.ChromiumBidi.Network.EventNames.FetchError,
          params: {
            ...__privateMethod(this, _NetworkRequest_instances, getBaseEventParams_fn).call(this),
            errorText: event.errorText
          }
        };
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
    async failRequest(errorReason) {
      (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
      await this.cdpClient.sendCommand("Fetch.failRequest", {
        requestId: __privateGet(this, _fetchId),
        errorReason
      });
      __privateSet(this, _interceptPhase, void 0);
    }
    onRequestPaused(event) {
      __privateSet(this, _fetchId, event.requestId);
      if (event.responseStatusCode || event.responseErrorReason) {
        __privateGet(this, _response2).paused = event;
        if (__privateMethod(this, _NetworkRequest_instances, isBlockedInPhase_fn).call(this, "responseStarted") && // CDP may emit multiple events for a single request
        !__privateGet(this, _emittedEvents)[protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted] && // Continue all response that have not enabled Network domain
        __privateGet(this, _fetchId) !== this.id) {
          __privateSet(this, _interceptPhase, "responseStarted");
        } else {
          void __privateMethod(this, _NetworkRequest_instances, continueResponse_fn).call(this);
        }
      } else {
        __privateGet(this, _request2).paused = event;
        if (__privateMethod(this, _NetworkRequest_instances, isBlockedInPhase_fn).call(this, "beforeRequestSent") && // CDP may emit multiple events for a single request
        !__privateGet(this, _emittedEvents)[protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent] && // Continue all requests that have not enabled Network domain
        __privateGet(this, _fetchId) !== this.id) {
          __privateSet(this, _interceptPhase, "beforeRequestSent");
        } else {
          void __privateMethod(this, _NetworkRequest_instances, continueRequest_fn).call(this);
        }
      }
      __privateMethod(this, _NetworkRequest_instances, emitEventsIfReady_fn).call(this);
    }
    onAuthRequired(event) {
      __privateSet(this, _fetchId, event.requestId);
      __privateGet(this, _request2).auth = event;
      if (__privateMethod(this, _NetworkRequest_instances, isBlockedInPhase_fn).call(this, "authRequired") && // Continue all auth requests that have not enabled Network domain
      __privateGet(this, _fetchId) !== this.id) {
        __privateSet(this, _interceptPhase, "authRequired");
      } else {
        void __privateMethod(this, _NetworkRequest_instances, continueWithAuth_fn).call(this, {
          response: "Default"
        });
      }
      __privateMethod(this, _NetworkRequest_instances, emitEvent_fn).call(this, () => {
        return {
          method: protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired,
          params: {
            ...__privateMethod(this, _NetworkRequest_instances, getBaseEventParams_fn).call(this, "authRequired"),
            response: __privateMethod(this, _NetworkRequest_instances, getResponseEventParams_fn).call(this)
          }
        };
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
    async continueRequest(overrides = {}) {
      const overrideHeaders = __privateMethod(this, _NetworkRequest_instances, getOverrideHeader_fn).call(this, overrides.headers, overrides.cookies);
      const headers = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
      const postData = getCdpBodyFromBiDiBytesValue(overrides.body);
      await __privateMethod(this, _NetworkRequest_instances, continueRequest_fn).call(this, {
        url: overrides.url,
        method: overrides.method,
        headers,
        postData
      });
      __privateSet(this, _requestOverrides, {
        url: overrides.url,
        method: overrides.method,
        headers: overrides.headers,
        cookies: overrides.cookies,
        bodySize: getSizeFromBiDiBytesValue(overrides.body)
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
    async continueResponse(overrides = {}) {
      var _a4, _b, _c;
      if (this.interceptPhase === "authRequired") {
        if (overrides.credentials) {
          await Promise.all([
            this.waitNextPhase,
            await __privateMethod(this, _NetworkRequest_instances, continueWithAuth_fn).call(this, {
              response: "ProvideCredentials",
              username: overrides.credentials.username,
              password: overrides.credentials.password
            })
          ]);
        } else {
          return await __privateMethod(this, _NetworkRequest_instances, continueWithAuth_fn).call(this, {
            response: "ProvideCredentials"
          });
        }
      }
      if (__privateGet(this, _interceptPhase) === "responseStarted") {
        const overrideHeaders = __privateMethod(this, _NetworkRequest_instances, getOverrideHeader_fn).call(this, overrides.headers, overrides.cookies);
        const responseHeaders = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
        await __privateMethod(this, _NetworkRequest_instances, continueResponse_fn).call(this, {
          responseCode: overrides.statusCode ?? ((_a4 = __privateGet(this, _response2).paused) == null ? void 0 : _a4.responseStatusCode),
          responsePhrase: overrides.reasonPhrase ?? ((_b = __privateGet(this, _response2).paused) == null ? void 0 : _b.responseStatusText),
          responseHeaders: responseHeaders ?? ((_c = __privateGet(this, _response2).paused) == null ? void 0 : _c.responseHeaders)
        });
        __privateSet(this, _responseOverrides, {
          statusCode: overrides.statusCode,
          headers: overrideHeaders
        });
      }
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
    async continueWithAuth(authChallenge) {
      let username;
      let password;
      if (authChallenge.action === "provideCredentials") {
        const { credentials } = authChallenge;
        username = credentials.username;
        password = credentials.password;
      }
      const response = (0, NetworkUtils_js_1.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(authChallenge.action);
      await __privateMethod(this, _NetworkRequest_instances, continueWithAuth_fn).call(this, {
        response,
        username,
        password
      });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
    async provideResponse(overrides) {
      (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
      if (this.interceptPhase === "authRequired") {
        return await __privateMethod(this, _NetworkRequest_instances, continueWithAuth_fn).call(this, {
          response: "ProvideCredentials"
        });
      }
      if (!overrides.body && !overrides.headers) {
        return await __privateMethod(this, _NetworkRequest_instances, continueRequest_fn).call(this);
      }
      const overrideHeaders = __privateMethod(this, _NetworkRequest_instances, getOverrideHeader_fn).call(this, overrides.headers, overrides.cookies);
      const responseHeaders = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
      const responseCode = overrides.statusCode ?? __privateGet(this, _NetworkRequest_instances, statusCode_get) ?? 200;
      await this.cdpClient.sendCommand("Fetch.fulfillRequest", {
        requestId: __privateGet(this, _fetchId),
        responseCode,
        responsePhrase: overrides.reasonPhrase,
        responseHeaders,
        body: getCdpBodyFromBiDiBytesValue(overrides.body)
      });
      __privateSet(this, _interceptPhase, void 0);
    }
    dispose() {
      this.waitNextPhase.reject(new Error("waitNextPhase disposed"));
    }
  }, _id = new WeakMap(), _fetchId = new WeakMap(), _interceptPhase = new WeakMap(), _servedFromCache = new WeakMap(), _redirectCount = new WeakMap(), _request2 = new WeakMap(), _requestOverrides = new WeakMap(), _responseOverrides = new WeakMap(), _response2 = new WeakMap(), _eventManager = new WeakMap(), _networkStorage = new WeakMap(), _cdpTarget = new WeakMap(), _logger = new WeakMap(), _emittedEvents = new WeakMap(), _NetworkRequest_instances = new WeakSet(), isDataUrl_fn = function() {
    return this.url.startsWith("data:");
  }, method_get = function() {
    var _a4, _b, _c, _d, _e;
    return ((_a4 = __privateGet(this, _requestOverrides)) == null ? void 0 : _a4.method) ?? ((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.request.method) ?? ((_c = __privateGet(this, _request2).paused) == null ? void 0 : _c.request.method) ?? ((_d = __privateGet(this, _request2).auth) == null ? void 0 : _d.request.method) ?? ((_e = __privateGet(this, _response2).paused) == null ? void 0 : _e.request.method);
  }, navigationId_get = function() {
    if (!__privateGet(this, _request2).info || !__privateGet(this, _request2).info.loaderId || // When we navigate all CDP network events have `loaderId`
    // CDP's `loaderId` and `requestId` match when
    // that request triggered the loading
    __privateGet(this, _request2).info.loaderId !== __privateGet(this, _request2).info.requestId) {
      return null;
    }
    return __privateGet(this, _networkStorage).getNavigationId(__privateGet(this, _NetworkRequest_instances, context_get) ?? void 0);
  }, cookies_get = function() {
    let cookies = [];
    if (__privateGet(this, _request2).extraInfo) {
      cookies = __privateGet(this, _request2).extraInfo.associatedCookies.filter(({ blockedReasons }) => {
        return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
      }).map(({ cookie }) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(cookie));
    }
    return cookies;
  }, bodySize_get = function() {
    var _a4, _b;
    let bodySize = 0;
    if (typeof ((_a4 = __privateGet(this, _requestOverrides)) == null ? void 0 : _a4.bodySize) === "number") {
      bodySize = __privateGet(this, _requestOverrides).bodySize;
    } else {
      bodySize = (0, NetworkUtils_js_1.bidiBodySizeFromCdpPostDataEntries)(((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.request.postDataEntries) ?? []);
    }
    return bodySize;
  }, context_get = function() {
    var _a4, _b, _c, _d;
    return ((_a4 = __privateGet(this, _response2).paused) == null ? void 0 : _a4.frameId) ?? ((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.frameId) ?? ((_c = __privateGet(this, _request2).paused) == null ? void 0 : _c.frameId) ?? ((_d = __privateGet(this, _request2).auth) == null ? void 0 : _d.frameId) ?? null;
  }, statusCode_get = function() {
    var _a4, _b, _c, _d;
    return ((_a4 = __privateGet(this, _responseOverrides)) == null ? void 0 : _a4.statusCode) ?? ((_b = __privateGet(this, _response2).paused) == null ? void 0 : _b.responseStatusCode) ?? ((_c = __privateGet(this, _response2).extraInfo) == null ? void 0 : _c.statusCode) ?? ((_d = __privateGet(this, _response2).info) == null ? void 0 : _d.status);
  }, requestHeaders_get = function() {
    var _a4, _b, _c;
    let headers = [];
    if ((_a4 = __privateGet(this, _requestOverrides)) == null ? void 0 : _a4.headers) {
      const headerMap = new DefaultMap_js_1.DefaultMap(() => []);
      for (const header of __privateGet(this, _requestOverrides).headers) {
        headerMap.get(header.name).push(header.value.value);
      }
      for (const [name, value] of headerMap.entries()) {
        headers.push({
          name,
          value: {
            type: "string",
            value: value.join("\n").trimEnd()
          }
        });
      }
    } else {
      headers = [
        ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.request.headers),
        ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)((_c = __privateGet(this, _request2).extraInfo) == null ? void 0 : _c.headers)
      ];
    }
    return headers;
  }, authChallenges_get = function() {
    var _a4;
    if (!__privateGet(this, _response2).info) {
      return;
    }
    if (!(__privateGet(this, _NetworkRequest_instances, statusCode_get) === 401 || __privateGet(this, _NetworkRequest_instances, statusCode_get) === 407)) {
      return void 0;
    }
    const headerName = __privateGet(this, _NetworkRequest_instances, statusCode_get) === 401 ? "WWW-Authenticate" : "Proxy-Authenticate";
    const authChallenges = [];
    for (const [header, value] of Object.entries(__privateGet(this, _response2).info.headers)) {
      if (header.localeCompare(headerName, void 0, { sensitivity: "base" }) === 0) {
        authChallenges.push({
          scheme: value.split(" ").at(0) ?? "",
          realm: ((_a4 = value.match(REALM_REGEX)) == null ? void 0 : _a4.at(0)) ?? ""
        });
      }
    }
    return authChallenges;
  }, timings_get = function() {
    var _a4, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    const responseTimeOffset = (0, NetworkUtils_js_1.getTiming)((0, NetworkUtils_js_1.getTiming)((_b = (_a4 = __privateGet(this, _response2).info) == null ? void 0 : _a4.timing) == null ? void 0 : _b.requestTime) - (0, NetworkUtils_js_1.getTiming)((_c = __privateGet(this, _request2).info) == null ? void 0 : _c.timestamp));
    return {
      // TODO: Verify this is correct
      timeOrigin: Math.round((0, NetworkUtils_js_1.getTiming)((_d = __privateGet(this, _request2).info) == null ? void 0 : _d.wallTime) * 1e3),
      // Timing baseline.
      // TODO: Verify this is correct.
      requestTime: 0,
      // TODO: set if redirect detected.
      redirectStart: 0,
      // TODO: set if redirect detected.
      redirectEnd: 0,
      // TODO: Verify this is correct
      // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=145
      fetchStart: (0, NetworkUtils_js_1.getTiming)((_f = (_e = __privateGet(this, _response2).info) == null ? void 0 : _e.timing) == null ? void 0 : _f.workerFetchStart, responseTimeOffset),
      // fetchStart: 0,
      dnsStart: (0, NetworkUtils_js_1.getTiming)((_h = (_g = __privateGet(this, _response2).info) == null ? void 0 : _g.timing) == null ? void 0 : _h.dnsStart, responseTimeOffset),
      dnsEnd: (0, NetworkUtils_js_1.getTiming)((_j = (_i = __privateGet(this, _response2).info) == null ? void 0 : _i.timing) == null ? void 0 : _j.dnsEnd, responseTimeOffset),
      connectStart: (0, NetworkUtils_js_1.getTiming)((_l = (_k = __privateGet(this, _response2).info) == null ? void 0 : _k.timing) == null ? void 0 : _l.connectStart, responseTimeOffset),
      connectEnd: (0, NetworkUtils_js_1.getTiming)((_n = (_m = __privateGet(this, _response2).info) == null ? void 0 : _m.timing) == null ? void 0 : _n.connectEnd, responseTimeOffset),
      tlsStart: (0, NetworkUtils_js_1.getTiming)((_p = (_o = __privateGet(this, _response2).info) == null ? void 0 : _o.timing) == null ? void 0 : _p.sslStart, responseTimeOffset),
      requestStart: (0, NetworkUtils_js_1.getTiming)((_r = (_q = __privateGet(this, _response2).info) == null ? void 0 : _q.timing) == null ? void 0 : _r.sendStart, responseTimeOffset),
      // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=196
      responseStart: (0, NetworkUtils_js_1.getTiming)((_t = (_s = __privateGet(this, _response2).info) == null ? void 0 : _s.timing) == null ? void 0 : _t.receiveHeadersStart, responseTimeOffset),
      responseEnd: (0, NetworkUtils_js_1.getTiming)((_v = (_u = __privateGet(this, _response2).info) == null ? void 0 : _u.timing) == null ? void 0 : _v.receiveHeadersEnd, responseTimeOffset)
    };
  }, phaseChanged_fn = function() {
    this.waitNextPhase.resolve();
    this.waitNextPhase = new Deferred_js_1.Deferred();
  }, interceptsInPhase_fn = function(phase) {
    if (!__privateGet(this, _cdpTarget).isSubscribedTo(`network.${phase}`)) {
      return /* @__PURE__ */ new Set();
    }
    return __privateGet(this, _networkStorage).getInterceptsForPhase(this, phase);
  }, isBlockedInPhase_fn = function(phase) {
    return __privateMethod(this, _NetworkRequest_instances, interceptsInPhase_fn).call(this, phase).size > 0;
  }, emitEventsIfReady_fn = function(options = {}) {
    const requestExtraInfoCompleted = (
      // Flush redirects
      options.wasRedirected || options.hasFailed || __privateMethod(this, _NetworkRequest_instances, isDataUrl_fn).call(this) || Boolean(__privateGet(this, _request2).extraInfo) || // Requests from cache don't have extra info
      __privateGet(this, _servedFromCache) || // Sometimes there is no extra info and the response
      // is the only place we can find out
      Boolean(__privateGet(this, _response2).info && !__privateGet(this, _response2).hasExtraInfo)
    );
    const noInterceptionExpected = (
      // We can't intercept data urls from CDP
      __privateMethod(this, _NetworkRequest_instances, isDataUrl_fn).call(this) || // Cached requests never hit the network
      __privateGet(this, _servedFromCache)
    );
    const requestInterceptionExpected = !noInterceptionExpected && __privateMethod(this, _NetworkRequest_instances, isBlockedInPhase_fn).call(this, "beforeRequestSent");
    const requestInterceptionCompleted = !requestInterceptionExpected || requestInterceptionExpected && Boolean(__privateGet(this, _request2).paused);
    if (Boolean(__privateGet(this, _request2).info) && (requestInterceptionExpected ? requestInterceptionCompleted : requestExtraInfoCompleted)) {
      __privateMethod(this, _NetworkRequest_instances, emitEvent_fn).call(this, __privateMethod(this, _NetworkRequest_instances, getBeforeRequestEvent_fn).bind(this));
    }
    const responseExtraInfoCompleted = Boolean(__privateGet(this, _response2).extraInfo) || // Response from cache don't have extra info
    __privateGet(this, _servedFromCache) || // Don't expect extra info if the flag is false
    Boolean(__privateGet(this, _response2).info && !__privateGet(this, _response2).hasExtraInfo);
    const responseInterceptionExpected = !noInterceptionExpected && __privateMethod(this, _NetworkRequest_instances, isBlockedInPhase_fn).call(this, "responseStarted");
    if (__privateGet(this, _response2).info || responseInterceptionExpected && Boolean(__privateGet(this, _response2).paused)) {
      __privateMethod(this, _NetworkRequest_instances, emitEvent_fn).call(this, __privateMethod(this, _NetworkRequest_instances, getResponseStartedEvent_fn).bind(this));
    }
    const responseInterceptionCompleted = !responseInterceptionExpected || responseInterceptionExpected && Boolean(__privateGet(this, _response2).paused);
    if (Boolean(__privateGet(this, _response2).info) && responseExtraInfoCompleted && responseInterceptionCompleted) {
      __privateMethod(this, _NetworkRequest_instances, emitEvent_fn).call(this, __privateMethod(this, _NetworkRequest_instances, getResponseReceivedEvent_fn).bind(this));
      __privateGet(this, _networkStorage).deleteRequest(this.id);
    }
  }, continueRequest_fn = async function(overrides = {}) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.continueRequest", {
      requestId: __privateGet(this, _fetchId),
      url: overrides.url,
      method: overrides.method,
      headers: overrides.headers,
      postData: overrides.postData
    });
    __privateSet(this, _interceptPhase, void 0);
  }, continueResponse_fn = async function({ responseCode, responsePhrase, responseHeaders } = {}) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.continueResponse", {
      requestId: __privateGet(this, _fetchId),
      responseCode,
      responsePhrase,
      responseHeaders
    });
    __privateSet(this, _interceptPhase, void 0);
  }, continueWithAuth_fn = async function(authChallengeResponse) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.continueWithAuth", {
      requestId: __privateGet(this, _fetchId),
      authChallengeResponse
    });
    __privateSet(this, _interceptPhase, void 0);
  }, emitEvent_fn = function(getEvent) {
    var _a4;
    let event;
    try {
      event = getEvent();
    } catch (error) {
      (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, log_js_1.LogType.debugError, error);
      return;
    }
    if (__privateMethod(this, _NetworkRequest_instances, isIgnoredEvent_fn).call(this) || __privateGet(this, _emittedEvents)[event.method] && // Special case this event can be emitted multiple times
    event.method !== protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired) {
      return;
    }
    __privateMethod(this, _NetworkRequest_instances, phaseChanged_fn).call(this);
    __privateGet(this, _emittedEvents)[event.method] = true;
    if (__privateGet(this, _NetworkRequest_instances, context_get)) {
      __privateGet(this, _eventManager).registerEvent(Object.assign(event, {
        type: "event"
      }), __privateGet(this, _NetworkRequest_instances, context_get));
    } else {
      __privateGet(this, _eventManager).registerGlobalEvent(Object.assign(event, {
        type: "event"
      }));
    }
  }, getBaseEventParams_fn = function(phase) {
    var _a4;
    const interceptProps = {
      isBlocked: false
    };
    if (phase) {
      const blockedBy = __privateMethod(this, _NetworkRequest_instances, interceptsInPhase_fn).call(this, phase);
      interceptProps.isBlocked = blockedBy.size > 0;
      if (interceptProps.isBlocked) {
        interceptProps.intercepts = [...blockedBy];
      }
    }
    return {
      context: __privateGet(this, _NetworkRequest_instances, context_get),
      navigation: __privateGet(this, _NetworkRequest_instances, navigationId_get),
      redirectCount: __privateGet(this, _redirectCount),
      request: __privateMethod(this, _NetworkRequest_instances, getRequestData_fn).call(this),
      // Timestamp should be in milliseconds, while CDP provides it in seconds.
      timestamp: Math.round((0, NetworkUtils_js_1.getTiming)((_a4 = __privateGet(this, _request2).info) == null ? void 0 : _a4.wallTime) * 1e3),
      // Contains isBlocked and intercepts
      ...interceptProps
    };
  }, getResponseEventParams_fn = function() {
    var _a4, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if ((_a4 = __privateGet(this, _response2).info) == null ? void 0 : _a4.fromDiskCache) {
      __privateGet(this, _response2).extraInfo = void 0;
    }
    const headers = [
      ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)((_b = __privateGet(this, _response2).info) == null ? void 0 : _b.headers),
      ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)((_c = __privateGet(this, _response2).extraInfo) == null ? void 0 : _c.headers)
      // TODO: Verify how to dedupe these
      // ...bidiNetworkHeadersFromCdpNetworkHeadersEntries(
      //   this.#response.paused?.responseHeaders
      // ),
    ];
    const authChallenges = __privateGet(this, _NetworkRequest_instances, authChallenges_get);
    const response = {
      url: this.url,
      protocol: ((_d = __privateGet(this, _response2).info) == null ? void 0 : _d.protocol) ?? "",
      status: __privateGet(this, _NetworkRequest_instances, statusCode_get) ?? -1,
      // TODO: Throw an exception or use some other status code?
      statusText: ((_e = __privateGet(this, _response2).info) == null ? void 0 : _e.statusText) || ((_f = __privateGet(this, _response2).paused) == null ? void 0 : _f.responseStatusText) || "",
      fromCache: ((_g = __privateGet(this, _response2).info) == null ? void 0 : _g.fromDiskCache) || ((_h = __privateGet(this, _response2).info) == null ? void 0 : _h.fromPrefetchCache) || __privateGet(this, _servedFromCache),
      headers: ((_i = __privateGet(this, _responseOverrides)) == null ? void 0 : _i.headers) ?? headers,
      mimeType: ((_j = __privateGet(this, _response2).info) == null ? void 0 : _j.mimeType) || "",
      bytesReceived: ((_k = __privateGet(this, _response2).info) == null ? void 0 : _k.encodedDataLength) || 0,
      headersSize: (0, NetworkUtils_js_1.computeHeadersSize)(headers),
      // TODO: consider removing from spec.
      bodySize: 0,
      content: {
        // TODO: consider removing from spec.
        size: 0
      },
      ...authChallenges ? { authChallenges } : {}
    };
    return {
      ...response,
      "goog:securityDetails": (_l = __privateGet(this, _response2).info) == null ? void 0 : _l.securityDetails
    };
  }, getRequestData_fn = function() {
    var _a4, _b, _c, _d, _e, _f;
    const headers = __privateGet(this, _NetworkRequest_instances, requestHeaders_get);
    const request = {
      request: __privateGet(this, _id),
      url: this.url,
      method: __privateGet(this, _NetworkRequest_instances, method_get) ?? _a2.unknownParameter,
      headers,
      cookies: __privateGet(this, _NetworkRequest_instances, cookies_get),
      headersSize: (0, NetworkUtils_js_1.computeHeadersSize)(headers),
      bodySize: __privateGet(this, _NetworkRequest_instances, bodySize_get),
      // TODO: populate
      destination: __privateMethod(this, _NetworkRequest_instances, getDestination_fn).call(this),
      // TODO: populate
      initiatorType: __privateMethod(this, _NetworkRequest_instances, getInitiatorType_fn).call(this),
      timings: __privateGet(this, _NetworkRequest_instances, timings_get)
    };
    return {
      ...request,
      "goog:postData": (_b = (_a4 = __privateGet(this, _request2).info) == null ? void 0 : _a4.request) == null ? void 0 : _b.postData,
      "goog:hasPostData": (_d = (_c = __privateGet(this, _request2).info) == null ? void 0 : _c.request) == null ? void 0 : _d.hasPostData,
      "goog:resourceType": (_e = __privateGet(this, _request2).info) == null ? void 0 : _e.type,
      "goog:resourceInitiator": (_f = __privateGet(this, _request2).info) == null ? void 0 : _f.initiator
    };
  }, /**
   * Heuristic trying to guess the destination.
   * Specification: https://fetch.spec.whatwg.org/#concept-request-destination.
   * Specified values: "audio", "audioworklet", "document", "embed", "font", "frame",
   * "iframe", "image", "json", "manifest", "object", "paintworklet", "report", "script",
   * "serviceworker", "sharedworker", "style", "track", "video", "webidentity", "worker",
   * "xslt".
   */
  getDestination_fn = function() {
    var _a4, _b;
    switch ((_a4 = __privateGet(this, _request2).info) == null ? void 0 : _a4.type) {
      case "Script":
        return "script";
      case "Stylesheet":
        return "style";
      case "Image":
        return "image";
      case "Document":
        return ((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.initiator.type) === "parser" ? "iframe" : "";
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
  getInitiatorType_fn = function() {
    var _a4, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (((_a4 = __privateGet(this, _request2).info) == null ? void 0 : _a4.initiator.type) === "parser") {
      switch ((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.type) {
        case "Document":
          return "iframe";
        case "Font":
          return ((_d = (_c = __privateGet(this, _request2).info) == null ? void 0 : _c.initiator) == null ? void 0 : _d.url) === ((_e = __privateGet(this, _request2).info) == null ? void 0 : _e.documentURL) ? "font" : "css";
        case "Image":
          return ((_g = (_f = __privateGet(this, _request2).info) == null ? void 0 : _f.initiator) == null ? void 0 : _g.url) === ((_h = __privateGet(this, _request2).info) == null ? void 0 : _h.documentURL) ? "img" : "css";
        case "Script":
          return "script";
        case "Stylesheet":
          return "link";
        default:
          return null;
      }
    }
    if (((_j = (_i = __privateGet(this, _request2)) == null ? void 0 : _i.info) == null ? void 0 : _j.type) === "Fetch") {
      return "fetch";
    }
    return null;
  }, getBeforeRequestEvent_fn = function() {
    var _a4;
    (0, assert_js_1.assert)(__privateGet(this, _request2).info, "RequestWillBeSentEvent is not set");
    return {
      method: protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent,
      params: {
        ...__privateMethod(this, _NetworkRequest_instances, getBaseEventParams_fn).call(this, "beforeRequestSent"),
        initiator: {
          type: __privateMethod(_a4 = _a2, _NetworkRequest_static, getInitiator_fn).call(_a4, __privateGet(this, _request2).info.initiator.type),
          columnNumber: __privateGet(this, _request2).info.initiator.columnNumber,
          lineNumber: __privateGet(this, _request2).info.initiator.lineNumber,
          stackTrace: __privateGet(this, _request2).info.initiator.stack,
          request: __privateGet(this, _request2).info.initiator.requestId
        }
      }
    };
  }, getResponseStartedEvent_fn = function() {
    return {
      method: protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted,
      params: {
        ...__privateMethod(this, _NetworkRequest_instances, getBaseEventParams_fn).call(this, "responseStarted"),
        response: __privateMethod(this, _NetworkRequest_instances, getResponseEventParams_fn).call(this)
      }
    };
  }, getResponseReceivedEvent_fn = function() {
    return {
      method: protocol_js_1.ChromiumBidi.Network.EventNames.ResponseCompleted,
      params: {
        ...__privateMethod(this, _NetworkRequest_instances, getBaseEventParams_fn).call(this),
        response: __privateMethod(this, _NetworkRequest_instances, getResponseEventParams_fn).call(this)
      }
    };
  }, isIgnoredEvent_fn = function() {
    var _a4, _b;
    const faviconUrl = "/favicon.ico";
    return ((_a4 = __privateGet(this, _request2).paused) == null ? void 0 : _a4.request.url.endsWith(faviconUrl)) ?? ((_b = __privateGet(this, _request2).info) == null ? void 0 : _b.request.url.endsWith(faviconUrl)) ?? false;
  }, getOverrideHeader_fn = function(headers, cookies) {
    if (!headers && !cookies) {
      return void 0;
    }
    let overrideHeaders = headers;
    const cookieHeader = (0, NetworkUtils_js_1.networkHeaderFromCookieHeaders)(cookies);
    if (cookieHeader && !overrideHeaders) {
      overrideHeaders = __privateGet(this, _NetworkRequest_instances, requestHeaders_get);
    }
    if (cookieHeader && overrideHeaders) {
      overrideHeaders.filter((header) => header.name.localeCompare("cookie", void 0, {
        sensitivity: "base"
      }) !== 0);
      overrideHeaders.push(cookieHeader);
    }
    return overrideHeaders;
  }, _NetworkRequest_static = new WeakSet(), getInitiator_fn = function(initiatorType) {
    switch (initiatorType) {
      case "parser":
      case "script":
      case "preflight":
        return initiatorType;
      default:
        return "other";
    }
  }, __privateAdd(_a3, _NetworkRequest_static), __publicField(_a3, "unknownParameter", "UNKNOWN"), _a3);
  NetworkRequest.NetworkRequest = NetworkRequest$1;
  _a2 = NetworkRequest$1;
  function getCdpBodyFromBiDiBytesValue(body) {
    let parsedBody;
    if ((body == null ? void 0 : body.type) === "string") {
      parsedBody = btoa(body.value);
    } else if ((body == null ? void 0 : body.type) === "base64") {
      parsedBody = body.value;
    }
    return parsedBody;
  }
  function getSizeFromBiDiBytesValue(body) {
    if ((body == null ? void 0 : body.type) === "string") {
      return body.value.length;
    } else if ((body == null ? void 0 : body.type) === "base64") {
      return atob(body.value).length;
    }
    return 0;
  }
  return NetworkRequest;
}
var hasRequiredNetworkStorage;
function requireNetworkStorage() {
  var _browsingContextStorage, _eventManager, _logger, _requests, _intercepts, _defaultCacheBehavior, _NetworkStorage_instances, getOrCreateNetworkRequest_fn, _a2;
  if (hasRequiredNetworkStorage) return NetworkStorage;
  hasRequiredNetworkStorage = 1;
  Object.defineProperty(NetworkStorage, "__esModule", { value: true });
  NetworkStorage.NetworkStorage = void 0;
  const protocol_js_1 = requireProtocol();
  const uuid_js_1 = requireUuid();
  const NetworkRequest_js_1 = requireNetworkRequest();
  const NetworkUtils_js_1 = requireNetworkUtils();
  let NetworkStorage$1 = (_a2 = class {
    constructor(eventManager, browsingContextStorage, browserClient, logger) {
      __privateAdd(this, _NetworkStorage_instances);
      __privateAdd(this, _browsingContextStorage);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _logger);
      /**
       * A map from network request ID to Network Request objects.
       * Needed as long as information about requests comes from different events.
       */
      __privateAdd(this, _requests, /* @__PURE__ */ new Map());
      /** A map from intercept ID to track active network intercepts. */
      __privateAdd(this, _intercepts, /* @__PURE__ */ new Map());
      __privateAdd(this, _defaultCacheBehavior, "default");
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _eventManager, eventManager);
      browserClient.on("Target.detachedFromTarget", ({ sessionId }) => {
        this.disposeRequestMap(sessionId);
      });
      __privateSet(this, _logger, logger);
    }
    onCdpTargetCreated(cdpTarget) {
      const cdpClient = cdpTarget.cdpClient;
      const listeners = [
        [
          "Network.requestWillBeSent",
          (params) => {
            const request = this.getRequestById(params.requestId);
            if (request && request.isRedirecting()) {
              request.handleRedirect(params);
              this.deleteRequest(params.requestId);
              __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget, request.redirectCount + 1).onRequestWillBeSentEvent(params);
            } else {
              __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onRequestWillBeSentEvent(params);
            }
          }
        ],
        [
          "Network.requestWillBeSentExtraInfo",
          (params) => {
            __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onRequestWillBeSentExtraInfoEvent(params);
          }
        ],
        [
          "Network.responseReceived",
          (params) => {
            __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onResponseReceivedEvent(params);
          }
        ],
        [
          "Network.responseReceivedExtraInfo",
          (params) => {
            __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onResponseReceivedExtraInfoEvent(params);
          }
        ],
        [
          "Network.requestServedFromCache",
          (params) => {
            __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onServedFromCache();
          }
        ],
        [
          "Network.loadingFailed",
          (params) => {
            __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onLoadingFailedEvent(params);
          }
        ],
        [
          "Fetch.requestPaused",
          (event) => {
            __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(
              this,
              // CDP quirk if the Network domain is not present this is undefined
              event.networkId ?? event.requestId,
              cdpTarget
            ).onRequestPaused(event);
          }
        ],
        [
          "Fetch.authRequired",
          (event) => {
            let request = this.getRequestByFetchId(event.requestId);
            if (!request) {
              request = __privateMethod(this, _NetworkStorage_instances, getOrCreateNetworkRequest_fn).call(this, event.requestId, cdpTarget);
            }
            request.onAuthRequired(event);
          }
        ]
      ];
      for (const [event, listener] of listeners) {
        cdpClient.on(event, listener);
      }
    }
    getInterceptionStages(browsingContextId) {
      const stages = {
        request: false,
        response: false,
        auth: false
      };
      for (const intercept of __privateGet(this, _intercepts).values()) {
        if (intercept.contexts && !intercept.contexts.includes(browsingContextId)) {
          continue;
        }
        stages.request || (stages.request = intercept.phases.includes(
          "beforeRequestSent"
          /* Network.InterceptPhase.BeforeRequestSent */
        ));
        stages.response || (stages.response = intercept.phases.includes(
          "responseStarted"
          /* Network.InterceptPhase.ResponseStarted */
        ));
        stages.auth || (stages.auth = intercept.phases.includes(
          "authRequired"
          /* Network.InterceptPhase.AuthRequired */
        ));
      }
      return stages;
    }
    getInterceptsForPhase(request, phase) {
      if (request.url === NetworkRequest_js_1.NetworkRequest.unknownParameter) {
        return /* @__PURE__ */ new Set();
      }
      const intercepts = /* @__PURE__ */ new Set();
      for (const [interceptId, intercept] of __privateGet(this, _intercepts).entries()) {
        if (!intercept.phases.includes(phase) || intercept.contexts && !intercept.contexts.includes(request.cdpTarget.topLevelId)) {
          continue;
        }
        if (intercept.urlPatterns.length === 0) {
          intercepts.add(interceptId);
          continue;
        }
        for (const pattern of intercept.urlPatterns) {
          if ((0, NetworkUtils_js_1.matchUrlPattern)(pattern, request.url)) {
            intercepts.add(interceptId);
            break;
          }
        }
      }
      return intercepts;
    }
    disposeRequestMap(sessionId) {
      for (const request of __privateGet(this, _requests).values()) {
        if (request.cdpClient.sessionId === sessionId) {
          __privateGet(this, _requests).delete(request.id);
          request.dispose();
        }
      }
    }
    /**
     * Adds the given entry to the intercept map.
     * URL patterns are assumed to be parsed.
     *
     * @return The intercept ID.
     */
    addIntercept(value) {
      const interceptId = (0, uuid_js_1.uuidv4)();
      __privateGet(this, _intercepts).set(interceptId, value);
      return interceptId;
    }
    /**
     * Removes the given intercept from the intercept map.
     * Throws NoSuchInterceptException if the intercept does not exist.
     */
    removeIntercept(intercept) {
      if (!__privateGet(this, _intercepts).has(intercept)) {
        throw new protocol_js_1.NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
      }
      __privateGet(this, _intercepts).delete(intercept);
    }
    getRequestsByTarget(target) {
      const requests2 = [];
      for (const request of __privateGet(this, _requests).values()) {
        if (request.cdpTarget === target) {
          requests2.push(request);
        }
      }
      return requests2;
    }
    getRequestById(id) {
      return __privateGet(this, _requests).get(id);
    }
    getRequestByFetchId(fetchId) {
      for (const request of __privateGet(this, _requests).values()) {
        if (request.fetchId === fetchId) {
          return request;
        }
      }
      return;
    }
    addRequest(request) {
      __privateGet(this, _requests).set(request.id, request);
    }
    deleteRequest(id) {
      __privateGet(this, _requests).delete(id);
    }
    /**
     * Gets the virtual navigation ID for the given navigable ID.
     */
    getNavigationId(contextId) {
      var _a3;
      if (contextId === void 0) {
        return null;
      }
      return ((_a3 = __privateGet(this, _browsingContextStorage).findContext(contextId)) == null ? void 0 : _a3.navigationId) ?? null;
    }
    set defaultCacheBehavior(behavior) {
      __privateSet(this, _defaultCacheBehavior, behavior);
    }
    get defaultCacheBehavior() {
      return __privateGet(this, _defaultCacheBehavior);
    }
  }, _browsingContextStorage = new WeakMap(), _eventManager = new WeakMap(), _logger = new WeakMap(), _requests = new WeakMap(), _intercepts = new WeakMap(), _defaultCacheBehavior = new WeakMap(), _NetworkStorage_instances = new WeakSet(), /**
   * Gets the network request with the given ID, if any.
   * Otherwise, creates a new network request with the given ID and cdp target.
   */
  getOrCreateNetworkRequest_fn = function(id, cdpTarget, redirectCount) {
    let request = this.getRequestById(id);
    if (request) {
      return request;
    }
    request = new NetworkRequest_js_1.NetworkRequest(id, __privateGet(this, _eventManager), this, cdpTarget, redirectCount, __privateGet(this, _logger));
    this.addRequest(request);
    return request;
  }, _a2);
  NetworkStorage.NetworkStorage = NetworkStorage$1;
  return NetworkStorage;
}
var PreloadScriptStorage = {};
var hasRequiredPreloadScriptStorage;
function requirePreloadScriptStorage() {
  var _scripts2, _a2;
  if (hasRequiredPreloadScriptStorage) return PreloadScriptStorage;
  hasRequiredPreloadScriptStorage = 1;
  Object.defineProperty(PreloadScriptStorage, "__esModule", { value: true });
  PreloadScriptStorage.PreloadScriptStorage = void 0;
  let PreloadScriptStorage$1 = (_a2 = class {
    constructor() {
      /** Tracks all BiDi preload scripts.  */
      __privateAdd(this, _scripts2, /* @__PURE__ */ new Set());
    }
    /**
     * Finds all entries that match the given filter (OR logic).
     */
    find(filter2) {
      if (!filter2) {
        return [...__privateGet(this, _scripts2)];
      }
      return [...__privateGet(this, _scripts2)].filter((script) => {
        if (filter2.id !== void 0 && filter2.id === script.id) {
          return true;
        }
        if (filter2.targetId !== void 0 && script.targetIds.has(filter2.targetId)) {
          return true;
        }
        if (filter2.global !== void 0 && // Global scripts have no contexts
        (filter2.global && script.contexts === void 0 || // Non global scripts always have contexts
        !filter2.global && script.contexts !== void 0)) {
          return true;
        }
        return false;
      });
    }
    add(preloadScript) {
      __privateGet(this, _scripts2).add(preloadScript);
    }
    /** Deletes all BiDi preload script entries that match the given filter. */
    remove(filter2) {
      for (const preloadScript of this.find(filter2)) {
        __privateGet(this, _scripts2).delete(preloadScript);
      }
    }
  }, _scripts2 = new WeakMap(), _a2);
  PreloadScriptStorage.PreloadScriptStorage = PreloadScriptStorage$1;
  return PreloadScriptStorage;
}
var RealmStorage = {};
var hasRequiredRealmStorage;
function requireRealmStorage() {
  var _knownHandlesToRealmMap, _realmMap, _a2;
  if (hasRequiredRealmStorage) return RealmStorage;
  hasRequiredRealmStorage = 1;
  Object.defineProperty(RealmStorage, "__esModule", { value: true });
  RealmStorage.RealmStorage = void 0;
  const protocol_js_1 = requireProtocol();
  const WindowRealm_js_1 = requireWindowRealm();
  let RealmStorage$1 = (_a2 = class {
    constructor() {
      /** Tracks handles and their realms sent to the client. */
      __privateAdd(this, _knownHandlesToRealmMap, /* @__PURE__ */ new Map());
      /** Map from realm ID to Realm. */
      __privateAdd(this, _realmMap, /* @__PURE__ */ new Map());
    }
    get knownHandlesToRealmMap() {
      return __privateGet(this, _knownHandlesToRealmMap);
    }
    addRealm(realm) {
      __privateGet(this, _realmMap).set(realm.realmId, realm);
    }
    /** Finds all realms that match the given filter. */
    findRealms(filter2) {
      return Array.from(__privateGet(this, _realmMap).values()).filter((realm) => {
        if (filter2.realmId !== void 0 && filter2.realmId !== realm.realmId) {
          return false;
        }
        if (filter2.browsingContextId !== void 0 && !realm.associatedBrowsingContexts.map((browsingContext) => browsingContext.id).includes(filter2.browsingContextId)) {
          return false;
        }
        if (filter2.sandbox !== void 0 && (!(realm instanceof WindowRealm_js_1.WindowRealm) || filter2.sandbox !== realm.sandbox)) {
          return false;
        }
        if (filter2.executionContextId !== void 0 && filter2.executionContextId !== realm.executionContextId) {
          return false;
        }
        if (filter2.origin !== void 0 && filter2.origin !== realm.origin) {
          return false;
        }
        if (filter2.type !== void 0 && filter2.type !== realm.realmType) {
          return false;
        }
        if (filter2.cdpSessionId !== void 0 && filter2.cdpSessionId !== realm.cdpClient.sessionId) {
          return false;
        }
        return true;
      });
    }
    findRealm(filter2) {
      const maybeRealms = this.findRealms(filter2);
      if (maybeRealms.length !== 1) {
        return void 0;
      }
      return maybeRealms[0];
    }
    /** Gets the only realm that matches the given filter, if any, otherwise throws. */
    getRealm(filter2) {
      const maybeRealm = this.findRealm(filter2);
      if (maybeRealm === void 0) {
        throw new protocol_js_1.NoSuchFrameException(`Realm ${JSON.stringify(filter2)} not found`);
      }
      return maybeRealm;
    }
    /** Deletes all realms that match the given filter. */
    deleteRealms(filter2) {
      this.findRealms(filter2).map((realm) => {
        realm.dispose();
        __privateGet(this, _realmMap).delete(realm.realmId);
        Array.from(this.knownHandlesToRealmMap.entries()).filter(([, r]) => r === realm.realmId).map(([handle]) => this.knownHandlesToRealmMap.delete(handle));
      });
    }
  }, _knownHandlesToRealmMap = new WeakMap(), _realmMap = new WeakMap(), _a2);
  RealmStorage.RealmStorage = RealmStorage$1;
  return RealmStorage;
}
var EventManager = {};
var Buffer$1 = {};
var hasRequiredBuffer;
function requireBuffer() {
  var _capacity, _entries, _onItemRemoved;
  if (hasRequiredBuffer) return Buffer$1;
  hasRequiredBuffer = 1;
  Object.defineProperty(Buffer$1, "__esModule", { value: true });
  Buffer$1.Buffer = void 0;
  class Buffer2 {
    /**
     * @param capacity The buffer capacity.
     * @param onItemRemoved Delegate called for each removed element.
     */
    constructor(capacity, onItemRemoved) {
      __privateAdd(this, _capacity);
      __privateAdd(this, _entries, []);
      __privateAdd(this, _onItemRemoved);
      __privateSet(this, _capacity, capacity);
      __privateSet(this, _onItemRemoved, onItemRemoved);
    }
    get() {
      return __privateGet(this, _entries);
    }
    add(value) {
      var _a2;
      __privateGet(this, _entries).push(value);
      while (__privateGet(this, _entries).length > __privateGet(this, _capacity)) {
        const item = __privateGet(this, _entries).shift();
        if (item !== void 0) {
          (_a2 = __privateGet(this, _onItemRemoved)) == null ? void 0 : _a2.call(this, item);
        }
      }
    }
  }
  _capacity = new WeakMap();
  _entries = new WeakMap();
  _onItemRemoved = new WeakMap();
  Buffer$1.Buffer = Buffer2;
  return Buffer$1;
}
var IdWrapper = {};
var hasRequiredIdWrapper;
function requireIdWrapper() {
  var _a2, _counter, _id;
  if (hasRequiredIdWrapper) return IdWrapper;
  hasRequiredIdWrapper = 1;
  Object.defineProperty(IdWrapper, "__esModule", { value: true });
  IdWrapper.IdWrapper = void 0;
  let IdWrapper$1 = (_a2 = class {
    constructor() {
      __privateAdd(this, _id);
      __privateSet(this, _id, ++__privateWrapper(_a2, _counter)._);
    }
    get id() {
      return __privateGet(this, _id);
    }
  }, _counter = new WeakMap(), _id = new WeakMap(), __privateAdd(_a2, _counter, 0), _a2);
  IdWrapper.IdWrapper = IdWrapper$1;
  return IdWrapper;
}
var events = {};
var hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents) return events;
  hasRequiredEvents = 1;
  Object.defineProperty(events, "__esModule", { value: true });
  events.isCdpEvent = isCdpEvent2;
  events.isDeprecatedCdpEvent = isDeprecatedCdpEvent;
  events.assertSupportedEvent = assertSupportedEvent;
  const protocol_js_1 = requireProtocol();
  function isCdpEvent2(name) {
    var _a2;
    return ((_a2 = name.split(".").at(0)) == null ? void 0 : _a2.startsWith(protocol_js_1.ChromiumBidi.BiDiModule.Cdp)) ?? false;
  }
  function isDeprecatedCdpEvent(name) {
    var _a2;
    return ((_a2 = name.split(".").at(0)) == null ? void 0 : _a2.startsWith(protocol_js_1.ChromiumBidi.BiDiModule.DeprecatedCdp)) ?? false;
  }
  function assertSupportedEvent(name) {
    if (!protocol_js_1.ChromiumBidi.EVENT_NAMES.has(name) && !isCdpEvent2(name) && !isDeprecatedCdpEvent(name)) {
      throw new protocol_js_1.InvalidArgumentException(`Unknown event: ${name}`);
    }
  }
  return events;
}
var SubscriptionManager = {};
var hasRequiredSubscriptionManager;
function requireSubscriptionManager() {
  var _subscriptions, _browsingContextStorage, _SubscriptionManager_instances, isSubscribedTo_fn, _a2;
  if (hasRequiredSubscriptionManager) return SubscriptionManager;
  hasRequiredSubscriptionManager = 1;
  Object.defineProperty(SubscriptionManager, "__esModule", { value: true });
  SubscriptionManager.SubscriptionManager = void 0;
  SubscriptionManager.cartesianProduct = cartesianProduct;
  SubscriptionManager.unrollEvents = unrollEvents;
  SubscriptionManager.difference = difference;
  const protocol_js_1 = requireProtocol();
  const uuid_js_1 = requireUuid();
  function cartesianProduct(...a) {
    return a.reduce((a2, b) => a2.flatMap((d) => b.map((e) => [d, e].flat())));
  }
  function unrollEvents(events2) {
    const allEvents = /* @__PURE__ */ new Set();
    function addEvents(events3) {
      for (const event of events3) {
        allEvents.add(event);
      }
    }
    for (const event of events2) {
      switch (event) {
        case protocol_js_1.ChromiumBidi.BiDiModule.Bluetooth:
          addEvents(Object.values(protocol_js_1.ChromiumBidi.Bluetooth.EventNames));
          break;
        case protocol_js_1.ChromiumBidi.BiDiModule.BrowsingContext:
          addEvents(Object.values(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames));
          break;
        case protocol_js_1.ChromiumBidi.BiDiModule.Log:
          addEvents(Object.values(protocol_js_1.ChromiumBidi.Log.EventNames));
          break;
        case protocol_js_1.ChromiumBidi.BiDiModule.Network:
          addEvents(Object.values(protocol_js_1.ChromiumBidi.Network.EventNames));
          break;
        case protocol_js_1.ChromiumBidi.BiDiModule.Script:
          addEvents(Object.values(protocol_js_1.ChromiumBidi.Script.EventNames));
          break;
        default:
          allEvents.add(event);
      }
    }
    return [...allEvents.values()];
  }
  let SubscriptionManager$1 = (_a2 = class {
    constructor(browsingContextStorage) {
      __privateAdd(this, _SubscriptionManager_instances);
      __privateAdd(this, _subscriptions, []);
      __privateAdd(this, _browsingContextStorage);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
    }
    getChannelsSubscribedToEvent(eventName, contextId) {
      const channels = /* @__PURE__ */ new Map();
      for (const subscription of __privateGet(this, _subscriptions)) {
        if (__privateMethod(this, _SubscriptionManager_instances, isSubscribedTo_fn).call(this, subscription, eventName, contextId)) {
          channels.set(JSON.stringify(subscription.channel), subscription.channel);
        }
      }
      return Array.from(channels.values());
    }
    getChannelsSubscribedToEventGlobally(eventName) {
      const channels = /* @__PURE__ */ new Map();
      for (const subscription of __privateGet(this, _subscriptions)) {
        if (__privateMethod(this, _SubscriptionManager_instances, isSubscribedTo_fn).call(this, subscription, eventName)) {
          channels.set(JSON.stringify(subscription.channel), subscription.channel);
        }
      }
      return Array.from(channels.values());
    }
    isSubscribedTo(moduleOrEvent, contextId) {
      for (const subscription of __privateGet(this, _subscriptions)) {
        if (__privateMethod(this, _SubscriptionManager_instances, isSubscribedTo_fn).call(this, subscription, moduleOrEvent, contextId)) {
          return true;
        }
      }
      return false;
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
    subscribe(eventNames, contextIds, channel) {
      const subscription = {
        id: (0, uuid_js_1.uuidv4)(),
        eventNames: new Set(unrollEvents(eventNames)),
        topLevelTraversableIds: new Set(contextIds.map((contextId) => {
          const topLevelContext = __privateGet(this, _browsingContextStorage).findTopLevelContextId(contextId);
          if (!topLevelContext) {
            throw new protocol_js_1.NoSuchFrameException(`Top-level navigable not found for context id ${contextId}`);
          }
          return topLevelContext;
        })),
        channel
      };
      __privateGet(this, _subscriptions).push(subscription);
      return subscription;
    }
    /**
     * Unsubscribes atomically from all events in the given contexts and channel.
     *
     * This is a legacy spec branch to unsubscribe by attributes.
     */
    unsubscribe(inputEventNames, inputContextIds, channel) {
      const eventNames = new Set(unrollEvents(inputEventNames));
      for (const contextId of inputContextIds) {
        __privateGet(this, _browsingContextStorage).getContext(contextId);
      }
      const topLevelTraversables = new Set(inputContextIds.map((contextId) => {
        const topLevelContext = __privateGet(this, _browsingContextStorage).findTopLevelContextId(contextId);
        if (!topLevelContext) {
          throw new protocol_js_1.NoSuchFrameException(`Top-level navigable not found for context id ${contextId}`);
        }
        return topLevelContext;
      }));
      const isGlobalUnsubscribe = topLevelTraversables.size === 0;
      const newSubscriptions = [];
      const eventsMatched = /* @__PURE__ */ new Set();
      const contextsMatched = /* @__PURE__ */ new Set();
      for (const subscription of __privateGet(this, _subscriptions)) {
        if (JSON.stringify(subscription.channel) !== JSON.stringify(channel)) {
          newSubscriptions.push(subscription);
          continue;
        }
        if (intersection(subscription.eventNames, eventNames).size === 0) {
          newSubscriptions.push(subscription);
          continue;
        }
        if (isGlobalUnsubscribe) {
          if (subscription.topLevelTraversableIds.size !== 0) {
            newSubscriptions.push(subscription);
            continue;
          }
          const subscriptionEventNames = new Set(subscription.eventNames);
          for (const eventName of eventNames) {
            if (subscriptionEventNames.has(eventName)) {
              eventsMatched.add(eventName);
              subscriptionEventNames.delete(eventName);
            }
          }
          if (subscriptionEventNames.size !== 0) {
            newSubscriptions.push({
              ...subscription,
              eventNames: subscriptionEventNames
            });
          }
        } else {
          if (subscription.topLevelTraversableIds.size === 0) {
            newSubscriptions.push(subscription);
            continue;
          }
          const eventMap = /* @__PURE__ */ new Map();
          for (const eventName of subscription.eventNames) {
            eventMap.set(eventName, new Set(subscription.topLevelTraversableIds));
          }
          for (const eventName of eventNames) {
            const eventContextSet = eventMap.get(eventName);
            if (!eventContextSet) {
              continue;
            }
            for (const toRemoveId of topLevelTraversables) {
              if (eventContextSet.has(toRemoveId)) {
                contextsMatched.add(toRemoveId);
                eventsMatched.add(eventName);
                eventContextSet.delete(toRemoveId);
              }
            }
            if (eventContextSet.size === 0) {
              eventMap.delete(eventName);
            }
          }
          for (const [eventName, remainingContextIds] of eventMap) {
            const partialSubscription = {
              id: subscription.id,
              channel: subscription.channel,
              eventNames: /* @__PURE__ */ new Set([eventName]),
              topLevelTraversableIds: remainingContextIds
            };
            newSubscriptions.push(partialSubscription);
          }
        }
      }
      if (!equal(eventsMatched, eventNames)) {
        throw new protocol_js_1.InvalidArgumentException("No subscription found");
      }
      if (!isGlobalUnsubscribe && !equal(contextsMatched, topLevelTraversables)) {
        throw new protocol_js_1.InvalidArgumentException("No subscription found");
      }
      __privateSet(this, _subscriptions, newSubscriptions);
    }
    /**
     * Unsubscribes by subscriptionId.
     */
    unsubscribeById(_subscription) {
    }
  }, _subscriptions = new WeakMap(), _browsingContextStorage = new WeakMap(), _SubscriptionManager_instances = new WeakSet(), isSubscribedTo_fn = function(subscription, moduleOrEvent, contextId) {
    let includesEvent = false;
    for (const eventName of subscription.eventNames) {
      if (
        // Event explicitly subscribed
        eventName === moduleOrEvent || // Event subscribed via module
        eventName === moduleOrEvent.split(".").at(0) || // Event explicitly subscribed compared to module
        eventName.split(".").at(0) === moduleOrEvent
      ) {
        includesEvent = true;
        break;
      }
    }
    if (!includesEvent) {
      return false;
    }
    if (subscription.topLevelTraversableIds.size === 0) {
      return true;
    }
    const topLevelContext = contextId ? __privateGet(this, _browsingContextStorage).findTopLevelContextId(contextId) : null;
    if (topLevelContext !== null && subscription.topLevelTraversableIds.has(topLevelContext)) {
      return true;
    }
    return false;
  }, _a2);
  SubscriptionManager.SubscriptionManager = SubscriptionManager$1;
  function intersection(setA, setB) {
    const result = /* @__PURE__ */ new Set();
    for (const a of setA) {
      if (setB.has(a)) {
        result.add(a);
      }
    }
    return result;
  }
  function difference(setA, setB) {
    const result = /* @__PURE__ */ new Set();
    for (const a of setA) {
      if (!setB.has(a)) {
        result.add(a);
      }
    }
    return result;
  }
  function equal(setA, setB) {
    if (setA.size !== setB.size) {
      return false;
    }
    for (const a of setA) {
      if (!setB.has(a)) {
        return false;
      }
    }
    return true;
  }
  return SubscriptionManager;
}
var hasRequiredEventManager;
function requireEventManager() {
  var _idWrapper, _contextId, _event, _eventToContextsMap, _eventBuffers, _lastMessageSent, _subscriptionManager, _browsingContextStorage, _subscribeHooks, _EventManager_static, _a3, getMapKey_fn, _EventManager_instances, bufferEvent_fn, markEventSent_fn, getBufferedEvents_fn;
  if (hasRequiredEventManager) return EventManager;
  hasRequiredEventManager = 1;
  var _a2;
  Object.defineProperty(EventManager, "__esModule", { value: true });
  EventManager.EventManager = void 0;
  const protocol_js_1 = requireProtocol();
  const Buffer_js_1 = requireBuffer();
  const DefaultMap_js_1 = requireDefaultMap();
  const EventEmitter_js_1 = requireEventEmitter();
  const IdWrapper_js_1 = requireIdWrapper();
  const OutgoingMessage_js_1 = requireOutgoingMessage();
  const events_js_1 = requireEvents();
  const SubscriptionManager_js_1 = requireSubscriptionManager();
  class EventWrapper {
    constructor(event, contextId) {
      __privateAdd(this, _idWrapper, new IdWrapper_js_1.IdWrapper());
      __privateAdd(this, _contextId);
      __privateAdd(this, _event);
      __privateSet(this, _event, event);
      __privateSet(this, _contextId, contextId);
    }
    get id() {
      return __privateGet(this, _idWrapper).id;
    }
    get contextId() {
      return __privateGet(this, _contextId);
    }
    get event() {
      return __privateGet(this, _event);
    }
  }
  _idWrapper = new WeakMap();
  _contextId = new WeakMap();
  _event = new WeakMap();
  const eventBufferLength = /* @__PURE__ */ new Map([[protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
  let EventManager$1 = (_a3 = class extends EventEmitter_js_1.EventEmitter {
    constructor(browsingContextStorage) {
      super();
      __privateAdd(this, _EventManager_instances);
      /**
       * Maps event name to a set of contexts where this event already happened.
       * Needed for getting buffered events from all the contexts in case of
       * subscripting to all contexts.
       */
      __privateAdd(this, _eventToContextsMap, new DefaultMap_js_1.DefaultMap(() => /* @__PURE__ */ new Set()));
      /**
       * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
       * during subscription. Channel-agnostic.
       */
      __privateAdd(this, _eventBuffers, /* @__PURE__ */ new Map());
      /**
       * Maps `eventName` + `browsingContext` to  Map of json stringified channel to last id.
       * Used to avoid sending duplicated events when user
       * subscribes -> unsubscribes -> subscribes.
       */
      __privateAdd(this, _lastMessageSent, /* @__PURE__ */ new Map());
      __privateAdd(this, _subscriptionManager);
      __privateAdd(this, _browsingContextStorage);
      /**
       * Map of event name to hooks to be called when client is subscribed to the event.
       */
      __privateAdd(this, _subscribeHooks);
      __privateSet(this, _browsingContextStorage, browsingContextStorage);
      __privateSet(this, _subscriptionManager, new SubscriptionManager_js_1.SubscriptionManager(browsingContextStorage));
      __privateSet(this, _subscribeHooks, new DefaultMap_js_1.DefaultMap(() => []));
    }
    get subscriptionManager() {
      return __privateGet(this, _subscriptionManager);
    }
    addSubscribeHook(event, hook) {
      __privateGet(this, _subscribeHooks).get(event).push(hook);
    }
    registerEvent(event, contextId) {
      this.registerPromiseEvent(Promise.resolve({
        kind: "success",
        value: event
      }), contextId, event.method);
    }
    registerGlobalEvent(event) {
      this.registerGlobalPromiseEvent(Promise.resolve({
        kind: "success",
        value: event
      }), event.method);
    }
    registerPromiseEvent(event, contextId, eventName) {
      const eventWrapper = new EventWrapper(event, contextId);
      const sortedChannels = __privateGet(this, _subscriptionManager).getChannelsSubscribedToEvent(eventName, contextId);
      __privateMethod(this, _EventManager_instances, bufferEvent_fn).call(this, eventWrapper, eventName);
      for (const channel of sortedChannels) {
        this.emit("event", {
          message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(event, channel),
          event: eventName
        });
        __privateMethod(this, _EventManager_instances, markEventSent_fn).call(this, eventWrapper, channel, eventName);
      }
    }
    registerGlobalPromiseEvent(event, eventName) {
      const eventWrapper = new EventWrapper(event, null);
      const sortedChannels = __privateGet(this, _subscriptionManager).getChannelsSubscribedToEventGlobally(eventName);
      __privateMethod(this, _EventManager_instances, bufferEvent_fn).call(this, eventWrapper, eventName);
      for (const channel of sortedChannels) {
        this.emit("event", {
          message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(event, channel),
          event: eventName
        });
        __privateMethod(this, _EventManager_instances, markEventSent_fn).call(this, eventWrapper, channel, eventName);
      }
    }
    async subscribe(eventNames, contextIds, channel) {
      for (const name of eventNames) {
        (0, events_js_1.assertSupportedEvent)(name);
      }
      for (const contextId of contextIds) {
        if (contextId !== null) {
          __privateGet(this, _browsingContextStorage).getContext(contextId);
        }
      }
      const unrolledEventNames = new Set((0, SubscriptionManager_js_1.unrollEvents)(eventNames));
      const subscribeStepEvents = /* @__PURE__ */ new Map();
      const subscriptionNavigableIds = new Set(contextIds.length ? contextIds.map((contextId) => {
        const id = __privateGet(this, _browsingContextStorage).findTopLevelContextId(contextId);
        if (!id) {
          throw new protocol_js_1.InvalidArgumentException("Invalid context id");
        }
        return id;
      }) : __privateGet(this, _browsingContextStorage).getTopLevelContexts().map((c) => c.id));
      for (const eventName of unrolledEventNames) {
        const subscribedNavigableIds = new Set(__privateGet(this, _browsingContextStorage).getTopLevelContexts().map((c) => c.id).filter((id) => {
          return __privateGet(this, _subscriptionManager).isSubscribedTo(eventName, id);
        }));
        subscribeStepEvents.set(eventName, (0, SubscriptionManager_js_1.difference)(subscriptionNavigableIds, subscribedNavigableIds));
      }
      const subscription = __privateGet(this, _subscriptionManager).subscribe(eventNames, contextIds, channel);
      for (const eventName of subscription.eventNames) {
        for (const contextId of subscriptionNavigableIds) {
          for (const eventWrapper of __privateMethod(this, _EventManager_instances, getBufferedEvents_fn).call(this, eventName, contextId, channel)) {
            this.emit("event", {
              message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(eventWrapper.event, channel),
              event: eventName
            });
            __privateMethod(this, _EventManager_instances, markEventSent_fn).call(this, eventWrapper, channel, eventName);
          }
        }
      }
      for (const [eventName, contextIds2] of subscribeStepEvents) {
        for (const contextId of contextIds2) {
          __privateGet(this, _subscribeHooks).get(eventName).forEach((hook) => hook(contextId));
        }
      }
      await this.toggleModulesIfNeeded();
      return subscription.id;
    }
    async unsubscribe(eventNames, contextIds, channel) {
      for (const name of eventNames) {
        (0, events_js_1.assertSupportedEvent)(name);
      }
      __privateGet(this, _subscriptionManager).unsubscribe(eventNames, contextIds, channel);
      await this.toggleModulesIfNeeded();
    }
    async toggleModulesIfNeeded() {
      await Promise.all(__privateGet(this, _browsingContextStorage).getAllContexts().map(async (context) => {
        return await context.toggleModulesIfNeeded();
      }));
    }
    clearBufferedEvents(contextId) {
      var _a4;
      for (const eventName of eventBufferLength.keys()) {
        const bufferMapKey = __privateMethod(_a4 = _a2, _EventManager_static, getMapKey_fn).call(_a4, eventName, contextId);
        __privateGet(this, _eventBuffers).delete(bufferMapKey);
      }
    }
  }, _eventToContextsMap = new WeakMap(), _eventBuffers = new WeakMap(), _lastMessageSent = new WeakMap(), _subscriptionManager = new WeakMap(), _browsingContextStorage = new WeakMap(), _subscribeHooks = new WeakMap(), _EventManager_static = new WeakSet(), getMapKey_fn = function(eventName, browsingContext) {
    return JSON.stringify({ eventName, browsingContext });
  }, _EventManager_instances = new WeakSet(), /**
   * If the event is buffer-able, put it in the buffer.
   */
  bufferEvent_fn = function(eventWrapper, eventName) {
    var _a4;
    if (!eventBufferLength.has(eventName)) {
      return;
    }
    const bufferMapKey = __privateMethod(_a4 = _a2, _EventManager_static, getMapKey_fn).call(_a4, eventName, eventWrapper.contextId);
    if (!__privateGet(this, _eventBuffers).has(bufferMapKey)) {
      __privateGet(this, _eventBuffers).set(bufferMapKey, new Buffer_js_1.Buffer(eventBufferLength.get(eventName)));
    }
    __privateGet(this, _eventBuffers).get(bufferMapKey).add(eventWrapper);
    __privateGet(this, _eventToContextsMap).get(eventName).add(eventWrapper.contextId);
  }, /**
   * If the event is buffer-able, mark it as sent to the given contextId and channel.
   */
  markEventSent_fn = function(eventWrapper, channel, eventName) {
    var _a4, _b;
    if (!eventBufferLength.has(eventName)) {
      return;
    }
    const lastSentMapKey = __privateMethod(_a4 = _a2, _EventManager_static, getMapKey_fn).call(_a4, eventName, eventWrapper.contextId);
    const lastId = Math.max(((_b = __privateGet(this, _lastMessageSent).get(lastSentMapKey)) == null ? void 0 : _b.get(JSON.stringify(channel))) ?? 0, eventWrapper.id);
    const channelMap = __privateGet(this, _lastMessageSent).get(lastSentMapKey);
    if (channelMap) {
      channelMap.set(JSON.stringify(channel), lastId);
    } else {
      __privateGet(this, _lastMessageSent).set(lastSentMapKey, /* @__PURE__ */ new Map([[JSON.stringify(channel), lastId]]));
    }
  }, /**
   * Returns events which are buffered and not yet sent to the given channel events.
   */
  getBufferedEvents_fn = function(eventName, contextId, channel) {
    var _a4, _b, _c;
    const bufferMapKey = __privateMethod(_a4 = _a2, _EventManager_static, getMapKey_fn).call(_a4, eventName, contextId);
    const lastSentMessageId = ((_b = __privateGet(this, _lastMessageSent).get(bufferMapKey)) == null ? void 0 : _b.get(JSON.stringify(channel))) ?? -Infinity;
    const result = ((_c = __privateGet(this, _eventBuffers).get(bufferMapKey)) == null ? void 0 : _c.get().filter((wrapper) => wrapper.id > lastSentMessageId)) ?? [];
    if (contextId === null) {
      Array.from(__privateGet(this, _eventToContextsMap).get(eventName).keys()).filter((_contextId2) => (
        // Events without context are already in the result.
        _contextId2 !== null && // Events from deleted contexts should not be sent.
        __privateGet(this, _browsingContextStorage).hasContext(_contextId2)
      )).map((_contextId2) => __privateMethod(this, _EventManager_instances, getBufferedEvents_fn).call(this, eventName, _contextId2, channel)).forEach((events2) => result.push(...events2));
    }
    return result.sort((e1, e2) => e1.id - e2.id);
  }, __privateAdd(_a3, _EventManager_static), _a3);
  EventManager.EventManager = EventManager$1;
  _a2 = EventManager$1;
  return EventManager;
}
var hasRequiredBidiServer;
function requireBidiServer() {
  var _messageQueue, _transport2, _commandProcessor, _eventManager, _browsingContextStorage, _realmStorage, _preloadScriptStorage, _bluetoothProcessor, _logger, _handleIncomingMessage, _processOutgoingMessage, _BidiServer_instances, topLevelContextsLoaded_fn, _a2;
  if (hasRequiredBidiServer) return BidiServer;
  hasRequiredBidiServer = 1;
  Object.defineProperty(BidiServer, "__esModule", { value: true });
  BidiServer.BidiServer = void 0;
  const EventEmitter_js_1 = requireEventEmitter();
  const log_js_1 = requireLog();
  const ProcessingQueue_js_1 = requireProcessingQueue();
  const CommandProcessor_js_1 = requireCommandProcessor();
  const BluetoothProcessor_js_1 = requireBluetoothProcessor();
  const CdpTargetManager_js_1 = requireCdpTargetManager();
  const BrowsingContextStorage_js_1 = requireBrowsingContextStorage();
  const NetworkStorage_js_1 = requireNetworkStorage();
  const PreloadScriptStorage_js_1 = requirePreloadScriptStorage();
  const RealmStorage_js_1 = requireRealmStorage();
  const EventManager_js_1 = requireEventManager();
  let BidiServer$1 = (_a2 = class extends EventEmitter_js_1.EventEmitter {
    constructor(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, parser, logger) {
      super();
      __privateAdd(this, _BidiServer_instances);
      __privateAdd(this, _messageQueue);
      __privateAdd(this, _transport2);
      __privateAdd(this, _commandProcessor);
      __privateAdd(this, _eventManager);
      __privateAdd(this, _browsingContextStorage, new BrowsingContextStorage_js_1.BrowsingContextStorage());
      __privateAdd(this, _realmStorage, new RealmStorage_js_1.RealmStorage());
      __privateAdd(this, _preloadScriptStorage, new PreloadScriptStorage_js_1.PreloadScriptStorage());
      __privateAdd(this, _bluetoothProcessor);
      __privateAdd(this, _logger);
      __privateAdd(this, _handleIncomingMessage, (message) => {
        void __privateGet(this, _commandProcessor).processCommand(message).catch((error) => {
          var _a3;
          (_a3 = __privateGet(this, _logger)) == null ? void 0 : _a3.call(this, log_js_1.LogType.debugError, error);
        });
      });
      __privateAdd(this, _processOutgoingMessage, async (messageEntry) => {
        const message = { ...messageEntry.message, ...messageEntry.channel };
        await __privateGet(this, _transport2).sendMessage(message);
      });
      __privateSet(this, _logger, logger);
      __privateSet(this, _messageQueue, new ProcessingQueue_js_1.ProcessingQueue(__privateGet(this, _processOutgoingMessage), __privateGet(this, _logger)));
      __privateSet(this, _transport2, bidiTransport);
      __privateGet(this, _transport2).setOnMessage(__privateGet(this, _handleIncomingMessage));
      __privateSet(this, _eventManager, new EventManager_js_1.EventManager(__privateGet(this, _browsingContextStorage)));
      const networkStorage = new NetworkStorage_js_1.NetworkStorage(__privateGet(this, _eventManager), __privateGet(this, _browsingContextStorage), browserCdpClient, logger);
      __privateSet(this, _bluetoothProcessor, new BluetoothProcessor_js_1.BluetoothProcessor(__privateGet(this, _eventManager), __privateGet(this, _browsingContextStorage)));
      __privateSet(this, _commandProcessor, new CommandProcessor_js_1.CommandProcessor(cdpConnection, browserCdpClient, __privateGet(this, _eventManager), __privateGet(this, _browsingContextStorage), __privateGet(this, _realmStorage), __privateGet(this, _preloadScriptStorage), networkStorage, __privateGet(this, _bluetoothProcessor), parser, async (options) => {
        await browserCdpClient.sendCommand("Security.setIgnoreCertificateErrors", {
          ignore: options.acceptInsecureCerts ?? false
        });
        new CdpTargetManager_js_1.CdpTargetManager(cdpConnection, browserCdpClient, selfTargetId, __privateGet(this, _eventManager), __privateGet(this, _browsingContextStorage), __privateGet(this, _realmStorage), networkStorage, __privateGet(this, _bluetoothProcessor), __privateGet(this, _preloadScriptStorage), defaultUserContextId, (options == null ? void 0 : options["goog:prerenderingDisabled"]) ?? false, options == null ? void 0 : options.unhandledPromptBehavior, logger);
        await browserCdpClient.sendCommand("Target.setDiscoverTargets", {
          discover: true
        });
        await browserCdpClient.sendCommand("Target.setAutoAttach", {
          autoAttach: true,
          waitForDebuggerOnStart: true,
          flatten: true,
          // Browser session should attach to tab instead of the page, so that
          // prerendering is not blocked.
          filter: [
            {
              type: "page",
              exclude: true
            },
            {}
          ]
        });
        await __privateMethod(this, _BidiServer_instances, topLevelContextsLoaded_fn).call(this);
      }, __privateGet(this, _logger)));
      __privateGet(this, _eventManager).on("event", ({ message, event }) => {
        this.emitOutgoingMessage(message, event);
      });
      __privateGet(this, _commandProcessor).on("response", ({ message, event }) => {
        this.emitOutgoingMessage(message, event);
      });
    }
    /**
     * Creates and starts BiDi Mapper instance.
     */
    static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, parser, logger) {
      const [{ browserContextIds }, { targetInfos }] = await Promise.all([
        browserCdpClient.sendCommand("Target.getBrowserContexts"),
        browserCdpClient.sendCommand("Target.getTargets")
      ]);
      let defaultUserContextId = "default";
      for (const info of targetInfos) {
        if (info.browserContextId && !browserContextIds.includes(info.browserContextId)) {
          defaultUserContextId = info.browserContextId;
          break;
        }
      }
      const server = new _a2(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, parser, logger);
      return server;
    }
    /**
     * Sends BiDi message.
     */
    emitOutgoingMessage(messageEntry, event) {
      __privateGet(this, _messageQueue).add(messageEntry, event);
    }
    close() {
      __privateGet(this, _transport2).close();
    }
  }, _messageQueue = new WeakMap(), _transport2 = new WeakMap(), _commandProcessor = new WeakMap(), _eventManager = new WeakMap(), _browsingContextStorage = new WeakMap(), _realmStorage = new WeakMap(), _preloadScriptStorage = new WeakMap(), _bluetoothProcessor = new WeakMap(), _logger = new WeakMap(), _handleIncomingMessage = new WeakMap(), _processOutgoingMessage = new WeakMap(), _BidiServer_instances = new WeakSet(), topLevelContextsLoaded_fn = async function() {
    await Promise.all(__privateGet(this, _browsingContextStorage).getTopLevelContexts().map((c) => c.lifecycleLoaded()));
  }, _a2);
  BidiServer.BidiServer = BidiServer$1;
  return BidiServer;
}
var hasRequiredBidiMapper;
function requireBidiMapper() {
  if (hasRequiredBidiMapper) return BidiMapper;
  hasRequiredBidiMapper = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutgoingMessage = exports.EventEmitter = exports.BidiServer = void 0;
    var BidiServer_js_1 = requireBidiServer();
    Object.defineProperty(exports, "BidiServer", { enumerable: true, get: function() {
      return BidiServer_js_1.BidiServer;
    } });
    var EventEmitter_js_1 = requireEventEmitter();
    Object.defineProperty(exports, "EventEmitter", { enumerable: true, get: function() {
      return EventEmitter_js_1.EventEmitter;
    } });
    var OutgoingMessage_js_1 = requireOutgoingMessage();
    Object.defineProperty(exports, "OutgoingMessage", { enumerable: true, get: function() {
      return OutgoingMessage_js_1.OutgoingMessage;
    } });
  })(BidiMapper);
  return BidiMapper;
}
var BidiMapperExports = requireBidiMapper();
const _BidiCdpSession = class _BidiCdpSession extends CDPSession {
  constructor(frame, sessionId) {
    super();
    __privateAdd(this, _detached, false);
    __privateAdd(this, _connection);
    __privateAdd(this, _sessionId, Deferred$1.create());
    __publicField(this, "frame");
    /**
     * @internal
     */
    __publicField(this, "onClose", () => {
      _BidiCdpSession.sessions.delete(this.id());
      __privateSet(this, _detached, true);
    });
    this.frame = frame;
    if (!this.frame.page().browser().cdpSupported) {
      return;
    }
    const connection = this.frame.page().browser().connection;
    __privateSet(this, _connection, connection);
    if (sessionId) {
      __privateGet(this, _sessionId).resolve(sessionId);
      _BidiCdpSession.sessions.set(sessionId, this);
    } else {
      (async () => {
        try {
          const { result } = await connection.send("goog:cdp.getSession", {
            context: frame._id
          });
          __privateGet(this, _sessionId).resolve(result.session);
          _BidiCdpSession.sessions.set(result.session, this);
        } catch (error) {
          __privateGet(this, _sessionId).reject(error);
        }
      })();
    }
    _BidiCdpSession.sessions.set(__privateGet(this, _sessionId).value(), this);
  }
  connection() {
    return void 0;
  }
  async send(method, params, options) {
    if (__privateGet(this, _connection) === void 0) {
      throw new UnsupportedOperation("CDP support is required for this feature. The current browser does not support CDP.");
    }
    if (__privateGet(this, _detached)) {
      throw new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
    }
    const session = await __privateGet(this, _sessionId).valueOrThrow();
    const { result } = await __privateGet(this, _connection).send("goog:cdp.sendCommand", {
      method,
      params,
      session
    }, options == null ? void 0 : options.timeout);
    return result.result;
  }
  async detach() {
    if (__privateGet(this, _connection) === void 0 || __privateGet(this, _connection).closed || __privateGet(this, _detached)) {
      return;
    }
    try {
      await this.frame.client.send("Target.detachFromTarget", {
        sessionId: this.id()
      });
    } finally {
      this.onClose();
    }
  }
  id() {
    const value = __privateGet(this, _sessionId).value();
    return typeof value === "string" ? value : "";
  }
};
_detached = new WeakMap();
_connection = new WeakMap();
_sessionId = new WeakMap();
__publicField(_BidiCdpSession, "sessions", /* @__PURE__ */ new Map());
let BidiCdpSession = _BidiCdpSession;
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const debugProtocolSend = debug("puppeteer:webDriverBiDi:SEND ►");
const debugProtocolReceive = debug("puppeteer:webDriverBiDi:RECV ◀");
class BidiConnection extends EventEmitter$1 {
  constructor(url, transport, delay = 0, timeout2) {
    super();
    __privateAdd(this, _url);
    __privateAdd(this, _transport);
    __privateAdd(this, _delay);
    __privateAdd(this, _timeout, 0);
    __privateAdd(this, _closed, false);
    __privateAdd(this, _callbacks, new CallbackRegistry());
    __privateAdd(this, _emitters, []);
    __privateSet(this, _url, url);
    __privateSet(this, _delay, delay);
    __privateSet(this, _timeout, timeout2 ?? 18e4);
    __privateSet(this, _transport, transport);
    __privateGet(this, _transport).onmessage = this.onMessage.bind(this);
    __privateGet(this, _transport).onclose = this.unbind.bind(this);
  }
  get closed() {
    return __privateGet(this, _closed);
  }
  get url() {
    return __privateGet(this, _url);
  }
  pipeTo(emitter) {
    __privateGet(this, _emitters).push(emitter);
  }
  emit(type, event) {
    for (const emitter of __privateGet(this, _emitters)) {
      emitter.emit(type, event);
    }
    return super.emit(type, event);
  }
  send(method, params, timeout2) {
    assert$1(!__privateGet(this, _closed), "Protocol error: Connection closed.");
    return __privateGet(this, _callbacks).create(method, timeout2 ?? __privateGet(this, _timeout), (id) => {
      const stringifiedMessage = JSON.stringify({
        id,
        method,
        params
      });
      debugProtocolSend(stringifiedMessage);
      __privateGet(this, _transport).send(stringifiedMessage);
    });
  }
  /**
   * @internal
   */
  async onMessage(message) {
    var _a2;
    if (__privateGet(this, _delay)) {
      await new Promise((f) => {
        return setTimeout(f, __privateGet(this, _delay));
      });
    }
    debugProtocolReceive(message);
    const object = JSON.parse(message);
    if ("type" in object) {
      switch (object.type) {
        case "success":
          __privateGet(this, _callbacks).resolve(object.id, object);
          return;
        case "error":
          if (object.id === null) {
            break;
          }
          __privateGet(this, _callbacks).reject(object.id, createProtocolError(object), `${object.error}: ${object.message}`);
          return;
        case "event":
          if (isCdpEvent(object)) {
            (_a2 = BidiCdpSession.sessions.get(object.params.session)) == null ? void 0 : _a2.emit(object.params.event, object.params.params);
            return;
          }
          this.emit(object.method, object.params);
          return;
      }
    }
    if ("id" in object) {
      __privateGet(this, _callbacks).reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
    }
    debugError(object);
  }
  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind() {
    if (__privateGet(this, _closed)) {
      return;
    }
    __privateSet(this, _closed, true);
    __privateGet(this, _transport).onmessage = () => {
    };
    __privateGet(this, _transport).onclose = () => {
    };
    __privateGet(this, _callbacks).clear();
  }
  /**
   * Unbinds the connection and closes the transport.
   */
  dispose() {
    this.unbind();
    __privateGet(this, _transport).close();
  }
  getPendingProtocolErrors() {
    return __privateGet(this, _callbacks).getPendingProtocolErrors();
  }
}
_url = new WeakMap();
_transport = new WeakMap();
_delay = new WeakMap();
_timeout = new WeakMap();
_closed = new WeakMap();
_callbacks = new WeakMap();
_emitters = new WeakMap();
function createProtocolError(object) {
  let message = `${object.error} ${object.message}`;
  if (object.stacktrace) {
    message += ` ${object.stacktrace}`;
  }
  return message;
}
function isCdpEvent(event) {
  return event.method.startsWith("goog:cdp.");
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const bidiServerLogger = (prefix, ...args) => {
  debug(`bidi:${prefix}`)(args);
};
async function connectBidiOverCdp(cdp2) {
  const transportBiDi = new NoOpTransport();
  const cdpConnectionAdapter = new CdpConnectionAdapter(cdp2);
  const pptrTransport = {
    send(message) {
      transportBiDi.emitMessage(JSON.parse(message));
    },
    close() {
      bidiServer.close();
      cdpConnectionAdapter.close();
      cdp2.dispose();
    },
    onmessage(_message) {
    }
  };
  transportBiDi.on("bidiResponse", (message) => {
    pptrTransport.onmessage(JSON.stringify(message));
  });
  const pptrBiDiConnection = new BidiConnection(cdp2.url(), pptrTransport, cdp2.delay, cdp2.timeout);
  const bidiServer = await BidiMapperExports.BidiServer.createAndStart(
    transportBiDi,
    cdpConnectionAdapter,
    cdpConnectionAdapter.browserClient(),
    /* selfTargetId= */
    "",
    void 0,
    bidiServerLogger
  );
  return pptrBiDiConnection;
}
class CdpConnectionAdapter {
  constructor(cdp2) {
    __privateAdd(this, _cdp);
    __privateAdd(this, _adapters, /* @__PURE__ */ new Map());
    __privateAdd(this, _browserCdpConnection);
    __privateSet(this, _cdp, cdp2);
    __privateSet(this, _browserCdpConnection, new CDPClientAdapter(cdp2));
  }
  browserClient() {
    return __privateGet(this, _browserCdpConnection);
  }
  getCdpClient(id) {
    const session = __privateGet(this, _cdp).session(id);
    if (!session) {
      throw new Error(`Unknown CDP session with id ${id}`);
    }
    if (!__privateGet(this, _adapters).has(session)) {
      const adapter = new CDPClientAdapter(session, id, __privateGet(this, _browserCdpConnection));
      __privateGet(this, _adapters).set(session, adapter);
      return adapter;
    }
    return __privateGet(this, _adapters).get(session);
  }
  close() {
    __privateGet(this, _browserCdpConnection).close();
    for (const adapter of __privateGet(this, _adapters).values()) {
      adapter.close();
    }
  }
}
_cdp = new WeakMap();
_adapters = new WeakMap();
_browserCdpConnection = new WeakMap();
class CDPClientAdapter extends BidiMapperExports.EventEmitter {
  constructor(client, sessionId, browserClient) {
    super();
    __privateAdd(this, _closed2, false);
    __privateAdd(this, _client);
    __publicField(this, "sessionId");
    __privateAdd(this, _browserClient);
    __privateAdd(this, _forwardMessage, (method, event) => {
      this.emit(method, event);
    });
    __privateSet(this, _client, client);
    this.sessionId = sessionId;
    __privateSet(this, _browserClient, browserClient);
    __privateGet(this, _client).on("*", __privateGet(this, _forwardMessage));
  }
  browserClient() {
    return __privateGet(this, _browserClient);
  }
  async sendCommand(method, ...params) {
    if (__privateGet(this, _closed2)) {
      return;
    }
    try {
      return await __privateGet(this, _client).send(method, ...params);
    } catch (err) {
      if (__privateGet(this, _closed2)) {
        return;
      }
      throw err;
    }
  }
  close() {
    __privateGet(this, _client).off("*", __privateGet(this, _forwardMessage));
    __privateSet(this, _closed2, true);
  }
  isCloseError(error) {
    return error instanceof TargetCloseError;
  }
}
_closed2 = new WeakMap();
_client = new WeakMap();
_browserClient = new WeakMap();
_forwardMessage = new WeakMap();
class NoOpTransport extends BidiMapperExports.EventEmitter {
  constructor() {
    super(...arguments);
    __privateAdd(this, _onMessage, async (_m) => {
      return;
    });
  }
  emitMessage(message) {
    void __privateGet(this, _onMessage).call(this, message);
  }
  setOnMessage(onMessage) {
    __privateSet(this, _onMessage, onMessage);
  }
  async sendMessage(message) {
    this.emit("bidiResponse", message);
  }
  close() {
    __privateSet(this, _onMessage, async (_m) => {
      return;
    });
  }
}
_onMessage = new WeakMap();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$d = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$d = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Navigation = (() => {
  var _request2, _navigation, _browsingContext, _disposables2, _id, _Navigation_instances, initialize_fn7, matches_fn, session_get, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return _a2 = class extends _classSuper {
    constructor(context) {
      super();
      __privateAdd(this, _Navigation_instances);
      __privateAdd(this, _request2, __runInitializers$d(this, _instanceExtraInitializers));
      __privateAdd(this, _navigation);
      __privateAdd(this, _browsingContext);
      __privateAdd(this, _disposables2, new DisposableStack());
      __privateAdd(this, _id);
      __privateSet(this, _browsingContext, context);
    }
    static from(context) {
      var _a3;
      const navigation = new _a2(context);
      __privateMethod(_a3 = navigation, _Navigation_instances, initialize_fn7).call(_a3);
      return navigation;
    }
    get disposed() {
      return __privateGet(this, _disposables2).disposed;
    }
    get request() {
      return __privateGet(this, _request2);
    }
    get navigation() {
      return __privateGet(this, _navigation);
    }
    dispose() {
      this[disposeSymbol]();
    }
    [(_dispose_decorators = [inertIfDisposed], disposeSymbol)]() {
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
  }, _request2 = new WeakMap(), _navigation = new WeakMap(), _browsingContext = new WeakMap(), _disposables2 = new WeakMap(), _id = new WeakMap(), _Navigation_instances = new WeakSet(), initialize_fn7 = function() {
    const browsingContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _browsingContext)));
    browsingContextEmitter.once("closed", () => {
      this.emit("failed", {
        url: __privateGet(this, _browsingContext).url,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.dispose();
    });
    browsingContextEmitter.on("request", ({ request }) => {
      if (request.navigation === void 0 || // If a request with a navigation ID comes in, then the navigation ID is
      // for this navigation.
      !__privateMethod(this, _Navigation_instances, matches_fn).call(this, request.navigation)) {
        return;
      }
      __privateSet(this, _request2, request);
      this.emit("request", request);
      const requestEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _request2)));
      requestEmitter.on("redirect", (request2) => {
        __privateSet(this, _request2, request2);
      });
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _Navigation_instances, session_get)));
    sessionEmitter.on("browsingContext.navigationStarted", (info) => {
      if (info.context !== __privateGet(this, _browsingContext).id || __privateGet(this, _navigation) !== void 0) {
        return;
      }
      __privateSet(this, _navigation, _a2.from(__privateGet(this, _browsingContext)));
    });
    for (const eventName of [
      "browsingContext.domContentLoaded",
      "browsingContext.load"
    ]) {
      sessionEmitter.on(eventName, (info) => {
        if (info.context !== __privateGet(this, _browsingContext).id || info.navigation === null || !__privateMethod(this, _Navigation_instances, matches_fn).call(this, info.navigation)) {
          return;
        }
        this.dispose();
      });
    }
    for (const [eventName, event] of [
      ["browsingContext.fragmentNavigated", "fragment"],
      ["browsingContext.navigationFailed", "failed"],
      ["browsingContext.navigationAborted", "aborted"]
    ]) {
      sessionEmitter.on(eventName, (info) => {
        if (info.context !== __privateGet(this, _browsingContext).id || // Note we don't check if `navigation` is null since `null` means the
        // fragment navigated.
        !__privateMethod(this, _Navigation_instances, matches_fn).call(this, info.navigation)) {
          return;
        }
        this.emit(event, {
          url: info.url,
          timestamp: new Date(info.timestamp)
        });
        this.dispose();
      });
    }
  }, matches_fn = function(navigation) {
    if (__privateGet(this, _navigation) !== void 0 && !__privateGet(this, _navigation).disposed) {
      return false;
    }
    if (__privateGet(this, _id) === void 0) {
      __privateSet(this, _id, navigation);
      return true;
    }
    return __privateGet(this, _id) === navigation;
  }, session_get = function() {
    return __privateGet(this, _browsingContext).userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$d(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$c = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$c = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var _a$1;
let Realm = (() => {
  var _reason, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _disown_decorators;
  let _callFunction_decorators;
  let _evaluate_decorators;
  let _resolveExecutionContextId_decorators;
  return _a2 = class extends _classSuper {
    constructor(id, origin) {
      super();
      __privateAdd(this, _reason, __runInitializers$c(this, _instanceExtraInitializers));
      __publicField(this, "disposables", new DisposableStack());
      __publicField(this, "id");
      __publicField(this, "origin");
      __publicField(this, "executionContextId");
      this.id = id;
      this.origin = origin;
    }
    get disposed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get target() {
      return { realm: this.id };
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[disposeSymbol]();
    }
    async disown(handles) {
      await this.session.send("script.disown", {
        target: this.target,
        handles
      });
    }
    async callFunction(functionDeclaration, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.callFunction", {
        functionDeclaration,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async evaluate(expression, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.evaluate", {
        expression,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async resolveExecutionContextId() {
      if (!this.executionContextId) {
        const { result } = await this.session.connection.send("goog:cdp.resolveRealm", { realm: this.id });
        this.executionContextId = result.executionContextId;
      }
      return this.executionContextId;
    }
    [(_dispose_decorators = [inertIfDisposed], _disown_decorators = [throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _callFunction_decorators = [throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _evaluate_decorators = [throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _resolveExecutionContextId_decorators = [throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Realm already destroyed, probably because all associated browsing contexts closed.");
      this.emit("destroyed", { reason: __privateGet(this, _reason) });
      this.disposables.dispose();
      super[disposeSymbol]();
    }
  }, _reason = new WeakMap(), (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$c(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a2, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: (obj) => "disown" in obj, get: (obj) => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a2, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: (obj) => "callFunction" in obj, get: (obj) => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a2, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: (obj) => "evaluate" in obj, get: (obj) => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a2, null, _resolveExecutionContextId_decorators, { kind: "method", name: "resolveExecutionContextId", static: false, private: false, access: { has: (obj) => "resolveExecutionContextId" in obj, get: (obj) => obj.resolveExecutionContextId }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
const _WindowRealm = class _WindowRealm extends Realm {
  constructor(context, sandbox) {
    super("", "");
    __privateAdd(this, _WindowRealm_instances);
    __publicField(this, "browsingContext");
    __publicField(this, "sandbox");
    __privateAdd(this, _workers, /* @__PURE__ */ new Map());
    this.browsingContext = context;
    this.sandbox = sandbox;
  }
  static from(context, sandbox) {
    var _a2;
    const realm = new _WindowRealm(context, sandbox);
    __privateMethod(_a2 = realm, _WindowRealm_instances, initialize_fn).call(_a2);
    return realm;
  }
  get session() {
    return this.browsingContext.userContext.browser.session;
  }
  get target() {
    return { context: this.browsingContext.id, sandbox: this.sandbox };
  }
};
_workers = new WeakMap();
_WindowRealm_instances = new WeakSet();
initialize_fn = function() {
  const browsingContextEmitter = this.disposables.use(new EventEmitter$1(this.browsingContext));
  browsingContextEmitter.on("closed", ({ reason }) => {
    this.dispose(reason);
  });
  const sessionEmitter = this.disposables.use(new EventEmitter$1(this.session));
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "window" || info.context !== this.browsingContext.id || info.sandbox !== this.sandbox) {
      return;
    }
    this.id = info.realm;
    this.origin = info.origin;
    this.executionContextId = void 0;
    this.emit("updated", this);
  });
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "dedicated-worker") {
      return;
    }
    if (!info.owners.includes(this.id)) {
      return;
    }
    const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
    __privateGet(this, _workers).set(realm.id, realm);
    const realmEmitter = this.disposables.use(new EventEmitter$1(realm));
    realmEmitter.once("destroyed", () => {
      realmEmitter.removeAllListeners();
      __privateGet(this, _workers).delete(realm.id);
    });
    this.emit("worker", realm);
  });
};
let WindowRealm = _WindowRealm;
class DedicatedWorkerRealm extends Realm {
  constructor(owner, id, origin) {
    super(id, origin);
    __privateAdd(this, _DedicatedWorkerRealm_instances);
    __privateAdd(this, _workers2, /* @__PURE__ */ new Map());
    __publicField(this, "owners");
    this.owners = /* @__PURE__ */ new Set([owner]);
  }
  static from(owner, id, origin) {
    var _a2;
    const realm = new _a$1(owner, id, origin);
    __privateMethod(_a2 = realm, _DedicatedWorkerRealm_instances, initialize_fn2).call(_a2);
    return realm;
  }
  get session() {
    return this.owners.values().next().value.session;
  }
}
_workers2 = new WeakMap();
_DedicatedWorkerRealm_instances = new WeakSet();
initialize_fn2 = function() {
  const sessionEmitter = this.disposables.use(new EventEmitter$1(this.session));
  sessionEmitter.on("script.realmDestroyed", (info) => {
    if (info.realm !== this.id) {
      return;
    }
    this.dispose("Realm already destroyed.");
  });
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "dedicated-worker") {
      return;
    }
    if (!info.owners.includes(this.id)) {
      return;
    }
    const realm = _a$1.from(this, info.realm, info.origin);
    __privateGet(this, _workers2).set(realm.id, realm);
    const realmEmitter = this.disposables.use(new EventEmitter$1(realm));
    realmEmitter.once("destroyed", () => {
      __privateGet(this, _workers2).delete(realm.id);
    });
    this.emit("worker", realm);
  });
};
_a$1 = DedicatedWorkerRealm;
const _SharedWorkerRealm = class _SharedWorkerRealm extends Realm {
  constructor(browser, id, origin) {
    super(id, origin);
    __privateAdd(this, _SharedWorkerRealm_instances);
    __privateAdd(this, _workers3, /* @__PURE__ */ new Map());
    __publicField(this, "browser");
    this.browser = browser;
  }
  static from(browser, id, origin) {
    var _a2;
    const realm = new _SharedWorkerRealm(browser, id, origin);
    __privateMethod(_a2 = realm, _SharedWorkerRealm_instances, initialize_fn3).call(_a2);
    return realm;
  }
  get session() {
    return this.browser.session;
  }
};
_workers3 = new WeakMap();
_SharedWorkerRealm_instances = new WeakSet();
initialize_fn3 = function() {
  const sessionEmitter = this.disposables.use(new EventEmitter$1(this.session));
  sessionEmitter.on("script.realmDestroyed", (info) => {
    if (info.realm !== this.id) {
      return;
    }
    this.dispose("Realm already destroyed.");
  });
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "dedicated-worker") {
      return;
    }
    if (!info.owners.includes(this.id)) {
      return;
    }
    const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
    __privateGet(this, _workers3).set(realm.id, realm);
    const realmEmitter = this.disposables.use(new EventEmitter$1(realm));
    realmEmitter.once("destroyed", () => {
      __privateGet(this, _workers3).delete(realm.id);
    });
    this.emit("worker", realm);
  });
};
let SharedWorkerRealm = _SharedWorkerRealm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$b = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$b = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Request = (() => {
  var _error, _redirect, _response2, _browsingContext, _disposables2, _event, _Request_instances, initialize_fn7, session_get, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return _a2 = class extends _classSuper {
    constructor(browsingContext, event) {
      super();
      __privateAdd(this, _Request_instances);
      __privateAdd(this, _error, __runInitializers$b(this, _instanceExtraInitializers));
      __privateAdd(this, _redirect);
      __privateAdd(this, _response2);
      __privateAdd(this, _browsingContext);
      __privateAdd(this, _disposables2, new DisposableStack());
      __privateAdd(this, _event);
      __privateSet(this, _browsingContext, browsingContext);
      __privateSet(this, _event, event);
    }
    static from(browsingContext, event) {
      var _a3;
      const request = new _a2(browsingContext, event);
      __privateMethod(_a3 = request, _Request_instances, initialize_fn7).call(_a3);
      return request;
    }
    get disposed() {
      return __privateGet(this, _disposables2).disposed;
    }
    get error() {
      return __privateGet(this, _error);
    }
    get headers() {
      return __privateGet(this, _event).request.headers;
    }
    get id() {
      return __privateGet(this, _event).request.request;
    }
    get initiator() {
      return __privateGet(this, _event).initiator;
    }
    get method() {
      return __privateGet(this, _event).request.method;
    }
    get navigation() {
      return __privateGet(this, _event).navigation ?? void 0;
    }
    get redirect() {
      return __privateGet(this, _redirect);
    }
    get lastRedirect() {
      let redirect = __privateGet(this, _redirect);
      while (redirect) {
        if (redirect && !__privateGet(redirect, _redirect)) {
          return redirect;
        }
        redirect = __privateGet(redirect, _redirect);
      }
      return redirect;
    }
    get response() {
      return __privateGet(this, _response2);
    }
    get url() {
      return __privateGet(this, _event).request.url;
    }
    get isBlocked() {
      return __privateGet(this, _event).isBlocked;
    }
    get resourceType() {
      return __privateGet(this, _event).request["goog:resourceType"] ?? void 0;
    }
    get postData() {
      return __privateGet(this, _event).request["goog:postData"] ?? void 0;
    }
    get hasPostData() {
      return __privateGet(this, _event).request["goog:hasPostData"] ?? false;
    }
    async continueRequest({ url, method, headers, cookies, body }) {
      await __privateGet(this, _Request_instances, session_get).send("network.continueRequest", {
        request: this.id,
        url,
        method,
        headers,
        body,
        cookies
      });
    }
    async failRequest() {
      await __privateGet(this, _Request_instances, session_get).send("network.failRequest", {
        request: this.id
      });
    }
    async provideResponse({ statusCode, reasonPhrase, headers, body }) {
      await __privateGet(this, _Request_instances, session_get).send("network.provideResponse", {
        request: this.id,
        statusCode,
        reasonPhrase,
        headers,
        body
      });
    }
    async continueWithAuth(parameters) {
      if (parameters.action === "provideCredentials") {
        await __privateGet(this, _Request_instances, session_get).send("network.continueWithAuth", {
          request: this.id,
          action: parameters.action,
          credentials: parameters.credentials
        });
      } else {
        await __privateGet(this, _Request_instances, session_get).send("network.continueWithAuth", {
          request: this.id,
          action: parameters.action
        });
      }
    }
    dispose() {
      this[disposeSymbol]();
    }
    [(_dispose_decorators = [inertIfDisposed], disposeSymbol)]() {
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
    timing() {
      return __privateGet(this, _event).request.timings;
    }
  }, _error = new WeakMap(), _redirect = new WeakMap(), _response2 = new WeakMap(), _browsingContext = new WeakMap(), _disposables2 = new WeakMap(), _event = new WeakMap(), _Request_instances = new WeakSet(), initialize_fn7 = function() {
    const browsingContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _browsingContext)));
    browsingContextEmitter.once("closed", ({ reason }) => {
      __privateSet(this, _error, reason);
      this.emit("error", __privateGet(this, _error));
      this.dispose();
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _Request_instances, session_get)));
    sessionEmitter.on("network.beforeRequestSent", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || event.redirectCount !== __privateGet(this, _event).redirectCount + 1) {
        return;
      }
      __privateSet(this, _redirect, _a2.from(__privateGet(this, _browsingContext), event));
      this.emit("redirect", __privateGet(this, _redirect));
      this.dispose();
    });
    sessionEmitter.on("network.authRequired", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || // Don't try to authenticate for events that are not blocked
      !event.isBlocked) {
        return;
      }
      this.emit("authenticate", void 0);
    });
    sessionEmitter.on("network.fetchError", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || __privateGet(this, _event).redirectCount !== event.redirectCount) {
        return;
      }
      __privateSet(this, _error, event.errorText);
      this.emit("error", __privateGet(this, _error));
      this.dispose();
    });
    sessionEmitter.on("network.responseCompleted", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || __privateGet(this, _event).redirectCount !== event.redirectCount) {
        return;
      }
      __privateSet(this, _response2, event.response);
      __privateGet(this, _event).request.timings = event.request.timings;
      this.emit("success", __privateGet(this, _response2));
      if (__privateGet(this, _response2).status >= 300 && __privateGet(this, _response2).status < 400) {
        return;
      }
      this.dispose();
    });
  }, session_get = function() {
    return __privateGet(this, _browsingContext).userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$b(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$a = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$a = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let UserPrompt = (() => {
  var _reason, _result, _disposables2, _UserPrompt_instances, initialize_fn7, session_get, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _handle_decorators;
  return _a2 = class extends _classSuper {
    constructor(context, info) {
      super();
      __privateAdd(this, _UserPrompt_instances);
      __privateAdd(this, _reason, __runInitializers$a(this, _instanceExtraInitializers));
      __privateAdd(this, _result);
      __privateAdd(this, _disposables2, new DisposableStack());
      __publicField(this, "browsingContext");
      __publicField(this, "info");
      this.browsingContext = context;
      this.info = info;
    }
    static from(browsingContext, info) {
      var _a3;
      const userPrompt = new _a2(browsingContext, info);
      __privateMethod(_a3 = userPrompt, _UserPrompt_instances, initialize_fn7).call(_a3);
      return userPrompt;
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get handled() {
      if (this.info.handler === "accept" || this.info.handler === "dismiss") {
        return true;
      }
      return __privateGet(this, _result) !== void 0;
    }
    get result() {
      return __privateGet(this, _result);
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[disposeSymbol]();
    }
    async handle(options = {}) {
      await __privateGet(this, _UserPrompt_instances, session_get).send("browsingContext.handleUserPrompt", {
        ...options,
        context: this.info.context
      });
      return __privateGet(this, _result);
    }
    [(_dispose_decorators = [inertIfDisposed], _handle_decorators = [throwIfDisposed((prompt) => {
      return __privateGet(prompt, _reason);
    })], disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "User prompt already closed, probably because the associated browsing context was destroyed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
  }, _reason = new WeakMap(), _result = new WeakMap(), _disposables2 = new WeakMap(), _UserPrompt_instances = new WeakSet(), initialize_fn7 = function() {
    const browserContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(this.browsingContext));
    browserContextEmitter.once("closed", ({ reason }) => {
      this.dispose(`User prompt already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _UserPrompt_instances, session_get)));
    sessionEmitter.on("browsingContext.userPromptClosed", (parameters) => {
      if (parameters.context !== this.browsingContext.id) {
        return;
      }
      __privateSet(this, _result, parameters);
      this.emit("handled", parameters);
      this.dispose("User prompt already handled.");
    });
  }, session_get = function() {
    return this.browsingContext.userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$a(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$a(_a2, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: (obj) => "handle" in obj, get: (obj) => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$9 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$9 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let BrowsingContext = (() => {
  var _navigation, _reason, _url2, _children, _disposables2, _realms, _requests, _BrowsingContext_instances, initialize_fn7, session_get, createWindowRealm_fn, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _activate_decorators;
  let _captureScreenshot_decorators;
  let _close_decorators;
  let _traverseHistory_decorators;
  let _navigate_decorators;
  let _reload_decorators;
  let _setCacheBehavior_decorators;
  let _print_decorators;
  let _handleUserPrompt_decorators;
  let _setViewport_decorators;
  let _performActions_decorators;
  let _releaseActions_decorators;
  let _createWindowRealm_decorators;
  let _addPreloadScript_decorators;
  let _addIntercept_decorators;
  let _removePreloadScript_decorators;
  let _getCookies_decorators;
  let _setCookie_decorators;
  let _setFiles_decorators;
  let _subscribe_decorators;
  let _addInterception_decorators;
  let _deleteCookie_decorators;
  let _locateNodes_decorators;
  return _a2 = class extends _classSuper {
    constructor(context, parent, id, url, originalOpener) {
      super();
      __privateAdd(this, _BrowsingContext_instances);
      __privateAdd(this, _navigation, __runInitializers$9(this, _instanceExtraInitializers));
      __privateAdd(this, _reason);
      __privateAdd(this, _url2);
      __privateAdd(this, _children, /* @__PURE__ */ new Map());
      __privateAdd(this, _disposables2, new DisposableStack());
      __privateAdd(this, _realms, /* @__PURE__ */ new Map());
      __privateAdd(this, _requests, /* @__PURE__ */ new Map());
      __publicField(this, "defaultRealm");
      __publicField(this, "id");
      __publicField(this, "parent");
      __publicField(this, "userContext");
      __publicField(this, "originalOpener");
      __privateSet(this, _url2, url);
      this.id = id;
      this.parent = parent;
      this.userContext = context;
      this.originalOpener = originalOpener;
      this.defaultRealm = __privateMethod(this, _BrowsingContext_instances, createWindowRealm_fn).call(this);
    }
    static from(userContext, parent, id, url, originalOpener) {
      var _a3;
      const browsingContext = new _a2(userContext, parent, id, url, originalOpener);
      __privateMethod(_a3 = browsingContext, _BrowsingContext_instances, initialize_fn7).call(_a3);
      return browsingContext;
    }
    get children() {
      return __privateGet(this, _children).values();
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get realms() {
      const self = this;
      return function* () {
        yield self.defaultRealm;
        yield* __privateGet(self, _realms).values();
      }();
    }
    get top() {
      let context = this;
      for (let { parent } = context; parent; { parent } = context) {
        context = parent;
      }
      return context;
    }
    get url() {
      return __privateGet(this, _url2);
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      for (const context of __privateGet(this, _children).values()) {
        context.dispose("Parent browsing context was disposed");
      }
      this[disposeSymbol]();
    }
    async activate() {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.activate", {
        context: this.id
      });
    }
    async captureScreenshot(options = {}) {
      const { result: { data } } = await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.captureScreenshot", {
        context: this.id,
        ...options
      });
      return data;
    }
    async close(promptUnload) {
      await Promise.all([...__privateGet(this, _children).values()].map(async (child) => {
        await child.close(promptUnload);
      }));
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.close", {
        context: this.id,
        promptUnload
      });
    }
    async traverseHistory(delta) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.traverseHistory", {
        context: this.id,
        delta
      });
    }
    async navigate(url, wait) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.navigate", {
        context: this.id,
        url,
        wait
      });
    }
    async reload(options = {}) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.reload", {
        context: this.id,
        ...options
      });
    }
    async setCacheBehavior(cacheBehavior) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("network.setCacheBehavior", {
        contexts: [this.id],
        cacheBehavior
      });
    }
    async print(options = {}) {
      const { result: { data } } = await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.print", {
        context: this.id,
        ...options
      });
      return data;
    }
    async handleUserPrompt(options = {}) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.handleUserPrompt", {
        context: this.id,
        ...options
      });
    }
    async setViewport(options = {}) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.setViewport", {
        context: this.id,
        ...options
      });
    }
    async performActions(actions) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("input.performActions", {
        context: this.id,
        actions
      });
    }
    async releaseActions() {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("input.releaseActions", {
        context: this.id
      });
    }
    createWindowRealm(sandbox) {
      return __privateMethod(this, _BrowsingContext_instances, createWindowRealm_fn).call(this, sandbox);
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      return await this.userContext.browser.addPreloadScript(functionDeclaration, {
        ...options,
        contexts: [this]
      });
    }
    async addIntercept(options) {
      const { result: { intercept } } = await this.userContext.browser.session.send("network.addIntercept", {
        ...options,
        contexts: [this.id]
      });
      return intercept;
    }
    async removePreloadScript(script) {
      await this.userContext.browser.removePreloadScript(script);
    }
    async getCookies(options = {}) {
      const { result: { cookies } } = await __privateGet(this, _BrowsingContext_instances, session_get).send("storage.getCookies", {
        ...options,
        partition: {
          type: "context",
          context: this.id
        }
      });
      return cookies;
    }
    async setCookie(cookie) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("storage.setCookie", {
        cookie,
        partition: {
          type: "context",
          context: this.id
        }
      });
    }
    async setFiles(element, files) {
      await __privateGet(this, _BrowsingContext_instances, session_get).send("input.setFiles", {
        context: this.id,
        element,
        files
      });
    }
    async subscribe(events2) {
      await __privateGet(this, _BrowsingContext_instances, session_get).subscribe(events2, [this.id]);
    }
    async addInterception(events2) {
      await __privateGet(this, _BrowsingContext_instances, session_get).subscribe(events2, [this.id]);
    }
    [(_dispose_decorators = [inertIfDisposed], _activate_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _captureScreenshot_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _close_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _traverseHistory_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _navigate_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _reload_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setCacheBehavior_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _print_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _handleUserPrompt_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setViewport_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _performActions_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _releaseActions_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _createWindowRealm_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addPreloadScript_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addIntercept_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _removePreloadScript_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _getCookies_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setCookie_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setFiles_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _subscribe_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addInterception_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Browsing context already closed, probably because the user context closed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
    async deleteCookie(...cookieFilters) {
      await Promise.all(cookieFilters.map(async (filter2) => {
        await __privateGet(this, _BrowsingContext_instances, session_get).send("storage.deleteCookies", {
          filter: filter2,
          partition: {
            type: "context",
            context: this.id
          }
        });
      }));
    }
    async locateNodes(locator, startNodes) {
      const result = await __privateGet(this, _BrowsingContext_instances, session_get).send("browsingContext.locateNodes", {
        context: this.id,
        locator,
        startNodes: startNodes.length ? startNodes : void 0
      });
      return result.result.nodes;
    }
  }, _navigation = new WeakMap(), _reason = new WeakMap(), _url2 = new WeakMap(), _children = new WeakMap(), _disposables2 = new WeakMap(), _realms = new WeakMap(), _requests = new WeakMap(), _BrowsingContext_instances = new WeakSet(), initialize_fn7 = function() {
    const userContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(this.userContext));
    userContextEmitter.once("closed", ({ reason }) => {
      this.dispose(`Browsing context already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _BrowsingContext_instances, session_get)));
    sessionEmitter.on("browsingContext.contextCreated", (info) => {
      if (info.parent !== this.id) {
        return;
      }
      const browsingContext = _a2.from(this.userContext, this, info.context, info.url, info.originalOpener);
      __privateGet(this, _children).set(info.context, browsingContext);
      const browsingContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(browsingContext));
      browsingContextEmitter.once("closed", () => {
        browsingContextEmitter.removeAllListeners();
        __privateGet(this, _children).delete(browsingContext.id);
      });
      this.emit("browsingcontext", { browsingContext });
    });
    sessionEmitter.on("browsingContext.contextDestroyed", (info) => {
      if (info.context !== this.id) {
        return;
      }
      this.dispose("Browsing context already closed.");
    });
    sessionEmitter.on("browsingContext.historyUpdated", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url2, info.url);
      this.emit("historyUpdated", void 0);
    });
    sessionEmitter.on("browsingContext.domContentLoaded", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url2, info.url);
      this.emit("DOMContentLoaded", void 0);
    });
    sessionEmitter.on("browsingContext.load", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url2, info.url);
      this.emit("load", void 0);
    });
    sessionEmitter.on("browsingContext.navigationStarted", (info) => {
      if (info.context !== this.id) {
        return;
      }
      for (const [id, request] of __privateGet(this, _requests)) {
        if (request.disposed) {
          __privateGet(this, _requests).delete(id);
        }
      }
      if (__privateGet(this, _navigation) !== void 0 && !__privateGet(this, _navigation).disposed) {
        return;
      }
      __privateSet(this, _navigation, Navigation.from(this));
      const navigationEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _navigation)));
      for (const eventName of ["fragment", "failed", "aborted"]) {
        navigationEmitter.once(eventName, ({ url }) => {
          navigationEmitter[disposeSymbol]();
          __privateSet(this, _url2, url);
        });
      }
      this.emit("navigation", { navigation: __privateGet(this, _navigation) });
    });
    sessionEmitter.on("network.beforeRequestSent", (event) => {
      if (event.context !== this.id) {
        return;
      }
      if (__privateGet(this, _requests).has(event.request.request)) {
        return;
      }
      const request = Request.from(this, event);
      __privateGet(this, _requests).set(request.id, request);
      this.emit("request", { request });
    });
    sessionEmitter.on("log.entryAdded", (entry) => {
      if (entry.source.context !== this.id) {
        return;
      }
      this.emit("log", { entry });
    });
    sessionEmitter.on("browsingContext.userPromptOpened", (info) => {
      if (info.context !== this.id) {
        return;
      }
      const userPrompt = UserPrompt.from(this, info);
      this.emit("userprompt", { userPrompt });
    });
  }, session_get = function() {
    return this.userContext.browser.session;
  }, createWindowRealm_fn = function(sandbox) {
    const realm = WindowRealm.from(this, sandbox);
    realm.on("worker", (realm2) => {
      this.emit("worker", { realm: realm2 });
    });
    return realm;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _deleteCookie_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })];
    _locateNodes_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })];
    __esDecorate$9(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: (obj) => "activate" in obj, get: (obj) => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: (obj) => "captureScreenshot" in obj, get: (obj) => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: (obj) => "traverseHistory" in obj, get: (obj) => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: (obj) => "navigate" in obj, get: (obj) => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: (obj) => "reload" in obj, get: (obj) => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _setCacheBehavior_decorators, { kind: "method", name: "setCacheBehavior", static: false, private: false, access: { has: (obj) => "setCacheBehavior" in obj, get: (obj) => obj.setCacheBehavior }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: (obj) => "print" in obj, get: (obj) => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: (obj) => "handleUserPrompt" in obj, get: (obj) => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: (obj) => "setViewport" in obj, get: (obj) => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: (obj) => "performActions" in obj, get: (obj) => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: (obj) => "releaseActions" in obj, get: (obj) => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: (obj) => "createWindowRealm" in obj, get: (obj) => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _addIntercept_decorators, { kind: "method", name: "addIntercept", static: false, private: false, access: { has: (obj) => "addIntercept" in obj, get: (obj) => obj.addIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: (obj) => "getCookies" in obj, get: (obj) => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: (obj) => "setCookie" in obj, get: (obj) => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: (obj) => "setFiles" in obj, get: (obj) => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _addInterception_decorators, { kind: "method", name: "addInterception", static: false, private: false, access: { has: (obj) => "addInterception" in obj, get: (obj) => obj.addInterception }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _deleteCookie_decorators, { kind: "method", name: "deleteCookie", static: false, private: false, access: { has: (obj) => "deleteCookie" in obj, get: (obj) => obj.deleteCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a2, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: (obj) => "locateNodes" in obj, get: (obj) => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$8 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$8 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let UserContext = (() => {
  var _a2, _reason, _browsingContexts, _disposables2, _id, _UserContext_instances, initialize_fn7, session_get;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _createBrowsingContext_decorators;
  let _remove_decorators;
  let _getCookies_decorators;
  let _setCookie_decorators;
  let _setPermissions_decorators;
  return _a2 = class extends _classSuper {
    constructor(browser, id) {
      super();
      __privateAdd(this, _UserContext_instances);
      __privateAdd(this, _reason, __runInitializers$8(this, _instanceExtraInitializers));
      // Note these are only top-level contexts.
      __privateAdd(this, _browsingContexts, /* @__PURE__ */ new Map());
      __privateAdd(this, _disposables2, new DisposableStack());
      __privateAdd(this, _id);
      __publicField(this, "browser");
      __privateSet(this, _id, id);
      this.browser = browser;
    }
    static create(browser, id) {
      var _a3;
      const context = new _a2(browser, id);
      __privateMethod(_a3 = context, _UserContext_instances, initialize_fn7).call(_a3);
      return context;
    }
    get browsingContexts() {
      return __privateGet(this, _browsingContexts).values();
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get id() {
      return __privateGet(this, _id);
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[disposeSymbol]();
    }
    async createBrowsingContext(type, options = {}) {
      var _a3;
      const { result: { context: contextId } } = await __privateGet(this, _UserContext_instances, session_get).send("browsingContext.create", {
        type,
        ...options,
        referenceContext: (_a3 = options.referenceContext) == null ? void 0 : _a3.id,
        userContext: __privateGet(this, _id)
      });
      const browsingContext = __privateGet(this, _browsingContexts).get(contextId);
      assert$1(browsingContext, "The WebDriver BiDi implementation is failing to create a browsing context correctly.");
      return browsingContext;
    }
    async remove() {
      try {
        await __privateGet(this, _UserContext_instances, session_get).send("browser.removeUserContext", {
          userContext: __privateGet(this, _id)
        });
      } finally {
        this.dispose("User context already closed.");
      }
    }
    async getCookies(options = {}, sourceOrigin = void 0) {
      const { result: { cookies } } = await __privateGet(this, _UserContext_instances, session_get).send("storage.getCookies", {
        ...options,
        partition: {
          type: "storageKey",
          userContext: __privateGet(this, _id),
          sourceOrigin
        }
      });
      return cookies;
    }
    async setCookie(cookie, sourceOrigin) {
      await __privateGet(this, _UserContext_instances, session_get).send("storage.setCookie", {
        cookie,
        partition: {
          type: "storageKey",
          sourceOrigin,
          userContext: this.id
        }
      });
    }
    async setPermissions(origin, descriptor, state) {
      await __privateGet(this, _UserContext_instances, session_get).send("permissions.setPermission", {
        origin,
        descriptor,
        state,
        userContext: __privateGet(this, _id)
      });
    }
    [(_dispose_decorators = [inertIfDisposed], _createBrowsingContext_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _remove_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _getCookies_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setCookie_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setPermissions_decorators = [throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "User context already closed, probably because the browser disconnected/closed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
  }, _reason = new WeakMap(), _browsingContexts = new WeakMap(), _disposables2 = new WeakMap(), _id = new WeakMap(), _UserContext_instances = new WeakSet(), initialize_fn7 = function() {
    const browserEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(this.browser));
    browserEmitter.once("closed", ({ reason }) => {
      this.dispose(`User context was closed: ${reason}`);
    });
    browserEmitter.once("disconnected", ({ reason }) => {
      this.dispose(`User context was closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(__privateGet(this, _UserContext_instances, session_get)));
    sessionEmitter.on("browsingContext.contextCreated", (info) => {
      if (info.parent) {
        return;
      }
      if (info.userContext !== __privateGet(this, _id)) {
        return;
      }
      const browsingContext = BrowsingContext.from(this, void 0, info.context, info.url, info.originalOpener);
      __privateGet(this, _browsingContexts).set(browsingContext.id, browsingContext);
      const browsingContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(browsingContext));
      browsingContextEmitter.on("closed", () => {
        browsingContextEmitter.removeAllListeners();
        __privateGet(this, _browsingContexts).delete(browsingContext.id);
      });
      this.emit("browsingcontext", { browsingContext });
    });
  }, session_get = function() {
    return this.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$8(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a2, null, _createBrowsingContext_decorators, { kind: "method", name: "createBrowsingContext", static: false, private: false, access: { has: (obj) => "createBrowsingContext" in obj, get: (obj) => obj.createBrowsingContext }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a2, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: (obj) => "remove" in obj, get: (obj) => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a2, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: (obj) => "getCookies" in obj, get: (obj) => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a2, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: (obj) => "setCookie" in obj, get: (obj) => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a2, null, _setPermissions_decorators, { kind: "method", name: "setPermissions", static: false, private: false, access: { has: (obj) => "setPermissions" in obj, get: (obj) => obj.setPermissions }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), __publicField(_a2, "DEFAULT", "default"), _a2;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiDeserializer {
  static deserialize(result) {
    var _a2, _b, _c, _d;
    if (!result) {
      debugError("Service did not produce a result.");
      return void 0;
    }
    switch (result.type) {
      case "array":
        return (_a2 = result.value) == null ? void 0 : _a2.map((value) => {
          return this.deserialize(value);
        });
      case "set":
        return (_b = result.value) == null ? void 0 : _b.reduce((acc, value) => {
          return acc.add(this.deserialize(value));
        }, /* @__PURE__ */ new Set());
      case "object":
        return (_c = result.value) == null ? void 0 : _c.reduce((acc, tuple) => {
          const { key, value } = __privateMethod(this, _BidiDeserializer_static, deserializeTuple_fn).call(this, tuple);
          acc[key] = value;
          return acc;
        }, {});
      case "map":
        return (_d = result.value) == null ? void 0 : _d.reduce((acc, tuple) => {
          const { key, value } = __privateMethod(this, _BidiDeserializer_static, deserializeTuple_fn).call(this, tuple);
          return acc.set(key, value);
        }, /* @__PURE__ */ new Map());
      case "promise":
        return {};
      case "regexp":
        return new RegExp(result.value.pattern, result.value.flags);
      case "date":
        return new Date(result.value);
      case "undefined":
        return void 0;
      case "null":
        return null;
      case "number":
        return __privateMethod(this, _BidiDeserializer_static, deserializeNumber_fn).call(this, result.value);
      case "bigint":
        return BigInt(result.value);
      case "boolean":
        return Boolean(result.value);
      case "string":
        return result.value;
    }
    debugError(`Deserialization of type ${result.type} not supported.`);
    return void 0;
  }
}
_BidiDeserializer_static = new WeakSet();
deserializeNumber_fn = function(value) {
  switch (value) {
    case "-0":
      return -0;
    case "NaN":
      return NaN;
    case "Infinity":
      return Infinity;
    case "-Infinity":
      return -Infinity;
    default:
      return value;
  }
};
deserializeTuple_fn = function([serializedKey, serializedValue]) {
  const key = typeof serializedKey === "string" ? serializedKey : this.deserialize(serializedKey);
  const value = this.deserialize(serializedValue);
  return { key, value };
};
__privateAdd(BidiDeserializer, _BidiDeserializer_static);
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiDialog = class _BidiDialog extends Dialog {
  constructor(prompt) {
    super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
    __privateAdd(this, _prompt);
    __privateSet(this, _prompt, prompt);
    this.handled = prompt.handled;
  }
  static from(prompt) {
    return new _BidiDialog(prompt);
  }
  async handle(options) {
    await __privateGet(this, _prompt).handle({
      accept: options.accept,
      userText: options.text
    });
  }
};
_prompt = new WeakMap();
let BidiDialog = _BidiDialog;
var protocolExports = requireProtocol();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiJSHandle = class _BidiJSHandle extends JSHandle {
  constructor(value, realm) {
    super();
    __privateAdd(this, _remoteValue);
    __publicField(this, "realm");
    __privateAdd(this, _disposed, false);
    __privateSet(this, _remoteValue, value);
    this.realm = realm;
  }
  static from(value, realm) {
    return new _BidiJSHandle(value, realm);
  }
  get disposed() {
    return __privateGet(this, _disposed);
  }
  async jsonValue() {
    return await this.evaluate((value) => {
      return value;
    });
  }
  asElement() {
    return null;
  }
  async dispose() {
    if (__privateGet(this, _disposed)) {
      return;
    }
    __privateSet(this, _disposed, true);
    await this.realm.destroyHandles([this]);
  }
  get isPrimitiveValue() {
    switch (__privateGet(this, _remoteValue).type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "undefined":
      case "null":
        return true;
      default:
        return false;
    }
  }
  toString() {
    if (this.isPrimitiveValue) {
      return "JSHandle:" + BidiDeserializer.deserialize(__privateGet(this, _remoteValue));
    }
    return "JSHandle@" + __privateGet(this, _remoteValue).type;
  }
  get id() {
    return "handle" in __privateGet(this, _remoteValue) ? __privateGet(this, _remoteValue).handle : void 0;
  }
  remoteValue() {
    return __privateGet(this, _remoteValue);
  }
  remoteObject() {
    throw new UnsupportedOperation("Not available in WebDriver BiDi");
  }
};
_remoteValue = new WeakMap();
_disposed = new WeakMap();
let BidiJSHandle = _BidiJSHandle;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$7 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$7 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource$5 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$5 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let BidiElementHandle = (() => {
  var _backendNodeId, _a2;
  let _classSuper = ElementHandle;
  let _instanceExtraInitializers = [];
  let _autofill_decorators;
  let _contentFrame_decorators;
  return _a2 = class extends _classSuper {
    constructor(value, realm) {
      super(BidiJSHandle.from(value, realm));
      __privateAdd(this, _backendNodeId, __runInitializers$7(this, _instanceExtraInitializers));
    }
    static from(value, realm) {
      return new _a2(value, realm);
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
    async autofill(data) {
      const client = this.frame.client;
      const nodeInfo = await client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      const fieldId = nodeInfo.node.backendNodeId;
      const frameId = this.frame._id;
      await client.send("Autofill.trigger", {
        fieldId,
        frameId,
        card: data.creditCard
      });
    }
    async contentFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource$5(env_1, await this.evaluateHandle((element) => {
          if (element instanceof HTMLIFrameElement || element instanceof HTMLFrameElement) {
            return element.contentWindow;
          }
          return;
        }), false);
        const value = handle.remoteValue();
        if (value.type === "window") {
          return this.frame.page().frames().find((frame) => {
            return frame._id === value.value.context;
          }) ?? null;
        }
        return null;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$5(env_1);
      }
    }
    async uploadFile(...files) {
      const path = environment.value.path;
      if (path) {
        files = files.map((file) => {
          if (path.win32.isAbsolute(file) || path.posix.isAbsolute(file)) {
            return file;
          } else {
            return path.resolve(file);
          }
        });
      }
      await this.frame.setFiles(this, files);
    }
    async *queryAXTree(name, role) {
      const results = await this.frame.locateNodes(this, {
        type: "accessibility",
        value: {
          role,
          name
        }
      });
      return yield* AsyncIterableUtil.map(results, (node) => {
        return Promise.resolve(_a2.from(node, this.realm));
      });
    }
    async backendNodeId() {
      if (!this.frame.page().browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      if (__privateGet(this, _backendNodeId)) {
        return __privateGet(this, _backendNodeId);
      }
      const { node } = await this.frame.client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      __privateSet(this, _backendNodeId, node.backendNodeId);
      return __privateGet(this, _backendNodeId);
    }
  }, _backendNodeId = new WeakMap(), (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _autofill_decorators = [throwIfDisposed()];
    _contentFrame_decorators = [throwIfDisposed(), bindIsolatedHandle];
    __esDecorate$7(_a2, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: (obj) => "autofill" in obj, get: (obj) => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$7(_a2, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: (obj) => "contentFrame" in obj, get: (obj) => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource$4 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$4 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
const _ExposeableFunction = class _ExposeableFunction {
  constructor(frame, name, apply, isolate = false) {
    __privateAdd(this, _ExposeableFunction_instances);
    __privateAdd(this, _frame);
    __publicField(this, "name");
    __privateAdd(this, _apply);
    __privateAdd(this, _isolate);
    __privateAdd(this, _channel);
    __privateAdd(this, _scripts, []);
    __privateAdd(this, _disposables, new DisposableStack());
    __privateAdd(this, _handleMessage, async (params) => {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        if (params.channel !== __privateGet(this, _channel)) {
          return;
        }
        const realm = __privateMethod(this, _ExposeableFunction_instances, getRealm_fn).call(this, params.source);
        if (!realm) {
          return;
        }
        const dataHandle = __addDisposableResource$4(env_1, BidiJSHandle.from(params.data, realm), false);
        const argsHandle = __addDisposableResource$4(env_1, await dataHandle.evaluateHandle(([, , args2]) => {
          return args2;
        }), false);
        const stack = __addDisposableResource$4(env_1, new DisposableStack(), false);
        const args = [];
        for (const [index, handle] of await argsHandle.getProperties()) {
          stack.use(handle);
          if (handle instanceof BidiElementHandle) {
            args[+index] = handle;
            stack.use(handle);
            continue;
          }
          args[+index] = handle.jsonValue();
        }
        let result;
        try {
          result = await __privateGet(this, _apply).call(this, ...await Promise.all(args));
        } catch (error) {
          try {
            if (error instanceof Error) {
              await dataHandle.evaluate(([, reject], name, message, stack2) => {
                const error2 = new Error(message);
                error2.name = name;
                if (stack2) {
                  error2.stack = stack2;
                }
                reject(error2);
              }, error.name, error.message, error.stack);
            } else {
              await dataHandle.evaluate(([, reject], error2) => {
                reject(error2);
              }, error);
            }
          } catch (error2) {
            debugError(error2);
          }
          return;
        }
        try {
          await dataHandle.evaluate(([resolve], result2) => {
            resolve(result2);
          }, result);
        } catch (error) {
          debugError(error);
        }
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$4(env_1);
      }
    });
    __privateSet(this, _frame, frame);
    this.name = name;
    __privateSet(this, _apply, apply);
    __privateSet(this, _isolate, isolate);
    __privateSet(this, _channel, `__puppeteer__${__privateGet(this, _frame)._id}_page_exposeFunction_${this.name}`);
  }
  static async from(frame, name, apply, isolate = false) {
    var _a2;
    const func = new _ExposeableFunction(frame, name, apply, isolate);
    await __privateMethod(_a2 = func, _ExposeableFunction_instances, initialize_fn4).call(_a2);
    return func;
  }
  [Symbol.dispose]() {
    void this[Symbol.asyncDispose]().catch(debugError);
  }
  async [Symbol.asyncDispose]() {
    __privateGet(this, _disposables).dispose();
    await Promise.all(__privateGet(this, _scripts).map(async ([frame, script]) => {
      const realm = __privateGet(this, _isolate) ? frame.isolatedRealm() : frame.mainRealm();
      try {
        await Promise.all([
          realm.evaluate((name) => {
            delete globalThis[name];
          }, this.name),
          ...frame.childFrames().map((childFrame) => {
            return childFrame.evaluate((name) => {
              delete globalThis[name];
            }, this.name);
          }),
          frame.browsingContext.removePreloadScript(script)
        ]);
      } catch (error) {
        debugError(error);
      }
    }));
  }
};
_frame = new WeakMap();
_apply = new WeakMap();
_isolate = new WeakMap();
_channel = new WeakMap();
_scripts = new WeakMap();
_disposables = new WeakMap();
_ExposeableFunction_instances = new WeakSet();
initialize_fn4 = async function() {
  const connection = __privateGet(this, _ExposeableFunction_instances, connection_get);
  const channel = {
    type: "channel",
    value: {
      channel: __privateGet(this, _channel),
      ownership: "root"
    }
  };
  const connectionEmitter = __privateGet(this, _disposables).use(new EventEmitter$1(connection));
  connectionEmitter.on(protocolExports.ChromiumBidi.Script.EventNames.Message, __privateGet(this, _handleMessage));
  const functionDeclaration = stringifyFunction(interpolateFunction((callback) => {
    Object.assign(globalThis, {
      [PLACEHOLDER("name")]: function(...args) {
        return new Promise((resolve, reject) => {
          callback([resolve, reject, args]);
        });
      }
    });
  }, { name: JSON.stringify(this.name) }));
  const frames = [__privateGet(this, _frame)];
  for (const frame of frames) {
    frames.push(...frame.childFrames());
  }
  await Promise.all(frames.map(async (frame) => {
    const realm = __privateGet(this, _isolate) ? frame.isolatedRealm() : frame.mainRealm();
    try {
      const [script] = await Promise.all([
        frame.browsingContext.addPreloadScript(functionDeclaration, {
          arguments: [channel],
          sandbox: realm.sandbox
        }),
        realm.realm.callFunction(functionDeclaration, false, {
          arguments: [channel]
        })
      ]);
      __privateGet(this, _scripts).push([frame, script]);
    } catch (error) {
      debugError(error);
    }
  }));
};
connection_get = function() {
  return __privateGet(this, _frame).page().browser().connection;
};
_handleMessage = new WeakMap();
getRealm_fn = function(source) {
  const frame = __privateMethod(this, _ExposeableFunction_instances, findFrame_fn).call(this, source.context);
  if (!frame) {
    return;
  }
  return frame.realm(source.realm);
};
findFrame_fn = function(id) {
  const frames = [__privateGet(this, _frame)];
  for (const frame of frames) {
    if (frame._id === id) {
      return frame;
    }
    frames.push(...frame.childFrames());
  }
  return;
};
let ExposeableFunction = _ExposeableFunction;
var __runInitializers$6 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$6 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let BidiHTTPResponse = (() => {
  var _data, _request2, _securityDetails, _cdpSupported, _BidiHTTPResponse_instances, initialize_fn7, _a2;
  let _classSuper = HTTPResponse;
  let _instanceExtraInitializers = [];
  let _remoteAddress_decorators;
  return _a2 = class extends _classSuper {
    constructor(data, request, cdpSupported) {
      super();
      __privateAdd(this, _BidiHTTPResponse_instances);
      __privateAdd(this, _data, __runInitializers$6(this, _instanceExtraInitializers));
      __privateAdd(this, _request2);
      __privateAdd(this, _securityDetails);
      __privateAdd(this, _cdpSupported, false);
      __privateSet(this, _data, data);
      __privateSet(this, _request2, request);
      __privateSet(this, _cdpSupported, cdpSupported);
      const securityDetails = data["goog:securityDetails"];
      if (cdpSupported && securityDetails) {
        __privateSet(this, _securityDetails, new SecurityDetails(securityDetails));
      }
    }
    static from(data, request, cdpSupported) {
      var _a3;
      const response = new _a2(data, request, cdpSupported);
      __privateMethod(_a3 = response, _BidiHTTPResponse_instances, initialize_fn7).call(_a3);
      return response;
    }
    remoteAddress() {
      return {
        ip: "",
        port: -1
      };
    }
    url() {
      return __privateGet(this, _data).url;
    }
    status() {
      return __privateGet(this, _data).status;
    }
    statusText() {
      return __privateGet(this, _data).statusText;
    }
    headers() {
      const headers = {};
      for (const header of __privateGet(this, _data).headers) {
        if (header.value.type === "string") {
          headers[header.name.toLowerCase()] = header.value.value;
        }
      }
      return headers;
    }
    request() {
      return __privateGet(this, _request2);
    }
    fromCache() {
      return __privateGet(this, _data).fromCache;
    }
    timing() {
      const bidiTiming = __privateGet(this, _request2).timing();
      return {
        requestTime: bidiTiming.requestTime,
        proxyStart: -1,
        proxyEnd: -1,
        dnsStart: bidiTiming.dnsStart,
        dnsEnd: bidiTiming.dnsEnd,
        connectStart: bidiTiming.connectStart,
        connectEnd: bidiTiming.connectEnd,
        sslStart: bidiTiming.tlsStart,
        sslEnd: -1,
        workerStart: -1,
        workerReady: -1,
        workerFetchStart: -1,
        workerRespondWithSettled: -1,
        workerRouterEvaluationStart: -1,
        workerCacheLookupStart: -1,
        sendStart: bidiTiming.requestStart,
        sendEnd: -1,
        pushStart: -1,
        pushEnd: -1,
        receiveHeadersStart: bidiTiming.responseStart,
        receiveHeadersEnd: bidiTiming.responseEnd
      };
    }
    frame() {
      return __privateGet(this, _request2).frame();
    }
    fromServiceWorker() {
      return false;
    }
    securityDetails() {
      if (!__privateGet(this, _cdpSupported)) {
        throw new UnsupportedOperation();
      }
      return __privateGet(this, _securityDetails) ?? null;
    }
    content() {
      throw new UnsupportedOperation();
    }
  }, _data = new WeakMap(), _request2 = new WeakMap(), _securityDetails = new WeakMap(), _cdpSupported = new WeakMap(), _BidiHTTPResponse_instances = new WeakSet(), initialize_fn7 = function() {
    var _a3, _b;
    if (__privateGet(this, _data).fromCache) {
      __privateGet(this, _request2)._fromMemoryCache = true;
      (_a3 = __privateGet(this, _request2).frame()) == null ? void 0 : _a3.page().trustedEmitter.emit("requestservedfromcache", __privateGet(this, _request2));
    }
    (_b = __privateGet(this, _request2).frame()) == null ? void 0 : _b.page().trustedEmitter.emit("response", this);
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _remoteAddress_decorators = [invokeAtMostOnceForArguments];
    __esDecorate$6(_a2, null, _remoteAddress_decorators, { kind: "method", name: "remoteAddress", static: false, private: false, access: { has: (obj) => "remoteAddress" in obj, get: (obj) => obj.remoteAddress }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
var _a;
const requests = /* @__PURE__ */ new WeakMap();
class BidiHTTPRequest extends HTTPRequest {
  constructor(request, frame, redirect) {
    super();
    __privateAdd(this, _BidiHTTPRequest_instances);
    __privateAdd(this, _redirectChain);
    __privateAdd(this, _response, null);
    __publicField(this, "id");
    __privateAdd(this, _frame2);
    __privateAdd(this, _request);
    __privateAdd(this, _authenticationHandled, false);
    __privateAdd(this, _handleAuthentication, async () => {
      if (!__privateGet(this, _frame2)) {
        return;
      }
      const credentials = __privateGet(this, _frame2).page()._credentials;
      if (credentials && !__privateGet(this, _authenticationHandled)) {
        __privateSet(this, _authenticationHandled, true);
        void __privateGet(this, _request).continueWithAuth({
          action: "provideCredentials",
          credentials: {
            type: "password",
            username: credentials.username,
            password: credentials.password
          }
        });
      } else {
        void __privateGet(this, _request).continueWithAuth({
          action: "cancel"
        });
      }
    });
    requests.set(request, this);
    this.interception.enabled = request.isBlocked;
    __privateSet(this, _request, request);
    __privateSet(this, _frame2, frame);
    __privateSet(this, _redirectChain, redirect ? __privateGet(redirect, _redirectChain) : []);
    this.id = request.id;
  }
  static from(bidiRequest, frame, redirect) {
    var _a2;
    const request = new _a(bidiRequest, frame, redirect);
    __privateMethod(_a2 = request, _BidiHTTPRequest_instances, initialize_fn5).call(_a2);
    return request;
  }
  get client() {
    return __privateGet(this, _frame2).client;
  }
  url() {
    return __privateGet(this, _request).url;
  }
  resourceType() {
    if (!__privateGet(this, _frame2).page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return (__privateGet(this, _request).resourceType || "other").toLowerCase();
  }
  method() {
    return __privateGet(this, _request).method;
  }
  postData() {
    if (!__privateGet(this, _frame2).page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return __privateGet(this, _request).postData;
  }
  hasPostData() {
    if (!__privateGet(this, _frame2).page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return __privateGet(this, _request).hasPostData;
  }
  async fetchPostData() {
    throw new UnsupportedOperation();
  }
  headers() {
    const headers = {};
    for (const header of __privateGet(this, _request).headers) {
      headers[header.name.toLowerCase()] = header.value.value;
    }
    return {
      ...headers,
      ...__privateGet(this, _BidiHTTPRequest_instances, extraHTTPHeaders_get),
      ...__privateGet(this, _BidiHTTPRequest_instances, userAgentHeaders_get)
    };
  }
  response() {
    return __privateGet(this, _response);
  }
  failure() {
    if (__privateGet(this, _request).error === void 0) {
      return null;
    }
    return { errorText: __privateGet(this, _request).error };
  }
  isNavigationRequest() {
    return __privateGet(this, _request).navigation !== void 0;
  }
  initiator() {
    var _a2;
    return {
      ...__privateGet(this, _request).initiator,
      type: ((_a2 = __privateGet(this, _request).initiator) == null ? void 0 : _a2.type) ?? "other"
    };
  }
  redirectChain() {
    return __privateGet(this, _redirectChain).slice();
  }
  frame() {
    return __privateGet(this, _frame2);
  }
  async continue(overrides, priority) {
    return await super.continue({
      headers: __privateGet(this, _BidiHTTPRequest_instances, hasInternalHeaderOverwrite_get) ? this.headers() : void 0,
      ...overrides
    }, priority);
  }
  async _continue(overrides = {}) {
    const headers = getBidiHeaders(overrides.headers);
    this.interception.handled = true;
    return await __privateGet(this, _request).continueRequest({
      url: overrides.url,
      method: overrides.method,
      body: overrides.postData ? {
        type: "base64",
        value: stringToBase64(overrides.postData)
      } : void 0,
      headers: headers.length > 0 ? headers : void 0
    }).catch((error) => {
      this.interception.handled = false;
      return handleError(error);
    });
  }
  async _abort() {
    this.interception.handled = true;
    return await __privateGet(this, _request).failRequest().catch((error) => {
      this.interception.handled = false;
      throw error;
    });
  }
  async _respond(response, _priority) {
    this.interception.handled = true;
    let parsedBody;
    if (response.body) {
      parsedBody = HTTPRequest.getResponse(response.body);
    }
    const headers = getBidiHeaders(response.headers);
    const hasContentLength = headers.some((header) => {
      return header.name === "content-length";
    });
    if (response.contentType) {
      headers.push({
        name: "content-type",
        value: {
          type: "string",
          value: response.contentType
        }
      });
    }
    if ((parsedBody == null ? void 0 : parsedBody.contentLength) && !hasContentLength) {
      headers.push({
        name: "content-length",
        value: {
          type: "string",
          value: String(parsedBody.contentLength)
        }
      });
    }
    const status = response.status || 200;
    return await __privateGet(this, _request).provideResponse({
      statusCode: status,
      headers: headers.length > 0 ? headers : void 0,
      reasonPhrase: STATUS_TEXTS[status],
      body: (parsedBody == null ? void 0 : parsedBody.base64) ? {
        type: "base64",
        value: parsedBody == null ? void 0 : parsedBody.base64
      } : void 0
    }).catch((error) => {
      this.interception.handled = false;
      throw error;
    });
  }
  timing() {
    return __privateGet(this, _request).timing();
  }
}
_redirectChain = new WeakMap();
_response = new WeakMap();
_frame2 = new WeakMap();
_request = new WeakMap();
_BidiHTTPRequest_instances = new WeakSet();
initialize_fn5 = function() {
  __privateGet(this, _request).on("redirect", (request) => {
    const httpRequest = _a.from(request, __privateGet(this, _frame2), this);
    __privateGet(this, _redirectChain).push(this);
    request.once("success", () => {
      __privateGet(this, _frame2).page().trustedEmitter.emit("requestfinished", httpRequest);
    });
    request.once("error", () => {
      __privateGet(this, _frame2).page().trustedEmitter.emit("requestfailed", httpRequest);
    });
    void httpRequest.finalizeInterceptions();
  });
  __privateGet(this, _request).once("success", (data) => {
    __privateSet(this, _response, BidiHTTPResponse.from(data, this, __privateGet(this, _frame2).page().browser().cdpSupported));
  });
  __privateGet(this, _request).on("authenticate", __privateGet(this, _handleAuthentication));
  __privateGet(this, _frame2).page().trustedEmitter.emit("request", this);
  if (__privateGet(this, _BidiHTTPRequest_instances, hasInternalHeaderOverwrite_get)) {
    this.interception.handlers.push(async () => {
      await this.continue({
        headers: this.headers()
      }, 0);
    });
  }
};
hasInternalHeaderOverwrite_get = function() {
  return Boolean(Object.keys(__privateGet(this, _BidiHTTPRequest_instances, extraHTTPHeaders_get)).length || Object.keys(__privateGet(this, _BidiHTTPRequest_instances, userAgentHeaders_get)).length);
};
extraHTTPHeaders_get = function() {
  var _a2;
  return ((_a2 = __privateGet(this, _frame2)) == null ? void 0 : _a2.page()._extraHTTPHeaders) ?? {};
};
userAgentHeaders_get = function() {
  var _a2;
  return ((_a2 = __privateGet(this, _frame2)) == null ? void 0 : _a2.page()._userAgentHeaders) ?? {};
};
_authenticationHandled = new WeakMap();
_handleAuthentication = new WeakMap();
_a = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
  const headers = [];
  for (const [name, value] of Object.entries(rawHeaders ?? [])) {
    if (!Object.is(value, void 0)) {
      const values = Array.isArray(value) ? value : [value];
      for (const value2 of values) {
        headers.push({
          name: name.toLowerCase(),
          value: {
            type: "string",
            value: String(value2)
          }
        });
      }
    }
  }
  return headers;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class UnserializableError extends Error {
}
class BidiSerializer {
  static serialize(arg) {
    switch (typeof arg) {
      case "symbol":
      case "function":
        throw new UnserializableError(`Unable to serializable ${typeof arg}`);
      case "object":
        return __privateMethod(this, _BidiSerializer_static, serializeObject_fn).call(this, arg);
      case "undefined":
        return {
          type: "undefined"
        };
      case "number":
        return __privateMethod(this, _BidiSerializer_static, serializeNumber_fn).call(this, arg);
      case "bigint":
        return {
          type: "bigint",
          value: arg.toString()
        };
      case "string":
        return {
          type: "string",
          value: arg
        };
      case "boolean":
        return {
          type: "boolean",
          value: arg
        };
    }
  }
}
_BidiSerializer_static = new WeakSet();
serializeNumber_fn = function(arg) {
  let value;
  if (Object.is(arg, -0)) {
    value = "-0";
  } else if (Object.is(arg, Infinity)) {
    value = "Infinity";
  } else if (Object.is(arg, -Infinity)) {
    value = "-Infinity";
  } else if (Object.is(arg, NaN)) {
    value = "NaN";
  } else {
    value = arg;
  }
  return {
    type: "number",
    value
  };
};
serializeObject_fn = function(arg) {
  if (arg === null) {
    return {
      type: "null"
    };
  } else if (Array.isArray(arg)) {
    const parsedArray = arg.map((subArg) => {
      return this.serialize(subArg);
    });
    return {
      type: "array",
      value: parsedArray
    };
  } else if (isPlainObject(arg)) {
    try {
      JSON.stringify(arg);
    } catch (error) {
      if (error instanceof TypeError && error.message.startsWith("Converting circular structure to JSON")) {
        error.message += " Recursive objects are not allowed.";
      }
      throw error;
    }
    const parsedObject = [];
    for (const key in arg) {
      parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
    }
    return {
      type: "object",
      value: parsedObject
    };
  } else if (isRegExp(arg)) {
    return {
      type: "regexp",
      value: {
        pattern: arg.source,
        flags: arg.flags
      }
    };
  } else if (isDate(arg)) {
    return {
      type: "date",
      value: arg.toISOString()
    };
  }
  throw new UnserializableError("Custom object serialization not possible. Use plain objects instead.");
};
__privateAdd(BidiSerializer, _BidiSerializer_static);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
function createEvaluationError(details) {
  if (details.exception.type !== "error") {
    return BidiDeserializer.deserialize(details.exception);
  }
  const [name = "", ...parts] = details.text.split(": ");
  const message = parts.join(": ");
  const error = new Error(message);
  error.name = name;
  const stackLines = [];
  if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
    for (const frame of details.stackTrace.callFrames.reverse()) {
      if (PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== PuppeteerURL.INTERNAL_URL) {
        const url = PuppeteerURL.parse(frame.url);
        stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
      } else {
        stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
      }
      if (stackLines.length >= Error.stackTraceLimit) {
        break;
      }
    }
  }
  error.stack = [details.text, ...stackLines].join("\n");
  return error;
}
function rewriteNavigationError(message, ms) {
  return (error) => {
    if (error instanceof ProtocolError) {
      error.message += ` at ${message}`;
    } else if (error instanceof TimeoutError) {
      error.message = `Navigation timeout of ${ms} ms exceeded`;
    }
    throw error;
  };
}
var __addDisposableResource$3 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$3 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
class BidiRealm extends Realm$2 {
  constructor(realm, timeoutSettings) {
    super(timeoutSettings);
    __privateAdd(this, _BidiRealm_instances);
    __publicField(this, "realm");
    __publicField(this, "internalPuppeteerUtil");
    this.realm = realm;
  }
  initialize() {
    this.realm.on("destroyed", ({ reason }) => {
      this.taskManager.terminateAll(new Error(reason));
      this.dispose();
    });
    this.realm.on("updated", () => {
      this.internalPuppeteerUtil = void 0;
      void this.taskManager.rerunAll();
    });
  }
  get puppeteerUtil() {
    const promise = Promise.resolve();
    scriptInjector.inject((script) => {
      if (this.internalPuppeteerUtil) {
        void this.internalPuppeteerUtil.then((handle) => {
          void handle.dispose();
        });
      }
      this.internalPuppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script);
      });
    }, !this.internalPuppeteerUtil);
    return this.internalPuppeteerUtil;
  }
  async evaluateHandle(pageFunction, ...args) {
    return await __privateMethod(this, _BidiRealm_instances, evaluate_fn).call(this, false, pageFunction, ...args);
  }
  async evaluate(pageFunction, ...args) {
    return await __privateMethod(this, _BidiRealm_instances, evaluate_fn).call(this, true, pageFunction, ...args);
  }
  createHandle(result) {
    if ((result.type === "node" || result.type === "window") && this instanceof BidiFrameRealm) {
      return BidiElementHandle.from(result, this);
    }
    return BidiJSHandle.from(result, this);
  }
  async serializeAsync(arg) {
    if (arg instanceof LazyArg) {
      arg = await arg.get(this);
    }
    return this.serialize(arg);
  }
  serialize(arg) {
    if (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) {
      if (arg.realm !== this) {
        if (!(arg.realm instanceof BidiFrameRealm) || !(this instanceof BidiFrameRealm)) {
          throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
        }
        if (arg.realm.environment !== this.environment) {
          throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
        }
      }
      if (arg.disposed) {
        throw new Error("JSHandle is disposed!");
      }
      return arg.remoteValue();
    }
    return BidiSerializer.serialize(arg);
  }
  async destroyHandles(handles) {
    if (this.disposed) {
      return;
    }
    const handleIds = handles.map(({ id }) => {
      return id;
    }).filter((id) => {
      return id !== void 0;
    });
    if (handleIds.length === 0) {
      return;
    }
    await this.realm.disown(handleIds).catch((error) => {
      debugError(error);
    });
  }
  async adoptHandle(handle) {
    return await this.evaluateHandle((node) => {
      return node;
    }, handle);
  }
  async transferHandle(handle) {
    if (handle.realm === this) {
      return handle;
    }
    const transferredHandle = this.adoptHandle(handle);
    await handle.dispose();
    return await transferredHandle;
  }
}
_BidiRealm_instances = new WeakSet();
evaluate_fn = async function(returnByValue, pageFunction, ...args) {
  var _a2;
  const sourceUrlComment = getSourceUrlComment(((_a2 = getSourcePuppeteerURLIfAvailable(pageFunction)) == null ? void 0 : _a2.toString()) ?? PuppeteerURL.INTERNAL_URL);
  let responsePromise;
  const resultOwnership = returnByValue ? "none" : "root";
  const serializationOptions = returnByValue ? {} : {
    maxObjectDepth: 0,
    maxDomDepth: 0
  };
  if (isString(pageFunction)) {
    const expression = SOURCE_URL_REGEX.test(pageFunction) ? pageFunction : `${pageFunction}
${sourceUrlComment}
`;
    responsePromise = this.realm.evaluate(expression, true, {
      resultOwnership,
      userActivation: true,
      serializationOptions
    });
  } else {
    let functionDeclaration = stringifyFunction(pageFunction);
    functionDeclaration = SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}
${sourceUrlComment}
`;
    responsePromise = this.realm.callFunction(
      functionDeclaration,
      /* awaitPromise= */
      true,
      {
        // LazyArgs are used only internally and should not affect the order
        // evaluate calls for the public APIs.
        arguments: args.some((arg) => {
          return arg instanceof LazyArg;
        }) ? await Promise.all(args.map((arg) => {
          return this.serializeAsync(arg);
        })) : args.map((arg) => {
          return this.serialize(arg);
        }),
        resultOwnership,
        userActivation: true,
        serializationOptions
      }
    );
  }
  const result = await responsePromise;
  if ("type" in result && result.type === "exception") {
    throw createEvaluationError(result.exceptionDetails);
  }
  return returnByValue ? BidiDeserializer.deserialize(result.result) : this.createHandle(result.result);
};
const _BidiFrameRealm = class _BidiFrameRealm extends BidiRealm {
  constructor(realm, frame) {
    super(realm, frame.timeoutSettings);
    __privateAdd(this, _BidiFrameRealm_instances);
    __privateAdd(this, _frame3);
    __privateAdd(this, _bindingsInstalled, false);
    __privateSet(this, _frame3, frame);
  }
  static from(realm, frame) {
    var _a2;
    const frameRealm = new _BidiFrameRealm(realm, frame);
    __privateMethod(_a2 = frameRealm, _BidiFrameRealm_instances, initialize_fn6).call(_a2);
    return frameRealm;
  }
  get puppeteerUtil() {
    let promise = Promise.resolve();
    if (!__privateGet(this, _bindingsInstalled)) {
      promise = Promise.all([
        ExposeableFunction.from(this.environment, "__ariaQuerySelector", ARIAQueryHandler.queryOne, !!this.sandbox),
        ExposeableFunction.from(this.environment, "__ariaQuerySelectorAll", async (element, selector) => {
          const results = ARIAQueryHandler.queryAll(element, selector);
          return await element.realm.evaluateHandle((...elements) => {
            return elements;
          }, ...await AsyncIterableUtil.collect(results));
        }, !!this.sandbox)
      ]);
      __privateSet(this, _bindingsInstalled, true);
    }
    return promise.then(() => {
      return super.puppeteerUtil;
    });
  }
  get sandbox() {
    return this.realm.sandbox;
  }
  get environment() {
    return __privateGet(this, _frame3);
  }
  async adoptBackendNode(backendNodeId) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const { object } = await __privateGet(this, _frame3).client.send("DOM.resolveNode", {
        backendNodeId,
        executionContextId: await this.realm.resolveExecutionContextId()
      });
      const handle = __addDisposableResource$3(env_1, BidiElementHandle.from({
        handle: object.objectId,
        type: "node"
      }, this), false);
      return await handle.evaluateHandle((element) => {
        return element;
      });
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources$3(env_1);
    }
  }
};
_frame3 = new WeakMap();
_BidiFrameRealm_instances = new WeakSet();
initialize_fn6 = function() {
  __superGet(_BidiFrameRealm.prototype, this, "initialize").call(this);
  this.realm.on("updated", () => {
    this.environment.clearDocumentHandle();
    __privateSet(this, _bindingsInstalled, false);
  });
};
_bindingsInstalled = new WeakMap();
let BidiFrameRealm = _BidiFrameRealm;
const _BidiWorkerRealm = class _BidiWorkerRealm extends BidiRealm {
  constructor(realm, frame) {
    super(realm, frame.timeoutSettings);
    __privateAdd(this, _worker);
    __privateSet(this, _worker, frame);
  }
  static from(realm, worker) {
    const workerRealm = new _BidiWorkerRealm(realm, worker);
    workerRealm.initialize();
    return workerRealm;
  }
  get environment() {
    return __privateGet(this, _worker);
  }
  async adoptBackendNode() {
    throw new Error("Cannot adopt DOM nodes into a worker.");
  }
};
_worker = new WeakMap();
let BidiWorkerRealm = _BidiWorkerRealm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiWebWorker = class _BidiWebWorker extends WebWorker {
  constructor(frame, realm) {
    super(realm.origin);
    __privateAdd(this, _frame4);
    __privateAdd(this, _realm);
    __privateSet(this, _frame4, frame);
    __privateSet(this, _realm, BidiWorkerRealm.from(realm, this));
  }
  static from(frame, realm) {
    const worker = new _BidiWebWorker(frame, realm);
    return worker;
  }
  get frame() {
    return __privateGet(this, _frame4);
  }
  mainRealm() {
    return __privateGet(this, _realm);
  }
  get client() {
    throw new UnsupportedOperation();
  }
};
_frame4 = new WeakMap();
_realm = new WeakMap();
let BidiWebWorker = _BidiWebWorker;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$5 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$5 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __setFunctionName$1 = function(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function convertConsoleMessageLevel(method) {
  switch (method) {
    case "group":
      return "startGroup";
    case "groupCollapsed":
      return "startGroupCollapsed";
    case "groupEnd":
      return "endGroup";
    default:
      return method;
  }
}
let BidiFrame = (() => {
  var _parent, _frames, _BidiFrame_instances, initialize_fn7, createFrameTarget_fn, detached$_fn, _exposedFunctions, waitForLoad$_get, waitForNetworkIdle$_get, _a2;
  let _classSuper = Frame;
  let _instanceExtraInitializers = [];
  let _goto_decorators;
  let _setContent_decorators;
  let _waitForNavigation_decorators;
  let _private_waitForLoad$_decorators;
  let _private_waitForLoad$_descriptor;
  let _private_waitForNetworkIdle$_decorators;
  let _private_waitForNetworkIdle$_descriptor;
  let _setFiles_decorators;
  let _locateNodes_decorators;
  return _a2 = class extends _classSuper {
    constructor(parent, browsingContext) {
      super();
      __privateAdd(this, _BidiFrame_instances);
      __privateAdd(this, _parent, __runInitializers$5(this, _instanceExtraInitializers));
      __publicField(this, "browsingContext");
      __privateAdd(this, _frames, /* @__PURE__ */ new WeakMap());
      __publicField(this, "realms");
      __publicField(this, "_id");
      __publicField(this, "client");
      __publicField(this, "accessibility");
      __privateAdd(this, _exposedFunctions, /* @__PURE__ */ new Map());
      __privateSet(this, _parent, parent);
      this.browsingContext = browsingContext;
      this._id = browsingContext.id;
      this.client = new BidiCdpSession(this);
      this.realms = {
        default: BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
        internal: BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 1e4)}`), this)
      };
      this.accessibility = new Accessibility(this.realms.default, this._id);
    }
    static from(parent, browsingContext) {
      var _a3;
      const frame = new _a2(parent, browsingContext);
      __privateMethod(_a3 = frame, _BidiFrame_instances, initialize_fn7).call(_a3);
      return frame;
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
    realm(id) {
      for (const realm of Object.values(this.realms)) {
        if (realm.realm.id === id) {
          return realm;
        }
      }
      return;
    }
    page() {
      let parent = __privateGet(this, _parent);
      while (parent instanceof _a2) {
        parent = __privateGet(parent, _parent);
      }
      return parent;
    }
    url() {
      return this.browsingContext.url;
    }
    parentFrame() {
      if (__privateGet(this, _parent) instanceof _a2) {
        return __privateGet(this, _parent);
      }
      return null;
    }
    childFrames() {
      return [...this.browsingContext.children].map((child) => {
        return __privateGet(this, _frames).get(child);
      });
    }
    async goto(url, options = {}) {
      const [response] = await Promise.all([
        this.waitForNavigation(options),
        // Some implementations currently only report errors when the
        // readiness=interactive.
        //
        // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
        this.browsingContext.navigate(
          url,
          "interactive"
          /* Bidi.BrowsingContext.ReadinessState.Interactive */
        ).catch((error) => {
          if (isErrorLike(error) && error.message.includes("net::ERR_HTTP_RESPONSE_CODE_FAILURE")) {
            return;
          }
          if (error.message.includes("navigation canceled")) {
            return;
          }
          if (error.message.includes("Navigation was aborted by another navigation")) {
            return;
          }
          throw error;
        })
      ]).catch(rewriteNavigationError(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
      return response;
    }
    async setContent(html, options = {}) {
      await Promise.all([
        this.setFrameContent(html),
        firstValueFrom(combineLatest([
          __privateGet(this, _BidiFrame_instances, waitForLoad$_get).call(this, options),
          __privateGet(this, _BidiFrame_instances, waitForNetworkIdle$_get).call(this, options)
        ]))
      ]);
    }
    async waitForNavigation(options = {}) {
      const { timeout: ms = this.timeoutSettings.navigationTimeout(), signal } = options;
      const frames = this.childFrames().map((frame) => {
        var _a3;
        return __privateMethod(_a3 = frame, _BidiFrame_instances, detached$_fn).call(_a3);
      });
      return await firstValueFrom(combineLatest([
        race(fromEmitterEvent(this.browsingContext, "navigation"), fromEmitterEvent(this.browsingContext, "historyUpdated").pipe(map(() => {
          return { navigation: null };
        }))).pipe(first()).pipe(switchMap(({ navigation }) => {
          if (navigation === null) {
            return of(null);
          }
          return __privateGet(this, _BidiFrame_instances, waitForLoad$_get).call(this, options).pipe(delayWhen(() => {
            if (frames.length === 0) {
              return of(void 0);
            }
            return combineLatest(frames);
          }), raceWith(fromEmitterEvent(navigation, "fragment"), fromEmitterEvent(navigation, "failed"), fromEmitterEvent(navigation, "aborted").pipe(map(({ url }) => {
            throw new Error(`Navigation aborted: ${url}`);
          }))), switchMap(() => {
            if (navigation.request) {
              let requestFinished$ = function(request) {
                if (navigation === null) {
                  return of(null);
                }
                if (request.response || request.error) {
                  return of(navigation);
                }
                if (request.redirect) {
                  return requestFinished$(request.redirect);
                }
                return fromEmitterEvent(request, "success").pipe(raceWith(fromEmitterEvent(request, "error")), raceWith(fromEmitterEvent(request, "redirect"))).pipe(switchMap(() => {
                  return requestFinished$(request);
                }));
              };
              return requestFinished$(navigation.request);
            }
            return of(navigation);
          }));
        })),
        __privateGet(this, _BidiFrame_instances, waitForNetworkIdle$_get).call(this, options)
      ]).pipe(map(([navigation]) => {
        if (!navigation) {
          return null;
        }
        const request = navigation.request;
        if (!request) {
          return null;
        }
        const lastRequest = request.lastRedirect ?? request;
        const httpRequest = requests.get(lastRequest);
        return httpRequest.response();
      }), raceWith(timeout(ms), fromAbortSignal(signal), __privateMethod(this, _BidiFrame_instances, detached$_fn).call(this).pipe(map(() => {
        throw new TargetCloseError("Frame detached.");
      })))));
    }
    waitForDevicePrompt() {
      throw new UnsupportedOperation();
    }
    get detached() {
      return this.browsingContext.closed;
    }
    async exposeFunction(name, apply) {
      if (__privateGet(this, _exposedFunctions).has(name)) {
        throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
      }
      const exposeable = await ExposeableFunction.from(this, name, apply);
      __privateGet(this, _exposedFunctions).set(name, exposeable);
    }
    async removeExposedFunction(name) {
      const exposedFunction = __privateGet(this, _exposedFunctions).get(name);
      if (!exposedFunction) {
        throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
      }
      __privateGet(this, _exposedFunctions).delete(name);
      await exposedFunction[Symbol.asyncDispose]();
    }
    async createCDPSession() {
      if (!this.page().browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      const cdpConnection = this.page().browser().cdpConnection;
      return await cdpConnection._createSession({ targetId: this._id });
    }
    async setFiles(element, files) {
      await this.browsingContext.setFiles(
        // SAFETY: ElementHandles are always remote references.
        element.remoteValue(),
        files
      );
    }
    async locateNodes(element, locator) {
      return await this.browsingContext.locateNodes(
        locator,
        // SAFETY: ElementHandles are always remote references.
        [element.remoteValue()]
      );
    }
  }, _parent = new WeakMap(), _frames = new WeakMap(), _BidiFrame_instances = new WeakSet(), initialize_fn7 = function() {
    for (const browsingContext of this.browsingContext.children) {
      __privateMethod(this, _BidiFrame_instances, createFrameTarget_fn).call(this, browsingContext);
    }
    this.browsingContext.on("browsingcontext", ({ browsingContext }) => {
      __privateMethod(this, _BidiFrame_instances, createFrameTarget_fn).call(this, browsingContext);
    });
    this.browsingContext.on("closed", () => {
      for (const session of BidiCdpSession.sessions.values()) {
        if (session.frame === this) {
          session.onClose();
        }
      }
      this.page().trustedEmitter.emit("framedetached", this);
    });
    this.browsingContext.on("request", ({ request }) => {
      const httpRequest = BidiHTTPRequest.from(request, this);
      request.once("success", () => {
        this.page().trustedEmitter.emit("requestfinished", httpRequest);
      });
      request.once("error", () => {
        this.page().trustedEmitter.emit("requestfailed", httpRequest);
      });
      void httpRequest.finalizeInterceptions();
    });
    this.browsingContext.on("navigation", ({ navigation }) => {
      navigation.once("fragment", () => {
        this.page().trustedEmitter.emit("framenavigated", this);
      });
    });
    this.browsingContext.on("load", () => {
      this.page().trustedEmitter.emit("load", void 0);
    });
    this.browsingContext.on("DOMContentLoaded", () => {
      this._hasStartedLoading = true;
      this.page().trustedEmitter.emit("domcontentloaded", void 0);
      this.page().trustedEmitter.emit("framenavigated", this);
    });
    this.browsingContext.on("userprompt", ({ userPrompt }) => {
      this.page().trustedEmitter.emit("dialog", BidiDialog.from(userPrompt));
    });
    this.browsingContext.on("log", ({ entry }) => {
      if (this._id !== entry.source.context) {
        return;
      }
      if (isConsoleLogEntry(entry)) {
        const args = entry.args.map((arg) => {
          return this.mainRealm().createHandle(arg);
        });
        const text = args.reduce((value, arg) => {
          const parsedValue = arg instanceof BidiJSHandle && arg.isPrimitiveValue ? BidiDeserializer.deserialize(arg.remoteValue()) : arg.toString();
          return `${value} ${parsedValue}`;
        }, "").slice(1);
        this.page().trustedEmitter.emit("console", new ConsoleMessage(convertConsoleMessageLevel(entry.method), text, args, getStackTraceLocations(entry.stackTrace), this));
      } else if (isJavaScriptLogEntry(entry)) {
        const error = new Error(entry.text ?? "");
        const messageHeight = error.message.split("\n").length;
        const messageLines = error.stack.split("\n").splice(0, messageHeight);
        const stackLines = [];
        if (entry.stackTrace) {
          for (const frame of entry.stackTrace.callFrames) {
            stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
            if (stackLines.length >= Error.stackTraceLimit) {
              break;
            }
          }
        }
        error.stack = [...messageLines, ...stackLines].join("\n");
        this.page().trustedEmitter.emit("pageerror", error);
      } else {
        debugError(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
      }
    });
    this.browsingContext.on("worker", ({ realm }) => {
      const worker = BidiWebWorker.from(this, realm);
      realm.on("destroyed", () => {
        this.page().trustedEmitter.emit("workerdestroyed", worker);
      });
      this.page().trustedEmitter.emit("workercreated", worker);
    });
  }, createFrameTarget_fn = function(browsingContext) {
    const frame = _a2.from(this, browsingContext);
    __privateGet(this, _frames).set(browsingContext, frame);
    this.page().trustedEmitter.emit("frameattached", frame);
    browsingContext.on("closed", () => {
      __privateGet(this, _frames).delete(browsingContext);
    });
    return frame;
  }, detached$_fn = function() {
    return defer(() => {
      if (this.detached) {
        return of(this);
      }
      return fromEmitterEvent(
        this.page().trustedEmitter,
        "framedetached"
        /* PageEvent.FrameDetached */
      ).pipe(filter((detachedFrame) => {
        return detachedFrame === this;
      }));
    });
  }, _exposedFunctions = new WeakMap(), waitForLoad$_get = function() {
    return _private_waitForLoad$_descriptor.value;
  }, waitForNetworkIdle$_get = function() {
    return _private_waitForNetworkIdle$_descriptor.value;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _goto_decorators = [throwIfDetached];
    _setContent_decorators = [throwIfDetached];
    _waitForNavigation_decorators = [throwIfDetached];
    _private_waitForLoad$_decorators = [throwIfDetached];
    _private_waitForNetworkIdle$_decorators = [throwIfDetached];
    _setFiles_decorators = [throwIfDetached];
    _locateNodes_decorators = [throwIfDetached];
    __esDecorate$5(_a2, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: (obj) => "goto" in obj, get: (obj) => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a2, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: (obj) => "setContent" in obj, get: (obj) => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a2, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: (obj) => "waitForNavigation" in obj, get: (obj) => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a2, _private_waitForLoad$_descriptor = { value: __setFunctionName$1(function(options = {}) {
      let { waitUntil = "load" } = options;
      const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
      if (!Array.isArray(waitUntil)) {
        waitUntil = [waitUntil];
      }
      const events2 = /* @__PURE__ */ new Set();
      for (const lifecycleEvent of waitUntil) {
        switch (lifecycleEvent) {
          case "load": {
            events2.add("load");
            break;
          }
          case "domcontentloaded": {
            events2.add("DOMContentLoaded");
            break;
          }
        }
      }
      if (events2.size === 0) {
        return of(void 0);
      }
      return combineLatest([...events2].map((event) => {
        return fromEmitterEvent(this.browsingContext, event);
      })).pipe(map(() => {
      }), first(), raceWith(timeout(ms), __privateMethod(this, _BidiFrame_instances, detached$_fn).call(this).pipe(map(() => {
        throw new Error("Frame detached.");
      }))));
    }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: (obj) => __privateIn(_BidiFrame_instances, obj), get: (obj) => __privateGet(obj, _BidiFrame_instances, waitForLoad$_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a2, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName$1(function(options = {}) {
      let { waitUntil = "load" } = options;
      if (!Array.isArray(waitUntil)) {
        waitUntil = [waitUntil];
      }
      let concurrency = Infinity;
      for (const event of waitUntil) {
        switch (event) {
          case "networkidle0": {
            concurrency = Math.min(0, concurrency);
            break;
          }
          case "networkidle2": {
            concurrency = Math.min(2, concurrency);
            break;
          }
        }
      }
      if (concurrency === Infinity) {
        return of(void 0);
      }
      return this.page().waitForNetworkIdle$({
        idleTime: 500,
        timeout: options.timeout ?? this.timeoutSettings.timeout(),
        concurrency
      });
    }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: (obj) => __privateIn(_BidiFrame_instances, obj), get: (obj) => __privateGet(obj, _BidiFrame_instances, waitForNetworkIdle$_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a2, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: (obj) => "setFiles" in obj, get: (obj) => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a2, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: (obj) => "locateNodes" in obj, get: (obj) => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
function isConsoleLogEntry(event) {
  return event.type === "console";
}
function isJavaScriptLogEntry(event) {
  return event.type === "javascript";
}
function getStackTraceLocations(stackTrace) {
  const stackTraceLocations = [];
  if (stackTrace) {
    for (const callFrame of stackTrace.callFrames) {
      stackTraceLocations.push({
        url: callFrame.url,
        lineNumber: callFrame.lineNumber,
        columnNumber: callFrame.columnNumber
      });
    }
  }
  return stackTraceLocations;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var SourceActionsType;
(function(SourceActionsType2) {
  SourceActionsType2["None"] = "none";
  SourceActionsType2["Key"] = "key";
  SourceActionsType2["Pointer"] = "pointer";
  SourceActionsType2["Wheel"] = "wheel";
})(SourceActionsType || (SourceActionsType = {}));
var ActionType;
(function(ActionType2) {
  ActionType2["Pause"] = "pause";
  ActionType2["KeyDown"] = "keyDown";
  ActionType2["KeyUp"] = "keyUp";
  ActionType2["PointerUp"] = "pointerUp";
  ActionType2["PointerDown"] = "pointerDown";
  ActionType2["PointerMove"] = "pointerMove";
  ActionType2["Scroll"] = "scroll";
})(ActionType || (ActionType = {}));
const getBidiKeyValue = (key) => {
  switch (key) {
    case "\r":
    case "\n":
      key = "Enter";
      break;
  }
  if ([...key].length === 1) {
    return key;
  }
  switch (key) {
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
      throw new Error(`Unknown key: "${key}"`);
  }
};
class BidiKeyboard extends Keyboard {
  constructor(page) {
    super();
    __privateAdd(this, _page);
    __privateSet(this, _page, page);
  }
  async down(key, _options) {
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ActionType.KeyDown,
            value: getBidiKeyValue(key)
          }
        ]
      }
    ]);
  }
  async up(key) {
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ActionType.KeyUp,
            value: getBidiKeyValue(key)
          }
        ]
      }
    ]);
  }
  async press(key, options = {}) {
    const { delay = 0 } = options;
    const actions = [
      {
        type: ActionType.KeyDown,
        value: getBidiKeyValue(key)
      }
    ];
    if (delay > 0) {
      actions.push({
        type: ActionType.Pause,
        duration: delay
      });
    }
    actions.push({
      type: ActionType.KeyUp,
      value: getBidiKeyValue(key)
    });
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions
      }
    ]);
  }
  async type(text, options = {}) {
    const { delay = 0 } = options;
    const values = [...text].map(getBidiKeyValue);
    const actions = [];
    if (delay <= 0) {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    } else {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.Pause,
          duration: delay
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    }
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions
      }
    ]);
  }
  async sendCharacter(char) {
    if ([...char].length > 1) {
      throw new Error("Cannot send more than 1 character.");
    }
    const frame = await __privateGet(this, _page).focusedFrame();
    await frame.isolatedRealm().evaluate(async (char2) => {
      document.execCommand("insertText", false, char2);
    }, char);
  }
}
_page = new WeakMap();
const getBidiButton = (button) => {
  switch (button) {
    case MouseButton.Left:
      return 0;
    case MouseButton.Middle:
      return 1;
    case MouseButton.Right:
      return 2;
    case MouseButton.Back:
      return 3;
    case MouseButton.Forward:
      return 4;
  }
};
class BidiMouse extends Mouse {
  constructor(page) {
    super();
    __privateAdd(this, _page2);
    __privateAdd(this, _lastMovePoint, { x: 0, y: 0 });
    __privateSet(this, _page2, page);
  }
  async reset() {
    __privateSet(this, _lastMovePoint, { x: 0, y: 0 });
    await __privateGet(this, _page2).mainFrame().browsingContext.releaseActions();
  }
  async move(x, y, options = {}) {
    const from2 = __privateGet(this, _lastMovePoint);
    const to = {
      x: Math.round(x),
      y: Math.round(y)
    };
    const actions = [];
    const steps = options.steps ?? 0;
    for (let i = 0; i < steps; ++i) {
      actions.push({
        type: ActionType.PointerMove,
        x: from2.x + (to.x - from2.x) * (i / steps),
        y: from2.y + (to.y - from2.y) * (i / steps),
        origin: options.origin
      });
    }
    actions.push({
      type: ActionType.PointerMove,
      ...to,
      origin: options.origin
    });
    __privateSet(this, _lastMovePoint, to);
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions
      }
    ]);
  }
  async down(options = {}) {
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ActionType.PointerDown,
            button: getBidiButton(options.button ?? MouseButton.Left)
          }
        ]
      }
    ]);
  }
  async up(options = {}) {
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ActionType.PointerUp,
            button: getBidiButton(options.button ?? MouseButton.Left)
          }
        ]
      }
    ]);
  }
  async click(x, y, options = {}) {
    const actions = [
      {
        type: ActionType.PointerMove,
        x: Math.round(x),
        y: Math.round(y),
        origin: options.origin
      }
    ];
    const pointerDownAction = {
      type: ActionType.PointerDown,
      button: getBidiButton(options.button ?? MouseButton.Left)
    };
    const pointerUpAction = {
      type: ActionType.PointerUp,
      button: pointerDownAction.button
    };
    for (let i = 1; i < (options.count ?? 1); ++i) {
      actions.push(pointerDownAction, pointerUpAction);
    }
    actions.push(pointerDownAction);
    if (options.delay) {
      actions.push({
        type: ActionType.Pause,
        duration: options.delay
      });
    }
    actions.push(pointerUpAction);
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions
      }
    ]);
  }
  async wheel(options = {}) {
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Wheel,
        id: "__puppeteer_wheel",
        actions: [
          {
            type: ActionType.Scroll,
            ...__privateGet(this, _lastMovePoint) ?? {
              x: 0,
              y: 0
            },
            deltaX: options.deltaX ?? 0,
            deltaY: options.deltaY ?? 0
          }
        ]
      }
    ]);
  }
  drag() {
    throw new UnsupportedOperation();
  }
  dragOver() {
    throw new UnsupportedOperation();
  }
  dragEnter() {
    throw new UnsupportedOperation();
  }
  drop() {
    throw new UnsupportedOperation();
  }
  dragAndDrop() {
    throw new UnsupportedOperation();
  }
}
_page2 = new WeakMap();
_lastMovePoint = new WeakMap();
class BidiTouchHandle {
  constructor(page, touchScreen, id, x, y, properties) {
    __privateAdd(this, _started, false);
    __privateAdd(this, _x);
    __privateAdd(this, _y);
    __privateAdd(this, _bidiId);
    __privateAdd(this, _page3);
    __privateAdd(this, _touchScreen);
    __privateAdd(this, _properties);
    __privateSet(this, _page3, page);
    __privateSet(this, _touchScreen, touchScreen);
    __privateSet(this, _x, Math.round(x));
    __privateSet(this, _y, Math.round(y));
    __privateSet(this, _properties, properties);
    __privateSet(this, _bidiId, `${"__puppeteer_finger"}_${id}`);
  }
  async start(options = {}) {
    if (__privateGet(this, _started)) {
      throw new TouchError("Touch has already started");
    }
    await __privateGet(this, _page3).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: __privateGet(this, _bidiId),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerMove,
            x: __privateGet(this, _x),
            y: __privateGet(this, _y),
            origin: options.origin
          },
          {
            ...__privateGet(this, _properties),
            type: ActionType.PointerDown,
            button: 0
          }
        ]
      }
    ]);
    __privateSet(this, _started, true);
  }
  move(x, y) {
    const newX = Math.round(x);
    const newY = Math.round(y);
    return __privateGet(this, _page3).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: __privateGet(this, _bidiId),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            ...__privateGet(this, _properties),
            type: ActionType.PointerMove,
            x: newX,
            y: newY
          }
        ]
      }
    ]);
  }
  async end() {
    await __privateGet(this, _page3).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: __privateGet(this, _bidiId),
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerUp,
            button: 0
          }
        ]
      }
    ]);
    __privateGet(this, _touchScreen).removeHandle(this);
  }
}
_started = new WeakMap();
_x = new WeakMap();
_y = new WeakMap();
_bidiId = new WeakMap();
_page3 = new WeakMap();
_touchScreen = new WeakMap();
_properties = new WeakMap();
class BidiTouchscreen extends Touchscreen {
  constructor(page) {
    super();
    __privateAdd(this, _page4);
    __privateSet(this, _page4, page);
  }
  async touchStart(x, y, options = {}) {
    const id = this.idGenerator();
    const properties = {
      width: 0.5 * 2,
      // 2 times default touch radius.
      height: 0.5 * 2,
      // 2 times default touch radius.
      pressure: 0.5,
      altitudeAngle: Math.PI / 2
    };
    const touch = new BidiTouchHandle(__privateGet(this, _page4), this, id, x, y, properties);
    await touch.start(options);
    this.touches.push(touch);
    return touch;
  }
}
_page4 = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate$4 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers$4 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __addDisposableResource$2 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$2 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let BidiPage = (() => {
  var _trustedEmitter_accessor_storage, _browserContext, _frame6, _viewport, _workers4, _cdpEmulationManager, _emulatedNetworkConditions, _BidiPage_instances, initialize_fn7, _userAgentInterception, _userAgentPreloadScript, _userInterception, _extraHeadersInterception, _authInterception, toggleInterception_fn, applyNetworkConditions_fn, go_fn, _a2;
  let _classSuper = Page;
  let _trustedEmitter_decorators;
  let _trustedEmitter_initializers = [];
  let _trustedEmitter_extraInitializers = [];
  return _a2 = class extends _classSuper {
    constructor(browserContext, browsingContext) {
      super();
      __privateAdd(this, _BidiPage_instances);
      __privateAdd(this, _trustedEmitter_accessor_storage, __runInitializers$4(this, _trustedEmitter_initializers, new EventEmitter$1()));
      __privateAdd(this, _browserContext, __runInitializers$4(this, _trustedEmitter_extraInitializers));
      __privateAdd(this, _frame6);
      __privateAdd(this, _viewport, null);
      __privateAdd(this, _workers4, /* @__PURE__ */ new Set());
      __publicField(this, "keyboard");
      __publicField(this, "mouse");
      __publicField(this, "touchscreen");
      __publicField(this, "tracing");
      __publicField(this, "coverage");
      __privateAdd(this, _cdpEmulationManager);
      __privateAdd(this, _emulatedNetworkConditions);
      /**
       * @internal
       */
      __publicField(this, "_userAgentHeaders", {});
      __privateAdd(this, _userAgentInterception);
      __privateAdd(this, _userAgentPreloadScript);
      __privateAdd(this, _userInterception);
      /**
       * @internal
       */
      __publicField(this, "_extraHTTPHeaders", {});
      __privateAdd(this, _extraHeadersInterception);
      /**
       * @internal
       */
      __publicField(this, "_credentials", null);
      __privateAdd(this, _authInterception);
      __privateSet(this, _browserContext, browserContext);
      __privateSet(this, _frame6, BidiFrame.from(this, browsingContext));
      __privateSet(this, _cdpEmulationManager, new EmulationManager(__privateGet(this, _frame6).client));
      this.tracing = new Tracing(__privateGet(this, _frame6).client);
      this.coverage = new Coverage(__privateGet(this, _frame6).client);
      this.keyboard = new BidiKeyboard(this);
      this.mouse = new BidiMouse(this);
      this.touchscreen = new BidiTouchscreen(this);
    }
    static from(browserContext, browsingContext) {
      var _a3;
      const page = new _a2(browserContext, browsingContext);
      __privateMethod(_a3 = page, _BidiPage_instances, initialize_fn7).call(_a3);
      return page;
    }
    get trustedEmitter() {
      return __privateGet(this, _trustedEmitter_accessor_storage);
    }
    set trustedEmitter(value) {
      __privateSet(this, _trustedEmitter_accessor_storage, value);
    }
    _client() {
      return __privateGet(this, _frame6).client;
    }
    async setUserAgent(userAgent, userAgentMetadata) {
      if (!__privateGet(this, _browserContext).browser().cdpSupported && userAgentMetadata) {
        throw new UnsupportedOperation("Current Browser does not support `userAgentMetadata`");
      } else if (__privateGet(this, _browserContext).browser().cdpSupported && userAgentMetadata) {
        return await this._client().send("Network.setUserAgentOverride", {
          userAgent,
          userAgentMetadata
        });
      }
      const enable = userAgent !== "";
      userAgent = userAgent ?? await __privateGet(this, _browserContext).browser().userAgent();
      this._userAgentHeaders = enable ? {
        "User-Agent": userAgent
      } : {};
      __privateSet(this, _userAgentInterception, await __privateMethod(this, _BidiPage_instances, toggleInterception_fn).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], __privateGet(this, _userAgentInterception), enable));
      const changeUserAgent = (userAgent2) => {
        Object.defineProperty(navigator, "userAgent", {
          value: userAgent2
        });
      };
      const frames = [__privateGet(this, _frame6)];
      for (const frame of frames) {
        frames.push(...frame.childFrames());
      }
      if (__privateGet(this, _userAgentPreloadScript)) {
        await this.removeScriptToEvaluateOnNewDocument(__privateGet(this, _userAgentPreloadScript));
      }
      const [evaluateToken] = await Promise.all([
        enable ? this.evaluateOnNewDocument(changeUserAgent, userAgent) : void 0,
        // When we disable the UserAgent we want to
        // evaluate the original value in all Browsing Contexts
        frames.map((frame) => {
          return frame.evaluate(changeUserAgent, userAgent);
        })
      ]);
      __privateSet(this, _userAgentPreloadScript, evaluateToken == null ? void 0 : evaluateToken.identifier);
    }
    async setBypassCSP(enabled) {
      await this._client().send("Page.setBypassCSP", { enabled });
    }
    async queryObjects(prototypeHandle) {
      assert$1(!prototypeHandle.disposed, "Prototype JSHandle is disposed!");
      assert$1(prototypeHandle.id, "Prototype JSHandle must not be referencing primitive value");
      const response = await __privateGet(this, _frame6).client.send("Runtime.queryObjects", {
        prototypeObjectId: prototypeHandle.id
      });
      return __privateGet(this, _frame6).mainRealm().createHandle({
        type: "array",
        handle: response.objects.objectId
      });
    }
    browser() {
      return this.browserContext().browser();
    }
    browserContext() {
      return __privateGet(this, _browserContext);
    }
    mainFrame() {
      return __privateGet(this, _frame6);
    }
    async focusedFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource$2(env_1, await this.mainFrame().isolatedRealm().evaluateHandle(() => {
          let win = window;
          while (win.document.activeElement instanceof win.HTMLIFrameElement || win.document.activeElement instanceof win.HTMLFrameElement) {
            if (win.document.activeElement.contentWindow === null) {
              break;
            }
            win = win.document.activeElement.contentWindow;
          }
          return win;
        }), false);
        const value = handle.remoteValue();
        assert$1(value.type === "window");
        const frame = this.frames().find((frame2) => {
          return frame2._id === value.value.context;
        });
        assert$1(frame);
        return frame;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$2(env_1);
      }
    }
    frames() {
      const frames = [__privateGet(this, _frame6)];
      for (const frame of frames) {
        frames.push(...frame.childFrames());
      }
      return frames;
    }
    isClosed() {
      return __privateGet(this, _frame6).detached;
    }
    async close(options) {
      const env_2 = { stack: [], error: void 0, hasError: false };
      try {
        const _guard = __addDisposableResource$2(env_2, await __privateGet(this, _browserContext).waitForScreenshotOperations(), false);
        try {
          await __privateGet(this, _frame6).browsingContext.close(options == null ? void 0 : options.runBeforeUnload);
        } catch {
          return;
        }
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        __disposeResources$2(env_2);
      }
    }
    async reload(options = {}) {
      const [response] = await Promise.all([
        __privateGet(this, _frame6).waitForNavigation(options),
        __privateGet(this, _frame6).browsingContext.reload()
      ]).catch(rewriteNavigationError(this.url(), options.timeout ?? this._timeoutSettings.navigationTimeout()));
      return response;
    }
    setDefaultNavigationTimeout(timeout2) {
      this._timeoutSettings.setDefaultNavigationTimeout(timeout2);
    }
    setDefaultTimeout(timeout2) {
      this._timeoutSettings.setDefaultTimeout(timeout2);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    getDefaultNavigationTimeout() {
      return this._timeoutSettings.navigationTimeout();
    }
    isJavaScriptEnabled() {
      return __privateGet(this, _cdpEmulationManager).javascriptEnabled;
    }
    async setGeolocation(options) {
      return await __privateGet(this, _cdpEmulationManager).setGeolocation(options);
    }
    async setJavaScriptEnabled(enabled) {
      return await __privateGet(this, _cdpEmulationManager).setJavaScriptEnabled(enabled);
    }
    async emulateMediaType(type) {
      return await __privateGet(this, _cdpEmulationManager).emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
      return await __privateGet(this, _cdpEmulationManager).emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
      return await __privateGet(this, _cdpEmulationManager).emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
      return await __privateGet(this, _cdpEmulationManager).emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
      return await __privateGet(this, _cdpEmulationManager).emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
      return await __privateGet(this, _cdpEmulationManager).emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
      if (!this.browser().cdpSupported) {
        await __privateGet(this, _frame6).browsingContext.setViewport({
          viewport: (viewport == null ? void 0 : viewport.width) && (viewport == null ? void 0 : viewport.height) ? {
            width: viewport.width,
            height: viewport.height
          } : null,
          devicePixelRatio: (viewport == null ? void 0 : viewport.deviceScaleFactor) ? viewport.deviceScaleFactor : null
        });
        __privateSet(this, _viewport, viewport);
        return;
      }
      const needsReload = await __privateGet(this, _cdpEmulationManager).emulateViewport(viewport);
      __privateSet(this, _viewport, viewport);
      if (needsReload) {
        await this.reload();
      }
    }
    viewport() {
      return __privateGet(this, _viewport);
    }
    async pdf(options = {}) {
      const { timeout: ms = this._timeoutSettings.timeout(), path = void 0 } = options;
      const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize } = parsePDFOptions(options, "cm");
      const pageRanges = ranges ? ranges.split(", ") : [];
      await firstValueFrom(from(this.mainFrame().isolatedRealm().evaluate(() => {
        return document.fonts.ready;
      })).pipe(raceWith(timeout(ms))));
      const data = await firstValueFrom(from(__privateGet(this, _frame6).browsingContext.print({
        background,
        margin,
        orientation: landscape ? "landscape" : "portrait",
        page: {
          width,
          height
        },
        pageRanges,
        scale,
        shrinkToFit: !preferCSSPageSize
      })).pipe(raceWith(timeout(ms))));
      const typedArray = stringToTypedArray(data, true);
      await this._maybeWriteTypedArrayToFile(path, typedArray);
      return typedArray;
    }
    async createPDFStream(options) {
      const typedArray = await this.pdf(options);
      return new ReadableStream({
        start(controller) {
          controller.enqueue(typedArray);
          controller.close();
        }
      });
    }
    async _screenshot(options) {
      const { clip, type, captureBeyondViewport, quality } = options;
      if (options.omitBackground !== void 0 && options.omitBackground) {
        throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
      }
      if (options.optimizeForSpeed !== void 0 && options.optimizeForSpeed) {
        throw new UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
      }
      if (options.fromSurface !== void 0 && !options.fromSurface) {
        throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
      }
      if (clip !== void 0 && clip.scale !== void 0 && clip.scale !== 1) {
        throw new UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
      }
      let box;
      if (clip) {
        if (captureBeyondViewport) {
          box = clip;
        } else {
          const [pageLeft, pageTop] = await this.evaluate(() => {
            if (!window.visualViewport) {
              throw new Error("window.visualViewport is not supported.");
            }
            return [
              window.visualViewport.pageLeft,
              window.visualViewport.pageTop
            ];
          });
          box = {
            ...clip,
            x: clip.x - pageLeft,
            y: clip.y - pageTop
          };
        }
      }
      const data = await __privateGet(this, _frame6).browsingContext.captureScreenshot({
        origin: captureBeyondViewport ? "document" : "viewport",
        format: {
          type: `image/${type}`,
          ...quality !== void 0 ? { quality: quality / 100 } : {}
        },
        ...box ? { clip: { type: "box", ...box } } : {}
      });
      return data;
    }
    async createCDPSession() {
      return await __privateGet(this, _frame6).createCDPSession();
    }
    async bringToFront() {
      await __privateGet(this, _frame6).browsingContext.activate();
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
      const expression = evaluationExpression(pageFunction, ...args);
      const script = await __privateGet(this, _frame6).browsingContext.addPreloadScript(expression);
      return { identifier: script };
    }
    async removeScriptToEvaluateOnNewDocument(id) {
      await __privateGet(this, _frame6).browsingContext.removePreloadScript(id);
    }
    async exposeFunction(name, pptrFunction) {
      return await this.mainFrame().exposeFunction(name, "default" in pptrFunction ? pptrFunction.default : pptrFunction);
    }
    isDragInterceptionEnabled() {
      return false;
    }
    async setCacheEnabled(enabled) {
      if (!__privateGet(this, _browserContext).browser().cdpSupported) {
        await __privateGet(this, _frame6).browsingContext.setCacheBehavior(enabled ? "default" : "bypass");
        return;
      }
      await this._client().send("Network.setCacheDisabled", {
        cacheDisabled: !enabled
      });
    }
    async cookies(...urls) {
      const normalizedUrls = (urls.length ? urls : [this.url()]).map((url) => {
        return new URL(url);
      });
      const cookies = await __privateGet(this, _frame6).browsingContext.getCookies();
      return cookies.map((cookie) => {
        return bidiToPuppeteerCookie(cookie);
      }).filter((cookie) => {
        return normalizedUrls.some((url) => {
          return testUrlMatchCookie(cookie, url);
        });
      });
    }
    isServiceWorkerBypassed() {
      throw new UnsupportedOperation();
    }
    target() {
      throw new UnsupportedOperation();
    }
    waitForFileChooser() {
      throw new UnsupportedOperation();
    }
    workers() {
      return [...__privateGet(this, _workers4)];
    }
    async setRequestInterception(enable) {
      __privateSet(this, _userInterception, await __privateMethod(this, _BidiPage_instances, toggleInterception_fn).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], __privateGet(this, _userInterception), enable));
    }
    async setExtraHTTPHeaders(headers) {
      const extraHTTPHeaders = {};
      for (const [key, value] of Object.entries(headers)) {
        assert$1(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
        extraHTTPHeaders[key.toLowerCase()] = value;
      }
      this._extraHTTPHeaders = extraHTTPHeaders;
      __privateSet(this, _extraHeadersInterception, await __privateMethod(this, _BidiPage_instances, toggleInterception_fn).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], __privateGet(this, _extraHeadersInterception), Boolean(Object.keys(this._extraHTTPHeaders).length)));
    }
    async authenticate(credentials) {
      __privateSet(this, _authInterception, await __privateMethod(this, _BidiPage_instances, toggleInterception_fn).call(this, [
        "authRequired"
        /* Bidi.Network.InterceptPhase.AuthRequired */
      ], __privateGet(this, _authInterception), Boolean(credentials)));
      this._credentials = credentials;
    }
    setDragInterception() {
      throw new UnsupportedOperation();
    }
    setBypassServiceWorker() {
      throw new UnsupportedOperation();
    }
    async setOfflineMode(enabled) {
      if (!__privateGet(this, _browserContext).browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      if (!__privateGet(this, _emulatedNetworkConditions)) {
        __privateSet(this, _emulatedNetworkConditions, {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        });
      }
      __privateGet(this, _emulatedNetworkConditions).offline = enabled;
      return await __privateMethod(this, _BidiPage_instances, applyNetworkConditions_fn).call(this);
    }
    async emulateNetworkConditions(networkConditions) {
      if (!__privateGet(this, _browserContext).browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      if (!__privateGet(this, _emulatedNetworkConditions)) {
        __privateSet(this, _emulatedNetworkConditions, {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        });
      }
      __privateGet(this, _emulatedNetworkConditions).upload = networkConditions ? networkConditions.upload : -1;
      __privateGet(this, _emulatedNetworkConditions).download = networkConditions ? networkConditions.download : -1;
      __privateGet(this, _emulatedNetworkConditions).latency = networkConditions ? networkConditions.latency : 0;
      return await __privateMethod(this, _BidiPage_instances, applyNetworkConditions_fn).call(this);
    }
    async setCookie(...cookies) {
      const pageURL = this.url();
      const pageUrlStartsWithHTTP = pageURL.startsWith("http");
      for (const cookie of cookies) {
        let cookieUrl = cookie.url || "";
        if (!cookieUrl && pageUrlStartsWithHTTP) {
          cookieUrl = pageURL;
        }
        assert$1(cookieUrl !== "about:blank", `Blank page can not have cookie "${cookie.name}"`);
        assert$1(!String.prototype.startsWith.call(cookieUrl || "", "data:"), `Data URL page can not have cookie "${cookie.name}"`);
        assert$1(cookie.partitionKey === void 0 || typeof cookie.partitionKey === "string", "BiDi only allows domain partition keys");
        const normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : void 0;
        const domain = cookie.domain ?? (normalizedUrl == null ? void 0 : normalizedUrl.hostname);
        assert$1(domain !== void 0, `At least one of the url and domain needs to be specified`);
        const bidiCookie = {
          domain,
          name: cookie.name,
          value: {
            type: "string",
            value: cookie.value
          },
          ...cookie.path !== void 0 ? { path: cookie.path } : {},
          ...cookie.httpOnly !== void 0 ? { httpOnly: cookie.httpOnly } : {},
          ...cookie.secure !== void 0 ? { secure: cookie.secure } : {},
          ...cookie.sameSite !== void 0 ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) } : {},
          ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
          // Chrome-specific properties.
          ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, "sameParty", "sourceScheme", "priority", "url")
        };
        if (cookie.partitionKey !== void 0) {
          await this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey);
        } else {
          await __privateGet(this, _frame6).browsingContext.setCookie(bidiCookie);
        }
      }
    }
    async deleteCookie(...cookies) {
      await Promise.all(cookies.map(async (deleteCookieRequest) => {
        const cookieUrl = deleteCookieRequest.url ?? this.url();
        const normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : void 0;
        const domain = deleteCookieRequest.domain ?? (normalizedUrl == null ? void 0 : normalizedUrl.hostname);
        assert$1(domain !== void 0, `At least one of the url and domain needs to be specified`);
        const filter2 = {
          domain,
          name: deleteCookieRequest.name,
          ...deleteCookieRequest.path !== void 0 ? { path: deleteCookieRequest.path } : {}
        };
        await __privateGet(this, _frame6).browsingContext.deleteCookie(filter2);
      }));
    }
    async removeExposedFunction(name) {
      await __privateGet(this, _frame6).removeExposedFunction(name);
    }
    metrics() {
      throw new UnsupportedOperation();
    }
    async goBack(options = {}) {
      return await __privateMethod(this, _BidiPage_instances, go_fn).call(this, -1, options);
    }
    async goForward(options = {}) {
      return await __privateMethod(this, _BidiPage_instances, go_fn).call(this, 1, options);
    }
    waitForDevicePrompt() {
      throw new UnsupportedOperation();
    }
  }, _trustedEmitter_accessor_storage = new WeakMap(), _browserContext = new WeakMap(), _frame6 = new WeakMap(), _viewport = new WeakMap(), _workers4 = new WeakMap(), _cdpEmulationManager = new WeakMap(), _emulatedNetworkConditions = new WeakMap(), _BidiPage_instances = new WeakSet(), initialize_fn7 = function() {
    __privateGet(this, _frame6).browsingContext.on("closed", () => {
      this.trustedEmitter.emit("close", void 0);
      this.trustedEmitter.removeAllListeners();
    });
    this.trustedEmitter.on("workercreated", (worker) => {
      __privateGet(this, _workers4).add(worker);
    });
    this.trustedEmitter.on("workerdestroyed", (worker) => {
      __privateGet(this, _workers4).delete(worker);
    });
  }, _userAgentInterception = new WeakMap(), _userAgentPreloadScript = new WeakMap(), _userInterception = new WeakMap(), _extraHeadersInterception = new WeakMap(), _authInterception = new WeakMap(), toggleInterception_fn = async function(phases, interception, expected) {
    if (expected && !interception) {
      return await __privateGet(this, _frame6).browsingContext.addIntercept({
        phases
      });
    } else if (!expected && interception) {
      await __privateGet(this, _frame6).browsingContext.userContext.browser.removeIntercept(interception);
      return;
    }
    return interception;
  }, applyNetworkConditions_fn = async function() {
    if (!__privateGet(this, _emulatedNetworkConditions)) {
      return;
    }
    await this._client().send("Network.emulateNetworkConditions", {
      offline: __privateGet(this, _emulatedNetworkConditions).offline,
      latency: __privateGet(this, _emulatedNetworkConditions).latency,
      uploadThroughput: __privateGet(this, _emulatedNetworkConditions).upload,
      downloadThroughput: __privateGet(this, _emulatedNetworkConditions).download
    });
  }, go_fn = async function(delta, options) {
    const controller = new AbortController();
    try {
      const [response] = await Promise.all([
        this.waitForNavigation({
          ...options,
          signal: controller.signal
        }),
        __privateGet(this, _frame6).browsingContext.traverseHistory(delta)
      ]);
      return response;
    } catch (error) {
      controller.abort();
      if (isErrorLike(error)) {
        if (error.message.includes("no such history entry")) {
          return null;
        }
      }
      throw error;
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _trustedEmitter_decorators = [bubble()];
    __esDecorate$4(_a2, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: (obj) => "trustedEmitter" in obj, get: (obj) => obj.trustedEmitter, set: (obj, value) => {
      obj.trustedEmitter = value;
    } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
function evaluationExpression(fun, ...args) {
  return `() => {${evaluationString(fun, ...args)}}`;
}
function testUrlMatchCookieHostname(cookie, normalizedUrl) {
  const cookieDomain = cookie.domain.toLowerCase();
  const urlHostname = normalizedUrl.hostname.toLowerCase();
  if (cookieDomain === urlHostname) {
    return true;
  }
  return cookieDomain.startsWith(".") && urlHostname.endsWith(cookieDomain);
}
function testUrlMatchCookiePath(cookie, normalizedUrl) {
  const uriPath = normalizedUrl.pathname;
  const cookiePath = cookie.path;
  if (uriPath === cookiePath) {
    return true;
  }
  if (uriPath.startsWith(cookiePath)) {
    if (cookiePath.endsWith("/")) {
      return true;
    }
    if (uriPath[cookiePath.length] === "/") {
      return true;
    }
  }
  return false;
}
function testUrlMatchCookie(cookie, url) {
  const normalizedUrl = new URL(url);
  assert$1(cookie !== void 0);
  if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
    return false;
  }
  return testUrlMatchCookiePath(cookie, normalizedUrl);
}
function bidiToPuppeteerCookie(bidiCookie, returnCompositePartitionKey = false) {
  const partitionKey = bidiCookie[CDP_SPECIFIC_PREFIX + "partitionKey"];
  function getParitionKey() {
    if (typeof partitionKey === "string") {
      return { partitionKey };
    }
    if (typeof partitionKey === "object" && partitionKey !== null) {
      if (returnCompositePartitionKey) {
        return {
          partitionKey: {
            sourceOrigin: partitionKey.topLevelSite,
            hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false
          }
        };
      }
      return {
        // TODO: a breaking change in Puppeteer is required to change
        // partitionKey type and report the composite partition key.
        partitionKey: partitionKey.topLevelSite
      };
    }
    return {};
  }
  return {
    name: bidiCookie.name,
    // Presents binary value as base64 string.
    value: bidiCookie.value.value,
    domain: bidiCookie.domain,
    path: bidiCookie.path,
    size: bidiCookie.size,
    httpOnly: bidiCookie.httpOnly,
    secure: bidiCookie.secure,
    sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
    expires: bidiCookie.expiry ?? -1,
    session: bidiCookie.expiry === void 0 || bidiCookie.expiry <= 0,
    // Extending with CDP-specific properties with `goog:` prefix.
    ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, "sameParty", "sourceScheme", "partitionKeyOpaque", "priority"),
    ...getParitionKey()
  };
}
const CDP_SPECIFIC_PREFIX = "goog:";
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, ...propertyNames) {
  const result = {};
  for (const property of propertyNames) {
    if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== void 0) {
      result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
    }
  }
  return result;
}
function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam, ...propertyNames) {
  const result = {};
  for (const property of propertyNames) {
    if (cookieParam[property] !== void 0) {
      result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
    }
  }
  return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
  return sameSite === "strict" ? "Strict" : sameSite === "lax" ? "Lax" : "None";
}
function convertCookiesSameSiteCdpToBiDi(sameSite) {
  return sameSite === "Strict" ? "strict" : sameSite === "Lax" ? "lax" : "none";
}
function convertCookiesExpiryCdpToBiDi(expiry) {
  return [void 0, -1].includes(expiry) ? void 0 : expiry;
}
function convertCookiesPartitionKeyFromPuppeteerToBiDi(partitionKey) {
  if (partitionKey === void 0 || typeof partitionKey === "string") {
    return partitionKey;
  }
  if (partitionKey.hasCrossSiteAncestor) {
    throw new UnsupportedOperation("WebDriver BiDi does not support `hasCrossSiteAncestor` yet.");
  }
  return partitionKey.sourceOrigin;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiBrowserTarget extends Target {
  constructor(browser) {
    super();
    __privateAdd(this, _browser);
    __privateSet(this, _browser, browser);
  }
  asPage() {
    throw new UnsupportedOperation();
  }
  url() {
    return "";
  }
  createCDPSession() {
    throw new UnsupportedOperation();
  }
  type() {
    return TargetType.BROWSER;
  }
  browser() {
    return __privateGet(this, _browser);
  }
  browserContext() {
    return __privateGet(this, _browser).defaultBrowserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
}
_browser = new WeakMap();
class BidiPageTarget extends Target {
  constructor(page) {
    super();
    __privateAdd(this, _page5);
    __privateSet(this, _page5, page);
  }
  async page() {
    return __privateGet(this, _page5);
  }
  async asPage() {
    return BidiPage.from(this.browserContext(), __privateGet(this, _page5).mainFrame().browsingContext);
  }
  url() {
    return __privateGet(this, _page5).url();
  }
  createCDPSession() {
    return __privateGet(this, _page5).createCDPSession();
  }
  type() {
    return TargetType.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _page5).browserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
}
_page5 = new WeakMap();
class BidiFrameTarget extends Target {
  constructor(frame) {
    super();
    __privateAdd(this, _frame5);
    __privateAdd(this, _page6);
    __privateSet(this, _frame5, frame);
  }
  async page() {
    if (__privateGet(this, _page6) === void 0) {
      __privateSet(this, _page6, BidiPage.from(this.browserContext(), __privateGet(this, _frame5).browsingContext));
    }
    return __privateGet(this, _page6);
  }
  async asPage() {
    return BidiPage.from(this.browserContext(), __privateGet(this, _frame5).browsingContext);
  }
  url() {
    return __privateGet(this, _frame5).url();
  }
  createCDPSession() {
    return __privateGet(this, _frame5).createCDPSession();
  }
  type() {
    return TargetType.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _frame5).page().browserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
}
_frame5 = new WeakMap();
_page6 = new WeakMap();
class BidiWorkerTarget extends Target {
  constructor(worker) {
    super();
    __privateAdd(this, _worker2);
    __privateSet(this, _worker2, worker);
  }
  async page() {
    throw new UnsupportedOperation();
  }
  async asPage() {
    throw new UnsupportedOperation();
  }
  url() {
    return __privateGet(this, _worker2).url();
  }
  createCDPSession() {
    throw new UnsupportedOperation();
  }
  type() {
    return TargetType.OTHER;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _worker2).frame.page().browserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
}
_worker2 = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate$3 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers$3 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __addDisposableResource$1 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$1 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let BidiBrowserContext = (() => {
  var _trustedEmitter_accessor_storage, _browser2, _defaultViewport, _pages, _targets, _overrides, _BidiBrowserContext_instances, initialize_fn7, createPage_fn, _a2;
  let _classSuper = BrowserContext;
  let _trustedEmitter_decorators;
  let _trustedEmitter_initializers = [];
  let _trustedEmitter_extraInitializers = [];
  return _a2 = class extends _classSuper {
    constructor(browser, userContext, options) {
      super();
      __privateAdd(this, _BidiBrowserContext_instances);
      __privateAdd(this, _trustedEmitter_accessor_storage, __runInitializers$3(this, _trustedEmitter_initializers, new EventEmitter$1()));
      __privateAdd(this, _browser2, __runInitializers$3(this, _trustedEmitter_extraInitializers));
      __privateAdd(this, _defaultViewport);
      // This is public because of cookies.
      __publicField(this, "userContext");
      __privateAdd(this, _pages, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _targets, /* @__PURE__ */ new Map());
      __privateAdd(this, _overrides, []);
      __privateSet(this, _browser2, browser);
      this.userContext = userContext;
      __privateSet(this, _defaultViewport, options.defaultViewport);
    }
    static from(browser, userContext, options) {
      var _a3;
      const context = new _a2(browser, userContext, options);
      __privateMethod(_a3 = context, _BidiBrowserContext_instances, initialize_fn7).call(_a3);
      return context;
    }
    get trustedEmitter() {
      return __privateGet(this, _trustedEmitter_accessor_storage);
    }
    set trustedEmitter(value) {
      __privateSet(this, _trustedEmitter_accessor_storage, value);
    }
    targets() {
      return [...__privateGet(this, _targets).values()].flatMap(([target, frames]) => {
        return [target, ...frames.values()];
      });
    }
    async newPage() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const _guard = __addDisposableResource$1(env_1, await this.waitForScreenshotOperations(), false);
        const context = await this.userContext.createBrowsingContext(
          "tab"
          /* Bidi.BrowsingContext.CreateType.Tab */
        );
        const page = __privateGet(this, _pages).get(context);
        if (!page) {
          throw new Error("Page is not found");
        }
        if (__privateGet(this, _defaultViewport)) {
          try {
            await page.setViewport(__privateGet(this, _defaultViewport));
          } catch {
          }
        }
        return page;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$1(env_1);
      }
    }
    async close() {
      assert$1(this.userContext.id !== UserContext.DEFAULT, "Default BrowserContext cannot be closed!");
      try {
        await this.userContext.remove();
      } catch (error) {
        debugError(error);
      }
      __privateGet(this, _targets).clear();
    }
    browser() {
      return __privateGet(this, _browser2);
    }
    async pages() {
      return [...this.userContext.browsingContexts].map((context) => {
        return __privateGet(this, _pages).get(context);
      });
    }
    async overridePermissions(origin, permissions) {
      const permissionsSet = new Set(permissions.map((permission) => {
        const protocolPermission = WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
        if (!protocolPermission) {
          throw new Error("Unknown permission: " + permission);
        }
        return permission;
      }));
      await Promise.all(Array.from(WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map((permission) => {
        const result = this.userContext.setPermissions(
          origin,
          {
            name: permission
          },
          permissionsSet.has(permission) ? "granted" : "denied"
          /* Bidi.Permissions.PermissionState.Denied */
        );
        __privateGet(this, _overrides).push({ origin, permission });
        if (!permissionsSet.has(permission)) {
          return result.catch(debugError);
        }
        return result;
      }));
    }
    async clearPermissionOverrides() {
      const promises = __privateGet(this, _overrides).map(({ permission, origin }) => {
        return this.userContext.setPermissions(
          origin,
          {
            name: permission
          },
          "prompt"
          /* Bidi.Permissions.PermissionState.Prompt */
        ).catch(debugError);
      });
      __privateSet(this, _overrides, []);
      await Promise.all(promises);
    }
    get id() {
      if (this.userContext.id === UserContext.DEFAULT) {
        return void 0;
      }
      return this.userContext.id;
    }
    async cookies() {
      const cookies = await this.userContext.getCookies();
      return cookies.map((cookie) => {
        return bidiToPuppeteerCookie(cookie, true);
      });
    }
    async setCookie(...cookies) {
      await Promise.all(cookies.map(async (cookie) => {
        const bidiCookie = {
          domain: cookie.domain,
          name: cookie.name,
          value: {
            type: "string",
            value: cookie.value
          },
          ...cookie.path !== void 0 ? { path: cookie.path } : {},
          ...cookie.httpOnly !== void 0 ? { httpOnly: cookie.httpOnly } : {},
          ...cookie.secure !== void 0 ? { secure: cookie.secure } : {},
          ...cookie.sameSite !== void 0 ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) } : {},
          ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
          // Chrome-specific properties.
          ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, "sameParty", "sourceScheme", "priority", "url")
        };
        return await this.userContext.setCookie(bidiCookie, convertCookiesPartitionKeyFromPuppeteerToBiDi(cookie.partitionKey));
      }));
    }
  }, _trustedEmitter_accessor_storage = new WeakMap(), _browser2 = new WeakMap(), _defaultViewport = new WeakMap(), _pages = new WeakMap(), _targets = new WeakMap(), _overrides = new WeakMap(), _BidiBrowserContext_instances = new WeakSet(), initialize_fn7 = function() {
    for (const browsingContext of this.userContext.browsingContexts) {
      __privateMethod(this, _BidiBrowserContext_instances, createPage_fn).call(this, browsingContext);
    }
    this.userContext.on("browsingcontext", ({ browsingContext }) => {
      const page = __privateMethod(this, _BidiBrowserContext_instances, createPage_fn).call(this, browsingContext);
      if (browsingContext.originalOpener) {
        for (const context of this.userContext.browsingContexts) {
          if (context.id === browsingContext.originalOpener) {
            __privateGet(this, _pages).get(context).trustedEmitter.emit("popup", page);
          }
        }
      }
    });
    this.userContext.on("closed", () => {
      this.trustedEmitter.removeAllListeners();
    });
  }, createPage_fn = function(browsingContext) {
    const page = BidiPage.from(this, browsingContext);
    __privateGet(this, _pages).set(browsingContext, page);
    page.trustedEmitter.on("close", () => {
      __privateGet(this, _pages).delete(browsingContext);
    });
    const pageTarget = new BidiPageTarget(page);
    const pageTargets = /* @__PURE__ */ new Map();
    __privateGet(this, _targets).set(page, [pageTarget, pageTargets]);
    page.trustedEmitter.on("frameattached", (frame) => {
      const bidiFrame = frame;
      const target = new BidiFrameTarget(bidiFrame);
      pageTargets.set(bidiFrame, target);
      this.trustedEmitter.emit("targetcreated", target);
    });
    page.trustedEmitter.on("framenavigated", (frame) => {
      const bidiFrame = frame;
      const target = pageTargets.get(bidiFrame);
      if (target === void 0) {
        this.trustedEmitter.emit("targetchanged", pageTarget);
      } else {
        this.trustedEmitter.emit("targetchanged", target);
      }
    });
    page.trustedEmitter.on("framedetached", (frame) => {
      const bidiFrame = frame;
      const target = pageTargets.get(bidiFrame);
      if (target === void 0) {
        return;
      }
      pageTargets.delete(bidiFrame);
      this.trustedEmitter.emit("targetdestroyed", target);
    });
    page.trustedEmitter.on("workercreated", (worker) => {
      const bidiWorker = worker;
      const target = new BidiWorkerTarget(bidiWorker);
      pageTargets.set(bidiWorker, target);
      this.trustedEmitter.emit("targetcreated", target);
    });
    page.trustedEmitter.on("workerdestroyed", (worker) => {
      const bidiWorker = worker;
      const target = pageTargets.get(bidiWorker);
      if (target === void 0) {
        return;
      }
      pageTargets.delete(worker);
      this.trustedEmitter.emit("targetdestroyed", target);
    });
    page.trustedEmitter.on("close", () => {
      __privateGet(this, _targets).delete(page);
      this.trustedEmitter.emit("targetdestroyed", pageTarget);
    });
    this.trustedEmitter.emit("targetcreated", pageTarget);
    return page;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _trustedEmitter_decorators = [bubble()];
    __esDecorate$3(_a2, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: (obj) => "trustedEmitter" in obj, get: (obj) => obj.trustedEmitter, set: (obj, value) => {
      obj.trustedEmitter = value;
    } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$2 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let Browser = (() => {
  var _closed3, _reason, _disposables2, _userContexts, _sharedWorkers, _Browser_instances, initialize_fn7, syncUserContexts_fn, syncBrowsingContexts_fn, createUserContext_fn, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _close_decorators;
  let _addPreloadScript_decorators;
  let _removeIntercept_decorators;
  let _removePreloadScript_decorators;
  let _createUserContext_decorators;
  return _a2 = class extends _classSuper {
    constructor(session) {
      super();
      __privateAdd(this, _Browser_instances);
      __privateAdd(this, _closed3, (__runInitializers$2(this, _instanceExtraInitializers), false));
      __privateAdd(this, _reason);
      __privateAdd(this, _disposables2, new DisposableStack());
      __privateAdd(this, _userContexts, /* @__PURE__ */ new Map());
      __publicField(this, "session");
      __privateAdd(this, _sharedWorkers, /* @__PURE__ */ new Map());
      this.session = session;
    }
    static async from(session) {
      var _a3;
      const browser = new _a2(session);
      await __privateMethod(_a3 = browser, _Browser_instances, initialize_fn7).call(_a3);
      return browser;
    }
    get closed() {
      return __privateGet(this, _closed3);
    }
    get defaultUserContext() {
      return __privateGet(this, _userContexts).get(UserContext.DEFAULT);
    }
    get disconnected() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.disconnected;
    }
    get userContexts() {
      return __privateGet(this, _userContexts).values();
    }
    dispose(reason, closed = false) {
      __privateSet(this, _closed3, closed);
      __privateSet(this, _reason, reason);
      this[disposeSymbol]();
    }
    async close() {
      try {
        await this.session.send("browser.close", {});
      } finally {
        this.dispose("Browser already closed.", true);
      }
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      var _a3;
      const { result: { script } } = await this.session.send("script.addPreloadScript", {
        functionDeclaration,
        ...options,
        contexts: (_a3 = options.contexts) == null ? void 0 : _a3.map((context) => {
          return context.id;
        })
      });
      return script;
    }
    async removeIntercept(intercept) {
      await this.session.send("network.removeIntercept", {
        intercept
      });
    }
    async removePreloadScript(script) {
      await this.session.send("script.removePreloadScript", {
        script
      });
    }
    async createUserContext() {
      const { result: { userContext: context } } = await this.session.send("browser.createUserContext", {});
      return __privateMethod(this, _Browser_instances, createUserContext_fn).call(this, context);
    }
    [(_dispose_decorators = [inertIfDisposed], _close_decorators = [throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _addPreloadScript_decorators = [throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _removeIntercept_decorators = [throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _removePreloadScript_decorators = [throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _createUserContext_decorators = [throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Browser was disconnected, probably because the session ended.");
      if (this.closed) {
        this.emit("closed", { reason: __privateGet(this, _reason) });
      }
      this.emit("disconnected", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
  }, _closed3 = new WeakMap(), _reason = new WeakMap(), _disposables2 = new WeakMap(), _userContexts = new WeakMap(), _sharedWorkers = new WeakMap(), _Browser_instances = new WeakSet(), initialize_fn7 = async function() {
    const sessionEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(this.session));
    sessionEmitter.once("ended", ({ reason }) => {
      this.dispose(reason);
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "shared-worker") {
        return;
      }
      __privateGet(this, _sharedWorkers).set(info.realm, SharedWorkerRealm.from(this, info.realm, info.origin));
    });
    await __privateMethod(this, _Browser_instances, syncUserContexts_fn).call(this);
    await __privateMethod(this, _Browser_instances, syncBrowsingContexts_fn).call(this);
  }, syncUserContexts_fn = async function() {
    const { result: { userContexts } } = await this.session.send("browser.getUserContexts", {});
    for (const context of userContexts) {
      __privateMethod(this, _Browser_instances, createUserContext_fn).call(this, context.userContext);
    }
  }, syncBrowsingContexts_fn = async function() {
    const contextIds = /* @__PURE__ */ new Set();
    let contexts;
    {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const sessionEmitter = __addDisposableResource(env_1, new EventEmitter$1(this.session), false);
        sessionEmitter.on("browsingContext.contextCreated", (info) => {
          contextIds.add(info.context);
        });
        const { result } = await this.session.send("browsingContext.getTree", {});
        contexts = result.contexts;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources(env_1);
      }
    }
    for (const info of contexts) {
      if (!contextIds.has(info.context)) {
        this.session.emit("browsingContext.contextCreated", info);
      }
      if (info.children) {
        contexts.push(...info.children);
      }
    }
  }, createUserContext_fn = function(id) {
    const userContext = UserContext.create(this, id);
    __privateGet(this, _userContexts).set(userContext.id, userContext);
    const userContextEmitter = __privateGet(this, _disposables2).use(new EventEmitter$1(userContext));
    userContextEmitter.once("closed", () => {
      userContextEmitter.removeAllListeners();
      __privateGet(this, _userContexts).delete(userContext.id);
    });
    return userContext;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$2(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a2, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a2, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a2, null, _removeIntercept_decorators, { kind: "method", name: "removeIntercept", static: false, private: false, access: { has: (obj) => "removeIntercept" in obj, get: (obj) => obj.removeIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a2, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a2, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: (obj) => "createUserContext" in obj, get: (obj) => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$1 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$1 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Session = (() => {
  var _reason, _disposables2, _info, _connection_accessor_storage, _Session_instances, initialize_fn7, _a2;
  let _classSuper = EventEmitter$1;
  let _instanceExtraInitializers = [];
  let _connection_decorators;
  let _connection_initializers = [];
  let _connection_extraInitializers = [];
  let _dispose_decorators;
  let _send_decorators;
  let _subscribe_decorators;
  let _addIntercepts_decorators;
  let _end_decorators;
  return _a2 = class extends _classSuper {
    constructor(connection, info) {
      super();
      __privateAdd(this, _Session_instances);
      __privateAdd(this, _reason, __runInitializers$1(this, _instanceExtraInitializers));
      __privateAdd(this, _disposables2, new DisposableStack());
      __privateAdd(this, _info);
      __publicField(this, "browser");
      __privateAdd(this, _connection_accessor_storage, __runInitializers$1(this, _connection_initializers, void 0));
      __runInitializers$1(this, _connection_extraInitializers);
      __privateSet(this, _info, info);
      this.connection = connection;
    }
    static async from(connection, capabilities) {
      var _a3;
      const { result } = await connection.send("session.new", {
        capabilities
      });
      const session = new _a2(connection, result);
      await __privateMethod(_a3 = session, _Session_instances, initialize_fn7).call(_a3);
      return session;
    }
    get connection() {
      return __privateGet(this, _connection_accessor_storage);
    }
    set connection(value) {
      __privateSet(this, _connection_accessor_storage, value);
    }
    get capabilities() {
      return __privateGet(this, _info).capabilities;
    }
    get disposed() {
      return this.ended;
    }
    get ended() {
      return __privateGet(this, _reason) !== void 0;
    }
    get id() {
      return __privateGet(this, _info).sessionId;
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[disposeSymbol]();
    }
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    async send(method, params) {
      return await this.connection.send(method, params);
    }
    async subscribe(events2, contexts) {
      await this.send("session.subscribe", {
        events: events2,
        contexts
      });
    }
    async addIntercepts(events2, contexts) {
      await this.send("session.subscribe", {
        events: events2,
        contexts
      });
    }
    async end() {
      try {
        await this.send("session.end", {});
      } finally {
        this.dispose(`Session already ended.`);
      }
    }
    [(_connection_decorators = [bubble()], _dispose_decorators = [inertIfDisposed], _send_decorators = [throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _subscribe_decorators = [throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _addIntercepts_decorators = [throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _end_decorators = [throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Session already destroyed, probably because the connection broke.");
      this.emit("ended", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[disposeSymbol]();
    }
  }, _reason = new WeakMap(), _disposables2 = new WeakMap(), _info = new WeakMap(), _connection_accessor_storage = new WeakMap(), _Session_instances = new WeakSet(), initialize_fn7 = async function() {
    this.browser = await Browser.from(this);
    const browserEmitter = __privateGet(this, _disposables2).use(this.browser);
    browserEmitter.once("closed", ({ reason }) => {
      this.dispose(reason);
    });
    const seen = /* @__PURE__ */ new WeakSet();
    this.on("browsingContext.fragmentNavigated", (info) => {
      if (seen.has(info)) {
        return;
      }
      seen.add(info);
      this.emit("browsingContext.navigationStarted", info);
      this.emit("browsingContext.fragmentNavigated", info);
    });
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$1(_a2, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: (obj) => "connection" in obj, get: (obj) => obj.connection, set: (obj, value) => {
      obj.connection = value;
    } }, metadata: _metadata }, _connection_initializers, _connection_extraInitializers);
    __esDecorate$1(_a2, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a2, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: (obj) => "send" in obj, get: (obj) => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a2, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a2, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: (obj) => "addIntercepts" in obj, get: (obj) => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a2, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: (obj) => "end" in obj, get: (obj) => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a2;
})();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __setFunctionName = function(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
let BidiBrowser = (() => {
  var _a2, _trustedEmitter_accessor_storage, _BidiBrowser_instances, trustedEmitter_get, trustedEmitter_set, _process, _closeCallback, _browserCore, _defaultViewport, _browserContexts, _target, _cdpConnection, initialize_fn7, browserName_get, browserVersion_get, createBrowserContext_fn;
  let _classSuper = Browser$1;
  let _private_trustedEmitter_decorators;
  let _private_trustedEmitter_initializers = [];
  let _private_trustedEmitter_extraInitializers = [];
  let _private_trustedEmitter_descriptor;
  return _a2 = class extends _classSuper {
    constructor(browserCore, opts) {
      super();
      __privateAdd(this, _BidiBrowser_instances);
      __publicField(this, "protocol", "webDriverBiDi");
      __privateAdd(this, _trustedEmitter_accessor_storage, __runInitializers(this, _private_trustedEmitter_initializers, new EventEmitter$1()));
      __privateAdd(this, _process, __runInitializers(this, _private_trustedEmitter_extraInitializers));
      __privateAdd(this, _closeCallback);
      __privateAdd(this, _browserCore);
      __privateAdd(this, _defaultViewport);
      __privateAdd(this, _browserContexts, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _target, new BidiBrowserTarget(this));
      __privateAdd(this, _cdpConnection);
      __privateSet(this, _process, opts.process);
      __privateSet(this, _closeCallback, opts.closeCallback);
      __privateSet(this, _browserCore, browserCore);
      __privateSet(this, _defaultViewport, opts.defaultViewport);
      __privateSet(this, _cdpConnection, opts.cdpConnection);
    }
    static async create(opts) {
      var _a3, _b, _c;
      const session = await Session.from(opts.connection, {
        firstMatch: (_a3 = opts.capabilities) == null ? void 0 : _a3.firstMatch,
        alwaysMatch: {
          ...(_b = opts.capabilities) == null ? void 0 : _b.alwaysMatch,
          // Capabilities that come from Puppeteer's API take precedence.
          acceptInsecureCerts: opts.acceptInsecureCerts,
          unhandledPromptBehavior: {
            default: "ignore"
          },
          webSocketUrl: true,
          // Puppeteer with WebDriver BiDi does not support prerendering
          // yet because WebDriver BiDi behavior is not specified. See
          // https://github.com/w3c/webdriver-bidi/issues/321.
          "goog:prerenderingDisabled": true
        }
      });
      await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes("firefox") ? _a2.subscribeModules : [..._a2.subscribeModules, ..._a2.subscribeCdpEvents]);
      const browser = new _a2(session.browser, opts);
      __privateMethod(_c = browser, _BidiBrowser_instances, initialize_fn7).call(_c);
      return browser;
    }
    get cdpSupported() {
      return __privateGet(this, _cdpConnection) !== void 0;
    }
    get cdpConnection() {
      return __privateGet(this, _cdpConnection);
    }
    async userAgent() {
      return __privateGet(this, _browserCore).session.capabilities.userAgent;
    }
    get connection() {
      return __privateGet(this, _browserCore).session.connection;
    }
    wsEndpoint() {
      return this.connection.url;
    }
    async close() {
      var _a3;
      if (this.connection.closed) {
        return;
      }
      try {
        await __privateGet(this, _browserCore).close();
        await ((_a3 = __privateGet(this, _closeCallback)) == null ? void 0 : _a3.call(null));
      } catch (error) {
        debugError(error);
      } finally {
        this.connection.dispose();
      }
    }
    get connected() {
      return !__privateGet(this, _browserCore).disconnected;
    }
    process() {
      return __privateGet(this, _process) ?? null;
    }
    async createBrowserContext(_options) {
      const userContext = await __privateGet(this, _browserCore).createUserContext();
      return __privateMethod(this, _BidiBrowser_instances, createBrowserContext_fn).call(this, userContext);
    }
    async version() {
      return `${__privateGet(this, _BidiBrowser_instances, browserName_get)}/${__privateGet(this, _BidiBrowser_instances, browserVersion_get)}`;
    }
    browserContexts() {
      return [...__privateGet(this, _browserCore).userContexts].map((context) => {
        return __privateGet(this, _browserContexts).get(context);
      });
    }
    defaultBrowserContext() {
      return __privateGet(this, _browserContexts).get(__privateGet(this, _browserCore).defaultUserContext);
    }
    newPage() {
      return this.defaultBrowserContext().newPage();
    }
    targets() {
      return [
        __privateGet(this, _target),
        ...this.browserContexts().flatMap((context) => {
          return context.targets();
        })
      ];
    }
    target() {
      return __privateGet(this, _target);
    }
    async disconnect() {
      try {
        await __privateGet(this, _browserCore).session.end();
      } catch (error) {
        debugError(error);
      } finally {
        this.connection.dispose();
      }
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: this.connection.getPendingProtocolErrors()
      };
    }
  }, _trustedEmitter_accessor_storage = new WeakMap(), _BidiBrowser_instances = new WeakSet(), trustedEmitter_get = function() {
    return _private_trustedEmitter_descriptor.get.call(this);
  }, trustedEmitter_set = function(value) {
    return _private_trustedEmitter_descriptor.set.call(this, value);
  }, _process = new WeakMap(), _closeCallback = new WeakMap(), _browserCore = new WeakMap(), _defaultViewport = new WeakMap(), _browserContexts = new WeakMap(), _target = new WeakMap(), _cdpConnection = new WeakMap(), initialize_fn7 = function() {
    var _a3;
    for (const userContext of __privateGet(this, _browserCore).userContexts) {
      __privateMethod(this, _BidiBrowser_instances, createBrowserContext_fn).call(this, userContext);
    }
    __privateGet(this, _browserCore).once("disconnected", () => {
      __privateGet(this, _BidiBrowser_instances, trustedEmitter_get).emit("disconnected", void 0);
      __privateGet(this, _BidiBrowser_instances, trustedEmitter_get).removeAllListeners();
    });
    (_a3 = __privateGet(this, _process)) == null ? void 0 : _a3.once("close", () => {
      __privateGet(this, _browserCore).dispose("Browser process exited.", true);
      this.connection.dispose();
    });
  }, browserName_get = function() {
    return __privateGet(this, _browserCore).session.capabilities.browserName;
  }, browserVersion_get = function() {
    return __privateGet(this, _browserCore).session.capabilities.browserVersion;
  }, createBrowserContext_fn = function(userContext) {
    const browserContext = BidiBrowserContext.from(this, userContext, {
      defaultViewport: __privateGet(this, _defaultViewport)
    });
    __privateGet(this, _browserContexts).set(userContext, browserContext);
    browserContext.trustedEmitter.on("targetcreated", (target) => {
      __privateGet(this, _BidiBrowser_instances, trustedEmitter_get).emit("targetcreated", target);
    });
    browserContext.trustedEmitter.on("targetchanged", (target) => {
      __privateGet(this, _BidiBrowser_instances, trustedEmitter_get).emit("targetchanged", target);
    });
    browserContext.trustedEmitter.on("targetdestroyed", (target) => {
      __privateGet(this, _BidiBrowser_instances, trustedEmitter_get).emit("targetdestroyed", target);
    });
    return browserContext;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _private_trustedEmitter_decorators = [bubble()];
    __esDecorate(_a2, _private_trustedEmitter_descriptor = { get: __setFunctionName(function() {
      return __privateGet(this, _trustedEmitter_accessor_storage);
    }, "#trustedEmitter", "get"), set: __setFunctionName(function(value) {
      __privateSet(this, _trustedEmitter_accessor_storage, value);
    }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: (obj) => __privateIn(_BidiBrowser_instances, obj), get: (obj) => __privateGet(obj, _BidiBrowser_instances, trustedEmitter_get), set: (obj, value) => {
      __privateSet(obj, _BidiBrowser_instances, value, trustedEmitter_set);
    } }, metadata: _metadata }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
    if (_metadata) Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), __publicField(_a2, "subscribeModules", [
    "browsingContext",
    "network",
    "log",
    "script"
  ]), __publicField(_a2, "subscribeCdpEvents", [
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
  ]), _a2;
})();
export {
  BidiBrowser,
  BidiBrowserContext,
  BidiConnection,
  BidiElementHandle,
  BidiFrame,
  BidiFrameRealm,
  BidiHTTPRequest,
  BidiHTTPResponse,
  BidiJSHandle,
  BidiKeyboard,
  BidiMouse,
  BidiPage,
  BidiRealm,
  BidiTouchscreen,
  BidiWorkerRealm,
  bidiToPuppeteerCookie,
  cdpSpecificCookiePropertiesFromPuppeteerToBidi,
  connectBidiOverCdp,
  convertCookiesExpiryCdpToBiDi,
  convertCookiesPartitionKeyFromPuppeteerToBiDi,
  convertCookiesSameSiteCdpToBiDi,
  requests
};
