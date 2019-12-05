require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(34);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51f5947f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51f5947f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51f5947f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\list\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51f5947f", Component.options)
  } else {
    hotAPI.reload("data-v-51f5947f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: []
    };
  },
  onLoad: function onLoad(option) {

    this.list = __webpack_require__(37)("./" + option.type + '.json');
    console.log(this.list);
  },


  methods: {},

  created: function created() {}
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./排行榜.json": 38,
	"./收藏.json": 39,
	"./热门.json": 40
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = [{"name":"少年的你","rate":"8.9","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/ead6e3c88b2d3848a9515931ac032176.jpg","actor":"主演：周冬雨、易烊千玺","content":"校园霸凌"},{"name":"罗小黑战记 ","rate":"8.5","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/57d8339a81d5045ba5f35643921badb8.jpg","actor":"主演：山新","content":"究竟何处才是真正的归属"},{"name":"扫毒2","rate":"8.5","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/eab94947790c554b44a91f820efa68c0.jpg","actor":"主演：刘德华、古天乐","content":"一场天地对决一触即发"},{"name":"X战警：黑凤凰","rate":"9.3","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/4773e1e4015b223cf6cff2b0069f2b32.jpg","actor":"主演：苏菲·特纳","content":"黑凤凰"}]

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = [{"name":"JOKER","rate":"9.2","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/958da663aaf5781c34cf55a31a9a2830.jpg","actor":"主演：杰昆·菲尼克斯","content":"蝙蝠侠的宿敌“小丑”"},{"name":"狮子王","rate":"9.3","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/RHKBd.jpg","actor":"主演：唐纳德·格洛弗","content":"成为森林之王"},{"name":"人间·喜剧","rate":"8.5","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/e59b450c339e860d963df81be0c1c928.jpg","actor":"主演：艾伦","content":"时代狂人"},{"name":"新封神之姜子牙 ","rate":"8.6","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/11825adef82e4a3b0c66ce22906f3810.jpg","actor":"主演：陈浩民 ","content":"为天下之事倾尽一生"}]

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = [{"name":"攀登者","rate":"9.1","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/d6f1b4c734b5eb8b0dcf6546ebad7830.jpg","actor":"主演：吴京","content":"生与死的挑战"},{"name":"JOKER","rate":"9.2","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/958da663aaf5781c34cf55a31a9a2830.jpg","actor":"主演：杰昆·菲尼克斯","content":"蝙蝠侠的宿敌“小丑”"},{"name":"哪吒之魔童降世","rate":"9.5","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/a3a7554ee99d95153ea400096b09b012.jpg","actor":"主演：吕艳婷","content":"哪吒降世"},{"name":"蜘蛛侠：英雄归来2","rate":"9.0","image":"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/68d020cebe1b9aabba88a754a36fe1fb.jpg","actor":"主演：汤姆·赫兰德","content":"蜘蛛侠：决战千里"}]

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.list), function(item, index) {
    return _c('i-card', {
      key: item,
      attrs: {
        "i-class": "split",
        "title": item.name,
        "extra": item.rate,
        "thumb": item.image,
        "mpcomid": '0_' + index
      }
    }, [_c('view', {
      slot: "content"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_vm._v(_vm._s(item.actor))])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51f5947f", esExports)
  }
}

/***/ })

},[33]);