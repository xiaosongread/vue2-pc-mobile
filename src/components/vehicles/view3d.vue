<template>
  <div :class="[`view-3d-${platform}`]">
    <img :class="[`name name-${vehicle}`]" v-lazy="data.name" :alt='`威马${vehicle}`' />
    <img :class="[`img img-${vehicle}`]" v-lazy="carImg" alt="全景看车" />
    <div :class="`view-3d-${platform}-see`" @click="onView3D(data.key)">
      {{ data.btn }}
    </div>
    <div :class="[`view-3d-${platform}-parameter`]" v-if="platform === 'pc'">
      <div
        :class="[`item-${platform}`]"
        v-for="(item, index) in data.params"
        :key="index"
      >
        <div :class="[`name-${platform}`]" v-html="item.name"></div>
        <div :class="[`detail-${platform}`]">
          <div :class="[`number-${platform}`]">{{ item.number }}</div>
          <template>
            <div :class="[`unit-${platform}`]" v-if="item.unit">
              {{ item.unit }}
            </div>
            <div :class="[`unit-multi-${platform}`]" v-if="item.unitMulti">
              <div>{{ item.unitMulti[0] }}</div>
              <div>{{ item.unitMulti[1] }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div :class="[`appearance-${platform}`]">
      <div v-for="(item, index) in data.appearance" :key="index" class="item" @click="onCurrentAppearance(index)">
        <div class="text"><p v-show="current === index" v-html="item.name"></p></div>
        <div class="color"><div :style="{'background-color': item.color}" :class="[current === index ? 'active': 'default']"></div></div>
      </div>
    </div>
    <div class="parameter" v-if="platform === 'mb'">
      <template v-if="lang === 'zh'">
        <img
          v-for="(item, index) in data.params.zh"
          v-lazy="item"
          :key="index"
          alt=""
        />
      </template>
      <template v-if="lang === 'en'">
        <img
          v-for="(item, index) in data.params.en"
          v-lazy="item"
          :key="index"
          alt=""
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "view3d",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    platform: {
      type: String,
      default: "pc"
    },
    vehicle: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      current: 0
    };
  },
  computed: {
    carImg: function() {
      return `${this.Resource}${this.vehicle}/${this.platform}/${this.current}.png`
    }
  },
  created() {},
  methods: {
    onView3D(key) {
      console.log("全景看车", key);
      window.open(key,'_self');
    },
    onCurrentAppearance(index) {
      this.current = index
    }
  }
};
</script>

<style lang="scss" scoped>
.view-3d-pc {
  width: 100%;
  height: 1080px;
  background-color: #e9e9e9;
  position: relative;
  z-index: 1;
  .name {
    position: absolute;
    top: 170px;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    &-EX5-Z{
      width: 1522px;
    }
    &-W6 {
      width: 1254px;
    }
  }
  .img {
    position: absolute;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    &-EX5-Z {
      width: 968px;
      top: 308px;
    }
    &-W6 {
      width: 846px;
      top: 336px;
    }
  }
  &-see {
    background: #35a97d;
    @include center;
    padding: 0 110px;
    height: 62px;
    position: absolute;
    top: 770px;
    left: 50%;
    z-index: 4;
    transform: translateX(-50%);
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #e9e9e9;
    line-height: 24px;
    cursor: pointer;
  }
  &-parameter {
    width: 100%;
    position: absolute;
    z-index: 5;
    left: 0;
    bottom: 94px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 0 122px;
    .item-pc {
      .name-pc {
        font-size: 12px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #333333;
        line-height: 17px;
        text-align: left;
        padding-left: 4px;
      }
      .detail-pc {
        display: flex;
        flex-direction: row;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #333333;
        align-items: flex-end;
        .number-pc {
          height: 65px;
          font-size: 65px;
          line-height: 65px;
        }
        .unit-pc {
          height: 29px;
          font-size: 21px;
          line-height: 29px;
          padding-bottom: 5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .unit-multi-pc {
          display: flex;
          flex-direction: column;
          text-align: left;
          div:first-child {
            font-size: 21px;
            line-height: 21px;
          }
          div:last-child {
            font-size: 12px;
            line-height: 17px;
          }
        }
      }
    }
  }
  .appearance-pc{
    position: absolute;
    top: 282px;
    right: 165px;
    z-index: 99999999;
    .item{
      //border: solid 1px red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      &:nth-child(n+2){
        margin-top: 16.5px;
      }
      .text{
        font-size: 15px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: 400;
        color: #8B8B8B;
        line-height: 21px;
        margin-right: 16px;
        p{
          white-space: nowrap;
        }
      }
      .color{
        @include center;
        width: 34px;
        height: 34px;
        box-sizing: border-box;
        .default{
          width: 17px;
          height: 17px;
          box-sizing: border-box;
          border: 2px solid #FFFFFF;
          border-radius: 50%;
          transition: 0.3s;
        }
        .active{
          width: 34px;
          height: 34px;
          box-sizing: border-box;
          border: 2px solid #FFFFFF;
          border-radius: 50%;
          transition: 0.3s;
        }
      }
    }
  }
}

.view-3d-mb {
  width: 100%;
  height: 878px;
  background-color: #e9e9e9;
  position: relative;
  z-index: 1;
  .name {
    position: absolute;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    &-EX5-Z {
      width: 704px;
      top: 126px;
    }
    &-W6 {
      width: 638px;
      top: 136px;
    }
  }
  .img {
    position: absolute;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    &-EX5-Z {
      width: 488px;
      top: 206px;
    }
    &-W6 {
      width: 422px;
      top: 226px;
    }
  }
  &-see {
    @include center;
    width: 309px;
    height: 62px;
    background: #35a97d;
    position: absolute;
    bottom: 102px;
    left: 50%;
    z-index: 4;
    transform: translateX(-50%);
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #e9e9e9;
    line-height: 24px;
    cursor: pointer;
  }
  .parameter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 44px;
    position: absolute;
    top: 472px;
    z-index: 2;
    img {
      width: auto;
      height: 62px;
    }
  }
  .appearance-mb{
    position: absolute;
    //border: solid 1px red;
    width: 100%;
    left: 0;
    top: 592px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 99999999;
    .item{
      width: auto;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      cursor: pointer;
      position: relative;
      &:nth-child(n+2){
        margin-left: 40px;
      }
      .text{
        font-size: 20px;
        zoom: 0.5;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: 400;
        color: #8B8B8B;
        line-height: 20px;
        //margin-top: 14px;
        position: absolute;
        top: calc(100% + 14px);
        white-space: nowrap;
      }
      .color{
        width: 28px;
        height: 28px;
        //border: solid 1px red;
        @include center;
        .default{
          width: 12px;
          height: 12px;
          border: 2px solid #FFFFFF;
          border-radius: 50%;
          transition: 0.5s;
          border-radius: 50%;
        }
        .active{
          transition: 0.5s;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
        }
      }
    }
  }
}
</style>
