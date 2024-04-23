<template>
  <div :class="['colorPage', finshFirstColor ? 'colorMove' : '']">
    <p class="colorTit">双色车身 智能灯语</p>
    <div class="car360" @click="go360Fn">
      <!-- <img src="https://cos-data.wm-imotor.com/website/W6/pc/w6/360-1.png"> -->
    </div>
    <!-- @slideChange="slideChange" -->
    <swiper
      ref="mySwiperColor"
      :options="swiperOptioncolor"
      class="colorSwipter"
    >
      <swiper-slide
        class="slideItem slideItem1-1 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-11.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-2.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-2 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-2.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-3.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-3 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-3.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-4.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-4 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-4.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-5.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-5 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-5.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-6.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-6 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-6.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-7.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-7 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-7.jpg"></img>
      </swiper-slide>
        <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-8.jpg" -->
      <swiper-slide
        class="slideItem slideItem1-8 swiper-lazy"
      >
        <img class="swiper-lazy carImg" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/color-8.jpg"></img>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination-color"></div>
    </swiper>
    <p class="colorBottomText colorBottomTex1">灵感双色车身</p>
    <p class="colorBottomText colorBottomTex2">8种时尚配色</p>
  </div>
</template>

<script>
import Resource from "@/config/resource";
let _that;
export default {
  name: "colorPage",
  components: {},
  props: {
    finshFirstColor: {
      type: Boolean,
      default: false
    },
    carColorIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
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
          el: ".swiper-pagination-color", //与slot="pagination"处 class 一致
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
          slideChangeTransitionStart: function() {
            _that.$emit("clickChange", this.activeIndex);
          },
          resize() {
            console.log("resize-carColor", this.update);
            this.update();
          }
        }
      },
      top: ""
    };
  },
  computed: {
    swiperCarColor: function() {
      return this.$refs.mySwiperColor.$swiper;
    }
  },
  mounted() {},
  created() {
    _that = this;
  },
  watch: {
    carColorIndex(v) {
      console.log('车颜色子组件切换', v)
      switch (v) {
        case 0:
          this.swiperCarColor.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperCarColor.slideTo(1, 1000, false);
          return;
        case 2:
          this.swiperCarColor.slideTo(2, 1000, false);
          return;
        case 3:
          this.swiperCarColor.slideTo(3, 1000, false);
          return;
        case 4:
          this.swiperCarColor.slideTo(4, 1000, false);
          return;
        case 5:
          this.swiperCarColor.slideTo(5, 1000, false);
          return;
        case 6:
          this.swiperCarColor.slideTo(6, 1000, false);
          return;
        case 7:
          this.swiperCarColor.slideTo(7, 1000, false);
          return;
      }
    }
  },
  methods: {
    go360Fn() {
      let url = "";
      switch (this.carColorIndex) {
        case 0:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6bluepc`;
          break;
        case 1:
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6graypc`;
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
          url = `${
            Resource.zhiXingHost
          }/static/3d/360/index.html?car=w6redpc`;
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
      // const val = this.$refs.mySwiperColor.activeIndex;
      // this.activeIndex = val - 5;
    }
  }
};
</script>
<style lang="scss" scoped>
.colorPage {
  width: 100%;
  height: 100%;
  position: relative;
  .colorTit {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 171px;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #757575;
    line-height: 50px;
    z-index: 10;
  }
  .car360 {
    width: 186px;
    height: 90px;
    position: absolute;
    top: 240px;
    left: 50%;
    margin-left: -93px;
    z-index: 10;
    background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/360-3.png") no-repeat;
    background-size: 100%;
    opacity: 0;
    cursor: pointer;
    // img {
    //   width: 100%;
    // }
    &:hover {
      background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/360-4.png") no-repeat;
      background-size: 100%;
    }
  }
  .colorBottomText {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 53px;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #757575;
    line-height: 33px;
    z-index: 10;
    &.colorBottomTex2 {
      opacity: 0;
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
  .slideItem {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    overflow: hidden;
    &.slideItem1-1 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-1.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-2 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-2.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-3 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-3.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-4 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-4.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-5 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-5.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-6 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-6.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-7 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-7.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    &.slideItem1-8 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/color-8.png") no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    .carImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper-pagination-color {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 102px;
    z-index: 1;
    opacity: 0;
    .my-bullet {
      flex: 1;
      .btn-tit {
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        line-height: 33px;
        margin-bottom: 11px;
      }
      .btn-cons {
        font-size: 24px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 33px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>

<style lang="scss">
.colorPage {
  &.colorMove {
    .swiper-pagination-color {
      opacity: 1 !important;
      transition: opacity 0.5s ease-in 0.5s !important;
    }
  }
  .swiper-pagination-color {
    // width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 102px;
    z-index: 1;
    opacity: 0;
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
        top: -48px;
        margin-left: -44px;
        left: 50%;
        width: 88px;
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
          top: -43px;
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
