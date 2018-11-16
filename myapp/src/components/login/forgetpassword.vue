<template>
    <div class="login page">
         <div class="top">
            <i class="iconfont icon-guanbi btn" @click="handleClose()"></i>
        </div>
        <div class="title">忘记密码</div>
        <p class="phone">
            <input type="text" placeholder="请输入手机号" class="input_one">
        </p>
         <p class="bor">
                <input type="text" placeholder="输入验证码" class="input_two">
                <span class="msg">获取验证码</span>
           </p>
        <p>
            <input type="password" placeholder="重置密码" class="input_three">
        </p>
        <input type="button" class="sub" value="登录">
        <div class="bottom">
            <p class="goregister" @click="goregister()">还没有账号？立即注册</p>
          
        </div>    

    </div>
</template>
<script>
import Vuex from 'vuex';
export default {
    created(){
        this.handleEditTabStatus();
    },
    computed:{
        ...Vuex.mapState({
            show:state=>state.show
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleEditTabStatus:"handleEditTabStatus"
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
        this.handleEditTabStatus();
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
.phone {
  padding-top: 0.32rem;
  margin-bottom: 0.88rem;
}
.input_one,
.input_two,.input_three {
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
.input_two{
   margin-bottom:0.88rem;
}
.input_three{
   margin-bottom:0.88rem;
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
  margin: 0 2.3rem 0 2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28;
  color: #4d9ee6;
  text-align: center;
}
.bor {
  display: flex;
  position: relative;
}
.bor > .msg {
  width: 2.4rem;
  height: 0.82rem;
  border: 2px solid #4d9ee6;
  border-radius: 0.4rem;
  position: absolute;
  left: 4.4rem;
  top: -0.35rem;
  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  color: #4d9ee6;
  letter-spacing: 0.12rem;
  text-align: center;
  line-height: 0.72rem;
}
.bor > .input_two {
  width: 4.2rem;
}
</style>


