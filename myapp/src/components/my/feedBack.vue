<template>
 <div class=" page home">
        <router-link :to="{name:'my'}" class="" v-show="true">
        <h3 class="back iconfont">&#xe60e;</h3>
        </router-link>
        <p>信息反馈</p>
        <textarea class="textinp" placeholder="写下您对我们的意见或建议"></textarea>
        <!-- <div class="textinp"></div> -->
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
    font-size:.34rem;
   
    outline: none;
    font-family: PingFangSC-Regular;
    width:6.70rem;
    height:4.26rem;
     margin-left:.4rem;
     padding:.32rem;
     border: 1px solid #BBBBBB ;
     margin-bottom:.62rem;
    


}
textarea::-webkit-input-placeholder{
     color:#7E7E7E ;


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
