import state from './state'
export default {
    re_handleBlurUserName(state,params){
        state.re_userName_hint = params.message;
        state.re_userName_code = params.code;
        state.re_show_userName = true;
    },
    lg_handleLogin(state,params){
        state.personInfo = params.data;
        console.log(state.personInfo);
    },
    show_handleGetPersonInfo(state,params){
		//state.myStory_list.splice(params,1)
		console.log(params.data)
	}
}