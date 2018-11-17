export default {
    handleGetViewPagers(state,params){
        state.imgArr = params;
        // console.log(params);
    },
    handleGetInterest(state,params){
        //console.log(params.data)
        params.data.forEach((value)=>{
            value.message = false;
        })
        state.storyArray = params;
        //console.log(state.storyArray)
    },
    intoDetalis(state,params){
        state.commtentGather = params;
        console.log(params)
        console.log(state.commtentGather)
    },
// 	handelPublish(state,params){
// 		state.content=params.content;
// 		state.files=params.files;
// 		state.title=params.title
// 	}
}