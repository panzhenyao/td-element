module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRE_MARK; });
// 组件名前缀
const PRE_MARK = "td";

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/datePick/src/datePick.vue?vue&type=template&id=30fbfbca&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "td-date-pick",
      class: { "td-date-pick--input": _vm.hasInputElement },
    },
    [
      _vm._t(
        "default",
        function () {
          return [
            _c(
              "div",
              {
                class: [
                  "td-date-pick--inner-input",
                  { "is-active": _vm.opened },
                  {
                    "hsa-value":
                      _vm.editable && _vm.hasInputElement && _vm.inputValue,
                  },
                ],
              },
              [
                _vm.hasInputElement
                  ? _c(
                      "input",
                      _vm._b(
                        {
                          attrs: { type: "text", readonly: _vm.isReadOnly },
                          domProps: { value: _vm.inputValue },
                          on: {
                            input: function ($event) {
                              _vm.editable &&
                                _vm.processUserInput($event.target.value)
                            },
                            focus: function ($event) {
                              _vm.editable && _vm.open()
                            },
                            click: function ($event) {
                              _vm.editable && _vm.open()
                            },
                          },
                        },
                        "input",
                        _vm.inputAttributes,
                        false
                      )
                    )
                  : _vm._e(),
                _c("div", { class: ["td-input___suffix"] }, [
                  _vm.editable && _vm.hasInputElement && _vm.inputValue
                    ? _c("div", {
                        staticClass: "td-date-pick--icon td-icon-circle-close",
                        on: { click: _vm.clear },
                      })
                    : _vm._e(),
                  _c("div", { staticClass: "td-date-pick--icon td-icon-date" }),
                ]),
              ]
            ),
          ]
        },
        {
          open: _vm.open,
          close: _vm.close,
          toggle: _vm.toggle,
          inputValue: _vm.inputValue,
          processUserInput: _vm.processUserInput,
          valueToInputFormat: _vm.valueToInputFormat,
        }
      ),
      _c("transition", { attrs: { name: "td-date-pick--toggle-calendar" } }, [
        _vm.opened
          ? _c(
              "div",
              {
                ref: "outerWrap",
                staticClass: "td-date-pick--outer-wrap",
                class: [
                  _vm.positionClass,
                  { "td-date-pick-floating": _vm.hasInputElement },
                ],
                on: { click: _vm.closeViaOverlay },
              },
              [
                _c("div", { staticClass: "td-date-pick--inner-wrap" }, [
                  _c("header", { staticClass: "td-date-pick--header" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "td-date-pick--arrow td-date-pick--arrow_year td-date-pick--arrowPrev",
                        attrs: { title: _vm.prevYearCaption, type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.increment(-1, 0)
                          },
                        },
                      },
                      [_c("span", { staticClass: "td-icon-d-arrow-left" })]
                    ),
                    _c(
                      "button",
                      {
                        staticClass:
                          "td-date-pick--arrow td-date-pick--arrow_month td-date-pick--arrowPrev",
                        attrs: { title: _vm.prevMonthCaption, type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.increment(0, -1)
                          },
                        },
                      },
                      [_c("span", { staticClass: "td-icon-arrow-left" })]
                    ),
                    _c(
                      "button",
                      {
                        staticClass:
                          "td-date-pick--arrow td-date-pick--arrow_month td-date-pick--arrowNext",
                        attrs: { title: _vm.nextMonthCaption, type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.increment(0, 1)
                          },
                        },
                      },
                      [_c("span", { staticClass: "td-icon-arrow-right" })]
                    ),
                    _c(
                      "button",
                      {
                        staticClass:
                          "td-date-pick--arrow td-date-pick--arrow_year td-date-pick--arrowNext",
                        attrs: { title: _vm.nextYearCaption, type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.increment(1, 0)
                          },
                        },
                      },
                      [_c("span", { staticClass: "td-icon-d-arrow-right" })]
                    ),
                    _c(
                      "div",
                      { staticClass: "td-date-pick--period-controls" },
                      [
                        _c(
                          "div",
                          { staticClass: "td-date-pick--period-control" },
                          [
                            _c(
                              "button",
                              {
                                key: _vm.currentPeriod.year,
                                class: _vm.directionClass,
                                attrs: { type: "button" },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.currentPeriod.year)
                                ),
                                _vm.labelYear
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "td-date-pick--period-year",
                                      },
                                      [_vm._v(_vm._s(_vm.labelYear))]
                                    )
                                  : _vm._e(),
                              ]
                            ),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.currentPeriod.year,
                                    expression: "currentPeriod.year",
                                  },
                                ],
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.currentPeriod,
                                      "year",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                },
                              },
                              _vm._l(_vm.yearRange, function (year) {
                                return _c(
                                  "option",
                                  { key: year, domProps: { value: year } },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(year) +
                                        "\n                "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ]
                        ),
                        _c(
                          "div",
                          { staticClass: "td-date-pick--period-control" },
                          [
                            _c(
                              "button",
                              {
                                key: _vm.currentPeriod.month,
                                class: _vm.directionClass,
                                attrs: { type: "button" },
                                on: { click: _vm.toggleMonth },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.months[_vm.currentPeriod.month])
                                ),
                                _vm.labelMonth
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "td-date-pick--period-month",
                                      },
                                      [_vm._v(_vm._s(_vm.labelMonth))]
                                    )
                                  : _vm._e(),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm.activeMonth
                    ? _c("table", { staticClass: "td-date-pick--table" }, [
                        _c("thead", [
                          _c("tr", [_c("th", { attrs: { colspan: "4" } })]),
                        ]),
                        _c(
                          "tbody",
                          {
                            key: _vm.currentPeriod.month,
                            class: _vm.directionClass,
                          },
                          _vm._l(
                            _vm.currentPeriodMonthDates,
                            function (quarter, quarterIndex) {
                              return _c(
                                "tr",
                                {
                                  key: quarterIndex,
                                  staticClass: "td-date-pick--row",
                                },
                                _vm._l(quarter, function (item) {
                                  return _c(
                                    "td",
                                    {
                                      key: item.dateKey,
                                      staticClass: "td-date-pick--cell",
                                      class: {
                                        selectable:
                                          _vm.editable && !item.disabled,
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        today: item.today,
                                        outOfRange: false,
                                      },
                                      attrs: { "data-id": item.dateKey },
                                    },
                                    [
                                      _vm._t(
                                        "cellMonthContent",
                                        function () {
                                          return [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "td-date-pick--cellMonthContent",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.formatLocalMonth(
                                                      item.date.getMonth() + 1
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        },
                                        { item: item }
                                      ),
                                    ],
                                    2
                                  )
                                }),
                                0
                              )
                            }
                          ),
                          0
                        ),
                      ])
                    : _vm._e(),
                  !_vm.activeMonth
                    ? _c("table", { staticClass: "td-date-pick--table" }, [
                        _c("thead", [
                          _c(
                            "tr",
                            _vm._l(
                              _vm.weekdaysSorted,
                              function (weekday, weekdayIndex) {
                                return _c(
                                  "th",
                                  {
                                    key: weekdayIndex,
                                    staticClass: "td-date-pick--headCell",
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "td-date-pick--headCellContent",
                                      },
                                      [_vm._v(_vm._s(weekday))]
                                    ),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                        ]),
                        _c(
                          "tbody",
                          {
                            key:
                              _vm.currentPeriod.year +
                              "-" +
                              _vm.currentPeriod.month,
                            class: _vm.directionClass,
                          },
                          _vm._l(
                            _vm.currentPeriodDates,
                            function (week, weekIndex) {
                              return _c(
                                "tr",
                                {
                                  key: weekIndex,
                                  staticClass: "td-date-pick--row",
                                },
                                _vm._l(week, function (item) {
                                  return _c(
                                    "td",
                                    {
                                      key: item.dateKey,
                                      staticClass: "td-date-pick--cell",
                                      class: {
                                        selectable:
                                          _vm.editable && !item.disabled,
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        today: item.today,
                                        outOfRange: item.outOfRange,
                                      },
                                      attrs: { "data-id": item.dateKey },
                                      on: {
                                        click: function ($event) {
                                          _vm.editable &&
                                            _vm.selectDateItem(item)
                                        },
                                      },
                                    },
                                    [
                                      _vm._t(
                                        "cellContent",
                                        function () {
                                          return [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "td-date-pick--cellContent",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.date.getDate())
                                                ),
                                              ]
                                            ),
                                          ]
                                        },
                                        { item: item }
                                      ),
                                    ],
                                    2
                                  )
                                }),
                                0
                              )
                            }
                          ),
                          0
                        ),
                      ])
                    : _vm._e(),
                  _vm.pickTime && _vm.currentTime
                    ? _c("div", { staticClass: "td-date-pick--timeControls" }, [
                        _c(
                          "span",
                          { staticClass: "td-date-pick--timeCaption" },
                          [_vm._v(_vm._s(_vm.setTimeCaption))]
                        ),
                        _c("div", { staticClass: "td-date-pick--timeUnit" }, [
                          _c("pre", [
                            _c("span", [
                              _vm._v(_vm._s(_vm.currentTime.hoursFormatted)),
                            ]),
                            _c("br"),
                          ]),
                          _c("input", {
                            staticClass: "td-date-pick--hoursInput",
                            attrs: {
                              type: "number",
                              pattern: "\\d*",
                              disabled: !_vm.editable,
                            },
                            domProps: { value: _vm.currentTime.hoursFormatted },
                            on: {
                              input: function ($event) {
                                $event.preventDefault()
                                return _vm.inputHours.apply(null, arguments)
                              },
                              focusin: _vm.onTimeInputFocus,
                            },
                          }),
                        ]),
                        _vm.pickMinutes
                          ? _c(
                              "span",
                              { staticClass: "td-date-pick--timeSeparator" },
                              [_vm._v(":")]
                            )
                          : _vm._e(),
                        _vm.pickMinutes
                          ? _c(
                              "div",
                              { staticClass: "td-date-pick--timeUnit" },
                              [
                                _c("pre", [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.currentTime.minutesFormatted)
                                    ),
                                  ]),
                                  _c("br"),
                                ]),
                                _vm.pickMinutes
                                  ? _c("input", {
                                      staticClass: "td-date-pick--minutesInput",
                                      attrs: {
                                        type: "number",
                                        pattern: "\\d*",
                                        disabled: !_vm.editable,
                                      },
                                      domProps: {
                                        value: _vm.currentTime.minutesFormatted,
                                      },
                                      on: {
                                        input: function ($event) {
                                          return _vm.inputTime(
                                            "setMinutes",
                                            $event
                                          )
                                        },
                                        focusin: _vm.onTimeInputFocus,
                                      },
                                    })
                                  : _vm._e(),
                              ]
                            )
                          : _vm._e(),
                        _vm.pickSeconds
                          ? _c(
                              "span",
                              { staticClass: "td-date-pick--timeSeparator" },
                              [_vm._v(":")]
                            )
                          : _vm._e(),
                        _vm.pickSeconds
                          ? _c(
                              "div",
                              { staticClass: "td-date-pick--timeUnit" },
                              [
                                _c("pre", [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.currentTime.secondsFormatted)
                                    ),
                                  ]),
                                  _c("br"),
                                ]),
                                _vm.pickSeconds
                                  ? _c("input", {
                                      staticClass: "td-date-pick--secondsInput",
                                      attrs: {
                                        type: "number",
                                        pattern: "\\d*",
                                        disabled: !_vm.editable,
                                      },
                                      domProps: {
                                        value: _vm.currentTime.secondsFormatted,
                                      },
                                      on: {
                                        input: function ($event) {
                                          return _vm.inputTime(
                                            "setSeconds",
                                            $event
                                          )
                                        },
                                        focusin: _vm.onTimeInputFocus,
                                      },
                                    })
                                  : _vm._e(),
                              ]
                            )
                          : _vm._e(),
                        _vm.use12HourClock
                          ? _c(
                              "button",
                              {
                                staticClass: "td-date-pick--12HourToggleBtn",
                                attrs: {
                                  type: "button",
                                  disabled: !_vm.editable,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.set12HourClock(
                                      _vm.currentTime.isPM ? "AM" : "PM"
                                    )
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.currentTime.isPM ? "PM" : "AM") +
                                    "\n          "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ]),
              ]
            )
          : _vm._e(),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/datePick/src/datePick.vue?vue&type=template&id=30fbfbca&

// EXTERNAL MODULE: ./packages/settings.js
var settings = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/datePick/src/datePick.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const formatRE = /,|\.|-| |:|\/|\\/;
const dayRE = /D+/;
const monthRE = /M+/;
const yearRE = /Y+/;
const hoursRE = /h+/i;
const minutesRE = /m+/;
const secondsRE = /s+/;
const AMPMClockRE = /A/;
const localCn = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
  10: '十',
  11: '十一',
  12: '十二'
};


/* harmony default export */ var datePickvue_type_script_lang_js_ = ({
  name: `${settings["a" /* PRE_MARK */]}DatePick`,
  props: {
    value: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    displayFormat: {
      type: String
    },
    editable: {
      type: Boolean,
      default: true
    },
    hasInputElement: {
      type: Boolean,
      default: true
    },
    inputAttributes: {
      type: Object
    },
    selectableYearRange: {
      type: [Number, Object, Function],
      default: 40
    },
    startPeriod: {
      type: Object
    },
    parseDate: {
      type: Function
    },
    formatDate: {
      type: Function
    },
    pickTime: {
      type: Boolean,
      default: false
    },
    pickMinutes: {
      type: Boolean,
      default: true
    },
    pickSeconds: {
      type: Boolean,
      default: false
    },
    use12HourClock: {
      type: Boolean,
      default: false
    },
    isDateDisabled: {
      type: Function,
      default: () => false
    },
    nextYearCaption: {
      type: String,
      default: 'Next year'
    },
    prevYearCaption: {
      type: String,
      default: 'Previous year'
    },
    nextMonthCaption: {
      type: String,
      default: 'Next month'
    },
    prevMonthCaption: {
      type: String,
      default: 'Previous month'
    },
    setTimeCaption: {
      type: String,
      default: 'Set time:'
    },
    mobileBreakpointWidth: {
      type: Number,
      default: 500
    },
    weekdays: {
      type: Array,
      default: () => ['一', '二', '三', '四', '五', '六', '日']
    },
    labelMonth: {
      type: String,
      default: '月'
    },
    labelYear: {
      type: String,
      default: '年'
    },
    months: {
      type: Array,
      default: () => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    startWeekOnSunday: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      inputValue: this.valueToInputFormat(this.value),
      direction: undefined,
      positionClass: undefined,
      opened: !this.hasInputElement,
      activeMonth: false,
      currentPeriod: this.startPeriod || this.getPeriodFromValue(this.value, this.format)
    };
  },

  computed: {
    valueDate() {
      const value = this.value;
      const format = this.format;

      return value ? this.parseDateString(value, format) : undefined;
    },

    isReadOnly() {
      return !this.editable || this.inputAttributes && this.inputAttributes.readonly;
    },

    isValidValue() {
      const valueDate = this.valueDate;

      return this.value ? Boolean(valueDate) : true;
    },

    currentPeriodMonthDates() {
      // month: date.getMonth(), year: date.getFullYear(), date: date.getDate()
      const { year, month, date: dd } = this.currentPeriod;
      const months = [];
      const today = new Date();
      const date = new Date(year, 0, dd);
      const appendMonthCount = 11;

      for (let i = 0; i <= appendMonthCount; i++) {
        const monthDate = new Date(date);
        monthDate.setMonth(i);
        months.push({ date: monthDate });
      }

      // define day states
      months.forEach(month => {
        month.disabled = this.isDateDisabled(month.date);
        month.today = areSameDates(month.date, today);
        month.dateKey = [month.date.getFullYear(), month.date.getMonth() + 1, month.date.getDate()].join('-');
        month.selected = this.valueDate ? areSameDates(month.date, this.valueDate) : false;
      });

      return chunkArray(months, 4);
    },

    currentPeriodDates() {
      const { year, month } = this.currentPeriod;
      const days = [];
      const date = new Date(year, month, 1);
      const today = new Date();
      const firstDayIndex = date.getDay();
      const prependDaysCount = this.startWeekOnSunday ? firstDayIndex : firstDayIndex === 0 ? 6 : firstDayIndex - 1;

      if (prependDaysCount) {
        for (let i = prependDaysCount; i > 0; i--) {
          const prevDate = new Date(date);
          prevDate.setDate(-(i - 1));
          console.log(prevDate, 'prevDate');
          days.push({ outOfRange: true, date: prevDate });
        }
      }

      while (date.getMonth() === month) {
        days.push({ date: new Date(date) });
        date.setDate(date.getDate() + 1);
      }

      // append next month dates
      const daysLeft = days.length % 7;
      if (daysLeft > 0) {
        const total = 7 - daysLeft;
        for (let i = 1; i <= total; i++) {
          const nextDate = new Date(date);
          nextDate.setDate(i);
          days.push({ outOfRange: true, date: nextDate });
        }
      }

      // keep total 42 count
      if (days.length < 42) {
        for (let i = 1; i <= 7; i++) {
          const nextDate = new Date(date);
          nextDate.setDate(i);
          days.push({ outOfRange: true, date: nextDate });
        }
      }

      // define day states
      days.forEach(day => {
        day.disabled = this.isDateDisabled(day.date);
        day.today = areSameDates(day.date, today);
        day.dateKey = [day.date.getFullYear(), day.date.getMonth() + 1, day.date.getDate()].join('-');
        day.selected = this.valueDate ? areSameDates(day.date, this.valueDate) : false;
      });
      console.log(days, '?');
      return chunkArray(days, 7);
    },

    yearRange() {
      const currentYear = this.currentPeriod.year;
      const userRange = this.selectableYearRange;
      const userRangeType = typeof userRange;

      let yearsRange = [];

      if (userRangeType === 'number') {
        yearsRange = range(currentYear - userRange, currentYear + userRange);
      } else if (userRangeType === 'object') {
        yearsRange = range(userRange.from, userRange.to);
      } else if (userRangeType === 'function') {
        yearsRange = userRange(this);
      }

      if (yearsRange.indexOf(currentYear) < 0) {
        yearsRange.push(currentYear);
        yearsRange = yearsRange.sort();
      }

      return yearsRange;
    },

    currentTime() {
      const currentDate = this.valueDate;

      if (!currentDate) {
        return undefined;
      }

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      return {
        hours,
        minutes,
        seconds,
        isPM: isPM(hours),
        hoursFormatted: (this.use12HourClock ? to12HourClock(hours) : hours).toString(),
        minutesFormatted: paddNum(minutes, 2),
        secondsFormatted: paddNum(seconds, 2)
      };
    },

    directionClass() {
      return this.direction ? `td-date-pick--${this.direction}Direction` : undefined;
    },

    weekdaysSorted() {
      if (this.startWeekOnSunday) {
        const weekdays = this.weekdays.slice();
        weekdays.unshift(weekdays.pop());
        return weekdays;
      } else {
        return this.weekdays;
      }
    }
  },

  watch: {
    value(value) {
      if (this.isValidValue) {
        this.inputValue = this.valueToInputFormat(value);
        this.currentPeriod = this.getPeriodFromValue(value, this.format);
      }
    },

    currentPeriod(currentPeriod, oldPeriod) {
      const currentDate = new Date(currentPeriod.year, currentPeriod.month).getTime();
      const oldDate = new Date(oldPeriod.year, oldPeriod.month).getTime();

      this.direction = currentDate !== oldDate ? currentDate > oldDate ? 'next' : 'prev' : undefined;

      if (currentDate !== oldDate) {
        this.$emit('periodChange', {
          year: currentPeriod.year,
          month: currentPeriod.month
        });
      }
    }
  },

  beforeDestroy() {
    this.removeCloseEvents();
    this.teardownPosition();
  },

  methods: {
    valueToInputFormat(value) {
      return !this.displayFormat ? value : this.formatDateToString(this.parseDateString(value, this.format), this.displayFormat) || value;
    },

    getPeriodFromValue(dateString, format) {
      const date = this.parseDateString(dateString, format) || new Date();

      return { month: date.getMonth(), year: date.getFullYear(), date: date.getDate() };
    },

    parseDateString(dateString, dateFormat) {
      return !dateString ? undefined : this.parseDate ? this.parseDate(dateString, dateFormat) : this.parseSimpleDateString(dateString, dateFormat);
    },

    formatDateToString(date, dateFormat) {
      return !date ? '' : this.formatDate ? this.formatDate(date, dateFormat) : this.formatSimpleDateToString(date, dateFormat);
    },

    parseSimpleDateString(dateString, dateFormat) {
      let day, month, year, hours, minutes, seconds;

      const dateParts = dateString.split(formatRE);
      const formatParts = dateFormat.split(formatRE);
      const partsSize = formatParts.length;

      for (let i = 0; i < partsSize; i++) {
        if (formatParts[i].match(dayRE)) {
          day = parseInt(dateParts[i], 10);
        } else if (formatParts[i].match(monthRE)) {
          month = parseInt(dateParts[i], 10);
        } else if (formatParts[i].match(yearRE)) {
          year = parseInt(dateParts[i], 10);
        } else if (formatParts[i].match(hoursRE)) {
          hours = parseInt(dateParts[i], 10);
        } else if (formatParts[i].match(minutesRE)) {
          minutes = parseInt(dateParts[i], 10);
        } else if (formatParts[i].match(secondsRE)) {
          seconds = parseInt(dateParts[i], 10);
        }
      }

      const resolvedDate = new Date([paddNum(year, 4), paddNum(month, 2), paddNum(day, 2)].join('-'));

      if (isNaN(resolvedDate)) {
        return undefined;
      } else {
        const date = new Date(year, month - 1, day);[[year, 'setFullYear'], [hours, 'setHours'], [minutes, 'setMinutes'], [seconds, 'setSeconds']].forEach(([value, method]) => {
          typeof value !== 'undefined' && date[method](value);
        });

        return date;
      }
    },

    formatSimpleDateToString(date, dateFormat) {
      return dateFormat.replace(yearRE, match => Number(date.getFullYear().toString().slice(-match.length))).replace(monthRE, match => paddNum(date.getMonth() + 1, match.length)).replace(dayRE, match => paddNum(date.getDate(), match.length)).replace(hoursRE, match => paddNum(AMPMClockRE.test(dateFormat) ? to12HourClock(date.getHours()) : date.getHours(), match.length)).replace(minutesRE, match => paddNum(date.getMinutes(), match.length)).replace(secondsRE, match => paddNum(date.getSeconds(), match.length)).replace(AMPMClockRE, match => isPM(date.getHours()) ? 'PM' : 'AM');
    },

    increment(incrementYear = 0, incrementMonth = 0) {
      const refDate = new Date(this.currentPeriod.year, this.currentPeriod.month);
      const incrementDate = new Date(refDate.getFullYear() + incrementYear, refDate.getMonth() + incrementMonth);

      this.currentPeriod = {
        month: incrementDate.getMonth(),
        year: incrementDate.getFullYear()
      };
    },

    formatLocalMonth(month) {
      return localCn[month] + this.labelMonth;
    },

    processUserInput(userText) {
      const userDate = this.parseDateString(userText, this.displayFormat || this.format);

      this.inputValue = userText;

      this.$emit('input', userDate ? this.formatDateToString(userDate, this.format) : userText);
    },

    toggle() {
      return this.opened ? this.close() : this.open();
    },

    open() {
      if (!this.opened) {
        this.opened = true;
        this.currentPeriod = this.startPeriod || this.getPeriodFromValue(this.value, this.format);
        this.addCloseEvents();
        this.setupPosition();
      }
      this.direction = undefined;
    },
    toggleMonth() {
      this.activeMonth = !this.activeMonth;
    },

    close() {
      if (this.opened) {
        this.activeMonth = false;
        this.opened = false;
        this.direction = undefined;
        this.removeCloseEvents();
        this.teardownPosition();
      }
    },

    closeViaOverlay(e) {
      if (this.hasInputElement && e.target === this.$refs.outerWrap) {
        this.close();
      }
    },

    addCloseEvents() {
      if (!this.closeEventListener) {
        this.closeEventListener = e => this.inspectCloseEvent(e);['click', 'keyup', 'focusin'].forEach(eventName => document.addEventListener(eventName, this.closeEventListener));
      }
    },

    inspectCloseEvent(event) {
      if (event.keyCode) {
        event.keyCode === 27 && this.close();
      } else if (!(event.target === this.$el) && !this.$el.contains(event.target)) {
        this.close();
      }
    },

    removeCloseEvents() {
      if (this.closeEventListener) {
        ;['click', 'keyup', 'focusin'].forEach(eventName => document.removeEventListener(eventName, this.closeEventListener));

        delete this.closeEventListener;
      }
    },

    setupPosition() {
      if (!this.positionEventListener) {
        this.positionEventListener = () => this.positionFloater();
        window.addEventListener('resize', this.positionEventListener);
      }

      this.positionFloater();
    },

    positionFloater() {
      const inputRect = this.$el.getBoundingClientRect();

      let verticalClass = 'td-date-pick--positionTop';
      let horizontalClass = 'td-date-pick--positionLeft';

      const calculate = () => {
        const rect = this.$refs.outerWrap.getBoundingClientRect();
        const floaterHeight = rect.height;
        const floaterWidth = rect.width;

        if (window.innerWidth > this.mobileBreakpointWidth) {
          // vertical
          if (inputRect.top + inputRect.height + floaterHeight > window.innerHeight && inputRect.top - floaterHeight > 0) {
            verticalClass = 'td-date-pick--positionBottom';
          }

          // horizontal
          if (inputRect.left + floaterWidth > window.innerWidth) {
            horizontalClass = 'td-date-pick--positionRight';
          }

          this.positionClass = ['td-date-pick--positionReady', verticalClass, horizontalClass].join(' ');
        } else {
          this.positionClass = 'td-date-pick--positionFixed';
        }
      };

      this.$refs.outerWrap ? calculate() : this.$nextTick(calculate);
    },

    teardownPosition() {
      if (this.positionEventListener) {
        this.positionClass = undefined;
        window.removeEventListener('resize', this.positionEventListener);
        delete this.positionEventListener;
      }
    },

    clear() {
      this.$emit('input', '');
    },

    selectDateItem(item) {
      if (!item.disabled) {
        const newDate = new Date(item.date);

        if (this.currentTime) {
          newDate.setHours(this.currentTime.hours);
          newDate.setMinutes(this.currentTime.minutes);
          newDate.setSeconds(this.currentTime.seconds);
        }

        this.$emit('input', this.formatDateToString(newDate, this.format));

        if (this.hasInputElement && !this.pickTime) {
          this.close();
        }
      }
    },

    set12HourClock(value) {
      const currentDate = new Date(this.valueDate);
      const currentHours = currentDate.getHours();

      currentDate.setHours(value === 'PM' ? currentHours + 12 : currentHours - 12);

      this.$emit('input', this.formatDateToString(currentDate, this.format));
    },

    inputHours(event) {
      const currentDate = new Date(this.valueDate);
      const currentHours = currentDate.getHours();
      const targetValue = parseInt(event.target.value, 10) || 0;
      const minHours = this.use12HourClock ? 1 : 0;
      const maxHours = this.use12HourClock ? 12 : 23;
      const numValue = boundNumber(targetValue, minHours, maxHours);

      currentDate.setHours(this.use12HourClock ? to24HourClock(numValue, isPM(currentHours)) : numValue);
      event.target.value = paddNum(numValue, 1);
      this.$emit('input', this.formatDateToString(currentDate, this.format));
    },

    inputTime(method, event) {
      const currentDate = new Date(this.valueDate);
      // eslint-disable-next-line
      const targetValue = parseInt(event.target.value) || 0;
      const numValue = boundNumber(targetValue, 0, 59);

      event.target.value = paddNum(numValue, 2);
      currentDate[method](numValue);

      this.$emit('input', this.formatDateToString(currentDate, this.format));
    },

    onTimeInputFocus(event) {
      event.target.select && event.target.select();
    }
  }
});

function paddNum(num, padsize) {
  return typeof num !== 'undefined' ? num.toString().length > padsize ? num : new Array(padsize - num.toString().length + 1).join('0') + num : undefined;
}

function chunkArray(inputArray, chunkSize) {
  const results = [];

  while (inputArray.length) {
    results.push(inputArray.splice(0, chunkSize));
  }

  return results;
}

function areSameDates(date1, date2) {
  return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

function range(start, end) {
  const results = [];

  for (let i = start; i <= end; i++) {
    results.push(i);
  }
  return results;
}

function to12HourClock(hours) {
  const remainder = hours % 12;
  return remainder === 0 ? 12 : remainder;
}

function to24HourClock(hours, PM) {
  return PM ? hours === 12 ? hours : hours + 12 : hours === 12 ? 0 : hours;
}

function isPM(hours) {
  return hours >= 12;
}

function boundNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
// CONCATENATED MODULE: ./packages/datePick/src/datePick.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_datePickvue_type_script_lang_js_ = (datePickvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/datePick/src/datePick.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_datePickvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datePick = (component.exports);
// CONCATENATED MODULE: ./packages/datePick/index.js

// 为组件提供 install 安装方法，供按需引入
datePick.install = function (Vue) {
  Vue.component(datePick.name, datePick);
};

// 默认导出组件
/* harmony default export */ var packages_datePick = __webpack_exports__["default"] = (datePick);

/***/ })

/******/ });