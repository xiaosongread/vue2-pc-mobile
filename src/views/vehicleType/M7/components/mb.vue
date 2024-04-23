<template>
  <div class="m7-mb">
    <TypeBanner :platform="'mb'" :data="bannerData" :vehicleName="vehicleName">
      <template slot="slogan">
        <div class="title" v-html="$t('M7Page.bannerData.title')"></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'mb'" :data="desc" />
    <TestDrive
      v-if="lang === 'zh'"
      :vehicleType="params.vehicleType"
      :isShowQRCode="params.isShowQRCode"
      :platform="params.platform"
      @testDriveSuccess="onChangeVehicle"
    />
    <dialogMobile v-if="currentDialog === 'm7_01'" :data="m7_01_data" />
    <dialogMobile v-if="currentDialog === 'm7_02'" :data="m7_02_data" />
    <dialogMobile v-if="currentDialog === 'm7_03'" :data="m7_03_data" />
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TestDrive from "@/components/testDrive/index";
import dialogMobile from "@/components/vehicles/dialogMobile";
import { mapState } from "vuex";

export default {
  name: "MB",
  components: {
    TypeBanner,
    TypeDesc,
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
        isShowQRCode: 1,
        vehicleType: "M7"
      },
      vehicleName: this.$t("M7Page.bannerData.vehicleName"),
      bannerData: {
        bg: `${this.Resource}M7/mb/M7_BG.jpg`,
        btnData: [
          {
            name: "在线咨询",
            vehicle: "M7",
            type: "link",
            class: "btn-white",
            show: ["zh"]
          }
        ]
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t("M7Page.descList")
      },
      m7_01_data: this.$t("M7Page.data_01_mb"),
      m7_02_data: this.$t("M7Page.data_02_mb"),
      m7_03_data: this.$t("M7Page.data_03_mb")
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
.m7-mb {
  .title {
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #ffffff;
    line-height: 30px;
    text-align: left;
    padding: 20px 0 24px 0;
    position: relative;
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
