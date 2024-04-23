<template>
  <div class="success-pc" v-if="isShowQRCode === 2">
    <div class="title">您已预约成功</div>
    <div class="qrcode-container"><img :src="qrcode" alt="专属客服" /></div>
    <div class="detail">
      <p>扫码添加专属客服</p>
      <p>获取最新车型资讯</p>
      <p>立享超值购车福利</p>
    </div>
  </div>
</template>

<script>
import { configInfo } from "@/api/TestDriveSuccess";

export default {
  name: "testDriveSuccessPC",
  props: {
    isShowQRCode: { // 0:预约试驾 1：在线咨询 2： 预约试驾成功
      type: Number
    }
  },
  data() {
    return {
      qrcode: ""
    };
  },
  watch: {
    isShowQRCode: function(val) {
      if (val === 2) {
        this.getPageData();
      }
    }
  },
  methods: {
    async getPageData() {
      try {
        const res = await configInfo({
          pointType: 9,
          isCarUser: 0
        });
        if (res.code === 1) {
          this.qrcode = res.data.imgUrl;
        }
      } catch (error) {
        // this.$toast(error.desc || '抱歉，加载出错啦')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.success-pc {
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .title {
    font-size: 18px;
    line-height: 54px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  .qrcode-container{
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100px;
    background:
      linear-gradient(to top, #e2e2e2, #e2e2e2) left top no-repeat,/*上左*/
      linear-gradient(to right, #e2e2e2, #e2e2e2) left top no-repeat,/*左上*/
      linear-gradient(to left, #e2e2e2, #e2e2e2) right top no-repeat,/*上右*/
      linear-gradient(to bottom, #e2e2e2, #e2e2e2) right top no-repeat,/*上右*/
      linear-gradient(to left, #e2e2e2, #e2e2e2) left bottom no-repeat,/*下左*/
      linear-gradient(to bottom, #e2e2e2, #e2e2e2) left bottom no-repeat,/*左下*/
      linear-gradient(to top, #e2e2e2, #e2e2e2) right bottom no-repeat,/*下右*/
      linear-gradient(to left, #e2e2e2, #e2e2e2) right bottom no-repeat;/*右下*/
    background-size:1px 16px, 16px 1px, 1px 16px, 16px 1px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90px;
    }
  }
  .detail {
    padding-top: 30px;
    padding-bottom: 40px;
    p {
      font-size: 16px;
      line-height: 24px;
      color: #666666;
    }
  }
}
</style>
