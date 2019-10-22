<template>
  <div class="shopcar">
    <div class="shop-top">
       <i class="el-icon-arrow-left" @click="huitui()"></i>
       <div class="shopmuch">购物车（{{shopcarone.length}}）</div>
    </div>
    <div class="shop-liebiao">
             <div class="shop-xiangqing" v-for="(item,index) in shopcarone" :key="index" >
                 <div class="xiangqing-top" @click="xuanze(index,item)">
                   <div class="radius" ></div>
                   <i class="el-icon-goods"></i>
                   <div class="shop-dianpu">{{item.dian}}</div>
                   <i class="el-icon-arrow-right"></i>
                     <div class="shop-bianji">编辑</div>

                 </div>

                 <div class="xiangqing-buttom">
                       <div class="radius-two" @click="xuanzezi(index,item)"></div>
                       <div class="shop-img">
                         <img :src="item.url" alt="" style="width:100%;height:100%">
                       </div>
                       <div class="xiangqing-zuo">
                         <div class="xiangqing-miaoshu">
                            {{item.name}}
                         </div>
                         <div class="xiangqing-banbeng">
                           <div class="banbeng"> 标准版</div>
                          <i class="el-icon-arrow-down"></i>
                          </div>
                          <div class="xiangqing-zongjie">
                                <div class="xiangqing-money">
                                  ￥{{item.money}}
                                </div>
                                <div class="xiangqing-shuliang"> 
                                  <i class="el-icon-minus" @click="jian(item)"></i> &nbsp;&nbsp;
                                  {{item.count}}&nbsp;&nbsp;
                                  <i class="el-icon-plus" @click="jia(item)"></i>
                                </div>
                          </div>
                            
                       </div>
                 </div>
                 <div class="shoping-flex">
                      <div class="radius-quanxuan"></div>
                      <div class="shop-jiesuan">全选</div>
                      <div class="shop-heji">合计   <span style="color:orange">￥{{muchmoney}}</span></div>
                      <div class="shop-jieqian">结算（{{money.length}}）</div>
             
                 </div>
                          <!-- 最底部 -->
                      <div class="shop-bottom">
                        <div @click="topagehome">
                          <img src="/首页.png" alt="">
                          <span>首页</span>
                        </div>
                        <div>
                          <img src="/购物车灰.png" alt="">
                          <span>购物车</span>
                        </div>
                        <div>
                          <img src="/订单灰.png" alt="">
                          <span>订单列表</span>
                        </div>
                        <div>
                          <img src="/用户灰.png" alt="">
                          <span>我的淘宝</span>
                          </div>
                        <div>
                          <img src="/更多.png" alt="">
                          <span>更多</span>
                        </div>
                     </div>
    <!--  -->

             </div>
    </div>

  </div>
</template>
<script>


export default {
  name: 'shopcar',
  data(){
    return{
        xuanzhong:"true",
        money:[],
        muchmoney:0,
        shopcarone:[]
    }
  },
  created(){
     this.shopcarone=JSON.parse(localStorage.getItem("shop"))
     console.log(this.shopcarone)
  },
  watch:{
    money:function(newValue,oldValue){
      console.log(newValue)
      let much=0
       for(var i=0;i<newValue.length;i++){
         
           much +=newValue[i].money*newValue[i].count
       }
       this.muchmoney=much
        console.log(this.muchmoney)
    },
   
  },
  methods:{
    topagehome(){
        this.$router.push({
       name:'home',
    })
    },
    huitui(){
         this.$router.push({
       name:'productList',
    })
    },
    jian(item){
      
      if(item.xuan=="2"){
        console.log("222")
         let min=this.money
                let indx=min.findIndex(function (min) {
                   return min.name==item.name
               })
               this.money[indx].count--
      }else{
        console.log("3")
         item.count--
      }
    },
    jia(item){
     
       if(item.xuan=="2"){
         let min=this.money
                let indx=min.findIndex(function (min) {
                   return min.name==item.name
               })
              this. money[indx].count++
      }else{
         item.count++
      }
    },
    xuanze(index,item){
     
      console.log(item)
       console.log(item.xuan)
      if(item.xuan=="1"){
          let radius=document.querySelectorAll(".radius")
         let radiuszi=document.querySelectorAll(".radius-two")
         radius[index].style.background="rgb(255,80,0)"
         radiuszi[index].style.background="rgb(255,80,0)"
         this.$store.state.alerady.push(item)
         this.money.push(item)
         console.log(this.money)
        item.xuan="2"
      }else{
          let radius=document.querySelectorAll(".radius")
         let radiuszi=document.querySelectorAll(".radius-two")
         radius[index].removeAttribute("style")
         radiuszi[index].removeAttribute("style")
         var mon=this.money
                var ind=mon.findIndex(function (mon) {
                   return mon.name==item.name
               })
               console.log(ind)
                this.money.splice(ind,1)
         let it =this.$store.state.alerady
          var inde=it.findIndex(function (it) {
                   return it.name==item.name
               })
         this.$store.state.alerady.splice(inde,1)
         item.xuan="1"
      }
       
    },
        xuanzezi(index){
           if(this.xuanzhong=="false"){
          let radius=document.querySelectorAll(".radius")
         let radiuszi=document.querySelectorAll(".radius-two")
         radius[index].style.background="rgb(255,80,0)"
         radiuszi[index].style.background="rgb(255,80,0)"
         this.xuanzhong="true"
      }else{
          let radius=document.querySelectorAll(".radius")
         let radiuszi=document.querySelectorAll(".radius-two")
         radius[index].removeAttribute("style")
         radiuszi[index].removeAttribute("style")
         this.xuanzhong="false"
      }
    }
    

  }
}

</script>
<style >
.shop-top{
  width: 100%;
  height: 50px;
display: flex;
background-color: white;
border: 1px solid black
}
.shopcar{
 
  background-color: rgb(242, 242, 242)
}
.shopmuch{
  width: 70%;
  height:50px;
  line-height: 50px;
  text-align: center;
font-size: 18px
}
.el-icon-arrow-left{
  margin-top: 10px
}
.shop-liebiao{
  width: 100%;
  margin-top: 10px;
  
  
}
.shop-xiangqing{
  width: 100%;
  height: 150px;
  border: 1px solid black;
  background-color: white;
  margin-top: 5px
}
.xiangqing-top{
  width: 100%;
  height: 20%;
  display: flex
}
.radius{
  width: 20px;
  height: 20px;
  border: 1px solid black;
 border-radius: 45%;
 margin-top: 5px;
 margin-left: 5px
}
.shop-dianpu{
  width: 30%;
  height: 100%;
  line-height: 30px;
  margin-left: 10px;
  font-size: 13px
}
.el-icon-goods{
  margin-top: 8px;
  margin-left: 6px
}
.el-icon-arrow-right{
   margin-top: 8px;
  margin-left: 6px
}
.shop-bianji{
  font-size: 12px;
  height: 100%;
  line-height: 30px;
  margin-left: 150px
}
.xiangqing-buttom{
  width: 100%;
  height: 80%;
  display: flex
}
.radius-two{
 width: 20px;
  height: 20px;
  border: 1px solid black;
 border-radius: 45%;
 margin-top: 30px;
 margin-left: 5px
}
.shop-img{
  width: 25%;
  height: 50px;
  margin-top: 20px;
  margin-left: 30px
}
.xiangqing-zuo{
  width: 55%;
  height: 100%;
  margin-left: 5px;
 
}
.xiangqing-miaoshu{
  width: 100%;
  height: 20%;
   font-size: 13px
}
.xiangqing-banbeng{
  width: 100%;
  height: 20%;
  background-color: rgb(245, 245, 245);
  margin-top: 20px;
  display: flex;
  justify-content: space-between
}
.el-icon-arrow-down{
 margin-right: 10px;
 margin-top: 2px
}
.banbeng{
  color: #ccc;
  font-size: 13px
}
.xiangqing-zongjie{
  width: 100%;
  height: 50px;
display: flex
}
.xiangqing-money{
  color: orange;
  width: 65%;
  height: 30%;
}
.xiangqing-shuliang{
  width: 35%;
  height: 30%;
}
.shoping-flex{
  width: 100%;
  height: 5%;
  position: fixed;
  border: 1px solid #cccc;
  bottom: 31px;
  display: flex;
  background: #fff;

}
.radius-quanxuan{
   width: 20px;
  height: 20px;
  border: 1px solid black;
 border-radius: 45%;
 margin-top: 8px;
 margin-left: 5px
}
.shop-jiesuan{
  width: 10%;
  height: 100%;
  line-height: 40px;
 margin-left: 10px
}
.shop-heji{
  width: 24%;
  height: 100%;
  margin-left: 100px;
  line-height: 40px
}
.shop-jieqian{
  width: 30%;
  height: 100%;
  background-color: rgb(255, 85, 0);
  text-align: center;
  line-height: 40px;
  color: white
}

/* 底部导航栏 */
.shop-bottom{
  border-top: 1px solid #cccc;
  padding-top:5px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #5D6568;
  position: fixed;
  width: 100%;
  bottom: 0px;
}
.shop-bottom img{
  width: 15px;
}
.shop-bottom div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>