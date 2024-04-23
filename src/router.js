import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";

Vue.use(Router);
/*const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}*/

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "首页",
        type: "品牌宣传",
        headline: "威马汽车官网",
        keywords: "威马, 威马汽车,威马汽车官网,智能汽车",
        description:
          "威马汽车科技集团（WM Motor）成立于2015年，公司名字取自德语世界冠军（Weltmeister）。作为扎根于中国的硬科技创新代表，威马汽车自创立之初便制定了明确的集团发展“三步走”战略。威马汽车始终秉持”科技普惠“的初心，以“用得爽、用得起”的产品和服务，让每个中国家庭都拥有属于自己的新能源智能出行生活。"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/TestDrive",
      name: "TestDriveSpa",
      component: () => import("./views/TestDrive/index.vue"),
      meta: {
        title: "预约试驾",
        type: "预约试驾",
        headline: "威马W6/威马EX5-Z/威马M7预约试驾-威马汽车官网",
        keywords: "威马,威马汽车,威马预约试驾",
        description:
          "威马预约试驾频道为您提供在线预约试驾体验威马W6/威马EX5-Z/威马M7，我们将第一时间与您联系，帮助您获得更好的预约体验，来威马汽车官网预约试驾。"
      }
    },
    {
      path: "/Agreement",
      name: "Agreement",
      component: () => import("./views/Agreement/Agreement.vue")
    },
    {
      path: "/News",
      name: "News",
      component: () => import("./views/News/index.vue"),
      meta: {
        title: "新闻资讯",
        type: "品牌宣传",
        headline: "威马新闻 | 威马汽车官网-智能汽车头号实力派",
        keywords: "新能源汽车行业资讯",
        description:
          "威马汽车企业新闻提供新能源汽车行业前沿新鲜资讯,探测新能源汽车行业方向,引领新能源汽车行业的发展,打造智能汽车头号实力派."
      }
    },
    {
      path: "/W6",
      name: "W6",
      component: () => import("./views/vehicleType/W6/index.vue"),
      meta: {
        title: "W6",
        type: "车型介绍",
        headline: "威马W6价格、售价、续航、参数配置-威马汽车官网",
        keywords:
          "威马W6,威马W6价格,威马W6售价,威马W6续航,威马W6参数配置,威马汽车",
        description:
          "威马W6是国内首款量产的具备无人驾驶功能的智能电动车型 ，也是全球率先搭载全球首款实现量产的“云端智能无人泊车系统”（CloudAVP）车型。了解威马W6价格及配置参数，来威马汽车官网！"
      }
    },
    {
      path: "/NewsPcDetail",
      name: "NewsPcDetail",
      component: () => import("./views/News/components/NewsPcDetail.vue")
    },
    {
      path: "/NewsMbDetail",
      name: "NewsMbDetail",
      component: () => import("./views/News/components/NewsMbDetail.vue")
    },
    {
      path: "/EX-5",
      name: "EX-5",
      component: () => import("./views/vehicleType/EX-5/index.vue"),
      meta: {
        title: "EX5-Z",
        type: "车型介绍",
        headline: "威马EX5-Z价格、售价、续航、参数配置-威马汽车官网",
        keywords:
          "威马EX5-Z,威马EX5-Z价格,威马EX5-Z售价,威马EX5-Z续航,威马EX5-Z参数配置,威马汽车",
        description:
          "威马EX5-Z定位“零接触智能交互纯电SUV”，是为“泛Z世代”的“智慧能手”打造的专属座驾。全新威马EX5-Z共推出三款车型，补贴后售价区间为14.98万元—19.88万元，用户可享受“0首付”限时零售金融方案和3年免费充电权益。了解威马EX5-Z价格及配置参数，来威马汽车官网！"
      }
    },
    {
      path: "/E.5",
      name: "E.5",
      component: () => import("./views/vehicleType/E.5/index.vue"),
      meta: {
        title: "E5",
        type: "车型介绍",
        headline: "威马E.5pro价格、售价、续航、参数配置-威马汽车官网",
        keywords:
          "威马E.5pro,威马E.5pro价格,威马E.5pro售价,威马E.5pro续航,威马E.5pro参数配置,威马汽车",
        description:
          "全新威马E.5pro开启智能家轿新世代，颠覆传统油车与电动车高配即选配的传统思维，开启高配即标配的新世代。智客行版本和Pro版本主要配置均一致，长续航、大空间、全景天幕、智能化等核心配置全系标配。了解威马E.5pro价格及配置参数，来威马汽车官网！"
      }
    },
    {
      path: "/EX-6-PLUS",
      name: "EX-6-PLUS",
      component: () => import("./views/vehicleType/EX-6-Plus/index.vue")
    },
    {
      path: "/EX-5-JKX",
      name: "EX-5-JKX",
      component: () => import("./views/vehicleType/EX-5-JKX/index.vue"),
      meta: {
        title: "EX5即客行版",
        type: "车型介绍",
        headline: "威马EX5大客户版-智能交互纯电SUV",
        keywords: "威马EX5,SUV",
        description:
          "为出行量身定制，助力租赁、出行平台公司，提高运营效率、提升企业价值，即刻购买，畅想智慧出行。了解EX5大客户版价格及配置参数，来威马汽车官网！"
      }
    },
    {
      path: "/E5",
      name: "E.5",
      component: () => import("./views/vehicleType/E5/index.vue"),
      meta: {
        title: "E5",
        type: "车型介绍",
        headline: "威马E.5价格、售价、续航、参数配置-威马汽车官网",
        keywords:
          "威马E.5,威马E.5价格,威马E.5售价,威马E.5续航,威马E.5参数配置,威马汽车",
        description:
          "威马 E.5 采用 IP68 标准三元锂动力电池，提供超 500 公里长续航，快充由 30%－80% 仅需 39 分钟，搭载高温液冷系统。了解威马E.5价格及配置参数，来威马汽车官网！"
      }
    },
    {
      path: "/FinancialCalculator",
      name: "FinancialCalculator",
      component: () => import("./views/FinancialCalculator/index.vue"),
      meta: {
        title: "金融服务",
        type: "威马金服",
        headline: "威马金融，一站式汽车金融服务-威马汽车官网",
        keywords: "威马,威马汽车,威马金融服务,汽车金融",
        description:
          "威马汽车金融服务为威马用户提供个性和需求精心打造的汽车金融贷款服务平台，致力于为用户提供涵盖分期付款、融资租赁、银行贷款、汽车保险方案的一站式金融贷款方案服务。"
      }
    },
    {
      path: "/AfterSaleService",
      name: "AfterSaleService",
      component: () => import("./views/AfterSalesService/index.vue"),
      meta: {
        title: "车主尊享",
        type: "车主权益",
        headline: "威马尊享车主权益-威马汽车官网",
        keywords: "威马,威马汽车,威马车主权益",
        description:
          "威马车主轻松享有无忧保障及基础权益，无论何时，都能感受专业的服务支持。我们通过智能远程诊断系统，更高效的解决问题，实现服务效率和用车体验的提升。"
      }
    },
    {
      path: "/Configuration",
      name: "Configuration",
      component: () => import("./views/vehicleType/EX-5/configuration.vue")
    },
    {
      path: "/M7",
      name: "M7",
      component: () => import("./views/vehicleType/M7/index.vue"),
      meta: {
        title: "M7",
        type: "车型介绍",
        headline: "威马M7价格、售价、续航、参数配置-威马汽车官网",
        keywords:
          "威马M7,威马M7价格,威马M7售价,威马M7续航,威马M7参数配置,威马汽车",
        description:
          "威马M7是威马Master系列首款产品，凝聚了威马在设计、研发、制造、供应链管理等方面的深厚积淀。引领全场景智能驾驶和全场景智能交互新高度，成为全球首个全场景智能移动空间。了解威马M7价格及配置参数，来威马汽车官网！"
      }
    },
    {
      path: "/Reserve",
      name: "Reserve",
      component: () => import("./views/Reserve/index.vue"),
      meta: {
        title: "立即订购",
        type: "立即订购",
        headline: "威马立即订购-威马汽车官网",
        keywords: "威马汽车",
        description: "扫一扫，即刻订购您的爱车"
      }
    },
    {
      path: "/consuService",
      name: "consuService",
      component: () => import("./views/consuService/index.vue"),
      meta: {
        title: "咨询",
        type: "咨询"
      }
    },
    {
      path: "/Barsofgold",
      name: "Barsofgold",
      component: () => import("./views/Barsofgold/index.vue"),
      meta: {
        title: "一诺千金",
        type: "一诺千金"
      }
    },
    {
      path: "/TestDriveSuccess",
      name: "TestDriveSuccess",
      component: () => import("./views/TestDriveSuccess/index.vue"),
      meta: {
        title: "预约试驾成功页",
        type: "企微导流"
      }
    },
    {
      path: "/counselor",
      name: "Counselor",
      component: () => import("./views/counselor/index.vue"),
      meta: {
        title: "专属客服",
        type: "服务"
      }
    },
    {
      path: "/league",
      name: "League",
      component: () => import("./views/league/index.vue"),
      meta: {
        title: "合伙人加盟",
        type: "加盟"
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  const oldKeywords = document.getElementsByName("keywords").item(0);
  if (oldKeywords) {
    oldKeywords.remove();
  }
  const oldDescription = document.getElementsByName("description").item(0);
  if (oldDescription) {
    oldDescription.remove();
  }
  if (to.meta.description) {
    let head = document.getElementsByTagName("head");
    let meta0 = document.createElement("meta");
    meta0.name = "keywords";
    meta0.content = to.meta.keywords;
    head[0].appendChild(meta0);
    let meta1 = document.createElement("meta");
    meta1.name = "description";
    meta1.content = to.meta.description;
    head[0].appendChild(meta1);
  }
  if (to.meta.headline) {
    document.title = to.meta.headline;
  }
  next();
});
export default router;
