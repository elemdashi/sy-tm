<template>
    <div class="detail" id="detail">
        <el-backtop ></el-backtop>
        <!------- 滚动隐藏顶部导航栏 -------->
        <div class="detail-top-bar" id="topbar">
            <i class="el-icon-arrow-left" @click="pagetolist"></i>
            <div class="top-bar-title"> 
                <span id="productbtn" @click="pageuppro">商品</span>
                <span id="commentbtn" @click="pageupcom">评价</span>
                <span id="detailbtn" @click="pagedetail">详情</span>
                <router-link to="/shopcar" v-if="tag=='true'"><i class="el-icon-shopping-cart-2" ></i></router-link>
                <router-link to="/login" v-else><i class="el-icon-shopping-cart-2" ></i></router-link>
            </div>
        </div>
        <div v-if="showicon" id="topbar2" >
            <div>
                <i class="el-icon-arrow-left" @click="pagetolist"></i>
            </div>
            <div>
                <router-link to="/shopcar" v-if="tag=='true'"><i class="el-icon-shopping-cart-2" ></i></router-link>
                <router-link to="/login" v-else><i class="el-icon-shopping-cart-2" ></i></router-link>
            </div>
           
        </div>
        <div id="content" >
            <div class="product-dec-swiper"  id="product">
                <!------------------- 商品主图详情轮播 ---------------------->
                 <div class="swiper-container">
                    <div class="swiper-wrapper" v-if="this.detaillist.length==2">
                        <div class="swiper-slide" v-for="(item,index) in detaillist[1].xiangqing" :key="index" ><img :src="item"></div>
                       
                
                    </div>
                     <div class="swiper-wrapper"  v-else>
                        
                        <div class="swiper-slide" v-for="(item,index) in detaillist[0].xiangqing" :key="index"><img :src="item"></div>
                    </div>
                        <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
                
            <!----------- 商品价格和名称 ----------------->
            <div class="price-product-dec">
                <div class="real-price">
                    <label v-if="this.detaillist.length==2"><i>￥</i>{{detaillist[1].money}}</label>
                     <label v-else><i>￥</i>{{detaillist[0].money}}</label>
                    <span class="icon-text">爆款特卖</span>
                    <span class="icon-text">淘金币抵2%</span>
                </div>
                <div class="price">
                    <span class="small" v-if="this.detaillist.length==2">价格：<del>￥{{detaillist[1].delmoney}}</del></span>
                     <span class="small" v-else>价格：<del>￥{{detaillist[0].delmoney}}</del></span>
                </div>
                <div class="dec">
                    <span v-if="this.detaillist.length==2">{{detaillist[1].fullname}}</span>
                     <span v-else>{{detaillist[0].fullname}}</span>
                </div>
                <div class="express">
                    <span class="small">快递：0.00</span>
                    <span class="small" v-if="this.detaillist.length==2">{{detaillist[1].much}}</span>
                    <span class="small" v-else>{{detaillist[0].much}}</span>
                    <span class="small" v-if="this.detaillist.length==2">{{detaillist[1].address}}</span>
                     <span class="small" v-else>{{detaillist[0].address}}</span>
                </div>
            </div>
            <!-- 商品促销和服务 -->
            <div class="serve-product-dec" >
                <div class="promotion" @click="showwindow">
                    <div class="left">
                        <span class="small">促销</span>
                        <span class="big">购买可得24积分</span>
                    </div>
                    <i class="el-icon-arrow-right" ></i>
                </div>
                <div class="serve" @click="showwindow">
                    <div class="left">
                        <span class="small">服务</span>
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
                <div class="select" @click="addproduct">
                    <span class="small">选择</span>
                    <span class="small3">请选择颜色 尺码</span>
                    <i class="el-icon-arrow-right" ></i>
                </div>
                <div class="data" @click="showwindow" id="comment">
                    <span class="small">参数</span>
                    <span class="small3">品牌 材质</span>
                    <i class="el-icon-arrow-right" ></i>
                </div>
            </div>

            <!-------------------  商品评价  ----------------------->
            <div class="product-comment-group" >
                <div class="product-comment">
                    <div class="product-comment-title">商品评价（5270）</div>
                    <el-button class="product-comment-title2" @click="drawer = true" type="primary">查看全部 <i class="el-icon-arrow-right" ></i></el-button>
                </div>
                <ul class="tag">
                    <li>很划算(403)</li>
                    <li>很舒适(380)</li>
                    <li>质量不错(367)</li>
                </ul>
                <div class="tag-comment">
                    <div class="tag-user">
                         <img src="//img.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80Q90s50.jpg_.webp" alt="">
                         <span>张**8</span>
                    </div>
                    <div class="tagcontent">
                        穿了不到一周就这样了
                    </div>
                    <div class="date">2019-10-14 颜色:B款/黑色;尺码:29</div>
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
            <!------------ 商品规格弹窗 ------------->
            <div class="jumpwindow2" id="jumpwindow2">
                <div class="header">
                  <div class="img">
                      <img src="//gw.alicdn.com/bao/uploaded/i4/188124207/O1CN01995L831gwqnxe7VAq_!!188124207.jpg_200x200Q50s50.jpg" alt="">
                  </div>
                  <div class="title">
                      <div class="price">￥89</div>
                      <div class="normal">库存 2219件</div>
                      <div class="normal">已选择: {{choseitem}} {{choseitem2}}</div>
                  </div>
                    <button @click="cancelwindow3">X</button>
                  
                </div>

                <div class="body">
                    <!-- 颜色规格 -->
                    <div class="color">
                        <div class="normal">颜色</div>
                        <div class="proclass">
                            <div @click="chosechange(index,item)" :class="{active1:choseIndex==index}" v-for="(item,index) in colorlist">
                                <img src="//gw.alicdn.com/bao/uploaded/i4/188124207/O1CN01zF1Awp1gwqo1CAmbl_!!188124207.jpg_80x80.jpg" alt="">
                                <span>{{item}}</span>
                            </div>
                        </div>
                    </div>

                    <!--尺码规格 -->
                    <div class="size">
                        <div class="normal">尺码</div>
                        <div class="sizenumber">
                            <div @click="chosechange1(index,item)" :class="{active2:choseIndex1==index}" v-for="(item,index) in sizelist">{{item}}</div>
                        </div>
                       
                    </div>

                    <!-- 购买数量 -->
                    <div class="number">
                        <div class="normal">购买数量</div>
                        <div class="btn">
                            <button>-</button><span>1</span><button>+</button>
                        </div>
                        
                    </div>

                    <!-- 花呗分期 -->
                    <div class="huabei">
                        <div class="title normal">花呗分期 (可选)</div>
                        <div class="title2">
                            <div class="title2see normal">
                                <div class="box">
                                    <span>分3期(含手续费)</span>
                                    <span>￥46.03/期</span>
                                </div>
                                <div class="box">
                                    <span>分6期(含手续费)</span>
                                    <span>￥23.51/期</span>
                                </div>
                                <div class="box">
                                    <span>分12期(含手续费)</span>
                                    <span>￥12.09/期</span>
                                </div>
                                <div class="box">
                                    <span>分18期(含手续费)</span>
                                    <span>￥8.36/期</span>
                                </div>
                                <div class="box">
                                    <span>分24期(含手续费)</span>
                                    <span>￥6.46/期</span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="winbtn" id="buybtn">
                    <button @click="cancelwindow2">确定</button>
                </div>
                
            </div>

            <!------- 遮罩 ---------->
            <div class="shadow" id="shadow" @click="cancelwindow">

            </div>
        </div>

        <div class="test" id="prodetail">
            <img src="//img.alicdn.com/imgextra/i2/188124207/O1CN01BcWJKD1gwqkRbSFaI_!!188124207.jpg_1152x1920Q90s50.jpg_.webp" alt="">
        </div>

        <!----------  底部固定操作栏/加入购物车   ------------>
        <div class="action-bar">
            <div class="left-icon">
                <div class="left-icon1">
                    <img src="/店铺.png" alt="">
                    <span>店铺</span>
                </div>
                 <div class="left-icon1">
                    <img src="/旺旺.png" alt="">
                    <span>客服</span>
                </div>
                 <div class="left-icon1">
                    <img src="/收藏.png" alt="">
                    <span>收藏</span>
                </div>
               
            </div>
            <div class="right-btn">
                <button class="shopcar" @click="addproduct">加入购物车</button>
                <button class="buy">立即购买</button>
            </div>
        </div>
       <!-- 评价页面 -->
        <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose" size=100%>
            <img src="/评价.png">
        </el-drawer>
        
       

        
    </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper'
import { Popup } from 'mint-ui'

Vue.component(Popup.name, Popup);
export default {
    name:"detail",
    data(){
        return{
            choseitem:"",
            choseitem2:"",
            choseIndex:0,
            choseIndex1:0,
            colorlist:["无绒款/灰蓝","无绒款/浅牛仔蓝","无绒款/中牛仔蓝","无绒款/深牛仔蓝"],
            sizelist:[28,29,30,31,32],
            showicon:false,
            detaillist:[],
            imglist:[],
            drawer: false,
            direction: 'rtl',
            tag:"false"
        }
    },
    created(){
        console.log(this.$store.state.promsg)
        console.log(JSON.parse(localStorage.getItem("item")))
        // this.detaillist=[]
        this.$store.state.promsg.push(JSON.parse(localStorage.getItem("item")))
        console.log(this.$store.state.promsg)
         if(localStorage.getItem("log")=="true"){
        this.tag=localStorage.getItem("log")
    }
    console.log(localStorage.getItem("log"))
     this.detaillist=this.$store.state.promsg
     console.log(this.detaillist)
    },
    mounted(){
         console.log(JSON.parse(localStorage.getItem("item")))
        var mySwiper = new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
            loop: true, // 循环模式选项，true 循环播放
            observer: true,//实时检测，动态更新
			pagination: {
				el: '.swiper-pagination',
                type: 'fraction',
                 renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + totalClass + '"></span>';
                },
                    }
		})
        document.getElementById("detail").addEventListener('scroll', this.handleScroll,true)
    },
    methods:{
        huoqu(){
       this.$store.commit("item")
       console.log(this.$store.state.promsg)
    },
       chosechange(index,item){
           this.choseIndex = index
           this.choseitem = item
       },
       chosechange1(index,item){
           this.choseIndex1 = index
           this.choseitem2 = item
       },
        addproduct(){
            document.getElementById("jumpwindow2").setAttribute("style","height:650px;transition: all 0.5s;opacity:1")
            document.getElementById("shadow").setAttribute("style","height:650px;transition: all 0.2s;opacity:1")
            document.getElementById('topbar').setAttribute("style","transition:all 1.5s;opacity:0")
         
           
        },
         handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        pageuppro(){
            document.getElementById("product").scrollIntoView();
        },
        pageupcom(){
            document.getElementById("comment").scrollIntoView();
        },
        pagedetail(){
            document.getElementById("prodetail").scrollIntoView();
            
        },
        showwindow(){
            document.getElementById("jumpwindow").setAttribute("style","height:650px;transition: all 0.5s;opacity:1")
            document.getElementById("shadow").setAttribute("style","height:650px;transition: all 0.2s;opacity:1")
        },
        cancelwindow(){
            document.getElementById("jumpwindow").setAttribute("style","height:0px;transition: all 0.5s;opacity:0")
            document.getElementById("shadow").setAttribute("style","height:0px;transition: all 0.2s;opacity:0")
        },
        cancelwindow2(){
            document.getElementById("jumpwindow2").setAttribute("style","height:0px;transition: all 0.5s;opacity:0")
            document.getElementById("shadow").setAttribute("style","height:0px;transition: all 0.2s;opacity:0")
            console.log("加入购物车了")
            console.log("加入的商品是" + this.$store.state.promsg[1].name)
            console.log(this.detaillist)
            console.log(this.detaillist[0].count)
            console.log(this.$store.state.shopcar)
             if(this.detaillist[1].count==0){
                 this.$store.state.shopcar.push(this.detaillist[1])

                  this.detaillist[1].count++
                  let shopjson=JSON.stringify(this.$store.state.shopcar)
                  localStorage.setItem("shop",shopjson)
            }else{
                this.detaillist[1].count++
                 let shopjson=JSON.stringify(this.$store.state.shopcar)
                  localStorage.setItem("shop",shopjson)
            }
        },
        cancelwindow3(){
            document.getElementById("jumpwindow2").setAttribute("style","height:0px;transition: all 0.5s;opacity:0")
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
        pagetolist(){
             this.$router.push("/productlist")
        },
    }
}
</script>
<style>
.test{
    height:2000px
}
.detail{
    background :rgb(245,245,245);
    overflow: auto;
    position: relative;
    height: 900px;
}
.el-drawer{
    width: 100%;
}

.detail-top-bar{
    background-color: #fff;
    box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);
    height: 44px;
    width: 100%;
    display: flex;
    position:fixed;
    z-index: 999;
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
}
#topbar2 .el-icon-shopping-cart-2 {
    color: #fff;
    box-shadow: 5px 5px 5px #cccc;
    background: none;
    right:20px;
    position: absolute;
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
#topbar2 .el-icon-arrow-left{
    position: absolute;
    left: 1px;
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

/* 轮播样式 */
.product-dec-swiper{
    position: relative;
}
.product-dec-swiper .swiper-pagination{
    position: absolute;
    bottom:10px;
    left: 320px;
    background-color: rgba(100,100,100,.6);
    border-radius: 10px;
    line-height: 20px;
    height: 20px;
    color: #fff;
    width: 10%;
    font-size: 12px;
}
.detail .swiper-slide img{
    width: 100%;
    height: 375px;
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
       margin-right: 8px;
       line-height: 23px;
   }
    .serve-product-dec  .serve {
        display: flex;
       padding-bottom:6px;
    }
    .serve-product-dec  .serve  i {
        margin-left:73px;
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
       position: fixed;
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
    }
     .tag li {
         display: inline-block;
         background-color: #FEE;
        color: #666;
        margin: 6px 3px;
        padding: 6px 9px;
        text-align: center;
        border-radius: 26px;
        font-size: 12px;
        line-height: 14px;
     }

     .tag-user img{
         width: 24px;
         height: 24px;
         vertical-align: middle;
     }
    .product-comment-group{
        margin-bottom: 10px;
        margin-top:10px;
        background: #FFFF;
    }
     .product-comment {
         font-size: 14px;
         padding-top:10px;
         display: flex;
         align-items: center;
         align-content: center;
     }
     .product-comment .product-comment-title2, .product-comment .product-comment-title2 i{
         color:#ff0036;
     }
     .product-comment .product-comment-title2{
         border:none;
         outline: none;
         background: none;
         padding:0;
     }
     .el-button span{
         line-height: 30px;
     }
     .product-comment .product-comment-title{
         color:#666666;
     }
     .tag-user span{
         font-size: 12px;
         color:#999999;
         margin-left: 6px;
     }
     .tag-user{
         margin-left: 6px;
         line-height: 24px;
     }
.tagcontent{
    font-size: 13px;
    line-height: 16px;
    text-align: justify;
    height: 32px;
    overflow: hidden;
    word-break: break-all;
    margin-left: 6px;
    padding:5px 0 ;
    margin-top:10px;
}
.tag-comment .date{
    margin-left: 6px;
    font-size: 10px;
    padding-top: 8px;
    color: #999;
    line-height: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-right:5px; 
}
.product-ask-group{
    padding:10px 0 10px 0;
    margin-bottom: 10px;
}
.product-ask-group .title{
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin-left: 6px;
}
.product-ask-group .title .title1{
    font-size: 14px;
    color: #666666;
}
.product-ask-group .title .title2 {
    background: none;
    border: none;
    color: #ff0036;
    font-size: 14px;
    position: absolute;
    left:248px;
}
.product-ask-group .title .title2  i{
    color: #ff0036;

}
.askicon{
    background: #ff7b3f;
    color: #fff;
    border-radius: 2px;
    font-size: 12px;
    margin-right: 5px;
    margin-left:6px;
}


.asktitle{
    font-size: 13px;
}

.ask .left ,.ask .right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
     font-size: 13px;
    color: #999999;
}
.ask .asktitle{
    color:#051b28;
}

.product-ask-group{
    background: #ffff;
}

/* 底部固定操作栏样式 */
.action-bar{
    box-shadow: 5px 5px 5px #051b28;
    width:100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0px;
    display: flex;
}
.left-icon{
    color:#999999;
    font-size: 12px;
    width:40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.left-icon1{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.left-icon img{
    width: 18px
}
.right-btn{
    width: 60%;
    display: flex;

}
.right-btn button{
    height: 100%;
    border:none;
    outline: none;
    flex:1
}
.right-btn .shopcar{
    background: #FF9500;
    color: #fff;
}
.right-btn .buy{
    background: #FF0036;
    color: #fff;
}

#prodetail img{
    width:100%;
}
/* 规格弹窗 */
.jumpwindow2 {
   overflow: hidden;
    height: 0px;
    bottom:0px;
    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 999;
    box-shadow: 5px 5px 5px #cccc;
    }
    .jumpwindow2 .normal{
        color:#051B28;
        font-size: 13px;
    }
.jumpwindow2 .header{
    border-bottom: 1px solid #cccc;
    width: 90%;
    margin: 0 auto;
}
.jumpwindow2 .header img{
    width:100px;
    height: 100px;
}
.jumpwindow2 .header button{
    border-radius: 50%;
    border: 1px solid #cccc;
    background: none;
    display: inline-block;
    height:20px;
    width: 20px;
    margin-left: 80px;
}

.jumpwindow2 .header  .img{
    border:1px solid #fff;
}
.jumpwindow2 .header .title{
    margin-top:20px;
    margin-left: 10px;
}
.jumpwindow2 .header .title .price{
    font-size: 16px;
    color:#FF0036;
}
.jumpwindow2 .body {
    width: 90%;
    margin:0 auto;
}
.jumpwindow2 .body img{
    width:24px;
    height: 24px;
    vertical-align:middle
}
.jumpwindow2 .header{
    display: flex;
    flex-direction: row;
}

.jumpwindow2 .body .proclass div{
    display: flex;
    padding:5px;
    border-radius: 10px;
    display: inline-block;
    background: #F5F5F5;
    margin-top:10px;
    margin-left: 10px;
    font-size: 13px;

}
.jumpwindow2 .body .proclass div span{
    margin-left: 10px;
}

.jumpwindow2 .size .sizenumber div{
    display: inline-block;
    background: #F5F5F5;
    margin:10px;
    width:40px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 10px;
}
.jumpwindow2 .size, .jumpwindow2 .color,.jumpwindow2 .number{
    margin-top:10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cccc;
}
.jumpwindow2 .huabei{
     margin-top:10px;
    padding-bottom: 10px;
}
.jumpwindow2 .number{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.jumpwindow2 .number .btn button {
    border: none;
    outline: none;
    background: #F5F5F5;
    width: 25px;
    height: 25px;
}
.jumpwindow2 .number .btn span{
    background: #F5F5F5;
    display: inline-block;
    margin:0 5px 0 5px;
}
.jumpwindow2 .huabei .title2{
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    margin-top:10px;
}
.jumpwindow2 .huabei .title2 .title2see{
    display: flex;
}
.jumpwindow2 .huabei .title2 .box{
    width: 120px;
    margin-right: 20px;
    background: #F5F5F5;
}
#buybtn{
    position: absolute;
    bottom: 0px
}
.active1{
     display: flex;
    padding:5px;
    border-radius: 10px;
    display: inline-block;
    background: rgb(255,245,247);
    margin-top:10px;
    margin-left: 10px;
    font-size: 13px;
    color:#FF0036;
    border: 1px solid #FF0036;
}
.active2{
    color:#FF0036;
    border: 1px solid #FF0036;
    background: red;
}
    




   
</style>