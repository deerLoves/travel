export default {
	handelPublish(state,params){
		state.content=params.content;
		state.files=params.files;
		state.title=params.title
	}
}