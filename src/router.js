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
      path: '/circleProgress',
      name: 'circleProgress',
      component: () => import('./views/CircleProgress.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    // {
    //   path: '/huanEchart',
    //   name: 'huanEchart',
    //   component: () => import('./components/Home/huanEchart.vue')
    // },
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
