<template>
  <TestDrive
    id="test-drive-spa"
    v-if="lang === 'zh'"
    :vehicleType="params.vehicleType"
    :isShowQRCode="params.isShowQRCode"
    :platform="params.platform"
    :pagetype="'EX5-Z'"
    @testDriveSuccess="onTestDriveSuccess"
  />
</template>

<script>

import TestDrive from "@/components/testDrive/index";

export default {
  name: "MB",
  components: {
    TestDrive
  },
  data() {
    return{
      params: {
        platform: "mb",
        vehicleType: "W6",
        isShowQRCode: 0
      },
    }
  },
  methods: {
    onTestDriveSuccess(v) {
      Object.assign(this.params, v);
    },
  }
};
</script>

<style scoped>

</style>
