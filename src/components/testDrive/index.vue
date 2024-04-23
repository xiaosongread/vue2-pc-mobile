<template>
  <div :class="[`container-${this.$attrs.platform}`]">
    <TestDrive v-bind="$attrs" v-on="$listeners"/>
    <Service v-bind="$attrs" v-if="showService" />
    <TestDriveSuccessPC v-bind="$attrs"></TestDriveSuccessPC>
  </div>
</template>

<script>
import Service from "./service";
import TestDrive from "./testDrive";
import TestDriveSuccessPC from "./testDriveSuccessPC";

export default {
  components: {
    Service,
    TestDrive,
    TestDriveSuccessPC
  },
  name: "TestDriveContainer",
  props: {
    showService: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container-pc {
  width: 537px;
  background: #ffffff;
  position: absolute;
  z-index: 2;
  top: 226px;
  right: 122px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
}
@media screen and (max-width: 1024px){
  .container-pc {
    width: 650px;
  }
}
</style>
