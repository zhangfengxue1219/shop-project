import {reqSearch} from '@/api'
const state = {
   productList:{}
}
const mutations = {
    REQUEST_SEARCH(state,productList){
        state.productList = productList
    }
}
const actions = {
    async getSearch({commit},searchParams){
        const result = await reqSearch(searchParams)
        if(result.code === 200){
            commit('REQUEST_SEARCH',result.data)
        }
    }
}
const getters = {
    goodsList(state){
        return state.productList.goodsList || []
    },
    attrsList(state){
        return state.productList.attrsList || []
    },
    trademarkList(state){
        return state.productList.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}