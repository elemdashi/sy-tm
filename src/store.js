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
       promsg:[],
       dist:[],
       item:[],
       distone:[]


  },
  getters:{

      dis:function(state){
        
        return state.promsg
      },
      disone:function(state){
        return state.disone
      }

  },
  mutations: {
    zhi( state,item){
      state.distone=[]
        state.distone.push(item)
    },
       shuaxing(state){
      state.distone=JSON.parse(localStorage.getItem('item'))
       }
        // item(state){
        //   state.promsg=[]
        //   state.promsg.push(JSON.parse(localStorage.getItem("item")) )
        // }
  },
  
  actions: {

  }
})
