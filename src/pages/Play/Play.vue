<template>
  <div class="play">
    <div class="head">
      <span class="iconfont icon-xialajiantouxiao"></span>
      <h1>提交订单</h1>
    </div>
    <div class="address">
      <div class="cont">
        <h1>
          {{ defaultAddress.name
          }}<span v-if="defaultAddress.isDefault">默认</span>
        </h1>
        <p>
          {{
            defaultAddress.province +
            defaultAddress.city +
            defaultAddress.county
          }}{{ defaultAddress.addressDetail }}
        </p>
      </div>
      <span class="iconfont icon-xialajiantouxiao"></span>
    </div>
    <div class="box-card">
      <div>
        <van-card
          v-for="(item, index) in dataList"
          :key="index"
          :num="item.shopNum"
          :price="item.satisfy_rate"
          :desc="item.tips"
          :title="item.name"
          :thumb="item.image_path"
        />
      </div>
    </div>
    <div class="coupon">
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup round position="bottom" style="height: 90%; padding-top: 4px">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <div class="submit">
      <van-submit-bar
        :price="shopPirce * 100"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [{}],
      coupon: {
        available: 1,
        condition: "无门槛\n最多优惠12元",
        reason: "",
        value: 150,
        name: "优惠券名称",
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: "1.5",
        unitDesc: "元",
      },
      showList: false,
      shopNum: 0,
      shopPirce: 0,
      address: [],
      defaultAddress: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.shopPirce);
    },
  },
  created() {
    this.dataList = this.$store.state.checkData;
    this.address = this.$store.state.addressList;
    this.defaultAddress = this.address.find((item) => item.isCheck == true);
    console.log(this.defaultAddress);
  },
  mounted() {
    this.dataList.forEach((item) => {
      if (item.shopNum > 0) {
        this.shopNum += item.shopNum;
        this.shopPirce += item.satisfy_rate * item.shopNum;
      }
    });
    this.defaultAddress = this.address.find((item) => item.isDefault === true);
    // console.log(result);
  },
};
</script>
<style lang="less" scoped>
.play {
  width: 100%;
  background-color: var(--cardBgColor);
  .head {
    width: 100%;
    display: flex;
    color: aliceblue;
    padding: 0.5rem 0;
    background-color: var(--aquaBgColor);

    span {
      // width: 20%;
      display: inline-block;
      font-size: var(--titleSize);
      transform: rotate(90deg);
    }
    h1 {
      width: 80%;

      font-weight: 700;
      text-align: center;
      font-size: var(--titleSize);
    }
  }
  .address {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    border-bottom: 0.1rem dashed var(--cardFontColor);
    span {
      display: inline-block;
      transform: rotate(-90deg);
    }
    .cont {
      p {
        font-size: var(--side);
      }
      h1 {
        span {
          padding: 0.25rem;
          font-weight: 400;
          transform: rotate(0);
          font-size: var(--normal);
          margin-left: var(--normal);
          color: var(--cardBgColor);
          background-color: var(--aquaBgColor);
        }
        font-weight: 700;
        padding: 0.5rem 0;
        font-size: var(--bigSize);
      }
    }
  }
}
</style>