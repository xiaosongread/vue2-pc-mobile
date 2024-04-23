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
import PC from './components/pc'
import MB from './components/mb'
export default {
  name: "JKX-Container",
  components: {
    ContainerLayout,
    PC,
    MB
  }
}
</script>

<style lang="scss" scoped>
.jkx-container{

}
</style>
