<template>
  <div class="categories">
    <div class="head">
      <div class="b"><span class="iconfont icon-xialajiantouxiao"></span></div>
    </div>
    <div class="conten">
      <div class="img">
        <img :src="customerInfo.image_path" />
      </div>
      <div class="box-title">
        <h1><span>品牌</span>{{ customerInfo.name }}</h1>
        <p>评分{{ customerInfo.rating }}{{ customerInfo.rating }}</p>
        <p>{{ customerInfo.promotion_info }}</p>
      </div>
      <div class="box-list">
        <ul>
          <li
            v-for="item in fullName"
            :key="item.id"
            @click="handoffLabel(item.link)"
            :class="{ active: item.link === $route.name }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="router">
        <router-view></router-view>
      </div>
    </div>
    <transition name="fide">
      <div class="menuItem--info-sales" v-if="isShow">
        <div class="concrete">
          <div class="menuItem--info-dollar">
            <div class="concrete-img">
              <img :src="data.image_path" />
            </div>
            <div class="menuItem--info--box">
              <h1>{{ data.name }}</h1>
              <p>配料:{{ data.description }}</p>
              <p>{{ data.tips }}</p>
              <div class="menuItem--info-price-text">
                <p>￥{{ data.satisfy_rate }}</p>
                <div class="shopCards">
                  <div v-show="data.shopNum > 0">
                    <span @click="ClickJian(false)">-</span>
                    <input type="text" v-model="data.shopNum" />
                    <span @click="ClickJia(true)">+</span>
                  </div>
                  <p
                    class="gouwu"
                    v-show="data.shopNum <= 0"
                    @click="ClickJia()"
                  >
                    加入购物车
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span class="delect" @click="shutDown()">X</span>
        </div>
      </div>
    </transition>

    <!-- 去结算模块 -->
    <div class="foodter" v-if="$route.name == 'MenuItem'">
      <transition name="popup">
        <div class="popup" v-if="showBottom">
          <p class="biaoti">
            已选商品<i style="color: red; font-size: var(--side)"
              >({{ shopNum }})件
            </i>
          </p>
          <div class="menu__tap_area" v-for="item in checkData" :key="item">
            <div class="menu_img">
              <img :src="item.image_path" />
            </div>
            <div class="menu_title">
              <h1><span>折</span>{{ item.name }}</h1>
              <p>￥{{ item.satisfy_rate }}</p>
            </div>
            <div class="menu_delect">
              <div>
                <span @click="ClickAdd(item._id, false)">-</span>
                <input type="text" v-model="item.shopNum" />
                <span @click="ClickAdd(item._id, true)">+</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="wei">
        <div class="shopicon" @click="ClickShowBottom">
          <span
            :class="
              shopPrice <= 0
                ? ' iconfont icon-gouwucheman'
                : 'iconfont icon-gouwucheman current'
            "
          ></span>
          <i v-if="shopNum > 0">{{ shopNum }}</i>
        </div>
        <div class="foodTitle">
          <h1 :class="shopPrice > 0 ? 'active' : ''">￥{{ shopPrice }}</h1>
          <p>配送费￥5</p>
        </div>
        <div class="settlement">
          <p :class="shopPrice <= 0 ? '' : 'current'" @click="gotoPlay">
            去结算
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      data: {
        foods: {
          tips: "Ddsb",
          description: "QEWRQ",
          name: "sfdgsd",
          satisfy_rate: "12",
          shopNum: 0,
          image_path: "./container/6f2631288a44ec177204e05cbcb93.jpg",
          present: 1,
        },
      },
      shopPrice: 0, //最后计算结果
      checkData: [], //选中的所有dataList
      isShow: false,
      dataLists: [{ foods: [] }, { foods: [] }],
      showCenter: true,
      fId: 1,
      customerInfo: [],
      shopNum: 0, //总数
      showBottom: false,
      wekFunctions: {
        ClickJia: this.ClickJia,
        ClickJian: this.ClickJian,
        ClickShoW: this.ClickShoW,
        updateDataLists: this.updateDataLists,
      },
      fullName: [
        {
          id: 1,
          name: "点餐",
          link: "MenuItem",
        },
        {
          id: 2,
          name: "评论",
          link: "comments",
        },
        {
          id: 3,
          name: "商家",
          link: "business",
        },
      ],
    };
  },
  created() {
    this.customerInfo = this.$route.query.customerInfo[0];
    this.$store.dispatch("requestGoods", 1);
    this.checkData = this.$store.state.checkData;
    this.dataLists = this.$store.state.SpecificGoods;
    console.log(this.dataLists);
    this.createShopNum();
    this.initializeData();
    this.$router.push({
      name: "MenuItem",
      params: { wekFunctions: this.wekFunctions },
    });
  },
  mounted() {},
  methods: {
    ClickJian(is) {
      //弹出框内的加减函数(is参数是判断操作的是加还是减)
      if (is) {
        //购物车图标数量加一
        this.shopNum += 1;
      } else {
        if (this.shopNum <= 0) {
          this.showBottom = false;
          this.shopNum = 0;
        } else {
          this.shopNum -= 1;
        }
      }
      //更新页面数据
      this.updateDataLists(this.fId, this.data._id, false);
      //更新store数据
      this.shutDown();
    },
    ClickShoW(id, _id) {
      //页面展示与关闭
      this.isShow = !this.isShow;
      //将点击的是哪个商品的列表分类id添加到该对象中,方便对原数据进行更改
      this.fId = id;
      //对数据进行修改
      this.dataLists.forEach((item) => {
        if (item.id == id) {
          item.foods.forEach((Element) => {
            if (Element._id === _id) {
              Element.present = item.id;
              this.data = Element;
            }
          });
        }
      });
    },
    ClickAdd(_id, is) {
      //当前选中的商品进行展示
      this.checkData.forEach((item) => {
        if (item._id == _id) {
          this.updateDataLists(item.fId, _id, is);
        }
      });
    },
    shutDown() {
      //将弹出框的数据更新后替换原来的dataLists数据
      this.dataLists.forEach((item) => {
        if (item.id == this.data.present) {
          item.foods.forEach((Element) => {
            if (Element._id == this.data._id) {
              Element = this.data;
            }
          });
        }
      });
      //更改store中的状态数据
      this.$store.commit("setSpecificGoods", this.dataLists);
      // 将isShow改为false关闭弹出框
      this.isShow = false;
    },
    updateDataLists(id, _id, is) {
      //对页面数据进行更新
      this.dataLists.forEach((Element) => {
        if (Element.id == id) {
          Element.foods.forEach((item) => {
            if (item._id == _id) {
              //判断当前数据操作是加还是减
              if (is) {
                //将该列表分类id添加到选中的对象checkData中
                item.fId = id;
                //由于数组初始值是空数组,所有对当前数组进行排空
                if (this.checkData.length > 0) {
                  // 判断 _id 是否存在于 checkData 数组中
                  const index = this.checkData.findIndex(
                    (item) => item._id === _id
                  );
                  // findIndex方法将返回一个数值,
                  // 若是数组中没有查找到对应是值就会返回-1,
                  // 若是找到了就会返回该数据在数组中的位置索引
                  if (index !== -1) {
                    //0在其中
                    this.checkData[index].shopNum++;
                  } else {
                    //-1不在数组中
                    item.shopNum++;
                    this.checkData.push(item);
                  }
                } else {
                  //此处数组是空的情况就将点击的数据直接push到checkData中
                  item.shopNum++;
                  this.checkData.push(item);
                }
                //对总数进行加减
                this.shopPrice += item.satisfy_rate;
                this.EndShopNum(true);
              } else {
                item.fId = id;
                this.EndShopNum(false);
                // 删除 checkData 中 id 等于 _id 的项
                if (this.checkData.length > 0) {
                  // 判断 _id 是否存在于 checkData 数组中
                  const index = this.checkData.findIndex(
                    (item) => item._id === _id
                  );
                  if (index !== -1) {
                    //在其中
                    this.checkData[index].shopNum--;
                    //判断该对象的shopNum即数量,若是数量<=0则删除该项,若>1则-1个数量
                    if (this.checkData[index].shopNum <= 0) {
                      this.checkData.splice(index, 1);
                    }
                  }
                }
                //对总价格进行从新计算
                this.shopPrice -= item.satisfy_rate;
              }
            }
          });
        }
      });
    },
    createShopNum() {
      this.checkData.forEach((item) => {
        this.shopNum += item.shopNum;
        this.shopPrice += item.satisfy_rate * item.shopNum;
      });
    },
    EndShopNum(is) {
      //for循环没次修改数据都对shopNum即当前所选择的商品的总数进行统计
      this.checkData.forEach(() => {
        if (is) {
          this.shopNum++;
        } else {
          this.shopNum--;
        }
      });
      this.$store.commit("setCheckData", this.checkData);
      this.setState();
    },
    ClickShowBottom() {
      //购物车当前所选商品展示
      if (this.checkData.length > 0) {
        this.showBottom = !this.showBottom;
      }
    },
    //对数据进行初始化
    initializeData() {
      this.dataLists.forEach((Element) => {
        Element.foods.forEach((item) => {
          this.checkData.forEach((tem) => {
            if (item._id == tem._id) {
              item.shopNum = tem.shopNum;
            }
          });
        });
      });
    },
    setState() {
      this.$store.commit("setSpecificGoods", this.dataLists);
    },
    handoffLabel(link) {
      this.$router.push({
        name: link,
        query: { customerInfo: this.customerInfo },
      });
    },
    gotoPlay() {
      if (this.shopPrice > 0) {
        this.$router.push({
          name: "Play",
          params: {
            data:[this.shopPrice,this.checkData]
          },
        });
      }
    },
  },
};
</script>
  
<style lang="less" scoped>
.categories {
  width: 100%;
  .head {
    width: 100%;
    height: 6rem;
    background: url("./image/f12e5207df9f9319570e4172b01eec04.jpg");
    background-size: 100% 100%;
    .b {
      width: 95%;
      margin: auto;
      padding-top: 0.6rem;
      span {
        display: inline-block;
        font-size: var(--titleSize);
        color: var(--cardBgColor);
        transform: rotate(90deg);
      }
    }
  }
  .conten {
    width: 100%;
    position: relative;
    .img {
      position: absolute;
      top: -2.5rem;
      left: 45%;
      width: 4rem;
      height: 4rem;
      z-index: 999;
      img {
        border-radius: var(--normal);
        width: 100%;
      }
    }
    .box-title {
      width: 100%;
      padding-top: 2rem;
      h1 {
        text-align: center;
        font-size: var(--titleSize);
        font-weight: 700;
        span {
          margin: 0 0.5rem 0.2rem 0;
          text-align: center;
          color: var(--cardFontColor);
          padding: 0.1rem 0.4rem;
          font-size: var(--normal);
          background-color: rgb(247, 235, 6);
        }
      }
      p {
        text-align: center;
        padding-top: 0.4rem;
        font-size: var(--side);
      }
    }
    .router {
      height: 100vh;
      background-color: var(--normalBgColor);
    }
    .box-list {
      width: 95%;
      padding-top: 1rem;
      margin: auto;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          height: 1.3rem;
        }
      }
      .active {
        border-bottom: 0.2rem solid var(--aquaBgColor);
        color: var(--aquaBgColor);
      }
    }
  }
  //全屏遮盖
  .menuItem--info-sales {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* 使用 rgba 函数设置背景颜色和透明度 */
    z-index: 9999; /* 确保遮盖层位于其他内容之上 */
    .concrete {
      position: fixed;
      top: 30%;
      left: 21%;
      .delect {
        display: block;
        margin: 0.4rem auto;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        border: 0.05rem solid white;
        border-radius: 50%;
        color: var(--cardFontColor);
      }
      .menuItem--info-dollar {
        padding: 1rem;
        background-color: var(--cardBgColor);
        border-radius: var(--normal);
        .concrete-img {
          width: 12rem;
          height: 8rem;
          margin: auto;
          img {
            width: 100%;
            height: 100%;
            border-radius: var(--normal);
          }
        }
        .menuItem--info--box {
          text-align: center;
          h1 {
            font-size: var(--titleSize);
            font-weight: 700;
          }
          p {
            padding: 0.5rem 0;
            font-size: var(--bigSize);
            color: var(--cardFontColor);
          }
          .menuItem--info-price-text {
            width: 100%;
            margin-top: 0.5rem;
            display: flex;
            p {
              flex: 5;
              font-size: var(--titleSize);
              text-align: left;
              color: orange;
            }
            .shopCards {
              flex: 5;
              div {
                display: flex;
                text-align: center;
                span {
                  width: 1rem;
                  height: 1rem;
                  border-radius: 50%;
                  color: aliceblue;

                  padding: 0.1rem;
                  line-height: 1rem;
                  background-color: var(--aquaBgColor);
                }
                input {
                  text-align: center;
                  width: 2rem;
                  border: none;
                }
              }
              .gouwu {
                margin-top: 0.4rem;
                padding: 0.4rem;
                text-align: center;
                font-size: var(--side);
                border-radius: var(--normal);
                background-color: var(--aquaBgColor);
                color: aliceblue;
              }
            }
          }
        }
      }
    }
  }
  .foodter {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: white;
    // 弹出层
    .popup {
      width: 100%;
      background-color: var(--cardBgColor);
      .biaoti {
        width: 95%;
        // margin: auto;
        padding: 1rem;
        text-align: left;
      }
      .menu__tap_area {
        width: 95%;
        margin: auto;
        display: flex;
        .menu_img {
          width: 3rem;
          height: 3rem;
          flex: 2;
          padding: 0.5rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: var(--normal);
          }
        }
        .menu_title {
          flex: 6;
          padding: 0.5rem;
          h1 {
            font-weight: 700;
            font-size: var(--bigSize);
            span {
              padding: 0.2rem;
              font-size: var(--normal);
              border-radius: 0.2rem;
              color: orange;
              margin-right: 0.2rem;
              background-color: var(--redSize);
            }
          }
          p {
            color: orange;
            font-weight: 700;
            font-size: var(--bigSize);
            padding-top: 1.5rem;
          }
        }
        .menu_delect {
          flex: 2;
          margin-top: 1.3rem;
          div {
            display: flex;
            text-align: center;
            span {
              width: 1rem;
              height: 1rem;
              border-radius: 50%;
              color: aliceblue;

              padding: 0.1rem;
              line-height: 1rem;
              background-color: var(--aquaBgColor);
            }
            input {
              text-align: center;
              width: 2rem;
              border: none;
            }
          }
        }
      }
    }
    .wei {
      display: flex;
      .active {
        color: orange !important;
      }
      .current {
        background-color: var(--aquaBgColor) !important;
      }
      .shopicon {
        flex: 2;
        width: 1.5rem;
        height: 1.5rem;
        color: aliceblue;
        position: relative;
        i {
          text-align: center;
          position: absolute;
          left: 2rem;
          top: -0.5rem;
          padding: 0.2rem 0.4rem;
          border-radius: 50%;
          font-size: var(--normal);
          background-color: red;
        }
        span {
          padding: 0.5rem;
          border-radius: 50%;
          background-color: var(--cardFontColor);

          font-size: 1.6rem;
          backdrop-filter: blur(5px);
          margin-left: 0.5rem;
          margin-top: 0.1rem;
        }
      }
      .foodTitle {
        flex: 5;
        color: aliceblue;
        h1 {
          font-weight: 700;
          color: black;
          font-size: var(--bigSize);
        }
        p {
          color: var(--cardFontColor);
          padding-top: 0.1rem;
          font-size: var(--normal);
        }
      }
      .settlement {
        flex: 3;
        background-color: var(--cardFontColor);
        p {
          text-align: center;
          line-height: 3rem;
          color: var(--cardBgColor);
          font-size: var(--titleSize);
        }
      }
    }
  }
  .fide-enter-active,
  .fide-leave-active {
    transition: opacity 0.5s; /* 设置过渡效果的持续时间 */
  }
  .fide-enter,
  .fide-leave-to {
    opacity: 0; /* 设置初始和结束状态的位置 */
  }
  .popup-enter-active,
  .popup-leave-active {
    transition: transform 0.5, opacity 0.5;
  }
  .popup-enter,
  .popup-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>