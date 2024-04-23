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
import PC from "./components/PC";
import MB from "./components/MB";

export default {
  components: {
    ContainerLayout,
    PC,
    MB
  },
  name: "TestDriveSPA"
};
</script>
