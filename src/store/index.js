import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import use from './modules/use'
Vue.use(Vuex)
const state = {

}
const mutations = {

}
const actions = {

}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        use
    }
})