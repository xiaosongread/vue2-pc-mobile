import Resource from "@/config/resource";

export default {
  fixedWindow: [
    {
      icon: `${Resource.Resource}service-customer.png`,
      name: "专属客服",
      dia: true
    },
    {
      icon: `${Resource.Resource}onLine.png`,
      name: "咨询",
      dia: false
    },
    {
      icon: `${Resource.Resource}/phone.png`,
      name: "4006-999-666",
      dia: false
    },
    {
      icon: `${Resource.Resource}calculator.png`,
      name: "金融服务",
      type: "change",
      dia: false
    }
  ],
  TestDrive: "预约试驾",
  menuList: [
    {
      name: "M7",
      url: "/M7",
      type: "router"
    },
    {
      name: "W6",
      url: "/W6",
      type: "router"
    },
    {
      name: "EX5-Z",
      url: "/EX-5",
      type: "router"
    },
    {
      name: "E.5",
      url: "/E.5",
      type: "router"
    },
    {
      name: "大客户销售",
      url: "",
      children: [
        {
          name: "EX5",
          url: "/EX-5-JKX",
          type: "router"
        },
        {
          name: "E.5",
          url: "/E5",
          type: "router"
        }
      ]
    },
    {
      name: "成为车主",
      url: "",
      children: [
        {
          name: "立即订购",
          url: "/Reserve",
          type: "router"
        },
        {
          name: "门店查询",
          url: "https://official.wm-motor.com/network.html",
          type: "link"
        },
        {
          name: "金融服务",
          url: "/FinancialCalculator",
          type: "router"
        },
        {
          name: "车主尊享",
          url: "/AfterSaleService",
          type: "router"
        },
        {
          name: "购买渠道公告",
          url: "https://official.wm-motor.com/news/detail/338.html",
          type: "link"
        },
        {
          name: "动力电池回收",
          url: "https://official.wm-motor.com/batteryrecycle.html",
          type: "link"
        }
      ]
    },
    /*{
      name: "充电",
      url: "",
      children: [
        {
          name: "充电服务",
          url: "",
          type: "link"
        },
        {
          name: "即客行",
          url: "",
          type: "link"
        }
      ]
    },*/
    {
      name: "了解威马",
      url: "",
      children: [
        {
          name: "关于威马",
          url: "https://official.wm-motor.com/brand.html",
          type: "link"
        },
        {
          name: "威马智造",
          url: "https://official.wm-motor.com/plant.html",
          type: "link"
        },
        {
          name: "品牌中心",
          url: "https://brand.wm-motor.com/",
          type: "link"
        },
        {
          name: "品牌活动",
          url: "https://official.wm-motor.com/activities.html",
          type: "link"
        },
        {
          name: "新闻资讯",
          url: "/News",
          type: "router"
        },
        {
          name: "媒体下载",
          url: "https://official.wm-motor.com/download/pictures.html",
          type: "link"
        }
      ]
    },
    {
      name: "联系我们",
      url: "",
      children: [
        {
          name: "成为智行合伙人",
          url: "/league",
          type: "router"
        },
        {
          name: "WeCLUB",
          url: "https://official.wm-motor.com/fanclub.html",
          type: "link"
        },
        {
          name: "联系我们",
          url: "https://official.wm-motor.com/contactus.html",
          type: "link"
        },
        {
          name: "专属顾问",
          url: "/counselor",
          type: "router"
        }
      ]
    },
    {
      name: "加入我们",
      url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1",
      type: "link"
    },
    {
      name: "预约试驾",
      url: "/TestDrive",
      type: "router"
    }
  ],
  footerMenuList: {
    leftList: [
      {
        name: "探索威马"
      },
      {
        name: "品牌故事",
        type: "link",
        url: "https://official.wm-motor.com/brand.html"
      },
      {
        name: "威马制造",
        type: "link",
        url: "https://official.wm-motor.com/plant.html"
      },
      {
        name: "品牌活动",
        type: "link",
        url: "https://official.wm-motor.com/activities.html"
      } /*,
      {
        name: "WeCLUB",
        type: "link",
        url: "https://official.wm-motor.com/fanclub.html"
      }*/
    ],
    rightList: [
      {
        name: "携手威马"
      },
      {
        name: "成为智行合伙人",
        type: "link",
        url: "https://official.wm-motor.com/investment.html"
      },
      {
        name: "WeCLUB威马车友俱乐部",
        type: "link",
        url: "https://official.wm-motor.com/fanclub.html"
      },
      {
        name: "加入我们",
        type: "link",
        url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1"
      }
    ]
  },
  commonSet: {
    moreConfig: "查看配置",
    seeMore: "了解更多"
  },
  homePage: {
    consulting: "车型咨询",
    m7Name: require("@/static/M7/slogan-name.png"),
    m7Name_pc: require("@/static/M7/slogan-name-pc.png"),
    wmListTitle: "威马全系车型",
    comprehensive: "综合补贴后:",
    list: [
      {
        name: `${Resource.Resource}home/pc/M7-name.png`,
        hoverName: `${Resource.Resource}M7/slogan-name-pc.png`,
        desc: ["威马首款全场景智能轿车", "敬请期待"],
        img: `${Resource.Resource}home/pc/M7Car.png`,
        bg: `${Resource.Resource}home/pc/M7hover.png`,
        url: "/M7",
        video:
          "https://cms-cdn-dev.wm-imotor.com/system/resources/100/object/EX5%E4%BA%A7%E5%93%81%E8%A7%86%E9%A2%91-%E5%85%A8%E5%A4%A9%E5%80%99%E7%94%B5%E6%B1%A0%E5%8C%85.20190108150219261145531.mp4",
        poster: "",
        ref: "video1"
      },
      {
        name: require("@/static/phoneImg/W6-Name.png"),
        hoverName: require("@/static/phoneImg/W6-HoverName.png"),
        desc: ["超算力可进化智能纯电SUV", "¥19.38万起"],
        img: require("@/static/phoneImg/W6Car.png"),
        bg: require("@/static/phoneImg/W6CarHover.png"),
        url: "/W6",
        video: require("@/static/a.mp4"),
        poster: "",
        ref: "video2"
      },
      {
        name: require("@/static/phoneImg/EX5-Name.png"),
        hoverName: require("@/static/phoneImg/EX5-HoverName.png"),
        desc: ["零接触智能交互纯电SUV", "¥16.98万起"],
        img: require("@/static/phoneImg/EX5Car0923.png"),
        bg: require("@/static/phoneImg/EX5CarHover0923.jpg"),
        url: "/EX-5",
        video:
          "https://cms-cdn-dev.wm-imotor.com/system/resources/99/object/EX5%E4%BA%A7%E5%93%81%E8%A7%86%E9%A2%91-%E9%92%A2%E7%BE%BD%E8%BD%A6%E8%BA%AB.20190108150819007191118.mp4",
        poster: "",
        ref: "video3"
      },
      {
        name: require("@/static/phoneImg/E5-Name.png"),
        hoverName: require("@/static/phoneImg/E5-HoverName.png"),
        desc: ["长续航大空间 智能纯电家轿", "¥18.01万起"],
        img: require("@/static/phoneImg/E5Car.png"),
        bg: require("@/static/phoneImg/E5CarHover.jpg"),
        url: "/E.5",
        video: "",
        poster: "",
        ref: "video3"
      }
      // {
      //   name: require("@/static/phoneImg/EX6PLUS-Name.png"),
      //   hoverName: require("@/static/phoneImg/EX6PLUS-HoverName.png"),
      //   desc: ["智能大6座纯电SUV", "￥27.99万起"],
      //   img: require("@/static/phoneImg/EX6PlusCar.png"),
      //   url: "/EX-6-PLUS",
      //   video:
      //     "https://cms-cdn-dev.wm-imotor.com/system/resources/100/object/EX5%E4%BA%A7%E5%93%81%E8%A7%86%E9%A2%91-%E5%85%A8%E5%A4%A9%E5%80%99%E7%94%B5%E6%B1%A0%E5%8C%85.20190108150219261145531.mp4",
      //   poster: "",
      //   ref: "video4"
      // }
    ],
    experienceTitle: "体验威马"
  },
  newsPage: {
    headLine: "威马新闻",
    moreBtn: "查看更多",
    noMore: "没有更多了"
  },
  W6Page: {
    bannerData: {
      vehicleName: `${Resource.Resource}W6/pc/slogan-name.png`,
      title: `智能电动车停车专家`,
      subtitle: `超算力可进化智能纯电SUV`,
      price: `综合补贴后：¥<b style="font-size:1.5em;font-weight: normal">189,000</b>元起`,
      btn: [
        {
          name: "预约试驾",
          vehicle: "w6",
          type: "drive",
          class: "btn-white",
          show: ["zh"]
        },
        {
          name: "查看配置",
          vehicle: "W6",
          type: "sheet",
          class: "btn-transparent btn-last",
          show: ["zh"]
        }
      ],
      desc: [
        {
          headline: "好开",
          desc: "智能泊车全家桶<br>Living Pilot 3.0智行辅助系统"
        },
        {
          headline: "好用",
          desc: "全新WIMI语音助手<br>OTA全域升级"
        },
        {
          headline: "好玩",
          desc: "自定义场景编程（SOA）<br>反向充电"
        }
      ]
    },
    view3Data: {
      btn: "全景看车",
      params: [`最大功率`, `最大续航旅程`, "充电时间", "（从30%到80%）"],
      appearance: [
        {
          name: "探索蓝",
          color: "#476B8D"
        },
        {
          name: "无极灰",
          color: "#464C4D"
        },
        {
          name: "晨曦绿",
          color: "#B4BFA5"
        },
        {
          name: "无畏绿",
          color: "#3E4439"
        },
        {
          name: "电磁红",
          color: "#A0212D"
        },
        {
          name: "竞速橙",
          color: "#E44326"
        },
        {
          name: "星际黑",
          color: "#151616"
        },
        {
          name: "灵感白",
          color: "#DCDCDC"
        }
      ],
      appearancemb: [
        {
          name: "探索蓝",
          color: "#476B8D"
        },
        {
          name: "无极灰",
          color: "#464C4D"
        },
        {
          name: "晨曦绿",
          color: "#B4BFA5"
        },
        {
          name: "无畏绿",
          color: "#3E4439"
        },
        {
          name: "电磁红",
          color: "#A0212D"
        },
        {
          name: "竞速橙",
          color: "#E44326"
        },
        {
          name: "星际黑",
          color: "#151616"
        },
        {
          name: "灵感白",
          color: "#DCDCDC"
        }
      ]
    },
    title: "国内首款无人驾驶量产车型",
    title2: "超算力可进化智能纯电SUV",
    descList: [
      {
        key: "w6_01",
        title: "Design | 科技颜值",
        bg: `${Resource.Resource}W6/pc/desc_bg_01.png`
      },
      {
        key: "w6_02",
        title: "Intelligent | 舒享座舱",
        bg: `${Resource.Resource}W6/pc/desc_bg_02.png`
      },
      {
        key: "w6_03",
        title: "Performance | 智能驾驶",
        bg: `${Resource.Resource}W6/pc/desc_bg_03.png`
      },
      {
        key: "w6_04",
        title: "Stability | 高效三电",
        bg: `${Resource.Resource}W6/pc/desc_bg_04.png`
      },
      {
        key: "w6_05",
        title: "Safety | 多维智护",
        bg: `${Resource.Resource}W6/pc/desc_bg_05.png`
      }
    ],
    IntelList3Bg: `${Resource.Resource}W6/pc/IntelBg2_zh.png`,
    w6_01_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/dia-in-01.png`,
        details: [
          {
            title: `风塑其型 色赋其艺`,
            subTitle: `"宇航科技"造型理念`,
            desc: `整车外观造型采用“宇航科技”造型理念，由航天飞船圆润饱满的造型汲取设计灵感，塑造出符合时代审美方向的极简风格。“机翼式特征线造型设计”在车头与车尾之间构成呼应，润圆曲面车身结合隐藏式门把手，在大量风洞测试下实现了0.3cd的超低风阻系数，悬浮式车顶与“太空船式尾翼”设计彰显了经典运动SUV的大气比例。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi1.png`,
        details: [
          {
            title: `豪华座椅 自带记忆`,
            subTitle: `豪华真皮座椅`,
            desc: `集高级材质、科学设计、多种功能于一身的豪华座椅，在设计上秉承人体工程学理念，不同部位具有不同的软硬度。Nappa真皮材质，触感细腻、富有弹性。座椅可电动调节并支持记忆座椅位置，关联威马ID后，上车即获得专属坐姿。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi2.png`,
        details: [
          {
            title: `来，交个朋友`,
            subTitle: `隐藏式感应门把手`,
            desc: `第一时间感觉你的到来，隐藏式的门把手自动弹开，就像早已等候多时的朋友。内嵌式设计，时尚美观，更减少风阻，降低车辆能耗。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi3.png`,
        details: [
          {
            title: `一靠近 就有好心情`,
            subTitle: `智能发光LOGO`,
            desc: `通过不同方式的闪烁效果呈现解锁迎宾、充电进度提示等车辆状态。无论白天黑夜，会发光的LOGO在道路上都足够靓眼。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi4.png`,
        details: [
          {
            title: `全新色彩 一眼来电`,
            subTitle: `灵感双色车身`,
            desc: `通过超级计算机仿真模拟，威马W6在1600万种颜色中臻选8种彰显潮范的时尚颜色，无畏绿、探索蓝、竞速橙、晨曦绿、星际黑、电磁红、灵感白、无极灰。同时吸取海量用户建议，共创更加个性化的双色车身配色方案，一出场即惊艳全场。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/designBg2.png`,
        details: [
          {
            title: `亮眼时刻 焦点所向<br>智能灯光系统`,
            subTitle: `（*PRO全能版/ACE极智版）`,
            desc: `车头M型一体式贯穿灯组具有极高的识别度，既是黑夜中的守护者，又恰似一场行走的灯光秀。尾部采用三段式贯穿位置灯、流水式转向灯及矩阵式刹车灯/倒车灯，提升整车档次感。搭载的HMA自动远近光切换功能会分析道路灯光和照明环境，并自动切换灯光，始终保障路面清晰。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi5.png`,
        details: [
          {
            title: `造型别致 质感出众`,
            subTitle: `刀锋钥匙`,
            desc: `威马W6率先使用全新刀锋造型钥匙，正面设有智能发光logo，具备无线充电功能，可放置无线充电区域随时补充电量。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi6.png`,
        details: [
          {
            title: `匠心设计 舒适轻奢`,
            subTitle: `精致内饰`,
            desc: `双联屏上方采用帽檐设计，有效遮挡阳光照射，大幅度降低屏幕反光率，提升可视度。风琴式空调出风口提升高级感，旋转式电子档杆增加科技感，沙漏式中央杯架装置提高实用性。全新车窗控制器，触感更加细腻；银拉丝装饰饰板，采用仿金属纹理拉丝工艺，大幅增加车内科技感；鱼鳞纹钢琴漆面板，彰显高级品味`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/designBg3.png`,
        details: [
          {
            title: `出色氛围 分外出众`,
            subTitle: `32色智能随动氛围灯`,
            desc: `根据不同生活场景定制的智能氛围灯，可切换多种闪烁模式，无论哪种氛围，自己决定。`
          }
        ]
      }
    ],
    w6_01_data: {
      title: [`Design | 科技颜值`],
      one: {
        list: [
          {
            titleColor: "#666666",
            title: `风塑其型 色赋其艺<br>"宇航科技"造型理念`,
            desc: `整车外观造型采用“宇航科技”造型理念，由航天飞船圆润<br>饱满的造型汲取设计灵感，塑造出符合时代审美方向的极简<br>风格。“机翼式特征线造型设计”在车头与车尾之间构成呼<br>应，润圆曲面车身结合隐藏式门把手，在大量风洞测试下实<br>现了0.3cd的超低风阻系数，悬浮式车顶与“太空船式尾<br>翼”设计彰显了经典运动SUV的大气比例。`,
            descColor: "#666666",
            bg: `${Resource.Resource}W6/pc/dia-in-01.png`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            desc: [
              {
                title: "豪华座椅 自带记忆<br>豪华真皮座椅",
                desc: "集高级材质、科学设计、多种功能于一身的豪华座椅，在设计上秉承人体工程学理念，不同部位具有不同的软硬度。Nappa真皮材质，触感细腻、富有弹性。座椅可电动调节并支持记忆座椅位置，关联威马ID后，上车即获得专属坐姿。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi1.png`
          },
          {
            top: true,
            desc: [
              {
                title: "来，交个朋友<br>隐藏式感应门把手",
                desc: "第一时间感觉你的到来，隐藏式的门把手自动弹开，就像早已等候多时的朋友。内嵌式设计，时尚美观，更减少风阻，降低车辆能耗。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi2.png`
          },
          {
            top: true,
            desc: [
              {
                title: "一靠近 就有好心情<br>智能发光LOGO",
                desc: "通过不同方式的闪烁效果呈现解锁迎宾、充电进度提示等车辆状态。无论白天黑夜，会发光的LOGO在道路上都足够靓眼。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi3.png`
          },
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: "全新色彩 一眼来电<br>灵感双色车身",
                desc: "通过超级计算机仿真模拟，威马W6在1600万种颜色中臻选8种彰显潮范的时尚颜色，无畏绿、探索蓝、竞速橙、晨曦绿、星际黑、电磁红、灵感白、无极灰。同时吸取海量用户建议，共创更加个性化的双色车身配色方案，一出场即惊艳全场。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi4.png`
          }
        ]
      },
      three: {
        list: [
          {
            title: `亮眼时刻 焦点所向<br>智能灯光系统`,
            desc: `车头M型一体式贯穿灯组具有极高的识别度，既是黑夜中的<br>守护者，又恰似一场行走的灯光秀。尾部采用三段式贯穿位<br>置灯、流水式转向灯及矩阵式刹车灯/倒车灯，提升整车档<br>次感。搭载的HMA自动远近光切换功能会分析道路灯光和<br>照明环境，并自动切换灯光，始终保障路面清晰。`,
            bg: `${Resource.Resource}W6/pc/designBg2.png`
          }
        ]
      },
      foer: {
        list: [
          {
            top: true,
            desc: [
              {
                title: "造型别致 质感出众<br>刀锋钥匙",
                desc: "威马W6率先使用全新刀锋造型钥匙，正面设有智能发光<br>logo，具备无线充电功能，可放置无线充电区域随时补充电量。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi5.png`
          },
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: "匠心设计 舒适轻奢<br>精致内饰",
                desc: "双联屏上方采用帽檐设计，有效遮挡阳光照射，大幅度降低<br>屏幕反光率，提升可视度。风琴式空调出风口提升高级感，<br>旋转式电子档杆增加科技感，沙漏式中央杯架装置提高实用<br>性。全新车窗控制器，触感更加细腻；银拉丝装饰饰板，采<br>用仿金属纹理拉丝工艺，大幅增加车内科技感；鱼鳞纹钢琴<br>漆面板，彰显高级品味 "
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi6.png`
          }
        ]
      },
      five: {
        list: [
          {
            padding: true,
            title: `出色氛围 分外出众<br>32色智能随动氛围灯`,
            desc: `根据不同生活场景定制的智能氛围灯，可切换多种闪烁模<br>式，无论哪种氛围，自己决定。`,
            bg: `${Resource.Resource}W6/pc/designBg3.png`
          }
        ]
      }
    },
    w6_02_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/IntelBg1.png`,
        details: [
          {
            title: `你的需求 秒被感知`,
            subTitle: `Living Mate全车交互系统`,
            desc: `威马全新一代智慧数字座舱，采用高通首款车规级7纳米SA8155芯片，不仅拥有强大的计算、移位和存储能力，更是在3D图像和特效处理等方面获长足进步。相比上代座舱芯片算力提升8.5倍、图像处理能力提升20倍。在强悍的算力支持下，全新WIMI语音助手、华为娱乐生态、人脸识别系统、自定义场景编程等功能，给你带来全新的智慧出行体验。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/Intel1.png`,
        details: [
          {
            title: `说句话 全搞定`,
            subTitle: `全新WIMI语音助手`,
            desc: `全新而来的WIMI语音助手升级上线，覆盖车控、娱乐与信息查询等108项功能，进一步拓宽语音车控的执行范围。WIMI语音助手支持自然唤醒、关键词唤醒、快捷指令唤醒等多种交互方式，具备左右双区音源识别能力，支持连续自然语音对话，并可实现一句话连续执行三个指令。不断进化，只为你一句话。`
          },
          {
            title: `车机手机 跨屏共享`,
            subTitle: `华为娱乐生态`,
            desc: `华为娱乐生态提供海量视频、音乐、电台资源，24小时无限量点播。智慧助手打通“手机-车-家”场景，可将家居数据、穿戴数据、手机待办数据等信息同步，实现车内、车外生活无缝衔接。即点即用10余项快应用涵盖视频、新闻、育儿、工具、生活等各类场景，智能用车一键直达。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/Intel2.png`,
        details: [
          {
            title: `万千风格 任意组合`,
            subTitle: `自定义场景编程`,
            desc: `作为首个以用户定义汽车的量产车型，威马W6彻底改变你的用车习惯和体验。你可以像搭积木一样在APP开启自主编程，实现驾驶辅助配置、车窗、座椅、空调、驾驶模式、音乐、氛围灯等超过200项功能的自由组合与设定，并按照自己的用车喜好，制作成不同出行风格的场景卡片。完成操作后，添加的场景模式会按照用户设定的触发条件轻松唤醒，并支持远程“遥控运行”，即刻开启风格万千的用车乐趣。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/IntelBg2_zh.png`,
        details: [
          {
            title: `一举一动 面面俱到`,
            subTitle: `专属威马ID`,
            desc: `每个用户都可设置专属的威马ID，进车3s内即可识别并关联，从座椅位置到系统使用习惯，都可极速同步。人脸识别还拥有主动驾驶疲劳监测及多项人车交互功能，坐进车里，全都依你。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/comfort1.png`,
        details: [
          {
            title: `你的眼界 不只眼前`,
            subTitle: `三屏互联`,
            desc: `威马W6提供12.3英寸悬浮式智能屏、12.3英寸互动全液晶数字仪表及i-Touch车控屏组成的三屏互联系统，60hz屏幕刷新率实现流畅细腻的显示效果，触屏指令毫秒级响应，精彩时刻从车内开始。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/Intel3.png`,
        details: [
          {
            title: "声临其境  沉浸享受",
            subTitle: "WM立体剧院式环绕音响",
            desc: "国际顶级调音师专业调校，全车9+1大功率扬声器，高、中、低音细腻层次分布，音场更丰富，音质更细腻，达到剧院级音响体验，震撼演绎逼真3D现场。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform3.png`,
        details: [
          {
            title: "你的移动进化论",
            subTitle: "整车OTA升级",
            desc: "全新SOA电子电气架构实现威马W6整车级OTA升级，创新的备份升级策略配合车载以太网，可对驾驶模块、车身模块、娱乐模块等在内的整车五大功能模块33项硬件控制系统，进行快速OTA升级，不断满足用户多元化需求，让车“越用越好用”，真正实现“用户定义汽车”。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/wm5.png`,
        details: [
          {
            title: "氛围拉满  想唱就唱",
            subTitle: "雷石KTV",
            desc: "支持氛围灯随唱联动，只需将麦克风插在车内USB接口上，便可直接在车机中实现“搜歌-点歌-唱歌-切歌”等操作。开启肆意的K歌之旅，让充电、长途驾驶场景不再无聊。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/IntelBg3.png`,
        details: [
          {
            title: "露营必备 用电自由",
            subTitle: "3.3kW反向充电",
            desc: "化身“特大号充电宝”，野外露营的绝佳拍档！威马W6具备3.3kW大功率外放电功能，不仅根除手机、笔记本电脑等小功率设备的电量焦虑，还可满足电饭煲、电磁炉、破壁机、便携冰箱等家用电器的随心使用。在广袤的草原上打游戏、看电影，在蔚蓝的天幕下喝咖啡、泡热茶，带来便捷、安全的高品质户外用电生活。"
          }
        ]
      },
    ],
    w6_02_data: {
      title: ["Intelligent | 舒享座舱"],
      one: {
        list: [
          {
            bg: `${Resource.Resource}W6/pc/IntelBg1.png`,
            title: `你的需求 秒被感知<br>Living Engine全车交互系统`,
            desc: `威马全新一代智慧数字座舱，采用高通首款车规级7纳米<br>SA8155芯片，相比上代座舱芯片算力提升8.5倍、图像处理<br>能力提升20倍。在强悍的算力支持下，全新WIMI语音助手、<br>华为娱乐生态、人脸识别系统、自定义场景编程等功能，给<br>你带来全新的智慧出行体验。`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: `说句话 全搞定<br>全新WIMI语音助手`,
                desc: "全新而来的WIMI语音助手升级上线，覆盖车控、娱乐与信息查询等108项功能，进一步拓宽语音车控的执行范围。WIMI语音助手支持自然唤醒、关键词唤醒、快捷指令唤醒等多种交互方式，具备左右双区音源识别能力，支持连续自然语音对话，并可实现一句话连续执行三个指令。不断进化，只为你一句话。"
              },
              {
                title: "车机手机 跨屏共享<br>华为娱乐生态",
                desc: "华为娱乐生态提供海量视频、音乐、电台资源，24小时无限量点播。智慧助手打通“手机-车-家”场景，可将家居数据、穿戴数据、手机待办数据等信息同步，实现车内、车外生活无缝衔接。即点即用10余项快应用涵盖视频、新闻、育儿、工具、生活等各类场景，智能用车一键直达。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/Intel1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `万千风格 任意组合<br>自定义场景编程`,
                desc: "作为首个以用户定义汽车的量产车型，威马W6彻底改变你的用车习惯和体验。你可以像搭积木一样在APP开启自主编程，实现驾驶辅助配置、车窗、座椅、空调、驾驶模式、音乐、氛围灯等超过200项功能的自由组合与设定，并按照自己的用车喜好，制作成不同出行风格的场景卡片。完成操作后，添加的场景模式会按照用户设定的触发条件轻松唤醒，并支持远程“遥控运行”，即刻开启风格万千的用车乐趣。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/Intel2.png`
          }
        ]
      },
      three: {
        list: [
          {
            bg: `${Resource.Resource}W6/pc/IntelBg2_zh.png`,
            title: `一举一动 面面俱到<br>专属威马ID`,
            mbTitle: "一举一动 面面俱到",
            mbSubtitle: "专属威马ID",
            desc:
              "每个用户都可设置专属的威马ID，进车3s内即可识别并关<br>联，从座椅位置到系统使用习惯，都可极速同步。人脸识别<br>还拥有主动驾驶疲劳监测及多项人车交互功能，坐进车里，<br>全都依你。"
          }
        ]
      },
      foer: {
        list: [
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: `你的眼界 不只眼前<br>三屏互联`,
                desc: `威马W6提供12.3英寸悬浮式智能屏、12.3英寸互动全液晶数字仪表及i-Touch车控屏组成的三屏互联系统，60hz屏幕刷新率实现流畅细腻的显示效果，触屏指令毫秒级响应，精彩时刻从车内开始。`
              }
            ],
            bg: `${Resource.Resource}W6/pc/comfort1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `声临其境  沉浸享受<br>WM立体剧院式环绕音响`,
                mbTitle: "声临其境  沉浸享受",
                mbSubtitle: "WM立体剧院式环绕音响",
                bg: `${Resource.Resource}W6/pc/Intel3.png`,
                desc:
                  "国际顶级调音师专业调校，全车9+1大功率扬声器，高、中、低音细腻层次分布，音场更丰富，音质更细腻，达到剧院级音响体验，震撼演绎逼真3D现场。",
                mbDesc:
                  "国际顶级调音师专业调校，全车9+1大功率扬声器，高、中、低音细腻层次分布，音场更丰富，音质更细腻，达到剧院级音响体验，震撼演绎逼真3D现场。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/Intel3.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `你的移动进化论<br>整车OTA升级`,
                desc: "全新SOA电子电气架构实现威马W6整车级OTA升级，创新的备份升级策略配合车载以太网，可对驾驶模块、车身模块、娱乐模块等在内的整车五大功能模块33项硬件控制系统，进行快速OTA升级，不断满足用户多元化需求，让车“越用越好用”，真正实现“用户定义汽车”。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform3.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `氛围拉满  想唱就唱<br>雷石KTV`,
                desc:
                  "支持氛围灯随唱联动，只需将麦克风插在车内USB接口上，便可直接在车机中实现“搜歌-点歌-唱歌-切歌”等操作。开启肆意的K歌之旅，让充电、长途驾驶场景不再无聊。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/wm5.png`
          }
        ]
      },
      five: {
        list: [
          {
            padding: true,
            bg: `${Resource.Resource}W6/pc/IntelBg3.png`,
            title: `露营必备 用电自由<br>3.3kW反向充电`,
            desc: `化身“特大号充电宝”，野外露营的绝佳拍档！威马W6具备<br>3.3kW大功率外放电功能，不仅根除手机、笔记本电脑等小<br>功率设备的电量焦虑，还可满足电饭煲、电磁炉、破壁机、<br>便携冰箱等家用电器的随心使用。在广袤的草原上打游戏、<br>看电影，在蔚蓝的天幕下喝咖啡、泡热茶，带来便捷、安全<br>的高品质户外用电生活。`
          }
        ]
      }
    },
    w6_03_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/performBg1.png`,
        details: [
          {
            title: "够聪明 自己停",
            subTitle: "智能泊车全家桶",
            desc: "作为首款聚焦城市高频泊车场景的无人驾驶量产车型，威马W6具备“360°全景倒车影像”、 “APA自动泊车辅助”、“RPA遥控泊车辅助”、“HAVP自主学习泊车”、“PAVP高精地图泊车”5大停车神技，帮助用户解决“泊车难”，加速实现“停车场自由”。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform4.png`,
        details: [
          {
            title: "AVP无人自主泊车系统",
            subTitle: "",
            desc: "作为国内首款特定场景L4级无人驾驶量产车型，威马W6搭载AVP无人自主泊车系统，由HAVP和PAVP组成。无论是固定/非固定车位泊车场景、地面/地库停车场、垂直/侧方停车位，只需按下一键泊车，车辆即可自动驶入停车场，自动搜索车位，自动泊入车位，真正实现“召之即来挥之即去”的无人泊车。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform5.png`,
        details: [
          {
            title: "无人自主学习泊车",
            subTitle: "(HAVP)",
            desc: "一次学习，过目不忘。只需带领威马W6学习一次泊车路线，系统便会在本地及云端自动记忆行驶轨迹和预设车位的位置，实现无人情况下的自动泊车入位。而当你召唤它时，它也能自己规避障碍，避让行人，自动接驾。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform1.png`,
        details: [
          {
            title: "无人高精地图泊车",
            subTitle: "(PAVP)",
            desc: "厘米级精确定位，精准每一步，打破距离限制，彻底解放用户。拥有百万级云端超强算力和高精地图支持的威马W6，在特定停车场环境内可实现自动过匝道、排队跟车、障碍物绕行、跨层巡航搜索车位并自动泊入。在你需要的时候，也可召唤车辆行驶至你身边。（*PAVP功能将通过OTA升级推送给用户）"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform6.png`,
        details: [
          {
            title: "自动泊车辅助(APA)& 遥控泊车辅助(RPA)",
            subTitle: "",
            desc: "自主泊车辅助（APA）可有效满足用户在酒店、超市、小区、办公楼、甚至路旁等非固定车位的泊车需求，驾驶员只需点击车机屏幕选择想要泊入的车位，泊车过程中无需进行任何方向盘、油门、制动、挡位操作，上手轻松便捷。针对狭窄、非标准车位泊车场景，遥控泊车辅助（RPA）能轻松化解“车停进去了，人出不来”的尴尬，让移动出行更轻松简单"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safetyBg2.png`,
        details: [
          {
            title: "360全景影像",
            subTitle: "",
            desc: "自主泊车辅助（APA）可有效满足用户在酒店、超市、小区、办公楼、甚至路旁等非固定车位的泊车需求，驾驶员只需点击车机屏幕选择想要泊入的车位，泊车过程中无需进行任何方向盘、油门、制动、挡位操作，上手轻松便捷。针对狭窄、非标准车位泊车场景，遥控泊车辅助（RPA）能轻松化解“车停进去了，人出不来”的尴尬，让移动出行更轻松简单"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform2.png`,
        details: [
          {
            title: "智能领航  超级在行",
            subTitle: "Living Pilot 3.0智行辅助系统",
            desc: "威马Living Pilot 3.0智行辅助系统专门针对中国路况开发，拥有16项驾驶辅助配置。AEB自动紧急制动，在前方危险来临之前，主动刹停保护；ICA智能车道跟随辅助，无论是在高速还是低速，都能自动将车辆保持在车道内，并与前车保持一定的距离，让驾车更惬意；ALC拨杆变道辅助只需要主动打转向灯，车辆即可自动完成变道。主动守护，让车成为安全、自由的出行空间。"
          }
        ]
      },
    ],
    w6_03_data: {
      title: [`Performance | 智能驾驶`],
      one: {
        list: [
          {
            titleColor: "#666666", // 标题颜色
            descColor: "#666666", // 描述颜色
            title: `够聪明 自己停<br>“智能泊车全家桶”`,
            desc: `作为首款聚焦城市高频泊车场景的无人驾驶量产车型，威马<br>W6具备“360°全景倒车影像”、 “APA自动泊车辅<br>助”、“RPA遥控泊车辅助”、“HAVP自主学习泊<br>车”、“PAVP高精地图泊车”5大停车神技，帮助用户解<br>决“泊车难”，加速实现“停车场自由”。`,
            bg: `${Resource.Resource}W6/pc/performBg1.png`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: "AVP无人自主泊车系统",
                desc: "作为国内首款L4级无人驾驶量产车型，威马W6搭载AVP无人自主泊车系统。无论是面对家用停车位，还是公共场所停车位，只需按下一键泊车，车辆即可自动驶入停车场，自动搜索车位，自动泊入车位，真正实现“召之即来挥之即去”无人泊车。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform4.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "无人自主学习泊车<br>(HAVP)",
                desc: "一次学习，过目不忘。只需带领威马W6学习一次泊车路线，系统便会在本地及云端自动记忆行驶轨迹和预设车位的位置，实现无人情况下的自动泊车入位。而当你召唤它时，它也能自己规避障碍，避让行人，自动接驾。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform5.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "无人高精地图泊车<br>(PAVP)",
                desc: "厘米级精确定位，精准每一步，打破距离限制，彻底解放用户。拥有百万级云端超强算力和高精地图支持的威马W6，在特定停车场环境内可实现自动过匝道、排队跟车、障碍物绕行、跨层巡航搜索车位并自动泊入。在你需要的时候，也可召唤车辆行驶至你身边。<br><br>（*PAVP功能将通过OTA升级推送给用户）"
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "自动泊车辅助(APA)<br>& 遥控泊车辅助(RPA)",
                desc: "自主泊车辅助（APA）可有效满足用户在酒店、超市、小区、办公楼、甚至路旁等非固定车位的泊车需求，驾驶员只需点击车机屏幕选择想要泊入的车位，泊车过程中无需进行任何方向盘、油门、制动、挡位操作，上手轻松便捷。针对狭窄、非标准车位泊车场景，遥控泊车辅助（RPA）能轻松化解“车停进去了，人出不来”的尴尬，让移动出行更轻松简单"
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform6.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "360全景影像",
                desc: "依托车身4个广角摄像头和先进的智能影像算法，威马W6提供360°全景鸟瞰影像及透明车身，消除驾驶盲区。在复杂路况及高难度泊车环境下，你还可以切换视角位置，观察周围环境。无论新手、老手，停车更为便捷、轻松。"
              }
            ],
            bg: `${Resource.Resource}W6/pc/safetyBg2.png`
          }
        ]
      },
      three: {
        list: [
          {
            padding: true,
            titleColor: "#666666", // 标题颜色
            descColor: "#666666", // 描述颜色
            title: `智能领航  超级在行<br>Living Pilot 3.0智行辅助系统`,
            desc: `威马Living Pilot 3.0智行辅助系统专门针对中国路况开发，拥<br>有16项驾驶辅助配置。AEB自动紧急制动，在前方危险来临<br>之前，主动刹停保护；ICA智能车道跟随辅助，无论是在高速<br>还是低速，都能自动将车辆保持在车道内，并与前车保持一<br>定的距离，让驾车更惬意；ALC拨杆变道辅助只需要主动打<br>转向灯，车辆即可自动完成变道。主动守护，让<span style="color:#000000;">车</span>成为安<br>全、<span style="color:#000000;">自</span>由的出行空间。`,
            bg: `${Resource.Resource}W6/pc/perform2.png`
          }
        ]
      }
    },
    w6_04_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/stabilityBg1.png`,
        details: [
          {
            title: "超长续航 超能表现",
            subTitle: "NEDC 520/620公里续航",
            desc: "威马W6采用最高能量密度达到180wh/kg的高能比电池包，并搭配高效能量管理系统，实现520/620公里续航的NEDC综合工况续航。通过对电池包累计多达120,000次充放电测试，威马W6实测16万公里电池衰减仅5%，无论是市区通勤、城市郊游、跨省市出行，从日出到日落， 想去哪里就去哪里。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/stability1.png`,
        details: [
          {
            title: "零百加速  七秒级别",
            subTitle: "高效能集成电机",
            desc: "高效能集成电机带来更强悍的动力输出，精准控制车速。重量降低至68kg，实现更高能量密度，最大功率达到160kW，转化效能高达95%。轮端扭矩达到2708N·m，车辆起步更快，动力充沛。"
          },
          {
            title: "快速响应  精准执行",
            subTitle: "新一代转向电机",
            desc: "新一代转向电机效率提升20%，提供450°/秒的精确感应，有效提升50%的响应速度，在方向盘转向时迅速做出判断，让车辆精准行驶在记录路线上。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/stabilityBg2.png`,
        details: [
          {
            title: "高效制动  保驾护航",
            subTitle: "ESP 9.3+iBooster制动系统",
            desc: "博世9.3版ESP，采用行业领先的四核处理器，具备迅敏的毫秒级控制反应，精确配合Living Pilot 3.0智行辅助系统，确保系统高效稳定运行。并且能快速化解潜在危险，为安全行车保驾护航。iBooster制动系统完美匹配威马W6整车动能回收策略，可回收90%以上的制动能量，提高续航里程，更可为高级辅助驾驶系统持续升级创造可能。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/stabilityBg3.png`,
        details: [
          {
            title: "多种模式  绝不套路",
            subTitle: "个性化驾控选择",
            desc: "安心稳定的ECO节能模式、平顺从容的COMFORT舒适模式、澎湃激情的SPORT运动模式和灵敏稳定的SNOW雪地模式。随心切换，不负每一段旅程。"
          }
        ]
      },
    ],
    w6_04_data: {
      title: [`Stability | 高效三电`],
      one: {
        list: [
          {
            titleColor: "#666666", // 标题颜色
            descColor: "#666666", // 描述颜色
            title: `超长续航 超能表现<br>NEDC 520/620公里续航`,
            desc: `威马W6采用最高能量密度达到180wh/kg的高能比电池包，<br>并搭配高效能量管理系统，实现520/620公里续航的NEDC综<br>合工况续航。通过对电池包累计多达120,000次充放电测<br>试，威马W6实测16万公里电池衰减仅5%，无论是市区通<br>勤、城市郊游、跨省市出行，从日出到日落， 想去<br>哪里就去哪里。`,
            bg: `${Resource.Resource}W6/pc/stabilityBg1.png`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: `零百加速  七秒级别<br>高效能集成电机`,
                desc: `高效能集成电机带来更强悍的动力输出，精准控制车速。重量降低至68kg，实现更高能量密度，最大功率达到160kW，转化效能高达95%。轮端扭矩达到2708N·m，车辆起步更快，动力充沛。`
              },
              {
                title: `快速响应  精准执行<br>新一代转向电机`,
                desc: `新一代转向电机效率提升20%，提供450°/秒的精确感应，有效提升50%的响应速度，在方向盘转向时迅速做出判断，让车辆精准行驶在记录路线上。`
              }
            ],
            bg: `${Resource.Resource}W6/pc/stability1.png`
          }
        ]
      },
      three: {
        list: [
          {
            titleColor: "#000000", // 标题颜色
            descColor: "#000000", // 描述颜色
            title: `高效制动  保驾护航<br>ESP 9.3+iBooster制动系统`,
            desc: `博世9.3版ESP，采用行业领先的四核处理器，具备迅敏的毫<br>秒级控制反应，精确配合Living Pilot 3.0智行辅助系统，确保<br>系统高效稳定运行。并且能快速化解潜在危险，为安全行车<br>保驾护航。iBooster制动系统完美匹配威马W6整车动能回收<br>策略，可回收90%以上的制动能量，提高续航里程，更可为<br>高级辅助驾驶系统持续升级创造可能。`,
            bg: `${Resource.Resource}W6/pc/stabilityBg2.png`
          },
          {
            padding: true,
            title: `多种模式  绝不套路<br>个性化驾控选择`,
            desc: `安心稳定的ECO节能模式、平顺从容的COMFORT舒适模式、<br>澎湃激情的SPORT运动模式和灵敏稳定的SNOW雪地模式。<br>随心切换，不负每一段旅程。`,
            bg: `${Resource.Resource}W6/pc/stabilityBg3.png`
          }
        ]
      }
    },
    w6_05_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/safetyBg1.png`,
        details: [
          {
            title: "安心之智 5星好评",
            subTitle: "五星安全标准车身保护",
            desc: "以C-NCAP五星安全为标准，威马W6采用塔式车身结构，合理吸能及阻抗区域，并在车身的关键部位，使用抗拉强度1,500MPa的热成型材料最大限度保护车内乘客安全。高强度钢板的重量占到整个白车身车体重量的75.2%，带来坚如磐石般的座舱防护。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safety1.png`,
        details: [
          {
            title: "多重保护 更享安心",
            subTitle: "多效电池安全保护",
            desc: "新一代电池包通过远超国标的66项高标准检测。创新矩阵电池仓及独创的双门槛侧围设计，使电池包免受外部机械损坏。电池包的密封系统采用了高弹体硅胶系列密封垫，底部缓冲外壳运用了防冲击涂层覆盖，防水防尘达到了最高级的IP68级。雨天涉水、复杂路况行驶，心不再慌。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safety2.png`,
        details: [
          {
            title: "实时监测  贴心关怀",
            subTitle: "疲劳驾驶提醒&分心驾驶提醒",
            desc: "当驾驶员显示出分心或疲劳的驾驶状态时，WIMI语音助手将发出语音提醒或预警，以保障驾乘者的安全，抹消长驾顾虑。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safetyBg3.png`,
        details: [
          {
            title: "你的健康  头等重要",
            subTitle: "Clean Pro健康头等舱",
            desc: "五重净化，全面安心。CN95微米空气过滤系统，过滤效率大于95%。AQS实时监测车外空气质量，有效阻隔污染物。PM2.5主动监测系统，循环检测车内环境。负离子净化功能，深度清洁车内空气，保证车内环境健康纯净。"
          }
        ]
      },
    ],
    w6_05_data: {
      title: [`Safety | 多维智护`],
      one: {
        list: [
          {
            title: `安心之智 5星好评<br>五星安全标准车身保护`,
            desc: `以C-NCAP五星安全为标准，威马W6采用塔式车身结构，合<br>理吸能及阻抗区域，并在车身的关键部位，使用抗拉强度<br>1,500MPa的热成型材料最大限度保护车内乘客安全。高强度<br>钢板的重量占到整个白车身车体重量的75.2%，带来坚如磐<br>石般的座舱防护。`,
            bg: `${Resource.Resource}W6/pc/safetyBg1.png`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            bottom: true,
            desc: [
              {
                title: `多重保护 更享安心<br>多效电池安全保护`,
                desc: `新一代电池包通过远超国标的66项高标准检测。创新矩阵电池仓及独创的双门槛侧围设计，使电池包免受外部机械损坏。电池包的密封系统采用了高弹体硅胶系列密封垫，底部缓冲外壳运用了防冲击涂层覆盖，防水防尘达到了最高级的IP68级。雨天涉水、复杂路况行驶，心不再慌。`
              }
            ],
            bg: `${Resource.Resource}W6/pc/safety1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `实时监测  贴心关怀<br>疲劳驾驶提醒&分心驾驶提醒`,
                desc: `当驾驶员显示出分心或疲劳的驾驶状态时，WIMI语音助手将发出语音提醒或预警，以保障驾乘者的安全，抹消长驾顾虑。`
              }
            ],
            bg: `${Resource.Resource}W6/pc/safety2.png`
          }
        ]
      },
      three: {
        list: [
          {
            padding: true,
            bg: `${Resource.Resource}W6/pc/safetyBg3.png`,
            title: "你的健康  头等重要<br>Clean Pro健康头等舱",
            isBR: true,
            desc: "五重净化，全面安心。CN95微米空气过滤系统，过滤效率大<br>于95%。AQS实时监测车外空气质量，有效阻隔污染物。<br>PM2.5主动监测系统，循环检测车内环境。负离子净化功<br>能，深度清洁车内空气，保证车内环境健康纯净。"
          }
        ]
      }
    }
  },
  E5Page: {
    sloganName: require("@/static/E5/slogan-name.png"),
    sloganNameMb: require("@/static/E5/slogan-name-mb.png"),
    life: "续航505km",
    price: ["500 即客行 ¥150,100", "500 智客行 ¥160,100"],
    more: "查看配置",
    desc: `为出行量身定制，助力租赁、出行平台公司<br>
      提高运营效率、提升企业价值`
  },
  EX5Page: {
    vehicleName: `${Resource.Resource}EX5/slogan-name.png`,
    bannerData: {
      btn: [
        {
          name: "预约试驾",
          vehicle: "EX5-Z",
          type: "drive",
          class: "btn-white",
          show: ["zh", "en"]
        },
        {
          name: "查看配置",
          vehicle: "EX5-Z",
          type: "sheet",
          link: "",
          class: "btn-transparent btn-last",
          show: ["zh"]
        }
      ],
      title: "零接触智能交互纯电SUV",
      price: `综合补贴后：¥<b style="font-size:1.5em;font-weight: normal">169,800</b>元起`,
      desc: [
        {
          headline: `Z时代运动美学设计`,
          desc: `尽情释放内心的年轻基因`
        },
        {
          headline: `Living Pilot智行辅助系统`,
          desc: `高级别智能驾驶辅助让你秒感安心`
        },
        {
          headline: `电池低衰减`,
          desc: `长里程低衰减管理系统`
        },
        {
          headline: `C-NCAP五星安全认证`,
          desc: `潜水艇级高强度钢材结构、坚固防撞设计`
        }
      ]
    },
    descData: [
      {
        title: `智在 更自在`
      },
      {
        title: `年轻 潮前看`
      },
      {
        title: `黑科技 零焦虑`
      },
      {
        title: `安心 满心`
      }
    ],
    view3Data: {
      btn: "全景看车",
      params: [`最大功率`, `最大`, "充电时间", "（从30%到80%）"],
      appearance: [
        {
          name: "龙胆蓝",
          color: "#013B71"
        },
        {
          name: "宁静灰",
          color: "#909294"
        },
        {
          name: "极致白",
          color: "#FFFFFF"
        }
      ],
      appearancemb: [
        {
          name: "龙胆蓝",
          color: "#013B71"
        },
        {
          name: "宁静灰",
          color: "#909294"
        },
        {
          name: "极致白",
          color: "#FFFFFF"
        }
      ]
    },
    diaLogData: {
      data_01_mb: [
        {
          mbBg: `${Resource.Resource}EX5/dia-in-01.png`,
          details: [
            {
              title: `CleanPro健康头等舱`,
              subTitle: ``,
              desc: `CleanPro在健康安全方面进行了全面升级。以优异的表现通过CN95健康安全认证，涵盖清新空气、低噪音、紫外线抗菌及健康选材等4大指标，从听觉、嗅觉到触觉，带来全感官的安心体验。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-in-02.png`,
          details: [
            {
              title: `AI小威智慧`,
              subTitle: `“全”能升级`,
              desc: `“说句话全搞定”的AI小威智能语音系统，再添5大语音控制模块：涵盖智能驾驶、驾驶模式、门窗控制、座椅调节以及更多复杂的操作。秒懂你的AI小威，让繁琐的步骤变得轻而易举。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-out-01.png`,
          details: [
            {
              title: `全新升级`,
              subTitle: `15.6英寸纵置大屏`,
              desc: `在更大的视界里，看见大世界。全新升级15.6英寸纵置大屏支持上下分屏交互功能，视频、导航可同页面显示，让信息、娱乐两不误。不同座席，各自尽情，各有尽兴。`
            },
            {
              title: `Living Mate全车交互系统`,
              subTitle: ``,
              desc: `新的生态系统带来手机与车机深度融合，更流畅的用户体验，打造智慧数字化助理。接入丰富的软硬件生态服务*，个性化推送音频内容，整合QQ音乐，喜马拉雅，考拉FM语音，按需订阅更多满足。融合多生态，打造更智能、更高效的智能“车生活”。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-out-02.png`,
          details: [
            {
              title: `多生态一体式车家互联`,
              subTitle: ``,
              desc: `跨平台互联生态，再添新玩家。继融入小米生态后，创领版更引入格力家居生态，将车家互联应用扩展至更多家庭与更多场景。和众多家电，更来电。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-in-03.png`,
          details: [
            {
              title: `Living Pilot智行辅助系统`,
              subTitle: ``,
              desc: `创领版升级L2+级智能驾驶，含11项驾驶辅助功能，同级最全。针对中国路况定制开发，无论主动感知危险，或是高速车道保持、低速跟车随行，高级别智能驾驶辅助让你秒感安心。`
            }
          ]
        }
      ],
      data_01: {
        title: [`智在 更自在`],
        one: {
          list: [
            {
              title: `CleanPro健康头等舱`,
              desc: `<p>CleanPro在健康安全方面进行了全面升级。</p><p>以优异的表现通过CN95健康安全认证，涵盖清新空气、低噪</p><p>音、紫外线抗菌及健康选材等4大指标，从听觉、嗅觉到触</p>觉，带来全感官的安心体验。`,
              bg: `${Resource.Resource}EX5/dia-in-01.png`
            },
            {
              title: `AI小威智慧“全”能升级`,
              desc: `<p>“说句话全搞定”的AI小威智能语音系统，再添5大语音控制</p><p>模块：涵盖智能驾驶、驾驶模式、门窗控制、座椅调节以及</p><p>更多复杂的操作。秒懂你的AI小威，让繁琐的步骤变得轻而</p>易举。`,
              bg: `${Resource.Resource}EX5/dia-in-02.png`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `全新升级<br>15.6英寸纵置大屏`,
                  desc: `<p>在更大的视界里，看见大世界。</p>全新升级15.6英寸纵置大屏支持上下分屏交互功能，视频、导航可同页面显示，让信息、娱乐两不误。不同座席，各自尽情，各有尽兴。`
                },
                {
                  title: `Living Engine全车交互系统`,
                  desc: `新的生态系统带来手机与车机深度融合，更流畅的用户体验，打造智慧数字化助理。接入丰富的软硬件生态服务*，个性化推送音频内容，整合QQ音乐，喜马拉雅，考拉FM语音，按需订阅更多满足。融合多生态，打造更智能、更高效的智能“车生活”。`,
                  tips: `*此功能即将OTA升级上线`,
                }
              ],
              bg: `${Resource.Resource}EX5/dia-out-01.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `多生态一体式车家互联`,
                  desc: `跨平台互联生态，再添新玩家。继融入小米生态后，创领版更引入格力家居生态，将车家互联应用扩展至更多家庭与更多场景。和众多家电，更来电。`
                }
              ],
              bg: `${Resource.Resource}EX5/dia-out-02.png`
            }
          ]
        },
        three: {
          list: [
            {
              padding: true,
              title: "Living Pilot智行辅助系统",
              desc: `<p>创领版升级L2+级智能驾驶，含11项驾驶辅助功能，同级最</p><p>全。针对中国路况定制开发，无论主动感知危险，或是高速</p><p>车道保持、低速跟车随行，高级别智能驾驶辅助让你秒感安</p><p>心。</p>`,
              bg: `${Resource.Resource}EX5/dia-in-03.png`
            }
          ]
        }
      },
      data_02_mb: [
        {
          mbBg: `${Resource.Resource}EX5/dia-02-in-01.png`,
          details: [
            {
              title: `超大电动全景天窗`,
              subTitle: ``,
              desc: `电动全景天窗带来更宽的视野，为你放大探索空间，让这片天空成为你的私人领空。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-02-in-02.png`,
          details: [
            {
              title: `耀眼火星橙内饰`,
              subTitle: ``,
              desc: `大胆张扬的火星橙，夺目耀眼；同色系运动座椅，以极佳的包裹感与稳定性，带来舒适的运动驾乘体验。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-02-in-03.png`,
          details: [
            {
              title: `Z世代运动美学设计`,
              subTitle: ``,
              desc: `悬浮式车顶设计，18寸全新造型轮毂搭配专属红色卡钳，血脉喷张的魅力与朝气十足的活力，一目了然。车侧镶嵌的“S”标记，尽情释放内心的年轻基因。`
            }
          ]
        },
      ],
      data_02: {
        title: [`年轻 潮前看`],
        one: {
          list: [
            {
              title: "超大电动全景天窗",
              desc: `<p>电动全景天窗带来更宽的视野，为你放大探索空间，让这片</p><p>天空成为你的私人领空。</p>`,
              bg: `${Resource.Resource}EX5/dia-02-in-01.png`
            },
            {
              title: "耀眼火星橙内饰",
              desc: `<p>大胆张扬的火星橙，夺目耀眼；</p><p>同色系运动座椅，以极佳的包裹感与稳定性，带来舒适的运</p><p>动驾乘体验。</p>`,
              bg: `${Resource.Resource}EX5/dia-02-in-02.png`
            },
            {
              padding: true,
              title: "Z世代运动美学设计",
              titleColor: "#666666", // 标题颜色
              descColor: "#666666",
              desc: `<p>悬浮式车顶设计，18寸全新造型轮毂搭配专属红色卡钳，血</p><p>脉喷张的魅力与朝气十足的活力，一目了然。</p><p>车侧镶嵌的“S”标记，尽情释放内心的年轻基因。</p>`,
              bg: `${Resource.Resource}EX5/dia-02-in-03.png`
            }
          ]
        }
      },
      data_03_mb: [
        {
          mbBg: `${Resource.Resource}EX5/dia-03-in-01.png`,
          details: [
            {
              title: `电池低衰减`,
              subTitle: ``,
              desc: `长里程低衰减管理系统，实现20万公里电池衰减低于3%。更长久使用，更安心保障。`
            }
          ]
        },
      ],
      data_03: {
        title: [`黑科技 零焦虑`],
        one: {
          list: [
            {
              padding: true,
              title: "电池低衰减",
              desc: `长里程低衰减管理系统，实现20万公里电池衰减低于<br>3%。更长久使用，更安心保障。`,
              bg: `${Resource.Resource}EX5/dia-03-in-01.png`
            }
          ]
        }
      },
      data_04_mb: [
        {
          mbBg: `${Resource.Resource}EX5/dia-04-out-01.png`,
          details: [
            {
              title: `C-NCAP五星安全认证`,
              subTitle: ``,
              desc: `潜水艇级高强度钢材结构、坚固防撞设计，十足安全感。`
            },
            {
              title: `Pack大数据安全防御系统`,
              subTitle: ``,
              desc: `云端大数据分析，24小时实时监测电池状态，及时预警。`
            }
          ]
        },
      ],
      data_04: {
        title: [`安心 满星`],
        one: {
          list: [
            {
              top: true,
              bottom: true,
              padding: true,
              desc: [
                {
                  title: `C-NCAP五星安全认证`,
                  desc: `潜水艇级高强度钢材结构、坚固防撞设计，十足安全感。`
                },
                {
                  title: `Pack大数据安全防御系统`,
                  desc: `云端大数据分析，24小时实时监测电池状态，及时预警。`
                }
              ],
              bg: `${Resource.Resource}EX5/dia-04-out-01.png`
            }
          ]
        }
      }
    }
  },
  EX6PlusPage: {
    vehicleName: `${Resource.Resource}EX6-PLUS/slogan-name.png`,
    bannerData: {
      btn: ["在线咨询", "查看配置"],
      title: `智能大6座纯电SUV`,
      price: `综合补贴后售价  全系27.99万元起`,
      desc: [
        {
          headline: `501km`,
          desc: `最大NEDC综合工况续航里程`
        },
        {
          headline: `2+2+2舒享空间`,
          desc: `灵动惬意`
        },
        {
          headline: `CleanPro健康头等舱`,
          desc: `微米级洁净呼吸`
        },
        {
          headline: `眼神智控系统`,
          desc: `极智赋能`
        }
      ]
    },
    descData: [
      {
        title: `Smart | 智慧 释放无限可能`,
        details: `无论是外观表现，还是内在互联，每一次驾驶EX6 Plus的过程，就是一场极致体验的旅程。`
      },
      {
        title: `Comfort | 悦级感受`,
        details: `无论外观美学，或是内饰质感，征服感官的愉悦驾乘感受，就此启程。`
      },
      {
        title: `Protection | 安全是唯一不留余地的事`,
        details: `多重智能安全科技，全面保障行车安全，不给“万一”留出一点空间。`
      },
      {
        title: `Fun | 让氛围更有FUN围`,
        details: `全套影音娱乐服务，全家人共享的氛围，才更有FUN围。`
      }
    ],
    view3Data: {
      btn: "全景看车",
      params: [`最大功率`, `最大`, "充电时间", "（从30%到80%）"]
    },
    dialogData: {
      data_01: {
        title: [
          `Smart | 智慧 释放无限可能`,
          `无论是外观表现，还是内在互联，每一次驾驶EX6 Plus的过程，就是一场极智体验的旅程。`
        ],
        one: {
          list: [
            {
              title: `智能场景式动态LOGO<br>我的「智我介绍」`,
              mbTitle: `智能场景式动态LOGO`,
              mbSubtitle: `我的「智我介绍」`,
              desc: `通过不同方式的闪烁效果呈现解锁迎宾、充电进度提示等车<br>辆状态。车辆解锁后，LOGO的闪烁配合车外语音交互功<br>能，智慧灵感，瞬间满格。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-01-in-01.png`
            },
            {
              title: `隐藏式电动感应门把手<br>伸手 就像朋友`,
              mbTitle: `隐藏式电动感应门把手`,
              mbSubtitle: `伸手 就像朋友`,
              desc: `内嵌式设计，时尚美观，更减少风阻，降低车辆能耗。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-01-in-02.png`
            }
          ]
        },
        two: {
          list: [
            {
              top: "top",
              bottom: "bottom",
              desc: [
                {
                  title: `Hands Free<br>感应式电动尾门<br>无触 无束`,
                  mbTitle: `Hands Free 感应式电动尾门`,
                  mbSubtitle: `无触 无束`,
                  desc: `用脚轻轻一扫就可打开后备箱，无需接触，也不失优雅，绝<br>不向小麻烦弯腰。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-01.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-01.png`
            }
          ]
        },
        three: {
          list: [
            {
              title: `一体式车家互联<br>车和家 不分家`,
              mbTitle: `一体式车家互联`,
              mbSubtitle: `车和家 不分家`,
              desc: `打破车内空间与家居空间的界限，实现和米家智能设备互动<br>互联，在车内轻松控制8大类20多种智能家居产品；也可通<br>过小爱音箱，反向查询车辆续航。车里、家里，都在你手<br>里。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-01-in-03.png`
            }
          ]
        },
        four: {
          list: [
            {
              top: "top",
              desc: [
                {
                  title: `OTA车辆系统远程升级<br>常开 常新`,
                  mbTitle: `OTA车辆系统远程升级`,
                  mbSubtitle: `常开 常新`,
                  desc: `实现软硬件一体化整车动态升级，持续刷新驾乘极智体验。<br>让新鲜感，不断更。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-02.png`
                },
                {
                  title: `眼神智控系统<br>极智赋能`,
                  mbTitle: `眼神智控系统`,
                  mbSubtitle: `极智赋能`,
                  isBR: true,
                  desc: `• 人脸识别<br>• 视线唤醒<br>• 疲劳监测`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-02.png`
            },
            {
              top: "top",
              desc: [
                {
                  title: `手机/手表蓝牙钥匙<br>"机"智如你`,
                  mbTitle: `手机/手表蓝牙钥匙`,
                  mbSubtitle: `"机"智如你`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-03.png`,
                  desc: `关联威马ID，启用手机蓝牙钥匙，控制并解锁车辆，还可将<br>蓝牙钥匙远程授权给家人，实现无钥匙启动车辆。`
                },
                {
                  title: `智能感应落锁/解锁<br>解锁新姿势`,
                  mbTitle: `智能感应落锁/解锁`,
                  mbSubtitle: `解锁新姿势`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-03.png`,
                  desc: `靠近时，车辆主动解锁；离开后，车辆主动锁上车门，并且<br>以短鸣声提醒你无需担心。`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-03.png`
            },
            {
              top: "top",
              bottom: "bottom",
              desc: [
                {
                  title: `AI小威智能语音系统<br>说句话 全搞定`,
                  mbTitle: `AI小威智能语音系统`,
                  mbSubtitle: `说句话 全搞定`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-04.png`,
                  desc: `行车路上，导航、听音乐、听相声、打开天窗……说出你想<br>要的，小威替你搞定。AI小威覆盖120个驾驶场景常用功能控<br>制，支持70个免唤醒词，更能有效识别中英文混合信息。`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-04.png`
            }
          ]
        },
        five: {
          list: [
            {
              padding: true,
              title: `业内首创6大场景<br>生活6合1`,
              mbTitle: `业内首创6大场景`,
              mbSubtitle: `生活6合1`,
              isBR: true,
              desc: `唤醒小威，直呼场景名，轻松开启6大场景：<br>
浪漫时刻场景<br>
影院时光场景<br>
空气净化场景<br>
我要吸烟场景<br>
上班下班场景<br>
亲子同行场景`,
              bg: `${Resource.Resource}EX6-PLUS/dia-01-in-04.png`
            }
          ]
        }
      },
      data_02: {
        title: [
          `Comfort | 悦级感受`,
          `无论外观美学，或是内饰质感，征服感官的愉悦驾乘感受，就此启程。`
        ],
        one: {
          list: [
            {
              titleColor: "#333333",
              descColor: "#333333",
              title: `灵眸智能灯光系统`,
              isBR: true,
              desc: `• 灵眸矩阵LED前大灯<br>• 灵眸流水转向灯<br>• 家族式LED装饰灯`,
              bg: `${Resource.Resource}EX6-PLUS/dia-02-in-01.png`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  bg: `${Resource.Resource}EX6-PLUS/dia-02-out-01.png`,
                  title: `灵感双色车身<br>极简美学`,
                  mbTitle: `灵感双色车身`,
                  mbSubtitle: `极简美学`,
                  desc: `整车一体式极简美学设计，灵感源自于超豪华大型游艇。红<br>黑白金灰车身，悬浮式车顶融合整车双色拼接，演绎出一场<br>流动的视觉盛宴。`
                },
                {
                  bg: `${Resource.Resource}EX6-PLUS/dia-02-out-01.png`,
                  title: `2+2+2舒享空间<br>灵动惬意`,
                  mbTitle: `2+2+2舒享空间`,
                  mbSubtitle: `灵动惬意`,
                  desc: `6座超大空间，不让任何人缺席。第二排与第三排可独立放<br>倒，超大后备箱容积，随心打破对空间的界限，美妙旅程凝<br>聚惬意之美。`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-02-out-01.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `第二排VIP独立座椅`,
                  desc: `设计秉承人体工程学理念，不同部位具有不同的软硬度。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-02-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-02-out-02.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `威马全球首创<br>CleanPro健康头等舱<br>微米级洁净呼吸`,
                  mbTitle: `威马全球首创 CleanPro健康头等舱`,
                  mbSubtitle: `微米级洁净呼吸`,
                  isBR: true,
                  desc: `• CN95微米空气过滤系统<br>• AQS实时空气质量监测<br>• PM2.5主动监测系统<br>• 负离子净化功能<br>• UVC感应净舱系统`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-02-out-03.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-02-out-03.png`
            }
          ]
        },
        three: {
          list: [
            {
              padding: true,
              title: `1.14m2 "天空之境"全景天窗`,
              desc: `白天行车，98%高效隔热率，夜晚行车，苍穹星空一览无余。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-02-in-02.png`
            }
          ]
        }
      },
      data_03: {
        title: [
          `Protection | 安全是唯一不留余地的事`,
          `多重智能安全科技，全面保障行车安全，不给“万一”留出一点空间。`
        ],
        one: {
          list: [
            {
              titleColor: "#333333",
              descColor: "#333333",
              title: `五星安全标准车身保护<br>柔情 铁骨`,
              mbTitle: `五星安全标准车身保护`,
              mbSubtitle: `柔情 铁骨`,
              desc: `五星标准安全车身架构，潜水艇级别的高强度钢材覆盖，<br>75.8%超高强度车身。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-03-in-01.png`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `四重电池安全保护<br>安全感来自真用心`,
                  mbTitle: `四重电池安全保护`,
                  mbSubtitle: `安全感来自真用心`,
                  desc: `66项高标准检测，创新矩阵电池仓结构，独创双门槛侧围设<br>计，四层物理防冲击电池设计，融合先进的BMS电池管理系<br>统与IP68级防水防尘，最大程度保障电池包安全。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-03-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-03-out-01.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `APA自动泊车辅助<br>放手一泊`,
                  mbTitle: `APA自动泊车辅助`,
                  mbSubtitle: `放手一泊`,
                  desc: `前后左右12颗超声波雷达协同工作，自检周围障碍物、自动<br>规划路径，轻松入位，给放手一个理由。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-03-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-03-out-02.png`
            }
          ]
        },
        three: {
          list: [
            {
              title: `Living Pilot <br>全功能L2级智行辅助系统<br>驾驶未来 进行时`,
              mbTitle: `Living Pilot 全功能L2级智行辅助系统`,
              mbSubtitle: `驾驶未来 进行时`,
              desc: `威马Living Pilot专门针对中国路况与气候环境定制开发，面<br>对道路上的潜在威胁，及时预警，关键时刻主动采取措施，<br>守护你和家人的一路安心。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-03-in-02.png`
            },
            {
              padding: true,
              title: `NEDC 501KM续航<br>有远方 无远虑`,
              mbTitle: `NEDC 501KM续航`,
              mbSubtitle: `有远方 无远虑`,
              desc: `采用高能比电芯模组，搭载高效能量管理系统，续航更稳定，满足所有日常用车和城际出行需要。全家人在一起的时光，一刻不浪费。<br><br>160kW/315N·m高效动力<br>智能踏板<br>6.6kW双向车载充电机<br>360智能AR环视影像`,
              bg: `${Resource.Resource}EX6-PLUS/dia-03-in-03.png`
            }
          ]
        }
      },
      data_04: {
        title: [
          `Fun | 让氛围更有FUN围`,
          `全套影音娱乐服务，全家人共享的氛围，才更有FUN围。`
        ],
        one: {
          list: [
            {
              title: `WM剧院级沉浸式环绕音响<br>声临其境`,
              mbTitle: `WM剧院级沉浸式环绕音响`,
              mbSubtitle: `声临其境`,
              desc: `全车9+1大功率扬声器，高、中、低音细腻层次分布，音场<br>更丰富，音质更细腻，达到剧院级音响标准，震撼演绎逼真<br>3D现场。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-04-in-01.png`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `64色智能随动氛围灯<br>氛围智造`,
                  mbTitle: `64色智能随动氛围灯`,
                  mbSubtitle: `氛围智造`,
                  desc: `根据不同生活场景定制的智能氛围灯，可切换多种流动闪烁<br>模式，7色迎宾模式、42色音乐随动模式，为你点亮多彩世<br>界。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-04-out-01.png`
                },
                {
                  title: `手机无线充电<br>不受"线"的旅程`,
                  mbTitle: `手机无线充电`,
                  mbSubtitle: `不受"线"的旅程`,
                  desc: `支持大部分主流机型无线充电，摆脱充电线的束缚，使用更<br>便捷。行驶过程中，不会为找不到充电设备而烦恼，体验不<br>受限。`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-04-out-01.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-04-out-01.png`
            }
          ]
        },
        three: {
          list: [
            {
              padding: true,
              title: `全感官沉浸式影音娱乐<br>感官沉浸`,
              mbTitle: `全感官沉浸式影音娱乐`,
              mbSubtitle: `感官沉浸`,
              desc: `12.8英寸悬浮式智能旋转屏，12.3英寸互动全液晶数字仪<br>表，只需一个ID就能打通互联全生态，同步爱奇艺，喜马拉<br>雅，QQ音乐以及本地视频，无限4G流量，极限不再设限。`,
              bg: `${Resource.Resource}EX6-PLUS/dia-04-in-02.png`
            }
          ]
        }
      }
    }
  },
  EX5JKXPage: {
    vehicleName: `${Resource.Resource}EX5-JKX/pc/slogan-name.png`,
    vehicleNamemb: `${Resource.Resource}EX5-JKX/mb/slogan-name-mb.png`,
    bannerData: {
      btn: ["查看配置"],
      title: ["智能交互纯电SUV", "（大客户版）"],
      desc: [
        {
          headline: `50万Km`,
          desc: `最长质保5年或50万公里`
        },
        {
          headline: `400/520Km`,
          desc: `最大NEDC综合工况续航里程`
        },
        {
          headline: `¥160,800元起`,
          desc: `综合补贴后售价`
        }
      ]
    },
    configData: {
      live520: ["520Km"],
      desc520: "综合补贴后售价: ￥176,800起",
      live400: ["400Km"],
      desc400: "综合补贴后售价: ￥160,800起",
      btn: "查看配置",
      slogan: `为出行量身定制，助力租赁、出行平台公司<br>
      提高运营效率、提升企业价值<br>
      即可购买，畅想智慧出行`
    }
  },
  M7Page: {
    bannerData: {
      title: "全场景智能移动空间",
      vehicleName: `${Resource.Resource}M7/slogan-name-pc.png`,
      btn: ["在线咨询"],
      bg: `${Resource.Resource}M7/PC.jpg`,
      btnData: [
        {
          name: "在线咨询",
          vehicle: "M7",
          type: "service",
          class: "btn-white",
          show: ["zh", "en"]
        }
      ],
      desc: [
        {
          headline: "高阶智能驾驶"
        },
        {
          headline: "全场景智能交互"
        },
        {
          headline: "具有生命感的智能空间"
        }
      ]
    },
    descList: [
      {
        key: "m7_01",
        title: "高阶智能驾驶",
        bg: `${Resource.Resource}M7/desc_01.jpg`
      },
      {
        key: "m7_02",
        title: "全场景智能交互",
        bg: `${Resource.Resource}M7/desc_02.jpg`
      },
      {
        key: "m7_03",
        title: "具有生命感的智能空间",
        bg: `${Resource.Resource}M7/desc_03.jpg`
      }
    ],
    data_01: {
      title: [
        `高阶智能驾驶`,
        `注：以下功能非全系车型搭载，详细配置以最终上市发售车型为准。`
      ],
      one: {
        list: [
          {
            titleM7: false,
            desc: `<p>依托强大的智能实力，</p><p>M7打通了高频场景到低频场景的用车场景覆盖，</p>真正实现“自动泊车-城区道路-城际高速”的多场景智能驾驶体验。`,
            title: "",
            bg: `${Resource.Resource}M7/dia-01-in-01.jpg`
          },
          {
            desc: "32枚传感器打造360°融合感知网络",
            title: ``,
            bg: `${Resource.Resource}M7/dia-01-in-02.jpg`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            bottom: true,
            desc: [
              {
                desc: `7枚800万像素高清摄像头`,
                title: ``
              },
              {
                desc: `全球首个搭载3颗自主变焦 高精超视固态激光雷达`,
                title: ``
              }
            ],
            bg: `${Resource.Resource}M7/dia-01-out-01.jpg`
          }
        ]
      },
      three: {
        list: [
          {
            title: `<p>NVIDIA Orin-X自动驾驶芯片</p><p>最大算力1,016TOPS</p><br><p>全新中央域控制电子电气架构</p>`,
            desc: `高效 稳定 可拓展`,
            bg: `${Resource.Resource}M7/dia-01-in-03.jpg`
          },
          {
            padding: true,
            desc: `颠覆式触控换挡设计`,
            title: ``,
            bg: `${Resource.Resource}M7/dia-01-in-04.jpg`
          }
        ]
      }
    },
    data_01_mb: [
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-01.jpg`,
        details: [
          {
            title: "",
            subTitle: "",
            desc:
              "依托强大的智能实力，M7打通了高频场景到低频场景的用车场景覆盖，真正实现“自动泊车-城区道路-城际高速”的多场景智能驾驶体验。"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-02.jpg`,
        details: [
          {
            title: "32枚传感器打造360°融合感知网络",
            subTitle: "",
            desc: ""
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-out-01.jpg`,
        details: [
          {
            title: "7枚800万像素高清摄像头",
            subTitle: "",
            desc: ""
          },
          {
            title: "",
            subTitle: "",
            desc: "全球首个搭载3颗自主变焦 高精超视固态激光雷达"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-03.jpg`,
        details: [
          {
            title: "",
            subTitle: "",
            desc: `NVIDIA Orin-X自动驾驶芯片，最大算力1,016TOPS.全新中央域控制电子电气架构:高效 稳定 可拓展`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-04.jpg`,
        details: [
          {
            title: "颠覆式触控换挡设计",
            subTitle: "",
            desc: ``
          }
        ]
      }
    ],
    data_02: {
      title: [
        `全场景智能交互`,
        `注：以下功能非全系车型搭载，详细配置以最终上市发售车型为准。`
      ],
      one: {
        list: [
          {
            desc:
              "<p>M7设计集生命力和未来科技感于一体，</p> <p>完美演绎了威马汽车Master系列“Vitalligent”设计理念，</p><p>即“Vital生命活力+Intelligent智慧交互”。</p>M7懂你心意，拥有无比默契。",
            title: "",
            bg: `${Resource.Resource}M7/dia-02-in-01.jpg`
          },
          {
            title: `车外“情感化”交互设计硬件`,
            desc: `<p>秉持“生命感”造车理念，威马M7对车外交互再升级，</p><p>通过前后智能灯带、车外麦克风、智能发光logo、隐藏式门把手、</p><p>车外扬声器等情感交互硬件，</p>实现与用户间的全场景车外交互。`,
            bg: `${Resource.Resource}M7/dia-02-in-02.jpg`
          },
          {
            padding: true,
            title: `UWB超宽带通信技术`,
            desc: `<p>全方位360°绕车感知</p>厘米级高精度定位`,
            bg: `${Resource.Resource}M7/dia-02-in-03.jpg`
          }
        ]
      }
    },
    data_02_mb: [
      {
        mbBg: `${Resource.Resource}M7/mb/dia-02-in-01-mb.jpg`,
        details: [
          {
            title: ``,
            subTitle: ``,
            desc: `M7设计集生命力和未来科技感于一体，完美演绎了威马汽车Master系列“Vitalligent”设计理念，即“Vital生命活力+Intelligent智慧交互”。M7懂你心意，拥有无比默契。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/mb/dia-02-in-02-mb.jpg`,
        details: [
          {
            title: `车外“情感化”交互设计硬件`,
            subTitle: ``,
            desc: `秉持“生命感”造车理念，威马M7对车外交互再升级，通过前后智能灯带、车外麦克风、智能发光logo、隐藏式门把手、车外扬声器等情感交互硬件，实现与用户间的全场景车外交互。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/mb/dia-02-in-03-mb.jpg`,
        details: [
          {
            title: `UWB超宽带通信技术`,
            subTitle: ``,
            desc: `<p>全方位360°绕车感知</p><p>厘米级高精度定位</p>`
          }
        ]
      }
    ],
    data_03: {
      title: [
        `具有生命感的智能空间`,
        `注：以下功能非全系车型搭载，详细配置以最终上市发售车型为准。`
      ],
      one: {
        list: [
          {
            desc: `<p>威马M7内饰以颠覆性的“零按键”极简线条布局，</p><p>首创的“智能穿戴”应用科技，大幅简化用户操作，</p><p>降低视觉负担，提供无感交互，</p>为用户打造了一个专属智能家居空间。`,
            title: ``,
            bg: `${Resource.Resource}M7/dia-03-in-01.jpg`
          },
          {
            desc: `<p>专属居家空间：威马M7车长4,930mm，轴距2,918mm</p>创新双色不对称设计`,
            title: ``,
            bg: `${Resource.Resource}M7/dia-03-in-02.jpg`
          },
          {
            desc: `全车四屏设计`,
            title: ``,
            bg: `${Resource.Resource}M7/dia-03-in-03.jpg`
          }
        ]
      },
      two: {
        list: [
          {
            top: true,
            desc: [
              {
                title: `i-Rota超级表盘`,
                desc: `i-Rota超级表盘是威马基于座舱零按键交互理念，以生命感为交互主题所创新打造的新一代座舱交互超级生命体。它采用“智能手表”表盘式设计，不但可化身功能控制的中枢旋钮，实现不同场景下不同功能的控制。`
              }
            ],
            bg: `${Resource.Resource}M7/dia-03-out-01.jpg`
          },
          {
            top: true,
            padding: true,
            desc: [
              {
                title: `i-Surf科技皮肤`,
                desc: `i-Surf科技皮肤是威马自主研发的一种专利技术，基于内饰情感交互理念围绕副驾打造的全新交互载体，不但可以显示天气等常规信息，还可基于迎宾等场景化设定，并且得益于威马SOA全场景编程能力，用户也可以自定义展现动画、小游戏等趣味化内容。`
              }
            ],
            bg: `${Resource.Resource}M7/dia-03-out-02.jpg`
          }
        ]
      }
    },
    data_03_mb: [
      {
        mbBg: `${Resource.Resource}M7/dia-03-in-01.jpg`,
        details: [
          {
            title: ``,
            subTitle: ``,
            desc: `威马M7内饰以颠覆性的“零按键”极简线条布局，首创的“智能穿戴”应用科技，大幅简化用户操作，降低视觉负担，提供无感交互，为用户打造了一个专属智能家居空间。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-in-02.jpg`,
        details: [
          {
            title: `专属居家空间`,
            subTitle: ``,
            desc: `威马M7车长4,930mm，轴距2,918mm,创新双色不对称设计`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-in-03.jpg`,
        details: [
          {
            title: `全车四屏设计`,
            subTitle: ``,
            desc: ``
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-out-01.jpg`,
        details: [
          {
            title: `i-Rota超级表盘`,
            subTitle: ``,
            desc: `i-Rota超级表盘是威马基于座舱零按键交互理念，以生命感为交互主题所创新打造的新一代座舱交互超级生命体。它采用“智能手表”表盘式设计，不但可化身功能控制的中枢旋钮，实现不同场景下不同功能的控制。`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-out-02.jpg`,
        details: [
          {
            title: `i-Surf科技皮肤`,
            subTitle: ``,
            desc: `i-Surf科技皮肤是威马自主研发的一种专利技术，基于内饰情感交互理念围绕副驾打造的全新交互载体，不但可以显示天气等常规信息，还可基于迎宾等场景化设定，并且得益于威马SOA全场景编程能力，用户也可以自定义展现动画、小游戏等趣味化内容。`
          }
        ]
      }
    ]
  },
  ReservePage: {
    title: `<p>扫一扫</p><p>即刻订购</p><p>您的爱车</p>`
  },
  E5PageC: {
    vehicleName: `${Resource.Resource}E.5/slogan-name.png`,
    bannerData: {
      btn: [
        {
          name: "预约试驾",
          vehicle: "E.5-C",
          type: "drive",
          class: "btn-white",
          show: ["zh", "en"]
        },
        {
          name: "查看配置",
          vehicle: "E.5-C",
          type: "sheet",
          link: "",
          class: "btn-transparent btn-last",
          show: ["zh"]
        }
      ],
      title: "越级 出彩",
      subtitle: "长续航大空间 智能纯电家轿",
      price: `综合补贴后：¥<b style="font-size:1.5em;font-weight: normal">180,100</b>元起`
    },
    descData: [
      {
        key: "e.5_01",
        title: "简约之美",
        bg: `${Resource.Resource}E.5/desc_01.jpg`
      },
      {
        key: "e.5_02",
        title: "宽适之享",
        bg: `${Resource.Resource}E.5/desc_02.jpg`
      },
      {
        key: "e.5_03",
        title: "科技之善",
        bg: `${Resource.Resource}E.5/desc_03.jpg`
      },
      {
        key: "e.5_04",
        title: "可靠之选",
        bg: `${Resource.Resource}E.5/desc_04.jpg`
      },
      {
        key: "e.5_05",
        title: "高标即标配",
        bg: `${Resource.Resource}E.5/desc_05.jpg`
      }
    ],
    diaLogData: {
      data_01_mb: [
        {
          mbBg: `${Resource.Resource}E.5/dia-01-in-01-mb.jpg`,
          details: [
            {
              title: `翱翔飞翼设计`,
              subTitle: `极具战斗气息`,
              desc: `前脸整体采用翱翔飞翼式设计，让视觉效果更宽，也让前部姿态更有冲击力。短前悬结合长轴距，整车外观看起来更加动感。电动化前脸设计，让视觉效果更宽，在优化空气动力学的同时，也让前部姿态更有冲击力；前雾灯区域特征参考战斗机两翼造型，强劲锐利极具速度感，支撑前保体量，更显饱满。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-out-01-mb.jpg`,
          details: [
            {
              title: `几何元素大灯`,
              subTitle: `高光无处不在`,
              desc: `集远近一体透镜大灯 (带自动开闭功能)、日行灯、转向灯于一体的四边形几何元素大灯，尽显简洁、纯粹。`
            },
            {
              title: `场景式动态LOGO`,
              subTitle: `智能交互呼应`,
              desc: `封闭式前进气格栅，有效减小风阻；采用高亮光钢琴漆工艺，配合亮银色电镀 LOGO 更显简约、大气；LOGO可交互发光，与驾乘人员呼应，凸显科技感。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-out-02.jpg`,
          details: [
            {
              title: `车侧冲刺式腰线`,
              subTitle: `姿态动感优雅`,
              desc: `采用空气动力学的低风阻溜背设计，结合精心雕刻的表面，营造出独特而有张力的流动效果，让车身显得更加修长，给人以大空间的视觉感受。`
            },
            {
              title: `时尚悬浮车顶`,
              subTitle: `打破单调审美`,
              desc: `时尚悬浮顶，通过黑色饰条的装饰，车顶像悬浮在空中一样，动感中又凸显高级。`
            },
            {
              title: `蝶翼式熏黑尾灯`,
              subTitle: `一眼难忘`,
              desc: `蝶翼式熏黑尾灯组合，与前大灯相呼应,突出优雅简约之美。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-out-03.jpg`,
          details: [
            {
              title: `双色旋风轮毂`,
              subTitle: `层次凹凸有致`,
              desc: `8寸5辐双色轮毂，暗与亮相搭配凸显层次感。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-in-02.jpg`,
          details: [
            {
              title: `以用户使用感为中心`,
              subTitle: `简约优雅的内饰设计`,
              desc: `在继承威马以往车型横向环抱型内饰座舱风格的基础上，通过横向环绕分层式布局，在拉宽内饰座舱视觉感受的同时，营造出一种简约轻盈又兼具优雅的空间感。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-out-04.jpg`,
          details: [
            {
              title: `立体多维仪表台`,
              subTitle: `一切以你为中心`,
              desc: `平整的中控台更便于用户放置日常辅助用品，还能保证驾驶视野的开阔；选用的材质经久耐用，易于打理；适当的点缀分区，让用户在操作时更容易上手。`
            },
            {
              title: `12.3 英寸双屏互动`,
              subTitle: `更大更智能`,
              desc: `穿插式中控设计，12.3英寸数字仪表屏+12.3寸大屏，优化人机操控的同时，同时带来丰富的行车信息以及多媒体娱乐系统。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-out-05.jpg`,
          details: [
            {
              title: `1.91㎡超大全景天幕`,
              subTitle: `同级特有`,
              desc: `同级独有双天幕设计，1580mm*1213mm*110mm，大尺寸让车内异常通透，大视界更精彩；好看实用，深色隔热玻璃，既能防嗮同时营造双色车顶设计感。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-out-06.jpg`,
          details: [
            {
              title: `旋钮式档杆设计`,
              subTitle: `精致豪华`,
              desc: `• 采用与豪华车型同样的旋钮式档杆，使得整车更具豪华感<br>• 节省空间，更简洁<br>• 便于设计，对称度好<br>• 科技感强，用户驾驶时换挡更加便捷<br>`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-01-in-03.jpg`,
          details: [
            {
              title: `人体工程学座椅`,
              subTitle: `设计出色，乘坐舒适`,
              desc: `<p>• 内饰颜色：宇宙黑简约配色</p><p>• 座椅材质：皮质+织物</p><p>• 前排座椅：前排主副驾加热</p>`
            }
          ]
        }
      ],
      data_01: {
        title: [
          `简约之美`,
          `动感和优雅并存，极具设计感的运动型轿跑车。采用进取、简约、纯粹的设计理念，打造出全新威马E.5 整车造型风格优雅外观，短前悬结合长轴距，造型比例更运动，整体造型简约而不简单`
        ],
        one: {
          list: [
            {
              title: `翱翔飞翼设计，极具战斗气息`,
              desc: `<p>前脸整体采用翱翔飞翼式设计，让视觉效果更宽，也让前部</p><p>姿态更有冲击力。短前悬结合长轴距，整车外观看起来更加</p><p>动感。电动化前脸设计，让视觉效果更宽，在优化空气动力</p><p>学的同时，也让前部姿态更有冲击力；前雾灯区域特征参考</p><p>战斗机两翼造型，强劲锐利极具速度感，支撑前保体量，更</p><p>显饱满。</p>`,
              bg: `${Resource.Resource}E.5/dia-01-in-01.jpg`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `几何元素大灯，高光无处不在`,
                  desc: `<p>集远近一体透镜大灯 (带自动开闭功能)、日行灯、转向灯于</p><p>一体的四边形几何元素大灯，尽显简洁、纯粹。</p>`
                },
                {
                  title: `场景式动态LOGO，智能交互呼应`,
                  desc: `<p>封闭式前进气格栅，有效减小风阻；</p><p>采用高亮光钢琴漆工艺，配合亮银色电镀 LOGO 更显简约、大气；</p><p>LOGO可交互发光，与驾乘人员呼应，凸显科技感。</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-01-out-01.jpg`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `车侧冲刺式腰线，姿态动感优雅`,
                  desc: `采用空气动力学的低风阻溜背设计，结合精心雕刻的表面，营造出独特而有张力的流动效果，让车身显得更加修长，给人以大空间的视觉感受。`
                },
                {
                  title: `时尚悬浮车顶，打破单调审美`,
                  desc: `时尚悬浮顶，通过黑色饰条的装饰，车顶像悬浮在空中一样，动感中又凸显高级。`
                },
                {
                  title: `蝶翼式熏黑尾灯，一眼难忘`,
                  desc: `蝶翼式熏黑尾灯组合，与前大灯相呼应,突出优雅简约之美。`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-01-out-02.jpg`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `双色旋风轮毂，层次凹凸有致`,
                  desc: `18寸5辐双色轮毂，暗与亮相搭配凸显层次感。`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-01-out-03.jpg`
            }
          ]
        },
        three: {
          list: [
            {
              padding: true,
              title: "以用户使用感为中心，简约优雅的内饰设计。",
              desc: `<p>在继承威马以往车型横向环抱型内饰座舱风格的基础上，通</p><p>过横向环绕分层式布局，在拉宽内饰座舱视觉感受的同时，</p><p>营造出一种简约轻盈又兼具优雅的空间感。</p>`,
              bg: `${Resource.Resource}E.5/dia-01-in-02.jpg`
            }
          ]
        },
        four: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `立体多维仪表台，一切以你为中心`,
                  desc: `<p>平整的中控台更便于用户放置日常辅助用品，还能保证驾驶视野的开阔；选用的材质经久耐用，易于打理；适当的点缀分区，让用户在操作时更容易上手。</p>`
                },
                {
                  title: `12.3 英寸双屏互动，更大更智能`,
                  desc: `穿插式中控设计，12.3英寸数字仪表屏+12.3寸大屏，优化人机操控的同时，同时带来丰富的行车信息以及多媒体娱乐系统。`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-01-out-04.jpg`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `1.91㎡超大全景天幕，同级特有`,
                  desc: `<p>同级独有双天幕设计，1580mm*1213mm*110mm，大尺寸让车内异常通透，大视界更精彩；</p><p>好看实用，深色隔热玻璃，既能防嗮同时营造双色车顶设计感。</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-01-out-05.jpg`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `旋钮式档杆设计，精致豪华`,
                  desc: `<p>• 采用与豪华车型同样的旋钮式档杆，使得整车更具豪华感</p><p>• 节省空间，更简洁</p><p>• 便于设计，对称度好</p><p>• 科技感强，用户驾驶时换挡更加便捷</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-01-out-06.jpg`
            }
          ]
        },
        five: {
          list: [
            {
              padding: true,
              title: `人体工程学座椅，设计出色，乘坐舒适`,
              desc: `<p>• 内饰颜色：宇宙黑简约配色</p><p>• 座椅材质：皮质+织物</p><p>• 前排座椅：前排主副驾加热</p>`,
              bg: `${Resource.Resource}E.5/dia-01-in-03.jpg`
            }
          ]
        }
      },
      data_02_mb: [
        {
          mbBg: `${Resource.Resource}E.5/dia-02-in-01-mb.jpg`,
          details: [
            {
              title: `2810mm超长轴距`,
              subTitle: `大气大越级`,
              desc: `电动车平台加上短悬长轴的设计，轴距2810mm，使整车达到B级车的轴距水准。4718*1838*135车身尺寸，带来更宽适的内部空间。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-02-out-01.jpg`,
          details: [
            {
              title: `超维宽适座舱`,
              subTitle: `越级乘坐空间`,
              desc: `卓越的车内头部空间表现，超越同级车型。领先空间利用率，具备领先同级的舒适座舱，开车不压抑，坐车不拥挤。`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-02-out-02.jpg`,
          details: [
            {
              title: `丰富储物空间`,
              subTitle: `出行更便捷`,
              desc: `<p>• 车内14处储物空间</p><p>• 后备箱容积为：425L</p><p>• 后备箱尺寸为：深1075mm，高536mm，宽870mm-1344mm。</p>`
            }
          ]
        }
      ],
      data_02: {
        title: [
          `宽适之享`,
          `同级唯一四角中型智能纯电轿车，充分发挥电动车平台优势，采用短悬长轴的设计，并辅以丰富实用的储物空间，用户可体验超越同级电动家轿的超大空间舒适感。`
        ],
        one: {
          list: [
            {
              titleColor: "#333333",
              descColor: "#333333",
              title: "2810mm超长轴距，大气大越级",
              desc: `<p>电动车平台加上短悬长轴的设计，轴距2810mm，使整车达到B</p><p>级车的轴距水准。</p><p>4718*1838*135车身尺寸，带来更宽适的内部空间。</p>`,
              bg: `${Resource.Resource}E.5/dia-02-in-01.jpg`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `超维宽适座舱、越级乘坐空间`,
                  desc: `<p>卓越的车内头部空间表现，超越同级车型。</p><p>领先空间利用率，具备领先同级的舒适座舱，开车不压抑，坐车不拥挤。</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-02-out-01.jpg`
            },
            {
              padding: true,
              bottom: true,
              desc: [
                {
                  title: `丰富储物空间，出行更便捷：`,
                  desc: `<p>• 车内14处储物空间</p><p>• 后备箱容积为：425L</p><p>• 后备箱尺寸为：深1075mm，高536mm，宽870mm-</p><p>1344mm。</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-02-out-02.jpg`
            }
          ]
        }
      },
      data_03_mb: [
        {
          mbBg: `${Resource.Resource}E.5/dia-03-in-01.jpg`,
          details: [
            {
              title: `Living Pilot 智行辅助系统`,
              subTitle: ``,
              desc: `包含4个毫米波雷达在内的全方位感知系统，全速段高频驾驶场景全覆盖。包含ACC自适应巡航、FCW前方碰撞预警、AEB自动紧急制动`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-03-out-01.jpg`,
          details: [
            {
              title: `Living Mate 智能座舱系统`,
              subTitle: ``,
              desc: `包含导航、多媒体等在内的丰富软件。科大讯飞3.5系统上深度自研开发的智能语音交互`
            }
          ]
        }
      ],
      data_03: {
        title: [`科技之善`, `丰富的智能科技功能，让行车更加便捷安全`],
        one: {
          list: [
            {
              titleColor: "#666666",
              descColor: "#666666",
              padding: true,
              title: "Living Pilot 智行辅助系统：",
              desc: `<p>包含4个毫米波雷达在内的全方位感知系统，全速段高频驾驶</p><p>场景全覆盖</p><p>包含ACC自适应巡航、FCW前方碰撞预警、AEB自动紧急制动</p>`,
              bg: `${Resource.Resource}E.5/dia-03-in-01.jpg`
            }
          ]
        },
        two: {
          list: [
            {
              padding: true,
              top: true,
              desc: [
                {
                  title: `Living Mate 智能座舱系统：`,
                  desc: `<p>包含导航、多媒体等在内的丰富软件</p><p>科大讯飞3.5系统上深度自研开发的智能语音交互</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-03-out-01.jpg`
            }
          ]
        }
      },
      data_04_mb: [
        {
          mbBg: `${Resource.Resource}E.5/dia-04-in-01.jpg`,
          details: [
            {
              title: `超长续航`,
              subTitle: `超能表现`,
              desc: `配备三元锂电池，系统能量密度达到160wh/kg上，NEDC续航里程高达505KM。三合一高效电驱，集高性能、高效率、高安全、高集成度于一体`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-04-out-01.jpg`,
          details: [
            {
              title: `全面五星安全`,
              subTitle: `安心智选`,
              desc: `62%高强度钢车身<br>ESP车身稳定系统，17项主动安全配`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}E.5/dia-04-out-02.jpg`,
          details: [
            {
              title: `多重严苛测试`,
              subTitle: `多倍安心`,
              desc: `IP68等级防水防尘标准+高标准16项电池试验验证极寒、极热、高原标定及测试`
            }
          ]
        }
      ],
      data_04: {
        title: [`可靠之选`, `可靠的长续航与安全配置，不止走的更远，还要更安全`],
        one: {
          list: [
            {
              title: "超长续航 超能表现",
              desc: `<p>配备三元锂电池，系统能量密度达到160wh/kg上，NEDC续</p><p>航里程高达505KM。</p><p>三合一高效电驱，集高性能、高效率、高安全、高集成度于</p>一体</p>`,
              bg: `${Resource.Resource}E.5/dia-04-in-01.jpg`
            }
          ]
        },
        two: {
          list: [
            {
              top: true,
              bottom: true,
              desc: [
                {
                  title: `全面五星安全，安心智选：`,
                  desc: `<p>62%高强度钢车身</p><p>ESP车身稳定系统，17项主动安全配</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-04-out-01.jpg`
            },
            {
              padding: true,
              bottom: true,
              desc: [
                {
                  title: `多重严苛测试，多倍安心：`,
                  desc: `<p>IP68等级防水防尘标准+高标准16项电池试验验证</p><p>极寒、极热、高原标定及测试</p>`
                }
              ],
              bg: `${Resource.Resource}E.5/dia-04-out-02.jpg`
            }
          ]
        }
      },
      data_05_mb: [
        {
          mbBg: `${Resource.Resource}E.5/dia-05-in-01-mb.jpg`,
          details: [
            {
              title: `颠覆传统`,
              subTitle: ``,
              desc: `颠覆传统油车与电动车高配即选配的传统思维，开启高配即标配的新世代。`
            },
            {
              title: `高配即标配`,
              subTitle: ``,
              desc: `智客行版本和Pro版本主要配置均一致，长续航、大空间、全景天幕、智能化等核心配置全系标配。`
            }
          ]
        }
      ],
      data_05: {
        title: [`高配即标配`, `全新威马E.5开启智能家轿新世代`],
        one: {
          list: [
            {
              title: "",
              desc: ``,
              bg: `${Resource.Resource}E.5/dia-05-in-01.jpg`
            }
          ]
        }
      }
    }
  }
};
