import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/theme/font/iconfont.css'
import '../public/theme/base.scss'

import element from '../packages/index'

Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
