<template>
  <div :class="[`vehicles-container-${platform}`]">
    <div :class="[`dot-${platform}`]"></div>
    <p :class="[`name-${platform}`]">{{vehiclesData.name}}</p>
    <div :class="[`desc-${platform}`]">
      <p v-for="(item,index) in vehiclesData.desc" :key="index">{{item}}</p>
    </div>
    <div :class="[`circle-${platform}`]"></div>
    <img :class="[`model-${platform}`]" v-lazy="vehiclesData.img" alt="">
    <div :class="[`video-container-${platform}`]">
      <div :class="[`name-${platform}`]">M7</div>
      <div :class="[`desc-${platform}`]">威马首款智能轿车</div>
      <video muted @mouseenter="onMouseInter(vehiclesData.ref)" @mouseleave="onMouseLeave" controls :ref="vehiclesData.ref" :class="[`video-container-video-${platform}`]" width="100%" height="100%">
        <source :src="vehiclesData.video">
        您的浏览器不支持video标签
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    platform: { /* 平台类别，移动端传mb,pc端传pc*/
      type: String,
      require: true
    },
    vehiclesData: { /* 车型参数，可传递数组, 结构如下*/
      // [
      //     {
      //       name: "W6",
      //       desc: ["超算力可进化智能纯电SUV", "￥16.98万起"],
      //       img: require("@/static/W6.png"),
      //       video: require("@/static/a.mp4"),
      //       poster: "",
          // }
      // ]
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.video = this.$refs[this.vehiclesData.ref];
  },
  methods: {
    onMouseInter() {
      let video = this.$refs[this.vehiclesData.ref];
      video.play();
    },
    onMouseLeave() {
      let video = this.$refs[this.vehiclesData.ref];
      video.pause();
    }
  }
}
</script>

<style lang="scss" scoped>
.vehicles-container-pc{
  width: 706px;
  height: 791px;
  background: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  color: #333333;
  overflow: hidden;
  .dot-pc{
    width: 16px;
    height: 16px;
    background: #31BFA0;
    position: absolute;
    z-index: 2;
    top: 97px;
    left: 50px;
  }
  .name-pc{
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    position: absolute;
    z-index: 2;
    top: 155px;
    left: 50px;
  }
  .desc-pc{
    position: absolute;
    z-index: 2;
    top: 228px;
    left: 50px;
    font-size: 20px;
    text-align: left;
    line-height: 34px;
  }
  .circle-pc{
    width: 634px;
    height: 634px;
    background: rgba(49, 191, 160, 0.7);
    opacity: 0.09;
    position: absolute;
    z-index: 2;
    top: 384px;
    left: 173px;
    border-radius: 50%;
  }
  .model-pc{
    width: 637px;
    height: auto;
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
  }
  &:hover .video-container-pc{
    width: 706px;
    height: 791px;
    //visibility: visible;
    opacity: 1;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124,124,124,.5);
    transform: scale(1);
  }
  .video-container-pc{
    width: 706px;
    height: 791px;
    //visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124,124,124,.5);
    transition: 0.3s;
    transform: scale(2);
    .name-pc{
      font-size: 50px;
      line-height: 69px;
      color: #ffffff;
      position: absolute;
      top: 319px;
      left: 50%;
      transform: translateX(-50%);
    }
    .desc-pc{
      font-size: 20px;
      line-height: 27px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 400px;
      color: #FFFFFF;
      opacity: 0.5;
    }
    &-video-pc{
      width: 100%;
      object-fit: cover;
    }
  }
}

.vehicles-container-mb{
  width: 686px;
  height: 534px;
  background: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  color: #333333;
  overflow: hidden;
  margin-top: 34px; /* 移动端*/
  .dot-mb{
    width: 17px;
    height: 17px;
    background: #31BFA0;
    position: absolute;
    z-index: 2;
    top: 46px;
    left: 54px;
  }
  .name-mb{
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    position: absolute;
    z-index: 2;
    top: 82px;
    left: 48px;
  }
  .desc-mb{
    position: absolute;
    z-index: 2;
    top: 156px;
    left: 48px;
    font-size: 20px;
    text-align: left;
    line-height: 34px;
  }
  .circle-mb{
    width: 634px;
    height: 634px;
    background: rgba(49, 191, 160, 0.7);
    opacity: 0.09;
    position: absolute;
    z-index: 2;
    top: 92px;
    left: 188px;
    border-radius: 50%;
  }
  .model-mb{
    width: 556px;
    height: auto;
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
  }
  &:hover .video-container-mb{
    width: 686px;
    height: 534px;
    opacity: 1;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124,124,124,.5);
    transform: scale(1);
  }
  .video-container-mb{
    width: 686px;
    height: 534px;
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124,124,124,.5);
    transition: 0.3s;
    transform: scale(2);
    .name-mb{
      font-size: 50px;
      line-height: 69px;
      color: #ffffff;
      position: absolute;
      top: 216px;
      left: 50%;
      transform: translateX(-50%);
    }
    .desc-mb{
      font-size: 20px;
      line-height: 27px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 282px;
      color: #FFFFFF;
      opacity: 0.5;
    }
    &-video-mb{
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
