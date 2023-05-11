<template>
  <div class="mark">
    <nav>
      <span @click="$router.push({name:'Msite'})" class="iconfont icon-xialajiantouxiao"></span>
      <p>{{title}}</p>
    </nav>
    <div class="box">
      <div class="sort">
        <sort></sort>
      </div>
      <div class="conten">
        <shopList
          v-for="item in recom"
          @my-event="handerClick"
          :key="item.id"
          :recom="[item]"
        />
      </div>
    </div>
  </div>
</template>
<script>
import imgUrl from "@/utils/imgUrl";
import shopList from "@/components/shopList/shopList.vue";
import sort from "@/components/sort/sort.vue";

export default {
  data() {
    return {
      recom: [],
      title:''
    };
  },
  components: {
    sort,
    shopList,
  },
  mounted() {
    this.title = this.$route.params.title
    this.$axios
      .get(
        "/shopping/restaurants?latitude=30.75168&longitude=103.781967&offset=0&limit=20"
      )
      .then((res) => {
        this.recom = res.data;
        this.recom.forEach(function (item) {
          let img = imgUrl.img;
          item.isShow = false;
          item.image_path = img + item.image_path;
        });
      });
  },
};
</script>
<style lang="less" scoped>
.mark {
  width: 100%;
  background-color: var(--normalBgColor);
  nav {
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    background-color: var(--aquaBgColor);
    justify-content: space-between;
    color: var(--cardBgColor);
    span {
      flex: 1;
      font-size: var(--titleSize);
      text-align: center;
      line-height: 1rem;
      display: inline-block;
      transform: rotate(90deg);
    }
    p {
      flex: 9;
      text-align: center;
      font-weight: 700;
      font-size: var(--titleSize);
    }
  }
  .box {
    width: 95%;
    margin: auto;
  }
}
</style>