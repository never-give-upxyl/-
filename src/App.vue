<template>
  <div id="app">
   <router-view></router-view>
<<<<<<< HEAD
   <Tarbar/>  
=======
   <Tarbar v-if="$route.meta.flag"/>  
>>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
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
<<<<<<< HEAD
#app{
  height: 100%;
}
=======

>>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
</style>
