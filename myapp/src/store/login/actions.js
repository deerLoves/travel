import state from './state'
import axios from 'axios'
import router from './../../router' 
export default {
    re_handleBlurUserName({commit},params){
        var re = /^[1]{1}[0-9]{10}$/;
        if(re.test(params)){
            axios({
                method:"get",
                url:"/travel/user/checkphone?phone=" + params
            }).then((data)=>{
                commit("re_handleBlurUserName",data.data)
            })
        }else{
            return;
        }
    },
    re_handleVerityUserName({commit},params){
        state.re_userName_code = 0;
        state.re_show_userName = true;
        var re = /^[1]{1}[0-9]{10}$/;
        if(re.test(params)){
            state.re_show_userName = false;
            return ;
        }else{
            state.re_userName_hint = "请输入11位数字";
        }
    },
    re_handleVerityCode({commit},params){
        state.re_show_verityCode = true;
        var re = /^[a-zA-Z0-9]{6}$/;
        if(re.test(params)){
            state.re_show_verityCode = false;
            return ;
        }
    },
    re_handleVerityPwd({commit},params){
        state.re_show_password1 = true;
        var re = /^[\w]{6,12}$/;
        if(re.test(params)){
            state.re_show_password1 = false;
            return ;
        }
    },
    re_handleVerityEcPwd({commit},params){
        state.re_show_password2 = true;
        if(params.password == params.Cpwd){
            state.re_show_password2 = false;
            return ;
        }
    },
    re_handleGetVerityCode({commit},params){
        var re = /^[1]{1}[0-9]{10}$/;
        if(!re.test(params)){
            return ;
        }else{
            axios({
                method:"post",
                url:"/travel//user/sendcode?username=" + params
            }).then((data)=>{
                console.log(data);
            })
        }
    },
    re_handleRegister({commit},params){
       if(state.re_userName_code == 1 && !state.re_show_verityCode && !state.re_show_password1 && !state.re_show_password2){
            
            var nickname = Math.random().toString(36).substr(2).substring(0,4) + "_" + new Date().getTime();
            var sex = 0;
            var age = 0;
            var birthday = new Date().getFullYear() + '/' + (new Date().getMonth()+1) +'/' + new Date().getDay();
            var url = "/travel/user/register?phone=" + params.username
                        + "&password=" + params.password
                        + "&code=" + params.msg
                        + "&nickname=" + nickname
                        + "&sex=" +  sex
                        + "&age=" +  age
                        + "&birthday=" +  birthday;
            axios({
                method:"post",
                url:url
            }).then((data)=>{
                console.log(data.data.code)
            })
            return 1;
       }else{
            console.log('no');
            return 0;
       }
    },
    lg_handleLogin({commit},params){
        var username = params.username;
        var password = params.password;
        axios.get('/travel/user/login',{
            params:{
                username:username,
                password:password
            }
        }).then((data)=>{
            if(data.data.code == 1){
                data.data.data.headimg = 'http://ceshi.qfjava.cn/' + data.data.data.headimg;
                var str = data.data.data.birthday;
                var strArray = str.split('T');
                data.data.data.birthday = strArray[0];
                commit("lg_handleLogin",data.data);
                router.push({name:'home'})
            }else{
                console.log("登录失败！",data);
            }
        })
    },
    lg_handleEditPersonInf({commit},data){
        console.log(data.data.data);
        data.data.data.headimg = 'http://ceshi.qfjava.cn/' + data.data.data.headimg;
        commit("lg_handleLogin",data.data);
    },
    show_handleGetPersonInfo({commit},params){
		var username = params.username;
        var password = params.password;
        axios.get('/travel/user/login',{
            params:{
                username:username,
                password:password
            }
        }).then((data)=>{
            if(data.data.code == 1){
                data.data.data.headimg = 'http://ceshi.qfjava.cn/' + data.data.data.headimg;
                var str = data.data.data.birthday;
                var strArray = str.split('T');
                data.data.data.birthday = strArray[0];
                commit("lg_handleLogin",data.data);
            }
        })
	}
}