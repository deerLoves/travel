<template>
    <div class="hostStory">
        <div>
            <div class="hsHeader">
                <div class="hsHeader-l">
                    <img src="../../../static/zhang/img_zhang/1.jpg" alt="">
                    <span>安娜</span>
                </div>
                <div class="hsHeader-r">
                    2018-11-11
                </div>
            </div>
            <div class="hsText">
                懂得太少，表现太多；才华太少，锋芒太多，很浅薄，一眼就能被看穿. 沉下来，打根基，让别人不会觉得你烦！
            </div>
            <div class="hsImg">
                <router-link :to="{name:'storyDetalis'}">
                    <img src="../../../static/zhang/img_zhang/1.jpg" alt="">
                </router-link>
            </div>
            <div class="hsComment">
                <div class="hsComment-l">
                    <p>浏览次数<i>5次</i></p>
                </div>
                <div class="hsComment-r">
                    <i class="iconfont icon-pinglun"></i>
                    <i class="iconfont icon-aixin like" v-show="status"></i>
                    <i class="iconfont icon-aixin1 like" v-show="!status"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            status:true,
        }
    }
}
</script>
<style scoped>
.hostStory{
    width:100%;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    color: #000000;
}
.hostStory>div>.hsHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .2rem;
}
.hostStory>div>.hsHeader>.hsHeader-l{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.hostStory>div>.hsHeader>.hsHeader-l>img{
    width:1rem;
    height:1rem;
    border-radius: 50%;

}
.hostStory>div>.hsHeader>.hsHeader-l>span{
    margin-left: .16rem;
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.hostStory>div>.hsHeader>.hsHeader-r{
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.hostStory>div>.hsText{
    width:100%;
    height: .88rem;
    text-indent: 2em; 
    line-height: .44rem;
    overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
    margin-bottom: .4rem;
}
.hostStory>div>.hsImg{
    width:100%;
    height:3.2rem;
}
.hostStory>div>.hsImg>a>img{
    width:100%;
    height:100%;
    border-radius: .2rem;
}
.hostStory>div>.hsComment{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.hostStory>div>.hsComment>.hsComment-l{
    font-family: PingFangSC-Regular;
   
}
.hostStory>div>.hsComment>.hsComment-l>p{
    font-size: .32rem;
    color: #000000;

    
}
.hostStory>div>.hsComment>.hsComment-l>p>i{
    margin-left: .12rem;
    color: #080808;
    font-family: PingFangSC-Regular;
}
.hostStory>div>.hsComment>.hsComment-r{
    display: flex;
    justify-content: space-between;

}
.hostStory>div>.hsComment>.hsComment-r>i{
    font-size: .48rem;
}
.hostStory>div>.hsComment>.hsComment-r>.like{
    margin-left: .5rem;
}
</style>
