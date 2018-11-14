<template>
    <div class="storyDetalis">
        <router-link :to="{name:'story'}">
            <sdHeader-com></sdHeader-com>
        </router-link>
        <h2>故事详情</h2>
        <detalisCenter></detalisCenter>
        <!-- <detalisfooter></detalisfooter> -->
    </div>
</template>

<script>
import sdHeader from "./storyDetalisHeader";
import detalisCenter from "./detalisCenter"
import detalisfooter from "./detalisfooter";
export default {
    components:{
        "sdHeader-com":sdHeader,
        "detalisCenter":detalisCenter,
        "detalisfooter":detalisfooter
    }
}
</script>

<style scoped>
.storyDetalis{
    padding-top: .4rem;
  padding-bottom: .96rem;
    margin:0 0.32rem;
    font-family: PingFangSC-Regular;
    /* position: fixed;
    z-index: 1;
    bottom: 0;
    height: 100%;
    background: #fff; */
}
.storyDetalis>h2{
    font-size: .48rem;
    color: #000000;
    line-height:.44rem;
    margin-bottom:.56rem;
}
</style>
