<template>
  <button class="td-button" @click="handleClick" :disabled="buttonDisabled || loading" :autofocus="autofocus" :type="nativeType" :class="[
      type ? 'td-button--' + type : '',
      buttonSize ? 'td-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
      },
      {
        'is-visited': isVisited
      }
    ]">
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
/* eslint-disable */
export default {
  name: 'TdButton',
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
    // plain: Boolean,
    autofocus: Boolean,
    // round: Boolean,
    // circle: Boolean,
    visitedState: Boolean
  },
  data() {
    return {
      isVisited: false
    }
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
      let target = evt.target
      if (target.nodeName == 'SPAN') {
        target = evt.target.parentNode
      }
      this.useTypeEffect()
      if (this.disabledFocusEffect()) return
      target.blur()
    },
    disabledFocusEffect() {
      if (this.visitedState) {
        return true
      } else {
        return ['text'].includes(this.type)
      }
    },
    // 根据类型使用效果button交互效果
    useTypeEffect() {
      if (this.visitedState && this.type === 'text') {
        this.isVisited = true
      }
    }
  }
}
</script>
