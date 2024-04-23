import { transferTime } from "@/utils/index.js";

export default {
  mounted() {
    this.init();
    // sessionStorage.setItem("start", new Date().getTime());
  },
  methods: {
    init() {
      // 页面总高
      let totalH =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      // // 可视高
      let clientH = window.innerHeight || document.documentElement.clientHeight;
      // // 滚动条卷去高度
      let scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      // 百分比
      let result = "";
      if (scrollH === 0) {
        result = ((clientH / totalH) * 100).toFixed(2);
      } else {
        result = (((scrollH + clientH) / totalH) * 100).toFixed(2);
      }
      if (result > 100) {
        result = 100;
      }
      let start = Number(sessionStorage.getItem("start"));
      if (
        this.$route &&
        this.$route.meta &&
        JSON.stringify(this.$route.meta) !== "{}"
      ) {
        const pageParams = {
          pagename: this.$route.meta.title || "-",
          pageType_var: this.$route.meta.type || "-",
          closeTime_var: transferTime(new Date().getTime(), 'yyyy-mm-dd HH:II:SS') || "-",
          startTime_var: transferTime(start, 'yyyy-mm-dd HH:II:SS') || "-",
          browseTime_var: new Date().getTime() - start,
          viewProprotion_var: result / 100 || "-"
        };
        console.log("是什么", pageParams);
        gio && gio("track", "timePageView_public", pageParams);
      }
    }
  }
};
