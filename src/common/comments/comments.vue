<template>
  <div class="comments">
    <div class="comment-section">
      <div class="comment" v-for="item in comments" :key="item.id">
        <div class="header">
          <img class="avatar" :src="item.image_path" :alt="item.name" />
          <span class="name">{{ item.name }}</span>
        </div>
        <div class="img" v-if="item.img.length > 0">
          <img
            v-for="(tem, index) in item.img"
            :key="index"
            :src="tem"
          />
        </div>
        <div class="content">
          {{ item.comment }}
        </div>
        <div class="timestamp">{{ item.time }}&nbsp;{{ item.timeItem }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: "123",
    };
  },
  created() {
    this.comments = this.$store.state.comments;
    console.log(this.comments);
  },
};
</script>
<style lang="less" scoped>
/* 外卖评论区样式 */
.comment-section {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;

  .comment {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .name {
        font-weight: bold;
      }
    }
    .img {
      display: flex;
      padding: 0.5rem 0;
      img {
        border-radius: var(--normal);
        width: 3rem;
        height: 3rem;
        margin-left: 0.2rem;
      }
    }
    .content {
      color: #666;
    }

    .timestamp {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>