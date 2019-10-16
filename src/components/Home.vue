<template>
  <div class="home" id="orderFullScreen">
    <div id="top"></div>
    <div class="content" id="content">
    <!-- 顶部搜索框 -->
      <div class="home-top-bar" >
        <div @click="toPageClass()"><img  class="class-btn-img" src="/分类.png"></div>
        <img id="homeLogo" class="homeLogo" src="//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp">
        <button @click="toPageLogin()">登录</button>
      </div>
      <input  id="search-input" icon="el-icon-search" class="search-input" v-model="input" placeholder="搜索商品、品牌" @click="toPageSearch()"></input>

      
    </div>
  <!-- 外链跳转 -->
    <div class="top-adv-bar">
      <a href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"><img class="adv-icon"src="https://gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>苏宁易购</span></a>
      <a href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp"><span>天猫超市</span></a>
      <a href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&pos=3&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547673722287_1699747&spm=a211ue.11501597.icon.3"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>天猫国际</span></a>
      <a href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"><span>聚划算</span></a>
      <a @click="toPageClass()"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>分类</span></a>
    </div>

    <!-- 首页轮播 -->
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
    </div>

    <!-- 红包广告图 -->
    <div class="middle-adv">
      <a href="https://pages.tmall.com/wow/mit/act/download?mmstat=tb_homepage&src=tb_homepage&pos=1&acm=201809173.1003.2.6728488&scm=1003.2.201809173.OTHER_1571384819892_6728488&firstModule=3&spm=a211ue.11501597.newerBanner.0">
      <img src="//gw.alicdn.com/tfs/TB1NpszhpT7gK0jSZFpXXaTkpXa-750-367.png_790x10000.jpg_.webp">
      </a>
    </div>

    <!-- 倒计时区域 -->
    <div class="count-time">
    <el-row :gutter="6">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="grid-content-top">
             <span>限时抢购</span>
            <div class="count-content">
              <div id="hour"></div> <i>:</i> <div id="min"></div> <i>:</i> <div id="sec"></div>
            </div>
          </div>

          <div class="grid-content-bottom">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000495315370,10000493331352&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/i1/1017935694/O1CN01mAKTtB1rvtlAVayqs_!!2-item_pic.png_170x10000.jpg_.webp">
              <div>限时特价</div>
            </a>

            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000493331352,10000495315370&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/i4/748323357/O1CN01FGw0JJ1afY9BH043l_!!2-item_pic.png_170x10000.jpg_.webp" alt="">
              <div>爆款直降</div>
            </a>
          </div>
         
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
           <div class="grid-content-top">
             <span>天猫好物</span>
          </div>

          <div class="grid-content-bottom">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000495315370,10000493331352&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/tps/bao/upload/TB16TiefKH2gK0jSZFEXXcqMpXa.png_170x10000.jpg_.webp">
              <div>好货必买</div>
            </a>

            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000493331352,10000495315370&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/tps/bao/upload/TB1q.jktS8YBeNkSnb4wu1evFXa.png_170x10000.jpg_.webp" alt="">
              <div>美食好物</div>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="6">
      <el-col :span="12">
        <div class="grid-content bg-purple">
           <div class="grid-content-top">
             <span>聚划算</span>
          </div>

          <div class="grid-content-bottom">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000495315370,10000493331352&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/tps/O1CN01biiZ531DABs6dC9ho_!!175-2-lubanu.png_170x10000.jpg_.webp">
              <div>15天低价</div>
            </a>

            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000493331352,10000495315370&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/tps/O1CN01u1vJIR1CFOlJWbcL2_!!51-2-lubanu.png_170x10000.jpg_.webp" alt="">
              <div>满11元减10</div>
            </a>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
           <div class="grid-content-top">
             <span>天猫闪降</span>
          </div>

          <div class="grid-content-bottom">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000495315370,10000493331352&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/tps/i3/3530081327/O1CN01QyWFSr1Lfo8jMdfU5_!!2-item_pic.png_170x10000.jpg_.webp">
              <div>已降157元</div>
            </a>

            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10000493331352,10000495315370&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="//gw.alicdn.com/tps/i4/2200778909533/O1CN01OgFtN72KIAFxs2Cvp_!!2-item_pic.png_170x10000.jpg_.webp" alt="">
              <div>人气爆款</div>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess-content">
      <div class="guess-content-title">
        <span>猜你喜欢</span>
      </div>
      <div class="guess-product-list">
        <el-row :gutter="10">
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
      
    </div>
    <div>sdddd</div>
    <div>sdddd</div>
    <div>sdddd</div>
    <div>sdddd</div>
    <div class="test">
      <a href="#top"><img src="//gw.alicdn.com/tfs/TB1GEyAqDtYBeNjy1XdXXXXyVXa-88-88.png_110x10000.jpg_.webp" alt="" id="jump-img"></a>
    </div>

      

   

  </div>
  
</template>

<script>
  function countDown (time) {
            var nowTime = +new Date()
            var inputTime = +new Date(time)
            var times = (inputTime - nowTime) / 1000
            if(times > 0) {
        var hour = parseInt(times / 60 / 60 % 24)
        hour = hour < 10 ? '0' + hour : hour 
        var min = parseInt(times / 60 % 60)
        min = min < 10 ? '0' + min : min 
        var sec = parseInt(times % 60)
        sec = sec < 10 ? '0' + sec : sec 
        document.getElementById('hour').innerHTML = hour
        document.getElementById('min').innerHTML = min
        document.getElementById('sec').innerHTML = sec
        setTimeout(function () {
          countDown(time)
        }, 1000)
    }else {
        hour = min = sec = 0
        hour = min = sec =  '0' + hour
        document.getElementById('hour').innerHTML = hour
        document.getElementById('min').innerHTML = min
        document.getElementById('sec').innerHTML = sec
    } 
  }

  
 
 
  
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
    pagination: {
      el:'.swiper-pagination'
    },
    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio:1,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    scrollbar: '.swiper-scrollbar',
  }) 
      countDown("2019-11-01 00:00:00")
    document.getElementById('orderFullScreen').addEventListener('scroll', this.handleScroll)

  },
created(){
    this.getData()
},

 methods:{
    handleScroll() {
      
      var scrolldata = document.getElementById('orderFullScreen').scrollTop
      if(scrolldata >300){
        console.log(document.getElementById("search-input").style)
        document.getElementById("homeLogo").style.display = "none"
        document.getElementById("search-input").style.width = 285+'px'
        document.getElementById("content").style.height= 60+'px'
        document.getElementById("jump-img").style.display = "block"
        // console.log(document.getElementById("search-input").getBoundingClientRect())  
        console.log("导航栏变形")
      }else{
        document.getElementById("search-input").style.width = 345+'px'
        document.getElementById("homeLogo").style.display = "block"
        document.getElementById("content").style.height= 90+'px'
        document.getElementById("jump-img").style.display = "none"



        console.log("取消导航栏变形")
      }
      
    },

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

<style lang="stylus">

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  html,body{
    height:100%;
    overflow:hidden
  }
  .home{
    height:900px;
    background :#fff;
    overflow :auto;
  }
  .content{
    background-color:rgb(255,0,54);
    position :fixed;
    z-index :999;
    height:90px;
    display :flex;
    flex-direction :column;
    width:100%;
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
    margin-right:10px;
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
    margin:18px auto;
    width:345px;
    height:35px;
    border-radius :5px;
    border:none;
    flex-shrink :0;
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
    padding-top:100px;
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
    .home .swiper-container {
      margin:0 12px 0 12px ;
    }
   .home .swiper-wrapper {
     margin-top:10px;
   }
  .home .swiper-pagination {
          box-sizing :border-box;
          border-radius:5px;
          bottom: 10px;
  }
   .home .middle-adv img{
      height: 180px;
      margin:0 auto;
   }

   .el-row {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
 
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background:rgb(244,243,243)
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 128px;
    display :flex;
    flex-direction :column;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .grid-content span {
    font-size:16px;
    font-weight :bold;
  }

  // 倒计时
   .count-content {
            text-align: center;
            
        }
    .count-content  div{
        display: inline-block;
        background-color: black;
        color: #fff;
        width: 20px;
        height: 20px;
        font-size: 10px;
        text-align: center;
        line-height: 20px;
        border-radius:5px;
    }
    i {
        width: 7px;
        height: 23px;
        line-height: 23px;
        color: #605751;
        font-size:14px;
        font-style: normal;
    }

    .grid-content-top,
    .grid-content-bottom{
      display :flex;
      justify-content :space-around;
      margin-top:10px;
      text-align :center;
    }

    .grid-content-bottom img {
      width:77.5px;
      height:77.5px;
     margin-bottom :-18px;
    }

    .grid-content-bottom a {
      text-decoration :none;
      color :rgb(255, 0, 54);
    }

    .grid-content-bottom div {
      white-space: nowrap;
    border: 0.5px solid rgb(255, 0, 54);
    position: relative;
    box-sizing: border-box;
    display: block;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 10px;
    max-width: 77.5px;
    text-overflow: ellipsis;
    background-color: rgb(255, 237, 241);
    height: 12px;
    line-height: 11px;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 1px;
    color: rgb(255, 0, 54);
    text-align: center;
    overflow: hidden;
    }

// 猜你喜欢
.guess-content-title {
    flex-shrink: 0;
    font-size: 18px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-top:10px;
}

.count-time ,.guess-content{
  margin:0 10px 0 10px;
}

.test{
  height:600px;
  
}

.test img {
  position :fixed;
  width:44px;
  height:44px;
  right:5px;
  top:600px;
  z-index:1000
}

.guess-content .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .guess-content .el-col {
    border-radius: 2px;
  }
 
  .guess-content .bg-purple {
    background:rgb(244,243,243);
  }
 
  .guess-content .grid-content {
    border-radius: 4px;
    min-height: 267px;
  }
  .guess-content .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .guess-product-list{
    margin-top:10px;
  }
</style>
