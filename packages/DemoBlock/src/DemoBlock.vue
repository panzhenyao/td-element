<template>
  <div class="td_demo_block">
    <h3 class="demo-block-title" v-if="title != ''">{{ title }}</h3>
    <p class="demo-block-introduction" v-if="introduction != ''">
      {{ introduction }}
    </p>
    <div @mouseout="arrowAnimation ? (hover_animation = false) : null" @mouseover="arrowAnimation ? (hover_animation = true) : null" class="demo-block">
      <div class="source">
        <slot name="demo" />
      </div>
      <div :style="{ height: code_height + 'px' }" class="code">
        <pre v-highlightjs>
          <slot name="code" />
        </pre>
      </div>
      <div @click="showCode()" class="demo-block-control">
        <i :class="{
            hovering_i: hover_animation || !arrowAnimation,
            'iconfont  org-icon-arrow-down': code_height === 0,
            ' iconfont org-icon-arrow-up': code_height !== 0,
          }" class="shni"></i>
        <span :class="{ hovering_span: hover_animation || !arrowAnimation }">
          {{ code_height === 0 ? '显示代码' : '隐藏代码' }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { PRE_MARK } from '../../settings'
export default {
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
    }
  },
  methods: {
    showCode() {
      if (this.code_height === 0) {
        this.code_height = this.height
      } else {
        this.code_height = 0
      }
    }
  }
}
</script>
