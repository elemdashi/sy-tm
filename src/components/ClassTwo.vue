<template>
  <div class="class">
    <div class="classtwo-top-wai">
        <div class="classtwo-top"></div>
      <div class="class-top">
          <div class="class-tui" @click="tui()"> 返回 </div>
        <router-link to="/search"  id="search-input">
        <input  icon="el-icon-search" class="search-inputclass" v-model="input" placeholder="搜索商品、品牌">
        </router-link>
       
      </div>
    </div>
    <div class="class-xia">
      <div class="classtwo-gundong">
        <div class="classtwo-zuo">
          <div class="classtwo-lie" @click="tabClick(0)" v-bind:class="{active:tabIndex==0}">流行趋势</div>
          <div class="classtwo-lie" @click="tabClick(1)" v-bind:class="{active:tabIndex==1}">品牌</div>
          <div class="classtwo-lie" @click="tabClick(2)" v-bind:class="{active:tabIndex==2}">天猫国际</div>
          <div class="classtwo-lie" @click="tabClick(3)" v-bind:class="{active:tabIndex==3}">女装</div>
           <div class="classtwo-lie" @click="tabClick(4)" v-bind:class="{active:tabIndex==4}">女鞋</div>
          <div class="classtwo-lie" @click="tabClick(5)" v-bind:class="{active:tabIndex==5}">男装</div>
          <div class="classtwo-lie" @click="tabClick(6)" v-bind:class="{active:tabIndex==6}">男鞋</div>
          <div class="classtwo-lie" @click="tabClick(7)" v-bind:class="{active:tabIndex==7}">内衣</div>
           <div class="classtwo-lie" @click="tabClick(8)" v-bind:class="{active:tabIndex==8}">母婴</div>
          <div class="classtwo-lie" @click="tabClick(9)" v-bind:class="{active:tabIndex==9}">手机</div>
          <div class="classtwo-lie" @click="tabClick(10)" v-bind:class="{active:tabIndex==10}">数码</div>
          <div class="classtwo-lie" @click="tabClick(11)" v-bind:class="{active:tabIndex==11}">家电</div>
           <div class="classtwo-lie" @click="tabClick(12)" v-bind:class="{active:tabIndex==12}">美妆</div>
          <div class="classtwo-lie" @click="tabClick(13)" v-bind:class="{active:tabIndex==13}">箱包</div>
          <div class="classtwo-lie" @click="tabClick(14)" v-bind:class="{active:tabIndex==14}">运动</div>
          <div class="classtwo-lie" @click="tabClick(15)" v-bind:class="{active:tabIndex==15}">户外</div>
        </div>
      </div>
      <div class="class-gundong-you">
        <div class="class-you">
          <router-view :tui="tuijian" :dapai="dapai" :tianmao="tianmaoguoji"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import Vue from "vue";
import axios from "axios";

Vue.use(axios);



    


export default {
  name: "classtwo",
  data() {
    return {
      tuijian: [],
      dapai:[],
      tianmaoguoji: "",
      nvzhuang: "",
 input:"",
      nvxie: "",
      nanzhuang: "",
      nanxie: "",
      tabIndex:"0"
    };
  },

  created() {
    this.getData();
  },
  mounted() {
    console.log(this.dapai);
  },
  
  
  methods: {
 



    getData() {
      console.log(this);
      let that = this;
      axios
        .get("/data/classtwo.json")
        .then(function(response) {
         
          that .dapai=response.data.data.dapai
          that.tuijian = response.data.data.tuijian;
          that.tianmaoguoji=response.data.data.guoji
        })
        .catch(function(error) {
          console.log(error);
        });
    },

//点击事件
 tabClick(index){
  
            this.tabIndex = index;
            if(index==0){
                if(this.$route.path != "/classtwo/liuxing"){
                    this.$router.replace("/classtwo/liuxing");
                }
            }

            if(index==1){
                if(this.$route.path != "/classtwo/pingpai"){
                    this.$router.replace("/classtwo/pingpai");
                }
            }

            if(index==2){
                if(this.$route.path != "/classtwo/guoji"){
                    this.$router.replace("/classtwo/guoji");
                }
            }

            if(index==3){
                // if(this.$route.path != "/class/nvzhuang"){
                //     this.$router.replace("/class/nvzhuang");
                // }
            }

            if(index==4){
                // if(this.$route.path != "/class/nvxie"){
                  
                //     this.$router.replace("/class/nvxie");
                // }
            }
             if(index==5){
                // if(this.$route.path != "/class/nanzhuang"){
                //     this.$router.replace("/class/nanzhuang");
                // }
            }
             if(index==6){
                // if(this.$route.path != "/class/nanxie"){
                //     this.$router.replace("/class/nanxie");
                // }
            }
             if(index==7){
                // if(this.$route.path != "/class/neiyi"){
                //     this.$router.replace("/class/neiyi");
                // }
            }
            


        },
        //-------------
        tui(){
            window.history.back()
        }



  }
};
</script>
<style >
.class-tui{
    position: absolute;
    left: 5px;
    font-size: 12px
}
 /* #search-input{
       margin:-5px auto;
    } */
 .search-inputclass{
    margin-left: 15px;
    width:80%;
    height:25px;
    border-radius :10px;
    border:none;
    flex-shrink :0;
     background-color: rgb(238, 238, 238);
  }   
.classtwo-top-wai {
  width: 100%;
  height: 90px;
  background-color: white;
}
.classtwo-top{
    width: 100%;
    height: 40px;
    display: flex
   
}
.class-top {
  height: 40px;
  width:100%;
  text-align: center;
  line-height: 40px;
 background-color: white
 
}
.classtwo-zuo {
  width: 100%;

}
.class-xia {
  width: 100%;
  height: 768x;
  display: flex;
}
.classtwo-gundong {
  width: 20%;
  height: 768px;
  overflow: scroll;
}
.class-you {
  width: 100%;
  
  background-color: rgb(255, 255, 255);
}
.class-gundong-you {
  width: 100%;
  height: 768px;
  overflow: scroll;
}
.classtwo-lie {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 60px;
 
  font-size: 4px;
  background-color: rgb(247, 247, 247)
}
.active{
  background-color: white;
  color: red;
  border-left: red solid 4px
}
</style>
