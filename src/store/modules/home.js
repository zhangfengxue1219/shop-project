import {reqCategoryList,reqBannerList,reqFloors,reqRecommends,reqRank,reqLike} from '@/api'
const state = {
    categoryList : [],
    BannerList:[],
    floors:[],
    recommends:[],
    rank:[],
    like:[]
}
const mutations = {
    REQUSET_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.splice(0,15)
    },
    REQUEST_BANNER_LIST(state,BannerList){
        state.BannerList = BannerList
    },
    REQUEST_FLOOR_LIST(state,floors){
        state.floors = floors
    },
    REQUEST_RECOMMENDS_LIST(state,recommends){
        state.recommends = recommends
    },
    REQUEST_RANK_LIST(state,rank){
        state.rank = rank
    },
    REQUEST_LIKE_LIST(state,like){
        state.like = like
    }
}
const actions = {
  async getCategoryList({commit}){
      const result = await reqCategoryList()
      if(result.code === 200){
          const categoryList = result.data
          commit('REQUSET_CATEGORY_LIST',categoryList)
      }
  },
  async getBannerList({commit}){
      const result = await reqBannerList()
      if(result.code===200){
        const BannerList = result.data
        commit('REQUEST_BANNER_LIST',BannerList)
      }
  },
  async getFloorsList({commit}){
        const result = await reqFloors()
        if(result.code === 200){
            const floors = result.data
            commit('REQUEST_FLOOR_LIST',floors)
        }
  },
  async getRecommendsList({commit}){
      const result = await reqRecommends()
      if(result.code === 200){
          const recommends = result.data
          commit('REQUEST_RECOMMENDS_LIST',recommends)
      }
  },
  async getRank({commit}){
    const result = await reqRank()
    if(result.code === 200){
        commit('REQUEST_RANK_LIST',result.data)
    }
  },
  async getLike({commit}){
      const result = await reqLike()
      if(result.code === 200){
          commit('REQUEST_LIKE_LIST',result.data)
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