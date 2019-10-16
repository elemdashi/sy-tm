<template>
  <div class="class">
    <div class="class-top-wai">
      <div class="class-top">
        <span>全部分类</span>
      </div>
    </div>
    <div class="class-xia">
      <div class="class-gundong">
        <div class="class-zuo">
          <div class="class-lie" @click="tabClick(1)">为您推荐</div>
          <div class="class-lie" @click="tabClick(2)">国际大牌</div>
          <div class="class-lie" @click="tabClick(3)">天猫国际</div>
          <div class="class-lie" @click="tabClick(4)">女装</div>
           <div class="class-lie" @click="tabClick(5)">女鞋</div>
          <div class="class-lie" @click="tabClick(6)">男装</div>
          <div class="class-lie" @click="tabClick(7)">男鞋</div>
          <div class="class-lie" @click="tabClick(8)">内衣</div>
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
      tabIndex:"1"
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
            if(index==1){
                if(this.$route.path != "/class/tuijian"){
                    this.$router.replace("/class/tuijian");
                }
            }

            if(index==2){
                if(this.$route.path != "/class/dapai"){
                    this.$router.replace("/class/dapai");
                }
            }

            if(index==3){
                if(this.$route.path != "/class/tianmao"){
                    this.$router.replace("/class/tianmao");
                }
            }

            if(index==4){
                if(this.$route.path != "/class/nvzhuang"){
                    this.$router.replace("/class/nvzhuang");
                }
            }

            if(index==5){
                if(this.$route.path != "/class/nvxie"){
                  
                    this.$router.replace("/class/nvxie");
                }
            }
             if(index==6){
                if(this.$route.path != "/class/nanzhuang"){
                    this.$router.replace("/class/nanzhuang");
                }
            }
             if(index==7){
                if(this.$route.path != "/class/nanxie"){
                    this.$router.replace("/class/nanxie");
                }
            }
             if(index==8){
                if(this.$route.path != "/class/neiyi"){
                    this.$router.replace("/class/neiyi");
                }
            }
            


        }


  }
};
</script>
<style >
.class-top-wai {
  display: flex;
  background-color: rgb(238, 238, 238);
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
</style>
