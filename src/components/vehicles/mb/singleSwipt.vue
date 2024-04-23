<template>
  <div class="singlePage no">
    <div class="singlePage-1">
      <swiper
        ref="mySwipersinglePage-1"
        class="mySwipersinglePage-1"
        :options="swiperOptionsinglePage1"
      >
        <swiper-slide
          class="slideItem"
          v-for="(item, index) in listData"
          :key="index"
        >
          <img
            :class="['swiper-lazy', imgFit ? 'imgFit' : '']"
            :data-src="item.url"
          />
          <p v-if="item.imgTit" class="imgTit">{{ item.imgTit }}</p>
          <p v-if="item.tit" class="light1-1-text">{{ item.tit }}</p>
          <p v-if="item.cons" class="light1-2-text" v-html="item.cons"></p>
          <p v-if="item.cons1" class="light1-2-text" v-html="item.cons1"></p>
          <p v-if="item.cons2" class="light1-2-text" v-html="item.cons2"></p>
          <p v-if="item.tips" class="tips">{{ item.tips }}</p>
        </swiper-slide>
        <div
          v-if="listData.length >= 2"
          slot="pagination"
          class="swiper-pagination-light"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";
export default {
  name: "single",
  components: {},
  props: {
    listData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    imgFit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      swiperOption32: {
        direction: 'vertical',
        nested: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: { el: '.swiper-scrollbar' }
      },
      swiperOptionsinglePage1: {
        direction: "horizontal",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        height: window.innerHeight, // 高度设置，占满设备高度
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-pagination-light" //与slot="pagination"处 class 一致
        },
        on: {
          slideChange: function() {}
        }
      },
      swiperOptionMusicPage: {
        direction: "horizontal",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        height: window.innerHeight, // 高度设置，占满设备高度
        effect: "fade",
        fadeEffect: {
          crossFade: false
        },
        pagination: {
          el: ".swiper-pagination-music" //与slot="pagination"处 class 一致
        },
        on: {
          slideChange: function() {}
        }
      }
    };
  },
  computed: {
    swiper: function() {
      return this.$refs.mySwiper.$swiper1;
    },
    swiper1: function() {
      return this.$refs.mySwiperMusicPage.$swiper1;
    }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.singlePage {
  width: 100%;
  height: 100%;
  // height: calc(100% - 100px);
  background: #fff;
  position: relative;
  overflow-y: scroll;
  font-family: AlibabaPuHuiTiR;
  .singlePage-1 {
    padding: 50px 32px 56px;
    .mySwipersinglePage-1 {
      .slideItem {
        position: relative;
        background: #fff;
        .imgTit {
          width: 100%;
          text-align: center;
          position: absolute;
          top: 65px;
          font-size: 42px;
          font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
          font-weight: 300;
          color: #757575;
          line-height: 58px;
        }
        img {
          width: 684px;
          height: 730px;
          &.imgFit {
            height: 630px;
            object-fit: cover;
            display: block;
          }
        }
        .light1-1-text {
          font-size: 32px;
          font-family: AlibabaPuHuiTiR;
          color: #757575;
          line-height: 44px;
          margin-top: 23px;
        }
        .light1-2-text {
          // padding: 0 62px;
          font-size: 32px;
          font-family: AlibabaPuHuiTiL;
          color: #666666;
          line-height: 44px;
          letter-spacing: 1px;
          margin-top: 24px;
        }
        .tips {
          text-align: center;
          font-size: 16px;
          font-family: AlibabaPuHuiTiL;
          color: #757575;
          line-height: 22px;
          margin-top: 36px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination-bullet {
  width: 20px !important;
  height: 20px !important;
  background: #D8D8D8 !important;
  opacity: 1;
  margin: 0 10px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #48484A !important;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  margin-top: 68px;
}
</style>
