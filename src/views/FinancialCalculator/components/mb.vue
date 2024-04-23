<template>
  <div class="mb-financial">
    <iframe
      :src="url"
      class="iframe-con"
      scrolling="auto"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import Resource from "@/config/resource";
export default {
  name: "mb",
  data() {
    return {
      url: Resource.zhiXingHost + "wmmobile/app/index.html#/calculator"
    }
  }
}
</script>

<style lang="scss" scoped>
.mb-financial{
  .iframe-con{
    width: 100%;
    height: 100vh;
  }
}
</style>