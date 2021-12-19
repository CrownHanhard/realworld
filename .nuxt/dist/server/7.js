exports.ids = [7];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=4e5b7493&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-4e5b7493><div class=\"container\" data-v-4e5b7493><div class=\"row\" data-v-4e5b7493><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-4e5b7493><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-4e5b7493> <h4 data-v-4e5b7493>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-4e5b7493>"+_vm._ssrEscape(_vm._s(_vm.profile.bio)+" ")+"</p> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active:_vm.profile.following}))+" data-v-4e5b7493><i class=\"ion-plus-round\" data-v-4e5b7493></i>\n             \n            Follow Eric Simons\n          </button></div></div></div></div> <div class=\"container\" data-v-4e5b7493><div class=\"row\" data-v-4e5b7493><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-4e5b7493><div class=\"articles-toggle\" data-v-4e5b7493><ul class=\"nav nav-pills outline-active\" data-v-4e5b7493><li class=\"nav-item\" data-v-4e5b7493><a href class=\"nav-link active\" data-v-4e5b7493>My Articles</a></li> <li class=\"nav-item\" data-v-4e5b7493><a href class=\"nav-link\" data-v-4e5b7493>Favorited Articles</a></li></ul></div> <div class=\"article-preview\" data-v-4e5b7493><div class=\"article-meta\" data-v-4e5b7493><a href data-v-4e5b7493><img src=\"http://i.imgur.com/Qr71crq.jpg\" data-v-4e5b7493></a> <div class=\"info\" data-v-4e5b7493><a href class=\"author\" data-v-4e5b7493>Eric Simons</a> <span class=\"date\" data-v-4e5b7493>January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\" data-v-4e5b7493><i class=\"ion-heart\" data-v-4e5b7493></i> 29\n            </button></div> <a href class=\"preview-link\" data-v-4e5b7493><h1 data-v-4e5b7493>How to build webapps that scale</h1> <p data-v-4e5b7493>This is the description for the post.</p> <span data-v-4e5b7493>Read more...</span></a></div> <div class=\"article-preview\" data-v-4e5b7493><div class=\"article-meta\" data-v-4e5b7493><a href data-v-4e5b7493><img src=\"http://i.imgur.com/N4VcUeJ.jpg\" data-v-4e5b7493></a> <div class=\"info\" data-v-4e5b7493><a href class=\"author\" data-v-4e5b7493>Albert Pai</a> <span class=\"date\" data-v-4e5b7493>January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\" data-v-4e5b7493><i class=\"ion-heart\" data-v-4e5b7493></i> 32\n            </button></div> <a href class=\"preview-link\" data-v-4e5b7493><h1 data-v-4e5b7493>The song you won't ever stop singing. No matter how hard you try.</h1> <p data-v-4e5b7493>This is the description for the post.</p> <span data-v-4e5b7493>Read more...</span> <ul class=\"tag-list\" data-v-4e5b7493><li class=\"tag-default tag-pill tag-outline\" data-v-4e5b7493>Music</li> <li class=\"tag-default tag-pill tag-outline\" data-v-4e5b7493>Song</li></ul></a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=4e5b7493&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/profile.js
 // 获取公共文章列表

const getOwnProfiles = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.3@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "profileIndex",
  middleware: 'authenticated',

  async asyncData({
    params
  }) {
    const {
      data
    } = await getOwnProfiles(params.username);
    return {
      profile: data.profile
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e5b7493",
  "137bc947"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map