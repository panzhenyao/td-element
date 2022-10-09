import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import router from './router'
import '../public/theme/base.scss'
import '../packages/theme-chalk/src/index.scss'
import '../util'
import element from '../src/index'
Vue.use(VueHighlightJS) 
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
