<template>
  <div class="home">
    <p class="text">测试字体</p>
    <p class="PC-text">测试字体</p>
  </div>
</template>

<script>
import Vehicles from "@/components/vehicles/hoverVideo";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "Home",
  components: {},
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 16px;
}
.PC-text {
  font-size: 16px;
}
</style>
