<template>
  <div>
    <!-- 编程式导航携带params参数 -->
    <h2>编程式导航携带params参数params.keyword:{{$route.params.keyword}}</h2>
    <h2>编程式导航携带params/query参数:{{$route.params.keyword}}{{$route.query.keyword}}</h2>
    <h2>编程式导航name对象方式传参:{{$route.params.keyword}}{{$route.query.keyword2}}</h2>
    <h2>编程式导航props传params:{{keyword3}}</h2>
    <h2>编程式导航props传query:{{keyword4}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword3','keyword4']
}
</script>

<style lang="less" scoped>

</style>
