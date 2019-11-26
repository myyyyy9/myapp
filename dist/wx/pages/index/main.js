require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fdb6032_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5fdb6032"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fdb6032_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fdb6032", Component.options)
  } else {
    hotAPI.reload("data-v-5fdb6032", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title_name: "推荐",
      grids: [{ title: "热门", image: "/static/images/1.png" }, { title: "排行榜", image: "/static/images/2.png" }, { title: "收藏", image: "/static/images/3.png" }],
      top: [{ name: "电影名", actor: "主演", image: "https://i.loli.net/2017/08/21/599a521472424.jpg", remark: "评价", content: "内容" }, { name: "电影名", actor: "主演", image: "https://i.loli.net/2017/08/21/599a521472424.jpg", remark: "评价", content: "内容" }, { name: "电影名", actor: "主演", image: "https://i.loli.net/2017/08/21/599a521472424.jpg", remark: "评价", content: "内容" }, { name: "电影名", actor: "主演", image: "https://i.loli.net/2017/08/21/599a521472424.jpg", remark: "评价", content: "内容" }],
      imgUrls: ['http://www.canyin88.com/uploads/image/2019/04/16/1555378220872933.jpg', 'http://www.canyin88.com/uploads/image/2019/04/15/1555321255843942.jpg', 'http://www.canyin88.com/uploads/190415/99ad8154e7332ca96ccb323580b3b8a2_3.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    };
  },


  methods: {
    goType: function goType(type) {
      console.log(type);
      var url = '../list/main?type=' + type.title;
      global.mpvue.navigateTo({ url: url });
    }
  },

  created: function created() {}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    staticStyle: {
      "height": "200px"
    },
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: item
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "src": item
      }
    })])], 1)
  })), _vm._v(" "), _c('i-grid', {
    attrs: {
      "i-class": "no-border",
      "mpcomid": '4'
    }
  }, _vm._l((_vm.grids), function(grid, index) {
    return _c('i-grid-item', {
      key: grid,
      attrs: {
        "i-class": "no-border",
        "eventid": '0_' + index,
        "mpcomid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.goType(grid)
        }
      }
    }, [_c('i-grid-icon', {
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('image', {
      attrs: {
        "src": grid.image
      }
    })]), _vm._v(" "), _c('i-grid-label', {
      attrs: {
        "mpcomid": '2_' + index
      }
    }, [_vm._v(_vm._s(grid.title))])], 1)
  })), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": _vm.title_name,
      "mpcomid": '6'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, _vm._l((_vm.top), function(item, index) {
    return _c('i-card', {
      key: item,
      attrs: {
        "i-class": "split",
        "title": item.name,
        "extra": item.actor,
        "thumb": item.image,
        "mpcomid": '5_' + index
      }
    }, [_c('view', {
      slot: "content"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_vm._v(_vm._s(item.remark))])])
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fdb6032", esExports)
  }
}

/***/ })
],[8]);