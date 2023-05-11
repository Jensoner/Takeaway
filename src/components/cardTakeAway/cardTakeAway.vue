<template>
  <div class="cardTakeAway">
    <div class="card-take-lists">
      <div class="card-take-items">
        <div class="card-take-item" v-for="item in recom" :key="item.id">
          <div class="card-take-item-img">
            <div>特价限6份</div>
            <img :src="item.image_path" />
          </div>
          <div class="card-take-item-title">
            <div class="card-title hidden">{{item.name}}</div>
            <div class="bottom">
              <div class="price">￥<span>{{item.float_minimum_order_amount}}</span></div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.recom);
  },
  props: {
    recom: Array,
    default: [],
  },
};
</script>
<style lang="less">
.cardTakeAway {
  width: 100%;
  overflow: hidden;
  .card-take-lists {
    width: 95%;
    margin: auto;
    border-radius: var(--normal);
    .card-take-item {
      width: 47%;
      border-radius: var(--normal);
      float: left;
      margin: 0.7rem 0 0 0;
      .card-take-item-img {
        width: 100%;
        margin: 0.2rem auto;
        position: relative;
        div {
          width: 4rem;
          height: 1.2rem;
          line-height: 1.2rem;
          position: absolute;
          bottom: var(--normal);
          left: var(--normal);
          border-radius: var(--normal);
          font-size: var(--normal);
          text-align: center;
          color: var(--cardBgColor);
          background-color: var(--redSize);
        }
        img {
          width: 100%;
          border-radius: var(--normal);
          margin-bottom: var(--normal);
        }
      }
      .card-take-item-title {
        padding-bottom: 0.5rem;
        font-size: var(--bigSize);
        background-color: var(--cardBgColor);
        border-bottom-right-radius: var(--normal);
        border-bottom-left-radius: var(--normal);
        padding-left: var(--normal);

        .bottom {
          width: 100%;
          margin-top: var(--normal);
          display: flex;
          justify-content: space-between;
          .price {
            color: var(--redSize);
            font-size: var(--normal);
            span {
              font-size: var(--bigSize);
            }
          }
          .add {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 0.4rem;
            font-size: 1.5rem;
            color: var(--cardBgColor);
            line-height: 1.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: var(--redSize);
          }
        }
      }
    }
    .card-take-item:nth-child(2n){
      margin-left: 1rem;
    }
  }
}
</style>