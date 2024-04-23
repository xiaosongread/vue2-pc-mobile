<template>
  <div :class="[`service service-${platform}`]" v-if="isShowQRCode === 1">
    <template v-if="platform === 'pc'">
      <div class="left">
        <p>扫码咨询专属客服：</p>
        <p>即刻发现最适合您的威马车型随时获取最新最全的产品资讯快捷领取购车福利省钱又省心</p>
      </div>
      <div class="right">
        <img :src="service" alt="专属客服">
      </div>
    </template>
    <template v-else>
      <div class="title">专属顾问为您提供以下服务</div>
      <div class="content">
        1. 针对您的用车需求、用车场景推荐适合您的车型<br>
        2. 一对一专属服务，随时为您提供专业的产品资讯<br>
        3. 不定期开展专属福利活动，替您省钱省心买好车<br>
      </div>
      <div class="right-now" @click="onService">立即咨询专属客服</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    platform: {
      type: String,
      default: 'pc'
    },
    isShowQRCode: {
      type: Number, /* 是否展示企微二维码(目前用户M7车型展示)(1:是 0:否)*/
      default: 1
    }
  },
  data() {
    return{
      service: `${this.Resource}service_online.jpg`,
    }
  },
  methods: {
    onService() {
      window.open('https://www.wm-imotor.com/statistics/wxscheme/wxJumpMiddlePage.html?id=28&cfgId=421&type=1')
    }
  }
}
</script>

<style lang="scss" scoped>
.service{
  &-pc{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 98px 32px 197px 40px;
    .left{
      p:first-child{
        width: 220px;
        height: 33px;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #333333;
        line-height: 33px;
        text-align: left;
      }
      p:last-child{
        text-align: left;
        width: 257px;
        height: 81px;
        font-size: 18px;
        //font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #666666;
        line-height: 27px;
        letter-spacing: 1px;
        padding-top: 36px;
      }
    }
    .right{
      img{
        width: 162px;
      }
    }
  }
  &-mb{
    .title{
      margin-top: 62px;
      width: 416px;
      height: 44px;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 44px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      &::before{
        content: "";
        width: 130px;
        height: 2px;
        background: linear-gradient(46deg, rgba(94, 210, 183, 0) 0%, #30A680 100%);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -130px;
      }
      &::after{
        content: "";
        width: 130px;
        height: 2px;
        background: linear-gradient(46deg, #30A680 0%, rgba(94, 210, 183, 0) 100%);
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: -130px;
      }
    }
    .content{
      width: 534px;
      height: 156px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 52px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 86px;
    }
    .right-now{
      @include center;
      width: 488px;
      height: 60px;
      background: #30A680;
      font-size: 24px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      color: #E9E9E9;
      margin: 118px auto 96px auto;
    }
  }
}
</style>
