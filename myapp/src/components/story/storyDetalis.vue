<template>
    <div id="storyDetalis">
        <div class="storyDetalis">
            <router-link :to="{name:'story'}">
                <sdHeader-com></sdHeader-com>
            </router-link>
            <h2>故事详情</h2>
            <detalisCenter></detalisCenter>
            <detalisCenter></detalisCenter>
            <!-- <detalisfooter></detalisfooter> -->
        </div>
    </div>
</template>

<script>
import sdHeader from "./storyDetalisHeader";
import detalisCenter from "./detalisCenter"
import detalisfooter from "./detalisfooter";
import Vuex from 'vuex';
export default {
    created(){
       this.handleEditTabStatus();
    },
    components:{
        "sdHeader-com":sdHeader,
        "detalisCenter":detalisCenter,
        "detalisfooter":detalisfooter
    },
    computed:{
        ...Vuex.mapState({
            show:state=>state.show
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleEditTabStatus:"handleEditTabStatus"
        })
    },
    beforeRouteLeave(to,from,next){
        this.handleEditTabStatus();
        next();
    }
}
</script>

<style scoped>

.storyDetalis{
    width:91.4%;
    min-height:100%; 
    padding-top: .4rem;
    padding-bottom: .96rem;
    margin:0 0.32rem;
    font-family: PingFangSC-Regular;
    height: 100%;
    background: #fff;
}
.storyDetalis>h2{
    font-size: .48rem;
    color: #000000;
    line-height:.44rem;
    margin-bottom:.56rem;
}
</style>
