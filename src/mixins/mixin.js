import { data_drive_page } from "@/api/TestDrive";

const mixin = {
  data() {
    return {
      longitude: "",
      latitude: "",
      denied: null,
      carTypeList: []
    };
  },
  methods: {
    // 预约试驾数据初始化
    async onInitDrivePage(lng = "", lat = "") {
      if (lng && lat) {
        localStorage.setItem("location", "是");
      } else {
        localStorage.setItem("location", "否");
      }
      const { data } = await data_drive_page({
        longitude: lng,
        latitude: lat
      });
      this.carTypeList = data.list;
      this.onChangeCarType();
    },
    onChangeCarType() {
      const list = this.carTypeList[this.carTypeIndex];
      const isSmp = !!(list && list["smp"]);
      if (isSmp) {
        const params = {
          city: list["smp"]["cityCode"],
          cityName: list["smp"]["cityName"],
          province: list["smp"]["provinceCode"],
          provinceName: list["smp"]["provinceName"],
          smpName: list["smp"]["smpName"],
          smpCode: list["smp"]["smpCode"]
        };
        Object.assign(this.form, params);
      }
    },
    onGetLocation() {
      var map = new BMap.Map("allmap");
      var geolocation = new BMap.Geolocation();
      const that = this;
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            // console.log("成功", r);
            that.lng = String(r.point.lng);
            that.lat = String(r.point.lat);
            that.onInitDrivePage(that.lng, that.lat);
          } else {
            that.onInitDrivePage();
          }
        },
        function(r) {
          that.onInitDrivePage();
        }
      );
    }
  }
};
export default mixin;
