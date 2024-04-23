<template>
  <div class="nsPage">
    <swiper ref="mySwiperNs" :options="swiperOptionNs" class="nsSwipter">
      <swiper-slide
        class="slideItem slideItem1-0 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/ns-1.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-1 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/ns-3.jpg"
      ></swiper-slide>
    </swiper>
    <p class="nsPage-text">32色智能随动氛围灯</p>
  </div>
</template>

<script>
export default {
  name: "nsPage",
  components: {},
  props: {
    bOrW: {
      type: String,
      default: "w"
    }
  },
  data() {
    return {
      swiperOptionNs: {
        direction: "vertical",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        effect: "fade",
        fadeEffect: {
          crossFade: false
        },
        on: {
          slideChangeTransitionStart: function() {},
          resize() {
            console.log("resize-pcweb", this.update);
            this.update();
          }
        }
      }
    };
  },
  computed: {
    swiperNs: function() {
      return this.$refs.mySwiperNs.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {
    bOrW(v) {
      console.log("内饰氛围灯子组件切换", v);
      switch (v) {
        case "w":
          this.swiperNs.slideTo(0, 1000, false);
          return;
        case "b":
          this.swiperNs.slideTo(1, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.nsPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .swiper-container{
    width: 100%;
    height: 100vh;
  }
  .slideItem {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &.slideItem1-0 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/ns-1.png")
        // no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    &.slideItem1-1 {
      // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/ns-3.png")
        // no-repeat;
      background-size: cover;
      background-position: 50%;
    }
  }
  .nsPage-text{
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #F2F2F7;
    line-height: 33px;
    position: absolute;
    bottom: 96px;
    z-index: 1;
  }
}
</style>
