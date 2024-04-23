<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <div class="reserve">
        <div class="position" v-if="!ClientWidth">
          <img v-lazy="code" alt="">
          <span v-html="$t('ReservePage.title')">

          </span>
        </div>
        <span class="title" v-if="ClientWidth">即刻订购您的爱车</span>
        <div class="btn" v-if="ClientWidth" @click="onReserve">立即预定</div>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";

export default {
  name: "Reserve",
  components: {
    ContainerLayout
  },
  data() {
    return{
      bg: `${this.Resource}reserve/bg.png`,
      code: `${this.Resource}reserve/miniprogramcode.png`
    }
  },
  methods: {
    onReserve() {
      window.open('https://wxaurl.cn/XShJ7ps7M0j')
    }
  }
}
</script>

<style lang="scss" scoped>
.reserve{
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://cos-data.wm-imotor.com/website/reserve/bg.png");
  background-position: 50%;
  .position{
    position: absolute;
    left: 165px;
    bottom: 381px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
      width: 163px;
    }
    span{
      display: inline-flex;
      flex-direction: column;
      //width: 150px;
      height: 135px;
      font-size: 38px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #666666;
      line-height: 45px;
      margin-left: 38px;
      text-align: left;
    }
  }
}
@media screen and (max-width: 1024px){
  .reserve{
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    .position{
      position: absolute;
      left: 165px;
      bottom: 580px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img{
        width: 163px;
      }
      span{
        display: inline-flex;
        flex-direction: column;
        width: 150px;
        height: 135px;
        font-size: 38px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #666666;
        line-height: 45px;
        margin-left: 38px;
        text-align: left;
      }
    }
  }
}
@media screen and (max-width: 750px){
  .reserve{
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://cos-data.wm-imotor.com/website/reserve/mb.png");
    background-position: 50%;
    position: relative;
    .title{
      width: 100%;
      text-align: center;
      position: absolute;
      top: 300px;
      z-index: 2;
      left: 0%;
      font-size: 44px;
      font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 44px;
      letter-spacing: 1px;
    }
    .btn{
      @include center;
      position: absolute;
      bottom: 294px;
      left: 50%;
      transform: translateX(-50%);
      width: 309px;
      height: 62px;
      background-color: #FFFFFF;
      font-size: 24px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: 400;
      color: #383838;
      line-height: 34px;
    }
  }
}
</style>
