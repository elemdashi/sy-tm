<template>
  <div class="search">
    <div class="search-box">
        <form>
            <input class="search-input" type="search" v-model="me" placeholder="搜索商品/店铺/品牌" @input="set()">
            <input class="submit" type="submit" title="提交" @click="pageSearchList()">
        </form>
    </div>
    <div class="showlist"  v-for="(item,index) in showlist" :key="index">
         <div class="list1" @click="todetail">{{item.name}}</div>
         <div class="list2" @click="todetail">{{item.name2}}</div>
    </div>
    
  </div>
</template>
<script>
  import Vue from "vue";
 import axios  from 'axios'
//  Vue.use(axios)
Vue.prototype.$ajax = axios

export default {

  name: 'search',
  data(){
       return{
           me:"",
           searchlist:[],
           showlist:[],
       }
  },
  watch:{
    me:function(newValue,oldValue){
         this.$store.state.searchmessage = newValue
    }
  },
  created(){
    this.showlist = this.searchlist
    this.getData()
  },
  methods:{
    todetail(){
        this.$router.push({
        name:'detail',
      })
    },
    functionname(){
      console.log(this.me)
      let that = this
      if(that.me.trim()){
          that.showlist = that.searchlist.filter(function(item){
        if((item.name.includes(that.me))||(item.name2.includes(that.me))){
          return item
        }
      })
      }
    },
    set(){
      let that = this
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
         this.functionname()
          console.log("去后端")
      }, 1000);
    },
      pageSearchList(){
           this.$router.push({
            name:'productList',
        })
      },
      
    getData() {
            console.log("获取后台数据");
           let that = this
            axios.get('/data/searchlist.json')
                .then(function (response) {
                  that.searchlist = response.data.data.product
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
  }
}

</script>

<style >

.showlist{
  margin:20px auto;
  border-bottom: 1px solid #eee;
  width:90%;
  display: flex;
}
.showlist .list1,
.showlist .list2{
  width: 179px;
  font-weight: 400;
  color: #333;
  font-size: 13px;
  padding:2px 0 5px 0 ;
}
.showlist .list2{
  left: 180px;
}

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
    margin-left:2px;
    padding-left: 30px;
    width: 100%;
    background: #FFF;
    vertical-align: middle;
    height: 34px;
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
    left: 15px;
    top: 20px;
    margin-top: -7px;
    width: 15px;
    height: 15px;
    border: none;
    color: transparent;
    padding: 7px 5px;
    box-sizing: initial;
    border-radius: 1px;
}
</style>
