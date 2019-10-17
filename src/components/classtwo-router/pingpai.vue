<template>
    <div>
        <div class="dapai-list">
           <div class="dapai-ziti">------推荐品牌-------</div>
           <div class="dapai-xia">
                <div class="pingpai-kuai" v-for="(item,index) in this.dapai" :key="index">
                    <a :href="item.adress">
                       <img :src="item.url" alt="" style="width:70px">
                    </a>
                    
                   
                </div>
           </div>
       </div>

    </div>
</template>
<script>
export default {
    name:"pingpai",
    props: ["dapai"],
    mounted () {
        console.log(this.dapai)
       
      
    }
}
</script>
<style >
.dapai-list{
   width: 100%;
    margin-top: 10px
}
.dapai-ziti{
     font-size: 12px;
    font-weight:bold;
    color: black;
    text-align: center
}
.dapai-xia{
      width: 100%;
    display: flex;
    flex-wrap: wrap
}
.pingpai-kuai{
   width: 33%;
   margin-top: 15px;
   text-align: center
    
}
</style>