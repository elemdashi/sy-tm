<template>
    <div>
        <div class="dapai-list">
           <div class="dapai-ziti">品牌墙</div>
           <div class="dapai-xia">
                <div class="dapai-kuai" v-for="(item,index) in this.dapai" :key="index">
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
    name:"dapai",
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
    font-size: 15px;
    color: #ccc
}
.dapai-xia{
      width: 100%;
    display: flex;
    flex-wrap: wrap
}
.dapai-kuai{
      margin-top: 20px;
      margin-left: 15px
}
</style>
