<template>
  <div class="sort">
    <p @click="handerClick">
      综合排序<span
        :class="
          isShow.synthesis
            ? 'iconfont icon-iconfontarrowdown iconActive'
            : 'iconfont icon-iconfontarrowdown'
        "
      ></span>
    </p>
    <p>销量优先</p>
    <p>速度优先</p>
    <p @click="handerClick" id="sift">
      全部筛选<span
        :class="
          isShow.sift
            ? 'iconfont icon-iconfontarrowdown iconActive'
            : 'iconfont icon-iconfontarrowdown'
        "
      ></span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: {
        synthesis: false,
        sift: false,
      },
    };
  },
  methods: {
    handerClick() {
      this.isShow.synthesis = !this.isShow.synthesis;
      /* if(event.target.id == 'synthesis'){
            this.isShow.synthesis = !this.isShow.synthesis;
            // console.log(!this.isShow.synthesis);
        }else{
            this.isShow.sift = !this.isShow.sift;
        } */
    },
  },
};
</script>
<style lang="less" scoped>
.sort {
  width: 100%;
  margin-top: var(--bigSize);
  display: flex;
  justify-content: space-around;
  p {
    color: var(--cardFontColor);
    font-size: var(--side);
    span {
      transform: rotate();
      display: inline-block;
      margin-left: 0.2rem;
      font-size: var(--normal);
    }
    .iconActive {
      transform: rotate(180deg);
    }
  }
}
</style>