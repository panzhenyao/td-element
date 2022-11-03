<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">常用按钮介绍</p>
    <!-- 锚点 -->
    <td-anchor>
      <td-anchor-link href="button-Simple" title="普通按钮" />
      <td-anchor-link href="button-Line" title="线性按钮" />
      <td-anchor-link href="button-disabled" title="禁用" />
      <td-anchor-link href="button-Size" title="按钮尺寸" />
      <td-anchor-link href="button-attributes" title="button属性" />
      <td-anchor-link href="line-button-attributes" title="line button属性" />
    </td-anchor>

    <h3 class="demo-table-title" id="button-simple">基础用法</h3>

    <!-- 基础用法DEMO -->
    <td-demo-block :height="250" :title="'普通按钮'" id="button-Simple">
      <template v-slot:demo>
        <div class="codepadding">
          <td-button>Default</td-button>
          <td-button type="primary">Primary</td-button>
          <td-button type="success">Success</td-button>
          <td-button type="danger">Danger</td-button>
          <td-button type="warn">warn</td-button>
          <td-button type="info">info</td-button>
        </div>
        <div class="codepadding">
          <td-button>Default</td-button>
          <td-button round type="primary">Primary</td-button>
          <td-button circle icon="td-icon-search" type="primary"></td-button>
        </div>
        <div class="codepadding">
          <td-button icon="td-icon-search">Default</td-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(simple.code.html) }}</code>
      </template>
    </td-demo-block>

    <!-- 线性按钮 -->
    <td-demo-block :height="200" :title="'线性按钮'" id="button-Line">
      <template v-slot:demo>
        <div class="codepadding">
          <td-line-button>Default</td-line-button>
          <td-line-button type="primary">Primary</td-line-button>
          <td-line-button type="success">Success</td-line-button>
          <td-line-button type="danger">Danger</td-line-button>
          <td-line-button type="warn">warn</td-line-button>
          <td-line-button type="info">info</td-line-button>
        </div>
        <div class="codepadding">
          <td-line-button>Default</td-line-button>
          <td-line-button round type="primary">Primary</td-line-button>
          <td-line-button circle type="primary">Ok</td-line-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(line.code.html) }}</code>
      </template>
    </td-demo-block>

    <!-- 禁用DEMO -->
    <td-demo-block :height="190" :title="'禁用'" id="button-disabled">
      <template v-slot:demo>
        <div class="codepadding">
          <td-button disabled>Default</td-button>
          <td-button disabled type="primary">Primary</td-button>
          <td-button disabled type="danger">Danger</td-button>
          <td-button disabled icon="td-icon-search" type="primary">Search</td-button>
        </div>
        <div class="codepadding">
          <td-line-button disabled>Default</td-line-button>
          <td-line-button disabled type="primary">Primary</td-line-button>
          <td-line-button disabled type="danger">Danger</td-line-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(disabled.code.html) }}</code>
      </template>
    </td-demo-block>

    <!-- 按钮尺寸 -->
    <td-demo-block :height="190" :title="'按钮尺寸'" id="button-Size" introduction="自定义修改颜色，其type必须设置为customize">
      <template v-slot:demo>
        <div style="padding: 10p">
          <td-button size="medium">medium</td-button>
          <td-button size="small">small</td-button>
          <td-button size="mini">mini</td-button>
        </div>

        <div style="margin-top: 10px; padding: 10p">
          <td-line-button size="medium">medium</td-line-button>
          <td-line-button size="small">small</td-line-button>
          <td-line-button size="mini">mini</td-line-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(size.code.html) }}</code>
      </template>
    </td-demo-block>

    <!-- API -->
    <div id="button-attributes">
      <h3 class="demo-table-title">Button Attributes</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="apiButton" :thead="thead" />
    </div>
    <div id="line-button-attributes">
      <h3 class="demo-table-title">Line Button Attributes</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="apiLineButton" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thead: ['参数', '说明', '类型', '可选值', '默认值'],
      // a: document.getElementById("router_view_box"),
      simple: {
        code: {
          html: `
          <td-button>Default</td-button>
          <td-button type="primary">Primary</td-button>
          <td-button type="success">Success</td-button>
          <td-button type="danger">Danger</td-button>
          <td-button type="warn">warn</td-button>
          <td-button type="info">info</td-button>
          
          <td-button>Default</td-button>
          <td-button round type="primary">Primary</td-button>
          <td-button circle icon="td-icon-search" type="primary"></td-button>

          <td-button icon="td-icon-search">Default</td-button>
          `
        }
      },
      line: {
        code: {
          html: `
        <td-line-button>Default</td-line-button>
        <td-line-button type="success">Success</td-line-button>
        <td-line-button type="danger">Danger</td-line-button>
        <td-line-button type="warn">warn</td-line-button>
        <td-line-button type="info">info</td-line-button>

        <td-line-button>Default</td-line-button>
        <td-line-button round type="primary">Primary</td-line-button>
        <td-line-button circle type="primary">Ok</td-line-button>
          `
        }
      },
      disabled: {
        code: {
          html: `
          <td-button disabled>Default</td-button>
          <td-button disabled type="primary">Primary</td-button>
          <td-button disabled type="danger">Danger</td-button>
          <td-button disabled icon="td-icon-icon_search" type="primary">Search</td-button>
         
          <td-line-button disabled>Default</td-line-button>
          <td-line-button disabled type="primary">Primary</td-line-button>
          <td-line-button disabled type="danger">Danger</td-line-button>
         `
        }
      },
      size: {
        code: {
          html: `
          <td-button size="medium">medium</td-button>
          <td-button size="small">small</td-button>
          <td-button size="mini">mini</td-button>
          
          <td-line-button size="medium">medium</td-line-button>
          <td-line-button size="small">small</td-line-button>
          <td-line-button size="mini">mini</td-line-button>
          `
        }
      },
      apiButton: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional: 'default / primary / success  / danger / warn / info',
          default: 'default',
        },
        {
          parameter: 'size',
          description: '设置按钮大小',
          dataTypes: 'String',
          optional: 'medium/small/mini',
          default: 'mini',
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        },
        {
          parameter: 'icon',
          description: '按钮图标类名(td-line-button不支持该属性)',
          dataTypes: 'String',
          optional: '',
          default: '',
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        },
        {
          parameter: 'round',
          description: '是否椭圆按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        },
        {
          parameter: 'visitedState',
          description: '启动点击过的状态展示',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        }
      ],
      apiLineButton: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional: 'default / primary / success  / danger / warn / info',
          default: 'default',
        },
        {
          parameter: 'size',
          description: '设置按钮大小',
          dataTypes: 'String',
          optional: 'medium/small/mini',
          default: 'medium',
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        },
        {
          parameter: 'round',
          description: '是否椭圆按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
        },
      ]
    }
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>
