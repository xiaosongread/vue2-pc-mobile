<template>
  <div
    :class="['threeScreenPage', finshThreenZz ? 'finshThreenZz' : '']"
    :style="{ backgroundImage: `url(${data.bg})` }"
  >
    <p
      v-if="data.text1"
      class="threeScreenPage-title threeScreenPage-text threeScreenChange1"
    >
      {{ data.text1 }}
    </p>
    <p
      v-if="data.text2"
      v-html="data.text2"
      class="threeScreenPage-cons threeScreenPage-text threeScreenChange1"
    ></p>
    <div class="zz threeScreenChange2">
      <p class="threeScreenPage-tit threeScreenPage-text threeScreenChange2">
        {{ data.text3 }}
      </p>
      <p class="threeScreenPage-cons threeScreenPage-text threeScreenChange2">
        {{ data.text4 }}
      </p>
      <p class="threeScreenPage-cons threeScreenPage-text1 threeScreenChange2">
        {{ data.text5 }}
      </p>
      <div class="dianBox">
        <div
          class="three-xt three-1 threeScreenChange2"
          :style="{
            width: '466px', //430px
            height: '166px', //119px
            backgroundImage: 'url(' + data.bg1 + ')',
            top: dian1.top + 'px',
            left: dian1.left + 'px'
          }"
        ></div>
        <div
          class="three-xt three-2 threeScreenChange2"
          :style="{
            width: '490px', //439px
            height: '166px', // 159px
            backgroundImage: 'url(' + data.bg2 + ')',
            top: dian2.top + 'px',
            left: dian2.left + 'px'
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "threeScreenPage",
  components: {},
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    finshThreenZz: {
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
      // 540  960
      dian1Bf: {
        // top: 219,
        // left: 432
        top: -90,
        left: -55 // 
      },
      dian1: {
        top: 0,
        left: 0
      },
      dian2Bf: {
        // top: 322,
        // left: 1121
        top: -33,
        left: 240
      },
      dian2: {
        top: 0,
        left: 0
      },
      dian3Bf: {
        // top: 596,
        // left: 465
        top: 82,
        left: -149
      },
      dian3: {
        top: 0,
        left: 0
      }
    };
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
      let bl = this.imgSjHeight / 1080;
      console.log('bl', bl)
      this.dian1.left = this.dian1Bf.left * bl - 28 * bl;
      this.dian1.top = this.dian1Bf.top * bl - 166;
      this.dian2.left = this.dian2Bf.left * bl - 28 * bl;
      this.dian2.top = this.dian2Bf.top * bl - 166;
      // this.dian3.left = this.dian3Bf.left * bl - 349;
      // this.dian3.top = this.dian3Bf.top * bl;
    }
  }
};
</script>
<style lang="scss" scoped>
// .swiper-slide-active {
//   .threeScreenPage {
//     transform: scale(1);
//     transition: all 2s ease-in 2s;
//     .threeScreenPage-text {
//       opacity: 1;
//       transition: all 1s ease-in 4s;
//     }
//   }
// }
.threeScreenPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  // transform: scale(4);
  // transform-origin: 50% 0;
  // @keyframes threeScreenEx5 {
  // }
  // .threeScreenPage-text {
  //   opacity: 0;
  // }
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
  &.finshThreenZz {
    .threeScreenChange1 {
      transition: 1s ease-in;
      opacity: 0;
    }
    .threeScreenChange2 {
      transition: 1s ease-in;
      opacity: 1;
    }
  }
  .dianBox {
    width: 5px;
    height: 5px;
    // background: red;
    position: absolute;
    top: 50vh;
    left: 50vw;
  }
  .threeScreenChange1 {
    transition: 1s ease-in;
    opacity: 1;
  }
  .threeScreenChange2 {
    transition: 1s ease-in;
    opacity: 0;
  }
  .threeScreenPage-title {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 171px;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 50px;
  }
  .threeScreenPage-tit {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 113px;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #E5E5EA;
    line-height: 33px;
  }
  .three-xt {
    &::after{
      content: "";
      display: block;
      width: 28px;
      height: 28px;
      border-radius: 28px;
      background: #D8D8D8;
      position: absolute;
      opacity: 0.45;
      animation: dianHx 1s infinite;
    }
    &::before{
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background: #D8D8D8;
      position: absolute;
      z-index: 1;
    }
  }
  .three-1 {
    // width: 430px;
    // height: 119px;
    position: absolute;
    // top: 85px;
    // right: calc(50vw - 561px);
    background-size: cover;
    &::after {
      bottom: -14px;
      left: -14px;
    }
    &::before {
      bottom: -8px;
      left: -8px;
    }
  }
  .three-2 {
    // width: 439px;
    // height: 159px;
    position: absolute;
    // top: 154px;
    // right: 145px;
    background-size: cover;
    &::after {
      bottom: -14px;
      left: -14px;
    }
    &::before {
      bottom: -8px;
      left: -8px;
    }
  }
  .three-3 {
    // width: 349px;
    // height: 107px;
    position: absolute;
    // top: 626px;
    // right: 406px;
    background-size: cover;
    &::after {
      bottom: -14px;
      right: -14px;
    }
    &::before {
      bottom: -8px;
      right: -8px;
    }
  }
  .threeScreenPage-cons {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 69px;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
    &.threeScreenPage-text1 {
      bottom: 36px;
    }
  }
  .zz {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.3);
  }
}
</style>
