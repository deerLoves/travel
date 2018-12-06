<template>
    <div class="page storyHome" ref="wrapper">
        <div class="content">
            <storyHeader></storyHeader>
            <h2>故事锦集</h2>
            <viewpager></viewpager>
            <div class="interest">
                <h2>趣味旅程</h2>
                <div>
                    <span v-show="message">查看最新 <i class="iconfont icon-jiantou"></i></span>
                    <span v-show="!message">热门故事 <i class="iconfont icon-jiantou"></i></span>
                </div>
            </div>
            <interest></interest>
            <!-- <router-view></router-view> -->
        </div>
    </div>
</template>

<script>
import storyHeader from "./storyHeader";
import viewpager from "./viewpager";
import interest from "./interest";
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
    // created(){

    // }
    data(){
        return {
            message:true,
        }
    },
    methods:{
        ...Vuex.mapActions({
            handleNow_getNowMovie:"story/handleNow_getNowMovie"
        }),
    },
    components:{
        "storyHeader":storyHeader,
        "viewpager":viewpager,
        "interest":interest,
    },
    // mounted(){
        
    //    this.scroll = new BScroll(this.$refs.wrapper,{
    //         click:true,
    //         pullUpLoad:true
    //     })
    //     this.scroll.on("pullingUp",()=>{
    //        this.handleNow_getNowMovie(++this.pageNum)
    //     })
    // },
    // updated () {
    //     //重新计算高度
    //     this.scroll.refresh();
    //     //当数据加载完毕以后通知better-scroll
    //     this.scroll.finishPullUp();
    // }
}
</script>

<style scoped>
.storyHome{
    margin:0 0.32rem;
    font-family: PingFangSC-Regular;
    overflow: hidden;
}
.storyHome>div>h2{
    font-size: .48rem;
    color: #000000;
    margin:.52rem 0;
    line-height:.44rem
}
.storyHome>div>.interest{
     margin: .72rem 0 .4rem 0;
     font-family: PingFangSC-Regular;
     display: flex;
     justify-content: space-between;
 }
 .storyHome>div>.interest>h2{
     font-size:.48rem;
     color: #000000;
     line-height: .66rem;
 }
 .storyHome>div>.interest>div{
     font-size: 28px;
    color: #4D9EE6;
    text-align: right;
    display: flex;
    align-items: center;
 }
 .storyHome>div>.interest>div>span{
     line-height: .4rem;
     font-size:.28rem;
 }
 .storyHome>div>.interest>div>span>i{
     font-size:.28rem;
 }
</style>
