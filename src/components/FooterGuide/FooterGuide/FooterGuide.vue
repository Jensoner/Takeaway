<template>
  <footer>
    <ul>
      <li
        :class="{ active: item.link === $route.path }"
        class="item"
        @click="handerClick(item.link)"
        v-for="item in List"
        :key="item.id"
      >
        <span :class="['iconfont', 'icon-' + item.iconFont]"></span>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      List: [
        {
          id: 1,
          name: "首页",
          iconFont: "shouye",
          link: "/Msite",
        },
        {
          id: 2,
          name: "全能超市",
          iconFont: "xueshengchaoshixiaofei",
          link: "/Search",
        },
        {
          id: 3,
          name: "订单",
          iconFont: "dingdan",
          link: "/Order",
        },
        {
          id: 4,
          name: "我的",
          iconFont: "geren",
          link: "/Profile",
        },
      ],
    };
  },
  methods: {
    handerClick(path) {
      this.$router.push({ path });
    },
  },
};
</script>
<style scoped lang="stylus" rel="stylusheet/stylus">
footer {
  position: fixed;
  bottom: 0;
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    background-color: #eee;
    border-top: 0.00123rem solid #5C5C5C;

    .active {
      color: var(--homeBgColor) !important;
    }

    .item {
      width: 100%;
      padding-top: 0.325rem;
      padding-bottom: 0.225rem;
      text-align: center;
      color: #808080;

      p {
        padding-top: 0.235rem;
      }

      span {
        display: block;
        font-size: 1.775rem;
      }
    }
  }
}
</style>