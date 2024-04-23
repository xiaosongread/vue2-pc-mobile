<template>
  <div class="appearancePage">
    <div class="appearancePage-img-1-box">
      <div
        :class="[
          'appearancePage-img-1',
          appearanceMove ? 'appearanceMove' : 'appearanceMoveHt'
        ]"
      >
        <div class="img-1" :style="{ backgroundImage: `url(${data.bg1})` }">
        </div>
        <p class="ttit">{{ data.text1 }}</p>
        <p class="btit">{{ data.text2 }}</p>
        <p class="bcons">{{ data.text3 }}</p>
      </div>
    </div>
    <div class="appearancePage-img-2-box">
      <div
        :class="[
          'appearancePage-img-2',
          appearanceMove ? 'appearanceMove' : 'appearanceMoveHt'
        ]"
      >
        <div class="img-2" :style="{ backgroundImage: `url(${data.bg2})` }">
        ></div>
        <p class="ttit">{{ data.text4 }}</p>
        <p class="btit">{{ data.text5 }}</p>
        <p class="bcons">
          {{ data.text6 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "firstPage",
  components: {},
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    appearanceMove: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  created() {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@keyframes appearanceMove {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
@keyframes appearanceMoveHt {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes appearanceWordOpacityShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appearanceWordOpacityShowHt {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes appearanceWordOpacityHidden {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes appearanceWordOpacityHiddenHt {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.appearancePage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .appearancePage-img-1-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    .appearancePage-img-1 {
      width: 100%;
      height: 100%;
      background-size: cover;
      // background-position: center;
      .ttit, .btit, .bcons {
        opacity: 0;
        animation: appearanceWordOpacityShowHt 2s forwards;
      }
      &.appearanceMove{
        .ttit, .btit, .bcons {
          animation: appearanceWordOpacityShow 2s forwards;
        }
      }
    }
  }
  .appearancePage-img-2-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    .appearancePage-img-2 {
      width: 100%;
      height: 100%;
      overflow: hidden;
      animation: appearanceMoveHt 2s forwards;
      // background-position: center;
      .ttit, .btit, .bcons {
        opacity: 1;
        animation: appearanceWordOpacityHiddenHt 2s forwards;
      }
      &.appearanceMove {
        animation: appearanceMove 2s forwards;
        .ttit, .btit, .bcons {
          animation: appearanceWordOpacityHidden 2s forwards;
        }
      }
    }
  }
  .img-1,
  .img-2 {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: 50%;
    position: relative;
  }
  .ttit {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 224px;
    font-size: 36px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 50px;
    opacity: 0;
  }
  .btit {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 93px;
    font-size: 24px;
    font-family: AlibabaPuHuiTiR;
    color: #E5E5EA;
    line-height: 33px;
    opacity: 0;
  }
  .bcons {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 49px;
    font-size: 24px;
    font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi, AlibabaPuHuiTiR;
    font-weight: 300;
    color: #F2F2F7;
    line-height: 33px;
    opacity: 0;
  }
}
</style>
