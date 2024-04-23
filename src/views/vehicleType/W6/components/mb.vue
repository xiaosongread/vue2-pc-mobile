<template>
  <div>
    <div v-if="lang === 'zh'" id="PcTest" class="W6mb">
      <div class="swiper-container" id="swiper-container1">
        <div class="swiper-wrapper">
          <!-- 首屏 0-->
          <div class="swiper-slide">
            <FirstPage :finshFirstZz="finshFirstZz" :data="firstPageData" />
          </div>
          <!-- 车颜色切换 1-->
          <div class="swiper-slide">
            <carColor />
          </div>
          <!-- logo灯改变 2-->
          <div class="swiper-slide"><Logo :data="logoData" /></div>
          <!-- 超大天窗 3-->
          <div class="swiper-slide">
            <TianChuang :finshFourMove="finshFourMove" />
          </div>
          <!-- 32色后备箱 4-->
          <div class="swiper-slide">
            <single :listData="light32Data" />
            <!-- <div class="swiper-container" id="swiper-container2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <Light32 />
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div> -->
          </div>
          <!-- 后备箱 5-->
          <div class="swiper-slide">
            <single :listData="hbxData" />
            <!-- <div class="swiper-container" id="swiper-container2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <Light32 />
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div> -->
          </div>
          <!-- 智能座舱平台遮罩 6-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstCockpit"
              :finshTwojiashi="finshTwoCockpit"
              :textObj="cockpitData"
            />
          </div>
          <!-- 单屏图片 7-->
          <div class="swiper-slide"><Engine :textObj="engineText" /></div>
          <!-- faceId 8-->
          <div class="swiper-slide"><face /></div>
          <!-- 三屏互联系统 9-->
          <div class="swiper-slide">
            <screen
              :htScreen="htScreen"
              :finshFirstScreen="finshFirstScreen"
              :finshTwoScreen="finshTwoScreen"
              :finshBack="finshBack"
            />
          </div>
          <!-- wimi 10-->
          <div class="swiper-slide">
            <wimi :showWimi="showWimi" />
          </div>
          <!-- video 11-->
          <div class="swiper-slide">
            <wmVideo ref="wmVideo" />
          </div>
          <!-- 丰富娱乐生态 12-->
          <div class="swiper-slide">
            <single :listData="ylData" />
            <!-- <div class="swiper-container" id="swiper-container3">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <yule />
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div> -->
          </div>
          <!-- 高通 13-->
          <div class="swiper-slide">
            <single :listData="gtData" :imgFit="otaImgFit" />
          </div>
          <!-- 智能驾驶平台 14-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstjiashi"
              :finshTwojiashi="finshTwojiashi"
              :textObj="jiashiData"
            />
          </div>
          <!-- 智能驾驶平台 Living Pilot 15-->
          <div class="swiper-slide">
            <pilot :textObj="pilotText" :finshPilot="finshPilot" />
          </div>
          <!-- 360全景音像 左右切换swipte 16-->
          <div class="swiper-slide">
            <single :listData="text360" />
          </div>
          <!-- 智能安全 17-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstSafe"
              :finshTwojiashi="finshTwoSafe"
              :textObj="safeData"
            />
          </div>
          <!-- 15项安全辅助驾驶 18-->
          <div class="swiper-slide">
            <single :listData="fuzhuData" />
          </div>
          <!-- 电动动力总成平台 19-->
          <div class="swiper-slide">
            <jiashi
              :finshFirstjiashi="finshFirstZc"
              :finshTwojiashi="finshTwoZc"
              :textObj="ZcData"
            />
          </div>
          <!-- nedc 520km 单屏图片 20-->
          <div class="swiper-slide"><Engine :textObj="nedcText" /></div>
          <!-- 高效模块化电池包 21-->
          <div class="swiper-slide">
            <single :listData="batteryData" />
          </div>
          <!-- 智能露营神器 单屏图片 22-->
          <div class="swiper-slide"><Engine :textObj="luyinText" /></div>
          <!-- 预约试驾 23-->
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
          <!-- 下载 24-->
          <div class="swiper-slide">
            <div class="swiper-container" id="swiper-container4">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <down />
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
import carColor from "@/components/vehicles/mb/carColor";
import Light32 from "@/components/vehicles/mb/light32";
import Logo from "@/components/vehicles/mb/logo";
import TianChuang from "@/components/vehicles/mb/tianChuang";
import Engine from "@/components/vehicles/mb/engine";
import face from "@/components/vehicles/mb/face";
import screen from "@/components/vehicles/mb/screen";
import wimi from "@/components/vehicles/mb/wimi";
import yule from "@/components/vehicles/mb/yule.vue";
import jiashi from "@/components/vehicles/mb/jiashi.vue";
import pilot from "@/components/vehicles/mb/pilot.vue";
import single from "@/components/vehicles/mb/singleSwipt.vue";
import down from "@/components/vehicles/mb/down.vue";
import Screen from "@/components/vehicles/mb/screen.vue";
import wmVideo from "@/components/vehicles/mb/wmVideo.vue";
import TestDrive from "@/components/testDrive/index";
import oldTem from "../../W6o/components/mb.vue";

let currentPageIndex;
let direction;
let that;
let changeFnFlag = true;
export default {
  components: {
    FirstPage,
    carColor,
    Light32,
    Logo,
    TianChuang,
    Engine,
    face,
    screen,
    wimi,
    yule,
    jiashi,
    pilot,
    single,
    down,
    Screen,
    wmVideo,
    TestDrive,
    top,
    oldTem
  },
  data() {
    return {
      mySwiper1: null,
      mySwiper2: null,
      finshFirstZz: false,
      finshFourMove: false,
      finshFirstCockpit: false,
      finshTwoCockpit: false,
      finshWimi: false,
      showWimi: false,
      finshlogo: false,
      finshFirstjiashi: false,
      finshTwojiashi: false,
      finshPilot: false,
      finshFirstSafe: false,
      finshTwoSafe: false,
      finshFirstZc: false,
      finshTwoZc: false,
      finshFirstScreen: false,
      htScreen: false,
      finshTwoScreen: false,
      finshBack: false,
      topShow: false,
      otaImgFit: true,
      params: {
        platform: "mb",
        vehicleType: "W6",
        isShowQRCode: 0
      },
      firstPageData: {
        bg: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/1-1.jpg",
        carName: "https://cos-data.wm-imotor.com/website/W6/pc/w6/carName.png",
        zzBg: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/1-2.png",
        text1: "智能电动车停车专家",
        text2: "超算力可进化智能纯电SUV",
        text3: "193,800",
        btnArray: [
          {
            btnText1: "NEDC 520公里",
            btnText2: "超长续航"
          },
          {
            btnText1: "大空间",
            btnText2: "精致实用"
          },
          {
            btnText1: "智能驾驶平台",
            btnText2: "Living Pilot"
          },
          {
            btnText1: "智能座舱平台",
            btnText2: "Living Engine"
          }
        ]
      },
      logoData: {
        tit: "双色车身 智能灯语",
        imgList: [
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo01.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo02.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo03.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo04.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo05.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo06.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo07.jpg"
          },
          {
            img: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/logo08.jpg"
          }
        ],
        tit1: "智能交互灯语",
        cons: "充电进度提示；迎宾场景互动"
      },
      engineText: {
        tit: "智能座舱平台</br> Living Engine 3.3",
        cons:
          "基于全球率先量产SOA架构打造的智</br>能出行大空间，满足车主在不同出行</br>场景下更便捷、个性化的用车需求",
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/pt-3.jpg",
        // consColor: "#F2F2F7"
      },
      nedcText: {
        tit: "NEDC 520KM 扎实续航",
        cons:
          "66.2kW·h三元锂电池，搭配转化</br>效能95%的高效能三合一永磁同</br>步电机，从此告别里程焦虑",
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/nedc.jpg",
        titColor: "#757575",
        consColor: "#F2F2F7"
      },
      pilotText: {
        tit: '智能驾驶平台</br> Living Pilot 4.0',
        cons: '国内首个拥有全场景泊车辅助功能</br>的智驾平台，覆盖住宅等固定停车</br>位及商场等公共停车位，让每一次</br>泊车都更轻松',
        url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/pilot.jpg'
      },
      luyinText: {
        tit: '智能露营神器',
        cons: '支持大功率电器(电饭煲、电磁</br>炉、烤箱)即插即用，野外露营的</br>绝佳拍档',
        url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/shenqi.jpg',
        titColor: "#757575",
        consColor: "#F2F2F7"
      },
      text360: [
        {
          tit: "360°全景影像",
          cons: '坐在车里也可获得360°全景鸟瞰影像；窥知</br>周围场景，消除驾驶盲区，一切尽在掌握',
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/360-1.jpg'
        },
        {
          tit: "遥控泊车辅助(RPA)&自动泊车辅助(APA)",
          cons: '针对垂直、侧方等难停车位及狭窄车位</br>一键即可完成泊入泊出',
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/360-2.jpg'
        },
        {
          tit: "固定车位记忆泊车（HAVP）",
          cons: '面对住宅等固定停车位，仅需学习</br>一次泊车路线，即可精准自动泊</br>入，回家的路它自己走',
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/360-3.jpg'
        },
        {
          tit: "公共停车场免学习自主泊车（PAVP）",
          cons: '针对商场、超市等公共停车位，可自动寻</br>找车位、泊入车位，首次到访也可下车即</br>走，召之即来',
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/360-4.jpg',
          tips: "*后续将通过OTA推送升级"
        },
        {
          tit: "30项高阶智驾辅助",
          cons: '30项高级智能驾驶辅助，包括自动跟车、</br>车道保持、拨杆变道等，高速、城区</br>等高频使用场景下，行车更轻松、</br>更安全',
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/360-5.jpg'
        },
        {
          tit: "23颗顶级传感器",
          cons: '搭载6颗高清摄像头、5颗毫米波</br>雷达、12颗超声波雷达，360度全</br>方位立体感知周边环境',
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/360-6.jpg'
        }
      ],
      light32Data: [
        {
          tit: "32色智能随动氛围灯",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/light1-1.jpg'
        },
        {
          tit: "32色智能随动氛围灯",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/light1-2.jpg'
        }
      ],
      hbxData: [
        {
          tit: "剧院级音效",
          cons: "全车9+1大功率扬声器，WM-Sonic专业</br>调音团队与国际顶级调音师共同开发，精</br>准定位每个扬声器位置，音场更丰富，音</br>质更细腻",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/music-1.jpg'
        },
        {
          tit: "后备箱超大空间",
          cons: "543L基础容量可满足全家人的行李置放;</br>1625L扩展后备箱容量，可以摆放各类大</br>型物品",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/music-2.jpg'
        },
        {
          tit: "后备箱超大空间",
          cons: "543L基础容量可满足全家人的行李置放;</br>1625L扩展后备箱容量，可以摆放各类大</br>型物品",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/music-3.jpg'
        }
      ],
      ylData: [
        {
          tit: "丰富的娱乐生态",
          cons: "海量娱乐应用，让旅途想唱就唱，想听就听，想看就看",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/shentai-1.jpg'
        },
        {
          tit: "移动的唱吧",
          cons: "拥有80万首云端正版曲库，剧院级音效，支</br>持双人对唱型物品",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/shentai-2.jpg'
        }
      ],
      gtData: [
        {
          tit: "高通 SA8155P 处理器",
          cons: "国内首款搭载高通SA8155P处理器的量</br>产智能电动车，强悍的座舱域性能，为</br>娱乐系统提供强大的计算能力",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/gaotong-1.jpg'
        },
        {
          tit: "全域OTA升级",
          cons: "拥有80万首云端正版曲库，剧院级音效，</br>支持双人对唱型物品",
          cons1: "采用A/B双区备份机制，确保升级</br>过程中的安全性",
          cons2: "支持主动升级、预约升级、手机远</br>控升级等多种升级方式",
          url:
            "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/gaotong-2.jpg"
        }
      ],
      batteryData: [
        {
          tit: "模块化电池包",
          cons: '累计多达120,000次充放电测试</br>实测16万公里电池衰减仅5%',
          imgTit: "高效模块化电池包",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/battery1.jpg'
        },
        {
          tit: "多效电池安全保障",
          cons: '远超国标的66项高标准检测;<br>防水防尘达到了最高级的IP68级;<br>电池管理系统(BMS)实时监控、确</br>保电池正常安全运行',
          imgTit: "高效模块化电池包",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/battery2.jpg'
        },
        {
          tit: "动力电池终身质保",
          cons:
            "官方检测电池衰减率超20%，</br>即为用户提供免费质保服务</br>(免费维修或零部件更换)",
          tips: "*限非营运车辆首任威马车主可享受",
          imgTit: "高效模块化电池包",
          url: 'https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/battery3.jpg'
        }
      ],
      jiashiData: {
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/jiashi-1.jpg",
        url1: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/jiashi-2.png"
      },
      cockpitData: {
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/aq.jpg",
        url1: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/zc-2.png"
      },
      safeData: {
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/safe-1.jpg",
        url1: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/safe-2.png"
      },
      ZcData: {
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/dl-1.jpg",
        url1: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/dl-2.png"
      },
      fuzhuData: [
        {
          tit: "15项安全驾驶辅助",
          cons:
            "全方位实时侦测预警，通过AEB自动</br>紧急制动，BSD盲区监测预警、 DOW</br>车门开启预警等多项安全驾驶辅助功</br>能，提前感知规避危险",
          url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/fuzhu-1.jpg"
        },
        {
          tit: "C-NCAP五星安全标准设计",
          cons:
            "采用塔式车身结构，超高强度车身设计</br>400Mpa以上高强度钢材占比75.2%</br>1500Mpa热成型钢占比12%；配备前后</br>一体式侧窗安全气帘，安全防护无死角",
          url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/fuzhu-2.jpg"
        },
        {
          tit: "CleanPro健康头等舱",
          cons:
            "AQS车外空气质量监测系统、PM2.5主动</br>监测系统、CN95微米空气过滤系统、负离</br>子空气净化系统、UVC感应式净舱功能，</br>五重守护提供全面安心的驾乘体验",
          url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/fuzhu-3.jpg"
        }
      ]
    };
  },
  mounted() {
    that = this;
    this.addMeta("apple-mobile-web-app-capable", "yes");
    this.mySwiper1 = new Swiper("#swiper-container1", {
      direction: "vertical",
      // initialSlide: 22, // 9 -> 3屏幕互动  3 -> 天窗 11 -> video
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
          if (currentPageIndex === 3) {
            if (this.activeIndex === 4 && !that.finshFourMove) {
              this.slideTo(3, 0, false);
              that.finshFourMove = true;
            } else if (this.activeIndex === 2 && that.finshFourMove) {
              this.slideTo(3, 0, false);
              that.finshFourMove = false;
            }
          }
          if (currentPageIndex === 6) {
            if (this.activeIndex === 7) {
              if (!that.finshFirstCockpit && !that.finshTwoCockpit) {
                that.finshFirstCockpit = true;
                this.slideTo(6, 0, false);
              }
              // else if (that.finshFirstCockpit && !that.finshTwoCockpit) {
              //   that.finshTwoCockpit = true;
              //   this.slideTo(5, 0, false);
              // }
            } else if (this.activeIndex === 5) {
              // if (that.finshFirstCockpit && that.finshTwoCockpit) {
              //   that.finshTwoCockpit = false;
              //   this.slideTo(5, 0, false);
              // } else 
              if (that.finshFirstCockpit && !that.finshTwoCockpit) {
                that.finshFirstCockpit = false;
                this.slideTo(6, 0, false);
              }
            }
          }
          // 三屏联动
          if (currentPageIndex === 9) {
            console.log(
                "11",
                that.finshFirstScreen,
                that.finshTwoScreen,
                that.finshBack
              );
            if (this.activeIndex === 10) {
              if (!that.finshFirstScreen && !that.finshTwoScreen) {
                that.finshFirstScreen = true;
                this.slideTo(9, 0, false);
              } else if (that.finshFirstScreen && !that.finshTwoScreen) {
                that.finshTwoScreen = true;
                this.slideTo(9, 0, false);
              } else {
                that.showWimi = true;
              }
            } else if (this.activeIndex === 8) {
              if (that.finshFirstScreen && that.finshTwoScreen) {
                console.log(1)
                that.finshTwoScreen = false;
                that.finshBack = true;
                this.slideTo(9, 0, false);
              } else if (that.finshFirstScreen && !that.finshTwoScreen) {
                console.log(2)
                that.finshFirstScreen = false;
                that.finshBack = false;
                that.htScreen = true;
                this.slideTo(9, 0, false);
              } else {
                console.log(3)
                that.finshBack = false;
                setTimeout(() => {
                  that.htScreen = false;
                }, 1000);
              }
            }
          }
          // wimi
          if (currentPageIndex === 10) {
            setTimeout(() => {
              that.showWimi = false;
            }, 1000);
          }
          if (currentPageIndex === 11) {
            if (this.activeIndex === 10) {
              that.showWimi = true;
              that.$refs.wmVideo.pauseFn();
            } else if (this.activeIndex === 12) {
              that.$refs.wmVideo.pauseFn();
            }
          }
          if (currentPageIndex === 14) {
            if (this.activeIndex === 15) {
              if (!that.finshFirstjiashi && !that.finshTwojiashi) {
                that.finshFirstjiashi = true;
                this.slideTo(14, 0, false);
              }
              //  else if (that.finshFirstjiashi && !that.finshTwojiashi) {
              //   that.finshTwojiashi = true;
              //   this.slideTo(12, 0, false);
              // }
            } else if (this.activeIndex === 13) {
              // if (that.finshFirstjiashi && that.finshTwojiashi) {
              //   that.finshTwojiashi = false;
              //   this.slideTo(12, 0, false);
              // } else
              if (that.finshFirstjiashi && !that.finshTwojiashi) {
                that.finshFirstjiashi = false;
                this.slideTo(14, 0, false);
              }
            }
          }
          if (
            currentPageIndex === 15 &&
            this.activeIndex === 16 &&
            !that.finshPilot
          ) {
            this.slideTo(15, 0, false);
            that.finshPilot = true;
          } else if (
            currentPageIndex === 15 &&
            this.activeIndex === 14 &&
            that.finshPilot
          ) {
            this.slideTo(15, 0, false);
            that.finshPilot = false;
          }
          if (currentPageIndex === 17) {
            if (this.activeIndex === 18) {
              if (!that.finshFirstSafe && !that.finshTwoSafe) {
                that.finshFirstSafe = true;
                this.slideTo(17, 0, false);
              }
              //  else if (that.finshFirstSafe && !that.finshTwoSafe) {
              //   that.finshTwoSafe = true;
              //   this.slideTo(15, 0, false);
              // }
            } else if (this.activeIndex === 16) {
              // if (that.finshFirstSafe && that.finshTwoSafe) {
              //   that.finshTwoSafe = false;
              //   this.slideTo(15, 0, false);
              // } else 
              if (that.finshFirstSafe && !that.finshTwoSafe) {
                that.finshFirstSafe = false;
                this.slideTo(17, 0, false);
              }
            }
          }
          if (currentPageIndex === 19) {
            if (this.activeIndex === 20) {
              if (!that.finshFirstZc && !that.finshTwoZc) {
                that.finshFirstZc = true;
                this.slideTo(19, 0, false);
              }
              //  else if (that.finshFirstZc && !that.finshTwoZc) {
              //   that.finshTwoZc = true;
              //   this.slideTo(17, 0, false);
              // }
            } else if (this.activeIndex === 18) {
              // if (that.finshFirstZc && that.finshTwoZc) {
              //   that.finshTwoZc = false;
              //   this.slideTo(17, 0, false);
              // } else 
              if (that.finshFirstZc && !that.finshTwoZc) {
                that.finshFirstZc = false;
                this.slideTo(19, 0, false);
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
      this.finshFourMove = false;
      this.finshFirstCockpit = false;
      this.finshTwoCockpit = false;
      this.finshWimi = false;
      this.showWimi = false;
      this.finshlogo = false;
      this.finshFirstjiashi = false;
      this.finshTwojiashi = false;
      this.finshPilot = false;
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
