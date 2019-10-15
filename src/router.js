import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
     
      component: Home
    },
   
    {
     path:"/login",
     name:"login",
     component: Login
    },
    // {
    //   path:"/class",
    //   name:"class",
    //   component: Class
    //  },
    //  {
    //   path:"/shopcar",
    //   name:"shopcar",
    //   component: Shopcar
    //  },
    

     
  ]
})
