<template>
  <div class="dealer" v-show="toggleDealer">
    <div class="dealer-top">
      <div class="dealer-top-left">
        <div class="item-location" :class="{ active: currentIndex === index }" v-for="(item, index) in current" :key="index" @click="handleChange(index)">
          <p v-if="currentIndex >= index">{{ item }}</p>
        </div>
      </div>
      <i class="el-icon-close" style="font-size: 22px;font-weight: bold" @click="handleToggleDealer(false)"></i>
    </div>
    <div class="dealer-container">
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
            <p>{{ item.smpName }}</p>
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
    },
    platform: {
      type: String,
      default: 'pc'
    }
  },
  data() {
    return {
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
        }, 500);
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
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.dealer {
  font-family: Alibaba-PuHuiTi;
  position: absolute;
  top: -12px;
  left: -40px;
  z-index: 10000;
  width: 768px;
  background: #f4f5f6;
  &-top {
    box-sizing: border-box;
    width: 100%;
    @include space-between;
    height: 76px;
    background: #ffffff;
    cursor: pointer;
    padding:0 20px 0 0;
    font-size: 16px;
    &-left {
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
  }
  &-container {
    box-sizing: border-box;
    height: 296px;
    overflow-y: scroll;
    padding: 36px 40px;
    ul {
      display: flex;
      flex-flow: row wrap;
      //justify-content: space-between;
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
          @include column;
          justify-content: flex-start;
          p:first-child {
            @include flex-start;
            width: 100%;
            font-size: 16px;
          }
          p:last-child {
            color: #A2AAB1;
            font-size: 14px;
            @include flex-start;
          }
        }
      }
    }
  }
}
</style>
