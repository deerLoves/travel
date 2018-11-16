export default {
    handleGetViewPagers(state,params){
        state.imgArr = params;
        // console.log(params);
    },
    handleGetInterest(state,params){
        console.log(params.data)
        params.data.forEach((value)=>{
            value.message = false;
        })
        state.storyArray = params;
        console.log(state.storyArray)
    }
}