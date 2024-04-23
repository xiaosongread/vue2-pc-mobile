<template>
  <div class="bigContainer">
    <TypeBanner
      :data="bannerData"
      :vehicleName="$t('W6Page.bannerData.vehicleName')"
      :platform="'pc'"
    >
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
    <TypeDesc :platform="'pc'" :data="desc" />
    <TypeView :platform="'pc'" :vehicle="'W6'" :data="view3D" />
    <div id="test-drive-spa" class="test-drive-container" v-if="lang === 'zh'">
      <img :src="testDriveBg" alt="威马W6预约试驾" data-test="test" />
      <TestDrive
        :vehicleType="params.vehicleType"
        :isShowQRCode="params.isShowQRCode"
        :platform="params.platform"
        :pagetype="'W6'"
        @testDriveSuccess="onTestDriveSuccess"
      />
    </div>
    <SmpCover />
    <SmpDialog
      :platform="'pc'"
      :title="w6_01_data.title"
      v-if="currentDialog === 'w6_01'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="w6_01_data.one" />
        <OutSide :platform="'pc'" :data="w6_01_data.two" />
        <InSide :platform="'pc'" :data="w6_01_data.three" />
        <OutSide :platform="'pc'" :data="w6_01_data.foer" />
        <InSide :platform="'pc'" :data="w6_01_data.five" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="w6_02_data.title"
      v-if="currentDialog === 'w6_02'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="w6_02_data.one" />
        <OutSide :platform="'pc'" :data="w6_02_data.two" />
        <InSide :platform="'pc'" :data="w6_02_data.three" />
        <OutSide :platform="'pc'" :data="w6_02_data.foer" />
        <InSide :platform="'pc'" :data="w6_02_data.five" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="w6_03_data.title"
      v-if="currentDialog === 'w6_03'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="w6_03_data.one" />
        <OutSide :platform="'pc'" :data="w6_03_data.two" />
        <InSide :platform="'pc'" :data="w6_03_data.three" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="w6_04_data.title"
      v-if="currentDialog === 'w6_04'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="w6_04_data.one" />
        <OutSide :platform="'pc'" :data="w6_04_data.two" />
        <InSide :platform="'pc'" :data="w6_04_data.three" />
      </template>
    </SmpDialog>
    <SmpDialog
      :platform="'pc'"
      :title="w6_05_data.title"
      v-if="currentDialog === 'w6_05'"
    >
      <template slot="content">
        <InSide :platform="'pc'" :data="w6_05_data.one" />
        <OutSide :platform="'pc'" :data="w6_05_data.two" />
        <InSide :platform="'pc'" :data="w6_05_data.three" />
      </template>
    </SmpDialog>
  </div>
</template>

<script>
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TypeView from "@/components/vehicles/view3d";
import { debounce } from "@/utils/deviceType";
import SmpCover from "@/components/vehicles/smpCover";
import SmpDialog from "@/components/LearnMoreDialog/dialog";
import OutSide from "@/components/vehicles/dialog/outside";
import InSide from "@/components/vehicles/dialog/inside";
import TestDrive from "@/components/testDrive/index";
import { mapState } from "vuex";

export default {
  name: "PC",
  components: {
    TypeBanner,
    SmpCover,
    SmpDialog,
    OutSide,
    TypeDesc,
    InSide,
    TestDrive,
    TypeView
  },
  data() {
    return {
      params: {
        platform: "pc",
        vehicleType: "W6",
        isShowQRCode: 0
      },
      Biggest: this.$t("W6Page.Biggest"),
      w6_01_data: this.$t("W6Page.w6_01_data"),
      w6_02_data: this.$t("W6Page.w6_02_data"),
      w6_03_data: this.$t("W6Page.w6_03_data"),
      w6_04_data: this.$t("W6Page.w6_04_data"),
      w6_05_data: this.$t("W6Page.w6_05_data"),
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t("W6Page.descList")
      },
      bannerData: {
        bg: `${this.Resource}W6/pc/banner_bg.jpg`,
        btnData: this.$t('W6Page.bannerData.btn'),
        desc: this.$t("W6Page.bannerData.desc")
      },
      ins: 0,
      view3D: {
        name: `${this.Resource}W6/pc/view_vehicle_name.png`,
        img: [
          `${this.Resource}W6/pc/wm6one.png`,
          `${this.Resource}W6/pc/wm6two.png`,
          `${this.Resource}W6/pc/wm6three.png`
        ],
        appearance: this.$t('W6Page.view3Data.appearance'),
        btn: this.$t("W6Page.view3Data.btn"),
        key: `https://cos-data.wm-imotor.com/website/360kanche/w6CN/index.html`,
        params: [
          {
            name: this.$t("W6Page.view3Data.params[0]"),
            number: "160",
            unit: "KW"
          },
          {
            name: this.$t("W6Page.view3Data.params[1]"),
            number: "520",
            unit: "KM"
          },
          {
            name: this.$t("W6Page.view3Data.params[2]"),
            number: "40",
            unitMulti: ["MIN", this.$t("W6Page.view3Data.params[3]")]
          }
        ]
      }
    };
  },
  mounted() {},
  computed: {
    ...mapState(["currentDialog", "dialogStatus"]),
    testDriveBg: function() {
      return `${this.Resource}${this.params.vehicleType}/test_drive_bg.jpg`;
    }
  },
  created() {},
  watch: {
    dialogStatus: function(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  },
  methods: {
    onTestDriveSuccess(v) {
      Object.assign(this.params, v);
    },
    scroll: debounce(function(e) {
      if (e.deltaY < 0) {
        if (this.ins === 0) {
          this.ins = 2;
        } else {
          this.ins = this.ins - 1;
        }
      } else {
        if (this.ins < 2) {
          this.ins = this.ins + 1;
        } else {
          this.ins = 0;
        }
      }
    }, 300),
    vrTour() {
      window.open(
        "https://cos-data.wm-imotor.com/website/360kanche/w6CN/index.html", '_self'
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.bigContainer {
  text-align: left;
  .marginLeft {
    margin-left: 115px;
  }
  .title {
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #ffffff;
    letter-spacing: 10px;
    line-height: 30px;
    padding: 20px 0 24px 0;
  }
  .titleEn {
    letter-spacing: 0;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #ffffff;
    line-height: 42px;
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
    height: 30px;
    font-size: 30px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    color: #ffffff;
    font-weight: 300;
    line-height: 42px;
    padding: 24px 0 90px 0;
  }
  .wm2 {
    width: 100%;
    height: 1080px;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-size: cover;
    transition: 2s;
    overflow: hidden;
    .wm2Text1 {
      margin-top: 708px;
      font-size: 60px;
      font-family: LucidaGrande;
      color: #ffffff;
      line-height: 71px;
    }
    .wm2Text2 {
      font-size: 40px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 57px;
    }
    .wm2Btn {
      width: 310px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      background: #ffffff;
      font-size: 24px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #383838;
      margin-top: 32px;
    }
  }

  .wm6 {
    height: 1080px;
    background: #e9e9e9;
    background-attachment: fixed;
    background-size: cover;
    transition: 2s;
    overflow: hidden;
    .wm6Background {
      background-size: 100% 100%;
      width: 1254px;
      height: 487px;
      margin-left: 333px;
      margin-top: 168px;
      .wm6Car {
        width: 827px;
        height: 327px;
        padding-top: 180px;
        margin-bottom: 12px;
        margin-left: 204px;
        margin-right: 144px;
        display: none;
        // position: absolute;
        img {
          width: 827px;
          height: 327px;
        }
      }
      .active {
        display: block;
      }
    }
    .functionContainer {
      display: flex;
      margin-top: 87px;
      margin-left: 115px;
      margin-right: 115px;
      justify-content: space-between;
      .functionTitle {
        font-size: 12px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #333333;
        line-height: 14px;
      }
      .functionBottom {
        display: flex;
        align-items: flex-end;
        .functionNumber {
          font-size: 65px;
          font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #333333;
          line-height: 51px;
        }
        .unit {
          font-size: 21px;
          font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #333333;
          line-height: 22px;
          margin-left: 6px;
        }
        .functionText {
          font-size: 10px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #333333;
          line-height: 14px;
        }
      }
    }
    .functionBtn {
      width: 309px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      background: #30a680;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-left: 802px;
      margin-top: 76px;
      cursor: pointer;
    }
    .functionBtnen {
      width: 427px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      background: #35a97d;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-left: 747px;
      margin-top: 74px;
      cursor: pointer;
    }
  }
  .wm8 {
    height: 894px;
    background-size: 100% 100%;
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
