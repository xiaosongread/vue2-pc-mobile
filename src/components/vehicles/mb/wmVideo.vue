<template>
  <div class="wmVideo">
    <p class="video-tit">SOA场景编程功能</p>
    <div v-if="!playTag" class="wmVideo-fm">
      <div class="video-play" @click="playFn">
        <div class="video-play-sj"></div>
      </div>
    </div>
    <div class="wmVideo-video">
      <!-- x5-video-player-type="h5-page"
        webkit-playsinline="true"
        playsinline="true"
        x5-playsinline="" -->
      <video
        v-show="playTag"
        poster="https://cos-data.wm-imotor.com/website/W6/pc/w6/video.jpg"
        ref="vueMiniPlayer"
        width="100%"
        height="100%"
        controls="controls"
        x5-video-orientation="portraint"
        disablepictureinpicture=""
        class="videoC"
        loop="true"
      >
        <source src="https://cos-data.wm-imotor.com/website/W6/pc/w6/wm.mp4" />
        您的浏览器不支持video标签
      </video>
      <!-- <vueMiniPlayer
        ref="vueMiniPlayer"
        :video="video"
        :mutex="true"
        @fullscreen="handleFullscreen"
      ></vueMiniPlayer> -->
    </div>
    <p class="video-cons video-cons-1">
      根据不同使用场景可自定义组合车<br/>辆功能:</p>
    <p class="video-cons">
      例如小憩模式、亲子模式，一键即可<br />同时打开空调、调整座椅、播放音乐<br />等，像搭积木一样自由组合200余项车<br />辆功能，场景随心搭，365天不重样</p>
  </div>
</template>

<script>
export default {
  name: "wmVideo",
  components: {},
  props: {},
  data() {
    return {
      playTag: false,
      video: {
        url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/wm.mp4",
        // cover: '', // 视频海报
        muted: false, // 是否静音播放
        loop: false, // 是否循环播放
        preload: "auto", // 视频预加载
        poster: "", // 原生视频默认海报暂不设置
        volume: 1, // 默认音量
        autoplay: false // 视频自动播放
      }
    };
  },
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer;
    }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {
    playFn() {
      this.playTag = true;
      this.$video.play();
    },
    pauseFn() {
      this.$video.pause();
    },
    handleFullscreen() {
      console.log("全屏");
    }
  }
};
</script>
<style lang="scss" scoped>
.wmVideo {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  font-family: AlibabaPuHuiTiR;
  .video-tit {
    width: 100%;
    text-align: center;
    font-size: 42px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 58px;
    position: absolute;
    top: 171px;
  }
  .wmVideo-fm {
    width: 100%;
    height: 421px;
    position: absolute;
    top: 50%;
    margin-top: -270px;
    left: 0;
    z-index: 2;
    background: #717375;
    .video-play {
      width: 154px;
      height: 154px;
      border: 3px solid #979797;
      border-radius: 154px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -77px;
      margin-left: -77px;
      .video-play-sj {
        width: 0;
        height: 0;
        border-top: 40px solid transparent;
        border-left: 60px solid #D8D8D8;
        border-right: 40px solid transparent;
        border-bottom: 40px solid transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -35px;
        margin-left: -25px;
      }
    }
  }
  .video-cons {
    width: 1306px;
    height: 66px;
    font-size: 32px;
    font-family: AlibabaPuHuiTiL;
    color: #F2F2F7;
    line-height: 44px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 221px;
    left: 50%;
    margin-left: -653px;
    &.video-cons-1{
      bottom: 326px;
    }
  }
  .wmVideo-video {
    width: 100%;
    height: 421px;
    position: absolute;
    top: 50%;
    margin-top: -270px;
    left: 0;
    z-index: 1;
    video.videoC {
      object-fit: cover;
    }
  }
}
</style>
