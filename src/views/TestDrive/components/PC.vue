<template>
  <div
    id="test-drive-spa"
    class="test-drive-container"
    :style="{
      backgroundImage: `url(${testDriveBg})`
    }"
  >
    <!-- <img :src="testDriveBg" data-test="test" alt="预约试驾" /> -->
    <TestDrive
      :vehicleType="params.vehicleType"
      :isShowQRCode="params.isShowQRCode"
      :platform="params.platform"
      :pagetype="'W6'"
      @testDriveSuccess="onTestDriveSuccess"
    />
  </div>
</template>

<script>
import TestDrive from "@components/testDrive";

export default {
  name: "PC",
  components: {
    TestDrive
  },
  data() {
    return {
      params: {
        platform: "pc",
        vehicleType: this.$route.query.vehicleType || "W6",
        isShowQRCode: 0
      }
    };
  },
  computed: {
    testDriveBg: function() {
      return `${this.Resource}${this.params.vehicleType}/test_drive_bg.jpg`;
    }
  },
  methods: {
    onTestDriveSuccess(v) {
      Object.assign(this.params, v);
    }
  }
};
</script>

<style lang="scss" scoped>
.test-drive-container {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  text-align: center;
  background-size: cover;
  background-position: center bottom;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-origin: center;
    background-position: 50% 70%;
  }
}
</style>
