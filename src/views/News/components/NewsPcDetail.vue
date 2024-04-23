<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
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
  name: "NewsPcDetail",
  components: {
    ContainerLayout
  },
  data() {
    return {
      data: {}
    };
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
  width: 70%;
  margin: 10% auto 6% auto;
  .title {
    font-size: 32px;
  }
  .creationDate {
    font-size: 18px;
    color: #cccccc;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #htmlSEE{
    line-height: 2;
    font-size: 16px;

  }
}
</style>
<style>
img{
  max-width: 100%;
}
</style>
