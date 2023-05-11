//1.导入vue 和 vuerouter 的包
import Vue from 'vue';
import VueRouter from 'vue-router';
// 导入路由
import Msite from '../pages/Msite/Msite.vue';
import Supermarket from '../pages//Supermarket/Supermarket.vue';
import Profile from '../pages/Profile/Profile.vue';
import Order from '../pages/Order/Order.vue';
import ye from '@/pages/ye/ye.vue'
const Search = () => import('@/pages/Search/Search.vue');
const goodsList = () => import('@/pages/goodsList/goodsList.vue');
const Mark = () => import('@/pages/Mark/Mark.vue');
const login = () => import("@/pages/login/login.vue");
const Food = () => import('@/pages/Food/Food.vue');
const comments = () => import('@/common/comments/comments.vue');
const MenuItem = () => import('@/common/MenuItem/MenuItem.vue');
const business = () => import('@/common/business/business.vue');
const Play = () => import('@/pages/Play/Play.vue');
const Address = () => import('@/pages/Address/Address.vue');
const AddressEdit = () => import('@/pages/AddressEdit/AddressEdit.vue');
//2.调用vue.use() 函数，把 VueRouter 安装为 Vue 的插件
//vue.use()函数的作用，就是来安装插件的
Vue.use(VueRouter)

//3.创建路由的实例对象
const router = new VueRouter({
    routes: [{
        path: '*',
        redirect: '/msite'//重定向
    }, {
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
        path: '/Supermarket',
        name: 'Supermarket',
        component: Supermarket
    }, {
        path: '/Search',
        name: 'Search',
        component: Search
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/goodsList/:searchValue',
        name: 'goodsList',
        component: goodsList
    }, {
        path: '/Mark/:title',
        name: 'Mark',
        component: Mark
    }, {
        path: '/food',
        name: 'food',
        component: Food,
        children: [{
            path: 'business',
            name: 'business',
            component: business
        }, {
            path: 'comments',
            name: 'comments',
            component: comments
        }, {
            path: 'MenuItem',
            name: 'MenuItem',
            component: MenuItem,
        }]
    }, {
        path: '/Play/:data',
        name: 'Play',
        component: Play
    }, {
        path: '/address',
        name: 'address',
        component: Address
    }, {
        path: '/AddressEdit/:list',
        name: 'AddressEdit',
        component: AddressEdit
    }]
})
router.beforeEach((to, from, next) => {
    // console.log(to.name=='Order',from);

    /* if (to.name == 'Order') {
        next()
    } */
    if (to.name == 'Profile') {
        // localStorage.getItem('iphone')
        if (localStorage.getItem('iphone') != null) {
            next()
        } else {
            next({ name: 'login' })
        }
    }
    next()
})
//4.向外共享路由的实例对象
export default router