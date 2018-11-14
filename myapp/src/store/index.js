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
    address:[]
}

const getters = {

}

const mutations = {

}

const actions = {

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