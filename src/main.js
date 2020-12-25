import Vue from 'vue'
import router from '@/router/index'
import store from './store'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import './plugins/swiper'
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false
new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})
