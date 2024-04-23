import { dict_list } from "@/api/common";
import { getUrlKey } from "@/utils/index";
const dict = {
  data() {
    return {
      dictLists: []
    };
  },
  created() {
    // this.onDict();
  },
  methods: {
    // 查询字典
    onDict() {
      dict_list()
        .then(res => {
          // console.log('请求成功', res.data.driveCrmPoint)
          this.dictLists = res.data.driveCrmPoint;
        })
        .catch(res => {
          console.log("字典请求失败", res);
        });
    },
  //  品专入参本地存储
    onParamsPZ() {
      const params = [
        {
          name: 'crmCampainId',
          value: getUrlKey("crmCampainId", window.location.href) || ""
        },
        {
          name: 'crmChannel',
          value: getUrlKey("crmChannel", window.location.href) || ""
        },
        {
          name: 'sourceChannel',
          value: getUrlKey("sourceChannel", window.location.href) || ""
        },
        {
          name: 'crmPoint',
          value: getUrlKey("crmPoint", window.location.href) || ""
        }
      ]
      params.map((item => {
        localStorage.setItem(item.name, item.value)
      }))
    }
  }
};
export default dict;
