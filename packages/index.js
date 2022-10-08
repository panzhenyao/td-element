import '../public/theme/font/iconfont.css'
import '../public/theme/base.scss'
import Button from './Button'
import Anchor from './Anchor'
import AnchorLink from './AnchorLink'
import BackTop from './BackTop'
import DemoBlock from './DemoBlock'

// 存储组件列表
const components = [
  Button,
  Anchor,
  AnchorLink,
  BackTop,
  DemoBlock
]
const PRE_MARK = 'orange'
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map((component) => {
    let componentName = `${PRE_MARK}${component.name}`
    return Vue.component(componentName, component)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const componentsData = {}
components.forEach(component => {
  let name = component.name
  componentsData[`${PRE_MARK}${name}`] = component
})

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...componentsData
}
