<template>
    <div class="storyHead">
        <!-- <i class="iconfont icon-jiantouzuo"></i> -->
        <div>
            <i class="iconfont icon-search"></i>
            <input type="text" placeholder="成都故事">
        </div>
      <router-link to="/publish"> <i class="iconfont icon-iconfont7"></i></router-link> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.storyHead{
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.3;
}
/* .storyHead>i{
    font-size: .48rem;
} */
.storyHead>i:nth-of-type(1){
    font-size:.6rem;
}
.storyHead>div{
    display: flex;
    align-items: center;
    width:6rem;
    height: .68rem;
    background: #BBBBBB;
    border-radius: .2rem;
}
.storyHead>a>i{
    font-size:48px;
    margin:.2rem .248rem .2rem .24rem;
}
.storyHead>div>input{
    font-size:34px;
    border:0;
    font-family: PingFangSC-Regular;
    background: #BBBBBB;
    color:#000;
    outline: none;
    line-height: .44rem;
}
</style>
