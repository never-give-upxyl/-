<template>
    <div class="search">
        <div class="searchinput">
            <input type="text" placeholder="美满" >
            <span>取消</span>
        </div>
      
        <div class="hotsale">
            <h2 class="searchtitle"> 热销推荐</h2>
            <ul class="title">
                <li>优酷联名卡</li>
                <li>美酒节</li>
                
            </ul>
            <ul class="searchrecode">
                <li>Gucci女包</li>
                <li>Gucci女包</li>
                <li>Gucci女包</li>
                <li>Gucci女包</li>
                <li>Gucci女包</li>
                <li>Gucci女包</li>
            </ul>
        </div>
        <div class="searchinfo">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.searchinput{
    padding: 0.1rem 0 0.1rem 0.125rem  
}
.searchinput input 
{   
    background: #f5f5f5;
    border: 0px solid #ccc;
    width:2.4583rem;
    height: 0.2667rem;
    padding:0 0.4333rem 0 0.2667rem
}
.searchinput span{
    font-size: 0.125rem;
    padding: 0.133rem;
}
.hotsale{
    font-size: 0.1083rem;
    padding: 0 0rem 0.0833rem;;
    background: #f5f5f5;
}
.searchtitle{
    background: white;
   padding: 0.0833rem  0.125rem  0.125rem;
   font-size:0.125rem;
   font-weight: normal;
   color: #1c1717; 
}
.title{
    background: white;
    display: flex;
    justify-content: space-around;
}
.title li{
    width: 1.4rem;
    height: 0.2917rem;
   text-align: center;
    line-height: 0.2917rem;
    border: 1px solid red;
}
.searchrecode{
    /* height:0.775rem; */
    padding:0 0.125rem;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 0.1417rem;
}  
.searchrecode li{
    text-align: center;
    line-height: 0.25rem;
    width: 0.9rem;
    height: 0.25rem;
    margin-top: 0.0633rem;
    background: #f8f8f8;
}
</style>

