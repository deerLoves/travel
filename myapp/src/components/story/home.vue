<template>
    <div class="page storyHome">
        <storyHeader></storyHeader>
        <h2>故事锦集</h2>
        <viewpager></viewpager>
        <div class="interest">
            <h2>趣味旅程</h2>
            <div>
                <span v-show="message">查看最新 》</span>
                <span v-show="!message">热门故事 》</span>
            </div>
        </div>
        <interest></interest>
        <!-- <router-view></router-view> -->
    </div>
    
</template>

<script>
import storyHeader from "./storyHeader";
import viewpager from "./viewpager";
import interest from "./interest";
export default {
    data(){
        return {
            message:true,
        }
    },
    components:{
        "storyHeader":storyHeader,
        "viewpager":viewpager,
        "interest":interest,
    }
}
</script>

<style scoped>
.storyHome{
    margin:0 0.32rem;
    font-family: PingFangSC-Regular;
    
}
.storyHome>h2{
    font-size: .48rem;
    color: #000000;
    margin:.52rem 0;
    line-height:.44rem
}
.storyHome>.interest{
     margin: .72rem 0 .4rem 0;
     font-family: PingFangSC-Regular;
     display: flex;
     justify-content: space-between;
 }
 .storyHome>.interest>h2{
     font-size:.48rem;
     color: #000000;
     line-height: .66rem;
 }
 .storyHome>.interest>div{
     font-size: 28px;
    color: #4D9EE6;
    text-align: right;
    display: flex;
    align-items: center;
 }
 .storyHome>.interest>div>span{
     line-height: .4rem;
     font-size:.28rem;
 }
</style>
