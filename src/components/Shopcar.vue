<template>
  <div class="shopcar">
    <div class="shop-top">
       <i class="el-icon-arrow-left"></i>
       <div class="shopmuch">购物车（{{this.$store.state.zong}}）</div>
    </div>
    <div class="shop-liebiao">
             <div class="shop-xiangqing" v-for="(item,index) in this.$store.state.shopcar" :key="index">
                 <div class="xiangqing-top">
                   
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
</style>