export default{
    name:"mine",
    path:"/mine",
    //按需加载引入路由
    meta:{
        flag:true,
    },
    component:()=>import("@pages/mine")

}