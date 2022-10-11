<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <i class="td-icon-tianda" style="margin: 0 20px; font-size: 32px"></i>

        <span class="title">Td-Element</span>

        <span class="version">v{{ version }}</span>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <ul>
          <li :key="navGroup.title" class="nav-item" v-for="navGroup in ul_data">
            <template v-if="navGroup.li_data.length === 1">
              <a :class="[{ 'active': active == navGroup.li_data[0].id }, 'group-link']" :href="navGroup.li_data[0].path"
                @click="active = navGroup.li_data[0].id">{{ navGroup.li_data[0].name }}</a>
            </template>
            <template v-else>
              <a>{{ navGroup.title }}</a>
              <ul class="pure-menu-list" v-if="navGroup.li_data.length != 0">
                <li :key="item.path" class="nav-item" v-for="item in navGroup.li_data">
                  <div class="nav-group__title" v-if="item.group">
                    {{ item.group }}
                  </div>
                  <a :class="{ active: active == item.id }" :href="item.path" @click="active = item.id">{{ item.name }}</a>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
      <div class="content" id="router_view_box">
        <router-view />
      </div>
      <td-back-top :visibilityHeight="300" />
    </div>
  </div>
</template>

<script>
import componentsRoutes from '@/router/components'
export default {
  name: 'home',
  data() {
    return {
      version: require('../../../package.json').version,
      active: -2,
      ul_data: [
        {
          title: '更新日志',
          li_data: [{ id: -1, name: '更新日志', path: '#/views/log-desc' }]
        },
        {
          title: '开发指南',
          li_data: [
            { id: -2, name: '安装/快速上手', path: '#/views/installation' },
            { id: -3, name: '设计规范', path: '#/views/standard' }
          ]
        },
        // 默认规定最后项留给组件展示
        {
          title: '组件',
          li_data: []
        }
      ],
      sidebarHover: false
    }
  },
  watch: {
    $route: function (to, from) {
      if (from.path !== to.path) {
        document.documentElement.scrollTop = 0
      }
    }
  },
  created() {
    this.parseCompMenu()
  },
  mounted() {
    this.showHistoryCurrent()
  },
  methods: {
    // 解析组件菜单
    parseCompMenu() {
      const compMenus = componentsRoutes.map((route, index) => {
        const item = {
          id: `${index}`.padStart(3, '0'),
          path: `#${route.path}`,
          name: '',
          group: ''
        }
        if (route.meta) {
          item.name = route.meta.title
          item.group = (route.meta && route.meta.group) || null
        }
        return item
      })
      this.ul_data[this.ul_data.length - 1].li_data = compMenus
    },
    showHistoryCurrent() {
      this.ul_data.forEach(navGroup => {
        navGroup.li_data.forEach(item => {
          if (item.path.substring(1) === this.$router.history.current.fullPath) {
            this.active = item.id
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fff;
    .container {
      height: 100%;
      width: 1140px;
      margin: 0 auto;
      padding: 0 10px;
      border-bottom: 1px solid #dcdfe6;
      .title {
        // color: $--color-primary;
        color: $--main-fill-color-1;
        font-size: 26px;
        font-weight: 500;
        font-family: '微软雅黑';
      }
      .version {
        margin-left: 20px;
        font-size: 12px;
      }
      .td-icon-tianda {
        margin: 0 20px;
        font-size: 32px;
        font-weight: 500;
        color: $--main-fill-color-1;
      }
    }
  }
  .main {
    position: relative;
    width: 1140px;
    height: -webkit-calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 10px 0;
    top: 80px;
    display: flex;
    // transform: translate(0, 0);
    // overflow: auto;
    // visibility: hidden;
    // &:focus,
    // &:hover {
    //   visibility: visible;
    // }
    .sidebar {
      position: fixed;
      margin-right: 40px;
      width: 200px;
      height: 80%;
      top: 135px;
      visibility: hidden;
      overflow: auto;
      &:hover {
        visibility: visible;
      }
      > ul {
        visibility: visible;
      }
      .nav-item {
        list-style: none;
        .group-link {
          &:hover {
            color: $--main-fill-color-1;
          }
          &.active {
            color: $--main-fill-color-1;
          }
        }
        a {
          font-size: 15px;
          color: #333;
          line-height: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          text-decoration: none;
          display: block;
          position: relative;
          transition: 0.15s ease-out;
          font-weight: 700;
        }
        .nav-group__title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
        }
        .pure-menu-list {
          a {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            &:hover {
              color: $--main-fill-color-1;
            }
          }
          .active {
            color: $--main-fill-color-1;
          }
        }
      }
    }
    .content {
      flex: 1;
      width: 100%;
      padding: 0 50px 0 10px;
      margin-left: 240px;
    }
  }
}
</style>
