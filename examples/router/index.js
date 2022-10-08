import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

// 组件
import component from './component'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/component/installation',
    children: [
      ...component
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router
