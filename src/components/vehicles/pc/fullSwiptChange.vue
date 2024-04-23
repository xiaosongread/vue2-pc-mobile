<template>
  <div class="fullPage">
    <swiper ref="swiperFull" :options="swiperOptionfull" class="fullSwipter">
      <swiper-slide v-for="(item, index) in data" :key="index" class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <!-- <p v-if="item.title" class="tit">{{ item.title }}</p> -->
          <p v-if="item.cons" :class="['cons', item.dian ? 'dianCons' : '']" v-html="item.cons"></p>
          <p v-if="item.cons1" :class="['cons cons2', item.dian ? 'dianCons' : '']" v-html="item.cons1"></p>
        </div>
        <img class="swiper-lazy" :data-src="item.src"></img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "changePage",
  components: {},
  props: {
    carWgIndex: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptionfull: {
        direction: "vertical",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        touchReleaseOnEdges:true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        height: window.innerHeight, // 高度设置，占满设备高度
        effect: "fade",
        fadeEffect: {
          crossFade: false
        },
        on: {
          slideChangeTransitionStart: function() {

          }
        }
      },
    };
  },
  computed: {
    swiperFull: function() {
      return this.$refs.swiperFull.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {
    carWgIndex(v) {
      switch (v) {
        case 0:
          this.swiperFull.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperFull.slideTo(1, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.fullPage {
  width: 100%;
  // height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  // padding-top: 80px;
  .slideItem{
    width: 100%;
    height: 100%;
    position: relative;
    // height: calc(100vh - 80px);
    // display: flex;
    // align-items: center;
    // justify-content: center;
    overflow: hidden;
    // margin-top: 80px;
    .tit{
      font-size: 24px;
      font-family: AlibabaPuHuiTiR;
      color: #757575;
      line-height: 33px;
      margin-bottom: 30px;
    }
    .cons{
      // width: 466px;
      font-size: 21px;
      font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
      color: #757575;
      line-height: 30px;
      letter-spacing: 1px;
      position: relative;
      &.dianCons {
        &::before {
          content: '•';
          display: block;
          position: absolute;
          left: -20px;
          top: -2px;
          color: #757575;
        }
      }
      &.cons2{
        margin-top: 25px;
      }
    }
    .tip{
      font-size: 16px;
      font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
      color: #757575;
      line-height: 24px;
      margin-top: 8px;
    }
    .slideItem-text{
      width: 100%;
      position: absolute;
      bottom: 36px;
      .cons{
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #E5E5EA;
        line-height: 33px;
        text-align: center;
        &.cons1{
          font-size: 24px;
          font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
          font-weight: 300;
          color: #F2F2F7;
          line-height: 33px;
          letter-spacing: 1px;
        }
      }
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>