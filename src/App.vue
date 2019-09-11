<template>
  <div id="app">
   <router-view></router-view>
   <Tarbar/>  
  </div>
</template>
<script>
import Tarbar from "@common/tarbar"
export default {
    name:"App",
    components:{
      Tarbar,
    }
}
</script>
<style>
#app{
  height: 100%;
}
</style>
