import axios from "axios"
export default {
	handelPublish({commit}){
		axios({
			method:"post",
			url:"/travel/story/publish/",
			data:{
				title:"人间不值得",
				content:"我渺小的如一粒尘埃，但我坚信能活出与众不同的精彩",
				files:["../../../static/images_li/t4.png","../../../static/images_li/t5.png","../../../static/images_li/t6.png"]
			}
		}).then((data)=>{
			console.log(data)
		})
	}
}