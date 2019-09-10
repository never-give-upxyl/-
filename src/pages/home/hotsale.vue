<template>
    <div class="hotsale">
        <h2>猜你喜欢</h2>
        <ul >
            <li v-for="(item ,index) in hotsale" :key="index" class="home-hotlist">
                <img :src="item.icon" alt="">
                <p>{{item.title}}</p>
                <p>{{item.text}}</p>
                <p>¥  {{item.price}}<span>{{item.newvip}}</span></p>
                <p>¥  {{item.oldprice}}<span>{{item.vip}}</span></p>
                <p>{{item.type}}</p>
            </li>
        </ul>
        <div class="hostsale-bottom"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hotsale:[
                {icon:"https://pic.secoo.com/product/374/374/2019/0704/e2ad8279fc22456fa33cb09d81382e63.jpg",title:"GUCCI",text:"GUCCI/古驰 女士黑色荔枝纹双G扣风琴链条单肩斜垮包  510314 CAO0G 1000",price:"3,999",oldprice:"6,999",type:"自营",newvip:"新客价"},
                {icon:"https://pic.secoo.com/product/374/374/2019/0704/e2ad8279fc22456fa33cb09d81382e63.jpg",title:"GUCCI",text:"GUCCI/古驰 女士黑色荔枝纹双G扣风琴链条单肩斜垮包  510314 CAO0G 1000",price:"3,999",oldprice:"6,999",type:"自营", vip:"会员价"},
                {icon:"https://pic.secoo.com/product/374/374/2019/0704/e2ad8279fc22456fa33cb09d81382e63.jpg",title:"GUCCI",text:"GUCCI/古驰 女士黑色荔枝纹双G扣风琴链条单肩斜垮包  510314 CAO0G 1000",price:"3,999",oldprice:"6,999",type:"自营",vip:"会员价"},
                {icon:"https://pic.secoo.com/product/374/374/2019/0704/e2ad8279fc22456fa33cb09d81382e63.jpg",title:"GUCCI",text:"GUCCI/古驰 女士黑色荔枝纹双G扣风琴链条单肩斜垮包  510314 CAO0G 1000",price:"3,999",oldprice:"6,999",type:"自营",vip:"会员价"},
            ]
        }
    }
}
</script>
<style >
    .hotsale{
        font-size:0.1583rem;
        color:#1A191e;
        /* background: #ccc; */
        margin-bottom:0.4042rem; 
       
    }
    .hotsale>h2{
        background: white;
        font-size: 0.1583rem;
        padding: 0.1667rem 0.125rem 0.1667rem;
    }
    .hotsale>ul{
        display: flex;
        flex-wrap: wrap;
         padding-bottom:0.5833rem; 
         background: white;
    }
    .home-hotlist{
        width: 50%;
        font-size: 0.1rem;
    }
    .home-hotlist p{
        padding:0 0.125rem;
    }
    .home-hotlist p:nth-of-type(1){
        font-weight: bolder;
    }
    .home-hotlist p:nth-of-type(2){
        height:0.2708rem;
        margin: 0.0333rem 0 0.0833rem 0;
        overflow: hidden;
    }
    .home-hotlist p:nth-of-type(3){
        font-size: 0.1417rem;
        color: #000b0b;
    }
    .home-hotlist p:nth-of-type(3) span{
        color: white;
        margin-left:0.0833rem; 
        background:#f8a120; 
         font-size: 0.1rem;
    }
    .home-hotlist p:nth-of-type(4){
        font-size: 0.1rem;
        color: #ccc;
        margin: 0.0417rem 0;
        text-decoration: line-through;
    }
    .home-hotlist p:nth-of-type(4) span{
        margin-left:0.0833rem; 
        color: white;
        background:#f8a120; 
    }
    .home-hotlist p:nth-of-type(5){
        color:#8b572a;
    }
    .home-hotlist img{
        width: 1.5583rem;
    }
    .hostsale-bottom{
        height: 0.0625rem;
        background: #f5f5f5;
    }
</style>