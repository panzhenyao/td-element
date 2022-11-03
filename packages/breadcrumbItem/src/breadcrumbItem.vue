<template>
  <span ref="_breadcrumbItem" class="td-breadcrumb__item">
    <span :class="['td-breadcrumb__inner', to || forward ? 'is-link' : '']" ref="link" role="link">
      <slot></slot>
    </span>
    <template v-if="!isCurrentPage">
      <i v-if="separatorClass" class="td-breadcrumb__separator" :class="separatorClass"></i>
      <span v-else class="td-breadcrumb__separator" role="presentation">{{separator}}</span>
    </template>
  </span>
</template>

<script>
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function isPath(str) {
  return str.includes('/')
}

const getNameQuery = function (str) {
  if (typeof str !== 'string') return {}
  const arrObj = str.split('?')
  const obj = Object.create(null)
  if (arrObj.length > 1) {
    const queryObj = arrObj[1].split('&')
    queryObj.forEach(item => {
      let itemObj = item.split('=')
      if (itemObj.length > 1) {
        obj[itemObj[0]] = itemObj[1]
      }
    })
    if (isPath(arrObj[0])) {
      return { path: arrObj[0], query: obj }
    } else {
      return { name: arrObj[0], query: obj }
    }
  } else {
    if (isPath(str)) {
      return { path: str }
    } else {
      return { name: str }
    }
  }
}

import { PRE_MARK } from '../../settings'

export default {
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
    }
  },

  inject: ['_breadcrumb'],

  mounted() {
    this.separator = this._breadcrumb.separator
    this.separatorClass = this._breadcrumb.separatorClass
    this.setBreadcrumbItemAttribute()
    this.getBreadcrumbItemAttribute()
    this.bindBreadcrumbItemEvent()
  },

  methods: {
    bindBreadcrumbItemEvent() {
      const link = this.$refs.link
      link.addEventListener('click', _ => {
        if (this.isCurrentPage) return
        if (this.forward) {
          return this.$router.go(-this.forward)
        }
        const { to, $router } = this
        if (!to || !$router) return
        this.replace ? this.replaceTo(to) : this.routeTo(to)
      })
    },
    setBreadcrumbItemAttribute() {
      const link = this.$refs.link
      link.setAttribute('role', 'link')
    },
    getBreadcrumbItemAttribute() {
      this.$nextTick(() => {
        const breadcrumbItem = this.$refs._breadcrumbItem
        this.isCurrentPage = breadcrumbItem.getAttribute('aria-current')
      })
    },
    getToParameter(to) {
      if (typeof to === 'string') {
        if (to.includes('?')) {
          return getNameQuery(to)
        } else {
          if (to.includes('/')) {
            return { path: to }
          } else {
            return { name: to }
          }
        }
      } else if (isObject(to)) {
        return to
      }
    },
    routeTo(to) {
      const options = this.getToParameter(to)

      if (this.$router.routeTo) {
        this.$router.routeTo(options)
      } else {
        this.$router.push(options)
      }
    },
    replaceTo(to) {
      const options = this.getToParameter(to)
      if (this.$router.replaceTo) {
        this.$router.replaceTo(options)
      } else {
        this.$router.replace(options)
      }
    }
  }
}
</script>
