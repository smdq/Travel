import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/page/home/Home'
//import City from '@/page/city/City'
//import Detail from '@/page/detail/Detail'

// 异步加载组件（）=>import("")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () =>import('@/page/home/Home')
    },
    {
      path:'/city',
      name:'City',
      component:() =>import('@/page/city/City')
    },{
      path:'/detail/:id',
      name:'Detail',
      component:() =>import('@/page/detail/Detail')
    }
  ]
})
