import Bottom from "./bottom/index.vue"
import Bscroll from "./better-scroll/index.vue"
const components = [
    Bottom,
    Bscroll
]


const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}

export default install;