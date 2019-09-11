<template>
    <div>
<<<<<<< HEAD
       <Login v-if="flag" />
       <Register v-if="!flag" />
    </div>
</template>
<script>
import Login from "@common/login"
import Register from "@common/register"
import {mapState} from "vuex"
export default {
    name:"Mine",
   
   computed:{
       ...mapState({
           flag:state=>state.flag,
       })
   },  
    components:{
        Login,
        Register

    }
}
</script>
=======
        我的
    </div>
</template>
>>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
