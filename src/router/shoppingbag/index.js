export default{
    name:"shoppingbag",
    path:"/shoppingbag",
    //按需加载引入路由
    meta:{
        flag:true,
    },
    component:()=>import("@pages/shoppingbag")

}