<template>
  <div class="td-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>

import { PRE_MARK } from "../../settings";
export default {
  name: `${PRE_MARK}Breadcrumb`,

  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorClass: {
      type: String,
      default: '',
    },
  },

  provide() {
    return {
      _breadcrumb: this,
    }
  },

  mounted() {
    const items = this.$el.querySelectorAll('.td-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  },
}
</script>
