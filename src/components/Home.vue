<template>
  <div class="home">
    <div class="home-top-bar">
      <button @click="toPageClass()">分类</button>
      <button @click="toPageLogin()">登录</button>
    </div>
    <h1>天猫</h1>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import axios  from 'axios'

Vue.use( axios)

export default {
  name: 'home',
   data(){
    return{
      tabIndex:1
    }
  },
created(){
  
    this.getData()
},

 methods:{
 toPageClass(){
      this.$router.push({
        name:'class',
      })
    },
    toPageLogin(){
       this.$router.push({
        name:'login',
      })
    },


    getData() {
            console.log("获取后台数据");
           
            axios.get('/data/shouye.json')
                .then(function (response) {
                
                    console.log("111");
                    console.log(response)

                    // that.dyList = response.data.data.dy;
                    // that.techList = response.data.data.tech;
                    // that.autoList = response.data.data.auto;
                    // that.moneyList = response.data.data.money;
                    // that.sportList = response.data.data.sports;
                    // that.warList = response.data.data.war;
                    // that.entList = response.data.data.ent;
                    // that.touTiaoList = response.data.data.toutiao;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
 }
 
  
}
</script>

<style lang="stylus" scoped>
  
  .home{
    background-color:rgb(255,0,54);
    text-align:center;
  }
  .home-top-bar{
    display:flex;
    justify-content:space-between;
  }
  h1{
    color:#fff;
  }
</style>
