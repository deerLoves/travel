<template>
    <div class="page home">
        <header-com></header-com>
        <routePlay-com></routePlay-com>
    </div>
</template>

<script>
import header from "./header";
import routePlay from './routePlay.vue'
export default {
    components:{
        "header-com":header,
        "routePlay-com":routePlay
    }
}
</script>

<style scoped>
.home{
  padding : 1.4rem .32rem;
}
</style>
