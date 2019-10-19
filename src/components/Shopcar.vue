<template>
  <div class="shopcar">
    <div class="shop-top">
       <i class="el-icon-arrow-left" @click="huitui()"></i>
       <div class="shopmuch">购物车（{{this.$store.state.zong}}）</div>
    </div>
    <div class="shop-liebiao">
             <div class="shop-xiangqing" v-for="(item,index) in this.$store.state.shopcar" :key="index">
                 <div class="xiangqing-top">
                   <div class="radius"></div>
                   <i class="el-icon-goods"></i>
                   <div class="shop-dianpu">{{item.dian}}</div>
                   <i class="el-icon-arrow-right"></i>
                     <div class="shop-bianji">编辑</div>

                 </div>

                 <div class="xiangqing-buttom">
                       <div class="radius-two"></div>
                       <div class="shop-img">
                         <img :src="item.url" alt="" style="width:100%;height:100%">
                       </div>
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
        
    }
  },
  created(){
      console.log(this.$store.state.shopcar)
  },
  methods:{
    huitui(){
      window.history.back()
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

</style>