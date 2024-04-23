<template>
  <!-- :style="{ backgroundImage: 'url(' + textObj.url + ')' }" -->
  <div class="enginePage swiper-lazy" :data-background="textObj.url">
    <div
      v-if="textObj.imgUrl"
      class="bgImg swiper-lazy"
      :data-background="textObj.imgUrl"
    ></div>
    <p
      class="engine-tit"
      v-html="textObj.tit"
      :style="
        textObj.titColor ? { color: textObj.titColor } : { color: '#fff' }
      "
    ></p>
    <div class="bottomText">
      <p
        class="engine-btit"
        v-if="textObj.btit"
        v-html="textObj.btit"
        :style="
          textObj.titColor ? { color: textObj.titColor } : { color: '#fff' }
        "
      ></p>
      <p
        class="engine-cons"
        v-html="textObj.cons"
        :style="
          textObj.consColor ? { color: textObj.consColor } : { color: '#fff' }
        "
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "enginePage",
  components: {},
  props: {
    textObj: {
      type: Object,
      default: function() {
        return {
          tit: "",
          cons: "",
          url: ""
        };
      }
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
.enginePage {
  font-family: AlibabaPuHuiTiR;
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/pt-3.3.png")
  //   no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  overflow: hidden;
  .bgImg {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50%;
    position: relative;
    overflow: hidden;
    transform: scale(1.5);
  }
  .engine-tit{
    width: 100%;
    font-size: 42px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 58px;
    position: absolute;
    top: 175px;
  }
  .bottomText {
    width: 100%;
    font-size: 32px;
    font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
    color: #FFFFFF;
    line-height: 44px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    bottom: 118px;
    .engine-btit{
      width: 100%;
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
      font-weight: 300;
      color: #F2F2F7;
      line-height: 58px;
      margin-bottom: 17px;
    }
  }
  // .engine-btit{
  //     width: 100%;
  //     font-size: 42px;
  //     font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
  //     font-weight: 300;
  //     color: #F2F2F7;
  //     line-height: 58px;
  //     position: absolute;
  //     bottom: 220px;
  //   }
  // .engine-cons{
  //   width: 100%;
  //   font-size: 32px;
  //   font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
  //   color: #FFFFFF;
  //   line-height: 44px;
  //   letter-spacing: 1px;
  //   text-align: center;
  //   position: absolute;
  //   bottom: 118px;
  // }
}
</style>
