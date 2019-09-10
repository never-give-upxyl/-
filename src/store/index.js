import Vue from "vue"
import Vuex from "vuex"

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

    }
})
export default store;