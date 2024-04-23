<template>
  <div class="jiashiPage">
    <!-- :style="{ backgroundImage: 'url(' + textObj.url + ')' }" -->
    <div
      :class="[
        'jiashiPage-img swiper-lazy',
        finshFirstjiashi ? 'navOn1' : 'navOff1'
      ]"
      :data-background="textObj.url"
    >
      <div class="pageText"></div>
      <div :class="['current-1-box', finshTwojiashi ? 'navOn' : 'navOff']">
        <!-- <div class="current-1"></div> -->
        <div
          class="current-2 swiper-lazy"
          :data-background="textObj.url1"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiashiPage",
  components: {},
  props: {
    finshFirstjiashi: {
      type: Boolean,
      default: false
    },
    finshTwojiashi: {
      type: Boolean,
      default: false
    },
    textObj: {
      url: "",
      url1: ""
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
.jiashiPage {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: AlibabaPuHuiTiR;
  .jiashiPage-img {
    position: absolute;
    top: 50px;
    bottom: 50px;
    left: 47px;
    right: 47px;
    background-size: cover;
    background-position: 50%;
    transition: all 1s ease-in;
    &.navOn1 {
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
    &.navOff1 {
      transition: all 1s ease-in 0.5s;
      top: 50px;
      bottom: 50px;
      left: 47px;
      right: 47px;
    }
  }
  .pageText {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .current-1-box {
    width: 100%;
    position: absolute;
    // transition: all 1s ease-in;
    opacity: 0;
    // &.navOn {
    //   transform: translateY(-100vh);
    // }
    // &.navOff {
    //   transform: translateY(0);
    // }
  }
  .jiashiPage-img.navOn1 {
    .current-1-box {
      opacity: 1;
      transition: opacity 0.5s ease-in 1.5s;
    }
  }
  .jiashiPage-img.navOff1 {
    .current-1-box {
      opacity: 0;
      transition: opacity 0.5s ease-in;
    }
  }
  .current-1 {
    width: 100%;
    height: 100vh;
  }
  .current-2 {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: 50%;
  }
}
</style>
