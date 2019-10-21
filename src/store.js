import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       logging:"false",
       searchmessage:"",
       shopcar:[],
       zong:0,
       alerady:[],
       promsg:[]
  },
  
  mutations: {
        // item(state){
        //   state.promsg=[]
        //   state.promsg.push(JSON.parse(localStorage.getItem("item")) )
        // }
  },
  
  actions: {

  }
})
