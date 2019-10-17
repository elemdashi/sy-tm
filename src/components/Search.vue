<template>
  <div class="search">
    <div class="search-box">
        <form>
            <input class="search-input" type="search" v-model="me" placeholder="搜索商品/店铺/品牌" @input="functionname()">
            <input class="submit" type="submit" title="提交" @click="pageSearchList()">
        </form>
    </div>
    <!-- <div class="showlist"  v-for="(item,index) in showlist">
      
         <span class="list1">{{item.name}}</span>
         <span class="list2">{{item.name2}}</span>
      
    </div> -->
    <table>
      <tr v-for="(item,index) in showlist">
        <td>{{item.name}}</td>
        <td>{{item.name2}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import Vue from "vue";
 import axios  from 'axios'
 Vue.use(axios)

export default {

  name: 'search',
  data(){
       return{
           me:"",
           searchlist:[],
           showlist:[],
           show:false,
       }
  },
  watch:{
    me:function(newValue){
        this.$store.state.searchmessage=newValue
    }
  },
  created(){
    this.showlist = this.searchlist
    this.getData()
  },
  mounted () {
    this.me=this.$store.state.searchmessage
  },
  methods:{
    functionname(){
      let that = this
      that.show = true
      if(that.me.trim()){
          this.showlist = this.searchlist.filter(function(item){
        if((item.name.includes(that.me))||(item.name2.includes(that.me))){
          return item
        }
      })
      }
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
  border-bottom: 1px solid rgba(0,0,0,.40);
  width:90%;
  display: flex;
}
table{
  padding:10px;
}
td{
  text-align:left;
  padding-left:60px;
  padding-top: 20px;
  border-bottom: 1px solid rgba(0,0,0,.30);
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
    border-radius: 2px;
}
</style>
