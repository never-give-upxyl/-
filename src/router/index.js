import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
import Brand from "./brand";
import Sort from "./sort";
import Shoppingbag from "./shoppingbag";
import Mine from "./mine";
import More from "./more";
import Details from "./details"
import Shopcar from "./shopcar"

Vue.use(VueRouter);

const router =new VueRouter({
    mode:"hash",
    routes:[
        {path:'/',redirect:"/home"},
        Home,
        Brand,
        Sort,
        Shoppingbag,
        Mine,
        More,
        Details,
        Shopcar
    ]
})
export default router;