<template>
  <div class="e5-mb">
    <TypeBanner :platform="'mb'" :vehicleName="vehicleName" :data="bannerData">
      <template slot="slogan">
        <div class="title">{{ $t('E5Page.life') }}</div>
        <div class="price">
          <p>{{ $t('E5Page.price[0]') }}</p>
          <p>{{ $t('E5Page.price[1]') }}</p>
        </div>
      </template>
    </TypeBanner>
    <div class="desc">
      <img v-lazy="descBg" data-test="test">
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
      vehicleName: this.$t('E5Page.sloganNameMb'),
      bannerData: {
        bg: `${this.Resource}E5/mb/MB.png`,
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
      descBg: `${this.Resource}E5/mb/desc_bg_mb.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.e5-mb{
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .slogan{
    position: absolute;
    z-index: 2;
    top: 152px;
    left: 44px;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    .zh{
      width: 242px;
    }
    .en{
      width: 306px;
    }
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
      font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
      color: #FFFFFF;
      font-weight: 300;
      margin-top: 23px;
      font-size: 28px;
      line-height: 40px;
      p:last-child{
        padding-top: 24px;
      }
    }
  }
  .more{
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 220px;
    transform: translateX(-50%);
    height: 62px;
    line-height: 62px;
    font-size: 24px;
    cursor: pointer;
    background: #FFFFFF;
    color: #000000;
    margin-top: 97px;
    &-zh{
      padding: 0 106px;
    }
    &-en{
      padding: 0 92px;
      white-space: nowrap;
    }
  }
  .desc{
    position: relative;
    z-index: 1;
    img{
      width: 100%;
    }
    .text{
      width: 100%;
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 166px;
      transform: translateX(-50%);
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 60px;
    }
  }
}
</style>
