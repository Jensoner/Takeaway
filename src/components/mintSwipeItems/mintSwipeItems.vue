<template>
  <!-- 列表分类 -->
  <div class="mint-swipe-items-wrap">
    <ul class="mint-swipe-item">
      <li v-for="item in resize" :key="item.id">
        <img :src="item.iconUrl" :alt="item.title" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    resize: {
      type: [],
      default: [],
    },
  },
};
</script>
<style lang="less">
//gird栅格布局icon
.mint-swipe-items-wrap {
  background-color: var(--cardBgColor);
  padding-bottom: 0.8rem;
  border-radius: var(--normal);
  .mint-swipe-item {
    width: 100%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50%;
    justify-content: center;
    li {
      width: 80%;
      margin: auto;
      text-align: center;
      img {
        width: 100%;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
}
</style>