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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRE_MARK; });
// 组件名前缀
const PRE_MARK = "td";

/***/ }),
/* 1 */
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchorLink/src/anchorLink.vue?vue&type=template&id=fced7072&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        td_anchor_link: !_vm.$slots.default,
        "td_anchor_link-left": _vm.$parent.position == "left",
      },
      attrs: {
        id: "link-" + _vm.hrefTotal + "-" + _vm.hrefHeight,
        title: _vm.title,
      },
      on: { click: _vm.jump },
    },
    [
      !_vm.$slots.default ? _c("span", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
      _vm._t("default"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/anchorLink/src/anchorLink.vue?vue&type=template&id=fced7072&

// EXTERNAL MODULE: ./packages/settings.js
var settings = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchorLink/src/anchorLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var anchorLinkvue_type_script_lang_js_ = ({
  name: `${settings["a" /* PRE_MARK */]}AnchorLink`,
  props: {
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Title'
    }
  },

  data() {
    return {
      hrefTotal: 0,
      hrefHeight: 0
    };
  },

  mounted() {
    this.hrefTotal = document.getElementById(this.href).offsetTop - 10;
    this.hrefHeight = document.getElementById(this.href).clientHeight + this.hrefTotal;
  },

  methods: {
    jump() {
      let total = document.getElementById(this.href).offsetTop - 10; // 获取跳转锚点坐标

      let distance;
      let scrollHeight;
      let targetHeight;
      let hrefHeight;

      if (this.$parent.target === 'window') {
        distance = document.documentElement.scrollTop; // 获取到顶部的距离

        scrollHeight = document.documentElement.scrollHeight; // 获取滚动条高度

        targetHeight = document.documentElement.clientHeight; // 获取滚动容器一屏高度

        hrefHeight = document.documentElement.clientHeight; // 获取锚点容器高度
      } else {
        distance = document.getElementById(this.$parent.target).scrollTop; // 获取到顶部的距离

        scrollHeight = document.getElementById(this.$parent.target).scrollHeight; // 获取滚动条高度

        targetHeight = document.getElementById(this.$parent.target).clientHeight; // 获取滚动容器一屏高度

        hrefHeight = document.getElementById(this.$parent.target).clientHeight; // 获取锚点容器高度
      }

      let ispeed;

      let _this = this;

      if (total > distance) {
        if (total + hrefHeight > scrollHeight) {
          total = scrollHeight - targetHeight;
        }

        smoothDown();
      } else {
        smoothUp();
      }

      function smoothDown() {
        let timer = setInterval(() => {
          if (distance < total) {
            if (ispeed <= 5) {
              ispeed = 5;
            } else {
              ispeed = Math.floor((total - distance) / 5);
            }

            if (_this.$parent.target === 'window') {
              distance += ispeed;
              document.documentElement.scrollTop = document.body.scrollTop = distance;
            } else {
              distance += ispeed;
              document.getElementById(_this.$parent.target).scrollTop = distance;
            }
          } else {
            if (_this.$parent.target === 'window') {
              document.documentElement.scrollTop = total;
            } else {
              document.getElementById(_this.$parent.target).scrollTop = total;
            }

            clearInterval(timer);
          }
        }, 16);
      }

      function smoothUp() {
        let timer = setInterval(() => {
          if (distance > total) {
            if (ispeed <= 5) {
              ispeed = 5;
            } else {
              ispeed = Math.floor((distance - total) / 5);
            }

            if (_this.$parent.target === 'window') {
              distance -= ispeed;
              document.documentElement.scrollTop = document.body.scrollTop = distance;
            } else {
              distance -= ispeed;
              document.getElementById(_this.$parent.target).scrollTop = distance;
            }
          } else {
            if (_this.$parent.target === 'window') {
              document.documentElement.scrollTop = total;
            } else {
              document.getElementById(_this.$parent.target).scrollTop = total;
            }

            clearInterval(timer);
          }
        }, 16);
      }
    }

  }
});
// CONCATENATED MODULE: ./packages/anchorLink/src/anchorLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_anchorLinkvue_type_script_lang_js_ = (anchorLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/anchorLink/src/anchorLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_anchorLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var anchorLink = (component.exports);
// CONCATENATED MODULE: ./packages/anchorLink/index.js
// 导入组件，组件必须声明 name


anchorLink.install = function (Vue) {
  Vue.component(anchorLink.name, anchorLink);
};

/* harmony default export */ var packages_anchorLink = __webpack_exports__["default"] = (anchorLink);

/***/ })
/******/ ]);