/* 
    axios二此封装
    1.配置通用的基础路径和超时
    2.显示请求进度点
    3.成功返回的数据不在式response，而直接是响应体data
    4.统一处理请求错误，具体请求也可以选择处理或不处理
*/
//1.引入axios 和 nprogress
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//2.配置通用的基础路径和超时
//service是一个能发任意Ajax请求的函数，当然可以作为对象使用
const service = axios.create({
    baseURL:'http://39.99.186.36/api',//基础路径
    /* baseURL:'/api', */
    timeout:20000//超时时间
})
//3.设置请求拦截器
service.interceptors.request.use((config)=>{
    //5.显示请求进度条
    NProgress.start()

    //必须返回config,后面会根据config，使用xhr对象发送Ajax请求
    return config
})
//4.设置响应拦截器
service.interceptors.response.use(
    response=>{
        //6. 隐藏请求进度条：在相应拦截器成功的回调中
        NProgress.done()
        //请求成功返回的回调,成功后返回的数据不在是response，而直接是响应体数据的response.data
        return response.data
    },
    error=>{
        //7.隐藏请求进度条，在响应拦截器中拦截失败的回调
        NProgress.done()
        //8.统一处理请求错误，具体请求可以选择处理或不处理
        alert(error.message || '未知的请求错误')
        //请求失败返回的回调
        return Promise.reject(error)
    }
)
export default service