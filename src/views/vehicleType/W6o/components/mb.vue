<template>
  <div class="w6-mb">
    <TypeBanner :platform="'mb'" :data="bannerData" :vehicleName="vehicleName">
      <template slot="slogan">
        <div
          class="title"
          :class="{ titleEn: lang === 'en' }"
          v-html="$t('W6Page.bannerData.title')"
        ></div>
        <div
          class="subtitle"
          v-if="lang === 'zh'"
          v-html="$t('W6Page.bannerData.subtitle')"
        ></div>
        <div
          :class="[`price ${this.lang === 'zh' ? 'price-zh' : 'price-en'}`]"
          v-html="$t('W6Page.bannerData.price')"
        ></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'mb'" :data="desc" />
    <TypeView :platform="'mb'" :vehicle="'W6'" :data="view3D" />
    <TestDrive
      id="test-drive-spa"
      v-if="lang === 'zh'"
      :vehicleType="params.vehicleType"
      :isShowQRCode="params.isShowQRCode"
      :platform="params.platform"
      :pagetype="'W6'"
      @testDriveSuccess="onChangeVehicle"
    />
    <dialogMobile v-if="currentDialog === 'w6_01'" :data="w6data01" />
    <dialogMobile v-if="currentDialog === 'w6_02'" :data="w6data02" />
    <dialogMobile v-if="currentDialog === 'w6_03'" :data="w6data03" />
    <dialogMobile v-if="currentDialog === 'w6_04'" :data="w6data04" />
    <dialogMobile v-if="currentDialog === 'w6_05'" :data="w6data05" />
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TypeView from "@/components/vehicles/view3d";
import dialogMobile from "@/components/vehicles/dialogMobile";
import TestDrive from "@/components/testDrive/index";
import { mapState } from "vuex";

export default {
  name: "MB",
  components: { TypeBanner, TypeDesc, TypeView, TestDrive, dialogMobile },
  computed: {
    vehicleName: function() {
      return this.lang === "zh"
        ? `${this.Resource}W6/mb/slogan-name.png`
        : `${this.Resource}W6/mb/slogan-name-en.png`;
    },
    ...mapState(["currentDialog"])
  },
  data() {
    return {
      params: {
        platform: "mb",
        vehicleType: "W6",
        isShowQRCode: 0
      },
      isShow: true,
      bannerData: {
        bg: `${this.Resource}W6/mb/banner_bg.jpg`,
        btnData: this.$t('W6Page.bannerData.btn')
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t("W6Page.descList")
      },
      view3D: {
        name: `${this.Resource}W6/mb/wm6Background.png`,
        img: [
          `${this.Resource}W6/pc/wm6one.png`,
          `${this.Resource}W6/pc/wm6two.png`,
          `${this.Resource}W6/pc/wm6three.png`
        ],
        btn: this.$t("W6Page.view3Data.btn"),
        appearance: this.$t('W6Page.view3Data.appearancemb'),
        key: `https://cos-data.wm-imotor.com/website/360kanche/w6CN/index.html`,
        params: {
          zh: [
            `${this.Resource}W6/mb/params_zh_01.png`,
            `${this.Resource}W6/mb/params_zh_02.png`,
            `${this.Resource}W6/mb/params_zh_03.png`
          ],
          en: [
            `${this.Resource}W6/mb/params_en_01.png`,
            `${this.Resource}W6/mb/params_en_02.png`,
            `${this.Resource}W6/mb/params_en_03.png`
          ]
        }
      },
      w6data01: this.$t("W6Page.w6_01_data_mb"),
      w6data02: this.$t("W6Page.w6_02_data_mb"),
      w6data03: this.$t("W6Page.w6_03_data_mb"),
      w6data04: this.$t("W6Page.w6_04_data_mb"),
      w6data05: this.$t("W6Page.w6_05_data_mb")
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
.w6-mb {
  .title {
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #616161;
    text-align: left;
    letter-spacing: 11px;
    padding: 20px 0 24px 0;
  }
  .titleEn {
    font-size: 28px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #616161;
    text-align: left;
    letter-spacing: 0px;
    position: relative;
    &::before {
      content: "";
      width: 164px;
      height: 1px;
      background: #616161;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .subtitle {
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #616161;
    line-height: 30px;
    padding: 3px 0 24px 0;
    position: relative;
    &::before {
      content: "";
      width: 164px;
      height: 1px;
      background: #616161;
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
    color: #616161;
    line-height: 40px;
    padding-top: 24px;
    font-weight: 300;
    &-zh {
      line-height: 30px;
    }
    &-en {
      line-height: 42px;
    }
  }
  .description-mb {
    text-align: left;
  }
}
</style>
