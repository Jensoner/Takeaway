<template>
  <div class="Profile">
    <div class="Profile-box">
      <div style="height: var(--autoHeight)"></div>
      <div class="Profile-geren-box">
        <div class="geren-box-left">
          <div class="box-left-img">
            <span class="iconfont icon-touxiang"></span>
          </div>
          <div class="box-right-iphone">
            <div>
              <p>177</p>
              <p>****</p>
              <p>8207</p>
            </div>
          </div>
        </div>
        <div class="geren-box-set">
          <span class="iconfont icon-shezhi"></span>
          <span class="iconfont icon-tongzhi"></span>
        </div>
      </div>
      <div class="Profile-card-group">
        <div class="Profile-card-item">
          <span class="iconfont icon-qianbao"></span>
          <p>我的资产</p>
        </div>
        <div class="Profile-card-item">
          <span class="iconfont icon-hongbao"></span>
          <p>红包</p>
        </div>
        <div class="Profile-card-item">
          <span class="iconfont icon-coupon"></span>
          <p>钱包</p>
        </div>
      </div>
      <div class="correlation">
        <div class="card-more-function">
          <div class="more-item">
            <span class="iconfont icon-guanyu"></span>
            <p>更多规则</p>
          </div>
          <div class="more-item">
            <span class="iconfont icon-dingwei"></span>
            <p>我的地址</p>
          </div>
          <div class="more-item">
            <span class="iconfont icon-yinsitiaokuan"></span>
            <p>隐私政策</p>
          </div>
          <div class="more-item">
            <span class="iconfont icon-shouhou"></span>
            <p>售后服务</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.Profile {
  width: 100%;
  background-color: var(--normalBgColor);
  .Profile-box {
    width: 95%;
    margin: auto;
    .Profile-geren-box {
      width: 100%;
      padding-top: 0.6rem;
      display: flex;
      justify-content: space-between;
      .geren-box-left {
        display: flex;
        .box-left-img {
          height: 1.5rem;
          border-radius: 50%;
          background-color: var(--aquaBgColor);
          span {
            font-size: 1.5rem;
            color: var(--cardBgColor);
          }
        }
      }
      .box-right-iphone {
        font-weight: 700;
        margin-left: 0.4rem;
        div {
          display: flex;
        }
      }
      .geren-box-set {
        span {
          color: rgb(47, 47, 47);
          font-size: 1.3rem;
          margin-left: 0.4rem;
        }
      }
    }
    .Profile-card-group {
      width: 95%;
      padding: 0.5rem;
      display: flex;
      margin-top: 1rem;
      border-radius: var(--normal);
      justify-content: space-around;
      background-color: var(--cardBgColor);
      .Profile-card-item {
        span {
          font-size: 2rem;
          color: var(--redSize);
          text-align: center;
        }
        p {
          padding-top: 0.5rem;
        }
      }
      .Profile-card-item:nth-child(1) {
        span {
          display: grid;
          place-items: center; /* 居中 */
          color: var(--cardFontColor);
        }
      }
    }
    .correlation {
      width: 95%;
      background-color: var(--cardBgColor);
      padding: 0.5rem;
      margin-top: 0.5rem;
      .card-more-function {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        .more-item {
          p{
            padding-top: 0.3rem;
            text-align: center;
          }
          span {
            font-size: 1.5rem;
            display: grid;
            place-items: center; /* 居中 */
          }
        }
      }
    }
  }
}
</style>