<template>
  <div class="login">
    <!-- 筛选页面 -->
    <div class="filter-zhu">
       <div class="filter-bottom"> </div>
    </div>
    <!-- 主页面 -->
    <div class="product-top">
      <i class="el-icon-arrow-left" @click="huitui"></i>
      <router-link to="/search" class="product-sousuo">
        <div class="product-message">{{this.$store.state.searchmessage}} &nbsp;X</div>
      </router-link>
      <div class="product-filter" @click="filter">
          筛选
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productList",
  methods: {
    huitui() {
      window.history.back();
    },
    filter(){
      let a=document.querySelector(".filter-zhu")
      a.style.width="100%"
    }
  }
};
</script>
<style>
.product-top {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  display: flex;
}
.el-icon-arrow-left {
  width: 10%;
  height: 50px;
  font-size: 30px;
  text-align: center;
  line-height: 50px;
}
.product-sousuo {
  width: 75%;
  height: 35px;
  border: 1px solid #ccc;
  margin-top: 8px;
  border-radius: 5px;
  background-color: rgb(238, 238, 238);
}
.product-message {
  display: inline-block;
  height: 100%;
  background-color: rgb(102, 102, 102);
  border-radius: 5px;
  margin-left: 2px;
  text-align: center;
  line-height: 30px;
  color: white;
}
.product-filter{
  width: 15%;
  height: 50px;
  text-align: center;
  line-height: 50px
}
.filter-zhu{
  position: absolute;
  width: 0px;
  height: 100%;
  z-index: 20;
  background-color: rgb(232, 232, 232);
  right: 0;
  transition: all 1s
}
.filter-bottom{
  
}
</style>
