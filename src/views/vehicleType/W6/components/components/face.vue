<template>
  <div
    class="facePage swiper-lazy"
    data-background="https://cos-data.wm-imotor.com/website/W6/pc/w6/face.jpg"
  >
    <p class="face-tit">Face ID</p>
    <p class="face-cons">
      最多支持10个账号，自动匹配座椅、导航习惯等，随人而变，一步到位
    </p>
  </div>
</template>

<script>
export default {
  name: "facePage",
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
.facePage {
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/face.png")
    // no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  .face-tit{
    width: 100%;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
    position: absolute;
    bottom: 148px;
  }
  .face-cons{
    width: 100%;
    font-size: 24px;
    font-family: AlibabaPuHuiTiL;
    color: #FFFFFF;
    line-height: 33px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    bottom: 98px;
  }
}
</style>
