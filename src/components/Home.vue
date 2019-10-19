<template>
  <div class="home" id="orderFullScreen">
 
     <el-backtop ></el-backtop>
    <!-- 顶部搜索框 -->
 
      <div class="content" id="content" v-if="show">
        <div class="home-top-bar">
          <router-link to="/class/tuijian" id="class-btn-img"><img  class="class-btn-img" src="/分类.png"></router-link>
          <img v-if="show" id="homeLogo" class="homeLogo" src="//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp">
          <button @click="toPageLogin()" id="login-btn" v-if="login=='false'">登录</button>
          <button v-else id="login-btn" @click="openfloat" ><i class="el-icon-user"></i></button>
        </div>
        <div id="search-input" v-if="show">
          <input  icon="el-icon-search" class="search-input" v-model="input" placeholder="搜索商品、品牌" @click="toPageSearch()">
        </div>
      </div>

      <!-- 我的天猫浮动窗口 -->
      <div class="floatwin" v-if="showfloat">
        <div class="title">
          <span>我的天猫</span>
           <button @click="closefloat">X</button>
        </div>
        <div class="actionbtn">
          <div class="top">
            <div class="top-icon">
              <img src="/天猫 T.png" alt="">
              <span>天猫客户端</span>
            </div>
            <div class="top-icon">
              <img src="/礼物.png" alt="">
              <span>新人有礼</span>
            </div>
            <div class="top-icon" @click="toshopcar">
              <img src="/购物车.png" alt="">
              <span>购物车</span>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-icon">
              <img src="/收藏红.png" alt="">
              <span>收藏宝贝</span>
            </div>
            <div class="bottom-icon">
              <img src="/店铺蓝.png" alt="">
              <span>收藏店铺</span>
            </div>
            <div class="bottom-icon">
              <img src="/订单.png" alt="">
              <span>全部订单</span>
            </div>
          </div>

        </div>
       
      </div>
      <div class="homeshadow" v-if="showfloat">
        
      </div>

      <!-- 外链跳转 -->
    <div class="top-adv-bar">
      <a href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"><img class="adv-icon" src="https://gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>苏宁易购</span></a>
      <a href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp"><span>天猫超市</span></a>
      <a href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&pos=3&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547673722287_1699747&spm=a211ue.11501597.icon.3"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>天猫国际</span></a>
      <a href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"><span>聚划算</span></a>
      <router-link to="/classtwo/liuxing"><img class="adv-icon" src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"><span>分类</span></router-link>
    </div>

    <!-- 首页轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><a href="https://pages.tmall.com/wow/jinkou/act/zhiyingupr?trackInfo=2017041212100101;64215954804;285964;569080230133;3;285964_569080230133;1007.15052.117304.100200300000000;bb79ffc6-26c6-458a-95f3-38dad81fef52;3;0;null;2591009;66049&wh_biz=tm&item_id=569080230133&pvid=bb79ffc6-26c6-458a-95f3-38dad81fef52&pos=3&activity_id=285964&wh_pid=act%2Fasmy&acm=2017041213.1003.1.2368046&scm=1003.1.2017041212.OTHER_0_6766394&spm=a211ue.11501597.banner.6"><img src="//gw.alicdn.com/tps/i4/TB1sNryiV67gK0jSZPfSuuhhFXa.jpg_790x10000Q75.jpg_.webp"></a></div>
          <div class="swiper-slide"><a href="https://pages.tmall.com/wow/jinkou/act/zhiyingupr?trackInfo=2017041212100101;64215954804;285964;569080230133;3;285964_569080230133;1007.15052.117304.100200300000000;bb79ffc6-26c6-458a-95f3-38dad81fef52;3;0;null;2591009;66049&wh_biz=tm&item_id=569080230133&pvid=bb79ffc6-26c6-458a-95f3-38dad81fef52&pos=3&activity_id=285964&wh_pid=act%2Fasmy&acm=2017041213.1003.1.2368046&scm=1003.1.2017041212.OTHER_0_6766394&spm=a211ue.11501597.banner.6"><img src="//gw.alicdn.com/tfs/TB1GDEJdKP2gK0jSZFoXXauIVXa-1035-390.png_790x10000.jpg_.webp"></a></div>
          <div class="swiper-slide"><a href="https://pages.tmall.com/wow/jinkou/act/zhiyingupr?trackInfo=2017041212100101;64215954804;285964;569080230133;3;285964_569080230133;1007.15052.117304.100200300000000;bb79ffc6-26c6-458a-95f3-38dad81fef52;3;0;null;2591009;66049&wh_biz=tm&item_id=569080230133&pvid=bb79ffc6-26c6-458a-95f3-38dad81fef52&pos=3&activity_id=285964&wh_pid=act%2Fasmy&acm=2017041213.1003.1.2368046&scm=1003.1.2017041212.OTHER_0_6766394&spm=a211ue.11501597.banner.6"><img src="//gw.alicdn.com/tps/i4/TB12OAqiVY7gK0jSZKzSuuikpXa.jpg_790x10000Q75.jpg_.webp"></a></div>
          <div class="swiper-slide"><a href="https://pages.tmall.com/wow/jinkou/act/zhiyingupr?trackInfo=2017041212100101;64215954804;285964;569080230133;3;285964_569080230133;1007.15052.117304.100200300000000;bb79ffc6-26c6-458a-95f3-38dad81fef52;3;0;null;2591009;66049&wh_biz=tm&item_id=569080230133&pvid=bb79ffc6-26c6-458a-95f3-38dad81fef52&pos=3&activity_id=285964&wh_pid=act%2Fasmy&acm=2017041213.1003.1.2368046&scm=1003.1.2017041212.OTHER_0_6766394&spm=a211ue.11501597.banner.6"><img src="//gw.alicdn.com/tfs/TB1KrKCiYr1gK0jSZR0XXbP8XXa-1035-390.jpg_790x10000Q75.jpg_.webp"></a></div>
          <div class="swiper-slide"><img src="//gw.alicdn.com/imgextra/i1/1154864/O1CN01xUaYfw1lnl1VGCGHl_!!1154864-0-lubanu.jpg_790x10000Q75.jpg_.webp"></div>
          <div class="swiper-slide"><img src="//gw.alicdn.com/tfs/TB1HHWbNrPpK1RjSZFFXXa5PpXa-1035-390.png_790x10000.jpg_.webp"></div>
          <div class="swiper-slide"><img src="//gw.alicdn.com/imgextra/i4/251856/O1CN01QVVowT1Pa5fCSOrZn_!!251856-0-lubanu.jpg_790x10000Q75.jpg_.webp"></div>
          <div class="swiper-slide"><img src="//gw.alicdn.com/imgextra/i4/1058333/O1CN01U29JfK2BQYyqaZrbd_!!1058333-0-lubanu.jpg_790x10000Q75.jpg_.webp"></div>
          <div class="swiper-slide"><img src="//gw.alicdn.com/imgextra/i1/1462642/O1CN012OCIvZ1VO4y4bvkos_!!1462642-0-lubanu.jpg_790x10000Q75.jpg_.webp"></div>
          <div class="swiper-slide"><img src="//gw.alicdn.com/imgextra/i2/918137/O1CN01P8a7bI29ynLj1OZlj_!!918137-0-lubanu.jpg_790x10000Q75.jpg_.webp"></div>
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
           <div class="grid-content-top left">
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
           <div class="grid-content-top left">
             <span>{{login}}</span>
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
           <div class="grid-content-top left" >
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
        <el-row :gutter="10" v-for="(item,index) in homelistleft">
          <router-link to="/detail">
               <el-col :span="12" >
               <div class="grid-content bg-purple" @click="pageTodetail()">
              <!-- 商品主图 -->
              <div class="guess-product-list-img">
                <img :src="item.imgadress">
              </div>
              <!-- 商品介绍文字 -->
              <div class="guess-product-list-title">
                <div class="label">
                  <span>{{item.label}}</span>
                </div>
                <div class="mainintro">
                  <span>{{item.mainintro}}</span>
                </div>
                <div class="specialtyurl">
                  <img :src="item.specialtyurl">
                </div>
                <div class="price-content">
                  <span class="price">{{item.price}}</span>
                  <div class="looksame">
                    <span class="title"><a href="https://market.m.taobao.com/apps/market/tmalltoplist/top-find.html?wh_weex=true&wx_navbar_transparent=true&callFrom=tradeFeeds&itemId=602705858617&spm=a211ue.11501597.new-recommend.1">看相似</a></span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          </router-link>
         
          <router-link to="/detail">
              <el-col :span="12" >
               <div class="grid-content bg-purple" >
              <!-- 商品主图 -->
              <div class="guess-product-list-img">
                <img :src="item.imgadress">
              </div>
              <!-- 商品介绍文字 -->
              <div class="guess-product-list-title">
                <div class="label">
                  <span>{{item.label}}</span>
                </div>
                <div class="mainintro">
                  <span>{{item.mainintro}}</span>
                </div>
                <div class="specialtyurl">
                  <img src="//gw.alicdn.com/tfs/TB1a4C4cq1s3KVjSZFAXXX_ZXXa-230-44.png_150x10000.jpg_.webp" alt="">
                </div>
                <div class="price-content">
                  <span class="price">{{item.price}}</span>
                  <div class="looksame">
                    <span class="title"><a href="https://market.m.taobao.com/apps/market/tmalltoplist/top-find.html?wh_weex=true&wx_navbar_transparent=true&callFrom=tradeFeeds&itemId=602705858617&spm=a211ue.11501597.new-recommend.1">看相似</a></span>
                  </div>
                </div>
              </div>
            </div>
           
          </el-col>
          </router-link>
         
        </el-row>

        
      </div>


      
    </div>

    <!-- 向顶部滚动 -->
    <img src="//gw.alicdn.com/tfs/TB1GEyAqDtYBeNjy1XdXXXXyVXa-88-88.png_110x10000.jpg_.webp" alt="" id="jump-img" @click="backToTop" v-show="backTopShow">
    
    
      

   

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
import Swiper from 'swiper'





Vue.use(axios)

export default {
  name: 'home',
   data(){
    return{
      showfloat:false,
      show:true,
      homelistleft:[],
      input:"",
      tabIndex:1,
       //是否显示回到顶部
 backTopShow : false,
 // 是否允许操作返回顶部
 backTopAllow : true,
 // 返回顶部所需时间
 backSeconds : 100,
 // 往下滑动多少显示返回顶部（单位：px）
 showPx : 200,
 login:"false"

    }
  },
  mounted(){ 
  var mySwiper = new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
      loop: true, // 循环模式选项，true 循环播放
      observer: true,//实时检测，动态更新
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				autoplayDisableOnInteraction : false,
				renderCustom: function (swiper, current, total) {
					var paginationHtml = " ";
					for (var i = 0; i < total; i++) {
						// 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
						if (i === (current - 1)) {
							paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						}else{
							paginationHtml += '<span class="swiper-pagination-customs"></span>';
						}						  
					}
					return paginationHtml;
				},
			}
		})
    countDown("2019-11-01 00:00:00")
    document.getElementById('orderFullScreen').addEventListener('scroll', this.handleScroll,true)
  },
created(){
    this.getData()
    if(localStorage.getItem("log")=="true"){
      this.login=localStorage.getItem("log")
    }
 
},

 methods:{
  //  首页顶部滚动缩放动画
    handleScroll() {
       if (!this.backTopAllow) return;
        if (document.getElementById('orderFullScreen').scrollTop > 800) {
          
        this.backTopShow = true;
        } else {
        this.backTopShow = false;
        }
      if (document.getElementById('orderFullScreen').scrollTop > 300) {
        document.getElementById("content").setAttribute("style"," transition:all 0.3s;height:60px;")
       document.getElementById("homeLogo").setAttribute("style","transition:all 0.3s;width:0;height:0")
       document.getElementById("class-btn-img").setAttribute("style","transition:all 0.3s;margin-top:20px;margin-left:10px")
       document.getElementById("login-btn").setAttribute("style","transition:all 0.3s;margin-top:20px")
        document.getElementsByClassName("search-input")[0].setAttribute("style"," transition:all 0.3s;width:285px;margin-top:-25px")
      } else {
       document.getElementById("login-btn").setAttribute("style","transition:all 0.3s;margin-top: 10px;margin-right: 5px;")
       document.getElementById("class-btn-img").setAttribute('style',"transition:all 0.3s;margin-top: 10px;margin-left: 5px;")
        document.getElementById("content").setAttribute("style"," transition:all 0.3s;height:90px;")
       document.getElementById("homeLogo").setAttribute("style","transition:all 0.3s;width:118.5px;height:20.5px")
        document.getElementsByClassName("search-input")[0].setAttribute("style"," transition:all 0.3s;width:355px;")
      }
    },
    backToTop : function() {
      var step = document.getElementById('orderFullScreen').scrollTop / this.backSeconds;
      var backTopInterval = setInterval(function() {
      if (document.getElementById('orderFullScreen').scrollTop > 0) {
      document.getElementById('orderFullScreen').scrollTop-= step;
      } else {
      app.backTopAllow = true;
      clearInterval(backTopInterval);
      }
      }, 1);
      },

  toPageClasstwo(){
    this.$router.push({
      name:'classtwo',
    })
  },
  toshopcar(){
     this.$router.push({
      name:'shopcar',
    })
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
    pageTodetail(){
       this.$router.push({
        name:'search',
      })
    },
    // 打开/关闭浮动窗口
    openfloat(){
      this.showfloat = true
    },
    closefloat(){
      this.showfloat = false
    },
    getData() {
            console.log("获取后台数据");
           let that = this
            axios.get('/data/homepage.json')
                .then(function (response) {
                     that.homelistleft = response.data.data.leftproduct;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
 }
 
  
}
</script>

<style lang="stylus">
//浮动窗口
.floatwin{
  top:50px;
  z-index:999;
  width:100%;
  position:fixed;
  background:#E5E5E5;
}
.floatwin .title{
  height:33px;
  font-size:14px;
  font-weight:600;
  margin:0 auto;
  width :95%;
  display:flex;
   justify-content:space-between;
   align-items :center;
}
.floatwin .title button{
  font-size:20px;
  background:none;
  outline:none;
  border:none;
}
.floatwin .actionbtn {
  height:214px;
  background-color:#fff;
  display:flex;
  flex-direction:column;
  width:100%;
}
.floatwin .actionbtn  .top{
  margin-top:15px;
}
.floatwin .actionbtn  img{
  width:33px;
  height:33px;
}
.floatwin .actionbtn  .top .top-icon,.floatwin .actionbtn  .bottom .bottom-icon{
  display:flex;
  flex-direction:column;
   align-items :center;
   font-size:12px;
}
.floatwin .actionbtn  .top,.floatwin .actionbtn  .bottom{
  height:50%;
  display:flex;
  align-items :center;

}
.floatwin .actionbtn  .top div,.floatwin .actionbtn  .bottom div{
  display:flex;
  flex:1;
  justify-content :center;
}
// 背景遮罩
.homeshadow{
  position:absolute;
  background: rgba(0,0,0,.5);
  height: 1000px;
  width: 100%;
  z-index: 900;
}
.el-icon-user{
  color:white;
  font-size:20px;
  margin-right:10px;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
 width: 100%;
 height: 100%;
 position: relative;
 overflow-x: hidden;
 overflow-y: auto;
 z-index: 1;
}
  
#jump-img {
 position: fixed;
 bottom: 5px;
 right: 20px;
 z-index: 100;
 width:44px;
 height:44px;
}

  #orderFullScreen{
    background :#fff;
    overflow-y:auto;
    overflow-x:hidden;
    height:900px;
  }
  .content{
    background-color:rgb(255,0,54);
    position :fixed;
    z-index :500;
    height:90px;
    display :flex;
    flex-direction :column;
    width:100%;
  }
#class-btn-img{
  display:inline-block;
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
    #search-input{
       margin:-5px auto;
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
    width:95%;
  }
    .home .swiper-container {
      margin:0 12px 0 12px ;
      width:100%;
    }
    .swiper-slide{
      margin:0 auto;
    }
   .home .swiper-wrapper {
     margin-top:10px;
   }
//  自定义分页器样式
/*包裹自定义分页器的div的位置等CSS样式*/
    .swiper-pagination-custom {
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 20px;
    text-align: center;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
    .swiper-pagination-customs {
      width: 15px;
      height: 2px;
      display:inline-block;
      background: #fff;
      opacity: .3;
      margin: 0 5px;
      outline: 0;
    }
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active{
    opacity :1;
    background:#ffff;
  }


   .home .middle-adv img{
      height: 180px;
      width:100%;
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


.back-to-top img {
  position :fixed;
  width:44px;
  height:44px;
  right:5px;
  top:600px;
  z-index:1000
}

.guess-content .el-row {
    margin-bottom: 10px;
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

  .left {
    justify-content :left;
  }
  .left span{
    margin-left:8px;
  }
  // 
  .home .guess-product-list-img{
    width:138px;
    height:138px;
    margin:10px auto;
  }
  .home .guess-product-list-img img{
    width:138px;
    height:138px;
  }

  .guess-product-list-title .label{
    width:auto;
    height:auto;
    background:rgb(206,175,163);
    display:inline-block
    top: 159px;
    margin-left: 10px;
    padding-left: 5px;
    padding-right: 5px;
    align-items :center;
    align-content: flex-start;
  }
  .guess-product-list-title .label span{
    color:#fff;
    flex-shrink: 0;
    font-size: 10px;
  }

  .guess-product-list-title .mainintro,
  .specialtyurl,{
    margin-left: 10px;
    display:flex;
    align-content :flex-start;
  }
  .guess-product-list a {
    text-decoration :none;
    color:black;
  }
  .guess-product-list-title .price-content{
    display:flex;
    margin-left: 10px;
    justify-content :space-between;
  }
  .guess-product-list-title .price-content .price{
     font-size: 16px;
    font-weight: 600;
    color: rgb(255, 0, 0);
    line-height: 28px;
  }
  .guess-product-list-title .price-content .looksame{
    display:flex;
    align-content :center;
    align-items :center;
    background:rgb(255,230,235);
    margin-right:10px;
    padding:1px 8px 1px 8px;
    height: 23px;
    border-radius:15px;
   
  }
  .guess-product-list-title .price-content .looksame .title{
    flex-shrink: 0;
    font-size: 11px;
    height: 11px;
    line-height: 11px;
    font-weight:350;
  }
  .guess-product-list-title .price-content .looksame .title a {
    text-decoration :none;
    color: rgb(255, 0, 54);
  }
   
 
  .guess-product-list-title .mainintro span{
    font-size:14px;
    font-weight :350;
    // flex-shrink: 0;
    white-space: pre-wrap;
    line-height: 18px;
    height: 36px;
    margin-top: 2px;
    margin-bottom: 2px;
    text-align: left;
    overflow: hidden;
  }
  .specialtyurl img{
    width:73.17px;
    height:14px;
  }

  .specialtyurl{
    margin-top:3px;
  }

  // 回到顶部
  [v-cloak] {
 display: none;
}
  
.back-to-top {
 position: fixed;
 bottom: 5px;
 right: 20px;
 z-index: 100;
 padding: 8px 10px;
 cursor: pointer;
}


  
.back-to-top span {
 display: block;
}
  
.page {
 width: 100%;
 height: 400px;
 line-height: 400px;
 text-align: center;
}
// 动画
.active {
  transition:width 2s;
  height:20px;
}



</style>
