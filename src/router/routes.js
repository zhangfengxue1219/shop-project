import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default [
    {
        path:'/',
        component:Home
    },
    /* { */
        /* 编程式导航对应的params配置 */
      /*   path:'/search/:keyword',
        component:Search,
        
    }, */
    {
        //编程式导航对应name传参配置
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        //可用props传递
        props:(route)=>({
            keyword3:route.params.keyword,
            keyword4:route.query.keyword2
        })
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
]