import axios from "axios";
export default {
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
            //console.log(dataArray)
            for(var index in dataArray){
                //console.log(dataArray[index]);
                dataArray[index].photo = 'http://ceshi.qfjava.cn/' + dataArray[index].photo;
            }
            //data.data.photo = 'http://39.106.6.205/'+ data.data.photo;
            commit("handleindex",data.data);
        })
    }
}