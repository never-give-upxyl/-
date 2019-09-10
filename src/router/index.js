import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
import Honecarouse from "./home/other/homecarouse"
import Brand from "./brand";
import Sort from "./sort";
import Shoppingbag from "./shoppingbag";
import Mine from "./mine";
import Search from "./search";

Vue.use(VueRouter);

const router =new VueRouter({
    mode:"hash",
    routes:[
        {path:'/',redirect:"/home"},
        Home,
        Honecarouse,
        Brand,
        Sort,
        Shoppingbag,
        Mine,
        Search,
    ]
})
export default router;