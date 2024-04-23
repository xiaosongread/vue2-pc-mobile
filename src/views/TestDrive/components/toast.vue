<template>
  <transition name="fade">
    <div :class="[`toast toast-${platform}`]" v-show="status">{{ tip }}</div>
  </transition>
</template>

<script>
export default {
  name: "toast",
  props: {
    tip: {
      type: String,
      default: "",
      require: true
    },
    status: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    platform: {
      type: String,
      default: 'pc'
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  @media screen and (max-width: 750px) {
    width: 290px;
  }
  @media screen and (min-width: 750px) {
    width: auto;
    padding: 10px;
  }
  background: #f1f1f2;
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: #26333f;
  box-sizing: border-box;
  padding: 20px 0px;
  &-pc{
    font-size: 16px;
  }
  &-mb{
    font-size: 24px;
  }
}
</style>
