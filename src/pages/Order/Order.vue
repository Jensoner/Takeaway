<template>
  <div class="orderAll">
    <!-- 头部距离,保证手机显示下头部切换栏 -->
    <div style="height: var(--autoHeight)"></div>
    <!-- 头部切换栏 -->
    <div class="nav">
      <ul class="navItem">
        <li :class="active === 1 ? 'active' : ''" @click="handerClick(1)">
          全部
        </li>
        <li :class="active === 2 ? 'active' : ''" @click="handerClick(2)">
          进行中
        </li>
        <li :class="active === 3 ? 'active' : ''" @click="handerClick(3)">
          待评价
        </li>
        <li :class="active === 4 ? 'active' : ''" @click="handerClick(4)">
          退款
        </li>
      </ul>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <div class="card-shop-lists">
      <div class="card-shop-list">
        <div class="card-shop-item" v-for="item in orderLists" :key="item.id">
          <div class="card-shop-item-title">
            <div class="card-item-img">
              <img :src="item.bannerUrl" />
              <h1>
                {{ item.title
                }}<span style="color: var(--cardFontColor)">&nbsp;></span>
              </h1>
            </div>
            <p>已送达</p>
          </div>
          <!-- 优惠活动 -->
          <div class="preferential">
            <div class="pre">
              <p class="ac">30减2</p>
              <p class="ac">50减3</p>
              <p>70减4</p>
            </div>
          </div>
          <!-- 中间内容部分 -->
          <div class="card-shop-item-content">
            <div class="card-shop-item-list-img">
              <img
                :src="da"
                :alt="item.title"
                v-for="da in item.imgUrl"
                :key="da.index"
              />
              <div class="card-shop-item-name">
                <p class="hidden">{{ item.name }}</p>
              </div>
            </div>
            <div class="card-shop-item-list-pirce">
              <p>
                ￥<span>{{ item.price }}</span>
              </p>
              <br />
              <span>共{{ item.imgUrl.length }}件</span>
            </div>
          </div>
          <!-- card下方再来一单 -->
          <div class="card-shop-item-tos">
            <div class="card-shop-item-to">
              <div class="card-shop-item-one">评价赢5元红包</div>
              <div class="card-shop-item-two">再来一单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterGuide />
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import FooterGuide from "@/components/FooterGuide/FooterGuide/FooterGuide.vue";
export default {
  data() {
    return {
      orderLists: [
        {
          id: uuidv4(),
          title: "舌尖上的中国",
          name: "",
          bannerUrl:
            "./userShop/shop1/banner/O1CN018s3S9U1uS54nlSdlq_!!2215475886035-2-koubei.png_100x100.png",
          imgUrl: [
            "./userShop/shop1/Snipaste_2023-04-27_16-14-15.jpg",
            "./userShop/shop1/Snipaste_2023-04-27_16-14-48.jpg",
            "./userShop/shop1/Snipaste_2023-04-27_16-14-56.jpg",
          ],
          price: 8.7,
          num: 3,
        },
        {
          id: uuidv4(),
          title: "蜜雪冰城(中坝)",
          name: "",
          bannerUrl:
            "./userShop/shop2/banner/O1CN01RYQNPz1SZaKgHmuOA_!!2208374492261-0-koubei.jpg_100x100.jpg",
          imgUrl: [
            "./userShop/shop2/Snipaste_2023-04-27_16-17-28.jpg",
            "./userShop/shop2/Snipaste_2023-04-27_16-17-49.jpg",
            "./userShop/shop2/Snipaste_2023-04-27_16-17-56.jpg",
          ],
          price: 16.9,
          num: 3,
        },
        {
          id: uuidv4(),
          title: "理柏颜营养健康旗舰店(长春店)",
          name: "褪黑素",
          bannerUrl:
            "./userShop/shop3/banner/O1CN01xp2QGT1a355PE94XN_!!2214259033273-0-koubei.jpg_100x100.jpg",
          imgUrl: ["./userShop/shop3/Snipaste_2023-04-27_16-19-11.jpg"],
          price: 9.9,
          num: 1,
        },
        {
          id: uuidv4(),
          title: "一点点(石人南路店)",
          name: "",
          bannerUrl:
            "./userShop/shop4/banner/O1CN01JYWzfq2GiUoyTXkDZ_!!2206679119049-0-koubei.jpg_100x100.jpg",
          imgUrl: [
            "./userShop/shop4/Snipaste_2023-04-27_16-22-03.jpg",
            "./userShop/shop4/Snipaste_2023-04-27_16-22-14.jpg",
          ],
          price: 24.9,
          num: 3,
        },
        {
          id: uuidv4(),
          title: "叫了只炸鸡(中坝)",
          name: "第二份半价脆鸡骨套餐",
          bannerUrl:
            "./userShop/shop5/banner/O1CN0107bS0Z1CqxIjrR01C_!!2208334220133-0-koubei.jpg_100x100.jpg",
          imgUrl: ["./userShop/shop5/Snipaste_2023-04-27_16-23-28.jpg"],
          price: 28,
          num: 1,
        },
      ],
      active: 1,
    };
  },
  components: {
    FooterGuide,
  },
  methods: {
    handerClick(id) {
      this.active = id;
    },
  },
  created() {
    /* this.$axios.get("/home/order").then((res) => {
      this.orderLists = res.data;
    }); */
  },
};
</script>
<style scoped lang="less">
.orderAll {
  width: 100%;
  margin: auto;
  background-color: var(--normalBgColor);
  .nav {
    width: 95%;
    display: flex;
    padding: 1rem 0;
    margin: auto;
    .navItem {
      flex: 6;
      display: flex;
      justify-content: space-around;
    }
    li {
      font-size: 1rem;
      color: var(--cardFontColor);
    }
    .active {
      color: #000;
      font-weight: 700;
      font-size: 1.2rem;
      position: relative;
    }
    .active::before {
      content: " ";
      position: absolute;
      bottom: -0.5rem;
      left: 0.45rem;
      display: block;
      width: 1.5rem;
      height: 0.2rem;
      border-radius: var(--normal);
      background-color: aqua;
    }
    span {
      flex: 4;
      text-align: right;
      font-size: 1.2rem;
      color: #000;
    }
  }
  .card-shop-lists {
    width: 95%;

    margin: auto;
    border-radius: var(--normal);

    .card-shop-list {
      width: 95%;
      margin: auto;

      .card-shop-item {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: var(--normal);
        background-color: var(--cardBgColor);
        .card-shop-item-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .card-item-img {
            display: flex;
            img {
              width: var(--normalHeight);
              height: var(--normalHeight);
              border-radius: var(--normal);
            }
            h1 {
              text-align: center;
              line-height: 2rem;
              font-weight: 700;
              font-size: var(--side);
            }
          }
          h1 {
            margin-left: var(--normal);
          }
          p {
            font-size: var(--normal);
            color: var(--cardFontColor);
            line-height: 2rem;
            padding-right: 0.1rem;
          }
        }
        .preferential {
          width: 100%;
          color: var(--redSize);
          font-size: var(--normal);
          .pre {
            width: 8rem;
            display: flex;
            justify-content: space-around;
            border: 1px solid var(--redSize);
            padding: 0.1rem;
            border-radius: var(--normal);
            .ac {
              position: relative;
            }
            .ac::before {
              content: " ";
              position: absolute;
              display: block;
              width: 0.1rem;
              height: 0.5rem;
              top: 0.14rem;
              right: -0.3rem;
              background-color: var(--redSize);
            }
          }
        }
        .card-shop-item-content {
          width: 100%;
          display: flex;
          margin-top: var(--normal);

          .card-shop-item-list-img {
            // width: 100%;
            flex: 8;
            display: flex;
            .card-shop-item-name {
              margin-left: var(--normal);
              p {
                line-height: var(--normalHeight);
                font-size: var(--bigSize);
              }
            }
            img {
              border-radius: var(--normal);
              width: var(--minImgHeight);
              margin-left: var(--normal);
            }
          }
          p {
            font-size: var(--normal);
            span {
              font-size: var(--bigSize);
              color: #000;
            }
          }
          span {
            font-size: var(--normal);
            color: var(--cardFontColor);
          }
        }
        .card-shop-item-tos {
          width: 100%;
          height: 2.2rem;
          margin-top: 0.5rem;
          .card-shop-item-to {
            width: 60%;
            float: right;
            display: flex;
            justify-content: space-around;
            div {
              padding: 0.2rem 0.5rem;
              border-radius: var(--normal);
              font-size: var(--side);
            }
            .card-shop-item-one {
              color: var(--cardFontColor);
              border: 1px solid var(--cardFontColor);
            }
            .card-shop-item-two {
              color: aqua;
              border: 1px solid aqua;
            }
          }
        }
      }
    }
  }
}
</style>