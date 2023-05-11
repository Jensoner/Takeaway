<template>
  <div class="business">
    <div style="height: 1rem"></div>
    <div class="box">
      <div class="wei">
        <div class="name">能和你收到回复</div>
        <div class="address">
          <span class="iconfont icon-dingwei"></span
          >&nbsp;生成上0囧教大家覅撒娇<span>></span>
        </div>
        <div class="address">
          <span class="iconfont icon-shijian"></span
          >&nbsp;周一至周日&nbsp;10:30-次日01:00
        </div>
      </div>
      <span  class="iphone iconfont icon-dianhua"></span>
    </div>
    <h1>举报商家</h1>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$route.query);
  }
};
</script>
<style lang="less" scoped>
.business {
  width: 100%;
  .box {
    width: 90%;
    background-color: var(--cardBgColor);
    padding: 0.5rem;
    margin: auto;
    border-radius: var(--normal);
    // display: flex;
    position: relative;
    .wei {
      .name {
        font-size: var(--bigSize);
        font-weight: 700;
        padding: 0.2rem 0;
      }
      .address {
        padding: 0.2rem 0.5rem;
        font-size: var(--side);
      }
    }
    .iphone {
      position: absolute;
      top: 1rem;
      right: 2rem;
      color: aqua;
      font-weight: 900;
      font-size: var(--titleSize);
    }
  }
  h1 {
    width: 90%;
    margin: 2rem auto;
    padding: 0.8rem 0.5rem;
    text-align: center;
    font-size: var(--side);
    border-radius: var(--normal);
    background-color: var(--cardBgColor);
  }
}
</style>