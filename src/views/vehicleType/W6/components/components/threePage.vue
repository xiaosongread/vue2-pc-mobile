<template>
  <div class="threePage">
    <p class="threePage_tit"><span>双色车身</span><span>双色车身</span></p>
    <!-- <swiper ref="mySwiper3" :options="swiperOption3">
      <swiper-slide
        class="slideItem slideItem1-1 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo01.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-2 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo02.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-3 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo03.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-4 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo04.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-5 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo05.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-6 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo06.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-7 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo07.jpg"
      ></swiper-slide>
      <swiper-slide
        class="slideItem slideItem1-8 swiper-lazy"
        data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/logo08.jpg"
      ></swiper-slide>
    </swiper> -->
    <div class="threePage_b_tit">智能交互灯语</div>
    <div class="threePage_b_cons">充电进度提示；迎宾场景互动</div>
  </div>
</template>

<script>
export default {
  name: "threePage",
  components: {},
  data() {
    return {
      // swiperOption3: {
      //   speed: 300,
      //   height: window.innerHeight, // 高度设置，占满设备高度
      //   autoplay: {
      //     disableOnInteraction: false,
      //     delay: 300
      //   },
      //   loop: true,
      //   effect: "fade",
      //   fadeEffect: {
      //     crossFade: false
      //   },
      //   on: {
      //     slideChange: function() {}
      //   }
      // },
      top: ""
    };
  },
  computed: {
    // mySwiper3: function() {
    //   return this.$refs.mySwiper3.$swiper3;
    // }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.threePage{
  width: 100%;
  height: 100%;
  position: relative;
  background: url('https://cos-data.wm-imotor.com/website/W6/pc/w6/logo.gif') no-repeat;
  background-size: cover;
  background-position: 50%;
  .threePage_tit{
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 50px;
    position: absolute;
    top: 171px;
    z-index: 2;
  }
  .threePage_b_tit{
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #E5E5EA;
    line-height: 33px;
    position: absolute;
    bottom: 113px;
    z-index: 2;
  }
  .threePage_b_cons{
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 69px;
    z-index: 2;
  }
  .slideItem1-1{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo01.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-2{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo02.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-3{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo03.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-4{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo04.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-5{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo05.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-6{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo06.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-7{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo07.png")
      // no-repeat;
    background-size: cover;
  }
  .slideItem1-8{
    width: 100%;
    height: 100vh;
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/logo08.png")
      // no-repeat;
    background-size: cover;
  }
}
</style>
