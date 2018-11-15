<template>
    <div class="register page">
        <div class="top">
            <i class="iconfont icon-guanbi btn" @click="handleClose()"></i>
        </div>
        <div class="title">注册</div>
        <div class="ipt">
            <p>
                 <input type="text" placeholder="请输入手机号" class="inpu_one" @input="handleEmil()" v-model="phone">
                 <span v-show="show_one">请输入11位手机号</span> 
                 <!-- <span>&nbsp;</span> -->
                 
            </p>
            <p class="bor">
                <input type="text" placeholder="输入验证码" class="input_two" @click="handlePhnoe()" v-model="msg">
                <span class="msg">获取验证码</span>
           </p>
           <p>
                <input type="text" placeholder="输入密码" class="input_three" @input="handlePwd()" v-model="password">
                 <span v-show="show_three">6~12位 英文 数字 下划线</span>
          </p>
          <p>
             <input type="text" placeholder="确认密码" class="input_four" @input="handlecPwd()" v-model="Cpwd">
             <span v-show="show_four">两次密码不正确</span>
         </p>
            <input type="button" value="注册" class="sub" @click="handleSub()">
        </div>
    </div>
</template>
<script  scoped>
export default {
    data(){
        return{
            show_one:false,
            show_three:false,
            show_four:false,
            phone:"",
            msg:"",
            password:"",
            Cpwd:"",
        }
    },
    methods:{

            handleEmil(){
            this.show_one = true;
            var re = /^[1]{1}[0-9]{10}$/;
                if(re.test(this.phone)){
                this.show_one = false;
                return true;
                // console.log(this.phone)
                 }
            },
            handlePhnoe(){

            },
            handlePwd(){
            this.show_three = true;
            var re = /^[\w]{6,12}$/;
                if(re.test(this.password)){
                this.show_three = false;
                 return true;
                // console.log(this.password)
                 }
            },
            handlecPwd(){
            this.show_four = true;
                if(this.password == this.Cpwd){
                this.show_four = false;
                 return true;
                 }
            },
            handleSub(){
                if(this.phone || this.password || this.password == true){
                    alert("注册成功");
                    this.$router.push("/login")
                }
            },
            handleClose(){
                this.$router.push("/home")
            }
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
  letter-spacing: 0.12rem;
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
</style>
