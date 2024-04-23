import request from "@/utils/request";
import config from "@/config";
//
export const urlMap = {
    banner: "/os/banner/list",
};
// console.log('环境', process.env)
const BASE = process.env.NODE_ENV === 'development' ? config.BASE_API_BANNER : process.env.VUE_APP_BASE_API_BANNER
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
    urlMap[key] = BASE + urlMap[key];
});

// homePage Banner
export function banner(para) {
    return request({
        url: urlMap['banner'],
        method: "POST",
        data: para
    });
}
