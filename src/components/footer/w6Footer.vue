<template>
  <div>
    <!-- <div class="downloadNow" v-show="lang === 'zh'">
      <div class="downloadNowTitle">因车而聚</div>
      <div>
        <img class="wmlogo" src="@/static/phoneImg/wmlogo.png" alt="" />
      </div>
      <div class="downloadNowDesc">看车、订车、用车</div>
      <div class="downloadNowDesc">尽在威马智行App</div>
      <div class="downloadNowBtn" @click="downloads">即刻下载</div>
    </div> -->
    <div class="mb">
      <div class="mb-1">
        <p class="mb-1-tit">智敬每个你</p>
        <p class="mb-1-des">Serving You Through Intelligent Means</p>
        <div class="bar"></div>
      </div>
      <div class="logo">
        <img @click="goHome" src="@/static/pc_logo.png" alt="" />
      </div>
      <div class="Copyright">
        Copyright© 2022 WM Motor All Rights Reserved
      </div>
      <div class="Copyright">
        威马汽车版权所有
      </div>
      <div class="icp icps">
        <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备 18006332号-6</a>
      </div>
      <div class="icp">
        <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011802004057" target="_blank">沪公网安备 31011802004057号</a>
      </div>
    </div>
    <top v-show="topFlag" />
    <div class="wxtip" id="JweixinTip">
      <img src="@/static/pc_logo.png" />
    </div>
  </div>
</template>

<script>
import top from "@/components/top";

export default {
  name: "mbMenu",
  components: {
    top
  },
  data() {
    return {
      topFlag: false
    };
  },
  computed: {
    languageIcon: function() {
      return localStorage.getItem("language") === "zh"
        ? require(`@/static/lg_pc_en.png`)
        : require(`@/static/lg_pc_zh.png`);
    },
    languageText: function() {
      return localStorage.getItem("language") === "zh" ? "EN" : "中文";
    }
  },
  created() {},
  watch: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 300) {
        this.topFlag = true;
      } else {
        this.topFlag = false;
      }
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
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
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.downloadNow {
  width: 100%;
  // height: 668px;
  padding: 70px 0 134px;
  background-color: #e0e1e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .downloadNowTitle {
    height: 50px;
    font-size: 36px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #505050;
    line-height: 50px;
    padding-top: 124px;
  }
  .wmlogo {
    width: 130px;
    height: 132px;
    margin-top: 46px;
    margin-bottom: 16px;
  }
  .downloadNowDesc {
    font-size: 16px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #505050;
    transform: scale(0.8);
  }
  .downloadNowBtn {
    margin: 70px auto 0;
    width: 310px;
    height: 60px;
    background: #30b489;
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #ffffff;
    line-height: 60px;
    // margin-left: 220px;
  }
}
.mb {
  width: 100vw;
  height: 1138px;
  background: #000000;
  overflow: hidden;
  .mb-1 {
    padding-top: 155px;
    .mb-1-tit{
      text-align: center;
      font-size: 36px;
      font-family: AlibabaPuHuiTiR;
      color: #E5E5EA;
      line-height: 50px;
    }
    .mb-1-des{
      text-align: center;
      font-size: 28px;
      font-family: AlibabaPuHuiTiR;
      color: #E5E5EA;
      line-height: 38px;
      margin-top: 17px;
    }
    .bar{
      width: 129px;
      height: 1px;
      background:#30B489;
      margin: 68px auto;
    }
  }
  .logo {
    margin-top: 164px;
    margin-bottom: 122px;
    img {
      width: 254px;
    }
  }
  .Copyright {
    font-size: 17px;
    line-height: 45px;
    font-family: Helvetica;
    color: #383838;
  }
  .icp {
    font-size: 17px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
    &.icps{
      margin-top: 26px;
    }
    a{
      color: #383838;
      text-decoration: none;
    }
  }
}

.wxtip {
  background: rgba(0, 0, 0, 0.8);
  text-align: right;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  display: none;
}
</style>
