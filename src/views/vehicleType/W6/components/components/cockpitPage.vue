<template>
  <div
    class="cockpitPage swiper-lazy"
    data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/cockpit-1.jpg"
  >
    <div>
      <div class="pageText"></div>
      <div :class="['current-1-box', finshFirstCockpit ? 'navOff' : 'navOn']">
        <div class="current-1"></div>
        <div
          class="current-2 swiper-lazy"
          data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/cockpit-2.png"
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
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/cockpit-1.png")
    // no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .pageText{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .current-1-box {
    width: 100%;
    position: absolute;
    transition: all 1s ease-in;
    &.navOn {
      transform: translateY(0);
    }
    &.navOff {
      transform: translateY(-100vh);
    }
  }
  .current-1 {
    width: 100%;
    height: 100vh;
  }
  .current-2 {
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/cockpit-2.png")
    // no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
