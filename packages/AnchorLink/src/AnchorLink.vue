<template>
  <div :class="{'td_anchor_link':!($slots.default),'td_anchor_link-left':$parent.position == 'left'}"
    :id="'link-' + hrefTotal + '-' + hrefHeight" :title="title" @click="jump">
    <span v-if="!($slots.default)">{{title}}</span>
    <slot></slot>
  </div>
</template>
<script>
import { PRE_MARK } from "../../settings";
export default {
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
    }
  },
  mounted() {
    if (!document.getElementById(this.href)) {
      console.warn('[WARNING]: anchor-link: href挂载的元素id可能未能找到')
      return
    }
    this.hrefTotal = document.getElementById(this.href).offsetTop - 10
    this.hrefHeight =
      document.getElementById(this.href).clientHeight + this.hrefTotal
  },
  methods: {
    jump() {
      let total = document.getElementById(this.href).offsetTop - 10 // 获取跳转锚点坐标
      let distance
      let scrollHeight
      let targetHeight
      let hrefHeight
      if (this.$parent.target === 'window') {
        distance = document.documentElement.scrollTop // 获取到顶部的距离
        scrollHeight = document.documentElement.scrollHeight // 获取滚动条高度
        targetHeight = document.documentElement.clientHeight // 获取滚动容器一屏高度
        hrefHeight = document.documentElement.clientHeight // 获取锚点容器高度
      } else {
        distance = document.getElementById(this.$parent.target).scrollTop // 获取到顶部的距离
        scrollHeight = document.getElementById(this.$parent.target).scrollHeight // 获取滚动条高度
        targetHeight = document.getElementById(this.$parent.target).clientHeight // 获取滚动容器一屏高度
        hrefHeight = document.getElementById(this.$parent.target).clientHeight // 获取锚点容器高度
      }
      let ispeed
      let _this = this
      if (total > distance) {
        if (total + hrefHeight > scrollHeight) {
          total = scrollHeight - targetHeight
        }
        smoothDown()
      } else {
        smoothUp()
      }
      function smoothDown() {
        let timer = setInterval(() => {
          if (distance < total) {
            if (ispeed <= 5) {
              ispeed = 5
            } else {
              ispeed = Math.floor((total - distance) / 5)
            }
            if (_this.$parent.target === 'window') {
              distance += ispeed
              document.documentElement.scrollTop = document.body.scrollTop = distance
            } else {
              distance += ispeed
              document.getElementById(_this.$parent.target).scrollTop = distance
            }
          } else {
            if (_this.$parent.target === 'window') {
              document.documentElement.scrollTop = total
            } else {
              document.getElementById(_this.$parent.target).scrollTop = total
            }
            clearInterval(timer)
          }
        }, 16)
      }
      function smoothUp() {
        let timer = setInterval(() => {
          if (distance > total) {
            if (ispeed <= 5) {
              ispeed = 5
            } else {
              ispeed = Math.floor((distance - total) / 5)
            }
            if (_this.$parent.target === 'window') {
              distance -= ispeed
              document.documentElement.scrollTop = document.body.scrollTop = distance
            } else {
              distance -= ispeed
              document.getElementById(_this.$parent.target).scrollTop = distance
            }
          } else {
            if (_this.$parent.target === 'window') {
              document.documentElement.scrollTop = total
            } else {
              document.getElementById(_this.$parent.target).scrollTop = total
            }
            clearInterval(timer)
          }
        }, 16)
      }
    }
  }
}
</script>
