export default{
    name:"brand",
    path:"/brand",
    //按需加载引入路由
    meta:{
        flag:true,
    },
    component:()=>import("@pages/brand")

}