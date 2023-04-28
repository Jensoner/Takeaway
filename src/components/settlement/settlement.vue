<template>
  <div class="settlement">
    <div class="settl">
      <p>新人配送费<i>满39减6</i>全店红包<i>满69减10,满99减10</i></p>
    </div>
    <div class="ement">
      <div class="ment">
        <div class="can">
          <span
            :class="
              active
                ? 'iconfont icon-gouwucheman span'
                : 'iconfont icon-gouwucheman span active'
            "
          ></span>
          <p v-if="active">1</p>
        </div>

        <div class="price">
          <h1>
            ￥<i>0</i>
            <span v-if="active"
              ><span>&nbsp;预估卷后价&nbsp;</span><b>￥19</b></span
            >
          </h1>
          <p>预估配送费￥0</p>
        </div>
        <div class="btn">
          <h1 :class="active ? '' : 'active'">去结算</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  created() {
    this.watchDataList(this.dataList);
  },
  methods: {
    watchDataList(newValue) {
      console.log(newValue);
      if (newValue.lenght > 0) {
        this.active = false;
      }
      this.active = false;
    },
  },
  watch: {
    dataList: function (newValue) {
      this.watchDataList(newValue);
    },
  },
  props: {
    dataList: {
      type: [],
      default: [],
    },
  },
};
</script>
<style lang="less" scoped>
.settlement {
  border-radius: var(--normalHeight);
  position: relative;
  .settl {
    color: #000;
    font-size: var(--normal);
    height: 3rem;
    border-top-left-radius: var(--normal);
    border-top-right-radius: var(--normal);
    line-height: var(--normalHeight);
    text-align: center;
    background-color: rgb(248, 237, 217);
    i {
      color: orangered;
    }
    border-radius: var(--normal);
  }
  .ement {
    position: absolute;
    bottom: -1.4rem;
    width: 100%;
    background-color: var(--cardBgColor);
    border-radius: var(--normalHeight);

    .ment {
      padding: 0.2rem;
      border-radius: var(--normal);
      display: flex;

      .can {
        flex: 2;
        position: relative;
        margin-top: 0.4rem;
        p{
            position: absolute;
            top: -0.5rem;
            right: 0.8rem;
            background-color: var(--redSize);
            width: 1rem;
            height: 1rem;
            color: var(--cardBgColor);
            text-align: center;
            line-height: 1rem;
            font-size: var(--normal);
            border-radius: 50%;
        }
        .active {
          color: #858383 !important;
        }
        span {
          width: 100%;
          color: aqua;
          font-size: 2rem;
          margin-left: 1rem;
          text-align: center;
        }
      }
      .price {
        flex: 5;

        p {
          font-size: var(--normal);
          color: var(--cardFontColor);
        }
        h1 {
          // display: flex;
          i {
            font-weight: 700;
            font-size: var(--normalHeight);
          }
          span {
            color: var(--redSize);
          }
          b {
            font-weight: 400;
            font-size: var(--normal);
            color: var(--cardFontColor);
            text-decoration: line-through;
          }
        }
      }
      .btn {
        flex: 3;
        .active {
          background-color: #858383 !important;
        }
        h1 {
          width: 6rem;
          height: 2rem;
          text-align: center;
          line-height: 2rem;
          color: var(--cardBgColor);
          font-family: "微软雅黑";
          font-weight: 700;
          font-size: 1.2rem;
          border-radius: var(--normalHeight);
          background-color: aqua;
        }
      }
    }
  }
}
</style>