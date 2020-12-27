import Vue from 'vue'
import App from '@/App'
import store from './store'
import router from './router'
import TypeNav from '@/components/TypeNav'
import './plugins/swiper'
import './mock/mockServer'
Vue.config.productionTip = false
//全局注册组件
Vue.component(TypeNav.name,TypeNav)
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')

