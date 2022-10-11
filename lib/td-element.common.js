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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.push.js");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ef269a7a&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "td-button",
      class: [
        _vm.type ? "td-button--" + _vm.type : "",
        _vm.buttonSize ? "td-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.buttonDisabled,
        },
        {
          "is-visited": _vm.isVisited,
        },
        {
          "is-round": _vm.round,
          "is-circle": _vm.circle,
        },
      ],
      attrs: {
        disabled: _vm.buttonDisabled || _vm.loading,
        autofocus: _vm.autofocus,
        type: _vm.nativeType,
      },
      on: { click: _vm.handleClick },
    },
    [
      _vm.loading ? _c("i", { staticClass: "el-icon-loading" }) : _vm._e(),
      _vm.icon && !_vm.loading ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ef269a7a&

// CONCATENATED MODULE: ./packages/settings.js
// 组件名前缀
const PRE_MARK = "td";
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
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

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}Button`,
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'mini'
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    visitedState: Boolean
  },

  data() {
    return {
      isVisited: false
    };
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },

    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }

  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
      let target = evt.target;

      if (target.nodeName === 'SPAN') {
        target = evt.target.parentNode;
      }

      this.useTypeEffect();
      if (this.disabledFocusEffect()) return;
      target.blur();
    },

    disabledFocusEffect() {
      if (this.visitedState) {
        return true;
      } else {
        return ['text'].includes(this.type);
      }
    },

    // 根据类型使用效果button交互效果
    useTypeEffect() {
      if (this.visitedState && this.type === 'text') {
        this.isVisited = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js
 // 为组件提供 install 安装方法，供按需引入

src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button);
}; // 默认导出组件


/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchor/src/anchor.vue?vue&type=template&id=2214fbb3&
var anchorvue_type_template_id_2214fbb3_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        {
          "td-anchor": !_vm.customize,
          "td-anchor-left": _vm.position == "left",
        },
        [_vm.anchorClass],
      ],
    },
    [
      _c("div", { staticClass: "td-anchor-ink" }, [
        _c("span", {
          staticClass: "td-anchor-ink-ball",
          class: { visible: _vm.linkBallShow },
          style: { top: _vm.linkBallTop + "px" },
        }),
      ]),
      _c("div", { staticClass: "td-anchor-box" }, [_vm._t("default")], 2),
    ]
  )
}
var anchorvue_type_template_id_2214fbb3_staticRenderFns = []
anchorvue_type_template_id_2214fbb3_render._withStripped = true


// CONCATENATED MODULE: ./packages/anchor/src/anchor.vue?vue&type=template&id=2214fbb3&

// EXTERNAL MODULE: external "core-js/modules/es.array.push.js"
var es_array_push_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchor/src/anchor.vue?vue&type=script&lang=js&

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

/* harmony default export */ var anchorvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}Anchor`,
  props: {
    target: {
      type: String,
      default: 'window'
    },
    anchorClass: {
      type: String,
      default: ''
    },
    customize: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'right'
    }
  },

  data() {
    return {
      distance: 0,
      scollHeight: 0,
      clientHeight: 0,
      linkTotal: [],
      linkBallShow: false,
      linkBallTop: -18,
      index: 0
    };
  },

  mounted() {
    const _this = this;

    setTimeout(function () {
      for (let i = 0; i < _this.$slots.default.length; i++) {
        const linkId = _this.$slots.default[i].elm.id.split('-');

        _this.linkTotal.push([parseFloat(linkId[1]), parseFloat(linkId[2])]);
      }
    });

    if (this.target === 'window') {
      this.scollHeight = document.documentElement.scrollHeight;
      this.clientHeight = document.documentElement.clientHeight;
      window.addEventListener('scroll', this.onScroll);
    } else {
      this.scollHeight = document.getElementById(this.target).scrollHeight;
      this.clientHeight = document.getElementById(this.target).clientHeight;
      document.getElementById(this.target).addEventListener('scroll', this.onScroll);
    }
  },

  destroyed() {
    if (this.target === 'window') {
      window.removeEventListener('scroll', this.onScroll);
    } else {
      document.getElementById(this.target).removeEventListener('scroll', this.onScroll);
    }
  },

  methods: {
    onScroll() {
      if (this.target === 'window') {
        this.distance = Math.round(document.documentElement.scrollTop) + 10; // 获取到顶部的距离
      } else {
        this.distance = Math.round(document.getElementById(this.target).scrollTop) + 10; // 获取到顶部的距离
      }

      if (this.linkTotal.length > 0) {
        if (this.distance + 100 < this.linkTotal[0][0]) {
          this.index = -1;
          this.linkBallTop = -18;
          this.linkBallShow = false;
        } else if (this.linkTotal[0][0] - 100 <= this.distance && this.distance <= this.linkTotal[0][0] + 10) {
          this.index = 0;
          this.linkBallTop = 9;
          this.linkBallShow = true;
        } else if (this.distance > this.linkTotal[this.linkTotal.length - 1][1]) {
          this.linkBallShow = false;
          this.index = -1;
          this.linkBallTop = 9 + this.linkTotal.length * 27;
        } else if (this.distance === this.scollHeight - this.clientHeight + 10) {
          this.linkBallShow = true;
          this.index = this.linkTotal.length - 1;
          this.linkBallTop = 9 + (this.linkTotal.length - 1) * 27;
        } else {
          this.toScroll();
        }
      }

      this.activeTitle();
    },

    toScroll() {
      for (let i = 0; i < this.linkTotal.length - 1; i++) {
        this.linkBallShow = true;

        if (this.distance + 100 >= this.linkTotal[i + 1][0]) {
          this.linkBallTop = 9 + (i + 1) * 27;
          this.index = i + 1;
        }
      }
    },

    activeTitle() {
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.index === i) {
          this.$slots.default[i].elm.classList.add('td-anchor-link-active');
        } else {
          this.$slots.default[i].elm.classList.remove('td-anchor-link-active');
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./packages/anchor/src/anchor.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_anchorvue_type_script_lang_js_ = (anchorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/anchor/src/anchor.vue





/* normalize component */

var anchor_component = normalizeComponent(
  src_anchorvue_type_script_lang_js_,
  anchorvue_type_template_id_2214fbb3_render,
  anchorvue_type_template_id_2214fbb3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_anchor = (anchor_component.exports);
// CONCATENATED MODULE: ./packages/anchor/index.js
// 导入组件，组件必须声明 name


src_anchor.install = function (Vue) {
  Vue.component(src_anchor.name, src_anchor);
};

/* harmony default export */ var packages_anchor = (src_anchor);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchorLink/src/anchorLink.vue?vue&type=template&id=fced7072&
var anchorLinkvue_type_template_id_fced7072_render = function () {
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
var anchorLinkvue_type_template_id_fced7072_staticRenderFns = []
anchorLinkvue_type_template_id_fced7072_render._withStripped = true


// CONCATENATED MODULE: ./packages/anchorLink/src/anchorLink.vue?vue&type=template&id=fced7072&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchorLink/src/anchorLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var anchorLinkvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}AnchorLink`,
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
// CONCATENATED MODULE: ./packages/anchorLink/src/anchorLink.vue





/* normalize component */

var anchorLink_component = normalizeComponent(
  src_anchorLinkvue_type_script_lang_js_,
  anchorLinkvue_type_template_id_fced7072_render,
  anchorLinkvue_type_template_id_fced7072_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var anchorLink = (anchorLink_component.exports);
// CONCATENATED MODULE: ./packages/anchorLink/index.js
// 导入组件，组件必须声明 name


anchorLink.install = function (Vue) {
  Vue.component(anchorLink.name, anchorLink);
};

/* harmony default export */ var packages_anchorLink = (anchorLink);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/backTop/src/backTop.vue?vue&type=template&id=95941982&
var backTopvue_type_template_id_95941982_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "td_backtop",
      style: { opacity: _vm.show ? "1" : "0" },
      on: { click: _vm.backTop },
    },
    [
      _c(
        "div",
        { staticClass: "td_backtop-customize-content" },
        [_vm._t("default")],
        2
      ),
      !_vm.slotShow
        ? _c("div", { staticClass: "td_backtop-content" }, [_vm._m(0)])
        : _vm._e(),
    ]
  )
}
var backTopvue_type_template_id_95941982_staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("i", { staticClass: "td-icon-arrow-up" })])
  },
]
backTopvue_type_template_id_95941982_render._withStripped = true


// CONCATENATED MODULE: ./packages/backTop/src/backTop.vue?vue&type=template&id=95941982&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/backTop/src/backTop.vue?vue&type=script&lang=js&
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

/* harmony default export */ var backTopvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}BackTop`,
  props: {
    target: {
      type: String,
      default: 'window'
    },
    visibilityHeight: {
      type: Number,
      default: 500
    }
  },
  computed: {
    slotShow() {
      return this.$slots.default;
    }

  },

  data() {
    return {
      show: false,
      scrollTop: 0,
      down: false,
      timerIn: false
    };
  },

  mounted() {
    if (this.visibilityHeight === 0) {
      this.show = true;
    }

    if (this.target === 'window') {
      window.addEventListener('scroll', this.scrollToTop);
    } else {
      document.getElementById(this.target).addEventListener('scroll', this.scrollToTop);
    }
  },

  destroyed() {
    if (this.target === 'window') {
      window.removeEventListener('scroll', this.scrollToTop);
    } else {
      document.getElementById(this.target).removeEventListener('scroll', this.scrollToTop);
    }
  },

  methods: {
    scrollToTop() {
      let _scrollTop = 0;

      if (this.target === 'window') {
        _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      } else {
        _scrollTop = document.getElementById(this.target).scrollTop;
      }

      if (_scrollTop > this.scrollTop && this.timerIn) {
        this.down = true;
      } else {
        this.down = false;
      }

      this.scrollTop = _scrollTop;

      if (this.visibilityHeight !== 0) {
        if (this.scrollTop > this.visibilityHeight) {
          this.show = true;
        } else {
          this.show = false;
        }
      }
    },

    backTop() {
      const _this = this;

      const timer = setInterval(() => {
        _this.timerIn = true;

        if (_this.down) {
          clearInterval(timer);
          _this.timerIn = false;
        }

        const ispeed = Math.floor(-_this.scrollTop / 5);

        if (this.target === 'window') {
          document.documentElement.scrollTop = document.body.scrollTop = _this.scrollTop + ispeed;
        } else {
          document.getElementById(this.target).scrollTop = document.body.scrollTop = _this.scrollTop + ispeed;
        }

        if (_this.scrollTop === 0) {
          clearInterval(timer);
          _this.timerIn = false;
        }
      }, 16);
    }

  }
});
// CONCATENATED MODULE: ./packages/backTop/src/backTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_backTopvue_type_script_lang_js_ = (backTopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/backTop/src/backTop.vue





/* normalize component */

var backTop_component = normalizeComponent(
  src_backTopvue_type_script_lang_js_,
  backTopvue_type_template_id_95941982_render,
  backTopvue_type_template_id_95941982_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var backTop = (backTop_component.exports);
// CONCATENATED MODULE: ./packages/backTop/index.js
// 导入组件，组件必须声明 name


backTop.install = function (Vue) {
  Vue.component(backTop.name, backTop);
};

/* harmony default export */ var packages_backTop = (backTop);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/lineButton/src/lineButton.vue?vue&type=template&id=5ebb47cb&
var lineButtonvue_type_template_id_5ebb47cb_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "td-line-button",
      class: [
        _vm.type ? _vm.type + "-btn" : "",
        _vm.buttonSize ? "td-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.buttonDisabled,
          "is-round": _vm.round,
          "is-circle": _vm.circle,
        },
      ],
      attrs: { autofocus: _vm.autofocus, disabled: _vm.buttonDisabled },
      on: { click: _vm.handleClick },
    },
    [_vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()]
  )
}
var lineButtonvue_type_template_id_5ebb47cb_staticRenderFns = []
lineButtonvue_type_template_id_5ebb47cb_render._withStripped = true


// CONCATENATED MODULE: ./packages/lineButton/src/lineButton.vue?vue&type=template&id=5ebb47cb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/lineButton/src/lineButton.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lineButtonvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}LineButton`,
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  data() {
    return {};
  },

  computed: {
    buttonSize() {
      return this.size;
    },

    buttonDisabled() {
      return this.disabled;
    } // btnStyle() {
    //   // console.log(this.btn_width)
    //   return {
    //     width: `${this.btn_width}px`,
    //     height: `${this.btn_hight}px`,
    //     "line-height": `${this.btn_hight}px`
    //   };
    // }


  },
  // watch:
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }

  }
});
// CONCATENATED MODULE: ./packages/lineButton/src/lineButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lineButtonvue_type_script_lang_js_ = (lineButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/lineButton/src/lineButton.vue





/* normalize component */

var lineButton_component = normalizeComponent(
  src_lineButtonvue_type_script_lang_js_,
  lineButtonvue_type_template_id_5ebb47cb_render,
  lineButtonvue_type_template_id_5ebb47cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lineButton = (lineButton_component.exports);
// CONCATENATED MODULE: ./packages/lineButton/index.js
 // 为组件提供 install 安装方法，供按需引入

lineButton.install = function (Vue) {
  Vue.component(lineButton.name, lineButton);
}; // 默认导出组件


/* harmony default export */ var packages_lineButton = (lineButton);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/demoBlock/src/demoBlock.vue?vue&type=template&id=6b73c04f&
var demoBlockvue_type_template_id_6b73c04f_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "td_demo_block" }, [
    _vm.title != ""
      ? _c("h3", { staticClass: "demo-block-title" }, [
          _vm._v(_vm._s(_vm.title)),
        ])
      : _vm._e(),
    _vm.introduction != ""
      ? _c("p", { staticClass: "demo-block-introduction" }, [
          _vm._v("\n    " + _vm._s(_vm.introduction) + "\n  "),
        ])
      : _vm._e(),
    _c(
      "div",
      {
        staticClass: "demo-block",
        on: {
          mouseout: function ($event) {
            _vm.arrowAnimation ? (_vm.hover_animation = false) : null
          },
          mouseover: function ($event) {
            _vm.arrowAnimation ? (_vm.hover_animation = true) : null
          },
        },
      },
      [
        _c("div", { staticClass: "source" }, [_vm._t("demo")], 2),
        _c(
          "div",
          { staticClass: "code", style: { height: _vm.code_height + "px" } },
          [
            _c(
              "pre",
              {
                directives: [{ name: "highlightjs", rawName: "v-highlightjs" }],
              },
              [_vm._v("        "), _vm._t("code"), _vm._v("\n      ")],
              2
            ),
          ]
        ),
        _c(
          "div",
          {
            staticClass: "demo-block-control",
            on: {
              click: function ($event) {
                return _vm.showCode()
              },
            },
          },
          [
            _c("i", {
              staticClass: "shni",
              class: {
                hovering_i: _vm.hover_animation || !_vm.arrowAnimation,
                "iconfont  org-icon-arrow-down": _vm.code_height === 0,
                " iconfont org-icon-arrow-up": _vm.code_height !== 0,
              },
            }),
            _c(
              "span",
              {
                class: {
                  hovering_span: _vm.hover_animation || !_vm.arrowAnimation,
                },
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.code_height === 0 ? "显示代码" : "隐藏代码") +
                    "\n      "
                ),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var demoBlockvue_type_template_id_6b73c04f_staticRenderFns = []
demoBlockvue_type_template_id_6b73c04f_render._withStripped = true


// CONCATENATED MODULE: ./packages/demoBlock/src/demoBlock.vue?vue&type=template&id=6b73c04f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/demoBlock/src/demoBlock.vue?vue&type=script&lang=js&
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

/* harmony default export */ var demoBlockvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}DemoBlock`,
  props: {
    title: {
      type: String,
      default: ''
    },
    introduction: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 100
    },
    arrowAnimation: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      data: '',
      hover_animation: false,
      code_height: 0
    };
  },

  methods: {
    showCode() {
      if (this.code_height === 0) {
        this.code_height = this.height;
      } else {
        this.code_height = 0;
      }
    }

  }
});
// CONCATENATED MODULE: ./packages/demoBlock/src/demoBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_demoBlockvue_type_script_lang_js_ = (demoBlockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/demoBlock/src/demoBlock.vue





/* normalize component */

var demoBlock_component = normalizeComponent(
  src_demoBlockvue_type_script_lang_js_,
  demoBlockvue_type_template_id_6b73c04f_render,
  demoBlockvue_type_template_id_6b73c04f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var demoBlock = (demoBlock_component.exports);
// CONCATENATED MODULE: ./packages/demoBlock/index.js
// 导入组件，组件必须声明 name


demoBlock.install = function (Vue) {
  Vue.component(demoBlock.name, demoBlock);
};

/* harmony default export */ var packages_demoBlock = (demoBlock);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tableSimple/src/tableSimple.vue?vue&type=template&id=dd01ea98&
var tableSimplevue_type_template_id_dd01ea98_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { staticClass: "td_table_simple" }, [
    _c("thead", { style: { textAlign: _vm.align } }, [
      _c(
        "tr",
        _vm._l(_vm.thead, function (item) {
          return _c("th", { key: item }, [_vm._v(_vm._s(item))])
        }),
        0
      ),
    ]),
    _c(
      "tbody",
      _vm._l(_vm.data, function (item_tr, index) {
        return _c(
          "tr",
          { key: index },
          _vm._l(item_tr, function (item_td, key) {
            return _c("td", { key: key }, [
              item_td != "" && item_td != null
                ? _c(
                    "span",
                    {
                      class: {
                        parameter: key === "parameter" && _vm.type === "demo",
                        dataTypes: key === "dataTypes" && _vm.type === "demo",
                        description:
                          key === "description" && _vm.type === "demo",
                      },
                    },
                    [_vm._v(_vm._s(item_td))]
                  )
                : _c("span", [_vm._v("—")]),
            ])
          }),
          0
        )
      }),
      0
    ),
  ])
}
var tableSimplevue_type_template_id_dd01ea98_staticRenderFns = []
tableSimplevue_type_template_id_dd01ea98_render._withStripped = true


// CONCATENATED MODULE: ./packages/tableSimple/src/tableSimple.vue?vue&type=template&id=dd01ea98&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tableSimple/src/tableSimple.vue?vue&type=script&lang=js&
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

/* harmony default export */ var tableSimplevue_type_script_lang_js_ = ({
  name: `${PRE_MARK}TableSimple`,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    thead: {
      type: Array,
      default: function () {
        if (this.type === 'default') {
          return ['日期', '姓名', '地址'];
        } else if (this.type === 'demo') {
          return ['参数', '说明', '类型', '可选值', '默认值'];
        }
      }
    },
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    align: {
      type: String,
      default: 'left'
    }
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./packages/tableSimple/src/tableSimple.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tableSimplevue_type_script_lang_js_ = (tableSimplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tableSimple/src/tableSimple.vue





/* normalize component */

var tableSimple_component = normalizeComponent(
  src_tableSimplevue_type_script_lang_js_,
  tableSimplevue_type_template_id_dd01ea98_render,
  tableSimplevue_type_template_id_dd01ea98_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableSimple = (tableSimple_component.exports);
// CONCATENATED MODULE: ./packages/tableSimple/index.js
// 导入组件，组件必须声明 name


tableSimple.install = function (Vue) {
  Vue.component(tableSimple.name, tableSimple);
};

/* harmony default export */ var packages_tableSimple = (tableSimple);
// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */







const components = [packages_button, packages_anchor, packages_anchorLink, packages_backTop, packages_lineButton, packages_demoBlock, packages_tableSimple];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '0.1.12',
  install,
  Button: packages_button,
  Anchor: packages_anchor,
  AnchorLink: packages_anchorLink,
  BackTop: packages_backTop,
  LineButton: packages_lineButton,
  DemoBlock: packages_demoBlock,
  TableSimple: packages_tableSimple
});

/***/ })
/******/ ])["default"];