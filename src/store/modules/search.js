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
        //因为不想删除search组件中的options中的属性
        searchParams = {...searchParams}
        //删除searchParams中的空串或数组
        Object.keys(searchParams).forEach(key=>{
            if(searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length===0)){
                delete searchParams[key]
            }
        })
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
    },
    total(state){
        return state.productList.total || 1
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}