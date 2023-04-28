import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "@/axios/index";
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
// 挂载一个自定义属性$http
Vue.prototype.$axios = axios
Vue.use(Vant)
new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
