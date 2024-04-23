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
export default {
  name: "FinancialCalculator",
  components: {
    ContainerLayout,
    PC,
    MB
  }
}
</script>

<style scoped>

</style>