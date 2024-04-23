<template>
  <div
    :class="[
      'cockpitPage swiper-lazy',
      finshFirstCockpit ? 'navOn1' : 'navOff1'
    ]"
    data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/zc-1.png"
  >
    <div>
      <div class="pageText"></div>
      <div :class="['current-1-box', finshTwoCockpit ? 'navOn' : 'navOff']">
        <div class="current-1"></div>
        <div
          class="current-2 swiper-lazy"
          data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/zc-2.png"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cockpitPage",
  components: {},
  props: {
    finshFirstCockpit: {
      type: Boolean,
      default: false
    },
    finshTwoCockpit: {
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
.cockpitPage {
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/zc-1.png")
  //   no-repeat;
  background-size: 90vh 80vh;
  background-position: 50%;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in;
  font-family: AlibabaPuHuiTiR;
  &.navOn1 {
    background-size: 100vw 100vh;
  }
  &.navOff1 {
    background-size: 90vw 80vh;
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
    transition: all 1s ease-in;
    // transform-origin: 0 0;
    &.navOn {
      transform: translateY(-100vh);
    }
    &.navOff {
      transform: translateY(0);
    }
  }
  .current-1 {
    width: 100%;
    height: 100vh;
  }
  .current-2 {
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/zc-2.png")
    //   no-repeat;
    background-size: cover;
    background-position: 50%;
  }
}
</style>
