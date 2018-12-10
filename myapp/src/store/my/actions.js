import axios from "axios" 
export default {
	handelgetP({commit}){
		///travel/user/login?username=15536512326&password=123456
		axios({
			method:"get",
			 url:"/travel/story/mystory",
		}).then((data)=>{
			 // console.log(data.data.data)
			 var dataArray = data.data.data;
			 for(var index in dataArray){
				 var time=dataArray[index].time;
				 var timeArr=time.split("T");
				 var timeYearMonthDayArray = timeArr[0].split('-');
				 var arrayStr = dataArray[index].img;
				 arrayStr = arrayStr.substring(1,arrayStr.length-1);
				 var array = arrayStr.split(",");
				 for(var i = 0,len = array.length;i < len;i++){
					 array[i] = 'http://ceshi.qfjava.cn/' + array[i].substring(1,array[i].length-1);
				 }
				 dataArray[index].img = array;
				 dataArray[index].time=timeYearMonthDayArray
			 }
				commit("handelgetP",dataArray)		
// 				 console.log(dataArray)
		})
	},
	handeldata({commit},params){
		 // console.log(params)
		axios({
			method:"get",
			url:"/travel/story/delete/?aid="+params
		}).then((data)=>{
			 //console.log(data)
			 commit('handeldata',params)
		})
	}
}
