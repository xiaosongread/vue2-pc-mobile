<template>
  <!-- :style="{ backgroundImage: 'url(' + textObj.url + ')' }" -->
  <div
    :class="['pilot swiper-lazy', finshPilot ? 'finshPilot' : '']"
    :data-background="textObj.url"
  >
    <p class="engine-tit" v-html="textObj.tit"></p>
    <p class="engine-cons" v-html="textObj.cons"></p>
  </div>
</template>

<script>
export default {
  name: "pilot",
  components: {},
  props: {
    finshPilot: {
      type: Boolean,
      default: false
    },
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
.pilot {
  width: 100%;
  height: 100%;
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/pt-3.3.png")
  //   no-repeat;
  background-size: cover;
  background-position: 0%;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in;
  font-family: AlibabaPuHuiTiR;
  &.finshPilot{
    background-position: 100%;
  }
  .engine-tit{
    width: 100%;
    font-size: 42px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 58px;
    position: absolute;
    top: 195px;
  }
  .engine-cons{
    width: 100%;
    font-size: 32px;
    font-family: AlibabaPuHuiTiL;
    color: #FFFFFF;
    line-height: 44px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    bottom: 118px;
  }
}
</style>
