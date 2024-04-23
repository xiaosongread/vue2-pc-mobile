import Resource from "@/config/resource";

export default {
  fixedWindow: [
    /*{
      icon: require("@/static/onLine.png"),
      name: "Inquiry"
    },*/
    {
      icon: `${Resource.Resource}/phone.png`,
      name: "4006-999-666",
      dia: true
    } /*,
    {
      icon: require("@/static/calculator.png"),
      name: "Financing",
      type: "change"
    }*/
  ],
  TestDrive: "Test drive",
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
    /*{
      name: "E.5",
      url: "/E.5",
      type: "router"
    },*/
    {
      name: "Key Account",
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
      name: "Purchase",
      url: "",
      children: [
        {
          name: "Online Order",
          url: "/Reserve",
          type: "router"
        },
        {
          name: "WM Store",
          url: "https://official.wm-motor.com/en/network.html",
          type: "link"
        },
        /*{
          name: "Financing",
          url: "/FinancialCalculator",
          type: "router"
        },
        {
          name: "Ownership Benefits",
          url: "/AfterSaleService",
          type: "router"
        },*/
        {
          name: "Notice",
          url: "https://official.wm-motor.com/en/news/detail/368.html",
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
      name: "About WM",
      url: "",
      children: [
        {
          name: "About WM",
          url: "https://official.wm-motor.com/en/brand.html",
          type: "link"
        },
        {
          name: "WM Manufacturing",
          url: "https://official.wm-motor.com/en/plant.html",
          type: "link"
        },
        /*{
          name: "Brand library",
          url: "https://brand.wm-motor.com/",
          type: "link"
        },
        {
          name: "Brand events",
          url: "https://official.wm-motor.com/activities.html",
          type: "link"
        },*/
        {
          name: "Newsroom",
          url: "/News",
          type: "router"
        },
        {
          name: "Media Center",
          url: "https://official.wm-motor.com/en/download/pictures.html",
          type: "link"
        }
      ]
    },
    {
      name: "Contact",
      url: "https://official.wm-motor.com/en/contactus.html",
      type: "link"
    }
    /*{
      name: "Contact",
      url: "",
      children: [
        /!*{
          name: "Distributors",
          url: "https://official.wm-motor.com/investment.html",
          type: "link"
        },
        {
          name: "WeCLUB",
          url: "https://official.wm-motor.com/fanclub.html",
          type: "link"
        },*!/
        {
          name: "Contact",
          url: "https://official.wm-motor.com/en/contactus.html",
          type: "link"
        }
      ]
    },*/
    /*{
      name: "Join Us",
      url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1",
      type: "link"
    },
    {
      name: "Test Drive",
      url: "/TestDrive",
      type: "router"
    }*/
  ],
  footerMenuList: {
    leftList: [
      {
        name: "Explore WM"
      },
      {
        name: "About WM",
        type: "link",
        url: "https://official.wm-motor.com/en/brand.html"
      },
      {
        name: "WM Manufacturing",
        type: "link",
        url: "https://official.wm-motor.com/en/plant.html"
      } /*,
      {
        name: "Brand events",
        type: "link",
        url: "https://official.wm-motor.com/activities.html"
      }*/
    ],
    rightList: [
      /*{
        name: "Distributors",
        type: "link",
        url: "https://official.wm-motor.com/investment.html"
      },
      {
        name: "WeClub",
        type: "link",
        url: "https://official.wm-motor.com/fanclub.html"
      },
      {
        name: "Join Us",
        type: "link",
        url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1"
      }*/
    ]
  },
  commonSet: {
    moreConfig: "configurations",
    seeMore: "Explore More"
  },
  homePage: {
    consulting: "Models consulting",
    m7Name: `${Resource.Resource}M7/slogan-name-en.png`,
    m7Name_pc: `${Resource.Resource}M7/slogan-name-pc.png`,
    wmListTitle: "WM Family",
    comprehensive: "Post-subsidy Starting Price:",
    list: [
      {
        name: `${Resource.Resource}M7/M7-Name.png`,
        hoverName: require("@/static/phoneImg/M7-HoverName.png"),
        desc: ["The First Smart Sedan M7", "Comming soon"],
        img: `${Resource.Resource}M7/M7Car.png`,
        bg: `${Resource.Resource}M7/M7CarHover.png`,
        url: "/M7",
        video: require("@/static/a.mp4"),
        poster: "",
        ref: "video1"
      },
      {
        name: require("@/static/phoneImg/W6-Name.png"),
        hoverName: require("@/static/phoneImg/W6-HoverName.png"),
        desc: ["Smart 6-seater Electric SUV", "Up From ¥191,800"],
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
        desc: [
          "Smart Pure Electric SUV",
          "Up From ¥169,800"
        ],
        img: require("@/static/phoneImg/EX5Car.png"),
        bg: require("@/static/phoneImg/EX5CarHover.png"),
        url: "/EX-5",
        video: require("@/static/a.mp4"),
        poster: "",
        ref: "video3"
      }
      // {
      //   name: require("@/static/phoneImg/EX6PLUS-Name.png"),
      //   hoverName: require("@/static/phoneImg/EX6PLUS-HoverName.png"),
      //   desc: ["Smart 6-seater Electric SUV", "Up From ¥279,900"],
      //   img: require("@/static/phoneImg/EX6PlusCar.png"),
      //   url: "/EX-6-PLUS",
      //   video: require("@/static/a.mp4"),
      //   poster: "",
      //   ref: "video4"
      // }
    ],
    experienceTitle: "Experience WM"
  },
  newsPage: {
    headLine: "WM News",
    moreBtn: "MORE",
    noMore: "No more"
  },
  W6Page: {
    bannerData: {
      vehicleName: `${Resource.Resource}W6/pc/slogan-name-en.png`,
      title: `Automated Valet Parking Expert<br>
      Smart, electric SUV with Super Computing<br>
      Power and OTA Upgrade Technology`,
      price: `Post-subsidy Starting Price:<br> From <b style="font-size:1.5em;font-weight: normal">¥191,800</b> up`,
      btn: [
        {
          name: "Configurations",
          vehicle: "W6",
          type: "sheet",
          class: "btn-white",
          show: ["en"]
        }
      ],
      desc: [
        {
          headline: "Easy",
          desc:
            "Automated Valet Parking<br>Living Pilot AD/ADAS 3.0"
        },
        {
          headline: "Fresh",
          desc: "NewWIMI Voice Control<br>Full-vehicle OTA Upgrade"
        },
        {
          headline: "Fun",
          desc: "Personalize your vehicle by DIY scenarios with<br> service-oriented architecture<br>Reverse Charging"
        }
      ]
    },
    view3Data: {
      btn: "WM W6 VR Tour",
      params: [
        `Max Power`,
        `Biggest Continue<br>Voyage Course`,
        `Charging Time`,
        `30%-80%`
      ],
      appearance: [
        {
          name: "Discovery Blue",
          color: "#476B8D"
        },
        {
          name: "Infinite Gray",
          color: "#464C4D"
        },
        {
          name: "Dawn Green",
          color: "#B4BFA5"
        },
        {
          name: "Bold Green",
          color: "#3E4439"
        },
        {
          name: "Electromagnetic Red",
          color: "#A0212D"
        },
        {
          name: "Racing Orange",
          color: "#E44326"
        },
        {
          name: "Interstellar Black",
          color: "#151616"
        },
        {
          name: "Inspiration White",
          color: "#DCDCDC"
        }
      ],
      appearancemb: [
        {
          name: "Discovery<br>Blue",
          color: "#476B8D"
        },
        {
          name: "Infinite<br>Gray",
          color: "#464C4D"
        },
        {
          name: "Dawn<br>Green",
          color: "#B4BFA5"
        },
        {
          name: "Bold<br>Green",
          color: "#3E4439"
        },
        {
          name: "Electromagnetic<br>Red",
          color: "#A0212D"
        },
        {
          name: "Racing<br>Orange",
          color: "#E44326"
        },
        {
          name: "Interstellar<br>Black",
          color: "#151616"
        },
        {
          name: "Inspiration<br>White",
          color: "#DCDCDC"
        }
      ]
    },
    descList: [
      {
        key: "w6_01",
        title: "Design｜Hi-Tech",
        // details: "",
        bg: `${Resource.Resource}W6/pc/dia-in-01.png`
      },
      {
        key: "w6_02",
        title: "Intelligent | Smart and Comfy Cockpit",
        // details: "SMART AND COMFY COCKPIT",
        bg: `${Resource.Resource}W6/pc/wm3.png`
      },
      {
        key: "w6_03",
        title: "Performance | Intelligent Driving",
        // details: "INTELLIGENT DRIVING",
        bg: `${Resource.Resource}W6/pc/wm4.png`
      },
      {
        key: "w6_04",
        title: "Stability | High-Efficiency EIC System",
        // details: "MULTIDIMENSIONAL PROTECTION",
        bg: `${Resource.Resource}W6/pc/wm5.png`
      },
      {
        key: "w6_05",
        title: "Safety | Multidimensional Protection",
        // details: "MULTIDIMENSIONAL PROTECTION ",
        bg: `${Resource.Resource}W6/pc/wm7.png`
      }
    ],
    title: "China’s First Mass-Produced Self-Driving Vehicle",
    title2: "Smart, electric SUV with Super Computing",
    title3: "Power and OTA Upgrade Technology",
    w6_01_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/dia-in-01.png`,
        details: [
          {
            title: `Style of Funture  Art of Colors`,
            subTitle: `"Aerospace Technology" Design Philosophy`,
            desc: `Inspired by the sleek and spacious shape of spacecraft, W6 adopts an"Aerospace Technology"design philosophy to create a minimalist style that fits the latest trends. A"wing-like feature line"design is in place, echoing between the front and back. Together with the rounded curved body and concealed sensor door handles, the model achieves an ultra-low drag coefficient of less than 0.3Cd. the grand impression of a classic sports sUV is also emphasized by the model's suspended roof and"spacecraft rear wing"design`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi1.png`,
        details: [
          {
            title: `Luxury Leather Seat`,
            // subTitle: `Luxury Leather Seat (*ACE version only)`,
            desc: `Made from delicate and elastic Nappa
                materials. the seats of W6 offer
                differentiated ergonomic softness, high-
                tech design and a wide range of features
                Electrically adjustable and supporting
                memory settings, they will automatically
                adjust to your exclusive position when you
                get in the car based on your unique WM
                ID`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi2.png`,
        details: [
          {
            title: `A Car & A Friend`,
            subTitle: `Concealed Sensor Door Handle`,
            desc: `When you walk towards W6, the hidden door handles will eject automatically, as if greeting a long-awaited friend. The stylish built-in design also helps to reduce air resistance and energy consumption.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi3.png`,
        details: [
          {
            title: `Always in A Good Mood Around It`,
            subTitle: `Interactive luminous logo`,
            desc: `The W6's Living Logo with various flicker
                  effects communicates vehicle status. such
                  as unlocked, greeting, and state of charge
                  No matter for day or night, the luminous
                  logo will be dazzling enough to catch the
                  eyes`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi4.png`,
        details: [
          {
            title: `Iconic Color duet Love at first sight`,
            subTitle: `Two-Tone bodywork`,
            desc: `With supercomputer simulations, W6
                comes with 8 avant-garde color options
                from 16 million samples: Fearless green
                现官网版本: Light Green), Discovery
                Bue, Racing Orange, Dawn green(现官
                网版本: Dark green), Interstellar B|ack,
                Electromagnetic Red, Inspiration White
                and Infinite Gray. More personalized color
                schemes will become available with the
                joint creation of our vast number of users
                making the car a stunner right out of the
                gate.`,
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/designBg2.png`,
        details: [
          {
            title: `Light Up the Path`,
            subTitle: `Intelligent Lighting System (* PRO/ACE versions only)`,
            desc: `W6 inherits the company’s family design language of integrated M-shaped running-through headlights, which are not only highly recognizable but also serve as a guardian during your night journey. The taillights consist of three-stage running-through position lights, flowing turn signals and a matrix brake light/reverse light, providing a sense of premium and exclusivity. Equipped with the HMA automatic and adaptive headlight system, the vehicle will detect lights on the road and automatically switch between high and low beams.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi5.png`,
        details: [
          {
            title: `Chic and Unique Styling`,
            subTitle: `Blade Keys`,
            desc: `WM W6 is equipped with a first-of-its-kind blade shaped car key with a smart luminous logo and wireless charging capability. Feel free to charge your key with the built-in wireless charging pad anytime, anywhere.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/desi6.png`,
        details: [
          {
            title: `Aesthetic Design & Luxury Comfort`,
            subTitle: `Exquisite Interior`,
            desc: `W6 offers the best expression of classic and technology. The cap design above the duplex screen is an effective way to enhance visibility by blocking out the sunlight and reducing the screen reflectivity. Other ingenious designs include premium organ-style air conditioning vents, high-tech rotary electronic gear lever, practical hourglass-style central cupholder unit, window controls with a more delicate touch, brushed silver trim with a faux metallic textured brushing process, and fish-scale piano lacquer panels.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/designBg3.png`,
        details: [
          {
            title: `Ambient Lighting`,
            subTitle: `32-Color Smart Ambient Lighting`,
            desc: `Smart ambient lights can be customized according to different scenarios in life with multiple flashing modes, which are all up to you.`
          }
        ]
      }
    ],
    w6_01_data: {
      title: [`Design | Hi-Tech`],
      one: {
        list: [
          {
            titleColor: "#666666",
            title: `Style of Future  Art of Colors<br>"Aerospace Technology" Design Philosophy`,
            descColor: "#666666",
            desc: `Inspired by the aerodynamic body of spacecraft, W6 adopts an "Aerospace engineering"<br> design philosophy to create a minimalist style that fits in the cutting-edge trends.<br> Embodied the aerodynamic design, together with the concealed sensor door handles,<br> W6 achieves an ultra-low drag coefficient of less than 0.3Cd. The grand impression of a <br>classic sports SUV is also emphasized by the model's suspended roof and "spacecraft rear wing" design`,
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
                title: "Luxury Leather Seat",
                desc: `Made from delicate and elastic Nappa
                materials. the seats of W6 offer
                differentiated ergonomic softness, high-
                tech design and a wide range of features
                Electrically adjustable and supporting
                memory settings, they will automatically
                adjust to your exclusive position when you
                get in the car based on your unique WM
                ID`
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi1.png`
          },
          {
            top: true,
            desc: [
              {
                title: "A Car & A Friend<br>Concealed Sensor Door Handle",
                desc: "When you walk towards W6, the hidden door handles will eject automatically, as if greeting a long-awaited friend. The stylish built-in design also helps to reduce air resistance and energy consumption."
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi2.png`
          },
          {
            top: true,
            desc: [
              {
                title:
                  "Approach It, A Good Mood<br>Interactive WM Living Logo",
                desc: `The W6’s Living Logo can flash with various flicker effects to communicate vehicle status, such as unlocked, greeting, and state of charge. No matter for day or night, the living logo will be dazzling enough to catch the eyes.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi3.png`
          },
          {
            top: true,
            bottom: true,
            desc: [
              {
                title:
                  "Iconic Color duet <br>Love at first sight<br>Two-Tone bodywork",
                desc: `With supercomputer simulations, W6 comes with 8 avant-garde color options from 16 million samples Light Green, Discovery Blue, Racing Orange, Dark Green, Interstellar Black, Electromagnetic Red, Inspiration White, and Infinite Gray. More personalized color schemes will become available with the joint creation of our vast number of users, making the car a stunner right out of the gate.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi4.png`
          }
        ]
      },
      three: {
        list: [
          {
            title: `Light Up the Path<br>Intelligent Lighting System`,
            desc: `W6 inherits the company’s family design language of integrated M-shaped<br>running-through headlights, which are not only highly recognizable but also<br> serve as a guardian during your night journey. The taillights consist of three-stage<br> running-through position lights, flowing turn signals and a matrix brake<br>light/reverse light, providing a sense of premium and exclusivity. Equipped with<br>the HMA automatic and adaptive headlight system, the vehicle will detect lights<br>on the road and automatically switch between high and low beams.`,
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
                title: "Chic and Unique Styling<br>Blade Keys",
                desc:
                  "WM W6 is equipped with a first-of-its-kind blade shaped car key with a smart luminous logo and wireless charging capability. Feel free to charge your key with the built-in wireless charging pad anytime, anywhere."
              }
            ],
            bg: `${Resource.Resource}W6/pc/desi5.png`
          },
          {
            top: true,
            bottom: true,
            desc: [
              {
                title:
                  "Aesthetic Design <br> Luxury Comfort<br>Exquisite Interior",
                desc: `W6 offers the best expression of classic and technology. The cap design above the duplex screen is an effective way to enhance visibility by blocking out the sunlight and reducing the screen reflectivity. Other ingenious designs include premium organ-style air conditioning vents, high-tech rotary electronic gear lever, practical hourglass-style central cupholder unit, window controls with a more delicate touch, brushed silver trim with a faux metallic textured brushing process, and fish-scale piano lacquer panels.`
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
            title: `Ambient Lighting<br>32-Color Smart Ambient Lighting`,
            desc: `Smart ambient lights can be customized according to different scenarios in life with multiple flashing<br>modes, which are all up to you.`,
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
            title: `Understanding You`,
            subTitle: `Living Mate Whole-Vehicle Interaction`,
            desc: `WM’s new-generation smart digital cockpit uses Qualcomm’s first automotive SA8155 chips using 7nm processer technology. Compared with the previous generation chip for cockpit, the computing power is improved by 8.5 times and the image processing capacity by 20 times. With strong computing power, W6 brings you a brand-new smart travel experience with its new WIMI voice assistant, Huawei infotainment ecosystem, facial recognition system, customizable scenario programming, and more.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/Intel1.png`,
        details: [
          {
            title: `Say it, and It's Done`,
            subTitle: `Whole-new WIMI Voice Assistant`,
            desc: `The W6’s brand-new WIMI voice assistant connects your voice to a wider range of 108 functions, covering car control, entertainment and information queries. Smarter, and hear you better.`
          },
          {
            title: `Car-Mobile Interconnection and Screen Projection`,
            subTitle: `Huawei Entertainment Ecosystem`,
            desc: `Huawei Entertainment Ecosystem make it convenient to connects your car with your smartphone and your home, synchronizing all your data for seamless integration of life both inside and outside the vehicle. With 10+ apps covering life and related scenarios, intelligence lies in just “one click”.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/Intel2.png`,
        details: [
          {
            title: `Customize Your Driving Experience`,
            subTitle: `Scenario-based Programming`,
            desc: `As the first mass-produced "User-Defined" model, W6 will completely change your driving habits and experience. As easy as building LEGO blocks, users are allowed to program and define their own "scene cards", customized combinations of over 200 functions, through the APP according to their driving preferences. Programmable function areas include ADAS, windows, seats, doors, air conditioning, driving modes, music, ambient lights, etc. Once set, the selected functions will automatically wake up according to the user-defined trigger conditions. Remote Control is also available for all kinds of scenarios and styles with just one click.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/IntelBg2_zh.png`,
        details: [
          {
            title: `Know You and Your Preferences`,
            subTitle: `Exclusive WM ID`,
            desc: `Each user can create an exclusive WM ID. Once you sit in the car, the face recognition system will identify you within 3s, and synchronize your preferences, including your seat position and car settings, in the blink of an eye. The face recognition system can also automatically activate fatigue monitoring function and achieve a variety of human-vehicle interactions.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/comfort1.png`,
        details: [
          {
            title: `Beyond the Horizon`,
            subTitle: `Interactive Infotainment`,
            desc: `The W6 infotainment system is made up of multiple screens consisting of a 12.3-inch dashboard display, a 12.3-inch full-LCD digital touchpanel, and an i-Touch console. The screens are with a 60Hz refresh rate and millisecond response times.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/Intel3.png`,
        details: [
          {
            title: "Immersive Audio Experience",
            subTitle: "WM Theater-level Stereo Sound",
            desc: `Professional tuning by international tuners. 9+1 in-vehicle high-power speakers. Layered performance of treble, mid and bass with richer sound field and higher resolution to perform an impressively vivid theater-level 3D audio experience.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform3.png`,
        details: [
          {
            title: "Mobility Revolutionised",
            subTitle: "Full Vehicle OTA Update",
            desc: `Empowered by the new SOA electrical and electronic architecture, W6 can realize OTA upgrades for 33 hardware control systems in five functional modules of the car, including the driving module, body module and entertainment module. Not only that, the OTA experience is faster than you can imagine, thanks to WM Motor's unique backup upgrade strategy and powerful in-car Ethernet. W6 will continue to meet the diversified needs of users, truly realizing user-defined vehicles that grow with all of us.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/wm5.png`,
        details: [
          {
            title: "Sing as You Want",
            subTitle: "Thunder In-car Karaoke",
            desc: `Tired of being bored in charging, long-distance and other driving scenarios? Plug the microphone into the USB port and start an in-car karaoke tour with changing ambient light tied to your songs! Searching, ordering, singing and cutting songs can all be done easily in your loved car.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/IntelBg3.png`,
        details: [
          {
            title: "Power Your Camping",
            subTitle: "3.3kW Reverse Charging",
            desc: "Feel like wild camping? W6's 3.3kW discharge function is the perfect partner for you! In addition to charging cell phones and laptops, W6 also caters to high-power household appliances such as rice cookers, induction cookers, high-speed blenders and portable refrigerators, truly eliminating your power anxiety. Imagine playing games, watching movies, and making hot tea on a wide expanse of grass under a blue canopy! Come get your W6 and enjoy a convenient, safe and high-quality outdoor life with reliable power output!"
          }
        ]
      },
    ],
    w6_02_data: {
      title: ["Intelligent | Smart and Comfy Cockpit"],
      one: {
        list: [
          {
            bg: `${Resource.Resource}W6/pc/IntelBg1.png`,
            title: `Understanding You<br>Living Engine Smart Cockpit`,
            desc:
              "WM’s new-generation smart digital cockpit is equipped with<br> the powerful Qualcomm SA8155P processor running two<br> operating systems (QNX and Android)<br>Compared with the previous generation chip for cockpit, the<br>computing power is improved by 8.5 times and the image<br>processing capacity by 20 times. With strong computing power, W6<br>brings you a brand-new smart travel experience with its new WIMI<br>voice control, Huawei infotainment ecosystem, facial recognition<br>system, customizable scenario programming, and more."
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
                title: `Say it, and It's Done<br>Whole-new WIMI Voice Control`,
                desc: "The W6’s brand-new WIMI voice control connects your voice to a wider range of 108 functions, covering car control, entertainment and information queries. The voice control supports multiple interactive methods such as natural, keyword and hotkey wake-up commands. Smart enough, WIMI is able to distinguish between driver and passenger commands and handle up to three commands in one sentence during continuous natural-voice conversations. Smarter, and hear you better.",
              },
              {
                title: "Car-Mobile Interconnection and Screen Projection Huawei Entertainment Ecosystem",
                desc: "Huawei Entertainment Ecosystem make it convenient to connects your car with your smartphone and your home, synchronizing all your data for seamless integration of life both inside and outside the vehicle. With 10+ apps covering life and related scenarios, intelligence lies in just “one click”."
              }
            ],
            bg: `${Resource.Resource}W6/pc/Intel1.png`
          },
          {
            bottom: true,
            desc: [
              {
                // title: `Customize Your Driving Experience<br>Personalize Your Vehicle by DIY scenarios with Service-oriented Architecture (SOA)`,
                desc: `As the first mass-produced "User-Defined" model, W6 will completely change your driving habits and experience. As easy as building LEGO blocks, users are allowed to program and define their own "scene cards", customized combinations of over 200 functions, through the APP according to their driving preferences. Programmable function areas include ADAS, windows, seats, doors, air conditioning, driving modes, music, ambient lights, etc. Once set, the selected functions will automatically wake up according to the user-defined trigger conditions. Remote Control is also available for all kinds of scenarios and styles with just one click.`
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
            title: `Self-learning Technology, Know You and Your Preferences`,
            desc: `Each user can create an exclusive WM ID. Once you sit<br>in the car, the face recognition system will identify<br>you within 3s, and synchronize your preferences, including<br>your seat position and car settings, in the blink of an eye.<br>The face recognition system can also automatically<br>activate fatigue monitoring function and achieve a variety of human-vehicle interactions.`
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
                // title: `Beyond the Horizon<br>Interactive Infotainment`,
                bg: `${Resource.Resource}W6/pc/comfort1.png`,
                desc: `The W6 infotainment system is made up of multiple screens consisting of a 12.3-inch dashboard display, a 12.3-inch full-LCD digital touchpanel, and an i-Touch console. The screens are with a 60Hz refresh rate and millisecond response times.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/comfort1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `Immersive Audio Experience<br><br>WM Theater-level Stereo Sound`,
                desc: `Professional tuning by international tuners. 9+1 in-vehicle high-power speakers. Layered performance of treble, mid and bass with richer sound field and higher resolution to perform an impressively vivid theater-level 3D audio experience.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/Intel3.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `Mobility Revolution<br>Full Vehicle OTA Update`,
                desc: `Empowered by the new SOA electrical and electronic architecture, W6 can realize OTA upgrades for 33 hardware control systems in five functional modules of the car, including the driving module, body module and entertainment module. Not only that, the OTA experience is faster than you can imagine, thanks to WM Motor's unique backup upgrade strategy and powerful in-car Ethernet. W6 will continue to meet the diversified needs of users, truly realizing user-defined vehicles that grow with all of us.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform3.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `Sing as You Want<br>Thunder In-car Karaoke`,
                desc: `Tired of being bored in charging, long-distance and other driving scenarios? Plug the microphone into the USB port and start an in-car karaoke tour with changing ambient light tied to your songs! Searching, ordering, singing and cutting songs can all be done easily in your loved car.`
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
            title: `Power Your Camping<br>3.3kW Reverse Charging`,
            desc: `Feel like wild camping? W6's 3.3kW discharge function is the perfect partner for you!<br>In addition to charging cell phones and laptops, W6 also caters to high-power<br>household appliances such as rice cookers, induction cookers, high-speed blenders<br>and portable refrigerators, truly eliminating your power anxiety. Imagine playing<br>games, watching movies, and making hot tea on a wide expanse of grass under a<br>blue canopy! Come get your W6 and enjoy a convenient, safe and high-quality<br>outdoor life with reliable power output!`
          }
        ]
      }
    },
    w6_03_data_mb: [
      {
        mbBg: `${Resource.Resource}W6/pc/performBg1.png`,
        details: [
          {
            title: "Ultra-smart Self-parking",
            subTitle: "Full Self-parking Solution",
            desc: "As the answer to high-frequency urban parking scenarios in China,W6 is equipped with a full self-parking solution that covers 360°panoramic rearview camera, APA (automated parking assist),RPA (remote parking assist), HAVP (Home-AVP), and PAVP (Public-AVP; based on high-precision maps) functions. Say bye to all your parking headaches."
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform4.png`,
        details: [
          {
            title: "Automated Valet Parking (AVP) System",
            subTitle: "",
            desc: "As the first mass-produced L4 self-driving model in China, W6 offers a self-parking option of Automated Valet Parking (AVP), which consists of HAVP (Home-AVP), and PAVP (Public-AVP). With a single press of the button, the car will automatically search for a parking spot in both private and public parking areas. Whether fixed or non-fixed, surface or underground, perpendicular or parallel, automated parking can be truly achieved with “just one click”."
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform5.png`,
        details: [
          {
            title: "HAVP: Self-trained Automated Valet Parking",
            subTitle: "",
            desc: "With the HAVP (Home-AVP) system, W6 can train itself for parking with reliable memory.  Simply let your WM W6 learn the parking route once, and the system will automatically save the driving track and the preset parking position both locally and in the cloud to achieve automatic parking. And when you summon it, it will automatically come to you, avoiding obstacles and pedestrians on its way."
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform1.png`,
        details: [
          {
            title: "PAVP: Unmanned High-precision Map Parking",
            subTitle: "",
            desc: "The PAVP (Public-AVP) system brings centimeter-level precise navigation on every step of your way. With a built-in super cloud computing service and high precision map, W6 can autonomously enter parking lots, follow cars, bypass obstacles, cruise across floors and park into parking spaces in specific environments. When you need it, it can also drive to your side upon your summon."
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform6.png`,
        details: [
          {
            title: "APA & RPA",
            subTitle: "",
            desc: `APA (automated parking assist) is an effective way to park your car in non-fixed spaces in hotels, supermarkets, neighborhoods, office buildings, and even on the roadside. Simply select your preferred parking spot on the screen to activate APA parking and there is no additional operation of the steering wheel, throttle, brake or gears. Parking is so easy and convenient. Remote Parking Assist, or RPA, is designed for narrow, non-standard parking spots. With RPA, the embarrassment of "cars parked in, but people can't get out" will no longer exist, making parking easier and simpler.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safetyBg2.png`,
        details: [
          {
            title: "360° Panoramic Image",
            subTitle: "",
            desc: "Four wide-angle cameras and advanced intelligent imaging algorithms provides 360° panoramic vision that eliminates blind spots. Adjustable viewing angle allows you to inspect the surrounding environment when driving in complex road or parking conditions. Whether you are a novice or experienced, parking has never been more convenient and easy."
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/perform2.png`,
        details: [
          {
            title: "Intelligent Navigation, Expert Service for You",
            subTitle: "Living Pilot 3.0",
            desc: "Living Pilot 3.0 intelligent driving assistance system is specially designed for Chinese road conditions with 16 driving assistance features that make your vehicle a safer and more comfortable space to travel.  The Automatic Emergency Braking (AEB) system will autonomously brake ahead of the oncoming obstacles. No matter how fast you drive, the Integrated Cruise Assist (ICA) system will automatically keep the vehicle in the lane with a safe following distance. Whenever you need to change lanes, simply hit the turn signal, and the Automated Lane Centering (ALC) system will do the rest for you. "
          }
        ]
      },
    ],
    w6_03_data: {
      title: [`Performance | Intelligent Driving`],
      one: {
        list: [
          {
            titleColor: "#666666", // 标题颜色
            descColor: "#666666", // 描述颜色
            title: `Smart, Autonomous Valet Parking`,
            desc: `As the answer to high-frequency urban parking scenarios in China,<br>W6 is equipped with a full self-parking solution that covers<br>360°panoramic rearview camera, APA (automated parking assist),<br>RPA (remote parking assist), HAVP (Home-AVP), and PAVP (Public-<br>AVP; based on high-precision maps) functions. Say bye to all your<br>parking headaches.`,
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
                title: "Automated Valet Parking (AVP) System",
                desc: "As the first mass-produced L4 self-driving model in China, W6 offers a self-parking option of Automated Valet Parking (AVP), which consists of HAVP (Home-AVP), and PAVP (Public-AVP). With a single press of the button, the car will automatically search for a parking spot in both private and public parking areas. Whether fixed or non-fixed, surface or underground, perpendicular or parallel, Automated Valet Parking can be truly achieved with “just one click”."
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform4.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "HAVP: Self-trained Automated Valet Parking",
                desc: "With the HAVP (Home-AVP) system, W6 can train itself for parking with reliable memory.  Simply let your WM W6 learn the parking route once, and the system will automatically save the driving track and the preset parking position both locally and in the cloud to achieve automatic parking. And when you summon it, it will automatically come to you, avoiding obstacles and pedestrians on its way."
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform5.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "PAVP: Unmanned High-precision Map Parking",
                desc: "The PAVP (Public-AVP) system brings centimeter-level precise navigation on every step of your way. With a built-in super cloud computing service and high precision map, W6 can autonomously enter parking lots, follow cars, bypass obstacles, cruise across floors and park into parking spaces in specific environments. When you need it, it can also drive to your side upon your summon.(* PAVP will be achieved via OTA upgrade.)"
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "APA & RPA",
                mbTitle: "APA & RPA",
                bg: `${Resource.Resource}W6/pc/perform6.png`,
                desc: `APA (automated parking assist) is an effective way to park your car in non-fixed spaces in hotels, supermarkets, neighborhoods, office buildings, and even on the roadside. Simply select your preferred parking spot on the screen to activate APA parking and there is no additional operation of the steering wheel, throttle, brake or gears. Parking is so easy and convenient. Remote Parking Assist, or RPA, is designed for narrow, non-standard parking spots. With RPA, the embarrassment of "cars parked in, but people can't get out" will no longer exist, making parking easier and simpler.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/perform6.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: "360° Panoramic Image",
                desc: "Four wide-angle cameras and advanced intelligent imaging algorithms provides 360° panoramic vision that eliminates blind spots. Adjustable viewing angle allows you to inspect the surrounding environment when driving in complex road or parking conditions. Whether you are a novice or experienced, parking has never been more convenient and easy."
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
            title: `Intelligent Navigation, Expert Service for You<br>Living Pilot 3.0`,
            desc: `Living Pilot 3.0 AD/ADS is specially designed for<br>Chinese road conditions with 16 driving assistance features that make your<br>vehicle a safer and more comfortable space to travel.  The Automatic Emergency<br>Braking (AEB) system will autonomously brake ahead of the oncoming obstacles.<br>No matter how fast you drive, the Integrated Cruise Assist (ICA) system will<br>automatically keep the vehicle in the lane with a safe following distance.<br>Whenever you need to change lanes, simply hit the turn signal, and the<br>Automated Lane Centering (ALC) system will do the rest for you.`,
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
            title: "Long-lasting Battery Life",
            subTitle: `Impressive Performance<br>NEDC Range: 520/620km`,
            desc: `High efficiency battery pack with a maximum energy density of 180wh/kg and a highly efficient energy management system produces an NEDC range of 520/620km. With up to 120,000 charge/discharge tests, the measured battery degradation of W6 is only 5% over 160,000 km, bringing you a carefree experience for urban commuting, city excursions and cross-city trips.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/stability1.png`,
        details: [
          {
            title: "7 Seconds from 0 to 100 km",
            subTitle: "Powerful Powertrain",
            desc: `With regard to powertrain, the vehicle offers a maximum power output of 160kW and a peak torque of 2708N·m. This is achieved with a high-performance integrated motor in 68 kg only and a higher conversion efficiency (up to 95%). `
          },
          {
            title: "Fast Response, Precise Execution",
            subTitle: "Next-generation Steering Motor",
            desc: `The new-generation steering motor in W6 is 20% more efficient, providing 450°/second of precise sensing and an effective 50% improvement in response time. Take any lane you want with W6's rapid.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/stabilityBg2.png`,
        details: [
          {
            title: "Safer Braking System",
            subTitle: "ESP 9.3 + iBooster",
            desc: `The built-in Electronic Stability Program (Bosch 9.3 Version of ESP®) is driven by an industry-leading quad-core processor with millisecond control response. Together with Living Pilot 3.0, the vehicle not only ensures efficient and stable system operation but also offers quick resolution to potential driving risks. Not only that, the widely acclaimed iBooster braking system of W6 can contribute up to 90% of braking energy recovery, improving the range and creating potentials for continued ADAS upgrades.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/stabilityBg3.png`,
        details: [
          {
            title: "Multiple Drive Modes to Address All Your Needs",
            subTitle: "Personalized Driving Control Options",
            desc: `WM W6 comes with a range of drive modes to address all your needs, including the stable and reliable ECO mode, the smooth and relaxing COMFORT mode, the passionate and exciting SPORT mode as well as the acute and stable SNOW mode. Switch at your own pace and live up to every journey.`
          }
        ]
      },
    ],
    w6_04_data: {
      title: [`Stability | High-Efficiency EIC System`],
      one: {
        list: [
          {
            titleColor: "#666666", // 标题颜色
            descColor: "#666666", // 描述颜色
            title: `Long-lasting Battery Life,<br>Impressive Performance<br>NEDC Range: 520/620km`,
            desc: `High efficiency battery pack with a maximum energy density of<br>180wh/kg and a highly efficient energy management system<br>produces an NEDC range of 520/620km. With up to 120,000<br>charge/discharge tests, the measured battery degradation of W6 is<br>only 5% over 160,000 km, bringing you a carefree experience for<br>urban commuting, city excursions and cross-city trips.`,
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
                title: `7 Seconds from 0 to 100 km Powerful E-Powertrain`,
                desc: `With regard to powertrain, the vehicle offers a maximum power output of 160kW and a peak torque of 2708N·m. This is achieved with a high-performance integrated motor in 68 kg only and a higher conversion efficiency (up to 95%). `
              },
              {
                title: `Fast Response<br> Precise Execution<br> Next-generation Steering Motor`,
                desc: `The new-generation steering motor in W6 is 20% more efficient, providing 450°/second of precise sensing and an effective 50% improvement in response time. Take any lane you want with W6's rapid.`
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
            title: `Safer Braking System<br>ESP 9.3 + iBooster`,
            desc: `The built-in Electronic Stability Program (Bosch 9.3 Version of<br>ESP®) is driven by an industry-leading quad-core processor with<br>millisecond control response. Together with Living Pilot 3.0, the<br>vehicle not only ensures efficient and stable system operation but<br>also offers quick resolution to potential driving risks. Not only that,<br>the widely acclaimed iBooster braking system of W6 can contribute<br>up to 90% of braking energy recovery, improving the range and<br>creating potentials for continued ADAS upgrades.`,
            bg: `${Resource.Resource}W6/pc/stabilityBg2.png`
          },
          {
            padding: true,
            title: `Multiple Drive Modes to Address All Your Needs<br>Personalized Driving Control Options`,
            desc: `WM W6 comes with a range of drive modes to address all your<br>needs, including the stable and reliable ECO mode, the smooth and<br>relaxing COMFORT mode, the passionate and exciting SPORT<br>mode as well as the acute and stable SNOW mode. Switch at your<br>own pace and live up to every journey.`,
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
            title: "5-star Safety",
            subTitle: "Five-star Safety Rating Bodywork Protection",
            desc: `Designed to achieve a C-NCAP 5-star safety rating, W6 adopts enhanced impedance and energy absorption capability. Materials with a strength of 1,500 MPa are used at key parts of the bodywork to maximize the safety of passengers. Strong cabin protection is guaranteed by high-strength steel, whose weight accounts for around 75% of the weight of the car.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safety1.png`,
        details: [
          {
            title: "Safe and Secure",
            subTitle: "Multi-effect Battery with Safety Protection",
            desc: `The new generation of battery pack has passed 66 high-standard tests, which is far above the national standard. The innovative matrix battery pack and the double-reinforced side design protect the battery pack from external mechanical damage. High-strength sealant combined with a high-strength aluminium shell and anti-impact coating provides extreme protection, as well as IP68 water and dustproofing. Users no longer need to worry about wading in rainy days or driving in complex road conditions.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safety2.png`,
        details: [
          {
            title: "Sensing and Caring",
            subTitle: "Alerts for Fatigued & Distracted Driving",
            desc: `The vehicle will actively sense the driver's state of distraction or fatigue. Once abnormalities are detected, the WIMI voice assistant will send out voice alerts or warnings to protect the safety of the driver and erase long driving concerns.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}W6/pc/safetyBg3.png`,
        details: [
          {
            title: "Healthy Cabin",
            subTitle: "CleanPro Healthy First-class Cabin（* ACE version only）",
            desc: `W6 comes with a healthy and reliable multiple-stage air filtration system: FCN95 micron cabin air filters with >95% filtration efficiency. AQS monitors and automatic controls air quality. Active PM2.5 monitoring system monitors in-cabin air quality. Negative ion purifiers provide further air purification.`
          }
        ]
      },
    ],
    w6_05_data: {
      title: [`Safety | Multidimensional Protection`],
      one: {
        list: [
          {
            title: `Five-star C-NCAP Safety Recognition<br>Five-star Safety Rating Bodywork Protection`,
            desc: `Designed to achieve a C-NCAP 5-star safety rating, W6 adopts<br>enhanced impedance and energy absorption capability. Materials<br>with a strength of 1,500 MPa are used at key parts of the bodywork<br>to maximize the safety of passengers. Strong cabin protection is<br>guaranteed by high-strength steel, whose weight accounts for<br>around 75% of the weight of the car.`,
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
                title: `Safe and Secure<br>Battery with Multi-effect Safety Protection`,
                desc: `The new generation of battery pack has passed 66 high-standard tests, which is far above the national standard. The innovative matrix battery pack and the double-reinforced side design protect the battery pack from external mechanical damage. High-strength sealant combined with a high-strength aluminium shell and anti-impact coating provides extreme protection, as well as IP68 water and dustproofing. Users no longer need to worry about wading in rainy days or driving in complex road conditions.`
              }
            ],
            bg: `${Resource.Resource}W6/pc/safety1.png`
          },
          {
            bottom: true,
            desc: [
              {
                title: `Sensing and Caring<br><br>Voice Control Alerts for Fatigued & Distracted Driving`,
                desc: `The vehicle will actively sense the driver's state of distraction or fatigue. Once abnormalities are detected, WIMI, the voice control, will send out warnings to protect the safety of the driver and erase long driving concerns.`
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
            title: "Healthy Cabin<br>CleanPro Healthy First-class Cabin",
            desc: "W6 comes with a healthy and reliable multiple-stage air filtration<br>system: FCN95 micron cabin air filters with >95% filtration efficiency.<br>AQS monitors and automatic controls air quality. Active PM2.5<br>monitoring system monitors in-cabin air quality. Negative ion<br>purifiers provide further air purification."
          }
        ]
      }
    }
  },
  E5Page: {
    sloganName: require("@/static/E5/slogan-name-en.png"),
    sloganNameMb: require("@/static/E5/slogan-name-mb-en.png"),
    life: "505 km NEDC range",
    price: ["500 FLOW ¥160,100", "500 SAGE ¥170,100"],
    more: "configurations",
    desc: `Tailored for rental and travel platforms<br>
            Empowered to enhance operational efficiency <br>
            and enterprise value`
  },
  EX5Page: {
    vehicleName: `${Resource.Resource}/EX5/slogan-name-en.png`,
    bannerData: {
      btn: [
        {
          name: "Configurations",
          vehicle: "EX5-Z",
          type: "sheet",
          link: "",
          class: "btn-white",
          show: ["en"]
        }
      ],
      title: "Smart Pure Electric SUV",
      price: `Post-subsidy Starting Price: <br> From <b style="font-size:1.5em;font-weight: normal">¥169,800</b> up`,
      desc: [
        {
          headline: `Sports Aesthetic Design<br> for Gen Z`,
          desc: `Manifest Young and Energetic`
        },
        {
          headline: `Living Pilot<br> AD/ADAS`,
          desc: `Make you feel safe`
        },
        {
          headline: `Leading battery management system (“BMS”)<br> and multi-layer battery data ecosystem`,
          desc: `3、Slow degradation and advanced safety technologies`
        },
        {
          headline: `Five-star C-NCAP Safety Recognition`,
          desc: `High-strength steel structure at submarine grade<br> with solid anti-collision design`
        }
      ]
    },
    descData: [
      {
        title: `Intelligent and Handy`
      },
      {
        title: `For Gen Z`
      },
      {
        title: `Futuristic Tech, Worry-free`
      },
      {
        title: `High Quality and Safety`
      }
    ],
    view3Data: {
      btn: "WM EX5-Z VR Tour",
      params: [
        `Max Power`,
        `Biggest Continue<br>Voyage Course`,
        `Charging Time`,
        `30%-80%`
      ],
      appearance: [
        {
          name: "Gentian Blue",
          color: "#013B71"
        },
        {
          name: "Quiet Grey",
          color: "#909294"
        },
        {
          name: "Extreme White",
          color: "#FFFFFF"
        }
      ],
      appearancemb: [
        {
          name: "Gentian<br>Blue",
          color: "#013B71"
        },
        {
          name: "Quiet<br>Grey",
          color: "#909294"
        },
        {
          name: "Extreme<br>White",
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
              title: `CleanPro In-Cabin Purification`,
              subTitle: ``,
              desc: `CN95 certified. Silently cleaning the cabin air. Now equipped with a UV anti-bacterial surface cleanser.`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-in-02.png`,
          details: [
            {
              title: `Powerful upgrades to “Xiaowei”`,
              subTitle: ``,
              desc: `The in-cabin AI Xiaowei smart voice control system has been upgraded to control self-driving, driving modes, doors and window control, seat adjustment, as well as many other complicated operations.`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-out-01.png`,
          details: [
            {
              title: `Upgraded 15.6-inch Touchscreen Display`,
              subTitle: ``,
              desc: `The new 15.6-inch vertical monitor supports interacted operations with the upper and lower split screens, where videos and navigation can be displayed simultaneously.`
            },
            {
              title: `LivingMate Vehicle Infotainment System`,
              subTitle: ``,
              desc: `The new connected ecology fully integrates your mobile phone with the vehicle interface, to offer the smoothest user experience. Abundant software and hardware are accessed and connected to serve the connected ecosystem*, with audio content recommendations from QQ music, Himilaya Podcasts, and Kaola FM.`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-out-02.png`,
          details: [
            {
              title: `Vehicle-to-Home Connectivity`,
              subTitle: ``,
              desc: `EX5-Z Lead interacts with smart home appliances, including Gree air-conditioners, to achieve long-range vehicle-to-home control.`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-in-03.png`,
          details: [
            {
              title: `Living Pilot Intelligent Driver Assistance System`,
              subTitle: ``,
              desc: `EX5-Z Lead is equipped with 11 driver assistance functions as well as the upgraded L2+ self-driving module with active safety monitoring.`
            }
          ]
        }
      ],
      data_01: {
        title: [`Intelligent and Handy`],
        one: {
          list: [
            {
              title: `CleanPro In-Cabin Purification`,
              desc: `“CleanPro” technology  with CN95 Health and Safety recognition<br>Which integrates a robust air filtration system and an intelligent<br> ultraviolet light sterilization function and could provide a safe<br> and hygienic environment within the vehicle.<br>* CN95 Health and Safety Certificate is gained<br> with outstanding performance in 4 major indicators: <br>fresh air, low noise, UV anti-bacterial performance, and healthy materials.`,
              bg: `${Resource.Resource}EX5/dia-in-01.png`
            },
            {
              title: `More Powerful Smart voice control`,
              desc: `The in-cabin smart voice control system, “WIMI” now <br>has 5 new modules added, covering self-driving,<br> driving modes, control of doors and windows, adjusting seats, <br>and many complicated operations.`,
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
                  title: `Upgraded 15.6-inch Vertical Monitor`,
                  desc: `The new 15.6-inch vertical monitor supports interacted operations with the upper and lower split screens, where videos and navigation can be displayed simultaneously, so you won’t miss any messages while having a joyful ride.`
                },
                {
                  title: `Living Engine smart cockpit`,
                  desc: `The new smart cockpit fully integrates mobile phone and vehicles, to offer smooth user experience and become the intelligent and digital assistant for the users.
Abundant software and hardware are accessed and connected to serve the ecology*, with customized recommendation of audio contents from QQ music, Ximalaya, and Kaola FM for on-demand subscription.`,
                  // tips: `*This function is about to come online in the OTA upgrade`
                }
              ],
              bg: `${Resource.Resource}EX5/dia-out-01.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `IoT of Multiple Ecologies`,
                  desc: `After the Xiaomi smart ecology, and EX5-Zcooperates with Gree to achieve more interaction between vehicles and homes to make the application more family-friendly.`
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
              title: `Living Pilot AD/ADAS`,
              desc: `Upgraded L2+ (i.e., between L2 and L3) ADAS functiondriving assistance,<br> the system achieved has achieved 12 driving assistance scenarios<br> (such as adaptive cruise control assistant, integrated cruise assistant,<br> traffic jam assistant, automated parking assistant, and automated emergency braking).<br> The systemIt is customized based on China's road conditions, you will feel safe<br> already the moment you sit in it because it stands out in perceiving potential danger,<br> driving on fast lane and following other vehicles at low speed, etc. `,
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
              title: `Large Electric Panoramic Sunroof`,
              subTitle: ``,
              desc: `Large, panoramic sunroof`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-02-in-02.png`,
          details: [
            {
              title: `Mars Orange" Interior`,
              subTitle: ``,
              desc: `Distinctive, eye-catching interior design.`
            }
          ]
        },
        {
          mbBg: `${Resource.Resource}EX5/dia-02-in-03.png`,
          details: [
            {
              title: `Playful, Sporty Pure Electric SUV`,
              subTitle: ``,
              desc: `Refreshed 18-inch wheels with special red calipers “S” branded`
            }
          ]
        },
      ],
      data_02: {
        title: [`For Gen Z`],
        one: {
          list: [
            {
              title: `Large Electric Panoramic Sunroof`,
              desc: `The large electric sunroof provides a wide view that you can enjoy all by yourself.`,
              bg: `${Resource.Resource}EX5/dia-02-in-01.png`
            },
            {
              title: `"Mars Orange" Interior design`,
              desc: `Distinctive, eye-catching interior<br> 
Safe and stable racing seats with<br> the same color tone brings you young and energetic driving experience.`,
              bg: `${Resource.Resource}EX5/dia-02-in-02.png`
            },
            {
              title: `Sports Aesthetic Design`,
              titleColor: "#666666", // 标题颜色
              descColor: "#666666",
              desc: `Appearance of floating roof, brand-new design of 18-inch<br> wheels with special red calipers
“S” logo at the side gives the<br> best play to the young and energetic gene in the blood.`,
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
              title: `Low Battery Degradation`,
              subTitle: ``,
              desc: `Battery capacity proven to reduce by only 3% after 200,000 kilometers of driving.`
            }
          ]
        },
      ],
      data_03: {
        title: [`Futuristic Tech, Worry-free`],
        one: {
          list: [
            {
              padding: true,
              title: "Slow battery capacity degradation",
              desc: `Capable of handing long distance with slow battery capacity degradation, proven to reduce by only 3% after driving 200,000 kilometers.<br>
The long-lasting and high- performance battery gives you the quality assurance.`,
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
              title: `C-NCAP 5-Star Safety Certificate`,
              subTitle: ``,
              desc: `High-strength, submarine-grade steel structure with solid anti-collision design.`
            },
            {
              title: `Leading battery management system (“BMS”) and multi-layer battery data ecosystem`,
              subTitle: ``,
              desc: `By Vehicle-to-cloud communication technology, we could collect, monitor and analyze battery data automatically in real time via these two systems to ensure thermal safety and prolong battery durability.`
            }
          ]
        },
      ],
      data_04: {
        title: [`High Quality and Safety`],
        one: {
          list: [
            {
              top: true,
              bottom: true,
              padding: true,
              desc: [
                {
                  title: `Five-star C-NCAP Safety Recognition`,
                  desc: `High-strength, submarine-grade steel structure with solid anti-collision design to ensure your safe. `
                },
                {
                  title: `Leading battery management system (“BMS”) and multi-layer battery data ecosystem`,
                  desc: `By Vehicle-to-cloud communication technology, we could collect, monitor and analyze battery data automatically in real time via these two systems to ensure thermal safety and prolong battery durability.`
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
    vehicleName: `${Resource.Resource}EX6-PLUS/slogan-name-en.png`,
    bannerData: {
      btn: ["configurations"],
      title: `Smart, 6-Seater Pure Electric SUV`,
      price: `￥279,900 comprehensive post-<br>
subsidy standard price`,
      desc: [
        {
          headline: `5-star safety design`,
          desc: `5-star safety standard vehicle body frame`
        },
        {
          headline: `2+2+2x2x2 seating layout`,
          desc: `Spacious and comfortable`
        },
        {
          headline: `CleanPro air purification`,
          desc: `Micron-level clean air`
        },
        {
          headline: `Gesture control`,
          desc: `Full control at a glance`
        }
      ]
    },
    descData: [
      {
        title: `Smart | Technology That Gets You`,
        details: `Make every drive your own journey`
      },
      {
        title: `Comfort | A Joy To Drive`,
        details: `Exterior beauty and high-quality interior space`
      },
      {
        title: `Protection | Uncompromised Safety`,
        details: `Smart safety, built for peace of mind`
      },
      {
        title: `Fun | Your Space To Enjoy`,
        details: `Immersive audio-visual entertainment shared with the whole family `
      }
    ],
    view3Data: {
      btn: "WM EX6 Plus VR Tour",
      params: [
        `Max Power`,
        `Biggest Continue<br>Voyage Course`,
        `Charging Time`,
        `30%-80%`
      ]
    },
    dialogData: {
      data_01: {
        title: [`Smart`, `Technology that gets you`],
        one: {
          list: [
            {
              title: `Living Logo`,
              desc: `Unique, perfectly integrated illuminating vehicle badge<br>Indicates locking/unlocking and battery state-of-charge`,
              bg: `${Resource.Resource}EX6-PLUS/dia-01-in-01.png`
            },
            {
              title: `Automatic, retractable door handles`,
              desc: `Present to the driver automatically on approach<br>Remote Bluetooth control`,
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
                  title: `Hands-Free Electronic Tailgate`,
                  desc: `Kick-activated, convenient trunk access`,
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
              title: `Vehicle-to-Home Smart Connectivity`,
              desc: `Connectivity to 20+ Xiaomi Mijia smart home appliances<br>Smart home appliances including air conditioners and wireless vacuum<br> cleaners can start preparing your home as you leave work`,
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
                  title: `Updates Over-the-Air`,
                  desc: `Whole-vehicle hardware and software updates.Integrate the latest trends as they emerge`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-02.png`
                },
                {
                  title: `Full control at a glance<br>Powerful recognition technology`,
                  isBR: true,
                  desc: `• Facial recognition<br>• Wake up voice commands<br>• Fatigue monitoring`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-02.png`
            },
            {
              top: "top",
              desc: [
                {
                  title: `Bluetooth Phone Key`,
                  desc: `Allow remote access to friends and family from anywhere, all through the WM app`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-03.png`
                },
                {
                  title: `Smart Locking/Unlocking`,
                  desc: `Automatic locking and unlocking as the driver approaches or steps away from the vehicle`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-03.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-03.png`
            },
            {
              top: "top",
              bottom: "bottom",
              desc: [
                {
                  title: `‘Xiaowei’ On-Board AI Assistant<br>Say it, and it’s done`,
                  desc: `Your life at your command.Everything from music, podcasting, navigation, air conditioning to the windows and sunroof – even your home appliances – all controlled in one sentence`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-01-out-04.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-01-out-04.png`
            }
          ]
        },
        five: {
          list: [
            {
              title: `Prepared for any occasion`,
              desc: `Summon Xiaowei to activate 5 different modes:<br>Date night mode<br>Cinema mode<br>Clean air mode<br>Work schedule mode<br>Parent-child mode`,
              bg: `${Resource.Resource}EX6-PLUS/dia-01-in-04.png`
            }
          ]
        }
      },
      data_02: {
        title: [`Comfort`, `A joy to drive`],
        one: {
          list: [
            {
              titleColor: "#333333",
              descColor: "#333333",
              title: `Flow lighting`,
              isBR: true,
              desc: `• LED front headlights<br>• Integrated LED taillights<br>• Flowing turn signal<br>• Intelligent "Living Logo"`,
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
                  mbTitle: `灵感双色车身`,
                  mbSubtitle: `极简美学`,
                  title: `Multi-coloured body`,
                  desc: `Minimalist aesthetic design inspired by luxury yacht architecture`
                },
                {
                  bg: `${Resource.Resource}EX6-PLUS/dia-02-out-01.png`,
                  mbTitle: `2+2+2舒享空间`,
                  mbSubtitle: `灵动惬意`,
                  title: `2x2x2 spacious seating arrangement`,
                  desc: `Seating layout increases passenger comfort on long journeys<br>The separated middle seats allow passengers their own independent<br> space`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-02-out-01.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `Independent middle row seats`,
                  desc: `VIP style seating with independent armrests and ergonomic seating design<br>Combination of hard and soft fabrics to maximize comfort`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-02-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-02-out-02.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `World-first CleanPro purification system Micron-level purification`,
                  isBR: true,
                  desc: `•CN95 air filter<br>•AQS real-time air quality monitor<br>•PM2.5 indicator<br>•Negative-ion purifier<br>•UVC Ultraviolet cleanser`,
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
              title: `1.14m2 ultra-large panoramic sunroof`,
              desc: `98% heat insulation efficiency A well-lit cabin interior during the day, an unobstructed view of the stars at night`,
              bg: `${Resource.Resource}EX6-PLUS/dia-02-in-02.png`
            }
          ]
        }
      },
      data_03: {
        title: [`Protection`, `Uncompromised safety`],
        one: {
          list: [
            {
              titleColor: "#333333",
              descColor: "#333333",
              title: `5-star safety design`,
              desc: `5-star safety standard vehicle body frame<br>
Submarine-grade high-strength steel battery casing coupled with a 75.8%<br>
ultra-high strength body for maximum impact protection`,
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
                  title: `4 layers of battery protection`,
                  desc: `Proprietary battery pack exceeding standard test results for safety
Shockproof, IP68 waterproof and built using ultra-high strength steel reinforcements
Outer casing prevents cell damage and intrusion in the event of an accident`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-03-out-02.png`
                }
              ],
              bg: `${Resource.Resource}EX6-PLUS/dia-03-out-01.png`
            },
            {
              bottom: true,
              desc: [
                {
                  title: `APA Automatic Parking Assist`,
                  desc: `A total of 12 surrounding radar sensors enable precision parking assistance`,
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
              title: `Living Pilot complete Level 2 ADAS system`,
              desc: `WM Motor’s Living Pilot Advanced Driver Assistance system is specifically configured<br> for Chinese road conditions and environment, enhancing accuracy`,
              bg: `${Resource.Resource}EX6-PLUS/dia-03-in-02.png`
            },
            {
              padding: true,
              title: `NEDC 501km Range`,
              desc: `When the family are together, time is precious, making long-range essential<br>
High energy modules and efficient energy management achieve a worry-free<br> range of 501km on a single charge<br><br>
160kW/315N·m efficient drive<br>
Smart pedal<br>
6.6kW bidirectional charger<br>
360 degree AR camera vision`,
              bg: `${Resource.Resource}EX6-PLUS/dia-03-in-03.png`
            }
          ]
        }
      },
      data_04: {
        title: [`Fun`, `Your space to enjoy`],
        one: {
          list: [
            {
              title: `WM theater-style surround sound`,
              desc: `10 high-powered speakers perfectly balance audio distribution,<br> filling the whole cabin with rich surround sound`,
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
                  title: `Intelligent atmospheric lighting`,
                  desc: `Independently adjusts between 7 atmospheric lighting modes 42-colour variations blend and change in time with your music`,
                  bg: `${Resource.Resource}EX6-PLUS/dia-04-out-01.png`
                },
                {
                  title: `Wireless phone charging`,
                  desc: `Say goodbye to charging cords, simply place your phone on the central console to charge while driving
Supports most mainstream wireless chargers`,
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
              title: `Fully immersive audio-visual entertainment`,
              desc: `12.8-inch smart rotating touchscreen and 12.3-inch interactive LCD digital dashboard<br>
A single account integrates your entire mobile entertainment ecosystem, including video<br> 
streaming through iQiyi, podcasting through Himalaya and music via QQ Music<br>
Content and streaming via unlimited 4G connection`,
              bg: `${Resource.Resource}EX6-PLUS/dia-04-in-02.png`
            }
          ]
        }
      }
    }
  },
  EX5JKXPage: {
    vehicleName: `${Resource.Resource}EX5-JKX/pc/slogan-name-en.png`,
    vehicleNamemb: `${Resource.Resource}EX5-JKX/mb/slogan-name-mb-en.png`,
    bannerData: {
      btn: ["configurations"],
      title: ["Smart, electric SUV", "（for Key Account）"],
      desc: [
        {
          headline: `50,000Km`,
          desc: `Up to 5 years or 500,000 Km warranty`
        },
        {
          headline: `400/520Km`,
          desc: `Longest NEDC Range`
        },
        {
          headline: `From ¥160,800`,
          desc: `Post-subsidy Starting Price`
        }
      ]
    },
    configData: {
      live520: ["520Km", "(520 Km NEDC range)"],

      desc520: "Price after subdidy：From ¥176,800",
      live400: ["400Km", "(400 Km NEDC range)"],
      desc400: "Price after subdidy：From ¥160,800",
      btn: "configurations",
      slogan: `Tailored for rental and travel platforms<br>
Empowered to enhance operational efficiency and enterprise value<br>
Get & GO, enjoy smart mobility`
    }
  },
  M7Page: {
    bannerData: {
      title: "Comprehensive Scenarios Intelligent Mobile Space",
      vehicleName: require("@/static/M7/slogan-name-pc-en.png"),
      btn: ["在线咨询"],
      bg: require("@/static/M7/PC.png"),
      btnData: [
        {
          name: "在线咨询",
          vehicle: "M7",
          type: "service",
          class: "btn-white",
          show: ["zh"]
        }
      ],
      desc: [
        {
          headline: "Comprehensive Scenarios Intelligent Mobile Space"
        },
        {
          headline: "Comprehensive Scenarios Intelligent Interaction"
        },
        {
          headline: "Life-like Intelligent Space"
        }
      ]
    },
    descList: [
      {
        key: "m7_01",
        title: "Comprehensive Scenarios Self-driving Solution",
        bg: require("@/static/M7/wm1.png")
      },
      {
        key: "m7_02",
        title: "Comprehensive Scenarios Intelligent Interaction",
        bg: require("@/static/M7/wm2.png")
      },
      {
        key: "m7_03",
        title: "Life-like Intelligent Space",
        bg: require("@/static/M7/wm3.png")
      }
    ],
    data_01_mb: [
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-01.jpg`,
        details: [
          {
            title: "",
            subTitle: "",
            desc: `M7 comes with a smart, all-scenario driving capability that encompasses the full spectrum of intelligent driving scenarios ranging from parking to urban roads, to intercity highways. Enjoy your intelligent journey, anytime, anywhere.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-02.jpg`,
        details: [
          {
            title: "",
            subTitle: "",
            desc: "32 Sensors for 360° User Perception"
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-out-01.jpg`,
        details: [
          {
            title: "",
            subTitle: "",
            desc: `Seven 8-megapixel HD Cameras`
          },
          {
            title: "",
            subTitle: "",
            desc: `World’s First: Three Self-zooming, High Precision BVR Solid-state LIDARs`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-03.jpg`,
        details: [
          {
            title: "",
            subTitle: "",
            desc: `World’s First: Top-of-the-line Orin-X AD Chips with a Maximum Computing Power of 1,016 TOPS.<br><br>All-new EEA with Central Domain Control: Efficient, Stable, Scalable`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-01-in-04.jpg`,
        details: [
          {
            title: "Disruptive Touch-based Shift Design",
            subTitle: "",
            desc: ``
          }
        ]
      }
    ],
    data_01: {
      title: [
        `Comprehensive Scenarios Self-driving Solution`,
        `Notes: The functions below are not equipped on all models, and the detailed configuration please refer to the final launched models.`
      ],
      one: {
        list: [
          {
            desc: `M7 comes with a smart, all-scenario driving capability that<br/> encompasses the full spectrum of intelligent driving scenarios<br/> ranging from parking to urban roads, to intercity highways. <br/>Enjoy your intelligent journey, anytime, anywhere.`,
            title: "",
            bg: `${Resource.Resource}M7/dia-01-in-01.jpg`
          },
          {
            title: "",
            desc: "32 Sensors for 360° User Perception",
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
                title: ``,
                desc: `11 Cameras, including seven ultra-high-resolution cameras and four high-resolution cameras`
              },
              {
                title: ``,
                desc: `Three variable-focus LiDARs, which will be able to cover over 330° with an angular resolution up to 0.05°`
              }
            ],
            bg: `${Resource.Resource}M7/dia-01-out-01.jpg`
          }
        ]
      },
      three: {
        list: [
          {
            title: `<p>World’s most powerful autonomous driving<br> chips,Orin-X Chips with a Maximum Computing<br> Power of 1,016 tera operations per second, or TOPS, in total</p><br><p>All-new EEA with Central Domain Control</p>`,
            desc: `Efficient, Stable, Scalable`,
            bg: `${Resource.Resource}M7/dia-01-in-03.jpg`
          },
          {
            padding: true,
            title: ``,
            desc: `Disruptive Touch-based Shift Design`,
            bg: `${Resource.Resource}M7/dia-01-in-04.jpg`
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
            desc: `M7 is a perfect rendering of the "Vitalligent" design concept of WM Motor's Master Series,  i.e. "vitality + intelligent interaction". Sensing you, knowing you, and meeting your needs at all times.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/mb/dia-02-in-02-mb.jpg`,
        details: [
          {
            title: `Human-like out-of-car interaction`,
            subTitle: ``,
            desc: `Consistent with its unique "Vitalligent" philosophy, WM Motor has equipped M7 with a wealth of external emotional interaction hardware, including smart light strips at the front and rear, external microphones, interactive luminous logo, hidden door handles, external speakers and more.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/mb/dia-02-in-03-mb.jpg`,
        details: [
          {
            title: `Ultra-wideband Technology (UWB)`,
            subTitle: ``,
            desc: `<p>Centimeter-level</p><p>Precise Positioning</p>`
          }
        ]
      }
    ],
    data_02: {
      title: [
        `Comprehensive Scenarios Intelligent Interaction`,
        `Notes: The functions below are not equipped on all models, and the detailed configuration please refer to the final launched models.`
      ],
      one: {
        list: [
          {
            title: ``,
            desc: `M7 is a perfect rendering of the "Vitalligent" design concept of WM<br>Motor's Master Series,  i.e. "vitality + intelligent interaction". Sensing<br>you, knowing you, and meeting your needs at all times.`,
            bg: `${Resource.Resource}M7/dia-02-in-01.jpg`
          },
          {
            title: `Human-like out-of-car interaction`,
            desc: `Consistent with its unique "Vitalligent" philosophy, WM Motor has equipped M7<br>with a wealth of external emotional interaction hardware, including smart light<br>strips at the front and rear, external microphones, interactive luminous logo,<br>hidden door handles, external speakers and more.`,
            bg: `${Resource.Resource}M7/dia-02-in-02.jpg`
          },
          {
            padding: true,
            title: `Ultra-wideband Technology (UWB)`,
            desc: `<p>360-degree Sensing</p><p>Centimeter-level Precise Positioning</p>`,
            bg: `${Resource.Resource}M7/dia-02-in-03.jpg`
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
            desc: `With a disruptive "zero button" philosophy and original "smart wear" applications, M7 features a minimalist line interior layout that reduces the visual burden and greatly simplifies user actions. A truly smart and life-like space is thus shaped to provide senseless interaction between the car and users.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-in-02.jpg`,
        details: [
          {
            title: `Innovative Dual-tone Asymmetric Design`,
            subTitle: ``,
            desc: ``
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-in-03.jpg`,
        details: [
          {
            title: `Four-screen Interconnection`,
            subTitle: ``,
            desc: ``
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-out-01.jpg`,
        details: [
          {
            title: `i-Rota Super Dial`,
            subTitle: ``,
            desc: `A new generation of intelligent, super-interactive cockpit control hub combining WM's "Zero Button" and "Vitalligent" design concepts. Looking like a smartwatch, i-Rota is available as a hub knob for exercising control over a host of functions spanning a multitude of scenarios.`
          }
        ]
      },
      {
        mbBg: `${Resource.Resource}M7/dia-03-out-02.jpg`,
        details: [
          {
            title: `i-Surf Technology Skin`,
            subTitle: ``,
            desc: `a patented interaction carrier originally developed by WM Motor in order to deliver interior emotional interaction within the passenger compartment. Thanks to the full-scene programming capability of WM SOA, i-Surf supports a series of user-defined interface contents, ranging from regular information (e.g. weather), to greeting scene settings, to entertainment elements such as animations and mini-games.`
          }
        ]
      }
    ],
    data_03: {
      title: [
        `Life-like Intelligent Space`,
        `Notes: The functions below are not equipped on all models, and the detailed configuration please refer to the final launched models.`
      ],
      one: {
        list: [
          {
            desc: `With a disruptive "zero button" philosophy and original "smart wear" applications,<BR>M7 features a minimalist line interior layout that reduces the visual burden and<br>greatly simplifies user actions. A truly smart and life-like space is thus shaped to<br>provide senseless interaction between the car and users.`,
            title: ``,
            bg: `${Resource.Resource}M7/dia-03-in-01.jpg`
          },
          {
            title: ``,
            desc: `Exclusive Living Space: WM M7 comes with a length of 4,930mm, a wheelbase of 2,918mm and a range of 700km.<br/>Innovative Dual-tone Asymmetric Design<br/>`,
            bg: `${Resource.Resource}M7/dia-03-in-02.jpg`
          },
          {
            title: ``,
            desc: `Four-screen Interconnection`,
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
                title: `i-Rota Knob`,
                desc: `A new generation of intelligent, super-interactive cockpit control hub combining "Zero Physical Buttons" and "Vitalligent" design concepts. Looking like a smartwatch, i-Rota allows users to control functions displayed on the main screen by rotating the knob, a design especially convenient when driving.`
              }
            ],
            bg: `${Resource.Resource}M7/dia-03-out-01.jpg`
          },
          {
            top: true,
            padding: true,
            desc: [
              {
                title: `i-Surf dot-matrix screen`,
                desc: `A patented interaction carrier originally developed by WM Motor to provide vivid user interactions, such as greeting the user, displaying the progress of vehicle’s responses and even responding to the user’s voice commands. With the benefit of WM SOA, it also empowers users to define interface content, like  animations, mini-games, etc.`
              }
            ],
            bg: `${Resource.Resource}M7/dia-03-out-02.jpg`
          }
        ]
      }
    }
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
      price: "综合补贴后：¥180,100元起"
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
  },
  ReservePage: {
    title: `<p>Scan to</p><p>order your</p><p>Models.</p>`
  }
};
