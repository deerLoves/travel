<template>
    <div id="guide_page">
        <img @click="handleGuide()" src="../../../static/guide/01.jpg" alt="">
    </div>
</template>

<script>
export default {
    methods:{
        handleGuide(){
            this.$router.push({name:'guide_loop'})
        }
    }
}
</script>

<style scoped>
    img{
        width: 7.50rem;
        height: 13.44rem;
        position: fixed;
    }
</style>
