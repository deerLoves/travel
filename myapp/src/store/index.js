import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


import common from "./common";
import home from "./home";
import story from "./story";
import route from "./route";
import my from "./my";
import login from "./login";
Vue.use(Vuex);

const state = {
    address:[],
    show:true
}

const getters = {

}

const mutations = {
    handleEditTabStatus(state,params){
        if(!params){
            state.show = !state.show;
        }else{
            console.log(params,7);
            if(params == 1){
                state.show = true;
            }else{
                state.show = false;
            }
        }
        
    }
}

const actions = {
    handleEditTabStatus({commit},params){
        
        commit("handleEditTabStatus",params);
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        common,
        home,
        story,
        route,
        my,
        login
    }
})
export default store;