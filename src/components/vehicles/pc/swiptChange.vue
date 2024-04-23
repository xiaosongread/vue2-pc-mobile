<template>
  <div class="carWgPage">
    <swiper ref="mySwiperCarWg" :options="swiperOptionCarWg" class="CarWgSwipter">
      <swiper-slide v-for="(item, index) in data" :key="index" class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">{{ item.title }}</p>
          <p v-if="item.cons" :class="['cons', item.dian ? 'dianCons' : '']" v-html="item.cons"></p>
          <p v-if="item.cons1" :class="['cons cons2', item.dian ? 'dianCons' : '']" v-html="item.cons1"></p>
          <p v-if="item.tips" class="tip">{{item.tips}}</p>
        </div>
        <img class="swiper-lazy" :data-src="item.src"></img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

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
      swiperOptionCarWg: {
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
    swiperCarWg: function() {
      return this.$refs.mySwiperCarWg.$swiper;
    }
  },
  mounted() {},
  created() {},
  watch: {
    carWgIndex(v) {
      switch (v) {
        case 0:
          this.swiperCarWg.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperCarWg.slideTo(1, 1000, false);
          return;
        case 2:
          this.swiperCarWg.slideTo(2, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.carWgPage {
  width: 100%;
  // height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  // padding-top: 80px;
  .slideItem{
    width: 100%;
    // height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
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
      display: flex;
      width: 485px;
      height: 153px;
      // align-items: center;
      flex-direction: column;
      margin-right: 139px;
      margin-top: 80px;
      background: #fff;
    }
    img{
      width: 1091px;
      margin-top: 80px;
    }
  }
}
</style>