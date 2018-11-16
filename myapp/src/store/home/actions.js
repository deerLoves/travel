import axios from "axios";
export default {
    //定位获取地点
    handleSearch({commit},val){
        axios ({
            method:"get",
            url:"travel/scenic/getsceniclistbypage?address=" + val + "&pageNum=0&pageSize=3"

        }).then((data)=>{
            commit("handleSearch",data.data);
            /* if(data.data.message === "接口正常"){
               commit("handleSearch",data.data);
                //.data[0].address
            }else{
                alert("地点不正确请重新输入")
              
            } */
        })
    },
    handleindex({commit}){
        /*
            查询用户是否登陆:
            /trip/judgeflag
        */
        axios({
            method:'get',
            url:"/travel/scenic/getsceniclistbypage?address=北京&pageNum=1&pageSize=4"
        }).then((data)=>{
           
            var dataArray = data.data.data;
            // console.log(dataArray)
            for(var index in dataArray){
                //console.log(dataArray[index]);
                dataArray[index].photo = 'http://ceshi.qfjava.cn/' + dataArray[index].photo;
            }
            //data.data.photo = 'http://39.106.6.205/'+ data.data.photo;
            commit("handleindex",data.data);
        })
    },
    handlespot({commit}){
        /*
            查询用户是否登陆:
            /trip/judgeflag
        */
        axios({
            method:'get',
            url:"/travel/scenic/gethistory"
        }).then((data)=>{
            commit("handlespot",data.data);
            console.log(data.data)
        })
    },
    handlespotAtt({commit},val){
        /*
            查询用户是否登陆:
            /trip/judgeflag
        */
        axios({
            method:'get',
            url:"/travel/scenic/getscenicbyid?id=" + val.id
        }).then((data)=>{
            var dataArray = data.data.data;
            dataArray.photo = 'http://ceshi.qfjava.cn/' + dataArray.photo;
            console.log(dataArray)
            commit("handlespotAtt",data.data);
            // console.log(data.data)
        })
    }
}
