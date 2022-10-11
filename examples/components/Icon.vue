<template>
  <div class="content-box">
    <!-- 锚点 -->
    <td-anchor>
      <td-anchor-link href="td-simple" title="使用方法" />
      <td-anchor-link href="td-ofen-list" title="常用图标" />
    </td-anchor>

    <h2 class="demo-title">td 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>
    <div class="demo-tip">
      <p>该项目使用 iconfont 图标库, 对项目图标统一管理</p>
      <p>
        <!-- <a
          href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1915698"
          target="_blank"
          >https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1915698</a
        > -->
      </p>
    </div>

    <div class="demo-icon" id="td-simple">
      <!-- 使用方法DEMO -->
      <td-demo-block :height="130" :introduction="'直接通过设置类名为 td-icon- 来使用即可。例如：'" :title="'使用方法'">
        <template v-slot:demo>
          <i class="td-icon-gitee"></i>
          <i class="td-icon-chrome"></i>
          <i class="td-icon-github"></i>
          <i class="td-icon-edge"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(simple.code.html) }}</code>
        </template>
      </td-demo-block>

      <!-- 常用图标 -->
      <div id="td-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="td-list">
          <li :class="{ rigth_block: index % 5 === 4 }" :key="item" v-for="(item, index) in open_icon_list">
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
import icons from '@/icon.json'
export default {
  name: 'td-icon',
  data() {
    const iconsList = icons.map(name => `td-icon-${name}`)
    return {
      // 基础用法DEMO
      simple: {
        code: {
          html: `
          <i class="td-icon-gitee"></i>
          <i class="td-icon-chrome"></i>
          <i class="td-icon-github"></i>
          <i class="td-icon-edge"></i>`
        }
      },
      open_icon_list: iconsList
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-icon {
  i {
    font-size: 28px;
    &[class^='td-icon'] {
      margin: 0 20px;
    }
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
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.15s ease-in-out;
      &:hover {
        background: rgba($--main-fill-color-1, 0.7);
        div {
          color: #fff;
        }
        i {
          color: #fff;
          font-size: 40px;
        }
      }
      div {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
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
