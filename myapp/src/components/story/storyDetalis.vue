<template>
    <div class="page storyDetalis">
        <router-link :to="{name:'story'}">
            <sdHeader-com></sdHeader-com>
        </router-link>
        <h2>故事详情</h2>
        <detalisCenter></detalisCenter>
    </div>
</template>

<script>
import sdHeader from "./storyDetalisHeader";
import detalisCenter from "./detalisCenter"
export default {
    components:{
        "sdHeader-com":sdHeader,
        "detalisCenter":detalisCenter
    }
}
</script>

<style scoped>
.storyDetalis{
    margin:0 0.32rem;
    font-family: PingFangSC-Regular;
}
.storyDetalis>h2{
    font-size: .48rem;
    color: #000000;
    line-height:.44rem;
    margin-bottom:.56rem;
}
</style>
