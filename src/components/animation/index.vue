<template>
  <div class="animations">
    <InSide class="one wow fadeInUp" :platform="'pc'" :data="m7_01_data.one" />
    <OutSide class="one wow fadeInUp" :platform="'pc'" :data="m7_01_data.two" />
    <InSide class="one wow fadeInUp" :platform="'pc'" :data="m7_01_data.three" />
  </div>
</template>

<script>
import { WOW } from "wowjs";
import OutSide from "@/components/vehicles/dialog/outside";
import InSide from "@/components/vehicles/dialog/inside";

export default {
  name: "Animations",
  components: {
    OutSide,
    InSide
  },
  data(){
    return{
      m7_01_data: this.$t("M7Page.data_01")
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      const wow = new WOW({
        offset: -10,
        live: false
      })
      wow.init()
    })
  }
};
</script>

<style lang="scss" scoped>
.animations{
  .one{
    width: 100vw;
    object-position: right top;
  }
}
</style>
