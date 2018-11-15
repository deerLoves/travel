import axios from "axios"
export default {
    handleGetViewPagers({commit}){
         axios({
            method:"get",
            url:"/travel/story/essence"
        }).then((data)=>{
            // console.log(data.data.data);
            var dataArray = data.data.data;
            for(var index in dataArray){
                dataArray[index].img = 'http://ceshi.qfjava.cn/' +  dataArray[index].img;
                // console.log(imgArr)
            }
            
            commit("handleGetViewPagers",dataArray);
            console.log(dataArray)
        })
    },
    handleGetInterest({commit}){
        axios({
            method:"get",
            url:"/travel/story/funjourney"
        }).then((data)=>{
            
            var dataInterest = data.data.data;
            
            for(var index in dataInterest){
                var str = dataInterest[index].img;
                str = str.substring(1,str.length-1);
                // console.log(str);
                var Arr = str.split(",")
                for(var i in Arr){
                    Arr[i] = Arr[i].substring(1,Arr[i].length-1);
                    Arr[i] = 'http://ceshi.qfjava.cn/' + Arr[i]
                    // console.log(Arr[i])
                }
                dataInterest[index].img = Arr;
                console.log(dataInterest[index].img)
            }
           
            commit("handleGetInterest",data.data);
            console.log(data.data)
        })
    },
    changeNum({commit},params){
        
        axios({
            method:"get",
            url:"/travel/story/checklike?aid="+params,
            
        }).then((data)=>{
            console.log(data)
        })
        // commit("")
    }
}