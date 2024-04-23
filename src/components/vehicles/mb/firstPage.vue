<template>
  <div
    :class="['firstPage swiper-lazy', data.fontColor ? 'fontWhite' : '']"
    :data-background="data.bg"
  >
    <div>
      <div class="pageText">
        <div class="firstPage-1-text">
          <img class="swiper-lazy" :data-src="data.carName" />
          <p class="text1">{{ data.text1 }}</p>
          <p class="text2">{{ data.text2 }}</p>
          <p class="text3">
            综合补贴后：¥<span>{{ data.text3 }}</span
            >元起
          </p>
        </div>
        <ul class="firstPage-1-btns">
          <li
            v-for="(item, index) in data.btnArray"
            :key="index"
            class="firstPage-1-btns-item"
          >
            <p class="btns-item-name">{{ item.btnText1 }}</p>
            <p>{{ item.btnText2 }}</p>
          </li>
        </ul>
        <div class="onlineBtn yysj" @click="yysjFn">预约试驾</div>
        <div class="onlineBtn ckpz" @click="openConfig">查看配置</div>
      </div>
      <div :class="['firstPage-1-box', finshFirstZz ? 'navOff' : 'navOn']">
        <!-- <div class="firstPage-1"></div> -->
        <div class="firstPage-2 swiper-lazy" :data-background="data.zzBg"></div>
      </div>
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
    finshFirstZz: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: function() {
        return {};
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
  methods: {
    yysjFn() {
      this.$router.push({
        path: "/TestDrive"
      });
    },
    openConfig() {
      let carName = this.$route.name;
      this.$router.push({
        path: "/Configuration",
        query: {
          type: carName
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.firstPage {
  width: 100%;
  height: 100%;
  // height: calc(100vh - 100px);
  // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/1-1.png")
  //   no-repeat;
  background-size: cover;
  background-position: 65% 65%;
  position: relative;
  overflow: hidden;
  font-family: AlibabaPuHuiTiR;
  color: #757575;
  &.fontWhite {
    color: #FFFFFF !important;
    background-position: 50%;
    .pageText{
      .firstPage-1-text{
        img {
          width: 406px;
        }
        .text2{
          &:after{
            background: #fff;
          }
        }
      }
      .firstPage-1-btns{
        &-item{
          width: 250px !important;
        }
      }
      .onlineBtn.ckpz {
        color: #fff;
      }
    }
  }
  .pageText{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .firstPage-1-text{
      position: absolute;
      top: 102px;
      left: 74px;
      text-align: left;
      img{
        width: 231px;
      }
      .text1{
        font-size: 30px;
        font-family: AlibabaPuHuiTiM;
        font-weight: bold;
        line-height: 30px;
        letter-spacing: 12px;
        margin: 43px 0 10px;
      }
      .text2{
        font-size: 30px;
        font-family: AlibabaPuHuiTiL;
        line-height: 30px;
        position: relative;
        &:after{
          content: "";
          display: block;
          width: 164px;
          height: 1px;//*no* */
          background: #757575;
          position: absolute;
          bottom: -25px;
          left: 0;
        }
      }
      .text3{
        font-size: 30px;
        font-family: AlibabaPuHuiTiL;
        line-height: 30px;
        margin-top: 46px;
        display: flex;
        align-items: center;
        span{
          font-size: 48px;
          font-family: AlibabaPuHuiTiR;
          line-height: 30px;
        }
      }
    }
    .firstPage-1-btns{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 188px;
      &-item{
        width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
        font-weight: 300;
        line-height: 25px;
        margin-bottom: 23px;
        .btns-item-name{
          font-size: 32px;
          font-family: AlibabaPuHuiTiM;
          line-height: 44px;
          font-weight: bold;
        }
      }
    }
    .onlineBtn {
      width: 310px;
      line-height: 62px;
      // background: #FFFFFF;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #383838;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      position: absolute;
      bottom: 42px;
      left: 50%;
      margin-left: -155px;
      border: 2px solid #FFFFFF;
      border-radius: 8px;
      &.yysj {
        bottom: 112px;
        background: #FFFFFF;
      }
    }
  }
  .firstPage-1-box {
    width: 100%;
    position: absolute;
    transition: all 1s ease-in;
    &.navOn {
      transform: translateY(0);
    }
    &.navOff {
      transform: translateY(-100vh);
    }
  }
  .firstPage-1 {
    width: 100%;
    height: calc(100vh - 100px);
  }
  .firstPage-2 {
    width: 100%;
    height: calc(100vh);
    // background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/1-2.png")
    //   no-repeat;
    background-size: cover;
    background-position: 50%;
    position: absolute;
    bottom: -200vh;
    left: 0;
  }
}
</style>
