import Vue from "vue"
import Vuex from "vuex"
import more from "./more"
Vue.use(Vuex)
const store=new Vuex.Store({

    modules:{
        more
    }
})
export default store;