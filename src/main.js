import Vue from 'vue'
import App from './App.vue'
import '@/config/font-awesome.css'
import '@/config/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
