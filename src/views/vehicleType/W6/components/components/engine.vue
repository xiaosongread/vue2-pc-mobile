<template>
  <div class="enginePage swiper-lazy" data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/engine.jpg">
    <p class="engine-tit">智能座舱平台 Living Engine 3.3</p>
    <p class="engine-cons">
      基于全球率先量产SOA架构打造的智能出行大空间，</br>
      满足车主在不同出行场景下更便捷、个性化的用车需求
    </p>
  </div>
</template>

<script>
export default {
  name: "enginePage",
  components: {},
  props: {},
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
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/engine.png")
    // no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .engine-tit{
    width: 100%;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 171px;
  }
  .engine-cons{
    width: 100%;
    font-size: 24px;
    font-family: AlibabaPuHuiTiL;
    color: #FFFFFF;
    line-height: 33px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    bottom: 96px;
  }
}
</style>
