import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import xiangmu from './modules/xiangmu'
import shuju from './modules/shuju'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home',
      hide: true
    },
    {
      path: '/Index',
      name: '首页',
      component: Layout,
      redirect: '/Home',
      hide: true,
      children: [
        {
          path: '/Home',
          component: () => import('@/views/Home/Home.vue'),
          name: '首页'
        }
      ]
    },
    xiangmu,
    shuju
  ]
})
