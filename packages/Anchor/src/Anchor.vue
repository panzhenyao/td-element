<template>
  <div :class="[{'td-anchor':!customize,'td-anchor-left':position == 'left'},[anchorClass]]">
    <div class="td-anchor-ink">
      <span :class="{'visible':linkBallShow}" :style="{top:linkBallTop + 'px'}" class="td-anchor-ink-ball"></span>
    </div>
    <div class="td-anchor-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { PRE_MARK } from "../../settings";
export default {
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
    }
  },
  mounted() {
    const _this = this
    setTimeout(function () {
      for (let i = 0; i < _this.$slots.default.length; i++) {
        const linkId = _this.$slots.default[i].elm.id.split('-')
        _this.linkTotal.push([parseFloat(linkId[1]), parseFloat(linkId[2])])
      }
    })
    if (this.target === 'window') {
      this.scollHeight = document.documentElement.scrollHeight
      this.clientHeight = document.documentElement.clientHeight
      window.addEventListener('scroll', this.onScroll)
    } else {
      this.scollHeight = document.getElementById(this.target).scrollHeight
      this.clientHeight = document.getElementById(this.target).clientHeight
      document
        .getElementById(this.target)
        .addEventListener('scroll', this.onScroll)
    }
  },
  destroyed() {
    if (this.target === 'window') {
      window.removeEventListener('scroll', this.onScroll)
    } else {
      document
        .getElementById(this.target)
        .removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll() {
      if (this.target === 'window') {
        this.distance = Math.round(document.documentElement.scrollTop) + 10 // 获取到顶部的距离
      } else {
        this.distance =
          Math.round(document.getElementById(this.target).scrollTop) + 10 // 获取到顶部的距离
      }
      if (this.linkTotal.length > 0) {
        if (this.distance + 100 < this.linkTotal[0][0]) {
          this.index = -1
          this.linkBallTop = -18
          this.linkBallShow = false
        } else if (
          this.linkTotal[0][0] - 100 <= this.distance &&
          this.distance <= this.linkTotal[0][0] + 10
        ) {
          this.index = 0
          this.linkBallTop = 9
          this.linkBallShow = true
        } else if (
          this.distance > this.linkTotal[this.linkTotal.length - 1][1]
        ) {
          this.linkBallShow = false
          this.index = -1
          this.linkBallTop = 9 + this.linkTotal.length * 27
        } else if (
          this.distance ===
          this.scollHeight - this.clientHeight + 10
        ) {
          this.linkBallShow = true
          this.index = this.linkTotal.length - 1
          this.linkBallTop = 9 + (this.linkTotal.length - 1) * 27
        } else {
          this.toScroll()
        }
      }
      this.activeTitle()
    },
    toScroll() {
      for (let i = 0; i < this.linkTotal.length - 1; i++) {
        this.linkBallShow = true
        if (this.distance + 100 >= this.linkTotal[i + 1][0]) {
          this.linkBallTop = 9 + (i + 1) * 27
          this.index = i + 1
        }
      }
    },
    activeTitle() {
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.index === i) {
          this.$slots.default[i].elm.classList.add('td-anchor-link-active')
        } else {
          this.$slots.default[i].elm.classList.remove('td-anchor-link-active')
        }
      }
    }
  }
}
</script>
