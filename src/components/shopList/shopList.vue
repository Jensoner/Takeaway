<template>
  <div class="shoplist-title">
    <div class="wrap-list">
      <div class="recommond-card" v-for="item in dataList" :key="item.id">
        <div class="can" @click="$router.push({name:'food',query:{customerInfo:dataList}})">
          <div class="card-img-wrap">
            <!-- <img :src="'https://elm.cangdu.org/img/' + item.image_path" /> -->
            <img :src="item.image_path" />
          </div>
          <div class="card-info-wrap">
            <div class="card-info-title">
              <h2>{{ item.name }}</h2>
              <p class="score">
                <van-rate
                  v-model="item.rating"
                  readonly
                  allow-half
                  size="10"
                  color="orange"
                />
                <span style="font-weight: 700; color: orange"
                  >&nbsp;{{ item.rating }}分</span
                >人均￥{{ item.recent_order_num }}
              </p>
              <p class="score">
                起送￥{{ item.float_minimum_order_amount }} &nbsp;{{
                  item.piecewise_agent_fee.tips
                }}
              </p>
              <p class="text">{{ item.text }}</p>
              <div class="preferential">
                <!-- 优惠活动模块 -->
                <!-- {{ imgUrl.img }} -->
              </div>
            </div>
            <div class="card-info-address">
              <span
                @click="handerClick(item.id)"
                class="iconfont icon-shanchu2"
              ></span>
              <p class="score">
                {{ item.order_lead_time }}<br />
                {{ item.distance }}
              </p>
              <span
                style="padding-top: 1.2rem"
                class="iconfont icon-xialajiantouxiao"
              ></span>
            </div>
          </div>
        </div>
        <div
          class="page-manage-left"
          :class="item.isShow ? 'we' : 'canm'"
          v-show="item.isShow"
        >
          <div class="item">
            <div class="img">
              <span class="iconfont icon-chazhaoxiangsi"></span>
            </div>
            <p>找相似</p>
          </div>
          <div class="item">
            <div class="img">
              <span class="iconfont icon-a-icon_buxihuanxinsui"></span>
            </div>
            <p>不喜欢</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "shopList",
  data() {
    return {
      // isShow:false
      dataList: "",
      customerInfo:[]
    };
  },
  methods: {
    handerClick(id) {
      this.$emit("my-event", id);
    },
  },
  mounted() {
    this.dataList = this.recom;
    
  },
  props: {
    recom: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style lang="less">
// 附近商家
.shoplist-title {
  width: 100%;
  padding-top: 0.2rem;
  margin-top: 0.2rem;
  .wrap-list {
    width: 95%;
    margin: auto;
    .recommond-card {
      height: var(--minImgHeight);
      padding: var(--side);
      margin-top: var(--normal);
      border-radius: var(--normal);
      background-color: var(--cardBgColor);
      position: relative;
      .can {
        display: flex;
        justify-content: space-between;
        .card-img-wrap {
          flex: 2;
          img {
            width: 100%;
            height: 100%;
            border-radius: var(--normal);
          }
        }
        .score {
          flex: 1;
          font-size: var(--normal);
          color: var(--cardFontColor);
          z-index: 0;
          padding: 0.2rem 0;
        }
        .card-info-wrap {
          flex: 7;
          display: flex;
          justify-content: space-between;
          .card-info-title {
            margin-left: 0.5rem;
            h2 {
              font-weight: 900;
              font-family: "篆体";
              padding: 0.2rem 0;
            }

            .text {
              width: 10rem;
              font-size: 0.2rem;
              padding: 0.3rem;
              border-radius: var(--normal);
              color: orange;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .card-info-address {
            span {
              font-size: var(--normal);
              text-align: right;
              display: block;
            }
            .score {
              padding-top: var(--bigSize);
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
      }
      .page-manage-left {
        position: absolute;
        top: 0;
        width: 95%;
        height: 100%;
        display: flex;
        border-radius: var(--normal);
        justify-content: space-evenly;
        background-color: rgba(0, 0, 0, 0.85);
        .item {
          margin-top: 1.5rem;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background-color: var(--cardBgColor);
          .img {
            width: 2.5rem;
            margin: auto;
            margin-top: 0.8rem;
            span {
              margin-left: 0.7rem;
              font-size: var(--bigSize);
              color: var(--cardFontColor);
            }
          }
          p {
            padding-top: 0.2rem;
            text-align: center;
            color: var(--cardFontColor);
            font-size: 0.5rem;
          }
        }
      }
    }
  }
}
</style>