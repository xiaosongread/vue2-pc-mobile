<template>
  <div class="wmVideo">
    <div class="wmVideo-fm">
      <p class="video-tit">SOA场景编程功能</p>
      <p class="video-cons">
        根据不同使用场景可自定义组合车辆功能，例如小憩模式、亲子模式，一键即可同时打开空调、调整座椅、播放音乐等，<br />
像搭积木一样自由组合200余项车辆功能，场景随心搭，365天不重样</p>
    </div>
    <div class="wmVideo-video">
      <video
        v-show="playTag"
        poster="https://cos-data.wm-imotor.com/website/W6/pc/w6/video.jpg"
        ref="vueMiniPlayer"
        width="100%"
        height="100%"
        controls="controls"
        x5-video-orientation="portraint"
        webkit-playsinline="true"
        playsinline="true"
        disablepictureinpicture=""
        class="videoC"
      >
        <source src="https://cos-data.wm-imotor.com/website/W6/pc/w6/wm.mp4" />
        您的浏览器不支持video标签
      </video>
      <div v-show="!playTag" class="video-fm-img">
        <div v-show="!playTag" class="video-play" @click="playFn">
          <div class="video-play-sj"></div>
        </div>
      </div>
      <!-- <vueMiniPlayer
        v-show="playTag"
        ref="vueMiniPlayer"
        :video="video"
        :mutex="true"
        @fullscreen="handleFullscreen"
      ></vueMiniPlayer> -->
    </div>
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
        // cover: "https://cos-data.wm-imotor.com/website/W6/pc/w6/video.jpg", // 视频海报
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
  display: flex;
  align-items: center;
  justify-content: center;
  .wmVideo-fm {
    width: 406px;
    height: auto;
    margin-right: 151px;
    .video-tit {
      font-size: 24px;
      font-family: AlibabaPuHuiTiR;
      color: #757575;
      line-height: 33px;
    }
    .video-cons {
      // width: 1346px;
      // height: 66px;
      font-size: 21px;
      font-family: AlibabaPuHuiTiL;
      color: #757575;
      line-height: 30px;
      letter-spacing: 1px;
      margin-top: 30px;
    }
  }
  .wmVideo-video {
    width: 1091px;
    height: 738px;
    position: relative;
    .video-fm-img {
      width: 100%;
      height: 100%;
      background: url("https://cos-data.wm-imotor.com/website/W6/pc/w6/video.jpg")
        no-repeat;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .video-play {
      width: 104px;
      height: 104px;
      border-radius: 154px;
      cursor: pointer;
      background: rgba($color: #2B2B2B, $alpha: 0.66);
      display: flex;
      align-items: center;
      justify-content: center;
      .video-play-sj {
        width: 0;
        height: 0;
        border-top: 24px solid transparent;
        border-left: 40px solid #D8D8D8;
        border-right: 24px solid transparent;
        border-bottom: 24px solid transparent;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        margin-left: -15px;
      }
    }
    .videoC{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
