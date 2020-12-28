/* 
    二次封装axios
*/

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//配置通用的基础路径和超时时间
const service = axios.create({
    baseURL:'/mock',
    timeout:20000
})
//添加请求拦截器
service.interceptors.request.use((config)=>{
    //添加进度条
    NProgress.start()
    return config
})
//添加响应拦截器
service.interceptors.response.use(
    response=>{
        //隐藏进度条
        NProgress.done()
        return response.data
    },
    error=>{
        //隐藏进度条
        NProgress.done()
        //打印错误
        alert(error.message || '未知错误')
        //将错误传递下去，外面可以选中处理或不处理
        throw error
    }
)
export default service