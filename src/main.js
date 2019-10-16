import Vue from 'vue'
import router from './router'
import { Popover, Col, Row, Tabs, TabPane, Card, Button, Pagination, Form, FormItem, Input, Table, TableColumn, DatePicker, Loading, Message, Progress } from 'element-ui';
import VueScrollTo from "vue-scrollto";
import 'lib-flexible'
import axios from 'axios';
import store from './store/store'
import echarts from 'echarts';
import VCharts from 'v-charts'
import App from './App.vue'
import 'v-charts/lib/style.css'

Vue.prototype.$axios = axios;
// Vue.prototype.$store = store;
Vue.config.productionTip = false
Vue.use(echarts);
Vue.use(VCharts);
Vue.use(Popover);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(VueScrollTo);
Vue.use(Card);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Loading)
Vue.use(Progress)

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { //判断该路由是否需要登录
    let Token = localStorage.getItem('Token');
    if (Token) { //vuex获取当前token是否存在
      next();
    } else {
      Message({
        showClose: true,
        message: '请先登录!',
        type: "warning"
      });
      next({
        path: '/login',
        query: { redirect: to.fullPath } //将跳转的路由path作为参数，登录成功后跳转该路由
      })
    }
  } else { //无需登录直接跳转页面
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
