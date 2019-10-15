<template>
  <div class="class">
   <h1>分类页面</h1>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import axios  from 'axios'

Vue.use( axios)

export default {
  name: 'class',
data(){
  return{
     tuijian:"" 
  }
},

  created(){
     this.getData()
  }
  ,
 methods:{
   
    getData() {
            
           
            axios.get('/data/fenglei.json')
                .then(function (response) {
                
                    console.log("111");
                    console.log(response.data.data.tuijian[0].nvzhuang[0].name)

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
