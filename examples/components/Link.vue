<template>
  <div class="content-box">
    <!-- 锚点 -->
    <td-anchor>
      <td-anchor-link href="link-Simple" title="基础方法" />
      <td-anchor-link href="link-disabled" title="禁用方法" />
      <td-anchor-link href="link-jump" title="配置跳转" />
      <td-anchor-link href="link-underline" title="下划线" />
      <td-anchor-link href="link-icon" title="图标" />
      <td-anchor-link href="attributes" title="属性" />
    </td-anchor>

    <h2 class="demo-title">Link 链接</h2>
    <p class="demo-introduction">该组件可用于drg-front项目,兼容drg-front跳转方法</p>

    <!-- 基础用法 -->
    <td-demo-block :height="160" :title="'基础方法'" id="link-Simple" introduction="通过点击按钮跳转目标路由">
      <template v-slot:demo>
        <div class="codepadding">
          <td-link>默认链接</td-link>
          <td-link type="primary">主要链接</td-link>
          <td-link type="success">成功链接</td-link>
          <td-link type="danger">警告链接</td-link>
          <td-link type="warn">危险链接</td-link>
          <td-link type="info">信息链接</td-link>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(link.code.simple)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="160" :title="'禁用状态'" id="link-disabled" introduction="文字链接不可用状态">
      <template v-slot:demo>
        <div class="codepadding">
          <td-link disabled>默认链接</td-link>
          <td-link type="primary" disabled>主要链接</td-link>
          <td-link type="success" disabled>成功链接</td-link>
          <td-link type="danger" disabled>警告链接</td-link>
          <td-link type="warn" disabled>危险链接</td-link>
          <td-link type="info" disabled>信息链接</td-link>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(link.code.disabled)}}</code>
      </template>
    </td-demo-block>

    <!-- 配置跳转 -->
    <td-demo-block :height="90" :title="'配置跳转'" id="link-jump" introduction="为链接配置跳转">
      <template v-slot:demo>
        <div class="codepadding">
          <td-link name="installation" :query="{ type: 'index' }" :params="{ index: 1 }">跳转链接</td-link>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(link.code.jump)}}</code>
      </template>
    </td-demo-block>

    <!-- 下划线 -->
    <td-demo-block :height="90" :title="'下划线'" id="link-underline" introduction="鼠标经过,显示文字链接下划线">
      <template v-slot:demo>
        <div class="codepadding">
          <td-link underline>默认链接</td-link>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(link.code.underline)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="90" :title="'图标'" id="link-icon" introduction="带图标的文字链接可增强辨识度">
      <template v-slot:demo>
        <div class="codepadding">
          <td-link icon="td-icon-arrow-right" suffix-icon="td-icon-arrow-left">默认链接</td-link>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(link.code.icon)}}</code>
      </template>
    </td-demo-block>

    <!-- API -->
    <div id="attributes">
      <h3 class="demo-table-title">Attributes</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thead: ['参数', '说明', '类型', '可选值', '默认值', '支持组件'],
      link: {
        code: {
          simple: `
            <td-link>默认链接</td-link>
            <td-link type="primary">主要链接</td-link>
            <td-link type="success">成功链接</td-link>
            <td-link type="danger">警告链接</td-link>
            <td-link type="warn">危险链接</td-link>
            <td-link type="info">信息链接</td-link>
          `,
          disabled: `
            <td-link disabled>默认链接</td-link>
            <td-link type="primary" disabled>主要链接</td-link>
            <td-link type="success" disabled>成功链接</td-link>
            <td-link type="danger" disabled>警告链接</td-link>
            <td-link type="warn" disabled>危险链接</td-link>
            <td-link type="info" disabled>信息链接</td-link>
          `,
          jump: `
            <td-link name="installation" :query="{ type: 'index' }" :params="{ index: 1 }">跳转链接</td-link>
          `,
          underline: `
            <td-link underline>默认链接</td-link>
          `,
          icon: `
            <td-link icon="td-icon-arrow-right" suffix-icon="td-icon-arrow-left">默认链接</td-link>
          `
        }
      },
      api: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional: 'default / primary / success  / danger / warn / info',
          default: 'default',
          support: '*'
        },
        {
          parameter: 'name',
          description: '跳转目标路由得name, 等同于 this.$router.push({name})',
          dataTypes: 'String',
          default: '',
          support: '*'
        },
        {
          parameter: 'alwaysShow',
          description: '该功能只在drg-front前端项目生效,为动态路由而服务。根据目标路由是否存在判断是否显示',
          dataTypes: 'String',
          default: '',
          support: '*'
        },
        {
          parameter: 'disabled',
          description: '是否禁用链接',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
          support: '*'
        },
        {
          parameter: 'underline',
          description: 'hover时,展示下划线',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
          support: '*'
        },
        {
          parameter: 'icon',
          description: '位于文字前,链接图标类名',
          dataTypes: 'String',
          optional: '',
          default: '',
          support: '*'
        },
        {
          parameter: 'suffix-icon',
          description: '位于文字后,链接图标类名',
          dataTypes: 'String',
          optional: '',
          default: '',
          support: '*'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
