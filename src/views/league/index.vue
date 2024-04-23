<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <div class="league">
        <div class="banner">
          <img :src="banner" alt="合伙人加盟" />
          <div class="slot">
            <div class="title" v-html="title"></div>
            <div class="desc">{{ desc }}</div>
          </div>
        </div>
        <div class="action-one">
          <div class="condition">
            <img :src="icon" alt="加盟条件" />
            <p>加盟条件</p>
          </div>
          <div class="condition-container">
            <div class="item" v-for="(item, index) in list" :key="index">
              <img :src="item.icon" :alt="item.title" />
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
        <div class="action-two">
          <div class="condition">
            <img :src="icon" alt="Store 店建设标准" />
            <p>Store 店建设标准</p>
          </div>
          <div class="standard">
            <img :src="`${Resource}league/standard.png`" alt="" />
            <p>
              Store（威马用户中心）：
              为用户提供试驾、销售、交付、维保、应急救援、出行、充电等服务。
            </p>
          </div>
        </div>
        <div class="action-three">
          <div class="condition">
            <img :src="icon" alt="店面形象展示" />
            <p>店面形象展示</p>
          </div>
          <div class="appearance">
            <img :src="`${Resource}league/d-1.png`" alt="" />
            <img :src="`${Resource}league/d-2.png`" alt="" />
            <img :src="`${Resource}league/d-3.png`" alt="" />
            <img :src="`${Resource}league/d-4.png`" alt="" />
          </div>
        </div>
        <div class="action-four">
          <div class="condition">
            <img :src="icon" alt="Store 店建设标准" />
            <p>Store 店建设标准</p>
          </div>
          <img
            :src="`${Resource}league/building.png`"
            alt="建设标准"
            style="width: 100vw"
            data-test="test"
          />
        </div>
        <div
          class="action-form"
          id="form"
          :style="{ backgroundImage: `url(${Resource}league/bg.png)` }"
        >
          <div class="slogan">
            <img :src="`${Resource}league/join.png`" alt="加入我们">
          </div>
          <div class="form" style="position: relative;">
            <Toast
              :platform="'pc'"
              :tip="toasts.tip"
              :status="toasts.status"
            ></Toast>
            <div class="inputs">
              <div :class="{ item: 1, error: toast.index === 0 }">
                <input v-model="form.applicantName" placeholder="您的姓名" />
                <p class="desc" v-if="toast.index === 0">{{ toast.desc }}</p>
              </div>
              <div class="item">
                <input v-model="form.applicantEmail" placeholder="您的邮箱" />
                <p class="desc" v-if="toast.index === 1">{{ toast.desc }}</p>
              </div>
              <div class="item">
                <input v-model="form.applicantPhone" placeholder="您的手机号" />
                <p class="desc" v-if="toast.index === 2">{{ toast.desc }}</p>
              </div>
              <div class="item">
                <input v-model="form.code" placeholder="请输入验证码" />
                <button
                  :disabled="smsText | findS"
                  class="getcode"
                  @click="onGetSafeCode"
                >
                  {{ smsText }}
                </button>
                <p class="desc" v-if="toast.index === 3">{{ toast.desc }}</p>
              </div>
            </div>
            <div :class="{ item: 1, agree: 1, error: toast.index === 4 }">
              <p class="desc" v-if="toast.index === 4">{{ toast.desc }}</p>
              <img :src="isAgreeIcon" alt="协议" @click="agree = !agree" />
              <div data-v-1fe6f167="" class="agree-title">
                同意
                <a
                  href="https://www.wm-imotor.com/zx-h5web-upgrade/RichText/index.html?uid=app-privacy-agreement"
                  target="_blank"
                  >《威马隐私政策》</a
                >及<a
                  href="https://www.wm-imotor.com/zx-h5web-upgrade/RichText/index.html?uid=app-user-agreement"
                  target="_blank"
                  >《威马用户协议》</a
                >
              </div>
            </div>
            <button class="submit" @click="submit">提交</button>
          </div>
        </div>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import Toast from "@/views/TestDrive/components/toast";
import ContainerLayout from "@/components/containerComponent";
import { apply, sendCode } from "@/api/league";
import Qs from "qs";
import { Loading } from "element-ui";

export default {
  name: "League",
  data() {
    return {
      isAgreeIcon: `${this.Resource}TEST-DRIVE/check_default.svg`,
      form: {
        applicantEmail: "",
        applicantPhone: "",
        code: "",
        applicantName: ""
      },
      agree: false,
      banner: `${this.Resource}league/banner.jpg`,
      title: `开拓未知<br>才能创造价值`,
      desc: "威马智行合伙人",
      icon: `${this.Resource}league/condition.png`,
      list: [
        {
          icon: `${this.Resource}league/c-1.png`,
          title: "认可",
          desc:
            "了解并认同威马汽车的企业文化，产品，尊重威马的运营理念并愿意与威马共同成长发展，了解Z世代，积极拥抱未来的优秀投资人。"
        },
        {
          icon: `${this.Resource}league/c-2.png`,
          title: "条件",
          desc:
            "申请企业无不良法律记录，经营运作良好；负责运营威马品牌需独立注册公司，注册资金不低于500万。"
        },
        {
          icon: `${this.Resource}league/c-3.png`,
          title: "经验",
          desc:
            "拥有汽车行业经验的申请者优先，其他销售行业申请者需拥有较好的当地资源及积极学习的能力。"
        },
        {
          icon: `${this.Resource}league/c-4.png`,
          title: "选址",
          desc:
            "选址位于当地主流汽车商圈，场地租/购资质满足申请类型最低授权年限。"
        }
      ],
      toast: {
        index: null,
        desc: ""
      },
      emailReg: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
      phoneReg: /^1[3-9]\d{9}$/,
      timer: null,
      smsText: "获取验证码",
      toasts: {
        tip: "请输入预约试驾手机号",
        status: false
      },
      reset: false
    };
  },
  components: {
    ContainerLayout,
    Toast
  },
  filters: {
    findS: function(v) {
      return v.indexOf("S") > -1 ? true : false;
    }
  },
  watch: {
    "form.applicantName": function(v) {
      if(!this.reset) {
        if (v) {
          this.toast = {
            index: null,
            desc: ""
          };
        } else {
          this.toast = {
            index: 0,
            desc: "请输入您的姓名"
          };
        }
      }
    },
    "form.applicantEmail": function(v) {
      const reg = this.emailReg;
      if(!this.reset) {
        if (!reg.test(v)) {
          this.toast = {
            index: 1,
            desc: "请输入正确的邮箱"
          };
        } else {
          this.toast = {
            index: null,
            desc: ""
          };
        }
      }
    },
    "form.applicantPhone": function(v) {
      console.log("监听手机号", /^1[3-9]\d{9}$/.test(v));
      const reg = this.phoneReg;
      if(!this.reset) {
        if (!reg.test(v)) {
          this.toast = {
            index: 2,
            desc: "请输入正确的手机号"
          };
        } else {
          this.toast = {
            index: null,
            desc: ""
          };
        }
      }
    },
    agree: function(v) {
      if (v) {
        this.isAgreeIcon = `${this.Resource}TEST-DRIVE/check_active.svg`;
        this.toast = {
          index: null,
          desc: ""
        };
      } else {
        this.isAgreeIcon = `${this.Resource}TEST-DRIVE/check_default.svg`;
      }
    }
  },
  methods: {
    onToast(key) {
      Object.assign(this.toasts, { tip: key, status: true });
      setTimeout(() => {
        Object.assign(this.toasts, { status: false });
        // this.noneInput = 0;
      }, 3000);
    },
    async onGetSafeCode() {
      if (this.phoneReg.test(this.form.applicantPhone)) {
        try {
          let time = 60; /*验证码发送间隔时间*/
          this.timer = setInterval(() => {
            time--;
            this.smsText = `${time}S`;
            if (time <= 0) {
              clearInterval(this.timer);
              this.smsText = "重新获取";
            }
          }, 1000);
          const { code } = await sendCode(
            Qs.stringify({
              phone: this.form.applicantPhone
            })
          );
          if (code === 1) {
            this.onToast("发送成功");
          }
          this.$once("hook:beforeDestroy", () => {
            clearInterval(this.timer);
          });
        } catch (e) {
          console.error("发送验证码报错", e);
        }
      }
    },
    async submit() {
      if (this.form.applicantName === "") {
        this.toast = {
          index: 0,
          desc: "请输入您的姓名"
        };
        return false;
      }
      if (!this.emailReg.test(this.form.applicantEmail)) {
        this.toast = {
          index: 1,
          desc: "请输入正确的邮箱"
        };
        return false;
      }
      if (!this.phoneReg.test(this.form.applicantPhone)) {
        this.toast = {
          index: 2,
          desc: "请输入正确的手机号"
        };
        return false;
      }
      if (!/^\d{4,8}$/.test(this.form.code)) {
        this.toast = {
          index: 3,
          desc: "请输入正确的验证码"
        };
        return false;
      }
      if (!this.agree) {
        this.toast = {
          index: 4,
          desc: "请阅读并同意相关政策协议"
        };
        return false;
      }
      const load = Loading.service({
        target: "#form",
        background: "rgba(0,0,0,0.5)",
        text: "提交中..."
      });
      try {
        load;
        const { code } = await apply(this.form);
        console.log("是否成功", code);
        if (code === 1) {
          this.reset = true;
          this.onToast("提交成功，请及时查看您的邮件");
          clearInterval(this.timer);
          Object.assign(this.form, {
            applicantEmail: "",
            applicantPhone: "",
            code: "",
            applicantName: ""
          });
          Object.assign(this.toast, { index: null, desc: ""})
          this.smsText = "获取验证码";
          this.agree = false;
        }
      } catch (e) {
        console.log("报错", e);
        this.$nextTick(() => {
          load.close();
        }, 3000);
        this.onToast("申请失败");
      } finally {
        this.$nextTick(() => {
          load.close();
        }, 3000);
      }
    }
  }
};
</script>

<style lang="scss">
.league {
  .banner {
    position: relative;
    z-index: 1;
    img {
      max-width: 100vw;
      height: auto;
    }
    .slot {
      position: absolute;
      top: 283px;
      left: 122px;
      z-index: 2;
      color: #ffffff;
      text-align: left;
      .title {
        font-size: 65px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 91px;
      }
      .desc {
        font-size: 30px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: 300;
        line-height: 30px;
        position: relative;
        padding-top: 24px;
        margin-top: 40px;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-color: #f2f2f2;
          width: 128px;
          height: 1px;
        }
      }
    }
  }
  .action-one {
    background-color: #ffffff;
    padding: 87px 0 100px 0;
  }
  .action-two {
    background-color: #f3f3f3;
    padding: 80px 0;
  }
  .action-three {
    background-color: #ffffff;
    padding-top: 80px;
  }
  .action-four {
    background-color: #f3f3f3;
    padding-top: 80px;
  }
  .action-form {
    width: 100vw;
    height: 565px;
    background-size: contain;
    text-align: center;
    overflow-x: hidden; /* 触发BFC*/
    .slogan {
      max-width: 165px;
      margin: 121px auto 0 auto;
      position: relative;
      img{
        max-width: 100%;
        height: auto;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -43px;
        z-index: 2;
        transform: translateX(-50%);
        width: 89px;
        height: 1px;
        background: #30a680;
      }
    }
    .inputs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 137px 295px 72px 295px;
      .item {
        border-bottom: solid 1px #b2b2b2;
        position: relative;
        input {
          width: 293px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          background-color: transparent;
          border: none;
          outline: none;
          color: white;
        }
        .getcode {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          //width: 80px;
          //height: 20px;
          color: #30a680;
          padding: 2px 4px;
          font-size: 14px;
          border: solid 1px #30a680;
          background-color: transparent;
          cursor: pointer;
          transition: 0.5s;
          position: absolute;
          right: 0;
          bottom: 5px;
          z-index: 20;
          &:hover {
            opacity: 0.8;
            transition: 0.5s;
          }
        }
      }
      .error {
        border-bottom: solid 1px red;
      }
    }
    .desc {
      color: red;
      position: absolute;
      left: 0;
      top: 32px;
    }
    .agree {
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      //font-size: 8px;
      font-family: AlibabaPuHuiTiR;
      color: #b2b2b2;
      line-height: 11px;
      position: relative;
      .desc {
        top: 20px;
      }
      img {
        margin-right: 10px;
      }
      a {
        //font-size: 8px;
        font-family: AlibabaPuHuiTiR;
        color: #b2b2b2;
        line-height: 11px;
      }
    }
    .submit {
      margin-top: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 294px;
      height: 28px;
      background: #30a680;
      border: none;
      outline: none;
      font-size: 14px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #e9e9e9;
      margin-left: auto;
      margin-right: auto;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        transition: 0.5s;
      }
    }
  }
  .condition {
    img {
      max-width: 31px;
      height: auto;
    }
    p {
      margin-top: 34px;
      font-size: 36px;
      font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
      font-weight: 300;
      color: #505050;
      line-height: 36px;
    }
  }
  .condition-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 197px;
    margin-top: 79px;
    .item {
      width: 360px;
      height: 453px;
      background: #f3f3f3;
      opacity: 0.75;
      position: relative;
      img {
        max-width: 113px;
        height: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -39px;
        z-index: 5;
      }
      .title {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 120px;
        font-size: 26px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #26333f;
        line-height: 26px;
        &::after {
          content: "";
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 4px;
          background: #30b489;
          border-radius: 2px;
        }
      }
      .desc {
        margin-top: 60px;
        width: 312px;
        font-size: 20px;
        font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #505050;
        line-height: 36px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .standard {
    width: 1426px;
    margin: auto;
    img {
      max-width: 100%;
      height: auto;
      margin-top: 49px;
    }
    p {
      text-align: left;
      margin-top: 30px;
    }
  }
  .appearance {
    padding: 60px 197px 86px 197px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    img:first-child {
      max-width: 1002px;
      height: auto;
      margin-bottom: 30px;
    }
    img:nth-child(2) {
      max-width: 494px;
      height: auto;
      margin-bottom: 30px;
    }
    img:nth-child(3) {
      max-width: 494px;
      height: auto;
    }
    img:last-child {
      max-width: 1002px;
      height: auto;
    }
  }
}
</style>
