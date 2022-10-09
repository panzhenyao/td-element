<template>
  <div
    :style="{ opacity: show ? '1' : '0' }"
    @click="backTop"
    class="td_backtop"
  >
    <div class="td_backtop-customize-content">
      <slot></slot>
    </div>
    <div class="td_backtop-content" v-if="!slotShow">
      <div>
        <i class="iconfont org-icon-arrow-up"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { PRE_MARK } from "../../settings";
export default {
  name: `${PRE_MARK}BackTop`,
  props: {
    target: {
      type: String,
      default: 'window',
    },
    visibilityHeight: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    slotShow() {
      return this.$slots.default
    },
  },
  data() {
    return {
      show: false,
      scrollTop: 0,
      down: false,
      timerIn: false,
    }
  },
  mounted() {
    if (this.visibilityHeight === 0) {
      this.show = true
    }
    if (this.target === 'window') {
      window.addEventListener('scroll', this.scrollToTop)
    } else {
      document
        .getElementById(this.target)
        .addEventListener('scroll', this.scrollToTop)
    }
  },
  destroyed() {
    if (this.target === 'window') {
      window.removeEventListener('scroll', this.scrollToTop)
    } else {
      document
        .getElementById(this.target)
        .removeEventListener('scroll', this.scrollToTop)
    }
  },
  methods: {
    scrollToTop() {
      let _scrollTop = 0
      if (this.target === 'window') {
        _scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
      } else {
        _scrollTop = document.getElementById(this.target).scrollTop
      }
      if (_scrollTop > this.scrollTop && this.timerIn) {
        this.down = true
      } else {
        this.down = false
      }
      this.scrollTop = _scrollTop
      if (this.visibilityHeight !== 0) {
        if (this.scrollTop > this.visibilityHeight) {
          this.show = true
        } else {
          this.show = false
        }
      }
    },
    backTop() {
      const _this = this
      const timer = setInterval(() => {
        _this.timerIn = true
        if (_this.down) {
          clearInterval(timer)
          _this.timerIn = false
        }
        const ispeed = Math.floor(-_this.scrollTop / 5)
        if (this.target === 'window') {
          document.documentElement.scrollTop = document.body.scrollTop =
            _this.scrollTop + ispeed
        } else {
          document.getElementById(this.target).scrollTop =
            document.body.scrollTop = _this.scrollTop + ispeed
        }
        if (_this.scrollTop === 0) {
          clearInterval(timer)
          _this.timerIn = false
        }
      }, 16)
    },
  },
}
</script>
