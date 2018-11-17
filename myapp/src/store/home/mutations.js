export default {
    //首页搜索定位地点
    handleSearch(state,data){
        state.AddressStatus = data.message;
        // console.log(state.AddressStatus)
    },
    handleindex(state,params){
        state.IndexObj.code = params.code;
        state.IndexObj.data = params.data;
        state.IndexObj.message = params.message;
        //console.log(1,state.data)
        // state.headerImg.push('http://ceshi.qfjava.cn/'+params.data.headimg);
    },
    handlespot(state,params){
        state.SpotObj.code = params.code;
        state.SpotObj.data = params.data;
        state.SpotObj.message = params.message;
        // console.log(1,state.SpotObj.data)
    },
    handlespotAtt(state,params){
        state.SpotAttObj.code = params.code;
        state.SpotAttObj.data = params.data;
        state.SpotAttObj.message = params.message;
        // console.log(1,state.SpotAttObj.data)
    },
    //搜索热点城市
    handlegospot1(state,name){
        // console.log(obj);
        state.SpotName.unshift(name);
        console.log(state.SpotName)
        // state.SpotId = obj.id;
    },
}