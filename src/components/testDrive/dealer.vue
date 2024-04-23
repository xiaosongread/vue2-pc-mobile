<template>
  <div :class="[`dealer dealer-${platform}`]" v-show="toggleDealer">
    <div class="title" v-if="platform === 'mb'">
      <span>请选择试驾门店</span>
      <i class="el-icon-close" style="font-size: 18px;font-weight: bold" @click="handleToggleDealer(false)"></i>
    </div>
    <div class="top">
      <div class="left">
        <div class="item-location" :class="{ active: currentIndex === index }" v-for="(item, index) in current" :key="index" @click="handleChange(index)">
          <p v-if="currentIndex >= index">{{ item }}</p>
        </div>
      </div>
      <div class="right" v-if="platform === 'pc'" @click="handleToggleDealer(false)"><img :src="closeIcon"/></div>
<!--      <i class="el-icon-close" style="font-size: 22px;font-weight: bold" @click="handleToggleDealer(false)"></i>-->
    </div>
    <div class="container">
      <ul v-show="currentIndex === 0">
        <li
            v-for="(item, index) in list"
            :key="index"
            @click="handleCheck(item, currentIndex, index)"
        >
          {{ item.provinceName }}
        </li>
      </ul>
      <ul v-show="currentIndex === 1">
        <li
            v-for="(item, index) in cityList"
            :key="index"
            @click="handleCheck(item, currentIndex, index)"
        >
          {{ item.cityName }}
        </li>
      </ul>
      <ul class="smp-name" v-show="currentIndex === 2">
        <li
            v-for="(item, index) in smpList"
            :key="index"
            @click="handleCheck(item, currentIndex, index)"
        >
          <div>
            <p><span>{{ item.smpName }}</span> <span>{{ item.distance }}</span></p>
            <p>{{ item.carManageAddress }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { data_cityList, smpList_ByDriveCity } from "@/api/TestDrive";
// import mixin from "@/mixins/mixin";
export default {
  name: "dealer",
  // mixins: [mixin],
  props: {
    platform: {
      type: String,
      default: 'pc'
    },
    vehicleType: {
      type: String,
      default: ""
    },
    longitude: {
      type: String,
      default: ''
    },
    latitude: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      closeIcon: `${this.Resource}TEST-DRIVE/arrow_default.svg`,
      toggleDealer: false,
      current: ["请选择省份", "请选择城市", "请选择试驾门店"],
      currentIndex: 0,
      list: [],
      cityList: [],
      smpList: [],
      passPrams: {
        province: "",
        provinceName: "",
        city: "",
        cityName: "",
        smpName: "",
        smpCode: ""
      }
    };
  },
  watch: {
    toggleDealer: {
      handler: function(value) {
        if (value) {
          this.currentIndex = 0;
          this.handleGetList({ type: 3, version: 1 });
          this.current = ["请选择省份", "请选择城市", "请选择试驾网点"];
        }
      },
      immediate: true
    }
  },
  created() {
    this.handleGetList({ type: 3, version: 1 });
  },
  methods: {
    handleChange(e) {
      this.current[e] = '请选择'
      this.currentIndex = e;
    },
    handleCheck(e, currentIndex, index) {
      // console.log(e, currentIndex);
      if (currentIndex === 0) {
        this.cityList = e.cityList;
        this.$set(this.current, currentIndex, e.provinceName);
        Object.assign(this.passPrams, {
          province: e.provinceCode,
          provinceName: e.provinceName
        });
      }
      if (currentIndex === 1) {
        this.smpList = []; /*重新渲染前先清空，避免渲染闪烁的问题*/
        smpList_ByDriveCity({
          type: 3,
          cityCode: e.cityCode,
          longitude: this.longitude,
          latitude: this.latitude
        })
            .then(res => {
              this.smpList = res.data.list.filter(item => item.vehicles.indexOf(this.vehicleType) > -1);
            })
            .catch(() => {
            });
        // this.smpList = e.smpList;
        this.$set(this.current, currentIndex, e.cityName);
        Object.assign(this.passPrams, {
          city: e.cityCode,
          cityName: e.cityName
        });
      }
      if (currentIndex === 2) {
        this.$set(this.current, currentIndex, e.smpName);
        Object.assign(this.passPrams, {
          smpName: e.smpName,
          smpCode: e.smpCode
        });
      }
      this.currentIndex = this.currentIndex < 2 ? this.currentIndex + 1 : 2;
      if (
          this.currentIndex === 2 &&
          this.current[this.currentIndex] !== "请选择试驾网点"
      ) {
        setTimeout(() => {
          this.handleToggleDealer(false);
          this.$emit("dealer", this.passPrams);
        }, 5);
      }
    },
    handleToggleDealer(e) {
      // console.log('是否执行', e)
      this.toggleDealer = e;
    },
    handleGetList(params) {
      data_cityList(params)
          .then(res => {
            this.list = res.data.list;
            /*this.list.map((item) => {
              item.cityList.map((v) => {
                v.smpList.map((j) => {
                  console.log(j.vehicles)
                })
              })
            })*/
          })
          .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.dealer {
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  &-pc{
    position: absolute;
    top: 0;
    right: -40px;
    z-index: 10000;
    width: 768px;
    background: #f4f5f6;
    .top {
      box-sizing: border-box;
      width: 100%;
      @include space-between;
      height: 70px;
      background: #ffffff;
      cursor: pointer;
      padding:0 37px 0 0;
      font-size: 16px;
      .left {
        width: 90%;
        height: 100%;
        @include row;
        .item-location{
          height: 100%;
          @include center;
          p{
            padding: 0 40px;
          }
        }
        .active {
          color: #32a277;
          position: relative;
          height: 100%;
          @include center;
        }
        .active::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: #32a277;
          bottom: 0;
          left: 0;
        }
      }
      .right{
        @include center;
        width: 48px;
        height: 20px;
        background: #D2D2D2;
        border-radius: 10px;
        margin-right: 20px;
        img{
          width: 12px;
          transform: rotate(180deg);
        }
      }
    }
    .container {
      box-sizing: border-box;
      height: 296px;
      overflow-y: scroll;
      padding: 36px 40px;
      /* 设置滚动条的样式 */
      &::-webkit-scrollbar {
        width:5px;
      }
      /* 滚动槽 */
      &::-webkit-scrollbar-track {
        border-radius:10px;
      }
      /* 滚动条滑块 */
      &::-webkit-scrollbar-thumb {
        border-radius:10px;
        background:rgba(0,0,0,0.1);
      }
      &::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(0, 0, 0, 0.4);
      }
        ul {
        display: flex;
        flex-flow: row wrap;
        li {
          width: 25%;
          font-size: 16px;
          list-style: none;
          height: 22px;
          line-height: 22px;
          padding-bottom: 30px;
          @include flex-start;
          cursor: pointer;
          &:hover{
            color: #30BF94;
          }
        }
      }
      .smp-name {
        @include space-between;
        li {
          width: 100%;
          height: auto;
          &:hover{
            color: #30BF94;
          }
          div {
            width: 100%;
            @include column;
            justify-content: flex-start;
            //background: #3dbe94;
            p:first-child {
              @include flex-start;
              width: 100%;
              font-size: 16px;
              @include space-between;
              //color: #cccccc;
              span:last-child{
                color: #B2B2B2;
              }
            }
            p:last-child {
              color: #A2AAB1;
              font-size: 14px;
              @include flex-start;
              width: 100%;
              text-align: left;
            }
          }
        }
      }
    }
  }
  &-mb{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10000;
    width: 100vw;
    height: 50vh;
    background: #FFFFFF;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    box-sizing: border-box;
    padding: 0 40px;
    .title{
      width: 100%;
      @include space-between;
      line-height: 8vh;
      min-height: 36px;
      span{
        font-size: 34px;
      }
    }
    .top {
      border-bottom: solid 1px #ccc;
      box-sizing: border-box;
      width: 100%;
      @include space-between;
      height: 7vh;
      min-height: 32px;
      cursor: pointer;
      font-size: 28px;
      .left {
        width: 100%;
        //background: #3dbe94;
        height: 100%;
        @include row;
        .item-location{
          @include center;
          height: 100%;
          &:nth-child(n+2){
            margin-left: 50px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
        .active {
          color: #32a277;
          position: relative;
          height: 100%;
          @include center;
          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background: #32a277;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
    .container {
      box-sizing: border-box;
      padding: 20px 0;
      height: 30vh;
      overflow-y: scroll;
      ul {
        display: flex;
        flex-direction: column;
        li {
          width: 50%;
          font-size: 24px;
          list-style: none;
          padding-bottom: 30px;
          @include flex-start;
          cursor: pointer;
          &:hover{
            color: #30BF94;
          }
        }
      }
      .smp-name {
        @include space-between;
        width: 100%;
        li {
          display: inline-block;
          width: 100%;
          position: relative;
          padding: 10px 0;
          &::after{
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #D8D8D8;
            transform: scaleY(0.5);
            -webkit-transform: scaleY(0.5);
          }
          div {
            @include column;
            justify-content: flex-start;
            p:first-child {
              @include space-between;
              width: 100%;
              font-size: 24px;
              line-height: 40px;
              text-align: left;
            }
            p:last-child {
              color: #A2AAB1;
              font-size: 22px;
              width: 100%;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
