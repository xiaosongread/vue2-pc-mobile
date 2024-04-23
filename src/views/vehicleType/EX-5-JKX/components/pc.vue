<template>
  <div class="ex5-jkx-pc">
    <TypeBanner :data="bannerData" :vehicleName="$t('EX5JKXPage.vehicleName')" :platform="'pc'">
      <template slot="slogan">
        <div class="title"><span>{{$t('EX5JKXPage.bannerData.title[0]')}}</span><span>{{$t('EX5JKXPage.bannerData.title[1]')}}</span></div>
      </template>
    </TypeBanner>
    <JkxConfig :platform="'pc'" :config="configData"/>
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import JkxConfig from "@/components/vehicles/jkx-config";

export default {
  name: "PC",
  components: {
    TypeBanner,
    JkxConfig
  },
  data() {
    return{
      bannerData: {
        bg: `${this.Resource}EX5-JKX/pc/PC.png`,
        btnData: [
          {
            name: this.$t('EX5JKXPage.bannerData.btn[0]'),
            vehicle: 'EX5-JKX',
            type: 'sheet',
            class: 'btn-white',
            show: ['zh','en']
          }
        ],
        desc: [
          {
            headline: this.$t('EX5JKXPage.bannerData.desc[0].headline'),
            desc: this.$t('EX5JKXPage.bannerData.desc[0].desc')
          },
          {
            headline: this.$t('EX5JKXPage.bannerData.desc[1].headline'),
            desc: this.$t('EX5JKXPage.bannerData.desc[1].desc')
          },
          {
            headline: this.$t('EX5JKXPage.bannerData.desc[2].headline'),
            desc: this.$t('EX5JKXPage.bannerData.desc[2].desc')
          }
        ]
      },
      bannerSlogan: {
        name: `${this.Resource}EX5-JKX/pc/slogan-name.png`
      },
      configData: {
        priceBg: `${this.Resource}EX5-JKX/pc/price.png`,
        customBg: `${this.Resource}EX5-JKX/pc/custom.png`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ex5-jkx-pc{
  .title{
    display: flex;
    justify-content: flex-start;
    padding: 40px 0 130px 0;
    span:first-child{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 30px;
      font-size: 30px;
      line-height: 30px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      color: #FFFFFF;
    }
    span:last-child{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 30px;
      color: #FFFFFF;
      font-size: 14px;
      opacity: 0.4;
    }
  }
}
</style>
