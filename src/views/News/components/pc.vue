<template>
  <div class="bigContainer">
    <div class="topBackground">
      <div class="wmNews">
        {{ $t("newsPage.headLine") }}
      </div>
    </div>
    <div class="newsListContainer">
      <div class="list">
        <div
          class="newsList"
          v-for="(item, index) in list"
          :key="index"
          :style="{ '--backgroundImage': 'url(' + item.coverImage + ')' }"
          @click="NewsPcDetail(item)"
        >
          <div class="newsImg">
            <img v-lazy="item.coverImage" :key="item.coverImage" alt="" />
          </div>
          <div class="newsBottom">
            <div class="newsTitle">
              {{ item.postTitle }}
            </div>
            <div class="newsTime">{{transferTime(item.creationDate,'yyyy-mm') }}</div>
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
  name: "PC",
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
  /*watch: {
    list: {
      handler(val) {
        val.map(function(item) {
          item.creationDate = new Date(parseInt(item.creationDate))
            .toLocaleDateString()
            .replace("/", "-")
            .replace("/", "-");
        });
      }
    }
  },*/
  methods: {
    transferTime,
    moreNews() {
      this.pageNo = this.pageNo + 1;
      this.getList();
    },
    getList() {
      const language = localStorage.getItem("language");
      let locale = ["zh", "en"].includes(language) ? language : "zh";
      let query = {
        pageNo: this.pageNo,
        showChannel: 4
      };
      if (locale === "en") {
        query.showChannel = 6;
      } else {
        query.showChannel = 4;
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
    NewsPcDetail(event) {
      this.$router.push({
        path: "/NewsPcDetail",
        query: { postId: event.postId }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.bigContainer {
  background-color: #f4f5f6;
}
.topBackground {
  background-image: url("https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/wm/welthub/3c75da70-48e5-11ec-983c-d1d008795e6d.png");
  background-size: 100% 100%;
  width: 100%;
  height: 380px;
  text-align: left;
}
.wmNews {
  height: 40px;
  font-size: 40px;
  font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #ffffff;
  line-height: 40px;
  letter-spacing: 4px;
  padding-top: 216px;
  padding-left: 198px;
}
.newsListContainer {
  margin-top: 70px;
}
.list {
  margin-left: 198px;
  display: flex;
  flex-wrap: wrap;
}
.newsList {
  width: 500px;
  margin-bottom: 30px;
  margin-right: 12px;
  cursor: pointer;
  overflow: hidden;
  background-color: #ffffff;
}
.newsImg {
  @include center;
  width: 100%;
  height: 290px;
  overflow: hidden;
  img {
    width: 100%;
    height: 290px;
    object-fit: cover;
    transition: 0.7s;
    &:hover{
      transform: scale(1.1);
    }
  }
}
.newsBottom {
  // background-color: #ffffff;
  text-align: left;
  font-size: 20px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #333333;
  padding-left: 26px;
  padding-right: 26px;
}
.newsTitle {
  font-size: 20px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  line-height: 27px;
  padding: 18px 0px;
}
.newsTime {
  font-size: 14px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #999999;
  line-height: 20px;
  margin-top: 10px;
  padding-bottom: 12px;
}
.newsFooter {
  margin-top: 50px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
}
.moreBtn {
  width: 210px;
  height: 42px;
  border: 1px solid #333333;
  line-height: 42px;
  cursor: pointer;
  font-size: 14px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #333333;
}
</style>
