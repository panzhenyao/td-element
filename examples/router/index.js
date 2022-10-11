import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index.vue'

// 其它页面
import views from './views'
// 组件
import components from './components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/views/installation',
    children: [
      ...views,
      ...components
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router
