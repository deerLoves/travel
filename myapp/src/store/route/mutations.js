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
    newObj.flag = 0;
    newObj.createTime = new Date().getFullYear() + '-' + (new Date().getMonth()+1);
    state.myRouteHeader.unshift(newObj);
  },
  handleAddMyAllInfos(state,params){
    state.myRouteAllInfo = params;
  },
  handleSendCommit(state,params){
    var infos = state.infos;
    infos.map((item,index)=>{
      if(params.index == item.id){
        var newObj = new Object();
        newObj.comment = params.val;
        var user = new Object();
        user.nickname = params.nickname;
        newObj.user = user;
        item.comments.push(newObj);
      }
    })
  }
}
