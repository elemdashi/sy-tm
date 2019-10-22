<template>
  <div class="shopcar">
    <div class="shop-top">
       <i class="el-icon-arrow-left" @click="huitui()"></i>
       <div class="shopmuch">购物车（{{shopcarone.length}}）</div>
    </div>
    <div class="shop-liebiao">
             <div class="shop-xiangqing" v-for="(item,index) in shopcarone" :key="index" >
                 <div class="xiangqing-top" >
                   <div class="radius"  @click="xuanze(index,item)"></div>
                   <i class="el-icon-goods"></i>
                   <div class="shop-dianpu">{{item.dian}}</div>
                   <i class="el-icon-arrow-right"></i>
                     <div class="shop-bianji" @click="shanchu(item,index)">编辑</div> 

                 </div>

                 <div class="xiangqing-buttom">
                       <div class="radius-two" @click="xuanze(index,item)"></div>
                       <div class="shop-img">
                         <img :src="item.url" alt="">
                       </div>
                       <div class="xiangqing-zuo">
                         <div class="xiangqing-miaoshu">
                            {{item.name}}
                         </div>
                         <div class="xiangqing-banbeng" @click="openwindow">
                           <div class="banbeng"> {{choseitem}} {{choseitem2}}</div>
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
                      <div class="shop-jiesuan" @click="checkall">全选</div>
                      <div class="shop-heji">合计   <span style="color:orange">￥{{muchmoney}}</span></div>
                      <div class="shop-jieqian">结算（{{money.length}}）</div>
             
                 </div>
                 
            <!------- 遮罩 ---------->
            <div class="shadow" id="shadow" >

            </div>
                 <!-- 商品规格弹窗 -->
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
                                <div @click="chosechange(index,item)" :class="{active1:choseIndex==index}" v-for="(item,index) in colorlist" :key="index">
                                    <img src="//gw.alicdn.com/bao/uploaded/i4/188124207/O1CN01zF1Awp1gwqo1CAmbl_!!188124207.jpg_80x80.jpg" alt="">
                                    <span>{{item}}</span>
                                </div>
                            </div>
                        </div>

                        <!--尺码规格 -->
                        <div class="size">
                            <div class="normal">尺码</div>
                            <div class="sizenumber">
                                <div @click="chosechange1(index,item)" :class="{active2:choseIndex1==index}" v-for="(item,index) in sizelist" :key="index">{{item}}</div>
                            </div>
                          
                        </div>

                    </div>
                    <div class="winbtn" id="buybtn">
                        <button @click="cancelwindow2">确定</button>
                    </div>
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
      choseitem:"",
        choseitem2:"",
        choseIndex:0,
        choseIndex1:0,
        colorlist:["无绒款/灰蓝","无绒款/浅牛仔蓝","无绒款/中牛仔蓝","无绒款/深牛仔蓝"],
        sizelist:[28,29,30,31,32],
        xuanzhong:"true",
        money:[],
        muchmoney:0,
        shopcarone:[],
        editindex:""
    }
  },
  created(){
     this.shopcarone=JSON.parse(localStorage.getItem("shop"))
     console.log(this.shopcarone)
  },
 updated() {
     let shopjsontwo=JSON.stringify(this.shopcarone)
    localStorage.setItem("shop",shopjsontwo)

  },
  
   
  watch:{
    money:function(newValue){
      console.log(newValue)
      let much=0
       for(var i=0;i<newValue.length;i++){
         
           much +=newValue[i].money*newValue[i].count
       }
       this.muchmoney=much
        console.log(this.muchmoney)
    }
   
  },
  methods:{
    showe(index){
      console.log(index)
      this.editindex = index
    },
    cancelwindow2(){
        document.getElementById("jumpwindow2").setAttribute("style","height:0px;transition: all 0.5s;opacity:0")
            document.getElementById("shadow").setAttribute("style","height:0px;transition: all 0.2s;opacity:0")
    },
     cancelwindow3(){
            document.getElementById("jumpwindow2").setAttribute("style","height:0px;transition: all 0.5s;opacity:0")
            document.getElementById("shadow").setAttribute("style","height:0px;transition: all 0.2s;opacity:0")
        },
    openwindow(){
       document.getElementById("jumpwindow2").setAttribute("style","height:650px;transition: all 0.5s;opacity:1")
            document.getElementById("shadow").setAttribute("style","height:650px;transition: all 0.2s;opacity:1")
    },
     chosechange(index,item){
           this.choseIndex = index
           this.choseitem = item
       },
       chosechange1(index,item){
           this.choseIndex1 = index
           this.choseitem2 = item
       },
       shanchu(item,index){
            let min=this.money
                let indx=min.findIndex(function (min) {
                   return min.name==item.name
               })
               if(indx !=-1){
                this.money.splice(indx,1)
               this. shopcarone.splice(index,1) 
               }else{
                  this. shopcarone.splice(index,1)
               }
              
       },
       checkall(){
         console.log("全选了")
       },

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
               let temp=this.money[indx]
               temp.count--
               if(temp.count<1){
                  temp.count=1
               }
               this.money.splice(indx,1,temp)
              //  this.money[indx].count--
      }else{
        console.log("3")
        
         item.count--
         if(item.count<1){
                  item.count=1
               }
      }
    },
    jia(item){
     
       if(item.xuan=="2"){
         let min=this.money
                let indx=min.findIndex(function (min) {
                   return min.name==item.name
               })
              let temp=this.money[indx]
               temp.count++
               this.money.splice(indx,1,temp)
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
.active3{
  color: red;
}
.shop-top{
  width: 100%;
  height: 50px;
display: flex;
background-color: white;
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
.delete1{
  color: aqua;
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
.shop-img img{
  height: 90px;
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
  width: 20%;
  height: 100%;
  line-height: 40px;
 margin-left: 10px
}
.shop-heji{
  width: 40%;
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