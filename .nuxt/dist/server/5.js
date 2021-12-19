exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 修改用户信息

const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=852d2b56&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-852d2b56><div class=\"row\" data-v-852d2b56><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-852d2b56><h1 class=\"text-xs-center\" data-v-852d2b56>Your Settings</h1> <form data-v-852d2b56><fieldset data-v-852d2b56><fieldset class=\"form-group\" data-v-852d2b56><input placeholder=\"URL of profile picture\" type=\"text\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\" data-v-852d2b56></fieldset> <fieldset class=\"form-group\" data-v-852d2b56><input placeholder=\"Your Name\" type=\"text\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-852d2b56></fieldset> <fieldset class=\"form-group\" data-v-852d2b56><textarea placeholder=\"Short bio about you\" rows=\"8\" class=\"form-control form-control-lg\" data-v-852d2b56>"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-852d2b56><input placeholder=\"Email\" type=\"text\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-852d2b56></fieldset> <fieldset class=\"form-group\" data-v-852d2b56><input placeholder=\"Password\" type=\"password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-852d2b56></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-852d2b56>\n              Update Settings\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=852d2b56&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.3@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: "settingsIndex",
  middleware: 'authenticated',

  data() {
    return {
      user: {
        username: '',
        email: '',
        bio: '',
        image: '',
        password: ''
      }
    };
  },

  mounted() {
    this.user.username = this.$store.state.user.username;
    this.user.email = this.$store.state.user.email;
  },

  methods: {
    async onSubmit() {
      const _data = {
        user: this.user
      };
      const {
        data
      } = await Object(user["c" /* updateUser */])(_data);
      this.$store.commit('setUser', data.user);
      Cookie.remove('user');
      Cookie.set('user', JSON.stringify(data.user));
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "852d2b56",
  "bf882abe"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map