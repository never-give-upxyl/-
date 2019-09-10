import Headerlib from "./header/index.vue";

const components =[
    Headerlib,
]
const install =(Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}
export default install;