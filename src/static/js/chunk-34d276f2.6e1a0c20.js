(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34d276f2"],{"0af5":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var a=n("b775"),s={appletPostList:"/posts/appletPostList",appletPostDetail:"/posts/appletPostDetail"};function i(t){return Object(a.a)({url:s.appletPostList,method:"get",params:t})}function o(t){return Object(a.a)({url:s.appletPostDetail,method:"get",params:t})}Object.keys(s).forEach((function(t){s[t]="https://openapi.wm-imotor.com/openApi"+s[t]}))},"35e6":function(t,e,n){"use strict";n("b264")},"362c":function(t,e,n){"use strict";n("e80a")},4052:function(t,e,n){"use strict";n.r(e);var a=n("0951"),s=n.n(a),i=n("3779"),o=n("0af5");function r(t,e,n,a,s,i,o){try{var r=t[i](o),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(a,s)}var c,u,p={name:"NewsPcDetail",components:{ContainerLayout:i.a},data:function(){return{data:{}}},created:function(){this.getDetail(this.$route.query.postId)},methods:{getDetail:(c=s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)({postsId:e});case 2:n=t.sent,a=n.data,1===n.code&&(this.data=a);case 6:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(n,a){var s=c.apply(t,e);function i(t){r(s,n,a,i,o,"next",t)}function o(t){r(s,n,a,i,o,"throw",t)}i(void 0)}))},function(t){return u.apply(this,arguments)})}},l=(n("362c"),n("35e6"),n("cba8")),d=Object(l.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerLayout",{attrs:{isHeader:!0,isFooter:!0}},[n("template",{slot:"main"},[n("div",{staticClass:"bigContainer"},[n("div",{staticClass:"title"},[t._v(t._s(t.data.postTitle))]),n("div",{staticClass:"creationDate"},[t._v("\n        "+t._s(t.$t("newsPage.headLine"))+" | "+t._s(t.data.createTime)+"\n      ")]),n("div",{attrs:{id:"htmlSEE"},domProps:{innerHTML:t._s(t.data.postContent)}})])])],2)}),[],!1,null,"67700047",null);e.default=d.exports},b264:function(t,e,n){},e80a:function(t,e,n){}}]);