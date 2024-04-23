<template>
  <ContainerLayout :isHeader="true" :isFooter="false">
    <template slot="main">
      <div class="bigContainer">
        <div class="title">{{ data.postTitle }}</div>
        <div class="creationDate">
          {{ $t("newsPage.headLine") }} | {{ data.createTime }}
        </div>
        <div v-html="data.postContent" id="htmlSEE"></div>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import { appletPostDetail } from "@/api/News";
export default {
  name: "NewsMbDetail",
  components: {
    ContainerLayout
  },
  data() {
    return {
      data: {}
    };
  },
  updated() {
    const obj = document.getElementById("htmlSEE");
    let imgs = obj.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.width = "100%";
    }
  },
  created() {
    this.getDetail(this.$route.query.postId);
  },
  methods: {
    async getDetail(postId) {
      const {data, code } = await appletPostDetail({postsId: postId})
      if (code === 1) {
        this.data = data;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bigContainer {
  text-align: left;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 6%;
  margin-bottom: 6%;
  .title {
    font-size: 40px;
  }
  .creationDate {
    font-size: 18px;
    color: #cccccc;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #htmlSEE {
    line-height: 2;
    font-size: 16px;
  }
}
</style>
