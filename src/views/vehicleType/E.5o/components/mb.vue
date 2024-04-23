<template>
  <div class="ex-5-mb">
    <TypeBanner :platform="'mb'" :data="bannerData" :vehicleName="vehicleName">
      <template slot="slogan">
        <div class="title" v-html="$t('E5PageC.bannerData.title')"></div>
        <div
          class="subtitle"
          v-if="lang === 'zh'"
          v-html="$t('E5PageC.bannerData.subtitle')"
        ></div>
        <div
          :class="[`price ${this.lang === 'zh' ? 'price-zh' : 'price-en'}`]"
          v-html="$t('E5PageC.bannerData.price')"
        ></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'mb'" :data="desc" />
    <TestDrive
      id="test-drive-spa"
      v-if="lang === 'zh'"
      :vehicleType="params.vehicleType"
      :isShowQRCode="params.isShowQRCode"
      :platform="params.platform"
      :pagetype="'E.5'"
      @testDriveSuccess="onChangeVehicle"
    />
    <dialogMobile v-if="currentDialog === 'e.5_01'" :data="e5c_01_mb_data" />
    <dialogMobile v-if="currentDialog === 'e.5_02'" :data="e5c_02_mb_data" />
    <dialogMobile v-if="currentDialog === 'e.5_03'" :data="e5c_03_mb_data" />
    <dialogMobile v-if="currentDialog === 'e.5_04'" :data="e5c_04_mb_data" />
    <dialogMobile v-if="currentDialog === 'e.5_05'" :data="e5c_05_mb_data" />
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
        vehicleType: "E.5",
        isShowQRCode: 0
      },
      vehicleName: this.$t("E5PageC.vehicleName"),
      bannerData: {
        bg: `${this.Resource}E.5/mb/banner_bg.jpg`,
        btnData: this.$t('E5PageC.bannerData.btn')
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t('E5PageC.descData')
      },
      e5c_01_mb_data: this.$t("E5PageC.diaLogData.data_01_mb"),
      e5c_02_mb_data: this.$t("E5PageC.diaLogData.data_02_mb"),
      e5c_03_mb_data: this.$t("E5PageC.diaLogData.data_03_mb"),
      e5c_04_mb_data: this.$t("E5PageC.diaLogData.data_04_mb"),
      e5c_05_mb_data: this.$t("E5PageC.diaLogData.data_05_mb")
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
    padding: 20px 0 10px 0;
  }
  .subtitle {
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: 300;
    color: #ffffff;
    line-height: 30px;
    padding: 3px 0 24px 0;
    position: relative;
    &::before {
      content: "";
      width: 164px;
      height: 1px;
      background: #ffffff;
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
