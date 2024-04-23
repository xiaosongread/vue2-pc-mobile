<template>
  <div class="firstPage">
    <div>
      <div class="pageText">
        <div class="firstPage-1-text">
          <img
            data-src="https://cos-data.wm-imotor.com/website/W6/pc/w6/carName.png"
            class="swiper-lazy"
          />
          <p class="text1">智能电动车停车专家</p>
          <p class="text2">超算力可进化智能纯电SUV</p>
          <p class="text3">综合补贴后：¥<span>193,800</span>元起</p>
          <div class="yysj" @click="yysj">预约试驾</div>
          <div class="ckpz" @click="openConfig">查看配置</div>
        </div>
        <ul class="firstPage-1-btns">
          <li class="firstPage-1-btns-item">
            <p class="btns-item-name">NEDC 520公里</p>
            <p>超长续航</p>
          </li>
          <li class="firstPage-1-btns-item">
            <p class="btns-item-name">大空间</p>
            <p>精致实用</p>
          </li>
          <li class="firstPage-1-btns-item">
            <p class="btns-item-name">智能驾驶平台</p>
            <p>Living Pilot</p>
          </li>
          <li class="firstPage-1-btns-item">
            <p class="btns-item-name">智能座舱平台</p>
            <p>Living Engine</p>
          </li>
        </ul>
      </div>
      <div :class="['firstPage-1-box', finshFirstZz ? 'navOff' : 'navOn']">
        <div class="firstPage-2"></div>
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
    activeIndex: {
      type: Number,
      default: 0
    },
    finshFirstZz: {
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
  methods: {
    yysj() {
      this.$router.push({
        path: "/TestDrive"
      });
    },
    openConfig() {
      this.$router.push({
        path: "/Configuration",
        query: {
          type: "W6"
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
  background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/1-1.jpg")
    no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  overflow: hidden;
  .pageText{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .firstPage-1-text{
      position: absolute;
      top: 229px;
      left: 122px;
      img{
        width: 231px;
      }
      .text1{
        font-size: 30px;
        font-family: AlibabaPuHuiTiM;
        color: #757575;
        line-height: 30px;
        letter-spacing: 10px;
        margin: 38px 0 11px;
      }
      .text2{
        font-size: 30px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 30px;
        position: relative;
        &:after{
          content: "";
          display: block;
          width: 164px;
          height: 1px;
          background: #CCCCCC;
          position: absolute;
          bottom: -25px;
          left: 0;
        }
      }
      .text3{
        font-size: 30px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 30px;
        margin-top: 46px;
        span{
          font-size: 48px;
          font-family: AlibabaPuHuiTiR;
          color: #757575;
          line-height: 30px;
        }
      }
      .yysj{
        width: 310px;
        line-height: 62px;
        text-align: center;
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        background: #FFFFFF;
        border-radius: 8px;
        margin-top: 76px;
        cursor: pointer;
      }
      .ckpz{
        width: 310px;
        line-height: 62px;
        border-radius: 8px;
        border: 1px solid #757575;
        text-align: center;
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        border-radius: 8px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
    .firstPage-1-btns{
      width: 1236px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 88px;
      left: 50%;
      margin-left: -618px;
      &-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
        font-weight: 300;
        color: #757575;
        line-height: 25px;
        .btns-item-name{
          font-size: 32px;
          font-family: AlibabaPuHuiTiM;
          color: #757575;
          line-height: 44px;
        }
      }
    }
  }
  .firstPage-1-box {
    width: 100%;
    height: 100vh;
    position: absolute;
    transition: all 1s ease-in;
    bottom: -100vh;
    &.navOn {
      transform: translateY(0);
    }
    &.navOff {
      transform: translateY(-100vh);
    }
  }
  .firstPage-1 {
    width: 100%;
    height: 100vh;
    position: relative;
    .firstPage-1-text{
      position: absolute;
      top: 289px;
      left: 122px;
      img{
        width: 231px;
      }
      .text1{
        font-size: 30px;
        font-family: AlibabaPuHuiTiM;
        color: #757575;
        line-height: 30px;
        letter-spacing: 10px;
        margin: 38px 0 11px;
      }
      .text2{
        font-size: 30px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 30px;
        position: relative;
        &:after{
          content: "";
          display: block;
          width: 164px;
          height: 1px;
          background: #CCCCCC;
          position: absolute;
          bottom: -25px;
          left: 0;
        }
      }
      .text3{
        font-size: 30px;
        font-family: AlibabaPuHuiTiL;
        color: #757575;
        line-height: 30px;
        margin-top: 46px;
        span{
          font-size: 48px;
          font-family: AlibabaPuHuiTiR;
          color: #757575;
          line-height: 30px;
        }
      }
      .yysj{
        width: 310px;
        line-height: 62px;
        text-align: center;
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        background: #FFFFFF;
        border-radius: 8px;
        margin-top: 76px;
        cursor: pointer;
      }
      .ckpz{
        width: 310px;
        line-height: 62px;
        border-radius: 8px;
        border: 1px solid #757575;
        text-align: center;
        font-size: 24px;
        font-family: AlibabaPuHuiTiR;
        color: #757575;
        border-radius: 8px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
    // background-color: red;
    // background-attachment: fixed;
  }
  .firstPage-2 {
    width: 100%;
    height: 100vh;
    background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/1-2.png")
      no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    background-position: center;
  }
}
</style>
