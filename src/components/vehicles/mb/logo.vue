<template>
  <div class="logo">
    <p class="logo-tit">{{ data.tit }}</p>
    <swiper ref="mySwiper3" :options="swiperOption3">
      <swiper-slide
        v-for="(item, index) in data.imgList"
        :key="index"
        class="slideItem slideItem1-2 swiper-lazy"
        :data-background="item.img"
      ></swiper-slide>
    </swiper>
    <p class="logo-bottom-tit">{{ data.tit1 }}</p>
    <p class="logo-bottom-cons">{{ data.cons }}</p>
  </div>
</template>

<script>
export default {
  name: "logo",
  components: {},
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      swiperOption3: {
        // direction: "vertical",
        speed: 300,
        // height: window.innerHeight, // 高度设置，占满设备高度
        autoplay: {
          disableOnInteraction: false,
          delay: 300
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: false
        },
        on: {
          slideChange: function() {}
        }
      },
      top: ""
    };
  },
  computed: {
    swiper: function() {
      return this.$refs.mySwiper.$swiper3;
    }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.logo{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: AlibabaPuHuiTiR;
  .logo-tit{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 195px;
    z-index: 10;
    font-size: 42px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 58px;
  }
  .logo-bottom-tit{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 188px;
    z-index: 10;
    font-size: 36px;
    font-family: AlibabaPuHuiTiR;
    color: #F2F2F7;
    line-height: 50px;
  }
  .logo-bottom-cons{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 132px;
    z-index: 10;
    font-size: 32px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 44px;
  }
  .slideItem {
    // height: 100vh;
    width: 100%;
    height: calc(100vh - 100px);
    background-size: cover;
    background-position: 50% 100%;
  }
  // .slideItem1-1{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-2{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-3{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-4{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-5{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-6{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-7{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .slideItem1-8{
  //   width: 100%;
  //   // height: 100vh;
  //   background-size: cover;
  //   background-position: center;
  // }
}
</style>
