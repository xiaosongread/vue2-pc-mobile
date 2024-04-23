<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <MB v-if="ClientWidth"/>
      <PC v-else/>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/pc";
import MB from "./components/mb";
import dict from "@/mixins/dict";
import gioPoint from "@/mixins/gioPoint";

export default {
  name: "E.5",
  mixins: [dict, gioPoint],
  components: {
    ContainerLayout,
    PC,
    MB
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss" scoped></style>
