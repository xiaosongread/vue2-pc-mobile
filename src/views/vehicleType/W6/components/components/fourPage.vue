<template>
  <div :class="['fourPage', finshFourMove ? 'moveFour' : '']">
    <!-- data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/tianchuang.jpg" -->
    <!-- :style="finshFourMove ? 'transform: scale(1.35) translateY(-('+ transformYPx +'px));' : ''" -->
    <div class="fourBgImg swiper-lazy" :style="finshFourMove ? 'transform: scale(1.35) translateY(-'+transformYPx+'px)' : ''" >
      <img src="https://cos-data.wm-imotor.com/website/W6/pc/w6/tianchuang.jpg">
    </div>
    <p class="four-1-tit">
      <span>精致空间 </span>
      <span>实用大气</span>
    </p>
    <p class="four-1-text">超大全景天窗</p>
    <div class="four-2-text">
      <p class="four-2-text-1">Nappa真皮座椅</p>
      <p class="four-2-text-2">主驾支持6向电动调节，并支持座椅记忆;</br>
副驾可4向电动调节，前排支持座椅加热；后座支持3种角度调节;</p>
    </div>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "fourPage",
  components: {},
  props: {
    // finshScale: {
    //   type: Boolean,
    //   default: false
    // },
    finshFourMove: {
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
    return {
      transformYPx: 0
    };
  },
  computed: {
  },
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
      console.log('forPage:', this.standard, this.browserWidth, this.browserHeight)
      // let bl = this.browserWidth / 1920;
      // var scaleImgHeight = 1177 * bl * 1.35

      var scaleImgHeight = 1177 * this.browserWidth * 1.35 / 1920
      // console.log('bl:', bl)
      this.transformYPx = Math.floor(scaleImgHeight - this.browserHeight) / 2
      console.log('图片实际扩大后的高度', scaleImgHeight, this.transformYPx)
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes firstChange{
  0%{
    transform:scale(10);
  }
  100% {
    transform:scale(1.35);
  }
}
@keyframes moveTc{
  0%{
    transform: scale(1.35) translateY(0);
  }
  100% {
    transform: scale(1.35) translateY(-(166px));
  }
}
.swiper-slide-active {
  .fourPage{
    .fourBgImg{
      transform:scale(1.35);
      transition: transform 1.5s ease-in;
    }
    .four-1-tit,.four-1-text{
      opacity: 1;
    }
  }
}
.fourPage{
  &.moveFour{
    .fourBgImg{
      // animation: moveTc 1s forwards;
      // transform: scale(1.35) translateY(-(181px));
      transition: transform 1s ease-in;
    }
    .four-1-tit,.four-1-text{
      transition: all 0s ease-in;
      opacity: 0;
    }
    .four-2-text{
      opacity: 1;
    }
  }
}
.fourPage{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .fourBgImg{
    width: 100%;
    height: 100%;
    transform:scale(10);
    transform-origin: 50% 0;
    transition: all 1s ease-in;
    img{
      width: 100%;
    }
  }
  .four-1-tit{
    width: 100%;
    font-size: 36px;
    color: #F2F2F7;
    position: absolute;
    text-align: center;
    top: 150px;
    opacity: 0;
    font-family: AlibabaPuHuiTiL;
    transition: all 1s ease-in 2s;
  }
  .four-1-text{
    width: 100%;
    font-size: 24px;
    color: #F2F2F7;
    position: absolute;
    text-align: center;
    bottom: 88px;
    opacity: 0;
    font-family: AlibabaPuHuiTiL;
    transition: all 1s ease-in 2s;
  }
  .four-2-text{
    width: 100%;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 35px;
    text-align: center;
    opacity: 0;
    transition: all 1s ease-in 1s;
    .four-2-text-1{
      font-size: 24px;
      font-family: AlibabaPuHuiTiR;
      color: #E5E5EA;
      line-height: 33px;
      margin-bottom: 11px;
    }
  }
}
</style>
