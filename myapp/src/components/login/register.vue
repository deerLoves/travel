<template>
    <div class="register page">
        <div class="top">
            <i class="iconfont icon-guanbi btn" @click="handleClose()"></i>
        </div>
        <div class="title">注册</div>
        <div class="ipt">
            <p>
                 <input type="text" placeholder="请输入手机号" class="inpu_one" @input="re_handleVerityUserName(username)" @blur="re_handleBlurUserName(username)" v-model="username">
                 <span v-show="re_show_userName">{{re_userName_hint}}</span> 
            </p>
            <p class="bor">
                <input type="text" placeholder="输入验证码" class="input_two" @input="re_handleVerityCode(msg)" v-model="msg">
                <!-- <span class="msg" @click="re_handleGetVerityCode(username)" ref="getVerityCode">获取验证码</span> -->
                <span class="msg" @click="re_handleGetVerityCode(username),re_handleGetVeirityCodeChange()" ref="getVerityCode">{{content}}</span>
                <span class="verityCodeSpan" v-show="re_show_verityCode">{{re_verityCode_hint}}</span>
           </p>
           <p>
                <input type="password" placeholder="输入密码" class="input_three" @input="re_handleVerityPwd(password)" v-model="password">
                 <span v-show="re_show_password1">{{re_password1_hint}}</span>
          </p>
          <p>
             <input type="password" placeholder="确认密码" class="input_four" @input="re_handleVerityEcPwd({password,Cpwd})" v-model="Cpwd">
             <span v-show="re_show_password2">{{re_password2_hint}}</span>
         </p>
            <input type="button" value="注册" class="sub" @click="re_handleRegister({username,msg,password})">
        </div>
    </div>
</template>
<script  scoped>
import Vuex from 'vuex';
import axios from 'axios';
import { MessageBox } from "mint-ui";
export default {
    created(){
        this.handleEditTabStatus();
    },
    data(){
        return{
            username:"",
            msg:"",
            password:"",
            Cpwd:"",
            content:'发送验证码',
            totalTime:60
        }
    },
    computed:{
        ...Vuex.mapState({
            show:state=>state.show,
            re_show_userName:state=>state.login.re_show_userName,
            re_userName_hint:state=>state.login.re_userName_hint,
            re_verityCode_hint:state=>state.login.re_verityCode_hint,
            re_show_verityCode:state=>state.login.re_show_verityCode,
            re_password1_hint:state=>state.login.re_password1_hint,
            re_show_password1:state=>state.login.re_show_password1,
            re_password2_hint:state=>state.login.re_password2_hint,
            re_show_password2:state=>state.login.re_show_password2,
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleEditTabStatus:"handleEditTabStatus",

            re_handleBlurUserName:"login/re_handleBlurUserName",

            re_handleVerityUserName:"login/re_handleVerityUserName",
            re_handleVerityCode:"login/re_handleVerityCode",
            re_handleVerityPwd:"login/re_handleVerityPwd",
            re_handleVerityEcPwd:"login/re_handleVerityEcPwd",

            re_handleRegister_verity:"login/re_handleRegister",
            re_handleGetVerityCode:"login/re_handleGetVerityCode",
            
        }),
        re_handleGetVeirityCodeChange(){
            let clock = window.setInterval(() => {
              if(this.totalTime <= 0){
                  this.content = '发送验证码';
                  window.clearInterval(clock);
              }else{
                  this.totalTime--;
                  this.content = this.totalTime + 's后重新发送'
              }
            },1000)
        },
        re_handleRegister(params){
            var that = this;
            var flag_re = this.re_handleRegister_verity(params);
            flag_re.then((data)=>{
                if(data){
                    MessageBox({
                        title: '温馨提示',
                        message: '注册成功！',
                        showCancelButton: false
                    }).then((res)=>{
                        that.$router.push({name:'login'});
                    });
                }else{
                     MessageBox({
                        title: '温馨提示',
                        message: '注册失败！',
                        showCancelButton: false
                    }).then((res)=>{
                        
                    });
                }
            })
        
            
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
.register {
  margin-left: 0.32rem;
}
.top > .btn {
  width: 100%;
  height: 0.48rem;
  background: #ffffff;
  font-size: 0.48rem;
  color: #000;
}
.title {
  width: 100%;
  height: 0.66rem;
  font-size: 0.48rem;
  color: #000000;
  letter-spacing: 0.12rem;
  margin-top: 0.9rem;
  margin-bottom: 0.72rem;
  font-weight: 700;
}
.inpu_one,
.input_two,
.input_three,
.input_four {
  width: 6.86rem;
  height: 0.5rem;
  outline: none;
  border: none;
  border-bottom: 3px solid #000;
  opacity: 0.49;
  font-family: PingFangSC-Regular;
  font-size: 0.36rem;
  color: #7e7e7e;
}
.bor {
  display: flex;
  position: relative;
}
.ipt > .bor > .input_two {
  width: 4.2rem;
}
.ipt > .bor > .msg {
  width: 2.4rem;
  height: 0.72rem;
  border: 2px solid #4d9ee6;
  border-radius: 0.4rem;
  position: absolute;
  left: 4.4rem;
  top: -0.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  color: #4d9ee6;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 0.72rem;
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
  background:#fff;
  outline: none;
}
p{
    margin-bottom: 1.26rem;
    position:relative;
}
span{
    color:red;
    display: block;
    width:100%;
    height:0.48rem;
    position: absolute;
    /* left: */
}
.verityCodeSpan{
    position:absolute;
    top: .5rem;
}
</style>
