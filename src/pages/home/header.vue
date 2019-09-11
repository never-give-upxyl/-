<template>
  <header>
    <!-- <router-link 
    to="/homesport"
    tag="div"
    class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" ><img  alt=""></div>
        <div class="swiper-slide" ><img  alt=""></div>
        <div class="swiper-slide" ><img src="" alt=""></div>
        <div class="swiper-slide" ><img src="" alt=""></div>
        <div class="swiper-slide" ><img src="" alt=""></div>
      </div>
     
      <div class="swiper-pagination"></div>
    </router-link>-->
    <router-link to="/homesport" tag="div" class="swiper-container">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="carouseimg" v-lazy="image.img" />
        </van-swipe-item>
      </van-swipe>
    </router-link>
  </header>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "Header",
  data() {
    return {
      // images:[],
      carouselist: []
    };
  },
  computed:{
    ...mapState({
      images:state=>state.home.homecarouseimg,
    })
  },
  //
  mounted() {
    // var mySwiper = new Swiper(".swiper-container", {
    //   loop: true, // 循环模式选项
    //   autoplay: true,
    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
  }
};
</script>

<style >
.swiper-container {
  width: 100%;
  background: #ccc;
  height: 2.7083rem;
}
.swiper-container .van-swipe{
  width: 100%; 
   height: 100%;
}
.swiper-container .van-swipe .van-swipe__track {
  width: 100%;
  height: 100%;
  display: flex;
}
.carouseimg{
  width: 100%;
}
/* .van-swipe__indicator{
  width: 10px;
  height: 10px;
} */

</style>