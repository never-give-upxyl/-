import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Xiao from "@lib/index.js"

Vue.config.productionTip = false;
Vue.use(Xiao);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
