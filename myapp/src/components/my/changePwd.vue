<template>
<div class=" page home">
       <router-link :to="{name:'setting'}"  v-show="true">
        <h3 class="back">&lt;</h3>
        </router-link>
        <p>修改密码</p>
        <label class="newPsw" for="">新密码<input  type="password" placeholder="请填写8-12位新建密码"></label>
        <br>
        <label class="conPsw" for="">确认密码<input class="coninput" type="password" placeholder="再次填写新建密码"></label>
         <button class="confirm">确定</button>

</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.page{
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
    margin-bottom:.48rem;
    font-size:.48rem;
    line-height: .48rem;
    color:#030303;
    font-family: PingFangSC-Regular;
}
.newPsw{
   
    display: block;
    height:.36rem;
     font-size:.36rem;
    margin-bottom:.8rem;
    margin-left:.32rem;
    color:#030303 ;
    font-family: PingFangSC-Regular;
   
   

}
.conPsw{
    display: block;
    height:.36rem;
    margin-left:.36rem;
    font-size:.36rem;
    color:#030303 ;
    font-family: PingFangSC-Regular;
     margin-bottom:1rem;
    

}
input{
    width:3.3rem;
    height:.5rem;
    
    margin-left:2.4rem;
    border:none;
    outline: none;
    font-size:.32rem;
}
.coninput{
    margin-left:2rem;

}
input::-webkit-input-placeholder{
    color:#030303 ;
    opacity:0.4;
    font-size:.32rem;
    line-height:.5rem;
   
}
.confirm{
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

