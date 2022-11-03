<template>
  <div class="content-box">
    <!-- 锚点 -->
    <td-anchor>
      <td-anchor-link href="datePick-Simple" title="基础方法" />
      <td-anchor-link href="attributes" title="属性" />
    </td-anchor>

    <h2 class="demo-title">DatePick 日期选择器</h2>

    <td-demo-block :height="120" :title="'基础方法'" id="datePick-Simple" introduction="以「日」为基本单位，基础的日期选择控件">
      <template v-slot:demo>
        <div class="codepadding">
          <td-date-pick v-model="date"></td-date-pick>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(datePick.code.simple)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="120" :title="'日期格式化-绑定值'" id="datePick-dateFormat" introduction="格式化v-model值, 字符串格式 (年: YYYY, 月: MM, 日: DD);">
      <template v-slot:demo>
        <div class="codepadding">
          <td-date-pick v-model="formatDate" format="YYYY.MM.DD"></td-date-pick>
          <span style="margin-left: 50px">v-model/value: {{ formatDate }}</span>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(datePick.code.formatDate)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="120" :title="'日期格式化-显示值'" id="datePick-displayDateFormat" introduction="格式化显示值, 字符串格式 (年: YYYY, 月: MM, 日: DD);">
      <template v-slot:demo>
        <div class="codepadding">
          <td-date-pick v-model="displayFormatDate" displayFormat="YYYY.MM.DD"></td-date-pick>
          <span style="margin-left: 50px">v-model/value: {{ displayFormatDate }}</span>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(datePick.code.displayFormatDate)}}</code>
      </template>
    </td-demo-block>

    <td-demo-block :height="120" :title="'日历小部件'" id="datePick-Calendar" introduction="以日历的方式展示组件">
      <template v-slot:demo>
        <div class="codepadding">
          <div style="width: 320px; height: 320px;">
            <td-date-pick v-model="calendarDate" :hasInputElement="false"></td-date-pick>
          </div>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(datePick.code.calendar)}}</code>
      </template>
    </td-demo-block>

    <!-- API -->
    <div id="attributes">
      <h3 class="demo-table-title">Attributes</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <td-table-simple :data="attributes" :thead="attrsThead" />
    </div>

    <div id="event">
      <h3 class="demo-table-title">events</h3>
      <P class="demo-table-introduction">事件说明如下：</P>
      <td-table-simple :data="events" :thead="eventsThead" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      date: '',
      calendarDate: '',
      displayFormatDate: '2022-10-12',
      formatDate: '2022.10.12',
      datePick: {
        code: {
          simple: `
          <div class="codepadding">
            <td-date-pick v-model="date"></td-date-pick>
          </div>
          `,
          formatDate: `
          <div class="codepadding">
            <td-date-pick v-model="formatDate" format="YYYY.MM.DD"></td-date-pick>
          </div>
          `,
          displayFormatDate: `
          <div class="codepadding">
            <td-date-pick v-model="displayFormatDate" displayFormat="YYYY.MM.DD"></td-date-pick>
          </div>
          `,
          calendar: `
          <div style="width: 320px; height: 320px;">
            <td-date-pick v-model="inputDate" :hasInputElement="false"></td-date-pick>
          </div>
          `
        }
      },
      attrsThead: ['参数', '说明', '类型', '可选值', '默认值', '支持组件'],
      attributes: [
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'String',
          optional: '',
          default: '',
          support: ''
        },
        {
          parameter: 'hasInputElement',
          description: '是否显示输入框',
          dataTypes: 'Boolean',
          optional: '',
          default: 'true',
          support: ''
        },
        {
          parameter: 'format',
          description: '格式化日期绑定值',
          dataTypes: 'String',
          optional: '',
          default: 'YYYY-MM-DD',
          support: ''
        }
      ],
      eventsThead: ['事件名称', '说明', '回调参数'],
      events: [
        {
          parameter: 'periodChange',
          description: '用户确认选定的值时触发',
          callback: '{ year, month, date }'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
