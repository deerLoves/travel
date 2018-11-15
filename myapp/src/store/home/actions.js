import axios from "axios";
export default {
    //定位获取地点
    handleSearch({commit},val){
        axios ({
            method:"get",
            url:"travel/scenic/getsceniclistbypage?address=" + val + "&pageNum=0&pageSize=3"

        }).then((data)=>{
            console.log(data)
        })
        // commit("handleSearch")
    }
}