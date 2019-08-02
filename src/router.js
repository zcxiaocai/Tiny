import Vue from 'vue'
import Router from 'vue-router'
import T_Index from './views/T_Index.vue'
import T_login from './views/T_login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:T_Index,
    },
    {
      path:'/login',
      component:T_login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
