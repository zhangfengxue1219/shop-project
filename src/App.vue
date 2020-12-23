<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {getCategoryList} from './api/index'
export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted(){
    //异步获取三级分类列表
    getCategoryList().then(result=>{
      console.log(result)
    })
  }
}
</script>

<style lang="less" scoped>

</style>
