<template>
  <div class="box">
    <div class="SideNavigation hidden">
      <div class="ul-box" ref="foodIndex">
        <p
          v-for="(item, index) in dataLists"
          :key="item.id"
          :class="currentIndex === index - 1 ? 'cuurent' : ''"
          @click="clickMentalItem(item)"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="list hidden">
      <div ref="badge">
        <div class="wei" v-for="item in dataLists" :key="item.id">
          <div class="head-title">
            <p>{{ item.description }}</p>
          </div>
          <div class="item" v-for="data in item.foods" :key="data._id">
            <div class="item-img" @click="ClickShowFunction(item.id, data._id)">
              <img :src="data.image_path" />
            </div>
            <div class="contentItem">
              <h1 @click="ClickShowFunction(item.id, data._id)">
                {{ data.name }}
              </h1>
              <p class="price" @click="ClickShowFunction(item.id, data._id)">
                ￥<span>{{ data.satisfy_rate }}</span>
              </p>
              <p>{{ data.tips }}</p>
              <div class="wet">
                <div class="shop">
                  <transition name="fade">
                    <div class="bell" v-show="data.shopNum > 0">
                      <span @click="ClickAdd(item.id, data._id, false)">-</span>
                      <input type="Number" v-model="data.shopNum" />
                    </div>
                  </transition>
                  <span
                    @click="ClickAdd(item.id, data._id, true)"
                    :class="data.shopNum > 0 ? '' : 'can'"
                    >+</span
                  >
                </div>
              </div>
            </div>
            <!-- 全屏遮盖 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      scrollY: 0,
      tops: [0],
      foodScroll: "",
      dataLists: 0,
      showCenter: true,
      wekFunctions: {}, //路由传递的参数
    };
  },

  created() {
    this.wekFunctions = this.$route.params.wekFunctions;
    this.dataLists = this.$store.state.SpecificGoods;
    console.log(this.dataLists);
  },
  mounted() {
    this._initScroll();
    this._initTops();
  },
  methods: {
    //减数量
    ClickAdd(fId, zId, is) {
      this.wekFunctions.updateDataLists(fId, zId, is);
      // this.setState();
    },
    //修改状态
    setState() {
      // this.$store.commit("setSpecificGoods", this.dataLists);
    },
    //初始化滚动
    _initScroll() {
      new BScroll(".SideNavigation", {
        click: true,
      });
      //使用better-scroll配置.list盒子点击和滚动事件
      this.foodScroll = new BScroll(".list", {
        click: true, //使该盒子中的每一项都有click点击事件
        probeType: 2, //当手指离开屏幕则不会触发记录当前位置
      });
      //监听右侧list盒子的滚动事件
      this.foodScroll.on("scroll", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
      //监听右侧list盒子的滚动结束事件
      this.foodScroll.on("scrollEnd", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
    },
    //初始化tops
    _initTops() {
      let top = 0;
      //1.初始化tops
      const tops = [top];

      //2.收集tops
      //找到所有分类下的p
      const lis = this.$refs.foodIndex.children;
      // console.log(document.querySelector('.ul-box').children);
      //收集右侧badge
      //找到所有食物下的盒子
      const badge = this.$refs.badge.children;

      //将 lis 转换为真正的数组，这样可以使用数组的 forEach 方法进行遍历操作。
      Array.prototype.slice.call(lis).forEach((item, index) => {
        //index是左侧的所有分类的标识,badge[index].clientHeight是将标识的数值去取右侧食物列表到底有多高
        //clientHeight是取盒子的高度,不包含border边框
        top += badge[index].clientHeight;
        //将取到的高度累加返给tops数组中,就可以得知每个列表该跳转到哪个位置
        tops.push(top);
      });
      this.tops = tops;
    },
    clickMentalItem(index) {
      //点击多少就设置多少给badge盒子的高度
      const scrollY = this.tops[index];
      //将盒子当前的位置更新
      this.scrollY = scrollY;
      //scrollTo(x,y,time)x横坐标纵坐标time点击后跳转到指定的位置所需时间
      this.foodScroll.scrollTo(0, -scrollY, 300);
    },
    ClickShowFunction(id, _id) {
      this.wekFunctions.ClickShoW(id, _id);
    },
  },
  computed: {
    currentIndex() {
      //得到条件数据
      const { scrollY, tops } = this;
      //根据条件数据产生结果
      const index = tops.findIndex((top, index) => {
        //findIndex将返回成功的index索引值
        //当食品列表的盒子位置大于等于分类列表的当前值且小于分类列表下一个值就返回true即返回当前分类列表的索引值index
        return scrollY >= top && scrollY < tops[index + 1];
      });
      //返回当前tops值索引index
      return index;
    },
  },
};
</script>
<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
  .SideNavigation {
    flex: 2.5;
    height: 26.5rem;

    background-color: var(--normalBgColor);
    p {
      position: relative;
      padding: 0.8rem 0;
      text-align: center;
    }
    p::before {
      position: absolute;
      bottom: 0;
      left: 25%;
      content: "";
      width: 3rem;
      height: 0.01rem;
      background-color: var(--cardFontColor);
    }
    .cuurent {
      color: var(--aquaBgColor);
      background-color: var(--cardBgColor);
      border-right: 0.05rem solid var(--aquaBgColor);
    }
  }

  .list {
    flex: 7.5;
    height: 26.5rem;
    .head-title {
      width: 100%;
      padding: 0.5rem 0.7rem;
      background-color: var(--normalBgColor);
      p {
        font-size: var(--side);
        color: var(--cardFontColor);
      }
    }
    .item {
      width: 95%;
      margin-left: 1rem;
      display: flex;
      padding: 0.4rem 0;
      border-bottom: 0.01rem solid var(--normalBgColor);
      .item-img {
        width: 3.5rem;
        height: 3.5rem;
        position: relative;

        img {
          border-radius: var(--normal);
          width: 100%;
          height: 100%;
        }
      }
      .contentItem {
        margin-left: 0.5rem;
        .price {
          color: orange;
          font-size: var(--normal);
          span {
            font-size: var(--bigSize);
          }
        }
        p {
          padding: 0.2rem 0;
          font-size: var(--side);
          color: var(--cardFontColor);
        }
        .wet {
          width: 100%;
          padding-top: 0.2rem;
          margin-left: 6rem;
          .shop {
            width: 6rem;
            display: flex;
            .fade-enter-active,
            .fade-leave-active {
              transition: transform 0.5s; /* 设置过渡效果的持续时间 */
            }

            .fade-enter,
            .fade-leave-to {
              transform: translateX(100%); /* 设置初始和结束状态的位置 */
            }
            .bell {
              display: flex;
            }
            input {
              height: 0.6rem;
              width: 1.5rem;
              border: none;
              text-align: center;
            }
            span {
              margin: 0 0.1rem;
              display: block;
              width: 1rem;
              height: 1rem;
              border-radius: 50%;
              text-align: center;
              color: var(--cardBgColor);
              background-color: var(--aquaBgColor);
            }
            .can {
              margin-left: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>