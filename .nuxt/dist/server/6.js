exports.ids = [6];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./pages/layouts/index.vue?vue&type=template&id=77d8c70c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"navbar navbar-light\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/"}},[_vm._v("Home\n      ")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"exact":"","to":"/"}},[_vm._v("Home\n          ")])],1),_vm._ssrNode(" "),(_vm.user)?[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/editor"}},[_c('i',{staticClass:"ion-compose"}),_vm._v(" New Post\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Settings\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{name:'profile',params:{username:_vm.user.username}}}},[_c('img',{staticClass:"user-pic",attrs:{"src":_vm.user.image}}),_vm._v("\n              "+_vm._s(_vm.user.username)+"\n            ")])],1),_vm._ssrNode(" <li class=\"nav-item\"><div class=\"nav-link\" style=\"color:red;cursor: pointer\">\n              Exit\n            </div></li>")]:[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/login"}},[_vm._v("\n              Sign in\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/register"}},[_vm._v("\n              Sign up\n            ")])],1)]],2)],2)]),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" <footer><div class=\"container\"><a href=\"/\" class=\"logo-font\">conduit</a> <span class=\"attribution\">\n        An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design licensed under MIT.\n      </span></div></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/layouts/index.vue?vue&type=template&id=77d8c70c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.3@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./pages/layouts/index.vue?vue&type=script&lang=js&
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

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var layoutsvue_type_script_lang_js_ = ({
  name: 'LayoutIndex',
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    outLogin() {
      Cookie.remove('user');
      this.$store.commit("delUser");
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/layouts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutsvue_type_script_lang_js_ = (layoutsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/layouts/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4c93dbb2"
  
)

/* harmony default export */ var layouts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map