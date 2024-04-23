<template>
  <div :class="[`config-${platform}`]">
    <div class="price" v-lazy:background-image="config.priceBg">
      <div class="setting">
        <div class="details">
          <div>
            <span>{{ $t('EX5JKXPage.configData.live520[0]') }}</span>
            <span class="desc-en" v-if="lang === 'en' && platform === 'pc'">{{ $t('EX5JKXPage.configData.live520[1]') }}</span>
          </div>
          <span>{{ $t('EX5JKXPage.configData.desc520') }}</span>
        </div>
        <div class="details">
          <div>
            <span>{{ $t('EX5JKXPage.configData.live400[0]') }}</span>
            <span class="desc-en" v-if="lang === 'en' && platform === 'pc'">{{ $t('EX5JKXPage.configData.live400[1]') }}</span>
          </div>
          <span>{{ $t('EX5JKXPage.configData.desc400') }}</span>
        </div>
<!--        <div v-if="platform === 'pc'" :class="[`see see-${lang}`]" @click="onJump">{{ $t('EX5JKXPage.configData.btn') }}</div>-->
      </div>
    </div>
    <div class="common custom" v-lazy:background-image="config.customBg">
      <div class="slogan" v-html="$t('EX5JKXPage.configData.slogan')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "config",
  props: {
    platform: {
      type: String,
      default: 'pc'
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  data(){
    return{

    }
  },
  methods: {
    onJump() {
      this.$router.push({
        path: "/Configuration",
        query: {
          type: 'EX5-JKX'
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.config-pc{
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .price{
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 50%;
    position: relative;
    z-index: 1;
    height: 1080px;
    .setting{
      position: absolute;
      z-index: 2;
      left: 108px;
      bottom: 395px;
      text-align: left;
      .details{
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #FFFFFF;
        &:first-child{
          padding-bottom: 34px;
        }
        div{
          span:first-child{
            font-size: 50px;
          }
          .desc-en{
            font-size: 30px;
            padding-left: 17px;
          }
        }
        >span{
          height: 30px;
          font-size: 30px;
          line-height: 30px;
        }
      }
      .see{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 72px;
        height: 62px;
        background: #FFFFFF;
        font-weight: normal;
        color: #000000;
        font-size: 24px;
        cursor: pointer;
        &:hover{
          -webkit-transition: 0.5s;
          transition: 0.5s;
          background: #d8d8d8;
        }
        &-zh{
          padding: 0 108px;
        }
        &-en{
          padding: 0 35px;
        }
      }
    }
  }
  .custom{
    width: 100%;
    height: 1146px;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 50%;
    overflow: auto;
    .slogan{
      margin: 87px auto auto auto;
      height: 180px;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 60px;
      text-align: center;
    }
  }
}

.config-mb{
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .price{
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 50%;
    position: relative;
    z-index: 1;
    height: 844px;
    .setting{
      position: absolute;
      z-index: 2;
      left: 50%;
      bottom: 96px;
      transform: translateX(-50%);
      .details{
        display: flex;
        flex-direction: column;
        color: #ffffff;
        &:last-child{
          margin-top: 28px;
        }
        div{
          height: 54px;
          font-size: 40px;
          line-height: 54px;
        }
        >span{
          padding-top: 4px;
          height: 34px;
          font-size: 24px;
          line-height: 34px;
          white-space: nowrap;
        }
      }
    }
  }
  .custom{
    height: 582px;
    position: relative;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: 50%;
    .slogan{
      box-sizing: border-box;
      width: 100%;
      padding: 0 106px;
      font-size: 24px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 34px;
      position: absolute;
      z-index: 2;
      bottom: 92px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
