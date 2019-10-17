<template>
    <div>
       <div class="tuijian-list">
           <div class="tuijian-ziti">女装</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tianmao[0].muying" :key="index">
                    <img :src="item.url" alt="" style="width:70px"><br>
                    <span>{{item.name}}</span>
                </div>
           </div>
       </div>

        <div class="tuijian-list">
           <div class="tuijian-ziti">女鞋</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tianmao[1].baojian" :key="index">
                    <img :src="item.url" alt="" style="width:70px"><br>
                    <span>{{item.name}}</span>
                </div>
           </div>
       </div>



       <div class="tuijian-list">
           <div class="tuijian-ziti">男装</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tianmao[2].meizhuang" :key="index">
                    <img :src="item.url" alt="" style="width:70px"><br>
                    <span>{{item.name}}</span>
                </div>
           </div>
       </div>


         

    </div>
</template>
<script>
export default {
    name:"tianmao",
    props: ["tianmao"],
    mounted () {
        console.log(this.tianmao[1])
       
      
    }

}
</script>
<style>
.tuijian-list{
    width: 100%;
    margin-top: 10px

}
.tuijian-xia{
    width: 100%;
    display: flex;
    flex-wrap: wrap
}
.tuijian-kuai{
    text-align: center;
    width: 33%;
    font-size: 4px;
    margin-top: 10px
}
.tuijian-ziti{
    font-size: 15px;
    color: #ccc
}
</style>