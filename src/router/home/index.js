export default{
    name:"home",
    path:"/home",
    //按需加载引入路由
    component:()=>import("@pages/home")

}