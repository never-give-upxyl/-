import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Xiao from "@lib/index.js"
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.config.productionTip = false;
Vue.use(Xiao);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
