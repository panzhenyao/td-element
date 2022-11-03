<template>
  <div class="content-box page-changelog">
    <h2 class="demo-title">更新日志</h2>
    <ul class="timeline">
      <li v-for="(log, index) in logData" :key="index">
        <h3>
          <span>{{ log.version }}</span>
        </h3>
        <p>
          <em>{{ log.date }}</em>
        </p>
        <template v-for="(logItem, j) in log.list">
          <div :key="j">
            <h4>
              {{ logItem.type }}
            </h4>
            <ul>
              <li v-for="(detail,k) in logItem.data" :key="k">
                {{ detail.title }}
                <ul v-for="(txt, n) in detail.texts" :key="n">
                  <li>{{ txt }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </template>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      logData: [
         {
          version: '0.1.14',
          date: '2022-10-18',
          list: [
            {
              type: 'feat 开发',
              data: [
                {
                  title: 'Breadcrumb',
                  texts: [
                    '新增Breadcrumb组件的功能',
                    '调整Breadcrumb组件的功能,在非drg-front项目下使用场景',
                    '新增Breadcrumb组件的描述文档'
                  ]
                },
                {
                  title: 'Link',
                  texts: [
                    '新增suffix-icon属性,用于显示文本后的图标类名'
                  ]
                }
              ]
            },
            {
              type: 'fix 缺陷修复',
              data: [
                {
                  title: 'breadcrumb-item',
                  texts: [
                    '当属性to为字符串时跳转缺陷处理',
                  ]
                },
              ]
            }
          ]
        },
        {
          version: '0.1.13',
          date: '2022-10-12',
          list: [
            {
              type: 'feat 开发',
              data: [
                {
                  title: 'Link',
                  texts: [
                    '新增Link组件的功能',
                    '调整Link组件的功能,在非drg-front项目下使用场景',
                    '新增Link组件的描述文档'
                  ]
                }
              ]
            },
            {
              type: 'fix 缺陷修复',
              data: [
                {
                  title: 'Link',
                  texts: [
                    '对非DRG项目跳转得优化',
                  ]
                }
              ]
            }
          ]
        },
        {
          version: '0.1.11',
          date: '2022-10-11',
          list: [
            {
              type: 'feat 开发',
              data: [
                {
                  title: 'Anchor',
                  texts: [
                    '新增Anchor组件的描述文档',
                    '完善Anchor组件,target,anchorClass属性描述',
                    '完善AnchorLink组件 herf, title 属性描述'
                  ]
                },
                {
                  title: 'logDesc',
                  texts: ['新增开发日志文档组件页面']
                }
              ]
            },
            {
              type: '优化',
              data: [
                {
                  title: 'Icon',
                  texts: ['新增公司logo icon图标']
                }
              ]
            }
          ],
          type: '优化'
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
.page-changelog {
  .timeline {
    padding: 0 0 10px;
    position: relative;
    color: #5e6d82;
    > li:not(:last-child) {
      margin-bottom: 50px;
    }
    > li {
      position: relative;
      padding-bottom: 15px;
      list-style: none;
      line-height: 1.8;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    li li {
      font-size: 16px;
      list-style: none;
      padding-left: 20px;
      padding-bottom: 5px;
      color: #333;
      word-break: break-all;
      &::before {
        content: '';
        circle: 6px #333;
        transform: translateX(-20px);
        display: inline-block;
        vertical-align: middle;
      }
    }
    ul ul {
      padding: 5px 0 0 27px;
      margin-block-start: 0px;
      margin-block-end: 0px;
      li {
        &::before {
          content: '';
          circle: 4px #fff;
          border: 1px solid #333;
          margin-right: -12px;
          display: inline-block;
          vertical-align: middle;
        }
        padding-left: 0;
        color: #555;
        word-break: normal;
      }
      ul {
        list-style-type: square;
      }
    }

    h3 {
      margin: 0;
      padding: 15px 30px;
      border-bottom: 1px solid #ddd;
      font-size: 20px;
      color: #333;
      font-weight: 700;
      > span {
        display: inline-block;
        opacity: 1;
        font-size: 20px;
        float: none;
        margin-left: 0;
        color: #333;
      }
    }

    h4 {
      margin: 0 0 -10px;
      font-size: 18px;
      padding-left: 54px;
      padding-top: 30px;
      font-weight: 700;
    }

    em {
      position: absolute;
      right: 30px;
      font-style: normal;
      top: 23px;
      font-size: 16px;
      color: #666;
    }

    ul {
      padding: 30px 30px 15px;
    }
  }
}

.page-changelog {
  h3 {
    font-size: 22px;
  }

  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
