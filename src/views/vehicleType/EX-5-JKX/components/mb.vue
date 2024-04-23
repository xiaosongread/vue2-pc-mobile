<template>
  <div class="ex5-jkx-mb">
    <TypeBanner :platform="'mb'" :vehicleName="vehicleName" :data="bannerData">
      <template slot="slogan">
        <div class="title"><span>{{$t('EX5JKXPage.bannerData.title[0]')}}</span><span>{{$t('EX5JKXPage.bannerData.title[1]')}}</span></div>
      </template>
    </TypeBanner>
    <JkxConfig :platform="'mb'" :config="configData"/>
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import JkxConfig from "@/components/vehicles/jkx-config";

export default {
  name: "MB",
  components: {
    TypeBanner,
    JkxConfig
  },
  data() {
    return{
      vehicleName: this.$t('EX5JKXPage.vehicleNamemb'),
      bannerData: {
        bg: `${this.Resource}EX5-JKX/mb/MB.png`,
        btnData: [
          {
            name: this.$t('EX5JKXPage.bannerData.btn[0]'),
            vehicle: 'EX5-JKX',
            type: 'sheet',
            class: 'btn-white',
            show: ['zh','en']
          }
        ]
      },
      configData: {
        priceBg: `${this.Resource}EX5-JKX/mb/price-mb.png`,
        customBg: `${this.Resource}EX5-JKX/mb/custom-mb.png`,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ex5-jkx-mb{
  .title{
    padding-top: 40px;
    display: flex;
    justify-content: flex-start;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    span:first-child{
      height: 30px;
      font-size: 30px;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
    span:last-child{
      height: 30px;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      font-size: 20px;
      color: #FFFFFF;
      opacity: 0.4;
    }
  }
}
</style>
