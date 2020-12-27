/* 
    包含应用的所有接口,
    函数内部调用ajax函数发送请求
    函数返回的是promise对象
*/

import ajax from './ajax'
import mockAjax from './mockAjax'
/* 
    首页三级分类
    /api/product/getBaseCategoryList  GET
*/
export function reqCategoryList(){
    /* return ajax.get('/product/getBaseCategoryList') */
    /* return ajax('/product/getBaseCategoryList')//发不带参数的get请求
     */
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get'//如果是get请求可不写
    })
}

export function reqBannerList(){
    return ajax({
        url:'/cms/banner'
    })
}

export function reqFloors(){
    return mockAjax({
        url:'floors'
    })
}
export function reqRecommends(){
    return mockAjax({
        url:'/recommends'
    })
}
export const reqSearch = (searchParams)=>ajax.post('/list',searchParams)
export const reqRank = ()=>mockAjax('/rank')
export const reqLike = ()=>mockAjax('/like')
