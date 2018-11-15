export default {
    handleSearch(state,val){
        state.hotcity=val;
        // console.log(state.hotcity,"mutations下面的state地址")
    },
    handleindex(state,params){
        state.IndexObj.code = params.code;
        state.IndexObj.data = params.data;
        state.IndexObj.message = params.message;
        //console.log(1,state.data)
        // state.headerImg.push('http://ceshi.qfjava.cn/'+params.data.headimg);
    }
    
}