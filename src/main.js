import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Uk from "@lib"
import VueTouch from "vue-touch"
import "@common/style/index.css";
import { Card } from 'vant';

Vue.config.productionTip = false
Vue.use(Uk);
Vue.use(Card);
Vue.use(VueTouch,{name:'v-touch'});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
