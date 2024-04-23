<template>
  <div class="ex5-pc">
    <div class="slidesBox">
      <swiper ref="mySwiperEx5" :options="swiperOptionEx5">
        <!-- 第1屏1 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshFirstZz"
            :activeIndex="activeIndex"
            :data="firstData"
          />
        </swiper-slide>
        <!-- 第2屏 车线条变化 -->
        <swiper-slide class="slideItem">
          <Appearance :appearanceMove="appearanceMove" :data="appearanceData" />
        </swiper-slide>
        <!-- 第3屏 logo -->
        <swiper-slide class="slideItem">
          <CarLogo :data="carLogoData" />
        </swiper-slide>
        <!-- 第4屏 车把手 -->
        <swiper-slide class="slideItem">
          <swiptChange :data="carWgData" :carWgIndex="carWgIndex" />
        </swiper-slide>
        <!-- 第5屏 全景天窗 -->
        <swiper-slide class="slideItem">
          <BigTc :data="bigTcData" />
        </swiper-slide>
        <!-- 第6屏 超级实用空间 -->
        <swiper-slide class="slideItem">
          <Space :data="spaceData" />
        </swiper-slide>
        <!-- 第7屏 超级实用空间 -->
        <swiper-slide class="slideItem">
          <Space
            :data="spaceData1"
            :dian="true"
            :standard="standard"
            :browserWidth="browserWidth"
            :browserHeight="browserHeight"
            :imgSjWidth="imgSjWidth"
            :imgSjHeight="imgSjHeight"
          />
        </swiper-slide>
        <!-- 第8屏 超级实用空间 -->
        <swiper-slide class="slideItem">
          <Space :data="spaceData2" />
        </swiper-slide>
        <!-- 第9屏 高级皮质座椅 -->
        <swiper-slide class="slideItem">
          <Space :data="spaceData3" />
        </swiper-slide>
        <!-- 第10屏 高级皮质座椅 -->
        <swiper-slide class="slideItem">
          <Space :data="spaceData4" />
        </swiper-slide>
        <!-- 第11屏 智能座舱平台 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshZnzc"
            :activeIndex="activeIndex"
            :data="znzcData"
          />
        </swiper-slide>
        <!-- 第12屏 3屏一体式交互 -->
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
        <!-- 第13屏 ID人脸识别系统 -->
        <swiper-slide class="slideItem">
          <Space :data="idFace" />
        </swiper-slide>
        <!-- 第14屏 娱乐生态 -->
        <swiper-slide class="slideItem">
          <swiptChange :data="carYlData" :carWgIndex="carYlIndex" />
        </swiper-slide>
        <!-- 第15屏 电动动力总成 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshDlzc"
            :activeIndex="activeIndex"
            :data="dlzcData"
          />
        </swiper-slide>
        <!-- 第16屏 扎实续航 -->
        <swiper-slide class="slideItem">
          <Space :data="cltcData" />
        </swiper-slide>
        <!-- 第17屏 高效模块化电池包 -->
        <swiper-slide class="slideItem">
          <Battery :data="batteryData" />
        </swiper-slide>
        <!-- 第18屏 双向充电功能 -->
        <swiper-slide class="slideItem">
          <Space :data="cdgnData" />
        </swiper-slide>
        <!-- 第19屏 智能安全 -->
        <swiper-slide class="slideItem">
          <FirstPage
            :finshFirstZz="finshZnaq"
            :activeIndex="activeIndex"
            :data="znaqData"
          />
        </swiper-slide>
        <!-- 第20屏 C-NCAP五星安全认证 -->
        <swiper-slide class="slideItem">
          <Space :data="CNCAPData" color="gray" />
        </swiper-slide>
        <!-- 第21屏 C-NCAP五星安全认证 -->
        <swiper-slide class="slideItem">
          <Safe5
            :data="safe5Data"
            :dian="true"
            :standard="standard"
            :browserWidth="browserWidth"
            :browserHeight="browserHeight"
            :imgSjWidth="imgSjWidth"
            :imgSjHeight="imgSjHeight"
          />
        </swiper-slide>
        <!-- 第22屏 首创CleanPro健康头等舱 -->
        <swiper-slide class="slideItem">
          <Space :data="CleanProData" />
        </swiper-slide>
        <!-- 预约表单23 -->
        <swiper-slide class="slideItem">
          <div class="afterBox">
            <div :class="['testDriveBox', showFooter ? 'showFooter' : '']">
              <div
                id="test-drive-spa"
                class="test-drive-container"
                :style="{
                  backgroundImage: `url(${
                    this.Resource
                  }/EX5-Z/pc/20220909/ex5bg.jpg)`
                }"
                v-if="lang === 'zh'"
              >
                <!-- :vehicleType="params.vehicleType" -->
                <TestDrive
                  :vehicleType="params.vehicleType"
                  :isShowQRCode="params.isShowQRCode"
                  :platform="params.platform"
                  :pagetype="'EX5-Z'"
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
import Appearance from "@/components/vehicles/pc/appearance";
import CarLogo from "@/components/vehicles/pc/carLogo";
import SwiptChange from "@/components/vehicles/pc/swiptChange";
import BigTc from "@/components/vehicles/pc/bigTc";
import Space from "@/components/vehicles/pc/space";
import ThreeScreen from "@/components/vehicles/pc/threeScreen";
import Battery from "@/components/vehicles/pc/battery";
import Safe5 from "@/components/vehicles/pc/safe5";

import { mapState } from "vuex";
let that;
let vehicleflag = false;
let currentPageIndex = 0;
let wheelflag = false;
let wheelTime = null;
let changeFnFlag = true;
export default {
  name: "Ex5-z",
  components: {
    FixedWindow,
    Footer,
    FirstPage,
    Appearance,
    CarLogo,
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
    swiperEx5: function() {
      return this.$refs.mySwiperEx5.$swiper;
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
      finshZnzc: false,
      finshDlzc: false,
      finshZnaq: false,
      appearanceMove: false,
      carWgIndex: 0,
      carYlIndex: 0,
      finshThreenZz: false,
      showFooter: false,
      browserWidth: 0,
      browserHeight: 0,
      imgSjWidth: 0, // 背景图片实际的宽高
      imgSjHeight: 0,
      standard: "width", // 渲染以宽为基础
      swiperOptionEx5: {
        // initialSlide: 22,
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
            }
            if (
              currentPageIndex === 1 &&
              this.activeIndex === 0 &&
              !that.appearanceMove
            ) {
              that.topShow = true;
            }
            // 第2屏 车色线条
            if (
              currentPageIndex === 1 &&
              this.activeIndex === 2 &&
              !that.appearanceMove
            ) {
              this.slideTo(1, 0, true);
              that.appearanceMove = true;
              return;
            } else if (currentPageIndex === 1 && this.activeIndex === 0) {
              if (that.appearanceMove) {
                this.slideTo(1, 0, true);
                that.appearanceMove = false;
              }
            }
            // 第4屏 车的外观
            if (currentPageIndex === 3) {
              if (this.activeIndex === 4) {
                if (that.carWgIndex < 2) {
                  this.slideTo(3, 0, false);
                  that.carWgIndex = that.carWgIndex + 1;
                  return;
                } else if (that.carWgIndex === 2) {
                  that.carWgIndex = 3;
                }
              } else if (this.activeIndex === 2) {
                if (that.carWgIndex <= 2 && that.carWgIndex !== 0) {
                  this.slideTo(3, 0, false);
                  that.carWgIndex = that.carWgIndex - 1;
                  return;
                } else if (that.carWgIndex === 3) {
                  this.slideTo(3, 0, false);
                  that.carWgIndex = 1;
                  return;
                }
              }
            }
            // 第11屏
            if (
              currentPageIndex === 10 &&
              this.activeIndex === 11 &&
              !that.finshZnzc
            ) {
              this.slideTo(10, 0, true);
              that.finshZnzc = true;
              return;
            } else if (
              currentPageIndex === 10 &&
              this.activeIndex === 9 &&
              that.finshZnzc
            ) {
              this.slideTo(10, 0, true);
              that.finshZnzc = false;
            }
            // 第12屏 3屏一体式交互
            if (
              currentPageIndex === 11 &&
              this.activeIndex === 12 &&
              !that.finshThreenZz
            ) {
              this.slideTo(11, 0, true);
              that.finshThreenZz = true;
              return;
            } else if (
              currentPageIndex === 11 &&
              this.activeIndex === 10 &&
              that.finshThreenZz
            ) {
              this.slideTo(11, 0, true);
              that.finshThreenZz = false;
            }
            // 第14屏 娱乐生态
            if (currentPageIndex === 13) {
              if (this.activeIndex === 14) {
                if (that.carYlIndex < 2) {
                  this.slideTo(13, 0, false);
                  that.carYlIndex = that.carYlIndex + 1;
                  return;
                } else if (that.carYlIndex === 2) {
                  that.carYlIndex = 3;
                }
              } else if (this.activeIndex === 12) {
                if (that.carYlIndex <= 2 && that.carYlIndex !== 0) {
                  this.slideTo(13, 0, false);
                  that.carYlIndex = that.carYlIndex - 1;
                  return;
                } else if (that.carYlIndex === 3) {
                  this.slideTo(13, 0, false);
                  that.carYlIndex = 1;
                  return;
                }
              }
            }
            // 第15屏 电动动力总成
            if (
              currentPageIndex === 14 &&
              this.activeIndex === 15 &&
              !that.finshDlzc
            ) {
              this.slideTo(14, 0, true);
              that.finshDlzc = true;
              return;
            } else if (
              currentPageIndex === 14 &&
              this.activeIndex === 13 &&
              that.finshDlzc
            ) {
              this.slideTo(14, 0, true);
              that.finshDlzc = false;
            }
            // 第19屏 智能安全
            if (
              currentPageIndex === 18 &&
              this.activeIndex === 19 &&
              !that.finshZnaq
            ) {
              this.slideTo(18, 0, true);
              that.finshZnaq = true;
              return;
            } else if (
              currentPageIndex === 18 &&
              this.activeIndex === 17 &&
              that.finshZnaq
            ) {
              this.slideTo(18, 0, true);
              that.finshZnaq = false;
            }
            // 底部
            if (currentPageIndex === 22) {
              if (this.activeIndex === 23) {
                if (!that.showFooter) {
                  this.slideTo(22, 0, false);
                  that.showFooter = true;
                  return;
                }
              } else if (this.activeIndex === 21) {
                if (that.showFooter) {
                  this.slideTo(22, 0, false);
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
        bg: `${this.Resource}/EX5-Z/pc/20220909/first-1.jpg`,
        yybg: `${this.Resource}/EX5-Z/pc/20220909/1-2.png`,
        carName: `${this.Resource}/EX5-Z/pc/20220909/carName.png`,
        text1: "零接触智能交互纯电SUV",
        price: "169,800",
        btText: [
          {
            text1: "CLTC 460公里",
            text2: "扎实续航"
          },
          {
            text1: "越级空间",
            text2: "宽敞舒适"
          },
          {
            text1: "实用科技",
            text2: "便捷生活"
          }
        ]
      },
      znzcData: {
        firstPage: false,
        bg: `${this.Resource}/EX5-Z/pc/20220909/znzc.jpg`,
        yybg: `${this.Resource}/EX5-Z/pc/20220909/znzcyy.png`
      },
      dlzcData: {
        firstPage: false,
        bg: `${this.Resource}/EX5-Z/pc/20220909/dlzc.jpg`,
        yybg: `${this.Resource}/EX5-Z/pc/20220909/dlzcyy.png`
      },
      znaqData: {
        firstPage: false,
        bg: `${this.Resource}/EX5-Z/pc/20220909/znaq.jpg`,
        yybg: `${this.Resource}/EX5-Z/pc/20220909/znaqyy.png`
      },
      appearanceData: {
        bg1: `${this.Resource}/EX5-Z/pc/20220909/xt-1.jpg`,
        bg2: `${this.Resource}/EX5-Z/pc/20220909/xt-2.jpg`,
        text1: "悬浮式车身，多功能实用科技",
        text2: "外观，经典更动感",
        text3: "悬浮式车顶造型，贯穿的“星轨式”头尾灯组，经典更动感",
        text4: "悬浮式车身，多功能实用科技",
        text5: "外观，经典更动感",
        text6:
          "“短前悬 短后悬”黄金车身比例，外扩式底盘，运动时尚，斩获 2018年iF设计奖"
      },
      carLogoData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/carColor.gif`,
        text1: "多功能实用科技",
        text2: "首创智能交互LOGO灯，支持迎宾互动，并显示充电进度"
      },
      threenScreenData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/znzc.jpg`,
        bg1: `${this.Resource}/EX5-Z/pc/20220909/three-1.png`,
        bg2: `${this.Resource}/EX5-Z/pc/20220909/three-2.png`,
        bg3: `${this.Resource}/EX5-Z/pc/20220909/three-3.png`,
        text1: "智能座舱平台Living Engine 2.5",
        text2: "越级硬件配置，业界领先的语音控制，丰富的娱乐生态，带来全维智能用车体验",
        text3: "三屏一体式智能交互",
        text4: "搭载行业领先的15.6英寸智能大屏；",
        text5: "配合12.3英寸互动全液晶数字仪表、中央i-Control控制面板观感清晰，触屏指令能够实现毫秒级响应"
      },
      bigTcData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/bigTc.jpg`,
        title: "舒享空间，开阔视界",
        text1: "超大电动全景天窗",
        text2: "780mm*700mm大尺寸设计，带来超大视野"
      },
      spaceData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/space.jpg`,
        title: "越级实用空间",
        text1: "宽敞的乘坐空间",
        text2: "针对智能电动车开发的整车架构，为乘客提供充足的前后排空间"
      },
      spaceData1: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/space.jpg`,
        title: "越级实用空间",
        text1: "丰富的储物空间",
        text2: "多达二十余处储物空间，车内物品收纳井井有条"
      },
      spaceData2: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/bigHbx.jpg`,
        title: "越级实用空间",
        text1: "灵活的行李箱空间",
        text2: "行李箱容积达488L，扩展总空间达1500L"
      },
      spaceData3: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/pzzy.jpg`,
        title: "",
        text1: "多功能高级皮质座椅",
        text2:
          "基于人体动态反应设计，主驾座椅6向电动调节，后排座椅5档角度调节，最大调节角度10°，带来舒适享受"
      },
      spaceData4: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/hzy.jpg`,
        title: "",
        text1: "多功能高级皮质座椅",
        text2:
          "基于人体动态反应设计，主驾座椅6向电动调节，后排座椅5档角度调节，最大调节角度10°，带来舒适享受"
      },
      idFace: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/idface.jpg`,
        title: "",
        text1: "ID人脸识别系统",
        text2: "支持多账号登录，各种调节随人而变，多项个性化设定一步到位"
      },
      cltcData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/dlzc.jpg`,
        title: "",
        text1: "CLTC 460km扎实续航",
        text2:
          "57.1kWh三元锂电池，搭配转化效能95%的高功率永磁同步电机，无忧续航和强劲动力二者兼得"
      },
      CNCAPData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/cncap.jpg`,
        title: "C-NCAP五星安全认证",
        text1: "采用塔式车身结构，超高强度车身设计",
        text2: "是国内首批获C-NCAP全五星评分的电动车之一"
      },
      CleanProData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/cleanPro.jpg`,
        title: "",
        text1: "首创CleanPro健康头等舱",
        text2:
          "采用环保材料，并配备AQS车外空气质量检测、PM2.5主动监测系统、CN95微米空气过滤系统，多重守护提供全面安心的座舱体验"
      },
      safe5Data: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/safe5.jpg`,
        title: "C-NCAP五星安全认证",
        text1: "全方位安全气囊",
        text2: "配备前排双安全气囊、前排侧部安全气囊，提供及时周全的保护"
      },
      cdgnData: {
        bg: `${this.Resource}/EX5-Z/pc/20220909/cdgn.jpg`,
        title: "",
        text1: "双向充电功能",
        text2:
          "对外放电高达3.3kW，支持车车互充，大功率电器(电饭煲、电磁炉、烤箱等) 即插即用，野外露营的绝佳拍档"
      },
      carWgData: [
        {
          src: `${this.Resource}/EX5-Z/pc/20220909/three-1.jpg`,
          title: "多功能实用科技",
          cons: "隐藏式车门把手"
        },
        {
          src: `${this.Resource}/EX5-Z/pc/20220909/three-2.jpg`,
          title: "多功能实用科技",
          cons: "冲浪板式车顶行李架"
        },
        {
          src: `${this.Resource}/EX5-Z/pc/20220909/three-3.jpg`,
          title: "多功能实用科技",
          cons: "18英寸铝合金轮毂"
        }
      ],
      carYlData: [
        {
          src: `${this.Resource}/EX5-Z/pc/20220909/yl-1.jpg`,
          title: "丰富的娱乐生态",
          cons:
            "海量资源多端共享，包含喜马拉雅、哔哩哔哩、</br>芒果TV、 腾讯视频等应用，打造全沉浸车内影院"
        },
        {
          src: `${this.Resource}/EX5-Z/pc/20220909/yl-2.jpg`,
          title: "全生命周期OTA升级",
          cons: "率先支持OTA断点续传，具有系统备份功能，</br>升级服务省时稳定",
          cons1: "截至2022年6月，已完成14次升级，功能常</br>新体验常新",
          dian: true
        },
        {
          src: `${this.Resource}/EX5-Z/pc/20220909/yl-4.jpg`,
          title: "AI小威语音交互系统",
          cons:
            "语音车控已覆盖25项常用功能，包括</br>空调调节，天窗开关等，指令必达，</br>秒懂你的需求"
        }
      ],
      batteryData: [
        {
          img: `${this.Resource}/EX5-Z/pc/20220909/battery.jpg`,
          btnTit: "模块化电池包",
          btnText: "累计多达12000次充放电测试；实测16万公里电池衰减率<5%"
        },
        {
          img: `${this.Resource}/EX5-Z/pc/20220909/battery.jpg`,
          btnTit: "多效电池安全保障",
          btnText:
            "远超国标的66项高标准检测；防水防尘达到最高的IP68；电池管理系统(BMS)云端大数据分析24小时 实时监测电池状态，及时预警"
        },
        {
          img: `${this.Resource}/EX5-Z/pc/20220909/battery.jpg`,
          btnTit: "动力电池终身质保*",
          btnText:
            "官方检测电池衰减率超20%，即为用户提供免费质保服务(免费维修或零部件更换)",
          btnTips: "*限非营运车辆首任车主"
        }
      ],
      params: {
        platform: "pc",
        vehicleType: "EX5-Z",
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
      this.swiperEx5.slideTo(0, 0, true);
      this.activeIndex = 0;
      this.finshFirstZz = false;
      this.finshZnzc = false;
      this.finshDlzc = false;
      this.finshZnaq = false;
      this.appearanceMove = false;
      this.carWgIndex = 0;
      this.carYlIndex = 0;
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
      if (that.swiperEx5.destroyed) return;
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
        const index = that.swiperEx5.activeIndex;
        console.log("wheelIndex:", index);
        currentPageIndex = index;
        this.currentPageIndex = index;
        that.swiperEx5.activeIndex = index - wheelnum;
        if (that.swiperEx5.activeIndex < 0) that.swiperEx5.activeIndex = 0;
        that.swiperOptionEx5.on.slideChangeTransitionStart.bind(
          that.swiperEx5
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
.ex5-pc {
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
