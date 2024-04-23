<template>
  <div class="luying swiper-lazy" data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/luying.jpg">
    <p class="luying-tit">智能露营神器</p>
    <p class="luying-cons">
      支持大功率电器(电饭煲、电磁炉、烤箱)</br>
即插即用，野外露营的绝佳拍档
    </p>
  </div>
</template>

<script>
export default {
  name: "luying",
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
.luying {
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/luying.png")
    // no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .luying-tit{
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #E5E5EA;
    line-height: 50px;
    position: absolute;
    top: 171px;
  }
  .luying-cons{
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: AlibabaPuHuiTiL;
    color: #E5E5EA;
    line-height: 33px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 49px;
  }
}
</style>
