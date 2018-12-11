import axios from 'axios'
import state from './state'
import router from './../../router'
/*
    有时间把时间截取 图片处理写成公共方法

*/
export default {
  handleVisitor({commit},params) {
    console.log(params)
    axios({
      method:'get',
      url: '/travel/trip/getalltrip?pageNum='+ params.pageNum + "&pageSize=" + params.pageSize,
    }).then((data) => {
      //获取每个数据中的data
      var data = data.data.data.data;
      console.log(data); 
      data.filter((item) => {
        //用户头像
        //item.comments[0].user.headimg = 'http://ceshi.qfjava.cn/' + item.comments[0].user.headimg;
        //item.userHeadImg = item.comments[0].user.headimg;
        //最后更新时间
        var lastupdatetime = item.lastupdatetime;
        var lastupdatetimeArr = lastupdatetime.split('T')[1];
        var lastupdateYear = lastupdatetime.split('T')[0];
        var lastupdateHouer = lastupdatetimeArr.split(':')[0] + ':' + lastupdatetimeArr.split(':')[1];
        item.lastupdateYear = lastupdateYear;
        item.lastupdateHouer = lastupdateHouer;
        var details = item.details;
        details.filter((item) => {


          //行程图片
          var createtime = item.createtime;
          var createtimeArr = createtime.split('T')[1];
          var createYear = createtime.split('T')[0];
          var createHouer = createtimeArr.split(':')[0] + ':' + createtimeArr.split(':')[1];
          item.createYear = createYear;
          item.createHouer = createHouer;
          var photoArr = item.photo.split(',');
          var photo = [];
          photoArr.filter((item, index) => {
            if (index > 2) {

            } else {
              photo.push('http://ceshi.qfjava.cn/' + item);
            }

          })
          item.photo = photo;
        })
        if(item.details[0]){
          item.showMsg = item.details[0].msg;
          item.showPhoto = item.details[0].photo[0];
        }else{
          item.showMsg = '';
          item.showPhoto = '';
        }
        
        //查找用户id
        // axios({
        //   method:'get',
        //   url:'travel/trip/getuseridbytripid?tripid=' + item.id,
        // }).then((data)=>{
        //   console.log(data);
        // })
      })
      console.log(data);
      commit("handleVisitor", data);
    })
  },
  handlevisitorDetailsShow({ commit }, params) {
    var tripid = params.id;
    console.log(state.infos);
    for (var index in state.infos) {
      var info = state.infos[index];
      if (info.id == tripid) {
        commit("handlevisitorDetailsShow", info);
      }
    }
  },
  //创建新行程
  handleAddNewRoute({ commit }, params) {
    console.log(params.start)
    axios({
      method: 'get',
      url: '/travel/trip/sendtrip?start= ' + params.start + "&end=" + params.end
    }).then((data) => {
      console.log(data);
      commit("handleAddNewRoute", params);

      axios({
        method: 'get',
        url: '/travel/trip/getalltripbyuserid'
      }).then((data) => {
        var allInfo = data.data.data.data;
        console.log(allInfo);
        var headerArray = [];
        allInfo.filter((item) => {
          var newObj = new Object();
          newObj.id = item.id;
          newObj.start = item.start;
          newObj.end = item.end;
          newObj.flag = item.flag;
          var dateArray = item.createtime.split('T')[0].split('-');
          var createTime = dateArray[0] + '-' + dateArray[1];
          newObj.createTime = createTime;
          headerArray.push(newObj);
        })
        commit("handleAddMyAllInfos", allInfo);
        state.myRouteHeader = headerArray;
        router.push({ name: 'planPath' });
      })
    })
  },
  //获取当前用户的所有行程
  judgeChildrenRoute({ commit }) {
    if (!state.loginFlag) {
      return;
    }
    axios({
      method: 'get',
      url: '/travel/trip/getalltripbyuserid'
    }).then((data) => {
      var allInfo = data.data.data.data;
      console.log(allInfo);
      var headerArray = [];
      allInfo.filter((item) => {
        var newObj = new Object();
        newObj.id = item.id;
        newObj.start = item.start;
        newObj.end = item.end;
        newObj.flag = item.flag;
        var dateArray = item.createtime.split('T')[0].split('-');
        var createTime = dateArray[0] + '-' + dateArray[1];
        newObj.createTime = createTime;
        headerArray.push(newObj);
      })
      commit("handleAddMyAllInfos", allInfo);
      state.myRouteHeader = headerArray;
      if (state.myRouteHeader.length > 0) {
        router.push({ name: 'planPath' });
      } else {
        router.push({ name: 'routeAdd' });
      }
    })
  },
  judgeChildrenRoute_fuBen({ commit }){
    if (!state.loginFlag) {
      return;
    }
    axios({
      method: 'get',
      url: '/travel/trip/getalltripbyuserid'
    }).then((data) => {
      var allInfo = data.data.data.data;
      console.log(allInfo);
      var headerArray = [];
      allInfo.filter((item) => {
        var newObj = new Object();
        newObj.id = item.id;
        newObj.start = item.start;
        newObj.end = item.end;
        newObj.flag = item.flag;
        var dateArray = item.createtime.split('T')[0].split('-');
        var createTime = dateArray[0] + '-' + dateArray[1];
        newObj.createTime = createTime;
        headerArray.push(newObj);
      })
      commit("handleAddMyAllInfos", allInfo);
    })
  },
  handleGetMyrouter({ commit }, params) {
    console.log(params.id);
    if (!params.id) {
      state.loginFlag = 0;
      router.push({ name: 'login' });
    } else {
      state.loginFlag = 1;

    }
  },
  //获取当前用户行程的详细信息
  handleGoPersonRouteDetails({ commit }, params) {

    state.myRouteAllInfo.map((item) => {
      if (item.id == params.id) {
        state.myRouteInfoDetails = item;
      }
    })
    console.log(params, state.myRouteInfoDetails);
    if (state.myRouteInfoDetails) {
      var detailsArray = state.myRouteInfoDetails.details;

      detailsArray.filter((item, index) => {
        //时间截取
        var oTime = item.createtime;
        var oTimeArray = oTime.split('T');
        var createYear = oTimeArray[0];
        var oHouer = oTimeArray[1].split(':');
        var createHouer = oHouer[0] + ':' + oHouer[1];
        item.createYear = createYear;
        item.createHouer = createHouer;
        //图片处理
        console.log(item.photo);
        if(item.photo){
          var photoArray = item.photo.split(',');
          var photoNewArray = [];
          photoArray.filter((item, index) => {
            if (index > 2) {

            } else {
              photoNewArray.push('http://ceshi.qfjava.cn/' + item);
            }
          })
        }
        item.photo = photoNewArray;
      })
      state.myRouteInfoDetails.details = detailsArray;

    }
    console.log(state.myRouteInfoDetails);
    router.push({ name: 'myRouteDetails' });
  },
  handleGoPersonRouteDetails_fuBen({ commit }, params){
    state.myRouteAllInfo.map((item) => {
      if (item.id == params.id) {
        state.myRouteInfoDetails = item;
      }
    })
    console.log(params, state.myRouteInfoDetails);
    if (state.myRouteInfoDetails) {
      var detailsArray = state.myRouteInfoDetails.details;

      detailsArray.filter((item, index) => {
        //时间截取
        var oTime = item.createtime;
        var oTimeArray = oTime.split('T');
        var createYear = oTimeArray[0];
        var oHouer = oTimeArray[1].split(':');
        var createHouer = oHouer[0] + ':' + oHouer[1];
        item.createYear = createYear;
        item.createHouer = createHouer;
        //图片处理
        console.log(item.photo);
        if(item.photo){
          var photoArray = item.photo.split(',');
          var photoNewArray = [];
          photoArray.filter((item, index) => {
            if (index > 2) {

            } else {
              photoNewArray.push('http://ceshi.qfjava.cn/' + item);
            }
          })
        }
        item.photo = photoNewArray;
      })
      state.myRouteInfoDetails.details = detailsArray;

    }
    console.log(state.myRouteInfoDetails);
  },
  //结束行程
  hanleEndRoute(){
    axios({
      method: 'get',
      url: '/travel/trip/endtrip'
    }).then((data) => {
        console.log(data);
    })
  },
  //新增评论
  handleSendCommit({commit},params){
    axios({
      method: 'get',
      url: '/travel/trip/commenttrip?tripid= ' + params.index + "&comment=" + params.val
    }).then((data) => {
      console.log();
      if(data.data.code == 1){
        commit("handleSendCommit", params);
      }
    }) 
  },
}
