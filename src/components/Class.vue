<template>
  <div class="class" v-if="tuijian">
    <div class="class-top-wai">
      <div class="classone-top">
        <span>全部分类</span>
      </div>
    </div>
    <div class="class-xia">
      <div class="classone-gundong">
        <div class="classone-zuo">
          <div class="classone-lie" @click="tabClick(0)" v-bind:class="{activeclass:tabIndex==0}">为您推荐</div>
          <div class="classone-lie" @click="tabClick(1)" v-bind:class="{activeclass:tabIndex==1}">国际大牌</div>
          <div class="classone-lie" @click="tabClick(2)" v-bind:class="{activeclass:tabIndex==2}">天猫国际</div>
          <div class="classone-lie" @click="tabClick(3)" v-bind:class="{activeclass:tabIndex==3}">女装</div>
           <div class="classone-lie" @click="tabClick(4)" v-bind:class="{activeclass:tabIndex==4}">女鞋</div>
          <div class="classone-lie" @click="tabClick(5)" v-bind:class="{activeclass:tabIndex==5}">男装</div>
          <div class="classone-lie" @click="tabClick(6)" v-bind:class="{activeclass:tabIndex==6}">男鞋</div>
          <div class="classone-lie" @click="tabClick(7)" v-bind:class="{activeclass:tabIndex==7}">内衣</div>
           <div class="classone-lie" @click="tabClick(8)" v-bind:class="{activeclass:tabIndex==8}">母婴</div>
          <div class="classone-lie" @click="tabClick(9)" v-bind:class="{activeclass:tabIndex==9}">手机</div>
          <div class="classone-lie" @click="tabClick(10)" v-bind:class="{activeclass:tabIndex==10}">数码</div>
          <div class="classone-lie" @click="tabClick(11)" v-bind:class="{activeclass:tabIndex==11}">家电</div>
           <div class="classone-lie" @click="tabClick(12)" v-bind:class="{activeclass:tabIndex==12}">美妆</div>
          <div class="classone-lie" @click="tabClick(13)" v-bind:class="{activeclass:tabIndex==13}">箱包</div>
          <div class="classone-lie" @click="tabClick(14)" v-bind:class="{activeclass:tabIndex==14}">运动</div>
          <div class="classone-lie" @click="tabClick(15)" v-bind:class="{activeclass:tabIndex==15}">户外</div>
        </div>
      </div>
      <div class="classone-gundong-you">
        <div class="classone-you">
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

// Vue.use(axios);
Vue.prototype.$ajax = axios



    


export default {
  name: "class",
  data() {
    return {
      tuijian: [],
      dapai:[],
      tianmaoguoji: "",
      nvzhuang: "",

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
        .get("/data/fenglei.json")
        .then(function(response) {
          // console.log(this);
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
                if(this.$route.path != "/class/tuijian"){
                    this.$router.replace("/class/tuijian");
                }
            }

            if(index==1){
                if(this.$route.path != "/class/dapai"){
                    this.$router.replace("/class/dapai");
                }
            }

            if(index==2){
                if(this.$route.path != "/class/tianmao"){
                    this.$router.replace("/class/tianmao");
                }
            }

            if(index==3){
                if(this.$route.path != "/class/nvzhuang"){
                    this.$router.replace("/class/nvzhuang");
                }
            }

            if(index==4){
                if(this.$route.path != "/class/nvxie"){
                  
                    this.$router.replace("/class/nvxie");
                }
            }
             if(index==5){
                if(this.$route.path != "/class/nanzhuang"){
                    this.$router.replace("/class/nanzhuang");
                }
            }
             if(index==6){
                if(this.$route.path != "/class/nanxie"){
                    this.$router.replace("/class/nanxie");
                }
            }
            //  if(index==7){
            //     if(this.$route.path != "/class/neiyi"){
            //         this.$router.replace("/class/neiyi");
            //     }
            // }
            


        }


  }
};
</script>
<style >
.class-top-wai {
  display: flex;
  background-color: rgb(238, 238, 238);
}
.classone-top {
  height: 40px;
  width: 100px;
  text-align: center;
  font-size: 12px;
  line-height: 40px;
  background-color: rgb(238, 238, 238);
}
.classone-zuo {
  width: 100%;
  
  background-color: rgb(238, 238, 238);
}
.class-xia {
  width: 100%;
  height: 768x;
  display: flex;
}
.classone-gundong {
  width: 25%;
  height: 768px;
  overflow: scroll;
}
.classone-you {
  width: 100%;
  
  background-color: rgb(255, 255, 255);
}
.classone-gundong-you {
  width: 75%;
  height: 768px;
  overflow: scroll;
}
.classone-lie {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 60px;
  color: rgb(155, 155, 155);
  font-size: 4px;
}
.activeclass{
  background-color: white
}
</style>
