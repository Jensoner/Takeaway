<template>
  <div class="shoplist-title">
    <div class="shop-title">
      <p>附近商家</p>
      <span class="iconfont icon-xuanxiang"></span>
    </div>
    <div class="wrap-list">
      <div class="recommond-card" v-for="item in recom" :key="item.id">
        <div class="card-img-wrap">
          <img :src="item.imgUrl" />
        </div>
        <div class="card-info-wrap">
          <div class="card-info-title">
            <h2>{{ item.name }}</h2>
            <p class="score">
              <span style="font-weight: 700; color: orangered"
                >&nbsp;{{ item.score }}分</span
              >人均￥{{ item.price }}
            </p>
            <p class="score">
              起送￥{{ item.price }} &nbsp;配送￥{{ item.price - 10 }}
            </p>
            <p class="text">{{ item.text }}</p>
            <div class="preferential">
              <!-- 优惠活动模块 -->
            </div>
          </div>
          <div class="card-info-address">
            <span class="iconfont icon-shanchu2"></span>
            <p class="score">
              {{ item.distance * 20 }}分钟&nbsp;{{ item.distance }}km
            </p>
            <span
              style="padding-top: 1.2rem"
              class="iconfont icon-xialajiantouxiao"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recom: {
      type: [],
      default: [],
    },
  },
};
</script>
<style lang="less">
// 附近商家
.shoplist-title {
  width: 100%;
  padding-top: 0.2rem;
  margin-top: 0.2rem;
  // background-color: var(--cardBgColor);

  .shop-title {
    width: 95%;
    margin: var(--normal) auto;
    display: flex;
    justify-content: space-between;
  }
  .wrap-list {
    width: 95%;
    margin: auto;

    .recommond-card {
      display: flex;
      justify-content: space-between;
      height: var(--minImgHeight);
      padding: var(--side);
      margin-top: var(--normal);
      border-radius: var(--normal);
      background-color: var(--cardBgColor);
      .card-img-wrap {
        flex: 2;

        img {
          width: 100%;
          height: 100%;
          border-radius: var(--normal);
        }
      }
      .score {
        font-size: var(--normal);
        color: var(--cardFontColor);
        padding: 0.2rem 0;
      }
      .card-info-wrap {
        flex: 7;
        display: flex;
        justify-content: space-between;
        .card-info-title {
          margin-left: 0.5rem;
          h2 {
            font-weight: 900;
            font-family: "篆体";
            padding: 0.2rem 0;
          }

          .text {
            width: 10rem;
            font-size: 0.2rem;
            padding: 0.3rem;
            border-radius: var(--normal);
            color: orange;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .card-info-address {
          span {
            font-size: var(--normal);
            text-align: right;
            display: block;
          }
          .score {
            padding-top: var(--bigSize);
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>