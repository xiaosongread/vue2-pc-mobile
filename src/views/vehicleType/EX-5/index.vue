<template>
  <ContainerLayout :isHeader="true" :isFooter="false" :swi="swiFlag">
    <template slot="main">
      <MB v-if="ClientWidth && lang !== 'en'"></MB>
      <MB1 v-else-if="ClientWidth && lang === 'en'"></MB1>
      <PC v-else-if="lang === 'zh'" />
      <PC1 v-else />
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from './components/pc'
import PC1 from '../EX-5-o/components/pc'
import MB from './components/mb'
import MB1 from './components/mbo'
import dict from '@/mixins/dict'
export default {
  name: "EX-5",
  mixins: [dict],
  components: {
    ContainerLayout,
    PC,
    MB,
    MB1,
    PC1
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
  mounted() {},
  computed: {},
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss" scoped></style>
