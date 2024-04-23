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
import PC from './components/pc'
import MB from './components/mb'
import dict from '@/mixins/dict'
export default {
  name: "EX-5",
  mixins: [dict],
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
