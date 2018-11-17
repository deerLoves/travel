export default {
	handelgetP(state,params){
		// console.log(params)
		state.myStory_list = params;
		// console.log(state.myStory_list)		
	},
	handeldata(state,params){
		state.myStory_list.splice(params,1)
	}
}

