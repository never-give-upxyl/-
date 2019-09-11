export default{
    name:"home",
    path:"/home",
    //按需加载引入路由
<<<<<<< HEAD
    component:()=>import("@pages/home"),
    children:[
        {name:"carouse",path:"carouse",component:()=>import("@components/homesport")},
    ]

    
=======
    meta:{
        flag:true,
    },
    component:()=>import("@pages/home")
>>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2

}