<template>
 <div class=" page home">
        <router-link :to="{name:'my'}" class="" v-show="true">
        <h3 class="back">&lt;</h3>
        </router-link>
        <p>信息反馈</p>
        <div class="textinp"></div>
        <button class="send">发送</button>


 </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.page{
  /*公共样式:上面的电池栏、下面的切换栏*/
  padding-top: .4rem;
  padding-bottom: .96rem;
}

.home{
    height:100%;
    position: fixed;
    z-index: 1;
    background: #fff;
}
.back{
    line-height: .88rem;
    font-size:0.4rem;
    margin-left:.32rem;
    margin-bottom:.64rem;
}
p{
    margin-left:.32rem;
    font-size:.48rem;
    line-height: .88rem;
    color:#030303;
    font-family: PingFangSC-Regular;
    margin-bottom:.18rem;

}
.textinp{
    width:6.70rem;
    height:4.26rem;
     margin-left:.4rem;
     border: 1px solid #BBBBBB ;
     margin-bottom:.62rem;

}
.send{
  margin-left:.32rem;
    width:6.86rem;
    height:1rem;
    border-radius: .5rem;
    border:2px solid #4D9EE6;
    font-size: .36rem;
    color:#4D9EE6;
    background:white;
}

</style>
