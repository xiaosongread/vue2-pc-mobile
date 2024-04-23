<template>
  <transition name="fade">
    <div
      class="toast"
      v-show="toast.status"
      :style="{ color: typeList.get(toast.type) }"
    >
      {{ toast.tip }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  props: {
    tip: {
      type: String,
      default: "请输入"
    },
    status: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      toast: {
        tip: this.tip,
        status: this.status,
        type: "info"
      },
      typeList: new Map([
        ["success", "#5cb87a"],
        ["warning", "#e6a23c"],
        ["fail", "#f56c6c"],
        ["info", "#8896b3"]
      ])
    };
  },
  methods: {
    toggleToast(key, type = 'info') {
      Object.assign(this.toast, { tip: key, type: type, status: true });
      setTimeout(() => {
        Object.assign(this.toast, { status: false });
      }, this.duration);
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  //width: 230px;
  background: #f1f1f2;
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  font-size: 16px;
  color: #26333f;
  box-sizing: border-box;
  padding: 20px;
  font-weight: bold;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
}
</style>
