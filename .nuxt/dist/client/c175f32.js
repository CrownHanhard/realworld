(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(t,e,r){"use strict";r.d(e,"f",(function(){return o})),r.d(e,"h",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return m})),r.d(e,"g",(function(){return v})),r.d(e,"a",(function(){return O}));var n=r(66),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(data){return Object(n.b)({method:"GET",url:"/api/articles",data:data})},d=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},O=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})}},275:function(t,e,r){"use strict";r.r(e);r(37),r(24),r(49),r(50);var n=r(21),o=r(4),article=(r(36),r(132),r(23),r(40),r(38),r(13),r(39),r(130),r(194));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"authenticated",name:"editorIndex",data:function(){return{article:{title:"",description:"",body:"",tagList:""}}},methods:{onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isEmpty(t.article)){e.next=4;break}return alert("请核实内容后在提交"),e.abrupt("return",!1);case 4:return r=l(l({},t.article),{},{tagList:t.article.tagList.split(",")}),e.next=7,Object(article.c)(r).then((function(){t.$router.push("/")}));case 7:case"end":return e.stop()}}),e)})))()},isEmpty:function(t){var e=1;return Array.from(Object.entries(t)).forEach((function(t){e&=!!t[1]})),!!e}}},f=r(30),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{placeholder:"Article Title",type:"text"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{placeholder:"What's this article about?",type:"text"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{placeholder:"Write your article (in markdown)",rows:"8"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tagList,expression:"article.tagList"}],staticClass:"form-control",attrs:{placeholder:"Enter tags separated by ,",type:"text"},domProps:{value:t.article.tagList},on:{input:function(e){e.target.composing||t.$set(t.article,"tagList",e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"})]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.onSubmit}},[t._v("\n              Publish Article\n            ")])])])])])])])}),[],!1,null,"76631dea",null);e.default=component.exports}}]);