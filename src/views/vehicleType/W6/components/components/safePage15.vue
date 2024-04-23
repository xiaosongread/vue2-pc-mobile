<template>
  <div class="safePage15">
    <swiper ref="mySwiperSafe15" :options="swiperOptionsafe15" class="SwipterswiperSafe15">
      <swiper-slide class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">15项安全驾驶辅助</p>
          <p class="cons">全方位实时侦测预警，通过AEB自动紧急制<br/>动，BSD盲区监测预警、 DOW车门开启预<br/>警等多项安全驾驶辅助功能，提前感知规避<br/>危险</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/safePage15-1.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-1">
        <div class="slideItem-text">
          <p class="tit">C-NCAP五星安全标准设计</p>
          <p class="cons">采用塔式车身结构，超高强度车身设计，<br/>400Mpa以上高强度钢材占比75.2%，<br/>1500Mpa热成型钢占比12%；配备前后一<br/>体式侧窗安全气帘，安全防护无死角</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/safePage15-2.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-2">
        <div class="slideItem-text">
          <p class="tit">CleanPro健康头等舱</p>
          <p class="cons">AQS车外空气质量监测系统、PM2.5主动监<br/>测系统、CN95微米空气过滤系统、负离子<br/>空气净化系统、UVC感应式净舱功能，五重<br/>守护提供全面安心的驾乘体验</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/safePage15-3.jpg"></img>
      </swiper-slide>
     </swiper>
  </div>
</template>

<script>

export default {
  name: "safePage15",
  components: {},
  props: {
    safePage15Index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOptionsafe15: {
        direction: "vertical",
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
        touchReleaseOnEdges:true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        // height: window.innerHeight, // 高度设置，占满设备高度
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 300
        // },
        // loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: false
        },
        on: {
          slideChangeTransitionStart: function() {

          }
        }
      },
      top: ""
    };
  },
  computed: {
    swiperSafe15: function() {
      return this.$refs.mySwiperSafe15.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {
    safePage15Index(v) {
      console.log("15项安全辅助驾驶-子组件切换", v);
      switch (v) {
        case 0:
          this.swiperSafe15.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperSafe15.slideTo(1, 1000, false);
          return;
        case 2:
          this.swiperSafe15.slideTo(2, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.safePage15{
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-container{
    width: 100%;
    height: 100vh;
  }
  .slideItem{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #fff;
    .tit{
      font-size: 24px;
      font-family: AlibabaPuHuiTiR;
      color: #757575;
      line-height: 33px;
      margin-bottom: 30px;
    }
    .cons{
      font-size: 21px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 30px;
    }
    .tip{
      font-size: 16px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 24px;
      margin-top: 8px;
    }
    .slideItem-text{
      display: flex;
      // align-items: center;
      flex-direction: column;
      width: 418px;
      height: 153px;
      margin-right: 139px;
      background: #fff;
    }
    img{
      width: 1091px;
    }
  }
}
</style>