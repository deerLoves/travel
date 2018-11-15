<template>
    <div class="spot">
        <div id="return" @click="handleSpotReturn">
            <i class="iconfont icon-guanbi"></i>
        </div>
        <div id="search">
            <input type="text" placeholder="你想搜索什么？">
        </div>
        <div id="histroy">
            <div class="nearby">
                <p>近期搜索历史</p>
            </div>
            <div class="address" v-for="(item,index) in search" v-if="index<=2">
                <p>{{search[index].address}}-{{search[index].name}}</p>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    created(){
        axios({
            method:"get",
            url:"../../../static/bai/josn.json"
        }).then((data)=>{
            this.search=data.data.searchaddress
        })
    },
    data(){
        return{
           search:[],
        }
    },
    methods:{
        handleSpotReturn(){
            this.$router.back()
        }
    }
}
</script>
<style scoped>
#return{
    padding:0.8rem 0 0.78rem;
}
#return>i{
    opacity: 0.5;
    font-size: 44px;
    padding-left: 0.32rem;
}
#search{
    padding-left: 0.32rem;
}
#search>input{
    width: 6.86rem;
    height: 1rem;
    background: #FFFFFF;
    border: 1px solid #F1EFEF;
    border-radius: 10px;
    font-family: PingFangSC-Regular;
    font-size: 48px;
    color: #a9a9a9;
    letter-spacing: -0.0034rem;
    padding-left: 0.16rem;
}
#histroy{
    padding: 0.74rem 0.3rem 0;
}
#histroy>.nearby>p{
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #030303;
    letter-spacing: -0.002rem;
    line-height: 0.5rem;
}
#histroy>.address{
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #030303;
    letter-spacing: -0.0018rem;
}
#histroy>.address>p{
    padding: 0.58rem 0 0.24rem;
}
#histroy>.address>hr{
    opacity: 0.2;
    border: 0.02rem solid #979797;
    margin: 0;
}
</style>
