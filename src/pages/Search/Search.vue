<template>
  <div class="search">
    <!-- 半屏 -->
    <div class="show-gradient">
      <!-- 头部,若是当前屏幕位置大于当前初始屏幕的位置去除该HTML结构 -->
      <div v-if="scrollPosition < 700">
        <!-- logo部分 -->
        <div class="head">
          <p class="title">
            <span
              style="font-size: var(--normalHeight)"
              class="iconfont icon-xueshengchaoshixiaofei"
            ></span>
            食尚GO&nbsp;|&nbsp;全能超市
          </p>
          <p class="show-address hidden">
            <span style="font-weight: 900" class="iconfont icon-dingwei"></span>
            青羊区文家正街227号
          </p>
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <p><span class="iconfont icon-sousuo">&nbsp;&nbsp;</span>黑天鹅</p>
        </div>

        <ul>
          <li><span class="iconfont icon-qiche">&nbsp;</span>半日达</li>
          <li><span class="iconfont icon-gouwucheman">&nbsp;</span>一站齐</li>
          <li><span class="iconfont icon-shouhou">&nbsp;</span>售后无忧</li>
        </ul>
      </div>
      <!-- 搜索头部,当头部不显示就显示当前搜索框固定位置 -->
      <div
        v-else
        :class="scrollPosition > 700 ? 'search-div can' : 'search-div'"
      >
        <div style="height: 0.4rem"></div>
        <!-- 搜索框 -->
        <div class="search">
          <p><span class="iconfont icon-sousuo">&nbsp;&nbsp;</span>黑天鹅</p>
        </div>
      </div>
      <!-- iconfont -->
      <div class="iconList">
        <mintSwipeItem :resize="resize" />
      </div>
      <!-- 轮播图 -->
      <div class="exposal">
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in images" :key="image.id">
            <img :src="image.imgUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 今日必抢 -->
    <div class="grabToday" :data="12">
      <grabToday :ptable="ptable" />
    </div>
    <!-- 商品列表栏 -->
    <div class="cardTakes">
      <ul class="card-take-item-ul">
        <li
          @click="handlerClick(1)"
          :class="
            active == 1 ? 'card-take-item-title active' : 'card-take-title'
          "
        >
          好货精选
        </li>
        <li
          @click="handlerClick(2)"
          :class="
            active == 2 ? 'card-take-item-title active' : 'card-take-title'
          "
        >
          今日特惠
        </li>
        <li
          @click="handlerClick(3)"
          :class="
            active == 3 ? 'card-take-item-title active' : 'card-take-title'
          "
        >
          母婴爆款
        </li>
        <li
          @click="handlerClick(4)"
          :class="
            active == 4 ? 'card-take-item-title active' : 'card-take-title'
          "
        >
          本周热销
        </li>
        <li
          @click="handlerClick(5)"
          :class="
            active == 5 ? 'card-take-item-title active' : 'card-take-title'
          "
        >
          时令尝鲜
        </li>
      </ul>
      <div class="card-take-item-list">
        <cardTakeAway :recom="ptable" />
      </div>
    </div>
    <!-- 去结算模块 -->
    <div class="settlements" v-if="isScroll"><settlement /></div>
  </div>
</template>
<script>
import mintSwipeItem from "@/components/mintSwipeItems/mintSwipeItems.vue";
import grabToday from "@/components/grabToday/grabToday.vue";
import cardTakeAway from "@/components/cardTakeAway/cardTakeAway";
import settlement from "@/components/settlement/settlement";

export default {
  data() {
    return {
      resize: [],
      images: [],
      ptable: [],
      active: 1,
      scrollPosition: null,
      isScroll: true,
    };
  },
  methods: {
    handlerClick(id) {
      // 点击切换
      this.active = id;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY + window.innerHeight;
    },
  },
  watch: {
    scrollPosition(newValue) {
      //判断当前屏幕是否在移动,
      /**!SECTION
       * 监听屏幕当前值是否等于滚动后的值
       */
      setTimeout(() => {
        if (newValue == window.scrollY + window.innerHeight) {
          this.isScroll = true;
        } else {
          this.isScroll = false;
        }
      }, 20); //必须使用延时器，否则每次newValue和window.scrollY都相等，无法判断，20ms刚好大于watch的侦听周期，故延时20ms
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    //当组件卸载取消监听事件
    window.removeEventListener("scroll", this.handleScroll);
  },

  components: {
    mintSwipeItem,
    grabToday,
    cardTakeAway,
    settlement,
  },
  beforeMount() {
    this.$axios.get("/home/resize").then((res) => {
      this.resize = res.data;
    });
    this.$axios.get("/home/exposal").then((res) => {
      this.images = res.data;
      console.log(res.data);
    });
    this.$axios.get("/home/wrap").then((res) => {
      this.recom = res.data;
    });
    this.$axios.get("home/ptable").then((res) => {
      this.ptable = res.data;
    });
  },
};
</script>
<style scoped lang="less">
.search {
  width: 100%;
  background-color: var(--normalBgColor);
  .show-gradient {
    width: 100%;
    background: linear-gradient(180deg, orange 0%, #fdfdfb 100%);
    .head {
      width: 95%;
      display: flex;
      margin: var(--autoHeight) auto;
      .title {
        flex: 8;
      }
      .show-address {
        color: white;
        flex: 3;
        line-height: var(--normalHeight);
      }
    }
    .search {
      width: 95%;
      height: var(--normalHeight);
      background-color: var(--cardBgColor);
      border-radius: var(--normalHeight);
      margin: var(--normal) auto;
      p {
        line-height: var(--normalHeight);
        margin-left: var(--side);
        color: var(--cardFontColor);
        span {
          font-size: var(--bigSize);
        }
      }
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      color: var(--cardBgColor);
    }
    .iconList {
      width: 95%;
      margin: var(--normal) auto;
    }
    .exposal {
      width: 95%;
      margin: var(--normal) auto;
      img {
        width: 100%;
        height: var(--minImgHeight);
        border-radius: var(--normal);
      }
    }
  }
  .search-div {
    width: 100%;
    height: 3rem;
    background-color: var(--cardBgColor);
    padding-bottom: 1rem;
    z-index: 999;
    .search {
      // margin-top: 2rem;
      border: 1px solid orangered;
      width: 95%;
      height: var(--normalHeight);
      background-color: var(--cardBgColor);
      border-radius: var(--normalHeight);
      margin: var(--normal) auto;
      p {
        line-height: var(--normalHeight);
        margin-left: var(--side);
        color: var(--cardFontColor);
        span {
          font-size: var(--bigSize);
        }
      }
    }
  }
  .can {
    position: fixed;
    top: 0;
  }
  .grabToday {
    width: 95%;
    margin: var(--normal) auto;
  }
  .cardTakes {
    width: 100%;
    overflow: auto;
    .card-take-item-ul {
      width: 120%;
      margin: var(--normal) 0;
      display: flex;
      justify-content: space-around;
      .card-take-item-title {
        font-weight: 400;
        color: #393939;
      }
      .active {
        font-size: var(--bigSize);
        color: #000;
        font-weight: 700;
        position: relative;
      }
      .active::before {
        content: " ";
        display: block;
        position: absolute;
        bottom: -0.4rem;
        left: 1.2rem;
        border-radius: var(--normal);
        width: 1.4rem;
        height: 0.2rem;
        background-color: orangered;
      }
    }
  }
  .settlements {
    width: 95%;
    position: fixed;
    left: 0.5rem;
    bottom: var(--distanceHeight);
  }
}
</style>