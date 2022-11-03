
<template >
  <!-- :style="{width: `${btn_width}px`,height:`${btn_hight}px`}" -->

  <button
    class="td-line-button"
    @click="handleClick"
    :autofocus="autofocus"
    :disabled="buttonDisabled"
    :class="[
      type ?  `${type}-btn`:'' ,
      buttonSize ? 'td-line-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { PRE_MARK } from "../../settings";
export default {
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
};
</script>
