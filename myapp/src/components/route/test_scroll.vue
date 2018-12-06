<template>
   <div class="out" ref="eee">
    <div class="in">
        https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
         <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
         <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br> https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js
        <br>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  mounted() {
    let wrapper = document.querySelector('.out')
    let scroll = new BScroll(this.$refs.eee,{
        click: true,
        tap:true,
        pullUpLoad:true
    })
    scroll.on("pullingUp",()=>{
        console.log(232);
    })
   
  },
  updated() {
    
  }
}
</script>

<style scoped>
    .out {
        height: 200px; 
        overflow: hidden; 
        border: 1px solid red;
    }

    .in {
        height: 200%; 
        border: 1px solid black;
    }
</style>
