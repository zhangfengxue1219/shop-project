import Vue from 'vue'
import router from '@/router/index'
import store from './store'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import './plugins/swiper'
import './mock/mockSever'
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    el:'#app',
    router,
    store,
    render:h=>h(App)
})
