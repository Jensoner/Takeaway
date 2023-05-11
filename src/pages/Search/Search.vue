<template>
  <div class="Search">
    <div style="height: var(--autoHeight)"></div>
    
    <nav>
      <div class="head">
        <div class="rollback">
          <span @click="$router.go(-1)" class="iconfont icon-xialajiantouxiao"></span>
        </div>
        <div class="Search-box">
          <input class="item-text" v-model="searchValue"></input>
          <p class="item-search" @click="goodsList">搜索</p>
        </div>
      </div>
      <div class="bread">
        <p>蜜雪冰城</p>
        <p>茶白道</p>
        <p>锅巴饭</p>
      </div>
    </nav>
    <div class="conten">
      <div class="history-search">
        <div class="heand">
          <p>历史搜索</p>
          <span class="iconfont icon-icon"></span>
        </div>
        <div class="search-list">
          <div class="item">茶白道</div>
          <div class="item">炸鸡</div>
        </div>
        <div class="heand">
          <p>搜索发现</p>
          <span class="iconfont icon-shuaxin"></span>
        </div>
        <div class="search-list">
          <div class="item">茶白道</div>
          <div class="item">炸鸡</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "蜜雪冰城",
    };
  },
  methods: {
    goodsList() {
      //父路由编程式传参(一般通过事件触发)
      this.$router.push({
        path: `/goodsList/${this.searchValue}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.Search {
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
    .bread {
      width: 80%;
      margin-left: 1.8rem;
      display: flex;
      p {
        margin: 0.5rem;
        font-size: var(--normal);
        background-color: var(--cardBgColor);
        padding: 0.2rem 0.3rem;
      }
    }
  }
  .conten {
    width: 95%;
    margin: auto;
    .history-search {
      background-color: var(--cardBgColor);
      .heand {
        width: 95%;
        margin: auto;
        display: flex;
        padding-top: 1rem;
        justify-content: space-between;
        p {
          font-weight: 900;
          font-size: var(--bigSize);
        }
        span {
          font-size: var(--bigSize);
        }
      }
      .search-list {
        margin-top: var(--bigSize);
        .item {
          font-size: var(--side);
          margin: 0.3rem 0.5rem;
          text-align: center;
          border-radius: var(--normal);
          padding: 0.2rem 1rem;
          background-color: var(--normalBgColor);
          float: left;
        }
      }
    }
  }
}
</style>