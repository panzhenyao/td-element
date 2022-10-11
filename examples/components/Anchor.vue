<template>
  <div class="content-box">
    <!-- 锚点 -->
    <td-anchor>
      <td-anchor-link href="anchor-Simple" title="基础方法" />
      <td-anchor-link href="api" title="api" />
    </td-anchor>

    <h2 class="demo-title">Anchor 锚点</h2>

    <td-demo-block :height="250" :title="'基础方法'" id="anchor-Simple" introduction="通过点击按钮或参考右侧侧边栏锚点">
      <template v-slot:demo>
        <div class="codepadding">
          <td-anchor customize>
            <td-anchor-link href="api" title="API">
              <td-button icon="td-icon-arrow-down" type="primary">前往API</td-button>
            </td-anchor-link>
          </td-anchor>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(anchor.code.html)}}</code>
      </template>
    </td-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      thead: ['参数', '说明', '类型', '可选值', '默认值', '支持组件'],
      anchor: {
        code: {
          html: `
            <td-anchor customize>
              <td-anchor-link href="api" title="API">
                <td-button icon="td-icon-arrow-down" type="primary">前往API</td-button>
              </td-anchor-link>
            </td-anchor>

           <div id="api">
            .....
           </div>
          `
        }
      },
      api: [
        {
          parameter: 'target',
          description: '被滚动元素,默认挂载documentElement; 可切换指定滚动元素id',
          dataTypes: 'String',
          optional: '*',
          default: 'window',
          support: 'Anchor'
        },
        {
          parameter: 'anchorClass',
          description: '自定义样式',
          dataTypes: 'String',
          optional: '*',
          default: '',
          support: 'Anchor'
        },
        {
          parameter: 'position',
          description: '导航栏位置',
          dataTypes: 'String',
          optional: 'left / right',
          default: 'right',
          support: 'Anchor'
        },

        {
          parameter: 'customize',
          description: '是否使用自定义样式; 默认以侧边栏样式贴边展示',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false',
          support: 'Anchor'
        },

        {
          parameter: 'href',
          description: '导航目标元素的id',
          dataTypes: 'String',
          optional: '*',
          default: '',
          support: 'AnchorLink'
        },
        {
          parameter: 'title',
          description: '原生title属性/锚点名称文本',
          dataTypes: 'String',
          optional: '*',
          default: '',
          support: 'AnchorLink'
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
