import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Class from './components/Class.vue'
import classtwo from './components/ClassTwo.vue'
import Shopcar from './components/Shopcar.vue'
import Search from './components/Search.vue'
import ProductList from './components/ProductList.vue'
import dapai from './components/class-router/dapai.vue'
import tianmao from './components/class-router/tianmao.vue'
import tuijian from './components/class-router/tuijian.vue'
import nvzhuang from './components/class-router/nvzhuang.vue'
import nvxie from './components/class-router/nvxie.vue'
import nanzhuang from './components/class-router/nanzhuang.vue'
import nanxie from './components/class-router/nanxie.vue'
import liuxing from './components/classtwo-router/liuxing.vue'
import pingpai from   './components/classtwo-router/pingpai.vue'
import guoji from   './components/classtwo-router/guoji.vue'
import detail from './components/Productdetailspage/productdetail.vue'
// import productdetail from './components/Productdetailspage/productdetail.vue' 
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
      component: Home,
    },

    {
     path:"/login",
     name:"login",
     component: Login
    },
    {
      path:"/detail",
      name:"detail",
      component:detail
    },

    {
      path:"/class",
      name:"class",
      component: Class,
      children:[
        {
          path:"dapai",
          component: dapai
        },
        {
          path:"tianmao",
          component:tianmao
        },
        {
          path:"tuijian",
          component:tuijian
        },
        {
          path:"nvzhuang",
          component:nvzhuang
        },
        {
          path:"nvxie",
          component:nvxie
        },
        {
          path:"nanzhuang",
          component:nanzhuang
        },
        {
          path:"nanxie",
          component:nanxie
        },
      ]
     },
     {
      path:"/classtwo",
      name:"classtwo",
      component: classtwo,
      children:[
        {
          path:"liuxing",
          component: liuxing
        },
        {
          path:"pingpai",
          component: pingpai
        },
        {
          path:"guoji",
          component: guoji
        },
        
      ]
     },

     {
      path:"/shopcar",
      name:"shopcar",
      component: Shopcar
     },
     {
       path:"/search",
       name:"search",
       component:Search
     },
     {
       path:"/productlist",
       name:"productList",
       component:ProductList
     }     
  ]
})
