<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hiddenShow" @mouseenter="ShowFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="splice">
          <div class="sort" v-show="isShowFirst">
              <div class="all-sort-list2" @click="toSearch" >
          <div class="item" v-for="(C1,index) in categoryList" :key="C1.categoryId" :class="{active:currentIndex===index}" @mouseenter="showSubList(index)">
            <h3>
              <a href="javascript:;" :data-categoryName="C1.categoryName" :data-category1Id="C1.categoryId">{{C1.categoryName}}</a>
               <!-- <a href="javascript:;">{{ C1.categoryName}}</a> -->
               <!-- <router-link :to="`/search?categoryName=${C1.categoryName}`">{{ C1.categoryName}}</router-link> -->
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="C2 in C1.categoryChild"
                  :key="C2.categoryId"
                >
                  <dt>
                    <a
                      href="javascript:;"
                      :data-categoryName="C2.categoryName"
                      :data-category2Id="C2.categoryId"
                      >{{ C2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em v-for="C3 in C2.categoryChild" :key="C3.categoryId">
                      <a
                        href="javascript:;"
                        :data-categoryName="C3.categoryName"
                        :data-category3Id="C3.categoryId"
                        >{{ C3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
     
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
export default {
  name: "TypeNav",
  data(){
   
    return {
      isShowFirst : false,
      currentIndex : -2
    }
  },
  created(){
    if(this.$route.path === '/'){
      this.isShowFirst = true
    }
  },
  computed: {
    categoryList() {
      return this.$store.state.home.categoryList;
    },
  },
  methods: {
     hiddenShow(){
      this.currentIndex = -2
      if(this.$route.path !== '/'){
        this.isShowFirst = false
      } 
    },
    
    ShowFirst(){
      this.currentIndex = -1
      this.isShowFirst=true
    },
   
    showSubList: throttle(function(index){
      if(this.currentIndex !== -2){
        this.currentIndex = index
      }
    },500),
    toSearch(event) {
      const {
        categoryname,
        category3id,
        category2id,
        category1id,
      } = event.target.dataset
      if (categoryname) {
        const query = {
          categoryName: categoryname,
        }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else if (category3id) {
          query.category3Id = category3id
        }

        const location = {
          name: 'search',
          query,
          params:this.$route.params
        }
        if(this.$route.name === 'search'){
          this.$router.replace(location)
        }else{
        this.$router.push(location)
        }
        this.hiddenShow()

      }
    }
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.splice-enter, &.splice-leave-to{
        opacity: 0;
        height: 0;
      }
      &.splice-enter-active, &.splice-leave-active{
        transition: all .3s;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background:#ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
