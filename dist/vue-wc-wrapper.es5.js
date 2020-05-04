function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var camelizeRE = /-(\w)/g;
var camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function getInitialProps(propsList) {
  var res = {};
  propsList.forEach(function (key) {
    res[key] = undefined;
  });
  return res;
}
function injectHook(options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}
function callHooks(vm, hook) {
  if (vm) {
    var hooks = vm.$options[hook] || [];
    hooks.forEach(function (hook) {
      hook.call(vm);
    });
  }
}
function createCustomEvent(name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  });
}

var isBoolean = function isBoolean(val) {
  return /function Boolean/.test(String(val));
};

var isNumber = function isNumber(val) {
  return /function Number/.test(String(val));
};

function convertAttributeValue(value, name) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      type = _ref.type;

  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true';
    }

    if (value === '' || value === name) {
      return true;
    }

    return value != null;
  } else if (isNumber(type)) {
    var parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed;
  } else {
    return value;
  }
}
function toVNodes(h, children) {
  var res = [];

  for (var i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }

  return res;
}

function toVNode(h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null;
  } else if (node.nodeType === 1) {
    var data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };

    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }

    return h(node.tagName, data);
  } else {
    return null;
  }
}

function getAttributes(node) {
  var res = {};

  for (var i = 0, l = node.attributes.length; i < l; i++) {
    var attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }

  return res;
}

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

function wrap(Vue, Component) {
  var isAsync = typeof Component === 'function' && !Component.cid;
  var isInitialized = false;
  var hyphenatedPropsList;
  var camelizedPropsList;
  var camelizedPropsMap;

  function initialize(Component) {
    if (isInitialized) return;
    var options = typeof Component === 'function' ? Component.options : Component; // extract props info

    var propsList = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    var originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce(function (map, key, i) {
      map[key] = originalPropsAsObject[propsList[i]];
      return map;
    }, {}); // proxy $emit to native DOM events

    injectHook(options, 'beforeCreate', function () {
      var _this = this;

      var emit = this.$emit;

      this.$emit = function (name) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        _this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));

        return emit.call.apply(emit, [_this, name].concat(args));
      };
    });
    injectHook(options, 'created', function () {
      var _this2 = this;

      // sync default props values to wrapper on created
      camelizedPropsList.forEach(function (key) {
        _this2.$root.props[key] = _this2[key];
      });
    }); // proxy props as Element properties

    camelizedPropsList.forEach(function (key) {
      Object.defineProperty(CustomElement.prototype, key, {
        get: function get() {
          return this._wrapper.props[key];
        },
        set: function set(newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });
    isInitialized = true;
  }

  function syncAttribute(el, key) {
    var camelized = camelize(key);
    var value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(value, key, camelizedPropsMap[camelized]);
  }

  var CustomElement = _fixBabelExtend( /*#__PURE__*/function (_HTMLElement) {
    _inherits(CustomElement, _HTMLElement);

    var _super = _createSuper(CustomElement);

    function CustomElement() {
      var _this3;

      _classCallCheck(this, CustomElement);

      var self = _this3 = _super.call(this);

      self.attachShadow({
        mode: 'open'
      });
      var wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data: function data() {
          return {
            props: {},
            slotChildren: [],
            ShadyDOMSlotsHack_slotsPassedToWrapper: false,
            ShadyDOMSlotsHack_deregisterSetIntervalListener: null
          };
        },
        render: function render(h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren);
        }
      });

      if (window.ShadyDOM) {
        // MutationObserver does not work inside shadowRoot when polyfilled with ShadyDOM
        // this makes slot changes go unrecognized by our usage of MutationObserver
        // https://github.com/webcomponents/polyfills/issues/81
        // ShadyDOM has a function called ShadyDOM.childrenObserver but it doesn't do the job very thoroughly, as it
        // cannot recognize changes in slots when the slot count hasn't changed, and seemingly doesn't recognized removal of elements (https://github.com/webcomponents/polyfills/issues/82)
        // .. what it can do for us however, is to observe whether slots are ever added.
        // once a slot is added, we'll apply the hack to this wrapper.
        // if slots are never used, we're saving ourselves some performance cost.
        window.ShadyDOM.observeChildren(_assertThisInitialized(_this3), function () {
          if (!wrapper.ShadyDOMSlotsHack_slotsPassedToWrapper) {
            wrapper.ShadyDOMSlotsHack_slotsPassedToWrapper = true;
          }
        }); // Here is the ugly fix to work around the core issue, basically setInterval, but shared across all vue wc wrappers for performance
        // we preserve the original MutationObserver code further down, because it observes all other changes for us.

        window.ShadyDOMSlotsHack_setInterval = window.ShadyDOMSlotsHack_setInterval || // eslint-disable-next-line no-extra-parens
        new function () {
          var _this4 = this;

          this.listeners = [];

          this.add = function (handler) {
            var id = Math.floor(Math.random() * 1000000);

            _this4.listeners.push({
              handler: handler,
              id: id
            });

            if (_this4.listeners.length === 1) {
              // first entry added, start setInterval
              _this4.start();
            }

            return id;
          };

          this.remove = function (idToRemove) {
            _this4.listeners.splice(_this4.listeners.findIndex(function (_ref) {
              var id = _ref.id;
              return id === idToRemove;
            }), 1);

            if (_this4.listeners.length === 0) {
              // no entries left, stop setInterval
              _this4.stop();
            }
          };

          this.start = function () {
            if (_this4.intervalId === undefined || _this4.intervalId === null) {
              _this4.intervalId = window.setInterval(function () {
                _this4.listeners.forEach(function (_ref2) {
                  var handler = _ref2.handler;
                  return handler();
                });
              }, 100);
            }
          };

          this.stop = function () {
            if (_this4.intervalId) {
              window.clearInterval(_this4.intervalId);
              _this4.intervalId = null;
            }
          };
        }();
        var id = window.ShadyDOMSlotsHack_setInterval.add(function () {
          if (wrapper.ShadyDOMSlotsHack_slotsPassedToWrapper) {
            // slots were added to the wrapper at some point, so update children at every interval
            _this3.updateSlotChildren();
          }
        });

        wrapper.ShadyDOMSlotsHack_deregisterSetIntervalListener = function () {
          return window.ShadyDOMSlotsHack_setInterval.remove(id);
        };
      } // Use MutationObserver to react to future attribute & slot content change


      var observer = new MutationObserver(function (mutations) {
        var hasChildrenChange = false;

        for (var i = 0; i < mutations.length; i++) {
          var m = mutations[i];

          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }

        if (hasChildrenChange) {
          _this3.updateSlotChildren();
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
      return _this3;
    }

    _createClass(CustomElement, [{
      key: "updateSlotChildren",
      value: function updateSlotChildren() {
        this._wrapper.slotChildren = Object.freeze(toVNodes(this._wrapper.$createElement, this.childNodes));

        if (this._wrapper.slotChildren.length === 0) {
          // no slots present, revert the shadyDOM hack (if present)
          this._wrapper.ShadyDOMSlotsHack_slotsPassedToWrapper = false;
        }
      }
    }, {
      key: "connectedCallback",
      value: function () {
        var _connectedCallback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this5 = this;

          var wrapper, syncInitialAttributes;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  wrapper = this._wrapper; // TODO: Vue's router will be instantiated immediately, before the router
                  // in `mover-app` has finished transitioning URLs, making the Vue router
                  // resolve the wrong URL. Wait one micro-task to allow `mover-app`'s
                  // router to finish transitioning.

                  _context.next = 3;
                  return Promise.resolve();

                case 3:
                  if (!wrapper._isMounted) {
                    // initialize attributes
                    syncInitialAttributes = function syncInitialAttributes() {
                      wrapper.props = getInitialProps(camelizedPropsList);
                      hyphenatedPropsList.forEach(function (key) {
                        syncAttribute(_this5, key);
                      });
                    };

                    if (isInitialized) {
                      syncInitialAttributes();
                    } else {
                      // async & unresolved
                      Component().then(function (resolved) {
                        if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
                          resolved = resolved.default;
                        }

                        initialize(resolved);
                        syncInitialAttributes();
                      });
                    } // initialize children


                    this.updateSlotChildren();
                    wrapper.$mount();
                    this.shadowRoot.appendChild(wrapper.$el);
                  } else {
                    callHooks(this.vueComponent, 'activated');
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function connectedCallback() {
          return _connectedCallback.apply(this, arguments);
        }

        return connectedCallback;
      }()
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._wrapper && this._wrapper.ShadyDOMSlotsHack_deregisterSetIntervalListener) {
          this._wrapper.ShadyDOMSlotsHack_deregisterSetIntervalListener();
        }

        callHooks(this.vueComponent, 'deactivated');
      }
    }, {
      key: "vueComponent",
      get: function get() {
        return this._wrapper.$refs.inner;
      }
    }]);

    return CustomElement;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement;
}

export default wrap;
