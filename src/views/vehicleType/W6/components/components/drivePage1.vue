<template>
  <div class="drive1Page swiper-lazy" data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/drive1-1.jpg">
    <p class="drive1-tit">智能驾驶平台 Living Pilot 4.0</p>
    <p class="drive1-cons">
      国内首个拥有全场景泊车辅助功能的智驾平台</br>
覆盖住宅等固定停车位及商场等公共停车位，让每一次泊车都更轻松
    </p>
  </div>
</template>

<script>
export default {
  name: "drive1Page",
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
.drive1Page {
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/drive1-1.png")
    // no-repeat;
  background-size: cover;
  background-position: 50% 70%;
  position: relative;
  overflow: hidden;
  .drive1-tit{
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #757575;
    line-height: 50px;
    position: absolute;
    top: 171px;
  }
  .drive1-cons{
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: AlibabaPuHuiTiL;
    color: #757575;
    line-height: 33px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 98px;
  }
}
</style>
