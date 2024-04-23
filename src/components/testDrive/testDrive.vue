<template>
  <div :class="[`test-drive test-drive-${platform}`]">
    <div
      :class="['select', vehicleType]"
      :style="{
        backgroundImage: `url(${bg})`
      }"
    >
      <div class="select-container">
        <div class="title">
          <!-- {{ isShowQRCode !== 1 ? "即刻预约试驾" : "在线咨询" }} -->
        </div>
        <!-- <div
          class="car-cons"
          :style="{
            backgroundImage: `url(${carPBg})`
          }"
        ></div> -->
        <div class="type">
          {{ isShowQRCode !== 1 ? "在线咨询车型" : "在线咨询车型" }}
        </div>
        <div class="bottom">
          <div
            class="item"
            v-for="(item, index) in carTypeList"
            :key="index"
            @click="getVehicle(item)"
          >
            <img
              :src="[
                vehicleType === item.vehicleType
                  ? item.vehicleTypePicPc[0].active
                  : item.vehicleTypePicPc[0].default
              ]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form" v-if="isShowQRCode === 0">
      <Toast
        :platform="platform"
        :tip="toast.tip"
        :status="toast.status"
      ></Toast>
      <div class="form-item" :class="{ 'none-input': noneInput === 1 }">
        <input
          type="text"
          placeholder="请输入手机号"
          maxlength="13"
          @keyup="onPhoneSpace"
          v-model="form.drivePhone"
          @blur="onMobileBlur"
        />
      </div>
      <div class="form-item code" :class="{ 'none-input': noneInput === 2 }">
        <input
          type="text"
          v-model="form.verifyCode"
          maxlength="4"
          placeholder="请输入验证码"
        />
        <span :class="codeClass" @click="onGetSafeCode">{{ smsText }}</span>
      </div>
      <div
        class="form-item smp-name"
        :class="{
          'none-input': noneInput === 3,
          'selected-have': form.smpName === ''
        }"
        @click.self="onToggleDealer(true)"
      >
        {{ form.smpName }}
        <span
          @mouseenter="onChangeDealer(1)"
          @mouseleave="onChangeDealer(0)"
          @click.self="onToggleDealer(true)"
          ><img
            :src="[
              arrow === 1
                ? `${this.Resource}TEST-DRIVE/arrow_active.svg`
                : `${this.Resource}TEST-DRIVE/arrow_default.svg`
            ]"
            @mouseenter="onChangeDealer(1)"
            @mouseleave="onChangeDealer(0)"
            @click.self="onToggleDealer(true)"
        /></span>
      </div>
      <div class="form-item agree">
        <img :src="isAgreeIcon" @click="onAgree" />
        <div class="agree-title" :class="{ 'none-input': noneInput === 4 }">
          同意<a
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
      <div class="form-submit">
        <div
          :class="[
            `button ${
              disabledSubmit ? 'form-submit-disabled' : 'form-submit-active'
            }`
          ]"
          @click="onSubmit"
        >
          申请预约试驾
        </div>
      </div>
    </div>
    <Dealer
      :platform="platform"
      :vehicleType="vehicleType"
      :longitude="lng"
      :latitude="lat"
      ref="Dealer"
      @dealer="onGetDealer"
    />
    <TestDriveSuccess
      :success="test_drive_status"
      @close="closeTestDriveDialog"
    />
  </div>
</template>

<script>
import Dealer from "./dealer";
import Toast from "@/views/TestDrive/components/toast";
import { drive_subscribe_car_type, send_code_quick } from "@/api/TestDrive";
import mixin from "@/mixins/mixin";
import dict from "@/mixins/dict";
import TestDriveSuccess from "@/components/testDriveSuccess";

export default {
  components: {
    Dealer,
    Toast,
    TestDriveSuccess
  },
  props: {
    isShowQRCode: {
      /* 是否展示企微二维码(目前用户M7车型展示)(1:是 0:否)*/
      type: Number,
      required: true
    },
    vehicleType: {
      type: String /* 默认选中车型*/,
      default: "W6"
    },
    platform: {
      /* pc: PC端, mb: 移动端*/
      type: String,
      default: "pc"
    },
    pagetype: {
      type: String,
      default: ""
    }
  },
  name: "TestDrive",
  mixins: [mixin, dict],
  data() {
    return {
      test_drive_status: false /* 预约试驾状态*/,
      disabledSubmit: false,
      currentVehicleType: "",
      toast: {
        tip: "请输入预约试驾手机号",
        status: false
      },
      arrow: 0 /*箭头切换标志位*/,
      form: {
        channel: "PH" /*预约渠道*/,
        followDrive: 0 /*上门试驾 0否 1是*/,
        provinceName: "",
        province: "" /*预约省份编码*/,
        cityName: "",
        city: "" /*预约城市编码*/,
        vehicleType: "W6",
        drivePhone: "",
        verifyCode: "",
        smpName: "",
        agree: false,
        smpCode: "" /*门店编码*/,
        crmPoint: "MP1639990240058574" /*线索点位*/,
        crmCampainId: "" /* 活动编码*/,
        crmChannel: "" /* 渠道编码*/,
        pageLinks: window.location.href,
        // pageLinks: "https://test-os.wmmotors.cn/TestDrive",
        sourceChannel: ""
      },
      smsText: "获取验证码",
      time: null,
      codeClass: "code-default" /*手机号错误时无法点击验证码*/,
      noneInput: 0 /*错误校验样式跟随*/,
      lng: "",
      lat: "",
      isAgreeIcon: `${this.Resource}TEST-DRIVE/check_default.svg`,
      bg: "",
      carPBg: "",
      carPBgList: [{
          name: "W6",
          url: "https://cos-data.wm-imotor.com/website/W6/pc/w6/mb/tit-w6.png"
      }]
    };
  },
  computed: {
    carTypeIndex: function() {
      return this.carTypeList.findIndex(
        item => item.vehicleType === this.vehicleType
      );
    }
  },
  updated: function() {
    try {
      if (Array.from(this.carTypeList).length === 0) {
        throw "";
      } else {
        if (this.platform === "mb") {
          this.bg = this.carTypeList.find(
            item => item.vehicleType === this.vehicleType
          ).vehicleTypePicPc[0].mobileBG;
        }
      }
    } catch (e) {
      // this.onToast(e);
    }
  },
  watch: {
    "form.drivePhone": function(v) {
      let status = /^1[3-9]\d{9}$/.test(v.replace(/\s+/g, ""));
      this.codeClass = status ? "code-active" : "code-default";
      //清空手机号时重置验证码按钮
      if (v === "") {
        clearInterval(this.timer);
        this.smsText = "获取验证码";
      }
    },
    "form.agree": function(v) {
      // console.log("协议", v);
      if (v) {
        this.isAgreeIcon = `${this.Resource}TEST-DRIVE/check_active.svg`;
      } else {
        this.isAgreeIcon = `${this.Resource}TEST-DRIVE/check_default.svg`;
      }
    },
    carTypeIndex: function(v) {
      this.carPBg =
        this.carPBgList[v] && this.carPBgList[v].url
          ? this.carPBgList[v].url
          : "";
      console.log('nameindex:', v, this.carPBgList)
      this.onChangeCarType();
    }
  },
  created() {
    // 获取定位
    this.onGetLocation();
    //  获取准驾车型
    this.onInitDrivePage();
    this.form.vehicleType = this.$route.query.vehicleType || "W6";
  },
  methods: {
    // 试驾埋点
    onGio() {
      // 试驾埋点
      let querys = this.$route.query;
      if (
        !querys.crmPoint &&
        !querys.crmCampainId &&
        !querys.crmChannel &&
        !querys.sourceChannel
      ) {
        //设置自定义浏览数据变量
        let obj = {
          pagename: "预约试驾页",
          platformname: "威马汽车官网",
          platformcode: "PL1576561305851587",
          activityname: "官网试驾留资",
          activityID: "AC1639990765289224",
          channelname: "威马汽车官网",
          channelcode: "MC1577074835688809",
          pointname: "自然流量",
          pointcode: "MP1641902403968177 ",
          get_phone_var: "是",
          get_local_var: "是",
          agree_var: "是"
        };
        gio && gio("track", "testDrive_public", obj);
      }
    },
    // 手机号添加空格
    onPhoneSpace(e) {
      let phoneNum = this.form.drivePhone.trim();
      //如果是删除按键，则什么都不做
      if (e.keyCode === 8) {
        this.form.drivePhone = phoneNum;
        return;
      }

      let len = phoneNum.length;
      if (len === 3 || len === 8) {
        phoneNum += " ";
        this.form.drivePhone = phoneNum;
      }
      // console.log("what", e);
    },
    // 切换试驾车型
    onSelect(e) {
      this.form.vehicleType = e.vehicleType;
      if (e.between === "drive") {
        setTimeout(() => {
          this.$refs.Dealer.handleToggleDealer(false);
        }, 10);
      }
    },
    onGetSafeCode() {
      if (this.codeClass !== "code-default") {
        let time = 60; /*验证码发送间隔时间*/
        if (!/^1[3-9]\d{9}$/.test(this.form.drivePhone.replace(/\s+/g, ""))) {
          return false;
        }
        this.timer = setInterval(() => {
          time--;
          this.smsText = `${time}S`;
          if (time <= 0) {
            clearInterval(this.timer);
            this.smsText = "重新获取";
          }
        }, 1000);
        send_code_quick({
          mobile: this.form.drivePhone.replace(/\s+/g, ""),
          sendType: 4
        })
          .then(() => {
            this.onToast("发送成功");
          })
          .catch(e => {
            clearInterval(this.timer);
            this.onToast(e.data.desc);
          });
      }
    },
    onChangeDealer(e) {
      this.arrow = e;
    },
    onToggleDealer(e) {
      this.$refs.Dealer.handleToggleDealer(e);
    },
    onGetDealer(e) {
      Object.assign(this.form, e);
    },
    onAgree() {
      this.form.agree = this.form.agree === false ? true : false;
    },
    onToast(key) {
      Object.assign(this.toast, { tip: key, status: true });
      setTimeout(() => {
        Object.assign(this.toast, { status: false });
        this.noneInput = 0;
      }, 3000);
    },
    onMobileBlur() {
      if (!/^1[3-9]\d{9}$/.test(this.form.drivePhone.replace(/\s+/g, ""))) {
        this.noneInput = 1;
        this.onToast("请输入正确的手机号");
      }
    },
    getVehicle(item) {
      // console.log("是什么", item);
      this.form.vehicleType = item.vehicleType;
      if (item.isShowQRCode === 0) {
        setTimeout(() => {
          this.$refs.Dealer.handleToggleDealer(false);
        }, 10);
      }
      this.$emit("testDriveSuccess", {
        vehicleType: item.vehicleType,
        isShowQRCode: item.isShowQRCode
      });
    },
    async onSubmit() {
      console.log(this.form)
      if (this.disabledSubmit) return;
      if (!/^1[3-9]\d{9}$/.test(this.form.drivePhone.replace(/\s+/g, ""))) {
        this.noneInput = 1;
        this.onToast("请输入正确的手机号");
      } else if (!/^\d{4}$/.test(this.form.verifyCode)) {
        this.noneInput = 2;
        this.onToast("请输入正确的验证码");
      } else if (this.form.smpName === "") {
        this.noneInput = 3;
        this.onToast("请选择预约试驾门店");
      } else if (!this.form.agree) {
        this.noneInput = 4;
        this.onToast("请阅读并同意");
      } else {
        try {
          // 添加品专参数
          const params_pz = {
            crmCampainId: localStorage.getItem("crmCampainId"),
            crmPoint: localStorage.getItem("crmPoint"),
            crmChannel: localStorage.getItem("crmChannel"),
            sourceChannel: localStorage.getItem("sourceChannel")
          };
          // 去除手机空格
          const phone = {
            drivePhone: this.form.drivePhone.replace(/\s+/g, "")
          };
          const { code } = await drive_subscribe_car_type(
            Object.assign(this.form, Object.assign(params_pz, phone))
          );
          this.disabledSubmit = true;
          if (code === 1) {
            if (this.platform === "pc") {
              this.onToast("预约成功");
              this.$emit("testDriveSuccess", {
                isShowQRCode: 2
              });
            }
            this.onGio();
            Object.assign(this.form, {
              // provinceName: "",
              // province: "" /*预约省份编码*/,
              // cityName: "",
              // city: "" /*预约城市编码*/,
              // vehicleType: "W6",
              drivePhone: "",
              verifyCode: ""
              // smpName: "",
              // agree: "",
              // smpCode: "" /*门店编码*/
            });
            clearInterval(this.timer);
            this.smsText = "获取验证码";
            this.noneInput = 0;
            setTimeout(() => {
              this.disabledSubmit = false;
            }, 30000);
            if (this.platform === "mb") {
              // this.test_drive_status = true
              this.$router.push("/TestDriveSuccess");
            }
          } else {
            setTimeout(() => {
              this.disabledSubmit = false;
            }, 3000);
          }
        } catch (e) {
          console.log("sss", e);
          this.onToast(e.data.desc);
        }
      }
    },
    closeTestDriveDialog(e) {
      this.test_drive_status = e;
    }
  }
};
</script>

<style lang="scss" scoped>
$defaultColor: #bdc4d0;
$activeColor: #30bf94;
$bottomLineColor: rgba(151, 151, 151, 0.24);
$border: solid 1px red;
.test-drive {
  width: 100%;
  &-pc {
    .select {
      border-bottom: solid 1px #30a680;
      margin-bottom: 18px;
      &-container {
        padding-top: 44px;
        padding-left: 40px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 42px;
          color: #b2b2b2;
          line-height: 42px;
          text-align: left;
        }
        .type {
          font-size: 14px;
          color: #333333;
          line-height: 14px;
          text-align: left;
          padding-top: 14px;
          padding-bottom: 25px;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          padding-right: 40px;
          padding-bottom: 25px;
          .item {
            cursor: pointer;
            img {
              width: auto;
              height: 19px;
            }
          }
        }
      }
    }
    .form {
      width: 100%;
      box-sizing: border-box;
      padding: 0 40px;
      position: relative;
      &-item {
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        //border-bottom: solid 1px #d8d8d8;
        font-size: 16px;
        color: #333333;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        &::after {
          content: "";
          width: 100%;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 2;
          background: #d8d8d8;
          transform: scaleY(0.5);
          -webkit-transform: scaleY(0.5);
        }
        input[type="text"] {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          font-size: 16px;
          color: #333333;
          background-color: rgba(0, 0, 0, 0);
          -webkit-appearance: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          &::-webkit-input-placeholder {
            color: #E9E9E9;
            font-size: 16px;
          }
          &::-webkit-input-placeholder {
            /* WebKit, Blink, Edge */
            color: #E9E9E9;
            font-size: 16px;
          }
          &:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #E9E9E9;
            font-size: 16px;
          }
          &::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #E9E9E9;
            font-size: 16px;
          }
          &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #E9E9E9;
            font-size: 16px;
          }
        }
      }
      @media screen and (max-width: 1024px) {
        &-item {
          height: 90px;
        }
      }
      .none-input {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 0;
          left: 0;
          bottom: -1px;
          border-bottom: solid 2px $activeColor;
        }
      }
      .code {
        position: relative;
        span:last-child {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: 0.5s;
          font-size: 14px;
        }
        &-default {
          color: #a2aab1;
          padding: 10px 36px;
          border-radius: 8px;
          border: 2px solid #C7C7CC;/*no*/
        }
        &-active {
          cursor: pointer;
          color: #30a680;
          padding: 3px 18px;
          border: solid 1px #30a680;
          &:hover {
            color: #32a277;
          }
        }
      }
      .selected-have {
        position: relative;
        &::before {
          content: "请选择试驾门店";
          color: #E9E9E;
          position: absolute;
          z-index: 5;
          top: 50%;
          left: 0;
          font-size: 16px;
          transform: translateY(-50%);
        }
      }
      .smp-name {
        position: relative;
        cursor: pointer;
        span {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 20px;
          background: #d2d2d2;
          position: absolute;
          right: 17px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          border-radius: 10px;
          img {
            width: 12px;
          }
        }
      }
      .agree {
        @include row;
        border: none;
        height: auto;
        font-size: 14px;
        line-height: 20px;
        margin-top: 19px;
        color: #b2b2b2;
        &::after {
          content: none;
        }
        img {
          cursor: pointer;
        }
        &-title {
          margin-left: 8px;
          text-align: left;
          a {
            color: #b2b2b2;
            cursor: pointer;
            &:hover {
              color: #30a680;
            }
          }
        }
        @media screen and (max-width: 1024px) {
          &-title {
            margin-left: 16px;
            text-align: left;
            line-height: 30px;
            font-size: 20px;
            color: #b2b2b2;
            zoom: 0.7;
            a {
              color: #b2b2b2;
              cursor: pointer;
              &:hover {
                color: #30a680;
              }
            }
          }
        }
      }
      &-submit {
        @include center;
        margin-top: 60px;
        margin-bottom: 80px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        .button {
          @include center;
          border-radius: 0;
          border: none;
          outline: none;
          width: 348px;
          height: 36px;
          font-size: 14px;
          color: #e9e9e9;
          transition: 0.5s;
        }
        &-active {
          background: #30a680;
          cursor: pointer;
          &:hover {
            transition: 0.5s;
            box-shadow: 0 0 1px 1px #3dbe94;
          }
        }
        &-disabled {
          background: #a8a8a8;
        }
      }
    }
  }
  &-mb {
    .select {
      width: 100%;
      height: 670px;
      background-size: 100% 100%;
      background-position: 50%;
      &.W6{
        background-size: 100%;
        background-position: 20% 20%;
      }
      &-container {
        width: 100%;
        box-sizing: border-box;
        padding-top: 528px;
        padding-left: 60px;
        padding-right: 60px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        color: #ffffff;
        position: relative;
        .title {
          font-size: 60px;
          color: #ffffff;
          line-height: 60px;
          text-align: left;
        }
        .car-cons {
          width: 285px;
          height: 173px;
          position: absolute;
          top: 60px;
          left: 60px;
          background-size: 100% 100%;
        }
        .type {
          font-size: 20px;
          line-height: 20px;
          padding-top: 20px;
          padding-bottom: 38px;
          text-align: left;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          .item {
            img {
              width: 100%;
              height: 26px;
            }
          }
        }
      }
    }
    .form {
      width: 100%;
      box-sizing: border-box;
      padding: 30px 68px 0 68px;
      position: relative;
      &-item {
        box-sizing: border-box;
        width: 100%;
        height: 97px;
        //border-bottom: solid 1px #B2B2B2;
        font-size: 24px;
        color: #333333;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        &::after {
          content: "";
          width: 100%;
          height: 1px;
          background: #d8d8d8;
          position: absolute;
          left: 0;
          bottom: 0;
          transform: scaleY(0.5);
          -webkit-transform: scaleY(0.5);
        }
        input[type="text"] {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          font-size: 24px;
          color: #333333;
          background-color: rgba(0, 0, 0, 0);
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
          &::-webkit-input-placeholder {
            color: #E9E9E9;
            font-size: 24px;
          }
          &::-webkit-input-placeholder {
            /* WebKit, Blink, Edge */
            color: #E9E9E9;
            font-size: 24px;
          }
          &:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #b2b2b2;
            font-size: 24px;
          }
          &::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #E9E9E9;
            font-size: 24px;
          }
          &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #E9E9E9;
            font-size: 24px;
          }
        }
      }
      .none-input {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 0;
          left: 0;
          bottom: -1px;
          border-bottom: solid 2px $activeColor;
        }
      }
      .code {
        position: relative;
        span:last-child {
          @include center;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: 0.5s;
          font-size: 24px;
          //line-height: 20px;
          box-sizing: border-box;
        }
        &-default {
          color: #a2aab1;
          padding: 6px 18px;
          border-radius: 8px;
          border: 2px solid #C7C7CC;/*no*/
        }
        &-active {
          cursor: pointer;
          color: #30a680;
          padding: 6px 18px;
          border: solid 1px #30a680;
          &:hover {
            color: #32a277;
          }
        }
      }
      .selected-have {
        position: relative;
        &::before {
          content: "请选择试驾门店";
          color: #a2aab1;
          position: absolute;
          z-index: 5;
          top: 50%;
          left: 0;
          font-size: 24px;
          transform: translateY(-50%);
        }
      }
      .smp-name {
        position: relative;
        cursor: pointer;
        span {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 30px;
          background: #d2d2d2;
          position: absolute;
          right: 17px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          border-radius: 15px;
          img {
            width: 20px;
          }
        }
      }
      .agree {
        display: flex;
        flex-direction: row;
        //align-items: flex-start;
        border: none;
        height: auto;
        font-size: 24px;
        line-height: 28px;
        margin-top: 19px;
        color: #b2b2b2;
        position: relative;
        &::after {
          content: none;
        }
        > img {
          width: 26px;
        }
        &-title {
          margin-left: 16px;
          text-align: left;
          line-height: 34px;
          font-size: 24px;
          color: #b2b2b2;
          a {
            color: #b2b2b2;
            cursor: pointer;
            &:hover {
              color: #30a680;
            }
          }
        }
      }
      &-submit {
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        margin-top: 60px;
        margin-bottom: 80px;
        @include center;
        .button {
          @include center;
          border-radius: 0;
          border: none;
          outline: none;
          width: 488px;
          height: 60px;
          font-size: 24px;
          color: #e9e9e9;
          transition: 0.5s;
        }
        &-active {
          background: #30a680;
          cursor: pointer;
          &:hover {
            transition: 0.5s;
            box-shadow: 0 0 1px 1px #3dbe94;
          }
        }
        &-disabled {
          background: #a8a8a8;
        }
      }
    }
  }
}
</style>
