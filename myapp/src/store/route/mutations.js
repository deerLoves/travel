export default {
  handleVisitor(state,params){
    state.infos = params;
    //console.log(state.infos)
  },
  handlevisitorDetailsShow(state,params){
    state.infosOne = params;
    state.infosOneDetiles = params.details;
    console.log(state.infosOne,state.infosOneDetiles);
  },
  handleAddNewRoute(state,params){
    var newObj= new Object();
    newObj.start = params.start;
    newObj.end = params.end;
    newObj.flag = 1;//正在进行
    newObj.createTime = new Date().getFullYear() + '-' + (new Date().getMonth()+1);
    state.myRouteHeader.unshift(newObj);
  },
  handleAddMyAllInfos(state,params){
    state.myRouteAllInfo = params;
  }
}
