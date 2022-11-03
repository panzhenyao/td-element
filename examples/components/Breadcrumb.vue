<template>
  <div class="content-box">
    <!-- 锚点 -->
    <td-anchor>
      <td-anchor-link href="breadcrumb-Simple" title="基础方法" />
      <td-anchor-link href="breadcrumb-Icon" title="图标分隔符" />
      <td-anchor-link href="breadcrumb-Jump" title="跳转配置" />
      <td-anchor-link href="breadcrumb-attributes" title="breadcrumb 属性" />
      <td-anchor-link href="breadcrumb-item-attributes" title="breadcrumb-item 属性" />
    </td-anchor>

    <h2 class="demo-title">Breadcrumb 面包屑导航</h2>
    <p class="demo-introduction">该组件可用于drg-front项目,兼容drg-front跳转方法</p>
    <p class="demo-introduction">显示当前页面的路径，快速返回之前的任意页面。</p>

    <!-- 基础用法 -->
    <td-demo-block :height="140" :title="'基础方法'" id="breadcrumb-Simple" introduction="适用广泛的基础用法">
      <template v-slot:demo>
        <div class="codepadding">
          <td-breadcrumb separator="/">
            <td-breadcrumb-item>安装</td-breadcrumb-item>
            <td-breadcrumb-item>设计规范</td-breadcrumb-item>
            <td-breadcrumb-item>面包屑导航</td-breadcrumb-item>
          </td-breadcrumb>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(breadcrumb.code.simple)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="140" :title="'图标分隔符'" id="breadcrumb-Icon" introduction="">
      <template v-slot:demo>
        <div class="codepadding">
          <td-breadcrumb separator-class="td-icon-arrow-right">
            <td-breadcrumb-item>安装</td-breadcrumb-item>
            <td-breadcrumb-item>设计规范</td-breadcrumb-item>
            <td-breadcrumb-item>面包屑导航</td-breadcrumb-item>
          </td-breadcrumb>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(breadcrumb.code.icon)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="140" :title="'跳转配置'" id="breadcrumb-Jump" introduction="根据路由组件配置的参数,进行跳转">
      <template v-slot:demo>
        <div class="codepadding">
          <td-breadcrumb separator="\">
            <td-breadcrumb-item to="installation">安装</td-breadcrumb-item>
            <td-breadcrumb-item :to="{ path: '/views/standard', query: { type: 'index' }, params: { index: 1 } }">设计规范</td-breadcrumb-item>
            <td-breadcrumb-item>面包屑导航</td-breadcrumb-item>
          </td-breadcrumb>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(breadcrumb.code.jump)}}</code>
      </template>
    </td-demo-block>

    <!-- Breadcrumb API -->
    <div id="breadcrumb-attributes">
      <h3 class="demo-table-title">Breadcrumb Attributes</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="breadcrumbApi" :thead="thead" />
    </div>
     <!-- Breadcrumb Item API -->
    <div id="breadcrumb-item-attributes">
      <h3 class="demo-table-title">Breadcrumb Item Attributes</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="breadcrumbItemApi" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      thead: ['参数', '说明', '类型', '默认值', '支持组件'],
      breadcrumb: {
        code: {
          simple: `
          <td-breadcrumb separator="/">
            <td-breadcrumb-item>机构管理</td-breadcrumb-item>
            <td-breadcrumb-item>医院列表</td-breadcrumb-item>
            <td-breadcrumb-item>基本信息配置</td-breadcrumb-item>
          </td-breadcrumb>
          `,
          icon: `
          <td-breadcrumb separator-class="td-icon-arrow-right">
            <td-breadcrumb-item>机构管理</td-breadcrumb-item>
            <td-breadcrumb-item>医院列表</td-breadcrumb-item>
            <td-breadcrumb-item>基本信息配置</td-breadcrumb-item>
          </td-breadcrumb>
          `,
          jump: `
          <td-breadcrumb separator="\">
            <td-breadcrumb-item to="installation">安装</td-breadcrumb-item>
            <td-breadcrumb-item :to="{ path: '/views/standard', query: { type: 'index' }, params: { index: 1 } }">设计规范</td-breadcrumb-item>
            <td-breadcrumb-item>面包屑导航</td-breadcrumb-item>
          </td-breadcrumb>
          `
        }
      },
      breadcrumbApi: [
        {
          parameter: 'separator',
          description: '分隔符',
          dataTypes: 'String',
          default: '/',
          support: 'breadcrumb'
        },
        {
          parameter: 'separator-class',
          description: '图标分隔符 class',
          dataTypes: 'String',
          default: '',
          support: 'breadcrumb'
        }
      ],
      breadcrumbItemApi: [
        {
          parameter: 'to',
          description: '路由跳转对象，同 vue-router 的 to',
          dataTypes: 'Object/String',
          default: '',
          support: 'breadcrumb-item'
        },
        {
          parameter: 'replace',
          description: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
          dataTypes: 'boolean',
          default: 'false',
          support: 'breadcrumb-item'
        },
        {
          parameter: 'forward',
          description: '路由跳转退后，同 vue-router 的 this.$router.go(-forward)',
          dataTypes: 'Number',
          default: '',
          support: 'breadcrumb-item'
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
