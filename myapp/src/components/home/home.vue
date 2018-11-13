<template>
    <div class="page home">
        <div id="search">
            <div class="searchspot">
                <p><i></i>搜“热门地点”试试</p>
            </div>
            <div class="searchaddress">
                <p>北京</p>
            </div>
        </div>
        <div id="find">
            <h2>发现行漫</h2>
            <div class="banner"></div>
        </div>
        <div id="hotspot">
            <h2>热门景点</h2>
            <div class="banner">
                <dl>
                    <dt><img src="../../../static/bai/hotspot/马尔代夫.png"></dt>
                    <dd><p><span>这行最多13个字</span>这行最多13个字他，来一场属于你</p></dd>
                    <dd><p>为你而规划</p></dd>
                </dl>
            </div>
            <div class="more"><p>查看更多热门景点</p></div>
        </div>
        <div id="hottrip">

        </div>
        <div id="hotstory">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home{
    overflow: scroll;
}
#search{
    display: flex;
    padding:0.2rem 0 0.64rem 0.32rem;
}
#search>.searchspot{
    width: 5.72rem;
    height: 0.68rem;
    opacity: 0.5;
    background: rgba(255,255,255,0.09);
    box-shadow: 0 0.02rem 0.02rem 0 rgba(0,0,0,0.50);
    border-radius: 0.1rem;
    padding-left: 0.16rem;
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #030303;
    letter-spacing: -0.003rem;
    line-height: 0.68rem;
}
#search>.searchaddress{
    font-size: 28px;
    line-height: 0.68rem;
    padding-left: 0.14rem;
    float: left;
}

#find>h2,#hotspot>h2{
    font-family: PingFangSC-Regular;
    font-size: 52px;
    color: #030303;
    letter-spacing: -0.003rem;
    line-height: 0.54rem;
    padding-left: 0.32rem;
}
#find>.banner{
    height: 4.72rem;
    background: orchid;
    padding:0.54rem 0 0.78rem;
}
#hotspot>.banner{
    padding:0.48rem 0 0.36rem;
}
#hotspot>.banner>dl{
    padding:0 0 0.1rem 0.32rem;
}
#hotspot>.banner>dl>dt>img{
    width: 4.02rem;
    height: 2.04rem;
    border-radius: 10px 10px 0 0;
}
#hotspot>.banner>dl>dd:nth-of-type(1)>p{
    width: 3.78rem;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #030303;
    line-height: 0.4rem;
    letter-spacing: -0.0036rem;
}
#hotspot>.banner>dl>dd:nth-of-type(1)>p>span{
    color: #C90000;
}
#hotspot>.banner>dl>dd:nth-of-type(2)>p{
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #D94A4A;
    letter-spacing: -0.0038rem;
    line-height: 0.5rem;
    padding-top: 0.32rem;
}
#hotspot>.more{
    padding-left: 0.32rem;
}
#hotspot>.more>p{
    width: 2.8rem;
    height: 0.88rem;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #4D9EE6;
    letter-spacing: -0.003rem;
    border: 1px solid #4D9EE6;
    line-height: 0.88rem;
    text-align: center;
}
</style>
