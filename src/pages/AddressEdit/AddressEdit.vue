<template>
  <div class="AddressEdit">
    <div class="head">
      <span
        @click="$router.go(-1)"
        class="iconfont icon-xialajiantouxiao"
      ></span>
      <h1>修改地址</h1>
    </div>
    <van-address-edit
      :area-list="areaList"
      v-model="address"
      show-set-default
      :address-info="defaultAddress"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>
<script>
import { areaList } from "@vant/area-data";
// import 'area-data/dist/index.css'; // 可选，如果需要样式

export default {
  data() {
    return {
      searchResult: [],
      add: ["234"],
      address: {
        name: "wer",
        tel: "",
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        postalCode: "",
        isDefault: false,
      },
      areaList,
      defaultAddress: {},
    };
  },
  mounted() {
    this.defaultAddress = this.$route.params;
  },
  methods: {
    onSave(item) {
      this.address = item;
      this.$store.commit("setAddressList", this.address);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  display: flex;
  color: aliceblue;
  padding: 0.5rem 0;
  background-color: var(--van-address-list-radio-color);

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
</style>