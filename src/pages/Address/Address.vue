<template>
  <div class="address">
    <div class="head">
      <span
        @click="$router.go(-1)"
        class="iconfont icon-xialajiantouxiao"
      ></span>
      <h1>收货地址</h1>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: 2,
      list: [],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push({
        name: "AddressEdit",
        params:{}
      });
    },
    onEdit(item, index) {
      this.$router.push({
        name: "AddressEdit",
        params: this.list[index],
      });
    },
  },
  created() {
    this.list = this.$store.state.addressList;
    if (!Array.isArray(this.list)) {
      this.list = [this.list];
    }
    this.list.forEach((item, index) => {
      if (item.isCheck) {
        this.chosenAddressId = index + 1;
      }
    });
  },
  watch: {
    chosenAddressId() {
      this.list.forEach(item=>{
        if(item.id==this.chosenAddressId){
          item.isCheck = true 
        }else{
          item.isCheck = false
        }
      })
      this.$store.commit("setAddressList", this.list[this.chosenAddressId - 1]);
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