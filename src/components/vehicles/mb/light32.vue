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
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/light1-1.jpg"
              />
              <p class="light1-1-text">32色智能随动氛围灯</p>
            </swiper-slide>
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/light1-2.jpg"
              />
              <p class="light1-1-text">32色智能随动氛围灯</p>
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
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/music-1.jpg"
              />
              <p class="light2-1-text">剧院级音效</p>
              <p class="light2-1-cons">全车9+1大功率扬声器，WM-Sonic专业</br>调音团队与国际顶级调音师共同开发，精</br>准定位每个扬声器位置，音场更丰富，音</br>质更细腻</p>
            </swiper-slide>
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/music-2.jpg"
              />
              <p class="light2-1-text">后备箱超大空间</p>
              <p class="light2-1-cons">543L基础容量可满足全家人的行李置放;</br>1625L扩展后备箱容量，可以摆放各类大</br>型物品</p>
            </swiper-slide>
            <swiper-slide class="slideItem">
              <img
                src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/music-3.jpg"
              />
              <p class="light2-1-text">后备箱超大空间</p>
              <p class="light2-1-cons">543L基础容量可满足全家人的行李置放;</br>1625L扩展后备箱容量，可以摆放各类大</br>型物品</p>
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
.mySwiper32 {
  height: 100%;
  overflow: hidden;
  background: #fff;
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
      height: 964px;
      .slideItem {
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
      }
      .swiper-pagination-light {
        position: absolute;
        z-index: 1;
      }
    }
  }
  .light32Page-2 {
    padding: 56px 32px 56px;
    position: relative;
    .mySwiperMusicPage {
      height: 1192px;
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
        }
        .light2-1-cons {
          // width: 596px;
          margin: 24px auto 0;
          font-size: 32px;
          font-family: AlibabaPuHuiTiL;
          color: #666666;
          line-height: 44px;
          letter-spacing: 1px;
        }
      }
    }
    .swiper-pagination-music {
      position: absolute;
      z-index: 1;
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
