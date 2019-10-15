<template>
  <div class="home">
    <div class="home-top-bar">
      <button @click="toPageClass()">分类</button>
      <button @click="toPageLogin()">登录</button>
    </div>
    <h1>天猫</h1>
   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
    return{
      tabIndex:1
    }
  },
  methods:{
    toPageClass(){
      this.$router.push({
        name:'class',
      })
    },
    toPageLogin(){
       this.$router.push({
        name:'login',
      })
    }

  }
 
}
</script>

<style lang="stylus" scoped>
  
  .home{
    background-color:rgb(255,0,54);
    text-align:center;
  }
  .home-top-bar{
    display:flex;
    justify-content:space-between;
  }
  h1{
    color:#fff;
  }
</style>
