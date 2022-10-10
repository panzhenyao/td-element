<template>
  <table class="td_table_simple">
    <thead :style="{'textAlign':align}">
      <tr>
        <th v-for="item in thead" :key="item">{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item_tr,index) in data" :key="index">
        <td v-for="(item_td,key) in item_tr" :key="key">
          <span v-if="item_td != '' && item_td != null"
            :class="{'parameter':key === 'parameter' && type === 'demo','dataTypes':key === 'dataTypes'  && type === 'demo' ,'description':key === 'description'  && type === 'demo'}">{{item_td}}</span>
          <span v-else>—</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { PRE_MARK } from '../../settings'
export default {
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
          return ['日期', '姓名', '地址']
        } else if (this.type === 'demo') {
          return ['参数', '说明', '类型', '可选值', '默认值']
        }
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {}
  }
}
</script>
