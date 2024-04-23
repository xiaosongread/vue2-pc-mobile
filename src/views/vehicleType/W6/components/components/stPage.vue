<template>
  <div class="stPage">
    <div class="stPage-box">
      <div  class="stPage-box-li first">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/st-1.jpg"></img>
        <p class="st-tit">丰富的娱乐生态</p>
        <p class="st-con">海量娱乐应用，让旅途想唱就唱，<br>想听就听，想看就看</p>
      </div>
      <div  class="stPage-box-li">
        <img class="swiper-lazy" data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/st-2.jpg"></img>
        <p class="st-tit">移动的唱吧</p>
        <p class="st-con">拥有80万首云端正版曲库，剧院级音效，<br>支持双人对唱</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stPage",
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
.stPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .stPage-box{
    display: flex;
    justify-content: space-between;
    .stPage-box-li{
      &.first{
        margin-right: 96px;
      }
      img{
        width: 776px;
        height: 451px;
        display: block;
      }
      .st-tit{
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        line-height: 33px;
        margin: 38px 0 30px;
      }
      .st-con{
        font-size: 21px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 30px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
