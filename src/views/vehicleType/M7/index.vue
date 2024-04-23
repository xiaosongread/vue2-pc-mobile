<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <MB v-if="ClientWidth"></MB>
      <PC v-else></PC>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/pc";
import MB from "./components/mb";
export default {
  name: "M7",
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
