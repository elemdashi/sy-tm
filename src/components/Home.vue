<template>
  <div class="home">
    <div class="content">
    <!-- 顶部搜索框 -->
      <div class="home-top-bar">
        <div @click="toPageClass()"><img  class="class-btn-img" src="/分类.png"></div>
        <img class="homeLogo" src="//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp">
        <button @click="toPageLogin()">登录</button>
      </div>
      <input  icon="el-icon-search" class="search-input" v-model="input" placeholder="搜索商品、品牌" @click="toPageSearch()"></input>

      <!-- 外链跳转 -->
    </div>

    <div class="top-adv-bar">
      <a href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"><img class="adv-icon"src="https://gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>苏宁易购</span></a>
      <a href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp"><span>天猫超市</span></a>
      <a href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&pos=3&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547673722287_1699747&spm=a211ue.11501597.icon.3"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>天猫国际</span></a>
      <a href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"><span>聚划算</span></a>
      <a @click="toPageClass()"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>分类</span></a>
    </div>

  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="//gw.alicdn.com/tps/i4/TB1sNryiV67gK0jSZPfSuuhhFXa.jpg_790x10000Q75.jpg_.webp"></div>
        <div class="swiper-slide"><img src="//gw.alicdn.com/tfs/TB1GDEJdKP2gK0jSZFoXXauIVXa-1035-390.png_790x10000.jpg_.webp"></div>
        <div class="swiper-slide"><img src="//gw.alicdn.com/tps/i4/TB12OAqiVY7gK0jSZKzSuuikpXa.jpg_790x10000Q75.jpg_.webp"></div>
        <div class="swiper-slide"><img src="//gw.alicdn.com/tfs/TB1KrKCiYr1gK0jSZR0XXbP8XXa-1035-390.jpg_790x10000Q75.jpg_.webp"></div>
        <div class="swiper-slide"><img src="//gw.alicdn.com/imgextra/i1/1154864/O1CN01xUaYfw1lnl1VGCGHl_!!1154864-0-lubanu.jpg_790x10000Q75.jpg_.webp"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
   

  </div>
  
</template>

<script>
import Vue from 'vue'
import axios  from 'axios'
import Swiper from 'swiper';



Vue.use( axios)

export default {
  name: 'home',
   data(){
    return{
      input:"",
      tabIndex:1
    }
  },
  mounted(){
    const mySwiper = new Swiper ('.swiper-container', {  
    autoplay: true,
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
     paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio:1,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next'
      ,
    // prevButton: '.swiper-button-prev',
    // // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  }) 
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
    toPageSearch(){
       this.$router.push({
        name:'search',
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
    height:100%;
    background :#fff;
  }
  .content{
    margin:0 auto;
    background-color:rgb(255,0,54);
    text-align:center;
    height:100%;
  }

  .home-top-bar{
    display:flex;
    justify-content:space-between;
  }

  .home-top-bar button{
    border-style:none;
    background:none;
    color:#fff;
    margin-top:10px;
  }
  .home-top-bar div{
    margin-top:10px;
    margin-left:5px;
  }
  
  .content h1{
    color:#fff;
  }

  .content .homeLogo{
    display: flex; 
    width: 118.5px; 
    height: 20.5px;
    margin-top:10px;
  }

  .content .search-input{
    margin:15px 0 15px;
    width:90%;
    height:30px;
    border-radius :5px;
    border:none;
  }

  .class-btn-img{
    width :20px;
    height:20px;
  }

  .adv-icon{
    width:48px;
    height:48px;
    margin:8px 0 ;
  }

  .top-adv-bar{
    display :flex;
    justify-content :space-around;
  }

  .top-adv-bar a {
    display :flex;
    flex-direction :column;
    justify-content :center;
    align-content :center;
    align-items :center;
    text-decoration :none;
    color:rgb(0,0,0);
    font-size:13px;
  }
  .home .swiper-wrapper img{
    height:135px;
    width :375px;
  }

   .home .swiper-wrapper {
     margin-top:10px;
   }
</style>
