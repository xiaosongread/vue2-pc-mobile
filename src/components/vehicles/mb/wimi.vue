<template>
  <div :class="['wimiPage', showWimi ? 'changeBox' : '']">
    <div class="wimiPage-top">
      <img :class="['wimi-tit swiper-lazy', finshWimi ? 'textopen' : '']" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/wimi-1.png"></img>
      <p :class="['wimi-text-1',  finshWimi ? 'textopen' : '']">威马全新语音助手——wimi</p>
      <p :class="['wimi-text-2',  finshWimi ? 'textopen' : '']">可控制车控、娱乐与信息查询等超百项功能；车内双声</br>源麦克风，可精准识别主副驾的不同需求;</br>
一句话让车机连续执行三个指令，大幅提高声控效率;</p>
    </div>
    <div :class="['wimiPage-bottom', finshlogo ? 'logopy logoremote' : '']">
      <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/wimi-2.png"></img>
    </div>
  </div>
</template>

<script>
export default {
  name: "wimiPage",
  components: {},
  props: {
    finshWimi: {
      type: Boolean,
      default: true
    },
    finshlogo: {
      type: Boolean,
      default: true
    },
    showWimi: {
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
@keyframes wimiMove {
  0% {
    bottom: -610px;
    transform: rotate(0);
  }
  50% {
    bottom: -300px;
    transform: rotate(0);
  }
  100% {
    bottom: -300px;
    transform: rotate(-10deg);
  }
}
.wimiPage.changeBox {
  .wimiPage-top{
    .wimi-tit{
      &.textopen{
        transition: all 1s ease-in;
        transform: scale(1);
      }
    }
    .wimi-text-1{
      &.textopen{
        transition: all 1s ease-in 1s;
        opacity: 1;
      }
    }
    .wimi-text-2{
      &.textopen{
        transition: all 1s ease-in 2s;
        opacity: 1;
      }
    }
  }
  .wimiPage-bottom{
    &.logoremote {
      animation: wimiMove 2s forwards 3s;
    }
  }
}
.wimiPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  font-family: AlibabaPuHuiTiR;
  .wimiPage-top{
    .wimi-tit{
      width: 608px;
      margin: 164px auto 80px;
      display: block;
      transform: scale(4);
      transform-origin: 50% 50%;
      // transition: all 1s ease-in;
      // &.textopen{
      //   transform: scale(1);
      // }
    }
    .wimi-text-1{
      text-align: center;
      font-size: 36px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #8B93D8;
      line-height: 50px;
      margin-top: 80px;
      opacity: 0;
      // transition: all 1s ease-in 1s;
      // &.textopen{
      //   opacity: 1;
      // }
    }
    .wimi-text-2{
      text-align: center;
      font-size: 24px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 33px;
      letter-spacing: 1px;
      margin-top: 31px;
      opacity: 0;
      // transition: all 1s ease-in 1s;
      // &.textopen{
      //   opacity: 1;
      // }
    }
  }
  .wimiPage-bottom{
    width: 582px;
    position: absolute;
    bottom: -610px;
    left: 50%;
    margin-left: -291px;
    img{
      width: 100%;
      height: 100%;
    }
    // &.logoremote {
    //   animation: wimiMove 2s forwards 2s;
    // }
  }
}
</style>
