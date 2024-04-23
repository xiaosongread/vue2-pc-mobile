<template>
  <div class="phone_home">
    <div class="phone_swiper">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div
            class="phone_siper_img"
            :data-url="item.appJumpLink"
            :style="{ backgroundImage: 'url(' + item.appImgUrl + ')' }"
          ></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="cars">{{ $t("homePage.wmListTitle") }}</div>
    <div class="carsModel" v-for="(item, index) in modelList" :key="index">
      <div class="modelContainer" @click="details(item)">
        <div class="carName">
          <img :src="item.name" alt="" />
        </div>
        <div class="desc">{{ item.desc[0] }}</div>
        <div class="comprehensive">{{ $t("homePage.comprehensive") }}</div>
        <div class="price">{{ item.desc[1] }}</div>
        <div class="carImg" :class="{ carImgActive: index === 0 }">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
    <div class="experience">
      <div class="experienceImg">
        <swiper ref="mySwipers" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in swiperImg" :key="index">
            <img :src="item" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="experienceCon">
        <div class="experienceDesc">智能汽车头号实力派</div>
        <div class="experienceTitle">
          {{ $t("homePage.experienceTitle") }}
        </div>
        <div class="experienceBtn" v-if="lang === 'zh'">
          <div class="testBtn" @click="TestDrive">预约试驾</div>
          <div class="netWorkBtn" @click="netWork">网点查询</div>
          <div class="netWorkBtn" @click="wxaurl">在线咨询</div>
        </div>
        <div class="experienceBtn" v-if="lang === 'en'">
          <div class="testBtnEn" @click="netWork">Find Us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var that = null;
export default {
  name: "phone_home",
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
          delay: 3000
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
        slidesPerView: 1,
        spaceBetween: 5,
        // slidesPerGroup: 1000, //定义1张图片为一组
        freeMode: true,
        speed: 18000,
        loop: true,
        // autoplay: false
        autoplay: {
          delay: 0,
          disableOnInteraction: false //就算触摸了也继续滚动
        }
      },
      modelList: this.$t("homePage.list"),
      swiperBanner: [
        {
          bg: `${this.Resource}home/mb/M7_bg.png`,
          url: "/M7"
        },
        {
          bg: `${this.Resource}W6/mb/wm1.png`,
          url: "/W6"
        },
        {
          bg: `${this.Resource}EX5-Z/MB.png`,
          url: "/EX-5"
        }
      ],
      swiperImg: [
        `${this.Resource}home/pc/footer_01.jpg`,
        `${this.Resource}home/pc/footer_02.jpg`,
        `${this.Resource}home/pc/footer_03.jpg`,
      ]
    };
  },
  created() {
    that = this;
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.mySwiper.swiper;
    });
  },
  computed: {
    swipers: function() {
      return this.$refs.mySwipers.$swiper;
    }
    // swiperOption: function() {
    //   var that = this;
    //   return {
    //     loop: true,
    //     speed: 3000,
    //     // autoplay: false,
    //     autoplay: {
    //       delay: 3000,
    //       disableOnInteraction: false
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //       // 自定义分页器， bulletClass 是常规的分页名字， bulletActiveClass是active时候的名字
    //       bulletClass: "my-bullet",
    //       bulletActiveClass: "my-bullet-active"
    //     },
    //     on: {
    //       slideChange: function() {},
    //       click: function(event) {
    //         that.testBtnClick(event);
    //       }
    //     }
    //   };
    // }
  },
  methods: {
    details(event) {
      console.log('是什么', event)
      this.$router.push({
        path: event.url
      });
    },
    TestDrive() {
      this.$router.push({
        path: "/TestDrive"
      });
    },
    netWork() {
      window.open("https://official.wm-motor.com/network.html");
    },
    wxaurl() {
      window.open("https://www.wm-imotor.com/statistics/wxscheme/wxJumpMiddlePage.html?id=28&cfgId=421&type=1");
    },
    testBtnClick(vm) {
      console.log(vm.target.dataset.url);
      if (vm.target.dataset.url) {
        window.open(vm.target.dataset.url);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.phone_home {
  background: #f4f5f6;
  .phone_swiper {
    position: relative;
  }
  .swiper-container {
    height: 100%;
  }
  .phone_hotModels {
    padding: 56px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f4f5f6;
    .phone_hotModels_title {
      height: 32px;
      font-size: 32px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #000000;
      line-height: 32px;
    }
    .phone_hotModels_line {
      margin: 0 auto;
      margin-top: 20px;
      width: 40px;
      height: 4px;
      background: #31bfa0;
      border-radius: 2px;
    }
  }
  .swiper-slide {
    width: 100vw;
    text-align: center;
    font-size: 18px;
    height: 1448px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .phone_siper_img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    text-align: left;
    .name {
      margin-top: 142px;
      width: 206px;
      height: 52px;
      margin-left: 44px;
      img {
        height: 100%;
      }
    }
    .title {
      font-size: 32px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #ffffff;
      line-height: 32px;
      margin-top: 30px;
      margin-left: 44px;
    }
    .btn {
      position: absolute;
      bottom: 210px;
      .btnTop {
        margin-left: 220px;
        width: 309px;
        height: 62px;
        text-align: center;
        line-height: 62px;
        background: #ffffff;
        border: 1px solid #ffffff;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #383838;
      }
      .btnBottom {
        margin-left: 220px;
        margin-top: 22px;
        width: 309px;
        height: 62px;
        line-height: 62px;
        text-align: center;
        border: 1px solid #ffffff;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
      .btnBottomEn {
        margin-left: 132px;
        width: 486px;
        margin-top: 878px;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #383838;
        background: #ffffff;
      }
    }
  }
  .swiper-pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .phone_vehicles {
    padding: 0 32px 0;
  }
  .phone_introduce {
    width: 100%;
    height: 1364px;
    position: relative;
    background: #f4f5f6;
    .phone_introduce_first {
      font-size: 32px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #080808;
      line-height: 44px;
      margin-top: 60px;
    }
    .phone_introduce_second {
      font-size: 20px;
      font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #080808;
      line-height: 28px;
      margin-top: 8px;
    }
    .phone_introduce_indext {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 10;
    }
    .phone_introduce_Img {
      margin-top: 28px;
      width: 427px;
      height: 888px;
      background: #11141a;
      border-radius: 51px;
      border: 4px solid #95a1a9;
      img {
        width: 100%;
      }
    }
    .phone_introduce_icon {
      width: 80px;
      height: 80px;
      background: #ffffff;
      border-radius: 18px;
      margin: 30px auto 0;
      img {
        width: 100%;
      }
    }
    .phone_introduce_download {
      margin: 46px auto 0;
      width: 262px;
      height: 48px;
      border: 1px solid #000000;
      font-size: 24px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #000000;
      line-height: 48px;
      letter-spacing: 1px;
    }
    .phone_introduce_mask {
      width: 100%;
      height: 846px;
      background: #eaedf0;
      position: absolute;
      bottom: 0;
    }
    .phone_introduce_second_martop {
      margin-top: 5px;
    }
  }
  .cars {
    font-size: 36px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #505050;
    line-height: 36px;
    padding-top: 112px;
    padding-left: 52px;
    padding-bottom: 48px;
    background: #e0e1e2;
    text-align: left;
  }
  .carsModel {
    height: 750px;
    background: #e0e1e2;
    text-align: left;
    overflow: hidden;
    .modelContainer {
      .carName {
        width: 99px;
        height: 44px;
        padding-top: 40px;
        padding-left: 52px;
        img {
          height: 100%;
        }
      }
      .desc {
        font-size: 28px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #505050;
        line-height: 28px;
        margin-top: 20px;
        padding-left: 52px;
      }
      .comprehensive {
        margin-top: 28px;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #505050;
        line-height: 24px;
        padding-left: 52px;
      }
      .price {
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #505050;
        line-height: 24px;
        padding-left: 52px;
        padding-top: 8px;
      }
      .carImg {
        margin-top: 116px;
        padding-left: 52px;
        padding-right: 38px;
        width: 660px;
        img {
          width: 100%;
        }
      }
    }
  }
  .experience {
    width: 100%;
    height: 950px;
    background-position: center;
    background-size: cover;
    text-align: center;
    overflow: hidden;
    position: relative;
    .experienceCon {
      position: absolute;
      z-index: 9;
      background: rgba(0, 0, 0, 0.6);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .experienceImg {
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .experienceDesc {
      font-size: 28px;
      font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #e0e1e2;
      line-height: 40px;
      margin-top: 150px;
      transform: scale(0.5);
    }
    .experienceTitle {
      font-size: 36px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #e0e1e2;
      line-height: 50px;
    }
    .experienceBtn {
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      .testBtn {
        margin-top: 430px;
        width: 310px;
        height: 60px;
        background: #ffffff;
        font-size: 24px;
        font-weight: normal;
        color: #383838;
        line-height: 60px;
        margin-left: 220px;
        border: 1px solid #ffffff;
      }
      .testBtnEn {
        margin-top: 528px;
        width: 310px;
        height: 60px;
        background: #ffffff;
        font-size: 24px;
        font-weight: normal;
        color: #383838;
        line-height: 60px;
        margin-left: 220px;
        border: 1px solid #ffffff;
      }
      .netWorkBtn {
        width: 310px;
        height: 60px;
        border: 1px solid #ffffff;
        font-size: 24px;
        font-weight: normal;
        color: #ffffff;
        line-height: 60px;
        margin-left: 220px;
        margin-top: 20px;
      }
    }
  }
}
</style>
<style>
.phone_swiper .my-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffffff;
  display: block;
  margin: 0 20px;
}
.phone_swiper .my-bullet-active {
  display: block;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 7px;
}
.phone_swiper .swiper-pagination-bullets {
  bottom: 104px !important;
}
.experienceImg .swiper-container .swiper-wrapper {
  -webkit-transition-timing-function: linear; /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}
</style>
