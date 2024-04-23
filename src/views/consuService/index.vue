<template>
  <ContainerLayout :isHeader="true" :isFooter="false">
    <template slot="main">
      <div class="consuService">
        <iframe
          id="iframe"
          marginwidth="0"
          marginheight="0"
          hspace="0"
          vspace="0"
          frameborder="0"
          scrolling="no"
          class="ifraAte"
          :src="iframeUrl"
        ></iframe>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import { data_imToken } from "@/api/TestDrive";
import ContainerLayout from "@/components/containerComponent";

export default {
  name: "consuService",
  data() {
    return {
      iframeUrl: ""
    };
  },
  components: {
    ContainerLayout
  },
  mounted() {
    this.onLineService();
  },
  methods: {
    onLineService() {
      let wmId = localStorage.getItem("openId");
      if (!wmId) {
        wmId = "WM" + new Date().getTime() + ((Math.random() * 100) | 0);
        localStorage.setItem("openId", wmId);
      }
      const params = {
        url: `https://${process.env.NODE_ENV === 'production' ? 'imlive' : 'imtest'}.wm-motor.com/visitor/mobile/pages/chat/chat.html?openId=${wmId}&type=1&channel=a`
      };
      data_imToken(params)
        .then(res => {
          this.iframeUrl = res.data.url;
        })
        .catch(() => {
          // console.log("err", err);
        });
    }
  }
};
</script>

<style lang="scss">
.consuService {
  .ifraAte {
    width: calc(100vw - 2px);
    overflow: hidden;
    height: calc(100vh - 120px);
    border: 0;
  }
}
</style>
