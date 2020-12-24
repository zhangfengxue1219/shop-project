import Vue from 'vue'
import App from '@/App'
import store from './store'
import router from './router'
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false
//全局注册组件
Vue.component(TypeNav.name,TypeNav)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

