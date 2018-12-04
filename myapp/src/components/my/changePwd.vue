<template>
<div class=" page home">
       <router-link :to="{name:'setting'}"  v-show="true">
        <h3 class="back iconfont">&#xe60e;</h3>
        </router-link>
        <p class="title_eidt">修改密码</p>
        <p class="input_p">
            <label  for="">当前密码</label>
            <input  type="password" placeholder="请填写当前帐号密码" v-model="pswOld">
        </p>
        <p class="input_p">
            <label  for="">新密码</label>
            <input class="coninput" type="password" placeholder="请填写6-12位新建密码" v-model="pswNew1">
        </p>
        <p class="input_p">
            <label  for="">确认密码 </label>
            <input type="password" placeholder="再次填写新建密码" v-model="pswNew2">
        </p>
        <button class="confirm" @click="handleEditPassword()">确定</button>

</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            pswOld:'',
            pswNew1:'',
            pswNew2:''
        }
    },
    methods:{
        handleEditPassword(){
            console.log(this.pswOld,this.pswNew1)
            axios({
                method:'post',
                url: 'travel/user/updatepassword?password= ' + this.pswOld + "&newpassword=" + this.pswNew1
            }).then((data) => {
                console.log(data);
            })
        }
    }
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
.title_eidt{
    margin-left:.32rem;
    margin-bottom:.48rem;
    font-size:.48rem;
    line-height: .48rem;
    color:#030303;
    font-family: PingFangSC-Regular;
}

p.input_p{
    display: flex;
    justify-content: space-between;
    width: 7.2rem;
    padding-left: .3rem;
}
p.input_p>label{
    display: block;
    height:.36rem;
    font-size:.36rem;
    margin-bottom:.8rem;
    color:#030303;
    font-family: PingFangSC-Regular;
}
p.input_p>input{
    width:3.6rem;
    height:.5rem;
    border:none;
    outline: none;
    font-size:.32rem;
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
/* .newPsw{
   
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

 */



</style>

