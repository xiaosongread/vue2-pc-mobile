(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-04468a1b"],{"2ed01":function(t,e,n){},6480:function(t,e,n){"use strict";n.r(e);var a=n("0951"),i=n.n(a),c=n("beee");function s(t,e,n,a,i,c,s){try{var o=t[c](s),r=o.value}catch(t){return void n(t)}o.done?e(r):Promise.resolve(r).then(a,i)}var o,r,u={name:"TestDriveSuccess",data:function(){return{pageData:{},mobile:this.isMobileDevice}},created:function(){this.getPageData()},methods:{getPageData:(o=i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c.a)({pointType:6,isCarUser:0});case 3:1===(e=t.sent).code&&(this.pageData=e.data||{}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$toast(t.t0.desc||"抱歉，加载出错啦");case 10:case"end":return t.stop()}}),t,this,[[0,7]])})),r=function(){var t=this,e=arguments;return new Promise((function(n,a){var i=o.apply(t,e);function c(t){s(i,n,a,c,r,"next",t)}function r(t){s(i,n,a,c,r,"throw",t)}c(void 0)}))},function(){return r.apply(this,arguments)}),onJumpClick:function(){this.pageData.linkUrl&&(window.gio("track",{pagename:"预约试驾成功页",buttonname:this.pageData.buttonName||"-",platformname:"威马汽车官网",platformcode:"PL1576561305851587",activityname:"-",activityID:"-",channelname:"威马汽车官网",channelcode:"MC1577074835688809",pointname:"-",pointcode:"-",paramname:"-"}),window.location.href=this.pageData.linkUrl)}}},p=(n("997e"),n("cba8")),f=Object(p.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return this.mobile?e("div",{staticClass:"test-drive-success"},[e("img",{staticClass:"bg-img",attrs:{src:this.pageData.imgUrl||""}}),e("div",{staticClass:"jump-btn",on:{click:this.onJumpClick}},[this._v("\n    "+this._s(this.pageData.buttonName||"")+"\n  ")])]):this._e()}),[],!1,null,"686a8180",null);e.default=f.exports},"997e":function(t,e,n){"use strict";n("2ed01")},beee:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("b775"),i=n("f121"),c={configInfo:"community/configInfo"};function s(t){return Object(a.a)({url:c.configInfo,method:"get",params:t,headers:{version:"1.0.0"}})}Object.keys(c).forEach((function(t){c[t]=i.a.BASE_API_ZHIXING+c[t]}))}}]);