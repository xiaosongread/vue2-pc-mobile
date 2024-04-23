<template>
  <swiper ref="mySwiper32" class="mySwiper32" :options="swiperOption32">
    <swiper-slide class="slideItem">
      <div class="light32Page no">
        <div class="light32Page-1">
          <swiper
            ref="mySwiperLight32Page-1"
            class="mySwiperLight32Page-1"
            :options="swiperOptionLight32Page1"
          >
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/shentai-1.jpg"
              />
              <p class="light1-1-text">丰富的娱乐生态</p>
              <p class="light1-2-cons">海量娱乐应用，让旅途想唱就唱，想听就听，想看就看</p>
            </swiper-slide>
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/shentai-2.jpg"
              />
              <p class="light1-1-text">移动的唱吧</p>
              <p class="light1-2-cons">拥有80万首云端正版曲库，剧院级音效，支持双人对唱</p>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination-light"></div>
          </swiper>
        </div>
        <div class="light32Page-2">
          <swiper
            ref="mySwiperMusicPage"
            class="mySwiperMusicPage"
            :options="swiperOptionMusicPage"
          >
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/gaotong-1.jpg"
              />
              <p class="light2-1-text">高通 SA8155P 处理器</p>
              <p class="light2-1-cons">国内首款搭载高通SA8155P处理器的量产智能电动车，强悍的座舱域性能，为娱乐系统提供强大的计算能力</p>
            </swiper-slide>
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/gaotong-2.jpg"
              />
              <p class="light2-1-text">全域OTA升级</p>
              <p class="light2-1-cons">支持全车5大领域OTA升级，高速以</br>太网数据传输，大幅提高升级效率</p>
              <p class="light2-1-cons consMore">采用A/B双区备份机制，确保升级</br>过程中的安全性</p>
              <p class="light2-1-cons consMore">支持主动升级、预约升级、手机远</br>控升级等多种升级方式</p>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination-music"></div>
          </swiper>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";
export default {
  name: "light32Page",
  components: {},
  props: {
    finshFirstZz: {
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
      swiperOptionLight32Page1: {
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
.mySwiper32{
  height: calc(100vh - 100px);
  padding-bottom: 70px;
  overflow: hidden;
}
.light32Page {
  width: 100%;
  height: auto;
  background: #fff;
  position: relative;
  overflow-y: scroll;
  font-family: AlibabaPuHuiTiR;
  .light32Page-1 {
    padding: 108px 32px 56px;
    .mySwiperLight32Page-1 {
      height: 1104px;
      .slideItem {
        background: #fff;
        img {
          width: 684px;
          display: block;
        }
        .light1-1-text{
          font-size: 32px;
          font-family: AlibabaPuHuiTiR;
          color: #757575;
          line-height: 44px;
          margin-top: 23px;
        }
        .light1-2-cons {
          width: 596px;
          margin: 24px auto 0;
          font-size: 32px;
          font-family: AlibabaPuHuiTiL;
          color: #666666;
          line-height: 44px;
          letter-spacing: 1px;
        }
      }
      .swiper-pagination-light {
        position: absolute;
        z-index: 1;
      }
    }
  }
  .light32Page-2 {
    padding: 56px 32px 0;
    .mySwiperMusicPage {
      height: 1404px;
      .slideItem {
        background: #fff;
        img {
          width: 684px;
        }
        .light2-1-text {
          font-size: 32px;
          font-family: AlibabaPuHuiTiR;
          color: #757575;
          line-height: 44px;
          margin-top: 23px;
          &.consMore {
            margin-top: 18px;
          }
        }
        .light2-1-cons {
          width: 596px;
          margin: 24px auto 0;
          font-size: 32px;
          font-family: AlibabaPuHuiTiL;
          color: #666666;
          line-height: 44px;
          letter-spacing: 1px;
        }
      }
      .swiper-pagination-music {
        position: absolute;
        z-index: 1;
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
