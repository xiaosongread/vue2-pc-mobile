<template>
  <transition name="fade">
    <div class="wrap" v-show="show" :style="{ color: typeList.get(type) }">{{text}}</div>
  </transition>
</template>

<script>
export default {
  name: "TOASTS",
  data() {
    return {
      show: false,
      text: '',
      type: 'info',
      typeList: new Map([
        ["success", "#5cb87a"],
        ["warning", "#e6a23c"],
        ["fail", "#f56c6c"],
        ["info", "#8896b3"]
      ])
    };
  },
}
</script>

<style lang="scss" scoped>
.wrap{
  position: absolute;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 12px 18px;
  background: #f2f2f2;
  font-size: 14px;
  border-radius: 10px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
}
</style>
