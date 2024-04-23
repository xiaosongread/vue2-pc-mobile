<template>
  <div class="dialog" v-if="dialogStatus">
    <div
      class="closeIcon"
      @click="update_dialog_status({ dialogStatus: false })"
    >
      ×
    </div>
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <div class="swiper-pagination" slot="pagination"></div>
      <swiper-slide v-for="(item, index) in data" :key="index">
        <div class="img-container">
          <img
            class="img"
            v-lazy="item.mbBg"
            lazy="loading"
            data-test="test"
            :alt="item.details | descFilter"
          />
        </div>
        <div class="details">
          <div class="item" v-for="(v, k) in item.details" :key="k">
            <div class="title" v-if="v.title" v-html="v.title"></div>
            <div class="subtitle" v-if="v.subTitle" v-html="v.subTitle" />
            <div class="desc" v-html="v.desc"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    data: {
      /* 移动端弹窗结构如下*/
      // [
      //     {
      //       bg: "", //背景图
      //       title: "", //标题
      //       mbTitle: "" //如果移动端跟PC不一样可以传
      //       mbSubtitle: "" //副标题
      //       desc: "" //简介
      //     }
      // ]
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false, // 自动轮播
        speed: 1000, // 轮播速度
        loop: false,
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChangeTransitionEnd: () => {
            // 切换结束时
            console.log(this.$refs.mySwiper);
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    /*newobj() {
      var newobj = this.data.map(function(item) {
        var reg = new RegExp("<br>", "g");
        if (item.isBR) {
          item.desc = item.desc;
        } else {
          if (item.desc) {
            item.desc = item.desc.replace(reg, "");
          }
        }
        return item;
      });
      return newobj;
    },*/
    ImageList() {
      var arr = this.data.map(function(item) {
        return item.bg;
      });
      return arr;
    }
  },
  filters: {
    descFilter(v) {
      let str = "";
      v.map(i => {
        str += i.title + i.subTitle + i.desc;
      });
      return str;
    }
  },
  methods: {
    ...mapActions(["update_dialog_status"])
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  color: rgb(15, 15, 15);
  z-index: 999;
  background: #fcfcfc;
  //background-color: #30B489;
  height: calc(100vh - 100px);
  .swiper {
    width: 100%;
    height: 100%;
    text-align: left;
    .img-container {
      height: 540px;
      .img {
        width: 100vw;
        height: 540px;
        min-width: 540px;
        object-fit: cover;
        position: relative;
        &[lazy="loading"] {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 540px;
          position: absolute;
          top: 220px;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .swiper-pagination-bullets {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .details {
      height: calc(100vh - 640px);
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      box-sizing: border-box;
      padding: 0 56px;
      .item {
        .title {
          padding-top: 36px;
          font-size: 48px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #666666;
          line-height: 60px;
        }
        .subtitle {
          font-size: 28px;
          font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #999999;
          line-height: 40px;
        }
        .desc {
          padding-top: 30px;
          font-size: 26px;
          font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #999999;
          line-height: 46px;
          overflow-y: scroll;
        }
        &:nth-child(n + 2) {
          .title {
            margin-top: 24px;
          }
        }
      }
    }
    .swiper-pagination {
      width: 230px !important;
      height: 28px;
      line-height: 28px;
      margin-left: 270px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 14px;
      top: 484px;
      padding-left: 8px;
      padding-right: 8px;
    }
    /deep/ .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #ffffff;
      opacity: 1;
    }
    /deep/ .swiper-pagination-bullet-active {
      background: #ffffff;
      width: 16px;
      height: 16px;
    }
  }
  .closeIcon {
    width: 40px;
    height: 40px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    line-height: 40px;
    border-radius: 50%;
    font-size: 40px;
    color: #ffffff;
    position: absolute;
    z-index: 10;
    top: 36px;
    right: 42px;
  }
}
</style>
<style lang="scss">
.el-image-viewer__close {
  top: 120px !important;
  right: 20px;
}
</style>
