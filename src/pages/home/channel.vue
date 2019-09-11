<template>
    <div class="channel">
<<<<<<< HEAD
        <ul v-for="(item,index) in chananlist" :key="index">
            <li>{{item.title}}</li>
            <li>{{item.subTitle}}</li> 
=======
        <ul v-for="(item,index) in channel" :key="index">
            <li>{{item.text}}</li>
            <li>{{item.title}}</li> 
>>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
        </ul>

    </div>
</template>
<script>
<<<<<<< HEAD
import { mapState ,mapActions } from "vuex";
export default {
    data(){
        return{
            // channel:[
            //     {text:"热门打牌",title:"New Arrival" },
            //     {text:"热门打牌",title:"New Arrival"},
            //     {text:"热门打牌",title:"New Arrival"},
            //     {text:"热门打牌",title:"New Arrival"},
            //     {text:"热门打牌",title:"New Arrival"},
            //     {text:"热门打牌",title:"New Arrival"},
            // ]
        }       
    },
    computed:{
        ...mapState({
            chananlist:state=>state.home.homechannerinfo,
        })
    },
    methods:{
        ...mapActions({
            homegodslist:"home/homegodslist"
        }),
       
    },
    created(){
        this.homegodslist();
       
=======
export default {
    data(){
        return{
            channel:[
                {text:"热门打牌",title:"New Arrival"},
                {text:"热门打牌",title:"New Arrival"},
                {text:"热门打牌",title:"New Arrival"},
                {text:"热门打牌",title:"New Arrival"},
                {text:"热门打牌",title:"New Arrival"},
                {text:"热门打牌",title:"New Arrival"},
            ]
        }       
>>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
    }
}
</script>
<style>
    .channel{
        padding: 0.2083rem 0.125rem;
        display: flex;
        flex-wrap: wrap;
        /* margin-bottom:0.0833rem;  */
    }
    .channel ul{
        width:33%;
        text-align: center;
    }
    .channel ul:nth-of-type(n+4){
        margin-top:0.225rem; 
    }
    .channel ul li:nth-of-type(1){
        height: 0.1667rem;
        font-size: 0.1167rem;
    }
    .channel ul li:nth-of-type(2){
        margin-top: 0.0208rem;
        font-size: 0.0833rem;
    }
</style>