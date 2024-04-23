<template>
  <!--
参数	说明	类型	可选值	默认值
visible	是否显示 Dialog，支持 .sync 修饰符	boolean	—	false
title	Dialog 的标题，也可通过具名 slot （见下表）传入	string	—	—
width	Dialog 的宽度	string	—	50%
fullscreen	是否为全屏 Dialog	boolean	—	false
top	Dialog CSS 中的 margin-top 值	string	—	15vh
modal	是否需要遮罩层	boolean	—	true
modal-append-to-body	遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上	boolean	—	true
append-to-body	Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true	boolean	—	false
lock-scroll	是否在 Dialog 出现时将 body 滚动锁定	boolean	—	true
custom-class	Dialog 的自定义类名	string	—	—
close-on-click-modal	是否可以通过点击 modal 关闭 Dialog	boolean	—	true
close-on-press-escape	是否可以通过按下 ESC 关闭 Dialog	boolean	—	true
show-close	是否显示关闭按钮	boolean	—	true
before-close	关闭前的回调，会暂停 Dialog 的关闭	function(done)，done 用于关闭 Dialog	—	—
center	是否对头部和底部采用居中布局	boolean	—	false
¶ Slot
name	说明
—	Dialog 的内容
title	Dialog 标题区的内容
footer	Dialog 按钮操作区的内容
¶ Events
事件名称	说明	回调参数
open	Dialog 打开的回调	—
close	Dialog 关闭的回调	—
closed	Dialog 关闭动画结束时的回调	—
  -->
  <el-dialog
    class="moreDialog"
    :modal="true"
    :modal-append-to-body="true"
    :title="tittle"
    :visible.sync="visible"
    v-if="visible"
    :before-close="beClose"
    :width="width"
    :height="height"
    :close-on-click-modal="true"
    :show-close="true"
    :close-on-press-escape="true"
  >
    <div class="Subtitle">{{ data.subtitle }}</div>
    <div
      class="learnMoreContainer"
      :style="{ color: data.topColor }"
      v-lazy:background-image="data.top.background"
    >
      <div
        class="learnMoretitle learnMoreTitle"
        :class="{ learnMoreTitleEn: en }"
      >
        {{ data.top.title }}
      </div>
      <div class="learnMoreTitleTwo learnMoreTitle">
        {{ data.top.subtitle }}
      </div>
      <div class="learnMoreText">
        {{ data.top.text }}
      </div>
    </div>
    <div class="learnMoreListContainer">
      <div
        class="learnMoreList"
        v-for="(item, index) in data.list"
        :key="index"
      >
        <div class="learnMoreLeft">
          <div class="leftTop">
            <div>{{ item.title }}</div>
            <div>{{ item.subtitle }}</div>
          </div>
          <div class="leftBottom">{{ item.text }}</div>
        </div>
        <div class="learnMoreRight">
          <img v-lazy="item.img" alt="" />
        </div>
      </div>
    </div>
    <div
      v-if="data.center"
      :style="{ color: data.topColor }"
      class="learnMoreContainer"
      v-lazy:background-image="data.center.background"
    >
      <div class="learnMoretitle learnMoreTitle">
        {{ data.center.title }}
      </div>
      <div class="learnMoreTitleTwo learnMoreTitle">
        {{ data.center.subtitle }}
      </div>
      <div class="learnMoreText">
        {{ data.center.text }}
      </div>
    </div>
    <div class="learnMoreListContainer" v-if="data.list2">
      <div
        class="learnMoreList"
        v-for="(item, index) in data.list2"
        :key="index"
      >
        <div class="learnMoreLeft">
          <div class="leftTop">
            <div>{{ item.title }}</div>
            <div>{{ item.subtitle }}</div>
          </div>
          <div class="leftBottom">{{ item.text }}</div>
        </div>
        <div class="learnMoreRight">
          <img v-lazy="item.img" alt="" />
        </div>
      </div>
    </div>
    <div
      class="learnMoreContainer2"
      :style="{ color: data.bottomColor }"
      v-lazy:background-image="data.bottom.background"
    >
      <div class="learnMoretitle learnMoreTitle">
        {{ data.bottom.title }}
      </div>
      <div class="learnMoreTitleTwo learnMoreTitle">
        {{ data.bottom.subtitle }}
      </div>
      <div class="learnMoreText">
        {{ data.bottom.text }}
      </div>
    </div>
    <slot></slot>
    <!--<div class="divauto">
  <el-button type="success" size="mini" @click="showDio" round>Table</el-button>
  <el-button type="success" size="mini" @click="showDio" round>Table</el-button>
</div>-->
  </el-dialog>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    switchStyle: {
      type: Boolean,
      default: true
    },
    tittle: {
      type: String,
      default: "标题"
    },
    width: {
      type: String,
      default: "35%"
    },
    height: {
      type: String,
      default: "1000px"
    },
    data: {
      type: Object,
      default: () => {}
    },
    beforeClose: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      visible: this.isShow,
      en: false
    };
  },
  computed(){
    const language = localStorage.getItem("language");
    if (language === "en") {
      this.en = true;
    } else {
      this.en = false;
    }
  },
  watch: {
    isShow: {
      handler() {
        this.visible = this.isShow;
      }
    },
    data: {
      handler(val) {
        console.log(val);
      }
    }
  },
  methods: {
    beClose(done) {
      done();
      this.beforeClose();
    }
  },
  components: {}
};
</script>
<style>
.w6Dialog {
  z-index: 99999 !important;
}
.w6Dialog .el-dialog {
  background: none;
  box-shadow: none;
  margin-top: 64px !important;
}
.w6Dialog .el-dialog__title {
  color: #ffffff;
  font-size: 60px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  line-height: 82px;
}
.w6Dialog .el-icon-close {
  color: #ffffff;
  font-size: 34px;
}
.w6Dialog .el-dialog__header {
  padding: 0;
}
.w6Dialog .el-dialog__body {
  padding: 0;
}
.moreDialog {
  background-color: rgba(0, 0, 0, 0.5);
}
/* .w6Dialog { */
.learnMoreContainer {
  width: 1690px;
  height: 845px;
  background-size: 100% 100%;
  overflow: hidden;
}
.learnMoreTitle {
  font-size: 36px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  line-height: 50px;
  margin-left: 86px;
}
.learnMoretitle {
  margin-top: 550px;
}
.learnMoreTitleEn {
  margin-top: 443px;
}
.learnMoreText {
  font-size: 16px;
  font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
  font-weight: normal;
  line-height: 21px;
  width: 380px;
  margin-left: 86px;
  margin-top: 40px;
}
.learnMoreContainer2 {
  width: 1690px;
  height: 784px;
  background-size: 100% 100%;
  overflow: hidden;
}
.learnMoreTitle {
  font-size: 36px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  line-height: 50px;
  margin-left: 86px;
}
.learnMoretitle {
  margin-top: 528px;
}
.learnMoreText {
  font-size: 16px;
  font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
  font-weight: normal;
  line-height: 22px;
  width: 450px;
  margin-left: 86px;
  margin-top: 40px;
}
.Subtitle {
  font-size: 40px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #ffffff !important;
  line-height: 55px;
  margin-bottom: 34px;
}
.learnMoreListContainer {
  padding-top: 50px;
  width: 1690px;
  background-color: #ffffff;
}
.learnMoreList {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
}
.learnMoreLeft {
  margin-left: 60px;
}
.leftTop {
  font-size: 36px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  color: #666666;
  line-height: 50px;
  font-weight: normal;
  margin-top: 84px;
  margin-bottom: 40px;
  margin-right: 32px;
}
.leftBottom {
  font-size: 16px;
  font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #666666;
  line-height: 22px;
  margin-right: 60px;
}
.learnMoreRight {
  margin-right: 58px;
}
.learnMoreRight img {
  width: 1094px;
  height: 682px;
}
/* } */
</style>
