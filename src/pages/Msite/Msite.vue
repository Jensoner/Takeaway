<template>
  <!--首页 -->
  <section>
    <!-- 占位防止头部nav设置了position把主页面覆盖 -->
    <div style="height: 5rem"></div>
    <!-- 头部导航 -->
    <nav>
      <div class="nav">
        <!-- <span class="iconfont icon-sousuo"></span> -->
        <div class="address">
          <p>
            <sapn class="iconfont icon-dingwei">&nbsp;</sapn>青羊区文家街道227号
          </p>
          <i class="iconfont icon-iconfontarrowdown"></i>
        </div>
        <div style="width: 4rem"></div>
        
        <p class="regis" v-if="!active">登录|注册</p>
        <span v-else class="iconfont icon-geren"></span>
      </div>
      <div class="search" @click="$router.push('/Search')">
        <p><span class="iconfont icon-sousuo"></span>请输入商家或商品</p>
      </div>
    </nav>
    <!-- 列表分类 -->
    <mintSwipeItems :resize="resize" />

    <!-- banner图 -->
    <mintBanner />
    <div class="shopList">
      <div class="shop-title">
        <p><span class="iconfont icon-shangjia">&nbsp;</span>附近商家</p>
        <!-- <span @click="handerClick"  :class="active ? 'iconfont icon-xuanxiang' : 'iconfont icon-liebiao'"></span> -->
      </div>
      <!-- 附近商家 -->
      <shopList
        v-for="item in recom"
        @my-event="handerClick"
        :key="item.id"
        :recom="[item]"
      />
    </div>

    <FooterGuide />
  </section>
</template>
<script>
import imgUrl from "@/utils/imgUrl";
import { v4 as uuidv4 } from "uuid";
import mintBanner from "./mintBanner/mintBanner.vue";
import shopList from "@/components/shopList/shopList.vue";
import mintSwipeItems from "@/components/mintSwipeItems/mintSwipeItems.vue";
import FooterGuide from "@/components/FooterGuide/FooterGuide/FooterGuide.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "msite",
  data() {
    return {
      resize: [
        {
          id: uuidv4(),
          title: "美食",
          iconUrl: "./container/a867c870b22bc74c87c348b75528d.jpg",
        },
        {
          id: uuidv4(),
          title: "商超便利",
          iconUrl: "./container/76a23eb90dada42528bc41499d6f8.jpg",
        },
        {
          id: uuidv4(),
          title: "水果",
          iconUrl: "./container/dd7c960f08cdc756b1d3ad54978fd.jpg",
        },
        {
          id: uuidv4(),
          title: "送药上门",
          iconUrl: "./container/af108e256ebc9f02db599592ae655.jpg",
        },
        {
          id: uuidv4(),
          title: "买菜",
          iconUrl: "./container/e42997b86b232161a5a16ab813ae8.jpg",
        },
        {
          id: uuidv4(),
          title: "汉堡披萨",
          iconUrl: "./container/432619fb21a40b05cd25d11eca02d.jpg",
        },
        {
          id: uuidv4(),
          title: "麻辣烫",
          iconUrl: "./container/b7ba9547aa700bd20d0420e1794a8.jpg",
        },
        {
          id: uuidv4(),
          title: "地方小吃",
          iconUrl: "./container/6f2631288a44ec177204e05cbcb93.jpg",
        },
        {
          id: uuidv4(),
          title: "鲜花绿植",
          iconUrl: "./container/c888acb2c8ba9e0c813f36ec9e90a.jpg",
        },
        {
          id: uuidv4(),
          title: "地方美食",
          iconUrl: "./container/ec21096d528b7cfd23cdd894f01c6.jpg",
        },
      ],
      recom: [],
      active:false
    };
  },
  methods: {
    handerClick(id) {
      this.recom.forEach((item) => {
        if (item.id == id) {
          item.isShow = !item.isShow;
        }
      });
    },
  },
  beforeMount(){
    if(localStorage.getItem('iphone')!==null){
      this.active = true
    }
  },
  components: {
    mintBanner,
    shopList,
    mintSwipeItems,
    FooterGuide,
  },
  computed: {
    computedCount() {
      return this.recom;
    },
  },
  mounted() {
    this.$axios
      .get(
        "/shopping/restaurants?latitude=30.75168&longitude=103.781967&offset=0&limit=20"
      )
      .then((res) => {
        this.recom = res.data;
        this.recom.forEach(function (item) {
          let img = imgUrl.img;
          item.isShow = false;
          item.image_path = img + item.image_path;
        });
      });
  },
};
</script>
<style scoped lang="less">
section {
  width: 100%;
  height: 100%;
  background-color: var(--normalBgColor);
  //头部
  nav {
    background-color: var(--homeBgColor);
    padding-bottom: var(--normal);
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    .nav {
      width: 100%;
      display: flex;

      color: #eee;
      text-align: center;
      line-height: 2.5rem;

      span {
        font-size: 1.725rem;
        flex: 1;
        text-align: left;
        padding-left: 0.5rem;
      }

      .address {
        flex: 4;
        display: flex;
        p {
          width: 75%;
          margin-left: 0.5rem;
          font-size: 1.1rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        i {
          display: block;
        }
      }
      span{
        font-size: 1.5rem;
        margin-right:1rem;
        text-align: right;
        color: var(--cardBgColor);
      }
      .regis {
        flex: 1;
        font-size: var(--side);
        padding-right: 0.5rem;
      }
    }
    .search {
      width: 95%;
      height: var(--normalHeight);
      line-height: var(--normalHeight);
      margin: 0.1rem auto;
      background-color: #ffffff;
      border-radius: 0.2rem;
      p {
        width: 100%;
        text-align: center;
        color: rgb(172, 170, 170);
        letter-spacing: 0.2rem;
        span {
          font-size: var(--bigSize);
        }
      }
    }
  }
  .shopList {
    width: 100%;
    .shop-title {
      width: 95%;
      margin: var(--normal) auto;
      display: flex;
      justify-content: space-between;
      p {
        font-size: var(--normal);
        color: var(--cardFontColor);
      }
    }
  }
}
</style>