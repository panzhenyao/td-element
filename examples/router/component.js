import Installation from '../components/installation'
import Button from '../components/Button'
import IconDemo from '../components/orangeIcon.vue'

export default [
  {
    path: '/component/installation',
    name: 'installation',
    component: Installation,
    meta: {
      title: '组件指南',
    },
  },
  {
    path: '/component/button',
    name: 'button',
    component: Button,
    meta: {
      title: '组件|Button',
    },
  },
  {
    path: '/component/icon',
    name: 'IconDemo',
    component: IconDemo,
    meta: {
      title: '组件|IconDemo',
    },
  },
]
