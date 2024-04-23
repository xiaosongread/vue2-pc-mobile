<template>
  <div class="pc" id="PC_MENU">
    <div class="logo"><img :src="icon.logo" width="100%" alt="小宋模板logo" @click="onJump('/', 'router')" /></div>
    <div class="list">
      <div class="item" v-for="(item, index) in menu_pc" :class="[item.children ? 'have' : 'none']" :key="index" @mouseenter="debounce(onMouseInter(item.children, index), 2000, false)" @mouseleave="debounce(onMouseLeave(index), 200, true)"  @click="onJump(item.url, item.type)">
        <div class="first">
          <span>{{ item.name }}</span>
          <img v-if="item.children" :src="[firstActiveIndex === index ? icon.active : icon.default]" alt="查看更多"/>
        </div>

        <div :class="[`second ${platformClass}`]" :id="`key${index}`">
          <div class="per" v-for="(v,k) in item.children" :key="k" @click="onJump(v.url, v.type)">{{v.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { debounce } from "@/utils/deviceType";

export default {
  name: "WebMenu",
  data() {
    return {
      icon: {
        logo: `${this.Resource}wm-logo-1.png`,
        default: `${this.Resource}pc_menu/arrow_default.svg`,
        active: `${this.Resource}pc_menu/arrow_active.svg`
      },
      menu_pc: this.$t('menuList'),
      menu_pc_second_active: null,
      firstActiveIndex: null
    };
  },
  computed: {
    platformClass: function() {
      return this.lang === 'en' ? 'second-en' : 'second-zh'
    }
  },
  methods: {
    debounce,
    onMouseInter(menu, index) {
      this.firstActiveIndex = index;
        $('#key' + index).stop(true, false).slideDown(500)
    },
    onMouseLeave(index){
      this.firstActiveIndex = null
      $('#key' + index).stop(true, false).slideUp(500)
    },
    onJump(url, type) {
      if (url && type === "link") {
        window.open(url, '_self');
      }
      if (url && type === "router") {
        this.$router.push(url);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #30bf94;
.pc {
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  box-sizing: border-box;
  @include space-between;
  font-size: 18px;
  color: #ffffff;
  padding: 0 122px;
  background: rgba(#1C1C1E, 0.9);
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .logo{
    cursor: pointer;
    @include center;
    width: 122px;
    img{
      max-width: 100%;
    }
  }
  .list{
    @include row;
    .item{
      cursor: pointer;
      position: relative;
      &:nth-child(n+2){
        margin-left: 50px;
      }
      .first{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        height: 80px;
        font-size: 18px;
        &:hover{
          color: $activeColor;
        }
        img{
          width: 11px;
          margin-left: 8px;
        }
      }
      .second{
        &-zh{
          width: calc(100% + 48px);
          display: none;
          text-align: center;
          position: absolute;
          top: 100%;
          left: 0;
          transform: translateX(-20px);
          font-size: 18px;
          //transform: scale(0.5);
          //zoom: 0.5;
          box-sizing: border-box;
          white-space: nowrap;
          .per{
            box-sizing: border-box;
            padding: 18px 5px;
            background: rgba(0, 0, 0, 0.3);
            &:hover{
              color: $activeColor;
            }
          }
        }
        &-en{
          width: calc(100% + 40px);
          display: none;
          text-align: center;
          position: absolute;
          top: 100%;
          left: 0;
          transform: translateX(-20px);
          font-size: 18px;
          //transform: scale(0.5);
          //zoom: 0.5;
          box-sizing: border-box;
          white-space: nowrap;
          .per{
            box-sizing: border-box;
            padding: 15px 5px;
            background: rgba(0, 0, 0, 0.3);
            &:hover{
              color: $activeColor;
            }
          }
        }
        @media screen and (max-width: 1024px){
          &-zh{
            width: calc(100% + 68px);
            display: none;
            text-align: center;
            position: absolute;
            top: 100%;
            left: 0;
            transform: translateX(-20px);
            font-size: 14px;
            box-sizing: border-box;
            white-space: nowrap;
            .per{
              width: 100%;
              box-sizing: border-box;
              padding: 15px 5px;
              background: rgba(0, 0, 0, 0.3);
              &:hover{
                color: $activeColor;
              }
            }
          }
          &-en{
            width: calc(100% + 100px);
            display: none;
            text-align: center;
            position: absolute;
            top: 100%;
            left: 0;
            transform: translateX(-35px);
            font-size: 28px;
            zoom: 0.6;
            box-sizing: border-box;
            white-space: nowrap;
            .per{
              box-sizing: border-box;
              padding: 30px 10px;
              background: rgba(0, 0, 0, 0.3);
              &:hover{
                color: $activeColor;
              }
            }
          }
        }
      }
    }
  }
}
</style>
