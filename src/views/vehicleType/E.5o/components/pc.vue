<template>
  <div class="ex5-pc">
    <TypeBanner
      :data="bannerData"
      :vehicleName="$t('E5PageC.vehicleName')"
      :platform="'pc'"
    >
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
    <TypeDesc :platform="'pc'" :data="desc" />
    <div id="test-drive-spa" class="test-drive-container" v-if="lang === 'zh'">
      <img id="test-drive-spa-bg" :src="testDriveBg" data-test="test" alt="全新威马E.5,大空间，长续航" />
      <TestDrive
        :vehicleType="params.vehicleType"
        :platform="params.platform"
        :isShowQRCode="params.isShowQRCode"
        :pagetype="'E.5'"
        @testDriveSuccess="onChangeVehicle"
      />
    </div>
    <SmpCover />

    <SmpDialog
      :platform="'pc'"
      :title="e5c_01_data.title"
      v-if="currentDialog === 'e.5_01'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="e5c_01_data.one" />
        <OutSide :platform="'pc'" :data="e5c_01_data.two" />
        <InSide :platform="'pc'" :data="e5c_01_data.three" />
        <OutSide :platform="'pc'" :data="e5c_01_data.four" />
        <InSide :platform="'pc'" :data="e5c_01_data.five" />
      </template>
    </SmpDialog>

    <SmpDialog
      :platform="'pc'"
      :title="e5c_02_data.title"
      v-if="currentDialog === 'e.5_02'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="e5c_02_data.one" />
        <OutSide :platform="'pc'" :data="e5c_02_data.two" />
      </template>
    </SmpDialog>

    <SmpDialog
      :platform="'pc'"
      :title="e5c_03_data.title"
      v-if="currentDialog === 'e.5_03'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="e5c_03_data.one" />
        <OutSide :platform="'pc'" :data="e5c_03_data.two" />
      </template>
    </SmpDialog>

    <SmpDialog
      :platform="'pc'"
      :title="e5c_04_data.title"
      v-if="currentDialog === 'e.5_04'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="e5c_04_data.one" />
        <OutSide :platform="'pc'" :data="e5c_04_data.two" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="e5c_05_data.title"
      v-if="currentDialog === 'e.5_05'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="e5c_05_data.one" />
      </template>
    </SmpDialog>
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
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
    SmpCover,
    SmpDialog,
    InSide,
    OutSide,
    TestDrive
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
      params: {
        platform: "pc",
        vehicleType: "E.5",
        isShowQRCode: 0
      },
      bannerData: {
        bg: `${this.Resource}E.5/PC.jpg`,
        btnData: this.$t('E5PageC.bannerData.btn')
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t('E5PageC.descData')
      },
      e5c_01_data: this.$t("E5PageC.diaLogData.data_01"),
      e5c_02_data: this.$t("E5PageC.diaLogData.data_02"),
      e5c_03_data: this.$t("E5PageC.diaLogData.data_03"),
      e5c_04_data: this.$t("E5PageC.diaLogData.data_04"),
      e5c_05_data: this.$t("E5PageC.diaLogData.data_05")
    };
  },
  methods: {
    onChangeVehicle(v) {
      console.log('传递是什么', v)
      Object.assign(this.params, v);
    }
  }
};
</script>

<style lang="scss" scoped>
.ex5-pc {
  .title {
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    color: #ffffff;
    line-height: 30px;
    text-align: left;
    padding: 20px 0 0 0;
  }
  .subtitle {
    font-size: 29px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: lighter;
    color: #ffffff;
    line-height: 30px;
    margin-top: 10px;
    padding-bottom: 24px;
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
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: 300;
    color: #ffffff;
    padding: 24px 0 90px 0;
    &-zh {
      line-height: 30px;
    }
    &-en {
      line-height: 42px;
    }
  }
  .test-drive-container {
    width: 100%;
    position: relative;
    z-index: 1;
    > img {
      width: 100%;
    }
  }
  .map {
    width: 100%;
    height: 894px;
    object-fit: cover;
    background-size: 100%;
  }
}
</style>
