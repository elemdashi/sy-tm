import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/css/swiper.css"



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
