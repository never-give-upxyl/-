import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        flag:true
    },
    mutations:{
        clichandetoggleLogin(state){
            state.flag=!state.flag;
        }
    },
    modules:{
        home,
    }
})
export default store;