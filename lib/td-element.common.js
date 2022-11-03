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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
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
};

// 默认导出组件
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/anchorLink/src/anchorLink.vue?vue&type=template&id=1c9ed6d0&
var anchorLinkvue_type_template_id_1c9ed6d0_render = function () {
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
var anchorLinkvue_type_template_id_1c9ed6d0_staticRenderFns = []
anchorLinkvue_type_template_id_1c9ed6d0_render._withStripped = true


// CONCATENATED MODULE: ./packages/anchorLink/src/anchorLink.vue?vue&type=template&id=1c9ed6d0&

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
    if (!document.getElementById(this.href)) {
      console.warn('[WARNING]: anchor-link: href挂载的元素id可能未能找到');
      return;
    }
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
  anchorLinkvue_type_template_id_1c9ed6d0_render,
  anchorLinkvue_type_template_id_1c9ed6d0_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/lineButton/src/lineButton.vue?vue&type=template&id=c91ce464&
var lineButtonvue_type_template_id_c91ce464_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "td-line-button",
      class: [
        _vm.type ? _vm.type + "-btn" : "",
        _vm.buttonSize ? "td-line-button--" + _vm.buttonSize : "",
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
var lineButtonvue_type_template_id_c91ce464_staticRenderFns = []
lineButtonvue_type_template_id_c91ce464_render._withStripped = true


// CONCATENATED MODULE: ./packages/lineButton/src/lineButton.vue?vue&type=template&id=c91ce464&

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
    }
    // btnStyle() {
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
  lineButtonvue_type_template_id_c91ce464_render,
  lineButtonvue_type_template_id_c91ce464_staticRenderFns,
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
};

// 默认导出组件
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/link/src/link.vue?vue&type=template&id=5f8597ff&
var linkvue_type_template_id_5f8597ff_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isExistRoute
    ? _c(
        "a",
        _vm._b(
          {
            class: [
              "td-link",
              _vm.type ? "td-link--" + _vm.type : "",
              _vm.disabled && "is-disabled",
              _vm.underline && !_vm.disabled && "is-underline",
            ],
            on: { click: _vm.handleClick },
          },
          "a",
          _vm.$attrs,
          false
        ),
        [
          _vm.icon ? _c("i", { class: _vm.icon }) : _vm._e(),
          _vm.$slots.default
            ? _c(
                "span",
                { staticClass: "td-link--inner" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm.suffixIcon ? _c("i", { class: _vm.suffixIcon }) : _vm._e(),
          _vm.$slots.icon
            ? [_vm.$slots.icon ? _vm._t("icon") : _vm._e()]
            : _vm._e(),
        ],
        2
      )
    : _vm._e()
}
var linkvue_type_template_id_5f8597ff_staticRenderFns = []
linkvue_type_template_id_5f8597ff_render._withStripped = true


// CONCATENATED MODULE: ./packages/link/src/link.vue?vue&type=template&id=5f8597ff&

// CONCATENATED MODULE: ./src/mixins/hasRoute.js
/* harmony default export */ var hasRoute = ({
  methods: {
    /**
     * @description 判断路由是否存在
     * @param {*} name
     * @param {*} routeList
     * @returns
     */
    hasRoute: function (name, routeList) {
      let list = routeList;
      if (!this.$store || !this.$store.getters || !this.$store.getters["routes/finalRoutes"]) {
        return false;
      }
      try {
        if (!Array.isArray(routeList)) {
          list = this.$store.getters["routes/finalRoutes"] || [];
        }
      } catch (e) {
        list = [];
      }
      let result = null;
      const recursive = arr => {
        arr.forEach(item => {
          if (item && item.name === name) {
            result = item;
          }
          if (item.children) {
            recursive(item.children);
          }
        });
      };
      recursive(list);
      if (!result) {
        console.warn(`[WARNING]: hasRoute: ${name} 路由可能未配置, 请检查路由！`);
        return false;
      } else {
        return result && result.name === name;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/link/src/link.vue?vue&type=script&lang=js&
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



/* harmony default export */ var linkvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}Link`,
  mixins: [hasRoute],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    // 通过name 进行跳转
    name: String,
    // 跳转参数
    query: {
      type: Object,
      default: () => {}
    },
    // 跳转参数
    params: {
      type: Object,
      default: () => {}
    },
    // 图标
    icon: String,
    suffixIcon: String,
    // 是否保持一直存在
    alwaysShow: Boolean
  },
  data() {
    return {
      isExistRoute: true,
      isNotDrg: false
    };
  },
  mounted() {
    this.checkExistRoute();
  },

  methods: {
    checkExistRoute() {
      if (this.alwaysShow) return;
      console.log(this.$store);
      if (!this.$store || !this.$store.getters || !this.$store.getters['routes/finalRoutes'] || !this.$router.routeTo) {
        this.isNotDrg = true;
        return;
      }
      this.isExistRoute = this.hasRoute(this.name);
    },
    handleClick(event) {
      if (!this.disabled) {
        if (!this.name) {
          this.$emit('click', event);
        } else {
          if (this.hasRoute(this.name) && this.$router.routeTo) {
            this.$router.routeTo({
              name: this.name,
              query: this.query,
              params: this.params
            });
          } else {
            // 非drg-front 项目组件跳转方式
            if (this.isNotDrg) {
              this.$router.push({
                name: this.name,
                query: this.query,
                params: this.params
              });
            }
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/link/src/link.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_linkvue_type_script_lang_js_ = (linkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/link/src/link.vue





/* normalize component */

var link_component = normalizeComponent(
  src_linkvue_type_script_lang_js_,
  linkvue_type_template_id_5f8597ff_render,
  linkvue_type_template_id_5f8597ff_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_link = (link_component.exports);
// CONCATENATED MODULE: ./packages/link/index.js


src_link.install = function (Vue) {
  Vue.component(src_link.name, src_link);
};

/* harmony default export */ var packages_link = (src_link);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/breadcrumb/src/breadcrumb.vue?vue&type=template&id=b0b66224&
var breadcrumbvue_type_template_id_b0b66224_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "td-breadcrumb",
      attrs: { "aria-label": "Breadcrumb", role: "navigation" },
    },
    [_vm._t("default")],
    2
  )
}
var breadcrumbvue_type_template_id_b0b66224_staticRenderFns = []
breadcrumbvue_type_template_id_b0b66224_render._withStripped = true


// CONCATENATED MODULE: ./packages/breadcrumb/src/breadcrumb.vue?vue&type=template&id=b0b66224&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/breadcrumb/src/breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//



/* harmony default export */ var breadcrumbvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}Breadcrumb`,

  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },

  provide() {
    return {
      _breadcrumb: this
    };
  },

  mounted() {
    const items = this.$el.querySelectorAll('.td-breadcrumb__item');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  }
});
// CONCATENATED MODULE: ./packages/breadcrumb/src/breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_breadcrumbvue_type_script_lang_js_ = (breadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/breadcrumb/src/breadcrumb.vue





/* normalize component */

var breadcrumb_component = normalizeComponent(
  src_breadcrumbvue_type_script_lang_js_,
  breadcrumbvue_type_template_id_b0b66224_render,
  breadcrumbvue_type_template_id_b0b66224_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumb = (breadcrumb_component.exports);
// CONCATENATED MODULE: ./packages/breadcrumb/index.js


/* istanbul ignore next */
breadcrumb.install = function (Vue) {
  Vue.component(breadcrumb.name, breadcrumb);
};

/* harmony default export */ var packages_breadcrumb = (breadcrumb);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/breadcrumbItem/src/breadcrumbItem.vue?vue&type=template&id=503989d1&
var breadcrumbItemvue_type_template_id_503989d1_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { ref: "_breadcrumbItem", staticClass: "td-breadcrumb__item" },
    [
      _c(
        "span",
        {
          ref: "link",
          class: [
            "td-breadcrumb__inner",
            _vm.to || _vm.forward ? "is-link" : "",
          ],
          attrs: { role: "link" },
        },
        [_vm._t("default")],
        2
      ),
      !_vm.isCurrentPage
        ? [
            _vm.separatorClass
              ? _c("i", {
                  staticClass: "td-breadcrumb__separator",
                  class: _vm.separatorClass,
                })
              : _c(
                  "span",
                  {
                    staticClass: "td-breadcrumb__separator",
                    attrs: { role: "presentation" },
                  },
                  [_vm._v(_vm._s(_vm.separator))]
                ),
          ]
        : _vm._e(),
    ],
    2
  )
}
var breadcrumbItemvue_type_template_id_503989d1_staticRenderFns = []
breadcrumbItemvue_type_template_id_503989d1_render._withStripped = true


// CONCATENATED MODULE: ./packages/breadcrumbItem/src/breadcrumbItem.vue?vue&type=template&id=503989d1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/breadcrumbItem/src/breadcrumbItem.vue?vue&type=script&lang=js&
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

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isPath(str) {
  return str.includes('/');
}

const getNameQuery = function (str) {
  if (typeof str !== 'string') return {};
  const arrObj = str.split('?');
  const obj = Object.create(null);
  if (arrObj.length > 1) {
    const queryObj = arrObj[1].split('&');
    queryObj.forEach(item => {
      let itemObj = item.split('=');
      if (itemObj.length > 1) {
        obj[itemObj[0]] = itemObj[1];
      }
    });
    if (isPath(arrObj[0])) {
      return { path: arrObj[0], query: obj };
    } else {
      return { name: arrObj[0], query: obj };
    }
  } else {
    if (isPath(str)) {
      return { path: str };
    } else {
      return { name: str };
    }
  }
};



/* harmony default export */ var breadcrumbItemvue_type_script_lang_js_ = ({
  name: `${PRE_MARK}BreadcrumbItem`,
  props: {
    // { name: '/' }
    to: {},
    replace: Boolean,
    forward: Number
  },
  data() {
    return {
      separator: '',
      separatorClass: '',
      isCurrentPage: false
    };
  },

  inject: ['_breadcrumb'],

  mounted() {
    this.separator = this._breadcrumb.separator;
    this.separatorClass = this._breadcrumb.separatorClass;
    this.setBreadcrumbItemAttribute();
    this.getBreadcrumbItemAttribute();
    this.bindBreadcrumbItemEvent();
  },

  methods: {
    bindBreadcrumbItemEvent() {
      const link = this.$refs.link;
      link.addEventListener('click', _ => {
        if (this.isCurrentPage) return;
        if (this.forward) {
          return this.$router.go(-this.forward);
        }
        const { to, $router } = this;
        if (!to || !$router) return;
        this.replace ? this.replaceTo(to) : this.routeTo(to);
      });
    },
    setBreadcrumbItemAttribute() {
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
    },
    getBreadcrumbItemAttribute() {
      this.$nextTick(() => {
        const breadcrumbItem = this.$refs._breadcrumbItem;
        this.isCurrentPage = breadcrumbItem.getAttribute('aria-current');
      });
    },
    getToParameter(to) {
      if (typeof to === 'string') {
        if (to.includes('?')) {
          return getNameQuery(to);
        } else {
          if (to.includes('/')) {
            return { path: to };
          } else {
            return { name: to };
          }
        }
      } else if (isObject(to)) {
        return to;
      }
    },
    routeTo(to) {
      const options = this.getToParameter(to);

      if (this.$router.routeTo) {
        this.$router.routeTo(options);
      } else {
        this.$router.push(options);
      }
    },
    replaceTo(to) {
      const options = this.getToParameter(to);
      if (this.$router.replaceTo) {
        this.$router.replaceTo(options);
      } else {
        this.$router.replace(options);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/breadcrumbItem/src/breadcrumbItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_breadcrumbItemvue_type_script_lang_js_ = (breadcrumbItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/breadcrumbItem/src/breadcrumbItem.vue





/* normalize component */

var breadcrumbItem_component = normalizeComponent(
  src_breadcrumbItemvue_type_script_lang_js_,
  breadcrumbItemvue_type_template_id_503989d1_render,
  breadcrumbItemvue_type_template_id_503989d1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumbItem = (breadcrumbItem_component.exports);
// CONCATENATED MODULE: ./packages/breadcrumbItem/index.js


/* istanbul ignore next */
breadcrumbItem.install = function (Vue) {
  Vue.component(breadcrumbItem.name, breadcrumbItem);
};

/* harmony default export */ var packages_breadcrumbItem = (breadcrumbItem);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/datePick/src/datePick.vue?vue&type=template&id=30fbfbca&
var datePickvue_type_template_id_30fbfbca_render = function () {
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
var datePickvue_type_template_id_30fbfbca_staticRenderFns = []
datePickvue_type_template_id_30fbfbca_render._withStripped = true


// CONCATENATED MODULE: ./packages/datePick/src/datePick.vue?vue&type=template&id=30fbfbca&

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
  name: `${PRE_MARK}DatePick`,
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
// CONCATENATED MODULE: ./packages/datePick/src/datePick.vue





/* normalize component */

var datePick_component = normalizeComponent(
  src_datePickvue_type_script_lang_js_,
  datePickvue_type_template_id_30fbfbca_render,
  datePickvue_type_template_id_30fbfbca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datePick = (datePick_component.exports);
// CONCATENATED MODULE: ./packages/datePick/index.js

// 为组件提供 install 安装方法，供按需引入
datePick.install = function (Vue) {
  Vue.component(datePick.name, datePick);
};

// 默认导出组件
/* harmony default export */ var packages_datePick = (datePick);
// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */













const components = [packages_button, packages_anchor, packages_anchorLink, packages_backTop, packages_lineButton, packages_demoBlock, packages_tableSimple, packages_link, packages_breadcrumb, packages_breadcrumbItem, packages_datePick];

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
  version: '0.1.14',
  install,
  Button: packages_button,
  Anchor: packages_anchor,
  AnchorLink: packages_anchorLink,
  BackTop: packages_backTop,
  LineButton: packages_lineButton,
  DemoBlock: packages_demoBlock,
  TableSimple: packages_tableSimple,
  Link: packages_link,
  Breadcrumb: packages_breadcrumb,
  BreadcrumbItem: packages_breadcrumbItem,
  DatePick: packages_datePick
});

/***/ })
/******/ ])["default"];