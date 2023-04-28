//1.导入vue 和 vuerouter 的包
import Vue from 'vue';
import VueRouter from 'vue-router';
// 导入路由
import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Profile from '../pages/Profile/Profile.vue';
import Order from '../pages/Order/Order.vue';

//2.调用vue.use() 函数，把 VueRouter 安装为 Vue 的插件
//vue.use()函数的作用，就是来安装插件的
Vue.use(VueRouter)

//3.创建路由的实例对象
const router = new VueRouter({
    routes: [ {
        path: '/Msite',
        name: 'Msite',
        component: Msite,
    }, {
        path: '/Order',
        name: 'Order',
        component: Order
    }, {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    }, {
        path: '/Search',
        name: 'Search',
        component: Search
    },{
        path: '*',
        redirect: '/Msite'
    },]
})

//4.向外共享路由的实例对象
export default router