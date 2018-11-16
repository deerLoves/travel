import axios from 'axios'
export default {
    handleVisitor(context){
      axios({
        method:'get',
        url:'travel/trip/getalltrip',
        data:{
          pageNum : 1,
          pageSize : 2
        },
        headers:{
          'Content-type': 'application/x-www-form-urlencoded'
        },
      }).then((data)=>{
        //获取每个数据中的data
        var data = data.data.data.data;
        // console.log(data);
        var infos = []
          //对获取每个data内的details提取合并到一个数组内
        data.filter((item)=>{
          // console.log(item.lastupdatetime);
          infos.push(...item.details)
        })
        // console.log(infos);
        //遍历整合后的数组对象，遍历，将数组中的每个对象中的时间，转为年月日小时，添加到每个对象的属性上
        infos.filter((item)=>{
          var data = new Date(item.createtime);
          var year = data.getFullYear();
          var month = data.getMonth() + 1;
          var day = data.getDate();
          var hours = data.getHours()
          item.year = year + '-' + month + '-' + day;
          item.time = hours + ':00'
          // console.log(data,year,month,day,hours);
        })
        console.log(infos);
        context.commit("handleVisitor",infos)
      })
    }
}
