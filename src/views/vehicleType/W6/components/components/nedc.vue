<template>
  <div class="nedc swiper-lazy" data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/nedc.jpg">
    <p class="nedc-tit">NEDC 520KM 扎实续航</p>
    <p class="nedc-cons">
      66.2kW·h三元锂电池，搭配转化效能95%的</br>
高效能三合一永磁同步电机，从此告别里程焦虑
    </p>
  </div>
</template>

<script>
export default {
  name: "nedc",
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
.nedc {
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/nedc.png")
  //   no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  overflow: hidden;
  .nedc-tit{
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #2C2C2E;
    line-height: 50px;
    position: absolute;
    top: 171px;
  }
  .nedc-cons{
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
