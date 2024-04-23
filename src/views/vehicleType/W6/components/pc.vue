<template>
  <div class="containW6">
    <div class="slidesBox">
      <swiper ref="mySwiperW6" :options="swiperOption">
        <!-- 第一屏1 -->
        <swiper-slide class="slideItem">
          <FirstPage :finshFirstZz="finshFirstZz" :activeIndex="activeIndex" />
        </swiper-slide>
        <!-- 8种车色2 -->
        <swiper-slide class="slideItem">
          <CarColor
            :finshFirstColor="finshFirstColor"
            :carColorIndex="carColorIndex"
            @clickChange="chengeCarColor"
          />
        </swiper-slide>
        <!-- logo灯3 -->
        <swiper-slide class="slideItem">
          <ThreePage />
        </swiper-slide>
        <!-- 超大全景天窗4 -->
        <swiper-slide class="slideItem">
          <!-- :finshScale="finshScale" -->
          <FourPage
            :finshFourMove="finshFourMove"
            :standard="standard"
            :browserWidth="browserWidth"
            :browserHeight="browserHeight"
          />
        </swiper-slide>
        <!-- 内饰5 -->
        <swiper-slide class="slideItem">
          <NsPage :bOrW="bOrW" />
        </swiper-slide>
        <!-- 后备箱6 -->
        <swiper-slide class="slideItem">
          <HbxPage :hbxIndex="hbxIndex" />
        </swiper-slide>
        <!-- 智能座舱平台7 -->
        <swiper-slide class="slideItem">
          <CockpitPage :finshFirstCockpit="finshFirstCockpit" />
        </swiper-slide>
        <!-- 智能座舱平台8 Living Engine 3.3 -->
        <swiper-slide class="slideItem">
          <Engine />
        </swiper-slide>
        <!-- faceId9 -->
        <swiper-slide class="slideItem">
          <Face />
        </swiper-slide>
        <!-- 32色智能氛围灯 三连屏10 -->
        <swiper-slide class="slideItem">
          <ThreeScreen
            :finshScreenFirstMove="finshScreenFirstMove"
            :finshScreenTwoMove="finshScreenTwoMove"
            :standard="standard"
            :browserWidth="browserWidth"
            :browserHeight="browserHeight"
          />
        </swiper-slide>
        <!-- 全新语音助手 wimi11 -->
        <!-- :finshWimi="finshWimi" :finshlogo="finshlogo" -->
        <swiper-slide class="slideItem">
          <Wimi :showWimi="showWimi" />
        </swiper-slide>
        <!-- 视频12 -->
        <swiper-slide class="slideItem">
          <WmVideo />
        </swiper-slide>
        <!-- 丰富的娱乐生态13 -->
        <swiper-slide class="slideItem">
          <StPage></StPage>
        </swiper-slide>
        <!-- 高通处理器14 -->
        <swiper-slide class="slideItem">
          <GtPage :gaotongIndex="gaotongIndex"></GtPage>
        </swiper-slide>
        <!-- 智能驾驶平台15 -->
        <swiper-slide class="slideItem">
          <DrivePage :finshFirstDrive="finshFirstDrive" />
        </swiper-slide>
        <!-- 智能驾驶平台简介16 -->
        <swiper-slide class="slideItem">
          <DrivePage1 />
        </swiper-slide>
        <!-- 360全景影像17 -->
        <swiper-slide class="slideItem">
          <FivePage :index360="index360" />
        </swiper-slide>
        <!-- 智能安全18 -->
        <swiper-slide class="slideItem">
          <SafePage :finshFirstSafe="finshFirstSafe" />
        </swiper-slide>
        <!-- 智能安全19 - 15项安全驾驶辅助 -->
        <swiper-slide class="slideItem">
          <SafePage15 :safePage15Index="safePage15Index" />
        </swiper-slide>
        <!-- 电动动力总成平台20 -->
        <swiper-slide class="slideItem">
          <ZcPage :finshFirstZc="finshFirstZc" />
        </swiper-slide>
        <!-- NEDC 520KM 扎实续航21 -->
        <swiper-slide class="slideItem">
          <Nedc />
        </swiper-slide>
        <!-- 高效模块化电池包22 -->
        <swiper-slide class="slideItem">
          <Battery :batteryIndex="batteryIndex" @clickChange="chengeBattery" />
        </swiper-slide>
        <!-- 露营神器23 -->
        <swiper-slide class="slideItem">
          <Luying />
        </swiper-slide>
        <!-- 预约表单24 -->
        <swiper-slide class="slideItem">
          <div class="afterBox">
            <div :class="['testDriveBox', showFooter ? 'showFooter' : '']">
              <div
                id="test-drive-spa"
                class="test-drive-container"
                v-if="lang === 'zh'"
              >
                <!-- :showService="showService" -->
                <TestDrive
                  :vehicleType="params.vehicleType"
                  :isShowQRCode="params.isShowQRCode"
                  :platform="params.platform"
                  :pagetype="'W6'"
                  @testDriveSuccess="onTestDriveSuccess"
                />
              </div>
              <SmpCover />
            </div>
            <div class="footerBox">
              <Footer />
            </div>
          </div>
        </swiper-slide>
        <!-- footer -->
        <!-- <swiper-slide class="slideItem">
          <Footer />
        </swiper-slide> -->
      </swiper>
    </div>
    <FixedWindow :topShow="topShow" pageType="vehicle" />
  </div>
</template>

<script>
import FixedWindow from "@/components/fixedWindow/index";
import FirstPage from "./components/firstPage";
import CarColor from "./components/carColor";
import ThreePage from "./components/threePage";
import FourPage from "./components/fourPage";
import FivePage from "./components/fivePage";
import NsPage from "./components/nsPage";
import HbxPage from "./components/hbxPage";
import CockpitPage from "./components/cockpitPage";
import Engine from "./components/engine";
import Face from "./components/face";
import ThreeScreen from "./components/threeScreen";
import Wimi from "./components/wimi";
import StPage from "./components/stPage";
import GtPage from "./components/gtPage";
import DrivePage from "./components/drivePage";
import DrivePage1 from "./components/drivePage1";
import SafePage from "./components/safePage";
import SafePage15 from "./components/safePage15";
import ZcPage from "./components/zcPage";
import Nedc from "./components/nedc";
import Battery from "./components/battery";
import Luying from "./components/luying";
import WmVideo from "./components/wmVideo";
import Footer from "@/components/footer/index";

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
let that;
let vehicleflag = false;
let currentPageIndex = 0;
let wheelflag = false;
let wheelTime = null;
let changeFnFlag = true;
export default {
  name: "PC",
  components: {
    FixedWindow,
    FirstPage,
    CarColor,
    ThreePage,
    FourPage,
    FivePage,
    NsPage,
    HbxPage,
    CockpitPage,
    Engine,
    Face,
    ThreeScreen,
    Wimi,
    StPage,
    GtPage,
    DrivePage,
    DrivePage1,
    SafePage,
    SafePage15,
    ZcPage,
    Nedc,
    Battery,
    Luying,
    WmVideo,
    Footer,
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
      topShow: true,
      currentPageIndex: 0,
      preventLinksPropagation: false,
      showService: false,
      activeIndex: 0,
      finshFirstZz: false,
      finshFirstColor: false,
      finshFirstCockpit: false,
      finshScale: false,
      finshFourMove: false,
      finshScreenFirstMove: false,
      finshScreenTwoMove: false,
      showWimi: false,
      finshWimi: false,
      finshlogo: false,
      finshFirstDrive: false,
      finshFirstSafe: false,
      finshFirstZc: false,
      bOrW: "w", // 黑白天标记
      hbxIndex: 0,
      carColorIndex: 0,
      batteryIndex: 0,
      gaotongIndex: 0,
      index360: 0,
      safePage15Index: 0,
      showFooter: false,
      browserWidth: 0,
      browserHeight: 0,
      imgSjWidth: 0, // 背景图片实际的宽高
      imgSjHeight: 0,
      standard: "width", // 渲染以宽为基础
      swiperOption: {
        // initialSlide: 23,
        direction: "vertical",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 1
        },
        loadOnTransitionStart: true,
        watchSlidesVisibility: true, //解决了swiper前面的一个不能提前加载的bug
        notNextTick: true,
        autoHeight: true,
        loop: false,
        on: {
          touchMove: function(e) {
            console.log("touchMove");
            this.slideTo(this.activeIndex, 0, true);
            // e.stopPropagation();
            //手动滑动中触发
            currentPageIndex = this.activeIndex;
            this.currentPageIndex = this.activeIndex;
          },
          slideChangeTransitionStart() {
            console.log(
              "slideChangeTransitionStart:",
              currentPageIndex,
              this.activeIndex
            );
            console.log("===============================================");
            if (vehicleflag) return;
            if (!changeFnFlag) return;
            vehicleflag = true;
            setTimeout(() => {
              vehicleflag = false;
            }, 500);
            // currentPageIndex = this.activeIndex - 1;
            // 第一屏
            if (
              currentPageIndex === 0 &&
              this.activeIndex === 1 &&
              !that.finshFirstZz
            ) {
              this.slideTo(0, 0, true);
              that.finshFirstZz = true;
              return;
            } else if (
              currentPageIndex === 0 &&
              this.activeIndex === 0 &&
              that.finshFirstZz
            ) {
              that.finshFirstZz = false;
            }
            if (
              currentPageIndex === 0 &&
              this.activeIndex === 1 &&
              that.finshFirstZz
            ) {
              that.topShow = false;
            }
            if (
              currentPageIndex === 1 &&
              this.activeIndex === 0 &&
              !that.finshFirstColor
            ) {
              that.topShow = true;
            }
            // 第二屏 车色变化
            if (
              currentPageIndex === 1 &&
              this.activeIndex === 2 &&
              !that.finshFirstColor
            ) {
              this.slideTo(1, 0, true);
              that.finshFirstColor = true;
              return;
            } else if (currentPageIndex === 1 && this.activeIndex === 0) {
              if (that.finshFirstColor) {
                this.slideTo(1, 0, true);
                that.finshFirstColor = false;
              }
            }
            // if (currentPageIndex === 1) {
            //   if (this.activeIndex === 2) {
            //     if (!that.finshFirstColor) {
            //       this.slideTo(1, 0, true);
            //       that.finshFirstColor = true;
            //       return;
            //     } else if (that.finshFirstColor) {
            //       if (that.carColorIndex < 7) {
            //         this.slideTo(1, 0, false);
            //         that.carColorIndex = that.carColorIndex + 1;
            //         return;
            //       } else if (that.carColorIndex === 7) {
            //         that.carColorIndex = 8;
            //       }
            //     }
            //   } else if (this.activeIndex === 0) {
            //     if (that.finshFirstColor) {
            //       if (that.carColorIndex < 7 && that.carColorIndex !== 0) {
            //         this.slideTo(1, 0, false);
            //         that.carColorIndex = that.carColorIndex - 1;
            //         return;
            //       } else if (that.carColorIndex === 8) {
            //         this.slideTo(1, 0, false);
            //         that.carColorIndex = 6;
            //         return;
            //       } else if (that.carColorIndex === 0) {
            //         that.finshFirstColor = false;
            //       }
            //     }
            //   }
            // }
            // 第四屏
            if (
              currentPageIndex === 3 &&
              this.activeIndex === 4 &&
              !that.finshFourMove
            ) {
              this.slideTo(3, 0, false);
              that.finshFourMove = true;
              return;
            } else if (
              currentPageIndex === 3 &&
              this.activeIndex === 2 &&
              that.finshFourMove
            ) {
              this.slideTo(3, 0, false);
              that.finshFourMove = false;
              return;
            }
            // 内饰氛围灯
            if (
              currentPageIndex === 4 &&
              this.activeIndex === 5 &&
              that.bOrW === "w"
            ) {
              this.slideTo(4, 0, false);
              that.bOrW = "b";
              return;
            }
            if (
              currentPageIndex === 4 &&
              this.activeIndex === 3 &&
              that.bOrW === "b"
            ) {
              this.slideTo(4, 0, false);
              that.bOrW = "w";
              return;
            }

            // 后备箱
            if (currentPageIndex === 5) {
              if (this.activeIndex === 6) {
                if (that.hbxIndex < 2) {
                  this.slideTo(5, 0, false);
                  that.hbxIndex = that.hbxIndex + 1;
                  return;
                } else if (that.hbxIndex === 2) {
                  that.hbxIndex = 3;
                }
              } else if (this.activeIndex === 4) {
                if (that.hbxIndex <= 2 && that.hbxIndex !== 0) {
                  this.slideTo(5, 0, false);
                  that.hbxIndex = that.hbxIndex - 1;
                  return;
                } else if (that.hbxIndex === 3) {
                  this.slideTo(5, 0, false);
                  that.hbxIndex = 1;
                  return;
                }
              }
            }
            // 智能座舱
            if (
              currentPageIndex === 6 &&
              this.activeIndex === 7 &&
              !that.finshFirstCockpit
            ) {
              this.slideTo(6, 0, true);
              that.finshFirstCockpit = true;
              return;
            } else if (currentPageIndex === 6 && this.activeIndex === 5) {
              if (that.finshFirstCockpit) {
                this.slideTo(6, 0, true);
                that.finshFirstCockpit = false;
                return;
              }
            }
            // 三连屏
            if (
              currentPageIndex === 9 &&
              this.activeIndex === 10 &&
              !that.finshScreenFirstMove
            ) {
              this.slideTo(9, 0, false);
              that.finshScreenFirstMove = true;
              return;
            } else if (currentPageIndex === 9 && that.finshScreenFirstMove) {
              if (!that.finshScreenTwoMove) {
                this.slideTo(9, 0, false);
                that.finshScreenTwoMove = true;
                return;
              } else if (that.finshScreenTwoMove) {
                that.finshScreenFirstMove = false;
                that.finshScreenTwoMove = false;
                that.showWimi = true;
              }
            }
            // wimi
            if (currentPageIndex === 10) {
              setTimeout(() => {
                that.showWimi = false;
              }, 1000);
              // if (!that.finshWimi && !that.finshlogo) {
              //   that.finshWimi = true;
              //   this.slideTo(10, 0, false);
              // } else if (that.finshWimi && !that.finshlogo) {
              //   that.finshlogo = true;
              //   this.slideTo(10, 0, false);
              // }
            }
            if (currentPageIndex === 11 && this.activeIndex === 10) {
              that.showWimi = true;
            }
            // 高通处理器
            if (currentPageIndex === 13) {
              if (this.activeIndex === 14) {
                switch (that.gaotongIndex) {
                  case 0:
                    this.slideTo(13, 0, false);
                    that.gaotongIndex = 1;
                    return;
                  case 1:
                    that.gaotongIndex = 2;
                }
              } else if (this.activeIndex === 12) {
                switch (that.gaotongIndex) {
                  case 2:
                    this.slideTo(13, 0, false);
                    that.gaotongIndex = 0;
                    return;
                }
              }
            }
            // 智能驾驶平台
            if (
              currentPageIndex === 14 &&
              this.activeIndex === 15 &&
              !that.finshFirstDrive
            ) {
              this.slideTo(14, 0, true);
              that.finshFirstDrive = true;
              return;
            } else if (
              currentPageIndex === 14 &&
              this.activeIndex === 13 &&
              that.finshFirstDrive
            ) {
              this.slideTo(14, 0, true);
              that.finshFirstDrive = false;
            }
            if (currentPageIndex === 16) {
              if (this.activeIndex === 17) {
                if (that.index360 < 5) {
                  this.slideTo(16, 0, false);
                  that.index360 = that.index360 + 1;
                  return;
                } else if (that.index360 === 5) {
                  that.index360 = 6;
                }
              } else if (this.activeIndex === 15) {
                if (that.index360 <= 5 && that.index360 !== 0) {
                  this.slideTo(16, 0, false);
                  that.index360 = that.index360 - 1;
                  return;
                } else if (that.index360 === 6) {
                  this.slideTo(16, 0, false);
                  that.index360 = 4;
                  return;
                }
              }
            }
            // 智能安全
            if (
              currentPageIndex === 17 &&
              this.activeIndex === 18 &&
              !that.finshFirstSafe
            ) {
              this.slideTo(17, 0, true);
              that.finshFirstSafe = true;
              return;
            } else if (
              currentPageIndex === 17 &&
              this.activeIndex === 16 &&
              that.finshFirstSafe
            ) {
              this.slideTo(17, 0, true);
              that.finshFirstSafe = false;
            }
            // 15项安全辅助驾驶
            if (currentPageIndex === 18) {
              if (this.activeIndex === 19) {
                if (that.safePage15Index < 2) {
                  this.slideTo(18, 0, false);
                  that.safePage15Index = that.safePage15Index + 1;
                  return;
                } else if (that.safePage15Index === 2) {
                  that.safePage15Index = 3;
                }
              } else if (this.activeIndex === 17) {
                if (that.safePage15Index <= 2 && that.safePage15Index !== 0) {
                  this.slideTo(18, 0, false);
                  that.safePage15Index = that.safePage15Index - 1;
                  return;
                } else if (that.safePage15Index === 3) {
                  this.slideTo(18, 0, false);
                  that.safePage15Index = 1;
                  return;
                }
              }
            }
            // 动力总成
            if (
              currentPageIndex === 19 &&
              this.activeIndex === 20 &&
              !that.finshFirstZc
            ) {
              this.slideTo(19, 0, true);
              that.finshFirstZc = true;
              return;
            } else if (
              currentPageIndex === 19 &&
              this.activeIndex === 18 &&
              that.finshFirstZc
            ) {
              this.slideTo(19, 0, true);
              that.finshFirstZc = false;
            }
            // 电池
            if (currentPageIndex === 21) {
              if (this.activeIndex === 22) {
                if (that.batteryIndex !== 2) {
                  this.slideTo(21, 0, false);
                  that.batteryIndex = that.batteryIndex + 1;
                  return;
                } else if (that.batteryIndex === 2) {
                  that.batteryIndex = 3;
                }
              } else if (this.activeIndex === 20) {
                if (that.batteryIndex < 2 && that.batteryIndex !== 0) {
                  this.slideTo(21, 0, false);
                  that.batteryIndex = that.batteryIndex - 1;
                  return;
                } else if (that.batteryIndex === 3) {
                  this.slideTo(21, 0, false);
                  that.batteryIndex = 1;
                  return;
                }
              }
            }
            // 底部
            if (currentPageIndex === 23) {
              if (this.activeIndex === 24) {
                if (!that.showFooter) {
                  this.slideTo(23, 0, false);
                  that.showFooter = true;
                  return;
                }
              } else if (this.activeIndex === 22) {
                if (that.showFooter) {
                  this.slideTo(23, 0, false);
                  that.showFooter = false;
                  return;
                }
              }
            }
            this.slideTo(this.activeIndex, 1000, true);
          },
          slideChangeTransitionEnd() {
            console.log("更新成功");
          },
          resize() {
            console.log("resize-pcweb", this.update);
            that.setStandardFn();
            this.update();
            //窗口变化了
            // setTimeout(() => {
            //   this.$refs.mySwiperW6.$swiper.update();
            // }, 500);
          }
        }
      },
      desc: {
        show: true,
        btn: this.$t("commonSet.seeMore"),
        desc: this.$t("W6Page.descList")
      },
      ins: 0
    };
  },
  mounted() {
    // that = this;
    // document.addEventListener("mousewheel", this.handleWheel, false);
    // document.addEventListener("DOMMouseScroll", this.handleWheel, false);
    // document.addEventListener("touchMove", this.handleWheel, false);
  },
  computed: {
    ...mapState(["currentDialog", "dialogStatus"]),
    // testDriveBg: function() {
    //   return `${this.Resource}${this.params.vehicleType}/test_drive_bg.jpg`;
    // },
    swiper: function() {
      return this.$refs.mySwiperW6.$swiper;
    }
  },
  created() {
    that = this;
    this.setStandardFn();
    document.addEventListener("mousewheel", this.handleWheel, false);
    document.addEventListener("DOMMouseScroll", this.handleWheel, false);
  },
  watch: {},
  methods: {
    // 计算标准
    setStandardFn() {
      this.browserWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.browserHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      var width = Math.ceil((this.browserHeight * 1920) / 1080);
      if (width > this.browserWidth) {
        this.standard = "height";
        this.imgSjWidth = width;
        this.imgSjHeight = this.browserHeight;
        console.log("以--高--做渲染");
      } else {
        var height = Math.ceil((this.browserWidth * 1080) / 1920);
        this.standard = "width";
        this.imgSjWidth = this.browserWidth;
        this.imgSjHeight = height;
        console.log("以--宽--做渲染");
      }
    },
    topFn() {
      changeFnFlag = false;
      this.finshFirstZz = false;
      this.topShow = true;
      this.swiper.slideTo(0, 0, true);
      this.currentPageIndex = 0;
      this.finshFirstColor = false;
      this.finshFirstCockpit = false;
      this.finshScale = false;
      this.finshFourMove = false;
      this.finshScreenFirstMove = false;
      this.finshScreenTwoMove = false;
      this.showWimi = false;
      this.finshWimi = false;
      this.finshlogo = false;
      this.finshFirstDrive = false;
      this.finshFirstSafe = false;
      this.finshFirstZc = false;
      this.bOrW = "w"; // 黑白天标记
      this.hbxIndex = 0;
      this.carColorIndex = 0;
      this.batteryIndex = 0;
      this.gaotongIndex = 0;
      this.index360 = 0;
      this.safePage15Index = 0;
      this.showFooter = false;
      currentPageIndex = 0;
      setTimeout(() => {
        changeFnFlag = true;
      }, 100);
    },
    chengeBattery(v) {
      this.batteryIndex = v;
    },
    chengeCarColor(v) {
      this.carColorIndex = v;
    },
    //节流函数
    throttle(fn, gapTime) {
      let _this = this;
      return function() {
        let _nowTime = +new Date();
        if (_nowTime - _this._lastTime > gapTime || !_this._lastTime) {
          fn(...arguments); // 函数可以带参数
          _this._lastTime = _nowTime;
        }
      };
    },
    handleWheel(e) {
      e.stopPropagation();
      this.throttle(this.wheelfunc, 1000)(e);
    },
    wheelfunc(e) {
      that = this;
      if (that.swiper.destroyed) return;
      if (wheelflag) return;
      wheelflag = true;
      clearTimeout(wheelTime);
      wheelTime = setTimeout(() => {
        wheelflag = false;
      }, 1000);
      e = e || window.event;
      let wheelnum = 0;
      if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
          wheelnum = 1;
        }
        if (e.wheelDelta < 0) {
          wheelnum = -1;
        }
      } else if (e.detail) {
        //Firefox 滑轮事件
        if (e.detail > 0) {
          wheelnum = 1;
        }
        if (e.detail < 0) {
          wheelnum = -1;
        }
      }
      if (wheelnum !== 0) {
        const index = that.swiper.activeIndex;
        console.log("wheelIndex:", index);
        currentPageIndex = index;
        this.currentPageIndex = index;
        that.swiper.activeIndex = index - wheelnum;
        if (that.swiper.activeIndex < 0) that.swiper.activeIndex = 0;
        that.swiperOption.on.slideChangeTransitionStart.bind(that.swiper)();
      }
    },
    onTestDriveSuccess(v) {
      Object.assign(this.params, v);
    }
  }
};
</script>
<style lang="scss" scoped>
.containW6 {
  text-align: left;
  .slidesBox {
    width: 100%;
    // height: 100vh;
    .swiper-container {
      height: 100vh;
      // height: 100%;
      .swiper-wrapper {
        height: 100%;
        .slideItem {
          width: 100%;
          height: 100%;
          // overflow: hidden;
        }
      }
    }
  }
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
    height: 100%;
    background: url("https://cos-data.wm-imotor.com/website/W6/test_drive_bg_1.jpg")
      no-repeat;
    background-position: 50% 70%;
    background-size: cover;
    position: relative;
    z-index: 1;
    text-align: center;
    > img {
      width: 100%;
    }
  }
  .afterBox {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .testDriveBox {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      transition: all 1s ease-in;
      &.showFooter {
        top: -100vh;
      }
    }
    .footerBox {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
}
</style>
