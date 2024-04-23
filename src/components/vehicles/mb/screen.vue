<template>
  <div
    :class="[
      'threeScreen',
      finshFirstScreen
        ? finshTwoScreen
          ? 'finshTwoScreen1'
          : 'finshFirstScreen1'
        : htScreen
        ? 'htScreen'
        : ''
    ]"
  >
    <div class="tabbar tabbar-1">
      <img
        class="tabbar-1-xian swiper-lazy"
        data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/jt-1.png"
      />
      <div class="dian-box">
        <div class="dian active"></div>
        <div class="dianx"></div>
      </div>
    </div>
    <div class="tabbar tabbar-2">
      <img
        class="tabbar-1-xian swiper-lazy"
        data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/jt-2.png"
      />
      <div class="dian-box">
        <div class="dian active"></div>
        <div class="dianx"></div>
      </div>
    </div>
    <div class="tabbar tabbar-3">
      <img
        class="tabbar-1-xian swiper-lazy"
        data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/jt-3.png"
      />
      <div class="dian-box">
        <div class="dian active"></div>
        <div class="dianx"></div>
      </div>
    </div>
    <div
      :class="[
        'screen swiper-lazy',
        finshFirstScreen
          ? finshTwoScreen
            ? 'finshFirstScreen finshTwoScreen'
            : 'finshFirstScreen'
          : htScreen
          ? 'htScreen1'
          : ''
      ]"
      data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/screen.jpg"
    ></div>
    <p class="screenTit">三屏互联系统</p>
  </div>
</template>

<script>
export default {
  name: "screen",
  components: {},
  props: {
    finshFirstScreen: {
      type: Boolean,
      default: false
    },
    finshTwoScreen: {
      type: Boolean,
      default: false
    },
    htScreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  created() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@keyframes screenS1 {
  0% {
    transform: translateX(0%) scale(3);
  }
  100% {
    transform: translateX(-85%) scale(3);
  }
}
@keyframes screenS2 {
  0% {
    // transform-origin: 0 0;
    transform: translateY(0%) translateX(-85%) scale(3);
  }
  100% {
    // transform-origin: 0 0;
    transform: translateY(-55%) translateX(-85%) scale(3);
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
@keyframes bottomFn {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 75%;
  }
}
.swiper-slide-active {
  .threeScreen {
    .tabbar-1 {
      opacity: 1;
    }
  }
}
.threeScreen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: AlibabaPuHuiTiR;
  &.htScreen {
    .tabbar-1 {
      transition: all 1.5s linear 2.5s !important;
      opacity: 1 !important;
    }
    .tabbar-2 {
      transition: all 1.5s linear;
      opacity: 0;
    }
    .tabbar-3 {
      opacity: 0;
    }
  }
  &.finshFirstScreen1 {
    .tabbar-1 {
      opacity: 0;
    }
    .tabbar-2 {
      transition: all 1.5s linear 2.5s;
      opacity: 1;
    }
    .tabbar-3 {
      transition: all 1.5s linear;
      opacity: 0;
    }
  }
  &.finshTwoScreen1 {
    .tabbar-1 {
      opacity: 0;
    }
    .tabbar-2 {
      transition: all 1.5s linear;
      opacity: 0;
    }
    .tabbar-3 {
      transition: all 1.5s linear 2.5s;
      opacity: 1;
    }
  }
  .tabbar {
    .dian-box{
      width: 41px;
      height: 41px;
      position: absolute;
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
  }
  .tabbar-1 {
    position: absolute;
    left: 280px;
    top: 210px;
    z-index: 11;
    opacity: 0;
    transition: all 1.5s linear;
    // &.active {
    //   opacity: 1;
    // }
    .tabbar-1-xian {
      width: 300px;
    }
    .dian-box {
      bottom: -10px;
      left: -18px;
    }
  }
  .tabbar-2 {
    position: absolute;
    left: 370px;
    top: 210px;
    z-index: 11;
    opacity: 0;
    .tabbar-1-xian {
      width: 300px;
    }
    .dian-box {
      bottom: -10px;
      left: -18px;
    }
  }
  .tabbar-3 {
    position: absolute;
    right: 120px;
    bottom: 260px;
    z-index: 11;
    opacity: 0;
    .tabbar-1-xian {
      width: 300px;
    }
    .dian-box {
      top: -10px;
      left: -17px;
    }
  }
  .screen {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 42%;
    transform-origin: 50% 50%;
    transform: scale(3);
    position: absolute;
    
    &.htScreen1 {
      transition: all 1s linear 1.5s;
      transform: translateX(0%) scale(3);
    }
    &.finshFirstScreen {
      bottom: 0;
      // animation: screenS1 1s forwards 1.5s;
      transition: all 1s linear 1.5s;
      transform: translateX(-85%) scale(3);
    }
    &.finshTwoScreen {
      // transition: all 1s linear 1.5s;
      transform: translateX(-85%) scale(3);
      bottom: 75%;
      // animation: bottomFn 1s forwards 1.5s;
    }
  }
  .screenTit {
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-family: AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 44px;
    position: absolute;
    bottom: 66px;
    left: 0;
  }
}
</style>
