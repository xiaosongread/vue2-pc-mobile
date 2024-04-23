<template>
<div class="smp" v-if="lang=== 'en'">
  <img v-lazy="spm" alt="SMP Retail Channel Coverage in China" data-test="test">
</div>
</template>

<script>
export default {
  name: "smpCover",
  data(){
    return {
      spm: `${this.Resource}smpCover.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.smp{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>
