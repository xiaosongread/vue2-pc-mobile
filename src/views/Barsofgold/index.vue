<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <div class="Barsofgold">
        <div class="">
          <el-image :src="imgInfo.titleImg" lazy></el-image>
        </div>
        <div class="ActivityEquity">活动权益</div>
        <el-col
          ><div class="ofEquity">
            威马汽车EX5全系3000元购车抵用券”可抵扣车款
          </div></el-col
        >
        <div class="ofEquity">售后服务权益礼包</div>
        <div class="ofEquity">完成提车后即可获得：</div>

        <div class="ofEquityList">
          <div
            class="itemQue bfelxe"
            v-for="(item, index) in EquityList"
            :key="index"
          >
            <div><el-image :src="item.src" lazy></el-image></div>
            <div class="Quetext">{{ item.text }}</div>
          </div>
        </div>

        <div class="yetecr">3000元现金抵用券有效期至2022年6月30日</div>
        <div class="tiperTip">
          <div class="letConte">
            <div style="margin-bottom: 20px">活动说明</div>
            <div
              v-for="(item, index) in tipsList"
              :key="index"
              class="tipsText"
            >
              {{ item.text }}
            </div>
          </div>
          <div class="imgconte">
            <div><el-image :src="codeImg" lazy></el-image></div>
            <div class="foterUce">
              <div class="t1">看车、订车、用车</div>
              <div class="t2">iOS/Android 扫码即刻下载</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
export default {
  name: "consuService",
  components: {
    ContainerLayout
  },
  data() {
    return {
      imgInfo: {
        titleImg: `${this.Resource}Barsofgold/banner.png`
      },
      EquityList: [
        {
          text: "免费首次保养",
          src: `${this.Resource}Barsofgold/1.png`
        },
        {
          text: "终身救援服务",
          src: `${this.Resource}Barsofgold/2.png`
        },
        {
          text: "电池终身质保",
          src: `${this.Resource}Barsofgold/3.png`
        },
        {
          text: "终身流量免费",
          src: `${this.Resource}Barsofgold/4.png`
        },
        {
          text: "管家1对1服务",
          src: `${this.Resource}Barsofgold/5.png`
        }
      ],
      tipsList: [
        {
          text:
            " 1)仅限威马注册会员参与，每人仅限享有一次活动权益，活动权益购买后，原则上不可退换;"
        },
        {
          text: "  2)本次活动所有权益，仅限参与者本人使用，不可转让;"
        },
        {
          text: " 3)3000元购车抵用券可在威马智行App[我的]-[我的福利]中查看;"
        }
      ],
      codeImg: `${this.Resource}Barsofgold/qrcode.png`
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.Barsofgold {
  background: #f4f5f6;
  .ActivityEquity {
    margin: 80px 0 22px;
    font-size: 40px;
    font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #333333;
  }
  .ofEquity {
    font-size: 20px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #666666;
    line-height: 40px;
  }
  .ofEquityList {
    max-width: 68%;
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .itemQue {
    background: #fff;
    .el-image {
      width: 100%;
      max-height: 100%;
    }
  }
  .bfelxe {
    flex: 0 0 30%;
    margin-right: 30px;
    margin-bottom: 56px;
  }
  .Quetext {
    margin: 20px 0 14px;
    font-size: 22px;
    font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #333333;
    line-height: 30px;
    background: #fff;
  }
  .yetecr {
    margin-top: 4px;
    font-size: 20px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #666666;
    line-height: 30px;
  }
  .tiperTip {
    max-width: 68%;
    margin: 91px auto 0;
    padding-bottom: 102px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tipsText {
    font-size: 14px;
  }
  .imgconte {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .el-image {
      height: 99px;
    }
  }
  .letConte {
    width: 100%;
    text-align: left;
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #acacac;
    line-height: 30px;
  }
  .foterUce {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 16px;
    margin-bottom: 2px;
  }
  .t1 {
    font-size: 14px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #333333;
  }
  .t2 {
    font-size: 9px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #505050;
  }
  @media screen and (max-width: 400px) {
    .ofEquityList {
      max-width: 100%;
      margin: 50px auto 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .bfelxe {
      flex: 1;
      margin-right: 0px;
      margin-bottom: 0;
    }
    .ofEquityList {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
    }
    .yetecr {
      margin-top: 60px;
      font-size: 20px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #666666;
      line-height: 30px;
    }
    .tiperTip {
      max-width: 100%;
      // margin: 91px auto 102px;
      display: flex;
      flex-direction: column;
      padding-bottom: 102px;
      // flex-wrap: wrap;
      // justify-content: center;
    }
    .imgconte {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .el-image {
        margin: 40px 0 0;
        width: 99px;
        height: 99px;
      }
    }
    .letConte {
      width: 100%;
      text-align: left;
      padding: 0 20px;
      box-sizing: border-box;
      flex: 1;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #acacac;
      line-height: 30px;
    }
    .tipsText {
      font-size: 14px;
    }
  }
}
</style>
