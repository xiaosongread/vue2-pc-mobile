<template>
  <div
    :class="[
      'threeScreen',
      finshScreenFirstMove
        ? finshScreenTwoMove
          ? 'moveScreenTwo moveScreenTwo2'
          : 'moveScreenFirst'
        : ''
    ]"
  >
    <!-- 图片 -->
    <div
      class="threeScreenBgImg swiper-lazy"
      data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/threeScreen-1.jpg"
    ></div>
    <!-- 上面两个箭头 -->
    <div
      class="screen-text-1 swiper-lazy"
      data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/screen-text-1.png"
    >
      <div class="dian-box dian-box1">
        <div class="dian active"></div>
        <div class="dianx"></div>
      </div>
      <div class="dian-box dian-box2">
        <div class="dian active"></div>
        <div class="dianx"></div>
      </div>
    </div>
    <!-- 下面一个箭头 -->
    <div
      class="screen-text-2 swiper-lazy"
      data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/screen-text-2.png"
    >
      <div class="dian-box dian-box3">
        <div class="dian active"></div>
        <div class="dianx"></div>
      </div>
    </div>
    <p class="threeScreen-tit">三屏互联系统</p>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "threeScreen",
  components: {},
  props: {
    finshScreenFirstMove: {
      type: Boolean,
      default: false
    },
    finshScreenTwoMove: {
      type: Boolean,
      default: false
    },
    standard: {
      type: String,
      default: ""
    },
    browserWidth: {
      type: Number,
      default: 0
    },
    browserHeight: {
      type: Number,
      default: 0
    },
    imgSjWidth: {
      type: Number,
      default: 0
    },
    imgSjHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  created() {
    this.setDianTLFn();
  },
  watch: {
    browserHeight() {
      this.setDianTLFn();
    },
    browserWidth() {
      this.setDianTLFn();
    }
  },
  methods: {
    setDianTLFn() {
      console.log('三屏幕联动:', this.standard, this.browserWidth, this.browserHeight)
    }
  }
};
</script>
<style lang="scss" scoped>
.slideItem.swiper-slide.swiper-slide-active {
  @keyframes myScale {
    0% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1.4);
    }
  }
  @keyframes myTranslteY {
    0% {
      transform: translateY(0%) scale(1.4);
    }
    100% {
      transform: translateY(-40%) scale(1.4);
    }
  }
  @keyframes dianHx {
    0% {
      opacity: 0.45;
    }
    25% {
      opacity: 0.55;
    }
    50% {
      opacity: 0.65;
    }
    75% {
      opacity: 0.55;
    }
    100% {
      opacity: 0.45;
    }
  }
  .threeScreen {
    &.moveScreenFirst {
      .threeScreenBgImg {
        transform: scale(1.4);
        transition: all 1s linear;
      }
      .screen-text-1 {
        transition: all 1s linear 1s;
        opacity: 1;
      }
    }
    &.moveScreenTwo {
      .threeScreenBgImg {
        animation: myScale 0s forwards;
      }
    }
    &.moveScreenTwo2 {
      .threeScreenBgImg {
        animation: myTranslteY 1s forwards;
      }
      .screen-text-2 {
        transition: all 1s linear 1s;
        opacity: 1;
      }
    }
  }
}
.threeScreen {
  width: 100%;
  height: 100%;
  position: relative;
  // overflow: hidden;
  .threeScreenBgImg{
    width: 100%;
    height: 100%;
    background-size: cover;
    transform-origin: 80% 0;
    background-position: center;
  }
  .screen-text-1 {
    width: 981px;
    height: 166px;
    background-size: 100%;
    position: absolute;
    top: calc(40% - 235px); // 259 * 1.4
    left: calc(90% - 981px);
    opacity: 0;
  }
  .dian-box {
    width: 41px;
    height: 41px;
    position: absolute;
    &.dian-box1 {
      bottom: -12px;
      left: -20px;
    }
    &.dian-box2 {
      bottom: -20px;
      left: 471px;
    }
    &.dian-box3 {
      bottom: 0px;
      left: 0px;
    }
    .dian {
      width: 41px;
      height: 41px;
      border-radius: 41px;
      background: #D8D8D8;
      opacity: 0.45;
      position: absolute;
      top: 0;
      left: 0;
      animation: dianHx 1s infinite;
    }
    .dianx {
      width: 23px;
      height: 23px;
      border-radius: 23px;
      background: #D8D8D8;
      position: absolute;
      top: 9px;
      left: 9px;
    }
  }
  .screen-text-2 {
    width: 409px;
    height: 103px;
    background-size: 100%;
    position: absolute;
    bottom: 294px;
    left: calc(96% - 439px);
    opacity: 0;
  }
  .threeScreen-tit{
    width: 100%;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 33px;
    position: absolute;
    text-align: center;
    bottom: 96px;
  }
}
</style>
