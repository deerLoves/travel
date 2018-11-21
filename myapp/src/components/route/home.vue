<template>
    <div class="page home">
        <header-com></header-com>
        <routePlay-com></routePlay-com>
    </div>
</template>

<script>
import header from "./header";
import routePlay from './routePlay.vue'
import Vuex from 'vuex'
import axios from 'axios'
export default {
    created(){
        this.handleGetMyrouter(this.userInfo);
    },
    computed:{
        ...Vuex.mapState({
            userInfo:state=>state.login.personInfo
        })
    },
    components:{
        "header-com":header,
        "routePlay-com":routePlay
    },
    methods:{
        ...Vuex.mapActions({
            handleGetMyrouter:"route/handleGetMyrouter"
        })
    }
}
</script>

<style scoped>
.home{
  padding : 0.4rem .32rem;
}
</style>
