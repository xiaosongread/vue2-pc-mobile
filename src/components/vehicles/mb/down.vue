<template>
  <div class="fBox">
    <div class="down">
      <img :src="url" />
      <p class="downTit">威马智行App<br />因车而聚</p>
      <p class="downDes">看车/订车/用车<br />尽在威马智行App</p>
      <div class="downBtn" @click="downloads">即刻下载</div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";
import Footer from "@/components/footer/w6Footer";
export default {
  name: "light32Page",
  components: {
    Footer
  },
  props: {
    url: {
      type: String,
      default: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/down.jpg"
    }
  },
  data() {
    return {
      swiperOption32: {
        direction: 'vertical',
        nested: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: { el: '.swiper-scrollbar' }
      },
      swiperOptionLight32Page1: {
        direction: "horizontal",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        height: window.innerHeight, // 高度设置，占满设备高度
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-pagination-light" //与slot="pagination"处 class 一致
        },
        on: {
          slideChange: function() {}
        }
      },
      swiperOptionMusicPage: {
        direction: "horizontal",
        followFinger: false, // 跟随手指。如果禁用，当你按住手指时slide不会移动，只有当你释放时slide才会切换。
        shortSwipes: true, // 默认允许短滑动。设置为 false 时，只能长滑动，进行快速或短距离的滑动无法触发切换。
        longSwipesMs: 1000, //长短滑动临界时间
        touchReleaseOnEdges: true, // 当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）。
        height: window.innerHeight, // 高度设置，占满设备高度
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-pagination-music" //与slot="pagination"处 class 一致
        },
        on: {
          slideChange: function() {}
        }
      }
    };
  },
  computed: {
    swiper: function() {
      return this.$refs.mySwiper.$swiper1;
    },
    swiper1: function() {
      return this.$refs.mySwiperMusicPage.$swiper1;
    }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {
    downloads() {
      var ua = ua || navigator.userAgent.toLowerCase();
      var u = navigator.userAgent;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        this.$message({
          offset: "60",
          message: "请在浏览器中打开下载",
          type: "error"
        });
      } else {
        if (isiOS) {
          window.location.href = "https://apps.apple.com/cn/app/id1353267762";
        } else if (isAndroid) {
          window.location.href =
            "https://nextapppic.wm-imotor.com/apk/app-weimazhixing.apk";
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.fBox{
  width: 100%;
  height: auto;
  background: #fff;
  position: relative;
  overflow-y: scroll;
}
.down {
  position: relative;
  font-family: AlibabaPuHuiTiR;
  img {
    width: 100%;
    display: block;
  }
  .downTit {
    width: 100%;
    text-align: center;
    font-size: 48px;
    font-family: AlibabaPuHuiTiR;
    color: #48484A;
    line-height: 60px;
    position: absolute;
    top: 171px;
  }
  .downDes {
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #C7C7CC;
    line-height: 33px;
    position: absolute;
    top: 305px;
  }
  .downBtn {
    width: 252px;
    line-height: 52px;
    background: #F2F2F7;
    border-radius: 26px;
    border: 2px solid #30A680;
    font-size: 24px;
    text-align: center;
    font-family: AlibabaPuHuiTiR;
    color: #30A680;
    position: absolute;
    bottom: 121px;
    left: 50%;
    margin-left: -126px;
  }
}
</style>
