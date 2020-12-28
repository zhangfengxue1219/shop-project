<template>
  <div>
      <Header></Header>
      <router-view></router-view>
      <Footer v-if="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
      Header,
      Footer
  },
  mounted(){
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
  },
 
}
</script>

<style lang="less" scoped>

</style>
