<template>
  <div class="ex-5-mb">
    <TypeBanner :platform="'mb'" :data="bannerData" :vehicleName="vehicleName">
      <template slot="slogan">
        <div class="title" v-html="$t('EX5Page.bannerData.title')"></div>
        <div
          :class="[`price ${this.lang === 'zh' ? 'price-zh' : 'price-en'}`]"
          v-html="$t('EX5Page.bannerData.price')"
        ></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'mb'" :data="desc" />
    <TypeView :platform="'mb'" :vehicle="'EX5-Z'" :data="view3D" />
    <TestDrive
      id="test-drive-spa"
      v-if="lang === 'zh'"
      :vehicleType="params.vehicleType"
      :isShowQRCode="params.isShowQRCode"
      :platform="params.platform"
      :pagetype="'EX5-Z'"
      @testDriveSuccess="onChangeVehicle"
    />
    <dialogMobile v-if="currentDialog === 'ex5_01'" :data="ex5_01_mb_data" />
    <dialogMobile v-if="currentDialog === 'ex5_02'" :data="ex5_02_mb_data" />
    <dialogMobile v-if="currentDialog === 'ex5_03'" :data="ex5_03_mb_data" />
    <dialogMobile v-if="currentDialog === 'ex5_04'" :data="ex5_04_mb_data" />
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TypeView from "@/components/vehicles/view3d";
import TestDrive from "@/components/testDrive/index";
import dialogMobile from "@/components/vehicles/dialogMobile";
import { mapState } from "vuex";

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
    return {
      params: {
        platform: "mb",
        vehicleType: "EX5-Z",
        isShowQRCode: 0
      },
      vehicleName: this.$t("EX5Page.vehicleName"),
      bannerData: {
        bg: `${this.Resource}EX5-Z/mb/banner_bg.png`,
        btnData: this.$t('EX5Page.bannerData.btn')
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: [
          {
            key: "ex5_01",
            title: this.$t("EX5Page.descData[0].title"),
            bg: `${this.Resource}EX5-Z/mb/desc_01.png`
          },
          {
            key: "ex5_02",
            title: this.$t("EX5Page.descData[1].title"),
            bg: `${this.Resource}EX5-Z/mb/desc_02.png`
          },
          {
            key: "ex5_03",
            title: this.$t("EX5Page.descData[2].title"),
            bg: `${this.Resource}EX5-Z/mb/desc_03.png`
          },
          {
            key: "ex5_04",
            title: this.$t("EX5Page.descData[3].title"),
            bg: `${this.Resource}EX5-Z/mb/desc_04.png`
          }
        ]
      },
      view3D: {
        name: `${this.Resource}EX5-Z/text.png`,
        btn: this.$t("EX5Page.view3Data.btn"),
        appearance: this.$t("EX5Page.view3Data.appearancemb"),
        key: "https://cos-data.wm-imotor.com/website/360kanche/ex5zCN/index.html",
        params: {
          zh: [`${this.Resource}EX5-Z/params_zh_01.png`,`${this.Resource}EX5-Z/params_zh_02.png`,`${this.Resource}EX5-Z/params_zh_03.png`],
          en: [`${this.Resource}EX5-Z/params_en_03.png`, `${this.Resource}EX5-Z/params_en_03.png`, `${this.Resource}EX5-Z/params_en_03.png`]
        }
      },
      ex5_01_mb_data: this.$t("EX5Page.diaLogData.data_01_mb"),
      ex5_02_mb_data: this.$t("EX5Page.diaLogData.data_02_mb"),
      ex5_03_mb_data: this.$t("EX5Page.diaLogData.data_03_mb"),
      ex5_04_mb_data: this.$t("EX5Page.diaLogData.data_04_mb")
    };
  },
  methods: {
    onChangeVehicle(v) {
      Object.assign(this.params, v);
    }
  }
};
</script>

<style lang="scss" scoped>
.ex-5-mb {
  .title {
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #ffffff;
    line-height: 30px;
    text-align: left;
    padding: 20px 0 24px 0;
    position: relative;
    &::before {
      content: "";
      width: 164px;
      height: 1px;
      background: #cccccc;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .price {
    text-align: left;
    height: 40px;
    font-size: 28px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    color: #ffffff;
    line-height: 40px;
    padding-top: 24px;
    &-zh {
      line-height: 30px;
    }
    &-en {
      line-height: 42px;
    }
  }
}
</style>
