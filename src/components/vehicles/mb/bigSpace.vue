<template>
  <div
    id="bigSpacePage"
    :class="[
      'bigSpacePageBox',
      finshBigSpaceFirst === 1
        ? 'bigSpaceFirstFinsh'
        : finshBigSpaceFirst === 2
        ? 'bigSpaceFirstFinshHt'
        : 'bigSpaceFirstFinshInit'
    ]"
  >
    <div class="bigSpacePage_text bigSpacePage_text_one">
      <p class="bigSpacePage_text_tit">超级乘坐空间</p>
      <p class="bigSpacePage_text_tit1">宽敞的乘坐空间</p>
      <p class="bigSpacePage_text_cons">
        针对智能电动车开发的整车架构<br />为乘客提供充足的前后排空间
      </p>
    </div>
    <div class="bigSpacePage_text bigSpacePage_text_two">
      <p class="bigSpacePage_text_tit">超级乘坐空间</p>
      <p class="bigSpacePage_text_tit1">丰富的储物空间</p>
      <p class="bigSpacePage_text_cons">
        多达二十余处储物空间<br />车内物品收纳井井有条
      </p>
    </div>
    <img
      :class="['bigSpacePageBg', finshBigSpaceTwo ? 'bigSpaceTwo' : '']"
      :style="{ transform: `translateX(${transFormWSet}px)` }"
      :src="data.src"
    />
  </div>
</template>

<script>
// import TypeBanner from "@/components/vehicles/banner";
// import { mapState } from "vuex";

export default {
  name: "bigSpacePage",
  components: {},
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    finshBigSpaceFirst: {
      type: Boolean,
      default: false
    },
    finshBigSpaceTwo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      browserHeight: 0,
      renduWidth: 0,
      renduHeight: 0,
      transFormW: 0,
      transFormWSet: 0
    };
  },
  computed: {},
  mounted() {
    this.renduHeight = document.getElementById("bigSpacePage").offsetHeight;
    const screenWidth = document.getElementById("bigSpacePage").offsetWidth;
    this.renduWidth = Math.floor(
      (this.data.width * this.renduHeight) / this.data.height
    );
    this.transFormW = this.renduWidth - screenWidth;
    console.log('移动的距离', this.transFormW)
  },
  created() {
    // this.browserHeight =
    //   window.innerHeight ||
    //   document.documentElement.clientHeight ||
    //   document.body.clientHeight;
    // this.renduHeight = document.getElementById("bigSpacePage").offsetHeight;
    // console.log('渲染高度', this.renduHeight)
  },
  watch: {
    finshBigSpaceTwo(v) {
      if (v) {
        this.transFormWSet = this.transFormW;
      } else {
        this.transFormWSet = 0;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@keyframes opacityHidden {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes opacityShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#bigSpacePage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &.bigSpaceFirstFinsh {
    .bigSpacePage_text_one {
      animation: opacityHidden 1s forwards;
    }
    .bigSpacePage_text_two {
      animation: opacityShow 1s forwards 1s;
    }
  }
  &.bigSpaceFirstFinshHt {
    .bigSpacePage_text_one {
      animation: opacityShow 1s forwards 1s;
    }
    .bigSpacePage_text_two {
      animation: opacityHidden 1s forwards;
    }
  }
  &.bigSpaceFirstFinshInit {
    .bigSpacePage_text_one {
      opacity: 1;
    }
    .bigSpacePage_text_two {
      opacity: 0;
    }
  }
  .bigSpacePage_text_one {
    opacity: 0;
    z-index: 1;
  }
  .bigSpacePage_text_two {
    opacity: 0;
    z-index: 2;
  }
  .bigSpacePage_text {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    .bigSpacePage_text_tit {
      width: 100%;
      text-align: center;
      font-size: 42px;
      font-family: AlibabaPuHuiTiR;
      position: absolute;
      color: #757575;
      top: 259px;
    }
    .bigSpacePage_text_tit1 {
      width: 100%;
      text-align: center;
      font-size: 36px;
      font-family: AlibabaPuHuiTiR;
      color: #F2F2F7;
      line-height: 50px;
      position: absolute;
      bottom: 240px;
    }
    .bigSpacePage_text_cons {
      width: 100%;
      text-align: center;
      font-size: 32px;
      font-family: AlibabaPuHuiTi-Light, AlibabaPuHuiTi;
      font-weight: 300;
      color: #F2F2F7;
      line-height: 44px;
      position: absolute;
      bottom: 135px;
    }
  }
  .bigSpacePageBg {
    width: auto;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 1s linear 2s;
    // &.bigSpaceTwo {
    //   // transform: translateX(725px);
    //   transition: all 1s linear 2s;
    // }
  }
}
</style>
