import Vue from 'vue'
import App from './App.vue'
import './../public/css/font-awesome.css'
import './../public/css/index.css'
import router from '@/router'
import Elementui from 'element-ui'
import {Tabs} from 'element-ui'


Vue.config.productionTip = false
Vue.use(Elementui)
Vue.use(Tabs)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
