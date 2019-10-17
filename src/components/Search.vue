<template>
  <div class="search">
    <div class="search-box">
        <form>
            <input class="search-input" type="search" v-model="me" placeholder="搜索商品/店铺/品牌">
            <input class="submit" type="submit" title="提交" @click="pageSearchList()">
        </form>
      
    </div>
    

  </div>
</template>
<script>


export default {
  name: 'search',
  data(){
       return{
           me:""
       }
  },
  watch:{
    me:function(newValue){
        this.$store.state.searchmessage=newValue
    }
  },
  mounted () {
    this.me=this.$store.state.searchmessage
  },
  methods:{
      pageSearchList(){
           this.$router.push({
            name:'productList',
        })
      }
  }
  
}

</script>

<style lang="stylus" scoped>
.search-box{
    background-color: rgba(0,0,0,.85);
    position: relative;
    box-shadow: 0 2px 2px rgba(0,0,0,.1);
    height: 44px;
}

.search-box form{
    position: relative;
    margin-right: 10px;
    padding: 5px 0 5px 6px;
    box-sizing: border-box;
    height: 100%;
    margin-left: 3px !important;
}

.search-input{
    padding-left: 25px;
    float: left;
    width: 100%;
    background: #FFF;
    vertical-align: middle;
    height: 100%;
    box-shadow: none;
    border: none;
    outline: 0;
    color: #333;
    font-size: 14px;
}

.submit{
    background:url("/搜索.png")  no-repeat;
    background-size: 15px;
    position: absolute;
    left: 8px;
    top: 20px;
    margin-top: -7px;
    width: 15px;
    height: 15px;
    border: none;
    color: transparent;
    padding: 7px 5px;
    box-sizing: initial;
    border-radius: 2px;
    -webkit-border-radius: 2px;
}
</style>
