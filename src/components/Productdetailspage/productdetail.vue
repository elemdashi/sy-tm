<template>
    <div class="detail" id="detail">
        <!------- 滚动隐藏顶部导航栏 -------->
        <div class="detail-top-bar" id="topbar">
            <i class="el-icon-arrow-left" @click="pagetohome"></i>
            <div class="top-bar-title"> 
                <span>商品</span>
                <span>评价</span>
                <span>详情</span>
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
        <div id="content">
            <div class="top-product-dec">
                <!------------------- 商品主图详情轮播 ---------------------->
                 <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i2/2261786154/O1CN017JogBc1vKZwkQgzN1_!!2261786154.jpg_2200x2200Q50s50.jpg_.webp"></div>
                        <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i4/2261786154/O1CN01OMHep61vKZwp75jpX_!!2261786154.jpg_2200x2200Q50s50.jpg_.webp"></div>
                        <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i3/2261786154/O1CN015h0KdN1vKZwnNYoTv_!!2261786154.jpg_2200x2200Q50s50.jpg_.webp"></div>
                        <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i1/2261786154/O1CN01QfqWys1vKZwmf74cV_!!2261786154.jpg_2200x2200Q50s50.jpg_.webp"></div>
                        <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i4/2261786154/O1CN01CV1SJy1vKZwlE5GfM_!!2261786154.jpg_2200x2200Q50s50.jpg_.webp"></div>
                    </div>
                        <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <!----------- 商品价格和名称 ----------------->
            <div class="middle-product-dec">
                <div class="price">
                    <span>￥138.00</span>
                </div>
                <div class="dec">
                    <span>秋冬款裤子男士牛仔裤秋季2019新款潮流宽松直筒潮牌修身休闲长裤</span>
                </div>
            </div>

            <div class="bottom-product-dec">
                <div class="select">
                    <span>选择</span>
                    <span>请选择颜色 尺码</span>
                </div>
                <div class="data">
                    <span></span>
                    <span>参数</span>
                    <span>材质</span>
                </div>
            </div>
        </div>
        <div class="test"></div>
        
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name:"detail",
    data(){
        return{
            showicon:false,
        }
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
        handleScroll(){
            console.log("sksk")
            console.log(document.getElementById("detail").scrollTop)
            if (document.getElementById("detail").scrollTop < 200){
                document.getElementById('topbar').setAttribute("style","transition:all 1.5s;opacity:0")
                this.showicon = true

            }else{
                document.getElementById('topbar').setAttribute("style","transition:all 1.5s;opacity:1")
                this.showicon = false


            }
        },
        pagetohome(){
             this.$router.push("/home")
        }
    }
}
</script>
<style>
.detail{
    background :rgb(245,245,245);
    overflow-y:auto;
    height: 900px;
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
    height:1900px;
}

/* 轮播样式 */
.detail .swiper-slide img{
    width: 100%;
    height: 375px;
}

  /* 自定义分页器样式 */
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

  .middle-product-dec{
      background: #fff;
      width: 100%;
      height: auto;
  }
</style>