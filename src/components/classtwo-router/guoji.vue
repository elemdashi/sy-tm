<template>
    <div>
       <div class="tuijian-list">
           <div class="guoji-ziti">------母婴用品-------</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tianmao[0].muying" :key="index">
                    <img :src="item.url" alt="" style="width:70px"><br>
                    <span>{{item.name}}</span>
                </div>
           </div>
       </div>

        <div class="tuijian-list">
           <div class="guoji-ziti">------营养保健-------</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tianmao[1].baojian" :key="index">
                    <img :src="item.url" alt="" style="width:70px"><br>
                    <span>{{item.name}}</span>
                </div>
           </div>
       </div>



       <div class="tuijian-list">
           <div class="guoji-ziti">------美妆-------</div>
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
    name:"guoji",
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
.guoji-ziti{
     font-size: 12px;
    font-weight:bold;
    
    text-align: center
}
</style>