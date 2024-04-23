<template>
  <div class="ex-6-mb">
    <TypeBanner :platform="'mb'" :data="bannerData" :vehicleName="vehicleName">
      <template slot="slogan">
        <div class="title" v-html="$t('EX5Page.bannerData.title')"></div>
        <div :class="[`price ${this.lang === 'zh' ? 'price-zh' : 'price-en'}`]" v-html="$t('EX5Page.bannerData.price')"></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'mb'" :data="desc"/>
    <TypeView :platform="'mb'" :vehicle="'ex5'" :data="view3D"/>
    <TestDrive :vehicleImg="'EX6-PLUS-MB.png'" :platform="'mb'" :vehicleIndex="2" :between="'service'"></TestDrive>
    <dialogMobile v-if="currentDialog === 'ex6_01'" :data="ex6_01_mb_data" />
    <dialogMobile v-if="currentDialog === 'ex6_02'" :data="ex6_02_mb_data" />
    <dialogMobile v-if="currentDialog === 'ex6_03'" :data="ex6_03_mb_data" />
    <dialogMobile v-if="currentDialog === 'ex6_04'" :data="ex6_04_mb_data" />
  </div>
</template>

<script>
import TypeBanner from '@/components/vehicles/banner'
import TypeDesc from '@/components/vehicles/description'
import TypeView from '@/components/vehicles/view3d'
import TestDrive from '@/components/testDrive/index'
import dialogMobile from "@/components/vehicles/dialogMobile"
import {mapState} from "vuex"
export default {
  name: "MB",
  components: {
    TypeBanner,
    TypeDesc,
    TypeView,
    TestDrive,
    dialogMobile
  },
  computed: {
    ...mapState(["currentDialog"])
  },
  data() {
    return{
      vehicleName: this.$t('EX6PlusPage.vehicleName'),
      bannerData: {
        bg: require("@/static/EX-6-PLUS/MB.png"),
        btnData: [
          {
            name: this.$t('EX6PlusPage.bannerData.btn[0]'),
            vehicle: 'ex6',
            type: 'drive',
            class: 'btn-white',
            show: ['zh','en']
          },
          {
            name: this.$t('EX6PlusPage.bannerData.btn[1]'),
            vehicle: '',
            type: 'service',
            link: '',
            class: 'btn-transparent btn-last',
            show: ['zh']
          }
        ]
      },
      desc: {
        show: true,
        btn: this.$t('commonSet.seeMore'),
        desc: [
          {
            key: 'ex6_01',
            title: this.$t('EX6PlusPage.descData[0].title'),
            bg: require("@/static/EX-6-PLUS/desc_01-mb.png")
          },
          {
            key: 'ex6_02',
            title: this.$t('EX6PlusPage.descData[1].title'),
            bg: require("@/static/EX-6-PLUS/desc_02-mb.png")
          },
          {
            key: 'ex6_03',
            title: this.$t('EX6PlusPage.descData[2].title'),
            bg: require("@/static/EX-6-PLUS/desc_03-mb.png")
          },
          {
            key: 'ex6_04',
            title: this.$t('EX6PlusPage.descData[3].title'),
            bg: require("@/static/EX-6-PLUS/desc_04-mb.png")
          }
        ]
      },
      view3D: {
        name: require("@/static/EX-6-PLUS/text_mb.png"),
        img: [require("@/static/EX-6-PLUS/car_mb.png")],
        btn: this.$t('EX6PlusPage.view3Data.btn'),
        params: {
          zh: [require('@/static/EX-6-PLUS/params_zh_01.png'), require('@/static/EX-6-PLUS/params_zh_02.png'), require('@/static/EX-6-PLUS/params_zh_03.png')],
          en: [require('@/static/EX-6-PLUS/params_en_01.png'), require('@/static/EX-6-PLUS/params_en_02.png'), require('@/static/EX-6-PLUS/params_en_03.png')],
        }
      },
      ex6_01_mb_data: [
          ...this.$t('EX6PlusPage.dialogData.data_01.one.list'),
        ...this.$t('EX6PlusPage.dialogData.data_01.two.list[0].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_01.three.list'),
        ...this.$t('EX6PlusPage.dialogData.data_01.four.list[0].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_01.five.list'),
      ],
      ex6_02_mb_data: [
          ...this.$t('EX6PlusPage.dialogData.data_02.one.list'),
        ...this.$t('EX6PlusPage.dialogData.data_02.two.list[0].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_02.two.list[1].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_02.two.list[2].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_02.three.list')
      ],
      ex6_03_mb_data: [
          ...this.$t('EX6PlusPage.dialogData.data_03.one.list'),
        ...this.$t('EX6PlusPage.dialogData.data_03.two.list[0].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_03.two.list[0].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_03.three.list'),
      ],
      ex6_04_mb_data: [
          ...this.$t('EX6PlusPage.dialogData.data_04.one.list'),
        ...this.$t('EX6PlusPage.dialogData.data_04.two.list[0].desc'),
        ...this.$t('EX6PlusPage.dialogData.data_04.three.list')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ex-6-mb{
  .title{
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #333333;
    line-height: 30px;
    text-align: left;
    padding: 20px 0 24px 0;
    position: relative;
    &::before{
      content: '';
      width: 164px;
      height: 1px;
      background: #333333;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .price{
    text-align: left;
    height: 40px;
    font-size: 28px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    color: #333333;
    line-height: 40px;
    padding-top: 24px;
    &-zh{
      line-height: 30px;
    }
    &-en{
      line-height: 42px;
    }
  }
}
</style>
