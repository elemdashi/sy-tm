<template>
  <div class="shopcar">
    <div class="shop-top">
       <i class="el-icon-arrow-left" @click="huitui()"></i>
       <div class="shopmuch">购物车（{{this.$store.state.zong}}）</div>
    </div>
    <div class="shop-liebiao">
             <div class="shop-xiangqing" v-for="(item,index) in this.$store.state.shopcar[0]" :key="index">
                 <div class="xiangqing-top">
                   <div class="radius" @click="xuanze(index,item)"></div>
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
                      <div class="shop-jieqian">结算（ {{muchmoney}} ）</div>
                 </div>

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
        muchmoney:0
    }
  },
  created(){
      console.log(this.$store.state.shopcar)
  },
  watch:{
    money:function(newValue,oldValue){
      console.log(newValue)
       for(var i=0;i<newValue.length;i++){
           this.muchmoney +=newValue[i].money
       }
    }
  },
  methods:{
    huitui(){
      window.history.back()
    },
    jian(item){
      item.count--
    },
    jia(item){
      item.count++
    },
    xuanze(index,item){
      if(this.xuanzhong=="false"){
          let radius=document.querySelectorAll(".radius")
         let radiuszi=document.querySelectorAll(".radius-two")
         radius[index].style.background="rgb(255,80,0)"
         radiuszi[index].style.background="rgb(255,80,0)"
         this.$store.state.alerady.push(item)
         this.money.push(item)
         this.xuanzhong="true"
      }else{
          let radius=document.querySelectorAll(".radius")
         let radiuszi=document.querySelectorAll(".radius-two")
         radius[index].removeAttribute("style")
         radiuszi[index].removeAttribute("style")
         var mon=this.money
                var ind=mon.findIndex(function (mon) {
                   return mon.name==item.name
               })
                this.money.splice(ind,1)
         let it =this.$store.state.alerady
          var inde=it.findIndex(function (it) {
                   return it.name==item.name
               })
         this.$store.state.alerady.splice(inde,1)
         this.xuanzhong="false"
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
  border: 1px solid black;
  bottom: 0px;
  display: flex;

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
</style>