import Vue from 'vue'
import Router from 'vue-router'
//登录注册相关
import home from '@/views/login/home'
import login from '@/views/login/login'
import register from '@/views/login/register'
// import loginsucess from '@/views/login/loginsucess'
//数据处理相关
import single_page_home from '@/views/components/single_page_home'
// import loginsuc from '@/views/dataprocess/loginsuc'
// import datapro from '@/views/dataprocess/datapro'
import databrowser from '@/views/dataprocess/databrowser'
import evaluation_init from '@/views/dataprocess/evaluation_init'
import data_assess from '@/views/dataprocess/data_assess'
import weight_allo from '@/views/dataprocess/weight_allo'

import data_visualization from '@/views/dataprocess/data_visualization'
import mixChart from '@/views/charts/mixChart'
import echarts_test from '@/views/test/echarts_test'
import evaluation_report from '@/views/dataprocess/evaluation_report'

import update_password from '@/views/user/update_password'
import update_profile from '@/views/user/update_profile'

Vue.use(Router)

export default new Router({//整个访问流程是：浏览器输入地址然后会来到这里的路由匹配相应的地址path，
                            // 然后通过这里配置的路由component去对应找到相应的vue页面
  routes: [                 //比如 path: '/login/login' 找到component: login 再对应到import login from '@/views/login/login' 在/views/login下找login.vue
    {
      path: '/',
      name: '欢迎页面',
      hidden: true,
      component: home
    },
    {
      path: '/login/login',
      name: '登录',
      hidden: true,
      component: login
    },
    {
      path: '/login/register',
      name: '注册',
      hidden: true,
      component: register
    },
    // {
    //   path: '/login/loginsucess',
    //   name: 'loginsucess',
    //   hidden: true,
    //   component: loginsucess
    // },
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
      path: '/single_page_home',
      component:single_page_home,
      name:"账户管理",
      /*iconCls: 'fa fa-file-text-o',*/
      children:[
          {
            path: "/user/update_password",
            name: '修改密码',
            component: update_password,
            meta: {
              keepAlive: false//是否要缓存页面 默认false  此处可以不写
            }
          },
          {
            path: "/user/update_profile",
            name: '修改资料',
            component: update_profile,
            meta: {
              keepAlive: false//是否要缓存页面 默认false  此处可以不写
            }
          }
      ]
    },

    {
      path: '/single_page_home',
      component:single_page_home,
      name:"我的数据",
      children:[
        {
          path: "/dataprocess/databrowser",
          name: '数据一览',
          component: databrowser,
          meta: {
            keepAlive: true//是否要缓存页面 默认false
          }
        }
      ]
    },

    {
      path: '/single_page_home',
      component:single_page_home,
      name:"评价配置",
      children:[
        {
          path: "/dataprocess/evaluation_init",
          name: '初始配置',
          component: evaluation_init
        },
        {
          path: "/dataprocess/data_assess",
          name: '指标设置',
          component: data_assess
        },
        {
          path: "/dataprocess/weight_allo",
          name: '权重分配',
          component: weight_allo
        }
      ]
    },

    {
      path: '/single_page_home',
      component:single_page_home,
      name:"结果一览",
      children:[
        {
          path: "/dataprocess/data_visualization",
          name: '数据可视化',
          component: data_visualization
        },
        {
          path: "/dataprocess/echarts_test",
          name: '数据可视化测试',
          hidden:true,
          component: echarts_test
        },
        {
          path: "/charts/mixChart",
          name: '混合图表',
          component: mixChart
        },
        {
          path: "/dataprocess/evaluation_report",
          name: '评价报告',
          component: evaluation_report
        }
      ]
    }

  ]//routes end
})
