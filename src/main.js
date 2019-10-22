import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/css/swiper.css"
import Mint from 'mint-ui';

import Vuex from 'vuex'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Vuex)
Vue.prototype.$ajax = axios

Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/error.jpg'),
  loading: require('./assets/loading.gif'),
  attempt: 2,
})
Vue.use(Mint);
Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,
  store,
 computed: {
   // eslint-disable-next-line vue/return-in-computed-property
   getlogging(){
     return this.$store.state.logging
   }
 },
 watch: {
  getlogging(newVal, oldVal){
  console.log(newVal) 
  console.log(oldVal)
  localStorage.setItem("log", newVal);
 }
},
  render: h => h(App)
}).$mount('#app')
