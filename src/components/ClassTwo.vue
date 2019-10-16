<template>
  <div class="class">
    <div class="classtwo-top-wai">
        <div class="classtwo-top"></div>
      <div class="class-top">
        <span>全部分类</span>
      </div>
    </div>
    <div class="class-xia">
      <div class="class-gundong">
        <div class="class-zuo">
          <div class="class-lie" @click="tabClick(0)" v-bind:class="{active:tabIndex==0}">流行趋势</div>
          <div class="class-lie" @click="tabClick(1)" v-bind:class="{active:tabIndex==1}">国际大牌</div>
          <div class="class-lie" @click="tabClick(2)" v-bind:class="{active:tabIndex==2}">天猫国际</div>
          <div class="class-lie" @click="tabClick(3)" v-bind:class="{active:tabIndex==3}">女装</div>
           <div class="class-lie" @click="tabClick(4)" v-bind:class="{active:tabIndex==4}">女鞋</div>
          <div class="class-lie" @click="tabClick(5)" v-bind:class="{active:tabIndex==5}">男装</div>
          <div class="class-lie" @click="tabClick(6)" v-bind:class="{active:tabIndex==6}">男鞋</div>
          <div class="class-lie" @click="tabClick(7)" v-bind:class="{active:tabIndex==7}">内衣</div>
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
          console.log(this);
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
             if(index==7){
                if(this.$route.path != "/class/neiyi"){
                    this.$router.replace("/class/neiyi");
                }
            }
            


        }


  }
};
</script>
<style >
.classtwo-top-wai {
  width: 100%;
  background-color: rgb(238, 238, 238);
}
.classtwo-top{
    width: 100%;
    height: 40px;
}
.class-top {
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  background-color: rgb(238, 238, 238);
}
.class-zuo {
  width: 100px;
  height: 900px;
  background-color: rgb(238, 238, 238);
}
.class-xia {
  width: 100%;
  height: 768x;
  display: flex;
}
.class-gundong {
  width: 100px;
  height: 768px;
  overflow: scroll;
}
.class-you {
  width: 275px;
  height: 900px;
  background-color: rgb(255, 255, 255);
}
.class-gundong-you {
  width: 275px;
  height: 768px;
  overflow: scroll;
}
.class-lie {
  width: 100px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 50px;
  color: rgb(155, 155, 155);
  font-size: 4px;
}
.active{
  background-color: white
}
</style>
