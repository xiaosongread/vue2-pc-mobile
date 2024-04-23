<template>
  <ContainerLayout :is-header="true" :is-footer="true">
    <template slot="main">
      <div class="pc">
        <img
          width="100%"
          v-for="(item, index) in pc"
          :key="index"
          v-lazy="item"
          data-test="test"
        />
      </div>
      <div class="mb">
        <img v-lazy="mb" width="100%" data-test="test" alt="联系我们，专属顾问" />
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import gioPoint from "@/mixins/gioPoint";

export default {
  name: "counselor",
  components: {
    ContainerLayout
  },
  mixins: [gioPoint],
  data() {
    return {
      pc: [
        `${this.Resource}counselor/1@2x.jpg`,
        `${this.Resource}counselor/2@2x.jpg`,
        `${this.Resource}counselor/3@2x.jpg`
      ],
      mb: `${this.Resource}counselor/mb.jpg`
    };
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .pc {
    display: none;
  }
}
@media screen and (min-width: 750px) {
  .mb {
    display: none;
  }
}
</style>
