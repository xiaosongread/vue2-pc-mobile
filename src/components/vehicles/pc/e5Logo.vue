<template>
  <div :class="['logoBox', startDh ? 'startDh' : '']">
    <div class="logoZz"></div>
    <div class="logoFm">
      <img :src="data.fm" class="e5Fm" />
    </div>
    <div
      class="carLogoPage"
      :style="{ backgroundImage: `url(${data.bg})` }"
    ></div>
    <div class="e5LogoText">
      <p class="e5LogoText-tit" v-html="data.text1"></p>
      <p class="e5LogoText-tips" v-html="data.tips"></p>
      <p class="e5LogoText-cons" v-html="data.text2"></p>
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
    startDh: {
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
.logoBox {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  // background: #131417;
  &.startDh {
    .logoZz {
      background: rgba($color: #000000, $alpha: 0);
      transition: all 1s linear 1s;
    }
    .logoFm {
      transform: scale(1.1);
      // z-index: 0;
      transition: all 1s linear 2s;
      img {
        opacity: 0;
        transition: all 1s linear 3s;
      }
    }
  }
  .logoZz {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background: rgba($color: #000000, $alpha: 0.8);
  }
  .logoFm {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transform: scale(1);
    img.e5Fm {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .carLogoPage {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    transform: scale(1.1);
  }
  .e5LogoText {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    &-tit {
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      top: 171px;
      font-size: 36px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #F2F2F7;
      line-height: 50px;
    }
    &-tips {
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      top: 278px;
      font-size: 23px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #F2F2F7;
      line-height: 31px;
    }
    &-cons {
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 83px;
      font-size: 24px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #F2F2F7;
      line-height: 33px;
    }
  }
}
</style>
