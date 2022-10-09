<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">常用按钮介绍</p>

    <td-anchor>
      <td-anchor-link href="button-Simple" title="普通按钮" />
      <td-anchor-link href="button-Black" title="暗色按钮" />
      <td-anchor-link href="button-Line" title="线性按钮" />
      <td-anchor-link href="button-disabled" title="禁用" />
      <td-anchor-link href="button-Size" title="按钮尺寸" />
      <td-anchor-link href="api" title="API" />
    </td-anchor>

    <h3 class="demo-table-title" id="button-simple">基础用法</h3>
    <!-- 基础用法DEMO -->
    <td-demo-block :height="630" :title="'普通按钮'" id="button-Simple">
      <template v-slot:demo>
        <div class="codepadding">
          <td-button>Default</td-button>
          <td-button type="success">Success</td-button>
          <td-button type="primary">Primary</td-button>
          <td-button type="danger">Danger</td-button>
          <td-button type="warning">Warning</td-button>
          <td-button type="info">info</td-button>
          <td-button icon="org-icon-icon_search" type="primary"
            >Search</td-button
          >
        </div>
        <div class="codepadding">
          <td-button plain>Default</td-button>
          <td-button plain type="success">Success</td-button>
          <td-button plain type="primary">Primary</td-button>
          <td-button plain type="danger">Danger</td-button>
          <td-button plain type="warning">Warning</td-button>
          <td-button plain type="info">info</td-button>

          <td-button plain icon="org-icon-icon_search" type="primary"
            >Search</td-button
          >
        </div>
        <div class="codepadding">
          <td-button round>Default</td-button>
          <td-button round type="success">Success</td-button>
          <td-button round type="primary">Primary</td-button>
          <td-button round type="danger">Danger</td-button>
          <td-button round type="warning">Warning</td-button>
          <td-button round type="info">info</td-button>

          <td-button round icon="org-icon-icon_search" type="primary"
            >Search</td-button
          >
        </div>
        <div class="codepadding">
          <td-button circle icon="org-icon-react"></td-button>
          <td-button
            circle
            icon="org-icon-vue"
            type="primary"
          ></td-button>
          <td-button
            circle
            icon="org-icon-js"
            type="success"
          ></td-button>
          <td-button
            circle
            icon="org-icon-angular"
            type="danger"
          ></td-button>
          <td-button
            circle
            icon="org-icon-caishichang-"
            type="warning"
          ></td-button>
          <td-button
            circle
            icon="org-icon-icon_QRcode"
            type="info"
          ></td-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(simple.code.html) }}</code>
      </template>
    </td-demo-block>
    <td-demo-block :height="150" :title="'暗色按钮'" id="button-Black">
      <template v-slot:demo>
        <div class="codepadding" style="background: #000">
          <td-button isblack>Default</td-button>
          <td-button isblack type="danger">Danger</td-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(black.code.html) }}</code>
      </template>
    </td-demo-block>
    <!-- 线性按钮 -->
    <td-demo-block :height="168" :title="'线性按钮'" id="button-Line">
      <template v-slot:demo>
        <td-line-button disabled>Default</td-line-button>
        <td-line-button disabled type="success">Success</td-line-button>
        <td-line-button disabled type="danger">Danger</td-line-button>
        <td-line-button disabled type="warn">warn</td-line-button>
        <td-line-button disabled type="info">info</td-line-button>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(line.code.html) }}</code>
      </template>
    </td-demo-block>
    <!-- 禁用DEMO -->
    <td-demo-block :height="168" :title="'禁用'" id="button-disabled">
      <template v-slot:demo>
        <td-button disabled>Default</td-button>
        <td-button disabled type="success">Success</td-button>
        <td-button disabled type="primary">Primary</td-button>
        <td-button disabled type="danger">Danger</td-button>
        <td-button disabled icon="org-icon-icon_search" type="primary"
          >Search</td-button
        >
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(disabled.code.html) }}</code>
      </template>
    </td-demo-block>

    <!-- 按钮尺寸 -->
    <td-demo-block
      :height="250"
      :title="'按钮尺寸'"
      id="button-Size"
      introduction="自定义修改颜色，其type必须设置为customize"
    >
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
        <div style="margin-top: 10px; padding: 10px; background: #000">
          <td-button isblack size="medium">medium</td-button>
          <td-button isblack size="small">small</td-button>
          <td-button isblack size="mini">mini</td-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(size.code.html) }}</code>
      </template>
    </td-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shn-button-demo',
  data() {
    return {
      thead: ['参数', '说明', '类型', '可选值', '默认值', '支持组件'],
      // a: document.getElementById("router_view_box"),
      simple: {
        code: {
          html: `
           <td-button>Default</td-button>
          <td-button type="success">Success</td-button>
          <td-button type="primary">Primary</td-button>
          <td-button type="danger">Danger</td-button>
          <td-button type="warning">Warning</td-button>
          <td-button type="info">info</td-button>
          <td-button icon="org-icon-icon_search" type="primary">Search</td-button>
          <td-button plain>Default</td-button>
          <td-button plain type="success">Success</td-button>
          <td-button plain type="primary">Primary</td-button>
          <td-button plain type="danger">Danger</td-button>
          <td-button plain type="warning">Warning</td-button>
          <td-button plain type="info">info</td-button>
          <td-button plain icon="org-icon-icon_search" type="primary">Search</td-button>
          <td-button round>Default</td-button>
          <td-button round type="success">Success</td-button>
          <td-button round type="primary">Primary</td-button>
          <td-button round type="danger">Danger</td-button>
          <td-button round type="warning">Warning</td-button>
          <td-button round type="info">info</td-button>
          <td-button round icon="org-icon-icon_search" type="primary">Search</td-button>
          <td-button circle icon="org-icon-react"></td-button>
          <td-button circle icon="org-icon-vue" type="primary"></td-button>
          <td-button circle icon="org-icon-js" type="success"></td-button>
          <td-button circle icon="org-icon-angular" type="danger"></td-button>
          <td-button circle icon="org-icon-caishichang-" type="warning"></td-button>
          <td-button circle icon="org-icon-icon_QRcode" type="info"></td-button>
          `,
        },
      },
      black: {
        code: {
          html: `
         <div class="codepadding" style="background:#000;">
          <td-button isblack>Default</td-button>
          <td-button isblack type="danger">Danger</td-button>
        </div>
          `,
        },
      },
      line: {
        code: {
          html: `
           <td-line-button disabled>Default</td-line-button>
        <td-line-button disabled type="success">Success</td-line-button>
        <td-line-button disabled type="danger">Danger</td-line-button>
        <td-line-button disabled type="warn">warn</td-line-button>
        <td-line-button disabled type="info">info</td-line-button>
          `,
        },
      },
      disabled: {
        code: {
          html: `
          <td-button disabled>Default</td-button>
        <td-button disabled type="success">Success</td-button>
        <td-button disabled type="primary">Primary</td-button>
        <td-button disabled type="danger">Danger</td-button>
        <td-button disabled icon="org-icon-icon_search" type="primary">Search</td-button>
          `,
        },
      },
      size: {
        code: {
          html: `
          <td-button size="medium">medium</td-button>
          <td-button size="small">small</td-button>
          <td-button size="mini">mini</td-button>
          <td-line-button  size="medium">medium</td-line-button>
          <td-line-button  size="small">small</td-line-button>
          <td-line-button  size="mini">mini</td-line-button>
          <td-button isblack size="medium">medium</td-button>
          <td-button isblack size="small">small</td-button>
          <td-button isblack size="mini">mini</td-button>
          `,
        },
      },
      api: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional: 'default / primary / success  / danger / warn / info',
          default: 'default',
          support: 'all',
        },
        {
          parameter: 'size',
          description: '设置按钮大小',
          dataTypes: 'String',
          optional: 'medium/small/mini',
          default: 'medium',
          support: 'all',
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
          support: 'all',
        },
        {
          parameter: 'round',
          description: '是否椭圆按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
          support: 'all',
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
          support: '普通',
        },
        {
          parameter: 'icon',
          description: '按钮图标类名',
          dataTypes: 'String',
          optional: '',
          default: '',
          support: '普通',
        },
        {
          parameter: 'isblack',
          description: '是否开启黑色按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false',
          support: '普通',
        },
      ],
    }
  },

  methods: {},
}
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>
