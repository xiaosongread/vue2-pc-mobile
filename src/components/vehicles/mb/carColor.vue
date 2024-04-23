<template>
  <div :class="['colorPageMb', finshFirstColor ? 'colorMove' : '']">
    <p class="colorTit">双色车身 智能灯语</p>
    <p class="colorTit1">灵感双色车身</p>
    <!-- <p class="colorBottomText colorBottomTex1">灵感双色车身</p> -->
    <div class="car360" @click="go360Fn">
      <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/360-1.png">
    </div>
    <swiper
      ref="mySwiperColor"
      :options="swiperOptioncolor"
      class="colorSwipter"
      @slideChange="slideChange"
    >
      <swiper-slide class="slideItem slideItem1-1">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color1.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-2">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color2.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-3">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color3.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-4">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color4.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-5">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color5.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-6">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color6.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-7">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color7.jpg" />
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-8">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/color8.jpg" />
      </swiper-slide>
    </swiper>
    <div slot="pagination" class="swiper-pagination-color1"></div>
    <p class="colorBottomText colorBottomTex2">8种时尚配色</p>
  </div>
</template>

<script>
import Resource from "@/config/resource";
export default {
  name: "colorPageMb",
  components: {},
  props: {
    finshFirstColor: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      carColorIndex: 0,
      swiperOptioncolor: {
        // initialSlide: 0,
        direction: "horizontal",
        // speed: 300,
        // mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        // mousewheelControl: true, //同上
        // mousewheel: {
        //   thresholdDelta: 10,
        //   thresholdTime: 1000,
        //   releaseOnEdges: false //PC端释放滑动
        // },
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        height: window.innerHeight, // 高度设置，占满设备高度
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 300
        // },
        // loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-pagination-color1", //与slot="pagination"处 class 一致
          clickable: true, //轮播按钮支持点击
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
          renderBullet: function(index, className) {
            return (
              '<div class="' + className + " " + className + index + '" ></div>'
            );
          }
        },
        on: {
          slideChangeTransitionStart: function() {}
        }
      },
      top: ""
    };
  },
  computed: {
    swiper: function() {
      return this.$refs.mySwiperColor.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {
    go360Fn() {
      let url = "";
      switch (this.carColorIndex) {
        case 0:
          url = `${Resource.zhiXingHost}/static/3d/360/index.html?car=w6bluepc`;
          break;
        case 1:
          url = `${Resource.zhiXingHost}/static/3d/360/index.html?car=w6graypc`;
          break;
        case 2:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6greenpc`;
          break;
        case 3:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6wwgreenpc`;
          break;
        case 4:
          url = `${Resource.zhiXingHost}/static/3d/360/index.html?car=w6redpc`;
          break;
        case 5:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6orangepc`;
          break;
        case 6:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6blackpc`;
          break;
        case 7:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6whitepc`;
          break;
      }
      window.open(url, "_blank");
    },
    slideChange() {
      const val = this.$refs.mySwiperColor.$swiper.activeIndex;
      this.carColorIndex = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.colorPageMb {
  width: 100%;
  // height: 100%;
  height: calc(100% - 100px);
  position: relative;
  font-family: AlibabaPuHuiTiR;
  .colorTit {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 144px;
    font-size: 42px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #757575;
    line-height: 58px;
    z-index: 10;
  }
  .colorTit1 {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 214px;
    font-size: 36px;
    font-family: AlibabaPuHuiTiR;
    color: #757575;
    line-height: 50px;
    z-index: 10;
  }
  .car360 {
    width: 282px;
    position: absolute;
    top: 294px;
    left: 50%;
    margin-left: -141px;
    z-index: 10;
    // opacity: 0;
    img {
      width: 100%;
    }
  }
  .colorBottomText {
    width: 100%;
    text-align: left;
    text-indent: 57px;
    // position: absolute;
    // bottom: 53px;
    margin-top: -120px;
    font-size: 36px;
    font-family: AlibabaPuHuiTiR;
    color: #757575;
    line-height: 50px;
    z-index: 10;
    &.colorBottomTex2 {
      // opacity: 0;
    }
  }
  &.colorMove{
    .colorBottomTex1{
      opacity: 0;
      transition: opacity 0.5s ease-in;
    }
    .car360 {
      opacity: 1;
      transition: opacity 0.5s ease-in;
    }
    .colorBottomTex2 {
      opacity: 1 !important;
      transition: opacity 0.5s ease-in 0.5s !important;
    }
  }
  .colorSwipter {
    // position: absolute;
    // top: 0;
    // padding-top: 100px;
  }
  .slideItem {
    width: 100%;
    height: 960px;
    display: flex;
    // align-items: center;
    // justify-content: center;
    // background-attachment: fixed;
    // overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  // .swiper-pagination-color1 {
  //   width: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   position: absolute;
  //   bottom: 102px;
  //   z-index: 11;
  //   // opacity: 0;
  //   .my-bullet {
  //     flex: 1;
  //     .btn-tit {
  //       font-size: 24px;
  //       font-family: AlibabaPuHuiTiR;
  //       color: #757575;
  //       line-height: 33px;
  //       margin-bottom: 11px;
  //     }
  //     .btn-cons {
  //       font-size: 24px;
  //       font-family: AlibabaPuHuiTiL;
  //       color: #757575;
  //       line-height: 33px;
  //       letter-spacing: 1px;
  //     }
  //   }
  // }
}
</style>

<style lang="scss">
.colorPageMb {
  &.colorMove {
    .swiper-pagination-color1 {
      opacity: 1 !important;
      transition: opacity 0.5s ease-in 0.5s !important;
    }
  }
  .swiper-pagination-color1 {
    // width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // position: absolute;
    // bottom: 102px;
    // z-index: 1;
    // opacity: 0;
    margin-top: 126px;
    margin-left: 30px;
    .my-bullet {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 2px solid #FFFFFF;
      cursor: pointer;
      margin: 0 24px;
      position: relative;
      &::before {
        display: block;
        position: absolute;
        bottom: -48px;
        margin-left: -44px;
        left: 100%;
        width: 105px;
        text-align: center;
        font-size: 16px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 22px;
      }
      &.my-bullet-active {
        width: 30px;
        height: 30px;
        &::before {
          bottom: -43px;
        }
        &.my-bullet0 {
          background: #476B8D;
          &::before {
            content: "探索蓝";
          }
        }
        &.my-bullet1{
          background: #464C4D;
          &::before{
            content: "无极灰";
          }
        }
        &.my-bullet2{
          background: #B4BFA5;
          &::before{
            content: "晨曦绿";
          }
        }
        &.my-bullet3{
          background: #3E4439;
          &::before{
            content: "无畏绿";
          }
        }
        &.my-bullet4{
          background: #A0212D;
          &::before{
            content: "电磁红";
          }
        }
        &.my-bullet5{
          background: #E44326;
          &::before{
            content: "竞速橙";
          }
        }
        &.my-bullet6{
          background: #151616;
          &::before{
            content: "星际黑";
          }
        }
        &.my-bullet7{
          background: #DCDCDC;
          &::before{
            content: "灵感白";
          }
        }
      }
      &.my-bullet0 {
        background: #476B8D;
        &::before {
          // content: "探索蓝";
        }
      }
      &.my-bullet1{
        background: #464C4D;
        &::before{
          // content: "无极灰";
        }
      }
      &.my-bullet2{
        background: #B4BFA5;
        &::before{
          // content: "晨曦绿";
        }
      }
      &.my-bullet3{
        background: #3E4439;
        &::before{
          // content: "无畏绿";
        }
      }
      &.my-bullet4{
        background: #A0212D;
        &::before{
          // content: "电磁红";
        }
      }
      &.my-bullet5{
        background: #E44326;
        &::before{
          // content: "竞速橙";
        }
      }
      &.my-bullet6{
        background: #151616;
        &::before{
          // content: "星际黑";
        }
      }
      &.my-bullet7{
        background: #DCDCDC;
        &::before{
          // content: "灵感白";
        }
      }
      .btn-tit{
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        line-height: 33px;
        margin-bottom: 11px;
      }
      .btn-cons{
        font-size: 24px;
        font-family: AlibabaPuHuiTiL;
        line-height: 33px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
