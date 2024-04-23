<template>
  <div :class="['bigTcPageBox', startChange ? 'startChange' : '']">
    <div class="bigTcPage" :style="{ backgroundImage: `url(${data.bg})` }">
      <p v-if="data.title" class="bigTcPage-title bigTcPage-text">{{ data.title }}</p>
      <p v-if="data.tips" class="bigTcPage-tips bigTcPage-text">{{ data.tips }}</p>
      <p v-if="data.text1" class="bigTcPage-tit bigTcPage-text">{{ data.text1 }}</p>
      <p v-if="data.text2" class="bigTcPage-cons bigTcPage-text">{{ data.text2 }}</p>
    </div>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "firstPage",
  components: {},
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    startChange: {
      type: Boolean,
      default: false
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
.startChange {
  .bigTcPage {
    transform: scale(1);
    transition: all 1s linear;
    .bigTcPage-text {
      opacity: 1;
      transition: all 1s linear 1s;
    }
  }
}
.bigTcPageBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bigTcPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  transform: scale(3);
  transform-origin: 50% 0;
  // @keyframes bigTcEx5 {
  // }
  .bigTcPage-text {
    opacity: 0;
  }
  .bigTcPage-title {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 171px;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 50px;
  }
  .bigTcPage-tips {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 218px;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
    letter-spacing: 1px;
  }
  .bigTcPage-tit {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 113px;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #E5E5EA;
    line-height: 33px;
  }
  .bigTcPage-cons {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 69px;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
  }
}
</style>
