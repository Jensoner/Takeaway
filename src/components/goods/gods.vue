<template>
  <div class="goods">
    <div class="head">
      <div class="avatar-img">
        <img :src="Lists.imgUrl.banner" :alt="Lists.name" />
      </div>
      <div class="head-title">
        <div class="left">
          <h1 class="name">{{ Lists.name }}</h1>
          <p>月售900+起送￥15<span>免配送费￥3</span></p>
        </div>
        <div class="right">
            <p>{{ Lists.distance * 20 }}分钟{{ Lists.distance }}km</p>
        </div>
      </div>
    </div>
    <div class="goodsLists">
        <div class="item" v-for="item in Lists.imgUrl.shopBanner" :key="'index'">
            <div class="img">
                <img :src="item" alt="" srcset="">
            </div>
            <div class="item-title">冰镇柠檬水</div>
            <div class="price">￥<span>12</span></div>
        </div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      Lists: {
        Ptable: {
          address: "",
        },
        id: "12",
        imgUrl: {
          banner:
            "http://127.0.0.1:300/image/business/9543e34f59c343282a8f83926f72f585173498.jpg",
          shopBanner: [
            "http://127.0.0.1:300/image/business/9543e34f59c343282a8f83926f72f585173498.jpg",
            "http://127.0.0.1:300/image/business/9543e34f59c343282a8f83926f72f585173498.jpg",
          ],
        },
        pirce: 12,
        name: "五月花",
        distance: 1.3, //距离
        score: 5, //评分
      },
    };
  },
  // props:['Lists']
};
</script>
<style lang="less" scoped>
.goods {
  width: 100%;
  background-color: var(--cardBgColor);
  .head{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .avatar-img{
        flex: 2;
        position: relative;
        img{
            width:80%;
            height: 3.5rem;
            position: absolute;
            left: 0.3rem;
            border-radius: var(--normal);
        }
    }
    .head-title{
        flex: 7;
        display: flex;
        justify-content: space-between;
        .left{
            h1{
                font-size: var(--titleSize);
                font-weight: 700;
            }
            p{
                color: var(--cardFontColor);
                font-size: var(--normal);
                padding: 0.2rem 0;
                span{
                    color: orange;
                }
            }
        }
        .right{
            padding: 1rem 0;
            color: var(--cardFontColor);
            font-size: var(--side);
            
        }
    }
  }
  .goodsLists{
    width: 80%;
    margin-left: 5rem;
    display: flex;
    .item{
        margin-left: 0.5rem;
        .img{
            width: 5rem;
            img{
                width: 100%;
            }
        }
        .item-title{
            padding-top:0.2rem;
            font-size: var(--side);
        }
        .price{
            padding-top:0.2rem;
            color: orange;
            span{
                font-size: var(--bigSize);
            }
        }
    }
  }
}
</style>