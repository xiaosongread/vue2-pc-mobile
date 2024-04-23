<template>
  <div class="fivePage">
    <swiper ref="mySwiper5" :options="swiperOption5" class="tcSwipter">
      <swiper-slide class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">360°全景影像</p>
          <p class="cons">坐在车里也可获得360°全景鸟瞰影像；窥知<br/>周围场景，消除驾驶盲区，一切尽在掌握</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tc-4.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-1">
        <div class="slideItem-text">
          <p class="tit">遥控泊车辅助(RPA)&自动泊车辅助(APA)</p>
          <p class="cons">针对垂直、侧方等难停车位及狭窄车位，<br/>一键即可完成泊入泊出</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tc-1.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-2">
        <div class="slideItem-text">
          <p class="tit">固定车位记忆泊车（HAVP）</p>
          <p class="cons">面对住宅等固定停车位，仅需学习一次泊车路<br/>线，即可精准自动泊入，回家的路它自己走</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tc-2.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-3">
        <div class="slideItem-text">
          <p class="tit">公共停车场免学习自主泊车（PAVP）</p>
          <p class="cons">针对商场、超市等公共停车位，可自动寻找车<br/>位、泊入车位，首次到访也可下车即走，召之<br/>即来</p>
          <p class="tips">*后续将通过OTA推送升级</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tc-3.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-3">
        <div class="slideItem-text">
          <p class="tit">30项高阶智驾辅助</p>
          <p class="cons">30项高级智能驾驶辅助，包括自动跟车、<br/>车道保持、拨杆变道等，高速、 城区等<br/>高频使用场景下，行车更轻松、更安全</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tc-0.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-3">
        <div class="slideItem-text">
          <p class="tit">23颗顶级传感器</p>
          <p class="cons">搭载6颗高清摄像头、5颗毫米波雷达、12颗超<br/>声波雷达，360度全方位立体感知周边环境</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tc-5.jpg"></img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: "fivePage",
  components: {},
  props: {
    index360: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOption5: {
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
    swiper5: function() {
      return this.$refs.mySwiper5.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {
    index360(v) {
      console.log("360子组件切换", v);
      switch (v) {
        case 0:
          this.swiper5.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiper5.slideTo(1, 1000, false);
          return;
        case 2:
          this.swiper5.slideTo(2, 1000, false);
          return;
        case 3:
          this.swiper5.slideTo(3, 1000, false);
          return;
        case 4:
          this.swiper5.slideTo(4, 1000, false);
          return;
        case 5:
          this.swiper5.slideTo(5, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.fivePage{
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
    .tips{
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
      width: 432px;
      margin-right: 139px;
      background: #fff;
    }
    img{
      width: 1091px;
    }
  }
}
</style>