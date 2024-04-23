<template>
<div class="success" v-show="success">
  <div class="container">
    <div class="details" :style="{backgroundImage: 'url(' + bg + ')'}">
      <img :src="close" alt="关闭" class="close" @click="onClose">
      <div class="headline">预约成功</div>
      <div class="text">
        <p>感谢预约威马汽车。</p>
        <p>我们会尽快电话联系你确定具体的试驾时间。</p>
      </div>
      <img :src="qrcode" data-test="test" alt="预约成功，在线咨询" class="qrcode">
      <div class="desc">
        <p>立即关注我们的服务号</p>
        <p>我们会将预约信息和注意事项及时通知你。</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Success",
  props: {
    success: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return{
      bg: `${this.Resource}EX5-Z/test_drive_success.png`,
      close: `${this.Resource}EX5-Z/close.png`,
      qrcode: `${this.Resource}EX5-Z/success_qrcode.png`,
    }
  },
  methods: {
    onClose() {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.success{
  width: 100vw;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  position: fixed;
  z-index: 99999;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  .container{
    width: 100%;
    height: 100%;
    @include center;
    .details{
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: 50%;
      width: 79.5%;
      //height: 844px;
      position: relative;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      padding-top: 360px;
      .close{
        width: 28px;
        position: absolute;
        top: 32px;
        right: 32px;
      }
      .headline{
        font-size: 32px;
        font-weight: 600;
        color: #31BFA0;
        line-height: 29px;
      }
      .text{
        font-size: 24px;
        font-weight: 400;
        color: #656C77;
        line-height: 40px;
        margin-top: 34px;
      }
      .qrcode{
        width: 152px;
        margin-left: auto;
        margin-right: auto;
      }
      .desc{
        font-size: 24px;
        font-weight: 400;
        color: #A2AAB1;
        line-height: 40px;
        margin-top: 28px;
        padding-bottom: 50px;
      }
    }
  }
}
</style>
