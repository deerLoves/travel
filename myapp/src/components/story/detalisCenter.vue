<template>
    <div class="detalisCenter">
        <!-- {{commtentGather.data.article.user}} -->
        <div>
            <div class="dcHeader">
                <div class="dcHeader-l">
                    <img :src="commtentGather.data.article.user.headimg" alt="">
                    <span>{{commtentGather.data.article.user.nickname}}</span>
                </div>
                <div class="dcHeader-r">
                    {{commtentGather.data.article.time}}
                </div>
            </div>
            <div class="dcImg">
                <div v-for="(item,index) in commtentGather.data.article.img">
                    <img :src="commtentGather.data.article.img[index]">
                </div>
            </div>
            <div class="dcText">
                {{commtentGather.data.article.content}}
            </div>
            <div class="dcComment">
                <div class="dcComment-l">
                    <p>访友点评</p>
                </div>
            </div>
        </div>
        <detalisComment></detalisComment>    
        <detalisComment></detalisComment>    
    </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
import detalisComment from "./detalisComment";
import Vuex from "vuex";
export default {
    components:{
        "detalisComment":detalisComment,       
    },
    created(){
        
    },
    computed:{
        ...Vuex.mapState({
            commtentGather:state=>state.story.commtentGather,
        })
    },
    data(){
        return {
            status:true,
            viewpager:[]
        }
    },

}
</script>
<style scoped>
.detalisCenter{
    width:100%;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    color: #000000;
}
.detalisCenter>div>.dcHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .2rem;
}
.detalisCenter>div>.dcHeader>.dcHeader-l{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.detalisCenter>div>.dcHeader>.dcHeader-l>img{
    width:1rem;
    height:1rem;
    border-radius: 50%;

}
.detalisCenter>div>.dcHeader>.dcHeader-l>span{
    margin-left: .16rem;
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.detalisCenter>div>.dcHeader>.dcHeader-r{
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.detalisCenter>div>.dcImg{
    width:100%;
    height:2.4rem;
    margin:0 .4rem .38rem 0;
    display: flex;
    overflow: scroll;
    
}
.detalisCenter>div>.dcImg>div{
    margin-right: .4rem;
    
}

.detalisCenter>div>.dcImg>div>img{
    width:3.6rem;
    height:2.4rem;
    border-radius: .2rem;
}
.detalisCenter>div>.dcText{
    width:100%;
    min-height: .88rem;
    text-indent: 2em; 
    line-height: .44rem; 
    margin-bottom: .82rem;  
}

.detalisCenter>div>.dcComment{
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFangSC-Regular;
    
}
.detalisCenter>div>.dcComment>.dcComment-l>p{
    font-size: .36rem;
    color: #000000;

    
}
</style>
