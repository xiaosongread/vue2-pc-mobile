import toast from "./index.vue";

export default {
  install(Vue) {
    const to = Vue.extend(toast);
    const vm = new to().$mount();
    document.body.appendChild(vm.$el);
    Vue.prototype.$toast = (text, type) => {
      vm.show = true;
      vm.text = text;
      vm.type = type;
      setTimeout(() => {
        vm.show = false;
      }, 2000);
    };
  }
};
