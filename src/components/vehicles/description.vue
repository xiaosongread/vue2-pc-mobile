<template>
  <div :class="[`wow slideLeft description-${platform}`]">
    <div
      :class="[`item-${platform}`]"
      v-for="(item, index) in data.desc"
      :key="index"
      :style="{ backgroundImage: `url(${item.bg})` }"
    >
      <slot name="custom"></slot>
      <div :class="[`desc-${platform}`]" v-if="data.show">
        <p :class="[`wow pulse title-${platform}`]" v-html="item.title"></p>
        <p :class="[`details-${platform}`]" v-if="item.details" v-html="item.details"></p>
        <div :class="[
            `more-${platform} ${item.details !== undefined ? 'have' : 'none'}`
          ]"
          @click="openDialog(item)"
        >
          {{ data.btn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { WOW } from "wowjs";

export default {
  name: "Description",
  props: {
    platform: {
      type: String,
      default: "pc"
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      have: "have",
      none: "none"
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      const wow = new WOW({
        offset: 10,
        live: false
      })
      wow.init()
    })
  },
  methods: {
    ...mapActions(["update_dialog_status", "update_current_dialog"]),
    openDialog(e) {
      // console.log('是否执行')
      this.update_current_dialog({ currentDialog: e.key });
      this.update_dialog_status({ dialogStatus: true });
    }
  }
};
</script>

<style lang="scss" scoped>
.description-pc {
  .item-pc {
    width: 100%;
    height: 1080px;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 50%;
    background-attachment: fixed;
    position: relative;
    z-index: 1;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #ffffff;
    .desc-pc {
      position: absolute;
      left: 122px;
      bottom: 134px;
      z-index: 2;
      .title-pc {
        font-size: 41px;
        font-weight: 400;
        line-height: 49px;
        text-align: left;
      }
      .details-pc {
        height: 56px;
        font-size: 40px;
        font-weight: 400;
        line-height: 56px;
        padding: 4px 0 31px 0;
        text-align: left;
      }
      .more-pc {
        @include center;
        width: 310px;
        height: 62px;
        background: #ffffff;
        font-size: 24px;
        font-weight: normal;
        color: #383838;
        line-height: 24px;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          background: #d8d8d8;
          transition: 0.5s;
        }
      }
      .none {
        margin-top: 50px;
      }
    }
  }
}
.description-mb {
  .item-mb {
    width: 100%;
    height: 420px;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 50%;
    //background-attachment: fixed;
    position: relative;
    z-index: 1;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #ffffff;
    .desc-mb {
      position: absolute;
      left: 44px;
      bottom: 38px;
      z-index: 2;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      .title-mb {
        height: 36px;
        font-size: 36px;
        color: #ffffff;
        line-height: 36px;
        text-align: left;
      }
      .more-mb {
        @include center;
        width: 176px;
        height: 40px;
        background: #ffffff;
        font-size: 20px;
        color: #666666;
        margin-top: 28px;
      }
    }
  }
}
</style>
