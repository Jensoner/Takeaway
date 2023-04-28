<template>
  <!-- banner图 -->
  <div class="mint-banner">
    <div class="mint">
      <div class="mint_right">
        <h2>品牌套餐</h2>
        <p>搭配齐全吃的更好</p>
        <span>立即抢购>></span>
      </div>
      <div class="mint-left">
        <img src="../image/df43e7e53f6e1346c3fda0609f1d3.png" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
//品牌套餐banner
.mint-banner {
  width: 100%;
  margin: var(--normal) 0;
  background-color: var(--cardBgColor);
  .mint {
    width: 90%;
    padding: 0.5rem;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-between;
    border-radius: 0.2rem;

    h2 {
      font-weight: 900;
    }
    p {
      font-size: 0.9rem;
      padding: var(--normal) 0;
    }
    span {
      font-size: var(--normal);
      color: orange;
    }
    img {
      width: var(--imgSize);
    }
  }
}
</style>