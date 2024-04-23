<template>
  <div class="bigContainer">
    <div class="newsListContainer">
      <div class="list">
        <div
          class="newsList"
          v-for="(item, index) in list"
          :key="index"
          @click="NewsMbDetail(item)"
        >
          <div class="newsImg">
            <img v-lazy="item.coverImage" alt=" " />
          </div>
          <div class="newsBottom">
            <div class="newsTitle">
              {{ item.postTitle }}
            </div>
            <div class="newsTime">{{ transferTime(item.creationDate, 'yyyy-mm') }}</div>
          </div>
        </div>
      </div>
      <div class="newsFooter" v-if="moreShow">
        <div class="moreBtn" @click="moreNews">
          {{ $t("newsPage.moreBtn") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { appletPostList } from "@/api/News";
import { transferTime } from '@/utils/index'
export default {
  name: "MB",
  data() {
    return {
      list: [],
      pageNo: 1,
      moreShow: true
    };
  },
  mounted() {},
  computed: {},
  created() {
    this.getList();
  },
  methods: {
    transferTime,
    getList() {
      const language = localStorage.getItem("language");
      let locale = ["zh", "en"].includes(language) ? language : "zh";
      let query = {
        pageNo: this.pageNo,
        showChannel: 5
      };
      if (locale === "en") {
        query.showChannel = 8;
      } else {
        query.showChannel = 5;
      }
      appletPostList(query)
        .then(res => {
          if (res.code === 1) {
            if (res.data.more === 0) {
              this.moreShow = false;
            } else {
              this.moreShow = true;
            }
            if (res.data.total === 0) {
              this.$toast(this.$t("newsPage.noMore"), "info");
            } else {
              this.list = this.list.concat(res.data.rows);
            }
          }
        })
        .catch(() => {
          // console.log("err", err);
        });
    },
    moreNews() {
      this.pageNo = this.pageNo + 1;
      this.getList();
    },
    NewsMbDetail(event) {
      this.$router.push({
        path: "/NewsMbDetail",
        query: { postId: event.postId }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.newsListContainer {
  background-color: #f4f5f6;
  padding-top: 3%;
}
.list {
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-wrap: wrap;
}
.newsList {
  width: 100%;
  margin-bottom: 20px;
}
.newsImg {
  width: 686px;
  height: 398px;
  text-align: left;
}
.newsImg img {
  width: 686px;
  height: 398px;
  object-fit: cover;
}
.newsBottom {
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: #ffffff;
  text-align: left;
  line-height: 40px;
  margin-top: -0.02rem;
}
.newsTitle {
  font-size: 28px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #333333;
  line-height: 40px;
  margin-bottom: 14px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.newsTime {
  font-size: 20px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #999999;
  line-height: 24px;
}
.newsFooter {
  margin-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
}
.moreBtn {
  width: 420px;
  height: 84px;
  border: 2px solid #333333;
  line-height: 84px;
  font-size: 28px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  border: 2px solid #333333;
}
</style>
