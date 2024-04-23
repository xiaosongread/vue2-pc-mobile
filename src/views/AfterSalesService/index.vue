<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <div class="after-service">
        <div class="banner" v-lazy:background-image="bg" v-if="!ClientWidth"><p>尊享车主权益</p></div>
        <div class="headline">
          <div class="title">尊享车主权益</div>
          <div class="sub-title">
            <p>车主轻松享有无忧保障及基础权益，无论何时，都能感受专业的服务支持。</p>
            <p>我们通过智能远程诊断系统，更高效的解决问题，实现服务效率和用车体验的提升。</p>
          </div>
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in list_one" :key="index">
            <img v-lazy="item.bg" width="100%" data-test="test" :alt="[`${item.title}${item.desc}`]">
            <div class="title" v-html="item.title"></div>
            <div class="desc" v-html="item.desc"></div>
            <div class="condition" v-if="item.condition" v-html="item.condition"></div>
          </div>
        </div>
        <div class="benefit" v-lazy:background-image="benefitBg">
          <div class="title title-one">W6车主专享</div>
          <div class="content">
            <div class="item" v-for="(item, index) in list_two" :key="index">
              <img v-lazy="item.bg" width="100%" data-test="test" :alt="[`${item.title}${item.desc}`]">
              <div class="title" v-html="item.title"></div>
              <div class="desc" v-html="item.desc"></div>
              <div class="condition" v-if="item.condition" v-html="item.condition"></div>
            </div>
          </div>
          <div class="phone">7*24小时专属客服热线：4006-999-666</div>
        </div>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";

export default {
  name: "AfterSales",
  components: {
    ContainerLayout
  },
  data(){
    return{
      bg: `${this.Resource}AfterSaleService/banner.png`,
      benefitBg: `${this.Resource}AfterSaleService/bg.png`,
      list_one: [
        {
          bg: `${this.Resource}AfterSaleService/ass_1.png`,
          title: '新车免费首保',
          desc: '新车首次免费保养',
          condition: '*自新车交付之日起3个月/3000公里内'
        },
        {
          bg: `${this.Resource}AfterSaleService/ass_2.png`,
          title: '7*24小时免费道路救援',
          desc: '提供整车质保期内不限次数',
          condition: '因产品质量问题而引发的道路救援服务。'
        },
        {
          bg: `${this.Resource}AfterSaleService/ass_3.png`,
          title: '动力电池终身质保',
          desc: `享受动力电池终身质保，威马将为车主提<br/>供电池维护、修理、更换零部件等服务。`,
          condition: `*仅限首任个人用户且为非营运车辆（详细条款<br/>以实际协议为准）`
        },
        {
          bg: `${this.Resource}AfterSaleService/ass_4.png`,
          title: '终身免费 无限流量',
          desc: `车联网基础流量<br/>终身免费，永不断线`
        },
        {
          bg: `${this.Resource}AfterSaleService/ass_5.png`,
          title: '无忧保障体系',
          desc: `基础保修（非营运）  整车*：4年/12万公里；<br/>关键零部件：8年15万公里；特殊零部件：3年/6万公里（以上时间或公里数，以先到为准）`,
          condition: `*易损耗件除外，详见随车《保修保养手册》`
        },
        // {
        //   bg: `${this.Resource}AfterSaleService/ass_6.png`,
        //   title: '充电桩服务权益',
        //   desc: `首车主*赠送一台威马定制7KW交流充电桩<br/>及基础线缆布线施工安装服务*（2年质保）`,
        //   condition: `*EX5即客行和E.5车型除外<br/>*基础线缆布线施工：不超过 30米的基础布线施工和辅材`
        // },
        {
          bg: `${this.Resource}AfterSaleService/ass_new_2.jpg`,
          title: 'OTA升级服务',
          desc: `车辆不定期OTA软件服务升级`
        },
        {
          bg: `${this.Resource}AfterSaleService/ass_new_1.jpg`,
          title: '7*24小时专属客服',
          desc: `车主有任何养车、用车问题都可拨打24<br/>小时专属客服热线4006-999-666咨询。`
        }
      ],
      list_two: [
        {
          bg: `${this.Resource}AfterSaleService/ass_8.png`,
          title: '无忧售后上门服务',
          desc: `可享受全年无限次威马售后服务车上门服<br/>务（截止2022年底）`,
          condition: `*服务区域仅限已开通上门服务城市<br/>（W6车主专享）`
        },
        {
          bg: `${this.Resource}AfterSaleService/ass_3.jpg`,
          title: '智能云守护平台服务',
          desc: '专属一对一车辆远程诊断与修复服务<br/>（W6车主专享）'
        }
      ]
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px){
  .after-service{
    background: #F4F5F6;
    .banner{
      width: 100%;
      height: 380px;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: 50%;
      position: relative;
      p{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #FFFFFF;
        line-height: 55px;
        position: absolute;
        z-index: 2;
        left: 122px;
        bottom: 111px;
      }
    }
    .headline{
      .title{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #333333;
        line-height: 55px;
        margin-top: 80px;
        margin-bottom: 30px;
      }
      .sub-title{
        font-size: 16px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        color: #666666;
        line-height: 26px;
      }
    }
    .content{
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      width: 1174px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;
      .item{
        width: 330px;
        //height: 381px;
        background-color: #FFFFFF;
        margin-bottom: 58px;
        &:nth-child(3n){
          margin-left: 92px;
        }
        &:nth-child(3n-1){
          margin-left: 92px;
        }
        .title{
          font-size: 22px;
          font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #333333;
          line-height: 30px;
          padding: 20px 20px 0 20px;
          box-sizing: border-box;
        }
        .desc{
          font-size: 14px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #666666;
          line-height: 26px;
          box-sizing: border-box;
          padding: 14px 20px;
        }
        .condition{
          font-size: 14px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #B2B2B2;
          line-height: 16px;
          box-sizing: border-box;
          padding: 0 20px 14px 20px;
        }
      }
    }
    .benefit{
      width: 100vw;
      height: 722px;
      opacity: 0.79;
      margin-top: 41px;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: 50%;
      background-color: rgba(224, 225, 227, 0.79);
      .title{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #333333;
        line-height: 55px;
        padding-top: 71px;
      }
      .phone{
        font-size: 16px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #666666;
        line-height: 26px;
      }
    }
  }
}
@media screen and (min-width: 750px) and (max-width: 1024px){
  .after-service{
    background: #F4F5F6;
    .banner{
      width: 100%;
      height: 380px;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: 50%;
      position: relative;
      p{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #FFFFFF;
        line-height: 55px;
        position: absolute;
        z-index: 2;
        left: 122px;
        bottom: 111px;
      }
    }
    .headline{
      .title{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #333333;
        line-height: 55px;
        margin-top: 80px;
        margin-bottom: 30px;
      }
      .sub-title{
        font-size: 16px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        color: #666666;
        line-height: 26px;
      }
    }
    .content{
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      width: 1174px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      .item{
        width: 520px;
        //height: 551px;
        background-color: #FFFFFF;
        margin-bottom: 58px;
        .title{
          font-size: 28px;
          font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #333333;
          line-height: 36px;
          box-sizing: border-box;
          padding: 20px 20px 0 20px;
        }
        .desc{
          font-size: 20px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #666666;
          line-height: 28px;
          box-sizing: border-box;
          padding: 14px 20px;
        }
        .condition{
          font-size: 14px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #B2B2B2;
          box-sizing: border-box;
          line-height: 28px;
          padding: 0 20px 14px 20px;
        }
      }
    }
    .benefit{
      width: 100vw;
      background-color: blue;
      height: 1522px;
      opacity: 0.79;
      margin-top: 41px;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: 50%;
      background-color: rgba(224, 225, 227, 0.79);
      .title{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #333333;
        line-height: 55px;
        padding-top: 71px;
      }
      .phone{
        font-size: 16px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #666666;
        line-height: 26px;
      }
    }
  }
}
@media screen and (max-width: 750px){
  .after-service{
    background: #F4F5F6;
    box-sizing: border-box;
    padding: 60px 46px 0 46px;
    .headline{
      margin-bottom: 60px;
      .title{
        font-size: 36px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #000000;
        line-height: 50px;
        text-align: left;
        margin-bottom: 36px;
      }
      .sub-title{
        font-size: 28px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        color: #505050;
        font-weight: 300;
        line-height: 52px;
        text-align: left;
      }
    }
    .content{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .item{
        width: 100%;
        //height: 762px;
        background-color: #FFFFFF;
        margin-bottom: 20px;
        .title{
          font-size: 44px;
          font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #333333;
          line-height: 60px;
          padding-top: 40px;
        }
        .desc{
          font-size: 32px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #666666;
          line-height: 52px;
          padding-top: 28px;
          padding-bottom: 14px;
        }
        .condition{
          font-size: 28px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #B2B2B2;
          line-height: 32px;
          padding: 28px 20px 14px 20px;
        }
      }
    }
    .benefit{
      width: 100%;
      //background-color: red;
      margin-top: 60px;
      .title-one{
        font-size: 36px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #000000;
        line-height: 50px;
        text-align: left;
        position: relative;
        padding-bottom: 80px;
        z-index: 1;
        &::after{
          content: "";
          width: 428px;
          height: 2px;
          background-color: #DADADA;
          position: absolute;
          right: 0;
          top: 20%;
          transform: translateY(-20%);
          z-index: 10;
        }
      }
      .phone{
        font-size: 32px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #666666;
        line-height: 52px;
        padding-top: 38px;
        padding-bottom: 62px;
      }
    }
  }
}
</style>
