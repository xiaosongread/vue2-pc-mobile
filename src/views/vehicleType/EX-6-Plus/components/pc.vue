<template>
  <div class="ex6-plus-pc">
    <TypeBanner :data="bannerData" :vehicleName="$t('EX6PlusPage.vehicleName')" :platform="'pc'">
      <template slot="slogan">
        <div class="title" v-html="$t('EX6PlusPage.bannerData.title')"></div>
        <div :class="[`price ${this.lang === 'zh' ? 'price-zh' : 'price-en'}`]" v-html="$t('EX6PlusPage.bannerData.price')"></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'pc'" :data="desc"/>
    <TypeView :platform="'pc'" :vehicle="'ex6'" :data="view3D"/>
    <div class="test-drive-container" v-if="lang === 'zh'">
      <img :src="testDriveBg" data-test="test" alt="威马汽车，预约试驾，EX6-Plus">
      <TestDrive :platform="'pc'" :vehicleIndex="2" :between="'service'"/>
    </div>
    <SmpCover/>

    <SmpDialog :platform="'pc'" :title="ex6_01_data.title" v-if="currentDialog === 'ex6_01'">
      <template slot="content">
        <InSide :platform="'pc'" :data="ex6_01_data.one"/>
        <OutSide :platform="'pc'" :data="ex6_01_data.two"/>
        <InSide :platform="'pc'" :data="ex6_01_data.three"/>
        <OutSide :platform="'pc'" :data="ex6_01_data.four"/>
        <InSide :platform="'pc'" :data="ex6_01_data.five"/>
      </template>
    </SmpDialog>

    <SmpDialog :platform="'pc'" :title="ex6_02_data.title" v-if="currentDialog === 'ex6_02'">
      <template slot="content">
        <InSide :platform="'pc'" :data="ex6_02_data.one"/>
        <OutSide :platform="'pc'" :data="ex6_02_data.two"/>
        <InSide :platform="'pc'" :data="ex6_02_data.three"/>
      </template>
    </SmpDialog>

    <SmpDialog :platform="'pc'" :title="ex6_03_data.title" v-if="currentDialog === 'ex6_03'">
      <template slot="content">
        <InSide :platform="'pc'" :data="ex6_03_data.one"/>
        <OutSide :platform="'pc'" :data="ex6_03_data.two"/>
        <InSide :platform="'pc'" :data="ex6_03_data.three"/>
      </template>
    </SmpDialog>

    <SmpDialog :platform="'pc'" :title="ex6_04_data.title" v-if="currentDialog === 'ex6_04'">
      <template slot="content">
        <InSide :platform="'pc'" :data="ex6_04_data.one"/>
        <OutSide :platform="'pc'" :data="ex6_04_data.two"/>
        <InSide :platform="'pc'" :data="ex6_04_data.three"/>
      </template>
    </SmpDialog>


  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TypeView from "@/components/vehicles/view3d";
import SmpCover from "@/components/vehicles/smpCover";
import SmpDialog from "@/components/LearnMoreDialog/dialog";
import InSide from "@/components/vehicles/dialog/inside";
import OutSide from "@/components/vehicles/dialog/outside";
import TestDrive from "@/components/testDrive/index";
import { mapState } from "vuex";

export default {
  name: "PC",
  components: {
    TypeBanner,
    TypeDesc,
    TypeView,
    SmpCover,
    SmpDialog,
    InSide,
    OutSide,
    TestDrive
  },
  computed: {
    ...mapState(['currentDialog', 'dialogStatus'])
  },
  watch: {
    dialogStatus: function(val) {
      console.log('监听', val)
      if(val){
        document.body.style.overflow = "hidden"
      } else{
        document.body.style.overflow = "auto"
      }
    }
  },
  data() {
    return{
      bannerData: {
        bg: `${this.Resource}EX6-PLUS/PC.png`,
        btnData: [
          {
            name: this.$t('EX6PlusPage.bannerData.btn[0]'),
            vehicle: 'ex6-plus',
            type: 'service',
            class: 'btn-black',
            show: ['zh','en']
          },
          {
            name: this.$t('EX6PlusPage.bannerData.btn[1]'),
            vehicle: '',
            type: 'service',
            link: '',
            class: 'btn-transparent-black btn-last',
            show: ['zh']
          }
        ],
        desc: [
          {
            headline: this.$t('EX6PlusPage.bannerData.desc[0].headline'),
            desc: this.$t('EX6PlusPage.bannerData.desc[0].desc'),
          },
          {
            headline: this.$t('EX6PlusPage.bannerData.desc[1].headline'),
            desc: this.$t('EX6PlusPage.bannerData.desc[1].desc')
          },
          {
            headline: this.$t('EX6PlusPage.bannerData.desc[2].headline'),
            desc: this.$t('EX6PlusPage.bannerData.desc[2].desc')
          },
          {
            headline: this.$t('EX6PlusPage.bannerData.desc[3].headline'),
            desc: this.$t('EX6PlusPage.bannerData.desc[3].desc')
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
            details: this.$t('EX6PlusPage.descData[0].details'),
            bg: require("@/static/EX-6-PLUS/desc_01.png")
          },
          {
            key: 'ex6_02',
            title: this.$t('EX6PlusPage.descData[1].title'),
            details: this.$t('EX6PlusPage.descData[1].details'),
            bg: require("@/static/EX-6-PLUS/desc_02.png")
          },
          {
            key: 'ex6_03',
            title: this.$t('EX6PlusPage.descData[2].title'),
            details: this.$t('EX6PlusPage.descData[2].details'),
            bg: require("@/static/EX-6-PLUS/desc_03.png")
          },
          {
            key: 'ex6_04',
            title: this.$t('EX6PlusPage.descData[3].title'),
            details: this.$t('EX6PlusPage.descData[3].details'),
            bg: require("@/static/EX-6-PLUS/desc_04.png")
          }
        ]
      },
      view3D: {
        name: require("@/static/EX-6-PLUS/text.png"),
        img: [require("@/static/EX-6-PLUS/car.png")],
        btn: this.$t('EX6PlusPage.view3Data.btn'),
        params: [
          {
            name: this.$t('EX6PlusPage.view3Data.params[0]'),
            number: '160',
            unit: 'KW'
          },
          {
            name: this.$t('EX6PlusPage.view3Data.params[1]'),
            number: '501',
            unit: 'KM'
          },
          {
            name: this.$t('EX6PlusPage.view3Data.params[2]'),
            number: '35',
            unitMulti: ['MIN', this.$t('EX6PlusPage.view3Data.params[3]')]
          }
        ]
      },
      testDriveBg: require('@/static/EX-6-PLUS/test_drive_bg.png'),
      mapBg: require('@/static/W6/pc/wm8.png'),
      ex6_01_data: this.$t('EX6PlusPage.dialogData.data_01'),
      ex6_02_data: this.$t('EX6PlusPage.dialogData.data_02'),
      ex6_03_data: this.$t('EX6PlusPage.dialogData.data_03'),
      ex6_04_data: this.$t('EX6PlusPage.dialogData.data_04')
    }
  }
}
</script>

<style lang="scss" scoped>
.ex6-plus-pc{
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
      background: #CCCCCC;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .price{
    text-align: left;
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: 300;
    color: #333333;
    padding: 24px 0 130px 0;
    &-zh{
      line-height: 30px;
    }
    &-en{
      line-height: 42px;
    }
  }
  .test-drive-container{
    width: 100%;
    position: relative;
    z-index: 1;
    >img{
      width: 100%;
    }
  }
  .map{
    width: 100%;
    height: auto;
  }
}
</style>
