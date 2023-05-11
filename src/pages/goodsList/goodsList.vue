<template>
  <div class="goodsList">
    <div style="height: var(--autoHeight)"></div>
    <nav>
      <div class="head">
        <div class="rollback">
          <span
            @click="$router.go(-1)"
            class="iconfont icon-xialajiantouxiao"
          ></span>
        </div>
        <div class="Search-box">
          <input class="item-text" v-model="searchValue" />
          <p class="item-search" @click="goodsList">搜索</p>
        </div>
      </div>
      <div class="sort">
        <p @click="handerClick">
          综合排序<span
            :class="
              isShow.synthesis
                ? 'iconfont icon-iconfontarrowdown iconActive'
                : 'iconfont icon-iconfontarrowdown'
            "
          ></span>
        </p>
        <p>销量优先</p>
        <p>速度优先</p>
        <p @click="handerClick" id="sift">
          全部筛选<span
            :class="
              isShow.sift
                ? 'iconfont icon-iconfontarrowdown iconActive'
                : 'iconfont icon-iconfontarrowdown'
            "
          ></span>
        </p>
      </div>
    </nav>
    <div style="height: var(--normal)"></div>
    <div class="lists">
      <goods></goods>
    </div>
  </div>
  <!-- <van-skeleton title avatar :row="3" :loading="loading"> </van-skeleton> -->
</template>
<script>
import goods from "@/components/goods/gods.vue";
export default {
  data() {
    return {
      searchValue: "",
      isShow: {
        synthesis: false,
        sift: false,
      },
    };
  },
  methods: {
    handerClick() {
      this.isShow.synthesis = !this.isShow.synthesis;
      /* if(event.target.id == 'synthesis'){
            this.isShow.synthesis = !this.isShow.synthesis;
            // console.log(!this.isShow.synthesis);
        }else{
            this.isShow.sift = !this.isShow.sift;
        } */
    },
  },
  beforeMount() {
    this.searchValue = this.$route.params.searchValue;
    this.$axios.get("home/wrap").then((res) => {
      this.ptable = res.data;
      console.log(res.data);
    });
  },
  components: {
    goods,
  },
};
</script>
<style scoped lang="less">
.goodsList {
  width: 100%;
  background-color: var(--normalBgColor);
  nav {
    width: 95%;
    margin: auto;
    .head {
      display: flex;
      .rollback {
        flex: 1;
        span {
          display: inline-block;
          transform: rotate(90deg);
          font-size: var(--titleSize);
        }
      }
      .Search-box {
        flex: 9;
        display: flex;
        border-radius: var(--bigSize);
        background-color: var(--cardBgColor);
        line-height: var(--normalHeight);
        .item-text {
          flex: 8;
          margin-left: var(--normal);
          color: var(--cardFontColor);
          text-align: left;
          border: none;
        }
        .item-search {
          flex: 2;
          position: relative;
          color: var(--aquaBgColor);
          text-align: center;
        }
        .item-search::after {
          position: absolute;
          content: " ";
          width: 0.2rem;
          height: 1rem;
          left: 0.3rem;
          top: 0.5rem;
          background-color: var(--normalBgColor);
        }
      }
    }
    .sort {
      width: 100%;
      margin-top: var(--bigSize);
      display: flex;
      justify-content: space-around;
      p {
        color: var(--cardFontColor);
        font-size: var(--side);
        span {
          transform: rotate();
          display: inline-block;
          margin-left: 0.2rem;
          font-size: var(--normal);
        }
        .iconActive {
          transform: rotate(180deg);
        }
      }
    }
  }
  .lists {
    width: 95%;
    margin: auto;
  }
}
</style>