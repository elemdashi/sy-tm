import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Class from './components/Class.vue'
import Shopcar from './components/Shopcar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect:"/home"
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
     path:"/login",
     name:"login",
     component: Login
    },

    {
      path:"/class",
      name:"class",
      component: Class
     },

     {
      path:"/shopcar",
      name:"shopcar",
      component: Shopcar
     },
     
  ]
})
