webpackJsonp([1],{IViw:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},i,!1,function(t){e("jNCn")},null,null).exports,o=e("/ocq"),l=e("mvHQ"),c=e.n(l),r=e("mtWM"),v=e.n(r),d={name:"HelloWorld",data:function(){return{donates:void 0}},created:function(){this.initData()},methods:{initData:function(){var t=this;MtaH5.clickStat("donate",{show:"true"}),this.getDonateList().then(function(s){t.donates=s})},getDonateList:function(){return v.a.get("https://www.jcbjxyh.cn/v1/donate/getDonateList").then(function(t){if(console.log(c()(t.data)),1===t.data.result)return t.data.data}).catch(function(t){console.log(t)})},startmarquee:function(t,s,e){var n,i=6*document.documentElement.style.fontSize,a=document.getElementById("WXCon"),o=0;function l(){n=setInterval(c,s),a.scrollTop+=1}function c(){a.scrollTop%t!=0&&a.scrollTop%(a.scrollHeight-i-1)!=0?(o=a.scrollTop,a.scrollTop+=1,(o>=a.scrollHeight||o==a.scrollTop)&&(a.scrollTop=0)):(clearInterval(n),setTimeout(l,e))}a.scrollTop=0,setTimeout(l,e)}},mounted:function(){this.startmarquee(20,40,50)}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"centerView2"},[t._m(0),t._v(" "),e("div",{staticClass:"WXbody"},[e("div",{staticClass:"WXDescrible"},[t._v("纪念母校复校40周年、95周年")]),t._v(" "),t._m(1),t._v(" "),t.donates?e("div",{attrs:{id:"WXCon"}},t._l(t.donates,function(s){return e("ul",{key:s.name,staticClass:"WXCon-list"},[e("li",{staticClass:"WXCon-lis clear",class:{strengthen:s.money>1e3}},[e("div",{staticClass:"WXtitlis1"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"WXtitlis1"},[t._v(t._s(s.grade))]),t._v(" "),e("div",{staticClass:"WXtitlis1"},[t._v(t._s(s.money))]),t._v(" "),e("div",{staticClass:"WXtitlis1"},[t._v(t._s(s.date))])])])})):e("div",{staticClass:"net_error"},[e("p",[t._v("服务器异常")]),t._v(" "),e("p",[t._v("请联系坚坚老师处理")]),t._v(" "),e("p",[t._v("电话：15650705562")]),t._v(" "),e("p",[t._v("微信：506177837")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"WXtop"},[s("img",{attrs:{src:"http://pb0geuvxr.bkt.clouddn.com/mp/xyhweb/donation/ganen.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"WXtit"},[s("div",{staticClass:"WXtitlis"},[this._v("姓名")]),this._v(" "),s("div",{staticClass:"WXtitlis"},[this._v("入学年级")]),this._v(" "),s("div",{staticClass:"WXtitlis"},[this._v("捐赠金额")]),this._v(" "),s("div",{staticClass:"WXtitlis"},[this._v("捐赠时间")])])}]};var _=e("VU/8")(d,u,!1,function(t){e("IViw")},"data-v-9a377cd8",null).exports;n.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"HelloWorld",component:_}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:a},template:"<App/>"})},jNCn:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b6df3db3f9e6593e3823.js.map