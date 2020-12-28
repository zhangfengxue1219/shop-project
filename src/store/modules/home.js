import {reqCategoryList,reqBannerList,reqFloors} from '@/api'

const state = {
    categoryList : [],
    BannerList:[],
    Floors:[]
}
const mutations = {
    REQUEST_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.splice(0,15)
    },
    REQUEST_BANNER_LIST(state,BannerList){
        state.BannerList = BannerList
    },
    REQUEST_FLOORS_LIST(state,Floors){
        state.Floors = Floors
    }
}
const actions = {
    //发送异步ajax请求
  async  getCategoryList({commit}){
      const result = await reqCategoryList()
        if(result.code===200){
            const categoryList = result.data
            commit('REQUEST_CATEGORY_LIST',categoryList)
        }
      
  },
  async getBannerList({commit}){
    const result = await reqBannerList()
    if(result.code === 200){
        const BannerList = result.data
        commit('REQUEST_BANNER_LIST',BannerList)
    }
  },
  async getFloors({commit}){
      const result = await reqFloors()
      if(result.code === 200){
          commit('REQUEST_FLOORS_LIST',result.data)
      }
  }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}