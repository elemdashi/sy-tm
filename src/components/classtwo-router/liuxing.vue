<template>
    <div>
       <div class="tuijian-list" v-if="tui[0]">
           <div class="liuxing-ziti">------热门造型清单-------</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tui[0].remeng" :key="index">
                    <a :href="item.adress" class="tuijian-name">
                        <div>
                           <img :src="item.url" alt="" style="width:70px"><br>
                           <span >{{item.name}}</span> 
                        </div>

                    </a>
                  
                </div>
           </div>
       </div>

        <div class="tuijian-list" v-if="tui[1]">
           <div class="liuxing-ziti">------美妆种草合集-------</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tui[1].zhongcao" :key="index">
                     <a :href="item.adress" class="tuijian-name">
                        <div>
                           <img :src="item.url" alt="" style="width:70px"><br>
                           <span >{{item.name}}</span> 
                        </div>

                    </a>
                </div>
           </div>
       </div>



       <div class="tuijian-list" v-if="tui[2]">
           <div class="liuxing-ziti">------热销电子产品-------</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tui[2].dianzi" :key="index">
                    <a :href="item.adress" class="tuijian-name">
                        <div>
                           <img :src="item.url" alt="" style="width:70px"><br>
                           <span >{{item.name}}</span> 
                        </div>

                    </a>
                </div>
           </div>
       </div>


          <div class="tuijian-list" v-if="tui[3]">
           <div class="liuxing-ziti">------热销电子产品-------</div>
           <div class="tuijian-xia">
                <div class="tuijian-kuai" v-for="(item,index) in this.tui[3].jiadian" :key="index">
                     <a :href="item.adress" class="tuijian-name">
                        <div>
                           <img :src="item.url" alt="" style="width:70px"><br>
                           <span >{{item.name}}</span> 
                        </div>

                    </a>
                </div>
           </div>
       </div>

    </div>
</template>
<script>
export default {
    name:"liuxing",
    props: ["tui"],
    mounted () {
       
      
    }

}
</script>
<style>
.tuijian-name{
    text-decoration: none;
    color: black
}
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
.liuxing-ziti{
    font-size: 12px;
    font-weight:bold;
    
    text-align: center
}
</style>