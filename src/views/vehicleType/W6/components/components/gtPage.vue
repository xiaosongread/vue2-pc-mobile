<template>
  <div class="gtPage">
    <swiper ref="mySwiperGt" :options="swiperOptionGt" class="gtSwipter">
      <swiper-slide class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">高通 SA8155P 处理器</p>
          <p class="cons">国内首款搭载高通SA8155P处理器的量产<br/>智能电动车，强悍的座舱域性能，为娱乐<br/>系统提供强大的计算能力</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/gt-1.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-1">
        <div class="slideItem-text">
          <p class="tit">全域OTA升级</p>
          <p class="cons">支持全车5大领域OTA升级，高速以太网数据传<br/>输，大幅提高升级效率; 采用A/B双区备份机制，<br/>确保升级过程中的安全性; 支持主动升级、预约<br/>升级、手机远控升级等多种升级方式</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/gt-2.jpg"></img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: "gtPage",
  components: {},
  props: {
    gaotongIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOptionGt: {
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
    swiperGt: function() {
      return this.$refs.mySwiperGt.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {
    gaotongIndex(v) {
      console.log("高通处理器子组件切换", v);
      switch (v) {
        case 0:
          this.swiperGt.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperGt.slideTo(1, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.gtPage{
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
      height: 153px;
      // align-items: center;
      flex-direction: column;
      width: 448px;
      margin-right: 139px;
      background: #fff;
    }
    img{
      width: 1091px;
    }
  }
}
</style>