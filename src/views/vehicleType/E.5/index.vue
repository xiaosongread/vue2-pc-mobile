<template>
  <ContainerLayout :isHeader="true" :isFooter="false">
    <template slot="main">
      <MB v-if="ClientWidth" />
      <PC v-else-if="!ClientWidth && lang === 'zh'" />
      <PC1 v-else />
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/pc";
import PC1 from "../E.5o/components/pc";
import MB from "./components/mb";
import dict from "@/mixins/dict";
import gioPoint from "@/mixins/gioPoint";

export default {
  name: "E.5",
  mixins: [dict, gioPoint],
  components: {
    ContainerLayout,
    PC,
    PC1,
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
