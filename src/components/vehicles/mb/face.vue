<template>
  <div class="facePage">
    <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/faceId.jpg">
    <p class="face-tit">Face ID</p>
    <p class="face-cons">
      最多支持10个账号，自动匹配座椅、</br>导航习惯等，随人而变，一步到位
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
  height: calc(100vh - 100px);
  position: relative;
  overflow: hidden;
  font-family: AlibabaPuHuiTiR;
  img {
    width: 684px;
    margin-top: 145px;
  }
  .face-tit {
    width: 100%;
    font-size: 32px;
    font-family: AlibabaPuHuiTiR;
    font-weight: 300;
    color: #757575;
    line-height: 44px;
    text-align: center;
    margin-top: 23px;
  }
  .face-cons {
    width: 100%;
    font-size: 32px;
    font-family: AlibabaPuHuiTiL AlibabaPuHuiTiR;
    color: #666666;
    line-height: 44px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 24px;
  }
}
</style>
