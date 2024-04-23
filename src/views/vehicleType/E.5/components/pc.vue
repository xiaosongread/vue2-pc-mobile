<template>
  <div class="e5-pc">
    <div class="slidesBox">
      <swiper ref="myswiperE5" :options="swiperOptionEx5">
        <!-- 第1屏 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshFirstZz"
            :activeIndex="activeIndex"
            :data="firstData"
            :vehicleType="vehicleType"
          />
        </swiper-slide>
        <!-- 第2屏 logo -->
        <swiper-slide class="slideItem">
          <E5Logo :data="e5LogoData" :startDh="startDh" />
        </swiper-slide>
        <!-- 第3屏 超级空间 乘坐舒适 -->
        <swiper-slide class="slideItem">
          <Appearance
            :appearanceMove="appearanceMove"
            :appearanceMove1="appearanceMove1"
            :data="appearanceData"
          />
        </swiper-slide>
        <!-- 第4屏 全景天幕 -->
        <swiper-slide class="slideItem">
          <BigTc :data="bigTcData" :startChange="startChange" />
        </swiper-slide>
        <!-- 第5屏 后备箱 -->
        <swiper-slide class="slideItem">
          <swiptChange :data="carWgData" :carWgIndex="carWgIndex" />
        </swiper-slide>
        <!-- 第6屏 505KM超长续航 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshCcxh"
            :activeIndex="activeIndex"
            :data="ccxhData"
          />
        </swiper-slide>
        <!-- 第7屏 505KM超长续航介绍 -->
        <swiper-slide class="slideItem">
          <FullSwiptChange :data="nedc505kmData" :carWgIndex="carXhIndex" />
          <!-- <Space :data="nedc505kmData" /> -->
        </swiper-slide>
        <!-- 第8屏 智能座舱平台 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshZnzc"
            :activeIndex="activeIndex"
            :data="znzcData"
          />
        </swiper-slide>
        <!-- 第9屏 双屏互动 -->
        <swiper-slide class="slideItem">
          <threeScreen
            :finshThreenZz="finshThreenZz"
            :data="threenScreenData"
            :standard="standard"
            :browserWidth="browserWidth"
            :browserHeight="browserHeight"
            :imgSjWidth="imgSjWidth"
            :imgSjHeight="imgSjHeight"
          />
        </swiper-slide>
        <!-- 第10屏 12.3 英寸双屏互动 -->
        <swiper-slide class="slideItem">
          <Battery :data="batteryData" />
          <Space
            :data="yyjhData"
            :isShow="twoScreenNum === 1"
            :isTransform="true"
          />
        </swiper-slide>
        <!-- 第11屏 手机APP远程交互 -->
        <swiper-slide class="slideItem">
          <Space :data="yyjhAppData" />
        </swiper-slide>
        <!-- 第12屏 智能驾驶平台 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshZnjs"
            :activeIndex="activeIndex"
            :data="znjsData"
          />
        </swiper-slide>
        <!-- 第13屏 智能驾驶平台介绍 -->
        <swiper-slide class="slideItem">
          <swiptChange :data="carZnjsData" :carWgIndex="carZnjsIndex" />
        </swiper-slide>
        <!-- 第14屏 智能安全 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshZnsafe"
            :activeIndex="activeIndex"
            :data="znsafeData"
          />
        </swiper-slide>
        <!-- 第15屏 多效电池安全保证 -->
        <swiper-slide class="slideItem">
          <Space :data="betterySafeData" />
        </swiper-slide>
        <!-- 第16屏 安全驾驶辅助 -->
        <swiper-slide class="slideItem">
          <swiptChange :data="pilotData" :carWgIndex="pilotIndex" />
        </swiper-slide>
        <!-- 预约表单17 -->
        <swiper-slide class="slideItem">
          <div class="afterBox">
            <div :class="['testDriveBox', showFooter ? 'showFooter' : '']">
              <div
                id="test-drive-spa"
                class="test-drive-container"
                :style="{
                  backgroundImage: `url(${
                    this.Resource
                  }/E.5/pc/20220909/ex5bg.jpg)`
                }"
                v-if="lang === 'zh'"
              >
                <!-- :vehicleType="params.vehicleType" -->
                <TestDrive
                  :vehicleType="params.vehicleType"
                  :isShowQRCode="params.isShowQRCode"
                  :platform="params.platform"
                  :pagetype="'E.5'"
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
      </swiper>
    </div>
    <FixedWindow :topShow="topShow" pageType="vehicle" />
  </div>
</template>

<script>
import FixedWindow from "@/components/fixedWindow/index";
import TypeBanner from "@/components/vehicles/banner";
import TypeDesc from "@/components/vehicles/description";
import TypeView from "@/components/vehicles/view3d";
import SmpCover from "@/components/vehicles/smpCover";
import SmpDialog from "@/components/LearnMoreDialog/dialog";
import InSide from "@/components/vehicles/dialog/inside";
import OutSide from "@/components/vehicles/dialog/outside";
import TestDrive from "@/components/testDrive/index";
import Footer from "@/components/footer/index";

import FirstPage from "@/components/vehicles/pc/firstPage";
import FullSwiptChange from "@/components/vehicles/pc/fullSwiptChange";
import E5Logo from "@/components/vehicles/pc/e5Logo";
import Appearance from "@/components/vehicles/pc/appearanceE5";
import SwiptChange from "@/components/vehicles/pc/swiptChange";
import BigTc from "@/components/vehicles/pc/bigTcE5";
import Space from "@/components/vehicles/pc/space";
import ThreeScreen from "@/components/vehicles/pc/threeScreenE5";
import Battery from "@/components/vehicles/pc/batteryChange";
import Safe5 from "@/components/vehicles/pc/safe5";

import { mapState } from "vuex";
let that;
let vehicleflag = false;
let currentPageIndex = 0;
let wheelflag = false;
let wheelTime = null;
let changeFnFlag = true;
export default {
  name: "E.5",
  components: {
    FixedWindow,
    Footer,
    FirstPage,
    FullSwiptChange,
    E5Logo,
    Appearance,
    SwiptChange,
    BigTc,
    Space,
    ThreeScreen,
    Battery,
    Safe5,
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
    // testDriveBg: function() {
    //   return `${this.Resource}${this.params.vehicleType}/test_drive_bg.jpg`;
    // },
    swiperE5: function() {
      return this.$refs.myswiperE5.$swiper;
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
      topShow: true,
      currentPageIndex: 0,
      activeIndex: 0,
      finshFirstZz: false,
      finshCcxh: false,
      finshZnzc: false,
      finshDlzc: false,
      finshZnaq: false,
      appearanceMove: false,
      appearanceMove1: false,
      startChange: false,
      carWgIndex: 0,
      carZnjsIndex: 0,
      pilotIndex: 0,
      carXhIndex: 0,
      carYlIndex: 0,
      finshThreenZz: false,
      showFooter: false,
      browserWidth: 0,
      browserHeight: 0,
      twoScreenNum: 0,
      finshZnjs: false,
      finshZnsafe: false,
      startDh: false,
      imgSjWidth: 0, // 背景图片实际的宽高
      imgSjHeight: 0,
      standard: "width", // 渲染以宽为基础
      swiperOptionEx5: {
        // initialSlide: 1, // 定位
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
            if (vehicleflag) return;
            if (!changeFnFlag) return;
            vehicleflag = true;
            setTimeout(() => {
              vehicleflag = false;
            }, 500);
            // 第1屏
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
              that.startDh = true;
            }
            if (currentPageIndex === 1 && this.activeIndex === 0) {
              that.topShow = true;
            }
            // 第2屏 车色线条
            if (currentPageIndex === 1) {
              if (this.activeIndex === 0 || this.activeIndex === 2) {
                setTimeout(function() {
                  that.startDh = false;
                }, 1000);
              }
            }
            if (currentPageIndex === 2) {
              if (this.activeIndex === 1) {
                that.startDh = true;
              }
            }
            // 第3屏 车色线条
            if (currentPageIndex === 2) {
              if (this.activeIndex === 3) {
                if (!that.appearanceMove && !that.appearanceMove1) {
                  this.slideTo(2, 0, true);
                  that.appearanceMove = true;
                  return;
                } else if (that.appearanceMove && !that.appearanceMove1) {
                  this.slideTo(2, 0, true);
                  that.appearanceMove1 = true;
                  return;
                }
              } else if (this.activeIndex === 1) {
                if (that.appearanceMove && that.appearanceMove1) {
                  this.slideTo(2, 0, true);
                  that.appearanceMove1 = false;
                  return;
                } else if (that.appearanceMove && !that.appearanceMove1) {
                  this.slideTo(2, 0, true);
                  that.appearanceMove = false;
                  return;
                }
              }
            }
            // 第4屏 车的外观
            if (
              currentPageIndex === 2 &&
              this.activeIndex === 3 &&
              that.appearanceMove &&
              that.appearanceMove1
            ) {
              setTimeout(() => {
                that.startChange = true;
              }, 1000);
            }
            if (currentPageIndex === 3) {
              if (this.activeIndex === 2 || this.activeIndex === 4) {
                setTimeout(() => {
                  that.startChange = false;
                }, 1000);
              }
            }
            // 第5屏 后备箱
            if (currentPageIndex === 4) {
              if (this.activeIndex === 5) {
                if (that.carWgIndex < 2) {
                  this.slideTo(4, 0, false);
                  that.carWgIndex = that.carWgIndex + 1;
                  return;
                } else if (that.carWgIndex === 2) {
                  that.carWgIndex = 3;
                }
              } else if (this.activeIndex === 3) {
                if (that.carWgIndex <= 2 && that.carWgIndex !== 0) {
                  this.slideTo(4, 0, false);
                  that.carWgIndex = that.carWgIndex - 1;
                  return;
                } else if (that.carWgIndex === 3) {
                  this.slideTo(4, 0, false);
                  that.carWgIndex = 1;
                  return;
                } else {
                  setTimeout(() => {
                    that.startChange = true;
                  }, 1000);
                }
              }
            }
            // 第6屏 nedc505km超长续航
            if (
              currentPageIndex === 5 &&
              this.activeIndex === 6 &&
              !that.finshCcxh
            ) {
              this.slideTo(5, 0, true);
              that.finshCcxh = true;
              return;
            } else if (
              currentPageIndex === 5 &&
              this.activeIndex === 4 &&
              that.finshCcxh
            ) {
              this.slideTo(5, 0, true);
              that.finshCcxh = false;
            }
            // 第7屏 505KM超长续航介绍
            if (currentPageIndex === 6) {
              if (this.activeIndex === 7) {
                if (that.carXhIndex < 1) {
                  this.slideTo(6, 0, false);
                  that.carXhIndex = that.carXhIndex + 1;
                  return;
                } else if (that.carXhIndex === 2) {
                  that.carXhIndex = 2;
                }
              } else if (this.activeIndex === 5) {
                if (that.carXhIndex <= 1 && that.carXhIndex !== 0) {
                  this.slideTo(6, 0, false);
                  that.carXhIndex = that.carXhIndex - 1;
                  return;
                } else if (that.carXhIndex === 2) {
                  this.slideTo(6, 0, false);
                  that.carXhIndex = 1;
                  return;
                }
              }
            }
            // 第8屏 nedc505km超长续航
            if (
              currentPageIndex === 7 &&
              this.activeIndex === 8 &&
              !that.finshZnzc
            ) {
              this.slideTo(7, 0, true);
              that.finshZnzc = true;
              return;
            } else if (
              currentPageIndex === 7 &&
              this.activeIndex === 6 &&
              that.finshZnzc
            ) {
              this.slideTo(7, 0, true);
              that.finshZnzc = false;
            }
            // 第9屏 双屏互动
            if (
              currentPageIndex === 8 &&
              this.activeIndex === 9 &&
              !that.finshThreenZz
            ) {
              this.slideTo(8, 0, true);
              that.finshThreenZz = true;
              return;
            } else if (
              currentPageIndex === 8 &&
              this.activeIndex === 7 &&
              that.finshThreenZz
            ) {
              this.slideTo(8, 0, true);
              that.finshThreenZz = false;
            }
            // 第10屏 12.3 英寸双屏互动
            if (currentPageIndex === 9) {
              if (this.activeIndex === 10) {
                if (that.twoScreenNum === 0) {
                  that.twoScreenNum = 1;
                  this.slideTo(9, 0, false);
                  return;
                }
              } else if (this.activeIndex === 8) {
                if (that.twoScreenNum === 1) {
                  that.twoScreenNum = 0;
                  this.slideTo(9, 0, false);
                  return;
                }
              }
            }
            // 第12屏 智能驾驶平台
            if (
              currentPageIndex === 11 &&
              this.activeIndex === 12 &&
              !that.finshZnjs
            ) {
              this.slideTo(11, 0, true);
              that.finshZnjs = true;
              return;
            } else if (
              currentPageIndex === 11 &&
              this.activeIndex === 10 &&
              that.finshZnjs
            ) {
              this.slideTo(11, 0, true);
              that.finshZnjs = false;
            }
            // 第14屏 智能安全
            if (
              currentPageIndex === 13 &&
              this.activeIndex === 14 &&
              !that.finshZnsafe
            ) {
              this.slideTo(13, 0, true);
              that.finshZnsafe = true;
              return;
            } else if (
              currentPageIndex === 13 &&
              this.activeIndex === 12 &&
              that.finshZnsafe
            ) {
              this.slideTo(13, 0, true);
              that.finshZnsafe = false;
            }
            // 底部
            if (currentPageIndex === 16) {
              if (this.activeIndex === 17) {
                if (!that.showFooter) {
                  this.slideTo(16, 0, false);
                  that.showFooter = true;
                  return;
                }
              } else if (this.activeIndex === 15) {
                if (that.showFooter) {
                  this.slideTo(16, 0, false);
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
          }
        }
      },
      firstData: {
        firstPage: true,
        bg: `${this.Resource}/E.5/pc/20220909/first-1.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/1-2.png`,
        carName: `${this.Resource}/E.5/pc/20220909/carName.png`,
        tips: "长续航大空间 智能纯电家轿",
        text1: "越级 出彩",
        price: "180,100",
        btText: [
          {
            text1: "NEDC 505公里",
            text2: "超长续航"
          },
          {
            text1: "2810mm轴距",
            text2: "大空间"
          },
          {
            text1: "四轮四角",
            text2: "黄金比例"
          },
          {
            text1: "智能驾驶平台",
            text2: "Living Pilot"
          },
          {
            text1: "智能座舱平台",
            text2: "Living Engine"
          }
        ]
      },
      ccxhData: {
        firstPage: false,
        bg: `${this.Resource}/E.5/pc/20220909/nedc505Bg.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/nedc505yy.png`
      },
      znzcData: {
        firstPage: false,
        bg: `${this.Resource}/E.5/pc/20220909/znzc.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/znzcyy.png`
      },
      znjsData: {
        firstPage: false,
        bg: `${this.Resource}/E.5/pc/20220909/znjs.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/znjsyy.png`
      },
      znsafeData: {
        firstPage: false,
        bg: `${this.Resource}/E.5/pc/20220909/znsafe.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/znsafe.png`
      },
      dlzcData: {
        firstPage: false,
        bg: `${this.Resource}/E.5/pc/20220909/dlzc.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/dlzcyy.png`
      },
      znaqData: {
        firstPage: false,
        bg: `${this.Resource}/E.5/pc/20220909/znaq.jpg`,
        yybg: `${this.Resource}/E.5/pc/20220909/znaqyy.png`
      },
      appearanceData: {
        bg1: `${this.Resource}/E.5/pc/20220909/slsj-1.jpg`,
        bg2: `${this.Resource}/E.5/pc/20220909/slsj-2.jpg`,
        bg3: `${this.Resource}/E.5/pc/20220909/slsj-3.jpg`,
        text1: "",
        text2: "“四轮四角”黄金比例",
        text3: "",
        text4: "超级空间 乘坐舒适",
        text5: "“四轮四角”黄金比例",
        text6: "",
        text7: "",
        text8: "2810mm超长轴距",
        text9: "带来更宽舒适的乘坐空间"
      },
      carLogoData: {
        bg: `${this.Resource}/E.5/pc/20220909/carColor.gif`,
        text1: "多功能实用科技",
        text2: "首创智能交互LOGO灯，支持迎宾互动，并显示充电进度"
      },
      threenScreenData: {
        bg: `${this.Resource}/E.5/pc/20220909/twoScreen.jpg`,
        bg1: `${this.Resource}/E.5/pc/20220909/threen-1.png`,
        bg2: `${this.Resource}/E.5/pc/20220909/threen-2.png`,
        text1: "智能座舱平台 Living Engine",
        text2: "大尺寸双屏互动，丰富导航娱乐功能加上强大的语音交互</br>能力，越级智能座舱令出行更加便捷",
        text3: "12.3 英寸双屏互动",
        text4: "12.3英寸悬浮式智能中控屏+12.3英寸数字仪表盘，带来丰富的行车信息及影音娱乐"
      },
      bigTcData: {
        bg: `${this.Resource}/E.5/pc/20220909/cjtc.jpg`,
        title: "1.91m² 超大全景天幕",
        tips: "看见更多精彩",
        text1: "",
        text2: ""
      },
      e5LogoData: {
        bg: `${this.Resource}/E.5/pc/20220909/logoDt.gif`,
        fm: `${this.Resource}/E.5/pc/20220909/logoFm.png`,
        text1: "同级首创<br />车外交互LOGO灯",
        tips: " 非全系标配",
        text2: " 车辆解锁时闪动，充电时进度提示"
      },
      nedc505kmData: [
        {
          src: `${this.Resource}/E.5/pc/20220909/nedc505Bg.jpg`,
          cons: "三元锂动力电池",
          cons1: "电池电量58.589KW·h,系统能量密度达到160wh/kg"
        },
        {
          src: `${this.Resource}/E.5/pc/20220909/nedc505Bg.jpg`,
          cons: "三合一高效电驱",
          cons1: "最大功率120kw、最大扭矩240N·m,超过自然吸气2.0的水平,最大车速可达170km/h"
        }
      ],
      spaceData: {
        bg: `${this.Resource}/E.5/pc/20220909/space.jpg`,
        title: "越级实用空间",
        text1: "宽敞的乘坐空间",
        text2: "针对智能电动车开发的整车架构，为乘客提供充足的前后排空间"
      },
      spaceData1: {
        bg: `${this.Resource}/E.5/pc/20220909/space.jpg`,
        title: "越级实用空间",
        text1: "丰富的储物空间",
        text2: "多达二十余处储物空间，车内物品收纳井井有条"
      },
      spaceData2: {
        bg: `${this.Resource}/E.5/pc/20220909/bigHbx.jpg`,
        title: "越级实用空间",
        text1: "灵活的行李箱空间",
        text2: "行李箱容积达488L，扩展总空间达1500L"
      },
      spaceData3: {
        bg: `${this.Resource}/E.5/pc/20220909/pzzy.jpg`,
        title: "",
        text1: "多功能高级皮质座椅",
        text2:
          "基于人体动态反应设计，主驾座椅6向电动调节，后排座椅5档角度调节，最大调节角度10°，带来舒适享受"
      },
      spaceData4: {
        bg: `${this.Resource}/E.5/pc/20220909/hzy.jpg`,
        title: "",
        text1: "多功能高级皮质座椅",
        text2:
          "基于人体动态反应设计，主驾座椅6向电动调节，后排座椅5档角度调节，最大调节角度10°，带来舒适享受"
      },
      idFace: {
        bg: `${this.Resource}/E.5/pc/20220909/idface.jpg`,
        title: "",
        text1: "ID人脸识别系统",
        text2: "支持多账号登录，各种调节随人而变，多项个性化设定一步到位"
      },
      cltcData: {
        bg: `${this.Resource}/E.5/pc/20220909/dlzc.jpg`,
        title: "",
        text1: "CLTC 460km扎实续航",
        text2:
          "57.1kWh三元锂电池，搭配转化效能95%的高功率永磁同步电机，无忧续航和强劲动力二者兼得"
      },
      CNCAPData: {
        bg: `${this.Resource}/E.5/pc/20220909/cncap.jpg`,
        title: "C-NCAP五星安全认证",
        text1: "采用塔式车身结构，超高强度车身设计",
        text2: "是国内首批获C-NCAP全五星评分的电动车之一"
      },
      CleanProData: {
        bg: `${this.Resource}/E.5/pc/20220909/cleanPro.jpg`,
        title: "",
        text1: "首创CleanPro健康头等舱",
        text2:
          "采用环保材料，并配备AQS车外空气质量检测、PM2.5主动监测系统、CN95微米空气过滤系统，多重守护提供全面安心的座舱体验"
      },
      safe5Data: {
        bg: `${this.Resource}/E.5/pc/20220909/safe5.jpg`,
        title: "C-NCAP五星安全认证",
        text1: "全方位安全气囊",
        text2: "配备前排双安全气囊、前排侧部安全气囊，提供及时周全的保护"
      },
      cdgnData: {
        bg: `${this.Resource}/E.5/pc/20220909/cdgn.jpg`,
        title: "",
        text1: "双向充电功能",
        text2:
          "对外放电高达3.3kW，支持车车互充，大功率电器(电饭煲、电磁炉、烤箱等) 即插即用，野外露营的绝佳拍档"
      },
      carWgData: [
        {
          src: `${this.Resource}/E.5/pc/20220909/three-1.jpg`,
          title: "人体工程学的座椅",
          cons: "高级皮质座椅，支持主驾座椅六向调节和<br />前排座椅加热"
        },
        {
          src: `${this.Resource}/E.5/pc/20220909/three-2.png`,
          title: "丰富的储物空间",
          cons: "车内14处储物空间<br />尺寸后备箱容积达425L"
        },
        {
          src: `${this.Resource}/E.5/pc/20220909/three-3.png`,
          title: "丰富的储物空间",
          cons: "车内14处储物空间<br />尺寸后备箱容积达425L"
        }
      ],
      carZnjsData: [
        {
          src: `${this.Resource}/E.5/pc/20220909/znjsjs.jpg`,
          title: "智能驾驶平台Living Pilot 3.5 Base",
          cons:
            "搭载ACC全速域自适应巡航功能，自动调节行<br />车速度，实现跟车刹停，行车更轻松、更安全",
          tips: "*非全系标配"
        }
      ],
      pilotData: [
        {
          src: `${this.Resource}/E.5/pc/20220909/pilot.jpg`,
          title: "安全驾驶辅助",
          cons:
            "通过FCW前方碰撞预警、AEB自动紧急制动等<br />多项安全驾驶辅助功能，预警危险并降低事<br />故发生概率",
          tips: "*非全系标配"
        }
      ],
      carYlData: [
        {
          src: `${this.Resource}/E.5/pc/20220909/yl-1.jpg`,
          title: "丰富的娱乐生态",
          cons:
            "海量资源多端共享，包含喜马拉雅、哔哩哔哩、</br>芒果TV、 腾讯视频等应用，打造全沉浸车内影院"
        },
        {
          src: `${this.Resource}/E.5/pc/20220909/yl-2.jpg`,
          title: "全生命周期OTA升级",
          cons: "率先支持OTA断点续传，具有系统备份功能，</br>升级服务省时稳定",
          cons1: "截至2022年6月，已完成14次升级，功能常</br>新体验常新",
          dian: true
        },
        {
          src: `${this.Resource}/E.5/pc/20220909/yl-4.jpg`,
          title: "AI小威语音交互系统",
          cons:
            "语音车控已覆盖25项常用功能，包括</br>空调调节，天窗开关等，指令必达，</br>秒懂你的需求"
        }
      ],
      batteryData: [
        {
          img: `${this.Resource}/E.5/pc/20220909/battery1.jpg`,
          btnTit: "模块化电池包",
          btnText: "累计多达12000次充放电测试；实测16万公里电池衰减率<5%"
        },
        {
          img: `${this.Resource}/E.5/pc/20220909/battery2.jpg`,
          btnTit: "多效电池安全保障",
          btnText:
            "远超国标的66项高标准检测；防水防尘达到最高的IP68；电池管理系统(BMS)云端大数据分析24小时 实时监测电池状态，及时预警"
        },
        {
          img: `${this.Resource}/E.5/pc/20220909/battery3.jpg`,
          btnTit: "动力电池终身质保*",
          btnText:
            "官方检测电池衰减率超20%，即为用户提供免费质保服务(免费维修或零部件更换)",
          btnTips: "*限非营运车辆首任车主"
        }
      ],
      yyjhData: {
        bg: `${this.Resource}/E.5/pc/20220909/battery4.jpg`,
        title: "智能语音交互",
        text1:
          "通过语音可轻松唤醒多媒体、车辆操控、智能驾驶辅助、娱乐应用四大板块的八大功能<br />实现超四十种操作"
        // text2:
          // "57.1kWh三元锂电池，搭配转化效能95%的高功率永磁同步电机，无忧续航和强劲动力二者兼得"
      },
      yyjhAppData: {
        bg: `${this.Resource}/E.5/pc/20220909/ycjhApp.jpg`,
        title: "手机APP远程交互",
        text1: "随时随地远程查看车辆状态，启用车辆功能",
        text2: "（* 非全系标配）"
      },
      betterySafeData: {
        bg: `${this.Resource}/E.5/pc/20220909/betterySafe.jpg`,
        title: "多效电池安全保证",
        text1: "防水防尘达到行业最高IP68级；通过高标准16项电池试验验证"
        // text2: "（* 非全系标配）"
      },
      vehicleType: "E.5",
      params: {
        platform: "pc",
        vehicleType: "E.5",
        isShowQRCode: 0
      }
      // ex5_04_data: this.$t("EX5Page.diaLogData.data_04")
    };
  },
  mounted() {
    // that = this;
    // this.setStandardFn();
    // document.addEventListener("mousewheel", this.handleWheel, false);
    // document.addEventListener("DOMMouseScroll", this.handleWheel, false);
  },
  created() {
    that = this;
    this.setStandardFn();
    document.addEventListener("mousewheel", this.handleWheel, false);
    document.addEventListener("DOMMouseScroll", this.handleWheel, false);
  },
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
    // 回到顶部
    topFn() {
      console.log("zxl");
      changeFnFlag = false;
      this.topShow = true;
      this.swiperE5.slideTo(0, 0, true);
      this.activeIndex = 0;
      this.finshFirstZz = false;
      this.finshCcxh = false;
      this.finshZnzc = false;
      this.finshDlzc = false;
      this.finshZnaq = false;
      this.finshZnjs = false;
      this.startDh = false;
      this.startChange = false;
      this.finshZnsafe = false;
      this.appearanceMove = false;
      this.appearanceMove1 = false;
      this.carWgIndex = 0;
      this.carZnjsIndex = 0;
      this.pilotIndex = 0;
      this.carXhIndex = 0;
      this.carYlIndex = 0;
      this.twoScreenNum = 0;
      this.finshThreenZz = false;
      this.showFooter = false;
      this.currentPageIndex = 0;
      currentPageIndex = 0;
      this.showFooter = false;
      setTimeout(() => {
        changeFnFlag = true;
      }, 100);
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
      if (that.swiperE5.destroyed) return;
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
        const index = that.swiperE5.activeIndex;
        console.log("wheelIndex:", index);
        currentPageIndex = index;
        this.currentPageIndex = index;
        that.swiperE5.activeIndex = index - wheelnum;
        if (that.swiperE5.activeIndex < 0) that.swiperE5.activeIndex = 0;
        that.swiperOptionEx5.on.slideChangeTransitionStart.bind(
          that.swiperE5
        )();
      }
    },
    onTestDriveSuccess(v) {
      Object.assign(this.params, v);
    }
  }
};
</script>

<style lang="scss" scoped>
.e5-pc {
  text-align: left;
  font-family: AlibabaPuHuiTiR;
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
  .test-drive-container {
    width: 100%;
    height: 100%;
    // background: url("https://cos-data.wm-imotor.com/website/W6/test_drive_bg_1.jpg")
    // no-repeat;
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
