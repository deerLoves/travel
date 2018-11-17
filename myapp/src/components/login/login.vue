<template>
    <div class="login page">
         <div class="top">
            <i class="iconfont icon-guanbi btn" @click="handleClose()"></i>
        </div>
        <div class="title">登录</div>
        <div class="hphoto">
            <img src="../../../static/img/d.jpg">
        </div>
        <p class="phone">
            <input type="text" placeholder="请输入手机号" class="input_one" v-model="username">
        </p>
        <p>
            <input type="password" placeholder="请输入密码" class="input_two" v-model="password">
        </p>
        <input type="button" class="sub" value="登录" @click="lg_handleLogin({username,password})">
        <div class="bottom">
            <p class="goregister" @click="goregister()">立即注册></p>
            <p @click="forgetPassword()">忘记密码></p>
        </div>    

    </div>
</template>
<script>
import Vuex from 'vuex';
export default {
    created(){
        this.handleEditTabStatus(0);
    },
    data(){
        return{
            username:"",
            password:""
        }
    },
    computed:{
        ...Vuex.mapState({
            show:state=>state.show
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleEditTabStatus:"handleEditTabStatus",
            lg_handleLogin:"login/lg_handleLogin"
        }),
        goregister(){
            this.$router.push("/register")
        },
        forgetPassword(){
            this.$router.push("/forgetpassword")
        },
        handleClose(){
            this.$router.push("/login")
        }
    },
    beforeRouteLeave(to,from,next){
        this.handleEditTabStatus(1);
        next();
    }
};
</script>
<style scoped>
.login {
  margin-left: 0.32rem;
}
.top > .btn {
  width: 100%;
  height: 0.48rem;
  background: #fff;
  font-size: 0.48rem;
  color: #000;
  margin-bottom: 0.9rem;
}
.title {
  width: 100%;
  height: 0.88rem;
  font-size: 0.48rem;
  color: #000000;
  margin-top: 0.9rem;
  font-weight: 900;
}
.hphoto {
  width: 100%;
  height: 2rem;
}
.hphoto > img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 2.46rem;
}
.phone {
  padding-top: 1.5rem;
  margin-bottom: 1.28rem;
}
.input_one,
.input_two {
  width: 6.86rem;
  height: 0.5rem;
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
  opacity: 0.49;
  font-family: PingFangSC-Regular;
  font-size: 0.36rem;
  color: #7e7e7e;
}
.sub {
  width: 6.84rem;
  height: 1rem;
  border: 2px solid #4d9ee6;
  border-radius: 0.6rem;
  font-family: PingFangSC-Regular;
  font-size: 0.36rem;
  color: #4d9ee6;
  letter-spacing: 0.11px;
  text-align: center;
  background: #fff;
  margin-top: 0.6rem;
  outline: none;
}
.bottom {
  padding-top: 0.5rem;
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 0.28;
  color: #4d9ee6;
  text-align: center;
}
.goregister {
  margin: 0 2.3rem 0 1rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28;
  color: #4d9ee6;
  text-align: center;
}
</style>


