import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/login/home'
import login from '@/views/login/login'
import register from '@/views/login/register'

Vue.use(Router)


//数据处理相关
import loginsuc from '@/views/dataprocess/loginsuc'
import datapro from '@/views/dataprocess/datapro'
import databrowser from '@/views/dataprocess/databrowser'
import data_assess from '@/views/dataprocess/data_assess'
import weight_allo from '@/views/dataprocess/weight_allo'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login/login',
      name: 'login',
      component: login
    },
    {
      path: '/login/register',
      name: 'register',
      component: register
    },
    {
      path: '/loginsuc',
      component: loginsuc,
      children: [
        {
          path: "/dataprocess/datapro",
          component: datapro
        },
        {
          path: "/dataprocess/databrowser",
          component: databrowser
        },
        {
          path: "/dataprocess/data_assess",
          component: data_assess
        },
        {
          path: "/dataprocess/weight_allo",
          component: weight_allo
        },
      ]
    },

  ]
})
