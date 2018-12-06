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
            // console.log(dataArray)
        })
    },
    handleGetInterest({commit}){
        axios({
            method:"get",
            url:"/travel/story/funjourney"
        }).then((data)=>{
            
            var dataInterest = data.data.data;
            
            for(var index in dataInterest){
                var timeAtr = dataInterest[index].time.split('T');
                //var timeArray = timeAtr[0].split('-');
                dataInterest[index].time = timeAtr[0];
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
                // console.log(dataInterest[index].img)
            }
           
            commit("handleGetInterest",data.data);
            // console.log(data.data)
        })
    },
    changeNum({commit},params){
        
        axios({
            method:"get",
            url:"/travel/story/checklike?aid="+params,
            
        }).then((data)=>{
            // console.log(data)
        })
        // commit("")
    },
    intoDetalis({commit},params){
        axios({
            method:"get",
            url:"/travel/story/detail?aid="+params,
        }).then((data)=>{
            console.log(data)
            var detailPage = data.data.data;
            console.log(detailPage)
            var timeAtr = detailPage.article.time.split('T');
                //var timeArray = timeAtr[0].split('-');
                detailPage.article.time = timeAtr[0];
            var str=detailPage.article.img;
            str = str.substring(1,str.length-1);
            var Arr = str.split(",")
            for(var i in Arr){
                Arr[i] = Arr[i].substring(1,Arr[i].length-1);
                Arr[i] = 'http://ceshi.qfjava.cn/' + Arr[i]
            }
            detailPage.article.img = Arr
            var headimg='http://ceshi.qfjava.cn/' +detailPage.article.user.headimg;
            detailPage.article.user.headimg = headimg;
            commit("intoDetalis",data.data)
        })
        
    },
    sendMessage({commit},params,messageText){
        axios({
            method:"get",
            url:"/travel/story/comment",
            data:{
                aid:params,
                comment:messageText
            }
        })
        console.log(params,messageText)
    },
	handelPublish({commit}){
		axios({
			method:"post",
			url:"/travel/story/publish/",
			data:{
				title:"人间不值得",
				content:"我渺小的如一粒尘埃，但我坚信能活出与众不同的精彩",
				
			}
		}).then((data)=>{
			console.log(data)
		})
	},
    handleNow_getNowMovie({commit},params){
        if(params<7){
             axios({
                 method:"get",
                 url:"/travel/story/funjourney?page="+params+"&count=7",
             }).then((data)=>{
                 console.log(params,data)
                    //  commit("handleNow_getNowMovie",data.data.data.films)
             })
        }
         
     }
}