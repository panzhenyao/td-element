<template>
  <a v-if="isExistRoute" :class="[
      'td-link',
      type ? `td-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]" v-bind="$attrs" @click="handleClick">

    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default" class="td-link--inner">
      <slot></slot>
    </span>
    <i :class="suffixIcon" v-if="suffixIcon"></i>
    <template v-if="$slots.icon">
      <slot v-if="$slots.icon" name="icon"></slot>
    </template>
  </a>
</template>

<script>
import { PRE_MARK } from '../../settings'
import hasRoute from 'td-element/src/mixins/hasRoute.js'
export default {
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
    }
  },
  mounted() {
    this.checkExistRoute()
  },

  methods: {
    checkExistRoute() {
      if (this.alwaysShow) return
      console.log(this.$store)
      if (!this.$store || !this.$store.getters || !this.$store.getters['routes/finalRoutes'] || !this.$router.routeTo) {
        this.isNotDrg = true
        return
      }
      this.isExistRoute = this.hasRoute(this.name)
    },
    handleClick(event) {
      if (!this.disabled) {
        if (!this.name) {
          this.$emit('click', event)
        } else {
          if (this.hasRoute(this.name) && this.$router.routeTo) {
            this.$router.routeTo({
              name: this.name,
              query: this.query,
              params: this.params
            })
          } else {
            // 非drg-front 项目组件跳转方式
            if (this.isNotDrg) {
              this.$router.push({
                name: this.name,
                query: this.query,
                params: this.params
              })
            }
          }
        }
      }
    }
  }
}
</script>
