<template>
  <div>
    <div v-if="lang === 'zh'" id="PcTest" class="W6mb">
      <div class="swiper-container" id="swiper-container1">
        <div class="swiper-wrapper">
          <!-- 首屏 1-->
          <div class="swiper-slide">
            <FirstPage :finshFirstZz="finshFirstZz" :data="firstPageData" />
          </div>
          <!-- 车线条变化 2 -->
          <div class="swiper-slide">
            <Appearance
              :appearanceMove="appearanceMove"
              :data="appearanceData"
            />
          </div>
          <!-- 多功能使用工具 3-->
          <div class="swiper-slide">
            <single :listData="dgnData" />
          </div>
          <!-- 舒适空间 开阔视界 4-->
          <div class="swiper-slide"><Engine :textObj="fourText" /></div>
          <!-- 超级实用空间 5-->
          <div class="swiper-slide">
            <bigSpace
              :data="bigSpaceData"
              :finshBigSpaceFirst="finshBigSpaceFirst"
              :finshBigSpaceTwo="finshBigSpaceTwo"
            />
          </div>
          <!-- 多功能高级皮质座椅 6-->
          <div class="swiper-slide">
            <single :listData="pzzyData" />
          </div>
          <!-- 智能座舱平台遮罩 7-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstCockpit"
              :finshTwojiashi="finshTwoCockpit"
              :textObj="cockpitData"
            />
          </div>
          <!-- 三屏互联系统 8-->
          <div class="swiper-slide">
            <screen
              :data="screenData"
              :htScreen="htScreen"
              :finshFirstScreen="finshFirstScreen"
              :finshTwoScreen="finshTwoScreen"
              :finshBack="finshBack"
            />
          </div>
          <!-- 单屏图片 ID人脸识别系统 9-->
          <div class="swiper-slide"><single :listData="idFaceText" /></div>
          <!-- 单屏图片 丰富的娱乐生态 10-->
          <div class="swiper-slide"><single :listData="yuleText" /></div>
          <!-- 电动动力总成遮罩 11-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstZc"
              :finshTwojiashi="finshTwoZc"
              :textObj="ZcData"
            />
          </div>
          <!-- CLTC 460km扎实续航 12-->
          <div class="swiper-slide">
            <Engine :textObj="CLTCText" />
          </div>
          <!-- 模块化电池包 13-->
          <div class="swiper-slide">
            <single :listData="batteryData" />
          </div>
          <!-- 双向充电功能 14-->
          <div class="swiper-slide">
            <single :listData="sxcdData" />
          </div>
          <!-- 智能安全 15-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstSafe"
              :finshTwojiashi="finshTwoSafe"
              :textObj="safeData"
            />
          </div>
          <!-- 安全气囊 16-->
          <div class="swiper-slide">
            <single :listData="aqqnData" />
          </div>
          <!-- 首创CleanPro健康头等舱 17-->
          <div class="swiper-slide">
            <Engine :textObj="cleanProText" />
          </div>
          <!-- 预约试驾 18-->
          <div class="swiper-slide">
            <TestDrive
              id="test-drive-spa"
              :vehicleType="params.vehicleType"
              :isShowQRCode="params.isShowQRCode"
              :platform="params.platform"
              :pagetype="'W6'"
              @testDriveSuccess="onChangeVehicle"
            />
          </div>
          <!-- 下载 19-->
          <div class="swiper-slide">
            <div class="swiper-container" id="swiper-container4">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <down :url="downImg" />
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <top v-show="topShow" pageType="vehicle" @topFn="topFn" />
    </div>
    <div v-else>
      <oldTem />
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import top from "@/components/top";
import "swiper/css/swiper.min.css";
import FirstPage from "@/components/vehicles/mb/firstPage";
import Appearance from "@/components/vehicles/mb/appearance";
import Engine from "@/components/vehicles/mb/engine";
import bigSpace from "@/components/vehicles/mb/bigSpace";
import screen from "@/components/vehicles/mb/screenEx5";
import jiashi from "@/components/vehicles/mb/jiashi.vue";
import single from "@/components/vehicles/mb/singleSwipt.vue";
import down from "@/components/vehicles/mb/down.vue";
import Screen from "@/components/vehicles/mb/screen.vue";
import TestDrive from "@/components/testDrive/index";
import oldTem from "../../W6o/components/mb.vue";

let currentPageIndex;
let direction;
let that;
let changeFnFlag = true;
export default {
  components: {
    FirstPage,
    Appearance,
    bigSpace,
    Engine,
    screen,
    jiashi,
    single,
    down,
    Screen,
    TestDrive,
    top,
    oldTem
  },
  data() {
    return {
      mySwiper1: null,
      mySwiper2: null,
      finshFirstZz: false,
      appearanceMove: false,
      finshFourMove: false,
      finshFirstCockpit: false,
      finshBigSpaceFirst: 0,
      finshBigSpaceTwo: false,
      finshTwoCockpit: false,
      finshFirstjiashi: false,
      finshTwojiashi: false,
      finshFirstSafe: false,
      finshTwoSafe: false,
      finshFirstZc: false,
      finshTwoZc: false,
      finshFirstScreen: false,
      htScreen: false,
      finshTwoScreen: false,
      finshBack: false,
      topShow: false,
      params: {
        platform: "mb",
        vehicleType: "W6",
        isShowQRCode: 0
      },
      downImg: `${this.Resource}/EX5-Z/mb/20221115/down.jpg`,
      firstPageData: {
        bg: `${this.Resource}/EX5-Z/mb/20221115/1-1.jpg`,
        carName: `${this.Resource}/EX5-Z/mb/20221115/carName.png`,
        zzBg: `${this.Resource}/EX5-Z/mb/20221115/1-2.png`,
        text1: "零接触智能交互纯电SUV",
        text2: "",
        text3: "169,800",
        btnArray: [
          {
            btnText1: "CLTC 460公里",
            btnText2: "扎实续航"
          },
          {
            btnText1: "越级空间",
            btnText2: "宽敞舒适"
          },
          {
            btnText1: "实用科技",
            btnText2: "便携生活"
          }
        ],
        fontColor: "white"
      },
      bigSpaceData: {
        src: `${this.Resource}/EX5-Z/mb/20221115/bigspace.jpg`,
        width: 2582,
        height: 1448
      },
      appearanceData: {
        bg1: `${this.Resource}/EX5-Z/mb/20221115/xt-1.jpg`,
        bg2: `${this.Resource}/EX5-Z/mb/20221115/xt-2.jpg`,
        text1: "悬浮式车身，多功能实用科技",
        text2: "外观，经典更动感",
        text3: "悬浮式车顶造型，贯穿的“星轨式”头尾灯组<br />经典更动感",
        text4: "悬浮式车身，多功能实用科技",
        text5: "外观，经典更动感",
        text6:
          "“短前悬 短后悬”黄金车身比例，外扩式底盘<br />运动时尚，斩获 2018年iF设计奖"
      },
      idFaceText: [
        {
          tit: "ID人脸识别系统",
          cons:
            "支持多账号登录，各种调节随人而变，<br />多项个性化设定一步到位",
          url: `${this.Resource}/EX5-Z/mb/20221115/idFace.jpg`,
          consColor: "#666666"
        }
      ],
      yuleText: [
        {
          tit: "丰富的娱乐生态",
          cons:
            "海量资源多端共享，包含喜马拉雅、哔<br />哩哔哩、芒果TV、 腾讯视频等应用，<br />打造全沉浸车内影院",
          url: `${this.Resource}/EX5-Z/mb/20221115/yule-1.jpg`,
          consColor: "#666666"
        },
        {
          tit: "全生命周期OTA升级",
          cons:
            "	• 	率先支持OTA断点续传，具有系统<br />备份功能，升级服务省时稳定",
          cons1: "	• 	截至2022年6月，已完成14次升<br />级，功能常新体验常新",
          url: `${this.Resource}/EX5-Z/mb/20221115/yule-2.jpg`,
          consColor: "#666666"
        },
        {
          tit: "AI小威语音交互系统",
          cons:
            "语音车控已覆盖25项常用功能，包括空<br />调调节，天窗开 关等，指令必达，秒懂<br />你的需求",
          url: `${this.Resource}/EX5-Z/mb/20221115/yule-3.jpg`,
          consColor: "#666666"
        }
      ],
      CLTCText: {
        btit: "CLTC 460km扎实续航",
        cons:
          "57.1kWh三元锂电池<br/>搭配转化效能95%的高功率永磁同步电机<br/>无忧续航和强劲动力二者兼得",
        url: `${this.Resource}/EX5-Z/mb/20221115/dl-1.jpg`,
        // consColor: "#F2F2F7"
      },
      cleanProText: {
        btit: "首创CleanPro健康头等舱",
        cons:
          "采用环保材料，并配备AQS车外空气质量检测、<br/>PM2.5主动监测系统、CN95微米空气过滤系统，<br/>多重守护提供全面安心的座舱体验",
        url: `${this.Resource}/EX5-Z/mb/20221115/cleanPro.jpg`,
        // consColor: "#F2F2F7"
      },
      screenData: {
        bg: `${this.Resource}/EX5-Z/mb/20221115/aq.jpg`,
        jt1: `${this.Resource}/EX5-Z/mb/20221115/jt-1.png`,
        jt2: `${this.Resource}/EX5-Z/mb/20221115/jt-2.png`,
        jt3: `${this.Resource}/EX5-Z/mb/20221115/jt-3.png`
      },
      fourText: {
        tit: "舒适空间，开阔视界",
        btit: "超大电动全景天窗",
        cons: "780mm*700mm大尺寸设计<br />带来超大视野",
        imgUrl: `${this.Resource}/EX5-Z/mb/20221115/qjtc.jpg`,
        // consColor: "#F2F2F7"
      },
      dgnData: [
        {
          tit: "多功能实用科技",
          cons: "18英寸铝合金轮辋",
          url: `${this.Resource}/EX5-Z/mb/20221115/dgn-1.jpg`
        },
        {
          tit: "多功能实用科技",
          cons: "冲浪板式车顶行李架",
          url: `${this.Resource}/EX5-Z/mb/20221115/dgn-2.jpg`
        },
        {
          tit: "多功能实用科技",
          cons: "隐藏式车门把手",
          url: `${this.Resource}/EX5-Z/mb/20221115/dgn-3.jpg`
        },
        {
          tit: "多功能实用科技",
          cons: "首创智能交互LOGO灯<br />支持迎宾互动，并显示充电进度",
          url: `${this.Resource}/EX5-Z/mb/20221115/dgn-4.jpg`
        }
      ],
      sxcdData: [
        {
          tit: "双向充电功能",
          cons:
            "对外放电高达3.3kW，支持车车互充，<br />大功率电器(电饭煲、电磁炉、烤箱等)<br />即插即用，野外露营的绝佳拍档",
          url: `${this.Resource}/EX5-Z/mb/20221115/sxcd.jpg`
        }
      ],
      aqqnData: [
        {
          tit: "高刚性车身",
          cons:
            "采用塔式车身结构，超高强度车身设计<br />是国内首批获C-NCAP全五星评分的<br />电动车之一",
          url: `${this.Resource}/EX5-Z/mb/20221115/aqqn-1.jpg`
        },
        {
          tit: "全方位安全气囊",
          cons:
            "配备前排双安全气囊<br />前排侧部安全气囊<br />提供及时周全的保护",
          url: `${this.Resource}/EX5-Z/mb/20221115/aqqn-2.jpg`
        }
      ],
      pzzyData: [
        {
          tit: "多功能高级皮质座椅",
          cons:
            "基于人体动态反应设计，主驾座椅<br />6向电动调节，后排座椅5档角度调<br />节，最大调节角度10°，带来舒适<br />享受",
          url: `${this.Resource}/EX5-Z/mb/20221115/pzzy-1.jpg`
        },
        {
          tit: "多功能高级皮质座椅",
          cons:
            "基于人体动态反应设计，主驾座椅<br />6向电动调节，后排座椅5档角度调<br />节，最大调节角度10°，带来舒适<br />享受",
          url: `${this.Resource}/EX5-Z/mb/20221115/pzzy-2.jpg`
        }
      ],
      batteryData: [
        {
          tit: "模块化电池包",
          cons: '累计多达120,000次充放电测试</br>实测16万公里电池衰减仅5%',
          // imgTit: "高效模块化电池包",
          url: `${this.Resource}/EX5-Z/mb/20221115/battery.jpg`
        },
        {
          tit: "多效电池安全保障",
          cons: '远超国标的66项高标准检测;<br>IP68级电池防护等级;<br>电池管理系统(BMS)云端大数据分析</br>24小时实时监测电池状态，及时预警',
          // imgTit: "高效模块化电池包",
          url: `${this.Resource}/EX5-Z/mb/20221115/battery.jpg`
        },
        {
          tit: "动力电池终身质保*",
          cons:
            "官方检测电池衰减率超20%，</br>即为用户提供免费质保服务</br>(免费维修或零部件更换)",
          tips: "*限非营运车辆首任威马车主可享受",
          // imgTit: "高效模块化电池包",
          url: `${this.Resource}/EX5-Z/mb/20221115/battery.jpg`
        }
      ],
      cockpitData: {
        url: `${this.Resource}/EX5-Z/mb/20221115/aq.jpg`,
        url1: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/zc-2.png"
      },
      safeData: {
        url: `${this.Resource}/EX5-Z/mb/20221115/safe-1.jpg`,
        url1: `${this.Resource}/EX5-Z/mb/20221115/safe-2.png`
      },
      ZcData: {
        url: `${this.Resource}/EX5-Z/mb/20221115/dl-1.jpg`,
        url1: `${this.Resource}/EX5-Z/mb/20221115/dl-2.png`
      }
    };
  },
  mounted() {
    that = this;
    this.addMeta("apple-mobile-web-app-capable", "yes");
    this.mySwiper1 = new Swiper("#swiper-container1", {
      direction: "vertical",
      initialSlide: 7, // 定位 8
      followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
      shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
      longSwipesMs: 1000, //长短滑动临界时间
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1
      },
      loadOnTransitionStart: true,
      watchSlidesVisibility: true, //解决了swiper前面的一个不能提前加载的bug
      on: {
        touchMove: function() {
          console.log("touchMove", this.activeIndex);
          //手动滑动中触发
          currentPageIndex = this.activeIndex;
        },
        touchEnd: function() {
          console.log("touchEnd", this.swipeDirection);
          //手动滑动结束触发
          direction = this.swipeDirection;
          if (
            currentPageIndex === 0 &&
            direction === "prev" &&
            that.finshFirstZz
          ) {
            this.slideTo(0, 0, true);
            that.finshFirstZz = false;
          }
        },
        slideChangeTransitionStart() {
          console.log("slideChangeTransitionStart");
          if (!changeFnFlag) return;
          if (
            currentPageIndex === 0 &&
            this.activeIndex === 1 &&
            !that.finshFirstZz
          ) {
            this.slideTo(0, 0, true);
            that.finshFirstZz = true;
          }
          // 控制top显示
          if (
            currentPageIndex === 0 &&
            this.activeIndex === 1 &&
            that.finshFirstZz
          ) {
            that.topShow = true;
          }
          if (currentPageIndex === 1 && this.activeIndex === 0) {
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
          if (currentPageIndex === 3) {
            if (this.activeIndex === 4 && !that.finshFourMove) {
              this.slideTo(3, 0, false);
              that.finshFourMove = true;
            } else if (this.activeIndex === 2 && that.finshFourMove) {
              this.slideTo(3, 0, false);
              that.finshFourMove = false;
            }
          }
          if (currentPageIndex === 4) {
            if (this.activeIndex === 5) {
              if (
                (that.finshBigSpaceFirst === 0 ||
                  that.finshBigSpaceFirst === 2) &&
                !that.finshBigSpaceTwo
              ) {
                that.finshBigSpaceFirst = 1;
                this.slideTo(4, 0, false);
              } else if (
                that.finshBigSpaceFirst === 1 &&
                !that.finshBigSpaceTwo
              ) {
                that.finshBigSpaceTwo = true;
                this.slideTo(4, 0, false);
              }
            } else if (this.activeIndex === 3) {
              if (that.finshBigSpaceFirst === 1 && !that.finshBigSpaceTwo) {
                that.finshBigSpaceFirst = 2;
                this.slideTo(4, 0, false);
              } else if (that.finshBigSpaceFirst && that.finshBigSpaceTwo) {
                that.finshBigSpaceTwo = false;
                this.slideTo(4, 0, false);
              }
            }
          }
          if (currentPageIndex === 6) {
            if (this.activeIndex === 7) {
              if (!that.finshFirstCockpit && !that.finshTwoCockpit) {
                that.finshFirstCockpit = true;
                this.slideTo(6, 0, false);
              }
            } else if (this.activeIndex === 5) {
              if (that.finshFirstCockpit && !that.finshTwoCockpit) {
                that.finshFirstCockpit = false;
                this.slideTo(6, 0, false);
              }
            }
          }
          // 三屏联动
          if (currentPageIndex === 7) {
            if (this.activeIndex === 8) {
              if (!that.finshFirstScreen && !that.finshTwoScreen) {
                that.finshFirstScreen = true;
                this.slideTo(7, 0, false);
              } else if (that.finshFirstScreen && !that.finshTwoScreen) {
                that.finshTwoScreen = true;
                this.slideTo(7, 0, false);
              } else {
                that.showWimi = true;
              }
            } else if (this.activeIndex === 6) {
              if (that.finshFirstScreen && that.finshTwoScreen) {
                that.finshTwoScreen = false;
                that.finshBack = true;
                this.slideTo(7, 0, false);
              } else if (that.finshFirstScreen && !that.finshTwoScreen) {
                that.finshFirstScreen = false;
                that.finshBack = false;
                that.htScreen = true;
                this.slideTo(7, 0, false);
              } else {
                that.finshBack = false;
                setTimeout(() => {
                  that.htScreen = false;
                }, 1000);
              }
            }
          }
          if (currentPageIndex === 10) {
            if (this.activeIndex === 11) {
              if (!that.finshFirstZc && !that.finshTwoZc) {
                that.finshFirstZc = true;
                this.slideTo(10, 0, false);
              }
            } else if (this.activeIndex === 9) {
              if (that.finshFirstZc && !that.finshTwoZc) {
                that.finshFirstZc = false;
                this.slideTo(10, 0, false);
              }
            }
          }
          if (currentPageIndex === 14) {
            if (this.activeIndex === 15) {
              if (!that.finshFirstSafe && !that.finshTwoSafe) {
                that.finshFirstSafe = true;
                this.slideTo(14, 0, false);
              }
            } else if (this.activeIndex === 15) {
              if (that.finshFirstSafe && !that.finshTwoSafe) {
                that.finshFirstSafe = false;
                this.slideTo(14, 0, false);
              }
            }
          }
        }
      }
      // pagination: { el: '.swiper-pagination', clickable: true }
    });
    this.mySwiper2 = new Swiper("#swiper-container2", {
      // 子swiper
      direction: 'vertical',
      nested: true,
      // resistanceRatio: 0,
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: { el: '.swiper-scrollbar' }
    });
    this.mySwiper3 = new Swiper("#swiper-container3", {
      // 子swiper
      direction: 'vertical',
      nested: true,
      // resistanceRatio: 0,
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: { el: '.swiper-scrollbar' }
    });
    this.mySwiper4 = new Swiper("#swiper-container4", {
      // 子swiper
      direction: 'vertical',
      nested: true,
      // resistanceRatio: 0,
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: { el: '.swiper-scrollbar' }
    });
  },
  methods: {
    addMeta(name, content) {
      const meta = document.createElement("meta");
      meta.content = content;
      meta.name = name;
      document.getElementsByTagName("head")[0].appendChild(meta);
    },
    onChangeVehicle(v) {
      Object.assign(this.params, v);
    },
    topFn() {
      changeFnFlag = false;
      this.finshFirstZz = false;
      this.appearanceMove = false;
      this.finshFourMove = false;
      this.finshFirstCockpit = false;
      this.finshBigSpaceFirst = 0;
      this.finshBigSpaceTwo = false;
      this.finshTwoCockpit = false;
      this.finshFirstjiashi = false;
      this.finshTwojiashi = false;
      this.finshFirstSafe = false;
      this.finshTwoSafe = false;
      this.finshFirstZc = false;
      this.finshTwoZc = false;
      this.finshFirstScreen = false;
      this.htScreen = false;
      this.finshTwoScreen = false;
      this.finshBack = false;
      this.topShow = false;
      this.currentPageIndex = 0;
      this.mySwiper1.slideToLoop(0, 0, false);
      setTimeout(() => {
        changeFnFlag = true;
      }, 100);
    }
  }
};
</script>
<style lang="scss" scoped>
#PcTest {
  width: 100%;
  // height: calc(100% - 100px);
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
  // height: calc(100% - 100px);
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
#swiper-container2 .swiper-slide,
#swiper-container3 .swiper-slide,
#swiper-container4 .swiper-slide {
  font-size: 18px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  line-height: 100px;
  // background: #4390EE;
  color: #fff;
}
</style>
<style lang="scss">
.W6mb {
  .dealer-mb {
    position: absolute !important;
  }
}
</style>
