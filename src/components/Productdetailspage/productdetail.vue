<template>
    <div class="detail" id="detail">
        <el-backtop ></el-backtop>
        <!------- 滚动隐藏顶部导航栏 -------->
        <div class="detail-top-bar" id="topbar">
            <i class="el-icon-arrow-left" @click="pagetohome"></i>
            <div class="top-bar-title"> 
                <span id="productbtn" @click="pageuppro">商品</span>
                <span id="commentbtn" @click="pageupcom">评价</span>
                <span id="detailbtn">详情</span>
                <i class="el-icon-shopping-cart-2"></i>
            </div>
        </div>
        <div v-if="showicon" id="topbar2" >
            <div>
                <i class="el-icon-arrow-left" @click="pagetohome"></i>
            </div>
            <div>
                 <i class="el-icon-shopping-cart-2 "></i>
            </div>
           
        </div>
        <div id="content" >
            <div class="product-dec-swiper"  id="product">
                <!------------------- 商品主图详情轮播 ---------------------->
                 <div class="swiper-container">
                    <div class="swiper-wrapper" >
                        <div class="swiper-slide" v-for="(item,index) in imglist"><img :src="item"></div>
                    </div>
                        <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
                
            <!----------- 商品价格和名称 ----------------->
            <div class="price-product-dec">
                <div class="real-price">
                    <label><i>￥</i>{{detaillist.money}}</label>
                    <span class="icon-text">爆款特卖</span>
                    <span class="icon-text">淘金币抵2%</span>
                </div>
                <div class="price">
                    <span class="small">价格：<del>￥{{detaillist.delmoney}}</del></span>
                </div>
                <div class="dec">
                    <span>{{detaillist.fullname}}</span>
                </div>
                <div class="express">
                    <span class="small">快递：0.00</span>
                    <span class="small">月销量 3.0万+件</span>
                    <span class="small">{{detaillist.address}}</span>
                </div>
            </div>
            <!-- 商品促销和服务 -->
            <div class="serve-product-dec" >
                <div class="promotion"@click="showwindow">
                    <div class="left">
                        <span class="small">促销</span>
                        <span class="big">购买可得24积分</span>
                    </div>
                    <i class="el-icon-arrow-right" ></i>
                </div>
                <div class="serve" @click="showwindow">
                    <div class="left">
                        <span class="small">服务</span>
                    </div>
                    <div class="right">
                            <span class="small2">假一赔四</span>
                            <span>·</span>
                            <span class="small2">上门取退</span>
                            <span>·</span>
                            <span class="small2">极速退款</span>
                            <span>·</span>
                            <span class="small2">退货运费险</span>
                        <i class="el-icon-arrow-right" ></i>
                    </div>
                  
                </div>

            </div>
  
            <!-------------- 商品规格参数选择----------------- -->
            <div class="select-product-dec">
                <div class="select" @click="showwindow">
                    <span class="small">选择</span>
                    <span class="small3">请选择颜色 尺码</span>
                    <i class="el-icon-arrow-right" ></i>
                </div>
                <div class="data" @click="showwindow">
                    <span class="small">参数</span>
                    <span class="small3">品牌 材质</span>
                    <i class="el-icon-arrow-right" ></i>
                </div>
            </div>

            <!-------------------  商品评价  ----------------------->
            <div class="product-comment-group" id="comment">
                <div class="product-comment">
                    <div class="product-comment-title">商品评价（5270）</div>
                    <div>查看全部 <i class="el-icon-arrow-right"></i></div>
                </div>
                <ul class="tag">
                    <li>很划算(403)</li>
                    <li>很舒适(380)</li>
                    <li>质量不错(367)</li>
                </ul>
                <div class="tag-comment">
                    <div class="tag-user">
                         <img src="//img.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80Q90s50.jpg_.webp" alt="">
                    </div>
                   
                </div>
            </div>

            <!-- 底部弹窗 -->
            <div class="jumpwindow" id="jumpwindow">
                <div>
                    <div class="icon"><span>积分</span></div>
                    &nbsp;
                    <span class="big">购买可得24积分</span>
                </div>
                <div class="winbtn">
                    <button @click="cancelwindow">确定</button>
                </div>
                
            </div>

            <!------- 遮罩 ---------->
            <div class="shadow" id="shadow" @click="cancelwindow">

            </div>
        </div>

        <div class="test">ssss</div>
        
       

        
    </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper'
import { Popup } from 'mint-ui'
import axios  from 'axios'
 Vue.use(axios)

Vue.component(Popup.name, Popup);
export default {
    name:"detail",
    data(){
        return{
            showicon:false,
            detaillist:[],
            imglist:[]
        }
    },
    created(){
    this.getData()
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
      loop: true, // 循环模式选项，true 循环播放
      observer: true,//实时检测，动态更新
			pagination: {
				el: '.swiper-pagination',
                type: 'fraction',
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
         window.addEventListener('scroll', this.handleScroll,true)
    },
    methods:{
        pageuppro(){
            document.getElementById("product").scrollIntoView();
        },
        pageupcom(){
            document.getElementById("comment").scrollIntoView();

        },
        showwindow(){
            document.getElementById("jumpwindow").setAttribute("style","height:650px;transition: all 0.5s;opacity:1")
            document.getElementById("shadow").setAttribute("style","height:650px;transition: all 0.2s;opacity:1")
        },
        cancelwindow(){
            document.getElementById("jumpwindow").setAttribute("style","height:0px;transition: all 0.5s;opacity:0")
            document.getElementById("shadow").setAttribute("style","height:0px;transition: all 0.2s;opacity:0")
        },
        handleScroll(){
            if (document.getElementById("detail").scrollTop < 50){
                document.getElementById('topbar').setAttribute("style","transition:all 1.5s;opacity:0")
                this.showicon = true

            }else{
                document.getElementById('topbar').setAttribute("style","transition:all 1.5s;opacity:1")
                this.showicon = false
            }
            var scdata =  document.getElementById("detail").scrollTop
            if(scdata < 500){
               document.getElementById("productbtn").setAttribute("style","color:red; border-bottom:1px solid red")
                 document.getElementById("commentbtn").setAttribute("style","color:#999999; border:none")
            }else if(scdata >500){
                 document.getElementById("productbtn").setAttribute("style","color:#999999; border:none")
                 document.getElementById("commentbtn").setAttribute("style","color:red; border-bottom:1px solid red")
                  document.getElementById("detailbtn").setAttribute("style","color:#999999; border:none")
            }
            if(scdata >700){
                document.getElementById("detailbtn").setAttribute("style","color:red; border-bottom:1px solid red")
                 document.getElementById("commentbtn").setAttribute("style","color:#999999; border:none")
            }
  
                
        },
        pagetohome(){
             this.$router.push("/home")
        },
        getData(){
              console.log("获取商品详细数据");
                let that = this
                axios.get('/data/shangping.json')
                    .then(function (response) {
                            that.detaillist = response.data.data.nanzhuang[0];
                            that.imglist = response.data.data.nanzhuang[0].xiangqing;
                            console.log(that.detaillist)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    }
}
</script>
<style>
    .active{
        
    }
.detail{
    background :rgb(245,245,245);
    /* overflow-y:auto; */
    overflow: auto;
    height: 2000px;
}

.detail-top-bar{
    background-color: #fff;
    box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);
    height: 44px;
    width: 100%;
    display: flex;
    position:fixed;
}
#topbar2{
    z-index: 999;
    height: 44px;
    width: 100%;
    display: flex;
    position:fixed;
    justify-content: space-between;
}
#topbar2 div{
    text-align: center;
    border-radius: 8px;
    width: 8px;
    height: 8px;
    background: red;

}
#topbar2 .el-icon-shopping-cart-2:before {
    color: #fff;
    box-shadow: 5px 5px 5px #cccc;
    background: none;
    margin:-21px;
}
.detail-top-bar div{
    display: inline-flex;
    justify-content: space-around;
    align-content: space-around;
    flex: 1;
}
.detail-top-bar div span{
     margin:10px;
     font-size: 13px;
     color: rgb(153, 153, 153)
}
.el-icon-arrow-left{
    font-size: 25px;
    font-weight: 800;
    margin:5px;
    display: inline-block;
}

.el-icon-shopping-cart-2{
     font-size: 25px;
    font-weight: 800;
    margin:5px;
    display: inline-block;
}
.test{
    height:5000px;
}

/* 轮播样式 */
.detail .swiper-slide img{
    width: 100%;
    height: 375px;
}
   .top-product-dec .swiper-pagination-custom{
    background: red;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 20px;
    text-align: center;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
    .product-dec-swiper .swiper-pagination-customs {
      width: 15px;
      height: 2px;
      display:inline-block;
      background: red;
      opacity: .3;
      margin: 0 5px;
      outline: 0;
    }
  /*自定义分页器激活时的样式表现*/
  .product-dec-swiper .swiper-pagination-customs-active{
    opacity :1;
    background:red;
  }

  .price-product-dec,.serve-product-dec,.select-product-dec{
      background: #fff;
      width: 100%;
      height: auto;
  }
  .serve-product-dec,.select-product-dec{
      margin-top:10px;
  }
  .price-product-dec .small,.serve-product-dec .small,.select-product-dec .small{
      font-size: 12px;
        color: #888;
  }

  .price-product-dec .real-price label{
      font-size: 24px;
      color: #FF0036;
      margin-left: 5px;
  }
  .price-product-dec .real-price label i{
      color: #FF0036;
  }

  .price-product-dec .real-price .icon-text {
      background: #fb6878;
      color:#fff;
      font-size: 12px;
      margin-left: 6px;
      padding: 1px;
  }
   .price-product-dec .price .small{
       margin-left: 6px;
   }
    .price-product-dec .price ,.price-product-dec .dec {
         margin-bottom: 6px;
    }

   .price-product-dec .dec span{
       display: inline-block;
       width: 95%;
       font-size: 14px;
        color: #051B28;
       margin-left: 6px;
   }
   .big{
         font-size: 14px;
        color: #051B28;
   }
   .price-product-dec .express {
       justify-content: space-between;
       width: 95%;
       display: flex;
       margin-left: 6px;
       padding-bottom: 6px;
   }

   .serve-product-dec .promotion{
       margin-bottom: 10px;
       padding-top:6px;
       display: flex;
       justify-content: space-between;
   }
    .serve-product-dec .promotion span ,.serve-product-dec .serve span, .select-product-dec .select span, .select-product-dec .data span{
       
        margin-left: 6px;
    }
    .small3{
         font-size: 12.63px;
        color:#333333;
    }
    
   
   .serve-product-dec .promotion i{
       margin-right: 5px;
       line-height: 23px;
   }
    .serve-product-dec  .serve {
        display: flex;
       padding-bottom:6px;
    }
   .small2 {
       font-size: 12px;
       color: #051b28;

   }

   /* 弹窗 */
   .jumpwindow{
       overflow: hidden;
        height: 0px;
       bottom:0px;
       position: absolute;
       background: #fff;
       width: 100%;
       z-index: 999;
       box-shadow: 5px 5px 5px #cccc;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
   }
   .jumpwindow .icon{
       display: inline-block;
       background: rgb(255,246,248);
       color: #fb6878;
       font-size: 12px;
       margin-left: 15px;
       margin-top:15px;
   }
   .winbtn {
       width: 100%;
   }
   .winbtn button{
       width: 100%;
       height: 48px;
       border: none;
       color: #fff;
       background: #FF0036;
   }
   /* 遮罩 */
   .shadow {
       position: absolute;
       bottom:400px;
       background: rgba(0,0,0,.5);
       height: 0px;
       width: 100%;
       z-index: 900;
   }


   .serve .right i {
       display: inline-block;
       position: relative;
       margin-left: 75px;
        line-height: 27px;
   }
   .select i{
        display: inline-block;
       position: relative;
       margin-left:232px;
        line-height: 27px;
   }
   .data i {
         display: inline-block;
       position: relative;
       margin-left:270px;
        line-height: 27px;
   }
    .select-product-dec .select{
        padding-top: 6px;
        margin-bottom: 10px;
    }
     .select-product-dec  .data{
        padding-bottom: 10px;
     }

     /* 商品评价样式 */
     .product-comment {
         margin-left: 6px;
         width: 96%;
         display: flex;
         justify-content: space-between;
     }
    ul{
        list-style-type: none;
         margin-left: 6px;
    }
     .tag li {
         display: inline-block;
     }




   
</style>