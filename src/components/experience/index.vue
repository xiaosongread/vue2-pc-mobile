<template>
  <div :class="[`experience-${platform}`]">
    <div :class="[`title-${platform}`]">体验威马</div>
    <div :class="[`action-${platform}`]">
      <div>预约试驾</div>
      <div>网点查询</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experience",
  props: {
    platform: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.experience-pc {
  width: 100%;
  height: 800px;
  //background-image: url("../../static/experience.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: 50%;
  overflow: hidden;
  margin-top: 135px;
  .title-pc {
    width: 237px;
    height: 82px;
    font-size: 60px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #ffffff;
    line-height: 82px;
    position: relative;
    margin: 100px auto;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -269px;
      width: 186px;
      height: 1px;
      background: #ffffff;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: calc(100% + 82px);
      width: 186px;
      height: 1px;
      background: #ffffff;
    }
  }
  .action-pc {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    > div {
      @include center;
      width: 265px;
      height: 60px;
      border: 1px solid #ffffff;
      font-size: 20px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #ffffff;
      letter-spacing: 2px;
      transition: 0.5s;
      cursor: pointer;
      &:hover{
        transition: 0.5s;
        background: #FFFFFF;
        color: #000000;
      }
    }
    >div:last-child{
      margin-left: 368px;
    }
  }
}
.experience-mb {
  width: 100%;
  height: 420px;
  //background-image: url("../../static/experience_mb.png");
  background-size: 100% 100%;
  overflow: hidden;
  margin-top: 135px;
  .title-mb {
    width: 158px;
    height: 54px;
    font-size: 40px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 54px;
    position: relative;
    margin: 44px auto 52px auto;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -142px;
      width: 108px;
      height: 1px;
      background: #ffffff;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: calc(100% + 34px);
      width: 108px;
      height: 1px;
      background: #ffffff;
    }
  }
  .action-mb {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    > div {
      @include center;
      width: 220px;
      height: 60px;
      border: 1px solid #ffffff;
      font-size: 20px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #ffffff;
      letter-spacing: 2px;
    }
    >div:last-child{
      margin-left: 74px;
    }
  }
}
</style>
