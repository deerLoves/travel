<template>
    <div class="viewpager">
        <div v-for="(item,index) in imgArr">
            <img :src="item.img">
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import Vuex from 'vuex';
export default {
    created(){
        
        this.handleGetViewPagers();
    },
    data(){
        return {
            viewpager:[]
        }
    },
    computed:{
        ...Vuex.mapState({
            imgArr:state=>state.story.imgArr
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleGetViewPagers:"story/handleGetViewPagers"
        })
    }
    
}
</script>

<style scoped>
.viewpager{
    /* width:100%; */
    height:3.2rem;
    display: flex;
    overflow: scroll;
}
.viewpager>div{
    height:100%;
    width:5rem;
    border-radius:.2rem;
     margin-right:.16rem;
}
.viewpager>div>img{
    height:100%;
    width:5rem;
    border-radius:.1rem;
   
}
</style>
