import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/login/home'
import login from '@/views/login/login'
import register from '@/views/login/register'
import loginsucess from '@/views/login/loginsucess'


Vue.use(Router)


//数据处理相关
// import loginsuc from '@/views/dataprocess/loginsuc'
// import datapro from '@/views/dataprocess/datapro'
import databrowser from '@/views/dataprocess/databrowser'
import data_assess from '@/views/dataprocess/data_assess'
import weight_allo from '@/views/dataprocess/weight_allo'

import data_visualization from '@/views/dataprocess/data_visualization'
import echarts_test from '@/views/test/echarts_test'
import evaluation_report from '@/views/dataprocess/evaluation_report'

import update_password from '@/views/user/update_password'
import update_profile from '@/views/user/update_profile'

export default new Router({//整个访问流程是：前端请求地址path，然后通过这里配置的路由component去对应找到相应的vue页面
  routes: [                 //比如 path: '/login/login' 找到component: login 再对应到import login from '@/views/login/login' 在/views/login下找login.vue
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
      path: '/login/loginsucess',
      name: 'loginsucess',
      component: loginsucess
    },
//{
//   path: '/dataprocess/loginsuc',
//   component: loginsuc,
//   children: [
//     {
//       path: "/dataprocess/datapro",
//       name: 'datapro',
//       component: datapro
//     },
    {
      path: "/dataprocess/databrowser",
      name: 'databrowser',
      component: databrowser
    },
    {
      path: "/dataprocess/data_assess",
      name: 'data_assess',
      component: data_assess
    },
    {
      path: "/dataprocess/weight_allo",
      name: '权重分配',
      component: weight_allo
    },
    {
      path: "/dataprocess/data_visualization",
      name: '数据可视化',
      component: data_visualization
    },
    {
      path: "/dataprocess/echarts_test",
      name: '数据可视化测试',
      component: echarts_test
    },
    {
      path: "/user/update_password",
      name: '修改密码',
      component: update_password
    },
    {
      path: "/user/update_profile",
      name: '修改资料',
      component: update_profile
    },
    {
      path: "/dataprocess/evaluation_report",
      name: '评价报告',
      component: evaluation_report
    }
    //   ]
    // }

  ]//routes end
})
