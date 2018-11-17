<template>
 <div class=" page home">
        <router-link :to="{name:'setting'}"  v-show="true">
        <h3 class="back iconfont">&#xe60e;</h3>
        </router-link>
        <p>关于我们</p>
        <div class="textarea">
           <p>
                正文最大长度是20字节旅游旅行是一种心态的调整，让你看到更精彩的世界。
            这句话是没错的，因为当我们非常的浮躁或者有很多烦心事的时候，
            旅行就成了解决烦心事的一个方法之一，我们可以看看这美好的世界，
            换一个不一样的环境，去思考问题，换一个不一样的环境去生活，
            我们可能会静下心来想更多的东西，这样我们回来之后才能真的解决很多心事。
           </p>

        </div>
        
       


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
    margin-left:.48rem;
    font-size:.48rem;
    line-height: .88rem;
    color:#030303;
    font-family: PingFangSC-Regular;
    margin-bottom:.48rem;

}
.textarea{
    width:6.86rem;
    height:2.84rem;
  

}
.textarea>p{
      font-size:.32rem;
      line-height:.48rem;
      font-family: PingFangSC-Regular;

}


</style>
