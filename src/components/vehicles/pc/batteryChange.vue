<template>
  <div class="batteryPage">
    <p class="batteryTit">12.3 英寸双屏互动</p>
    <swiper
      ref="swiperBattery"
      :options="swiperOptionBattery"
      class="batterySwipter"
      @slideChange="slideChange"
    >
      <swiper-slide
        v-for="(item, index) in data"
        :key="index"
        class="slideItem slideItem1-1 swiper-lazy"
        :data-background="item.img"
      ></swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
let _that;
const btnHtml = [
  "<div class='btn'><p class='btn-tit'>导航</p><p class='btn-cons'>高德能导航可实时更新</br>显示路况，避开拥堵</p></div>",
  "<div class='btn'><p class='btn-tit'>娱乐</p><p class='btn-cons'>众多娱乐应用</br>丰富车内时光</p></div>",
  "<div class='btn'><p class='btn-tit'>X-CALL</p><p class='btn-cons'>遇到突发事故</br>使用 X-CALL快速救援</p></div>"
];
export default {
  name: "batteryPage",
  components: {},
  props: {
    batteryIndex: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptionBattery: {
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
        pagination: {
          el: ".swiper-pagination", //与slot="pagination"处 class 一致
          clickable: true, //轮播按钮支持点击
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
          renderBullet: function(index, className) {
            return (
              '<div class="' + className + '" >' + btnHtml[index] + "</div>"
            );
          }
        },
        on: {
          slideChangeTransitionStart: function() {
            _that.$emit("clickChange", this.activeIndex);
          }
        }
      },
      top: ""
    };
  },
  computed: {
    swiperBattery: function() {
      return this.$refs.swiperBattery.$swiper;
    }
  },
  mounted() {},
  created() {
    _that = this;
  },
  watch: {
    batteryIndex(v) {
      console.log('电池子组件切换', v)
      switch (v) {
        case 0:
          this.swiperBattery.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperBattery.slideTo(1, 1000, false);
          return;
        case 2:
          this.swiperBattery.slideTo(2, 1000, false);
          return;
      }
    }
  },
  methods: {
    slideChange() {}
  }
};
</script>
<style lang="scss" scoped>
.batteryPage {
  width: 100%;
  height: 100%;
  position: relative;
  .batteryTit{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 171px;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 50px;
    z-index: 10;
  }
  .slideItem {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &.slideItem1-1{
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/battery-1.png") no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    &.slideItem1-2{
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/battery-2.png") no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    &.slideItem1-3{
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/battery-3.png") no-repeat;
      background-size: cover;
      background-position: 50%;
    }
  }
  .swiper-pagination{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .my-bullet{
      flex: 1;
      .btn-tit{
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        line-height: 33px;
        margin-bottom: 11px;
      }
      .btn-cons{
        font-size: 24px;
        font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
        color: #757575;
        line-height: 33px;
        letter-spacing: 1px;
        .battery-tips{
          font-size: 16px;
          font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
          // color: #757575;
          line-height: 22px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.batteryPage {
  .swiper-pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 47px !important;
    .my-bullet{
      flex: 1;
      color: rgba(#F2F2F7, 0.16);
      cursor: pointer;
      .btn-cons{
        .battery-tips{
          // color: rgba(120, 120, 128, 0.16);
        }
      }
      // cursor: pointer;
      &.my-bullet-active {
        color: #F2F2F7;
      }
      .btn-tit{
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        line-height: 33px;
        margin-bottom: 11px;
      }
      .btn-cons{
        font-size: 24px;
        font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
        line-height: 33px;
        letter-spacing: 1px;
        .battery-tips{
          font-size: 16px;
          font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
          // color: #757575;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
