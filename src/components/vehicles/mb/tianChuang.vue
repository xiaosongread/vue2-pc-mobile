<template>
  <div :class="['fourPage', finshFourMove ? 'moveFour' : '']">
    <div
      class="fourBgImg swiper-lazy"
      data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/tianchuang.jpg"
    ></div>
    <p class="four-1-tit">
      <span>精致空间 </span>
      <span>实用大气</span>
    </p>
    <p class="four-1-tit1">
      <span>精致空间 </span>
      <span>实用大气</span>
    </p>
    <p class="four-1-text">超大全景天窗</p>
    <div class="four-2-text">
      <p class="four-2-text-1">Nappa真皮座椅</p>
      <p class="four-2-text-2">主驾支持6向电动调节，<br>并支持座椅记忆;<br>
副驾可4向电动调节，前排支持座椅<br>加热；后座支持3种角度调节;</p>
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
    finshFourMove: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.fourPage{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  font-family: AlibabaPuHuiTiR;
  .fourBgImg{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: 50%;
    transform: scale(4);
    transform-origin: 50% 0;
    transition: all 1s linear;
  }
  .four-1-tit{
    width: 100%;
    font-size: 42px;
    color: #F2F2F7;
    position: absolute;
    text-align: center;
    top: 194px;
    opacity: 0;
    transition: all 1s linear 2s;
    z-index: 10;
  }
  .four-1-tit1{
    width: 100%;
    font-size: 42px;
    color: #F2F2F7;
    position: absolute;
    text-align: center;
    top: 194px;
    opacity: 0;
    transition: all 1s linear 2s;
    z-index: 10;
  }
  .four-1-text{
    width: 100%;
    font-size: 36px;
    color: #F2F2F7;
    position: absolute;
    text-align: center;
    bottom: 266px;
    opacity: 0;
    transition: all 1s linear 2s;
    z-index: 10;
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
    // opacity: 0;
    transition: all 1s linear 1s;
    .four-2-text-1{
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 267px;
      font-size: 36px;
      font-family: AlibabaPuHuiTiR;
      color: #E5E5EA;
      line-height: 50px;
      opacity: 0;
      transition: all 1s linear 1s;
    }
    .four-2-text-2{
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 68px;
      font-size: 32px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #F2F2F7;
      line-height: 44px;
      letter-spacing: 1px;
      opacity: 0;
      transition: all 1s linear 1s;
    }
  }
}
.swiper-slide.swiper-slide-active {
  .fourPage {
    .fourBgImg {
      transform: scale(1.5);
    }
    .four-1-tit,
    .four-1-text {
      opacity: 1;
    }
  }
}
.fourPage.moveFour {
  .fourBgImg {
    transform: translateY(-50%) scale(1.5) !important;
    transition: all 1s linear;
  }
  .four-1-tit,
  .four-1-text {
    transition: all 0s linear;
    opacity: 0 !important;
  }
  .four-1-tit1 {
    transition: all 1s linear 1s;
    opacity: 1 !important;
  }
  .four-2-text-1,.four-2-text-2{
    opacity: 1;
  }
}
</style>
