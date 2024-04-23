<template>
  <div :class="[`inside inside-${platform}`]">
    <div
      v-for="(item, index) in data.list"
      :key="index"
      :class="[`item ${item.padding ? 'item-padding' : ''}`]"
    >
      <img :src="item.bg" :alt="item.desc | removeTag" data-test="test" />
      <div class="content">
        <div
          :class="[`content-title`, { 'content-titleEn': lang === 'en' }]"
          :style="{ color: item.titleColor }"
          v-html="item.title"
        ></div>
        <div
          class="content-desc"
          :style="{ color: item.descColor }"
          v-if="item.desc"
          v-html="item.desc"
        ></div>
        <div class="tips" v-if="item.tips" v-html="item.tips"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  /**
    data: {
      list: [
        {
          titleColor: 'red', // 标题颜色
          descColor: 'blue', // 描述颜色
          padding: true,  // 是否有底部83px内边距， 如果是最后一个元素则需要，否则可不传
          title: `标题`,
          desc: `描述`,
          bg: `${this.Resource}文件夹名/文件名` // 背景图片
        }
      ]
    }
   */
  name: "Inside",
  props: {
    platform: {
      type: String,
      require: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    removeTag: val => {
      return val.replace(/\s+/g, "").replace(/<.*?>/g, "");
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      const wow = new WOW({
        offset: 0,
        live: false
      });
      wow.init();
    });
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  .inside {
    &-pc {
      .item {
        width: 100%;
        background-size: 100%;
        position: relative;
        z-index: 1;
        &-padding {
          &::after {
            /* 最底部83像素边距*/
            content: "";
            width: 100%;
            height: 83px;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
        img {
          width: 100%;
          height: auto;
        }
        .content {
          position: absolute;
          z-index: 2;
          left: 60px;
          bottom: 100px;
          //max-width: 419px;
          color: #ffffff;
          text-align: left;
          &-title {
            font-size: 24px;
            line-height: 33px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          }
          &-titleEn {
            font-size: 32px;
            line-height: 32px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          }
          &-desc {
            font-size: 18px;
            line-height: 24px;
            font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
            font-weight: 300;
            padding-top: 35px;
          }
          .tips {
            font-size: 16px;
            font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
            font-weight: normal;
            color: #ffffff;
            line-height: 22px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .inside {
    &-pc {
      .item {
        width: 100%;
        background-size: 100%;
        position: relative;
        z-index: 1;
        &-padding {
          &::after {
            /* 最底部83像素边距*/
            content: "";
            width: 100%;
            height: 83px;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
        img {
          width: 100%;
          height: auto;
        }
        .content {
          position: absolute;
          z-index: 2;
          left: 60px;
          bottom: 100px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          color: #ffffff;
          text-align: left;
          &-title {
            font-size: 42px;
            line-height: 50px;
          }
          &-desc {
            font-size: 18px;
            line-height: 32px;
            font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
            font-weight: 300;
            padding-top: 40px;
            //max-width: 225PX;
          }
          .tips {
            font-size: 16px;
            font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
