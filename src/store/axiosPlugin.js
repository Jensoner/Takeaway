// axiosPlugin.js
//解决vuex中无法使用this.$axios发送网络请求的问题

// axiosPlugin.js

import axios from 'axios';

const axiosPlugin = {
    install(Vue) {
        Vue.prototype.$axios = axios;
    },
};

export default axiosPlugin;
