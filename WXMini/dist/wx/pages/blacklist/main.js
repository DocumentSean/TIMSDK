require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ "7nvq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");

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
    return {};
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])({
    blacklist: function blacklist(state) {
      return state.user.blacklist;
    }
  })),
  methods: {
    // 去用户详情
    toDetail: function toDetail(id) {
      var _this = this;

      var option = {
        userIDList: [id]
      };
      wx.$app.getUserProfile(option).then(function (res) {
        var userProfile = res.data[0];
        switch (userProfile.gender) {
          // TODO: 修改性别
          case _this.TIM.TYPES.GENDER_UNKNOWN:
            userProfile.gender = _this.$type.GENDER_UNKNOWN;
            break;
          case _this.TIM.TYPES.GENDER_MALE:
            userProfile.gender = _this.$type.GENDER_MALE;
            break;
          case _this.TIM.TYPES.GENDER_FEMALE:
            userProfile.gender = _this.$type.GENDER_FEMALE;
            break;
        }
        _this.$store.commit('updateUserProfile', userProfile);
        var url = '../detail/main?isGroup=' + false;
        wx.navigateTo({ url: url });
      });
    }
  }
});

/***/ }),

/***/ "BvzH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("7nvq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_67fa5f29_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("EOdW");
function injectStyle (ssrContext) {
  __webpack_require__("oeIv")
}
var normalizeComponent = __webpack_require__("ybqe")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67fa5f29"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_67fa5f29_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "EOdW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "blacklist"
  }, [_c('div', {
    staticClass: "slot"
  }, [_vm._v("黑名单")]), _vm._v(" "), _c('div', {
    staticClass: "wrapper"
  }, [(_vm.blacklist.length === 0) ? _c('div', {
    staticClass: "none"
  }, [_vm._v("\n      你还没有拉黑任何人哦\n    ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.blacklist), function(id, index) {
    return _c('div', {
      key: id,
      staticClass: "item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(id)
        }
      }
    }, [_vm._v("\n      " + _vm._s(id) + "\n    ")])
  })], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "oeIv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yZeT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("5nAL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("BvzH");



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},["yZeT"]);