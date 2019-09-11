import Headerlib from "./header/index.vue";
import Bscroll from "./bscoll/index.vue";

const components =[
    Headerlib,
    Bscroll,
]
const install =(Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}
export default install;