<template>
  <div v-if="mobile" class="test-drive-success">
    <img class="bg-img" :src="pageData.imgUrl || ''" />
    <div class="jump-btn" @click="onJumpClick">
      {{ pageData.buttonName || '' }}
    </div>
  </div>
</template>

<script>
import { configInfo } from '@/api/TestDriveSuccess'

export default {
  name: 'TestDriveSuccess',
  data() {
    return {
      // 页面数据
      pageData: {},
      // 是否是移动端打开
      mobile: this.isMobileDevice
    }
  },
  created() {
    this.getPageData()
  },
  methods: {
    /**
     * 获取页面数据
     */
    async getPageData() {
      try {
        const res = await configInfo({
          pointType: 6,
          isCarUser: 0
        })
        if (res.code === 1) {
          this.pageData = res.data || {}
        }
      } catch (error) {
        this.$toast(error.desc || '抱歉，加载出错啦')
      }
    },
    /**
     * 监听跳转点击
     */
    onJumpClick() {
      if (this.pageData.linkUrl) {
        window.gio('track', {
          pagename: '预约试驾成功页',
          buttonname: this.pageData.buttonName || '-',
          platformname: '威马汽车官网',
          platformcode: 'PL1576561305851587',
          activityname: '-',
          activityID: '-',
          channelname: '威马汽车官网',
          channelcode: 'MC1577074835688809',
          pointname: '-',
          pointcode: '-',
          paramname: '-'
        })
        window.location.href = this.pageData.linkUrl
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.test-drive-success {
  // 背景图片
  .bg-img {
    display: block;
    width: 100vw;
  }
  // 跳转按钮
  .jump-btn {
    width: calc(100% - 60px);
    height: 88px;
    background-color: #31BFA0;
    line-height: 88px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    border: none;
    border-radius: 44px;
    position: fixed !important;
    bottom: 32px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
