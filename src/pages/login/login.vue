<template>
  <div class="login">
    <div style="height: var(--autoHeight)"></div>
    <div class="head">
      <div class="span-icon">
        <span
          @click="$router.push({ name: 'Msite' })"
          class="iconfont icon-xialajiantouxiao"
        ></span>
      </div>
      <div class="head-title">
        <p>登录</p>
      </div>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录/注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { encryption } from "@/utils/crypto.js";
// const crypto = require('../../utils/crypto.js');
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      //将加密的对象字符串存储到localStorage中用于登录状态验证
      localStorage.setItem("iphone", encryption(values));
      this.$router.push({ name: "Profile" });
    },
  },
};
</script>
<style lang="less">
.login {
  width: 100%;

  .head {
    width: 100%;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--aquaBgColor);
    .span-icon {
      flex: 1;
      padding-left: 1rem;
      span {
        display: inline-block;

        font-weight: 700;
        color: var(--cardBgColor);
        transform: rotate(90deg);
        font-size: var(--bigSize);
      }
    }
    .head-title {
      flex: 9;
      p {
        color: var(--cardBgColor);
        font-weight: 700;
        font-size: var(--titleSize);
        text-align: center;
      }
    }
  }
}
</style>