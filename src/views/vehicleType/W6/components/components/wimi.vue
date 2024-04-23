<template>
  <div :class="['wimiPage', showWimi ? 'changeBox' : '']">
    <div class="wimiPage-top">
      <img :class="['wimi-tit swiper-lazy', showWimi ? 'textopen' : '']" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/wimi-1.png"></img>
      <p :class="['wimi-text-1',  showWimi ? 'textopen' : '']">威马全新语音助手——wimi</p>
      <p :class="['wimi-text-2',  showWimi ? 'textopen' : '']">可控制车控、娱乐与信息查询等超百项功能；车内双声源麦克风，可精准识别主副驾的不同需求;</br>
一句话让车机连续执行三个指令，大幅提高声控效率;</p>
    </div>
    <div :class="['wimiPage-bottom', showWimi ? 'logopy logoremote' : '']">
      <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/wimilogo.png"></img>
    </div>
  </div>
</template>

<script>
export default {
  name: "wimiPage",
  components: {},
  props: {
    showWimi: {
      type: Boolean,
      default: false
    }
    // finshWimi: {
    //   type: Boolean,
    //   default: false
    // },
    // finshlogo: {
    //   type: Boolean,
    //   default: false
    // },
  },
  data() {
    return {
      finshWimi: false,
      finshlogo: false
    };
  },
  computed: {},
  mounted() {},
  created() {
  },
  watch: {
    // showWimi(v) {
    //   if (v) {
    //     this.wimiChangeFn()
    //   }
    // }
  },
  methods: {
    // wimiChangeFn() {
    //   setTimeout(()=>{
    //     this.finshWimi = true;
    //   }, 1000)
    //   setTimeout(()=>{
    //     this.finshlogo = true;
    //   }, 4000)
    // }
  }
};
</script>
<style lang="scss" scoped>
@keyframes wimiMove {
  0% {
    bottom: -518px;
    transform: rotate(0);
  }
  50% {
    bottom: -200px;
    transform: rotate(0);
  }
  100% {
    bottom: -200px;
    transform: rotate(-10deg);
  }
}
.wimiPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .wimiPage-top{
    // transform: scale(1.9);
    // transition: all 1s ease-in;
    .wimi-tit{
      width: 608px;
      font-size: 216px;
      margin: 191px auto 41px;
      display: block;
      transform: scale(4);
      transform-origin: 50% 50%;
      // transition: all 1s ease-in;
    }
    .wimi-text-1{
      text-align: center;
      font-size: 36px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #8B93D8;
      line-height: 50px;
      margin-bottom: 40px;
      opacity: 0;
    }
    .wimi-text-2{
      text-align: center;
      font-size: 24px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 33px;
      letter-spacing: 1px;
      opacity: 0;
    }
  }
  // logo
  .wimiPage-bottom{
    width: 496px;
    height: 518px;
    position: absolute;
    bottom: -518px;
    left: 50%;
    margin-left: -248px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
// .swiper-slide-active{
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
// }
</style>
