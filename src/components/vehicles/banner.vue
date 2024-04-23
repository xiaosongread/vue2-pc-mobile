<template>
  <div :class="[`banner-${platform}`]" v-lazy:background-image="data.bg">
    <div class="slogan">
      <div class="vehicle-name">
        <img v-lazy="vehicleName" :alt="`威马汽车${btnData[0].vehicle}`" />
      </div>
      <slot name="slogan"></slot>
      <slot name="btn">
        <div class="btn">
          <div class="fix-service" v-show="serviceStatus">
            <img :src="service" width="100%" alt="在线咨询" />
          </div>
          <template v-for="(item, index) in btnData">
            <div v-if="item.show.includes(lang)" :class="[`common ${lang === 'zh' ? 'btn-zh' : 'btn-en'} ${item.class}`]" :key="index" @click="onAction(item)" @mouseenter="omMouseMove(item)" @mouseleave="omMouseMove(item)">
              {{ item.name }}
            </div>
          </template>
        </div>
      </slot>
    </div>
    <div class="desc" v-if="data.desc" :style="{ width: w }">
      <div class="item" v-for="(item, index) in data.desc" :key="index">
        <p class="top" v-html="item.headline"></p>
        <p class="bottom" v-html="item.desc"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    platform: {
      type: String,
      default: "pc"
    },
    vehicleName: {
      require: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  name: "Banner",
  computed: {
    w: function() {
      if (this.data.desc) {
        return this.data.desc.length === 3 ? "59.79%" : "79.38%";
      }
    }
  },
  data() {
    return {
      btnData: [
        {
          name: "在线咨询",
          vehicle: "",
          type: "",
          class: "btn-white"
        }
      ],
      service: `${this.Resource}M7/scanQrcode.png`,
      serviceStatus: false
    };
  },
  created() {
    if (this.data.btnData) {
      Object.assign(this.btnData, this.data.btnData);
    }
  },
  methods: {
    omMouseMove(params) {
      if (params.type === "service") {
        this.serviceStatus = !this.serviceStatus;
      }
    },
    onAction(params) {
      console.log("参数", params);
      if (params.type === "service") {
        this.serviceStatus = !this.serviceStatus;
        window.scrollTo({
          top: document.getElementById("test-drive-spa").offsetTop + 20,
          behavior: "smooth"
        });
      } else if (params.type === "drive") {
        window.scrollTo({
          top: document.getElementById("test-drive-spa").offsetTop + 20,
          behavior: "smooth"
        });
      } else if (params.type === "sheet") {
        this.$router.push({
          path: "/Configuration",
          query: {
            type: params.vehicle
          }
        });
      } else if (params.type === "link") {
        // console.log('是什么')
        window.open("https://www.wm-imotor.com/statistics/wxscheme/wxJumpMiddlePage.html?id=28&cfgId=421&type=1");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-pc {
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: 50%;
  position: relative;
  z-index: 1;
  overflow: auto; /* 解决BFC*/
  .slogan {
    position: absolute;
    z-index: 2;
    top: 300px;
    left: 122px;
    /*left: 115px;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .vehicle-name {
      width: auto;
      height: 65px;
      text-align: left;
      img {
        width: auto;
        height: 100%;
        object-fit: cover;
      }
    }
    .btn {
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-size: 24px;
      position: relative;
      z-index: 1;
      .fix-service {
        @media screen and (min-width: 1024px) {
          width: 498px;
          height: 259px;
          top: -110px;
        }
        @media screen and (max-width: 1024px) {
          width: 518px;
          height: 269px;
          top: -115px;
        }
        position: absolute;
        left: calc(100% + 16px);
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        box-sizing: border-box;
        img{
          width: 100%;
          object-fit: cover;
        }
        //&::before {
        //  content: "";
        //  position: absolute;
        //  left: -16px;
        //  top: 50%;
        //  transform: translateY(-50%);
        //  border-top: 8px solid transparent;
        //  border-right: 8px solid white;
        //  border-bottom: 8px solid transparent;
        //  border-left: 8px solid transparent;
        //}
      }
      .common {
        width: 310px;
        height: 62px;
        @include center;
        box-sizing: border-box;
        cursor: pointer;
      }
      &-zh {
        //padding: 0 108px;
      }
      &-en {
        //padding: 0 108px;
      }
      &-white {
        color: #000000;
        background: #ffffff;
        transition: 0.5s;
        &:hover {
          transition: 0.5s;
          background: #d8d8d8;
        }
      }
      &-black {
        color: #ffffff;
        background: #333333;
      }
      &-transparent-black {
        border: 1px solid #333333;
        color: #333333;
      }
      &-transparent {
        border: 1px solid #ffffff;
        color: #ffffff;
        transition: 0.5s;
        &:hover {
          transition: 0.5s;
          background: rgba(216, 216, 216, 0.2);
        }
      }
      &-last {
        margin-top: 20px;
      }
    }
  }
  .desc {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    background: #000000;
    opacity: 0.4;
    color: #ffffff;
    padding: 0 96px;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    .item {
      text-align: center;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      .top {
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        line-height: 28px;
      }
      .bottom {
        padding-top: 2px;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }
      @media screen and (max-width: 1024px){
        .top {
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          line-height: 28px;
        }
        .bottom {
          padding-top: 2px;
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
          line-height: 28px;
          white-space: nowrap;
          zoom: 0.75;
        }
      }
    }
  }
}
.banner-mb {
  width: 100%;
  height: 1448px;
  zoom: 1;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  position: relative;
  .slogan {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 152px;
    padding-left: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .vehicle-name {
      img {
        width: auto;
        height: 52px;
      }
    }
    .btn {
      position: absolute;
      z-index: 2;
      bottom: 208px;
      left: 50%;
      transform: translateX(-50%);
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-size: 24px;
      .common {
        height: 62px;
        @include center;
        box-sizing: border-box;
        cursor: pointer;
        white-space: nowrap;
      }
      &-zh {
        padding: 0 106px;
      }
      &-en {
        padding: 0 92px;
      }
      &-white {
        color: #000000;
        background: #ffffff;
      }
      &-transparent {
        border: 1px solid #ffffff;
        color: #ffffff;
      }
      &-last {
        margin-top: 20px;
      }
    }
  }
}
</style>
