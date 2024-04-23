<template>
  <div class="home">
    <div class="banner wow fadeIn">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div
            class="pc_swiper_img"
            :data-url="item.pcJumpLink"
            :style="{ backgroundImage: 'url(' + item.pcImgUrl + ')' }"
          ></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="vmAllVehicle">
      <div class="wmAllTitle">{{ $t("homePage.wmListTitle") }}</div>
      <div class="carsModelContainer">
        <Vehicles
          :platform="'pc'"
          v-for="(item, index) in modelList"
          :key="index"
          :vehiclesData="item"
        />
      </div>
    </div>
    <div class="experienceContainer">
      <div class="experience">
        <div class="experienceLeft">
          <div class="experienceDesc">智能汽车头号实力派</div>
          <div class="experienceTitle">
            {{ $t("homePage.experienceTitle") }}
          </div>
          <div class="experienceBtn" v-if="lang === 'zh'">
            <div class="testBtn btnHover" @click="TestDrive">预约试驾</div>
            <div class="netWorkBtn btnHover" @click="netWork">网点查询</div>
            <div
              slot="reference"
              class="netWorkBtn btnHover"
              @mouseenter="onLine"
              @mouseleave="onLine"
            >
              在线咨询
            </div>
            <div class="fix-service" v-show="onLineShow">
              <div class="left">
                <div class="onLineTitle">扫码咨询专属客服:</div>
                <div class="onlineDesc">
                  即刻发现最适合您的威马车型<br />随时获取最新最全的产品资讯<br />快捷领取购车福利省钱又省心
                </div>
              </div>
              <div class="right">
                <img :src="service" alt="体验威马" />
              </div>
            </div>
          </div>
          <div class="experienceBtn" v-if="lang === 'en'">
            <div class="testBtnEn" @click="netWork">Find Us</div>
          </div>
        </div>
        <div class="experienceImg">
          <swiper ref="mySwipers" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in swiperImg" :key="index">
              <img :src="item" alt="智能汽车头号实力派" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vehicles from "@/components/vehicles/hoverVideo";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "Home",
  components: {
    Vehicles
  },
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      swiperOption: {
        speed: 300,
        autoplay: {
          disableOnInteraction: false,
          delay: 600000
        },
        loop: true,
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        on: {
          slideChange: function() {},
          click: function(event) {
            that.testBtnClick(event);
          }
        }
      },
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        // slidesPerGroup: 1000, //定义1张图片为一组
        freeMode: true,
        speed: 15000,
        loop: true,
        // autoplay: false
        autoplay: {
          delay: 0,
          disableOnInteraction: false //就算触摸了也继续滚动
        }
      },
      bigWidth: "",
      // 预约试驾1 查看配置2 在线资讯3
      swiperBanner: [
        {
          bg: `${this.Resource}home/pc/M7.png`,
          url: "/M7"
        },
        {
          bg: `${this.Resource}home/pc/W6.png`,
          url: "/W6"
        },
        {
          bg: `${this.Resource}EX5/PC.png`,
          url: "/EX-5"
        }
      ],
      modelList: this.$t("homePage.list"),
      swiperImg: [
        `${this.Resource}home/pc/footer_01.jpg`,
        `${this.Resource}home/pc/footer_02.jpg`,
        `${this.Resource}home/pc/footer_03.jpg`,
      ],
      onLineShow: false,
      service: `${this.Resource}service_online.jpg`
    };
  },
  created() {
    that = this;
  },
  mounted() {},
  computed: {
    swiper: function() {
      return this.$refs.mySwiper.$swiper;
    },
    swipers: function() {
      return this.$refs.mySwipers.$swiper;
    }
    // swiperOption: function() {
    //   // var that = this;
    //   return {
    //     speed: 300,
    //     autoplay: {
    //       delay: 3000
    //     },
    //     loop: true,
    //     // 显示分页
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true
    //     },
    //     effect : 'fade',
    //     fadeEffect: {
    //       crossFade: true,
    //     }
    //     // paginationClickable: true,
    //     // effect: "fade",
    //     // on: {
    //     //   slideChange: function() {},
    //     //   click: function(event) {
    //     //     // that.testBtnClick(event);
    //     //   }
    //     // }
    //     // //显示分页
    //     // pagination: {
    //     //   el: ".swiper-pagination",
    //     //   clickable: true
    //     // },
    //     // speed: 1500,
    //     // //自动轮播
    //     // // autoplay: false,
    //     // autoplay: {
    //     //   delay: 3000,
    //     //   //当用户滑动图片后继续自动轮播
    //     //   disableOnInteraction: false
    //     // },
    //     //开启循环模式
    //     // loop: true,
    //     // on: {
    //     //   slideChange: function() {},
    //     //   click: function(event) {
    //     //     that.testBtnClick(event);
    //     //   }
    //     // }
    //   };
    // }
  },
  methods: {
    ...mapMutations(["UPDATE_CUSTOMER_SERVICE"]),
    slideChange() {
      // console.log("改变了，activeIndex为" + val);
    },
    TestDrive() {
      this.$router.push({
        path: "/TestDrive"
      });
    },
    netWork() {
      window.open("https://official.wm-motor.com/network.html", '_self');
    },
    onLine() {
      this.onLineShow = !this.onLineShow;
    },
    testBtnClick(vm) {
      console.log(vm.target.dataset.url);
      if (vm.target.dataset.url) {
        window.open(vm.target.dataset.url,'_self');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: left;
  .banner {
    width: 100%;
    height: 1080px;
    position: relative;
    .pc_swiper_img {
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 1080px;
      overflow: hidden;
      cursor: pointer;
    }
    .swiper-pagination {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      bottom: 38px;
      /deep/ .swiper-pagination-bullet {
        background: #ffffff;
        width: 8px;
        height: 8px;
        margin: 0 18px;
        opacity: 1;
      }
      /deep/ .swiper-pagination-bullet-active {
        background: #ffffff;
        width: 16px;
        height: 16px;
      }
    }
    .name {
      width: 259px;
      height: 65px;
      margin-top: 300px;
      margin-left: 122px;
      img {
        height: 100%;
      }
    }
    .siper_title {
      font-size: 30px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #ffffff;
      line-height: 30px;
      margin-left: 122px;
      margin-top: 30px;
    }
    .btn {
      margin-left: 122px;
      margin-top: 159px;
      text-align: center;
      .btnTop {
        width: 309px;
        height: 62px;
        background: #ffffff;
        line-height: 62px;
        border: 1px solid #ffffff;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #383838;
        cursor: pointer;
      }
      .btnBottom {
        width: 309px;
        height: 62px;
        border: 1px solid #ffffff;
        margin-top: 20px;
        line-height: 62px;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #ffffff;
        cursor: pointer;
      }
      .btnBottomEn {
        width: 371px;
        height: 62px;
        background: #ffffff;
        margin-top: 159px;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #333333;
      }
    }
  }
  .vmAllVehicle {
    background: #e0e1e2;
    overflow: hidden;
    padding-bottom: 72px;
    .wmAllTitle {
      text-align: center;
      font-size: 36px;
      font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #505050;
      line-height: 36px;
      margin-top: 86px;
      margin-bottom: 80px;
    }
    .carsModelContainer {
      display: flex;
      flex-wrap: wrap;
      width: 1524px;
      justify-content: space-between;
      margin-left: 198px;
    }
  }
  .experienceContainer {
    width: 100%;
    height: 602px;
    background: #1b1b1b;
    .experience {
      display: flex;
      .experienceLeft {
        width: 479px;
        text-align: center;
        .experienceDesc {
          font-size: 28px;
          font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #e0e1e2;
          line-height: 20px;
          letter-spacing: 1px;
          transform: scale(0.4);
          margin-top: 154px;
          margin-bottom: 10px;
        }
        .experienceTitle {
          font-size: 36px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #e0e1e2;
          line-height: 50px;
        }
        .experienceBtn {
          text-align: center;
          margin-left: 130px;
          .testBtn {
            width: 220px;
            height: 44px;
            background: #30b489;
            line-height: 44px;
            font-size: 17px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
            font-weight: normal;
            color: #e0e1e2;
            margin-top: 70px;
            border: 1px solid #30b489;
            cursor: pointer;
            &:hover {
              transition: 0.5s;
              background: #1f7357;
            }
          }
          .testBtnEn {
            width: 220px;
            height: 44px;
            background: #30b489;
            margin-top: 102px;
            line-height: 44px;
            font-size: 17px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
            font-weight: normal;
            color: #e0e1e2;
            cursor: pointer;
            &:hover {
              transition: 0.5s;
              background: #1f7357;
            }
          }
          .netWorkBtn {
            cursor: pointer;
            width: 220px;
            height: 44px;
            border: 1px solid #e0e1e2;
            font-size: 17px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
            font-weight: normal;
            color: #e0e1e2;
            line-height: 44px;
            margin-top: 25px;
            &:hover {
              transition: 0.5s;
              background: rgba(216, 216, 216, 0.2);
            }
          }
          .fix-service {
            width: 506px;
            height: 263px;
            position: absolute;
            margin-left: 240px;
            margin-top: -155px;
            z-index: 2;
            background: #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            box-sizing: border-box;
            padding: 51px 29px 0 29px;
            .left {
              display: flex;
              flex-direction: column;
              text-align: left;
              .onLineTitle {
                width: 220px;
                height: 33px;
                font-size: 24px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                font-weight: normal;
                color: #333333;
                line-height: 33px;
                margin-bottom: 36px;
              }
              .onlineDesc {
                width: 257px;
                height: 81px;
                font-size: 18px;
                font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
                font-weight: normal;
                color: #666666;
                line-height: 27px;
                letter-spacing: 1px;
              }
            }
            .right {
              img {
                width: 162px;
              }
            }
            &::before {
              content: "";
              position: absolute;
              left: -16px;
              top: 50%;
              transform: translateY(-50%);
              border-top: 8px solid transparent;
              border-right: 8px solid white;
              border-bottom: 8px solid transparent;
              border-left: 8px solid transparent;
            }
          }
        }
      }
      .experienceImg {
        width: 1321px;
        overflow: hidden;
        height: 602px;
        .swiper-container {
          height: 100%;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
<style>
.home .banner .swiper-wrapper {
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.home .swiper-container .swiper-wrapper {
  -webkit-transition-timing-function: linear; /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}
</style>
