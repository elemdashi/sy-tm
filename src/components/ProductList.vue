<template>
  <div class="login">
    <!-- 筛选页面 -->
    <div class="filter-zhu">
       <div class="filter-bottom"> 
         <div class="filter-wenzi">4126500个结果</div>
         <div class="filter-chongzhi">重置</div>
         <div class="filter-queding" @click="queding">确定</div>
       </div>
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
    <!-- 下方导航 -->
         <div class="product-top-xia">
            <div class="product-zonghe">综合</div>
             <div class="product-zonghe">销量</div>
              <div class="product-zonghe">价格<i class="el-icon-arrow-down"></i></div>
               <div class="product-zonghe">店铺</div>
                <div class="product-zonghe" @click="xialaliebiao"><i class="el-icon-menu" :class="{xialaactive:xiala}" ></i>  <i class="el-icon-caret-bottom" v-if="xiala" :class="{xialaactive:xiala}"></i>  <i class="el-icon-caret-top" v-else ></i></div>
         </div>
            <div class="product-xiala" >
              <div class="product-xialabiao"> 
                <div class="xiala-xuankuang"> <i class="el-icon-menu"></i>&nbsp;&nbsp;<span>大图</span></div>
                <div class="xiala-xuankuangtwo"></div>
                <div class="xiala-xuankuang"><i class="el-icon-s-unfold"></i>&nbsp;&nbsp;<span>列表</span></div>
              </div>
              
            </div>
            <!-- 商品列表 -->

            <div class="product-xia">
              <div class="product-kuai" v-for="(item,index) in shangpinglist.nanzhuang" :key=index>
                <div class="product-img">
                      <img :src="item.url" alt="" style="height:100%;width:100%">
                </div>
                <div class="product-name">
                  {{item.name}}
                </div>
                <div class="product-kuai-xia">
                  <div class="product-dollor">
                    ￥&nbsp;{{item.money}}
                  </div>
                  <div class="product-xiaoliang">
                        {{item.much}}
                  </div>
                  <div class="product-shangla" @click="shangla(index)">
                     <i class="el-icon-more"></i>
                  </div>
                </div>
                <div class="shanglakuang" @click="huilai(index)">
                    <div class="shangla-dian">{{item.dian}} </div>
                    <div class="shangla-pingjia">
                         <span>描述相符：</span>
                         <div class="shangla-pingfeng" v-if="item.miaoshu<4.9">{{item.msiaoshu}}</div>
                    </div>
              </div>
                   
              </div>
            

            </div>


  </div>
</template>
<script>
import Vue from 'vue'
import axios  from 'axios'
Vue.use(axios)
export default {
  name: "productList",
  data(){
    return{
      xiala:false,
      shangpinglist:"",
    
    }
  },
  created(){
    this.getData()
  },
  methods: {
    huitui() {
      window.history.back();
    },
    filter(){
      let a=document.querySelector(".filter-zhu")
      a.style.width="100%"
    },
    queding(){
      let a=document.querySelector(".filter-zhu")
      a.style.width="0px"
    },
    xialaliebiao(){
      if(this.xiala==true){
        this.xiala=false
         let b=document.querySelector(".product-xiala")
           b.setAttribute("style","height:0px")
          let c=document.querySelector(".product-xialabiao")
          c.setAttribute("style","height:0px")
      }else {
        this.xiala=true
         let b=document.querySelector(".product-xiala")
          b.setAttribute("style","height:100%")
          let c=document.querySelector(".product-xialabiao")
          c.setAttribute("style","height:80px")
      }
      console.log(this.xiala)
        
    },
    
    shangla(index){
           let d=document.querySelectorAll(".shanglakuang")
           d[index].setAttribute("style","height:100px")
    },
    huilai(index){
       let e=document.querySelectorAll(".shanglakuang")
           e[index].setAttribute("style","height:0px")
    },

     getData() {
            console.log("获取后台数据");
           let that = this
            axios.get('/data/shangping.json')
                .then(function (response) {
                  console.log(response.data.data)
                     that.shangpinglist =response.data.data
                })
                .catch(function (error) {
                    console.log(error);
                });
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
  height: 30px;
  font-size: 30px;
  text-align: center;
 margin-top: 10px
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
  transition: all 0.5s;
  
}
.filter-bottom{
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0px;
  background-color: white;
  display: flex
}
.filter-wenzi{
  width: 65%;
  height: 100%;
  font-size: 13px;
  line-height: 45px;
  color: red;
  text-indent: 1em
}
.filter-chongzhi{
  width: 15%;
  height: 100%;
  text-align: center;
  line-height: 45px;
  color: #ccc;
  font-size: 13px;
}
.filter-queding{
  width: 17%;
  height: 60%;
  border: 1px solid red;
  text-align: center;
  margin-top: 10px;
  line-height: 30px;
  border-radius: 5px;
  background-color: rgb(251,233,233);
  font-size: 13px;
}
.product-top-xia{
   width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  display: flex;
}
.product-zonghe{
  width: 20%;
  height: 30px;
  text-align: center;
line-height: 30px;
margin-top: 10px;
font-size: 15px;
color: #9D9D9D
}
.el-icon-caret-bottom{
  margin-left: 5px;
}
.product-xiala{
  width: 100%;
 height: 0px;
  background-color: rgba(0, 0, 0, 0.1)
}
.product-xialabiao{
  height: 0px;
  width: 20%;
  position: absolute;
  right: 0px;
  background-color: white;
  transition: height 0.5s;
  overflow: hidden;
  z-index: 10;
}
.xialaactive{
  color: red
}
.el-icon-caret-top{
  margin-left: 5px
}
.xiala-xuankuang{
  width: 100%;
  height: 49%;
  text-align: center;
  line-height: 35px;
  font-size: 12px
 
}
.xiala-xuankuangtwo{
 width: 100%;
  height: 1%;
  background: black
 
}
.product-xia{
  width: 100%;
  height: 100%;
 display: flex;
 flex-wrap: wrap;
 overflow: scroll;
 background-color: rgb(238, 238, 238);
}
.product-kuai{
width: 49%;
height: 333px;
background-color: white;
margin-left: 3px;
margin-top: 3px;
position: relative;
}
.product-img{
  width: 100%;
  height: 80%;
 
}
.product-name{
  width: 90%;
  height: 5%;
  margin: 0 auto;
  text-align: center;
   line-height: 10px;
   font-size: 12px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   margin-top: 15px
}
.product-kuai-xia{
  width: 100%;
  height: 7%;
  display: flex
}
.product-dollor{
  width: 40%;
  height: 100%;
  text-align: center;
  color: red;
  font-size: 14px;
  margin-top: 5px
}
.product-xiaoliang{
   width: 40%;
  height: 100%;
  text-align: center;
  color: #9D9D9D;
  font-size: 12px;
   margin-top: 5px
}
.product-shangla{
  width: 20%;
  height: 100%;
  text-align: center;
 margin-top: 3px
}
.shanglakuang{
  position: absolute;
  width: 100%;
  height: 0px;
  bottom: 0px;
  background-color: rgb(238, 238, 238);
  transition: height 0.5s;
}
.shangla-dian{
  width: 100%;
  height: 30%;
 margin-top: 10px;
font-size: 14px;
text-indent: 1em
}
.shangla-pingjia{
  width: 100%;
  height: 15%;
display: flex  ;
color: #9D9D9D;
font-size: 12px
}
.shangla-pingfeng{
  width: 20%;
  height: 100%;
  color: red;
  font-size: 12px
}
</style>
