<template>
  <div
    :class="[
      'spacePage',
      color === 'gray' ? 'gray' : '',
      isShow && isTransform ? 'isShow' : isTransform ? 'isHidden' : ''
    ]"
    :style="{ backgroundImage: `url(${data.bg})` }"
  >
    <p v-if="data.title" class="spacePage-title spacePage-text">
      {{ data.title }}
    </p>
    <p
      v-if="data.text1"
      v-html="data.text1"
      class="spacePage-tit spacePage-text"
    ></p>
    <p
      v-if="data.text2"
      class="spacePage-cons spacePage-text"
      v-html="data.text2"
    ></p>
    <div class="dianBox">
      <div
        v-if="dian"
        class="dian-box dian-box1"
        :style="{ top: dian1.top + 'px', right: dian1.right + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box2"
        :style="{ top: dian2.top + 'px', right: dian2.right + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box3"
        :style="{ top: dian3.top + 'px', right: dian3.right + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box4"
        :style="{ top: dian4.top + 'px', right: dian4.right + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box5"
        :style="{ top: dian5.top + 'px', right: dian5.right + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box6"
        :style="{ top: dian6.top + 'px', left: dian6.left + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "firstPage",
  components: {},
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    dian: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "whrite"
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
    },
    isShow: {
      type: Boolean,
      default: true
    },
    isTransform: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dian1Bf: {
        // 540  960
        // top: 461,
        // left: 1251,
        top: -79,
        right: -291
      },
      dian1: {
        top: 0,
        left: 0
      },
      dian2Bf: {
        top: -28,
        right: -120
        // top: 512,
        // left: 1080
      },
      dian2: {
        top: 0,
        left: 0
      },
      dian3Bf: {
        // top: 533,
        // left: 1251
        top: -7,
        right: -291
      },
      dian3: {
        top: 0,
        left: 0
      },
      dian4Bf: {
        top: 7,
        right: -448
        // top: 547,
        // left: 1408
      },
      dian4: {
        top: 0,
        left: 0
      },
      dian5Bf: {
        // top: 624,
        // left: 1648
        top: 84,
        right: -688
      },
      dian5: {
        top: 0,
        left: 0
      },
      dian6Bf: {
        top: -65,
        left: -492
        // top: 475,
        // left: 468
      },
      dian6: {
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
      console.log('浏览器宽高：', this.browserWidth, this.browserHeight)
      console.log('图片缩放后宽高：', this.imgSjWidth, this.imgSjHeight)
      console.log('图片原始宽高：', 1920, 1080)
      if (this.dian) {
        let bl = this.imgSjHeight / 1080;
        this.dian1.right = this.dian1Bf.right * bl - 28;
        this.dian1.top = this.dian1Bf.top * bl;
        this.dian2.right = this.dian2Bf.right * bl - 28;
        this.dian2.top = this.dian2Bf.top * bl;
        this.dian3.right = this.dian3Bf.right * bl - 28;
        this.dian3.top = this.dian3Bf.top * bl;
        this.dian4.right = this.dian4Bf.right * bl - 28;
        this.dian4.top = this.dian4Bf.top * bl;
        this.dian5.right = this.dian5Bf.right * bl - 28;
        this.dian5.top = this.dian5Bf.top * bl;
        this.dian6.left = this.dian6Bf.left * bl - 28;
        this.dian6.top = this.dian6Bf.top * bl;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// .swiper-slide-active {
//   .spacePage {
//     transform: scale(1);
//     transition: all 2s ease-in 2s;
//     .spacePage-text {
//       opacity: 1;
//       transition: all 1s ease-in 4s;
//     }
//   }
// }
.spacePage {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  &.isShow {
    opacity: 1;
    z-index: 11;
    transition: all 0.5s ease-in;
  }
  &.isHidden {
    opacity: 0;
    z-index: 0;
    transition: all 0.5s ease-in;
  }
  // transform: scale(4);
  // transform-origin: 50% 0;
  // @keyframes spaceEx5 {
  // }
  // .spacePage-text {
  //   opacity: 0;
  // }
  &.gray {
    .spacePage-title,
    .spacePage-tit,
    .spacePage-cons {
      color: #757575;
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
  .dianBox {
    width: 0px;
    height: 0px;
    // background: red;
    position: absolute;
    top: 50vh;
    left: 50vw;
  }
  .dian-box {
    width: 28px; /*no*/
    height: 28px; /*no*/
    position: absolute;
    &.dian-box1 {
      // top: 268px;
      // left: 1251px;
    }
    &::after{
      content: "";
      display: block;
      width: 28px; /*no*/
      height: 28px; /*no*/
      border-radius: 28px; /*no*/
      background: #D8D8D8;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.45;
      animation: dianHx 1s infinite;
    }
    &::before{
      content: "";
      display: block;
      width: 16px; /*no*/
      height: 16px; /*no*/
      border-radius: 16px; /*no*/
      background: #D8D8D8;
      position: absolute;
      top: 6px; /*no*/
      left: 6px; /*no*/
      z-index: 1;
    }
  }
  .spacePage-title {
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
  .spacePage-tit {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 113px;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #E5E5EA;
    line-height: 33px;
  }
  .spacePage-cons {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 69px;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
  }
}
</style>
