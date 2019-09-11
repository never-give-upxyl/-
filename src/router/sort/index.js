export default{
    name:"sort",
    path:"/sort",
    //按需加载引入路由
    meta:{
        flag:true,
    },
    component:()=>import("@pages/sort")

}