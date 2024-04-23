<template>
  <div
    :class="['spacePage', color === 'gray' ? 'gray' : '']"
    :style="{ backgroundImage: `url(${data.bg})` }"
  >
    <p v-if="data.title" class="spacePage-title spacePage-text">
      {{ data.title }}
    </p>
    <p v-if="data.text1" class="spacePage-tit spacePage-text">
      {{ data.text1 }}
    </p>
    <p v-if="data.text2" class="spacePage-cons spacePage-text">
      {{ data.text2 }}
    </p>
    <div class="dianBox">
      <div
        v-if="dian"
        class="dian-box dian-box1"
        :style="{ top: dian1.top + 'px', left: dian1.left + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box2"
        :style="{ top: dian2.top + 'px', left: dian2.left + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box3"
        :style="{ top: dian3.top + 'px', left: dian3.left + 'px' }"
      ></div>
      <div
        v-if="dian"
        class="dian-box dian-box4"
        :style="{ top: dian4.top + 'px', left: dian4.left + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      // 540  960
      dian1Bf: {
        // top: 362,
        // left: 960
        top: -137,
        left: 0
      },
      dian1: {
        top: 0,
        left: 0
      },
      dian2Bf: {
        // top: 424,
        // left: 801
        top: -75,
        left: -159
      },
      dian2: {
        top: 0,
        left: 0
      },
      dian3Bf: {
        // top: 643,
        // left: 842
        top: 144,
        left: -118
      },
      dian3: {
        top: 0,
        left: 0
      },
      dian4Bf: {
        // top: 705,
        // left: 960
        top: 206,
        left: 0
      },
      dian4: {
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
      if (this.dian) {
        let bl = this.imgSjHeight / 1080;
        this.dian1.left = this.dian1Bf.left * bl - 28 * bl;
        this.dian1.top = this.dian1Bf.top * bl - 28 * bl;
        this.dian2.left = this.dian2Bf.left * bl - 28 * bl;
        this.dian2.top = this.dian2Bf.top * bl - 28 * bl;
        this.dian3.left = this.dian3Bf.left * bl + 28 * bl;
        this.dian3.top = this.dian3Bf.top * bl - 28 * bl;
        this.dian4.left = this.dian4Bf.left * bl - 28 * bl;
        this.dian4.top = this.dian4Bf.top * bl - 28 * bl;
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
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
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
    width: 28px;
    height: 28px;
    position: absolute;
    &.dian-box1 {
      top: 362px;
      left: 960px;
    }
    &.dian-box2 {
      top: 424px;
      left: 801px;
    }
    &.dian-box3 {
      top: 643px;
      left: 842px;
    }
    &.dian-box4 {
      top: 705px;
      left: 960px;
    }
    &::after{
      content: "";
      display: block;
      width: 28px;
      height: 28px;
      border-radius: 28px;
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
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background: #D8D8D8;
      position: absolute;
      top: 6px;
      left: 6px;
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
