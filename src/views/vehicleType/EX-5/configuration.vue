<template>
  <ContainerLayout :isHeader="isHeader" :isFooter="true">
    <template slot="main">
      <div class="iframeContainer" style="min-height: calc(100vh - 120px)">
        <iframe v-if="env === 'production'" :src="this.Map.get(this.type)" id="iframe" width="100%" height="1500" frameborder="0"></iframe>
        <iframe v-else :src="this.MapTest.get(this.type)" id="iframes" width="100%" height="1500" frameborder="0"></iframe>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";

export default {
  name: "EX-5",
  components: {
    ContainerLayout
  },
  data() {
    return {
      isHeader: true,
      H: 2000,
      type: 'W6',
      MapTest: new Map([
        ['W6', 'https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-w6.html'],
        ['EX5-Z', 'https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-ex5-z.html'],
        ['EX5-JKX', 'https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-getngo-ex5.html'],
        ['E.5', 'https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-e5.html'],
        ['E.5-C', 'https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-e5-c.html'],
      ]),
      Map: new Map([
        ['W6', 'https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-w6.html'],
        ['EX5-Z', 'https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-ex5-z.html'],
        ['EX5-JKX', 'https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-getngo-ex5.html'],
        ['E.5', 'https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-e5.html'],
        ['E.5-C', 'https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-e5-c.html'],
      ]),
      env: ''
    };
  },
  created() {
    this.env = process.env.NODE_ENV
    // console.log('是什么环境', process.env.NODE_ENV)
    this.type = this.$route.query.type
    window.addEventListener('message', (e) => {
      // console.log('参数', e.data)
      if(this.isMobile()){
        this.H = e.data
      } else{
        this.H = e.data + 80
      }
    })
  },
  mounted() {

  },
  computed: {},
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss" scoped>
.iframeContainer{
  margin-top: 113px;
}
</style>
