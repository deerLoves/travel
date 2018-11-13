<template>
    <div class="viewpager">
        <div v-for="(item,index) in viewpager">
            <img :src="viewpager[index]">
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
export default {
    created(){
        axios({
            method:"get",
            url:"../../../static/zhang/json_zhang/viewpager.json"
        }).then((data)=>{
            this.viewpager= data.data.viewpager
            // console.log(data)
        })
    },
    data(){
        return {
            viewpager:[]
        }
    },
    
    
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
