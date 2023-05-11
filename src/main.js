import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "@/axios/index";
// 使用插件将 $axios 注入到 Vuex Store
import axiosPlugin from '@/store/axiosPlugin';
//图片预览插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)


Vue.use(axiosPlugin, axios);
import Vant from 'vant';
import 'vant/lib/index.css';
import store from '@/store/store';
//关闭代码提示
Vue.config.productionTip = false
// 挂载一个自定义属性$http
Vue.prototype.$axios = axios
Vue.use(Vant)
new Vue({
  store,
  render: h => h(App),
  router,

}).$mount('#app')
