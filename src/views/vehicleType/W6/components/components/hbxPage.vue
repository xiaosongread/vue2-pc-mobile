<template>
  <div class="hbxPage">
    <swiper ref="mySwiperHbx" :options="swiperOptionHbx" class="hbxSwipter">
      <swiper-slide class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">剧院级音效</p>
          <p class="cons">全车9+1大功率扬声器，WM-Sonic专业调音团<br/>队与国际顶级调音师共同开发，精准定位每个<br/>扬声器位置，音场更丰富，音质更细腻</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/hbx-1.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">后备箱超大空间</p>
          <p class="cons">543L基础容量可满足全家人的行李置放;<br/>1625L扩展后备箱容量，可以摆放各类大型物品</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/hbx-2.jpg"></img>
      </swiper-slide>
      <swiper-slide class="slideItem slideItem1-0">
        <div class="slideItem-text">
          <p class="tit">后备箱超大空间</p>
          <p class="cons">543L基础容量可满足全家人的行李置放;<br/>1625L扩展后备箱容量，可以摆放各类大型物品</p>
        </div>
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/hbx-3.jpg"></img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
let that;
export default {
  name: "hbxPage",
  components: {},
  props: {
    hbxIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOptionHbx: {
        direction: "vertical",
        // speed: 300,
        // mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        // mousewheelControl: true, //同上
        // mousewheel: {
        //   thresholdDelta: 10,
        //   thresholdTime: 1000,
        //   releaseOnEdges: false //PC端释放滑动
        // },
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        // height: window.innerHeight, // 高度设置，占满设备高度
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 300
        // },
        // loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: false
        },
        on: {
          slideChangeTransitionStart: function() {
          }
        }
      },
      top: ""
    };
  },
  computed: {
    swiperHbx: function() {
      return this.$refs.mySwiperHbx.$swiper;
    }
  },
  mounted() {
    that = this
  },
  created() {},
  watch: {
    hbxIndex(v) {
      console.log('后备箱子组件切换', v)
      switch (v) {
        case 0:
          this.swiperHbx.slideTo(0, 1000, false);
          return;
        case 1:
          this.swiperHbx.slideTo(1, 1000, false);
          return;
        case 2:
          this.swiperHbx.slideTo(2, 1000, false);
          return;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.hbxPage {
  width: 100%;
  height: 100%;
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
    background-size: cover;
    background: #fff;
    .tit{
      font-size: 24px;
      font-family: AlibabaPuHuiTiR;
      color: #757575;
      line-height: 33px;
      margin-bottom: 30px;
    }
    .cons{
      font-size: 21px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 30px;
    }
    .tip{
      font-size: 16px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 24px;
      margin-top: 8px;
    }
    .slideItem-text{
      height: 153px;
      display: flex;
      // align-items: center;
      flex-direction: column;
      width: 440px;
      margin-right: 139px;
      background: #fff;
    }
    img{
      width: 1091px;
    }
  }
}
</style>