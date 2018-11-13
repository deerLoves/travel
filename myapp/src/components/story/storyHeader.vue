<template>
    <div class="storyHead">
        <i class="iconfont icon-jiantouzuo"></i>
        <div>
            <i class="iconfont icon-search"></i>
            <input type="text" placeholder="成都故事">
        </div>
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
.storyHead>i{
    font-size: .48rem;
}
.storyHead>div{
    display: flex;
    align-items: center;
    width:6.32rem;
    height: .68rem;
    background: #BBBBBB;
    border-radius: .2rem;
}
.storyHead>div>i{
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
