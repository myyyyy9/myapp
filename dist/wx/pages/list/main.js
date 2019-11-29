require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(14);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51f5947f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
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
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
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

    this.list = __webpack_require__(17)("./" + option.type + '.json');
    console.log(this.list);
  },


  methods: {},

  created: function created() {}
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./排行榜.json": 18,
	"./收藏.json": 19,
	"./热门.json": 20
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
webpackContext.id = 17;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = [{"name":"排行榜1","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容1"},{"name":"排行榜2","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容2"},{"name":"排行榜3","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容3"},{"name":"排行榜4","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容4"}]

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = [{"name":"收藏1","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容1"},{"name":"收藏2","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容2"},{"name":"收藏3","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容3"},{"name":"收藏4","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容4"}]

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = [{"name":"热门1","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容1"},{"name":"热门2","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容2"},{"name":"热门3","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容3"},{"name":"热门4","rate":"评分","image":"https://i.loli.net/2017/08/21/599a521472424.jpg","actor":"主演","content":"内容4"}]

/***/ }),
/* 21 */
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
],[13]);