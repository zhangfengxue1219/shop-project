/* 
    包含所有接口请求函数的模块
*/
import ajax from './ajax'
//获取商品的三级分类类别
export function reqCategoryList(){
  return  ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
       })
}
export function reqBannerList(){
  return ajax({
    url:'/cms/banner',
   /*  method:'get' */
  })
}