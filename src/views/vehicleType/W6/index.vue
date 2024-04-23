<template>
  <ContainerLayout :isHeader="true" :isFooter="false" :swi="swiFlag">
    <template slot="main">
      <MB v-if="ClientWidth && lang !== 'en'"></MB>
      <MB1 v-else-if="ClientWidth && lang === 'en'"></MB1>
      <PC v-else-if="!ClientWidth && lang === 'zh'" />
      <PC1 v-else />
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/pc";
import PC1 from "../W6o/components/pc";
// import MB from "../W6o/components/mb";
import MB from "./components/mb";
import MB1 from "../W6o/components/mb";
export default {
  name: "W6",
  components: {
    ContainerLayout,
    PC,
    PC1,
    MB,
    MB1
  },
  props: {
    swiFlag: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss" scoped></style>
