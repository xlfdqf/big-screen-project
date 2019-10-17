import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    }, {
      path: '/home2',
      name: 'home2',
      component: () => import('./views/Home2.vue')
    }, {
      path: '/home3',
      name: 'home3',
      component: () => import('./views/Home3.vue')
    }, {
      path: '/circleProgress',
      name: 'circleProgress',
      component: () => import('./views/CircleProgress.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/mapEchart',
      name: 'mapEchart',
      component: () => import('./components/Home2/mapEchart.vue') //中国地图
    },
    // {
    //   path: '/activityDetail',
    //   meta: {
    //     requireAuth: true, //进入该路由需要登录
    //   },
    //   name: 'activityDetail',
    //   component: () => import('./views/ActivityDetail.vue')
    // },
  ]
})
