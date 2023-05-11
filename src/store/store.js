import Vue from 'vue';
import Vuex from 'vuex';
import imgUrl from "@/utils/imgUrl";
//vuex-persistedstate做数据保持化,当网页刷新,当前状态会回到初始,利用模块就会保持状态
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        checkData: [],
        // 在这里定义你的状态
        SpecificGoods: [{ foods: [] }],
        // 外卖评价
        comments: [
            { id: 1, name: '小飞侠', image_path: `${imgUrl.comments}th.jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-15.jpg`, `${imgUrl.shopImg}Snipaste_2023-04-27_16-14-48.jpg`, `${imgUrl.shopImg}Snipaste_2023-04-27_16-14-56.jpg`], comment: '这家外卖真的好吃啊，下次还会再来', time: '2023-07-19', timeItem: '18:25' },
            { id: 2, name: '热气球', image_path: `${imgUrl.comments}OIP (1).jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-56.jpg`], comment: '味道很美味，超级喜欢', time: '2023-07-19', timeItem: '18:30' },
            { id: 3, name: '雨后彩虹', image_path: `${imgUrl.comments}OIP (2).jpg`, img: [], comment: '服务态度真的很好，给个大赞', time: '2023-07-19', timeItem: '18:35' },
            { id: 4, name: '追梦人', image_path: `${imgUrl.comments}OIP (3).jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-15.jpg`], comment: '这个外卖真的超级推荐给大家', time: '2023-07-19', timeItem: '18:40' },
            { id: 5, name: '闪电侠', image_path: `${imgUrl.comments}OIP.jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-48.jpg`, `${imgUrl.shopImg}Snipaste_2023-04-27_16-14-15.jpg`], comment: '外卖速度超快，完全超出我的预期', time: '2023-07-19', timeItem: '18:45' },
            { id: 6, name: '吃货大王', image_path: `${imgUrl.comments}th.jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-48.jpg`, `${imgUrl.shopImg}Snipaste_2023-04-27_16-14-15.jpg`], comment: '份量非常足，吃得好饱好满足', time: '2023-07-19', timeItem: '18:50' },
            { id: 7, name: '美食家', image_path: `${imgUrl.comments}OIP (2).jpg`, img: [``], comment: '我真的超级喜欢这家外卖店，真的很赞', time: '2023-07-19', timeItem: '18:55' },
            { id: 8, name: '味蕾探险家', image_path: `${imgUrl.comments}OIP (1).jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-15.jpg`], comment: '味道真的很不错，口感很好', time: '2023-07-19', timeItem: '19:00' },
            { id: 9, name: '小吃货', image_path: `${imgUrl.comments}OIP (3).jpg`, img: [``], comment: '这个外卖物超所值，性价比很高', time: '2023-07-19', timeItem: '19:05' },
            { id: 10, name: '吃货小哥', image_path: `${imgUrl.comments}th.jpg`, img: [`${imgUrl.shopImg}Snipaste_2023-04-27_16-14-15.jpg`], comment: '给这家外卖店一个大大的好评', time: '2023-07-19', timeItem: '19:10' }
        ],
        addressList: [
            {
                id: 1,
                name: "张三",
                tel: "18888888888",
                province: "广东省",
                city: "深圳市",
                county: "南山区",
                addressDetail: "科技园路xxx号",
                areaCode: "440305",
                isDefault: true,
                isCheck: true,
            },
            {
                id: 2,
                name: "李四",
                tel: "17725468207",
                province: '浙江省',
                city: '杭州市',
                country: '拱墅区',
                addressDetail: "莫干山路 50 号",
                isCheck: false,
                isDefault:false
            },
        ],
    },
    mutations: {
        // mutations用于修改状态数据仅仅支持mutations修改state状态
        setSpecificGoods(state, data) {
            state.SpecificGoods = data;
        },
        setCheckData(state, data) {
            //对checkData状态进行修改
            state.checkData = data;
        },
        setAddressList(state, data) {
            let arr = state.addressList;
            const index = arr.findIndex(item => item.id === data.id);
            if (index !== -1) {
                arr[index] = data;
            }else{
                arr.push(data)
            }
            state.addressList = arr;
        }
    },
    actions: {
        //actions用于获取异步数据即网络请求等异步函数
        async requestGoods({ commit }, id) {
            // console.log(124314);
            //commit调用此可以调用mutations中的函数从而修改state
            await this._vm.$axios.get(`shopping/v2/menu?restaurant_id=${id}`).then((result) => {
                if (result.data.length > 20) {
                    result.data = result.data.slice(1, Math.floor(Math.random() * 10) + 1)
                }
                result.data.forEach((item) => {
                    if (item.foods.length > 10) {
                        //生成1-10随机数
                        let num = Math.floor(Math.random() * 10) + 1;
                        item.foods = item.foods.slice(1, num);
                        item.foods.forEach(item => {
                            let img = imgUrl.img;
                            item.isShow = false;
                            item.image_path = img + item.image_path;
                            item.shopNum = 0;
                        })
                    }
                })
                commit('setSpecificGoods', result.data)
                // console.log(result.data);
            });
        }
    },
    getters: {
        // getters类似computed计算属性,计算state状态
    },
      plugins: [
          createPersistedState({
              storage: sessionStorage,
              key: "token",
          })]//会自动保存创建的状态。刷新还在
});


export default store;
