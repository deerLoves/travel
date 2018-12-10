<template>
    <div id="guide_loop">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img  src="../../../static/guide/02.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img  src="../../../static/guide/03.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img @click="handleLoop()"  src="../../../static/guide/04.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    methods:{
        handleLoop(){
            console.log(34);
            this.$router.push({name:'login'});
        }
    },
    mounted(){
        this.$nextTick(()=>{
             new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                slidesPerView: "auto",
                centeredSlides:true,
                spaceBetween: 48,
                loop: false, // 循环模式选项
            }) 
        })
    }
}
</script>

<style scoped>
    img{
        width: 7.50rem;
        height: 13.44rem;
        /* position: fixed; */
    }
</style>
