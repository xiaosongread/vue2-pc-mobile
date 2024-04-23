<template>
  <div class="e5-pc">
    <TypeBanner :platform="'pc'" :vehicleName="vehicleName" :data="bannerData">
      <template slot="slogan">
        <div class="title">{{ $t('E5Page.life') }}</div>
        <div class="price">
<!--          <p>{{ $t('E5Page.price[0]') }}</p>
          <p>{{ $t('E5Page.price[1]') }}</p>-->
          <p></p>
          <p></p>
        </div>
      </template>
    </TypeBanner>
    <div class="desc">
      <img v-lazy="descBg" data-test="test" alt="为出行量身定制，助力租赁、出行平台公司,提高运营效率、提升企业价值">
      <div class="text" v-html="$t('E5Page.desc')">{</div>
    </div>
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";

export default {
  name: "pc",
  components: {
    TypeBanner,
    TypeDesc
  },
  data(){
    return{
      vehicleName: this.$t('E5Page.sloganName'),
      bannerData: {
        bg: `${this.Resource}E5/pc/PC.png`,
        btnData: [
          {
            name: this.$t('E5Page.more'),
            vehicle: 'E.5',
            type: 'sheet',
            class: 'btn-white',
            show: ['zh','en']
          }
        ]
      },
      descBg: `${this.Resource}E5/pc/desc_bg.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.e5-pc{
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .title{
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    padding: 20px 0 24px 0;
    position: relative;
    &::after{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 165px;
      height: 2px;
      background: #FFFFFF;
    }
  }
  .price{
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    color: #FFFFFF;
    line-height: 30px;
    font-weight: 300;
    padding-top: 23px;
    padding-bottom: 130px;
    p:last-child{
      padding-top: 30px;
    }
  }
  .desc{
    position: relative;
    z-index: 1;
    height: 1285px;
    img{
      width: 100%;
    }
    .text{
      width: 100%;
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 202px;
      transform: translateX(-50%);
      font-size: 40px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 60px;
    }
  }
}
</style>
