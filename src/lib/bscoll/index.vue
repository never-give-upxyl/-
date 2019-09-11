<template>
    <div class="bscroll" ref="bscroll">
        <slot></slot>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
    name:"Xiao-Bscroll",
    mounted(){
        this.scroll =new Bscroll(this.$refs.bscroll,{
            // pullDownRefresh:true,
            tap:true,
        })
    },
    methods:{
        handlepillingDown(cb){
            this.scroll.on("pullingDown",()=>{
                cb()
            })
        },
        handlefinishPullDown(){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        handlepullingup(cb){
            this.scroll.on("pillingUp",()=>{
                cb();
            })
        },
        handlefinishPullup(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        },
        handleScrolltop(t){
            this.scroll.scrollTo(0,-t,300)
        }
    }
}
</script>
<style>
    .bscroll{
        height: 100%;
    }
</style>