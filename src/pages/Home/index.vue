<template>
  <div>
    <TypeNav/>
    <ListContainer></ListContainer>
    <TodayRecommend/>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(Floor) in Floors" :key="Floor.id" :Floor="Floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted(){
    this.$store.dispatch('getFloors')
  },
   computed:{
    ...mapState({Floors:state=>state.home.Floors})
  }
}
</script>

<style lang="less" scoped>

</style>
