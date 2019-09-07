export default{
    name:"brand",
    path:"/brand",
    //按需加载引入路由
    component:()=>import("@pages/brand")

}