<template>
  <div class="home">
    <h1>主页</h1>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import axios  from 'axios'

Vue.use( axios)

export default {
  name: 'home',
created(){
  
    this.getData()
},

 methods:{
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
