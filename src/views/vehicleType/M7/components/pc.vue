<template>
  <div class="m7-pc">
    <TypeBanner
      :data="bannerData"
      :vehicleName="$t('M7Page.bannerData.vehicleName')"
      :platform="'pc'"
    >
      <template slot="slogan">
        <div class="title">{{ $t("M7Page.bannerData.title") }}</div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'pc'" :data="desc" />
<!--    <Animations></Animations>-->
    <div class="test-drive-container" v-if="lang === 'zh'">
      <img :src="testDriveBg" style="object-fit: cover" data-test="test" alt="全新威马M7" />
      <TestDrive
        :vehicleType="params.vehicleType"
        :isShowQRCode="params.isShowQRCode"
        :platform="params.platform"
        @testDriveSuccess="onChangeVehicle"
      />
    </div>
    <SmpCover />
    <SmpDialog
      :platform="'pc'"
      :title="m7_01_data.title"
      v-if="currentDialog === 'm7_01'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="m7_01_data.one" />
        <OutSide :platform="'pc'" :data="m7_01_data.two" />
        <InSide :platform="'pc'" :data="m7_01_data.three" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="m7_02_data.title"
      v-if="currentDialog === 'm7_02'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="m7_02_data.one" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="m7_03_data.title"
      v-if="currentDialog === 'm7_03'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="m7_03_data.one" />
        <OutSide :platform="'pc'" :data="m7_03_data.two" />
      </template>
    </SmpDialog>
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TestDrive from "@/components/testDrive/index";
import SmpDialog from "@/components/LearnMoreDialog/dialog";
import SmpCover from "@/components/vehicles/smpCover";
import OutSide from "@/components/vehicles/dialog/outside";
import InSide from "@/components/vehicles/dialog/inside";
import Animations from "@/components/animation/index";
import { mapState } from "vuex";

export default {
  name: "PC",
  components: {
    TypeBanner,
    TypeDesc,
    TestDrive,
    SmpDialog,
    OutSide,
    InSide,
    SmpCover,
    Animations
  },
  computed: {
    ...mapState(["currentDialog", "dialogStatus"]),
    testDriveBg: function() {
      return `${this.Resource}${this.params.vehicleType}/test_drive_bg.jpg`;
    }
  },
  watch: {
    dialogStatus: function(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  },
  data() {
    return {
      bannerData: this.$t("M7Page.bannerData"),
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t("M7Page.descList")
      },
      params: {
        platform: "pc",
        vehicleType: "M7",
        isShowQRCode: 1
      },
      m7_01_data: this.$t("M7Page.data_01"),
      m7_02_data: this.$t("M7Page.data_02"),
      m7_03_data: this.$t("M7Page.data_03")
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
.m7-pc {
  .title {
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #ffffff;
    line-height: 30px;
    padding: 40px 0 130px 0;
  }
  .test-drive-container {
    width: 100%;
    position: relative;
    z-index: 1;
    text-align: center;
    > img {
      width: 100%;
    }
  }
}
</style>
