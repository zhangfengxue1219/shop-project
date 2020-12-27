<template>
  <div>
    <!-- 三种使用方式 -->
    <!-- <type-nav /> -->
    <!-- <TypeNav/> -->
    <TypeNav></TypeNav>
    <listContainer></listContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor) in floors" :key="floor.id" :floor='floor'></Floor>
   
    <Brand></Brand>
  </div>
</template>

<script>

import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommed'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  mounted(){
    this.$store.dispatch('getFloorsList')
    this.$store.dispatch('getRecommendsList')
    this.$store.dispatch('getRank')
    this.$store.dispatch('getLike')
  },
  computed:{
    ...mapState({floors:state=>state.home.floors})
  },
  components:{
   
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style lang="less" scoped>
  
</style>
