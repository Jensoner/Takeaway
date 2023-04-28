<template>
  <div class="grabToday">
    <div class="grad-title">
      <h2>
        今日必抢&nbsp;&nbsp;
        <p>爆款清单</p>
      </h2>
      <p class="gradAll">查看全部<span>&nbsp;></span></p>
    </div>
    <div class="grab-list">
      <div class="grab-list-item" v-for="item in ptable" :key="item.id">
        <div class="grab-list-item-img">
          <img :src="item.imgUrl.banner" />
          <p>特价</p>
        </div>
        <div class="grab-list-item-name hidden">
          {{ item.title }}
        </div>
        <div class="grab-list-item-price">
          <div class="price">
            ￥
            <h2>{{ item.price }}</h2>
          </div>
          <div class="grab-list-item-icon">抢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ptable: {
      type: [],
      default: [],
    },
    data: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="less" scoped>
.grabToday {
  width: 100%;
  overflow: hidden;
  
  border-radius: var(--normal);
  background: linear-gradient(to bottom, var(--lightBgRed), var(--cardBgColor));
  .grad-title {
    width: 95%;
    margin: auto;

    display: flex;
    justify-content: space-between;
    h2 {
      font-size: var(--bigSize);
      font-weight: 700;
      color: var(--redSize);
      display: flex;
      line-height: var(--normalHeight);
      p {
        font-size: var(--normal);
        line-height: var(--normalHeight);
        padding: 0;
      }
    }
    .gradAll {
      height: 1.25rem;
      line-height: 1.25rem;
      background-color: var(--cardBgColor);
      font-size: var(--normal);
      padding: 0 var(--normal);
      color: var(--redSize);
      border-radius: var(--normal);
      margin-top: var(--normal);
    }
  }
  .grab-list {
    width: 100%;
    overflow: auto;
    display: flex;
    // padding-left: var(--normal);
    margin-bottom: var(--normal);
    .grab-list-item {
      width: 30%;
      border-radius: var(--normal);
      margin-left: var(--normal);
      background-color: var(--cardBgColor);
      
      .grab-list-item-img {
        position: relative;
        margin: 0 auto;
        padding: var(--normal);
        p {
          position: absolute;
          bottom: var(--normal);
          font-size: var(--normal);
          left: 0;
          padding: 0 var(--normal);
          background-color: var(--redSize);
          color: var(--cardBgColor);
          border-top-right-radius: var(--normal);
          border-bottom-left-radius: var(--normal);
        }
        img {
          width: 100%;
          border-radius: var(--normal);
        }
      }
      .grab-list-item-name {
        width: 95%;
        text-align: center;
        margin: auto;
      }
      .grab-list-item-price {
        display: flex;
        justify-content: space-between;
        .price {
          color: var(--redSize);
          display: flex;
          line-height: var(--normalHeight);
          text-align: center;
          h2 {
            font-size: var(--titleSize);
            font-weight: 700;
          }
        }
      }
      .grab-list-item-icon {
        background-color: var(--redSize);
        position: relative;
        padding-top: var(--normal);
        width: var(--titleSize);
        border-bottom-right-radius: var(--normal);
        border-top-left-radius: var(--normal);
        font-size: var(--bigSize);
        padding: 0 var(--normal);
        line-height: var(--normalHeight);
        text-align: center;
        color: rgb(255, 212, 132);
        font-weight: 700;
        span {
          color: orange;
          position: absolute;
          font-size: var(--bigSize);
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>