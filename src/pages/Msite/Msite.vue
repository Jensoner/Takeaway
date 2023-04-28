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
        <p class="regis">登录|注册</p>
      </div>
      <div class="search">
        <p><span class="iconfont icon-sousuo"></span>请输入商家或商品</p>
      </div>
    </nav>
    <!-- 列表分类 -->
    <mintSwipeItems :resize="resize" />
    
    <!-- banner图 -->
    <mintBanner />

    <!-- 附近商家 -->
    <shopList :recom="recom" />
  </section>
</template>
<script>
import mintBanner from "./mintBanner/mintBanner.vue";
import shopList from "@/components/shopList/shopList.vue";
import mintSwipeItems from "@/components/mintSwipeItems/mintSwipeItems.vue";
export default {
  data() {
    return {
      resize: [],
      recom: [],
    };
  },
  components: {
    mintBanner,
    shopList,
    mintSwipeItems,
  },
  beforeMount() {
    this.$axios.get("/home/resize").then((res) => {
      this.resize = res.data;
    });
    this.$axios.get("/home/wrap").then((res) => {
      this.recom = res.data;
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
}
</style>