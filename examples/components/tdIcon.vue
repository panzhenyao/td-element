<template>
  <div class="content-box">
    <h2 class="demo-title">td 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>
    <div class="demo-tip">
      <p>该项目使用 iconfont 图标库</p>
      <p>
        <!-- <a
          href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1915698"
          target="_blank"
          >https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1915698</a
        > -->
      </p>
    </div>

    <td-back-top :visibilityHeight="300" />

    <div class="td-td" id="td-simple">
      <!-- 使用方法DEMO -->
      <td-demo-block
        :height="294"
        :introduction="'直接通过设置类名为 td-icon- 来使用即可。例如：'"
        :title="'使用方法'"
      >
        <template v-slot:demo>
          <i class="td-icon-guge" style="margin: 0 20px"></i>
          <i class="td-icon-huohu" style="margin: 0 20px"></i>
          <i class="td-icon-if_edge_" style="margin: 0 20px"></i>
          <i class="td-icon-steam" style="margin: 0 20px"></i>
          <i class="td-icon-vue" style="margin: 0 20px"></i>
          <i class="td-icon-react" style="margin: 0 20px"></i>
          <i class="td-icon-angular" style="margin: 0 20px"></i>
          <i class="td-icon-jq" style="margin: 0 20px"></i>
          <i class="td-icon-node1" style="margin: 0 20px"></i>
          <i class="td-icon-huaban88" style="margin: 0 20px"></i>
          <i class="td-icon-dota" style="margin: 0 20px"></i>
          <i class="td-icon-zhihu" style="margin: 0 20px"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(simple.code.html) }}</code>
        </template>
      </td-demo-block>

      <!-- 常用图标 -->
      <div id="td-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="td-list">
          <li
            :class="{ rigth_block: index % 5 === 4 }"
            :key="item"
            v-for="(item, index) in ofen_icon_list"
          >
            <div>
              <i :class="item"></i>
              <p class="shn-name">{{ item }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'td-icon',
  data() {
    return {
      // 基础用法DEMO
      simple: {
        code: {
          html: `<i class="td-icon-guge" style="margin: 0 20px;"></i>
          <i class="td-icon-huohu" style="margin: 0 20px;"></i>
          <i class="td-icon-if_edge_" style="margin: 0 20px;"></i>
          <i class="td-icon-steam" style="margin: 0 20px;"></i>
          <i class="td-icon-vue" style="margin: 0 20px;"></i>
          <i class="td-icon-react" style="margin: 0 20px;"></i>
          <i class="td-icon-angular" style="margin: 0 20px;"></i>
          <i class="td-icon-jq" style="margin: 0 20px;"></i>
          <i class="td-icon-node1" style="margin: 0 20px;"></i>
          <i class="td-icon-huaban88" style="margin: 0 20px;"></i>
          <i class="td-icon-dota" style="margin: 0 20px;"></i>
          <i class="td-icon-zhihu" style="margin: 0 20px;"></i>`,
        },
      },
      ofen_icon_list: [
        'td-icon-js',
        'td-icon-arrow-up',
        'td-icon-leftarrow',
        'td-icon-Rightarrow',
        'td-icon-arrow-down',
        'td-icon-kehuishouwu-niunaihe',
        'td-icon-svgmoban14',
        'td-icon-node',
        'td-icon-icon_add',
        'td-icon-icon_addmessage',
        'td-icon-icon_addresslist',
        'td-icon-icon_addperson',
        'td-icon-icon_boss',
        'td-icon-icon_alipay_line',
        'td-icon-icon_at',
        'td-icon-icon_exchange',
        'td-icon-icon_dingtalk_line',
        'td-icon-icon_qq',
        'td-icon-icon_medal',
        'td-icon-icon_QRcode',
        'td-icon-icon_refresh',
        'td-icon-icon_search',
        'td-icon-icon_sketch',
        'td-icon-icon_wechat',
        'td-icon-icon_shield',
        // "td-icon-icon_task_done",
        // "td-icon-caishichang-",
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.td-td {
  i {
    font-size: 28px;
  }
  .td-list {
    width: 100%;
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    .rigth_block {
      border-right: 0 !important;
    }
    li {
      float: left;
      width: 20%;
      text-align: center;
      height: 166px;
      color: #666;
      font-size: 13px;
      // border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.15s ease-in-out;
      &:hover {
        background: #409eff;
        div {
          color: #fff;
        }
        i {
          color: #fff;
          font-size: 40px;
        }
      }
      div {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
        color: #99a9bf;
        transition: all 0.15s ease-in-out;
        i {
          font-size: 32px;
          color: #606266;
          transition: all 0.15s ease-in-out;
        }
        .shn-name {
          padding: 20px 0;
          height: 1em;
        }
      }
    }
  }
}
</style>
