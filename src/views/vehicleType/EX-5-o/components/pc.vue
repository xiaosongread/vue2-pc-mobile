<template>
  <div class="ex5-pc">
    <TypeBanner
      :data="bannerData"
      :vehicleName="$t('EX5Page.vehicleName')"
      :platform="'pc'"
    >
      <template slot="slogan">
        <div class="title" v-html="$t('EX5Page.bannerData.title')"></div>
        <div
          :class="[`price ${this.lang === 'zh' ? 'price-zh' : 'price-en'}`]"
          v-html="$t('EX5Page.bannerData.price')"
        ></div>
      </template>
    </TypeBanner>
    <TypeDesc :platform="'pc'" :data="desc" />
    <TypeView :platform="'pc'" :vehicle="'EX5-Z'" :data="view3D" />
    <div id="test-drive-spa" class="test-drive-container" v-if="lang === 'zh'">
      <img id="test-drive-spa-bg" :src="testDriveBg" data-test="test" alt="威马EX5-Z，零接触智能交互纯电SUV" />
      <TestDrive
        :vehicleType="params.vehicleType"
        :platform="params.platform"
        :isShowQRCode="params.isShowQRCode"
        :pagetype="'EX5-Z'"
        @testDriveSuccess="onChangeVehicle"
      />
    </div>
    <SmpCover />

    <SmpDialog
      :platform="'pc'"
      :title="ex5_01_data.title"
      v-if="currentDialog === 'ex5_01'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="ex5_01_data.one" />
        <OutSide :platform="'pc'" :data="ex5_01_data.two" />
        <InSide :platform="'pc'" :data="ex5_01_data.three" />
      </template>
    </SmpDialog>

    <SmpDialog
      :platform="'pc'"
      :title="ex5_02_data.title"
      v-if="currentDialog === 'ex5_02'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="ex5_02_data.one" />
      </template>
    </SmpDialog>

    <SmpDialog
      :platform="'pc'"
      :title="ex5_03_data.title"
      v-if="currentDialog === 'ex5_03'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="ex5_03_data.one" />
      </template>
    </SmpDialog>

    <SmpDialog
      :platform="'pc'"
      :title="ex5_04_data.title"
      v-if="currentDialog === 'ex5_04'"
    >
      <template slot="content">
        <OutSide :platform="'pc'" :data="ex5_04_data.one" />
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
        vehicleType: "EX5-Z",
        isShowQRCode: 0
      },
      bannerData: {
        bg: `${this.Resource}EX5-Z/PC.jpg`,
        btnData: this.$t('EX5Page.bannerData.btn'),
        desc: [
          {
            headline: this.$t("EX5Page.bannerData.desc[0].headline"),
            desc: this.$t("EX5Page.bannerData.desc[0].desc")
          },
          {
            headline: this.$t("EX5Page.bannerData.desc[1].headline"),
            desc: this.$t("EX5Page.bannerData.desc[1].desc")
          },
          {
            headline: this.$t("EX5Page.bannerData.desc[2].headline"),
            desc: this.$t("EX5Page.bannerData.desc[2].desc")
          },
          {
            headline: this.$t("EX5Page.bannerData.desc[3].headline"),
            desc: this.$t("EX5Page.bannerData.desc[3].desc")
          }
        ]
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: [
          {
            key: "ex5_01",
            title: this.$t("EX5Page.descData[0].title"),
            bg: `${this.Resource}EX5-Z/desc_01.png`
          },
          {
            key: "ex5_02",
            title: this.$t("EX5Page.descData[1].title"),
            bg: `${this.Resource}EX5-Z/desc_02.png`
          },
          {
            key: "ex5_03",
            title: this.$t("EX5Page.descData[2].title"),
            bg: `${this.Resource}EX5-Z/desc_03.png`
          },
          {
            key: "ex5_04",
            title: this.$t("EX5Page.descData[3].title"),
            bg: `${this.Resource}EX5-Z/desc_04.png`
          }
        ]
      },
      view3D: {
        name: `${this.Resource}EX5-Z/text.png`,
        btn: this.$t("EX5Page.view3Data.btn"),
        appearance: this.$t('EX5Page.view3Data.appearance'),
        key:
          "https://cos-data.wm-imotor.com/website/360kanche/ex5zCN/index.html",
        params: [
          {
            name: this.$t("EX5Page.view3Data.params[0]"),
            number: "160",
            unit: "KW"
          },
          {
            name: this.$t("EX5Page.view3Data.params[1]"),
            number: "403",
            unit: "KM"
          },
          {
            name: this.$t("EX5Page.view3Data.params[2]"),
            number: "30",
            unitMulti: ["MIN", this.$t("EX5Page.view3Data.params[3]")]
          }
        ]
      },
      mapBg: `${this.Resource}smpCover.png`,
      ex5_01_data: this.$t("EX5Page.diaLogData.data_01"),
      ex5_02_data: this.$t("EX5Page.diaLogData.data_02"),
      ex5_03_data: this.$t("EX5Page.diaLogData.data_03"),
      ex5_04_data: this.$t("EX5Page.diaLogData.data_04")
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
