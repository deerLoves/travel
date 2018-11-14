import state from "./state";
import actions from "./actions"
import mutations from "./mutations";
import getters from "./getters"
export default {
    // 独立的命名空间
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}